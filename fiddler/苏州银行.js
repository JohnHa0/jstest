(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-61bd126b"], {
    "00a8": function(t, e, n) {
        "use strict";
        n.d(e, "o", (function() {
            return d
        })),
        n.d(e, "p", (function() {
            return f
        })),
        n.d(e, "b", (function() {
            return m
        })),
        n.d(e, "e", (function() {
            return p
        })),
        n.d(e, "d", (function() {
            return w
        })),
        n.d(e, "a", (function() {
            return b
        })),
        n.d(e, "c", (function() {
            return y
        })),
        n.d(e, "r", (function() {
            return v
        })),
        n.d(e, "s", (function() {
            return g
        })),
        n.d(e, "m", (function() {
            return x
        })),
        n.d(e, "g", (function() {
            return T
        })),
        n.d(e, "i", (function() {
            return L
        })),
        n.d(e, "h", (function() {
            return k
        })),
        n.d(e, "f", (function() {
            return D
        })),
        n.d(e, "l", (function() {
            return P
        })),
        n.d(e, "q", (function() {
            return _
        })),
        n.d(e, "n", (function() {
            return R
        })),
        n.d(e, "k", (function() {
            return $
        })),
        n.d(e, "j", (function() {
            return J
        }));
        n("8e6e"),
        n("ac6a"),
        n("456d");
        var s = n("bd86"),
        i = (n("96cf"), n("3b8d")),
        r = n("7f80"),
        a = n("3c4e"),
        o = n("90de"),
        u = n("2b0e"),
        c = n("4360");
        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(n, !0).forEach((function(e) {
                    Object(s["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var d = function(t, e, n, s) {
            return Object(r["c"])("/testact/startAnswer/".concat(e), t, n, s)
        },
        f = function(t, e) {
            return Object(r["c"])("/testact/startLevelAnswer", t, "", e)
        },
        m = function(t, e) {
            return Object(r["c"])("/testact/activityInfo", t, "", e)
        },
        p = function(t, e) {
            return Object(r["c"])("/testact/activityUserLevelInfo", t, "", e)
        },
        w = function(t, e, n) {
            return Object(r["c"])("/testact/answerTimes", t, e, n)
        },
        b = function(t, e, n) {
            return Object(r["e"])("/testact/answer", t, e, n)
        },
        y = function(t, e, n) {
            return Object(r["c"])("/testact/answerResult", t, e, n)
        },
        v = function(t, e, n) {
            return Object(r["c"])("/testact/exchangeTestActTimes", t, e, n)
        },
        g = function(t, e, n, s) {
            return Object(r["c"])("/testact/exchangeTestActTimesResult/".concat(e), t, n, s)
        },
        x = function(t, e, n) {
            return Object(r["c"])("/formativeactivity/myNurture", t, e, n)
        },
        T = function(t, e, n) {
            return Object(r["e"])("/formativeactivity/getNurture", t, e, n)
        };
        function L(t, e, n, s) {
            return C.apply(this, arguments)
        }
        function C() {
            return C = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s, i) {
                var r, a;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return r = {
                            formativeActivityId: n.formativeActivityId,
                            nurtureSettingId: n.nurtureSettingId,
                            nurtureLevelId: n.id,
                            myNurtureId: s
                        },
                        t.next = 3,
                        A(e, r, i);
                    case 3:
                        if (a = t.sent, !a.success) {
                            t.next = 14;
                            break
                        }
                        if (!a.result.id) {
                            t.next = 11;
                            break
                        }
                        return t.next = 8,
                        I(e, a.result.id, "", i);
                    case 8:
                        return t.abrupt("return", t.sent);
                    case 11:
                        return t.abrupt("return", a);
                    case 12:
                        t.next = 15;
                        break;
                    case 14:
                        return t.abrupt("return", a);
                    case 15:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            C.apply(this, arguments)
        }
        function k(t, e, n, s, i) {
            return O.apply(this, arguments)
        }
        function O() {
            return O = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s, i, r) {
                var a;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        S(e, n, s.nurtureSettingId, s.id, i, r);
                    case 2:
                        if (a = t.sent, !a.success) {
                            t.next = 13;
                            break
                        }
                        if (!a.result.id) {
                            t.next = 10;
                            break
                        }
                        return t.next = 7,
                        I(e, a.result.id, "", r);
                    case 7:
                        return t.abrupt("return", t.sent);
                    case 10:
                        return t.abrupt("return", a);
                    case 11:
                        t.next = 14;
                        break;
                    case 13:
                        return t.abrupt("return", a);
                    case 14:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            O.apply(this, arguments)
        }
        function I(t, e, n, s) {
            return j.apply(this, arguments)
        }
        function j() {
            return j = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s, i) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        Q(e, n, "", i);
                    case 2:
                        if (r = t.sent, !r.success) {
                            t.next = 19;
                            break
                        }
                        if (null != r.result.list) {
                            t.next = 8;
                            break
                        }
                        return t.abrupt("return", {
                            success: !1,
                            errMsg: "未配置升级奖励"
                        });
                    case 8:
                        if (0 != r.result.list.length) {
                            t.next = 14;
                            break
                        }
                        return t.next = 11,
                        new Promise((function(t) {
                            setTimeout((function() {
                                t()
                            }), 1e3)
                        }));
                    case 11:
                        return t.abrupt("return", I(e, n, "", i));
                    case 14:
                        return a["a"].$emit("refresh-points"),
                        a["a"].$emit("refresh-actData"),
                        t.abrupt("return", r);
                    case 17:
                        t.next = 20;
                        break;
                    case 19:
                        return t.abrupt("return", r);
                    case 20:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            j.apply(this, arguments)
        }
        var A = function(t, e, n) {
            return Object(r["e"])("/formativeactivity/sendGiftPoint", t, e, n)
        },
        D = function(t, e, n, s) {
            var i = {
                formativeActivityId: e.formativeActivityId,
                nurtureSettingId: e.nurtureSettingId,
                nurtureLevelId: e.id,
                myNurtureId: n
            };
            return Object(r["e"])("/formativeactivity/feeding", t, i, s)
        },
        S = function(t, e, n, s, i, a) {
            return Object(r["c"])("/formativeactivity/sendReward/".concat(e, "/").concat(n, "/").concat(s), t, i, a)
        },
        Q = function(t, e, n, s) {
            return Object(r["c"])("/formativeactivity/sendRewardResult/".concat(e), t, n, s)
        },
        P = function(t, e, n) {
            return Object(r["e"])("/common/messageNotification", t, e, n)
        },
        _ = function(t, e, n) {
            return Object(r["c"])("/talkactivity/talkList/".concat(e.type), t, e, n)
        },
        R = function(t, e, n) {
            return Object(r["c"])("/talkactivity/myTalkList", t, e, n)
        };
        function $(t, e, n) {
            return B.apply(this, arguments)
        }
        function B() {
            return B = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s) {
                var i;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return Object(o["w"])(e, "请求中", 2e5),
                        e.isLock = !0,
                        t.next = 4,
                        J(e.activityId, n, s);
                    case 4:
                        i = t.sent,
                        E(e, i, n, s);
                    case 6:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            B.apply(this, arguments)
        }
        function E(t, e, n, s) {
            return N.apply(this, arguments)
        }
        function N() {
            return N = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s, r) {
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        e.$toast.clear(),
                        "exchange" == n.type ? e.options.extend.isExchange ? u["a"].systemPopup({
                            show: !0,
                            options: e.$store.state.app.sysPopupTypeConfirm,
                            content: "是否使用".concat(n.result.exchangeValue, "个").concat(n.result.pointName, "兑换1次参与机会？")
                        }).then(function() {
                            var t = Object(i["a"])(regeneratorRuntime.mark((function t(n) {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        "confirm" == n.action ? M(e, s, r) : e.isLock = !1;
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        } ()) : M(e, s, r) : "toast" == n.type ? (n.message && W(n.message), e.isLock = !1) : "result" == n.type ? setTimeout((function() {
                            a["a"].$emit("on-initTalkMain"),
                            a["a"].$emit("on-initTalkList"),
                            a["a"].$emit("on-initTalkJoin"),
                            e.isLock = !1
                        }), 1e3) : e.isLock = !1;
                    case 2:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            N.apply(this, arguments)
        }
        function M(t, e, n) {
            return z.apply(this, arguments)
        }
        function z() {
            return z = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s) {
                var i, r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return Object(o["w"])(e, "请求中", 2e5),
                        t.next = 3,
                        H(e.activityId, "", s);
                    case 3:
                        if (i = t.sent, !i.success) {
                            t.next = 15;
                            break
                        }
                        if (!i.result.success) {
                            t.next = 12;
                            break
                        }
                        return t.next = 8,
                        q(e.activityId, n, i.result.id, s);
                    case 8:
                        r = t.sent,
                        E(e, r, n, s),
                        t.next = 13;
                        break;
                    case 12:
                        e.isLock = !1;
                    case 13:
                        t.next = 16;
                        break;
                    case 15:
                        e.isLock = !1;
                    case 16:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            z.apply(this, arguments)
        }
        function W(t) {
            u["a"].systemPopup({
                show: !0,
                options: c["a"].state.app.sysPopupTypeMsg,
                content: t
            })
        }
        function J(t, e, n) {
            return F.apply(this, arguments)
        }
        function F() {
            return F = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s) {
                var i;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        U(e, n, s);
                    case 2:
                        if (i = t.sent, !i.success) {
                            t.next = 11;
                            break
                        }
                        if (i.result.result) {
                            t.next = 10;
                            break
                        }
                        if (!i.result.exchangeRule) {
                            t.next = 9;
                            break
                        }
                        return t.abrupt("return", h({
                            type: "exchange",
                            params: n
                        },
                        i));
                    case 9:
                        return t.abrupt("return", {
                            type: "toast",
                            message: i.result.message
                        });
                    case 10:
                        return t.abrupt("return", h({
                            type: "result"
                        },
                        i));
                    case 11:
                        return t.abrupt("return", h({
                            type: "toast"
                        },
                        i));
                    case 12:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            F.apply(this, arguments)
        }
        function q(t, e, n, s) {
            return G.apply(this, arguments)
        }
        function G() {
            return G = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, s, i) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        V(e, s, "", i);
                    case 2:
                        if (r = t.sent, !r.success) {
                            t.next = 19;
                            break
                        }
                        if (!r.result.success) {
                            t.next = 12;
                            break
                        }
                        return t.next = 7,
                        new Promise((function(t) {
                            setTimeout((function() {
                                t()
                            }), 1e3)
                        }));
                    case 7:
                        return a["a"].$emit("refresh-points"),
                        a["a"].$emit("refresh-actData"),
                        t.abrupt("return", J(e, n, i));
                    case 12:
                        if ("waiting" != r.result.errMsg) {
                            t.next = 18;
                            break
                        }
                        return t.next = 15,
                        new Promise((function(t) {
                            setTimeout((function() {
                                t()
                            }), 1e3)
                        }));
                    case 15:
                        return t.abrupt("return", q(e, n, s, i));
                    case 18:
                        return t.abrupt("return", {
                            type: "toast",
                            message: r.result.errMsg
                        });
                    case 19:
                    case "end":
                        return t.stop()
                    }
                }), t)
            }))),
            G.apply(this, arguments)
        }
        var U = function(t, e, n) {
            return Object(r["e"])("/talkactivity/talk", t, e, n)
        },
        H = function(t, e, n) {
            return Object(r["c"])("/talkactivity/pointExchange", t, e, n)
        },
        V = function(t, e, n, s) {
            return Object(r["c"])("/talkactivity/exchangeTalkActivityTimesResult?pointExchangeLogId=".concat(e), t, n, s)
        }
    },
    "1e97": function(t, e, n) {},
    2614 : function(t, e, n) {
        "use strict";
        n.r(e);
        var s = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "inndooTestact-component",
                class: t.animateClass,
                style: t.styles
            },
            [t._l(t.options.children, (function(e, s) {
                return t.showStatus(e) ? [t.showCountDown && "test-timeCountDown" == e.label ? n("div", {
                    staticClass: "testTimeCountDown-component",
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e)
                },
                [n("van-circle", {
                    staticClass: "circle-center",
                    attrs: {
                        size: t.size(e),
                        "stroke-width": 10 * e.extend.testTimeCountDown.strokeWidth,
                        color: e.extend.testTimeCountDown.strokeColor,
                        "layer-color": e.extend.testTimeCountDown.trailColor,
                        rate: t.timeCountDown.rate,
                        speed: t.timeCountDown.speed
                    },
                    model: {
                        value: t.timeCountDown.current,
                        callback: function(e) {
                            t.$set(t.timeCountDown, "current", e)
                        },
                        expression: "timeCountDown.current"
                    }
                },
                [n("span", {
                    staticClass: "span-title",
                    style: t.styleText(e)
                },
                [t._v(t._s(t.timeCountDownText))])])], 1) : t._e(), "test-title" == e.label && t.currentName && t.loading ? n("div", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e)
                },
                [n("div", {
                    staticClass: "test-title",
                    style: t.styleTitle(e)
                },
                [t._v(t._s(t.testTitle))]), n("span", [t._v(t._s(t.currentName))])]) : t._e(), "test-image" == e.label && t.loading && t.answerType(1) ? n("div", {
                    staticClass: "test-image",
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e)
                },
                [n("img", {
                    attrs: {
                        src: t.currentAnswerImg,
                        alt: ""
                    }
                })]) : t._e(), "test-list" == e.label && t.loading && t.answerType(0) ? n("div", {
                    staticClass: "inndoo-testList no-select testList-component",
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e)
                },
                [t._l(t.answersList, (function(s, i) {
                    return n("div", {
                        key: i,
                        staticClass: "inndoo-testListItem",
                        class: t.itemClass(s, i),
                        style: t.itemStyles(s, i, e),
                        on: {
                            click: function(n) {
                                return t.clickQuestion(s, i, e)
                            }
                        }
                    },
                    [n("span", {
                        staticClass: "text-listItem"
                    },
                    [t._v(t._s(s.result))])])
                })), n("img", {
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        src: e.extend.testList.errorImage,
                        alt: ""
                    }
                }), n("img", {
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        src: e.extend.testList.successImage,
                        alt: ""
                    }
                })], 2) : t._e(), "test-list-haveImage" == e.label && t.loading && t.answerType(1) ? n("div", {
                    staticClass: "inndoo-testList no-select testList-component",
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e)
                },
                [t._l(t.answersList, (function(s, i) {
                    return n("div", {
                        key: i,
                        staticClass: "inndoo-testListItem",
                        class: t.itemClass(s, i),
                        style: t.itemStyles(s, i, e),
                        on: {
                            click: function(n) {
                                return t.clickQuestion(s, i, e)
                            }
                        }
                    },
                    [n("span", {
                        staticClass: "text-listItem"
                    },
                    [t._v(t._s(s.result))])])
                })), n("img", {
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        src: e.extend.testList.errorImage,
                        alt: ""
                    }
                }), n("img", {
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        src: e.extend.testList.successImage,
                        alt: ""
                    }
                })], 2) : t._e(), "test-begin-button" != e.label || t.autoBegin ? t._e() : n("van-button", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e),
                    on: {
                        click: t.beiginQuestion
                    }
                },
                [t._v("\n            " + t._s(e.text) + "\n        ")]), "test-nextQuestion" == e.label && t.showNextButton && !t.isLast ? n("van-button", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e),
                    on: {
                        click: function(e) {
                            return t.sendAnswer(1, 0)
                        }
                    }
                },
                [t._v("\n            " + t._s(t.nextQuestionText(e.text)) + "\n        ")]) : t._e(), "test-lastQuestion" == e.label && t.showNextButton && t.isLast ? n("van-button", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e),
                    on: {
                        click: function(e) {
                            return t.sendAnswer(1, 0)
                        }
                    }
                },
                [t._v("\n            " + t._s(e.text) + "\n        ")]) : t._e(), t.answerType(0) && t.showTooltip ? ["test-tooltip-title" == e.label ? n("div", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e),
                    on: {
                        click: function(n) {
                            return t.clickAction(e)
                        }
                    }
                },
                [t._v("\n                " + t._s(e.text) + "\n            ")]) : t._e(), "test-tooltip-content" == e.label ? n("div", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e),
                    domProps: {
                        innerHTML: t._s(t.tooltipContent)
                    },
                    on: {
                        click: function(n) {
                            return t.clickAction(e)
                        }
                    }
                }) : t._e()] : t._e(), t.answerType(1) && t.showTooltip ? ["test-tooltip-title-plus" == e.label ? n("div", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e)
                },
                [t._v("\n                " + t._s(e.text) + "\n            ")]) : t._e(), "test-tooltip-content-plus" == e.label ? n("div", {
                    class: t.setAnimateClass(e),
                    style: t.setStyle(e),
                    domProps: {
                        innerHTML: t._s(t.tooltipContent)
                    }
                }) : t._e()] : t._e()] : t._e()
            })), t._l(t.options.children, (function(t) {
                return n("img", {
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        src: t.imgUrl
                    }
                })
            }))], 2)
        },
        i = [],
        r = (n("6b54"), n("7f7f"), n("5df3"), n("7514"), n("ac6a"), n("96cf"), n("3b8d")),
        a = (n("e566"), n("5d26")),
        o = n("2b0e"),
        u = n("90de"),
        c = n("fffb"),
        l = n("3c4e"),
        h = n("00a8");
        o["a"].use(a["a"]);
        var d = {
            name: "inndoo-testact",
            props: {
                options: {
                    type: Object,
                default:
                    function() {
                        return {}
                    }
                },
                popupList: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                },
                activityId: "",
                activityType: ""
            },
            data: function() {
                return {
                    loading: !0,
                    lock: !1,
                    data: {},
                    testLevelId: "default",
                    testAnswerIndex: 0,
                    testAnswerIndexCurrent: 0,
                    timeData: {},
                    apiTimes: 0,
                    answers: [],
                    beginJudge: !1,
                    timeOut2: null,
                    timeOut: null,
                    timer: null,
                    timer2: null,
                    timeCountDown: {
                        current: 0,
                        time: 0,
                        totalTime: 10,
                        speed: null,
                        timer: null,
                        rate: 100,
                        loading: !0,
                        data: {}
                    },
                    pointExchangeLogId: "",
                    nums: 0,
                    headerParams: {
                        assemblyName: this.options.title || this.options.label
                    },
                    isLevelMode: !1,
                    totalLevelTestPlay: 0
                }
            },
            beforeCreate: function() {},
            created: function() {
                this.options.extend.inndooTestact.testactType = 1,
                this.initAnswerTimes(!1, !0)
            },
            mounted: function() {
                var t = this;
                l["a"].$off("testact-change"),
                setTimeout((function() {
                    l["a"].$on("testact-change", (function(e) {
                        "test-beginQuestion" == e && t.beiginQuestion()
                    }))
                }))
            },
            methods: {
                showStatus: function(t) {
                    var e = t.label;
                    return 1 == this.options.extend.inndooTestact.testactType ? "test-begin-button" == e: 2 == this.options.extend.inndooTestact.testactType ? "test-title" == e || "test-nextQuestion" == e || "test-list" == e || "test-tooltip-title" == e || "test-tooltip-content" == e || "test-image" == e || "test-list-haveImage" == e || "test-tooltip-title-plus" == e || "test-tooltip-content-plus" == e || "test-timeCountDown" == e || "test-lastQuestion" == e: void 0
                },
                init: function() {
                    var t = this;
                    Object(h["b"])(this.activityId, this.headerParams).then((function(e) {
                        t.isLevelMode = e.result.rule.testLevel,
                        e.result.rule.testLevel ? Object(h["e"])(t.activityId, t.headerParams).then((function(e) {
                            e.success && (t.testLevelId = e.result.testLevelId, e.result.allLevelFinished && e.result.testLevelContinue ? (t.$toast.clear(), t.$systemPopup({
                                show: !0,
                                options: t.$store.state.app.sysPopupTypeConfirm,
                                content: "继续答题将重新开始闯关，是否继续？"
                            }).then((function(e) {
                                "confirm" == e.action ? (Object(u["w"])(t, "", 999999), Object(h["p"])(t.activityId, t.headerParams).then((function(e) {
                                    e.result && (t.totalLevelTestPlay = e.result.totalLevelTestPlay, l["a"].$emit("beginAnswer")),
                                    t.initQuestionList(e)
                                }))) : t.autoBegin && window.history.back()
                            }))) : Object(h["p"])(t.activityId, t.headerParams).then((function(e) {
                                e.result && (t.totalLevelTestPlay = e.result.totalLevelTestPlay, l["a"].$emit("beginAnswer")),
                                t.initQuestionList(e)
                            })))
                        })) : Object(h["o"])(t.activityId, t.testLevelId, "", t.headerParams).then((function(e) {
                            e.result && l["a"].$emit("beginAnswer"),
                            t.initQuestionList(e)
                        }))
                    }))
                },
                initQuestionList: function(t) {
                    if (t.success) {
						
                        if (this.data = t.result, !this.data) return this.$toast.clear(),
                        Object(u["v"])(this, t.message || "获取题目失败"),
                        !1;
                        if (!this.data.testQuestionList) return this.data.testQuestionList = [],
                        !1;
						for(var k=0;k<this.data.testQuestionList.length;k++)
						for(var i=0;i<this.data.testQuestionList[k].answers.length;i++){
							if(this.data.testQuestionList[k].answers[i].isTrue){
								this.data.testQuestionList[k].answers[i].result="------------"
							}
						}
                        if (!this.data.testQuestionList[0].answers || this.data.testQuestionList[0].answers.length <= 0) {
                            this.data.testQuestionList[0].answers;
                            return this.options.extend.inndooTestact.testactType = 1,
                            !1
                        }
                        var e = this.data.testQuestionList[0];
                        if (e) switch (e.type) {}
                        this.initAnswerTimes(!0),
                        l["a"].$emit("refresh-actData")
                    }
                },
                answerType: function(t) {
                    if (this.data && this.data.testQuestionList && this.data.testQuestionList[this.testAnswerIndex]) return this.data.testQuestionList[this.testAnswerIndex].type == t
                },
                beiginQuestion: function() {
                    var t = this;
                    return !! this.loading && (this.apiTimes = 0, void 0 === this.timeData.testLimitUserLeftByDay ? (Object(u["v"])(this, "你的手速太快了，等会再试"), !1) : this.timeData.testLimitUserLeftByDay <= 0 ? this.timeData.exchange ? (o["a"].systemPopup({
                        show: !0,
                        options: this.$store.state.app.sysPopupTypeConfirm,
                        content: "您今天的答题次数已用完，是否使用".concat(this.timeData.exchangeValue, "个").concat(this.timeData.pointName, "兑换1次答题次数？")
                    }).then((function(e) {
                        "confirm" === e.action ? t.testactExchangeTestActTimes() : t.autoBegin && window.history.back()
                    })), !1) : (o["a"].systemPopup({
                        show: !0,
                        options: this.$store.state.app.sysPopupTypeMsg,
                        content: "您的答题次数不足"
                    }).then((function(e) {
                        t.autoBegin && window.history.back()
                    })), !1) : void this.beiginQuestionFuc())
                },
                testactExchangeTestActTimes: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                return Object(u["w"])(this, "", 999999),
                                t.next = 3,
                                Object(h["r"])(this.activityId, "", this.headerParams);
                            case 3:
                                e = t.sent,
                                e.success ? (this.pointExchangeLogId = e.result.id, this.testactExchangeTestActTimesResult()) : (this.$toast.clear(), this.autoBegin && window.history.back());
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }), t, this)
                    })));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                } (),
                testactExchangeTestActTimesResult: function(t) {
                    var e = this;
                    Object(h["s"])(this.activityId, this.pointExchangeLogId, "", this.headerParams).then((function(t) {
                        if (t.success) {
                            if ("waiting" == t.result.errMsg) return e.nums += 1,
                            e.nums > 30 ? (Object(u["v"])(e, "网络繁忙", 3500), !1) : (setTimeout((function() {
                                e.testactExchangeTestActTimesResult()
                            }), 1e3), !1);
                            t.result.success ? (l["a"].$emit("refresh-points"), l["a"].$emit("refresh-actData"), e.nums = 0, Object(u["v"])(e, "兑换成功", 1e3, "success"), setTimeout((function() {
                                e.beiginQuestionFuc()
                            }), 1e3)) : (e.nums = 0, Object(u["v"])(e, t.result.errMsg || "兑换失败", 2e3), setTimeout((function() {
                                e.autoBegin && window.history.back()
                            }), 1500))
                        } else e.nums = 0,
                        Object(u["v"])(e, "兑换失败", 2e3),
                        setTimeout((function() {
                            e.autoBegin && window.history.back()
                        }), 1500)
                    }))
                },
                beiginQuestionFuc: function() {
                    Object(u["w"])(this, "", 999999),
                    this.testAnswerIndex = 0,
                    this.answers = [],
                    this.lock = !1,
                    this.init()
                },
                nextQuestion: function() {
                    var t = this;
                    if (this.answers = [], this.loading = !1, setTimeout((function() {
                        t.loading = !0,
                        t.lock = !1,
                        t.beginJudge = !1
                    })), this.testAnswerIndex += 1, this.data.testQuestionList.length - 1 < this.testAnswerIndex) return Object(u["w"])(this, "", 99999),
                    setTimeout((function() {
                        t.resetAnswer()
                    }), 1e3),
                    !1;
                    2 == this.data.testTimeLimit && this.resetTimeCountDown()
                },
                clickQuestion: function(t, e) {
                    if (this.lock) return ! 1;
                    if (1 === this.answersType && (this.answers.length > 0 && (this.answers = []), this.answers.push(t), (void 0 === this.options.extend.inndooTestact.autoSubmitAnswer || this.options.extend.inndooTestact.autoSubmitAnswer) && this.sendAnswer()), 2 === this.answersType) {
                        var n = this.answers.some((function(e) {
                            return t.id == e.id
                        }));
                        if (n) return this.answers = this.answers.filter((function(e) {
                            return t.id != e.id
                        })),
                        !1;
                        this.answers.push(t)
                    }
                },
                itemClass: function(t, e) {
                    var n = this.answers.some((function(e, n) {
                        return t.id == e.id
                    })),
                    s = "";
                    return n && (s += "animated pulse faster", 2 === this.answersType && (s += " bgBlue"), void 0 !== this.options.extend.inndooTestact.autoSubmitAnswer && (this.options.extend.inndooTestact.autoSubmitAnswer || (s += " bgBlue"))),
                    s
                },
                itemStyles: function(t, e, n) {
                    if (!this.beginJudge) return {
                        backgroundColor: n.extend.testList.defaultBgColor,
                        color: n.extend.testList.defaultColor
                    };
                    var s = n.extend.testList.errorBgColor,
                    i = n.extend.testList.errorColor,
                    r = n.extend.testList.errorImage,
                    a = n.extend.testList.successBgColor,
                    o = n.extend.testList.successColor,
                    u = n.extend.testList.successImage,
                    c = [];
                    this.answersList.forEach((function(t) {
                        t.isTrue && c.push(t)
                    }));
                    var l = c.some((function(e) {
                        return t.id === e.id
                    })),
                    h = this.answers.some((function(e) {
                        return t.id == e.id
                    }));
                    return l ? {
                        backgroundColor: a + "!important",
                        color: o + "!important",
                        backgroundImage: 'url("' + (u || "") + '")'
                    }: !l && h ? {
                        backgroundColor: s + "!important",
                        color: i + "!important",
                        backgroundImage: 'url("' + (r || "") + '")'
                    }: l || h ? void 0 : {
                        backgroundColor: n.extend.testList.defaultBgColor,
                        color: n.extend.testList.defaultColor
                    }
                },
                initAnswerTimes: function(t) {
                    var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Object(h["d"])(this.activityId, "", this.headerParams).then((function(s) {
                        e.$toast.clear(),
                        s.success && (e.timeData = s.result, n && e.autoBegin && e.beiginQuestion(), t && (e.options.extend.inndooTestact.testactType = 2, e.resetTimeCountDown()))
                    }))
                },
                sendAnswer: function(t) {
                    var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 600;
                    if (t && this.answers.length <= 0) return Object(u["v"])(this, "请先选择答案"),
                    !1;
                    if (this.lock) return ! 1;
                    this.testAnswerIndexCurrent += 1,
                    this.data.testQuestionList.length - 1 < this.testAnswerIndexCurrent && (this.pauseTimeCount(), clearInterval(this.timeCountDown.timer)),
                    this.lock = !0,
                    2 == this.data.testTimeLimit && this.pauseTimeCount(),
                    setTimeout((function() {
                        e.beginJudge = !0
                    }), n);
                    var s = [];
                    this.answers.length > 0 ? this.answers.forEach((function(t) {
                        s.push(t.id)
                    })) : (this.answersList.some((function(t) {
                        if (!t.isTrue) return s.push(t.id),
                        !0
                    })), s.length <= 0 && this.answersList.some((function(t) {
                        if (t.isTrue) return s.push(t.id),
                        !0
                    })));
                    var i = {
                        questionId: this.answersList[0].testQuestionId,
                        testLevelId: this.testLevelId,
                        testAnswerId: s.join(","),
                        overTime: !1
                    };
                    clearTimeout(this.timer2),
                    this.timer2 = setTimeout((function() {
                        e.nextQuestion()
                    }), n + 1400),
                    Object(h["a"])(this.activityId, i, this.headerParams).then((function(t) {}))
                },
                resetAnswer: function() {
                    var t = this;
                    Object(u["w"])(this, "", 999999),
                    setTimeout((function() {
                        t.options.extend.inndooTestact.testactType = 1,
                        t.testAnswerIndex = 0,
                        Object(h["c"])(t.activityId, "", t.headerParams).then((function(e) {
                            if (l["a"].$emit("endAnswer"), t.initAnswerTimes(), e.success) if (e.result) {
                                if ("waiting" == e.result.result) return t.apiTimes > 10 ? (t.$toast.clear(), Object(u["v"])(t, "服务器繁忙", 2e3), !1) : (t.apiTimes += 1, setTimeout((function() {
                                    t.resetAnswer()
                                }), 1e3), !1);
                                if (t.$toast.clear(), t.data.isLevelMode = t.isLevelMode, t.data.totalLevelTestPlay = t.totalLevelTestPlay, e.result.winningPrizeVo) t.$parent.$refs["testactRewardPopup_001"][0].showTc(e.result, t.timeData, t.data);
                                else {
                                    var n = e.result.testLevelAccount;
                                    n && !n.complete && n.startReduceOne && (n.levelTestPlay -= 1),
                                    t.$parent.$refs["testactPopup_001"][0].showTc(e.result, t.timeData, t.data)
                                }
                                l["a"].$emit("refresh-points"),
                                l["a"].$emit("refresh-actData")
                            } else Object(u["v"])(t, "未知错误", 2e3);
                            else setTimeout((function() {
                                t.$toast.clear()
                            }), 2e3)
                        }))
                    }), 300)
                },
                size: function(t) {
                    return document.body.clientWidth / 375 * t.style.width
                },
                styleText: function(t) {
                    return {
                        display: "inline-block",
                        width: Object(u["b"])(this, 100, t.style.width - t.extend.testTimeCountDown.strokeWidth + 4),
                        height: Object(u["b"])(this, 100, t.style.height - t.extend.testTimeCountDown.strokeWidth + 4),
                        backgroundColor: t.style.bgColor,
                        lineHeight: Object(u["b"])(this, 100, t.style.height - t.extend.testTimeCountDown.strokeWidth + 4),
                        fontSize: Object(u["b"])(this, 100, t.style.fontSize)
                    }
                },
                initTimeCountDown: function() {
                    var t = this;
                    clearInterval(this.timeCountDown.timer),
                    this.timeCountDown.timer = setInterval((function() {
                        if (t.timeCountDown.time += 1, t.timeCountDown.time === t.timeCountDown.totalTime) {
                            if (clearInterval(t.timeCountDown.timer), 1 == t.data.testTimeLimit) {
                                if (Object(u["v"])(t, "时间到", 1e3), t.lock = !0, t.data.testQuestionList.length > t.testAnswerIndexCurrent) {
                                    var e = t.data.testQuestionList.length - t.testAnswerIndexCurrent,
                                    n = [],
                                    s = JSON.parse(JSON.stringify(t.data.testQuestionList)).splice(t.testAnswerIndexCurrent, e);
                                    return s.forEach((function(e) {
                                        var s = e.answers.find((function(t) {
                                            return ! t.isTrue
                                        }));
                                        s || (s = e.answers[0]);
                                        var i = new Promise((function(e) {
                                            var n = {
                                                questionId: s.testQuestionId,
                                                testLevelId: t.testLevelId,
                                                testAnswerId: s.id,
                                                overTime: !0
                                            };
                                            Object(h["a"])(t.activityId, n, t.headerParams).then((function(t) {
                                                e(t)
                                            }))
                                        }));
                                        n.push(i)
                                    })),
                                    Promise.all(n).then((function(e) {
                                        setTimeout((function() {
                                            t.resetAnswer()
                                        }), 700)
                                    })),
                                    !1
                                }
                                setTimeout((function() {
                                    t.resetAnswer()
                                }), 1500)
                            }
                            2 == t.data.testTimeLimit && t.sendAnswer()
                        }
                    }), 1e3)
                },
                resetTimeCountDown: function() {
                    var t = this;
                    this.timeCountDown.loading = !1,
                    this.timeCountDown.current = 0,
                    this.timeCountDown.time = 0,
                    this.timeCountDown.rate = 100,
                    this.timeCountDown.totalTime = this.data.testTime,
                    this.timeCountDown.speed = 100 / this.timeCountDown.totalTime,
                    this.initTimeCountDown(),
                    this.$nextTick((function() {
                        t.timeCountDown.loading = !0
                    }))
                },
                pauseTimeCount: function() {
                    clearTimeout(this.timeCountDown.timer),
                    this.timeCountDown.speed = 0,
                    this.timeCountDown.rate = this.timeCountDown.current
                },
                setStyle: function(t) {
                    var e = Object(c["t"])(this, t);
                    return "test-tooltip-content" != t.label && "test-tooltip-content-plus" != t.label || (e.overflow = "hidden"),
                    e
                },
                setAnimateClass: function(t) {
                    return Object(c["b"])(this, t)
                },
                styleTitle: function(t) {
                    if (t.extend.inndooTextTest) return {
                        color: t.extend.inndooTextTest.titleCardColor,
                        backgroundColor: t.extend.inndooTextTest.titleCardBgColor
                    }
                },
                nextQuestionText: function(t) {
                    return this.data.testQuestionList.length - 2 < this.testAnswerIndex ? "提交": t
                },
                clickAction: function(t) {
                    Object(c["a"])(this, t)
                }
            },
            computed: {
                answersList: function() {
                    if (this.data.testQuestionList) return this.data.testQuestionList.length - 1 < this.testAnswerIndex ? [] : this.data.testQuestionList[this.testAnswerIndex].answers || []
                },
                currentAnswerImg: function() {
                    if (this.data.testQuestionList && this.data.testQuestionList[this.testAnswerIndex]) return this.data.testQuestionList[this.testAnswerIndex].url
                },
                answersType: function() {
                    var t = [];
                    return this.answersList.forEach((function(e) {
                        e.isTrue && t.push(e)
                    })),
                    t.length > 1 ? 2 : 1
                },
                tooltipContent: function() {
                    return this.data.testQuestionList[this.testAnswerIndex] ? "[]" == this.data.testQuestionList[this.testAnswerIndex].tooltip ? "": this.data.testQuestionList[this.testAnswerIndex].tooltip || "": ""
                },
                currentName: function() {
                    if (this.data.testQuestionList[this.testAnswerIndex]) return this.data.testQuestionList[this.testAnswerIndex].name
                },
                showNextButton: function() {
                    if (void 0 !== this.options.extend.inndooTestact.autoSubmitAnswer && !this.options.extend.inndooTestact.autoSubmitAnswer) return ! 0;
                    if (this.answersList.length > 0) {
                        var t = [];
                        if (this.answersList.forEach((function(e) {
                            e.isTrue && t.push(e)
                        })), t.length > 1) return ! 0
                    }
                },
                showCountDown: function() {
                    if ((this.timeCountDown.speed || 0 == this.timeCountDown.speed) && this.timeCountDown.loading && 0 != this.data.testTimeLimit) return ! (this.data.testQuestionList.length - 1 < this.testAnswerIndex)
                },
                timeCountDownText: function() {
                    return 0 == this.data.testTimeLimit ? "∞": (this.timeCountDown.totalTime - this.timeCountDown.time).toString()
                },
                styles: function() {
                    var t = Object(c["t"])(this, this.options);
                    return 1 == this.options.extend.inndooTestact.testactType ? (delete t.backgroundColor, delete t.backgroundImage) : t.zIndex = 199,
                    t
                },
                animateClass: function() {
                    return Object(c["b"])(this, this.options)
                },
                testTitle: function() {
                    var t = [];
                    return this.answersList.forEach((function(e) {
                        e.isTrue && t.push(e)
                    })),
                    t.length < 2 ? "单选题": "多选题"
                },
                showTooltip: function() {
                    var t = this.options.extend.inndooTestact.showTooltip;
                    return void 0 === t || t
                },
                isLast: function() {
                    var t = this.options.children.some((function(t) {
                        return "test-lastQuestion" == t.label
                    }));
                    return !! t && this.data.testQuestionList.length - 2 < this.testAnswerIndex
                },
                autoBegin: function() {
                    return "testBegin" == this.$route.query.action
                }
            },
            components: {},
            watch: {
                testAnswerIndex: function(t) {
                    0 == t && (this.testAnswerIndexCurrent = 0)
                }
            }
        },
        f = d,
        m = (n("9a5f"), n("2877")),
        p = Object(m["a"])(f, s, i, !1, null, "24fc2b44", null);
        e["default"] = p.exports
    },
    "5d26": function(t, e, n) {
        "use strict";
        var s = n("d282"),
        i = n("ea8e"),
        r = n("a142"),
        a = n("4598"),
        o = Object(s["a"])("circle"),
        u = o[0],
        c = o[1],
        l = 3140,
        h = 0;
        function d(t) {
            return Math.min(Math.max(t, 0), 100)
        }
        function f(t, e) {
            var n = t ? 1 : 0;
            return "M " + e / 2 + " " + e / 2 + " m 0, -500 a 500, 500 0 1, " + n + " 0, 1000 a 500, 500 0 1, " + n + " 0, -1000"
        }
        e["a"] = u({
            props: {
                text: String,
                size: [Number, String],
                color: [String, Object],
                layerColor: String,
                strokeLinecap: String,
                value: {
                    type: Number,
                default:
                    0
                },
                speed: {
                    type: [Number, String],
                default:
                    0
                },
                fill: {
                    type: String,
                default:
                    "none"
                },
                rate: {
                    type: [Number, String],
                default:
                    100
                },
                strokeWidth: {
                    type: [Number, String],
                default:
                    40
                },
                clockwise: {
                    type: Boolean,
                default:
                    !0
                }
            },
            beforeCreate: function() {
                this.uid = "van-circle-gradient-" + h++
            },
            computed: {
                style: function() {
                    var t = Object(i["a"])(this.size);
                    return {
                        width: t,
                        height: t
                    }
                },
                path: function() {
                    return f(this.clockwise, this.viewBoxSize)
                },
                viewBoxSize: function() {
                    return + this.strokeWidth + 1e3
                },
                layerStyle: function() {
                    return {
                        fill: "" + this.fill,
                        stroke: "" + this.layerColor,
                        strokeWidth: this.strokeWidth + "px"
                    }
                },
                hoverStyle: function() {
                    var t = l * this.value / 100;
                    return {
                        stroke: "" + (this.gradient ? "url(#" + this.uid + ")": this.color),
                        strokeWidth: +this.strokeWidth + 1 + "px",
                        strokeLinecap: this.strokeLinecap,
                        strokeDasharray: t + "px " + l + "px"
                    }
                },
                gradient: function() {
                    return Object(r["e"])(this.color)
                },
                LinearGradient: function() {
                    var t = this,
                    e = this.$createElement;
                    if (this.gradient) {
                        var n = Object.keys(this.color).sort((function(t, e) {
                            return parseFloat(t) - parseFloat(e)
                        })).map((function(n, s) {
                            return e("stop", {
                                key: s,
                                attrs: {
                                    offset: n,
                                    "stop-color": t.color[n]
                                }
                            })
                        }));
                        return e("defs", [e("linearGradient", {
                            attrs: {
                                id: this.uid,
                                x1: "100%",
                                y1: "0%",
                                x2: "0%",
                                y2: "0%"
                            }
                        },
                        [n])])
                    }
                }
            },
            watch: {
                rate: {
                    handler: function(t) {
                        this.startTime = Date.now(),
                        this.startRate = this.value,
                        this.endRate = d(t),
                        this.increase = this.endRate > this.startRate,
                        this.duration = Math.abs(1e3 * (this.startRate - this.endRate) / this.speed),
                        this.speed ? (Object(a["a"])(this.rafId), this.rafId = Object(a["c"])(this.animate)) : this.$emit("input", this.endRate)
                    },
                    immediate: !0
                }
            },
            methods: {
                animate: function() {
                    var t = Date.now(),
                    e = Math.min((t - this.startTime) / this.duration, 1),
                    n = e * (this.endRate - this.startRate) + this.startRate;
                    this.$emit("input", d(parseFloat(n.toFixed(1)))),
                    (this.increase ? n < this.endRate: n > this.endRate) && (this.rafId = Object(a["c"])(this.animate))
                }
            },
            render: function() {
                var t = arguments[0];
                return t("div", {
                    class: c(),
                    style: this.style
                },
                [t("svg", {
                    attrs: {
                        viewBox: "0 0 " + this.viewBoxSize + " " + this.viewBoxSize
                    }
                },
                [this.LinearGradient, t("path", {
                    class: c("layer"),
                    style: this.layerStyle,
                    attrs: {
                        d: this.path
                    }
                }), t("path", {
                    attrs: {
                        d: this.path
                    },
                    class: c("hover"),
                    style: this.hoverStyle
                })]), this.slots() || this.text && t("div", {
                    class: c("text")
                },
                [this.text])])
            }
        })
    },
    "8e6e": function(t, e, n) {
        var s = n("5ca1"),
        i = n("990b"),
        r = n("6821"),
        a = n("11e9"),
        o = n("f1ae");
        s(s.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                var e, n, s = r(t),
                u = a.f,
                c = i(s),
                l = {},
                h = 0;
                while (c.length > h) n = u(s, e = c[h++]),
                void 0 !== n && o(l, e, n);
                return l
            }
        })
    },
    "9a5f": function(t, e, n) {
        "use strict";
        var s = n("ad27"),
        i = n.n(s);
        i.a
    },
    ad27: function(t, e, n) {},
    e566: function(t, e, n) {
        "use strict";
        n("68ef"),
        n("1e97")
    },
    f1ae: function(t, e, n) {
        "use strict";
        var s = n("86cc"),
        i = n("4630");
        t.exports = function(t, e, n) {
            e in t ? s.f(t, e, i(0, n)) : t[e] = n
        }
    }
}]);