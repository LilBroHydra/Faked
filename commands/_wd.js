/*CMD
  command: /wd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

property = User.getProperty("wallet")
if (property == null){

var buttons = [
    [ {title: "Set Btc Address", command: "/wallet" } ]
]
Bot.sendInlineKeyboard(buttons, "You did not set any wallet address click on Set Btc Address for setup your wallet address")}else{
Bot.runCommand("/wdprivate")}
