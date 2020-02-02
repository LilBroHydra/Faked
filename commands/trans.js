/*CMD
  command: trans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: transections 📁
CMD*/

var buttons= [
[{title: "➕ Deposit", command:" t1"},
{title: "➖ Withdrawal", command:" t2"}],
 [{title:"👥 Refferral",command: "t3"}]];
Bot.sendInlineKeyboard(buttons," Here is your list of last transection");
