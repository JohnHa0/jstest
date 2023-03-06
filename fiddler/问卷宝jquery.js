/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
var similar=function(s, t, f) {//----
    if (!s || !t) {
        return 0
    }
    var l = s.length > t.length ? s.length : t.length
    var n = s.length
    var m = t.length
    var d = []
    f = f || 3
    var min = function(a, b, c) {
        return a < b ? (a < c ? a : c) : (b < c ? b : c)
    }
    var i, j, si, tj, cost
    if (n === 0) return m
    if (m === 0) return n
    for (i = 0; i <= n; i++) {
        d[i] = []
        d[i][0] = i
    }
    for (j = 0; j <= m; j++) {
        d[0][j] = j
    }
    for (i = 1; i <= n; i++) {
        si = s.charAt(i - 1)
        for (j = 1; j <= m; j++) {
            tj = t.charAt(j - 1)
            if (si === tj) {
                cost = 0
            } else {
                cost = 1
            }
            d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
        }
    }
    let res = (1 - d[n][m] / l)
    return res.toFixed(f)
}
$(function(){
		var ass={"如果你是新型冠状病毒肺炎患者密切接触者，该怎么办？":"以上皆是","有针对新型冠状病毒的疫苗吗？":"暂时没有","如果你发现邻居家有疑似感染症状，但隐瞒不报，你应该怎么做？":"打电话举报","“新型冠状病毒感染的肺炎”可能的传播途径为（ ）？":"飞沫传播和接触传播","“新型冠状病毒感染的肺炎”可以感染的动物物种为（ ）？":"蝙蝠、家畜、野生动物","为了预防新型冠状病毒肺炎，我们应该怎么做？":"以上都正确","新型冠状病毒医院感染预防与控制基本要求包括（ ）？":"以上都正确","“新型冠状病毒感染的肺炎”的报告时间为？":"2小时","冠状病毒比较脆弱，在体外可存活的时间是（ ）？":"24小时","发热门诊与感染性疾病科室医务人员的防护级别为（ ）？":"一级防护","为了更好地预防呼吸道疾病，在外出时我们普通人最好选择（ ）？":"医用外科口罩","“新型冠状病毒感染的肺炎”的病毒命名为？":"2019-nCoV","新型冠状病毒感染的肺炎”的临床症状表现为（ ）？":"发热、咳嗽、呼吸困难","“新型冠状病毒感染的肺炎”发病到入院的中位时间是几天吗？":"9天","小明春节要回农村过年，为了预防疾病，他应该？":"不与家禽密切接触","如果出现发热的症状，应该怎么办？":"直接去医院","关于新型冠状病毒，以下不能有效灭活病毒的是（ ）？":"醋","“新型冠状病毒感染的肺炎”属哪类传染病？":"乙类","为了预防疾病，我们最好勤洗手，以下哪种清洁方式更好？":"用肥皂和流水洗手","“新型冠状病毒感染的肺炎”的患者年龄集中在以下哪个？":"40-60岁","春运期间，为了预防疾病，返乡回家的你最好怎么办？":"佩戴医用外科口罩出门","新型冠状病毒感染的肺炎”最常见的临床症状表现为（ ）？":"发热，体温会大于37.3度","“新型冠状病毒感染的肺炎”采用的是哪类传染病的护理方式？":"甲","如何避免接触无症状的感染者？":"D.以上都是","在公共场合戴口罩可预防疾病，以下错误的戴口罩姿势是（ ）？":"口罩两面轮流佩戴","武汉仿照北京小汤山医院建的医院取名为（ ）？":"火神山","小明被诊断患上新型冠状病毒肺炎，他的密切接触者不包括（ ）？":"异地很久的朋友","如果你近期去过武汉，该怎么办？":"自行在家隔离两周","下述哪一种结构是病毒颗粒（ ）？":"核衣壳","以下哪种动物不能吃（ ）？":"蝙蝠"};
	//alert(window.location.href)
	if(window.location.href=='https://ks.wjx.top/m/55401577.aspx'){
		setTimeout(function(){
		//	alert("cc")
			ass={
	"一点一点得知（打一字）。": "短",
	"愚公之家（打一成语）": "开门见山",
	"一只黑狗，两头开口。一头咬煤，一头咬手。（打一日常用品）": "火钳",
	"保持沉默（打一歌曲名）": "什么也不说",
	"又到鸡西市（打黑龙江一地名）": "双城",
	"白发诗无的。打一清代人名": "李鸿章",
	"九点（猜一字）": "丸",
	"低头思故乡’猜一唐诗篇目": "望月怀远",
	"鹊巢鸦占（打一成语）": "化为乌有",
	"一只罐，两个口。只装火，不装酒。（打一日常用品）": "灯笼",
	"千秋万岁名――打一作家名": "古龙",
	"十五天（猜一字）": "胖",
	"身穿绿衣裳，肚里水汪汪，生的子儿多，个个黑脸膛。（打一水果）": "西瓜",
	"十月十日(武昌起义), （猜一字）": "朝",
	"欧洲敬献皇帝之物（打香港一地名）": "西贡区",
	"埋头大干见行动(猜一字，九画)": "奎",
	"生的是一碗，煮熟是一碗。不吃是一碗，吃了也一碗。（打一动物名）": "田螺",
	"一样物，花花绿。扑下台，跳上屋。（打一动物名）": "猫",
	"十个哥哥, （猜一字）": "克",
	"轻描柳叶（打一动物名）": "画眉",
	"扰（打一成语）": "半推半就",
	"中间是火山，四边是大海。海里宝贝多，快快捞上来。（打一日常用品）": "火锅",
	"挥手告别（猜一字）": "军",
	"昨日不可留（猜一字）": "乍",
	"又白又软，罩住人脸。守住关口，防止传染。（打一日常用品）": "口罩",
	"前面来了一群鹅，扑通扑通跳下河；等到潮水涨三次，一古脑儿赶上坡。（打一食物）": "饺子",
	"一个老头，不跑不走；请他睡觉，他就摇头 (打一物）": "不倒翁",
	"一人在内, （猜一字）": "肉",
	"天涯海角（打一歌曲名）": "在那遥远的地方",
	"一百五十分 (打一成语)": "时时刻刻",
	"生在青山枝婆娑，离别家乡罐中躲；宾客来了请出我，一起灌水话儿多。（打一食物）": "茶叶",
	"口比肚子大，给啥就吃啥。它吃为了你，你吃端着它。（打一日常用品）": "碗",
	"小小船，白布篷。头也红，桨也红。（打一动物名）": "鹅",
	"一队胡子兵，当了牙医生。早晚来巡逻，打扫真干净。（打一日常用品）": "牙刷",
	"金篐桶，银篐桶；打开来，篐不拢。（打一食物）": "蛋",
	"纸老虎（打一成语）": "外强中干",
	"孤峦叠嶂层云散（打一字）。": "崛",
	"一棵麻，多枝丫。雨一淋，就开花。（打一日常用品）": "雨伞",
	"久雷不雨（猜一字）": "田",
	"送走观音使不得（打一字）。": "还",
	"有硬有软，有长有宽。白天空闲，夜晚上班。（打一日常用品）": "床",
	"白纸包松香，抛在海中央，听得潮水涨，连忙把网张。（打一食物）": "馄饨",
	"固若金汤（打河北一地名）": "保定",
	"远看两个零，近看两个零。有人用了行不得，有人不用不得行。（打一日常用品）": "眼镜",
	"卯日差点做了高官(猜一字，10画)": "冤",
	"静静的顿河（打山西一地名）": "文水",
	"举头邀明月’四字礼貌用语": "敬请光临",
	"千山鸟飞绝，打一电影片名)": "真空地带",
	"除夕残年又逢春（打一字）": "桀",
	"对着你的脸，按住你的心。请你通知主人翁，快快开门接客人。（打一日常用品）": "门铃",
	"咄（打一成语）。 ": "脱口而出",
	"兵家必争之地（打香港一地名）": "旺角",
	"身穿绿衣裳，肩扛两把刀。庄稼地里走，害虫吓得跑。（打一动物名）": "螳螂",
	"站着百分高，躺着十寸长。裁衣做数学，它会帮你忙。（打一日常用品）": "尺",
	"大小生来像个桃，又无核来又无毛；今日被我吃下肚，免得将来挨一刀。（打一食物）": "鸡蛋",
	"当春乃发生’《水浒转》人物诨号": "及时雨",
	"窗前明月光’猜一宋词人": "李清照",
	"亚（打一成语）": "有口难言",
	"生在鸡家湾，嫁到竹家滩。向来爱干净，常逛灰家山。（打一日常用品）": "鸡毛掸子",
	"春和秋都不热（猜一字）": "秦",
	"一个黑孩，从不开口，要是开口，掉出舌头。（打一零食）": "黑瓜子",
	"正字少一横，莫作止字猜（猜一字）": "步",
	"一人挑两小人（猜一字）": "夹",
	"白日依山尽，打一气象用语": "傍晚多云",
	"柳暗花明又一村（打河南一地名）": "新乡",
	"九十九（猜一字）": "白",
	"老式波音（打一歌曲名）": "涛声依旧",
	"一人（猜一字）": "大",
	"弄瓦之喜（猜一字）": "姓",
	"多半人观三颗星(猜一字，8画)": "炙",
	"阶前有鸟迹（成语一)": "门可罗雀",
	"金乌西坠白头看（打河南一地名）": "洛阳",
	"外麻里光，住在闺房。姑娘怕戳疼，拿它来抵挡。（打一日常用品）": "顶针",
	"黄河大合唱（打一歌曲名）": "摇篮曲",
	"潘仁美卖国（打内蒙古一地名）": "通辽",
	"一（打一成语）": "接二连三",
	"飞鸣镝（打一成语）": "弦外之音",
	"为天下唱（打内蒙古一地名）": "呼和浩特",
	"尖尖长嘴，细细小腿。拖条大尾，疑神疑鬼。（打一动物名）": "狐狸",
	"十二点（猜一字）": "斗",
	"明日岁华新’，一个天文名词": "光年",
	"腹中香甜如蜜，心中花红柳绿；波谷浪尖打滚，白龙湖中沐浴。（打一食物）": "汤圆",
	"上下一起说，花时特别短(字一)": "昙",
	"土里生，水里捞，石头缝里走一遭；摇身一变白又净，没有骨头营养高。（打一食物）": "豆腐",
	"第一人称（打一歌曲名）": "那就是我",
	"蜜饯黄连（打一成语）": "同甘共苦",
	"十五天, （猜一字）": "胖",
	"一人腰上挂把弓, （猜一字）": "夷",
	"元宵之后柳吐芽(打一成语)": "节外生枝",
	"同是长干人《聊斋志异》篇目": "酒鬼",
	"席间用它酬宾朋，出门用它来饯行；阵前用它可壮胆，客到用它来洗尘。（打一饮品）": "酒",
	"宝玉不知何处去，林妹玉体瘦半身(打―字）": "宋",
	"生不能吃，熟不能吃，一边烧，一边吃。（打一用品）": "香烟",
	"金木水火（猜一字）": "坎",
	"逆水划船（打一成语）": "力争上游",
	"十五的月亮悬庭前（北京地名)": "圆明园",
	"红娘子，上高楼。心里疼，眼泪流。 （打一日常用品）": "蜡烛",
	"屡试屡成（打一动物名）": "百灵",
	"乘人不备（猜一字）": "乖",
	"四方面军（打一歌曲名）": "东西南北兵",
	"十五始展眉成语一": "喜出望外",
	"笑死人（打一成语）": "乐极生悲",
	"一口吃掉牛尾巴（猜一字）": "告",
	"丹田（打一歌曲名）": "红土地",
	"十元买早餐,八元买豆干, （猜一字）": "干",
	"娘子娘子，身似盒子。麒麟剪刀，八个钗子。（打一动物名）": "螃蟹",
	"一藤连万家，家家挂只瓜。瓜儿长不大，夜夜会开花。（打一日常用品）": "电灯",
	"先收集然后整理（打河南一地名）": "焦作",
	"板（打一成语）": "残茶剩饭",
	"云随雁字悬(字一)": "会",
	"从打工起，终于出头（打重庆一地名）": "巫山",
	"有头没有尾，有角又有嘴。扭动它的角，嘴里直淌水。（打一日常用品）": "水龙头",
	"呀（打一成语）": "唇齿相依",
	"一把刀，顺水漂。有眼睛，没眉毛。（打一动物名）": "鱼",
	"集资共建，大桥贯通（打重庆一地名）": "铜梁",
	"生在山崖，落在人家。凉水浇背，千刀万剐。（打一日常用品）": "磨刀石",
	"田中（猜一字）": "十",
	"一只没脚鸡，立着从不啼。吃水不吃米，客来敬个礼。（打一日常用品）": "茶壶",
	"醉翁之意不在酒（打一歌曲名）": "好山好水好地方",
	"个个参加整改 (打一常用词)": "政策",
	"离别正堪悲（打一歌曲名）": "欢聚",
	"一锅粥，一万块。 (打五字成语)": "物以希为贵",
	"弄璋之喜（猜一字）": "甥",
	"玩儿房（打一歌曲名）": "游戏人间",
	"八十八（打一成语）": "入木三分",
	"客人初至（打辽宁一地名）": "新宾",
	"无脚也无手，身穿鸡皮皱。谁若碰着它，吓得连忙走。（打一动物名） ": "蛇",
	"脚着暖底靴，口边出胡须。夜里当巡捕，日里把眼眯。（打一动物名）": "猫",
	"土里下种，水里开花；袋里团圆，案上分家。（打一食物）": "豆腐",
	"小小一只缸，装满一肚浆；打开看一看，黄白不一样。（打一食物）": "鸡蛋",
	"对方进了一球（打一字）。": "哼",
	"一物三口，有腿无手。谁要没它，难见亲友。（打一日常用品）": "裤子",
	"十三点, （猜一字）": "汁",
	"生在青山叶儿蓬，死在湖中水染红；人家请客先请我，我又不在酒席中。（打一植物）": "茶叶",
	"龙舟（打一歌曲名）": "中国船",
	"汕头一周游（打一歌曲名）": "山不转水转",
	"头前两把刀，钻地害禾苗。捕来烘成干，一味利尿药。（打一动物名）": "蝼蛄",
	"头戴周瑜帽，身穿张飞袍。自称孙伯符，脾气像马超。（打一动物名）": "蟋蟀",
	"薄薄皮儿做春卷，又不咸来又不甜；吃千吃万吃不饱，朵朵白云上了天": "香烟",
	"还来就菊花《红楼梦》菊花诗一句": "待到重阳日",
	"照相底片（打一成语）": "颠倒黑白",
	"暑假 打一医学名词": "间歇日",
	"千里来慰问（打黑龙江一地名）": "抚远",
	"左手五个，右手五个。拿去十个，还剩十个。（打一日常用品）": "手套",
	"圆筒白浆糊，早晚挤一股，兄弟三十二，都说有好处。（打一生活用品）": "牙膏",
	"竹林诸贤堪赞颂（打一歌曲名）": "七子之歌",
	"垃圾箱（打一成语）": "藏垢纳污",
	"白白点点似雪花，落下水里不见它；单独吃它会皱眉，不吃它时活不下。（打一调味品）": "食盐",
	"只只乒乓球，潜入水中游。球儿浮起来，赶快捞起走。（打一食物）": "汤圆",
	"双手赞成（打一成语）": "多此一举",
	"东南西北皆欲往（打一歌曲名）": "走四方",
	"余香乍入衣《红楼梦》人名一": "花袭人",
	"无为在歧途（六字口语)": "不知道怎么行",
	"为数虽少，却在百万之上。打一字": "一",
	"一星星，一点点。走大路，钻小洞。（打一动物名）": "蚂蚁",
	"十二点, （猜一字）": "斗",
	"龙（打一成语）": "充耳不闻",
	"人不在其位（猜一字）": "立",
	"船板硬，船面高。四把桨，慢慢摇。（打一动物名）": "乌龟",
	"两耳不闻窗外事（打一歌曲名）": "唯一的思念",
	"楼台接楼台，层层叠起来。上面飘白雾，下面水花开。（打一日常用品）": "蒸笼",
	"十字架下三个人, （猜一字）": "来",
	"头大尾细，全身生疥。拿起索子，跟你讲价。（打一日常用品）": "称",
	"平日不思，中秋想你。有方有圆，又甜又蜜。（打一日常用品）": "月饼",
	"元宵节后(猜一字，七画)": "完",
	"山花红烂漫（打内蒙古一地名）": "赤峰",
	"一口咬定（猜一字）": "交",
	"你打我不恼，背后有人挑。心中亮堂堂，指明路一条。（打一日常用品）": "灯笼",
	"射阳店主站柜台（打山东一地名）": "东营",
	"身穿红衣裳，常年把哨放，遇到紧急事，敢往火里闯。（打一日常用品）": "灭火器",
	"将军戴顶铁帽，脾气可算火爆；见了宾客脱帽，开口尽是唾沫。（打一饮品）": "啤酒",
	"抵达分水处（打山西一地名）": "临汾",
	"为你打我，为我打你。打到你皮开，打得我出血。（打一动物名）": "蚊子",
	"十五人, （猜一字）": "陕",
	"上不怕水，下不怕火；家家厨房，都有一个 (打一生活用品）": "锅",
	"十字对十字,太阳对月亮, （猜一字）": "朝",
	"盲人摸象（打一成语）": "不识大体",
	"禾苗尽阡陌(猜一字，11画)": "惩",
	"华而不实（打一植物名）": "无花果",
	"猛将百余人，无事不出城。出城就放火，引火自烧身。（打一日常用品）": "火柴",
	"双双无突破（打吉林一地名）": "四平",
	"泵（打一成语）": "水落石出",
	"十一个读书人,（猜一字）": "仕",
	"两对情人互相思（打一歌曲名）": "双双燕",
	"风涛翻复拂天池(打一地理词语)": "暴涨潮",
	"一只八宝袋，样样都能装。能装棉和纱，能装铁和钢。（打一日常用品）": "针线包",
	"泥屋泥墙头，子子孙孙做贼头。 (打一动物)": "老鼠",
	"青梅煮酒论英雄（打一歌曲名）": "只有你和我",
	"枪弹上膛（打一成语）": "一触即发",
	"后村闺中听风声（打一字）。": "封",
	"像糖又像盐，不咸又不甜；烧菜放一点，味道特别鲜。（打一调味品）": "味精",
	"小姑娘，夜纳凉。带灯笼，闪闪亮。（打一动物名）": "萤火虫",
	"促其反正（打吉林一地名）": "敦化",
	"十觞亦不醉”猜唐诗篇目一": "将进酒",
	"象只大蝎子，抱起似孩子，抓挠肚肠子，唱出好曲子。（打一乐器）": "琵琶",
	"旭日不出（猜一字）": "九",
	"生来青又黄，好比水一样。把它倒水里，它能浮水上。（打一日常用品）": "油",
	"呼作白玉盘’打一字": "诮",
	"沟里走，沟里串。背了针，忘了线。（打一动物名）": "刺猬",
	"判（打一成语）": "一刀两断",
	"小小狗，手里走。走一走，咬一口。（打一日常用品）": "剪刀",
	"4个人搬个木头, （猜一字）": "杰",
	"耳朵长，尾巴短。只吃菜，不吃饭。（打一动物名）": "兔子",
	"明月松间照’，打一科学家名": "林光达",
	"赶制元宵闲不住(猜五字口语)": "忙得团团转",
	"归时欲沾巾’孟浩然诗一句": "还将两行泪",
	"故乡在大海，被人捞上来，烈日无情晒，身体却变白。（打一调味品）": "盐",
	"举手可近月《水浒传》人物诨号一": "摸着天",
	"者（打一成语）": "有目共睹",
	"何谓五岳（打辽宁一地名）": "盘山",
	"田间竞赛 打一字": "毕",
	"山水之间，一方独立（打重庆一地名）": "涪陵",
	"主（打一成语）": "一往无前",
	"全面开荒（打一成语）": "不留余地",
	"出生在水中，偏偏怕水冲；若是水一到，马上无影踪。（打一调味品）": "盐",
	"积雪浮云端（地理名词)": "高寒带",
	"十月十日, （猜一字）": "朝",
	"一支香，地里钻。弯身走，不会断。（打一动物名）": "蚯蚓",
	"长胳膊，猴儿脸。大森林里玩得欢。摘野果，捣鹊蛋，抓住树枝荡秋千。（打一动物名）": "长臂猿",
	"一把辛酸泪，写成红楼梦。 (打一成语)": "水落石出",
	"到了长城放声唱（打一歌曲名）": "好汉歌",
	"青龙白虎照秦镜（打一歌曲名）": "二泉映月",
	"日照清流涌（打山西一地名）": "阳泉",
	"清浊合流（打一成语）": "泾渭不分",
	"四柱八栏杆，住着懒惰汉。鼻子团团转，尾巴打个圈。（打一动物名）": "猪",
	"半个西瓜样，口朝上面搁。上头不怕水，下头不怕火。（打一日常用品）": "锅",
	"举重比赛（打一成语）": "斤斤计较",
	"零存整取（打一成语）": "积少成多",
	"一人一张口,口下长只手, （猜一字）": "拿",
	"脚儿小，腿儿高。戴红帽，穿白袍。（打一动物名）": "丹顶鹤",
	"高山一群小白鸽，尖尖嘴儿满肚食，刚从汤溪城里过，又到杜家去投宿。（打一食物）": "汤团",
	"粽子脸，梅花脚。前面喊叫，后面舞刀。（打一动物名）": "狗",
	"佳作已见报（打山东一地名）": "文登",
	"雄踞山寨（打吉林一地名）": "公主岭",
	"自幼生在八戒家，长大就往外面拉；熊熊烈火我不怕，水是水来渣是渣。（打一调味品）": "猪油",
	"水映横山落残红（打一字）": "绿",
	"十叁点（猜一字）": "汁",
	"新媳妇探亲（打一歌曲名）": "回娘家",
	"黯（打一成语）": "有声有色",
	"两个瘦子细又长，扭在一起跳池塘；有人拿棒来救起，瘦子变得胖又黄。（打一食物）": "油条",
	"本来一大片，变成千条线；是线不缝衣，只在锅里见。（打一食物）": "面条",
	"《聊斋志异》（打一成语）": "鬼话连篇",
	"单方告别（打一成语）": "一面之词",
	"落红有主（打辽宁一地名）": "丹东",
	"共同走江湖（打山西一地名）": "洪洞",
	"除了我，非它莫属(字一)": "陀",
	"遥指红楼是妾家（打一字）": "舒",
	"西安相聚之日（打一字）。": "晒",
	"两山相对又相连，中有危峰插碧天（猜一字）": "由",
	"叫猫不抓鼠，像熊爱吃竹。摇摆惹人爱，是猫还是熊？（打一动物名） ": "熊猫",
	"多兄长（打一动物名）": "八哥",
	"画前画后费心思（打一字）": "田",
	"面孔白如霜，跌入圆池塘；待人来救起，白脸已腊黄。（打一食物）": "油煎豆腐",
	"三人两口一匹马, （猜一字）": "验",
	"一曲高歌夕阳下（猜一字）": "曹",
	"石榴成熟（打一成语）": "皮开肉绽",
	"三角四棱长，里面珍珠藏，想吃珍珠肉，解带脱衣裳。（打一食物）": "粽子",
	"白胖胖，四方方，一块一块摆板上，能做菜，能做汤，常常吃它有营养。（打一食物）": "豆腐",
	"一只黑鞋子，黑帮黑底子。挂破鞋子口，漏出白衬子。（打一日常用品）": "西瓜子",
	"一群黄鸡娘，生蛋进船舱。烤后一声响，个个大过娘。（打一日常用品）": "爆米花",
	"元宵前后共团圆(猜一字，12画)": "期",
	"是笔不能画，和电是一家，要知有无电，可去请教它。（打一仪器）": "测电笔",
	"乖（打一成语）": "乘人不备",
	"一直真心相对（打一字）。": "非",
	"四通八达（打一成语）": "头头是道",
	"江西如今变了样（打一字）。": "冷",
	"田（打一成语）": "挖空心思",
	"泾渭不分（打吉林一地名）": "浑江",
	"十（打一成语）": "纵横交错",
	"车谱（打一歌曲名）": "四季歌",
	"平日不思，中秋想你；有方有圆，又甜又蜜。（打一食物）": "月饼",
	"终日琴堂醉未醒（打一词牌名）": "如梦令",
	"不怕细菌小，有它能看到，化验需要它，科研不可少。（打一仪器）": "显微镜",
	"前面来只船，舵手在上边。来时下小雨，走后路已干。（打一日常用品）": "熨斗",
	"尽收眼底（打一成语）": "一览无遗",
	"八一勋章（打辽宁一地名）": "彰武",
	"生意兴隆在子夜 (打一成语)": "盛极一时",
	"一颗小红枣，一屋盛不了。只要一开门，枣儿往外跑。（打一日常用品）": "油灯",
	"好去到人间（法国名胜)": "凡尔赛宫",
	"打边鼓（打一成语）": "旁敲侧击",
	"张先生月中自来(猜一字，九画)": "看",
	"离开云南回塞北(猜一字，七画)": "弃",
	"非要一起齐到来(猜一字，15画)": "齑",
	"尽职更尽责，小心带爱心(猜一字，12画)": "赏",
		"进洞像龙，出洞像凤。凤生百子，百子成龙。（打一动物名）":"蚕",
		"叫猫不抓鼠，像熊爱吃竹。摇摆惹人爱，是猫还是熊？（打一动物名） 熊猫多兄长（打一动物名）":"熊猫"
}
		$("#q1").val("田亮")//https://ks.wjx.top/m/55401577.aspx
	$("#q2").val("15950348766")
	 for (var j = 3; j <= 8; j++) {
                //  alert(html.find("#div"+j).html())
                var qu = $("#div" + j).find(".field-label").html().split("<")[0];
				//alert(qu)
               var an=ass[qu]
				//   alert(an)

$("#q"+j).val(an)
            }

	/*for(var i=57;i<=59;i++){
		var qu=$('#div'+i).find(".field-label").html().split(". ")[1].split("<")[0]
			//alert(qu+" "+ass[qu+""])
			//if(qu=="国家会展中心（上海）的建筑形象犹如___") alert(ass[qu]);
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_1]").html()==ass[qu]) {
			//alert()
			//alert($("div[for=q"+i+"_1]").parent().children().size())
			$("div[for=q"+i+"_1]").parent().children().trigger("click");
			$("div[for=q"+i+"_1]").parent().children().children().trigger("click");
			$("div[for=q"+i+"_1]").trigger("click");}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_2]").html()==ass[qu]) {$("div[for=q"+i+"_2]").parent().children().trigger("click");$("div[for=q"+i+"_2]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_3]").html()==ass[qu]) {$("div[for=q"+i+"_3]").parent().children().trigger("click");$("div[for=q"+i+"_3]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_4]").html()==ass[qu]) {$("div[for=q"+i+"_4]").parent().children().trigger("click");$("div[for=q"+i+"_4]").parent().trigger("click");}
	}*/
	
	},1000);
	}
	else if(window.location.href.indexOf('https://ks.wjx.top/m/53980530.aspx')>-1){
		//alert('cc')
			setTimeout(function(){
				ass={
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善党的领导制度体系，提高党____水平。（）": "A.科学执政|B.民主执政|C.依法执政",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，坚持立党为公、执政为民，保持党同人民群众的血肉联系，把______贯穿党治国理政全部工作之中，巩固党执政的初级基础，厚植党执政的群众基础，通过完善制度保证人民在国家治理中的主体地位，着力防范脱离群众的危险。（）": "A.尊重民意|B.汇集民智|C.凝聚民力|D.改善民生",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化的总体目标是____。（）": "A.到我们党成立一百年时，在各方面制度更加成熟更加定型上取得明显成效|B.到2035年，各方面制度更加完善，基本实现国家治理体系和治理能力现代|C.到新中国成立一百年时，全面实现国家治理体系和治理能力现代化，使中国特色社会主义制度更加巩固、优越性充分展现",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善____的和平外交政策，推动构建人类命运共同体。（）": "A.独立自主",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善党和国家监督体系，强化对____运行的制约和监督。（）": "C.权力",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议强调，我国国家制度和国家治理体系具有多方面的显著优势，包括：坚持全面依法治国，建设社会主义治理国家，切实保障社会____和人民权利的显著优势。（）": "B.公平正义",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，中国共产党领导是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势，党是最高____领导力量。（）": "B.政治",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善____制度体系，推进祖国和平统一。（）": "A.一国两制",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，推动全党增强____、坚定____、做到____，自觉在思想上政治上行动上同以习近平同志为核心的党中央保持高度一致，坚决把维护习近平总书记党中央的核心、全党的核心地位落到实处。（）": "A.四个意识|B.四个自信|C.两个维护",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，确保全党遵守党章，恪守党的性质和宗旨，坚持用共产主义远大理想和中国特色社会主义公共理想凝聚全党、团结人民，用习近平新时代中国特色社会主义思想______，夯实党执政的思想基础。（）": "A.武装全党|B.教育人民|D.指导工作",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持党指挥枪，确保人民军队绝对忠诚于党和人民，有力保障国家______的显著优势。（）": "A.主权|C.安全|D.发展利益",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持____、选贤任能，聚天下英才而用之，培养造就更多更优秀人才的显著优势。（）": "C.德才兼备",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善____对人民军队的绝对领导制度，确保人民军队忠实履行新时代使命任务。（）": "A.党",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善繁荣发展社会主义____的制度，巩固全体人民团结奋斗的共同思想基础。（）": "A.先进文化",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持以人民为中心的发展思想，不断保障和改善民生、增进人民福祉，走____道路的显著优势。（）": "A.共同富裕",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国市工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家，国家的一切权力属于____。（）": "A.人民",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持共同的______，弘扬中华优秀传统文化、革命文化、社会主义先进文化，促进全体人民在思想上精神上紧紧团结在一起的显著优势。（）": "A.理想信念|B.价值理念|C.道德观念",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善统筹城乡的____制度，满足人民日益增长的美好生活需要。（）": "A.民生保障",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持____、____，善于____、____，使社会始终充满生机活力的显著优势。（）": "A.改革创新 B.与时俱进 C.自我完善 D.自我发展",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善___的社会治理制度，保持___、维护___。（）": "A.共建共治共享|B.社会稳定|C.国家安全",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，贯彻新时代党的建设总要求，深化党的建设制度改革，坚持依规治党，建立建全以党的____为统领，全面推进党的各方面建设的体制机制。（）": "B.政治建设",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善社会主义基本经济制度，推动经济____发展。（）": "B.高质量",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，完善党和国家____，把党的领导贯彻到党和国家所有机构履行职责全过程，推动各方面协调行动、增强合力。（）": "A.机构职能",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善人民当家作主制度体系，发展社会主义____。　（）": "A.民主政治",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，全民贯彻党的基本理论、基本路线、基本方略，持续推进党的理论创新、实践创新、制度创新，使一切工作顺应____、符合____、体现____，确保党始终走在时代前列、得到人民衷心拥护。（）": "A.时代潮流|B.发展规律|C.人民愿望",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，健全维护党的集中统一的组织制度，形成党的______上下贯通、执行有力的严密体系，实现党的组织和党的工作全覆盖。（）": "A.中央组织|C.地方组织|D.基层组织",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，完善担当作为的激励机制，促进各级领导颁布增强____、政治领导本领、改革创新本领、科学发展本领、依法执政本领、群众工作本领、狠抓落实本领、驾驭风险本领，发扬斗争精神，增强斗争本领。（）": "A.学习本领",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议强调，坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力____，是全党的一项重大战略任务。（）": "B. 现代化",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持____，铸牢中华民族共同体意识，实现共同团结奋斗、共同繁荣发展的显著优势。（）": "A.各民族一律平等",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善生态文明制度体系，促进人与自然____。（）": "A.和谐共生",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持“一国两制”，保持香港、澳门长期繁荣稳定，促进祖国____的显著优势。（）": "A.和平统一",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，贯彻党的群众路线，完善党员、干部联系群众制度，创新互联网时代群众工作机制，始终做到为了群众、________，深入群众、深入基层。健全联系广泛、服务群众的群团工作体系。推动人民团体增强政治性、先进性、群众性，把各自联系的群众紧紧团结在党的周围。（）": "B.相信群众|C.依靠群众|D.引领群众",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持____调动各方面积极性，集中力量办大事的显著优势。（）": "A.全国一盘棋",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，健全党中央对重大工作的领导体制，强化党中央决策议事协调机构职能作用，完善推动党中央重大决策落实机制，严格执行向____请示报告制度，确保令行禁止。（）": "B.党中央",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，不忘初心、牢记使命作为加强____的永恒课题和全体党员、干部的终身课题，形成长效机制，坚持不懈锤炼党员、干部忠诚干净担当的政治品格。（）": "C.党的建设",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，坚持立党为公、执政为民，保持党同人民群众的血肉联系，把______贯穿党治国理政全部工作之中，巩固党执政的阶级基层，厚植党执政的群众基础，通过完善制度保证人民在国家治理中的主体地位，着力防范脱离群众的危险。（）": "A.尊重民意|B.汇集民智|C.凝聚民力|D.改善民生",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善中国特色社会主义行政体制，构建____的政府治理体系。（）": "A.职责明确|C.依法行政",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议强调，我国国家制度和国家治理体系具有多方面的显著优势，包括：坚持____，发展人民民主，密切联系群众，紧紧依靠人民推动国家发展的显著优势。（）": "B.人民当家作主",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议强调，我国国家制度和国家治理体系具有多方面的显著优势，包括：坚持党的___，坚持党的___，保持___，确保国家始终沿着社会主义方面前进的显著优势。（）": "A.集中统一领导|B.科学理论|C.政治稳定",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议强调，要把我国制度优势更好转化为国家____，为实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦提供有力保证。（）": "B.治理效能",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，坚决同一切影响党的先进性、弱化党的纯洁性的问题作斗争，大力纠治形式主义、官僚主义，不断增强党的____，确保党始终成为中国特色社会主义事业的坚强领导核心。（）": "C. 创造力、凝聚力、战斗力",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，完善党领导人大、政府、政协、监察机关、检察机关、武装力量、人民团体、企事业单位、基层群众自治组织、社会组织等制度，健全各级党委(党组)工作，确保党在各种组织中发挥____作用。（）": "B.领导",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，中国特色社会主义制度是党和人民在长期实践探索中形成的____，我国国家治理一切工作和活动都依照中国特色社会主义制度开展，我国国家治理体系和治理能力是中国特色社会主义制度及其执行能力的集中体现。（）": "B.科学制度体系",
	"2019年10月28日至31日，中国共产党第十九届中央委员会第四次全体会议在北京举行。会议提出，坚持和完善中国特色社会主义____，提高党依法治国、依法执政能力。（）": "C.法治体系",
	"2019年10月31日，十九届四中全国通过的《中共中央关于坚持和完善中国特色社会主义制度推进国家治理体系和治理能力现代化若干重大问题的决定》指出，我国国家制度和国家治理体系具有多方面的显著优势，主要是：坚持独立自主和对外开放相统一，积极参与____，为构建人类命运共同体不断作出贡献的显著优势。（）": "C.全球治理"
}
			
			
			//$("#q1").val("马玉珑")
			//$("#q2").val("18915299015")
					$("#q3").val("其他单位‐其他单位")
		$("#q4").val("是")
 for (var i = 5; i <= 7; i++) {
//alert($.trim($('#div'+i).find(".field-label").html().split(". ")[1].split("<")[0]))
		var qu=$.trim($('#div'+i).find(".field-label").html().split(". ")[1].split("<")[0]).split("&")[0]
		//	alert(qu+" "+ass[qu+""])
			//if(qu=="国家会展中心（上海）的建筑形象犹如___") alert(ass[qu]);
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_1]").html())>-1) {$("div[for=q"+i+"_1]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_2]").html())>-1) {$("div[for=q"+i+"_2]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_3]").html())>-1) {$("div[for=q"+i+"_3]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_4]").html())>-1) {$("div[for=q"+i+"_4]").parent().trigger("click");}
	
	}
	for (var i = 20; i <= 24; i++) {
		var qu=$.trim($('#div'+i).find(".field-label").html().split(". ")[1].split("<")[0]).split("&")[0]
	//		alert(qu+" "+ass[qu+""])
			//if(qu=="国家会展中心（上海）的建筑形象犹如___") alert(ass[qu]);
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_1]").html())>-1) {$("div[for=q"+i+"_1]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_2]").html())>-1) {$("div[for=q"+i+"_2]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_3]").html())>-1) {$("div[for=q"+i+"_3]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_4]").html())>-1) {$("div[for=q"+i+"_4]").parent().trigger("click");}
	
	}
			},1000);

			setTimeout(function(){$("#ctlNext").trigger("click");},8000)
	}
		else if(window.location.href.indexOf('https://ks.wjx.top/m/65759893.aspx?from=timeline')>-1){
			ass={
	"1、《江苏省节约用水条例》颁布并施行于（）。":"B.  2016年",
	"2、《盐城市节约用水管理办法》自2020年2月（）日起施行。":"D. 15",
	
}
	setTimeout(function(){
		$("#q1_0").val("刘成文")
	$("#q1_1").val("15950348766")
			$("#q1_2").val("340111198802049615")
			//alert("1、《江苏省节约用水条例》颁布并施 行于（）。"=="1、《江苏省节约用水条例》颁布并施行于（）。")
			//return;
	for(var i=2;i<=51;i++){
		var qu=$.trim($('#div'+i).find(".field-label").html().split("<")[0]).split("&")[0]
			//alert(qu+" "+ass[qu])
			//if(qu=="国家会展中心（上海）的建筑形象犹如___") alert(ass[qu]);
			//alert($("div[for=q"+i+"_1]").html())
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_1]").html()==ass[qu]) {
			//alert()
			//alert($("div[for=q"+i+"_1]").parent().children().size())
			$("div[for=q"+i+"_1]").html("-------------");
				$("div[for=q"+i+"_1]").parent().trigger("click");
			}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_2]").html()==ass[qu]) {$("div[for=q"+i+"_2]").html("-----------");$("div[for=q"+i+"_2]").parent().trigger("click");
		}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_3]").html()==ass[qu]) {$("div[for=q"+i+"_3]").html("-------------");$("div[for=q"+i+"_3]").parent().trigger("click");
		}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_4]").html()==ass[qu]) {$("div[for=q"+i+"_4]").html("-----------");$("div[for=q"+i+"_4]").parent().trigger("click");
		}
	
	}
	/*for(var i=57;i<=59;i++){
		var qu=$('#div'+i).find(".field-label").html().split(". ")[1].split("<")[0]
			//alert(qu+" "+ass[qu+""])
			//if(qu=="国家会展中心（上海）的建筑形象犹如___") alert(ass[qu]);
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_1]").html()==ass[qu]) {
			//alert()
			//alert($("div[for=q"+i+"_1]").parent().children().size())
			$("div[for=q"+i+"_1]").parent().children().trigger("click");
			$("div[for=q"+i+"_1]").parent().children().children().trigger("click");
			$("div[for=q"+i+"_1]").trigger("click");}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_2]").html()==ass[qu]) {$("div[for=q"+i+"_2]").parent().children().trigger("click");$("div[for=q"+i+"_2]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_3]").html()==ass[qu]) {$("div[for=q"+i+"_3]").parent().children().trigger("click");$("div[for=q"+i+"_3]").parent().trigger("click");}
		if(typeof(ass[qu])!='undefined'&&$("div[for=q"+i+"_4]").html()==ass[qu]) {$("div[for=q"+i+"_4]").parent().children().trigger("click");$("div[for=q"+i+"_4]").parent().trigger("click");}
	}*/
		setTimeout(function(){
			
			$("#ctlNext").trigger("click")
		},48000+parseInt(Math.random()*10)*1000)
	},500);
	}	else if(window.location.href.indexOf('https://ks.wjx.top/m/54424658.aspx')>-1){
			ass={
	"习近平总书记在中央全面深化改革委 员会第十二次会议上强调:“要从保护人 民健康、保障国家安全、维护国家长治 久安的高度，把（  ）纳入国家安 全体系，系统规划国家生物安全风险防 控和治理体系建设，全面提高国家生物 安全治理能力。”": "生物安全",
	"携带 宠物（猫或犬）入境时，每人每次可携 带（  ）只。": "1",
	"该种外来有 害生物的繁殖能力特别强，一个月能产 1000-1200粒卵，为逃避水中天敌鱼类的 觅食，确保卵不被吃掉，常水沟边的水 泥壁上，如图。请问它是什么（  ）。": "福寿螺",
	"（  ）于1982年 首次在南京中山陵发现，虽然得到全力 防治，但30多年来，全国因该有害生物 危害损失的松树累计仍达数十亿株，造 成的直接经济损失和生态服务价值损失 上千亿元。": "松材线虫病",
	"2006年， 北京曾发生131例广州管圆线虫病例，就 是由生食或半生食的（  ）螺肉而 引起的，媒体曾广泛报道。是人畜共患 的广州管圆线虫的中间宿主，能引起嗜 曙红细胞脑膜炎。": "福寿螺",
	"国外发 生重大动植物疫情并可能传入中国时， （  ）": "以上三项都包括",
	"我国 禁止旅客携带新鲜水果入境的原因不包 括下列哪项（  ）": "风味欠佳",
	" 下列哪项入境旅客行为不是禁止的 （  ）。": "携带一小盒糖果自 用",
	"下列哪些物品在旅客入境时要接受 动植物检疫（  ）?": "植物种 子",
	"违反规定，有（  ）行为的 ，由口岸动植物检疫机关处以罚款:": " 未经口岸动植物检疫机关许可擅自将进 境动植物、动植物产品或者其他检疫物 卸离运输工具或者运递的;|未报检或者 未依法办理检疫审批手续的;|擅自调离 或者处理在口岸动植物检疫机关指定的 隔离场所中隔离检疫的动植物的。",
	"外 来有害生物的特点有哪些（  ）?": "这个外来物种能够在入侵地的自 然或人工生态系统中定居、自行繁殖和 扩散|物种是外来的、不是本国或本区域 的|导致危害，明显影响当地的生态环境 ，损害当地生物多样性、农林牧渔业生 产或人类健康",
	"外来有害生物入侵我国 有哪些途径?（  ）": "人为引进| 随运输工具和人类活动无意带入|自然传 入",
	"下面哪些是入侵生物?（  ） ": "非洲大蜗牛|小龙虾|加拿大一枝黄花 |美国白蛾|红火蚁",
	"您认为入侵生物有 哪些危害?（  ）": "为害我国经济 作物、农作物等造成损失|没有天敌等限 制，数量无法控制|取食、传病等对本地 生物造成危害|传播疾病，对人类身体健 康有威胁",
	"今年1月，沙漠蝗在肯尼亚 、索马里等东非国家和印度、巴基斯坦 等西南亚国家罕见暴发，对当地粮食及 农业生产造成严重危害，受到国际社会 广泛关注。": "对",
	"享有外交、领事特 权与豁免的外国机构和人员公用或者自 用的动植物、动植物产品和其他检疫物 进境，应当依照进出境动植物检疫法和 本条例的规定实施检疫。": "对",
	"非洲 猪瘟是由非洲猪瘟病毒感染家猪和各种 野猪而引起的一种急性、出血性、烈性 传染病。": "对",
	"土壤是禁止进境 物。": "对",
	"未经国家有关行政主管部 门审批许可，或无输出国家或地区官方 机构出具检疫证书的，散装燕窝不允许 携带进境。": "对",
	"下列哪项物品禁止 携带或者邮寄入境（  ）。": "蛋 及其制品",
	"携带入境的宠物应在海关指 定的隔离场隔离检疫（  ）天（截 留期限计入在内）。": "30",
	"入境旅客 携带的（  ），必须提前向海关申 报，办理检疫审批手续。": "携带水果| 携带鲜鸡蛋",
	"未经国家有关行政主管部 门审批许可，或无输出国家或地区官方 机构出具检疫证书的，下列哪些不可以 携带入境（ ）。": "多肉植物|肉制品| 鲜牛奶|咸蛋黄肉粽",
	"口岸动植物检疫 机关发现有规定的禁止进境物的，作退 回或者销毁处理。": "对",
	"寨卡(Zika) 病毒病是由寨卡病毒引起的一种自限性 急性传染病,主要通过（  ）叮咬 传播。": "埃及伊蚊",
	"作为一名公民， 您认为该怎样防范生物入侵?（  ）": "不随意从国外携带水果、肉类等动 植物、动植物产品进境|不随意引进、种 植、养殖外来物种|不随意从网络上购买 宠物、花草等动植物产品",
	"飞机上未吃 完的水果可以携带入境。": "错",
	"携带 动物进境的，必须持有输出国家或者地 区的检疫证书等证件。": "对",
	"有关“ 外来物种都是外来有害生物”的说法是 （  ）？": "不正确的",
	"您了解到 的我国禁止进境物有哪些?（  ）": "动植物病原体（包括菌种、毒种等 ）、害虫及其他有害生物;|动植物疫情 流行的国家和地区的有关动植物、动植 物产品和其他检疫物;|动物尸体;|土壤 。",
	"携带、邮寄植物种子、种苗及其他 繁殖材料进境的，必须事先提出申请， 办理检疫审批手续。": "对",
	"《国家安 全法》规定，每年的4月15日为（  ）。": "全民国家安全教育日"
}
	setTimeout(function(){
		//alert('cc')
		
			//alert("1、《江苏省节约用水条例》颁布并施 行于（）。"=="1、《江苏省节约用水条例》颁布并施行于（）。")
			//return;
	for(var i=2;i<=31;i++){
		//var qu=$.trim($('#div'+i).find(".field-label").html().split("<")[0]).split("&")[0]
			//alert(qu+" "+ass[qu])
			//if(qu=="国家会展中心（上海）的建筑形象犹如___") alert(ass[qu]);
			//alert($("div[for=q"+i+"_1]").html())
			var qu=i-1
			//	alert(ass[qu]+" "+$("div[for=q"+i+"_2]").html())
			//	alert(ass[qu].indexOf($("div[for=q"+i+"_2]").html())>-1)

		var child=$("#div"+i).find('.ui-controlgroup').children();
		if($("#div"+i).html().indexOf('qtypetip')>-1){
			//alert(i)
			//alert(child.size())
			for(var j=0;j<child.size();j++){
				//alert($(child[j]).html())
				if(ass[qu].indexOf($(child[j]).find(".label").html())>-1){
					//alert($(child[j]).find(".label").html())
					$(child[j]).find(".label").html("----")
					$($(child[j]).children()[2]).trigger('click')
				}
			}
		}else{
			for(var j=0;j<child.size();j++){
				if(ass[qu].indexOf($(child[j]).find(".label").html())>-1){
					$("div[for=q"+i+"_"+(j+1)+"]").parent().trigger("click");
				}
			}
		}
	
	}
	$("#q1_0").val("舒曼青")
	$("#q1_2").val("18914167267")
			$("#q1_1").val("441601198701136786")
		setTimeout(function(){
			
			$("#ctlNext").trigger("click")
		},61000+parseInt(Math.random()*5)*1000)
	},1000);
	
	
	}else if(window.location.href.indexOf('https://ks.wjx.top/m/77928595.aspx')>-1){//上下页
		//alert("cc")
			ass={
	"目前已知香烟中具有致癌作用的物质就有60多种。": "A、是",
	"到了60岁才戒烟，肺癌死亡率仍可大大低于继续吸烟者。": "A、是",
	"新修订的《上海市公共场所控制吸烟条例》于什么时间正式实施：": "C、2017年3月1日",
	"世界卫生组织决定将每年的         定为世界无烟日。（": "A、5月31日",
	"每天只吸少量的香烟，对健康的影响不大。": "B、否",
	"戒烟越早越好，所以60岁以后就不用戒烟了": "B、错",
	"室内公共场所和工作场所禁止吸烟是防止被动吸烟危害的最有效措施。": "A、是",
	"已被公认为引起肺癌的最危险因素。（）": "C、长期吸烟",
	"主动吸烟可导致癌症、心血管及呼吸系统疾病，被动吸烟则不会。": "B、否",
	"“是否戒烟是自己个人的事，与他人无关”对吗？": "B、错",
	"香烟中使人成瘾的物质是      。（）": "A、尼古丁",
	"在同一建筑物内划分吸烟区和非吸烟区，能消除二手烟雾的危害。": "A、是",
	"烟草的烟雾中所含有的多种化学物质，具有致癌作用，可引起( &nbsp; &nbsp;)等。": "C、肺癌",
	"新修订的《控烟条例》规定：个人在禁止吸烟场所吸烟且不听劝阻的，最高可处以多少元罚款。（）": "B、200元",
	"50岁以前戒烟的人，在15年内死亡的可能性比继续吸烟的人减低一半": "A、是",
	"单位和个人可通过什么市民服务热线举报违反《控烟条例》的行为？": "A、12345",
	"新修订的《控烟条例》规定：禁止吸烟场所所在单位未履行规定义务的，最高可处以多少元罚款；": "C、30000元",
	"35岁以前戒烟的人，可以避免90%因为吸烟而引起的心脏疾病。": "A、是",
	"烟草是导致高达50%吸食者死亡的唯一消费品。": "A、是",
	"烟草是人类健康所面临的最大且可以预防的危险因素。": "A、是",
	"短暂暴露于二手烟也能导致心脏病急性发作。": "A、是",
	"烟龄长的人戒不戒烟对身体健康的影响不大。": "B、错",
	"关于吸烟的危害下列叙述错误的是：": "D、吸烟危害自己但不危害他人",
	"今年的世界无烟日主题是": "A、保护青少年远离传统烟草产品和电子烟",
	"世界卫生组织指出， 是造成人类死亡的第二大原因。": "A、烟草",
	"吸烟可导致心脏损伤，增加冠心病的风险。": "A、是",
	"中国是烟草生产和消费大国,生产和消费占全球      以上。（）": "C、1/3",
	"戒烟10年后，患病的风险变得与不吸烟者基本一样。": "B、否",
	"烟草中的致癌成分是       。（）": "B、烟焦油",
	"《烟草控制框架公约》是世界卫生组织制定的一份国际性法律文书，其宗旨是限制烟草在全世界的蔓延，尤其是在（ ）的蔓延。": "C、发展中国家"
}
  // var citypro = {"安康市","安庆市","安顺市","安阳市","鞍山市","巴彦淖尔市","巴中市","白城市","白山市","白银市","百色市","蚌埠市","包头市","宝鸡市","保定市","保山市","北海市","本溪市","滨州市","沧州市","昌都地区","长春市","长沙市","长治市","常德市","常州市","巢湖市","朝阳市","潮州市","郴州市","成都市","承德市","池州市","赤峰市","崇左市","滁州市","达州市","大连市","大庆市","大同市","丹东市","德阳市","德州市","定西市","东莞市","东营市","鄂尔多斯市","鄂州市","防城港市","佛山市","福州市","抚顺市","抚州市","阜新市","阜阳市","甘南州","赣州市","固原市","广安市","广元市","广州市","贵港市","贵阳市","桂林市","哈尔滨市","哈密地区","海北藏族自治州","海东地区","海口市","邯郸市","汉中市","杭州市","毫州市","合肥市","河池市","河源市","菏泽市","贺州市","鹤壁市","鹤岗市","黑河市","衡水市","衡阳市","呼和浩特市","呼伦贝尔市","湖州市","葫芦岛市","怀化市","淮安市","淮北市","淮南市","黄冈市","黄山市","黄石市","惠州市","鸡西市","吉安市","吉林市","济南市","济宁市","佳木斯市","嘉兴市","嘉峪关市","江门市","焦作市","揭阳市","金昌市","金华市","锦州市","晋城市","晋中市","荆门市","荆州市","景德镇市","九江市","酒泉市","开封市","克拉玛依市","昆明市","拉萨市","来宾市","莱芜市","兰州市","廊坊市","乐山市","丽江市","丽水市","连云港市","辽阳市","辽源市","聊城市","临沧市","临汾市","临沂市","柳州市","六安市","六盘水市","龙岩市","陇南市","娄底市","泸州市","吕梁市","洛阳市","漯河市","马鞍山市","茂名市","眉山市","梅州市","绵阳市",                        "牡丹江市","内江市","南昌市","南充市","南京市","南宁市","南平市","南通市","南阳市","宁波市","宁德市","攀枝花市","盘锦市","平顶山市","平凉市","萍乡市","莆田市","濮阳市","普洱市","七台河市","齐齐哈尔市","钦州市","秦皇岛市","青岛市","清远市","庆阳市","曲靖市","衢州市","泉州市","日照市","三门峡市","三明市","三亚市","汕头市","汕尾市","商洛市","商丘市","上饶市","韶关市","邵阳市","绍兴市","深圳市","沈阳市","十堰市","石家庄市","石嘴山市","双鸭山市","朔州市","四平市","松原市","苏州市","宿迁市","宿州市","绥化市","随州市","遂宁市","台州市","太原市","泰安市","泰州市","唐山市","天水市","铁岭市","通化市","通辽市","铜川市","铜陵市","铜仁市","吐鲁番地区","威海市","潍坊市","渭南市","温州市","乌海市","乌兰察布市","乌鲁木齐市","无锡市","吴忠市","芜湖市","梧州市","武汉市","武威市","西安市","西宁市","锡林郭勒盟","厦门市","咸宁市","咸阳市","湘潭市","襄樊市","孝感市","忻州市","新乡市","新余市","信阳市","兴安盟","邢台市","徐州市","许昌市","宣城市","雅安市","烟台市","延安市","盐城市","扬州市","阳江市","阳泉市","伊春市","伊犁哈萨克自治州","宜宾市","宜昌市","宜春市","益阳市","银川市","鹰潭市","营口市","永州市","榆林市","玉林市","玉溪市","岳阳市","云浮市","运城市","枣庄市","湛江市","张家界市","张家口市","张掖市","漳州市","昭通市","肇庆市","镇江市","郑州市","中山市","中卫市","舟山市","周口市","株洲市","珠海市","驻马店市","资阳市","淄博市","自贡市","遵义市","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省"};
        var hangye = ["技术开发","技术转让","技术服务","计算机维修及维护服务","弱电工程设计安装","综合网络布线","系统集成","网页设计与安装","电脑平面设计","美术设计制作","电脑图文设计","制作","绘图","网络技术开发","技术转让","技术咨询","技术服务","电子科技","技术转让及咨询服务","安防技术","企业管理咨询","企业策划","商务咨询","商务服务","酒店管理咨询","翻译服务","航空服务","票务","房地产信息（投资）咨询","文化咨询","教育信息咨询","二手车鉴定评估","金融","保险","证券","投资","旅游","餐饮","娱乐","休闲","购物","造纸","纸品","印刷","包装","广告","会展","商务办公","咨询业","IT","通信电子","互联网","房地产","建筑业","交通","运输","物流","仓储","非盈利机构","生产","加工","制造","医疗","护理","美容","保健","卫生","媒体","出版","影视","文化传播","电气","电力","水力","航空","航天研究与制造","家居","室内设计","装饰装潢","通信","电信","网路设备","电子技术","半导体","集成电路","基金","证券","期货","投资","检验","检测","认证","礼品","工艺美术","奢饰品","媒体","出版","影视","文化传播"];
        var name = ["春信","贵丰","东弘","同富","飞庆","万康","万鼎","隆高","久协","德高","公盈","春谦","皇贵","伟荣","旺利","辉圣","广安","合亨","吉如","华飞","元正","瑞丰","聚兴","长福","元优","多乾","巨久","德祥","隆安","鑫德","乾广","伟复","久多","耀顺","同福","东昌","洪亚","耀佳","昌益","欣丰","乾美","长隆","如福","圣耀","洪升","合寿","辉浩","裕顺","伟汇","发富","茂宏","盈信","宝佳","东恒","中久","欣茂","凯源","台盈","祥升","满昌","康泰","同富","高生","元晶","进长","复优","华成","耀发","贵义","茂乾","宝高","优泰","益瑞","谦源","长富","润恒","吉乾","仁义","益聚","泰贵","鑫协","协多","源耀","贵昌","禄协","圣本","庆兴","鑫协","正浩","仁益","高晶","泰公","多成","通发","同满","乾升","禄宏","伟裕","光贵","正飞","百亚","乾福","乾安","伟捷","春禄","美厚","富泰","顺义","益捷","泰润","凯佳","盈捷","厚荣","大福","耀协","润美","鑫广","如德","长公","进正","元康","荣协","久泰","升顺","鑫广","如德","进源","国豪","建辉","睿渊","韵文","旭尧","炎彬","云舟","俊材","冠霖","瑾瑜","伟泽","皓轩","鑫磊","浩宇","文昊","韵舟","靖琪","绍辉","志强","幽朋","风桦","智渊","苑博","菲凡","越泽","明杰","博超","长翔","俊驰","天佑","鑫鹏","泰宇","文博","晋鹏","彤彤","瑞纳","佩凤","营久","洲铭","华久","万先","莱仕","本铁","木欧","利太","创光","成百","圆长","扬广","恒宏","光典","清星","士玛","湖奇","豪西","玉日","领生","贸卓","迎方","悦艾","驰来","苏富","霸清","至达","丝元","巨营","振超","悦创","克贵","正迈","全拓","皇顺","汉理","圣特","发傲","速奇","诺妙","拓克","百磊","码用","佩爱","基同","阳彩","本创","雷利","富腾","辰生","耀顺","财正","来览","领鑫","子妙","博川","天扬","事纳","洲赛","环霸","典利","缘韦","高理","运斯","新超","胜克","成创","辰洋","森精","长世","特西","顺越","诗具","凌京","大威","中浩","时方","达集","扬鑫","耀讯","仕嘉","赛莱","志宏","坚曼","特福","冠奇","迎跃","威振","士江","具远","世跃","驰浩","德金","太赛","运亿","能德","贸生","诚界","志裕","曼惠","智银","悦圣","正邦","盛开","欣铁","宜安","识川","信明","海卓","时思","江晖","迎金","拓明","太安","通飞","元名","豪欣","微频","良邦","振速","创辰","尚智","阳相","金集","丝川","白事","卓森","尔诚","发久","英坚","茂泰","微银","航坚","来巨","志日","卓启","啸理","川欧","子辉","纳全","腾庆","语博","辰东","腾聚","用苏","圣讯","玉大","展来","坚微","贵览","森航","春实","悦旭","湖原","久具","洁丝","冠语","方西","方凤","丰火","飞生","荣银","佩良","航微","盈集","皇健","凡茂","恒集","展丝","圆圆","立爱","展顺","纳子","思胜","京川","鸿特","联顿","典彩","雅嘉","贝汇","信顿","涛月","洁湖","成丰","识环","信博","达迪","泰铭","精来","泰亿","茂欧","尼电","好丝","时梦","航相","嘉复","汉优","双莱"];
						

//var city=
var comp="宜春市"+name[parseInt(Math.random()*name.length)]+hangye[parseInt(Math.random()*hangye.length)]+"有限公司";
//alert(comp)
	setTimeout(function(){
		var option=[];
		$("select").find("option").each(function(){
			option.push($(this).val());

		})
	//	var ss=option[parseInt(Math.random()*option.length)]
		//	$("select").val(ss)
	//	$("#q1_0").val("沈亚");$("#q1_1").val("18052482091");$("#q1_2").val("江苏-无锡市-锡山区");	$("#q1_3").val("锡山区诺卡花园菜鸟驿站代收")
			//$("#q1_0").val("刘晶");$("#q1_1").val("18017545866");$("#q1_2").val("上海-上海市-浦东新区");	$("#q1_3").val("博霞路22号浦东软件园S座302")
			//$("#q1_2").val("江苏-无锡市-锡山区")
	//	$("#q1_0").val("刘维维");$("#q1_1").val("15950348766");$("#q1_2").val("江苏-盐城市-建湖县");	$("#q1_3").val("湖中南路510-1美的客户服务中心")
		//	$("#q1_0").val("李勇");$("#q1_1").val("18915299015");$("#q1_2").val("江苏-无锡市-锡山区");	$("#q1_3").val("中大诺卡小镇208号")
		//		$("#q1_0").val("许红芳");$("#q1_1").val("13815555118");$("#q1_2").val("江苏-盐城市-建湖县");	$("#q1_3").val("明珠路消防大队西侧荣达货运")
			//alert("1、《江苏省节约用水条例》颁布并施 行于（）。"=="1、《江苏省节约用水条例》颁布并施行于（）。")
			//return; 
		//	alert('tt')
		var getan=function(que){
	for(var key in ass){
		
		if(similar(key,que)>0.5){
			console.log(key+" "+que+" "+similar(key,que))
			return ass[key];
		}
	}

}
		for(var i=2;i<=11;i++){
		
		 var qu = $("#div" + i).find(".field-label").html().split(". ")[1].split("<")[0];
		 var an=getan(qu)
			 ass[qu]=an
			// alert( ass[qu])
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_1]").html())>-1) {$("div[for=q"+i+"_1]").html('------');}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_2]").html())>-1) {$("div[for=q"+i+"_2]").html('------');}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_3]").html())>-1) {$("div[for=q"+i+"_3]").html('------');}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_4]").html())>-1) {$("div[for=q"+i+"_4]").html('------');}
		if(typeof(ass[qu])!='undefined'&&ass[qu].indexOf($("div[for=q"+i+"_5]").html())>-1) {$("div[for=q"+i+"_5]").html('------');}
		}
	
	
		setTimeout(function(){
			for(var i=4;i<=4;i++){
		
				if($("div[for=q"+i+"_1]").size()>0&&$("div[for=q"+i+"_1]").html().indexOf('---')>-1) {$("div[for=q"+i+"_1]").parent().trigger("click");}
				if($("div[for=q"+i+"_2]").size()>0&&$("div[for=q"+i+"_2]").html().indexOf('---')>-1) {$("div[for=q"+i+"_2]").parent().trigger("click");}
				if($("div[for=q"+i+"_3]").size()>0&&$("div[for=q"+i+"_3]").html().indexOf('---')>-1) {$("div[for=q"+i+"_3]").parent().trigger("click");}
				if($("div[for=q"+i+"_4]").size()>0&&$("div[for=q"+i+"_4]").html().indexOf('---')>-1) {$("div[for=q"+i+"_4]").parent().trigger("click");}
				if($("div[for=q"+i+"_5]").size()>0&&$("div[for=q"+i+"_5]").html().indexOf('---')>-1) {$("div[for=q"+i+"_5]").parent().trigger("click");}
		
			}
			//alert('---')
			//$("#ctlNext").trigger("click")
		},7700+parseInt(Math.random()*0)*1000)
	},100);
	}else{
	setTimeout(function(){

	 var hangye = ["技术开发","技术转让","技术服务","计算机维修及维护服务","弱电工程设计安装","综合网络布线","系统集成","网页设计与安装","电脑平面设计","美术设计制作","电脑图文设计","制作","绘图","网络技术开发","技术转让","技术咨询","技术服务","电子科技","技术转让及咨询服务","安防技术","企业管理咨询","企业策划","商务咨询","商务服务","酒店管理咨询","翻译服务","航空服务","票务","房地产信息（投资）咨询","文化咨询","教育信息咨询","二手车鉴定评估","金融","保险","证券","投资","旅游","餐饮","娱乐","休闲","购物","造纸","纸品","印刷","包装","广告","会展","商务办公","咨询业","IT","通信电子","互联网","房地产","建筑业","交通","运输","物流","仓储","非盈利机构","生产","加工","制造","医疗","护理","美容","保健","卫生","媒体","出版","影视","文化传播","电气","电力","水力","家居","室内设计","装饰装潢","通信","电信","网路设备","电子技术","半导体","集成电路","基金","证券","期货","投资","检验","检测","认证","礼品","工艺美术","奢饰品","媒体","出版","影视","文化传播"];
        var name = ["春信","贵丰","东弘","同富","飞庆","万康","万鼎","隆高","久协","德高","公盈","春谦","皇贵","伟荣","旺利","辉圣","广安","合亨","吉如","华飞","元正","瑞丰","聚兴","长福","元优","多乾","巨久","德祥","隆安","鑫德","乾广","伟复","久多","耀顺","同福","东昌","洪亚","耀佳","昌益","欣丰","乾美","长隆","如福","圣耀","洪升","合寿","辉浩","裕顺","伟汇","发富","茂宏","盈信","宝佳","东恒","中久","欣茂","凯源","台盈","祥升","满昌","康泰","同富","高生","元晶","进长","复优","华成","耀发","贵义","茂乾","宝高","优泰","益瑞","谦源","长富","润恒","吉乾","仁义","益聚","泰贵","鑫协","协多","源耀","贵昌","禄协","圣本","庆兴","鑫协","正浩","仁益","高晶","泰公","多成","通发","同满","乾升","禄宏","伟裕","光贵","正飞","百亚","乾福","乾安","伟捷","春禄","美厚","富泰","顺义","益捷","泰润","凯佳","盈捷","厚荣","大福","耀协","润美","鑫广","如德","长公","进正","元康","荣协","久泰","升顺","鑫广","如德","进源","国豪","建辉","睿渊","韵文","旭尧","炎彬","云舟","俊材","冠霖","瑾瑜","伟泽","皓轩","鑫磊","浩宇","文昊","韵舟","靖琪","绍辉","志强","幽朋","风桦","智渊","苑博","菲凡","越泽","明杰","博超","长翔","俊驰","天佑","鑫鹏","泰宇","文博","晋鹏","彤彤","瑞纳","佩凤","营久","洲铭","华久","万先","莱仕","本铁","木欧","利太","创光","成百","圆长","扬广","恒宏","光典","清星","士玛","湖奇","豪西","玉日","领生","贸卓","迎方","悦艾","驰来","苏富","霸清","至达","丝元","巨营","振超","悦创","克贵","正迈","全拓","皇顺","汉理","圣特","发傲","速奇","诺妙","拓克","百磊","码用","佩爱","基同","阳彩","本创","雷利","富腾","辰生","耀顺","财正","来览","领鑫","子妙","博川","天扬","事纳","洲赛","环霸","典利","缘韦","高理","运斯","新超","胜克","成创","辰洋","森精","长世","特西","顺越","诗具","凌京","大威","中浩","时方","达集","扬鑫","耀讯","仕嘉","赛莱","志宏","坚曼","特福","冠奇","迎跃","威振","士江","具远","世跃","驰浩","德金","太赛","运亿","能德","贸生","诚界","志裕","曼惠","智银","悦圣","正邦","盛开","欣铁","宜安","识川","信明","海卓","时思","江晖","迎金","拓明","太安","通飞","元名","豪欣","微频","良邦","振速","创辰","尚智","阳相","金集","丝川","白事","卓森","尔诚","发久","英坚","茂泰","微银","航坚","来巨","志日","卓启","啸理","川欧","子辉","纳全","腾庆","语博","辰东","腾聚","用苏","圣讯","玉大","展来","坚微","贵览","森航","春实","悦旭","湖原","久具","洁丝","冠语","方西","方凤","丰火","飞生","荣银","佩良","航微","盈集","皇健","凡茂","恒集","展丝","圆圆","立爱","展顺","纳子","思胜","京川","鸿特","联顿","典彩","雅嘉","贝汇","信顿","涛月","洁湖","成丰","识环","信博","达迪","泰铭","精来","泰亿","茂欧","尼电","好丝","时梦","航相","嘉复","汉优","双莱"];
						

//var city=
var comp=""+name[parseInt(Math.random()*name.length)]+hangye[parseInt(Math.random()*hangye.length)]+"有限公司";
	//$("#q1").val("徐清")
	//	$("#q2").val(comp)
		//$("#q3").val("18205034470")
		//$("#ctlNext").trigger("click")
		//alert(window.location.href.indexOf('45188007'))
		if(window.location.href.indexOf('/vm/rzVxzBd.aspx')>-1){
			
				//$("#q1_0").val("刘荣");$("#q1_1").val("13805116569");$("#q1_2").val("441601198701136786")
				//$("#q1_0").val("许红芳");$("#q1_1").val("13815555118");$("#q1_2").val("411522198509027804")

				$("#q1_0").val("徐新明");$("#q1_1").val("13524568836");$("#q1_2").val("140221198311017206")
				
				$("#q1_0").val("沈娅");$("#q1_1").val("18915299015");$("#q1_2").val("130534198204147909")
					$("#q1_0").val("刘晶晶");$("#q1_1").val("13814929369");$("#q1_2").val("520425197908312091")
					$("#q1_0").val("刘星");$("#q1_1").val("13814929369");$("#q1_2").val("632323198606108005")

				$("#q1_0").val("刘恩巧");$("#q1_1").val("13861864777");$("#q1_2").val("skycityhappy");$("#q1_3").val("320925195312072526")
		}else if(window.location.href.indexOf('/vm/wbkzjH0.aspx')>-1){
				$("#q1_0").val("陈圣熙");
			$("#q1_1").val(comp);
			$("#q1_2").val("18115768791");
		}else if(window.location.href.indexOf('http://diaocha.jxlaw.com.cn/vm/mN6tLJO.aspx')>-1){//鹰潭消防
			$("#q2_0").val('刘晶');
			$("#q2_1").val(comp);
			$("#q2_2").val("13814929369");
		}
		else{
			/*$("#q1_0").val('刘晶');
			$("#q1_1").val("18017545866");
			$("#q1_2").val("上海市长宁区江苏路舜元发展大厦2501");
			$("#q1_0").val('李勇');
			$("#q1_1").val("13814929369");
			$("#q1_2").val("上海市浦东新区张江镇古桐五村丰巢快递柜");*/
			//$("#q2_2").trigger('click');
$("select").val(1+parseInt(Math.random()*17));
$("#q1").val("谢建华");
$("#q2").val("18013400651");

}
	},100);

	//强制看排行榜 https://ks.wjx.top/wjx/join/JoinActivityRank.aspx?activity=167953999&name=%e8%b0%88%e5%8f%8b%e6%9e%97&ranker=4&costtime=55&score=100&user=jyh5pSfrvl78z3DljSzbUw%3d%3d     修改activity
//刘晶 320925198907182023 13814929369  269569205@163.com 仙气 
//定佑雄 422323195910024516  刘艳 18205034470 269569205@qq.com lius1510 我是谁
//陶敏  342625199103210715  13812263438 s1399520@qq.com skycityhappy 露新雨
//刘成文 320925194803212517  18452411602  99164989@qq.com 大眼睛
//张祥英   320925195312072526 13912367484  627268498@qq.com 白云
//朱连强 341204197805062215  15052202321 bigbird0@qq.com 最爱---
//王庭能  522636198810101030  18800561502  337001765@qq.com  苏苏

//孙远 421124199711106396  15051327017  lovemerling@qq.com  心想事成
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  秋衣   
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 东京
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  机器猫
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//13861864777
//13805116569 高全勇
//17327402146 陈栋梁
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),米粉
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘星",'memo':"320925198711141510",'timer':tt}), 悦风诗宁
//	'phone':"18168867355 ",'name':"蔡香巧",'memo':"440902197312249645",'timer':tt}),-----王子
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),--原来如此
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}),杨月
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),外外
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),阿混
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),杏林
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),----d哥
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),美食
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),万象世界
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),大风
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),kiel
//	'phone':"18115768791",'name':"陈圣熙",'memo':"640423198611217746",'timer':tt}),手心的爱
//老头  杨元 13373659015 外外  谭荣18014246678  杨洋 罗施 18052482091 飞黄 王朝阳 18115768791 米生 钱新18168867355  浩南孙从尧 18013400651 最爱我 李雪18914148845
//杏林 马耀光 18914167267 豪哥 王志新 18168909051  D哥 王乐乐 18915321250 风爷爷 孟秀娟 18012467297 来了 张静静 18961849736  一条鱼   刘晶晶 13814929369
//不离不弃刘改立 18013407603  办事 杨丽英 13815555118 就是我 李商 18915299015 手里的爱 陈栋梁 15852828806  白云 徐清 18205034470  阿混二 刘成 15950348766
// 王之 杨成龙 13812263438  代理 李慧芳 18452411602 浩南 童新雨 13912367484  丽晶 刘荣 13805116569 露姐 
//露姐 沈亚 15052202321
// YY 孙龙 15051327017
//来了 王来玉13962021537
//大眼睛 田亮 13813225967
//一头狮子 蒋元 13770203281
//秋衣 陈明 18800561502
	//setTimeout(function(){$("#ctlNext").trigger("click")},21500)
	//	alert("xx")

	///----抽奖
