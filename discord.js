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
    for (var rule_name in rules) {
        var rule = rules[rule_name]
        if (rule.violate(msg.content)){
            rule.spew(msg)
            return;
        }
    }
});

client.login(process.env.token);