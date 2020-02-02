/*CMD
  command: /ad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("admin",data.message,"string");
Bot.sendMessage("Admin Set To " +message)
