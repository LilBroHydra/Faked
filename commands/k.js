/*CMD
  command: k
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("money");

Bot.sendMessage("Cur your money: " + res.value());
