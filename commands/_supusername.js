/*CMD
  command: /supusername
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
Bot.setProperty("100", tele, "string");
Bot.sendMessage("✅ Support name set to "+tele)
}else{
Bot.sendMessage("❌ Invaild fotmat enter correct format\n!Enter username without @\nFor example: `/supusername username`")}

}else{
Bot.runCommand("/menu")}
