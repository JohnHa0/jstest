(function(t) {
    function e(e) {
        for (var n, r, o = e[0], c = e[1], u = e[2], p = 0, d = []; p < o.length; p++) r = o[p],
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]),
        s[r] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        l && l(e);
        while (d.length) d.shift()();
        return a.push.apply(a, u || []),
        i()
    }
    function i() {
        for (var t, e = 0; e < a.length; e++) {
            for (var i = a[e], n = !0, o = 1; o < i.length; o++) {
                var c = i[o];
                0 !== s[c] && (n = !1)
            }
            n && (a.splice(e--, 1), t = r(r.s = i[0]))
        }
        return t
    }
    var n = {},
    s = {
        app: 0
    },
    a = [];
    function r(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = t,
    r.c = n,
    r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    },
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) r.d(i, n,
        function(e) {
            return t[e]
        }.bind(null, n));
        return i
    },
    r.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return r.d(e, "a", e),
        e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var u = 0; u < o.length; u++) e(o[u]);
    var l = c;
    a.push([0, "chunk-vendors"]),
    i()
})({
    0 : function(t, e, i) {
        t.exports = i("56d7")
    },
    "034f": function(t, e, i) {
        "use strict";
        i("85ec")
    },
    1334 : function(t, e, i) {},
    1463 : function(t, e, i) {
        t.exports = i.p + "static/img/dati2.c21351cd.png"
    },
    "16b9": function(t, e, i) {
        "use strict";
        i("1334")
    },
    2360 : function(t, e, i) {},
    "282c": function(t, e, i) {
        t.exports = i.p + "static/img/dati.63ae5c8f.png"
    },
    "3cc5": function(t, e, i) {
        t.exports = i.p + "static/img/dati5.1598496f.png"
    },
    "406b": function(t, e, i) {},
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"),
        i("e6cf"),
        i("cca6"),
        i("a79d");
        var n = i("2b0e"),
        s = function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("div", {
                attrs: {
                    id: "app"
                }
            },
            ["index" == t.page ? i("indexPage", {
                attrs: {
                    title: t.title,
                    status: t.status
                },
                on: {
                    handlepage: t.handlePage
                }
            }) : "answer" == t.page ? i("answerPage", {
                on: {
                    handlepage: t.handlePage
                }
            }) : "result" == t.page ? i("resultPage", {
                on: {
                    handlepage: t.handlePage
                }
            }) : t._e()], 1)
        },
        a = [],
        r = i("da7e"),
        o = i.n(r),
        c = i("53ca"),
        u = (i("b64b"), i("fb6a"), i("d3b7"), i("bc3a")),
        l = i.n(u),
        p = {
            404 : "访问资源不存在",
        default:
            "通讯异常"
        };
        new n["a"];
        l.a.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        var d = l.a.create({
            baseURL: "https://jshare.xhby.net/base",
            timeout: 1e4
        });
        d.interceptors.request.use((function(t) {
            if ("get" === t.method && t.params) {
                for (var e = t.url + "?",
                i = 0,
                n = Object.keys(t.params); i < n.length; i++) {
                    var s = n[i],
                    a = t.params[s],
                    r = encodeURIComponent(s) + "=";
                    if (null !== a && "undefined" !== typeof a) if ("object" === Object(c["a"])(a)) for (var o = 0,
                    u = Object.keys(a); o < u.length; o++) {
                        var l = u[o],
                        p = s + "[" + l + "]",
                        d = encodeURIComponent(p) + "=";
                        e += d + encodeURIComponent(a[l]) + "&"
                    } else e += r + encodeURIComponent(a) + "&"
                }
                e = e.slice(0, -1),
                t.params = {},
                t.url = e
            }
            return t
        }), (function(t) {
            console.log(t),
            Promise.reject(t)
        })),
        d.interceptors.response.use((function(t) {
            var e = t.data.code || 200;
            p[e] || t.data.msg || p["default"];
            return t.data
        }), (function(t) {
            return console.log("err" + t),
            Promise.reject(t)
        }));
        var A = d;
        function h() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return A({
                url: "https://jshare.xhby.net/api/signature",
                header: "application/json",
                method: "post",
                data: t
            })
        }
        var g = {
            share: h
        },
        f = i("852e"),
        m = i.n(f),
        v = i("18a0");
        new n["a"];
        function C(t) {
            g.share({
                url: location.href
            }).then((function(e) {
                var i = e.data;
                v.config({
                    debug: !1,
                    appId: i.appid,
                    timestamp: i.timestamp,
                    nonceStr: i.nonceStr,
                    signature: i.signature,
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
                }),
                v.ready((function() {
                    var e = {
                        title: t.shareTitle,
                        desc: t.shareContent,
                        link: location.href,
                        imgUrl: t.shareUrl
                    },
                    i = {
                        title: t.shareTitle,
                        desc: t.shareContent,
                        link: location.href,
                        imgUrl: t.shareUrl
                    };
                    v.onMenuShareAppMessage(e),
                    v.onMenuShareTimeline(i)
                }))
            }))
        }
        function S() {
            var t = m.a.get("user");
            return JSON.parse(t).userCode
        }
        var y = {
            getCode: S,
            shareFriend: C
        },
        w = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "index"
            },
            [n("img", {
                staticClass: "bg",
                attrs: {
                    src: i("e6df"),
                    alt: ""
                }
            }), n("div", {
                staticClass: "index-panel"
            },
            [n("div", {
                staticClass: "rule-title",
                on: {
                    click: function(e) {
                        t.ruleVisible = !0
                    }
                }
            },
            [t._v("活动规则")]), n("img", {
                staticClass: "dh",
                attrs: {
                    src: i("9c56"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "title",
                attrs: {
                    src: i("748c"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "dati",
                attrs: {
                    src: t.datiImg,
                    alt: ""
                }
            }), n("img", {
                staticClass: "click",
                attrs: {
                    src: i("c162"),
                    alt: ""
                },
                on: {
                    click: t.startQuestion
                }
            }), n("img", {
                staticClass: "danwei",
                attrs: {
                    src: i("83f0"),
                    alt: ""
                }
            })]), t.ruleVisible ? n("div", {
                staticClass: "mask-panel"
            },
            [n("div", {
                staticClass: "mask-content"
            },
            [n("div", {
                staticClass: "rule-panel"
            },
            [n("img", {
                staticClass: "close",
                attrs: {
                    src: i("cc2b"),
                    alt: ""
                },
                on: {
                    click: function(e) {
                        t.ruleVisible = !1
                    }
                }
            }), n("div", {
                staticClass: "title"
            },
            [t._v("活动规则")]), n("div", {
                staticClass: "content"
            },
            [n("div", {
                staticClass: "p"
            },
            [t._v(" 1.请输入您的手机号码（必填）以及姓名、单位名称（选填）后，即可开始答题； ")]), n("div", {
                staticClass: "p"
            },
            [t._v("2." + t._s(t.p2Str))]), n("div", {
                staticClass: "p"
            },
            [t._v(" 3.省委省级机关工委将在得分为100分的人员中抽出200名中奖者，分别给予50元话费奖励； ")]), n("div", {
                staticClass: "p"
            },
            [t._v("4.获奖信息请留意手机短信或关注获奖信息报道。")])])])])]) : t._e(), t.loginVisible ? n("div", {
                staticClass: "mask-panel",
                on: {
                    click: function(e) {
                        t.loginVisible = !1
                    }
                }
            }) : t._e(), t.loginVisible ? n("div", {
                staticClass: "mask-content",
                staticStyle: {
                    width: "20rem"
                }
            },
            [n("div", {
                staticClass: "result-panel"
            },
            [n("div", {
                staticClass: "result-input"
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.phone,
                    expression: "phone"
                }],
                attrs: {
                    type: "number",
                    placeholder: "请输入手机号"
                },
                domProps: {
                    value: t.phone
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.phone = e.target.value)
                    }
                }
            })]), n("div", {
                staticClass: "result-input"
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.userName,
                    expression: "userName"
                }],
                attrs: {
                    type: "text",
                    placeholder: "请输入姓名"
                },
                domProps: {
                    value: t.userName
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.userName = e.target.value)
                    }
                }
            })]), n("div", {
                staticClass: "result-input"
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.deptName,
                    expression: "deptName"
                }],
                attrs: {
                    type: "text",
                    placeholder: "请输入单位名称"
                },
                domProps: {
                    value: t.deptName
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.deptName = e.target.value)
                    }
                }
            })]), n("img", {
                staticClass: "btn",
                attrs: {
                    src: i("cf5a"),
                    alt: ""
                },
                on: {
                    click: t.handleSubmit
                }
            }), n("div", {
                staticClass: "result-sub"
            },
            [t._v("*手机号为必填，姓名和单位选填")])])]) : t._e()])
        },
        b = [];
        function x(t) {
            return A({
                url: "/dangsjd/h5/common/question/list",
                method: "post",
                data: t
            })
        }
        function B(t) {
            return A({
                url: "/dangsjd/h5/common/theme/info/".concat(t),
                method: "get"
            })
        }
        function E(t) {
            return A({
                url: "/dangsjd/h5/common/phone/save",
                method: "post",
                data: t
            })
        }
        var N = {
            props: ["title", "status"],
            components: {},
            data: function() {
                return {
                    code: "",
                    loginVisible: !1,
                    auth: !1,
                    result: !1,
                    phone: "",
                    userName: "",
                    deptName: "",
                    ruleVisible: !1
                }
            },
            computed: {
                p2Str: function() {
                    var t = this.$route.query.id || 3;
                    return 3 == t ? "本次答题周期为4月25日8时至4月29日24时，同一手机号码在答题周期内答题次数不限，100分后无需再次答题；": 4 == t ? "本次答题周期为5月23日8时至5月27日24时，同一手机号码在答题周期内答题次数不限，得分以最高的一次计算；": 5 == t ? "本次答题周期为6月27日8时至7月1日24时，同一手机号码在答题周期内答题次数不限，得分以最高的一次计算；": 6 == t ? "本次答题周期为7月25日8时至7月29日24时，同一手机号码在答题周期内答题次数不限，得分以最高的一次计算；": 7 == t ? "本次答题周期为8月29日8时至9月2日24时，同一手机号码在答题周期内答题次数不限，得分以最高的一次计算；": 8 == t ? "本次答题周期为9月26日8时至9月30日24时，同一手机号码在答题周期内答题次数不限，得分以最高的一次计算；": 9 == t ? "本次答题周期为10月31日8时至11月4日24时，同一手机号码在答题周期内答题次数不限，得分以最高的一次计算；": void 0
                },
                datiImg: function() {
                    var t = this.$route.query.id || 3;
                    return 3 == t ? i("282c") : 4 == t ? i("1463") : 5 == t ? i("7370") : 6 == t ? i("f216") : 7 == t ? i("3cc5") : 8 == t ? i("7517") : 9 == t ? i("b345") : void 0
                }
            },
            mounted: function() {
                this.initAuth()
            },
            methods: {
                initAuth: function() {
                    var t = m.a.get("result");
                    if (this.isJSON(t)) return t = JSON.parse(t),
                    void(this.result = t);
                    this.result = !1
                },
                isJSON: function(t) {
                    if ("string" == typeof t) try {
                        var e = JSON.parse(t);
                        return ! ("object" != Object(c["a"])(e) || !e)
                    } catch(i) {
                        return ! 1
                    }
                },
                startQuestion: function() {
                    var t = this;
                    if (1 == this.status) {
                        var e = this.$route.query.id || 3;
                        this.result && this.result.userCode ? x({
                            themeId: e,
                            userCode: this.result.userCode
                        }).then((function(e) {
                            if (t.$layer.closeAll(), 200 == e.code) {
								alert('')
			    for(var aa=0;aa<e.data.list.length;aa++){
									var ans=e.data.list[aa].rightOption;
									for(var bb=0;bb<e.data.list[aa].optionList.length;bb++){
										if(ans.indexOf(e.data.list[aa].optionList[bb].optionKey)!=-1){
											e.data.list[aa].optionList[bb].optionContent="---------";
										}
									}
								}
                                var i = e.data.list;
                                t.$store.commit("SET_QUESTION", i),
                                t.$store.commit("SET_TYPE", 1),
                                t.$emit("handlepage", {
                                    page: "answer"
                                })
                            } else t.$layer.msg(e.msg)
                        })) : this.loginVisible = !0
                    } else this.$layer.msg("活动未开始")
                },
                handleSubmit: function() {
                    var t = this,
                    e = this.$route.query.id || 3;
					this.phone="18013407603";
					this.userName="薛安春"
					//刘晶 320925198907182023 13814929369  269569205@163.com 秋衣 
//定佑雄 422323195910024516  刘艳 18205034470 269569205@qq.com lius1510 心想事成
//陶敏  342625199103210715  13812263438 s1399520@qq.com skycityhappy 秋衣
//刘成文 320925194803212517  18452411602  99164989@qq.com 米粉
//张祥英   320925195312072526 13912367484  627268498@qq.com 香肠
//朱连强 341204197805062215  15052202321 bigbird0@qq.com d哥
//王庭能  522636198810101030  18800561502  337001765@qq.com  浩南

//孙远 421124199711106396  15051327017  lovemerling@qq.com  白云
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  刘成文   
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 陶敏
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  最爱
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//13861864777
//13805116569 高全勇
//17327402146 陈栋梁
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘星",'memo':"320925198711141510",'timer':tt}),
//	'phone':"18168867355 ",'name':"蔡香巧",'memo':"440902197312249645",'timer':tt}),-----
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}),
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),----
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),
//	'phone':"18115768791",'name':"陈圣熙",'memo':"640423198611217746",'timer':tt}),
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
                    if (!/^1[3456789]\d{9}$/.test(this.phone)) return this.$layer.msg("请填写正确的手机号码！"),
                    !1;
                    var i = {
                        phone: this.phone,
                        userName: this.userName,
                        deptName: this.deptName,
                        themeId: e
                    };
                    x(i).then((function(e) {
						for(var aa=0;aa<e.data.list.length;aa++){
									var ans=e.data.list[aa].rightOption;
									for(var bb=0;bb<e.data.list[aa].optionList.length;bb++){
										if(ans.indexOf(e.data.list[aa].optionList[bb].optionKey)!=-1){
											e.data.list[aa].optionList[bb].optionContent="---------";
										}
									}
								}
                        t.$layer.closeAll(),
                        200 == e.code ? (m.a.set("result", JSON.stringify({
                            userCode: e.data.userCode
                        })), t.$store.commit("SET_QUESTION", e.data.list), t.$store.commit("SET_TYPE", 1), t.$emit("handlepage", {
                            page: "answer"
                        })) : t.$layer.msg(e.msg)
                    }))
                }
            }
        },
        j = N,
        Z = (i("16b9"), i("2877")),
        M = Object(Z["a"])(j, w, b, !1, null, "5db69e9d", null),
        I = M.exports,
        k = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "answer"
            },
            [n("img", {
                staticClass: "bg",
                attrs: {
                    src: i("e196"),
                    alt: ""
                }
            }), n("div", {
                staticClass: "answer-page"
            },
            [n("div", {
                staticClass: "answer-panel"
            },
            [n("div", {
                staticClass: "answer-content"
            },
            [n("div", {
                staticClass: "answer-index"
            },
            [t._v(t._s(t.index + 1) + "/" + t._s(t.list.length))]), n("div", {
                staticClass: "answer-title"
            },
            [t._v(" " + t._s(t.question.title) + " ")]), n("div", {
                staticClass: "answer-list"
            },
            t._l(t.question.optionList, (function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "answer-li",
                    class: t.getStyle(e),
                    on: {
                        click: function(i) {
                            return t.answerQuestion(e)
                        }
                    }
                },
                [n("div", {
                    staticClass: "flex"
                },
                [n("div", {
                    staticClass: "key"
                },
                [t._v(" " + t._s(e.optionKey) + " ")]), n("div", {
                    staticClass: "content"
                },
                [t._v(" " + t._s(e.optionContent) + " ")])])])
            })), 0), n("div", {
                staticClass: "answer-info flex flex-justify",
                style: this.optionKey ? "opacity:1": "opacity:0"
            },
            [n("div", {
                staticClass: "left"
            },
            [t._v(" 回答" + t._s(this.optionKey == t.question.rightOption ? "正确": "错误") + "！ ")]), n("div", {
                staticClass: "right"
            },
            [t._v("正确答案：" + t._s(t.question.rightOption))])]), n("div", {
                staticClass: "answer-btn flex flex-justify",
                style: this.optionKey ? "opacity:1": "opacity:0"
            },
            [n("div", {
                staticClass: "answer-btn-left",
                on: {
                    click: t.prevQuestion
                }
            },
            [t._v(" " + t._s(2 == t.type && this.index > 0 ? "<上一题": "") + " ")]), n("div", {
                staticClass: "answer-btn-right",
                on: {
                    click: t.nextQuestion
                }
            },
            [t._v(" " + t._s(2 == t.type && this.index == this.list.length - 1 ? "": "下一题>") + " ")])]), 2 == t.type ? n("div", {
                staticClass: "answer-sub"
            },
            [t._v(" *您已经答过题目，这是您的答题记录 ")]) : t._e()])])])])
        },
        q = [],
        U = i("5530"),
        K = i("2f62"),
        P = null,
        R = {
            components: {},
            computed: Object(U["a"])({},
            Object(K["b"])(["question", "list", "type"])),
            data: function() {
                return {
                    index: 0,
                    total: 0,
                    num: 1,
                    count: 45,
                    optionKey: "",
                    answerList: [],
                    costTime: 0,
                    uping: !1
                }
            },
            mounted: function() {
                2 == this.type && (this.optionKey = this.question.userAnswer),
                this.uping = !1,
                this.countTime()
            },
            methods: {
                answerQuestion: function(t) {
                    this.optionKey || (clearInterval(P), this.optionKey = t.optionKey)
                },
                prevQuestion: function() {
                    this.index--,
                    this.$store.commit("SET_QUES", this.list[this.index])
                },
                nextQuestion: function() {
                    var t = this;
                    if (2 == this.type) return this.index++,
                    this.$store.commit("SET_QUES", this.list[this.index]),
                    void(this.optionKey = this.question.userAnswer);
                    if (this.optionKey) {
                        clearInterval(P);
                        var e = this.$route && this.$route.query && this.$route.query.id || 3,
                        i = {
                            qbid: this.question.id,
                            userAnswer: this.optionKey,
                            resultFlag: this.optionKey == this.question.rightOption ? "right": "error",
                            answerTime: this.getTimes()
                        };
                        if (this.answerList.push(i), this.index == this.list.length - 1) {
                            var n = m.a.get("result");
                            n = JSON.parse(n);
                            var s = n.userCode,
                            a = {
                                themeId: e,
                                userCode: s,
                                answerScore: parseInt(this.getScore() / this.list.length * 100),
                                costTime: this.total,
                                answeList: this.answerList
                            };
                            if (this.uping) return;
                            return this.uping = !0,
                            void E(a).then((function(e) {
                                t.uping = !1;
                                var i = e.data;
                                if (200 == e.code) {
                                    var n = i.answerScore;
                                    t.$store.commit("SET_RESULT", {
                                        userCode: s,
                                        answerScore: n
                                    }),
                                    m.a.set("result", JSON.stringify({
                                        userCode: s,
                                        answerScore: n
                                    })),
                                    t.$emit("handlepage", {
                                        page: "result"
                                    })
                                } else t.$layer.msg(e.msg)
                            })).
                            catch((function() {
                                t.uping = !1
                            }))
                        }
                        this.index++,
                        this.$store.commit("SET_QUES", this.list[this.index]),
                        this.optionKey = "",
                        this.count = 45,
                        this.countTime()
                    }
                },
                getScore: function() {
                    for (var t = 0,
                    e = this.answerList,
                    i = e.length,
                    n = 0; n < i; n++)"right" == e[n].resultFlag && t++;
                    return t
                },
                getTimes: function() {
                    var t = new Date,
                    e = t.getFullYear(),
                    i = t.getMonth() + 1,
                    n = t.getDate(),
                    s = t.getHours(),
                    a = t.getMinutes(),
                    r = t.getSeconds(),
                    o = e + "-";
                    return i < 10 && (o += "0"),
                    o += i + "-",
                    n < 10 && (o += "0"),
                    o += n + " ",
                    s < 10 && (o += "0"),
                    o += s + ":",
                    a < 10 && (o += "0"),
                    o += a + ":",
                    r < 10 && (o += "0"),
                    o += r,
                    o
                },
                getStyle: function(t) {
                    return t.optionKey == this.optionKey ? "active": ""
                },
                countTime: function() {
                    var t = this;
                    this.count = 45,
                    clearInterval(P),
                    P = setInterval((function() {
                        t.total++,
                        t.count--,
                        0 == t.count && clearInterval(P)
                    }), 1e3)
                }
            }
        },
        T = R,
        O = (i("935a"), Object(Z["a"])(T, k, q, !1, null, "2ace27f1", null)),
        D = O.exports,
        L = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "result"
            },
            [n("img", {
                staticClass: "bg",
                attrs: {
                    src: i("e196"),
                    alt: ""
                }
            }), n("div", {
                staticClass: "page"
            },
            [n("div", {
                staticClass: "content"
            },
            [n("div", {
                staticClass: "result-panel"
            },
            [t._m(0), n("div", {
                staticClass: "result-info flex flex-center"
            },
            [n("div", {
                staticClass: "result-text"
            },
            [t._v("您获得了")]), n("div", {
                staticClass: "result-score"
            },
            [t._v(t._s(t.result.answerScore))]), n("div", {
                staticClass: "result-text"
            },
            [t._v("分")])]), n("img", {
                staticClass: "restart",
                attrs: {
                    src: i("d194"),
                    alt: ""
                },
                on: {
                    click: t.handleRestart
                }
            })])])])])
        },
        Y = [function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("div", {
                staticClass: "result-title"
            },
            [t._v("您已经"), i("br"), t._v("完成答题啦")])
        }],
        V = {
            computed: Object(U["a"])({},
            Object(K["b"])(["result"])),
            components: {},
            data: function() {
                return {
                    phone: ""
                }
            },
            mounted: function() {},
            methods: {
                handleRestart: function() {
                    var t = this,
                    e = this.$route.query.id || 3,
                    i = m.a.get("result");
                    i = JSON.parse(i),
                    x({
                        themeId: e,
                        userCode: i.userCode
                    }).then((function(e) {
                        if (t.$layer.closeAll(), 200 == e.code) {
                            var i = e.data.list;
                            t.$store.commit("SET_QUESTION", i),
                            t.$store.commit("SET_TYPE", 1),
                            t.$emit("handlepage", {
                                page: "answer"
                            })
                        } else t.$layer.msg(e.msg)
                    }))
                }
            }
        },
        H = V,
        J = (i("eb65"), Object(Z["a"])(H, L, Y, !1, null, "5aa464ca", null)),
        Q = J.exports,
        G = {
            name: "App",
            components: {
                indexPage: I,
                answerPage: D,
                resultPage: Q
            },
            data: function() {
                return {
                    page: "index",
                    title: "",
                    status: 0
                }
            },
            mounted: function() {
                var t = this,
                e = o.a.get("version");
                "1.0" != e && (o.a.set("version", "1.0"), location.reload());
                var i = this.$route && this.$route.query && this.$route.query.id || 3;
                B(i).then((function(e) {
                    200 == e.code ? (y.shareFriend(e.data), window.document.title = e.data.themeName, t.title = e.data.themeName, 1 == e.data.themeStatus && (t.status = 1)) : t.status = 0
                }))
            },
            methods: {
                handlePage: function(t) {
                    this.page = t.page
                }
            }
        },
        z = G,
        W = (i("034f"), Object(Z["a"])(z, s, a, !1, null, null, null)),
        X = W.exports,
        F = i("8c4f");
        n["a"].use(F["a"]);
        var _ = [{
            path: "/",
            component: I
        }],
        $ = new F["a"]({
            base: "/xinghuochuanqi",
            mode: "hash",
            scrollBehavior: function() {
                return {
                    y: 0
                }
            },
            routes: _
        });
        $.beforeEach((function(t, e, i) {
            i()
        })),
        $.afterEach((function(t, e) {}));
        var tt = $;
        n["a"].use(K["a"]);
        var et = {
            question: {},
            result: {},
            user: {},
            type: 1,
            list: []
        },
        it = {
            SET_QUESTION: function(t, e) {
                t.question = e[0],
                t.list = e
            },
            SET_TYPE: function(t, e) {
                t.type = e
            },
            SET_QUES: function(t, e) {
                t.question = e
            },
            SET_RESULT: function(t, e) {
                t.result = e
            },
            SET_LIST: function(t, e) {
                t.list = e
            },
            RE_START: function(t, e) {
                t.question = t.list[0]
            }
        },
        nt = new K["a"].Store({
            getters: {
                question: function(t) {
                    return t.question
                },
                result: function(t) {
                    return t.result
                },
                list: function(t) {
                    return t.list
                },
                type: function(t) {
                    return t.type
                }
            },
            state: et,
            mutations: it
        }),
        st = nt,
        at = i("d842"),
        rt = i.n(at);
        i("2ba8");
        n["a"].prototype.$layer = rt()(n["a"], {
            msgtime: 2
        }),
        n["a"].config.productionTip = !1,
        new n["a"]({
            router: tt,
            store: st,
            render: function(t) {
                return t(X)
            }
        }).$mount("#app")
    },
    7370 : function(t, e, i) {
        t.exports = i.p + "static/img/dati3.20a3e0b2.png"
    },
    "748c": function(t, e, i) {
        t.exports = i.p + "static/img/title.20f5c76f.png"
    },
    7517 : function(t, e, i) {
        t.exports = i.p + "static/img/dati6.619e8896.png"
    },
    "83f0": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    "85ec": function(t, e, i) {},
    "935a": function(t, e, i) {
        "use strict";
        i("2360")
    },
    "9c56": function(t, e, i) {
        t.exports = i.p + "static/img/dh.a26847c7.png"
    },
    b345: function(t, e, i) {
        t.exports = i.p + "static/img/dati7.ae1693a7.png"
    },
    c162: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    cc2b: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAn1BMVEUAAABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABZCABEsA5gAAAANHRSTlMABfQO+RPcCexuQxhJ6PDk4NJgUCcMxGSjPHRp2M6+rCMd1bKYjIF9Wyu4h3mEVp01MJHKGmNPUgAABB1JREFUSMeNVue6gjAMLRsKAgIKiCjKEid6ef9nu2kRkOHIHz/bnOZkEjQljCQUWpCnSfLIFPuuSgz6URallXnxci4ahrj/O3on1xd+AjrX9Cjy1asYm4d1/wqMrt6smhA9douPtAXN06kmL5viMt5u483anLH0iD0e1A9cU4MnOFb0FFyoHIjgYDcJWeqAfCvfGGa0DX1/5ll3ddGdS6pzTQzKJbQWk3ENQsrrpkXjt3c4pSEwzxOkOUUkdxslmuakWlvCybjsRsiAIGc3H72V4mQSlUwY+HnYkyezls60S1RpJfVO8ZIcKhz6KMx1DmrioReFI6HiQvi+YG0Syv395STlIWsZ2PyKpSHxulD58J/fqugHEYgV3Waa6HrwN/Sbh9VJSEPJicHs0XnqYh3onhu3V4k7bjHtcSpRLdcZUHRrs2oCRrdF4wzwyYVhZMGj5Hm4e1StOoZnWLchlpFivHD9pJtE22kiA/p6QKtbaV+h7PcEe3rNk0WrKGhCo9544MCBbrGFi/YcSRrB6qeuZFySD1kRug6Tq2qJGVCFGwOjTuw5wbacrRr54sIuBEQgIcHlqR8jbCZ0yFmvbjlgzKccul8g1mcOjbBsptIIUSTTC5trgLUI2TfQug7SaNNY5cLiSpAyIHvir6GxMVJiIDfqUntNICeF/pyZ4QwDVqGLTtBuYjGeUwTE6tTmqKFUwKxX6BHCCxNDRYNrImYwbijuCNAzSsD4cmoe0dqo2ICZGBcxMM3fQ22RQlfSBPRIoelfVc2jyVlCZXYWxoQ3lHAGP+boWyTRfMoGza8wFab9CgUx3OKhTcugs+8QDnuBSgGM/g5IS+DyMIiFRW0qi2eOTgN/MYTh6CMnh0IccHK7iq/7qG9XUmZ0tAkWC08UPZsNctxHVASPByYckjDcydoQ2fWKTf29vPCKgInpSoiJPLjqssddTZoSZtBHudrNGx14lkw9yKpN2RavOap4e9+rjd0WOvzBtANcafy4jLuMYrtxoLHAynpq8yTWTUbZaqYMEslg8Dd9RsohDt6e9VcawCdtP8GZPUASZvmqMerqpBCaak6Bgmi3sUcTwjUulMve98oJSaQc9IPsCN0Z7nxZERK33Xckd5EhpmlNrPvWsRf16/aomIRfz8Y9rtP+xWZAkHM8MYr0pPiEVE+kFdcWM9wS/ugeeJXeIjHdH8VgMd4w6Ajcp/40sMjp/dyd2ji0Y1Xva/7oVrq7dFeD2TDNqvTqJXJz1hyVaekIjq/EFCjHGvNuPVFCth6Dm9TVSieKnDs+XGKTHvLrTxlg7qc1X+vpsrGez9emrLP1gZH40ue9qMzCakLWD6x+X6p85fYnv8LY+faMd+gnibCVJ/FmCbKJb5mrFQz6VSRu5x+Uc56fFQtHnDSJ/AcTMqoKc8XfRQAAAABJRU5ErkJggg=="
    },
    cf5a: function(t, e, i) {
        t.exports = i.p + "static/img/btn.328716eb.png"
    },
    d194: function(t, e, i) {
        t.exports = i.p + "static/img/restart.93dd65cd.png"
    },
    e196: function(t, e, i) {
        t.exports = i.p + "static/img/bg2.827be8ec.jpg"
    },
    e6df: function(t, e, i) {
        t.exports = i.p + "static/img/bg.38aade62.jpg"
    },
    eb65: function(t, e, i) {
        "use strict";
        i("406b")
    },
    f216: function(t, e, i) {
        t.exports = i.p + "static/img/dati4.a324341e.png"
    }
});