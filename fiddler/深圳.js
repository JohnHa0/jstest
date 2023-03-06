(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7f75d4a6"], {
    "060b": function(t, e, c) {
        t.exports = c.p + "static/img/lottery_btn.5a00ebb5.png"
    },
    "070e": function(t, e, c) {
        "use strict";
        c.r(e);
        var n = c("2909"),
        a = (c("8a58"), c("e41f")),
        i = (c("99af"), c("d3b7"), c("7a23")),
        b = c("b52f"),
        s = c.n(b),
        o = c("26f8"),
        r = c.n(o),
        u = c("82bc"),
        l = c.n(u),
        j = c("6a1f"),
        O = c.n(j),
        d = c("ff51"),
        f = c.n(d),
        A = c("ea90"),
        v = c.n(A),
        p = c("14c9"),
        g = c.n(p),
        _ = c("060b"),
        h = c.n(_),
        y = c("6f0e"),
        w = c.n(y),
        m = c("365c"),
        k = c("6f6a"),
        K = c("5502"),
        x = c("a18c"),
        C = function(t) {
            return Object(i["D"])("data-v-114f368d"),
            t = t(),
            Object(i["B"])(),
            t
        },
        J = {
            class: "question_page"
        },
        U = {
            class: "qustion"
        },
        E = {
            class: "level"
        },
        S = {
            class: "score"
        },
        B = C((function() {
            return Object(i["i"])("span", null, "我的分数", -1)
        })),
        D = {
            class: "score_txt"
        },
        I = {
            class: "answer"
        },
        M = {
            class: "answer_info"
        },
        F = {
            class: "answer_num"
        },
        Q = {
            class: "answer_precess"
        },
        R = {
            class: "answer_title"
        },
        L = {
            class: "answer_content"
        },
        V = ["onClick"],
        G = {
            key: 0,
            class: "answer_txt"
        },
        P = {
            key: 1,
            class: "answer_txt"
        },
        X = {
            key: 2,
            class: "answer_txt"
        },
        q = {
            key: 3,
            class: "answer_txt"
        },
        T = {
            key: 4,
            class: "right_icon"
        },
        N = C((function() {
            return Object(i["i"])("img", {
                src: s.a,
                alt: ""
            },
            null, -1)
        })),
        Y = [N],
        z = {
            key: 5,
            class: "error_icon"
        },
        H = C((function() {
            return Object(i["i"])("img", {
                src: r.a,
                alt: ""
            },
            null, -1)
        })),
        W = [H],
        Z = C((function() {
            return Object(i["i"])("div", {
                class: "answer_logo"
            },
            [Object(i["i"])("img", {
                src: l.a,
                alt: ""
            })], -1)
        })),
        $ = C((function() {
            return Object(i["i"])("div", {
                class: "cloud"
            },
            [Object(i["i"])("img", {
                src: O.a,
                alt: ""
            })], -1)
        })),
        tt = {
            class: "analyse_popup"
        },
        et = {
            class: "popup_content"
        },
        ct = {
            class: "popup_content_txt"
        },
        nt = {
            key: 0,
            src: f.a,
            alt: ""
        },
        at = {
            key: 1,
            src: v.a,
            alt: ""
        },
        it = {
            class: "answer_end_Popup"
        },
        bt = {
            class: "score"
        },
        st = {
            key: 0,
            class: "success_txt"
        },
        ot = C((function() {
            return Object(i["i"])("img", {
                src: g.a,
                alt: ""
            },
            null, -1)
        })),
        rt = [ot],
        ut = {
            key: 1,
            class: "fail"
        },
        lt = C((function() {
            return Object(i["i"])("div", {
                class: "fail_desc"
            },
            " 恭喜您本次一共 ", -1)
        })),
        jt = {
            class: "fail_num"
        },
        Ot = C((function() {
            return Object(i["i"])("div", {
                class: "fail_desc mar30"
            },
            " 历史最佳成绩为 ", -1)
        })),
        dt = {
            class: "fail_num"
        },
        ft = C((function() {
            return Object(i["i"])("img", {
                src: h.a,
                alt: ""
            },
            null, -1)
        })),
        At = [ft],
        vt = C((function() {
            return Object(i["i"])("img", {
                src: w.a,
                alt: ""
            },
            null, -1)
        })),
        pt = [vt],
        gt = {
            setup: function(t) {
                var e = Object(K["b"])(),
                c = e.state,
                b = Object(i["e"])();
                b.use(a["b"]);
                var s = Object(i["E"])({}),
                o = Object(i["E"])([]),
                r = Object(i["F"])( - 1),
                u = Object(i["F"])(0),
                l = Object(i["F"])(!1),
                j = Object(i["F"])( - 1),
                O = Object(i["F"])(0),
                d = Object(i["F"])(!1),
                f = Object(i["d"])((function() {
                    return u.value <= 3 ? "第一关": u.value >= 4 && u.value <= 7 ? "第二关": "第三关"
                }));
                function A(t) {
                    var e = !1;
                    switch (t) {
                    case 1:
                        e = !!s.option_a;
                        break;
                    case 2:
                        e = !!s.option_b;
                        break;
                    case 3:
                        e = !!s.option_c;
                        break;
                    case 4:
                        e = !!s.option_d;
                        break
                    }
                    return e
                }
                function v() {
                    m["default"].question.lietQuestion({
                        openid: c.userData.openid,
                        activity_id: k["a"].activity_id
                    }).then((function(t) {
							t={
    "ret": 200,
    "data": {
        "one": [{
            "id": 12,
            "title": "森林火险预警信号分三级，分别以_____表示。",
            "option_a": "------",
            "option_b": "蓝色、黄色、红色",
            "option_c": "白色、黄色、橙色",
            "option_d": null,
            "customs_pass": 1,
            "analyze": "根据《深圳市气象灾害预警信号及防御措施（2020版）》的有关规定，森林火险预警信号分三级，分别以黄色、橙色、红色表示。森林火险预警信号发布时，居民居家、外出注意防火。"
        },
        {
            "id": 11,
            "title": "有限空间是指_____、进出口受限但人员可以进入，未被设计为固定工作场所，通风不良，易造成有毒有害、易燃易爆物质积聚或氧含量不足的空间。",
            "option_a": "不封闭",
            "option_b": "完全封闭",
            "option_c": "------",
            "option_d": null,
            "customs_pass": 1,
            "analyze": "根据《关于印发<有限空间作业安全指导手册>和4个专题系列折页的通知》（应急厅函〔2020〕299号）文件的有关要求，有限空间是指封闭或部分封闭、进出口受限但人员可以进入，未被设计为固定工作场所，通风不良，易造成有毒有害、易燃易爆物质积聚或氧含量不足的空间。"
        },
        {
            "id": 17,
            "title": "关于烧伤和烫伤的处理，下列做法正确的是_______。",
            "option_a": "抹酱油",
            "option_b": "涂牙膏",
            "option_c": "---------",
            "option_d": null,
            "customs_pass": 1,
            "analyze": "遇到烧伤、烫伤时，不管是涂牙膏还是抹酱油，都会阻碍散热，且很容易造成创面污染，加重瘢痕，影响伤口愈合。"
        },
        {
            "id": 20,
            "title": "当在户外遭遇雷雨天气时，下列做法正确的是_____。",
            "option_a": "在大树下避雨",
            "option_b": "靠近电线杆、变压器",
            "option_c": "------",
            "option_d": null,
            "customs_pass": 1,
            "analyze": "户外遇雷雨时，切忌在大树下避雨，要及时到安全的室内场所暂避；远离电线杆、变压器等设备；如遇积水区域，尽量绕行，切忌冒险涉水；低洼地段如遇积水漫进屋内，应及时切断电源。"
        }],
        "two": [{
            "id": 38,
            "title": "关于家庭用电，下列说法错误的是_____。",
            "option_a": "空调、烤箱等大容量用电设备必须使用专用线路",
            "option_b": "不使用假冒伪劣电器、电线、线槽（管）、开关、插头、插座等",
            "option_c": "--------",
            "option_d": null,
            "customs_pass": 2,
            "analyze": "用湿手触摸电器，用湿布擦拭电器，均易引发触电事故"
        },
        {
            "id": 33,
            "title": "作业人员进入有限空间作业应严格执行_____的原则。",
            "option_a": "---------",
            "option_b": "先检测、再通风、后作业",
            "option_c": "先通风、再作业、后检测",
            "option_d": null,
            "customs_pass": 2,
            "analyze": "存在有限空间作业的企业，应严格执行“先通风、再检测、后作业”的原则，未经通风和检测，严禁作业人员进入有限空间作业。当工作环境发生变化时，应视为进入新的有限空间，必须重新通风和检测后方可进入。"
        },
        {
            "id": 23,
            "title": "暴雨天驾车被困积水区导致熄火时，应_____。",
            "option_a": "留在车内等待救援",
            "option_b": "----------",
            "option_c": "重新启动车辆",
            "option_d": null,
            "customs_pass": 2,
            "analyze": "如果无法打开车门车窗，要利用身边一切可以利用的物品想方设法砸开车窗；离开车辆后，迅速逃离，转移到高处安全地带；向他人发送求救信号获得援救。"
        },
        {
            "id": 21,
            "title": "关于强降雨易引发的地质灾害，下列说法错误的是_____。",
            "option_a": "滑坡",
            "option_b": "泥石流",
            "option_c": "---------",
            "option_d": null,
            "customs_pass": 2,
            "analyze": "强降雨导致土壤含水量较大，容易引发滑坡、崩塌、泥石流等地质灾害。"
        }],
        "three": [{
            "id": 49,
            "title": "生产经营单位的主要负责人未履行本法规定的安全生产管理职责，发生特别重大事故的，处上一年年收入_____的罚款。",
            "option_a": "百分之六十",
            "option_b": "百分之八十",
            "option_c": "----------",
            "option_d": null,
            "customs_pass": 3,
            "analyze": "根据《安全生产法》第九十五条有关规定，生产经营单位的主要负责人未履行本法规定的安全生产管理职责，导致发生特别重大事故的，处上一年年收入百分之一百的罚款。"
        },
        {
            "id": 41,
            "title": "关于生产经营单位安全生产第一责任人的职责，下列说法错误的是_____。",
            "option_a": "------------",
            "option_b": "建立健全并落实本单位全员安全生产责任制，加强安全生产标准化建设",
            "option_c": "组织制定并实施本单位安全生产规章制度和操作规程",
            "option_d": null,
            "customs_pass": 3,
            "analyze": "“组织或者参与本单位应急救援演练”属于生产经营单位安全生产管理机构以及安全生产管理人员履行的职责范围。"
        }]
    }
}
                        200 === t.ret && (o.length = 0, o.push.apply(o, Object(n["a"])(t.data.one).concat(Object(n["a"])(t.data.two), Object(n["a"])(t.data.three))), o.length > 0 && (s = Object.assign(s, o[u.value])))
                    }))
                }
                var p = !0;
                function g(t) {
                    p && (p = !1, m["default"].question.chooseAnswer({
                        openid: c.userData.openid,
                        activity_id: k["a"].activity_id,
                        question_id: s.id,
                        answer: t
                    }).then((function(e) {
                        200 === e.ret && (r.value = t, l.value = e.data.bl_right, j.value = e.data.right_answer, O.value = e.data.right_num, u.value === o.length - 1 && C(), setTimeout((function() {
                            o[u.value].analyze ? d.value = !0 : h()
                        }), 1))
                    })).
                    finally((function() {
                        setTimeout((function() {
                            p = !0
                        }), 1)
                    })))
                }
                var _ = !0;
                function h() {
                    u.value === o.length - 1 ? (ot.value = !0, d.value = !1) : _ && (_ = !1, d.value = !1, r.value = -1, j.value = -1, setTimeout((function() {
                        l.value = !1,
                        u.value++,
                        s = Object.assign(s, o[u.value]),
                        _ = !0
                    }), 300))
                }
                var y = Object(i["F"])(!1),
                w = Object(i["F"])(0);
                function C() {
                    m["default"].question.submitAnswer({
                        openid: c.userData.openid,
                        activity_id: k["a"].activity_id,
                        answer_time: 0
                    }).then((function(t) {
                        200 === t.ret && (y.value = t.data.bl_reach, w.value = t.data.highest_number)
                    }))
                }
                function N() {
                    x["a"].push("/lottery")
                }
                function H() {
                    x["a"].push("/home")
                }
                var ot = Object(i["F"])(!1);
                return Object(i["y"])((function() {
                    v()
                })),
                function(t, e) {
                    return Object(i["A"])(),
                    Object(i["h"])("div", J, [Object(i["i"])("div", U, [Object(i["i"])("div", E, Object(i["J"])(Object(i["K"])(f)), 1), Object(i["i"])("div", S, [B, Object(i["i"])("span", D, Object(i["J"])(10 * Object(i["K"])(O)), 1)]), Object(i["i"])("div", I, [Object(i["i"])("div", M, [Object(i["i"])("div", F, "第" + Object(i["J"])(Object(i["K"])(u) + 1) + "题", 1), Object(i["i"])("div", Q, Object(i["J"])(Object(i["K"])(u) + 1) + "/" + Object(i["J"])(Object(i["K"])(o).length), 1)]), Object(i["i"])("div", R, [Object(i["i"])("span", null, Object(i["J"])(Object(i["K"])(u) + 1) + ".", 1), Object(i["i"])("span", null, Object(i["J"])(Object(i["K"])(s).title), 1)]), Object(i["i"])("div", L, [(Object(i["A"])(), Object(i["h"])(i["a"], null, Object(i["G"])(4, (function(t) {
                        return Object(i["A"])(),
                        Object(i["h"])(i["a"], null, [A(t) ? (Object(i["A"])(), Object(i["h"])("div", {
                            key: 0,
                            class: Object(i["t"])(["answer_item", {
                                right: Object(i["K"])(j) === t,
                                error: Object(i["K"])(r) != Object(i["K"])(j) && Object(i["K"])(r) === t
                            }]),
                            onClick: function(e) {
                                return g(t)
                            }
                        },
                        [1 === t ? (Object(i["A"])(), Object(i["h"])("div", G, "A." + Object(i["J"])(Object(i["K"])(s).option_a), 1)) : Object(i["g"])("", !0), 2 === t ? (Object(i["A"])(), Object(i["h"])("div", P, "B." + Object(i["J"])(Object(i["K"])(s).option_b), 1)) : Object(i["g"])("", !0), 3 === t ? (Object(i["A"])(), Object(i["h"])("div", X, "C." + Object(i["J"])(Object(i["K"])(s).option_c), 1)) : Object(i["g"])("", !0), 4 === t ? (Object(i["A"])(), Object(i["h"])("div", q, "D." + Object(i["J"])(Object(i["K"])(s).option_d), 1)) : Object(i["g"])("", !0), Object(i["K"])(j) === t ? (Object(i["A"])(), Object(i["h"])("div", T, Y)) : Object(i["g"])("", !0), Object(i["K"])(r) === t && Object(i["K"])(r) != Object(i["K"])(j) ? (Object(i["A"])(), Object(i["h"])("div", z, W)) : Object(i["g"])("", !0)], 10, V)) : Object(i["g"])("", !0)], 64)
                    })), 64))])]), Z, $]), Object(i["k"])(Object(i["K"])(a["b"]), {
                        show: Object(i["K"])(d),
                        "onUpdate:show": e[0] || (e[0] = function(t) {
                            return Object(i["p"])(d) ? d.value = t: d = t
                        }),
                        "close-on-click-overlay": !1,
                        style: {
                            top: "45%"
                        }
                    },
                    {
                    default:
                        Object(i["O"])((function() {
                            return [Object(i["i"])("div", tt, [Object(i["i"])("div", et, [Object(i["i"])("div", ct, [Object(i["i"])("span", null, Object(i["J"])(Object(i["K"])(s).analyze), 1)])])]), Object(i["i"])("div", {
                                class: "next_btn",
                                onClick: h
                            },
                            [Object(i["K"])(u) < Object(i["K"])(o).length - 1 ? (Object(i["A"])(), Object(i["h"])("img", nt)) : (Object(i["A"])(), Object(i["h"])("img", at))])]
                        })),
                        _: 1
                    },
                    8, ["show"]), Object(i["k"])(Object(i["K"])(a["b"]), {
                        show: Object(i["K"])(ot),
                        "onUpdate:show": e[1] || (e[1] = function(t) {
                            return Object(i["p"])(ot) ? ot.value = t: ot = t
                        }),
                        "close-on-click-overlay": !1,
                        style: {
                            top: "40%"
                        }
                    },
                    {
                    default:
                        Object(i["O"])((function() {
                            return [Object(i["i"])("div", it, [Object(i["i"])("div", bt, Object(i["J"])(10 * Object(i["K"])(O)) + "分 ", 1), Object(i["K"])(y) ? (Object(i["A"])(), Object(i["h"])("div", st, rt)) : (Object(i["A"])(), Object(i["h"])("div", ut, [lt, Object(i["i"])("div", jt, " 答对" + Object(i["J"])(Object(i["K"])(O)) + "题 ", 1), Ot, Object(i["i"])("div", dt, Object(i["J"])(10 * Object(i["K"])(w)) + "分 ", 1)]))]), Object(i["K"])(y) ? (Object(i["A"])(), Object(i["h"])("div", {
                                key: 0,
                                class: "lottery_btn answer_end_btn",
                                onClick: N
                            },
                            At)) : (Object(i["A"])(), Object(i["h"])("div", {
                                key: 1,
                                class: "back_btn answer_end_btn",
                                onClick: H
                            },
                            pt))]
                        })),
                        _: 1
                    },
                    8, ["show"])])
                }
            }
        },
        _t = (c("d716"), c("6b0d")),
        ht = c.n(_t);
        const yt = ht()(gt, [["__scopeId", "data-v-114f368d"]]);
        e["default"] = yt
    },
    "14c9": function(t, e, c) {
        t.exports = c.p + "static/img/success_txt.131cb8c0.png"
    },
    2442 : function(t, e, c) {},
    "26f8": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfBAMAAADtgAsKAAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMA4yUk30UMTLg/UWFEvcwAAAClSURBVCjPZdEtDgIxEAXgFwjJaggKAzeAK4DE4LArNsHiucT6NXgUCSQk73I0u2/6xFS00+mX/g1wbVHb7QI0PNX5/PwDBr73kTiQPR7kKsCGvKPjSAQ+LWYlvZyAol0h2xEoEAlgIhAkgIlcJWuBSihgImAioLYoiS+ySHvkU9I98k39FvUGGgw0GjjQgkkXoJDx118CIk8MAiI9Gh79plLbVP0/O89y10yVvRMAAAAASUVORK5CYII="
    },
    2909 : function(t, e, c) {
        "use strict";
        c.d(e, "a", (function() {
            return o
        }));
        var n = c("6b75");
        function a(t) {
            if (Array.isArray(t)) return Object(n["a"])(t)
        }
        c("a4d3"),
        c("e01a"),
        c("d3b7"),
        c("d28b"),
        c("3ca3"),
        c("ddb0"),
        c("a630");
        function i(t) {
            if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }
        var b = c("06c5");
        function s() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function o(t) {
            return a(t) || i(t) || Object(b["a"])(t) || s()
        }
    },
    "6a1f": function(t, e, c) {
        t.exports = c.p + "static/img/cloud.d4c6d66b.png"
    },
    "6b0d": function(t, e, c) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = (t, e) = >{
            const c = t.__vccOpts || t;
            for (const[n, a] of e) c[n] = a;
            return c
        }
    },
    "6f0e": function(t, e, c) {
        t.exports = c.p + "static/img/back_btn.0a5d83d3.png"
    },
    "82bc": function(t, e, c) {
        t.exports = c.p + "static/img/logo.0102884f.png"
    },
    "99af": function(t, e, c) {
        "use strict";
        var n = c("23e7"),
        a = c("da84"),
        i = c("d039"),
        b = c("e8b5"),
        s = c("861d"),
        o = c("7b0b"),
        r = c("07fa"),
        u = c("8418"),
        l = c("65f0"),
        j = c("1dde"),
        O = c("b622"),
        d = c("2d00"),
        f = O("isConcatSpreadable"),
        A = 9007199254740991,
        v = "Maximum allowed index exceeded",
        p = a.TypeError,
        g = d >= 51 || !i((function() {
            var t = [];
            return t[f] = !1,
            t.concat()[0] !== t
        })),
        _ = j("concat"),
        h = function(t) {
            if (!s(t)) return ! 1;
            var e = t[f];
            return void 0 !== e ? !!e: b(t)
        },
        y = !g || !_;
        n({
            target: "Array",
            proto: !0,
            forced: y
        },
        {
            concat: function(t) {
                var e, c, n, a, i, b = o(this),
                s = l(b, 0),
                j = 0;
                for (e = -1, n = arguments.length; e < n; e++) if (i = -1 === e ? b: arguments[e], h(i)) {
                    if (a = r(i), j + a > A) throw p(v);
                    for (c = 0; c < a; c++, j++) c in i && u(s, j, i[c])
                } else {
                    if (j >= A) throw p(v);
                    u(s, j++, i)
                }
                return s.length = j,
                s
            }
        })
    },
    b52f: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAfCAMAAABEdrQOAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMA+Qq7U/Xj8OpLJyMdE+bY0s48Nt3DqEUxLCUXD8UNycCQblkhs16YAAAAr0lEQVQ4y5XS2w6CMBAEUBFboSAXEUS8a///G420YV7Y7O68bXIeJpPdyHNQ2DzzbSnGifd+0GDfaLB/i/DZzDjdKvBLg3sRPkb8UOC7Ct9EeD/j54Ld50viLuB2wV2CISmMfxro3Udg6MBJ3PwxmhB8zICR3Tq/RHyNN82Ba2CCE5jmrgq4hCE48Clghk8WmOUFMM8jtgVtwXtgCQeWcjuxGLxyDAQHZpPXxqR0jR9BwSSQSE3AewAAAABJRU5ErkJggg=="
    },
    d716: function(t, e, c) {
        "use strict";
        c("2442")
    },
    ea90: function(t, e, c) {
        t.exports = c.p + "static/img/result_btn.403dd871.png"
    },
    ff51: function(t, e, c) {
        t.exports = c.p + "static/img/next_btn.59593c77.png"
    }
}]);