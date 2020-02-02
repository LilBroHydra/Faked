/*CMD
  command: ww
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: withdraw 💳
CMD*/

let btc = Libs.ResourcesLib.userRes("balance");
let min = Bot.getProperty("mininv")
let cur = Bot.getProperty("currency")
if(btc.value()>=min){
Bot.runCommand("w1")} else{
Bot.sendMessage("🔒 Your balance is not enough for withdrawal"+" \n📍Minimum withdrawal amount: "+min+" \n⚙ Your avialable balance: "+btc.value()+" "+cur)}
