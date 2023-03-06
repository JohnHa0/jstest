AmdLoader.define(["rrxiu/pluginUtils"],
function(a) {
    function b() {
        a.setApi(u);
        var b = this;
        this.config = {},
        this.baseColor = "",
        this.baseColorLow = "",
        this.isEnableClick = !1,
        this.timer_instance = null,
        this.endCssId = "",
        this.basicCssId = "",
        this.endDialog = null,
        this.answerBasicDialog = null,
        this.focused = !1,
        this.answerEndTip = "答题结束",
        this.overAnswerCountTip = "您的答题次数已经用完",
        this.overAnswerEndTip = "答题活动已经结束",
        this.overAnswerDayCountTip = "今天答题次数已经用完",
        this.ANSWER_TYPE = {
            text: 1,
            image: 2,
            wordfill: 3
        },
        this.currentMusicId = 0,
        this.ispass = !1,
        this.preset = !1,
        this.needPreset = !1,
        this.identify = "",
        this.answerCountType = 2,
        this.canUseNewStoreAwardInfo = !1,
        this.notNeedAwardInfo = !1,
        this.needTopInfo = !0,
        this.timer_count = 0,
        this.timer_instance = null,
        this.timer_end = !1,
        this.answerStartTime = (new Date).getTime(),
        this.isActiveSysMusic = !1,
        this.backgroundMusicState = !1,
        this.activeState = "",
        this.playcount = 0,
        this.regionLimit = "",
        this.saveScore = {},
        this.activeData = {},
        this.answerData = {},
        this.activeCode = {},
        this.myTop = [],
        this.currentAnswerIndex = 0,
        this.onceConsumePoints = 0,
        this.prizeList = [],
        this.resetDownTime = function() {
            b.timer_instance && clearInterval(b.timer_instance)
        },
        this.startTimedCount = function(a, c, d) {
            b.resetDownTime(),
            b.timer_count = c,
            a.html(b.timer_count + '<span class="time-sec">秒</span>'),
            b.timer_end || (console.log("answer-startTimedCount---", b.activeState), "" == b.activeState && (b.timer_instance = setInterval(function() {
                b.timer_count = b.timer_count - 1,
                b.timer_count <= 0 ? (b.timer_end = !0, clearInterval(b.timer_instance), d()) : a.html(b.timer_count + '<span class="time-sec">秒</span>')
            },
            1e3)))
        },
        this.startAnswerTime = function() {
            this.setStartTimeStamp(),
            b.answerStartTime = (new Date).getTime()
        },
        this.setStartTimeStamp = function() {
            b.isUpdateCounted = !1,
            r("v2/answerView/updateTimestamp", {
                wsiteGuid: x,
                activeGuid: b.config.content.guid,
                wxOpenId: E.id
            }).then(function(a) {
                0 == a.result || b.showErrorInfo(a.msg)
            },
            function(a) {
                console.info(a),
                winAlert("服务异常-" + a.status)
            })
        },
        this.getOverAnswerTip = function() {
            return b.getIsDayAnswerCount() ? b.overAnswerDayCountTip: b.overAnswerCountTip
        },
        this.getIsDayAnswerCount = function() {
            return 1 == b.answerCountType
        },
        this.showEndPage = function(c, d) {
            e(!1);
            var f = $("#pt-inner .pt-wrapper"),
            g = b.activeData;
            if (b.endDialog = f.find("." + b.endCssId), null === b.endDialog || void 0 === b.endDialog || 0 === b.endDialog.length) {
                var h = '<div class="{{endCss}} {{endCssId}}">	<div class="end-content">				<div class="content-result" style="box-shadow:inset 0px 0px 150px {{baseColorLow}};border-color:{{baseColor}};color:{{baseColor}}">			<div class="ret-header" style="background-color: {{baseColor}};box-shadow: 0px 8px 1px {{baseColorLow}};">{{answerEndTip}}</div>			<div class="ret-score" style="margin-top: {{showTop==1?\'40px\':\'70px\'}};">				<span class="s-title">您的得分：</span><span class="a-score"> {{score}}</span>			</div>			{{if showTop==1}}			<div class="ret-top">				<span class="s-title">{{topText}}：</span><span class="a-top"> {{top}}</span>			</div>			{{/if}}			{{if resultType==2}}			<div class="btn-lottery" style="background-color: {{baseColor}};box-shadow: 2px 12px 1px {{baseColorLow}};">				抽奖			</div>			{{/if}}			{{if resultType==1&&isShowScore}}			<div class="btn-goto" style="background-color: {{baseColor}};box-shadow: 2px 12px 1px {{baseColorLow}};">				确定			</div>			{{/if}}		</div>		<div class="content-buttonList">			{{if showAgain==1}}			<div class="item-button btn-resetAnswer">				<div class="icon-btn">					<img src="{{resetIcon}}">				</div>				<div>再来一次</div>			</div>			{{/if}}			{{if showTop==1}}			<div class="item-button btn-top">				<div class="icon-btn">					<img src="{{topIcon}}">				</div>				<div>排行榜</div>			</div>			{{/if}}			{{if showShare==1}}			<div class="item-button btn-share">				<div class="icon-btn">					<img src="{{shareIcon}}">				</div>				<div>分享</div>			</div>			{{/if}}		</div>	</div></div>\n',
                i = !1;
                g.topData && a.convertToBool(g.topData.countryTop) && (i = !0);
                var j = b.activeCode,
                k = a.compileHtml(h, {
                    topText: b.assets.endStyle.topText || "全国排名",
                    score: c,
                    endCss: D,
                    endCssId: b.endCssId,
                    top: d,
                    showShare: !u.isOpenForbidShare(),
                    showTop: i,
                    showAgain: j > 0 ? 0 : 1,
                    resultType: g.resultType || 1,
                    isShowScore: a.convertToBool(b.config.content.isShowScore) ? 1 : 0,
                    topIcon: b.assets.imageTop || z.getFile("icon-top.png", "assets"),
                    resetIcon: b.assets.imageReset || z.getFile("icon-reset.png", "assets"),
                    shareIcon: b.assets.imageShare || z.getFile("icon-share.png", "assets"),
                    baseColor: b.baseColor,
                    baseColorLow: b.baseColorLow,
                    answerEndTip: b.answerEndTip
                });
                f.append(k),
                b.endDialog = f.find("." + b.endCssId),
                b.bindEndPageEvent()
            } else f.find("." + b.endCssId),
            b.endDialog.find(".a-score").html(c),
            b.endDialog.find(".a-top").html(d),
            b.activeCode > 0 ? b.endDialog.find(".btn-resetAnswer").hide() : b.endDialog.find(".btn-resetAnswer").show();
            b.endDialog.show(),
            setTimeout(function() {
                b.endDialog.removeClass("answerFadeOutLeft").addClass("answerFadeInLeft")
            },
            100)
        },
        this.hideEndPage = function() {
            null === b.endDialog || void 0 === b.endDialog || 0 === b.endDialog.length || (b.endDialog.removeClass("answerFadeInLeft").addClass("answerFadeOutLeft"), setTimeout(function() {
                b.endDialog.hide()
            },
            600))
        },
        this.getMyActivePrizeList = function() {
            u.getMyActivePrizeList(x, b.config.content.guid, E.id, b.baseColor, "我的奖品",
            function(a) {
                var c = {
                    id: a.prizeId,
                    color: a.color,
                    prizeIcon: a.prizeIcon,
                    prizeName: a.prizeName,
                    prizeType: a.prizeType,
                    exdata: b.parseWinData(a.exdata),
                    pos: a.pos
                },
                d = b.GeneralLotteryUtil.parseAwardModel(b.GeneralLotteryUtil.getAwardModel());
                c.exdata.showForm && d.length > 0 ? b.showFormThenGetPrize(c) : b.GeneralLotteryUtil.getPize(c, !1)
            })
        },
        this.showFormThenGetPrize = function(a) {
            if (b.canUseNewStoreAwardInfo) {
                var c = b.config.content.guid,
                d = {
                    activeGuid: c
                };
                u.checkHasFormInfo(d,
                function(c) {
                    c.has ? (b.notNeedAwardInfo = !0, b.GeneralLotteryUtil.getPize(a, !1)) : b.GeneralLotteryUtil.showFormDialog(a)
                })
            } else b.GeneralLotteryUtil.showFormDialog(a)
        },
        this.checkOpenMyPrizeDialog = function() {
            u.checkOpenMyPrizeDialog(b.config.content.guid, E.id,
            function() {
                b.getMyActivePrizeList()
            })
        },
        this.showErrorInfo = function(c, d, e, f) {
            a.showAlert(c, b.baseColor,
            function(a) {
                d && d(a)
            },
            e, f)
        },
        this.parseWinData = function(a) {
            return null === a || void 0 === a ? a = {
                showForm: !0,
                message: "",
                link: "",
                activeStyle: 3,
                hasWxTicket: !1,
                connect: ""
            }: a.constructor === String && (a = JSON.parse(a)),
            b.preset && (a.showForm = !1),
            a
        },
        this.showAlertByReturnFirstPage = function(c) {
            return (c = b.activeState) ? (b.showErrorInfo(c,
            function() {
                if (console.warn("答题次数用完"), c == b.overAnswerEndTip) return b.showBasicDialog("basicPage"),
                !0;
                if (c == b.overAnswerDayCountTip) {
                    var d = {
                        ggLink: "https://engine.lghsrh.com/index/activity?appKey=2pFfUYVHYMd63nyFtbCt6PrBNPPs&adslotId=390523&uk_a1=__IMEI__&uk_a2=__IMEI2__&uk_a3=__MUID__&uk_b1=__IDFA__&uk_b2=__IDFA2__&uk_c1=__OAID__",
                        key: "answer" + x,
                        activityType: 4
                    };
                    backGGAlert(d)
                }
                if (!b.config.content.endToPage || c != b.overAnswerCountTip && c != b.overAnswerDayCountTip) {
                    var e = parseInt(b.activeCode, 10);
                    if (e > 1) {
                        var f = b.myTop || {},
                        g = b.activeData || {};
                        b.saveScore = {
                            score: f.bestCounter,
                            top: f.top
                        },
                        2 == g.resultType || 3 == g.resultType ? b.showEndPage(f.bestCounter, f.top) : a.convertToBool(b.config.content.isShowScore) ? b.showEndPage(f.bestCounter, f.top) : b.gotoResultPage(f.bestCounter)
                    }
                } else b.gotoEndPage()
            }), !0) : !1
        },
        this.gotoEndPage = function() {
            if (b.config.content.endToPage && 0 != b.config.content.endToPage) {
                var a = parseInt(b.config.content.endToPage);
                e(!1),
                setTimeout(function() {
                    u.gotoPage(a)
                },
                100)
            }
        },
        this.gotoResultPage = function(a) {
            b.isEnableClick = !0,
            b.playAudioEffect("Pass");
            var c = b.activeData;
            if (c) {
                var d = c.questionList.length - 1,
                f = b.html.find(".answer-index-" + d);
                f.css("transition", "none")
            }
            var g = b.convertResultSettings(b.config.content.resultSettings);
            if (!g || g.length <= 0) b.showErrorInfo(b.answerEndTip + "。");
            else {
                var h = -1;
                a = parseInt(a);
                for (var i = 0; i < g.length; i++) {
                    var j = parseInt(g[i].minscore),
                    k = parseInt(g[i].score);
                    if (!isNaN(j) && !isNaN(k) && a >= j && k >= a) {
                        h = g[i].gotoPageId;
                        break
                    }
                }
                "first" != h && "next" != h && "pre" != h && (h = parseInt(h, 10)),
                -1 !== h ? (console.log("gotoPageId", h), e(!1), setTimeout(function() {
                    u.gotoPage(h)
                },
                100)) : b.showErrorInfo(b.answerEndTip + "。")
            }
        },
        this.convertResultSettings = function(a) {
            if (20 == b.config.content.questionVersion || !a) return a;
            for (var c = 0; c < a.length; c++) a[c].score && (a[c].score = parseInt(a[c].score)),
            a[c].minscore && (a[c].minscore = parseInt(a[c].minscore));
            return a
        },
        this.playAudioEffect = function(a) {
            if (b.assets["audio" + a]) {
                var c = null;
                c = null !== b.html ? b.html.find(".audio-plugin-sound-effect").get(0) : document.createElement("audio"),
                c && (c.paused || c.pause(), c.setAttribute("src", b.assets["audio" + a]), c.play())
            }
        },
        this.stopSysState = function() {
            b.isActiveSysMusic = !0,
            u.stopBackgroundMusic()
        },
        this.resetSysState = function() {
            u.resetFlip(),
            b.backgroundMusicState && b.isActiveSysMusic && (b.isActiveSysMusic = !1, u.playBackgroundMusic())
        },
        this.fnPresetEvent = function(a) {
            b.needPreset ? b.showPresetFormDialog(a) : a && a(!0, !1)
        },
        this.showPresetFormDialog = function(a) {
            function c(c) {
                b.GeneralLotteryUtil.checkIsHaveDialog() || u.resetFlip();
                var d = !1;
                "okEvent" == c.event && (b.needPreset = !1, d = !0),
                a && a(d, !0)
            }
            u.stopFlip();
            var d = b.GeneralLotteryUtil.getAwardModel();
            showRRXPresetFormDialog(u, b.config.content.guid, d, b.baseColor, c)
        },
        this.addFocusUser = function(a) {
            if (u.getCanFocusByWay(b.config.content.focusWay) && b.config.content.isFocusWxEnforce && b.config.content.wxQr) {
                var c = {
                    openId: a,
                    focusWay: b.config.content.focusWay
                };
                u.wxFocus.handle(c,
                function(a) {
                    b.focused = a.data.focused
                })
            }
        },
        this.showFocusWxDialog = function() {
            var a = b.activeState || "活动进行中";
            u.showPluginFocus(a, b.config.content.wxQr)
        },
        this.showFocusWxDialogIfNeed = function() {
            return u.getCanFocusByWay(b.config.content.focusWay) && !b.focused && b.config.content.isFocusWxEnforce && b.config.content.wxQr ? (b.showFocusWxDialog(), !0) : !1
        },
        this.showCopyrightFoot = function() {
            if (b.answerBasicDialog) {
                var a = o();
                if (a) a.content ? (b.answerBasicDialog.find("div.dialog-content-foot >a").attr("href", a.url || "javascript:"), b.answerBasicDialog.find("div.dialog-content-foot >a").html(a.content), b.answerBasicDialog.find(".rule-rrx-copyright").show()) : "string" == typeof a && (b.answerBasicDialog.find("div.dialog-content-foot >a").html(a), b.answerBasicDialog.find(".rule-rrx-copyright").show());
                else {
                    b.answerBasicDialog.find("div.dialog-content-foot").hide(),
                    b.answerBasicDialog.find(".rule-rrx-copyright").hide();
                    var c = b.answerBasicDialog.find(".rule-three .rule-three-head .item");
                    if (c.length > 0) {
                        var d = parseInt(c.html(), 10);
                        c.html(d - 1)
                    }
                }
            }
        },
        this.hideBasicDialog = function() {
            b.answerBasicDialog && (b.answerBasicDialog.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), b.answerBasicDialog.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
                b.answerBasicDialog.hide()
            },
            600))
        },
        this.GeneralLotteryUtil = {
            showPrizeInfo: function(a) {
                var c = parseInt(a.prizeType);
                if (0 == c) {
                    var d = a.prizeName;
                    if (void 0 !== a.exdata) {
                        var e = $.trim(a.exdata.message);
                        d = "" !== e ? e: d
                    }
                    b.GeneralLotteryUtil.showNoWinInfo(d, "")
                } else 1 == c || 2 == c || 3 == c || 4 == c || 5 == c || 6 == c || 7 == c ? b.GeneralLotteryUtil.showWinPrizeInfo(a) : b.showErrorInfo("未知奖品类型")
            },
            showWinPrizeInfo: function(a) {
                var c = $.trim(a.exdata.message),
                d = a.prizeName,
                e = {
                    name: "" == c ? d: c,
                    image: a.prizeIcon
                };
                showRRXWinPrizeDialog(u, e, b.baseColor,
                function(c) {
                    b.GeneralLotteryUtil.dialogCallbackEvent(c, a)
                })
            },
            showNoWinInfo: function(a, c) {
                u.stopFlip();
                var d = a;
                c && (d ? d += "<br>": d = "", d += c);
                var e = {
                    content: d
                };
                window.showRRXNoPrizeDialog(u, e, b.baseColor, b.GeneralLotteryUtil.dialogCallbackEvent)
            },
            showFormDialog: function(a) {
                u.stopFlip();
                var c = b.GeneralLotteryUtil.getAwardModel();
                showRRXGetPrizeDialog(u, c, b.baseColor,
                function(c) {
                    b.GeneralLotteryUtil.dialogCallbackEvent(c, a)
                })
            },
            showTopFormDialog: function() {
                u.stopFlip();
                var a = b.GeneralLotteryUtil.getAwardModel();
                showRRXGetPrizeDialog(u, a, b.baseColor,
                function(a) {
                    a.event = "topPrizeEvent",
                    b.GeneralLotteryUtil.dialogCallbackEvent(a)
                })
            },
            getTopPrize: function(c, d) {
                u.checkReginLimit(b.regionLimit,
                function(e) {
                    if (0 === e && c) {
                        a.showLoading();
                        var f = c.awardInfo,
                        g = {
                            wsiteGuid: x,
                            activeGuid: b.config.content.guid,
                            awardInfo: JSON.stringify(f),
                            smsData: c.smsData,
                            wxOpenId: E.id,
                            fg: u.getFg()
                        };
                        g = u.appendChannelParams(g),
                        r("v2/answerView/getTopPrize", g, "POST").then(function(c) {
                            a.hideLoading(),
                            0 == c.result ? (b.showErrorInfo("提交成功"), b.hideAnswerTopForm(), d && d()) : b.showErrorInfo(c.msg)
                        },
                        function(b) {
                            console.info(b),
                            winAlert("服务异常-" + b.status),
                            a.hideLoading()
                        })
                    }
                },
                b.baseColor)
            },
            getPize: function(c, d, e, f) {
                d = void 0 === d ? !0 : d;
                var g = d ? e: b.GeneralLotteryUtil.getEmptyAwardInfo();
                if (g || (g = b.GeneralLotteryUtil.getEmptyAwardInfo()), g) {
                    a.showLoading();
                    var h = g.awardInfo,
                    i = {
                        userToken: E.id,
                        wsiteGuid: x,
                        activeGuid: b.config.content.guid,
                        awardInfo: JSON.stringify(h),
                        smsData: g.smsData,
                        prizeId: c.id,
                        wxOpenId: E.id,
                        identify: b.identify,
                        fg: u.getFg()
                    },
                    j = !1;
                    4 == c.prizeType && (j = !0),
                    i = u.appendChannelParams(i),
                    r("v2/answerView/getPrize", i, "POST", "pluginAnswer", j).then(function(g) {
                        if (a.hideLoading(), 0 == g.result) {
                            var h = c.exdata,
                            i = h.activeStyle || 3;
                            switch (parseInt(i)) {
                            case 1:
                                4 == c.prizeType ? b.showErrorInfo("红包领取成功!") : b.GeneralLotteryUtil.showAfterOnlineDialog(c, g.data);
                                break;
                            case 2:
                                b.GeneralLotteryUtil.showWxPuplicDialog(c, g.data);
                                break;
                            case 3:
                                b.GeneralLotteryUtil.prizePrompt(c, g.data)
                            }
                            f && f()
                        } else if (4500 === g.result) {
                            var j = u.getInteractServiceHost();
                            window.verifyLotteryAlert(j, x, E.id,
                            function(a) {
                                a && a.isVerify && b.GeneralLotteryUtil.getPize(c, d, e, f)
                            })
                        } else 6e3 === g.result || "参与人数过多，请稍后再试。" == g.msg ? b.showErrorInfo(g.msg,
                        function() {
                            b.getMyActivePrizeList()
                        }) : b.showErrorInfo(g.msg)
                    },
                    function(b) {
                        console.info(b),
                        winAlert("服务异常-" + b.status),
                        a.hideLoading()
                    })
                }
            },
            giveUpPrize: function(a) {
                r("generalPrize/giveUpPrize", {
                    wsiteGuid: x,
                    activeGuid: b.config.content.guid,
                    userToken: E.id,
                    wxOpenId: E.id,
                    prizeId: a,
                    fg: u.getFg()
                },
                "POST", "").then(function(a) {
                    0 == a.result || console.log("giveUpPrize", a.msg)
                },
                function(a) {
                    console.info(a),
                    winAlert("服务异常-" + a.status)
                })
            },
            getEmptyAwardInfo: function() {
                for (var a = [], c = b.GeneralLotteryUtil.getAwardModel(), d = 0; d < c.length; d++) a.push({
                    id: c[d].id,
                    name: c[d].name,
                    value: "[不记录]",
                    unique: !1,
                    allunique: !1,
                    smsticket: !1
                });
                return {
                    smsData: "",
                    awardInfo: a
                }
            },
            prizePrompt: function(a, c) {
                if (3 != a.prizeType) {
                    if (2 == a.prizeType || 7 == a.prizeType) return void b.GeneralLotteryUtil.showMessageDialog(a, c);
                    if (5 == a.prizeType) return void b.GeneralLotteryUtil.pushWxTicket(a, c);
                    if (6 == a.prizeType) return void b.showErrorInfo("积分领取成功", null, "前往兑换", c.uniqueCenterUrl);
                    b.showErrorInfo("领取成功")
                } else this.thridPrize(a)
            },
            thridPrize: function(a) {
                if ("1" == a.exdata.isApiWay) return void b.showErrorInfo("领取成功");
                var c = a.exdata.link;
                return c ? void u.urlAuditVisit(c) : void winAlert("奖品链接不可用")
            },
            showMessageDialog: function(a, c) {
                u.stopFlip();
                var d = $.trim(a.exdata.message),
                e = {
                    name: "" == d ? a.prizeName: d,
                    image: a.prizeIcon,
                    detail: c.ticketMessage
                };
                showRRXPrizeDetailDialog(u, e, b.baseColor, b.GeneralLotteryUtil.dialogCallbackEvent)
            },
            pushWxTicket: function(a, c) {
                var d = c.cardId,
                e = c.cardExt;
                wx.addCard({
                    cardList: [{
                        cardId: d,
                        cardExt: e
                    }],
                    success: function(a) {
                        console.log(a.cardList)
                    },
                    fail: function(a) {
                        b.showErrorInfo("加入卡券失败"),
                        console.log(JSON.stringify(a))
                    }
                })
            },
            showAfterOnlineDialog: function(a, c) {
                u.stopFlip();
                var d = {
                    openCode: c.openCode
                };
                showRRXAfterOnlineDialog(u, d, b.baseColor, b.GeneralLotteryUtil.dialogCallbackEvent)
            },
            showWxPuplicDialog: function(a, c) {
                u.stopFlip();
                var d = {
                    openCode: c.openCode,
                    appName: c.appName,
                    appQrUrl: c.appQrUrl
                };
                showRRXWxPuplicDialog(u, d, b.baseColor, b.GeneralLotteryUtil.dialogCallbackEvent)
            },
            checkDialogIsDiplay: function(a) {
                var b = $("#main").find(a);
                return b.length > 0 && "none" != b.css("display") ? !0 : !1
            },
            checkIsHaveDialog: function() {
                for (var a = ["." + C, ".pluginAnswer-end-dialog", ".rrx-prizeinfo-dialog", ".rrx-prizewin-dialog", ".rrx-prizeno-dialog", ".rrx-prizeget-dialog", ".rrx-prizedetail-dialog", ".rrx-process-dialog"], c = 0; c < a.length; c++) if (b.GeneralLotteryUtil.checkDialogIsDiplay(a[c])) return ! 0;
                return ! 1
            },
            dialogCallbackEvent: function(a, c) {
                if (b.GeneralLotteryUtil.checkIsHaveDialog() || u.resetFlip(), a) if ("submitEvent" == a.event) b.GeneralLotteryUtil.getPize(c, !0, a.result, a.closeCallBack);
                else if ("getprizeEvent" == a.event) {
                    var d = b.GeneralLotteryUtil.parseAwardModel(b.GeneralLotteryUtil.getAwardModel());
                    c.exdata.showForm && d.length > 0 ? b.showFormThenGetPrize(c) : b.GeneralLotteryUtil.getPize(c, !1)
                } else "giveupEvent" == a.event ? b.GeneralLotteryUtil.giveUpPrize(c.id) : "topPrizeEvent" == a.event && b.GeneralLotteryUtil.getTopPrize(a.result, a.closeCallBack)
            },
            getAwardModel: function() {
                return b.activeData.awardModel
            },
            parseAwardModel: function(a) {
                var b = [],
                c = [];
                if (a) {
                    c = "string" == typeof a ? JSON.parse(a) : a;
                    for (var d = 0; d < c.length; d++)("true" == c[d].display || c[d].display === !0) && b.push(c[d])
                }
                return b
            }
        }
    }
    function c(a) {
        window.showRRXTips(a || "请选择答案"),
        setTimeout(function() {
            window.hideRRXTips()
        },
        1500)
    }
    function d(b, c, d) {
        v || a.bindEvent(b, c, d)
    }
    function e(a) {
        setTimeout(function() {
            var b = !1;
            u.getDanmuConfig() && (b = u.getDanmuConfig().showDanmu),
            u.stopDanma(),
            a ? b && u.stopDanma() : b && u.startDanma()
        },
        1e3),
        a ? u.hideBottomMenu() : (u.showBottomMenu(), setTimeout(function() {
            u.showBottomMenu()
        },
        1e3))
    }
    function f(a, b) {
        return a ? a.constructor === String ? JSON.parse(a) : a: "obj" == b ? {}: []
    }
    function g(a, b) {
        for (var c = 0; c < a.length; c++) if ("wordfill" == a[c].type && a[c].list) if (1 == b) {
            for (var d = a[c].list, e = "", f = "", g = 0; g < d.length; g++)"true" == d[g].right.toString() && (e = d[g].value),
            f += d[g].value;
            a[c].rightWords = i(e).split("");
            var j = i(f).split("");
            j = h(j),
            a[c].allWords = j.shuffle(),
            a[c].selectWords = []
        } else a[c].type = "text";
        return a
    }
    function h(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            for (var e = c + 1; d > e; e++) a[c] === a[e] && (e = ++c);
            b.push(a[c])
        }
        return b
    }
    function i(a) {
        for (var b = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"), c = "", d = 0; d < a.length; d++) c += a.substr(d, 1).replace(b, "");
        return c
    }
    function j() {
        return Cool.util.getUrlParameterByName("anfather") || ""
    }
    function k(a, b) {
        G[a] || b && setTimeout(function() {
            G = new iScroll(b, {
                checkDOMChanges: !0,
                bounce: !1,
                bounceLock: !1,
                hScrollbar: !1,
                onBeforeScrollStart: function(a) {
                    a.stopPropagation()
                }
            })
        },
        100)
    }
    function l(a) {
        a.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
        a.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
        a.show(),
        u.stopFlip()
    }
    function m(a, b) {
        a.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"),
        a.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"),
        setTimeout(function() {
            a.hide(),
            b && b()
        },
        600)
    }
    function n() {
        return u.getCustomerCopyrightInfo()
    }
    function o() {
        return u.getCustomerCopyrightInfo()
    }
    function p(a) {
        if (a) {
            a = a.toString();
            var b = a.split(":");
            if (b.length >= 3) return a.substr(0, a.length - 3)
        }
        return a
    }
    function q() {
        u.createEvent("sysResetFlipCallBack",
        function() {
            u.stopFlip()
        })
    }
    function r(b, c, d, e, f) {
        var g = u.getInteractServiceHost(f);
        return e = void 0 === e ? "pluginAnswer": e,
        a.requestAjax(g + e + "/" + b, c, d)
    }
    function s(a) {
        if (v) a();
        else {
            if (appConfig.dev === !0 && !u.checkIsAppEnv()) return void a();
            u.weixinStrong.auth(function(b) {
                E = b,
                a()
            })
        }
    }
    var t = '{{if answerList.length > 0}}<div class="rrx-pg-answer-index" style="background-color: {{asset.bgStyle.bgColor}};background-image: url({{asset.bgStyle.bgImage}});">		<div class="answer-content-box">		{{each answerList as answer i}}		<div class="plugin-answer answer-index-{{i}}" style="opacity:{{i==0?1:0}};z-index: {{answerList.length-i}};">			{{if questionType!=3}}			<div class="header-progress"				 style="color: {{asset.progress.font.color}};font-weight: {{asset.progress.font.font_weight}};background-color: {{asset.progress.backgroundColor}};">				{{if !isEdit}}				进度：<span class="current-pageIndex">{{i+1}}</span>/<span class="all-pageIndex">{{answerList.length}}</span>				{{else /}}				进度：<span class="current-pageIndex">{{i+1}}</span>/<span class="all-pageIndex">{{answerTotal}}</span>				{{/if}}			</div>			<div class="header-downTime"				 style="color: {{asset.downtime.font.color}};font-weight: {{asset.downtime.font.font_weight}};background-color: {{asset.downtime.backgroundColor}};">				<span class="down-time"></span>			</div>			{{/if}}			<div class="answer-header"				 style="background-image: url({{asset.question.backgroundImage}});background-color: {{asset.question.backgroundColor}};">				<div style="padding-top: {{asset.endStyle.paddingTop}}px;padding-bottom: {{asset.endStyle.paddingBottom}}px;">					{{if answer.image!=\'\'}}					<div  class="question-image" style="height: {{asset.endStyle.imageHeight}}px;">						<img src="{{answer.image}}">					</div>					{{/if}}					{{if answer.music!=\'\'}}					<div class="question-music music-index-{{i}}" style="height: {{asset.endStyle.imageHeight}}px;">						<img class="img-play" data-src="{{answer.music}}" data-id="{{i}}" data-type="play" src="{{asset.imagePlay}}">						<img class="img-pause" style="display: none;" data-id="{{i}}" data-src="{{answer.music}}" data-type="stop"							 src="{{asset.imagePause}}">					</div>					{{/if}}					<div class="question-title" style="color: {{asset.question.font.color}};{{if asset.endStyle.isCenter}}text-align: center;{{/if}}">						<span>{{answer.question}}</span>					</div>				</div>			</div>			{{if answer.type==\'image\'}}			<div class="answer-image-list">				{{each answer.list as q j}}				<div class="answer-result-item answer-result-{{j}} imgBox imgBox-{{i}} img-{{answer.list.length>4?6:4}}-{{j}} answer-img-{{answer.list.length}}" data-id="{{i}}-{{j}}">					<img class="img-question" src="{{q.value+smallImageThum}}" >					{{if asset.imageStyle!=\'\'&&asset.imageStyle!=undefined}}					<img class="img-question border-question" src="{{asset.imageStyle}}" >					{{/if}}					<div class="img-question-box"></div>														</div>				{{/each}}			</div>			{{/if}}			{{if answer.type==\'text\'}}			<div class="answer-text-list">				{{each answer.list as q j}}				<div class="answer-result-item answer-result-{{j}} item-text item-text-index-{{i}}" data-id="{{i}}-{{j}}" style="background-image: url({{asset.answer.backgroundImage}});background-color: {{asset.answer.backgroundColor}};color:{{asset.answer.font.color}};">					<span class="span-value"><span class="span-mark">{{codeIndex[j]}}</span>{{q.value}}</span>								</div>				{{/each}}			</div>			{{/if}}			{{if answer.type==\'wordfill\'}}			<div class="answer-wordfill-list">				<div class="wordfill-answer">					{{each answer.rightWords as q j}}					<div class="wordfill-answer-box wordfill-id-{{j}}" data-id="{{i}}-{{j}}"						 style="background-image: url({{asset.wordfill.bgImage}});background-color: {{asset.wordfill.bgColor}};color:{{asset.wordfill.fontColor}};border-color:{{asset.wordfill.bordColor}};border-width:{{asset.wordfill.bordWidth}}px">					</div>					{{/each}}				</div>				<div class="wordfill-words">					{{each answer.allWords as w j}}					<div class="answer-result-item answer-result-{{j}} item-word" data-id="{{i}}-{{j}}" data-word="{{w}}"						 style="background-image: url({{asset.wordfillBlock.bgImage}});background-color: {{asset.wordfillBlock.bgColor}};color:{{asset.wordfillBlock.fontColor}};border-color:{{asset.wordfillBlock.bordColor}};border-width:{{asset.wordfillBlock.bordWidth}}px">						{{w}}					</div>					{{/each}}				</div>			</div>			{{/if}}		</div>		{{/each}}		<audio class="audio-plugin-answer" style="width: 1px;height: 1px;opacity: 0;position: absolute" preload="true"></audio>		<audio class="audio-plugin-sound-effect" style="width: 1px;height: 1px;opacity: 0;position: absolute" preload="true"></audio>		{{if isNextAnaswer}}		<button class="next-answer-btn" style="background-image: url({{asset.nextBtn.bgImage}});background-color: {{asset.nextBtn.bgColor}};color:{{asset.nextBtn.color}};">下一题</button>		{{/if}}	</div></div>{{/if}}{{if answerList.length<= 0}}<div class="rrx-pg-answer-index-edit">	{{content}}</div>{{/if}}\n',
    u = null,
    v = !1,
    w = "",
    x = "",
    y = "click",
    z = {
        backgroundMusicState: !1,
        api: null,
        isEditing: !1,
        config: {},
        html: null,
        wsiteGuid: null,
        currentPageId: null,
        currentPage: null,
        pluginDomain: null,
        clickType: "click",
        objectInstances: [],
        focused: !1,
        renderElement: function(a, b) {
            var c = this.compileHtml(t, b);
            this.html = $(c),
            a.html(this.html)
        },
        compileHtml: function(a, b) {
            var c = template.compile(a);
            return c(b)
        },
        getFile: function(a, b) {
            return b = b || "assets",
            w + b + "/" + a
        },
        requestAjax: function(a, b, c, d) {
            var e = "";
            return e = v ? appConfig.serviceHost: this.api.getInteractServiceHost(),
            d = void 0 === d ? "pluginAnswer": d,
            $.ajax({
                url: e + d + "/" + a,
                type: c || "POST",
                data: b || {},
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                }
            })
        },
        getIndexByArray: function(a, b, c) {
            c = c || "id";
            for (var d = a.length - 1; d >= 0; d--) if (a[d][c] == b) return d;
            return - 1
        },
        hideOpacity: function(a, b) {
            a.css("opacity", 0),
            a.css("display", "none"),
            b.css("transition", "opacity 0.5s"),
            b.css("opacity", 1),
            b.css("display", "block")
        },
        showEffect: function(a, b) { ! b && a.addClass("fadeIn"),
            a.css("display", "inline-block")
        },
        hideEffect: function(a) {
            a.removeClass("fadeout"),
            a.css("display", "none")
        },
        getInstance: function(a) {
            return this.objectInstances[a + this.wsiteGuid + this.currentPageId + this.config.id]
        },
        setInstance: function(a, b) {
            this.objectInstances[a + this.wsiteGuid + this.currentPageId + this.config.id] = b
        },
        getImageUrl: function(a) {
            return a ? a.indexOf("data:image") > -1 ? a: a.indexOf("://assets") > -1 ? a: a.indexOf("192.168.31.250") > -1 ? a: u.getImageHost() + u.removeImgPreFix(a) + "?v=" + appConfig.version: a
        },
        getMusicUrl: function(a) {
            return a ? a.indexOf("assets/") > -1 ? -1 == a.indexOf("https://") && -1 == a.indexOf("http://") ? w + a: a: u.musicPreFix(a) : a
        }
    },
    A = "@!2-250",
    B = "@!200x200",
    C = "pluginAnswer-basic-dialog",
    D = "pluginAnswer-end-dialog",
    E = {
        id: appConfig.dev === !0 ? "123456": "",
        nickname: "人人秀",
        headimgurl: "https://assets.rrxh5.cc/www/images/no_head.jpg"
    },
    F = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    template.config("escape", !1),
    b.prototype = {
        constructor: b,
        html: null,
        assets: {},
        initAssets: function() {
            var b = this;
            if (void 0 === b.config.content.theme) return ! 1;
            for (var c = b.config.content.theme.list,
            d = 0; d < c.length; d++) if ("image" === c[d].type) b.assets[c[d].value] = z.getImageUrl(c[d].src);
            else if ("audio" === c[d].type) b.assets[c[d].value] = z.getMusicUrl(c[d].src);
            else if ("text" === c[d].type) void 0 === c[d].content ? b.assets[c[d].value] = {
                backgroundColor: c[d].backgroundColor,
                backgroundImage: c[d].backgroundImage
            }: b.assets[c[d].value] = {
                backgroundColor: c[d].backgroundColor,
                backgroundImage: c[d].backgroundImage,
                font: c[d].content[0]
            };
            else if ("color" === c[d].type) {
                var e = {};
                if (c[d].hasOwnProperty("content") && c[d].content.length > 0) for (var f = 0; f < c[d].content.length; f++) e[c[d].content[f].value] = {
                    color: c[d].content[f].color,
                    backgroundColor: c[d].content[f].backgroundColor
                };
                b.assets[c[d].value] = e
            } else if ("group" === c[d].type) {
                var g = {};
                if (c[d].hasOwnProperty("content") && c[d].content.length > 0) for (var h = c[d].content, f = 0; f < h.length; f++) {
                    var i = h[f].value;
                    "img" == h[f].type && "" != i ? i = z.getImageUrl(i) : "audio" == h[f].type && "" != i && (i = z.getMusicUrl(i)),
                    g[h[f].key] = i
                }
                b.assets[c[d].key] = g
            }
            return "default" == b.config.content.theme.value && (void 0 === b.assets.answerRight || b.assets.answerRight.backgroundColor || (b.assets.answerRight.backgroundColor = b.config.content.rightColor), void 0 === b.assets.answerError || b.assets.answerError.backgroundColor || (b.assets.answerError.backgroundColor = b.config.content.errorColor)),
            b.assets.stylePage && b.assets.stylePage.bg1 && b.assets.stylePage.bg1.backgroundColor ? b.baseColor = b.assets.stylePage.bg1.backgroundColor || "#1D93FF": b.baseColor = "#1D93FF",
            b.baseColorLow = a.getLightColor(b.baseColor, .4),
            ("#fff" == b.baseColor || "#ffffff" == b.baseColor || "rgb(255, 255, 255)" == b.baseColor) && (b.baseColor = "#1D93FF"),
            b.assets.downtime || (b.assets.downtime = {
                font: {
                    color: "#000000",
                    id: 0,
                    text: "倒计时文字样式"
                }
            }),
            b.assets.wordfill || (b.assets.wordfill = {
                fontColor: "",
                bordColor: "",
                bgColor: "",
                bgImage: ""
            }),
            b.assets.wordfillBlock || (b.assets.wordfillBlock = {
                fontColor: "#ffffff",
                bordColor: "",
                bgColor: "",
                bgImage: ""
            }),
            b.assets.wordfillBlock.bgColor || b.assets.wordfillBlock.bgImage || (b.assets.wordfillBlock.bgColor = b.baseColor),
            b.assets.wordfill.bordColor || b.assets.wordfill.bgColor || b.assets.wordfill.bgImage || (b.assets.wordfill.bordColor = b.baseColor),
            b.assets.wordfill.fontColor || b.assets.wordfill.bgColor || b.assets.wordfill.bgImage || (b.assets.wordfill.fontColor = b.baseColor),
            b.assets.wordfillBlock.bordColor ? b.assets.wordfillBlock.bordWidth = "2": b.assets.wordfillBlock.bordWidth = "0",
            b.assets.wordfill.bordColor ? b.assets.wordfill.bordWidth = "2": b.assets.wordfill.bordWidth = "0",
            b.assets.nextBtn || (b.assets.nextBtn = {
                color: "#ffffff",
                bgColor: "",
                bgImage: ""
            }),
            b.assets.nextBtn.bgColor = b.assets.nextBtn.bgColor || b.baseColor,
            void 0 == b.assets.bgStyle && (b.assets.bgStyle = {
                bgColor: "",
                bgImage: ""
            }),
            void 0 == b.assets.endStyle && (b.assets.endStyle = {
                endText: "答题结束",
                isCenter: !1,
                paddingTop: 25,
                paddingBottom: "0",
                imageHeight: 255
            }),
            b.assets.endStyle.topText = b.assets.endStyle.topText || "全国排名",
            void 0 == b.assets.endStyle.paddingTop && (b.assets.endStyle.paddingTop = "25", b.assets.endStyle.paddingBottom = "0"),
            b.assets.endStyle.imageHeight && 0 != b.assets.endStyle.imageHeight || (b.assets.endStyle.imageHeight = 255),
            b.assets.question.backgroundImage || (b.assets.question.backgroundImage = ""),
            b.assets.answer || (b.assets.answer = {
                backgroundColor: "",
                backgroundImage: "",
                font: {
                    id: 0,
                    color: "#000000",
                    text: "题目文字样式"
                }
            }),
            b.answerEndTip = b.assets.endStyle.endText,
            !0
        },
        init: function() {
            var b = this;
            if (u.loadCss(a.getFile(w, "index.css", "css")), u.loadCss(u.getLibHost() + "rrxiu/css/pluginDialog.css"), v) {
                if (!this.initAssets()) return;
                var c = [];
                b.config.content.questionList && b.config.content.questionList.length > 0 && (c = $.extend(!0, [], b.config.content.questionList), c[0].list = c[0].result, c[0].question = c[0].question.replace(/\n/g, "<br>")),
                c = g(c, b.config.content.questionType);
                var d = b.config.content.randomAnswer || {},
                e = d.count || 0;
                if (e = parseInt(e), b.html = a.renderElement(t, b.wrapper, {
                    isEdit: !0,
                    content: "请添加题目",
                    questionType: b.config.content.questionType,
                    answerList: c,
                    answerTotal: e > 100 ? 100 : e,
                    asset: b.assets,
                    smallImageThum: B,
                    bigImageThum: A,
                    codeIndex: ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J."],
                    isNextAnaswer: b.config.content.isNextAnaswer
                }), c.length > 0) {
                    var f = b.wrapper.find(".answer-index-0");
                    f.css("opacity", 1),
                    f.css("display", "block")
                }
            }
        },
        load: function() {
            var b = this;
            if (this.initAssets()) {
                b.resetDownTime(),
                b.endCssId = D + b.config.id,
                b.basicCssId = C + b.config.id,
                b.backgroundMusicState = u.getBackgroundMusicState(),
                e(!0),
                b.isEnableClick = !1;
                var c = !1;
                if (b.ispass) if (!b.activeData || 2 != b.activeData.resultType && 3 != b.activeData.resultType) {
                    var d = b.getRandomAnswer();
                    parseInt(b.playcount) >= parseInt(d.answerCount) ? (b.isEnableClick = !0, b.activeState = b.getOverAnswerTip(), b.showAlertByReturnFirstPage(b.activeState)) : (c = !0, b.isEnableClick = !1, b.ispass = !1)
                } else b.saveScore && b.showEndPage(b.saveScore.score, b.saveScore.top); ! this.isLoad || c ? (a.showLoading("题库加载中..."), b.checkActive(b.config.content,
                function(a) {
                    b.preset = a.data.preset,
                    b.needPreset = a.data.needPreset,
                    b.canUseNewStoreAwardInfo = a.data.canUseNewStoreAwardInfo,
                    b.answerCountType = parseInt(a.data.answerCountType);
                    var c = b.getRandomAnswer();
                    a.data && a.data.regionLimit && (b.regionLimit = a.data.regionLimit),
                    u.checkReginLimit(b.regionLimit,
                    function(d, e) {
                        if (0 !== d) b.activeState = e,
                        b.isEnableClick = !0,
                        b.getAnswer(function() {
                            b.renderAnswer()
                        });
                        else {
                            q(),
                            b.activeCode = a.result;
                            var f = a.myTop;
                            if (b.myTop = f, 0 === a.result) {
                                var g = 0;
                                g = b.getIsDayAnswerCount() ? parseInt(f.playDayCount) : parseInt(f.playCount),
                                b.playCount = g,
                                g >= parseInt(c.answerCount) && (b.activeCode = 500, b.activeState = b.getOverAnswerTip(), b.isEnableClick = !0),
                                b.getAnswer(function() {
                                    b.renderAnswer()
                                })
                            } else b.activeState = a.msg,
                            b.isEnableClick = !0,
                            b.getAnswer(function() {
                                b.renderAnswer()
                            })
                        }
                    })
                }), b.checkOpenMyPrizeDialog()) : b.activeState && (b.isEnableClick = !0, b.showAlertByReturnFirstPage(b.activeState)),
                this.isLoad = !0
            }
        },
        BindEvent: function() {
            var a = this,
            b = a.html.find(".plugin-answer .imgBox");
            d(b, y,
            function(b) {
                a.showAlertByReturnFirstPage() || a.checkAnswerClick($(b.currentTarget), a.ANSWER_TYPE.image)
            });
            var e = a.html.find(".plugin-answer .item-text");
            d(e, y,
            function(b) {
                a.showAlertByReturnFirstPage() || a.checkAnswerClick($(b.currentTarget), a.ANSWER_TYPE.text)
            });
            var f = a.html.find(".audio-plugin-answer"),
            g = (f.get(0), a.html.find(".plugin-answer .question-music"));
            d(g.find("img"), y,
            function(b) {
                var c = $(b.currentTarget);
                a.playCurrentQuestionMusic(c.data("type"), c.data("id"))
            }),
            d(f, "ended",
            function() {
                var b = a.html.find(".plugin-answer .music-index-" + a.currentMusicId);
                z.showEffect(b.find(".img-play"), !0),
                z.hideEffect(b.find(".img-pause")),
                a.resetSysState()
            });
            var h = a.html.find(".plugin-answer .item-word");
            d(h, y,
            function(b) {
                a.showAlertByReturnFirstPage() || a.checkAnswerClick($(b.currentTarget), a.ANSWER_TYPE.wordfill)
            });
            var i = a.html.find(".plugin-answer .wordfill-answer-box");
            d(i, y,
            function(b) {
                if ("" != $(b.currentTarget).html()) {
                    var c = $(b.currentTarget).data("id").split("-");
                    if (2 === c.length) {
                        var d = (z.getInstance("activeData"), a.activeData.questionList[c[0]]);
                        if (!d.list || 0 == d.list.length) return;
                        var e = d.selectWords;
                        if (0 == e.length) return;
                        e.splice(c[1], c.length);
                        var f = a.html.find(".answer-index-" + c[0]);
                        i.html("");
                        for (var g = 0; g < e.length; g++) f.find(".wordfill-id-" + g).html(e[g])
                    }
                }
            });
            var j = a.html.find(".next-answer-btn");
            d(j, y,
            function(b) {
                var d = a.activeData,
                e = j.data("pageIndex");
                if (console.log("==_pageIndex==", e), 2 == d.questionType || 3 == d.questionType) {
                    var f = j.data("nextPageIndex"),
                    g = j.data("answerAction");
                    if (!e && 0 != e) return void c();
                    a.nextAnswer(e, f, g)
                } else {
                    if (!e && 0 != e) return void c();
                    var h = d.questionList[e];
                    if (!h) return;
                    if (console.log("question", h), h.ispass) return;
                    var i = parseInt(h.rightCount || 1),
                    k = a.errorIds.length + a.rightIds.length;
                    if (0 == k) return void c();
                    if (1 == i && k > 1) return console.log("errorIds", a.errorIds),
                    console.log("rightIds", a.rightIds),
                    void c("当前为单选题，最多只能选择1个答案");
                    a.errorIds.length > 0 || a.rightIds.length != i ? (h.isRight = !1, a.playAudioEffect("Error")) : (h.isRight = !0, a.playAudioEffect("Right")),
                    console.log("你选择的正确答案", a.rightIds),
                    console.log("你选择的错误答案", a.errorIds),
                    a.rightIds = [],
                    a.errorIds = [],
                    a.nextToAnswerEvent(h, e, h.isRight),
                    console.log("手动进入下一题目", h.isRight)
                }
            })
        },
        playCurrentQuestionMusic: function(a, b) {
            var c = this;
            setTimeout(function() {
                c._playCurrentQuestionMusicEvent(a, b)
            },
            500)
        },
        _playCurrentQuestionMusicEvent: function(a, b) {
            console.log("开始播放题目音乐 pageIndex=" + b);
            var c = this;
            if (!c.showFocusWxDialogIfNeed()) {
                var d = b || 0,
                e = c.activeData.questionList || [];
                if (! (d >= e.length)) {
                    var f = e[d];
                    a = a || "play";
                    var g = d,
                    h = f.music;
                    if (h) { - 1 === h.indexOf("http") && (h = u.musicPreFix(h));
                        var i = c.html.find(".audio-plugin-answer"),
                        j = i.get(0),
                        k = c.html.find(".music-index-" + g);
                        "play" === a ? j.paused && (c.stopSysState(), z.hideEffect(k.find(".img-play")), z.showEffect(k.find(".img-pause"), !0), j.setAttribute("src", h), j.play()) : (c.resetSysState(), z.showEffect(k.find(".img-play"), !0), z.hideEffect(k.find(".img-pause")), j.pause())
                    }
                }
            }
        },
        getRandomAnswer: function() {
            var a = this.config.content.randomAnswer || {
                show: !1,
                count: 10,
                answerCount: 1,
                answerCountType: 2,
                showResult: !1
            };
            return a.answerCount = a.answerCount || 1,
            a
        },
        getAnswer: function(b) {
            var c = this;
            a.showLoading(),
            r("v2/answerView/get", {
                wsiteGuid: x,
                activeGuid: c.config.content.guid,
                wxOpenId: E.id
            }).then(function(d) {
				for(var i=0;i<d.data.questionList.length;i++){
					for(var j=0;j<d.data.questionList[i].list.length;j++){
						if(d.data.questionList[i].list[j].right){
							d.data.questionList[i].list[j].value='--------------'
						}
					}
				}
                a.hideLoading(),
                0 == d.result ? (d.data.questionList = g(d.data.questionList, d.data.questionType), c.isLoad = !0, c.answerData = d.data, b()) : c.showErrorInfo(d.msg)
            },
            function(b) {
                a.hideLoading(),
                console.info(b),
                winAlert("服务异常-" + b.status)
            })
        },
        renderAnswer: function(b) {
            var c = this;
            e(!0),
            c.currentAnswerIndex = 0,
            c.resetDownTime();
            for (var d = c.answerData,
            h = d.questionList || [], i = 0, j = 0; j < h.length; j++) {
                20 == c.config.content.answerVersion || h[j].score || (j == h.length - 1 ? h[j].score = 100 - i: (h[j].score = (100 / h.length).toFixed(0), i += h[j].score)),
                h[j].question = h[j].question.replace(/\n/g, "<br>");
                for (var l = h[j].list || [], m = 0; m < l.length; m++) l[m].codeIndex = F[m],
                l[m].selected = !1
            }
            d.awardModel = f(d.awardModel),
            d.topData = f(d.topData, "obj"),
            d.questionType = d.questionType || 1,
            d.questionList = g(d.questionList, d.questionType),
            d.showPrizeList = d.showPrizeList ? d.showPrizeList: 1,
            c.activeData = d,
            console.log("renderAnswer-11-activeData", c.activeData),
            console.log("renderAnswer-11-assets", c.assets),
            c.html = a.renderElement(t, c.wrapper, {
                isEdit: !1,
                questionType: d.questionType,
                asset: c.assets,
                answerList: h,
                smallImageThum: B,
                bigImageThum: A,
                codeIndex: ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J."],
                isNextAnaswer: c.config.content.isNextAnaswer
            }),
            h.length > 0 && h[0].music && (console.log("第一题是音乐题目 直接停止背景音乐"), c.stopSysState());
            var n = c.html.find(".answer-index-0");
            if (n.css("opacity", 1), n.css("display", "block"), Cool.util.checkIsAndroid()) {
                var o = c.html.find(".rrx-pg-answer-index .plugin-answer");
                o.css({
                    transition: "transform  1s",
                    transform: "translate3d(0,0,0)",
                    "-webkit-transform": "translate3d(0,0,0)"
                })
            }
            c.BindEvent();
            var p = c.activeState || "";
            if ("" != p && "reset" != b)(p == c.overAnswerCountTip || p == c.overAnswerDayCountTip) && c.showBasicDialog("basicPage"),
            c.showAlertByReturnFirstPage(p);
            else {
                var q = c.activeData;
                "reset" != b && 2 == c.config.content.ruleType ? c.showBasicDialog("basicPage") : ((3 != d.questionType && (u.isWeixin() || u.checkIsAppEnv()) || appConfig.dev === !0) && (c.needPreset || c.renderDownTime()), c.startAnswerTime())
            }
            setTimeout(function() {
                if (q && q.questionList && q.questionList.length > 0) {
                    q.questionList[0];
                    k(c.config.id, c.html.get(0))
                }
            },
            100)
        },
        saveScoreFn: function(b, c) {
            var d = this;
            d.onceConsumePoints = 0;
            var e = d.config.content.guid,
            f = (new Date).getTime();
            f - d.answerStartTime;
            r("v2/answerView/endAnswer", {
                activeGuid: e,
                answerResult: JSON.stringify(b),
                connect: j(),
                wxOpenId: E.id,
                wsiteGuid: x,
                fg: u.getFg()
            },
            "POST").then(function(a) {
                if (0 == a.result) {
                    d.myTop = a.data.topData;
                    var b = 0;
                    b = d.getIsDayAnswerCount() ? parseInt(a.data.topData.playDayCount) : parseInt(a.data.topData.playCount),
                    d.playCount = b;
                    var e = d.getRandomAnswer();
                    b >= parseInt(e.answerCount) && (d.activeCode = 500, d.activeState = d.getOverAnswerTip(), d.isEnableClick = !0)
                } else console.log(a);
                c(a)
            },
            function(e) {
                a.hideLoading(),
                console.info(e),
                d.saveScoreErrorCount || (d.saveScoreErrorCount = 0),
                d.saveScoreErrorCount > 20 ? c({
                    result: 500,
                    data: "",
                    msg: "系统繁忙"
                }) : (d.saveScoreErrorCount++, d.showErrorInfo("系统繁忙,请稍后再试！",
                function() {
                    a.showLoading(),
                    d.saveScoreFn(b, c)
                },
                "点击重试"))
            })
        },
        answerEnd: function() {
            var b = this;
            if (b.resetDownTime(), !a.convertToBool(b.ispass)) {
                a.showLoading(),
                b.ispass = !0;
                for (var c = b.activeData,
                d = c.questionList,
                e = [], f = 0, g = 0; g < d.length; g++) {
                    for (var h = d[g].list, i = [], j = 0, k = 0; k < h.length; k++) if (a.convertToBool(h[k].selected)) if (i.push(h[k].codeIndex), 2 == c.questionType) j += parseInt(h[k].score || 0, 10);
                    else if (3 == c.questionType && 3 == h[k].answerAction) {
                        j = parseInt(h[k].score || 0, 10);
                        break
                    }
                    1 == c.questionType && (j = d[g].score),
                    e.push({
                        score: j,
                        questionType: c.questionType,
                        question: d[g].question,
                        guid: d[g].guid,
                        isRight: d[g].isRight,
                        codeIndexs: i
                    }),
                    a.convertToBool(d[g].isRight) && (f += parseInt(j, 10))
                }
                b.saveScoreFn(e,
                function(d) {
                    if (a.hideLoading(), 0 == d.result) {
                        var e = u.getShareInfo(),
                        g = Cool.util.getBrowserUrl("anfather", d.data.guid, e.url),
                        h = "";
                        1 == b.config.content.isCustomShare && "" != b.config.content.customShareTitle && (h = b.config.content.customShareTitle.replace(/#分数#/g, f)),
                        u.updateShareInfo(h, "", "", g),
                        b.saveScore = {
                            score: f,
                            top: d.data.topData.top
                        },
                        2 == c.resultType || 3 == c.resultType ? b.showEndPage(f, d.data.topData.top) : a.convertToBool(b.config.content.isShowScore) ? b.showEndPage(f, d.data.topData.top) : b.gotoResultPage(f)
                    } else b.showErrorInfo(d.msg,
                    function(a) {
                        if (1 == d.result) {
                            var b = {
                                ggLink: "https://engine.lghsrh.com/index/activity?appKey=2pFfUYVHYMd63nyFtbCt6PrBNPPs&adslotId=390523&uk_a1=__IMEI__&uk_a2=__IMEI2__&uk_a3=__MUID__&uk_b1=__IDFA__&uk_b2=__IDFA2__&uk_c1=__OAID__",
                                key: "answer" + x,
                                activityType: 4
                            };
                            backGGAlert(b)
                        }
                    })
                })
            }
        },
        bindEndPageEvent: function() {
            var a = this,
            b = a.endDialog.find(".content-buttonList .btn-share");
            d(b, y,
            function(a) {
                u.showShareDialog()
            });
            var c = a.endDialog.find(".content-buttonList .btn-top");
            d(c, y,
            function(b) {
                a.showBasicDialog("topsPage")
            });
            var e = a.endDialog.find(".btn-lottery");
            d(e, y,
            function(b) {
                u.checkWeixinAlert() && u.checkReginLimit(a.regionLimit,
                function(b) {
                    0 === b && (setTimeout(function() {
                        e.hide()
                    },
                    1e3), a.lotteryEvent())
                },
                a.baseColor)
            });
            var f = a.endDialog.find(".btn-goto");
            d(f, y,
            function(b) {
                var c = a.saveScore;
                a.hideEndPage(),
                c ? a.gotoResultPage(c.score || 0) : a.gotoResultPage(0)
            });
            var g = a.endDialog.find(".content-buttonList .btn-resetAnswer");
            d(g, y,
            function(b) {
                var c = a.playCount,
                d = a.getRandomAnswer();
                parseInt(c) >= parseInt(d.answerCount) ? (a.activeState = a.getOverAnswerTip(), a.isEnableClick = !0, a.showErrorInfo(a.getOverAnswerTip(),
                function() {
                    a.config.content.endToPage && a.gotoEndPage()
                })) : (setTimeout(function() {
                    e.show()
                },
                1e3), a.getAnswer(function() {
                    a.answerAgain()
                }))
            })
        },
        answerAgain: function() {
            var a = this;
            a.ispass = !1,
            a.rightIds = [],
            a.errorIds = [],
            a.renderAnswer("reset"),
            a.hideEndPage(),
            setTimeout(function() {
                a.isEnableClick = !1
            },
            600)
        },
        showBasicDialog: function(b) {
            var c = this,
            e = c.activeData;
            if (c.answerBasicDialog = $("#pt-inner .pt-dialogs").find("." + c.basicCssId), null === c.answerBasicDialog || void 0 === c.answerBasicDialog || 0 === c.answerBasicDialog.length) {
                var f = c.baseColor; ("#fff" == f || "#ffffff" == f || "rgb(255, 255, 255)" == f) && (f = "#1D93FF");
                var g = '<div class="{{basicCss}} {{basicCssId}}"><div class="content-close"><img class="content-close-img" src="{{closeIcon}}"></div><div class="dialog-content"><div class="dialog-content-head"><ul class="wrapper"><li class="basicPage" style="background-color:{{baseColor}};color:#fff">活动说明</li>{{if countryTop==1}}<li class="topsPage">排行榜</li>{{/if}} {{if friendTop==1}}<li class="friendsPage">好友排行</li>{{/if}} {{if isFocus==1}}<li class="focusPage">关于我们</li>{{/if}}</ul></div><div class="dialog-content-box"><div id="scrolle" class="scroll-list"></div></div><div class="dialog-content-foot" style="background-color:{{baseColor}};color:#fff"><a href="javascript:void(0)" target="_blank" style="text-decoration:none;color:#fff"></a></div></div></div>\n',
                h = a.compileHtml(g, {
                    closeIcon: u.getLibHost() + "weplus/image/close.png",
                    baseColor: f,
                    basicCss: C,
                    basicCssId: c.basicCssId,
                    isFocus: a.convertToBool(c.config.content.isFocusWx) && c.config.content.wxQr ? 1 : 0,
                    countryTop: a.convertToBool(e.topData.countryTop) ? 1 : 0,
                    friendTop: a.convertToBool(e.topData.friendTop) ? 1 : 0,
                    friendPK: a.convertToBool(e.topData.friendPK) ? 1 : 0,
                    topPrize: a.convertToBool(e.topData.topPrize) ? 1 : 0
                });
                $("#pt-inner .pt-dialogs").append(h),
                c.answerBasicDialog = $("#pt-inner .pt-dialogs").find("." + c.basicCssId);
                var i = c.answerBasicDialog.find(".dialog-content-head ul li");
                d(i, y,
                function(a) {
                    var b = a.currentTarget.className,
                    d = c.answerBasicDialog.find(".dialog-content-head ul");
                    c.showBasicDialogByClassName(d, b)
                });
                var j = c.answerBasicDialog.find(".content-close");
                d(j, y,
                function(a) {
                    m(c.answerBasicDialog,
                    function() {
                        var a = c.GeneralLotteryUtil.checkIsHaveDialog();
                        if (a || u.resetFlip(), !a && 2 == c.config.content.ruleType && !c.needPreset && c.isLoad) {
                            c.isLoad = !1;
                            var b = c.activeData; (3 != b.questionType && (u.isWeixin() || u.checkIsAppEnv()) || appConfig.dev === !0) && c.renderDownTime(),
                            c.startAnswerTime()
                        }
                    })
                }),
                l(c.answerBasicDialog),
                k("scroll-list-1", c.answerBasicDialog.find(".dialog-content-box").get(0)),
                u.scaleElement(c.answerBasicDialog),
                c.showCopyrightFoot()
            } else l(c.answerBasicDialog);
            void 0 !== b ? c.showBasicDialogByClassName(c.answerBasicDialog.find(".dialog-content-head ul"), b) : c.showBasicDialogByClassName(c.answerBasicDialog.find(".dialog-content-head ul"), "basicPage");
            var o = c.answerBasicDialog.find(".dialog-content-foot"),
            p = n();
            if (p) if (p.content) o.find("a").html(p.content),
            o.find("a").attr({
                href: p.url || "javascript:"
            });
            else if ("string" == typeof p) o.find("a").html(p);
            else {
                var q = ["6px", "-45px"],
                r = 0,
                s = "快速制作答题-人人秀",
                t = "300万用户正在使用",
                v = $('<div class="scroll" style="position: relative;top:6px; -webkit-transition: top .8s; font-size:26px"><div>' + s + " </div> <div>" + t + " </div> ");
                o.find("a").append(v);
                var w = o.find("a").find(".scroll");
                setInterval(function() {
                    w.css({
                        top: q[r]
                    }),
                    r++,
                    r > 1 && (r = 0)
                },
                1800)
            } else o.remove()
        },
        showBasicDialogByClassName: function(a, b) {
            a.find("li").css({
                "background-color": "#ffffff",
                color: "inherit"
            }),
            a.find("." + b).css({
                "background-color": this.baseColor,
                color: "#ffffff"
            }),
            "basicPage" == b ? this.showBasicPage() : "topsPage" == b ? this.showTopsPage() : "friendsPage" == b ? this.showFriendsPage() : "focusPage" == b && this.showFocusPage()
        },
        showBasicPage: function() {
            var b = this;
            b.getPrizeList(function(c) {
                var e = b.answerBasicDialog.find(".scroll-list"),
                f = '<div class="rule">{{if ruleType==2}}<div class="rule-one"><div class="rule-one-head"><div style="background-color:{{baseColor}}" class="item">1</div>活动规则</div><div class="rule-one-box">{{ruleContent}}</div></div>{{/if}}<div class="rule-line"><div class="rule-line-head"><div style="background-color:{{baseColor}}" class="item">{{ruleType==2?2:1}}</div>活动时间</div><div class="rule-line-box">{{beginTime}} ~ {{endTime}}</div></div><div class="rule-line rule-rrx-copyright"><div class="rule-line-head"><div style="background-color:{{baseColor}}" class="item">{{ruleType==2?3:2}}</div>技术支持</div><div class="rule-line-box">{{copyRightName}}</div></div>{{if showLottery==1 }}<div class="rule-three"><div class="rule-three-head"><div style="background-color:{{baseColor}}" class="item">{{ruleType==2?4:3}}</div>活动奖品</div><div class="rule-three-box"><div class="head" style="color:{{baseColor}}">抽奖奖品 {{if showMyPrize==1}} <a href="javascript:void(0)" style="color:{{baseColor}}" class="rule-myPrizeBtn">我的奖品</a> {{/if}}</div><ul>{{each prizeList as row i}}<li><img src="{{row.prizeIcon}}"><div class="grab-content-text"><p>{{row.prizeName}}</p><span>{{row.prizeTypeName}}</span></div></li>{{/each}}</ul></div></div>{{/if}}</div>',
                g = b.config.content.ruleType; ("" == b.config.content.ruleContent || void 0 == b.config.content.ruleContent) && (g = 1);
                var h = b.activeData,
                i = o(),
                j = "人人秀";
                i ? i.content ? j = i.content: "string" == typeof i && (j = i) : j = "人人秀";
                var k = h.showPrizeList || 1,
                l = a.compileHtml(f, {
                    baseColor: b.baseColor,
                    ruleType: g,
                    showMyPrize: b.config.content.showMyPrize ? 1 : 0,
                    ruleContent: b.config.content.ruleContent.replace(/\n/g, "<br>"),
                    beginTime: p(h.beginTime),
                    endTime: p(h.endTime),
                    prizeList: c,
                    showLottery: c.length > 0 && 2 == k ? 1 : 0,
                    copyRightName: j
                });
                e.html(l),
                b.config.content.showMyPrize && setTimeout(function() {
                    d(e, y,
                    function(a) {
                        b.getMyActivePrizeList()
                    })
                },
                1e3),
                b.showCopyrightFoot()
            })
        },
        hideAnswerTopForm: function() {
            var a = this;
            if (a.canUseNewStoreAwardInfo) {
                var b = $(".answer-top-form");
                b && b.length > 0 && b.hide()
            }
        },
        showTopsPage: function() {
            var b = this;
            b.getTopData("",
            function(c) {
                var e = b.baseColor; ("#fff" == e || "#ffffff" == e || "rgb(255, 255, 255)" == e) && (e = "#1D93FF");
                var f = !0;
                b.canUseNewStoreAwardInfo && (b.needTopInfo ? b.preset && !b.needPreset && (f = !1) : f = !1);
                var g = '<div class="tops">	<div class="tops-info">		<img src="{{topData.headImageUrl}}" style="border: 4px solid {{baseColor}};">		<div class="tops-content-text">			<div class="tops-name">				{{topData.nickName}}			</div>			<div class="tops-score" style="display: flex;">				{{if topMode == 1}}累计成绩{{else}}最好成绩{{/if}}：<span style="color: {{baseColor}};">{{topData.bestCounter}}</span>&nbsp;分				{{if topData.answerTime}}				&nbsp;&nbsp;<span style="color: {{baseColor}};">{{topData.answerTime}}</span>&nbsp;秒				{{/if}}			</div>			<div class="tops-top">				{{endStyle.topText}}：<span style="color: {{baseColor}};">{{topData.top}}</span>			</div>		</div>		{{if showTopPrize==1 && showcontentAction}}		<div class="content-box-action answer-top-form" style="background-color: {{baseColor}};">			录入领奖人信息		</div>		{{/if}}	</div>	<div class="content-box-color">	</div>	<div class="tops-content">		<ul>				{{each topList as row i}}			<li>				<div class="tops-content-text">					{{if i==0}}					<div class="topsNum" style="background-image: url({{topOneIcon}}); vertical-align: sub;">					</div>					{{/if}}					{{if i==1}}					<div class="topsNum" style="background-image: url({{topTwoIcon}}); vertical-align: sub;">					</div>					{{/if}}					{{if i==2}}					<div class="topsNum" style="background-image: url({{topThreeIcon}}); vertical-align: sub;">					</div>					{{/if}}					{{if i>2}}					<div class="topsNum" style="vertical-align: sub;">						{{i+1}}					</div>					{{/if}}					<img class="topsImage" src="{{row.headImageUrl}}">					<div class="tops-content-name">						{{row.nickName}}					</div>					<div class="tops-content-sc">						{{row.bestCounter}}分					</div>					{{if row.answerTime}}					<div class="tops-content-time">						{{row.answerTime}}s					</div>					{{/if}}				</div>			</li>				{{/each}}		</ul>		<div class="tops-tips">榜单更新延迟1分钟</div>	</div></div>\n',
                h = b.answerBasicDialog.find(".scroll-list"),
                i = b.activeData,
                j = a.compileHtml(g, {
                    baseColor: e,
                    topOneIcon: u.getLibHost() + "weplus/image/tops_1.png",
                    topTwoIcon: u.getLibHost() + "weplus/image/tops_2.png",
                    topThreeIcon: u.getLibHost() + "weplus/image/tops_3.png",
                    topData: c.topData,
                    showTopPrize: a.convertToBool(i.topData.topPrize) ? 1 : 0,
                    topList: c.rows,
                    showcontentAction: f,
                    topMode: i.topMode,
                    endStyle: b.assets.endStyle || {}
                });
                h.html(j),
                setTimeout(function() {
                    d(h.find(".answer-top-form"), y,
                    function(a) {
                        b.hideBasicDialog(),
                        b.GeneralLotteryUtil.showTopFormDialog()
                    })
                },
                500)
            })
        },
        getTopData: function(b, c) {
            var d = this;
            a.showLoading();
            var e = 0;
            d.canUseNewStoreAwardInfo && (d.notNeedAwardInfo ? e = 1 : d.preset && !d.needPreset && (e = 1)),
            r("v2/answerView/getTopList", {
                wsiteGuid: x,
                activeGuid: d.config.content.guid,
                wxOpenId: E.id,
                limit: 100,
                hasInfo: e
            },
            "GET").then(function(b) {
                0 == b.result ? (b.data.topData.nickName || (b.data.topData.nickName = E.nickname, b.data.topData.headImageUrl = E.headimgurl), c(b.data)) : d.showErrorInfo(b.msg),
                a.hideLoading(),
                u.stopFlip()
            },
            function(b) {
                console.info(b),
                winAlert("服务异常-" + b.status),
                a.hideLoading(),
                u.stopFlip()
            })
        },
        showFriendsPage: function() {
            var b = this;
            b.getTopData("father",
            function(c) {
                var d = '<div class="friends"><div class="tops-info"><img src="{{topData.headImageUrl}}" style="border:4px solid{{baseColor}}"><div class="tops-content-text"><div class="tops-name">{{topData.nickName}}</div><div class="tops-score">最好成绩<span style="color:{{baseColor}}">{{topData.bestCounter}}</span></div><div class="tops-top">好友排名<span style="color:{{baseColor}}">{{topData.top}}</span></div></div></div><div class="content-box-color"></div><div class="tops-content"><ul>{{each topList as row i}}<li><div class="tops-content-text">{{if i==0}}<div class="topsNum" style="background-image:url({{topOneIcon}});vertical-align:sub"></div>{{/if}} {{if i==1}}<div class="topsNum" style="background-image:url({{topTwoIcon}});vertical-align:sub"></div>{{/if}} {{if i==2}}<div class="topsNum" style="background-image:url({{topThreeIcon}});vertical-align:sub"></div>{{/if}} {{if i>2}}<div class="topsNum" style="vertical-align:sub">{{i+1}}</div>{{/if}} <img class="topsImage" src="{{row.headImageUrl}}"><div class="tops-content-name">{{row.nickName}}</div><div class="tops-content-sc">{{row.bestCounter}}</div></div></li>{{/each}}</ul></div></div>\n',
                e = b.answerBasicDialog.find(".scroll-list"),
                f = a.compileHtml(d, {
                    baseColor: b.baseColor,
                    topOneIcon: u.getLibHost() + "weplus/image/tops_1.png",
                    topTwoIcon: u.getLibHost() + "weplus/image/tops_2.png",
                    topThreeIcon: u.getLibHost() + "weplus/image/tops_3.png",
                    topData: c.topData,
                    topList: c.rows
                });
                e.html(f)
            })
        },
        showFocusPage: function() {
            var b = this.config.content.wxQr;
            if (this.config.content.isFocusWx && b && "" !== b && void 0 !== b) {
                b += "@!200x200";
                var c = this.answerBasicDialog.find(".scroll-list"),
                d = '<div class="focus-page focus"><div class="focus-info"><img src="{{qrcode}}"><div>长按二维码</div><div>关注公众号</div></div></div>\n',
                e = a.compileHtml(d, {
                    qrcode: b
                });
                c.html(e)
            }
        },
        getPrizeList: function(b) {
            var c = this,
            d = c.prizeList;
            null == d || void 0 == d || 0 == d.length ? (a.showLoading(), r("generalPrize/getPrizeListByView", {
                activeGuid: c.config.content.guid,
                prizeAuth: 1
            },
            "GET", "").then(function(e) {
                if (0 == e.result) {
                    d = e.data;
                    for (var f = c.activeData,
                    g = f.totalProbability || 100,
                    h = g / 100,
                    i = 0; i < d.length; i++)"" == d[i].prizeIcon && (d[i].prizeIcon = u.getImageHost() + "default_prize_icon.png"),
                    d[i].rate = (d[i].winProbability / h).toFixed(2);
                    c.prizeList = d,
                    b(d)
                } else c.showErrorInfo(e.msg);
                a.hideLoading(),
                u.stopFlip()
            },
            function(b) {
                console.info(b),
                winAlert("服务异常-" + b.status),
                a.hideLoading(),
                u.stopFlip()
            })) : (b(d), u.stopFlip())
        },
        lotteryEvent: function() {
            var b = this;
            a.showLoading("加载中");
            var c = {
                wsiteGuid: x,
                activeGuid: b.config.content.guid,
                wxOpenId: E.id,
                identify: b.identify,
                fg: u.getFg()
            };
            c = u.appendChannelParams(c),
            r("v2/answerView/grab", c, "POST").then(function(c) {
                if (5500 === c.result) window.location.reload();
                else if (0 === c.result) c.data.exdata = b.parseWinData(c.data.exdata),
                b.GeneralLotteryUtil.showPrizeInfo(c.data);
                else if (4500 === c.result) {
                    var d = u.getInteractServiceHost();
                    window.verifyLotteryAlert(d, x, E.id,
                    function(a) {
                        a && a.isVerify && b.lotteryEvent()
                    })
                } else {
                    var e = c.msg.split("|");
                    e.length > 1 ? b.GeneralLotteryUtil.showNoWinInfo(e[0], e.length > 1 ? e[1] : "") : b.showErrorInfo(c.msg,
                    function() {
                        b.showBasicDialog("basicPage")
                    })
                }
                a.hideLoading()
            },
            function(b) {
                console.info(b),
                winAlert("服务异常-" + b.status),
                a.hideLoading()
            })
        },
        checkActive: function(a, b) {
            var c = this,
            d = c.config.content.guid;
            c.identify = u.weixinStrong.getIdentifyId(),
            r("v2/answerView/checkActive", {
                wsiteGuid: x,
                activeGuid: d,
                wxOpenId: E.id,
                identify: c.identify,
                fg: u.getFg()
            },
            "POST").then(function(a) {
                b(a)
            })
        },
        renderDownTime: function() {
            var b = this,
            c = b.getRandomAnswer();
            if (a.convertToBool(c.showLimitTime)) {
                var d = c.limitTime || 60;
                b.html.find(".header-downTime").show();
                var e = b.html.find(".header-downTime .down-time");
                2 == c.showLimitTimeType ? (b.timer_end = !1, b.startTimedCount(e, d,
                function() {
                    var a = b.currentAnswerIndex || 0;
                    b.rightCount = 0,
                    b.rightIds = [],
                    b.playAudioEffect("Error"),
                    b.isEnableClick = !1,
                    b.nextAnswer(a)
                })) : (b.timer_end = !1, b.startTimedCount(e, d,
                function() {
                    b.answerEnd(),
                    b.resetSysState()
                }))
            }
        },
        checkAnswerClick: function(b, c) {
            var d = this;
            if (u.checkWeixinAlert() && !d.showFocusWxDialogIfNeed()) return a.convertToBool(d.ispass) ? void d.showAlertByReturnFirstPage(d.answerEndTip) : void d.fnPresetEvent(function(a, e) {
                if (a) if (e) {
                    if (d.isLoad) {
                        d.isLoad = !1;
                        var f = d.activeData; (3 != f.questionType && (u.isWeixin() || u.checkIsAppEnv()) || appConfig.dev === !0) && d.renderDownTime(),
                        d.startAnswerTime(),
                        d.checkAnswerClickEvent(b, c)
                    }
                } else d.config.content.consumePoints > 0 && 1 != d.onceConsumePoints ? d.checkAnswerClickEvent(b, c) : d.checkAnswerByType(b, c)
            })
        },
        checkAnswerClickEvent: function(a, b) {
            var c = this;
            if (c.isEnableClick) {
                var d = c.activeState || "";
                return void("" != d && c.showAlertByReturnFirstPage(d))
            }
            if (c.config.content.consumePoints > 0) if (1 == c.onceConsumePoints);
            else {
                var e = c.config.content.guid,
                f = {
                    activeGuid: e,
                    points: c.config.content.consumePoints
                };
                r("v2/answerView/checkPlayCount", {
                    activeGuid: e,
                    wxOpenId: E.id,
                    wsiteGuid: x
                },
                "POST").then(function(d) {
                    0 == d.result ? showConsumePointsConfirm(u, f, c.baseColor,
                    function(d) {
                        d && c.doConsumeMyPoints(e, a, b)
                    }) : c.showErrorInfo(d.msg)
                },
                function(a) {
                    winAlert("服务异常-" + a.status)
                })
            }
        },
        checkAnswerByType: function(a, b) {
            this.currentAnswerType = b;
            var c = this.activeData;
            2 == c.questionType ? this.checkOnLineAnser(a, b) : 3 == c.questionType ? this.checkBentTestAnser(a, b) : b == this.ANSWER_TYPE.wordfill ? this.checkKnowledgeWordFillAnswer(a, b) : this.checkKnowledgeAnswer(a, b)
        },
        checkKnowledgeAnswer: function(b, c) {
            var d = this,
            e = b,
            f = e.data("id").split("-"),
            g = d.config.content.isNextAnaswer;
            if (2 === f.length) {
                d.isEnableClick = !0;
                var h = d.activeData,
                i = h.questionList[f[0]],
                j = null;
                if (i.list && i.list.length > 0 && (j = i.list[f[1]]), null !== j) {
                    if (g) {
                        var k = d.html.find(".next-answer-btn");
                        k.data("pageIndex", f[0])
                    }
                    d.rightIds || (d.rightIds = []),
                    d.errorIds || (d.errorIds = []);
                    var l = parseInt(i.rightCount || 1),
                    m = !j.selected,
                    n = !1;
                    a.convertToBool(j.right) && (n = !0);
                    var o = d.rightIds.indexOf(f[1]),
                    p = d.errorIds.indexOf(f[1]);
                    if (o > -1 || p > -1) m || (p > -1 ? d.errorIds.splice(p, 1) : d.rightIds.splice(o, 1));
                    else {
                        var q = d.rightIds.length + d.errorIds.length;
                        if (1 == l && q > 0 && m) {
                            for (var r = d.rightIds.concat(d.errorIds), s = 0; s < r.length; s++) i.list[r[s]].selected = !1;
                            var t = d.html.find(".answer-index-" + f[0] + " .answer-result-item");
                            d.resetResultStyle(t, c),
                            d.rightIds = [],
                            d.errorIds = [],
                            console.log(l + "=清空已选择的=" + m, q)
                        }
                        n ? (d.rightIds.push(f[1]), g || d.playAudioEffect("Right")) : (d.errorIds.push(f[1]), g || d.playAudioEffect("Error"))
                    }
                    j.selected = m,
                    console.log(l + "=selectCount=" + m, q),
                    console.log("==rightIds=", d.rightIds),
                    console.log("==errorIds=", d.errorIds),
                    d.renderResultStyle(e, g ? !0 : n, c, j.selected);
                    var u = d.rightIds.length;
                    if (g) d.isEnableClick = !1;
                    else {
                        if (n && u != l) return void(d.isEnableClick = !1);
                        i.isRight = n,
                        d.rightIds = [],
                        d.errorIds = [],
                        d.nextToAnswerEvent(i, f[0], n)
                    }
                }
            }
        },
        nextToAnswerEvent: function(b, c, d) {
            var e = this,
            f = e.getRandomAnswer(),
            g = a.convertToBool(e.config.content.showExplain),
            h = a.convertToBool(f.showResult);
            if (!d || g) {
                var i = h && !d || d && g && h;
                if (i) {
                    var j = [],
                    l = !1,
                    m = 0;
                    for (m = 0; m < b.list.length; m++) if (a.convertToBool(b.list[m].right) && b.list[m].answerExplain) {
                        b.list[m].answerExplain = b.list[m].answerExplain.replace(/\n/g, "<br>"),
                        l = !0,
                        j.push(b.list[m]);
                        break
                    }
                    if (!l) for (m = 0; m < b.list.length; m++) a.convertToBool(b.list[m].right) && (b.list[m].answerType = b.type, "image" == b.type ? b.list[m].answerExplain = b.list[m].value: b.list[m].answerExplain = b.list[m].codeIndex + "." + b.list[m].value, j.push(b.list[m]));
                    if (h && !d || d && g && l && h) {
                        var n = "正确答案";
                        d && g && (n = "答案解释");
                        var o = '<div class="rrx-pg-answer-question-result"><div style=\'width:100%\'><div class="answer-title">{{titleText}}</div><div class="answer-content-list">{{each rightList as row i}} {{if row.answerType == \'image\'}}<div class="item-content item-image-answer"><span>{{row.codeIndex}}</span> <img src="{{row.answerExplain}}"></div>{{else}}<div class="item-content">{{row.answerExplain}}</div>{{/if}} {{/each}}</div></div></div>\n',
                        p = a.compileHtml(o, {
                            rightList: j,
                            titleText: n
                        });
                        e.showErrorInfo(p,
                        function() {
                            setTimeout(function() {
                                e.isEnableClick = !1,
                                e.nextAnswer(c)
                            },
                            300)
                        })
                    } else setTimeout(function() {
                        e.isEnableClick = !1,
                        e.nextAnswer(c)
                    },
                    300);
                    setTimeout(function() {
                        var a = $(".rrx-prizeinfo-dialog .rrx-pg-answer-question-result"),
                        b = a.find(".answer-content-list  .item-content").length;
                        if (b > 0) {
                            var c = a.find(".answer-content-list .item-content").html(); (c.length > 100 || b > 1) && (a.css("height", "400px"), a.css("position", "relative"), k("scroll-list-answer-review", a.get(0)))
                        }
                    },
                    100)
                } else setTimeout(function() {
                    e.isEnableClick = !1,
                    e.nextAnswer(c)
                },
                300)
            } else setTimeout(function() {
                e.isEnableClick = !1,
                e.nextAnswer(c)
            },
            300)
        },
        checkKnowledgeWordFillAnswer: function(a, b) {
            var c = this;
            c.isEnableClick = !0;
            var d = a,
            e = c.config.content.isNextAnaswer,
            f = d.data("id").split("-");
            if (2 === f.length) {
                var g = c.activeData,
                h = g.questionList[f[0]];
                if (h.list && 0 != h.list.length) {
                    var i = a.data("word"),
                    j = h.rightWords,
                    k = h.selectWords,
                    l = !1;
                    if (! (k.length >= j.length)) {
                        if (e) {
                            var m = c.html.find(".next-answer-btn");
                            m.data("pageIndex", f[0])
                        }
                        k.push(i);
                        for (var n = c.html.find(".answer-index-" + f[0]), o = 0; o < k.length; o++) n.find(".wordfill-id-" + o).html(k[o]);
                        if (k.join("") == j.join("") && (l = !0), k.length != j.length) return void(c.isEnableClick = !1);
                        if (l ? c.playAudioEffect("Right") : c.playAudioEffect("Error"), e) if (c.isEnableClick = !1, c.rightIds = [], c.errorIds = [], l) for (var p = h.rightCount || 1,
                        o = 0; p > o; o++) c.rightIds.push(o + 1);
                        else c.errorIds = [1];
                        else h.isRight = l,
                        c.nextToAnswerEvent(h, f[0], l)
                    }
                }
            }
        },
        checkOnLineAnser: function(a, b) {
            var d = this;
            d.isEnableClick = !0;
            var e = a,
            f = e.data("id").split("-");
            if (2 === f.length) {
                var g = d.activeData,
                h = g.questionList[f[0]],
                i = null;
                if (h.list && h.list.length > 0 && (i = h.list[f[1]]), null === i) return;
                var j = h.rightCount || 1;
                j = parseInt(j);
                var k = d.rightCount || 0;
                k = parseInt(k);
                var l = k,
                m = i.selected;
                m = m ? !1 : !0,
                m ? l += 1 : l -= 1;
                var n = null;
                if (1 == j) {
                    n = b == d.ANSWER_TYPE.image ? d.html.find(".plugin-answer .imgBox-" + f[0]) : d.html.find(".plugin-answer .item-text-index-" + f[0]);
                    for (var o = 0; o < h.list.length; o++) h.list[o].selected = !1,
                    $(n[o]).data(""),
                    d.renderResultStyle($(n[o]), !0, b, !1)
                } else if (m && l > j && j > 1) return d.isEnableClick = !1,
                void c("最多选择" + j + "个答案");
                i.selected = m,
                d.renderResultStyle(e, !0, b, i.selected),
                d.playAudioEffect("Right"),
                k = l,
                d.rightCount = k;
                var p = d.html.find(".next-answer-btn");
                0 == k ? p.data("pageIndex", null) : p.data("pageIndex", f[0]),
                k == j ? (h.isRight = !0, d.config.content.isNextAnaswer ? d.isEnableClick = !1 : setTimeout(function() {
                    d.nextAnswer(f[0])
                },
                300)) : d.isEnableClick = !1
            }
        },
        checkBentTestAnser: function(b, c) {
            var d = this;
            d.isEnableClick = !0;
            var e = b,
            f = e.data("id").split("-");
            if (2 === f.length) {
                var g = d.activeData,
                h = g.questionList[f[0]],
                i = null;
                if (h.list && h.list.length > 0 && (i = h.list[f[1]]), null === i) return;
                var j = null;
                j = c == d.ANSWER_TYPE.image ? d.html.find(".plugin-answer .imgBox-" + f[0]) : d.html.find(".plugin-answer .item-text-index-" + f[0]);
                for (var k = 0; k < h.list.length; k++) h.list[k].selected = !1,
                d.renderResultStyle($(j[k]), !0, c, !1);
                i.selected ? (i.selected = !1, d.rightCount = 0) : (i.selected = !0, d.rightCount = 1),
                d.renderResultStyle(e, !0, c, i.selected),
                d.playAudioEffect("Right"),
                h.isRight = !0;
                var l = parseInt(f[0], 10),
                m = l + 1;
                if (2 == i.answerAction && i.gotoAnswerId > 0) {
                    var n = a.getIndexByArray(g.questionList, i.gotoAnswerId, "id");
                    n > -1 ? m = n: console.info("跳转页面id设置不正确  进入下一页面")
                }
                if (d.config.content.isNextAnaswer) {
                    var o = d.html.find(".next-answer-btn");
                    o.data("pageIndex", l),
                    o.data("nextPageIndex", m),
                    o.data("answerAction", i.answerAction),
                    d.isEnableClick = !1
                } else setTimeout(function() {
                    d.nextAnswer(l, m, i.answerAction)
                },
                300)
            }
        },
        resetResultStyle: function(a, b) {
            var c = {};
            if (b == this.ANSWER_TYPE.image) {
                c = this.assets.imageStyle || {};
                var d = a.find(".img-question-box");
                d.css("background-image", "url(" + c + ")"),
                d.css("background-color", "")
            } else c = this.assets.answer || {},
            c.backgroundColor = c.backgroundColor ? c.backgroundColor: "",
            a.css("background-image", "url(" + c.backgroundImage + ")"),
            a.css("background-color", c.backgroundColor),
            c.font && void 0 != c.font.color ? a.css("color", c.font.color) : a.css("color", "#7e7e7e")
        },
        renderResultStyle: function(a, b, c) {
            var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !0,
            e = {},
            f = {};
            if (c == this.ANSWER_TYPE.image) {
                d ? e = b ? this.assets.imageRightStyle || {
                    backgroundImage: "",
                    backgroundColor: "rgba(66, 214, 118, 0.8)"
                }: this.assets.imageErrorStyle || {
                    backgroundImage: "",
                    backgroundColor: "rgba(255, 57, 64, 0.8)"
                }: f = this.assets.imageStyle || {};
                var g = a.find(".img-question-box");
                d ? (g.css("background-image", "url(" + e.backgroundImage + ")"), g.css("background-color", e.backgroundColor)) : (g.css("background-image", "url(" + f + ")"), g.css("background-color", ""))
            } else c == this.ANSWER_TYPE.wordfill || (d ? b ? (e = this.assets.answerRight || {},
            e && e.font || (e = this.assets.imageRightStyle || {})) : e = this.assets.answerError || {}: f = this.assets.answer || {},
            d ? (a.css("background-image", "url(" + e.backgroundImage + ")"), a.css("background-color", e.backgroundColor), e.font && a.css("color", e.font.color)) : (f.backgroundColor = f.backgroundColor ? f.backgroundColor: "", a.css("background-image", "url(" + f.backgroundImage + ")"), a.css("background-color", f.backgroundColor), f.font && void 0 != f.font.color ? a.css("color", f.font.color) : a.css("color", "#7e7e7e")))
        },
        nextAnswer: function(b, c, d) {
            console.log("====nextAnswer===");
            var e = this;
            if (b = parseInt(b, 10), 0 == b) {
                if (e.isUpdateCounted) return;
                e.isUpdateCounted = !0;
                var f = {
                    wsiteGuid: x,
                    activeGuid: e.config.content.guid,
                    wxOpenId: E.id,
                    fg: u.getFg()
                };
                f = u.appendChannelParams(f),
                a.showLoading(),
                r("v2/answerView/startAnswer", f).then(function(f) {
                    a.hideLoading(),
                    0 == f.result ? e.nextAnswerFun(b, c, d) : e.showErrorInfo(f.msg)
                },
                function(b) {
                    a.hideLoading(),
                    console.info(b),
                    winAlert("服务异常-" + b.status)
                })
            } else e.nextAnswerFun(b, c, d)
        },
        nextAnswerFun: function(b, c, d) {
            var e = this;
            c = void 0 === c ? b + 1 : c,
            d = d || 1;
            var f = e.activeData,
            g = b === f.questionList.length - 1,
            h = !1,
            i = e.getRandomAnswer();
            if (3 != f.questionType ? a.convertToBool(i.showLimitTime) && 2 == i.showLimitTimeType && (h = !0, e.resetDownTime()) : g = !1, !g && 1 == f.questionType && a.convertToBool(i.answerErrorEnd)) {
                var j = f.questionList[b];
                j.isRight || (g = !0)
            }
            g || 3 != f.questionType || 3 != d || (g = !0);
            var k = e.html.find(".audio-plugin-answer").get(0);
            if (k.paused || k.pause(), g) e.answerEnd();
            else {
                e.currentAnswerIndex = c;
                var l = e.html.find(".answer-index-" + b),
                m = e.html.find(".answer-index-" + c);
                z.hideOpacity(l, m),
                e.isEnableClick = !1,
                h && e.renderDownTime(),
                e.playCurrentQuestionMusic("play", c)
            }
            e.resetSysState(),
            e.rightCount = 0,
            e.rightIds = [],
            e.html.find(".next-answer-btn").data("pageIndex", null)
        },
        doConsumeMyPoints: function(a, b, c) {
            var d = this;
            u.consumeMyPoints({
                activeGuid: a
            },
            function(a) {
                0 == a.result ? d.onceConsumePoints = 1 : 70001 == a.result ? showMyPointsDialog(u, a.data.myPoints, d.baseColor) : d.showErrorInfo(a.msg)
            })
        }
    };
    var G = {};
    return Array.prototype.shuffle || (Array.prototype.shuffle = function() {
        for (var a, b, c = this.length; c; a = parseInt(Math.random() * c), b = this[--c], this[c] = this[a], this[a] = b);
        return this
    }),
    {
        _instances: {},
        _instanceKey: function(a) {
            return "instance_" + a
        },
        _get: function(a) {
            var c = this._instanceKey(a);
            if (this._instances[c]) return this._instances[c];
            var d = new b;
            return this._instances[c] = d,
            d
        },
        preload: function(a, b) {},
        init: function(a, b, c, d, e) {
            u = c,
            v = c.isEditing(),
            w = c.getPluginDomain(a.content.token, a.content.version),
            v || (x = u.getWsiteGuid());
            var f = this._get(a.id);
            f.config = a,
            f.pageId = d,
            f.wrapper = b,
            s(function() {
                f.init()
            })
        },
        load: function(a, b) {
            var c = this._get(b.id);
            c.config = b,
            c.pageId = a,
            u.stopFlip(),
            s(function() {
                u.getCanFocusByWay(c.config.content.focusWay) && c.config.content.isFocusWx && c.config.content.wxQr && c.addFocusUser(E.id),
                c.load()
            })
        },
        leave: function(a, b, c) {
            if (a != c.getCurrentPageId()) {
                var d = this._get(b.id);
                d.resetDownTime(),
                u.resetFlip(),
                $(".show-allpage-report").show(),
                d.hideEndPage()
            }
        }
    }
});