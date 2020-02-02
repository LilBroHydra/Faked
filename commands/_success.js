/*CMD
  command: /success
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("`"+ options.body.result.address +"`");

let cur = Bot.getProperty("currency");
Bot.setProperty("dep11"+user.telegramid+cur,options.body.result.address  , "string");
