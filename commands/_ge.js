/*CMD
  command: /ge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = Libs.ResourcesLib.userRes("wallet");
let bankDeposit = Libs.ResourcesLib.userRes("usd");
Bot.sendMessage("Balance: "+wallet.value()+" \nActive inv: "+bankDeposit.value())
