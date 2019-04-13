require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

fs.readdir('./events/', (err, files) => {

    // ignore emacs ~ files
    files = files.filter(item => !(/~/g).test(item));
    
    files.forEach(file => {
	const eventHandler = require(`./events/${file}`);
	const eventName = file.split('.')[0];
	console.log('files', file, eventHandler, eventName);
	client.on(eventName, (...args) => eventHandler(client, ...args));
    });
});

client.login(process.env.BOT_TOKEN);

//console.log(client);
