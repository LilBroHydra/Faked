/*CMD
  command: /sett
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
let h = arr[1];
Libs.CoinPayments.setPrivateKey(tele);
Libs.CoinPayments.setPublicKey(h);
Bot.sendMessage("✅ Success"+"\nYour private key: "+tele+" \nYour private key: "+h)
}else{
Bot.sendMessage("❌ Invaild format please enter correct format\nFor example: `/sett yourprivatekey yourpublic key` ")}
}else{
Bot.runCommand("/menu")}
