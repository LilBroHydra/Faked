/*CMD
  command: /cur
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
Bot.setProperty("currency", tele, "string");
Bot.sendMessage("✅ Currency set to "+tele)
}else{
Bot.sendMessage("❌ Invaild fotmat enter correct format\nFor example: `/cur BTC`")}

}else{
Bot.runCommand("/menu")}
