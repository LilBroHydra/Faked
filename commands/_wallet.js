/*CMD
  command: /wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send me your personal btc address where we sent your payments
  keyboard: 
  aliases: 
CMD*/

if(message.length==34){
      User.setProperty("wallet", data.message, "string");
Bot.setProperty("wallet"+user.telegramid, data.message, "string");
      Bot.sendMessage("✔️ Your new wallet address successfully saved "+                      "\n\nYour new wallet address is: *<wallet>*");
   }else{
      Bot.sendMessage(" Invaild btc address please try again");
   }