/* 格式化时间日期对象、时间戳、时间字符串
	 ** dataTime为时间日期对象、时间戳、时间字符串三者之一
	 ** format为格式化的格式字符串
	 */
   function Format(dataTime, format) {
      if (!dataTime) return '';
      if (dataTime.constructor !== Date) { // 判断是否为 时间Date
        dataTime = new Date(dataTime); // date 类型数据转成 时间字符串
      }
      let o = {
        "M+": dataTime.getMonth() + 1,  // 月份
        "d+": dataTime.getDate(),       // 日
        "h+": dataTime.getHours(),      // 小时
        "m+": dataTime.getMinutes(),    // 分
        "s+": dataTime.getSeconds(),    // 秒
        "q+": Math.floor((dataTime.getMonth() + 3) / 3), // 季度
        S: dataTime.getMilliseconds(),  // 毫秒
      };
      if (/(y+)/.test(format)) {
        format = format.replace(
          RegExp.$1, // RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
          (dataTime.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (const k in o) {
        if (new RegExp("(" + k + ")").test(format)) { // 对o 里面定义的数据进行匹配 赋值
          format = format.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return format
    }

		$(".jqradio").trigger('click')
		
		
		setTimeout(function(){
			
			for(var i=1;i<=10;i++){
				try{
				//	alert($("div[for=q"+i+"_1]").parent().html())
				
				//show_next_page();
				}catch(e){
				}
		
			}
			$(".label").each(function(){
				
				if($(this).html().indexOf('---')>-1) {$(this).parent().trigger("click");}
				if($(this).html().indexOf('荔城街')>-1) {$(this).parent().trigger("click");}
				if($(this).html().indexOf('制造业')>-1) {$(this).parent().trigger("click");}
			})
			$(".label").parent().each(function(){
				if($(this).attr("ans")=="1"){
					$(this).trigger("click");
					//alert($(this).parent().html())
					$(this).find(".label").html('-----')
				}
				//if($(this).html().indexOf('---')>-1) {$(this).parent().trigger("click");}
			})
			//alert('---')
			//$("#ctlNext").trigger("click")
			//	window.scrollTo(0, document.body.scrollHeight);
		},0+parseInt(Math.random()*0)*1000)
		if(window.location.href.indexOf('vm/m8pmVcM.aspx')>-1){return;}
		setTimeout(function(){
			var now=(new Date()).getTime()-6000;
			var tt=Format(now,'yyyy/MM/dd  hh:mm:ss');
		
				$("#starttime").val(tt)
			$("#ctlNext").trigger("click")
			setTimeout(function(){
				//	alert($('.layui-layer-btn0').parent().parent().html())
				
			if($(".sm-btn").size()>0){
				$('.layui-layer-btn0').trigger('click')
				closeAlert();
				//alert($("#captcha").html())
				var now=(new Date()).getTime()-8000;
			var tt=Format(now,'yyyy/MM/dd  hh:mm:ss');
			//alert(tt)
				$("#starttime").val(tt)
				$(".sm-btn").trigger("click")
					
			}
			},1000)
				
		},5000+parseInt(Math.random()*0)*1)
	}

		
	//return;
	if(window.location.href.indexOf('/wjx/join/completemobile2.aspx')>-1){
	//	alert('ddd')
	timeInterval=1
		getaward();
	}


	change=function () {
    ok()
	}
	endAward=function endAward() {
   dspAward()
	}
  ok= function () {
    var a = window.location.href.toLowerCase().indexOf("/completemobile") > -1,
    b = "/joinnew/userawardactivity.ashx?starttime=" + encodeURIComponent(StartTime) + "&t=" + (new Date).valueOf() + "&activity=" + activity + "&joinactivity=" + joinactivity;
    a && (b += "&mob=1"),
    $.ajax({
        type: "get",
        url: b,
        success: function(a) {
			if(!a||a=="554108"){
				//window.location.href="https://wenjuanxingdenglu.wjx.cn/vm/Y2HFjya.aspx";
				//return;
			}
            var b = a;
            return - 2 == b ? (tdImg[0].className = "", awardTd.innerHTML = "<a class='fastA' href='javascript:;'>感谢参与</a>", alert("不能重复参与抽奖！"), void 0) : -3 == b ? (tdImg[0].className = "", awardTd.innerHTML = "<a class='fastA' href='javascript:;'>感谢参与</a>", void 0) : (finishAward(b), void 0)
        },
        error: function() {
            finishAward( - 1),
            alert("很抱歉，网络连接异常，无法连接到服务器抽奖！")
        }
    })
	}
finishAward=	function finishAward(a) {
    var b, c;
    if (clearTimeout(joinawardtimer), awardNum = getRandom(), a.indexOf("§") > 0 ? (a = a.split("§"), isYouHuiQuan = a[1], youHuiQuanLink = a[2] || "", a = a[0]) : a.indexOf("_7") > 0 ? (a = a.split("_"), isHongbaoAward = "7" == a[1], a = a[0]) : a.indexOf("|") > 0 && (a = a.split("|"), hbsign = a[1] || "", isHongbaoAward = !0, a = a[0]), !awardNum && ( - 1 == a || -2 == a)) return tdImg[curIndex - 1].className = "",
    void 0;
    if (b = parseInt(a), b == a && -1 != b) for (c = 0; c < awardObjs.length; c++) if (b == awardObjs[c].giftId) {
        awardNum = c;
        break
    }
		//alert(awardNum)
		if(awardNum==0||awardNum==3){
		//window.location.href="https://wenjuanxingdenglu.wjx.cn/vm/Y2HFjya.aspx";
		//		return;
		}
    return void 0 == awardNum ? (tdImg[curIndex - 1].className = "", awardTd.innerHTML = "<a class='fastA' href='javascript:;'>感谢参与</a>", void 0) : (endLap = awardNum, 3 > endLap && (endLap += tdLen), lapIndex = 0, 4 > endLap ? (timeAdd = 400, timeInterval = 400) : 6 > endLap ? (timeAdd = 200, timeInterval = 300) : 8 > endLap ? (timeAdd = 150, timeInterval = 200) : (timeAdd = 100, timeInterval = 200), joinawardtimer = setTimeout(endAward, timeInterval), 1 == window.canWardPost && (window.noInfo || isHongbaoAward) && getAwardPostInfo(), void 0)
}
	///----抽奖
	
})

	var sName=[],Name=[];
sName[0]="白|bai";
        sName[1]="白|bai";
        sName[2]="蔡|cai";
        sName[3]="曹|cao";
        sName[4]="陈|chen";
        sName[5]="戴|dai";
        sName[6]="窦|dou";
        sName[7]="邓|deng";
        sName[8]="狄|di";
        sName[9]="杜|du";
        sName[10]="段|duan";
        sName[11]="范|fan";
        sName[12]="樊|fan";
        sName[13]="房|fang";
        sName[14]="风|feng";
        sName[15]="符|fu";
        sName[16]="福|fu";
        sName[17]="高|gao";
        sName[18]="古|gu";
        sName[19]="关|guan";
        sName[20]="郭|guo";
        sName[21]="毛|mao";
        sName[22]="韩|han";
        sName[23]="胡|hu";
        sName[24]="花|hua";
        sName[25]="洪|hong";
        sName[26]="侯|hou";
        sName[27]="黄|huang";
        sName[28]="贾|jia";
        sName[29]="蒋|jiang";
        sName[30]="金|jin";
        sName[31]="廖|liao";
        sName[32]="梁|liang";
        sName[33]="李|li";
        sName[34]="林|lin";
        sName[35]="刘|liu";
        sName[36]="龙|long";
        sName[37]="陆|lu";
        sName[38]="卢|lu";
        sName[39]="罗|luo";
        sName[40]="马|ma";
        sName[41]="牛|niu";
        sName[42]="庞|pang";
        sName[43]="裴|pei";
        sName[44]="彭|peng";
        sName[45]="戚|qi";
        sName[46]="齐|qi";
        sName[47]="钱|qian";
        sName[48]="乔|qiao";
        sName[49]="秦|qin";
        sName[50]="邱|qiu";
        sName[51]="裘|qiu";
        sName[52]="仇|qiu";
        sName[53]="沙|sha";
        sName[54]="商|shang";
        sName[55]="尚|shang";
        sName[56]="邵|shao";
        sName[57]="沈|shen";
        sName[58]="师|shi";
        sName[59]="施|shi";
        sName[60]="宋|song";
        sName[61]="孙|sun";
        sName[62]="童|tong";
        sName[63]="万|wan";
        sName[64]="王|wang";
        sName[65]="魏|wei";
        sName[66]="卫|wei";
        sName[67]="吴|wu";
        sName[68]="武|wu";
        sName[69]="萧|xiao";
        sName[70]="肖|xiao";
        sName[71]="项|xiang";
        sName[72]="许|xu";
        sName[73]="徐|xu";
        sName[74]="薛|xue";
        sName[75]="杨|yang";
        sName[76]="羊|yang";
        sName[77]="阳|yang";
        sName[78]="易|yi";
        sName[79]="尹|yin";
        sName[80]="俞|yu";
        sName[81]="赵|zhao";
        sName[82]="钟|zhong";
        sName[83]="周|zhou";
        sName[84]="郑|zheng";
        sName[85]="朱|zhu";
        sName[86]="东方|dongfang";
        sName[87]="独孤|dugu";
        sName[88]="慕容|murong";
        sName[89]="欧阳|ouyang";
        sName[90]="司马|sima";
        sName[91]="西门|ximen";
        sName[92]="尉迟|yuchi";
        sName[93]="长孙|zhangsun";
        sName[94]="诸葛|zhuge";
         
        Name[0]="ai|皑艾哀";
        Name[1]="an|安黯谙";
        Name[2]="ao|奥傲敖骜翱";
        Name[3]="ang|昂盎";
        Name[4]="ba|罢霸";
        Name[5]="bai|白佰";
        Name[6]="ban|斑般";
        Name[7]="bang|邦";
        Name[8]="bei|北倍贝备";
        Name[9]="biao|表标彪飚飙";
        Name[10]="bian|边卞弁忭";
        Name[11]="bu|步不";
        Name[12]="cao|曹草操漕";
        Name[13]="cang|苍仓";
        Name[14]="chang|常长昌敞玚";
        Name[15]="chi|迟持池赤尺驰炽";
        Name[16]="ci|此次词茨辞慈";
        Name[17]="du|独都";
        Name[18]="dong|东侗";
        Name[19]="dou|都";
        Name[20]="fa|发乏珐";
        Name[21]="fan|范凡反泛帆蕃";
        Name[22]="fang|方访邡昉";
        Name[23]="feng|风凤封丰奉枫峰锋";
        Name[24]="fu|夫符弗芙";
        Name[25]="gao|高皋郜镐";
        Name[26]="hong|洪红宏鸿虹泓弘";
        Name[27]="hu|虎忽湖护乎祜浒怙";
        Name[28]="hua|化花华骅桦";
        Name[29]="hao|号浩皓蒿浩昊灏淏";
        Name[30]="ji|积极济技击疾及基集记纪季继吉计冀祭际籍绩忌寂霁稷玑芨蓟戢佶奇诘笈畿犄";
        Name[31]="jian|渐剑见建间柬坚俭";
        Name[32]="kan|刊戡";
        Name[33]="ke|可克科刻珂恪溘牁";
        Name[34]="lang|朗浪廊琅阆莨";
        Name[35]="li|历离里理利立力丽礼黎栗荔沥栎璃";
        Name[36]="lin|临霖林琳";
        Name[37]="ma|马"; 
        Name[38]="mao|贸冒貌冒懋矛卯瑁";
        Name[39]="miao|淼渺邈";
        Name[40]="nan|楠南";
        Name[41]="pian|片翩";
        Name[42]="qian|潜谦倩茜乾虔千";
        Name[43]="qiang|强羌锖玱";
        Name[44]="qin|亲琴钦沁芩矜";
        Name[45]="qing|清庆卿晴";
        Name[46]="ran|冉然染燃";
        Name[47]="ren|仁刃壬仞";
        Name[48]="sha|沙煞";
        Name[49]="shang|上裳商";
        Name[50]="shen|深审神申慎参莘";
        Name[51]="shi|师史石时十世士诗始示适炻";
        Name[52]="shui|水";
        Name[53]="si|思斯丝司祀嗣巳";
        Name[54]="song|松颂诵";
        Name[55]="tang|堂唐棠瑭";
        Name[56]="tong|统通同童彤仝";
        Name[57]="tian|天田忝";
        Name[58]="wan|万宛晚";
        Name[59]="wei|卫微伟维威韦纬炜惟玮为";
        Name[60]="wu|吴物务武午五巫邬兀毋戊";
        Name[61]="xi|西席锡洗夕兮熹惜";
        Name[62]="xiao|潇萧笑晓肖霄骁校";
        Name[63]="xiong|熊雄";
        Name[64]="yang|羊洋阳漾央秧炀飏鸯";
        Name[65]="yi|易意依亦伊夷倚毅义宜仪艺译翼逸忆怡熠沂颐奕弈懿翊轶屹猗翌";
        Name[66]="yin|隐因引银音寅吟胤訚烟荫";
        Name[67]="ying|映英影颖瑛应莹郢鹰";
        Name[68]="you|幽悠右忧猷酉";
        Name[69]="yu|渔郁寓于余玉雨语预羽舆育宇禹域誉瑜屿御渝毓虞禺豫裕钰煜聿";
        Name[70]="zhi|制至值知质致智志直治执止置芝旨峙芷挚郅炙雉帜";
        Name[71]="zhong|中忠钟衷";
        Name[72]="zhou|周州舟胄繇昼";
        Name[73]="zhu|竹主驻足朱祝诸珠著竺";
        Name[74]="zhuo|卓灼灼拙琢濯斫擢焯酌";
        Name[75]="zi|子资兹紫姿孜梓秭";
        Name[76]="zong|宗枞";
        Name[77]="zu|足族祖卒";
        Name[78]="zuo|作左佐笮凿";
function getsName(){
	var n = Math.floor(Math.random() * sName.length + 1)-1; 
	return sName[n].split('|')[0];
}
function getName(){
	var n = Math.floor(Math.random() * Name.length + 1)-1; 
	var na=Name[n].split('|')[1];
	//console.log(na);
	var m = Math.floor(Math.random() * na.length + 1)-1; 
	//console.log(na.length );
	//console.log(m);
	return na.substr(m,1)
	
}