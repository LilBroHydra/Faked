/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: balance 0.00000000 💰, 💰 acount details 💰
CMD*/

let xx = Bot.getProperty("100")
let gh = Bot.getProperty("pch")
let h =Bot.getProperty("group")
Bot.runCommand("2")
var buttons=[
[{title:"🗣 Chat Room",url:"t.me/"+h},{title:"📒 Transections",url:"t.me/"+gh},{title:"☎️ Support",url:"t.me/"+xx}]];
let g=Bot.getProperty("mininv")
let balance = Libs.ResourcesLib.userRes("balance");
let total = Libs.ResourcesLib.userRes("total");
let activeinv = Libs.ResourcesLib.userRes("activeinv");
let commission = Libs.ResourcesLib.userRes("prof");
let cur = Bot.getProperty("currency");
let zero = Bot.getProperty("zero")

Bot.sendInlineKeyboard(buttons,"Your Account Balance: \n"+balance.value().toFixed(zero)+"  "+cur+"\nTotal Reinvestments: \n"+total.value().toFixed(zero)+" "+cur+"\nActive Investments: \n"+activeinv.value().toFixed(zero)+" "+cur+"\nTotal Commissions earned:\n"+commission.value().toFixed(zero)+" "+cur+"\n\nStart now your first Invest with only "+g+" "+cur+"\n\nBase rate: 100% per day (200% every 48 hours for 2 day. Total Roi 200%)")
