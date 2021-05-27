const Discord = require('discord.js');
const client = new Discord.Client();
const rules = require('./rules.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if(rules.zh_en_noSpace(msg)){
        msg.reply('哥你中英文中間沒加空格，我吐了');
    }
    if(rules.zh_no_noSpace(msg)){
        msg.reply('哥你中文跟數字中間沒加空格，我吐了');
    }
});

client.login(process.env.token);

