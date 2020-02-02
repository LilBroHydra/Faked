/*CMD
  command: /get
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Id
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(Bot.getProperty("wallet"+data.message))
