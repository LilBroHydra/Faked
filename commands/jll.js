/*CMD
  command: jll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: N
  keyboard: 
  aliases: 
CMD*/

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

let at = Bot.getProperty(" autopost")
let cur = Bot.getProperty("currency");
let wallet = User.getProperty("wallet")
let btc = Libs.ResourcesLib.userRes("balance");
let amount = data.message;
if(amount<=btc.value()){Bot.sendMessage("You cant withdraw less than "+min+" "+cur)
if(amount>=min){
if(btc.value()>=min){
 btc.removeAnyway(parseFloat(amount));



Bot.sendMessage("💵Your withdrawan was successfull✅"+" \n\n✅Amount withdrawan: "+amount+"\n✅Payement will sent to your wallet: <wallet>"+"\n\n🏧Please allow upto 24 hour for complete your withdrawal"
);
Bot.sendMessageToChatWithId(606228013, "💵 #Withdrawal #Request"+" \n\n->Username:  @" + user.username +"\n->User id:"+"`"+user.telegramid+"`"+ "\n->Requested amount  " +"`"+ amount + "`"+"  DOGE"+"\n-> His wallet address:"+"\n"+"`"+wallet+"`");
var buttons=[
[{title: "✅ Paid ✅", command: "/ws"+" "+ user.telegramid+" "+amount}]]

Bot.sendInlineKeyboardToChatWithId(606228013,"💵 #Withdrawal #Request"+" \n\n->Username:  @" + user.username +"\n->User id:"+"`"+user.telegramid+"`"+ "\n->Requested amount  " +"`"+ amount + "`"+cur+"\n-> His wallet address:"+"\n"+"`"+wallet+"`");

Api.sendMessage({ chat_id: at, text: "📤 New withdrawal request created\n👤 User️: "+user.first_name+"***"+"\n💯 amount :"+data.message+" "+cur+ " \nPayment will sent to his wallet: "+" \n"+"`"+wallet+"`"})
Bot.runCommand("/join")}}
       }else{
Bot.sendMessage("You cannot requested for withdraw now. You need to have at least 50 doge to your balance for avialable to withdraw.Or you can not withdraw biggerthan your acount balance"+" \nYour balance is:  " + btc.value()+"!")
}
