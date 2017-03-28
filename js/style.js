var commonStyle = {
    "logoImageSrc": "http://mmbiz.qpic.cn/mmbiz_jpg/eaFkrsIVbV9uiaPCBJBslskOqeJJWTllvDEppkraWg8nGAkpwowstltB8wBic8QX6sLC5ogyQ3GKV8Wa8wJWTnQQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1",
    "fontColor": "#BEBEBE",
    "fontColorHref": "#607fa6",
    "fontWeight": "bold",
    "fontFamily": "Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif",
    "h2fontSize": "16px",
    "h3fontSize": "15px",
    "h4fontSize": "14px"
}

var blueStyle = {
    "h2Src": "https://mmbiz.qlogo.cn/mmbiz_png/eaFkrsIVbVibySejsG9xw7ibngUprPGO99HHRbtQ82OkUiaF224gxTMFJXISlqhv6QNomicb0xec6ZZuWlzIRWz3pg/0?wx_fmt=png",
    "h3Src": "https://mmbiz.qlogo.cn/mmbiz_png/eaFkrsIVbVibySejsG9xw7ibngUprPGO99vWmMC202eu627ju5OdtyKfz0Qo4klTaDrowZZ5UiaY0bLrMvKHSxUfg/0?wx_fmt=png",
    "h4Src": "https://mmbiz.qlogo.cn/mmbiz_png/eaFkrsIVbVibySejsG9xw7ibngUprPGO99K9hhf4cFnqghdCGX2x0Q2xb5I57GibgXgZB22ToRkeog8zgghYKSuTg/0?wx_fmt=png",
    "color": "#7ABCC9",
}

var pinkStyle = {
    "h2Src": "https://mmbiz.qlogo.cn/mmbiz_png/eaFkrsIVbVibySejsG9xw7ibngUprPGO99icJaIxT6RDngdO9w3zLk3wiaPlTZ5FIjHKOibEQjfKXUFE0LkEDaXlIcw/0?wx_fmt=png",
    "h3Src": "https://mmbiz.qlogo.cn/mmbiz_png/eaFkrsIVbVibySejsG9xw7ibngUprPGO99HoaUVsEmTgMgjDC9keKwgF1hIjAicjLibW7akDYEybGe9cqWNd5YmMGg/0?wx_fmt=png",
    "h4Src": "https://mmbiz.qlogo.cn/mmbiz_png/eaFkrsIVbVibySejsG9xw7ibngUprPGO99ojF6PLmHTZhltrRVDHrRwxvEHGq8ziaISiaHH6Fl8a4gnVxpKyu78RZQ/0?wx_fmt=png",
    "color": "#E5C5D9"
}

/**
 * 通过传入的参数判断使用哪一个样式
 * @param {*} styleType 
 */
function chooseStype(styleType) {
    var result;
    if (styleType == "blue") {
        result = blueStyle;
    } else if (styleType == "pink") {
        result = pinkStyle;
    }
    return result;
}

