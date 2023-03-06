(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-b2431b82"], {
    "0357": function(t, e, i) {
        t.exports = i.p + "img/13.50651df9.jpg"
    },
    "0dce": function(t, e, i) {
        t.exports = i.p + "img/26.6dc80e79.jpg"
    },
    "3ed9": function(t, e, i) {
        t.exports = i.p + "img/32.6c9250cd.jpg"
    },
    "50d7": function(t, e, i) {
        t.exports = i.p + "img/34.3887f8e7.jpg"
    },
    "63a1": function(t, e, i) {
        "use strict";
        var c = i("b775");
        e["a"] = {
            getTestInfo: function(t) {
                return Object(c["a"])({
                    url: "mainVenue/getTestInfo/" + t,
                    method: "get"
                })
            },
            updateWenTest: function() {
                return Object(c["a"])({
                    url: "games/updateWenTest",
                    method: "get"
                })
            },
            getGameInitialData: function(t) {
                return Object(c["a"])({
                    url: "games/getGameInitialData/" + t,
                    method: "get"
                })
            },
            reduceRemainNum: function(t) {
                return Object(c["a"])({
                    url: "games/reduceRemain_num/" + t,
                    method: "get"
                })
            },
            useTool: function(t, e) {
                return Object(c["a"])({
                    url: "games/useTool/" + t + "/" + e,
                    method: "get"
                })
            },
            saveGameGrade: function(t, e) {
					alert('xxx')
					e=1002
                return Object(c["a"])({
                    url: "games/saveGameGrade/" + t + "/" + e,
                    method: "get"
                })
            },
            reducePoint: function(t) {
                return Object(c["a"])({
                    url: "games/reducePoint/" + t,
                    method: "get"
                })
            },
            sendPhone: function(t) {
                return Object(c["a"])({
                    url: "games/getPhone",
                    method: "post",
                    data: t
                })
            }
        }
    },
    "66c9": function(t, e, i) {},
    "7eb2": function(t, e, i) {
        "use strict";
        i("66c9")
    },
    abc6: function(t, e, i) {
        t.exports = i.p + "img/again.fea16e0f.png"
    },
    c6ec: function(t, e, i) {
        t.exports = i.p + "img/next.6e773117.png"
    },
    c7f5: function(t, e, i) {
        "use strict";
        i.r(e);
        var c = function() {
            var t = this,
            e = t.$createElement,
            c = t._self._c || e;
            return t.isOver ? c("div", {
                class: t.picClass + " overBody"
            },
            [t.againFlag ? c("div", [c("img", {
                attrs: {
                    src: i("abc6")
                },
                on: {
                    click: t.again
                }
            })]) : c("div", [c("img", {
                attrs: {
                    src: i("c6ec")
                },
                on: {
                    click: t.next
                }
            })])]) : c("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "body fontSize15",
                style: {
                    backgroundImage: "url(" + t.bodyBgUrl + ")"
                }
            },
            [c("div", {
                staticClass: "center"
            },
            [c("div", {
                staticClass: "card"
            },
            [c("div", {
                staticClass: "title_number"
            },
            [t._v("第" + t._s(t.titleNumber) + "题")]), c("div", {
                staticClass: "topic_body"
            },
            [c("div", {
                staticClass: "topic_title_box"
            },
            ["" != t.subject.img && null != t.subject.img ? c("div", {
                staticClass: "topic_body_img"
            },
            [c("img", {
                attrs: {
                    src: t.subject.img
                }
            })]) : t._e(), c("div", {
                staticClass: "topic_body_title"
            },
            [t._v(t._s(t.subject.title))])]), c("div", {
                staticClass: "topic_body_buttons"
            },
            [c("div", {
                class: t.choiceImgS.choiceAImg,
                on: {
                    click: function(e) {
                        return t.choice("A")
                    }
                }
            },
            [t._v(t._s(t.subject.choiceA))]), c("div", {
                class: t.choiceImgS.choiceBImg,
                on: {
                    click: function(e) {
                        return t.choice("B")
                    }
                }
            },
            [t._v(t._s(t.subject.choiceB))]), c("div", {
                class: t.choiceImgS.choiceCImg,
                on: {
                    click: function(e) {
                        return t.choice("C")
                    }
                }
            },
            [t._v(t._s(t.subject.choiceC))])])])])])])
        },
        s = [],
        a = (i("ac1f"), i("5319"), [{
            title: "秦统一后，作为全国规范的文字是？",
            img: "",
            choiceA: "A.楷书",
            choiceB: "B.-----",
            choiceC: "C.草书",
            rightKeyK: "B"
        },
        {
            title: "毛主席曾说：“百代都行秦政制”，这里的秦的“政制”主要是指？",
            img: "",
            choiceA: "A.-------",
            choiceB: "B.中央集权制",
            choiceC: "C.分封制",
            rightKeyK: "A"
        },
        {
            title: "图中呈现的是哪个著名的成语典故？",
            img: i("0357"),
            choiceA: "A.-------",
            choiceB: "B.破釜沉舟",
            choiceC: "C.完璧归赵",
            rightKeyK: "A"
        },
        {
            title: "秦直道、秦始皇陵、万里长城和______这四个并成为“秦始皇的四大工程”。",
            img: "",
            choiceA: "A.承乾宫",
            choiceB: "B.长乐宫",
            choiceC: "C.-------",
            rightKeyK: "C"
        },
        {
            title: "以下哪种体育运动是秦朝时期没有的？",
            img: "",
            choiceA: "A.-------",
            choiceB: "B.击剑",
            choiceC: "C.蹴鞠",
            rightKeyK: "A"
        }]),
        n = [{
            title: "历史上第一座被称为“京”的都城是？",
            img: "",
            choiceA: "A.洛阳",
            choiceB: "B.-------",
            choiceC: "C.北京",
            rightKeyK: "B"
        },
        {
            title: "如果你穿越到汉朝，你可以吃到以下什么美食？",
            img: "",
            choiceA: "A.-------",
            choiceB: "B.东坡肉",
            choiceC: "C.宫保鸡丁",
            rightKeyK: "A"
        },
        {
            title: "在汉代，____这项运动被汉高祖刘邦所重视，并运用与军事训练项目之一。",
            img: "",
            choiceA: "A.-----",
            choiceB: "B.围棋",
            choiceC: "C.滑雪",
            rightKeyK: "A"
        },
        {
            title: "东汉时期，____总结了前人造纸的经验，改进了造纸的方法。",
            img: "",
            choiceA: "A.张衡",
            choiceB: "B.-----",
            choiceC: "C.张骞",
            rightKeyK: "B"
        },
        {
            title: "我国教育事业历史悠久，关于称谓也发生了很多变化，西汉时学校的负责人叫____。",
            img: "",
            choiceA: "A.先生",
            choiceB: "B.教官",
            choiceC: "C.------",
            rightKeyK: "C"
        },
        {
            title: "图中呈现的是哪个成语典故？",
            img: i("0dce"),
            choiceA: "A.衣锦还乡",
            choiceB: "B.完璧归赵",
            choiceC: "C.--------",
            rightKeyK: "C"
        }],
        o = [{
            title: "我们用“羞花”来形容历史上哪位美女？",
            img: "",
            choiceA: "A.西施",
            choiceB: "B.貂蝉",
            choiceC: "C.------",
            rightKeyK: "C"
        },
        {
            title: "上图中哪个才是唐代妇女所穿的服饰",
            img: i("3ed9"),
            choiceA: "A.------",
            choiceB: "B.第二个",
            choiceC: "C.第三个",
            rightKeyK: "A"
        },
        {
            title: "位于长安（今西安）的____，是唐朝时的政治中心和国家象征，也是唐长安城主要宫殿“三大内”中规模最大的一座。",
            img: "",
            choiceA: "A.------",
            choiceB: "B.太极宫",
            choiceC: "C.兴庆宫",
            rightKeyK: "A"
        },
        {
            title: "图中的人物在做什么运动？",
            img: i("50d7"),
            choiceA: "A.拳击",
            choiceB: "B.------",
            choiceC: "C.拔河",
            rightKeyK: "B"
        },
        {
            title: "唐三彩是中国古代陶瓷烧制工艺的珍品，它是以哪三种颜色为基本釉色呢？",
            img: "",
            choiceA: "A.-------",
            choiceB: "B.黄、白、蓝",
            choiceC: "C.黄、红、蓝",
            rightKeyK: "A"
        },
        {
            title: "科举考试中的殿试始于下列哪位皇帝？",
            img: "",
            choiceA: "A.唐太宗",
            choiceB: "B.-------",
            choiceC: "C.唐玄宗",
            rightKeyK: "B"
        },
        {
            title: "唐朝最令人瞩目的文学成就可谓是唐诗，如果你穿越到了盛唐时期，你不会遇到以下哪个诗人？",
            img: "",
            choiceA: "A.李白",
            choiceB: "B.杜甫",
            choiceC: "C.------",
            rightKeyK: "C"
        }],
        h = {
            testList01: a,
            testList02: n,
            testList03: o
        },
        g = i("63a1"),
        l = {
            data: function() {
                return {
                    bodyBgUrl: "",
                    dynasty: this.$store.state.dynastyId,
                    isOver: !1,
                    againFlag: !1,
                    titleList: {},
                    subject: {
                        img: ""
                    },
                    choiceImgS: {
                        choiceAImg: "btn_bg",
                        choiceBImg: "btn_bg",
                        choiceCImg: "btn_bg"
                    },
                    titleNumber: "一",
                    titleIndex: 0,
                    mydisabled: !1,
                    card1: !0,
                    titleNum: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
                    picClass: "",
                    loading: !0,
                    picClassArray: [["picClassfail_qin", "picClass0_qin", "picClass1_qin", "picClass2_qin", "picClass3_qin"], ["picClassfail_han", "picClass0_han", "picClass1_han", "picClass2_han", "picClass3_han"], ["picClassfail_tang", "picClass0_tang", "picClass1_tang", "picClass2_tang", "picClass3_tang"]]
                }
            },
            methods: {
                again: function() {
                    _czc.push(["_trackEvent", "文试", "答错", localStorage.getItem("youmenguserid"), "", ""]),
                    this.isOver = !1
                },
                next: function() {
                    var t = document.getElementById("game");
                    t.style.display = "none",
                    this.$router.replace({
                        path: "/games"
                    })
                },
                choice: function(t) {
                    var e = this;
                    this.mydisabled || (this.mydisabled = !0, t == this.subject.rightKeyK ? (this.ButtonChange(t, "btn_bg_t"), this.againFlag = !1, setTimeout((function() {
                        e.titleIndex < e.titleList.length ? (e.subject = e.titleList[e.titleIndex], e.init()) : e.titleIndex >= e.titleList.length && e.wenGameOver()
                    }), 500)) : (this.ButtonChange(t, "btn_bg_f"), this.againFlag = !0, setTimeout((function() {
                        e.titleIndex = 0,
                        e.subject = e.titleList[0],
                        e.picClass = e.picClassArray[e.dynasty - 1][0],
                        e.isOver = !0,
                        e.init()
                    }), 1500)))
                },
                ButtonChange: function(t, e) {
                    "A" == t ? this.choiceImgS.choiceAImg = e: "B" == t ? this.choiceImgS.choiceBImg = e: "C" == t && (this.choiceImgS.choiceCImg = e)
                },
                init: function() {
                    this.subject = this.titleList[this.titleIndex],
                    this.titleNumber = this.titleNum[this.titleIndex],
                    this.titleIndex++,
                    this.mydisabled = !1,
                    this.choiceImgS = {
                        choiceAImg: "btn_bg",
                        choiceBImg: "btn_bg",
                        choiceCImg: "btn_bg"
                    },
                    this.loading = !1
                },
                wenGameOver: function() {
                    var t = this;
                    g["a"].updateWenTest().then((function(e) {
                        if (e.data.success) {
                            var i = e.data.data.rank;
                            t.isOver = !0,
                            i <= 1e3 ? (_czc.push(["_trackEvent", "文试", "状元", localStorage.getItem("youmenguserid"), "", ""]), t.picClass = t.picClassArray[t.dynasty - 1][2]) : i <= 2e3 ? (_czc.push(["_trackEvent", "文试", "榜眼", localStorage.getItem("youmenguserid"), "", ""]), t.picClass = t.picClassArray[t.dynasty - 1][3]) : i <= 1e4 ? (_czc.push(["_trackEvent", "文试", "探花", localStorage.getItem("youmenguserid"), "", ""]), t.picClass = t.picClassArray[t.dynasty - 1][4]) : (_czc.push(["_trackEvent", "文试", "通关", localStorage.getItem("youmenguserid"), "", ""]), t.picClass = t.picClassArray[t.dynasty - 1][1])
                        }
                    }))
                }
            },
            mounted: function() {
                var t = document.getElementById("game");
                switch (t.style.display = "none", this.dynasty = this.$store.state.dynastyId, this.dynasty) {
                case 1:
                    this.bodyBgUrl = "~@/../static/playGames/literatureTest/qinTitleBg.jpg",
                    this.titleList = h.testList01;
                    break;
                case 2:
                    this.bodyBgUrl = "~@/../static/playGames/literatureTest/hanTitleBg.jpg",
                    this.titleList = h.testList01,
                    this.titleList = h.testList02;
                    break;
                case 3:
                    this.bodyBgUrl = "~@/../static/playGames/literatureTest/tangTitleBg.jpg",
                    this.titleList = h.testList03;
                    break
                }
                this.init()
            }
        },
        r = l,
        u = (i("7eb2"), i("2877")),
        m = Object(u["a"])(r, c, s, !1, null, "5c0ac5a8", null);
        e["default"] = m.exports
    }
}]);