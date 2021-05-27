module.exports = {
    zh_en_noSpace: function(msg) {
        var re = /[\u4E00-\u9FFF][a-zA-Z]|[a-zA-Z][\u4E00-\u9FFF]/;
        if (re.test(msg)){
            return true;
        } else {
            return false;
        }
    },
    zh_no_noSpace: function(msg) {
        var re = /[\u4E00-\u9FFF][0-9]|[0-9][\u4E00-\u9FFF]/;
        if (re.test(msg)){
            return true;
        } else {
            return false;
        }
    },
    too_long: function(msg) {
        if (msg.length > 250) {
            return true;
        }
    }
};
