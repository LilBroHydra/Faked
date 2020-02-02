/*CMD
  command: e
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

time = new Date();
time = time.toLocaleString();
let bj = Bot.getProperty("whs"+user.telegramid)
let j1= Bot.getProperty("g1")
if(bj=null){
Bot.setProperty("whs"+user.telegramid,"Here is your list of last 2 withdrawals:"+"\n"+time+"\n Amount: "+j1+" \n Status: "+"⏱ Pending"," string")
}else{
Bot.setProperty("whs"+user.telegramid+1,time+"\n Amount: "+j1+" \n Status: "+"⏱ Pending"," string")}
