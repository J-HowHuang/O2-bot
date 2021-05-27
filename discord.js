const Discord = require('discord.js');
const client = new Discord.Client();
const rules = require('./rules.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if(rules.zh_en_noSpace(msg.content)){
        msg.channel.send('哥你中英文中間沒加空格，我吐了');
        msg.react('🤮')
    }
    if(rules.zh_no_noSpace(msg.content)){
        msg.channel.send('哥你中文跟數字中間沒加空格，我吐了');
        msg.react('🤮')
    }
    if(rules.too_long(msg.content)){
        msg.channel.send('太長了我吐了')
        msg.react('🤮')
    }
    if(rules.threw_up(msg.content)){
        msg.channel.send('我也吐了')
        msg.react('🤮')
    }
});

client.login(process.env.token);

