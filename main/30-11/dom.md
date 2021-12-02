
### DOM manipulation (Document Object Model)
document is used to access HTML page elements to add dyanamic properties to it.

#### How does JS interact with HTML document?
- Document Object Model 
When html document is loaded in the browser corresponding to that document 
there is a new document ina  different format created for JS called DOM,
JS can easily intrepret DOM format. since it can only operate on objects and 
cannot access html tags.

> each tag in html is represented as objects in DOM.
> There is also a herierchy in DOM. It contains 3 primary nodes.
1. element node:   <head>, <body>
2. attribute node:  id/ class 
3. text node:       content inside element 

> we either get or set values 
- set: to change properties of element 
- get: to fetch value of elements


#### We can target DOM object through the following:
1. Id: document.getElementById
2. Class Name: document.getElementsByClassName
3. Tag Name: document.getElementsByTagName

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    
</head>
<body>
    <div id="wrapper">
        <div id="header">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</html>
```

#### This command converts html code to DOM 
```bash
 <script>
        var element;
        element = document; 
        console.log(element);
    </script>

location: Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/main/30-11/js1.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
URL: "http://127.0.0.1:5500/main/30-11/js1.html"
activeElement: body
adoptedStyleSheets: []
alinkColor: ""
all: HTMLAllCollection(25) [html, head, meta, meta, meta, title, body, div#wrapper, div#header, h1, div#menu, ul#list, li, a, li, a, li, a, div#content, h2, img, p, script, script, style, viewport: meta, wrapper: div#wrapper, header: div#header, menu: div#menu, list: ul#list, …]
anchors: HTMLCollection []
applets: HTMLCollection []
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
bgColor: ""
body: body
characterSet: "UTF-8"
charset: "UTF-8"
childElementCount: 1
childNodes: NodeList(2) [<!DOCTYPE html>, html]
children: HTMLCollection [html]
compatMode: "CSS1Compat"
contentType: "text/html"
cookie: ""
currentScript: null
defaultView: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
designMode: "off"
dir: ""
doctype: <!DOCTYPE html>
documentElement: html
documentURI: "http://127.0.0.1:5500/main/30-11/js1.html"
domain: "127.0.0.1"
embeds: HTMLCollection []
featurePolicy: FeaturePolicy {}
fgColor: ""
firstChild: <!DOCTYPE html>
firstElementChild: html
fonts: FontFaceSet {onloading: null, onloadingdone: null, onloadingerror: null, ready: Promise, status: 'loaded', …}
forms: HTMLCollection []
fragmentDirective: FragmentDirective {}
fullscreen: false
fullscreenElement: null
fullscreenEnabled: true
head: head
hidden: false
images: HTMLCollection [img]
implementation: DOMImplementation {}
inputEncoding: "UTF-8"
isConnected: true
lastChild: html
lastElementChild: html
lastModified: "12/01/2021 14:57:47"
linkColor: ""
links: HTMLCollection(3) [a, a, a]
nextSibling: null
nodeName: "#document"
nodeType: 9
nodeValue: null
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfreeze: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointerlockchange: null
onpointerlockerror: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreadystatechange: null
onreset: null
onresize: null
onresume: null
onscroll: null
onsearch: null
onsecuritypolicyviolation: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvisibilitychange: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
ownerDocument: null
parentElement: null
parentNode: null
pictureInPictureElement: null
pictureInPictureEnabled: true
plugins: HTMLCollection []
pointerLockElement: null
previousSibling: null
readyState: "complete"
referrer: "http://127.0.0.1:5500/main/30-11/js1.html"
rootElement: null
scripts: HTMLCollection(2) [script, script]
scrollingElement: html
styleSheets: StyleSheetList {0: CSSStyleSheet, length: 1}
textContent: null
timeline: DocumentTimeline {currentTime: 5062.96}
title: "DOM"
visibilityState: "visible"
vlinkColor: ""
wasDiscarded: false
webkitCurrentFullScreenElement: null
webkitFullscreenElement: null
webkitFullscreenEnabled: true
webkitHidden: false
webkitIsFullScreen: false
webkitVisibilityState: "visible"
xmlEncoding: null
xmlStandalone: false
xmlVersion: null
[[Prototype]]: HTMLDocument
```
#### Creating an array and returning all html tags mapped with numbers
```bash
<script>
        var element;
        element = document.all; 
        console.log(element);
</script>

HTMLAllCollection(23) [html, head, meta, meta, meta, title, body, div#wrapper, div#header, h1, div#menu, ul#list, li, a, li, a, li, a, div#content, h2, img, p, script, viewport: meta, wrapper: div#wrapper, header: div#header, menu: div#menu, list: ul#list, …]0: html1: head2: meta3: meta4: meta5: title6: body7: div#wrapper8: div#header9: h110: div#menu11: ul#list12: li13: a14: li15: a16: li17: a18: div#content19: h220: img21: p22: script23: script24: stylecontent: div#contentheader: div#headerlist: ul#listmenu: div#menuviewport: metawrapper: div#wrapperlength: 25[[Prototype]]: HTMLAllCollection
```

```bash
document.all[2];
----------------
meta
```


### targetting an element node 
```bash
<script>
        var element;
        element = document.head; 
        console.log(element);
</script>

accessKey: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childElementCount: 4
childNodes: NodeList(9) [text, meta, text, meta, text, meta, text, title, text]
children: HTMLCollection(4) [meta, meta, meta, title, viewport: meta]
classList: DOMTokenList [value: '']
className: ""
clientHeight: 0
clientLeft: 0
clientTop: 0
clientWidth: 0
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: meta
hidden: false
id: ""
innerHTML: "\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>DOM</title>\n    \n"
innerText: "\n    \n    \n    \n    DOM\n    \n"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: title
localName: "head"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: body
nextSibling: text
nodeName: "HEAD"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 0
offsetLeft: 0
offsetParent: null
offsetTop: 0
offsetWidth: 0
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>DOM</title>\n    \n</head>"
outerText: "\n    \n    \n    \n    DOM\n    \n"
ownerDocument: document
parentElement: html
parentNode: html
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: null
previousSibling: null
scrollHeight: 0
scrollLeft: 0
scrollTop: 0
scrollWidth: 0
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "HEAD"
textContent: "\n    \n    \n    \n    DOM\n    \n"
title: ""
translate: true
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLHeadElement
```
#### Diplays the title name "DOM" specified in the title tag
```bash
<script>
        var element;
        element = document.title;  //DOM
        console.log(element);
</script>
```

#### Displays everything in the body section of the document format conversion of html document 
```bash
 <script>
        var element;
        element = document.body; 
        console.log(element);
</script>

aLink: ""
accessKey: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
background: ""
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
bgColor: ""
childElementCount: 4
childNodes: NodeList(10) [text, div#wrapper, text, script, text, comment, text, script, text, style]
children: HTMLCollection(4) [div#wrapper, script, script, style, wrapper: div#wrapper]
classList: DOMTokenList [value: '']
className: ""
clientHeight: 234
clientLeft: 0
clientTop: 0
clientWidth: 734
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: div#wrapper
hidden: false
id: ""
innerHTML: "\n    <div id=\"wrapper\">\n        <div id=\"header\">\n            <h1>heading</h1>\n        </div>\n        <div id=\"menu\">\n            <ul id=\"list\">\n                <li><a href=\"\">home</a></li>\n                <li><a href=\"\">about us</a></li>\n                <li><a href=\"\">contact</a></li>\n            </ul>\n        </div>\n        <div id=\"content\">\n            <h2>sub heading</h2>\n            <img src=\"\" alt=\"\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>\n        </div>\n    </div>\n\n    <script>\n        var element;\n        element = document.body; \n        console.log(element);\n    </script>\n\n\n<!-- Code injected by live-server -->\n<script type=\"text/javascript\">\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n</script>\n<style>.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}</style>"
innerText: "heading\nhome\nabout us\ncontact\nsub heading\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: style
lastElementChild: style
link: ""
localName: "body"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: null
nextSibling: null
nodeName: "BODY"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 234
offsetLeft: 0
offsetParent: null
offsetTop: 0
offsetWidth: 734
onabort: null
onafterprint: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforeprint: null
onbeforeunload: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
onhashchange: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onlanguagechange: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmessage: null
onmessageerror: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onoffline: null
ononline: null
onpagehide: null
onpageshow: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onpopstate: null
onprogress: null
onratechange: null
onrejectionhandled: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onstorage: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onunhandledrejection: null
onunload: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<body>\n    <div id=\"wrapper\">\n        <div id=\"header\">\n            <h1>heading</h1>\n        </div>\n        <div id=\"menu\">\n            <ul id=\"list\">\n                <li><a href=\"\">home</a></li>\n                <li><a href=\"\">about us</a></li>\n                <li><a href=\"\">contact</a></li>\n            </ul>\n        </div>\n        <div id=\"content\">\n            <h2>sub heading</h2>\n            <img src=\"\" alt=\"\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>\n        </div>\n    </div>\n\n    <script>\n        var element;\n        element = document.body; \n        console.log(element);\n    </script>\n\n\n<!-- Code injected by live-server -->\n<script type=\"text/javascript\">\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n</script>\n<style>.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}</style></body>"
outerText: "heading\nhome\nabout us\ncontact\nsub heading\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!"
ownerDocument: document
parentElement: html
parentNode: html
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: head
previousSibling: text
scrollHeight: 234
scrollLeft: 0
scrollTop: 0
scrollWidth: 734
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "BODY"
text: ""
textContent: "\n    \n        \n            heading\n        \n        \n            \n                home\n                about us\n                contact\n            \n        \n        \n            sub heading\n            \n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!\n        \n    \n\n    \n        var element;\n        element = document.body; \n        console.log(element);\n    \n\n\n\n\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n\n.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}"
title: ""
translate: true
vLink: ""
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLBodyElement
```

#### Displays all the collection of anchor tags in the document 
```bash
    <script>
        var element;
        element = document.links; 
        console.log(element);
    </script>

HTMLCollection(3) [a, a, a]0: a1: a2: alength: 3[[Prototype]]: HTMLCollection
```
#### Targetting a  specific anchor tag: say at 0'th index; i.e the first anchor tag 
```bash
   <script>
        var element;
        element = document.links[0]; 
        console.log(element);
    </script>
```

#### Displaying all the images in the document  
```bash
   <script>
        var element;
        element = document.images; 
        console.log(element);
    </script>

HTMLCollection(2) [img, img]0: img1: imglength: 2[[Prototype]]: HTMLCollection
```

#### Targetting a specific image (1st image) in the document 
```bash 
   <script>
        var element;
        element = document.images[0]; 
        console.log(element);
    </script>
```

#### Displaying doctype
```bash
   <script>
        var element;
        element = document.doctype; 
        console.log(element);
    </script>

<!DOCTYPE html>
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: true
lastChild: null
name: "html"
nextSibling: html
nodeName: "html"
nodeType: 10
nodeValue: null
ownerDocument: document
parentElement: null
parentNode: document
previousSibling: null
publicId: ""
systemId: ""
textContent: null
[[Prototype]]: DocumentType
```

#### Displays the URL of the website 
```bash
    <script>
        var element;
        element = document.URL; 
        console.log(element);
    </script>

http://127.0.0.1:5500/main/30-11/js1.html

//to display URL we can also use 
    <script>
        var element;
        element = document.baseURI; 
        console.log(element);
    </script>
```

### Targetting the attribute node 
There are certain DOM methods to display HTML dyanamically

#### 1. document.getElementById("id name")
   used to target element by its id. 
```bash 
 <script>
        var element;
        element = document.getElementById("header"); 
        console.log(element);
</script>

div#header
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: id, id: id, length: 1}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childElementCount: 1
childNodes: NodeList(3) [text, h1, text]
children: HTMLCollection [h1]
classList: DOMTokenList [value: '']
className: ""
clientHeight: 38
clientLeft: 0
clientTop: 0
clientWidth: 734
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: h1
hidden: false
id: "header"
innerHTML: "\n            <h1>heading</h1>\n        "
innerText: "heading"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: h1
localName: "div"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: div#menu
nextSibling: text
nodeName: "DIV"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 38
offsetLeft: 8
offsetParent: body
offsetTop: 22
offsetWidth: 734
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<div id=\"header\">\n            <h1>heading</h1>\n        </div>"
outerText: "heading"
ownerDocument: document
parentElement: div#wrapper
parentNode: div#wrapper
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 38
scrollLeft: 0
scrollTop: 0
scrollWidth: 734
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "DIV"
textContent: "\n            heading\n        "
title: ""
translate: true
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLDivElement
```

#### 2. document.getElementsByClassName("class name")
```bash
   <script>
        var element;
        element = document.getElementsByClassName("para"); 
        console.log(element);
    </script>

HTMLCollection(2) [p.para, p.para]
0: p.para
1: p.para
length: 2
[[Prototype]]: HTMLCollection
```
```bash
//targetting the first paragraph
   <script>
        var element;
        element = document.getElementsByClassName("para")[0]; 
        console.log(element);
    </script>

p.para
```
#### 3. document.getElementsByTagName("tag name")
```bash
    <script>
        var element;
        element = document.getElementsByTagName("ul"); 
        console.log(element);
    </script>
```

```bash
//targetting the first ul
    <script>
        var element;
        element = document.getElementsByTagName("ul")[0]; 
        console.log(element);
    </script>

ul#list
```


## We either get or set values 
- set: to change properties of element 
- get: to fetch value of elements

What can we get and set with DOM?
1. HTML
2. text
3. attribute

### DOM Get Methods:
1. innerText- returns the text inside the element specified 
2. innerHTML
3. getAttribute
4. getAttributeNode 
5. Attributes

### DOM Set Methods:
1. innerText
2. innerHTML
3. setAttribute
4. Attribute
5. removeAttribute

# DOM Get Methods
### 1. innerText 
extracts the text from a given id and returns it

```bash 
<script>
        var element;
        element = document.getElementById("header").innerText; 
        console.log(element);
</script>

heading
```

### 2. innerHTML
displays all the html inside the tag 

```bash 
<script>
        var element;
        element = document.getElementById("content").innerHTML; 
        console.log(element);
</script>

 <h2>sub heading</h2>
    <img src="" alt="">
    <img src="" alt="">
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

```

### 3. getAttribute
returns the value of class/ id

```bash 
//we make following changes in the code 

<body>
    <div id="wrapper">
        <div id="header" class="abc" style="border: 1px solid red;" > //added 
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
    <!--all the commands in dom.md -->

    <script>
        var element;
        element = document.getElementById("content").getAttribute("para"); 
        console.log(element);
    </script>


</body>
```

#### returns the classname 
```bash 
 <script>
        var element;
        element = document.getElementById("header").getAttribute("class"); 
        console.log(element);
</script>

abc 
```

#### returns the id name 
```bash 
<script>
    var element;
    element = document.getElementById("header").getAttribute(""); 
    console.log(element);
</script>

heading
```

### 4. getAttributeNode
returns the property name and value 

```bash
 <script>
        var element;
        element = document.getElementById("header").getAttributeNode("style"); 
        console.log(element);
</script>


style
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "style"
name: "style"
namespaceURI: null
nextSibling: null
nodeName: "style"
nodeType: 2
nodeValue: "border: 1px solid red;"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "border: 1px solid red;"
value: "border: 1px solid red;"
[[Prototype]]: Attr
```


```bash
<script>
        var element;
        element = document.getElementById("header").getAttributeNode("style").value; 
        console.log(element);
</script>

border: 1px solid red;
```

### 5. Attributes 
returns an object 

```bash
    <script>
        var element;
        element = document.getElementById("header").attributes;
        console.log(element);
    </script>

NamedNodeMap {0: id, 1: class, 2: style, id: id, class: class, style: style, length: 3}
0: id
1: class
2: style
class: class
id: id
style: style
length: 3
[[Prototype]]: NamedNodeMap
```

```bash
    <script>
        var element;
        element = document.getElementById("header").attributes[1];
        console.log(element);
    </script>

class
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "class"
name: "class"
namespaceURI: null
nextSibling: null
nodeName: "class"
nodeType: 2
nodeValue: "abc"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "abc"
value: "abc"
[[Prototype]]: Attr
```

#### returned the value of attribute 1 
```bash
    <script>
        var element;
        element = document.getElementById("header").attributes[1].value;
        console.log(element);
    </script>

abc 
```

# DOM Set Methods
### 1. innerText
This doesn't print in the h1 tag format on the viewport 

```bash
<script>
    var element
    element = document.getElementById('header').innerText = "wow";
    console.log(element)
</script>
```
> to print in h1 tag format we need to use innerHTML
### 2. innerHTML

```bash
 <script>
    var element;
    document.getElementById('header').innerHTML = "<h1>wow</h1>";
    element = document.getElementById("header").innerHTML;
    console.log(element)
</script>
```

### 3. setAttribute
changes attribute (class/id) name.
> no need to remember index number 

```bash
//were renaming class="abc" to class="xyz"
<script>
    var element;
    document.getElementById('header').setAttribute("class", "xyz");
    element = document.getElementById("header").getAttribute("class");
    console.log(element)
</script>

xyz
```

### 4. Attribute 
we can change value using index numbers 

```bash
<script>
    var element;
    document.getElementById('header').attributes[1].value = "sdf"; 
    
    //<div id="header" class="abc" style="border: 1px solid red;">

    //attribute  position 
    //   id        0 
    //  class      1 
    //  style      3

    element = document.getElementById("header").getAttribute("class");
    console.log(element)

</script>

sdf 
```

### 5. removeAttribute
removes a specific property from an attribute.

```bash 
<script>
    var element;
    document.getElementById('header').removeAttribute("style"); 
    // over here were removing border: 1px solid red on the header class

    
    //<div id="header" class="abc" style="border: 1px solid red;">

    //attribute  position 
    //   id        0 
    //  class      1 
    //  style      3

    element = document.getElementById("header").getAttribute("class");
    console.log(element)
</script>
```