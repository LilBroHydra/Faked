/*CMD
  command: gg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(data.content);
  var BTC_USD_Price = result.data.quotes.USD.price;
 var u =BTC_USD_Price*1
 Bot.sendMessage("Current Bitcoin price: " + u.toFixed(2) + " $");
