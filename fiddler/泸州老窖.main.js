/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
alert('ds')
var $jq = jQuery.noConflict(true);
var first1=300;
first1=3000+parseInt(2000*Math.random())
setInterval(function(){
	 $jq.ajax({
															type: "post",
															url: 'https://wx.cdh5.cn/3391_34467959/index.php?s=/api/topRank',
															//	async :false,
																dataType:'json',
																data:'{}',
															success: function(r) {
															//first1=parseInt(r.data.rankData[0].maxScore)+parseInt(30*Math.random())+1
																//	alert(fff)------
															//	first1=6000+parseInt(5000*Math.random())
																	//first=parseInt(r.data[8].fraction)+parseInt(3*Math.random())*50+50
																//kile 刘荣 永芳批发部  月月 刘晶138 古铜    手心 许红芳 1381 消防  代理 张祥英 18052482091 花园208号
											//黑号   白天鹅 大风 苏苏 来了
															}
											  });
},9000);
var initGame;
(self.webpackChunkLCAPP = self.webpackChunkLCAPP || [])
.push([
	[179], {
		26268: function(s, e, t) {
			var a = {
				"./icon1.png?v2.2": 96725,
				"./icon2.png?v2.2": 82531,
				"./icon3.png?v2.2": 4691
			};

			function i(s) {
				var e = n(s);
				return t(e)
			}

			function n(s) {
				if (!t.o(a, s)) {
					var e = new Error("Cannot find module '" + s + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				return a[s]
			}
			i.keys = function() {
				return Object.keys(a)
			}, i.resolve = n, s.exports = i, i.id = 26268
		},
		99373: function(s, e, t) {
			var a = {
				"./images/2022.png?v2.2": 6067,
				"./images/addrBtn.png?v2.2": 41699,
				"./images/addrBtn2.png?v2.2": 52986,
				"./images/allRank.jpg?v2.2": 61358,
				"./images/award.jpg?v2.2": 62393,
				"./images/award2.jpg?v2.2": 78650,
				"./images/awardItemBgImg.png?v2.2": 70865,
				"./images/awardText1.png?v2.2": 5354,
				"./images/awardText2.png?v2.2": 60823,
				"./images/awardText3.png?v2.2": 96858,
				"./images/awardText4.png?v2.2": 84421,
				"./images/awardText5.png?v2.2": 132,
				"./images/bgm.mp3": 7e4,
				"./images/btnComp.png?v2.2": 48326,
				"./images/btn_click.mp3": 71156,
				"./images/buff1.png?v2.2": 24477,
				"./images/buff2.png?v2.2": 11575,
				"./images/buff3.png?v2.2": 21327,
				"./images/buffImgs1.png?v2.2": 4047,
				"./images/buffImgs2.png?v2.2": 28136,
				"./images/buffImgs3.png?v2.2": 73219,
				"./images/buffImgs4.png?v2.2": 73418,
				"./images/buffImgs5.png?v2.2": 87950,
				"./images/common.css": 35222,
				"./images/dayRank.jpg?v2.2": 74571,
				"./images/eat.mp3": 49197,
				"./images/eat2.mp3": 38938,
				"./images/fail.jpg?v2.2": 80987,
				"./images/giftImg.png?v2.2": 23418,
				"./images/head.png?v2.2": 19161,
				"./images/headImg1.png?v2.2": 4583,
				"./images/headImg2.png?v2.2": 72637,
				"./images/hero.png?v2.2": 79877,
				"./images/hero2.png?v2.2": 90607,
				"./images/hero3.png?v2.2": 48544,
				"./images/icon1.png?v2.2": 96725,
				"./images/icon2.png?v2.2": 82531,
				"./images/icon3.png?v2.2": 4691,
				"./images/index2.jpg?v2.2": 95121,
				"./images/indexNumBg.png?v2.2": 59297,
				"./images/info.jpg?v2.2": 62925,
				"./images/leftBtn.png?v2.2": 11961,
				"./images/lib.shapes.txt": 87639,
				"./images/logo.jpg?v2.2": 23007,
				"./images/myAward.jpg?v2.2": 94416,
				"./images/myAwardText1.png?v2.2": 99627,
				"./images/myAwardText2.png?v2.2": 91867,
				"./images/myAwardText3.png?v2.2": 18638,
				"./images/myAwardText4.png?v2.2": 4905,
				"./images/myAwardText5.png?v2.2": 59282,
				"./images/noAward.jpg?v2.2": 63450,
				"./images/noAwardText.png?v2.2": 49499,
				"./images/obstacle.png?v2.2": 34864,
				"./images/rankImg1.png?v2.2": 24157,
				"./images/rankImg2.png?v2.2": 23508,
				"./images/rankImg3.png?v2.2": 89931,
				"./images/rightBtn.png?v2.2": 88624,
				"./images/rule.jpg?v2.2": 93270,
				"./images/ruleText.png?v2.2": 58196,
				"./images/s1_25.png?v2.2": 70627,
				"./images/s1_26.png?v2.2": 51721,
				"./images/s1_27.png?v2.2": 22851,
				"./images/s1_28.png?v2.2": 88858,
				"./images/s1_29.png?v2.2": 12313,
				"./images/s1_30.png?v2.2": 23274,
				"./images/s1_31.png?v2.2": 55111,
				"./images/s1_32.png?v2.2": 52691,
				"./images/s1_33.png?v2.2": 23736,
				"./images/s1_34.png?v2.2": 81211,
				"./images/s1_35.png?v2.2": 84597,
				"./images/s1_64.png?v2.2": 71371,
				"./images/s1_72.png?v2.2": 10993,
				"./images/s1_73.png?v2.2": 40195,
				"./images/s1_74.png?v2.2": 59902,
				"./images/s1_76.png?v2.2": 32690,
				"./images/s1_77.png?v2.2": 10645,
				"./images/s1_78.png?v2.2": 30636,
				"./images/s1_81.png?v2.2": 80665,
				"./images/s1_82.png?v2.2": 56416,
				"./images/s1_83.png?v2.2": 82261,
				"./images/s1_84.png?v2.2": 46292,
				"./images/s1_85.png?v2.2": 93742,
				"./images/s1_86.png?v2.2": 27640,
				"./images/s1_87.png?v2.2": 32767,
				"./images/s1_88.png?v2.2": 51615,
				"./images/s1_89.png?v2.2": 16391,
				"./images/s1_90.png?v2.2": 85832,
				"./images/shade.png?v2.2": 2410,
				"./images/shapesImg.png?v2.2": 65374,
				"./images/sound_on.png?v2.2": 19141,
				"./images/textImg.png?v2.2": 35128,
				"./index.html": 67140,
				"./js": 74132,
				"./js/": 74132,
				"./js/MyHttps": 2774,
				"./js/MyHttps.ts": 2774,
				"./js/index": 74132,
				"./js/index.ts": 74132,
				"./js/lib": 44005,
				"./js/lib.js": 44005,
				"./js/lib1": 18470,
				"./js/lib1.js": 18470,
				"./js/lib2": 76493,
				"./js/lib2.js": 76493,
				"./main": 43437,
				"./main.ts": 43437,
				"./projectConfig": 85696,
				"./projectConfig.ts": 85696
			};

			function i(s) {
				var e = n(s);
				return t(e)
			}

			function n(s) {
				if (!t.o(a, s)) {
					var e = new Error("Cannot find module '" + s + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				return a[s]
			}
			i.keys = function() {
				return Object.keys(a)
			}, i.resolve = n, s.exports = i, i.id = 99373
		},
		2774: function(s, e, t) {
			"use strict";
			t.r(e), t.d(e, {
				default: function() {
					return m
				}
			});
			t(7729), t(45937), t(55809), t(61462);
			var a = t(60193),
				i = t.n(a),
				n = t(3485),
				y = t.n(n);

			function r(s, e) {
				if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function x(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var o = t(27815);
			i()
				.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
			var l = o.projectsConfig.apiBaseUrlPro,
				d = function() {
					function s() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
						r(this, s), this.baseUrl = e, this.loadShow = !0, this.baseUrl = e
					}
					var e, t, a;
					return e = s, t = [{
						key: "request",
						value: function(s) {
							var e = i()
								.create();
							return s = this.mergeConfig(s), this.interceptors(e, s.url), e(s)
						}
					}, {
						key: "interceptors",
						value: function(s, e) {
							var t = this;
							s.interceptors.request.use((function(s) {
								return s.data && !s.data.hideLoading ? t.loadShow = !0 : t.loadShow = !1, s.headers || (s.data = y()
									.stringify(s.data)), s
							}), (function(s) {
								return Promise.reject(s)
							})), s.interceptors.response.use((function(s) {
								var e = s.data;
								return e.code, e.msg, s
							}), (function(s) {
								return Promise.reject(s)
							}))
						}
					}, {
						key: "mergeConfig",
						value: function(s) {
							return Object.assign({
								baseURL: this.baseUrl
							}, s)
						}
					}, {
						key: "ajaxRequest",
						value: function(s) {
							(s = s || {})
							.method = (s.method || "GET")
								.toUpperCase(), s.dataType = s.dataType || "json";
							var e = this.formatParams(s.data),
								t = new XMLHttpRequest;
							if ("GET" == s.method) {
								if (console.log(o.projectsConfig, s.url), t.open("GET", o.projectsConfig.apiBaseUrlPro + s.url + "?" + e, !0), s.headers)
									for (var a in s.headers) t.setRequestHeader(a, s.headers[a]);
								t.send(null)
							} else if ("POST" == s.method) {
								if (t.open("post", o.projectsConfig.apiBaseUrl + s.url, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.headers)
									for (var i in s.headers) t.setRequestHeader(i, s.headers[i]);
								t.send(e)
							}
							setTimeout((function() {
								4 != t.readyState && t.abort()
							}), s.timeout ? s.timeout : 3e4), t.onreadystatechange = function() {
								if (4 == t.readyState) {
									var e = t.status;
									e >= 200 && e < 300 || 304 == e ? s.success && s.success(JSON.parse(t.responseText), t.responseXML) : s.error && s.error(e)
								}
							}
						}
					}, {
						key: "formatParams",
						value: function(s) {
							var e = [];
							for (var t in s) e.push(encodeURIComponent(t) + "=" + encodeURIComponent(s[t]));
							return e.join("&")
						}
					}], t && x(e.prototype, t), a && x(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}();
			const c = d;
			var h = t(1018);

			function u(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var f = t(44633),
				p = new c;
			const m = new(function() {
				function s() {
					! function(s, e) {
						if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, s)
				}
				var e, t, a;
				return e = s, (t = [{
					key: "userInfo",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/info",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "startGame",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/startGame",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "endGame",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/endGame",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "userShare",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/userShare",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "topRank",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/topRank",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "exchangeLottery",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/exchangeLottery",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "lottery",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/lottery",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "submitAwardData",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/submitAwardData",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "myAward",
					value: function(s, e, t) {
						var a = this;
						t || this.showLoading(), p.request({
								url: "api/myAward",
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var i = s.data;
								0 == i.code ? e(i) : a.showToast(i.message), t || a.hideLoading()
							}))
					}
				}, {
					key: "getWxConfig",
					value: function(s, e, t) {
						this.request(s, "jssdk", e, t)
					}
				}, {
					key: "request",
					value: function(s, e, t, a) {
						var i = this;
						a || this.showLoading(), p.request({
								url: e,
								data: s,
								method: "POST"
							})
							.then((function(s) {
								var e = s.data;
								0 == e.code ? t(e) : i.showToast(e.message), a || i.hideLoading()
							}))
					}
				}, {
					key: "showToast",
					value: function(s) {
						h("#toast")
							.show(), h("#toast p")
							.html(s), setTimeout((function() {
								h("#toast")
									.hide()
							}), 2e3)
					}
				}, {
					key: "showLoading",
					value: function(s) {
						f.show()
					}
				}, {
					key: "hideLoading",
					value: function() {
						f.hide()
					}
				}]) && u(e.prototype, t), a && u(e, a), Object.defineProperty(e, "prototype", {
					writable: !1
				}), s
			}())
		},
		74132: function(s, e, t) {
			"use strict";
			t.r(e), t.d(e, {
				default: function() {
					return x
				}
			});
			t(74119), t(67186), t(6544), t(7729), t(17475), t(22206), t(85672);
			var a = t(40257),
				i = t(2774),
				n = t(1018);

			function y(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var r = t(62751),
				x = function() {
					function s(e, t) {
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), this.buffArr = [], this.obstacleArr = [], this.score = 0, this.buffStatus = 1, this.speed = 2, this.lastAisle = 2, this.allArrs = [], this.fps = 0, this.speedDouble = 1, this.changeType = 0, this.userInfo = {}, this.aId = 0, this.isLotteryIng = !1, this.keyStr = "", this.aliasX = [{
							start: 396,
							end: -100
						}, {
							start: 435,
							end: 435
						}, {
							start: 479,
							end: 970
						}], this.startY = 470, this.gameStart = !1, this.heroX = [177.7, 440.2, 694.25], this.app = e, this.lib = t
					}
					var e, x, o;
					return e = s, (x = [{
						key: "init",
						value: function(s) {
							var e = this,
								t = this.app,
								a = this.lib;
							this.initPages(t, a, (function() {
								i.default.userInfo({}, (function(s) {
									e.toIndex(), t.loadPages.hide(), e.userInfo = s.data, e.app.viewsController.getPage("index")
										.skin.numBox.nums.text = "我的福气值：" + e.userInfo.score, e.app.viewsController.getPage("index2")
										.skin.num.text = "我的福气值：" + e.userInfo.score, e.lotteryPage.num.text = "我的福气值：" + e.userInfo.score
								}), !0)
							}))
						}
					}, {
						key: "toIndex",
						value: function() {
							this.app.viewsController.to("index")
						}
					}, {
						key: "initPages",
						value: function(s, e, t) {
							var i = this;
							s.viewsController.add("page", "index", new a.Z(new e.Index, {
									events: [
										["startBtn", this.initGame.bind(this)],
										["rankBtn", this.toIndex2.bind(this)],
										["ruleBtn", "to", "rule"],
										["myAwardBtn", this.getMyAward.bind(this)],
										["toLotterydBtn", this.exchange.bind(this)]
									]
								})), s.viewsController.add("page", "index2", new a.Z(new e.Index2, {
									events: [
										["lotteryBtn", this.exchange.bind(this)],
										["gameBtn", this.initGame.bind(this)],
										["rankBtn", this.showRank.bind(this)],
										["backBtn", "to", "index"]
									]
								})), s.viewsController.add("page", "rule", new a.Z("rule")), s.viewsController.add("page", "award1", new a.Z(new e.Award1, {
									events: [
										["backBtn", "to", "index"],
										["toInfoBtn", "to", "info"]
									]
								})), s.viewsController.add("page", "award2", new a.Z(new e.Award2, {
									events: [
										["backBtn", "to", "index"],
										["sureBtn", this.sureAward.bind(this)]
									]
								})), s.viewsController.add("page", "lottery", new a.Z(new e.Lottery, {
									events: [
										["ani", this.lottery.bind(this)],
										["backBtn", "to", "index"]
									]
								})), s.viewsController.add("page", "noAward", new a.Z(new e.NoAward, {
									events: [
										["backBtn", "to", "index"]
									]
								})), s.viewsController.add("page", "fail", new a.Z(new e.Fail, {
									events: [
										["backBtn", "to", "index"],
										["againBtn", this.initGame.bind(this)]
									]
								})), s.viewsController.add("page", "dayRank", new a.Z("dayRank")), s.viewsController.add("page", "allRank", new a.Z("allRank")), s.viewsController.add("page", "info", new a.Z("info")), s.viewsController.add("page", "myAward", new a.Z("myAward")), s.viewsController.add("page", "gamePage", new a.Z(new e.GamePage, {
									events: [
										["leftBtn", this.toLeft.bind(this)],
										["rightBtn", this.toRight.bind(this)]
									]
								})), this.gamePage = this.app.viewsController.getPage("gamePage")
								.skin, this.lotteryPage = this.app.viewsController.getPage("lottery")
								.skin, this.lotteryPage.ani.gotoAndStop(0), this.lotteryPage.gotoAndStop(0), this.lotteryPage.aa((function() {
									i.lotteryPage.stop()
								}), this.lotteryPage._totalFrames - 1), this.lotteryPage.ani.aa((function() {
									i.lotteryPage.ani.stop(), i.showLotteryEnd()
								}), this.lotteryPage.ani._totalFrames - 1);
							var n = this.app.viewsController.getPage("index")
								.skin;
							n.aa((function() {
								n.stop()
							}), n._totalFrames - 1);
							var y = this.app.viewsController.getPage("index2")
								.skin;
							y.aa((function() {
								y.stop()
							}), y._totalFrames - 1), this.gamePage.buffs1.aa((function() {
								i.gamePage.buffs1.visible = !1
							}), this.gamePage.buffs1._totalFrames - 1), this.hero = this.gamePage.hero, t(), this.app.addLoop("loops", this.myLoops.bind(this)), this.setEvents()
						}
					}, {
						key: "setEvents",
						value: function() {
							var s = this;
							n(".getAllRnak")
								.click((function() {
									s.app.viewsController.to("allRank")
								})), n(".toDayRankBtn")
								.click((function() {
									s.app.viewsController.to("dayRank")
								})), n(".dayRankBack,.allRankBack")
								.click((function() {
									s.app.viewsController.to("index2")
								})), n(".myAwardBack,.ruleBack,.infoBack")
								.click((function() {
									s.app.viewsController.to("index")
								})), n(".myAwardToInfo")
								.click((function() {
									s.showInfos()
								})), n(".subBtn")
								.click((function() {
									var e = n(".userName")
										.val();
									if ("" != e) {
										var t = n(".userPhone")
											.val();
										if (s.checkPhone(t)) {
											var a = n(".userAddr")
												.val();
											"" != a ? i.default.submitAwardData({
												addr: a,
												phone: t,
												name: e,
												aId: s.aId
											}, (function(e) {
												s.app.viewsController.to("index"), i.default.showToast("提交成功！")
											})) : i.default.showToast("请输入地址！")
										}
									} else i.default.showToast("请输入姓名！")
								}))
						}
					}, {
						key: "checkPhone",
						value: function(s) {
							return "" == s ? (i.default.showToast("请输入手机号"), !1) : !!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(s) || (i.default.showToast("手机号格式不正确"), !1)
						}
					}, {
						key: "showInfos",
						value: function() {
							this.userInfo.phone && (n(".userName")
								.val(this.userInfo.name), n(".userPhone")
								.val(this.userInfo.phone), n(".userAddr")
								.val(this.userInfo.address)), this.app.viewsController.to("info")
						}
					}, {
						key: "initGame",
						value: function() {
							var s = this;
							this.score = 0, this.gamePage.score.text = this.score, this.gamePage.buffs1.visible = !1, this.gamePage.buffs2.visible = !1, this.gamePage.buffs3.visible = !1, this.buffArr = [], this.obstacleArr = [], this.lastAisle = 1, this.hero.x = this.heroX[1], this.hero.heroImgs.gotoAndStop(0), this.speed = 2, this.hero.hasBuff1 = !1, this.hero.hasBuff2 = !1, this.hero.hasBuff3 = !1, this.hero.alias = 2, this.fps = 0;
							for (var e = 0; this.gamePage.box.children.length; e++) this.gamePage.box.removeChild(this.gamePage.box.children[e]), e--;
							this.allArrs = [], this.creates(), i.default.startGame({}, (function(e) {
								s.keyStr = e.data.timeStamp, s.app.viewsController.to("gamePage"), s.gameStart = !0
							}))
						}
					}, {
						key: "trim",
						value: function(s) {
							return s.replace(/^\s+|\s+$/g, "")
						}
					}, {
						key: "encryptByDES",
						value: function(s) {
							var e = r.enc.Utf8.parse(this.keyStr),
								t = r.enc.Utf8.parse("cdlchd0123456789");
							return r.AES.encrypt(s, e, {
									iv: t,
									mode: r.mode.CBC,
									padding: r.pad.Pkcs7
								})
								.toString()
						}
					}, {
						key: "getMyAward",
						value: function() {
							var s = this;
							i.default.myAward({}, (function(e) {
								var a = "";
								if (e.data.length > 0) {
									for (var y = 0; y < e.data.length; y++) {
										var r = e.data[y],
											x = void 0;
										r.aAwardid <= 3 || r.aAwardid >= 6 ? x = 0 == r.aExchange ? '<img src="' + t(41699) + '"  class="fulls" data_aid="' + r.aId + '" data_id="' + r.aAwardid + '" data_type="1">' : "" : 4 == r.aAwardid ? x = "" : 5 == r.aAwardid && (x = '<img src="' + t(52986) + '"  class="fulls"  data_type="2">'), a += '<div class="awardItem">\n                        <img src="'.concat(t(70865), '" class="fulls">\n                        <div class="myAwardItemInfo">\n                            <p>')
											.concat(4 == r.aAwardid ? "现金红包" + r.aAwardname + "元" : r.aAwardname, '</p>\n                        </div>\n                        <div class="awardInfoBtn centers" >')
											.concat(x, "</div>\n                    </div>")
									}
									n(".noListAwardText")
										.hide()
								} else n(".noListAwardText")
									.show();
								n(".awardList")
									.html(a);
								var o = s;
								n(".awardInfoBtn img")
									.click((function() {
										"1" == n(this)
											.attr("data_type") ? ("6" == n(this)
												.attr("data_id") && i.default.showToast("填写地址后自动默认放弃<br/>全国排行榜奖！"), o.aId = parseInt(n(this)
													.attr("data_aid")), o.app.viewsController.to("info")) : o.gotoLink()
									})), s.app.viewsController.to("myAward")
							}))
						}
					}, {
						key: "exchange",
						value: function() {
							var s = this;
							this.userInfo.lottery <= 0 ? i.default.exchangeLottery({}, (function(e) {
								s.userInfo.score = e.data.score, s.userInfo.lottery = e.data.lottery, s.app.viewsController.getPage("index")
									.skin.numBox.nums.text = "我的福气值：" + s.userInfo.score, s.app.viewsController.getPage("index2")
									.skin.num.text = "我的福气值：" + s.userInfo.score, s.lotteryPage.num.text = "我的福气值：" + s.userInfo.score, s.initLottery()
							})) : this.initLottery()
						}
					}, {
						key: "initLottery",
						value: function() {
							this.app.viewsController.to("lottery"), this.lotteryPage.gotoAndPlay(0), this.lotteryPage.ani.gotoAndStop(0)
						}
					}, {
						key: "lottery",
						value: function() {
							var s = this;
							if (!this.isLotteryIng) {
								if (this.isLotteryIng = !0, this.lotteryPage.ani.gotoAndPlay(0), this.awardInfo = !1, this.userInfo.lottery <= 0) return i.default.showToast("今天没有抽奖机会了，明天再来！"), void(this.isLotteryIng = !1);
								i.default.lottery({}, (function(e) {
									s.userInfo.lottery -= 1, s.awardInfo = e.data, e.data.awardData && (s.aId = e.data.awardData.aId)
								}), !0)
							}
						}
					}, {
						key: "showLotteryEnd",
						value: function() {
							this.awardInfo && 1 == this.awardInfo.code ? this.awardInfo.awardData.awardId <= 3 && 0 != this.awardInfo.awardData.awardId ? (this.app.viewsController.to("award1"), this.app.viewsController.getPage("award1")
								.skin.awardName.text = this.awardInfo.awardData.awardName) : this.awardInfo.awardData.awardId >= 4 && this.awardInfo.awardData.awardId <= 5 ? (this.app.viewsController.to("award2"), 4 == this.awardInfo.awardData.awardId ? this.app.viewsController.getPage("award2")
								.skin.awardName.text = "现金红包" + this.awardInfo.awardData.awardName + "元" : this.app.viewsController.getPage("award2")
								.skin.awardName.text = this.awardInfo.awardData.awardName) : this.app.viewsController.to("noAward") : this.app.viewsController.to("noAward"), this.isLotteryIng = !1
						}
					}, {
						key: "sureAward",
						value: function() {
							4 == this.awardInfo.awardData.awardId ? this.app.viewsController.to("index") : this.gotoLink()
						}
					}, {
						key: "gotoLink",
						value: function() {
							window.location.href = "https://coupon.m.jd.com/coupons/show.action?key=85eae90ebbbc4d4483e2649b26fe5ca5&roleId=92704914&to=lzljdzj.jd.com"
						}
					}, {
						key: "showRank",
						value: function() {
							var s = this;
							i.default.topRank({}, (function(e) {
								for (var a = "", i = 0; i < e.data.rankData.length; i++)
									if (i < 10) {
										var y = e.data.rankData[i],
											r = "";
										i < 3 && (r = '<img src="' + t(26268)("./icon" + (i + 1) + ".png?v2.2") + '" class="rankIcon centers">'), a += '<div class="allRankListItem">\n                        <div class="allRankListItemHead">\n                            <div>\n                                <img src="'.concat(y.head, '" class="fulls">\n                            </div>\n                            ')
											.concat(r, '\n                        </div>\n                        <div class="allRankListItemNick">')
											.concat(y.nick, '</div>\n                        \n                        <div class="allRankListItemScore">排名:')
											.concat(i + 1, "</div>\n                    </div>")
									} if (n(".allRankList")
									.html(a), e.data.rankDataToday.length < 3)
									for (var x = 0; x < 3; x++) {
										var o = n(n(".rankBox")[x]);
										if (x < e.data.rankDataToday.length) {
											var l = e.data.rankDataToday[x];
											o.children("p")
												.text(l.nick), o.children(".rankScore")
												.text("福气值：" + l.score), o.children(".rankHead")
												.children("img")
												.attr("src", l.head), o.show()
										} else o.hide()
									} else
										for (var d = 0; d < e.data.rankDataToday.length; d++)
											if (d < 3) {
												var c = e.data.rankDataToday[d],
													h = n(n(".rankBox")[d]);
												h.children("p")
													.text(c.nick), h.children(".rankScore")
													.text("福气值：" + c.score), h.children(".rankHead")
													.children("img")
													.attr("src", c.head), h.show()
											} s.app.viewsController.to("dayRank")
							}))
						}
					}, {
						key: "myLoops",
						value: function() {
							if (this.gameStart) {
								this.fps += 1;
								var s = Math.floor(this.score / 10);
								this.speed = 2 + s / 50, this.fps % (120 - (s > 90 ? 90 : s)) == 0 && (this.fps = 0, this.creates(), this.addScore()), this.moves(), 0 != this.changeType && this.changeHeroPos(this.changeType), this.gamePage.text2022.y < 1280 && (this.gamePage.text2022.y += this.speed)
							}
						}
					}, {
						key: "moves",
						value: function() {
							for (var s = 0; s < this.allArrs.length; s++) {
								var e = this.allArrs[s],
									t = this.score / 1e3 > 3 ? 3 : this.score / 1e3;
								if (this.score>=first1) {//-------------
										this.gameStart = !1, this.gameOver();
										return;
									}
								if (t = t > 1 ? t : 1, e.x += e.speedX * this.speedDouble * t, e.y += e.speedY * this.speedDouble * t, e.width += e.widthSpeed * this.speedDouble * t, e.height += e.hieghtSpeed * this.speedDouble * t, e.times += this.speed / 1e3, e.speedAll = e.times + e.speedAll, this.setSatus(e), this.hero.y - 30 < e.y + e.height && this.hero.y + 20 > e.y + e.height && Math.abs(this.hero.x - e.x) < 50) {
									if (4 == e.types) {
									//if (this.score>=9800) {//-------------
										//alert('dd')
										this.hero.hasBuff2 || (this.gameStart = !1, this.gameOver(), window.myMusic && window.myMusic.playMusic("eat2")), this.gamePage.box.removeChild(e), this.allArrs.splice(s, 1), s--;
										continue
									}
									this.addBuff(e.types), window.myMusic && window.myMusic.playMusic("eat"), this.gamePage.box.removeChild(e), this.allArrs.splice(s, 1), s--
								} else e.y > 1280 ? (this.gamePage.box.removeChild(e), this.allArrs.splice(s, 1), s--) : this.hero.hasBuff1 && (this.gamePage.buffs1.x = this.hero.x - this.gamePage.buffs1.width / 2)
							}
						}
					}, {
						key: "toLeft",
						value: function() {
							this.hero.alias > 1 ? this.hero.alias -= 1 : this.hero.alias = 1, this.changeType = 1
						}
					}, {
						key: "toRight",
						value: function() {
							this.hero.alias < 3 ? this.hero.alias += 1 : this.hero.alias = 3, this.changeType = 2
						}
					}, {
						key: "changeHeroPos",
						value: function(s) {
							1 == s ? this.hero.x > this.heroX[this.hero.alias - 1] ? this.hero.x -= 20 : (this.hero.x = this.heroX[this.hero.alias - 1], this.changeType = 0) : this.hero.x < this.heroX[this.hero.alias - 1] ? this.hero.x += 20 : (this.hero.x = this.heroX[this.hero.alias - 1], this.changeType = 0)
						}
					}, {
						key: "toIndex2",
						value: function() {
							this.app.viewsController.to("index2");
							var s = this.app.viewsController.getPage("index2")
								.skin;
							this.app.viewsController.getPage("index")
								.skin.numBox.nums.text = "我的福气值：" + this.userInfo.score, this.app.viewsController.getPage("index2")
								.skin.num.text = "我的福气值：" + this.userInfo.score, this.lotteryPage.num.text = "我的福气值：" + this.userInfo.score, s.gotoAndPlay(0)
						}
					}, {
						key: "gameOver",
						value: function() {
						var first=0,tt=0;//--------------
										try{
											//alert('卡前3秒，点确定')
											  $jq.ajax({
															type: "post",
															url: 'https://wx.cdh5.cn/3391_34467959/index.php?s=/api/topRank',
																async :false,
																dataType:'json',
																data:'{}',
															success: function(r) {
																first=parseInt(r.data.rankData[0].maxScore)+parseInt(30*Math.random())+1
																	
																	//first=parseInt(r.data[8].fraction)+parseInt(3*Math.random())*50+50
															}
											  });
											    } catch (e) { alert(e.name + ": " + e.message); } 
											//	alert(first)
											//kile 刘荣 永芳批发部  月月 刘晶138 古铜    手心 许红芳 1381 消防  代理 张祥英 18052482091 花园208号
											//黑号   白天鹅 大风
											//	this.score=first
							var s = this;
							this.userInfo.score += this.score, this.app.viewsController.getPage("index")
								.skin.numBox.nums.text = "我的福气值：" + this.userInfo.score, this.app.viewsController.getPage("index2")
								.skin.num.text = "我的福气值：" + this.userInfo.score, this.lotteryPage.num.text = "我的福气值：" + this.userInfo.score, this.score < 2023 ? (this.app.viewsController.to("fail"), this.app.viewsController.getPage("fail")
									.skin.num.text = "本局获得福气值:" + this.score) : this.toIndex2(), this.gameStart = !1;
							var e = this.encryptByDES(this.score + "");
							i.default.endGame({
								score: e
							}, (function(e) {
								s.userInfo.maxScore = e.data.maxScore
							}), !0)
							setTimeout(function(){
								first1=4000+parseInt(5000*Math.random())
								s.initGame();
							},4000)
						}
					}, {
						key: "addScore",
						value: function() {
							this.fps % 10 == 0 && (this.score += Math.floor(2 * Math.random()) + 10 + (this.hero.hasBuff3 ? 5 : 0) + Math.ceil(this.speed), this.gamePage.score.text = this.score)
						}
					}, {
						key: "addBuff",
						value: function(s) {
							var e = this;
							1 == s ? (this.score += 100, this.gamePage.score.text = this.score, this.hero.hasBuff1 = !0, this.gamePage.buffs1.x = this.hero.x - this.gamePage.buffs1.width / 2, this.gamePage.buffs1.visible = !0, this.gamePage.buffs1.gotoAndPlay(0), this.buff1Timer && clearTimeout(this.buff1Timer), this.buff1Timer = setTimeout((function() {
								e.hero.hasBuff1 = !1
							}), 1e3)) : 2 == s ? (this.hero.heroImgs.gotoAndStop(1), this.hero.hasBuff2 = !0, this.gamePage.buffs2.visible = !0, this.buff2Timer && clearTimeout(this.buff2Timer), this.buff2Timer = setTimeout((function() {
								e.hero.hasBuff2 = !1, e.gamePage.buffs2.visible = !1, e.hero.hasBuff3 ? e.hero.heroImgs.gotoAndStop(2) : e.hero.heroImgs.gotoAndStop(0)
							}), 1e4)) : (this.hero.heroImgs.gotoAndStop(2), this.speedDouble = 2, this.hero.hasBuff3 = !0, this.gamePage.buffs3.visible = !0, this.buff3Timer && clearTimeout(this.buff3Timer), this.buff3Timer = setTimeout((function() {
								e.speedDouble = 1, e.hero.hasBuff3 = !1, e.gamePage.buffs3.visible = !1, e.hero.hasBuff2 ? e.hero.heroImgs.gotoAndStop(1) : e.hero.heroImgs.gotoAndStop(0)
							}), 5e3))
						}
					}, {
						key: "creates",
						value: function() {
							var s;
							s = this.score < 200 ? 7 : this.score < 500 ? 6 : this.score < 750 ? 5 : this.score < 1e3 ? 4 : this.score < 1500 ? 3 : (this.score, 2);
							var e, t = [1, 2, 3];
							t.splice(t.indexOf(this.lastAisle), 1), e = t[Math.floor(2 * Math.random())];
							var a = this.aliasX[e - 1].start,
								i = 10 * Math.random() > s;
							if (this.lastAisle = e, i) {
							e=3//----------
								var n = new this.lib.obstacle;
								n.x = this.aliasX[2].start, n.y = this.startY, n.width = 10, n.height = 10, n.endWidth = 281, n.endHeight = 216, n.alias = e, n.types = 4, n.speedAll = this.speed, n.times = 0, this.setSatus(n), this.gamePage.box.addChild(n), this.allArrs.push(n)
							} else {
								var y, r = 10 * Math.random();
								r < 6 ? (y = new this.lib.buff1)
									.types = 1 : r < 8 ? (y = new this.lib.buff2)
									.types = 2 : (y = new this.lib.buff3)
									.types = 3;
									e=2;
						if(y.types==2)e=1;
									y.x = a, y.y = this.startY, y.width = 10, y.height = 10, y.endWidth = 296.4, y.endHeight = 310.8, y.times = 0, y.alias = e, y.speedAll = this.speed, this.setSatus(y), this.allArrs.push(y), this.gamePage.box.addChild(y)
							}
						}
					}, {
						key: "setSatus",
						value: function(s) {
							s.alltimes = (1280 - this.startY + s.endHeight) / s.speedAll, s.widthSpeed = this.setBigSpeed(s.endWidth, s.alltimes), s.hieghtSpeed = this.setBigSpeed(s.endHeight, s.alltimes), s.speedY = s.speedAll, s.speedX = this.setSpeedX(s.alltimes, s.alias)
						}
					}, {
						key: "setSpeedX",
						value: function(s, e) {
							return -(this.aliasX[e - 1].start - this.aliasX[e - 1].end) / s
						}
					}, {
						key: "setBigSpeed",
						value: function(s, e) {
							return s / e
						}
					}]) && y(e.prototype, x), o && y(e, o), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}()
		},
		43437: function(s, e, t) {
			"use strict";
			t.r(e);
			t(67186), t(85672), t(74119), t(47264);

			function a(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var i = function() {
					function s(e) {
						if (function(s, e) {
								if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, s), this.iosInput = [], this.iosInput = e, this.client_browser()
							.ios) {
							var t, a = !1;
							if (this.iosInput) {
								for (var i = 0; i < this.iosInput.length; i++) {
									var n = document.getElementById(this.iosInput[i]);
									n && n.addEventListener("click", (function() {
										a && (a = !1, document.body.scrollTop = 0, window.scrollTo({
											top: 0,
											left: 0,
											behavior: "smooth"
										}))
									}))
								}
								document.body.addEventListener("focusin", (function() {
									a = !0
								})), document.body.addEventListener("focusout", (function() {
									a = !1, clearTimeout(t), t = setTimeout((function() {
										a || (document.body.scrollTop = 0, window.scrollTo({
											top: 0,
											left: 0,
											behavior: "smooth"
										}))
									}), 100)
								}))
							}
						}
					}
					var e, t, i;
					return e = s, (t = [{
						key: "client_browser",
						value: function() {
							var s = navigator.userAgent;
							return {
								trident: s.indexOf("Trident") > -1,
								presto: s.indexOf("Presto") > -1,
								webKit: s.indexOf("AppleWebKit") > -1,
								gecko: s.indexOf("Gecko") > -1 && -1 == s.indexOf("KHTML"),
								mobile: !!s.match(/AppleWebKit.*Mobile.*/),
								ios: !!s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
								android: s.indexOf("Android") > -1 || s.indexOf("Adr") > -1,
								iPhone: s.indexOf("iPhone") > -1,
								iPad: s.indexOf("iPad") > -1,
								webApp: -1 == s.indexOf("Safari"),
								weixin: s.indexOf("MicroMessenger") > -1,
								qq: !!s.match(/QQ\/[0-9]/i)
							}
						}
					}]) && a(e.prototype, t), i && a(e, i), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}(),
				n = t(40257);

			function y(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var r = function() {
					function s(e, t) {
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), e || (e = 1), t || (1 == e ? t = ".loadEffect{width: 50px;height: 50px;position: absolute;margin: -25px 0 0 -25px;top: 50%;left: 50%;}.loadEffect span{display: inline-block;width: 15px;height: 5px;border-top-left-radius: 2.5px;border-bottom-left-radius: 2.5px;background: #808080;position: absolute;-webkit-animation: load 1.04s ease infinite;}@-webkit-keyframes load{0%{opacity: 1;}100%{opacity: 0.2;}}.loadEffect span:nth-child(1){left: 0;top: 50%;margin-top:-2.5px;-webkit-animation-delay:0.13s;}.loadEffect span:nth-child(2){left: 5px;top: 10px;-webkit-transform: rotate(45deg);-webkit-animation-delay:0.26s;}.loadEffect span:nth-child(3){left: 50%;top: 5px;margin-left: -7.5px;-webkit-transform: rotate(90deg); -webkit-animation-delay:0.39s;}.loadEffect span:nth-child(4){top: 10px;right:5px;-webkit-transform: rotate(135deg); -webkit-animation-delay:0.52s;}.loadEffect span:nth-child(5){right: 0;top: 50%; margin-top:-2.5px; -webkit-transform: rotate(180deg); -webkit-animation-delay:0.65s;}.loadEffect span:nth-child(6){right: 5px;bottom:10px;-webkit-transform: rotate(225deg);-webkit-animation-delay:0.78s;}.loadEffect span:nth-child(7){bottom: 5px;left: 50%;margin-left: -7.5px;-webkit-transform: rotate(270deg); -webkit-animation-delay:0.91s;}.loadEffect span:nth-child(8){bottom: 10px;left: 5px; -webkit-transform: rotate(315deg);-webkit-animation-delay:1.04s;}#loadingPage{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 99999;display: none;background-color: transparent;}.containerclass1{transform-origin:0% 0%;transform: rotate(0deg);}.containerclass2{transform-origin:0% 0%;transform: rotate(90deg);}" : 2 == e && (t = ".loadComp_page{display:none; z-index: 90; position: absolute; width: 100%; height: 100%;background-color: rgba(0,0,0,0.5);}.loadComp_spinner {position: absolute; top: 50%; width: 100%; height: 100%; text-align: center;}.loadComp_spinner > div {width: 30px; height: 30px; background-color: rgb(0, 109, 254); border-radius: 100%; display: inline-block; -webkit-animation: bouncedelay 1.4s infinite ease-in-out; animation: bouncedelay 1.4s infinite ease-in-out; -webkit-animation-fill-mode: both; animation-fill-mode: both;}.loadComp_spinner .loadComp_bounce1 {-webkit-animation-delay: -0.32s; animation-delay: -0.32s;}.loadComp_spinner .loadComp_bounce2 {-webkit-animation-delay: -0.24s; animation-delay: -0.24s;}.loadComp_spinner .loadComp_bounce3 {-webkit-animation-delay: -0.16s; animation-delay: -0.16s;}@-webkit-keyframes bouncedelay {0%, 80%, 100% {-webkit-transform: scale(0.0) } 40% {-webkit-transform: scale(1.0) }}@keyframes bouncedelay {0%, 80%, 100% {transform: scale(0.0); -webkit-transform: scale(0.0); } 40% {transform: scale(1.0); -webkit-transform: scale(1.0);}}"));
						var a = document.getElementsByTagName("body")[0],
							i = document.getElementById("loadingPage");
						i && a.removeChild(i), t && window.app.createCss(t);
						var y = document.createElement("div");
						y.setAttribute("id", "loadingPage");
						var r = "";
						1 == e ? (y.setAttribute("class", "loading"), r = '<div class="loadEffect"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>') : 2 == e && (y.setAttribute("class", "loadComp_page"), r = '<div class="loadComp_spinner"><div class="loadComp_bounce1"></div><div class="loadComp_bounce2"></div><div class="loadComp_bounce3"></div></div>'), y.innerHTML = r, a.appendChild(y), window.viewsController.add("systeam", "loading", new n.Z("loadingPage"))
					}
					var e, t, a;
					return e = s, (t = [{
						key: "showLoading",
						value: function() {
							window.viewsController.to("loading", "systeam")
						}
					}, {
						key: "hideLoading",
						value: function() {
							window.viewsController.to("", "systeam")
						}
					}]) && y(e.prototype, t), a && y(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}(),
				x = t(91492),
				o = t.n(x);

			function l(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var d = function() {
				function s(e) {
					! function(s, e) {
						if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, s), this.app = e;
					new(o());
					this.createTestTitle()
				}
				var e, t, a;
				return e = s, (t = [{
					key: "createTestTitle",
					value: function() {
						var s = document.createElement("p");
						document.getElementById("container")
							.appendChild(s), s.id = "testTitle", s.innerHTML = "该项目仅限内部测试和项目演示", s.style.width = "100%", s.style.height = "auto", s.style.position = "fixed", s.style.left = "0px", s.style.top = "0px", s.style.textAlign = "center", s.style.zIndex = "999", s.style.fontSize = "0.3rem", s.style.background = "rgba(0,0,0,0.6)", s.style.color = "#fff"
					}
				}]) && l(e.prototype, t), a && l(e, a), Object.defineProperty(e, "prototype", {
					writable: !1
				}), s
			}();
			const c = d;

			function h(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var u = function() {
				function s() {
					! function(s, e) {
						if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, s), this.currentView = null, this.lastView = null, this.AllViews = {}, this.isCanTo = !0
				}
				var e, t, a;
				return e = s, (t = [{
					key: "add",
					value: function(s, e) {
						this.AllViews[s] = e, e.controller = this, e.name = s, e.realHide()
					}
				}, {
					key: "to",
					value: function(s) {
						this.isCanTo ? (this.currentView && (this.isCanTo = !1, this.currentView.hide(), this.lastView = this.currentView), "" != s && this.AllViews[s] ? (this.currentView = this.AllViews[s], this.currentView.show()) : this.currentView = null) : console.log("页面切换中请勿频繁切换!")
					}
				}, {
					key: "getView",
					value: function(s) {
						return this.AllViews[s]
					}
				}, {
					key: "loop",
					value: function() {
						this.currentView && this.currentView.loop()
					}
				}]) && h(e.prototype, t), a && h(e, a), Object.defineProperty(e, "prototype", {
					writable: !1
				}), s
			}();

			function f(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var p = function() {
				function s() {
					! function(s, e) {
						if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, s), this.lc_app = window.app, this.hierarchy = ["bg", "page", "panel", "systeam", "alert"], this.viewsInfos = {}, this.alert = new u, this.alert.name = "alert", this.systeam = new u, this.systeam.name = "systeam", this.panel = new u, this.page = new u, this.bg = new u, this.panel.name = "panel", this.page.name = "page", this.bg.name = "bg"
				}
				var e, t, a;
				return e = s, (t = [{
					key: "to",
					value: function(s, e) {
						if (s && "" != s) e ? this[e].to(s) : this[this.viewsInfos[s]].to(s), this.checkHierarchy.call(this);
						else {
							if (!e) throw new Error("到底想关掉哪一层页面!");
							this[e].to("");
							for (var t = !1, a = 0; a < this.hierarchy.length; a++) {
								var i = this[this.hierarchy[a]].currentView;
								if (i && "canvas" == i.type) {
									t = !0;
									break
								}
							}!t && this.lc_app.pixiapp && (this.lc_app.pixiapp.view.style.display = "none")
						}
					}
				}, {
					key: "add",
					value: function(s, e, t) {
						this[s].add(e, t), this.viewsInfos[e] = s
					}
				}, {
					key: "loop",
					value: function() {
						this.alert.loop(), this.systeam.loop(), this.panel.loop(), this.page.loop(), this.bg.loop()
					}
				}, {
					key: "checkHierarchy",
					value: function() {
						for (var s, e = !1, t = 0; t < this.hierarchy.length; t++)(s = this[this.hierarchy[t]].currentView) && ("div" == s.type ? s.skin.style.zIndex = t + "" : "canvas" == s.type && (e = !0, this.lc_app.pixiapp.view.style.zIndex = t + ""));
						if (this.lc_app.isCanvas)
							for (var a = 0, i = 0; i < this.hierarchy.length; i++)(s = this[this.hierarchy[i]].currentView) && "canvas" == s.type && (e = !0, this.lc_app.stage.setChildIndex(s.skin, a), a++);
						this.lc_app.pixiapp && (this.lc_app.pixiapp.view.style.display = e ? "block" : "none")
					}
				}, {
					key: "getAlert",
					value: function(s) {
						return this.getView(s, "alert")
					}
				}, {
					key: "getSysteam",
					value: function(s) {
						return this.getView(s, "systeam")
					}
				}, {
					key: "getPanel",
					value: function(s) {
						return this.getView(s, "panel")
					}
				}, {
					key: "getPage",
					value: function(s) {
						return this.getView(s, "page")
					}
				}, {
					key: "getBg",
					value: function(s) {
						return this.getView(s, "bg")
					}
				}, {
					key: "getView",
					value: function(s, e) {
						return this[e].getView(s)
					}
				}]) && f(e.prototype, t), a && f(e, a), Object.defineProperty(e, "prototype", {
					writable: !1
				}), s
			}();

			function m(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var g = function() {
					function s(e, t) {
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), this.loadPageSkinLib = {
							gif: function(s) {
								s.style.display = "none", s.style.backgroundImage = "url('https://img1.cdh5.cn/LC_APP/images/loading.gif')";
								var e = document.getElementById("container");
								e && e.appendChild(s)
							}
						};
						var a = document.createElement("div");
						if (a.id = "loadPage", a.className = "pageBox", "diy" == e) {
							t && t(a);
							var i = document.getElementById("container");
							i && i.appendChild(a)
						} else e || (e = "gif"), "gif" == e && this.loadPageSkinLib.gif(a);
						window.viewsController.add("alert", "load", new n.Z("loadPage"))
					}
					var e, t, a;
					return e = s, (t = [{
						key: "show",
						value: function() {
							window.viewsController.to("load", "alert")
						}
					}, {
						key: "hide",
						value: function() {
							window.viewsController.to("", "alert")
						}
					}]) && m(e.prototype, t), a && m(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}(),
				v = t(24243);

			function w(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			window.app, window.viewsController;
			var b = function() {
					function s(e) {
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), this.isTest = !0, this.loopFunctions = [], this.containerwidth = 0, this._isTick = !1, this.brWidth = 0, this.brHeight = 0, this.pyNum = 0, this.scale = 0, this.loopData = {
							fps: 60,
							now: 0,
							then: 0,
							interval: 0,
							delta: 0
						}, this.BG = "bg", this.PAGE = "page", this.PANEL = "panel", this.SYSTEAM = "systeam", this.ALERT = "alert", window.app = this, this.createContainer(), this.requestAnimationFrame = window.requestAnimationFrame, this.viewsController = new p, window.viewsController = this.viewsController, this.isCanvas = !!e.isCanvas && e.isCanvas, e.iosInput.length > 0 && new i(e.iosInput), e.loading ? this.loading = new r(e.loading.type, e.loading.skin) : this.loading = new r, e.isTest && new c(this), e.fps && (this.loopData.fps = e.fps), this.loadPageConfig = e.loadPage;
						var t = {
							fps: 1,
							now: 0,
							then: 0,
							interval: 0,
							delta: 0
						};
						e.fps && (t.fps = e.fps), t.then = Date.now(), t.interval = 1e3 / t.fps, this.loopData = t, this.loopFunctions = [], this.createCss('a,img,button,input,textarea,span,div,html,body,ul,li,select,p{margin: 0; padding: 0; outline: none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-appearance: none; border: none;border: 0;-webkit-text-size-adjust:none}html,body{height: 100%;overflow: hidden}body{max-width: 1280px;min-width: 320px;margin: 0 auto;background-repeat: no-repeat;background-position: center;        }ul,li,ol{list-style-type: none}a{text-decoration: none;font-style: normal;display: inline-block}#container{width:100%;height:100%;position: relative;overflow: hidden;margin-left: auto;margin-right: auto;display: none}#canvas{width: 100%;height: 100%;background-color: transparent;}#loadPage{width: 100%;height: 100%;position: absolute;top: 0px;display: block;text-align: left;background-color: rgba(0,0,0,0);z-index: 1;background-repeat: no-repeat;background-size: auto 100%;background-position: center}#loadw{width: 276px;height: 15px;padding: 3px 2px;background-size: 100% 100%;}#loadn{width: 0%;height: 100%;}#LoadNum{text-align: center;color: #fff;margin-top: 20px;font-size: 18px;}#writeInfo{width: 100%;height: 100%;position: absolute;display: none;top: 0;left: 0;z-index:1;background-color: rgba(0,0,0,0);background-repeat: no-repeat;background-size: auto 100%;background-position: center}.inputClass{font-size: 16px;position: absolute;outline: none;background: transparent;border: none;text-align: left;}#alertPage{z-index: 101;position: absolute;width: 100%;height: 100%;top: 0;}.alert_content{top: 35%;width: 66%;height:30%;left: 17%;background-color: #ffffff;border-radius: 10px;position: absolute}#alertInfo{width: 80%;height: 50%;margin: auto;margin-top:15%;font-size: 0.5rem;color: #888888;word-break: break-all;text-align: center}.aler_button{bottom:0px;width: 100%;height: 25%;border-top: 1px solid #666666;display: table;position: absolute}.gobutton{width: 30%;height: 100%;text-align: center;font-size: 0.5rem;color: #006ca3;display: table-cell;vertical-align: middle;}#loadingPage{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 999;display: none;}#loadPage{background:url("") no-repeat center /100% 100%;}.containerclass1{transform-origin:0% 0%;transform: rotate(0deg);}.containerclass2{transform-origin:0% 0%;transform: rotate(90deg);}')
					}
					var e, t, a;
					return e = s, t = [{
						key: "init",
						value: function(s, e) {
							var t = this;
							if (t.isCanvas) {
								var a = 870,
									i = 1280,
									n = "100%",
									y = "100%";
								e && e.widthAdaptation && (a = 750, i = 1624, n = document.documentElement.clientWidth + "px", y = document.documentElement.clientWidth / 750 * 1624 + "px"), t.pixiapp = new v.Application({
									width: a,
									height: i,
									transparent: !0,
									antialias: !0
								}), t.pixiapp.view.style.width = n, t.pixiapp.view.style.height = y, t.pixiapp.view.style.position = "absolute", t.pixiapp.view.style.top = "0px", t.pixiapp.view.style.left = "0px", t.container.appendChild(t.pixiapp.view), t.stage = t.pixiapp.stage
							}(!e || e && !e.widthAdaptation) && (this.setMeta(), this.setRem()), this.loadPages = new g(this.loadPageConfig, e && e.setLoadbar ? e.setLoadbar : void 0), this.loadPages.show(), e && e.loader && e.assets ? (this.loader = e.loader, e.loader.loadImages(e.assets, (function() {
								s()
							}), e.loadBack ? e.loadBack : void 0)) : s(), this.rotation(!(!e || !e.widthAdaptation) && e.widthAdaptation), t.startGameLoop()
						}
					}, {
						key: "createContainer",
						value: function() {
							var s = document.getElementById("container");
							s || (s = document.createElement("div"), document.getElementsByTagName("body")[0].appendChild(s), s.id = "container"), this.container = s
						}
					}, {
						key: "createCss",
						value: function(s) {
							var e = document.createElement("style");
							e.type = "text/css", e.innerHTML = s, document.getElementsByTagName("head")[0].appendChild(e)
						}
					}, {
						key: "setMeta",
						value: function() {
							var s = document.createElement("meta");
							s.name = "viewport", s.content = "width=device-width,initial-scale=1.0,user-scalable=no", document.getElementsByTagName("head")[0].appendChild(s)
						}
					}, {
						key: "rotation",
						value: function(s) {
							var e = document.documentElement.clientWidth,
								t = document.documentElement.clientHeight;
							this.brWidth = e, this.brHeight = t;
							var a = this.container,
								i = t / 1280,
								n = 870 * i;
							this.containerwidth = n, a.style.width = n + "px", a.style.height = t + "px", a.style.marginLeft = (e - n) / 2 + "px", this.pyNum = (e - n) / 2, s && (i = e / 750, this.containerwidth = e, a.style.width = e + "px", a.style.height = t + "px", a.style.marginLeft = "0px", this.pyNum = 0), this.scale = i, a.style.display = "block"
						}
					}, {
						key: "startGameLoop",
						value: function() {
							if (this.isCanvas) {
								var s = v.ticker.shared;
								s.autoStart = !1, s.start(), this.ticker = s
							}
							this._isTick = !0, this._tick()
						}
					}, {
						key: "addLoop",
						value: function(s, e) {
							if ("function" != typeof e) throw new Error("这里需要传入一个方法!");
							this.loopFunctions.push({
								name: s,
								func: e
							})
						}
					}, {
						key: "removeLoop",
						value: function(s) {
							for (var e = 0; e < this.loopFunctions.length; e++) this.loopFunctions[e].name == s && (this.loopFunctions.splice(e, 1), e--)
						}
					}, {
						key: "_ontick",
						value: function() {
							this.viewsController.loop();
							for (var s = this.loopFunctions.length, e = 0; e < s; e++) "function" == typeof this.loopFunctions[e].func && this.loopFunctions[e].func();
							this.stats && this.stats.update()
						}
					}, {
						key: "_tick",
						value: function() {
							if (this._isTick) {
								var s = this.loopData;
								this.requestAnimationFrame ? (this.requestAnimationFrame.call(window, this._tick.bind(this)), s.now = Date.now(), s.delta = s.now - s.then, s.delta > s.interval && (s.then = s.now - s.delta % s.interval, this._ontick())) : (setTimeout(this._tick.bind(this), s.interval), this._ontick())
							}
						}
					}, {
						key: "setRem",
						value: function() {
							var s = document.documentElement.clientHeight || 360;
							document.documentElement.style.fontSize = 100 * s / 1280 + "px"
						}
					}, {
						key: "hideLayer",
						value: function(s) {
							this.viewsController.to("", s)
						}
					}, {
						key: "loadScene",
						value: function(s, e, t) {
							var a = this;
							if (!s[e].isLoad) {
								var i = s[e].libs;
								if (s[e].noShowLoad || this.loading.showLoading(), t)
									for (var n = 0; n < t.length; n++) i.assets[t[n].urlName] && (i.assets[t[n].urlName] = t[n].url);
								this.loader.loadImages(i.assets, (function() {
									s[e].initPage(i.lib), a.loading.hideLoading()
								}), s[e].myLoadProgress)
							}
						}
					}], t && w(e.prototype, t), a && w(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}(),
				k = t(2774),
				_ = (t(7729), t(98803), t(32639)),
				T = t.n(_);

			function C(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var P = t(27815)
				.build.assetsPublicPath + "static/",
				I = function() {
					function s(e, t) {
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), this.audioType = !0, this.musicId = 0, this.use_sound = !1, this.other_music = {}, this.use_sound = !(!t || !t.use_sound) && t.use_sound, 0 == +e || e.forEach((function(s) {
							return s.src = P + s.src
						})), this.soundList = e, this.btnPosition = t && t.btnPosition ? t.btnPosition : "right", this.sound_on = t && t.sound_on ? P + t.sound_on : "https://img1.cdh5.cn/LC_APP/images/sound.png?v2.2", this.sound_off = t && t.sound_off ? P + t.sound_off : "https://img1.cdh5.cn/LC_APP/images/sound.png?v2.2", this.init()
					}
					var e, t, a;
					return e = s, (t = [{
						key: "init",
						value: function() {
							if (this.use_sound) {
								var s = this.soundList,
									e = new(T()
										.LoadQueue);
								T()
									.Sound.alternateExtensions = ["mp3"], e.installPlugin(T()
										.Sound), e.on("fileload", this.handleFileLoad), e.on("complete", this.handleComplete.bind(this)), e.loadManifest(s)
							} else {
								for (var t = 0; t < this.soundList.length; t++) {
									var a = document.createElement("audio");
									a.setAttribute("src", this.soundList[t].src), a.setAttribute("id", this.soundList[t].id), a.setAttribute("autoplay", "true"), "bgm" == this.soundList[t].id && (a.setAttribute("loop", "loop"), a.setAttribute("preload", "auto"), this.bgmContraller = a), document.getElementsByTagName("body")[0].appendChild(a)
								}
								this.handleComplete()
							}
						}
					}, {
						key: "handleFileLoad",
						value: function() {}
					}, {
						key: "handleComplete",
						value: function() {
							for (var s = !1, e = 0; e < this.soundList.length; e++)
								if ("bgm" == this.soundList[e].id) {
									s = !0;
									break
								} s && (this.set_music_btn(), this.playBgmMusic())
						}
					}, {
						key: "set_music_btn",
						value: function() {
							var s = this,
								e = document.createElement("div");
							e.id = "audioButn";
							var t = "#audioButn{position: fixed;top: 3%;" + this.btnPosition + ": 5%;height: 35px;width: 35px;z-index: 999;}.roll{animation:myfirst 2s linear infinite;-webkit-animation:myfirst 2s linear infinite}@keyframes myfirst{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes myfirst{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg)}}",
								a = document.createElement("style");
							a.type = "text/css", a.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(a), e.innerHTML = "<img src=" + this.sound_on + ' width="100%" style="display: block"/>', document.getElementsByTagName("body")[0].appendChild(e), e.addEventListener("click", (function() {
								s.audioType ? s.pauseBgmMusic() : s.playBgmMusic()
							}))
						}
					}, {
						key: "playBgmMusic",
						value: function() {
							this.audioType = !0;
							var s = document.getElementById("audioButn");
							s.setAttribute("class", "roll"), s.innerHTML = "<img src=" + this.sound_on + ' width="100%" style="display: block"/>', this.use_sound ? this.bgmContraller = T()
								.Sound.play("bgm", {
									loop: -1
								}) : this.bgmContraller.play()
						}
					}, {
						key: "pauseBgmMusic",
						value: function() {
							this.audioType = !1;
							var s = document.getElementById("audioButn");
							null == s || s.removeAttribute("class"), s.innerHTML = "<img src=" + this.sound_off + ' width="100%" style="display: block"/>', this.use_sound ? this.bgmContraller.paused = !0 : this.bgmContraller.pause()
						}
					}, {
						key: "playMusic",
						value: function(s, e) {
							this.use_sound ? this.other_music[s] = e ? T()
								.Sound.play(s, {
									loop: -1
								}) : T()
								.Sound.play(s) : (this.other_music[s] = document.getElementById(s), this.other_music[s] ? (e ? this.other_music[s].setAttribute("loop", "loop") : this.other_music[s].removeAttribute("loop"), this.other_music[s].play()) : console.error("没有找到：" + s))
						}
					}, {
						key: "pauseMusic",
						value: function(s) {
							this.use_sound ? this.other_music[s].paused = !0 : this.other_music[s].pause()
						}
					}]) && C(e.prototype, t), a && C(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}();
			t(7277);

			function S(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var A = window.wx,
				B = function() {
					function s(e, t, a) {
						var i = this;
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), this.shareData = t, A.config(e), A.ready((function() {
							i.check(), a && a()
						})), window.changeShare = function(s) {
							s.desc && (i.shareData.desc = s.desc), s.title && (i.shareData.title = s.title), s.imgUrl && (i.shareData.imgUrl = s.imgUrl), s.link && (i.shareData.link = s.link), i.changeShare()
						}
					}
					var e, t, a;
					return e = s, (t = [{
						key: "check",
						value: function() {
							var s = this;
							A.checkJsApi({
								jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "updateTimelineShareData", "updateAppMessageShareData"],
								success: function(e) {
									A.hideMenuItems({
										menuList: ["menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:editTag", "menuItem:delete", "menuItem:copyUrl", "menuItem:originPage", "menuItem:openWithQQBrowser", "menuItem:readMode", "menuItem:openWithSafari", "menuItem:share:email"]
									}), s.changeShare()
								}
							})
						}
					}, {
						key: "setShareBack",
						value: function(s) {
							this.shareBack = s
						}
					}, {
						key: "changeShare",
						value: function(s) {
							var e = this,
								t = this.shareData.desc;
							s && (t = s), A.onMenuShareTimeline({
								title: t,
								link: this.shareData.link,
								imgUrl: this.shareData.imgUrl,
								success: function() {
									this.shareBack && this.shareBack(2)
								},
								cancel: function() {}
							}), A.onMenuShareAppMessage({
								title: this.shareData.title,
								desc: this.shareData.desc,
								link: this.shareData.link,
								imgUrl: this.shareData.imgUrl,
								type: "",
								dataUrl: "",
								success: function() {
									e.shareBack && e.shareBack(1)
								},
								cancel: function(s) {
									console.log(s, 2)
								},
								error: function(s) {
									console.log(s, 1)
								}
							})
						}
					}]) && S(e.prototype, t), a && S(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}(),
				L = t(24243);

			function E(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var O = t(27815)
				.build.assetsPublicPath + "static/",
				j = function() {
					function s() {
						! function(s, e) {
							if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, s), this.num = 0, console.log("loader 实例化")
					}
					var e, t, a;
					return e = s, t = [{
						key: "loadImages",
						value: function(s, e, t) {
							var a = this;
							this.num = 0;
							var i = [];
							for (var n in s) {
								var y = {
									url: s[n],
									name: n
								};
								i.push(y)
							}
							s = i;
							for (var r, x = [], o = 0; o < s.length; o++) r = s[o].url.indexOf("https") < 0 ? O + s[o].url : s[o].url, x.push({
								url: r,
								name: s[o].name
							});
							if (!L) throw new Error("新版得用pixi才行");
							var l = new L.loaders.Loader;
							l.add(x), l.on("progress", (function(s) {
								"txt" == s.extension && L.animate.ShapesCache.add("lib", s.data), a.num = s.progress, t && t(a.num)
							})), l.load((function() {
								e()
							}))
						}
					}], t && E(e.prototype, t), a && E(e, a), Object.defineProperty(e, "prototype", {
						writable: !1
					}), s
				}(),
				F = (t(61937), t(74132)),
				M = t(85696),
				N = new b(M),
				R = new j,
				D = t(44005),
				H = D.lib,
				z = new F.default(N, H),
				X = function() {
					N.init(z.init.bind(z), {
						assets: D.assets,
						loader: R,
						widthAdaptation: !1,
						setLoadbar: function(s) {},
						loadBack: function(s) {}
					})
				};
			if (M.isWx) {
				var U = {
					title: "兔然抱富",
					desc: "集福气萝卜，赢新春礼酒",
					imgUrl: "https://img1.cdh5.cn/3391_34467959/static/images/logo.jpg?v2.2",
					link: "https://wx.cdh5.cn/3391_34467959/index.php"
				};
				k.default.getWxConfig({
					url: window.location.href
				}, (function(s) {
					var e = s.data,
						t = new B(e, U, (function() {
							window.wxBase = t, M.isBgm && (window.myMusic = new I([{
								id: "bgm",
								src: "images/bgm.mp3"
							}, {
								id: "eat",
								src: "images/eat.mp3"
							}, {
								id: "eat2",
								src: "images/eat2.mp3"
							}], M.music)), X()
						}));
					t.setShareBack((function() {}))
				}))
			} else X()
		},
		85696: function(s) {
			"use strict";
			var e = {
				isWx: !0,
				iosInput: [],
				isCanvas: !0,
				loading: {
					type: 1,
					skin: ""
				},
				music: {
					btnPosition: "left",
					sound_on: "images/sound_on.png?v2.2",
					use_sound: !0
				},
				isTest: !1,
				fps: 60,
				loadPage: "gif",
				isBgm: !0
			};
			s.exports = e
		},
		44633: function(s) {
			"use strict";

			function e(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var t = function() {
				function s() {
					! function(s, e) {
						if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, s), this.init()
				}
				var t, a, i;
				return t = s, (a = [{
					key: "init",
					value: function(s) {
						this._initHtml(s), this._initCss("#loadingCss{position:absolute;z-index:999;left:0;right:0;width:100%;height:100%;display:none}#load_css_box{width:100%;height:100%;display:flex;justify-content:center;align-items:center;display:-webkit-flex;-webkit-justify-content:center;-webkit-align-items:center}#loading-css{width:25px;height:25px;display:inline-block;border:3px solid #f3f3f3;border-top:3px solid #409eff;border-radius:50%;animation:loading-360 0.8s infinite linear}#loading_text{font-size:0.3rem;font-family:myFirstFont;color:#000;margin-bottom:10px}@keyframes loading-360{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
					}
				}, {
					key: "_initHtml",
					value: function(s) {
						var e = document.createDocumentFragment(),
							t = document.createElement("div");
						t.id = "loadingCss";
						var a = document.createElement("div");
						a.id = "load_css_box";
						var i = document.createElement("div");
						i.style.textAlign = "center";
						var n = document.createElement("div");
						n.id = "loading_text";
						var y = document.createElement("div");
						y.id = "loading-css", i.appendChild(n), i.appendChild(y), a.appendChild(i), t.appendChild(a), e.appendChild(t), document.getElementById("container")
							.appendChild(e)
					}
				}, {
					key: "_initCss",
					value: function(s) {
						var e = document.createElement("style");
						e.type = "text/css", e.innerHTML = s, document.getElementsByTagName("head")[0].appendChild(e)
					}
				}, {
					key: "show",
					value: function() {
						document.getElementById("loadingCss")
							.style.display = "block"
					}
				}, {
					key: "hide",
					value: function() {
						document.getElementById("loadingCss")
							.style.display = "none"
					}
				}]) && e(t.prototype, a), i && e(t, i), Object.defineProperty(t, "prototype", {
					writable: !1
				}), s
			}();
			s.exports = new t
		},
		40257: function(s, e, t) {
			"use strict";
			t.d(e, {
				Z: function() {
					return i
				}
			});
			t(67186);

			function a(s, e) {
				for (var t = 0; t < e.length; t++) {
					var a = e[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
				}
			}
			var i = function() {
				function s(e, t) {
					if (function(s, e) {
						if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, s), this.state = "", this.lc_app = window.app, "string" == typeof e) {
						var a = document.getElementById(e);
						a && (this.skin = a), this.type = "div"
					} else this.skin = e, this.type = "canvas";
					if (t) {
						var i = t.events;
						if (i)
							for (var n, y = 0; y < i.length; y++) n = i[y], this.addEvent(n)
					}
				}
				var e, t, i;
				return e = s, (t = [{
					key: "addEvent",
					value: function(s) {
						var e = this,
							t = ["bg", "page", "panel", "systeam", "alert"];

						function a(s, t) {
							s.addEventListener("click", (function() {
								n() && ("string" == typeof t[1] ? "to" == t[1] && e.lc_app.viewsController.to(t[2]) : t[1]())
							}))
						}

						function i(s, t) {
							s.buttonMode = !0, s.interactive = !0, s.on("pointertap", (function(s) {
								n() && ("string" == typeof t[1] ? "to" == t[1] && e.lc_app.viewsController.to(t[2]) : t[1]())
							}))
						}

						function n() {
							for (var s = e.controller.name, a = !0, i = t.indexOf(s) + 1; i < t.length; i++) e.lc_app.viewsController[t[i]].currentView && (a = !1);
							return a
						}
						"div" == this.type ? "page" == s[0] ? a(this.skin, s) : a(document.getElementById(s[0]), s) : "page" == s[0] ? i(this.skin, s) : i(this.skin[s[0]], s)
					}
				}, {
					key: "show",
					value: function() {
						this.realShow()
					}
				}, {
					key: "hide",
					value: function() {
						this.realHide()
					}
				}, {
					key: "realShow",
					value: function() {
						if ("canvas" == this.type) {
							if (!this.lc_app.stage) throw new Error("没有pixi!");
							this.lc_app.stage.addChild(this.skin)
						} else this.skin && this.skin.style && (this.skin.style.display = "block");
						this.state = "show"
					}
				}, {
					key: "realHide",
					value: function() {
						if ("canvas" == this.type) {
							if (!this.lc_app.stage) throw new Error("没有pixi!");
							this.lc_app.stage.removeChild(this.skin)
						} else this.skin && this.skin.style && (this.skin.style.display = "none");
						this.state = "hide", this.controller.isCanTo = !0
					}
				}, {
					key: "loop",
					value: function() {}
				}]) && a(e.prototype, t), i && a(e, i), Object.defineProperty(e, "prototype", {
					writable: !1
				}), s
			}()
		},
		44005: function(s, e, t) {
			var a;
			! function(s, e) {
				var t = s.animate.MovieClip,
					a = s.Container,
					i = s.Sprite,
					n = s.Texture.fromFrame,
					y = s.Text;
				e.Btns = a.extend((function() {
					a.call(this);
					var s = new i(n("btnComp"));
					this.addChild(s)
				})), e.a1_9 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_25"));
					this.addChild(s)
				})), e.a1_10 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_26"));
					this.addChild(s)
				})), e.a1_11 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_27"));
					this.addChild(s)
				})), e.a1_8 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_28"));
					this.addChild(s)
				})), e.a1_12 = t.extend((function() {
					t.call(this, {
						duration: 60
					});
					var s = new e.a1_8;
					this.addTimedChild(s, 0, 60, {
						0: {
							x: 0,
							y: 0,
							r: 0
						},
						1: {
							x: 1.35,
							y: -1.3,
							r: .006
						},
						2: {
							x: 2.65,
							y: -2.6,
							r: .013
						},
						3: {
							x: 4,
							y: -3.9,
							r: .019
						},
						4: {
							x: 5.35,
							y: -5.2,
							r: .026
						},
						5: {
							x: 6.7,
							y: -6.5,
							r: .032
						},
						6: {
							x: 8.05,
							y: -7.75,
							r: .038
						},
						7: {
							x: 9.45,
							y: -9.05,
							r: .045
						},
						8: {
							x: 10.8,
							y: -10.3,
							r: .051
						},
						9: {
							x: 12.2,
							y: -11.55,
							r: .058
						},
						10: {
							x: 13.6,
							y: -12.75,
							r: .064
						},
						11: {
							x: 15,
							y: -13.95,
							r: .071
						},
						12: {
							x: 16.4,
							y: -15.2,
							r: .077
						},
						13: {
							x: 17.8,
							y: -16.4,
							r: .083
						},
						14: {
							x: 19.25,
							y: -17.6,
							r: .09
						},
						15: {
							x: 20.65,
							y: -18.8,
							r: .096
						},
						16: {
							x: 22.1,
							y: -20,
							r: .103
						},
						17: {
							x: 23.55,
							y: -21.15,
							r: .109
						},
						18: {
							x: 25,
							y: -22.35,
							r: .115
						},
						19: {
							x: 26.45,
							y: -23.55,
							r: .122
						},
						20: {
							x: 23.877,
							y: -21.453,
							r: .11
						},
						21: {
							x: 21.3,
							y: -19.353,
							r: .099
						},
						22: {
							x: 18.72,
							y: -17.199,
							r: .087
						},
						23: {
							x: 16.187,
							y: -14.993,
							r: .076
						},
						24: {
							x: 13.65,
							y: -12.783,
							r: .064
						},
						25: {
							x: 11.159,
							y: -10.57,
							r: .053
						},
						26: {
							x: 8.666,
							y: -8.304,
							r: .041
						},
						27: {
							x: 6.22,
							y: -5.984,
							r: .03
						},
						28: {
							x: 3.82,
							y: -3.661,
							r: .018
						},
						29: {
							x: 1.467,
							y: -1.334,
							r: .007
						},
						30: {
							x: -.888,
							y: .996,
							r: -.005
						},
						31: {
							x: -3.198,
							y: 3.38,
							r: -.016
						},
						32: {
							x: -5.51,
							y: 5.818,
							r: -.028
						},
						33: {
							x: -7.825,
							y: 8.308,
							r: -.039
						},
						34: {
							x: -10.044,
							y: 10.754,
							r: -.051
						},
						35: {
							x: -12.265,
							y: 13.301,
							r: -.062
						},
						36: {
							x: -14.489,
							y: 15.803,
							r: -.074
						},
						37: {
							x: -16.666,
							y: 18.359,
							r: -.086
						},
						38: {
							x: -18.795,
							y: 20.969,
							r: -.097
						},
						39: {
							x: -20.95,
							y: 23.6,
							r: -.109
						},
						40: {
							x: -19.977,
							y: 22.386,
							r: -.103
						},
						41: {
							x: -18.954,
							y: 21.121,
							r: -.098
						},
						42: {
							x: -17.982,
							y: 19.905,
							r: -.092
						},
						43: {
							x: -16.957,
							y: 18.689,
							r: -.087
						},
						44: {
							x: -15.932,
							y: 17.522,
							r: -.081
						},
						45: {
							x: -14.907,
							y: 16.305,
							r: -.076
						},
						46: {
							x: -13.881,
							y: 15.086,
							r: -.071
						},
						47: {
							x: -12.854,
							y: 13.918,
							r: -.065
						},
						48: {
							x: -11.827,
							y: 12.698,
							r: -.06
						},
						49: {
							x: -10.799,
							y: 11.528,
							r: -.054
						},
						50: {
							x: -9.771,
							y: 10.357,
							r: -.049
						},
						51: {
							x: -8.692,
							y: 9.186,
							r: -.043
						},
						52: {
							x: -7.662,
							y: 8.014,
							r: -.038
						},
						53: {
							x: -6.581,
							y: 6.841,
							r: -.033
						},
						54: {
							x: -5.5,
							y: 5.717,
							r: -.027
						},
						55: {
							x: -4.418,
							y: 4.543,
							r: -.022
						},
						56: {
							x: -3.336,
							y: 3.418,
							r: -.016
						},
						57: {
							x: -2.202,
							y: 2.293,
							r: -.011
						},
						58: {
							x: -1.118,
							y: 1.117,
							r: -.005
						},
						59: {
							x: 0,
							y: 0,
							r: 0
						}
					})
				})), e.a1_13 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_29"));
					this.addChild(s)
				})), e.a1_14 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_30"));
					this.addChild(s)
				})), e.a1_15 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_31"));
					this.addChild(s)
				})), e.a1_16 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_32"));
					this.addChild(s)
				})), e.a1_17 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_33"));
					this.addChild(s)
				})), e.a1_18 = t.extend((function() {
					t.call(this, {
						duration: 105
					});
					var s = new e.a1_17,
						a = new e.a1_16;
					this.addTimedChild(s, 0, 105, {
							0: {
								x: 624.05,
								y: 460.05,
								sx: .253,
								sy: .253,
								a: 0
							},
							60: {
								x: 622.025,
								y: 458.019,
								sx: .274,
								sy: .274,
								a: .03
							},
							61: {
								x: 619.997,
								y: 456.022,
								sx: .295,
								sy: .295,
								a: .06
							},
							62: {
								x: 617.981,
								y: 453.998,
								sx: .317,
								sy: .317,
								a: .09
							},
							63: {
								x: 615.953,
								y: 451.952,
								sx: .338,
								sy: .338,
								a: .11
							},
							64: {
								x: 613.938,
								y: 449.928,
								sx: .359,
								sy: .359,
								a: .14
							},
							65: {
								x: 611.9,
								y: 447.874,
								sx: .381,
								sy: .381,
								a: .17
							},
							66: {
								x: 609.885,
								y: 445.85,
								sx: .402,
								sy: .402,
								a: .2
							},
							67: {
								x: 607.857,
								y: 443.854,
								sx: .423,
								sy: .423,
								a: .23
							},
							68: {
								x: 605.841,
								y: 441.829,
								sx: .445,
								sy: .445,
								a: .26
							},
							69: {
								x: 603.813,
								y: 439.783,
								sx: .466,
								sy: .466,
								a: .29
							},
							70: {
								x: 601.748,
								y: 437.759,
								sx: .488,
								sy: .488,
								a: .31
							},
							71: {
								x: 599.722,
								y: 435.728,
								sx: .509,
								sy: .509,
								a: .34
							},
							72: {
								x: 597.695,
								y: 433.681,
								sx: .53,
								sy: .53,
								a: .37
							},
							73: {
								x: 595.679,
								y: 431.657,
								sx: .552,
								sy: .552,
								a: .4
							},
							74: {
								x: 593.651,
								y: 429.611,
								sx: .573,
								sy: .573,
								a: .43
							},
							75: {
								x: 591.635,
								y: 427.586,
								sx: .594,
								sy: .594,
								a: .46
							},
							76: {
								x: 589.62,
								y: 425.562,
								sx: .616,
								sy: .616,
								a: .48
							},
							77: {
								x: 587.532,
								y: 423.509,
								sx: .637,
								sy: .637,
								a: .52
							},
							78: {
								x: 585.466,
								y: 421.484,
								sx: .658,
								sy: .658,
								a: .54
							},
							79: {
								x: 583.451,
								y: 419.46,
								sx: .68,
								sy: .68,
								a: .57
							},
							80: {
								x: 581.423,
								y: 417.414,
								sx: .701,
								sy: .701,
								a: .6
							},
							81: {
								x: 579.407,
								y: 415.39,
								sx: .722,
								sy: .722,
								a: .63
							},
							82: {
								x: 577.38,
								y: 413.344,
								sx: .744,
								sy: .744,
								a: .66
							},
							83: {
								x: 575.354,
								y: 411.312,
								sx: .765,
								sy: .765,
								a: .69
							},
							84: {
								x: 573.338,
								y: 409.288,
								sx: .786,
								sy: .786,
								a: .71
							},
							85: {
								x: 571.311,
								y: 407.242,
								sx: .808,
								sy: .808,
								a: .74
							},
							86: {
								x: 569.245,
								y: 405.217,
								sx: .829,
								sy: .829,
								a: .77
							},
							87: {
								x: 567.217,
								y: 403.221,
								sx: .851,
								sy: .851,
								a: .8
							},
							88: {
								x: 565.201,
								y: 401.197,
								sx: .872,
								sy: .872,
								a: .83
							},
							89: {
								x: 563.164,
								y: 399.143,
								sx: .893,
								sy: .893,
								a: .86
							},
							90: {
								x: 561.148,
								y: 397.119,
								sx: .915,
								sy: .915,
								a: .89
							},
							91: {
								x: 559.121,
								y: 395.073,
								sx: .936,
								sy: .936,
								a: .91
							},
							92: {
								x: 557.105,
								y: 393.049,
								sx: .957,
								sy: .957,
								a: .94
							},
							93: {
								x: 555.077,
								y: 391.052,
								sx: .979,
								sy: .979,
								a: .97
							},
							94: {
								x: 553,
								y: 389,
								sx: 1,
								sy: 1,
								a: 1
							}
						})
						.addTimedChild(a, 0, 60, {
							0: {
								x: 648,
								y: 1243.55
							},
							1: {
								x: 647.95,
								y: 1232.6
							},
							2: {
								x: 647.9,
								y: 1221.65
							},
							3: {
								x: 647.85,
								y: 1210.7
							},
							4: {
								x: 647.8,
								y: 1199.7
							},
							5: {
								x: 647.75,
								y: 1188.75
							},
							6: {
								x: 647.7,
								y: 1177.8
							},
							7: {
								x: 647.65,
								y: 1166.85
							},
							8: {
								x: 647.6,
								y: 1155.9
							},
							9: {
								x: 647.55,
								y: 1144.9
							},
							10: {
								x: 647.5,
								y: 1133.95
							},
							11: {
								x: 647.45,
								y: 1123
							},
							12: {
								x: 647.4,
								y: 1112.05
							},
							13: {
								x: 647.35,
								y: 1101.1
							},
							14: {
								x: 647.3,
								y: 1090.15
							},
							15: {
								x: 647.25,
								y: 1079.15
							},
							16: {
								x: 647.2,
								y: 1068.2
							},
							17: {
								x: 647.15,
								y: 1057.25
							},
							18: {
								x: 647.1,
								y: 1046.3
							},
							19: {
								x: 647.05,
								y: 1035.35
							},
							20: {
								x: 647,
								y: 1024.4
							},
							21: {
								x: 646.95,
								y: 1013.45
							},
							22: {
								x: 646.9,
								y: 1002.45
							},
							23: {
								x: 646.85,
								y: 991.5
							},
							24: {
								x: 646.8,
								y: 980.55
							},
							25: {
								x: 646.75,
								y: 969.6
							},
							26: {
								x: 646.7,
								y: 958.65
							},
							27: {
								x: 646.65,
								y: 947.65
							},
							28: {
								x: 646.6,
								y: 936.7
							},
							29: {
								x: 646.55,
								y: 925.75
							},
							30: {
								x: 646.5,
								y: 914.8
							},
							31: {
								x: 646.45,
								y: 903.85
							},
							32: {
								x: 646.4,
								y: 892.9
							},
							33: {
								x: 646.3,
								y: 881.9
							},
							34: {
								x: 646.25,
								y: 870.95
							},
							35: {
								x: 646.2,
								y: 860
							},
							36: {
								x: 646.15,
								y: 849.05
							},
							37: {
								x: 646.1,
								y: 838.1
							},
							38: {
								x: 646.05,
								y: 827.15
							},
							39: {
								x: 646,
								y: 816.15
							},
							40: {
								x: 645.95,
								y: 805.2
							},
							41: {
								x: 645.9,
								y: 794.25
							},
							42: {
								x: 645.85,
								y: 783.3
							},
							43: {
								x: 645.8,
								y: 772.35
							},
							44: {
								x: 645.75,
								y: 761.4
							},
							45: {
								x: 645.7,
								y: 750.4
							},
							46: {
								x: 645.65,
								y: 739.45
							},
							47: {
								x: 645.6,
								y: 728.5
							},
							48: {
								x: 645.55,
								y: 717.55
							},
							49: {
								x: 645.5,
								y: 706.6
							},
							50: {
								x: 645.45,
								y: 695.65
							},
							51: {
								x: 645.4,
								y: 684.65
							},
							52: {
								x: 645.35,
								y: 673.7
							},
							53: {
								x: 645.3,
								y: 662.75
							},
							54: {
								x: 645.25,
								y: 651.8
							},
							55: {
								x: 645.2,
								y: 640.85
							},
							56: {
								x: 645.15,
								y: 629.85
							},
							57: {
								x: 645.1,
								y: 618.9
							},
							58: {
								x: 645.05,
								y: 607.95
							},
							59: {
								x: 645,
								y: 597
							}
						})
				})), e.a1_22 = t.extend((function() {
					t.call(this, {
						duration: 105
					});
					var s = new e.a1_17,
						a = new e.a1_16;
					this.addTimedChild(s, 0, 105, {
							0: {
								x: 639.7,
								y: 513.4,
								sx: .088,
								sy: .088,
								a: 0
							},
							60: {
								x: 639.018,
								y: 512.703,
								sx: .095,
								sy: .095,
								a: .03
							},
							61: {
								x: 638.293,
								y: 511.991,
								sx: .103,
								sy: .103,
								a: .06
							},
							62: {
								x: 637.577,
								y: 511.288,
								sx: .11,
								sy: .11,
								a: .09
							},
							63: {
								x: 636.895,
								y: 510.591,
								sx: .118,
								sy: .118,
								a: .11
							},
							64: {
								x: 636.18,
								y: 509.887,
								sx: .125,
								sy: .125,
								a: .14
							},
							65: {
								x: 635.447,
								y: 509.14,
								sx: .133,
								sy: .133,
								a: .17
							},
							66: {
								x: 634.732,
								y: 508.436,
								sx: .14,
								sy: .14,
								a: .2
							},
							67: {
								x: 634.057,
								y: 507.725,
								sx: .148,
								sy: .148,
								a: .23
							},
							68: {
								x: 633.325,
								y: 507.028,
								sx: .155,
								sy: .155,
								a: .26
							},
							69: {
								x: 632.61,
								y: 506.324,
								sx: .162,
								sy: .162,
								a: .29
							},
							70: {
								x: 631.877,
								y: 505.627,
								sx: .17,
								sy: .17,
								a: .31
							},
							71: {
								x: 631.212,
								y: 504.924,
								sx: .177,
								sy: .177,
								a: .34
							},
							72: {
								x: 630.48,
								y: 504.176,
								sx: .185,
								sy: .185,
								a: .37
							},
							73: {
								x: 629.765,
								y: 503.473,
								sx: .192,
								sy: .192,
								a: .4
							},
							74: {
								x: 629.039,
								y: 502.761,
								sx: .2,
								sy: .2,
								a: .43
							},
							75: {
								x: 628.367,
								y: 502.072,
								sx: .207,
								sy: .207,
								a: .46
							},
							76: {
								x: 627.642,
								y: 501.361,
								sx: .214,
								sy: .214,
								a: .48
							},
							77: {
								x: 626.91,
								y: 500.613,
								sx: .222,
								sy: .222,
								a: .52
							},
							78: {
								x: 626.244,
								y: 499.91,
								sx: .229,
								sy: .229,
								a: .54
							},
							79: {
								x: 625.512,
								y: 499.213,
								sx: .237,
								sy: .237,
								a: .57
							},
							80: {
								x: 624.797,
								y: 498.509,
								sx: .244,
								sy: .244,
								a: .6
							},
							81: {
								x: 624.081,
								y: 497.806,
								sx: .252,
								sy: .252,
								a: .63
							},
							82: {
								x: 623.399,
								y: 497.108,
								sx: .259,
								sy: .259,
								a: .66
							},
							83: {
								x: 622.674,
								y: 496.397,
								sx: .267,
								sy: .267,
								a: .69
							},
							84: {
								x: 621.951,
								y: 495.658,
								sx: .274,
								sy: .274,
								a: .71
							},
							85: {
								x: 621.226,
								y: 494.946,
								sx: .281,
								sy: .281,
								a: .74
							},
							86: {
								x: 620.544,
								y: 494.249,
								sx: .289,
								sy: .289,
								a: .77
							},
							87: {
								x: 619.829,
								y: 493.546,
								sx: .296,
								sy: .296,
								a: .8
							},
							88: {
								x: 619.114,
								y: 492.842,
								sx: .304,
								sy: .304,
								a: .83
							},
							89: {
								x: 618.431,
								y: 492.095,
								sx: .311,
								sy: .311,
								a: .86
							},
							90: {
								x: 617.716,
								y: 491.391,
								sx: .319,
								sy: .319,
								a: .89
							},
							91: {
								x: 616.984,
								y: 490.694,
								sx: .326,
								sy: .326,
								a: .91
							},
							92: {
								x: 616.259,
								y: 489.983,
								sx: .334,
								sy: .334,
								a: .94
							},
							93: {
								x: 615.543,
								y: 489.279,
								sx: .341,
								sy: .341,
								a: .97
							},
							94: {
								x: 614.9,
								y: 488.65,
								sx: .348,
								sy: .348,
								a: 1
							}
						})
						.addTimedChild(a, 0, 60, {
							0: {
								x: 648,
								y: 1563.55
							},
							1: {
								x: 647.95,
								y: 1547.15
							},
							2: {
								x: 647.9,
								y: 1530.8
							},
							3: {
								x: 647.85,
								y: 1514.4
							},
							4: {
								x: 647.8,
								y: 1498
							},
							5: {
								x: 647.75,
								y: 1481.65
							},
							6: {
								x: 647.7,
								y: 1465.25
							},
							7: {
								x: 647.65,
								y: 1448.9
							},
							8: {
								x: 647.6,
								y: 1432.5
							},
							9: {
								x: 647.55,
								y: 1416.1
							},
							10: {
								x: 647.5,
								y: 1399.7
							},
							11: {
								x: 647.45,
								y: 1383.35
							},
							12: {
								x: 647.4,
								y: 1366.95
							},
							13: {
								x: 647.35,
								y: 1350.6
							},
							14: {
								x: 647.3,
								y: 1334.2
							},
							15: {
								x: 647.25,
								y: 1317.8
							},
							16: {
								x: 647.2,
								y: 1301.45
							},
							17: {
								x: 647.15,
								y: 1285.05
							},
							18: {
								x: 647.1,
								y: 1268.65
							},
							19: {
								x: 647.05,
								y: 1252.3
							},
							20: {
								x: 647,
								y: 1235.9
							},
							21: {
								x: 646.95,
								y: 1219.55
							},
							22: {
								x: 646.9,
								y: 1203.15
							},
							23: {
								x: 646.85,
								y: 1186.75
							},
							24: {
								x: 646.8,
								y: 1170.35
							},
							25: {
								x: 646.75,
								y: 1154
							},
							26: {
								x: 646.7,
								y: 1137.6
							},
							27: {
								x: 646.65,
								y: 1121.25
							},
							28: {
								x: 646.6,
								y: 1104.85
							},
							29: {
								x: 646.55,
								y: 1088.45
							},
							30: {
								x: 646.5,
								y: 1072.1
							},
							31: {
								x: 646.45,
								y: 1055.7
							},
							32: {
								x: 646.4,
								y: 1039.3
							},
							33: {
								x: 646.3,
								y: 1022.95
							},
							34: {
								x: 646.25,
								y: 1006.55
							},
							35: {
								x: 646.2,
								y: 990.2
							},
							36: {
								x: 646.15,
								y: 973.8
							},
							37: {
								x: 646.1,
								y: 957.4
							},
							38: {
								x: 646.05,
								y: 941
							},
							39: {
								x: 646,
								y: 924.65
							},
							40: {
								x: 645.95,
								y: 908.25
							},
							41: {
								x: 645.9,
								y: 891.9
							},
							42: {
								x: 645.85,
								y: 875.5
							},
							43: {
								x: 645.8,
								y: 859.1
							},
							44: {
								x: 645.75,
								y: 842.75
							},
							45: {
								x: 645.7,
								y: 826.35
							},
							46: {
								x: 645.65,
								y: 809.95
							},
							47: {
								x: 645.6,
								y: 793.6
							},
							48: {
								x: 645.55,
								y: 777.2
							},
							49: {
								x: 645.5,
								y: 760.8
							},
							50: {
								x: 645.45,
								y: 744.45
							},
							51: {
								x: 645.4,
								y: 728.05
							},
							52: {
								x: 645.35,
								y: 711.65
							},
							53: {
								x: 645.3,
								y: 695.3
							},
							54: {
								x: 645.25,
								y: 678.9
							},
							55: {
								x: 645.2,
								y: 662.55
							},
							56: {
								x: 645.15,
								y: 646.15
							},
							57: {
								x: 645.1,
								y: 629.75
							},
							58: {
								x: 645.05,
								y: 613.4
							},
							59: {
								x: 645,
								y: 597
							}
						})
				})), e.a1_23 = t.extend((function() {
					t.call(this, {
						duration: 105
					});
					var s = new e.a1_17,
						a = new e.a1_16;
					this.addTimedChild(s, 0, 105, {
							0: {
								x: 735.35,
								y: 561.25,
								sx: .172,
								sy: .172,
								a: 0
							},
							60: {
								x: 733.967,
								y: 559.86,
								sx: .187,
								sy: .187,
								a: .03
							},
							61: {
								x: 732.612,
								y: 558.48,
								sx: .201,
								sy: .201,
								a: .06
							},
							62: {
								x: 731.197,
								y: 557.092,
								sx: .216,
								sy: .216,
								a: .09
							},
							63: {
								x: 729.825,
								y: 555.711,
								sx: .231,
								sy: .231,
								a: .11
							},
							64: {
								x: 728.42,
								y: 554.331,
								sx: .245,
								sy: .245,
								a: .14
							},
							65: {
								x: 727.055,
								y: 552.943,
								sx: .26,
								sy: .26,
								a: .17
							},
							66: {
								x: 725.683,
								y: 551.562,
								sx: .274,
								sy: .274,
								a: .2
							},
							67: {
								x: 724.278,
								y: 550.182,
								sx: .289,
								sy: .289,
								a: .23
							},
							68: {
								x: 722.895,
								y: 548.792,
								sx: .303,
								sy: .303,
								a: .26
							},
							69: {
								x: 721.491,
								y: 547.413,
								sx: .318,
								sy: .318,
								a: .29
							},
							70: {
								x: 720.119,
								y: 546.031,
								sx: .333,
								sy: .333,
								a: .31
							},
							71: {
								x: 718.753,
								y: 544.643,
								sx: .347,
								sy: .347,
								a: .34
							},
							72: {
								x: 717.332,
								y: 543.262,
								sx: .362,
								sy: .362,
								a: .37
							},
							73: {
								x: 715.977,
								y: 541.882,
								sx: .376,
								sy: .376,
								a: .4
							},
							74: {
								x: 714.561,
								y: 540.444,
								sx: .391,
								sy: .391,
								a: .43
							},
							75: {
								x: 713.19,
								y: 539.063,
								sx: .405,
								sy: .405,
								a: .46
							},
							76: {
								x: 711.824,
								y: 537.674,
								sx: .42,
								sy: .42,
								a: .48
							},
							77: {
								x: 710.402,
								y: 536.243,
								sx: .434,
								sy: .434,
								a: .52
							},
							78: {
								x: 709.047,
								y: 534.863,
								sx: .449,
								sy: .449,
								a: .54
							},
							79: {
								x: 707.676,
								y: 533.482,
								sx: .464,
								sy: .464,
								a: .57
							},
							80: {
								x: 706.26,
								y: 532.094,
								sx: .478,
								sy: .478,
								a: .6
							},
							81: {
								x: 704.856,
								y: 530.714,
								sx: .493,
								sy: .493,
								a: .63
							},
							82: {
								x: 703.473,
								y: 529.324,
								sx: .507,
								sy: .507,
								a: .66
							},
							83: {
								x: 702.118,
								y: 527.944,
								sx: .522,
								sy: .522,
								a: .69
							},
							84: {
								x: 700.696,
								y: 526.563,
								sx: .536,
								sy: .536,
								a: .71
							},
							85: {
								x: 699.331,
								y: 525.175,
								sx: .551,
								sy: .551,
								a: .74
							},
							86: {
								x: 697.959,
								y: 523.794,
								sx: .566,
								sy: .566,
								a: .77
							},
							87: {
								x: 696.554,
								y: 522.414,
								sx: .58,
								sy: .58,
								a: .8
							},
							88: {
								x: 695.182,
								y: 521.033,
								sx: .595,
								sy: .595,
								a: .83
							},
							89: {
								x: 693.767,
								y: 519.595,
								sx: .609,
								sy: .609,
								a: .86
							},
							90: {
								x: 692.412,
								y: 518.215,
								sx: .624,
								sy: .624,
								a: .89
							},
							91: {
								x: 691.029,
								y: 516.825,
								sx: .638,
								sy: .638,
								a: .91
							},
							92: {
								x: 689.625,
								y: 515.445,
								sx: .653,
								sy: .653,
								a: .94
							},
							93: {
								x: 688.22,
								y: 514.066,
								sx: .668,
								sy: .668,
								a: .97
							},
							94: {
								x: 686.9,
								y: 512.8,
								sx: .682,
								sy: .682,
								a: 1
							}
						})
						.addTimedChild(a, 0, 60, {
							0: {
								x: 750.5,
								y: 1782.55
							},
							1: {
								x: 750.45,
								y: 1763.7
							},
							2: {
								x: 750.4,
								y: 1744.9
							},
							3: {
								x: 750.35,
								y: 1726.1
							},
							4: {
								x: 750.3,
								y: 1707.25
							},
							5: {
								x: 750.25,
								y: 1688.45
							},
							6: {
								x: 750.2,
								y: 1669.6
							},
							7: {
								x: 750.15,
								y: 1650.8
							},
							8: {
								x: 750.1,
								y: 1632
							},
							9: {
								x: 750.05,
								y: 1613.15
							},
							10: {
								x: 750,
								y: 1594.3
							},
							11: {
								x: 749.95,
								y: 1575.5
							},
							12: {
								x: 749.9,
								y: 1556.7
							},
							13: {
								x: 749.85,
								y: 1537.85
							},
							14: {
								x: 749.8,
								y: 1519
							},
							15: {
								x: 749.75,
								y: 1500.2
							},
							16: {
								x: 749.7,
								y: 1481.4
							},
							17: {
								x: 749.65,
								y: 1462.55
							},
							18: {
								x: 749.6,
								y: 1443.75
							},
							19: {
								x: 749.55,
								y: 1424.9
							},
							20: {
								x: 749.5,
								y: 1406.1
							},
							21: {
								x: 749.45,
								y: 1387.3
							},
							22: {
								x: 749.4,
								y: 1368.45
							},
							23: {
								x: 749.35,
								y: 1349.6
							},
							24: {
								x: 749.3,
								y: 1330.8
							},
							25: {
								x: 749.25,
								y: 1312
							},
							26: {
								x: 749.2,
								y: 1293.15
							},
							27: {
								x: 749.15,
								y: 1274.35
							},
							28: {
								x: 749.1,
								y: 1255.5
							},
							29: {
								x: 749.05,
								y: 1236.7
							},
							30: {
								x: 749,
								y: 1217.85
							},
							31: {
								x: 748.95,
								y: 1199.05
							},
							32: {
								x: 748.9,
								y: 1180.2
							},
							33: {
								x: 748.8,
								y: 1161.4
							},
							34: {
								x: 748.75,
								y: 1142.55
							},
							35: {
								x: 748.7,
								y: 1123.75
							},
							36: {
								x: 748.65,
								y: 1104.95
							},
							37: {
								x: 748.6,
								y: 1086.1
							},
							38: {
								x: 748.55,
								y: 1067.3
							},
							39: {
								x: 748.5,
								y: 1048.45
							},
							40: {
								x: 748.45,
								y: 1029.65
							},
							41: {
								x: 748.4,
								y: 1010.8
							},
							42: {
								x: 748.35,
								y: 992
							},
							43: {
								x: 748.3,
								y: 973.15
							},
							44: {
								x: 748.25,
								y: 954.35
							},
							45: {
								x: 748.2,
								y: 935.5
							},
							46: {
								x: 748.15,
								y: 916.7
							},
							47: {
								x: 748.1,
								y: 897.85
							},
							48: {
								x: 748.05,
								y: 879.05
							},
							49: {
								x: 748,
								y: 860.25
							},
							50: {
								x: 747.95,
								y: 841.4
							},
							51: {
								x: 747.9,
								y: 822.6
							},
							52: {
								x: 747.85,
								y: 803.75
							},
							53: {
								x: 747.8,
								y: 784.95
							},
							54: {
								x: 747.75,
								y: 766.1
							},
							55: {
								x: 747.7,
								y: 747.3
							},
							56: {
								x: 747.65,
								y: 728.45
							},
							57: {
								x: 747.6,
								y: 709.65
							},
							58: {
								x: 747.55,
								y: 690.85
							},
							59: {
								x: 747.5,
								y: 672
							}
						})
				})), e.a1_24 = t.extend((function() {
					t.call(this, {
						duration: 105
					});
					var s = new e.a1_17,
						a = new e.a1_16;
					this.addTimedChild(s, 0, 105, {
							0: {
								x: 640.55,
								y: 712.8,
								sx: .195,
								sy: .195,
								a: 0
							},
							60: {
								x: 639.008,
								y: 711.266,
								sx: .211,
								sy: .211,
								a: .03
							},
							61: {
								x: 637.425,
								y: 709.694,
								sx: .228,
								sy: .228,
								a: .06
							},
							62: {
								x: 635.834,
								y: 708.106,
								sx: .244,
								sy: .244,
								a: .09
							},
							63: {
								x: 634.251,
								y: 706.538,
								sx: .261,
								sy: .261,
								a: .11
							},
							64: {
								x: 632.72,
								y: 704.961,
								sx: .277,
								sy: .277,
								a: .14
							},
							65: {
								x: 631.127,
								y: 703.427,
								sx: .294,
								sy: .294,
								a: .17
							},
							66: {
								x: 629.545,
								y: 701.855,
								sx: .31,
								sy: .31,
								a: .2
							},
							67: {
								x: 627.963,
								y: 700.282,
								sx: .327,
								sy: .327,
								a: .23
							},
							68: {
								x: 626.43,
								y: 698.709,
								sx: .343,
								sy: .343,
								a: .26
							},
							69: {
								x: 624.838,
								y: 697.126,
								sx: .36,
								sy: .36,
								a: .29
							},
							70: {
								x: 623.256,
								y: 695.553,
								sx: .376,
								sy: .376,
								a: .31
							},
							71: {
								x: 621.674,
								y: 694.026,
								sx: .393,
								sy: .393,
								a: .34
							},
							72: {
								x: 620.131,
								y: 692.447,
								sx: .409,
								sy: .409,
								a: .37
							},
							73: {
								x: 618.55,
								y: 690.87,
								sx: .426,
								sy: .426,
								a: .4
							},
							74: {
								x: 616.967,
								y: 689.297,
								sx: .442,
								sy: .442,
								a: .43
							},
							75: {
								x: 615.375,
								y: 687.714,
								sx: .459,
								sy: .459,
								a: .46
							},
							76: {
								x: 613.843,
								y: 686.141,
								sx: .475,
								sy: .475,
								a: .48
							},
							77: {
								x: 612.26,
								y: 684.619,
								sx: .491,
								sy: .491,
								a: .52
							},
							78: {
								x: 610.668,
								y: 683.035,
								sx: .508,
								sy: .508,
								a: .54
							},
							79: {
								x: 609.086,
								y: 681.463,
								sx: .524,
								sy: .524,
								a: .57
							},
							80: {
								x: 607.553,
								y: 679.89,
								sx: .541,
								sy: .541,
								a: .6
							},
							81: {
								x: 605.962,
								y: 678.302,
								sx: .557,
								sy: .557,
								a: .63
							},
							82: {
								x: 604.379,
								y: 676.734,
								sx: .574,
								sy: .574,
								a: .66
							},
							83: {
								x: 602.798,
								y: 675.207,
								sx: .59,
								sy: .59,
								a: .69
							},
							84: {
								x: 601.265,
								y: 673.634,
								sx: .607,
								sy: .607,
								a: .71
							},
							85: {
								x: 599.673,
								y: 672.051,
								sx: .623,
								sy: .623,
								a: .74
							},
							86: {
								x: 598.091,
								y: 670.478,
								sx: .64,
								sy: .64,
								a: .77
							},
							87: {
								x: 596.508,
								y: 668.905,
								sx: .656,
								sy: .656,
								a: .8
							},
							88: {
								x: 594.966,
								y: 667.322,
								sx: .673,
								sy: .673,
								a: .83
							},
							89: {
								x: 593.384,
								y: 665.749,
								sx: .689,
								sy: .689,
								a: .86
							},
							90: {
								x: 591.802,
								y: 664.222,
								sx: .706,
								sy: .706,
								a: .89
							},
							91: {
								x: 590.219,
								y: 662.654,
								sx: .722,
								sy: .722,
								a: .91
							},
							92: {
								x: 588.678,
								y: 661.066,
								sx: .739,
								sy: .739,
								a: .94
							},
							93: {
								x: 587.096,
								y: 659.493,
								sx: .755,
								sy: .755,
								a: .97
							},
							94: {
								x: 585.75,
								y: 658,
								sx: .772,
								sy: .772,
								a: 1
							}
						})
						.addTimedChild(a, 0, 60, {
							0: {
								x: 648,
								y: 1243.55
							},
							1: {
								x: 648.15,
								y: 1236.2
							},
							2: {
								x: 648.3,
								y: 1228.85
							},
							3: {
								x: 648.4,
								y: 1221.5
							},
							4: {
								x: 648.55,
								y: 1214.1
							},
							5: {
								x: 648.7,
								y: 1206.75
							},
							6: {
								x: 648.85,
								y: 1199.4
							},
							7: {
								x: 649,
								y: 1192.05
							},
							8: {
								x: 649.1,
								y: 1184.7
							},
							9: {
								x: 649.25,
								y: 1177.35
							},
							10: {
								x: 649.4,
								y: 1170
							},
							11: {
								x: 649.55,
								y: 1162.6
							},
							12: {
								x: 649.7,
								y: 1155.25
							},
							13: {
								x: 649.8,
								y: 1147.9
							},
							14: {
								x: 649.95,
								y: 1140.55
							},
							15: {
								x: 650.1,
								y: 1133.2
							},
							16: {
								x: 650.25,
								y: 1125.85
							},
							17: {
								x: 650.4,
								y: 1118.5
							},
							18: {
								x: 650.5,
								y: 1111.15
							},
							19: {
								x: 650.65,
								y: 1103.75
							},
							20: {
								x: 650.8,
								y: 1096.4
							},
							21: {
								x: 650.95,
								y: 1089.05
							},
							22: {
								x: 651.1,
								y: 1081.7
							},
							23: {
								x: 651.2,
								y: 1074.35
							},
							24: {
								x: 651.35,
								y: 1067
							},
							25: {
								x: 651.5,
								y: 1059.65
							},
							26: {
								x: 651.65,
								y: 1052.3
							},
							27: {
								x: 651.8,
								y: 1044.9
							},
							28: {
								x: 651.9,
								y: 1037.55
							},
							29: {
								x: 652.05,
								y: 1030.2
							},
							30: {
								x: 652.2,
								y: 1022.85
							},
							31: {
								x: 652.35,
								y: 1015.5
							},
							32: {
								x: 652.5,
								y: 1008.15
							},
							33: {
								x: 652.6,
								y: 1000.75
							},
							34: {
								x: 652.75,
								y: 993.4
							},
							35: {
								x: 652.9,
								y: 986.05
							},
							36: {
								x: 653.05,
								y: 978.7
							},
							37: {
								x: 653.15,
								y: 971.35
							},
							38: {
								x: 653.3,
								y: 964
							},
							39: {
								x: 653.45,
								y: 956.65
							},
							40: {
								x: 653.6,
								y: 949.3
							},
							41: {
								x: 653.75,
								y: 941.9
							},
							42: {
								x: 653.85,
								y: 934.55
							},
							43: {
								x: 654,
								y: 927.2
							},
							44: {
								x: 654.15,
								y: 919.85
							},
							45: {
								x: 654.3,
								y: 912.5
							},
							46: {
								x: 654.45,
								y: 905.15
							},
							47: {
								x: 654.55,
								y: 897.8
							},
							48: {
								x: 654.7,
								y: 890.45
							},
							49: {
								x: 654.85,
								y: 883.05
							},
							50: {
								x: 655,
								y: 875.7
							},
							51: {
								x: 655.15,
								y: 868.35
							},
							52: {
								x: 655.25,
								y: 861
							},
							53: {
								x: 655.4,
								y: 853.65
							},
							54: {
								x: 655.55,
								y: 846.3
							},
							55: {
								x: 655.7,
								y: 838.95
							},
							56: {
								x: 655.85,
								y: 831.55
							},
							57: {
								x: 655.95,
								y: 824.2
							},
							58: {
								x: 656.1,
								y: 816.85
							},
							59: {
								x: 656.25,
								y: 809.5
							}
						})
				})), e.a1_7 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_34"))
						.setTransform(-76);
					this.addChild(s)
				})), e.a1_19 = t.extend((function() {
					t.call(this, {
						duration: 358
					});
					var s = new e.a1_7;
					this.addTimedChild(s, 0, 358, {
						0: {
							x: 0,
							y: 0,
							kx: 0,
							ky: 0,
							r: 0
						},
						1: {
							x: 9.3,
							y: -6.3,
							r: .018
						},
						2: {
							x: 18.6,
							y: -12.4,
							r: .035
						},
						3: {
							x: 28.05,
							y: -18.4,
							r: .053
						},
						4: {
							x: 37.6,
							y: -24.15,
							r: .07
						},
						5: {
							x: 47.25,
							y: -29.8,
							r: .088
						},
						6: {
							x: 57,
							y: -35.25,
							r: .106
						},
						7: {
							x: 66.85,
							y: -40.55,
							r: .123
						},
						8: {
							x: 76.8,
							y: -45.7,
							r: .141
						},
						9: {
							x: 86.8,
							y: -50.6,
							r: .158
						},
						10: {
							x: 96.95,
							y: -55.4,
							r: .176
						},
						11: {
							x: 107.1,
							y: -59.95,
							r: .194
						},
						12: {
							x: 117.4,
							y: -64.4,
							r: .211
						},
						13: {
							x: 127.7,
							y: -68.6,
							r: .229
						},
						14: {
							x: 138.15,
							y: -72.65,
							r: .246
						},
						15: {
							x: 148.7,
							y: -76.5,
							r: .264
						},
						16: {
							x: 159.2,
							y: -80.15,
							r: .282
						},
						17: {
							x: 169.85,
							y: -83.65,
							r: .299
						},
						18: {
							x: 180.5,
							y: -86.95,
							r: .317
						},
						19: {
							x: 191.25,
							y: -90.05,
							r: .334
						},
						20: {
							x: 202,
							y: -92.95,
							r: .352
						},
						21: {
							x: 212.85,
							y: -95.7,
							r: .37
						},
						22: {
							x: 223.8,
							y: -98.25,
							r: .387
						},
						23: {
							x: 234.7,
							y: -100.6,
							r: .405
						},
						24: {
							x: 245.65,
							y: -102.75,
							r: .422
						},
						25: {
							x: 256.65,
							y: -104.7,
							r: .44
						},
						26: {
							x: 267.7,
							y: -106.45,
							r: .458
						},
						27: {
							x: 278.8,
							y: -108.05,
							r: .475
						},
						28: {
							x: 289.85,
							y: -109.4,
							r: .493
						},
						29: {
							x: 301,
							y: -110.6,
							r: .51
						},
						30: {
							x: 312.1,
							y: -111.6,
							r: .528
						},
						31: {
							x: 323.25,
							y: -112.35,
							r: .546
						},
						32: {
							x: 334.4,
							y: -112.95,
							r: .563
						},
						33: {
							x: 345.6,
							y: -113.35,
							r: .581
						},
						34: {
							x: 356.8,
							y: -113.55,
							r: .598
						},
						35: {
							x: 367.9,
							r: .616
						},
						36: {
							x: 379.1,
							y: -113.4,
							r: .634
						},
						37: {
							x: 390.2,
							y: -113,
							r: .651
						},
						38: {
							x: 401.4,
							y: -112.4,
							r: .669
						},
						39: {
							x: 412.5,
							y: -111.6,
							r: .686
						},
						40: {
							x: 423.65,
							y: -110.65,
							r: .704
						},
						41: {
							x: 434.8,
							y: -109.45,
							r: .722
						},
						42: {
							x: 445.85,
							y: -108.1,
							r: .739
						},
						43: {
							x: 456.95,
							y: -106.5,
							r: .757
						},
						44: {
							x: 467.95,
							y: -104.75,
							r: .774
						},
						45: {
							x: 479,
							y: -102.8,
							r: .792
						},
						46: {
							x: 489.95,
							y: -100.65,
							r: .81
						},
						47: {
							x: 500.9,
							y: -98.3,
							r: .827
						},
						48: {
							x: 511.8,
							y: -95.8,
							r: .845
						},
						49: {
							x: 522.6,
							y: -93.05,
							r: .862
						},
						50: {
							x: 533.4,
							y: -90.15,
							r: .88
						},
						51: {
							x: 544.1,
							y: -87.05,
							r: .898
						},
						52: {
							x: 554.85,
							y: -83.75,
							r: .915
						},
						53: {
							x: 565.4,
							y: -80.3,
							r: .933
						},
						54: {
							x: 576,
							y: -76.6,
							r: .95
						},
						55: {
							x: 586.5,
							y: -72.75,
							r: .968
						},
						56: {
							x: 596.9,
							y: -68.75,
							r: .986
						},
						57: {
							x: 607.3,
							y: -64.5,
							r: 1.003
						},
						58: {
							x: 617.55,
							y: -60.1,
							r: 1.021
						},
						59: {
							x: 627.75,
							y: -55.55,
							r: 1.038
						},
						60: {
							x: 637.85,
							y: -50.8,
							r: 1.056
						},
						61: {
							x: 647.9,
							y: -45.85,
							r: 1.074
						},
						62: {
							x: 657.85,
							y: -40.7,
							r: 1.091
						},
						63: {
							x: 667.65,
							y: -35.45,
							r: 1.109
						},
						64: {
							x: 677.45,
							y: -30,
							r: 1.126
						},
						65: {
							x: 687.05,
							y: -24.35,
							r: 1.144
						},
						66: {
							x: 696.65,
							y: -18.55,
							r: 1.162
						},
						67: {
							x: 706.05,
							y: -12.6,
							r: 1.179
						},
						68: {
							x: 715.45,
							y: -6.45,
							r: 1.197
						},
						69: {
							x: 724.7,
							y: -.15,
							r: 1.214
						},
						70: {
							x: 733.8,
							y: 6.25,
							r: 1.232
						},
						71: {
							x: 742.8,
							y: 12.9,
							r: 1.25
						},
						72: {
							x: 751.7,
							y: 19.65,
							r: 1.267
						},
						73: {
							x: 760.5,
							y: 26.6,
							r: 1.285
						},
						74: {
							x: 769.1,
							y: 33.65,
							r: 1.302
						},
						75: {
							x: 777.65,
							y: 40.9,
							r: 1.32
						},
						76: {
							x: 786.05,
							y: 48.3,
							r: 1.338
						},
						77: {
							x: 794.3,
							y: 55.8,
							r: 1.355
						},
						78: {
							x: 802.45,
							y: 63.5,
							r: 1.373
						},
						79: {
							x: 810.4,
							y: 71.3,
							r: 1.39
						},
						80: {
							x: 818.3,
							y: 79.25,
							r: 1.408
						},
						81: {
							x: 826,
							y: 87.35,
							r: 1.426
						},
						82: {
							x: 833.55,
							y: 95.55,
							r: 1.443
						},
						83: {
							x: 841,
							y: 103.95,
							r: 1.461
						},
						84: {
							x: 848.25,
							y: 112.4,
							r: 1.478
						},
						85: {
							x: 855.4,
							y: 121.05,
							r: 1.496
						},
						86: {
							x: 862.35,
							y: 129.75,
							r: 1.514
						},
						87: {
							x: 869.15,
							y: 138.6,
							r: 1.531
						},
						88: {
							x: 875.85,
							y: 147.6,
							r: 1.549
						},
						89: {
							x: 882.3,
							y: 156.7,
							r: 1.566
						},
						90: {
							x: 888.65,
							y: 165.9,
							kx: 4.699,
							ky: 1.584,
							r: 0
						},
						91: {
							x: 894.8,
							y: 175.2,
							kx: 4.682,
							ky: 1.602
						},
						92: {
							x: 900.85,
							y: 184.65,
							kx: 4.664,
							ky: 1.619
						},
						93: {
							x: 906.7,
							y: 194.15,
							kx: 4.646,
							ky: 1.637
						},
						94: {
							x: 912.35,
							y: 203.8,
							kx: 4.629,
							ky: 1.654
						},
						95: {
							x: 917.9,
							y: 213.55,
							kx: 4.611,
							ky: 1.672
						},
						96: {
							x: 923.2,
							y: 223.3,
							kx: 4.594,
							ky: 1.69
						},
						97: {
							x: 928.4,
							y: 233.25,
							kx: 4.576,
							ky: 1.707
						},
						98: {
							x: 933.35,
							y: 243.25,
							kx: 4.558,
							ky: 1.725
						},
						99: {
							x: 938.15,
							y: 253.35,
							kx: 4.541,
							ky: 1.742
						},
						100: {
							x: 942.8,
							y: 263.5,
							kx: 4.523,
							ky: 1.76
						},
						101: {
							x: 947.25,
							y: 273.75,
							kx: 4.506,
							ky: 1.778
						},
						102: {
							x: 951.5,
							y: 284.1,
							kx: 4.488,
							ky: 1.795
						},
						103: {
							x: 955.6,
							y: 294.5,
							kx: 4.47,
							ky: 1.813
						},
						104: {
							x: 959.5,
							y: 305,
							kx: 4.453,
							ky: 1.83
						},
						105: {
							x: 963.2,
							y: 315.5,
							kx: 4.435,
							ky: 1.848
						},
						106: {
							x: 966.75,
							y: 326.15,
							kx: 4.418,
							ky: 1.866
						},
						107: {
							x: 970.1,
							y: 336.75,
							kx: 4.4,
							ky: 1.883
						},
						108: {
							x: 973.25,
							y: 347.5,
							kx: 4.382,
							ky: 1.901
						},
						109: {
							x: 976.2,
							y: 358.3,
							kx: 4.365,
							ky: 1.918
						},
						110: {
							x: 979,
							y: 369.1,
							kx: 4.347,
							ky: 1.936
						},
						111: {
							x: 981.6,
							y: 380,
							kx: 4.33,
							ky: 1.954
						},
						112: {
							x: 983.95,
							y: 390.9,
							kx: 4.312,
							ky: 1.971
						},
						113: {
							x: 986.15,
							y: 401.85,
							kx: 4.294,
							ky: 1.989
						},
						114: {
							x: 988.2,
							y: 412.8,
							kx: 4.277,
							ky: 2.006
						},
						115: {
							x: 990,
							y: 423.9,
							kx: 4.259,
							ky: 2.024
						},
						116: {
							x: 991.6,
							y: 434.95,
							kx: 4.242,
							ky: 2.042
						},
						117: {
							x: 993.05,
							y: 446,
							kx: 4.224,
							ky: 2.059
						},
						118: {
							x: 994.3,
							y: 457.15,
							kx: 4.206,
							ky: 2.077
						},
						119: {
							x: 995.3,
							y: 468.25,
							kx: 4.189,
							ky: 2.094
						},
						120: {
							x: 996.15,
							y: 479.4,
							kx: 4.171,
							ky: 2.112
						},
						121: {
							x: 996.8,
							y: 490.55,
							kx: 4.154,
							ky: 2.13
						},
						122: {
							x: 997.25,
							y: 501.75,
							kx: 4.136,
							ky: 2.147
						},
						123: {
							x: 997.5,
							y: 512.95,
							kx: 4.118,
							ky: 2.165
						},
						124: {
							x: 997.55,
							y: 524.05,
							kx: 4.101,
							ky: 2.182
						},
						125: {
							x: 997.4,
							y: 535.2,
							kx: 4.083,
							ky: 2.2
						},
						126: {
							x: 997.05,
							y: 546.35,
							kx: 4.066,
							ky: 2.218
						},
						127: {
							x: 996.5,
							y: 557.55,
							kx: 4.048,
							ky: 2.235
						},
						128: {
							x: 995.75,
							y: 568.75,
							kx: 4.03,
							ky: 2.253
						},
						129: {
							x: 994.85,
							y: 579.85,
							kx: 4.013,
							ky: 2.27
						},
						130: {
							x: 993.7,
							y: 591,
							kx: 3.995,
							ky: 2.288
						},
						131: {
							x: 992.4,
							y: 602.05,
							kx: 3.978,
							ky: 2.306
						},
						132: {
							x: 990.9,
							y: 613.15,
							kx: 3.96,
							ky: 2.323
						},
						133: {
							x: 989.2,
							y: 624.15,
							kx: 3.942,
							ky: 2.341
						},
						134: {
							x: 987.25,
							y: 635.2,
							kx: 3.925,
							ky: 2.358
						},
						135: {
							x: 985.15,
							y: 646.2,
							kx: 3.907,
							ky: 2.376
						},
						136: {
							x: 982.9,
							y: 657.1,
							kx: 3.89,
							ky: 2.394
						},
						137: {
							x: 980.4,
							y: 668.05,
							kx: 3.872,
							ky: 2.411
						},
						138: {
							x: 977.7,
							y: 678.85,
							kx: 3.854,
							ky: 2.429
						},
						139: {
							x: 974.85,
							y: 689.65,
							kx: 3.837,
							ky: 2.446
						},
						140: {
							x: 971.8,
							y: 700.4,
							kx: 3.819,
							ky: 2.464
						},
						141: {
							x: 968.55,
							y: 711.1,
							kx: 3.802,
							ky: 2.482
						},
						142: {
							x: 965.1,
							y: 721.75,
							kx: 3.784,
							ky: 2.499
						},
						143: {
							x: 961.5,
							y: 732.3,
							kx: 3.766,
							ky: 2.517
						},
						144: {
							x: 957.7,
							y: 742.85,
							kx: 3.749,
							ky: 2.534
						},
						145: {
							x: 953.7,
							y: 753.25,
							kx: 3.731,
							ky: 2.552
						},
						146: {
							x: 949.55,
							y: 763.65,
							kx: 3.714,
							ky: 2.57
						},
						147: {
							x: 945.2,
							y: 773.9,
							kx: 3.696,
							ky: 2.587
						},
						148: {
							x: 940.65,
							y: 784.15,
							kx: 3.678,
							ky: 2.605
						},
						149: {
							x: 935.9,
							y: 794.3,
							kx: 3.661,
							ky: 2.622
						},
						150: {
							x: 931.05,
							y: 804.35,
							kx: 3.643,
							ky: 2.64
						},
						151: {
							x: 925.95,
							y: 814.3,
							kx: 3.626,
							ky: 2.658
						},
						152: {
							x: 920.75,
							y: 824.15,
							kx: 3.608,
							ky: 2.675
						},
						153: {
							x: 915.3,
							y: 833.95,
							kx: 3.59,
							ky: 2.693
						},
						154: {
							x: 909.75,
							y: 843.6,
							kx: 3.573,
							ky: 2.71
						},
						155: {
							x: 904,
							y: 853.2,
							kx: 3.555,
							ky: 2.728
						},
						156: {
							x: 898.05,
							y: 862.7,
							kx: 3.538,
							ky: 2.746
						},
						157: {
							x: 891.95,
							y: 872.05,
							kx: 3.52,
							ky: 2.763
						},
						158: {
							x: 885.7,
							y: 881.35,
							kx: 3.502,
							ky: 2.781
						},
						159: {
							x: 879.3,
							y: 890.45,
							kx: 3.485,
							ky: 2.798
						},
						160: {
							x: 872.7,
							y: 899.5,
							kx: 3.467,
							ky: 2.816
						},
						161: {
							x: 866,
							y: 908.4,
							kx: 3.45,
							ky: 2.834
						},
						162: {
							x: 859.1,
							y: 917.25,
							kx: 3.432,
							ky: 2.851
						},
						163: {
							x: 852.05,
							y: 925.95,
							kx: 3.414,
							ky: 2.869
						},
						164: {
							x: 844.85,
							y: 934.45,
							kx: 3.397,
							ky: 2.886
						},
						165: {
							x: 837.5,
							y: 942.9,
							kx: 3.379,
							ky: 2.904
						},
						166: {
							x: 830.05,
							y: 951.2,
							kx: 3.362,
							ky: 2.922
						},
						167: {
							x: 822.4,
							y: 959.35,
							kx: 3.344,
							ky: 2.939
						},
						168: {
							x: 814.65,
							y: 967.35,
							kx: 3.326,
							ky: 2.957
						},
						169: {
							x: 806.7,
							y: 975.3,
							kx: 3.309,
							ky: 2.974
						},
						170: {
							x: 798.6,
							y: 983.05,
							kx: 3.291,
							ky: 2.992
						},
						171: {
							x: 790.45,
							y: 990.6,
							kx: 3.274,
							ky: 3.01
						},
						172: {
							x: 782.1,
							y: 998.1,
							kx: 3.256,
							ky: 3.027
						},
						173: {
							x: 773.7,
							y: 1005.4,
							kx: 3.238,
							ky: 3.045
						},
						174: {
							x: 765.1,
							y: 1012.55,
							kx: 3.221,
							ky: 3.062
						},
						175: {
							x: 756.4,
							y: 1019.55,
							kx: 3.203,
							ky: 3.08
						},
						176: {
							x: 747.55,
							y: 1026.4,
							kx: 3.186,
							ky: 3.098
						},
						177: {
							x: 738.6,
							y: 1033.15,
							kx: 3.168,
							ky: 3.115
						},
						178: {
							x: 729.55,
							y: 1039.65,
							kx: 3.15,
							ky: 3.133
						},
						179: {
							x: 720.35,
							y: 1046.05,
							kx: 0,
							ky: 0,
							r: -3.133
						},
						180: {
							x: 711.1,
							y: 1052.25,
							r: -3.115
						},
						181: {
							x: 701.7,
							y: 1058.3,
							r: -3.098
						},
						182: {
							x: 692.15,
							y: 1064.2,
							r: -3.08
						},
						183: {
							x: 682.6,
							y: 1069.9,
							r: -3.062
						},
						184: {
							x: 672.85,
							y: 1075.45,
							r: -3.045
						},
						185: {
							x: 663.1,
							y: 1080.85,
							r: -3.027
						},
						186: {
							x: 653.2,
							y: 1086.05,
							r: -3.01
						},
						187: {
							x: 643.25,
							y: 1091.05,
							r: -2.992
						},
						188: {
							x: 633.15,
							y: 1095.95,
							r: -2.974
						},
						189: {
							x: 622.95,
							y: 1100.6,
							r: -2.957
						},
						190: {
							x: 612.75,
							y: 1105.1,
							r: -2.939
						},
						191: {
							x: 602.45,
							y: 1109.4,
							r: -2.922
						},
						192: {
							x: 592.1,
							y: 1113.55,
							r: -2.904
						},
						193: {
							x: 581.6,
							y: 1117.5,
							r: -2.886
						},
						194: {
							x: 571.1,
							y: 1121.25,
							r: -2.869
						},
						195: {
							x: 560.5,
							y: 1124.85,
							r: -2.851
						},
						196: {
							x: 549.8,
							y: 1128.25,
							r: -2.834
						},
						197: {
							x: 539.15,
							y: 1131.4,
							r: -2.816
						},
						198: {
							x: 528.35,
							y: 1134.45,
							r: -2.798
						},
						199: {
							x: 517.55,
							y: 1137.25,
							r: -2.781
						},
						200: {
							x: 506.7,
							y: 1139.9,
							r: -2.763
						},
						201: {
							x: 495.8,
							y: 1142.35,
							r: -2.746
						},
						202: {
							x: 484.85,
							y: 1144.6,
							r: -2.728
						},
						203: {
							x: 473.85,
							y: 1146.65,
							r: -2.71
						},
						204: {
							x: 462.85,
							y: 1148.5,
							r: -2.693
						},
						205: {
							x: 451.75,
							y: 1150.2,
							r: -2.675
						},
						206: {
							x: 440.7,
							y: 1151.65,
							r: -2.658
						},
						207: {
							x: 429.6,
							y: 1152.95,
							r: -2.64
						},
						208: {
							x: 418.5,
							y: 1154,
							r: -2.622
						},
						209: {
							x: 407.35,
							y: 1154.9,
							r: -2.605
						},
						210: {
							x: 396.15,
							y: 1155.6,
							r: -2.587
						},
						211: {
							x: 385,
							y: 1156.1,
							r: -2.57
						},
						212: {
							x: 373.8,
							y: 1156.4,
							r: -2.552
						},
						213: {
							x: 362.65,
							y: 1156.5,
							r: -2.534
						},
						214: {
							x: 351.5,
							y: 1156.4,
							r: -2.517
						},
						215: {
							x: 340.4,
							y: 1156.1,
							r: -2.499
						},
						216: {
							x: 329.2,
							y: 1155.6,
							r: -2.482
						},
						217: {
							x: 318,
							y: 1154.95,
							r: -2.464
						},
						218: {
							x: 306.9,
							y: 1154.05,
							r: -2.446
						},
						219: {
							x: 295.75,
							y: 1152.95,
							r: -2.429
						},
						220: {
							x: 284.7,
							y: 1151.7,
							r: -2.411
						},
						221: {
							x: 273.55,
							y: 1150.25,
							r: -2.394
						},
						222: {
							x: 262.55,
							y: 1148.55,
							r: -2.376
						},
						223: {
							x: 251.5,
							y: 1146.7,
							r: -2.358
						},
						224: {
							x: 240.5,
							y: 1144.65,
							r: -2.341
						},
						225: {
							x: 229.6,
							y: 1142.4,
							r: -2.323
						},
						226: {
							x: 218.65,
							y: 1140,
							r: -2.306
						},
						227: {
							x: 207.8,
							y: 1137.35,
							r: -2.288
						},
						228: {
							x: 197,
							y: 1134.55,
							r: -2.27
						},
						229: {
							x: 186.25,
							y: 1131.55,
							r: -2.253
						},
						230: {
							x: 175.5,
							y: 1128.35,
							r: -2.235
						},
						231: {
							x: 164.85,
							y: 1124.95,
							r: -2.218
						},
						232: {
							x: 154.25,
							y: 1121.4,
							r: -2.2
						},
						233: {
							x: 143.7,
							y: 1117.6,
							r: -2.182
						},
						234: {
							x: 133.3,
							y: 1113.7,
							r: -2.165
						},
						235: {
							x: 122.9,
							y: 1109.55,
							r: -2.147
						},
						236: {
							x: 112.55,
							y: 1105.25,
							r: -2.13
						},
						237: {
							x: 102.35,
							y: 1100.75,
							r: -2.112
						},
						238: {
							x: 92.15,
							y: 1096.05,
							r: -2.094
						},
						239: {
							x: 82.15,
							y: 1091.25,
							r: -2.077
						},
						240: {
							x: 72.1,
							y: 1086.2,
							r: -2.059
						},
						241: {
							x: 62.25,
							y: 1081,
							r: -2.042
						},
						242: {
							x: 52.45,
							y: 1075.65,
							r: -2.024
						},
						243: {
							x: 42.7,
							y: 1070.1,
							r: -2.006
						},
						244: {
							x: 33.1,
							y: 1064.4,
							r: -1.989
						},
						245: {
							x: 23.6,
							y: 1058.5,
							r: -1.971
						},
						246: {
							x: 14.25,
							y: 1052.45,
							r: -1.954
						},
						247: {
							x: 4.9,
							y: 1046.25,
							r: -1.936
						},
						248: {
							x: -4.25,
							y: 1039.9,
							r: -1.918
						},
						249: {
							x: -13.3,
							y: 1033.35,
							r: -1.901
						},
						250: {
							x: -22.3,
							y: 1026.6,
							r: -1.883
						},
						251: {
							x: -31.1,
							y: 1019.8,
							r: -1.866
						},
						252: {
							x: -39.8,
							y: 1012.75,
							r: -1.848
						},
						253: {
							x: -48.4,
							y: 1005.65,
							r: -1.83
						},
						254: {
							x: -56.85,
							y: 998.3,
							r: -1.813
						},
						255: {
							x: -65.15,
							y: 990.9,
							r: -1.795
						},
						256: {
							x: -73.4,
							y: 983.25,
							r: -1.778
						},
						257: {
							x: -81.45,
							y: 975.5,
							r: -1.76
						},
						258: {
							x: -89.35,
							y: 967.65,
							r: -1.742
						},
						259: {
							x: -97.15,
							y: 959.6,
							r: -1.725
						},
						260: {
							x: -104.8,
							y: 951.45,
							r: -1.707
						},
						261: {
							x: -112.3,
							y: 943.15,
							r: -1.69
						},
						262: {
							x: -119.6,
							y: 934.75,
							r: -1.672
						},
						263: {
							x: -126.85,
							y: 926.2,
							r: -1.654
						},
						264: {
							x: -133.9,
							y: 917.5,
							r: -1.637
						},
						265: {
							x: -140.75,
							y: 908.75,
							r: -1.619
						},
						266: {
							x: -147.5,
							y: 899.8,
							r: -1.602
						},
						267: {
							x: -154.1,
							y: 890.8,
							r: -1.584
						},
						268: {
							x: -160.5,
							y: 881.6,
							r: -1.566
						},
						269: {
							x: -166.75,
							y: 872.4,
							r: -1.549
						},
						270: {
							x: -172.85,
							y: 863,
							r: -1.531
						},
						271: {
							x: -178.8,
							y: 853.5,
							r: -1.514
						},
						272: {
							x: -184.55,
							y: 843.95,
							r: -1.496
						},
						273: {
							x: -190.15,
							y: 834.25,
							r: -1.478
						},
						274: {
							x: -195.55,
							y: 824.5,
							r: -1.461
						},
						275: {
							x: -200.8,
							y: 814.6,
							r: -1.443
						},
						276: {
							x: -205.85,
							y: 804.7,
							r: -1.426
						},
						277: {
							x: -210.75,
							y: 794.6,
							r: -1.408
						},
						278: {
							x: -215.5,
							y: 784.45,
							r: -1.39
						},
						279: {
							x: -220.05,
							y: 774.3,
							r: -1.373
						},
						280: {
							x: -224.4,
							y: 763.95,
							r: -1.355
						},
						281: {
							x: -228.55,
							y: 753.65,
							r: -1.338
						},
						282: {
							x: -232.55,
							y: 743.15,
							r: -1.32
						},
						283: {
							x: -236.4,
							y: 732.65,
							r: -1.302
						},
						284: {
							x: -240,
							y: 722.1,
							r: -1.285
						},
						285: {
							x: -243.45,
							y: 711.45,
							r: -1.267
						},
						286: {
							x: -246.7,
							y: 700.8,
							r: -1.25
						},
						287: {
							x: -249.75,
							y: 690,
							r: -1.232
						},
						288: {
							x: -252.6,
							y: 679.25,
							r: -1.214
						},
						289: {
							x: -255.3,
							y: 668.35,
							r: -1.197
						},
						290: {
							x: -257.8,
							y: 657.45,
							r: -1.179
						},
						291: {
							x: -260.1,
							y: 646.55,
							r: -1.162
						},
						292: {
							x: -262.2,
							y: 635.55,
							r: -1.144
						},
						293: {
							x: -264.1,
							y: 624.55,
							r: -1.126
						},
						294: {
							x: -265.85,
							y: 613.5,
							r: -1.109
						},
						295: {
							x: -267.35,
							y: 602.45,
							r: -1.091
						},
						296: {
							x: -268.7,
							y: 591.3,
							r: -1.074
						},
						297: {
							x: -269.8,
							y: 580.2,
							r: -1.056
						},
						298: {
							x: -270.75,
							y: 569.05,
							r: -1.038
						},
						299: {
							x: -271.5,
							y: 557.9,
							r: -1.021
						},
						300: {
							x: -272.05,
							y: 546.75,
							r: -1.003
						},
						301: {
							x: -272.4,
							y: 535.55,
							r: -.986
						},
						302: {
							x: -272.55,
							y: 524.4,
							r: -.968
						},
						303: {
							x: -272.5,
							y: 513.25,
							r: -.95
						},
						304: {
							x: -272.25,
							y: 502.05,
							r: -.933
						},
						305: {
							x: -271.8,
							y: 490.95,
							r: -.915
						},
						306: {
							x: -271.15,
							y: 479.75,
							r: -.898
						},
						307: {
							x: -270.35,
							y: 468.65,
							r: -.88
						},
						308: {
							x: -269.3,
							y: 457.5,
							r: -.862
						},
						309: {
							x: -268.1,
							y: 446.4,
							r: -.845
						},
						310: {
							x: -266.65,
							y: 435.3,
							r: -.827
						},
						311: {
							x: -265.05,
							y: 424.2,
							r: -.81
						},
						312: {
							x: -263.25,
							y: 413.2,
							r: -.792
						},
						313: {
							x: -261.25,
							y: 402.2,
							r: -.774
						},
						314: {
							x: -259.05,
							y: 391.3,
							r: -.757
						},
						315: {
							x: -256.65,
							y: 380.3,
							r: -.739
						},
						316: {
							x: -254.1,
							y: 369.5,
							r: -.722
						},
						317: {
							x: -251.3,
							y: 358.65,
							r: -.704
						},
						318: {
							x: -248.35,
							y: 347.85,
							r: -.686
						},
						319: {
							x: -245.2,
							y: 337.15,
							r: -.669
						},
						320: {
							x: -241.85,
							y: 326.45,
							r: -.651
						},
						321: {
							x: -238.35,
							y: 315.9,
							r: -.634
						},
						322: {
							x: -234.6,
							y: 305.3,
							r: -.616
						},
						323: {
							x: -230.75,
							y: 294.85,
							r: -.598
						},
						324: {
							x: -226.65,
							y: 284.45,
							r: -.581
						},
						325: {
							x: -222.35,
							y: 274.1,
							r: -.563
						},
						326: {
							x: -217.95,
							y: 263.85,
							r: -.546
						},
						327: {
							x: -213.3,
							y: 253.65,
							r: -.528
						},
						328: {
							x: -208.5,
							y: 243.6,
							r: -.51
						},
						329: {
							x: -203.55,
							y: 233.55,
							r: -.493
						},
						330: {
							x: -198.4,
							y: 223.7,
							r: -.475
						},
						331: {
							x: -193.05,
							y: 213.85,
							r: -.458
						},
						332: {
							x: -187.55,
							y: 204.1,
							r: -.44
						},
						333: {
							x: -181.9,
							y: 194.45,
							r: -.422
						},
						334: {
							x: -176.05,
							y: 184.95,
							r: -.405
						},
						335: {
							x: -170.05,
							y: 175.55,
							r: -.387
						},
						336: {
							x: -163.85,
							y: 166.2,
							r: -.37
						},
						337: {
							x: -157.5,
							y: 156.95,
							r: -.352
						},
						338: {
							x: -151.05,
							y: 147.9,
							r: -.334
						},
						339: {
							x: -144.35,
							y: 138.9,
							r: -.317
						},
						340: {
							x: -137.55,
							y: 130.05,
							r: -.299
						},
						341: {
							x: -130.6,
							y: 121.3,
							r: -.282
						},
						342: {
							x: -123.5,
							y: 112.7,
							r: -.264
						},
						343: {
							x: -116.2,
							y: 104.2,
							r: -.246
						},
						344: {
							x: -108.75,
							y: 95.8,
							r: -.229
						},
						345: {
							x: -101.25,
							y: 87.6,
							r: -.211
						},
						346: {
							x: -93.5,
							y: 79.5,
							r: -.194
						},
						347: {
							x: -85.7,
							y: 71.55,
							r: -.176
						},
						348: {
							x: -77.65,
							y: 63.75,
							r: -.158
						},
						349: {
							x: -69.6,
							y: 56.05,
							r: -.141
						},
						350: {
							x: -61.3,
							y: 48.5,
							r: -.123
						},
						351: {
							x: -52.9,
							y: 41.1,
							r: -.106
						},
						352: {
							x: -44.4,
							y: 33.9,
							r: -.088
						},
						353: {
							x: -35.75,
							y: 26.8,
							r: -.07
						},
						354: {
							x: -27,
							y: 19.9,
							r: -.053
						},
						355: {
							x: -18.1,
							y: 13.1,
							r: -.035
						},
						356: {
							x: -9.1,
							y: 6.5,
							r: -.018
						},
						357: {
							x: 0,
							y: 0,
							r: 0
						}
					})
				})), e.a1_20 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_35"));
					this.addChild(s)
				})), e.Index2 = t.extend((function() {
					t.call(this, {
						duration: 139
					});
					var s = new e.a1_20,
						a = new e.a1_19,
						i = new e.a1_18,
						n = new e.a1_18,
						r = new e.a1_18,
						x = new e.a1_18,
						o = (new e.a1_24)
						.setTransform(-489.75, 77),
						l = (new e.a1_23)
						.setTransform(-553.05, -460.05),
						d = (new e.a1_22)
						.setTransform(17.3, -246.55),
						c = new e.a1_15,
						h = new e.a1_14,
						u = new e.a1_13,
						f = new e.a1_12,
						p = new e.a1_11,
						m = (new e.a1_10)
						.setTransform(691, 48),
						g = (new e.a1_9)
						.setTransform(271, 42),
						v = (new e.Btns)
						.setTransform(276.8, 972.4, .774, .575);
					this[v.name = "gameBtn"] = v;
					var w = (new e.Btns)
						.setTransform(276.8, 1090, .774, .575);
					this[w.name = "rankBtn"] = w;
					var b = (new e.Btns)
						.setTransform(276.8, 849.95, .774, .575);
					this[b.name = "lotteryBtn"] = b;
					var k = new e.Btns;
					this[k.name = "backBtn"] = k;
					var _ = new y("你的福气值：88888")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 29,
							fontWeight: "bold",
							fill: "#fff",
							leading: 2
						});
					this[_.name = "num"] = _;
					var T = new y("你的福气值：88888")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 29,
							fontWeight: "bold",
							fill: "#fff",
							leading: 2
						})
						.setAlign("center")
						.setTransform(432.5, 296.2);
					this[T.name = "num"] = T, this.addTimedChild(s)
						.addTimedChild(a, 0, 139, {
							0: {
								x: 73,
								y: 107,
								sx: 1,
								sy: 1,
								a: 0
							},
							84: {
								x: 295,
								y: 463.75,
								sx: .388,
								sy: .388
							},
							85: {
								x: 287.37,
								y: 451.462,
								sx: .409,
								sy: .409,
								a: .04
							},
							86: {
								x: 279.694,
								y: 439.182,
								sx: .43,
								sy: .43,
								a: .07
							},
							87: {
								x: 272.068,
								y: 426.851,
								sx: .451,
								sy: .451,
								a: .1
							},
							88: {
								x: 264.393,
								y: 414.57,
								sx: .472,
								sy: .472,
								a: .14
							},
							89: {
								x: 256.767,
								y: 402.29,
								sx: .493,
								sy: .493,
								a: .17
							},
							90: {
								x: 249.091,
								y: 389.959,
								sx: .514,
								sy: .514,
								a: .21
							},
							91: {
								x: 241.416,
								y: 377.678,
								sx: .535,
								sy: .535,
								a: .24
							},
							92: {
								x: 233.79,
								y: 365.398,
								sx: .557,
								sy: .557,
								a: .28
							},
							93: {
								x: 226.114,
								y: 353.067,
								sx: .578,
								sy: .578,
								a: .31
							},
							94: {
								x: 218.488,
								y: 340.786,
								sx: .599,
								sy: .599,
								a: .34
							},
							95: {
								x: 210.813,
								y: 328.456,
								sx: .62,
								sy: .62,
								a: .38
							},
							96: {
								x: 203.187,
								y: 316.175,
								sx: .641,
								sy: .641,
								a: .41
							},
							97: {
								x: 195.511,
								y: 303.894,
								sx: .662,
								sy: .662,
								a: .45
							},
							98: {
								x: 187.831,
								y: 291.557,
								sx: .683,
								sy: .683,
								a: .48
							},
							99: {
								x: 180.205,
								y: 279.276,
								sx: .704,
								sy: .704,
								a: .52
							},
							100: {
								x: 172.53,
								y: 266.945,
								sx: .725,
								sy: .725,
								a: .55
							},
							101: {
								x: 164.904,
								y: 254.665,
								sx: .747,
								sy: .747,
								a: .59
							},
							102: {
								x: 157.228,
								y: 242.384,
								sx: .768,
								sy: .768,
								a: .62
							},
							103: {
								x: 149.553,
								y: 230.053,
								sx: .789,
								sy: .789,
								a: .66
							},
							104: {
								x: 141.927,
								y: 217.773,
								sx: .81,
								sy: .81,
								a: .69
							},
							105: {
								x: 134.251,
								y: 205.492,
								sx: .831,
								sy: .831,
								a: .72
							},
							106: {
								x: 126.625,
								y: 193.161,
								sx: .852,
								sy: .852,
								a: .76
							},
							107: {
								x: 118.95,
								y: 180.881,
								sx: .873,
								sy: .873,
								a: .79
							},
							108: {
								x: 111.274,
								y: 168.55,
								sx: .894,
								sy: .894,
								a: .83
							},
							109: {
								x: 103.648,
								y: 156.269,
								sx: .916,
								sy: .916,
								a: .86
							},
							110: {
								x: 95.973,
								y: 143.989,
								sx: .937,
								sy: .937,
								a: .9
							},
							111: {
								x: 88.347,
								y: 131.658,
								sx: .958,
								sy: .958,
								a: .93
							},
							112: {
								x: 80.671,
								y: 119.377,
								sx: .979,
								sy: .979,
								a: .96
							},
							113: {
								x: 73,
								y: 107,
								sx: 1,
								sy: 1,
								a: 1
							}
						})
						.addTimedChild(i, 0, 139, {
							0: {
								x: 93,
								y: 77,
								a: 0
							},
							121: {
								a: 1
							}
						})
						.addTimedChild(n, 0, 121, {
							0: {
								x: 93,
								y: 77,
								a: 0
							}
						})
						.addTimedChild(r, 0, 121, {
							0: {
								x: 93,
								y: 77,
								a: 0
							}
						})
						.addTimedChild(x, 0, 121, {
							0: {
								x: 93,
								y: 77,
								a: 0
							}
						})
						.addTimedChild(o, 121, 18)
						.addTimedChild(l, 121, 18)
						.addTimedChild(d, 121, 18)
						.addTimedChild(c, 0, 139, {
							0: {
								x: 208,
								y: 1090,
								a: 0
							},
							88: {
								a: .04
							},
							89: {
								a: .07
							},
							90: {
								a: .1
							},
							91: {
								a: .14
							},
							92: {
								a: .17
							},
							93: {
								a: .21
							},
							94: {
								a: .24
							},
							95: {
								a: .28
							},
							96: {
								a: .31
							},
							97: {
								a: .34
							},
							98: {
								a: .38
							},
							99: {
								a: .41
							},
							100: {
								a: .45
							},
							101: {
								a: .48
							},
							102: {
								a: .52
							},
							103: {
								a: .55
							},
							104: {
								a: .59
							},
							105: {
								a: .62
							},
							106: {
								a: .66
							},
							107: {
								a: .69
							},
							108: {
								a: .72
							},
							109: {
								a: .76
							},
							110: {
								a: .79
							},
							111: {
								a: .83
							},
							112: {
								a: .86
							},
							113: {
								a: .9
							},
							114: {
								a: .93
							},
							115: {
								a: .96
							},
							116: {
								a: 1
							}
						})
						.addTimedChild(h, 0, 139, {
							0: {
								x: 208,
								y: 969,
								a: 0
							},
							88: {
								a: .04
							},
							89: {
								a: .07
							},
							90: {
								a: .1
							},
							91: {
								a: .14
							},
							92: {
								a: .17
							},
							93: {
								a: .21
							},
							94: {
								a: .24
							},
							95: {
								a: .28
							},
							96: {
								a: .31
							},
							97: {
								a: .34
							},
							98: {
								a: .38
							},
							99: {
								a: .41
							},
							100: {
								a: .45
							},
							101: {
								a: .48
							},
							102: {
								a: .52
							},
							103: {
								a: .55
							},
							104: {
								a: .59
							},
							105: {
								a: .62
							},
							106: {
								a: .66
							},
							107: {
								a: .69
							},
							108: {
								a: .72
							},
							109: {
								a: .76
							},
							110: {
								a: .79
							},
							111: {
								a: .83
							},
							112: {
								a: .86
							},
							113: {
								a: .9
							},
							114: {
								a: .93
							},
							115: {
								a: .96
							},
							116: {
								a: 1
							}
						})
						.addTimedChild(u, 0, 139, {
							0: {
								x: 208,
								y: 848,
								a: 0
							},
							88: {
								a: .04
							},
							89: {
								a: .07
							},
							90: {
								a: .1
							},
							91: {
								a: .14
							},
							92: {
								a: .17
							},
							93: {
								a: .21
							},
							94: {
								a: .24
							},
							95: {
								a: .28
							},
							96: {
								a: .31
							},
							97: {
								a: .34
							},
							98: {
								a: .38
							},
							99: {
								a: .41
							},
							100: {
								a: .45
							},
							101: {
								a: .48
							},
							102: {
								a: .52
							},
							103: {
								a: .55
							},
							104: {
								a: .59
							},
							105: {
								a: .62
							},
							106: {
								a: .66
							},
							107: {
								a: .69
							},
							108: {
								a: .72
							},
							109: {
								a: .76
							},
							110: {
								a: .79
							},
							111: {
								a: .83
							},
							112: {
								a: .86
							},
							113: {
								a: .9
							},
							114: {
								a: .93
							},
							115: {
								a: .96
							},
							116: {
								a: 1
							}
						})
						.addTimedChild(f, 0, 139, {
							0: {
								x: 204,
								y: 379,
								sx: 1,
								sy: 1,
								a: 0
							},
							49: {
								x: 316.8,
								y: 490.95,
								sx: .454,
								sy: .454
							},
							50: {
								x: 314.703,
								y: 488.88,
								sx: .464,
								sy: .464,
								a: .02
							},
							51: {
								x: 312.656,
								y: 486.81,
								sx: .474,
								sy: .474,
								a: .04
							},
							52: {
								x: 310.563,
								y: 484.747,
								sx: .484,
								sy: .484,
								a: .05
							},
							53: {
								x: 308.476,
								y: 482.692,
								sx: .494,
								sy: .494,
								a: .07
							},
							54: {
								x: 306.374,
								y: 480.614,
								sx: .505,
								sy: .505,
								a: .09
							},
							55: {
								x: 304.281,
								y: 478.551,
								sx: .515,
								sy: .515,
								a: .11
							},
							56: {
								x: 302.179,
								y: 476.474,
								sx: .525,
								sy: .525,
								a: .13
							},
							57: {
								x: 300.092,
								y: 474.368,
								sx: .535,
								sy: .535,
								a: .15
							},
							58: {
								x: 297.999,
								y: 472.306,
								sx: .545,
								sy: .545,
								a: .17
							},
							59: {
								x: 295.912,
								y: 470.251,
								sx: .555,
								sy: .555,
								a: .18
							},
							60: {
								x: 293.86,
								y: 468.173,
								sx: .565,
								sy: .565,
								a: .2
							},
							61: {
								x: 291.767,
								y: 466.11,
								sx: .575,
								sy: .575,
								a: .22
							},
							62: {
								x: 289.68,
								y: 464.005,
								sx: .585,
								sy: .585,
								a: .24
							},
							63: {
								x: 287.578,
								y: 461.977,
								sx: .596,
								sy: .596,
								a: .26
							},
							64: {
								x: 285.485,
								y: 459.865,
								sx: .606,
								sy: .606,
								a: .28
							},
							65: {
								x: 283.398,
								y: 457.809,
								sx: .616,
								sy: .616,
								a: .3
							},
							66: {
								x: 281.296,
								y: 455.732,
								sx: .626,
								sy: .626,
								a: .32
							},
							67: {
								x: 279.203,
								y: 453.669,
								sx: .636,
								sy: .636,
								a: .33
							},
							68: {
								x: 277.116,
								y: 451.614,
								sx: .646,
								sy: .646,
								a: .35
							},
							69: {
								x: 275.023,
								y: 449.501,
								sx: .656,
								sy: .656,
								a: .37
							},
							70: {
								x: 272.971,
								y: 447.423,
								sx: .666,
								sy: .666,
								a: .39
							},
							71: {
								x: 270.884,
								y: 445.368,
								sx: .676,
								sy: .676,
								a: .41
							},
							72: {
								x: 268.782,
								y: 443.291,
								sx: .687,
								sy: .687,
								a: .43
							},
							73: {
								x: 266.689,
								y: 441.228,
								sx: .697,
								sy: .697,
								a: .45
							},
							74: {
								x: 264.602,
								y: 439.173,
								sx: .707,
								sy: .707,
								a: .46
							},
							75: {
								x: 262.5,
								y: 437.095,
								sx: .717,
								sy: .717,
								a: .48
							},
							76: {
								x: 260.407,
								y: 435.032,
								sx: .727,
								sy: .727,
								a: .5
							},
							77: {
								x: 258.27,
								y: 432.927,
								sx: .737,
								sy: .737,
								a: .52
							},
							78: {
								x: 256.218,
								y: 430.849,
								sx: .747,
								sy: .747,
								a: .54
							},
							79: {
								x: 254.125,
								y: 428.787,
								sx: .757,
								sy: .757,
								a: .55
							},
							80: {
								x: 252.038,
								y: 426.731,
								sx: .767,
								sy: .767,
								a: .57
							},
							81: {
								x: 249.936,
								y: 424.654,
								sx: .778,
								sy: .778,
								a: .59
							},
							82: {
								x: 247.843,
								y: 422.591,
								sx: .788,
								sy: .788,
								a: .61
							},
							83: {
								x: 245.746,
								y: 420.521,
								sx: .798,
								sy: .798,
								a: .63
							},
							84: {
								x: 243.654,
								y: 418.408,
								sx: .808,
								sy: .808,
								a: .65
							},
							85: {
								x: 241.561,
								y: 416.346,
								sx: .818,
								sy: .818,
								a: .67
							},
							86: {
								x: 239.474,
								y: 414.29,
								sx: .828,
								sy: .828,
								a: .68
							},
							87: {
								x: 237.422,
								y: 412.213,
								sx: .838,
								sy: .838,
								a: .7
							},
							88: {
								x: 235.329,
								y: 410.15,
								sx: .848,
								sy: .848,
								a: .72
							},
							89: {
								x: 233.242,
								y: 408.045,
								sx: .858,
								sy: .858,
								a: .74
							},
							90: {
								x: 231.14,
								y: 406.017,
								sx: .869,
								sy: .869,
								a: .76
							},
							91: {
								x: 229.047,
								y: 403.904,
								sx: .879,
								sy: .879,
								a: .78
							},
							92: {
								x: 226.96,
								y: 401.849,
								sx: .889,
								sy: .889,
								a: .8
							},
							93: {
								x: 224.858,
								y: 399.771,
								sx: .899,
								sy: .899,
								a: .82
							},
							94: {
								x: 222.765,
								y: 397.709,
								sx: .909,
								sy: .909,
								a: .83
							},
							95: {
								x: 220.678,
								y: 395.654,
								sx: .919,
								sy: .919,
								a: .85
							},
							96: {
								x: 218.635,
								y: 393.541,
								sx: .929,
								sy: .929,
								a: .87
							},
							97: {
								x: 216.533,
								y: 391.463,
								sx: .939,
								sy: .939,
								a: .89
							},
							98: {
								x: 214.446,
								y: 389.408,
								sx: .949,
								sy: .949,
								a: .91
							},
							99: {
								x: 212.344,
								y: 387.33,
								sx: .96,
								sy: .96,
								a: .93
							},
							100: {
								x: 210.251,
								y: 385.268,
								sx: .97,
								sy: .97,
								a: .95
							},
							101: {
								x: 208.164,
								y: 383.212,
								sx: .98,
								sy: .98,
								a: .96
							},
							102: {
								x: 206.062,
								y: 381.135,
								sx: .99,
								sy: .99,
								a: .98
							},
							103: {
								x: 204,
								y: 379,
								sx: 1,
								sy: 1,
								a: 1
							}
						})
						.addTimedChild(p, 0, 139, {
							0: {
								x: 54.85,
								y: 89.6,
								sx: 1.849,
								sy: 1.849,
								a: 0
							},
							1: {
								x: 58.614,
								y: 90.875,
								sx: 1.831,
								sy: 1.831,
								a: .02
							},
							2: {
								x: 62.28,
								y: 92.151,
								sx: 1.813,
								sy: 1.813,
								a: .04
							},
							3: {
								x: 65.944,
								y: 93.426,
								sx: 1.795,
								sy: 1.795,
								a: .07
							},
							4: {
								x: 69.659,
								y: 94.653,
								sx: 1.777,
								sy: 1.777,
								a: .09
							},
							5: {
								x: 73.324,
								y: 95.929,
								sx: 1.759,
								sy: 1.759,
								a: .11
							},
							6: {
								x: 76.989,
								y: 97.204,
								sx: 1.741,
								sy: 1.741,
								a: .13
							},
							7: {
								x: 80.703,
								y: 98.479,
								sx: 1.723,
								sy: 1.723,
								a: .15
							},
							8: {
								x: 84.368,
								y: 99.705,
								sx: 1.705,
								sy: 1.705,
								a: .18
							},
							9: {
								x: 88.033,
								y: 100.98,
								sx: 1.687,
								sy: 1.687,
								a: .2
							},
							10: {
								x: 91.698,
								y: 102.257,
								sx: 1.669,
								sy: 1.669,
								a: .22
							},
							11: {
								x: 95.412,
								y: 103.532,
								sx: 1.651,
								sy: 1.651,
								a: .24
							},
							12: {
								x: 99.078,
								y: 104.76,
								sx: 1.633,
								sy: 1.633,
								a: .26
							},
							13: {
								x: 102.742,
								y: 106.035,
								sx: 1.614,
								sy: 1.614,
								a: .28
							},
							14: {
								x: 106.458,
								y: 107.311,
								sx: 1.596,
								sy: 1.596,
								a: .3
							},
							15: {
								x: 110.122,
								y: 108.586,
								sx: 1.578,
								sy: 1.578,
								a: .32
							},
							16: {
								x: 113.786,
								y: 109.811,
								sx: 1.56,
								sy: 1.56,
								a: .35
							},
							17: {
								x: 117.502,
								y: 111.087,
								sx: 1.542,
								sy: 1.542,
								a: .37
							},
							18: {
								x: 121.166,
								y: 112.362,
								sx: 1.524,
								sy: 1.524,
								a: .39
							},
							19: {
								x: 124.831,
								y: 113.639,
								sx: 1.506,
								sy: 1.506,
								a: .41
							},
							20: {
								x: 128.546,
								y: 114.865,
								sx: 1.488,
								sy: 1.488,
								a: .43
							},
							21: {
								x: 132.211,
								y: 116.14,
								sx: 1.47,
								sy: 1.47,
								a: .46
							},
							22: {
								x: 135.876,
								y: 117.416,
								sx: 1.452,
								sy: 1.452,
								a: .48
							},
							23: {
								x: 139.641,
								y: 118.743,
								sx: 1.434,
								sy: 1.434,
								a: .5
							},
							24: {
								x: 143.305,
								y: 120.018,
								sx: 1.416,
								sy: 1.416,
								a: .52
							},
							25: {
								x: 146.971,
								y: 121.244,
								sx: 1.398,
								sy: 1.398,
								a: .54
							},
							26: {
								x: 150.685,
								y: 122.519,
								sx: 1.38,
								sy: 1.38,
								a: .57
							},
							27: {
								x: 154.35,
								y: 123.796,
								sx: 1.362,
								sy: 1.362,
								a: .59
							},
							28: {
								x: 158.015,
								y: 125.072,
								sx: 1.344,
								sy: 1.344,
								a: .61
							},
							29: {
								x: 161.73,
								y: 126.297,
								sx: 1.326,
								sy: 1.326,
								a: .63
							},
							30: {
								x: 165.395,
								y: 127.573,
								sx: 1.308,
								sy: 1.308,
								a: .65
							},
							31: {
								x: 169.059,
								y: 128.848,
								sx: 1.29,
								sy: 1.29,
								a: .68
							},
							32: {
								x: 172.774,
								y: 130.125,
								sx: 1.272,
								sy: 1.272,
								a: .7
							},
							33: {
								x: 176.439,
								y: 131.35,
								sx: 1.254,
								sy: 1.254,
								a: .72
							},
							34: {
								x: 180.103,
								y: 132.625,
								sx: 1.236,
								sy: 1.236,
								a: .74
							},
							35: {
								x: 183.769,
								y: 133.902,
								sx: 1.218,
								sy: 1.218,
								a: .76
							},
							36: {
								x: 187.484,
								y: 135.177,
								sx: 1.2,
								sy: 1.2,
								a: .78
							},
							37: {
								x: 191.149,
								y: 136.404,
								sx: 1.181,
								sy: 1.181,
								a: .8
							},
							38: {
								x: 194.813,
								y: 137.679,
								sx: 1.163,
								sy: 1.163,
								a: .82
							},
							39: {
								x: 198.528,
								y: 138.955,
								sx: 1.145,
								sy: 1.145,
								a: .85
							},
							40: {
								x: 202.193,
								y: 140.23,
								sx: 1.127,
								sy: 1.127,
								a: .87
							},
							41: {
								x: 205.858,
								y: 141.456,
								sx: 1.109,
								sy: 1.109,
								a: .89
							},
							42: {
								x: 209.572,
								y: 142.731,
								sx: 1.091,
								sy: 1.091,
								a: .91
							},
							43: {
								x: 213.237,
								y: 144.008,
								sx: 1.073,
								sy: 1.073,
								a: .93
							},
							44: {
								x: 216.902,
								y: 145.283,
								sx: 1.055,
								sy: 1.055,
								a: .96
							},
							45: {
								x: 220.618,
								y: 146.511,
								sx: 1.037,
								sy: 1.037,
								a: .98
							},
							46: {
								x: 224.15,
								y: 147.7,
								sx: 1.019,
								sy: 1.019,
								a: 1
							},
							47: {
								x: 223.044,
								y: 147.337,
								sx: 1.025,
								sy: 1.025
							},
							48: {
								x: 221.894,
								y: 146.928,
								sx: 1.03,
								sy: 1.03
							},
							49: {
								x: 220.788,
								y: 146.564,
								sx: 1.035,
								sy: 1.035
							},
							50: {
								x: 219.685,
								y: 146.203,
								sx: 1.041,
								sy: 1.041
							},
							51: {
								x: 218.482,
								y: 145.742,
								sx: 1.046,
								sy: 1.046
							},
							52: {
								x: 217.383,
								y: 145.383,
								sx: 1.052,
								sy: 1.052
							},
							53: {
								x: 216.226,
								y: 144.969,
								sx: 1.057,
								sy: 1.057
							},
							54: {
								x: 215.2,
								y: 144.6,
								sx: 1.063,
								sy: 1.063
							},
							55: {
								x: 216.526,
								y: 145.044,
								sx: 1.056,
								sy: 1.056
							},
							56: {
								x: 217.808,
								y: 145.492,
								sx: 1.05,
								sy: 1.05
							},
							57: {
								x: 219.091,
								y: 145.891,
								sx: 1.044,
								sy: 1.044
							},
							58: {
								x: 220.37,
								y: 146.287,
								sx: 1.038,
								sy: 1.038
							},
							59: {
								x: 221.649,
								y: 146.733,
								sx: 1.031,
								sy: 1.031
							},
							60: {
								x: 222.882,
								y: 147.181,
								sx: 1.025,
								sy: 1.025
							},
							61: {
								x: 224.161,
								y: 147.627,
								sx: 1.019,
								sy: 1.019
							},
							62: {
								x: 225.444,
								y: 148.026,
								sx: 1.013,
								sy: 1.013
							},
							63: {
								x: 226.723,
								y: 148.472,
								sx: 1.006,
								sy: 1.006
							},
							64: {
								x: 228,
								y: 149,
								sx: 1,
								sy: 1
							}
						})
						.addTimedChild(m)
						.addTimedChild(g)
						.addTimedChild(v)
						.addTimedChild(w)
						.addTimedChild(b)
						.addTimedChild(k, 0, 139, {
							0: {
								x: 678.9,
								y: 39.45,
								sx: .199,
								sy: .484
							}
						})
						.addTimedChild(_, 0, 138, {
							0: {
								x: 309.7,
								y: -52.25
							}
						})
						.addTimedChild(T, 138, 1)
				})), e.Fail = a.extend((function() {
					a.call(this);
					var s = new i(n("fail")),
						t = (new e.Btns)
						.setTransform(685.7, 40.95, .148, .353);
					this[t.name = "backBtn"] = t;
					var r = (new e.Btns)
						.setTransform(279.85, 923.35, .675, .425);
					this[r.name = "againBtn"] = r;
					var x = new y("本局获得福气值：2200")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 25,
							fill: "#f5e78c",
							leading: 2
						})
						.setAlign("center")
						.setTransform(435.025, 423);
					this[x.name = "num"] = x, this.addChild(s, t, r, x)
				})), e.NoAward = a.extend((function() {
					a.call(this);
					var s = new i(n("noAward")),
						t = (new e.Btns)
						.setTransform(685.7, 40.95, .148, .353);
					this[t.name = "backBtn"] = t, this.addChild(s, t)
				})), e.Award2 = a.extend((function() {
					a.call(this);
					var s = new i(n("award2")),
						t = (new e.Btns)
						.setTransform(685.7, 40.95, .148, .353);
					this[t.name = "backBtn"] = t;
					var r = (new e.Btns)
						.setTransform(279.85, 879.7, .675, .425);
					this[r.name = "sureBtn"] = r;
					var x = new y("周边礼品")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 39,
							fontWeight: "bold",
							fill: "#cf0e00",
							leading: 2
						})
						.setAlign("center")
						.setTransform(433, 565.85);
					this[x.name = "awardName"] = x, this.addChild(s, t, r, x)
				})), e.Award1 = a.extend((function() {
					a.call(this);
					var s = new i(n("award")),
						t = (new e.Btns)
						.setTransform(685.7, 40.95, .148, .353);
					this[t.name = "backBtn"] = t;
					var r = (new e.Btns)
						.setTransform(279.85, 879.7, .675, .425);
					this[r.name = "toInfoBtn"] = r;
					var x = new y("周边礼品")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 39,
							fontWeight: "bold",
							fill: "#cf0e00",
							leading: 2
						})
						.setAlign("center")
						.setTransform(430.25, 571.25);
					this[x.name = "awardName"] = x, this.addChild(s, t, r, x)
				})), e.a1_51 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_81"));
					this.addChild(s)
				})), e.a1_26 = t.extend((function() {
					t.call(this, {
						duration: 234
					});
					var s = new e.a1_51,
						a = new e.a1_51,
						i = new e.a1_51,
						n = new e.a1_51,
						y = new e.a1_51,
						r = new e.a1_51;
					this.addTimedChild(s, 0, 234, {
							0: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 0
							},
							41: {
								a: 1
							},
							45: {
								a: 0
							},
							91: {
								a: 1
							},
							95: {
								a: 0
							},
							126: {
								a: 1
							},
							130: {
								a: 0
							},
							165: {
								a: 1
							},
							169: {
								a: 0
							},
							225: {
								a: 1
							}
						})
						.addTimedChild(a, 0, 234, {
							0: {
								x: -80.2,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 0
							},
							26: {
								x: 344.8,
								a: 1
							},
							30: {
								x: 309.395,
								y: 113.048
							},
							31: {
								x: 273.945
							},
							32: {
								x: 238.545
							},
							33: {
								x: 203.145
							},
							34: {
								x: 167.695
							},
							35: {
								x: 132.295
							},
							36: {
								x: 96.895
							},
							37: {
								x: 61.445
							},
							38: {
								x: 26.045
							},
							39: {
								x: -9.355
							},
							40: {
								x: -44.805
							},
							41: {
								x: -80.2,
								y: 113.05
							},
							45: {
								a: 0
							},
							77: {
								x: 344.8,
								a: 1
							},
							81: {
								x: 306.145,
								y: 113.048
							},
							82: {
								x: 267.495
							},
							83: {
								x: 228.895
							},
							84: {
								x: 190.245
							},
							85: {
								x: 151.595
							},
							86: {
								x: 112.995
							},
							87: {
								x: 74.345
							},
							88: {
								x: 35.695
							},
							89: {
								x: -2.955
							},
							90: {
								x: -41.555
							},
							91: {
								x: -80.2,
								y: 113.05
							},
							95: {
								a: 0
							},
							115: {
								x: 344.8,
								a: 1
							},
							119: {
								x: 291.695,
								y: 113.048
							},
							120: {
								x: 238.545
							},
							121: {
								x: 185.395
							},
							122: {
								x: 132.295
							},
							123: {
								x: 79.195
							},
							124: {
								x: 26.045
							},
							125: {
								x: -27.055
							},
							126: {
								x: -80.2,
								y: 113.05
							},
							130: {
								a: 0
							},
							150: {
								x: 344.8,
								a: 1
							},
							154: {
								x: 309.395,
								y: 113.048
							},
							155: {
								x: 273.945
							},
							156: {
								x: 238.545
							},
							157: {
								x: 203.145
							},
							158: {
								x: 167.695
							},
							159: {
								x: 132.295
							},
							160: {
								x: 96.895
							},
							161: {
								x: 61.445
							},
							162: {
								x: 26.045
							},
							163: {
								x: -9.355
							},
							164: {
								x: -44.805
							},
							165: {
								x: -80.2,
								y: 113.05
							},
							169: {
								a: 0
							},
							202: {
								x: 344.8,
								a: 1
							},
							206: {
								x: 323.545,
								y: 113.048
							},
							207: {
								x: 302.295
							},
							208: {
								x: 281.045
							},
							209: {
								x: 259.795
							},
							210: {
								x: 238.545
							},
							211: {
								x: 217.295
							},
							212: {
								x: 196.045
							},
							213: {
								x: 174.795
							},
							214: {
								x: 153.545
							},
							215: {
								x: 132.295
							},
							216: {
								x: 111.045
							},
							217: {
								x: 89.795
							},
							218: {
								x: 68.545
							},
							219: {
								x: 47.295
							},
							220: {
								x: 26.045
							},
							221: {
								x: 4.795
							},
							222: {
								x: -16.455
							},
							223: {
								x: -37.705
							},
							224: {
								x: -58.955
							},
							225: {
								x: -80.2,
								y: 113.05
							}
						})
						.addTimedChild(i, 0, 234, {
							0: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1,
								a: 0
							},
							11: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							15: {
								x: 309.395,
								y: 113.048
							},
							16: {
								x: 273.945
							},
							17: {
								x: 238.545
							},
							18: {
								x: 203.145
							},
							19: {
								x: 167.695
							},
							20: {
								x: 132.295
							},
							21: {
								x: 96.895
							},
							22: {
								x: 61.445
							},
							23: {
								x: 26.045
							},
							24: {
								x: -9.355
							},
							25: {
								x: -44.805
							},
							26: {
								x: -80.2,
								y: 113.05
							},
							30: {
								x: -73.409,
								y: 103.622,
								sx: .654,
								sy: .654
							},
							31: {
								x: -66.62,
								y: 94.245,
								sx: .685,
								sy: .685
							},
							32: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							33: {
								x: -53.14,
								y: 75.393,
								sx: .748,
								sy: .748
							},
							34: {
								x: -46.401,
								y: 65.966,
								sx: .78,
								sy: .78
							},
							35: {
								x: -39.611,
								y: 56.49,
								sx: .811,
								sy: .811
							},
							36: {
								x: -32.822,
								y: 47.113,
								sx: .843,
								sy: .843
							},
							37: {
								x: -26.082,
								y: 37.687,
								sx: .874,
								sy: .874
							},
							38: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							39: {
								x: -12.603,
								y: 18.834,
								sx: .937,
								sy: .937
							},
							40: {
								x: -5.813,
								y: 9.408,
								sx: .969,
								sy: .969
							},
							41: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							45: {
								a: 0
							},
							59: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							63: {
								x: 316.445,
								y: 113.048
							},
							64: {
								x: 288.145
							},
							65: {
								x: 259.795
							},
							66: {
								x: 231.445
							},
							67: {
								x: 203.145
							},
							68: {
								x: 174.795
							},
							69: {
								x: 146.445
							},
							70: {
								x: 118.145
							},
							71: {
								x: 89.795
							},
							72: {
								x: 61.445
							},
							73: {
								x: 33.145
							},
							74: {
								x: 4.795
							},
							75: {
								x: -23.555
							},
							76: {
								x: -51.855
							},
							77: {
								x: -80.2,
								y: 113.05
							},
							81: {
								x: -72.829,
								y: 102.793,
								sx: .656,
								sy: .656
							},
							82: {
								x: -65.408,
								y: 92.536,
								sx: .691,
								sy: .691
							},
							83: {
								x: -58.038,
								y: 82.23,
								sx: .725,
								sy: .725
							},
							84: {
								x: -50.716,
								y: 71.973,
								sx: .759,
								sy: .759
							},
							85: {
								x: -43.296,
								y: 61.717,
								sx: .794,
								sy: .794
							},
							86: {
								x: -35.926,
								y: 51.362,
								sx: .828,
								sy: .828
							},
							87: {
								x: -28.506,
								y: 41.106,
								sx: .863,
								sy: .863
							},
							88: {
								x: -21.185,
								y: 30.849,
								sx: .897,
								sy: .897
							},
							89: {
								x: -13.815,
								y: 20.544,
								sx: .931,
								sy: .931
							},
							90: {
								x: -6.393,
								y: 10.285,
								sx: .966,
								sy: .966
							},
							91: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							95: {
								a: 0
							},
							104: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							108: {
								x: 291.695,
								y: 113.048
							},
							109: {
								x: 238.545
							},
							110: {
								x: 185.395
							},
							111: {
								x: 132.295
							},
							112: {
								x: 79.195
							},
							113: {
								x: 26.045
							},
							114: {
								x: -27.055
							},
							115: {
								x: -80.2,
								y: 113.05
							},
							119: {
								x: -70.039,
								y: 98.934,
								sx: .669,
								sy: .669
							},
							120: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							121: {
								x: -49.721,
								y: 70.704,
								sx: .764,
								sy: .764
							},
							122: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							123: {
								x: -29.502,
								y: 42.375,
								sx: .858,
								sy: .858
							},
							124: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							125: {
								x: -9.183,
								y: 14.146,
								sx: .953,
								sy: .953
							},
							126: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							130: {
								a: 0
							},
							138: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							142: {
								x: 297.595,
								y: 113.048
							},
							143: {
								x: 250.345
							},
							144: {
								x: 203.145
							},
							145: {
								x: 155.895
							},
							146: {
								x: 108.695
							},
							147: {
								x: 61.445
							},
							148: {
								x: 14.245
							},
							149: {
								x: -33.005
							},
							150: {
								x: -80.2,
								y: 113.05
							},
							154: {
								x: -73.409,
								y: 103.622,
								sx: .654,
								sy: .654
							},
							155: {
								x: -66.62,
								y: 94.245,
								sx: .685,
								sy: .685
							},
							156: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							157: {
								x: -53.14,
								y: 75.393,
								sx: .748,
								sy: .748
							},
							158: {
								x: -46.401,
								y: 65.966,
								sx: .78,
								sy: .78
							},
							159: {
								x: -39.611,
								y: 56.49,
								sx: .811,
								sy: .811
							},
							160: {
								x: -32.822,
								y: 47.113,
								sx: .843,
								sy: .843
							},
							161: {
								x: -26.082,
								y: 37.687,
								sx: .874,
								sy: .874
							},
							162: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							163: {
								x: -12.603,
								y: 18.834,
								sx: .937,
								sy: .937
							},
							164: {
								x: -5.813,
								y: 9.408,
								sx: .969,
								sy: .969
							},
							165: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							169: {
								a: 0
							},
							183: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							187: {
								x: 318.245,
								y: 113.048
							},
							188: {
								x: 291.695
							},
							189: {
								x: 265.095
							},
							190: {
								x: 238.545
							},
							191: {
								x: 211.995
							},
							192: {
								x: 185.395
							},
							193: {
								x: 158.845
							},
							194: {
								x: 132.295
							},
							195: {
								x: 105.745
							},
							196: {
								x: 79.195
							},
							197: {
								x: 52.595
							},
							198: {
								x: 26.045
							},
							199: {
								x: -.505
							},
							200: {
								x: -27.105
							},
							201: {
								x: -53.655
							},
							202: {
								x: -80.2,
								y: 113.05
							},
							206: {
								x: -76.134,
								y: 107.431,
								sx: .641,
								sy: .641
							},
							207: {
								x: -72.072,
								y: 101.767,
								sx: .66,
								sy: .66
							},
							208: {
								x: -68.007,
								y: 96.1,
								sx: .679,
								sy: .679
							},
							209: {
								x: -63.945,
								y: 90.436,
								sx: .698,
								sy: .698
							},
							210: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							211: {
								x: -55.815,
								y: 79.152,
								sx: .735,
								sy: .735
							},
							212: {
								x: -51.803,
								y: 73.488,
								sx: .754,
								sy: .754
							},
							213: {
								x: -47.738,
								y: 67.871,
								sx: .773,
								sy: .773
							},
							214: {
								x: -43.676,
								y: 62.207,
								sx: .792,
								sy: .792
							},
							215: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							216: {
								x: -35.547,
								y: 50.872,
								sx: .83,
								sy: .83
							},
							217: {
								x: -31.484,
								y: 45.209,
								sx: .849,
								sy: .849
							},
							218: {
								x: -27.42,
								y: 39.541,
								sx: .868,
								sy: .868
							},
							219: {
								x: -23.407,
								y: 33.928,
								sx: .887,
								sy: .887
							},
							220: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							221: {
								x: -15.278,
								y: 22.593,
								sx: .924,
								sy: .924
							},
							222: {
								x: -11.216,
								y: 16.979,
								sx: .943,
								sy: .943
							},
							223: {
								x: -7.151,
								y: 11.312,
								sx: .962,
								sy: .962
							},
							224: {
								x: -3.087,
								y: 5.647,
								sx: .981,
								sy: .981
							},
							225: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							}
						})
						.addTimedChild(n, 0, 234, {
							0: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							1: {
								x: 306.145,
								y: 113.048
							},
							2: {
								x: 267.495
							},
							3: {
								x: 228.895
							},
							4: {
								x: 190.245
							},
							5: {
								x: 151.595
							},
							6: {
								x: 112.995
							},
							7: {
								x: 74.345
							},
							8: {
								x: 35.695
							},
							9: {
								x: -2.955
							},
							10: {
								x: -41.555
							},
							11: {
								x: -80.2,
								y: 113.05
							},
							15: {
								x: -73.409,
								y: 103.622,
								sx: .654,
								sy: .654
							},
							16: {
								x: -66.62,
								y: 94.245,
								sx: .685,
								sy: .685
							},
							17: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							18: {
								x: -53.14,
								y: 75.393,
								sx: .748,
								sy: .748
							},
							19: {
								x: -46.401,
								y: 65.966,
								sx: .78,
								sy: .78
							},
							20: {
								x: -39.611,
								y: 56.49,
								sx: .811,
								sy: .811
							},
							21: {
								x: -32.822,
								y: 47.113,
								sx: .843,
								sy: .843
							},
							22: {
								x: -26.082,
								y: 37.687,
								sx: .874,
								sy: .874
							},
							23: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							24: {
								x: -12.603,
								y: 18.834,
								sx: .937,
								sy: .937
							},
							25: {
								x: -5.813,
								y: 9.408,
								sx: .969,
								sy: .969
							},
							26: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							30: {
								x: 29.669,
								y: 9.45,
								sx: .969,
								sy: .969
							},
							31: {
								x: 58.337,
								y: 18.85,
								sx: .937,
								sy: .937
							},
							32: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							33: {
								x: 115.624,
								y: 37.7,
								sx: .874,
								sy: .874
							},
							34: {
								x: 144.293,
								y: 47.1,
								sx: .843,
								sy: .843
							},
							35: {
								x: 172.961,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							36: {
								x: 201.63,
								y: 66,
								sx: .78,
								sy: .78
							},
							37: {
								x: 230.248,
								y: 75.4,
								sx: .748,
								sy: .748
							},
							38: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							39: {
								x: 287.585,
								y: 94.25,
								sx: .685,
								sy: .685
							},
							40: {
								x: 316.204,
								y: 103.65,
								sx: .654,
								sy: .654
							},
							41: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							42: {
								a: 0
							},
							45: {
								a: 1
							},
							46: {
								x: 314.445,
								y: 113.048
							},
							47: {
								x: 284.095
							},
							48: {
								x: 253.745
							},
							49: {
								x: 223.345
							},
							50: {
								x: 192.995
							},
							51: {
								x: 162.645
							},
							52: {
								x: 132.295
							},
							53: {
								x: 101.945
							},
							54: {
								x: 71.595
							},
							55: {
								x: 41.245
							},
							56: {
								x: 10.845
							},
							57: {
								x: -19.505
							},
							58: {
								x: -49.855
							},
							59: {
								x: -80.2,
								y: 113.05
							},
							63: {
								x: -74.797,
								y: 105.526,
								sx: .647,
								sy: .647
							},
							64: {
								x: -69.394,
								y: 98.005,
								sx: .672,
								sy: .672
							},
							65: {
								x: -63.945,
								y: 90.436,
								sx: .698,
								sy: .698
							},
							66: {
								x: -58.543,
								y: 82.914,
								sx: .723,
								sy: .723
							},
							67: {
								x: -53.14,
								y: 75.393,
								sx: .748,
								sy: .748
							},
							68: {
								x: -47.738,
								y: 67.871,
								sx: .773,
								sy: .773
							},
							69: {
								x: -42.336,
								y: 60.349,
								sx: .798,
								sy: .798
							},
							70: {
								x: -36.886,
								y: 52.731,
								sx: .824,
								sy: .824
							},
							71: {
								x: -31.484,
								y: 45.209,
								sx: .849,
								sy: .849
							},
							72: {
								x: -26.082,
								y: 37.687,
								sx: .874,
								sy: .874
							},
							73: {
								x: -20.68,
								y: 30.165,
								sx: .899,
								sy: .899
							},
							74: {
								x: -15.278,
								y: 22.593,
								sx: .924,
								sy: .924
							},
							75: {
								x: -9.827,
								y: 15.073,
								sx: .95,
								sy: .95
							},
							76: {
								x: -4.425,
								y: 7.551,
								sx: .975,
								sy: .975
							},
							77: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							81: {
								x: 32.266,
								y: 10.3,
								sx: .966,
								sy: .966
							},
							82: {
								x: 63.531,
								y: 20.55,
								sx: .931,
								sy: .931
							},
							83: {
								x: 94.797,
								y: 30.85,
								sx: .897,
								sy: .897
							},
							84: {
								x: 126.013,
								y: 41.1,
								sx: .863,
								sy: .863
							},
							85: {
								x: 157.328,
								y: 51.4,
								sx: .828,
								sy: .828
							},
							86: {
								x: 188.544,
								y: 61.7,
								sx: .794,
								sy: .794
							},
							87: {
								x: 219.859,
								y: 72,
								sx: .759,
								sy: .759
							},
							88: {
								x: 251.075,
								y: 82.25,
								sx: .725,
								sy: .725
							},
							89: {
								x: 282.341,
								y: 92.55,
								sx: .691,
								sy: .691
							},
							90: {
								x: 313.606,
								y: 102.8,
								sx: .656,
								sy: .656
							},
							91: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							92: {
								a: 0
							},
							95: {
								a: 1
							},
							96: {
								x: 297.595,
								y: 113.048
							},
							97: {
								x: 250.345
							},
							98: {
								x: 203.145
							},
							99: {
								x: 155.895
							},
							100: {
								x: 108.695
							},
							101: {
								x: 61.445
							},
							102: {
								x: 14.245
							},
							103: {
								x: -33.005
							},
							104: {
								x: -80.2,
								y: 113.05
							},
							108: {
								x: -70.039,
								y: 98.934,
								sx: .669,
								sy: .669
							},
							109: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							110: {
								x: -49.721,
								y: 70.704,
								sx: .764,
								sy: .764
							},
							111: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							112: {
								x: -29.502,
								y: 42.375,
								sx: .858,
								sy: .858
							},
							113: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							114: {
								x: -9.183,
								y: 14.146,
								sx: .953,
								sy: .953
							},
							115: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							119: {
								x: 44.003,
								y: 14.15,
								sx: .953,
								sy: .953
							},
							120: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							121: {
								x: 129.958,
								y: 42.4,
								sx: .858,
								sy: .858
							},
							122: {
								x: 172.911,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							123: {
								x: 215.914,
								y: 70.7,
								sx: .764,
								sy: .764
							},
							124: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							125: {
								x: 301.869,
								y: 98.95,
								sx: .669,
								sy: .669
							},
							126: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							127: {
								a: 0
							},
							130: {
								a: 1
							},
							131: {
								x: 291.695,
								y: 113.048
							},
							132: {
								x: 238.545
							},
							133: {
								x: 185.395
							},
							134: {
								x: 132.295
							},
							135: {
								x: 79.195
							},
							136: {
								x: 26.045
							},
							137: {
								x: -27.055
							},
							138: {
								x: -80.2,
								y: 113.05
							},
							142: {
								x: -71.163,
								y: 100.53,
								sx: .664,
								sy: .664
							},
							143: {
								x: -62.127,
								y: 87.961,
								sx: .706,
								sy: .706
							},
							144: {
								x: -53.14,
								y: 75.393,
								sx: .748,
								sy: .748
							},
							145: {
								x: -44.154,
								y: 62.824,
								sx: .79,
								sy: .79
							},
							146: {
								x: -35.068,
								y: 50.255,
								sx: .832,
								sy: .832
							},
							147: {
								x: -26.082,
								y: 37.687,
								sx: .874,
								sy: .874
							},
							148: {
								x: -17.096,
								y: 25.118,
								sx: .916,
								sy: .916
							},
							149: {
								x: -8.06,
								y: 12.55,
								sx: .958,
								sy: .958
							},
							150: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							154: {
								x: 29.669,
								y: 9.45,
								sx: .969,
								sy: .969
							},
							155: {
								x: 58.337,
								y: 18.85,
								sx: .937,
								sy: .937
							},
							156: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							157: {
								x: 115.624,
								y: 37.7,
								sx: .874,
								sy: .874
							},
							158: {
								x: 144.293,
								y: 47.1,
								sx: .843,
								sy: .843
							},
							159: {
								x: 172.961,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							160: {
								x: 201.63,
								y: 66,
								sx: .78,
								sy: .78
							},
							161: {
								x: 230.248,
								y: 75.4,
								sx: .748,
								sy: .748
							},
							162: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							163: {
								x: 287.585,
								y: 94.25,
								sx: .685,
								sy: .685
							},
							164: {
								x: 316.204,
								y: 103.65,
								sx: .654,
								sy: .654
							},
							165: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							166: {
								a: 0
							},
							169: {
								a: 1
							},
							170: {
								x: 314.445,
								y: 113.048
							},
							171: {
								x: 284.095
							},
							172: {
								x: 253.745
							},
							173: {
								x: 223.345
							},
							174: {
								x: 192.995
							},
							175: {
								x: 162.645
							},
							176: {
								x: 132.295
							},
							177: {
								x: 101.945
							},
							178: {
								x: 71.595
							},
							179: {
								x: 41.245
							},
							180: {
								x: 10.845
							},
							181: {
								x: -19.505
							},
							182: {
								x: -49.855
							},
							183: {
								x: -80.2,
								y: 113.05
							},
							187: {
								x: -75.145,
								y: 105.992,
								sx: .646,
								sy: .646
							},
							188: {
								x: -70.039,
								y: 98.934,
								sx: .669,
								sy: .669
							},
							189: {
								x: -64.985,
								y: 91.877,
								sx: .693,
								sy: .693
							},
							190: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							191: {
								x: -54.826,
								y: 77.763,
								sx: .74,
								sy: .74
							},
							192: {
								x: -49.721,
								y: 70.704,
								sx: .764,
								sy: .764
							},
							193: {
								x: -44.665,
								y: 63.646,
								sx: .787,
								sy: .787
							},
							194: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							195: {
								x: -34.556,
								y: 49.432,
								sx: .835,
								sy: .835
							},
							196: {
								x: -29.502,
								y: 42.375,
								sx: .858,
								sy: .858
							},
							197: {
								x: -24.397,
								y: 35.317,
								sx: .882,
								sy: .882
							},
							198: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							199: {
								x: -14.237,
								y: 21.202,
								sx: .929,
								sy: .929
							},
							200: {
								x: -9.183,
								y: 14.146,
								sx: .953,
								sy: .953
							},
							201: {
								x: -4.078,
								y: 7.088,
								sx: .976,
								sy: .976
							},
							202: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							206: {
								x: 18.231,
								y: 5.65,
								sx: .981,
								sy: .981
							},
							207: {
								x: 35.412,
								y: 11.35,
								sx: .962,
								sy: .962
							},
							208: {
								x: 52.643,
								y: 16.95,
								sx: .943,
								sy: .943
							},
							209: {
								x: 69.774,
								y: 22.65,
								sx: .924,
								sy: .924
							},
							210: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							211: {
								x: 104.187,
								y: 33.9,
								sx: .887,
								sy: .887
							},
							212: {
								x: 121.368,
								y: 39.6,
								sx: .868,
								sy: .868
							},
							213: {
								x: 138.549,
								y: 45.2,
								sx: .849,
								sy: .849
							},
							214: {
								x: 155.78,
								y: 50.9,
								sx: .83,
								sy: .83
							},
							215: {
								x: 172.961,
								y: 56.55,
								sx: .811,
								sy: .811
							},
							216: {
								x: 190.142,
								y: 62.2,
								sx: .792,
								sy: .792
							},
							217: {
								x: 207.323,
								y: 67.9,
								sx: .773,
								sy: .773
							},
							218: {
								x: 224.504,
								y: 73.5,
								sx: .754,
								sy: .754
							},
							219: {
								x: 241.735,
								y: 79.2,
								sx: .735,
								sy: .735
							},
							220: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							221: {
								x: 276.098,
								y: 90.45,
								sx: .698,
								sy: .698
							},
							222: {
								x: 293.279,
								y: 96.15,
								sx: .679,
								sy: .679
							},
							223: {
								x: 310.46,
								y: 101.75,
								sx: .66,
								sy: .66
							},
							224: {
								x: 327.691,
								y: 107.45,
								sx: .641,
								sy: .641
							},
							225: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							226: {
								a: 0
							}
						})
						.addTimedChild(y, 0, 234, {
							0: {
								x: -80.2,
								y: 113.05,
								sx: .622,
								sy: .622,
								a: 1
							},
							1: {
								x: -72.829,
								y: 102.793,
								sx: .656,
								sy: .656
							},
							2: {
								x: -65.408,
								y: 92.536,
								sx: .691,
								sy: .691
							},
							3: {
								x: -58.038,
								y: 82.23,
								sx: .725,
								sy: .725
							},
							4: {
								x: -50.716,
								y: 71.973,
								sx: .759,
								sy: .759
							},
							5: {
								x: -43.296,
								y: 61.717,
								sx: .794,
								sy: .794
							},
							6: {
								x: -35.926,
								y: 51.362,
								sx: .828,
								sy: .828
							},
							7: {
								x: -28.506,
								y: 41.106,
								sx: .863,
								sy: .863
							},
							8: {
								x: -21.185,
								y: 30.849,
								sx: .897,
								sy: .897
							},
							9: {
								x: -13.815,
								y: 20.544,
								sx: .931,
								sy: .931
							},
							10: {
								x: -6.393,
								y: 10.285,
								sx: .966,
								sy: .966
							},
							11: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							15: {
								x: 29.669,
								y: 9.45,
								sx: .969,
								sy: .969
							},
							16: {
								x: 58.337,
								y: 18.85,
								sx: .937,
								sy: .937
							},
							17: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							18: {
								x: 115.624,
								y: 37.7,
								sx: .874,
								sy: .874
							},
							19: {
								x: 144.293,
								y: 47.1,
								sx: .843,
								sy: .843
							},
							20: {
								x: 172.961,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							21: {
								x: 201.63,
								y: 66,
								sx: .78,
								sy: .78
							},
							22: {
								x: 230.248,
								y: 75.4,
								sx: .748,
								sy: .748
							},
							23: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							24: {
								x: 287.585,
								y: 94.25,
								sx: .685,
								sy: .685
							},
							25: {
								x: 316.204,
								y: 103.65,
								sx: .654,
								sy: .654
							},
							26: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							27: {
								a: 0
							},
							45: {
								x: -80.2,
								a: 1
							},
							46: {
								x: -74.379,
								y: 105.004,
								sx: .649,
								sy: .649
							},
							47: {
								x: -68.609,
								y: 96.91,
								sx: .676,
								sy: .676
							},
							48: {
								x: -62.789,
								y: 88.864,
								sx: .703,
								sy: .703
							},
							49: {
								x: -56.971,
								y: 80.774,
								sx: .73,
								sy: .73
							},
							50: {
								x: -51.201,
								y: 72.678,
								sx: .757,
								sy: .757
							},
							51: {
								x: -45.381,
								y: 64.634,
								sx: .784,
								sy: .784
							},
							52: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							53: {
								x: -33.842,
								y: 48.446,
								sx: .838,
								sy: .838
							},
							54: {
								x: -28.021,
								y: 40.35,
								sx: .865,
								sy: .865
							},
							55: {
								x: -22.251,
								y: 32.306,
								sx: .892,
								sy: .892
							},
							56: {
								x: -16.433,
								y: 24.213,
								sx: .919,
								sy: .919
							},
							57: {
								x: -10.613,
								y: 16.169,
								sx: .946,
								sy: .946
							},
							58: {
								x: -4.843,
								y: 8.075,
								sx: .973,
								sy: .973
							},
							59: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							63: {
								x: 23.925,
								y: 7.55,
								sx: .975,
								sy: .975
							},
							64: {
								x: 46.85,
								y: 15.1,
								sx: .95,
								sy: .95
							},
							65: {
								x: 69.774,
								y: 22.65,
								sx: .924,
								sy: .924
							},
							66: {
								x: 92.699,
								y: 30.15,
								sx: .899,
								sy: .899
							},
							67: {
								x: 115.624,
								y: 37.7,
								sx: .874,
								sy: .874
							},
							68: {
								x: 138.549,
								y: 45.2,
								sx: .849,
								sy: .849
							},
							69: {
								x: 161.474,
								y: 52.75,
								sx: .824,
								sy: .824
							},
							70: {
								x: 184.398,
								y: 60.35,
								sx: .798,
								sy: .798
							},
							71: {
								x: 207.323,
								y: 67.9,
								sx: .773,
								sy: .773
							},
							72: {
								x: 230.248,
								y: 75.4,
								sx: .748,
								sy: .748
							},
							73: {
								x: 253.173,
								y: 82.95,
								sx: .723,
								sy: .723
							},
							74: {
								x: 276.098,
								y: 90.45,
								sx: .698,
								sy: .698
							},
							75: {
								x: 299.022,
								y: 98,
								sx: .672,
								sy: .672
							},
							76: {
								x: 321.947,
								y: 105.55,
								sx: .647,
								sy: .647
							},
							77: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							78: {
								a: 0
							},
							95: {
								x: -80.2,
								a: 1
							},
							96: {
								x: -71.163,
								y: 100.53,
								sx: .664,
								sy: .664
							},
							97: {
								x: -62.127,
								y: 87.961,
								sx: .706,
								sy: .706
							},
							98: {
								x: -53.14,
								y: 75.393,
								sx: .748,
								sy: .748
							},
							99: {
								x: -44.154,
								y: 62.824,
								sx: .79,
								sy: .79
							},
							100: {
								x: -35.068,
								y: 50.255,
								sx: .832,
								sy: .832
							},
							101: {
								x: -26.082,
								y: 37.687,
								sx: .874,
								sy: .874
							},
							102: {
								x: -17.096,
								y: 25.118,
								sx: .916,
								sy: .916
							},
							103: {
								x: -8.06,
								y: 12.55,
								sx: .958,
								sy: .958
							},
							104: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							108: {
								x: 44.003,
								y: 14.15,
								sx: .953,
								sy: .953
							},
							109: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							110: {
								x: 129.958,
								y: 42.4,
								sx: .858,
								sy: .858
							},
							111: {
								x: 172.911,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							112: {
								x: 215.914,
								y: 70.7,
								sx: .764,
								sy: .764
							},
							113: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							114: {
								x: 301.869,
								y: 98.95,
								sx: .669,
								sy: .669
							},
							115: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							116: {
								a: 0
							},
							130: {
								x: -80.2,
								a: 1
							},
							131: {
								x: -70.039,
								y: 98.934,
								sx: .669,
								sy: .669
							},
							132: {
								x: -59.88,
								y: 84.819,
								sx: .717,
								sy: .717
							},
							133: {
								x: -49.721,
								y: 70.704,
								sx: .764,
								sy: .764
							},
							134: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							135: {
								x: -29.502,
								y: 42.375,
								sx: .858,
								sy: .858
							},
							136: {
								x: -19.343,
								y: 28.26,
								sx: .906,
								sy: .906
							},
							137: {
								x: -9.183,
								y: 14.146,
								sx: .953,
								sy: .953
							},
							138: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							142: {
								x: 39.208,
								y: 12.6,
								sx: .958,
								sy: .958
							},
							143: {
								x: 77.416,
								y: 25.15,
								sx: .916,
								sy: .916
							},
							144: {
								x: 115.624,
								y: 37.7,
								sx: .874,
								sy: .874
							},
							145: {
								x: 153.832,
								y: 50.25,
								sx: .832,
								sy: .832
							},
							146: {
								x: 192.09,
								y: 62.85,
								sx: .79,
								sy: .79
							},
							147: {
								x: 230.248,
								y: 75.4,
								sx: .748,
								sy: .748
							},
							148: {
								x: 268.456,
								y: 87.95,
								sx: .706,
								sy: .706
							},
							149: {
								x: 306.664,
								y: 100.5,
								sx: .664,
								sy: .664
							},
							150: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							151: {
								a: 0
							},
							169: {
								x: -80.2,
								a: 1
							},
							170: {
								x: -74.379,
								y: 105.004,
								sx: .649,
								sy: .649
							},
							171: {
								x: -68.609,
								y: 96.91,
								sx: .676,
								sy: .676
							},
							172: {
								x: -62.789,
								y: 88.864,
								sx: .703,
								sy: .703
							},
							173: {
								x: -56.971,
								y: 80.774,
								sx: .73,
								sy: .73
							},
							174: {
								x: -51.201,
								y: 72.678,
								sx: .757,
								sy: .757
							},
							175: {
								x: -45.381,
								y: 64.634,
								sx: .784,
								sy: .784
							},
							176: {
								x: -39.611,
								y: 56.54,
								sx: .811,
								sy: .811
							},
							177: {
								x: -33.842,
								y: 48.446,
								sx: .838,
								sy: .838
							},
							178: {
								x: -28.021,
								y: 40.35,
								sx: .865,
								sy: .865
							},
							179: {
								x: -22.251,
								y: 32.306,
								sx: .892,
								sy: .892
							},
							180: {
								x: -16.433,
								y: 24.213,
								sx: .919,
								sy: .919
							},
							181: {
								x: -10.613,
								y: 16.169,
								sx: .946,
								sy: .946
							},
							182: {
								x: -4.843,
								y: 8.075,
								sx: .973,
								sy: .973
							},
							183: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1
							},
							187: {
								x: 22.526,
								y: 7.1,
								sx: .976,
								sy: .976
							},
							188: {
								x: 44.003,
								y: 14.15,
								sx: .953,
								sy: .953
							},
							189: {
								x: 65.479,
								y: 21.2,
								sx: .929,
								sy: .929
							},
							190: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							191: {
								x: 108.482,
								y: 35.35,
								sx: .882,
								sy: .882
							},
							192: {
								x: 129.958,
								y: 42.4,
								sx: .858,
								sy: .858
							},
							193: {
								x: 151.485,
								y: 49.45,
								sx: .835,
								sy: .835
							},
							194: {
								x: 172.961,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							195: {
								x: 194.437,
								y: 63.65,
								sx: .787,
								sy: .787
							},
							196: {
								x: 215.914,
								y: 70.7,
								sx: .764,
								sy: .764
							},
							197: {
								x: 237.44,
								y: 77.75,
								sx: .74,
								sy: .74
							},
							198: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							199: {
								x: 280.393,
								y: 91.9,
								sx: .693,
								sy: .693
							},
							200: {
								x: 301.869,
								y: 98.95,
								sx: .669,
								sy: .669
							},
							201: {
								x: 323.346,
								y: 106,
								sx: .646,
								sy: .646
							},
							202: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							203: {
								a: 0
							}
						})
						.addTimedChild(r, 0, 234, {
							0: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1,
								a: 1
							},
							1: {
								x: 32.266,
								y: 10.3,
								sx: .966,
								sy: .966
							},
							2: {
								x: 63.531,
								y: 20.55,
								sx: .931,
								sy: .931
							},
							3: {
								x: 94.797,
								y: 30.85,
								sx: .897,
								sy: .897
							},
							4: {
								x: 126.013,
								y: 41.1,
								sx: .863,
								sy: .863
							},
							5: {
								x: 157.328,
								y: 51.4,
								sx: .828,
								sy: .828
							},
							6: {
								x: 188.544,
								y: 61.7,
								sx: .794,
								sy: .794
							},
							7: {
								x: 219.859,
								y: 72,
								sx: .759,
								sy: .759
							},
							8: {
								x: 251.075,
								y: 82.25,
								sx: .725,
								sy: .725
							},
							9: {
								x: 282.341,
								y: 92.55,
								sx: .691,
								sy: .691
							},
							10: {
								x: 313.606,
								y: 102.8,
								sx: .656,
								sy: .656
							},
							11: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							12: {
								a: 0
							},
							45: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1,
								a: 1
							},
							46: {
								x: 25.573,
								y: 8.1,
								sx: .973,
								sy: .973
							},
							47: {
								x: 50.146,
								y: 16.15,
								sx: .946,
								sy: .946
							},
							48: {
								x: 74.669,
								y: 24.25,
								sx: .919,
								sy: .919
							},
							49: {
								x: 99.292,
								y: 32.3,
								sx: .892,
								sy: .892
							},
							50: {
								x: 123.815,
								y: 40.4,
								sx: .865,
								sy: .865
							},
							51: {
								x: 148.388,
								y: 48.45,
								sx: .838,
								sy: .838
							},
							52: {
								x: 172.961,
								y: 56.55,
								sx: .811,
								sy: .811
							},
							53: {
								x: 197.484,
								y: 64.65,
								sx: .784,
								sy: .784
							},
							54: {
								x: 222.057,
								y: 72.7,
								sx: .757,
								sy: .757
							},
							55: {
								x: 246.63,
								y: 80.8,
								sx: .73,
								sy: .73
							},
							56: {
								x: 271.203,
								y: 88.85,
								sx: .703,
								sy: .703
							},
							57: {
								x: 295.726,
								y: 96.95,
								sx: .676,
								sy: .676
							},
							58: {
								x: 320.349,
								y: 105,
								sx: .649,
								sy: .649
							},
							59: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							60: {
								a: 0
							},
							95: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1,
								a: 1
							},
							96: {
								x: 39.208,
								y: 12.6,
								sx: .958,
								sy: .958
							},
							97: {
								x: 77.416,
								y: 25.15,
								sx: .916,
								sy: .916
							},
							98: {
								x: 115.624,
								y: 37.7,
								sx: .874,
								sy: .874
							},
							99: {
								x: 153.832,
								y: 50.25,
								sx: .832,
								sy: .832
							},
							100: {
								x: 192.09,
								y: 62.85,
								sx: .79,
								sy: .79
							},
							101: {
								x: 230.248,
								y: 75.4,
								sx: .748,
								sy: .748
							},
							102: {
								x: 268.456,
								y: 87.95,
								sx: .706,
								sy: .706
							},
							103: {
								x: 306.664,
								y: 100.5,
								sx: .664,
								sy: .664
							},
							104: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							105: {
								a: 0
							},
							130: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1,
								a: 1
							},
							131: {
								x: 44.003,
								y: 14.15,
								sx: .953,
								sy: .953
							},
							132: {
								x: 86.956,
								y: 28.3,
								sx: .906,
								sy: .906
							},
							133: {
								x: 129.958,
								y: 42.4,
								sx: .858,
								sy: .858
							},
							134: {
								x: 172.911,
								y: 56.6,
								sx: .811,
								sy: .811
							},
							135: {
								x: 215.914,
								y: 70.7,
								sx: .764,
								sy: .764
							},
							136: {
								x: 258.917,
								y: 84.85,
								sx: .717,
								sy: .717
							},
							137: {
								x: 301.869,
								y: 98.95,
								sx: .669,
								sy: .669
							},
							138: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							139: {
								a: 0
							},
							169: {
								x: 1,
								y: 0,
								sx: 1,
								sy: 1,
								a: 1
							},
							170: {
								x: 25.573,
								y: 8.1,
								sx: .973,
								sy: .973
							},
							171: {
								x: 50.146,
								y: 16.15,
								sx: .946,
								sy: .946
							},
							172: {
								x: 74.669,
								y: 24.25,
								sx: .919,
								sy: .919
							},
							173: {
								x: 99.292,
								y: 32.3,
								sx: .892,
								sy: .892
							},
							174: {
								x: 123.815,
								y: 40.4,
								sx: .865,
								sy: .865
							},
							175: {
								x: 148.388,
								y: 48.45,
								sx: .838,
								sy: .838
							},
							176: {
								x: 172.961,
								y: 56.55,
								sx: .811,
								sy: .811
							},
							177: {
								x: 197.484,
								y: 64.65,
								sx: .784,
								sy: .784
							},
							178: {
								x: 222.057,
								y: 72.7,
								sx: .757,
								sy: .757
							},
							179: {
								x: 246.63,
								y: 80.8,
								sx: .73,
								sy: .73
							},
							180: {
								x: 271.203,
								y: 88.85,
								sx: .703,
								sy: .703
							},
							181: {
								x: 295.726,
								y: 96.95,
								sx: .676,
								sy: .676
							},
							182: {
								x: 320.349,
								y: 105,
								sx: .649,
								sy: .649
							},
							183: {
								x: 344.8,
								y: 113.05,
								sx: .622,
								sy: .622
							},
							184: {
								a: 0
							}
						})
				})), e.a1_52 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_82"));
					this.addChild(s)
				})), e.a1_53 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_83"));
					this.addChild(s)
				})), e.Lottery = t.extend((function() {
					t.call(this, {
						duration: 59
					});
					var s = new e.a1_53,
						a = new e.a1_52,
						i = (new e.a1_26)
						.setTransform(54, 508);
					this[i.name = "ani"] = i;
					var n = (new e.Btns)
						.setTransform(685.7, 40.95, .148, .353);
					this[n.name = "backBtn"] = n;
					var r = new y("你的福气值：88888")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 29,
							fontWeight: "bold",
							fill: "#fff",
							leading: 2
						})
						.setAlign("center")
						.setTransform(435, 145);
					this[r.name = "num"] = r, this.addTimedChild(s)
						.addTimedChild(a, 0, 59, {
							0: {
								x: -42.35,
								y: 159.9,
								sx: 1.923,
								sy: 1.923,
								a: 0
							},
							1: {
								x: -32.807,
								y: 163.668,
								sx: 1.885,
								sy: 1.885,
								a: .04
							},
							2: {
								x: -23.266,
								y: 167.342,
								sx: 1.847,
								sy: 1.847,
								a: .08
							},
							3: {
								x: -13.724,
								y: 171.012,
								sx: 1.809,
								sy: 1.809,
								a: .12
							},
							4: {
								x: -4.233,
								y: 174.736,
								sx: 1.771,
								sy: 1.771,
								a: .15
							},
							5: {
								x: 5.309,
								y: 178.407,
								sx: 1.732,
								sy: 1.732,
								a: .19
							},
							6: {
								x: 14.851,
								y: 182.08,
								sx: 1.694,
								sy: 1.694,
								a: .23
							},
							7: {
								x: 24.443,
								y: 185.801,
								sx: 1.656,
								sy: 1.656,
								a: .27
							},
							8: {
								x: 33.985,
								y: 189.472,
								sx: 1.618,
								sy: 1.618,
								a: .31
							},
							9: {
								x: 43.527,
								y: 193.142,
								sx: 1.579,
								sy: 1.579,
								a: .35
							},
							10: {
								x: 53.068,
								y: 196.866,
								sx: 1.541,
								sy: 1.541,
								a: .38
							},
							11: {
								x: 62.61,
								y: 200.536,
								sx: 1.503,
								sy: 1.503,
								a: .42
							},
							12: {
								x: 72.152,
								y: 204.21,
								sx: 1.465,
								sy: 1.465,
								a: .46
							},
							13: {
								x: 81.693,
								y: 207.983,
								sx: 1.426,
								sy: 1.426,
								a: .5
							},
							14: {
								x: 91.235,
								y: 211.654,
								sx: 1.388,
								sy: 1.388,
								a: .54
							},
							15: {
								x: 100.727,
								y: 215.325,
								sx: 1.35,
								sy: 1.35,
								a: .58
							},
							16: {
								x: 110.268,
								y: 219.048,
								sx: 1.312,
								sy: 1.312,
								a: .62
							},
							17: {
								x: 119.81,
								y: 222.719,
								sx: 1.274,
								sy: 1.274,
								a: .65
							},
							18: {
								x: 129.352,
								y: 226.39,
								sx: 1.235,
								sy: 1.235,
								a: .69
							},
							19: {
								x: 138.894,
								y: 230.111,
								sx: 1.197,
								sy: 1.197,
								a: .73
							},
							20: {
								x: 148.486,
								y: 233.784,
								sx: 1.159,
								sy: 1.159,
								a: .77
							},
							21: {
								x: 158.028,
								y: 237.455,
								sx: 1.121,
								sy: 1.121,
								a: .81
							},
							22: {
								x: 167.569,
								y: 241.178,
								sx: 1.082,
								sy: 1.082,
								a: .85
							},
							23: {
								x: 177.11,
								y: 244.851,
								sx: 1.044,
								sy: 1.044,
								a: .88
							},
							24: {
								x: 186.652,
								y: 248.522,
								sx: 1.006,
								sy: 1.006,
								a: .92
							},
							25: {
								x: 196.194,
								y: 252.243,
								sx: .968,
								sy: .968,
								a: .96
							},
							26: {
								x: 205.65,
								y: 255.85,
								sx: .929,
								sy: .929,
								a: 1
							},
							27: {
								x: 201.942,
								y: 254.408,
								sx: .945,
								sy: .945
							},
							28: {
								x: 198.137,
								y: 252.919,
								sx: .96,
								sy: .96
							},
							29: {
								x: 194.379,
								y: 251.477,
								sx: .975,
								sy: .975
							},
							30: {
								x: 190.624,
								y: 250.039,
								sx: .99,
								sy: .99
							},
							31: {
								x: 186.816,
								y: 248.546,
								sx: 1.005,
								sy: 1.005
							},
							32: {
								x: 183.061,
								y: 247.058,
								sx: 1.02,
								sy: 1.02
							},
							33: {
								x: 179.306,
								y: 245.62,
								sx: 1.035,
								sy: 1.035
							},
							34: {
								x: 175.548,
								y: 244.127,
								sx: 1.05,
								sy: 1.05
							},
							35: {
								x: 171.743,
								y: 242.689,
								sx: 1.065,
								sy: 1.065
							},
							36: {
								x: 167.9,
								y: 241.25,
								sx: 1.081,
								sy: 1.081
							},
							37: {
								x: 169.945,
								y: 242.046,
								sx: 1.072,
								sy: 1.072
							},
							38: {
								x: 171.994,
								y: 242.8,
								sx: 1.064,
								sy: 1.064
							},
							39: {
								x: 173.992,
								y: 243.6,
								sx: 1.056,
								sy: 1.056
							},
							40: {
								x: 175.989,
								y: 244.35,
								sx: 1.048,
								sy: 1.048
							},
							41: {
								x: 177.989,
								y: 245.153,
								sx: 1.04,
								sy: 1.04
							},
							42: {
								x: 179.986,
								y: 245.903,
								sx: 1.032,
								sy: 1.032
							},
							43: {
								x: 181.983,
								y: 246.703,
								sx: 1.024,
								sy: 1.024
							},
							44: {
								x: 183.983,
								y: 247.457,
								sx: 1.016,
								sy: 1.016
							},
							45: {
								x: 185.98,
								y: 248.256,
								sx: 1.008,
								sy: 1.008
							},
							46: {
								x: 188,
								y: 249,
								sx: 1,
								sy: 1
							}
						})
						.addTimedChild(i)
						.addTimedChild(n)
						.addTimedChild(r)
				})), e.nums = a.extend((function() {
					a.call(this);
					var s = new i(n("indexNumBg"))
						.setTransform(10.75),
						e = new y("我的福气值：6666")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 32,
							fill: "#f5e78c",
							leading: 2
						})
						.setAlign("center")
						.setTransform(213.65, 5.75);
					this[e.name = "nums"] = e, this.addChild(s, e)
				})), e.a1_55 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_84"));
					this.addChild(s)
				})), e.a1_56 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_85"));
					this.addChild(s)
				})), e.moveBtns = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_86"));
					this.addChild(s)
				})), e.a1_57 = t.extend((function() {
					t.call(this, {
						duration: 60
					});
					var s = new e.moveBtns;
					this.addTimedChild(s, 0, 60, {
						0: {
							x: 0,
							y: 0,
							sx: 1,
							sy: 1
						},
						1: {
							x: 1,
							y: .35,
							sx: .996,
							sy: .996
						},
						2: {
							x: 2,
							y: .65,
							sx: .992,
							sy: .992
						},
						3: {
							x: 3,
							y: .95,
							sx: .988,
							sy: .988
						},
						4: {
							x: 4,
							y: 1.25,
							sx: .983,
							sy: .983
						},
						5: {
							x: 5,
							y: 1.55,
							sx: .979,
							sy: .979
						},
						6: {
							x: 6,
							y: 1.85,
							sx: .975,
							sy: .975
						},
						7: {
							x: 7,
							y: 2.15,
							sx: .971,
							sy: .971
						},
						8: {
							x: 8,
							y: 2.5,
							sx: .967,
							sy: .967
						},
						9: {
							x: 9,
							y: 2.8,
							sx: .963,
							sy: .963
						},
						10: {
							x: 10,
							y: 3.1,
							sx: .959,
							sy: .959
						},
						11: {
							x: 11,
							y: 3.4,
							sx: .954,
							sy: .954
						},
						12: {
							x: 12,
							y: 3.7,
							sx: .95,
							sy: .95
						},
						13: {
							x: 13,
							y: 4,
							sx: .946,
							sy: .946
						},
						14: {
							x: 14,
							y: 4.3,
							sx: .942,
							sy: .942
						},
						15: {
							x: 15,
							y: 4.6,
							sx: .938,
							sy: .938
						},
						16: {
							x: 16,
							y: 4.9,
							sx: .934,
							sy: .934
						},
						17: {
							x: 17,
							y: 5.25,
							sx: .93,
							sy: .93
						},
						18: {
							x: 18,
							y: 5.55,
							sx: .926,
							sy: .926
						},
						19: {
							x: 18.95,
							y: 5.85,
							sx: .921,
							sy: .921
						},
						20: {
							x: 19.95,
							y: 6.15,
							sx: .917,
							sy: .917
						},
						21: {
							x: 20.95,
							y: 6.45,
							sx: .913,
							sy: .913
						},
						22: {
							x: 21.95,
							y: 6.75,
							sx: .909,
							sy: .909
						},
						23: {
							x: 22.95,
							y: 7.05,
							sx: .905,
							sy: .905
						},
						24: {
							x: 23.95,
							y: 7.35,
							sx: .901,
							sy: .901
						},
						25: {
							x: 24.95,
							y: 7.7,
							sx: .897,
							sy: .897
						},
						26: {
							x: 25.95,
							y: 8,
							sx: .892,
							sy: .892
						},
						27: {
							x: 26.95,
							y: 8.3,
							sx: .888,
							sy: .888
						},
						28: {
							x: 27.95,
							y: 8.6,
							sx: .884,
							sy: .884
						},
						29: {
							x: 28.9,
							y: 8.9,
							sx: .88,
							sy: .88
						},
						30: {
							x: 27.981,
							y: 8.64,
							sx: .884,
							sy: .884
						},
						31: {
							x: 27.012,
							y: 8.331,
							sx: .888,
							sy: .888
						},
						32: {
							x: 26.044,
							y: 8.021,
							sx: .892,
							sy: .892
						},
						33: {
							x: 25.075,
							y: 7.712,
							sx: .896,
							sy: .896
						},
						34: {
							x: 24.107,
							y: 7.452,
							sx: .9,
							sy: .9
						},
						35: {
							x: 23.138,
							y: 7.143,
							sx: .904,
							sy: .904
						},
						36: {
							x: 22.169,
							y: 6.833,
							sx: .908,
							sy: .908
						},
						37: {
							x: 21.25,
							y: 6.573,
							sx: .912,
							sy: .912
						},
						38: {
							x: 20.282,
							y: 6.264,
							sx: .916,
							sy: .916
						},
						39: {
							x: 19.314,
							y: 5.955,
							sx: .92,
							sy: .92
						},
						40: {
							x: 18.345,
							y: 5.645,
							sx: .924,
							sy: .924
						},
						41: {
							x: 17.376,
							y: 5.385,
							sx: .928,
							sy: .928
						},
						42: {
							x: 16.407,
							y: 5.076,
							sx: .932,
							sy: .932
						},
						43: {
							x: 15.438,
							y: 4.766,
							sx: .936,
							sy: .936
						},
						44: {
							x: 14.47,
							y: 4.457,
							sx: .94,
							sy: .94
						},
						45: {
							x: 13.502,
							y: 4.197,
							sx: .944,
							sy: .944
						},
						46: {
							x: 12.533,
							y: 3.888,
							sx: .948,
							sy: .948
						},
						47: {
							x: 11.564,
							y: 3.578,
							sx: .952,
							sy: .952
						},
						48: {
							x: 10.646,
							y: 3.319,
							sx: .956,
							sy: .956
						},
						49: {
							x: 9.677,
							y: 3.009,
							sx: .96,
							sy: .96
						},
						50: {
							x: 8.708,
							y: 2.699,
							sx: .964,
							sy: .964
						},
						51: {
							x: 7.74,
							y: 2.39,
							sx: .968,
							sy: .968
						},
						52: {
							x: 6.771,
							y: 2.13,
							sx: .972,
							sy: .972
						},
						53: {
							x: 5.803,
							y: 1.821,
							sx: .976,
							sy: .976
						},
						54: {
							x: 4.834,
							y: 1.511,
							sx: .98,
							sy: .98
						},
						55: {
							x: 3.865,
							y: 1.202,
							sx: .984,
							sy: .984
						},
						56: {
							x: 2.896,
							y: .942,
							sx: .988,
							sy: .988
						},
						57: {
							x: 1.928,
							y: .633,
							sx: .992,
							sy: .992
						},
						58: {
							x: .96,
							y: .323,
							sx: .996,
							sy: .996
						},
						59: {
							x: 0,
							y: 0,
							sx: 1,
							sy: 1
						}
					})
				})), e.a1_58 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_87"));
					this.addChild(s)
				})), e.a1_59 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_88"));
					this.addChild(s)
				})), e.a1_27 = a.extend((function() {
					a.call(this);
					var s = new e.a1_59,
						t = (new e.a1_58)
						.setTransform(143, 546);
					this.addChild(s, t)
				})), e.a1_60 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_89"));
					this.addChild(s)
				})), e.a1_61 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_90"));
					this.addChild(s)
				})), e.Index = t.extend((function() {
					t.call(this, {
						duration: 105
					});
					var s = new e.a1_61,
						a = new e.a1_60,
						i = new e.a1_27,
						n = new e.a1_57,
						y = new e.a1_56,
						r = new e.a1_55,
						x = (new e.Btns)
						.setTransform(280.45, 820.3, .699, .595);
					this[x.name = "startBtn"] = x;
					var o = (new e.Btns)
						.setTransform(280.45, 933.75, .699, .595);
					this[o.name = "rankBtn"] = o;
					var l = (new e.Btns)
						.setTransform(261.1, 1032.4, .219, .595);
					this[l.name = "ruleBtn"] = l;
					var d = (new e.Btns)
						.setTransform(384.6, 1032.4, .219, .595);
					this[d.name = "myAwardBtn"] = d;
					var c = (new e.Btns)
						.setTransform(508, 1032.4, .219, .595);
					this[c.name = "toLotterydBtn"] = c;
					var h = new e.nums;
					this[h.name = "numBox"] = h, this.addTimedChild(s)
						.addTimedChild(a, 0, 105, {
							0: {
								x: 259.3,
								y: 1036.25,
								a: 0
							},
							89: {
								a: 1
							},
							104: {
								x: 259.8
							}
						})
						.addTimedChild(i, 0, 105, {
							0: {
								x: 283.55,
								y: 245.1,
								sx: .535,
								sy: .535,
								a: 0
							},
							1: {
								x: 279.006,
								y: 240.239,
								sx: .551,
								sy: .551,
								a: .03
							},
							2: {
								x: 274.507,
								y: 235.324,
								sx: .568,
								sy: .568,
								a: .06
							},
							3: {
								x: 269.921,
								y: 230.42,
								sx: .584,
								sy: .584,
								a: .09
							},
							4: {
								x: 265.373,
								y: 225.555,
								sx: .6,
								sy: .6,
								a: .12
							},
							5: {
								x: 260.833,
								y: 220.647,
								sx: .616,
								sy: .616,
								a: .15
							},
							6: {
								x: 256.334,
								y: 215.782,
								sx: .633,
								sy: .633,
								a: .18
							},
							7: {
								x: 251.748,
								y: 210.879,
								sx: .649,
								sy: .649,
								a: .21
							},
							8: {
								x: 247.25,
								y: 205.964,
								sx: .665,
								sy: .665,
								a: .23
							},
							9: {
								x: 242.66,
								y: 201.106,
								sx: .681,
								sy: .681,
								a: .27
							},
							10: {
								x: 238.161,
								y: 196.191,
								sx: .698,
								sy: .698,
								a: .29
							},
							11: {
								x: 233.575,
								y: 191.287,
								sx: .714,
								sy: .714,
								a: .32
							},
							12: {
								x: 229.077,
								y: 186.422,
								sx: .73,
								sy: .73,
								a: .35
							},
							13: {
								x: 224.537,
								y: 181.515,
								sx: .746,
								sy: .746,
								a: .38
							},
							14: {
								x: 219.988,
								y: 176.65,
								sx: .763,
								sy: .763,
								a: .41
							},
							15: {
								x: 215.407,
								y: 171.749,
								sx: .779,
								sy: .779,
								a: .44
							},
							16: {
								x: 210.904,
								y: 166.831,
								sx: .795,
								sy: .795,
								a: .47
							},
							17: {
								x: 206.364,
								y: 161.973,
								sx: .811,
								sy: .811,
								a: .5
							},
							18: {
								x: 201.774,
								y: 157.066,
								sx: .828,
								sy: .828,
								a: .53
							},
							19: {
								x: 197.225,
								y: 152.201,
								sx: .844,
								sy: .844,
								a: .56
							},
							20: {
								x: 192.639,
								y: 147.297,
								sx: .86,
								sy: .86,
								a: .59
							},
							21: {
								x: 188.141,
								y: 142.382,
								sx: .876,
								sy: .876,
								a: .62
							},
							22: {
								x: 183.601,
								y: 137.524,
								sx: .893,
								sy: .893,
								a: .65
							},
							23: {
								x: 179.052,
								y: 132.609,
								sx: .909,
								sy: .909,
								a: .68
							},
							24: {
								x: 174.516,
								y: 127.705,
								sx: .925,
								sy: .925,
								a: .71
							},
							25: {
								x: 169.968,
								y: 122.84,
								sx: .941,
								sy: .941,
								a: .73
							},
							26: {
								x: 165.428,
								y: 117.933,
								sx: .958,
								sy: .958,
								a: .77
							},
							27: {
								x: 160.879,
								y: 113.068,
								sx: .974,
								sy: .974,
								a: .79
							},
							28: {
								x: 156.343,
								y: 108.164,
								sx: .99,
								sy: .99,
								a: .82
							},
							29: {
								x: 151.795,
								y: 103.249,
								sx: 1.006,
								sy: 1.006,
								a: .85
							},
							30: {
								x: 147.255,
								y: 98.392,
								sx: 1.023,
								sy: 1.023,
								a: .88
							},
							31: {
								x: 142.706,
								y: 93.476,
								sx: 1.039,
								sy: 1.039,
								a: .91
							},
							32: {
								x: 138.17,
								y: 88.573,
								sx: 1.055,
								sy: 1.055,
								a: .94
							},
							33: {
								x: 133.622,
								y: 83.708,
								sx: 1.071,
								sy: 1.071,
								a: .97
							},
							34: {
								x: 129.15,
								y: 78.85,
								sx: 1.088,
								sy: 1.088,
								a: 1
							},
							35: {
								x: 133.326,
								y: 83.367,
								sx: 1.073,
								sy: 1.073
							},
							36: {
								x: 137.509,
								y: 87.838,
								sx: 1.058,
								sy: 1.058
							},
							37: {
								x: 141.639,
								y: 92.357,
								sx: 1.043,
								sy: 1.043
							},
							38: {
								x: 145.819,
								y: 96.827,
								sx: 1.028,
								sy: 1.028
							},
							39: {
								x: 150.002,
								y: 101.348,
								sx: 1.013,
								sy: 1.013
							},
							40: {
								x: 154.132,
								y: 105.867,
								sx: .998,
								sy: .998
							},
							41: {
								x: 158.312,
								y: 110.337,
								sx: .983,
								sy: .983
							},
							42: {
								x: 162.493,
								y: 114.807,
								sx: .968,
								sy: .968
							},
							43: {
								x: 166.625,
								y: 119.277,
								sx: .954,
								sy: .954
							},
							44: {
								x: 170.8,
								y: 123.7,
								sx: .939,
								sy: .939
							},
							45: {
								x: 169.113,
								y: 121.906,
								sx: .945,
								sy: .945
							},
							46: {
								x: 167.428,
								y: 120.014,
								sx: .951,
								sy: .951
							},
							47: {
								x: 165.696,
								y: 118.124,
								sx: .957,
								sy: .957
							},
							48: {
								x: 163.962,
								y: 116.281,
								sx: .963,
								sy: .963
							},
							49: {
								x: 162.28,
								y: 114.441,
								sx: .969,
								sy: .969
							},
							50: {
								x: 160.545,
								y: 112.599,
								sx: .975,
								sy: .975
							},
							51: {
								x: 158.813,
								y: 110.759,
								sx: .982,
								sy: .982
							},
							52: {
								x: 157.129,
								y: 108.867,
								sx: .988,
								sy: .988
							},
							53: {
								x: 155.394,
								y: 107.024,
								sx: .994,
								sy: .994
							},
							54: {
								x: 153.65,
								y: 105.2,
								sx: 1,
								sy: 1
							}
						})
						.addTimedChild(n, 0, 105, {
							0: {
								x: 218.6,
								y: 800.75,
								a: 0
							},
							44: {
								x: 205.6,
								y: 815.45
							},
							45: {
								y: 813,
								a: .07
							},
							46: {
								y: 810.55,
								a: .13
							},
							47: {
								y: 808.1,
								a: .2
							},
							48: {
								y: 805.65,
								a: .27
							},
							49: {
								y: 803.2,
								a: .33
							},
							50: {
								y: 800.75,
								a: .4
							},
							51: {
								y: 798.3,
								a: .46
							},
							52: {
								y: 795.85,
								a: .54
							},
							53: {
								y: 793.4,
								a: .6
							},
							54: {
								y: 790.95,
								a: .67
							},
							55: {
								y: 788.5,
								a: .73
							},
							56: {
								y: 786.05,
								a: .8
							},
							57: {
								y: 783.6,
								a: .87
							},
							58: {
								y: 781.15,
								a: .93
							},
							59: {
								y: 778.7,
								a: 1
							},
							60: {
								y: 782.7
							},
							61: {
								y: 786.65
							},
							62: {
								y: 790.65
							},
							63: {
								y: 794.65
							},
							64: {
								y: 798.6
							},
							65: {
								y: 802.6
							},
							66: {
								y: 806.55
							},
							67: {
								y: 810.55
							},
							68: {
								y: 809.15
							},
							69: {
								y: 807.75
							},
							70: {
								y: 806.35
							},
							71: {
								y: 804.95
							},
							72: {
								y: 803.55
							},
							73: {
								y: 802.15
							},
							74: {
								y: 800.75
							}
						})
						.addTimedChild(y, 0, 105, {
							0: {
								x: 218.6,
								y: 916.05,
								a: 0
							},
							67: {
								x: 245.6,
								y: 940.55
							},
							68: {
								y: 937.45,
								a: .07
							},
							69: {
								y: 934.35,
								a: .13
							},
							70: {
								y: 931.25,
								a: .2
							},
							71: {
								y: 928.15,
								a: .27
							},
							72: {
								y: 925.05,
								a: .33
							},
							73: {
								y: 921.95,
								a: .4
							},
							74: {
								y: 918.85,
								a: .46
							},
							75: {
								y: 915.7,
								a: .54
							},
							76: {
								y: 912.6,
								a: .6
							},
							77: {
								y: 909.5,
								a: .67
							},
							78: {
								y: 906.4,
								a: .73
							},
							79: {
								y: 903.3,
								a: .8
							},
							80: {
								y: 900.2,
								a: .87
							},
							81: {
								y: 897.1,
								a: .93
							},
							82: {
								y: 894,
								a: 1
							},
							83: {
								y: 898
							},
							84: {
								y: 901.95
							},
							85: {
								y: 905.95
							},
							86: {
								y: 909.95
							},
							87: {
								y: 913.9
							},
							88: {
								y: 917.9
							},
							89: {
								y: 921.85
							},
							90: {
								y: 925.85
							},
							91: {
								y: 924.45
							},
							92: {
								y: 923.05
							},
							93: {
								y: 921.65
							},
							94: {
								y: 920.25
							},
							95: {
								y: 918.85
							},
							96: {
								y: 917.45
							},
							97: {
								y: 916.05
							}
						})
						.addTimedChild(r, 0, 105, {
							0: {
								x: 220,
								y: 1166,
								a: 0
							},
							89: {
								a: 1
							}
						})
						.addTimedChild(x)
						.addTimedChild(o)
						.addTimedChild(l)
						.addTimedChild(d)
						.addTimedChild(c)
						.addTimedChild(h, 0, 105, {
							0: {
								x: 221.35,
								y: 730.1,
								a: 0
							},
							1: {
								a: .01
							},
							2: {
								a: .02
							},
							3: {
								a: .03
							},
							4: {
								a: .04
							},
							5: {
								a: .05
							},
							6: {
								a: .06
							},
							7: {
								a: .07
							},
							8: {
								a: .08
							},
							9: {
								a: .09
							},
							10: {
								a: .1
							},
							11: {
								a: .11
							},
							12: {
								a: .12
							},
							13: {
								a: .13
							},
							15: {
								a: .14
							},
							16: {
								a: .15
							},
							17: {
								a: .16
							},
							18: {
								a: .17
							},
							19: {
								a: .18
							},
							20: {
								a: .19
							},
							21: {
								a: .2
							},
							22: {
								a: .21
							},
							23: {
								a: .22
							},
							24: {
								a: .23
							},
							25: {
								a: .24
							},
							26: {
								a: .25
							},
							27: {
								a: .26
							},
							28: {
								a: .27
							},
							29: {
								a: .28
							},
							30: {
								a: .29
							},
							31: {
								a: .3
							},
							32: {
								a: .31
							},
							33: {
								a: .32
							},
							34: {
								a: .33
							},
							35: {
								a: .34
							},
							36: {
								a: .35
							},
							37: {
								a: .36
							},
							38: {
								a: .37
							},
							39: {
								a: .38
							},
							41: {
								a: .39
							},
							42: {
								a: .4
							},
							43: {
								a: .41
							},
							44: {
								a: .42
							},
							45: {
								a: .43
							},
							46: {
								a: .44
							},
							47: {
								a: .45
							},
							48: {
								a: .46
							},
							49: {
								a: .47
							},
							50: {
								a: .48
							},
							51: {
								a: .49
							},
							52: {
								a: .5
							},
							53: {
								a: .51
							},
							54: {
								a: .52
							},
							55: {
								a: .53
							},
							56: {
								a: .54
							},
							57: {
								a: .55
							},
							58: {
								a: .56
							},
							59: {
								a: .57
							},
							60: {
								a: .58
							},
							61: {
								a: .59
							},
							62: {
								a: .6
							},
							63: {
								a: .61
							},
							64: {
								a: .62
							},
							65: {
								a: .63
							},
							67: {
								a: .64
							},
							68: {
								a: .65
							},
							69: {
								a: .66
							},
							70: {
								a: .67
							},
							71: {
								a: .68
							},
							72: {
								a: .69
							},
							73: {
								a: .7
							},
							74: {
								a: .71
							},
							75: {
								a: .72
							},
							76: {
								a: .73
							},
							77: {
								a: .74
							},
							78: {
								a: .75
							},
							79: {
								a: .76
							},
							80: {
								a: .77
							},
							81: {
								a: .78
							},
							82: {
								a: .79
							},
							83: {
								a: .8
							},
							84: {
								a: .81
							},
							85: {
								a: .82
							},
							86: {
								a: .83
							},
							87: {
								a: .84
							},
							88: {
								a: .85
							},
							89: {
								a: .86
							},
							90: {
								a: .87
							},
							91: {
								a: .88
							},
							93: {
								a: .89
							},
							94: {
								a: .9
							},
							95: {
								a: .91
							},
							96: {
								a: .92
							},
							97: {
								a: .93
							},
							98: {
								a: .94
							},
							99: {
								a: .95
							},
							100: {
								a: .96
							},
							101: {
								a: .97
							},
							102: {
								a: .98
							},
							103: {
								a: .99
							},
							104: {
								a: 1
							}
						})
				})), e.obstacle = a.extend((function() {
					a.call(this);
					var s = new i(n("obstacle"))
						.setTransform(-32);
					this.addChild(s)
				})), e.buff3 = a.extend((function() {
					a.call(this);
					var s = new i(n("buff3"))
						.setTransform(-54);
					this.addChild(s)
				})), e.buff2 = a.extend((function() {
					a.call(this);
					var s = new i(n("buff2"))
						.setTransform(-54);
					this.addChild(s)
				})), e.buff1 = a.extend((function() {
					a.call(this);
					var s = new i(n("buff1"))
						.setTransform(-54);
					this.addChild(s)
				})), e.rightBtn = a.extend((function() {
					a.call(this);
					var s = new i(n("rightBtn"));
					this.addChild(s)
				})), e.hero = t.extend((function() {
					t.call(this, {
						duration: 3
					});
					var s = new i(n("hero")),
						e = new i(n("hero2")),
						a = new i(n("hero3"))
						.setTransform(-140, -462);
					this.addTimedChild(s, 0, 1, {
							0: {
								x: -140,
								y: -462
							}
						})
						.addTimedChild(e, 1, 1, {
							1: {
								x: -140,
								y: -462
							}
						})
						.addTimedChild(a, 2, 1)
				})), e.shades = a.extend((function() {
					a.call(this);
					var s = new i(n("shade"))
						.setTransform(-50, -65);
					this.addChild(s)
				})), e.heros = t.extend((function() {
					t.call(this, {
						duration: 60
					});
					var s = new e.shades,
						a = new e.hero;
					this[a.name = "heroImgs"] = a, this.addTimedChild(s, 0, 60, {
							0: {
								x: -2,
								y: 29,
								sx: 1,
								sy: 1,
								a: .49
							},
							1: {
								x: -1.972,
								y: 28.695,
								sx: .986,
								sy: .986,
								a: .48
							},
							2: {
								x: -1.945,
								y: 28.391,
								sx: .972,
								sy: .972
							},
							3: {
								x: -1.867,
								y: 28.086,
								sx: .959,
								sy: .958,
								a: .47
							},
							4: {
								x: -1.84,
								y: 27.831,
								sx: .945,
								sy: .944
							},
							5: {
								x: -1.762,
								y: 27.526,
								sx: .931,
								sy: .93,
								a: .46
							},
							6: {
								x: -1.734,
								y: 27.222,
								sx: .917,
								sy: .916
							},
							7: {
								x: -1.657,
								y: 26.917,
								sx: .903,
								sy: .902,
								a: .45
							},
							8: {
								x: -1.629,
								y: 26.612,
								sx: .89,
								sy: .888
							},
							9: {
								x: -1.552,
								y: 26.307,
								sx: .876,
								sy: .874,
								a: .44
							},
							10: {
								x: -1.524,
								y: 26.003,
								sx: .862,
								sy: .86
							},
							11: {
								x: -1.496,
								y: 25.748,
								sx: .848,
								sy: .846,
								a: .43
							},
							12: {
								x: -1.419,
								y: 25.444,
								sx: .834,
								sy: .833
							},
							13: {
								x: -1.391,
								y: 25.139,
								sx: .821,
								sy: .819,
								a: .42
							},
							14: {
								x: -1.314,
								y: 24.834,
								sx: .807,
								sy: .805
							},
							15: {
								x: -1.336,
								y: 24.529,
								sx: .793,
								sy: .791,
								a: .41
							},
							16: {
								x: -1.258,
								y: 24.224,
								sx: .779,
								sy: .777
							},
							17: {
								x: -1.231,
								y: 23.919,
								sx: .765,
								sy: .763,
								a: .4
							},
							18: {
								x: -1.153,
								y: 23.615,
								sx: .752,
								sy: .749,
								a: .39
							},
							19: {
								x: -1.126,
								y: 23.36,
								sx: .738,
								sy: .735
							},
							20: {
								x: -1.098,
								y: 23.056,
								sx: .724,
								sy: .721
							},
							21: {
								x: -1.02,
								y: 22.751,
								sx: .71,
								sy: .707,
								a: .38
							},
							22: {
								x: -.993,
								y: 22.446,
								sx: .696,
								sy: .693
							},
							23: {
								x: -.915,
								y: 22.141,
								sx: .683,
								sy: .679,
								a: .37
							},
							24: {
								x: -.888,
								y: 21.837,
								sx: .669,
								sy: .665
							},
							25: {
								x: -.81,
								y: 21.532,
								sx: .655,
								sy: .651,
								a: .36
							},
							26: {
								x: -.782,
								y: 21.277,
								sx: .641,
								sy: .637
							},
							27: {
								x: -.705,
								y: 20.972,
								sx: .627,
								sy: .623,
								a: .35
							},
							28: {
								x: -.677,
								y: 20.668,
								sx: .614,
								sy: .609,
								a: .34
							},
							29: {
								x: 0,
								y: 19.85,
								sx: .6,
								sy: .595
							},
							30: {
								x: -.05,
								y: 20.149,
								sx: .613,
								sy: .609
							},
							31: {
								x: -.1,
								y: 20.449,
								sx: .627,
								sy: .622,
								a: .35
							},
							32: {
								x: -.15,
								y: 20.7,
								sx: .64,
								sy: .636,
								a: .36
							},
							33: {
								y: 20.999,
								sx: .653,
								sy: .649
							},
							34: {
								x: -.2,
								y: 21.249,
								sx: .667,
								sy: .663
							},
							35: {
								x: -.25,
								y: 21.549,
								sx: .68,
								sy: .676,
								a: .37
							},
							36: {
								x: -.3,
								y: 21.799,
								sx: .693,
								sy: .69,
								a: .38
							},
							37: {
								x: -.25,
								y: 22.099,
								sx: .707,
								sy: .703
							},
							38: {
								x: -.3,
								y: 22.348,
								sx: .72,
								sy: .717
							},
							39: {
								x: -.35,
								y: 22.648,
								sx: .733,
								sy: .73,
								a: .39
							},
							40: {
								x: -.4,
								y: 22.899,
								sx: .747,
								sy: .744
							},
							41: {
								y: 23.198,
								sx: .76,
								sy: .757,
								a: .4
							},
							42: {
								x: -.45,
								y: 23.498,
								sx: .773,
								sy: .771
							},
							43: {
								x: -.5,
								y: 23.748,
								sx: .787,
								sy: .784,
								a: .41
							},
							44: {
								x: -.55,
								y: 24.048,
								sx: .8,
								sy: .798
							},
							45: {
								y: 24.248,
								sx: .813,
								sy: .811,
								a: .42
							},
							46: {
								x: -.6,
								y: 24.547,
								sx: .827,
								sy: .825,
								a: .43
							},
							47: {
								x: -.65,
								y: 24.798,
								sx: .84,
								sy: .838
							},
							48: {
								y: 25.097,
								sx: .853,
								sy: .852
							},
							49: {
								x: -.7,
								y: 25.347,
								sx: .867,
								sy: .865,
								a: .44
							},
							50: {
								x: -.75,
								y: 25.647,
								sx: .88,
								sy: .879,
								a: .45
							},
							51: {
								x: -.8,
								y: 25.897,
								sx: .893,
								sy: .892
							},
							52: {
								x: -.75,
								y: 26.197,
								sx: .907,
								sy: .906
							},
							53: {
								x: -.8,
								y: 26.446,
								sx: .92,
								sy: .919,
								a: .46
							},
							54: {
								x: -.85,
								y: 26.746,
								sx: .933,
								sy: .933
							},
							55: {
								x: -.9,
								y: 26.996,
								sx: .947,
								sy: .946,
								a: .47
							},
							56: {
								y: 27.296,
								sx: .96,
								sy: .96
							},
							57: {
								x: -.95,
								y: 27.546,
								sx: .973,
								sy: .973,
								a: .48
							},
							58: {
								x: -1,
								y: 27.846,
								sx: .987,
								sy: .986
							},
							59: {
								x: -2,
								y: 29,
								sx: 1,
								sy: 1,
								a: .49
							}
						})
						.addTimedChild(a, 0, 60, {
							0: {
								x: 0,
								y: 0,
								sx: .589,
								sy: .476
							},
							1: {
								x: .05,
								y: -1.45,
								sy: .48
							},
							2: {
								y: -2.9,
								sy: .484
							},
							3: {
								y: -4.35,
								sy: .488
							},
							4: {
								y: -5.75,
								sy: .492
							},
							5: {
								y: -7.2,
								sy: .496
							},
							6: {
								y: -8.65,
								sy: .5
							},
							7: {
								y: -10.1,
								sy: .503
							},
							8: {
								y: -11.55,
								sy: .507
							},
							9: {
								y: -13,
								sy: .511
							},
							10: {
								y: -14.45,
								sy: .515
							},
							11: {
								y: -15.85,
								sy: .519
							},
							12: {
								y: -17.3,
								sy: .523
							},
							13: {
								y: -18.75,
								sy: .527
							},
							14: {
								y: -20.2,
								sy: .531
							},
							15: {
								y: -21.65,
								sy: .535
							},
							16: {
								y: -23.1,
								sy: .539
							},
							17: {
								y: -24.55,
								sy: .542
							},
							18: {
								y: -26.05,
								sy: .546
							},
							19: {
								y: -27.45,
								sy: .55
							},
							20: {
								y: -28.9,
								sy: .554
							},
							21: {
								y: -30.35,
								sy: .558
							},
							22: {
								y: -31.8,
								sy: .562
							},
							23: {
								y: -33.25,
								sy: .566
							},
							24: {
								y: -34.7,
								sy: .57
							},
							25: {
								y: -36.15,
								sy: .574
							},
							26: {
								y: -37.55,
								sy: .577
							},
							27: {
								y: -39,
								sy: .581
							},
							28: {
								y: -40.45,
								sy: .585
							},
							29: {
								x: 0,
								y: -41.9,
								sy: .589
							},
							30: {
								x: .05,
								y: -40.481,
								sy: .585
							},
							31: {
								y: -39.064,
								sy: .582
							},
							32: {
								y: -37.646,
								sy: .578
							},
							33: {
								y: -36.278,
								sy: .574
							},
							34: {
								y: -34.86,
								sy: .57
							},
							35: {
								y: -33.492,
								sy: .567
							},
							36: {
								y: -32.074,
								sy: .563
							},
							37: {
								y: -30.707,
								sy: .559
							},
							38: {
								y: -29.289,
								sy: .555
							},
							39: {
								y: -27.921,
								sy: .551
							},
							40: {
								y: -26.503,
								sy: .548
							},
							41: {
								y: -25.135,
								sy: .544
							},
							42: {
								y: -23.718,
								sy: .54
							},
							43: {
								y: -22.3,
								sy: .536
							},
							44: {
								y: -20.882,
								sy: .533
							},
							45: {
								y: -19.514,
								sy: .529
							},
							46: {
								y: -18.096,
								sy: .525
							},
							47: {
								y: -16.729,
								sy: .521
							},
							48: {
								y: -15.311,
								sy: .518
							},
							49: {
								y: -13.943,
								sy: .514
							},
							50: {
								y: -12.525,
								sy: .51
							},
							51: {
								y: -11.157,
								sy: .506
							},
							52: {
								y: -9.74,
								sy: .503
							},
							53: {
								y: -8.372,
								sy: .499
							},
							54: {
								y: -6.904,
								sy: .495
							},
							55: {
								y: -5.536,
								sy: .491
							},
							56: {
								y: -4.118,
								sy: .487
							},
							57: {
								y: -2.751,
								sy: .484
							},
							58: {
								y: -1.333,
								sy: .48
							},
							59: {
								x: 0,
								y: 0,
								sy: .476
							}
						})
				})), e.a1_28 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_64"));
					this.addChild(s)
				})), e.buffImg3s = a.extend((function() {
					a.call(this);
					var s = new i(n("buffImgs5"))
						.setTransform(0, -101);
					this.addChild(s)
				})), e.buffImg3 = t.extend((function() {
					t.call(this, {
						duration: 40
					});
					var s = new e.buffImg3s;
					this.addTimedChild(s, 0, 40, {
						0: {
							x: -610.3,
							y: -778.6,
							kx: 0,
							ky: 0,
							r: 0
						},
						1: {
							x: -477.48,
							y: -866.287,
							r: .161
						},
						2: {
							x: -332.212,
							y: -931.635,
							r: .322
						},
						3: {
							x: -178.433,
							y: -972.814,
							r: .483
						},
						4: {
							x: -19.97,
							y: -988.768,
							r: .644
						},
						5: {
							x: 138.904,
							y: -979.144,
							r: .806
						},
						6: {
							x: 294.189,
							y: -944.17,
							r: .967
						},
						7: {
							x: 441.947,
							y: -884.691,
							r: 1.128
						},
						8: {
							x: 578.2,
							y: -802.278,
							r: 1.289
						},
						9: {
							x: 699.481,
							y: -699.069,
							r: 1.45
						},
						10: {
							x: 802.575,
							y: -577.756,
							kx: 4.672,
							ky: 1.611,
							r: 0
						},
						11: {
							x: 884.942,
							y: -441.437,
							kx: 4.511,
							ky: 1.772
						},
						12: {
							x: 944.363,
							y: -293.748,
							kx: 4.35,
							ky: 1.933
						},
						13: {
							x: 979.271,
							y: -138.411,
							kx: 4.189,
							ky: 2.094
						},
						14: {
							x: 988.881,
							y: 20.557,
							kx: 4.028,
							ky: 2.256
						},
						15: {
							x: 972.817,
							y: 178.915,
							kx: 3.867,
							ky: 2.417
						},
						16: {
							x: 931.628,
							y: 332.764,
							kx: 3.705,
							ky: 2.578
						},
						17: {
							x: 866.23,
							y: 477.928,
							kx: 3.544,
							ky: 2.739
						},
						18: {
							x: 778.467,
							y: 610.743,
							kx: 3.383,
							ky: 2.9
						},
						19: {
							x: 670.4,
							y: 727.774,
							kx: 3.222,
							ky: 3.061
						},
						20: {
							x: 545.083,
							y: 825.915,
							kx: 0,
							ky: 0,
							r: -3.061
						},
						21: {
							x: 405.552,
							y: 902.743,
							r: -2.9
						},
						22: {
							x: 255.582,
							y: 956.145,
							r: -2.739
						},
						23: {
							x: 98.973,
							y: 984.781,
							r: -2.578
						},
						24: {
							x: -60.261,
							y: 987.983,
							r: -2.417
						},
						25: {
							x: -217.848,
							y: 965.562,
							r: -2.256
						},
						26: {
							x: -369.908,
							y: 918.163,
							r: -2.094
						},
						27: {
							x: -512.339,
							y: 847.029,
							r: -1.933
						},
						28: {
							x: -641.501,
							y: 753.917,
							r: -1.772
						},
						29: {
							x: -754.092,
							y: 641.288,
							r: -1.611
						},
						30: {
							x: -847.111,
							y: 512.128,
							r: -1.45
						},
						31: {
							x: -918.256,
							y: 369.62,
							r: -1.289
						},
						32: {
							x: -965.544,
							y: 217.6,
							r: -1.128
						},
						33: {
							x: -987.912,
							y: 59.875,
							r: -.967
						},
						34: {
							x: -984.636,
							y: -99.257,
							r: -.806
						},
						35: {
							x: -955.937,
							y: -255.82,
							r: -.644
						},
						36: {
							x: -902.45,
							y: -405.862,
							r: -.483
						},
						37: {
							x: -825.598,
							y: -545.295,
							r: -.322
						},
						38: {
							x: -727.358,
							y: -670.64,
							r: -.161
						},
						39: {
							x: -610.3,
							y: -778.6,
							r: 0
						}
					})
				})), e.buffEffect3 = a.extend((function() {
					a.call(this);
					var s = (new e.buffImg3)
						.setTransform(208.3, 109.1),
						t = new i(n("buffImgs2"));
					this.addChild(s, t)
				})), e.buffs2Move = a.extend((function() {
					a.call(this);
					var s = new i(n("buffImgs4"));
					this.addChild(s)
				})), e.buffEffect2 = t.extend((function() {
					t.call(this, {
						duration: 12
					});
					var s = new i(n("buffImgs3")),
						a = new e.buffs2Move;
					this.addTimedChild(s)
						.addTimedChild(a, 0, 12, {
							0: {
								x: -268,
								y: 5,
								ky: 0
							},
							6: {
								x: 602,
								ky: 3.142
							},
							11: {
								x: -268,
								ky: 0
							}
						})
				})), e.effect1 = a.extend((function() {
					a.call(this);
					var s = new i(n("buffImgs1"));
					this.addChild(s)
				})), e.buffEffect1 = t.extend((function() {
					t.call(this, {
						duration: 15
					});
					var s = new e.effect1;
					this.addTimedChild(s, 0, 15, {
						0: {
							y: 0,
							a: .31
						},
						1: {
							y: -2.45,
							a: .36
						},
						2: {
							y: -4.95,
							a: .41
						},
						3: {
							y: -7.4,
							a: .46
						},
						4: {
							y: -9.85,
							a: .51
						},
						5: {
							y: -12.35,
							a: .55
						},
						6: {
							y: -14.8,
							a: .61
						},
						7: {
							y: -17.25,
							a: .66
						},
						8: {
							y: -19.75,
							a: .7
						},
						9: {
							y: -22.2,
							a: .75
						},
						10: {
							y: -24.7,
							a: .8
						},
						11: {
							y: -27.15,
							a: .85
						},
						12: {
							y: -29.6,
							a: .9
						},
						13: {
							y: -32.1,
							a: .95
						},
						14: {
							y: -34.55,
							a: 1
						}
					})
				})), e.gameBox = a.extend((function() {
					a.call(this)
				})), e.text2022 = a.extend((function() {
					a.call(this);
					var s = new i(n("2022"));
					this.addChild(s)
				})), e.a1_38 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_72"));
					this.addChild(s)
				})), e.a1_39 = t.extend((function() {
					t.call(this, {
						duration: 50
					});
					var s = new e.a1_38,
						a = new e.a1_38,
						i = new e.a1_38,
						n = new e.a1_38,
						y = new e.a1_38;
					this.addTimedChild(s, 0, 50, {
							0: {
								x: 189.45,
								y: 56.8,
								sx: .227,
								sy: .227,
								a: 0
							},
							1: {
								x: 189.41,
								y: 56.583,
								sx: .23,
								sy: .23,
								a: .02
							},
							2: {
								x: 189.323,
								y: 56.316,
								sx: .232,
								sy: .232,
								a: .04
							},
							3: {
								x: 189.275,
								y: 56.096,
								sx: .235,
								sy: .235,
								a: .06
							},
							4: {
								x: 189.238,
								y: 55.83,
								sx: .237,
								sy: .237,
								a: .08
							},
							5: {
								x: 189.151,
								y: 55.563,
								sx: .24,
								sy: .24,
								a: .1
							},
							6: {
								x: 189.114,
								y: 55.297,
								sx: .242,
								sy: .242,
								a: .12
							},
							7: {
								x: 189.028,
								y: 55.081,
								sx: .245,
								sy: .245,
								a: .14
							},
							8: {
								x: 188.941,
								y: 54.814,
								sx: .247,
								sy: .247,
								a: .16
							},
							9: {
								x: 188.94,
								y: 54.543,
								sx: .25,
								sy: .25,
								a: .18
							},
							10: {
								x: 188.803,
								y: 54.327,
								sx: .252,
								sy: .252,
								a: .2
							},
							11: {
								x: 188.766,
								y: 54.06,
								sx: .255,
								sy: .255,
								a: .22
							},
							12: {
								x: 188.729,
								y: 53.794,
								sx: .257,
								sy: .257,
								a: .25
							},
							13: {
								x: 188.642,
								y: 53.578,
								sx: .26,
								sy: .26,
								a: .27
							},
							14: {
								x: 188.594,
								y: 53.308,
								sx: .263,
								sy: .263,
								a: .29
							},
							15: {
								x: 188.507,
								y: 53.041,
								sx: .265,
								sy: .265,
								a: .3
							},
							16: {
								x: 188.47,
								y: 52.825,
								sx: .268,
								sy: .268,
								a: .33
							},
							17: {
								x: 188.383,
								y: 52.558,
								sx: .27,
								sy: .27,
								a: .35
							},
							18: {
								x: 188.296,
								y: 52.292,
								sx: .273,
								sy: .273,
								a: .37
							},
							19: {
								x: 188.26,
								y: 52.025,
								sx: .275,
								sy: .275,
								a: .39
							},
							20: {
								x: 188.208,
								y: 51.805,
								sx: .278,
								sy: .278,
								a: .41
							},
							21: {
								x: 188.121,
								y: 51.538,
								sx: .28,
								sy: .28,
								a: .43
							},
							22: {
								x: 188.085,
								y: 51.322,
								sx: .283,
								sy: .283,
								a: .45
							},
							23: {
								x: 188.048,
								y: 51.055,
								sx: .285,
								sy: .285,
								a: .47
							},
							24: {
								x: 187.911,
								y: 50.739,
								sx: .288,
								sy: .288,
								a: .49
							},
							25: {
								x: 187.912,
								y: 50.519,
								sx: .29,
								sy: .29,
								a: .51
							},
							26: {
								x: 187.776,
								y: 50.253,
								sx: .293,
								sy: .293,
								a: .53
							},
							27: {
								x: 187.739,
								y: 49.986,
								sx: .295,
								sy: .295,
								a: .55
							},
							28: {
								x: 187.702,
								y: 49.72,
								sx: .298,
								sy: .298,
								a: .57
							},
							29: {
								x: 187.612,
								y: 49.502,
								sx: .3,
								sy: .3,
								a: .59
							},
							30: {
								x: 187.564,
								y: 49.232,
								sx: .303,
								sy: .303,
								a: .61
							},
							31: {
								x: 187.527,
								y: 48.966,
								sx: .306,
								sy: .306,
								a: .63
							},
							32: {
								x: 187.44,
								y: 48.75,
								sx: .308,
								sy: .308,
								a: .65
							},
							33: {
								x: 187.353,
								y: 48.483,
								sx: .311,
								sy: .311,
								a: .67
							},
							34: {
								x: 187.316,
								y: 48.217,
								sx: .313,
								sy: .313,
								a: .7
							},
							35: {
								x: 187.23,
								y: 48,
								sx: .316,
								sy: .316,
								a: .71
							},
							36: {
								x: 187.178,
								y: 47.729,
								sx: .318,
								sy: .318,
								a: .73
							},
							37: {
								x: 187.091,
								y: 47.463,
								sx: .321,
								sy: .321,
								a: .75
							},
							38: {
								x: 187.055,
								y: 47.247,
								sx: .323,
								sy: .323,
								a: .78
							},
							39: {
								x: 187.018,
								y: 46.98,
								sx: .326,
								sy: .326,
								a: .8
							},
							40: {
								x: 186.881,
								y: 46.714,
								sx: .328,
								sy: .328,
								a: .82
							},
							41: {
								x: 186.833,
								y: 46.494,
								sx: .331,
								sy: .331,
								a: .84
							},
							42: {
								x: 186.796,
								y: 46.227,
								sx: .333,
								sy: .333,
								a: .86
							},
							43: {
								x: 186.709,
								y: 45.961,
								sx: .336,
								sy: .336,
								a: .88
							},
							44: {
								x: 186.672,
								y: 45.694,
								sx: .338,
								sy: .338,
								a: .9
							},
							45: {
								x: 186.585,
								y: 45.478,
								sx: .341,
								sy: .341,
								a: .92
							},
							46: {
								x: 186.548,
								y: 45.212,
								sx: .343,
								sy: .343,
								a: .94
							},
							47: {
								x: 186.497,
								y: 44.941,
								sx: .346,
								sy: .346,
								a: .96
							},
							48: {
								x: 186.36,
								y: 44.724,
								sx: .349,
								sy: .349,
								a: .98
							},
							49: {
								x: 186.3,
								y: 44.5,
								sx: .351,
								sy: .351,
								a: 1
							}
						})
						.addTimedChild(a, 0, 50, {
							0: {
								x: 186.3,
								y: 44.5,
								sx: .351,
								sy: .351
							},
							1: {
								x: 187.395,
								y: 45.4,
								sx: .355,
								sy: .355
							},
							2: {
								x: 188.443,
								y: 46.202,
								sx: .359,
								sy: .359
							},
							3: {
								x: 189.532,
								y: 47.051,
								sx: .363,
								sy: .363
							},
							4: {
								x: 190.577,
								y: 47.901,
								sx: .367,
								sy: .367
							},
							5: {
								x: 191.575,
								y: 48.752,
								sx: .371,
								sy: .371
							},
							6: {
								x: 192.673,
								y: 49.553,
								sx: .375,
								sy: .375
							},
							7: {
								x: 193.721,
								y: 50.404,
								sx: .379,
								sy: .379
							},
							8: {
								x: 194.766,
								y: 51.255,
								sx: .383,
								sy: .383
							},
							9: {
								x: 195.856,
								y: 52.154,
								sx: .387,
								sy: .387
							},
							10: {
								x: 196.904,
								y: 52.955,
								sx: .391,
								sy: .391
							},
							11: {
								x: 198.002,
								y: 53.806,
								sx: .395,
								sy: .395
							},
							12: {
								x: 199.047,
								y: 54.657,
								sx: .398,
								sy: .398
							},
							13: {
								x: 200.095,
								y: 55.508,
								sx: .402,
								sy: .402
							},
							14: {
								x: 201.192,
								y: 56.309,
								sx: .406,
								sy: .406
							},
							15: {
								x: 202.182,
								y: 57.158,
								sx: .41,
								sy: .41
							},
							16: {
								x: 203.277,
								y: 58.008,
								sx: .414,
								sy: .414
							},
							17: {
								x: 204.325,
								y: 58.859,
								sx: .418,
								sy: .418
							},
							18: {
								x: 205.373,
								y: 59.711,
								sx: .422,
								sy: .422
							},
							19: {
								x: 206.421,
								y: 60.562,
								sx: .426,
								sy: .426
							},
							20: {
								x: 207.507,
								y: 61.41,
								sx: .43,
								sy: .43
							},
							21: {
								x: 208.555,
								y: 62.211,
								sx: .434,
								sy: .434
							},
							22: {
								x: 209.653,
								y: 63.062,
								sx: .438,
								sy: .438
							},
							23: {
								x: 210.701,
								y: 63.913,
								sx: .442,
								sy: .442
							},
							24: {
								x: 211.746,
								y: 64.764,
								sx: .446,
								sy: .446
							},
							25: {
								x: 212.786,
								y: 65.563,
								sx: .45,
								sy: .45
							},
							26: {
								x: 213.833,
								y: 66.414,
								sx: .454,
								sy: .454
							},
							27: {
								x: 214.931,
								y: 67.315,
								sx: .458,
								sy: .458
							},
							28: {
								x: 215.979,
								y: 68.166,
								sx: .462,
								sy: .462
							},
							29: {
								x: 217.024,
								y: 68.967,
								sx: .466,
								sy: .466
							},
							30: {
								x: 218.114,
								y: 69.816,
								sx: .47,
								sy: .47
							},
							31: {
								x: 219.162,
								y: 70.667,
								sx: .473,
								sy: .473
							},
							32: {
								x: 220.21,
								y: 71.518,
								sx: .477,
								sy: .477
							},
							33: {
								x: 221.305,
								y: 72.318,
								sx: .481,
								sy: .481
							},
							34: {
								x: 222.353,
								y: 73.17,
								sx: .485,
								sy: .485
							},
							35: {
								x: 223.392,
								y: 74.019,
								sx: .489,
								sy: .489
							},
							36: {
								x: 224.44,
								y: 74.87,
								sx: .493,
								sy: .493
							},
							37: {
								x: 225.485,
								y: 75.72,
								sx: .497,
								sy: .497
							},
							38: {
								x: 226.583,
								y: 76.571,
								sx: .501,
								sy: .501
							},
							39: {
								x: 227.631,
								y: 77.422,
								sx: .505,
								sy: .505
							},
							40: {
								x: 228.679,
								y: 78.224,
								sx: .509,
								sy: .509
							},
							41: {
								x: 229.765,
								y: 79.072,
								sx: .513,
								sy: .513
							},
							42: {
								x: 230.813,
								y: 79.923,
								sx: .517,
								sy: .517
							},
							43: {
								x: 231.861,
								y: 80.774,
								sx: .521,
								sy: .521
							},
							44: {
								x: 232.959,
								y: 81.575,
								sx: .525,
								sy: .525
							},
							45: {
								x: 233.954,
								y: 82.426,
								sx: .529,
								sy: .529
							},
							46: {
								x: 235.002,
								y: 83.327,
								sx: .533,
								sy: .533
							},
							47: {
								x: 236.091,
								y: 84.176,
								sx: .537,
								sy: .537
							},
							48: {
								x: 237.139,
								y: 84.977,
								sx: .541,
								sy: .541
							},
							49: {
								x: 238.2,
								y: 85.75,
								sx: .545,
								sy: .545
							}
						})
						.addTimedChild(i, 0, 50, {
							0: {
								x: 238.2,
								y: 85.75,
								sx: .545,
								sy: .545
							},
							1: {
								x: 240.562,
								y: 87.488,
								sx: .549,
								sy: .549
							},
							2: {
								x: 242.977,
								y: 89.228,
								sx: .553,
								sy: .553
							},
							3: {
								x: 245.343,
								y: 90.967,
								sx: .558,
								sy: .558
							},
							4: {
								x: 247.715,
								y: 92.66,
								sx: .562,
								sy: .562
							},
							5: {
								x: 250.081,
								y: 94.399,
								sx: .566,
								sy: .566
							},
							6: {
								x: 252.446,
								y: 96.139,
								sx: .571,
								sy: .571
							},
							7: {
								x: 254.812,
								y: 97.878,
								sx: .575,
								sy: .575
							},
							8: {
								x: 257.127,
								y: 99.618,
								sx: .58,
								sy: .58
							},
							9: {
								x: 259.543,
								y: 101.357,
								sx: .584,
								sy: .584
							},
							10: {
								x: 261.908,
								y: 103.097,
								sx: .588,
								sy: .588
							},
							11: {
								x: 264.281,
								y: 104.789,
								sx: .593,
								sy: .593
							},
							12: {
								x: 266.646,
								y: 106.529,
								sx: .597,
								sy: .597
							},
							13: {
								x: 269.012,
								y: 108.218,
								sx: .602,
								sy: .602
							},
							14: {
								x: 271.377,
								y: 109.958,
								sx: .606,
								sy: .606
							},
							15: {
								x: 273.693,
								y: 111.697,
								sx: .61,
								sy: .61
							},
							16: {
								x: 276.108,
								y: 113.437,
								sx: .615,
								sy: .615
							},
							17: {
								x: 278.474,
								y: 115.176,
								sx: .619,
								sy: .619
							},
							18: {
								x: 280.839,
								y: 116.866,
								sx: .623,
								sy: .623
							},
							19: {
								x: 283.212,
								y: 118.608,
								sx: .628,
								sy: .628
							},
							20: {
								x: 285.577,
								y: 120.348,
								sx: .632,
								sy: .632
							},
							21: {
								x: 287.943,
								y: 122.087,
								sx: .637,
								sy: .637
							},
							22: {
								x: 290.308,
								y: 123.827,
								sx: .641,
								sy: .641
							},
							23: {
								x: 292.674,
								y: 125.566,
								sx: .645,
								sy: .645
							},
							24: {
								x: 295.039,
								y: 127.306,
								sx: .65,
								sy: .65
							},
							25: {
								x: 297.408,
								y: 128.947,
								sx: .654,
								sy: .654
							},
							26: {
								x: 299.774,
								y: 130.686,
								sx: .658,
								sy: .658
							},
							27: {
								x: 302.139,
								y: 132.426,
								sx: .663,
								sy: .663
							},
							28: {
								x: 304.505,
								y: 134.165,
								sx: .667,
								sy: .667
							},
							29: {
								x: 306.87,
								y: 135.905,
								sx: .672,
								sy: .672
							},
							30: {
								x: 309.236,
								y: 137.644,
								sx: .676,
								sy: .676
							},
							31: {
								x: 311.608,
								y: 139.386,
								sx: .68,
								sy: .68
							},
							32: {
								x: 313.974,
								y: 141.076,
								sx: .685,
								sy: .685
							},
							33: {
								x: 316.339,
								y: 142.816,
								sx: .689,
								sy: .689
							},
							34: {
								x: 318.705,
								y: 144.555,
								sx: .694,
								sy: .694
							},
							35: {
								x: 321.07,
								y: 146.295,
								sx: .698,
								sy: .698
							},
							36: {
								x: 323.436,
								y: 148.034,
								sx: .702,
								sy: .702
							},
							37: {
								x: 325.801,
								y: 149.774,
								sx: .707,
								sy: .707
							},
							38: {
								x: 328.166,
								y: 151.513,
								sx: .711,
								sy: .711
							},
							39: {
								x: 330.539,
								y: 153.155,
								sx: .715,
								sy: .715
							},
							40: {
								x: 332.905,
								y: 154.895,
								sx: .72,
								sy: .72
							},
							41: {
								x: 335.27,
								y: 156.635,
								sx: .724,
								sy: .724
							},
							42: {
								x: 337.636,
								y: 158.374,
								sx: .729,
								sy: .729
							},
							43: {
								x: 340.001,
								y: 160.114,
								sx: .733,
								sy: .733
							},
							44: {
								x: 342.366,
								y: 161.853,
								sx: .737,
								sy: .737
							},
							45: {
								x: 344.732,
								y: 163.593,
								sx: .742,
								sy: .742
							},
							46: {
								x: 347.105,
								y: 165.285,
								sx: .746,
								sy: .746
							},
							47: {
								x: 349.47,
								y: 167.024,
								sx: .751,
								sy: .751
							},
							48: {
								x: 351.836,
								y: 168.764,
								sx: .755,
								sy: .755
							},
							49: {
								x: 354.1,
								y: 170.55,
								sx: .759,
								sy: .759
							}
						})
						.addTimedChild(n, 0, 50, {
							0: {
								x: 354.1,
								y: 170.55,
								sx: .759,
								sy: .759
							},
							1: {
								x: 355.936,
								y: 171.651,
								sx: .764,
								sy: .764
							},
							2: {
								x: 357.726,
								y: 172.754,
								sx: .769,
								sy: .769
							},
							3: {
								x: 359.517,
								y: 173.808,
								sx: .774,
								sy: .774
							},
							4: {
								x: 361.358,
								y: 174.861,
								sx: .779,
								sy: .779
							},
							5: {
								x: 363.149,
								y: 175.964,
								sx: .784,
								sy: .784
							},
							6: {
								x: 364.896,
								y: 177.07,
								sx: .789,
								sy: .789
							},
							7: {
								x: 366.686,
								y: 178.124,
								sx: .794,
								sy: .794
							},
							8: {
								x: 368.477,
								y: 179.177,
								sx: .799,
								sy: .799
							},
							9: {
								x: 370.268,
								y: 180.281,
								sx: .803,
								sy: .803
							},
							10: {
								x: 372.059,
								y: 181.384,
								sx: .808,
								sy: .808
							},
							11: {
								x: 373.9,
								y: 182.438,
								sx: .813,
								sy: .813
							},
							12: {
								x: 375.691,
								y: 183.541,
								sx: .818,
								sy: .818
							},
							13: {
								x: 377.477,
								y: 184.592,
								sx: .823,
								sy: .823
							},
							14: {
								x: 379.273,
								y: 185.648,
								sx: .828,
								sy: .828
							},
							15: {
								x: 381.059,
								y: 186.749,
								sx: .833,
								sy: .833
							},
							16: {
								x: 382.799,
								y: 187.852,
								sx: .838,
								sy: .838
							},
							17: {
								x: 384.64,
								y: 188.955,
								sx: .843,
								sy: .843
							},
							18: {
								x: 386.431,
								y: 189.959,
								sx: .848,
								sy: .848
							},
							19: {
								x: 388.222,
								y: 191.062,
								sx: .853,
								sy: .853
							},
							20: {
								x: 390.013,
								y: 192.166,
								sx: .858,
								sy: .858
							},
							21: {
								x: 391.804,
								y: 193.219,
								sx: .862,
								sy: .862
							},
							22: {
								x: 393.6,
								y: 194.325,
								sx: .867,
								sy: .867
							},
							23: {
								x: 395.391,
								y: 195.378,
								sx: .872,
								sy: .872
							},
							24: {
								x: 397.232,
								y: 196.482,
								sx: .877,
								sy: .877
							},
							25: {
								x: 398.973,
								y: 197.535,
								sx: .882,
								sy: .882
							},
							26: {
								x: 400.764,
								y: 198.639,
								sx: .887,
								sy: .887
							},
							27: {
								x: 402.555,
								y: 199.692,
								sx: .892,
								sy: .892
							},
							28: {
								x: 404.346,
								y: 200.746,
								sx: .897,
								sy: .897
							},
							29: {
								x: 406.137,
								y: 201.849,
								sx: .902,
								sy: .902
							},
							30: {
								x: 407.978,
								y: 202.952,
								sx: .907,
								sy: .907
							},
							31: {
								x: 409.769,
								y: 204.056,
								sx: .912,
								sy: .912
							},
							32: {
								x: 411.56,
								y: 205.059,
								sx: .916,
								sy: .916
							},
							33: {
								x: 413.351,
								y: 206.163,
								sx: .921,
								sy: .921
							},
							34: {
								x: 415.147,
								y: 207.269,
								sx: .926,
								sy: .926
							},
							35: {
								x: 416.877,
								y: 208.367,
								sx: .931,
								sy: .931
							},
							36: {
								x: 418.679,
								y: 209.425,
								sx: .936,
								sy: .936
							},
							37: {
								x: 420.509,
								y: 210.474,
								sx: .941,
								sy: .941
							},
							38: {
								x: 422.305,
								y: 211.58,
								sx: .946,
								sy: .946
							},
							39: {
								x: 424.096,
								y: 212.633,
								sx: .951,
								sy: .951
							},
							40: {
								x: 425.887,
								y: 213.736,
								sx: .956,
								sy: .956
							},
							41: {
								x: 427.678,
								y: 214.84,
								sx: .961,
								sy: .961
							},
							42: {
								x: 429.469,
								y: 215.893,
								sx: .966,
								sy: .966
							},
							43: {
								x: 431.31,
								y: 216.947,
								sx: .971,
								sy: .971
							},
							44: {
								x: 433.101,
								y: 218.05,
								sx: .975,
								sy: .975
							},
							45: {
								x: 434.842,
								y: 219.154,
								sx: .98,
								sy: .98
							},
							46: {
								x: 436.633,
								y: 220.207,
								sx: .985,
								sy: .985
							},
							47: {
								x: 438.424,
								y: 221.26,
								sx: .99,
								sy: .99
							},
							48: {
								x: 440.215,
								y: 222.364,
								sx: .995,
								sy: .995
							},
							49: {
								x: 442.05,
								y: 223.4,
								sx: 1,
								sy: 1
							}
						})
						.addTimedChild(y, 0, 50, {
							0: {
								x: 442.05,
								y: 223.4,
								sx: 1,
								sy: 1
							},
							1: {
								x: 445.021,
								y: 224.85,
								sx: 1.006,
								sy: 1.006
							},
							2: {
								x: 447.992,
								y: 226.3,
								sx: 1.012,
								sy: 1.012
							},
							3: {
								x: 450.963,
								y: 227.65,
								sx: 1.018,
								sy: 1.018
							},
							4: {
								x: 453.884,
								y: 229.1,
								sx: 1.024,
								sy: 1.024
							},
							5: {
								x: 456.799,
								y: 230.496,
								sx: 1.03,
								sy: 1.03
							},
							6: {
								x: 459.77,
								y: 231.946,
								sx: 1.036,
								sy: 1.036
							},
							7: {
								x: 462.741,
								y: 233.296,
								sx: 1.042,
								sy: 1.042
							},
							8: {
								x: 465.662,
								y: 234.746,
								sx: 1.048,
								sy: 1.048
							},
							9: {
								x: 468.633,
								y: 236.146,
								sx: 1.054,
								sy: 1.054
							},
							10: {
								x: 471.554,
								y: 237.595,
								sx: 1.06,
								sy: 1.06
							},
							11: {
								x: 474.575,
								y: 238.995,
								sx: 1.066,
								sy: 1.066
							},
							12: {
								x: 477.496,
								y: 240.395,
								sx: 1.072,
								sy: 1.072
							},
							13: {
								x: 480.417,
								y: 241.845,
								sx: 1.079,
								sy: 1.079
							},
							14: {
								x: 483.388,
								y: 243.245,
								sx: 1.085,
								sy: 1.085
							},
							15: {
								x: 486.353,
								y: 244.692,
								sx: 1.091,
								sy: 1.091
							},
							16: {
								x: 489.28,
								y: 246.045,
								sx: 1.097,
								sy: 1.097
							},
							17: {
								x: 492.245,
								y: 247.491,
								sx: 1.103,
								sy: 1.103
							},
							18: {
								x: 495.166,
								y: 248.891,
								sx: 1.109,
								sy: 1.109
							},
							19: {
								x: 498.137,
								y: 250.341,
								sx: 1.115,
								sy: 1.115
							},
							20: {
								x: 501.108,
								y: 251.691,
								sx: 1.121,
								sy: 1.121
							},
							21: {
								x: 504.029,
								y: 253.141,
								sx: 1.127,
								sy: 1.127
							},
							22: {
								x: 507,
								y: 254.541,
								sx: 1.133,
								sy: 1.133
							},
							23: {
								x: 509.971,
								y: 255.991,
								sx: 1.139,
								sy: 1.139
							},
							24: {
								x: 512.886,
								y: 257.437,
								sx: 1.145,
								sy: 1.145
							},
							25: {
								x: 515.863,
								y: 258.79,
								sx: 1.151,
								sy: 1.151
							},
							26: {
								x: 518.778,
								y: 260.237,
								sx: 1.157,
								sy: 1.157
							},
							27: {
								x: 521.749,
								y: 261.637,
								sx: 1.163,
								sy: 1.163
							},
							28: {
								x: 524.72,
								y: 263.087,
								sx: 1.169,
								sy: 1.169
							},
							29: {
								x: 527.641,
								y: 264.487,
								sx: 1.175,
								sy: 1.175
							},
							30: {
								x: 530.562,
								y: 265.886,
								sx: 1.181,
								sy: 1.181
							},
							31: {
								x: 533.583,
								y: 267.286,
								sx: 1.187,
								sy: 1.187
							},
							32: {
								x: 536.504,
								y: 268.736,
								sx: 1.193,
								sy: 1.193
							},
							33: {
								x: 539.469,
								y: 270.133,
								sx: 1.199,
								sy: 1.199
							},
							34: {
								x: 542.396,
								y: 271.536,
								sx: 1.205,
								sy: 1.205
							},
							35: {
								x: 545.361,
								y: 272.983,
								sx: 1.211,
								sy: 1.211
							},
							36: {
								x: 548.332,
								y: 274.382,
								sx: 1.217,
								sy: 1.217
							},
							37: {
								x: 551.253,
								y: 275.832,
								sx: 1.224,
								sy: 1.224
							},
							38: {
								x: 554.174,
								y: 277.182,
								sx: 1.23,
								sy: 1.23
							},
							39: {
								x: 557.195,
								y: 278.632,
								sx: 1.236,
								sy: 1.236
							},
							40: {
								x: 560.116,
								y: 280.032,
								sx: 1.242,
								sy: 1.242
							},
							41: {
								x: 563.087,
								y: 281.482,
								sx: 1.248,
								sy: 1.248
							},
							42: {
								x: 566.008,
								y: 282.882,
								sx: 1.254,
								sy: 1.254
							},
							43: {
								x: 568.979,
								y: 284.282,
								sx: 1.26,
								sy: 1.26
							},
							44: {
								x: 571.951,
								y: 285.682,
								sx: 1.266,
								sy: 1.266
							},
							45: {
								x: 574.865,
								y: 287.128,
								sx: 1.272,
								sy: 1.272
							},
							46: {
								x: 577.786,
								y: 288.528,
								sx: 1.278,
								sy: 1.278
							},
							47: {
								x: 580.807,
								y: 289.928,
								sx: 1.284,
								sy: 1.284
							},
							48: {
								x: 583.728,
								y: 291.378,
								sx: 1.29,
								sy: 1.29
							},
							49: {
								x: 586.65,
								y: 292.7,
								sx: 1.296,
								sy: 1.296
							}
						})
				})), e.a1_40 = a.extend((function() {
					a.call(this);
					var s = (new e.a1_39)
						.setTransform(21),
						t = (new e.a1_39)
						.setTransform(300.45, 0, 1, 1, 0, 0, 3.142);
					this.addChild(s, t)
				})), e.shapesMc = a.extend((function() {
					a.call(this);
					var s = new i(n("shapesImg"));
					this.addChild(s)
				})), e.a1_41 = t.extend((function() {
					t.call(this, {
						duration: 27
					});
					var s = new i(n("s1_73")),
						a = new e.shapesMc,
						y = new e.shapesMc,
						r = new e.shapesMc,
						x = new e.shapesMc,
						o = new e.shapesMc;
					this.addTimedChild(s)
						.addTimedChild(a, 0, 27, {
							0: {
								x: 6.5,
								y: 521.8,
								sx: .979,
								sy: .796
							},
							1: {
								x: 3.588,
								y: 530.715,
								sx: .992,
								sy: .808
							},
							2: {
								x: .726,
								y: 539.63,
								sx: 1.005,
								sy: .819
							},
							3: {
								x: -2.186,
								y: 548.554,
								sx: 1.019,
								sy: .831
							},
							4: {
								x: -5.098,
								y: 557.469,
								sx: 1.032,
								sy: .843
							},
							5: {
								x: -8.01,
								y: 566.392,
								sx: 1.045,
								sy: .855
							},
							6: {
								x: -10.922,
								y: 575.315,
								sx: 1.058,
								sy: .867
							},
							7: {
								x: -13.834,
								y: 584.222,
								sx: 1.072,
								sy: .878
							},
							8: {
								x: -16.746,
								y: 593.096,
								sx: 1.085,
								sy: .89
							},
							9: {
								x: -19.658,
								y: 602.019,
								sx: 1.098,
								sy: .902
							},
							10: {
								x: -22.57,
								y: 610.934,
								sx: 1.111,
								sy: .914
							},
							11: {
								x: -25.482,
								y: 619.857,
								sx: 1.125,
								sy: .925
							},
							12: {
								x: -28.344,
								y: 628.772,
								sx: 1.138,
								sy: .937
							},
							13: {
								x: -31.256,
								y: 637.695,
								sx: 1.151,
								sy: .949
							},
							14: {
								x: -34.168,
								y: 646.569,
								sx: 1.164,
								sy: .961
							},
							15: {
								x: -37.08,
								y: 655.476,
								sx: 1.178,
								sy: .972
							},
							16: {
								x: -39.992,
								y: 664.349,
								sx: 1.191,
								sy: .984
							},
							17: {
								x: -42.904,
								y: 673.264,
								sx: 1.204,
								sy: .996
							},
							18: {
								x: -45.816,
								y: 682.188,
								sx: 1.217,
								sy: 1.008
							},
							19: {
								x: -48.728,
								y: 691.111,
								sx: 1.231,
								sy: 1.02
							},
							20: {
								x: -51.64,
								y: 700.026,
								sx: 1.244,
								sy: 1.031
							},
							21: {
								x: -54.502,
								y: 708.949,
								sx: 1.257,
								sy: 1.043
							},
							22: {
								x: -57.414,
								y: 717.822,
								sx: 1.27,
								sy: 1.055
							},
							23: {
								x: -60.326,
								y: 726.73,
								sx: 1.284,
								sy: 1.067
							},
							24: {
								x: -63.238,
								y: 735.653,
								sx: 1.297,
								sy: 1.078
							},
							25: {
								x: -66.15,
								y: 744.568,
								sx: 1.31,
								sy: 1.09
							},
							26: {
								x: -69.05,
								y: 753.45,
								sx: 1.323,
								sy: 1.102
							}
						})
						.addTimedChild(y, 0, 27, {
							0: {
								x: 77.3,
								y: 304.35,
								sx: .656,
								sy: .57
							},
							1: {
								x: 74.565,
								y: 312.78,
								sx: .668,
								sy: .579
							},
							2: {
								x: 71.829,
								y: 321.106,
								sx: .681,
								sy: .588
							},
							3: {
								x: 69.142,
								y: 329.481,
								sx: .693,
								sy: .596
							},
							4: {
								x: 66.407,
								y: 337.811,
								sx: .705,
								sy: .605
							},
							5: {
								x: 63.674,
								y: 346.186,
								sx: .718,
								sy: .614
							},
							6: {
								x: 60.937,
								y: 354.521,
								sx: .73,
								sy: .622
							},
							7: {
								x: 58.253,
								y: 362.897,
								sx: .743,
								sy: .631
							},
							8: {
								x: 55.517,
								y: 371.277,
								sx: .755,
								sy: .64
							},
							9: {
								x: 52.783,
								y: 379.652,
								sx: .768,
								sy: .648
							},
							10: {
								x: 50.047,
								y: 387.987,
								sx: .78,
								sy: .657
							},
							11: {
								x: 47.361,
								y: 396.358,
								sx: .792,
								sy: .666
							},
							12: {
								x: 44.626,
								y: 404.733,
								sx: .805,
								sy: .674
							},
							13: {
								x: 41.891,
								y: 413.118,
								sx: .817,
								sy: .683
							},
							14: {
								x: 39.157,
								y: 421.448,
								sx: .83,
								sy: .692
							},
							15: {
								x: 36.422,
								y: 429.773,
								sx: .842,
								sy: .7
							},
							16: {
								x: 33.736,
								y: 438.149,
								sx: .855,
								sy: .709
							},
							17: {
								x: 30.999,
								y: 446.484,
								sx: .867,
								sy: .718
							},
							18: {
								x: 28.265,
								y: 454.909,
								sx: .879,
								sy: .727
							},
							19: {
								x: 25.529,
								y: 463.289,
								sx: .892,
								sy: .735
							},
							20: {
								x: 22.845,
								y: 471.614,
								sx: .904,
								sy: .744
							},
							21: {
								x: 20.109,
								y: 479.999,
								sx: .917,
								sy: .753
							},
							22: {
								x: 17.375,
								y: 488.32,
								sx: .929,
								sy: .761
							},
							23: {
								x: 14.64,
								y: 496.655,
								sx: .942,
								sy: .77
							},
							24: {
								x: 11.954,
								y: 505.08,
								sx: .954,
								sy: .779
							},
							25: {
								x: 9.218,
								y: 513.406,
								sx: .966,
								sy: .787
							},
							26: {
								x: 6.5,
								y: 521.8,
								sx: .979,
								sy: .796
							}
						})
						.addTimedChild(r, 0, 27, {
							0: {
								x: 124.5,
								y: 159.4,
								sx: .44,
								sy: .419
							},
							1: {
								x: 122.69,
								y: 165.008,
								sx: .449,
								sy: .425
							},
							2: {
								x: 120.883,
								y: 170.612,
								sx: .457,
								sy: .431
							},
							3: {
								x: 119.075,
								y: 176.173,
								sx: .465,
								sy: .437
							},
							4: {
								x: 117.268,
								y: 181.731,
								sx: .474,
								sy: .443
							},
							5: {
								x: 115.46,
								y: 187.335,
								sx: .482,
								sy: .448
							},
							6: {
								x: 113.652,
								y: 192.896,
								sx: .49,
								sy: .454
							},
							7: {
								x: 111.841,
								y: 198.455,
								sx: .498,
								sy: .46
							},
							8: {
								x: 109.983,
								y: 204.061,
								sx: .507,
								sy: .466
							},
							9: {
								x: 108.175,
								y: 209.619,
								sx: .515,
								sy: .472
							},
							10: {
								x: 106.418,
								y: 215.18,
								sx: .523,
								sy: .477
							},
							11: {
								x: 104.56,
								y: 220.784,
								sx: .531,
								sy: .483
							},
							12: {
								x: 102.754,
								y: 226.342,
								sx: .54,
								sy: .489
							},
							13: {
								x: 100.947,
								y: 231.903,
								sx: .548,
								sy: .495
							},
							14: {
								x: 99.089,
								y: 237.507,
								sx: .556,
								sy: .501
							},
							15: {
								x: 97.282,
								y: 243.065,
								sx: .565,
								sy: .506
							},
							16: {
								x: 95.474,
								y: 248.671,
								sx: .573,
								sy: .512
							},
							17: {
								x: 93.716,
								y: 254.23,
								sx: .581,
								sy: .518
							},
							18: {
								x: 91.859,
								y: 259.741,
								sx: .589,
								sy: .524
							},
							19: {
								x: 90.051,
								y: 265.394,
								sx: .598,
								sy: .53
							},
							20: {
								x: 88.239,
								y: 270.953,
								sx: .606,
								sy: .536
							},
							21: {
								x: 86.382,
								y: 276.464,
								sx: .614,
								sy: .541
							},
							22: {
								x: 84.574,
								y: 282.117,
								sx: .623,
								sy: .547
							},
							23: {
								x: 82.817,
								y: 287.628,
								sx: .631,
								sy: .553
							},
							24: {
								x: 80.959,
								y: 293.187,
								sx: .639,
								sy: .559
							},
							25: {
								x: 79.151,
								y: 298.84,
								sx: .647,
								sy: .565
							},
							26: {
								x: 77.3,
								y: 304.35,
								sx: .656,
								sy: .57
							}
						})
						.addTimedChild(x, 0, 27, {
							0: {
								x: 157.55,
								y: 57.95,
								sx: .29,
								sy: .314
							},
							1: {
								x: 156.304,
								y: 61.895,
								sx: .295,
								sy: .318
							},
							2: {
								x: 155.008,
								y: 65.791,
								sx: .301,
								sy: .322
							},
							3: {
								x: 153.722,
								y: 69.686,
								sx: .307,
								sy: .326
							},
							4: {
								x: 152.478,
								y: 73.583,
								sx: .313,
								sy: .33
							},
							5: {
								x: 151.182,
								y: 77.478,
								sx: .319,
								sy: .334
							},
							6: {
								x: 149.939,
								y: 81.373,
								sx: .324,
								sy: .339
							},
							7: {
								x: 148.653,
								y: 85.266,
								sx: .33,
								sy: .343
							},
							8: {
								x: 147.407,
								y: 89.162,
								sx: .336,
								sy: .347
							},
							9: {
								x: 146.113,
								y: 93.108,
								sx: .342,
								sy: .351
							},
							10: {
								x: 144.867,
								y: 97.003,
								sx: .348,
								sy: .355
							},
							11: {
								x: 143.581,
								y: 100.899,
								sx: .353,
								sy: .359
							},
							12: {
								x: 142.287,
								y: 104.794,
								sx: .359,
								sy: .363
							},
							13: {
								x: 141.041,
								y: 108.69,
								sx: .365,
								sy: .367
							},
							14: {
								x: 139.748,
								y: 112.636,
								sx: .371,
								sy: .371
							},
							15: {
								x: 138.452,
								y: 116.531,
								sx: .377,
								sy: .375
							},
							16: {
								x: 137.216,
								y: 120.427,
								sx: .382,
								sy: .379
							},
							17: {
								x: 135.922,
								y: 124.323,
								sx: .388,
								sy: .383
							},
							18: {
								x: 134.626,
								y: 128.268,
								sx: .394,
								sy: .387
							},
							19: {
								x: 133.383,
								y: 132.164,
								sx: .4,
								sy: .391
							},
							20: {
								x: 132.096,
								y: 136.057,
								sx: .406,
								sy: .395
							},
							21: {
								x: 130.851,
								y: 139.953,
								sx: .411,
								sy: .399
							},
							22: {
								x: 129.557,
								y: 143.848,
								sx: .417,
								sy: .403
							},
							23: {
								x: 128.311,
								y: 147.744,
								sx: .423,
								sy: .407
							},
							24: {
								x: 127.025,
								y: 151.639,
								sx: .429,
								sy: .411
							},
							25: {
								x: 125.731,
								y: 155.535,
								sx: .435,
								sy: .415
							},
							26: {
								x: 124.5,
								y: 159.4,
								sx: .44,
								sy: .419
							}
						})
						.addTimedChild(o, 0, 27, {
							0: {
								x: 176.45,
								y: 0,
								sx: .203,
								sy: .253
							},
							1: {
								x: 175.723,
								y: 2.25,
								sx: .207,
								sy: .255
							},
							2: {
								x: 175.046,
								y: 4.45,
								sx: .21,
								sy: .258
							},
							3: {
								x: 174.282,
								y: 6.7,
								sx: .213,
								sy: .26
							},
							4: {
								x: 173.555,
								y: 8.95,
								sx: .217,
								sy: .262
							},
							5: {
								x: 172.827,
								y: 11.2,
								sx: .22,
								sy: .265
							},
							6: {
								x: 172.15,
								y: 13.4,
								sx: .223,
								sy: .267
							},
							7: {
								x: 171.387,
								y: 15.6,
								sx: .227,
								sy: .269
							},
							8: {
								x: 170.662,
								y: 17.85,
								sx: .23,
								sy: .272
							},
							9: {
								x: 169.935,
								y: 20.1,
								sx: .233,
								sy: .274
							},
							10: {
								x: 169.208,
								y: 22.3,
								sx: .236,
								sy: .277
							},
							11: {
								x: 168.494,
								y: 24.55,
								sx: .24,
								sy: .279
							},
							12: {
								x: 167.767,
								y: 26.8,
								sx: .243,
								sy: .281
							},
							13: {
								x: 166.99,
								y: 29.05,
								sx: .246,
								sy: .284
							},
							14: {
								x: 166.315,
								y: 31.2,
								sx: .25,
								sy: .286
							},
							15: {
								x: 165.588,
								y: 33.45,
								sx: .253,
								sy: .288
							},
							16: {
								x: 164.824,
								y: 35.7,
								sx: .256,
								sy: .291
							},
							17: {
								x: 164.147,
								y: 37.9,
								sx: .26,
								sy: .293
							},
							18: {
								x: 163.42,
								y: 40.15,
								sx: .263,
								sy: .295
							},
							19: {
								x: 162.693,
								y: 42.4,
								sx: .266,
								sy: .298
							},
							20: {
								x: 161.931,
								y: 44.6,
								sx: .27,
								sy: .3
							},
							21: {
								x: 161.254,
								y: 46.8,
								sx: .273,
								sy: .302
							},
							22: {
								x: 160.477,
								y: 49.05,
								sx: .276,
								sy: .305
							},
							23: {
								x: 159.75,
								y: 51.3,
								sx: .28,
								sy: .307
							},
							24: {
								x: 159.036,
								y: 53.55,
								sx: .283,
								sy: .31
							},
							25: {
								x: 158.309,
								y: 55.75,
								sx: .286,
								sy: .312
							},
							26: {
								x: 157.55,
								y: 57.95,
								sx: .29,
								sy: .314
							}
						})
				})), e.a1_42 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_74"));
					this.addChild(s)
				})), e.a1_44 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_76"));
					this.addChild(s)
				})), e.a1_45 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_77"));
					this.addChild(s)
				})), e.a1_46 = a.extend((function() {
					a.call(this);
					var s = new i(n("s1_78"));
					this.addChild(s)
				})), e.a1_47 = t.extend((function() {
					t.call(this, {
						duration: 49
					});
					var s = (new e.a1_46)
						.setTransform(227, 35),
						a = (new e.a1_45)
						.setTransform(450, 287),
						i = new e.a1_44,
						n = new e.a1_44,
						y = new e.a1_42,
						r = (new e.a1_41)
						.setTransform(441, 508.05);
					this.addTimedChild(s)
						.addTimedChild(a)
						.addTimedChild(i, 0, 49, {
							0: {
								x: 340.05,
								y: 194.05,
								sx: .126,
								sy: .126,
								a: 0
							},
							1: {
								x: 337.081,
								y: 191.131,
								sx: .157,
								sy: .157,
								a: .04
							},
							2: {
								x: 334.135,
								y: 188.167,
								sx: .188,
								sy: .188,
								a: .07
							},
							3: {
								x: 331.171,
								y: 185.201,
								sx: .219,
								sy: .219,
								a: .11
							},
							4: {
								x: 328.225,
								y: 182.238,
								sx: .251,
								sy: .251,
								a: .14
							},
							5: {
								x: 325.256,
								y: 179.268,
								sx: .282,
								sy: .282,
								a: .18
							},
							6: {
								x: 322.26,
								y: 176.305,
								sx: .313,
								sy: .313,
								a: .21
							},
							7: {
								x: 319.296,
								y: 173.339,
								sx: .344,
								sy: .344,
								a: .25
							},
							8: {
								x: 316.328,
								y: 170.37,
								sx: .376,
								sy: .376,
								a: .29
							},
							9: {
								x: 313.381,
								y: 167.406,
								sx: .407,
								sy: .407,
								a: .32
							},
							10: {
								x: 310.418,
								y: 164.44,
								sx: .438,
								sy: .438,
								a: .36
							},
							11: {
								x: 307.421,
								y: 161.476,
								sx: .469,
								sy: .469,
								a: .39
							},
							12: {
								x: 304.453,
								y: 158.507,
								sx: .5,
								sy: .5,
								a: .43
							},
							13: {
								x: 301.506,
								y: 155.544,
								sx: .532,
								sy: .532,
								a: .46
							},
							14: {
								x: 298.543,
								y: 152.578,
								sx: .563,
								sy: .563,
								a: .5
							},
							15: {
								x: 295.579,
								y: 149.611,
								sx: .594,
								sy: .594,
								a: .54
							},
							16: {
								x: 292.633,
								y: 146.648,
								sx: .625,
								sy: .625,
								a: .57
							},
							17: {
								x: 289.664,
								y: 143.679,
								sx: .657,
								sy: .657,
								a: .61
							},
							18: {
								x: 286.668,
								y: 140.715,
								sx: .688,
								sy: .688,
								a: .64
							},
							19: {
								x: 283.704,
								y: 137.749,
								sx: .719,
								sy: .719,
								a: .68
							},
							20: {
								x: 280.758,
								y: 134.786,
								sx: .75,
								sy: .75,
								a: .71
							},
							21: {
								x: 277.789,
								y: 131.816,
								sx: .781,
								sy: .781,
								a: .75
							},
							22: {
								x: 274.826,
								y: 128.85,
								sx: .813,
								sy: .813,
								a: .79
							},
							23: {
								x: 271.829,
								y: 125.887,
								sx: .844,
								sy: .844,
								a: .82
							},
							24: {
								x: 268.861,
								y: 122.917,
								sx: .875,
								sy: .875,
								a: .86
							},
							25: {
								x: 265.914,
								y: 119.954,
								sx: .906,
								sy: .906,
								a: .89
							},
							26: {
								x: 262.951,
								y: 116.938,
								sx: .938,
								sy: .938,
								a: .93
							},
							27: {
								x: 260.004,
								y: 113.974,
								sx: .969,
								sy: .969,
								a: .96
							},
							28: {
								x: 257,
								y: 111,
								sx: 1,
								sy: 1,
								a: 1
							},
							29: {
								a: .95
							},
							30: {
								a: .9
							},
							31: {
								a: .85
							},
							32: {
								a: .8
							},
							33: {
								a: .75
							},
							34: {
								a: .7
							},
							35: {
								a: .65
							},
							36: {
								a: .6
							},
							37: {
								a: .55
							},
							38: {
								a: .5
							},
							39: {
								a: .45
							},
							40: {
								a: .4
							},
							41: {
								a: .35
							},
							42: {
								a: .3
							},
							43: {
								a: .25
							},
							44: {
								a: .2
							},
							45: {
								a: .15
							},
							46: {
								a: .1
							},
							47: {
								a: .05
							},
							48: {
								a: 0
							}
						})
						.addTimedChild(n, 0, 49, {
							0: {
								x: 897.4,
								y: 50.45,
								sx: .196,
								sy: .196,
								a: 0
							},
							1: {
								x: 895.391,
								y: 48.472,
								sx: .217,
								sy: .217,
								a: .04
							},
							2: {
								x: 893.428,
								y: 46.49,
								sx: .238,
								sy: .238,
								a: .07
							},
							3: {
								x: 891.433,
								y: 44.463,
								sx: .259,
								sy: .259,
								a: .11
							},
							4: {
								x: 889.42,
								y: 42.482,
								sx: .28,
								sy: .28,
								a: .14
							},
							5: {
								x: 887.425,
								y: 40.504,
								sx: .301,
								sy: .301,
								a: .18
							},
							6: {
								x: 885.412,
								y: 38.473,
								sx: .322,
								sy: .322,
								a: .21
							},
							7: {
								x: 883.417,
								y: 36.495,
								sx: .343,
								sy: .343,
								a: .25
							},
							8: {
								x: 881.454,
								y: 34.514,
								sx: .364,
								sy: .364,
								a: .29
							},
							9: {
								x: 879.427,
								y: 32.482,
								sx: .385,
								sy: .385,
								a: .32
							},
							10: {
								x: 877.432,
								y: 30.504,
								sx: .406,
								sy: .406,
								a: .36
							},
							11: {
								x: 875.419,
								y: 28.473,
								sx: .427,
								sy: .427,
								a: .39
							},
							12: {
								x: 873.424,
								y: 26.496,
								sx: .448,
								sy: .448,
								a: .43
							},
							13: {
								x: 871.461,
								y: 24.514,
								sx: .469,
								sy: .469,
								a: .46
							},
							14: {
								x: 869.416,
								y: 22.487,
								sx: .49,
								sy: .49,
								a: .5
							},
							15: {
								x: 867.421,
								y: 20.509,
								sx: .511,
								sy: .511,
								a: .54
							},
							16: {
								x: 865.458,
								y: 18.528,
								sx: .532,
								sy: .532,
								a: .57
							},
							17: {
								x: 863.463,
								y: 16.5,
								sx: .553,
								sy: .553,
								a: .61
							},
							18: {
								x: 861.449,
								y: 14.519,
								sx: .574,
								sy: .574,
								a: .64
							},
							19: {
								x: 859.455,
								y: 12.492,
								sx: .595,
								sy: .595,
								a: .68
							},
							20: {
								x: 857.428,
								y: 10.509,
								sx: .616,
								sy: .616,
								a: .71
							},
							21: {
								x: 855.433,
								y: 8.532,
								sx: .637,
								sy: .637,
								a: .75
							},
							22: {
								x: 853.469,
								y: 6.501,
								sx: .659,
								sy: .659,
								a: .79
							},
							23: {
								x: 851.456,
								y: 4.519,
								sx: .68,
								sy: .68,
								a: .82
							},
							24: {
								x: 849.461,
								y: 2.542,
								sx: .701,
								sy: .701,
								a: .86
							},
							25: {
								x: 847.448,
								y: .51,
								sx: .722,
								sy: .722,
								a: .89
							},
							26: {
								x: 845.453,
								y: -1.467,
								sx: .743,
								sy: .743,
								a: .93
							},
							27: {
								x: 843.44,
								y: -3.498,
								sx: .764,
								sy: .764,
								a: .96
							},
							28: {
								x: 841.45,
								y: -5.5,
								sx: .785,
								sy: .785,
								a: 1
							},
							29: {
								a: .95
							},
							30: {
								a: .9
							},
							31: {
								a: .85
							},
							32: {
								a: .8
							},
							33: {
								a: .75
							},
							34: {
								a: .7
							},
							35: {
								a: .65
							},
							36: {
								a: .6
							},
							37: {
								a: .55
							},
							38: {
								a: .5
							},
							39: {
								a: .45
							},
							40: {
								a: .4
							},
							41: {
								a: .35
							},
							42: {
								a: .3
							},
							43: {
								a: .25
							},
							44: {
								a: .2
							},
							45: {
								a: .15
							},
							46: {
								a: .1
							},
							47: {
								a: .05
							},
							48: {
								a: 0
							}
						})
						.addTimedChild(y, 0, 49, {
							0: {
								x: 923.5,
								y: 279.5,
								sx: .185,
								sy: .185,
								a: 0
							},
							1: {
								x: 922.626,
								y: 278.633,
								sx: .214,
								sy: .214,
								a: .04
							},
							2: {
								x: 921.781,
								y: 277.795,
								sx: .243,
								sy: .243,
								a: .07
							},
							3: {
								x: 920.92,
								y: 276.883,
								sx: .272,
								sy: .272,
								a: .11
							},
							4: {
								x: 920.025,
								y: 276.044,
								sx: .301,
								sy: .301,
								a: .14
							},
							5: {
								x: 919.165,
								y: 275.132,
								sx: .331,
								sy: .331,
								a: .18
							},
							6: {
								x: 918.27,
								y: 274.294,
								sx: .36,
								sy: .36,
								a: .21
							},
							7: {
								x: 917.41,
								y: 273.381,
								sx: .389,
								sy: .389,
								a: .25
							},
							8: {
								x: 916.535,
								y: 272.514,
								sx: .418,
								sy: .418,
								a: .29
							},
							9: {
								x: 915.655,
								y: 271.681,
								sx: .447,
								sy: .447,
								a: .32
							},
							10: {
								x: 914.78,
								y: 270.764,
								sx: .476,
								sy: .476,
								a: .36
							},
							11: {
								x: 913.885,
								y: 269.926,
								sx: .505,
								sy: .505,
								a: .39
							},
							12: {
								x: 913.025,
								y: 269.013,
								sx: .534,
								sy: .534,
								a: .43
							},
							13: {
								x: 912.18,
								y: 268.175,
								sx: .563,
								sy: .563,
								a: .46
							},
							14: {
								x: 911.319,
								y: 267.263,
								sx: .592,
								sy: .592,
								a: .5
							},
							15: {
								x: 910.359,
								y: 266.35,
								sx: .622,
								sy: .622,
								a: .54
							},
							16: {
								x: 909.514,
								y: 265.512,
								sx: .651,
								sy: .651,
								a: .57
							},
							17: {
								x: 908.64,
								y: 264.595,
								sx: .68,
								sy: .68,
								a: .61
							},
							18: {
								x: 907.759,
								y: 263.761,
								sx: .709,
								sy: .709,
								a: .64
							},
							19: {
								x: 906.885,
								y: 262.844,
								sx: .738,
								sy: .738,
								a: .68
							},
							20: {
								x: 906.004,
								y: 262.011,
								sx: .767,
								sy: .767,
								a: .71
							},
							21: {
								x: 905.129,
								y: 261.094,
								sx: .796,
								sy: .796,
								a: .75
							},
							22: {
								x: 904.269,
								y: 260.231,
								sx: .825,
								sy: .825,
								a: .79
							},
							23: {
								x: 903.374,
								y: 259.393,
								sx: .854,
								sy: .854,
								a: .82
							},
							24: {
								x: 902.514,
								y: 258.481,
								sx: .884,
								sy: .884,
								a: .86
							},
							25: {
								x: 901.619,
								y: 257.643,
								sx: .913,
								sy: .913,
								a: .89
							},
							26: {
								x: 900.758,
								y: 256.73,
								sx: .942,
								sy: .942,
								a: .93
							},
							27: {
								x: 899.914,
								y: 255.892,
								sx: .971,
								sy: .971,
								a: .96
							},
							28: {
								x: 899,
								y: 255,
								sx: 1,
								sy: 1,
								a: 1
							},
							29: {
								a: .95
							},
							30: {
								a: .9
							},
							31: {
								a: .85
							},
							32: {
								a: .8
							},
							33: {
								a: .75
							},
							34: {
								a: .7
							},
							35: {
								a: .65
							},
							36: {
								a: .6
							},
							37: {
								a: .55
							},
							38: {
								a: .5
							},
							39: {
								a: .45
							},
							40: {
								a: .4
							},
							41: {
								a: .35
							},
							42: {
								a: .3
							},
							43: {
								a: .25
							},
							44: {
								a: .2
							},
							45: {
								a: .15
							},
							46: {
								a: .1
							},
							47: {
								a: .05
							},
							48: {
								a: 0
							}
						})
						.addTimedChild(r)
				})), e.a1_48 = a.extend((function() {
					a.call(this);
					var s = (new e.a1_47)
						.setTransform(-227, -35),
						t = (new e.a1_40)
						.setTransform(274, 312);
					this.addChild(s, t)
				})), e.GamePage = a.extend((function() {
					a.call(this);
					var s = (new e.a1_48)
						.setTransform(.3, -2.05),
						t = (new e.text2022)
						.setTransform(79.75, 1003.2);
					this[t.name = "text2022"] = t;
					var r = new e.gameBox;
					this[r.name = "box"] = r;
					var x = (new e.buffEffect1)
						.setTransform(398, 772.45);
					this[x.name = "buffs1"] = x;
					var o = (new e.buffEffect2)
						.setTransform(267, 208);
					this[o.name = "buffs3"] = o;
					var l = (new e.buffEffect3)
						.setTransform(226, 202);
					this[l.name = "buffs2"] = l;
					var d = (new e.a1_28)
						.setTransform(248, 128),
						c = new y("00000")
						.setStyle({
							fontFamily: "微软雅黑",
							fontSize: 52,
							fontWeight: "bold",
							fill: "#f5e78c",
							leading: 2
						})
						.setAlign("center")
						.setTransform(524.9, 143.8);
					this[c.name = "score"] = c;
					var h = (new e.heros)
						.setTransform(694.25, 1046.45);
					this[h.name = "hero"] = h;
					var u = new i(n("textImg"))
						.setTransform(267, 147),
						f = (new e.rightBtn)
						.setTransform(549, 1012.2);
					this[f.name = "rightBtn"] = f;
					var p = (new e.rightBtn)
						.setTransform(318.85, 1192.2, 1, 1, 0, 3.142, 3.142);
					this[p.name = "leftBtn"] = p, this.addChild(s, t, r, x, o, l, d, c, h, u, f, p)
				})), e.lib = t.extend((function() {
					t.call(this, {
						duration: 1,
						framerate: 60
					});
					var s = new e.GamePage,
						a = (new e.buff1)
						.setTransform(1624.55, 480.8),
						i = (new e.buff2)
						.setTransform(1766, 480.8),
						n = (new e.buff3)
						.setTransform(1926.6, 480.8),
						y = (new e.obstacle)
						.setTransform(1325.35, 499.35),
						r = (new e.Index)
						.setTransform(-3131.7, 3459),
						x = (new e.Lottery)
						.setTransform(-2092.55, 3459),
						o = (new e.Award1)
						.setTransform(146.95, 3459),
						l = (new e.Award2)
						.setTransform(1182, 3459),
						d = (new e.NoAward)
						.setTransform(2312, 3459),
						c = (new e.Fail)
						.setTransform(-1058, 3459),
						h = (new e.Index2)
						.setTransform(-2437.6, 1334.25);
					this.addChild(s, a, i, n, y, r, x, o, l, d, c, h)
				})), e.lib.assets = {
					2022: "images/2022.png?v2.2",
					btnComp: "images/btnComp.png?v2.2",
					s1_25: "images/s1_25.png?v2.2",
					s1_26: "images/s1_26.png?v2.2",
					s1_27: "images/s1_27.png?v2.2",
					s1_28: "images/s1_28.png?v2.2",
					s1_29: "images/s1_29.png?v2.2",
					s1_30: "images/s1_30.png?v2.2",
					s1_31: "images/s1_31.png?v2.2",
					s1_32: "images/s1_32.png?v2.2",
					s1_33: "images/s1_33.png?v2.2",
					s1_34: "images/s1_34.png?v2.2",
					s1_35: "images/s1_35.png?v2.2",
					fail: "images/fail.jpg?v2.2",
					noAward: "images/noAward.jpg?v2.2",
					award2: "images/award2.jpg?v2.2",
					award: "images/award.jpg?v2.2",
					s1_81: "images/s1_81.png?v2.2",
					s1_82: "images/s1_82.png?v2.2",
					s1_83: "images/s1_83.png?v2.2",
					indexNumBg: "images/indexNumBg.png?v2.2",
					s1_84: "images/s1_84.png?v2.2",
					s1_85: "images/s1_85.png?v2.2",
					s1_86: "images/s1_86.png?v2.2",
					s1_87: "images/s1_87.png?v2.2",
					s1_88: "images/s1_88.png?v2.2",
					s1_89: "images/s1_89.png?v2.2",
					s1_90: "images/s1_90.png?v2.2",
					obstacle: "images/obstacle.png?v2.2",
					buff3: "images/buff3.png?v2.2",
					buff2: "images/buff2.png?v2.2",
					buff1: "images/buff1.png?v2.2",
					rightBtn: "images/rightBtn.png?v2.2",
					textImg: "images/textImg.png?v2.2",
					hero: "images/hero.png?v2.2",
					hero2: "images/hero2.png?v2.2",
					hero3: "images/hero3.png?v2.2",
					shade: "images/shade.png?v2.2",
					s1_64: "images/s1_64.png?v2.2",
					buffImgs2: "images/buffImgs2.png?v2.2",
					buffImgs5: "images/buffImgs5.png?v2.2",
					buffImgs4: "images/buffImgs4.png?v2.2",
					buffImgs3: "images/buffImgs3.png?v2.2",
					buffImgs1: "images/buffImgs1.png?v2.2",
					s1_72: "images/s1_72.png?v2.2",
					shapesImg: "images/shapesImg.png?v2.2",
					s1_73: "images/s1_73.png?v2.2",
					s1_74: "images/s1_74.png?v2.2",
					s1_76: "images/s1_76.png?v2.2",
					s1_77: "images/s1_77.png?v2.2",
					s1_78: "images/s1_78.png?v2.2"
				}
			}(t(24243), a = a || {}), s.exports = {
				lib: a,
				assets: a.lib.assets
			};
			for (var i = 0; i < a.lib.assets; i++) t(99373)("./" + a.lib.assets[i])
		},
		18470: function(s, e, t) {
			var a;
			! function(s, e) {
				var t = s.animate.MovieClip,
					a = s.Container,
					i = s.Sprite,
					n = s.Texture.fromFrame;
				e.Next = a.extend((function() {
					a.call(this);
					var s = new i(n("r1_333336"));
					this.addChild(s)
				})), e.Page2 = a.extend((function() {
					a.call(this);
					var s = new i(n("r1_338")),
						t = (new e.Next)
						.setTransform(310, 1068);
					this[t.name = "next_btn"] = t, this.addChild(s, t)
				})), e.lib1 = t.extend((function() {
					t.call(this, {
						duration: 1,
						framerate: 60
					});
					var s = new e.Page2;
					this.addChild(s)
				})), e.lib1.assets = {
					r1_333336: "images/r1_333336.png?v2.2",
					r1_338: "images/r1_338.png?v2.2"
				}
			}(t(24243), a = a || {}), s.exports = {
				lib: a,
				assets: a.lib1.assets
			};
			for (var i = 0; i < a.lib1.assets; i++) t(99373)("./" + a.lib1.assets[i])
		},
		76493: function(s, e, t) {
			var a;
			! function(s, e) {
				var t = s.animate.MovieClip,
					a = s.Container,
					i = s.Sprite,
					n = s.Texture.fromFrame;
				e.Btns2 = a.extend((function() {
					a.call(this);
					var s = new i(n("success_btn"));
					this.addChild(s)
				})), e.Page3 = a.extend((function() {
					a.call(this);
					var s = new i(n("poster_bg")),
						t = (new e.Btns2)
						.setTransform(276.35, 1086.95, 1.526, 1.541)
						.setAlpha(0);
					this[t.name = "back_btn"] = t, this.addChild(s, t)
				})), e.lib2 = t.extend((function() {
					t.call(this, {
						duration: 1,
						framerate: 60
					});
					var s = new e.Page3;
					this.addChild(s)
				})), e.lib2.assets = {
					success_btn: "images/success_btn.png?v2.2",
					poster_bg: "images/poster_bg.jpg?v2.2"
				}
			}(t(24243), a = a || {}), s.exports = {
				lib: a,
				assets: a.lib2.assets
			};
			for (var i = 0; i < a.lib2.assets; i++) t(99373)("./" + a.lib2.assets[i])
		},
		61937: function(s, e, t) {
			var a, i, n, y, r = t(24243);

			function x(s) {
				return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(s) {
					return typeof s
				} : function(s) {
					return s && "function" == typeof Symbol && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
				}, x(s)
				/*!
				 * pixi-animate - v1.3.6
				 * Compiled Wed, 12 Jun 2019 14:56:56 UTC
				 *
				 * pixi-animate is licensed under the MIT License.
				 * http://www.opensource.org/licenses/mit-license 
				 */
			}
			y = function() {
				return function s(e, t, a) {
					function i(y, r) {
						if (!t[y]) {
							if (!e[y]) {
								if (n) return n(y, !0);
								var x = new Error("Cannot find module '" + y + "'");
								throw x.code = "MODULE_NOT_FOUND", x
							}
							var o = t[y] = {
								exports: {}
							};
							e[y][0].call(o.exports, (function(s) {
								return i(e[y][1][s] || s)
							}), o, o.exports, s, e, t, a)
						}
						return t[y].exports
					}
					for (var n = void 0, y = 0; y < a.length; y++) i(a[y]);
					return i
				}({
					1: [function(s, e, t) {
						"use strict";
						var a, i = function() {
								function s(s, e) {
									for (var t = 0; t < e.length; t++) {
										var a = e[t];
										a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
									}
								}
								return function(e, t, a) {
									return t && s(e.prototype, t), a && s(e, a), e
								}
							}(),
							n = s("./AnimatorTimeline"),
							y = (a = n) && a.__esModule ? a : {
								default: a
							},
							r = [],
							x = function() {
								function s() {
									! function(s, e) {
										if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
									}(this, s)
								}
								return s.play = function(s, e, t) {
									var a = !1,
										i = void 0,
										n = void 0,
										y = "function" == typeof e;
									if (void 0 === e || y) i = 0, n = s.totalFrames - 1, y && (t = e);
									else {
										if (i = s.labelsMap[e], void 0 === (n = s.labelsMap[e + this.STOP_LABEL]) && (n = s.labelsMap[e + this.LOOP_LABEL], a = !0), void 0 === i) throw new Error("No start label matching '" + e + "'");
										if (void 0 === n) throw new Error("No end label matching '" + e + "'")
									}
									return this.fromTo(s, i, n, a, t)
								}, s.to = function(s, e, t) {
									return this.fromTo(s, s.currentFrame, e, !1, t)
								}, s.fromTo = function(s, e, t, a, i) {
									if ("string" == typeof e) {
										var n = e;
										if (void 0 === (e = s.labelsMap[n])) throw new Error("No start label matching '" + n + "'")
									}
									if ("string" == typeof t) {
										var r = t;
										if (void 0 === (t = s.labelsMap[r])) throw new Error("No end label matching '" + r + "'")
									}
									if (e < 0) throw new Error("Start frame is out of bounds");
									if (t >= s.totalFrames) throw new Error("End frame is out of bounds");
									if (e >= t) throw new Error("End frame is before start frame");
									this.stop(s), a = !!a;
									var x = y.default.create(s, e, t, a, i);
									return this._timelines.push(x), s.currentFrame !== e ? s.gotoAndPlay(e) : s.play(), x
								}, s.stop = function(s) {
									for (var e = 0, t = this._timelines.length; e < t; e++) {
										var a = this._timelines[e];
										if (a.instance === s) {
											this._internalStop(a);
											break
										}
									}
								}, s.stopAll = function() {
									for (var s = this._timelines.length - 1; s >= 0; s--) this._internalStop(this._timelines[s])
								}, s._internalStop = function(s) {
									this._timelines.splice(this._timelines.indexOf(s), 1), s.instance.stop(), s.destroy()
								}, i(s, null, [{
									key: "_timelines",
									get: function() {
										return r
									}
								}, {
									key: "STOP_LABEL",
									get: function() {
										return "_stop"
									}
								}, {
									key: "LOOP_LABEL",
									get: function() {
										return "_loop"
									}
								}]), s
							}();
						e.exports = x
					}, {
						"./AnimatorTimeline": 2
					}],
					2: [function(s, e, t) {
						"use strict";
						var a = function() {
								function s(s, e) {
									for (var t = 0; t < e.length; t++) {
										var a = e[t];
										a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
									}
								}
								return function(e, t, a) {
									return t && s(e.prototype, t), a && s(e, a), e
								}
							}(),
							i = [],
							n = function() {
								function s() {
									! function(s, e) {
										if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
									}(this, s), this._update = this.update.bind(this), this.init(null, 0, 0, !1, null)
								}
								return s.prototype.init = function(s, e, t, a, i) {
									this.instance = s, this.loop = a, this.start = e, this.end = t, this.callback = i, s && (s.loop = !1, s.gotoAndStop(e), s._beforeUpdate = this._update)
								}, s.prototype.destroy = function() {
									this.instance._beforeUpdate = null, this.init(null, 0, 0, !1, null), s._pool.push(this)
								}, s.prototype.update = function(s) {
									var e = void 0;
									return s.currentFrame >= this.end && (s.currentFrame = this.end, this.loop ? (s._updateTimeline(), s.gotoAndPlay(this.start)) : (s.stop(), this.callback && (e = this.callback), this.stop())), e
								}, s.prototype.stop = function() {
									r.animate.Animator._internalStop(this)
								}, s.create = function(e, t, a, i, n) {
									var y;
									return (y = this._pool.length ? this._pool.pop() : new s)
										.init(e, t, a, i, n), y
								}, a(s, [{
									key: "progress",
									get: function() {
										var s = (this.instance.currentFrame - this.start) / (this.end - this.start);
										return Math.max(0, Math.min(1, s))
									}
								}], [{
									key: "_pool",
									get: function() {
										return i
									}
								}]), s
							}();
						e.exports = n
					}, {}],
					3: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a = function() {
								function s(s, e) {
									for (var t = 0; t < e.length; t++) {
										var a = e[t];
										a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a)
									}
								}
								return function(e, t, a) {
									return t && s(e.prototype, t), a && s(e, a), e
								}
							}(),
							i = y(s("./Timeline")),
							n = y(s("./utils"));

						function y(s) {
							return s && s.__esModule ? s : {
								default: s
							}
						}
						var o = r.Container,
							l = r.ticker.shared,
							d = function(s) {
								function e(t, a, i, n, y) {
									! function(s, e) {
										if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
									}(this, e);
									var r = function(s, e) {
										if (!s) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
										return !e || "object" !== x(e) && "function" != typeof e ? s : e
									}(this, s.call(this));
									if (t = "number" == typeof(t = void 0 === t ? {} : t) ? {
										mode: t || e.INDEPENDENT,
										duration: a || 0,
										loop: void 0 === i || i,
										labels: y || {},
										framerate: n || 0,
										startPosition: 0
									} : Object.assign({
										mode: e.INDEPENDENT,
										startPosition: 0,
										loop: !0,
										labels: {},
										duration: 0,
										framerate: 0
									}, t), r.mode = t.mode, r.startPosition = t.startPosition, r.loop = !!t.loop, r.currentFrame = 0, r._labels = [], r._labelDict = t.labels, t.labels) {
										for (var o in t.labels) {
											var l = {
												label: o,
												position: t.labels[o]
											};
											r._labels.push(l)
										}
										r._labels.sort((function(s, e) {
											return s.position - e.position
										}))
									}
									return r.selfAdvance = !0, r.paused = !1, r.actionsEnabled = !0, r.autoReset = !0, r._synchOffset = 0, r._prevPos = -1, r._t = 0, r._framerate = t.framerate, r._duration = 0, r._totalFrames = t.duration, r._timelines = [], r._timedChildTimelines = [], r._depthSorted = [], r._actions = [], r._beforeUpdate = null, r.mode === e.INDEPENDENT && (r._tickListener = r._tickListener.bind(r), r._onAdded = r._onAdded.bind(r), r._onRemoved = r._onRemoved.bind(r), r.on("added", r._onAdded), r.on("removed", r._onRemoved)), t.framerate && (r.framerate = t.framerate), r.advance = r.advance, r._updateTimeline = r._updateTimeline, r._setTimelinePosition = r._setTimelinePosition, r._goto = r._goto, r
								}
								return function(s, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + x(e));
									s.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: s,
											enumerable: !1,
											writable: !0,
											configurable: !0
										}
									}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(s, e) : s.__proto__ = e)
								}(e, s), e.prototype._onAdded = function() {
									this._framerate || (this.framerate = this.parentFramerate), l.add(this._tickListener)
								}, e.prototype._tickListener = function(s) {
									if (!this.paused && this.selfAdvance) {
										var e = s / r.settings.TARGET_FPMS / 1e3;
										this.advance(e)
									} else this._prevPos < 0 && this._goto(this.currentFrame)
								}, e.prototype._onRemoved = function() {
									l.remove(this._tickListener)
								}, e.prototype._autoExtend = function(s) {
									this._totalFrames < s && (this._totalFrames = s)
								}, e.prototype._parseProperties = function(s) {
									"string" == typeof s.t ? s.t = n.default.hexToUint(s.t) : "number" == typeof s.v && (s.v = !!s.v)
								}, e.prototype._getChildTimeline = function(s) {
									for (var e = this._timelines.length - 1; e >= 0; --e)
										if (this._timelines[e].target === s) return this._timelines[e];
									var t = new i.default(s);
									return this._timelines.push(t), t
								}, e.prototype.addTimedMask = function(s, e) {
									for (var t in e) this.addKeyframe(s, {
										m: e[t]
									}, parseInt(t, 10));
									return this._setTimelinePosition(this.currentFrame, this.currentFrame, !0), this
								}, e.prototype.am = function(s, e) {
									return this.addTimedMask(s, e)
								}, e.prototype.addTween = function(s, e, t, a, i) {
									var n = this._getChildTimeline(s);
									return this._parseProperties(e), n.addTween(e, t, a, i), this._autoExtend(t + a), this
								}, e.prototype.addKeyframe = function(s, e, t) {
									var a = this._getChildTimeline(s);
									return this._parseProperties(e), a.addKeyframe(e, t), this._autoExtend(t), this
								}, e.prototype.at = function(s, e, t, a) {
									return this.addTimedChild(s, e, t, a)
								}, e.prototype.addTimedChild = function(s, t, a, i) {
									void 0 === t && (t = 0), (void 0 === a || a < 1) && (a = this._totalFrames || 1), s.mode === e.SYNCHED && (s.parentStartPosition = t);
									var y = void 0,
										r = void 0;
									for (r = this._timedChildTimelines.length - 1; r >= 0; --r)
										if (this._timedChildTimelines[r].target === s) {
											y = this._timedChildTimelines[r];
											break
										} if (y || ((y = [])
										.target = s, this._timedChildTimelines.push(y)), n.default.fillFrames(y, t, a), this._totalFrames < t + a && (this._totalFrames = t + a), i) {
										"string" == typeof i && (i = n.default.deserializeKeyframes(i));
										var x = {};
										for (var o in i) x = Object.assign({}, x, i[o]), this.addKeyframe(s, x, parseInt(o, 10));
										this._getChildTimeline(s)
											.extendLastFrame(t + a)
									}
									return this._setTimelinePosition(t, this.currentFrame, !0), this
								}, e.prototype.aa = function(s, e) {
									return this.addAction(s, e)
								}, e.prototype.addAction = function(s, e) {
									if ("string" == typeof e) {
										var t = this._labelDict[e];
										if (void 0 === t) throw "The label '" + e + "' does not exist on this timeline";
										e = t
									}
									var a = this._actions;
									return a.length <= e && (a.length = e + 1), this._totalFrames < e && (this._totalFrames = e), a[e] ? a[e].push(s) : a[e] = [s], this
								}, e.prototype.ps = function(s, e) {
									return this.playSound(s, e)
								}, e.prototype.playSound = function(s, e) {
									return r.animate.sound.emit("play", s, !!e, this), this
								}, e.prototype.play = function() {
									this.paused = !1
								}, e.prototype.stop = function() {
									this.paused = !0
								}, e.prototype.gotoAndPlay = function(s) {
									this.paused = !1, this._goto(s)
								}, e.prototype.gotoAndStop = function(s) {
									this.paused = !0, this._goto(s)
								}, e.prototype.advance = function(s) {
									this._framerate || (this.framerate = this.parentFramerate), s && (this._t += s), this._t > this._duration && (this._t = this.loop ? this._t % this._duration : this._duration), this.currentFrame = Math.floor(this._t * this._framerate + 1e-8), this.currentFrame >= this._totalFrames && (this.currentFrame = this._totalFrames - 1);
									var e = void 0;
									this._beforeUpdate && (e = this._beforeUpdate(this)), this._updateTimeline(), e && e()
								}, e.prototype._goto = function(s) {
									var e = "string" == typeof s ? this._labelDict[s] : s;
									void 0 !== e && (this._prevPos = NaN, this.currentFrame = e, this._framerate || (this.framerate = this.parentFramerate), this._framerate > 0 ? this._t = e / this._framerate : this._t = 0, this._updateTimeline())
								}, e.prototype._reset = function() {
									this._prevPos = -1, this._t = 0, this.currentFrame = 0
								}, e.prototype._updateTimeline = function() {
									var s = this.mode !== e.INDEPENDENT;
									s && (this.currentFrame = this.startPosition + (this.mode === e.SINGLE_FRAME ? 0 : this._synchOffset), this.currentFrame >= this._totalFrames && (this.currentFrame %= this._totalFrames)), this._prevPos !== this.currentFrame && (this._setTimelinePosition(this._prevPos, this.currentFrame, !s && this.actionsEnabled), this._prevPos = this.currentFrame)
								}, e.prototype._setTimelinePosition = function(s, t, a) {
									if (s !== t && a) {
										var i = isNaN(s) ? t : s >= this._totalFrames - 1 ? 0 : s + 1,
											n = [];
										if (t < i) {
											for (var y = i; y < this._actions.length; ++y) this._actions[y] && n.push(y);
											for (var r = 0; r <= t; ++r) this._actions[r] && n.push(r)
										} else
											for (var x = i; x <= t; ++x) this._actions[x] && n.push(x);
										if (n.length)
											for (var o = this.currentFrame, l = 0; l < n.length; ++l) {
												var d = n[l];
												if (this._setTimelinePosition(d, d, !0), this.currentFrame !== o || d === t) return;
												if (this.paused) return void(this.currentFrame = d)
											}
									}
									var c = void 0,
										h = void 0,
										u = void 0,
										f = this._timelines;
									for (c = f.length - 1; c >= 0; --c) {
										var p = f[c];
										for (h = 0, u = p.length; h < u; ++h) {
											var m = p[h];
											if (t >= m.startFrame && t <= m.endFrame) {
												m.setPosition(t);
												break
											}
										}
									}
									var g = this._timedChildTimelines,
										v = this._depthSorted;
									for (c = 0, u = g.length; c < u; ++c) {
										var w = g[c].target,
											b = g[c][t];
										b ? (v.push(w), w.parent !== this && (this.addChild(w), w.mode === e.INDEPENDENT && w.autoReset && w._reset())) : b || w.parent !== this || this.removeChild(w)
									}
									for (c = 0, u = v.length; c < u; c++) {
										var k = v[c];
										this.children.indexOf(k) !== c && this.addChildAt(k, c)
									}
									v.length = 0;
									var _ = this.children,
										T = void 0;
									for (c = 0, u = _.length; c < u; ++c)(T = _[c])
										.mode === e.SYNCHED && (T._synchOffset = t - T.parentStartPosition, T._updateTimeline());
									if (a && this._actions && this._actions[t])
										for (var C = this._actions[t], P = 0; P < C.length; ++P) C[P].call(this)
								}, e.prototype.destroy = function(e) {
									this._tickListener && (l.remove(this._tickListener), this._tickListener = null);
									var t = [],
										a = this._timelines;
									if (a)
										for (var i = 0; i < a.length; i++) {
											var n = a[i];
											t.push(n.target), n._currentProps = null, n.length = 0
										}
									if (a = this._timedChildTimelines)
										for (var y = 0; y < a.length; y++) {
											var r = a[y];
											t.indexOf(r.target) < 0 && t.push(r.target), r._currentProps = null, r.length = 0
										}
									for (var x = 0; x < t.length; x++) this.children.indexOf(t[x]) < 0 && t[x].destroy(e);
									t.length = 0, this._actions = null, this._timelines = null, this._depthSorted = null, this._timedChildTimelines = null, this._beforeUpdate = null, this._labels = null, this._labelDict = null, s.prototype.destroy.call(this, e)
								}, a(e, [{
									key: "labels",
									get: function() {
										return this._labels
									}
								}, {
									key: "labelsMap",
									get: function() {
										return this._labelDict
									}
								}, {
									key: "currentLabel",
									get: function() {
										for (var s = this._labels, e = null, t = 0, a = s.length; t < a && s[t].position <= this.currentFrame; ++t) e = s[t].label;
										return e
									}
								}, {
									key: "elapsedTime",
									get: function() {
										return this._t
									},
									set: function(s) {
										this._t = s
									}
								}, {
									key: "framerate",
									get: function() {
										return this._framerate
									},
									set: function(s) {
										s > 0 ? (this._framerate ? this._t *= this._framerate / s : this._t = this.currentFrame / s, this._framerate = s, this._duration = s ? this._totalFrames / s : 0) : this._t = this._framerate = this._duration = 0
									}
								}, {
									key: "totalFrames",
									get: function() {
										return this._totalFrames
									}
								}, {
									key: "parentFramerate",
									get: function() {
										for (var s = this, t = s._framerate;
											(s = s.parent) && !t;) s.mode === e.INDEPENDENT && (t = s._framerate);
										return t || e.DEFAULT_FRAMERATE
									}
								}]), e
							}(o);
						d.INDEPENDENT = 0, d.SINGLE_FRAME = 1, d.SYNCHED = 2, d.DEFAULT_FRAMERATE = 60, d.extend = d.e = function(s) {
							return s.prototype = Object.create(d.prototype), s.prototype.__parent = d.prototype, s.prototype.constructor = s, s
						}, t.default = d
					}, {
						"./Timeline": 7,
						"./utils": 12
					}],
					4: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a = n(s("./load")),
							i = n(s("./sound"));

						function n(s) {
							return s && s.__esModule ? s : {
								default: s
							}
						}
						var y = function(s) {
							function e(t, a, n, y) {
								! function(s, e) {
									if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e);
								var r = function(s, e) {
									if (!s) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !e || "object" !== x(e) && "function" != typeof e ? s : e
								}(this, s.call(this, t, a, n, y));
								return r.sound = i.default, r.instance = null, r
							}
							return function(s, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + x(e));
								s.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: s,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(s, e) : s.__proto__ = e)
							}(e, s), e.prototype.load = function(s, e, t) {
								var i = this;
								return (0, a.default)(s, this.stage, (function(s) {
									i.instance = s, e && e(s)
								}), t)
							}, e.prototype.destroy = function(e) {
								this.instance && (this.instance.destroy(!0), this.instance = null), s.prototype.destroy.call(this, e)
							}, e
						}(r.Application);
						t.default = y
					}, {
						"./load": 10,
						"./sound": 11
					}],
					5: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a, i = "function" == typeof Symbol && "symbol" === x(Symbol.iterator) ? function(s) {
								return x(s)
							} : function(s) {
								return s && "function" == typeof Symbol && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : x(s)
							},
							n = s("./utils"),
							y = (a = n) && a.__esModule ? a : {
								default: a
							},
							r = {};
						Object.defineProperty(r, "add", {
							enumerable: !1,
							value: function(s, e) {
								"string" == typeof e && (e = y.default.deserializeShapes(e));
								for (var t = 0; t < e.length; t++)
									for (var a = e[t], i = 0; i < a.length; i++) {
										var n = a[i];
										"string" == typeof n && "#" === n[0] && (a[i] = y.default.hexToUint(n))
									}
								r[s] = e
							}
						}), Object.defineProperty(r, "fromCache", {
							enumerable: !1,
							value: function(s) {
								return r[s] || null
							}
						}), Object.defineProperty(r, "remove", {
							enumerable: !1,
							value: function(s) {
								if ("object" !== (void 0 === s ? "undefined" : i(s))) r[s] && (r[s].length = 0, delete r[s]);
								else
									for (var e in s) r.remove(e)
							}
						}), Object.defineProperty(r, "removeAll", {
							enumerable: !1,
							value: function() {
								for (var s in r) r.remove(s)
							}
						}), t.default = r
					}, {
						"./utils": 12
					}],
					6: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a, i = s("./ShapesCache"),
							n = (a = i) && a.__esModule ? a : {
								default: a
							},
							y = function() {
								return function(s, e) {
									var t = s.url,
										a = s.data;
									a ? t.search(/\.shapes\.(json|txt)/i) > -1 ? n.default.add(s.name, a) : a.nodeName && "IMG" === a.nodeName && r.Texture.addTextureToCache(s.texture, s.name) : e(), e()
								}
							};
						r.loaders.Loader.addPixiMiddleware(y), t.default = y
					}, {
						"./ShapesCache": 5
					}],
					7: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a, i = s("./Tween"),
							n = (a = i) && a.__esModule ? a : {
								default: a
							},
							y = function(s) {
								Array.call(this), this.target = s, this._currentProps = {}
							},
							r = y.prototype = Object.create(Array.prototype);
						r.addTween = function(s, e, t, a) {
							this.extendLastFrame(e - 1);
							var i = {},
								y = void 0;
							for (y in s)
								if (this._currentProps.hasOwnProperty(y)) i[y] = this._currentProps[y];
								else
									for (var r = i[y] = this.getPropFromShorthand(y), x = this.length - 1; x >= 0; --x) this[x].startProps[y] = r, this[x].endProps[y] = r;
							var o = new n.default(this.target, i, s, e, t, a);
							this.push(o), Object.assign(this._currentProps, o.endProps)
						}, r.addKeyframe = function(s, e) {
							this.extendLastFrame(e - 1);
							var t = Object.assign({}, this._currentProps, s),
								a = new n.default(this.target, t, null, e, 0);
							this.push(a), Object.assign(this._currentProps, a.endProps)
						}, r.extendLastFrame = function(s) {
							if (this.length) {
								var e = this[this.length - 1];
								e.endFrame < s && (e.isTweenlessFrame ? e.endFrame = s : this.addKeyframe(this._currentProps, e.endFrame + 1, s - e.endFrame + 1))
							}
						}, r.getPropFromShorthand = function(s) {
							var e = this.target;
							switch (s) {
								case "x":
									return e.position.x;
								case "y":
									return e.position.y;
								case "sx":
									return e.scale.x;
								case "sy":
									return e.scale.y;
								case "kx":
									return e.skew.x;
								case "ky":
									return e.skew.y;
								case "r":
									return e.rotation;
								case "a":
									return e.alpha;
								case "v":
									return e.visible;
								case "m":
									return e.mask
							}
							return null
						}, t.default = y
					}, {
						"./Tween": 8
					}],
					8: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a = function() {
							function s(e, t, a, i, n, y) {
								! function(s, e) {
									if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, s), this.target = e, this.startProps = t, this.endProps = {}, this.duration = n, this.startFrame = i, this.endFrame = i + n, this.ease = y, this.isTweenlessFrame = !a;
								var r = void 0;
								if (a)
									for (r in a) this.endProps[r] = a[r];
								for (r in t) this.endProps.hasOwnProperty(r) || (this.endProps[r] = t[r])
							}
							return s.prototype.setPosition = function(s) {
								if (s >= this.endFrame) this.setToEnd();
								else if (this.isTweenlessFrame) this.setToEnd();
								else {
									var e = (s - this.startFrame) / this.duration;
									this.ease && (e = this.ease(e));
									var t = this.target,
										a = this.startProps,
										i = this.endProps;
									for (var y in i) {
										var r = n[y];
										x(t, y, r ? r(a[y], i[y], e) : a[y])
									}
								}
							}, s.prototype.setToEnd = function() {
								var s = this.endProps,
									e = this.target;
								for (var t in s) x(e, t, s[t])
							}, s
						}();

						function i(s, e, t) {
							return s + (e - s) * t
						}
						var n = {
								x: i,
								y: i,
								sx: i,
								sy: i,
								kx: i,
								ky: i,
								r: function(s, e, t) {
									return Math.abs(e - s) > y && (e > s ? s += r : e += y + r), s + (e - s) * t
								},
								a: i,
								t: null,
								v: null,
								c: null,
								m: null,
								g: null
							},
							y = Math.PI,
							r = 2 * y;

						function x(s, e, t) {
							switch (e) {
								case "x":
									s.transform.position.x = t;
									break;
								case "y":
									s.transform.position.y = t;
									break;
								case "sx":
									s.transform.scale.x = t;
									break;
								case "sy":
									s.transform.scale.y = t;
									break;
								case "kx":
									s.transform.skew.x = t;
									break;
								case "ky":
									s.transform.skew.y = t;
									break;
								case "r":
									s.transform.rotation = t;
									break;
								case "a":
									s.alpha = t;
									break;
								case "t":
									s.i(t);
									break;
								case "c":
									s.c.apply(s, t);
									break;
								case "v":
									s.visible = t;
									break;
								case "m":
									s.ma(t)
							}
						}
						t.default = a
					}, {}],
					9: [function(s, e, t) {
						"use strict";
						t.__esModule = !0, t.VERSION = t.Tween = t.Timeline = t.SymbolLoader = t.ShapesCache = t.Scene = t.MovieClip = t.utils = t.sound = t.load = t.AnimatorTimeline = t.Animator = void 0;
						var a = u(s("./load")),
							i = u(s("./sound")),
							n = u(s("./utils")),
							y = u(s("./MovieClip")),
							r = u(s("./Scene")),
							x = u(s("./ShapesCache")),
							o = u(s("./SymbolLoader")),
							l = u(s("./Timeline")),
							d = u(s("./Tween")),
							c = u(s("./Animator")),
							h = u(s("./AnimatorTimeline"));

						function u(s) {
							return s && s.__esModule ? s : {
								default: s
							}
						}
						t.Animator = c.default, t.AnimatorTimeline = h.default, t.load = a.default, t.sound = i.default, t.utils = n.default, t.MovieClip = y.default, t.Scene = r.default, t.ShapesCache = x.default, t.SymbolLoader = o.default, t.Timeline = l.default, t.Tween = d.default, t.VERSION = "1.3.6"
					}, {
						"./Animator": 1,
						"./AnimatorTimeline": 2,
						"./MovieClip": 3,
						"./Scene": 4,
						"./ShapesCache": 5,
						"./SymbolLoader": 6,
						"./Timeline": 7,
						"./Tween": 8,
						"./load": 10,
						"./sound": 11,
						"./utils": 12
					}],
					10: [function(s, e, t) {
						"use strict";
						t.__esModule = !0, t.default = function(s, e, t, a, i, n) {
							function y() {
								var e = s.createInstance && "function" == typeof s.stage ? new s.stage : null;
								s.parent && s.parent.addChild(e), s.complete && s.complete(e, i)
							}
							"function" == typeof e ? (a = t, t = e, e = null) : "string" == typeof t && (a = t, t = null), "function" == typeof s && (s = {
								stage: s,
								parent: e,
								basePath: a || "",
								complete: t
							}), s = Object.assign({
								stage: null,
								parent: null,
								basePath: "",
								complete: null,
								createInstance: !0
							}, s || {}), i = i || new r.loaders.Loader;
							var x = s.stage.assets || {};
							if (x && Object.keys(x)
								.length) {
								var o = s.basePath;
								for (var l in o && (o += "/"), x) {
									var d = null;
									n && (n[l] ? d = n[l] : n.default && (d = n.default)), i.add(l, o + x[l], d)
								}
								i.once("complete", y)
									.load()
							} else y();
							return i
						}
					}, {}],
					11: [function(s, e, t) {
						"use strict";
						t.__esModule = !0, t.default = new r.utils.EventEmitter
					}, {}],
					12: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a = null,
							i = function() {
								function s() {
									! function(s, e) {
										if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
									}(this, s)
								}
								return s.hexToUint = function(s) {
									return 3 === (s = s.substr(1))
										.length && (s = s.replace(/([a-f0-9])/g, "$1$1")), parseInt(s, 16)
								}, s.fillFrames = function(s, e, t) {
									var a = s.length;
									if (a < e + t && (s.length = e + t, a < e))
										if (s.fill) s.fill(!1, a, e);
										else
											for (var i = a; i < e; ++i) s[i] = !1;
									if (s.fill) s.fill(!0, e, e + t);
									else
										for (var n = s.length, y = e; y < n; ++y) s[y] = !0
								}, s.deserializeKeyframes = function(s) {
									for (var e = {}, t = 0, a = {
										X: "x",
										Y: "y",
										A: "sx",
										B: "sy",
										C: "kx",
										D: "ky",
										R: "r",
										L: "a",
										T: "t",
										F: "c",
										V: "v"
									}, i = void 0, n = "", y = !1, r = void 0, x = {}; t <= s.length;) a[i = s[t]] ? (y || (y = !0, e[n] = x), r && (x[r] = this.parseValue(r, n)), r = a[i], n = "", t++) : i && " " !== i ? (n += i, t++) : (t++, x[r] = this.parseValue(r, n), n = "", r = null, x = {}, y = !1);
									return e
								}, s.deserializeShapes = function(s) {
									for (var e = [], t = s.split("\n"), a = /^[a-z]{1,2}$/, i = 0; i < t.length; i++) {
										for (var n = t[i].split(" "), y = 0; y < n.length; y++) {
											var r = n[y];
											"#" === r[0] || a.test(r) || (n[y] = parseFloat(r))
										}
										e.push(n)
									}
									return e
								}, s.parseValue = function(s, e) {
									switch (s) {
										case "c":
											return (e = e.split(","))
												.forEach((function(s, e, t) {
													t[e] = parseFloat(s)
												})), e;
										case "t":
											return e;
										case "v":
											return !!parseInt(e);
										default:
											return parseFloat(e)
									}
								}, s.upload = function(s, e, t) {
									a || (a = s.plugins.prepare)
										.register(this.addMovieClips), a.upload(e, t)
								}, s.addMovieClips = function(s) {
									return s instanceof r.animate.MovieClip && (s._timedChildTimelines.forEach((function(e) {
										-1 === s.children.indexOf(e.target) && a.add(e.target)
									})), !0)
								}, s
							}();
						t.default = i
					}, {}],
					13: [function(s, e, t) {
						"use strict";
						var a = r.Container.prototype;
						a.ac = a.addChild, r.Container.extend = r.Container.e = function(s) {
							return s.prototype = Object.create(a), s.prototype.__parent = a, s.prototype.constructor = s, s
						}
					}, {}],
					14: [function(s, e, t) {
						"use strict";
						var a, i = s("../animate/utils"),
							n = (a = i) && a.__esModule ? a : {
								default: a
							},
							y = r.DisplayObject.prototype,
							x = void 0;
						r.filters && (x = r.filters.ColorMatrixFilter), y.setRenderable = y.re = function(s) {
							return this.renderable = !!s, this
						}, y.t = y.setTransform, y.setMask = y.ma = function(s) {
							return s && !(s instanceof r.Graphics || s instanceof r.Sprite) ? ("undefined" != typeof console && console.warn && console.warn("Warning: Masks can only be PIXI.Graphics or PIXI.Sprite objects."), this) : (this.mask = s, this)
						}, y.setAlpha = y.a = function(s) {
							return this.alpha = s, this
						}, y.setTint = y.i = function(s) {
							"string" == typeof s && (s = n.default.hexToUint(s));
							var e = s >> 16 & 255,
								t = s >> 8 & 255,
								a = 255 & s;
							return this.c(e / 255, 0, t / 255, 0, a / 255, 0)
						}, y.setColorTransform = y.c = function(s, e, t, a, i, n) {
							var y = this.colorTransformFilter;
							return y.matrix[0] = s, y.matrix[4] = e, y.matrix[6] = t, y.matrix[9] = a, y.matrix[12] = i, y.matrix[14] = n, this.filters = [y], this
						}, y.hasOwnProperty("colorTransformFilter") || Object.defineProperty(y, "colorTransformFilter", {
							set: function(s) {
								this._colorTransformFilter = s
							},
							get: function() {
								return this._colorTransformFilter || new x
							}
						}), r.DisplayObject.extend = r.DisplayObject.e = function(s) {
							return s.prototype = Object.create(y), s.prototype.__parent = y, s.prototype.constructor = s, s
						}
					}, {
						"../animate/utils": 12
					}],
					15: [function(s, e, t) {
						"use strict";
						var a = r.Graphics.prototype;
						a.drawCommands = a.d = function(s) {
							for (var e, t = [], a = 0; a <= s.length;) {
								var i = s[a++];
								void 0 === i || this[i] ? (e && (this[e].apply(this, t), t.length = 0), e = i) : t.push(i)
							}
							return this
						}, a.c = a.closePath, a.h = a.addHole, a.m = a.moveTo, a.l = a.lineTo, a.q = a.quadraticCurveTo, a.b = a.bezierCurveTo, a.f = a.beginFill, a.s = a.lineStyle, a.dr = a.drawRect, a.rr = a.drawRoundedRect, a.rc = a.drawRoundedRect, a.dc = a.drawCircle, a.ar = a.arc, a.at = a.arcTo, a.de = a.drawEllipse, a.lf = function(s) {
							return console.warn("Linear gradient fills are not supported"), this.f(s[0])
						}, a.rf = function(s) {
							return console.warn("Radial gradient fills are not supported"), this.f(s[0])
						}, a.bf = function() {
							return console.warn("Bitmap fills are not supported"), this.f(0)
						}, a.sd = function() {
							return console.warn("Dashed strokes are not supported"), this
						}, a.bs = function() {
							return console.warn("Bitmap strokes are not supported"), this
						}, a.ls = function() {
							return console.warn("Linear gradient strokes are not supported"), this
						}, a.rs = function() {
							return console.warn("Radial gradient strokes are not supported"), this
						}
					}, {}],
					16: [function(s, e, t) {
						"use strict";
						var a = r.Sprite.prototype;
						r.Sprite.extend = r.Sprite.e = function(s) {
							return s.prototype = Object.create(a), s.prototype.__parent = a, s.prototype.constructor = s, s
						}
					}, {}],
					17: [function(s, e, t) {
						"use strict";
						var a = r.Text.prototype,
							i = ["center", "right"];
						a.setAlign = a.g = function(s) {
							return "string" == typeof s && (s = i.indexOf(s)), this.style.align = i[s] || "left", this.anchor.x = (s + 1) / 2, this
						};
						var n = {
							o: "font",
							z: "fontSize",
							f: "fontFamily",
							y: "fontStyle",
							g: "fontWeight",
							i: "fill",
							a: "align",
							s: "stroke",
							t: "strokeThickness",
							w: "wordWrap",
							d: "wordWrapWidth",
							l: "lineHeight",
							h: "dropShadow",
							c: "dropShadowColor",
							n: "dropShadowAngle",
							b: "dropShadowBlur",
							p: "padding",
							x: "textBaseline",
							j: "lineJoin",
							m: "miterLimit",
							e: "letterSpacing"
						};
						a.setStyle = a.ss = function(s) {
							for (var e in n) void 0 !== s[e] && (s[n[e]] = s[e], delete s[e]);
							return this.style = s, this
						}, a.setShadow = a.sh = function(s, e, t) {
							var a = this.style;
							return a.dropShadow = !0, void 0 !== s && (s = "#" + s.toString(16)), a.dropShadowColor = y(s, a.dropShadowColor), a.dropShadowAngle = y(e, a.dropShadowAngle), a.dropShadowDistance = y(t, a.dropShadowDistance), this
						};
						var y = function(s, e) {
							return void 0 === s ? e : s
						}
					}, {}],
					18: [function(s, e, t) {
						"use strict";
						t.__esModule = !0;
						var a = x(s("./Container")),
							i = x(s("./DisplayObject")),
							n = x(s("./Sprite")),
							y = x(s("./Graphics")),
							r = x(s("./Text"));

						function x(s) {
							return s && s.__esModule ? s : {
								default: s
							}
						}
						t.default = {
							Container: a.default,
							DisplayObject: i.default,
							Sprite: n.default,
							Graphics: y.default,
							Text: r.default
						}
					}, {
						"./Container": 13,
						"./DisplayObject": 14,
						"./Graphics": 15,
						"./Sprite": 16,
						"./Text": 17
					}],
					19: [function(s, e, t) {
						"use strict";
						if (void 0 === r) throw "Requires PIXI";
						r.animate || (s("./mixins"), Object.defineProperty(r, "animate", {
							enumerable: !0,
							get: function() {
								return s("./animate")
							}
						})), void 0 !== e && e.exports && (e.exports = r.animate)
					}, {
						"./animate": 9,
						"./mixins": 18
					}]
				}, {}, [19])(19)
			}, "object" === x(e) ? s.exports = y() : (i = [], void 0 === (n = "function" == typeof(a = y) ? a.apply(e, i) : a) || (s.exports = n))
		},
		27815: function(s, e, t) {
			"use strict";

			function a(s, e) {
				var t = Object.keys(s);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(s);
					e && (a = a.filter((function(e) {
						return Object.getOwnPropertyDescriptor(s, e)
							.enumerable
					}))), t.push.apply(t, a)
				}
				return t
			}

			function i(s, e, t) {
				return e in s ? Object.defineProperty(s, e, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[e] = t, s
			}
			var n = t(64697),
				y = t(84946);
			s.exports = {
				dev: {
					assetsSubDirectory: "",
					assetsPublicPath: "/",
					proxyTable: {
						"/api": {
							target: y.apiBaseUrlDev,
							changeOrigin: !0,
							pathRewrite: {
								"^/api": ""
							}
						},
						"/source": {
							target: "http://yy.net/2021/LCAPP/" + y.id,
							changeOrigin: !0,
							pathRewrite: {
								"^/source": ""
							}
						}
					},
					host: "localhost",
					port: 8080,
					autoOpenBrowser: "chrome.exe",
					errorOverlay: !0,
					notifyOnErrors: !0,
					poll: !1,
					devtool: "source-map",
					cacheBusting: !0,
					cssSourceMap: !0,
					assetsImgPath: "http://localhost:8080/source/src/"
				},
				build: {
					index: n.resolve("/", "../src/index.html"),
					assetsRoot: n.resolve("/", "../dist"),
					assetsSubDirectory: "",
					assetsPublicPath: y.isCdn ? y.cdnUrl : "./",
					proxyTable: {
						"/api": {
							target: "",
							changeOrigin: !0,
							pathRewrite: {
								"^/api": ""
							}
						}
					},
					productionSourceMap: !1,
					devtool: "#source-map",
					productionGzip: !1,
					productionGzipExtensions: ["js", "css"],
					bundleAnalyzerReport: {
						NODE_ENV: "production",
						BASE_URL: "/api",
						NODE_VER: "?v1.00"
					}.npm_config_report
				},
				projectsConfig: function(s) {
					for (var e = 1; e < arguments.length; e++) {
						var t = null != arguments[e] ? arguments[e] : {};
						e % 2 ? a(Object(t), !0)
							.forEach((function(e) {
								i(s, e, t[e])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : a(Object(t))
							.forEach((function(e) {
								Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(t, e))
							}))
					}
					return s
				}({}, y)
			}
		},
		84946: function(s) {
			var e = "3391",
				t = [{
					id: e,
					isCanvas: !0,
					version: "?v" + (new Date)
						.getTime(),
					isCdn: !0,
					cdnUrl: "https://img1.cdh5.cn/".concat(e, "_34467959/"),
					apiBaseUrlDev: "https://wx.cdh5.cn/".concat(e, "_34467959/index.php?s="),
					apiBaseUrlPro: "https://wx.cdh5.cn/".concat(e, "_34467959/index.php?s=")
				}];
			t[t.length - 1].id = "Projects/" + t[t.length - 1].id, s.exports = t[t.length - 1]
		},
		67140: function(s, e, t) {
			s.exports = '<!DOCTYPE html>\r<html lang="en">\r\r<head>\r    <meta charset="UTF-8">\r    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r    <title>泸州老窖定制酒赤兔抱福</title>\r</head>\r\r<body>\r    <div id="container">\r      \r        \x3c!-- div布局写在此处 --\x3e\r        <div id="dayRank" class="pages">\r            <div class="rankBox rank1 centers">\r                <img src=' + JSON.stringify(t(24157)) + ' class="rankBgs fulls">\r                <div class="rankHead centers">\r                    <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                </div>\r                <p>灯塔水母</p>\r                <div class="rankScore"> 福气值：269854</div>\r            </div>\r            <div class="rankBox rank2">\r                <img src=' + JSON.stringify(t(23508)) + ' class="rankBgs fulls">\r                <div class="rankHead centers">\r                    <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                </div>\r                <p>灯塔水母</p>\r                <div class="rankScore"> 福气值：269854</div>\r            </div>\r            <div class="rankBox rank3">\r                <img src=' + JSON.stringify(t(89931)) + ' class="rankBgs fulls">\r                <div class="rankHead centers">\r                    <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                </div>\r                <p>灯塔水母</p>\r                <div class="rankScore"> 福气值：269854</div>\r            </div>\r            <div class="getAllRnak centers"></div>\r            <div class="dayRankBack"></div>\r        </div>\r\r        <div id="allRank" class="pages">\r            <div class="allRankList">\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                        <img src=' + JSON.stringify(t(96725)) + ' class="rankIcon centers">\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                        <img src=' + JSON.stringify(t(82531)) + ' class="rankIcon centers">\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                        <img src=' + JSON.stringify(t(4691)) + ' class="rankIcon centers">\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r                <div class="allRankListItem">\r                    <div class="allRankListItemHead">\r                        <div>\r                            <img src=' + JSON.stringify(t(19161)) + ' class="fulls">\r                        </div>\r                    </div>\r                    <div class="allRankListItemNick">XXX</div>\r                    <div class="allRankListItemScore">福气值***</div>\r                </div>\r            </div>\r            <div class="toDayRankBtn centers"></div>\r            <div class="allRankBack"></div>\r        </div>\r\r        <div id="info" class="pages">\r            <input type="text" placeholder="请输入姓名" class="userName centers">\r            <input type="tel" placeholder="请输入电话号码" class="userPhone centers" maxlength="11">\r            <textarea placeholder="请输入收货地址" class="userAddr centers"></textarea>\r            <div class="centers subBtn"></div>\r            <div class="infoBack"></div>\r        </div>\r\r        <div id="myAward" class="pages">\r            <div class="awardList centers">\r                \x3c!-- <div class="awardItem">\r                    <img src=' + JSON.stringify(t(70865)) + ' class="fulls">\r                    <div class="myAwardItemInfo"><img src=' + JSON.stringify(t(4905)) + ' alt=""></div>\r                    <div class="awardInfoBtn centers">\r                        <img src=' + JSON.stringify(t(41699)) + ' class="fulls">\r                    </div>\r                </div>\r                <div class="awardItem">\r                    <img src=' + JSON.stringify(t(70865)) + ' class="fulls">\r                    <div class="myAwardItemInfo"><img src=' + JSON.stringify(t(99627)) + ' alt=""></div>\r                </div> --\x3e\r            </div>\r            <div class="myAwardBack"></div>\r            \x3c!-- <div class="myAwardToInfo centers"></div> --\x3e\r            <div class="myAwardMark centers">\r                <img src=' + JSON.stringify(t(23418)) + ' class="fulls">\r            </div>\r            <div class="noListAwardText centers">\r                <img src=' + JSON.stringify(t(49499)) + ' class="fulls">\r            </div>\r        </div>\r        \r        <div id="rule" class="pages">\r            <div class="ruleText centers">\r                <img src=' + JSON.stringify(t(58196)) + ' class="fulls">\r            </div>\r            <div class="ruleBack"></div>\r        </div>\r\r        <div id="toast" class="pages">\r            <div>\r                <p></p>\r            </div>\r        </div>\r    </div>\r    <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"><\/script>\r    <script type="text/javascript">\r        window.onload = function () {\r            window.wx = wx;\r            if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {\r                handleFontSize();\r            } else {\r                if (document.addEventListener) {\r                    document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);\r                } else if (document.attachEvent) {\r                    document.attachEvent("WeixinJSBridgeReady", handleFontSize);\r                    document.attachEvent("onWeixinJSBridgeReady", handleFontSize);\r                }\r            }\r            function handleFontSize() {\r                WeixinJSBridge.invoke(\'setFontSizeCallback\', { \'fontSize\': 0 });\r                WeixinJSBridge.on(\'menu:setfont\', function () {\r                    WeixinJSBridge.invoke(\'setFontSizeCallback\', { \'fontSize\': 0 });\r                });\r            }\r        }\r    <\/script>\r</body>\r\r</html>'
		},
		35222: function(s, e, t) {
			"use strict";
			t.r(e)
		},
		6067: function(s, e, t) {
			s.exports = t.p + "static/images/2022.png?v2.2"
		},
		41699: function(s, e, t) {
			s.exports = t.p + "static/images/addrBtn.png?v2.2"
		},
		52986: function(s, e, t) {
			s.exports = t.p + "static/images/addrBtn2.png?v2.2"
		},
		61358: function(s, e, t) {
			s.exports = t.p + "static/images/allRank.jpg?v2.2"
		},
		62393: function(s, e, t) {
			s.exports = t.p + "static/images/award.jpg?v2.2"
		},
		78650: function(s, e, t) {
			s.exports = t.p + "static/images/award2.jpg?v2.2"
		},
		70865: function(s, e, t) {
			s.exports = t.p + "static/images/awardItemBgImg.png?v2.2"
		},
		5354: function(s, e, t) {
			s.exports = t.p + "static/images/awardText1.png?v2.2"
		},
		60823: function(s, e, t) {
			s.exports = t.p + "static/images/awardText2.png?v2.2"
		},
		96858: function(s, e, t) {
			s.exports = t.p + "static/images/awardText3.png?v2.2"
		},
		84421: function(s, e, t) {
			s.exports = t.p + "static/images/awardText4.png?v2.2"
		},
		132: function(s, e, t) {
			s.exports = t.p + "static/images/awardText5.png?v2.2"
		},
		7e4: function(s, e, t) {
			s.exports = t.p + "static/images/bgm.mp3"
		},
		48326: function(s, e, t) {
			s.exports = t.p + "static/images/btnComp.png?v2.2"
		},
		71156: function(s, e, t) {
			s.exports = t.p + "static/images/btn_click.mp3"
		},
		24477: function(s, e, t) {
			s.exports = t.p + "static/images/buff1.png?v2.2"
		},
		11575: function(s, e, t) {
			s.exports = t.p + "static/images/buff2.png?v2.2"
		},
		21327: function(s, e, t) {
			s.exports = t.p + "static/images/buff3.png?v2.2"
		},
		4047: function(s, e, t) {
			s.exports = t.p + "static/images/buffImgs1.png?v2.2"
		},
		28136: function(s, e, t) {
			s.exports = t.p + "static/images/buffImgs2.png?v2.2"
		},
		73219: function(s, e, t) {
			s.exports = t.p + "static/images/buffImgs3.png?v2.2"
		},
		73418: function(s, e, t) {
			s.exports = t.p + "static/images/buffImgs4.png?v2.2"
		},
		87950: function(s, e, t) {
			s.exports = t.p + "static/images/buffImgs5.png?v2.2"
		},
		74571: function(s, e, t) {
			s.exports = t.p + "static/images/dayRank.jpg?v2.2"
		},
		49197: function(s, e, t) {
			s.exports = t.p + "static/images/eat.mp3"
		},
		38938: function(s, e, t) {
			s.exports = t.p + "static/images/eat2.mp3"
		},
		80987: function(s, e, t) {
			s.exports = t.p + "static/images/fail.jpg?v2.2"
		},
		23418: function(s, e, t) {
			s.exports = t.p + "static/images/giftImg.png?v2.2"
		},
		19161: function(s, e, t) {
			s.exports = t.p + "static/images/head.png?v2.2"
		},
		4583: function(s, e, t) {
			s.exports = t.p + "static/images/headImg1.png?v2.2"
		},
		72637: function(s, e, t) {
			s.exports = t.p + "static/images/headImg2.png?v2.2"
		},
		79877: function(s, e, t) {
			s.exports = t.p + "static/images/hero.png?v2.2"
		},
		90607: function(s, e, t) {
			s.exports = t.p + "static/images/hero2.png?v2.2"
		},
		48544: function(s, e, t) {
			s.exports = t.p + "static/images/hero3.png?v2.2"
		},
		96725: function(s, e, t) {
			s.exports = t.p + "static/images/icon1.png?v2.2"
		},
		82531: function(s, e, t) {
			s.exports = t.p + "static/images/icon2.png?v2.2"
		},
		4691: function(s, e, t) {
			s.exports = t.p + "static/images/icon3.png?v2.2"
		},
		95121: function(s, e, t) {
			s.exports = t.p + "static/images/index2.jpg?v2.2"
		},
		59297: function(s, e, t) {
			s.exports = t.p + "static/images/indexNumBg.png?v2.2"
		},
		62925: function(s, e, t) {
			s.exports = t.p + "static/images/info.jpg?v2.2"
		},
		11961: function(s, e, t) {
			s.exports = t.p + "static/images/leftBtn.png?v2.2"
		},
		87639: function(s, e, t) {
			s.exports = t.p + "static/images/lib.shapes.txt"
		},
		23007: function(s, e, t) {
			s.exports = t.p + "static/images/logo.jpg?v2.2"
		},
		94416: function(s, e, t) {
			s.exports = t.p + "static/images/myAward.jpg?v2.2"
		},
		99627: function(s, e, t) {
			s.exports = t.p + "static/images/myAwardText1.png?v2.2"
		},
		91867: function(s, e, t) {
			s.exports = t.p + "static/images/myAwardText2.png?v2.2"
		},
		18638: function(s, e, t) {
			s.exports = t.p + "static/images/myAwardText3.png?v2.2"
		},
		4905: function(s, e, t) {
			s.exports = t.p + "static/images/myAwardText4.png?v2.2"
		},
		59282: function(s, e, t) {
			s.exports = t.p + "static/images/myAwardText5.png?v2.2"
		},
		63450: function(s, e, t) {
			s.exports = t.p + "static/images/noAward.jpg?v2.2"
		},
		49499: function(s, e, t) {
			s.exports = t.p + "static/images/noAwardText.png?v2.2"
		},
		34864: function(s, e, t) {
			s.exports = t.p + "static/images/obstacle.png?v2.2"
		},
		24157: function(s, e, t) {
			s.exports = t.p + "static/images/rankImg1.png?v2.2"
		},
		23508: function(s, e, t) {
			s.exports = t.p + "static/images/rankImg2.png?v2.2"
		},
		89931: function(s, e, t) {
			s.exports = t.p + "static/images/rankImg3.png?v2.2"
		},
		88624: function(s, e, t) {
			s.exports = t.p + "static/images/rightBtn.png?v2.2"
		},
		93270: function(s, e, t) {
			s.exports = t.p + "static/images/rule.jpg?v2.2"
		},
		58196: function(s, e, t) {
			s.exports = t.p + "static/images/ruleText.png?v2.2"
		},
		70627: function(s, e, t) {
			s.exports = t.p + "static/images/s1_25.png?v2.2"
		},
		51721: function(s, e, t) {
			s.exports = t.p + "static/images/s1_26.png?v2.2"
		},
		22851: function(s, e, t) {
			s.exports = t.p + "static/images/s1_27.png?v2.2"
		},
		88858: function(s, e, t) {
			s.exports = t.p + "static/images/s1_28.png?v2.2"
		},
		12313: function(s, e, t) {
			s.exports = t.p + "static/images/s1_29.png?v2.2"
		},
		23274: function(s, e, t) {
			s.exports = t.p + "static/images/s1_30.png?v2.2"
		},
		55111: function(s, e, t) {
			s.exports = t.p + "static/images/s1_31.png?v2.2"
		},
		52691: function(s, e, t) {
			s.exports = t.p + "static/images/s1_32.png?v2.2"
		},
		23736: function(s, e, t) {
			s.exports = t.p + "static/images/s1_33.png?v2.2"
		},
		81211: function(s, e, t) {
			s.exports = t.p + "static/images/s1_34.png?v2.2"
		},
		84597: function(s, e, t) {
			s.exports = t.p + "static/images/s1_35.png?v2.2"
		},
		71371: function(s, e, t) {
			s.exports = t.p + "static/images/s1_64.png?v2.2"
		},
		10993: function(s, e, t) {
			s.exports = t.p + "static/images/s1_72.png?v2.2"
		},
		40195: function(s, e, t) {
			s.exports = t.p + "static/images/s1_73.png?v2.2"
		},
		59902: function(s, e, t) {
			s.exports = t.p + "static/images/s1_74.png?v2.2"
		},
		32690: function(s, e, t) {
			s.exports = t.p + "static/images/s1_76.png?v2.2"
		},
		10645: function(s, e, t) {
			s.exports = t.p + "static/images/s1_77.png?v2.2"
		},
		30636: function(s, e, t) {
			s.exports = t.p + "static/images/s1_78.png?v2.2"
		},
		80665: function(s, e, t) {
			s.exports = t.p + "static/images/s1_81.png?v2.2"
		},
		56416: function(s, e, t) {
			s.exports = t.p + "static/images/s1_82.png?v2.2"
		},
		82261: function(s, e, t) {
			s.exports = t.p + "static/images/s1_83.png?v2.2"
		},
		46292: function(s, e, t) {
			s.exports = t.p + "static/images/s1_84.png?v2.2"
		},
		93742: function(s, e, t) {
			s.exports = t.p + "static/images/s1_85.png?v2.2"
		},
		27640: function(s, e, t) {
			s.exports = t.p + "static/images/s1_86.png?v2.2"
		},
		32767: function(s, e, t) {
			s.exports = t.p + "static/images/s1_87.png?v2.2"
		},
		51615: function(s, e, t) {
			s.exports = t.p + "static/images/s1_88.png?v2.2"
		},
		16391: function(s, e, t) {
			s.exports = t.p + "static/images/s1_89.png?v2.2"
		},
		85832: function(s, e, t) {
			s.exports = t.p + "static/images/s1_90.png?v2.2"
		},
		2410: function(s, e, t) {
			s.exports = t.p + "static/images/shade.png?v2.2"
		},
		65374: function(s, e, t) {
			s.exports = t.p + "static/images/shapesImg.png?v2.2"
		},
		19141: function(s, e, t) {
			s.exports = t.p + "static/images/sound_on.png?v2.2"
		},
		35128: function(s, e, t) {
			s.exports = t.p + "static/images/textImg.png?v2.2"
		},
		3828: function() {},
		30046: function() {}
	},
	function(s) {
		s.O(0, [736], (function() {
			return e = 43437, s(s.s = e);
			var e
		}));
		s.O()
	}
]);