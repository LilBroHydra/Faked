/*CMD
  command: /faqtext
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
Bot.runCommand("/faqset")}else{
Bot.runCommand("/menu")}
