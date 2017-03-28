String.prototype.startWith = function(str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}

String.prototype.endWith = function(str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}

var $ = function(id) {
    return document.getElementById(id);
};

function replaceAll(str, sptr, sptr1) {
    while (str.indexOf(sptr) >= 0) {
        str = str.replace(sptr, sptr1);
    }
    return str;
}