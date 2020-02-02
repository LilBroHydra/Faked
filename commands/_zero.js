/*CMD
  command: /zero
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin =Bot.getProperty("admin")
if(data.chat.chatid==admin){
if(params){
  let arr = params.split(" ");
  
  let tele = arr[0];
Bot.setProperty("zero", tele, "string");
Bot.sendMessage("✅ Your bot leading zeros  set to "+tele)
}else{
Bot.sendMessage("❌ Invaild fotmat enter correct format\nFor example: `/zero 8`")}

}else{
Bot.runCommand("/menu")}
