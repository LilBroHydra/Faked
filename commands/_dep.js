/*CMD
  command: /dep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("currency")
let admin =Bot.getProperty("admin")
if(data.chat.chatid==admin){
if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  
let txn = arr[2];  
Bot.setProperty("tx"+telegramid, txn, "string");

  if(!arr[2]){
    Bot.sendMessage("❌ Error.  Please enter correct format."+" \n For example: /dep 606228013 0.001 transection link");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("activeinv");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("activeinv", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("✅ Transfered  " + amount+" "+cur+" successfully to user "+telegramid)

Bot.sendMessageToChatWithId(telegramid,"✅ Deposit detected follow next instuction")
var buttons = [
[{title:"Start Growth",command: "/deep 1"}]]


Bot.sendInlineKeyboardToChatWithId(telegramid, buttons, "Click on start growth button to start your deposit another way your deposit rejected")
Bot.setProperty("wet"+telegramid, amount, "string");
       }
     }else{
        Bot.sendMessage("You have not such "+cur+" " + amount)
     }

  }
}else{
  Bot.sendMessage("❌ Error.  Please enter correct format."+" \n For example: /dep 606228013 0.001 transection link")
}}else{
Bot.runCommand("/menu")}