function setClass(node, srcNode, styleType) {
    var styleMap = chooseStype(styleType);
    if (node.nodeType == '1') {
        switch (node.tagName) {
            case ('H1'):
                /* set H1的样式 */
                node.style.color = '#330200';
                node.style.fontSize = '36px';
                break;
            case ('H2'):
            case ('h2'):
                /* set H2的样式 */
                var imgNode = document.createElement('img')

                imgNode.src = styleMap.h2Src;
                node.appendChild(imgNode);
                node.style.fontSize = commonStyle.h2fontSize;
                node.style.fontFamily = commonStyle.fontFamily;
                node.style.fontWeight = commonStyle.fontWeight;
                node.style.color = commonStyle.fontColor;
                break;
            case ('H3'):
            case ('h3'):
                /* set H3的样式 */
                var imgNode = document.createElement('img')
                imgNode.src = styleMap.h3Src;
                node.appendChild(imgNode);
                node.style.color = commonStyle.fontColor;
                node.style.fontSize = commonStyle.h3fontSize;
                node.style.fontWeight = commonStyle.fontWeight;
                node.style.fontFamily = commonStyle.fontFamily;
                break;
            case ('H4'):
            case ('h4'):
                /* set H4的样式 */
                var imgNode = document.createElement('img')
                imgNode.src = styleMap.h4Src;
                node.appendChild(imgNode);
                node.style.color = commonStyle.fontColor;
                node.style.fontSize = commonStyle.h4fontSize;
                node.style.fontWeight = commonStyle.fontWeight;
                node.style.fontFamily = commonStyle.fontFamily;
                node.style.borderBottom = "2px solid #7ABCC9";
                node.style.borderBottomColor = styleMap.color;
                break;
            case ('H5'):
                /* set H5的样式 */
                node.style.color = commonStyle.fontColor;
                node.style.border = "2px solid #7ABCC9";
                node.style.borderColor = styleMap.color;
                break;
            case ('H6'):
            case ('h6'):
                /* set H6的样式 */
                var contentArr = srcNode.innerText.split('||');
                if (typeof contentArr != 'undefined' && contentArr.length == 1 && contentArr[0] != '') {
                    contentArr[1] = contentArr[0];
                    contentArr[0] = '快讯';
                }
                if (typeof contentArr == 'undefined' || contentArr.length < 2) {
                    break;
                }

                var hrNode = document.createElement('hr');
                hrNode.style.marginBottom = '10px';
                var hrNode1 = document.createElement('hr');
                hrNode1.style.parginTop = '10px';
                var titleNode = createSectionNodeH6(contentArr[0], contentArr[1], styleMap);
                node.appendChild(hrNode);
                node.appendChild(titleNode);
                node.appendChild(hrNode1);
                break;
            case ('HR'):
                /* set hr的样式 */
                node.style.color = '#888888';
                break;
            case ('A'):
                node.style.fontWeight = "bold";
                node.style.color = commonStyle.fontColorHref;
                node.style.fontStyle = "oblique";
                break;
            case ('P'):
            case ('p'):
                node.style.paddingLeft = "12px";
                node.style.color = "#888888";
                node.style.fontSize = '13px';
                break;
            case ('strong'):
                node.style.color = "#FE3287";
                break;
            case ('em'):
                node.style.color = "#FE3287";
                break;
            case ('BLOCKQUOTE'):
                node.style.color = "green";
                break;
            case ('UL'):
                break;
            case ('LI'):
                break;
            case ('OL'):
                break;
            case ('CODE'):
                break;
            case 'table':
                break;
            case 'thead':
                break;
            case 'tr':
                break;
            case 'th':
                break;
            case 'td':
                break;
        }
    }
}

/**
 * 生成简报  例如:
 * |快讯|XXX
 * @param {*} title 
 * @param {*} content 
 */
function createSectionNodeH6(title, content, styleMap) {
    var result = document.createElement('section');
    result.style.boxSizing = 'border-box';
    var child = document.createElement('section');
    child.style.marginTop = '15px';
    child.style.marginBottom = '15px';
    child.style.transform = "translate3d(0px, 0px, 0px)";
    child.style.webkitTransform = "translate3d(0px, 0px, 0px)";
    child.style.boxSizing = "border-box";
    result.appendChild(child);
    var titleArr = title.split('');
    //create titleNode
    var titleNode = createSectionTitleNode(titleArr, styleMap);
    //create contentNode
    var contentNode = createSectionContentNode(content, styleMap);

    result.appendChild(titleNode);
    result.appendChild(contentNode);
    return result;
}

/**
 * @param {*} titleArr 
 */
function createSectionTitleNode(titleArr, styleMap) {
    var result = document.createElement('section');
    result.style.display = "inline-block";
    result.style.verticalAlign = "top";
    result.style.width = "15%";
    result.style.paddingRight = "1px";
    result.style.paddingLeft = "1px";

    var child = document.createElement('section');
    child.style.boxSizing = "border-box";

    var child1 = document.createElement('section');
    child1.style.marginTop = "10px";
    child1.style.marginBottom = "10px";
    child1.style.textAlign = "center";
    child1.style.transform = "translate3d(0px, 0px, 0px)";
    child1.style.webkitTransform = "translate3d(0px, 0px, 0px)";
    child1.style.boxSizing = "box-sizing";

    var child2 = document.createElement('section');
    child2.style.display = "inline-bloc";
    child2.style.verticalAlign = "top";
    child2.style.borderLeftWidth = "1px";
    child2.style.borderLeftStyle = "solid";
    child2.style.borderLeftColor = "rgb(160, 160, 160)";
    child2.style.borderRightWidth = "1px";
    child2.style.borderRightStyle = "solid";
    child2.style.borderRightColor = "rgb(160, 160, 160)";
    child2.style.paddingRight = "5px";
    child2.style.paddingLeft = "5px";
    child2.style.color = "rgb(160, 160, 160)";
    child2.style.fontSize = "14px";
    child2.style.boxSizing = "border-box";
    for (var i = 0; i <= titleArr.length; i++) {
        var pNode = document.createElement('p');
        pNode.style.boxSizing = "border-box";
        if (i <= titleArr.length - 1) {
            pNode.appendChild(document.createTextNode(titleArr[i]));
            if (i == titleArr.length - 1) {
                var brNode = document.createElement('br');
                brNode.style.boxSizing = "border-box";
                pNode.appendChild(brNode);
            }
        } else {
            pNode.style.lineHeight = "0";
            var brNode = document.createElement('br');
            brNode.style.boxSizing = "border-box";
            pNode.appendChild(brNode);
        }
        child2.appendChild(pNode);
    }
    child1.appendChild(child2);
    child.appendChild(child1);
    result.appendChild(child);
    return result;
}


