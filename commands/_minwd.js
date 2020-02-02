/*CMD
  command: /minwd
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
Bot.setProperty("mini", tele, "string");
Bot.sendMessage("✅ Minimum withdrawal amount set to "+tele)
}else{
Bot.sendMessage("❌ Invaild format enter correct format\nFor example: `/minwd 0.001`")}

}else{
Bot.runCommand("/menu")}
