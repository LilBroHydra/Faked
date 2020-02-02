/*CMD
  command: t1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📥my deposits
CMD*/

let u  = Bot.getProperty("deptx"+user.telegramid+1)
property = Bot.getProperty("deptx"+user.telegramid)
let options = { disable_web_page_preview: true }
if(property==null){
Bot.sendMessage("_No investment found_")
}else{
Bot.sendMessage(property,options)
}
