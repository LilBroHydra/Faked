/*CMD
  command: ta
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
    let res = Libs.ResourcesLib.userRes("money");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("money", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("Transfered USD: " + amount)
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
let amount = arr[1];
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);

  let refcom = amount * 0.12;

  referrerRes.add(refcom);
  Bot.sendMessageToChatWithId(referrer.telegramid, "You got 12% commission from referral' investment, Check your balance");

  }
