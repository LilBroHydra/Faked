/*CMD
  command: /denep 1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

time = new Date();
time = time.toLocaleString();
let x =Bot.getProperty("reffer"+referrer.telegramid)
let x2 =Bot.getProperty("reffer"+referrer.telegramid+2)
let x3 =Bot.getProperty("reffer"+referrer.telegramid+3)
let x4 =Bot.getProperty("reffer"+referrer.telegramid+4)
let x5 =Bot.getProperty("reffer"+referrer.telegramid+5)
let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let comm = Bot.getProperty("wet"+user.telegramid)
let tx = Bot.getProperty("tx"+user.telegramid)
let options = { disable_web_page_preview: true }
let cur = Bot.getProperty("currency");
let zero = Bot.getProperty("zero")
let s =Bot.getProperty(" autopost")
if(referrer){

  let Res = Libs.ResourcesLib.userRes("activeinv")
let amount = Res.value()
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
let reft = Libs.ResourcesLib.anotherUserRes("refinv", referrer.telegramid);
let prof = Libs.ResourcesLib.anotherUserRes("prof", referrer.telegramid);
let r1 = Libs.ResourcesLib.userRes("r1")
let e =comm*1
reft.add(e)
 let refcom = comm * 0.12;
prof.add(refcom)
  referrerRes.add(refcom);
  Bot.sendMessageToChatWithId(referrer.telegramid, "You have earned "+refcom+" BTC from your friends investment");
Bot.sendMessage("✅ Your deposit of "+comm+" "+cur+" has been approved \n✅ You got plan (200% per every 48 hours for 2 days.)  Your total ROI will be 200%\n\n"+"[DEPOSIT TXNID]"+"("+tx+")"+"\n\n🎉 Happy earning 🎉",options)
let f =Bot.getProperty("deptx"+user.telegramid)
if(f=null){Bot.setProperty("deptx"+user.telegramid," Your last deposit list: "+" \n"+time+"\n"+"Amount: "+e.toFixed(zero)+" "+cur+" \nStatus: ✅Confirmed"+"\n\n"+"["+"VIEW TRANSECTION"+"]"+"("+tx+")","string")}else{
Bot.setProperty("deptx"+user.telegramid+1," Your last deposit list: "+" \n"+time+"\n"+"Amount: "+e.toFixed(zero)+" "+cur+" \nStatus: ✅Confirmed"+"\n\n"+"["+"VIEW TRANSECTION"+"]"+"("+tx+")","string")}
if ( x =null){Bot.setProperty("reffer"+referrer.telegramid, " \nYour last refferral bonus list: "+" \n"+time+" \nLast reffer invest:"+"\n"+e.toFixed(zero)+" "+cur+"\nLast bonus recived:" +"\n"+refcom.toFixed(zero)+" "+cur,'string');}else{
Bot.setProperty("reffer"+referrer.telegramid+2, " \nYour last refferral bonus list: "+" \n"+time+" \nLast reffer invest:"+"\n"+e.toFixed(zero)+" "+cur+"\nLast bonus recived:" +"\n"+refcom.toFixed(zero)+" "+cur,'string');}else{
if (x3= null){
Bot.setProperty("reffer"+referrer.telegramid+3, " \nYour last refferral bonus list: "+" \n"+time+" \nLast reffer invest:"+"\n"+e.toFixed(zero)+" "+cur+"\nLast bonus recived:" +"\n"+refcom.toFixed(zero)+" "+cur,'string');}else{
if(x4=null){
Bot.setProperty("reffer"+referrer.telegramid+4, " \nYour last refferral bonus list: "+" \n"+time+" \nLast reffer invest:"+"\n"+e.toFixed(zero)+" "+cur+"\nLast bonus recived:" +"\n"+refcom.toFixed(zero)+" "+cur,'string');}else{
if(x5=null){
Bot.setProperty("reffer"+referrer.telegramid+5, " \nYour last refferral bonus list: "+" \n"+time+" \nLast reffer invest:"+"\n"+e.toFixed(zero)+" "+cur+"\nLast bonus recived:" +"\n"+refcom.toFixed(zero)+" "+cur,'string');}

 Api.sendMessage({ chat_id:s, text:"✅ New investment recived \n✔️ nvestment by: "+user.first_name+"***"+" \n💯 Amount: "+comm+" "+cur+"\n\n📔Transection details:\n"+tx})
 }
// update keyboard now
var buttons = [
[{title:"Start Growth",command: "/deep 1"}]]


if(params=="1"){
User.setProperty("msg_id", request.message_id, "string");
let message_id=User.getProperty ("msg_id")
buttons = [
[{title: "Menu", command:"/start"}]]
   Bot.editInlineKeyboard(buttons,message_id," hi")
}
