/*CMD
  command: /proof
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: payment proof 🔎
CMD*/

let j = Bot.getProperty("pch")
var buttons =[
[{title: "Proof of payments", url:"t.me/"+j}]];

Bot.sendInlineKeyboard(buttons,"Track our all payment with transection link");
