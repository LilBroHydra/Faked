/*CMD
  command: /wdprivate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("currency");
let min =Bot.getProperty("minm");
let u = Bot.getProperty("mini");
let s = Bot.getProperty("minf");
var buttons = [
[{title: "MANUAL", command:"w1"},
{title: "INSTANT",command: "w2"}]]
Bot.sendInlineKeyboard(buttons,"✅ Select your withdrawal type\n\n🔰 For manual withdraw:\nMinimum: "+min+" "+cur+" "+"\nFee : No Fee\nPayment time: 24 hour(Max)\n\n🔰 For instant withdraw:\nMinimum: "+u+" "+cur+" "+"\nFee : "+s+" "+cur+"\nPayment time: 1 second ")
