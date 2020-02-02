/*CMD
  command: /calc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter how many <currency> you want to invest on our platform
  keyboard: 
  aliases: calculator 🧮
CMD*/

let x = data.message*2
let cur = Bot.getProperty("currency");
var buttons =[
[{title:"➕ Invest now ➕",command: "/gen"}]];
Bot.sendInlineKeyboard(buttons,"If you invest: "+data.message+" "+cur+" you will recive such profit"+"\nIn 2 days (48 hours) You will recive "+x+" "+cur+"\n\n🎉 Your total profit will be "+x/2+" "+cur)
