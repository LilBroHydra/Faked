/*CMD
  command: /1text
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter the text for your bot that will show on help button🔻
  keyboard: 
  aliases: 
CMD*/

let admin =Bot.getProperty("admin")
if(data.chat.chatid==admin){
Bot.setProperty("help",data.message,"string")
Bot.sendMessage("✅ Text updated successfully")
}else{
Bot.runCommand("/menu")}
