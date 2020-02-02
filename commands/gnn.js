/*CMD
  command: gnn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
  
}
