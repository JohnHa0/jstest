(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-answer-home"], {
    "00fda": function(t, e, n) {
        var i = n("8862");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("344e0690", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "021a": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("5bea"),
        a = n("91bd");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("78b2");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "6700895e", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "04d3": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("fb62"),
        a = n("f197");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("1678");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "a49398e0", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "054f": function(t, e, n) {
        "use strict";
        var i = n("0a27"),
        a = n.n(i);
        a.a
    },
    "0a27": function(t, e, n) {
        var i = n("13d3");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("5eec6164", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "0a5d": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("0b4d"),
        a = n("d8f6");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("2ab4");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "0e2ef40c", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "0b4d": function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return t.banners.length > 0 ? n("v-uni-view", {
                staticClass: "head-banners"
            },
            [t.banners.length > 1 ? [n("v-uni-swiper", {
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
            t._l(t.banners, (function(e, i) {
                return n("v-uni-swiper-item", {
                    key: i
                },
                [n("v-uni-image", {
                    attrs: {
                        mode: "aspectFit",
                        src: t.imageHost + e
                    }
                })], 1)
            })), 1)] : [t.banners[0] ? n("v-uni-image", {
                attrs: {
                    src: t._f("imgPreFix")(t.banners[0]),
                    mode: "widthFix"
                }
            }) : t._e()]], 2) : t._e()
        },
        r = []
    },
    "0c1f": function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "home",
                class: {
                    "home-h5": t.isInIosH5
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.getChanceCardDetailV2.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-view", {
                staticClass: "small-card",
                staticStyle: {
                    "font-size": "22rpx"
                }
            },
            [n("img", {
                staticClass: "small-card-img",
                attrs: {
                    src: t._f("imgPreFix")(t.cardUrl),
                    mode: "aspectFit",
                    alt: ""
                }
            }), n("v-uni-view", {
                staticClass: "cardCount"
            },
            [t._v(t._s(t._f("countSet")(t.count)))])], 1)], 1)], 1)
        },
        r = []
    },
    "0edc": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            basePopupCenter: n("c185").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", [n("base-popup-center", {
                attrs: {
                    contentStyle: t.contentStyle
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-view", {
                staticClass: "myChanceCard",
                class: {
                    "myChanceCard-h5": t.isInIosH5
                }
            },
            [n("v-uni-view", {
                staticClass: "title"
            },
            [t._v("更多机会")]), 1 == t.shareType ? n("div", {
                staticClass: "card-ico"
            },
            [n("v-uni-view", {
                staticClass: "card-ico-text"
            },
            [t._v("剩余分享次数："), n("v-uni-text", {
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.count))])], 1)], 1) : t._e(), n("v-uni-view", {
                staticClass: "contain"
            },
            [1 == t.shareType ? [n("v-uni-view", {
                staticClass: "contain-text"
            },
            [t._v("每分享1次活动给好友，可额外获得" + t._s(t.shareCount) + "次参与机会")]), n("v-uni-view", {
                staticClass: "contain-text"
            },
            [1 == t.chanceType ? [t._v("最多可分享" + t._s(t.chanceCount) + "次")] : t._e(), 2 == t.chanceType ? [t._v("每天最多可分享" + t._s(t.chanceCount) + "次")] : t._e()], 2)] : t._e(), 2 == t.shareType ? [n("v-uni-view", {
                staticClass: "contain-text"
            },
            [t._v(t._s(t.tips))])] : t._e()], 2), n("v-uni-view", {
                staticClass: "chance-btn",
                style: {
                    color: t.themeColor,
                    border: "1rpx solid " + t.themeColor
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.fetchChanceCard.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.btnText))])], 1)], 1), t.isShowUrl ? n("v-uni-web-view", {
                attrs: {
                    src: t.url
                }
            }) : t._e()], 1)
        },
        r = []
    },
    "0fdf": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("3f74"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    "13d3": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, ".base-barrage-switch[data-v-89c71986]{position:fixed;top:%?170?%;left:%?15?%;width:%?66?%;height:%?66?%;opacity:.55;background:#2c2c2c;border-radius:50%;color:#fff;z-index:33;-webkit-text-size-adjust:100%;text-size-adjust:100%;background-size:cover}.base-barrage-switch img[data-v-89c71986]{width:100%;height:100%}", ""]),
        t.exports = e
    },
    1406 : function(t, e, n) {
        "use strict";
        var i = n("4ea4"),
        a = (i(n("bee5")), i(n("60a2")), n("0c6d")),
        r = a.request,
        o = n("ca00"),
        c = function(t) {
            return r("m/Activity/Get", t)
        },
        s = function(t) {
            return r("pluginAnswer/answerView/UpdateAnswerCount", t)
        },
        u = function(t) {
            return r("pluginAnswer/answerView/SaveAnswer", t, "post")
        },
        l = function(t) {
            return r("pluginAnswer/ActivityViewCommon/MyAnswerRecordDetail", t)
        },
        f = function(t) {
            return t = o.appendAbProp(t),
            r("pluginAnswer/answerView/GetTops", t)
        },
        d = function(t) {
            return r("pluginAnswer/answerView/GetAnswerList", t, "GET", !0)
        },
        p = function(t) {
            return r("pluginAnswer/AnswerView/GetQuestionRecord", t)
        },
        h = function(t) {
            return r("pluginAnswer/AnswerView/GetAllAnswerList", t)
        },
        v = function(t) {
            return r("pluginAnswer/answerView/SaveMemberInfo", t)
        },
        g = function(t) {
            return r("pluginAnswer/answerView/SavePoster", t, "POST")
        },
        y = function(t) {
            return t = o.appendAbProp(t),
            r("pluginAnswer/answerView/GetGroupTops", t)
        },
        m = function(t) {
            return r("pluginAnswer/answerView/UpdateAnswerCount", t)
        };
        t.exports = {
            getActive: c,
            updateAnswerCount: s,
            saveAnswer: u,
            getRecordDetail: l,
            getTops: f,
            getList: d,
            getRecordList: p,
            getAllList: h,
            saveMemberInfo: v,
            savePoster: g,
            GetGroupTops: y,
            StartAnswer: m
        }
    },
    1549 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("4486"),
        a = n("e370");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("b125");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "3489a7b2", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    1588 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("8ff9"),
        a = n("0fdf");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("b160");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "26b07d1c", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    1678 : function(t, e, n) {
        "use strict";
        var i = n("30db"),
        a = n.n(i);
        a.a
    },
    "16ca": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.myChanceCard[data-v-aff457fe]{width:100%;height:100%;background:#fff;border-radius:%?16?%;padding:%?60?% %?55?% %?80?%;font-size:%?28?%;font-weight:500\r\n  /* margin-bottom: -40rpx; */}.title[data-v-aff457fe]{\r\n  /* text-align: center;\r\n        font-size: 42rpx;\r\n        color: #fff;\r\n        font-weight: 600; */font-size:%?34?%;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;text-align:center;color:#2c2c2c;line-height:%?48?%;margin-bottom:%?50?%}.myChanceCard .btn-record[data-v-aff457fe]{text-align:right;margin-top:%?-40?%;font-size:%?28?%;font-weight:400;color:#0080ff;margin-right:%?-20?%}.myChanceCard .ict[data-v-aff457fe]{margin-left:%?10?%;font-size:%?12?%;vertical-align:middle}.contain[data-v-aff457fe]{position:relative;width:100%;height:%?340?%;\r\n  /* margin-top: 75rpx; */padding:%?37?% %?51?% %?37?% %?68?%;font-size:%?24?%;background:#f5f5f5;border-radius:%?6?%;height:%?204?%;margin-bottom:%?50?%}.card-ico[data-v-aff457fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?30?%}.card-ico-img[data-v-aff457fe]{width:%?98?%;height:%?130?%;font-weight:500}.card-ico-text[data-v-aff457fe]{color:#666;font-size:%?26?%;margin-left:%?30?%}\r\n/* .contain-img {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n  \r\n        width: 100%;\r\n        height: 100%;\r\n        background-repeat: no-repeat;\r\n        background-size: 100% auto;\r\n    } */\r\n/* .contain .contain-card {\r\n        position: absolute;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        width: 150rpx;\r\n        height: 132rpx;\r\n        top: -73rpx;\r\n    } */\r\n/* .chance-count {\r\n        text-align: center;\r\n        font-size: 30rpx;\r\n        font-weight: 600;\r\n        color: #ff5001;\r\n    } */.contain .contain-text[data-v-aff457fe]{position:relative;color:#2c2c2c;opacity:.6;padding-left:%?20?%;margin-bottom:%?30?%}.contain .contain-text[data-v-aff457fe]:before{content:"";position:absolute;top:7px;left:0;border:%?4?% solid;border-color:#878789;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.chance-btn[data-v-aff457fe]{\r\n  /* height: 76rpx;\r\n        line-height: 73rpx;\r\n        text-align: center;\r\n        border-radius: 15rpx;\r\n        margin-top: 29rpx;\r\n        background: #febc11;\r\n        font-size: 32rpx;\r\n        color: #fff; */width:%?380?%;height:%?80?%;border:%?1?% solid #0080ff;border-radius:%?41?%;line-height:%?80?%;margin:auto;color:#0080ff;text-align:center\r\n  /* margin-top: 50rpx; */}\r\n/* \r\n    .dotted-line {\r\n        position: absolute;\r\n        top: 60px;\r\n        left: 18px;\r\n        width: 85%;\r\n        border-top: 2rpx dashed #d6d7d9;\r\n    } */.chance-btn1[data-v-aff457fe]{width:%?380?%;height:%?80?%;border:%?1?% solid #0080ff;background:#0080ff;border-radius:%?41?%;line-height:%?80?%;margin:auto;color:#fff;margin-bottom:%?25?%;text-align:center\r\n  /* margin-top: 50rpx; */}.myChanceCard.myChanceCard-h5[data-v-aff457fe]{font-size:%?48?%}.myChanceCard.myChanceCard-h5 .title[data-v-aff457fe]{font-size:%?60?%}.myChanceCard.myChanceCard-h5 .btn-record[data-v-aff457fe]{font-size:%?48?%}.myChanceCard.myChanceCard-h5 .ict[data-v-aff457fe]{font-size:%?20?%}.myChanceCard.myChanceCard-h5 .contain[data-v-aff457fe]{font-size:%?42?%}.myChanceCard.myChanceCard-h5 .card-ico-text[data-v-aff457fe]{font-size:%?62?%}', ""]),
        t.exports = e
    },
    "1b8c": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pc-answer-home[data-v-246eaba2]{background:#fff;padding-bottom:40px;box-shadow:0 2px 8px 0 rgba(0,0,0,.1);height:100%;border-radius:4px}.pc-answer-home .list-item-1[data-v-246eaba2]{padding:0 15px}.pc-answer-home .list-item-1 .time[data-v-246eaba2]{font-size:%?24?%;color:#999}.pc-answer-home .inner[data-v-246eaba2]{margin-top:50px}.pc-answer-home .inner .join-data[data-v-246eaba2]{text-align:center;color:#0064ff;font-size:%?26?%;margin-bottom:20px}.pc-answer-home .inner .btn-start[data-v-246eaba2]{width:250px;height:50px;line-height:50px;background:#0064ff;border-radius:25px;margin:10px auto 15px auto;color:#fff;text-align:center;font-size:16px}.pc-answer-home .inner .btn-group[data-v-246eaba2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:300px;margin:20px auto}.pc-answer-home .inner .btn-group .iconfont[data-v-246eaba2]{font-size:14px;margin-right:4px}.pc-answer-home .inner .btn-box[data-v-246eaba2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:20px auto;width:300px}.pc-answer-home .inner .btn-box .btn-start-1[data-v-246eaba2]{width:160px;height:50px;line-height:50px;background:#0064ff;border-radius:25px;color:#fff;text-align:center;font-size:16px}.pc-answer-home .inner .btn-box .btn-start-2[data-v-246eaba2]{margin-left:20px}.pc-answer-home .inner .btn-start-3[data-v-246eaba2]{width:250px;height:50px;line-height:50px;background:#0064ff;border-radius:25px;color:#fff;text-align:center;font-size:16px;margin:0 auto}', ""]),
        t.exports = e
    },
    "1c3e": function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = (i(n("c5e2")), {
            name: "ActivityPcBanner",
            props: {
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
                activityName: {
                    type: String,
                default:
                    function() {
                        return ""
                    }
                }
            },
            data: function() {
                return {
                    imageHost: a.
                default.conf.imageHost,
                    banner: ""
                }
            },
            mounted: function() {
                this.banner = this.activityInfo.pcBanner || ""
            },
            methods: {}
        });
        e.
    default = r
    },
    "1ce1": function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a = i(n("e143")),
            r = i(n("ca00")),
            o = i(n("2f88")),
            c = (i(n("e150")), i(n("3aa0")), {
                props: {
                    activityInfo: {
                        type: Object,
                    default:
                        function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        list: [{
                            content: "评论111"
                        },
                        {
                            content: "评论222"
                        },
                        {
                            content: "评论333333333"
                        }],
                        redImg: r.
                    default.getImageUrl("/mini/icon/miniprog/icon_danmu_redpack.png"),
                        isH5Activity: !1,
                        isShowRow: !1,
                        isOpenDanma: !1,
                        danmaPostion: "",
                        danmuData: "",
                        danmuList: [],
                        counts: 1,
                        limit: 6,
                        width1: !0,
                        width2: !1,
                        width3: !1,
                        column1: !1,
                        column2: !1,
                        column3: !1,
                        column4: !1,
                        column5: !1
                    }
                },
                onLoad: function() {},
                created: function() {
                    this.getDanmu(),
                    this.isH5Activity = r.
                default.chekIsH5Activity(),
                    t.log(this.isH5Activity, r.
                default.chekIsH5Activity(), 11112223),
                    uni.$on("refDanmu", (function() {
                        location.reload()
                    }))
                },
                watch: {
                    activityInfo: function(t) {}
                },
                mounted: function() {},
                methods: {
                    getDanmu: function() {
                        var t = this;
                        this.danmaPostion = this.activityInfo.danmaPostion,
                        "hz" == this.danmaPostion ? this.isShowRow = !0 : "vt" == this.danmaPostion && (this.isShowRow = !1),
                        "1" == this.activityInfo.isOpenDanma ? this.isOpenDanma = !0 : this.isOpenDanma = !1;
                        var e = this.activityInfo.activityGuid,
                        n = this.activityInfo.wsiteGuid;
                        if (this.isOpenDanma) {
                            var i = {
                                wsiteGuid: n,
                                activityGuid: e,
                                page: 1,
                                limit: 50
                            };
                            o.
                        default.getCommentList(i).then((function(e) {
                                for (var n = e.data,
                                i = 0; i < n.length; i++) 4 == n[i].rollType && "2" == n[i].prizeType && (n[i]["redPacket"] = t.redImg);
                                t.danmuData = n,
                                t.danmuDataLen()
                            }))
                        }
                    },
                    danmuDataLen: function() {
                        var e = this;
                        this.danmuData.length;
                        if (!this.isH5Activity) {
                            var n = r.
                        default.getCurrentRoute(),
                            i = n.path;
                            if (r.
                        default.filterDanmuPage(i)) return;
                            var o = a.
                        default.conf.h5Lib,
                            c = r.
                        default.getVersion();
                            loaderUtil.loadCss(o + "rrxiu/h5edit/css/danmuHd.css" + "?v=".concat(c)),
                            loaderUtil.loadJs("https://assets.rrxh5.cc/lib/jquery.min.js", (function() {
                                t.log(e.refDanmuJs, "asasas"),
                                window.DanmauIsInH5 = !1,
                                window.redImg = e.redImg;
                                var n = o + "rrxiu/h5edit/js/DanmakuHd.js" + "?v=".concat(c);
                                loaderUtil.loadJs(n, (function() {
                                    var t = e.danmuData;
                                    window.DanmakuHd && (window.DanmakuHd.init({
                                        style: e.danmaPostion,
                                        isInH5: !1,
                                        danmuParentBoxSelector: "#basePageId"
                                    }), window.DanmakuHd.setDanmuData(t), window.DanmakuHd.setDanmuLikeData([]), window.DanmakuHd.start())
                                }))
                            }))
                        }
                    }
                }
            });
            e.
        default = c
        }).call(this, n("5a52")["default"])
    },
    2163 : function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = i(n("60a2")),
        o = i(n("97b6")),
        c = i(n("ca00")),
        s = {
            name: "activityChanceCard",
            props: {
                activityGuid: {
                    type: [Number, String],
                default:
                    0
                },
                chanceCardUpdate: {
                    type: Number,
                default:
                    0
                }
            },
            data: function() {
                return {
                    cardUrl: "mini/plugin/chance_card/icon_card.png",
                    count: 0,
                    isInIosH5: c.
                default.checkIosFontScaleInH5()
                }
            },
            filters: {
                countSet: function(t) {
                    return t > 9 ? "9+": t
                }
            },
            watch: {
                chanceCardUpdate: function() {
                    this.getChanceCardCount()
                }
            },
            components: {},
            mounted: function() {
                this.getChanceCardCount()
            },
            methods: {
                getChanceCardCount: function() {
                    var t = this;
                    if (!a.
                default.$isEdit && 0 != this.activityGuid) {
                        var e = {
                            activityGuid: this.activityGuid
                        };
                        o.
                    default.getChanceCardTotal(e).then((function(e) {
                            0 == e.result ? t.count = e.data.count: c.
                        default.showToast(e.msg, "none")
                        }))
                    }
                },
                getChanceCardDetailV2: function() {
                    r.
                default.showChanceCardInfoDialog(this.activityGuid, null, !1)
                }
            }
        };
        e.
    default = s
    },
    2361 : function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pcview-qrcode[data-v-56a6b5bf]{position:fixed;top:40px;left:0;width:36px;height:36px;background:#fff;border-radius:4px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);padding:7px}.pcview-qrcode .img[data-v-56a6b5bf]{width:22px;height:22px}.pcview-qrcode .img .iconfenxiang[data-v-56a6b5bf]{font-size:22px;color:#888}.pcview-qrcode .qrcode[data-v-56a6b5bf]{position:absolute;width:110px;height:110px;background:#fff;left:50px;top:0;display:none;border-radius:4px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);padding:8px}.pcview-qrcode .qrcode uni-image[data-v-56a6b5bf]{width:94px;height:94px}.pcview-qrcode .pc-audio[data-v-56a6b5bf]{position:absolute;top:41px;left:0;border-radius:4px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);background:#fff;width:36px;height:36px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pcview-qrcode:hover .qrcode[data-v-56a6b5bf]{display:block}', ""]),
        t.exports = e
    },
    2549 : function(t, e, n) {
        "use strict";
        var i = n("b47d"),
        a = n.n(i);
        a.a
    },
    "25b4": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.answer-tops[data-v-3489a7b2]{padding-bottom:%?130?%}.answer-tops .tabs[data-v-3489a7b2]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;border-bottom:%?2?% solid #ececec;margin-top:%?20?%}.answer-tops .tabs .item[data-v-3489a7b2]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?20?% 0;text-align:center;color:#353535;height:%?96?%}.answer-tops .tabs .item .border[data-v-3489a7b2]{display:none;position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:%?6?%;background:#00f;width:%?160?%}.answer-tops .tabs .item.active .border[data-v-3489a7b2]{display:block}.answer-tops .top-list .level-list[data-v-3489a7b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?28?%;margin-top:%?30?%}.answer-tops .top-list .level-list .level-item[data-v-3489a7b2]{background:#f3f3f3;border-radius:%?34?%;padding:%?12?% %?34?%;margin-right:%?20?%;margin-bottom:%?30?%;color:#2c2c2c}.answer-tops .top-list .level-list .level-item[data-v-3489a7b2]:nth-child(4n){margin-right:0}.prize[data-v-3489a7b2]{display:inline-block;background:#f4f4f4;padding:0 %?20?% 0 %?10?%;font-size:%?20?%;color:#2c2c2c;opacity:.5}.answer-tops-pc .item[data-v-3489a7b2]{border-bottom:none!important}.answer-tops-pc .item .info .time[data-v-3489a7b2]{font-size:11px}.answer-tops-pc .item .info .prize[data-v-3489a7b2]{font-size:10px;margin-top:5px}.answer-tops .top-list[data-v-3489a7b2]{top:%?340?%;left:0;right:0;bottom:0;padding:0 %?30?% 0 %?30?%;background:#fff;overflow:auto;z-index:9}.answer-tops .top-list .item[data-v-3489a7b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?% 0;border-bottom:%?2?% solid #f6f6f6}.answer-tops .top-list .item .icon[data-v-3489a7b2]{width:%?36?%;height:%?40?%;margin-right:%?30?%}.answer-tops .top-list .item .num[data-v-3489a7b2]{width:%?36?%;height:%?40?%;text-align:center;margin-right:%?30?%}.answer-tops .top-list .item .photo[data-v-3489a7b2]{width:%?100?%;height:%?100?%;border-radius:50%;margin-right:%?20?%}.answer-tops .top-list .item .info[data-v-3489a7b2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?10?%}.answer-tops .top-list .item .name[data-v-3489a7b2]{font-size:%?28?%}.answer-tops .top-list .item .time[data-v-3489a7b2]{color:#999;margin-top:%?10?%;font-size:%?22?%}.answer-tops .top-list .item .score[data-v-3489a7b2]{font-weight:700}.answer-tops .top-list .item-1[data-v-3489a7b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?% 0;border-bottom:%?2?% solid #f6f6f6}.answer-tops .top-list .item-1 .icon[data-v-3489a7b2]{width:%?36?%;height:%?40?%;margin-right:%?30?%}.answer-tops .top-list .item-1 .num[data-v-3489a7b2]{width:%?36?%;height:%?40?%;text-align:center;margin-right:%?30?%}.answer-tops .top-list .item-1 .photo[data-v-3489a7b2]{width:%?100?%;height:%?100?%;border-radius:50%;margin-right:%?20?%}.answer-tops .top-list .item-1 .info[data-v-3489a7b2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?10?%}.answer-tops .top-list .item-1 .name[data-v-3489a7b2]{font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.answer-tops .top-list .item-1 .name .real-name[data-v-3489a7b2]{font-size:%?24?%;color:#999}.answer-tops .top-list .item-1 .time[data-v-3489a7b2]{color:#999;margin-top:%?10?%;font-size:%?22?%}.answer-tops .top-list .item-1 .score[data-v-3489a7b2]{font-weight:700}.answer-tops .top-list .item-1 .award-item[data-v-3489a7b2]{font-size:%?22?%;color:#999;overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.answer-tops .top-list .item-2[data-v-3489a7b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?% 0;border-bottom:%?2?% solid #f6f6f6}.answer-tops .top-list .item-2 .icon[data-v-3489a7b2]{width:%?36?%;height:%?40?%;margin-right:%?30?%}.answer-tops .top-list .item-2 .num[data-v-3489a7b2]{width:%?36?%;height:%?40?%;text-align:center;margin-right:%?30?%}.answer-tops .top-list .item-2 .info[data-v-3489a7b2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?10?%}.answer-tops .top-list .item-2 .name[data-v-3489a7b2]{font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.answer-tops .top-list .item-2 .name .real-name[data-v-3489a7b2]{font-size:%?24?%;color:#999}.answer-tops .top-list .item-2 .time[data-v-3489a7b2]{color:#999;margin-top:%?10?%;font-size:%?22?%}.answer-tops .top-list .item-2 .score[data-v-3489a7b2]{font-weight:700}.answer-tops .top-list .item-2 .award-item[data-v-3489a7b2]{font-size:%?22?%;color:#999;overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.answer-tops .top-list .iconnan[data-v-3489a7b2]{color:#287ef1}.answer-tops .top-list .iconnv[data-v-3489a7b2]{color:#ec7979}', ""]),
        t.exports = e
    },
    "2ab4": function(t, e, n) {
        "use strict";
        var i = n("600c"),
        a = n.n(i);
        a.a
    },
    "2ef0": function(t, e, n) { (function(t, i) {
            var a;
            /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
            (function() {
                var r, o = "4.17.15",
                c = 200,
                s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                u = "Expected a function",
                l = "__lodash_hash_undefined__",
                f = 500,
                d = "__lodash_placeholder__",
                p = 1,
                h = 2,
                v = 4,
                g = 1,
                y = 2,
                m = 1,
                b = 2,
                w = 4,
                _ = 8,
                x = 16,
                I = 32,
                k = 64,
                C = 128,
                S = 256,
                T = 512,
                z = 30,
                P = "...",
                A = 800,
                E = 16,
                D = 1,
                L = 2,
                R = 3,
                O = 1 / 0,
                j = 9007199254740991,
                B = 17976931348623157e292,
                G = NaN,
                $ = 4294967295,
                M = $ - 1,
                F = $ >>> 1,
                H = [["ary", C], ["bind", m], ["bindKey", b], ["curry", _], ["curryRight", x], ["flip", T], ["partial", I], ["partialRight", k], ["rearg", S]],
                U = "[object Arguments]",
                N = "[object Array]",
                W = "[object AsyncFunction]",
                q = "[object Boolean]",
                J = "[object Date]",
                V = "[object DOMException]",
                Z = "[object Error]",
                Y = "[object Function]",
                Q = "[object GeneratorFunction]",
                X = "[object Map]",
                K = "[object Number]",
                tt = "[object Null]",
                et = "[object Object]",
                nt = "[object Promise]",
                it = "[object Proxy]",
                at = "[object RegExp]",
                rt = "[object Set]",
                ot = "[object String]",
                ct = "[object Symbol]",
                st = "[object Undefined]",
                ut = "[object WeakMap]",
                lt = "[object WeakSet]",
                ft = "[object ArrayBuffer]",
                dt = "[object DataView]",
                pt = "[object Float32Array]",
                ht = "[object Float64Array]",
                vt = "[object Int8Array]",
                gt = "[object Int16Array]",
                yt = "[object Int32Array]",
                mt = "[object Uint8Array]",
                bt = "[object Uint8ClampedArray]",
                wt = "[object Uint16Array]",
                _t = "[object Uint32Array]",
                xt = /\b__p \+= '';/g,
                It = /\b(__p \+=) '' \+/g,
                kt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Ct = /&(?:amp|lt|gt|quot|#39);/g,
                St = /[&<>"']/g,
                Tt = RegExp(Ct.source),
                zt = RegExp(St.source),
                Pt = /<%-([\s\S]+?)%>/g,
                At = /<%([\s\S]+?)%>/g,
                Et = /<%=([\s\S]+?)%>/g,
                Dt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Lt = /^\w*$/,
                Rt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Ot = /[\\^$.*+?()[\]{}|]/g,
                jt = RegExp(Ot.source),
                Bt = /^\s+|\s+$/g,
                Gt = /^\s+/,
                $t = /\s+$/,
                Mt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Ft = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Ht = /,? & /,
                Ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Nt = /\\(\\)?/g,
                Wt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                qt = /\w*$/,
                Jt = /^[-+]0x[0-9a-f]+$/i,
                Vt = /^0b[01]+$/i,
                Zt = /^\[object .+?Constructor\]$/,
                Yt = /^0o[0-7]+$/i,
                Qt = /^(?:0|[1-9]\d*)$/,
                Xt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Kt = /($^)/,
                te = /['\n\r\u2028\u2029\\]/g,
                ee = "\\ud800-\\udfff",
                ne = "\\u0300-\\u036f",
                ie = "\\ufe20-\\ufe2f",
                ae = "\\u20d0-\\u20ff",
                re = ne + ie + ae,
                oe = "\\u2700-\\u27bf",
                ce = "a-z\\xdf-\\xf6\\xf8-\\xff",
                se = "\\xac\\xb1\\xd7\\xf7",
                ue = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                le = "\\u2000-\\u206f",
                fe = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                de = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                pe = "\\ufe0e\\ufe0f",
                he = se + ue + le + fe,
                ve = "['’]",
                ge = "[" + ee + "]",
                ye = "[" + he + "]",
                me = "[" + re + "]",
                be = "\\d+",
                we = "[" + oe + "]",
                _e = "[" + ce + "]",
                xe = "[^" + ee + he + be + oe + ce + de + "]",
                Ie = "\\ud83c[\\udffb-\\udfff]",
                ke = "(?:" + me + "|" + Ie + ")",
                Ce = "[^" + ee + "]",
                Se = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                Te = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                ze = "[" + de + "]",
                Pe = "\\u200d",
                Ae = "(?:" + _e + "|" + xe + ")",
                Ee = "(?:" + ze + "|" + xe + ")",
                De = "(?:" + ve + "(?:d|ll|m|re|s|t|ve))?",
                Le = "(?:" + ve + "(?:D|LL|M|RE|S|T|VE))?",
                Re = ke + "?",
                Oe = "[" + pe + "]?",
                je = "(?:" + Pe + "(?:" + [Ce, Se, Te].join("|") + ")" + Oe + Re + ")*",
                Be = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Ge = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                $e = Oe + Re + je,
                Me = "(?:" + [we, Se, Te].join("|") + ")" + $e,
                Fe = "(?:" + [Ce + me + "?", me, Se, Te, ge].join("|") + ")",
                He = RegExp(ve, "g"),
                Ue = RegExp(me, "g"),
                Ne = RegExp(Ie + "(?=" + Ie + ")|" + Fe + $e, "g"),
                We = RegExp([ze + "?" + _e + "+" + De + "(?=" + [ye, ze, "$"].join("|") + ")", Ee + "+" + Le + "(?=" + [ye, ze + Ae, "$"].join("|") + ")", ze + "?" + Ae + "+" + De, ze + "+" + Le, Ge, Be, be, Me].join("|"), "g"),
                qe = RegExp("[" + Pe + ee + re + pe + "]"),
                Je = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Ve = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Ze = -1,
                Ye = {};
                Ye[pt] = Ye[ht] = Ye[vt] = Ye[gt] = Ye[yt] = Ye[mt] = Ye[bt] = Ye[wt] = Ye[_t] = !0,
                Ye[U] = Ye[N] = Ye[ft] = Ye[q] = Ye[dt] = Ye[J] = Ye[Z] = Ye[Y] = Ye[X] = Ye[K] = Ye[et] = Ye[at] = Ye[rt] = Ye[ot] = Ye[ut] = !1;
                var Qe = {};
                Qe[U] = Qe[N] = Qe[ft] = Qe[dt] = Qe[q] = Qe[J] = Qe[pt] = Qe[ht] = Qe[vt] = Qe[gt] = Qe[yt] = Qe[X] = Qe[K] = Qe[et] = Qe[at] = Qe[rt] = Qe[ot] = Qe[ct] = Qe[mt] = Qe[bt] = Qe[wt] = Qe[_t] = !0,
                Qe[Z] = Qe[Y] = Qe[ut] = !1;
                var Xe = {
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
                Ke = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                tn = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                en = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                nn = parseFloat,
                an = parseInt,
                rn = "object" == typeof t && t && t.Object === Object && t,
                on = "object" == typeof self && self && self.Object === Object && self,
                cn = rn || on || Function("return this")(),
                sn = e && !e.nodeType && e,
                un = sn && "object" == typeof i && i && !i.nodeType && i,
                ln = un && un.exports === sn,
                fn = ln && rn.process,
                dn = function() {
                    try {
                        var t = un && un.require && un.require("util").types;
                        return t || fn && fn.binding && fn.binding("util")
                    } catch(e) {}
                } (),
                pn = dn && dn.isArrayBuffer,
                hn = dn && dn.isDate,
                vn = dn && dn.isMap,
                gn = dn && dn.isRegExp,
                yn = dn && dn.isSet,
                mn = dn && dn.isTypedArray;
                function bn(t, e, n) {
                    switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
                function wn(t, e, n, i) {
                    var a = -1,
                    r = null == t ? 0 : t.length;
                    while (++a < r) {
                        var o = t[a];
                        e(i, o, n(o), t)
                    }
                    return i
                }
                function _n(t, e) {
                    var n = -1,
                    i = null == t ? 0 : t.length;
                    while (++n < i) if (!1 === e(t[n], n, t)) break;
                    return t
                }
                function xn(t, e) {
                    var n = null == t ? 0 : t.length;
                    while (n--) if (!1 === e(t[n], n, t)) break;
                    return t
                }
                function In(t, e) {
                    var n = -1,
                    i = null == t ? 0 : t.length;
                    while (++n < i) if (!e(t[n], n, t)) return ! 1;
                    return ! 0
                }
                function kn(t, e) {
                    var n = -1,
                    i = null == t ? 0 : t.length,
                    a = 0,
                    r = [];
                    while (++n < i) {
                        var o = t[n];
                        e(o, n, t) && (r[a++] = o)
                    }
                    return r
                }
                function Cn(t, e) {
                    var n = null == t ? 0 : t.length;
                    return !! n && Bn(t, e, 0) > -1
                }
                function Sn(t, e, n) {
                    var i = -1,
                    a = null == t ? 0 : t.length;
                    while (++i < a) if (n(e, t[i])) return ! 0;
                    return ! 1
                }
                function Tn(t, e) {
                    var n = -1,
                    i = null == t ? 0 : t.length,
                    a = Array(i);
                    while (++n < i) a[n] = e(t[n], n, t);
                    return a
                }
                function zn(t, e) {
                    var n = -1,
                    i = e.length,
                    a = t.length;
                    while (++n < i) t[a + n] = e[n];
                    return t
                }
                function Pn(t, e, n, i) {
                    var a = -1,
                    r = null == t ? 0 : t.length;
                    i && r && (n = t[++a]);
                    while (++a < r) n = e(n, t[a], a, t);
                    return n
                }
                function An(t, e, n, i) {
                    var a = null == t ? 0 : t.length;
                    i && a && (n = t[--a]);
                    while (a--) n = e(n, t[a], a, t);
                    return n
                }
                function En(t, e) {
                    var n = -1,
                    i = null == t ? 0 : t.length;
                    while (++n < i) if (e(t[n], n, t)) return ! 0;
                    return ! 1
                }
                var Dn = Fn("length");
                function Ln(t) {
                    return t.split("")
                }
                function Rn(t) {
                    return t.match(Ut) || []
                }
                function On(t, e, n) {
                    var i;
                    return n(t, (function(t, n, a) {
                        if (e(t, n, a)) return i = n,
                        !1
                    })),
                    i
                }
                function jn(t, e, n, i) {
                    var a = t.length,
                    r = n + (i ? 1 : -1);
                    while (i ? r--:++r < a) if (e(t[r], r, t)) return r;
                    return - 1
                }
                function Bn(t, e, n) {
                    return e === e ? di(t, e, n) : jn(t, $n, n)
                }
                function Gn(t, e, n, i) {
                    var a = n - 1,
                    r = t.length;
                    while (++a < r) if (i(t[a], e)) return a;
                    return - 1
                }
                function $n(t) {
                    return t !== t
                }
                function Mn(t, e) {
                    var n = null == t ? 0 : t.length;
                    return n ? Wn(t, e) / n: G
                }
                function Fn(t) {
                    return function(e) {
                        return null == e ? r: e[t]
                    }
                }
                function Hn(t) {
                    return function(e) {
                        return null == t ? r: t[e]
                    }
                }
                function Un(t, e, n, i, a) {
                    return a(t, (function(t, a, r) {
                        n = i ? (i = !1, t) : e(n, t, a, r)
                    })),
                    n
                }
                function Nn(t, e) {
                    var n = t.length;
                    t.sort(e);
                    while (n--) t[n] = t[n].value;
                    return t
                }
                function Wn(t, e) {
                    var n, i = -1,
                    a = t.length;
                    while (++i < a) {
                        var o = e(t[i]);
                        o !== r && (n = n === r ? o: n + o)
                    }
                    return n
                }
                function qn(t, e) {
                    var n = -1,
                    i = Array(t);
                    while (++n < t) i[n] = e(n);
                    return i
                }
                function Jn(t, e) {
                    return Tn(e, (function(e) {
                        return [e, t[e]]
                    }))
                }
                function Vn(t) {
                    return function(e) {
                        return t(e)
                    }
                }
                function Zn(t, e) {
                    return Tn(e, (function(e) {
                        return t[e]
                    }))
                }
                function Yn(t, e) {
                    return t.has(e)
                }
                function Qn(t, e) {
                    var n = -1,
                    i = t.length;
                    while (++n < i && Bn(e, t[n], 0) > -1);
                    return n
                }
                function Xn(t, e) {
                    var n = t.length;
                    while (n--&&Bn(e, t[n], 0) > -1);
                    return n
                }
                function Kn(t, e) {
                    var n = t.length,
                    i = 0;
                    while (n--) t[n] === e && ++i;
                    return i
                }
                var ti = Hn(Xe),
                ei = Hn(Ke);
                function ni(t) {
                    return "\\" + en[t]
                }
                function ii(t, e) {
                    return null == t ? r: t[e]
                }
                function ai(t) {
                    return qe.test(t)
                }
                function ri(t) {
                    return Je.test(t)
                }
                function oi(t) {
                    var e, n = [];
                    while (! (e = t.next()).done) n.push(e.value);
                    return n
                }
                function ci(t) {
                    var e = -1,
                    n = Array(t.size);
                    return t.forEach((function(t, i) {
                        n[++e] = [i, t]
                    })),
                    n
                }
                function si(t, e) {
                    return function(n) {
                        return t(e(n))
                    }
                }
                function ui(t, e) {
                    var n = -1,
                    i = t.length,
                    a = 0,
                    r = [];
                    while (++n < i) {
                        var o = t[n];
                        o !== e && o !== d || (t[n] = d, r[a++] = n)
                    }
                    return r
                }
                function li(t) {
                    var e = -1,
                    n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = t
                    })),
                    n
                }
                function fi(t) {
                    var e = -1,
                    n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = [t, t]
                    })),
                    n
                }
                function di(t, e, n) {
                    var i = n - 1,
                    a = t.length;
                    while (++i < a) if (t[i] === e) return i;
                    return - 1
                }
                function pi(t, e, n) {
                    var i = n + 1;
                    while (i--) if (t[i] === e) return i;
                    return i
                }
                function hi(t) {
                    return ai(t) ? yi(t) : Dn(t)
                }
                function vi(t) {
                    return ai(t) ? mi(t) : Ln(t)
                }
                var gi = Hn(tn);
                function yi(t) {
                    var e = Ne.lastIndex = 0;
                    while (Ne.test(t))++e;
                    return e
                }
                function mi(t) {
                    return t.match(Ne) || []
                }
                function bi(t) {
                    return t.match(We) || []
                }
                var wi = function t(e) {
                    e = null == e ? cn: _i.defaults(cn.Object(), e, _i.pick(cn, Ve));
                    var n = e.Array,
                    i = e.Date,
                    a = e.Error,
                    Ut = e.Function,
                    ee = e.Math,
                    ne = e.Object,
                    ie = e.RegExp,
                    ae = e.String,
                    re = e.TypeError,
                    oe = n.prototype,
                    ce = Ut.prototype,
                    se = ne.prototype,
                    ue = e["__core-js_shared__"],
                    le = ce.toString,
                    fe = se.hasOwnProperty,
                    de = 0,
                    pe = function() {
                        var t = /[^.]+$/.exec(ue && ue.keys && ue.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t: ""
                    } (),
                    he = se.toString,
                    ve = le.call(ne),
                    ge = cn._,
                    ye = ie("^" + le.call(fe).replace(Ot, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    me = ln ? e.Buffer: r,
                    be = e.Symbol,
                    we = e.Uint8Array,
                    _e = me ? me.allocUnsafe: r,
                    xe = si(ne.getPrototypeOf, ne),
                    Ie = ne.create,
                    ke = se.propertyIsEnumerable,
                    Ce = oe.splice,
                    Se = be ? be.isConcatSpreadable: r,
                    Te = be ? be.iterator: r,
                    ze = be ? be.toStringTag: r,
                    Pe = function() {
                        try {
                            var t = Wo(ne, "defineProperty");
                            return t({},
                            "", {}),
                            t
                        } catch(e) {}
                    } (),
                    Ae = e.clearTimeout !== cn.clearTimeout && e.clearTimeout,
                    Ee = i && i.now !== cn.Date.now && i.now,
                    De = e.setTimeout !== cn.setTimeout && e.setTimeout,
                    Le = ee.ceil,
                    Re = ee.floor,
                    Oe = ne.getOwnPropertySymbols,
                    je = me ? me.isBuffer: r,
                    Be = e.isFinite,
                    Ge = oe.join,
                    $e = si(ne.keys, ne),
                    Me = ee.max,
                    Fe = ee.min,
                    Ne = i.now,
                    We = e.parseInt,
                    qe = ee.random,
                    Je = oe.reverse,
                    Xe = Wo(e, "DataView"),
                    Ke = Wo(e, "Map"),
                    tn = Wo(e, "Promise"),
                    en = Wo(e, "Set"),
                    rn = Wo(e, "WeakMap"),
                    on = Wo(ne, "create"),
                    sn = rn && new rn,
                    un = {},
                    fn = Ac(Xe),
                    dn = Ac(Ke),
                    Dn = Ac(tn),
                    Ln = Ac(en),
                    Hn = Ac(rn),
                    di = be ? be.prototype: r,
                    yi = di ? di.valueOf: r,
                    mi = di ? di.toString: r;
                    function wi(t) {
                        if (Il(t) && !ol(t) && !(t instanceof Ci)) {
                            if (t instanceof ki) return t;
                            if (fe.call(t, "__wrapped__")) return Dc(t)
                        }
                        return new ki(t)
                    }
                    var xi = function() {
                        function t() {}
                        return function(e) {
                            if (!xl(e)) return {};
                            if (Ie) return Ie(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = r,
                            n
                        }
                    } ();
                    function Ii() {}
                    function ki(t, e) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__chain__ = !!e,
                        this.__index__ = 0,
                        this.__values__ = r
                    }
                    function Ci(t) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = $,
                        this.__views__ = []
                    }
                    function Si() {
                        var t = new Ci(this.__wrapped__);
                        return t.__actions__ = eo(this.__actions__),
                        t.__dir__ = this.__dir__,
                        t.__filtered__ = this.__filtered__,
                        t.__iteratees__ = eo(this.__iteratees__),
                        t.__takeCount__ = this.__takeCount__,
                        t.__views__ = eo(this.__views__),
                        t
                    }
                    function Ti() {
                        if (this.__filtered__) {
                            var t = new Ci(this);
                            t.__dir__ = -1,
                            t.__filtered__ = !0
                        } else t = this.clone(),
                        t.__dir__ *= -1;
                        return t
                    }
                    function zi() {
                        var t = this.__wrapped__.value(),
                        e = this.__dir__,
                        n = ol(t),
                        i = e < 0,
                        a = n ? t.length: 0,
                        r = Yo(0, a, this.__views__),
                        o = r.start,
                        c = r.end,
                        s = c - o,
                        u = i ? c: o - 1,
                        l = this.__iteratees__,
                        f = l.length,
                        d = 0,
                        p = Fe(s, this.__takeCount__);
                        if (!n || !i && a == s && p == s) return jr(t, this.__actions__);
                        var h = [];
                        t: while (s--&&d < p) {
                            u += e;
                            var v = -1,
                            g = t[u];
                            while (++v < f) {
                                var y = l[v],
                                m = y.iteratee,
                                b = y.type,
                                w = m(g);
                                if (b == L) g = w;
                                else if (!w) {
                                    if (b == D) continue t;
                                    break t
                                }
                            }
                            h[d++] = g
                        }
                        return h
                    }
                    function Pi(t) {
                        var e = -1,
                        n = null == t ? 0 : t.length;
                        this.clear();
                        while (++e < n) {
                            var i = t[e];
                            this.set(i[0], i[1])
                        }
                    }
                    function Ai() {
                        this.__data__ = on ? on(null) : {},
                        this.size = 0
                    }
                    function Ei(t) {
                        var e = this.has(t) && delete this.__data__[t];
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    function Di(t) {
                        var e = this.__data__;
                        if (on) {
                            var n = e[t];
                            return n === l ? r: n
                        }
                        return fe.call(e, t) ? e[t] : r
                    }
                    function Li(t) {
                        var e = this.__data__;
                        return on ? e[t] !== r: fe.call(e, t)
                    }
                    function Ri(t, e) {
                        var n = this.__data__;
                        return this.size += this.has(t) ? 0 : 1,
                        n[t] = on && e === r ? l: e,
                        this
                    }
                    function Oi(t) {
                        var e = -1,
                        n = null == t ? 0 : t.length;
                        this.clear();
                        while (++e < n) {
                            var i = t[e];
                            this.set(i[0], i[1])
                        }
                    }
                    function ji() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    function Bi(t) {
                        var e = this.__data__,
                        n = sa(e, t);
                        if (n < 0) return ! 1;
                        var i = e.length - 1;
                        return n == i ? e.pop() : Ce.call(e, n, 1),
                        --this.size,
                        !0
                    }
                    function Gi(t) {
                        var e = this.__data__,
                        n = sa(e, t);
                        return n < 0 ? r: e[n][1]
                    }
                    function $i(t) {
                        return sa(this.__data__, t) > -1
                    }
                    function Mi(t, e) {
                        var n = this.__data__,
                        i = sa(n, t);
                        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e,
                        this
                    }
                    function Fi(t) {
                        var e = -1,
                        n = null == t ? 0 : t.length;
                        this.clear();
                        while (++e < n) {
                            var i = t[e];
                            this.set(i[0], i[1])
                        }
                    }
                    function Hi() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Pi,
                            map: new(Ke || Oi),
                            string: new Pi
                        }
                    }
                    function Ui(t) {
                        var e = Uo(this, t)["delete"](t);
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    function Ni(t) {
                        return Uo(this, t).get(t)
                    }
                    function Wi(t) {
                        return Uo(this, t).has(t)
                    }
                    function qi(t, e) {
                        var n = Uo(this, t),
                        i = n.size;
                        return n.set(t, e),
                        this.size += n.size == i ? 0 : 1,
                        this
                    }
                    function Ji(t) {
                        var e = -1,
                        n = null == t ? 0 : t.length;
                        this.__data__ = new Fi;
                        while (++e < n) this.add(t[e])
                    }
                    function Vi(t) {
                        return this.__data__.set(t, l),
                        this
                    }
                    function Zi(t) {
                        return this.__data__.has(t)
                    }
                    function Yi(t) {
                        var e = this.__data__ = new Oi(t);
                        this.size = e.size
                    }
                    function Qi() {
                        this.__data__ = new Oi,
                        this.size = 0
                    }
                    function Xi(t) {
                        var e = this.__data__,
                        n = e["delete"](t);
                        return this.size = e.size,
                        n
                    }
                    function Ki(t) {
                        return this.__data__.get(t)
                    }
                    function ta(t) {
                        return this.__data__.has(t)
                    }
                    function ea(t, e) {
                        var n = this.__data__;
                        if (n instanceof Oi) {
                            var i = n.__data__;
                            if (!Ke || i.length < c - 1) return i.push([t, e]),
                            this.size = ++n.size,
                            this;
                            n = this.__data__ = new Fi(i)
                        }
                        return n.set(t, e),
                        this.size = n.size,
                        this
                    }
                    function na(t, e) {
                        var n = ol(t),
                        i = !n && rl(t),
                        a = !n && !i && fl(t),
                        r = !n && !i && !a && Gl(t),
                        o = n || i || a || r,
                        c = o ? qn(t.length, ae) : [],
                        s = c.length;
                        for (var u in t) ! e && !fe.call(t, u) || o && ("length" == u || a && ("offset" == u || "parent" == u) || r && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ac(u, s)) || c.push(u);
                        return c
                    }
                    function ia(t) {
                        var e = t.length;
                        return e ? t[vr(0, e - 1)] : r
                    }
                    function aa(t, e) {
                        return Tc(eo(t), ha(e, 0, t.length))
                    }
                    function ra(t) {
                        return Tc(eo(t))
                    }
                    function oa(t, e, n) { (n !== r && !nl(t[e], n) || n === r && !(e in t)) && da(t, e, n)
                    }
                    function ca(t, e, n) {
                        var i = t[e];
                        fe.call(t, e) && nl(i, n) && (n !== r || e in t) || da(t, e, n)
                    }
                    function sa(t, e) {
                        var n = t.length;
                        while (n--) if (nl(t[n][0], e)) return n;
                        return - 1
                    }
                    function ua(t, e, n, i) {
                        return wa(t, (function(t, a, r) {
                            e(i, t, n(t), r)
                        })),
                        i
                    }
                    function la(t, e) {
                        return t && no(e, _f(e), t)
                    }
                    function fa(t, e) {
                        return t && no(e, xf(e), t)
                    }
                    function da(t, e, n) {
                        "__proto__" == e && Pe ? Pe(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : t[e] = n
                    }
                    function pa(t, e) {
                        var i = -1,
                        a = e.length,
                        o = n(a),
                        c = null == t;
                        while (++i < a) o[i] = c ? r: vf(t, e[i]);
                        return o
                    }
                    function ha(t, e, n) {
                        return t === t && (n !== r && (t = t <= n ? t: n), e !== r && (t = t >= e ? t: e)),
                        t
                    }
                    function va(t, e, n, i, a, o) {
                        var c, s = e & p,
                        u = e & h,
                        l = e & v;
                        if (n && (c = a ? n(t, i, a, o) : n(t)), c !== r) return c;
                        if (!xl(t)) return t;
                        var f = ol(t);
                        if (f) {
                            if (c = Ko(t), !s) return eo(t, c)
                        } else {
                            var d = Zo(t),
                            g = d == Y || d == Q;
                            if (fl(t)) return Wr(t, s);
                            if (d == et || d == U || g && !a) {
                                if (c = u || g ? {}: tc(t), !s) return u ? ao(t, fa(c, t)) : io(t, la(c, t))
                            } else {
                                if (!Qe[d]) return a ? t: {};
                                c = ec(t, d, s)
                            }
                        }
                        o || (o = new Yi);
                        var y = o.get(t);
                        if (y) return y;
                        o.set(t, c),
                        Ol(t) ? t.forEach((function(i) {
                            c.add(va(i, e, n, i, t, o))
                        })) : kl(t) && t.forEach((function(i, a) {
                            c.set(a, va(i, e, n, a, t, o))
                        }));
                        var m = l ? u ? Go: Bo: u ? xf: _f,
                        b = f ? r: m(t);
                        return _n(b || t, (function(i, a) {
                            b && (a = i, i = t[a]),
                            ca(c, a, va(i, e, n, a, t, o))
                        })),
                        c
                    }
                    function ga(t) {
                        var e = _f(t);
                        return function(n) {
                            return ya(n, t, e)
                        }
                    }
                    function ya(t, e, n) {
                        var i = n.length;
                        if (null == t) return ! i;
                        t = ne(t);
                        while (i--) {
                            var a = n[i],
                            o = e[a],
                            c = t[a];
                            if (c === r && !(a in t) || !o(c)) return ! 1
                        }
                        return ! 0
                    }
                    function ma(t, e, n) {
                        if ("function" != typeof t) throw new re(u);
                        return Ic((function() {
                            t.apply(r, n)
                        }), e)
                    }
                    function ba(t, e, n, i) {
                        var a = -1,
                        r = Cn,
                        o = !0,
                        s = t.length,
                        u = [],
                        l = e.length;
                        if (!s) return u;
                        n && (e = Tn(e, Vn(n))),
                        i ? (r = Sn, o = !1) : e.length >= c && (r = Yn, o = !1, e = new Ji(e));
                        t: while (++a < s) {
                            var f = t[a],
                            d = null == n ? f: n(f);
                            if (f = i || 0 !== f ? f: 0, o && d === d) {
                                var p = l;
                                while (p--) if (e[p] === d) continue t;
                                u.push(f)
                            } else r(e, d, i) || u.push(f)
                        }
                        return u
                    }
                    wi.templateSettings = {
                        escape: Pt,
                        evaluate: At,
                        interpolate: Et,
                        variable: "",
                        imports: {
                            _: wi
                        }
                    },
                    wi.prototype = Ii.prototype,
                    wi.prototype.constructor = wi,
                    ki.prototype = xi(Ii.prototype),
                    ki.prototype.constructor = ki,
                    Ci.prototype = xi(Ii.prototype),
                    Ci.prototype.constructor = Ci,
                    Pi.prototype.clear = Ai,
                    Pi.prototype["delete"] = Ei,
                    Pi.prototype.get = Di,
                    Pi.prototype.has = Li,
                    Pi.prototype.set = Ri,
                    Oi.prototype.clear = ji,
                    Oi.prototype["delete"] = Bi,
                    Oi.prototype.get = Gi,
                    Oi.prototype.has = $i,
                    Oi.prototype.set = Mi,
                    Fi.prototype.clear = Hi,
                    Fi.prototype["delete"] = Ui,
                    Fi.prototype.get = Ni,
                    Fi.prototype.has = Wi,
                    Fi.prototype.set = qi,
                    Ji.prototype.add = Ji.prototype.push = Vi,
                    Ji.prototype.has = Zi,
                    Yi.prototype.clear = Qi,
                    Yi.prototype["delete"] = Xi,
                    Yi.prototype.get = Ki,
                    Yi.prototype.has = ta,
                    Yi.prototype.set = ea;
                    var wa = co(Pa),
                    _a = co(Aa, !0);
                    function xa(t, e) {
                        var n = !0;
                        return wa(t, (function(t, i, a) {
                            return n = !!e(t, i, a),
                            n
                        })),
                        n
                    }
                    function Ia(t, e, n) {
                        var i = -1,
                        a = t.length;
                        while (++i < a) {
                            var o = t[i],
                            c = e(o);
                            if (null != c && (s === r ? c === c && !Bl(c) : n(c, s))) var s = c,
                            u = o
                        }
                        return u
                    }
                    function ka(t, e, n, i) {
                        var a = t.length;
                        n = ql(n),
                        n < 0 && (n = -n > a ? 0 : a + n),
                        i = i === r || i > a ? a: ql(i),
                        i < 0 && (i += a),
                        i = n > i ? 0 : Jl(i);
                        while (n < i) t[n++] = e;
                        return t
                    }
                    function Ca(t, e) {
                        var n = [];
                        return wa(t, (function(t, i, a) {
                            e(t, i, a) && n.push(t)
                        })),
                        n
                    }
                    function Sa(t, e, n, i, a) {
                        var r = -1,
                        o = t.length;
                        n || (n = ic),
                        a || (a = []);
                        while (++r < o) {
                            var c = t[r];
                            e > 0 && n(c) ? e > 1 ? Sa(c, e - 1, n, i, a) : zn(a, c) : i || (a[a.length] = c)
                        }
                        return a
                    }
                    var Ta = so(),
                    za = so(!0);
                    function Pa(t, e) {
                        return t && Ta(t, e, _f)
                    }
                    function Aa(t, e) {
                        return t && za(t, e, _f)
                    }
                    function Ea(t, e) {
                        return kn(e, (function(e) {
                            return bl(t[e])
                        }))
                    }
                    function Da(t, e) {
                        e = Fr(e, t);
                        var n = 0,
                        i = e.length;
                        while (null != t && n < i) t = t[Pc(e[n++])];
                        return n && n == i ? t: r
                    }
                    function La(t, e, n) {
                        var i = e(t);
                        return ol(t) ? i: zn(i, n(t))
                    }
                    function Ra(t) {
                        return null == t ? t === r ? st: tt: ze && ze in ne(t) ? qo(t) : yc(t)
                    }
                    function Oa(t, e) {
                        return t > e
                    }
                    function ja(t, e) {
                        return null != t && fe.call(t, e)
                    }
                    function Ba(t, e) {
                        return null != t && e in ne(t)
                    }
                    function Ga(t, e, n) {
                        return t >= Fe(e, n) && t < Me(e, n)
                    }
                    function $a(t, e, i) {
                        var a = i ? Sn: Cn,
                        o = t[0].length,
                        c = t.length,
                        s = c,
                        u = n(c),
                        l = 1 / 0,
                        f = [];
                        while (s--) {
                            var d = t[s];
                            s && e && (d = Tn(d, Vn(e))),
                            l = Fe(d.length, l),
                            u[s] = !i && (e || o >= 120 && d.length >= 120) ? new Ji(s && d) : r
                        }
                        d = t[0];
                        var p = -1,
                        h = u[0];
                        t: while (++p < o && f.length < l) {
                            var v = d[p],
                            g = e ? e(v) : v;
                            if (v = i || 0 !== v ? v: 0, !(h ? Yn(h, g) : a(f, g, i))) {
                                s = c;
                                while (--s) {
                                    var y = u[s];
                                    if (! (y ? Yn(y, g) : a(t[s], g, i))) continue t
                                }
                                h && h.push(g),
                                f.push(v)
                            }
                        }
                        return f
                    }
                    function Ma(t, e, n, i) {
                        return Pa(t, (function(t, a, r) {
                            e(i, n(t), a, r)
                        })),
                        i
                    }
                    function Fa(t, e, n) {
                        e = Fr(e, t),
                        t = bc(t, e);
                        var i = null == t ? t: t[Pc(is(e))];
                        return null == i ? r: bn(i, t, n)
                    }
                    function Ha(t) {
                        return Il(t) && Ra(t) == U
                    }
                    function Ua(t) {
                        return Il(t) && Ra(t) == ft
                    }
                    function Na(t) {
                        return Il(t) && Ra(t) == J
                    }
                    function Wa(t, e, n, i, a) {
                        return t === e || (null == t || null == e || !Il(t) && !Il(e) ? t !== t && e !== e: qa(t, e, n, i, Wa, a))
                    }
                    function qa(t, e, n, i, a, r) {
                        var o = ol(t),
                        c = ol(e),
                        s = o ? N: Zo(t),
                        u = c ? N: Zo(e);
                        s = s == U ? et: s,
                        u = u == U ? et: u;
                        var l = s == et,
                        f = u == et,
                        d = s == u;
                        if (d && fl(t)) {
                            if (!fl(e)) return ! 1;
                            o = !0,
                            l = !1
                        }
                        if (d && !l) return r || (r = new Yi),
                        o || Gl(t) ? Lo(t, e, n, i, a, r) : Ro(t, e, s, n, i, a, r);
                        if (! (n & g)) {
                            var p = l && fe.call(t, "__wrapped__"),
                            h = f && fe.call(e, "__wrapped__");
                            if (p || h) {
                                var v = p ? t.value() : t,
                                y = h ? e.value() : e;
                                return r || (r = new Yi),
                                a(v, y, n, i, r)
                            }
                        }
                        return !! d && (r || (r = new Yi), Oo(t, e, n, i, a, r))
                    }
                    function Ja(t) {
                        return Il(t) && Zo(t) == X
                    }
                    function Va(t, e, n, i) {
                        var a = n.length,
                        o = a,
                        c = !i;
                        if (null == t) return ! o;
                        t = ne(t);
                        while (a--) {
                            var s = n[a];
                            if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return ! 1
                        }
                        while (++a < o) {
                            s = n[a];
                            var u = s[0],
                            l = t[u],
                            f = s[1];
                            if (c && s[2]) {
                                if (l === r && !(u in t)) return ! 1
                            } else {
                                var d = new Yi;
                                if (i) var p = i(l, f, u, t, e, d);
                                if (! (p === r ? Wa(f, l, g | y, i, d) : p)) return ! 1
                            }
                        }
                        return ! 0
                    }
                    function Za(t) {
                        if (!xl(t) || uc(t)) return ! 1;
                        var e = bl(t) ? ye: Zt;
                        return e.test(Ac(t))
                    }
                    function Ya(t) {
                        return Il(t) && Ra(t) == at
                    }
                    function Qa(t) {
                        return Il(t) && Zo(t) == rt
                    }
                    function Xa(t) {
                        return Il(t) && _l(t.length) && !!Ye[Ra(t)]
                    }
                    function Ka(t) {
                        return "function" == typeof t ? t: null == t ? Pd: "object" == typeof t ? ol(t) ? rr(t[0], t[1]) : ar(t) : Hd(t)
                    }
                    function tr(t) {
                        if (!fc(t)) return $e(t);
                        var e = [];
                        for (var n in ne(t)) fe.call(t, n) && "constructor" != n && e.push(n);
                        return e
                    }
                    function er(t) {
                        if (!xl(t)) return gc(t);
                        var e = fc(t),
                        n = [];
                        for (var i in t)("constructor" != i || !e && fe.call(t, i)) && n.push(i);
                        return n
                    }
                    function nr(t, e) {
                        return t < e
                    }
                    function ir(t, e) {
                        var i = -1,
                        a = sl(t) ? n(t.length) : [];
                        return wa(t, (function(t, n, r) {
                            a[++i] = e(t, n, r)
                        })),
                        a
                    }
                    function ar(t) {
                        var e = No(t);
                        return 1 == e.length && e[0][2] ? pc(e[0][0], e[0][1]) : function(n) {
                            return n === t || Va(n, t, e)
                        }
                    }
                    function rr(t, e) {
                        return oc(t) && dc(e) ? pc(Pc(t), e) : function(n) {
                            var i = vf(n, t);
                            return i === r && i === e ? yf(n, t) : Wa(e, i, g | y)
                        }
                    }
                    function or(t, e, n, i, a) {
                        t !== e && Ta(e, (function(o, c) {
                            if (a || (a = new Yi), xl(o)) cr(t, e, c, n, or, i, a);
                            else {
                                var s = i ? i(_c(t, c), o, c + "", t, e, a) : r;
                                s === r && (s = o),
                                oa(t, c, s)
                            }
                        }), xf)
                    }
                    function cr(t, e, n, i, a, o, c) {
                        var s = _c(t, n),
                        u = _c(e, n),
                        l = c.get(u);
                        if (l) oa(t, n, l);
                        else {
                            var f = o ? o(s, u, n + "", t, e, c) : r,
                            d = f === r;
                            if (d) {
                                var p = ol(u),
                                h = !p && fl(u),
                                v = !p && !h && Gl(u);
                                f = u,
                                p || h || v ? ol(s) ? f = s: ul(s) ? f = eo(s) : h ? (d = !1, f = Wr(u, !0)) : v ? (d = !1, f = Yr(u, !0)) : f = [] : Dl(u) || rl(u) ? (f = s, rl(s) ? f = Zl(s) : xl(s) && !bl(s) || (f = tc(u))) : d = !1
                            }
                            d && (c.set(u, f), a(f, u, i, o, c), c["delete"](u)),
                            oa(t, n, f)
                        }
                    }
                    function sr(t, e) {
                        var n = t.length;
                        if (n) return e += e < 0 ? n: 0,
                        ac(e, n) ? t[e] : r
                    }
                    function ur(t, e, n) {
                        var i = -1;
                        e = Tn(e.length ? e: [Pd], Vn(Ho()));
                        var a = ir(t, (function(t, n, a) {
                            var r = Tn(e, (function(e) {
                                return e(t)
                            }));
                            return {
                                criteria: r,
                                index: ++i,
                                value: t
                            }
                        }));
                        return Nn(a, (function(t, e) {
                            return Xr(t, e, n)
                        }))
                    }
                    function lr(t, e) {
                        return fr(t, e, (function(e, n) {
                            return yf(t, n)
                        }))
                    }
                    function fr(t, e, n) {
                        var i = -1,
                        a = e.length,
                        r = {};
                        while (++i < a) {
                            var o = e[i],
                            c = Da(t, o);
                            n(c, o) && _r(r, Fr(o, t), c)
                        }
                        return r
                    }
                    function dr(t) {
                        return function(e) {
                            return Da(e, t)
                        }
                    }
                    function pr(t, e, n, i) {
                        var a = i ? Gn: Bn,
                        r = -1,
                        o = e.length,
                        c = t;
                        t === e && (e = eo(e)),
                        n && (c = Tn(t, Vn(n)));
                        while (++r < o) {
                            var s = 0,
                            u = e[r],
                            l = n ? n(u) : u;
                            while ((s = a(c, l, s, i)) > -1) c !== t && Ce.call(c, s, 1),
                            Ce.call(t, s, 1)
                        }
                        return t
                    }
                    function hr(t, e) {
                        var n = t ? e.length: 0,
                        i = n - 1;
                        while (n--) {
                            var a = e[n];
                            if (n == i || a !== r) {
                                var r = a;
                                ac(a) ? Ce.call(t, a, 1) : Lr(t, a)
                            }
                        }
                        return t
                    }
                    function vr(t, e) {
                        return t + Re(qe() * (e - t + 1))
                    }
                    function gr(t, e, i, a) {
                        var r = -1,
                        o = Me(Le((e - t) / (i || 1)), 0),
                        c = n(o);
                        while (o--) c[a ? o: ++r] = t,
                        t += i;
                        return c
                    }
                    function yr(t, e) {
                        var n = "";
                        if (!t || e < 1 || e > j) return n;
                        do {
                            e % 2 && (n += t), e = Re(e / 2), e && (t += t)
                        } while ( e );
                        return n
                    }
                    function mr(t, e) {
                        return kc(mc(t, e, Pd), t + "")
                    }
                    function br(t) {
                        return ia(Mf(t))
                    }
                    function wr(t, e) {
                        var n = Mf(t);
                        return Tc(n, ha(e, 0, n.length))
                    }
                    function _r(t, e, n, i) {
                        if (!xl(t)) return t;
                        e = Fr(e, t);
                        var a = -1,
                        o = e.length,
                        c = o - 1,
                        s = t;
                        while (null != s && ++a < o) {
                            var u = Pc(e[a]),
                            l = n;
                            if (a != c) {
                                var f = s[u];
                                l = i ? i(f, u, s) : r,
                                l === r && (l = xl(f) ? f: ac(e[a + 1]) ? [] : {})
                            }
                            ca(s, u, l),
                            s = s[u]
                        }
                        return t
                    }
                    var xr = sn ?
                    function(t, e) {
                        return sn.set(t, e),
                        t
                    }: Pd,
                    Ir = Pe ?
                    function(t, e) {
                        return Pe(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Cd(e),
                            writable: !0
                        })
                    }: Pd;
                    function kr(t) {
                        return Tc(Mf(t))
                    }
                    function Cr(t, e, i) {
                        var a = -1,
                        r = t.length;
                        e < 0 && (e = -e > r ? 0 : r + e),
                        i = i > r ? r: i,
                        i < 0 && (i += r),
                        r = e > i ? 0 : i - e >>> 0,
                        e >>>= 0;
                        var o = n(r);
                        while (++a < r) o[a] = t[a + e];
                        return o
                    }
                    function Sr(t, e) {
                        var n;
                        return wa(t, (function(t, i, a) {
                            return n = e(t, i, a),
                            !n
                        })),
                        !!n
                    }
                    function Tr(t, e, n) {
                        var i = 0,
                        a = null == t ? i: t.length;
                        if ("number" == typeof e && e === e && a <= F) {
                            while (i < a) {
                                var r = i + a >>> 1,
                                o = t[r];
                                null !== o && !Bl(o) && (n ? o <= e: o < e) ? i = r + 1 : a = r
                            }
                            return a
                        }
                        return zr(t, e, Pd, n)
                    }
                    function zr(t, e, n, i) {
                        e = n(e);
                        var a = 0,
                        o = null == t ? 0 : t.length,
                        c = e !== e,
                        s = null === e,
                        u = Bl(e),
                        l = e === r;
                        while (a < o) {
                            var f = Re((a + o) / 2),
                            d = n(t[f]),
                            p = d !== r,
                            h = null === d,
                            v = d === d,
                            g = Bl(d);
                            if (c) var y = i || v;
                            else y = l ? v && (i || p) : s ? v && p && (i || !h) : u ? v && p && !h && (i || !g) : !h && !g && (i ? d <= e: d < e);
                            y ? a = f + 1 : o = f
                        }
                        return Fe(o, M)
                    }
                    function Pr(t, e) {
                        var n = -1,
                        i = t.length,
                        a = 0,
                        r = [];
                        while (++n < i) {
                            var o = t[n],
                            c = e ? e(o) : o;
                            if (!n || !nl(c, s)) {
                                var s = c;
                                r[a++] = 0 === o ? 0 : o
                            }
                        }
                        return r
                    }
                    function Ar(t) {
                        return "number" == typeof t ? t: Bl(t) ? G: +t
                    }
                    function Er(t) {
                        if ("string" == typeof t) return t;
                        if (ol(t)) return Tn(t, Er) + "";
                        if (Bl(t)) return mi ? mi.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -O ? "-0": e
                    }
                    function Dr(t, e, n) {
                        var i = -1,
                        a = Cn,
                        r = t.length,
                        o = !0,
                        s = [],
                        u = s;
                        if (n) o = !1,
                        a = Sn;
                        else if (r >= c) {
                            var l = e ? null: To(t);
                            if (l) return li(l);
                            o = !1,
                            a = Yn,
                            u = new Ji
                        } else u = e ? [] : s;
                        t: while (++i < r) {
                            var f = t[i],
                            d = e ? e(f) : f;
                            if (f = n || 0 !== f ? f: 0, o && d === d) {
                                var p = u.length;
                                while (p--) if (u[p] === d) continue t;
                                e && u.push(d),
                                s.push(f)
                            } else a(u, d, n) || (u !== s && u.push(d), s.push(f))
                        }
                        return s
                    }
                    function Lr(t, e) {
                        return e = Fr(e, t),
                        t = bc(t, e),
                        null == t || delete t[Pc(is(e))]
                    }
                    function Rr(t, e, n, i) {
                        return _r(t, e, n(Da(t, e)), i)
                    }
                    function Or(t, e, n, i) {
                        var a = t.length,
                        r = i ? a: -1;
                        while ((i ? r--:++r < a) && e(t[r], r, t));
                        return n ? Cr(t, i ? 0 : r, i ? r + 1 : a) : Cr(t, i ? r + 1 : 0, i ? a: r)
                    }
                    function jr(t, e) {
                        var n = t;
                        return n instanceof Ci && (n = n.value()),
                        Pn(e, (function(t, e) {
                            return e.func.apply(e.thisArg, zn([t], e.args))
                        }), n)
                    }
                    function Br(t, e, i) {
                        var a = t.length;
                        if (a < 2) return a ? Dr(t[0]) : [];
                        var r = -1,
                        o = n(a);
                        while (++r < a) {
                            var c = t[r],
                            s = -1;
                            while (++s < a) s != r && (o[r] = ba(o[r] || c, t[s], e, i))
                        }
                        return Dr(Sa(o, 1), e, i)
                    }
                    function Gr(t, e, n) {
                        var i = -1,
                        a = t.length,
                        o = e.length,
                        c = {};
                        while (++i < a) {
                            var s = i < o ? e[i] : r;
                            n(c, t[i], s)
                        }
                        return c
                    }
                    function $r(t) {
                        return ul(t) ? t: []
                    }
                    function Mr(t) {
                        return "function" == typeof t ? t: Pd
                    }
                    function Fr(t, e) {
                        return ol(t) ? t: oc(t, e) ? [t] : zc(Ql(t))
                    }
                    var Hr = mr;
                    function Ur(t, e, n) {
                        var i = t.length;
                        return n = n === r ? i: n,
                        !e && n >= i ? t: Cr(t, e, n)
                    }
                    var Nr = Ae ||
                    function(t) {
                        return cn.clearTimeout(t)
                    };
                    function Wr(t, e) {
                        if (e) return t.slice();
                        var n = t.length,
                        i = _e ? _e(n) : new t.constructor(n);
                        return t.copy(i),
                        i
                    }
                    function qr(t) {
                        var e = new t.constructor(t.byteLength);
                        return new we(e).set(new we(t)),
                        e
                    }
                    function Jr(t, e) {
                        var n = e ? qr(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.byteLength)
                    }
                    function Vr(t) {
                        var e = new t.constructor(t.source, qt.exec(t));
                        return e.lastIndex = t.lastIndex,
                        e
                    }
                    function Zr(t) {
                        return yi ? ne(yi.call(t)) : {}
                    }
                    function Yr(t, e) {
                        var n = e ? qr(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.length)
                    }
                    function Qr(t, e) {
                        if (t !== e) {
                            var n = t !== r,
                            i = null === t,
                            a = t === t,
                            o = Bl(t),
                            c = e !== r,
                            s = null === e,
                            u = e === e,
                            l = Bl(e);
                            if (!s && !l && !o && t > e || o && c && u && !s && !l || i && c && u || !n && u || !a) return 1;
                            if (!i && !o && !l && t < e || l && n && a && !i && !o || s && n && a || !c && a || !u) return - 1
                        }
                        return 0
                    }
                    function Xr(t, e, n) {
                        var i = -1,
                        a = t.criteria,
                        r = e.criteria,
                        o = a.length,
                        c = n.length;
                        while (++i < o) {
                            var s = Qr(a[i], r[i]);
                            if (s) {
                                if (i >= c) return s;
                                var u = n[i];
                                return s * ("desc" == u ? -1 : 1)
                            }
                        }
                        return t.index - e.index
                    }
                    function Kr(t, e, i, a) {
                        var r = -1,
                        o = t.length,
                        c = i.length,
                        s = -1,
                        u = e.length,
                        l = Me(o - c, 0),
                        f = n(u + l),
                        d = !a;
                        while (++s < u) f[s] = e[s];
                        while (++r < c)(d || r < o) && (f[i[r]] = t[r]);
                        while (l--) f[s++] = t[r++];
                        return f
                    }
                    function to(t, e, i, a) {
                        var r = -1,
                        o = t.length,
                        c = -1,
                        s = i.length,
                        u = -1,
                        l = e.length,
                        f = Me(o - s, 0),
                        d = n(f + l),
                        p = !a;
                        while (++r < f) d[r] = t[r];
                        var h = r;
                        while (++u < l) d[h + u] = e[u];
                        while (++c < s)(p || r < o) && (d[h + i[c]] = t[r++]);
                        return d
                    }
                    function eo(t, e) {
                        var i = -1,
                        a = t.length;
                        e || (e = n(a));
                        while (++i < a) e[i] = t[i];
                        return e
                    }
                    function no(t, e, n, i) {
                        var a = !n;
                        n || (n = {});
                        var o = -1,
                        c = e.length;
                        while (++o < c) {
                            var s = e[o],
                            u = i ? i(n[s], t[s], s, n, t) : r;
                            u === r && (u = t[s]),
                            a ? da(n, s, u) : ca(n, s, u)
                        }
                        return n
                    }
                    function io(t, e) {
                        return no(t, Jo(t), e)
                    }
                    function ao(t, e) {
                        return no(t, Vo(t), e)
                    }
                    function ro(t, e) {
                        return function(n, i) {
                            var a = ol(n) ? wn: ua,
                            r = e ? e() : {};
                            return a(n, t, Ho(i, 2), r)
                        }
                    }
                    function oo(t) {
                        return mr((function(e, n) {
                            var i = -1,
                            a = n.length,
                            o = a > 1 ? n[a - 1] : r,
                            c = a > 2 ? n[2] : r;
                            o = t.length > 3 && "function" == typeof o ? (a--, o) : r,
                            c && rc(n[0], n[1], c) && (o = a < 3 ? r: o, a = 1),
                            e = ne(e);
                            while (++i < a) {
                                var s = n[i];
                                s && t(e, s, i, o)
                            }
                            return e
                        }))
                    }
                    function co(t, e) {
                        return function(n, i) {
                            if (null == n) return n;
                            if (!sl(n)) return t(n, i);
                            var a = n.length,
                            r = e ? a: -1,
                            o = ne(n);
                            while (e ? r--:++r < a) if (!1 === i(o[r], r, o)) break;
                            return n
                        }
                    }
                    function so(t) {
                        return function(e, n, i) {
                            var a = -1,
                            r = ne(e),
                            o = i(e),
                            c = o.length;
                            while (c--) {
                                var s = o[t ? c: ++a];
                                if (!1 === n(r[s], s, r)) break
                            }
                            return e
                        }
                    }
                    function uo(t, e, n) {
                        var i = e & m,
                        a = po(t);
                        function r() {
                            var e = this && this !== cn && this instanceof r ? a: t;
                            return e.apply(i ? n: this, arguments)
                        }
                        return r
                    }
                    function lo(t) {
                        return function(e) {
                            e = Ql(e);
                            var n = ai(e) ? vi(e) : r,
                            i = n ? n[0] : e.charAt(0),
                            a = n ? Ur(n, 1).join("") : e.slice(1);
                            return i[t]() + a
                        }
                    }
                    function fo(t) {
                        return function(e) {
                            return Pn(wd(Jf(e).replace(He, "")), t, "")
                        }
                    }
                    function po(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                            }
                            var n = xi(t.prototype),
                            i = t.apply(n, e);
                            return xl(i) ? i: n
                        }
                    }
                    function ho(t, e, i) {
                        var a = po(t);
                        function o() {
                            var c = arguments.length,
                            s = n(c),
                            u = c,
                            l = Fo(o);
                            while (u--) s[u] = arguments[u];
                            var f = c < 3 && s[0] !== l && s[c - 1] !== l ? [] : ui(s, l);
                            if (c -= f.length, c < i) return Co(t, e, yo, o.placeholder, r, s, f, r, r, i - c);
                            var d = this && this !== cn && this instanceof o ? a: t;
                            return bn(d, this, s)
                        }
                        return o
                    }
                    function vo(t) {
                        return function(e, n, i) {
                            var a = ne(e);
                            if (!sl(e)) {
                                var o = Ho(n, 3);
                                e = _f(e),
                                n = function(t) {
                                    return o(a[t], t, a)
                                }
                            }
                            var c = t(e, n, i);
                            return c > -1 ? a[o ? e[c] : c] : r
                        }
                    }
                    function go(t) {
                        return jo((function(e) {
                            var n = e.length,
                            i = n,
                            a = ki.prototype.thru;
                            t && e.reverse();
                            while (i--) {
                                var o = e[i];
                                if ("function" != typeof o) throw new re(u);
                                if (a && !c && "wrapper" == Mo(o)) var c = new ki([], !0)
                            }
                            i = c ? i: n;
                            while (++i < n) {
                                o = e[i];
                                var s = Mo(o),
                                l = "wrapper" == s ? $o(o) : r;
                                c = l && sc(l[0]) && l[1] == (C | _ | I | S) && !l[4].length && 1 == l[9] ? c[Mo(l[0])].apply(c, l[3]) : 1 == o.length && sc(o) ? c[s]() : c.thru(o)
                            }
                            return function() {
                                var t = arguments,
                                i = t[0];
                                if (c && 1 == t.length && ol(i)) return c.plant(i).value();
                                var a = 0,
                                r = n ? e[a].apply(this, t) : i;
                                while (++a < n) r = e[a].call(this, r);
                                return r
                            }
                        }))
                    }
                    function yo(t, e, i, a, o, c, s, u, l, f) {
                        var d = e & C,
                        p = e & m,
                        h = e & b,
                        v = e & (_ | x),
                        g = e & T,
                        y = h ? r: po(t);
                        function w() {
                            var r = arguments.length,
                            m = n(r),
                            b = r;
                            while (b--) m[b] = arguments[b];
                            if (v) var _ = Fo(w),
                            x = Kn(m, _);
                            if (a && (m = Kr(m, a, o, v)), c && (m = to(m, c, s, v)), r -= x, v && r < f) {
                                var I = ui(m, _);
                                return Co(t, e, yo, w.placeholder, i, m, I, u, l, f - r)
                            }
                            var k = p ? i: this,
                            C = h ? k[t] : t;
                            return r = m.length,
                            u ? m = wc(m, u) : g && r > 1 && m.reverse(),
                            d && l < r && (m.length = l),
                            this && this !== cn && this instanceof w && (C = y || po(C)),
                            C.apply(k, m)
                        }
                        return w
                    }
                    function mo(t, e) {
                        return function(n, i) {
                            return Ma(n, t, e(i), {})
                        }
                    }
                    function bo(t, e) {
                        return function(n, i) {
                            var a;
                            if (n === r && i === r) return e;
                            if (n !== r && (a = n), i !== r) {
                                if (a === r) return i;
                                "string" == typeof n || "string" == typeof i ? (n = Er(n), i = Er(i)) : (n = Ar(n), i = Ar(i)),
                                a = t(n, i)
                            }
                            return a
                        }
                    }
                    function wo(t) {
                        return jo((function(e) {
                            return e = Tn(e, Vn(Ho())),
                            mr((function(n) {
                                var i = this;
                                return t(e, (function(t) {
                                    return bn(t, i, n)
                                }))
                            }))
                        }))
                    }
                    function _o(t, e) {
                        e = e === r ? " ": Er(e);
                        var n = e.length;
                        if (n < 2) return n ? yr(e, t) : e;
                        var i = yr(e, Le(t / hi(e)));
                        return ai(e) ? Ur(vi(i), 0, t).join("") : i.slice(0, t)
                    }
                    function xo(t, e, i, a) {
                        var r = e & m,
                        o = po(t);
                        function c() {
                            var e = -1,
                            s = arguments.length,
                            u = -1,
                            l = a.length,
                            f = n(l + s),
                            d = this && this !== cn && this instanceof c ? o: t;
                            while (++u < l) f[u] = a[u];
                            while (s--) f[u++] = arguments[++e];
                            return bn(d, r ? i: this, f)
                        }
                        return c
                    }
                    function Io(t) {
                        return function(e, n, i) {
                            return i && "number" != typeof i && rc(e, n, i) && (n = i = r),
                            e = Wl(e),
                            n === r ? (n = e, e = 0) : n = Wl(n),
                            i = i === r ? e < n ? 1 : -1 : Wl(i),
                            gr(e, n, i, t)
                        }
                    }
                    function ko(t) {
                        return function(e, n) {
                            return "string" == typeof e && "string" == typeof n || (e = Vl(e), n = Vl(n)),
                            t(e, n)
                        }
                    }
                    function Co(t, e, n, i, a, o, c, s, u, l) {
                        var f = e & _,
                        d = f ? c: r,
                        p = f ? r: c,
                        h = f ? o: r,
                        v = f ? r: o;
                        e |= f ? I: k,
                        e &= ~ (f ? k: I),
                        e & w || (e &= ~ (m | b));
                        var g = [t, e, a, h, d, v, p, s, u, l],
                        y = n.apply(r, g);
                        return sc(t) && xc(y, g),
                        y.placeholder = i,
                        Cc(y, t, e)
                    }
                    function So(t) {
                        var e = ee[t];
                        return function(t, n) {
                            if (t = Vl(t), n = null == n ? 0 : Fe(ql(n), 292), n && Be(t)) {
                                var i = (Ql(t) + "e").split("e"),
                                a = e(i[0] + "e" + ( + i[1] + n));
                                return i = (Ql(a) + "e").split("e"),
                                +(i[0] + "e" + ( + i[1] - n))
                            }
                            return e(t)
                        }
                    }
                    var To = en && 1 / li(new en([, -0]))[1] == O ?
                    function(t) {
                        return new en(t)
                    }: Bd;
                    function zo(t) {
                        return function(e) {
                            var n = Zo(e);
                            return n == X ? ci(e) : n == rt ? fi(e) : Jn(e, t(e))
                        }
                    }
                    function Po(t, e, n, i, a, o, c, s) {
                        var l = e & b;
                        if (!l && "function" != typeof t) throw new re(u);
                        var f = i ? i.length: 0;
                        if (f || (e &= ~ (I | k), i = a = r), c = c === r ? c: Me(ql(c), 0), s = s === r ? s: ql(s), f -= a ? a.length: 0, e & k) {
                            var d = i,
                            p = a;
                            i = a = r
                        }
                        var h = l ? r: $o(t),
                        v = [t, e, n, i, a, d, p, o, c, s];
                        if (h && vc(v, h), t = v[0], e = v[1], n = v[2], i = v[3], a = v[4], s = v[9] = v[9] === r ? l ? 0 : t.length: Me(v[9] - f, 0), !s && e & (_ | x) && (e &= ~ (_ | x)), e && e != m) g = e == _ || e == x ? ho(t, e, s) : e != I && e != (m | I) || a.length ? yo.apply(r, v) : xo(t, e, n, i);
                        else var g = uo(t, e, n);
                        var y = h ? xr: xc;
                        return Cc(y(g, v), t, e)
                    }
                    function Ao(t, e, n, i) {
                        return t === r || nl(t, se[n]) && !fe.call(i, n) ? e: t
                    }
                    function Eo(t, e, n, i, a, o) {
                        return xl(t) && xl(e) && (o.set(e, t), or(t, e, r, Eo, o), o["delete"](e)),
                        t
                    }
                    function Do(t) {
                        return Dl(t) ? r: t
                    }
                    function Lo(t, e, n, i, a, o) {
                        var c = n & g,
                        s = t.length,
                        u = e.length;
                        if (s != u && !(c && u > s)) return ! 1;
                        var l = o.get(t);
                        if (l && o.get(e)) return l == e;
                        var f = -1,
                        d = !0,
                        p = n & y ? new Ji: r;
                        o.set(t, e),
                        o.set(e, t);
                        while (++f < s) {
                            var h = t[f],
                            v = e[f];
                            if (i) var m = c ? i(v, h, f, e, t, o) : i(h, v, f, t, e, o);
                            if (m !== r) {
                                if (m) continue;
                                d = !1;
                                break
                            }
                            if (p) {
                                if (!En(e, (function(t, e) {
                                    if (!Yn(p, e) && (h === t || a(h, t, n, i, o))) return p.push(e)
                                }))) {
                                    d = !1;
                                    break
                                }
                            } else if (h !== v && !a(h, v, n, i, o)) {
                                d = !1;
                                break
                            }
                        }
                        return o["delete"](t),
                        o["delete"](e),
                        d
                    }
                    function Ro(t, e, n, i, a, r, o) {
                        switch (n) {
                        case dt:
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return ! 1;
                            t = t.buffer,
                            e = e.buffer;
                        case ft:
                            return ! (t.byteLength != e.byteLength || !r(new we(t), new we(e)));
                        case q:
                        case J:
                        case K:
                            return nl( + t, +e);
                        case Z:
                            return t.name == e.name && t.message == e.message;
                        case at:
                        case ot:
                            return t == e + "";
                        case X:
                            var c = ci;
                        case rt:
                            var s = i & g;
                            if (c || (c = li), t.size != e.size && !s) return ! 1;
                            var u = o.get(t);
                            if (u) return u == e;
                            i |= y,
                            o.set(t, e);
                            var l = Lo(c(t), c(e), i, a, r, o);
                            return o["delete"](t),
                            l;
                        case ct:
                            if (yi) return yi.call(t) == yi.call(e)
                        }
                        return ! 1
                    }
                    function Oo(t, e, n, i, a, o) {
                        var c = n & g,
                        s = Bo(t),
                        u = s.length,
                        l = Bo(e),
                        f = l.length;
                        if (u != f && !c) return ! 1;
                        var d = u;
                        while (d--) {
                            var p = s[d];
                            if (! (c ? p in e: fe.call(e, p))) return ! 1
                        }
                        var h = o.get(t);
                        if (h && o.get(e)) return h == e;
                        var v = !0;
                        o.set(t, e),
                        o.set(e, t);
                        var y = c;
                        while (++d < u) {
                            p = s[d];
                            var m = t[p],
                            b = e[p];
                            if (i) var w = c ? i(b, m, p, e, t, o) : i(m, b, p, t, e, o);
                            if (! (w === r ? m === b || a(m, b, n, i, o) : w)) {
                                v = !1;
                                break
                            }
                            y || (y = "constructor" == p)
                        }
                        if (v && !y) {
                            var _ = t.constructor,
                            x = e.constructor;
                            _ == x || !("constructor" in t) || !("constructor" in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof x && x instanceof x || (v = !1)
                        }
                        return o["delete"](t),
                        o["delete"](e),
                        v
                    }
                    function jo(t) {
                        return kc(mc(t, r, qc), t + "")
                    }
                    function Bo(t) {
                        return La(t, _f, Jo)
                    }
                    function Go(t) {
                        return La(t, xf, Vo)
                    }
                    var $o = sn ?
                    function(t) {
                        return sn.get(t)
                    }: Bd;
                    function Mo(t) {
                        var e = t.name + "",
                        n = un[e],
                        i = fe.call(un, e) ? n.length: 0;
                        while (i--) {
                            var a = n[i],
                            r = a.func;
                            if (null == r || r == t) return a.name
                        }
                        return e
                    }
                    function Fo(t) {
                        var e = fe.call(wi, "placeholder") ? wi: t;
                        return e.placeholder
                    }
                    function Ho() {
                        var t = wi.iteratee || Ad;
                        return t = t === Ad ? Ka: t,
                        arguments.length ? t(arguments[0], arguments[1]) : t
                    }
                    function Uo(t, e) {
                        var n = t.__data__;
                        return cc(e) ? n["string" == typeof e ? "string": "hash"] : n.map
                    }
                    function No(t) {
                        var e = _f(t),
                        n = e.length;
                        while (n--) {
                            var i = e[n],
                            a = t[i];
                            e[n] = [i, a, dc(a)]
                        }
                        return e
                    }
                    function Wo(t, e) {
                        var n = ii(t, e);
                        return Za(n) ? n: r
                    }
                    function qo(t) {
                        var e = fe.call(t, ze),
                        n = t[ze];
                        try {
                            t[ze] = r;
                            var i = !0
                        } catch(o) {}
                        var a = he.call(t);
                        return i && (e ? t[ze] = n: delete t[ze]),
                        a
                    }
                    var Jo = Oe ?
                    function(t) {
                        return null == t ? [] : (t = ne(t), kn(Oe(t), (function(e) {
                            return ke.call(t, e)
                        })))
                    }: qd,
                    Vo = Oe ?
                    function(t) {
                        var e = [];
                        while (t) zn(e, Jo(t)),
                        t = xe(t);
                        return e
                    }: qd,
                    Zo = Ra;
                    function Yo(t, e, n) {
                        var i = -1,
                        a = n.length;
                        while (++i < a) {
                            var r = n[i],
                            o = r.size;
                            switch (r.type) {
                            case "drop":
                                t += o;
                                break;
                            case "dropRight":
                                e -= o;
                                break;
                            case "take":
                                e = Fe(e, t + o);
                                break;
                            case "takeRight":
                                t = Me(t, e - o);
                                break
                            }
                        }
                        return {
                            start: t,
                            end: e
                        }
                    }
                    function Qo(t) {
                        var e = t.match(Ft);
                        return e ? e[1].split(Ht) : []
                    }
                    function Xo(t, e, n) {
                        e = Fr(e, t);
                        var i = -1,
                        a = e.length,
                        r = !1;
                        while (++i < a) {
                            var o = Pc(e[i]);
                            if (! (r = null != t && n(t, o))) break;
                            t = t[o]
                        }
                        return r || ++i != a ? r: (a = null == t ? 0 : t.length, !!a && _l(a) && ac(o, a) && (ol(t) || rl(t)))
                    }
                    function Ko(t) {
                        var e = t.length,
                        n = new t.constructor(e);
                        return e && "string" == typeof t[0] && fe.call(t, "index") && (n.index = t.index, n.input = t.input),
                        n
                    }
                    function tc(t) {
                        return "function" != typeof t.constructor || fc(t) ? {}: xi(xe(t))
                    }
                    function ec(t, e, n) {
                        var i = t.constructor;
                        switch (e) {
                        case ft:
                            return qr(t);
                        case q:
                        case J:
                            return new i( + t);
                        case dt:
                            return Jr(t, n);
                        case pt:
                        case ht:
                        case vt:
                        case gt:
                        case yt:
                        case mt:
                        case bt:
                        case wt:
                        case _t:
                            return Yr(t, n);
                        case X:
                            return new i;
                        case K:
                        case ot:
                            return new i(t);
                        case at:
                            return Vr(t);
                        case rt:
                            return new i;
                        case ct:
                            return Zr(t)
                        }
                    }
                    function nc(t, e) {
                        var n = e.length;
                        if (!n) return t;
                        var i = n - 1;
                        return e[i] = (n > 1 ? "& ": "") + e[i],
                        e = e.join(n > 2 ? ", ": " "),
                        t.replace(Mt, "{\n/* [wrapped with " + e + "] */\n")
                    }
                    function ic(t) {
                        return ol(t) || rl(t) || !!(Se && t && t[Se])
                    }
                    function ac(t, e) {
                        var n = typeof t;
                        return e = null == e ? j: e,
                        !!e && ("number" == n || "symbol" != n && Qt.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }
                    function rc(t, e, n) {
                        if (!xl(n)) return ! 1;
                        var i = typeof e;
                        return !! ("number" == i ? sl(n) && ac(e, n.length) : "string" == i && e in n) && nl(n[e], t)
                    }
                    function oc(t, e) {
                        if (ol(t)) return ! 1;
                        var n = typeof t;
                        return ! ("number" != n && "symbol" != n && "boolean" != n && null != t && !Bl(t)) || (Lt.test(t) || !Dt.test(t) || null != e && t in ne(e))
                    }
                    function cc(t) {
                        var e = typeof t;
                        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t: null === t
                    }
                    function sc(t) {
                        var e = Mo(t),
                        n = wi[e];
                        if ("function" != typeof n || !(e in Ci.prototype)) return ! 1;
                        if (t === n) return ! 0;
                        var i = $o(n);
                        return !! i && t === i[0]
                    }
                    function uc(t) {
                        return !! pe && pe in t
                    } (Xe && Zo(new Xe(new ArrayBuffer(1))) != dt || Ke && Zo(new Ke) != X || tn && Zo(tn.resolve()) != nt || en && Zo(new en) != rt || rn && Zo(new rn) != ut) && (Zo = function(t) {
                        var e = Ra(t),
                        n = e == et ? t.constructor: r,
                        i = n ? Ac(n) : "";
                        if (i) switch (i) {
                        case fn:
                            return dt;
                        case dn:
                            return X;
                        case Dn:
                            return nt;
                        case Ln:
                            return rt;
                        case Hn:
                            return ut
                        }
                        return e
                    });
                    var lc = ue ? bl: Jd;
                    function fc(t) {
                        var e = t && t.constructor,
                        n = "function" == typeof e && e.prototype || se;
                        return t === n
                    }
                    function dc(t) {
                        return t === t && !xl(t)
                    }
                    function pc(t, e) {
                        return function(n) {
                            return null != n && (n[t] === e && (e !== r || t in ne(n)))
                        }
                    }
                    function hc(t) {
                        var e = Gu(t, (function(t) {
                            return n.size === f && n.clear(),
                            t
                        })),
                        n = e.cache;
                        return e
                    }
                    function vc(t, e) {
                        var n = t[1],
                        i = e[1],
                        a = n | i,
                        r = a < (m | b | C),
                        o = i == C && n == _ || i == C && n == S && t[7].length <= e[8] || i == (C | S) && e[7].length <= e[8] && n == _;
                        if (!r && !o) return t;
                        i & m && (t[2] = e[2], a |= n & m ? 0 : w);
                        var c = e[3];
                        if (c) {
                            var s = t[3];
                            t[3] = s ? Kr(s, c, e[4]) : c,
                            t[4] = s ? ui(t[3], d) : e[4]
                        }
                        return c = e[5],
                        c && (s = t[5], t[5] = s ? to(s, c, e[6]) : c, t[6] = s ? ui(t[5], d) : e[6]),
                        c = e[7],
                        c && (t[7] = c),
                        i & C && (t[8] = null == t[8] ? e[8] : Fe(t[8], e[8])),
                        null == t[9] && (t[9] = e[9]),
                        t[0] = e[0],
                        t[1] = a,
                        t
                    }
                    function gc(t) {
                        var e = [];
                        if (null != t) for (var n in ne(t)) e.push(n);
                        return e
                    }
                    function yc(t) {
                        return he.call(t)
                    }
                    function mc(t, e, i) {
                        return e = Me(e === r ? t.length - 1 : e, 0),
                        function() {
                            var a = arguments,
                            r = -1,
                            o = Me(a.length - e, 0),
                            c = n(o);
                            while (++r < o) c[r] = a[e + r];
                            r = -1;
                            var s = n(e + 1);
                            while (++r < e) s[r] = a[r];
                            return s[e] = i(c),
                            bn(t, this, s)
                        }
                    }
                    function bc(t, e) {
                        return e.length < 2 ? t: Da(t, Cr(e, 0, -1))
                    }
                    function wc(t, e) {
                        var n = t.length,
                        i = Fe(e.length, n),
                        a = eo(t);
                        while (i--) {
                            var o = e[i];
                            t[i] = ac(o, n) ? a[o] : r
                        }
                        return t
                    }
                    function _c(t, e) {
                        if (("constructor" !== e || "function" !== typeof t[e]) && "__proto__" != e) return t[e]
                    }
                    var xc = Sc(xr),
                    Ic = De ||
                    function(t, e) {
                        return cn.setTimeout(t, e)
                    },
                    kc = Sc(Ir);
                    function Cc(t, e, n) {
                        var i = e + "";
                        return kc(t, nc(i, Ec(Qo(i), n)))
                    }
                    function Sc(t) {
                        var e = 0,
                        n = 0;
                        return function() {
                            var i = Ne(),
                            a = E - (i - n);
                            if (n = i, a > 0) {
                                if (++e >= A) return arguments[0]
                            } else e = 0;
                            return t.apply(r, arguments)
                        }
                    }
                    function Tc(t, e) {
                        var n = -1,
                        i = t.length,
                        a = i - 1;
                        e = e === r ? i: e;
                        while (++n < e) {
                            var o = vr(n, a),
                            c = t[o];
                            t[o] = t[n],
                            t[n] = c
                        }
                        return t.length = e,
                        t
                    }
                    var zc = hc((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""),
                        t.replace(Rt, (function(t, n, i, a) {
                            e.push(i ? a.replace(Nt, "$1") : n || t)
                        })),
                        e
                    }));
                    function Pc(t) {
                        if ("string" == typeof t || Bl(t)) return t;
                        var e = t + "";
                        return "0" == e && 1 / t == -O ? "-0": e
                    }
                    function Ac(t) {
                        if (null != t) {
                            try {
                                return le.call(t)
                            } catch(e) {}
                            try {
                                return t + ""
                            } catch(e) {}
                        }
                        return ""
                    }
                    function Ec(t, e) {
                        return _n(H, (function(n) {
                            var i = "_." + n[0];
                            e & n[1] && !Cn(t, i) && t.push(i)
                        })),
                        t.sort()
                    }
                    function Dc(t) {
                        if (t instanceof Ci) return t.clone();
                        var e = new ki(t.__wrapped__, t.__chain__);
                        return e.__actions__ = eo(t.__actions__),
                        e.__index__ = t.__index__,
                        e.__values__ = t.__values__,
                        e
                    }
                    function Lc(t, e, i) {
                        e = (i ? rc(t, e, i) : e === r) ? 1 : Me(ql(e), 0);
                        var a = null == t ? 0 : t.length;
                        if (!a || e < 1) return [];
                        var o = 0,
                        c = 0,
                        s = n(Le(a / e));
                        while (o < a) s[c++] = Cr(t, o, o += e);
                        return s
                    }
                    function Rc(t) {
                        var e = -1,
                        n = null == t ? 0 : t.length,
                        i = 0,
                        a = [];
                        while (++e < n) {
                            var r = t[e];
                            r && (a[i++] = r)
                        }
                        return a
                    }
                    function Oc() {
                        var t = arguments.length;
                        if (!t) return [];
                        var e = n(t - 1),
                        i = arguments[0],
                        a = t;
                        while (a--) e[a - 1] = arguments[a];
                        return zn(ol(i) ? eo(i) : [i], Sa(e, 1))
                    }
                    var jc = mr((function(t, e) {
                        return ul(t) ? ba(t, Sa(e, 1, ul, !0)) : []
                    })),
                    Bc = mr((function(t, e) {
                        var n = is(e);
                        return ul(n) && (n = r),
                        ul(t) ? ba(t, Sa(e, 1, ul, !0), Ho(n, 2)) : []
                    })),
                    Gc = mr((function(t, e) {
                        var n = is(e);
                        return ul(n) && (n = r),
                        ul(t) ? ba(t, Sa(e, 1, ul, !0), r, n) : []
                    }));
                    function $c(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? (e = n || e === r ? 1 : ql(e), Cr(t, e < 0 ? 0 : e, i)) : []
                    }
                    function Mc(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? (e = n || e === r ? 1 : ql(e), e = i - e, Cr(t, 0, e < 0 ? 0 : e)) : []
                    }
                    function Fc(t, e) {
                        return t && t.length ? Or(t, Ho(e, 3), !0, !0) : []
                    }
                    function Hc(t, e) {
                        return t && t.length ? Or(t, Ho(e, 3), !0) : []
                    }
                    function Uc(t, e, n, i) {
                        var a = null == t ? 0 : t.length;
                        return a ? (n && "number" != typeof n && rc(t, e, n) && (n = 0, i = a), ka(t, e, n, i)) : []
                    }
                    function Nc(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var a = null == n ? 0 : ql(n);
                        return a < 0 && (a = Me(i + a, 0)),
                        jn(t, Ho(e, 3), a)
                    }
                    function Wc(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var a = i - 1;
                        return n !== r && (a = ql(n), a = n < 0 ? Me(i + a, 0) : Fe(a, i - 1)),
                        jn(t, Ho(e, 3), a, !0)
                    }
                    function qc(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? Sa(t, 1) : []
                    }
                    function Jc(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? Sa(t, O) : []
                    }
                    function Vc(t, e) {
                        var n = null == t ? 0 : t.length;
                        return n ? (e = e === r ? 1 : ql(e), Sa(t, e)) : []
                    }
                    function Zc(t) {
                        var e = -1,
                        n = null == t ? 0 : t.length,
                        i = {};
                        while (++e < n) {
                            var a = t[e];
                            i[a[0]] = a[1]
                        }
                        return i
                    }
                    function Yc(t) {
                        return t && t.length ? t[0] : r
                    }
                    function Qc(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var a = null == n ? 0 : ql(n);
                        return a < 0 && (a = Me(i + a, 0)),
                        Bn(t, e, a)
                    }
                    function Xc(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? Cr(t, 0, -1) : []
                    }
                    var Kc = mr((function(t) {
                        var e = Tn(t, $r);
                        return e.length && e[0] === t[0] ? $a(e) : []
                    })),
                    ts = mr((function(t) {
                        var e = is(t),
                        n = Tn(t, $r);
                        return e === is(n) ? e = r: n.pop(),
                        n.length && n[0] === t[0] ? $a(n, Ho(e, 2)) : []
                    })),
                    es = mr((function(t) {
                        var e = is(t),
                        n = Tn(t, $r);
                        return e = "function" == typeof e ? e: r,
                        e && n.pop(),
                        n.length && n[0] === t[0] ? $a(n, r, e) : []
                    }));
                    function ns(t, e) {
                        return null == t ? "": Ge.call(t, e)
                    }
                    function is(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? t[e - 1] : r
                    }
                    function as(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        if (!i) return - 1;
                        var a = i;
                        return n !== r && (a = ql(n), a = a < 0 ? Me(i + a, 0) : Fe(a, i - 1)),
                        e === e ? pi(t, e, a) : jn(t, $n, a, !0)
                    }
                    function rs(t, e) {
                        return t && t.length ? sr(t, ql(e)) : r
                    }
                    var os = mr(cs);
                    function cs(t, e) {
                        return t && t.length && e && e.length ? pr(t, e) : t
                    }
                    function ss(t, e, n) {
                        return t && t.length && e && e.length ? pr(t, e, Ho(n, 2)) : t
                    }
                    function us(t, e, n) {
                        return t && t.length && e && e.length ? pr(t, e, r, n) : t
                    }
                    var ls = jo((function(t, e) {
                        var n = null == t ? 0 : t.length,
                        i = pa(t, e);
                        return hr(t, Tn(e, (function(t) {
                            return ac(t, n) ? +t: t
                        })).sort(Qr)),
                        i
                    }));
                    function fs(t, e) {
                        var n = [];
                        if (!t || !t.length) return n;
                        var i = -1,
                        a = [],
                        r = t.length;
                        e = Ho(e, 3);
                        while (++i < r) {
                            var o = t[i];
                            e(o, i, t) && (n.push(o), a.push(i))
                        }
                        return hr(t, a),
                        n
                    }
                    function ds(t) {
                        return null == t ? t: Je.call(t)
                    }
                    function ps(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n && "number" != typeof n && rc(t, e, n) ? (e = 0, n = i) : (e = null == e ? 0 : ql(e), n = n === r ? i: ql(n)), Cr(t, e, n)) : []
                    }
                    function hs(t, e) {
                        return Tr(t, e)
                    }
                    function vs(t, e, n) {
                        return zr(t, e, Ho(n, 2))
                    }
                    function gs(t, e) {
                        var n = null == t ? 0 : t.length;
                        if (n) {
                            var i = Tr(t, e);
                            if (i < n && nl(t[i], e)) return i
                        }
                        return - 1
                    }
                    function ys(t, e) {
                        return Tr(t, e, !0)
                    }
                    function ms(t, e, n) {
                        return zr(t, e, Ho(n, 2), !0)
                    }
                    function bs(t, e) {
                        var n = null == t ? 0 : t.length;
                        if (n) {
                            var i = Tr(t, e, !0) - 1;
                            if (nl(t[i], e)) return i
                        }
                        return - 1
                    }
                    function ws(t) {
                        return t && t.length ? Pr(t) : []
                    }
                    function _s(t, e) {
                        return t && t.length ? Pr(t, Ho(e, 2)) : []
                    }
                    function xs(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? Cr(t, 1, e) : []
                    }
                    function Is(t, e, n) {
                        return t && t.length ? (e = n || e === r ? 1 : ql(e), Cr(t, 0, e < 0 ? 0 : e)) : []
                    }
                    function ks(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? (e = n || e === r ? 1 : ql(e), e = i - e, Cr(t, e < 0 ? 0 : e, i)) : []
                    }
                    function Cs(t, e) {
                        return t && t.length ? Or(t, Ho(e, 3), !1, !0) : []
                    }
                    function Ss(t, e) {
                        return t && t.length ? Or(t, Ho(e, 3)) : []
                    }
                    var Ts = mr((function(t) {
                        return Dr(Sa(t, 1, ul, !0))
                    })),
                    zs = mr((function(t) {
                        var e = is(t);
                        return ul(e) && (e = r),
                        Dr(Sa(t, 1, ul, !0), Ho(e, 2))
                    })),
                    Ps = mr((function(t) {
                        var e = is(t);
                        return e = "function" == typeof e ? e: r,
                        Dr(Sa(t, 1, ul, !0), r, e)
                    }));
                    function As(t) {
                        return t && t.length ? Dr(t) : []
                    }
                    function Es(t, e) {
                        return t && t.length ? Dr(t, Ho(e, 2)) : []
                    }
                    function Ds(t, e) {
                        return e = "function" == typeof e ? e: r,
                        t && t.length ? Dr(t, r, e) : []
                    }
                    function Ls(t) {
                        if (!t || !t.length) return [];
                        var e = 0;
                        return t = kn(t, (function(t) {
                            if (ul(t)) return e = Me(t.length, e),
                            !0
                        })),
                        qn(e, (function(e) {
                            return Tn(t, Fn(e))
                        }))
                    }
                    function Rs(t, e) {
                        if (!t || !t.length) return [];
                        var n = Ls(t);
                        return null == e ? n: Tn(n, (function(t) {
                            return bn(e, r, t)
                        }))
                    }
                    var Os = mr((function(t, e) {
                        return ul(t) ? ba(t, e) : []
                    })),
                    js = mr((function(t) {
                        return Br(kn(t, ul))
                    })),
                    Bs = mr((function(t) {
                        var e = is(t);
                        return ul(e) && (e = r),
                        Br(kn(t, ul), Ho(e, 2))
                    })),
                    Gs = mr((function(t) {
                        var e = is(t);
                        return e = "function" == typeof e ? e: r,
                        Br(kn(t, ul), r, e)
                    })),
                    $s = mr(Ls);
                    function Ms(t, e) {
                        return Gr(t || [], e || [], ca)
                    }
                    function Fs(t, e) {
                        return Gr(t || [], e || [], _r)
                    }
                    var Hs = mr((function(t) {
                        var e = t.length,
                        n = e > 1 ? t[e - 1] : r;
                        return n = "function" == typeof n ? (t.pop(), n) : r,
                        Rs(t, n)
                    }));
                    function Us(t) {
                        var e = wi(t);
                        return e.__chain__ = !0,
                        e
                    }
                    function Ns(t, e) {
                        return e(t),
                        t
                    }
                    function Ws(t, e) {
                        return e(t)
                    }
                    var qs = jo((function(t) {
                        var e = t.length,
                        n = e ? t[0] : 0,
                        i = this.__wrapped__,
                        a = function(e) {
                            return pa(e, t)
                        };
                        return ! (e > 1 || this.__actions__.length) && i instanceof Ci && ac(n) ? (i = i.slice(n, +n + (e ? 1 : 0)), i.__actions__.push({
                            func: Ws,
                            args: [a],
                            thisArg: r
                        }), new ki(i, this.__chain__).thru((function(t) {
                            return e && !t.length && t.push(r),
                            t
                        }))) : this.thru(a)
                    }));
                    function Js() {
                        return Us(this)
                    }
                    function Vs() {
                        return new ki(this.value(), this.__chain__)
                    }
                    function Zs() {
                        this.__values__ === r && (this.__values__ = Nl(this.value()));
                        var t = this.__index__ >= this.__values__.length,
                        e = t ? r: this.__values__[this.__index__++];
                        return {
                            done: t,
                            value: e
                        }
                    }
                    function Ys() {
                        return this
                    }
                    function Qs(t) {
                        var e, n = this;
                        while (n instanceof Ii) {
                            var i = Dc(n);
                            i.__index__ = 0,
                            i.__values__ = r,
                            e ? a.__wrapped__ = i: e = i;
                            var a = i;
                            n = n.__wrapped__
                        }
                        return a.__wrapped__ = t,
                        e
                    }
                    function Xs() {
                        var t = this.__wrapped__;
                        if (t instanceof Ci) {
                            var e = t;
                            return this.__actions__.length && (e = new Ci(this)),
                            e = e.reverse(),
                            e.__actions__.push({
                                func: Ws,
                                args: [ds],
                                thisArg: r
                            }),
                            new ki(e, this.__chain__)
                        }
                        return this.thru(ds)
                    }
                    function Ks() {
                        return jr(this.__wrapped__, this.__actions__)
                    }
                    var tu = ro((function(t, e, n) {
                        fe.call(t, n) ? ++t[n] : da(t, n, 1)
                    }));
                    function eu(t, e, n) {
                        var i = ol(t) ? In: xa;
                        return n && rc(t, e, n) && (e = r),
                        i(t, Ho(e, 3))
                    }
                    function nu(t, e) {
                        var n = ol(t) ? kn: Ca;
                        return n(t, Ho(e, 3))
                    }
                    var iu = vo(Nc),
                    au = vo(Wc);
                    function ru(t, e) {
                        return Sa(hu(t, e), 1)
                    }
                    function ou(t, e) {
                        return Sa(hu(t, e), O)
                    }
                    function cu(t, e, n) {
                        return n = n === r ? 1 : ql(n),
                        Sa(hu(t, e), n)
                    }
                    function su(t, e) {
                        var n = ol(t) ? _n: wa;
                        return n(t, Ho(e, 3))
                    }
                    function uu(t, e) {
                        var n = ol(t) ? xn: _a;
                        return n(t, Ho(e, 3))
                    }
                    var lu = ro((function(t, e, n) {
                        fe.call(t, n) ? t[n].push(e) : da(t, n, [e])
                    }));
                    function fu(t, e, n, i) {
                        t = sl(t) ? t: Mf(t),
                        n = n && !i ? ql(n) : 0;
                        var a = t.length;
                        return n < 0 && (n = Me(a + n, 0)),
                        jl(t) ? n <= a && t.indexOf(e, n) > -1 : !!a && Bn(t, e, n) > -1
                    }
                    var du = mr((function(t, e, i) {
                        var a = -1,
                        r = "function" == typeof e,
                        o = sl(t) ? n(t.length) : [];
                        return wa(t, (function(t) {
                            o[++a] = r ? bn(e, t, i) : Fa(t, e, i)
                        })),
                        o
                    })),
                    pu = ro((function(t, e, n) {
                        da(t, n, e)
                    }));
                    function hu(t, e) {
                        var n = ol(t) ? Tn: ir;
                        return n(t, Ho(e, 3))
                    }
                    function vu(t, e, n, i) {
                        return null == t ? [] : (ol(e) || (e = null == e ? [] : [e]), n = i ? r: n, ol(n) || (n = null == n ? [] : [n]), ur(t, e, n))
                    }
                    var gu = ro((function(t, e, n) {
                        t[n ? 0 : 1].push(e)
                    }), (function() {
                        return [[], []]
                    }));
                    function yu(t, e, n) {
                        var i = ol(t) ? Pn: Un,
                        a = arguments.length < 3;
                        return i(t, Ho(e, 4), n, a, wa)
                    }
                    function mu(t, e, n) {
                        var i = ol(t) ? An: Un,
                        a = arguments.length < 3;
                        return i(t, Ho(e, 4), n, a, _a)
                    }
                    function bu(t, e) {
                        var n = ol(t) ? kn: Ca;
                        return n(t, $u(Ho(e, 3)))
                    }
                    function wu(t) {
                        var e = ol(t) ? ia: br;
                        return e(t)
                    }
                    function _u(t, e, n) {
                        e = (n ? rc(t, e, n) : e === r) ? 1 : ql(e);
                        var i = ol(t) ? aa: wr;
                        return i(t, e)
                    }
                    function xu(t) {
                        var e = ol(t) ? ra: kr;
                        return e(t)
                    }
                    function Iu(t) {
                        if (null == t) return 0;
                        if (sl(t)) return jl(t) ? hi(t) : t.length;
                        var e = Zo(t);
                        return e == X || e == rt ? t.size: tr(t).length
                    }
                    function ku(t, e, n) {
                        var i = ol(t) ? En: Sr;
                        return n && rc(t, e, n) && (e = r),
                        i(t, Ho(e, 3))
                    }
                    var Cu = mr((function(t, e) {
                        if (null == t) return [];
                        var n = e.length;
                        return n > 1 && rc(t, e[0], e[1]) ? e = [] : n > 2 && rc(e[0], e[1], e[2]) && (e = [e[0]]),
                        ur(t, Sa(e, 1), [])
                    })),
                    Su = Ee ||
                    function() {
                        return cn.Date.now()
                    };
                    function Tu(t, e) {
                        if ("function" != typeof e) throw new re(u);
                        return t = ql(t),
                        function() {
                            if (--t < 1) return e.apply(this, arguments)
                        }
                    }
                    function zu(t, e, n) {
                        return e = n ? r: e,
                        e = t && null == e ? t.length: e,
                        Po(t, C, r, r, r, r, e)
                    }
                    function Pu(t, e) {
                        var n;
                        if ("function" != typeof e) throw new re(u);
                        return t = ql(t),
                        function() {
                            return--t > 0 && (n = e.apply(this, arguments)),
                            t <= 1 && (e = r),
                            n
                        }
                    }
                    var Au = mr((function(t, e, n) {
                        var i = m;
                        if (n.length) {
                            var a = ui(n, Fo(Au));
                            i |= I
                        }
                        return Po(t, i, e, n, a)
                    })),
                    Eu = mr((function(t, e, n) {
                        var i = m | b;
                        if (n.length) {
                            var a = ui(n, Fo(Eu));
                            i |= I
                        }
                        return Po(e, i, t, n, a)
                    }));
                    function Du(t, e, n) {
                        e = n ? r: e;
                        var i = Po(t, _, r, r, r, r, r, e);
                        return i.placeholder = Du.placeholder,
                        i
                    }
                    function Lu(t, e, n) {
                        e = n ? r: e;
                        var i = Po(t, x, r, r, r, r, r, e);
                        return i.placeholder = Lu.placeholder,
                        i
                    }
                    function Ru(t, e, n) {
                        var i, a, o, c, s, l, f = 0,
                        d = !1,
                        p = !1,
                        h = !0;
                        if ("function" != typeof t) throw new re(u);
                        function v(e) {
                            var n = i,
                            o = a;
                            return i = a = r,
                            f = e,
                            c = t.apply(o, n),
                            c
                        }
                        function g(t) {
                            return f = t,
                            s = Ic(b, e),
                            d ? v(t) : c
                        }
                        function y(t) {
                            var n = t - l,
                            i = t - f,
                            a = e - n;
                            return p ? Fe(a, o - i) : a
                        }
                        function m(t) {
                            var n = t - l,
                            i = t - f;
                            return l === r || n >= e || n < 0 || p && i >= o
                        }
                        function b() {
                            var t = Su();
                            if (m(t)) return w(t);
                            s = Ic(b, y(t))
                        }
                        function w(t) {
                            return s = r,
                            h && i ? v(t) : (i = a = r, c)
                        }
                        function _() {
                            s !== r && Nr(s),
                            f = 0,
                            i = l = a = s = r
                        }
                        function x() {
                            return s === r ? c: w(Su())
                        }
                        function I() {
                            var t = Su(),
                            n = m(t);
                            if (i = arguments, a = this, l = t, n) {
                                if (s === r) return g(l);
                                if (p) return Nr(s),
                                s = Ic(b, e),
                                v(l)
                            }
                            return s === r && (s = Ic(b, e)),
                            c
                        }
                        return e = Vl(e) || 0,
                        xl(n) && (d = !!n.leading, p = "maxWait" in n, o = p ? Me(Vl(n.maxWait) || 0, e) : o, h = "trailing" in n ? !!n.trailing: h),
                        I.cancel = _,
                        I.flush = x,
                        I
                    }
                    var Ou = mr((function(t, e) {
                        return ma(t, 1, e)
                    })),
                    ju = mr((function(t, e, n) {
                        return ma(t, Vl(e) || 0, n)
                    }));
                    function Bu(t) {
                        return Po(t, T)
                    }
                    function Gu(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e) throw new re(u);
                        var n = function() {
                            var i = arguments,
                            a = e ? e.apply(this, i) : i[0],
                            r = n.cache;
                            if (r.has(a)) return r.get(a);
                            var o = t.apply(this, i);
                            return n.cache = r.set(a, o) || r,
                            o
                        };
                        return n.cache = new(Gu.Cache || Fi),
                        n
                    }
                    function $u(t) {
                        if ("function" != typeof t) throw new re(u);
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return ! t.call(this);
                            case 1:
                                return ! t.call(this, e[0]);
                            case 2:
                                return ! t.call(this, e[0], e[1]);
                            case 3:
                                return ! t.call(this, e[0], e[1], e[2])
                            }
                            return ! t.apply(this, e)
                        }
                    }
                    function Mu(t) {
                        return Pu(2, t)
                    }
                    Gu.Cache = Fi;
                    var Fu = Hr((function(t, e) {
                        e = 1 == e.length && ol(e[0]) ? Tn(e[0], Vn(Ho())) : Tn(Sa(e, 1), Vn(Ho()));
                        var n = e.length;
                        return mr((function(i) {
                            var a = -1,
                            r = Fe(i.length, n);
                            while (++a < r) i[a] = e[a].call(this, i[a]);
                            return bn(t, this, i)
                        }))
                    })),
                    Hu = mr((function(t, e) {
                        var n = ui(e, Fo(Hu));
                        return Po(t, I, r, e, n)
                    })),
                    Uu = mr((function(t, e) {
                        var n = ui(e, Fo(Uu));
                        return Po(t, k, r, e, n)
                    })),
                    Nu = jo((function(t, e) {
                        return Po(t, S, r, r, r, e)
                    }));
                    function Wu(t, e) {
                        if ("function" != typeof t) throw new re(u);
                        return e = e === r ? e: ql(e),
                        mr(t, e)
                    }
                    function qu(t, e) {
                        if ("function" != typeof t) throw new re(u);
                        return e = null == e ? 0 : Me(ql(e), 0),
                        mr((function(n) {
                            var i = n[e],
                            a = Ur(n, 0, e);
                            return i && zn(a, i),
                            bn(t, this, a)
                        }))
                    }
                    function Ju(t, e, n) {
                        var i = !0,
                        a = !0;
                        if ("function" != typeof t) throw new re(u);
                        return xl(n) && (i = "leading" in n ? !!n.leading: i, a = "trailing" in n ? !!n.trailing: a),
                        Ru(t, e, {
                            leading: i,
                            maxWait: e,
                            trailing: a
                        })
                    }
                    function Vu(t) {
                        return zu(t, 1)
                    }
                    function Zu(t, e) {
                        return Hu(Mr(e), t)
                    }
                    function Yu() {
                        if (!arguments.length) return [];
                        var t = arguments[0];
                        return ol(t) ? t: [t]
                    }
                    function Qu(t) {
                        return va(t, v)
                    }
                    function Xu(t, e) {
                        return e = "function" == typeof e ? e: r,
                        va(t, v, e)
                    }
                    function Ku(t) {
                        return va(t, p | v)
                    }
                    function tl(t, e) {
                        return e = "function" == typeof e ? e: r,
                        va(t, p | v, e)
                    }
                    function el(t, e) {
                        return null == e || ya(t, e, _f(e))
                    }
                    function nl(t, e) {
                        return t === e || t !== t && e !== e
                    }
                    var il = ko(Oa),
                    al = ko((function(t, e) {
                        return t >= e
                    })),
                    rl = Ha(function() {
                        return arguments
                    } ()) ? Ha: function(t) {
                        return Il(t) && fe.call(t, "callee") && !ke.call(t, "callee")
                    },
                    ol = n.isArray,
                    cl = pn ? Vn(pn) : Ua;
                    function sl(t) {
                        return null != t && _l(t.length) && !bl(t)
                    }
                    function ul(t) {
                        return Il(t) && sl(t)
                    }
                    function ll(t) {
                        return ! 0 === t || !1 === t || Il(t) && Ra(t) == q
                    }
                    var fl = je || Jd,
                    dl = hn ? Vn(hn) : Na;
                    function pl(t) {
                        return Il(t) && 1 === t.nodeType && !Dl(t)
                    }
                    function hl(t) {
                        if (null == t) return ! 0;
                        if (sl(t) && (ol(t) || "string" == typeof t || "function" == typeof t.splice || fl(t) || Gl(t) || rl(t))) return ! t.length;
                        var e = Zo(t);
                        if (e == X || e == rt) return ! t.size;
                        if (fc(t)) return ! tr(t).length;
                        for (var n in t) if (fe.call(t, n)) return ! 1;
                        return ! 0
                    }
                    function vl(t, e) {
                        return Wa(t, e)
                    }
                    function gl(t, e, n) {
                        n = "function" == typeof n ? n: r;
                        var i = n ? n(t, e) : r;
                        return i === r ? Wa(t, e, r, n) : !!i
                    }
                    function yl(t) {
                        if (!Il(t)) return ! 1;
                        var e = Ra(t);
                        return e == Z || e == V || "string" == typeof t.message && "string" == typeof t.name && !Dl(t)
                    }
                    function ml(t) {
                        return "number" == typeof t && Be(t)
                    }
                    function bl(t) {
                        if (!xl(t)) return ! 1;
                        var e = Ra(t);
                        return e == Y || e == Q || e == W || e == it
                    }
                    function wl(t) {
                        return "number" == typeof t && t == ql(t)
                    }
                    function _l(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= j
                    }
                    function xl(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }
                    function Il(t) {
                        return null != t && "object" == typeof t
                    }
                    var kl = vn ? Vn(vn) : Ja;
                    function Cl(t, e) {
                        return t === e || Va(t, e, No(e))
                    }
                    function Sl(t, e, n) {
                        return n = "function" == typeof n ? n: r,
                        Va(t, e, No(e), n)
                    }
                    function Tl(t) {
                        return El(t) && t != +t
                    }
                    function zl(t) {
                        if (lc(t)) throw new a(s);
                        return Za(t)
                    }
                    function Pl(t) {
                        return null === t
                    }
                    function Al(t) {
                        return null == t
                    }
                    function El(t) {
                        return "number" == typeof t || Il(t) && Ra(t) == K
                    }
                    function Dl(t) {
                        if (!Il(t) || Ra(t) != et) return ! 1;
                        var e = xe(t);
                        if (null === e) return ! 0;
                        var n = fe.call(e, "constructor") && e.constructor;
                        return "function" == typeof n && n instanceof n && le.call(n) == ve
                    }
                    var Ll = gn ? Vn(gn) : Ya;
                    function Rl(t) {
                        return wl(t) && t >= -j && t <= j
                    }
                    var Ol = yn ? Vn(yn) : Qa;
                    function jl(t) {
                        return "string" == typeof t || !ol(t) && Il(t) && Ra(t) == ot
                    }
                    function Bl(t) {
                        return "symbol" == typeof t || Il(t) && Ra(t) == ct
                    }
                    var Gl = mn ? Vn(mn) : Xa;
                    function $l(t) {
                        return t === r
                    }
                    function Ml(t) {
                        return Il(t) && Zo(t) == ut
                    }
                    function Fl(t) {
                        return Il(t) && Ra(t) == lt
                    }
                    var Hl = ko(nr),
                    Ul = ko((function(t, e) {
                        return t <= e
                    }));
                    function Nl(t) {
                        if (!t) return [];
                        if (sl(t)) return jl(t) ? vi(t) : eo(t);
                        if (Te && t[Te]) return oi(t[Te]());
                        var e = Zo(t),
                        n = e == X ? ci: e == rt ? li: Mf;
                        return n(t)
                    }
                    function Wl(t) {
                        if (!t) return 0 === t ? t: 0;
                        if (t = Vl(t), t === O || t === -O) {
                            var e = t < 0 ? -1 : 1;
                            return e * B
                        }
                        return t === t ? t: 0
                    }
                    function ql(t) {
                        var e = Wl(t),
                        n = e % 1;
                        return e === e ? n ? e - n: e: 0
                    }
                    function Jl(t) {
                        return t ? ha(ql(t), 0, $) : 0
                    }
                    function Vl(t) {
                        if ("number" == typeof t) return t;
                        if (Bl(t)) return G;
                        if (xl(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = xl(e) ? e + "": e
                        }
                        if ("string" != typeof t) return 0 === t ? t: +t;
                        t = t.replace(Bt, "");
                        var n = Vt.test(t);
                        return n || Yt.test(t) ? an(t.slice(2), n ? 2 : 8) : Jt.test(t) ? G: +t
                    }
                    function Zl(t) {
                        return no(t, xf(t))
                    }
                    function Yl(t) {
                        return t ? ha(ql(t), -j, j) : 0 === t ? t: 0
                    }
                    function Ql(t) {
                        return null == t ? "": Er(t)
                    }
                    var Xl = oo((function(t, e) {
                        if (fc(e) || sl(e)) no(e, _f(e), t);
                        else for (var n in e) fe.call(e, n) && ca(t, n, e[n])
                    })),
                    Kl = oo((function(t, e) {
                        no(e, xf(e), t)
                    })),
                    tf = oo((function(t, e, n, i) {
                        no(e, xf(e), t, i)
                    })),
                    ef = oo((function(t, e, n, i) {
                        no(e, _f(e), t, i)
                    })),
                    nf = jo(pa);
                    function af(t, e) {
                        var n = xi(t);
                        return null == e ? n: la(n, e)
                    }
                    var rf = mr((function(t, e) {
                        t = ne(t);
                        var n = -1,
                        i = e.length,
                        a = i > 2 ? e[2] : r;
                        a && rc(e[0], e[1], a) && (i = 1);
                        while (++n < i) {
                            var o = e[n],
                            c = xf(o),
                            s = -1,
                            u = c.length;
                            while (++s < u) {
                                var l = c[s],
                                f = t[l]; (f === r || nl(f, se[l]) && !fe.call(t, l)) && (t[l] = o[l])
                            }
                        }
                        return t
                    })),
                    of = mr((function(t) {
                        return t.push(r, Eo),
                        bn(Sf, r, t)
                    }));
                    function cf(t, e) {
                        return On(t, Ho(e, 3), Pa)
                    }
                    function sf(t, e) {
                        return On(t, Ho(e, 3), Aa)
                    }
                    function uf(t, e) {
                        return null == t ? t: Ta(t, Ho(e, 3), xf)
                    }
                    function lf(t, e) {
                        return null == t ? t: za(t, Ho(e, 3), xf)
                    }
                    function ff(t, e) {
                        return t && Pa(t, Ho(e, 3))
                    }
                    function df(t, e) {
                        return t && Aa(t, Ho(e, 3))
                    }
                    function pf(t) {
                        return null == t ? [] : Ea(t, _f(t))
                    }
                    function hf(t) {
                        return null == t ? [] : Ea(t, xf(t))
                    }
                    function vf(t, e, n) {
                        var i = null == t ? r: Da(t, e);
                        return i === r ? n: i
                    }
                    function gf(t, e) {
                        return null != t && Xo(t, e, ja)
                    }
                    function yf(t, e) {
                        return null != t && Xo(t, e, Ba)
                    }
                    var mf = mo((function(t, e, n) {
                        null != e && "function" != typeof e.toString && (e = he.call(e)),
                        t[e] = n
                    }), Cd(Pd)),
                    bf = mo((function(t, e, n) {
                        null != e && "function" != typeof e.toString && (e = he.call(e)),
                        fe.call(t, e) ? t[e].push(n) : t[e] = [n]
                    }), Ho),
                    wf = mr(Fa);
                    function _f(t) {
                        return sl(t) ? na(t) : tr(t)
                    }
                    function xf(t) {
                        return sl(t) ? na(t, !0) : er(t)
                    }
                    function If(t, e) {
                        var n = {};
                        return e = Ho(e, 3),
                        Pa(t, (function(t, i, a) {
                            da(n, e(t, i, a), t)
                        })),
                        n
                    }
                    function kf(t, e) {
                        var n = {};
                        return e = Ho(e, 3),
                        Pa(t, (function(t, i, a) {
                            da(n, i, e(t, i, a))
                        })),
                        n
                    }
                    var Cf = oo((function(t, e, n) {
                        or(t, e, n)
                    })),
                    Sf = oo((function(t, e, n, i) {
                        or(t, e, n, i)
                    })),
                    Tf = jo((function(t, e) {
                        var n = {};
                        if (null == t) return n;
                        var i = !1;
                        e = Tn(e, (function(e) {
                            return e = Fr(e, t),
                            i || (i = e.length > 1),
                            e
                        })),
                        no(t, Go(t), n),
                        i && (n = va(n, p | h | v, Do));
                        var a = e.length;
                        while (a--) Lr(n, e[a]);
                        return n
                    }));
                    function zf(t, e) {
                        return Af(t, $u(Ho(e)))
                    }
                    var Pf = jo((function(t, e) {
                        return null == t ? {}: lr(t, e)
                    }));
                    function Af(t, e) {
                        if (null == t) return {};
                        var n = Tn(Go(t), (function(t) {
                            return [t]
                        }));
                        return e = Ho(e),
                        fr(t, n, (function(t, n) {
                            return e(t, n[0])
                        }))
                    }
                    function Ef(t, e, n) {
                        e = Fr(e, t);
                        var i = -1,
                        a = e.length;
                        a || (a = 1, t = r);
                        while (++i < a) {
                            var o = null == t ? r: t[Pc(e[i])];
                            o === r && (i = a, o = n),
                            t = bl(o) ? o.call(t) : o
                        }
                        return t
                    }
                    function Df(t, e, n) {
                        return null == t ? t: _r(t, e, n)
                    }
                    function Lf(t, e, n, i) {
                        return i = "function" == typeof i ? i: r,
                        null == t ? t: _r(t, e, n, i)
                    }
                    var Rf = zo(_f),
                    Of = zo(xf);
                    function jf(t, e, n) {
                        var i = ol(t),
                        a = i || fl(t) || Gl(t);
                        if (e = Ho(e, 4), null == n) {
                            var r = t && t.constructor;
                            n = a ? i ? new r: [] : xl(t) && bl(r) ? xi(xe(t)) : {}
                        }
                        return (a ? _n: Pa)(t, (function(t, i, a) {
                            return e(n, t, i, a)
                        })),
                        n
                    }
                    function Bf(t, e) {
                        return null == t || Lr(t, e)
                    }
                    function Gf(t, e, n) {
                        return null == t ? t: Rr(t, e, Mr(n))
                    }
                    function $f(t, e, n, i) {
                        return i = "function" == typeof i ? i: r,
                        null == t ? t: Rr(t, e, Mr(n), i)
                    }
                    function Mf(t) {
                        return null == t ? [] : Zn(t, _f(t))
                    }
                    function Ff(t) {
                        return null == t ? [] : Zn(t, xf(t))
                    }
                    function Hf(t, e, n) {
                        return n === r && (n = e, e = r),
                        n !== r && (n = Vl(n), n = n === n ? n: 0),
                        e !== r && (e = Vl(e), e = e === e ? e: 0),
                        ha(Vl(t), e, n)
                    }
                    function Uf(t, e, n) {
                        return e = Wl(e),
                        n === r ? (n = e, e = 0) : n = Wl(n),
                        t = Vl(t),
                        Ga(t, e, n)
                    }
                    function Nf(t, e, n) {
                        if (n && "boolean" != typeof n && rc(t, e, n) && (e = n = r), n === r && ("boolean" == typeof e ? (n = e, e = r) : "boolean" == typeof t && (n = t, t = r)), t === r && e === r ? (t = 0, e = 1) : (t = Wl(t), e === r ? (e = t, t = 0) : e = Wl(e)), t > e) {
                            var i = t;
                            t = e,
                            e = i
                        }
                        if (n || t % 1 || e % 1) {
                            var a = qe();
                            return Fe(t + a * (e - t + nn("1e-" + ((a + "").length - 1))), e)
                        }
                        return vr(t, e)
                    }
                    var Wf = fo((function(t, e, n) {
                        return e = e.toLowerCase(),
                        t + (n ? qf(e) : e)
                    }));
                    function qf(t) {
                        return bd(Ql(t).toLowerCase())
                    }
                    function Jf(t) {
                        return t = Ql(t),
                        t && t.replace(Xt, ti).replace(Ue, "")
                    }
                    function Vf(t, e, n) {
                        t = Ql(t),
                        e = Er(e);
                        var i = t.length;
                        n = n === r ? i: ha(ql(n), 0, i);
                        var a = n;
                        return n -= e.length,
                        n >= 0 && t.slice(n, a) == e
                    }
                    function Zf(t) {
                        return t = Ql(t),
                        t && zt.test(t) ? t.replace(St, ei) : t
                    }
                    function Yf(t) {
                        return t = Ql(t),
                        t && jt.test(t) ? t.replace(Ot, "\\$&") : t
                    }
                    var Qf = fo((function(t, e, n) {
                        return t + (n ? "-": "") + e.toLowerCase()
                    })),
                    Xf = fo((function(t, e, n) {
                        return t + (n ? " ": "") + e.toLowerCase()
                    })),
                    Kf = lo("toLowerCase");
                    function td(t, e, n) {
                        t = Ql(t),
                        e = ql(e);
                        var i = e ? hi(t) : 0;
                        if (!e || i >= e) return t;
                        var a = (e - i) / 2;
                        return _o(Re(a), n) + t + _o(Le(a), n)
                    }
                    function ed(t, e, n) {
                        t = Ql(t),
                        e = ql(e);
                        var i = e ? hi(t) : 0;
                        return e && i < e ? t + _o(e - i, n) : t
                    }
                    function nd(t, e, n) {
                        t = Ql(t),
                        e = ql(e);
                        var i = e ? hi(t) : 0;
                        return e && i < e ? _o(e - i, n) + t: t
                    }
                    function id(t, e, n) {
                        return n || null == e ? e = 0 : e && (e = +e),
                        We(Ql(t).replace(Gt, ""), e || 0)
                    }
                    function ad(t, e, n) {
                        return e = (n ? rc(t, e, n) : e === r) ? 1 : ql(e),
                        yr(Ql(t), e)
                    }
                    function rd() {
                        var t = arguments,
                        e = Ql(t[0]);
                        return t.length < 3 ? e: e.replace(t[1], t[2])
                    }
                    var od = fo((function(t, e, n) {
                        return t + (n ? "_": "") + e.toLowerCase()
                    }));
                    function cd(t, e, n) {
                        return n && "number" != typeof n && rc(t, e, n) && (e = n = r),
                        n = n === r ? $: n >>> 0,
                        n ? (t = Ql(t), t && ("string" == typeof e || null != e && !Ll(e)) && (e = Er(e), !e && ai(t)) ? Ur(vi(t), 0, n) : t.split(e, n)) : []
                    }
                    var sd = fo((function(t, e, n) {
                        return t + (n ? " ": "") + bd(e)
                    }));
                    function ud(t, e, n) {
                        return t = Ql(t),
                        n = null == n ? 0 : ha(ql(n), 0, t.length),
                        e = Er(e),
                        t.slice(n, n + e.length) == e
                    }
                    function ld(t, e, n) {
                        var i = wi.templateSettings;
                        n && rc(t, e, n) && (e = r),
                        t = Ql(t),
                        e = tf({},
                        e, i, Ao);
                        var a, o, c = tf({},
                        e.imports, i.imports, Ao),
                        s = _f(c),
                        u = Zn(c, s),
                        l = 0,
                        f = e.interpolate || Kt,
                        d = "__p += '",
                        p = ie((e.escape || Kt).source + "|" + f.source + "|" + (f === Et ? Wt: Kt).source + "|" + (e.evaluate || Kt).source + "|$", "g"),
                        h = "//# sourceURL=" + (fe.call(e, "sourceURL") ? (e.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Ze + "]") + "\n";
                        t.replace(p, (function(e, n, i, r, c, s) {
                            return i || (i = r),
                            d += t.slice(l, s).replace(te, ni),
                            n && (a = !0, d += "' +\n__e(" + n + ") +\n'"),
                            c && (o = !0, d += "';\n" + c + ";\n__p += '"),
                            i && (d += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"),
                            l = s + e.length,
                            e
                        })),
                        d += "';\n";
                        var v = fe.call(e, "variable") && e.variable;
                        v || (d = "with (obj) {\n" + d + "\n}\n"),
                        d = (o ? d.replace(xt, "") : d).replace(It, "$1").replace(kt, "$1;"),
                        d = "function(" + (v || "obj") + ") {\n" + (v ? "": "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape": "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n": ";\n") + d + "return __p\n}";
                        var g = _d((function() {
                            return Ut(s, h + "return " + d).apply(r, u)
                        }));
                        if (g.source = d, yl(g)) throw g;
                        return g
                    }
                    function fd(t) {
                        return Ql(t).toLowerCase()
                    }
                    function dd(t) {
                        return Ql(t).toUpperCase()
                    }
                    function pd(t, e, n) {
                        if (t = Ql(t), t && (n || e === r)) return t.replace(Bt, "");
                        if (!t || !(e = Er(e))) return t;
                        var i = vi(t),
                        a = vi(e),
                        o = Qn(i, a),
                        c = Xn(i, a) + 1;
                        return Ur(i, o, c).join("")
                    }
                    function hd(t, e, n) {
                        if (t = Ql(t), t && (n || e === r)) return t.replace($t, "");
                        if (!t || !(e = Er(e))) return t;
                        var i = vi(t),
                        a = Xn(i, vi(e)) + 1;
                        return Ur(i, 0, a).join("")
                    }
                    function vd(t, e, n) {
                        if (t = Ql(t), t && (n || e === r)) return t.replace(Gt, "");
                        if (!t || !(e = Er(e))) return t;
                        var i = vi(t),
                        a = Qn(i, vi(e));
                        return Ur(i, a).join("")
                    }
                    function gd(t, e) {
                        var n = z,
                        i = P;
                        if (xl(e)) {
                            var a = "separator" in e ? e.separator: a;
                            n = "length" in e ? ql(e.length) : n,
                            i = "omission" in e ? Er(e.omission) : i
                        }
                        t = Ql(t);
                        var o = t.length;
                        if (ai(t)) {
                            var c = vi(t);
                            o = c.length
                        }
                        if (n >= o) return t;
                        var s = n - hi(i);
                        if (s < 1) return i;
                        var u = c ? Ur(c, 0, s).join("") : t.slice(0, s);
                        if (a === r) return u + i;
                        if (c && (s += u.length - s), Ll(a)) {
                            if (t.slice(s).search(a)) {
                                var l, f = u;
                                a.global || (a = ie(a.source, Ql(qt.exec(a)) + "g")),
                                a.lastIndex = 0;
                                while (l = a.exec(f)) var d = l.index;
                                u = u.slice(0, d === r ? s: d)
                            }
                        } else if (t.indexOf(Er(a), s) != s) {
                            var p = u.lastIndexOf(a);
                            p > -1 && (u = u.slice(0, p))
                        }
                        return u + i
                    }
                    function yd(t) {
                        return t = Ql(t),
                        t && Tt.test(t) ? t.replace(Ct, gi) : t
                    }
                    var md = fo((function(t, e, n) {
                        return t + (n ? " ": "") + e.toUpperCase()
                    })),
                    bd = lo("toUpperCase");
                    function wd(t, e, n) {
                        return t = Ql(t),
                        e = n ? r: e,
                        e === r ? ri(t) ? bi(t) : Rn(t) : t.match(e) || []
                    }
                    var _d = mr((function(t, e) {
                        try {
                            return bn(t, r, e)
                        } catch(n) {
                            return yl(n) ? n: new a(n)
                        }
                    })),
                    xd = jo((function(t, e) {
                        return _n(e, (function(e) {
                            e = Pc(e),
                            da(t, e, Au(t[e], t))
                        })),
                        t
                    }));
                    function Id(t) {
                        var e = null == t ? 0 : t.length,
                        n = Ho();
                        return t = e ? Tn(t, (function(t) {
                            if ("function" != typeof t[1]) throw new re(u);
                            return [n(t[0]), t[1]]
                        })) : [],
                        mr((function(n) {
                            var i = -1;
                            while (++i < e) {
                                var a = t[i];
                                if (bn(a[0], this, n)) return bn(a[1], this, n)
                            }
                        }))
                    }
                    function kd(t) {
                        return ga(va(t, p))
                    }
                    function Cd(t) {
                        return function() {
                            return t
                        }
                    }
                    function Sd(t, e) {
                        return null == t || t !== t ? e: t
                    }
                    var Td = go(),
                    zd = go(!0);
                    function Pd(t) {
                        return t
                    }
                    function Ad(t) {
                        return Ka("function" == typeof t ? t: va(t, p))
                    }
                    function Ed(t) {
                        return ar(va(t, p))
                    }
                    function Dd(t, e) {
                        return rr(t, va(e, p))
                    }
                    var Ld = mr((function(t, e) {
                        return function(n) {
                            return Fa(n, t, e)
                        }
                    })),
                    Rd = mr((function(t, e) {
                        return function(n) {
                            return Fa(t, n, e)
                        }
                    }));
                    function Od(t, e, n) {
                        var i = _f(e),
                        a = Ea(e, i);
                        null != n || xl(e) && (a.length || !i.length) || (n = e, e = t, t = this, a = Ea(e, _f(e)));
                        var r = !(xl(n) && "chain" in n) || !!n.chain,
                        o = bl(t);
                        return _n(a, (function(n) {
                            var i = e[n];
                            t[n] = i,
                            o && (t.prototype[n] = function() {
                                var e = this.__chain__;
                                if (r || e) {
                                    var n = t(this.__wrapped__),
                                    a = n.__actions__ = eo(this.__actions__);
                                    return a.push({
                                        func: i,
                                        args: arguments,
                                        thisArg: t
                                    }),
                                    n.__chain__ = e,
                                    n
                                }
                                return i.apply(t, zn([this.value()], arguments))
                            })
                        })),
                        t
                    }
                    function jd() {
                        return cn._ === this && (cn._ = ge),
                        this
                    }
                    function Bd() {}
                    function Gd(t) {
                        return t = ql(t),
                        mr((function(e) {
                            return sr(e, t)
                        }))
                    }
                    var $d = wo(Tn),
                    Md = wo(In),
                    Fd = wo(En);
                    function Hd(t) {
                        return oc(t) ? Fn(Pc(t)) : dr(t)
                    }
                    function Ud(t) {
                        return function(e) {
                            return null == t ? r: Da(t, e)
                        }
                    }
                    var Nd = Io(),
                    Wd = Io(!0);
                    function qd() {
                        return []
                    }
                    function Jd() {
                        return ! 1
                    }
                    function Vd() {
                        return {}
                    }
                    function Zd() {
                        return ""
                    }
                    function Yd() {
                        return ! 0
                    }
                    function Qd(t, e) {
                        if (t = ql(t), t < 1 || t > j) return [];
                        var n = $,
                        i = Fe(t, $);
                        e = Ho(e),
                        t -= $;
                        var a = qn(i, e);
                        while (++n < t) e(n);
                        return a
                    }
                    function Xd(t) {
                        return ol(t) ? Tn(t, Pc) : Bl(t) ? [t] : eo(zc(Ql(t)))
                    }
                    function Kd(t) {
                        var e = ++de;
                        return Ql(t) + e
                    }
                    var tp = bo((function(t, e) {
                        return t + e
                    }), 0),
                    ep = So("ceil"),
                    np = bo((function(t, e) {
                        return t / e
                    }), 1),
                    ip = So("floor");
                    function ap(t) {
                        return t && t.length ? Ia(t, Pd, Oa) : r
                    }
                    function rp(t, e) {
                        return t && t.length ? Ia(t, Ho(e, 2), Oa) : r
                    }
                    function op(t) {
                        return Mn(t, Pd)
                    }
                    function cp(t, e) {
                        return Mn(t, Ho(e, 2))
                    }
                    function sp(t) {
                        return t && t.length ? Ia(t, Pd, nr) : r
                    }
                    function up(t, e) {
                        return t && t.length ? Ia(t, Ho(e, 2), nr) : r
                    }
                    var lp = bo((function(t, e) {
                        return t * e
                    }), 1),
                    fp = So("round"),
                    dp = bo((function(t, e) {
                        return t - e
                    }), 0);
                    function pp(t) {
                        return t && t.length ? Wn(t, Pd) : 0
                    }
                    function hp(t, e) {
                        return t && t.length ? Wn(t, Ho(e, 2)) : 0
                    }
                    return wi.after = Tu,
                    wi.ary = zu,
                    wi.assign = Xl,
                    wi.assignIn = Kl,
                    wi.assignInWith = tf,
                    wi.assignWith = ef,
                    wi.at = nf,
                    wi.before = Pu,
                    wi.bind = Au,
                    wi.bindAll = xd,
                    wi.bindKey = Eu,
                    wi.castArray = Yu,
                    wi.chain = Us,
                    wi.chunk = Lc,
                    wi.compact = Rc,
                    wi.concat = Oc,
                    wi.cond = Id,
                    wi.conforms = kd,
                    wi.constant = Cd,
                    wi.countBy = tu,
                    wi.create = af,
                    wi.curry = Du,
                    wi.curryRight = Lu,
                    wi.debounce = Ru,
                    wi.defaults = rf,
                    wi.defaultsDeep = of,
                    wi.defer = Ou,
                    wi.delay = ju,
                    wi.difference = jc,
                    wi.differenceBy = Bc,
                    wi.differenceWith = Gc,
                    wi.drop = $c,
                    wi.dropRight = Mc,
                    wi.dropRightWhile = Fc,
                    wi.dropWhile = Hc,
                    wi.fill = Uc,
                    wi.filter = nu,
                    wi.flatMap = ru,
                    wi.flatMapDeep = ou,
                    wi.flatMapDepth = cu,
                    wi.flatten = qc,
                    wi.flattenDeep = Jc,
                    wi.flattenDepth = Vc,
                    wi.flip = Bu,
                    wi.flow = Td,
                    wi.flowRight = zd,
                    wi.fromPairs = Zc,
                    wi.functions = pf,
                    wi.functionsIn = hf,
                    wi.groupBy = lu,
                    wi.initial = Xc,
                    wi.intersection = Kc,
                    wi.intersectionBy = ts,
                    wi.intersectionWith = es,
                    wi.invert = mf,
                    wi.invertBy = bf,
                    wi.invokeMap = du,
                    wi.iteratee = Ad,
                    wi.keyBy = pu,
                    wi.keys = _f,
                    wi.keysIn = xf,
                    wi.map = hu,
                    wi.mapKeys = If,
                    wi.mapValues = kf,
                    wi.matches = Ed,
                    wi.matchesProperty = Dd,
                    wi.memoize = Gu,
                    wi.merge = Cf,
                    wi.mergeWith = Sf,
                    wi.method = Ld,
                    wi.methodOf = Rd,
                    wi.mixin = Od,
                    wi.negate = $u,
                    wi.nthArg = Gd,
                    wi.omit = Tf,
                    wi.omitBy = zf,
                    wi.once = Mu,
                    wi.orderBy = vu,
                    wi.over = $d,
                    wi.overArgs = Fu,
                    wi.overEvery = Md,
                    wi.overSome = Fd,
                    wi.partial = Hu,
                    wi.partialRight = Uu,
                    wi.partition = gu,
                    wi.pick = Pf,
                    wi.pickBy = Af,
                    wi.property = Hd,
                    wi.propertyOf = Ud,
                    wi.pull = os,
                    wi.pullAll = cs,
                    wi.pullAllBy = ss,
                    wi.pullAllWith = us,
                    wi.pullAt = ls,
                    wi.range = Nd,
                    wi.rangeRight = Wd,
                    wi.rearg = Nu,
                    wi.reject = bu,
                    wi.remove = fs,
                    wi.rest = Wu,
                    wi.reverse = ds,
                    wi.sampleSize = _u,
                    wi.set = Df,
                    wi.setWith = Lf,
                    wi.shuffle = xu,
                    wi.slice = ps,
                    wi.sortBy = Cu,
                    wi.sortedUniq = ws,
                    wi.sortedUniqBy = _s,
                    wi.split = cd,
                    wi.spread = qu,
                    wi.tail = xs,
                    wi.take = Is,
                    wi.takeRight = ks,
                    wi.takeRightWhile = Cs,
                    wi.takeWhile = Ss,
                    wi.tap = Ns,
                    wi.throttle = Ju,
                    wi.thru = Ws,
                    wi.toArray = Nl,
                    wi.toPairs = Rf,
                    wi.toPairsIn = Of,
                    wi.toPath = Xd,
                    wi.toPlainObject = Zl,
                    wi.transform = jf,
                    wi.unary = Vu,
                    wi.union = Ts,
                    wi.unionBy = zs,
                    wi.unionWith = Ps,
                    wi.uniq = As,
                    wi.uniqBy = Es,
                    wi.uniqWith = Ds,
                    wi.unset = Bf,
                    wi.unzip = Ls,
                    wi.unzipWith = Rs,
                    wi.update = Gf,
                    wi.updateWith = $f,
                    wi.values = Mf,
                    wi.valuesIn = Ff,
                    wi.without = Os,
                    wi.words = wd,
                    wi.wrap = Zu,
                    wi.xor = js,
                    wi.xorBy = Bs,
                    wi.xorWith = Gs,
                    wi.zip = $s,
                    wi.zipObject = Ms,
                    wi.zipObjectDeep = Fs,
                    wi.zipWith = Hs,
                    wi.entries = Rf,
                    wi.entriesIn = Of,
                    wi.extend = Kl,
                    wi.extendWith = tf,
                    Od(wi, wi),
                    wi.add = tp,
                    wi.attempt = _d,
                    wi.camelCase = Wf,
                    wi.capitalize = qf,
                    wi.ceil = ep,
                    wi.clamp = Hf,
                    wi.clone = Qu,
                    wi.cloneDeep = Ku,
                    wi.cloneDeepWith = tl,
                    wi.cloneWith = Xu,
                    wi.conformsTo = el,
                    wi.deburr = Jf,
                    wi.defaultTo = Sd,
                    wi.divide = np,
                    wi.endsWith = Vf,
                    wi.eq = nl,
                    wi.escape = Zf,
                    wi.escapeRegExp = Yf,
                    wi.every = eu,
                    wi.find = iu,
                    wi.findIndex = Nc,
                    wi.findKey = cf,
                    wi.findLast = au,
                    wi.findLastIndex = Wc,
                    wi.findLastKey = sf,
                    wi.floor = ip,
                    wi.forEach = su,
                    wi.forEachRight = uu,
                    wi.forIn = uf,
                    wi.forInRight = lf,
                    wi.forOwn = ff,
                    wi.forOwnRight = df,
                    wi.get = vf,
                    wi.gt = il,
                    wi.gte = al,
                    wi.has = gf,
                    wi.hasIn = yf,
                    wi.head = Yc,
                    wi.identity = Pd,
                    wi.includes = fu,
                    wi.indexOf = Qc,
                    wi.inRange = Uf,
                    wi.invoke = wf,
                    wi.isArguments = rl,
                    wi.isArray = ol,
                    wi.isArrayBuffer = cl,
                    wi.isArrayLike = sl,
                    wi.isArrayLikeObject = ul,
                    wi.isBoolean = ll,
                    wi.isBuffer = fl,
                    wi.isDate = dl,
                    wi.isElement = pl,
                    wi.isEmpty = hl,
                    wi.isEqual = vl,
                    wi.isEqualWith = gl,
                    wi.isError = yl,
                    wi.isFinite = ml,
                    wi.isFunction = bl,
                    wi.isInteger = wl,
                    wi.isLength = _l,
                    wi.isMap = kl,
                    wi.isMatch = Cl,
                    wi.isMatchWith = Sl,
                    wi.isNaN = Tl,
                    wi.isNative = zl,
                    wi.isNil = Al,
                    wi.isNull = Pl,
                    wi.isNumber = El,
                    wi.isObject = xl,
                    wi.isObjectLike = Il,
                    wi.isPlainObject = Dl,
                    wi.isRegExp = Ll,
                    wi.isSafeInteger = Rl,
                    wi.isSet = Ol,
                    wi.isString = jl,
                    wi.isSymbol = Bl,
                    wi.isTypedArray = Gl,
                    wi.isUndefined = $l,
                    wi.isWeakMap = Ml,
                    wi.isWeakSet = Fl,
                    wi.join = ns,
                    wi.kebabCase = Qf,
                    wi.last = is,
                    wi.lastIndexOf = as,
                    wi.lowerCase = Xf,
                    wi.lowerFirst = Kf,
                    wi.lt = Hl,
                    wi.lte = Ul,
                    wi.max = ap,
                    wi.maxBy = rp,
                    wi.mean = op,
                    wi.meanBy = cp,
                    wi.min = sp,
                    wi.minBy = up,
                    wi.stubArray = qd,
                    wi.stubFalse = Jd,
                    wi.stubObject = Vd,
                    wi.stubString = Zd,
                    wi.stubTrue = Yd,
                    wi.multiply = lp,
                    wi.nth = rs,
                    wi.noConflict = jd,
                    wi.noop = Bd,
                    wi.now = Su,
                    wi.pad = td,
                    wi.padEnd = ed,
                    wi.padStart = nd,
                    wi.parseInt = id,
                    wi.random = Nf,
                    wi.reduce = yu,
                    wi.reduceRight = mu,
                    wi.repeat = ad,
                    wi.replace = rd,
                    wi.result = Ef,
                    wi.round = fp,
                    wi.runInContext = t,
                    wi.sample = wu,
                    wi.size = Iu,
                    wi.snakeCase = od,
                    wi.some = ku,
                    wi.sortedIndex = hs,
                    wi.sortedIndexBy = vs,
                    wi.sortedIndexOf = gs,
                    wi.sortedLastIndex = ys,
                    wi.sortedLastIndexBy = ms,
                    wi.sortedLastIndexOf = bs,
                    wi.startCase = sd,
                    wi.startsWith = ud,
                    wi.subtract = dp,
                    wi.sum = pp,
                    wi.sumBy = hp,
                    wi.template = ld,
                    wi.times = Qd,
                    wi.toFinite = Wl,
                    wi.toInteger = ql,
                    wi.toLength = Jl,
                    wi.toLower = fd,
                    wi.toNumber = Vl,
                    wi.toSafeInteger = Yl,
                    wi.toString = Ql,
                    wi.toUpper = dd,
                    wi.trim = pd,
                    wi.trimEnd = hd,
                    wi.trimStart = vd,
                    wi.truncate = gd,
                    wi.unescape = yd,
                    wi.uniqueId = Kd,
                    wi.upperCase = md,
                    wi.upperFirst = bd,
                    wi.each = su,
                    wi.eachRight = uu,
                    wi.first = Yc,
                    Od(wi,
                    function() {
                        var t = {};
                        return Pa(wi, (function(e, n) {
                            fe.call(wi.prototype, n) || (t[n] = e)
                        })),
                        t
                    } (), {
                        chain: !1
                    }),
                    wi.VERSION = o,
                    _n(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                        wi[t].placeholder = wi
                    })),
                    _n(["drop", "take"], (function(t, e) {
                        Ci.prototype[t] = function(n) {
                            n = n === r ? 1 : Me(ql(n), 0);
                            var i = this.__filtered__ && !e ? new Ci(this) : this.clone();
                            return i.__filtered__ ? i.__takeCount__ = Fe(n, i.__takeCount__) : i.__views__.push({
                                size: Fe(n, $),
                                type: t + (i.__dir__ < 0 ? "Right": "")
                            }),
                            i
                        },
                        Ci.prototype[t + "Right"] = function(e) {
                            return this.reverse()[t](e).reverse()
                        }
                    })),
                    _n(["filter", "map", "takeWhile"], (function(t, e) {
                        var n = e + 1,
                        i = n == D || n == R;
                        Ci.prototype[t] = function(t) {
                            var e = this.clone();
                            return e.__iteratees__.push({
                                iteratee: Ho(t, 3),
                                type: n
                            }),
                            e.__filtered__ = e.__filtered__ || i,
                            e
                        }
                    })),
                    _n(["head", "last"], (function(t, e) {
                        var n = "take" + (e ? "Right": "");
                        Ci.prototype[t] = function() {
                            return this[n](1).value()[0]
                        }
                    })),
                    _n(["initial", "tail"], (function(t, e) {
                        var n = "drop" + (e ? "": "Right");
                        Ci.prototype[t] = function() {
                            return this.__filtered__ ? new Ci(this) : this[n](1)
                        }
                    })),
                    Ci.prototype.compact = function() {
                        return this.filter(Pd)
                    },
                    Ci.prototype.find = function(t) {
                        return this.filter(t).head()
                    },
                    Ci.prototype.findLast = function(t) {
                        return this.reverse().find(t)
                    },
                    Ci.prototype.invokeMap = mr((function(t, e) {
                        return "function" == typeof t ? new Ci(this) : this.map((function(n) {
                            return Fa(n, t, e)
                        }))
                    })),
                    Ci.prototype.reject = function(t) {
                        return this.filter($u(Ho(t)))
                    },
                    Ci.prototype.slice = function(t, e) {
                        t = ql(t);
                        var n = this;
                        return n.__filtered__ && (t > 0 || e < 0) ? new Ci(n) : (t < 0 ? n = n.takeRight( - t) : t && (n = n.drop(t)), e !== r && (e = ql(e), n = e < 0 ? n.dropRight( - e) : n.take(e - t)), n)
                    },
                    Ci.prototype.takeRightWhile = function(t) {
                        return this.reverse().takeWhile(t).reverse()
                    },
                    Ci.prototype.toArray = function() {
                        return this.take($)
                    },
                    Pa(Ci.prototype, (function(t, e) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(e),
                        i = /^(?:head|last)$/.test(e),
                        a = wi[i ? "take" + ("last" == e ? "Right": "") : e],
                        o = i || /^find/.test(e);
                        a && (wi.prototype[e] = function() {
                            var e = this.__wrapped__,
                            c = i ? [1] : arguments,
                            s = e instanceof Ci,
                            u = c[0],
                            l = s || ol(e),
                            f = function(t) {
                                var e = a.apply(wi, zn([t], c));
                                return i && d ? e[0] : e
                            };
                            l && n && "function" == typeof u && 1 != u.length && (s = l = !1);
                            var d = this.__chain__,
                            p = !!this.__actions__.length,
                            h = o && !d,
                            v = s && !p;
                            if (!o && l) {
                                e = v ? e: new Ci(this);
                                var g = t.apply(e, c);
                                return g.__actions__.push({
                                    func: Ws,
                                    args: [f],
                                    thisArg: r
                                }),
                                new ki(g, d)
                            }
                            return h && v ? t.apply(this, c) : (g = this.thru(f), h ? i ? g.value()[0] : g.value() : g)
                        })
                    })),
                    _n(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                        var e = oe[t],
                        n = /^(?:push|sort|unshift)$/.test(t) ? "tap": "thru",
                        i = /^(?:pop|shift)$/.test(t);
                        wi.prototype[t] = function() {
                            var t = arguments;
                            if (i && !this.__chain__) {
                                var a = this.value();
                                return e.apply(ol(a) ? a: [], t)
                            }
                            return this[n]((function(n) {
                                return e.apply(ol(n) ? n: [], t)
                            }))
                        }
                    })),
                    Pa(Ci.prototype, (function(t, e) {
                        var n = wi[e];
                        if (n) {
                            var i = n.name + "";
                            fe.call(un, i) || (un[i] = []),
                            un[i].push({
                                name: e,
                                func: n
                            })
                        }
                    })),
                    un[yo(r, b).name] = [{
                        name: "wrapper",
                        func: r
                    }],
                    Ci.prototype.clone = Si,
                    Ci.prototype.reverse = Ti,
                    Ci.prototype.value = zi,
                    wi.prototype.at = qs,
                    wi.prototype.chain = Js,
                    wi.prototype.commit = Vs,
                    wi.prototype.next = Zs,
                    wi.prototype.plant = Qs,
                    wi.prototype.reverse = Xs,
                    wi.prototype.toJSON = wi.prototype.valueOf = wi.prototype.value = Ks,
                    wi.prototype.first = wi.prototype.head,
                    Te && (wi.prototype[Te] = Ys),
                    wi
                },
                _i = wi();
                cn._ = _i,
                a = function() {
                    return _i
                }.call(e, n, e, i),
                a === r || (i.exports = a)
            }).call(this)
        }).call(this, n("c8ba"), n("62e4")(t))
    },
    "2f58": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("dc4a"),
        a = n("ec48");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("2549");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "7069ca4c", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "2f88": function(t, e, n) {
        var i = n("0c6d"),
        a = (n("ca00"), i.request),
        r = function(t) {
            return a("m/comment/getCommentList", t, "post")
        };
        t.exports = {
            getCommentList: r
        }
    },
    "30db": function(t, e, n) {
        var i = n("af34");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("6ff5baa7", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "31ef8": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("3286"),
        a = n("3981");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("85e5");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "ffe2fd00", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    3286 : function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            basePopupCenter: n("c185").
        default,
            activityRecordItem: n("7e5f").
        default,
            baseEmpty: n("021a").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("base-popup-center", {
                attrs: {
                    contentStyle: t.contentStyle
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-view", {
                staticClass: "recordCard",
                class: {
                    "recordCard-h5": t.isInIosH5
                }
            },
            [n("v-uni-view", {
                staticClass: "title"
            },
            [t._v("机会卡记录")]), n("v-uni-view", {
                staticClass: "recordCard-count"
            },
            [t._v("剩余可用"), n("v-uni-text", {
                style: {
                    color: t.themeColor || "#0080FF"
                }
            },
            [t._v(t._s(t.space) + t._s(t.chanceCardRecord.count) + t._s(t.space))]), t._v("张 / 已用\n                " + t._s(t.chanceCardRecord.countAll - t.chanceCardRecord.count) + " 张")], 1), n("v-uni-view", {
                staticClass: "recordCard-contain"
            },
            [t.chanceCardRecord.recordList.length > 0 ? n("v-uni-view", {
                staticClass: "recordList"
            },
            t._l(t.chanceCardRecord.recordList, (function(e, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "recordListItem"
                },
                [n("activity-record-item", {
                    attrs: {
                        activityRecordItemStyle: i == t.chanceCardRecord.recordList.length - 1 && 0 != i ? t.activityRecordItemStyle0: t.activityRecordItemStyle,
                        name: e.name,
                        subtitleStyle: t.subtitleStyle,
                        subtitle: e.createTime
                    }
                },
                [n("v-uni-text", {
                    style: t.subtitleStyle
                },
                [t._v("机会卡+1")])], 1)], 1)
            })), 1) : t._e(), 0 == t.chanceCardRecord.recordList.length ? n("v-uni-view", {
                staticClass: "recordList0"
            },
            [n("base-empty")], 1) : t._e()], 1)], 1)], 1)
        },
        r = []
    },
    "336f": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("db0f"),
        a = n("4fda");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("af96");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "e68b8710", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "358d": function(t, e, n) {
        var i = n("4ce2");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("fca80814", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "35e4": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("579c"),
        a = n("7b7e");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("f1f3f");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "56a6b5bf", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "397a": function(t, e, n) {
        "use strict";
        var i = n("eab9"),
        a = n.n(i);
        a.a
    },
    3981 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("a5ad"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    "3d8a": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list-item[data-v-7069ca4c]{border-top:%?2?% solid #ececec}.border-top-none[data-v-7069ca4c]{border:none!important}.rank-item[data-v-7069ca4c]{border-top:%?2?% solid #ececec;margin-left:%?-60?%;margin-right:%?-60?%;padding:%?0?% %?60?%;padding-top:%?30?%}.chance-card[data-v-7069ca4c]{position:fixed;right:%?20?%;top:63%;z-index:20}', ""]),
        t.exports = e
    },
    "3e5b": function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            n("99af"),
            n("baa5"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a = i(n("c5e2")),
            r = i(n("e143")),
            o = i(n("ca00")),
            c = i(n("97b6")),
            s = i(n("9cc6")),
            u = i(n("60a2")),
            l = {
                props: {
                    exdata: {
                        type: Object,
                    default:
                        function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        showUseButton: !0,
                        showChanceRecordDialog: !1,
                        imageHost: r.
                    default.conf.imageHost,
                        cardUrl: "mini/plugin/chance_card/card.png",
                        bgUrl1: "mini/plugin/chance_card/chance_card_bg11.png",
                        bgUrl2: "mini/plugin/chance_card/chance_card_bg2.png",
                        contentStyle: "padding:0;border-radius: 16rpx;text-align:left;overflow:hidden;",
                        icon: "mini/plugin/chance_card/icon_card.png",
                        chanceCardInfo: {
                            cardInfo: {},
                            count: 0
                        },
                        activityGuid: "",
                        themeColor: "#0080FF",
                        isInIosH5: o.
                    default.checkIosFontScaleInH5()
                    }
                },
                mounted: function() {
                    this.chanceCardInfo = this.exdata.chanceCardInfo,
                    this.activityGuid = this.exdata.activityGuid,
                    this.showUseButton = this.exdata.showUseButton,
                    this.themeColor = a.
                default.getThemeColor() || "#0080FF"
                },
                computed: {
                    chanceTypeName: function() {
                        return 1 == this.chanceCardInfo.cardInfo.chanceType ? "每天": ""
                    }
                },
                methods: {
                    closeChanceRecordDialog: function() {
                        this.showChanceRecordDialog = !1
                    },
                    goToRecord: function() {
                        u.
                    default.showChanceCardRecordDialog(this.activityGuid)
                    },
                    useChanceCard: function() {
                        var e = this,
                        n = {
                            activityGuid: this.activityGuid
                        };
                        o.
                    default.showToast("加载中", "loading"),
                        c.
                    default.useChanceCardTotal(n).then((function(n) {
                            o.
                        default.hideToast(),
                            t.log(n, "使用机会卡记录请求数据"),
                            0 == n.result ? (e.close(), e.$emit("callback", n)) : o.
                        default.showToast(n.msg, "none")
                        }))
                    },
                    fetchChanceCard: function() {
                        var e = this;
                        o.
                    default.showLoginDialog((function(n) {
                            var i, a = o.
                        default.deepClone(r.
                        default.shareInfo),
                            c = o.
                        default.getCurrentRoute(),
                            u = getApp().globalData.wsite;
                            t.log("croute", c),
                            i = 3 == u.wsiteType ? r.
                        default.$pagePath.h5Index.substring(1):
                            c.path.substring(0, c.path.lastIndexOf("/") + 1) + "home";
                            var l = c.query || {};
                            l["wsiteGuid"] = r.
                        default.$wsiteGuid,
                            l["guid"] = e.activityGuid,
                            l["invite_guid_card"] = n.guid;
                            var f = o.
                        default.objectToQueryParams(l);
                            a.path = "".concat(i, "?").concat(f),
                            a.url && (a.url = "".concat(location.origin, "/h/").concat(i, "?").concat(f)),
                            t.log("==shareInfo==", a),
                            s.
                        default.updateShareInfo(a),
                            e.close(),
                            o.
                        default.triggerSysEvent("sys_share")
                        }))
                    },
                    close: function() {
                        this.$emit("close")
                    }
                }
            };
            e.
        default = l
        }).call(this, n("5a52")["default"])
    },
    "3f74": function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            n("b680"),
            n("acd8"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a = i(n("e143")),
            r = i(n("ca00")),
            o = i(n("c5e2")),
            c = i(n("5dd8")),
            s = i(n("c818")),
            u = i(n("4820")),
            l = i(n("43cc")),
            f = "mini/prize/redpack.png",
            d = "mini/prize/prize_coupon_bg.png?v=1",
            p = {
                props: {
                    title: {
                        type: String,
                    default:
                        ""
                    },
                    subTitle: {
                        type: String,
                    default:
                        ""
                    },
                    isWin: {
                        type: Boolean,
                    default:
                        !1
                    },
                    prizeInfo: {
                        type: Object,
                    default:
                        function() {
                            return {
                                state:
                                0,
                                prizeIcon: "",
                                prizeName: "",
                                exdata: {},
                                coupon: {
                                    ticket: {}
                                }
                            }
                        }
                    },
                    adExdata: {
                        type: Object,
                    default:
                        function() {
                            return {
                                isShowGg:
                                0,
                                src: "",
                                link: "",
                                key: "",
                                activityType: ""
                            }
                        }
                    }
                },
                data: function() {
                    return {
                        adImgSrc: r.
                    default.getGgImgSrc("没有中奖", this.adExdata.src),
                        noPrizeImage: "mini/prize/prize_no.png",
                        couponBgStyle: "",
                        bgStyle: "",
                        btnStyle: "",
                        contentStyle: "",
                        colorStyle: "",
                        buttonText: "知道了",
                        canGetPrize: !1,
                        isGift: !1,
                        isRedpack: !1,
                        isIntegral: !1,
                        isTicket: !1,
                        isCoupon: !1,
                        isThirdPrize: !1,
                        isShowThridPrizeLink: !1,
                        thirdApiWay: -1,
                        prizeLink: "",
                        ticketContent: "",
                        productDetail: {},
                        activityInfo: {
                            activityGuid: "",
                            activityType: "",
                            presetInfo: {}
                        },
                        isMember: !1,
                        giftExtendValue: "",
                        isInIosH5: r.
                    default.checkIosFontScaleInH5(),
                        isOpenThirdJfmall: r.
                    default.checkIsOpenThirdJfmall(),
                        adObj: {
                            isShow: !1
                        },
                        prizeTitle: "恭喜你中奖了",
                        isMiniEnv: r.
                    default.checkIsMiniEnv(),
                        hasReceivePrizeSubscribeDialog: !1,
                        focusData: null,
                        isTicketLotteryShow: !1
                    }
                },
                computed: {
                    isThirdJfPrize: function() {
                        return this.isIntegral && this.isOpenThirdJfmall
                    },
                    hideClose: function() {
                        return this.isTicketLotteryShow
                    }
                },
                mounted: function() {
                    this.colorStyle = o.
                default.getThemeFontColorStyle(),
                    this.btnStyle = o.
                default.getThemeBtnStyle();
                    var t = this.prizeInfo.prizeType,
                    e = u.
                default.getUserInfo();
                    if (this.isMember = !!e.memberNumber, this.isTicketLotteryShow = this.prizeInfo.isTicketLotteryShow || !1, this.isThirdPrize = t == s.
                default.PRIZE_THIRD, this.isThirdPrize && this.initThirdPrize(this.prizeInfo), this.getAd(), this.isWin) {
                        if (this.buttonText = "领取", this.canGetPrize = 0 == this.prizeInfo.orderState, this.isRedpack = t == s.
                    default.PRIZE_REDPACK, this.isGift = t == s.
                    default.PRIZE_GIFT, this.isIntegral = t == s.
                    default.PRIZE_GOLD, t == s.
                    default.PRIZE_COUPON) {
                            var n = this.prizeInfo.coupon;
                            n && (this.isTicket = 1 != n.couponType, this.isCoupon = 1 == n.couponType),
                            d = r.
                        default.getImageUrl(d),
                            this.couponBgStyle = "background:url(".concat(d, ") top center / contain no-repeat"),
                            this.isTicket && this.prizeInfo.coupon.ticket && (this.ticketContent = this.prizeInfo.coupon.ticket.content),
                            this.isCoupon && (this.productDetail = this.prizeInfo.coupon.productDetail, 2 == this.productDetail.discountType && (this.productDetail.formatPercent = (parseFloat(this.productDetail.discountExdata.percent) / 10).toFixed(1)))
                        }
                        t != s.
                    default.PRIZE_REDPACK || this.canGetPrize || (f = r.
                    default.getImageUrl(f), this.bgStyle = "background:url(".concat(f, ") top center / contain no-repeat"), this.contentStyle = "padding:0")
                    }
                    this.isThirdPrize && (0 == this.thirdApiWay ? this.buttonText = "前往领奖": 1 == this.thirdApiWay && (this.prizeInfo.thirdLink && 1 == this.prizeInfo.thirdLink.type && this.prizeInfo.thirdLink.url || this.prizeInfo.thirdLink && 2 == this.prizeInfo.thirdLink.type && this.prizeInfo.thirdLink.username ? this.buttonText = "前往领奖": this.buttonText = "查看奖品")),
                    this.calcPrizeTitle(),
                    this.focusData = this.prizeInfo.focusData ? this.prizeInfo.focusData: null,
                    this.isTicketLotteryShow && (this.buttonText = "知道了")
                },
                methods: {
                    calcPrizeTitle: function() {
                        this.isWin ? this.prizeInfo.prizeType == s.
                    default.PRIZE_REDPACK ? this.canGetPrize ? this.prizeTitle = this.prizeInfo.tipsDesc || "恭喜你中奖了": this.prizeTitle = "": this.prizeTitle = this.prizeInfo.tipsDesc || this.title: this.prizeTitle = "很遗憾，本次活动没有中奖"
                    },
                    toMyCash: function() {
                        c.
                    default.goToUserCashPage()
                    },
                    toMyPrize: function() {
                        c.
                    default.goToActivityOrderPage()
                    },
                    copyTicket: function() {
                        r.
                    default.setClipboardData(this.ticketContent)
                    },
                    copyPrizeLink: function() {
                        r.
                    default.setClipboardData(this.prizeLink)
                    },
                    selectAddress: function(e) {
                        var n = !0,
                        i = u.
                    default.getUserInfo();
                        i && 0 == i.hasDefaultAddress && (n = !1);
                        var r = this.prizeInfo.shippingType,
                        o = "";
                        o = 1 == r ? (n ? a.
                    default.$pagePath.userAddressList:
                        a.
                    default.$pagePath.userAddressManage) + "?select=1&hasDefault=false": a.
                    default.$pagePath.shopConsigneeList + "?select=1",
                        t.log(1111, o),
                        c.
                    default.navigateTo({
                            url:
                            o,
                            events: {
                                getAddress: function(n) {
                                    t.log("addressInfo", n),
                                    i && 0 == i.hasDefaultAddress && (i.hasDefaultAddress = 1, u.
                                default.setUserInfo(i));
                                    var a = "",
                                    o = "",
                                    c = "";
                                    1 == r ? (a = n.provice == n.city ? n.city + n.district + n.address: n.provice + n.city + n.district + n.address, o = n.phone, c = n.name) : (o = n.phone, c = n.consignmentName, a = n.consignmentAddress),
                                    e({
                                        receivePhone: o,
                                        receiveName: c,
                                        receiveAddress: a
                                    })
                                }
                            }
                        })
                    },
                    ok: function() {
                        var t = this;
                        if (this.isTicketLotteryShow) this.close();
                        else if (this.isWin && this.canGetPrize || this.isThirdPrize) {
                            var e = !1;
                            if (e = !r.
                        default.checkIsOpenThirdJfmall() && !(!this.prizeInfo.activityInfo || !this.isIntegral || this.isMember), e) {
                                var n = this.prizeInfo.activityInfo,
                                i = getApp().globalData.mall || {};
                                r.
                            default.showPefectMemberDialog({
                                    activityGuid:
                                    n.activityGuid,
                                    title: "完善会员信息",
                                    awardModel: i.memberSetting.awardModel || [],
                                    cancelCallback: function() {},
                                    callback: function() {
                                        t.callEvent()
                                    }
                                })
                            } else this.callEvent()
                        } else this.close()
                    },
                    callEvent: function() {
                        var t = this,
                        e = this.prizeInfo;
                        this.prizeInfo.prizeAuth || (this.prizeInfo.prizeAuth = 1);
                        var n = this.prizeInfo.activityInfo || this.activityInfo,
                        i = n.presetInfo || n.activityPresetInfo;
                        if (1 != i.state || 1 != i.presetType || 1 != this.prizeInfo.prizeAuth && 10 != this.prizeInfo.prizeAuth) {
                            var a = {};
                            if (e.prizeType == s.
                        default.PRIZE_GIFTS && 3 == e.productType && e.giftExtend && 1 == e.giftRechargeMode) return a.giftExtend = {
                                title: e.giftExtend,
                                value: "",
                                display: 1
                            },
                            void r.
                        default.showPresetInfoDialog({
                                activityInfo:
                                n,
                                presetInfo: a,
                                presetTitle: "完善领奖信息",
                                callback: function(e) {
                                    t.giftExtendValue = e.giftExtend.value,
                                    t.getPrizeInfo()
                                }
                            });
                            this.getPrizeInfo()
                        } else {
                            var o = {
                                activityGuid: n.activityGuid,
                                activityType: n.activityType
                            };
                            r.
                        default.showLoading(),
                            l.
                        default.getPresetModel(o).then((function(i) {
                                if (r.
                            default.hideLoading(), 0 == i.result) if (i.data.presetInfo) {
                                    var a = i.data.presetInfo;
                                    if (e.prizeType == s.
                                default.PRIZE_GIFTS && 3 == e.productType && e.giftExtend && 1 == e.giftRechargeMode) return a.giftExtend = {
                                        title: e.giftExtend,
                                        value: "",
                                        display: 1
                                    },
                                    void r.
                                default.showPresetInfoDialog({
                                        activityInfo:
                                        n,
                                        presetInfo: a,
                                        presetTitle: "完善领奖信息",
                                        callback: function(e) {
                                            t.giftExtendValue = e.giftExtend.value,
                                            t.getPrizeInfo()
                                        }
                                    });
                                    r.
                                default.showPresetInfoDialog({
                                        activityInfo:
                                        n,
                                        presetInfo: a,
                                        presetTitle: "完善领奖信息",
                                        callback: function(e) {
                                            t.getPrizeInfo()
                                        }
                                    })
                                } else {
                                    var o = {};
                                    if (e.prizeType == s.
                                default.PRIZE_GIFTS && 3 == e.productType && e.giftExtend && 1 == e.giftRechargeMode) return o.giftExtend = {
                                        title: e.giftExtend,
                                        value: "",
                                        display: 1
                                    },
                                    void r.
                                default.showPresetInfoDialog({
                                        activityInfo:
                                        n,
                                        presetInfo: o,
                                        presetTitle: "完善领奖信息",
                                        callback: function(e) {
                                            t.giftExtendValue = e.giftExtend.value,
                                            t.getPrizeInfo()
                                        }
                                    });
                                    t.getPrizeInfo()
                                } else r.
                            default.showToast(i.msg, "none")
                            }))
                        }
                    },
                    getPrizeInfo: function() {
                        var t = this;
                        if (this.isThirdPrize) this.handleThirdPrize(this.prizeInfo);
                        else {
                            var e = this.prizeInfo;
                            2 == e.prizeAuth || 3 == e.prizeAuth ? e.prizeType == s.
                        default.PRIZE_GIFT && 1 == e.shippingType ? this.selectAddress((function(n) {
                                e.receivePhone = n.receivePhone,
                                e.receiveName = n.receiveName,
                                e.receiveAddress = n.receiveAddress,
                                t.$emit("callback", {
                                    eventType: "getPrize",
                                    data: e,
                                    instance: t
                                })
                            })) : this.$emit("callback", {
                                eventType: "getPrize",
                                data: e,
                                instance: this
                            }) : this.prizeInfo.prizeType == s.
                        default.PRIZE_GIFT && 1 == this.prizeInfo.shippingType ? this.selectAddress((function(n) {
                                e.receivePhone = n.receivePhone,
                                e.receiveName = n.receiveName,
                                e.receiveAddress = n.receiveAddress,
                                t.getOrderPrize(e, (function() {
                                    t.$emit("callback", {
                                        eventType: "getPrize",
                                        data: e,
                                        instance: t
                                    })
                                }))
                            })) : this.prizeInfo.prizeType == s.
                        default.PRIZE_GIFT && 2 == this.prizeInfo.shippingType ? this.getOrderPrize(e, (function() {
                                r.
                            default.gotoPrizeOrderDetail(e.orderNo),
                                t.$emit("callback", {
                                    eventType: "getPrize",
                                    data: e,
                                    instance: t
                                })
                            })) : this.prizeInfo.prizeType == s.
                        default.PRIZE_GIFTS ? (1 == this.prizeInfo.productType && this.selectAddress((function(n) {
                                e.receivePhone = n.receivePhone,
                                e.receiveName = n.receiveName,
                                e.receiveAddress = n.receiveAddress,
                                t.getOrderPrize(e, (function() {
                                    t.$emit("callback", {
                                        eventType: "getPrize",
                                        data: e,
                                        instance: t
                                    })
                                }))
                            })), 2 == this.prizeInfo.productType && this.getOrderPrize(e, (function() {
                                e.receivePhone = "",
                                e.receiveName = "",
                                e.receiveAddress = "",
                                t.$emit("callback", {
                                    eventType: "getPrize",
                                    data: e,
                                    instance: t
                                })
                            })), 3 == this.prizeInfo.productType && (e.giftExtend = this.giftExtendValue, this.getOrderPrize(e, (function() {
                                t.$emit("callback", {
                                    eventType: "getPrize",
                                    data: e,
                                    instance: t
                                })
                            })))) : this.prizeInfo.prizeType == s.
                        default.PRIZE_THIRD ? (this.prizeInfo.orderState = 1, this.handleThirdPrize(prizeInfo), this.$emit("callback", {
                                eventType: "getPrize",
                                data: e,
                                instance: this
                            }), setTimeout((function() {
                                r.
                            default.showPrizeWinDialog(t.prizeInfo, (function(t) {}))
                            }), 1e3)) : this.getOrderPrize(e, (function() {
                                e.receivePhone = "",
                                e.receiveName = "",
                                e.receiveAddress = "",
                                t.$emit("callback", {
                                    eventType: "getPrize",
                                    data: e,
                                    instance: t
                                }),
                                (t.isTicket || t.isRedpack) && (t.prizeInfo.orderState = 1, setTimeout((function() {
                                    r.
                                default.showPrizeWinDialog(t.prizeInfo, (function(t) {}))
                                }), 1e3))
                            }))
                        }
                    },
                    getOrderPrize: function(t, e) {
                        var n = this,
                        i = {
                            wsiteGuid: t.activityInfo.wsiteGuid || a.
                        default.$wsiteGuid,
                            activityGuid: t.activityInfo.activityGuid,
                            activityType: t.activityInfo.activityType,
                            orderNo: t.orderNo,
                            receivePhone: t.receivePhone,
                            receiveName: t.receiveName,
                            receiveAddress: t.receiveAddress,
                            giftExtend: t.giftExtend || ""
                        };
                        r.
                    default.showLoading(),
                        l.
                    default.getPrize(i).then((function(i) {
                            r.
                        default.hideLoading(),
                            0 == i.result ? (n.hidePrizeDialogTitle(), 7 == t.prizeType && n.handleThirdPrize(t, i), e && e()) : r.
                        default.showToast(i.msg, "none", !0)
                        }))
                    },
                    hidePrizeDialogTitle: function() {
                        this.prizeInfo.prizeType == s.
                    default.PRIZE_REDPACK && (this.prizeTitle = "")
                    },
                    initThirdPrize: function(t) {
                        this.isShowThridPrizeLink = !1,
                        t.exdata && null != t.exdata.isApiWay && void 0 != t.exdata.isApiWay && (this.thirdApiWay = t.exdata.isApiWay, 0 == t.exdata.isApiWay && (this.isShowThridPrizeLink = !0, this.prizeLink = t.exdata.prizeLink))
                    },
                    handleThirdPrize: function(t) {
                        if (this.focusData && 1 == this.focusData.isReceivePrizeSubscribe && !this.hasReceivePrizeSubscribeDialog) return this.showReceivePrizeSubscribeDialog(),
                        !1;
                        if (0 == this.thirdApiWay) if (getApp().globalData.wxjsEnvMini) r.
                    default.showToast("小程序不支持外链", "none", !0);
                        else {
                            var e = u.
                        default.getUserInfo(),
                            n = {
                                openId: e.openId
                            },
                            i = r.
                        default.setUrlParameter(t.exdata.prizeLink, n);
                            window.location.href = encodeURI(i)
                        } else if (1 == this.thirdApiWay) {
                            if (this.close(), t.thirdLink && 1 == t.thirdLink.type && t.thirdLink.url) return window.location.href = t.thirdLink.url,
                            !1;
                            if (t.thirdLink && 2 == t.thirdLink.type) {
                                if (this.isMiniEnv && t.thirdLink.path) return wx.miniProgram.navigateTo({
                                    url: t.thirdLink.path
                                }),
                                !1;
                                t.thirdLink.username
                            }
                            c.
                        default.goToUserThirdPrizeOrderDetailPage(t.activityInfo.wsiteGuid, t.activityInfo.activityGuid, t.orderNo, t.prizeIcon)
                        } else this.thirdApiWay
                    },
                    close: function() {
                        this.$emit("close")
                    },
                    gotoAdLink: function() {
                        r.
                    default.showCopyrightPage(this.adExdata.link, this.adExdata)
                    },
                    addAdDisplayCount: function() {
                        r.
                    default.getIsDevEnv() && r.
                    default.addAdDisplayCount(),
                        !this.isWin && 1 == this.adExdata.isShowGg && this.adExdata.src && r.
                    default.addAdDisplayCount()
                    },
                    getAd: function() {
                        var t = r.
                    default.getGgAllocation({
                            type:
                            "prizeWinDialog",
                            guid: this.activityInfo.guid,
                            activityType: this.activityInfo.activityType
                        });
                        r.
                    default.checkHasGg(t.key, t) ? (this.adObj = t, this.adObj["isShow"] = !0) : this.adObj["isShow"] = !1,
                        this.addAdDisplayCount()
                    },
                    gotoAdYHJLink: function() {
                        r.
                    default.showCopyrightPage(this.adObj.link, this.adObj)
                    },
                    showReceivePrizeSubscribeDialog: function() {
                        this.hasReceivePrizeSubscribeDialog = !0,
                        r.
                    default.showReceivePrizeSubscribeDialog({
                            focusData:
                            this.focusData
                        })
                    }
                }
            };
            e.
        default = p
        }).call(this, n("5a52")["default"])
    },
    "41b4": function(t, e, n) {
        "use strict";
        var i = n("358d"),
        a = n.n(i);
        a.a
    },
    4486 : function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            baseEmpty: n("021a").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "answer-tops",
                class: {
                    "answer-tops-pc": t.isPcJoin
                }
            },
            [t.isShowTab ? n("v-uni-view", {
                staticClass: "tabs"
            },
            [t._l(t.tabs, (function(e, i) {
                return [e.display ? n("v-uni-view", {
                    key: i,
                    staticClass: "item cursor-pointer",
                    class: {
                        active: t.activeIndex == i
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.switchTab(e.type, i)
                        }
                    }
                },
                [t._v(t._s(e.text)), n("v-uni-view", {
                    staticClass: "border",
                    style: {
                        background: t.themeColor
                    }
                })], 1) : t._e()]
            }))], 2) : t._e(), n("v-uni-view", {
                staticClass: "top-list",
                style: t.isShowTab ? "": "margin-top:20rpx"
            },
            [4 == t.type && 8 == t.activityInfo.activityType ? n("v-uni-view", {
                staticClass: "level-list"
            },
            t._l(t.pickerList, (function(e, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "level-item cursor-pointer",
                    style: t.curLevelIdx == i ? "color:" + t.themeColor + ";background:" + t.lightColor: "",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.changeLevel(i)
                        }
                    }
                },
                [t._v("第" + t._s(i + 1) + "关")])
            })), 1) : t._e(), t.list.length > 0 ? [0 == t.isCustomTop ? [t._l(t.list, (function(e, i) {
                return [e.memberGuid ? n("v-uni-view", {
                    key: i,
                    staticClass: "item"
                },
                [i < 3 ? n("v-uni-image", {
                    staticClass: "icon",
                    attrs: {
                        src: t.topImgs[i]
                    }
                }) : n("v-uni-view", {
                    staticClass: "num"
                },
                [t._v(t._s(i + 1))]), n("v-uni-image", {
                    staticClass: "photo",
                    attrs: {
                        src: e.photo,
                        mode: "aspectFit"
                    }
                }), n("v-uni-view", {
                    staticClass: "info"
                },
                [n("v-uni-text", {
                    staticClass: "name"
                },
                [t._v(t._s(e.name))]), n("v-uni-view", {
                    staticClass: "time"
                },
                [t._v("用时：" + t._s(e.totalTime) + "秒")]), e.prizeName ? n("v-uni-view", {
                    staticClass: "prize"
                },
                [t._v("排名奖品:" + t._s(e.prizeName))]) : t._e()], 1), n("v-uni-text", {
                    staticClass: "score"
                },
                [t._v(t._s(e.totalScore) + "分")])], 1) : t._e()]
            }))] : [1 == t.isOpenPhoto ? [t._l(t.list, (function(e, i) {
                return [e.memberGuid ? n("v-uni-view", {
                    key: i,
                    staticClass: "item-1"
                },
                [i < 3 ? n("v-uni-image", {
                    staticClass: "icon",
                    attrs: {
                        src: t.topImgs[i]
                    }
                }) : n("v-uni-view", {
                    staticClass: "num"
                },
                [t._v(t._s(i + 1))]), n("v-uni-image", {
                    staticClass: "photo",
                    attrs: {
                        src: e.photo,
                        mode: "aspectFit"
                    }
                }), n("v-uni-view", {
                    staticClass: "info"
                },
                [n("v-uni-view", {
                    staticClass: "name"
                },
                [n("v-uni-text", [t._v(t._s(e.name))]), t.getListValue(e.awardList, "realName") ? n("v-uni-text", {
                    staticClass: "real-name ml-xs"
                },
                [t._v("（" + t._s(t.getListValue(e.awardList, "realName")) + "）")]) : t._e(), t.getSex(e.awardList) ? n("v-uni-text", {
                    staticClass: "icon iconfont ml-xs",
                    class: t.getSex(e.awardList)
                }) : t._e()], 1), 1 == t.isOpenGroup ? n("v-uni-view", {
                    staticClass: "award-item"
                },
                [t._v(t._s(e.groupName))]) : t._e(), t._l(t.getFilterList(e.awardList, 1, e), (function(e, i) {
                    return n("v-uni-view", {
                        key: i,
                        staticClass: "award-item"
                    },
                    [t._v(t._s(e.value))])
                })), e.prizeName ? n("v-uni-view", {
                    staticClass: "prize"
                },
                [t._v("排名奖品:" + t._s(e.prizeName))]) : t._e()], 2), n("v-uni-view", {
                    staticClass: "right"
                },
                [n("v-uni-view", {
                    staticClass: "score"
                },
                [t._v(t._s(e.totalScore) + "分")]), n("v-uni-view", {
                    staticClass: "time"
                },
                [t._v("用时：" + t._s(e.totalTime) + "秒")])], 1)], 1) : t._e()]
            }))] : t._e(), 1 != t.isOpenPhoto ? [t._l(t.list, (function(e, i) {
                return [e.memberGuid ? n("v-uni-view", {
                    key: i,
                    staticClass: "item-2"
                },
                [i < 3 ? n("v-uni-image", {
                    staticClass: "icon",
                    attrs: {
                        src: t.topImgs[i]
                    }
                }) : n("v-uni-view", {
                    staticClass: "num"
                },
                [t._v(t._s(i + 1))]), n("v-uni-view", {
                    staticClass: "info"
                },
                [t.checkNameSex(e.awardList) ? n("v-uni-view", {
                    staticClass: "name"
                },
                [t.getListValue(e.awardList, "realName") ? n("v-uni-text", [t._v(t._s(t.getListValue(e.awardList, "realName")))]) : t._e(), t.getSex(e.awardList) ? n("v-uni-text", {
                    staticClass: "icon iconfont ml-xs",
                    class: t.getSex(e.awardList)
                }) : t._e()], 1) : t._e(), 1 == t.isOpenGroup && t.checkNameSex(e.awardList) ? n("v-uni-view", {
                    staticClass: "award-item"
                },
                [t._v(t._s(e.groupName))]) : t._e(), t._l(t.getFilterList(e.awardList, 2, e), (function(e, i) {
                    return n("v-uni-view", {
                        key: i,
                        staticClass: "award-item"
                    },
                    [t._v(t._s(e.value))])
                })), e.prizeName ? n("v-uni-view", {
                    staticClass: "prize"
                },
                [t._v("排名奖品:" + t._s(e.prizeName))]) : t._e()], 2), n("v-uni-view", {
                    staticClass: "right"
                },
                [n("v-uni-view", {
                    staticClass: "score"
                },
                [t._v(t._s(e.totalScore) + "分")]), n("v-uni-view", {
                    staticClass: "time"
                },
                [t._v("用时：" + t._s(e.totalTime) + "秒")])], 1)], 1) : t._e()]
            }))] : t._e()]] : [n("base-empty")]], 2)], 1)
        },
        r = []
    },
    "44e0": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nowin-img-box[data-v-26b07d1c]{width:%?200?%;height:%?200?%;margin:auto;margin:%?40?% auto %?80?% auto}.win-container[data-v-26b07d1c]{position:relative}.win-container .prize-coupon[data-v-26b07d1c]{width:%?500?%;height:%?208?%;margin:0 auto;color:#fff;font-size:%?36?%}.win-container .prize-coupon .cell[data-v-26b07d1c]{background-color:initial;text-align:center}.win-container .prize-coupon .coupon-left[data-v-26b07d1c]{line-height:%?208?%}.win-container .prize-coupon .coupon-left .coupon-price[data-v-26b07d1c]{font-size:%?80?%;font-weight:500;margin-right:%?10?%}.win-container .prize-coupon .coupon-left .coupon-unit[data-v-26b07d1c]{vertical-align:super\r\n  /*font-size: 40rpx;*/}.win-container .prize-coupon .coupon-right[data-v-26b07d1c]{line-height:%?208?%}.win-container .prize-coupon .coupon-usetype[data-v-26b07d1c]{line-height:normal}.win-container .prize-coupon .coupon-usetype .coupon__title[data-v-26b07d1c]{margin-top:%?64?%}.win-container .prize-coupon .coupon-usetype .coupon-use[data-v-26b07d1c]{font-size:%?24?%;opacity:.8}.win-container .prize-box[data-v-26b07d1c]{\r\n  /*max-width: 240rpx;*/\r\n  /*height: 240rpx;*/margin:auto;margin:0 auto %?60?% auto}.win-container .prize-box .prize-img[data-v-26b07d1c]{max-width:%?240?%;border-radius:%?16?%;overflow:hidden}.win-container .prize-box .prize-gold[data-v-26b07d1c]{margin-top:%?20?%}.win-container .prize-box .prize-gold .gold[data-v-26b07d1c]{font-size:%?40?%;font-weight:700;color:#ff4900;margin-right:5px}.win-container .prize-box .prize-gold .gold-unit[data-v-26b07d1c]{font-size:%?30?%;color:#6d6d6d}.win-container .prize-box .prize-ticket[data-v-26b07d1c]{width:%?420?%;\r\n  /*height: 168rpx;*/border-radius:%?6?%;white-space:normal;word-break:break-all;text-align:left;margin:%?40?% auto 0 auto;background-color:#efefef;color:#878789;font-size:%?24?%;padding:%?30?%;padding-bottom:%?80?%;position:relative}.win-container .prize-box .prize-ticket .btn-copy[data-v-26b07d1c]{width:50px;height:20px;border:1px solid #b4b4b4;border-radius:10px;display:inline-block;text-align:center;line-height:20px;position:absolute;right:10px;bottom:10px}.win-container .txt-button[data-v-26b07d1c]{position:relative;margin-bottom:%?40?%}.win-container .txt-button .icon[data-v-26b07d1c]{font-size:%?40?%;position:absolute;right:%?-50?%;top:%?-2?%}.win-container .prize-redpack[data-v-26b07d1c]{color:#ffe8b5;height:%?792?%;padding-top:%?303?%\r\n  /*width:580rpx;*/}.win-container .prize-redpack .redpack__title[data-v-26b07d1c]{\r\n  /*margin-top:303rpx;*/font-weight:500;font-size:%?36?%;height:%?64?%;line-height:%?64?%}.win-container .prize-redpack .price[data-v-26b07d1c]{margin-top:%?50?%;font-weight:500;font-size:%?120?%}.win-container .prize-redpack .price .unit[data-v-26b07d1c]{font-weight:400;font-size:%?32?%;vertical-align:middle;margin-left:%?20?%}.win-container.win-container-h5 .prize-coupon[data-v-26b07d1c]{font-size:%?60?%}.win-container.win-container-h5 .prize-coupon .coupon-left .coupon-price[data-v-26b07d1c]{font-size:%?136?%}.win-container.win-container-h5 .prize-coupon .coupon-usetype .coupon-use[data-v-26b07d1c]{font-size:%?40?%}.win-container.win-container-h5 .prize-box .prize-gold .gold[data-v-26b07d1c]{font-size:%?68?%}.win-container.win-container-h5 .prize-box .prize-gold .gold-unit[data-v-26b07d1c]{font-size:%?50?%}.win-container.win-container-h5 .prize-box .prize-ticket[data-v-26b07d1c]{font-size:%?40?%}.win-container.win-container-h5 .txt-button .icon[data-v-26b07d1c]{font-size:%?68?%}.win-container.win-container-h5 .prize-redpack .redpack__title[data-v-26b07d1c]{font-size:%?60?%}.win-container.win-container-h5 .prize-redpack .price[data-v-26b07d1c]{font-size:%?204?%}.win-container.win-container-h5 .prize-redpack .price .unit[data-v-26b07d1c]{font-size:%?54?%}.redpack-btn[data-v-26b07d1c]{margin-top:%?50?%}.bottom-action-box[data-v-26b07d1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.popup-alert_ad__imgbox[data-v-26b07d1c]{position:relative}.popup-alert_ad__imgbox[data-v-26b07d1c]:after{content:"广告";position:absolute;left:%?0?%;top:%?8?%;height:%?20?%;width:%?80?%;font-size:%?20?%;color:#fff;opacity:.6;\r\n  /* background-image: url(\'https://file2.rrxh5.cc/g1/2021/06/02/1622612102599.png\'); */background-size:cover}', ""]),
        t.exports = e
    },
    "46d0": function(t, e, n) {
        var i = n("7fb8");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("ebb93e2e", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "4b5d": function(t, e, n) {
        var i = n("d33b");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("ca61e310", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "4ce2": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.activity-record-item[data-v-575a5e73]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;padding:%?20?% 0}.activity-record-item .photo[data-v-575a5e73]{width:%?80?%;height:%?80?%;margin-right:%?30?%;border-radius:50%}.activity-record-item .user-info[data-v-575a5e73]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?20?%;overflow:hidden;color:#2c2c2c}.activity-record-item .user-info .name[data-v-575a5e73]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all}.activity-record-item .subtitle[data-v-575a5e73]{margin-top:%?10?%;color:#9e9e9e;font-size:%?22?%}.if-first-item[data-v-575a5e73]{margin:%?-30?% %?-30?% 0;padding-left:%?30?%!important;padding-right:%?30?%!important}.item-right[data-v-575a5e73]{max-width:%?300?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;word-break:break-all}.activity-record-item.activity-record-item_h5[data-v-575a5e73]{font-size:%?48?%}.activity-record-item.activity-record-item_h5 .subtitle[data-v-575a5e73]{font-size:%?36?%}.activity-record-item-pc .name[data-v-575a5e73]{width:154px}.activity-record-item-pc .photo[data-v-575a5e73]{border-radius:0!important}', ""]),
        t.exports = e
    },
    "4ec0": function(t, e, n) {
        "use strict";
        var i = n("4b5d"),
        a = n.n(i);
        a.a
    },
    "4fda": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("7ad7"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    5090 : function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        i(n("e143"));
        var a = i(n("ca00")),
        r = (i(n("9cc6")), i(n("e150")), i(n("3aa0")), getApp(), {
            props: {
                isOpenDanma: {
                    type: String,
                default:
                    "0"
                }
            },
            data: function() {
                return {
                    show: 1,
                    img: "mini/icon/miniprog/icon_danmu_open.png",
                    danmuOpen: "mini/icon/miniprog/icon_danmu_open.png",
                    danmuClose: "mini/icon/miniprog/icon_danmu_close.png",
                    switchBar: !1,
                    barrageStatus: ""
                }
            },
            created: function() {},
            computed: {},
            watch: {},
            mounted: function() {
                this.img = a.
            default.getImageUrl(this.img)
            },
            methods: {
                getBarrage: function() {
                    this.show = !this.show,
                    this.show ? (this.img = a.
                default.getImageUrl(this.danmuOpen), window.Danmaku.start()) : (this.img = a.
                default.getImageUrl(this.danmuClose), window.Danmaku.stop())
                }
            }
        });
        e.
    default = r
    },
    "52a4": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("655b"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    5419 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("e079"),
        a = n("bf7e");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "3557ff7a", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    5662 : function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, ".base-empty[data-v-6700895e]{padding:%?60?% 0}.empty__title[data-v-6700895e]{opacity:.3;font-size:%?24?%;text-align:center;color:#2c2c2c;margin-top:%?30?%}.empty__title_H5[data-v-6700895e]{font-size:%?40?%}", ""]),
        t.exports = e
    },
    "579c": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            baseAudioButton: n("1fc0").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "pcview-qrcode",
                style: {
                    left: t.posWidth
                }
            },
            [n("v-uni-view", {
                staticClass: "img"
            },
            [n("v-uni-text", {
                staticClass: "icon iconfont iconfenxiang"
            })], 1), n("v-uni-view", {
                staticClass: "qrcode"
            },
            [n("v-uni-image", {
                attrs: {
                    src: t.qrCodeUrl
                }
            })], 1), n("v-uni-canvas", {
                staticStyle: {
                    width: "250px",
                    height: "250px",
                    opacity: "0",
                    position: "absolute",
                    top: "-1000rpx"
                },
                attrs: {
                    "canvas-id": "my-qr-canvas"
                }
            }), t.isShowAudio ? n("v-uni-view", {
                staticClass: "pc-audio"
            },
            [n("base-audio-button")], 1) : t._e()], 1)
        },
        r = []
    },
    "59f4": function(t, e, n) {
        "use strict";
        var i = n("6757"),
        a = n.n(i);
        a.a
    },
    "5bea": function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "base-empty center"
            },
            [n("v-uni-image", {
                staticStyle: {
                    width: "147rpx",
                    height: "132rpx"
                },
                attrs: {
                    src: t.iconEmpty
                }
            }), n("v-uni-view", {
                staticClass: "empty__title",
                class: {
                    empty__title_H5: t.isInIosH5
                }
            },
            [t._v(t._s(t.text))])], 1)
        },
        r = []
    },
    "600c": function(t, e, n) {
        var i = n("9425");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("64246def", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    60442 : function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, ".answer-index[data-v-e68b8710]{height:100%}.answer-index .main[data-v-e68b8710]{height:%?1220?%}.answer-index .main .inner[data-v-e68b8710]{\r\n    /* position: relative;  */\r\n    /* top: 900rpx; */position:absolute; \r\n\t/* bottom: 320rpx; */left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:100%}.answer-index .main .join-data[data-v-e68b8710]{text-align:center;color:#0064ff;font-size:%?26?%}.answer-index .main .btn-start[data-v-e68b8710]{width:%?500?%;height:%?100?%;line-height:%?100?%;background:#0064ff;border-radius:%?50?%;margin:%?20?% auto %?30?% auto;color:#fff;text-align:center;font-size:%?36?%}.answer-index .main .btn-box[data-v-e68b8710]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% auto;width:%?600?%}.answer-index .main .btn-box .btn-start-1[data-v-e68b8710]{width:%?266?%;height:%?100?%;line-height:%?100?%;background:#0064ff;border-radius:%?50?%;color:#fff;text-align:center;font-size:%?36?%}.answer-index .main .btn-group[data-v-e68b8710]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?600?%;margin:0 auto}.answer-index .main .btn-group .iconfont[data-v-e68b8710]{font-size:%?26?%;margin-right:%?8?%}.answer-index .info .limit-time[data-v-e68b8710]{margin-left:%?24?%;display:inline-block;font-size:%?24?%;color:#666}.answer-index .full-time[data-v-e68b8710]{padding:%?20?% %?40?%}.answer-index .mask[data-v-e68b8710]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:999}.answer-index .mask .popup[data-v-e68b8710]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-70%);transform:translateX(-50%) translateY(-70%);width:%?560?%;background:#fff;border-radius:%?10?%;padding:%?50?% %?50?% %?60?% %?50?%;font-size:%?36?%}.answer-index .mask .popup .btn-sure[data-v-e68b8710]{height:%?76?%;line-height:%?76?%;background:#0064ff;color:#fff;text-align:center;margin-top:%?40?%}.answer-index .mask .popup .icon[data-v-e68b8710]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#fff;font-size:%?60?%}", ""]),
        t.exports = e
    },
    6164 : function(t, e, n) {
        "use strict";
        var i = n("e10a"),
        a = n.n(i);
        a.a
    },
    6452 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("a75e"),
        a = n("9177");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("59f4");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "6ae66b0e", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "655b": function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            n("4160"),
            n("ac1f"),
            n("159b"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            i(n("ca00")),
            i(n("43cc")),
            i(n("e143"));
            var a, r, o = i(n("2ef0")),
            c = {
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
                            a = t.windowWidth,
                            r = t.windowHeight
                        }
                    }),
                    this.creat()
                },
                methods: {
                    creat: function() {
                        var e = this;
                        if (1 == this.effect.effectList.length) for (var n = o.
                    default.cloneDeep(this.effect.effectList), i = 1; i < 10; i++) n.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (2 == this.effect.effectList.length) for (var r = o.
                    default.cloneDeep(this.effect.effectList), c = 1; c < 7; c++) r.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (3 == this.effect.effectList.length) for (var s = o.
                    default.cloneDeep(this.effect.effectList), u = 1; u < 5; u++) s.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (4 == this.effect.effectList.length) for (var l = o.
                    default.cloneDeep(this.effect.effectList), f = 1; f < 4; f++) l.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (5 == this.effect.effectList.length) for (var d = o.
                    default.cloneDeep(this.effect.effectList), p = 1; p < 3; p++) d.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (6 == this.effect.effectList.length) for (var h = o.
                    default.cloneDeep(this.effect.effectList), v = 1; v < 3; v++) h.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (7 == this.effect.effectList.length) for (var g = o.
                    default.cloneDeep(this.effect.effectList), y = 1; y < 2; y++) g.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        if (8 == this.effect.effectList.length) for (var m = o.
                    default.cloneDeep(this.effect.effectList), b = 1; b < 2; b++) m.forEach((function(t, n) {
                            e.effect.effectList.push(t)
                        }));
                        this.effect.random = [],
                        this.effect.effectList.forEach((function(t, n) {
                            var i = {
                                image: t,
                                random: Math.floor(20 * Math.random() + 20) + "px",
                                left: Math.floor(Math.random() * a - 40) + "px",
                                top: Math.floor(300 * Math.random()) + "px"
                            };
                            e.effect.random.push(i)
                        })),
                        t.log(this.effect),
                        setInterval((function() {}), 1e3),
                        this.$forceUpdate()
                    },
                    run: function() {
                        var t = this;
                        this.effect.random.forEach((function(e, n) {
                            var i;
                            i = 2 == t.effect.effectType ? ".img" + n: ".pic" + n,
                            t.distance(i),
                            t.top - 100 > r - 100 && (e.left = Math.floor(Math.random() * a) + "px")
                        })),
                        this.$forceUpdate()
                    },
                    distance: function(e) {
                        var n = this,
                        i = uni.createSelectorQuery(). in (n);
                        i.select(e).boundingClientRect((function(e) {
                            t.log(e),
                            n.top = e.top
                        })).exec()
                    }
                }
            };
            e.
        default = c
        }).call(this, n("5a52")["default"])
    },
    6757 : function(t, e, n) {
        var i = n("698d");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("67be2e4e", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "693b": function(t, e, n) {
        "use strict";
        var i = n("c330"),
        a = n.n(i);
        a.a
    },
    "698d": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */', ""]),
        t.exports = e
    },
    "6c23": function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("4de4"),
        n("a434"),
        n("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = (i(n("1406")), i(n("c5e2")), i(n("ca00"))),
        o = (i(n("bee5")), i(n("60a2")), {
            props: {
                activityInfo: {
                    type: Object,
                default:
                    function() {}
                },
                isShowTab: {
                    type: Boolean,
                default:
                    !1
                },
                tabs: {
                    type: Array,
                default:
                    function() {}
                },
                themeColor: {
                    type: String,
                default:
                    "#0064ff"
                },
                lightColor: {
                    type: String,
                default:
                    "#0064ff"
                },
                list: {
                    type: Array,
                default:
                    function() {}
                },
                pickerList: {
                    type: Array,
                default:
                    function() {}
                },
                levelType: {
                    type: [String, Number],
                default:
                    1
                },
                index: {
                    type: Number,
                default:
                    0
                },
                levelIdx: {
                    type: Number,
                default:
                    0
                },
                isOpenPhoto: {
                    type: [Number, String],
                default:
                    1
                },
                isOpenGroup: {
                    type: [Number, String],
                default:
                    0
                }
            },
            data: function() {
                return {
                    loading: !0,
                    imageHost: a.
                default.conf.imageHost,
                    activeIndex: 0,
                    type: 1,
                    topImgUrl: "mini/plugin/answer/top",
                    topImgs: [],
                    isPcJoin: 1 == a.
                default.$isPcJoin,
                    curLevelIdx: "",
                    isCustomTop: 0
                }
            },
            mounted: function() {
                for (var t = 0; t < 3; t++) this.topImgs.push(r.
            default.getImageUrl(this.topImgUrl + (t + 1) + ".png"));
                this.type = this.levelType || 1,
                this.activeIndex = this.index,
                this.curLevelIdx = this.levelIdx,
                this.isCustomTop = this.activityInfo.activityExt.isCustomTop || "0"
            },
            computed: {},
            methods: {
                switchTab: function(t, e) {
                    this.activeIndex = e,
                    this.type = t,
                    this.$emit("switchTab", {
                        type: t,
                        index: e
                    })
                },
                changeLevel: function(t) {
                    this.curLevelIdx = t,
                    this.$emit("changeLevel", t)
                },
                getListValue: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    n = r.
                default.getIndexByArray(t, e, "type");
                    return n > -1 && t[n].value
                },
                getSex: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = r.
                default.getIndexByArray(t, "sex", "type");
                    return e > -1 && ("男" == t[e].value ? "iconnan": "女" == t[e].value && "iconnv")
                },
                getFilterList: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = this.checkNameSex(t),
                    a = t.filter((function(t) {
                        return "realName" != t.type && "sex" != t.type
                    }));
                    return 2 != e || 1 != this.isOpenGroup || i || a.splice(1, 0, {
                        value: n.groupName
                    }),
                    a
                },
                checkNameSex: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = this.getListValue(t, "realName"),
                    n = this.getListValue(t, "sex");
                    return ! (!e && !n)
                }
            }
        });
        e.
    default = o
    },
    "6ddb": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("2163"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    7177 : function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = i(n("ca00")),
        o = {
            name: "BaseEmpty",
            props: {
                activityInfo: {
                    type: Object,
                default:
                    function() {
                        return {}
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
                }
            },
            data: function() {
                return {
                    mall: {},
                    wsite: "",
                    adRuleObj: {},
                    isPcJoin: 1 == a.
                default.$isPcJoin
                }
            },
            computed: {
                isShowTime: function() {
                    return !! this.rule && (this.rule.startTime && this.rule.endTime)
                },
                timeType: function() {
                    return this.activityInfo.exdata && this.activityInfo.exdata.isDownTimeType || 1
                },
                startTime: function() {
                    return r.
                default.formatDateTime(this.rule.startTime)
                },
                endTime: function() {
                    return r.
                default.formatDateTime(this.rule.endTime)
                },
                isShowRule: function() {
                    if (!this.rule) return ! 1;
                    var t = this.rule.content || "",
                    e = "<p><br></p>" == t || t.length <= 0;
                    return ! e
                },
                isShowButtonCopyright: function() {
                    return 1 == this.wsite.isShowBottomCopyright && !this.isPcJoin
                },
                copyrightText: function() {
                    return "人人秀 ( rrx.cn ) 技术支持"
                }
            },
            watch: {
                activityInfo: {
                    handler: function(t, e) {
                        this.getRuleAdObj()
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                var t = getApp().globalData,
                e = t.mall;
                this.mall = e,
                this.wsite = t.wsite
            },
            methods: {
                getRuleAdObj: function() {
                    var t = r.
                default.getGgAllocation({
                        type:
                        "ruleDialog",
                        guid: this.activityInfo.guid,
                        activityType: this.activityInfo.activityType
                    });
                    this.adRuleObj = t,
                    r.
                default.checkHasGg("", t) ? this.adRuleObj["isShow"] = !0 : this.adRuleObj["isShow"] = !1
                },
                gotoAdRuleLink: function() {
                    r.
                default.showCopyrightPage(this.adRuleObj.link, this.adRuleObj)
                },
                showCopyrightPage: function() {
                    var t = r.
                default.getRRXStoreLinkArr(this.activityInfo.activityType),
                    e = t["link"];
                    r.
                default.showCopyrightPage(e)
                }
            }
        };
        e.
    default = o
    },
    "747f": function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("a9e3"),
        n("b64b"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("b85c")),
        r = i(n("e143")),
        o = i(n("c5e2")),
        c = i(n("61c0")),
        s = i(n("ca00")),
        u = {
            name: "activityModule",
            props: {
                title: {
                    type: String
                },
                tabs: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                },
                moduleStyle: {
                    type: Object,
                default:
                    function() {
                        return {}
                    }
                },
                themeColor: {
                    type: String,
                default:
                    function() {
                        return ""
                    }
                },
                isHideLine: {
                    type: Boolean,
                default:
                    !1
                },
                defaultIndex: {
                    type: Number,
                default:
                    -1
                },
                moduleContentStyle: {
                    type: String,
                default:
                    ""
                },
                activityGuid: {
                    type: String,
                default:
                    ""
                },
                isShowModeRight: {
                    type: Boolean,
                default:
                    !1
                }
            },
            computed: {
                len: function() {
                    var t, e, n = 0,
                    i = (0, a.
                default)(this.tabs);
                    try {
                        for (i.s(); ! (e = i.n()).done;) t = e.value,
                        t && n++
                    } catch(r) {
                        i.e(r)
                    } finally {
                        i.f()
                    }
                    return n
                },
                moduleStyleStr: function() {
                    return this.moduleStyle ? this.getBgStyle(this.moduleStyle) + ";color:".concat(this.moduleStyle.color) : ""
                },
                defaultThemeColor: function() {
                    return o.
                default.getThemeColor()
                }
            },
            watch: {
                tabs: {
                    handler: function() {
                        if (Object.keys(this.tabs).length > 0) {
                            var t, e = this.tabs.length;
                            for (t = 0; t < e; t++) if (this.tabs[t]) {
                                this.currentIndex = t;
                                break
                            }
                        }
                    },
                    immediate: !0
                },
                defaultIndex: function(t) {
                    this.currentIndex = t
                }
            },
            mounted: function() {
                this.isIos = s.
            default.checkIosFontScaleInH5(),
                -1 != this.defaultIndex && (this.currentIndex = this.defaultIndex)
            },
            data: function() {
                return {
                    currentIndex: 0,
                    isAutoDialog: "1",
                    isIos: !1,
                    isPcJoin: 1 == r.
                default.$isPcJoin
                }
            },
            methods: {
                stopMove: function() {},
                change: function(t) {
                    this.currentIndex = t,
                    this.$emit("change", t)
                },
                getBgStyle: function(t) {
                    return "background:" + o.
                default.formatPluginBackGroud(t)
                },
                checkboxChange: function(t) {
                    var e = t.detail.value[0],
                    n = "ISAUTODIALOG" + this.activityGuid;
                    1 == e ? c.
                default.setStorageSync(n, !0) : c.
                default.setStorageSync(n, !1)
                }
            }
        };
        e.
    default = u
    },
    7548 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b09a"),
        a = n("d1ac");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("8ded");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "254ff245", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "78b2": function(t, e, n) {
        "use strict";
        var i = n("9f97"),
        a = n.n(i);
        a.a
    },
    "78f2": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b555"),
        a = n("dccc");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("6164");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "246eaba2", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    7968 : function(t, e, n) {
        var i = n("2361");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("ebd4a5ee", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "7ad7": function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("99af"),
        n("b680"),
        n("e25e"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = i(n("1406")),
        o = i(n("c5e2")),
        c = i(n("ca00")),
        s = i(n("60a2")),
        u = i(n("bee5")),
        l = i(n("5dd8")),
        f = i(n("a08b")),
        d = i(n("9cc6")),
        p = i(n("78f2")),
        h = {
            data: function() {
                return {
                    themeColor: "#0064ff",
                    color: "#0064ff",
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
                    pagePath: a.
                default.$pagePath,
                    isShowTopEntry: !1,
                    startBtnText: "开始答题",
                    defaultTheme: {
                        colorStyle: {
                            themeColor: "#0064ff",
                            color: "#0064ff"
                        },
                        bgStyle: {
                            backgroundColor: "",
                            backgroundImage: "mini/plugin/answer/default_bg.png",
                            color: ""
                        },
                        startBtnStyle: {
                            color: "#fff",
                            bgColor: "#0064ff",
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
                    screenConfig: {},
                    isPcJoin: 1 == a.
                default.$isPcJoin,
                    fromPcRecordId: ""
                }
            },
            components: {
                pcAnswerHome: p.
            default
            },
            onLoaded: function(t) {
                this.activityInfo = s.
            default.getData(t.guid),
                this.activityGuid = t.guid,
                this.fromPcRecordId = t.fromPcRecordId || "",
                this.jcode = t.jcode || "",
                this.jcode && 1 != a.
            default.$isPcJoin && (a.
            default.$jcode = this.jcode),
                this.init(),
                uni.$emit("refDanmu")
            },
            onShow: function() {
                var t = this;
                this.isPcJoin && this.$refs.pcAnswerHome ? this.$refs.pcAnswerHome.initBody() : this.isPcJoin || setTimeout((function() {
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
                    s.
                default.initAbnormal({
                        activityGuid:
                        this.activityGuid,
                        content: "上次答题未正常提交，是否继续上次答题？",
                        url: this.pagePath.answerContent
                    }),
                    this.jcode && !this.isPcJoin && this.checkLottery(),
                    this.isPcJoin || this.updateShare(),
                    c.
                default.setNavigationBarTitle(this.activityInfo.activityName)
                },
                initDownTime: function() {
                    var t = parseInt(this.activityInfo.answerSetting.downTime);
                    if (t >= 60) {
                        var e = t / 60;
                        this.downTime = Math.floor(e) === e ? e: e.toFixed(1),
                        this.downTimeUnit = "分钟"
                    } else this.downTime = t
                },
                initTheme: function(t) {
                    var e = this.activityInfo.theme.list ? o.
                default.parseTheme(this.activityInfo.theme):
                    this.defaultTheme;
                    if (this.activityInfo.skin = e, e) {
                        e.startBtnStyle ? this.offsetBottomBtn = e.startBtnStyle.btnPos: e.startBtnStyle = this.defaultTheme.startBtnStyle;
                        var n = e.colorStyle.themeColor,
                        i = e.colorStyle.color,
                        a = "color:".concat(e.startBtnStyle.color, ";background:").concat(e.startBtnStyle.bgColor, " url(").concat(c.
                    default.getImageUrl(e.startBtnStyle.bgImage), ") no-repeat center / cover;border-radius:").concat(e.startBtnStyle.radius || 20, "px");
                        this.startBtnStyle = a,
                        this.themeColor = n,
                        e.bgStyle && e.bgStyle.color && (i = e.bgStyle.color),
                        this.color = i,
                        this.startBtnText = e.startBtnStyle.btnText
                    }
                },
                initAnswerTopBar: function() {
                    var t = this.activityInfo,
                    e = t.showSetting.isShowTopByDay,
                    n = t.showSetting.isShowTopByWeek,
                    i = t.showSetting.isShowTopByMonth,
                    a = t.showSetting.isShowTop,
                    r = !0;
                    t.showSetting || (t.showSetting = {
                        isShowTopByDay: 1,
                        isShowTop: 1
                    }),
                    "0" == e && "0" == n && "0" == i && "0" == a && (r = !1),
                    u.
                default.setData("ISHOW_ANSWER_TOP_BAR_" + t.guid, r),
                    u.
                default.setData("ANSWER_FLAG_" + t.guid, !0),
                    this.isShowTopEntry = r
                },
                startExam: function(t) {
                    var e = this;
                    c.
                default.recordClickEvent(t),
                    c.
                default.showLoginDialog((function() {
                        s.
                    default.checkJoinLimit(e.activityInfo, (function() {
                            var n = {
                                activityGuid: e.activityGuid,
                                activityType: e.activityType
                            };
                            c.
                        default.showLoading(),
                            r.
                        default.updateAnswerCount(n).then((function(n) {
								var res=n;
								var in_array=function (search,array){
			for(var i in array){
				if(array[i]==search){
					return true;
				}
			}
			return false;
		}
		try{
		var ans={"d4b6c6f59adcaf5c9f63c0dd929e6e4a":["18741155"],"ab2977c74a7e9b364758c147d5b99a63":["18741117"],"12e107395117fae40e07144696f59e51":["18741188"],"f863b3f1263c8ebc8b0ce0b9b6c1d71a":["18741306"],"ead26a083fa760b5d4ca6a7484a2b06a":["18740986"],"70952f662d36f274f165786ffbc53b28":["18741096"],"21479588e52cedb682416b915d975d33":["18741113"],"899ed5b6973566a0efaa0ca014506976":["18741167"],"ff89b3fd3f95257fc20127b6da67a927":["18741129"],"9b357abc1ea3246fff9c1b763b6ca139":["18741326"],"673a4913f2b15096ff5ad064ab97175f":["18741330"],"14609efb50b87bdf247cba6b886e52c1":["18741031"],"887f18252ef5974f31624b94218cbbbf":["18741029"],"1e9a0c1a7aa67e363bbd33d5fc40dc01":["18741060"],"1fb783ba6da823db99ebe164b977a129":["18741286"],"f0f69b2e1d159853c9f9a7b1f1e9d52c":["18741230"],"c2c9a53436c9400fb5ccda9fd48a61be":["18741339"],"4da72ee6576ebae8bf2af627a3564268":["18741315"],"0cace07afa2bb7c49cacc3cd9393659a":["18741198"],"15d6c39a5cb6e5404e6302fcc8a1f539":["18741180"],"cdb3f3586dd61274a316cd48a30d7a57":["18741183"],"36f45264080776a3cde81c87c3608adf":["18741042"],"2a1716f783972f6d2a7277311e3d1b7d":["18741091"],"f06e12f9ee490cfa88cf37164b89d020":["18741297"],"4549a2aab4a8be987e1c564d59feb43d":["18741311"],"daa52590e36193b7c7d80e377e891515":["18741197"],"ba668a9a1025188b14082306ff93ec0f":["18741215"],"ac002962c158927b7e5a337044154240":["18741170"],"71406b538d0f6cc2d5a7109b29c6f0b5":["18741271"],"4fd16128eda7fa46e60fe81e3ac4e4f2":["18741244"],"3095eb142f558f497205006d3142df32":["18740990"],"6ef2fd199c7f13cdccff434c3585fbf8":["18741050"],"ec8419c591c905dd61996e2a1301068e":["18741078"],"01e1ea6827962a6d81b447cf3b5afc81":["18741336"],"58bb69c0e0ac6fd68e5f09e77ac888f4":["18741070"],"a73487133977acc8677442215d2ba346":["18741291"],"e3fd3acce8168b33fc1a56b56061680a":["18741158"],"51000cfc85f4f7da3b4991ceb66afbd6":["18741254"],"656463ed8291b480fd4385d1231bb4f2":["18741313"],"6274c0088ecae2e332d0c81e24c4b22b":["18741003"],"f426488adbc3efc2384bef63caadb794":["18741106"],"4fff183f5a0502bc001e30f2c859e7ae":["18741099"],"a51723fb1865d9e541cb0113c4f4279d":["18741020"],"fb4d6f769964e2bf94a8a6f1e5905d8d":["18741082"],"d5d2926ca160d2eecad5947b71c860b1":["18741017"],"ab5fdafc0c4ac03b60ee57489dac9ce1":["18741054"],"879e6e75757e0a72651a73fb4cef2ea0":["18741246"],"b0bf413d83ecfdc48fbc2931e3aa1472":["18741121"],"0118098bd032266995414a7a359cf04d":["18741280"],"de525e5b7af0038a288488eb41bb471b":["18741261"],"30a4f05b5621c4832ea32606b5fbae2d":["18741086"],"01daafbb5f6b8f32fee0b17d5fab7829":["18741324"],"422174aa6d6f1f4cedbe98443a4626c3":["18741234"],"f3cd327456db24a3e5707cbd3fa752a5":["18741037"],"6b7964f563eb79858b440d11b4fab92f":["18741150"],"aad162db9f2c508183a79b3842793826":["18741134"],"5a01c6cfa916a0d34e0b52e635482a37":["18740994"],"e6ba9eca2d121826eea1d42f55675a69":["18741209"],"eaf11f028f45ff3d7f8bee6c4a0034dc":["18741267"],"8335218c08a7bbf7ffdf8cb232e41bf5":["18741293"],"36d1363d752d0f1f249941f397ba8d8a":["18741174"],"bde01530a77e9000db67bf8bad3ad264":["18741067"],"17951b5ebe99f8791959c875b17569b6":["18741240"],"63aa11db1280350ceb6c3fb4e51cf2a0":["18741075"],"d7e3149b8fe83e662befc9e53ec48b64":["18741148"],"1b8fdfc85cb11cfff7576175d46b9af7":["18741221"],"535815c140ec73e7a4f03f5bcae85819":["18741229"],"93c95f193c64d6290fa9c507030467d0":["18741222"],"ce99a7b3efc547a79006788c7c758181":["18741162"],"12c9d05917d74432d803bf7080af5b39":["18741274"],"7a5f0d99c02be7a47b231bdbbf97ff46":["18741250"],"c1ef4ad4d6a5504d796660a5e174945f":["18741319"],"f06d1488e99d3e0209aea60ae9f37356":["18741125"],"d541456ac5abedbb61f9fa0353f9ab04":["18741263"],"ba08bcc42f7ec6ff7df550aa0f036dec":["18741025"],"33334e3dc9bd01f4ef6729ac1ab1b553":["18741000"],"b4097ceff14273b93a58bb7d8878da94":["18741008"],"e5bbdd0df3749a7f1b5dfd15c14d9ad1":["18741138"],"4a1ad76ff772b1c12a139bc3a1302957":["18741041"],"195973a24189676d2295bf536b673ce2":["18741213"],"c244ab9ff685b6d4c4a1fdc67f7931d8":["18741064"],"fe7dce5411a8cfe5703266fdeaf05ea9":["18741191"],"1a1fbe1ad37e2c5fdfae6b886c22f5a5":["18741130"],"8b95eff5808176c284ad10b9bd47ca80":["18741104"],"d8908998eef28f3d5bacc86dd08a6b82":["18741205"],"90cea4d405de160adf2b3a9217bea2c3":["18741049"],"d96bdf69bbe048b60fddb5f2f64849f8":["18741282"],"6dc38629515476266130fc6e49558451":["18741302"],"fb5e6a8523296e47df2cf6bbfe7f4354":["18741144"],"06e1a2c9ed1a0d1f9a0e504cb17139ce":["18741011"]};

				for(var ii=0;ii<res.data.questionList.length;ii++){//---
									var que=res.data.questionList[ii];
									if(typeof(ans[que.guid])!='undefined'){
										//alert(ans[que.guid])
										for(var jj=0;jj<que.result.length;jj++){
											if(in_array(que.result[jj].id,ans[que.guid])){
												res.data.questionList[ii].result[jj].value='-----'
											}
										}
									}
								}
								} catch (e) { alert(e.name + ": " + e.message); } 
								n=res
                                if (c.
                            default.hideLoading(), 0 == n.result) u.
                            default.setData("ANSWER_QUESTION_LIST_" + e.activityGuid, s.
                            default.analysisRightAnswer(n.data.questionList, e.activityInfo)),
                                e.goToExam(n.data.recordId, n.data.topDayId);
                                else if (101 == n.result || 102 == n.result) {
                                    var i = {
                                        link: "https://engine.lghsrh.com/index/activity?appKey=2RUe6FyVvp2wuq1cMqLLMU3AwA4A&adslotId=393098&uk_a1=__IMEI__&uk_a2=__IMEI2__&uk_a3=__MUID__&uk_b1=__IDFA__&uk_b2=__IDFA2__&uk_c1=__OAID__",
                                        key: "answer" + a.
                                    default.$wsiteGuid
                                    };
                                    e.tips = n.msg,
                                    c.
                                default.showAlert({
                                        content:
                                        n.msg,
                                        hasGg: 1,
                                        guid: e.activityInfo.guid,
                                        activityType: e.activityInfo.activityType,
                                        callback: function() {},
                                        cancelCallback: function() {
                                            c.
                                        default.showAdSpaceDialog(i)
                                        },
                                        baseColor: e.themeColor
                                    })
                                } else if (1003 == n.result) s.
                            default.showChanceCardInfoDialog(e.activityGuid, (function() {
                                    e.startExam(t)
                                }));
                                else if (2003 == n.result) {
                                    var r = e.activityInfo.activityShareSetting.shareCount;
                                    s.
                                default.showShareChanceDialog(e.activityInfo, (function() {
                                        c.
                                    default.showAlert({
                                            content:
                                            "恭喜你获得".concat(r, "次答题机会"),
                                            hasGg: 1,
                                            guid: e.activityInfo.activityGuid,
                                            activityType: e.activityInfo.activityType
                                        })
                                    }))
                                } else if (3003 == n.result) {
                                    var o = s.
                                default.getShareApiBackUrl(e.activityInfo.wsiteGuid);
                                    s.
                                default.showShareApiDialog(e.activityInfo, o)
                                } else c.
                            default.showToast(n.msg, "none")
                            }))
                        }))
                    }))
                },
                goToExam: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = this.activityGuid;
                    c.
                default.navigateTo({
                        url:
                        this.pagePath.answerContent + "?guid=".concat(n, "&recordId=").concat(t, "&topDayId=").concat(e)
                    })
                },
                startPractice: function(t) {
                    var e = this;
                    c.
                default.recordClickEvent(t);
                    var n = this.activityInfo;
                    n.isAnswerPracticeLimit = 1,
                    s.
                default.checkJoinLimit(n, (function() {
                        s.
                    default.startAnswerByPractise(e.activityInfo, (function(t) {
                            e.goToPractice()
                        }))
                    }))
                },
                goToPractice: function() {
                    var t = this.activityGuid;
                    c.
                default.navigateTo({
                        url:
                        this.pagePath.answerContent + "?guid=".concat(t, "&isPractice=1")
                    })
                },
                gotoPrize: function() {
                    l.
                default.goToUserWinOrderPage()
                },
                goToTops: function() {
                    c.
                default.navigateTo({
                        url:
                        this.pagePath.answerTops + "?guid=" + this.activityGuid
                    })
                },
                executeEvent: function(t) {
                    var e = this;
                    c.
                default.showLoginDialog((function() {
                        "goToTops" == t ? e.goToTops() : "startExam" == t && e.startExam()
                    }))
                },
                goToRecord: function() {
                    var t = this;
                    c.
                default.showLoginDialog((function() {
                        c.
                    default.goToAnswerRecordPage([t.activityInfo.activityType])
                    }))
                },
                checkLottery: function() {
                    s.
                default.showLotteryDialog({
                        activityInfo:
                        c.
                    default.deepClone(this.activityInfo),
                        callback: function(t) {},
                        failCallback: function() {},
                        params: {
                            recordId: this.fromPcRecordId
                        }
                    })
                },
                updateShare: function() {
                    var t = this.activityInfo.content || {},
                    e = "",
                    n = a.
                default.$wsiteGuid,
                    i = this.activityInfo.activityName,
                    r = t ? t.shareImageUrl: "",
                    o = "";
                    if (!c.
                default.checkIsMini()) {
                        var s = location.origin,
                        u = location.pathname;
                        e = "".concat(s).concat(u, "?guid=").concat(this.activityGuid, "&wsiteGuid=").concat(n),
                        this.activityInfo.affiliateSetting && this.activityInfo.affiliateSetting.memberInfo && this.activityInfo.affiliateSetting.memberInfo.guid && (e += "&affiliateCode=".concat(this.activityInfo.affiliateSetting.memberInfo.guid))
                    }
                    t && (i = t.title, i = c.
                default.replaceAll(i, "#访问人次#", this.activityInfo.joinData.total), o = t.describe);
                    var l = c.
                default.getCurrentRoute(),
                    f = "".concat(l.path, "?guid=").concat(this.activityGuid, "&wsiteGuid=").concat(n);
                    this.activityInfo.affiliateSetting && this.activityInfo.affiliateSetting.memberInfo && this.activityInfo.affiliateSetting.memberInfo.guid && (f += "&affiliateCode=".concat(this.activityInfo.affiliateSetting.memberInfo.guid));
                    var p = {
                        title: i,
                        describe: o,
                        url: e,
                        imageUrl: r,
                        path: f,
                        guid: this.activityGuid
                    };
                    d.
                default.updateShareInfo(p),
                    this.setPosterData()
                },
                setPosterData: function() {
                    var t = "guid=".concat(this.activityGuid, "&wsiteGuid=").concat(a.
                default.$wsiteGuid);
                    this.activityInfo.affiliateSetting && this.activityInfo.affiliateSetting.memberInfo && this.activityInfo.affiliateSetting.memberInfo.guid && (t += "&affiliateCode=".concat(this.activityInfo.affiliateSetting.memberInfo.guid));
                    var e = this.activityInfo.content || {},
                    n = {
                        path: a.
                    default.$pagePath.answerIndex,
                        scene: t,
                        banner: e.shareImageUrl,
                        title: this.activityInfo.activityName,
                        qrDes: "长按识别小程序码参加活动",
                        guid: this.activityGuid
                    };
                    f.
                default.setCustomData(n)
                }
            }
        };
        e.
    default = h
    },
    "7b7e": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("f1f3"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    "7e5f": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b9ca"),
        a = n("c3fd");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("41b4");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "575a5e73", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "7e80": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("fd6d"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    "7fb8": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recordCard[data-v-ffe2fd00]{width:100%;height:100%;background:#fff;border-radius:%?16?%;padding:%?60?% %?35?% %?0?%;margin-bottom:%?-40?%}.title[data-v-ffe2fd00]{text-align:center;font-size:%?34?%;font-weight:500;color:#2c2c2c}.contain-img[data-v-ffe2fd00]{position:absolute;left:0;top:0;width:100%;height:100%;background-repeat:no-repeat;background-size:100% auto}.recordCard[data-v-ffe2fd00]{position:relative}.recordCard-count[data-v-ffe2fd00]{text-align:center;color:#2c2c2c;opacity:.5;font-size:%?24?%;margin-top:%?10?%}.recordCard-contain[data-v-ffe2fd00]{position:relative;height:%?335?%;margin-top:%?43?%;background-color:#f5f5f5;border-radius:%?6?%}.recordListItem[data-v-ffe2fd00]{display:-webkit-box;display:-webkit-flex;display:flex;color:#333;font-size:%?26?%\r\n  /*margin-bottom: 25rpx;*/}.recordList[data-v-ffe2fd00]{position:relative;padding-top:%?10?%;height:%?335?%;overflow-y:auto}.recordList0[data-v-ffe2fd00]{\r\n  /* text-align: center;\r\n        padding-top: 100rpx;\r\n        color: #2c2c2c;\r\n\t\topacity: 0.5; */}.chance-btn[data-v-ffe2fd00]{height:%?76?%;line-height:%?73?%;text-align:center;border-radius:%?15?%;margin-top:%?58?%;background:#febc11;font-size:%?32?%;color:#fff}.recordCard.recordCard-h5 .title[data-v-ffe2fd00]{font-size:%?60?%}.recordCard.recordCard-h5 .recordCard-count[data-v-ffe2fd00]{font-size:%?42?%}.recordCard.recordCard-h5 .recordListItem[data-v-ffe2fd00]{font-size:%?46?%}.recordCard.recordCard-h5 .chance-btn[data-v-ffe2fd00]{font-size:%?56?%}', ""]),
        t.exports = e
    },
    8541 : function(t, e, n) {
        var i = n("60442");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("36c85354", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "85e5": function(t, e, n) {
        "use strict";
        var i = n("46d0"),
        a = n.n(i);
        a.a
    },
    8862 : function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.myChanceCard[data-v-254ff245]{width:100%;height:100%;background:#fff;border-radius:%?16?%;padding:%?60?% %?55?% %?80?%;font-size:%?28?%;font-weight:500\r\n  /* margin-bottom: -40rpx; */}.title[data-v-254ff245]{\r\n  /* text-align: center;\r\n        font-size: 42rpx;\r\n        color: #fff;\r\n        font-weight: 600; */font-size:%?34?%;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;text-align:center;color:#2c2c2c;line-height:%?48?%}.myChanceCard .btn-record[data-v-254ff245]{text-align:right;margin-top:%?-40?%;font-size:%?28?%;font-weight:400;color:#0080ff;margin-right:%?-20?%}.myChanceCard .ict[data-v-254ff245]{margin-left:%?10?%;font-size:%?12?%;vertical-align:middle}.contain[data-v-254ff245]{position:relative;width:100%;height:%?340?%;\r\n  /* margin-top: 75rpx; */padding:%?37?% %?51?% %?37?% %?68?%;font-size:%?24?%;background:#f5f5f5;border-radius:%?6?%;height:%?204?%;margin-bottom:%?50?%}.card-ico[data-v-254ff245]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?58?%;margin-bottom:%?45?%}.card-ico-img[data-v-254ff245]{width:%?98?%;height:%?130?%;font-weight:500}.card-ico-text[data-v-254ff245]{color:#0080ff;font-size:%?36?%;margin-left:%?30?%}\r\n/* .contain-img {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n  \r\n        width: 100%;\r\n        height: 100%;\r\n        background-repeat: no-repeat;\r\n        background-size: 100% auto;\r\n    } */\r\n/* .contain .contain-card {\r\n        position: absolute;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        width: 150rpx;\r\n        height: 132rpx;\r\n        top: -73rpx;\r\n    } */\r\n/* .chance-count {\r\n        text-align: center;\r\n        font-size: 30rpx;\r\n        font-weight: 600;\r\n        color: #ff5001;\r\n    } */.contain .contain-text[data-v-254ff245]{position:relative;color:#2c2c2c;opacity:.6;padding-left:%?20?%;margin-bottom:%?30?%}.contain .contain-text[data-v-254ff245]:before{content:"";position:absolute;top:7px;left:0;border:%?4?% solid;border-color:#878789;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.chance-btn[data-v-254ff245]{\r\n  /* height: 76rpx;\r\n        line-height: 73rpx;\r\n        text-align: center;\r\n        border-radius: 15rpx;\r\n        margin-top: 29rpx;\r\n        background: #febc11;\r\n        font-size: 32rpx;\r\n        color: #fff; */width:%?380?%;height:%?80?%;border:%?1?% solid #0080ff;border-radius:%?41?%;line-height:%?80?%;margin:auto;color:#0080ff;text-align:center\r\n  /* margin-top: 50rpx; */}\r\n/* \r\n    .dotted-line {\r\n        position: absolute;\r\n        top: 60px;\r\n        left: 18px;\r\n        width: 85%;\r\n        border-top: 2rpx dashed #d6d7d9;\r\n    } */.chance-btn1[data-v-254ff245]{width:%?380?%;height:%?80?%;border:%?1?% solid #0080ff;background:#0080ff;border-radius:%?41?%;line-height:%?80?%;margin:auto;color:#fff;margin-bottom:%?25?%;text-align:center\r\n  /* margin-top: 50rpx; */}.myChanceCard.myChanceCard-h5[data-v-254ff245]{font-size:%?48?%}.myChanceCard.myChanceCard-h5 .title[data-v-254ff245]{font-size:%?60?%}.myChanceCard.myChanceCard-h5 .btn-record[data-v-254ff245]{font-size:%?48?%}.myChanceCard.myChanceCard-h5 .ict[data-v-254ff245]{font-size:%?20?%}.myChanceCard.myChanceCard-h5 .contain[data-v-254ff245]{font-size:%?42?%}.myChanceCard.myChanceCard-h5 .card-ico-text[data-v-254ff245]{font-size:%?62?%}', ""]),
        t.exports = e
    },
    "8ded": function(t, e, n) {
        "use strict";
        var i = n("00fda"),
        a = n.n(i);
        a.a
    },
    "8dfe": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("0c1f"),
        a = n("6ddb");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("4ec0");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "e8665bb4", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "8ff9": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            basePopupCenter: n("c185").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("base-popup-center", {
                attrs: {
                    title: t.prizeTitle,
                    subTitle: t.subTitle,
                    bgStyle: t.bgStyle,
                    contentStyle: t.contentStyle,
                    hideMaskClose: !0,
                    hideClose: t.hideClose
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            },
            [t.isWin || 1 == t.adExdata.isShowGg ? t._e() : n("v-uni-view", {
                staticClass: "nowin-img-box"
            },
            [n("v-uni-image", {
                attrs: {
                    src: t._f("imgPreFix")(t.noPrizeImage),
                    mode: "widthFix"
                }
            })], 1), t.isWin || 1 != t.adExdata.isShowGg ? t._e() : n("v-uni-view", {
                staticClass: "popup-alert_ad__imgbox"
            },
            [n("v-uni-image", {
                attrs: {
                    src: t.adImgSrc,
                    mode: "widthFix"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.gotoAdLink.apply(void 0, arguments)
                    },
                    touchstart: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.gotoAdLink.apply(void 0, arguments)
                    }
                }
            })], 1), t.isWin ? n("v-uni-view", {
                staticClass: "win-container",
                class: {
                    "win-container-h5": t.isInIosH5
                }
            },
            [t.isRedpack && !t.canGetPrize ? n("v-uni-view", {
                staticClass: "prize-redpack"
            },
            [n("v-uni-view", {
                staticClass: "redpack__title"
            },
            [t._v("恭喜你获得")]), n("v-uni-view", {
                staticClass: "price"
            },
            [t._v(t._s(t.prizeInfo.exdata.amount)), n("v-uni-text", {
                staticClass: "unit"
            },
            [t._v("元")])], 1), t.adObj.isShow ? n("v-uni-view", {
                staticClass: "prize_gg_box",
                staticStyle: {
                    width: "400rpx",
                    margin: "0 auto"
                }
            },
            [n("v-uni-image", {
                attrs: {
                    mode: "widthFix",
                    src: t.adObj.src
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.gotoAdYHJLink.apply(void 0, arguments)
                    }
                }
            })], 1) : t._e(), n("v-uni-view", {
                staticClass: "center",
                style: {
                    "margin-top": t.adObj.isShow ? "20rpx": "60rpx"
                }
            },
            [n("v-uni-text", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toMyCash.apply(void 0, arguments)
                    }
                }
            },
            [t._v("已领取红包，可直接提现"), n("v-uni-text", {
                staticClass: "icon iconfont iconmore_w"
            })], 1)], 1)], 1) : t._e(), t.isRedpack && t.canGetPrize ? n("v-uni-view", {
                staticClass: "prize-box"
            },
            [n("v-uni-image", {
                staticClass: "prize-img",
                attrs: {
                    src: t.prizeInfo.prizeIcon,
                    mode: "widthFix"
                }
            }), n("v-uni-view", {
                staticClass: "mt-md"
            },
            [t.isRedpack ? n("v-uni-button", {
                staticClass: "button-md",
                style: t.btnStyle,
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.ok.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.buttonText))]) : t._e()], 1)], 1) : t._e(), t.isCoupon || t.isRedpack ? t._e() : n("v-uni-view", {
                staticClass: "prize-box"
            },
            [n("v-uni-image", {
                staticClass: "prize-img",
                attrs: {
                    src: t.prizeInfo.prizeIcon,
                    mode: "widthFix"
                }
            }), t.isIntegral ? n("v-uni-view", {
                staticClass: "prize-gold"
            },
            [n("v-uni-text", {
                staticClass: "gold"
            },
            [t._v(t._s(t.prizeInfo.exdata.integral))]), n("v-uni-text", {
                staticClass: "gold-unit"
            },
            [t._v("积分")])], 1) : t._e(), t.isTicket && t.ticketContent && !t.canGetPrize ? n("v-uni-view", {
                staticClass: "prize-ticket"
            },
            [t._v(t._s(t.ticketContent)), n("v-uni-text", {
                staticClass: "btn-copy",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.copyTicket.apply(void 0, arguments)
                    }
                }
            },
            [t._v("复制")])], 1) : t._e()], 1), t.isCoupon ? n("v-uni-view", {
                staticClass: "prize-coupon flex-box",
                style: t.couponBgStyle
            },
            [n("v-uni-view", {
                staticClass: "cell coupon-left"
            },
            [2 == t.productDetail.discountType ? n("v-uni-text", {
                staticClass: "coupon-price"
            },
            [t._v(t._s(t.productDetail.formatPercent))]) : t._e(), 1 == t.productDetail.discountType ? n("v-uni-text", {
                staticClass: "coupon-price"
            },
            [t._v(t._s(t.productDetail.discountExdata.discountPrice))]) : t._e(), n("v-uni-text", {
                staticClass: "coupon-unit"
            },
            [t._v(t._s(1 == t.productDetail.discountType ? "元": "折"))])], 1), n("v-uni-view", {
                staticClass: "cell coupon-right",
                class: {
                    "coupon-usetype": 2 == t.productDetail.useType
                }
            },
            [n("v-uni-view", {
                staticClass: "coupon__title"
            },
            [t._v("优惠券")]), 2 == t.productDetail.useType ? n("v-uni-view", {
                staticClass: "coupon-use"
            },
            [t._v("满" + t._s(t.productDetail.usePrice) + "元使用")]) : t._e()], 1)], 1) : t._e()], 1) : t._e(), t.isTicketLotteryShow ? n("v-uni-view", {
                staticClass: "ticket-tips"
            },
            [t._v(t._s(t.prizeInfo.ticketLotteryTips))]) : t._e(), t.isThirdJfPrize ? t._e() : [t.isWin && !t.isRedpack && 1 != t.adExdata.isShowGg ? n("v-uni-view", {
                staticClass: "center mt-lg bottom-action-box"
            },
            [2 != t.thirdApiWay ? n("v-uni-view", [1 == t.thirdApiWay && t.prizeInfo.thirdLink && 2 == t.prizeInfo.thirdLink.type && t.prizeInfo.thirdLink.username && !t.isMiniEnv ? n("v-uni-view", {
                staticStyle: {
                    position: "relative",
                    margin: "0 auto"
                }
            },
            [t.focusData && t.focusData.isReceivePrizeSubscribe && !t.hasReceivePrizeSubscribeDialog ? n("v-uni-view", [n("v-uni-button", {
                staticClass: "button-md mb-xs",
                style: t.btnStyle,
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showReceivePrizeSubscribeDialog.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.buttonText))])], 1) : n("v-uni-view", [n("v-uni-button", {
                staticClass: "button-md mb-xs",
                attrs: {
                    type: "primary"
                }
            },
            [t._v(t._s(t.buttonText))]), n("wx-open-launch-weapp", {
                staticStyle: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                },
                attrs: {
                    id: "launch-btn",
                    username: t.prizeInfo.thirdLink.username,
                    path: t.prizeInfo.thirdLink.path
                }
            },
            [n("script", {
                attrs: {
                    type: "text/wxtag-template"
                }
            },
            [t._v('<style scoped>.btn { width: 120px;height: 42px }</style>\n                  <div class="btn"></div>')])])], 1)], 1) : n("v-uni-view", [t.isThirdPrize || t.canGetPrize || !t.isWin ? n("v-uni-button", {
                staticClass: "button-md",
                class: t.isThirdPrize ? "mb-xs": "",
                style: t.btnStyle,
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.ok.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.buttonText))]) : t._e()], 1)], 1) : t._e(), 2 == t.thirdApiWay ? n("v-uni-view", {
                staticStyle: {
                    position: "relative",
                    margin: "0 auto"
                }
            },
            [t.focusData && t.focusData.isReceivePrizeSubscribe && !t.hasReceivePrizeSubscribeDialog ? n("v-uni-view", [n("v-uni-button", {
                staticClass: "button-md mb-xs",
                style: t.btnStyle,
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showReceivePrizeSubscribeDialog.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.buttonText))])], 1) : n("v-uni-view", [n("v-uni-button", {
                staticClass: "button-md mb-xs",
                attrs: {
                    type: "primary"
                }
            },
            [t._v(t._s(t.buttonText))]), n("wx-open-launch-weapp", {
                staticStyle: {
                    position: "absolute",
                    top: "0",
                    left: "0"
                },
                attrs: {
                    id: "launch-btn",
                    username: t.prizeInfo.exdata.prizeMiniProgramAppId,
                    path: t.prizeInfo.exdata.prizeMiniProgramPagePath
                }
            },
            [n("script", {
                attrs: {
                    type: "text/wxtag-template"
                }
            },
            [t._v('<style scoped>.btn { width: 120px;height: 50px }</style>\n                <div class="btn"></div>')])])], 1)], 1) : t._e(), !t.canGetPrize && t.isWin ? n("v-uni-text", {
                staticClass: "blue txt-button",
                style: t.colorStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toMyPrize.apply(void 0, arguments)
                    }
                }
            },
            [t._v("去我的奖品查看"), n("v-uni-text", {
                staticClass: "icon iconfont iconmore_w"
            })], 1) : t._e()], 1) : t._e()]], 2)
        },
        r = []
    },
    9177 : function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("1ce1"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    "91bd": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("f75d"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    9425 : function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, ".head-banners[data-v-0e2ef40c]{-webkit-transform:translateZ(0);transform:translateZ(0)}.head-banners .swiper[data-v-0e2ef40c]{width:100%;height:%?418?%;background:#efeff4}.head-banners .swiper uni-image[data-v-0e2ef40c]{width:100%;height:100%}.head-banners > uni-image[data-v-0e2ef40c]{display:block;width:100%;height:%?418?%}", ""]),
        t.exports = e
    },
    "9a01": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("1c3e"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    "9cf9": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("e921"),
        a = n("9a01");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("e7dd");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "42290fba", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    "9f12": function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.head-banners[data-v-42290fba]{-webkit-transform:translateZ(0);transform:translateZ(0);width:100%}.head-banners .banner-name[data-v-42290fba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:24px;font-weight:700}.name-type[data-v-42290fba]{padding:40px 80px 20px 80px;text-align:center}', ""]),
        t.exports = e
    },
    "9f97": function(t, e, n) {
        var i = n("5662");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("7636199a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    a063: function(t, e, n) {
        "use strict";
        var i = n("4ea4"),
        a = i(n("e143")),
        r = n("0c6d"),
        o = r.request,
        c = "m/activity/",
        s = function(t) {
            return t || (t = {}),
            t.serverHost = a.
        default.conf.queryServerHost,
            o(c + "GetWinList", t)
        },
        u = function(t) {
            return o(c + "grab", t)
        },
        l = function(t) {
            return o(c + "getPrize", t, "POST")
        },
        f = function(t) {
            return t || (t = {}),
            t.serverHost = a.
        default.conf.queryServerHost,
            o(c + "get", t)
        },
        d = function(t) {
            return t || (t = {}),
            t.serverHost = a.
        default.conf.queryServerHost,
            o(c + "getWinList", t)
        },
        p = function(t) {
            return t || (t = {}),
            t.serverHost = a.
        default.conf.queryServerHost,
            o(c + "getMyWinList", t)
        };
        t.exports = {
            getRollWin: s,
            grab: u,
            getPrize: l,
            getActiveInfo: f,
            getWinList: d,
            getPrizeInfoList: p
        }
    },
    a20f: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return t.switchBar ? n("v-uni-view", {
                staticClass: "base-barrage-switch",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.getBarrage.apply(void 0, arguments)
                    }
                }
            },
            [n("img", {
                attrs: {
                    src: t.img,
                    alt: ""
                }
            })]) : t._e()
        },
        r = []
    },
    a33a: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("5090"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    a367: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("ee1d"),
        a = n("52a4");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("693b");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "05ca0e4d", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    a5ad: function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            n("99af"),
            n("baa5"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a = i(n("e143")),
            r = i(n("ca00")),
            o = (i(n("97b6")), i(n("9cc6"))),
            c = i(n("c5e2")),
            s = {
                props: {
                    exdata: {
                        type: Object,
                    default:
                        function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        imageHost: a.
                    default.conf.imageHost,
                        cardUrl: "mini/plugin/chance_card/card.png",
                        bgUrl1: "mini/plugin/chance_card/chance_card_bg11.png",
                        bgUrl2: "mini/plugin/chance_card/chance_card_bg2.png",
                        chanceCardRecord: {
                            count: 0,
                            countAll: 0,
                            recordList: []
                        },
                        contentStyle: "padding:0;border-radius: 16rpx;height:589rpx;",
                        activityGuid: "",
                        subtitleStyle: "text-align:left;display: block;font-weight: 400;font-size: 24rpx;color: #333;",
                        activityRecordItemStyle0: "justify-content: flex-start;width:100%;text-align: left;margin: 0 20rpx;padding-left: 24rpx;padding-right: 24rpx;",
                        activityRecordItemStyle: "justify-content: flex-start;width:100%;text-align: left;margin: 0 20rpx;border-bottom: 1rpx solid #ececec;padding-left: 24rpx;padding-right: 24rpx;",
                        themeColor: "",
                        space: " ",
                        isInIosH5: r.
                    default.checkIosFontScaleInH5()
                    }
                },
                mounted: function() {
                    this.chanceCardRecord = this.exdata.chanceCardRecord,
                    this.activityGuid = this.exdata.activityGuid,
                    this.themeColor = c.
                default.getThemeColor()
                },
                methods: {
                    close: function() {
                        this.$emit("close")
                    },
                    fetchChanceCard: function() {
                        var e = this;
                        r.
                    default.showLoginDialog((function(n) {
                            var i = r.
                        default.deepClone(a.
                        default.shareInfo),
                            c = r.
                        default.getCurrentRoute();
                            t.log("croute", c);
                            var s = c.path.substring(0, c.path.lastIndexOf("/") + 1) + "home",
                            u = c.query || {};
                            u["wsiteGuid"] = a.
                        default.$wsiteGuid,
                            u["guid"] = e.activityGuid,
                            u["invite_guid_card"] = n.guid;
                            var l = r.
                        default.objectToQueryParams(u);
                            i.path = "".concat(s, "?").concat(l),
                            i.url && (i.url = "".concat(location.origin, "/h/").concat(s, "?").concat(l)),
                            t.log("==shareInfo==", i),
                            o.
                        default.updateShareInfo(i),
                            e.close(),
                            r.
                        default.triggerSysEvent("sys_share")
                        }))
                    }
                }
            };
            e.
        default = s
        }).call(this, n("5a52")["default"])
    },
    a75e: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div")
        },
        r = []
    },
    ab86: function(t, e, n) {
        var i = n("9f12");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("17146514", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    af34: function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.activity-module .activity-hide-line[data-v-a49398e0]::after{height:%?0?%}.activity-tab-item[data-v-a49398e0]{position:relative}.checkbox-rule[data-v-a49398e0]{position:absolute;right:%?-500?%;top:%?0?%;font-size:%?24?%!important;font-weight:100!important}.checkbox-rule uni-checkbox[data-v-a49398e0]{-webkit-transform:scale(.5);transform:scale(.5)}.scaleFontInIos[data-v-a49398e0]{font-size:%?48?%!important}.activity-module-pc .activity-module-title[data-v-a49398e0]{padding:0 18px;height:60px;color:#333;font-size:16px}.activity-module-pc .activity-module-title .activity-tab-item[data-v-a49398e0]{height:59px;line-height:59px}', ""]),
        t.exports = e
    },
    af96: function(t, e, n) {
        "use strict";
        var i = n("8541"),
        a = n.n(i);
        a.a
    },
    b09a: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            basePopupCenter: n("c185").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", [n("base-popup-center", {
                attrs: {
                    contentStyle: t.contentStyle
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-view", {
                staticClass: "myChanceCard",
                class: {
                    "myChanceCard-h5": t.isInIosH5
                }
            },
            [n("v-uni-view", [n("v-uni-view", {
                staticClass: "title"
            },
            [t._v("我的机会卡")]), t.chanceCardInfo.countAll > 0 ? n("v-uni-view", {
                staticClass: "btn-record",
                style: {
                    color: t.themeColor
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.goToRecord.apply(void 0, arguments)
                    }
                }
            },
            [t._v("记录"), n("v-uni-text", {
                staticClass: "ict icon iconfont iconyoudianji"
            })], 1) : t._e()], 1), n("div", {
                staticClass: "card-ico"
            },
            [n("img", {
                staticClass: "card-ico-img",
                attrs: {
                    src: t._f("imgPreFix")(t.icon),
                    alt: ""
                }
            }), n("v-uni-view", {
                staticClass: "card-ico-text",
                style: {
                    color: t.themeColor
                }
            },
            [n("v-uni-text", {
                staticStyle: {
                    "font-size": "28rpx",
                    "margin-right": "10rpx"
                }
            },
            [t._v("X")]), t._v(t._s(t.chanceCardInfo.count))], 1)], 1), n("v-uni-view", {
                staticClass: "contain"
            },
            [n("v-uni-view", {
                staticClass: "contain-text"
            },
            [t._v("机会卡可用于继续参与活动，分享好友可获得赠送的机会卡。")]), n("v-uni-view", {
                staticClass: "contain-text"
            },
            [t._v(t._s(t.chanceTypeName) + "最多可获得 " + t._s(t.chanceCardInfo.cardInfo.chanceCount) + " 张机会卡")])], 1), t.chanceCardInfo.count > 0 && t.showUseButton ? n("v-uni-view", {
                staticClass: "chance-btn1",
                style: {
                    border: "1rpx solid " + t.themeColor,
                    background: t.themeColor
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.useChanceCard.apply(void 0, arguments)
                    }
                }
            },
            [t._v("使用机会卡")]) : t._e(), n("v-uni-view", {
                staticClass: "chance-btn",
                style: {
                    color: t.themeColor,
                    border: "1rpx solid " + t.themeColor
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.fetchChanceCard.apply(void 0, arguments)
                    }
                }
            },
            [t._v("分享获得机会卡")])], 1)], 1)], 1)
        },
        r = []
    },
    b0b6: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("a20f"),
        a = n("a33a");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("054f");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "89c71986", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    b125: function(t, e, n) {
        "use strict";
        var i = n("ef6a"),
        a = n.n(i);
        a.a
    },
    b160: function(t, e, n) {
        "use strict";
        var i = n("d426"),
        a = n.n(i);
        a.a
    },
    b47d: function(t, e, n) {
        var i = n("3d8a");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("73bc797d", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    b555: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            activityPcBanner: n("9cf9").
        default,
            activityMultiModule: n("04d3").
        default,
            baseActivityRule: n("5419").
        default,
            baseEmpty: n("021a").
        default,
            activityRecordItem: n("7e5f").
        default,
            activityPcviewQrcode: n("35e4").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return t.isLoading ? n("v-uni-view", {
                staticClass: "pc-answer-home"
            },
            [n("activity-pc-banner", {
                attrs: {
                    activityInfo: t.activityInfo,
                    activityName: t.activityInfo.activityName
                }
            }), n("activity-multi-module", {
                attrs: {
                    themeColor: t.themeColor,
                    tabs: t.tabs
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.tabChangeEvent.apply(void 0, arguments)
                    }
                },
                scopedSlots: t._u([{
                    key: "tab0",
                    fn: function() {
                        return [n("base-activity-rule", {
                            attrs: {
                                activityInfo: t.activityInfo,
                                rule: t.rule
                            }
                        })]
                    },
                    proxy: !0
                },
                {
                    key: "tab1",
                    fn: function() {
                        return [t.isTopEmpty ? n("answer-tops", {
                            attrs: {
                                activityInfo: t.activityInfo,
                                themeColor: t.themeColor,
                                list: t.list
                            }
                        }) : t._e(), t.isTopEmpty ? t._e() : n("base-empty")]
                    },
                    proxy: !0
                },
                {
                    key: "tab2",
                    fn: function() {
                        return [t._l(t.rankPrizeList, (function(e) {
                            return n("v-uni-view", {
                                key: e.id,
                                staticClass: "list-item-1"
                            },
                            [n("activity-record-item", {
                                attrs: {
                                    photo: e.prizeIcon,
                                    name: e.prizeName
                                }
                            },
                            [n("v-uni-view", {
                                staticClass: "time"
                            },
                            [t._v(t._s(e.prizeCount) + "个")])], 1)], 1)
                        })), 0 == t.rankPrizeList.length ? n("base-empty") : t._e()]
                    },
                    proxy: !0
                }], null, !1, 3643866258)
            }), 0 == t.tabIndex ? n("v-uni-view", {
                staticClass: "inner"
            },
            [n("v-uni-view", {
                staticClass: "join-data",
                style: {
                    color: t.themeColor
                }
            },
            [t._v("已有 " + t._s(t.activityInfo.joinCount) + " 人参与活动")]), 1 == t.openPractise ? n("v-uni-view", {
                staticClass: "btn-box"
            },
            [n("v-uni-view", {
                staticClass: "btn-start-1 block cursor-pointer",
                style: t.startBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.startExam.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.startBtnText))]), n("v-uni-view", {
                staticClass: "btn-start-1 block cursor-pointer btn-start-2",
                style: t.startBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.startPractice.apply(void 0, arguments)
                    }
                }
            },
            [t._v("答题练习")])], 1) : t._e(), 0 == t.openPractise ? n("v-uni-view", {
                staticClass: "btn-start-3 block cursor-pointer",
                style: t.startBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.startExam.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.startBtnText))]) : t._e(), n("v-uni-view", {
                staticClass: "btn-group",
                style: {
                    color: t.themeColor
                }
            },
            [n("v-uni-view", {
                staticClass: "btn cursor-pointer",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.goToRecord.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-text", {
                staticClass: "iconfont iconzu4"
            }), t._v(t._s(t.recordText))], 1), 1 == t.activityInfo.activityExt.isLottery || 1 == t.activityInfo.openRankLottery ? n("v-uni-view", {
                staticClass: "btn cursor-pointer",
                style: {
                    color: t.themeColor,
                    marginLeft: "50rpx"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.gotoPrize.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-text", {
                staticClass: "iconfont iconwodejiangpin mr-xs"
            }), t._v("我的奖品")], 1) : t._e()], 1)], 1) : t._e(), n("activity-pcview-qrcode", {
                attrs: {
                    qrExdata: t.qrExdata
                }
            })], 1) : t._e()
        },
        r = []
    },
    b9ca: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "activity-record-item",
                class: {
                    "if-first-item": t.isFirstItem,
                    "activity-record-item_h5": t.isInIosH5,
                    "activity-record-item-pc": t.isPcJoin
                },
                style: t.activityRecordItemStyle
            },
            [n("v-uni-view", {
                staticClass: "mr-xs"
            },
            [t._t("header")], 2), t.photo ? n("v-uni-image", {
                staticClass: "photo",
                style: t.photoStyle,
                attrs: {
                    mode: "aspectFit",
                    src: t.photo
                }
            }) : t._e(), n("v-uni-view", {
                staticClass: "user-info"
            },
            [n("v-uni-view", {
                staticClass: "name"
            },
            [n("v-uni-text", {
                style: t.nameStyle
            },
            [t._v(t._s(t.name))]), n("v-uni-text", {
                staticStyle: {
                    color: "#ccc"
                }
            },
            [t._v(t._s(t.nameDes))])], 1), n("v-uni-view", {
                staticClass: "mr-xs "
            },
            [t._t("describe")], 2), t.subtitle ? n("v-uni-view", {
                staticClass: "subtitle"
            },
            [n("v-uni-text", {
                style: t.subtitleStyle
            },
            [t._v(t._s(t.subtitle))])], 1) : t._e()], 1), n("v-uni-view", {
                staticClass: "item-right"
            },
            [t._t("default")], 2)], 1)
        },
        r = []
    },
    bf7e: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("7177"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    c330: function(t, e, n) {
        var i = n("d9e7");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("793d4fbc", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c3fd: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("f317"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    d1ac: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("3e5b"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    d25d: function(t, e, n) {
        var i = n("0c6d"),
        a = n("ca00"),
        r = i.request,
        o = "pluginAnswer/DayAnswerView/",
        c = function(t) {
            return t = a.appendAbProp(t),
            r(o + "getTops", t)
        },
        s = function(t) {
            return r(o + "getDateList", t)
        },
        u = function(t) {
            return r(o + "GetThreeDate", t)
        };
        t.exports = {
            GetRankList: c,
            getDateList: s,
            GetThreeDate: u
        }
    },
    d33b: function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home[data-v-e8665bb4]{\r\n  /* font-size: 22rpx;\r\n        padding-left: 10rpx; */}.small-card[data-v-e8665bb4]{\r\n  /* text-align: right;\r\n        font-size: 24rpx;\r\n        color: #fff;\r\n        padding: 0 20rpx;\r\n        padding-left: 50rpx;\r\n        display: inline-block;\r\n        line-height: 50rpx;\r\n        height: 50rpx;\r\n        border-radius: 25rpx;\r\n        background: #fe4f14;\r\n        max-width: 200rpx; */position:relative}.cardCount[data-v-e8665bb4]{position:absolute;right:%?-14?%;top:%?-14?%;line-height:%?32?%;vertical-align:middle;text-align:center;border-radius:100%;width:%?40?%;height:%?40?%;background:#fff;border:%?4?% solid #ffe377;font-size:%?24?%;-webkit-transform:scale(.66);transform:scale(.66);color:#fda947}.small-card-img[data-v-e8665bb4]{\r\n  /* position: absolute;\r\n        top: -10rpx;\r\n        left: -6rpx;\r\n        width: 56rpx; */height:%?96?%;width:%?69?%}.home.home-h5 .cardCount[data-v-e8665bb4]{font-size:%?42?%}', ""]),
        t.exports = e
    },
    d426: function(t, e, n) {
        var i = n("44e0");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("064aafac", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    d8f6: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("fb6c"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    d9e7: function(t, e, n) {
        var i = n("4bad");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */#myCanvas[data-v-05ca0e4d]{width:100%;height:100%}.effect[data-v-05ca0e4d]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999999;pointer-events:none}.img0[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 28s 15s linear infinite;animation:img1-data-v-05ca0e4d 28s 15s linear infinite}.img1[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 33s 20s linear infinite;animation:img2-data-v-05ca0e4d 33s 20s linear infinite}.img2[data-v-05ca0e4d]{-webkit-animation:img3-data-v-05ca0e4d 38s 27s linear infinite;animation:img3-data-v-05ca0e4d 38s 27s linear infinite}.img3[data-v-05ca0e4d]{-webkit-animation:img4-data-v-05ca0e4d 43s 35s linear infinite;animation:img4-data-v-05ca0e4d 43s 35s linear infinite}.img4[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 35s 3s linear infinite;animation:img1-data-v-05ca0e4d 35s 3s linear infinite}.img5[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 41s 7s linear infinite;animation:img2-data-v-05ca0e4d 41s 7s linear infinite}.img6[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 51s 10s linear infinite;animation:img1-data-v-05ca0e4d 51s 10s linear infinite}.img7[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 36s 13s linear infinite;animation:img2-data-v-05ca0e4d 36s 13s linear infinite}.img8[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 34s 26s linear infinite;animation:img1-data-v-05ca0e4d 34s 26s linear infinite}.img9[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 31s linear infinite;animation:img2-data-v-05ca0e4d 31s linear infinite}.img10[data-v-05ca0e4d]{-webkit-animation:img3-data-v-05ca0e4d 39s 18s linear infinite;animation:img3-data-v-05ca0e4d 39s 18s linear infinite}.img11[data-v-05ca0e4d]{-webkit-animation:img4-data-v-05ca0e4d 41s linear infinite;animation:img4-data-v-05ca0e4d 41s linear infinite}.img12[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 29s 28s linear infinite;animation:img1-data-v-05ca0e4d 29s 28s linear infinite}.img13[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 44s 3s linear infinite;animation:img2-data-v-05ca0e4d 44s 3s linear infinite}.img14[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 50s 10s linear infinite;animation:img1-data-v-05ca0e4d 50s 10s linear infinite}.img15[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 37s 2s linear infinite;animation:img2-data-v-05ca0e4d 37s 2s linear infinite}.img16[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 43s 15s linear infinite;animation:img1-data-v-05ca0e4d 43s 15s linear infinite}.img17[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 36s linear infinite;animation:img2-data-v-05ca0e4d 36s linear infinite}.img18[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 42s 4s linear infinite;animation:img1-data-v-05ca0e4d 42s 4s linear infinite}.img19[data-v-05ca0e4d]{-webkit-animation:img2-data-v-05ca0e4d 56s 7s linear infinite;animation:img2-data-v-05ca0e4d 56s 7s linear infinite}.img20[data-v-05ca0e4d]{-webkit-animation:img1-data-v-05ca0e4d 28s linear infinite;animation:img1-data-v-05ca0e4d 28s linear infinite}@-webkit-keyframes img1-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-100px,500px);transform:translate(-100px,500px)}100%{-webkit-transform:translate(100px,1000px);transform:translate(100px,1000px)}}@keyframes img1-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-100px,500px);transform:translate(-100px,500px)}100%{-webkit-transform:translate(100px,1000px);transform:translate(100px,1000px)}}@-webkit-keyframes img2-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(150px,500px);transform:translate(150px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@keyframes img2-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(150px,500px);transform:translate(150px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@-webkit-keyframes img3-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(200px,500px);transform:translate(200px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@keyframes img3-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(200px,500px);transform:translate(200px,500px)}100%{-webkit-transform:translate(-150px,1000px);transform:translate(-150px,1000px)}}@-webkit-keyframes img4-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-200px,500px);transform:translate(-200px,500px)}100%{-webkit-transform:translate(150px,1000px);transform:translate(150px,1000px)}}@keyframes img4-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-200px,500px);transform:translate(-200px,500px)}100%{-webkit-transform:translate(150px,1000px);transform:translate(150px,1000px)}}.img[data-v-05ca0e4d]{position:absolute;top:%?-150?%}.pic0[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 8s linear infinite;animation:pic-data-v-05ca0e4d 8s linear infinite}.pic1[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 13s linear infinite;animation:pic-data-v-05ca0e4d 13s linear infinite}.pic2[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 10s 2s linear infinite;animation:pic-data-v-05ca0e4d 10s 2s linear infinite}.pic3[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 12s 3s linear infinite;animation:pic-data-v-05ca0e4d 12s 3s linear infinite}.pic4[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 16s 1s linear infinite;animation:pic-data-v-05ca0e4d 16s 1s linear infinite}.pic5[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 11s linear infinite;animation:pic-data-v-05ca0e4d 11s linear infinite}.pic6[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 7s 5s linear infinite;animation:pic-data-v-05ca0e4d 7s 5s linear infinite}.pic7[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 13s 6s linear infinite;animation:pic-data-v-05ca0e4d 13s 6s linear infinite}.pic8[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 22s 8s linear infinite;animation:pic-data-v-05ca0e4d 22s 8s linear infinite}.pic9[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 18s 4s linear infinite;animation:pic-data-v-05ca0e4d 18s 4s linear infinite}.pic10[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 16s 2s linear infinite;animation:pic-data-v-05ca0e4d 16s 2s linear infinite}.pic11[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 14s 6s linear infinite;animation:pic-data-v-05ca0e4d 14s 6s linear infinite}.pic12[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 10s linear infinite;animation:pic-data-v-05ca0e4d 10s linear infinite}.pic13[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 18s linear infinite;animation:pic-data-v-05ca0e4d 18s linear infinite}.pic14[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 16s linear infinite;animation:pic-data-v-05ca0e4d 16s linear infinite}.pic15[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 8s 8s linear infinite;animation:pic-data-v-05ca0e4d 8s 8s linear infinite}.pic16[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 16s 3s linear infinite;animation:pic-data-v-05ca0e4d 16s 3s linear infinite}.pic17[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 14s 5s linear infinite;animation:pic-data-v-05ca0e4d 14s 5s linear infinite}.pic18[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 12s 15s linear infinite;animation:pic-data-v-05ca0e4d 12s 15s linear infinite}.pic19[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 15s 7s linear infinite;animation:pic-data-v-05ca0e4d 15s 7s linear infinite}.pic20[data-v-05ca0e4d]{-webkit-animation:pic-data-v-05ca0e4d 17s 5s linear infinite;animation:pic-data-v-05ca0e4d 17s 5s linear infinite}@-webkit-keyframes pic-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px)}}@keyframes pic-data-v-05ca0e4d{0%{-webkit-transform:translate(0);transform:translate(0)}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px)}}', ""]),
        t.exports = e
    },
    db0f: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            basePage: n("3d21").
        default,
            baseActivity: n("2f58").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("base-page", {
                attrs: {
                    id: "basePageId",
                    pageClass: "page-footer-class",
                    isShowCopyright: !0,
                    isShowMallTopbar: !0
                }
            },
            [t.isPcJoin ? t._e() : [n("base-activity", {
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
                    topBtn: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.innerEvent.apply(void 0, arguments)
                    }
                },
                scopedSlots: t._u([{
                    key: "header",
                    fn: function() {
                        return [n("v-uni-view", {
                            staticClass: "answer-index"
                        },
                        [n("v-uni-view", {
                            staticClass: "main"
                        },
                        [n("v-uni-view", {
                            staticClass: "inner",
                            style: {
                                top: t.innerTop + "rpx"
                            }
                        },
                        [n("v-uni-view", {
                            staticClass: "join-data",
                            style: {
                                color: t.color
                            }
                        },
                        [t._v("已有 " + t._s(t.activityInfo.joinCount) + " 人参与活动")]), 1 == t.openPractise ? n("v-uni-view", {
                            staticClass: "btn-box"
                        },
                        [n("v-uni-view", {
                            staticClass: "btn-start-1 block",
                            style: t.startBtnStyle,
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e),
                                    t.startExam.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v(t._s(t.startBtnText))]), n("v-uni-view", {
                            staticClass: "btn-start-1 block",
                            style: t.startBtnStyle,
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e),
                                    t.startPractice.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v("答题练习")])], 1) : t._e(), 0 == t.openPractise ? n("v-uni-button", {
                            staticClass: "btn-start block",
                            style: t.startBtnStyle,
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e),
                                    t.startExam.apply(void 0, arguments)
                                }
                            }
                        },
                        [t._v(t._s(t.startBtnText))]) : t._e(), n("v-uni-view", {
                            staticClass: "btn-group",
                            style: {
                                color: t.color
                            }
                        },
                        [t.isShowTopEntry ? n("v-uni-view", {
                            staticClass: "btn",
                            staticStyle: {
                                "margin-right": "50rpx"
                            },
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e),
                                    t.goToTops.apply(void 0, arguments)
                                }
                            }
                        },
                        [n("v-uni-text", {
                            staticClass: "iconfont iconxingzhuangjiehe"
                        }), t._v("排行榜")], 1) : t._e(), n("v-uni-view", {
                            staticClass: "btn",
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e),
                                    t.goToRecord.apply(void 0, arguments)
                                }
                            }
                        },
                        [n("v-uni-text", {
                            staticClass: "iconfont iconzu4"
                        }), t._v("答题记录")], 1), t.isShowPrizeBtn ? n("v-uni-view", {
                            staticClass: "btn",
                            style: {
                                color: t.color,
                                marginLeft: "50rpx"
                            },
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e),
                                    t.gotoPrize.apply(void 0, arguments)
                                }
                            }
                        },
                        [n("v-uni-text", {
                            staticClass: "iconfont iconwodejiangpin mr-xs"
                        }), t._v("我的奖品")], 1) : t._e()], 1)], 1)], 1)], 1)]
                    },
                    proxy: !0
                }], null, !1, 2581137139)
            })], t.isPcJoin && t.activityGuid ? n("pc-answer-home", {
                ref: "pcAnswerHome",
                attrs: {
                    activityInfo: t.activityInfo
                }
            }) : t._e()], 2)
        },
        r = []
    },
    dc4a: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            activityHeadBanners: n("0a5d").
        default,
            baseBarrageSwitch: n("b0b6").
        default,
            chanceCardButton: n("8dfe").
        default,
            basePopupCenter: n("c185").
        default,
            basePopupBottom: n("1648").
        default,
            activityMultiModule: n("04d3").
        default,
            baseActivityRule: n("5419").
        default,
            activityRecordItem: n("7e5f").
        default,
            prizeDialog: n("1588").
        default,
            chanceInfoDialog: n("7548").
        default,
            chanceRecordDialog: n("31ef8").
        default,
            activityEffectSet: n("a367").
        default,
            activityDanmu: n("6452").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "activity-container"
            },
            [t.activityLoadEnd ? [n("v-uni-view", {
                staticClass: "activity-bg",
                style: t.bgStyleStr
            }), n("activity-head-banners", {
                attrs: {
                    banners: t.banners
                }
            }), n("v-uni-view", {
                staticClass: "activity-header",
                staticStyle: {
                    position: "relative"
                },
                style: t.topBgStyleStr
            },
            [t._t("header")], 2), t.mall.id && !t.isPcJoin ? n("base-barrage-switch", {
                attrs: {
                    isOpenDanma: t.activityInfo.isOpenDanma
                },
                on: {
                    SwitchBarrage: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.isSwitchBarrage.apply(void 0, arguments)
                    }
                }
            }) : t._e(), n("v-uni-view", {
                staticClass: "activity-main",
                class: {
                    translateZ: t.compatible
                }
            },
            [t._t("content"), t.activityGuid && 1 == t.chanceCard.state && !t.isPcJoin ? n("v-uni-view", {
                staticClass: "chance-card",
                style: t.chanceCardStyle
            },
            [n("chance-card-button", {
                ref: "chanceCardButton",
                attrs: {
                    activityGuid: t.activityGuid,
                    chanceCardUpdate: t.chanceCardUpdate
                }
            })], 1) : t._e()], 2), t._t("footer"), t.isHideBtns || t.isDesignerEdit || t.isPcJoin ? t._e() : n("v-uni-view", [t.isShowRule || t.isShowTime || t.isShare ? n("v-uni-view", {
                staticClass: "top-buttons",
                class: {
                    buttons__top: t.isShowMall
                }
            },
            [t.isShowRuleBtn ? n("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconRule
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showPupup.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.isShare && t.activityInfo && t.activityInfo.affiliateTask && (t.activityInfo.affiliateSetting.memberInfo || 1 == t.activityInfo.affiliateSetting.settingInfo.openApply) ? n("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconAffiliate
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toAffiliate.apply(void 0, arguments)
                    }
                }
            }) : t.isShare && !t.isForbidShare ? n("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconShare
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showSharePupup.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.isShowAdTop && t.adObj.isShow ? n("v-uni-image", {
                staticClass: "button-img",
                staticStyle: {
                    "margin-top": "20rpx"
                },
                attrs: {
                    src: t.adObj.src
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.gotoAdLink.apply(void 0, arguments)
                    },
                    touchstart: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.gotoAdLink.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e(), t.isReportWithEnv || t.isChat ? n("v-uni-view", {
                staticClass: "bottom-buttons"
            },
            [t.isChat ? n("v-uni-image", {
                staticClass: "button-img",
                attrs: {
                    src: t.iconChat
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.callChat.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.isReportWithEnv ? n("v-uni-image", {
                staticClass: "button-report",
                attrs: {
                    src: t.iconReport
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showReport.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e(), t.isShowIconBack || t.isShowIconInMpWeixin ? n("v-uni-view", {
                staticClass: "back-h5-buttons"
            },
            [t.isShowIconBack ? n("v-uni-image", {
                staticClass: "button-img-back",
                attrs: {
                    src: t.iconBack
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.back.apply(void 0, arguments)
                    }
                }
            }) : n("v-uni-view", {
                staticClass: "button-back-home",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.back.apply(void 0, arguments)
                    }
                }
            },
            [n("v-uni-text", {
                staticClass: "icon iconfont iconshouye"
            })], 1)], 1) : t._e()], 1)] : t._e(), t.centerDialogVisible ? n("base-popup-center", {
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.centerDialogVisible = !1
                    }
                }
            },
            [n("v-uni-view", [n("v-uni-image", {
                staticStyle: {
                    width: "90%"
                },
                attrs: {
                    mode: "widthFix",
                    src: t.qrImg
                }
            }), n("v-uni-view", {
                staticStyle: {
                    "text-align": "center",
                    color: "#7f7f7f",
                    "margin-top": "10rpx"
                }
            },
            [t._v("扫描二维码联系客服")])], 1)], 1) : t._e(), t.popupVisible ? n("base-popup-bottom", {
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            },
            [n("activity-multi-module", {
                attrs: {
                    tabs: t.tabs,
                    activityGuid: t.guid
                },
                scopedSlots: t._u([{
                    key: "tab0",
                    fn: function() {
                        return [n("base-activity-rule", {
                            attrs: {
                                activityInfo: t.activityInfo,
                                rule: t.rule
                            }
                        })]
                    },
                    proxy: !0
                },
                {
                    key: "tab1",
                    fn: function() {
                        return [t.prizeList.length > 0 ? n("v-uni-view", [t.isPrizeTitle ? n("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("活动奖品")]) : t._e(), t._l(t.prizeList, (function(e, i) {
                            return n("v-uni-view", {
                                key: i,
                                staticClass: "list-item",
                                class: [{
                                    "border-top-none": 0 == i
                                }]
                            },
                            [n("activity-record-item", {
                                attrs: {
                                    name: e.prizeName
                                },
                                scopedSlots: t._u([{
                                    key: "header",
                                    fn: function() {
                                        return [n("img", {
                                            staticStyle: {
                                                width: "92rpx",
                                                height: "92rpx",
                                                "margin-right": "32rpx"
                                            },
                                            attrs: {
                                                src: t._f("imgPreFix")(e.prizeIcon),
                                                alt: "",
                                                mode: "aspectFit"
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }], null, !0)
                            },
                            [n("v-uni-view", {
                                staticStyle: {
                                    color: "#2c2c2c",
                                    opacity: "0.5"
                                }
                            },
                            [t._v(t._s(e.prizeCount + "个"))])], 1)], 1)
                        }))], 2) : t._e(), t.prizeRankList.length > 0 ? n("v-uni-view", {
                            class: {
                                "rank-item": t.prizeList.length > 0
                            }
                        },
                        [t.isPrizeTitle ? n("v-uni-view", {
                            staticClass: "font-md strong  mb-sm"
                        },
                        [t._v("排名奖品")]) : t._e(), t._l(t.prizeRankList, (function(e, i) {
                            return n("v-uni-view", {
                                key: i,
                                staticClass: "list-item",
                                class: [{
                                    "border-top-none": 0 == i
                                }]
                            },
                            [n("activity-record-item", {
                                attrs: {
                                    name: e.prizeName
                                },
                                scopedSlots: t._u([{
                                    key: "header",
                                    fn: function() {
                                        return [n("img", {
                                            staticStyle: {
                                                width: "92rpx",
                                                height: "92rpx",
                                                "margin-right": "32rpx"
                                            },
                                            attrs: {
                                                src: t._f("imgPreFix")(e.prizeIcon),
                                                alt: "",
                                                mode: "aspectFit"
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }], null, !0)
                            },
                            [n("v-uni-view", {
                                staticStyle: {
                                    color: "#2c2c2c",
                                    opacity: "0.5"
                                }
                            },
                            [t._v(t._s(e.exdata.posStart) + "~" + t._s(e.exdata.posEnd) + "名")])], 1)], 1)
                        }))], 2) : t._e()]
                    },
                    proxy: !0
                }], null, !1, 2164770408)
            })], 1) : t._e(), t.isPrizeDialog && t.prize.visible ? n("prize-dialog", {
                ref: "prizeDialog",
                attrs: {
                    title: t.prize.title,
                    subTitle: t.prize.subTitle,
                    isWin: t.prize.exdata.isWin,
                    "prize-info": t.prize.exdata.prizeInfo,
                    adExdata: t.prize.exdata.adExdata
                },
                on: {
                    callback: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.callbackEvent("prize", e)
                        }.apply(void 0, arguments)
                    },
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.closeEvent("prize", e)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.chanceCardInfo.visible ? n("chance-info-dialog", {
                attrs: {
                    exdata: t.chanceCardInfo.exdata
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.closeEvent("chanceCardInfo", e)
                        }.apply(void 0, arguments)
                    },
                    callback: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.callbackEvent("chanceCardInfo", e)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.chanceCardRecord.visible ? n("chance-record-dialog", {
                attrs: {
                    exdata: t.chanceCardRecord.exdata
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.closeEvent("chanceCardRecord", e)
                        }.apply(void 0, arguments)
                    },
                    callback: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.callbackEvent("chanceCardRecord", e)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.shareChanceDialog.visible ? n("share1-chance1-dialog", {
                attrs: {
                    exdata: t.shareChanceDialog.exdata
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.closeEvent("shareChanceDialog", e)
                        }.apply(void 0, arguments)
                    },
                    callback: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        function(e) {
                            t.callbackEvent("shareChanceDialog", e)
                        }.apply(void 0, arguments)
                    }
                }
            }) : t._e(), t.activityInfo.activityEffect && 1 == t.activityInfo.activityEffect.isEffect && !t.isPcJoin ? n("activity-effect-set", {
                attrs: {
                    effect: t.activityInfo.activityEffect && t.activityInfo.activityEffect
                }
            }) : t._e(), "1" != t.activityInfo.isOpenDanma || t.isPcJoin ? t._e() : n("activity-danmu", {
                attrs: {
                    activityInfo: t.activityInfo
                }
            }), n("v-uni-view", {
                staticStyle: {
                    display: "none"
                }
            },
            [t._v(t._s(t.calcBannerHeight))])], 2)
        },
        r = []
    },
    dccc: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("e027"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    e027: function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            n("99af"),
            n("4de4"),
            n("4160"),
            n("159b"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a = i(n("e143")),
            r = i(n("1406")),
            o = i(n("d25d")),
            c = i(n("ceb0")),
            s = i(n("c5e2")),
            u = i(n("ca00")),
            l = i(n("bee5")),
            f = i(n("60a2")),
            d = (i(n("9cc6")), i(n("a063")), i(n("c818")), i(n("43cc")), i(n("1549"))),
            p = (i(n("5dd8")), {
                props: {
                    activityInfo: {
                        type: Object,
                    default:
                        function() {}
                    }
                },
                data: function() {
                    return {
                        imageHost: a.
                    default.conf.imageHost,
                        pagePath: a.
                    default.$pagePath,
                        isLoading: !1,
                        themeColor: "#0064ff",
                        color: "#0064ff",
                        banner: "",
                        tabs: ["活动规则", "排行榜", "活动奖品"],
                        rule: {},
                        list: [],
                        openPractise: 0,
                        practiceType: 1,
                        startBtnText: "开始答题",
                        activityGuid: "",
                        activityType: "",
                        startBtnStyle: "",
                        defaultTheme: {
                            colorStyle: {
                                themeColor: "#0064ff",
                                color: "#0064ff"
                            },
                            bgStyle: {
                                backgroundColor: "",
                                backgroundImage: "mini/plugin/dayAnswer/default_bg.png",
                                color: ""
                            },
                            startBtnStyle: {
                                color: "#fff",
                                bgColor: "#0064ff",
                                bgImage: "",
                                btnText: "开始答题",
                                btnPos: 416
                            }
                        },
                        rankPrizeList: [],
                        recordText: "答题记录",
                        qrExdata: {},
                        tabIndex: 0,
                        pagePathHome: ""
                    }
                },
                components: {
                    AnswerTops: d.
                default
                },
                mounted: function() {
                    this.init()
                },
                computed: {
                    isTopEmpty: function() {
                        var t = this.list.filter((function(t) {
                            return 0 != t.id
                        }));
                        return t.length > 0
                    }
                },
                watch: {},
                methods: {
                    initBody: function() {
                        var t = document.getElementsByTagName("body")[0];
                        t.style.maxWidth = "750px",
                        this.$nextTick((function() {
                            document.getElementsByTagName("uni-app")[0].style.boxShadow = "0px 2px 8px 0px rgba(0, 0, 0, 0.15)"
                        }))
                    },
                    init: function() {
                        this.initBody(),
                        this.activityGuid = this.activityInfo.activityGuid || this.activityInfo.guid,
                        this.activityType = this.activityInfo.activityType,
                        this.rule = {
                            startTime: this.activityInfo.startTime,
                            endTime: this.activityInfo.endTime,
                            content: this.activityInfo.ruleContent
                        },
                        32 == this.activityInfo.activityType && (this.recordText = "考试记录"),
                        this.initTheme(),
                        this.activityInfo.activityAnswerPractise && (this.openPractise = this.activityInfo.activityAnswerPractise.openPractise || 0, this.practiceType = this.activityInfo.activityAnswerPractise.practiceType || 1),
                        4 == this.activityInfo.activityType ? this.getAnswerTops() : 35 == this.activityInfo.activityType ? this.getDayAnswerTops() : 32 == this.activityInfo.activityType && this.getCommonAnswerTops(),
                        1 == this.activityInfo.openRankLottery ? this.rankPrizeList = this.filterPrizeList(this.activityInfo.rankPrizeList) : this.tabs[2] = "";
                        var t = a.
                    default.$pagePath.answerIndex;
                        4 == this.activityInfo.activityType ? t = a.
                    default.$pagePath.answerIndex:
                        35 == this.activityInfo.activityType ? t = a.
                    default.$pagePath.dayAnswerIndex:
                        32 == this.activityInfo.activityType && (t = a.
                    default.$pagePath.examIndex),
                        this.pagePathHome = t,
                        this.qrExdata = {
                            path: t,
                            scene: "guid=".concat(this.activityInfo.activityGuid, "&activityType=").concat(this.activityInfo.activityType, "&w=").concat(this.activityInfo.wsiteGuid)
                        },
                        this.isLoading = !0,
                        this.$nextTick((function() {
                            var t = document.documentElement.clientHeight;
                            document.getElementsByClassName("pc-answer-home")[0].style.minHeight = "".concat(t - 200, "px")
                        }))
                    },
                    filterPrizeList: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return t.forEach((function(t) {
                            t.prizeIcon = u.
                        default.getImageUrl(t.prizeIcon)
                        })),
                        t
                    },
                    initTheme: function() {
                        var t = this.activityInfo.theme.list ? s.
                    default.parseTheme(this.activityInfo.theme):
                        this.defaultTheme;
                        if (this.activityInfo.skin = t, t) {
                            t.startBtnStyle || (t.startBtnStyle = this.defaultTheme.startBtnStyle);
                            var e = t.colorStyle.themeColor,
                            n = t.colorStyle.color,
                            i = "color:".concat(t.startBtnStyle.color, ";background:").concat(t.startBtnStyle.bgColor, " url(").concat(u.
                        default.getImageUrl(t.startBtnStyle.bgImage), ") no-repeat center / cover;border-radius:").concat(t.startBtnStyle.radius || 25, "px");
                            this.startBtnStyle = i,
                            this.themeColor = e,
                            t.bgStyle && t.bgStyle.color && (n = t.bgStyle.color),
                            this.color = n,
                            this.startBtnText = t.startBtnStyle.btnText
                        }
                        32 == this.activityInfo.activityType && (this.startBtnText = "开始考试")
                    },
                    startExam: function(t) {
                        var e = this,
                        n = c.
                    default;
                        4 == this.activityType && (n = r.
                    default),
                        u.
                    default.recordClickEvent(t),
                        f.
                    default.checkJoinLimit(this.activityInfo, (function() {
                            var t = {
                                activityGuid: e.activityGuid,
                                activityType: e.activityType
                            };
                            u.
                        default.showLoading(),
                            n.StartAnswer(t).then((function(t) {
                                if (u.
                            default.hideLoading(), 0 == t.result) {
                                    l.
                                default.setData("ANSWER_QUESTION_LIST_" + e.activityGuid, f.
                                default.analysisRightAnswer(t.data.questionList, e.activityInfo));
                                    var n = e.activityGuid;
                                    4 == e.activityType ? u.
                                default.navigateTo({
                                        url:
                                        e.pagePath.answerContent + "?guid=".concat(n, "&recordId=").concat(t.data.recordId, "&topDayId=").concat(t.data.topDayId)
                                    }) : 35 == e.activityType ? u.
                                default.navigateTo({
                                        url:
                                        e.pagePath.dayAnswerContent + "?guid=".concat(n, "&recordId=").concat(t.data.recordId, "&topDayId=").concat(t.data.topDayId)
                                    }) : 32 == e.activityType && (l.
                                default.setData("ANSWER_QUESTION_LIST", t.data.questionList), u.
                                default.navigateTo({
                                        url:
                                        e.pagePath.examContent + "?guid=".concat(n, "&recordId=").concat(t.data.recordId, "&topDayId=").concat(t.data.topDayId)
                                    }))
                                } else 101 == t.result || 102 == t.result ? u.
                            default.showAlert({
                                    buttonText:
                                    "知道了",
                                    content: t.msg,
                                    hasGg: 1,
                                    guid: e.activityGuid,
                                    activityType: e.activityType,
                                    callback: function() {},
                                    cancelCallback: function() {},
                                    baseColor: e.themeColor
                                }) : 1003 == t.result || 2003 == t.result || 3003 == t.result ? u.
                            default.showPcQrcode({
                                    path:
                                    e.pagePathHome,
                                    scene: "guid=".concat(e.activityInfo.activityGuid, "&activityType=").concat(e.activityInfo.activityType, "&w=").concat(e.activityInfo.wsiteGuid),
                                    codeContent: "手机扫码获得机会"
                                }) : u.
                            default.showToast(t.msg, "none")
                            }))
                        }))
                    },
                    startPractice: function() {
                        var t = this,
                        e = this.activityInfo;
                        e.isAnswerPracticeLimit = 1,
                        f.
                    default.checkJoinLimit(e, (function() {
                            f.
                        default.startAnswerByPractise(t.activityInfo, (function(e) {
                                t.goToPractice()
                            }))
                        }))
                    },
                    goToPractice: function() {
                        var t = this.activityGuid;
                        4 == this.activityType ? u.
                    default.navigateTo({
                            url:
                            this.pagePath.answerContent + "?guid=".concat(t, "&isPractice=1")
                        }) : 35 == this.activityType && u.
                    default.navigateTo({
                            url:
                            this.pagePath.dayAnswerContent + "?guid=".concat(t, "&isPractice=1")
                        })
                    },
                    tabChangeEvent: function(e) {
                        t.log(111, e),
                        this.tabIndex = e
                    },
                    getAnswerTops: function() {
                        var t = this,
                        e = {
                            activityGuid: this.activityInfo.activityGuid,
                            activityType: this.activityInfo.activityType,
                            topType: 0,
                            groupId: ""
                        };
                        u.
                    default.showLoading(),
                        r.
                    default.getTops(e).then((function(e) {
                            u.
                        default.hideLoading(),
                            0 == e.result ? t.list = e.data.list: u.
                        default.showToast(e.msg, "none")
                        }))
                    },
                    getDayAnswerTops: function() {
                        var t = this,
                        e = {
                            activityGuid: this.activityInfo.activityGuid,
                            activityType: this.activityInfo.activityType,
                            topType: 0
                        };
                        u.
                    default.showLoading(),
                        o.
                    default.GetRankList(e).then((function(e) {
                            u.
                        default.hideLoading(),
                            0 == e.result ? t.list = e.data.list: u.
                        default.showToast(e.msg, "none")
                        }))
                    },
                    getCommonAnswerTops: function() {
                        var t = this,
                        e = {
                            activityGuid: this.activityInfo.activityGuid,
                            activityType: this.activityInfo.activityType
                        };
                        u.
                    default.showLoading(),
                        c.
                    default.GetRankList(e).then((function(e) {
                            u.
                        default.hideLoading(),
                            0 == e.result ? t.list = e.data.list: u.
                        default.showToast(e.msg, "none")
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
                    gotoPrize: function() {
                        u.
                    default.showPcQrcode({
                            path:
                            a.
                        default.$pagePath.userWinOrder,
                            scene: "&w=".concat(this.activityInfo.wsiteGuid),
                            codeContent: "打开手机微信扫码查看",
                            qrParams: {
                                type: 1
                            }
                        })
                    }
                }
            });
            e.
        default = p
        }).call(this, n("5a52")["default"])
    },
    e079: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var i = {
            baseRichText: n("fea90").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticStyle: {
                    padding: "20rpx"
                }
            },
            [t.isShowTime && 1 == t.timeType ? n("v-uni-view", {
                staticClass: "font-md strong mb-sm"
            },
            [t._v("活动时间")]) : t._e(), t.isShowTime && 1 == t.timeType ? n("v-uni-view", {
                staticClass: "font-md mb-lg"
            },
            [t._v(t._s(t.startTime) + " - " + t._s(t.endTime))]) : t._e(), t.isShowRule ? n("v-uni-view", {
                staticClass: "font-md strong  mb-sm"
            },
            [t._v("活动规则")]) : t._e(), t.isShowRule ? n("v-uni-view", {
                staticClass: "font-md  mb-lg"
            },
            [n("base-rich-text", {
                attrs: {
                    content: t.rule.content
                }
            })], 1) : t._e(), t.mall.companyName ? n("v-uni-view", {
                staticClass: "font-md strong  mb-sm"
            },
            [t._v("活动主办单位")]) : t._e(), t.mall.companyName ? n("v-uni-view", {
                staticClass: "font-md mb-lg"
            },
            [n("base-rich-text", {
                attrs: {
                    content: t.mall.companyName
                }
            })], 1) : t._e(), t.isShowButtonCopyright ? n("v-uni-view", {
                staticClass: "font-md strong  mb-sm"
            },
            [t._v("技术支持")]) : t._e(), t.isShowButtonCopyright ? n("v-uni-view", {
                staticClass: "font-md mb-lg blue",
                staticStyle: {
                    display: "flex"
                }
            },
            [n("v-uni-view", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showCopyrightPage.apply(void 0, arguments)
                    }
                }
            },
            [t._v(t._s(t.copyrightText))]), n("v-uni-image", {
                staticStyle: {
                    "margin-left": "40rpx",
                    width: "196rpx"
                },
                attrs: {
                    src: t.adRuleObj.src,
                    mode: "widthFix"
                },
                nativeOn: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.gotoAdRuleLink(e)
                    }
                }
            })], 1) : t._e()], 1)
        },
        r = []
    },
    e10a: function(t, e, n) {
        var i = n("1b8c");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("e440fade", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    e370: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("6c23"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    e7dd: function(t, e, n) {
        "use strict";
        var i = n("ab86"),
        a = n.n(i);
        a.a
    },
    e921: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "head-banners",
                class: {
                    "name-type": !t.banner && t.activityName
                }
            },
            [t.banner ? n("v-uni-image", {
                attrs: {
                    src: t._f("imgPreFix")(t.banner, 450),
                    mode: "widthFix"
                }
            }) : t._e(), !t.banner && t.activityName ? n("div", {
                staticClass: "banner-name"
            },
            [t._v(t._s(t.activityName))]) : t._e()], 1)
        },
        r = []
    },
    eab9: function(t, e, n) {
        var i = n("16ca");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("db290c2a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    ebf5: function(t, e, n) {
        "use strict"; (function(t) {
            var i = n("4ea4");
            n("99af"),
            n("c975"),
            n("a9e3"),
            n("d3b7"),
            n("acd8"),
            n("e25e"),
            n("ac1f"),
            n("1276"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a, r = i(n("ade3")),
            o = i(n("e143")),
            c = i(n("ca00")),
            s = i(n("c5e2")),
            u = i(n("3aa0")),
            l = i(n("c818")),
            f = i(n("61c0")),
            d = n("93c6"),
            p = i(n("bee5")),
            h = i(n("f55b")),
            v = o.
        default.$pagePath,
            g = 6,
            y = 11,
            m = 13,
            b = (a = {
                name: "BaseActivity",
                components: {
                    Share1Chance1Dialog: h.
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
                    chanceCardUpdate: {
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
                        iconRule: c.
                    default.getImageUrl("/mini/icon/miniprog/icon_rule.png"),
                        iconShare: c.
                    default.getImageUrl("/mini/icon/miniprog/icon_share.png"),
                        iconChat: c.
                    default.getImageUrl("/mini/icon/miniprog/icon_chat.png"),
                        iconReport: c.
                    default.getImageUrl("/mini/icon/miniprog/icon_report.png"),
                        iconAffiliate: c.
                    default.getImageUrl("/mini/icon/miniprog/icon_affiliate.png"),
                        iconBack: c.
                    default.getImageUrl("/mini/icon/miniprog/icon_back.png"),
                        iconPrize: c.
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
                        compatible: !1,
                        isPcJoin: 1 == o.
                    default.$isPcJoin,
                        qrImg: "",
                        centerDialogVisible: !1
                    }
                },
                computed: {
                    isReportWithEnv: function() {
                        return !! c.
                    default.checkEnvIsShowReport() && this.isReport
                    },
                    tabs: function() {
                        var t = [];
                        return (this.isShowRuleBtn || this.isShowTime) && t.push("活动规则"),
                        (this.prizeList.length > 0 || this.prizeRankList.length > 0) && t.push("奖品列表"),
                        t
                    },
                    isShowRule: function() {
                        if (!this.rule) return ! 1;
                        var t = this.rule.content || "",
                        e = "<p><br></p>" == t || t.length <= 0;
                        return ! e
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
                        var e = {
                            backgroundImage: c.
                        default.getImageUrl(this.bgStyle.backgroundImage) || "",
                            backgroundColor: this.bgStyle.backgroundColor || "transparent"
                        };
                        return this.getBgStyle(e)
                    },
                    topBgStyleStr: function() {
                        if (!this.bgStyle && this.bgImageHeight) return "height:".concat(this.bgImageHeight, "rpx;");
                        if (!this.bgStyle) return "";
                        var t = {
                            backgroundImage: this.bgStyle.topBackgroundImage || "",
                            backgroundColor: this.bgStyle.topBackgroundColor || ""
                        },
                        e = this.getBgStyle(t);
                        return this.isFullScreen && (this.bgImageHeight ? e += ";height:".concat(this.getBgHeight, "rpx;") : e += ";height:".concat(this.bgMinHeight, "rpx;")),
                        1 == this.bannerFullType && (e = this.getBannerFullStyle(), this.bannerHeighRpx && (e += ";height:".concat(this.getBannerHeight, "rpx;"))),
                        e
                    },
                    getBgHeight: function() {
                        return this.isFullScreen ? this.bgHeight || this.setBgHeight() : this.bgImageHeight = 0,
                        this.bgImageHeight
                    },
                    isShowMall: function() {
                        var t = "/" + c.
                    default.getCurrentRoute().path;
                        return ! (!this.wsite || !this.wsite.exinfo) && (this.wsite.exinfo.setting.showMallInfo && -1 == this.filterMallBarPages.indexOf(t))
                    },
                    startTime: function() {
                        return c.
                    default.formatDateTime(this.rule.startTime)
                    },
                    endTime: function() {
                        return c.
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
                        return ! (!c.
                    default.checkCurrentIsActivity() || t != g && t != y && t != m)
                    },
                    isCompatible: function() {
                        return 1 == this.activityInfo.activityType && 11 == this.activityInfo.lotteryType
                    }
                },
                created: function() {
                    var e = this;
                    t.log("bg style json created", JSON.stringify(this.bgStyle)),
                    u.
                default.once(u.
                default.customEvent.WsiteLoadEnd, (function() {
                        e.activityLoadEnd = !0;
                        var t = getApp().globalData;
                        if (e.wsite = t.wsite, e.wsite) {
                            var n = t.mall;
                            if (e.mall = n, !e.hideChat) {
                                var i = n.sideButtons || {
                                    chat: {
                                        type: 0
                                    }
                                };
                                i.chat.type > 0 && i.chat.number && e.wsite.exinfo && e.wsite.exinfo.setting.showChat ? (i.chat.number || i.chat.qr) && (e.isChat = !0, e.qrImg = c.
                            default.getImageUrl(i.chat.qr), e.phoneNumber = i.chat.number) : e.isChat = !1
                            }
                            var a = getApp().globalData.wsite.isDesignerCreate;
                            1 == a && o.
                        default.$isEdit && (e.isDesignerEdit = !0, e.hideTopBackBtn());
                            var r = uni.getSystemInfoSync(),
                            s = parseInt(r.system.split(" ")[1]);
                            "ios" == r.platform && s < 13 && (e.compatible = !0),
                            "dev" != o.
                        default.conf.env && "devtools" != r.platform || (e.compatible = !1),
                            e.checkShowBackH5(),
                            e.isForbidShare = e.getForbidShare()
                        }
                    })),
                    u.
                default.on(u.
                default.customEvent.FocusGZH, (function() {
                        e.isForbidShare = e.getForbidShare()
                    }));
                    var n = setInterval((function() {
                        e.activityInfo.activityGuid && (e.checkTimeLotteryPrize(), e.checkScreenLotteryPrize(), clearInterval(n))
                    }), 100)
                },
                watch: {
                    isPopupVisible: function(t, e) {
                        if (1 == t) {
                            var n = "ISAUTODIALOG" + this.guid,
                            i = f.
                        default.getStorageSync(n);
                            i || (this.popupVisible = !0)
                        } else this.popupVisible = !1
                    },
                    activityInfo: function(e, n) {
                        t.log("--jt--", this.activityInfo),
                        this.isForbidShare = this.getForbidShare(),
                        this.getAdObj(),
                        this.getRuleAdObj()
                    },
                    chanceCardUpdate: function() {}
                }
            },
            (0, r.
        default)(a, "mounted", (function() {
                t.log("bg style json mout", JSON.stringify(this.bgStyle))
            })), (0, r.
        default)(a, "methods", {
                toAffiliate: function() {
                    this.activityInfo && this.activityInfo.affiliateTask && this.activityInfo.affiliateSetting && (this.activityInfo.affiliateSetting.memberInfo && 1 == this.activityInfo.affiliateSetting.memberInfo.state ? c.
                default.goToAffiliateSharePage(this.pagePath.affiliateShare + "?taskGuid=" + this.activityInfo.affiliateTask.activityGuid) : 1 == this.activityInfo.affiliateSetting.settingInfo.openApply && (o.
                default.$affiliateCode = "", c.
                default.navigateTo({
                        url:
                        this.pagePath.affiliateIndex
                    })))
                },
                show: function(t, e, n, i) {
                    this.initParams(t, e, n, i),
                    this.showEvent(t)
                },
                close: function() {
                    this.popupVisible = !1
                },
                showPupup: function() {
                    this.isCustomRule ? this.$emit("ruleEvent") : this.popupVisible = !0
                },
                showSharePupup: function() {
                    c.
                default.triggerSysEvent("sys_share")
                },
                getBgStyle: function(t) {
                    return "background:" + s.
                default.formatPluginBackGroud(t)
                },
                showReport: function() {
                    c.
                default.showReportDialog()
                },
                callChat: function() {
                    var t = getApp();
                    if (1 == this.isChat && 1 == t.globalData.mall.sideButtons.chat.type) {
                        var e = t.globalData.mall.sideButtons.chat.number;
                        uni.makePhoneCall({
                            phoneNumber: e
                        })
                    } else 1 == this.isChat && 4 == t.globalData.mall.sideButtons.chat.type && (this.centerDialogVisible = !0)
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
                    c.
                default.showCopyrightPage()
                },
                getBgFullScreenStyleStr: function(t) {
                    if (!this.bgStyle) return "";
                    t = parseInt(t),
                    t < this.bgMinHeight && (t = this.bgMinHeight);
                    var e = c.
                default.getImageUrl(this.bgStyle.backgroundImage) || "",
                    n = this.bgStyle.backgroundColor || "transparent";
                    return e && (n = "transparent"),
                    "background:url(".concat(e, ") center top / 100% auto no-repeat , ").concat(n, ";height:").concat(t, "rpx")
                },
                showPrizeDialog: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = e.prizeTitle || "恭喜你中奖了",
                    a = e.prizeName || "",
                    r = e.prizeType || l.
                default.PRIZE_NONE;
                    if (n && r) {
                        if (e.isTicketLotteryShow && (e.orderState = 0), void 0 === e.orderState) return t.error("showPrizeDialog", e.orderState),
                        !1;
                        e.prizeIcon && (e.prizeIcon = c.
                    default.getImageUrl(e.prizeIcon, 200)),
                        r == l.
                    default.PRIZE_REDPACK ? 1 == e.orderState && (i = "", a = "") : r != l.
                    default.PRIZE_GOLD && r != l.
                    default.PRIZE_COUPON || (a = "")
                    } else i = "很遗憾，本次活动没有中奖";
                    this.prize.exdata.isWin = n,
                    this.prize.exdata.prizeInfo = e,
                    this.prize.title = i,
                    this.prize.subTitle = a,
                    e.adExdata && (this.prize.exdata.adExdata = e.adExdata)
                },
                callbackEvent: function(t, e) {
                    this[t] && this[t]["visible"] && (this[t]["visible"] = !1),
                    "chanceCardInfo" === t && this.$refs.chanceCardButton && this.$refs.chanceCardButton.getChanceCardCount(),
                    this[t] && this[t]["callback"] && this[t]["callback"](e)
                },
                showEvent: function(t) {
                    this.$set(this[t], "visible", !0)
                },
                closeEvent: function(t, e) {
                    "prize" == t && this[t] && this[t]["cancelback"] && this[t]["cancelback"](e),
                    this[t] && this[t]["visible"] && (this[t]["visible"] = !1)
                },
                initParams: function(t, e, n, i) {
                    "prize" == t ? this.showPrizeDialog(e, e.isWin) : this[t]["exdata"] = e,
                    this[t]["callback"] = n || null,
                    this[t]["cancelback"] = i || null
                },
                setBgHeight: function() {
                    var t = this;
                    this.isFullScreen && this.bgStyle && this.bgStyle.backgroundImage && this.getImageInfoSync(this.bgStyle.backgroundImage).then((function(e) {
                        if (e && e.height) {
                            var n = parseInt(e.height),
                            i = uni.getSystemInfoSync(),
                            a = i.screenWidth,
                            r = a / e.width,
                            o = r * n / a * 375 * 2;
                            if (o > t.bgMinHeight) {
                                var s = getApp().globalData.systemInfo.screenWidth;
                                if (c.
                            default.checkIsMini() || 1 != c.
                            default.getUrlParameterByName("isEdit") || (s = 375), s && e.width) {
                                    o > t.bgMinHeight && (t.bgImageHeight = o);
                                    var u = t.bgMinHeight,
                                    l = o;
                                    l > t.bgMinHeight && (u = l);
                                    var f = u;
                                    t.$emit("topBtn", f)
                                }
                            } else t.$emit("topBtn", t.bgMinHeight)
                        } else t.$emit("topBtn", t.bgMinHeight)
                    }))
                },
                getImageInfoSync: function(e) {
                    return new Promise((function(n, i) {
                        uni.getImageInfo({
                            src: e,
                            success: function(t) {
                                c.
                            default.checkIsMini() ? n(t) : (0, d.pathToBase64)(e).then((function(e) {
                                    t.path = e,
                                    n(t)
                                })).
                                catch((function(t) {}))
                            },
                            fali: function(e) {
                                t.log(e)
                            }
                        })
                    }))
                },
                getBannerFullStyle: function() {
                    var t = this.bgStyle,
                    e = c.
                default.getImageUrl(t.banner, 300),
                    n = t.topBackgroundColor || "",
                    i = "";
                    if (e) {
                        i = "url(".concat(e, ")"),
                        i = "background-image:" + i,
                        i += ";background-size:100%;background-repeat: no-repeat"
                    }
                    return n && (i += ";background-color: ".concat(n)),
                    i += ";position: relative",
                    i
                },
                setBannerHeight: function() {
                    var e = this,
                    n = this.bgStyle;
                    t.log("bg style json", JSON.stringify(this.bgStyle));
                    var i = n.miniBannerHeight || 678;
                    if (this.bannerHeighRpx = i, n.banner) {
                        var a = c.
                    default.getImageUrl(n.banner);
                        this.getImageInfoSync(a).then((function(t) {
                            if (t && t.height) {
                                var n = parseInt(t.height),
                                a = uni.getSystemInfoSync(),
                                r = a.screenWidth,
                                o = r / t.width,
                                c = o * n / r * 375 * 2;
                                e.bannerHeighRpx = c > i ? c: i
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
                default.$isPcJoin < 0 && (document.getElementsByTagName("uni-page-head")[0].style.display = "none"),
                    c.
                default.chekIsH5Activity() && (this.isShowIconBack = !0)
                },
                back: function() {
                    this.isShowIconBack ? c.
                default.goBackH5Page(o.
                default.$wsiteGuid, {}) : c.
                default.redirectHomePage()
                },
                getForbidShare: function() {
                    var e = !1;
                    if (RRX_WSITE_INFO && RRX_WSITE_INFO.wsite && RRX_WSITE_INFO.wsite.h5Exdata) {
                        var n = 1 == RRX_WSITE_INFO.wsite.h5Exdata.forbidShare;
                        n && (t.log("禁止分享", RRX_WSITE_INFO.wsite.h5Exdata.forbidShare), e = !0)
                    }
                    return this.activityInfo && this.activityInfo.focusData && 1 == this.activityInfo.focusData.isQywxFocus && (e = !1),
                    o.
                default.$options_h5 && 1 == o.
                default.$options_h5.isOpenGzh && (t.log("开启公众号参与", o.
                default.$options_h5.isOpenGzh), e = !1),
                    this.activityInfo.content && "1" == this.activityInfo.content.closeShare && (e = !0),
                    e
                },
                checkTimeLotteryPrize: function() {
                    var t = p.
                default.getData("TIME_LOTTERY_INFOGUID" + this.activityInfo.guid);
                    if (p.
                default.clearData("TIME_LOTTERY_INFOGUID" + this.activityInfo.guid), t == this.activityInfo.guid) {
                        var e = {
                            activityInfo: this.activityInfo
                        };
                        c.
                    default.showTimedLotteryDialog(e)
                    } else {
                        var n = this.activityInfo.activityExtTimeLotteryInfo || {},
                        i = p.
                    default.getData("TIME_LOTTERY_PRIZEDIALOG" + this.activityInfo.guid, !0);
                        if (1 == n.isOrder) {
                            if (i) return;
                            n.orderInfo.orderState = n.orderInfo.state,
                            n.orderInfo.activityInfo = this.activityInfo,
                            c.
                        default.showPrizeWinDialog(n.orderInfo, (function(t) {
                                c.
                            default.winPrizeSuccessDialog(t)
                            })),
                            p.
                        default.setData("TIME_LOTTERY_PRIZEDIALOG" + this.activityInfo.guid, !0, !0)
                        } else if (2 == n.isOrder) {
                            if (i) return;
                            c.
                        default.showPrizeNoWinDialog(),
                            p.
                        default.setData("TIME_LOTTERY_PRIZEDIALOG" + this.activityInfo.guid, !0, !0)
                        }
                    }
                },
                checkScreenLotteryPrize: function() {
                    var t = this.activityInfo.screenPrize || {};
                    if (t.id && t.orderNo) {
                        var e = p.
                    default.getData("SCREEN_LOTTERY_INFOGUID" + this.activityInfo.guid + t.orderNo, !0);
                        e || (p.
                    default.setData("SCREEN_LOTTERY_INFOGUID" + this.activityInfo.guid + t.orderNo, 1, !0), t.activityInfo = this.activityInfo, c.
                    default.showPrizeWinDialog(t, (function(t) {
                            c.
                        default.winPrizeSuccessDialog(t)
                        })))
                    }
                },
                getAdObj: function() {
                    var t = c.
                default.getGgAllocation({
                        type:
                        "rankHead",
                        guid: this.activityInfo.guid,
                        activityType: this.activityInfo.activityType
                    });
                    c.
                default.checkHasGg(t.key, t) ? (this.adObj = t, this.adObj["isShow"] = !0) : this.adObj["isShow"] = !1,
                    this.addAdDisplayCount()
                },
                gotoAdLink: function() {
                    c.
                default.showCopyrightPage(this.adObj.link, this.adObj)
                },
                addAdDisplayCount: function() {
                    c.
                default.getIsDevEnv() && c.
                default.addAdDisplayCount(),
                    this.isShowAdTop && this.adObj.isShow && this.adObj.src && c.
                default.addAdDisplayCount()
                },
                getRuleAdObj: function() {
                    var t = c.
                default.getGgAllocation({
                        type:
                        "ruleDialog",
                        guid: this.activityInfo.guid,
                        activityType: this.activityInfo.activityType
                    });
                    this.adRuleObj = t,
                    c.
                default.checkHasGg("", t) ? this.adRuleObj["isShow"] = !0 : this.adRuleObj["isShow"] = !1
                },
                gotoAdRuleLink: function() {
                    c.
                default.showCopyrightPage(this.adRuleObj.link, this.adRuleObj)
                }
            }), a);
            e.
        default = b
        }).call(this, n("5a52")["default"])
    },
    ec48: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("ebf5"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    ee1d: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "effect"
            },
            [2 == t.effect.effectType ? n("v-uni-view", t._l(t.effect.random, (function(e, i) {
                return n("v-uni-image", {
                    key: i,
                    ref: "poin",
                    refInFor: !0,
                    staticClass: "img ",
                    class: "img" + i,
                    style: {
                        width: e.random,
                        height: e.random,
                        left: e.left,
                        top: -e.top
                    },
                    attrs: {
                        src: t._f("imgPreFix")(e.image)
                    }
                })
            })), 1) : t._e(), 3 == t.effect.effectType ? n("v-uni-view", t._l(t.effect.random, (function(e, i) {
                return n("v-uni-image", {
                    key: i,
                    ref: "poin",
                    refInFor: !0,
                    staticClass: "img ",
                    class: "pic" + i,
                    style: {
                        width: e.random,
                        height: e.random,
                        left: e.left,
                        top: -e.top
                    },
                    attrs: {
                        src: t._f("imgPreFix")(e.image)
                    }
                })
            })), 1) : t._e()], 1)], 1)
        },
        r = []
    },
    ef6a: function(t, e, n) {
        var i = n("25b4");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").
    default;
        a("134e13e7", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    f197: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("747f"),
        a = n.n(i);
        for (var r in i)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return i[t]
            }))
        } (r);
        e["default"] = a.a
    },
    f1f3: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        i(n("c5e2"));
        var a = i(n("ca00")),
        r = i(n("53b6")),
        o = i(n("8a15")),
        c = getApp(),
        s = {
            name: "ActivityPcviewQrcode",
            props: {
                qrExdata: {
                    type: Object,
                default:
                    function() {
                        return {
                            path:
                            "",
                            scene: ""
                        }
                    }
                }
            },
            computed: {
                isShowAudio: function() {
                    var t = a.
                default.getCurrentRoute(),
                    e = t.path;
                    if (a.
                default.checkIsThirdAccountPage(e)) return ! 1;
                    var n = c.globalData.wsite.exinfo.setting.bgMusic;
                    return !! (n && n.url && n.show)
                }
            },
            data: function() {
                return {
                    themeColor: "",
                    qrCodeUrl: "",
                    posWidth: ""
                }
            },
            mounted: function() {
                this.getQrCodeUrl(),
                this.initPosWidth();
                var t = this;
                window.onresize = function() {
                    t.initPosWidth()
                }
            },
            methods: {
                initPosWidth: function() {
                    var t = document.documentElement.clientWidth;
                    this.posWidth = "".concat(t / 2 + 380, "px")
                },
                getQrCodeUrl: function() {
                    var t = this,
                    e = this.qrExdata.path,
                    n = this.qrExdata.scene;
                    a.
                default.showLoading(),
                    r.
                default.getQrCodeUrl(e, n).then((function(e) {
                        a.
                    default.hideLoading(),
                        0 == e.result ? e.data.isLink ? t.makeQr(e.data.shortH5Url) : t.qrCodeUrl = e.data.qrcodeUrl: a.
                    default.showAlert(e.msg)
                    })).
                    catch((function(t) {
                        a.
                    default.hideLoading()
                    }))
                },
                makeQr: function(t) {
                    var e = this;
                    o.
                default.make({
                        canvasId:
                        "my-qr-canvas",
                        componentInstance: this,
                        text: t,
                        size: 250,
                        margin: 0,
                        backgroundColor: "#ffffff",
                        foregroundColor: "#000000",
                        fileType: "png",
                        correctLevel: o.
                    default.errorCorrectLevel.M
                    }).then((function(t) {
                        e.qrCodeUrl = t,
                        e.$forceUpdate()
                    }))
                }
            }
        };
        e.
    default = s
    },
    f1f3f: function(t, e, n) {
        "use strict";
        var i = n("7968"),
        a = n.n(i);
        a.a
    },
    f317: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a, r = i(n("ade3")),
        o = i(n("ca00")),
        c = i(n("e143")),
        s = {
            props: (a = {
                photo: {
                    type: String,
                default:
                    ""
                },
                photoStyle: {
                    type: String,
                default:
                    ""
                },
                name: {
                    type: String,
                default:
                    ""
                },
                nameDes: {
                    type: String,
                default:
                    ""
                },
                subtitle: {
                    type: String,
                default:
                    ""
                },
                subtitleStyle: {
                    type: String,
                default:
                    ""
                },
                nameStyle: {
                    type: String,
                default:
                    ""
                },
                activityRecordItemStyle: {
                    type: String,
                default:
                    ""
                }
            },
            (0, r.
        default)(a, "photoStyle", {
                type: String,
            default:
                ""
            }), (0, r.
        default)(a, "isFirstItem", {
                type: Boolean,
            default:
                !1
            }), a),
            data: function() {
                return {
                    isInIosH5: o.
                default.checkIosFontScaleInH5(),
                    isPcJoin: 1 == c.
                default.$isPcJoin
                }
            }
        };
        e.
    default = s
    },
    f55b: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("0edc"),
        a = n("7e80");
        for (var r in a)["default"].indexOf(r) < 0 &&
        function(t) {
            n.d(e, t, (function() {
                return a[t]
            }))
        } (r);
        n("397a");
        var o, c = n("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "aff457fe", null, !1, i["a"], o);
        e["default"] = s.exports
    },
    f75d: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = i(n("ca00")),
        o = {
            name: "BaseEmpty",
            props: {
                text: {
                    type: String,
                default:
                    "暂无内容"
                }
            },
            data: function() {
                return {
                    imgHost: a.
                default.conf.imageHost,
                    iconEmpty: r.
                default.getImageUrl("/mini/icon/miniprog/icon_empty.png"),
                    isInIosH5: r.
                default.checkIosFontScaleInH5()
                }
            }
        };
        e.
    default = o
    },
    fb62: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        })),
        n.d(e, "c", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-uni-view", {
                staticClass: "activity-module",
                class: {
                    "activity-module-pc": t.isPcJoin
                },
                style: t.moduleStyleStr
            },
            [n("v-uni-view", {
                staticClass: "activity-module-title flex-box",
                class: {
                    "activity-tab-list": t.len > 1,
                    "activity-hide-line": t.isHideLine
                }
            },
            [t._l(t.tabs, (function(e, i) {
                return n("v-uni-view", {
                    key: i,
                    staticClass: "activity-tab-item cursor-pointer",
                    class: {
                        active: t.len > 1 && t.currentIndex == i,
                        "activity-tab-item-none": "" == e
                    },
                    style: {
                        borderColor: t.len > 1 && t.currentIndex == i ? t.themeColor || t.defaultThemeColor: "",
                        color: t.len > 1 && t.currentIndex == i && t.isPcJoin ? t.defaultThemeColor: ""
                    },
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.change(i)
                        }
                    }
                },
                [t._v(t._s(e)), "活动规则" == e && t.activityGuid ? n("v-uni-view", {
                    staticClass: "checkbox-rule"
                },
                [n("v-uni-checkbox-group", {
                    on: {
                        change: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.checkboxChange.apply(void 0, arguments)
                        }
                    }
                },
                [n("v-uni-label", [n("v-uni-checkbox", {
                    attrs: {
                        value: t.isAutoDialog
                    }
                }), n("v-uni-text", {
                    class: {
                        scaleFontInIos: t.isIos
                    }
                },
                [t._v("不再提醒")])], 1)], 1)], 1) : t._e()], 1)
            })), t.isShowModeRight ? n("v-uni-view", {
                staticClass: "activity-module-right"
            },
            [t._t("modeRight")], 2) : t._e()], 2), t._l(t.tabs, (function(e, i) {
                return [n("v-uni-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.currentIndex == i,
                        expression: "currentIndex == index"
                    }],
                    key: i,
                    staticClass: "activity-module-content",
                    style: t.moduleContentStyle,
                    on: {
                        click: function(e) {
                            e.stopPropagation(),
                            arguments[0] = e = t.$handleEvent(e)
                        }
                    }
                },
                [t._t("tab" + i)], 2)]
            }))], 2)
        },
        r = []
    },
    fb6c: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("e143")),
        r = i(n("c5e2")),
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
                    imageHost: a.
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
                this.indicatorActiveColor = r.
            default.getThemeColor()
            },
            methods: {}
        };
        e.
    default = o
    },
    fd6d: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var a = i(n("c5e2")),
        r = (i(n("e143")), i(n("ca00"))),
        o = (i(n("97b6")), i(n("9cc6")), i(n("60a2")), i(n("bee5"))),
        c = {
            props: {
                exdata: {
                    type: Object,
                default:
                    function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    contentStyle: "padding:0;border-radius: 16rpx;text-align:left;overflow:hidden;",
                    activityGuid: "",
                    activityType: "",
                    themeColor: "#0080FF",
                    isInIosH5: r.
                default.checkIosFontScaleInH5(),
                    count: 1,
                    shareCount: 1,
                    chanceType: 1,
                    chanceCount: 1,
                    callback: "",
                    shareType: 1,
                    url: "",
                    tips: "",
                    isShowUrl: !1,
                    btnText: "立即分享"
                }
            },
            mounted: function() {
                this.activityGuid = this.exdata.activityGuid,
                this.activityType = this.exdata.activityType,
                this.themeColor = a.
            default.getThemeColor() || "#0080FF",
                this.shareType = this.exdata.shareType || 1,
                2 == this.shareType && (this.btnText = "立即参与");
                var t = this.exdata.shareChanceDialog || {
                    shareInfo: {}
                };
                this.count = t.count,
                this.shareCount = t.shareInfo.shareCount || 1,
                this.chanceType = t.shareInfo.chanceType || 1,
                this.chanceCount = t.shareInfo.chanceCount || 1;
                var e = this.exdata.shareApiDialog || {
                    url: ""
                };
                this.url = e.url,
                this.tips = e.tips,
                this.callback = this.exdata.callback
            },
            computed: {},
            methods: {
                fetchChanceCard: function() {
                    1 == this.shareType ? (o.
                default.setData("ISSHARECHANGE" + this.activityGuid, {
                        activityType: this.activityType,
                        isShareChance: 1,
                        callback: this.callback
                    }), r.
                default.showShareDialog({
                        activityGuid:
                        this.activityGuid,
                        activityType: this.activityType
                    }), this.close()) : 2 == this.shareType && (window.location.href = this.url)
                },
                close: function() {
                    this.$emit("close")
                }
            }
        };
        e.
    default = c
    }
}]);