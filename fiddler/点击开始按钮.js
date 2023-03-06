webpackJsonp([38], {
    "5eUU": function(e, t, o) {
        "use strict";
        function s(e) {
            return e = e.replace(/<\/?[^>]*>/g, ""),
            e = e.replace(/[ | ]*\n/g, "\n"),
            e = e.replace(/&nbsp;/gi, ""),
            e = e.replace(/\s/g, "")
        }
        function n(e) {
            return e = e.replace(/<\/?[^>]*>/g, ""),
            e = e.replace(/[ | ]*\n/g, "\n"),
            e = e.replace(/&nbsp;/gi, ""),
            e = e.replace(/\s/g, "")
        }
        function i(e) {
            o("ygh1")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (o("NYxO"), o("UtBj")),
        c = o("h02F"),
        a = o("IE8J"),
        l = o("LTJL"),
        d = o("6p4w"),
        f = o("t9T1"),
        g = o("jJAi"),
        h = o("UJw3"),
        m = o("299l"),
        x = o("KqhQ"),
        p = o("64By"),
        u = o("aQg4"),
        B = o("9eXK"),
        w = o("t/4q"),
        b = o("dT1z"),
        v = o("Lfgh"),
        _ = o("pyzf"),
        I = o("q3Wa"),
        S = o("YVmR"),
        y = o("yJ2L"),
        C = o("hwvO"),
        k = o("7xsW"),
        z = o("usG3"),
        T = o("ZjTY"),
        M = o("H7a6"),
        R = o("+VqB"),
        L = o("GaLd"),
        P = o("wsMt"),
        N = o("YJF4"),
        G = o("pbTc"),
        A = o("wujj"),
        E = o("XS8s"),
        D = (c.a, a.a, l.a, d.a, f.a, I.a, P.a, S.a, y.a, k.a, G.a, A.Games, E.
    default, g.a, T.a, M.a, h.a, m.a, z.a, x.a, p.
    default, u.
    default, B.a, w.a, b.a, v.a, R.
    default, C.a, L.a, N.a, r.a, {
            data: function() {
                return {
                    _uid: 0,
                    showScoreList: !1,
                    rankList: {},
                    rankList2: [],
                    showSpreadList: !1,
                    spreadRank: {},
                    showPrizeList: !1,
                    prizeList: [],
                    prizeRegister: !1,
                    showMyScore: !1,
                    myScore: {},
                    showScoreInfo: !1,
                    showScoreInfo63397: !1,
                    showScoreInfo72805: !1,
                    showScoreInfo63742: !1,
                    showScoreInfo49230: !1,
                    showScoreInfo100467: !1,
                    showScoreInfo100777: !1,
                    showScoreInfo113642: !1,
                    showScoreInfo118302: !1,
                    showScoreInfo129896: !1,
                    showRegister: !1,
                    showWelcome: !0,
                    notesTitle: "活动说明",
                    showNotes: !1,
                    showNotes2: !1,
                    showMemberRegister: !1,
                    default_logo: _.d,
                    alert: !1,
                    alert_serial: !1,
                    followAlert: !1,
                    winnerList: [],
                    inGetSpread: !1,
                    inGetRank: !1,
                    inGetUnitRank: !1,
                    inGetMyScore: !1,
                    inGetScoreInfo: !1,
                    scoredata: {},
                    unitRankList: [],
                    showUnitRankList: !1,
                    unitPeopleList: [],
                    msgTitle: "信息提示",
                    msg: "",
                    player: 0,
                    success: 0,
                    viewIndex: 1,
                    animatedIndex: 1,
                    animateTimeInterval: 0,
                    sceneData: {
                        showScene: !1,
                        playNum: 0,
                        sceneOrder: 0
                    },
                    qrcodeImageStyle: !1,
                    qrcodeText: "请长按识别二维码，关注公众号",
                    alert_47814: !1,
                    notes_title: !1,
                    showComplainInfo: !1,
                    showDiv62026: !1,
                    showNewScene: !1,
                    showBoxVideo: !1,
                    field: "value1",
                    showAdv: !1,
                    isMiniApp: !1,
                    regMemberText: "点击注册",
                    showPK: !0,
                    showWrongBook: !1,
                    showImageViewer: !1,
                    isOpenPage: !0
                }
            },
            components: {
                Flexbox: c.a,
                FlexboxItem: a.a,
                Alert: l.a,
                WinnerList: d.a,
                Prizelist: f.a,
                Register: I.a,
                Register35084: P.a,
                bgmControl: S.a,
                Message: y.a,
                Scene: k.a,
                ImageViewer: G.a,
                Games: A.Games,
                MicroShow: E.
            default,
                ScoreInfo63397: g.a,
                Complain: T.a,
                Barrage: M.a,
                ScoreInfo63742: h.a,
                ScoreInfo49230: m.a,
                showscene: z.a,
                ScoreInfo72805: x.a,
                ScoreInfo100467: p.
            default,
                ScoreInfo100777: u.
            default,
                ScoreInfo113642: B.a,
                ScoreInfo118302: w.a,
                ScoreInfo129896: b.a,
                ScoreInfo131773: v.a,
                BoxVideo: R.
            default,
                MessageFull: C.a,
                WrongBook: L.a,
                Register118403: N.a
            },
            computed: {
                isDemo: function() {
                    return this.$store.state.isDemo
                },
                isStart: function() {
                    return this.$store.state.isStart
                },
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                serialBox: function() {
                    return this.$store.state.serialBox
                },
                playChance: function() {
                    return this.$store.state.playChance
                },
                playedChance: function() {
                    return this.$store.state.playedChance
                },
                continueExplore: function() {
                    return this.$store.state.continueExplore
                },
                registerInfo: function() {
                    return this.$store.state.registerInfo
                },
                isPrePass: function() {
                    return this.$store.state.isPrePass
                },
                isMember: function() {
                    return this.$store.state.isMember
                },
                leftPrizeNum: function() {
                    return this.$store.state.leftPrizeNum
                },
                startBtnImg: function() {
                    return "http://libs.fengchuanba.com/assets/img/explore/btnstyle/" + this.secretBox.config.btnStyle + "/btnStart.png"
                },
                continueBtnImg: function() {
                    return "http://libs.fengchuanba.com/assets/img/explore/btnstyle/" + this.secretBox.config.btnStyle + "/btnContinue.png"
                },
                scoreBtnImg: function() {
                    return "5661336401208" == this.secretBox.code ? "http://libs.fengchuanba.com/assets/img/explore/btnstyle/" + this.secretBox.config.btnStyle + "/btnRank.png": "http://libs.fengchuanba.com/assets/img/explore/btnstyle/" + this.secretBox.config.btnStyle + "/btnScore.png"
                },
                descBtnImg: function() {
                    return "http://libs.fengchuanba.com/assets/img/explore/btnstyle/" + this.secretBox.config.btnStyle + "/btnDesc.png"
                },
                myExpValue4910: function() {
                    return this.$store.state.myExpValue4910
                },
                dayCount: function() {
                    return this.$store.state.dayCount
                },
                shareCount: function() {
                    return this.$store.state.shareCount
                },
                lotteryCount: function() {
                    return this.$store.state.lotteryCount
                },
                videoChance: function() {
                    return this.$store.state.videoChance
                },
                peopleRealCount: function() {
                    return this.$store.state.peopleRealCount
                },
                totalPlayChance: function() {
                    return this.$store.state.totalPlayChance
                },
                scoreInfoTemplate: function() {
                    return A.Games[this.$store.state.scoreInfoTemplate]
                }
            },
            mounted: function() {
                if ("miniprogram" === window.__wxjs_environment && (this.regMemberText = "返回首页"), "555638050989" == this.secretBox.code && (this.qrcodeText = "【关注公众号，获取题库参与答题】", this.qrcodeImageStyle = !0), this.secretBox.config.showScene && this.secretBox.config.sceneId && 0 == this.sceneData.playNum && 1 != this.secretBox.config.sceneOrder) {
                    this.sceneData.showScene = !0;
                    var e = this.$store.state.scenePages;
                    null != e.npage && "" != e.npage && (this.showNewScene = !0),
                    this.sceneData.playNum++
                }
                if (this.secretBox.config.welcomeNoAnimate || 1 == this.secretBox.config.coverMode ? this.animatedIndex = 100 : this.startAnimate(), "miniprogram" === window.__wxjs_environment) {
                    this.isMiniApp = !0;
                    var t = this.secretBox.config.shareImg ? Object(r.a)(this.secretBox.config.shareImg) : this.secretBox.logo ? Object(r.a)(this.secretBox.logo) : "",
                    o = n(this.secretBox.title);
                    this.$store.commit("set_miniprogramflag", !0),
                    wx.miniProgram.postMessage({
                        data: {
                            miniTitle: o,
                            miniImg: t
                        }
                    })
                }
                if ("5651416345349" == this.secretBox.code && 0 == this.playedChance) {
                    this.imagesViewerList = [];
                    for (var s = 1; s <= 58; s++) this.imagesViewerList.push("https://content.fengchuanba.com/file/company/54643/20210811/" + s + ".jpg");
                    this.showImageViewer = !0,
                    this.showWelcome = !1
                }
                this.secretBox.config.autoStart && (this.showWelcome = !1, this.preStartGame())
            },
            filters: {
                cdn: r.a
            },
            events: {},
            methods: {
                showComplain: function() {
                    this.showComplainInfo = !0
                },
                judgeAnimate: function() {
                    0 != this.secretBox.config.hideLogo && 3 != this.secretBox.config.hideLogo && 1 == this.animatedIndex && (this.animatedIndex = 2),
                    this.secretBox.config.hideTitle && 2 == this.animatedIndex && (this.animatedIndex = 3),
                    0 != this.secretBox.register && 1 == this.secretBox.config.showWinnerList && this.secretBox.lottery && this.secretBox.lottery.enable || 3 != this.animatedIndex || (this.animatedIndex = 4),
                    !this.secretBox.config.hideNotes && this.secretBox.notes || 4 != this.animatedIndex || (this.animatedIndex = 5),
                    0 != this.secretBox.register && 2 == this.secretBox.config.showWinnerList && this.secretBox.lottery && this.secretBox.lottery.enable || 5 != this.animatedIndex || (this.animatedIndex = 6)
                },
                startAnimate: function() {
                    var e = this;
                    this.judgeAnimate(),
                    this.animateTimeInterval = setInterval(function() {
                        e.animatedIndex++,
                        e.judgeAnimate(),
                        e.animatedIndex >= 6 && clearInterval(e.animateTimeInterval)
                    },
                    1e3)
                },
                preStartGame: function() {
                    return this.secretBox.config.beforeGameNotes && !this.playedChance ? void(this.showNotes2 = !0) : "554573801246" == this.secretBox.code ? (this.$store.commit("set_isStart", !1), this.msg = "考试答题仅五次答题机会，每次限时30分钟，请谨慎答题。", void(this.alert_47814 = !0)) : void this.startGame()
                },
                startSongYang: function() {
                    this.showPK ? this.showPK = !1 : this.startGame()
                },
                preStartGameCloseNotes: function() {
                    this.showNotes2 = !1,
                    this.startGame()
                },
                startGame: function() {
					//	alert('start')
                    if (!this.isStart) {
                        if (null != this.totalPlayChance && this.totalPlayChance <= 0) return void this.$store.commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "抱歉，您的参与机会已经用完了，感谢参与活动！",
                            showAlert: !0
                        });
                        if (this.$store.commit("set_isStart", !0), this.isDemo && this.secretBox.player >= 100 && !/\d{2}9\d{1}7\d{1}7.*/.test(this.secretBox.code) && !/\d{2}5\d{1}1\d{1}1\d{1}2\d{1}8.*/.test(this.secretBox.code) && !/\d{2}4\d{1}9\d{1}0\d{1}0\d{1}8.*/.test(this.secretBox.code)) return this.msg = "很遗憾，该活动处于测试阶段，参与人数已经超出限制，您不能参加了，请联系管理员!",
                        this.alert = !0,
                        void this.$store.commit("set_isStart", !1);
                        if (!this.continueExplore && this.secretBox.player >= 600 && "5671619640998" == this.secretBox.code) return this.msg = "该活动参与人数已经超出限制，您不能参加了!",
                        this.alert = !0,
                        void this.$store.commit("set_isStart", !1);
                        if (9 == this.secretBox.register && 0 == this.isMember) return this.showMemberRegister = !0,
                        void this.$store.commit("set_isStart", !1);
                        if (this.secretBox.config.playerLimitNum && !this.secretBox.config.noPlayerLimit && this.secretBox.player > this.secretBox.config.playerLimitNum) return this.msg = "很遗憾，活动参与人数已经超出限制，您不能参加了!",
                        this.alert = !0,
                        void this.$store.commit("set_isStart", !1);
                        if (0 == this.secretBox.checkPointCount) return this.msg = "此秘盒没有设置关卡，不能开始闯关!",
                        this.alert = !0,
                        void this.$store.commit("set_isStart", !1);
                        if (this.secretBox.beginTime > this.getCurrentDateTime() && !this.secretBox.config.preRegister) return this.msg = "活动尚未开始，请在 " + this.secretBox.beginTime + " 后参与活动，谢谢！",
                        "5671920503282" == this.secretBox.code && (this.msg = "活动时间为2022年2月1日-3日每天10:00-18:00，如在规定时间内无法进入页面，可能当天红包已领完，本场活动已结束。"),
                        this.alert = !0,
                        void this.$store.commit("set_isStart", !1);
                        if (this.secretBox.config.tw) {
                            var e = "",
                            t = !1;
                            if (this.secretBox.config.tw1) {
                                var o = this.getCurrentTimeHhMm();
                                e = this.secretBox.config.tws1 + " ~ " + this.secretBox.config.twe1,
                                o < this.secretBox.config.tws1 ? e = this.secretBox.config.tws1 + " ~ " + this.secretBox.config.twe1: o >= this.secretBox.config.tws1 && o <= this.secretBox.config.twe1 ? t = !0 : this.secretBox.config.tw2 ? o < this.secretBox.config.tws2 ? e = this.secretBox.config.tws2 + " ~ " + this.secretBox.config.twe2: o >= this.secretBox.config.tws2 && o <= this.secretBox.config.twe2 ? t = !0 : this.secretBox.config.tw3 ? o < this.secretBox.config.tws3 ? e = this.secretBox.config.tws3 + " ~ " + this.secretBox.config.twe3: o >= this.secretBox.config.tws3 && o <= this.secretBox.config.twe3 ? t = !0 : this.secretBox.config.tw4 ? o < this.secretBox.config.tws4 ? e = this.secretBox.config.tws4 + " ~ " + this.secretBox.config.twe4: o >= this.secretBox.config.tws4 && o <= this.secretBox.config.twe4 ? t = !0 : e = this.secretBox.config.tws1 + " ~ " + this.secretBox.config.twe1: e = this.secretBox.config.tws1 + " ~ " + this.secretBox.config.twe1: e = this.secretBox.config.tws1 + " ~ " + this.secretBox.config.twe1: e = this.secretBox.config.tws1 + " ~ " + this.secretBox.config.twe1
                            }
                            if (0 == t) return this.msg = "未在活动开放时间段内，下一个开放时段为" + e,
                            "5671920503282" == this.secretBox.code ? this.msg = "活动时间为2022年2月1日-3日每天10:00-18:00，如在规定时间内无法进入页面，可能当天红包已领完，本场活动已结束。": "5671940202227" == this.secretBox.code && (this.msg = "活动时间为2022年9月10日-12日每天10:00-18:00，如在规定时间内无法进入页面，可能当天红包已领完，本场活动已结束。"),
                            this.alert = !0,
                            void this.$store.commit("set_isStart", !1)
                        }
                        if (this.secretBox.config.preBox && !this.isPrePass) return this.msg = this.secretBox.config.preMsg,
                        this.$store.commit("set_isStart", !1),
                        this.serialBox && 1390 == this.serialBox.id ? void(this.alert = !0) : void(this.alert_serial = !0);
                        var s = !0;
                        if (this.secretBox.bizConfig.followExpire) {
                            var n = this.secretBox.bizConfig.followExpire;
                            n = Date.parse(n.replace(/\-/g, "/")),
                            n < (new Date).getTime() && (s = !1)
                        }
                        if (1 != this.secretBox.config.isFollow || this.secretBox.config.followAppid) if (1 == this.secretBox.config.isFollow && this.secretBox.config.followAppid && s) {
                            var i = this,
                            c = localStorage.getItem("follow_" + this.secretBox.code);
                            $.ajax({
                                url: "../followWechatOpen/open/checkSubscribe",
                                dataType: "json",
                                type: "GET",
                                data: {
                                    openId: c,
                                    appid: i.secretBox.config.followAppid,
                                    type: 1,
                                    code: i.secretBox.code,
                                    visitorId: localStorage.sbox_userid || 0
                                },
                                success: function(e) {
                                    if (e.status && e.subscribe) if (i.registerInfo || 1 != i.secretBox.register || i.secretBox.config.showScene && i.secretBox.config.sceneId && (!i.secretBox.config.showScene || !i.secretBox.config.sceneId || 1 == i.secretBox.config.sceneOrder)) if (!i.registerInfo && 1 == i.secretBox.register && i.secretBox.config.showScene && i.secretBox.config.sceneId && 0 == i.sceneData.playNum && 1 == i.secretBox.config.sceneOrder) i.viewIndex = 7,
                                    i.showRegister = !0,
                                    i.showWelcome = !1,
                                    i.secretBox.bgImage && (document.body.style.backgroundImage = "url(" + Object(r.a)(i.secretBox.bgImage) + ")");
                                    else if (i.secretBox.config.showScene && i.secretBox.config.sceneId && 0 == i.sceneData.playNum && 1 == i.secretBox.config.sceneOrder) {
                                        if (null != i.playChance && i.playChance <= 0) {
                                            var t = "";
                                            if (i.secretBox.shareChance > 0 && 0 == i.shareCount) {
                                                var o = i.secretBox.shareChance > 99 ? "无限": i.secretBox.shareChance;
                                                return t = i.secretBox.config.dayCycle && 1 == i.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完啦，分享朋友圈后可以获得" + o + "次参与机会哦~": i.secretBox.config.dayCycle && 2 == i.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完啦，分享朋友圈后可以获得" + o + "次参与机会哦~": "抱歉，您的参与机会已经用完了，分享朋友圈后可以获得" + o + "次参与机会哦~",
                                                i.$store.commit("set_isStart", !1),
                                                void i.$store.commit("set_shareModal", {
                                                    content: t,
                                                    showShare: !0
                                                })
                                            }
                                            return i.secretBox.config.dayCycle && 1 == i.secretBox.config.dayCycle ? t = "抱歉，您今天的参与机会用完了，请明天再来吧！": i.secretBox.config.dayCycle && 2 == i.secretBox.config.dayCycle || (t = "抱歉，您的参与机会已经用完了，感谢参与活动！"),
                                            i.$store.commit("set_AlertModal", {
                                                alertTitle: "消息",
                                                alertMsg: t,
                                                showAlert: !0
                                            }),
                                            void i.$store.commit("set_isStart", !1)
                                        }
                                        i.sceneData.showScene = !0;
                                        var s = i.$store.state.scenePages;
                                        null != s.npage && "" != s.npage && (i.showNewScene = !0),
                                        i.showWelcome = !1,
                                        i.sceneData.sceneOrder = 1
                                    } else i.goIfExistsBoxVideo();
                                    else i.showRegister = !0,
                                    i.showWelcome = !1,
                                    i.secretBox.bgImage && (document.body.style.backgroundImage = "url(" + Object(r.a)(i.secretBox.bgImage) + ")");
                                    else i.msgTitle = "",
                                    i.followAlert = !0,
                                    i.$store.commit("set_isStart", !1)
                                },
                                error: function() {
                                    i.msg = "很抱歉，网络异常，请重新加载页面!",
                                    i.alert = !0
                                }
                            })
                        } else {
                            if (!this.registerInfo && 1 == this.secretBox.register && (!this.secretBox.config.showScene || !this.secretBox.config.sceneId || this.secretBox.config.showScene && this.secretBox.config.sceneId && 1 != this.secretBox.config.sceneOrder)) return this.showRegister = !0,
                            this.showWelcome = !1,
                            void(this.secretBox.bgImage && (document.body.style.backgroundImage = "url(" + Object(r.a)(this.secretBox.bgImage) + ")"));
                            if (this.secretBox.config.preRegister && this.secretBox.beginTime > this.getCurrentDateTime()) return this.msg = "活动尚未开始，请在 " + this.secretBox.beginTime + " 后参与活动，谢谢！",
                            this.alert = !0,
                            void this.$store.commit("set_isStart", !1);
                            if (!this.registerInfo && 1 == this.secretBox.register && this.secretBox.config.showScene && this.secretBox.config.sceneId && 0 == this.sceneData.playNum && 1 == this.secretBox.config.sceneOrder) this.viewIndex = 7,
                            this.showRegister = !0,
                            this.showWelcome = !1,
                            this.secretBox.bgImage && (document.body.style.backgroundImage = "url(" + Object(r.a)(this.secretBox.bgImage) + ")");
                            else if (this.secretBox.config.showScene && this.secretBox.config.sceneId && 0 == this.sceneData.playNum && 1 == this.secretBox.config.sceneOrder) {
                                if (null != this.playChance && this.playChance <= 0) {
                                    var a = "",
                                    l = this.secretBox.shareChance > 99 ? "无限": this.secretBox.shareChance;
                                    return this.secretBox.shareChance > 0 && 0 == this.shareCount ? (a = this.secretBox.config.dayCycle && 1 == this.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完啦，分享朋友圈后可以获得" + l + "次参与机会哦~": this.secretBox.config.dayCycle && 2 == this.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完啦，分享朋友圈后可以获得" + l + "次参与机会哦~": "抱歉，您的参与机会已经用完了，分享朋友圈后可以获得" + l + "次参与机会哦~", this.$store.commit("set_isStart", !1), void this.$store.commit("set_shareModal", {
                                        content: a,
                                        showShare: !0
                                    })) : (a = this.secretBox.config.dayCycle && 1 == this.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完了，请明天再来吧！": this.secretBox.config.dayCycle && 2 == this.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完了，请下周再来吧！": "抱歉，您的参与机会已经用完了，感谢参与活动！", this.$store.commit("set_AlertModal", {
                                        alertTitle: "消息",
                                        alertMsg: a,
                                        showAlert: !0
                                    }), void this.$store.commit("set_isStart", !1))
                                }
                                this.sceneData.showScene = !0;
                                var d = this.$store.state.scenePages;
                                null != d.npage && "" != d.npage && (this.showNewScene = !0),
                                this.showWelcome = !1,
                                this.sceneData.sceneOrder = 1
                            } else this.goIfExistsBoxVideo()
                        } else {
                            var f = this,
                            g = "../wechat/user/info",
                            h = localStorage.sbox_wxopenid,
                            m = localStorage.getItem("follow_" + this.secretBox.code);
                            m && 28 == m.length ? (g = "../followwechat/user/info", this.secretBox.config.followPort && (g = "../followwechat" + this.secretBox.config.followPort + "/user/info"), h = m, $.ajax({
                                url: g,
                                dataType: "json",
                                type: "GET",
                                data: {
                                    openId: h
                                },
                                success: function(e) {
                                    if (e.status && e.userInfo.subscribe) if (f.$parent.followUserInfo = e.userInfo, f.$parent.followUserArea = e.userInfo.province + "|" + e.userInfo.city, e.userInfo.province.indexOf(f.secretBox.config.fa) >= 0 || e.userInfo.city.indexOf(f.secretBox.config.fa) >= 0 ? f.$parent.followMatch = 0 : f.$parent.followMatch = Math.ceil(10 * Math.random()), f.registerInfo || 1 != f.secretBox.register || f.secretBox.config.showScene && f.secretBox.config.sceneId && (!f.secretBox.config.showScene || !f.secretBox.config.sceneId || 1 == f.secretBox.config.sceneOrder)) if (!f.registerInfo && 1 == f.secretBox.register && f.secretBox.config.showScene && f.secretBox.config.sceneId && 0 == f.sceneData.playNum && 1 == f.secretBox.config.sceneOrder) f.viewIndex = 7,
                                    f.showRegister = !0,
                                    f.showWelcome = !1,
                                    f.secretBox.bgImage && (document.body.style.backgroundImage = "url(" + Object(r.a)(f.secretBox.bgImage) + ")");
                                    else if (f.secretBox.config.showScene && f.secretBox.config.sceneId && 0 == f.sceneData.playNum && 1 == f.secretBox.config.sceneOrder) {
                                        f.sceneData.showScene = !0;
                                        var t = f.$store.state.scenePages;
                                        null != t.npage && "" != t.npage && (f.showNewScene = !0),
                                        f.showWelcome = !1,
                                        f.sceneData.sceneOrder = 1
                                    } else f.goIfExistsBoxVideo();
                                    else f.showRegister = !0,
                                    f.showWelcome = !1,
                                    f.secretBox.bgImage && (document.body.style.backgroundImage = "url(" + Object(r.a)(f.secretBox.bgImage) + ")");
                                    else f.msgTitle = "",
                                    f.followAlert = !0,
                                    f.$store.commit("set_isStart", !1)
                                },
                                error: function() {
                                    f.msg = "网络异常，请重新加载页面~!",
                                    f.alert = !0
                                }
                            })) : f.goIfExistsBoxVideo()
                        }
                    }
                },
                showPrize: function() {
                    var e = this;
                    $.post("service/explore/getMyPrize", {
                        secretBoxCode: this.secretBox.code,
                        userId: localStorage.sbox_userid
                    },
                    function(t, o, s) {
                        if (e.prizeList = t.prizeList, e.$store.commit("set_prize", t.prizeList[0]), e.showPrizeList = !0, e.prizeRegister = e.secretBox.register > 0 && !e.registerInfo && t.prizeList && t.prizeList.length > 0, "5641120286496" == e.secretBox.code) {
                            e.prizeRegister = !1;
                            var n = e;
                            t.prizeList.forEach(function(e) {
                                if (0 == e.prizeType) return void(n.prizeRegister = !0)
                            })
                        }
                    })
                },
                showMessage: function() {
                    this.notesTitle = this.secretBox.config.notesTitle || "活动说明",
                    this.showNotes = !0
                },
                regMember: function() {
                    if ("45140551179" == this.secretBox.code || "45140551170" == this.secretBox.code || "45140551180" == this.secretBox.code || "45140551181" == this.secretBox.code || "45140551182" == this.secretBox.code) return void(self.location.href = "https://gamecenter.fengchuanba.com/customer/1051/nmkx2019/index.html");
                    for (var e = "",
                    t = this.secretBox.code.substr(0, 1), o = this.secretBox.code.substr(1, 1), s = t < o ? t: o, n = 2; n <= 2 * s; n += 2) e += this.secretBox.code.substr(n, 1);
                    if (t > o && (e += this.secretBox.code.substring(2 * s + 2)), "miniprogram" === window.__wxjs_environment) wx.miniProgram.navigateTo({
                        url: "/pages/main/main"
                    });
                    else {
                        if (10909 == e) return void(self.location.href = "https://mportal.fengchuanba.com/index.html#" + e);
                        if (84575 == e) return void(self.location.href = "https://form5382435375.fengchuanba.com/index.html#233-W1J8cshubNL3S36Y0NA8xQbrsnYPDhBg");
                        if (83092 == e) return void(self.location.href = "https://eportal.fengchuanba.com/index.html#" + e + "_register");
                        self.location.href = "https://mportal.fengchuanba.com/index.html#" + e + "_register"
                    }
                },
                showScoreAndRankInfo: function() {
                    var e = this;
                    this.inGetScoreInfo || (this.inGetScoreInfo = !0, "5661209523604" != this.secretBox.code && "5661502983739" != this.secretBox.code || (this.field = "value2"), this.$store.dispatch("getScore", this.field).then(function(t) {
                        e.scoredata = t,
                        "555623830977" == e.secretBox.code || "551481821377" == e.secretBox.code ? e.showScoreInfo63397 = !0 : "552653078482" == e.secretBox.code || "551481821574" == e.secretBox.code ? e.showScoreInfo63742 = !0 : ["554792243101", "554792243105", "554792243104", "554792243103"].includes(e.secretBox.code) ? e.showScoreInfo49230 = !0 : "555722880075" == e.secretBox.code ? e.showScoreInfo72805 = !0 : "5671003004567" == e.secretBox.code ? e.showScoreInfo100467 = !0 : "5631901077977" == e.secretBox.code ? e.showScoreInfo100777 = !0 : "5651712316042" == e.secretBox.code || "5651712316047" == e.secretBox.code || "5651712316046" == e.secretBox.code || "5651712316080" == e.secretBox.code || "5651712316081" == e.secretBox.code || "5651712316082" == e.secretBox.code || "5651712316083" == e.secretBox.code || "5651712316084" == e.secretBox.code ? e.showScoreInfo113642 = !0 : "5631017873102" == e.secretBox.code || "5631017873107" == e.secretBox.code || "5631017874124" == e.secretBox.code || "5631017874125" == e.secretBox.code || "5631017874126" == e.secretBox.code || "5631017874127" == e.secretBox.code || "5631017874128" == e.secretBox.code ? e.showScoreInfo118302 = !0 : "5651425938796" == e.secretBox.code ? e.showScoreInfo129896 = !0 : e.showScoreInfo = !0,
                        e.inGetScoreInfo = !1
                    }))
                },
                openSendBarrage: function() {
                    this.$store.commit("set_sendBarrageFlag", !0)
                },
                qrcodeImage: function() {
                    this.qrcodeImageStyle = !0
                },
                goSerialBoxHome: function() {
                    this.secretBox.config.preEntry && (location.href.indexOf("hairui") >= 0 ? self.location.href = "https://hd5.hairuikeji.com/serialbox/index.html#" + this.secretBox.config.preEntry: location.href.indexOf("sosokx") >= 0 ? self.location.href = "https://serial.sosokx.com/index.html#" + this.secretBox.config.preEntry: self.location.href = "https://serial2.fengchuanba.com/index.html#" + this.secretBox.config.preEntry)
                },
                supplyRegister: function() {
                    this.viewIndex = 3,
                    this.showWelcome = !1,
                    this.showRegister = !0,
                    this.showPrizeList = !1
                },
                gotoPK: function() {
                    var e = window.location.href,
                    t = "https://battle.fengchuanba.com/index.html#",
                    o = e.lastIndexOf("#");
                    if (t += e.substring(o + 1, e.length), "466101641208" == this.secretBox.code && (t = "https://battle.fengchuanba.com/index.html#466101641430-pli5AH9Yh32JT47kXe7KXbHLqO2RavEQ"), "466101641154" == this.secretBox.code && (t = "https://battle.fengchuanba.com/index.html#466101641436-aNz7GFax2TDZtzSREz765I4e1dnpy4EI"), "5631604633543" == this.secretBox.code) {
                        if (1 == this.secretBox.config.isFollow && this.secretBox.config.followAppid) {
                            var s = this,
                            n = localStorage.getItem("follow_" + this.secretBox.code);
                            $.ajax({
                                url: "../followWechatOpen/open/checkSubscribe",
                                dataType: "json",
                                type: "GET",
                                data: {
                                    openId: n,
                                    appid: s.secretBox.config.followAppid,
                                    type: 1,
                                    code: s.secretBox.code,
                                    visitorId: localStorage.sbox_userid || 0
                                },
                                success: function(e) {
                                    if (!e.status || !e.subscribe) return s.msgTitle = "",
                                    void(s.followAlert = !0);
                                    t = "https://battle.fengchuanba.com/index.html#5631604633569-QjcUohzH7CYVKUDkIHTodYuOepKwIkwq",
                                    location.href = t
                                },
                                error: function() {}
                            })
                        }
                    } else location.href = t
                },
                goMportal: function() {
                    return /\d{2}3\d{1}0\d{1}9\d{1}1\d{1}6.*/.test(this.secretBox.code) && (this.secretBox.userId = 30916),
                    /\d{2}6\d{1}8\d{1}2\d{1}5\d{1}4.*/.test(this.secretBox.code) ? void(window.location.href = "https://eportal.fengchuanba.com/index.html#68254") : /\d{2}8\d{1}4\d{1}5\d{1}7\d{1}5.*/.test(this.secretBox.code) ? void(window.location.href = "https://eportal.fengchuanba.com/index.html#84575") : /\d{2}8\d{1}3\d{1}0\d{1}9\d{1}2.*/.test(this.secretBox.code) ? void(window.location.href = "https://eportal.fengchuanba.com/index.html#83092") : void(window.location.href = "https://mportal.fengchuanba.com/index.html#" + this.secretBox.userId)
                },
                goStudy: function() {
                    window.location.href = "https://mportal.fengchuanba.com/index.html#22318_study"
                },
                goIfExistsBoxVideo: function() {
                    this.secretBox.config.enableVideo && null != this.secretBox.config.videoMoment && 2 === this.secretBox.config.videoMoment ? !this.secretBox.config.videoTimes || 1 != this.secretBox.config.videoTimes && 3 != this.secretBox.config.videoTimes ? (this.showWelcome = !1, this.showBoxVideo = !0) : 0 == this.videoChance ? (this.showWelcome = !1, this.showBoxVideo = !0) : this.$store.dispatch("startGame") : "5681336179217" == this.secretBox.code || "5681432322102" == this.secretBox.code ? this.$store.commit("set_showResource131917", !0) : this.$store.dispatch("startGame")
                },
                closeAndPlay: function() {
                    this.isOpenPage = !1,
                    document.getElementById("bgm").play()
                },
                lastPage: function(e) {
                    e.isLandscape && this.$store.commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: "请竖屏进行答题！",
                        showAlert: !0
                    }),
                    this.showWelcome = !0,
                    this.showImageViewer = !1
                }
            }
        }),
        O = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", ["5631626534116" == e.secretBox.code && e.isOpenPage ? o("div", {
                staticStyle: {
                    position: "fixed",
                    "z-index": "999",
                    "text-align": "center"
                },
                on: {
                    click: e.closeAndPlay
                }
            },
            [o("img", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: "https://content.fengchuanba.com/file/user/36631/material20220126121352.jpeg"
                }
            }), e._v(" "), e._m(0)]) : e._e(), e._v(" "), e.showNotes ? o("message-full", {
                attrs: {
                    title: e.notesTitle,
                    message: e.secretBox && e.secretBox.notes,
                    boxInfo: e.secretBox,
                    noteImage: e.secretBox && e.secretBox.config && e.secretBox.config.noteImage
                },
                on: {
                    close: function(t) {
                        e.showNotes = !1
                    }
                }
            }) : e._e(), e._v(" "), "5611605470241" == e.secretBox.code ? o("register35084", {
                attrs: {
                    "show-register": e.showRegister,
                    "box-info": e.secretBox,
                    "view-index": e.viewIndex
                },
                on: {
                    "update:showRegister": function(t) {
                        e.showRegister = t
                    },
                    "update:show-register": function(t) {
                        e.showRegister = t
                    }
                }
            }) : "5641110864603" == e.secretBox.code ? o("register118403", {
                attrs: {
                    "show-register": e.showRegister,
                    "box-info": e.secretBox,
                    "view-index": e.viewIndex
                },
                on: {
                    "update:showRegister": function(t) {
                        e.showRegister = t
                    },
                    "update:show-register": function(t) {
                        e.showRegister = t
                    }
                }
            }) : o("register", {
                attrs: {
                    "show-register": e.showRegister,
                    "box-info": e.secretBox,
                    "view-index": e.viewIndex
                },
                on: {
                    "update:showRegister": function(t) {
                        e.showRegister = t
                    },
                    "update:show-register": function(t) {
                        e.showRegister = t
                    }
                }
            }), e._v(" "), e.showScoreInfo72805 ? o("score-info72805", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo72805 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo63397 ? o("score-info63397", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo63397 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo63742 ? o("score-info63742", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo63742 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo49230 ? o("score-info49230", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo49230 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo100467 ? o("score-info100467", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo100467 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo100777 ? o("score-info100777", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo100777 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo113642 ? o("score-info113642", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo113642 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo118302 ? o("score-info118302", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo118302 = !1
                    }
                }
            }) : e._e(), e._v(" "), e.showScoreInfo129896 ? o("score-info129896", {
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo129896 = !1
                    }
                }
            }) : e._e(), e._v(" "), 555996563647 != e.secretBox.code && 5671237127873 != e.secretBox.code || !e.showScoreInfo ? e.showScoreInfo ? o(e.scoreInfoTemplate, {
                tag: "component",
                attrs: {
                    scoredata: e.scoredata,
                    "box-info": e.secretBox,
                    "register-info": e.registerInfo
                },
                on: {
                    close: function(t) {
                        e.showScoreInfo = !1
                    }
                }
            }) : e._e() : o("ScoreInfo131773", {
                attrs: {
                    scoredata: e.scoredata
                },
                on: {
                    closeScore: function(t) {
                        e.showScoreInfo = !1
                    }
                }
            }), e._v(" "), e.showPrizeList ? o("prizelist", {
                attrs: {
                    "prize-list": e.prizeList,
                    "secret-box": e.secretBox,
                    "prize-register": e.prizeRegister
                },
                on: {
                    close: function(t) {
                        e.showPrizeList = !1
                    },
                    prizeRegister: e.supplyRegister
                }
            }) : e._e(), e._v(" "), e.secretBox.bgVoice ? o("bgm-control") : e._e(), e._v(" "), o("alert", {
                attrs: {
                    title: "信息",
                    content: e.msg,
                    "button-text": "确定"
                },
                on: {
                    "on-hide": function(e) {}
                },
                model: {
                    value: e.alert,
                    callback: function(t) {
                        e.alert = t
                    },
                    expression: "alert"
                }
            }), e._v(" "), o("alert", {
                attrs: {
                    title: "提示",
                    content: e.msg,
                    "button-text": "确定"
                },
                on: {
                    "on-hide": e.startGame
                },
                model: {
                    value: e.alert_47814,
                    callback: function(t) {
                        e.alert_47814 = t
                    },
                    expression: "alert_47814"
                }
            }), e._v(" "), o("alert", {
                attrs: {
                    title: "信息",
                    content: e.msg,
                    "button-text": "前往闯关主页面"
                },
                on: {
                    "on-hide": e.goSerialBoxHome
                },
                model: {
                    value: e.alert_serial,
                    callback: function(t) {
                        e.alert_serial = t
                    },
                    expression: "alert_serial"
                }
            }), e._v(" "), e.showBoxVideo ? o("boxVideo") : e._e(), e._v(" "), e.showImageViewer ? o("image-viewer", {
                attrs: {
                    images: e.imagesViewerList,
                    totalTime: 900
                },
                on: {
                    lastPage: e.lastPage
                }
            }) : e._e(), e._v(" "), 1 == e.sceneData.showScene && 0 == e.showNewScene ? o("Scene", {
                attrs: {
                    sceneData: e.sceneData
                }
            }) : e._e(), e._v(" "), 1 == e.sceneData.showScene && 1 == e.showNewScene ? o("micro-show", {
                attrs: {
                    sceneData: e.sceneData
                }
            }) : e._e(), e._v(" "), e.showComplainInfo ? o("Complain", {
                attrs: {
                    "secret-box": e.secretBox
                },
                on: {
                    close: function(t) {
                        e.showComplainInfo = !1
                    }
                }
            }) : e._e(), e._v(" "), !e.secretBox || !e.showWelcome || e.sceneData.showScene && 1 != e.secretBox.config.sceneOrder ? e._e() : o("div", {
                attrs: {
                    id: "welcome-default"
                }
            },
            [5641912135044 == e.secretBox.code || 5641912135045 == e.secretBox.code ? o("div", {
                staticStyle: {
                    position: "absolute",
                    top: "0"
                }
            },
            [o("img", {
                staticStyle: {
                    "border-radius": "0"
                },
                attrs: {
                    width: "100%",
                    src: "http://content.fengchuanba.com/file/user/59253/material20210719112911.png"
                }
            })]) : e._e(), e._v(" "), o("div", {
                staticClass: "player",
                style: {
                    right: "5651202850306" == e.secretBox.code ? "8vw": ""
                }
            },
            [!e.serialBox && "5671201454212" != e.secretBox.code || 1289 == e.serialBox.id || 1390 == e.serialBox.id ? e._e() : o("span", {
                staticClass: "total",
                staticStyle: {
                    "margin-right": ".5rem"
                },
                on: {
                    click: e.goSerialBoxHome
                }
            },
            [e._m(1), e._v("\n\t\t\t\t\t首页\n\t\t\t\t")]), e._v(" "), e.secretBox.config.hidePlayer ? e._e() : o("span", {
                staticClass: "total"
            },
            [e._m(2), e._v(" "), e.peopleRealCount >= 0 && 5651609965083 != e.secretBox.code && 5651619263017 != e.secretBox.code ? o("span", {
                staticClass: "man-number"
            },
            [e._v("\n\t\t\t\t\t\t " + e._s(e.peopleRealCount) + "  \n\t\t\t\t\t")]) : "5631209245487" == e.secretBox.code ? o("span", {
                staticClass: "man-number"
            },
            [e._v("\n\t\t\t          \t " + e._s(3 * e.secretBox.player) + "  \n\t\t\t          ")]) : o("span", {
                staticClass: "man-number"
            },
            [e._v("\n\t\t\t\t\t\t " + e._s(e.secretBox.player) + "  \n\t\t\t\t\t")])])]), e._v(" "), e.isMember && /\d{2}1\d{1}0\d{1}9\d{1}0\d{1}9.*/.test(e.secretBox.code) && !e.isMiniApp ? o("div", {
                staticClass: "player1",
                class: {
                    player2: e.secretBox.bgVoice
                },
                staticStyle: {
                    "text-align": "left",
                    "font-weight": "500",
                    top: "1.25rem",
                    position: "absolute",
                    "z-index": "100"
                }
            },
            [o("span", {
                staticClass: "total"
            },
            [e._m(3), e._v(" "), o("wx-open-launch-weapp", {
                attrs: {
                    id: "launch-btn",
                    username: "gh_38f6f70ea03c",
                    path: "pages/main/main"
                }
            },
            [o("script", {
                attrs: {
                    type: "text/wxtag-template"
                }
            },
            [e._v('\n              <span class="man-number" style="color: #fff">\n              \t门户首页\n              </span>\n          \t')])])], 1)]) : !e.isMember && !/\d{2}3\d{1}0\d{1}9\d{1}1\d{1}6.*/.test(e.secretBox.code) || e.isMiniApp ? e._e() : o("div", {
                staticClass: "player1",
                class: {
                    player2: e.secretBox.bgVoice
                },
                staticStyle: {
                    "text-align": "left",
                    "font-weight": "500",
                    top: "1.25rem",
                    position: "absolute",
                    "z-index": "100"
                },
                on: {
                    click: function(t) {
                        return e.goMportal()
                    }
                }
            },
            [e._m(4)]), e._v(" "), o("div", {
                style: {
                    "min-height": "5681535651950" == e.secretBox.code ? "40vh": "74vh"
                }
            },
            [o("div", {
                style: {
                    "min-height": "5681535651950" == e.secretBox.code ? "40vh": "65vh"
                }
            },
            [e.secretBox.config.hidePlayer && 3 != e.secretBox.config.hideLogo ? o("div", {
                staticStyle: {
                    "min-height": "1.2rem"
                }
            }) : e._e(), e._v(" "), "5641615942626" == e.secretBox.code ? o("div", {
                staticStyle: {
                    "background-color": "#ffffff",
                    "text-align": "center"
                }
            },
            [e._m(5), e._v(" "), e._m(6)]) : 2 != e.secretBox.config.hideLogo && e.animatedIndex >= 1 ? o("div", {
                staticClass: "animated",
                class: {
                    slideInLeft: 1 == e.animatedIndex,
                    "logo-minHeight": 1 == e.secretBox.config.hideLogo,
                    logo: 3 != e.secretBox.config.hideLogo,
                    logo2: 3 == e.secretBox.config.hideLogo
                }
            },
            [0 != e.secretBox.config.hideLogo && 3 != e.secretBox.config.hideLogo || !e.secretBox.logo ? e._e() : o("img", {
                attrs: {
                    src: e._f("cdn")(e.secretBox.logo)
                }
            })]) : o("div", {
                staticStyle: {
                    "min-height": "2rem"
                }
            }), e._v(" "), o("div", {
                staticClass: "title"
            },
            [!e.secretBox.config.hideTitle && e.animatedIndex >= 2 ? o("div", {
                staticClass: "animated",
                class: {
                    lightSpeedIn: 2 == e.animatedIndex
                },
                domProps: {
                    innerHTML: e._s(e.secretBox.title)
                }
            }) : e._e()]), e._v(" "), e.secretBox.lottery && e.secretBox.lottery.enable && e.secretBox.config.showLeftPrizeNum && e.animatedIndex >= 2 && "5631604633543" != e.secretBox.code ? o("div", {
                staticClass: "animated prizeLeft",
                class: {
                    lightSpeedIn: 2 == e.animatedIndex
                }
            },
            [2 == e.secretBox.config.showLeftPrizeNum ? o("div", [e.leftPrizeNum > 0 ? o("span", [e._v("今日剩余奖品数量" + e._s(e.leftPrizeNum) + "个")]) : o("span", [e._v("今天的奖品已发完。")])]) : o("div", [e.leftPrizeNum > 0 ? o("span", [e._v("剩余奖品数量" + e._s(e.leftPrizeNum) + "个")]) : o("span", [e._v("奖品已发完")])])]) : e._e(), e._v(" "), "5641727007881" == e.secretBox.code ? o("div", [o("div", {
                staticStyle: {
                    "text-align": "center",
                    "font-size": "1rem",
                    color: "white"
                }
            },
            [e._v("\n\t\t\t\t\t\t\t您是第 "), o("span", {
                staticClass: "peopleCount"
            },
            [e._v(e._s(e.secretBox.player + 1))]), e._v(" 位参与答题的用户\n\t\t\t\t\t\t")])]) : e._e(), e._v(" "), (e.secretBox.register > 0 || 1 == e.secretBox.config.wechatUserInfo) && 1 == e.secretBox.config.showWinnerList && e.secretBox.lottery && e.secretBox.lottery.enable && e.animatedIndex >= 3 ? o("div", {
                staticClass: "winner-list animated",
                class: {
                    zoomInUp: 3 == e.animatedIndex
                }
            },
            [o("div", {
                staticClass: "winner-title"
            },
            [e._v("最新获奖列表")]), e._v(" "), o("winner-list")], 1) : e._e(), e._v(" "), !e.secretBox.config.hideNotes && e.secretBox.config.noteImage && e.animatedIndex >= 4 ? o("div", {
                staticClass: "noteImage animated",
                class: {
                    zoomIn: 4 == e.animatedIndex
                }
            },
            [o("img", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: e._f("cdn")(e.secretBox.config.noteImage)
                }
            })]) : !e.secretBox.config.hideNotes && e.secretBox.notes && e.animatedIndex >= 4 && "5651619263017" == e.secretBox.code ? o("div", {
                staticClass: "notes animated",
                class: {
                    notesMask: e.secretBox.config.notesMask,
                    zoomIn: 4 == e.animatedIndex
                },
                staticStyle: {
                    "background-color": "rgba(0, 0, 0, 0.5)"
                }
            },
            [o("p", {
                domProps: {
                    innerHTML: e._s(e.secretBox.notes)
                }
            })]) : !e.secretBox.config.hideNotes && e.secretBox.notes && e.animatedIndex >= 4 && "5671734714556" == e.secretBox.code ? o("div", {
                staticClass: "notes animated",
                class: {
                    notesMask: e.secretBox.config.notesMask,
                    zoomIn: 4 == e.animatedIndex
                },
                staticStyle: {
                    "background-color": "rgba(0, 0, 0, 0.1)"
                }
            },
            [o("p", {
                domProps: {
                    innerHTML: e._s(e.secretBox.notes)
                }
            })]) : !e.secretBox.config.hideNotes && e.secretBox.notes && e.animatedIndex >= 4 ? o("div", {
                staticClass: "notes animated",
                class: {
                    notesMask: e.secretBox.config.notesMask,
                    zoomIn: 4 == e.animatedIndex
                }
            },
            [o("p", {
                domProps: {
                    innerHTML: e._s(e.secretBox.notes)
                }
            })]) : e._e()]), e._v(" "), (e.secretBox.register > 0 || 1 == e.secretBox.config.wechatUserInfo) && 2 == e.secretBox.config.showWinnerList && e.secretBox.lottery && e.secretBox.lottery.enable && e.animatedIndex >= 5 ? o("div", {
                staticClass: "winner-list animated",
                class: {
                    zoomInUp: 5 == e.animatedIndex
                }
            },
            [o("div", {
                staticClass: "winner-title"
            },
            [e._v("最新获奖列表")]), e._v(" "), o("winner-list")], 1) : e._e(), e._v(" "), "5641110864603" == e.secretBox.code ? o("div", [o("div", {
                staticStyle: {
                    margin: "1rem",
                    border: "3px solid #538AF1"
                }
            },
            [e._m(7), e._v(" "), o("div", {
                staticStyle: {
                    "text-align": "center",
                    "font-size": "2.5rem"
                }
            },
            [e._v(e._s(e.secretBox.player) + "人次")])])]) : e._e()]), e._v(" "), !e.secretBox.config.coverMode && e.animatedIndex >= 6 ? o("div", {
                staticClass: "animated",
                class: {
                    fadeInUp: 6 == e.animatedIndex
                },
                staticStyle: {
                    width: "100%"
                }
            },
            ["5671237127873" == e.secretBox.code || "555996563647" == e.secretBox.code ? o("flexbox", [o("flexbox-item", [o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: "https://content.fengchuanba.com/file/user/59253/material20220425093009.png"
                },
                on: {
                    click: e.preStartGame
                }
            })]), e._v(" "), o("flexbox-item", [o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: "https://content.fengchuanba.com/file/user/59253/material20220426202813.png"
                },
                on: {
                    click: e.showScoreAndRankInfo
                }
            })])], 1) : o("flexbox", ["553744441138" != e.secretBox.code ? o("flexbox-item", [5641912135044 == e.secretBox.code || 5641912135045 == e.secretBox.code ? o("div", [e.secretBox.config.btnStyle && !e.continueExplore ? o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: e.startBtnImg
                },
                on: {
                    click: e.preStartGame
                }
            }) : e.secretBox.config.btnStyle && e.continueExplore ? o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: e.continueBtnImg
                },
                on: {
                    click: e.preStartGame
                }
            }) : o("button", {
                staticClass: "start-btn",
                staticStyle: {
                    padding: "0.5rem",
                    "background-color": "blue"
                },
                on: {
                    click: e.preStartGame
                }
            },
            [e.continueExplore ? o("span", [e._v("继续进行")]) : o("span", [o("span", [e._v(e._s(e.secretBox.config && e.secretBox.config.startText || "现在开始"))])])])]) : 5641940475872 == e.secretBox.code ? o("div", [e.secretBox.config.btnStyle ? o("img", {
                staticClass: "btnImgCls",
                staticStyle: {
                    "max-width": "40vw"
                },
                attrs: {
                    src: "https://content.fengchuanba.com/file/company/49078/20221003/start.png"
                },
                on: {
                    click: e.preStartGame
                }
            }) : e._e()]) : o("div", [e.secretBox.config.btnStyle && !e.continueExplore ? o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: e.startBtnImg
                },
                on: {
                    click: e.preStartGame
                }
            }) : e.secretBox.config.btnStyle && e.continueExplore ? o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: e.continueBtnImg
                },
                on: {
                    click: e.preStartGame
                }
            }) : o("button", {
                staticClass: "start-btn",
                staticStyle: {
                    padding: "0.5rem"
                },
                on: {
                    click: e.preStartGame
                }
            },
            [e.continueExplore ? o("span", [e._v("继续进行")]) : o("span", [o("span", [e._v(e._s(e.secretBox.config && e.secretBox.config.startText || "现在开始"))])])])])]) : e._e(), e._v(" "), e.secretBox.register && e.secretBox.config && e.secretBox.config.showSpread ? o("flexbox-item", [o("button", {
                staticClass: "rank-btn",
                on: {
                    click: e.showSpread
                }
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.inGetSpread,
                    expression: "!inGetSpread"
                }],
                staticStyle: {
                    padding: "0.5rem"
                }
            },
            [e._v(e._s(e.secretBox.config && e.secretBox.config.spreadListText || "影响力榜"))]), e._v(" "), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.inGetSpread,
                    expression: "inGetSpread"
                }]
            },
            [o("img", {
                staticStyle: {
                    height: "1.6rem",
                    padding: "2px",
                    margin: "0"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/loading/loading5.gif"
                }
            })])])]) : e._e(), e._v(" "), "552528371582" == e.secretBox.code ? o("flexbox-item", [o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: "http://content.fengchuanba.com/file/company/22318/73668/btnStudy2.png"
                },
                on: {
                    click: e.goStudy
                }
            })]) : 5641912135044 == e.secretBox.code || 5641912135045 == e.secretBox.code ? o("flexbox-item", [e.secretBox.config.btnStyle ? o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: e.scoreBtnImg
                },
                on: {
                    click: e.showScoreAndRankInfo
                }
            }) : o("button", {
                staticClass: "rank-btn",
                staticStyle: {
                    "background-color": "blue"
                },
                on: {
                    click: e.showScoreAndRankInfo
                }
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.inGetScoreInfo,
                    expression: "!inGetScoreInfo"
                }],
                staticStyle: {
                    padding: "0.5rem"
                }
            },
            [e._v(e._s(e.secretBox.config && e.secretBox.config.scoreListText || "成绩"))]), e._v(" "), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.inGetScoreInfo,
                    expression: "inGetScoreInfo"
                }]
            },
            [o("img", {
                staticStyle: {
                    height: "1.6rem",
                    padding: "2px",
                    margin: "0"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/loading/loading5.gif"
                }
            })])])]) : !e.secretBox.config || 0 == e.secretBox.config.hideScore || 3 == e.secretBox.config.hideScore || 2 == e.secretBox.config.hideScore || e.secretBox.config.showUnitRank ? o("flexbox-item", [e.secretBox.config.btnStyle ? o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: e.scoreBtnImg
                },
                on: {
                    click: e.showScoreAndRankInfo
                }
            }) : o("button", {
                staticClass: "rank-btn",
                on: {
                    click: e.showScoreAndRankInfo
                }
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.inGetScoreInfo,
                    expression: "!inGetScoreInfo"
                }],
                staticStyle: {
                    padding: "0.5rem"
                }
            },
            [e._v(e._s(e.secretBox.config && e.secretBox.config.scoreListText || "成绩"))]), e._v(" "), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.inGetScoreInfo,
                    expression: "inGetScoreInfo"
                }]
            },
            [o("img", {
                staticStyle: {
                    height: "1.6rem",
                    padding: "2px",
                    margin: "0"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/loading/loading5.gif"
                }
            })])])]) : e._e(), e._v(" "), "5681330097237" == e.secretBox.code ? o("flexbox-item", [o("img", {
                staticClass: "btnImgCls",
                attrs: {
                    src: "https://content.fengchuanba.com/file/user/59253/material20220527165606.png"
                },
                on: {
                    click: function(t) {
                        e.showWrongBook = !0
                    }
                }
            })]) : e._e()], 1), e._v(" "), "5641940373818" == e.secretBox.code ? o("div", [e._v("剩余" + e._s(e.playChance || 0) + "次机会")]) : e._e(), e._v(" "), 1 == e.secretBox.config.exploreBattle ? o("div", {
                staticClass: "pkBtn_div"
            },
            [o("img", {
                staticClass: "doudong",
                staticStyle: {
                    width: "28%"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/pk/pk-btn-guide.png"
                },
                on: {
                    click: e.gotoPK
                }
            })]) : e._e(), e._v(" "), 466101641208 == e.secretBox.code || 466101641154 == e.secretBox.code ? o("div", {
                staticClass: "pkBtn_div"
            },
            [o("img", {
                staticClass: "doudong",
                staticStyle: {
                    width: "28%"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/pk/pk-btn-guide.png"
                },
                on: {
                    click: e.gotoPK
                }
            })]) : e._e()], 1) : e._e(), e._v(" "), "5641940373818" == e.secretBox.code ? o("div", {
                staticClass: "animation-scale",
                staticStyle: {
                    position: "fixed",
                    right: "0",
                    bottom: "7rem",
                    "max-width": "2rem"
                },
                on: {
                    click: e.showPrize
                }
            },
            [o("img", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: "https://content.fengchuanba.com/file/user/59534/material20220919162552.png"
                }
            })]) : e.secretBox.lottery && e.secretBox.lottery.enable && !e.secretBox.config.coverMode || e.secretBox.config.openbarrage || e.secretBox.config.QRcodeImg ? o("div", {
                staticClass: "toolkit"
            },
            [e.secretBox.lottery && e.secretBox.lottery.enable && !e.secretBox.config.coverMode ? o("div", {
                staticStyle: {
                    height: "2rem"
                },
                on: {
                    click: e.showPrize
                }
            },
            [o("i", {
                staticClass: "icon-gift"
            })]) : e._e(), e._v(" "), e.secretBox.lottery && e.secretBox.lottery.enable && !e.secretBox.config.coverMode && e.secretBox.config.openbarrage ? o("div", {
                staticStyle: {
                    height: "1px",
                    "background-color": "white",
                    "margin-bottom": "0.25rem"
                }
            }) : e._e(), e._v(" "), e.secretBox.config.openbarrage ? o("div", {
                staticStyle: {
                    height: "2rem"
                },
                on: {
                    click: e.openSendBarrage
                }
            },
            [o("i", {
                staticClass: "icon-bubble"
            })]) : e._e(), e._v(" "), (e.secretBox.lottery && e.secretBox.lottery.enable && !e.secretBox.config.coverMode || e.secretBox.config.openbarrage) && e.secretBox.config.QRcodeImg ? o("div", {
                staticStyle: {
                    height: "1px",
                    "background-color": "white",
                    "margin-bottom": "0.25rem"
                }
            }) : e._e(), e._v(" "), e.secretBox.config.QRcodeImg ? o("div", {
                staticStyle: {
                    height: "2rem"
                },
                on: {
                    click: e.qrcodeImage
                }
            },
            [o("i", {
                staticClass: "icon-qrcode"
            })]) : e._e()]) : e._e(), e._v(" "), e.secretBox.config.coverMode || !e.secretBox.config.hideNotes || 2 != e.secretBox.config.hideNotes && 3 != e.secretBox.config.hideNotes ? e._e() : o("div", {
                staticClass: "animation-scale",
                class: {
                    "notes-btn": !e.secretBox.config.btnStyle,
                    "descImg-btn": e.secretBox.config.btnStyle,
                    "descImg-btn2": "553955109989" == e.secretBox.code,
                    "descImg-btn107998": "162107998" == e.secretBox.code
                },
                on: {
                    click: e.showMessage
                }
            },
            ["5631604633543" == e.secretBox.code ? o("img", {
                staticStyle: {
                    "max-width": "1.8rem",
                    "max-height": "6.5rem"
                },
                attrs: {
                    src: "http://content.fengchuanba.com/file/company/36435/20210519/note.png"
                }
            }) : "5671006110746" == e.secretBox.code ? o("img", {
                staticStyle: {
                    "max-width": "1.8rem",
                    "max-height": "6.5rem"
                },
                attrs: {
                    src: "http://content.fengchuanba.com/file/user/59253/material20210420092622.png"
                }
            }) : "5671200328971" == e.secretBox.code ? o("img", {
                staticStyle: {
                    "margin-top": "65vw",
                    "max-width": "1.8rem",
                    "max-height": "6.5rem"
                },
                attrs: {
                    src: "http://content.fengchuanba.com/file/user/59253/material20210427143632.png"
                }
            }) : e.secretBox.config.btnStyle ? o("img", {
                staticStyle: {
                    "max-width": "1.8rem",
                    "max-height": "6.5rem"
                },
                attrs: {
                    src: e.descBtnImg
                }
            }) : o("span", [e._v(e._s(e.secretBox.config && e.secretBox.config.notesTitle || "活动说明"))])]), e._v(" "), 1 == e.secretBox.config.coverMode ? o("div", {
                staticClass: "bottom-menu",
                class: {
                    "no-support": (e.secretBox.bizConfig.funRemoveLogo || 4 == e.secretBox.bizConfig.bizLevel) && !e.secretBox.bizConfig.advSlogan
                }
            },
            [!e.secretBox.config.hideNotes || 2 != e.secretBox.config.hideNotes && 3 != e.secretBox.config.hideNotes ? e._e() : o("ul", {
                staticClass: "bottom-btn",
                on: {
                    click: e.showMessage
                }
            },
            [e._v("\n\t\t\t\t\t" + e._s(e.secretBox.config && e.secretBox.config.notesTitle || "活动说明") + "\n\t\t\t\t")]), e._v(" "), o("ul", {
                staticClass: "bottom-btn",
                on: {
                    click: e.preStartGame
                }
            },
            [e.continueExplore ? o("span", [e._v("继续进行")]) : o("span", [o("span", [e._v(e._s(e.secretBox.config && e.secretBox.config.startText || "现在开始"))]), e._v(" "), e.playChance < 10 ? o("span", [e._v("(" + e._s(e.playChance > 0 ? e.playChance: 0) + ")")]) : e._e()])]), e._v(" "), !e.secretBox.config || 0 == e.secretBox.config.hideScore || 3 == e.secretBox.config.hideScore || 2 == e.secretBox.config.hideScore || e.secretBox.config.showUnitRank ? o("ul", {
                on: {
                    click: e.showScoreAndRankInfo
                }
            },
            [o("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.inGetScoreInfo,
                    expression: "!inGetScoreInfo"
                }],
                staticStyle: {
                    padding: "0.5rem"
                }
            },
            [e._v(e._s(e.secretBox.config && e.secretBox.config.scoreListText || "成绩"))]), e._v(" "), o("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.inGetScoreInfo,
                    expression: "inGetScoreInfo"
                }]
            },
            [o("img", {
                staticStyle: {
                    height: "1.6rem",
                    padding: "2px",
                    margin: "0"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/loading/loading5.gif"
                }
            })])]) : e._e(), e._v(" "), e.secretBox.lottery && e.secretBox.lottery.enable ? o("ul", {
                staticClass: "bottom-btn",
                on: {
                    click: e.showPrize
                }
            },
            [e._v("\n\t\t\t\t\t中奖记录\n\t\t\t\t")]) : e._e()]) : e._e(), e._v(" "), e.showMemberRegister ? o("div", [o("div", {
                staticStyle: {
                    position: "fixed",
                    top: "30vh",
                    left: "10vw",
                    width: "80vw",
                    "z-index": "2",
                    background: "rgba(255,255,255,0.9)",
                    "border-radius": "1rem"
                }
            },
            [o("div", {
                staticStyle: {
                    background: "#fafafc",
                    "border-radius": "5px",
                    "z-index": "100"
                }
            },
            [e._m(8), e._v(" "), o("div", {
                staticStyle: {
                    "padding-bottom": "0.5rem"
                }
            },
            [o("button", {
                staticClass: "start-btn",
                on: {
                    click: e.regMember
                }
            },
            [o("span", {
                staticStyle: {
                    padding: "0.5rem",
                    "line-height": "2rem"
                }
            },
            [e._v(e._s(e.regMemberText))])])])])])]) : e._e(), e._v(" "), "45269903687" != e.secretBox.code ? o("div", {
                staticClass: "bottom-space"
            }) : e._e(), e._v(" "), "5661006581378" == e.secretBox.code ? o("div", [o("span", {
                staticStyle: {
                    "font-size": "1rem",
                    color: "white"
                }
            },
            [e._v("\n\t\t\t\t\t参与答题共计" + e._s(17 * e.secretBox.player) + "人次\n\t\t\t\t")])]) : e._e(), e._v(" "), e.followAlert ? o("div", {
                staticStyle: {
                    position: "fixed",
                    top: "20vh",
                    left: "10vw",
                    width: "80vw",
                    "z-index": "1000",
                    background: "rgba(255,255,255,0.9)",
                    "border-radius": "1rem"
                }
            },
            [o("div", {
                staticStyle: {
                    "margin-top": "1rem"
                }
            },
            [o("img", {
                staticClass: "close",
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/close.png",
                    alt: ""
                },
                on: {
                    click: function(t) {
                        e.followAlert = !1
                    }
                }
            }), e._v(" "), o("div", {
                staticStyle: {
                    color: "black",
                    "font-size": "1.2rem"
                }
            },
            [e._v("友情提示")])]), e._v(" "), o("div", {
                staticStyle: {
                    margin: "0.75rem",
                    "text-align": "left"
                },
                domProps: {
                    innerHTML: e._s(e.secretBox.config.followText)
                }
            }), e._v(" "), e.secretBox.config ? o("img", {
                staticStyle: {
                    width: "80%"
                },
                attrs: {
                    src: e._f("cdn")(e.secretBox.config.followQRCode),
                    alt: ""
                }
            }) : e._e()]) : e._e(), e._v(" "), e.qrcodeImageStyle ? o("div", {
                staticStyle: {
                    "z-index": "9",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.75)",
                    transition: "background 0.3s"
                }
            },
            [o("div", {
                staticStyle: {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    "text-align": "center",
                    width: "80%",
                    "max-width": "400px",
                    transform: "translate(-50%,-50%)",
                    "z-index": "1000",
                    background: "rgba(255,255,255,0.9)",
                    "border-radius": "10px"
                }
            },
            [o("div", {
                staticStyle: {
                    "margin-top": "0.5rem",
                    position: "relative"
                }
            },
            [o("img", {
                staticClass: "close",
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/close.png",
                    alt: ""
                },
                on: {
                    click: function(t) {
                        e.qrcodeImageStyle = !1
                    }
                }
            }), e._v(" "), o("div", {
                staticStyle: {
                    color: "black",
                    "font-size": "1rem"
                }
            },
            [e._v(e._s(e.qrcodeText))])]), e._v(" "), o("div", {
                staticStyle: {
                    "text-align": "center",
                    padding: "0.5rem"
                }
            },
            [o("img", {
                staticStyle: {
                    width: "100%",
                    "border-radius": "5px"
                },
                attrs: {
                    src: e._f("cdn")(e.secretBox.config.QRcodeImg),
                    alt: ""
                }
            })])])]) : e._e(), e._v(" "), "554513626898" == e.secretBox.code ? o("div", {
                staticClass: "complainDiv"
            },
            [o("span", {
                staticClass: "complainBtn",
                staticStyle: {
                    "background-color": "rgba(0, 0, 0, 0.5)"
                },
                on: {
                    click: function(t) {
                        return e.showComplain()
                    }
                }
            },
            [e._v("投诉")])]) : e._e(), e._v(" "), e.showAdv ? o("div", {
                staticStyle: {
                    position: "absolute",
                    width: "100%",
                    top: "0",
                    left: "0",
                    "z-index": "98"
                }
            },
            [o("div", {
                staticStyle: {
                    position: "fixed",
                    right: "1.5rem",
                    top: "1.5rem",
                    "border-radius": "50%",
                    width: "1.5rem",
                    height: "1.5rem"
                },
                on: {
                    click: function(t) {
                        e.showAdv = !1
                    }
                }
            },
            [o("img", {
                attrs: {
                    width: "100%",
                    src: "http://libs.fengchuanba.com/assets/img/explore/close.png"
                }
            })]), e._v(" "), o("img", {
                attrs: {
                    src: "http://content.fengchuanba.com/file/customer/66092/20201203/klyh.jpg",
                    width: "100%"
                }
            })]) : e._e()]), e._v(" "), e.showNotes2 ? o("div", [o("message-full", {
                attrs: {
                    title: e.notesTitle,
                    message: e.secretBox && e.secretBox.notes,
                    boxInfo: e.secretBox,
                    noteImage: e.secretBox && e.secretBox.config && e.secretBox.config.noteImage
                },
                on: {
                    close: function(t) {
                        return e.preStartGameCloseNotes()
                    }
                }
            })], 1) : e._e(), e._v(" "), 5641912135044 == e.secretBox.code || 5641912135045 == e.secretBox.code ? o("div", {
                staticStyle: {
                    position: "fixed",
                    right: "0px",
                    top: "100vw",
                    padding: "0.5rem .2rem",
                    "writing-mode": "vertical-lr",
                    background: "blue",
                    color: "#fff",
                    "border-radius": "5px 0 0 5px",
                    border: "1px solid #e3e3e3"
                },
                on: {
                    click: function(t) {
                        e.showWrongBook = !0
                    }
                }
            },
            [e._v("\n      错题集\n    ")]) : e.secretBox.config.secretBoxWrongBook && "5681330097237" != e.secretBox.code ? o("div", {
                staticStyle: {
                    position: "fixed",
                    right: "0px",
                    bottom: "10vw",
                    padding: "0.5rem .2rem",
                    "writing-mode": "vertical-lr",
                    background: "rgba(243, 123, 29, 0.9)",
                    color: "#fff",
                    "border-radius": "5px 0 0 5px",
                    border: "1px solid #e3e3e3"
                },
                on: {
                    click: function(t) {
                        e.showWrongBook = !0
                    }
                }
            },
            [e._v("\n      错题集\n    ")]) : e._e(), e._v(" "), e.showWrongBook ? o("WrongBook", {
                on: {
                    close: function(t) {
                        e.showWrongBook = !1
                    }
                }
            }) : e._e(), e._v(" "), e.secretBox.config.openbarrage ? o("barrage") : e._e()], 1)
        },
        W = [function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticStyle: {
                    color: "white",
                    "margin-top": "-100vw"
                }
            },
            [o("img", {
                staticStyle: {
                    width: "45vw"
                },
                attrs: {
                    src: "https://content.fengchuanba.com/file/user/36631/material20220126141346.png"
                }
            })])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("span", {
                staticClass: "man-icon"
            },
            [o("i", {
                staticClass: "icon-home"
            })])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("span", {
                staticClass: "man-icon"
            },
            [o("i", {
                staticClass: "icon-user"
            })])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("span", {
                staticClass: "man-icon"
            },
            [o("i", {
                staticClass: "icon-home"
            })])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("span", {
                staticClass: "total"
            },
            [o("span", {
                staticClass: "man-icon"
            },
            [o("i", {
                staticClass: "icon-home"
            })]), e._v(" "), o("span", {
                staticClass: "man-number"
            },
            [e._v("\n\t\t\t\t\t\t门户首页  \n\t\t\t\t\t")])])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticStyle: {
                    margin: "0 auto",
                    width: "70%",
                    "padding-top": "3rem"
                }
            },
            [o("img", {
                attrs: {
                    src: "http://content.fengchuanba.com/file/user/46546/material20211019114625.gif"
                }
            })])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", [o("img", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: "http://content.fengchuanba.com/file/user/46546/material20211111162108.jpg"
                }
            })])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticStyle: {
                    "font-weight": "normal",
                    color: "white",
                    "margin-bottom": "0.5rem",
                    "margin-top": "-0.75rem"
                }
            },
            [o("span", {
                staticStyle: {
                    background: "#538AF1",
                    padding: "0.5rem 1rem"
                }
            },
            [e._v("(总参与人次)")])])
        },
        function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticStyle: {
                    "min-height": "100px",
                    padding: "1rem",
                    "text-align": "left"
                }
            },
            [o("p", [e._v("　　此活动只有指定的会员才能参加，很遗憾，您未被授权参与!")])])
        }],
        j = {
            render: O,
            staticRenderFns: W
        },
        F = j,
        V = o("VU/8"),
        U = i,
        q = V(D, F, !1, U, null, null);
        t.
    default = q.exports
    },
    ToxB: function(e, t, o) {
        t = e.exports = o("FZ+f")(!1),
        t.push([e.i, "\n#welcome-default {\n  text-align: center;\n}\n#welcome-default .player {\n  margin-left: 1.5rem;\n  text-align: left;\n  font-weight: 500;\n  top: 1.25rem;\n  position: absolute;\n  z-index: 100;\n}\n#welcome-default .player1 {\n  right: 8vw;\n}\n#welcome-default .player2 {\n  right: 14vw;\n}\n#welcome-default .total {\n  border-radius: 20px;\n  box-shadow: 0px 0px 4px #888888;\n  background: rgba(64, 64, 64, 0.35);\n  color: #FFF;\n  text-align: left;\n  font-size: 0.9rem;\n  padding: 0.1rem 0.1rem 0 0;\n}\n#welcome-default .man-icon {\n  font-size: 0.9rem;\n  border-radius: 45%;\n  background: rgba(172, 189, 207, 0.8);\n  padding: 0.1rem 0.2rem 0 0.2rem;\n  width: 2rem;\n}\n#welcome-default .man-number {\n  font-size: 0.85rem;\n}\n#welcome-default .logo {\n  margin: 0 auto;\n  padding-top: 3rem;\n}\n#welcome-default .logo img {\n  max-width: 80%;\n  border-radius: 5px;\n}\n#welcome-default .logo2 {\n  margin: 0 auto;\n}\n#welcome-default .logo2 img {\n  width: 100%;\n}\n#welcome-default .logo-minHeight {\n  min-height: 23vh;\n}\n#welcome-default .title {\n  /*min-height: 2rem;*/\n  font-weight: 700;\n  font-size: 22px;\n  /*text-shadow: 0px 0px 1px #888*/\n  color: #fff;\n  margin: 0.5rem 1rem;\n}\n#welcome-default .winner-title {\n  margin: 1rem 0 0 0;\n  background: rgba(255, 204, 0, 0.85);\n  border-radius: 5px 5px 0 0;\n  color: #ffffff;\n  font-size: 0.8rem;\n  text-align: center;\n}\n#welcome-default .winner-list {\n  margin: 0 1rem 0 1rem;\n}\n#welcome-default .notes {\n  margin: 0rem 1rem 1rem 1rem;\n  text-align: left;\n  color: #FFF;\n  font-size: 0.9rem;\n  /*word-break:keep-all;*/\n  /*word-wrap:break-word;*/\n  /*white-space:pre-wrap;*/\n  /*text-shadow: 1px 1px 1px #888;*/\n}\n#welcome-default .notesMask {\n  background-color: rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 0.5rem;\n}\n#welcome-default .noteImage {\n  padding: 0.5rem 1rem;\n  text-align: center;\n}\n#welcome-default .sharenotice {\n  margin: 0.25rem 1rem 0rem 1rem;\n  text-align: center;\n  font-size: 0.75rem;\n  color: #FFF;\n  padding: 1px;\n  text-shadow: 1px 1px 1px #000;\n}\n#welcome-default .vux-flexbox-item {\n  text-align: center;\n}\n#welcome-default button {\n  display: block;\n  min-width: 7rem;\n  margin: 0 auto;\n  /*font-weight:bold;*/\n  /*border-radius:999px;*/\n  border-radius: 5px;\n  border-color: #F37B1D;\n  color: #FFF;\n  font-size: 0.85rem;\n  line-height: 1.2;\n  text-align: center;\n  white-space: nowrap;\n  border: 1px solid transparent;\n  transition: background-color 0.3s ease-out, border-color 0.3s ease-out;\n}\n#welcome-default button:focus {\n  outline: 0;\n}\n#welcome-default .start-btn {\n  background: rgba(243, 123, 29, 0.9);\n  border: 1px solid #ffe7d4;\n}\n#welcome-default .rank-btn {\n  background: rgba(100, 100, 100, 0.75);\n  border: 1px solid #e3e3e3;\n}\n#welcome-default .bottom-space {\n  height: 2.5rem;\n}\n#welcome-default a {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#welcome-default .x-show {\n  animation: btnanim 1s ease;\n}\n@keyframes btnanim {\nfrom {\n    transform: translateY(30%);\n    opacity: 0;\n}\n}\n#welcome-default .toolkit {\n  position: fixed;\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: white;\n  padding: 0.3rem 0.2rem 0rem 0.3rem;\n  margin: 0;\n  bottom: 4rem;\n  right: 0rem;\n  width: 1.5rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top: 2px solid #ffffff;\n  border-left: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  z-index: 1000;\n}\n#welcome-default .btn-bottom {\n  position: fixed;\n  bottom: 4rem;\n}\n#welcome-default .notes-btn {\n  position: fixed;\n  color: orange;\n  font-size: 0.85rem;\n  padding: 0.1rem 0.2rem 0.1rem 0.4rem;\n  margin: 0;\n  top: 8rem;\n  margin-left: 0rem;\n  width: 1rem;\n  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.4);\n  line-height: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top: 1px solid #ececec;\n  border-right: 1px solid #ececec;\n  border-bottom: 1px solid #ececec;\n}\n#welcome-default .descImg-btn {\n  position: fixed;\n  margin: 0;\n  top: 9rem;\n  margin-left: 0rem;\n  max-width: 2.5rem;\n}\n#welcome-default .descImg-btn2 {\n  position: fixed;\n  margin: 0;\n  top: 25rem;\n  margin-left: 0rem;\n  max-width: 2.5rem;\n}\n#welcome-default .descImg-btn107998 {\n  position: fixed;\n  margin: 0;\n  top: 20vw;\n  margin-left: 0rem;\n  max-width: 2.5rem;\n}\n@keyframes scaleDraw {\n0% {\n    transform: scale(1);\n}\n25% {\n    transform: scale(1.15);\n}\n50% {\n    transform: scale(1);\n}\n75% {\n    transform: scale(1.15);\n}\n}\n#welcome-default .animation-scale {\n  animation-name: scaleDraw;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-duration: 4s;\n  animation-direction: alternate;\n}\n#welcome-default .bottom-menu {\n  position: fixed;\n  bottom: 1.2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: rgba(255, 255, 255, 0.95);\n  color: #f37b1d;\n  max-width: 1024px;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n#welcome-default .bottom-menu ul {\n  -ms-flex: 1;\n      flex: 1;\n  line-height: 2.75rem;\n  border-left: 1px solid #cccccc;\n  border-top: 1px solid #cccccc;\n  /*border-right:1px solid #dddddd;*/\n}\n#welcome-default .no-support {\n  bottom: 0;\n}\n#welcome-default .close {\n  position: absolute;\n  width: 1.5rem;\n  right: 0.5rem;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n}\n#welcome-default .btnImgCls {\n  width: 75%;\n  max-width: 38vw;\n}\n#welcome-default .prizeLeft {\n  color: #FF3300;\n  text-align: center;\n  margin: 1rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;\n  -moz-text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;\n  *filter: Glow(color=#fff, strength=1);\n}\n#welcome-default .peopleCount {\n  color: #FF3300;\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;\n  -moz-text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;\n  *filter: Glow(color=#fff, strength=1);\n}\n#welcome-default .pkBtn_div {\n  width: 100%;\n}\n#welcome-default .doudong {\n  animation: tada 1s .2s infinite;\n}\n@keyframes tada {\n0% {\n    transform: scale(1);\n}\n10%,\n  20% {\n    transform: scale(0.9) rotate(-3deg);\n}\n30%,\n  50%,\n  70%,\n  90% {\n    transform: scale(1) rotate(3deg);\n}\n40%,\n  60%,\n  80% {\n    transform: scale(1) rotate(-3deg);\n}\n100% {\n    transform: scale(1) rotate(0);\n}\n}\n@keyframes tada {\n0% {\n    transform: scale(1);\n}\n10%,\n  20% {\n    transform: scale(0.9) rotate(-3deg);\n}\n30%,\n  50%,\n  70%,\n  90% {\n    transform: scale(1) rotate(3deg);\n}\n40%,\n  60%,\n  80% {\n    transform: scale(1) rotate(-3deg);\n}\n100% {\n    transform: scale(1) rotate(0);\n}\n}\n.complainDiv {\n  text-align: right;\n  position: fixed;\n  right: 0rem;\n  bottom: 2rem;\n}\n.complainBtn {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  border-radius: 8px;\n}\n.back_serialbox {\n  position: fixed;\n  top: 50vh;\n  left: 0;\n  -ms-writing-mode: tb-lr;\n  writing-mode: vertical-lr;\n  writing-mode: tb-lr;\n  background-color: #dc3900;\n  height: 5rem;\n  color: white;\n  border-radius: 0 0.3rem 0.3rem 0;\n  text-align: center;\n  padding: 0 .1rem;\n  box-shadow: 1px 1px 1px black;\n}\n", ""])
    },
    ygh1: function(e, t, o) {
        var s = o("ToxB");
        "string" == typeof s && (s = [[e.i, s, ""]]),
        s.locals && (e.exports = s.locals);
        o("rjj0")("4496b460", s, !0, {})
    }
});

