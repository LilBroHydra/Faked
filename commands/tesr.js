/*CMD
  command: tesr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//8 samarqand
var msg = Bot.getProperty("LastMessageID");
var lang = User.getProperty('lang_lib_curlangname');
owners = Bot.getProperty("owner");
users = Bot.getProperty("user");
request_state = User.getProperty('request_state');



 function citySelector(){
if ( request_state == 'send_city'){
       send_msg = request.message.message_id
     req_msg = User.getProperty("LastRequestsMessageID");
         req_sbut = [
          [{title: c ,command:'send'},{title:'Куда',command:'recieve'}],
        [{title:'Тип кузова',command:'trtype'}],
      [{title:'Комментарий',command:'comment'}],
      [{title:'Очистить',command:'request clear'}],
      [{title:'Готово',command:'request send'}]
];       Api.deleteMessage({chat_id:chat.chatid,message_id: send_msg});
Api.deleteMessage({chat_id:chat.chatid,message_id: req_msg})
     User.setProperty('send_city',c,'String');
     Bot.sendInlineKeyboard(req_sbut,'Заявка:')
} else if(request_state == 'recieve_city'){
     User.setProperty('recieve_city',c,'String');
} else if(!request_state){
   ids = Bot.getProperty(c);
    if(!ids){  ids = { users: [] } };
  if(!ids.users.includes(chat.chatid)){
     ids.users.push(chat.chatid);
     Bot.setProperty(c, ids, "json");
  };
  User.setProperty('City',c,'String');
  city = User.getProperty('City');
   Bot.sendMessage(Libs.Lang.get().selection+city+'*');
   };
 
if (lang=='uz'){
    var but = [ {title: "O'zgartirish" , command: 'regions'} ];
}else{
  var but = [ {title: 'Изменить', command: 'regions'} ];
};

if (params == 'sh'){  
var    c = 'Samarqand shahri'
    citySelector()
} else if (params == 'oq'){  
var    c = 'Oqtosh'
    citySelector()
} else if (params == 'bu'){  
var    c = 'Bulung’ur'
    citySelector()
} else if (params == 'jo'){  
var    c = 'Jomboy'
    citySelector()
} else if (params == 'ju'){  
var    c = 'Juma'
    citySelector()
} else if (params == 'ish'){  
var    c = 'Ishtixon'
    citySelector()
} else if (params == 'ka'){  
var    c = 'Kattaqo’rg’on'
    citySelector()
} else if (params == 'nu'){  
var    c = 'Nurobod'
    citySelector()
} else if (params == 'pa'){  
var    c = 'Payariq'
    citySelector()
} else if (params == 'ur'){  
var    c = 'Urgut'
    citySelector()
} else if (params == 'ch'){  
var    c = 'Chelak'
    citySelector()
}
   
Bot.editInlineKeyboard(but,msg);
