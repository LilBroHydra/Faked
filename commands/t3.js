/*CMD
  command: t3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

property = Bot.getProperty("reffer"+user.telegramid)
let x  = Bot.getProperty("reffer"+user.telegramid+1)

if(property==null){
Bot.sendMessage("_No refferral investment found_")
}else{
Bot.sendMessage(property)}
