/*CMD
  command: /coc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send me the amount bigger than or equal to <mininv> <currency> that you want to reinvest your funds
  keyboard: 
  aliases: reinvest ♻️
CMD*/

let s= Bot.getProperty("mininv")
let cur= Bot.getProperty("currency")
let balance = Libs.ResourcesLib.userRes("balance");
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(data.message)){
Bot.sendMessage("Invaild amount")
}else{
if(data.message>=s){
User.setProperty("rei",data.message,"string")
var buttons = [
[{title: "Confirm", command:"/reinv"}]]
Bot.sendInlineKeyboard(buttons," Confirm that you want to reinvest amount of "+data.message+" "+cur)
} else{
Bot.sendMessage(" Please enter amount between "+s+ " "+cur)}}
