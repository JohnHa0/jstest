/*! 新媒体运营平台答题活动，版本v1.1.0，更新时间Wed Apr 13 2022 09:39:57 GMT+0800 (中国标准时间) */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

webpackJsonp([1], {
    1898 : function(t, s) {},
    "1pfT": function(t, s) {},
    "1xSu": function(t, s) {},
    "26Uc": function(t, s) {},
    "2kqY": function(t, s) {},
    "6BFK": function(t, s) {},
    "6qlo": function(t, s) {},
    "8TH0": function(t, s) {},
    "8Xow": function(t, s) {},
    "8y6h": function(t, s) {},
    "9ag1": function(t, s) {},
    "9xFR": function(t, s) {},
    "J+Ku": function(t, s) {},
    MpHr: function(t, s) {},
    NHnr: function(t, s, e) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = e("//Fk"),
        a = e.n(i),
        n = e("7+uW"),
        o = e("Dd8w"),
        r = e.n(o);
        var l = e("mtWM"),
        c = e.n(l),
        d = {
            name: "app",
            data: function() {
                return {}
            },
            created: function() {
                this.udc()
            },
            methods: {
                udc: function() {
                    var t, s, e, i, n = this,
                    o = (t = 2e3, s = 2e3, e = 4e3, i = 2e3, {
                        accountId: function() {
                            return new a.a(function(s, e) {
                                try {
                                    CP.get_account_id(function(t) {
                                        s({
                                            name: "account_id",
                                            data: {
                                                account_id: t.account_id || -1
                                            },
                                            code: 1
                                        })
                                    })
                                } catch(t) {
                                    e({
                                        message: "Get Account Id Err:" + t.message
                                    })
                                }
                                setTimeout(function() {
                                    s({
                                        name: "account_id",
                                        data: -1,
                                        code: 0
                                    })
                                },
                                t)
                            })
                        },
                        sessionId: function() {
                            return new a.a(function(t, e) {
                                try {
                                    CP.get_unique_id(function(s) {
                                        t({
                                            name: "session_id",
                                            data: {
                                                session_id: s.unique_id || -1
                                            },
                                            code: 1
                                        })
                                    })
                                } catch(t) {
                                    e({
                                        message: "Get session Id Err:" + t.message
                                    })
                                }
                                setTimeout(function() {
                                    t({
                                        name: "session_id",
                                        data: -1,
                                        code: 0
                                    })
                                },
                                s)
                            })
                        },
                        locationInfo: function() {
                            return new a.a(function(t, s) {
                                try {
                                    CP.get_location_info(function(s) {
                                        t({
                                            name: "loaction_info",
                                            data: {
                                                lat: s.lat || -1,
                                                lng: s.lon || -1
                                            },
                                            code: 1
                                        })
                                    })
                                } catch(t) {
                                    s({
                                        message: "Get Location Info Err:" + t.message
                                    })
                                }
                                setTimeout(function() {
                                    t({
                                        name: "loaction_info",
                                        data: {
                                            lat: -1,
                                            lng: -1
                                        },
                                        code: 0
                                    })
                                },
                                e)
                            })
                        },
                        isLogin: function() {
                            return new a.a(function(t, s) {
                                try {
                                    CP.is_login(function(s) {
                                        t({
                                            name: "is_login",
                                            data: {
                                                is_login: s.is_login || 0
                                            },
                                            code: 1
                                        })
                                    })
                                } catch(t) {
                                    s({
                                        message: "Get Login Info Err:" + t.message
                                    })
                                }
                                setTimeout(function() {
                                    t({
                                        name: "is_login",
                                        data: {
                                            is_login: 0
                                        },
                                        code: 0
                                    })
                                },
                                i)
                            })
                        },
                        deviceInfo: function() {
                            return new a.a(function(t, e) {
                                try {
                                    CP.get_device_info({
                                        completed: function(s) {
                                            t({
                                                name: "deviceInfo",
                                                data: s,
                                                code: 1
                                            })
                                        },
                                        once: !0,
                                        cp_incompatible: function() {
                                            t({
                                                name: "deviceInfo",
                                                data: -1,
                                                code: 0
                                            })
                                        }
                                    })
                                } catch(t) {
                                    e({
                                        message: "Get deviceInfo Err:" + t.message
                                    })
                                }
                                setTimeout(function() {
                                    t({
                                        name: "deviceInfo",
                                        data: -1,
                                        code: 0
                                    })
                                },
                                s)
                            })
                        }
                    });
                    a.a.all([o.accountId(), o.sessionId(), o.deviceInfo()]).then(function(t) {
                        var s = t[0].data.account_id || -1,
                        e = t[1].data.session_id || -1,
                        i = t[2].data.device_no || -1;
                        n.udcAjax({
                            account_id: s,
                            session_id: e,
                            device_id: i
                        })
                    })
                },
                udcAjax: function(t) {
                    var s = location.pathname.split("/")[1];
                    c()({
                        url: "/activity/api.php?m=public&subm=actstatistics",
                        params: r()({},
                        this.$route.query, {
                            account_id: t.account_id,
                            session_id: t.session_id,
                            type: s
                        }),
                        method: "GET"
                    }).then(function(s) {
                        if (3001 === s.data.code) {
                            var e = r()({},
                            t, s.data.data);
                            window.udc.updateActivity(e),
                            window.udc.pageview(),
                            window.udc.udcClick([".live-signin-submit|signup|?m=front&subm=answer&action=register", ".answer-start-udc|start|?m=front&subm=answer&action=answerinfo", ".btn-left|start|?m=front&subm=answer&action=answerinfo", ".answer-sumbit|submit"])
                        }
                    }).
                    catch(console.warn)
                }
            }
        },
        u = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    attrs: {
                        id: "app"
                    }
                },
                [s("router-view")], 1)
            },
            staticRenderFns: []
        };
        var _ = e("VU/8")(d, u, !1,
        function(t) {
            e("llRq")
        },
        null, null).exports,
        p = e("/ocq"),
        m = e("bOdI"),
        v = e.n(m),
        h = e("mvHQ"),
        f = e.n(h),
        g = {
            name: "modal",
            data: function() {
                return {}
            },
            props: {
                visible: {
                    type: Boolean,
                default:
                    !1
                },
                loading: {
                    type: Boolean,
                default:
                    !1
                },
                cover: {
                    type: Boolean,
                default:
                    !1
                }
            }
        },
        w = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.visible,
                        expression: "visible"
                    }],
                    class: {
                        "zjrb-component-modal": !0,
                        cover: t.cover
                    }
                },
                [t.loading ? t._e() : e("div", {
                    staticClass: "modal-content"
                },
                [t._t("modal")], 2), t._v(" "), e("div", {
                    staticClass: "loading"
                },
                [t.loading ? e("div", {
                    staticClass: "modal-loading"
                }) : t._e()])])
            },
            staticRenderFns: []
        };
        var b = e("VU/8")(g, w, !1,
        function(t) {
            e("6BFK")
        },
        "data-v-118644a0", null).exports,
        y = {
            name: "Box",
            data: function() {
                return {
                    defaultColor: "#fff"
                }
            },
            props: {
                type: {
                    type: String,
                default:
                    "body"
                },
                color: {
                    type: String,
                default:
                    "#fff"
                },
                id: {
                    type: Number,
                default:
                    0
                }
            },
            methods: {
                handClick: function() {
                    this.$emit("handClick", this.id)
                }
            }
        },
        C = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "answer-box"
                },
                [e("div", {
                    staticClass: "box-content",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: function(s) {
                            return t.handClick()
                        }
                    }
                },
                [t._t("box")], 2), t._v(" "), e("div", {
                    staticClass: "box-border",
                    style: {
                        "background-color": "active" == t.type ? t.color: t.defaultColor
                    }
                })])
            },
            staticRenderFns: []
        };
        var k = e("VU/8")(y, C, !1,
        function(t) {
            e("VCWz")
        },
        "data-v-65214568", null).exports,
        I = e("cVr7"),
        x = e("/TTi");
        I.a.use(x.a);
        var S = {
            name: "scroll",
            data: function() {
                return {}
            },
            props: {
                changeList: {
                    type: Number,
                default:
                    0
                },
                probeType: {
                    type: Number,
                default:
                    1
                },
                click: {
                    type: Boolean,
                default:
                    !0
                },
                scrollX: {
                    type: Boolean,
                default:
                    !1
                },
                listenScroll: {
                    type: Boolean,
                default:
                    !1
                },
                pullup: {
                    type: Boolean,
                default:
                    !1
                },
                pulldown: {
                    type: Boolean,
                default:
                    !1
                },
                beforeScroll: {
                    type: Boolean,
                default:
                    !1
                },
                refreshDelay: {
                    type: Number,
                default:
                    20
                }
            },
            watch: {
                changeList: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.refresh()
                    })
                }
            },
            methods: {
                _initScroll: function() {
                    var t = this;
                    this.$refs.wrapper && (this.scroll = new I.a(this.$refs.wrapper, {
                        observeDOM: !0,
                        useTransition: !1
                    }), this.listenScroll && this.scroll.on("scroll",
                    function(s) {
                        t.$emit("scroll", s)
                    }), this.pullup && this.scroll.on("scrollEnd",
                    function() {
                        t.scroll.y <= t.scroll.maxScrollY + 50 && t.$emit("scrollToEnd")
                    }), this.pulldown && this.scroll.on("touchend",
                    function(s) {
                        s.y > 50 && t.$emit("pulldown")
                    }), this.beforeScroll && this.scroll.on("beforeScrollStart",
                    function() {
                        t.$emit("beforeScroll")
                    }))
                },
                disable: function() {
                    this.scroll && this.scroll.disable()
                },
                enable: function() {
                    this.scroll && this.scroll.enable()
                },
                refresh: function() {
                    this.scroll && this.scroll.refresh()
                },
                scrollTo: function() {
                    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
                },
                scrollToElement: function() {
                    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t._initScroll()
                })
            }
        },
        T = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    ref: "wrapper",
                    staticClass: "scroll wrapper"
                },
                [s("div", {
                    staticClass: "content"
                },
                [this._t("scroll")], 2)])
            },
            staticRenderFns: []
        };
        var $ = e("VU/8")(S, T, !1,
        function(t) {
            e("1898")
        },
        "data-v-53dd916e", null).exports,
        R = e("r+/8");
        function j(t, s) {
            return new RegExp("(^|\\s)" + s + "(\\s|$)").test(t.className)
        }
        function P(t, s) {
            if (!j(t, s)) {
                var e = t.className.split(" ");
                e.push(s),
                t.className = e.join(" ")
            }
        }
        var E = this,
        M = {
            name: "ImgModal",
            data: function() {
                return {
                    currentPageIndex: this.index,
                    loading: []
                }
            },
            props: {
                visible: {
                    type: Boolean,
                default:
                    !1
                },
                imgData: {
                    type: Array,
                default:
                    []
                },
                index: {
                    type: Number,
                    defailt: 0
                },
                loop: {
                    type: Boolean,
                default:
                    !1
                },
                autoPlay: {
                    type: Boolean,
                default:
                    !1
                },
                click: {
                    type: Boolean,
                default:
                    !0
                }
            },
            watch: {
                imgData: function(t, s) {
                    var e = this;
                    0 != t.length && (t.forEach(function(t) {
                        e.loading.push(!0)
                    }), this.$nextTick(function() {
                        e._initSlide(),
                        e.slide.refresh(),
                        e.slide.goToPage(e.index, 0, 0)
                    }))
                },
                index: function(t, s) {
                    E.currentPageIndex = t
                }
            },
            created: function() {},
            methods: {
                cancel: function(t) {
                    var s = t || window.event;
                    "DIV" != s.target.tagName && "IMG" != s.target.tagName || this.$emit("cancel")
                },
                next: function() {
                    this.slide.next()
                },
                _initSlide: function() {
                    this.slide = new R.a(this.$refs.slide, {
                        scrollX: !0,
                        momentum: !1,
                        snap: {
                            loop: this.loop,
                            threshold: .3,
                            speed: 400
                        },
                        click: this.click
                    })
                },
                imgLoad: function(t, s) {
                    var e = [],
                    i = (s || window.event).target;
                    this.loading.forEach(function(t) {
                        e.push(t)
                    }),
                    i.complete && (e[t] = !1, this.loading = e)
                }
            }
        },
        L = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return t.visible ? e("div", {
                    ref: "slide",
                    staticClass: "zjrb-component-imgModal",
                    on: {
                        click: t.cancel
                    }
                },
                [e("div", {
                    ref: "slideGroup",
                    staticClass: "zjrb-image-main",
                    style: {
                        width: 100 * t.imgData.length + "vw"
                    }
                },
                t._l(t.imgData,
                function(s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "img-showList"
                    },
                    [e("img", {
                        attrs: {
                            src: s
                        },
                        on: {
                            load: function(s) {
                                return t.imgLoad(i)
                            }
                        }
                    }), t._v(" "), t.loading[i] ? e("div", {
                        staticClass: "loading"
                    },
                    [e("div", {
                        staticClass: "modal-loading"
                    })]) : t._e()])
                }), 0)]) : t._e()
            },
            staticRenderFns: []
        };
        var B = e("VU/8")(M, L, !1,
        function(t) {
            e("1xSu")
        },
        null, null).exports;
        function N(t) {
            var s = window.location.href;
            /android/i.test(window.navigator.userAgent) && /zjxw/i.test(t) && (s = encodeURIComponent(s)),
            CP.open_in_app({
                completed: function(t) {
                    t && "1" === t.success || console.info("未找到APP链接")
                },
                once: !0,
                defaultClient: {
                    client_code: t,
                    link: s
                },
                directJump: 1,
                link_url: s
            })
        }
        var V = {
            name: "iLocation01",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        A = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 12vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 12vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var D = "/activity",
        q = "https://cdn-cp.tmuyun.com/oss-static/img/public/logo_h.png";
        function F(t, s, e, i, a) {
            var n = t || {},
            o = D + "/api.php?m=front&subm=answer&action=answerresult";
            c.a.get(o, {
                params: n
            }).then(function(t) {
                var n = t.data,
                o = n.data;
                n.status ? (s.answerResult = {
                    paiming: o.paiming,
                    jibai: o.jibai,
                    frontaccuracy: o.frontaccuracy,
                    chenghao: o.chenghao,
                    right_num: o.right_num,
                    error_num: o.error_num,
                    zongfen: o.zongfen,
                    accuracy: o.accuracy,
                    result: o.result,
                    userstatus: o.userstatus,
                    custom_button: o.custom_button || "前往抽奖",
                    shar_word: o.shar_word || "炫耀一下"
                },
                "function" == typeof e && e(o)) : "function" == typeof a && i(n.msg)
            }).
            catch(function(t) {
                "function" == typeof a && a(t.message)
            })
        }
        function U(t, s, e, i) {
            var a = t || {},
            n = D + "/api.php?m=front&subm=answer&action=answergpstatus";
            c.a.get(n, {
                params: a
            }).then(function(t) {
                var i = t.data,
                a = i.data;
                i.status ? "function" == typeof s && s(a) : "function" == typeof e && e(a)
            }).
            catch(function(t) {
                "function" == typeof i && i(t.message)
            })
        }
        function O(t) {
            var s = parseInt(t / 3600),
            e = t % 3600,
            i = parseInt(e / 60),
            a = e % 60,
            n = {
                h: "00",
                m: "00",
                s: "00"
            };
            return s > 9 && (n.h = s + ""),
            s > 0 && s <= 9 && (n.h = "0" + s),
            0 == s && (n.h = null),
            i > 9 && (n.m = i + ""),
            i >= 0 && i <= 9 && (n.m = "0" + i),
            0 == s && 0 == i && (n.m = null),
            a > 9 && (n.s = a + ""),
            a >= 0 && a <= 9 && (n.s = "0" + a),
            n
        }
        var z = {
            name: "start_01",
            data: function() {
                return {
                    location_status: "success",
                    location_modal: 0,
                    userInfo: {},
                    isGps: !1,
                    color: "#ffdb32",
                    modal: {
                        visible: !1,
                        loading: !1,
                        type: "error"
                    },
                    mcShow: !1,
                    messageMsg: "",
                    rankOpen: !1,
                    rankNum: 0,
                    rankListData: [],
                    rankListNoMore: !1,
                    pullupStop: !1,
                    changeList: 0,
                    noBody: !1,
                    page: 1,
                    userRank: ""
                }
            },
            components: {
                Box: k,
                iLocation_01: e("VU/8")(V, A, !1,
                function(t) {
                    e("J+Ku")
                },
                "data-v-572b6656", null).exports,
                Modal: b,
                Scroll: $
            },
            created: function() {
                this.userInfo = JSON.parse(sessionStorage.userInfo),
                this.platformType = sessionStorage.platformType,
                this.color = sessionStorage.color,
                this.is_gps(),
                this.is_mcShow(),
                1 * this.answerInfo.open_rank == 1 && this.rankListInfoAjax()
            },
            mounted: function() {
                try {
                    "CS" in window && new CS({
                        target: "#advice",
                        isClickTarget: !0
                    })
                } catch(t) {
                    console.log("cs error:", t.message)
                }
            },
            filters: {
                numberSplit: function(t) {
                    return t.toString().replace(/\d{1,3}(?=(\d{3})+$)/g,
                    function(t) {
                        return t + ","
                    })
                }
            },
            computed: {
                answerInfo: function() {
                    return this.$store.state.answerInfo
                }
            },
            methods: {
                is_gps: function() {
                    1 == this.answerInfo.is_gps && (this.location_modal = 1, this.location_status = "judge")
                },
                is_wx: function() {
                    return ! (!/wx/i.test(this.answerInfo.appdata.platform.name) || 0 !== this.answerInfo.appdata.platform.appIsRight) && (this.messageMsg = "请在微信查看该活动", this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    },
                    !0)
                },
                is_mcShow: function() {
                    var t = !0;
                    return 1 !== this.answerInfo.appdata.platform.appIsRight && "WX" !== this.answerInfo.appdata.platform.name && (this.mcShow = !0, t = !1),
                    t
                },
                cancelMc: function() {
                    this.mcShow = !1
                },
                showMCmodal: function() {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "jumpMc"
                    }
                },
                jumpMc: function() {
                    if (!this.is_mcShow()) {
                        var t = !1;
                        return "appdata" in this.answerInfo && "platform" in this.answerInfo.appdata && this.answerInfo.appdata.platform.name && (N(this.answerInfo.appdata.platform.name), t = !0),
                        t
                    }
                },
                error: function(t) {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    },
                    this.messageMsg = t,
                    this.isGps = !1
                },
                positioning: function() {
                    var t = this;
                    this.isGps || (this.isGps = !0, this.modal = {
                        visible: !0,
                        loading: !0,
                        type: "error"
                    },
                    CP.get_location_info(function(s) {
                        var e = s.lat || -1,
                        i = s.lon || -1;
                        U(r()({
                            lat: e,
                            lng: i,
                            answer_id: t.answerInfo.answer_id
                        },
                        t.$route.query), t.success, t.fail, t.error)
                    }))
                },
                success: function(t) {
                    this.modal = {
                        visible: !1,
                        loading: !1,
                        type: "error"
                    },
                    this.location_status = "success",
                    this.location_modal = 0,
                    this.isGps = !1
                },
                fail: function(t) {
                    this.modal = {
                        visible: !1,
                        loading: !1,
                        type: "error"
                    },
                    this.location_status = "fail",
                    this.isGps = !1
                },
                is_login: function(t) {
                    var s = this;
                    if (2 === t && "1" !== sessionStorage.isAppLogin) {
                        if ("undefined" != typeof CP && "function" == typeof CP.show_login) return CP.show_login(function(t) {
                            sessionStorage.account_id = "1" == t.is_login && t.account_id || -1,
                            sessionStorage.session_id = "1" == t.is_login && t.unique_id || -1,
                            sessionStorage.isAppLogin = "1" == t.is_login ? "1": "0",
                            setTimeout(function() {
                                s.$emit("answerStatus", "start", !0)
                            },
                            1e3)
                        }),
                        !0
                    } else if (2 === t && "1" == sessionStorage.isAppLogin) return this.messageMsg = "未能获取账号信息",
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    },
                    !0;
                    return ! 1
                },
                location_close: function() {
                    this.location_modal = 0
                },
                cancel: function() {
                    this.modal.visible = !1
                },
                ansewr_start: function() {
                    var t = this;
                    if (void 0 === this.$route.query.preview) {
                        if (this.jumpMc()) return;
                        if (this.is_wx()) return;
                        if (this.is_login(this.answerInfo.appdata ? this.answerInfo.appdata.login: null)) return;
                        if (1 == this.answerInfo.is_gps && "success" != this.location_status) return void(this.location_modal = 1);
                        if (1 != this.answerInfo.status) {
                            return this.messageMsg = "活动" + ["已下线", "已删除", "未开始", "已结束"][this.answerInfo.status - 2] + "，请留意活动规则！",
                            void(this.modal = {
                                visible: !0,
                                loading: !1,
                                type: "error"
                            })
                        }
                        if (1 == this.answerInfo.userstatus || 2 == this.answerInfo.userstatus) {
                            var s = [];
                            return s.push("参与此活动需" + this.answerInfo.socre_num + "积分，您目前积分不足！"),
                            s.push("您本轮答题机会已用完！"),
                            this.messageMsg = s[this.answerInfo.userstatus - 1],
                            void(this.modal = {
                                visible: !0,
                                loading: !1,
                                type: "error"
                            })
                        }
                    }
                    this.modal = {
                        visible: !0,
                        loading: !0,
                        type: "error"
                    };
                    var e = D + "/api.php?m=front&subm=answer&action=answerinfo&answer_id=" + this.answerInfo.answer_id;
                    this.$ajax.get(e, {
                        params: {
                            answer_start: 1
                        }
                    }).then(function(s) {
                        var e = s.data;
                        if (e.status) sessionStorage.answerStart = 1,
                        sessionStorage.cdStatus = 1,
                        t.$emit("answerStatus", "process");
                        else {
                            if (5014 == e.code) return t.answerInfo.status = 5,
                            t.messageMsg = "活动已结束，请留意活动规则！",
                            void(t.modal = {
                                visible: !0,
                                loading: !1,
                                type: "error"
                            });
                            t.error(e.msg || "异常错误")
                        }
                    }).
                    catch(function(s) {
                        t.error(s.message)
                    })
                },
                checkRank: function() {
                    window._p_rank ? this.$router.push({
                        name: "RankP",
                        query: r()({},
                        this.$route.query, {
                            answer_id: this.answerInfo.answer_id
                        })
                    }) : (this.rankOpen = !0, this.changeList = (new Date).getTime())
                },
                rankListInfoAjax: function(t) {
                    var s = this,
                    e = D + "/api.php?m=front&subm=answer&action=rankinglist&page=" + (t || 1) + "&answer_id=" + this.answerInfo.answer_id;
                    this.$ajax(e).then(function(t) {
                        var e = t.data;
                        e.status && (1 * e.data.page == 1 ? (s.rankListData = e.data.list, s.pullupStop = !1, 1 * e.data.count == 0 && (s.noBody = !0), 1 * e.data.count <= 1 * e.data.limit && (s.rankListNoMore = !0)) : 1 * e.data.page > 1 && (s.rankListData = s.rankListData.concat(e.data.list), s.pullupStop = !1, e.data.list && e.data.list.length < 1 * e.data.limit && (s.rankListNoMore = !0)), s.rankNum = e.data.count || 0, s.userRank = e.data.user && !/\[\]|\{\}/.test(f()(e.data.user)) ? e.data.user: "")
                    }).
                    catch(function(t) {
                        s.pullupStop = !1
                    })
                },
                scrollToEnd: function() {
                    this.pullupStop || this.rankListNoMore || (this.pullupStop = !0, this.page += 1, this.rankListInfoAjax(this.page))
                },
                timeFormat: function(t) {
                    var s = O(t);
                    return (null === s.h ? "00": s.h) + ":" + (null === s.m ? "00": s.m) + ":" + s.s + "s"
                }
            }
        },
        G = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "answer-start"
                },
                [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.mcShow,
                        expression: "mcShow"
                    }],
                    staticClass: "mc-tips"
                },
                [e("p", {
                    on: {
                        click: t.showMCmodal
                    }
                },
                [t._v("前往"), e("span", [t._v(t._s(t.answerInfo.appdata.platform.app_name))]), t._v("客户端才可进行答题哦~")]), t._v(" "), e("span", {
                    staticClass: "close-mc",
                    on: {
                        click: t.cancelMc
                    }
                },
                [t._v("关闭提醒")])]), t._v(" "), "" != t.answerInfo.answer_cover_img ? e("div", {
                    staticClass: "answer-cover"
                },
                [e("div", {
                    staticClass: "cover-img"
                },
                [e("img", {
                    attrs: {
                        src: t.answerInfo.answer_cover_img,
                        alt: ""
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "cover-btn",
                    style: {
                        left: "0px",
                        width: 1 === t.answerInfo.open_rank ? "50%": "100%"
                    },
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=answerinfo"
                    },
                    on: {
                        click: t.ansewr_start
                    }
                }), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.answerInfo.open_rank,
                        expression: "answerInfo.open_rank === 1"
                    }],
                    staticClass: "cover-btn",
                    staticStyle: {
                        right: "0px"
                    },
                    on: {
                        click: t.checkRank
                    }
                })]) : t._e(), t._v(" "), t._m(0), t._v(" "), e("div", {
                    staticClass: "answer-title"
                },
                [t._v(t._s(t.answerInfo.answertitle))]), t._v(" "), 1 == t.location_modal ? e("div", {
                    staticClass: "answer-location"
                },
                ["judge" == t.location_status ? e("div", {
                    staticClass: "location-req"
                },
                [e("Box", [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "location-tip"
                },
                [e("iLocation_01", {
                    attrs: {
                        color: t.color
                    }
                })], 1), t._v(" "), e("div", {
                    staticClass: "location-inquiry"
                },
                [t._v("是否允许开启地理位置定位？")]), t._v(" "), e("div", {
                    staticClass: "location-btn",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.positioning
                    }
                },
                [t._v("确定")])])])], 1) : t._e(), t._v(" "), "fail" == t.location_status ? e("div", {
                    staticClass: "location-res"
                },
                [e("Box", [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "location-inquiry"
                },
                [t._v("\n            很抱歉！根据定位，您的地理位置\n            不在活动有效范围内，请关注活动\n            详情了解活动参与规则！\n          ")]), t._v(" "), e("div", {
                    staticClass: "location-btn",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.location_close
                    }
                },
                [t._v("确定")])])])], 1) : t._e()]) : t._e(), t._v(" "), 0 == t.location_modal ? e("div", {
                    staticClass: "ansewr-explain"
                },
                [e("ol", [e("li", [t._v("活动时间：" + t._s(t.$format(1e3 * t.answerInfo.start_time, "-")) + "至" + t._s(t.$format(1e3 * t.answerInfo.end_time, "-")))]), t._v(" "), e("li", [t._v("答题规则：\n        "), 1 == t.answerInfo.if_limit ? e("p", {
                    staticStyle: {
                        display: "inline-block"
                    }
                },
                [t._v(t._s(0 == t.answerInfo.if_limit_day ? "整个活动周期可答" + t.answerInfo.limit_num + "次，": "每" + t.answerInfo.if_limit_day + "天可答" + t.answerInfo.limit_num + "次，"))]) : t._e(), t._v(" "), 0 == t.answerInfo.if_limit ? e("p", {
                    staticStyle: {
                        display: "inline-block"
                    }
                },
                [t._v("答题次数无限制，")]) : t._e(), t._v("\n        共" + t._s(t.answerInfo.problems_num) + "题" + t._s(0 == t.answerInfo.problems_score ? "": "，每题" + t.answerInfo.problems_score + "分，满分" + t.answerInfo.problems_score * t.answerInfo.problems_num + "分") + "\n      ")]), t._v(" "), 0 !== t.answerInfo.answer_time ? e("li", [t._v("答题时间：每题" + t._s(t.answerInfo.answer_time) + "秒")]) : t._e(), t._v(" "), "" != t.answerInfo.group_url && null != t.answerInfo.group_url ? e("li", [t._v("答题成功后可获得福利抽取机会")]) : t._e(), t._v(" "), e("li", [t._v("活动解释权归【" + t._s(t.answerInfo.app_name) + "】运营方所有")])])]) : t._e(), t._v(" "), e("div", {
                    staticClass: "location-apply "
                },
                [e("div", {
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "location-msg answer-start-udc",
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=answerinfo"
                    }
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.ansewr_start
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("开始答题")])])], 1)]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.answerInfo.open_rank,
                        expression: "answerInfo.open_rank === 1"
                    }],
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "location-btn"
                },
                [e("Box", {
                    on: {
                        handClick: t.checkRank
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("排行榜")])])], 1)])]), t._v(" "), e("div", {
                    staticClass: "answer-tips"
                },
                [1 === t.answerInfo.advice ? e("div", {
                    attrs: {
                        id: "advice"
                    }
                },
                [t._v("投诉与建议")]) : t._e(), t._v(" "), "" != t.answerInfo.answer_des_url && null != t.answerInfo.answer_des_url ? e("a", {
                    staticClass: "user-tips",
                    attrs: {
                        href: t.answerInfo.answer_des_url
                    }
                },
                [t._v("答题须知")]) : t._e()]), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.modal.visible,
                        loading: t.modal.loading
                    }
                },
                ["error" === t.modal.type ? e("div", {
                    staticClass: "answer-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips"
                },
                [e("Box", [e("div", {
                    staticClass: "content",
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "tips-text"
                },
                [t._v("\n                " + t._s(t.messageMsg) + "\n              ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn"
                },
                [e("div", {
                    staticClass: "btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.cancel
                    }
                },
                [e("p", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("确定")])])], 1)])])])], 1)]) : t._e(), t._v(" "), "jumpMc" === t.modal.type ? e("div", {
                    staticClass: "answer-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips"
                },
                [e("Box", [e("div", {
                    staticClass: "content",
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "tips-text"
                },
                [t._v("\n              确定前往" + t._s(t.answerInfo.appdata.platform.app_name) + "客户端？\n              ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn"
                },
                [e("div", {
                    staticClass: "btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.jumpMc
                    }
                },
                [e("p", {
                    staticStyle: {
                        color: "#fff"
                    },
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("前往")])])], 1), t._v(" "), e("div", {
                    staticClass: "btn"
                },
                [e("Box", {
                    on: {
                        handClick: t.cancel
                    }
                },
                [e("p", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("取消")])])], 1)])])])], 1)]) : t._e()]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.rankOpen,
                        expression: "rankOpen"
                    }],
                    staticClass: "ranking-list clearfix"
                },
                [t.noBody ? e("div", {
                    staticClass: "no-body",
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        position: "relative"
                    }
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template02/no_body.png",
                        alt: ""
                    }
                }), t._v(" "), e("p", [t._v("还没有人答过题哦～")]), t._v(" "), e("div", {
                    staticClass: "rank-btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: function(s) {
                            t.rankOpen = !1
                        }
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("返回首页")])])], 1)]) : t._e(), t._v(" "), t.noBody ? t._e() : e("div", {
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden"
                    }
                },
                [e("div", {
                    staticClass: "rank-title",
                    style: {
                        backgroundColor: t.color
                    }
                },
                [t._v("排行榜")]), t._v(" "), e("p", {
                    staticClass: "rank-tip"
                },
                [t._v("须知：同等分数下按答题时间排名，时间相同时按答题先后顺序")]), t._v(" "), e("div", {
                    staticClass: "rank-content"
                },
                [e("div", {
                    staticClass: "content-title"
                },
                [e("ul", [t._m(1), t._v(" "), t.userRank ? e("li", {
                    staticClass: "item-lists",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center",
                        "background-color": "#FFFDE7"
                    }
                },
                [e("div", {
                    staticClass: "rank"
                },
                [t._v(t._s(t.userRank.rowNo))]), t._v(" "), e("div", {
                    staticClass: "headimage"
                },
                [e("div", {
                    staticClass: "wx-headimage"
                },
                [e("img", {
                    attrs: {
                        src: t.userRank.userimg
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "nickname"
                },
                [t._v(t._s(t.userRank.username) + "（我自己）")]), t._v(" "), e("div", {
                    staticClass: "point"
                },
                [t._v(t._s(t.userRank.score))]), t._v(" "), e("div", {
                    staticClass: "time"
                },
                [t._v(t._s(t.timeFormat(t.userRank.user_time)))])]) : t._e()])]), t._v(" "), e("div", {
                    staticClass: "content-list",
                    style: t.userRank ? "top:28.1vw": ""
                },
                [e("Scroll", {
                    attrs: {
                        pullup: !0,
                        changeList: t.changeList
                    },
                    on: {
                        scrollToEnd: t.scrollToEnd
                    }
                },
                [e("div", {
                    staticClass: "rank-item",
                    attrs: {
                        slot: "scroll"
                    },
                    slot: "scroll"
                },
                [e("ul", [t._l(t.rankListData,
                function(s, i) {
                    return e("li", {
                        key: i,
                        staticClass: "item-lists",
                        staticStyle: {
                            "-webkit-justify-content": "space-around",
                            "-webkit-align-items": "center"
                        }
                    },
                    [e("div", {
                        staticClass: "rank"
                    },
                    [t._v("\n                    " + t._s(i + 1) + "\n                  ")]), t._v(" "), e("div", {
                        staticClass: "headimage"
                    },
                    [e("div", {
                        staticClass: "wx-headimage"
                    },
                    [e("img", {
                        attrs: {
                            src: s.userimg
                        }
                    })]), t._v(" "), 0 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/one.png"
                        }
                    }) : t._e(), t._v(" "), 1 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/second.png"
                        }
                    }) : t._e(), t._v(" "), 2 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/third.png"
                        }
                    }) : t._e()]), t._v(" "), e("div", {
                        staticClass: "nickname"
                    },
                    [t._v(t._s(s.username))]), t._v(" "), e("div", {
                        staticClass: "point"
                    },
                    [t._v(t._s(s.score))]), t._v(" "), e("div", {
                        staticClass: "time"
                    },
                    [t._v("\n                    " + t._s(t.timeFormat(s.user_time)) + "\n                  ")])])
                }), t._v(" "), e("li", {
                    staticClass: "item-end",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [t._v(t._s(t.rankListNoMore ? "没有更多啦": "上拉加载更多"))])], 2)])])], 1)]), t._v(" "), e("div", {
                    staticClass: "rank-btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: function(s) {
                            t.rankOpen = !1
                        }
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("返回首页")])])], 1)])])], 1)
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "answer-title-img"
                },
                [s("img", {
                    attrs: {
                        src: "/answer/static/img/template01/title.png"
                    }
                })])
            },
            function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("li", {
                    staticClass: "item-title",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [e("div", {
                    staticClass: "rank"
                },
                [t._v("排行")]), t._v(" "), e("div", {
                    staticClass: "headimage"
                },
                [t._v("头像")]), t._v(" "), e("div", {
                    staticClass: "nickname"
                },
                [t._v("昵称")]), t._v(" "), e("div", {
                    staticClass: "point"
                },
                [t._v("得分")]), t._v(" "), e("div", {
                    staticClass: "time"
                },
                [t._v("时间")])])
            }]
        };
        var H = e("VU/8")(z, G, !1,
        function(t) {
            e("ycYf")
        },
        "data-v-618257b0", null).exports,
        W = {
            name: "iLocation02",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        J = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 11vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 11vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var Y = {
            name: "start_02",
            data: function() {
                return {
                    answer_id: this.$route.query.answer_id,
                    rankListData: [],
                    rankListNoMore: !1,
                    pullupStop: !1,
                    changeList: 0,
                    noBody: !1,
                    page: 1,
                    userRank: "",
                    location_status: "judge",
                    userInfo: {},
                    isGps: !1,
                    modal: {
                        visible: !1,
                        loading: !1,
                        type: "location"
                    },
                    messageMsg: "",
                    error_message: "",
                    color: "#123456",
                    mcShow: !1,
                    start_show: "content"
                }
            },
            computed: {
                answerInfo: function() {
                    return this.$store.state.answerInfo
                }
            },
            watch: {
                rankListData: function(t, s) {
                    this.changeList = (new Date).getTime()
                }
            },
            components: {
                iLocation_02: e("VU/8")(W, J, !1,
                function(t) {
                    e("WKOd")
                },
                "data-v-53f7e934", null).exports,
                Scroll: $,
                Modal: b
            },
            created: function() {
                this.userInfo = JSON.parse(sessionStorage.userInfo),
                this.platformType = sessionStorage.platformType,
                this.color = sessionStorage.color,
                this.is_gps(),
                1 * this.answerInfo.open_rank == 1 && !window._p_rank && this.rankListInfoAjax(),
                this.is_mcShow()
            },
            mounted: function() {
                try {
                    "CS" in window && new CS({
                        target: "#advice",
                        isClickTarget: !0
                    })
                } catch(t) {
                    console.log("cs error:", t.message)
                }
            },
            methods: {
                error: function(t) {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    },
                    this.error_message = t,
                    this.isGps = !1
                },
                tips: function(t) {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "message"
                    },
                    this.messageMsg = t
                },
                is_wx: function() {
                    return ! (!/wx/i.test(this.answerInfo.appdata.platform.name) || 0 !== this.answerInfo.appdata.platform.appIsRight) && (this.tips("请在微信查看该活动"), !0)
                },
                is_mcShow: function() {
                    var t = !0;
                    return 1 !== this.answerInfo.appdata.platform.appIsRight && "WX" !== this.answerInfo.appdata.platform.name && (this.mcShow = !0, t = !1),
                    t
                },
                cancelMc: function() {
                    this.mcShow = !1
                },
                showMCmodal: function() {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "jumpMc"
                    }
                },
                jumpMc: function() {
                    if (!this.is_mcShow()) {
                        var t = !1;
                        return "appdata" in this.answerInfo && "platform" in this.answerInfo.appdata && this.answerInfo.appdata.platform.name && (N(this.answerInfo.appdata.platform.name), t = !0),
                        t
                    }
                },
                positioning: function() {
                    var t = this;
                    this.isGps || (this.isGps = !0, this.modal = {
                        visible: !0,
                        loading: !0,
                        type: "error"
                    },
                    CP.get_location_info(function(s) {
                        var e = s.lat || -1,
                        i = s.lon || -1;
                        U(r()({
                            lat: e,
                            lng: i,
                            answer_id: t.answerInfo.answer_id
                        },
                        t.$route.query), t.success, t.fail, t.error)
                    }))
                },
                success: function() {
                    this.location_status = "success",
                    this.modal = {
                        visible: !1,
                        loading: !1,
                        type: "location"
                    },
                    this.isGps = !1
                },
                fail: function() {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "location"
                    },
                    this.location_status = "fail",
                    this.isGps = !1
                },
                is_gps: function() {
                    1 == this.answerInfo.is_gps && (this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "location"
                    })
                },
                location_close: function() {
                    this.modal = {
                        visible: !1,
                        loading: !1,
                        type: "disable"
                    }
                },
                is_login: function(t) {
                    var s = this;
                    if (2 === t && "1" !== sessionStorage.isAppLogin) {
                        if ("undefined" != typeof CP && "function" == typeof CP.show_login) return CP.show_login(function(t) {
                            sessionStorage.account_id = "1" == t.is_login && t.account_id || -1,
                            sessionStorage.session_id = "1" == t.is_login && t.unique_id || -1,
                            sessionStorage.isAppLogin = "1" == t.is_login ? "1": "0",
                            setTimeout(function() {
                                s.$emit("answerStatus", "start", !0)
                            },
                            1e3)
                        }),
                        !0
                    } else if (2 === t && "1" == sessionStorage.isAppLogin) return this.messageMsg = "未能获取账号信息",
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "message"
                    },
                    !0;
                    return ! 1
                },
                ansewr_start: function() {
                    var t = this;
                    if (void 0 === this.$route.query.preview) {
                        if (this.jumpMc()) return;
                        if (this.is_wx()) return;
                        if (this.is_login(this.answerInfo.appdata ? this.answerInfo.appdata.login: null)) return;
                        if (1 == this.answerInfo.is_gps && "success" != this.location_status) return void(this.modal = {
                            visible: !0,
                            loading: !1,
                            type: "location"
                        });
                        if (1 != this.answerInfo.status) {
                            return this.messageMsg = "活动" + ["已下线", "已删除", "未开始", "已结束"][this.answerInfo.status - 2] + "，请留意活动规则！",
                            void(this.modal = {
                                visible: !0,
                                loading: !1,
                                type: "message"
                            })
                        }
                        if (1 == this.answerInfo.userstatus || 2 == this.answerInfo.userstatus) {
                            var s = [];
                            return s.push("参与此活动需" + this.answerInfo.socre_num + "积分，您目前积分不足！"),
                            s.push("您本轮答题机会已用完！"),
                            this.messageMsg = s[this.answerInfo.userstatus - 1],
                            void(this.modal = {
                                visible: !0,
                                loading: !1,
                                type: "message"
                            })
                        }
                    }
                    this.modal = {
                        visible: !0,
                        loading: !0,
                        type: "error"
                    };
                    var e = D + "/api.php?m=front&subm=answer&action=answerinfo&answer_id=" + this.answerInfo.answer_id;
                    this.$ajax.get(e, {
                        params: {
                            answer_start: 1
                        }
                    }).then(function(s) {
                        var e = s.data;
                        if (e.status) sessionStorage.answerStart = 1,
                        sessionStorage.cdStatus = 1,
                        t.$emit("answerStatus", "process");
                        else {
                            if (5014 == e.code) return t.answerInfo.status = 5,
                            t.messageMsg = "活动已结束，请留意活动规则！",
                            void(t.modal = {
                                visible: !0,
                                loading: !1,
                                type: "message"
                            });
                            t.tips(e.msg || "异常错误")
                        }
                    }).
                    catch(function(s) {
                        t.tips(s.message)
                    })
                },
                scrollToEnd: function() {
                    this.pullupStop || this.rankListNoMore || (this.pullupStop = !0, this.page += 1, this.rankListInfoAjax(this.page))
                },
                checkRank: function() {
                    window._p_rank ? this.$router.push({
                        name: "RankP",
                        query: r()({},
                        this.$route.query, {
                            answer_id: this.answerInfo.answer_id
                        })
                    }) : (this.start_show = "rank", this.changeList = (new Date).getTime())
                },
                rankListInfoAjax: function(t) {
                    var s = this,
                    e = D + "/api.php?m=front&subm=answer&action=rankinglist&page=" + (t || 1) + "&answer_id=" + this.answerInfo.answer_id;
                    this.$ajax(e).then(function(t) {
                        var e = t.data;
                        e.status && (1 * e.data.page == 1 ? (s.rankListData = e.data.list, s.pullupStop = !1, 1 * e.data.count == 0 && (s.noBody = !0), 1 * e.data.count <= 1 * e.data.limit && (s.rankListNoMore = !0)) : 1 * e.data.page > 1 && (s.rankListData = s.rankListData.concat(e.data.list), s.pullupStop = !1, e.data.list && e.data.list.length < 1 * e.data.limit && (s.rankListNoMore = !0)), s.userRank = e.data.user && !/\[\]|\{\}/.test(f()(e.data.user)) ? e.data.user: "")
                    }).
                    catch(function(t) {
                        s.pullupStop = !1
                    })
                },
                backPage: function() {
                    this.start_show = "content"
                },
                answerTime: function(t) {
                    var s = O(t);
                    return (null === s.h ? "00": s.h) + "时" + (null === s.m ? "00": s.m) + "分" + s.s + "秒"
                },
                timeFormat: function(t) {
                    var s = O(t);
                    return (null === s.h ? "00": s.h) + ":" + (null === s.m ? "00": s.m) + ":" + s.s + "s"
                }
            }
        },
        Q = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "answer-start",
                    style: {
                        "background-color": t.color
                    }
                },
                [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.mcShow,
                        expression: "mcShow"
                    }],
                    staticClass: "mc-tips"
                },
                [e("p", {
                    on: {
                        click: t.showMCmodal
                    }
                },
                [t._v("前往"), e("span", [t._v(t._s(t.answerInfo.appdata.platform.app_name))]), t._v("客户端才可进行答题哦~")]), t._v(" "), e("span", {
                    staticClass: "close-mc",
                    on: {
                        click: t.cancelMc
                    }
                },
                [t._v("关闭提醒")])]), t._v(" "), "" != t.answerInfo.answer_cover_img ? e("div", {
                    staticClass: "answer-cover"
                },
                [e("div", {
                    staticClass: "cover-img"
                },
                [e("img", {
                    attrs: {
                        src: t.answerInfo.answer_cover_img,
                        alt: ""
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "cover-btn btn-left",
                    style: {
                        width: 1 === t.answerInfo.open_rank ? "50%": "100%"
                    },
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=answerinfo"
                    },
                    on: {
                        click: t.ansewr_start
                    }
                }), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.answerInfo.open_rank,
                        expression: "answerInfo.open_rank === 1"
                    }],
                    staticClass: "cover-btn btn-right",
                    on: {
                        click: t.checkRank
                    }
                })]) : t._e(), t._v(" "), t._m(0), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "content" == t.start_show,
                        expression: "start_show == 'content'"
                    }],
                    staticClass: "answer-content"
                },
                [t._m(1), t._v(" "), e("div", {
                    staticClass: "ansewr-explain"
                },
                [e("div", {
                    staticClass: "notice"
                },
                [e("div", {
                    staticClass: "notice-title"
                },
                [t._v("活动须知")]), t._v(" "), e("ol", [e("li", [t._v("活动时间：" + t._s(t.$format(1e3 * t.answerInfo.start_time, "-")) + "至" + t._s(t.$format(1e3 * t.answerInfo.end_time, "-")))]), t._v(" "), e("li", [t._v("答题规则：\n            "), 1 == t.answerInfo.if_limit ? e("p", {
                    staticStyle: {
                        display: "inline-block"
                    }
                },
                [t._v(t._s(0 == t.answerInfo.if_limit_day ? "整个活动周期可答" + t.answerInfo.limit_num + "次，": "每" + t.answerInfo.if_limit_day + "天可答" + t.answerInfo.limit_num + "次，"))]) : t._e(), t._v(" "), 0 == t.answerInfo.if_limit ? e("p", {
                    staticStyle: {
                        display: "inline-block"
                    }
                },
                [t._v("答题次数无限制，")]) : t._e(), t._v("\n            共" + t._s(t.answerInfo.problems_num) + "题" + t._s(0 == t.answerInfo.problems_score ? "": "，每题" + t.answerInfo.problems_score + "分，满分" + t.answerInfo.problems_score * t.answerInfo.problems_num + "分") + "\n            ")]), t._v(" "), 0 !== t.answerInfo.answer_time ? e("li", [t._v("答题时间：" + t._s(t.answerTime(t.answerInfo.answer_time)))]) : t._e(), t._v(" "), "" != t.answerInfo.group_url && null != t.answerInfo.group_url ? e("li", [t._v("答题成功后可获得福利抽取机会")]) : t._e(), t._v(" "), e("li", [t._v("活动解释权归【" + t._s(t.answerInfo.app_name) + "】运营方所有")])]), t._v(" "), e("div", {
                    staticClass: "notice-border",
                    style: {
                        "border-color": t.color
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "location-apply"
                },
                [e("div", {
                    staticStyle: {
                        padding: "0 7vw",
                        margin: "0 auto"
                    }
                },
                [e("div", {
                    staticClass: "location-msg answer-start-udc",
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=answerinfo"
                    },
                    on: {
                        click: t.ansewr_start
                    }
                },
                [t._v("\n            开始答题\n        ")])]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.answerInfo.open_rank,
                        expression: "answerInfo.open_rank === 1"
                    }],
                    staticStyle: {
                        padding: "0 7vw",
                        margin: "0 auto"
                    }
                },
                [e("div", {
                    staticClass: "location-btn",
                    on: {
                        click: t.checkRank
                    }
                },
                [t._v("\n            排行榜\n        ")])])]), t._v(" "), e("div", {
                    staticClass: "answer-tips"
                },
                ["" != t.answerInfo.answer_des_url && null != t.answerInfo.answer_des_url ? e("a", {
                    attrs: {
                        href: t.answerInfo.answer_des_url
                    }
                },
                [t._v("答题须知")]) : t._e(), t._v(" "), 1 === t.answerInfo.advice ? e("a", {
                    attrs: {
                        id: "advice"
                    }
                },
                [t._v("投诉与建议")]) : t._e()])]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "rank" == t.start_show,
                        expression: "start_show == 'rank'"
                    }],
                    staticClass: "ranking-list clearfix",
                    style: {
                        "background-color": t.color
                    }
                },
                [t._m(2), t._v(" "), t.noBody ? e("div", {
                    staticClass: "no-body",
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        position: "relative"
                    }
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template02/no_body.png",
                        alt: ""
                    }
                }), t._v(" "), e("p", [t._v("还没有人答过题哦～")]), t._v(" "), e("div", {
                    staticClass: "rank-btn",
                    on: {
                        click: t.backPage
                    }
                },
                [t._v("返回首页")])]) : t._e(), t._v(" "), t.noBody ? t._e() : e("div", {
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden"
                    }
                },
                [e("div", {
                    staticClass: "rank-title"
                },
                [t._v("排行榜")]), t._v(" "), e("p", {
                    staticClass: "rank-tip"
                },
                [t._v("须知：同等分数下按答题时间排名，时间相同时按答题先后顺序")]), t._v(" "), e("div", {
                    staticClass: "rank-content"
                },
                [e("div", {
                    staticClass: "content-title"
                },
                [e("ul", [t._m(3), t._v(" "), t.userRank ? e("li", {
                    staticClass: "item-lists",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [e("div", {
                    staticClass: "rank"
                },
                [t._v(t._s(t.userRank.rowNo))]), t._v(" "), e("div", {
                    staticClass: "headimage"
                },
                [e("div", {
                    staticClass: "wx-headimage"
                },
                [e("img", {
                    attrs: {
                        src: t.userRank.userimg
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "nickname"
                },
                [t._v(t._s(t.userRank.username) + "（我自己）")]), t._v(" "), e("div", {
                    staticClass: "point"
                },
                [t._v(t._s(t.userRank.score))]), t._v(" "), e("div", {
                    staticClass: "time"
                },
                [t._v(t._s(t.timeFormat(t.userRank.user_time)))])]) : t._e()])]), t._v(" "), e("div", {
                    staticClass: "content-list",
                    style: t.userRank ? "top:28.1vw": ""
                },
                [e("Scroll", {
                    attrs: {
                        pullup: !0,
                        changeList: t.changeList
                    },
                    on: {
                        scrollToEnd: t.scrollToEnd
                    }
                },
                [e("div", {
                    staticClass: "rank-item",
                    attrs: {
                        slot: "scroll"
                    },
                    slot: "scroll"
                },
                [e("ul", [t._l(t.rankListData,
                function(s, i) {
                    return e("li", {
                        key: i,
                        staticClass: "item-lists",
                        staticStyle: {
                            "-webkit-justify-content": "space-around",
                            "-webkit-align-items": "center"
                        }
                    },
                    [e("div", {
                        staticClass: "rank"
                    },
                    [t._v("\n                    " + t._s(i + 1) + "\n                  ")]), t._v(" "), e("div", {
                        staticClass: "headimage"
                    },
                    [e("div", {
                        staticClass: "wx-headimage"
                    },
                    [e("img", {
                        attrs: {
                            src: s.userimg
                        }
                    })]), t._v(" "), 0 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/one.png"
                        }
                    }) : t._e(), t._v(" "), 1 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/second.png"
                        }
                    }) : t._e(), t._v(" "), 2 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/third.png"
                        }
                    }) : t._e()]), t._v(" "), e("div", {
                        staticClass: "nickname"
                    },
                    [t._v(t._s(s.username))]), t._v(" "), e("div", {
                        staticClass: "point"
                    },
                    [t._v(t._s(s.score))]), t._v(" "), e("div", {
                        staticClass: "time"
                    },
                    [t._v("\n                    " + t._s(t.timeFormat(s.user_time)) + "\n                  ")])])
                }), t._v(" "), e("li", {
                    staticClass: "item-end",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [t._v(t._s(t.rankListNoMore ? "没有更多啦": "上拉加载更多"))])], 2)])])], 1)]), t._v(" "), e("div", {
                    staticClass: "rank-btn",
                    on: {
                        click: t.backPage
                    }
                },
                [t._v("返回首页")])])]), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.modal.visible,
                        loading: t.modal.loading
                    }
                },
                ["location" == t.modal.type && "judge" == t.location_status ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "location-tip"
                },
                [e("iLocation_02", {
                    attrs: {
                        color: t.color
                    }
                })], 1), t._v(" "), e("div", {
                    staticClass: "tips-content"
                },
                [t._v("\n        是否允许开启地理位置定位？\n      ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.positioning
                    }
                },
                [t._v("\n        确定\n      ")])]) : t._e(), t._v(" "), "location" == t.modal.type && "fail" == t.location_status ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "location-tip"
                },
                [e("iLocation_02", {
                    attrs: {
                        color: t.color
                    }
                })], 1), t._v(" "), e("div", {
                    staticClass: "tips-content"
                },
                [t._v("\n        很抱歉！根据定位，您的地理位置\n        不在活动有效范围内，请关注活动\n        详情了解活动参与规则！\n      ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.location_close
                    }
                },
                [t._v("\n        确定\n      ")])]) : t._e(), t._v(" "), "message" == t.modal.type ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips-content"
                },
                [t._v("\n        " + t._s(t.messageMsg) + "\n      ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.location_close
                    }
                },
                [t._v("\n        确定\n      ")])]) : t._e(), t._v(" "), "error" == t.modal.type ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips-content"
                },
                [t._v("\n        " + t._s(t.error_message) + "\n      ")])]) : t._e(), t._v(" "), "jumpMc" === t.modal.type ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips-content",
                    staticStyle: {
                        "text-align": "center"
                    }
                },
                [t._v("\n        确定前往" + t._s(t.answerInfo.appdata.platform.app_name) + "客户端？\n      ")]), t._v(" "), e("div", {
                    staticClass: "tips-btns"
                },
                [e("div", {
                    staticClass: "btn sure",
                    style: {
                        "background-color": t.color,
                        color: "#fff"
                    },
                    on: {
                        click: t.jumpMc
                    }
                },
                [t._v("\n          前往\n        ")]), t._v(" "), e("div", {
                    staticClass: "btn cancel",
                    on: {
                        click: t.location_close
                    }
                },
                [t._v("\n          取消\n        ")])])]) : t._e()])], 1)
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "background-img"
                },
                [s("img", {
                    attrs: {
                        src: "/answer/static/img/template02/bg.png"
                    }
                })])
            },
            function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "answer-title-img"
                },
                [s("img", {
                    attrs: {
                        src: "/answer/static/img/template02/title.png"
                    }
                })])
            },
            function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "rank-cover-img"
                },
                [s("img", {
                    attrs: {
                        src: "/answer/static/img/template02/bg.png"
                    }
                })])
            },
            function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("li", {
                    staticClass: "item-title",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [e("div", {
                    staticClass: "rank"
                },
                [t._v("排行")]), t._v(" "), e("div", {
                    staticClass: "headimage"
                },
                [t._v("头像")]), t._v(" "), e("div", {
                    staticClass: "nickname"
                },
                [t._v("昵称")]), t._v(" "), e("div", {
                    staticClass: "point"
                },
                [t._v("得分")]), t._v(" "), e("div", {
                    staticClass: "time"
                },
                [t._v("时间")])])
            }]
        };
        var X = e("VU/8")(Y, Q, !1,
        function(t) {
            e("9ag1")
        },
        "data-v-6801ad3f", null).exports,
        K = {
            name: "slide",
            props: {
                dstyle: {
                    type: Object,
                default:
                    {
                        width:
                        "100vw",
                        height: "100%"
                    }
                },
                data: {
                    type: Array,
                default:
                    []
                },
                color: {
                    type: String,
                default:
                    "red"
                },
                type: {
                    type: String,
                default:
                    "dots"
                },
                loop: {
                    type: Boolean,
                default:
                    !0
                },
                autoPlay: {
                    type: Boolean,
                default:
                    !0
                },
                interval: {
                    type: Number,
                default:
                    2e3
                },
                showDot: {
                    type: Boolean,
                default:
                    !0
                },
                click: {
                    type: Boolean,
                default:
                    !1
                }
            },
            data: function() {
                return {
                    imgData: [],
                    dots: [],
                    currentPageIndex: 0,
                    img_domain: JSON.parse(sessionStorage.answerInfo).prefixImgUrl
                }
            },
            created: function() {
                this.imgData = this.data
            },
            watch: {
                data: function(t, s) {
                    var e = this;
                    this.$nextTick(function() {
                        e._setSliderWidth(),
                        e._initDots(),
                        e._initSlider(),
                        e.autoPlay && e._play()
                    })
                }
            },
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t._setSliderWidth(),
                    t._initDots(),
                    t._initSlider(),
                    t.autoPlay && t._play()
                },
                20),
                window.addEventListener("resize",
                function() {
                    t.slider && t.slider.enabled && (clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function() {
                        t.slider.isInTransition ? t._onScrollEnd() : t.autoPlay && t._play(),
                        t.refresh()
                    },
                    60))
                })
            },
            activated: function() {
                this.slider.enable();
                var t = this.slider.getCurrentPage().pageX;
                this.slider.goToPage(t, 0, 0),
                this.currentPageIndex = t,
                this.autoPlay && this._play()
            },
            deactivated: function() {
                this.slider.disable(),
                clearTimeout(this.timer)
            },
            beforeUpdate: function() {},
            beforeDestroy: function() {
                this.slider.disable(),
                clearTimeout(this.timer)
            },
            methods: {
                lookOver: function(t, s, e) {
                    var i = this,
                    a = void 0,
                    n = void 0;
                    try { - 1 == t.indexOf("http") ? (a = this.img_domain + t, n = [], 0 != s.length && s.forEach(function(t, s) {
                            n.push(i.img_domain + t)
                        })) : (a = t, n = s)
                    } catch(t) {
                        console.log(t)
                    }
                    "wx" === sessionStorage.platformType ? wx.previewImage({
                        current: a,
                        urls: n
                    }) : "phone" !== sessionStorage.platformType && "pc" !== sessionStorage.platformType && eventBus.$emit("previewImage", n, e)
                },
                refresh: function() {
                    this.slider && (this._setSliderWidth(!0), this.slider.refresh())
                },
                _setSliderWidth: function(t) {
                    this.children = this.$refs.sliderGroup.children;
                    for (var s = 0,
                    e = this.$refs.slider.clientWidth,
                    i = 0; i < this.children.length; i++) {
                        var a = this.children[i];
                        P(a, "slide-item"),
                        a.style.width = e + "px",
                        s += e
                    }
                    this.loop && !t && (s += 2 * e),
                    this.$refs.sliderGroup.style.width = s + "px"
                },
                _initSlider: function() {
                    var t = this;
                    this.slider = new R.a(this.$refs.slider, {
                        scrollX: !0,
                        scrollY: !1,
                        momentum: !1,
                        preventDefault: !1,
                        preventDefaultException: {
                            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|DIV)$/
                        },
                        snap: {
                            loop: this.loop,
                            threshold: .3,
                            speed: 400
                        }
                    }),
                    this.slider.on("scrollEnd", this._onScrollEnd),
                    this.slider.on("touchend",
                    function() {
                        t.autoPlay && t._play()
                    }),
                    this.slider.on("beforeScrollStart",
                    function() {
                        t.autoPlay && clearTimeout(t.timer)
                    })
                },
                _onScrollEnd: function() {
                    var t = this.slider.getCurrentPage().pageX;
                    this.currentPageIndex = t,
                    this.autoPlay && this._play()
                },
                _initDots: function() {
                    this.dots = new Array(this.children.length)
                },
                _play: function() {
                    var t = this;
                    clearTimeout(this.timer),
                    this.timer = setTimeout(function() {
                        t.slider.next()
                    },
                    this.interval)
                }
            }
        },
        Z = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    ref: "slider",
                    staticClass: "slide"
                },
                [e("div", {
                    ref: "sliderGroup",
                    staticClass: "slide-group"
                },
                t._l(t.imgData,
                function(s, i) {
                    return i <= 4 ? e("div", {
                        key: i,
                        ref: "slideItem",
                        refInFor: !0,
                        staticClass: "slideItem",
                        style: {
                            width: t.dstyle.width,
                            height: t.dstyle.height
                        }
                    },
                    [e("img", {
                        style: {
                            width: t.dstyle.width,
                            height: t.dstyle.height
                        },
                        attrs: {
                            src: t.img_domain + s
                        },
                        on: {
                            click: function(e) {
                                return t.lookOver(s, t.imgData, i)
                            }
                        }
                    })]) : t._e()
                }), 0), t._v(" "), "dots" == t.type && 1 != t.dots.length ? e("div", {
                    staticClass: "dots"
                },
                t._l(t.dots,
                function(s, i) {
                    return e("span", {
                        key: i,
                        staticClass: "dot",
                        style: {
                            "background-color": t.currentPageIndex === i ? t.color: "#ccc"
                        }
                    })
                }), 0) : t._e(), t._v(" "), "page" == t.type && 1 != t.dots.length ? e("div", {
                    staticClass: "pages"
                },
                [e("span", {
                    style: {
                        color: t.color
                    }
                },
                [t._v(t._s(t.currentPageIndex + 1))]), t._v("/" + t._s(t.dots.length) + "\n  ")]) : t._e()])
            },
            staticRenderFns: []
        };
        var tt = e("VU/8")(K, Z, !1,
        function(t) {
            e("1pfT")
        },
        null, null).exports,
        st = {
            name: "iQuestion",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        et = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 12vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 12vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var it = e("VU/8")(st, et, !1,
        function(t) {
            e("6qlo")
        },
        "data-v-2a6956d4", null).exports,
        at = {
            name: "iCorrect",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        nt = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 8vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 8vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var ot = e("VU/8")(at, nt, !1,
        function(t) {
            e("26Uc")
        },
        "data-v-5380818c", null).exports,
        rt = {
            name: "iMistake",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        lt = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 6.7vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 6.7vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var ct = e("VU/8")(rt, lt, !1,
        function(t) {
            e("zi5Y")
        },
        "data-v-0ee9cd27", null).exports,
        dt = {
            name: "countDown",
            data: function() {
                return {
                    interval: {},
                    cd_time: this.time,
                    time_tips: 1,
                    isHidden: !1,
                    vTime: 0,
                    hTime: 0
                }
            },
            props: {
                type: {
                    type: String,
                default:
                    "t1"
                },
                color: {
                    type: String,
                default:
                    "#ffdb32"
                },
                time: {
                    type: Number,
                default:
                    0
                },
                status: {
                    type: Boolean,
                default:
                    !0
                },
                rm: {
                    type: Number,
                default:
                    0
                }
            },
            watch: {
                status: function(t, s) {
                    sessionStorage.cdStatus = t ? 1 : 0,
                    this.count_down()
                },
                rm: function() {
                    this.cd_time = this.time
                }
            },
            created: function() {},
            methods: {
                count_down: function() {
                    var t = this;
                    this.status ? this.interval = setInterval(function() {
                        1 == sessionStorage.isCdHidden && sessionStorage.vTime > sessionStorage.hTime ? (t.cd_time = t.cd_time - (parseInt((sessionStorage.vTime - sessionStorage.hTime) / 1e3) + 1), sessionStorage.isCdHidden = 0) : t.cd_time -= 1,
                        t.cd_time <= 0 && (t.cd_time = 0),
                        t.timeTips(t.cd_time),
                        t.cd_time <= 0 && (clearInterval(t.interval), t.$emit("timeOut", 0))
                    },
                    1e3) : (clearInterval(this.interval), this.$emit("timeStop", this.cd_time))
                },
                timeTips: function(t) {
                    var s = t / this.time;
                    s <= 1 && s >= .66 && (this.time_tips = 1),
                    s < .66 && s >= .33 && (this.time_tips = 2),
                    s < .33 && s >= 0 && (this.time_tips = 3)
                },
                cdShow: function(t) {
                    return O(t)
                }
            },
            mounted: function() {
                this.count_down()
            }
        },
        ut = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "count-down"
                },
                ["t1" == t.type ? e("div", {
                    staticClass: "cd-bar clearfix"
                },
                [e("span", [t._v("剩余时间")]), t._v(" "), e("div", {
                    staticClass: "progress-bar"
                },
                [e("span", {
                    style: {
                        "background-color": t.color,
                        width: parseInt(t.cd_time / t.time * 100) + "%"
                    }
                })]), t._v(" "), e("span", {
                    staticClass: "cd"
                },
                [t._v("\n      " + t._s(null === t.cdShow(t.cd_time).h ? "": t.cdShow(t.cd_time).h + ":") + "\n      " + t._s(null === t.cdShow(t.cd_time).m ? "": t.cdShow(t.cd_time).m + ":") + "\n      " + t._s(t.cdShow(t.cd_time).s) + "s\n    ")])]) : t._e(), t._v(" "), "t2" == t.type ? e("div", {
                    staticClass: "cd-time t2 clearfix"
                },
                [e("p", [t._v("剩余：")]), t._v(" "), e("span", [t._v(t._s(null == t.cdShow(t.cd_time).h ? "00": t.cdShow(t.cd_time).h))]), t._v(" "), e("p", [t._v("时")]), t._v(" "), e("span", [t._v(t._s(null == t.cdShow(t.cd_time).m ? "00": t.cdShow(t.cd_time).m))]), t._v(" "), e("p", [t._v("分")]), t._v(" "), e("span", [t._v(t._s(t.cdShow(t.cd_time).s))]), t._v(" "), e("p", [t._v("秒")])]) : t._e()])
            },
            staticRenderFns: []
        };
        var _t = e("VU/8")(dt, ut, !1,
        function(t) {
            e("PAQj")
        },
        "data-v-3f062c1b", null).exports,
        pt = {
            name: "process_01",
            components: {
                Modal: b,
                Slide: tt,
                Cd: _t,
                Scroll: $,
                iQuestion: it,
                iCorrect: ot,
                iMistake: ct,
                Box: k
            },
            data: function() {
                return {
                    no_answer: !1,
                    color: "#ffdb32",
                    active_color: "#c9c9c9",
                    img_domain: "",
                    answertitle: "",
                    answer_page: 1,
                    answer_last: !1,
                    count: 0,
                    baseInfo: {
                        answer_time: 0,
                        count: 0,
                        limit: 0,
                        page: 0,
                        list: {}
                    },
                    modal: {
                        visible: !1,
                        loading: !1,
                        type: "message"
                    },
                    messageMsg: "",
                    cd: {
                        type: "t1",
                        time: 0,
                        status: !0
                    },
                    audio_status: 0,
                    audio_time: null,
                    is_playFinish: {},
                    audio_time_cd: {},
                    stop_time: 0,
                    checked_index: [],
                    is_result: !1,
                    answer_result: [],
                    item_type: "radio",
                    is_submit: !1,
                    answerUSERID: null,
                    tips_msg: "",
                    key_word: 0,
                    answerTimeInterval: {},
                    useTime: 0
                }
            },
            props: {},
            watch: {
                "baseInfo.page": function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.$refs.content.scrollTop = 0
                    })
                },
                "baseInfo.list": function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.video_events()
                    })
                }
            },
            computed: {},
            created: function() {
                this.answerInfo = JSON.parse(sessionStorage.answerInfo),
                this.userInfo = JSON.parse(sessionStorage.userInfo),
                this.img_domain = this.answerInfo.prefixImgUrl,
                this.key_word = sessionStorage.key_word,
                this.color = sessionStorage.color,
                this.answerInfoAjax(this.answer_page)
            },
            methods: {
                att_type: function() {
                    var t = this.baseInfo.list;
                    if (t) {
                        var s = t.pic_url ? t.pic_url: [],
                        e = t.vedio_url,
                        i = t.voice_url;
                        if (s && 0 != s.length) return "img";
                        if ("" !== e) return "video";
                        if ("" !== i) return "audio"
                    }
                    return null
                },
                answerInfoAjax: function(t) {
                    var s = this;
                    if (!this.answer_last) {
                        var e = {
                            page: t
                        };
                        this.modal = {
                            visible: !0,
                            loading: !0,
                            cover: !0,
                            type: "message"
                        };
                        var i = D + "/api.php?m=front&subm=answer&action=answerinfo&answer_id=" + this.answerInfo.answer_id;
                        this.$ajax.get(i, {
                            params: e
                        }).then(function(t) {
                            var e = t.data;
							//alert('ddd')
								
                            if (5402 == e.code || !e) return s.modal = {
                                visible: !1,
                                loading: !1,
                                type: "error"
                            },
                            void(s.no_answer = !0);
							for(var i=0;i<e.data.list[0].option_content.length;i++){
							if(e.data.list[0].option_content[i].id==e.data.list[0].win_id){
								e.data.list[0].option_content[i].option_content='------------'
							}
							}
							setTimeout(function(){
								//alert(jQuery(".choice-content").parent().parent().html())
								jQuery("p").each(function(){
									//alert('dddd')
									if(jQuery(this).html().indexOf('-----')>-1){
										//alert('ddd')
										jQuery(this).trigger('click');
									}
								});
							},1500)
                            e.status ? (s.error_times = 0, s.initData(e.data)) : (s.modal = {
                                visible: !0,
                                loading: !1,
                                type: "error"
                            },
                            s.messageMsg = e.msg || "异常错误")
                        }).
                        catch(function(t) {
                            s.error(t.message)
                        })
                    }
                },
                error: function(t) {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    },
                    this.messageMsg = t
                },
                tips: function(t) {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "tips"
                    },
                    this.tips_msg = t
                },
                initData: function(t) {
                    var s = this,
                    e = t;
                    this.baseInfo = {
                        answer_time: e.answer_time,
                        count: e.count,
                        limit: e.limit,
                        page: e.page,
                        list: e.list[0]
                    },
                    0 == this.count && (this.count = e.count),
                    this.answer_page = 1 * e.page,
                    this.stop_time = e.answer_time,
                    this.cd = {
                        type: "t1",
                        time: e.answer_time,
                        status: !0,
                        rm: (new Date).getTime()
                    },
                    this.is_result = !1,
                    this.answer_result = [],
                    this.checked_index = [],
                    this.audio_time = null,
                    1 == e.list[0].problems_type && (this.item_type = "radio"),
                    2 == e.list[0].problems_type && (this.item_type = "multi"),
                    3 == e.list[0].problems_type && (this.item_type = "input", e.list[0].option_content.forEach(function() {
                        s.checked_index.push(null)
                    })),
                    e.page == e.count && (this.answer_last = !0),
                    this.is_submit = !1,
                    this.$nextTick(function() {
                        s.modal = {
                            visible: !1,
                            loading: !1,
                            type: "message"
                        },
                        s.useTime = 0,
                        s.answerTime()
                    })
                },
                imgBanner: function(t) {
                    return ! t || 1 != t.length
                },
                handClick: function(t) {
                    if (!this.is_submit) switch (this.item_type) {
                    case "radio":
                        this.is_submit = !0,
                        -1 !== this.checked_index.indexOf(t) ? this.checked_index = [] : this.checked_index = [t],
                        this.cd.status = !1,
                        this.answerSubmitAjax();
                        break;
                    case "multi":
                        var s = this.checked_index.indexOf(t); - 1 != s ? this.checked_index.splice(s, 1) : this.checked_index.push(t)
                    }
                },
                multiInput: function(t) {
                    var s = window.event.target.value;
                    this.checked_index[t] = s
                },
                submit: function() {
                    this.audioPlay("stop"),
                    this.video_pause(),
                    this.is_submit || (this.is_submit = !0, this.cd.status = !1, this.answerSubmitAjax())
                },
                answerSubmitAjax: function() {
                    var t = this;
                    if (1 == this.$route.query.preview) return this.tips("此为预览模式"),
                    void(this.is_submit = !1);
                    this.modal = {
                        visible: !0,
                        loading: !0,
                        type: "message"
                    };
                    var s = this.baseInfo.list.id;
                    clearInterval(this.answerTimeInterval);
                    var e = [],
                    i = this.baseInfo.page == this.baseInfo.count ? 1 : 0,
                    a = this.useTime || 1;
                    "input" != this.item_type ? this.checked_index.forEach(function(s, i) {
                        e.push(t.baseInfo.list.option_content[s].id)
                    }) : e = this.checked_index;
                    var n = new FormData;
                    n.append("id", s),
                    n.append("option", f()(e)),
                    n.append("yongshi", a),
                    n.append("last", i);
                    var o = D + "/api.php?m=front&subm=answer&action=answerdata&answer_id=" + this.answerInfo.answer_id;
                    this.$ajax.post(o, n).then(function(s) {
                        var e = s.data,
                        i = e.data;
                        if (e.status) {
                            t.modal = {
                                visible: !1,
                                loading: !1,
                                type: "message"
                            },
                            t.answerUSERID = i.id || null,
                            t.answer_page += 1,
                            t.is_result = !0,
                            t.answer_result = i.msg;
                            var a = t;
                            setTimeout(function() {
                                if (1 * i.fin == 1) return sessionStorage.answerUSERID = a.answerUSERID,
                                void a.$emit("answerStatus", "end");
                                a.answerInfoAjax(a.answer_page)
                            },
                            2e3)
                        } else t.modal = {
                            visible: !0,
                            loading: !1,
                            type: "error"
                        },
                        t.messageMsg = e.msg || "异常错误"
                    }).
                    catch(function(s) {
                        t.error("网络异常，请重新开始答题！")
                    })
                },
                checkAnswer: function(t, s) {
                    if ("string" == typeof s) {
                        var e = 0;
                        return s.split("；").forEach(function(s, i) {
                            t == s && (e = 1)
                        }),
                        e
                    }
                },
                answerTime: function() {
                    var t = this;
                    this.answerTimeInterval = setInterval(function() {
                        1 == sessionStorage.isHidden && sessionStorage.vTime > sessionStorage.hTime ? (t.useTime += parseInt((sessionStorage.vTime - sessionStorage.hTime) / 1e3) + 1, sessionStorage.isHidden = 0) : t.useTime += 1
                    },
                    1e3)
                },
                timeStop: function(t) {
                    this.stop_time = t
                },
                timeOut: function(t) {
                    this.is_submit = !0,
                    this.audioPlay("stop"),
                    this.stop_time = t,
                    this.cd.status = !1,
                    this.answerSubmitAjax()
                },
                audioPlay: function(t) {
                    var s = this;
                    clearInterval(this.audio_play);
                    var e = this.$refs.audio,
                    i = (this.$refs.audioPlay, this);
                    e && (null == this.audio_time && e.load(), this.audio_time = parseInt(e.duration), this.audio_play = setInterval(function() {
                        if (isNaN(s.audio_time)) s.audio_time = parseInt(e.duration);
                        else {
                            if ("stop" == t) return s.audio_status = 0,
                            clearInterval(s.audio_time_cd),
                            clearInterval(s.is_playFinish),
                            e.pause(),
                            void clearInterval(s.audio_play);
                            e.paused ? (e.load(), e.play(), s.audio_status = 1, s.audio_time_cd = setInterval(function() {
                                4 == e.readyState && (i.audio_time <= 0 ? clearInterval(i.audio_time_cd) : i.audio_time -= 1)
                            },
                            1e3), s.is_playFinish = setInterval(function() {
                                e.ended && (i.audio_status = 0, clearInterval(i.is_playFinish), clearInterval(i.audio_time_cd))
                            },
                            10)) : (s.audio_status = 0, clearInterval(s.audio_time_cd), clearInterval(s.is_playFinish), e.pause()),
                            clearInterval(s.audio_play)
                        }
                    },
                    20))
                },
                video_play: function() {
                    this.audioPlay("stop");
                    var t = this.$refs.video,
                    s = this.$refs.videoPlay;
                    t && (t.load(), t.play(), s.style.display = "none", t.style.display = "block")
                },
                video_pause: function() {
                    var t = this.$refs.video,
                    s = this.$refs.videoPlay;
                    t && (s.style.display = "block", t.style.display = "none", t.pause())
                },
                video_events: function() {
                    var t = this.$refs.video,
                    s = this.$refs.videoPlay;
                    t && (t.addEventListener("x5videoexitfullscreen",
                    function(e) {
                        s.style.display = "block",
                        t.style.display = "none"
                    }), t.addEventListener("webkitendfullscreen",
                    function() {
                        s.style.display = "block",
                        t.style.display = "none"
                    }))
                },
                cancel: function() {
                    this.modal.visible = !1,
                    this.cd.status = !0
                },
                show_tips: function() {
                    this.modal.visible = !0,
                    this.cd.status = !1
                },
                goHome: function() {
                    this.$emit("answerStatus", "start", !0)
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.video_events()
                })
            }
        },
        mt = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "answer-process",
                    style: {
                        background: "url(" + ("" == t.answerInfo.answer_back_img ? "/answer/static/img/template01/bg.jpg": t.answerInfo.answer_back_img) + ") no-repeat 0 0",
                        "background-size": "100% 100%"
                    }
                },
                [t.no_answer ? e("div", {
                    staticClass: "no-answer"
                },
                [e("div", {
                    staticClass: "answer-title"
                },
                [t._v(t._s(t.answerInfo.answertitle))]), t._v(" "), e("p", [t._v("还没有题目哦~")]), t._v(" "), e("div", {
                    staticClass: "go-back"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.goHome
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("返回首页")])])], 1)]) : t._e(), t._v(" "), t.no_answer ? t._e() : e("div", {
                    staticClass: "answer-title"
                },
                [t._v(t._s(t.answerInfo.answertitle))]), t._v(" "), t.no_answer ? t._e() : e("div", {
                    staticClass: "answer-page",
                    style: {
                        "background-color": t.color
                    }
                },
                [t._v("\n    " + t._s(t.baseInfo.page) + "/" + t._s(t.baseInfo.count) + "\n  ")]), t._v(" "), 0 == t.cd.time || null == t.cd.time || t.no_answer ? t._e() : e("div", {
                    staticClass: "answer-plan"
                },
                [e("Cd", {
                    attrs: {
                        type: t.cd.type,
                        time: t.cd.time,
                        color: t.color,
                        status: t.cd.status,
                        rm: t.cd.rm
                    },
                    on: {
                        timeOut: t.timeOut,
                        timeStop: t.timeStop
                    }
                })], 1), t._v(" "), t.no_answer ? t._e() : e("div", {
                    ref: "content",
                    staticClass: "answer-content"
                },
                [e("div", {
                    staticClass: "content-text"
                },
                [t._v("\n      " + t._s(t.baseInfo.page) + "、" + t._s(t.baseInfo.list.title) + t._s("radio" == t.item_type ? "(单选)": "multi" == t.item_type ? "(多选)": "") + "\n    ")]), t._v(" "), e("div", {
                    staticClass: "content-att"
                },
                [t.baseInfo.list && t.baseInfo.list.pic_url ? e("div", {
                    staticClass: "att-img"
                },
                [e(t.baseInfo.list && t.baseInfo.list.pic_url ? "Slide": "", {
                    key: t.baseInfo.page,
                    tag: "component",
                    attrs: {
                        interval: 2e3,
                        type: "dots",
                        dstyle: {
                            width: "98vw",
                            height: "50vw"
                        },
                        data: t.baseInfo.list && t.baseInfo.list.pic_url ? t.baseInfo.list.pic_url: [],
                        loop: t.imgBanner(t.baseInfo.list && t.baseInfo.list.pic_url ? t.baseInfo.list.pic_url: []),
                        autoPlay: t.imgBanner(t.baseInfo.list && t.baseInfo.list.pic_url ? t.baseInfo.list.pic_url: []),
                        color: t.color
                    }
                })], 1) : t._e(), t._v(" "), "" != t.baseInfo.list.vedio_url ? e("div", {
                    staticClass: "att-video"
                },
                [e("div", {
                    ref: "videoPlay",
                    staticClass: "video-img",
                    on: {
                        click: t.video_play
                    }
                },
                [e("img", {
                    staticClass: "video-play",
                    attrs: {
                        src: "/answer/static/public/video_play.png"
                    }
                }), t._v(" "), e("img", {
                    staticClass: "video-cover",
                    attrs: {
                        src: t.img_domain + t.baseInfo.list.video_cover
                    }
                })]), t._v(" "), e("video", {
                    ref: "video",
                    attrs: {
                        poster: t.img_domain + t.baseInfo.list.video_cover,
                        controls: "",
                        preload: "auto",
                        src: t.baseInfo.list.vedio_url
                    }
                })]) : t._e(), t._v(" "), "" != t.baseInfo.list.voice_url ? e("div", {
                    staticClass: "att-audio"
                },
                [e("div", {
                    ref: "audioPlay",
                    staticClass: "audio",
                    style: {
                        background: "url('/answer/static/img/template01/audio.png') no-repeat 0 0 " + t.color,
                        "background-size": "26.7vw 21.9vw"
                    },
                    on: {
                        click: t.audioPlay
                    }
                },
                [0 === t.audio_status ? e("p", {
                    staticClass: "tip-top"
                },
                [t._v("听声音")]) : t._e(), t._v(" "), 0 === t.audio_status ? e("p", {
                    staticClass: "tip-down"
                },
                [t._v("建议佩戴耳机")]) : t._e(), t._v(" "), 1 === t.audio_status ? e("p", {
                    staticClass: "tip-top"
                },
                [t._v("播放中…")]) : t._e(), t._v(" "), 1 === t.audio_status ? e("p", {
                    staticClass: "tip-time"
                },
                [t._v(t._s(t.audio_time) + "s")]) : t._e(), t._v(" "), e("audio", {
                    ref: "audio",
                    attrs: {
                        src: t.baseInfo.list.voice_url
                    }
                })])]) : t._e()]), t._v(" "), e("div", {
                    staticClass: "answer-item"
                },
                [3 != t.baseInfo.list.problems_type ? e("div", {
                    staticClass: "option"
                },
                t._l(t.baseInfo.list.option_content,
                function(s, i) {
                    return e("div", {
                        key: i,
                        class: {
                            "choice-item": !0,
                            "answer-sumbit": t.baseInfo.page == t.baseInfo.count && 1 == t.baseInfo.list.problems_type
                        },
                        staticStyle: {
                            "-webkit-align-items": "center"
                        }
                    },
                    ["multi" == t.item_type ? e("div", {
                        staticClass: "multi-dot",
                        style: {
                            "background-color": -1 != t.checked_index.indexOf(i) ? t.color: "#fff"
                        },
                        on: {
                            click: function(s) {
                                return t.handClick(i)
                            }
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "choice-content"
                    },
                    [e("Box", {
                        attrs: {
                            id: i,
                            type: -1 != t.checked_index.indexOf(i) && 1 == t.baseInfo.list.problems_type ? "active": "body",
                            color: -1 != t.checked_index.indexOf(i) && 1 == t.baseInfo.list.problems_type ? t.active_color: "#fff"
                        }
                    },
                    [e("div", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            slot: "box"
                        },
                        slot: "box"
                    },
                    [e("p", {
                        on: {
                            click: function(s) {
                                return t.handClick(i)
                            }
                        }
                    },
                    [t._v(t._s(s.id) + "、" + t._s(s.option_content))]), t._v(" "), e("div", {
                        staticClass: "item-judge"
                    },
                    [t.is_result && -1 != t.answer_result.indexOf(s.id) ? e("iCorrect", {
                        attrs: {
                            color: t.color
                        }
                    }) : t._e(), t._v(" "), t.is_result && -1 == t.answer_result.indexOf(s.id) && -1 != t.checked_index.indexOf(i) ? e("iMistake", {
                        attrs: {
                            color: t.color
                        }
                    }) : t._e()], 1), t._v(" "), s.imgs && 0 != s.imgs.length ? e("div", {
                        staticClass: "item-img"
                    },
                    [e(s.imgs && 0 != s.imgs.length ? "Slide": "", {
                        key: t.baseInfo.page + "-" + i,
                        tag: "component",
                        attrs: {
                            interval: 2e3,
                            type: "dots",
                            dstyle: {
                                width: "80vw",
                                height: "40vw"
                            },
                            data: s.imgs,
                            loop: t.imgBanner(s.imgs),
                            autoPlay: t.imgBanner(s.imgs),
                            color: t.color
                        }
                    })], 1) : t._e()])])], 1)])
                }), 0) : t._e(), t._v(" "), 3 == t.baseInfo.list.problems_type ? e("div", {
                    staticClass: "component"
                },
                t._l(t.baseInfo.list.option_content,
                function(s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "component-item"
                    },
                    [e("div", {
                        staticClass: "item-judge"
                    },
                    [t.is_result && t.checkAnswer(t.checked_index[i], t.answer_result[i]) ? e("iCorrect", {
                        attrs: {
                            color: t.color
                        }
                    }) : t._e(), t._v(" "), t.is_result && !t.checkAnswer(t.checked_index[i], t.answer_result[i]) ? e("iMistake", {
                        attrs: {
                            color: t.color
                        }
                    }) : t._e()], 1), t._v(" "), t.is_result && !t.checkAnswer(t.checked_index[i], t.answer_result[i]) ? e("div", {
                        staticClass: "answer-txt"
                    },
                    [e("p", [t._v("错误，正确答案为“" + t._s(t.answer_result[i]) + "”")])]) : t._e(), t._v(" "), e("textarea", {
                        attrs: {
                            type: "text",
                            disabled: t.is_result
                        },
                        domProps: {
                            value: t.checked_index[i]
                        },
                        on: {
                            input: function(s) {
                                return t.multiInput(i)
                            }
                        }
                    })])
                }), 0) : t._e()])]), t._v(" "), t.no_answer ? t._e() : e("div", {
                    staticClass: "answer-btn"
                },
                ["radio" != t.item_type ? e("div", {
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "button-left"
                },
                [t.baseInfo.page < t.baseInfo.count ? e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.submit
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("下一题")])]) : t._e(), t._v(" "), t.baseInfo.page == t.baseInfo.count ? e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.submit
                    }
                },
                [e("div", {
                    staticClass: "answer-sumbit",
                    attrs: {
                        slot: "box",
                        "data-url": "?m=front&subm=answer&action=answerdata"
                    },
                    slot: "box"
                },
                [t._v("完成答题")])]) : t._e()], 1)]) : t._e(), t._v(" "), t.baseInfo.list.hint && "" != t.baseInfo.list.hint ? e("div", {
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "button-right"
                },
                [e("Box", {
                    on: {
                        handClick: t.show_tips
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("点我看提示")])])], 1)]) : t._e()]), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.modal.visible,
                        loading: t.modal.loading,
                        cover: t.modal.cover
                    }
                },
                ["message" == t.modal.type ? e("div", {
                    staticClass: "answer-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips"
                },
                [e("Box", [e("div", {
                    staticClass: "content",
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "tips-q"
                },
                [e("iQuestion", {
                    attrs: {
                        color: t.color
                    }
                })], 1), t._v(" "), e("div", {
                    staticClass: "tips-text"
                },
                [t._v("\n              " + t._s(t.baseInfo.list.hint) + "\n            ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.cancel
                    }
                },
                [e("p", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("我知道啦")])])], 1)])])], 1)]) : t._e(), t._v(" "), "tips" == t.modal.type ? e("div", {
                    staticClass: "answer-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips"
                },
                [e("Box", [e("div", {
                    staticClass: "content",
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "tips-text"
                },
                [t._v("\n              " + t._s(t.tips_msg) + "\n            ")]), t._v(" "), e("div", {
                    staticClass: "tips-btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.cancel
                    }
                },
                [e("p", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("我知道啦")])])], 1)])])], 1)]) : t._e(), t._v(" "), "error" == t.modal.type ? e("div", {
                    staticClass: "answer-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips"
                },
                [e("Box", [e("div", {
                    staticClass: "content",
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "tips-text"
                },
                [t._v("\n              " + t._s(t.messageMsg) + "\n            ")])])])], 1)]) : t._e()])], 1)
            },
            staticRenderFns: []
        };
        var vt = e("VU/8")(pt, mt, !1,
        function(t) {
            e("cjdU")
        },
        "data-v-4834a34b", null).exports,
        ht = {
            name: "checked_t2",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        ft = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 10.7vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 10.7vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var gt = e("VU/8")(ht, ft, !1,
        function(t) {
            e("MpHr")
        },
        "data-v-7559967f", null).exports,
        wt = e("zM1N"),
        bt = e.n(wt),
        yt = {
            name: "process_02",
            components: {
                Modal: b,
                Slide: tt,
                Cd: _t,
                Scroll: $,
                iChecked_t2: gt
            },
            data: function() {
                return {
                    no_answer: !1,
                    color: "#123456",
                    active_color: "#c9c9c9",
                    img_domain: "",
                    answer_page: 0,
                    baseInfo: {
                        answer_time: 0,
                        count: 0,
                        limit: 0,
                        page: 0,
                        list: {}
                    },
                    answerResult: {},
                    answerInfo: {},
                    userInfo: {},
                    modal: {
                        visible: !1,
                        loading: !1,
                        type: "tips"
                    },
                    error_msg: "",
                    cd: {
                        type: "t2",
                        time: 0,
                        status: !0
                    },
                    audio_status: 0,
                    audioTime: null,
                    audio_time: {
                        h: "00",
                        m: "00",
                        s: "00"
                    },
                    is_playFinish: {},
                    audio_time_cd: {},
                    stop_time: 0,
                    options_checked: {},
                    checked_index: [],
                    posterBase64: "",
                    posterShow: !1,
                    createdPoster: !1,
                    radio_checked: null,
                    mutli_indexs: [],
                    item_type: [],
                    att_type: [],
                    userImgBase64: "",
                    backgroundImgBase64: "",
                    isSubmit: !1,
                    key_word: 0,
                    answerTimeInterval: {},
                    useTime: 0,
                    wximg: ""
                }
            },
            props: {},
            watch: {
                "baseInfo.list": function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.video_events()
                    })
                },
                answer_page: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.$refs.content.scrollTop = 0
                    })
                }
            },
            computed: {},
            created: function() {
                this.answerInfo = JSON.parse(sessionStorage.answerInfo),
                this.userInfo = JSON.parse(sessionStorage.userInfo),
                this.img_domain = this.answerInfo.prefixImgUrl,
                this.key_word = sessionStorage.key_word,
                this.wximg = this.userInfo.userimg,
                this.color = sessionStorage.color;
                var t = {
                    page: 1,
                    answer_id: this.answerInfo.answer_id
                };
                this.modal = {
                    visible: !0,
                    loading: !0,
                    cover: !0,
                    type: "tips"
                },
                function(t, s, e) {
                    var i = t || {},
                    a = D + "/api.php?m=front&subm=answer&action=answerinfo";
                    c.a.get(a, {
                        params: i
                    }).then(function(t) {
                        var e = t.data;

                        "function" == typeof s && s(e)
                    }).
                    catch(function(t) {
                        "function" == typeof e && e(t)
                    })
                } (t, this.initData, this.error)
            },
            methods: {
                initData: function(t) {
                    var s = this;
                    if (5402 == t.code || !t) return this.modal = {
                        visible: !1,
                        loading: !1,
                        type: "tips"
                    },
                    void(this.no_answer = !0);
                    if (t.status) {
                        var e = t.data;
                        this.baseInfo = {
                            answer_time: e.answer_time,
                            count: e.count,
                            limit: e.limit,
                            page: e.page,
                            list: e.list
                        },
                        this.stop_time = e.answer_time,
                        this.cd.time = e.answer_time;
                        try {
                            e.list.forEach(function(t, e) {
                                s.options_checked[t.id] = [],
                                s.item_type.push(["radio", "multi", "input"][1 * t.problems_type - 1]),
                                t.pic_url && 0 !== t.pic_url.length ? s.att_type.push("img") : "" !== t.vedio_url ? s.att_type.push("video") : "" !== t.voice_url ? s.att_type.push("audio") : s.att_type.push(null)
                            })
                        } catch(t) {
                            console.log(t)
                        }
                        this.$nextTick(function() {
                            s.modal = {
                                visible: !1,
                                loading: !1,
                                type: "tips"
                            }
                        }),
                        this.useTime = 0,
                        this.answerTime()
                    } else this.fail(t.msg)
                },
                imgBanner: function(t) {
                    return ! t || 1 != t.length
                },
                handClick: function(t) {
                    switch (this.item_type[this.answer_page]) {
                    case "radio":
                        this.checked_index = [t];
                        break;
                    case "multi":
                        var s = this.checked_index.indexOf(t); - 1 != s ? this.checked_index.splice(s, 1) : this.checked_index.push(t)
                    }
                    var e = this.baseInfo.list[this.answer_page] ? this.baseInfo.list[this.answer_page].id: this.answer_page;
                    this.options_checked[e] = bt()(this.checked_index)
                },
                answerInput: function(t, s) {
                    var e = (s || window.event).target.value;
                    this.checked_index[t] = e;
                    var i = this.baseInfo.list[this.answer_page] ? this.baseInfo.list[this.answer_page].id: this.answer_page;
                    this.options_checked[i] = bt()(this.checked_index)
                },
                audioPlay: function(t) {
                    var s = this;
                    clearInterval(this.audio_play);
                    var e = this.$refs.audio,
                    i = (this.$refs.audioPlay, this);
                    e && (null == this.audioTime && e.load(), this.audioTime = parseInt(e.duration), this.audio_play = setInterval(function() {
                        if (isNaN(s.audioTime)) s.audioTime = parseInt(e.duration);
                        else {
                            if ("stop" == t) return s.audio_status = 0,
                            s.audio_time = O(s.audioTime),
                            clearInterval(s.is_playFinish),
                            clearInterval(s.audio_time_cd),
                            e.pause(),
                            void clearInterval(s.audio_play);
                            e.paused ? (e.load(), e.play(), s.audio_status = 1, s.audio_time = O(s.audioTime), s.audio_time_cd = setInterval(function() {
                                4 == e.readyState && (i.audioTime <= 0 ? clearInterval(i.audio_time_cd) : (i.audioTime -= 1, i.audio_time = O(i.audioTime)))
                            },
                            1e3), s.is_playFinish = setInterval(function() {
                                e.ended && (i.audio_status = 0, clearInterval(i.is_playFinish), clearInterval(i.audio_time_cd))
                            },
                            10)) : (s.audio_status = 0, s.audio_time = O(parseInt(e.duration)), clearInterval(s.is_playFinish), clearInterval(s.audio_time_cd), e.pause()),
                            clearInterval(s.audio_play)
                        }
                    },
                    20))
                },
                video_play: function() {
                    this.audioPlay("stop");
                    var t = this.$refs.video,
                    s = this.$refs.videoPlay;
                    t && (t.load(), t.play(), s.style.display = "none", t.style.display = "block")
                },
                video_pause: function() {
                    var t = this.$refs.video,
                    s = this.$refs.videoPlay;
                    t && (s.style.display = "block", t.style.display = "none", t.pause())
                },
                video_events: function() {
                    var t = this.$refs.video,
                    s = this.$refs.videoPlay;
                    t && (t.addEventListener("x5videoexitfullscreen",
                    function(e) {
                        s.style.display = "block",
                        t.style.display = "none"
                    }), t.addEventListener("webkitendfullscreen",
                    function() {
                        s.style.display = "block",
                        t.style.display = "none"
                    }))
                },
                cancel: function() {
                    this.modal = {
                        visible: !1,
                        loading: !1,
                        type: "tips"
                    },
                    this.cd.status = !0
                },
                show_tips: function() {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "tips"
                    },
                    this.cd.status = !1
                },
                lookOver: function(t, s) {
                    var e = this,
                    i = void 0,
                    a = void 0; - 1 == t.indexOf("http") ? (i = this.img_domain + t, a = [], 0 != s.length && s.forEach(function(t, s) {
                        a.push(e.img_domain + t)
                    })) : (i = t, a = s),
                    wx.previewImage({
                        current: i,
                        urls: a
                    })
                },
                answerTime: function() {
                    var t = this;
                    this.answerTimeInterval = setInterval(function() {
                        1 == sessionStorage.isHidden && sessionStorage.vTime > sessionStorage.hTime ? (t.useTime += parseInt((sessionStorage.vTime - sessionStorage.hTime) / 1e3) + 1, sessionStorage.isHidden = 0) : t.useTime += 1
                    },
                    1e3)
                },
                timeOut: function(t) {
                    this.audioPlay("stop"),
                    this.stop_time = t,
                    this.answerSubmitAjax()
                },
                timeStop: function(t) {
                    this.stop_time = t
                },
                goAhead: function() {
                    var t = this;
                    if (this.audioTime = null, this.audio_time = {
                        h: "00",
                        m: "00",
                        s: "00"
                    },
                    this.audioPlay("stop"), this.video_pause(), this.answer_page >= 1) {
                        this.answer_page -= 1;
                        var s = this.baseInfo.list[this.answer_page] ? this.baseInfo.list[this.answer_page].id: this.answer_page;
                        this.checked_index = bt()(this.options_checked[s])
                    }
                    this.$nextTick(function() {
                        t.video_events()
                    })
                },
                backUp: function() {
                    var t = this;
                    if (this.audioTime = null, this.audio_time = {
                        h: "00",
                        m: "00",
                        s: "00"
                    },
                    this.audioPlay("stop"), this.video_pause(), 1 != this.$route.query.preview) {
                        if (this.answer_page < this.baseInfo.count) {
                            this.answer_page += 1;
                            var s = this.baseInfo.list[this.answer_page] ? this.baseInfo.list[this.answer_page].id: this.answer_page;
                            this.checked_index = bt()(this.options_checked[s])
                        }
                        this.$nextTick(function() {
                            t.video_events()
                        })
                    } else this.msg("此为预览模式")
                },
                submit: function() {
                    this.audioPlay("stop"),
                    this.isSubmit || (this.isSubmit = !0, this.cd.status = !1, this.answerSubmitAjax())
                },
                answerSubmitAjax: function() {
                    var t = this;
                    if (1 != this.$route.query.preview) {
                        this.modal = {
                            visible: !0,
                            loading: !0,
                            type: "tips"
                        },
                        clearInterval(this.answerTimeInterval);
                        var s = this.useTime,
                        e = [];
                        this.baseInfo.list.forEach(function(s, i) {
                            var a = [];
                            "input" == t.item_type[i] ? a = t.options_checked[s.id] : t.options_checked[s.id].forEach(function(t, e) {
                                a.push(s.option_content[t].id)
                            }),
                            e.push({
                                id: s.id,
                                option: a
                            })
                        });
                        var i = new FormData;
                        i.append("option", f()(e)),
                        i.append("zongshijian", s),
                        i.append("last", 1);
                        var a = D + "/api.php?m=front&subm=answer&action=answerdata2&answer_id=" + this.answerInfo.answer_id;
                        this.$ajax.post(a, i).then(function(s) {
                            var e = s.data;
                            e.status ? F({
                                answer_id: t.answerInfo.answer_id,
                                id: e.data.id
                            },
                            t, t.success, t.fail, t.error) : t.fail(e.msg || "异常错误")
                        }).
                        catch(function(s) {
                            t.error("网络异常，请重新开始答题！")
                        })
                    } else this.msg("此为预览模式")
                },
                success: function(t) {
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "complete"
                    }
                },
                fail: function(t) {
                    this.error_msg = t || "异常错误",
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    }
                },
                error: function(t) {
                    this.error_msg = t,
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    }
                },
                msg: function(t) {
                    this.error_msg = t,
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "message"
                    }
                },
                createPoster: function() {
                    var t = this;
                    this.createdPoster || (this.createdPoster = !0,
                    function(t, s, e) {
                        var i = t || {},
                        a = D + "/api.php";
                        c.a.get(a, {
                            params: r()({
                                m: "front",
                                subm: "answer",
                                action: "downwximg"
                            },
                            i)
                        }).then(function(t) {
                            var e = t.data;
                            "function" == typeof s && s(e)
                        }).
                        catch(function(t) {
                            "function" == typeof e && e(t)
                        })
                    } ({
                        wximg: this.userInfo.userimg,
                        uid: this.userInfo.user_id
                    },
                    function(s) {
                        t.wximg = s.data.wximg,
                        t.$nextTick(function() {
                            var s = document.getElementById("poster");
                            html2canvas(s, {
                                scale: 3.5,
                                backgroundColor: null
                            }).then(function(s) {
                                t.posterBase64 = s.toDataURL(),
                                t.posterShow = !0,
                                t.createdPoster = !1
                            })
                        })
                    },
                    function(s) {
                        t.createdPoster = !1
                    }))
                },
                replaceImg: function() {
                    try {
                        var t = this.$refs.userImg,
                        s = this.$refs.backgroundImg;
                        t && (this.getBase64Image(t), this.userImgBase64 = sessionStorage.getItem("savedImageData")),
                        s && (this.getBase64Image(s), this.backgroundImgBase64 = sessionStorage.getItem("savedImageData"))
                    } catch(t) {
                        this.error("replaceImg:" + t.message)
                    }
                },
                getBase64Image: function(t) {
                    t.crossOrigin = "Anonymous";
                    var s = document.createElement("canvas"),
                    e = s.getContext("2d");
                    s.width = t.width,
                    s.height = t.height;
                    try {
                        e.drawImage(t, 0, 0, t.width, t.height)
                    } catch(t) {
                        this.error("getBase64Image_drawImage:" + t.message)
                    }
                    try {
                        sessionStorage.setItem("savedImageData", s.toDataURL("image/png"))
                    } catch(t) {
                        this.error("getBase64Image_toDataURL:" + t.message)
                    }
                },
                answerAgain: function() {
                    "1" == sessionStorage.special ? this.$router.replace({
                        name: "SigninB",
                        query: r()({},
                        this.$route.query)
                    }) : this.$emit("answerStatus", "start", !0)
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.video_events()
                })
            }
        },
        Ct = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "answer-process",
                    style: {
                        "background-color": t.color
                    }
                },
                [e("div", {
                    staticClass: "background-img"
                },
                ["" == t.answerInfo.answer_back_img ? e("img", {
                    attrs: {
                        src: "/answer/static/img/template02/bg.png"
                    }
                }) : t._e(), t._v(" "), "" != t.answerInfo.answer_back_img ? e("img", {
                    staticClass: "background",
                    attrs: {
                        src: t.answerInfo.answer_back_img
                    }
                }) : t._e()]), t._v(" "), t.no_answer ? e("div", {
                    staticClass: "no-answer"
                },
                [e("div", {
                    staticClass: "answer-title"
                },
                [t._v("\n      " + t._s(t.answerInfo.answertitle) + "\n    ")]), t._v(" "), e("p", [t._v("还没有题目哦~")]), t._v(" "), e("div", {
                    staticClass: "go-back",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.answerAgain
                    }
                },
                [t._v("\n      返回首页\n    ")])]) : t.no_answer ? t._e() : e("div", {
                    staticClass: "process-content"
                },
                [e("div", {
                    staticClass: "answer-plan"
                },
                [0 != t.cd.time && null != t.cd.time ? e("Cd", {
                    attrs: {
                        type: t.cd.type,
                        time: 1 * t.cd.time,
                        status: t.cd.status
                    },
                    on: {
                        timeOut: t.timeOut,
                        timeStop: t.timeStop
                    }
                }) : t._e(), t._v(" "), t.baseInfo.list[t.answer_page] && "" != t.baseInfo.list[t.answer_page].hint ? e("div", {
                    staticClass: "show-tips"
                },
                [e("a", {
                    on: {
                        click: t.show_tips
                    }
                },
                [t._v("点我看提示")])]) : t._e()], 1), t._v(" "), e("div", {
                    staticClass: "answer-info"
                },
                ["video" === t.att_type[t.answer_page] || "img" === t.att_type[t.answer_page] || "audio" === t.att_type[t.answer_page] ? e("div", {
                    staticClass: "info-txt clearfix"
                },
                [e("p", {
                    staticClass: "info-page"
                },
                [t._v("题号：" + t._s(t.answer_page + 1) + "/" + t._s(t.baseInfo.count))]), t._v(" "), e("p", {
                    staticClass: "info-accuracy"
                },
                [t._v("此题正确率" + t._s(t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].acc: 0) + "%")])]) : t._e(), t._v(" "), null === t.att_type[t.answer_page] ? e("div", {
                    staticClass: "info-img"
                },
                [e("p", {
                    staticClass: "info-page"
                },
                [t._v("题号：" + t._s(t.answer_page + 1) + "/" + t._s(t.baseInfo.count))]), t._v(" "), e("p", {
                    staticClass: "info-accuracy"
                },
                [t._v("此题正确率" + t._s(t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].acc: 0) + "%")])]) : t._e()]), t._v(" "), e("div", {
                    ref: "content",
                    staticClass: "answer-content"
                },
                [e("div", {
                    staticClass: "content-box",
                    style: "padding-top:" + (null === t.att_type[t.answer_page] ? "6vw": 0)
                },
                [t.baseInfo.list[t.answer_page] && t.baseInfo.list[t.answer_page].pic_url && 0 != t.baseInfo.list[t.answer_page].pic_url.length ? e("div", {
                    staticClass: "att-img"
                },
                [e(t.baseInfo.list[t.answer_page] && t.baseInfo.list[t.answer_page].pic_url && 0 != t.baseInfo.list[t.answer_page].pic_url.length ? "Slide": "", {
                    key: t.answer_page,
                    tag: "component",
                    attrs: {
                        interval: 2e3,
                        type: "dots",
                        color: t.color,
                        dstyle: {
                            width: "98vw",
                            height: "50vw"
                        },
                        data: t.baseInfo.list[t.answer_page] && t.baseInfo.list[t.answer_page].pic_url ? t.baseInfo.list[t.answer_page].pic_url: [],
                        loop: t.imgBanner(t.baseInfo.list[t.answer_page] && t.baseInfo.list[t.answer_page].pic_url ? t.baseInfo.list[t.answer_page].pic_url: []),
                        autoPlay: t.imgBanner(t.baseInfo.list[t.answer_page] && t.baseInfo.list[t.answer_page].pic_url ? t.baseInfo.list[t.answer_page].pic_url: [])
                    }
                })], 1) : t._e(), t._v(" "), t.baseInfo.list[t.answer_page] && "" != t.baseInfo.list[t.answer_page].vedio_url ? e("div", {
                    staticClass: "att-video"
                },
                [e("div", {
                    ref: "videoPlay",
                    staticClass: "video-img",
                    on: {
                        click: t.video_play
                    }
                },
                [e("img", {
                    staticClass: "video-play",
                    attrs: {
                        src: "/answer/static/public/video_play.png"
                    }
                }), t._v(" "), e("img", {
                    staticClass: "video-cover",
                    attrs: {
                        src: t.baseInfo.list[t.answer_page] && t.baseInfo.list[t.answer_page].video_cover ? t.img_domain + "/" + t.baseInfo.list[t.answer_page].video_cover: ""
                    }
                })]), t._v(" "), e("video", {
                    ref: "video",
                    attrs: {
                        poster: t.baseInfo.list[t.answer_page] ? t.img_domain + t.baseInfo.list[t.answer_page].video_cover: "",
                        controls: "",
                        src: t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].vedio_url: "",
                        preload: "auto"
                    }
                },
                [t._v("\n              设备不支持该视频格式！\n          ")])]) : t._e(), t._v(" "), e("div", {
                    staticClass: "content-text"
                },
                [t._v("\n          " + t._s(t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].title: "") + t._s("radio" == t.item_type[t.answer_page] ? "(单选)": "multi" == t.item_type[t.answer_page] ? "(多选)": "") + "\n        ")]), t._v(" "), e("div", {
                    staticClass: "content-att"
                },
                [t.baseInfo.list[t.answer_page] && "" != t.baseInfo.list[t.answer_page].voice_url ? e("div", {
                    staticClass: "att-audio"
                },
                [e("div", {
                    ref: "audioPlay",
                    staticClass: "audio",
                    on: {
                        click: t.audioPlay
                    }
                },
                [e("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == t.audio_status,
                        expression: "audio_status == 1"
                    }],
                    attrs: {
                        src: "/answer/static/img/template02/audio.gif"
                    }
                }), t._v(" "), e("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == t.audio_status,
                        expression: "audio_status == 0"
                    }],
                    attrs: {
                        src: "/answer/static/img/template02/audio.png"
                    }
                }), t._v(" "), e("p", {
                    staticClass: "time-tip"
                },
                [t._v(t._s(null == t.audio_time.h ? "00": t.audio_time.h) + ":" + t._s(null == t.audio_time.m ? "00": t.audio_time.m) + ":" + t._s(t.audio_time.s) + "s")]), t._v(" "), e("audio", {
                    ref: "audio",
                    attrs: {
                        src: t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].voice_url: ""
                    }
                })])]) : t._e()]), t._v(" "), e("div", {
                    staticClass: "answer-item"
                },
                [e("div", {
                    staticClass: "answer-border"
                }), t._v(" "), t.baseInfo.list[t.answer_page] && 3 !== t.baseInfo.list[t.answer_page].problems_type ? e("div", {
                    staticClass: "option"
                },
                t._l(t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].option_content: [],
                function(s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "choice-item",
                        style: -1 !== t.checked_index.indexOf(i) ? "background:#f5f5f5": ""
                    },
                    [e("p", {
                        on: {
                            click: function(s) {
                                return t.handClick(i)
                            }
                        }
                    },
                    [t._v("\n                " + t._s(s.id) + "、" + t._s(s.option_content) + "\n              ")]), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 !== t.checked_index.indexOf(i),
                            expression: "checked_index.indexOf(index) !== -1"
                        }],
                        staticClass: "item-judge",
                        on: {
                            click: function(s) {
                                return t.handClick(i)
                            }
                        }
                    },
                    [e("iChecked_t2", {
                        attrs: {
                            color: t.color
                        }
                    })], 1), t._v(" "), s.imgs && 0 != s.imgs.length ? e("div", {
                        staticClass: "item-img"
                    },
                    [e(s.imgs && 0 != s.imgs.length ? "Slide": "", {
                        key: t.answer_page + "-" + i,
                        tag: "component",
                        attrs: {
                            interval: 2e3,
                            type: "dots",
                            color: t.color,
                            dstyle: {
                                width: "90vw",
                                height: "40vw"
                            },
                            data: s.imgs,
                            loop: t.imgBanner(s.imgs),
                            autoPlay: t.imgBanner(s.imgs)
                        }
                    })], 1) : t._e()])
                }), 0) : t._e(), t._v(" "), t.baseInfo.list[t.answer_page] && 3 == t.baseInfo.list[t.answer_page].problems_type ? e("div", {
                    staticClass: "component"
                },
                t._l(t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].option_content: [],
                function(s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "component-item"
                    },
                    [e("textarea", {
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: t.checked_index[i]
                        },
                        on: {
                            input: function(s) {
                                return t.answerInput(i)
                            }
                        }
                    })])
                }), 0) : t._e()])])]), t._v(" "), e("div", {
                    staticClass: "answer-btn"
                },
                [t.answer_page + 1 !== 1 ? e("div", {
                    staticStyle: {
                        padding: "0 7vw",
                        margin: "0 auto"
                    }
                },
                [e("div", {
                    staticClass: "button-left",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.goAhead
                    }
                },
                [t._v("上一题")])]) : t._e(), t._v(" "), t.answer_page + 1 !== t.baseInfo.count ? e("div", {
                    staticStyle: {
                        padding: "0 7vw",
                        margin: "0 auto"
                    }
                },
                [e("div", {
                    staticClass: "button-right",
                    on: {
                        click: t.backUp
                    }
                },
                [t._v("下一题")])]) : t._e(), t._v(" "), t.answer_page + 1 === t.baseInfo.count ? e("div", {
                    staticStyle: {
                        padding: "0 7vw",
                        margin: "0 auto"
                    }
                },
                [e("div", {
                    staticClass: "button-right answer-sumbit",
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=answerdata2"
                    },
                    on: {
                        click: t.submit
                    }
                },
                [t._v("完成答题")])]) : t._e()])]), t._v(" "), e("Modal", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1,
                        expression: "false"
                    }],
                    attrs: {
                        visible: t.modal.visible,
                        loading: t.modal.loading,
                        cover: t.modal.cover
                    }
                },
                ["tips" === t.modal.type ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "height-center"
                },
                [e("div", {
                    staticClass: "tips-content"
                },
                [e("p", [t._v(t._s(t.baseInfo.list[t.answer_page] ? t.baseInfo.list[t.answer_page].hint: ""))])]), t._v(" "), e("div", {
                    staticClass: "tips-botton",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.cancel
                    }
                },
                [t._v("\n          我知道啦\n        ")])])]) : t._e(), t._v(" "), "error" === t.modal.type || "message" === t.modal.type ? e("div", {
                    staticClass: "modal-tips",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "height-center"
                },
                [e("div", {
                    staticClass: "tips-content"
                },
                [e("p", {
                    staticClass: "error-msg"
                },
                [t._v(t._s(t.error_msg))])]), t._v(" "), "message" === t.modal.type ? e("div", {
                    staticClass: "tips-botton",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.cancel
                    }
                },
                [t._v("\n          我知道啦\n        ")]) : t._e()])]) : t._e(), t._v(" "), "complete" === t.modal.type ? e("div", {
                    staticClass: "answer-complete",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [t.posterShow ? e("div", {
                    staticClass: "poster-img"
                },
                [e("img", {
                    attrs: {
                        src: t.posterBase64
                    }
                })]) : t._e(), t._v(" "), e("div", {
                    ref: "poster",
                    staticClass: "answer-score",
                    attrs: {
                        id: "poster"
                    }
                },
                [e("div", {
                    staticClass: "score-bg",
                    style: {
                        "background-color": t.color
                    }
                },
                ["" == t.answerInfo.answer_back_img ? e("img", {
                    staticClass: "default",
                    attrs: {
                        src: "/answer/static/img/template02/bg.png"
                    }
                }) : t._e(), t._v(" "), "" != t.answerInfo.answer_back_img ? e("img", {
                    ref: "backgroundImg",
                    staticClass: "background",
                    attrs: {
                        src: "" == t.backgroundImgBase64 ? t.answerInfo.answer_back_img: t.backgroundImgBase64
                    }
                }) : t._e(), t._v(" "), e("div", {
                    staticClass: "bg-border"
                }), t._v(" "), e("div", {
                    staticClass: "bg-color"
                })]), t._v(" "), e("div", {
                    staticClass: "score-content"
                },
                [e("div", {
                    staticClass: "score-title"
                },
                [t._v("成绩单")]), t._v(" "), e("div", {
                    staticClass: "score-headimage"
                },
                [e("div", [e("img", {
                    ref: "userImg",
                    attrs: {
                        src: t.wximg
                    }
                })]), t._v(" "), e("p", [t._v(t._s(t.userInfo.username))])]), t._v(" "), e("div", {
                    staticClass: "score-point clearfix"
                },
                [e("div", {
                    staticClass: "point"
                },
                [e("span", [t._v(t._s(t.answerResult.zongfen))]), t._v("分\n            ")]), t._v(" "), e("div", {
                    staticClass: "score-info clearfix"
                },
                [e("div", {
                    staticClass: "correct"
                },
                [e("p", [t._v("答对")]), t._v("\n                " + t._s(t.answerResult.right_num) + "\n              ")]), t._v(" "), e("div", {
                    staticClass: "mistake"
                },
                [e("p", [t._v("答错")]), t._v("\n                " + t._s(t.answerResult.error_num) + "\n              ")])])])]), t._v(" "), e("p", {
                    staticClass: "honor",
                    style: {
                        color: t.color
                    }
                },
                [t._v(t._s("" == t.answerResult.chenghao || null == t.answerResult.chenghao ? "": t.answerResult.chenghao))]), t._v(" "), e("p", {
                    staticClass: "honor-info"
                },
                [t._v("\n          您在“" + t._s(t.answerInfo.answertitle) + "”中获得 “" + t._s(t.answerResult.zongfen) + "”分，\n          "), e("br"), t._v("击败“" + t._s(t.answerResult.jibai) + "%”的对手，目前排名“" + t._s(t.answerResult.paiming) + "”！\n        ")]), t._v(" "), e("div", {
                    staticClass: "activity-qr"
                },
                [e("img", {
                    attrs: {
                        src: t.answerInfo.activityqrcode
                    }
                })])]), t._v(" "), t.posterShow ? t._e() : e("div", {
                    staticClass: "create-poster",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.createPoster
                    }
                },
                [t._v("\n        生成战绩海报\n      ")]), t._v(" "), t.posterShow ? e("div", {
                    staticClass: "poster-tip",
                    style: {
                        "background-color": t.color
                    }
                },
                [t._v("\n        长按图片保存海报，告诉你的好友吧\n      ")]) : t._e(), t._v(" "), e("div", {
                    staticClass: "complete-btn"
                },
                [2 != t.answerResult.userstatus && 1 != t.answerResult.userstatus ? e("div", {
                    staticStyle: {
                        padding: "0 7%",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "answer-again",
                    style: {
                        "background-color": t.color
                    },
                    on: {
                        click: t.answerAgain
                    }
                },
                [t._v("再答一次")])]) : t._e(), t._v(" "), "" != t.answerInfo.group_url && null != t.answerInfo.group_url && 1 == t.answerResult.result ? e("div", {
                    staticStyle: {
                        padding: "0 7%",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "awards"
                },
                [e("a", {
                    attrs: {
                        href: t.answerInfo.group_url
                    }
                },
                [t._v(t._s(t.answerResult.custom_button))])])]) : t._e()])]) : t._e()])], 1)
            },
            staticRenderFns: []
        };
        var kt = e("VU/8")(yt, Ct, !1,
        function(t) {
            e("8Xow")
        },
        "data-v-da3acbf6", null).exports,
        It = {
            name: "iSuccess",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        xt = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 16vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 16vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var St = e("VU/8")(It, xt, !1,
        function(t) {
            e("pS5f")
        },
        "data-v-132d7918", null).exports,
        Tt = {
            name: "iFail",
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        $t = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 13.3vw 0)",
                        "-webkit-filter": "drop-shadow(" + this.color + " 13.3vw 0)"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var Rt = {
            name: "end_01",
            components: {
                iSuccess: St,
                iFail: e("VU/8")(Tt, $t, !1,
                function(t) {
                    e("2kqY")
                },
                "data-v-738ad420", null).exports,
                Box: k,
                Modal: b
            },
            data: function() {
                return {
                    color: "#ffdb32",
                    show: !1,
                    share_type: 1,
                    answerResult: {},
                    userInfo: {},
                    answerInfo: {},
                    platformType: "",
                    message: "",
                    modal: {
                        visible: !1,
                        loading: !1,
                        type: ""
                    }
                }
            },
            created: function() {
                this.answerInfo = JSON.parse(sessionStorage.answerInfo),
                this.platformType = sessionStorage.platformType,
                this.userInfo = JSON.parse(sessionStorage.userInfo),
                this.color = sessionStorage.color;
                var t = {
                    answer_id: this.answerInfo.answer_id,
                    id: sessionStorage.answerUSERID
                };
                this.modal = {
                    visible: !0,
                    loading: !0,
                    type: ""
                },
                F(t, this, this.success, this.error, this.error)
            },
            computed: {
                result: function() {
                    return this.answerResult.frontaccuracy >= this.answerResult.accuracy ? 0 : 1
                }
            },
            methods: {
                error: function(t) {
                    this.message = t || "异常错误",
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "error"
                    }
                },
                success: function(t) {
                    this.modal = {
                        visible: !1,
                        loading: !1,
                        type: ""
                    }
                },
                fail: function(t) {
                    this.message = t || "异常错误",
                    this.modal = {
                        visible: !0,
                        loading: !1,
                        type: "tip"
                    }
                },
                share: function(t) {
                    try {
                        this.show = !0,
                        this.share_type = t
                    } catch(t) {
                        console.log("share err:", t.mseeage)
                    }
                },
                answerAgain: function() {
                    "1" == sessionStorage.special ? this.$router.replace({
                        name: "SigninB",
                        query: r()({},
                        this.$route.query)
                    }) : this.$emit("answerStatus", "start", !0)
                }
            }
        },
        jt = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "answer-end",
                    style: {
                        background: "url(" + ("" == t.answerInfo.answer_back_img ? "/answer/static/img/template01/bg.jpg": t.answerInfo.answer_back_img) + ") no-repeat 0 0",
                        "background-size": "100% 100%"
                    }
                },
                [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "end-share",
                    style: {
                        "background-color": t.color
                    }
                },
                [t._v("\n    " + t._s(1 === t.share_type ? "点击右" + ("h24" === t.platformType ? "下": "上") + "角，炫耀一下我的成绩~": "点击右" + ("h24" === t.platformType ? "下": "上") + "角，邀请好友来答题~") + "\n    "), "h24" !== t.platformType ? e("i", {
                    staticClass: "iconfont icon-share"
                }) : t._e()]), t._v(" "), e("div", {
                    staticClass: "answer-result"
                },
                [e("Box", [1 == t.answerResult.result ? e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "result-msg"
                },
                [e("div", {
                    staticClass: "title"
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template01/success_text.png"
                    }
                }), t._v(" "), e("iSuccess", {
                    attrs: {
                        color: t.color
                    }
                })], 1), t._v(" "), e("div", {
                    staticClass: "wx-nickname"
                },
                [t._v("\n            “" + t._s(t.userInfo.username) + "”同学：\n          ")]), t._v(" "), e("div", {
                    staticClass: "message"
                },
                [t._v("\n            恭喜您在“" + t._s(t.answerInfo.answertitle) + "”中，获得了“" + t._s(t.answerResult.zongfen) + "”分，\n            击败了" + t._s(t.answerResult.jibai) + "%的对手" + t._s("" == t.answerResult.chenghao || null == t.answerResult.chenghao ? "。": "，获得“" + t.answerResult.chenghao + "”称号！") + "\n          ")])])]) : t._e(), t._v(" "), 0 == t.answerResult.result ? e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "result-msg"
                },
                [e("div", {
                    staticClass: "title"
                },
                [e("iFail", {
                    attrs: {
                        color: t.color
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/answer/static/img/template01/fail_text.png"
                    }
                })], 1), t._v(" "), e("div", {
                    staticClass: "message"
                },
                [t._v("\n            很遗憾您在“" + t._s(t.answerInfo.answertitle) + "”中，获得了“" + t._s(t.answerResult.zongfen) + "”分，\n            仅击败了" + t._s(t.answerResult.jibai) + "%的对手，" + t._s("" == t.answerResult.chenghao || null == t.answerResult.chenghao ? "": "获得“" + t.answerResult.chenghao + "”称号！") + "再接再厉吧！\n          ")])])]) : t._e()])], 1), t._v(" "), e("div", {
                    staticClass: "end-btn"
                },
                [1 == t.answerResult.result ? e("div", {
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "button-left"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: function(s) {
                            return t.share(1)
                        }
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v(t._s(t.answerResult.shar_word))])])], 1)]) : t._e(), t._v(" "), 0 == t.answerResult.result && 2 != t.answerResult.userstatus && 1 != t.answerResult.userstatus ? e("div", {
                    staticStyle: {
                        padding: "0 3.7v",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "button-left"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.answerAgain
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("再试一次")])])], 1)]) : t._e(), t._v(" "), 0 != t.answerResult.result || 1 != t.answerResult.userstatus && 2 != t.answerResult.userstatus ? t._e() : e("div", {
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "button-left"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: function(s) {
                            return t.share(2)
                        }
                    }
                },
                [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("邀请好友")])])], 1)]), t._v(" "), "" != t.answerInfo.group_url && 1 == t.answerResult.result ? e("div", {
                    staticStyle: {
                        padding: "0 3.7vw",
                        margin: "0 auto",
                        width: "50%"
                    }
                },
                [e("div", {
                    staticClass: "button-right"
                },
                [e("Box", [e("div", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("a", {
                    attrs: {
                        href: t.answerInfo.group_url
                    }
                },
                [t._v(t._s(t.answerResult.custom_button))])])])], 1)]) : t._e()]), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.modal.visible,
                        loading: t.modal.loading
                    }
                },
                ["error" == t.modal.type || "tip" == t.modal.type ? e("div", {
                    staticClass: "answer-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "tips"
                },
                [e("Box", [e("div", {
                    staticClass: "content",
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [e("div", {
                    staticClass: "tips-text"
                },
                [t._v("\n                " + t._s(t.message) + "\n              ")]), t._v(" "), "tip" == t.modal.type ? e("div", {
                    staticClass: "tips-btn"
                },
                [e("Box", {
                    attrs: {
                        color: t.color
                    },
                    on: {
                        handClick: t.cancel
                    }
                },
                [e("p", {
                    attrs: {
                        slot: "box"
                    },
                    slot: "box"
                },
                [t._v("确定")])])], 1) : t._e()])])], 1)]) : t._e()])], 1)
            },
            staticRenderFns: []
        };
        var Pt = e("VU/8")(Rt, jt, !1,
        function(t) {
            e("W+I/")
        },
        "data-v-5cf45dd6", null).exports,
        Et = {
            name: "checked_t2",
            data: function() {
                return {
                    LOGO_IMG: q
                }
            },
            props: {
                color: {
                    type: String,
                default:
                    "#ffdb32"
                }
            }
        },
        Mt = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "icon-img"
                },
                [s("i", {
                    staticClass: "ishadow",
                    style: {
                        filter: "drop-shadow(" + this.color + " 20vw 0) brightness(80%) contrast(1.2)",
                        background: "url(" + this.LOGO_IMG + ") no-repeat 0 0 / 100% auto"
                    }
                }), this._v(" "), s("i", {
                    staticClass: "iborder"
                })])
            },
            staticRenderFns: []
        };
        var Lt = {
            data: function() {
                return {
                    LOGO_IMG: q,
                    startIndexs: {
                        t1: "Start_01",
                        t2: "Start_02"
                    },
                    processIndexs: {
                        t1: "Process_01",
                        t2: "Process_02"
                    },
                    answerInfo: {},
                    userInfo: {},
                    template: "",
                    app_name: "",
                    app_qr_code: "",
                    keyword: "",
                    answer_status: "disable",
                    modal: {
                        visible: !1,
                        type: "qr",
                        loading: !1
                    },
                    iModal: {
                        visible: !1,
                        imgData: [],
                        index: 0
                    },
                    errorMessage: "",
                    wHeight: "100vh",
                    color: "#ffdb32"
                }
            },
            components: {
                Modal: b,
                Scroll: $,
                ImgModal: B,
                Start_01: H,
                Start_02: X,
                Process_01: vt,
                Process_02: kt,
                End_01: Pt,
                Logo: e("VU/8")(Et, Mt, !1,
                function(t) {
                    e("9xFR")
                },
                "data-v-10d1b20a", null).exports
            },
            watch: {
                $route: function(t, s) {
                    this.init()
                }
            },
            created: function() {
                this.init()
            },
            methods: {
                init: function() {
                    var t = this;
                    this.wHeight = document.documentElement.clientHeight + "px",
                    this.platformType = sessionStorage.platformType,
                    eventBus.$on("previewImage",
                    function(s, e) {
                        t.iModal = {
                            visible: !0,
                            imgData: s,
                            index: e
                        }
                    }),
                    this.answer_status = "disable";
                    var s = this.$route.query,
                    e = this;
                    try { / pc | phone | wx / .test(this.platformType) ? this.initAjax(s) : CP.get_account_id(function(t) {
                            sessionStorage.account_id = t.account_id,
                            CP.get_unique_id(function(t) {
                                sessionStorage.session_id = t.unique_id || -1,
                                CP.is_login(function(t) {
                                    sessionStorage.isAppLogin = "1" == t.is_login ? "1": "0",
                                    "1" == t.is_login ? (s.account_id = sessionStorage.account_id, s.sessionid = sessionStorage.session_id, e.initAjax(s)) : e.showLogin(s)
                                })
                            })
                        })
                    } catch(t) {
                        console.log("init:", t.message),
                        this.error(t)
                    }
                },
                showLogin: function(t) {
                    var s = this;
                    CP.show_login(function(e) {
                        t.account_id = sessionStorage.account_id = e.account_id || -1,
                        t.sessionid = sessionStorage.session_id = e.unique_id || -1,
                        sessionStorage.isAppLogin = "1" == e.is_login ? "1": "0",
                        setTimeout(function() {
                            "1" == e.is_login ? s.initAjax(t) : s.showLogin(t)
                        },
                        1e3)
                    })
                },
                error: function(t) {
                    this.errorMessage = t.message || "异常错误",
                    this.modal = {
                        visible: !0,
                        type: "message",
                        loading: !1
                    }
                },
                initAjax: function(t) {
                    var s = this;
                    this.modal = {
                        visible: !0,
                        type: "disable",
                        loading: !0
                    };
                    var e = D + "/api.php?m=front&subm=answer&action=init";
                    sessionStorage.act_id = this.$URL(),
                    t.need_register = this.$route.params.need_register || 2,
                    this.$ajax.get(e, {
                        params: t
                    }).then(function(t) {
                        var e = t.data,
                        i = e.data;
                        switch (e.code) {
                        case 3001:
                            return s.initData(i),
                            void(s.modal = {
                                visible: !1,
                                type: "tip",
                                lodaing: !1
                            });
                        case 5107:
                        case 5020:
                            return s.answer_status = "disable",
                            s.answerTemplate(i.template_id),
                            void(s.modal = {
                                visible: !0,
                                type: "tip",
                                lodaing: !1
                            });
                        case 5011:
                            return s.app_name = i.app_name,
                            s.app_qr_code = i.app_qr_code,
                            "" == i.keyword || "string" != typeof i.keyword ? s.keyword = [] : s.keyword = i.keyword.split(","),
                            s.answer_status = "disable",
                            void(s.modal = {
                                visible: !0,
                                type: "qr",
                                lodaing: !1
                            });
                        case 5110:
                            sessionStorage.register_field = i.register_field ? f()(i.register_field) : "[]",
                            sessionStorage.app_name = i.app_name ? f()(i.app_name) : "",
                            s.modal = {
                                visible: !1,
                                type: "qr",
                                lodaing: !1
                            };
                            var a = "Signin";
                            window._p_register && (a = "SigninB");
                            var n = r()({},
                            s.$route.query);
                            return delete n.need_register,
                            void s.$router.replace({
                                name: a,
                                query: n
                            });
                        case 5008:
                            return void window.location.replace(i.url)
                        }
                        e.status || s.error({
                            message: e.msg
                        })
                    }).
                    catch(function(t) {
                        s.error(t)
                    })
                },
                shareInfo: function(t) {
                    CP && "function" == typeof CP.set_share && (CP.set_share(function(t) {},
                    !0, {
                        title: t.share.sharetitle,
                        shareSummary: t.share.share_word,
                        link: t.share.share_url || window.location.href,
                        imgUrl: t.share.cover_pic,
                        shareTo: "AppMessage",
                        shareUrlScheme: "",
                        id: 0,
                        type: "答题活动",
                        datatype: "link",
                        dataUrl: t.share.share_url || window.location.href
                    }), CP.set_share(function(t) {},
                    !0, {
                        title: t.share.sharetitle,
                        shareSummary: t.share.share_word,
                        link: t.share.share_url || window.location.href,
                        imgUrl: t.share.cover_pic,
                        shareTo: "Timeline",
                        shareUrlScheme: "",
                        id: 0,
                        type: "答题活动",
                        datatype: "link",
                        dataUrl: t.share.share_url || window.location.href
                    }))
                },
                is_login: function(t) {
                    var s = this;
                    2 === t && "1" !== sessionStorage.isAppLogin ? "undefined" != typeof CP && "function" == typeof CP.show_login && CP.show_login(function(t) {
                        var e = s.$route.query;
                        e.account_id = sessionStorage.account_id = t.account_id || -1,
                        e.sessionid = sessionStorage.session_id = t.unique_id || -1,
                        sessionStorage.isAppLogin = "1" == t.is_login ? "1": "0",
                        setTimeout(function() {
                            s.initAjax(e)
                        },
                        1e3)
                    }) : 2 === t && "1" == sessionStorage.isAppLogin && this.error({
                        message: "未能获取账号信息"
                    })
                },
                initData: function(t) {
                    var s;
                    this.answerInfo = (s = {
                        open_rank: t.open_rank,
                        socre_num: t.socre_num,
                        advice: t.advice,
                        status: t.status,
                        userstatus: t.userstatus,
                        answer_id: t.answer_id,
                        answertitle: t.answertitle,
                        answer_time: t.answer_time,
                        cover_pic: t.cover_pic,
                        is_logo: t.is_logo || "1",
                        is_gps: t.is_gps,
                        is_register: t.is_register,
                        is_subscribe: t.is_subscribe,
                        prefixImgUrl: t.prefixImgUrl,
                        answer_cover_img: t.answer_cover_img,
                        answer_back_img: t.answer_back_img,
                        answer_des_url: t.answer_des_url,
                        start_time: t.start_time,
                        end_time: t.end_time,
                        app_name: t.app_name
                    },
                    v()(s, "answer_des_url", t.answer_des_url), v()(s, "activityqrcode", t.activityqrcode), v()(s, "group_url", t.group_url), v()(s, "if_limit", t.if_limit), v()(s, "if_limit_day", t.if_limit_day), v()(s, "limit_num", t.limit_num), v()(s, "problems_num", t.problems_num), v()(s, "problems_score", t.problems_score), v()(s, "key_word", t.key_word), v()(s, "appdata", t.appdata), s),
                    this.userInfo = {
                        user_id: t.user_id,
                        userimg: t.userimg,
                        username: t.username
                    },
                    sessionStorage.key_word = t.key_word,
                    this.color = sessionStorage.color = "" == t.color || null == t.color ? "#ffdb32": t.color,
                    sessionStorage.answerInfo = f()(this.answerInfo),
                    this.$store.commit("setAnswerInfo", this.answerInfo),
                    sessionStorage.userInfo = f()(this.userInfo),
                    sessionStorage.share = f()(t.share),
                    this.shareInfo(t),
                    document.getElementsByTagName("title")[0].innerText = t.share.wxtitle || "答题",
                    this.answerTemplate(t.template_id),
                    this.is_login(this.answerInfo.appdata ? this.answerInfo.appdata.login: null),
                    this.answer_status = "start"
                },
                answerTemplate: function(t) {
                    switch (t) {
                    case "1":
                        this.template = "t1";
                        break;
                    case "2":
                        this.template = "t2";
                        break;
                    default:
                        this.template = "t1"
                    }
                },
                answerStatus: function(t, s) {
                    if (s) {
                        var e = this.$route.query;
                        e.account_id = sessionStorage.account_id,
                        e.sessionid = sessionStorage.session_id,
                        this.initAjax(e)
                    } else this.answer_status = t
                },
                closePage: function() {
                    CP.close_page()
                },
                visibilitychange: function() {
                    "hidden" == document.mozVisibilityState || "hidden" == document.visibilityState || "hidden" == document.webkitVisibilityState ? (sessionStorage.hTime = Date.now(), 1 == sessionStorage.cdStatus && (sessionStorage.isCdHidden = 1), 1 == sessionStorage.answerStart && (sessionStorage.isHidden = 1)) : "visible" != document.mozVisibilityState && "visible" != document.visibilityState && "visible" != document.webkitVisibilityState || (sessionStorage.vTime = Date.now())
                },
                iCancel: function() {
                    this.iModal = {
                        visible: !1,
                        imgData: [],
                        index: 0
                    }
                }
            },
            mounted: function() {
                sessionStorage.cdStatus = 0,
                sessionStorage.answerStart = 0,
                sessionStorage.isCdHidden = 0,
                sessionStorage.isHidden = 0,
                document.addEventListener("webkitvisibilitychange", this.visibilitychange.bind(this)),
                document.addEventListener("visibilitychange", this.visibilitychange.bind(this)),
                document.addEventListener("mozvisibilitychange", this.visibilitychange.bind(this))
            }
        },
        Bt = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    style: {
                        height: t.wHeight
                    },
                    attrs: {
                        id: "zjrb-ypt-answer"
                    }
                },
                ["start" == t.answer_status ? e("div", {
                    staticClass: "answer-start-temp",
                    staticStyle: {
                        height: "100%"
                    }
                },
                [e(t.startIndexs[t.template], {
                    tag: "component",
                    on: {
                        answerStatus: t.answerStatus
                    }
                })], 1) : "process" == t.answer_status ? e("div", {
                    staticClass: "answer-process-temp",
                    staticStyle: {
                        height: "100%"
                    }
                },
                [e(t.processIndexs[t.template], {
                    tag: "component",
                    on: {
                        answerStatus: t.answerStatus
                    }
                })], 1) : "end" == t.answer_status ? e("div", {
                    staticClass: "answer-end-temp",
                    staticStyle: {
                        height: "100%"
                    }
                },
                ["t1" === t.template ? e("End_01", {
                    on: {
                        answerStatus: t.answerStatus
                    }
                }) : t._e()], 1) : t._e(), t._v(" "), "disable" !== t.answer_status ? e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "1" == t.answerInfo.is_logo,
                        expression: "answerInfo.is_logo == '1'"
                    }],
                    attrs: {
                        id: "logo"
                    }
                },
                ["t2" === t.template ? e("div", {
                    staticClass: "logo-icon"
                },
                [e("Logo", {
                    attrs: {
                        color: t.color
                    }
                })], 1) : e("div", {
                    staticClass: "logo-img",
                    style: "background: url(" + t.LOGO_IMG + ") no-repeat 0 0 / 100% auto;"
                })]) : t._e(), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.modal.visible,
                        loading: t.modal.loading
                    }
                },
                ["qr" == t.modal.type ? e("div", {
                    staticClass: "zjrb-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("div", {
                    staticClass: "modal-qr"
                },
                [e("img", {
                    attrs: {
                        src: t.app_qr_code
                    }
                })]), t._v(" "), e("p", {
                    staticClass: "qr-tip-1"
                },
                [t._v("1、长按二维码，点击“识别二维码”按钮，关注我们")]), t._v(" "), e("p", {
                    staticClass: "qr-tip-2"
                },
                [t._v("\n        2、回复关键字\n        "), t._l(t.keyword,
                function(s, i) {
                    return e("span", {
                        key: i
                    },
                    [t._v("“"), e("span", {
                        staticStyle: {
                            color: "red"
                        }
                    },
                    [t._v(t._s(s))]), t._v("”"), i + 1 < t.keyword.length ? e("span", [t._v("，")]) : t._e()])
                }), t._v("\n        参与当前活动\n      ")], 2), e("p"), e("p", {
                    staticClass: "qr-tip-3"
                },
                [t._v("（若您已关注仍弹出此页面，则必须要到当前公众号下回复上述关键字获取活动链接）")])]) : t._e(), t._v(" "), "tip" == t.modal.type ? e("div", {
                    staticClass: "zjrb-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                ["t1" === t.template ? e("div", {
                    staticClass: "activity-over t1"
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template01/init_tip.png"
                    }
                }), t._v(" "), e("p", [t._v("该活动已被发布者下架或删除")]), t._v(" "), e("div", {
                    staticClass: "close-page",
                    on: {
                        click: t.closePage
                    }
                },
                [t._v("确定")])]) : t._e(), t._v(" "), "t2" === t.template ? e("div", {
                    staticClass: "activity-over t2"
                },
                [e("div", {
                    staticClass: "background"
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template02/bg.png"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "content"
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template02/404.png"
                    }
                }), t._v(" "), e("p", [t._v("啊哦，该活动已被发布者下架或删除")]), t._v(" "), e("div", {
                    staticClass: "close-page",
                    on: {
                        click: t.closePage
                    }
                },
                [t._v("确定")])])]) : t._e()]) : t._e(), t._v(" "), "message" == t.modal.type ? e("div", {
                    staticClass: "zjrb-modal",
                    attrs: {
                        slot: "modal"
                    },
                    slot: "modal"
                },
                [e("p", {
                    staticClass: "errorMessage"
                },
                [t._v(t._s(t.errorMessage))])]) : t._e()]), t._v(" "), e("ImgModal", {
                    attrs: {
                        visible: t.iModal.visible,
                        imgData: t.iModal.imgData,
                        index: t.iModal.index
                    },
                    on: {
                        cancel: t.iCancel
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var Nt = e("VU/8")(Lt, Bt, !1,
        function(t) {
            e("8y6h")
        },
        null, null).exports,
        Vt = {
            data: function() {
                return {
                    app_name: "我们",
                    gender: 1,
                    form: [],
                    itemType: [/^(text)$|^(password)$/, /^(radio)$/, /^(textarea)$/],
                    is_submit: !1,
                    visible: !1,
                    ajaxErr: {
                        err: !1,
                        msg: ""
                    }
                }
            },
            props: {},
            components: {
                Modal: b
            },
            created: function() {
                this.init()
            },
            methods: {
                init: function() {
                    var t = this;
                    document.getElementsByTagName("title")[0].innerText = "答题注册页";
                    var s = sessionStorage.register_field ? JSON.parse(sessionStorage.register_field) : [];
                    this.app_name = sessionStorage.app_name ? "【" + sessionStorage.app_name + "】": "我们";
                    var e = [];
                    s.forEach(function(s, i) {
                        t.itemType[1].test(s.type) && (t.gender = s.value),
                        e.push(r()({},
                        s, {
                            err: !1
                        }))
                    }),
                    this.form = e
                },
                formValue: function(t, s, e) {
                    var i = this.form,
                    a = e || window.event,
                    n = "";
                    this.itemType[1].test(i[t].type) ? (this.gender = s, n = s) : n = a.target.value,
                    i[t].value = n,
                    this.form = i
                },
                formVerify: function() {
                    var t = !1,
                    s = {},
                    e = [];
                    return this.form.forEach(function(i, a) {
                        var n = new RegExp(i.regex);
                        s[i.name] = i.value,
                        n.test(i.value) ? i.err = !1 : (i.err = !0, t = !0),
                        e.push(i)
                    }),
                    this.form = e,
                    {
                        err: t,
                        data: s
                    }
                },
                signinSubmit: function() {
                    var t = this;
                    if (!this.is_submit) {
                        this.visible = !0,
                        this.is_submit = !0;
                        var s = this.formVerify(),
                        e = s.err,
                        i = s.data;
                        if (e) return this.is_submit = !1,
                        this.visible = !1,
                        void(this.ajaxErr = {
                            err: !0,
                            msg: "请填写正确信息"
                        });
                        var a = new FormData;
                        for (var n in i) a.append(n, i[n]);
                        var o = r()({},
                        this.$route.query),
                        l = (sessionStorage.act_id, D + "/api.php"),
                        c = r()({
                            m: "front",
                            subm: "answer",
                            action: "register"
                        },
                        o),
                        d = "wx" === sessionStorage.platformType ? r()({},
                        c) : r()({},
                        c, {
                            account_id: sessionStorage.account_id,
                            sessionid: sessionStorage.session_id
                        });
                        this.$ajax({
                            url: l,
                            method: "post",
                            data: a,
                            params: d
                        }).then(function(s) {
                            var e = s.data;
                            5008 !== e.code ? (e.status ? t.$router.replace({
                                name: "Index",
                                query: r()({},
                                t.$route.query)
                            }) : t.ajaxErr = {
                                err: !0,
                                msg: e.msg
                            },
                            t.visible = !1, t.is_submit = !1) : window.location.replace(e.url)
                        }).
                        catch(function(s) {
                            t.ajaxErr = {
                                err: !0,
                                msg: s.message || "异常错误"
                            },
                            t.visible = !1,
                            t.is_submit = !1
                        })
                    }
                }
            },
            mounted: function() {}
        },
        At = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "wrapper",
                    attrs: {
                        id: "zjrb-live-signin"
                    }
                },
                [e("div", {
                    staticClass: "content"
                },
                [e("div", {
                    staticClass: "live-signin-title"
                },
                [t._v("\n      请完善下列信息\n    ")]), t._v(" "), e("div", {
                    staticClass: "live-signin-message"
                },
                [t._v("\n      “为保障您在活动中的权益，请您务必填写真实的个人信息，" + t._s(t.app_name) + "将对您的信息进行严格保密，请您放心填写！”\n    ")]), t._v(" "), e("div", {
                    staticClass: "live-signin-form"
                },
                t._l(t.form,
                function(s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "form-item"
                    },
                    [t.itemType[0].test(s.type) ? e("input", {
                        staticClass: "signin-form-input",
                        attrs: {
                            type: "text",
                            placeholder: "请输入您的" + s.field
                        },
                        domProps: {
                            value: s.value
                        },
                        on: {
                            input: function(s) {
                                return t.formValue(i)
                            }
                        }
                    }) : t._e(), t._v(" "), t.itemType[2].test(s.type) ? e("textarea", {
                        staticClass: "signin-form-textarea",
                        attrs: {
                            placeholder: "请输入您的" + s.field
                        },
                        domProps: {
                            value: s.value
                        },
                        on: {
                            input: function(s) {
                                return t.formValue(i)
                            }
                        }
                    }) : t._e(), t._v(" "), t.itemType[1].test(s.type) ? e("div", {
                        staticClass: "form-radio"
                    },
                    [e("span", {
                        ref: "man",
                        refInFor: !0,
                        class: {
                            "signin-form-radio": !0,
                            checked: 1 == t.gender
                        },
                        on: {
                            touchstart: function(s) {
                                return t.formValue(i, 1)
                            }
                        }
                    }), e("label", {
                        on: {
                            touchstart: function(s) {
                                return t.formValue(i, 1)
                            }
                        }
                    },
                    [t._v("男")]), t._v(" "), e("span", {
                        ref: "women",
                        refInFor: !0,
                        class: {
                            "signin-form-radio": !0,
                            checked: 2 == t.gender
                        },
                        on: {
                            touchstart: function(s) {
                                return t.formValue(i, 2)
                            }
                        }
                    }), e("label", {
                        on: {
                            touchstart: function(s) {
                                return t.formValue(i, 2)
                            }
                        }
                    },
                    [t._v("女")])]) : t._e(), t._v(" "), e("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: s.err,
                            expression: "item.err"
                        }],
                        staticClass: "error-message"
                    },
                    [t._v(t._s(s.msg))])])
                }), 0), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.ajaxErr.err,
                        expression: "ajaxErr.err"
                    }],
                    staticClass: "error-message-submit"
                },
                [t._v(t._s(t.ajaxErr.msg))]), t._v(" "), e("div", {
                    staticClass: "live-signin-submit",
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=register"
                    },
                    on: {
                        click: t.signinSubmit
                    }
                },
                [t._v("\n      提交\n    ")])]), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.visible,
                        loading: t.is_submit
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var Dt = e("VU/8")(Vt, At, !1,
        function(t) {
            e("UVMt")
        },
        "data-v-e6ec7292", null).exports,
        qt = {
            name: "Transfer",
            components: {
                Modal: b
            },
            data: function() {
                return {}
            },
            beforeRouteEnter: function(t, s, e) {
                "Index" === s.name && CP.close_page(),
                e()
            },
            created: function() {
                this.$router.push({
                    name: "Index",
                    query: r()({},
                    this.$route.query)
                })
            }
        },
        Ft = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "transfer"
                },
                [s("Modal", {
                    attrs: {
                        visible: !0,
                        loading: !0
                    }
                })], 1)
            },
            staticRenderFns: []
        },
        Ut = e("VU/8")(qt, Ft, !1, null, null, null).exports,
        Ot = {
            data: function() {
                return {
                    app_name: "我们",
                    slv1: [],
                    slv2: [],
                    slv3: [],
                    streetVal: {
                        s1: "n",
                        s2: "n",
                        s3: "n"
                    },
                    name: "",
                    telephone: "",
                    address: "",
                    company: "",
                    err: {
                        name: {
                            is: !1,
                            msg: "请输入姓名"
                        },
                        address: {
                            is: !1,
                            msg: "请选择完整地址"
                        },
                        telephone: {
                            is: !1,
                            msg: "请输入有效手机号码"
                        },
                        company: {
                            is: !1,
                            msg: "请输入单位名称"
                        }
                    },
                    is_submit: !1,
                    visible: !1,
                    ajaxErr: {
                        err: !1,
                        msg: ""
                    }
                }
            },
            props: {},
            components: {
                Modal: b
            },
            created: function() {
                this.getStreetJsonAjax(),
                this.init()
            },
            methods: {
                init: function() {
                    document.getElementsByTagName("title")[0].innerText = "答题注册页",
                    this.app_name = sessionStorage.app_name ? "【" + sessionStorage.app_name + "】": "我们"
                },
                getStreetJsonAjax: function() {
                    var t = this;
                    this.$ajax({
                        url: "/activity/public/static/answer/oh_street.json"
                    }).then(function(s) {
                        t.slv1 = s.data || []
                    })
                },
                streenChange: function(t) {
                    switch (t) {
                    case 1:
                        this.slv2 = this.slv1[this.streetVal.s1] ? this.slv1[this.streetVal.s1].children: [],
                        this.slv3 = this.slv2[0] ? this.slv2[0].children: [],
                        this.streetVal.s2 = "n",
                        this.streetVal.s3 = "n";
                        break;
                    case 2:
                        this.slv3 = this.slv2[this.streetVal.s2] ? this.slv2[this.streetVal.s2].children: [],
                        this.streetVal.s3 = "n"
                    }
                    var s = this.slv1[this.streetVal.s1] ? this.slv1[this.streetVal.s1].id: "",
                    e = this.slv2[this.streetVal.s2] ? this.slv2[this.streetVal.s2].id: "",
                    i = this.slv3[this.streetVal.s3] ? this.slv3[this.streetVal.s3].id: "";
                    this.address = s && e && i ? s + "-" + e + "-" + i: ""
                },
                formVerify: function() {
                    var t = !1;
                    return "" === this.name ? (this.err.name.is = !0, t = !0) : this.err.name.is = !1,
                    /^1[3-9]\d{9}$/.test(this.telephone) ? this.err.telephone.is = !1 : (this.err.telephone.is = !0, t = !0),
                    "" === this.address ? (this.err.address.is = !0, t = !0) : this.err.address.is = !1,
                    "" === this.company ? (this.err.company.is = !0, t = !0) : this.err.company.is = !1,
                    t
                },
                signinSubmit: function() {
                    var t = this;
                    if (!this.formVerify() && !this.is_submit) {
                        this.visible = !0,
                        this.is_submit = !0;
                        var s = new FormData;
                        s.append("name", this.name),
                        s.append("telephone", this.telephone),
                        s.append("address", this.address),
                        s.append("company", this.company);
                        var e = r()({},
                        this.$route.query),
                        i = (sessionStorage.act_id, D + "/api.php"),
                        a = r()({
                            m: "front",
                            subm: "answer",
                            action: "register"
                        },
                        e),
                        n = "wx" === sessionStorage.platformType ? r()({},
                        a) : r()({},
                        a, {
                            account_id: sessionStorage.account_id,
                            sessionid: sessionStorage.session_id
                        });
                        this.$ajax({
                            url: i,
                            method: "post",
                            data: s,
                            params: n
                        }).then(function(s) {
                            var e = s.data;
                            5008 !== e.code ? (e.status ? t.$router.replace({
                                name: "Index",
                                query: r()({},
                                t.$route.query),
                                params: {
                                    need_register: 1
                                }
                            }) : t.ajaxErr = {
                                err: !0,
                                msg: e.msg
                            },
                            t.visible = !1, t.is_submit = !1) : window.location.replace(e.url)
                        }).
                        catch(function(s) {
                            t.ajaxErr = {
                                err: !0,
                                msg: s.message || "异常错误"
                            },
                            t.visible = !1,
                            t.is_submit = !1
                        })
                    }
                }
            }
        },
        zt = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "wrapper",
                    attrs: {
                        id: "zjrb-live-signin"
                    }
                },
                [e("div", {
                    staticClass: "content"
                },
                [e("div", {
                    staticClass: "live-signin-title"
                },
                [t._v("\n      请完善下列信息\n    ")]), t._v(" "), e("div", {
                    staticClass: "live-signin-message"
                },
                [t._v("\n      “为保障您在活动中的权益，请您务必填写真实的\n      个人信息，" + t._s(t.app_name) + "将对您的信息进行严格\n      保密，请您放心填写！”\n    ")]), t._v(" "), e("div", {
                    staticClass: "live-signin-form"
                },
                [e("div", {
                    staticClass: "form-item"
                },
                [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.name,
                        expression: "name"
                    }],
                    staticClass: "signin-form-input",
                    attrs: {
                        maxlength: "20",
                        type: "text",
                        placeholder: "请填写姓名"
                    },
                    domProps: {
                        value: t.name
                    },
                    on: {
                        input: function(s) {
                            s.target.composing || (t.name = s.target.value)
                        }
                    }
                })]), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.err.name.is,
                        expression: "err.name.is"
                    }],
                    staticClass: "error-message"
                },
                [t._v(t._s(t.err.name.msg))]), t._v(" "), e("div", {
                    staticClass: "form-item"
                },
                [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.telephone,
                        expression: "telephone"
                    }],
                    staticClass: "signin-form-input",
                    attrs: {
                        maxlength: "11",
                        type: "text",
                        placeholder: "请填写手机号码"
                    },
                    domProps: {
                        value: t.telephone
                    },
                    on: {
                        input: function(s) {
                            s.target.composing || (t.telephone = s.target.value)
                        }
                    }
                })]), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.err.telephone.is,
                        expression: "err.telephone.is"
                    }],
                    staticClass: "error-message"
                },
                [t._v(t._s(t.err.telephone.msg))]), t._v(" "), e("div", {
                    staticClass: "form-item"
                },
                [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.company,
                        expression: "company"
                    }],
                    staticClass: "signin-form-input",
                    attrs: {
                        maxlength: "11",
                        type: "text",
                        placeholder: "请填写单位名称"
                    },
                    domProps: {
                        value: t.company
                    },
                    on: {
                        input: function(s) {
                            s.target.composing || (t.company = s.target.value)
                        }
                    }
                })]), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.err.company.is,
                        expression: "err.company.is"
                    }],
                    staticClass: "error-message"
                },
                [t._v(t._s(t.err.company.msg))]), t._v(" "), e("div", {
                    staticClass: "form-item",
                    on: {
                        change: function(s) {
                            return t.streenChange(1)
                        }
                    }
                },
                [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.streetVal.s1,
                        expression: "streetVal.s1"
                    }],
                    staticClass: "address",
                    attrs: {
                        name: "",
                        id: ""
                    },
                    on: {
                        change: function(s) {
                            var e = Array.prototype.filter.call(s.target.options,
                            function(t) {
                                return t.selected
                            }).map(function(t) {
                                return "_value" in t ? t._value: t.value
                            });
                            t.$set(t.streetVal, "s1", s.target.multiple ? e: e[0])
                        }
                    }
                },
                [e("option", {
                    attrs: {
                        value: "n",
                        disabled: ""
                    }
                },
                [t._v("所属市")]), t._v(" "), t._l(t.slv1,
                function(s, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    },
                    [t._v(t._s(s.name))])
                })], 2)]), t._v(" "), e("div", {
                    staticClass: "form-item"
                },
                [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.streetVal.s2,
                        expression: "streetVal.s2"
                    }],
                    staticClass: "address",
                    attrs: {
                        name: "",
                        id: ""
                    },
                    on: {
                        change: [function(s) {
                            var e = Array.prototype.filter.call(s.target.options,
                            function(t) {
                                return t.selected
                            }).map(function(t) {
                                return "_value" in t ? t._value: t.value
                            });
                            t.$set(t.streetVal, "s2", s.target.multiple ? e: e[0])
                        },
                        function(s) {
                            return t.streenChange(2)
                        }]
                    }
                },
                [e("option", {
                    attrs: {
                        value: "n",
                        disabled: ""
                    }
                },
                [t._v("所属县/区")]), t._v(" "), t._l(t.slv2,
                function(s, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    },
                    [t._v(t._s(s.name))])
                })], 2)]), t._v(" "), e("div", {
                    staticClass: "form-item"
                },
                [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.streetVal.s3,
                        expression: "streetVal.s3"
                    }],
                    staticClass: "address",
                    attrs: {
                        name: "",
                        id: ""
                    },
                    on: {
                        change: [function(s) {
                            var e = Array.prototype.filter.call(s.target.options,
                            function(t) {
                                return t.selected
                            }).map(function(t) {
                                return "_value" in t ? t._value: t.value
                            });
                            t.$set(t.streetVal, "s3", s.target.multiple ? e: e[0])
                        },
                        function(s) {
                            return t.streenChange(3)
                        }]
                    }
                },
                [e("option", {
                    attrs: {
                        value: "n",
                        disabled: ""
                    }
                },
                [t._v("所属街道")]), t._v(" "), t._l(t.slv3,
                function(s, i) {
                    return e("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    },
                    [t._v(t._s(s.name))])
                })], 2)]), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.err.address.is,
                        expression: "err.address.is"
                    }],
                    staticClass: "error-message"
                },
                [t._v(t._s(t.err.address.msg))])]), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.ajaxErr.err,
                        expression: "ajaxErr.err"
                    }],
                    staticClass: "error-message-submit"
                },
                [t._v(t._s(t.ajaxErr.msg))]), t._v(" "), e("div", {
                    staticClass: "live-signin-submit",
                    attrs: {
                        "data-url": "?m=front&subm=answer&action=register"
                    },
                    on: {
                        click: t.signinSubmit
                    }
                },
                [t._v("\n      提交\n    ")])]), t._v(" "), e("Modal", {
                    attrs: {
                        visible: t.visible,
                        loading: t.is_submit
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var Gt = e("VU/8")(Ot, zt, !1,
        function(t) {
            e("8TH0")
        },
        "data-v-fdf9b284", null).exports,
        Ht = {
            name: "RankP",
            components: {
                Scroll: $
            },
            data: function() {
                return {
                    answerId: this.$route.query.answer_id,
                    tab: 0,
                    userRank: "",
                    rankListData: [],
                    rankListNoMore: !1,
                    pullupStop: !1,
                    changeList: 0,
                    noBody: !1,
                    page: 1,
                    localRankLists: [],
                    color: "#123456"
                }
            },
            created: function() {
                this.userInfo = JSON.parse(sessionStorage.userInfo),
                this.color = sessionStorage.color,
                this.rankListInfoAjax()
            },
            methods: {
                tabCut: function(t) {
                    this.tab = t,
                    2 === t && this.localRankAjax()
                },
                scrollToEnd: function() {
                    this.pullupStop || this.rankListNoMore || (this.pullupStop = !0, this.page += 1, this.rankListInfoAjax(this.page))
                },
                rankListInfoAjax: function(t) {
                    var s = this,
                    e = D + "/api.php?m=front&subm=answer&action=rankinglist&page=" + (t || 1) + "&answer_id=" + this.answerId;
                    this.$ajax(e).then(function(t) {
                        var e = t.data;
                        e.status && (1 * e.data.page == 1 ? (s.rankListData = e.data.list, s.pullupStop = !1, 1 * e.data.count == 0 && (s.noBody = !0), 1 * e.data.count <= 1 * e.data.limit && (s.rankListNoMore = !0)) : 1 * e.data.page > 1 && (s.rankListData = s.rankListData.concat(e.data.list), s.pullupStop = !1, e.data.list && e.data.list.length < 1 * e.data.limit && (s.rankListNoMore = !0)), s.userRank = e.data.user && !/\[\]|\{\}/.test(f()(e.data.user)) ? e.data.user: "", s.tab = 1)
                    }).
                    catch(function() {
                        s.pullupStop = !1
                    })
                },
                localRankAjax: function() {
                    var t = this,
                    s = D + "/api.php?m=front&subm=answer&action=lawrank";
                    this.$ajax({
                        url: s
                    }).then(function(s) {
                        var e = s.data;
                        3001 === e.code && (t.localRankLists = e.data)
                    })
                },
                backPage: function() {
                    this.$router.go( - 1)
                },
                answerTime: function(t) {
                    var s = O(t);
                    return (null === s.h ? "00": s.h) + "时" + (null === s.m ? "00": s.m) + "分" + s.s + "秒"
                },
                timeFormat: function(t) {
                    var s = O(t);
                    return (null === s.h ? "00": s.h) + ":" + (null === s.m ? "00": s.m) + ":" + s.s + "s"
                }
            }
        },
        Wt = {
            render: function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("div", {
                    staticClass: "ranking-list clearfix",
                    style: {
                        "background-color": t.color
                    }
                },
                [t._m(0), t._v(" "), t.noBody ? e("div", {
                    staticClass: "no-body",
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        position: "relative"
                    }
                },
                [e("img", {
                    attrs: {
                        src: "/answer/static/img/template02/no_body.png",
                        alt: ""
                    }
                }), t._v(" "), e("p", [t._v("还没有人答过题哦～")]), t._v(" "), e("div", {
                    staticClass: "rank-btn",
                    on: {
                        click: t.backPage
                    }
                },
                [t._v("返回首页")])]) : t._e(), t._v(" "), t.noBody ? t._e() : e("div", {
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden"
                    }
                },
                [e("ul", {
                    staticClass: "rank-tab"
                },
                [e("li", {
                    staticClass: "tab-item",
                    class: {
                        active: 1 === t.tab
                    },
                    on: {
                        click: function(s) {
                            return t.tabCut(1)
                        }
                    }
                },
                [t._v("个人排行日榜")]), t._v(" "), e("li", {
                    staticClass: "tab-item",
                    class: {
                        active: 2 === t.tab
                    },
                    on: {
                        click: function(s) {
                            return t.tabCut(2)
                        }
                    }
                },
                [t._v("区域统计")])]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.tab,
                        expression: "tab === 1"
                    }]
                },
                [e("p", {
                    staticClass: "rank-tip"
                },
                [t._v("须知：同等分数下按答题时间排名，时间相同时按答题先后顺序")]), t._v(" "), t._m(1), t._v(" "), e("div", {
                    staticClass: "rank-content",
                    staticStyle: {
                        top: "23vw"
                    }
                },
                [e("div", {
                    staticClass: "content-title"
                },
                [e("ul", [t._m(2), t._v(" "), t.userRank ? e("li", {
                    staticClass: "item-lists",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [e("div", {
                    staticClass: "rank"
                },
                [t._v(t._s(t.userRank.rowNo))]), t._v(" "), e("div", {
                    staticClass: "headimage"
                },
                [e("div", {
                    staticClass: "wx-headimage"
                },
                [e("img", {
                    attrs: {
                        src: t.userRank.userimg
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "nickname"
                },
                [t._v(t._s(t.userRank.username) + "（我自己）")]), t._v(" "), e("div", {
                    staticClass: "point"
                },
                [t._v(t._s(t.userRank.score))]), t._v(" "), e("div", {
                    staticClass: "time"
                },
                [t._v(t._s(t.timeFormat(t.userRank.user_time)))])]) : e("li", {
                    staticClass: "item-lists no-score",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [t._v("\n              当天未答题，暂无自己的排行信息，快前往参与吧～\n            ")])])]), t._v(" "), e("div", {
                    staticClass: "content-list",
                    staticStyle: {
                        top: "28.1vw"
                    }
                },
                [e("Scroll", {
                    attrs: {
                        pullup: !0,
                        changeList: t.changeList
                    },
                    on: {
                        scrollToEnd: t.scrollToEnd
                    }
                },
                [e("div", {
                    staticClass: "rank-item",
                    attrs: {
                        slot: "scroll"
                    },
                    slot: "scroll"
                },
                [e("ul", [t._l(t.rankListData,
                function(s, i) {
                    return e("li", {
                        key: i,
                        staticClass: "item-lists",
                        staticStyle: {
                            "-webkit-justify-content": "space-around",
                            "-webkit-align-items": "center"
                        }
                    },
                    [e("div", {
                        staticClass: "rank"
                    },
                    [t._v("\n                    " + t._s(i + 1) + "\n                  ")]), t._v(" "), e("div", {
                        staticClass: "headimage"
                    },
                    [e("div", {
                        staticClass: "wx-headimage"
                    },
                    [e("img", {
                        attrs: {
                            src: s.userimg
                        }
                    })]), t._v(" "), 0 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/one.png"
                        }
                    }) : t._e(), t._v(" "), 1 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/second.png"
                        }
                    }) : t._e(), t._v(" "), 2 == i ? e("img", {
                        staticClass: "rank-icon",
                        attrs: {
                            src: "/answer/static/img/template02/third.png"
                        }
                    }) : t._e()]), t._v(" "), e("div", {
                        staticClass: "nickname"
                    },
                    [t._v(t._s(s.username))]), t._v(" "), e("div", {
                        staticClass: "point"
                    },
                    [t._v(t._s(s.score))]), t._v(" "), e("div", {
                        staticClass: "time"
                    },
                    [t._v("\n                    " + t._s(t.timeFormat(s.user_time)) + "\n                  ")])])
                }), t._v(" "), e("li", {
                    staticClass: "item-end",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [t._v(t._s(t.rankListNoMore ? "没有更多啦": "上拉加载更多"))])], 2)])])], 1)])]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 === t.tab,
                        expression: "tab === 2"
                    }]
                },
                [e("p", {
                    staticClass: "rank-tip"
                },
                [t._v("须知:市级单位的排列顺序主要根据参与人数数量多少进行展示")]), t._v(" "), e("div", {
                    staticClass: "rank-content loaction"
                },
                [t._m(3), t._v(" "), e("div", {
                    staticClass: "content-list"
                },
                [e("ul", t._l(t.localRankLists,
                function(s, i) {
                    return e("li", {
                        key: i,
                        staticClass: "item-lists"
                    },
                    [e("div", {
                        staticClass: "city"
                    },
                    [t._v("\n                " + t._s(s.name) + "\n              ")]), t._v(" "), e("div", {
                        staticClass: "number"
                    },
                    [t._v("\n                " + t._s(s.number) + "\n              ")])])
                }), 0)])])]), t._v(" "), e("div", {
                    staticClass: "rank-btn",
                    on: {
                        click: t.backPage
                    }
                },
                [t._v("返回首页")])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "rank-cover-img"
                },
                [s("img", {
                    attrs: {
                        src: "/answer/static/img/template02/bg.png"
                    }
                })])
            },
            function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("p", {
                    staticClass: "rank-tip"
                },
                [s("b", [this._v("排行每日24点清零，次日重新排名，日榜成绩计入总榜")])])
            },
            function() {
                var t = this,
                s = t.$createElement,
                e = t._self._c || s;
                return e("li", {
                    staticClass: "item-title",
                    staticStyle: {
                        "-webkit-justify-content": "space-around",
                        "-webkit-align-items": "center"
                    }
                },
                [e("div", {
                    staticClass: "rank"
                },
                [t._v("排行")]), t._v(" "), e("div", {
                    staticClass: "headimage"
                },
                [t._v("头像")]), t._v(" "), e("div", {
                    staticClass: "nickname"
                },
                [t._v("昵称")]), t._v(" "), e("div", {
                    staticClass: "point"
                },
                [t._v("得分")]), t._v(" "), e("div", {
                    staticClass: "time"
                },
                [t._v("时间")])])
            },
            function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "content-title"
                },
                [s("ul", [s("li", {
                    staticClass: "item-title"
                },
                [s("div", {
                    staticClass: "city"
                },
                [this._v("区域名称")]), this._v(" "), s("div", {
                    staticClass: "number"
                },
                [this._v("参与人数")])])])])
            }]
        };
        var Jt = e("VU/8")(Ht, Wt, !1,
        function(t) {
            e("Zo97")
        },
        null, null).exports;
        n.a.use(p.a);
        var Yt = [{
            path: "/answer",
            name: "Index",
            component: Nt
        },
        {
            path: "/index",
            name: "Transfer",
            component: Ut
        },
        {
            path: "/signin",
            name: "Signin",
            component: Dt
        },
        {
            path: "/signin_b",
            name: "SigninB",
            component: Gt
        },
        {
            path: "/rank_p",
            name: "RankP",
            component: Jt
        }],
        Qt = new p.a({
            routes: Yt
        }),
        Xt = !1; ! Xt && window.__p_routes && "function" == typeof window.__p_routes && (Xt = !0, window.__p_routes(Yt, Qt)),
        window.resetRouter = function(t) { ! Xt && (Xt = !0, t(Yt, Qt))
        };
        var Kt = Qt,
        Zt = e("NYxO"),
        ts = e("hKoQ"),
        ss = e.n(ts);
        n.a.use(Zt.a);
        var es = new Zt.a.Store({
            state: {
                answerInfo: {}
            },
            getters: {},
            actions: {},
            mutations: {
                setAnswerInfo: function(t, s) {
                    t.answerInfo = s
                }
            }
        });
        e("r2YW");
        function is() {
            function t() {
                window.customassetsload ? new n.a({
                    el: "#app",
                    router: Kt,
                    store: es,
                    template: "<App/>",
                    components: {
                        App: _
                    }
                }) : window.actRenter = function() {
                    new n.a({
                        el: "#app",
                        router: Kt,
                        store: es,
                        template: "<App/>",
                        components: {
                            App: _
                        }
                    })
                }
            }
            c()({
                url: "/activity/api.php?m=public&subm=front"
            }).then(function() {
                t()
            }).
            catch(function() {
                t()
            }),
            setInterval(function() {
                c()({
                    url: "/activity/api.php?m=public&subm=front"
                })
            },
            6e5)
        }
        n.a.use(Zt.a),
        n.a.config.productionTip = !1,
        ss.a.polyfill(),
        window.eventBus = new n.a,
        c.a.defaults.timeout = 1e4,
        c.a.interceptors.request.use(function(t) {
            return t
        },
        function(t) {
            return a.a.reject(t)
        }),
        c.a.interceptors.response.use(function(t) {
            return t.data && 5008 === t.data.code ? (window.location.replace(t.data.data.url), a.a.reject(new Error("授权中……"))) : t
        },
        function(t) {
            return /timeout/i.test(t.message) && (t.message = "网络异常，请稍后再试"),
            a.a.reject(t)
        }),
        n.a.prototype.$ajax = c.a,
        n.a.prototype.$format = function(t, s) {
            function e(t) {
                return t < 10 ? "0" + t: t
            }
            var i = new Date(t),
            a = i.getFullYear(),
            n = i.getMonth() + 1,
            o = i.getDate(),
            r = i.getHours(),
            l = i.getMinutes();
            i.getSeconds();
            return a + s + e(n) + s + e(o) + " " + e(r) + ":" + e(l)
        },
        n.a.prototype.$URL = function() {
            var t = this.$route.query,
            s = [];
            for (var e in t) s.push(e + "=" + t[e]);
            return s.join("&")
        };
        var as = !1,
        ns = window.wxappid,
        os = "https://pre-api.tmuyun.com/jssdk/zjrb-cp.delta.min.js";
        as = !1,
        os = "https://cdn-cp.tmuyun.com/jssdk/delta/zjrb-cp.delta.min.js";
        var rs = document.createElement("script");
        rs.async = "async",
        rs.src = os,
        rs.charset = "UTF-8",
        document.body.appendChild(rs),
        rs.onload = function() {
            new a.a(function(t, s) {
                try {
                    CP && "function" == typeof CP.ready && CP.ready({
                        debug: as,
                        wx_option: {
                            debug: !1,
                            appid: ns,
                            method: "getShareSign",
                            redirect: location.href.split("#")[0],
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "startRecord", "stopRecord", "onVoiceRecordEnd", "onVoicePlayEnd", "uploadVoice", "playVoice", "getLocation", "chooseImage", "uploadImage", "stopVoice", "pauseVoice", "previewImage", "translateVoice"]
                        },
                        ready: function(s) {
                            s.is_client && 1 == s.is_client && (sessionStorage.platformType = s.client_code),
                            window.wx && wx.hideMenuItems({
                                menuList: ["menuItem:copyUrl"]
                            }),
                            t(s)
                        },
                        error: function(s) {
                            s.client && s.client.is_client && 1 == s.client.is_client && (sessionStorage.platformType = s.client.client_code),
                            t(s)
                        }
                    })
                } catch(t) {
                    s({
                        message: t.message
                    })
                }
            }).then(function(t) {
                is()
            }).
            catch(function(t) {
                is()
            })
        }
    },
    PAQj: function(t, s) {},
    UVMt: function(t, s) {},
    VCWz: function(t, s) {},
    "W+I/": function(t, s) {},
    WKOd: function(t, s) {},
    Zo97: function(t, s) {},
    cjdU: function(t, s) {},
    llRq: function(t, s) {},
    pS5f: function(t, s) {},
    r2YW: function(t, s) {},
    ycYf: function(t, s) {},
    zi5Y: function(t, s) {}
},
["NHnr"]);