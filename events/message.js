
const S2 = require('../commands/S2');

module.exports = (client, msg) => {
    if (msg.content === 'ping') {
	
	//msg.reply('pong S2');
	//can also refactor by calling separate function
	S2(msg);
	
    }
}
