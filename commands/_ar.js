/*CMD
  command: /ar
  help: 
  need_reply: 
  auto_retry_time: 600
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = Libs.ResourcesLib.userRes("wallet");
let bankDeposit = Libs.ResourcesLib.userRes("usd");

// it is initial res value
let baseValue = bankDeposit.baseValue();

// total income by percent
let delta = bankDeposit.value() - baseValue;

// add all income to wallet
wallet.add(delta);
// and remove it from bank deposit
bankDeposit.set(baseValue);
Bot.sendMessage("You got profit")
