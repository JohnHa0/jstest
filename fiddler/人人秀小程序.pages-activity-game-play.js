(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-game-play"], {
    "0ef2": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("4bb6"),
        a = i.n(n);
        for (var o in n)["default"].indexOf(o) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return n[t]
            }))
        } (o);
        e["default"] = a.a
    },
    2290 : function(t, e, i) {
        var n = i("4bad");
        e = n(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.stimulate-box[data-v-47036517]{position:absolute;top:%?460?%;right:%?0?%;width:%?90?%;height:%?320?%;border-radius:%?4?%;background:rgba(0,0,0,.5);pointer-events:none}.stimulate-box .friend-content[data-v-47036517]{position:absolute;bottom:%?0?%;text-align:center;left:%?16?%;overflow:hidden}.stimulate-box .friend-content .user-box[data-v-47036517]{height:%?102?%}.stimulate-box .head[data-v-47036517]{width:%?60?%;height:%?60?%;border-radius:100%;border:%?4?% solid #fff}.stimulate-box .name[data-v-47036517]{position:absolute;margin-top:%?-10?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-top:%?-16?%;color:#333;font-size:%?32?%;font-weight:700}.upDowm[data-v-47036517]{-webkit-transition:all .5s;transition:all .5s}.rightAni[data-v-47036517]{-webkit-transition:all .5s;transition:all .5s}.hideRight[data-v-47036517]{right:%?-90?%}.hint[data-v-47036517]{position:absolute;color:#fff;font-size:%?18?%;left:%?-80?%;\r\n  /* border-collapse: separate; */padding:%?6?%;border-radius:%?8?%}.triangle[data-v-47036517]{position:absolute;width:%?12?%;height:%?12?%;right:%?-6?%;top:%?16?%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hideHint[data-v-47036517]{opacity:0}.friend-box[data-v-47036517]{overflow:hidden;width:100%;height:100%;position:relative}', ""]),
        t.exports = e
    },
    "259f": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("558d"),
        a = i("0ef2");
        for (var o in a)["default"].indexOf(o) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return a[t]
            }))
        } (o);
        i("688c");
        var r, s = i("f0c5"),
        d = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "19cd9304", null, !1, n["a"], r);
        e["default"] = d.exports
    },
    "2d9c": function(t, e, i) {
        var n = i("0c6d"),
        a = (i("ca00"), n.uploadRequest, n.request),
        o = "game/GameView/",
        r = function(t) {
            return a(o + "startGame", t, "post")
        },
        s = function(t) {
            return a(o + "helperGame", t, "post")
        },
        d = function(t) {
            return a(o + "saveGame", t, "post")
        },
        c = function(t) {
            return a(o + "getRankList", t, "post")
        },
        u = function(t) {
            return a("m/activity/SaveRankAddress", t, "post")
        },
        l = function(t) {
            return a("m/activity/winRankPrize", t, "post")
        },
        f = function(t) {
            return a(o + "getLastScore", t, "post")
        },
        h = function(t) {
            return a("game/gameLevelView/getRankList", t, "post")
        };
        t.exports = {
            startGame: r,
            saveGame: d,
            getRankList: c,
            saveRankAddress: u,
            winRankPrize: l,
            helperGame: s,
            getLastScore: f,
            getGameLevelRankList: h
        }
    },
    "330ca": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("4afe"),
        a = i("a2bc");
        for (var o in a)["default"].indexOf(o) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return a[t]
            }))
        } (o);
        i("d70ee");
        var r, s = i("f0c5"),
        d = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "47036517", null, !1, n["a"], r);
        e["default"] = d.exports
    },
    "47ab": function(t, e, i) {
        "use strict";
        var n = i("4ea4");
        i("99af"),
        i("13d5"),
        i("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        n(i("e143")),
        n(i("ca00"));
        var a = "",
        o = {
            name: "PkStimulate",
            props: {
                skin: {
                    type: Object,
                default:
                    function() {
                        return {
                            themeColor:
                            "#8A1C07",
                            color: "#fff"
                        }
                    }
                },
                curScore: {
                    type: Number,
                default:
                    function() {
                        return 0
                    }
                },
                friendTops: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    curIndex: -1,
                    reservedCurIndex: 0,
                    nextIndex: 0,
                    upDowmStyle: "",
                    isShowRight: !1,
                    isShowHintRight: !1,
                    hintStyle: ""
                }
            },
            onLoaded: function(t) {},
            computed: {
                friendTopRow: function() {
                    return this.repetitionRow(this.friendTops)
                }
            },
            components: {},
            watch: {
                curScore: function(t, e) {
                    0 != t && (this.getDownDis(t), this.s = t)
                }
            },
            mounted: function() {},
            methods: {
                repetitionRow: function(t) {
                    if (t.length <= 0) return [];
                    var e = {},
                    i = t.reduce((function(t, i) {
                        return ! e[i.bestScore] && (e[i.bestScore] = t.push(i)),
                        t
                    }), []);
                    return 1 == i.length && 0 == i[0]["bestScore"] ? [] : i
                },
                getDownDis: function(t) {
                    var e = this.friendTopRow.length;
                    if (! (e <= 0)) {
                        this.getCurTop(t);
                        var i = 260,
                        n = 0,
                        a = 0;
                        e <= 2 ? (i = 160, this.nextIndex = e - 1, a = e - 1 - this.curIndex, this.nextIndex = this.curIndex - 1) : (i = 260, a = e - 1 - this.curIndex, this.nextIndex = e - 1, this.curIndex < e && (this.nextIndex = this.curIndex - 1, i = 160), a <= 0 && (a = 0)),
                        n = 100 * a * -1 + "rpx",
                        this.upDowmStyle = "bottom:".concat(n),
                        this.hintStyle = "background:".concat(this.skin.themeColor, ";top: ").concat(i, "rpx")
                    }
                },
                getCurTop: function(t) {
                    var e = this.friendTopRow.length;
                    if (! (e <= 0)) { - 1 == this.curIndex && (this.curIndex = e, this.reservedCurIndex = -1);
                        for (var i = this.curIndex - 1; i > -1; i--) {
                            var n = this.friendTopRow[i].bestScore;
                            if (t < n) break;
                            if (i > 0) {
                                var a = this.friendTopRow[i - 1].bestScore;
                                if (t >= n && t < a) {
                                    this.curIndex = i;
                                    break
                                }
                            } else if (t > n) {
                                this.curIndex = 0,
                                this.isShowRight = !1,
                                this.isShowHintRight = !1,
                                this.$emit("surpassNum", this.friendTopRow.length);
                                break
                            }
                        }
                        this.hide()
                    }
                },
                hide: function() {
                    var t = this,
                    e = this.friendTopRow.length - this.curIndex - 1;
                    e <= 0 && (e = 0),
                    this.$emit("surpassNum", e),
                    this.curIndex != this.reservedCurIndex && (this.reservedCurIndex = this.curIndex, this.isShowRight = !0, this.isShowHintRight = !0, 0 == this.curIndex && (this.isShowHintRight = !1), clearTimeout(a), a = setTimeout((function() {
                        t.isShowHintRight = !1,
                        t.isShowRight = !1
                    }), 2e3))
                }
            }
        };
        e.
    default = o
    },
    "4afe": function(t, e, i) {
        "use strict";
        var n;
        i.d(e, "b", (function() {
            return a
        })),
        i.d(e, "c", (function() {
            return o
        })),
        i.d(e, "a", (function() {
            return n
        }));
        var a = function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "stimulate-box rightAni",
                class: {
                    hideRight: !t.isShowRight
                }
            },
            [i("v-uni-view", {
                staticClass: "friend-box"
            },
            [i("v-uni-view", {
                staticClass: "friend-content upDowm",
                style: t.upDowmStyle
            },
            t._l(t.friendTopRow, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "user-box"
                },
                [i("v-uni-view", {},
                [i("v-uni-image", {
                    staticClass: "head",
                    attrs: {
                        src: e.photo
                    }
                })], 1), i("v-uni-view", {
                    staticClass: "name",
                    style: {
                        color: n == t.nextIndex ? t.skin.themeColor: t.skin.color
                    }
                },
                [t._v(t._s(e.bestScore))])], 1)
            })), 1)], 1), i("v-uni-view", {
                staticClass: "hint rightAni",
                class: {
                    hideHint: !t.isShowHintRight
                },
                style: t.hintStyle
            },
            [i("v-uni-view", {
                staticClass: "triangle",
                style: {
                    background: t.skin.themeColor
                }
            }), t._v("即将超越")], 1)], 1)
        },
        o = []
    },
    "4bb6": function(t, e, i) {
        "use strict"; (function(t) {
            var n = i("4ea4");
            i("99af"),
            i("ac1f"),
            i("5319"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var a = n(i("e143")),
            o = (n(i("5dd8")), n(i("ca00"))),
            r = n(i("bee5")),
            s = n(i("330ca")),
            d = n(i("c5e2")),
            c = n(i("2d9c")),
            u = n(i("60a2")),
            l = n(i("9cf6")),
            f = n(i("9cc6")),
            h = n(i("43cc")),
            m = n(i("3aa0")),
            g = "",
            p = 0,
            v = {
                data: function() {
                    return {
                        addressPage: a.
                    default.$pagePath.userAddressList,
                        basePath: "",
                        isLoading: !0,
                        activityInfo: {
                            endTime: "2026-01-22 23:59"
                        },
                        guid: "",
                        fmid: "",
                        skin: {
                            homeStyle: {}
                        },
                        loadingStyle: "",
                        isLoadGameEnd: !1,
                        surpassNum: 0,
                        isShowPkStimulate: !1,
                        themeColor: "#8A1C07",
                        curScore: 0,
                        pkStimulateSkin: {},
                        currentTime: 0,
                        gameData: "",
                        userInfo: {},
                        endDialogName: "endDialog",
                        friendTopsList: [],
                        isHelpStyle: 0,
                        isEnd: !1
                    }
                },
                computed: {},
                components: {
                    PkStimulate: s.
                default
                },
                onLoaded: function(t) {
                    this.activityInfo = u.
                default.getData(t.guid),
                    this.guid = t.guid,
                    p = t.isMini || 0,
                    o.
                default.chekIsH5Activity() || !a.
                default.gameGuid || a.
                default.$isEdit || window.location.reload(),
                    o.
                default.chekIsH5Activity() && 1 != r.
                default.getData("canStartGame") ? o.
                default.goBackH5Page(this.activityInfo.wsiteGuid):
                    (r.
                default.setData("canStartGame", 0), a.
                default.gameGuid = this.guid, this.fmid = g = t.fmid || "", this.isHelpStyle = t.iht, this.isShowGame = !0, this.getActive())
                },
                methods: {
                    getActivityInfo: function() {
                        var t = this,
                        e = {
                            activityGuid: this.guid
                        };
                        h.
                    default.getActivity(e).then((function(e) {
                            if (o.
                        default.hideLoading(), 0 == e.result) {
                                t.activityInfo = e.data;
                                var i = t.parseActivityTheme(e.data.theme);
                                t.activityInfo.skin = i,
                                t.getActive()
                            } else alert(e.msg)
                        }))
                    },
                    loadingLoad: function(t) {
                        var e = 150;
                        t && t.target && (e = t.target.width),
                        this.loadingStyle = "width:".concat(e, "rpx")
                    },
                    getActive: function() {
                        var t = this,
                        e = !1,
                        i = new Date(this.activityInfo.endTime.replace(/-/g, "/")),
                        n = new Date;
                        n > i && (e = !0),
                        this.isEnd = e,
                        a.
                    default.conf.assetsHost + "mini/game/";
                        var r = this.activityInfo;
                        o.
                    default.setNavigationBarTitle(r.activityName),
                        this.basePath = a.
                    default.conf.assetsHost + "mini/game/",
                        this.initTheme(),
                        this.initPk(),
                        setTimeout((function() {
                            t.updataShareInfo()
                        }), 1e3)
                    },
                    initPk: function() {
                        var t = this,
                        e = this.activityInfo;
                        if (0 == e.isOpenHelperStyle && 1 == e.isOpenPK) {
                            var i = {
                                activityGuid: this.guid,
                                rankType: 1,
                                mallGuid: this.activityInfo.mallGuid
                            };
                            c.
                        default.getRankList(i).then((function(e) {
                                o.
                            default.hideLoading(),
                                0 == e.result && (t.friendTopsList = e.data.list, t.isShowPkStimulate = !0)
                            }))
                        }
                    },
                    initTheme: function() {
                        this.skin = this.activityInfo.skin;
                        var t = l.
                    default.transitionSkin(this.skin, this.activityInfo.exdata);
                        this.themeColor = this.skin.colorStyle.themeColor,
                        this.pkStimulateSkin = {
                            themeColor: this.themeColor,
                            color: this.skin.overStyle.color
                        },
                        a.
                    default.$isEdit || this.loadGameResource(t)
                    },
                    gameDistribute: function() {
                        this.currentTime = (new Date).getTime(),
                        platform.startGame()
                    },
                    importScore: function(t) {
                        1 == this.activityInfo.isOpenPK && (this.curScore = t)
                    },
		    addScore:function(t){//-------------
					try{
						alert("xxx")
						var tt=this;
						 var i = {
                            activityGuid: this.guid,
                            rankType: 0,
                            mallGuid: this.activityInfo.mallGuid
                        };
                        c.
                    default.getRankList(i).then((function(e) {
							
							//秋衣 刘晶晶 138
                            var first=parseInt(e.data.list[0].bestScore)+parseInt(Math.random()*2)*5+5
							setTimeout(function(){
							tt.addScore1(first)
							
							},1)
								
                        }))
							} catch (e) { 
						alert(e.name + ": " + e.message); 
					} 
					},
                    addScore1: function(e) {
                        var i = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (1 != a.
                    default.$isInH5) {
                            var r = !0;
                            if (r) {
                                var s = (new Date).getTime() - this.currentTime;
								
									if(this.guid=='1ee75b8519d0ffc9602ce6e59756d02b'){
										//机器猫 18014246678 需要完善地址   心想事成 133
										s=parseFloat((e*parseFloat(360/488)+ parseInt(200*Math.random())/100).toFixed(2))+12
										//	s=2000
									}
								var d = g,
                                u = this.isHelpStyle,
                                l = {
                                    activityGuid: this.guid,
                                    fmid: d,
                                    currentScore: e,
                                    currentTime: s,
                                    isHelpStyle: u,
                                    mallGuid: this.activityInfo.mallGuid,
                                    gameMemo: n.memo || ""
                                };
                                o.
                            default.showLoading(),
                                this.surpassNum = this.getSurpassNum(e),
                                c.
                            default.saveGame(l).then((function(a) {
                                    if (i.isHideBtns = !1, i.isShowPkStimulate = !1, o.
                                default.hideLoading(), r = !1, 0 == a.result || 99 == a.result) {
                                        var s = a.data.lastKey;
                                        i.goEndPage(s, a.data)
                                    } else 4500 == a.result ? (t.log("======saveGame====33==", a), o.
                                default.showVerifyCodeDialog({
                                        guid:
                                        i.guid,
                                        hideClose: !0,
                                        hideMaskClose: !0,
                                        callback: function(a) {
                                            t.log("showVerifyCodeDialog", a),
                                            a && a.isVerify && i.addScore(e, n)
                                        }
                                    })) : (i.gameData = {
                                        isLottery: 0,
                                        myRecord: {
                                            name: i.userInfo.name,
                                            photo: i.userInfo.photo,
                                            bestScore: 0,
                                            curScore: e
                                        }
                                    },
                                    setTimeout((function() {
                                        i.goEndPage("")
                                    }), 300))
                                }))
                            }
                        }
                    },
                    goEndPage: function(t) {
                        if (o.
                    default.chekIsH5Activity()) {
                            var e = {};
                            return t && (e.lastKey = t),
                            this.surpassNum > 0 && (e.surpassNum = this.surpassNum),
                            m.
                        default.emit("gameEnd_" + this.guid, e),
                            void o.
                        default.goBackH5Page(this.activityInfo.wsiteGuid)
                        }
                        var i = this.activityInfo.wsiteGuid,
                        n = a.
                    default.$pagePath.gameIndex + "?wsiteGuid=" + i + "&guid=" + this.guid + "&isback=1";
                        if (t && (n += "&lastKey=" + t), g ? n += "&fmid=" + g: this.activityInfo.memberGuid && (n += "&fmid=" + this.activityInfo.memberGuid), this.surpassNum > 0 && (n += "&surpassNum=" + this.surpassNum), this.isHelpStyle && (n += "&iht=" + this.isHelpStyle), a.
                    default.$isIframe && (n += "&iframe=1"), a.
                    default.$rrxsrc && (n += "&rrxsrc=".concat(a.
                    default.$rrxsrc)), 1 == p) n = o.
                    default.appendMiniMwa(n),
                        wx.miniProgram.redirectTo({
                            url: n
                        });
                        else {
                            var r = window.location.protocol,
                            s = window.location.host,
                            d = a.
                        default.conf.viewBaseRoute || "h";
                            n = "".concat(r, "//").concat(s, "/").concat(d).concat(n),
                            n = o.
                        default.appendMiniMwa(n),
                            window.location.replace(n)
                        }
                    },
                    getSurpassNum: function(t) {
                        for (var e = 0,
                        i = this.friendTopsList.length - 1; i >= 0; i--) if (0 != this.friendTopsList[i].totalTime || this.friendTopsList[i].memberGuid != this.activityInfo.memberGuid) {
                            if (! (t >= this.friendTopsList[i]["bestScore"])) break;
                            e++
                        }
                        return e
                    },
                    loadGameResource: function(e) {
                        var i = this,
                        n = "6.7.7" + o.
                    default.getVersion(),
                        a = {
                            _basePath: this.basePath + this.activityInfo.token + "/",
                            pluginGameHelper: {
                                themeDict: e,
                                strategyEvent: {
                                    addScore: this.addScore,
                                    platformFun: this.platformFun(),
                                    isLoadOver: function() {
                                        i.isLoading = !1
                                    }
                                },
                                pageEvent: {},
                                friendsPkEvent: {
                                    importScore: function(t) {
                                        i.importScore(t)
                                    }
                                },
                                gameMode: 1
                            },
                            gameMode: 1,
                            resourceVersion: n
                        };
                        window.platform = window.egret = window.egret_cos_map = window.egret_sin_map = "",
                        window.GameUtils = window.PopUpManager = window.Main = window.Pool = window.FPS = window.NotifyUtil = window.PanelManager = window.PanelManager = window.GameLayer = window.GamePanel = window.GameScene = "",
                        "cocos" != this.activityInfo.engineType ? l.
                    default.load(this.basePath, this.activityInfo.token, n, p, (function() {
                            if (window.platform.setPluginContext(a), i.isLoadGameEnd = !0, 1 == p) {
                                var t = i;
                                t.gameDistribute()
                            } else i.gameDistribute()
                        })) : l.
                    default.loadCocos(this.basePath, this.activityInfo.token, n, p, (function() {
                            t.log("成功加载Cocos游戏"),
                            t.log(a, "注入游戏设置数据，皮肤，声音，文本等"),
                            window.platform.setPluginContext(a),
                            i.gameDistribute()
                        }))
                    },
                    parseActivityTheme: function(t) {
                        if (!t || t.constructor === Array) return null;
                        var e = d.
                    default.parseTheme(t);
                        if (!e) return null;
                        var i = e.colorStyle.themeColor;
                        return e.themeColor = i,
                        e.bgStyle || (e.bgStyle = {}),
                        e.moduleStyle || (e.moduleStyle = {}),
                        e
                    },
                    updataShareInfo: function() {
                        var e = this.activityInfo,
                        i = "",
                        n = "";
                        if (e.content && e.content.shareImageUrl) {
                            n = e.content.shareImageUrl,
                            i = e.content.title;
                            var r = 0,
                            s = getApp();
                            s.globalData && s.globalData.wsite && s.globalData.wsite.visitCount && (r = s.globalData.wsite.visitCount),
                            i = o.
                        default.replaceAll(i, "#访问人次#", r)
                        }
                        var d = this.activityInfo.memberGuid,
                        c = "",
                        u = this.activityInfo.wsiteGuid,
                        l = a.
                    default.$pagePath.gameIndex;
                        if (!o.
                    default.checkIsMini()) {
                            var h = window.location.protocol,
                            m = window.location.host,
                            g = a.
                        default.conf.viewBaseRoute || "h",
                            p = "".concat(h, "//").concat(m, "/").concat(g).concat(l);
                            c = d ? "".concat(p, "?wsiteGuid=").concat(u, "&guid=").concat(this.guid, "&fmid=").concat(d) : "".concat(p, "?wsiteGuid=").concat(u, "&guid=").concat(this.guid)
                        }
                        var v = "".concat(l, "?guid=").concat(this.guid, "&wsiteGuid=").concat(u);
                        d && (v = "".concat(l, "?guid=").concat(this.guid, "&wsiteGuid=").concat(u, "&fmid=").concat(d)),
                        c = o.
                    default.appendMiniMwa(c),
                        t.log("gamePlay", c);
                        var w = {
                            title: i,
                            url: c,
                            imageUrl: n,
                            path: v,
                            guid: this.activityInfo.guid
                        };
                        f.
                    default.updateShareInfo(w)
                    },
                    platformFun: function() {
                        return {
                            DeviceOrientationEvent: this.DeviceOrientationEvent
                        }
                    },
                    DeviceOrientationEvent: function() {
                        window.DeviceOrientationEvent.requestPermission().then((function(t) {
                            return "granted" === t || "denied" !== t && void 0
                        }))
                    }
                }
            };
            e.
        default = v
        }).call(this, i("5a52")["default"])
    },
    5072 : function(t, e, i) {
        var n = i("4bad");
        e = n(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-19cd9304] #GameCanvas .gameCanvas{outline:none}.gameOver[data-v-19cd9304]{position:absolute;z-index:100;width:100%;text-align:center;background-color:red;opacity:.7;color:#fff;padding:7px;font-size:13px}.start-box[data-v-19cd9304]{position:absolute;width:100%;height:100%;top:0;left:0}.start-box .bg[data-v-19cd9304]{width:100%;height:100%;background-repeat:no-repeat;background-size:100% auto}.start-box .join-text[data-v-19cd9304]{font-size:%?26?%}.start-box .start-btn[data-v-19cd9304]{margin-top:%?20?%}.fun-btn[data-v-19cd9304]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.fun-btn .top-right[data-v-19cd9304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?40?%;padding-right:%?40?%}.fun-btn .top-left[data-v-19cd9304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?40?%;padding-right:%?40?%}.gameLoading[data-v-19cd9304]{position:absolute;width:100%;text-align:center;top:30%;z-index:99}.info-box[data-v-19cd9304]{position:absolute;top:%?900?%;width:100%;text-align:center}.join-text[data-v-19cd9304]{margin-top:%?14?%;font-size:%?26?%}.invite-icon[data-v-19cd9304]{position:absolute;top:%?330?%;right:%?32?%;width:%?67?%;z-index:20}.hidden[data-v-19cd9304]{display:none}', ""]),
        t.exports = e
    },
    "558d": function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return a
        })),
        i.d(e, "c", (function() {
            return o
        })),
        i.d(e, "a", (function() {
            return n
        }));
        var n = {
            baseDialogContainer: i("be01").
        default
        },
        a = function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("div", [t.isEnd ? i("div", {
                staticClass: "gameOver"
            },
            [t._v("活动已结束，仅支持试玩")]) : t._e(), i("div", {
                staticClass: "game"
            },
            [t.isLoading ? i("div", {
                staticClass: "gameLoading"
            },
            [i("v-uni-image", {
                style: t.loadingStyle,
                attrs: {
                    src: t.skin.homeStyle.loading,
                    mode: "widthFix"
                },
                on: {
                    load: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.loadingLoad.apply(void 0, arguments)
                    }
                }
            })], 1) : t._e(), i("div", {
                staticClass: "content-box"
            },
            [i("div", {
                staticClass: "egret-player",
                staticStyle: {
                    margin: "auto",
                    width: "100%",
                    height: "100%"
                },
                attrs: {
                    "data-entry-class": "Main",
                    "data-orientation": "auto",
                    "data-scale-mode": "fixedWidth",
                    "data-frame-rate": "60",
                    "data-content-width": "700",
                    "data-content-height": "1136",
                    "data-show-paint-rect": "false",
                    "data-multi-fingered": "2",
                    "data-show-fps": "false",
                    "data-show-log": "false",
                    "data-show-fps-style": "x:0,y:0,size:12,textColor:0xffffff"
                }
            }), i("div", {
                attrs: {
                    id: "GameDiv"
                }
            },
            ["cocos" == t.activityInfo.engineType ? i("v-uni-canvas", {
                staticStyle: {
                    width: "750rpx",
                    height: "1600rpx"
                },
                attrs: {
                    id: "GameCanvas",
                    oncontextmenu: "event.preventDefault()",
                    tabindex: "0"
                }
            }) : t._e()], 1)])]), t.isShowPkStimulate ? i("pk-stimulate", {
                attrs: {
                    skin: t.pkStimulateSkin,
                    friendTops: t.friendTopsList,
                    curScore: t.curScore
                }
            }) : t._e(), i("base-dialog-container", {
                attrs: {
                    id: "basePageDialogContainerId"
                }
            })], 1)
        },
        o = []
    },
    "688c": function(t, e, i) {
        "use strict";
        var n = i("8d57"),
        a = i.n(n);
        a.a
    },
    "8d57": function(t, e, i) {
        var n = i("5072");
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var a = i("4f06").
    default;
        a("2a8848da", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "9cf6": function(t, e, i) {
        "use strict"; (function(t) {
            var n = i("4ea4");
            i("99af"),
            i("c975"),
            i("b64b"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            n(i("e143"));
            var a = function(t, e) {
                var i = {
                    dict: {},
                    courseStyle: [],
                    audioStyle: [],
                    courseCommonStyle: []
                };
                t.courseCommonStyle && (t.courseStyle = Object.assign(t["courseStyle"], t["courseCommonStyle"]));
                var n = {};
                for (var a in t) - 1 != a.indexOf("extendStyle_") && Object.assign(n, t[a]);
                for (var o in Object.assign(t.courseStyle, n), t) if ("courseStyle" == o || "audioStyle" == o) {
                    var r = [];
                    for (var s in t[o]) {
                        var d = t[o][s];
                        if (s.indexOf("_color") > -1 || s.indexOf("_input") > -1) i.dict[s] = d;
                        else {
                            var c = {
                                key: s,
                                value: d
                            };
                            r.push(c)
                        }
                    }
                    i[o] = r
                }
                var u = {
                    key: "none_mp3",
                    value: "https://mfile.rrxiu.net/mini/game/ColorBiscuits/resource/assets/none.mp3"
                };
                if (i["audioStyle"].push(u), e && e.downTime ? i["dict"]["time_input"] = e.downTime || 30 : e && e.times && (i["dict"]["times_input"] = e.times || 5), t.textContentObj && Object.keys(t.textContentObj).length > 0) {
                    var l = {
                        content: {}
                    };
                    for (var f in t.textContentObj) l.content[f] = {},
                    l.content[f].text = t.textContentObj[f];
                    i["dict"]["tx_award_content"] = l
                }
                return i
            },
            o = function(t, e) {
                var i = document.createElement("meta");
                i.content = e,
                i.name = t,
                document.getElementsByTagName("head")[0].appendChild(i)
            },
            r = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1.1",
                n = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0;
                d(t, e, i, n, (function(e) {
                    l(e, t, (function() {
                        a && a(),
                        egret.runEgret({
                            renderMode: "webgl",
                            audioType: 0,
                            calculateCanvasScaleFactor: function(t) {
                                var e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                                return (window.devicePixelRatio || 1) / e
                            },
                            antialias: !1
                        })
                    }))
                }))
            },
            s = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1.1",
                n = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0;
                d(t, e, i, n, (function(n) {
                    o("viewport", "width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"),
                    o("full-screen", "true"),
                    o("apple-mobile-web-app-capable", "yes"),
                    o("screen-orientation", "portrait"),
                    o("x5-fullscreen", "true"),
                    l(n, t + e + "/", (function() {
                        window.boot(t + e + "/", (function() {
                            a && a()
                        }), i)
                    }))
                }))
            },
            d = function(e, i, n, a, o) {
                var r = new XMLHttpRequest;
                r.open("GET", e + i + "/manifest.json?v=" + n, !0),
                r.addEventListener("load", (function() {
                    t.log(r.response, "获取游戏主脚本列表");
                    var i = JSON.parse(r.response),
                    n = i.game;
                    i.initial && (n = i.initial.concat(i.game)),
                    c(e, a, (function() {
                        o && o(n)
                    }))
                })),
                r.send(null)
            },
            c = function(e, i, n) {
                var a = e + "main/uni.webview.1.5.2.js",
                o = "https://res.wx.qq.com/open/js/jweixin-1.4.0.js";
                1 == i ? (document.addEventListener("UniAppJSBridgeReady", (function() {
                    t.log("微信：UniAppJSBridgeReady")
                })), u(o, (function() {
                    u(a, (function() {
                        n()
                    }))
                }))) : n()
            },
            u = function(t, e) {
                var i = document.createElement("script");
                i.async = !1,
                i.src = t,
                i.addEventListener("load", (function() {
                    i.parentNode.removeChild(i),
                    e()
                }), !1),
                document.body.appendChild(i)
            },
            l = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "./",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = 0,
                a = function a() {
                    u(e + t[n], (function() {
                        n++,
                        n >= t.length ? i() : a()
                    }))
                };
                a()
            },
            f = {
                load: r,
                loadCocos: s,
                transitionSkin: a
            };
            e.
        default = f
        }).call(this, i("5a52")["default"])
    },
    a2bc: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("47ab"),
        a = i.n(n);
        for (var o in n)["default"].indexOf(o) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return n[t]
            }))
        } (o);
        e["default"] = a.a
    },
    d70ee: function(t, e, i) {
        "use strict";
        var n = i("df12"),
        a = i.n(n);
        a.a
    },
    df12: function(t, e, i) {
        var n = i("2290");
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var a = i("4f06").
    default;
        a("b375eae8", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
}]);