function createSectionContentNode(content, styleMap) {
    var result = document.createElement('section');
    result.style.display = "inline-block";
    result.style.verticalAlign = "top";
    result.style.width = "83%";
    result.style.boxSizing = "border-box";

    var child = document.createElement('section');
    child.style.boxSizing = "border-box";

    var child1 = document.createElement('section');
    child1.style.transform = "translate3d(0px, 0px, 0px)";
    child1.style.webkitTransform = "translate3d(0px, 0px, 0px);";
    child1.style.boxSizing = "border-box";

    var child2 = document.createElement('section');
    child2.style.textAlign = "justify";
    child2.style.color = styleMap.color;
    child2.style.fontSize = "14px";
    child2.style.boxSizing = "border-box";

    var pNode = document.createElement('p');
    pNode.style.whiteSpace = "normal";
    pNode.style.boxSizing = "border-box";

    pNode.appendChild(document.createTextNode(content));

    child2.appendChild(pNode);
    child1.appendChild(child2);
    child.appendChild(child1);
    result.appendChild(child);

    return result;
}

function createTopFocusElement(styleType) {
    var styleMap = chooseStype(styleType);
    var result = document.createElement('section');
    result.style.boxSizing = 'border-box';
    var child1 = document.createElement('section');
    child1.style.marginTop = "10px";
    child1.style.paddingTop = "1.3em";
    child1.style.boxSizing = "border-box";

    var child2 = document.createElement('section');
    child2.style.borderTopWidth = "2px";
    child2.style.borderTopStyle = "solid";
    child2.style.borderTopColor = styleMap.color;
    child2.style.borderBottomWidth = "2px";
    child2.style.borderBottomStyle = "solid";
    child2.style.borderBottomColor = styleMap.color;
    child2.style.boxSizing = "border-box";

    var child3 = document.createElement('section');
    child3.style.boxSizing = "border-box";

    var child31 = createTopFocusStyleNode(styleMap);
    var child32 = createTopFocusTextNode(styleMap);
    child3.appendChild(child31);
    child3.appendChild(child32);

    child2.appendChild(child3);
    child1.appendChild(child2);

    result.appendChild(child1);
    return result;
}


function createTopFocusStyleNode(styleMap) {
    var result = document.createElement('section');
    result.style.boxSizing = "border-box";

    var child1 = document.createElement('section');
    child1.style.marginTop = "-16px";
    child1.style.marginLeft = "30%";
    child1.style.marginRight = "30%";
    child1.style.boxSizing = "border-box";

    var child2 = document.createElement('section');
    child2.style.display = "inline-block";
    child2.style.boxSizing = "border-box";

    var child3 = document.createElement('section');
    child3.style.boxSizing = "border-box";
    child3.style.transform = "rotate(45deg)";
    child3.style.webkitTransform = "rotate(45deg)";

    var child4 = document.createElement('section');
    child4.style.width = "30px";
    child4.style.height = "30px";
    child4.style.borderLeftWidth = "2px";
    child4.style.borderLeftStyle = "solid";
    child4.style.borderLeftColor = styleMap.color;
    child4.style.borderTopWidth = "2px";
    child4.style.borderTopStyle = "solid";
    child4.style.borderTopColor = styleMap.color;
    child4.style.backgroundColor = "rgb(254, 255, 255)";
    child4.style.boxSizing = "border-box";

    var child5 = document.createElement('section');
    child5.style.margin = "2px";
    child5.style.borderWidth = "2px";
    child5.style.borderStyle = "solid";
    child5.style.borderColor = styleMap.color;
    child5.style.width = "22px";
    child5.style.height = "22px";
    child5.style.boxSizing = "border-box";

    var child6 = document.createElement('section');
    child6.style.margin = "1px auto auto";
    child6.style.border = "1px solid rgb(122, 188, 201)";
    child6.style.borderColor = styleMap.color;
    child6.style.width = "16px";
    child6.style.height = "16px";
    child6.style.boxSizing = "border-box";

    var child7 = document.createElement('section');
    child7.style.width = "0px";
    child7.style.margin = "1px auto auto";
    child7.style.borderLeft = "12px solid rgb(122, 188, 201)";
    child7.style.borderBottom = "12px solid transparent !important";
    child7.style.boxSizing = "border-box";

    child6.appendChild(child7);
    child5.appendChild(child6);
    child4.appendChild(child5);
    child3.appendChild(child4);
    child2.appendChild(child3);
    child1.appendChild(child2);
    result.appendChild(child1);

    return result;
}

