/**
 * 通用的常量
 * 
 * @type {{COOKIE_MAX_AGE: string}}
 * 
 */

module.exports = {
    COOKIE_MAX_AGE: "1800000",

    CSRF_WHITE_LIST: [
        /^\/login\/?.*$/,
        /^\/register\/?.*$/
    ],

    LOGIN_WHITE_LIST: [
        /^\/login\/?.*$/,
        /^\/logout\/?.*$/,
        /^\/register\/?.*$/
    ],

    TIMEOUT_WHITE_LIST: [
        /^\/register\/?.*$/
    ],

    SECRETKEY: "ZB7BUJEvb$#3QLcL", // 16位

    

};