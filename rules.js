module.exports = {
    zh_en_noSpace: {
        violate: function(content){
            var re = /[\u4E00-\u9FFF][a-zA-Z]|[a-zA-Z][\u4E00-\u9FFF]/;
            return re.test(content);
        },
        spew: function(msg){
            msg.channel.send('哥你中英文中間沒加空格，我吐了');
            msg.react('🤮');
        }
    },
    zh_no_noSpace: {
        violate: function(content){
            var re = /[\u4E00-\u9FFF][0-9]|[0-9][\u4E00-\u9FFF]/;
            return re.test(content);
        },
        spew: function(msg){
            msg.channel.send('哥你中文跟數字中間沒加空格，我吐了');
            msg.react('🤮');
        }
    },
    too_long: {
        violate: function(content){
            return content.length > 100;
        },
        spew: function(msg) {
            msg.channel.send('太長了我吐了')
            msg.react('🤮');
        },
    },
    threw_up: {
        violate: function(content) {
            return content.includes('我吐了')
        },
        spew: function(msg) {
            msg.reply('我也吐了')
            msg.react('🤮')
            return
        }
    },
};
