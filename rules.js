module.exports = {
    zh_en_noSpace: function(msg) {
        var re = /[\u4E00-\u9FFF][a-zA-Z]|[a-zA-Z][\u4E00-\u9FFF]/;
        return { ruleViolate: re.test(msg), responseType: 'send', message: '哥你中英文中間沒加空格，我吐了', react: true }
    },
    zh_no_noSpace: function(msg) {
        var re = /[\u4E00-\u9FFF][0-9]|[0-9][\u4E00-\u9FFF]/;
        return { ruleViolate: re.test(msg), responseType: 'send', message: '哥你中文跟數字中間沒加空格，我吐了', react: true }
    },
    too_long: too_long = function(msg) {
        return { ruleViolate: msg.length > 100, responseType: 'send', message: '太長了我吐了', react: true }
    },
    threw_up: threw_up = function(msg) {
        return { ruleViolate: msg.includes('我吐了'), responseType: 'reply', message: '我也吐了', react: true }
    },
};