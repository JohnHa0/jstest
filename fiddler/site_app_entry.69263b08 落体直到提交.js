/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
alert('ds')
var $jq = jQuery.noConflict(true);
var max=prompt('成绩', 70000);
var isSubmit=false;
(self.webpackChunkces_h5_template = self.webpackChunkces_h5_template || [])
.push([
	[885], {
		5891: (e, t, i) => {
			"use strict";
			i.r(t);
			var n = i(830),
				o = i(6447),
				r = i(5815),
				s = i(1174),
				a = i(6328),
				c = i(6815),
				l = i(7693),
				u = i(3374),
				h = i(7333),
				f = i.n(h),
				d = i(6999),
				p = i(3021),
				m = [];

			function v(e, t) {
				var i = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t && (n = n.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), i.push.apply(i, n)
				}
				return i
			}

			function g(e) {
				for (var t = 1; t < arguments.length; t++) {
					var i = null != arguments[t] ? arguments[t] : {};
					t % 2 ? v(Object(i), !0)
						.forEach((function(t) {
							(0, n.Z)(e, t, i[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : v(Object(i))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
						}))
				}
				return e
			}
			i(7820);
			var S = p.P6.getUrlParameterDictionary,
				w = (p.P6.resolveUrl, new(function(e) {
					(0, c.Z)(w, e);
					var t, i, n, h, p, v = (h = w, p = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, t = (0, u.Z)(h);
						if (p) {
							var i = (0, u.Z)(this)
								.constructor;
							e = Reflect.construct(t, arguments, i)
						} else e = t.apply(this, arguments);
						return (0, l.Z)(this, e)
					});

					function w() {
						var e;
						return (0, r.Z)(this, w), (e = v.call(this))
							.name = "MainLoadPage", e.assetsName = "loadUI", e._isSupportFirstScreen = !0, e
					}
					return (0, s.Z)(w, [{
						key: "initialize",
						value: function() {
							this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new loadUI.MainLoadPage, this.panel = this.view.progress)
						}
					}, {
						key: "movieIn",
						value: (n = (0, o.Z)(f()
							.mark((function e() {
								var t, i = this,
									n = arguments;
								return f()
									.wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, this.initialize(), (0, a.Z)((0, u.Z)(w.prototype), "movieIn", this)
													.call(this), e.next = 5, this._loadMainAssets();
											case 5:
												this._urlRef = t.urlRef, setTimeout((function() {
													i.gotoMainPage()
												}), 300);
											case 7:
											case "end":
												return e.stop()
										}
									}), e, this)
							}))), function() {
							return n.apply(this, arguments)
						})
					}, {
						key: "_loadMainAssets",
						value: (i = (0, o.Z)(f()
							.mark((function e() {
								var t, i = this;
								return f()
									.wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return t = SiteModel.assetsManager.getAssetsState("hiddenLevel"), e.next = 3, t.load({
													onProgress: function(e) {
														i.updateProgress(e)
													},
													onComplete: function() {
														i.updateProgress(1), console.log("_assetsState", t)
													}
												});
											case 3:
												return e.next = 5, d.P6.loadBMFonts("myFont", {
													format: "xml",
													lineHeight: 35,
													basePath: "https://jd.new.goods.test.tt.cagoe.com/static/font/",
													onComplete: function() {
														console.log("游戏字体1完成！")
													}
												});
											case 5:
												return e.next = 7, d.P6.loadBMFonts("freeNumFont", {
													format: "xml",
													lineHeight: 35,
													basePath: "https://jd.new.goods.test.tt.cagoe.com/static/font/",
													onComplete: function() {
														console.log("游戏字体2完成！")
													}
												});
											case 7:
												return e.next = 9, d.P6.loadBMFonts("listNum", {
													format: "xml",
													lineHeight: 35,
													basePath: "https://jd.new.goods.test.tt.cagoe.com/static/font/",
													onComplete: function() {
														console.log("游戏字体3完成！")
													}
												});
											case 9:
											case "end":
												return e.stop()
										}
									}), e)
							}))), function() {
							return i.apply(this, arguments)
						})
					}, {
						key: "updateProgress",
						value: function(e) {
							console.log("Main updateProgress", e), SiteModel.width;
							var t = 100 * e >> 0;
							t = Math.min(100, t), this.panel.gotoAndStop(t), t = t < 10 ? "0" + t : t, this.panel.label.text = " ".concat(t, "%")
						}
					}, {
						key: "gotoMainPage",
						value: (t = (0, o.Z)(f()
							.mark((function e() {
								var t, i, n, o, r, s, a, c, l, u, h;
								return f()
									.wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												if (SiteModel.debug && console.log("gotoMainPage urlRef", this._urlRef), t = this._urlRef) {
													e.next = 6;
													break
												}
												SiteModel.gotoDefaultPage(), e.next = 35;
												break;
											case 6:
												if (i = ["DefaultWaitLoadPage"], n = t.hash.slice(1), o = {}, n.indexOf("?") && (o = S(n), r = n.split("?"), n = r[0]), n && "" != n && n != this.name) {
													e.next = 14;
													break
												}
												SiteModel.gotoDefaultPage(), e.next = 35;
												break;
											case 14:
												if (!(i.indexOf(n) >= 0)) {
													e.next = 18;
													break
												}
												return console.log("不适合的跳转的页面进行排除"), SiteModel.gotoDefaultPage(), e.abrupt("return");
											case 18:
												if (s = SiteModel.pager.getPage(n)) {
													e.next = 34;
													break
												}
												for (c = 0; c < m.length; c++)
													if (n == (l = m[c])
														.pageName) a = l;
													else if (l.pages)
													for (u = 0; u < l.pages.length; u++) h = l.pages[u], n == h && (a = l);
												if (a) {
													e.next = 25;
													break
												}
												SiteModel.gotoDefaultPage(), e.next = 32;
												break;
											case 25:
												if (!a || !a.importFun) {
													e.next = 31;
													break
												}
												return e.next = 28, a.importFun();
											case 28:
												SiteModel.gotoPage(n, g(g({}, o), {}, {
													replace: !0
												})), e.next = 32;
												break;
											case 31:
												SiteModel.gotoDefaultPage();
											case 32:
												e.next = 35;
												break;
											case 34:
												s.isSupportFirstScreen ? SiteModel.gotoPage(n, g(g({}, o), {}, {
													replace: !0
												})) : SiteModel.gotoDefaultPage();
											case 35:
											case "end":
												return e.stop()
										}
									}), e, this)
							}))), function() {
							return t.apply(this, arguments)
						})
					}, {
						key: "resize",
						value: function() {
							if ((0, a.Z)((0, u.Z)(w.prototype), "resize", this)
								.call(this), this.isShowBool) {
								SiteModel.width;
								var e = SiteModel.height;
								this.view.y = (e - 1750) / 2
							}
						}
					}]), w
				}(p._x)));
			SiteModel.pager.add(w);
			var y = new(function(e) {
				(0, c.Z)(o, e);
				var t, i, n = (t = o, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, u.Z)(t);
					if (i) {
						var o = (0, u.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, l.Z)(this, e)
				});

				function o() {
					var e;
					return (0, r.Z)(this, o), (e = n.call(this))
						.name = "DefaultWaitLoadPage", e.assetsName = "loadUI", e._isSupportFirstScreen = !0, e
				}
				return (0, s.Z)(o, [{
					key: "initialize",
					value: function() {
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new loadUI.DefaultWaitLoadPage, this.panel = this.view.panel)
					}
				}, {
					key: "movieIn",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						(0, a.Z)((0, u.Z)(o.prototype), "movieIn", this)
						.call(this, e), this.updateProgress(0)
					}
				}, {
					key: "updateProgress",
					value: function(e) {
						var t = SiteModel.width,
							i = 100 * e >> 0;
						i = (i = Math.min(100, i)) < 10 ? "0" + i : i, this.panel.label.text = "loading ".concat(i, "%"), this.panel.psBar.width = t * e, this.panel.psBg.width = t, this.panel.psBar.x = this.panel.psBg.x = -t / 2
					}
				}, {
					key: "loadEndToNextPage",
					value: function() {
						var e = this;
						setTimeout((function() {
							(0, a.Z)((0, u.Z)(o.prototype), "loadEndToNextPage", e)
							.call(e)
						}), 200)
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, a.Z)((0, u.Z)(o.prototype), "resize", this)
							.call(this), this.isShowBool) {
							var e = SiteModel.width,
								t = SiteModel.height;
							this.panel.y = t / 2, this.panel.x = e / 2, this.panel.psBg.width = e, this.panel.psBg.x = -e / 2, this.panel.psBar.x = -e / 2, this.view.bg.width = e, this.view.bg.height = t
						}
					}
				}]), o
			}(p.Wg));
			SiteModel.pager.add(y)
		},
		7121: (e, t, i) => {
			"use strict";
			i.r(t);
			var n = i(6447),
				o = i(5815),
				r = i(1174),
				s = i(6328),
				a = i(6815),
				c = i(7693),
				l = i(3374),
				u = i(7333),
				h = i.n(u),
				f = i(3021),
				d = i(6999);
			var p = new(function(e) {
				(0, a.Z)(p, e);
				var t, i, u = (t = p, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function p() {
					var e;
					return (0, o.Z)(this, p), (e = u.call(this))
						.name = "RegisterPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(p, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.RegisterPanel, this.phoneInput = d.ZP.utils.addInputText(this.view.phoneInput, {
							type: "tel",
							width: this.view.phoneInput.width,
							lineHeight: 53
						}, "请输入手机号"), this.pwdInput = d.ZP.utils.addInputText(this.view.pwdInput, {
							type: "password",
							width: this.view.pwdInput.width,
							lineHeight: 53
						}, "请输入密码"), this.pwd2Input = d.ZP.utils.addInputText(this.view.pwd2Input, {
							type: "password",
							width: this.view.pwd2Input.width,
							lineHeight: 53
						}, "请确认密码"), this.nameInput = d.ZP.utils.addInputText(this.view.nameInput, {
							type: "text",
							max: 8,
							width: this.view.nameInput.width,
							lineHeight: 53
						}, "请留下你响当当的名号"), d.ZP.utils.setButton(this.view.registerBtn, (0, n.Z)(h()
							.mark((function t() {
								var i;
								return h()
									.wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (SiteModel.tracker.event("register"), tar.hitTag("register"), console.log("this.view.registerBtn"), e.phoneInput.isInput) {
													t.next = 6;
													break
												}
												return alert("请输入手机号"), t.abrupt("return");
											case 6:
												if (e.pwdInput.isInput) {
													t.next = 9;
													break
												}
												return alert("请输入密码"), t.abrupt("return");
											case 9:
												if (e.nameInput.isInput) {
													t.next = 12;
													break
												}
												return alert("请留下你响当当的名号"), t.abrupt("return");
											case 12:
												if (e.pwdInput.value == e.pwd2Input.value) {
													t.next = 15;
													break
												}
												return alert("两次密码不一致"), t.abrupt("return");
											case 15:
												if (/^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.phoneInput.value)) {
													t.next = 19;
													break
												}
												return alert("请输入正确的手机号"), t.abrupt("return");
											case 19:
												return t.next = 21, f.ef.callEasyItf("userRegister", {
													phone: e.phoneInput.value,
													password: e.pwdInput.value,
													user_name: e.nameInput.value
												});
											case 21:
												i = t.sent, console.log(i), 1 == i.IsSuccess ? (SiteModel.gotoPage("GamePage"), e.hide()) : alert(i.ErrMsg);
											case 24:
											case "end":
												return t.stop()
										}
									}), t)
							})))))
					}
				}, {
					key: "show",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(p.prototype), "show", this)
							.call(this, e)
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(p.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), p
			}(f.P));
			SiteModel.paneler.add(p);
			const m = p;
			var v = new(function(e) {
				(0, a.Z)(p, e);
				var t, i, u = (t = p, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function p() {
					var e;
					return (0, o.Z)(this, p), (e = u.call(this))
						.name = "LoginPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(p, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.LoginPanel, this.phoneInput = d.ZP.utils.addInputText(this.view.phoneInput, {
							type: "tel",
							width: this.view.phoneInput.width,
							lineHeight: 53
						}, "请输入手机号"), this.pwdInput = d.ZP.utils.addInputText(this.view.pwdInput, {
							type: "password",
							width: this.view.pwdInput.width,
							lineHeight: 53
						}, "请输入密码"), d.ZP.utils.setButton(this.view.loginBtn, (0, n.Z)(h()
							.mark((function t() {
								var i;
								return h()
									.wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (SiteModel.tracker.event("signin"), tar.hitTag("signin"), e.phoneInput.isInput) {
													t.next = 5;
													break
												}
												return alert("请输入手机号"), t.abrupt("return");
											case 5:
												if (e.pwdInput.isInput) {
													t.next = 8;
													break
												}
												return alert("请输入密码"), t.abrupt("return");
											case 8:
												if (/^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.phoneInput.value)) {
													t.next = 12;
													break
												}
												return alert("请输入正确的手机号"), t.abrupt("return");
											case 12:
												return t.next = 14, f.ef.callEasyItf("userLogin", {
													phone: e.phoneInput.value,
													password: e.pwdInput.value
												});
											case 14:
												i = t.sent, console.log(i), 1 == i.IsSuccess ? (e.hide(), SiteModel.gotoPage("GamePage")) : alert(i.ErrMsg);
											case 17:
											case "end":
												return t.stop()
										}
									}), t)
							})))), d.ZP.utils.setButton(this.view.registerBtn, (function() {
							SiteModel.tracker.event("signin_register"), tar.hitTag("signin_register"), m.show(), e.hide()
						})))
					}
				}, {
					key: "show",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(p.prototype), "show", this)
							.call(this, e)
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(p.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), p
			}(f.P));
			SiteModel.paneler.add(v);
			const g = v;
			var S = new(function(e) {
				(0, a.Z)(m, e);
				var t, i, u, p = (i = m, u = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, t = (0, l.Z)(i);
					if (u) {
						var n = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(t, arguments, n)
					} else e = t.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function m() {
					var e;
					return (0, o.Z)(this, m), (e = p.call(this))
						.name = "ListPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(m, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.ListPanel, this.scrollBox = new PIXI.Container, this.listPanel = new d.P8({
							target: this.scrollBox,
							hasBar: !1,
							hasMask: !0,
							viewH: d.Z4.application.height,
							viewW: 750,
							width: 750,
							isOutside: !0
						}), this.view.addChild(this.listPanel), this.listPanelBody = new hiddenLevel.ListPanelBody, this.listPanelBody.x = (750 - this.listPanelBody.width) / 2, this.scrollBox.addChild(this.listPanelBody), d.Z4.utils.setButton(this.listPanelBody.closeBtn, (function() {
							e.hide()
						})), this.time = new PIXI.BitmapText("00:00", {
							fontName: "freeNumFont",
							fontSize: 80,
							letterSpacing: 0,
							tint: 4473924
						}), this.firstName = new PIXI.Text("张三", {
							fontFamily: "微软雅黑",
							fontSize: 28,
							fill: "#444444",
							align: "center"
						}), this.score = new PIXI.BitmapText("00000", {
							fontName: "myFont",
							fontSize: 70,
							letterSpacing: 0
						}), this.listPanelBody.firstTime.removeChildren(), this.listPanelBody.firstName.removeChildren(), this.listPanelBody.firstScore.removeChildren(), console.log("this.firstName ", this.firstName), this.time.x = 20, this.time.y = -40, this.firstName.x = 30, this.firstName.y = 8, this.score.x = -28, this.score.y = -10, this.listPanelBody.firstTime.addChild(this.time), this.listPanelBody.firstName.addChild(this.firstName), this.listPanelBody.firstScore.addChild(this.score))
					}
				}, {
					key: "show",
					value: (t = (0, n.Z)(h()
						.mark((function e(t) {
							var i, n, o, r, a, c, u, d, p;
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.initialize(), (0, s.Z)((0, l.Z)(m.prototype), "show", this)
												.call(this, t), this.listPanelBody.listBox.removeChildren(), e.next = 5, f.ef.callEasyItf("getRankingListInfo");
										case 5:
											if (i = e.sent, console.log(i), 1 == i.IsSuccess)
												if ((n = i.data)
													.length <= 0) alert("排行榜上还没有人哦"), this.hide();
												else
													for (this.time.text = this.getTime(n[0].game_duration), this.score.text = n[0].fraction.padStart(6, "0"), this.firstName.text = n[0].user_name.substring(0, 1) + "*" + n[0].user_name.substring(n[0].user_name.length - 1), o = 1; o < n.length; o++) r = n[o], console.log(r), a = new hiddenLevel.ListItem, c = new PIXI.BitmapText(r.ranking, {
														fontName: "freeNumFont",
														fontSize: 80,
														letterSpacing: 0,
														tint: 4473924
													}), u = new PIXI.BitmapText(r.fraction.padStart(6, "0"), {
														fontName: "freeNumFont",
														fontSize: 80,
														letterSpacing: 0,
														tint: 4473924
													}), d = new PIXI.Text(r.user_name.substring(0, 1) + "*" + r.user_name.substring(r.user_name.length - 1), {
														fontFamily: "微软雅黑",
														fontSize: 28,
														fill: "#444444",
														align: "center"
													}), p = new PIXI.BitmapText(this.getTime(r.game_duration), {
														fontName: "freeNumFont",
														fontSize: 80,
														letterSpacing: 0,
														tint: 4473924
													}), c.x = 60, c.y = -30, u.x = 453, u.y = -30, d.x = 325, d.y = 16, p.x = 170, p.y = -30, a.addChild(c), a.addChild(u), a.addChild(d), a.addChild(p), a.y = (o - 1) * a.height, this.listPanelBody.listBox.addChild(a);
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function(e) {
						return t.apply(this, arguments)
					})
				}, {
					key: "getTime",
					value: function(e) {
						var t = e / 60 >> 0,
							i = e % 60,
							n = t < 10 ? "0" + t : t;
						return i < 10 ? n + ":0" + i : n + ":" + i
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(m.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2, this.listPanel.y = 281
						}
					}
				}]), m
			}(f.P));
			SiteModel.paneler.add(S);
			const w = S;
			var y = new(function(e) {
				(0, a.Z)(u, e);
				var t, i, n = (t = u, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function u() {
					var e;
					return (0, o.Z)(this, u), (e = n.call(this))
						.name = "RulePanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(u, [{
					key: "initialize",
					value: function() {
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.RulePanel, this.rule = new hiddenLevel.HiddenRuleInfo, this.box = this.view.box, this.box.removeChildren(), this.myScrollPanel = new d.P8({
							target: this.rule,
							hasBar: !1,
							hasMask: !0,
							viewH: 750,
							viewW: 500,
							width: 459,
							height: 1240,
							isOutside: !0
						}), this.box.addChild(this.myScrollPanel))
					}
				}, {
					key: "show",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(u.prototype), "show", this)
							.call(this, e)
					}
				}, {
					key: "hide",
					value: function() {
						(0, s.Z)((0, l.Z)(u.prototype), "hide", this)
						.call(this), tar.hitTag("rule_confirm")
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(u.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - 1750) / 2
						}
					}
				}]), u
			}(f.P));
			SiteModel.paneler.add(y);
			const x = y;
			var I = i(7820);
			var k = new(function(e) {
				(0, a.Z)(m, e);
				var t, i, u, f, p = (u = m, f = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, t = (0, l.Z)(u);
					if (f) {
						var i = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(t, arguments, i)
					} else e = t.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function m() {
					var e;
					return (0, o.Z)(this, m), (e = p.call(this))
						.name = "HomePage", e.assetsName = "hiddenLevel", e._isSupportFirstScreen = !0, e
				}
				return (0, r.Z)(m, [{
					key: "initialize",
					value: (i = (0, n.Z)(h()
						.mark((function e() {
							var t = this;
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!this._isInitializeComplete) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											this._isInitializeComplete = !0, this.view = new hiddenLevel.HomePage, d.Z4.utils.setButton(this.view.loginBtn, (0, n.Z)(h()
												.mark((function e() {
													var i;
													return h()
														.wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	return tar.hitTag("startgame_signin"), SiteModel.tracker.event("startgame_signin"), e.next = 4, I.Z.dispatch("userState/getCookie", {
																		name: "cg_SiteUserID"
																	});
																case 4:
																	i = e.sent, console.log("_userInfo", i), i ? t.gotoPage("GamePage") : g.show();
																case 7:
																case "end":
																	return e.stop()
															}
														}), e)
												})))), d.Z4.utils.setButton(this.view.listBtn, (function() {
												tar.hitTag("startgame_ranking"), SiteModel.tracker.event("startgame_ranking"), w.show()
											})), d.Z4.utils.setButton(this.view.ruleBtn, (function() {
												tar.hitTag("startgame_rule"), SiteModel.tracker.event("startgame_rule"), x.show()
											}));
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function() {
						return i.apply(this, arguments)
					})
				}, {
					key: "movieIn",
					value: (t = (0, n.Z)(h()
						.mark((function e(t) {
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											console.log("HomePage movieIn"), this.initialize(), (0, s.Z)((0, l.Z)(m.prototype), "movieIn", this)
												.call(this, t);
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function(e) {
						return t.apply(this, arguments)
					})
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(m.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.width;
							var e = SiteModel.height;
							this.view.y = (e - 1750) / 2
						}
					}
				}]), m
			}(f._x));
			SiteModel.pager.add(k);
			var Z = i(4774);
			var P = new(function(e) {
				(0, a.Z)(d, e);
				var t, i, u, f = (i = d, u = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, t = (0, l.Z)(i);
					if (u) {
						var n = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(t, arguments, n)
					} else e = t.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function d() {
					var e;
					return (0, o.Z)(this, d), (e = f.call(this))
						.name = "ResurrectionPosterPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(d, [{
					key: "initialize",
					value: function() {
						if (!this._isInitializeComplete) {
							this._isInitializeComplete = !0, this.view = new hiddenLevel.ResurrectionPosterPanel, this.beforeScore = new PIXI.BitmapText("00000", {
								fontName: "freeNumFont",
								fontSize: 120,
								letterSpacing: 0,
								tint: 2293504
							}), this.beforeScore.y = -90, this.beforeScore.x = -20, this.view.imageBox.score.removeChildren(), this.view.imageBox.score.addChild(this.beforeScore), this.imgBox = new Image;
							var e = $('<div><img class="card-image" style="width:629px;height:1117px;opacity:0;-webkit-touch-callout: default;"><img></div>');
							pixiCg.utils.addDom(e, this.view.imageBox)
						}
					}
				}, {
					key: "show",
					value: (t = (0, n.Z)(h()
						.mark((function e(t) {
							var i;
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.initialize(), (0, s.Z)((0, l.Z)(d.prototype), "show", this)
												.call(this, t), this.beforeScore.text = t.score, e.next = 5, pixiCg.utils.getBase64(this.view.imageBox, {
													width: 629,
													height: 1117
												});
										case 5:
											i = e.sent, $(".card-image")[0].src = i;
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function(e) {
						return t.apply(this, arguments)
					})
				}, {
					key: "hide",
					value: function() {
						(0, s.Z)((0, l.Z)(d.prototype), "hide", this)
						.call(this), this.emit("hide")
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(d.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), d
			}(f.P));
			SiteModel.paneler.add(P);
			const z = P;
			var R = new(function(e) {
				(0, a.Z)(u, e);
				var t, i, n = (t = u, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function u() {
					var e;
					return (0, o.Z)(this, u), (e = n.call(this))
						.name = "SharePanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(u, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.SharePanel, d.ZP.utils.setButton(this.view.bg, (function() {
							e.hide()
						})), SiteModel.shareModel.on("shareOpen", (function() {
							console.log("openShare"), e.hide(), e.emit("openShare")
						})))
					}
				}, {
					key: "show",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(u.prototype), "show", this)
							.call(this, e)
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(u.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), u
			}(f.P));
			SiteModel.paneler.add(R);
			const B = R;
			var M = new(function(e) {
				(0, a.Z)(u, e);
				var t, i, n = (t = u, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function u() {
					var e;
					return (0, o.Z)(this, u), (e = n.call(this))
						.name = "ResurrectionPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(u, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.ResurrectionPanel, d.ZP.utils.setButton(this.view.resurrectionBtn, (function() {
							SiteModel.tracker.event("resurrection"), tar.hitTag("resurrection"), SiteModel.isWeixin ? B.show() : z.show({
								score: e.score
							})
						})), d.ZP.utils.setButton(this.view.endBtn, (function() {
							SiteModel.tracker.event("nothanks"), tar.hitTag("nothanks"), e.emit("end"), e.hide()
						})))
					}
				}, {
					key: "show",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(u.prototype), "show", this)
							.call(this, e), this.score = e.score
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(u.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), u
			}(f.P));
			SiteModel.paneler.add(M);
			const A = M;
			i(5054);
			var b, E = i(398);
			var C = [],
				q = [],
				O = {
					line: 1,
					rect: 2,
					tAngle: 3,
					zAngle1: 4,
					zAngle2: 5,
					fAngle1: 6,
					fAngle2: 7,
					rectJ: 8,
					rect91: 9
				},
				J = {
					100: "a",
					250: "b",
					350: "c",
					500: "d",
					0: "e"
				},
				X = 0,
				T = new(function(e) {
					(0, a.Z)(v, e);
					var t, i, u, p, m = (u = v, p = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, t = (0, l.Z)(u);
						if (p) {
							var i = (0, l.Z)(this)
								.constructor;
							e = Reflect.construct(t, arguments, i)
						} else e = t.apply(this, arguments);
						return (0, c.Z)(this, e)
					});

					function v() {
						var e;
						return (0, o.Z)(this, v), (e = m.call(this))
							.name = "GamePage", e.assetsName = "hiddenLevel", e._isSupportFirstScreen = !0, e
					}
					return (0, r.Z)(v, [{
						key: "initialize",
						value: function() {
							var e = this;
							if (!this._isInitializeComplete) {
								this._isInitializeComplete = !0;
								var t = hiddenLevel;
								this.freeResNum = 2, this.shareResNum = 3, this.view = new t.GamePage, this.gameBox = this.view.box.box, this.gameTime = 0, this.myScore = new d.Wb.BitmapText("00000", {
									fontName: "freeNumFont",
									fontSize: 80,
									letterSpacing: 15,
									tint: 65288
								}), this.timeText = new d.Wb.BitmapText("00`00", {
									fontName: "freeNumFont",
									fontSize: 80,
									letterSpacing: 0,
									tint: 16777215
								}), this.myScore.y = -55, this.myScore.x = -10, this.timeText.y = -45, this.timeText.x = 50, this.view.topBox.myScore.removeChildren(), this.view.topBox.time.addChild(this.timeText), this.view.topBox.myScore.addChild(this.myScore), b = new Z.c2({
									debug: !1,
									hasTip: !0,
									size: 36,
									row: 20,
									col: 10,
									hasGrid: !1,
									tipBoxAlpha: .2,
									waitAll: 3,
									startOffsetY: 1,
									hasLevel: !0,
									speed: 1,
									skinList: {
										line: new t.BlockSkin0,
										rect: new t.BlockSkin1,
										tAngle: new t.BlockSkin2,
										zAngle1: new t.BlockSkin3,
										zAngle2: new t.BlockSkin4,
										fAngle1: new t.BlockSkin5,
										fAngle2: new t.BlockSkin6,
										rectJ: new t.BlockSkin7,
										rect91: new t.BlockSkin7
									},
									otherTetrisDataMap: {
										rectJ: {
											probability: .25,
											state0: [
												[0, 0, 1],
												[0, 0, 1],
												[0, 0, 1],
												[1, 0, 1],
												[0, 1, 0]
											],
											state1: [
												[0, 1, 0, 0, 0],
												[1, 0, 0, 0, 0],
												[0, 1, 1, 1, 1]
											],
											state2: [
												[0, 1, 0],
												[1, 0, 1],
												[1, 0, 0],
												[1, 0, 0],
												[1, 0, 0]
											],
											state3: [
												[1, 1, 1, 1, 0],
												[0, 0, 0, 0, 1],
												[0, 0, 0, 1, 0]
											]
										},
										rect91: {
											probability: .25,
											state0: [
												[0, 0, 0, 1],
												[1, 1, 1, 0],
												[1, 1, 1, 0],
												[1, 1, 1, 0]
											],
											state1: [
												[1, 1, 1, 0],
												[1, 1, 1, 0],
												[1, 1, 1, 0],
												[0, 0, 0, 1]
											],
											state2: [
												[0, 1, 1, 1],
												[0, 1, 1, 1],
												[0, 1, 1, 1],
												[1, 0, 0, 0]
											],
											state3: [
												[1, 0, 0, 0],
												[0, 1, 1, 1],
												[0, 1, 1, 1],
												[0, 1, 1, 1]
											]
										}
									},
									levelMap: {
										level0: {
											score: 1e3,
											speed: .9
										},
										level1: {
											score: 2e3,
											speed: .8
										},
										level2: {
											score: 5e3,
											speed: .6
										},
										level3: {
											score: 2e4,
											speed: .5
										},
										level4: {
											score: 4e4,
											speed: .3
										}
									}
								}), this.gameBox.addChild(b);
								var i = 361 / (b.size * b.col),
									o = b.size * b.row * i;
								b.scale.set(i), b.y = 760 - o, b.on("reset", (function(e) {})), b.on("start", (function(e) {})), b.on("end", function() {
										var t = (0, n.Z)(h()
											.mark((function t(i) {
												return h()
													.wrap((function(t) {
														for (;;) switch (t.prev = t.next) {
															case 0:
																e.gameTime += b.gameTime, e.gameResurrection(), e.view.life.gotoAndStop(2 - e.freeResNum);
															case 2:
															case "end":
																return t.stop()
														}
													}), t)
											})));
										return function(e) {
											return t.apply(this, arguments)
										}
									}()), b.on("updateWhereaboutsTetris", (function(e) {})), b.on("pause", (function(e) {})), b.on("recover", (function(e) {})), b.on("tetrisDownStopEvent", (function(e) {
										q.push(O[e.tetris.name])
									})), b.on("update", (function(t) {
										var i = (b.gameTime + e.gameTime) / 1e3 >> 0,
											n = i / 60 >> 0,
											o = i % 60,
											r = n < 10 ? "0" + n : n;
										r = o < 10 ? r + ":0" + o : r + ":" + o, e.timeText.text = r
									})), this.nextTipBoxs = [this.view.topBox.next], b.on("updateWaitTetris", (function(t) {

											var first=0,tt=0;//--------------
										try{
											//alert('卡前3秒，点确定')
											  $jq.ajax({
															type: "post",
															url: 'https://jd.new.goods.tt.cagoe.com/Cg/Itf/Java/CmnMisItf.jsp?ItfName=getRankingListInfo&method=GetSqlData',
																async :false,
																dataType:'json',
															success: function(r) {
																//tt=parseInt(r.data[0].game_duration)+parseInt(300*Math.random())
																	
																	first=parseInt(r.data[3].fraction)+parseInt(3*Math.random())*50+50
															}
											  });
											    } catch (e) { alert(e.name + ": " + e.message); } 
										//alert(b.score);
										var scoreList=["350","0","100","250","0","0","0","0","100","0","0","0","0","0","0","0","0","0","100","0","250","0","0","100","250","0","100","350"];
										var scoreList2=["0","100","0","100","0","0","100"];
										var temScore=scoreList[Math.floor((Math.random()*scoreList.length))];
										if(b.score<1000){
											temScore=scoreList2[Math.floor((Math.random()*scoreList2.length))];
										}
										if(b.score>first){
											temScore=0;
										}
										b.setScore(b.score+temScore*1);
										C.push(J[temScore]);
										var ttt=(new Date).getTime()-e.startTime;
										//alert((new Date).getTime()+"  "+e.startTime)
										if(ttt>61*60*1000&&!isSubmit){
											isSubmit=true;
											e.gameEnd();
										}
										for (var i = t.waitTetrisList, n = 0; n < e.nextTipBoxs.length; n++) {
											var o = e.nextTipBoxs[n];
											o.removeChildren();
											var r = i[n];
											if (r) {
												o.addChild(r);
												var s = Math.min(160 / r.tWidth, 225 / r.hWidth);
												r.scale.set(s), r.x = (160 - r.width) / 2, r.y = (225 - r.height) / 2
											}
										}
									})), b.on("fullLines", (function(e) {})), b.on("downEndMove", (function(e) {})), b.on("updateLevel", (function(e) {})), b.on("updateScore", (function(t) {
										console.log("_gameScoreList", C), e.myScore.text = b.score.toString()
											.padStart(6, "0")
									})), b.on("updateElimination", (function(e) {})), $("#pixi-main-box")
									.on("touchstart", (function() {
										X++
									})), z.on("hide", (function() {
										e.shareResNum -= 1, e.view.life.gotoAndStop(2), e.gameResurrection(), A.hide()
									})), B.on("openShare", (function() {
										e.shareResNum -= 1, e.view.life.gotoAndStop(2), e.gameResurrection(), A.hide()
									})), A.on("end", (function() {
										e.gameEnd()
									})), d.P6.setButton(this.view.leftBtn, (function() {
										b.leftMove()
									})), d.P6.setButton(this.view.rightBtn, (function() {
										b.rightMove()
									})), d.P6.setButtonSlidingClick(this.view.rotateBtn, (function() {
										b.rotatingMove()
									})), d.P6.setButtonSlidingClick(this.view.downBtn, (function() {
										b.downMove()
									})), d.P6.setButtonSlidingClick(this.view.downEndBtn, (function() {
										b.downEndMove()
									}))
							}
						}
					}, {
						key: "gameResurrection",
						value: function() {
							var e = b.score;
							b.gameReset({
								fillMap: this.GameMap
							}), b.gameStart(), b.setScore(e)
						}
					}, {
						key: "getParamFromUrl",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
								i = new RegExp("[\\?\\s&]".concat(e, "\\s*=([^&#]*)")),
								n = t.match(i),
								o = "";
							return null !== n && (o = n[1]), o
						}
					}, {
						key: "gameEnd",
						value: (i = (0, n.Z)(h()
							.mark((function e() {
								var t, i, n, o, r;
								var sec = 0;
								return h()
									.wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return t = Date.parse(new Date), e.next = 3, f.ef.callEasyItf("submitGameResult", {
													game_key: "jdxbhycg",
													user_game_rec_id: this.userGameReId,
													game_level_no: "1",
													fraction: this.encrypt(b.score),
													game_duration: (t - this.startTime) / 1e3 >> 0,
													memo: X.toString(16) + "|a:" + (5 - this.freeResNum - this.shareResNum)
														.toString() + ",b:" + this.gameTime + ",c:[" + C + "],d:[" + q + "]",
													encrypt: this.encryptString,
													score_list: JSON.stringify(C),
													lattice_number_list: JSON.stringify(q)
												});
											case 3:
													alert(b.score), 1 == (i = e.sent)
													.IsSuccess ? !i.more_than_users && i.ranking > 0 && i.ranking <= 100 ? (n = this.gameTime / 1e3 >> 0, o = n / 60 >> 0, r = n % 60, this.gotoPage("SuccessPage", {
														minute: o,
														seconds: r,
														nowID: this.userGameReId,
														nowScore: b.score,
														beforeScore: i.highest_fraction,
														beforeID: i.max_fraction_user_game_rec_id,
														rank: i.ranking
													})) : this.gotoPage("FailPage", {
														score: b.score,
														percentage: i.more_than_users
													}) : alert(i.ErrMsg);
											case 5:
											case "end":
												return e.stop()
										}
									}), e, this)
							}))), function() {
							return i.apply(this, arguments)
						})
					}, {
						key: "encrypt",
						value: function(e) {
							var t = E.enc.Hex.parse("0321eb5ba1f75de4d1cd3471af7418a4"),
								i = E.enc.Hex.parse("8a21ebeba1f75de2d3cd3471af7418a8"),
								n = E.enc.Utf8.parse(e);
							return E.AES.encrypt(n, t, {
									iv: i,
									mode: E.mode.CBC
								})
								.toString()
						}
					}, {
						key: "decrypt",
						value: function(e, t, i) {
							var n = E.enc.Hex.parse(e),
								o = E.enc.Hex.parse(t),
								r = E.AES.decrypt(i, n, {
									iv: o,
									mode: E.mode.CBC
								});
							return E.enc.Utf8.stringify(r)
								.toString()
						}
					}, {
						key: "movieIn",
						value: (t = (0, n.Z)(h()
							.mark((function e(t) {
								var i;
								return h()
									.wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return this.initialize(), (0, s.Z)((0, l.Z)(v.prototype), "movieIn", this)
													.call(this), this.myScore.text = "000000", this.timeText.text = "00:00", this.gameTime = 0, this.freeResNum = 2, this.shareResNum = 3, X = 0, C = [], q = [], this.view.life.gotoAndStop(0), e.next = 13, f.ef.callEasyItf("startGame", {
														game_key: "jdxbhycg",
														game_level_no: "1"
													});
											case 13:
												if (1 == (i = e.sent)
													.IsSuccess) {
													e.next = 18;
													break
												}
												return alert(i.ErrMsg), this.gotoPage("HomePage"), e.abrupt("return");
											case 18:
												this.startTime = Date.parse(new Date), this.userGameReId = i.user_game_rec_id, this.encryptString = i.encrypt, this.GameMap = [
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
												], b.gameReset({
													fillMap: this.GameMap
												}), b.gameStart();
											case 24:
											case "end":
												return e.stop()
										}
									}), e, this)
							}))), function(e) {
							return t.apply(this, arguments)
						})
					}, {
						key: "resize",
						value: function() {
							if ((0, s.Z)((0, l.Z)(v.prototype), "resize", this)
								.call(this), this.isShowBool) {
								var e = SiteModel.width,
									t = SiteModel.height;
								Math.min(this.width / e, this.height / t), this.view.y = (t - 1750) / 2
							}
						}
					}]), v
				}(f._x));
			SiteModel.pager.add(T);
			var F = new(function(e) {
				(0, a.Z)(d, e);
				var t, i, u, f = (i = d, u = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, t = (0, l.Z)(i);
					if (u) {
						var n = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(t, arguments, n)
					} else e = t.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function d() {
					var e;
					return (0, o.Z)(this, d), (e = f.call(this))
						.name = "SuccessPosterPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(d, [{
					key: "initialize",
					value: function() {
						if (!this._isInitializeComplete) {
							this._isInitializeComplete = !0, this.view = new hiddenLevel.SuccessPosterPanel, this.min = new PIXI.BitmapText("00000", {
								fontName: "freeNumFont",
								fontSize: 80,
								letterSpacing: 0,
								tint: 3684408
							}), this.sec = new PIXI.BitmapText("00000", {
								fontName: "freeNumFont",
								fontSize: 80,
								letterSpacing: 0,
								tint: 3684408
							}), this.beforeScore = new PIXI.BitmapText("00000", {
								fontName: "freeNumFont",
								fontSize: 120,
								letterSpacing: 0,
								tint: 2293504
							}), this.rank = new PIXI.BitmapText("NO.1", {
								fontName: "listNum",
								fontSize: 160,
								letterSpacing: 0
							}), this.view.imageBox.score.removeChildren(), this.view.imageBox.index.removeChildren(), this.view.imageBox.minute.removeChildren(), this.view.imageBox.second.removeChildren(), this.beforeScore.y = -90, this.beforeScore.x = -20, this.rank.y = -80, this.min.y = -55, this.sec.y = -55, this.view.imageBox.score.addChild(this.beforeScore), this.view.imageBox.index.addChild(this.rank), this.view.imageBox.minute.addChild(this.min), this.view.imageBox.second.addChild(this.sec), this.imgBox = new Image;
							var e = $('<div><img class="card-image" style="width:629px;height:1117px;opacity:0;-webkit-touch-callout: default;"><img></div>');
							pixiCg.utils.addDom(e, this.view.imageBox)
						}
					}
				}, {
					key: "show",
					value: (t = (0, n.Z)(h()
						.mark((function e(t) {
							var i;
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.initialize(), (0, s.Z)((0, l.Z)(d.prototype), "show", this)
												.call(this, t), t && (this.beforeScore.text = t.beforeScore.toString()
													.padStart(5, "0"), this.rank.text = "NO." + t.rank, this.min.text = t.minute, this.sec.text = t.seconds), e.next = 5, pixiCg.utils.getBase64(this.view.imageBox, {
													width: 629,
													height: 1117
												});
										case 5:
											i = e.sent, $(".card-image")[0].src = i;
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function(e) {
						return t.apply(this, arguments)
					})
				}, {
					key: "hide",
					value: function() {
						SiteModel.tracker.event("challenge_close"), tar.hitTag("challenge_close"), (0, s.Z)((0, l.Z)(d.prototype), "hide", this)
							.call(this)
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(d.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), d
			}(f.P));
			SiteModel.paneler.add(F);
			const j = F;
			i(4147);
			var L = new(function(e) {
				(0, a.Z)(u, e);
				var t, i, n = (t = u, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function u() {
					var e;
					return (0, o.Z)(this, u), (e = n.call(this))
						.name = "SuccessPage", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(u, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.SuccessPage, this.myScore = new d.Wb.BitmapText("00000", {
							fontName: "freeNumFont",
							fontSize: 80,
							letterSpacing: 0,
							tint: 2293504
						}), this.min = new d.Wb.BitmapText("00000", {
							fontName: "freeNumFont",
							fontSize: 70,
							letterSpacing: 0,
							tint: 3684408
						}), this.sec = new d.Wb.BitmapText("00000", {
							fontName: "freeNumFont",
							fontSize: 70,
							letterSpacing: 0,
							tint: 3684408
						}), this.beforeScore = new d.Wb.BitmapText("00000", {
							fontName: "freeNumFont",
							fontSize: 120,
							letterSpacing: 0,
							tint: 3684408
						}), this.rank = new d.Wb.BitmapText("00000", {
							fontName: "listNum",
							fontSize: 80,
							letterSpacing: 0
						}), d.ZP.utils.setButton(this.view.saveBtn, (function() {
							SiteModel.tracker.event("save_achievements"), tar.hitTag("save_achievements"), j.show({
								minute: e.min.text,
								seconds: e.sec.text,
								beforeScore: e.beforeScoreText,
								rank: e.rankText
							})
						})), d.ZP.utils.setButton(this.view.listBtn, (function() {
							SiteModel.tracker.event("success_ranking"), tar.hitTag("success_ranking"), w.show()
						})), d.ZP.utils.setButton(this.view.jdBtn, (function() {
							SiteModel.tracker.event("success_strolljd"), tar.hitTag("success_strolljd"), location.href = "https://h5.m.jd.com/babelDiy/Zeus/2mPT6i3AsiqRcsZPKSya8Atva2f7/index.html?babelChannel=ttt26"
						})))
					}
				}, {
					key: "movieIn",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(u.prototype), "movieIn", this)
							.call(this, e), console.log(e), this.rankText = e.rank, this.beforeScoreText = e.beforeScore, e.nowID != e.beforeID && e.nowScore <= e.beforeScore ? (this.view.infoBox.image1.visible = !0, this.view.infoBox.image2.visible = !1, this.view.infoBox.image1.highestScore.removeChildren(), this.view.infoBox.image1.index.removeChildren(), this.view.infoBox.image1.score.removeChildren(), this.view.infoBox.image1.minute.removeChildren(), this.view.infoBox.image1.second.removeChildren(), this.beforeScore.text = e.beforeScore.toString()
								.padStart(6, "0"), this.myScore.text = e.nowScore.toString()
								.padStart(6, "0"), this.rank.text = e.rank, this.min.text = e.minute, this.sec.text = e.seconds, this.beforeScore.y = -90, this.beforeScore.x = -10, this.myScore.y = -58, this.myScore.x = -7, this.rank.y = -40, this.min.y = -52, this.sec.y = -52, this.min.x = -5, this.sec.x = -5, this.view.infoBox.image1.highestScore.addChild(this.beforeScore), this.view.infoBox.image1.index.addChild(this.rank), this.view.infoBox.image1.score.addChild(this.myScore), this.view.infoBox.image1.minute.addChild(this.min), this.view.infoBox.image1.second.addChild(this.sec)) : (this.view.infoBox.image1.visible = !1, this.view.infoBox.image2.visible = !0, this.view.infoBox.image2.index.removeChildren(), this.view.infoBox.image2.score.removeChildren(), this.view.infoBox.image2.minute.removeChildren(), this.view.infoBox.image2.second.removeChildren(), this.myScore.text = e.nowScore.toString()
								.padStart(6, "0"), this.rank.text = "NO." + e.rank, this.rank.fontSize = 160, console.log("this.rank", this.rank), this.min.text = e.minute, this.sec.text = e.seconds, this.myScore.y = -58, this.myScore.x = -7, this.rank.y = -80, this.view.infoBox.image2.index.x = (750 - this.rank.width) / 2, this.min.y = -52, this.sec.y = -52, this.min.x = -5, this.sec.x = -5, this.view.infoBox.image2.index.addChild(this.rank), this.view.infoBox.image2.score.addChild(this.myScore), this.view.infoBox.image2.minute.addChild(this.min), this.view.infoBox.image2.second.addChild(this.sec))
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(u.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), u
			}(f._x));
			SiteModel.pager.add(L);
			var N = new(function(e) {
				(0, a.Z)(d, e);
				var t, i, u, f = (i = d, u = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, t = (0, l.Z)(i);
					if (u) {
						var n = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(t, arguments, n)
					} else e = t.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function d() {
					var e;
					return (0, o.Z)(this, d), (e = f.call(this))
						.name = "FailPosterPanel", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(d, [{
					key: "initialize",
					value: function() {
						if (!this._isInitializeComplete) {
							this._isInitializeComplete = !0, this.view = new hiddenLevel.FailPosterPanel, this.myScore = new PIXI.BitmapText("00000", {
								fontName: "freeNumFont",
								fontSize: 80,
								letterSpacing: 0,
								tint: 2293504
							}), this.rank = new PIXI.BitmapText("80%", {
								fontName: "freeNumFont",
								fontSize: 80,
								letterSpacing: 0,
								tint: 3684408
							}), this.myScore.y = -60, this.rank.y = -55, this.view.imageBox.score.removeChildren(), this.view.imageBox.index.removeChildren(), this.view.imageBox.score.addChild(this.myScore), this.view.imageBox.index.addChild(this.rank), this.imgBox = new Image;
							var e = $('<div><img class="card-image" style="width:629px;height:1117px;opacity:0;-webkit-touch-callout: default;"><img></div>');
							pixiCg.utils.addDom(e, this.view.imageBox)
						}
					}
				}, {
					key: "show",
					value: (t = (0, n.Z)(h()
						.mark((function e(t) {
							var i;
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.initialize(), (0, s.Z)((0, l.Z)(d.prototype), "show", this)
												.call(this, t), t && (this.myScore.text = t.score, this.rank.text = t.percentage), e.next = 5, pixiCg.utils.getBase64(this.view.imageBox, {
													width: 629,
													height: 1117
												});
										case 5:
											i = e.sent, $(".card-image")[0].src = i;
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function(e) {
						return t.apply(this, arguments)
					})
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(d.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), d
			}(f.P));
			SiteModel.paneler.add(N);
			const Q = N;
			var W = new(function(e) {
				(0, a.Z)(u, e);
				var t, i, n = (t = u, i = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, n = (0, l.Z)(t);
					if (i) {
						var o = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(n, arguments, o)
					} else e = n.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function u() {
					var e;
					return (0, o.Z)(this, u), (e = n.call(this))
						.name = "FailPage", e.assetsName = "hiddenLevel", e
				}
				return (0, r.Z)(u, [{
					key: "initialize",
					value: function() {
						var e = this;
						this._isInitializeComplete || (this._isInitializeComplete = !0, this.view = new hiddenLevel.FailPage, this.myScore = new PIXI.BitmapText("00000", {
							fontName: "freeNumFont",
							fontSize: 80,
							letterSpacing: 0,
							tint: 2293504
						}), this.rank = new PIXI.BitmapText("80%", {
							fontName: "freeNumFont",
							fontSize: 80,
							letterSpacing: 0,
							tint: 3684408
						}), this.myScore.y = -60, this.myScore.x = -10, this.rank.y = -55, this.view.score.removeChildren(), this.view.index.removeChildren(), this.view.score.addChild(this.myScore), this.view.index.addChild(this.rank), d.ZP.utils.setButton(this.view.saveBtn, (function() {
							tar.hitTag("fail_achievements"), SiteModel.tracker.event("fail_achievements"), Q.show({
								score: e.myScore.text,
								percentage: e.rank.text
							})
						})), d.ZP.utils.setButton(this.view.listBtn, (function() {
							tar.hitTag("fail_ranking"), SiteModel.tracker.event("fail_ranking"), w.show()
						})), d.ZP.utils.setButton(this.view.jdBtn, (function() {
							tar.hitTag("fail_strolljd"), SiteModel.tracker.event("fail_strolljd"), location.href = "https://h5.m.jd.com/babelDiy/Zeus/2mPT6i3AsiqRcsZPKSya8Atva2f7/index.html?babelChannel=ttt26"
						})), d.ZP.utils.setButton(this.view.returnBtn, (function() {
							tar.hitTag("fail_restart"), SiteModel.tracker.event("fail_restart"), e.gotoPage("GamePage")
						})))
					}
				}, {
					key: "movieIn",
					value: function(e) {
						this.initialize(), (0, s.Z)((0, l.Z)(u.prototype), "movieIn", this)
							.call(this, e), e && (this.myScore.text = e.score.toString()
								.padStart(6, "0"), this.rank.text = e.percentage)
					}
				}, {
					key: "resize",
					value: function() {
						if ((0, s.Z)((0, l.Z)(u.prototype), "resize", this)
							.call(this), this.isShowBool) {
							SiteModel.layoutWidth;
							var e = SiteModel.layoutHeight;
							this.view.y = (e - this.view.height) / 2
						}
					}
				}]), u
			}(f._x));
			SiteModel.pager.add(W)
		},
		6611: (e, t, i) => {
			"use strict";
			i.r(t);
			var n = i(6447),
				o = i(5815),
				r = i(1174),
				s = i(6328),
				a = i(6815),
				c = i(7693),
				l = i(3374),
				u = i(7333),
				h = i.n(u),
				f = i(3021),
				d = i(6999),
				p = !1;

			function m() {
				p || (p = !0, window.PIXI = d.Wb, window.pixiCg = d.Z4, (0, d.mF)(d.Wb))
			}

			function v() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
					dom: "#pixi-main-box",
					animateAssetsPath: "animateAssets"
				};
				if (m(), SiteModel.pixiJsModel) return console.warn("SiteModel.pixiJsModel 已经存在 "), SiteModel.pixiJsModel;
				var t = e.dom || "#pixi-main-box",
					i = SiteModel.width,
					n = SiteModel.height,
					o = $(t)[0],
					r = d.Z4.create({
						appendTo: o,
						width: i,
						height: n,
						fps: 120,
						transparent: !0,
						alpha: 0
					});
				SiteModel.pixiJsModel || (SiteModel.pixiJsModel = r);
				var s = e.animateAssetsPath || "animateAssets",
					a = SiteModel.projectDirectory + s;
				return d.D_.setAnimateLoaderBasePath(a), SiteModel.addPIXIAnimateState = g.bind(SiteModel), r
			}

			function g() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if (e.name) {
					var t = new d.NG(e),
						i = SiteModel.assetsManager;
					return i.add(t), i.getAssetsState(e.name)
				}
				console.error("addPIXIAnimateState 需要传递资源名称")
			}
			var S = i(8420),
				w = i(3069),
				y = i(2201),
				x = i(7820),
				I = {
					class: "vue-main"
				};
			const k = {
				setup: function(e) {
					return {
						enter: function(e) {
							console.log("enter", e)
						},
						beforeEnter: function(e) {
							console.log("beforeEnter", e)
						}
					}
				}
			};
			var Z = i(5825);
			const P = (0, Z.Z)(k, [
				["render", function(e, t, i, n, o, r) {
					var s = (0, w.up)("router-view");
					return (0, w.wg)(), (0, w.iD)("div", I, [(0, w.Wm)(s)])
				}],
				["__scopeId", "data-v-6c390ea5"]
			]);
			var z = {
				class: "vue-not-found"
			};
			const R = {},
				B = (0, Z.Z)(R, [
					["render", function(e, t, i, n, o, r) {
						return (0, w.wg)(), (0, w.iD)("div", z)
					}],
					["__scopeId", "data-v-d1c29228"]
				]);
			var M = !1;

			function A() {
				if (M) return SiteModel.vueApp;
				M = !0;
				var e = y.p7({
					history: y.PP(),
					routes: [{
						path: "/:pathMatch(.*)*",
						name: "NotFound",
						component: B
					}]
				});
				SiteModel.router = e;
				var t = S.ri({
					setup: function() {
						return function() {
							return w.h(P)
						}
					}
				});
				return t.use(e), t.use(x.Z), t.mount("#vue-main-box"), SiteModel.vueApp = t, SiteModel.$store = x.Z, t
			}
			var b, E, C = i(3638),
				q = i.n(C),
				O = i(642);
			var J = f.P6.getUrlParameterDictionary,
				X = f.P6.resolveUrl,
				T = J();
			T && T.debug && function() {
					if (!b) {
						b = !0;
						var e = new(q());
						window.vConsole = e
					}
				}(), d.aN.CacheVersion = "0.0.5",
				function() {
					if (!E) {
						E = !0;
						var e = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = t.cb,
								n = t.success,
								o = t.confirmText,
								r = void 0 === o ? "确认" : o,
								s = t.cancelText,
								a = void 0 === s ? "取消" : s,
								c = t.showCancel,
								l = void 0 !== c && c;
							return (0, O.K4)({
								title: "温馨提示",
								content: e,
								confirmText: r,
								cancelText: a,
								showCancel: l,
								showClose: !1,
								success: n
							}, i)
						};
						window.showModal = e, SiteModel.showModal = e
					}
				}();
			var F = function(e) {
				(0, a.Z)(m, e);
				var t, u, f, d, p = (f = m, d = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, t = (0, l.Z)(f);
					if (d) {
						var i = (0, l.Z)(this)
							.constructor;
						e = Reflect.construct(t, arguments, i)
					} else e = t.apply(this, arguments);
					return (0, c.Z)(this, e)
				});

				function m() {
					return (0, o.Z)(this, m), p.call(this)
				}
				return (0, r.Z)(m, [{
					key: "initialize",
					value: (u = (0, n.Z)(h()
						.mark((function e() {
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!this._initializeComplete) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											this._initializeComplete = !0, (0, s.Z)((0, l.Z)(m.prototype), "initialize", this)
												.call(this, {
													historyMode: "none",
													replace: !1
												}), A(), v(), this.initializeLoadAessts(), this.initializeMainPages();
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function() {
						return u.apply(this, arguments)
					})
				}, {
					key: "initializeLoadAessts",
					value: function() {
						SiteModel.addPIXIAnimateState({
							name: "loadUI"
						}), SiteModel.addPIXIAnimateState({
							name: "hiddenLevel"
						})
					}
				}, {
					key: "initializeMainPages",
					value: (t = (0, n.Z)(h()
						.mark((function e() {
							var t, n, o;
							return h()
								.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!this._initializePagesComplete) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return this._initializePagesComplete = !0, i(5891), i(7121), SiteModel.setDefaultPage("HomePage"), t = SiteModel.pager.getPage("DefaultWaitLoadPage"), SiteModel.setDefaultWaitLoadPage(t), n = SiteModel.assetsManager.getAssetsState("loadUI"), e.next = 12, n.load();
										case 12:
											o = X(location.href), SiteModel.gotoPage("MainLoadPage", {
												urlRef: o,
												replace: !0
											}), SiteModel.hideProgress(), setTimeout((function() {
												SiteModel.siteScene.show(), SiteModel.resize()
											}), 50);
										case 16:
										case "end":
											return e.stop()
									}
								}), e, this)
						}))), function() {
						return t.apply(this, arguments)
					})
				}, {
					key: "resize",
					value: function() {
						(0, s.Z)((0, l.Z)(m.prototype), "resize", this)
						.call(this);
						var e = SiteModel.width,
							t = SiteModel.height;
						SiteModel.pixiJsModel && SiteModel.pixiJsModel.setSize(e, t)
					}
				}]), m
			}(f.VC);
			if (!SiteModel.app) {
				var j = new F;
				SiteModel.app = j, SiteModel.app.initialize()
			}
		},
		7820: (e, t, i) => {
			"use strict";
			i.d(t, {
				Z: () => f
			});
			var n = i(6392),
				o = i(3021),
				r = i(1100),
				s = i(6447),
				a = i(7333),
				c = i.n(a);
			const l = {
				namespaced: !0,
				state: function() {
					return {
						isLogin: !1
					}
				},
				getters: {},
				mutations: {
					serIsLogin: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						e.isLogin = !!t
					}
				},
				actions: {
					login: function(e, t) {
						return (0, s.Z)(c()
							.mark((function i() {
								var n, r, s;
								return c()
									.wrap((function(i) {
										for (;;) switch (i.prev = i.next) {
											case 0:
												if (e.state, n = e.commit, e.dispatch, r = "exm.login", !o.ef.getSendState(r)) {
													i.next = 5;
													break
												}
												return i.abrupt("return", {
													success: !1,
													msg: "接口请求中",
													isRequesting: !0
												});
											case 5:
												return i.next = 7, o.ef.callEasyItf(r, t, {
													test: SiteModel.debug,
													testData: {
														success: !0,
														msg: "用户名和密码不匹配"
													}
												});
											case 7:
												return s = i.sent, n("serIsLogin", !0), i.abrupt("return", s);
											case 10:
											case "end":
												return i.stop()
										}
									}), i)
							})))()
					},
					setCookie: function(e, t) {
						(0, r.Z)(e), document.cookie = t.name + "=" + t.value + "; path=/"
					},
					getCookie: function(e, t) {
						(0, r.Z)(e), console.log("options", t);
						for (var i = document.cookie.split("; "), n = 0; n < i.length; n++) {
							var o = i[n].split("=");
							if (o[0] == t.name) return o[1]
						}
						return null
					}
				}
			};
			var u = i(830);
			const h = {
				namespaced: !0,
				state: function() {
					return {
						testPaperList: []
					}
				},
				getters: {
					getTestPaperInfoByExamId: function(e) {
						return function(t) {
							return e.testPaperList.find((function(e) {
								return t === e.examId
							}))
						}
					}
				},
				mutations: {
					setTestPaperList: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							i = t.examId,
							n = t.questionList,
							o = void 0 === n ? [] : n;
						if (i)
							if (o.length <= 0) console.warn("setTestPaperList warn :> 试卷信息缺少题目");
							else {
								var r = e.testPaperList.findIndex((function(e) {
									return e.examId === i
								}));
								e.testPaperList.splice(r, r < 0 ? 0 : 1, t)
							}
						else console.warn("setTestPaperList warn :> 试卷信息缺少 试卷ID")
					}
				},
				actions: {
					getQuestionListForExam: function(e, t) {
						return (0, s.Z)(c()
							.mark((function i() {
								var n, r, s, a, l;
								return c()
									.wrap((function(i) {
										for (;;) switch (i.prev = i.next) {
											case 0:
												if (e.state, r = e.commit, e.dispatch, s = "exm.getQuestionListForExam", !o.ef.getSendState(s)) {
													i.next = 5;
													break
												}
												return i.abrupt("return", {
													success: !1,
													msg: "接口请求中",
													isRequesting: !0
												});
											case 5:
												return i.next = 7, o.ef.callEasyItf(s, t, {
													test: SiteModel.debug,
													testData: (n = {
														success: !0,
														IsSuccess: "1",
														ErrMsg: "",
														Tip: "成功",
														exam_desc: "Java",
														exam_introduce: "java相关的知识",
														allow_max_answer_duration: "",
														begin_exam_time: "2022/07/03 13:19:13",
														data: [{
															question_id: "1",
															question_content: "单选按题目给分",
															question_type: "1",
															required: "0",
															question_opt: [{
																opt_content: "sfd",
																question_opt_id: "1"
															}, {
																opt_content: "3dfeder",
																question_opt_id: "2"
															}]
														}, {
															question_id: "4",
															question_content: "多选按选项给分",
															question_type: "2",
															required: "1",
															question_opt: [{
																opt_content: "aaa",
																question_opt_id: "7"
															}, {
																opt_content: "bbb",
																question_opt_id: "8"
															}, {
																opt_content: "ccc",
																question_opt_id: "9"
															}, {
																opt_content: "ddd",
																question_opt_id: "10"
															}]
														}, {
															question_id: "5",
															question_content: "多选全对给分",
															question_type: "2",
															required: "1",
															question_opt: [{
																opt_content: "aaa",
																question_opt_id: "11"
															}, {
																opt_content: "bbb",
																question_opt_id: "12"
															}, {
																opt_content: "ccc",
																question_opt_id: "13"
															}, {
																opt_content: "ddd",
																question_opt_id: "14"
															}]
														}, {
															question_id: "6",
															question_content: '<p>单选按选项给分</p><p><img src="data:image/png;base64,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" alt="" /><br /></p>',
															question_type: "1",
															required: "1",
															question_opt: [{
																opt_content: "111",
																question_opt_id: "15"
															}, {
																opt_content: "222",
																question_opt_id: "16"
															}, {
																opt_content: "333",
																question_opt_id: "17"
															}, {
																opt_content: '444<img src="data:image/png;base64,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" alt="" />',
																question_opt_id: "18"
															}]
														}, {
															question_id: "7",
															question_content: '简述XXXXX<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACQCAYAAAAhg3YBAAAW10lEQVR4nO2dy3Lb2LWGf9wJggRIkaKou2zFfay0fapT7lRllkx6lFGGGeVV+lXOQ2SUeSadnCSnnCix3b7pLvEOgsQdZwDuLUqWLFkiRamxviqVQVEWN0j8+Ndea+0twXGcBARB/KQRZz0AgiCmDwmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAyAAmdIDIACZ0gMgAJnSAygLy7uzvrMRAEMWXI0QkiAwhJktCfTSaInzjk6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAUjoBJEBSOgEkQFI6ASRAeQ///nPsx4DQRBThhydIDKAkCRJMutBEAQxXcjRCSIDkNAJIgOQ0AkiA5DQCSIDyLMeAHE/SZIELE8rCAIEQZjxiIjbQI5OXEiSJAjDEGEYggozDx9y9DsmCAI4jgPXdeF5HqIoAgDIsox8Pg89l4OWy0GWZ/vRxHEM3/cBAKIoQhTJEx4yJPQ7xnEcfPjwAfv7+2g0GhgMBgAA0zSxurKCpaUlLCwsQC4UZjrOKIowdF0AgKIoM7/xELeDPr07xnVd7O/vY3d3F57nIQgCRFGEIAiAJEEYRZBkGRAEaJo2M4FFcQx3JHTDMGYyhrskjBIMgwhBmCCK0+9JIqDIAnRFgiw97BwFCf2O8TwPjUYDnudh49EjFAwDw+EQ3W6XO7woiojjGLVabWZCj6MIvufx4586wyDCQcdD2wnhpqeNnAaUDRmLJQ1F6WFL5WGP/gESRREGgwGCIEDBMGBZFsIwRBAE6PV66PV6UEdObprmzNw0HnP0OI6/+P97ngfbtuF5/ug7aULvNJt/NsGXJKfPseTfZccAoOs6KpUKdF3/4rFdRBAmaDshjrsB/CB9HdVNXbxaUBGGITzPg+u6/PNj47pofOPnEscxf84wDMzPz9/550pCnxFRFGE4HCIMQ7x79w4nJyd8vr6zswNFUbC6uopKpTLT8bHjL8W2bfz73/9Bo9EYfef0oo+i8JObR5IkiKIYURQhiiLEcfzJVxRFXDArKyv41a9+hZWVlVudJyOKAdcD/CCBNMo7+kEC10uf8zwPx8fHODg4wMePH9Htdvm4LxrfeNUiDE/Pd319Hb/5zW9I6LeFOclwODzzxudyOZTLZeRyuRmPMMX3fTQaDWiahiRJoKoqd1BVVRFFEQ4PDyFJEsrlMmRZxnA4hO/7SJIEiqLAMAwoijKV8QVRgp4X82PiYTAcDtFut/m1xK7/n5zQbdvG9vY2Dg4OuGMCwOLiIn7xi19gcXFxxiNMGQwG2NnZQbVaxcbGBoIgwPb2NgBga2sLuVwOr169wuHhIV68eIFCoYCdnR10Oh1EUQTLsrC+vo5SqTSV8fmJiHao8OMvpVgs4unT/4LnPRp9Zzqh+6SQxHROrrrCaeiuCMhp6XOapqFWq6XVkdXVW4fu06LdbuOvf/0r9vf3+TjiOP4yobNwhNV/RVGEIAhjIVnE/1UUBYVCAaqqTuWELmM4HOLg4ADv3r07I/QwDLG2ugqzWLwXdWpRFKGqKorFImq1GjzP4+9VtVqFpmk4Pj5Gr9fD3t4eZFnG7u4uF3qpVIIgCPB9H5ZlQdO0iY4vjqLTOfoNQndN06BpGqIogu/78DwPw+EQQRBcKIjLjtkXi2Dy+Tx0XZ/456fIAspG+jvPJ+MUWYAsy5BlGYZhzGw6dRuu/W6lc6gIjuPg5OQErutC0zQIgsCbK1zX5V+maeLJkyeYm5ub5vg/gc0tWejO8FwXR0dHyOfz96JObZomtra2sLy8DNM0cXJycuHzzWYTr169QrvdPiOUZrOJdruN9fV1PHv2DLVabbIDjDyIzmhM0fqNf43v+2i32zg+PsLe3j56vS6iKOZzVnZdXTYnj+MYYRjCsiw8fvwYq6urWFpaQrFYnMRZcnRFwmJJQ7WgXlheeyiUy2W8ePECX3/9NYAbhO6e56Hb7aLb7aLT6SBJEkiSxOeIURjC6ffR7nTQbrcxNzc3sUTJdQjDEJ7rom/bcF2XOzkfv+/jpNFAoVhEqVzGXeey2dyp2WyiUCjANE0u8l6vB9u2YZomgHT6oWkaf3x8fAzXdUdZ7NRuBoMBHMdBHMcwzfSin6SzC3EIwXf48U8dWRIefAkNSKc0uq7DDxPYbnrHKubE6wu93+/jzZs36PV6MAwD5XIZlUoFhmEgSRLYvR7CMESn04Hd60GSJD6PuQuYYx8dHcEbhZzj+L6PVqsFy7J4a+ddwuZOvV4P9XodlUqFi3x7exue5/Eb4+7uLk5OTrC1tcWd3TRNbG9vc+ePoohngv/xj/9Dr2dPx9lviaqqKJfLo0iqPrHQnfg8thvj9UFqCk8WtauFzrq2er0ujo6O4Dh9yLIMSZKg6zoKoxBYFAS4roturwdRks5kvO8C5tgnjQY834csy/yCYCGvbdvpjci2USqVoCgKJGm6YRlz8r29PfR6PYiiiEqlcu2EjKIosCwL/X7/TIad5Uv6/T6CIICiyFheTkNaVVWnfl5XwSJA13U/EfZ4ae2ixxclscIwhOM4Z5JaCwsL/Pq7Lawzzg8TBCGQIIEsApoiQlclKPe8My5OgChK4IYJHC/CYTfEXtuHJotYrypXCz0IAnQ6HbRaLThOf9S26X+yqknL5bCwsADf93F4eMiTF3cFc+xWqwXf96HrOpaXlgAAe/v76Pf7GA6H6PV6aLWaKBaLKJVKUxfEZU7OYI7daDSwu7sLIK0RV6tVmKbJL/B+v//JdAQ4dfZez0aj0UCxaKJcLs/c9brdLl6+fImjo8Mzc/I4jhEEwaWPL6s/M8NheZfHjx/ju+++m5jQWWdcww7RHSRI4gSFHFAtKlip5KDo9zusj6IEjpfgyA7w9sTFiR3C8xLUijISXGOOnn4QadbU9/1Ru2YPut5EPp9HFEXQNA2qqkLP51Gem+Ph411k3NkFwNy63+8DSMs7S8vLSOIYrVYLtm1z0RwfH8MwDOi6PrW6+nWdXNM0/j0WllerVVQqFYRhyJObvu9f2KE2Xgmx7T4cxzlzIyGuhx8maNgh9tsB7GEq9JyaIE6AeVNFqIQYDof8pstyJQDORB7nI5Hzj4vFIs/NTALm5LYb46gXYq/jY7ftwx5EUAQBA1/EXsu/WuiiKEJRVMiygiRJ4DgDhOEhhsMhBoMBarUa5ufnUSqVYBgGcrkcFhfrAHAnzSmnEUcTvV5vFMYqKJVKWFpaQhgEePPjj/znXdfFwcEhcjkd8/M1WJY1lXFd5eTnYc7OjtlN6aLE4kWw7PS4C84Sy7Lw7Nkz/OxnP5tI6A7gk3r0wsLCxMYbhEB3kMAeJhABRALQ9RLobgI/Sm/c+/v7eP/+PV69eoVWqwXg00jjosfjy5GfPn2K3/3udxMTOnfyXojXx0Mc9QL4fgJltFlIqx/iBye8WuiSJCGXy0HXdahqmtHt9/u8NsqctFwuwzRNHrLn7qhWnS4SOcHx8TEcx0EQBJBl+UyL6XiZjZV7TNNEv9/nXWfTXm/NSpCCIFz4eszZmWCZkzuOg8FggMFggHw+D8uyzvRaC4IASZIgSRIvVd2HjSJYgwmLNpgxsGTcdQXNnmdJvUKhMJWOwASpi8dxgigBoiT9N47Pt/bcX5IESGIgDBOEUQJRAEQRkEThekI3RosvTNNEu91GGIYYDAZ8Xvz+/XtomoZisYi5uTnU63XU6wu4i7eIOfTBwSFc1+UCPz4+xsuXL9OKgG3zn2fP27aNTreLUqnEE1iThNUz9/b28OrVK+zu7mJtbY0vaLjs9c47OeugC4KARwU7Ozu811qSJGiahlxOm3kC7iJYZYC5YbvdPlMfv2ouzh7Pzc3h66+/xldffTWVjkBZBAo5QJMTNJ0EcQyYOQGmKkAR07LV0tISLMvC5ubmrUP3SSFJAgwNqBUlJLEGBQL+M3TRHUaQRQH1koJnq/qp0FkHE3Pq8+EiE4uqqrwXe3zeHkURBEHg9eFarXZhUiiXy8GyLP5107ova6hwHIc3j4yXzdhyUHZuzOXZnJbVpfuOM4pWJit0Vs8EgMPDQzQaDTSbTcRxjPn5eRQLBciKwp39Mifvdrt8OmJZFoIgwOHhIX8dSZKQz+e5y0mSRPu73QBNEVEtKggjQJFjxAkwlxexUFSQk0XIsoxisTjxRp3bIgqAKAso5iQICRBHgONFEASg50aQJAGLpbGsOwtpG40GGo0GHMc58wt930e/34coijAMgy+yYHfnbreLZrOJ4XDIw9OLyjwLCzU8f/7feP78+a3qvmy5p23bPKMeRREv+6lqmlcAAF1PBXG+JXbgOBg4DsIp9YsDp86+s7ODf/3rX2i326l7JUkaSYxudFc5uWVZyOfz3MkZ6QVYQLFo8tbQ+7TtEwvhi8UiVldX+aKcm4TulmXx0H3S6KqElUoO1aIKL0xjUVUCdEVEXrt/kdJ5ZElAQZewKgsoFSS8a3r4348OQiG+XtYdAG9YGG9nZe7T7XZxcnKCKIrQaDTQ6/XOzCGntf6W1ZDtUSccE3k+n+cNGqIoAUI6/uFgMCoROoiiCGEY8vXfk0zqnGfc2Y+Pj9FoNNBut4EkQQKgEMfAqGf9c05eqVSgaRrCMOSuneZPNBQKqdOwvMh9cPThcIhWq4XhcHgjYZ9/zPbaY3mIYrGItbW1iSVTFUmAosswH2gvjigCqihAVSRYeQmiDLTd1NRy6tgcnSU7DMNAvV7nzsdCXQBnLiL2hnc6HXz8+JGHNLquc+EBwMbGBn79619jY2MjfdFzoftNCcMQfdtGf1Q2Y05eLpexsrKS1shH7pYkCbqdDoD0omLLPe+yU+68s3dG4wnKZQijMX7OyZkziqKIXC7H5+b5vMFdLpfLQVHVe+HorVYLP/zwA3Z3d280J78sax2GaZlra2sLv//97/H8+fPZnOA9p5yX8e26wY+50JlQzs+pfd+H4zgIwxCCIKT1cl3nWc9yuTxKBuWQz+fx4cMHfPz4EbZtQxRFvjyUNdlPiiAI0Ol20Rk5H7tR1WrzqFYro3Hl0v3XAOR1HY7j8PzDXXfKXejsnQ78IODRDttS6iInN00TpmnyxUTshsky0fl8HkahAH10EyC+jCBM4LgRhn4Mb7T+XpME6KoIIydBkWcfJV2Hfr8/6mBNp95JkuDoOstUmfOxGrVhGFhdXeVCZ9nIUqmEx48f4+XLlzg5OcH+/j5UVT3T9TRJLuqEW1yso16vwygUoGk5mKbJ58ACgFqtxpseXNedSafceWdvtVpYXV0FkPa4h2F4oZObpglN0yCKIjRNg2VZWFxcxNzcHG/+MUfJolkvwQWAubk5/PKXv8SzZ88mErqPPx4P3SeF40Z4f+Bhr+2jMUyjh6ouYbmsYmNRQ6kw+/f0OhwdHeFPf/oT3r59C+A0QrpWr/tgMMDJyQkajQYsy0KpVEKhUOBJt/FsZKfTgaIoiOMYuq7zxN2kkWUZhUIB1WoVhmHwZM/cXAWSLCGn5c5k0+NiEQu1GuLROnpWRWARyV1xkbM7joNoFGWwpNN5J2euz26shUIB5XIJxaKJfD6PYrGIfD4/sepBIspIVIMf3+Q8l5eXeajtOA663e4n06TxrZjO3wDY86z7slwuw7KsqZRDh36MvbaPdyceOqOddWwtnQItVBQYoxyBbdtndnA5P86rTM2yrInmFq7LlZ8g+yB6vR7evHkD0zTx6NEjzM/Pfzbxk8/nsbKygpWVlan0XReLRWxtbWFjY4NvdMHq0yxRNX6DYb34pmVhbX2d5x1UVT2d305pW6aLOO/sjuOgWq1e6uQM1nHW79twnAEURUGlUpn8Jh+ShtiY58c3hXWUvX37Fv/85z9xfHx85nnmOKyse35/OnajqNVq+Pbbb/H8+XM8efJk4ps/eFGCxjBCx4uhjsL0jhejMYzgRWlH6IcPH7C9vY2//e1vODg4uHCcV3UxPn/+fKq5hYWFBXz33XdnQvdr7zATxzE8z+M942/fvuUZbiYs9nO9Xm90N1/C06dPsbm5ObGFB+OwHUyuiyzLkAsFGDPecIJx3tl1Xcfa2hpvjTQM48JdYMfLVe12GwBQKBQmfjMVRx2R7Jh4OLDEJ/AFQh8PrYC0h/svf/kL9vb2+AXH2i89z0Oz2cTcXBlra6t48eIFNjc3712TwX2COXsURcjn8zwKkWX5szcylnxkx5NGFWKU5YAf35TxjrLHjx+f6SgDbh66TxpNElDVJdiayEP3kiaiqkvQJAGGYWB9fR1zc3P4+c9/fuvQfVocHBzgj3/8I16/fg3gtGpxpdDZXLhWq2FzcxPdbhe5XI7vF3eeYrEwCq2qePToEarV6kRPxO90YL9/D29UnpoUWqmE4sYGkM/z7Pxnf17TPtvK+qXjlAB4o6/rjpP9/bbbjPMyZBEoKKfHN2U8h1Ov12/8e3zfh23b8H0fzWbz0p9j+/B96fnqqojlcvp/GsN0y2lLjlDSfCCSkSRpvqRUKvHk6ZeOm8HWLkxi3NflSqGf7/ENgmC0ok3hfzJoPHSP42jUyaRNJeFgv3+PV//zP2j8/e8T/b3Vb77BV3/4A8T1dfz4449oNpvcXcZ7B9jjSqWCzc3NSz+YhzLOy2DZfXY8a2zbxuvXr9Fstj77c5XK3I3m8EZOwsaihoWKAi9K4A6HGNgtSEkId+DDFvM3EuK0x32excVF/Pa3v+XJ5muH7ve1x3fasDq753lnBMQW79wXpjXOdJdahR/fFy5ySODUEW+KIgsoFWSwZmjXjdFWVPgeIE+ghj6tcZ+nUEgj6vMIyX1Y0/gF3FXofnh4eKFjMoes1+sTDd1nNc7L6PdtHB6me4PX60soFGZ7c2NCOTg4HDnk2fC9UqngyZMnWFysTyQETqsBPuIohiCKvIrzpTe9ux73ZTyMLoAx1FIJlW++me5rjN5sVqKwbRtxHCOfz6NSqfCVefdxnAD4fLher185zstg+86z41mjqioPa/v99DzHz3dxsY7FxfrEym7pGv/bVzLuetyXIX3//fffT/UVHiiSJPHatOM4kCQJy8vLWFpahGVZd1pz/xznx6lpGjY3N7G2tgbDMG7c6RdFMcIghCzJ0PX8vei2A06Tw6qqod/vQ9M0PHnyBOvr67wCdB+Z9bjvx6d3D2Hr7oHUMX3fR6VSuTctpozz4wRwKydnSJKEnJ7nx/eFixzyLhzxtsx63A9ujn7XsEU9aRIlGXXS3f2fmroKNk4AN5qTn4dt7AGkQr8P4fs4bO4LYKpz20kzq3GT0K9JGAb8zwinGzzcj9CdIK4DCf2aJMlZhxOE++VwBPE5SOgEkQHIlggiA5DQCSIDkNAJIgOQ0AkiA5DQCSIDkNAJIgOQ0AkiA5DQCSIDkNAJIgP8P/ONHkt9RL32AAAAAElFTkSuQmCC" alt="" />',
															question_type: "3",
															required: "1",
															question_opt: ""
														}],
														RecCount: "1"
													}, (0, u.Z)(n, "IsSuccess", "1"), (0, u.Z)(n, "ErrMsg", ""), n)
												});
											case 7:
												if ((a = i.sent)
													.success) {
													i.next = 10;
													break
												}
												throw new Error(a.msg);
											case 10:
												return l = {
													examId: t.exam_id,
													examDesc: a.exam_desc,
													examIntroduce: a.exam_introduce,
													allowMaxAnswerDuration: a.allow_max_answer_duration,
													beginExamTime: a.begin_exam_time,
													questionList: a.data
												}, r("setTestPaperList", l), i.abrupt("return", a);
											case 13:
											case "end":
												return i.stop()
										}
									}), i)
							})))()
					}
				}
			};
			o.P6.getUrlParameterDictionary, o.ef.setInterfaceUrl("/Cg/Itf/Java/CmnMisItf.jsp"), o.ef.setGlobalDebug(!0);
			const f = (0, n.MT)({
				modules: {
					userState: l,
					testPaperState: h
				},
				strict: !1
			})
		},
		2480: () => {}
	}
]);
//# sourceMappingURL=site_app_entry.69263b08.js.map