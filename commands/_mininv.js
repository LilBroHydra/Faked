/*CMD
  command: /mininv
  help: 
  need_reply: 
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
Bot.setProperty("mininv", tele, "string");
Bot.sendMessage("✅ Minimum investment set to "+tele)
}else{
Bot.sendMessage("❌ Invaild format enter correct format\nFor example: `/mininv 0.001`")}

}else{
Bot.runCommand("/menu")}
