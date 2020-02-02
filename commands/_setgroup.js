/*CMD
  command: /setgroup
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
Bot.setProperty("group", tele, "string");
Bot.sendMessage("✅ Inline buttons for chat group set to "+tele)
}else{
Bot.sendMessage("❌ Invaild fotmat enter correct format\n!Enter group username without @\nFor example: `/setgroup legitgroup`")}

}else{
Bot.runCommand("/menu")}
