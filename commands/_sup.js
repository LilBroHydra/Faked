/*CMD
  command: /sup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📞 support
CMD*/

let u = Bot.getProperty("100")
Bot.sendMessage("📞 Support username:\n@"+u)
