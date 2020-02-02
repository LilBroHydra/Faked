/*CMD
  command: /remove
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Amount
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("activeinv");
res.remove(8)
