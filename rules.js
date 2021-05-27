module.exports = {
    zh_en_noSpace: function(msg) {
        var re = /[\u4E00-\u9FFF][a-zA-Z]|[a-zA-Z][\u4E00-\u9FFF]/;
        return re.test(msg)
    },
    zh_no_noSpace: function(msg) {
        var re = /[\u4E00-\u9FFF][0-9]|[0-9][\u4E00-\u9FFF]/;
        return re.test(msg)
    },
    too_long: function(msg) {
        return msg.length > 100
    },
    threw_up: function(msg) {
        return msg.indexOf('我吐了') != -1
    }
};
