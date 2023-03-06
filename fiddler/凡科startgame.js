!
function(e) {
    var i, o, t, n, r, c, a = {
        checkUnPubJoinLimit: function() {
            return e.Res.load("js_checkUnPubJoinLimit").then(function() {
                return e.checkUnPubJoinLimit({
                    isOutofJoinNum: g_config.$$isOutofJoinNum,
                    status: g_config.status,
                    modId: g_config.modId,
                    style: g_config.style
                })
            })
        },
        checkAreaLimit: function() {
            return g_config.isOpenAreaLimit ? (e.tlog("ipInfo:", g_config.ipInfo), g_config.$$isOpenGameVer2 ? e.checkAreaLimitByWx(g_config.ipInfo, g_config.areaLimitList, "", n) : e.Res.load("js_areaLimit").then(function() {
                return e.checkAreaLimitByWx(g_config.ipInfo, g_config.areaLimitList, "", n)
            })) : $.Deferred("resolve")
        },
        checkPrizeMsg: function() {
            return 3 == g_config.gameType && g_config.isOpenPrizeMsg && !g_config.$$isCheckPrizeMsg ? e.Res.loadg("wxMsgFunc").then(function() {
                return g_config.$$isCheckPrizeMsg = !0,
                WxMsgFunc.openWxMessage({
                    msg: "主办方派奖后是否同意接收消息通知？"
                })
            }) : $.Deferred("resolve")
        },
        checkGameState: function() {
            return $.Deferred(function(t) {
                return g_config.isPaymentGame || g_config.$$isNewVoteGame || 1 != g_config.status && 3 != g_config.status ? hg.fireWith("startGamehead", o, [i, r]) ? t.resolve() : t.reject() : (e.statusMsg(g_config.status), hg.sound.allowPlay = !1, hg.sound.pauseAll(), t.reject())
            })
        },
        checkJoinNum: function() {
            var i;
            function o() {
                i = "本活动参与人数已达到最大限制。如有疑问，请与主办方联系。",
                1 == g_config.gameType || 49 == g_config.style || g_config.$$isNewVoteGame ? g_config.createTime > 1520265601e3 && !g_config.$$isNewVoteGame || (i = "本活动报名人数已达到最大限制。如有疑问，请与主办方联系。") : 71 == g_config.style ? i = "本活动建团数量已达到最大限制。如有疑问，请与主办方联系。": 108 == g_config.style && (i = "本活动购买人数已达到最大限制。如有疑问，请与主办方联系。"),
                e.statusMsg(i)
            }
            return e.tlog("startBtnAjax :", "checkJoinNum"),
            $.Deferred(function(i) {
                return - 1 !== [71, 113].indexOf(g_config.style) && r || -1 === [71, 113].indexOf(g_config.style) ? g_config.$isLimitJoinNum ? (o(), i.reject()) : void 0 === g_config.$isLimitJoinNum ? e.getIsOutofJoinNumFlag().then(function(t) {
                    null == t ? (i.reject(), e.tlog("nullMsg", "检查参与人数限制返回null")) : (g_config.$isLimitJoinNum = t.isOutofJoinNum, t.isOutofJoinNum ? (o(), i.reject()) : i.resolve())
                }).fail(function() {
                    hg.fire("luckDrawErr"),
                    i.reject()
                }) : i.resolve() : i.resolve()
            })
        },
        checkLuckDrawAndBlack: function() {
            return $.Deferred(function(i) {
                if (2 == g_config.drawType && -1 == [67, 71, 77].indexOf(g_config.style) && !g_config.openAccessKeyOnce) {
                    if (g_config.isOpenCreditJoin || 0 != g_config.joinLimit && (g_config.isOpenInternalCreditJoin || g_config.isOpenBigCustomerCreditJoin)) return i.resolve();
                    if (g_config.isLimitDraw && totalCount >= drawTotalLimit) return e.statusMsg(8),
                    i.reject();
                    if (count >= g_config.drawTimesLimit) return e.statusMsg(7),
                    i.reject()
                }
                return g_config.$$isBlack ? (e.statusMsg("你有疑似作弊行为，已被列入黑名单", ""), i.reject()) : i.resolve()
            })
        },
        checkForcedAttention: function() {
            return g_config.openStrongAttention ? e.Res.loadg("fansExclusive").then(function() {
                return e.showForcedAttPoup({
                    type: 1
                })
            }) : $.Deferred("resolve")
        },
        checkAccessKeyOnce: function() {
            return g_config.openAccessKeyOnce ? e.checkAccessKeyLuckyDrawTotal() : $.Deferred("resolve")
        },
        checkMemberCredit: function() {
            return g_config.isOpenCreditJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerCreditJoin ? e.checkMemberCredit() : $.Deferred("resolve")
        },
        checkJoinAccess: function() {
            return g_config.isOpenJoinAccess || 1 == g_config.joinLimit && g_config.isOpenCusJoinAccess ? e.checkJoinAccess() : $.Deferred("resolve")
        },
        checkMemberLevel: function() {
            return g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel() : $.Deferred("resolve")
        },
        checkMallLogin: function() {
            return e.checkMallLogin()
        },
        checkMallJoinLimit: function() {
            return g_config.$$isInternalJoin ? e.checkMallJoinLimit() : $.Deferred("resolve")
        },
        beforeStartGame: function() {
            return $.Deferred(function(n) {
                var c = g_config.style;
                if (!g_config.$$isNewVoteGame && 113 != c && g_config.afterLinkModify && e.shouldRegInfo(2, t, o)) return n.reject();
                var a = g_config.gameType;
                if (71 != c && !g_config.openAccessKeyOnce) {
                    if (g_config.isOpenCreditJoin || 0 != g_config.joinLimit && (g_config.isOpenInternalCreditJoin || g_config.isOpenBigCustomerCreditJoin)) return n.resolve();
                    if ((3 == a || e.isGameNoaward(c, a)) && g_config.isCheckPlayTimes && PlayInfo.getTotalRemainTimes() <= 0) return e.statusMsg(8),
                    n.reject();
                    if ((3 == a || e.isGameNoaward(c, a) || -1 !== [119].indexOf(g_config.style)) && !g_config.isSkipPlayTime && g_config.isCheckPlayTimes && PlayInfo.getTodayRemainTimes() <= 0) return e.statusMsg(7),
                    n.reject()
                }
                return hg.fireWith("beforeStartGame", o, [!1, i, r]) ? n.resolve() : n.reject()
            })
        },
        showGame: function() { [71, 106, 113].indexOf(g_config.style) > -1 || (119 != g_config.style && ($(".homeBtnBox").hide(), $(".home,#ruleImg").hide(), $(".gameBox").show()), void 0 === hg.sound.cache[0] || void 0 === hg.sound.cache[0].playing || hg.sound.cache[0].playing || 48 == g_config.style || 49 == g_config.style || 69 == g_config.style || hg.sound.readyPlay(0, 0, "loop"))
        },
        complete: function(t) {
            e.hideLoadToast(),
            e.otherAjaxComplete(),
            g_config.$$isCheckPrizeMsg = !1,
            c && c.call(o, t, i, r, a.showGame)
        },
        handleResult: function() {
            var t, n = g_config.style;
            console.log("handleResult---"),
            hg.showGameBox && a.showGame(),
            console.log("showGameBox: " + hg.showGameBox),
            g_config.freeFirstPublish && e.logDog(1000240, g_config.aid % 2 + 3),
            e.logDog(1000002, n),
            e.LogFaiOpenId(1000230, 0),
            g_config.realVer >= HdVerDef.ZS ? e.logDog(1000179, g_config.realVer + 1) : e.logDog(1000179, g_config.authVer + 1),
            e.logObjDog(1000092, 1, g_config.gameId),
            _fromHdportalM && e.logDog(1000425, 2),
            49 != n && 69 != n && e.addJoinGameBehavior(),
            t = {
                domain: g_config.$$reqHostName,
                expires: 1,
                path: "/"
            },
            $.cookie("gps_province", e.encodeUrl(g_config.ipInfo.provice), t),
            $.cookie("gps_city", e.encodeUrl(g_config.ipInfo.city), t),
            $.cookie("gps_district", e.encodeUrl(g_config.ipInfo.district), t),
            a.complete(!0),
            hg.fireWith("startGame", o, [!1, i, r, a.showGame])
        },
        handleFail: function() {
            a.complete(!1)
        }
    };
    window.startBtnAjax = function(g, s, f) {
        if (i = g, r = s, c = f, o = this, t = arguments, n = !0, e.tlog("startBtnAjax：", "调用了"), $buryPoint.participateActivity(), g_config.iframeNeedJump) return e.showMsgToast2({
            bodyMsg: "即将跳转去互动活动进行抽奖，跳转后将无法返回微传单",
            isTwoFootBtn: !0,
            primaryBtnText: "确认",
            defaultBtnText: "取消",
            primaryBtnFn: function() {
                parent.parent.window.postMessage({
                    eventType: "redirectToHd",
                    url: e.removeUrlArg(window.location.href, "fromFlyerIframe")
                },
                "*")
            }
        });
        e.Res.load("js_activateSound").then(function() {
            e.activateSound()
        }),
        e.ajaxLoad.show(),
        $.Deferred("resolve")
				.then(a.checkUnPubJoinLimit)
				.then(a.checkAreaLimit)
				.then(a.checkGameState)
				.then(a.checkJoinNum)
				.then(a.checkLuckDrawAndBlack)
				.then(a.checkForcedAttention)
				.then(a.checkAccessKeyOnce)
				.then(a.checkPrizeMsg)
				.then(a.checkJoinAccess)
				.then(a.checkMemberLevel)
				.then(a.checkMemberCredit)
				.then(a.checkMallLogin)
				.then(a.checkMallJoinLimit)
				.then(a.beforeStartGame)
			.then(a.handleResult).fail(a.handleFail)
    }
} (HdGame),
window.drawStatusLuckDraw = !0,
function(e) {
    var i, o, t, n;
    function r() {
        return e.Res.load("js_checkUnPubJoinLimit").then(function() {
            return e.checkUnPubJoinLimit({
                isOutofJoinNum: g_config.$$isOutofJoinNum,
                status: g_config.status,
                modId: g_config.modId,
                style: g_config.style
            })
        })
    }
    function c() {
        return e.tlog("checkAreaLimit"),
        g_config.isOpenAreaLimit ? g_config.$$isOpenGameVer2 ? e.checkAreaLimitByWx(g_config.ipInfo, g_config.areaLimitList) : e.Res.load("js_areaLimit").then(function() {
            return e.checkAreaLimitByWx(g_config.ipInfo, g_config.areaLimitList)
        }) : $.Deferred("resolve")
    }
    function a() {
        return 3 == g_config.gameType && g_config.isOpenPrizeMsg && !g_config.$$isCheckPrizeMsg ? e.Res.loadg("wxMsgFunc").then(function() {
            return g_config.$$isCheckPrizeMsg = !0,
            WxMsgFunc.openWxMessage({
                msg: "主办方派奖后是否同意接收消息通知？"
            })
        }) : $.Deferred("resolve")
    }
    function g() {
        return e.tlog("checkAccessKeyOnce"),
        g_config.openAccessKeyOnce ? e.checkAccessKeyLuckyDrawTotal() : $.Deferred("resolve")
    }
    function s() {
        return g_config.isOpenCreditJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerCreditJoin ? e.checkMemberCredit() : $.Deferred("resolve")
    }
    function f() {
        return g_config.$$isBigCustomer || g_config.$$isPartnerAcct ? $.Deferred("resolve") : g_config.isOpenJoinAccess || 1 == g_config.joinLimit && g_config.isOpenCusJoinAccess ? e.checkJoinAccess() : $.Deferred("resolve")
    }
    function u() {
        return g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel() : $.Deferred("resolve")
    }
    function l() {
        return e.checkMallLogin()
    }
    function d() {
        return g_config.$$isInternalJoin ? e.checkMallJoinLimit() : $.Deferred("resolve")
    }
    function m() {
        return e.tlog("beforeDraw"),
        !1 === hg.fireWith("beforeDraw", i, [o]) ? $.Deferred("reject") : $.Deferred("resolve")
    }
    function h() {
        e.tlog("getResult");
        var i = {
            gameId: g_config.gameId,
            style: g_config.style,
            userName: g_config.userName,
            isPub: $.trim(g_config.$$isPub),
            headImg: g_config.headImg,
            ip: g_config.$$ip,
            provice_gps: void 0 !== g_config.ipInfo.provice ? g_config.ipInfo.provice: "",
            city_gps: void 0 !== g_config.ipInfo.city ? g_config.ipInfo.city: "",
            district_gps: void 0 !== g_config.ipInfo.district ? g_config.ipInfo.district: "",
            extra: g_config.extra
        };
        g_config.isDoubleGame && (i.openIdB = e.otherOpenId),
        g_config.$$otherplayer && (i.fromPlayer = g_config.$$otherplayer);
        var o = e.jointUrlArg(g_config.apiAjaxUrl + "result", e.jointParams({
            aid: g_config.aid,
            openId: g_config.openId,
            achieveToken: g_config.achieveToken || (g_config.lastSetAchivelResult ? g_config.lastSetAchivelResult.achieveToken: ""),
            playerOrigin: g_config.playerOrigin
        }));
        return $.extend(i, t),
        $.ajax({
            type: "POST",
            url: o,
            data: i,
            dataType: "json"
        })
    }
    function _(o) {
        e.tlog("complete"),
        e.hideLoadToast(),
        e.otherAjaxComplete(),
        g_config.$$isCheckPrizeMsg = !1,
        drawStatusLuckDraw = !0,
        clearTimeout(e.lotTimer),
        hg.fireWith("afterDraw", i, [o])
    }
    function w(i) {
        if (console.log("handle--"), e.tlog("luckDraw: ", i), _(i), i.playerId && (g_config.playerId = i.playerId), 4 != gameType && i.rt >= 0 && 50 != g_config.style && (g_config.playerChance--, g_config.hasCheckMemberLevel = !1), i.success) g_config.haveAward = !0,
        $buryPoint.winPrize(i.awardIndex, !1),
        $("#resule-gift-box").attr("_level", i.awardIndex),
        $(".resule-status-send").html("查看我的奖品");
        else if (60 === i.rt || 28 === i.rt) $(".resule-status-box").hide();
        else {
            if (3 !== i.rt) {
                if (27 === i.rt && "getGameResult" === i.op) $(".resuleBox").hide(),
                e.showLotsWait(5,
                function() {
                    $(".resuleBox").show(),
                    y(n, t)
                });
                else if (1 === i.rt) {
                    count = g_config.drawTimesLimit;
                    $(".dayDrawCount").text(0),
                    e.statusMsg(4),
                    g_config.showHelpGuide || $("#resule-gift-box").hide(),
                    home("luckDraw")
                } else 13 === i.rt ? (e.statusMsg(6), count = g_config.drawTimesLimit, totalCount = drawTotalLimit, $(".dayDrawCount").text(0), $(".totalDrawCount").text(0), $("#resule-gift-box").hide(), home("luckDraw")) : 2 === i.rt ? e.statusMsg("本活动参与人数已达到最大限制。如有疑问，请与主办方联系。") : -3 === i.rt || 23 === i.rt || 46 === i.rt ? (46 === i.rt && (g_config.$$resultForLinkInfoIsEmpty = !0), e.statusMsg(i.msg || "系统繁忙，请稍后重试！")) : (e.showMsg(i.msg || "系统繁忙，请稍后重试！", 0, "关闭",
                function() {
                    66 == g_config.style && (window.location.href = e.removeUrlArg(document.URL, "state", "code"))
                },
                !0), home("luckDraw"));
                return
            }
            $(".resule-status-box").show()
        }
        if (4 != gameType) if (console.log(gameType), count++, e.tlog("wyyyyytttttestfkttt count2=", count), $(".dayDrawCount").text(g_config.drawTimesLimit - count < 0 ? 0 : g_config.drawTimesLimit - count), totalCount++, $(".totalDrawCount").text(drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount), g_config.drawTimesLimit - count <= 0 && (2 == helpType && g_config.showHelpGuide || 3 == helpType && 0 != remainHelpNum)) if (g_config.isLimitDraw) {
            if ($(".totalDraw").text("点击获取抽奖机会>>"), $(".totalDraw").on("click", getMoreTimes), $(".dayDraw").hide(), g_config.drawTimesLimit - count < drawTotalLimit - totalCount) {
                $(".dayDraw4Total").text("今天抽奖机会已用完，点击获取更多抽奖机会").parent().addClass("flex-direction_column"),
                $(".dayDraw4Total").on("click", getMoreTimes),
                $(".totalDraw").off("click"),
                "drawInfo" == $(".dayDraw4Total").parent().attr("id") && $(".dayDraw4Total").css("margin-left", "-2.5rem");
                var o = drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount;
                $(".totalDraw").html('总抽奖机会剩 <span class="totalDrawCount specil">' + o + "</span> 次")
            }
        } else $(".totalDraw").hide(),
        $(".dayDraw").text("点击获取抽奖机会>>"),
        $(".dayDraw").on("click", getMoreTimes);
        else $(".dayDraw").off("click"),
        $(".totalDraw").off("click"),
        $(".dayDraw4Total").off("click");
        var r = {
            isSuc: i.success,
            giftStyle: i.awardStyle,
            giftName: i.awardName,
            giftCode: i.awardCode,
            awardTypeNum: i.awardTypeNum,
            giftImage: i.awardImage,
            awardImageW: i.awardImageW,
            awardImageH: i.awardImageH,
            awardIndex: i.awardIndex,
            awardCode: i.awardCode,
            codeStatus: i.codeStatus,
            isOutAwardNum: 3 === i.rt
        };
        "function" === e.getType(n) ? n(r, i) : e.resulePoup.showGift(r)
    }
    function p() {
        _({
            success: !1,
            rt: -999,
            msg: "系统繁忙，请稍后重试！"
        })
    }
    function y(_, y) {
        if (g_config.iframeNeedJump) return e.showMsgToast2({
            bodyMsg: "即将跳转去互动活动进行抽奖，跳转后将无法返回微传单",
            isTwoFootBtn: !0,
            primaryBtnText: "确认",
            defaultBtnText: "取消",
            primaryBtnFn: function() {
                parent.parent.window.postMessage({
                    eventType: "redirectToHd",
                    url: e.removeUrlArg(window.location.href, "fromFlyerIframe")
                },
                "*")
            }
        });
        if (!_manage) {
            if (!drawStatusLuckDraw) return;
            n = _,
            t = y,
            i = this,
            o = arguments,
            e.showLoadToast("数据加载中"),
            drawStatusLuckDraw = !1,
            $(".ajaxLoadBg").show(),
            $(".ajaxLoadBar").addClass("ajaxLoad"),
            $.Deferred("resolve").then(r).then(c).then(g).then(a).then(f).then(u).then(s).then(l).then(d).then(m).then(h).then(w).fail(p)
        }
    }
    window.luckDraw = y
} (HdGame),
function(e) {
    window.luckDrawZhuliNew = function(i, o, t) {
        if (drawStatusLuckDraw && !_manage) {
            e.showLoadToast("数据加载中"),
            drawStatusLuckDraw = !1,
            $(".ajaxLoadBg").show(),
            $(".ajaxLoadBar").addClass("ajaxLoad");
            var n = {
                gameId: g_config.gameId,
                zlid: -1 !== [60, 61, 62, 106].indexOf(g_config.style) ? zlid: g_config.$$zlidNew,
                province_gps: void 0 !== g_config.ipInfo.provice ? g_config.ipInfo.provice: "",
                city_gps: void 0 !== g_config.ipInfo.city ? g_config.ipInfo.city: "",
                district_gps: void 0 !== g_config.ipInfo.district ? g_config.ipInfo.district: ""
            };
            $.extend(n, o);
            var r = $.extend({
                ajaxName: "getResult"
            },
            t);
            $.ajax({
                type: "post",
                url: g_config.ajaxUrl + "hdzhuli_h.jsp?cmd=" + r.ajaxName + "&aid=" + g_config.aid + "&openId=" + g_config.openId,
                data: n,
                error: function(i, o) {
                    m_debug && alert("服务繁忙，请稍候重试"),
                    e.hideLoadToast(),
                    e.otherAjaxComplete(),
                    drawStatusLuckDraw = !0,
                    hg.fire("luckDrawErr")
                },
                success: function(o) {
                    e.hideLoadToast(),
                    e.tlog("luckDrawZhuliNew", o),
                    e.otherAjaxComplete(),
                    drawStatusLuckDraw = !0;
                    var t = $.parseJSON(o);
                    if (setNoLiheWxShare && setNoLiheWxShare(), t.rt >= 0 && (g_config.playerChance--, g_config.hasCheckMemberLevel = !1), t.success) g_config.haveAward = !0,
                    $buryPoint.winPrize(t.awardIndex, !1);
                    else if (60 === t.rt || 28 === t.rt) $(".resule-status-box").hide();
                    else {
                        if (3 !== t.rt) return void(8 === t.rt || 23 === t.rt || 35 === t.rt || 46 === t.rt ? (console.log("here444"), e.statusMsg(t.msg)) : e.showMsg("系统繁忙，请稍后重试", 0, "关闭",
                        function() {},
                        !0));
                        $(".resule-status-box").show()
                    }
                    var n = {
                        isSuc: t.success,
                        giftStyle: t.awardStyle,
                        giftName: t.awardName,
                        giftCode: t.awardCode,
                        giftImage: t.awardImage,
                        awardImageW: t.awardImageW,
                        awardImageH: t.awardImageH,
                        awardIndex: t.awardIndex,
                        codeStatus: t.codeStatus,
                        isOutAwardNum: 3 === t.rt
                    };
                    "function" === e.getType(i) ? i(n, t) : e.resulePoup.show(n)
                }
            })
        }
    }
} (HdGame);