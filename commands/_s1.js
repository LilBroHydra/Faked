/*CMD
  command: /s1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

time = new Date();
time = time.toLocaleString();
let cur =Bot.getProperty("currency")
let a = Bot.getProperty("p1")
let b = Bot.getProperty("p2")
let c = Bot.getProperty("p3")
let wallet = Bot.getProperty("wallet"+c)
Bot.setProperty("whs"+c,"Last  withdrawal history: "+"\n"+time+" \n"+"Amount: "+b+" "+cur+"\nStatus: "+"✅ "+" PAID"+"\n\n[VIEW DETAILS]("+data.message+")","string")
Bot.sendMessageToChatWithId(c,"✅ Your withdraw has been approved. \n\n💯 Amount: "+b+" "+cur+" \n📁 Payment has been sent to your wallet: "+" \n"+wallet+"\n\n🌐 Transection Link -"+data.message)
let at = Bot.getProperty("ab")
Api.sendMessage({ chat_id:at, text: "✅ Withdrawal amount has been successfully paid\n👤 User : "+c+" \n☑️Amount: "+b+" "+cur+"\n🌐 Transection link: "+" \n"+data.message});
let options = { disable_web_page_preview: true }
Bot.sendMessage("[✅ DONE]("+data.message+")",options)