function createTopFocusTextNode() {
    var result = document.createElement('section');
    result.style.boxSizing = "border-box";

    var child1 = document.createElement('section');
    child1.style.boxSizing = "border-box";

    var child2 = document.createElement('section');
    child2.style.textAlign = "center";
    child2.style.color = "rgb(123, 121, 121)";
    child2.style.fontSize = "14px";
    child2.style.boxSizing = "border-box";

    var child3 = document.createElement('p');
    child3.appendChild(document.createTextNode('点击上方蓝字，关注邦利UK！'));
    child3.style.margin = "0px";
    child3.style.padding = "0px";
    child3.style.boxSizing = "border-box";

    child2.appendChild(child3);
    child1.appendChild(child2);
    result.appendChild(child1);

    return result;
}

/**
 * 1 代表元素
 * 3 代表文本内容
 */
function create(node, styleType) {
    var tempNode = '';
    if (node.nodeType == '1') {

        var tempNode = document.createElement(node.nodeName);
        setClass(tempNode, node, styleType);
        if (node.hasChildNodes()) {
            for (var j = 0; j < node.childNodes.length; j++) {
                var t;

                if (node.nodeName != 'H6') {
                    t = create(node.childNodes[j], styleType);
                }

                if (node.childNodes[j].tagName == 'A') {
                    t.href = node.childNodes[j].href;
                    t.title = node.childNodes[j].title;
                } else if (node.childNodes[j].tagName == 'img') {
                    t.src = node.childNodes[j].src;
                    t.alt = node.childNodes[j].alt;
                    t.title = node.childNodes[j].title;
                }
                if (node.nodeName != 'H6') {
                    setClass(t, node, styleType);
                    tempNode.appendChild(t);
                }
            }
        }
    } else if (node.nodeType == '3') {
        var tempNode = document.createTextNode(node.nodeValue);
    }
    return tempNode;
}

/***
 * Table 在书写markdown文档时，必须按照以下规范写入，不然不能正确处理
 * |r th1|l th2|m th3|
 * |td1|td2|td3|
 * ……
 * |tdn|tdn|tdn|
 */
function dealTable(src) {
    src = replaceAll(src, "\n", "");
    index = 0;
    while (src.indexOf('<p>|') >= 0) {
        index = src.indexOf('<p>|', index);
        var tempstr = src.substr(src.indexOf('<p>|') + 3, src.indexOf('|</p>') - src.indexOf('<p>|') - 2);
        var srcStr = tempstr;
        var dstStr = createTable(tempstr);
        src = src.replace(srcStr, dstStr);
    }
    return src;
}

/**
 <p><img  style="width: auto !important; height: auto !important; visibility: visible !important;" data-fail="0"><br></p>
*/
function createTailNode() {
    var result = document.createElement('p');
    var child = document.createElement('img');
    child.src = commonStyle.logoImageSrc;
    child.style.width = "auto !important";
    child.style.height = "auto !important";
    child.style.visibility = "visible!important";
    var child1 = document.createElement('br');
    result.appendChild(child);
    result.appendChild(child1);
    return result;
}

/**

        <section style="box-sizing: border-box;">
            <p style="text-align: right; margin: 0px; padding: 0px; box-sizing: border-box;"><br style="box-sizing: border-box;"></p>
            <p style="text-align: right; margin: 0px; padding: 0px; box-sizing: border-box;">文/Jessie</p>
            <p style="margin: 0px; padding: 0px; box-sizing: border-box;"><br style="box-sizing: border-box;"></p>
        </section>
 */
function createAuthorNode() {
    var result = document.createElement('section');
    result.style.boxSizing = "border-box";

    var child = document.createElement('section');
    child.style.boxSizing = "border-box";

    var child1 = document.createElement('section');
    child1.style.boxSizing = "border-box";

    var child11 = document.createElement('p');
    child11.style.textAlign = "right";
    child11.style.margin = "0px";
    child11.style.padding = "0px";
    child11.style.boxSizing = "border-box";
    var child12 = document.createElement('p');
    child12.style.textAlign = "right";
    child12.style.margin = "0px";
    child12.style.padding = "0px";
    child12.style.boxSizing = "border-box";
    var child13 = document.createElement('p');
    child11.style.margin = "0px";
    child11.style.padding = "0px";
    child11.style.boxSizing = "border-box";

    var child111 = document.createElement('br');
    child111.style.boxSizing = "border-box";
    var child131 = document.createElement('br');
    child131.style.boxSizing = "border-box";

    var child121 = document.createTextNode('文/Jessie')
    child11.appendChild(child111);
    child12.appendChild(child121);
    child13.appendChild(child131);
    child1.appendChild(child11);
    child1.appendChild(child12);
    child1.appendChild(child13);

    child.appendChild(child1);
    result.appendChild(child);

    return result;

}