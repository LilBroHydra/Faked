/*CMD
  command: gro
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let btc = Libs.ResourcesLib.userRes("btc");
let deposit = Libs.ResourcesLib.userRes("usd");
deposit.set(100)
let secs_in_1minutes = 1 * 60;
  deposit.growth.addCompoundInterest({percent: 9, interval: secs_in_1minutes, 
max_iterations_count: 8 });
