(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-answer-home"], {
    "0442": function(t, n, e) {
        var i = e("4bad");
        n = i(!1),
        n.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list-item[data-v-2434ecae]{border-top:%?2?% solid #ececec}.border-top-none[data-v-2434ecae]{border:none!important}.rank-item[data-v-2434ecae]{border-top:%?2?% solid #ececec;margin-left:%?-60?%;margin-right:%?-60?%;padding:%?0?% %?60?%;padding-top:%?30?%}.chance-card[data-v-2434ecae]{position:fixed;right:%?20?%;top:63%;z-index:20}', ""]),
        t.exports = n
    },
    "05e3": function(t, n, e) {
        var i = e("4bad");
        n = i(!1),
        n.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.home[data-v-704d767f]{\n  /* font-size: 22rpx;\n        padding-left: 10rpx; */}.small-card[data-v-704d767f]{\n  /* text-align: right;\n        font-size: 24rpx;\n        color: #fff;\n        padding: 0 20rpx;\n        padding-left: 50rpx;\n        display: inline-block;\n        line-height: 50rpx;\n        height: 50rpx;\n        border-radius: 25rpx;\n        background: #fe4f14;\n        max-width: 200rpx; */position:relative}.cardCount[data-v-704d767f]{position:absolute;right:%?-14?%;top:%?-14?%;line-height:%?32?%;vertical-align:middle;text-align:center;border-radius:100%;width:%?40?%;height:%?40?%;background:#fff;border:%?4?% solid #ffe377;font-size:%?24?%;-webkit-transform:scale(.66);transform:scale(.66);color:#fda947}.small-card-img[data-v-704d767f]{\n  /* position: absolute;\n        top: -10rpx;\n        left: -6rpx;\n        width: 56rpx; */height:%?96?%;width:%?69?%}.home.home-h5 .cardCount[data-v-704d767f]{font-size:%?42?%}', ""]),
        t.exports = n
    },
    "0a5d": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("4e14"),
        r = e("d8f6");
        for (var a in r)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return r[t]
            }))
        } (a);
        e("1065");
        var o, u = e("f0c5"),
        c = Object(u["a"])(r["default"], i["b"], i["c"], !1, null, "22bdfcd6", null, !1, i["a"], o);
        n["default"] = c.exports
    },
    1065 : function(t, n, e) {
        "use strict";
        var i = e("3342"),
        r = e.n(i);
        r.a
    },
    1406 : function(t, n, e) {
        "use strict";
        var i = e("4ea4"),
        r = (i(e("bee5")), i(e("60a2")), e("0c6d")),
        a = r.request,
        o = function(t) {
            return a("m/Activity/Get", t)
        },
        u = function(t) {
            return a("pluginAnswer/answerView/UpdateAnswerCount", t)
        },
        c = function(t) {
            return a("pluginAnswer/answerView/SaveAnswer", t, "post")
        },
        f = function(t) {
            return a("pluginAnswer/ActivityViewCommon/MyAnswerRecordDetail", t)
        },
        s = function(t) {
            return a("pluginAnswer/answerView/GetTops", t)
        },
        l = function(t) {
            return a("pluginAnswer/answerView/GetAnswerList", t, "GET", !0)
        },
        h = function(t) {
            return a("pluginAnswer/AnswerView/GetQuestionRecord", t)
        },
        d = function(t) {
            return a("pluginAnswer/AnswerView/GetAllAnswerList", t)
        },
        p = function(t) {
            return a("pluginAnswer/answerView/SaveMemberInfo", t)
        },
        v = function(t) {
            return a("pluginAnswer/answerView/SavePoster", t, "POST")
        },
        g = function(t) {
            return a("pluginAnswer/answerView/GetGroupTops", t)
        };
        t.exports = {
            getActive: o,
            updateAnswerCount: u,
            saveAnswer: c,
            getRecordDetail: f,
            getTops: s,
            getList: l,
            getRecordList: h,
            getAllList: d,
            saveMemberInfo: p,
            savePoster: v,
            GetGroupTops: g
        }
    },
    1863 : function(t, n, e) {
        var i = e("4bad");
        n = i(!1),
        n.push([t.i, ".answer-index[data-v-6db9d960]{height:100%}.answer-index .main[data-v-6db9d960]{height:%?1220?%}.answer-index .main .inner[data-v-6db9d960]{\n    /* position: relative;  */\n    /* top: 900rpx; */position:absolute; \n\t/* bottom: 320rpx; */left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:100%}.answer-index .main .join-data[data-v-6db9d960]{text-align:center;color:#0080ff;font-size:%?26?%}.answer-index .main .btn-start[data-v-6db9d960]{width:%?500?%;height:%?100?%;line-height:%?100?%;background:#0080ff;border-radius:%?50?%;margin:%?20?% auto %?30?% auto;color:#fff;text-align:center;font-size:%?36?%}.answer-index .main .btn-box[data-v-6db9d960]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% auto;width:%?600?%}.answer-index .main .btn-box .btn-start-1[data-v-6db9d960]{width:%?266?%;height:%?100?%;line-height:%?100?%;background:#0080ff;border-radius:%?50?%;color:#fff;text-align:center;font-size:%?36?%}.answer-index .main .btn-group[data-v-6db9d960]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?600?%;margin:0 auto}.answer-index .main .btn-group .iconfont[data-v-6db9d960]{font-size:%?26?%;margin-right:%?8?%}.answer-index .info .limit-time[data-v-6db9d960]{margin-left:%?24?%;display:inline-block;font-size:%?24?%;color:#666}.answer-index .full-time[data-v-6db9d960]{padding:%?20?% %?40?%}.answer-index .mask[data-v-6db9d960]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:999}.answer-index .mask .popup[data-v-6db9d960]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-70%);transform:translateX(-50%) translateY(-70%);width:%?560?%;background:#fff;border-radius:%?10?%;padding:%?50?% %?50?% %?60?% %?50?%;font-size:%?36?%}.answer-index .mask .popup .btn-sure[data-v-6db9d960]{height:%?76?%;line-height:%?76?%;background:#0080ff;color:#fff;text-align:center;margin-top:%?40?%}.answer-index .mask .popup .icon[data-v-6db9d960]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#fff;font-size:%?60?%}", ""]),
        t.exports = n
    },
    2163 : function(t, n, e) {
        "use strict";
        var i = e("4ea4");
        e("a9e3"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.
    default = void 0;
        var r = i(e("e143")),
        a = i(e("60a2")),
        o = i(e("97b6")),
        u = i(e("ca00")),
        c = {
            name: "activityChanceCard",
            props: {
                activityGuid: {
                    type: [Number, String],
                default:
                    0
                }
            },
            data: function() {
                return {
                    cardUrl: "mini/plugin/chance_card/icon_card.png",
                    count: 0,
                    isInIosH5: u.
                default.checkIosFontScaleInH5()
                }
            },
            filters: {
                countSet: function(t) {
                    return t > 9 ? "9+": t
                }
            },
            components: {},
            mounted: function() {
                this.getChanceCardCount()
            },
            methods: {
                getChanceCardCount: function() {
                    var t = this;
                    if (!r.
                default.$isEdit && 0 != this.activityGuid) {
                        var n = {
                            activityGuid: this.activityGuid
                        };
                        o.
                    default.getChanceCardTotal(n).then((function(n) {
                            0 == n.result ? t.count = n.data.count: u.
                        default.showToast(n.msg, "none")
                        }))
                    }
                },
                getChanceCardDetailV2: function() {
                    a.
                default.showChanceCardInfoDialog(this.activityGuid, null, !1)
                }
            }
        };
        n.
    default = c
    },
    "2ef0": function(t, n, e) { (function(t, i) {
            var r;
            /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
            (function() {
                var a, o = "4.17.15",
                u = 200,
                c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                f = "Expected a function",
                s = "__lodash_hash_undefined__",
                l = 500,
                h = "__lodash_placeholder__",
                d = 1,
                p = 2,
                v = 4,
                g = 1,
                y = 2,
                b = 1,
                m = 2,
                _ = 4,
                w = 8,
                x = 16,
                I = 32,
                k = 64,
                S = 128,
                C = 256,
                T = 512,
                E = 30,
                A = "...",
                R = 800,
                B = 16,
                O = 1,
                z = 2,
                j = 3,
                P = 1 / 0,
                D = 9007199254740991,
                L = 17976931348623157e292,
                F = NaN,
                M = 4294967295,
                $ = M - 1,
                G = M >>> 1,
                U = [["ary", S], ["bind", b], ["bindKey", m], ["curry", w], ["curryRight", x], ["flip", T], ["partial", I], ["partialRight", k], ["rearg", C]],
                N = "[object Arguments]",
                H = "[object Array]",
                W = "[object AsyncFunction]",
                V = "[object Boolean]",
                Z = "[object Date]",
                q = "[object DOMException]",
                Y = "[object Error]",
                J = "[object Function]",
                K = "[object GeneratorFunction]",
                X = "[object Map]",
                Q = "[object Number]",
                tt = "[object Null]",
                nt = "[object Object]",
                et = "[object Promise]",
                it = "[object Proxy]",
                rt = "[object RegExp]",
                at = "[object Set]",
                ot = "[object String]",
                ut = "[object Symbol]",
                ct = "[object Undefined]",
                ft = "[object WeakMap]",
                st = "[object WeakSet]",
                lt = "[object ArrayBuffer]",
                ht = "[object DataView]",
                dt = "[object Float32Array]",
                pt = "[object Float64Array]",
                vt = "[object Int8Array]",
                gt = "[object Int16Array]",
                yt = "[object Int32Array]",
                bt = "[object Uint8Array]",
                mt = "[object Uint8ClampedArray]",
                _t = "[object Uint16Array]",
                wt = "[object Uint32Array]",
                xt = /\b__p \+= '';/g,
                It = /\b(__p \+=) '' \+/g,
                kt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                St = /&(?:amp|lt|gt|quot|#39);/g,
                Ct = /[&<>"']/g,
                Tt = RegExp(St.source),
                Et = RegExp(Ct.source),
                At = /<%-([\s\S]+?)%>/g,
                Rt = /<%([\s\S]+?)%>/g,
                Bt = /<%=([\s\S]+?)%>/g,
                Ot = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                zt = /^\w*$/,
                jt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Pt = /[\\^$.*+?()[\]{}|]/g,
                Dt = RegExp(Pt.source),
                Lt = /^\s+|\s+$/g,
                Ft = /^\s+/,
                Mt = /\s+$/,
                $t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Gt = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Ut = /,? & /,
                Nt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Ht = /\\(\\)?/g,
                Wt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Vt = /\w*$/,
                Zt = /^[-+]0x[0-9a-f]+$/i,
                qt = /^0b[01]+$/i,
                Yt = /^\[object .+?Constructor\]$/,
                Jt = /^0o[0-7]+$/i,
                Kt = /^(?:0|[1-9]\d*)$/,
                Xt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Qt = /($^)/,
                tn = /['\n\r\u2028\u2029\\]/g,
                nn = "\\ud800-\\udfff",
                en = "\\u0300-\\u036f",
                rn = "\\ufe20-\\ufe2f",
                an = "\\u20d0-\\u20ff",
                on = en + rn + an,
                un = "\\u2700-\\u27bf",
                cn = "a-z\\xdf-\\xf6\\xf8-\\xff",
                fn = "\\xac\\xb1\\xd7\\xf7",
                sn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                ln = "\\u2000-\\u206f",
                hn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                dn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                pn = "\\ufe0e\\ufe0f",
                vn = fn + sn + ln + hn,
                gn = "['’]",
                yn = "[" + nn + "]",
                bn = "[" + vn + "]",
                mn = "[" + on + "]",
                _n = "\\d+",
                wn = "[" + un + "]",
                xn = "[" + cn + "]",
                In = "[^" + nn + vn + _n + un + cn + dn + "]",
                kn = "\\ud83c[\\udffb-\\udfff]",
                Sn = "(?:" + mn + "|" + kn + ")",
                Cn = "[^" + nn + "]",
                Tn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                En = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                An = "[" + dn + "]",
                Rn = "\\u200d",
                Bn = "(?:" + xn + "|" + In + ")",
                On = "(?:" + An + "|" + In + ")",
                zn = "(?:" + gn + "(?:d|ll|m|re|s|t|ve))?",
                jn = "(?:" + gn + "(?:D|LL|M|RE|S|T|VE))?",
                Pn = Sn + "?",
                Dn = "[" + pn + "]?",
                Ln = "(?:" + Rn + "(?:" + [Cn, Tn, En].join("|") + ")" + Dn + Pn + ")*",
                Fn = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Mn = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                $n = Dn + Pn + Ln,
                Gn = "(?:" + [wn, Tn, En].join("|") + ")" + $n,
                Un = "(?:" + [Cn + mn + "?", mn, Tn, En, yn].join("|") + ")",
                Nn = RegExp(gn, "g"),
                Hn = RegExp(mn, "g"),
                Wn = RegExp(kn + "(?=" + kn + ")|" + Un + $n, "g"),
                Vn = RegExp([An + "?" + xn + "+" + zn + "(?=" + [bn, An, "$"].join("|") + ")", On + "+" + jn + "(?=" + [bn, An + Bn, "$"].join("|") + ")", An + "?" + Bn + "+" + zn, An + "+" + jn, Mn, Fn, _n, Gn].join("|"), "g"),
                Zn = RegExp("[" + Rn + nn + on + pn + "]"),
                qn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Yn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Jn = -1,
                Kn = {};
                Kn[dt] = Kn[pt] = Kn[vt] = Kn[gt] = Kn[yt] = Kn[bt] = Kn[mt] = Kn[_t] = Kn[wt] = !0,
                Kn[N] = Kn[H] = Kn[lt] = Kn[V] = Kn[ht] = Kn[Z] = Kn[Y] = Kn[J] = Kn[X] = Kn[Q] = Kn[nt] = Kn[rt] = Kn[at] = Kn[ot] = Kn[ft] = !1;
                var Xn = {};
                Xn[N] = Xn[H] = Xn[lt] = Xn[ht] = Xn[V] = Xn[Z] = Xn[dt] = Xn[pt] = Xn[vt] = Xn[gt] = Xn[yt] = Xn[X] = Xn[Q] = Xn[nt] = Xn[rt] = Xn[at] = Xn[ot] = Xn[ut] = Xn[bt] = Xn[mt] = Xn[_t] = Xn[wt] = !0,
                Xn[Y] = Xn[J] = Xn[ft] = !1;
                var Qn = {
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                },
                te = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                ne = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                ee = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ie = parseFloat,
                re = parseInt,
                ae = "object" == typeof t && t && t.Object === Object && t,
                oe = "object" == typeof self && self && self.Object === Object && self,
                ue = ae || oe || Function("return this")(),
                ce = n && !n.nodeType && n,
                fe = ce && "object" == typeof i && i && !i.nodeType && i,
                se = fe && fe.exports === ce,
                le = se && ae.process,
                he = function() {
                    try {
                        var t = fe && fe.require && fe.require("util").types;
                        return t || le && le.binding && le.binding("util")
                    } catch(n) {}
                } (),
                de = he && he.isArrayBuffer,
                pe = he && he.isDate,
                ve = he && he.isMap,
                ge = he && he.isRegExp,
                ye = he && he.isSet,
                be = he && he.isTypedArray;
                function me(t, n, e) {
                    switch (e.length) {
                    case 0:
                        return t.call(n);
                    case 1:
                        return t.call(n, e[0]);
                    case 2:
                        return t.call(n, e[0], e[1]);
                    case 3:
                        return t.call(n, e[0], e[1], e[2])
                    }
                    return t.apply(n, e)
                }
                function _e(t, n, e, i) {
                    var r = -1,
                    a = null == t ? 0 : t.length;
                    while (++r < a) {
                        var o = t[r];
                        n(i, o, e(o), t)
                    }
                    return i
                }
                function we(t, n) {
                    var e = -1,
                    i = null == t ? 0 : t.length;
                    while (++e < i) if (!1 === n(t[e], e, t)) break;
                    return t
                }
                function xe(t, n) {
                    var e = null == t ? 0 : t.length;
                    while (e--) if (!1 === n(t[e], e, t)) break;
                    return t
                }
                function Ie(t, n) {
                    var e = -1,
                    i = null == t ? 0 : t.length;
                    while (++e < i) if (!n(t[e], e, t)) return ! 1;
                    return ! 0
                }
                function ke(t, n) {
                    var e = -1,
                    i = null == t ? 0 : t.length,
                    r = 0,
                    a = [];
                    while (++e < i) {
                        var o = t[e];
                        n(o, e, t) && (a[r++] = o)
                    }
                    return a
                }
                function Se(t, n) {
                    var e = null == t ? 0 : t.length;
                    return !! e && Le(t, n, 0) > -1
                }
                function Ce(t, n, e) {
                    var i = -1,
                    r = null == t ? 0 : t.length;
                    while (++i < r) if (e(n, t[i])) return ! 0;
                    return ! 1
                }
                function Te(t, n) {
                    var e = -1,
                    i = null == t ? 0 : t.length,
                    r = Array(i);
                    while (++e < i) r[e] = n(t[e], e, t);
                    return r
                }
                function Ee(t, n) {
                    var e = -1,
                    i = n.length,
                    r = t.length;
                    while (++e < i) t[r + e] = n[e];
                    return t
                }
                function Ae(t, n, e, i) {
                    var r = -1,
                    a = null == t ? 0 : t.length;
                    i && a && (e = t[++r]);
                    while (++r < a) e = n(e, t[r], r, t);
                    return e
                }
                function Re(t, n, e, i) {
                    var r = null == t ? 0 : t.length;
                    i && r && (e = t[--r]);
                    while (r--) e = n(e, t[r], r, t);
                    return e
                }
                function Be(t, n) {
                    var e = -1,
                    i = null == t ? 0 : t.length;
                    while (++e < i) if (n(t[e], e, t)) return ! 0;
                    return ! 1
                }
                var Oe = Ge("length");
                function ze(t) {
                    return t.split("")
                }
                function je(t) {
                    return t.match(Nt) || []
                }
                function Pe(t, n, e) {
                    var i;
                    return e(t, (function(t, e, r) {
                        if (n(t, e, r)) return i = e,
                        !1
                    })),
                    i
                }
                function De(t, n, e, i) {
                    var r = t.length,
                    a = e + (i ? 1 : -1);
                    while (i ? a--:++a < r) if (n(t[a], a, t)) return a;
                    return - 1
                }
                function Le(t, n, e) {
                    return n === n ? hi(t, n, e) : De(t, Me, e)
                }
                function Fe(t, n, e, i) {
                    var r = e - 1,
                    a = t.length;
                    while (++r < a) if (i(t[r], n)) return r;
                    return - 1
                }
                function Me(t) {
                    return t !== t
                }
                function $e(t, n) {
                    var e = null == t ? 0 : t.length;
                    return e ? We(t, n) / e: F
                }
                function Ge(t) {
                    return function(n) {
                        return null == n ? a: n[t]
                    }
                }
                function Ue(t) {
                    return function(n) {
                        return null == t ? a: t[n]
                    }
                }
                function Ne(t, n, e, i, r) {
                    return r(t, (function(t, r, a) {
                        e = i ? (i = !1, t) : n(e, t, r, a)
                    })),
                    e
                }
                function He(t, n) {
                    var e = t.length;
                    t.sort(n);
                    while (e--) t[e] = t[e].value;
                    return t
                }
                function We(t, n) {
                    var e, i = -1,
                    r = t.length;
                    while (++i < r) {
                        var o = n(t[i]);
                        o !== a && (e = e === a ? o: e + o)
                    }
                    return e
                }
                function Ve(t, n) {
                    var e = -1,
                    i = Array(t);
                    while (++e < t) i[e] = n(e);
                    return i
                }
                function Ze(t, n) {
                    return Te(n, (function(n) {
                        return [n, t[n]]
                    }))
                }
                function qe(t) {
                    return function(n) {
                        return t(n)
                    }
                }
                function Ye(t, n) {
                    return Te(n, (function(n) {
                        return t[n]
                    }))
                }
                function Je(t, n) {
                    return t.has(n)
                }
                function Ke(t, n) {
                    var e = -1,
                    i = t.length;
                    while (++e < i && Le(n, t[e], 0) > -1);
                    return e
                }
                function Xe(t, n) {
                    var e = t.length;
                    while (e--&&Le(n, t[e], 0) > -1);
                    return e
                }
                function Qe(t, n) {
                    var e = t.length,
                    i = 0;
                    while (e--) t[e] === n && ++i;
                    return i
                }
                var ti = Ue(Qn),
                ni = Ue(te);
                function ei(t) {
                    return "\\" + ee[t]
                }
                function ii(t, n) {
                    return null == t ? a: t[n]
                }
                function ri(t) {
                    return Zn.test(t)
                }
                function ai(t) {
                    return qn.test(t)
                }
                function oi(t) {
                    var n, e = [];
                    while (! (n = t.next()).done) e.push(n.value);
                    return e
                }
                function ui(t) {
                    var n = -1,
                    e = Array(t.size);
                    return t.forEach((function(t, i) {
                        e[++n] = [i, t]
                    })),
                    e
                }
                function ci(t, n) {
                    return function(e) {
                        return t(n(e))
                    }
                }
                function fi(t, n) {
                    var e = -1,
                    i = t.length,
                    r = 0,
                    a = [];
                    while (++e < i) {
                        var o = t[e];
                        o !== n && o !== h || (t[e] = h, a[r++] = e)
                    }
                    return a
                }
                function si(t) {
                    var n = -1,
                    e = Array(t.size);
                    return t.forEach((function(t) {
                        e[++n] = t
                    })),
                    e
                }
                function li(t) {
                    var n = -1,
                    e = Array(t.size);
                    return t.forEach((function(t) {
                        e[++n] = [t, t]
                    })),
                    e
                }
                function hi(t, n, e) {
                    var i = e - 1,
                    r = t.length;
                    while (++i < r) if (t[i] === n) return i;
                    return - 1
                }
                function di(t, n, e) {
                    var i = e + 1;
                    while (i--) if (t[i] === n) return i;
                    return i
                }
                function pi(t) {
                    return ri(t) ? yi(t) : Oe(t)
                }
                function vi(t) {
                    return ri(t) ? bi(t) : ze(t)
                }
                var gi = Ue(ne);
                function yi(t) {
                    var n = Wn.lastIndex = 0;
                    while (Wn.test(t))++n;
                    return n
                }
                function bi(t) {
                    return t.match(Wn) || []
                }
                function mi(t) {
                    return t.match(Vn) || []
                }
                var _i = function t(n) {
                    n = null == n ? ue: wi.defaults(ue.Object(), n, wi.pick(ue, Yn));
                    var e = n.Array,
                    i = n.Date,
                    r = n.Error,
                    Nt = n.Function,
                    nn = n.Math,
                    en = n.Object,
                    rn = n.RegExp,
                    an = n.String,
                    on = n.TypeError,
                    un = e.prototype,
                    cn = Nt.prototype,
                    fn = en.prototype,
                    sn = n["__core-js_shared__"],
                    ln = cn.toString,
                    hn = fn.hasOwnProperty,
                    dn = 0,
                    pn = function() {
                        var t = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t: ""
                    } (),
                    vn = fn.toString,
                    gn = ln.call(en),
                    yn = ue._,
                    bn = rn("^" + ln.call(hn).replace(Pt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    mn = se ? n.Buffer: a,
                    _n = n.Symbol,
                    wn = n.Uint8Array,
                    xn = mn ? mn.allocUnsafe: a,
                    In = ci(en.getPrototypeOf, en),
                    kn = en.create,
                    Sn = fn.propertyIsEnumerable,
                    Cn = un.splice,
                    Tn = _n ? _n.isConcatSpreadable: a,
                    En = _n ? _n.iterator: a,
                    An = _n ? _n.toStringTag: a,
                    Rn = function() {
                        try {
                            var t = Wo(en, "defineProperty");
                            return t({},
                            "", {}),
                            t
                        } catch(n) {}
                    } (),
                    Bn = n.clearTimeout !== ue.clearTimeout && n.clearTimeout,
                    On = i && i.now !== ue.Date.now && i.now,
                    zn = n.setTimeout !== ue.setTimeout && n.setTimeout,
                    jn = nn.ceil,
                    Pn = nn.floor,
                    Dn = en.getOwnPropertySymbols,
                    Ln = mn ? mn.isBuffer: a,
                    Fn = n.isFinite,
                    Mn = un.join,
                    $n = ci(en.keys, en),
                    Gn = nn.max,
                    Un = nn.min,
                    Wn = i.now,
                    Vn = n.parseInt,
                    Zn = nn.random,
                    qn = un.reverse,
                    Qn = Wo(n, "DataView"),
                    te = Wo(n, "Map"),
                    ne = Wo(n, "Promise"),
                    ee = Wo(n, "Set"),
                    ae = Wo(n, "WeakMap"),
                    oe = Wo(en, "create"),
                    ce = ae && new ae,
                    fe = {},
                    le = Ru(Qn),
                    he = Ru(te),
                    Oe = Ru(ne),
                    ze = Ru(ee),
                    Ue = Ru(ae),
                    hi = _n ? _n.prototype: a,
                    yi = hi ? hi.valueOf: a,
                    bi = hi ? hi.toString: a;
                    function _i(t) {
                        if (ks(t) && !us(t) && !(t instanceof Si)) {
                            if (t instanceof ki) return t;
                            if (hn.call(t, "__wrapped__")) return Ou(t)
                        }
                        return new ki(t)
                    }
                    var xi = function() {
                        function t() {}
                        return function(n) {
                            if (!Is(n)) return {};
                            if (kn) return kn(n);
                            t.prototype = n;
                            var e = new t;
                            return t.prototype = a,
                            e
                        }
                    } ();
                    function Ii() {}
                    function ki(t, n) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__chain__ = !!n,
                        this.__index__ = 0,
                        this.__values__ = a
                    }
                    function Si(t) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = M,
                        this.__views__ = []
                    }
                    function Ci() {
                        var t = new Si(this.__wrapped__);
                        return t.__actions__ = no(this.__actions__),
                        t.__dir__ = this.__dir__,
                        t.__filtered__ = this.__filtered__,
                        t.__iteratees__ = no(this.__iteratees__),
                        t.__takeCount__ = this.__takeCount__,
                        t.__views__ = no(this.__views__),
                        t
                    }
                    function Ti() {
                        if (this.__filtered__) {
                            var t = new Si(this);
                            t.__dir__ = -1,
                            t.__filtered__ = !0
                        } else t = this.clone(),
                        t.__dir__ *= -1;
                        return t
                    }
                    function Ei() {
                        var t = this.__wrapped__.value(),
                        n = this.__dir__,
                        e = us(t),
                        i = n < 0,
                        r = e ? t.length: 0,
                        a = Jo(0, r, this.__views__),
                        o = a.start,
                        u = a.end,
                        c = u - o,
                        f = i ? u: o - 1,
                        s = this.__iteratees__,
                        l = s.length,
                        h = 0,
                        d = Un(c, this.__takeCount__);
                        if (!e || !i && r == c && d == c) return Da(t, this.__actions__);
                        var p = [];
                        t: while (c--&&h < d) {
                            f += n;
                            var v = -1,
                            g = t[f];
                            while (++v < l) {
                                var y = s[v],
                                b = y.iteratee,
                                m = y.type,
                                _ = b(g);
                                if (m == z) g = _;
                                else if (!_) {
                                    if (m == O) continue t;
                                    break t
                                }
                            }
                            p[h++] = g
                        }
                        return p
                    }
                    function Ai(t) {
                        var n = -1,
                        e = null == t ? 0 : t.length;
                        this.clear();
                        while (++n < e) {
                            var i = t[n];
                            this.set(i[0], i[1])
                        }
                    }
                    function Ri() {
                        this.__data__ = oe ? oe(null) : {},
                        this.size = 0
                    }
                    function Bi(t) {
                        var n = this.has(t) && delete this.__data__[t];
                        return this.size -= n ? 1 : 0,
                        n
                    }
                    function Oi(t) {
                        var n = this.__data__;
                        if (oe) {
                            var e = n[t];
                            return e === s ? a: e
                        }
                        return hn.call(n, t) ? n[t] : a
                    }
                    function zi(t) {
                        var n = this.__data__;
                        return oe ? n[t] !== a: hn.call(n, t)
                    }
                    function ji(t, n) {
                        var e = this.__data__;
                        return this.size += this.has(t) ? 0 : 1,
                        e[t] = oe && n === a ? s: n,
                        this
                    }
                    function Pi(t) {
                        var n = -1,
                        e = null == t ? 0 : t.length;
                        this.clear();
                        while (++n < e) {
                            var i = t[n];
                            this.set(i[0], i[1])
                        }
                    }
                    function Di() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    function Li(t) {
                        var n = this.__data__,
                        e = cr(n, t);
                        if (e < 0) return ! 1;
                        var i = n.length - 1;
                        return e == i ? n.pop() : Cn.call(n, e, 1),
                        --this.size,
                        !0
                    }
                    function Fi(t) {
                        var n = this.__data__,
                        e = cr(n, t);
                        return e < 0 ? a: n[e][1]
                    }
                    function Mi(t) {
                        return cr(this.__data__, t) > -1
                    }
                    function $i(t, n) {
                        var e = this.__data__,
                        i = cr(e, t);
                        return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n,
                        this
                    }
                    function Gi(t) {
                        var n = -1,
                        e = null == t ? 0 : t.length;
                        this.clear();
                        while (++n < e) {
                            var i = t[n];
                            this.set(i[0], i[1])
                        }
                    }
                    function Ui() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Ai,
                            map: new(te || Pi),
                            string: new Ai
                        }
                    }
                    function Ni(t) {
                        var n = No(this, t)["delete"](t);
                        return this.size -= n ? 1 : 0,
                        n
                    }
                    function Hi(t) {
                        return No(this, t).get(t)
                    }
                    function Wi(t) {
                        return No(this, t).has(t)
                    }
                    function Vi(t, n) {
                        var e = No(this, t),
                        i = e.size;
                        return e.set(t, n),
                        this.size += e.size == i ? 0 : 1,
                        this
                    }
                    function Zi(t) {
                        var n = -1,
                        e = null == t ? 0 : t.length;
                        this.__data__ = new Gi;
                        while (++n < e) this.add(t[n])
                    }
                    function qi(t) {
                        return this.__data__.set(t, s),
                        this
                    }
                    function Yi(t) {
                        return this.__data__.has(t)
                    }
                    function Ji(t) {
                        var n = this.__data__ = new Pi(t);
                        this.size = n.size
                    }
                    function Ki() {
                        this.__data__ = new Pi,
                        this.size = 0
                    }
                    function Xi(t) {
                        var n = this.__data__,
                        e = n["delete"](t);
                        return this.size = n.size,
                        e
                    }
                    function Qi(t) {
                        return this.__data__.get(t)
                    }
                    function tr(t) {
                        return this.__data__.has(t)
                    }
                    function nr(t, n) {
                        var e = this.__data__;
                        if (e instanceof Pi) {
                            var i = e.__data__;
                            if (!te || i.length < u - 1) return i.push([t, n]),
                            this.size = ++e.size,
                            this;
                            e = this.__data__ = new Gi(i)
                        }
                        return e.set(t, n),
                        this.size = e.size,
                        this
                    }
                    function er(t, n) {
                        var e = us(t),
                        i = !e && os(t),
                        r = !e && !i && hs(t),
                        a = !e && !i && !r && Ms(t),
                        o = e || i || r || a,
                        u = o ? Ve(t.length, an) : [],
                        c = u.length;
                        for (var f in t) ! n && !hn.call(t, f) || o && ("length" == f || r && ("offset" == f || "parent" == f) || a && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || ru(f, c)) || u.push(f);
                        return u
                    }
                    function ir(t) {
                        var n = t.length;
                        return n ? t[va(0, n - 1)] : a
                    }
                    function rr(t, n) {
                        return Tu(no(t), pr(n, 0, t.length))
                    }
                    function ar(t) {
                        return Tu(no(t))
                    }
                    function or(t, n, e) { (e !== a && !is(t[n], e) || e === a && !(n in t)) && hr(t, n, e)
                    }
                    function ur(t, n, e) {
                        var i = t[n];
                        hn.call(t, n) && is(i, e) && (e !== a || n in t) || hr(t, n, e)
                    }
                    function cr(t, n) {
                        var e = t.length;
                        while (e--) if (is(t[e][0], n)) return e;
                        return - 1
                    }
                    function fr(t, n, e, i) {
                        return _r(t, (function(t, r, a) {
                            n(i, t, e(t), a)
                        })),
                        i
                    }
                    function sr(t, n) {
                        return t && eo(n, wl(n), t)
                    }
                    function lr(t, n) {
                        return t && eo(n, xl(n), t)
                    }
                    function hr(t, n, e) {
                        "__proto__" == n && Rn ? Rn(t, n, {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        }) : t[n] = e
                    }
                    function dr(t, n) {
                        var i = -1,
                        r = n.length,
                        o = e(r),
                        u = null == t;
                        while (++i < r) o[i] = u ? a: vl(t, n[i]);
                        return o
                    }
                    function pr(t, n, e) {
                        return t === t && (e !== a && (t = t <= e ? t: e), n !== a && (t = t >= n ? t: n)),
                        t
                    }
                    function vr(t, n, e, i, r, o) {
                        var u, c = n & d,
                        f = n & p,
                        s = n & v;
                        if (e && (u = r ? e(t, i, r, o) : e(t)), u !== a) return u;
                        if (!Is(t)) return t;
                        var l = us(t);
                        if (l) {
                            if (u = Qo(t), !c) return no(t, u)
                        } else {
                            var h = Yo(t),
                            g = h == J || h == K;
                            if (hs(t)) return Wa(t, c);
                            if (h == nt || h == N || g && !r) {
                                if (u = f || g ? {}: tu(t), !c) return f ? ro(t, lr(u, t)) : io(t, sr(u, t))
                            } else {
                                if (!Xn[h]) return r ? t: {};
                                u = nu(t, h, c)
                            }
                        }
                        o || (o = new Ji);
                        var y = o.get(t);
                        if (y) return y;
                        o.set(t, u),
                        Ds(t) ? t.forEach((function(i) {
                            u.add(vr(i, n, e, i, t, o))
                        })) : Ss(t) && t.forEach((function(i, r) {
                            u.set(r, vr(i, n, e, r, t, o))
                        }));
                        var b = s ? f ? Fo: Lo: f ? xl: wl,
                        m = l ? a: b(t);
                        return we(m || t, (function(i, r) {
                            m && (r = i, i = t[r]),
                            ur(u, r, vr(i, n, e, r, t, o))
                        })),
                        u
                    }
                    function gr(t) {
                        var n = wl(t);
                        return function(e) {
                            return yr(e, t, n)
                        }
                    }
                    function yr(t, n, e) {
                        var i = e.length;
                        if (null == t) return ! i;
                        t = en(t);
                        while (i--) {
                            var r = e[i],
                            o = n[r],
                            u = t[r];
                            if (u === a && !(r in t) || !o(u)) return ! 1
                        }
                        return ! 0
                    }
                    function br(t, n, e) {
                        if ("function" != typeof t) throw new on(f);
                        return Iu((function() {
                            t.apply(a, e)
                        }), n)
                    }
                    function mr(t, n, e, i) {
                        var r = -1,
                        a = Se,
                        o = !0,
                        c = t.length,
                        f = [],
                        s = n.length;
                        if (!c) return f;
                        e && (n = Te(n, qe(e))),
                        i ? (a = Ce, o = !1) : n.length >= u && (a = Je, o = !1, n = new Zi(n));
                        t: while (++r < c) {
                            var l = t[r],
                            h = null == e ? l: e(l);
                            if (l = i || 0 !== l ? l: 0, o && h === h) {
                                var d = s;
                                while (d--) if (n[d] === h) continue t;
                                f.push(l)
                            } else a(n, h, i) || f.push(l)
                        }
                        return f
                    }
                    _i.templateSettings = {
                        escape: At,
                        evaluate: Rt,
                        interpolate: Bt,
                        variable: "",
                        imports: {
                            _: _i
                        }
                    },
                    _i.prototype = Ii.prototype,
                    _i.prototype.constructor = _i,
                    ki.prototype = xi(Ii.prototype),
                    ki.prototype.constructor = ki,
                    Si.prototype = xi(Ii.prototype),
                    Si.prototype.constructor = Si,
                    Ai.prototype.clear = Ri,
                    Ai.prototype["delete"] = Bi,
                    Ai.prototype.get = Oi,
                    Ai.prototype.has = zi,
                    Ai.prototype.set = ji,
                    Pi.prototype.clear = Di,
                    Pi.prototype["delete"] = Li,
                    Pi.prototype.get = Fi,
                    Pi.prototype.has = Mi,
                    Pi.prototype.set = $i,
                    Gi.prototype.clear = Ui,
                    Gi.prototype["delete"] = Ni,
                    Gi.prototype.get = Hi,
                    Gi.prototype.has = Wi,
                    Gi.prototype.set = Vi,
                    Zi.prototype.add = Zi.prototype.push = qi,
                    Zi.prototype.has = Yi,
                    Ji.prototype.clear = Ki,
                    Ji.prototype["delete"] = Xi,
                    Ji.prototype.get = Qi,
                    Ji.prototype.has = tr,
                    Ji.prototype.set = nr;
                    var _r = uo(Ar),
                    wr = uo(Rr, !0);
                    function xr(t, n) {
                        var e = !0;
                        return _r(t, (function(t, i, r) {
                            return e = !!n(t, i, r),
                            e
                        })),
                        e
                    }
                    function Ir(t, n, e) {
                        var i = -1,
                        r = t.length;
                        while (++i < r) {
                            var o = t[i],
                            u = n(o);
                            if (null != u && (c === a ? u === u && !Fs(u) : e(u, c))) var c = u,
                            f = o
                        }
                        return f
                    }
                    function kr(t, n, e, i) {
                        var r = t.length;
                        e = Zs(e),
                        e < 0 && (e = -e > r ? 0 : r + e),
                        i = i === a || i > r ? r: Zs(i),
                        i < 0 && (i += r),
                        i = e > i ? 0 : qs(i);
                        while (e < i) t[e++] = n;
                        return t
                    }
                    function Sr(t, n) {
                        var e = [];
                        return _r(t, (function(t, i, r) {
                            n(t, i, r) && e.push(t)
                        })),
                        e
                    }
                    function Cr(t, n, e, i, r) {
                        var a = -1,
                        o = t.length;
                        e || (e = iu),
                        r || (r = []);
                        while (++a < o) {
                            var u = t[a];
                            n > 0 && e(u) ? n > 1 ? Cr(u, n - 1, e, i, r) : Ee(r, u) : i || (r[r.length] = u)
                        }
                        return r
                    }
                    var Tr = co(),
                    Er = co(!0);
                    function Ar(t, n) {
                        return t && Tr(t, n, wl)
                    }
                    function Rr(t, n) {
                        return t && Er(t, n, wl)
                    }
                    function Br(t, n) {
                        return ke(n, (function(n) {
                            return _s(t[n])
                        }))
                    }
                    function Or(t, n) {
                        n = Ga(n, t);
                        var e = 0,
                        i = n.length;
                        while (null != t && e < i) t = t[Au(n[e++])];
                        return e && e == i ? t: a
                    }
                    function zr(t, n, e) {
                        var i = n(t);
                        return us(t) ? i: Ee(i, e(t))
                    }
                    function jr(t) {
                        return null == t ? t === a ? ct: tt: An && An in en(t) ? Vo(t) : yu(t)
                    }
                    function Pr(t, n) {
                        return t > n
                    }
                    function Dr(t, n) {
                        return null != t && hn.call(t, n)
                    }
                    function Lr(t, n) {
                        return null != t && n in en(t)
                    }
                    function Fr(t, n, e) {
                        return t >= Un(n, e) && t < Gn(n, e)
                    }
                    function Mr(t, n, i) {
                        var r = i ? Ce: Se,
                        o = t[0].length,
                        u = t.length,
                        c = u,
                        f = e(u),
                        s = 1 / 0,
                        l = [];
                        while (c--) {
                            var h = t[c];
                            c && n && (h = Te(h, qe(n))),
                            s = Un(h.length, s),
                            f[c] = !i && (n || o >= 120 && h.length >= 120) ? new Zi(c && h) : a
                        }
                        h = t[0];
                        var d = -1,
                        p = f[0];
                        t: while (++d < o && l.length < s) {
                            var v = h[d],
                            g = n ? n(v) : v;
                            if (v = i || 0 !== v ? v: 0, !(p ? Je(p, g) : r(l, g, i))) {
                                c = u;
                                while (--c) {
                                    var y = f[c];
                                    if (! (y ? Je(y, g) : r(t[c], g, i))) continue t
                                }
                                p && p.push(g),
                                l.push(v)
                            }
                        }
                        return l
                    }
                    function $r(t, n, e, i) {
                        return Ar(t, (function(t, r, a) {
                            n(i, e(t), r, a)
                        })),
                        i
                    }
                    function Gr(t, n, e) {
                        n = Ga(n, t),
                        t = mu(t, n);
                        var i = null == t ? t: t[Au(ic(n))];
                        return null == i ? a: me(i, t, e)
                    }
                    function Ur(t) {
                        return ks(t) && jr(t) == N
                    }
                    function Nr(t) {
                        return ks(t) && jr(t) == lt
                    }
                    function Hr(t) {
                        return ks(t) && jr(t) == Z
                    }
                    function Wr(t, n, e, i, r) {
                        return t === n || (null == t || null == n || !ks(t) && !ks(n) ? t !== t && n !== n: Vr(t, n, e, i, Wr, r))
                    }
                    function Vr(t, n, e, i, r, a) {
                        var o = us(t),
                        u = us(n),
                        c = o ? H: Yo(t),
                        f = u ? H: Yo(n);
                        c = c == N ? nt: c,
                        f = f == N ? nt: f;
                        var s = c == nt,
                        l = f == nt,
                        h = c == f;
                        if (h && hs(t)) {
                            if (!hs(n)) return ! 1;
                            o = !0,
                            s = !1
                        }
                        if (h && !s) return a || (a = new Ji),
                        o || Ms(t) ? zo(t, n, e, i, r, a) : jo(t, n, c, e, i, r, a);
                        if (! (e & g)) {
                            var d = s && hn.call(t, "__wrapped__"),
                            p = l && hn.call(n, "__wrapped__");
                            if (d || p) {
                                var v = d ? t.value() : t,
                                y = p ? n.value() : n;
                                return a || (a = new Ji),
                                r(v, y, e, i, a)
                            }
                        }
                        return !! h && (a || (a = new Ji), Po(t, n, e, i, r, a))
                    }
                    function Zr(t) {
                        return ks(t) && Yo(t) == X
                    }
                    function qr(t, n, e, i) {
                        var r = e.length,
                        o = r,
                        u = !i;
                        if (null == t) return ! o;
                        t = en(t);
                        while (r--) {
                            var c = e[r];
                            if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return ! 1
                        }
                        while (++r < o) {
                            c = e[r];
                            var f = c[0],
                            s = t[f],
                            l = c[1];
                            if (u && c[2]) {
                                if (s === a && !(f in t)) return ! 1
                            } else {
                                var h = new Ji;
                                if (i) var d = i(s, l, f, t, n, h);
                                if (! (d === a ? Wr(l, s, g | y, i, h) : d)) return ! 1
                            }
                        }
                        return ! 0
                    }
                    function Yr(t) {
                        if (!Is(t) || fu(t)) return ! 1;
                        var n = _s(t) ? bn: Yt;
                        return n.test(Ru(t))
                    }
                    function Jr(t) {
                        return ks(t) && jr(t) == rt
                    }
                    function Kr(t) {
                        return ks(t) && Yo(t) == at
                    }
                    function Xr(t) {
                        return ks(t) && xs(t.length) && !!Kn[jr(t)]
                    }
                    function Qr(t) {
                        return "function" == typeof t ? t: null == t ? Ah: "object" == typeof t ? us(t) ? aa(t[0], t[1]) : ra(t) : Uh(t)
                    }
                    function ta(t) {
                        if (!lu(t)) return $n(t);
                        var n = [];
                        for (var e in en(t)) hn.call(t, e) && "constructor" != e && n.push(e);
                        return n
                    }
                    function na(t) {
                        if (!Is(t)) return gu(t);
                        var n = lu(t),
                        e = [];
                        for (var i in t)("constructor" != i || !n && hn.call(t, i)) && e.push(i);
                        return e
                    }
                    function ea(t, n) {
                        return t < n
                    }
                    function ia(t, n) {
                        var i = -1,
                        r = fs(t) ? e(t.length) : [];
                        return _r(t, (function(t, e, a) {
                            r[++i] = n(t, e, a)
                        })),
                        r
                    }
                    function ra(t) {
                        var n = Ho(t);
                        return 1 == n.length && n[0][2] ? du(n[0][0], n[0][1]) : function(e) {
                            return e === t || qr(e, t, n)
                        }
                    }
                    function aa(t, n) {
                        return ou(t) && hu(n) ? du(Au(t), n) : function(e) {
                            var i = vl(e, t);
                            return i === a && i === n ? yl(e, t) : Wr(n, i, g | y)
                        }
                    }
                    function oa(t, n, e, i, r) {
                        t !== n && Tr(n, (function(o, u) {
                            if (r || (r = new Ji), Is(o)) ua(t, n, u, e, oa, i, r);
                            else {
                                var c = i ? i(wu(t, u), o, u + "", t, n, r) : a;
                                c === a && (c = o),
                                or(t, u, c)
                            }
                        }), xl)
                    }
                    function ua(t, n, e, i, r, o, u) {
                        var c = wu(t, e),
                        f = wu(n, e),
                        s = u.get(f);
                        if (s) or(t, e, s);
                        else {
                            var l = o ? o(c, f, e + "", t, n, u) : a,
                            h = l === a;
                            if (h) {
                                var d = us(f),
                                p = !d && hs(f),
                                v = !d && !p && Ms(f);
                                l = f,
                                d || p || v ? us(c) ? l = c: ss(c) ? l = no(c) : p ? (h = !1, l = Wa(f, !0)) : v ? (h = !1, l = Ja(f, !0)) : l = [] : zs(f) || os(f) ? (l = c, os(c) ? l = Js(c) : Is(c) && !_s(c) || (l = tu(f))) : h = !1
                            }
                            h && (u.set(f, l), r(l, f, i, o, u), u["delete"](f)),
                            or(t, e, l)
                        }
                    }
                    function ca(t, n) {
                        var e = t.length;
                        if (e) return n += n < 0 ? e: 0,
                        ru(n, e) ? t[n] : a
                    }
                    function fa(t, n, e) {
                        var i = -1;
                        n = Te(n.length ? n: [Ah], qe(Uo()));
                        var r = ia(t, (function(t, e, r) {
                            var a = Te(n, (function(n) {
                                return n(t)
                            }));
                            return {
                                criteria: a,
                                index: ++i,
                                value: t
                            }
                        }));
                        return He(r, (function(t, n) {
                            return Xa(t, n, e)
                        }))
                    }
                    function sa(t, n) {
                        return la(t, n, (function(n, e) {
                            return yl(t, e)
                        }))
                    }
                    function la(t, n, e) {
                        var i = -1,
                        r = n.length,
                        a = {};
                        while (++i < r) {
                            var o = n[i],
                            u = Or(t, o);
                            e(u, o) && wa(a, Ga(o, t), u)
                        }
                        return a
                    }
                    function ha(t) {
                        return function(n) {
                            return Or(n, t)
                        }
                    }
                    function da(t, n, e, i) {
                        var r = i ? Fe: Le,
                        a = -1,
                        o = n.length,
                        u = t;
                        t === n && (n = no(n)),
                        e && (u = Te(t, qe(e)));
                        while (++a < o) {
                            var c = 0,
                            f = n[a],
                            s = e ? e(f) : f;
                            while ((c = r(u, s, c, i)) > -1) u !== t && Cn.call(u, c, 1),
                            Cn.call(t, c, 1)
                        }
                        return t
                    }
                    function pa(t, n) {
                        var e = t ? n.length: 0,
                        i = e - 1;
                        while (e--) {
                            var r = n[e];
                            if (e == i || r !== a) {
                                var a = r;
                                ru(r) ? Cn.call(t, r, 1) : za(t, r)
                            }
                        }
                        return t
                    }
                    function va(t, n) {
                        return t + Pn(Zn() * (n - t + 1))
                    }
                    function ga(t, n, i, r) {
                        var a = -1,
                        o = Gn(jn((n - t) / (i || 1)), 0),
                        u = e(o);
                        while (o--) u[r ? o: ++a] = t,
                        t += i;
                        return u
                    }
                    function ya(t, n) {
                        var e = "";
                        if (!t || n < 1 || n > D) return e;
                        do {
                            n % 2 && (e += t), n = Pn(n / 2), n && (t += t)
                        } while ( n );
                        return e
                    }
                    function ba(t, n) {
                        return ku(bu(t, n, Ah), t + "")
                    }
                    function ma(t) {
                        return ir($l(t))
                    }
                    function _a(t, n) {
                        var e = $l(t);
                        return Tu(e, pr(n, 0, e.length))
                    }
                    function wa(t, n, e, i) {
                        if (!Is(t)) return t;
                        n = Ga(n, t);
                        var r = -1,
                        o = n.length,
                        u = o - 1,
                        c = t;
                        while (null != c && ++r < o) {
                            var f = Au(n[r]),
                            s = e;
                            if (r != u) {
                                var l = c[f];
                                s = i ? i(l, f, c) : a,
                                s === a && (s = Is(l) ? l: ru(n[r + 1]) ? [] : {})
                            }
                            ur(c, f, s),
                            c = c[f]
                        }
                        return t
                    }
                    var xa = ce ?
                    function(t, n) {
                        return ce.set(t, n),
                        t
                    }: Ah,
                    Ia = Rn ?
                    function(t, n) {
                        return Rn(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Sh(n),
                            writable: !0
                        })
                    }: Ah;
                    function ka(t) {
                        return Tu($l(t))
                    }
                    function Sa(t, n, i) {
                        var r = -1,
                        a = t.length;
                        n < 0 && (n = -n > a ? 0 : a + n),
                        i = i > a ? a: i,
                        i < 0 && (i += a),
                        a = n > i ? 0 : i - n >>> 0,
                        n >>>= 0;
                        var o = e(a);
                        while (++r < a) o[r] = t[r + n];
                        return o
                    }
                    function Ca(t, n) {
                        var e;
                        return _r(t, (function(t, i, r) {
                            return e = n(t, i, r),
                            !e
                        })),
                        !!e
                    }
                    function Ta(t, n, e) {
                        var i = 0,
                        r = null == t ? i: t.length;
                        if ("number" == typeof n && n === n && r <= G) {
                            while (i < r) {
                                var a = i + r >>> 1,
                                o = t[a];
                                null !== o && !Fs(o) && (e ? o <= n: o < n) ? i = a + 1 : r = a
                            }
                            return r
                        }
                        return Ea(t, n, Ah, e)
                    }
                    function Ea(t, n, e, i) {
                        n = e(n);
                        var r = 0,
                        o = null == t ? 0 : t.length,
                        u = n !== n,
                        c = null === n,
                        f = Fs(n),
                        s = n === a;
                        while (r < o) {
                            var l = Pn((r + o) / 2),
                            h = e(t[l]),
                            d = h !== a,
                            p = null === h,
                            v = h === h,
                            g = Fs(h);
                            if (u) var y = i || v;
                            else y = s ? v && (i || d) : c ? v && d && (i || !p) : f ? v && d && !p && (i || !g) : !p && !g && (i ? h <= n: h < n);
                            y ? r = l + 1 : o = l
                        }
                        return Un(o, $)
                    }
                    function Aa(t, n) {
                        var e = -1,
                        i = t.length,
                        r = 0,
                        a = [];
                        while (++e < i) {
                            var o = t[e],
                            u = n ? n(o) : o;
                            if (!e || !is(u, c)) {
                                var c = u;
                                a[r++] = 0 === o ? 0 : o
                            }
                        }
                        return a
                    }
                    function Ra(t) {
                        return "number" == typeof t ? t: Fs(t) ? F: +t
                    }
                    function Ba(t) {
                        if ("string" == typeof t) return t;
                        if (us(t)) return Te(t, Ba) + "";
                        if (Fs(t)) return bi ? bi.call(t) : "";
                        var n = t + "";
                        return "0" == n && 1 / t == -P ? "-0": n
                    }
                    function Oa(t, n, e) {
                        var i = -1,
                        r = Se,
                        a = t.length,
                        o = !0,
                        c = [],
                        f = c;
                        if (e) o = !1,
                        r = Ce;
                        else if (a >= u) {
                            var s = n ? null: To(t);
                            if (s) return si(s);
                            o = !1,
                            r = Je,
                            f = new Zi
                        } else f = n ? [] : c;
                        t: while (++i < a) {
                            var l = t[i],
                            h = n ? n(l) : l;
                            if (l = e || 0 !== l ? l: 0, o && h === h) {
                                var d = f.length;
                                while (d--) if (f[d] === h) continue t;
                                n && f.push(h),
                                c.push(l)
                            } else r(f, h, e) || (f !== c && f.push(h), c.push(l))
                        }
                        return c
                    }
                    function za(t, n) {
                        return n = Ga(n, t),
                        t = mu(t, n),
                        null == t || delete t[Au(ic(n))]
                    }
                    function ja(t, n, e, i) {
                        return wa(t, n, e(Or(t, n)), i)
                    }
                    function Pa(t, n, e, i) {
                        var r = t.length,
                        a = i ? r: -1;
                        while ((i ? a--:++a < r) && n(t[a], a, t));
                        return e ? Sa(t, i ? 0 : a, i ? a + 1 : r) : Sa(t, i ? a + 1 : 0, i ? r: a)
                    }
                    function Da(t, n) {
                        var e = t;
                        return e instanceof Si && (e = e.value()),
                        Ae(n, (function(t, n) {
                            return n.func.apply(n.thisArg, Ee([t], n.args))
                        }), e)
                    }
                    function La(t, n, i) {
                        var r = t.length;
                        if (r < 2) return r ? Oa(t[0]) : [];
                        var a = -1,
                        o = e(r);
                        while (++a < r) {
                            var u = t[a],
                            c = -1;
                            while (++c < r) c != a && (o[a] = mr(o[a] || u, t[c], n, i))
                        }
                        return Oa(Cr(o, 1), n, i)
                    }
                    function Fa(t, n, e) {
                        var i = -1,
                        r = t.length,
                        o = n.length,
                        u = {};
                        while (++i < r) {
                            var c = i < o ? n[i] : a;
                            e(u, t[i], c)
                        }
                        return u
                    }
                    function Ma(t) {
                        return ss(t) ? t: []
                    }
                    function $a(t) {
                        return "function" == typeof t ? t: Ah
                    }
                    function Ga(t, n) {
                        return us(t) ? t: ou(t, n) ? [t] : Eu(Xs(t))
                    }
                    var Ua = ba;
                    function Na(t, n, e) {
                        var i = t.length;
                        return e = e === a ? i: e,
                        !n && e >= i ? t: Sa(t, n, e)
                    }
                    var Ha = Bn ||
                    function(t) {
                        return ue.clearTimeout(t)
                    };
                    function Wa(t, n) {
                        if (n) return t.slice();
                        var e = t.length,
                        i = xn ? xn(e) : new t.constructor(e);
                        return t.copy(i),
                        i
                    }
                    function Va(t) {
                        var n = new t.constructor(t.byteLength);
                        return new wn(n).set(new wn(t)),
                        n
                    }
                    function Za(t, n) {
                        var e = n ? Va(t.buffer) : t.buffer;
                        return new t.constructor(e, t.byteOffset, t.byteLength)
                    }
                    function qa(t) {
                        var n = new t.constructor(t.source, Vt.exec(t));
                        return n.lastIndex = t.lastIndex,
                        n
                    }
                    function Ya(t) {
                        return yi ? en(yi.call(t)) : {}
                    }
                    function Ja(t, n) {
                        var e = n ? Va(t.buffer) : t.buffer;
                        return new t.constructor(e, t.byteOffset, t.length)
                    }
                    function Ka(t, n) {
                        if (t !== n) {
                            var e = t !== a,
                            i = null === t,
                            r = t === t,
                            o = Fs(t),
                            u = n !== a,
                            c = null === n,
                            f = n === n,
                            s = Fs(n);
                            if (!c && !s && !o && t > n || o && u && f && !c && !s || i && u && f || !e && f || !r) return 1;
                            if (!i && !o && !s && t < n || s && e && r && !i && !o || c && e && r || !u && r || !f) return - 1
                        }
                        return 0
                    }
                    function Xa(t, n, e) {
                        var i = -1,
                        r = t.criteria,
                        a = n.criteria,
                        o = r.length,
                        u = e.length;
                        while (++i < o) {
                            var c = Ka(r[i], a[i]);
                            if (c) {
                                if (i >= u) return c;
                                var f = e[i];
                                return c * ("desc" == f ? -1 : 1)
                            }
                        }
                        return t.index - n.index
                    }
                    function Qa(t, n, i, r) {
                        var a = -1,
                        o = t.length,
                        u = i.length,
                        c = -1,
                        f = n.length,
                        s = Gn(o - u, 0),
                        l = e(f + s),
                        h = !r;
                        while (++c < f) l[c] = n[c];
                        while (++a < u)(h || a < o) && (l[i[a]] = t[a]);
                        while (s--) l[c++] = t[a++];
                        return l
                    }
                    function to(t, n, i, r) {
                        var a = -1,
                        o = t.length,
                        u = -1,
                        c = i.length,
                        f = -1,
                        s = n.length,
                        l = Gn(o - c, 0),
                        h = e(l + s),
                        d = !r;
                        while (++a < l) h[a] = t[a];
                        var p = a;
                        while (++f < s) h[p + f] = n[f];
                        while (++u < c)(d || a < o) && (h[p + i[u]] = t[a++]);
                        return h
                    }
                    function no(t, n) {
                        var i = -1,
                        r = t.length;
                        n || (n = e(r));
                        while (++i < r) n[i] = t[i];
                        return n
                    }
                    function eo(t, n, e, i) {
                        var r = !e;
                        e || (e = {});
                        var o = -1,
                        u = n.length;
                        while (++o < u) {
                            var c = n[o],
                            f = i ? i(e[c], t[c], c, e, t) : a;
                            f === a && (f = t[c]),
                            r ? hr(e, c, f) : ur(e, c, f)
                        }
                        return e
                    }
                    function io(t, n) {
                        return eo(t, Zo(t), n)
                    }
                    function ro(t, n) {
                        return eo(t, qo(t), n)
                    }
                    function ao(t, n) {
                        return function(e, i) {
                            var r = us(e) ? _e: fr,
                            a = n ? n() : {};
                            return r(e, t, Uo(i, 2), a)
                        }
                    }
                    function oo(t) {
                        return ba((function(n, e) {
                            var i = -1,
                            r = e.length,
                            o = r > 1 ? e[r - 1] : a,
                            u = r > 2 ? e[2] : a;
                            o = t.length > 3 && "function" == typeof o ? (r--, o) : a,
                            u && au(e[0], e[1], u) && (o = r < 3 ? a: o, r = 1),
                            n = en(n);
                            while (++i < r) {
                                var c = e[i];
                                c && t(n, c, i, o)
                            }
                            return n
                        }))
                    }
                    function uo(t, n) {
                        return function(e, i) {
                            if (null == e) return e;
                            if (!fs(e)) return t(e, i);
                            var r = e.length,
                            a = n ? r: -1,
                            o = en(e);
                            while (n ? a--:++a < r) if (!1 === i(o[a], a, o)) break;
                            return e
                        }
                    }
                    function co(t) {
                        return function(n, e, i) {
                            var r = -1,
                            a = en(n),
                            o = i(n),
                            u = o.length;
                            while (u--) {
                                var c = o[t ? u: ++r];
                                if (!1 === e(a[c], c, a)) break
                            }
                            return n
                        }
                    }
                    function fo(t, n, e) {
                        var i = n & b,
                        r = ho(t);
                        function a() {
                            var n = this && this !== ue && this instanceof a ? r: t;
                            return n.apply(i ? e: this, arguments)
                        }
                        return a
                    }
                    function so(t) {
                        return function(n) {
                            n = Xs(n);
                            var e = ri(n) ? vi(n) : a,
                            i = e ? e[0] : n.charAt(0),
                            r = e ? Na(e, 1).join("") : n.slice(1);
                            return i[t]() + r
                        }
                    }
                    function lo(t) {
                        return function(n) {
                            return Ae(_h(Zl(n).replace(Nn, "")), t, "")
                        }
                    }
                    function ho(t) {
                        return function() {
                            var n = arguments;
                            switch (n.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(n[0]);
                            case 2:
                                return new t(n[0], n[1]);
                            case 3:
                                return new t(n[0], n[1], n[2]);
                            case 4:
                                return new t(n[0], n[1], n[2], n[3]);
                            case 5:
                                return new t(n[0], n[1], n[2], n[3], n[4]);
                            case 6:
                                return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                            case 7:
                                return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                            }
                            var e = xi(t.prototype),
                            i = t.apply(e, n);
                            return Is(i) ? i: e
                        }
                    }
                    function po(t, n, i) {
                        var r = ho(t);
                        function o() {
                            var u = arguments.length,
                            c = e(u),
                            f = u,
                            s = Go(o);
                            while (f--) c[f] = arguments[f];
                            var l = u < 3 && c[0] !== s && c[u - 1] !== s ? [] : fi(c, s);
                            if (u -= l.length, u < i) return So(t, n, yo, o.placeholder, a, c, l, a, a, i - u);
                            var h = this && this !== ue && this instanceof o ? r: t;
                            return me(h, this, c)
                        }
                        return o
                    }
                    function vo(t) {
                        return function(n, e, i) {
                            var r = en(n);
                            if (!fs(n)) {
                                var o = Uo(e, 3);
                                n = wl(n),
                                e = function(t) {
                                    return o(r[t], t, r)
                                }
                            }
                            var u = t(n, e, i);
                            return u > -1 ? r[o ? n[u] : u] : a
                        }
                    }
                    function go(t) {
                        return Do((function(n) {
                            var e = n.length,
                            i = e,
                            r = ki.prototype.thru;
                            t && n.reverse();
                            while (i--) {
                                var o = n[i];
                                if ("function" != typeof o) throw new on(f);
                                if (r && !u && "wrapper" == $o(o)) var u = new ki([], !0)
                            }
                            i = u ? i: e;
                            while (++i < e) {
                                o = n[i];
                                var c = $o(o),
                                s = "wrapper" == c ? Mo(o) : a;
                                u = s && cu(s[0]) && s[1] == (S | w | I | C) && !s[4].length && 1 == s[9] ? u[$o(s[0])].apply(u, s[3]) : 1 == o.length && cu(o) ? u[c]() : u.thru(o)
                            }
                            return function() {
                                var t = arguments,
                                i = t[0];
                                if (u && 1 == t.length && us(i)) return u.plant(i).value();
                                var r = 0,
                                a = e ? n[r].apply(this, t) : i;
                                while (++r < e) a = n[r].call(this, a);
                                return a
                            }
                        }))
                    }
                    function yo(t, n, i, r, o, u, c, f, s, l) {
                        var h = n & S,
                        d = n & b,
                        p = n & m,
                        v = n & (w | x),
                        g = n & T,
                        y = p ? a: ho(t);
                        function _() {
                            var a = arguments.length,
                            b = e(a),
                            m = a;
                            while (m--) b[m] = arguments[m];
                            if (v) var w = Go(_),
                            x = Qe(b, w);
                            if (r && (b = Qa(b, r, o, v)), u && (b = to(b, u, c, v)), a -= x, v && a < l) {
                                var I = fi(b, w);
                                return So(t, n, yo, _.placeholder, i, b, I, f, s, l - a)
                            }
                            var k = d ? i: this,
                            S = p ? k[t] : t;
                            return a = b.length,
                            f ? b = _u(b, f) : g && a > 1 && b.reverse(),
                            h && s < a && (b.length = s),
                            this && this !== ue && this instanceof _ && (S = y || ho(S)),
                            S.apply(k, b)
                        }
                        return _
                    }
                    function bo(t, n) {
                        return function(e, i) {
                            return $r(e, t, n(i), {})
                        }
                    }
                    function mo(t, n) {
                        return function(e, i) {
                            var r;
                            if (e === a && i === a) return n;
                            if (e !== a && (r = e), i !== a) {
                                if (r === a) return i;
                                "string" == typeof e || "string" == typeof i ? (e = Ba(e), i = Ba(i)) : (e = Ra(e), i = Ra(i)),
                                r = t(e, i)
                            }
                            return r
                        }
                    }
                    function _o(t) {
                        return Do((function(n) {
                            return n = Te(n, qe(Uo())),
                            ba((function(e) {
                                var i = this;
                                return t(n, (function(t) {
                                    return me(t, i, e)
                                }))
                            }))
                        }))
                    }
                    function wo(t, n) {
                        n = n === a ? " ": Ba(n);
                        var e = n.length;
                        if (e < 2) return e ? ya(n, t) : n;
                        var i = ya(n, jn(t / pi(n)));
                        return ri(n) ? Na(vi(i), 0, t).join("") : i.slice(0, t)
                    }
                    function xo(t, n, i, r) {
                        var a = n & b,
                        o = ho(t);
                        function u() {
                            var n = -1,
                            c = arguments.length,
                            f = -1,
                            s = r.length,
                            l = e(s + c),
                            h = this && this !== ue && this instanceof u ? o: t;
                            while (++f < s) l[f] = r[f];
                            while (c--) l[f++] = arguments[++n];
                            return me(h, a ? i: this, l)
                        }
                        return u
                    }
                    function Io(t) {
                        return function(n, e, i) {
                            return i && "number" != typeof i && au(n, e, i) && (e = i = a),
                            n = Vs(n),
                            e === a ? (e = n, n = 0) : e = Vs(e),
                            i = i === a ? n < e ? 1 : -1 : Vs(i),
                            ga(n, e, i, t)
                        }
                    }
                    function ko(t) {
                        return function(n, e) {
                            return "string" == typeof n && "string" == typeof e || (n = Ys(n), e = Ys(e)),
                            t(n, e)
                        }
                    }
                    function So(t, n, e, i, r, o, u, c, f, s) {
                        var l = n & w,
                        h = l ? u: a,
                        d = l ? a: u,
                        p = l ? o: a,
                        v = l ? a: o;
                        n |= l ? I: k,
                        n &= ~ (l ? k: I),
                        n & _ || (n &= ~ (b | m));
                        var g = [t, n, r, p, h, v, d, c, f, s],
                        y = e.apply(a, g);
                        return cu(t) && xu(y, g),
                        y.placeholder = i,
                        Su(y, t, n)
                    }
                    function Co(t) {
                        var n = nn[t];
                        return function(t, e) {
                            if (t = Ys(t), e = null == e ? 0 : Un(Zs(e), 292), e && Fn(t)) {
                                var i = (Xs(t) + "e").split("e"),
                                r = n(i[0] + "e" + ( + i[1] + e));
                                return i = (Xs(r) + "e").split("e"),
                                +(i[0] + "e" + ( + i[1] - e))
                            }
                            return n(t)
                        }
                    }
                    var To = ee && 1 / si(new ee([, -0]))[1] == P ?
                    function(t) {
                        return new ee(t)
                    }: Lh;
                    function Eo(t) {
                        return function(n) {
                            var e = Yo(n);
                            return e == X ? ui(n) : e == at ? li(n) : Ze(n, t(n))
                        }
                    }
                    function Ao(t, n, e, i, r, o, u, c) {
                        var s = n & m;
                        if (!s && "function" != typeof t) throw new on(f);
                        var l = i ? i.length: 0;
                        if (l || (n &= ~ (I | k), i = r = a), u = u === a ? u: Gn(Zs(u), 0), c = c === a ? c: Zs(c), l -= r ? r.length: 0, n & k) {
                            var h = i,
                            d = r;
                            i = r = a
                        }
                        var p = s ? a: Mo(t),
                        v = [t, n, e, i, r, h, d, o, u, c];
                        if (p && vu(v, p), t = v[0], n = v[1], e = v[2], i = v[3], r = v[4], c = v[9] = v[9] === a ? s ? 0 : t.length: Gn(v[9] - l, 0), !c && n & (w | x) && (n &= ~ (w | x)), n && n != b) g = n == w || n == x ? po(t, n, c) : n != I && n != (b | I) || r.length ? yo.apply(a, v) : xo(t, n, e, i);
                        else var g = fo(t, n, e);
                        var y = p ? xa: xu;
                        return Su(y(g, v), t, n)
                    }
                    function Ro(t, n, e, i) {
                        return t === a || is(t, fn[e]) && !hn.call(i, e) ? n: t
                    }
                    function Bo(t, n, e, i, r, o) {
                        return Is(t) && Is(n) && (o.set(n, t), oa(t, n, a, Bo, o), o["delete"](n)),
                        t
                    }
                    function Oo(t) {
                        return zs(t) ? a: t
                    }
                    function zo(t, n, e, i, r, o) {
                        var u = e & g,
                        c = t.length,
                        f = n.length;
                        if (c != f && !(u && f > c)) return ! 1;
                        var s = o.get(t);
                        if (s && o.get(n)) return s == n;
                        var l = -1,
                        h = !0,
                        d = e & y ? new Zi: a;
                        o.set(t, n),
                        o.set(n, t);
                        while (++l < c) {
                            var p = t[l],
                            v = n[l];
                            if (i) var b = u ? i(v, p, l, n, t, o) : i(p, v, l, t, n, o);
                            if (b !== a) {
                                if (b) continue;
                                h = !1;
                                break
                            }
                            if (d) {
                                if (!Be(n, (function(t, n) {
                                    if (!Je(d, n) && (p === t || r(p, t, e, i, o))) return d.push(n)
                                }))) {
                                    h = !1;
                                    break
                                }
                            } else if (p !== v && !r(p, v, e, i, o)) {
                                h = !1;
                                break
                            }
                        }
                        return o["delete"](t),
                        o["delete"](n),
                        h
                    }
                    function jo(t, n, e, i, r, a, o) {
                        switch (e) {
                        case ht:
                            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return ! 1;
                            t = t.buffer,
                            n = n.buffer;
                        case lt:
                            return ! (t.byteLength != n.byteLength || !a(new wn(t), new wn(n)));
                        case V:
                        case Z:
                        case Q:
                            return is( + t, +n);
                        case Y:
                            return t.name == n.name && t.message == n.message;
                        case rt:
                        case ot:
                            return t == n + "";
                        case X:
                            var u = ui;
                        case at:
                            var c = i & g;
                            if (u || (u = si), t.size != n.size && !c) return ! 1;
                            var f = o.get(t);
                            if (f) return f == n;
                            i |= y,
                            o.set(t, n);
                            var s = zo(u(t), u(n), i, r, a, o);
                            return o["delete"](t),
                            s;
                        case ut:
                            if (yi) return yi.call(t) == yi.call(n)
                        }
                        return ! 1
                    }
                    function Po(t, n, e, i, r, o) {
                        var u = e & g,
                        c = Lo(t),
                        f = c.length,
                        s = Lo(n),
                        l = s.length;
                        if (f != l && !u) return ! 1;
                        var h = f;
                        while (h--) {
                            var d = c[h];
                            if (! (u ? d in n: hn.call(n, d))) return ! 1
                        }
                        var p = o.get(t);
                        if (p && o.get(n)) return p == n;
                        var v = !0;
                        o.set(t, n),
                        o.set(n, t);
                        var y = u;
                        while (++h < f) {
                            d = c[h];
                            var b = t[d],
                            m = n[d];
                            if (i) var _ = u ? i(m, b, d, n, t, o) : i(b, m, d, t, n, o);
                            if (! (_ === a ? b === m || r(b, m, e, i, o) : _)) {
                                v = !1;
                                break
                            }
                            y || (y = "constructor" == d)
                        }
                        if (v && !y) {
                            var w = t.constructor,
                            x = n.constructor;
                            w == x || !("constructor" in t) || !("constructor" in n) || "function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x || (v = !1)
                        }
                        return o["delete"](t),
                        o["delete"](n),
                        v
                    }
                    function Do(t) {
                        return ku(bu(t, a, Vu), t + "")
                    }
                    function Lo(t) {
                        return zr(t, wl, Zo)
                    }
                    function Fo(t) {
                        return zr(t, xl, qo)
                    }
                    var Mo = ce ?
                    function(t) {
                        return ce.get(t)
                    }: Lh;
                    function $o(t) {
                        var n = t.name + "",
                        e = fe[n],
                        i = hn.call(fe, n) ? e.length: 0;
                        while (i--) {
                            var r = e[i],
                            a = r.func;
                            if (null == a || a == t) return r.name
                        }
                        return n
                    }
                    function Go(t) {
                        var n = hn.call(_i, "placeholder") ? _i: t;
                        return n.placeholder
                    }
                    function Uo() {
                        var t = _i.iteratee || Rh;
                        return t = t === Rh ? Qr: t,
                        arguments.length ? t(arguments[0], arguments[1]) : t
                    }
                    function No(t, n) {
                        var e = t.__data__;
                        return uu(n) ? e["string" == typeof n ? "string": "hash"] : e.map
                    }
                    function Ho(t) {
                        var n = wl(t),
                        e = n.length;
                        while (e--) {
                            var i = n[e],
                            r = t[i];
                            n[e] = [i, r, hu(r)]
                        }
                        return n
                    }
                    function Wo(t, n) {
                        var e = ii(t, n);
                        return Yr(e) ? e: a
                    }
                    function Vo(t) {
                        var n = hn.call(t, An),
                        e = t[An];
                        try {
                            t[An] = a;
                            var i = !0
                        } catch(o) {}
                        var r = vn.call(t);
                        return i && (n ? t[An] = e: delete t[An]),
                        r
                    }
                    var Zo = Dn ?
                    function(t) {
                        return null == t ? [] : (t = en(t), ke(Dn(t), (function(n) {
                            return Sn.call(t, n)
                        })))
                    }: Vh,
                    qo = Dn ?
                    function(t) {
                        var n = [];
                        while (t) Ee(n, Zo(t)),
                        t = In(t);
                        return n
                    }: Vh,
                    Yo = jr;
                    function Jo(t, n, e) {
                        var i = -1,
                        r = e.length;
                        while (++i < r) {
                            var a = e[i],
                            o = a.size;
                            switch (a.type) {
                            case "drop":
                                t += o;
                                break;
                            case "dropRight":
                                n -= o;
                                break;
                            case "take":
                                n = Un(n, t + o);
                                break;
                            case "takeRight":
                                t = Gn(t, n - o);
                                break
                            }
                        }
                        return {
                            start: t,
                            end: n
                        }
                    }
                    function Ko(t) {
                        var n = t.match(Gt);
                        return n ? n[1].split(Ut) : []
                    }
                    function Xo(t, n, e) {
                        n = Ga(n, t);
                        var i = -1,
                        r = n.length,
                        a = !1;
                        while (++i < r) {
                            var o = Au(n[i]);
                            if (! (a = null != t && e(t, o))) break;
                            t = t[o]
                        }
                        return a || ++i != r ? a: (r = null == t ? 0 : t.length, !!r && xs(r) && ru(o, r) && (us(t) || os(t)))
                    }
                    function Qo(t) {
                        var n = t.length,
                        e = new t.constructor(n);
                        return n && "string" == typeof t[0] && hn.call(t, "index") && (e.index = t.index, e.input = t.input),
                        e
                    }
                    function tu(t) {
                        return "function" != typeof t.constructor || lu(t) ? {}: xi(In(t))
                    }
                    function nu(t, n, e) {
                        var i = t.constructor;
                        switch (n) {
                        case lt:
                            return Va(t);
                        case V:
                        case Z:
                            return new i( + t);
                        case ht:
                            return Za(t, e);
                        case dt:
                        case pt:
                        case vt:
                        case gt:
                        case yt:
                        case bt:
                        case mt:
                        case _t:
                        case wt:
                            return Ja(t, e);
                        case X:
                            return new i;
                        case Q:
                        case ot:
                            return new i(t);
                        case rt:
                            return qa(t);
                        case at:
                            return new i;
                        case ut:
                            return Ya(t)
                        }
                    }
                    function eu(t, n) {
                        var e = n.length;
                        if (!e) return t;
                        var i = e - 1;
                        return n[i] = (e > 1 ? "& ": "") + n[i],
                        n = n.join(e > 2 ? ", ": " "),
                        t.replace($t, "{\n/* [wrapped with " + n + "] */\n")
                    }
                    function iu(t) {
                        return us(t) || os(t) || !!(Tn && t && t[Tn])
                    }
                    function ru(t, n) {
                        var e = typeof t;
                        return n = null == n ? D: n,
                        !!n && ("number" == e || "symbol" != e && Kt.test(t)) && t > -1 && t % 1 == 0 && t < n
                    }
                    function au(t, n, e) {
                        if (!Is(e)) return ! 1;
                        var i = typeof n;
                        return !! ("number" == i ? fs(e) && ru(n, e.length) : "string" == i && n in e) && is(e[n], t)
                    }
                    function ou(t, n) {
                        if (us(t)) return ! 1;
                        var e = typeof t;
                        return ! ("number" != e && "symbol" != e && "boolean" != e && null != t && !Fs(t)) || (zt.test(t) || !Ot.test(t) || null != n && t in en(n))
                    }
                    function uu(t) {
                        var n = typeof t;
                        return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t: null === t
                    }
                    function cu(t) {
                        var n = $o(t),
                        e = _i[n];
                        if ("function" != typeof e || !(n in Si.prototype)) return ! 1;
                        if (t === e) return ! 0;
                        var i = Mo(e);
                        return !! i && t === i[0]
                    }
                    function fu(t) {
                        return !! pn && pn in t
                    } (Qn && Yo(new Qn(new ArrayBuffer(1))) != ht || te && Yo(new te) != X || ne && Yo(ne.resolve()) != et || ee && Yo(new ee) != at || ae && Yo(new ae) != ft) && (Yo = function(t) {
                        var n = jr(t),
                        e = n == nt ? t.constructor: a,
                        i = e ? Ru(e) : "";
                        if (i) switch (i) {
                        case le:
                            return ht;
                        case he:
                            return X;
                        case Oe:
                            return et;
                        case ze:
                            return at;
                        case Ue:
                            return ft
                        }
                        return n
                    });
                    var su = sn ? _s: Zh;
                    function lu(t) {
                        var n = t && t.constructor,
                        e = "function" == typeof n && n.prototype || fn;
                        return t === e
                    }
                    function hu(t) {
                        return t === t && !Is(t)
                    }
                    function du(t, n) {
                        return function(e) {
                            return null != e && (e[t] === n && (n !== a || t in en(e)))
                        }
                    }
                    function pu(t) {
                        var n = Mf(t, (function(t) {
                            return e.size === l && e.clear(),
                            t
                        })),
                        e = n.cache;
                        return n
                    }
                    function vu(t, n) {
                        var e = t[1],
                        i = n[1],
                        r = e | i,
                        a = r < (b | m | S),
                        o = i == S && e == w || i == S && e == C && t[7].length <= n[8] || i == (S | C) && n[7].length <= n[8] && e == w;
                        if (!a && !o) return t;
                        i & b && (t[2] = n[2], r |= e & b ? 0 : _);
                        var u = n[3];
                        if (u) {
                            var c = t[3];
                            t[3] = c ? Qa(c, u, n[4]) : u,
                            t[4] = c ? fi(t[3], h) : n[4]
                        }
                        return u = n[5],
                        u && (c = t[5], t[5] = c ? to(c, u, n[6]) : u, t[6] = c ? fi(t[5], h) : n[6]),
                        u = n[7],
                        u && (t[7] = u),
                        i & S && (t[8] = null == t[8] ? n[8] : Un(t[8], n[8])),
                        null == t[9] && (t[9] = n[9]),
                        t[0] = n[0],
                        t[1] = r,
                        t
                    }
                    function gu(t) {
                        var n = [];
                        if (null != t) for (var e in en(t)) n.push(e);
                        return n
                    }
                    function yu(t) {
                        return vn.call(t)
                    }
                    function bu(t, n, i) {
                        return n = Gn(n === a ? t.length - 1 : n, 0),
                        function() {
                            var r = arguments,
                            a = -1,
                            o = Gn(r.length - n, 0),
                            u = e(o);
                            while (++a < o) u[a] = r[n + a];
                            a = -1;
                            var c = e(n + 1);
                            while (++a < n) c[a] = r[a];
                            return c[n] = i(u),
                            me(t, this, c)
                        }
                    }
                    function mu(t, n) {
                        return n.length < 2 ? t: Or(t, Sa(n, 0, -1))
                    }
                    function _u(t, n) {
                        var e = t.length,
                        i = Un(n.length, e),
                        r = no(t);
                        while (i--) {
                            var o = n[i];
                            t[i] = ru(o, e) ? r[o] : a
                        }
                        return t
                    }
                    function wu(t, n) {
                        if (("constructor" !== n || "function" !== typeof t[n]) && "__proto__" != n) return t[n]
                    }
                    var xu = Cu(xa),
                    Iu = zn ||
                    function(t, n) {
                        return ue.setTimeout(t, n)
                    },
                    ku = Cu(Ia);
                    function Su(t, n, e) {
                        var i = n + "";
                        return ku(t, eu(i, Bu(Ko(i), e)))
                    }
                    function Cu(t) {
                        var n = 0,
                        e = 0;
                        return function() {
                            var i = Wn(),
                            r = B - (i - e);
                            if (e = i, r > 0) {
                                if (++n >= R) return arguments[0]
                            } else n = 0;
                            return t.apply(a, arguments)
                        }
                    }
                    function Tu(t, n) {
                        var e = -1,
                        i = t.length,
                        r = i - 1;
                        n = n === a ? i: n;
                        while (++e < n) {
                            var o = va(e, r),
                            u = t[o];
                            t[o] = t[e],
                            t[e] = u
                        }
                        return t.length = n,
                        t
                    }
                    var Eu = pu((function(t) {
                        var n = [];
                        return 46 === t.charCodeAt(0) && n.push(""),
                        t.replace(jt, (function(t, e, i, r) {
                            n.push(i ? r.replace(Ht, "$1") : e || t)
                        })),
                        n
                    }));
                    function Au(t) {
                        if ("string" == typeof t || Fs(t)) return t;
                        var n = t + "";
                        return "0" == n && 1 / t == -P ? "-0": n
                    }
                    function Ru(t) {
                        if (null != t) {
                            try {
                                return ln.call(t)
                            } catch(n) {}
                            try {
                                return t + ""
                            } catch(n) {}
                        }
                        return ""
                    }
                    function Bu(t, n) {
                        return we(U, (function(e) {
                            var i = "_." + e[0];
                            n & e[1] && !Se(t, i) && t.push(i)
                        })),
                        t.sort()
                    }
                    function Ou(t) {
                        if (t instanceof Si) return t.clone();
                        var n = new ki(t.__wrapped__, t.__chain__);
                        return n.__actions__ = no(t.__actions__),
                        n.__index__ = t.__index__,
                        n.__values__ = t.__values__,
                        n
                    }
                    function zu(t, n, i) {
                        n = (i ? au(t, n, i) : n === a) ? 1 : Gn(Zs(n), 0);
                        var r = null == t ? 0 : t.length;
                        if (!r || n < 1) return [];
                        var o = 0,
                        u = 0,
                        c = e(jn(r / n));
                        while (o < r) c[u++] = Sa(t, o, o += n);
                        return c
                    }
                    function ju(t) {
                        var n = -1,
                        e = null == t ? 0 : t.length,
                        i = 0,
                        r = [];
                        while (++n < e) {
                            var a = t[n];
                            a && (r[i++] = a)
                        }
                        return r
                    }
                    function Pu() {
                        var t = arguments.length;
                        if (!t) return [];
                        var n = e(t - 1),
                        i = arguments[0],
                        r = t;
                        while (r--) n[r - 1] = arguments[r];
                        return Ee(us(i) ? no(i) : [i], Cr(n, 1))
                    }
                    var Du = ba((function(t, n) {
                        return ss(t) ? mr(t, Cr(n, 1, ss, !0)) : []
                    })),
                    Lu = ba((function(t, n) {
                        var e = ic(n);
                        return ss(e) && (e = a),
                        ss(t) ? mr(t, Cr(n, 1, ss, !0), Uo(e, 2)) : []
                    })),
                    Fu = ba((function(t, n) {
                        var e = ic(n);
                        return ss(e) && (e = a),
                        ss(t) ? mr(t, Cr(n, 1, ss, !0), a, e) : []
                    }));
                    function Mu(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n = e || n === a ? 1 : Zs(n), Sa(t, n < 0 ? 0 : n, i)) : []
                    }
                    function $u(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n = e || n === a ? 1 : Zs(n), n = i - n, Sa(t, 0, n < 0 ? 0 : n)) : []
                    }
                    function Gu(t, n) {
                        return t && t.length ? Pa(t, Uo(n, 3), !0, !0) : []
                    }
                    function Uu(t, n) {
                        return t && t.length ? Pa(t, Uo(n, 3), !0) : []
                    }
                    function Nu(t, n, e, i) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e && "number" != typeof e && au(t, n, e) && (e = 0, i = r), kr(t, n, e, i)) : []
                    }
                    function Hu(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var r = null == e ? 0 : Zs(e);
                        return r < 0 && (r = Gn(i + r, 0)),
                        De(t, Uo(n, 3), r)
                    }
                    function Wu(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var r = i - 1;
                        return e !== a && (r = Zs(e), r = e < 0 ? Gn(i + r, 0) : Un(r, i - 1)),
                        De(t, Uo(n, 3), r, !0)
                    }
                    function Vu(t) {
                        var n = null == t ? 0 : t.length;
                        return n ? Cr(t, 1) : []
                    }
                    function Zu(t) {
                        var n = null == t ? 0 : t.length;
                        return n ? Cr(t, P) : []
                    }
                    function qu(t, n) {
                        var e = null == t ? 0 : t.length;
                        return e ? (n = n === a ? 1 : Zs(n), Cr(t, n)) : []
                    }
                    function Yu(t) {
                        var n = -1,
                        e = null == t ? 0 : t.length,
                        i = {};
                        while (++n < e) {
                            var r = t[n];
                            i[r[0]] = r[1]
                        }
                        return i
                    }
                    function Ju(t) {
                        return t && t.length ? t[0] : a
                    }
                    function Ku(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var r = null == e ? 0 : Zs(e);
                        return r < 0 && (r = Gn(i + r, 0)),
                        Le(t, n, r)
                    }
                    function Xu(t) {
                        var n = null == t ? 0 : t.length;
                        return n ? Sa(t, 0, -1) : []
                    }
                    var Qu = ba((function(t) {
                        var n = Te(t, Ma);
                        return n.length && n[0] === t[0] ? Mr(n) : []
                    })),
                    tc = ba((function(t) {
                        var n = ic(t),
                        e = Te(t, Ma);
                        return n === ic(e) ? n = a: e.pop(),
                        e.length && e[0] === t[0] ? Mr(e, Uo(n, 2)) : []
                    })),
                    nc = ba((function(t) {
                        var n = ic(t),
                        e = Te(t, Ma);
                        return n = "function" == typeof n ? n: a,
                        n && e.pop(),
                        e.length && e[0] === t[0] ? Mr(e, a, n) : []
                    }));
                    function ec(t, n) {
                        return null == t ? "": Mn.call(t, n)
                    }
                    function ic(t) {
                        var n = null == t ? 0 : t.length;
                        return n ? t[n - 1] : a
                    }
                    function rc(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var r = i;
                        return e !== a && (r = Zs(e), r = r < 0 ? Gn(i + r, 0) : Un(r, i - 1)),
                        n === n ? di(t, n, r) : De(t, Me, r, !0)
                    }
                    function ac(t, n) {
                        return t && t.length ? ca(t, Zs(n)) : a
                    }
                    var oc = ba(uc);
                    function uc(t, n) {
                        return t && t.length && n && n.length ? da(t, n) : t
                    }
                    function cc(t, n, e) {
                        return t && t.length && n && n.length ? da(t, n, Uo(e, 2)) : t
                    }
                    function fc(t, n, e) {
                        return t && t.length && n && n.length ? da(t, n, a, e) : t
                    }
                    var sc = Do((function(t, n) {
                        var e = null == t ? 0 : t.length,
                        i = dr(t, n);
                        return pa(t, Te(n, (function(t) {
                            return ru(t, e) ? +t: t
                        })).sort(Ka)),
                        i
                    }));
                    function lc(t, n) {
                        var e = [];
                        if (!t || !t.length) return e;
                        var i = -1,
                        r = [],
                        a = t.length;
                        n = Uo(n, 3);
                        while (++i < a) {
                            var o = t[i];
                            n(o, i, t) && (e.push(o), r.push(i))
                        }
                        return pa(t, r),
                        e
                    }
                    function hc(t) {
                        return null == t ? t: qn.call(t)
                    }
                    function dc(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        return i ? (e && "number" != typeof e && au(t, n, e) ? (n = 0, e = i) : (n = null == n ? 0 : Zs(n), e = e === a ? i: Zs(e)), Sa(t, n, e)) : []
                    }
                    function pc(t, n) {
                        return Ta(t, n)
                    }
                    function vc(t, n, e) {
                        return Ea(t, n, Uo(e, 2))
                    }
                    function gc(t, n) {
                        var e = null == t ? 0 : t.length;
                        if (e) {
                            var i = Ta(t, n);
                            if (i < e && is(t[i], n)) return i
                        }
                        return - 1
                    }
                    function yc(t, n) {
                        return Ta(t, n, !0)
                    }
                    function bc(t, n, e) {
                        return Ea(t, n, Uo(e, 2), !0)
                    }
                    function mc(t, n) {
                        var e = null == t ? 0 : t.length;
                        if (e) {
                            var i = Ta(t, n, !0) - 1;
                            if (is(t[i], n)) return i
                        }
                        return - 1
                    }
                    function _c(t) {
                        return t && t.length ? Aa(t) : []
                    }
                    function wc(t, n) {
                        return t && t.length ? Aa(t, Uo(n, 2)) : []
                    }
                    function xc(t) {
                        var n = null == t ? 0 : t.length;
                        return n ? Sa(t, 1, n) : []
                    }
                    function Ic(t, n, e) {
                        return t && t.length ? (n = e || n === a ? 1 : Zs(n), Sa(t, 0, n < 0 ? 0 : n)) : []
                    }
                    function kc(t, n, e) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n = e || n === a ? 1 : Zs(n), n = i - n, Sa(t, n < 0 ? 0 : n, i)) : []
                    }
                    function Sc(t, n) {
                        return t && t.length ? Pa(t, Uo(n, 3), !1, !0) : []
                    }
                    function Cc(t, n) {
                        return t && t.length ? Pa(t, Uo(n, 3)) : []
                    }
                    var Tc = ba((function(t) {
                        return Oa(Cr(t, 1, ss, !0))
                    })),
                    Ec = ba((function(t) {
                        var n = ic(t);
                        return ss(n) && (n = a),
                        Oa(Cr(t, 1, ss, !0), Uo(n, 2))
                    })),
                    Ac = ba((function(t) {
                        var n = ic(t);
                        return n = "function" == typeof n ? n: a,
                        Oa(Cr(t, 1, ss, !0), a, n)
                    }));
                    function Rc(t) {
                        return t && t.length ? Oa(t) : []
                    }
                    function Bc(t, n) {
                        return t && t.length ? Oa(t, Uo(n, 2)) : []
                    }
                    function Oc(t, n) {
                        return n = "function" == typeof n ? n: a,
                        t && t.length ? Oa(t, a, n) : []
                    }
                    function zc(t) {
                        if (!t || !t.length) return [];
                        var n = 0;
                        return t = ke(t, (function(t) {
                            if (ss(t)) return n = Gn(t.length, n),
                            !0
                        })),
                        Ve(n, (function(n) {
                            return Te(t, Ge(n))
                        }))
                    }
                    function jc(t, n) {
                        if (!t || !t.length) return [];
                        var e = zc(t);
                        return null == n ? e: Te(e, (function(t) {
                            return me(n, a, t)
                        }))
                    }
                    var Pc = ba((function(t, n) {
                        return ss(t) ? mr(t, n) : []
                    })),
                    Dc = ba((function(t) {
                        return La(ke(t, ss))
                    })),
                    Lc = ba((function(t) {
                        var n = ic(t);
                        return ss(n) && (n = a),
                        La(ke(t, ss), Uo(n, 2))
                    })),
                    Fc = ba((function(t) {
                        var n = ic(t);
                        return n = "function" == typeof n ? n: a,
                        La(ke(t, ss), a, n)
                    })),
                    Mc = ba(zc);
                    function $c(t, n) {
                        return Fa(t || [], n || [], ur)
                    }
                    function Gc(t, n) {
                        return Fa(t || [], n || [], wa)
                    }
                    var Uc = ba((function(t) {
                        var n = t.length,
                        e = n > 1 ? t[n - 1] : a;
                        return e = "function" == typeof e ? (t.pop(), e) : a,
                        jc(t, e)
                    }));
                    function Nc(t) {
                        var n = _i(t);
                        return n.__chain__ = !0,
                        n
                    }
                    function Hc(t, n) {
                        return n(t),
                        t
                    }
                    function Wc(t, n) {
                        return n(t)
                    }
                    var Vc = Do((function(t) {
                        var n = t.length,
                        e = n ? t[0] : 0,
                        i = this.__wrapped__,
                        r = function(n) {
                            return dr(n, t)
                        };
                        return ! (n > 1 || this.__actions__.length) && i instanceof Si && ru(e) ? (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
                            func: Wc,
                            args: [r],
                            thisArg: a
                        }), new ki(i, this.__chain__).thru((function(t) {
                            return n && !t.length && t.push(a),
                            t
                        }))) : this.thru(r)
                    }));
                    function Zc() {
                        return Nc(this)
                    }
                    function qc() {
                        return new ki(this.value(), this.__chain__)
                    }
                    function Yc() {
                        this.__values__ === a && (this.__values__ = Ws(this.value()));
                        var t = this.__index__ >= this.__values__.length,
                        n = t ? a: this.__values__[this.__index__++];
                        return {
                            done: t,
                            value: n
                        }
                    }
                    function Jc() {
                        return this
                    }
                    function Kc(t) {
                        var n, e = this;
                        while (e instanceof Ii) {
                            var i = Ou(e);
                            i.__index__ = 0,
                            i.__values__ = a,
                            n ? r.__wrapped__ = i: n = i;
                            var r = i;
                            e = e.__wrapped__
                        }
                        return r.__wrapped__ = t,
                        n
                    }
                    function Xc() {
                        var t = this.__wrapped__;
                        if (t instanceof Si) {
                            var n = t;
                            return this.__actions__.length && (n = new Si(this)),
                            n = n.reverse(),
                            n.__actions__.push({
                                func: Wc,
                                args: [hc],
                                thisArg: a
                            }),
                            new ki(n, this.__chain__)
                        }
                        return this.thru(hc)
                    }
                    function Qc() {
                        return Da(this.__wrapped__, this.__actions__)
                    }
                    var tf = ao((function(t, n, e) {
                        hn.call(t, e) ? ++t[e] : hr(t, e, 1)
                    }));
                    function nf(t, n, e) {
                        var i = us(t) ? Ie: xr;
                        return e && au(t, n, e) && (n = a),
                        i(t, Uo(n, 3))
                    }
                    function ef(t, n) {
                        var e = us(t) ? ke: Sr;
                        return e(t, Uo(n, 3))
                    }
                    var rf = vo(Hu),
                    af = vo(Wu);
                    function of(t, n) {
                        return Cr(vf(t, n), 1)
                    }
                    function uf(t, n) {
                        return Cr(vf(t, n), P)
                    }
                    function cf(t, n, e) {
                        return e = e === a ? 1 : Zs(e),
                        Cr(vf(t, n), e)
                    }
                    function ff(t, n) {
                        var e = us(t) ? we: _r;
                        return e(t, Uo(n, 3))
                    }
                    function sf(t, n) {
                        var e = us(t) ? xe: wr;
                        return e(t, Uo(n, 3))
                    }
                    var lf = ao((function(t, n, e) {
                        hn.call(t, e) ? t[e].push(n) : hr(t, e, [n])
                    }));
                    function hf(t, n, e, i) {
                        t = fs(t) ? t: $l(t),
                        e = e && !i ? Zs(e) : 0;
                        var r = t.length;
                        return e < 0 && (e = Gn(r + e, 0)),
                        Ls(t) ? e <= r && t.indexOf(n, e) > -1 : !!r && Le(t, n, e) > -1
                    }
                    var df = ba((function(t, n, i) {
                        var r = -1,
                        a = "function" == typeof n,
                        o = fs(t) ? e(t.length) : [];
                        return _r(t, (function(t) {
                            o[++r] = a ? me(n, t, i) : Gr(t, n, i)
                        })),
                        o
                    })),
                    pf = ao((function(t, n, e) {
                        hr(t, e, n)
                    }));
                    function vf(t, n) {
                        var e = us(t) ? Te: ia;
                        return e(t, Uo(n, 3))
                    }
                    function gf(t, n, e, i) {
                        return null == t ? [] : (us(n) || (n = null == n ? [] : [n]), e = i ? a: e, us(e) || (e = null == e ? [] : [e]), fa(t, n, e))
                    }
                    var yf = ao((function(t, n, e) {
                        t[e ? 0 : 1].push(n)
                    }), (function() {
                        return [[], []]
                    }));
                    function bf(t, n, e) {
                        var i = us(t) ? Ae: Ne,
                        r = arguments.length < 3;
                        return i(t, Uo(n, 4), e, r, _r)
                    }
                    function mf(t, n, e) {
                        var i = us(t) ? Re: Ne,
                        r = arguments.length < 3;
                        return i(t, Uo(n, 4), e, r, wr)
                    }
                    function _f(t, n) {
                        var e = us(t) ? ke: Sr;
                        return e(t, $f(Uo(n, 3)))
                    }
                    function wf(t) {
                        var n = us(t) ? ir: ma;
                        return n(t)
                    }
                    function xf(t, n, e) {
                        n = (e ? au(t, n, e) : n === a) ? 1 : Zs(n);
                        var i = us(t) ? rr: _a;
                        return i(t, n)
                    }
                    function If(t) {
                        var n = us(t) ? ar: ka;
                        return n(t)
                    }
                    function kf(t) {
                        if (null == t) return 0;
                        if (fs(t)) return Ls(t) ? pi(t) : t.length;
                        var n = Yo(t);
                        return n == X || n == at ? t.size: ta(t).length
                    }
                    function Sf(t, n, e) {
                        var i = us(t) ? Be: Ca;
                        return e && au(t, n, e) && (n = a),
                        i(t, Uo(n, 3))
                    }
                    var Cf = ba((function(t, n) {
                        if (null == t) return [];
                        var e = n.length;
                        return e > 1 && au(t, n[0], n[1]) ? n = [] : e > 2 && au(n[0], n[1], n[2]) && (n = [n[0]]),
                        fa(t, Cr(n, 1), [])
                    })),
                    Tf = On ||
                    function() {
                        return ue.Date.now()
                    };
                    function Ef(t, n) {
                        if ("function" != typeof n) throw new on(f);
                        return t = Zs(t),
                        function() {
                            if (--t < 1) return n.apply(this, arguments)
                        }
                    }
                    function Af(t, n, e) {
                        return n = e ? a: n,
                        n = t && null == n ? t.length: n,
                        Ao(t, S, a, a, a, a, n)
                    }
                    function Rf(t, n) {
                        var e;
                        if ("function" != typeof n) throw new on(f);
                        return t = Zs(t),
                        function() {
                            return--t > 0 && (e = n.apply(this, arguments)),
                            t <= 1 && (n = a),
                            e
                        }
                    }
                    var Bf = ba((function(t, n, e) {
                        var i = b;
                        if (e.length) {
                            var r = fi(e, Go(Bf));
                            i |= I
                        }
                        return Ao(t, i, n, e, r)
                    })),
                    Of = ba((function(t, n, e) {
                        var i = b | m;
                        if (e.length) {
                            var r = fi(e, Go(Of));
                            i |= I
                        }
                        return Ao(n, i, t, e, r)
                    }));
                    function zf(t, n, e) {
                        n = e ? a: n;
                        var i = Ao(t, w, a, a, a, a, a, n);
                        return i.placeholder = zf.placeholder,
                        i
                    }
                    function jf(t, n, e) {
                        n = e ? a: n;
                        var i = Ao(t, x, a, a, a, a, a, n);
                        return i.placeholder = jf.placeholder,
                        i
                    }
                    function Pf(t, n, e) {
                        var i, r, o, u, c, s, l = 0,
                        h = !1,
                        d = !1,
                        p = !0;
                        if ("function" != typeof t) throw new on(f);
                        function v(n) {
                            var e = i,
                            o = r;
                            return i = r = a,
                            l = n,
                            u = t.apply(o, e),
                            u
                        }
                        function g(t) {
                            return l = t,
                            c = Iu(m, n),
                            h ? v(t) : u
                        }
                        function y(t) {
                            var e = t - s,
                            i = t - l,
                            r = n - e;
                            return d ? Un(r, o - i) : r
                        }
                        function b(t) {
                            var e = t - s,
                            i = t - l;
                            return s === a || e >= n || e < 0 || d && i >= o
                        }
                        function m() {
                            var t = Tf();
                            if (b(t)) return _(t);
                            c = Iu(m, y(t))
                        }
                        function _(t) {
                            return c = a,
                            p && i ? v(t) : (i = r = a, u)
                        }
                        function w() {
                            c !== a && Ha(c),
                            l = 0,
                            i = s = r = c = a
                        }
                        function x() {
                            return c === a ? u: _(Tf())
                        }
                        function I() {
                            var t = Tf(),
                            e = b(t);
                            if (i = arguments, r = this, s = t, e) {
                                if (c === a) return g(s);
                                if (d) return Ha(c),
                                c = Iu(m, n),
                                v(s)
                            }
                            return c === a && (c = Iu(m, n)),
                            u
                        }
                        return n = Ys(n) || 0,
                        Is(e) && (h = !!e.leading, d = "maxWait" in e, o = d ? Gn(Ys(e.maxWait) || 0, n) : o, p = "trailing" in e ? !!e.trailing: p),
                        I.cancel = w,
                        I.flush = x,
                        I
                    }
                    var Df = ba((function(t, n) {
                        return br(t, 1, n)
                    })),
                    Lf = ba((function(t, n, e) {
                        return br(t, Ys(n) || 0, e)
                    }));
                    function Ff(t) {
                        return Ao(t, T)
                    }
                    function Mf(t, n) {
                        if ("function" != typeof t || null != n && "function" != typeof n) throw new on(f);
                        var e = function() {
                            var i = arguments,
                            r = n ? n.apply(this, i) : i[0],
                            a = e.cache;
                            if (a.has(r)) return a.get(r);
                            var o = t.apply(this, i);
                            return e.cache = a.set(r, o) || a,
                            o
                        };
                        return e.cache = new(Mf.Cache || Gi),
                        e
                    }
                    function $f(t) {
                        if ("function" != typeof t) throw new on(f);
                        return function() {
                            var n = arguments;
                            switch (n.length) {
                            case 0:
                                return ! t.call(this);
                            case 1:
                                return ! t.call(this, n[0]);
                            case 2:
                                return ! t.call(this, n[0], n[1]);
                            case 3:
                                return ! t.call(this, n[0], n[1], n[2])
                            }
                            return ! t.apply(this, n)
                        }
                    }
                    function Gf(t) {
                        return Rf(2, t)
                    }
                    Mf.Cache = Gi;
                    var Uf = Ua((function(t, n) {
                        n = 1 == n.length && us(n[0]) ? Te(n[0], qe(Uo())) : Te(Cr(n, 1), qe(Uo()));
                        var e = n.length;
                        return ba((function(i) {
                            var r = -1,
                            a = Un(i.length, e);
                            while (++r < a) i[r] = n[r].call(this, i[r]);
                            return me(t, this, i)
                        }))
                    })),
                    Nf = ba((function(t, n) {
                        var e = fi(n, Go(Nf));
                        return Ao(t, I, a, n, e)
                    })),
                    Hf = ba((function(t, n) {
                        var e = fi(n, Go(Hf));
                        return Ao(t, k, a, n, e)
                    })),
                    Wf = Do((function(t, n) {
                        return Ao(t, C, a, a, a, n)
                    }));
                    function Vf(t, n) {
                        if ("function" != typeof t) throw new on(f);
                        return n = n === a ? n: Zs(n),
                        ba(t, n)
                    }
                    function Zf(t, n) {
                        if ("function" != typeof t) throw new on(f);
                        return n = null == n ? 0 : Gn(Zs(n), 0),
                        ba((function(e) {
                            var i = e[n],
                            r = Na(e, 0, n);
                            return i && Ee(r, i),
                            me(t, this, r)
                        }))
                    }
                    function qf(t, n, e) {
                        var i = !0,
                        r = !0;
                        if ("function" != typeof t) throw new on(f);
                        return Is(e) && (i = "leading" in e ? !!e.leading: i, r = "trailing" in e ? !!e.trailing: r),
                        Pf(t, n, {
                            leading: i,
                            maxWait: n,
                            trailing: r
                        })
                    }
                    function Yf(t) {
                        return Af(t, 1)
                    }
                    function Jf(t, n) {
                        return Nf($a(n), t)
                    }
                    function Kf() {
                        if (!arguments.length) return [];
                        var t = arguments[0];
                        return us(t) ? t: [t]
                    }
                    function Xf(t) {
                        return vr(t, v)
                    }
                    function Qf(t, n) {
                        return n = "function" == typeof n ? n: a,
                        vr(t, v, n)
                    }
                    function ts(t) {
                        return vr(t, d | v)
                    }
                    function ns(t, n) {
                        return n = "function" == typeof n ? n: a,
                        vr(t, d | v, n)
                    }
                    function es(t, n) {
                        return null == n || yr(t, n, wl(n))
                    }
                    function is(t, n) {
                        return t === n || t !== t && n !== n
                    }
                    var rs = ko(Pr),
                    as = ko((function(t, n) {
                        return t >= n
                    })),
                    os = Ur(function() {
                        return arguments
                    } ()) ? Ur: function(t) {
                        return ks(t) && hn.call(t, "callee") && !Sn.call(t, "callee")
                    },
                    us = e.isArray,
                    cs = de ? qe(de) : Nr;
                    function fs(t) {
                        return null != t && xs(t.length) && !_s(t)
                    }
                    function ss(t) {
                        return ks(t) && fs(t)
                    }
                    function ls(t) {
                        return ! 0 === t || !1 === t || ks(t) && jr(t) == V
                    }
                    var hs = Ln || Zh,
                    ds = pe ? qe(pe) : Hr;
                    function ps(t) {
                        return ks(t) && 1 === t.nodeType && !zs(t)
                    }
                    function vs(t) {
                        if (null == t) return ! 0;
                        if (fs(t) && (us(t) || "string" == typeof t || "function" == typeof t.splice || hs(t) || Ms(t) || os(t))) return ! t.length;
                        var n = Yo(t);
                        if (n == X || n == at) return ! t.size;
                        if (lu(t)) return ! ta(t).length;
                        for (var e in t) if (hn.call(t, e)) return ! 1;
                        return ! 0
                    }
                    function gs(t, n) {
                        return Wr(t, n)
                    }
                    function ys(t, n, e) {
                        e = "function" == typeof e ? e: a;
                        var i = e ? e(t, n) : a;
                        return i === a ? Wr(t, n, a, e) : !!i
                    }
                    function bs(t) {
                        if (!ks(t)) return ! 1;
                        var n = jr(t);
                        return n == Y || n == q || "string" == typeof t.message && "string" == typeof t.name && !zs(t)
                    }
                    function ms(t) {
                        return "number" == typeof t && Fn(t)
                    }
                    function _s(t) {
                        if (!Is(t)) return ! 1;
                        var n = jr(t);
                        return n == J || n == K || n == W || n == it
                    }
                    function ws(t) {
                        return "number" == typeof t && t == Zs(t)
                    }
                    function xs(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= D
                    }
                    function Is(t) {
                        var n = typeof t;
                        return null != t && ("object" == n || "function" == n)
                    }
                    function ks(t) {
                        return null != t && "object" == typeof t
                    }
                    var Ss = ve ? qe(ve) : Zr;
                    function Cs(t, n) {
                        return t === n || qr(t, n, Ho(n))
                    }
                    function Ts(t, n, e) {
                        return e = "function" == typeof e ? e: a,
                        qr(t, n, Ho(n), e)
                    }
                    function Es(t) {
                        return Os(t) && t != +t
                    }
                    function As(t) {
                        if (su(t)) throw new r(c);
                        return Yr(t)
                    }
                    function Rs(t) {
                        return null === t
                    }
                    function Bs(t) {
                        return null == t
                    }
                    function Os(t) {
                        return "number" == typeof t || ks(t) && jr(t) == Q
                    }
                    function zs(t) {
                        if (!ks(t) || jr(t) != nt) return ! 1;
                        var n = In(t);
                        if (null === n) return ! 0;
                        var e = hn.call(n, "constructor") && n.constructor;
                        return "function" == typeof e && e instanceof e && ln.call(e) == gn
                    }
                    var js = ge ? qe(ge) : Jr;
                    function Ps(t) {
                        return ws(t) && t >= -D && t <= D
                    }
                    var Ds = ye ? qe(ye) : Kr;
                    function Ls(t) {
                        return "string" == typeof t || !us(t) && ks(t) && jr(t) == ot
                    }
                    function Fs(t) {
                        return "symbol" == typeof t || ks(t) && jr(t) == ut
                    }
                    var Ms = be ? qe(be) : Xr;
                    function $s(t) {
                        return t === a
                    }
                    function Gs(t) {
                        return ks(t) && Yo(t) == ft
                    }
                    function Us(t) {
                        return ks(t) && jr(t) == st
                    }
                    var Ns = ko(ea),
                    Hs = ko((function(t, n) {
                        return t <= n
                    }));
                    function Ws(t) {
                        if (!t) return [];
                        if (fs(t)) return Ls(t) ? vi(t) : no(t);
                        if (En && t[En]) return oi(t[En]());
                        var n = Yo(t),
                        e = n == X ? ui: n == at ? si: $l;
                        return e(t)
                    }
                    function Vs(t) {
                        if (!t) return 0 === t ? t: 0;
                        if (t = Ys(t), t === P || t === -P) {
                            var n = t < 0 ? -1 : 1;
                            return n * L
                        }
                        return t === t ? t: 0
                    }
                    function Zs(t) {
                        var n = Vs(t),
                        e = n % 1;
                        return n === n ? e ? n - e: n: 0
                    }
                    function qs(t) {
                        return t ? pr(Zs(t), 0, M) : 0
                    }
                    function Ys(t) {
                        if ("number" == typeof t) return t;
                        if (Fs(t)) return F;
                        if (Is(t)) {
                            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = Is(n) ? n + "": n
                        }
                        if ("string" != typeof t) return 0 === t ? t: +t;
                        t = t.replace(Lt, "");
                        var e = qt.test(t);
                        return e || Jt.test(t) ? re(t.slice(2), e ? 2 : 8) : Zt.test(t) ? F: +t
                    }
                    function Js(t) {
                        return eo(t, xl(t))
                    }
                    function Ks(t) {
                        return t ? pr(Zs(t), -D, D) : 0 === t ? t: 0
                    }
                    function Xs(t) {
                        return null == t ? "": Ba(t)
                    }
                    var Qs = oo((function(t, n) {
                        if (lu(n) || fs(n)) eo(n, wl(n), t);
                        else for (var e in n) hn.call(n, e) && ur(t, e, n[e])
                    })),
                    tl = oo((function(t, n) {
                        eo(n, xl(n), t)
                    })),
                    nl = oo((function(t, n, e, i) {
                        eo(n, xl(n), t, i)
                    })),
                    el = oo((function(t, n, e, i) {
                        eo(n, wl(n), t, i)
                    })),
                    il = Do(dr);
                    function rl(t, n) {
                        var e = xi(t);
                        return null == n ? e: sr(e, n)
                    }
                    var al = ba((function(t, n) {
                        t = en(t);
                        var e = -1,
                        i = n.length,
                        r = i > 2 ? n[2] : a;
                        r && au(n[0], n[1], r) && (i = 1);
                        while (++e < i) {
                            var o = n[e],
                            u = xl(o),
                            c = -1,
                            f = u.length;
                            while (++c < f) {
                                var s = u[c],
                                l = t[s]; (l === a || is(l, fn[s]) && !hn.call(t, s)) && (t[s] = o[s])
                            }
                        }
                        return t
                    })),
                    ol = ba((function(t) {
                        return t.push(a, Bo),
                        me(Cl, a, t)
                    }));
                    function ul(t, n) {
                        return Pe(t, Uo(n, 3), Ar)
                    }
                    function cl(t, n) {
                        return Pe(t, Uo(n, 3), Rr)
                    }
                    function fl(t, n) {
                        return null == t ? t: Tr(t, Uo(n, 3), xl)
                    }
                    function sl(t, n) {
                        return null == t ? t: Er(t, Uo(n, 3), xl)
                    }
                    function ll(t, n) {
                        return t && Ar(t, Uo(n, 3))
                    }
                    function hl(t, n) {
                        return t && Rr(t, Uo(n, 3))
                    }
                    function dl(t) {
                        return null == t ? [] : Br(t, wl(t))
                    }
                    function pl(t) {
                        return null == t ? [] : Br(t, xl(t))
                    }
                    function vl(t, n, e) {
                        var i = null == t ? a: Or(t, n);
                        return i === a ? e: i
                    }
                    function gl(t, n) {
                        return null != t && Xo(t, n, Dr)
                    }
                    function yl(t, n) {
                        return null != t && Xo(t, n, Lr)
                    }
                    var bl = bo((function(t, n, e) {
                        null != n && "function" != typeof n.toString && (n = vn.call(n)),
                        t[n] = e
                    }), Sh(Ah)),
                    ml = bo((function(t, n, e) {
                        null != n && "function" != typeof n.toString && (n = vn.call(n)),
                        hn.call(t, n) ? t[n].push(e) : t[n] = [e]
                    }), Uo),
                    _l = ba(Gr);
                    function wl(t) {
                        return fs(t) ? er(t) : ta(t)
                    }
                    function xl(t) {
                        return fs(t) ? er(t, !0) : na(t)
                    }
                    function Il(t, n) {
                        var e = {};
                        return n = Uo(n, 3),
                        Ar(t, (function(t, i, r) {
                            hr(e, n(t, i, r), t)
                        })),
                        e
                    }
                    function kl(t, n) {
                        var e = {};
                        return n = Uo(n, 3),
                        Ar(t, (function(t, i, r) {
                            hr(e, i, n(t, i, r))
                        })),
                        e
                    }
                    var Sl = oo((function(t, n, e) {
                        oa(t, n, e)
                    })),
                    Cl = oo((function(t, n, e, i) {
                        oa(t, n, e, i)
                    })),
                    Tl = Do((function(t, n) {
                        var e = {};
                        if (null == t) return e;
                        var i = !1;
                        n = Te(n, (function(n) {
                            return n = Ga(n, t),
                            i || (i = n.length > 1),
                            n
                        })),
                        eo(t, Fo(t), e),
                        i && (e = vr(e, d | p | v, Oo));
                        var r = n.length;
                        while (r--) za(e, n[r]);
                        return e
                    }));
                    function El(t, n) {
                        return Rl(t, $f(Uo(n)))
                    }
                    var Al = Do((function(t, n) {
                        return null == t ? {}: sa(t, n)
                    }));
                    function Rl(t, n) {
                        if (null == t) return {};
                        var e = Te(Fo(t), (function(t) {
                            return [t]
                        }));
                        return n = Uo(n),
                        la(t, e, (function(t, e) {
                            return n(t, e[0])
                        }))
                    }
                    function Bl(t, n, e) {
                        n = Ga(n, t);
                        var i = -1,
                        r = n.length;
                        r || (r = 1, t = a);
                        while (++i < r) {
                            var o = null == t ? a: t[Au(n[i])];
                            o === a && (i = r, o = e),
                            t = _s(o) ? o.call(t) : o
                        }
                        return t
                    }
                    function Ol(t, n, e) {
                        return null == t ? t: wa(t, n, e)
                    }
                    function zl(t, n, e, i) {
                        return i = "function" == typeof i ? i: a,
                        null == t ? t: wa(t, n, e, i)
                    }
                    var jl = Eo(wl),
                    Pl = Eo(xl);
                    function Dl(t, n, e) {
                        var i = us(t),
                        r = i || hs(t) || Ms(t);
                        if (n = Uo(n, 4), null == e) {
                            var a = t && t.constructor;
                            e = r ? i ? new a: [] : Is(t) && _s(a) ? xi(In(t)) : {}
                        }
                        return (r ? we: Ar)(t, (function(t, i, r) {
                            return n(e, t, i, r)
                        })),
                        e
                    }
                    function Ll(t, n) {
                        return null == t || za(t, n)
                    }
                    function Fl(t, n, e) {
                        return null == t ? t: ja(t, n, $a(e))
                    }
                    function Ml(t, n, e, i) {
                        return i = "function" == typeof i ? i: a,
                        null == t ? t: ja(t, n, $a(e), i)
                    }
                    function $l(t) {
                        return null == t ? [] : Ye(t, wl(t))
                    }
                    function Gl(t) {
                        return null == t ? [] : Ye(t, xl(t))
                    }
                    function Ul(t, n, e) {
                        return e === a && (e = n, n = a),
                        e !== a && (e = Ys(e), e = e === e ? e: 0),
                        n !== a && (n = Ys(n), n = n === n ? n: 0),
                        pr(Ys(t), n, e)
                    }
                    function Nl(t, n, e) {
                        return n = Vs(n),
                        e === a ? (e = n, n = 0) : e = Vs(e),
                        t = Ys(t),
                        Fr(t, n, e)
                    }
                    function Hl(t, n, e) {
                        if (e && "boolean" != typeof e && au(t, n, e) && (n = e = a), e === a && ("boolean" == typeof n ? (e = n, n = a) : "boolean" == typeof t && (e = t, t = a)), t === a && n === a ? (t = 0, n = 1) : (t = Vs(t), n === a ? (n = t, t = 0) : n = Vs(n)), t > n) {
                            var i = t;
                            t = n,
                            n = i
                        }
                        if (e || t % 1 || n % 1) {
                            var r = Zn();
                            return Un(t + r * (n - t + ie("1e-" + ((r + "").length - 1))), n)
                        }
                        return va(t, n)
                    }
                    var Wl = lo((function(t, n, e) {
                        return n = n.toLowerCase(),
                        t + (e ? Vl(n) : n)
                    }));
                    function Vl(t) {
                        return mh(Xs(t).toLowerCase())
                    }
                    function Zl(t) {
                        return t = Xs(t),
                        t && t.replace(Xt, ti).replace(Hn, "")
                    }
                    function ql(t, n, e) {
                        t = Xs(t),
                        n = Ba(n);
                        var i = t.length;
                        e = e === a ? i: pr(Zs(e), 0, i);
                        var r = e;
                        return e -= n.length,
                        e >= 0 && t.slice(e, r) == n
                    }
                    function Yl(t) {
                        return t = Xs(t),
                        t && Et.test(t) ? t.replace(Ct, ni) : t
                    }
                    function Jl(t) {
                        return t = Xs(t),
                        t && Dt.test(t) ? t.replace(Pt, "\\$&") : t
                    }
                    var Kl = lo((function(t, n, e) {
                        return t + (e ? "-": "") + n.toLowerCase()
                    })),
                    Xl = lo((function(t, n, e) {
                        return t + (e ? " ": "") + n.toLowerCase()
                    })),
                    Ql = so("toLowerCase");
                    function th(t, n, e) {
                        t = Xs(t),
                        n = Zs(n);
                        var i = n ? pi(t) : 0;
                        if (!n || i >= n) return t;
                        var r = (n - i) / 2;
                        return wo(Pn(r), e) + t + wo(jn(r), e)
                    }
                    function nh(t, n, e) {
                        t = Xs(t),
                        n = Zs(n);
                        var i = n ? pi(t) : 0;
                        return n && i < n ? t + wo(n - i, e) : t
                    }
                    function eh(t, n, e) {
                        t = Xs(t),
                        n = Zs(n);
                        var i = n ? pi(t) : 0;
                        return n && i < n ? wo(n - i, e) + t: t
                    }
                    function ih(t, n, e) {
                        return e || null == n ? n = 0 : n && (n = +n),
                        Vn(Xs(t).replace(Ft, ""), n || 0)
                    }
                    function rh(t, n, e) {
                        return n = (e ? au(t, n, e) : n === a) ? 1 : Zs(n),
                        ya(Xs(t), n)
                    }
                    function ah() {
                        var t = arguments,
                        n = Xs(t[0]);
                        return t.length < 3 ? n: n.replace(t[1], t[2])
                    }
                    var oh = lo((function(t, n, e) {
                        return t + (e ? "_": "") + n.toLowerCase()
                    }));
                    function uh(t, n, e) {
                        return e && "number" != typeof e && au(t, n, e) && (n = e = a),
                        e = e === a ? M: e >>> 0,
                        e ? (t = Xs(t), t && ("string" == typeof n || null != n && !js(n)) && (n = Ba(n), !n && ri(t)) ? Na(vi(t), 0, e) : t.split(n, e)) : []
                    }
                    var ch = lo((function(t, n, e) {
                        return t + (e ? " ": "") + mh(n)
                    }));
                    function fh(t, n, e) {
                        return t = Xs(t),
                        e = null == e ? 0 : pr(Zs(e), 0, t.length),
                        n = Ba(n),
                        t.slice(e, e + n.length) == n
                    }
                    function sh(t, n, e) {
                        var i = _i.templateSettings;
                        e && au(t, n, e) && (n = a),
                        t = Xs(t),
                        n = nl({},
                        n, i, Ro);
                        var r, o, u = nl({},
                        n.imports, i.imports, Ro),
                        c = wl(u),
                        f = Ye(u, c),
                        s = 0,
                        l = n.interpolate || Qt,
                        h = "__p += '",
                        d = rn((n.escape || Qt).source + "|" + l.source + "|" + (l === Bt ? Wt: Qt).source + "|" + (n.evaluate || Qt).source + "|$", "g"),
                        p = "//# sourceURL=" + (hn.call(n, "sourceURL") ? (n.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Jn + "]") + "\n";
                        t.replace(d, (function(n, e, i, a, u, c) {
                            return i || (i = a),
                            h += t.slice(s, c).replace(tn, ei),
                            e && (r = !0, h += "' +\n__e(" + e + ") +\n'"),
                            u && (o = !0, h += "';\n" + u + ";\n__p += '"),
                            i && (h += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"),
                            s = c + n.length,
                            n
                        })),
                        h += "';\n";
                        var v = hn.call(n, "variable") && n.variable;
                        v || (h = "with (obj) {\n" + h + "\n}\n"),
                        h = (o ? h.replace(xt, "") : h).replace(It, "$1").replace(kt, "$1;"),
                        h = "function(" + (v || "obj") + ") {\n" + (v ? "": "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape": "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n": ";\n") + h + "return __p\n}";
                        var g = wh((function() {
                            return Nt(c, p + "return " + h).apply(a, f)
                        }));
                        if (g.source = h, bs(g)) throw g;
                        return g
                    }
                    function lh(t) {
                        return Xs(t).toLowerCase()
                    }
                    function hh(t) {
                        return Xs(t).toUpperCase()
                    }
                    function dh(t, n, e) {
                        if (t = Xs(t), t && (e || n === a)) return t.replace(Lt, "");
                        if (!t || !(n = Ba(n))) return t;
                        var i = vi(t),
                        r = vi(n),
                        o = Ke(i, r),
                        u = Xe(i, r) + 1;
                        return Na(i, o, u).join("")
                    }
                    function ph(t, n, e) {
                        if (t = Xs(t), t && (e || n === a)) return t.replace(Mt, "");
                        if (!t || !(n = Ba(n))) return t;
                        var i = vi(t),
                        r = Xe(i, vi(n)) + 1;
                        return Na(i, 0, r).join("")
                    }
                    function vh(t, n, e) {
                        if (t = Xs(t), t && (e || n === a)) return t.replace(Ft, "");
                        if (!t || !(n = Ba(n))) return t;
                        var i = vi(t),
                        r = Ke(i, vi(n));
                        return Na(i, r).join("")
                    }
                    function gh(t, n) {
                        var e = E,
                        i = A;
                        if (Is(n)) {
                            var r = "separator" in n ? n.separator: r;
                            e = "length" in n ? Zs(n.length) : e,
                            i = "omission" in n ? Ba(n.omission) : i
                        }
                        t = Xs(t);
                        var o = t.length;
                        if (ri(t)) {
                            var u = vi(t);
                            o = u.length
                        }
                        if (e >= o) return t;
                        var c = e - pi(i);
                        if (c < 1) return i;
                        var f = u ? Na(u, 0, c).join("") : t.slice(0, c);
                        if (r === a) return f + i;
                        if (u && (c += f.length - c), js(r)) {
                            if (t.slice(c).search(r)) {
                                var s, l = f;
                                r.global || (r = rn(r.source, Xs(Vt.exec(r)) + "g")),
                                r.lastIndex = 0;
                                while (s = r.exec(l)) var h = s.index;
                                f = f.slice(0, h === a ? c: h)
                            }
                        } else if (t.indexOf(Ba(r), c) != c) {
                            var d = f.lastIndexOf(r);
                            d > -1 && (f = f.slice(0, d))
                        }
                        return f + i
                    }
                    function yh(t) {
                        return t = Xs(t),
                        t && Tt.test(t) ? t.replace(St, gi) : t
                    }
                    var bh = lo((function(t, n, e) {
                        return t + (e ? " ": "") + n.toUpperCase()
                    })),
                    mh = so("toUpperCase");
                    function _h(t, n, e) {
                        return t = Xs(t),
                        n = e ? a: n,
                        n === a ? ai(t) ? mi(t) : je(t) : t.match(n) || []
                    }
                    var wh = ba((function(t, n) {
                        try {
                            return me(t, a, n)
                        } catch(e) {
                            return bs(e) ? e: new r(e)
                        }
                    })),
                    xh = Do((function(t, n) {
                        return we(n, (function(n) {
                            n = Au(n),
                            hr(t, n, Bf(t[n], t))
                        })),
                        t
                    }));
                    function Ih(t) {
                        var n = null == t ? 0 : t.length,
                        e = Uo();
                        return t = n ? Te(t, (function(t) {
                            if ("function" != typeof t[1]) throw new on(f);
                            return [e(t[0]), t[1]]
                        })) : [],
                        ba((function(e) {
                            var i = -1;
                            while (++i < n) {
                                var r = t[i];
                                if (me(r[0], this, e)) return me(r[1], this, e)
                            }
                        }))
                    }
                    function kh(t) {
                        return gr(vr(t, d))
                    }
                    function Sh(t) {
                        return function() {
                            return t
                        }
                    }
                    function Ch(t, n) {
                        return null == t || t !== t ? n: t
                    }
                    var Th = go(),
                    Eh = go(!0);
                    function Ah(t) {
                        return t
                    }
                    function Rh(t) {
                        return Qr("function" == typeof t ? t: vr(t, d))
                    }
                    function Bh(t) {
                        return ra(vr(t, d))
                    }
                    function Oh(t, n) {
                        return aa(t, vr(n, d))
                    }
                    var zh = ba((function(t, n) {
                        return function(e) {
                            return Gr(e, t, n)
                        }
                    })),
                    jh = ba((function(t, n) {
                        return function(e) {
                            return Gr(t, e, n)
                        }
                    }));
                    function Ph(t, n, e) {
                        var i = wl(n),
                        r = Br(n, i);
                        null != e || Is(n) && (r.length || !i.length) || (e = n, n = t, t = this, r = Br(n, wl(n)));
                        var a = !(Is(e) && "chain" in e) || !!e.chain,
                        o = _s(t);
                        return we(r, (function(e) {
                            var i = n[e];
                            t[e] = i,
                            o && (t.prototype[e] = function() {
                                var n = this.__chain__;
                                if (a || n) {
                                    var e = t(this.__wrapped__),
                                    r = e.__actions__ = no(this.__actions__);
                                    return r.push({
                                        func: i,
                                        args: arguments,
                                        thisArg: t
                                    }),
                                    e.__chain__ = n,
                                    e
                                }
                                return i.apply(t, Ee([this.value()], arguments))
                            })
                        })),
                        t
                    }
                    function Dh() {
                        return ue._ === this && (ue._ = yn),
                        this
                    }
                    function Lh() {}
                    function Fh(t) {
                        return t = Zs(t),
                        ba((function(n) {
                            return ca(n, t)
                        }))
                    }
                    var Mh = _o(Te),
                    $h = _o(Ie),
                    Gh = _o(Be);
                    function Uh(t) {
                        return ou(t) ? Ge(Au(t)) : ha(t)
                    }
                    function Nh(t) {
                        return function(n) {
                            return null == t ? a: Or(t, n)
                        }
                    }
                    var Hh = Io(),
                    Wh = Io(!0);
                    function Vh() {
                        return []
                    }
                    function Zh() {
                        return ! 1
                    }
                    function qh() {
                        return {}
                    }
                    function Yh() {
                        return ""
                    }
                    function Jh() {
                        return ! 0
                    }
                    function Kh(t, n) {
                        if (t = Zs(t), t < 1 || t > D) return [];
                        var e = M,
                        i = Un(t, M);
                        n = Uo(n),
                        t -= M;
                        var r = Ve(i, n);
                        while (++e < t) n(e);
                        return r
                    }
                    function Xh(t) {
                        return us(t) ? Te(t, Au) : Fs(t) ? [t] : no(Eu(Xs(t)))
                    }
                    function Qh(t) {
                        var n = ++dn;
                        return Xs(t) + n
                    }
                    var td = mo((function(t, n) {
                        return t + n
                    }), 0),
                    nd = Co("ceil"),
                    ed = mo((function(t, n) {
                        return t / n
                    }), 1),
                    id = Co("floor");
                    function rd(t) {
                        return t && t.length ? Ir(t, Ah, Pr) : a
                    }
                    function ad(t, n) {
                        return t && t.length ? Ir(t, Uo(n, 2), Pr) : a
                    }
                    function od(t) {
                        return $e(t, Ah)
                    }
                    function ud(t, n) {
                        return $e(t, Uo(n, 2))
                    }
                    function cd(t) {
                        return t && t.length ? Ir(t, Ah, ea) : a
                    }
                    function fd(t, n) {
                        return t && t.length ? Ir(t, Uo(n, 2), ea) : a
                    }
                    var sd = mo((function(t, n) {
                        return t * n
                    }), 1),
                    ld = Co("round"),
                    hd = mo((function(t, n) {
                        return t - n
                    }), 0);
                    function dd(t) {
                        return t && t.length ? We(t, Ah) : 0
                    }
                    function pd(t, n) {
                        return t && t.length ? We(t, Uo(n, 2)) : 0
                    }
                    return _i.after = Ef,
                    _i.ary = Af,
                    _i.assign = Qs,
                    _i.assignIn = tl,
                    _i.assignInWith = nl,
                    _i.assignWith = el,
                    _i.at = il,
                    _i.before = Rf,
                    _i.bind = Bf,
                    _i.bindAll = xh,
                    _i.bindKey = Of,
                    _i.castArray = Kf,
                    _i.chain = Nc,
                    _i.chunk = zu,
                    _i.compact = ju,
                    _i.concat = Pu,
                    _i.cond = Ih,
                    _i.conforms = kh,
                    _i.constant = Sh,
                    _i.countBy = tf,
                    _i.create = rl,
                    _i.curry = zf,
                    _i.curryRight = jf,
                    _i.debounce = Pf,
                    _i.defaults = al,
                    _i.defaultsDeep = ol,
                    _i.defer = Df,
                    _i.delay = Lf,
                    _i.difference = Du,
                    _i.differenceBy = Lu,
                    _i.differenceWith = Fu,
                    _i.drop = Mu,
                    _i.dropRight = $u,
                    _i.dropRightWhile = Gu,
                    _i.dropWhile = Uu,
                    _i.fill = Nu,
                    _i.filter = ef,
                    _i.flatMap = of,
                    _i.flatMapDeep = uf,
                    _i.flatMapDepth = cf,
                    _i.flatten = Vu,
                    _i.flattenDeep = Zu,
                    _i.flattenDepth = qu,
                    _i.flip = Ff,
                    _i.flow = Th,
                    _i.flowRight = Eh,
                    _i.fromPairs = Yu,
                    _i.functions = dl,
                    _i.functionsIn = pl,
                    _i.groupBy = lf,
                    _i.initial = Xu,
                    _i.intersection = Qu,
                    _i.intersectionBy = tc,
                    _i.intersectionWith = nc,
                    _i.invert = bl,
                    _i.invertBy = ml,
                    _i.invokeMap = df,
                    _i.iteratee = Rh,
                    _i.keyBy = pf,
                    _i.keys = wl,
                    _i.keysIn = xl,
                    _i.map = vf,
                    _i.mapKeys = Il,
                    _i.mapValues = kl,
                    _i.matches = Bh,
                    _i.matchesProperty = Oh,
                    _i.memoize = Mf,
                    _i.merge = Sl,
                    _i.mergeWith = Cl,
                    _i.method = zh,
                    _i.methodOf = jh,
                    _i.mixin = Ph,
                    _i.negate = $f,
                    _i.nthArg = Fh,
                    _i.omit = Tl,
                    _i.omitBy = El,
                    _i.once = Gf,
                    _i.orderBy = gf,
                    _i.over = Mh,
                    _i.overArgs = Uf,
                    _i.overEvery = $h,
                    _i.overSome = Gh,
                    _i.partial = Nf,
                    _i.partialRight = Hf,
                    _i.partition = yf,
                    _i.pick = Al,
                    _i.pickBy = Rl,
                    _i.property = Uh,
                    _i.propertyOf = Nh,
                    _i.pull = oc,
                    _i.pullAll = uc,
                    _i.pullAllBy = cc,
                    _i.pullAllWith = fc,
                    _i.pullAt = sc,
                    _i.range = Hh,
                    _i.rangeRight = Wh,
                    _i.rearg = Wf,
                    _i.reject = _f,
                    _i.remove = lc,
                    _i.rest = Vf,
                    _i.reverse = hc,
                    _i.sampleSize = xf,
                    _i.set = Ol,
                    _i.setWith = zl,
                    _i.shuffle = If,
                    _i.slice = dc,
                    _i.sortBy = Cf,
                    _i.sortedUniq = _c,
                    _i.sortedUniqBy = wc,
                    _i.split = uh,
                    _i.spread = Zf,
                    _i.tail = xc,
                    _i.take = Ic,
                    _i.takeRight = kc,
                    _i.takeRightWhile = Sc,
                    _i.takeWhile = Cc,
                    _i.tap = Hc,
                    _i.throttle = qf,
                    _i.thru = Wc,
                    _i.toArray = Ws,
                    _i.toPairs = jl,
                    _i.toPairsIn = Pl,
                    _i.toPath = Xh,
                    _i.toPlainObject = Js,
                    _i.transform = Dl,
                    _i.unary = Yf,
                    _i.union = Tc,
                    _i.unionBy = Ec,
                    _i.unionWith = Ac,
                    _i.uniq = Rc,
                    _i.uniqBy = Bc,
                    _i.uniqWith = Oc,
                    _i.unset = Ll,
                    _i.unzip = zc,
                    _i.unzipWith = jc,
                    _i.update = Fl,
                    _i.updateWith = Ml,
                    _i.values = $l,
                    _i.valuesIn = Gl,
                    _i.without = Pc,
                    _i.words = _h,
                    _i.wrap = Jf,
                    _i.xor = Dc,
                    _i.xorBy = Lc,
                    _i.xorWith = Fc,
                    _i.zip = Mc,
                    _i.zipObject = $c,
                    _i.zipObjectDeep = Gc,
                    _i.zipWith = Uc,
                    _i.entries = jl,
                    _i.entriesIn = Pl,
                    _i.extend = tl,
                    _i.extendWith = nl,
                    Ph(_i, _i),
                    _i.add = td,
                    _i.attempt = wh,
                    _i.camelCase = Wl,
                    _i.capitalize = Vl,
                    _i.ceil = nd,
                    _i.clamp = Ul,
                    _i.clone = Xf,
                    _i.cloneDeep = ts,
                    _i.cloneDeepWith = ns,
                    _i.cloneWith = Qf,
                    _i.conformsTo = es,
                    _i.deburr = Zl,
                    _i.defaultTo = Ch,
                    _i.divide = ed,
                    _i.endsWith = ql,
                    _i.eq = is,
                    _i.escape = Yl,
                    _i.escapeRegExp = Jl,
                    _i.every = nf,
                    _i.find = rf,
                    _i.findIndex = Hu,
                    _i.findKey = ul,
                    _i.findLast = af,
                    _i.findLastIndex = Wu,
                    _i.findLastKey = cl,
                    _i.floor = id,
                    _i.forEach = ff,
                    _i.forEachRight = sf,
                    _i.forIn = fl,
                    _i.forInRight = sl,
                    _i.forOwn = ll,
                    _i.forOwnRight = hl,
                    _i.get = vl,
                    _i.gt = rs,
                    _i.gte = as,
                    _i.has = gl,
                    _i.hasIn = yl,
                    _i.head = Ju,
                    _i.identity = Ah,
                    _i.includes = hf,
                    _i.indexOf = Ku,
                    _i.inRange = Nl,
                    _i.invoke = _l,
                    _i.isArguments = os,
                    _i.isArray = us,
                    _i.isArrayBuffer = cs,
                    _i.isArrayLike = fs,
                    _i.isArrayLikeObject = ss,
                    _i.isBoolean = ls,
                    _i.isBuffer = hs,
                    _i.isDate = ds,
                    _i.isElement = ps,
                    _i.isEmpty = vs,
                    _i.isEqual = gs,
                    _i.isEqualWith = ys,
                    _i.isError = bs,
                    _i.isFinite = ms,
                    _i.isFunction = _s,
                    _i.isInteger = ws,
                    _i.isLength = xs,
                    _i.isMap = Ss,
                    _i.isMatch = Cs,
                    _i.isMatchWith = Ts,
                    _i.isNaN = Es,
                    _i.isNative = As,
                    _i.isNil = Bs,
                    _i.isNull = Rs,
                    _i.isNumber = Os,
                    _i.isObject = Is,
                    _i.isObjectLike = ks,
                    _i.isPlainObject = zs,
                    _i.isRegExp = js,
                    _i.isSafeInteger = Ps,
                    _i.isSet = Ds,
                    _i.isString = Ls,
                    _i.isSymbol = Fs,
                    _i.isTypedArray = Ms,
                    _i.isUndefined = $s,
                    _i.isWeakMap = Gs,
                    _i.isWeakSet = Us,
                    _i.join = ec,
                    _i.kebabCase = Kl,
                    _i.last = ic,
                    _i.lastIndexOf = rc,
                    _i.lowerCase = Xl,
                    _i.lowerFirst = Ql,
                    _i.lt = Ns,
                    _i.lte = Hs,
                    _i.max = rd,
                    _i.maxBy = ad,
                    _i.mean = od,
                    _i.meanBy = ud,
                    _i.min = cd,
                    _i.minBy = fd,
                    _i.stubArray = Vh,
                    _i.stubFalse = Zh,
                    _i.stubObject = qh,
                    _i.stubString = Yh,
                    _i.stubTrue = Jh,
                    _i.multiply = sd,
                    _i.nth = ac,
                    _i.noConflict = Dh,
                    _i.noop = Lh,
                    _i.now = Tf,
                    _i.pad = th,
                    _i.padEnd = nh,
                    _i.padStart = eh,
                    _i.parseInt = ih,
                    _i.random = Hl,
                    _i.reduce = bf,
                    _i.reduceRight = mf,
                    _i.repeat = rh,
                    _i.replace = ah,
                    _i.result = Bl,
                    _i.round = ld,
                    _i.runInContext = t,
                    _i.sample = wf,
                    _i.size = kf,
                    _i.snakeCase = oh,
                    _i.some = Sf,
                    _i.sortedIndex = pc,
                    _i.sortedIndexBy = vc,
                    _i.sortedIndexOf = gc,
                    _i.sortedLastIndex = yc,
                    _i.sortedLastIndexBy = bc,
                    _i.sortedLastIndexOf = mc,
                    _i.startCase = ch,
                    _i.startsWith = fh,
                    _i.subtract = hd,
                    _i.sum = dd,
                    _i.sumBy = pd,
                    _i.template = sh,
                    _i.times = Kh,
                    _i.toFinite = Vs,
                    _i.toInteger = Zs,
                    _i.toLength = qs,
                    _i.toLower = lh,
                    _i.toNumber = Ys,
                    _i.toSafeInteger = Ks,
                    _i.toString = Xs,
                    _i.toUpper = hh,
                    _i.trim = dh,
                    _i.trimEnd = ph,
                    _i.trimStart = vh,
                    _i.truncate = gh,
                    _i.unescape = yh,
                    _i.uniqueId = Qh,
                    _i.upperCase = bh,
                    _i.upperFirst = mh,
                    _i.each = ff,
                    _i.eachRight = sf,
                    _i.first = Ju,
                    Ph(_i,
                    function() {
                        var t = {};
                        return Ar(_i, (function(n, e) {
                            hn.call(_i.prototype, e) || (t[e] = n)
                        })),
                        t
                    } (), {
                        chain: !1
                    }),
                    _i.VERSION = o,
                    we(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                        _i[t].placeholder = _i
                    })),
                    we(["drop", "take"], (function(t, n) {
                        Si.prototype[t] = function(e) {
                            e = e === a ? 1 : Gn(Zs(e), 0);
                            var i = this.__filtered__ && !n ? new Si(this) : this.clone();
                            return i.__filtered__ ? i.__takeCount__ = Un(e, i.__takeCount__) : i.__views__.push({
                                size: Un(e, M),
                                type: t + (i.__dir__ < 0 ? "Right": "")
                            }),
                            i
                        },
                        Si.prototype[t + "Right"] = function(n) {
                            return this.reverse()[t](n).reverse()
                        }
                    })),
                    we(["filter", "map", "takeWhile"], (function(t, n) {
                        var e = n + 1,
                        i = e == O || e == j;
                        Si.prototype[t] = function(t) {
                            var n = this.clone();
                            return n.__iteratees__.push({
                                iteratee: Uo(t, 3),
                                type: e
                            }),
                            n.__filtered__ = n.__filtered__ || i,
                            n
                        }
                    })),
                    we(["head", "last"], (function(t, n) {
                        var e = "take" + (n ? "Right": "");
                        Si.prototype[t] = function() {
                            return this[e](1).value()[0]
                        }
                    })),
                    we(["initial", "tail"], (function(t, n) {
                        var e = "drop" + (n ? "": "Right");
                        Si.prototype[t] = function() {
                            return this.__filtered__ ? new Si(this) : this[e](1)
                        }
                    })),
                    Si.prototype.compact = function() {
                        return this.filter(Ah)
                    },
                    Si.prototype.find = function(t) {
                        return this.filter(t).head()
                    },
                    Si.prototype.findLast = function(t) {
                        return this.reverse().find(t)
                    },
                    Si.prototype.invokeMap = ba((function(t, n) {
                        return "function" == typeof t ? new Si(this) : this.map((function(e) {
                            return Gr(e, t, n)
                        }))
                    })),
                    Si.prototype.reject = function(t) {
                        return this.filter($f(Uo(t)))
                    },
                    Si.prototype.slice = function(t, n) {
                        t = Zs(t);
                        var e = this;
                        return e.__filtered__ && (t > 0 || n < 0) ? new Si(e) : (t < 0 ? e = e.takeRight( - t) : t && (e = e.drop(t)), n !== a && (n = Zs(n), e = n < 0 ? e.dropRight( - n) : e.take(n - t)), e)
                    },
                    Si.prototype.takeRightWhile = function(t) {
                        return this.reverse().takeWhile(t).reverse()
                    },
                    Si.prototype.toArray = function() {
                        return this.take(M)
                    },
                    Ar(Si.prototype, (function(t, n) {
                        var e = /^(?:filter|find|map|reject)|While$/.test(n),
                        i = /^(?:head|last)$/.test(n),
                        r = _i[i ? "take" + ("last" == n ? "Right": "") : n],
                        o = i || /^find/.test(n);
                        r && (_i.prototype[n] = function() {
                            var n = this.__wrapped__,
                            u = i ? [1] : arguments,
                            c = n instanceof Si,
                            f = u[0],
                            s = c || us(n),
                            l = function(t) {
                                var n = r.apply(_i, Ee([t], u));
                                return i && h ? n[0] : n
                            };
                            s && e && "function" == typeof f && 1 != f.length && (c = s = !1);
                            var h = this.__chain__,
                            d = !!this.__actions__.length,
                            p = o && !h,
                            v = c && !d;
                            if (!o && s) {
                                n = v ? n: new Si(this);
                                var g = t.apply(n, u);
                                return g.__actions__.push({
                                    func: Wc,
                                    args: [l],
                                    thisArg: a
                                }),
                                new ki(g, h)
                            }
                            return p && v ? t.apply(this, u) : (g = this.thru(l), p ? i ? g.value()[0] : g.value() : g)
                        })
                    })),
                    we(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                        var n = un[t],
                        e = /^(?:push|sort|unshift)$/.test(t) ? "tap": "thru",
                        i = /^(?:pop|shift)$/.test(t);
                        _i.prototype[t] = function() {
                            var t = arguments;
                            if (i && !this.__chain__) {
                                var r = this.value();
                                return n.apply(us(r) ? r: [], t)
                            }
                            return this[e]((function(e) {
                                return n.apply(us(e) ? e: [], t)
                            }))
                        }
                    })),
                    Ar(Si.prototype, (function(t, n) {
                        var e = _i[n];
                        if (e) {
                            var i = e.name + "";
                            hn.call(fe, i) || (fe[i] = []),
                            fe[i].push({
                                name: n,
                                func: e
                            })
                        }
                    })),
                    fe[yo(a, m).name] = [{
                        name: "wrapper",
                        func: a
                    }],
                    Si.prototype.clone = Ci,
                    Si.prototype.reverse = Ti,
                    Si.prototype.value = Ei,
                    _i.prototype.at = Vc,
                    _i.prototype.chain = Zc,
                    _i.prototype.commit = qc,
                    _i.prototype.next = Yc,
                    _i.prototype.plant = Kc,
                    _i.prototype.reverse = Xc,
                    _i.prototype.toJSON = _i.prototype.valueOf = _i.prototype.value = Qc,
                    _i.prototype.first = _i.prototype.head,
                    En && (_i.prototype[En] = Jc),
                    _i
                },
                wi = _i();
                ue._ = wi,
                r = function() {
                    return wi
                }.call(n, e, n, i),
                r === a || (i.exports = r)
            }).call(this)
        }).call(this, e("c8ba"), e("62e4")(t))
    },
    "2f58": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("308f"),
        r = e("ec48");
        for (var a in r)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return r[t]
            }))
        } (a);
        e("62f7");
        var o, u = e("f0c5"),
        c = Object(u["a"])(r["default"], i["b"], i["c"], !1, null, "2434ecae", null, !1, i["a"], o);
        n["default"] = c.exports
    },
    "308f": function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() {
            return r
        })),
        e.d(n, "c", (function() {
            return a
        })),
        e.d(n, "a", (function() {
            return i
        }));
        var i = {
            activityHeadBanners: e("0a5d").
        default,
            chanceCardButton: e("8dfe").
        default,
            basePopupBottom: e("1648").
        default,
            activityMultiModule: e("04d3").
        default,
            baseRichText: e("fea90").
        default,
            activityRecordItem: e("7e5f").
        default,
            prizeDialog: e("1588").
        default,
            chanceInfoDialog: e("7548").
        default,
            chanceRecordDialog: e("31ef8").
        default,
            activityEffectSet: e("a367").
        default
        },
        r = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("v-uni-view", {
                staticClass: "activity-container"
            },
            [t.activityLoadEnd ? [e("v-uni-view", {
                staticClass: "activity-bg",
                style: t.bgStyleStr
            }), e("activity-head-banners", {
                attrs: {
                    banners: t.banners
                }
            }), e("v-uni-view", {
                staticClass: "activity-header",
                class: {
                    translateZ: t.compatible && !t.isCompatible
                },
                staticStyle: {
                    position: "relative"
                },
                style: t.topBgStyleStr
            },
            [t._t("header")], 2), e("v-uni-view", {
                staticClass: "activity-main",
                class: {
                    translateZ: t.compatible
                }
            },
            [t._t("content"), t.activityGuid && 1 == t.chanceCard.state ? e("v-uni-view", {
                staticClass: "chance-card",
                style: t.chanceCardStyle
            },
            [e("chance-card-button", {
                ref: "chanceCardButton",
                attrs: {
                    activityGuid: t.activityGuid
                }
            })], 1) : t._e()], 2), t._t("footer"), t.isHideBtns || t.isDesignerEdit ? t._e() : e("v-uni-view", [t.isShowRule || t.isShowTime || t.isShare ? e("v-uni-view", {
                staticClass: "top-buttons",
                class: {
                    buttons__top: t.isShowMall
                }
            },
            [t.isShowRuleBtn ? e("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconRule
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.showPupup.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.isShare && t.activityInfo && t.activityInfo.affiliateTask && (t.activityInfo.affiliateSetting.memberInfo || 1 == t.activityInfo.affiliateSetting.settingInfo.openApply) ? e("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconAffiliate
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.toAffiliate.apply(void 0, arguments)
                    }
                }
            }) : t.isShare && !t.isForbidShare ? e("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconShare
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.showSharePupup.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.isShowAdTop && t.adObj.isShow ? e("v-uni-image", {
                staticClass: "button-img",
                staticStyle: {
                    "margin-top": "20rpx"
                },
                attrs: {
                    src: t.adObj.src
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.gotoAdLink.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e(), t.isReport || t.isChat ? e("v-uni-view", {
                staticClass: "bottom-buttons"
            },
            [t.isChat ? e("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconChat
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.callChat.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.isReport ? e("v-uni-image", {
                staticClass: "button-report",
                attrs: {
                    src: t.iconReport
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.showReport.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e(), t.isShowIconBack || t.isShowIconInMpWeixin ? e("v-uni-view", {
                staticClass: "back-h5-buttons"
            },
            [e("v-uni-image", {
                staticClass: "button-img-back",
                attrs: {
                    src: t.iconBack
                },
                on: {
                    click: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.back.apply(void 0, arguments)
                    }
                }
            })], 1) : t._e()], 1)] : t._e(), t.popupVisible ? e("base-popup-bottom", {
                on: {
                    close: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.close.apply(void 0, arguments)
                    }
                }
            },
            [e("activity-multi-module", {
                attrs: {
                    tabs: t.tabs,
                    activityGuid: t.guid
                },
                scopedSlots: t._u([{
                    key: "tab0",
                    fn: function() {
                        return [e("v-uni-view", {
                            staticStyle: {
                                padding: "20rpx"
                            }
                        },
                        [t.isShowTime && 1 == t.timeType ? e("v-uni-view", {
                            staticClass: "font-md strong mb-sm"
                        },
                        [t._v("活动时间")]) : t._e(), t.isShowTime && 1 == t.timeType ? e("v-uni-view", {
                            staticClass: "font-md mb-lg"
                        },
                        [t._v(t._s(t.startTime) + " - " + t._s(t.endTime))]) : t._e(), t.isShowRule ? e("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("活动规则")]) : t._e(), t.isShowRule ? e("v-uni-view", {
                            staticClass: "font-md  mb-lg"
                        },
                        [e("base-rich-text", {
                            attrs: {
                                content: t.rule.content
                            }
                        })], 1) : t._e(), t.mall.companyName ? e("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("活动主办单位")]) : t._e(), t.mall.companyName ? e("v-uni-view", {
                            staticClass: "font-md mb-lg"
                        },
                        [e("base-rich-text", {
                            attrs: {
                                content: t.mall.companyName
                            }
                        })], 1) : t._e(), t.isShowButtonCopyright || 256128 == t.mall.guid ? e("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("技术支持")]) : t._e(), t.isShowButtonCopyright || 256128 == t.mall.guid ? e("v-uni-view", {
                            staticClass: "font-md mb-lg blue",
                            staticStyle: {
                                display: "flex"
                            }
                        },
                        [e("v-uni-view", {
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.showCopyrightPage.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v(t._s(t.copyrightText))]), e("v-uni-image", {
                            staticStyle: {
                                "margin-left": "40rpx",
                                width: "196rpx"
                            },
                            attrs: {
                                src: t.adRuleObj.src,
                                mode: "widthFix"
                            },
                            nativeOn: {
                                click: function(n) {
                                    return n.stopPropagation(),
                                    t.gotoAdRuleLink(n)
                                }
                            }
                        })], 1) : t._e()], 1)]
                    },
                    proxy: !0
                },
                {
                    key: "tab1",
                    fn: function() {
                        return [t.prizeList.length > 0 ? e("v-uni-view", [t.isPrizeTitle ? e("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("活动奖品")]) : t._e(), t._l(t.prizeList, (function(n, i) {
                            return e("v-uni-view", {
                                key: i,
                                staticClass: "list-item",
                                class: [{
                                    "border-top-none": 0 == i
                                }]
                            },
                            [e("activity-record-item", {
                                attrs: {
                                    name: n.prizeName
                                },
                                scopedSlots: t._u([{
                                    key: "header",
                                    fn: function() {
                                        return [e("img", {
                                            staticStyle: {
                                                width: "92rpx",
                                                height: "92rpx",
                                                "margin-right": "32rpx"
                                            },
                                            attrs: {
                                                src: t._f("imgPreFix")(n.prizeIcon),
                                                alt: "",
                                                mode: "aspectFit"
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }], null, !0)
                            },
                            [e("v-uni-view", {
                                staticStyle: {
                                    color: "#2c2c2c",
                                    opacity: "0.5"
                                }
                            },
                            [t._v(t._s(n.prizeCount + "个"))])], 1)], 1)
                        }))], 2) : t._e(), t.prizeRankList.length > 0 ? e("v-uni-view", {
                            class: {
                                "rank-item": t.prizeList.length > 0
                            }
                        },
                        [t.isPrizeTitle ? e("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("排名奖品")]) : t._e(), t._l(t.prizeRankList, (function(n, i) {
                            return e("v-uni-view", {
                                key: i,
                                staticClass: "list-item",
                                class: [{
                                    "border-top-none": 0 == i
                                }]
                            },
                            [e("activity-record-item", {
                                attrs: {
                                    name: n.prizeName
                                },
                                scopedSlots: t._u([{
                                    key: "header",
                                    fn: function() {
                                        return [e("img", {
                                            staticStyle: {
                                                width: "92rpx",
                                                height: "92rpx",
                                                "margin-right": "32rpx"
                                            },
                                            attrs: {
                                                src: t._f("imgPreFix")(n.prizeIcon),
                                                alt: "",
                                                mode: "aspectFit"
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }], null, !0)
                            },
                            [e("v-uni-view", {
                                staticStyle: {
                                    color: "#2c2c2c",
                                    opacity: "0.5"
                                }
                            },
                            [t._v(t._s(n.exdata.posStart) + "~" + t._s(n.exdata.posEnd) + "名")])], 1)], 1)
                        }))], 2) : t._e()]
                    },
                    proxy: !0
                }], null, !1, 2569274907)
            })], 1) : t._e(), t.isPrizeDialog && t.prize.visible ? e("prize-dialog", {
                ref: "prizeDialog",
                attrs: {
                    title: t.prize.title,
                    subTitle: t.prize.subTitle,
                    isWin: t.prize.exdata.isWin,
                    "prize-info": t.prize.exdata.prizeInfo,
                    adExdata: t.prize.exdata.adExdata
                },
                on: {
                    callback: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.callbackEvent("prize", n)
                        }.apply(void 0, arguments)
                    },
                    close: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.closeEvent("prize", n)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.chanceCardInfo.visible ? e("chance-info-dialog", {
                attrs: {
                    exdata: t.chanceCardInfo.exdata
                },
                on: {
                    close: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.closeEvent("chanceCardInfo", n)
                        }.apply(void 0, arguments)
                    },
                    callback: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.callbackEvent("chanceCardInfo", n)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.chanceCardRecord.visible ? e("chance-record-dialog", {
                attrs: {
                    exdata: t.chanceCardRecord.exdata
                },
                on: {
                    close: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.closeEvent("chanceCardRecord", n)
                        }.apply(void 0, arguments)
                    },
                    callback: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.callbackEvent("chanceCardRecord", n)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.shareChanceDialog.visible ? e("share1-chance1-dialog", {
                attrs: {
                    exdata: t.shareChanceDialog.exdata
                },
                on: {
                    close: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.closeEvent("shareChanceDialog", n)
                        }.apply(void 0, arguments)
                    },
                    callback: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        function(n) {
                            t.callbackEvent("shareChanceDialog", n)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.activityInfo.activityEffect && 1 == t.activityInfo.activityEffect.isEffect ? e("activity-effect-set", {
                attrs: {
                    effect: t.activityInfo.activityEffect && t.activityInfo.activityEffect
                }
            }) : t._e(), e("v-uni-view", {
                staticStyle: {
                    display: "none"
                }
            },
            [t._v(t._s(t.calcBannerHeight))])], 2)
        },
        a = []
    },
    3342 : function(t, n, e) {
        var i = e("6491");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var r = e("4f06").
    default;
        r("081f3ed2", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "336d": function(t, n, e) {
        var i = e("1863");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var r = e("4f06").
    default;
        r("012367ef", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "336f": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("5425"),
        r = e("4fda");
        for (var a in r)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return r[t]
            }))
        } (a);
        e("88d9");
        var o, u = e("f0c5"),
        c = Object(u["a"])(r["default"], i["b"], i["c"], !1, null, "6db9d960", null, !1, i["a"], o);
        n["default"] = c.exports
    },
    "41d6": function(t, n, e) {
        var i = e("c837");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var r = e("4f06").
    default;
        r("8e11d1fa", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    4464 : function(t, n, e) {
        "use strict";
        var i = e("8a5a"),
        r = e.n(i);
        r.a
    },
    "4e14": function(t, n, e) {
        "use strict";
        var i;
        e.d(n, "b", (function() {
            return r
        })),
        e.d(n, "c", (function() {
            return a
        })),
        e.d(n, "a", (function() {
            return i
        }));
        var r = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return t.banners.length > 0 ? e("v-uni-view", {
                staticClass: "head-banners"
            },
            [t.banners.length > 1 ? [e("v-uni-swiper", {
                staticClass: "swiper",
                attrs: {
                    "indicator-dots": t.indicatorDots,
                    "indicator-color": t.indicatorColor,
                    "indicator-active-color": t.indicatorActiveColor,
                    autoplay: t.autoplay,
                    interval: t.interval,
                    duration: t.duration
                }
            },
            t._l(t.banners, (function(n, i) {
                return e("v-uni-swiper-item", {
                    key: i
                },
                [e("v-uni-image", {
                    attrs: {
                        mode: "aspectFit",
                        src: t.imageHost + n
                    }
                })], 1)
            })), 1)] : [t.banners[0] ? e("v-uni-image", {
                attrs: {
                    src: t._f("imgPreFix")(t.banners[0]),
                    mode: "widthFix"
                }
            }) : t._e()]], 2) : t._e()
        },
        a = []
    },
    "4fda": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("7ad7"),
        r = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return i[t]
            }))
        } (a);
        n["default"] = r.a
    },
    "52a4": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("655b"),
        r = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return i[t]
            }))
        } (a);
        n["default"] = r.a
    },
    5425 : function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() {
            return r
        })),
        e.d(n, "c", (function() {
            return a
        })),
        e.d(n, "a", (function() {
            return i
        }));
        var i = {
            basePage: e("3d21").
        default,
            baseActivity: e("2f58").
        default
        },
        r = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("base-page", {
                attrs: {
                    id: "basePageId",
                    pageClass: "page-footer-class",
                    isShowCopyright: !0,
                    isShowMallTopbar: !0
                }
            },
            [e("base-activity", {
                attrs: {
                    isFullScreen: !0,
                    isPrizeDialog: !0,
                    "bg-style": t.activityInfo.skin.bgStyle,
                    id: "baseActivityId",
                    rule: t.rule,
                    "activity-guid": t.activityGuid,
                    "activity-info": t.activityInfo,
                    "chance-card": t.activityInfo.activityChanceSetting,
                    isPopupVisible: t.activityInfo.activityExt.isAutoDialog
                },
                on: {
                    topBtn: function(n) {
                        arguments[0] = n = t.$handleEvent(n),
                        t.innerEvent.apply(void 0, arguments)
                    }
                },
                scopedSlots: t._u([{
                    key: "header",
                    fn: function() {
                        return [e("v-uni-view", {
                            staticClass: "answer-index"
                        },
                        [e("v-uni-view", {
                            staticClass: "main"
                        },
                        [e("v-uni-view", {
                            staticClass: "inner",
                            style: {
                                top: t.innerTop + "rpx"
                            }
                        },
                        [e("v-uni-view", {
                            staticClass: "join-data",
                            style: {
                                color: t.color
                            }
                        },
                        [t._v("已有 " + t._s(t.activityInfo.joinCount) + " 人参与活动")]), 1 == t.openPractise ? e("v-uni-view", {
                            staticClass: "btn-box"
                        },
                        [e("v-uni-view", {
                            staticClass: "btn-start-1 block",
                            style: t.startBtnStyle,
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.startExam.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v(t._s(t.startBtnText))]), e("v-uni-view", {
                            staticClass: "btn-start-1 block",
                            style: t.startBtnStyle,
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.startPractice.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v("答题练习")])], 1) : t._e(), 0 == t.openPractise ? e("v-uni-button", {
                            staticClass: "btn-start block",
                            style: t.startBtnStyle,
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.startExam.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v(t._s(t.startBtnText))]) : t._e(), e("v-uni-view", {
                            staticClass: "btn-group",
                            style: {
                                color: t.color
                            }
                        },
                        [t.isShowTopEntry ? e("v-uni-view", {
                            staticClass: "btn",
                            staticStyle: {
                                "margin-right": "50rpx"
                            },
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.goToTops.apply(void 0, arguments)
                                }
                            }
                        },
                        [e("v-uni-text", {
                            staticClass: "iconfont iconxingzhuangjiehe"
                        }), t._v("排行榜")], 1) : t._e(), e("v-uni-view", {
                            staticClass: "btn",
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.goToRecord.apply(void 0, arguments)
                                }
                            }
                        },
                        [e("v-uni-text", {
                            staticClass: "iconfont iconzu4"
                        }), t._v("答题记录")], 1), t.isShowPrizeBtn ? e("v-uni-view", {
                            staticClass: "btn",
                            style: {
                                color: t.color,
                                marginLeft: "50rpx"
                            },
                            on: {
                                click: function(n) {
                                    arguments[0] = n = t.$handleEvent(n),
                                    t.gotoPrize.apply(void 0, arguments)
                                }
                            }
                        },
                        [e("v-uni-text", {
                            staticClass: "iconfont iconwodejiangpin mr-xs"
                        }), t._v("我的奖品")], 1) : t._e()], 1)], 1)], 1)], 1)]
                    },
                    proxy: !0
                }])
            })], 1)
        },
        a = []
    },
    "62f7": function(t, n, e) {
        "use strict";
        var i = e("9627"),
        r = e.n(i);
        r.a
    },
    6491 : function(t, n, e) {
        var i = e("4bad");
        n = i(!1),
        n.push([t.i, ".head-banners[data-v-22bdfcd6]{-webkit-transform:translateZ(0);transform:translateZ(0)}.head-banners .swiper[data-v-22bdfcd6]{width:100%;height:%?418?%;background:#efeff4}.head-banners .swiper uni-image[data-v-22bdfcd6]{width:100%;height:100%}.head-banners > uni-image[data-v-22bdfcd6]{display:block;width:100%;height:%?418?%}", ""]),
        t.exports = n
    },
    "655b": function(t, n, e) {
        "use strict"; (function(t) {
            var i = e("4ea4");
            e("4160"),
            e("ac1f"),
            e("159b"),
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = void 0;
            i(e("ca00")),
            i(e("43cc")),
            i(e("e143"));
            var r, a, o = i(e("2ef0")),
            u = {
                name: "ActivityEffectSet",
                props: {
                    effect: {
                        type: Object,
                    default:
                        function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        Image: []
                    }
                },
                watch: {
                    effect: {
                        handler: function() {
                            this.creat()
                        },
                        immediate: !0
                    }
                },
                mounted: function() {
                    t.log(this.effect),
                    uni.getSystemInfo({
                        success: function(t) {
                            r = t.windowWidth,
                            a = t.windowHeight
                        }
                    }),
                    this.creat()
                },
                methods: {
                    creat: function() {
                        var n = this;
                        if (1 == this.effect.effectList.length) for (var e = o.
                    default.cloneDeep(this.effect.effectList), i = 1; i < 10; i++) e.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (2 == this.effect.effectList.length) for (var a = o.
                    default.cloneDeep(this.effect.effectList), u = 1; u < 7; u++) a.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (3 == this.effect.effectList.length) for (var c = o.
                    default.cloneDeep(this.effect.effectList), f = 1; f < 5; f++) c.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (4 == this.effect.effectList.length) for (var s = o.
                    default.cloneDeep(this.effect.effectList), l = 1; l < 4; l++) s.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (5 == this.effect.effectList.length) for (var h = o.
                    default.cloneDeep(this.effect.effectList), d = 1; d < 3; d++) h.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (6 == this.effect.effectList.length) for (var p = o.
                    default.cloneDeep(this.effect.effectList), v = 1; v < 3; v++) p.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (7 == this.effect.effectList.length) for (var g = o.
                    default.cloneDeep(this.effect.effectList), y = 1; y < 2; y++) g.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        if (8 == this.effect.effectList.length) for (var b = o.
                    default.cloneDeep(this.effect.effectList), m = 1; m < 2; m++) b.forEach((function(t, e) {
                            n.effect.effectList.push(t)
                        }));
                        this.effect.random = [],
                        this.effect.effectList.forEach((function(t, e) {
                            var i = {
                                image: t,
                                random: Math.floor(20 * Math.random() + 20) + "px",
                                left: Math.floor(Math.random() * r - 40) + "px",
                                top: Math.floor(300 * Math.random()) + "px"
                            };
                            n.effect.random.push(i)
                        })),
                        t.log(this.effect),
                        setInterval((function() {}), 1e3),
                        this.$forceUpdate()
                    },
                    run: function() {
                        var t = this;
                        this.effect.random.forEach((function(n, e) {
                            var i;
                            i = 2 == t.effect.effectType ? ".img" + e: ".pic" + e,
                            t.distance(i),
                            t.top - 100 > a - 100 && (n.left = Math.floor(Math.random() * r) + "px")
                        })),
                        this.$forceUpdate()
                    },
                    distance: function(n) {
                        var e = this,
                        i = uni.createSelectorQuery(). in (e);
                        i.select(n).boundingClientRect((function(n) {
                            t.log(n),
                            e.top = n.top
                        })).exec()
                    }
                }
            };
            n.
        default = u
        }).call(this, e("5a52")["default"])
    },
    "6ddb": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("2163"),
        r = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return i[t]
            }))
        } (a);
        n["default"] = r.a
    },
    "7ad7": function(t, n, e) {
        "use strict";
        var i = e("4ea4");
        e("99af"),
        e("b680"),
        e("e25e"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.
    default = void 0;
        var r = i(e("e143")),
        a = i(e("1406")),
        o = i(e("c5e2")),
        u = i(e("ca00")),
        c = i(e("60a2")),
        f = i(e("bee5")),
        s = i(e("5dd8")),
        l = i(e("a08b")),
        h = i(e("9cc6")),
        d = {
            data: function() {
                return {
                    themeColor: "#0080FF",
                    color: "#0080FF",
                    startBtnStyle: "",
                    activityGuid: "",
                    activityType: 4,
                    activityInfo: {
                        startTime: "",
                        endTime: "",
                        joinData: {
                            list: [],
                            total: 0
                        },
                        skin: {},
                        activityChanceSetting: {},
                        activityExt: {}
                    },
                    downTime: "",
                    pagePath: r.
                default.$pagePath,
                    isShowTopEntry: !1,
                    startBtnText: "开始答题",
                    defaultTheme: {
                        colorStyle: {
                            themeColor: "#0080FF",
                            color: "#0080ff"
                        },
                        bgStyle: {
                            backgroundColor: "",
                            backgroundImage: "mini/plugin/answer/default_bg.png",
                            color: ""
                        },
                        startBtnStyle: {
                            color: "#fff",
                            bgColor: "#0080FF",
                            bgImage: "",
                            btnText: "开始答题",
                            btnPos: 416
                        }
                    },
                    rule: {},
                    offsetBottomBtn: 416,
                    pageHeight: 1336,
                    isAutoDialog: !1,
                    openPractise: 0,
                    practiceType: 1,
                    screenConfig: {}
                }
            },
            onLoaded: function(t) {
                this.activityInfo = c.
            default.getData(t.guid),
                this.activityGuid = t.guid,
                this.init()
            },
            onShow: function() {
                var t = this;
                setTimeout((function() {
                    t.updateShare()
                }), 2e3)
            },
            computed: {
                innerTop: function() {
                    return this.pageHeight - this.offsetBottomBtn || 900
                },
                isShowPrizeBtn: function() {
                    return 1 == this.activityInfo.activityExt.isLottery || 1 == this.activityInfo.openRankLottery || 1 == this.screenConfig.openScreen && 1 == this.screenConfig.isLottery
                }
            },
            destroyed: function() {},
            methods: {
                innerEvent: function(t) {
                    this.pageHeight = t
                },
                init: function() {
                    this.rule = {
                        startTime: this.activityInfo.startTime,
                        endTime: this.activityInfo.endTime,
                        content: this.activityInfo.ruleContent
                    },
                    this.isAutoDialog = 1 == this.activityInfo.activityExt.isAutoDialog,
                    this.activityInfo.activityAnswerPractise && (this.openPractise = this.activityInfo.activityAnswerPractise.openPractise || 0, this.practiceType = this.activityInfo.activityAnswerPractise.practiceType || 1),
                    this.screenConfig = this.activityInfo.screenConfig || {},
                    this.initTheme(),
                    this.initAnswerTopBar(),
                    c.
                default.initAbnormal({
                        activityGuid:
                        this.activityGuid,
                        content: "上次答题未正常提交，是否继续上次答题？",
                        url: this.pagePath.answerContent
                    }),
                    this.updateShare(),
                    u.
                default.setNavigationBarTitle(this.activityInfo.activityName)
                },
                initDownTime: function() {
                    var t = parseInt(this.activityInfo.answerSetting.downTime);
                    if (t >= 60) {
                        var n = t / 60;
                        this.downTime = Math.floor(n) === n ? n: n.toFixed(1),
                        this.downTimeUnit = "分钟"
                    } else this.downTime = t
                },
                initTheme: function(t) {
                    var n = this.activityInfo.theme.list ? o.
                default.parseTheme(this.activityInfo.theme):
                    this.defaultTheme;
                    if (this.activityInfo.skin = n, n) {
                        n.startBtnStyle ? this.offsetBottomBtn = n.startBtnStyle.btnPos: n.startBtnStyle = this.defaultTheme.startBtnStyle;
                        var e = n.colorStyle.themeColor,
                        i = n.colorStyle.color,
                        r = "color:".concat(n.startBtnStyle.color, ";background:").concat(n.startBtnStyle.bgColor, " url(").concat(u.
                    default.getImageUrl(n.startBtnStyle.bgImage), ") no-repeat center / cover;border-radius:").concat(n.startBtnStyle.radius || 20, "px");
                        this.startBtnStyle = r,
                        this.themeColor = e,
                        n.bgStyle && n.bgStyle.color && (i = n.bgStyle.color),
                        this.color = i,
                        this.startBtnText = n.startBtnStyle.btnText
                    }
                },
                initAnswerTopBar: function() {
                    var t = this.activityInfo,
                    n = t.showSetting.isShowTopByDay,
                    e = t.showSetting.isShowTopByWeek,
                    i = t.showSetting.isShowTopByMonth,
                    r = t.showSetting.isShowTop,
                    a = !0;
                    t.showSetting || (t.showSetting = {
                        isShowTopByDay: 1,
                        isShowTop: 1
                    }),
                    "0" == n && "0" == e && "0" == i && "0" == r && (a = !1),
                    f.
                default.setData("ISHOW_ANSWER_TOP_BAR_" + t.guid, a),
                    f.
                default.setData("ANSWER_FLAG_" + t.guid, !0),
                    this.isShowTopEntry = a
                },
                startExam: function(t) {
                    var n = this;
                    u.
                default.recordClickEvent(t),
                    u.
                default.showLoginDialog((function() {
                        c.
                    default.checkJoinLimit(n.activityInfo, (function() {
                            var e = {
                                activityGuid: n.activityGuid,
                                activityType: n.activityType
                            };
                            u.
                        default.showLoading(),
                            a.
                        default.updateAnswerCount(e).then((function(e) {
				/*				{
            "id": "2483212",
            "wsiteGuid": "jdlnnh",
            "activityGuid": "fcb9860b439ae1a8a226f0f91e8cce1c",
            "activityType": "4",
            "categoryId": "0",
            "questionMode": "1",
            "guid": "fa706b6875cc570be7d9f94669822551",
            "score": "5",
            "pos": "1",
            "question": "要按照国务院有关规定，将社会保险基金纳入社会保障基金财政专户，实行（  ）管理，专款专用，任何地区、部门、单位和个人均不得挤占挪用。（单选）",
            "image": "",
            "music": "",
            "video": "",
            "encryptUrl": "",
            "checkpoint": "0",
            "type": "text",
            "checkpointGuid": "",
            "exdata": {
                "answerTime": 60,
                "answerAction": 1,
                "selectCount": 1,
                "questionMode": 1,
                "scoreMode": 1
            },
            "createTime": "2022-03-14 10:42:20",
            "updateTime": "2022-03-14 10:42:20",
            "scoreMode": "1",
            "shortContent": "",
            "result": [{
                "id": "9267306",
                "wsiteGuid": "jdlnnh",
                "activityGuid": "fcb9860b439ae1a8a226f0f91e8cce1c",
                "questionActivityGuid": "fa706b6875cc570be7d9f94669822551",
                "pos": "1",
                "right": "",
                "value": "以收定支",
                "answerExplain": "",
                "answerAction": "1",
                "gotoAnswerId": null,
                "score": "10",
                "endScore": null,
                "isDeleted": "0",
                "createTime": "2022-03-14 10:42:20",
                "updateTime": "2022-03-14 10:42:20",
                "resultPos": "1",
                "shortMatch": {
                    "min": 0,
                    "max": 0
                },
                "rightEncry": ""
            },
            {
                "id": "9267307",
                "wsiteGuid": "jdlnnh",
                "activityGuid": "fcb9860b439ae1a8a226f0f91e8cce1c",
                "questionActivityGuid": "fa706b6875cc570be7d9f94669822551",
                "pos": "2",
                "right": "",
                "value": "以支定收",
                "answerExplain": "",
                "answerAction": "1",
                "gotoAnswerId": null,
                "score": "10",
                "endScore": null,
                "isDeleted": "0",
                "createTime": "2022-03-14 10:42:20",
                "updateTime": "2022-03-14 10:42:20",
                "resultPos": "1",
                "shortMatch": {
                    "min": 0,
                    "max": 0
                },
                "rightEncry": ""
            },
            {
                "id": "9267308",
                "wsiteGuid": "jdlnnh",
                "activityGuid": "fcb9860b439ae1a8a226f0f91e8cce1c",
                "questionActivityGuid": "fa706b6875cc570be7d9f94669822551",
                "pos": "3",
                "right": "",
                "value": "收支两条线",
                "answerExplain": "《社会保险基金财务制度》第六条 基金纳入社会保障基金财政专户（以下简称财政专户），实行“收支两条线”管理。基金按照险种及不同制度分别建账、分账核算、分别计息、专款专用。基金之间不得相互挤占和调剂，不得违规投资运营，不得用于平衡一般公共预算。",
                "answerAction": "1",
                "gotoAnswerId": null,
                "score": "10",
                "endScore": null,
                "isDeleted": "0",
                "createTime": "2022-03-14 10:42:20",
                "updateTime": "2022-03-14 10:42:20",
                "resultPos": "1",
                "shortMatch": {
                    "min": 0,
                    "max": 0
                },
                "rightEncry": ""
            },
            {
                "id": "9267309",
                "wsiteGuid": "jdlnnh",
                "activityGuid": "fcb9860b439ae1a8a226f0f91e8cce1c",
                "questionActivityGuid": "fa706b6875cc570be7d9f94669822551",
                "pos": "4",
                "right": "",
                "value": "收支平衡",
                "answerExplain": "",
                "answerAction": "1",
                "gotoAnswerId": null,
                "score": "10",
                "endScore": null,
                "isDeleted": "0",
                "createTime": "2022-03-14 10:42:20",
                "updateTime": "2022-03-14 10:42:20",
                "resultPos": "1",
                "shortMatch": {
                    "min": 0,
                    "max": 0
                },
                "rightEncry": ""
            }],
            "rightCount": 1
        }*/
		var in_array=function (search,array){
			for(var i in array){
				if(array[i]==search){
					return true;
				}
			}
			return false;
		}
		var ans={
    "07321dc5de375c9110c01252f1c92e6a": ["9267386"],
    "4e505ac824e9f13bff293223ac7ea244": ["9267292"],
    "17a26ab81f9bb41fa7398be50b684e54": ["9267342"],
    "927ab767b5e957986298223c8a9147a4": ["9267366"],
    "94e7a26011472a4fa41e676fcf2f59ca": ["9267448", "9267449", "9267450"],
    "5478a122bf6e2b3991e9777fc0be6357": ["9267270"],
    "4dc543154a060cfdeef698cfdac2610b": ["9267419", "9267420", "9267422"],
    "cddf19b737b6a8de63cd339d6b25b556": ["9267300"],
    "4b5e5beac4d6d6f75d82040c0e8fc1b6": ["9267410", "9267411", "9267412", "9267413", "9267414"],
    "fa706b6875cc570be7d9f94669822551": ["9267308"],
    "61407a193b7d1ddfe9bc592473547a31": ["9267321"],
    "002c6329d937263ba6f550d9e5ac2360": ["9267267"],
    "fe61c2f57d756a2a825c923bfb27ee2e": ["9267384"],
    "1d88681db90ad26ec6e1e6bf8e50761c": ["9267314"],
    "e0ee256f7eb726831e82e77d238b1a69": ["9267363"],
    "17acdf9c17ec27c56b3b9e792b4b1cda": ["9267392"],
    "06af2de5c4ac8ffb21f9bbd8a15d1b36": ["9267444", "9267445", "9267446", "9267447"],
    "7d2240a0bc2d6960211cbb7391e77b3d": ["9267297"],
    "34ddf5bcec2102c5284554e950ca862e": ["9267440", "9267441", "9267442", "9267443"],
    "801f32ddfd388903a5dcfb7f16c8a704": ["9267452", "9267453", "9267455"],
    "f7120d4edf697d6d57e928e57c65f9e8": ["9267263"],
    "a5f58ceee08d67311aafd1f239339061": ["9267399"],
    "6008218f9b734fb23d9a4f42b44f91d1": ["9267415", "9267416", "9267418"],
    "6338596819ccf55753fbe0500ec3abbd": ["9267341"],
    "0802dac3150bb016f07238a3453f9b67": ["9267460", "9267461"],
    "f4ab84fd7bb8f1ce7c20a272f2dcf2fe": ["9267436", "9267437", "9267438", "9267439"],
    "633d231187bb21432723ee8a7ca66af2": ["9267286"],
    "a52278db70e085ed4b08d30c7ce9bd00": ["9267302"],
    "8e859d6433ac0a59dddf3d1e7cd6054d": ["9267346"],
    "243419af08fab13b6d026feede4bc5a3": ["9267352"],
    "899f0a7355d80eee921c618a01c818ef": ["9267284"],
    "7542b55e804cbb9efaa02b091747a717": ["9267360"],
    "06981beaecf56e6d327c4eb1d9e6de3d": ["9267375"],
    "7d3f2d1db4b0e896f2c68f21b03a9c0c": ["9267373"],
    "5c864e9addccf2bbc88dfe6ba79e172e": ["9267396"],
    "dc1efaba7482cef497d159defa5c14de": ["9267402", "9267403", "9267405"],
    "7c3195ab07a409f40de3f8d72902c1d2": ["9267378"],
    "4e91cd5d8cc2276108963a8a9c1d9e3d": ["9267277"],
    "c7e854f32f01d7d7c84bbd5c0c32e3f1": ["9267406", "9267407", "9267408", "9267409"],
    "fc144a64beeee8aa24f55f6ee908c48a": ["9267324"],
    "ca99407a8e925a1b0dd898b4214f2aba": ["9267433", "9267434", "9267435"],
    "0de46ca555f7b26057ea3a5622d05846": ["9267280"],
    "45563c02f5e6f769cb674ed8fe10cd19": ["9267456", "9267457", "9267458", "9267459"],
    "b249b731832f6cd1dcff67a18bd7e813": ["9267354"],
    "414b4312f3d9d498b6bf6bc3c57c262d": ["9267337"],
    "ed51f43e5ece2278a5af3b76505bfac8": ["9267310"],
    "0f81dee0324f583f1d3509b075f8d640": ["9267428", "9267429"],
    "4159e6e2a9f87e24019ec2d83ed2db6e": ["9267423", "9267424", "9267425", "9267426", "9267427"]
};
								for(var ii=0;ii<e.data.questionList.length;ii++){//---
									var que=e.data.questionList[ii];
									if(typeof(ans[que.guid])!='undefined'){
										for(var jj=0;jj<que.result.length;jj++){
											if(in_array(que.result[jj].id,ans[que.guid])){
												e.data.questionList[ii].result[jj].value='-----'
											}
										}
									}
								}
                                if (u.
                            default.hideLoading(), 0 == e.result) f.
                            default.setData("ANSWER_QUESTION_LIST_" + n.activityGuid, c.
                            default.analysisRightAnswer(e.data.questionList, n.activityInfo)),
                                n.goToExam(e.data.recordId, e.data.topDayId);
                                else if (101 == e.result || 102 == e.result) {
                                    var i = {
                                        link: "https://engine.lghsrh.com/index/activity?appKey=2RUe6FyVvp2wuq1cMqLLMU3AwA4A&adslotId=393098&uk_a1=__IMEI__&uk_a2=__IMEI2__&uk_a3=__MUID__&uk_b1=__IDFA__&uk_b2=__IDFA2__&uk_c1=__OAID__",
                                        key: "answer" + r.
                                    default.$wsiteGuid
                                    };
                                    n.tips = e.msg,
                                    u.
                                default.showAlert({
                                        content:
                                        e.msg,
                                        hasGg: 1,
                                        guid: n.activityInfo.guid,
                                        activityType: n.activityInfo.activityType,
                                        callback: function() {},
                                        cancelCallback: function() {
                                            u.
                                        default.showAdSpaceDialog(i)
                                        },
                                        baseColor: n.themeColor
                                    })
                                } else if (1003 == e.result) c.
                            default.showChanceCardInfoDialog(n.activityGuid, (function() {
                                    n.startExam(t)
                                }));
                                else if (2003 == e.result) {
                                    var a = n.activityInfo.activityShareSetting.shareCount;
                                    c.
                                default.showShareChanceDialog(n.activityInfo, (function() {
                                        u.
                                    default.showAlert({
                                            content:
                                            "恭喜你获得".concat(a, "次答题机会"),
                                            hasGg: 1,
                                            guid: n.activityInfo.activityGuid,
                                            activityType: n.activityInfo.activityType
                                        })
                                    }))
                                } else if (3003 == e.result) {
                                    var o = c.
                                default.getShareApiBackUrl(n.activityInfo.wsiteGuid);
                                    c.
                                default.showShareApiDialog(n.activityInfo, o)
                                } else u.
                            default.showToast(e.msg, "none")
                            }))
                        }))
                    }))
                },
                goToExam: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    e = this.activityGuid;
                    u.
                default.navigateTo({
                        url:
                        this.pagePath.answerContent + "?guid=".concat(e, "&recordId=").concat(t, "&topDayId=").concat(n)
                    })
                },
                startPractice: function(t) {
                    var n = this;
                    u.
                default.recordClickEvent(t);
                    var e = this.activityInfo;
                    e.isAnswerPracticeLimit = 1,
                    c.
                default.checkJoinLimit(e, (function() {
                        c.
                    default.startAnswerByPractise(n.activityInfo, (function(t) {
                            n.goToPractice()
                        }))
                    }))
                },
                goToPractice: function() {
                    var t = this.activityGuid;
                    u.
                default.navigateTo({
                        url:
                        this.pagePath.answerContent + "?guid=".concat(t, "&isPractice=1")
                    })
                },
                gotoPrize: function() {
                    s.
                default.goToUserWinOrderPage()
                },
                goToTops: function() {
                    u.
                default.navigateTo({
                        url:
                        this.pagePath.answerTops + "?guid=" + this.activityGuid
                    })
                },
                executeEvent: function(t) {
                    var n = this;
                    u.
                default.showLoginDialog((function() {
                        "goToTops" == t ? n.goToTops() : "startExam" == t && n.startExam()
                    }))
                },
                goToRecord: function() {
                    var t = this;
                    u.
                default.showLoginDialog((function() {
                        u.
                    default.goToAnswerRecordPage([t.activityInfo.activityType])
                    }))
                },
                updateShare: function() {
                    var t = this.activityInfo.content || {},
                    n = "",
                    e = r.
                default.$wsiteGuid,
                    i = this.activityInfo.activityName,
                    a = t ? t.shareImageUrl: "",
                    o = "";
                    if (!u.
                default.checkIsMini()) {
                        var c = location.origin,
                        f = location.pathname;
                        n = "".concat(c).concat(f, "?guid=").concat(this.activityGuid, "&wsiteGuid=").concat(e),
                        this.activityInfo.affiliateSetting && this.activityInfo.affiliateSetting.memberInfo && this.activityInfo.affiliateSetting.memberInfo.guid && (n += "&affiliateCode=".concat(this.activityInfo.affiliateSetting.memberInfo.guid))
                    }
                    t && (i = t.title, i = u.
                default.replaceAll(i, "#访问人次#", this.activityInfo.joinData.total), o = t.describe);
                    var s = u.
                default.getCurrentRoute(),
                    l = "".concat(s.path, "?guid=").concat(this.activityGuid, "&wsiteGuid=").concat(e);
                    this.activityInfo.affiliateSetting && this.activityInfo.affiliateSetting.memberInfo && this.activityInfo.affiliateSetting.memberInfo.guid && (l += "&affiliateCode=".concat(this.activityInfo.affiliateSetting.memberInfo.guid));
                    var d = {
                        title: i,
                        describe: o,
                        url: n,
                        imageUrl: a,
                        path: l,
                        guid: this.activityGuid
                    };
                    h.
                default.updateShareInfo(d),
                    this.setPosterData()
                },
                setPosterData: function() {
                    var t = "guid=".concat(this.activityGuid, "&wsiteGuid=").concat(r.
                default.$wsiteGuid);
                    this.activityInfo.affiliateSetting && this.activityInfo.affiliateSetting.memberInfo && this.activityInfo.affiliateSetting.memberInfo.guid && (t += "&affiliateCode=".concat(this.activityInfo.affiliateSetting.memberInfo.guid));
                    var n = this.activityInfo.content || {},
                    e = {
                        path: r.
                    default.$pagePath.answerIndex,
                        scene: t,
                        banner: n.shareImageUrl,
                        title: this.activityInfo.activityName,
                        qrDes: "长按识别小程序码参加活动",
                        guid: this.activityGuid
                    };
                    l.
                default.setCustomData(e)
                }
            }
        };
        n.
    default = d
    },
    "88d9": function(t, n, e) {
        "use strict";
        var i = e("336d"),
        r = e.n(i);
        r.a
    },
    "8a5a": function(t, n, e) {
        var i = e("05e3");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var r = e("4f06").
    default;
        r("41a68a9a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "8dfe": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("f99d"),
        r = e("6ddb");
        for (var a in r)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return r[t]
            }))
        } (a);
        e("4464");
        var o, u = e("f0c5"),
        c = Object(u["a"])(r["default"], i["b"], i["c"], !1, null, "704d767f", null, !1, i["a"], o);
        n["default"] = c.exports
    },
    "8e36": function(t, n, e) {
        "use strict";
        var i;
        e.d(n, "b", (function() {
            return r
        })),
        e.d(n, "c", (function() {
            return a
        })),
        e.d(n, "a", (function() {
            return i
        }));
        var r = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("v-uni-view", [e("v-uni-view", {
                staticClass: "effect"
            },
            [2 == t.effect.effectType ? e("v-uni-view", t._l(t.effect.random, (function(n, i) {
                return e("v-uni-image", {
                    key: i,
                    ref: "poin",
                    refInFor: !0,
                    staticClass: "img ",
                    class: "img" + i,
                    style: {
                        width: n.random,
                        height: n.random,
                        left: n.left,
                        top: -n.top
                    },
                    attrs: {
                        src: t._f("imgPreFix")(n.image)
                    }
                })
            })), 1) : t._e(), 3 == t.effect.effectType ? e("v-uni-view", t._l(t.effect.random, (function(n, i) {
                return e("v-uni-image", {
                    key: i,
                    ref: "poin",
                    refInFor: !0,
                    staticClass: "img ",
                    class: "pic" + i,
                    style: {
                        width: n.random,
                        height: n.random,
                        left: n.left,
                        top: -n.top
                    },
                    attrs: {
                        src: t._f("imgPreFix")(n.image)
                    }
                })
            })), 1) : t._e()], 1)], 1)
        },
        a = []
    },
    "95e8": function(t, n, e) {
        "use strict";
        var i = e("41d6"),
        r = e.n(i);
        r.a
    },
    9627 : function(t, n, e) {
        var i = e("0442");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var r = e("4f06").
    default;
        r("2765fb0e", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    a367: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("8e36"),
        r = e("52a4");
        for (var a in r)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return r[t]
            }))
        } (a);
        e("95e8");
        var o, u = e("f0c5"),
        c = Object(u["a"])(r["default"], i["b"], i["c"], !1, null, "53fb862a", null, !1, i["a"], o);
        n["default"] = c.exports
    },
    c837: function(t, n, e) {
        var i = e("4bad");
        n = i(!1),
        n.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */#myCanvas[data-v-53fb862a]{width:100%;height:100%}.effect[data-v-53fb862a]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999999;pointer-events:none}.img0[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 28s 15s linear infinite;animation:img1-data-v-53fb862a 28s 15s linear infinite}.img1[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 33s 20s linear infinite;animation:img2-data-v-53fb862a 33s 20s linear infinite}.img2[data-v-53fb862a]{-webkit-animation:img3-data-v-53fb862a 38s 27s linear infinite;animation:img3-data-v-53fb862a 38s 27s linear infinite}.img3[data-v-53fb862a]{-webkit-animation:img4-data-v-53fb862a 43s 35s linear infinite;animation:img4-data-v-53fb862a 43s 35s linear infinite}.img4[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 35s 3s linear infinite;animation:img1-data-v-53fb862a 35s 3s linear infinite}.img5[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 41s 7s linear infinite;animation:img2-data-v-53fb862a 41s 7s linear infinite}.img6[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 51s 10s linear infinite;animation:img1-data-v-53fb862a 51s 10s linear infinite}.img7[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 36s 13s linear infinite;animation:img2-data-v-53fb862a 36s 13s linear infinite}.img8[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 34s 26s linear infinite;animation:img1-data-v-53fb862a 34s 26s linear infinite}.img9[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 31s linear infinite;animation:img2-data-v-53fb862a 31s linear infinite}.img10[data-v-53fb862a]{-webkit-animation:img3-data-v-53fb862a 39s 18s linear infinite;animation:img3-data-v-53fb862a 39s 18s linear infinite}.img11[data-v-53fb862a]{-webkit-animation:img4-data-v-53fb862a 41s linear infinite;animation:img4-data-v-53fb862a 41s linear infinite}.img12[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 29s 28s linear infinite;animation:img1-data-v-53fb862a 29s 28s linear infinite}.img13[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 44s 3s linear infinite;animation:img2-data-v-53fb862a 44s 3s linear infinite}.img14[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 50s 10s linear infinite;animation:img1-data-v-53fb862a 50s 10s linear infinite}.img15[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 37s 2s linear infinite;animation:img2-data-v-53fb862a 37s 2s linear infinite}.img16[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 43s 15s linear infinite;animation:img1-data-v-53fb862a 43s 15s linear infinite}.img17[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 36s linear infinite;animation:img2-data-v-53fb862a 36s linear infinite}.img18[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 42s 4s linear infinite;animation:img1-data-v-53fb862a 42s 4s linear infinite}.img19[data-v-53fb862a]{-webkit-animation:img2-data-v-53fb862a 56s 7s linear infinite;animation:img2-data-v-53fb862a 56s 7s linear infinite}.img20[data-v-53fb862a]{-webkit-animation:img1-data-v-53fb862a 28s linear infinite;animation:img1-data-v-53fb862a 28s linear infinite}@-webkit-keyframes img1-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-100px,500px);transform:translate(-100px,500px)}100%{-webkit-transform:translate(100px,1000px);transform:translate(100px,1000px)}}@keyframes img1-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-100px,500px);transform:translate(-100px,500px)}100%{-webkit-transform:translate(100px,1000px);transform:translate(100px,1000px)}}@-webkit-keyframes img2-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(150px,500px);transform:translate(150px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@keyframes img2-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(150px,500px);transform:translate(150px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@-webkit-keyframes img3-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(200px,500px);transform:translate(200px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@keyframes img3-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(200px,500px);transform:translate(200px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@-webkit-keyframes img4-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-200px,500px);transform:translate(-200px,500px)}100%{-webkit-transform:translate(150px,1000px);transform:translate(150px,1000px)}}@keyframes img4-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-200px,500px);transform:translate(-200px,500px)}100%{-webkit-transform:translate(150px,1000px);transform:translate(150px,1000px)}}.img[data-v-53fb862a]{position:absolute;top:%?-150?%}.pic0[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 8s linear infinite;animation:pic-data-v-53fb862a 8s linear infinite}.pic1[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 13s linear infinite;animation:pic-data-v-53fb862a 13s linear infinite}.pic2[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 10s 2s linear infinite;animation:pic-data-v-53fb862a 10s 2s linear infinite}.pic3[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 12s 3s linear infinite;animation:pic-data-v-53fb862a 12s 3s linear infinite}.pic4[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 16s 1s linear infinite;animation:pic-data-v-53fb862a 16s 1s linear infinite}.pic5[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 11s linear infinite;animation:pic-data-v-53fb862a 11s linear infinite}.pic6[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 7s 5s linear infinite;animation:pic-data-v-53fb862a 7s 5s linear infinite}.pic7[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 13s 6s linear infinite;animation:pic-data-v-53fb862a 13s 6s linear infinite}.pic8[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 22s 8s linear infinite;animation:pic-data-v-53fb862a 22s 8s linear infinite}.pic9[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 18s 4s linear infinite;animation:pic-data-v-53fb862a 18s 4s linear infinite}.pic10[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 16s 2s linear infinite;animation:pic-data-v-53fb862a 16s 2s linear infinite}.pic11[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 14s 6s linear infinite;animation:pic-data-v-53fb862a 14s 6s linear infinite}.pic12[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 10s linear infinite;animation:pic-data-v-53fb862a 10s linear infinite}.pic13[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 18s linear infinite;animation:pic-data-v-53fb862a 18s linear infinite}.pic14[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 16s linear infinite;animation:pic-data-v-53fb862a 16s linear infinite}.pic15[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 8s 8s linear infinite;animation:pic-data-v-53fb862a 8s 8s linear infinite}.pic16[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 16s 3s linear infinite;animation:pic-data-v-53fb862a 16s 3s linear infinite}.pic17[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 14s 5s linear infinite;animation:pic-data-v-53fb862a 14s 5s linear infinite}.pic18[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 12s 15s linear infinite;animation:pic-data-v-53fb862a 12s 15s linear infinite}.pic19[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 15s 7s linear infinite;animation:pic-data-v-53fb862a 15s 7s linear infinite}.pic20[data-v-53fb862a]{-webkit-animation:pic-data-v-53fb862a 17s 5s linear infinite;animation:pic-data-v-53fb862a 17s 5s linear infinite}@-webkit-keyframes pic-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px)}}@keyframes pic-data-v-53fb862a{0%{-webkit-transform:translate(0);transform:translate(0)}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px)}}', ""]),
        t.exports = n
    },
    d8f6: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("fb6c"),
        r = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return i[t]
            }))
        } (a);
        n["default"] = r.a
    },
    ebf5: function(t, n, e) {
        "use strict"; (function(t) {
            var i = e("4ea4");
            e("99af"),
            e("c975"),
            e("a9e3"),
            e("d3b7"),
            e("acd8"),
            e("e25e"),
            e("ac1f"),
            e("1276"),
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = void 0;
            var r, a = i(e("ade3")),
            o = i(e("e143")),
            u = i(e("ca00")),
            c = i(e("c5e2")),
            f = i(e("3aa0")),
            s = i(e("c818")),
            l = i(e("61c0")),
            h = e("93c6"),
            d = i(e("bee5")),
            p = i(e("f55b")),
            v = o.
        default.$pagePath,
            g = 6,
            y = 11,
            b = 13,
            m = (r = {
                name: "BaseActivity",
                components: {
                    Share1Chance1Dialog: p.
                default
                },
                props: {
                    effect: {
                        type: Object,
                    default:
                        function() {
                            return {}
                        }
                    },
                    activityGuid: {
                        type: String,
                    default:
                        ""
                    },
                    bgStyle: {
                        type: Object,
                    default:
                        function() {
                            return {}
                        }
                    },
                    banners: {
                        type: Array,
                    default:
                        function() {
                            return []
                        }
                    },
                    prizeList: {
                        type: Array,
                    default:
                        function() {
                            return []
                        }
                    },
                    isPrizeTitle: {
                        type: Boolean,
                    default:
                        !1
                    },
                    prizeRankList: {
                        type: Array,
                    default:
                        function() {
                            return []
                        }
                    },
                    rule: {
                        type: Object,
                    default:
                        function() {
                            return {
                                startTime:
                                "",
                                endTime: "",
                                content: ""
                            }
                        }
                    },
                    chanceCard: {
                        type: Object,
                    default:
                        function() {
                            return {
                                state:
                                0,
                                activityGuid: ""
                            }
                        }
                    },
                    chanceCardStyle: {
                        type: String,
                    default:
                        ""
                    },
                    isShare: {
                        type: Boolean,
                    default:
                        !0
                    },
                    isReport: {
                        type: Boolean,
                    default:
                        !0
                    },
                    hideChat: {
                        type: Boolean,
                    default:
                        !1
                    },
                    isPrizeDialog: {
                        type: Boolean,
                    default:
                        !1
                    },
                    isPopupVisible: {
                        type: [String, Number],
                    default:
                        0
                    },
                    isShowRuleBtn: {
                        type: Boolean,
                    default:
                        !0
                    },
                    isHideBtns: {
                        type: Boolean,
                    default:
                        !1
                    },
                    isFullScreen: {
                        type: Boolean,
                    default:
                        !1
                    },
                    isCustomRule: {
                        type: Boolean,
                    default:
                        !1
                    },
                    bannerFullType: {
                        type: Number,
                    default:
                        0
                    },
                    activityInfo: {
                        type: Object,
                    default:
                        function() {
                            return {
                                exdata:
                                {}
                            }
                        }
                    },
                    isShowAdTop: {
                        type: Boolean,
                    default:
                        !1
                    }
                },
                mounted: function() {
                    t.log(this.activityInfo),
                    t.log(this.effect)
                },
                data: function() {
                    return {
                        mall: {},
                        isForbidShare: !1,
                        pagePath: o.
                    default.$pagePath,
                        iconRule: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_rule.png"),
                        iconShare: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_share.png"),
                        iconChat: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_chat.png"),
                        iconReport: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_report.png"),
                        iconAffiliate: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_affiliate.png"),
                        iconBack: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_back.png"),
                        iconPrize: u.
                    default.getImageUrl("/mini/icon/miniprog/icon_prize.png"),
                        isShowIconBack: !1,
                        adObj: {},
                        adRuleObj: {},
                        filterMallBarPages: [v.userCenter],
                        isChat: !1,
                        phoneNumber: "",
                        wsite: "",
                        popupVisible: !1,
                        activityLoadEnd: !1,
                        prize: {
                            visible: !1,
                            title: "",
                            subTitle: "",
                            callback: null,
                            exdata: {
                                isWin: !1,
                                prizeInfo: {}
                            }
                        },
                        chanceCardInfo: {
                            visible: !1,
                            exdata: {},
                            callback: null
                        },
                        chanceCardRecord: {
                            visible: !1,
                            exdata: {},
                            callback: null
                        },
                        shareChanceDialog: {
                            visible: !1,
                            exdata: {},
                            callback: null
                        },
                        bgImageHeight: 0,
                        bgMinHeight: 1336,
                        bgMinHeightRpx: 1440,
                        bannerHeighRpx: 678,
                        isDesignerEdit: !1,
                        compatible: !1
                    }
                },
                computed: {
                    tabs: function() {
                        var t = [];
                        return (this.isShowRuleBtn || this.isShowTime) && t.push("活动规则"),
                        (this.prizeList.length > 0 || this.prizeRankList.length > 0) && t.push("奖品列表"),
                        t
                    },
                    isShowRule: function() {
                        if (!this.rule) return ! 1;
                        var t = this.rule.content || "",
                        n = "<p><br></p>" == t || t.length <= 0;
                        return ! n
                    },
                    isShowTime: function() {
                        return !! this.rule && (this.rule.startTime && this.rule.endTime)
                    },
                    timeType: function() {
                        return this.activityInfo.exdata && this.activityInfo.exdata.isDownTimeType || 1
                    },
                    bgStyleStr: function() {
                        if (!this.bgStyle) return "";
                        if (this.isFullScreen) {
                            var t = this.getBgHeight || this.bgMinHeight;
                            return this.getBgFullScreenStyleStr(t)
                        }
                        var n = {
                            backgroundImage: u.
                        default.getImageUrl(this.bgStyle.backgroundImage) || "",
                            backgroundColor: this.bgStyle.backgroundColor || "transparent"
                        };
                        return this.getBgStyle(n)
                    },
                    topBgStyleStr: function() {
                        if (!this.bgStyle && this.bgImageHeight) return "height:".concat(this.bgImageHeight, "rpx;");
                        if (!this.bgStyle) return "";
                        var t = {
                            backgroundImage: this.bgStyle.topBackgroundImage || "",
                            backgroundColor: this.bgStyle.topBackgroundColor || ""
                        },
                        n = this.getBgStyle(t);
                        return this.isFullScreen && (this.bgImageHeight ? n += ";height:".concat(this.getBgHeight, "rpx;") : n += ";height:".concat(this.bgMinHeight, "rpx;")),
                        1 == this.bannerFullType && (n = this.getBannerFullStyle(), this.bannerHeighRpx && (n += ";height:".concat(this.getBannerHeight, "rpx;"))),
                        n
                    },
                    getBgHeight: function() {
                        return this.isFullScreen ? this.bgHeight || this.setBgHeight() : this.bgImageHeight = 0,
                        this.bgImageHeight
                    },
                    isShowMall: function() {
                        var t = "/" + u.
                    default.getCurrentRoute().path;
                        return ! (!this.wsite || !this.wsite.exinfo) && (this.wsite.exinfo.setting.showMallInfo && -1 == this.filterMallBarPages.indexOf(t))
                    },
                    startTime: function() {
                        return u.
                    default.formatDateTime(this.rule.startTime)
                    },
                    endTime: function() {
                        return u.
                    default.formatDateTime(this.rule.endTime)
                    },
                    calcBannerHeight: function() {
                        return 1 == this.bannerFullType && this.setBannerHeight(),
                        ""
                    },
                    getBannerHeight: function() {
                        return this.bannerHeighRpx
                    },
                    isShowButtonCopyright: function() {
                        return 1 == this.wsite.isShowBottomCopyright
                    },
                    copyrightText: function() {
                        return "人人秀 ( rrx.cn ) 技术支持"
                    },
                    copyrightStyle: function() {
                        var t = "#10aeff";
                        return {
                            color: t
                        }
                    },
                    guid: function() {
                        return this.activityGuid || this.activityInfo.activityGuid
                    },
                    isShowIconInMpWeixin: function() {
                        var t = this.mall.platform;
                        return ! (!u.
                    default.checkCurrentIsActivity() || t != g && t != y && t != b)
                    },
                    isCompatible: function() {
                        return 1 == this.activityInfo.activityType && 11 == this.activityInfo.lotteryType
                    }
                },
                created: function() {
                    var n = this;
                    t.log("bg style json created", JSON.stringify(this.bgStyle)),
                    f.
                default.once(f.
                default.customEvent.WsiteLoadEnd, (function() {
                        n.activityLoadEnd = !0;
                        var t = getApp().globalData;
                        if (n.wsite = t.wsite, n.wsite) {
                            var e = t.mall;
                            if (n.mall = e, !n.hideChat) {
                                var i = e.sideButtons || {
                                    chat: {
                                        type: 0
                                    }
                                };
                                i.chat.type > 0 && i.chat.number && n.wsite.exinfo && n.wsite.exinfo.setting.showChat ? (n.isChat = !0, n.phoneNumber = i.chat.number) : n.isChat = !1
                            }
                            var r = getApp().globalData.wsite.isDesignerCreate;
                            1 == r && o.
                        default.$isEdit && (n.isDesignerEdit = !0, n.hideTopBackBtn());
                            var a = uni.getSystemInfoSync(),
                            u = parseInt(a.system.split(" ")[1]);
                            "ios" == a.platform && u < 13 && (n.compatible = !0),
                            "dev" != o.
                        default.conf.env && "devtools" != a.platform || (n.compatible = !1),
                            n.checkShowBackH5(),
                            n.isForbidShare = n.getForbidShare()
                        }
                    })),
                    f.
                default.on(f.
                default.customEvent.FocusGZH, (function() {
                        n.isForbidShare = n.getForbidShare()
                    }));
                    var e = setInterval((function() {
                        n.activityInfo.activityGuid && (n.checkTimeLotteryPrize(), n.checkScreenLotteryPrize(), clearInterval(e))
                    }), 100)
                },
                watch: {
                    isPopupVisible: function(t, n) {
                        if (1 == t) {
                            var e = "ISAUTODIALOG" + this.guid,
                            i = l.
                        default.getStorageSync(e);
                            i || (this.popupVisible = !0)
                        } else this.popupVisible = !1
                    },
                    activityInfo: function(n, e) {
                        t.log("--jt--", this.activityInfo),
                        this.isForbidShare = this.getForbidShare(),
                        this.getAdObj(),
                        this.getRuleAdObj()
                    }
                }
            },
            (0, a.
        default)(r, "mounted", (function() {
                t.log("bg style json mout", JSON.stringify(this.bgStyle))
            })), (0, a.
        default)(r, "methods", {
                toAffiliate: function() {
                    this.activityInfo && this.activityInfo.affiliateTask && this.activityInfo.affiliateSetting && (this.activityInfo.affiliateSetting.memberInfo && 1 == this.activityInfo.affiliateSetting.memberInfo.state ? u.
                default.goToAffiliateSharePage(this.pagePath.affiliateShare + "?taskGuid=" + this.activityInfo.affiliateTask.activityGuid) : 1 == this.activityInfo.affiliateSetting.settingInfo.openApply && (o.
                default.$affiliateCode = "", u.
                default.navigateTo({
                        url:
                        this.pagePath.affiliateIndex
                    })))
                },
                show: function(t, n, e, i) {
                    this.initParams(t, n, e, i),
                    this.showEvent(t)
                },
                close: function() {
                    this.popupVisible = !1
                },
                showPupup: function() {
                    this.isCustomRule ? this.$emit("ruleEvent") : this.popupVisible = !0
                },
                showSharePupup: function() {
                    u.
                default.triggerSysEvent("sys_share")
                },
                getBgStyle: function(t) {
                    return "background:" + c.
                default.formatPluginBackGroud(t)
                },
                showReport: function() {
                    u.
                default.showReportDialog()
                },
                callChat: function() {
                    this.phoneNumber && uni.makePhoneCall({
                        phoneNumber: this.phoneNumber
                    })
                },
                showMap: function() {
                    uni.openLocation({
                        latitude: parseFloat(this.mall.addressLat),
                        longitude: parseFloat(this.mall.addressLng),
                        name: this.mall.companyName || "",
                        address: this.mall.address,
                        scale: 11
                    })
                },
                showCopyrightPage: function() {
                    u.
                default.showCopyrightPage()
                },
                getBgFullScreenStyleStr: function(t) {
                    if (!this.bgStyle) return "";
                    t = parseInt(t),
                    t < this.bgMinHeight && (t = this.bgMinHeight);
                    var n = u.
                default.getImageUrl(this.bgStyle.backgroundImage) || "",
                    e = this.bgStyle.backgroundColor || "transparent";
                    return n && (e = "transparent"),
                    "background:url(".concat(n, ") center top / 100% auto no-repeat , ").concat(e, ";height:").concat(t, "rpx")
                },
                showPrizeDialog: function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = n.prizeTitle || "恭喜你中奖了",
                    r = n.prizeName || "",
                    a = n.prizeType || s.
                default.PRIZE_NONE;
                    if (e && a) {
                        if (void 0 === n.orderState) return t.error("showPrizeDialog", n.orderState),
                        !1;
                        n.prizeIcon && (n.prizeIcon = u.
                    default.getImageUrl(n.prizeIcon, 200)),
                        a == s.
                    default.PRIZE_REDPACK ? 1 == n.orderState && (i = "", r = "") : a != s.
                    default.PRIZE_GOLD && a != s.
                    default.PRIZE_COUPON || (r = "")
                    } else i = "很遗憾，本次活动没有中奖";
                    this.prize.exdata.isWin = e,
                    this.prize.exdata.prizeInfo = n,
                    this.prize.title = i,
                    this.prize.subTitle = r,
                    n.adExdata && (this.prize.exdata.adExdata = n.adExdata)
                },
                callbackEvent: function(t, n) {
                    this[t] && this[t]["visible"] && (this[t]["visible"] = !1),
                    "chanceCardInfo" === t && this.$refs.chanceCardButton && this.$refs.chanceCardButton.getChanceCardCount(),
                    this[t] && this[t]["callback"] && this[t]["callback"](n)
                },
                showEvent: function(t) {
                    this.$set(this[t], "visible", !0)
                },
                closeEvent: function(t, n) {
                    "prize" == t && this[t] && this[t]["cancelback"] && this[t]["cancelback"](n),
                    this[t] && this[t]["visible"] && (this[t]["visible"] = !1)
                },
                initParams: function(t, n, e, i) {
                    "prize" == t ? this.showPrizeDialog(n, n.isWin) : this[t]["exdata"] = n,
                    this[t]["callback"] = e || null,
                    this[t]["cancelback"] = i || null
                },
                setBgHeight: function() {
                    var t = this;
                    this.isFullScreen && this.bgStyle && this.bgStyle.backgroundImage && this.getImageInfoSync(this.bgStyle.backgroundImage).then((function(n) {
                        if (n && n.height) {
                            var e = parseInt(n.height),
                            i = uni.getSystemInfoSync(),
                            r = i.screenWidth,
                            a = r / n.width,
                            o = a * e / r * 375 * 2;
                            if (o > t.bgMinHeight) {
                                var c = getApp().globalData.systemInfo.screenWidth;
                                if (u.
                            default.checkIsMini() || 1 != u.
                            default.getUrlParameterByName("isEdit") || (c = 375), c && n.width) {
                                    o > t.bgMinHeight && (t.bgImageHeight = o);
                                    var f = t.bgMinHeight,
                                    s = o;
                                    s > t.bgMinHeight && (f = s);
                                    var l = f;
                                    t.$emit("topBtn", l)
                                }
                            } else t.$emit("topBtn", t.bgMinHeight)
                        } else t.$emit("topBtn", t.bgMinHeight)
                    }))
                },
                getImageInfoSync: function(n) {
                    return new Promise((function(e, i) {
                        uni.getImageInfo({
                            src: n,
                            success: function(t) {
                                u.
                            default.checkIsMini() ? e(t) : (0, h.pathToBase64)(n).then((function(n) {
                                    t.path = n,
                                    e(t)
                                })).
                                catch((function(t) {}))
                            },
                            fali: function(n) {
                                t.log(n)
                            }
                        })
                    }))
                },
                getBannerFullStyle: function() {
                    var t = this.bgStyle,
                    n = u.
                default.getImageUrl(t.banner, 300),
                    e = t.topBackgroundColor || "",
                    i = "";
                    if (n) {
                        i = "url(".concat(n, ")"),
                        i = "background-image:" + i,
                        i += ";background-size:100%;background-repeat: no-repeat"
                    }
                    return e && (i += ";background-color: ".concat(e)),
                    i += ";position: relative",
                    i
                },
                setBannerHeight: function() {
                    var n = this,
                    e = this.bgStyle;
                    t.log("bg style json", JSON.stringify(this.bgStyle));
                    var i = e.miniBannerHeight || 678;
                    if (this.bannerHeighRpx = i, e.banner) {
                        var r = u.
                    default.getImageUrl(e.banner);
                        this.getImageInfoSync(r).then((function(t) {
                            if (t && t.height) {
                                var e = parseInt(t.height),
                                r = uni.getSystemInfoSync(),
                                a = r.screenWidth,
                                o = a / t.width,
                                u = o * e / a * 375 * 2;
                                n.bannerHeighRpx = u > i ? u: i
                            }
                        }))
                    }
                },
                hideTopBackBtn: function() {
                    var t = document.querySelector(".uni-page-head-hd");
                    t.style.display = "none"
                },
                checkShowBackH5: function() {
                    o.
                default.$isIframe && o.
                default.$cfh < 0 && (document.getElementsByTagName("uni-page-head")[0].style.display = "none"),
                    u.
                default.chekIsH5Activity() && (this.isShowIconBack = !0)
                },
                back: function() {
                    this.isShowIconBack ? u.
                default.goBackH5Page(o.
                default.$wsiteGuid, {}) : u.
                default.redirectHomePage()
                },
                getForbidShare: function() {
                    var n = !1;
                    if (RRX_WSITE_INFO && RRX_WSITE_INFO.wsite && RRX_WSITE_INFO.wsite.h5Exdata) {
                        var e = 1 == RRX_WSITE_INFO.wsite.h5Exdata.forbidShare;
                        e && (t.log("禁止分享", RRX_WSITE_INFO.wsite.h5Exdata.forbidShare), n = !0)
                    }
                    return this.activityInfo && this.activityInfo.focusData && 1 == this.activityInfo.focusData.isQywxFocus && (n = !1),
                    o.
                default.$options_h5 && 1 == o.
                default.$options_h5.isOpenGzh && (t.log("开启公众号参与", o.
                default.$options_h5.isOpenGzh), n = !1),
                    n
                },
                checkTimeLotteryPrize: function() {
                    var t = d.
                default.getData("TIME_LOTTERY_INFOGUID" + this.activityInfo.guid);
                    if (d.
                default.clearData("TIME_LOTTERY_INFOGUID" + this.activityInfo.guid), t == this.activityInfo.guid) {
                        var n = {
                            activityInfo: this.activityInfo
                        };
                        u.
                    default.showTimedLotteryDialog(n)
                    } else {
                        var e = this.activityInfo.activityExtTimeLotteryInfo || {},
                        i = d.
                    default.getData("TIME_LOTTERY_PRIZEDIALOG" + this.activityInfo.guid, !0);
                        if (1 == e.isOrder) {
                            if (i) return;
                            e.orderInfo.orderState = e.orderInfo.state,
                            e.orderInfo.activityInfo = this.activityInfo,
                            u.
                        default.showPrizeWinDialog(e.orderInfo, (function(t) {
                                u.
                            default.winPrizeSuccessDialog(t)
                            })),
                            d.
                        default.setData("TIME_LOTTERY_PRIZEDIALOG" + this.activityInfo.guid, !0, !0)
                        } else if (2 == e.isOrder) {
                            if (i) return;
                            u.
                        default.showPrizeNoWinDialog(),
                            d.
                        default.setData("TIME_LOTTERY_PRIZEDIALOG" + this.activityInfo.guid, !0, !0)
                        }
                    }
                },
                checkScreenLotteryPrize: function() {
                    var t = this.activityInfo.screenPrize || {};
                    if (t.id && t.orderNo) {
                        var n = d.
                    default.getData("SCREEN_LOTTERY_INFOGUID" + this.activityInfo.guid + t.orderNo, !0);
                        n || (d.
                    default.setData("SCREEN_LOTTERY_INFOGUID" + this.activityInfo.guid + t.orderNo, 1, !0), t.activityInfo = this.activityInfo, u.
                    default.showPrizeWinDialog(t, (function(t) {
                            u.
                        default.winPrizeSuccessDialog(t)
                        })))
                    }
                },
                getAdObj: function() {
                    var t = u.
                default.getGgAllocation({
                        type:
                        "rankHead",
                        guid: this.activityInfo.guid,
                        activityType: this.activityInfo.activityType
                    });
                    u.
                default.checkHasGg(t.key, t) ? (this.adObj = t, this.adObj["isShow"] = !0) : this.adObj["isShow"] = !1
                },
                gotoAdLink: function() {
                    u.
                default.showCopyrightPage(this.adObj.link, this.adObj)
                },
                getRuleAdObj: function() {
                    var t = u.
                default.getGgAllocation({
                        type:
                        "ruleDialog",
                        guid: this.activityInfo.guid,
                        activityType: this.activityInfo.activityType
                    });
                    this.adRuleObj = t,
                    u.
                default.checkHasGg("", t) ? this.adRuleObj["isShow"] = !0 : this.adRuleObj["isShow"] = !1
                },
                gotoAdRuleLink: function() {
                    u.
                default.showCopyrightPage(this.adRuleObj.link, this.adRuleObj)
                }
            }), r);
            n.
        default = m
        }).call(this, e("5a52")["default"])
    },
    ec48: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("ebf5"),
        r = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(n, t, (function() {
                return i[t]
            }))
        } (a);
        n["default"] = r.a
    },
    f99d: function(t, n, e) {
        "use strict";
        var i;
        e.d(n, "b", (function() {
            return r
        })),
        e.d(n, "c", (function() {
            return a
        })),
        e.d(n, "a", (function() {
            return i
        }));
        var r = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("v-uni-view", [e("v-uni-view", {
                staticClass: "home",
                class: {
                    "home-h5": t.isInIosH5
                },
                on: {
                    click: function(n) {
                        n.stopPropagation(),
                        n.preventDefault(),
                        arguments[0] = n = t.$handleEvent(n),
                        t.getChanceCardDetailV2.apply(void 0, arguments)
                    }
                }
            },
            [e("v-uni-view", {
                staticClass: "small-card",
                staticStyle: {
                    "font-size": "22rpx"
                }
            },
            [e("img", {
                staticClass: "small-card-img",
                attrs: {
                    src: t._f("imgPreFix")(t.cardUrl),
                    mode: "aspectFit",
                    alt: ""
                }
            }), e("v-uni-view", {
                staticClass: "cardCount"
            },
            [t._v(t._s(t._f("countSet")(t.count)))])], 1)], 1)], 1)
        },
        a = []
    },
    fb6c: function(t, n, e) {
        "use strict";
        var i = e("4ea4");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.
    default = void 0;
        var r = i(e("e143")),
        a = i(e("c5e2")),
        o = {
            name: "ActivityHeadBanners",
            props: {
                banners: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    imageHost: r.
                default.conf.imageHost,
                    indicatorDots: !0,
                    vertical: !1,
                    autoplay: !1,
                    interval: 3e3,
                    indicatorColor: "#898989",
                    indicatorActiveColor: "",
                    duration: 500
                }
            },
            mounted: function() {
                this.indicatorActiveColor = a.
            default.getThemeColor()
            },
            methods: {}
        };
        n.
    default = o
    }
}]);