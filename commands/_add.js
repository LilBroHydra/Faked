/*CMD
  command: /add
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("activeinv");
res.add(8)
let ress = Libs.ResourcesLib.userRes("balance");
ress.add(100)
