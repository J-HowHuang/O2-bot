const Discord = require('discord.js');
const client = new Discord.Client();
const rules = require('./rules.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.author == client.user){
        return
    }

    if(rules.zh_en_noSpace(msg.content)){
        msg.channel.send('哥你中英文中間沒加空格，我吐了');
        msg.react('🤮')
        return
    }
    if(rules.zh_no_noSpace(msg.content)){
        msg.channel.send('哥你中文跟數字中間沒加空格，我吐了');
        msg.react('🤮')
        return
    }
    if(rules.too_long(msg.content)){
        msg.channel.send('太長了我吐了')
        msg.react('🤮')
        return
    }
    if(rules.threw_up(msg.content)){
        msg.reply('我也吐了')
        msg.react('🤮')
        return
    }
});

client.login(process.env.token);

