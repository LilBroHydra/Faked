/*CMD
  command: /deedvp 1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var last_run_at = User.getProperty("last_run_at");
if(last_run_at){
   duration_in_hours = ((new Date) - last_run_at) / 1000/60/60;
}else{
   // It is the first time!
   duration_in_hours = 99;
}
if(duration_in_hours>=1){
   User.setProperty("last_run_at", (new Date), "datetime")
   
   let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let comm = Bot.getProperty("wet"+user.telegramid)
let tx = Bot.getProperty("tx"+user.telegramid)
let options = { disable_web_page_preview: true }
if(referrer){

  let Res = Libs.ResourcesLib.userRes("activeinv")
let amount = Res.value()
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);

  let refcom = comm * 0.12;

  referrerRes.add(refcom);
  Bot.sendMessageToChatWithId(referrer.telegramid, "You have earned "+refcom+" BTC from your friends investment");
Bot.sendMessage("✅ Your deposit of "+comm+ "BTC has been approved \n✅ You got plan (200% per every 48 hours for 2 days.)  Your total ROI will be 200%\n\n"+"[Deposit txnid]"+"("+tx+")"+"\n\n🎉 Happy earning 🎉",options)
  }
// update keyboard now
var buttons = [
[{title:"Start Growth",command: "/deep 1"}]]

}
if(params=="1"){
User.setProperty("msg_id", request.message_id, "string");
User.getProperty ("msg_id")
buttons = [
[{title: "Menu", command:"/start"}]]
   Bot.editInlineKeyboard(buttons,request.message.message_id)
}
