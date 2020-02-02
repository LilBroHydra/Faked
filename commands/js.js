/*CMD
  command: js
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("No amount. Need amount");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("activeinv");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("balance", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ) Bot.sendMessage("Transfered USD: " + amount)
Bot.sendMessageToChatWithId(telegramid,"✅ Your deppsit amount of "+amount+" has been recived and confirmed by admin"+"\n✅Plan added: "+" 200% every 48 hours"+\n\n🎉 Happy earning")
       }
     }else{
        Bot.sendMessage("You have not such USD: " + amount)
     }
  }
}else{
  Bot.sendMessage("No params. Need another user TelegramID and AMOUNT")
}
let referrer = Libs.ReferralLib.currentUser.attractedByUser();

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);

  let refcom = amount * 0.12;

  referrerRes.add(refcom);
  Bot.sendMessageToChatWithId(referrer.telegramid, "You got 12% commission from referral' investment, Check your balance");
   }
  }
