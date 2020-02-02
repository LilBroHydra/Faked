/*CMD
  command: /group
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: chatroom 📡
CMD*/

let h =Bot.getProperty("group")
var buttons =[
[{title: "Join Group", url:"t.me/"+h}]];

Bot.sendInlineKeyboard(buttons,"📡  Join our community group for any help");
