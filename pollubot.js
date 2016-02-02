var TelegramBot = require('node-telegram-bot-api');

var token = '180141342:AAFguA9zB-De6Lg1t7rY0fNve2W8T6Nlrak',
	USER = 114222213,
	// Setup polling way
	bot = new TelegramBot(token, {polling: true}),
	opts = {
		reply_markup: JSON.stringify(
	    {
	      force_reply: true
	    }
	)};

/*
bot.sendMessage(USER, 'How old are you?', opts).then(function (sended) {
	var chatId = sended.chat.id;
	var messageId = sended.message_id;
	bot.onReplyToMessage(chatId, messageId, function (message) {
		console.log('User is %s years old', message.text);
	});
});
*/
	

// Matches /echo [whatever]
bot.onText(/\/pm10/, function (msg, match) {
	console.log(msg);
	var fromId = msg.from.id;
	console.log(fromId);
	var resp = match[1];
	bot.sendMessage(fromId, resp);
});

bot.onText(/\/start/, function (msg, match) {
	var name = msg.from.first_name || msg.from.username,
		fromId = msg.from.id;
	var welcome = "*Benvenuto " + name + "*";
	welcome += "\n``` PolluBot ti fornisce tutte le informazioni riguardo l'inquinamento nella tua zona ";
	welcome += "\no nella località preferita.```";
	
	bot.sendMessage(fromId, welcome, {'parse_mode': 'Markdown'});
});

/*
bot.on('message', function (msg) {
	var chatId = msg.chat.id;
	bot.sendMessage(chatId, '*Prova invio*', {'parse_mode': 'Markdown'});
});
*/