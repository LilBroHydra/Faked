/*CMD
  command: /faqset
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send me the text that will show on FAQ ⁉️ button 🔻
  keyboard: 
  aliases: 
CMD*/

let admin =Bot.getProperty("admin")
if(data.chat.chatid==admin){
Bot.setProperty("faq",data.message,"string")
Bot.sendMessage("✅ Your Bot Faq Text updated successfully")
}else{
Bot.runCommand("/menu")}
