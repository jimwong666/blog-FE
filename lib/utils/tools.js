// QueryString
const QueryString = function(str) {
    let result = str.match(/[?&][^?&]+=[^?&]+/g);

    if (result) {
        let keys = [];
        let params = {};

        for (let i = 0; i < result.length; i++) {
            let s = result[i].substring(1);
            let kv = s.match(/(.*)=(.*)/);
            if (kv) {
                keys.push(kv[1]);
                params[kv[1]] = kv[2];
            }
        }
        this.keys = keys;
        this.params = params;
    }
};
QueryString.prototype = {
    toString: function() {
        let ret = '';
        for (let i in this.keys) {
            let key = this.keys[i];
            let value = this.params[key];
            ret += key + '=' + value;
            if (i < this.keys.length - 1) {
                ret += '&';
            }
        }

        return ret;
    },
    set: function(key, value) {
        let pos = -1;
        for (let i in this.keys) {
            if (this.keys[i] === key) {
                pos = i;
            }
        }

        if (pos < 0) {
            this.keys.push(key);
        }

        this.params[key] = value;
    },
    get: function(key) {
        return this.params[key];
    }
};

// MatchSome
const MatchSome = function(url, list) {
    let match = false;
    list.some(function (regex) {
        return match = regex.test(url);
    });
    return match;
}

const Serialize = function(params) {
    let ret = '';
    if (params) {
        let keys = Object.keys(params);

        keys.forEach(function(key, index) {
            let value = params[key];
            if (value === undefined) {
                value = '';
            }

            ret += key + '=' + value;

            if (index < keys.length - 1) {
                ret += '&';
            }
        });
    }
    return ret;
}

// GetAppConfig （废弃，自建了配置文件，还是不要放在package.json里面）
// const GetAppConfig = function() {
//     const filePath = path.resolve(__dirname, '../../package.json');
//     const serverData = JSON.parse(fs.readFileSync(filePath));
//     return serverData;
// }

module.exports = {
    Serialize,
    QueryString,
    MatchSome,
    appConfig: require('../../config').getConfig()
};