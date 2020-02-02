/*CMD
  command: /reinv
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let l =User.getProperty("rei")
let d = l*1
let at = Bot.getProperty("ab")
let min = Bot.getProperty("mininv")
let balance = Libs.ResourcesLib.userRes("balance");
let total = Libs.ResourcesLib.userRes("total");
let cur = Bot.getProperty("currency");
let zero = Bot.getProperty("zero")
if(d>=balance.value()){
Bot.sendMessage("You cant reinvest funds bigger than your acount balance")}else{
if(balance.value()>=min){
let r = balance.value()

User.setProperty("t",r,"string")
let g = User.getProperty("t")
let s = g*1
total.add(d)
balance.remove(d)
Api.sendMessage({ chat_id: at, text: "☑️ New reinvest successfully added"+"\n👤 User: "+user.first_name+" ***"+"\n♻️ Amount: "+d+" "+cur+" \n\n🎉 Happy earing 🎉"})
Bot.sendMessage("✅ Your reinvest amount "+d+" "+cur+" "+"has been successful")}else{
Bot.sendMessage("Not Enough balance to reinvest your funds. You need to have  minimum "+min+" "+cur+" balance for avialable to reinvest your fund")}}
