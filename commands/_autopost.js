/*CMD
  command: /autopost
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
Bot.setProperty("ab", tele, "string");
Bot.sendMessage("✅ Autopost channel set to "+tele+" \n‼Note:️ Your bot must be admin of your autopost channel.  Without this it will not work")
}else{
Bot.sendMessage("❌ Invaild format enter correct format\nFor example: `/autopost @channelusername`")}

}else{
Bot.runCommand("/menu")}
