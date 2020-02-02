/*CMD
  command: /ws
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  
let name = arr[2];  
// update keyboard now
var buttons = [
[{title:"I paid this user manually",command: "/ws"+" "+telegramid+" "+amount+" "+name}]]

if(params){

buttons = [
[{title: "✅ Paid ✅", command:"/start"}]]
Bot.editInlineKeyboard(buttons)}
Bot.setProperty(" p1", telegramid,"string")
Bot.setProperty("p2",amount,"string")
Bot.setProperty("p3", name,"string")
Bot.runCommand("/s1")
Bot.sendMessage("Send me your payments transection link that will posted on channel and payment user🔻")
