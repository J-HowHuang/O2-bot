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
    equal_equal: {
        violate: function(content) {
            re = /[\u4E00-\u9FFF]/
            return content.includes('==')
        },
        spew: function(msg) {
            msg.reply('等於等於不加空格 我吐了')
            msg.react('🤮')
            return
        }
    },
    dont_cry: {
        violate: function(content) {
            return content.includes("哭了") || content.includes("想哭")
        },
        spew: function(msg) {
            msg.reply('沒事ㄉ 不要難過了')
            msg.react('❤️')
            return
        }
    }
};
