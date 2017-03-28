/** 
 * 用于将既定格式的字符串转化为table
 * |r 姓名|l 性别|r 部门|m 你好||徐静|女|英国邦利总负责人|hello||邹君梅|女|大总管&lt;br&gt;HR|hello|
 * 
 */
function createTable(tempstr) {
    var result = document.createElement('div');
    tempstr = tempstr.replace('&lt;', '<');
    tempstr = tempstr.replace('&gt;', '>');
    tempstr = tempstr.substr(1, tempstr.length);
    tempstr = tempstr.substr(0, tempstr.length - 1);
    var strArr = tempstr.split("||");
    if (strArr.length > 0) {
        var tableNode = document.createElement('table');
        var tHeadNode = document.createElement('thead');
        var tBodyNode = document.createElement('tbody');
        for (var i = 0; i < strArr.length; i++) {
            if (i == 0) {
                var trNode = document.createElement('tr');
                var trContent = strArr[i].split('|');
                for (var j = 0; j < trContent.length; j++) {
                    var thNode = document.createElement('th');
                    var textNode = '';
                    if (trContent[j].startWith('r ')) {
                        textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                        thNode.style.textAlign = 'right';
                    } else if (trContent[j].startWith('l ')) {
                        textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                        thNode.style.textAlign = 'left';
                    } else if (trContent[j].startWith('m ')) {
                        textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                        thNode.style.textAlign = 'center';
                    } else {
                        textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                    }
                    thNode.appendChild(textNode);
                    trNode.appendChild(thNode);
                }
                tHeadNode.appendChild(trNode);
            } else {
                var trNode = document.createElement('tr');
                var trContent = strArr[i].split('|');
                for (var j = 0; j < trContent.length; j++) {
                    var tdNode = document.createElement('td');
                    var textNode = '';
                    if (trContent[j].startWith('r ')) {
                        textNode = textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                        tdNode.style.textAlign = 'right';
                    } else if (trContent[j].startWith('l ')) {
                        textNode = textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                        tdNode.style.textAlign = 'left';
                    } else if (trContent[j].startWith('m ')) {
                        textNode = newTextNode(trContent[j].substr(2, trContent[j].length));
                        tdNode.style.textAlign = 'center';
                    } else {
                        textNode = newTextNode(trContent[j]);
                    }
                    tdNode.appendChild(textNode);
                    trNode.appendChild(tdNode);
                }
                tBodyNode.appendChild(trNode);
            }
        }
        tableNode.appendChild(tHeadNode);
        tableNode.appendChild(tBodyNode);
    }
    result.appendChild(tableNode);
    return result.innerHTML;
}

/**
 * hello<br>hello这样的textNode按照不同的节点生成
 * 当前仅仅处理了一层，后期需要进一步优化成递归调用
 */
function newTextNode(src) {
    var doc = document.createElement('div');
    if (src.indexOf('<br>') > 0) {
        strArr = src.split('<br>');
        for (var i = 0; i < strArr.length; i++) {
            var textNode = document.createTextNode(strArr[i]);
            doc.appendChild(textNode);
            if (i < strArr.length - 1) {
                doc.appendChild(document.createElement('br'));
            }
        }
    } else {
        doc.appendChild(document.createTextNode(src));
    }
    return doc;
}