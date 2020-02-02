/*CMD
  command: w1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send me the amount  that you want to withdraw
📍Minimum withdraw: <mini> <cur>
  ANSWER
  keyboard: 
  aliases: 
CMD*/

time = new Date();
time = time.toLocaleString();
let admin = Bot.getProperty("admin")
let wallet = Bot.getProperty("wallet"+user.telegramid)
var buttons=[
[{title: "I paid this user manually", command: "/ws"+" "+ user.telegramid+" "+data.message+" "+user.telegramid}]]
let tg = 606228013
if(data.message=="❌Cancel❌"){
Bot.runCommand("/menu")
}else{
let s = data.message;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(s)){
Bot.sendMessage("❌You have inputed a wrong amount. Amount must be number only!")
}else{
let value = data.message;

let min = Bot.getProperty("minm")

let at = Bot.getProperty("ab")
let cur = Bot.getProperty("currency");
let btc = Libs.ResourcesLib.userRes("balance");
let amount = data.message;
if(amount<=btc.value()){
if(amount>=min){
if(btc.value()>=min){
Bot.setProperty("g1", amount," string")
Bot.setProperty("whs"+user.telegramid,"Here is your list of last  withdrawal:"+"\n"+time+"\n Amount: "+data.message+" \n Status: "+"⏱ Pending"," string")
 btc.removeAnyway(parseFloat(amount));
Bot.sendMessage("✅ Your withdrawal amount of "+data.message+" "+cur+" has been successfull please allow upto 24 hour to complete your withdrawal");
Bot.sendInlineKeyboardToChatWithId(admin,buttons,"💵 #Withdrawal #Request"+" \n\n->Username:  @" + user.username +"\n->User id:"+"`"+user.telegramid+"`"+ "\n->Requested amount  " +"`"+ amount + "`"+cur+"\n-> His wallet address:"+"\n"+"`"+wallet+"`");
Api.sendMessage({ chat_id:at, text: "📤 New withdrawal request created\n👤 User️: "+user.first_name+"***"+"\n💯 amount :"+data.message+" "+cur+ " \nPayment will sent to his wallet: "+" \n"+wallet})

}}
       }else{
Bot.sendMessage("You cannot requested for withdraw now. You need to have at least "+min+ " "+cur+ "to your balance for avialable to withdraw.Or you can not withdraw biggerthan your acount balance"+" \nYour balance is:  " + btc.value());}}}
