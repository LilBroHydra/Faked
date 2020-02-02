/*CMD
  command: /setpch
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
Bot.setProperty("pch", tele, "string");
Bot.sendMessage("✅ Inline buttons payment channel set to "+tele)
}else{
Bot.sendMessage("❌ Invaild fotmat enter correct format\n!Enter channel username without @\nFor example: `/setpch legitbottx`")}

}else{
Bot.runCommand("/menu")}
