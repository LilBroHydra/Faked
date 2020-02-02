/*CMD
  command: /helptext
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("admin")
if(data.chat.chatid==admin){
Bot.runCommand("/1text")}else{
Bot.runCommand("/menu")}
