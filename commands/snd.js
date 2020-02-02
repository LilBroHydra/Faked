/*CMD
  command: snd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit");
Bot.sendMessage("h "+deposit.value())
