!
function(e, t) {
    var i = g_config.aid,
    a = g_config.style; (1 == g_config.drawType || [47, 88, 98, 111, 119, 121, 122, 125, 129].indexOf(a) > -1) && (window.gameOver = function(o, r, n, s) {
        if (!_manage) {
            var g = function() {
                t.ajax({
                    type: "post",
                    url: g_config.$$apiAjaxUrl + "playerJoinGame/setAchieve?aid=" + i + "&playerId=" + g_config.playerId + "&gameScore=" + o + "&playerOrigin=" + g_config.playerOrigin,
                    data: w,
                    error: function() {
                        e.hideLoadToast(),
                        e.otherAjaxComplete(),
                        t("#timeUpImg,.timeUpImg").removeClass("tada");
                        var i = {
                            rt: -999,
                            msg: "网络异常，请重新刷新页面进入活动"
                        };
                        window.navigator.onLine || (i.msg = "网络连接失败，请检查你的网络设置!"),
                        r ? r(i, i) && alert(i.msg) : alert(i.msg)
                    },
                    success: function(i) {
                        if (hg.fire("upDateJoinNum"), e.hideLoadToast(), e.tlog("gameOver", i), 69 == a) var o = i;
                        else o = t.parseJSON(i);
                        var n = !0;
                        if (s || e.otherAjaxComplete(), 0 == o.rt) {
                            var g = {
                                isSuc: o.isSuc,
                                gameScore: d,
                                minScore: o.drawLimit,
                                bestScore: parseInt(o.score),
                                gameType: gameType,
                                rank: o.rank,
                                beat: o.beat,
                                count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                                isLimitDrawTotal: isLimitDraw,
                                totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount,
                                isEqualDraw: drawTimesLimit == drawTotalLimit,
                                gameCostTime: g_config._consumption,
                                bestCostTime: o.bestCostTime
                            };
                            if (e.tlog("wyyyyytttttestfkttt drawTimesLimit=", drawTimesLimit), e.tlog("wyyyyytttttestfkttt count1=", count), 69 == a && e.logDog(1000427, 3), setTimeout((function() {
                                var i = {
                                    rt: o.rt,
                                    msg: o.msg,
                                    arg: g,
                                    pId: o.playerId,
                                    firstScore: o.firstScore
                                };
                                o.playerId && (g_config.playerId = o.playerId),
                                [34, 49, 69].indexOf(a) > -1 && (i.infoList = o.infoList),
                                r && (n = r(i, o)),
                                t("#timeUpImg,.timeUpImg").removeClass("tada"),
                                !1 !== n && (g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(g) : e.resulePoup.show(g))
                            }), 300), ![119, 126].includes(a) && PlayInfo.addPlayTimes(1), g_config.achieveToken = o.achieveToken, -1 == [0, 4, 11].indexOf(gameType) && (g_config.playerChance--, g_config.hasCheckMemberLevel = !1), -1 != [1, 3, 6].indexOf(gameType) && g_config.openCreditJoin4Credit) {
                                e.tlog("@IntegralMall", "achieve - 扣机会");
                                var m = g_config.openCreditJoin4Credit && g_config.openFreeJoinPerDay4Credits && -1 == [1, 4].indexOf(g_config.gameType);
                                g_config.freeJoinPerDayLimitC - g_config.freePlayTimesTodayC > 0 && m ? (g_config.freePlayTimesTodayC++, PlayInfo.playWithIntegralFree(g_config.freePlayTimesTodayC), e.tlog("@IntegralMall", "achieve - 扣机会-扣免费机会-今日已用: " + g_config.freePlayTimesTodayC)) : (g_config.playerChance4Credits--, e.tlog("@IntegralMall", "achieve - 扣机会-扣换取的机会-还剩: " + g_config.playerChance4Credits))
                            }
                            var c = !g_config.$$openRepeatDraw && PlayInfo.getPlayTimesLimitShow() < g_config.drawTimesLimit;
                            c && 0 == PlayInfo.getTodayRemainTimes() ? (t(".resule-gift-draw.repeatDraw2").show(), t(".resule-gift-draw.repeatDraw2").addClass("repeatDraw"), t(".resule-gift-draw.repeatDraw2").css({
                                background: "rgb(229, 173, 100)"
                            }), t(".resule-gift-home.menuBack.menuBack2").parent().css({
                                "justify-content": "space-between"
                            }), t(".menuBack.afterDrawBackHome").css({
                                width: "4.75rem"
                            })) : c && 0 != PlayInfo.getTodayRemainTimes() && (t(".resule-gift-draw.repeatDraw2").hide(), t(".resule-gift-home.menuBack.menuBack2").parent().css({
                                "justify-content": "center"
                            }), t(".menuBack.afterDrawBackHome").css({
                                width: "10rem"
                            }))
                        } else if (11 == o.rt) e.showMsg("已被检测到有作弊行为，再次被检测将永久禁止参与本活动！", 500, "确定");
                        else if (12 == o.rt) e.showMsg("由于作弊行为，该微信号已永久禁止参与本活动！", 500, "确定");
                        else if (48 == o.rt) e.showMsg("已检测到作弊行为，当前无法获取成绩！", 500, "确定");
                        else if (23 == o.rt) e.statusMsg(3);
                        else if (44 == o.rt) e.statusMsg(8);
                        else if (52 == o.rt) e.statusMsg("出现错误，请重新刷新页面进入活动", 500, 0, "确定", (function() {
                            window.location.reload()
                        }));
                        else if (2 == o.rt) e.statusMsg("本活动参与人数已达到最大限制。如有疑问，请与主办方联系", 500, 0, "确定");
                        else if (251 == o.rt) e.statusMsg("录入成绩失败，当前成绩出现异常，请重新参与", 500, 0, "确定");
                        else {
                            if (136 != o.rt) {
                                if (r && (n = r({
                                    rt: o.rt,
                                    msg: o.msg
                                },
                                o)), !1 !== n) {
                                    var l = {
                                        isSuc: !1,
                                        gameScore: "--",
                                        minScore: o.drawLimit,
                                        bestScore: "--",
                                        gameType: gameType,
                                        rank: "--",
                                        beat: "--",
                                        count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                                        isLimitDrawTotal: isLimitDraw,
                                        totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount,
                                        isEqualDraw: drawTimesLimit == drawTotalLimit
                                    };
                                    g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(l) : e.resulePoup.show(l)
                                }
                                return
                            }
                            e.statusMsg("没有参与机会，请刷新重试", 500, 0, "确定", (function() {
                                window.location.reload()
                            }))
                        }
                        0 !== o.rt && r && r({
                            rt: o.rt,
                            msg: o.msg
                        },
                        o)
                    }
                })
            },
            m = function() {
	    var first=89
					
					try{
					/*		alert("卡着，别点确定，等前3秒结束点确定")
						$.ajax({
												type: "post",
												url: 'https://29884238-55.hd.webportal.top/api/rank/getRankList?aid=29884238&gameId=55&style=85&openId=osi4vwizI8LUSMtd0ZOdW9E8RJvU&start=0&limit=99&playerId=0&canal=-1&playerOrigin=3&uid=&extra=&aid=29884238&gameId=55&_openId=osi4vwizI8LUSMtd0ZOdW9E8RJvU',
													async :false,
												error: function() {
												   // HdGame.poupAjaxComplete(k)
												},
												success: function(r) {
														 var s = $.parseJSON(r);
														 
														var p = s.rankList;
														var t = s.rank;
														//alert(r)
														first=parseFloat(p[0].bestCostTime)//-----------
														var num=parseInt(20*Math.random())/100
															var newNum =num.toFixed(2);
														
												}
			 })
		*/
	//		 
	//   var p= 30+parseInt(10*Math.random())/1000;
	//  p=p.toFixed(2),g_config.consumption = e.encodeBase64('"' + p + '"'), g_config._consumption = p,u.consumption = g_config.consumption + g_config.playerToken;
            //   alert(w.consumption);
				
			   } catch (e) { alert(e.name + ": " + e.message); }
                w.newUserInfo = w.info,
                w.forTest = g_config.isDebug,
                w.playerId = g_config.playerId,
                delete w.info,
                void 0 !== g_config.uid && (w.uid = g_config.uid),
                !w.fromPlayer && _otherplayer && (w.fromPlayer = _otherplayer),
                w.fromPlayer && (w.fromPlayerOpenId = w.fromPlayer),
                t.ajax({
                    type: "post",
                    url: g_config.$$apiAjaxUrl + "playerJoinGame/achieve?aid=" + i + "&playerId=" + g_config.playerId + (129 == g_config.style ? "": "&gameScore=" + o) + "&playerOrigin=" + g_config.playerOrigin,
                    data: JSON.stringify(w),
                    contentType: "application/json;charset=utf-8",
                    error: function() {
                        e.hideLoadToast(),
                        e.otherAjaxComplete(),
                        t("#timeUpImg,.timeUpImg").removeClass("tada");
                        var i = {
                            rt: -999,
                            msg: "网络异常，请重新刷新页面进入活动"
                        };
                        window.navigator.onLine || (i.msg = "网络连接失败，请检查你的网络设置!"),
                        r ? r(i, i) && alert(i.msg) : alert(i.msg)
                    },
                    success: function(i) {
                        hg.fire("upDateJoinNum"),
                        e.hideLoadToast(),
                        e.tlog("gameOver", i);
                        var o = i.data,
                        n = !0;
                        if (s || e.otherAjaxComplete(), 0 == i.rt && [129].includes(g_config.style)) {
                            var g = JSON.parse(i.data.score);
                            g.ocrSuccess && g.allWords || (i.rt = 999)
                        }
                        if (0 == i.rt) {
                            var m = {
                                isSuc: o.isSuc,
                                gameScore: d,
                                minScore: o.drawLimit,
                                bestScore: o.score,
                                gameType: gameType,
                                rank: o.rank,
                                beat: o.beat,
                                count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                                isLimitDrawTotal: isLimitDraw,
                                totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount,
                                isEqualDraw: drawTimesLimit == drawTotalLimit,
                                gameCostTime: g_config._consumption,
                                bestCostTime: o.bestCostTime
                            };
                            if (e.tlog("wyyyyytttttestfkttt drawTimesLimit=", drawTimesLimit), e.tlog("wyyyyytttttestfkttt count1=", count), 69 == a && e.logDog(1000427, 3), setTimeout((function() {
                                var s = {
                                    rt: i.rt,
                                    msg: i.msg,
                                    arg: m,
                                    pId: o.playerId,
                                    firstScore: o.firstScore
                                };
                                o.playerId && (g_config.playerId = o.playerId),
                                [34, 49, 69].indexOf(a) > -1 && (s.infoList = o.infoList || o.triathlonInfoList);
                                var g = !1;
                                r && (n = r(s, i, (function() {
                                    g = !0
                                }))),
                                g || (t("#timeUpImg,.timeUpImg").removeClass("tada"), !1 !== n && (g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(m) : e.resulePoup.show(m)))
                            }), 300), ![119, 126].includes(a) && PlayInfo.addPlayTimes(1), g_config.achieveToken = o.achieveToken, ( - 1 == [0, 4, 11].indexOf(gameType) || [129].includes(g_config.style)) && (g_config.playerChance--, g_config.hasCheckMemberLevel = !1), ( - 1 != [1, 3, 6].indexOf(gameType) || [129].includes(g_config.style)) && g_config.openCreditJoin4Credit) {
                                e.tlog("@IntegralMall", "achieve - 扣机会");
                                var c = g_config.openCreditJoin4Credit && g_config.openFreeJoinPerDay4Credits && -1 == [1, 4].indexOf(g_config.gameType);
                                g_config.freeJoinPerDayLimitC - g_config.freePlayTimesTodayC > 0 && c ? (g_config.freePlayTimesTodayC++, PlayInfo.playWithIntegralFree(g_config.freePlayTimesTodayC), e.tlog("@IntegralMall", "achieve - 扣机会-扣免费机会-今日已用: " + g_config.freePlayTimesTodayC)) : (g_config.playerChance4Credits--, e.tlog("@IntegralMall", "achieve - 扣机会-扣换取的机会-还剩: " + g_config.playerChance4Credits))
                            }
                            var l = !g_config.$$openRepeatDraw && PlayInfo.getPlayTimesLimitShow() < g_config.drawTimesLimit;
                            l && 0 == PlayInfo.getTodayRemainTimes() ? (t(".resule-gift-draw.repeatDraw2").show(), t(".resule-gift-draw.repeatDraw2").addClass("repeatDraw"), t(".resule-gift-draw.repeatDraw2").css({
                                background: "rgb(229, 173, 100)"
                            }), t(".resule-gift-home.menuBack.menuBack2").parent().css({
                                "justify-content": "space-between"
                            }), t(".menuBack.afterDrawBackHome").css({
                                width: "4.75rem"
                            })) : l && 0 != PlayInfo.getTodayRemainTimes() && (t(".resule-gift-draw.repeatDraw2").hide(), t(".resule-gift-home.menuBack.menuBack2").parent().css({
                                "justify-content": "center"
                            }), t(".menuBack.afterDrawBackHome").css({
                                width: "10rem"
                            }))
                        } else if ( - 1 == i.rt) e.showMsg(i.msg, 500, "确定");
                        else if (11 == i.rt) e.showMsg("已被检测到有作弊行为，再次被检测将永久禁止参与本活动！", 500, "确定");
                        else if (12 == i.rt) e.showMsg("由于作弊行为，该微信号已永久禁止参与本活动！", 500, "确定");
                        else if (48 == i.rt) e.showMsg("已检测到作弊行为，当前无法获取成绩！", 500, "确定");
                        else if (23 == i.rt) e.statusMsg(3);
                        else if (44 == i.rt) e.statusMsg(8);
                        else if (52 == i.rt) e.statusMsg("出现错误，请重新刷新页面进入活动", 500, 0, "确定", (function() {
                            window.location.reload()
                        }));
                        else if (2 == i.rt) e.statusMsg("本活动参与人数已达到最大限制。如有疑问，请与主办方联系", 500, 0, "确定");
                        else if (251 == i.rt) e.statusMsg("录入成绩失败，当前成绩出现异常，请重新参与", 500, 0, "确定");
                        else {
                            if (136 != i.rt) {
                                var f = !1;
                                if (r && (n = r({
                                    rt: i.rt,
                                    msg: i.msg
                                },
                                i, (function() {
                                    f = !0
                                }))), f) return;
                                if (!1 !== n) {
                                    var u = {
                                        isSuc: !1,
                                        gameScore: "--",
                                        minScore: o.drawLimit,
                                        bestScore: "--",
                                        gameType: gameType,
                                        rank: "--",
                                        beat: "--",
                                        count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                                        isLimitDrawTotal: isLimitDraw,
                                        totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount,
                                        isEqualDraw: drawTimesLimit == drawTotalLimit
                                    };
                                    g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(u) : e.resulePoup.show(u)
                                }
                                return
                            }
                            e.statusMsg("没有参与机会，请刷新重试", 500, 0, "确定", (function() {
                                window.location.reload()
                            }))
                        }
                        0 !== i.rt && r && r({
                            rt: i.rt,
                            msg: i.msg
                        },
                        i)
                    }
                })
            },
            c = function() {
                t.ajax({
                    type: "post",
                    url: g_config.apiAjaxUrl + "SetWork4MBTP/MBTPSignUpGame?aid=" + i + "&playerId=" + g_config.playerId + "&gameScore=" + o + "&playerOrigin=" + g_config.playerOrigin,
                    data: w,
                    contentType: "application/x-www-form-urlencoded;charset=utf-8",
                    error: function() {
                        e.hideLoadToast(),
                        e.otherAjaxComplete(),
                        t("#timeUpImg,.timeUpImg").removeClass("tada");
                        var i = {
                            rt: -999,
                            msg: "网络异常，请重新刷新页面进入活动"
                        };
                        window.navigator.onLine || (i.msg = "网络连接失败，请检查你的网络设置!"),
                        r ? r(i, i) && alert(i.msg) : alert(i.msg)
                    },
                    success: function(i) {
                        e.hideLoadToast(),
                        e.tlog("gameOver", i);
                        var o = i.data,
                        n = !0;
                        if (s || e.otherAjaxComplete(), 0 == i.rt) {
                            var g = {
                                isSuc: o.isSuc,
                                gameScore: d,
                                minScore: o.drawLimit,
                                bestScore: o.score,
                                gameType: gameType,
                                rank: o.rank,
                                beat: o.beat,
                                count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                                isLimitDrawTotal: isLimitDraw,
                                totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount,
                                isEqualDraw: drawTimesLimit == drawTotalLimit,
                                gameCostTime: g_config._consumption,
                                bestCostTime: o.bestCostTime
                            };
                            e.tlog("wyyyyytttttestfkttt drawTimesLimit=", drawTimesLimit),
                            e.tlog("wyyyyytttttestfkttt count1=", count),
                            69 == a && e.logDog(1000427, 3),
                            setTimeout((function() {
                                var s = {
                                    rt: i.rt,
                                    msg: i.msg,
                                    arg: g,
                                    pId: o.playerId,
                                    firstScore: o.firstScore
                                };
                                o.playerId && (g_config.playerId = o.playerId),
                                [34, 49, 69].indexOf(a) > -1 && (s.infoList = o.infoList),
                                r && (n = r(s, i)),
                                t("#timeUpImg,.timeUpImg").removeClass("tada"),
                                !1 !== n && (g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(g) : e.resulePoup.show(g))
                            }), 300),
                            119 != a && PlayInfo.addPlayTimes(1),
                            g_config.achieveToken = o.achieveToken,
                            -1 == [0, 4, 11].indexOf(gameType) && (g_config.playerChance--, g_config.hasCheckMemberLevel = !1)
                        } else if (11 == i.rt) e.showMsg("已被检测到有作弊行为，再次被检测将永久禁止参与本活动！", 500, "确定");
                        else if (12 == i.rt) e.showMsg("由于作弊行为，该微信号已永久禁止参与本活动！", 500, "确定");
                        else if (48 == i.rt) e.showMsg("已检测到作弊行为，当前无法获取成绩！", 500, "确定");
                        else if (23 == i.rt) e.statusMsg(3);
                        else if (44 == i.rt) e.statusMsg(8);
                        else if (52 == i.rt) e.statusMsg("出现错误，请重新刷新页面进入活动", 500, 0, "确定", (function() {
                            window.location.reload()
                        }));
                        else if (2 == i.rt) e.statusMsg("本活动参与人数已达到最大限制。如有疑问，请与主办方联系", 500, 0, "确定");
                        else {
                            if (251 != i.rt) {
                                if (r && (n = r({
                                    rt: i.rt,
                                    msg: i.msg
                                },
                                i)), !1 !== n) {
                                    var m = {
                                        isSuc: !1,
                                        gameScore: "--",
                                        minScore: o.drawLimit,
                                        bestScore: "--",
                                        gameType: gameType,
                                        rank: "--",
                                        beat: "--",
                                        count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                                        isLimitDrawTotal: isLimitDraw,
                                        totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount,
                                        isEqualDraw: drawTimesLimit == drawTotalLimit
                                    };
                                    g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(m) : e.resulePoup.show(m)
                                }
                                return
                            }
                            e.statusMsg("录入成绩失败，当前成绩出现异常，请重新参与", 500, 0, "确定")
                        }
                        0 !== i.rt && r && r({
                            rt: i.rt,
                            msg: i.msg
                        },
                        i)
                    }
                })
            },
            l = function(e) {
                var t = parseFloat(e);
                if (isNaN(t)) return alert("function:changeTwoDecimal arguments error"),
                e;
                var i = (t = Math.round(100 * e) / 100).toString(),
                a = i.indexOf(".");
                for (a < 0 && (a = i.length, i += "."); i.length <= a + 2;) i += "0";
                return i
            };
            if ("fail" === o) return void setTimeout((function() {
                var t = {
                    isSuc: !1,
                    gameScore: "fail",
                    minScore: _drawLimit,
                    bestScore: _bestRankInfo.score || "无",
                    gameType: gameType,
                    rank: _bestRankInfo.rank || 0,
                    count: drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                    isLimitDrawTotal: isLimitDraw,
                    totalCount: drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount
                };
                g_config.$$isOpenGameVer3 ? zgnpyVue.$refs.resultBox.showEvent(t) : (0 == g_config.gametype && -1 != [28, 39, 40, 100].indexOf(a) && PlayInfo.addPlayTimes(1), e.resulePoup.show(t))
            }), 900);
            if (o < 0 && (o = 0), [47, 98, 111].indexOf(a) > -1) {
                if (g_config.afterLinkModify && e.shouldRegInfo(2, arguments, this)) return
            } else {
                var f = 1;
                if (3 != gameType && 1 != gameType && 6 != gameType || (f = 3), 1 != gameType && e.shouldRegInfo(f, arguments, this)) return
            }
            t(".ajaxLoadBg").show(),
            t(".ajaxLoadBar").addClass("ajaxLoad"),
            e.showLoadToast("数据加载中");
            var d = o + ""; (g_config.$$isOpenGameVer2 ? g_config.timeScoreType: g_config.scoreType) && (d = l(o));
            var u = {
                headImg: g_config.headImg
            };
            g_config.awardUsername && (u.ausername = g_config.awardUsername),
            g_config.awardPhone && (u.aphone = g_config.awardPhone),
            g_config.awardAddress && (u.aadress = g_config.awardAddress),
            u.ip = g_config.$$ip;
            var p, w = {
                gameId: g_config.gameId,
                style: a,
                achieve: e.encodeBase64('"' + d + '"') + g_config.playerToken,
                openId: _openId,
                name: g_config.userName,
                awardInfoB: g_config.awardInfoB,
                province_gps: void 0 !== g_config.ipInfo.provice ? g_config.ipInfo.provice: "",
                city_gps: void 0 !== g_config.ipInfo.city ? g_config.ipInfo.city: "",
                district_gps: void 0 !== g_config.ipInfo.district ? g_config.ipInfo.district: "",
                playerId: g_config.playerId
            };
            e.tlog("userName", g_config.userName),
            g_config.isDoubleGame && (u.headImgB = e.otherHeadImg, w.openIdB = e.otherOpenId),
            w.info = t.toJSON(u),
            _otherplayer || (w.fromPlayer = _otherplayer),
            [42, 56, 80, 85].indexOf(a) > -1 && (9854246 == i || i % 2 == 0 ? new(window[decodeBase64("RnVuY3Rpb24=")])(decodeBase64(t(decodeBase64("I3RoZW1lR2FtZVRpbWVDb2RlSW1n"))[decodeBase64("YXR0cg==")](decodeBase64("X3NyYw=="))[decodeBase64("cmVwbGFjZQ==")](decodeBase64("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFg="), "")))() : (p = hg.time.gameCostTime.toFixed(2), 2 == gameTimeType && (p = (((new Date).getTime() - g_config.gameStartTime) / 1e3).toFixed(2)), g_config.consumption = e.encodeBase64('"' + p + '"'), g_config._consumption = p), w.consumption = g_config.consumption + g_config.playerToken),
            g_config.newQuestionGame && (w.score_Qt = t.toJSON(g_config.qtInfoParam.score_Qt)),
            _ruleInfo.open && (w._ruleInfo = t.toJSON(_ruleInfo)),
            g_config.extra && (w.extra = g_config.extra),
            t.extend(w, n),
            69 == a ? c() : g_config.isAidUseOldSetAchieve || g_config.allUseOldSetAchieve ? g() : g_config.isAidUseNewSetAchieve || g_config.allUseNewSetAchieve || i % 10 < g_config.proportionOfNewSetAchieve ? m() : g(),
            w = u = n = null
        }
    })
} (HdGame, jQuery);