const Discord = require('discord.js');
const client = new Discord.Client();
const rules = require('./rules.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author == client.user) {
        return;
    }

    for (var rule in rules) {
        const { ruleViolate, responseType, message, react } = rules[rule](msg.content);
        if (!ruleViolate) continue;

        switch (responseType) {
            case 'send':
                msg.channel.send(message);
                break;
            case 'reply':
                msg.reply(message);
                break;
            default:
                break;
        }

        if (react) msg.react('🤮');
        return;
    }
});

client.login(process.env.token);