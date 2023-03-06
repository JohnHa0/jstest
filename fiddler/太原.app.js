(function(e) {
    function t(t) {
        for (var a, o, i = t[0], u = t[1], d = t[2], s = 0, f = []; s < i.length; s++) o = i[s],
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && f.push(c[o][0]),
        c[o] = 0;
        for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        l && l(t);
        while (f.length) f.shift()();
        return r.push.apply(r, d || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
                var i = n[o];
                0 !== c[i] && (a = !1)
            }
            a && (r.splice(t--, 1), e = u(u.s = n[0]))
        }
        return e
    }
    var a = {},
    o = {
        app: 0
    },
    c = {
        app: 0
    },
    r = [];
    function i(e) {
        return u.p + "js/" + ({} [e] || e) + "." + {
            "chunk-0331d18b": "684de759",
            "chunk-142be6f0": "990d9ea4",
            "chunk-17de8336": "e3765f40",
            "chunk-1d05587f": "32800eee",
            "chunk-25edbdac": "1064fcc7",
            "chunk-27977004": "dab4a215",
            "chunk-1b33ce73": "52991f1d",
            "chunk-0c77a956": "fbbae813",
            "chunk-1b9f554a": "10c446a0",
            "chunk-0baa871b": "8b6bd579",
            "chunk-7222777c": "4ec75854",
            "chunk-4f7052d2": "aeab19b9",
            "chunk-0840abcb": "cde3c2dd",
            "chunk-1862e984": "fcd61f46",
            "chunk-6f5ea93a": "395928cc",
            "chunk-29de85ad": "3a582a7f",
            "chunk-4bb09d42": "24755c8e",
            "chunk-6a1e745a": "05ccba0d",
            "chunk-7cb4177b": "16b785b2",
            "chunk-a0ae61f2": "bdaeae90",
            "chunk-a871f8e8": "d8e77d9d",
            "chunk-fdffd878": "f2e340f7",
            "chunk-ffc17cb0": "6f2fe791"
        } [e] + ".js"
    }
    function u(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, u),
        n.l = !0,
        n.exports
    }
    u.e = function(e) {
        var t = [],
        n = {
            "chunk-0331d18b": 1,
            "chunk-142be6f0": 1,
            "chunk-17de8336": 1,
            "chunk-1d05587f": 1,
            "chunk-25edbdac": 1,
            "chunk-27977004": 1,
            "chunk-1b33ce73": 1,
            "chunk-0c77a956": 1,
            "chunk-1b9f554a": 1,
            "chunk-0baa871b": 1,
            "chunk-7222777c": 1,
            "chunk-4f7052d2": 1,
            "chunk-0840abcb": 1,
            "chunk-1862e984": 1,
            "chunk-6f5ea93a": 1,
            "chunk-29de85ad": 1,
            "chunk-4bb09d42": 1,
            "chunk-6a1e745a": 1,
            "chunk-7cb4177b": 1,
            "chunk-a0ae61f2": 1,
            "chunk-a871f8e8": 1,
            "chunk-fdffd878": 1,
            "chunk-ffc17cb0": 1
        };
        o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function(t, n) {
            for (var a = "css/" + ({} [e] || e) + "." + {
                "chunk-0331d18b": "1f8afd9f",
                "chunk-142be6f0": "7fcf28bb",
                "chunk-17de8336": "de09029a",
                "chunk-1d05587f": "5e608459",
                "chunk-25edbdac": "3c2e33e0",
                "chunk-27977004": "7f834f3b",
                "chunk-1b33ce73": "e573f74c",
                "chunk-0c77a956": "3d3a438c",
                "chunk-1b9f554a": "5101b05e",
                "chunk-0baa871b": "7036277f",
                "chunk-7222777c": "dc0f697e",
                "chunk-4f7052d2": "11c3e1da",
                "chunk-0840abcb": "ad0bde20",
                "chunk-1862e984": "0b0cf2ae",
                "chunk-6f5ea93a": "af972b2a",
                "chunk-29de85ad": "8c59e15f",
                "chunk-4bb09d42": "acf0abcd",
                "chunk-6a1e745a": "4cb4c660",
                "chunk-7cb4177b": "25b6a79b",
                "chunk-a0ae61f2": "9e129edd",
                "chunk-a871f8e8": "311f3bf3",
                "chunk-fdffd878": "4cb4c660",
                "chunk-ffc17cb0": "0fa9d50a"
            } [e] + ".css", c = u.p + a, r = document.getElementsByTagName("link"), i = 0; i < r.length; i++) {
                var d = r[i],
                s = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (s === a || s === c)) return t()
            }
            var f = document.getElementsByTagName("style");
            for (i = 0; i < f.length; i++) {
                d = f[i],
                s = d.getAttribute("data-href");
                if (s === a || s === c) return t()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet",
            l.type = "text/css",
            l.onload = t,
            l.onerror = function(t) {
                var a = t && t.target && t.target.src || c,
                r = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED",
                r.request = a,
                delete o[e],
                l.parentNode.removeChild(l),
                n(r)
            },
            l.href = c;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(l)
        })).then((function() {
            o[e] = 0
        })));
        var a = c[e];
        if (0 !== a) if (a) t.push(a[2]);
        else {
            var r = new Promise((function(t, n) {
                a = c[e] = [t, n]
            }));
            t.push(a[2] = r);
            var d, s = document.createElement("script");
            s.charset = "utf-8",
            s.timeout = 120,
            u.nc && s.setAttribute("nonce", u.nc),
            s.src = i(e);
            var f = new Error;
            d = function(t) {
                s.onerror = s.onload = null,
                clearTimeout(l);
                var n = c[e];
                if (0 !== n) {
                    if (n) {
                        var a = t && ("load" === t.type ? "missing": t.type),
                        o = t && t.target && t.target.src;
                        f.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")",
                        f.name = "ChunkLoadError",
                        f.type = a,
                        f.request = o,
                        n[1](f)
                    }
                    c[e] = void 0
                }
            };
            var l = setTimeout((function() {
                d({
                    type: "timeout",
                    target: s
                })
            }), 12e4);
            s.onerror = s.onload = d,
            document.head.appendChild(s)
        }
        return Promise.all(t)
    },
    u.m = e,
    u.c = a,
    u.d = function(e, t, n) {
        u.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    u.t = function(e, t) {
        if (1 & t && (e = u(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (u.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) u.d(n, a,
        function(t) {
            return e[t]
        }.bind(null, a));
        return n
    },
    u.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e["default"]
        }: function() {
            return e
        };
        return u.d(t, "a", t),
        t
    },
    u.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    u.p = "https://web-bookan.bookan.com.cn/answer4_data/",
    u.oe = function(e) {
        throw console.error(e),
        e
    };
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [],
    s = d.push.bind(d);
    d.push = t,
    d = d.slice();
    for (var f = 0; f < d.length; f++) t(d[f]);
    var l = s;
    r.push([0, "chunk-vendors"]),
    n()
})({
    0 : function(e, t, n) {
        e.exports = n("56d7")
    },
    "0d2c": function(e, t, n) {},
    "1a49": function(e, t, n) {},
    "1b3d": function(e, t, n) {},
    "32f9": function(e, t, n) {
        "use strict";
        var a = n("fdf8"),
        o = n.n(a);
        o.a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("c975"),
        n("ac1f"),
        n("5319"),
        n("841c"),
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var a, o = n("2b0e"),
        c = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            },
            [e.initDone ? n("router-view") : e._e(), e.initDone ? e._e() : n("div", {
                staticClass: "app__loading"
            },
            [n("van-loading", {
                attrs: {
                    size: "24px",
                    vertical: ""
                }
            },
            [e._v("加载中...")])], 1), e.info && e.info.facadeGlobal.backgroundMusic ? n("audio", {
                attrs: {
                    src: e.info.musicInfo.file,
                    id: "bgm"
                },
                on: {
                    ended: function(t) {
                        return e.playMusic(!0)
                    }
                }
            }) : e._e(), e.backButton ? n("FloatButton", {
                on: {
                    isclick: e.isclick
                }
            },
            [n("div", {
                staticClass: "back"
            })]) : e._e()], 1)
        },
        r = [],
        i = (n("b0c0"), n("5530")),
        u = n("ade3"),
        d = (n("ac1e"), n("543e")),
        s = (n("1b3d"), n("1a49"), n("0d2c"), n("2f62")),
        f = n("b228"),
        l = n("2c18"),
        h = n("fd03"),
        p = (n("fa7d"), n("d354")),
        b = {
            name: "App",
            components: (a = {},
            Object(u["a"])(a, d["a"].name, d["a"]), Object(u["a"])(a, "FloatButton", f["a"]), a),
            computed: Object(i["a"])({},
            Object(s["c"])("site", ["info", "style", "audioSwitch", "LOADING"])),
            provide: function() {
                return {
                    reload: this.reload
                }
            },
            data: function() {
                return {
                    initDone: !1,
                    backButton: sessionStorage.getItem("__backButton"),
                    backButtonUrl: [{
                        orgid: 1088791,
                        url: "https://wk3.bookan.com.cn/?id=17881"
                    },
                    {
                        orgid: 64513,
                        url: "https://wk3.bookan.com.cn/?id=16961"
                    },
                    {
                        orgid: 1430,
                        url: "https://wk3.bookan.com.cn/?id=21025"
                    },
                    {
                        orgid: 1108069,
                        url: "https://wk3.bookan.com.cn/?id=26124"
                    },
                    {
                        orgid: 1088782,
                        url: "https://wk3.bookan.com.cn/?id=16708"
                    }]
                }
            },
            methods: Object(i["a"])(Object(i["a"])({},
            Object(s["b"])("site", ["loadInfo", "loadStyle", "changeAudioSwitch"])), {},
            {
                reload: function() {
                    this.initDone = !1,
                    this.$nextTick((function() {
                        this.initDone = !0
                    }))
                },
                isclick: function() {
                    window.location.href = this.info.facadeGlobal.wkUrl
                },
                playMusic: function(e) {
                    var t = document.getElementById("bgm");
                    e ? "undefined" != typeof WeixinJSBridge ? WeixinJSBridge.invoke("getNetworkType", {},
                    (function() {
                        t && t.play()
                    })) : t && t.play() : t && t.pause()
                },
                autoLogin: function() {
                    var e = this;
                    Object(p["e"])().token && Object(h["a"])({
                        openid: localStorage.getItem("openid") || ""
                    }).then((function(e) {
                        localStorage.setItem("__token", localStorage.getItem("__oldtoken")),
                        localStorage.removeItem("__oldtoken"),
                        window.location.href = Object(p["a"])("token"),
                        console.log(e)
                    })).
                    catch((function(t) {
                        4e3 == t.code && e.$router.replace("/autoLogin")
                    }))
                }
            }),
            created: function() {
                var e = this;
                this.loadInfo().then((function(t) {
                    document.title = t.name,
                    "notInDingTalk" !== l["env"].platform && l["biz"].navigation.setTitle({
                        title: t.name
                    }),
                    e.info.facadeGlobal.backgroundMusic && e.$nextTick((function() {
                        var t = document.getElementById("bgm");
                        t.load(),
                        e.playMusic(!0)
                    })),
                    e.loadStyle().then((function() {
                        e.initDone = !0
                    })),
                    e.info.facadeGlobal.wkUrl ? (sessionStorage.setItem("__backButton", !0), e.backButton = !0) : (sessionStorage.setItem("__backButton", !1), e.backButton = !1)
                })).
                catch((function(e) {
                    console.log(e)
                }));
                var t = document.documentElement.clientHeight;
                window.onload = function() {
                    document.getElementById("app").style.height = "".concat(t, "px")
                }
            },
            mounted: function() {
                this.autoLogin(),
                document.addEventListener("visibilitychange", (function() {
                    if ("hidden" === document.visibilityState) {
                        var e = document.getElementById("bgm");
                        e && e.pause()
                    }
                    if ("visible" === document.visibilityState) {
                        var t = document.getElementById("bgm");
                        t && t.play()
                    }
                })),
                /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||
                function(e) {
                    var t = !1,
                    n = !1,
                    a = 0,
                    o = 0;
                    function c(e) {
                        e.preventDefault(),
                        e.stopPropagation()
                    }
                    e.addEventListener("touchstart", (function(c) {
                        var r = c.touches[0];
                        r.clientX / e.clientWidth < .2 ? (t = !0, n = !1) : r.clientY <= 45 ? (t = !1, n = !0) : (t = !1, n = !1),
                        a = r.clientX,
                        o = r.clientY
                    }), !1),
                    e.addEventListener("touchmove", (function(e) {
                        var r = e.touches[0] || {
                            clientX: 0,
                            clientY: 0
                        },
                        i = r.clientX,
                        u = r.clientY; (t && Math.abs(u - o) < 50 && Math.abs(i - a) > 50 || n && Math.abs(u - o) > 50 && Math.abs(i - a) < 50) && c(e)
                    }), !1),
                    e.addEventListener("touchend", (function() {
                        t = !1,
                        n = !1
                    }), !1)
                } (document.body)
            },
            watch: {
                audioSwitch: function(e) {
                    this.playMusic(e)
                }
            }
        },
        m = b,
        k = (n("7faf"), n("2877")),
        g = Object(k["a"])(m, c, r, !1, null, null, null),
        v = g.exports,
        w = (n("d3b7"), {
            info: null,
            style: null,
            audioSwitch: !0,
            theme: "",
            LOADING: !1
        }),
        j = {
            showLoading: function(e) {
                e.LOADING = !0
            },
            hideLoading: function(e) {
                e.LOADING = !1
            },
            updateInfo: function(e, t) {
                e.info = t
            },
            updateStyle: function(e, t) {
                e.style = t,
                e.theme = t.styleGlobal.primaryColor
            },
            changeAudioSwitch: function(e) {
                e.audioSwitch = !e.audioSwitch
            }
        },
        y = {
            loadInfo: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(h["r"])().then((function(n) {
                        t("updateInfo", n.data),
                        e(w.info)
                    })).then((function(e) {
                        n(e)
                    }))
                }))
            },
            loadStyle: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    Object(h["u"])({
                        dpr: Math.floor(window.devicePixelRatio)
                    }).then((function(n) {
                        t("updateStyle", n.data),
                        e()
                    })).then((function(e) {
                        n(e)
                    }))
                }))
            },
            changeAudioSwitch: function(e) {
                var t = e.commit;
                t("changeAudioSwitch")
            }
        },
        O = {
            namespaced: !0,
            state: w,
            actions: y,
            mutations: j
        };
        o["a"].use(s["a"]);
        var _ = !1,
        S = new s["a"].Store({
            modules: {
                site: O
            },
            strict: _
        }),
        I = (n("45fc"), n("e7e5"), n("d399")),
        P = n("8c4f"),
        q = P["a"].prototype.replace;
        P["a"].prototype.replace = function(e) {
            return q.call(this, e).
            catch((function(e) {
                return e
            }))
        };
        var x = P["a"].prototype.push;
        P["a"].prototype.push = function(e, t, n) {
            return this.action = "push",
            t || n ? x.call(this, e, t, n) : x.call(this, e).
            catch((function(e) {
                return e
            }))
        },
        o["a"].use(P["a"]);
        var L = new P["a"]({
            routes: [{
                path: "/",
                redirect: "/home",
                component: function() {
                    return n.e("chunk-a0ae61f2").then(n.bind(null, "1884"))
                }
            },
            {
                path: "/home",
                component: function() {
                    return n.e("chunk-a0ae61f2").then(n.bind(null, "1884"))
                }
            },
            {
                path: "/answer/:type",
                name: "Answer",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-1b33ce73"), n.e("chunk-0c77a956"), n.e("chunk-1b9f554a"), n.e("chunk-0baa871b")]).then(n.bind(null, "b440"))
                },
                meta: {
                    requireAuth: !0,
                    keepAlive: !0
                }
            },
            {
                path: "/parsing",
                name: "Parsing",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-1b33ce73"), n.e("chunk-0c77a956"), n.e("chunk-1b9f554a"), n.e("chunk-7222777c")]).then(n.bind(null, "0878"))
                }
            },
            {
                path: "/rank",
                name: "Rank",
                component: function() {
                    return n.e("chunk-0331d18b").then(n.bind(null, "aa32"))
                }
            },
            {
                path: "/ready",
                name: "Ready",
                component: function() {
                    return n.e("chunk-25edbdac").then(n.bind(null, "5dbd"))
                }
            },
            {
                path: "/learning",
                name: "Learning",
                component: function() {
                    return n.e("chunk-a871f8e8").then(n.bind(null, "46c6"))
                }
            },
            {
                path: "/learning/list/:id",
                name: "LearningList",
                component: function() {
                    return n.e("chunk-ffc17cb0").then(n.bind(null, "f3a1"))
                }
            },
            {
                path: "/learning/detail/:id",
                name: "LearningDetail",
                component: function() {
                    return n.e("chunk-4bb09d42").then(n.bind(null, "10d6"))
                }
            },
            {
                path: "/answerLog",
                name: "AnswerLog",
                component: function() {
                    return n.e("chunk-6a1e745a").then(n.bind(null, "3351"))
                }
            },
            {
                path: "/departAnswerLog/:id/:type",
                name: "DepartAnswerLog",
                component: function() {
                    return n.e("chunk-fdffd878").then(n.bind(null, "5948"))
                }
            },
            {
                path: "/answerResult",
                name: "AnswerResult",
                component: function() {
                    return n.e("chunk-29de85ad").then(n.bind(null, "4f54"))
                }
            },
            {
                path: "/answerAddNotes/:subjectid",
                name: "AnswerAddNotes",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-1b33ce73")]).then(n.bind(null, "3d7d"))
                }
            },
            {
                path: "/note",
                name: "Note",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-1b33ce73"), n.e("chunk-0c77a956")]).then(n.bind(null, "0247"))
                },
                meta: {
                    requireAuth: !0
                }
            },
            {
                path: "/login",
                name: "Login",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-4f7052d2"), n.e("chunk-0840abcb")]).then(n.bind(null, "ee7c"))
                }
            },
            {
                path: "/draw",
                name: "Draw",
                component: function() {
                    return n.e("chunk-17de8336").then(n.bind(null, "4036"))
                }
            },
            {
                path: "/drawList",
                name: "DrawList",
                component: function() {
                    return n.e("chunk-142be6f0").then(n.bind(null, "999d"))
                }
            },
            {
                path: "/drawDetail/:id",
                name: "DrawDetail",
                component: function() {
                    return n.e("chunk-7cb4177b").then(n.bind(null, "1dfc"))
                },
                props: !0
            },
            {
                path: "/drawAddress/:id",
                name: "DrawAddress",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-6f5ea93a")]).then(n.bind(null, "ade0"))
                },
                props: !0
            },
            {
                path: "/RankTotal/:id/:fwbid",
                name: "RankTotal",
                component: function() {
                    return n.e("chunk-1d05587f").then(n.bind(null, "1e90"))
                },
                props: !0
            },
            {
                path: "/autoLogin",
                name: "autoLogin",
                component: function() {
                    return Promise.all([n.e("chunk-27977004"), n.e("chunk-4f7052d2"), n.e("chunk-1862e984")]).then(n.bind(null, "7e12"))
                },
                props: !0
            }]
        });
        L.beforeEach((function(e, t, n) {
            var a; - 1 != e.path.indexOf("RankTotal") ? (a = !1, sessionStorage.setItem("__isFirst", !1)) : a = sessionStorage.getItem("__isFirst"),
            "true" == a && (sessionStorage.setItem("__isFirst", !1), n({
                path: "/home",
                query: {
                    actuniqid: localStorage.getItem("__actuniqid")
                }
            })),
            e.matched.some((function(e) {
                return e.meta.requireAuth
            })) ? localStorage.getItem("__token") ? e.query.actuniqid ? n() : n({
                name: e.name,
                query: Object(i["a"])(Object(i["a"])({},
                e.query), {},
                {
                    actuniqid: localStorage.getItem("__actuniqid")
                }),
                params: Object(i["a"])({},
                e.params)
            }) : (Object(I["a"])("请先登录！"), n({
                name: "Login",
                query: {
                    fullPath: e.path
                }
            })) : e.query.actuniqid ? n() : n({
                name: e.name,
                query: Object(i["a"])(Object(i["a"])({},
                e.query), {},
                {
                    actuniqid: localStorage.getItem("__actuniqid")
                }),
                params: Object(i["a"])({},
                e.params)
            })
        }));
        var A = L,
        D = n("4eb5"),
        E = n.n(D);
        o["a"].config.productionTip = !1,
        o["a"].use(E.a);
        var T = navigator.userAgent.toLowerCase(),
        B = -1 !== T.indexOf("micromessenger"),
        C = "wx8a9494c393d91b77",
        R = Object(p["d"])().code,
        M = localStorage.getItem("openid");
        Object(p["e"])().token && localStorage.setItem("__oldtoken", Object(p["e"])().token);
        var N = !0;
        if (window.onbeforeunload = function(e) {
            N && wx.miniProgram.getEnv((function(e) {
                e.miniprogram && wx.miniProgram.navigateBack({
                    delta: 1
                })
            }))
        },
        B && !M) if (R) Object(h["j"])({
            code: R
        }).then((function(e) {
            localStorage.setItem("openid", e.data.openid),
            Object(p["d"])().str && localStorage.setItem("__str", Object(p["d"])().str),
            N = !1,
            location.replace(Object(p["a"])("code"))
        })).
        catch((function() {
            var e = window.location.origin + window.location.pathname + window.location.search + "#/home?actuniqid=" + localStorage.getItem("__actuniqid");
            N = !1;
            var t = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + C + "&redirect_uri=" + encodeURIComponent(e) + "&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
            window.location.replace(t)
        }));
        else {
            var U = window.location.href;
            N = !1;
            var F = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + C + "&redirect_uri=" + encodeURIComponent(U) + "&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
            window.location.replace(F)
        } else new o["a"]({
            store: S,
            router: A,
            render: function(e) {
                return e(v)
            }
        }).$mount("#app")
    },
    "73ac": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return o
        })),
        n.d(t, "b", (function() {
            return c
        })),
        n.d(t, "a", (function() {
            return r
        }));
        n("ac1f"),
        n("1276");
        var a = "kadsjkask@dadlaBkasdkladklkla@dk0ksmdokamd;m@alsdm;asmdokmkdajodjioajwoidjpawpodk[akcxkcojicjonofohefipaokkmcn",
        o = a.split("@")[1].split("d")[2].split("").reverse()[3] + a.split("@")[2].split("m")[0].split("").reverse()[2] + a.split("@")[2].split("d")[2].split("").reverse()[3] + a.split("@")[1].split("l")[1].split("").reverse()[4],
        c = ["answer4/finishTheExam0526"];
        c[0];
        var r = ["answer4/startTheExam"];
        r[0]
    },
    "7faf": function(e, t, n) {
        "use strict";
        var a = n("b8ff"),
        o = n.n(a);
        o.a
    },
    b228: function(e, t, n) {
        "use strict";
        var a = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                ref: "dragBox",
                staticClass: "floatButton",
                on: {
                    touchmove: [function(e) {
                        e.preventDefault()
                    },
                    function(t) {
                        return t.stopPropagation(),
                        e.touchmoveHandle("dragBox", t)
                    }],
                    click: e.isclick,
                    touchstart: function(t) {
                        return t.stopPropagation(),
                        e.touchstartHandle("dragBox", t)
                    }
                }
            },
            [e._t("default")], 2)
        },
        o = [],
        c = {
            components: {},
            data: function() {
                return {
                    coordinate: {
                        client: {},
                        elePosition: {}
                    }
                }
            },
            computed: {},
            watch: {},
            methods: {
                isclick: function() {
                    this.$emit("isclick")
                },
                touchstartHandle: function(e, t) {
                    var n = t.targetTouches[0];
                    this.coordinate.client = {
                        x: n.clientX,
                        y: n.clientY
                    },
                    this.coordinate.elePosition.left = this.$refs[e].offsetLeft,
                    this.coordinate.elePosition.top = this.$refs[e].offsetTop
                },
                touchmoveHandle: function(e, t) {
                    var n = t.targetTouches[0],
                    a = this.coordinate.elePosition.top + (n.clientY - this.coordinate.client.y);
                    a = a <= 0 ? 0 : a >= innerHeight - this.$refs[e].offsetHeight ? innerHeight - this.$refs[e].offsetHeight: a,
                    this.$refs[e].style.top = a + "px"
                }
            },
            created: function() {},
            mounted: function() {},
            beforeCreate: function() {},
            beforeMount: function() {},
            beforeUpdate: function() {},
            updated: function() {},
            beforeDestroy: function() {},
            destroyed: function() {},
            activated: function() {}
        },
        r = c,
        i = (n("32f9"), n("2877")),
        u = Object(i["a"])(r, a, o, !1, null, "ee44a31c", null);
        t["a"] = u.exports
    },
    b8ff: function(e, t, n) {},
    d354: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return u
        })),
        n.d(t, "c", (function() {
            return d
        })),
        n.d(t, "a", (function() {
            return s
        })),
        n.d(t, "e", (function() {
            return f
        })),
        n.d(t, "d", (function() {
            return l
        }));
        n("c975"),
        n("fb6a"),
        n("d3b7"),
        n("ac1f"),
        n("5319"),
        n("841c"),
        n("1276");
        var a = n("5530"),
        o = (n("e7e5"), n("d399")),
        c = n("bc3a"),
        r = n.n(c),
        i = n("8c4f");
        n("fa7d");
        function u(e, t) {
            return new Promise((function(n, a) {
                r.a.get(e, {
                    params: t
                }).then((function(e) {
                    n(e.data)
                })).
                catch((function(e) {
                    a(e.data)
                }))
            }))
        }
        function d(e, t) {
            return new Promise((function(n, a) {
                r.a.post(e, t).then((function(e) {
                    n(e.data)
                })).
                catch((function(e) {
                    a(e.data)
                }))
            }))
        }
        function s(e) {
            var t = window.location.href,
            n = "";
            n = t.indexOf("&") > -1 ? t.split("?")[0] + "?": t.split("?")[0];
            var a = t.split("?")[1];
            if (a && a.indexOf(e) > -1) {
                for (var o = {},
                c = a.split("&"), r = 0; r < c.length; r++) c[r] = c[r].split("="),
                o[c[r][0]] = c[r][1];
                delete o[e];
                var i = n + JSON.stringify(o).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
                return i
            }
            return t
        } ! sessionStorage.getItem("__isFirst") && sessionStorage.setItem("__isFirst", !0),
        r.a.defaults.baseURL = "https://opapi.bookan.com.cn",
        r.a.defaults.timeout = 3e4,
        r.a.interceptors.request.use((function(e) {
            o["a"].loading({
                message: "加载中...",
                forbidClick: !0,
                duration: 0
            });
            var t = {
                actuniqid: h,
                token: localStorage.getItem("__oldtoken") || localStorage.getItem("__token")
            };
            return "post" === e.method ? "multipart/form-data" !== e.headers["Content-Type"] && (e.data = Object(a["a"])(Object(a["a"])({},
            e.data), t)) : "get" === e.method && (e.params = Object(a["a"])(Object(a["a"])({},
            e.params), t)),
            e
        }), (function(e) {
            return Promise.error(e)
        })),
        r.a.defaults.sendSuccess = !0,
        r.a.defaults.retryDelay = 3e3,
        r.a.interceptors.response.use((function(e) {
            return o["a"].clear(),
            200 === e.status ? 0 === e.data.code || e.data.hash ? Promise.resolve(e) : 2 === e.data.code ? (Object(o["a"])({
                message: "登录过期，请重新登录",
                duration: 1e3,
                forbidClick: !0
            }), localStorage.removeItem("__token"), i["a"].replace({
                path: "/login",
                query: {
                    redirect: i["a"].currentRoute.fullPath
                }
            }), Promise.reject(e)) : (Object(o["a"])({
                message: e.data.msg,
                duration: 1e3
            }), Promise.reject(e)) : Promise.reject(e)
        }), (function(e) {
            if ("ECONNABORTED" === e.code && -1 !== e.message.indexOf("timeout")) {
                o["a"].loading({
                    message: "当前网络不佳 请稍等...",
                    forbidClick: !0,
                    duration: 3e3
                });
                var t = new Promise((function(e) {
                    e()
                }));
                return t.then((function() {
                    return r()(config)
                }))
            }
            return Promise.reject(e)
        }));
        var f = function() {
            var e, t = "" + window.location.hash;
            e = t.split("?") && t.split("?")[1];
            var n = e && e.split("&"),
            a = {};
            if (n) for (var o = 0; o < n.length; o++) {
                var c = n[o].split("=");
                "id" === c[0] && -1 !== c[1].indexOf("!") ? a[c[0]] = c[1].slice(0, -1) : a[c[0]] = c[1]
            }
            return a
        },
        l = function() {
            var e, t = "" + window.location.search;
            e = t.split("?") && t.split("?")[1];
            var n = e && e.split("&"),
            a = {};
            if (n) for (var o = 0; o < n.length; o++) {
                var c = n[o].split("=");
                "id" === c[0] && -1 !== c[1].indexOf("!") ? a[c[0]] = c[1].slice(0, -1) : a[c[0]] = c[1]
            }
            return a
        };
        f().actuniqid !== localStorage.getItem("__actuniqid") && f().actuniqid && localStorage.clear(),
        !localStorage.getItem("__actuniqid") && localStorage.setItem("__actuniqid", f().actuniqid);
        var h = localStorage.getItem("__actuniqid")
    },
    fa7d: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        })),
        n.d(t, "a", (function() {
            return o
        }));
        n("c975"),
        n("fb6a"),
        n("4d63"),
        n("ac1f"),
        n("25f0"),
        n("466d"),
        n("841c"),
        n("1276");
        var a = function() {
            var e, t = "" + (arguments[0] || window.location.search);
            e = t.split("?") && t.split("?")[1];
            var n = e && e.split("&"),
            a = {};
            if (n) for (var o = 0; o < n.length; o++) {
                var c = n[o].split("=");
                "id" === c[0] && -1 !== c[1].indexOf("!") ? a[c[0]] = c[1].slice(0, -1) : a[c[0]] = c[1]
            }
            return a
        },
        o = function() {
            var e = {
                title: "",
                url: ""
            };
            window.history.replaceState(e, e.title, e.url)
        }
    },
    fd03: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return u
        })),
        n.d(t, "r", (function() {
            return d
        })),
        n.d(t, "u", (function() {
            return s
        })),
        n.d(t, "p", (function() {
            return f
        })),
        n.d(t, "f", (function() {
            return l
        })),
        n.d(t, "v", (function() {
            return h
        })),
        n.d(t, "t", (function() {
            return p
        })),
        n.d(t, "e", (function() {
            return k
        })),
        n.d(t, "q", (function() {
            return g
        })),
        n.d(t, "D", (function() {
            return v
        })),
        n.d(t, "E", (function() {
            return w
        })),
        n.d(t, "o", (function() {
            return j
        })),
        n.d(t, "n", (function() {
            return y
        })),
        n.d(t, "m", (function() {
            return O
        })),
        n.d(t, "j", (function() {
            return _
        })),
        n.d(t, "C", (function() {
            return S
        })),
        n.d(t, "d", (function() {
            return I
        })),
        n.d(t, "x", (function() {
            return P
        })),
        n.d(t, "w", (function() {
            return q
        })),
        n.d(t, "y", (function() {
            return x
        })),
        n.d(t, "A", (function() {
            return L
        })),
        n.d(t, "z", (function() {
            return A
        })),
        n.d(t, "a", (function() {
            return D
        })),
        n.d(t, "h", (function() {
            return E
        })),
        n.d(t, "i", (function() {
            return T
        })),
        n.d(t, "g", (function() {
            return B
        })),
        n.d(t, "b", (function() {
            return C
        })),
        n.d(t, "k", (function() {
            return R
        })),
        n.d(t, "B", (function() {
            return M
        })),
        n.d(t, "s", (function() {
            return N
        })),
        n.d(t, "l", (function() {
            return F
        }));
        n("d3b7"),
        n("25f0");
        var a = n("5530"),
        o = n("d354"),
        c = n("73ac"),
        r = (n("ac1f"), n("1276"), "uihoqwdndmdoioajdsladakdioajod@askjdwmkldmwkldadnaksmdmwd@mGdkmwmdmawda.molkamkxwkamdlka0akmjd@iow;amdDkjandnajdige@yrhsjadoajdja"),
        i = r.split("@")[1].split("w").reverse()[1].split("a")[1].split("")[1] + r.split("@").reverse()[2].split(".")[0].split("m").reverse()[3].split("").reverse()[2] + r.split("@").reverse()[1].split("j").reverse()[2].split(";")[0].split("")[1] + r.split("@").reverse()[2].split(".").reverse()[0].split("k").reverse()[1].split("")[1] + r.split("@")[3].split(";")[1].split("n").reverse()[2].split("d")[1].split("").reverse()[3],
        u = {
            uploadTokenUrl: "https://opapi.bookan.com.cn/qiniu/getUploadToken?bucket=videoactivity&filetype=answer4&activityid=" + localStorage.getItem("__actuniqid"),
            qiniup: "https://upload-z2.qiniup.com/",
            qiniupFix: "https://videoactivity.bookan.com.cn/",
            opapi: "https://opapi.bookan.com.cn",
            vccaptcha: "https://ucapi.bookan.com.cn/uc/vccaptcha?t=" + (new Date).getTime(),
            getPhoneCode: function(e, t, n) {
                return "https://ucapi.bookan.com.cn/uc/vcsend?type=2&phone=" + e + "&appid=bookan&uniqid=" + t + "&text=" + n
            }
        },
        d = function(e) {
            return Object(o["b"])("/answer4/activityInfo", e)
        },
        s = function(e) {
            return Object(o["b"])("/answer4/activityStyle", e)
        },
        f = function(e) {
            return Object(o["b"])("/answer4/startTheExam", Object(a["a"])({},
            e))
        },
        l = function(e) {
            return Object(o["c"])("/answer4/finishTheExam0526", Object(a["a"])({},
            e))
        },
        h = function(e) {
            return Object(o["b"])("/answer4/loginOrRegister", Object(a["a"])(Object(a["a"])({},
            e), F("answer4/loginOrRegister")))
        },
        p = function(e) {
            return Object(o["b"])("/answer4/rankUser", e)
        },
        b = function(e) {
            return Object(o["b"])("/answer4/rankDepart", e)
        },
        m = function(e) {
            return Object(o["b"])("/answer4/rankOrg", e)
        },
        k = function(e) {
            return Object(o["b"])("/answer4/redPacketSend", e)
        },
        g = function(e) {
            return Object(o["b"])("/answer4/examResultList", e)
        },
        v = function(e) {
            return Object(o["b"])("/answer4/userFavorite", e)
        },
        w = function(e) {
            return Object(o["b"])("/answer4/userFavoriteList", e)
        },
        j = function(e) {
            return Object(o["b"])("/answer4/learningList", e)
        },
        y = function(e) {
            return Object(o["b"])("/answer4/learningChapterList", e)
        },
        O = function(e) {
            return Object(o["b"])("/answer4/learningChapterContent", e)
        },
        _ = function(e) {
            return Object(o["b"])("/answer4/getOpenid", e)
        },
        S = function(e) {
            return Object(o["b"])("/answer4/setDepart", e)
        },
        I = function(e) {
            return Object(o["b"])("/common/getDepartListByFwbid", e)
        },
        P = function(e) {
            return Object(o["b"])("/answer4/lotteryActivityInfo", e)
        },
        q = function(e) {
            return Object(o["b"])("/answer4/lotteryAction", e)
        },
        x = function(e) {
            return Object(o["b"])("/answer4/lotteryRecentWinners", e)
        },
        L = function(e) {
            return Object(o["b"])("/answer4/lotteryRecordList", e)
        },
        A = function(e) {
            return Object(o["b"])("/answer4/lotteryRecordInfo", e)
        },
        D = function(e) {
            return Object(o["b"])("/answer4/autoLogin", e)
        },
        E = function(e) {
            return Object(o["b"])("/read3/getCombinedUserRank", e)
        },
        T = function(e) {
            return Object(o["b"])("/read3/getCombinedUserRankTerminal", e)
        },
        B = function(e) {
            return Object(o["b"])("/read3/getCombinedDepartRank", e)
        },
        C = function(e) {
            return Object(o["b"])("/answer4/autoLoginSubmit", Object(a["a"])(Object(a["a"])({},
            e), F("answer4/autoLoginSubmit")))
        },
        R = function(e) {
            return Object(o["b"])("/common/getProvincialArea", e)
        },
        M = function(e) {
            return Object(o["b"])("/answer4/lotteryRecordSaveAddress", e)
        },
        N = {
            user: p,
            group: p,
            depart: b,
            org: m
        },
        U = n("8d81"),
        F = function(e) {
            var t = (new Date).getTime();
            return {
                t: t,
                s: U(c["c"] + "@" + i + t + e).toString()
            }
        }
    },
    fdf8: function(e, t, n) {}
});