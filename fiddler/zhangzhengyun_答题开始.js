webpackJsonp([1], {
    "0lxj": function(t, e) {},
    "4GQV": function(t, e, a) {
        "use strict";
        e.__esModule = !0,
        e.parseTimeData = function(t) {
            var e = Math.floor(t / o),
            a = Math.floor(t % o / r),
            i = Math.floor(t % r / s),
            u = Math.floor(t % s / n),
            c = Math.floor(t % n);
            return {
                days: e,
                hours: a,
                minutes: i,
                seconds: u,
                milliseconds: c
            }
        },
        e.parseFormat = function(t, e) {
            var a = e.days,
            n = e.hours,
            s = e.minutes,
            r = e.seconds,
            o = e.milliseconds; - 1 === t.indexOf("DD") ? n += 24 * a: t = t.replace("DD", (0, i.padZero)(a)); - 1 === t.indexOf("HH") ? s += 60 * n: t = t.replace("HH", (0, i.padZero)(n)); - 1 === t.indexOf("mm") ? r += 60 * s: t = t.replace("mm", (0, i.padZero)(s)); - 1 === t.indexOf("ss") ? o += 1e3 * r: t = t.replace("ss", (0, i.padZero)(r));
            if ( - 1 !== t.indexOf("S")) {
                var u = (0, i.padZero)(o, 3);
                t = -1 !== t.indexOf("SSS") ? t.replace("SSS", u) : -1 !== t.indexOf("SS") ? t.replace("SS", u.slice(0, 2)) : t.replace("S", u.charAt(0))
            }
            return t
        },
        e.isSameSecond = function(t, e) {
            return Math.floor(t / 1e3) === Math.floor(e / 1e3)
        };
        var i = a("tNtU"),
        n = 1e3,
        s = 60 * n,
        r = 60 * s,
        o = 24 * r
    },
    DJbO: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, n = a("Dd8w"),
        s = a.n(n),
        r = a("BO1k"),
        o = a.n(r),
        u = a("bOdI"),
        c = a.n(u),
        l = (a("tLo2"), a("blRl")),
        h = a.n(l),
        m = (a("MHRi"), a("6xqC")),
        p = a.n(m),
        d = (a("jydU"), a("WQwN")),
        g = a.n(d),
        f = (a("GKy3"), a("4vvA")),
        v = a.n(f),
        D = (a("K7fX"), a("G7a8")),
        y = a.n(D),
        x = (a("FDxC"), a("w+oK")),
        S = a.n(x),
        w = a("FPWn"),
        A = a("NYxO"),
        k = {
            components: (i = {},
            c()(i, S.a.name, S.a), c()(i, y.a.name, y.a), c()(i, v.a.name, v.a), c()(i, g.a.name, g.a), c()(i, p.a.name, p.a), c()(i, h.a.name, h.a), c()(i, "sprite", w.a), i),
            filters: {
                rightItemTxt: function(t) {
                    if (0 != t.length) {
                        var e = "",
                        a = !0,
                        i = !1,
                        n = void 0;
                        try {
                            for (var s, r = o()(t); ! (a = (s = r.next()).done); a = !0) {
                                e += s.value.name
                            }
                        } catch(t) {
                            i = !0,
                            n = t
                        } finally {
                            try { ! a && r.
                                return && r.
                                return ()
                            } finally {
                                if (i) throw n
                            }
                        }
                        return e
                    }
                }
            },
            watch: {},
            inject: ["actmusic"],
            data: function() {
                return {
                    hasrighttips: !1,
                    tipspopShow: !1,
                    playerOptions: {
                        playbackRates: [.7, 1, 1.5, 2],
                        autoplay: !1,
                        muted: !1,
                        loop: !1,
                        preload: "auto",
                        language: "zh-CN",
                        aspectRatio: "16:9",
                        fluid: !0,
                        sources: [{
                            src: "../../static/video/video1.mp4",
                            type: "video/mp4"
                        }],
                        passive: !1,
                        notSupportedMessage: "此视频暂无法播放，请稍后再试",
                        controlBar: {
                            timeDivider: !0,
                            durationDisplay: !0,
                            remainingTimeDisplay: !1,
                            fullscreenToggle: !0
                        }
                    },
                    playAudio: !1,
                    canOptEvent: !0,
                    currentIndex: 0,
                    currentDownJson: {
                        isCutDown: !0,
                        cutDownTye: 2,
                        cutDownTime: 3e4
                    },
                    tipsShow: !1,
                    hastips: !1,
                    jumpType: 1,
                    autoJumpTime: 2e3,
                    btnStatus: 0,
                    queList: [],
                    selstyleArr: {
                    default:
                        {
                            color:
                            "#000",
                            background: "#fff",
                            fontSize: 20
                        },
                        error: {
                            color: "#fff",
                            background: "red",
                            fontSize: 20
                        },
                        right: {
                            color: "#fff",
                            background: "green",
                            fontSize: 20
                        },
                        select: {
                            color: "#fff",
                            background: "orange",
                            fontSize: 20
                        }
                    },
                    checkItemArr: [],
                    checkedArr: [],
                    subAnsArr: [],
                    subAnsTime: 0,
                    id: null
                }
            },
            computed: s()({},
            Object(A.c)(["gamePageData", "hdid", "openid", "gameData", "gameStarId", "routerorder"]), {
                noGuide: function() {
                    return JSON.parse(localStorage.getItem("rou"))[0].isShow
                },
                ishaveSubbtn: function() {
                    return this.gamePageData.editDom.startbtn.rela.length > 1 && this.currentIndex == this.queList.length - 1 && "" != this.gamePageData.editDom.startbtn.rela[1].url
                },
                gameNum: function() {
                    return this.gameData.gameNum
                },
                tipspopTxt: function() {
                    return this.queList[this.currentIndex].quetips
                },
                returnPlayerOptions: function() {
                    return this.playerOptions.sources[0].src = this.queList[this.currentIndex].queurl,
                    this.playerOptions
                },
                isSingle: function() {
                    return 1 === this.queList[this.currentIndex].data.filter(function(t, e) {
                        return t.isTrue
                    }).length
                },
                rightOption: function() {
                    var t = [];
                    return this.queList[this.currentIndex].data.forEach(function(e, a) {
                        e.isTrue && t.push(e.key)
                    }),
                    t
                },
                rightItem: function() {
                    var t = [];
                    return this.queList[this.currentIndex].data.forEach(function(e, a) {
                        e.isTrue && t.push(e)
                    }),
                    t
                },
                cutDownClass: function() {
                    return {
                        color: this.gamePageData.textDom.normalcolor.value,
                        fontSize: this.gamePageData.textDom.normalfontSize.value / 37.5 + "rem"
                    }
                },
                timeRef: function() {
                    return this.$refs.timeRef
                }
            }),
            methods: s()({},
            Object(A.b)(["pageJumpEvent", "changeBagStatus", "changeMusicStatus", "$uStore"]), {
                ansClickEvent: function(t, e) {
                    var a = this;
                    if (this.canOptEvent) if (this.isSingle) console.log("单选"),
                    this.queList[this.currentIndex].data.forEach(function(t) {
                        t.type = "default",
                        a.checkedArr = [],
                        a.checkItemArr = []
                    }),
                    t.type = "select",
                    this.checkedArr.push(t.key),
                    this.checkItemArr.push(t);
                    else {
                        if (console.log("多选"), "default" === t.type) return this.checkedArr.push(t.key),
                        this.checkItemArr.push(t),
                        t.type = "select";
                        this.checkedArr.splice(this.checkedArr.indexOf(t.key), 1),
                        this.checkItemArr.splice(this.checkItemArr.indexOf(t), 1),
                        t.type = "default"
                    }
                },
                jump: function() {
                    var t = this;
                    this.currentIndex < this.queList.length - 1 ? this.resetlastEvent() : this.endEvent(),
                    this.queList[this.currentIndex].data.forEach(function(e) {
                        e.type = "default",
                        t.checkedArr = []
                    }),
                    this.tipsShow = !1,
                    this.canOptEvent = !0
                },
                endEvent: function() {
                    var t = this;
                    this.currentDownJson.isCutDown && this.timeRef.pause(),
                    console.log(this.subAnsTime);
		    
							//刘晶 320925198907182023 13814929369  269569205@163.com 秋衣//--------
//定佑雄 422323195910024516  18205034470 269569205@qq.com lius1510 露新雨
//张祥英 320925195312072526  13812263438 s1399520@qq.com skycityhappy 兔子
//刘成文 320925194803212517  18452411602  99164989@qq.com 悦丰
//陶敏  342625199103210715  13912367484  627268498@qq.com
//朱连强 341204197805062215  15052202321 bigbird0@qq.com 王子
//王庭能  522636198810101030  18800561502  337001765@qq.com  浩南

//孙远 421124199711106396  15051327017  lovemerling@qq.com  白云
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  蝶恋花
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  最爱
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//	'phone':"15950348766",'name':"刘广东",'memo':"530821197107201517",'timer':tt}),
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"薛雪容",'memo':"131122198612114966",'timer':tt}),
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
		    var tt=10500+parseInt(1000*Math.random());//-----
					 this.subAnsTime = (tt / 1e3).toFixed(2);
                    this.$api.answeradd({
                        hdid: this.hdid,
                        openid: this.openid,
                        id: this.gameStarId,
                        columns: {
                            time: this.subAnsTime,
                            data: this.subAnsArr
                        }
                    }).then(function(e) {
                        console.log(e),
                        e.isluck ? p.a.alert({
                            title: "提示",
                            message: e.msg
                        }).then(function() {
                            t.pageJumpEvent(3)
                        }) : p.a.alert({
                            title: "提示",
                            message: e.msg
                        }).then(function() {
                            return t.pageJumpEvent(0)
                        })
                    }).
                    catch(function(e) {
                        console.log(e),
                        p.a.alert({
                            title: "提示",
                            message: e
                        }).then(function() {
                            t.pageJumpEvent(0)
                        })
                    })
                },
                resetlastEvent: function() {
                    1 == this.btnStatus && (this.btnStatus = 0),
                    this.currentIndex++,
                    this.currentDownJson.isCutDown && (1 === this.currentDownJson.cutDownTye ? this.timeRef.reset() : this.timeRef.start())
                },
                autoJump: function() {
                    var t = this,
                    e = v.a.loading({
                        message: "正在进入下一题",
                        duration: 0,
                        forbidClick: !0,
                        loadingType: "spinner"
                    });
                    setTimeout(function() {
                        e.clear(),
                        t.jump()
                    },
                    this.autoJumpTime)
                },
                manualJump: function() {
                    this.jump()
                },
                isRightEvent: function() {
                    return this.compareArraySort(this.checkedArr, this.rightOption)
                },
                timeFinishEvent: function() {
                    1 === this.currentDownJson.cutDownTye ? this.jumpType ? this.nextEvent() : this.autoJump() : this.endEvent()
                },
                onplayevent: function() {
                    this.currentDownJson.isCutDown && this.timeRef.pause(),
                    console.log("视频播放事件")
                },
                onpauseevent: function() {
                    this.currentDownJson.isCutDown && this.timeRef.start(),
                    console.log("视频暂停事件")
                },
                controllAudio: function() {
                    this.playAudio = !this.playAudio,
                    this.currentDownJson.isCutDown && (this.playAudio ? this.timeRef.pause() : this.timeRef.start())
                },
                surplusTime: function() {
                    return ((this.timeRef.time - this.timeRef.remain) / 1e3).toFixed(2)
                },
                fingureEvent: function() {
                    this.currentDownJson.isCutDown && (this.timeRef.pause(), 1 === this.currentDownJson.cutDownTye ? this.subAnsTime += 1 * this.surplusTime() : this.subAnsTime = this.surplusTime())
                },
                nextEvent: function(t) {
                    console.log("next", t),
                    this.subAnsArr.push({
                        id: t || this.queList[this.currentIndex].key,
                        key: this.checkedArr
                    }),
                    this.canOptEvent = !1,
                    this.fingureEvent(),
                    this.isRightEvent() ? this.rightEvent() : (this.errorEvent(), this.tipsShow = !0),
                    this.isManualEvent()
                },
                rightEvent: function() {
                    this.checkItemArr.forEach(function(t, e) {
                        t.type = "right"
                    })
                },
                errorEvent: function() {
                    var t = this.checkItemArr.length > 0;
                    this.isSingle && t ? (console.log(this.checkItemArr), this.checkItemArr[0].type = "error", this.rightItem[0].type = "right") : this.rightItem.forEach(function(t, e) {
                        t.type = "right"
                    })
                },
                isManualEvent: function() {
                    this.jumpType ? this.btnStatus = 1 : this.autoJump()
                },
                compareArraySort: function(t, e) {
                    if (!t && e || t && !e) return ! 1;
                    if (t.length !== e.length) return ! 1;
                    t = [].concat(t),
                    e = [].concat(e),
                    t = t.sort(),
                    e = e.sort();
                    for (var a = 0,
                    i = t.length; a < i; a++) if (t[a] !== e[a]) return ! 1;
                    return ! 0
                },
                gameDataInit: function() {
                    var t = this;
                    for (var e in this.$api.gamestar({
                        hdid: this.hdid,
                        openid: this.openid
                    }).then(function(e) {
		     //var s=e;
								/*for(var i=0;i<e.data.answerList.length;i++){//--------
									
									for(var j=0;j<e.data.answerList[i].anslist.length;j++){
										var qq=e.data.answerList[i].anslist[j];
										//alert(e.data.answerList[i].anslist[j].title)
										if(e.data.answerList[i].anslist[j].isTrue){
											e.data.answerList[i].anslist[j].title='---';
										}else{
											delete qq[j];
										}

										e.data.answerList[i].anslist[j]=qq;
										
									}
								}*/
								for(var i=0;i<e.data.answerList.length;i++){
									
									for(var j=0;j<e.data.answerList[i].data.length;j++){
										var qq=e.data.answerList[i].anslist[j];
										//alert(e.data.answerList[i].anslist[j].title)
										if(e.data.answerList[i].data[j].isTrue){
											e.data.answerList[i].data[j].title='---';
										}else{
											delete qq[j];
										}

										e.data.answerList[i].anslist[j]=qq;
										
									}
								}

                        t.$uStore({
                            name: "gameStarId",
                            value: e.data.id
                        }),
                        t.jumpType = JSON.parse(t.gamePageData.setArr.openManual.value) ? 0 : 1,
                        t.autoJumpTime = 1e3 * parseInt(t.gamePageData.setArr.openManual.rela.Manualnum.value),
                        console.log(t.gamePageData.setArr.openManual.rela.Manualnum.value),
                        t.hastips = JSON.parse(t.gamePageData.setArr.opentips.value),
                        t.hasrighttips = JSON.parse(t.gamePageData.setArr.openrighttips.value),
                        t.queList = e.data.answerList.map(function(t) {
                            var e = !0,
                            a = !1,
                            i = void 0;
                            try {
                                for (var n, s = o()(t.data); ! (e = (n = s.next()).done); e = !0) {
                                    n.value.type = "default"
                                }
                            } catch(t) {
                                a = !0,
                                i = t
                            } finally {
                                try { ! e && s.
                                    return && s.
                                    return ()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            return t
                        }),
                        t.currentDownJson = {
                            isCutDown: JSON.parse(t.gamePageData.setArr.cutDown.value),
                            cutDownTye: "单题倒计时" == t.gamePageData.setArr.cutDown.rela.cutType.value ? 1 : 2,
                            cutDownTime: 1e3 * t.gamePageData.setArr.cutDown.rela.num.value
                        },
                        t.$uStore({
                            name: "isshowmusic",
                            value: JSON.parse(t.gamePageData.setArr.music.value)
                        }),
                        t.$uStore({
                            name: "musicData",
                            value: t.gamePageData.editDom.music
                        }),
                        t.actmusic.src = t.gamePageData.setArr.music.rela.music.url
                    }).
                    catch(function(e) {
                        p.a.alert({
                            title: "提示",
                            message: e
                        }).then(function() {
                            t.pageJumpEvent(0)
                        })
                    }), this.selstyleArr.
                default.color = this.gamePageData.textDom.defaultcolor.value, this.selstyleArr.
                default.background = this.gamePageData.textDom.defaultbg.value, this.selstyleArr.select.background = this.gamePageData.textDom.selectbg.value, this.selstyleArr.select.color = this.gamePageData.textDom.selectcolor.value, this.selstyleArr.error.background = this.gamePageData.textDom.errorbg.value, this.selstyleArr.error.color = this.gamePageData.textDom.errorcolor.value, this.selstyleArr.right.background = this.gamePageData.textDom.rightbg.value, this.selstyleArr.right.color = this.gamePageData.textDom.rightcolor.value, this.selstyleArr) this.selstyleArr[e].fontSize = this.gamePageData.textDom.fontSize.value / 37.5 + "rem"
                }
            }),
            created: function() {
                var t = this;
                if (this.changeBagStatus(!1), this.gameData.gameNum <= 0) p.a.alert({
                    title: "提示",
                    message: "参与活动次数不足"
                }).then(function() {
                    t.noGuide ? t.pageJumpEvent(0) : t.$wx.closeWindow()
                });
                else {
                    var e = this.gameData.gameNum - 1;
                    this.$uStore({
                        name: "gameData.gameNum",
                        value: e
                    }),
                    this.gameDataInit()
                }
            }
        },
        b = {
            render: function() {
                var t = this,
                e = t.$createElement,
                a = t._self._c || e;
                return t.queList.length > 0 ? a("div", {
                    staticClass: "gamepageClass",
                    style: {
                        backgroundImage: "url(" + t.gamePageData.setArr.bg.url + ")"
                    }
                },
                [a("div", {
                    staticClass: "timeClass"
                },
                [t.currentDownJson.isCutDown ? a("van-count-down", {
                    ref: "timeRef",
                    style: t.cutDownClass,
                    attrs: {
                        time: t.currentDownJson.cutDownTime,
                        millisecond: "",
                        format: "mm:ss:SS"
                    },
                    on: {
                        finish: function(e) {
                            return t.timeFinishEvent()
                        }
                    }
                }) : t._e()], 1), t._v(" "), a("div", {
                    staticClass: "text-left ansTipClass",
                    style: {
                        color: this.gamePageData.textDom.normalcolor.value,
                        fontSize: this.gamePageData.textDom.normalfontSize.value / 37.5 + "rem"
                    }
                },
                [t._v(t._s(t.currentIndex + 1) + "/" + t._s(t.queList.length))]), t._v(" "), a("div", {
                    staticClass: "ansmain"
                },
                [a("div", {
                    staticClass: "text-left ansTitleClass",
                    style: {
                        color: this.gamePageData.textDom.normalcolor.value,
                        fontSize: this.gamePageData.textDom.normalfontSize.value / 37.5 + "rem"
                    }
                },
                [t._v("\n      " + t._s(t.queList[t.currentIndex].quetitle)), a("span", [t._v("(" + t._s(t.queList[t.currentIndex].typeTips ? t.queList[t.currentIndex].typeTips: t.isSingle ? "单选": "多选") + ")")])]), t._v(" "), 1 == t.queList[t.currentIndex].quetype ? a("img", {
                    staticClass: "anscenterimg",
                    attrs: {
                        src: t.queList[t.currentIndex].queurl,
                        alt: ""
                    }
                }) : t._e(), t._v(" "), 3 == t.queList[t.currentIndex].quetype ? a("div", {
                    staticClass: "videoClass"
                },
                [a("video-player", {
                    ref: "videoPlayer",
                    staticClass: "video-player vjs-custom-skin",
                    attrs: {
                        playsinline: !0,
                        "x5-playsinline": "",
                        "webkit-playsinline": "true",
                        "x-webkit-airplay": "true",
                        "x5-video-player-type": "h5",
                        "x5-video-player-fullscreen": "",
                        "x5-video-orientation": "portraint",
                        options: t.returnPlayerOptions
                    },
                    on: {
                        play: function(e) {
                            return t.onplayevent()
                        },
                        pause: function(e) {
                            return t.onpauseevent()
                        }
                    }
                })], 1) : t._e(), t._v(" "), 2 == t.queList[t.currentIndex].quetype ? a("div", [a("div", {
                    class: ["audioClass", {
                        turn: t.playAudio
                    }]
                },
                [a("div", {
                    staticClass: "audiocenter",
                    on: {
                        click: function(e) {
                            return t.controllAudio()
                        }
                    }
                },
                [a("van-icon", {
                    attrs: {
                        name: t.playAudio ? "pause": "play"
                    }
                })], 1)])]) : t._e(), t._v(" "), t._l(t.queList[t.currentIndex].data,
                function(e, i) {
                    return a("div", {
                        key: i,
                        staticClass: "selectItem",
                        style: t.selstyleArr[e.type],
                        on: {
                            click: function(a) {
                                return t.ansClickEvent(e, i)
                            }
                        }
                    },
                    [t._v("\n      " + t._s(e.name) + "." + t._s(e.title) + "\n    ")])
                })], 2), t._v(" "), a("div", {
                    staticStyle: {
                        display: "flex",
                        padding: "0 10%"
                    }
                },
                [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tipsShow && "0x70a9dc083c" != t.hdid,
                        expression: "tipsShow&&hdid!='0x70a9dc083c'"
                    }],
                    staticClass: "ansprompt errtips",
                    style: {
                        color: this.gamePageData.textDom.errorcolor.value
                    }
                },
                [t._v("回答错误")]), t._v(" "), a("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "space-between",
                        flex: "1"
                    }
                },
                [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tipsShow && t.hasrighttips,
                        expression: "tipsShow&&hasrighttips"
                    }],
                    staticClass: "ansprompt",
                    style: {
                        color: this.gamePageData.textDom.normalcolor.value
                    }
                },
                [t._v("正确答案：" + t._s(t._f("rightItemTxt")(t.rightItem)))]), t._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tipsShow && t.hastips,
                        expression: "tipsShow&&hastips"
                    }],
                    staticClass: "ansprompt",
                    style: {
                        color: this.gamePageData.textDom.normalcolor.value,
                        textAlign: "right",
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    on: {
                        click: function(e) {
                            t.tipspopShow = !0
                        }
                    }
                },
                [a("van-icon", {
                    style: {
                        marginRight: 4 / 37.5 + "rem"
                    },
                    attrs: {
                        name: "warning-o",
                        size: "0.48rem",
                        color: this.gamePageData.textDom.normalcolor.value
                    }
                }), t._v("提示\n      ")], 1)])]), t._v(" "), a("div", [a("sprite", {
                    attrs: {
                        area: [t.gamePageData.editDom.startbtn.x, t.gamePageData.editDom.startbtn.y, t.gamePageData.editDom.startbtn.w, t.gamePageData.editDom.startbtn.h]
                    },
                    scopedSlots: t._u([{
                        key: "children",
                        fn: function() {
                            return [t.btnStatus ? a("div", [t.ishaveSubbtn ? a("img", {
                                staticClass: "btnclass",
                                attrs: {
                                    src: t.gamePageData.editDom.startbtn.rela[1].url,
                                    alt: ""
                                },
                                on: {
                                    click: t.manualJump
                                }
                            }) : a("img", {
                                staticClass: "btnclass",
                                attrs: {
                                    src: t.gamePageData.editDom.startbtn.rela[0].url,
                                    alt: ""
                                },
                                on: {
                                    click: t.manualJump
                                }
                            })]) : a("img", {
                                staticClass: "btnclass",
                                attrs: {
                                    src: t.gamePageData.editDom.startbtn.url,
                                    alt: ""
                                },
                                on: {
                                    click: function(e) {
                                        return t.nextEvent(t.queList[t.currentIndex].key)
                                    }
                                }
                            })]
                        },
                        proxy: !0
                    }], null, !1, 3147250330)
                })], 1), t._v(" "), a("van-popup", {
                    style: {
                        height: "50%"
                    },
                    attrs: {
                        round: "",
                        "close-icon-position": "top-right",
                        closeable: "",
                        position: "bottom"
                    },
                    model: {
                        value: t.tipspopShow,
                        callback: function(e) {
                            t.tipspopShow = e
                        },
                        expression: "tipspopShow"
                    }
                },
                [a("div", {
                    staticClass: "cwtips",
                    style: {
                        color: this.gamePageData.textDom.normalcolor.value
                    }
                },
                [t._v("\n      " + t._s(t.queList[t.currentIndex].quetips) + "\n    ")])])], 1) : t._e()
            },
            staticRenderFns: []
        };
        var I = a("VU/8")(k, b, !1,
        function(t) {
            a("0lxj")
        },
        "data-v-0ee7b29a", null);
        e.
    default = I.exports
    },
    G7a8: function(t, e, a) {
        "use strict";
        e.__esModule = !0,
        e.
    default = void 0;
        var i = a("VxeN"),
        n = a("fcQK"),
        s = a("4GQV"),
        r = (0, i.createNamespace)("count-down"),
        o = r[0],
        u = r[1],
        c = o({
            props: {
                millisecond: Boolean,
                time: {
                    type: [Number, String],
                default:
                    0
                },
                format: {
                    type: String,
                default:
                    "HH:mm:ss"
                },
                autoStart: {
                    type: Boolean,
                default:
                    !0
                }
            },
            data: function() {
                return {
                    remain: 0
                }
            },
            computed: {
                timeData: function() {
                    return (0, s.parseTimeData)(this.remain)
                },
                formattedTime: function() {
                    return (0, s.parseFormat)(this.format, this.timeData)
                }
            },
            watch: {
                time: {
                    immediate: !0,
                    handler: "reset"
                }
            },
            activated: function() {
                this.keepAlivePaused && (this.counting = !0, this.keepAlivePaused = !1, this.tick())
            },
            deactivated: function() {
                this.counting && (this.pause(), this.keepAlivePaused = !0)
            },
            beforeDestroy: function() {
                this.pause()
            },
            methods: {
                start: function() {
                    this.counting || (this.counting = !0, this.endTime = Date.now() + this.remain, this.tick())
                },
                pause: function() {
                    this.counting = !1,
                    (0, n.cancelRaf)(this.rafId)
                },
                reset: function() {
                    this.pause(),
                    this.remain = +this.time,
                    this.autoStart && this.start()
                },
                tick: function() {
                    i.inBrowser && (this.millisecond ? this.microTick() : this.macroTick())
                },
                microTick: function() {
                    var t = this;
                    this.rafId = (0, n.raf)(function() {
                        t.counting && (t.setRemain(t.getRemain()), t.remain > 0 && t.microTick())
                    })
                },
                macroTick: function() {
                    var t = this;
                    this.rafId = (0, n.raf)(function() {
                        if (t.counting) {
                            var e = t.getRemain(); (0, s.isSameSecond)(e, t.remain) && 0 !== e || t.setRemain(e),
                            t.remain > 0 && t.macroTick()
                        }
                    })
                },
                getRemain: function() {
                    return Math.max(this.endTime - Date.now(), 0)
                },
                setRemain: function(t) {
                    this.remain = t,
                    this.$emit("change", this.timeData),
                    0 === t && (this.pause(), this.$emit("finish"))
                }
            },
            render: function() {
                return (0, arguments[0])("div", {
                    class: u()
                },
                [this.slots("default", this.timeData) || this.formattedTime])
            }
        });
        e.
    default = c
    },
    K7fX: function(t, e, a) {
        a("XqYu"),
        a("NMcM")
    },
    NMcM: function(t, e) {}
});
//# sourceMappingURL=1.b2b92e96d74227f874ac.js.map
