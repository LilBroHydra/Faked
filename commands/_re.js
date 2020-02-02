/*CMD
  command: /re
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//zayavka
var l = Libs.Lang.get();
var sendc = User.getProperty('send_city');
var send = Bot.getProperty(sendc);
var type = User.getProperty('trtype');
var trtype = Bot.getProperty(type);

but = [
    [{title:'Откуда',command:'send'},{title:'Куда',command:'recieve'}],
  [{title:'Тип кузова',command:'trtype'}],
  [{title:'Комментарий',command:'comment'}],
  [{title:'Очистить',command:'request clear'}],
  [{title:'Готово',command:'request send'}]
];

but2 = [
{title:'Открыть',command:'request msg'}
];
if(!params){
Bot.sendMessage(l.request);
Bot.sendInlineKeyboard(but,"Заявка:");
 } else {
   if (params == 'clear'){
request_msg = request.message.message_id;
User.setProperty('recieve_city');
User.setProperty('send_city');
User.setProperty('trtype');
User.setProperty('comment');
    Bot.editInlineKeyboard(but,request_msg);
  } else if( params == 'send' ){
var trtype = Bot.getProperty(type);
var send = Bot.getProperty(sendc);
       if( trtype.users.indexOf(1) !== -1 & send.users.indexOf(1) !== -1 ){
recieve = User.getProperty('recieve_city');
comment = User.getProperty('comment'); 
  var  msg = 'Заявка от '+user.first_name+'\n'+ 

       '\n\nОткуда: ' + sendc+
     '\n\nKуда: '+recieve+
     '\n\nТип кузова: '+type+
     '\n\nКомментарий: `'+comment+
     '`\n\nНомер телефона: <number>';
   User.setProperty('msg_'+chat.chatid,msg,'string');

    Bot.setProperty('usersid',chat.chatid,'integer');
      var usersid = Bot.getProperty('usersid');
     for(var i in send.users){
      Bot.sendInlineKeyboardToChatWithId( send.users[i],but2,'Вам пришла заявка!' );
      }
     } else {
       Bot.sendMessage('There are no one who is in this city')
     }
  } else if (params == 'request_msg'){
  Bot.sendInlineKeyboard([{title:'Написать клиенту',command:'write '+usersid}],msg);
   }
}
