/*CMD
  command: jnj
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("currency");
let zero = Bot.getProperty("zero")
let refinv = Libs.ResourcesLib.userRes("refinv");
let prof = Libs.ResourcesLib.userRes("prof");
let u = Libs.ReferralLib.currentUser.attractedByUser();

let lib = Libs.ReferralLib
refList = lib.currentUser.refList.get();
if(refList.length>0){
  totalRef = refList.length;
  for(i in refList){
    user = refList[i];
  }
}else{
  totalRef = "0";
}
if( u){
Bot.sendMessage("Referral System:\n🥇 Level 12%\n🥈 Level 5% "+"\n\n🔼 Your upline: "+u.first_name+" "+u.last_name+" \n\nYour refferral stats:\nTotal refferrals: "+totalRef+" \nTotal refferral investment: "+" \n"+refinv.value().toFixed(zero)+" "+cur+" \nTotal bonus earned: "+" \n"+prof.value().toFixed(zero)+" "+cur+"\n\nYour Referral Link to share with your Friends:")
let parther_link=Libs.ReferralLib.currentUser.getRefLink("CryptoDoubleBtcbot");
let un= "https://t.me/share/url?url=http%3A//"+parther_link
var buttons=[
[{ title:"🔗 Share your reffer link 🔗",url: "https://t.me/share/url?url="+parther_link }]];
Bot.sendInlineKeyboard(buttons,parther_link)
}else{
Bot.sendMessage("Referral System:\n🥇 Level 12%\n🥈 Level 5% "+"\n\n🔼 Your upline: "+" no upline"+" "+" \n\nYour refferral stats:\nTotal refferrals: "+totalRef+" \nTotal refferral investment: "+" \n"+refinv.value().toFixed(zero)+" "+cur+" \nTotal bonus earned: "+" \n"+prof.value().toFixed(zero)+" "+cur+"\n\nYour Referral Link to share with your Friends:")
let parther_link=Libs.ReferralLib.currentUser.getRefLink("mywalletbtc_bot");
let un= "https://t.me/share/url?url=http%3A//"+parther_link
var buttons=[
[{ title:"🔗 Share your reffer link 🔗",url: "https://t.me/share/url?url="+parther_link }]];
Bot.sendInlineKeyboard(buttons,parther_link)}
