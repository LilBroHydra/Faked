/*CMD
  command: /gen
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: deposit 💵
CMD*/

var result = JSON.parse(data.content);
  var BTC_USD_Price = result.data.quotes.USD.price;
 var u =BTC_USD_Price*1
let cur = Bot.getProperty("currency");
let min = Bot.getProperty("mininv");
Bot.sendMessage("Here is your personal "+cur+" address for your Investments:")
let j = Bot.getProperty("dep11"+user.telegramid+cur);

if ( j == null){
Bot.sendMessage("✋✋_Please kindly wait some seconds we are creating a uniqe deposit address for your investment........._")
Libs.CoinPayments.apiCall({
fields: { cmd: "get_callback_address",
          currency: cur,
          label: user.firstname+" "+" @"+user.username+" "+user.telegramid
},
onSuccess: '/success'
});}else{
Bot.sendMessage(" `"+j+"`")

Bot.sendMessage("❗️❗️ Note if you send less than "+min+" "+cur+"  your deposit will rejected. Send correct amount on your deposit address. \n\nCurrent Rate1 "+cur+"  ="+" "+ u+" $")}
