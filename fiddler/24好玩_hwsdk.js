/*!
 * HWSDK.js v1.0.0
 * (c) 2022 24haowan 
 */
!
function() {
    "use strict";
    function e(e, t, i) {
        Object.defineProperty(e, t, {
            set: function(e) {
                e !== i[t] && (i[t] = e)
            },
            get: function() {
                return i[t]
            }
        })
    }
    function t(e, t) {
        Object.keys(e).forEach(t)
    }
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }
    function o(e) {
        return "function" == typeof e
    }
    function a(e) {
        e.prototype.wxsdk = {
            miniProgramGetEnv: function(e) {
                wx && wx.miniProgram ? wx.miniProgram.getEnv((function(t) {
                    t.miniprogram && e && e()
                })) : console.error("current env is not miniprogram")
            },
            miniProgramPostMessage: function(e) {
                wx && wx.miniProgram ? wx.miniProgram.postMessage({
                    data: e
                }) : console.error("current env is not miniprogram")
            },
            aliPayMiniProgramPostMessage: function(e) {
                my && my.postMessage ? my.postMessage({
                    data: e
                }) : console.error("current env is not alipay")
            },
            jdMiniProgramPostMessage: function(e) {
                jd && jd.miniProgram && jd.miniProgram.postMessage ? jd.miniProgram.postMessage({
                    data: e
                }) : console.error("current env is not jd app")
            },
            navigateTo: function(e) {
                if (wx && wx.miniProgram) {
                    console.log("wx.navigateTo: ", e);
                    try {
                        wx.miniProgram.navigateTo({
                            url: e,
                            complete: function(e) {
                                console.log("wx.miniProgram.navigateTo complete", e)
                            }
                        }),
                        wx.miniProgram.switchTab({
                            url: e,
                            complete: function(e) {
                                console.log("wx.miniProgram.switchTab complete", e)
                            }
                        })
                    } catch(e) {
                        console.error("wx.miniProgram.navigateTo,switchTab error", e)
                    }
                } else console.error("current env is not miniprogram")
            },
            addWxCard: function(e, t) {
                var i = {
                    code: "",
                    openid: "",
                    timestamp: e.timestamp,
                    signature: e.signature
                },
                o = [{
                    cardId: e.cardId,
                    cardExt: JSON.stringify(i)
                }];
                console.log("cardList", o),
                wx.addCard({
                    cardList: o,
                    success: function(e) {
                        console.log(JSON.stringify(e)),
                        t && t()
                    }
                })
            }
        }
    }
    function r(e) { !
        function(e) {
            var t = {
                configLoadingPage: function(e) {
                    if (views && views.loading) return e.hasOwnProperty("background") && (views.loading.background = e.background),
                    e.hasOwnProperty("banner") && (views.loading.banner = e.banner),
                    e.hasOwnProperty("showProgress") && (views.loading.showProgress = e.showProgress),
                    e.hasOwnProperty("progress") && (views.loading.progress = e.progress),
                    this
                },
                configStartPage: function(e) {
                    if (views && views.start) return e.hasOwnProperty("showBestScore") && (views.start.bestScoreTag = e.showBestScore),
                    e.hasOwnProperty("showMusicBtn") && (views.start.showMusicBtn = e.showMusicBtn),
                    e.hasOwnProperty("showBottomLink") && (views.start.showBottomLink = e.showBottomLink),
                    e.hasOwnProperty("background") && (views.start.background = e.background),
                    this
                },
                configEndPage: function(e) {
                    if (views && views.over) return e.hasOwnProperty("showBestScore") && (views.over.bestScoreTag = e.showBestScore),
                    e.hasOwnProperty("showMusicBtn") && (views.over.showMusicBtn = e.showMusicBtn),
                    e.hasOwnProperty("showBottomLink") && (views.over.showBottomLink = e.showBottomLink),
                    e.hasOwnProperty("background") && (views.over.background = e.background),
                    this
                }
            };
            i(e, t)
        } (e),
        function(e) {
            var t = {
                hideRotateMask: function() {
                    return "undefined" != typeof masks && (masks.rotate.show = !1),
                    this
                },
                showRotateMask: function() {
                    return "undefined" != typeof masks && (masks.rotate.show = !0),
                    this
                }
            },
            o = {
                showLoadingPage: function() {
                    return views.loading && (views.loading.show = !0),
                    this
                },
                hideLoadingPage: function() {
                    return views.loading && (views.loading.show = !1),
                    window.timeLog.isSend || -1 == userId || (window.timeLog.isSend = !0, new Date, window.timeLog.timeStart),
                    this
                }
            },
            a = {
                showStartPage: function() {
                    return views.start && (views.start.show = !0, sendEventTrack({
                        eventType: "page",
                        eventPage: "load"
                    }), setEventTrackTime("start")),
                    this
                },
                hideStartPage: function() {
                    return views.start && (views.start.show = !1),
                    this
                }
            },
            r = {
                showOverPage: function() {
                    return views.over && (views.over.show = !0, modals.consumePoint.clearJoinTimesRecord(), sendEventTrack({
                        eventType: "page",
                        eventPage: "game"
                    }), setEventTrackTime("over")),
                    $(document).trigger("overPageShown", {
                        game_score: this.getLastScore()
                    }),
                    this
                },
                hideOverPage: function() {
                    return views.over && (views.over.show = !1),
                    this
                }
            },
            n = {
                showPageBtn: function() {
                    var e = configJson.style.displayRuleIcon;
                    return (e = "boolean" == typeof e ? e: window.defaultConfigJson.style.displayRuleIcon) ? (pageBtn && (pageBtn.show = !0), this) : this
                },
                hidePageBtn: function() {
                    return pageBtn && (pageBtn.show = !1),
                    this
                },
                showModal: function(e, t, i) {
                    modals[e] && (modals[e][t] = i)
                },
                showDialog: function(e) {
                    modals.dialog.showConfirm(e)
                },
                showBox: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    },
                    t
                } ((function() {
                    return views.over && views.over.show && 2 == game_type && this.thirdLoginHelper.match("after") && this.thirdLoginHelper.check(),
                    showBox(),
                    this
                }))
            };
            i(e, t),
            i(e, o),
            i(e, a),
            i(e, r),
            i(e, n)
        } (e)
    }
    var n, s = [],
    c = null,
    d = -1 === [1, 3, 4, 6, 9].indexOf(Number(game_type));
    function l(e) {
        var t = !0,
        i = "touchstart" == e.type ? "tap": "move",
        o = (new Date).getTime();
        if (c ? ("move" == i && o - c < 100 && (t = !1), c = o) : c = o, t) {
            o = o.toString().slice(5, 13);
            var a = [s.length + 1, o, i];
            try {
                var r = function(e) {
                    return Math.round(100 * e) / 100
                };
                if (e.touches) {
                    if (e.touches.length > 0) {
                        for (var n = [], d = 0; d < e.touches.length; d++) n.push(r(e.touches[d].clientX)),
                        n.push(r(e.touches[d].clientY)),
                        n.push(r(e.touches[d].screenX)),
                        n.push(r(e.touches[d].screenY));
                        a.push(function(e, t) {
                            return e.length ? t - e[e.length - 1][1] : 0
                        } (s, o))
                    }
                } else console.error("%celelee test: userTouchRecord", "background:#000;color:#fff", "e.touches nothing", e),
                a.push("no touches data, but" + JSON.stringify([e.clientX, e.clientY, e.screenX, e.screenY]))
            } catch(t) {
                console.error("%celelee test: userTouchRecord", "background:#000;color:#fff", "e.touches 不存在", t),
                a.push("no touches, is", e.type)
            }
            s.push(a)
        }
    }
    function u(e) {
        i(e, {
            log: function(e, t) {
                console.log("%c" + this.configLogger.types.log + "%c => %s", this.configLogger.styles.log, "background-color: transparent;", e),
                t && console.log(t)
            },
            warn: function(e, t) {
                console.log("%c" + this.configLogger.types.warn + "%c => %s", this.configLogger.styles.warn, "background-color: transparent;", e),
                t && console.log(t)
            },
            error: function(e, t, i, o, a) {
                console.log("%c" + this.configLogger.types.error + "%c => %s", this.configLogger.styles.error, "background-color: transparent;", e),
                t && console.log(t);
                var r = "未知错误";
                if (t) {
                    var n = {
                        url: t.responseURL,
                        status: t.status,
                        statusText: t.statusText,
                        errorType: i,
                        dt: o,
                        api: a
                    };
                    r = JSON.stringify(n)
                } !
                function(e) {
                    if (window.location.href.indexOf("log=false") > 0) return ! 1;
                    var t = new window.Tracker("cn-shanghai.log.aliyuncs.com", "24haowan-game-error", "24haowan_client_error");
                    t.push("msg", e),
                    t.push("networkType", networkType),
                    t.push("gameId", game_info.game_id),
                    t.push("userId", userId),
                    t.push("location", location.href),
                    t.logger()
                } (r)
            }
        })
    }
    function g(e) {
        e.prototype.logger = {
            log: function(e) {
                console.log(e)
            },
            warn: function(e) {
                console.warn(e)
            },
            error: function(e) {
                console.error(e)
            }
        }
    }
    function m(e, t) {
        var i = window.Sentry;
        Object.defineProperty(e.prototype, "$sentry", {
            get: function() {
                return i
            }
        })
    }
    function f(e) {
        var t = window.$tplStore;
        Object.defineProperty(e.prototype, "$tplStore", {
            get: function() {
                return t
            }
        })
    }
    function p() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "mobile": "pc"
    }
    function h() {
        return "undefined" != typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission
    }
    function w() {
        return void 0 === window.orientation ? "undefined": 180 == window.orientation || 0 == window.orientation ? "portrait": "landscape"
    }
    function y(e) {
        return "function" == typeof e && (window.addEventListener("orientationchange", (function() {
            var t = w();
            e(t)
        }), !1), this)
    }
    function _(e, t) {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition((function(i) {
            if (i && i.coords) {
                var o = i.coords,
                a = o.longitude,
                r = o.latitude;
                e({
                    longitude: a,
                    latitude: r
                })
            } else t(!1)
        }), (function(e) {
            var i = e.code,
            o = e.message;
            t(JSON.stringify({
                code: i,
                message: o
            }))
        })) : t(!1)
    }
    function v(e) {
        $.ajax({
            url: reqDomain + "/game/v2/gamePlayPermission",
            type: "POST",
            dataType: "json",
            data: {
                game_id: game_info.game_id
            },
            success: function(t) {
                e && e(t)
            }
        })
    }
    function b(e) {
        $.ajax({
            url: reqDomain + "/game/v2/gameRankInfo",
            type: "POST",
            dataType: "json",
            data: {
                game_id: game_info.game_id
            },
            success: function(t) {
                switch (t.code) {
                case - 2 : showMessage({
                        text: "游戏ID错误",
                        time: 1e3
                    });
                    break;
                case - 3 : showMessage({
                        text: "游戏状态出错",
                        time: 1e3
                    })
                }
                e && e(t)
            }
        })
    }
    function P(e, t) {
        var i = this;
        $.ajax({
            url: reqDomain + "/game/v2/getWxCardTicket",
            data: {
                card_id: e.card_id
            },
            dataType: "json",
            type: "POST",
            success: function(o) {
                0 === o.code && i.addWxCard({
                    cardId: e.card_id,
                    timestamp: o.data.timestamp,
                    signature: o.data.signature
                }),
                t && t()
            }
        })
    }
    function S(e, t, i, o) {
        var a = this;
        return this.debug && this.log("调用接口: checkLocation"),
        t && 0 == t.length && (t = null),
        i && 0 == i.length && (i = null),
        console.log("地区输出：", e, t),
        $.ajax({
            url: reqDomain + "/game/V1/checkPosition",
            data: {
                game_id: game_info.game_id,
                province: e,
                city: t,
                county: i
            },
            type: "POST",
            timeout: 1e4,
            success: function(e) {
                if (0 === (e = JSON.parse(e)).code) {
                    var t = e.data;
                    o && o(t)
                }
                a.debug && a.log("返回结果: ", t)
            },
            error: function(e, t, i) {
                a.error("返回结果: ", e, t)
            }
        }),
        this
    }
    function x() {
        if (isHuadi && window.getClient().isWX) {
            var e = this.thirdLoginHelper.match("before");
            userData.user_id || e ? $.ajax({
                url: reqDomain + "/game/v2/getHuadiOpenid",
                type: "POST",
                dataType: "json",
                data: {
                    game_id: game_info.game_id,
                    game_url: location.href
                },
                success: function(e) {
                    0 === e.code && window.location.replace(e.url)
                }
            }) : this.wxLogin()
        }
    }
    function k(e) {
        $.ajax({
            url: reqDomain + "/logout",
            type: "POST",
            dataType: "json",
            success: e
        })
    }
    function C(e) {
        $.ajax({
            url: reqDomain + "/logout/unbind",
            type: "POST",
            dataType: "json",
            success: e
        })
    }
    function T() {
        var e = encodeURIComponent(location.href),
        t = encodeURIComponent(location.origin + "/game_enter/webCustom/wx_login_error.html"),
        i = reqDomain + "/router/wxAuth?game_id=" + game_id + "&redirect_url=" + e + "&error_url=" + t;
        location.replace(i)
    }
    window.initTouchRecord = function(e, t) {
        if (!d) {
            9 == game_type ? ($("canvas").first().on("touchstart", l), $("canvas").first().on("touchmove", l)) : ($("body").on("touchstart", l), $("body").on("touchmove", l));
            var i = t ? "restartTime": "startTime",
            o = {},
            a = new Date;
            o[i] = a.toLocaleString().split(" ")[0] + " " + a.toTimeString().slice(0, 8),
            o.timestamp = a.getTime(),
            o.timestampPrefix = a.getTime().toString().slice(0, 5);
            var r = e && e.touches && (e.touches[0] || e.changedTouches[0]);
            if (r) {
                var s = [];
                s.push(r.clientX),
                s.push(r.clientY),
                s.push(r.screenX),
                s.push(r.screenY),
                o.location = s
            }
            n = o
        }
    };
    var D = {
        requestActivityList: function(e, t) {
            e = e || {};
            var i = this;
            return this.debug && this.log("调用接口: requestActivityList"),
            this.setLastParams("requestActivityList", e, t),
            e.pages ? ($.ajax({
                url: reqDomain + "/game/V1/activityList",
                data: {
                    game_id: game_info.game_id,
                    pages: e.pages,
                    limit_total: e.limit_total,
                    type: e.type
                },
                type: "GET",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestActivityList.callback && i.lastParams.requestActivityList.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "activityList"),
                    i.error("返回结果: ", e, t)
                }
            }), this) : (console.log("参数错误：%s", "投票活动页数不能为空"), !1)
        },
        requestPollTypeAndNums: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestPollTypeAndNums"),
            this.setLastParams("requestPollTypeAndNums", e, t),
            $.ajax({
                url: reqDomain + "/game/V1/pollTypeAndNums",
                data: {
                    game_id: game_info.game_id
                },
                type: "GET",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestPollTypeAndNums.callback && i.lastParams.requestPollTypeAndNums.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "pollTypeAndNums"),
                    i.error("返回结果: ", e, t)
                }
            }),
            this
        },
        requestActivityDetails: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestActivityDetails"),
            this.setLastParams("requestActivityDetails", e, t),
            e = e || {},
            $.ajax({
                url: reqDomain + "/game/V1/activityDetails",
                data: {
                    game_id: game_info.game_id,
                    activity_num: e.activity_num
                },
                type: "GET",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestActivityDetails.callback && i.lastParams.requestActivityDetails.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "activityDetails"),
                    i.error("返回结果: ", e, t)
                }
            }),
            this
        },
        requestVote: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestVote"),
            this.setLastParams("requestVote", e, t),
            e = e || {},
            $.ajax({
                url: reqDomain + "/game/V1/vote",
                data: {
                    game_id: game_info.game_id,
                    id: e.id
                },
                type: "POST",
                dataType: "json",
                timeout: 1e4,
                captcha: {
                    need: !0
                },
                success: function(e) {
                    i.lastParams.requestVote.callback && i.lastParams.requestVote.callback(e),
                    -8 === e.code ? showMessage({
                        text: "当前审核状态不允许投票"
                    }) : -15 === e.code && i.thirdLoginHelper.check(),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "vote"),
                    i.error("返回结果: ", e, t)
                }
            }),
            this
        },
        requestCreateActivity: function(e, t) {
            return this.debug && this.log("调用接口: requestCreateActivity"),
            this.setLastParams("requestCreateActivity", e, t),
            (e = e || {}).details ? e.activity_img ? ("yes" === consumePointEnable ? this.consumePoint() : this.requestCreateActivityApi(e, t), this) : (console.log("参数错误：%s", "投票图片不能为空"), !1) : (console.log("参数错误：%s", "投票活动内容不能为空"), !1)
        },
        requestCreateActivityApi: function(e, t) {
            var i = this,
            o = "/game/V1/createActivity";
            e.retry && (o = "/game/V1/reCreateActivity"),
            $.ajax({
                url: reqDomain + o,
                data: {
                    game_id: game_info.game_id,
                    details: e.details,
                    activity_img: e.activity_img
                },
                captcha: {
                    need: !0
                },
                dataType: "json",
                type: "POST",
                timeout: 1e4,
                success: function(e) { - 5 === e.code && showMessage({
                        text: "抱歉，自主报名已关闭"
                    }),
                    i.lastParams.requestCreateActivity.callback && i.lastParams.requestCreateActivity.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "createActivity"),
                    i.error("返回结果: ", e, t)
                }
            })
        },
        requestIsAchieve: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestIsAchieve"),
            this.setLastParams("requestIsAchieve", e, t),
            $.ajax({
                url: reqDomain + "/game/V1/isAchieve",
                data: {
                    game_id: game_info.game_id
                },
                type: "GET",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestIsAchieve.callback && i.lastParams.requestIsAchieve.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "isAchieve"),
                    i.error("返回结果: ", e, t)
                }
            }),
            this
        },
        requestVoteActivityConfig: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestVoteActivityConfig"),
            this.setLastParams("requestVoteActivityConfig", e, t),
            $.ajax({
                url: reqDomain + "/game/V1/voteActivityConfig",
                data: {
                    game_id: game_info.game_id
                },
                type: "GET",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestVoteActivityConfig.callback && i.lastParams.requestVoteActivityConfig.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "voteActivityConfig"),
                    i.error("返回结果: ", e, t)
                }
            }),
            this
        },
        requestTestUserLogin: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestTestUserLogin"),
            this.setLastParams("requestTestUserLogin", e, t),
            (e = e || {}).user_id ? ($.ajax({
                url: reqDomain + "/gameAjax/testUserLogin",
                data: {
                    game_id: game_info.game_id,
                    user_id: e.user_id
                },
                type: "POST",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestTestUserLogin.callback && i.lastParams.requestTestUserLogin.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "testUserLogin"),
                    i.error("返回结果: ", e, t)
                }
            }), this) : (console.log("参数错误：%s", "测试角色user_id不能为空"), !1)
        },
        requestGameAuth: function(e, t) {
            var i = this;
            return this.debug && this.log("调用接口: requestGameAuth"),
            this.setLastParams("requestGameAuth", e, t),
            $.ajax({
                url: reqDomain + "/game/V1/GameAuth",
                data: {
                    game_id: game_info.game_id
                },
                type: "GET",
                timeout: 1e4,
                success: function(e) {
                    e = JSON.parse(e),
                    i.lastParams.requestGameAuth.callback && i.lastParams.requestGameAuth.callback(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "gameAuth"),
                    i.error("返回结果: ", e, t)
                }
            }),
            this
        }
    };
    function L(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))),
            i.push.apply(i, o)
        }
        return i
    }
    function q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? L(Object(i), !0).forEach((function(t) {
                G(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : L(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }
    function j(e) {
        return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        j(e)
    }
    function G(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var A = {
        getGiftList: function() {
            return pageContainer && pageContainer.getGiftList()
        },
        resetCDRank: function() {
            return pageContainer && pageContainer.resetCDRank()
        }
    };
    function E(e) {
        for (var t = arguments.length,
        i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];
        return A[e] && A[e].apply(A, i)
    }
    var M = function() {
        modals && modals.times && (modals.times.addChance = !0, modals.times.addTimes = hwsdk.giftConfigAddChanceTimes, modals.times.addPeople = hwsdk.giftConfigAddChancePeople, configJson.style.disableNotifyFlag && (modals.times.addChance = !1))
    },
    O = {
        requestLottery: function(e, t) {
            var i = this,
            o = tpl_info.tpl_id;
            if (95 == o || 97 == o || 277 == o) i.requestLotteryAPI(e, t);
            else {
                if (i.isLotteryLock) return;
                i.isLotteryLock = !0,
                i.getLotteryTimes(e, (function() {
                    i.requestLotteryAPI(e, t)
                }))
            }
        },
        requestLotteryAPI: function(e, t) {
            var i = this;
            this.debug && this.log("调用接口: requestLottery"),
            this.setLastParams("requestLottery", e, t),
            e = e || {};
            var o = window.gameDataGame.enter_key;
            if (2 == game_type && 1 == game_test) this.currentLotteryGift = "empty",
            this.lastParams.requestLottery.callback && this.lastParams.requestLottery.callback(this.currentLotteryGift),
            views.over && (views.over.hasGotGift = !1);
            else {
                var a = (new Date).getTime(),
                r = "/GameAjax/getLuckyGift",
                n = {
                    game_id: game_info.game_id,
                    key: o
                };
                175 == game_info.tpl_id && (n.city = window.zhanma && window.zhanma.city, n.province = window.zhanma && window.zhanma.province),
                e.type_name && (r = "/game/v1/prizeDrawByName", n.type_name = e.type_name);
                var s, c = i.lkcj;
                c && (r = "/GameAjax/" + c + "/getLuckyGift"),
                this.isLotteryLock = !0,
                setTimeout((function() {
                    showLoading()
                }), 0),
                s = setTimeout((function() {
                    modals.dialog._requestingTipModal = !0,
                    modals.dialog.showConfirm({
                        title: "网络请求中",
                        content: "请求比预想的的时间要长一点呢，请耐心等待，不要退出页面",
                        cancelText: "",
                        confirmText: "请耐心等待......",
                        disableConfirm: !0,
                        showCancel: !1
                    })
                }), 3e4),
                $.ajax({
                    url: reqDomain + r,
                    data: n,
                    type: "POST",
                    dataType: "json",
                    timeout: 6e4,
                    disableShowTimeoutTip: !0,
                    captcha: {
                        need: !0
                    },
                    success: function(e) {
                        0 == e.code ? (i.lastScoreLottery = 0, i.requestLotteryCallback(e.data), $(document).trigger("customEvent-getLuckyGift", e.data), i.lastParams.requestLottery.callback && ("empty" == e.data.lottery ? i.lastParams.requestLottery.callback("empty") : i.lastParams.requestLottery.callback(e.data)), setTimeout((function() {
                            i.isLotteryLock = !1
                        }), 1e3), i.dealLotteryTpl(e.data)) : -1 == e.code ? (showMessage({
                            text: "抽奖失败，请稍后重试"
                        }), i.isLotteryLock = !1) : -9 == e.code ? (showMessage({
                            text: "玩家被拉黑"
                        }), i.isLotteryLock = !1) : -5 == e.code ? (modals.dialog.showConfirm({
                            title: "排队提醒",
                            content: "活动过于火爆，正在排队中...",
                            cancelText: "返回首页",
                            confirmText: "7秒后可以重试",
                            confirm: function(e) {
                                e.hideConfirm(),
                                views.over.replay()
                            },
                            showCancel: !1,
                            cancel: function() {
                                views.start.show = !0
                            }
                        }), modals.dialog.updateConfirmText("秒后可以重试", 7), modals.lottery.show = !1, i.isLotteryLock = !1) : -4 == e.code ? (showMessage({
                            text: "当前游戏状态不允许抽奖"
                        }), i.isLotteryLock = !1) : -6 == e.code ? (showMessage({
                            text: "用户操作异常，未从正常途径抽奖"
                        }), i.isLotteryLock = !1) : -3 == e.code ? (showMessage({
                            text: "很遗憾，活动已下线，无法再抽奖了"
                        }), i.isLotteryLock = !1) : -2 == e.code ? (showMessage({
                            text: "找不到游戏信息"
                        }), i.isLotteryLock = !1) : -8 == e.code ? (modals.lottery.show = !1, modals.insufficientIntegral.show = !0, i.isLotteryLock = !1) : [ - 10, -11, -12].indexOf(e.code) > -1 ? (showMessage({
                            text: "本次抽奖次数已用完，请再次挑战后重试"
                        }), i.isLotteryLock = !1) : -21 == e.code ? location.replace(e.data.url) : 99 !== e.code && (showMessage({
                            text: "系统错误 " + e.code
                        }), i.isLotteryLock = !1),
                        i.debug && i.log("返回结果: ", e)
                    },
                    error: function(e, t, o) {
                        modals.submitError.set("start-menu", "lottery"),
                        i.isLotteryLock = !1;
                        var n = (new Date).getTime() - a;
                        i.error("返回结果: ", e, t, n, r)
                    },
                    complete: function() {
                        hideLoading(),
                        modals.dialog.show && modals.dialog._requestingTipModal && (modals.dialog._requestingTipModal = !1, modals.dialog.hideConfirm()),
                        s && (clearTimeout(s), s = null, modals.dialog._requestingTipModal = !1, console.log("clear")),
                        console.log("complete")
                    }
                })
            }
            return this
        },
        dealLotteryTpl: function(e) {
            2 === game_type && e.lottery && e.lottery.id && this.readGift(e.lottery.id, (function() {
                E("getGiftList")
            }))
        },
        readGift: function(e, t) {
            $.ajax({
                url: reqDomain + "/GameAjax/ReadGiftInfo",
                type: "post",
                dataType: "json",
                data: {
                    id: e
                },
                success: t
            })
        },
        requestLotteryCallback: function(e) {
            if (first_play = 0, this.formInfoHelper.matchFeedbackType("after") && 2 == game_type && this.formInfoHelper.pushFeedbackPopup("after"), this.isLotteryAddChance = !1, void 0 !== e.left_lottery_times && (left_times = e.left_lottery_times), "empty" != e.lottery) {
                var t = q(q({},
                e.lottery), {},
                {
                    check: e.lottery.check,
                    code: e.lottery.code,
                    show_qrcode: e.lottery.show_qrcode,
                    add_chance: e.add_chance,
                    rank: e.rank,
                    headimgurl: e.headimgurl,
                    name: e.user_name,
                    gift_img: e.lottery.img,
                    gift_name: e.lottery.name,
                    create_time: e.create_time,
                    gift_type: 5,
                    gift_id: e.lottery.gift_id,
                    gift_record_id: e.lottery.log_id || e.lottery.id,
                    check_way: e.lottery.check_way,
                    check_info: e.lottery.check_info,
                    status: e.lottery.status,
                    subscribe_gift: e.lottery.subscribe_gift,
                    subscribe_rp: e.lottery.subscribe_rp,
                    point: e.lottery.point,
                    other_gift_ext_info: e.lottery.other_gift_ext_info
                });
                if (e.lottery.rp_type && (t.rp_type = e.lottery.rp_type, t.rp_total = e.lottery.rp_total, e.lottery.rp_type, t.gift_img ? t.gift_img: t.gift_img = "//res.cdn.24haowan.com/public/images/t/giftmoney-common-opened.png"), this.currentLotteryGift = t, 2 == game_type) {
                    views.over && (views.over.hasGotGift = !0);
                    var i = e.lottery.name,
                    o = e.lottery.img;
                    e.lottery.rp_type && (i += "(共" + e.lottery.rp_total + "元)", e.lottery.rp_type, o || (o = "//res.cdn.24haowan.com/public/images/t/giftmoney-common-opened.png")),
                    views.over && (views.over.currentGiftRecordId = e.lottery.log_id || e.lottery.id, views.over.currentGiftImg = o, views.over.currentGiftName = i),
                    !e.add_chance || isAPP || configJson.disableShare || (this.isLotteryAddChance = !0, $(".gameover-remind-share").removeClass("hidden").text(this.addLotteryChanceTip()), M()),
                    pageContainer.giftData.push(t),
                    pageContainer.giftToShow.push(t),
                    PageUtils.pushFeedbackPopup("afterPrize")
                } else {
                    if (7 == game_type && 278 == tpl_info.tpl_id) return;
                    pageContainer.giftData.push(t),
                    pageContainer.giftToShow.push(t),
                    modals.lottery.show = !1,
                    pageContainer.getSingleGift()
                }
                setEventTrackTime("giftDetail")
            } else if (2 == game_type) this.currentLotteryGift = "empty",
            views.over && (views.over.hasGotGift = !1),
            !e.add_chance || isAPP || configJson.disableShare || (this.isLotteryAddChance = !0, $(".gameover-remind-share").removeClass("hidden").text(this.addLotteryChanceTip()), M());
            else {
                if (7 == game_type && 278 == tpl_info.tpl_id) return;
                alertbox.push(modals.getPrizeNone),
                e.add_chance && !configJson.disableShare ? (modals.getPrizeNone.showShare = !0, $(".gameover-remind-share").removeClass("hidden").text(this.addLotteryChanceTip()), M()) : modals.getPrizeNone.showShare = !1,
                modals.lottery.show = !1
            }
            E("getGiftList"),
            this.setOverRemind(),
            $(document).trigger("requestLotteryCallbackSucc", e.lottery)
        },
        getLotteryTimes: function(e, t) {
            var i = this,
            o = {
                game_id: game_info.game_id
            },
            a = window.gameDataGame.enter_key;
            function r() {
                modals.lottery.show && (modals.lottery.show = !1),
                showMessage({
                    text: "系统异常，请稍后再试",
                    time: 1500
                })
            }
            a && (o.key = a),
            $.ajax({
                url: reqDomain + "/game/gameAjax/getLotteryTimes",
                type: "POST",
                dataType: "json",
                data: o,
                timeout: 1e4,
                success: function(i) {
                    0 === i.code ? i.data.times > 0 || e && e.customShowTip ? (window.shareExtraTimes = i.data.share_extra_times, t && t(i.data)) : 0 === i.data.times && (modals.lottery.show && (modals.lottery.show = !1), showMessage({
                        text: i.data.custom_msg || "您的抽奖次数已用完",
                        time: 2e3
                    })) : 99 !== i.code && r()
                },
                complete: function() {
                    i.isLotteryLock = !1
                },
                error: r
            })
        },
        requestFeedback: function(e, t) {
            var i = this;
            this.debug && this.log("调用接口: requestFeedback"),
            this.setLastParams("requestFeedback", e, t),
            this.debug && this.log("请求参数: ", e),
            $.ajax({
                url: reqDomain + "/GameAjax/CollectUserInfo",
                data: e,
                type: "POST",
                success: function(e) {
                    e = JSON.parse(e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "userinfo"),
                    i.error("提交报名信息失败:", e, t)
                }
            })
        }
    };
    var I = "".replace(/https?:\/\//, ""),
    U = q({
        shareDomains: {
            production: location.host,
            test: location.host,
            development: "test-new.24haowan.com"
        }
    },
    {}),
    H = {
        friendHelpPagePath: "/game_enter/friendHelp.html",
        shareDomain: I || U.shareDomains.production
    };
    function N() {
        if (alertbox.length > 0) {
            var e = alertbox.shift();
            e && ("activity" == e ? 1 == first_play && !window.localStorage["played-" + game_info.game_id] && configJson.style.displayRuleIcon && (window.localStorage["played-" + game_info.game_id] = "yes", window.masks.btn.show = !0, $(document).trigger("showMasksBtn")) : "feedback" == e ? PageUtils.showConfirm().then((function() {
                pageContainer.navShow = !1,
                pageContainer.toggleNav(pageContainer.nav.indexOf("报名信息")),
                pageContainer.pageIn(),
                "yes" == configJson.message.msg.necessary && 0 == form_info && (pageContainer.enableClose = !1, window.notShowWhiteBar || history.pushState({
                    page: "feedback"
                },
                "feedback"), currentState = "feedback")
            })) : "function" == typeof e.display ? e.display() : e.show = !0)
        }
    }
    function J() {
        var e = navigator.userAgent.toLowerCase(),
        t = /bestore/i.test(e),
        i = !1;
        return ["66332", "65760"].indexOf(window.gameDataUser.user_appid) > -1 && t && isAPP && (i = !0),
        i
    }
    function R(e, t, i) {
        var o = function(e, t) {
            return !! Array.isArray(e) && e.find((function(e) {
                return e.type === t
            }))
        } (e, t);
        if (!o) return ! 1;
        var a = o.add_chance,
        r = o.add_chance_ext;
        return "share" === a && r.condition === i && r
    }
    window.showBox = N;
    var W, B, z, F = (W = navigator.userAgent.toLowerCase(), B = /android/.test(W), z = /iphone|ipad/.test(W), B ? "android": z ? "ios": "other");
    function V() {
        var e = F;
        return "android" === e ? void 0 !== window.jsObj && window.jsObj.action_AppShareInfo: "ios" === e && (void 0 !== window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.action_AppShareInfo && window.webkit.messageHandlers.action_AppShareInfo.postMessage)
    }
    function Q() {
        var e, t = navigator.userAgent.toLowerCase(),
        i = /nissanoneapp/.test(t);
        return "android" === F ? e = void 0 !== window.webkit && window.webkit.setShareUrl: "ios" === F && (e = void 0 !== window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.setShareUrl && window.webkit.messageHandlers.setShareUrl.postMessage),
        e && i
    }
    function X(e, t) {
        if (window.action_H5ShareResult = function(e) {
            t(1 == e)
        },
        V()) {
            var i = {
                title: e.title,
                content: e.content,
                showImgUrl: e.logo,
                contentUrl: e.url,
                gameId: e.gameInfo.game_id,
                videoId: e.gameInfo.id
            };
            try {
                "android" === F ? window.jsObj.action_AppShareInfo(JSON.stringify(i)) : "ios" === F && window.webkit.messageHandlers.action_AppShareInfo.postMessage(JSON.stringify(i))
            } catch(e) {
                console.error(JSON.stringify(e))
            }
        }
    }
    function K(e, t) {
        window.getShareResult = function(e) {
            var i;
            console.log("getShareResult", e);
            try {
                i = JSON.parse(e),
                t("1" == i.result)
            } catch(e) {}
        };
        var i = {
            type: ["2", "3", "4", "5"],
            isLink: "true",
            shareInfo: {
                title: e.title,
                url: e.url,
                description: e.content,
                thumbnail: e.logo
            }
        };
        "android" === F ? window.webkit.setShareUrl(JSON.stringify(i.shareInfo)) : "ios" === F && window.webkit.messageHandlers.setShareUrl.postMessage(i.shareInfo)
    }
    function Y() {
        return !! V() || !!Q()
    }
    function Z() { (views.start || views.over) && (views.start.showShareBtn = !0, views.over.showShareBtn = !0)
    }
    function ee(e) {
        if (e && configJson.disableShare) return ! 1;
        Y() && e ? hwsdk.invokeAppShare() : hwsdk.showShareSelection ? modals.shareSelection && (modals.shareSelection.show = e) : masks.share && (masks.share.show = e)
    }
    function te() {
        var e = function() {
            var e = R(window.gift_config, 5, "friend_help"),
            t = [1, 2, 3, 9, 4, 6].includes(window.game_type);
            views.start && views.start.show;
            var i = configJson.disableShare;
            return ! (!e || !t || i)
        } (),
        t = function() {
            var e = hwsdk.limitPlayTimesConfig || window.limitPlayTimesConfig;
            return !! e && e.enableFriendHelp
        } ();
        return e ? "lottery": t ? "play": void 0
    }
    function ie(e, t, i, o) {
        var a = H.friendHelpPagePath,
        r = {
            game_id: game_info.game_id,
            from_user: gameDataUser.user_id,
            from_user_app_uid: gameDataUser.appuid,
            type: e
        };
        gameDataUser.plazaCode && (r.plazaCode = gameDataUser.plazaCode);
        var n = window.urlQueryData.scene;
        void 0 !== n && (r.scene = n);
        var s = "score";
        return 4 != game_type && 6 != game_type || (s = "level"),
        r[s] = void 0 !== o ? o: 0,
        location.protocol + "//" + t + a + "?" + $.param(r)
    }
    var oe = {
        getWxShareObj: function(e) {
            var t = H.shareDomain;
            console.warn(t);
            var i = configJson.message,
            o = i.share.pic,
            a = t,
            r = window.getClient(); (r.isMiniProgram || r.isAlipay || r.isJd) && (t = location.host, a = location.host, o = i.share.bigPic || o),
            o = (o = o.replace(/^\/\//, "http://")).replace(/^https:\/\//, "http://");
            var n = {
                "title-default": i.share["title-default"],
                "desc-default": i.share["desc-default"],
                title: i.share.title,
                desc: i.share.desc,
                imgUrl: o,
                link: location.protocol + "//" + a + "/web/share/game_id/" + game_info.game_id + "/test/" + Number(game_test) + "/from_user/" + userId + "/from_user_app_uid/" + gameDataUser.appuid
            };
            if (e) {
                var s = location.href.split("?")[0];
                s = (s = s.replace("24haowan.shanyougame.com", t)).replace("www.24haowan.com", t),
                n.link = location.protocol + "//" + t + "/web/game/game_id/" + game_info.game_id + "/test/" + Number(game_test) + "/from_user/" + userId + "/from_user_app_uid/" + gameDataUser.appuid
            }
            window.platformAppid && window.enableTrackPlatformAppids.indexOf(window.platformAppid) > -1 && window.openid && (n.link += "/openid/" + openid);
            var c = window.urlQueryData.scene;
            void 0 !== c && (n.link += "/scene/" + encodeURIComponent(c)),
            gameDataUser.plazaCode && (n.link += "/plazaCode/".concat(gameDataUser.plazaCode));
            var d = te();
            return d && (n.link = ie(d, a, n.link)),
            console.log("getWxShareObj", n),
            n
        },
        isShareBtnShow: function() {
            if (configJson.disableShare) return ! 1;
            var e = !!(gameDataPlatformGameConfig && gameDataPlatformGameConfig.sharePage && gameDataPlatformGameConfig.sharePage.enable),
            t = !!(configJson.message && configJson.message.share && configJson.message.share.postShow);
            return e || t
        },
        setWxShare: function(e, t, i) {
            var o = this,
            a = H.shareDomain;
            this.debug && this.log("调用接口: setWxShare");
            var r = e["title-default"],
            n = e["desc-default"],
            s = e.link,
            c = a,
            d = window.urlQueryData.scene;
            function l() {
                var e = "";
                void 0 !== d && (e += "&scene=" + encodeURIComponent(d));
                var t = gameDataUser.plazaCode;
                return t && (e += "&plazaCode=" + encodeURIComponent(t)),
                e
            }
            function u(e) {
                return e = e || !1,
                void 0 !== gameDataUser.appuid && "-1" !== gameDataUser.appuid ? (e ? "?": "&") + "from_user_app_uid=" + encodeURIComponent(gameDataUser.appuid) : ""
            }
            var g = [["from_user_app_uid", gameDataUser.appuid], ["wx_appid", gameDataUser.wx_app_id], ["openid", gameDataUser.openid]],
            m = window.getClient();
            if ((m.isMiniProgram || m.isAlipay || m.isJd) && (a = location.host, c = location.host), 1 == game_test) s = "https://" + c + "/webcustom/game/game_id/" + game_info.game_id + "?from_user=" + userId,
            s += l();
            else {
                if ("share" != configJson.message.share.link) {
                    if ("self" == configJson.message.share.link) s = location.protocol + "//" + c + "/web/game/game_id/" + game_info.game_id + "?from_user=" + userId,
                    s += u();
                    else if (configJson.message.share.link.match(/^#\d+$/)) s = location.protocol + "//" + c + "/web/game/game_id/" + configJson.message.share.link.match(/^#\d+$/)[0].replace("#", "") + "?from_user=" + userId,
                    s += u();
                    else {
                        s = location.protocol + "//" + a + "/web/share/game_id/" + game_info.game_id + "/test/" + Number(game_test) + "/from_user/" + userId;
                        var f = function(e, t) {
                            return t.forEach((function(t) {
                                var i = new RegExp("\\{" + t[0] + "\\}", "ig");
                                e = e.replace(i, t[1])
                            })),
                            e
                        } (configJson.message.share.link, g);
                        s += "?r_url=" + encodeURIComponent(f)
                    }
                    s += l()
                }
                var p = te();
                p && (s = ie(p, c, 0, t)),
                t && (r = e.title, n = e.desc)
            }
            console.log({
                share_link: a,
                _host: c
            }),
            s = s && -1 === s.indexOf("/share/") ? location.href.toLowerCase().indexOf("/webcustom/") > -1 ? s.replace(/\/web\//g, "/webCustom/") : s.replace(/\/webCustom\//g, "/web/") : location.href.toLowerCase().indexOf("/webcustom/") > -1 ? s.replace(/\/web\/share/g, "/web/shareTest") : s.replace(/\/webCustom\/share/g, "/web/shareTest"),
            "string" != typeof r && (r = ""),
            "string" != typeof n && (n = ""),
            r = r.replace(/\{name\}/gi, user_name),
            n = n.replace(/\{name\}/gi, user_name),
            this.lastWxShareLink = s,
            this.updateQueryData(s),
            console.log("最终链接：", s),
            o.lastWxShareParams = {
                title: r,
                desc: n,
                link: s,
                imgUrl: e.imgUrl
            };
            var h = window.getClient(),
            w = h.isWX || h.isWXWork,
            y = Y();
            return w ? o.setWXWebviewShare({
                title: r,
                desc: n,
                imgUrl: e.imgUrl,
                link: s
            }) : y || isAPP || isAppSharePrize ? o.setAppShare({
                title: r,
                content: n,
                logo: e.imgUrl,
                url: s,
                gameInfo: window.urlQueryData
            }) : location.href.indexOf("#redirect"),
            o.updateMiniProgramPostMessage(),
            o.sendShareUrl(s),
            o.showShareSelection = o.isShareBtnShow(),
            o.showShareSelection ? Z() : (views.start || views.over) && (views.start.showShareBtn = !1, views.over.showShareBtn = !1),
            this
        },
        updateMiniProgramPostMessage: function(e) {
            var t = this;
            console.warn("update", e);
            var i = t.lastWxShareParams,
            o = i.title,
            a = i.imgUrl,
            r = i.link,
            n = {
                postType: "share",
                jwt: t.jwt.getToken(),
                userInfo: {
                    appuid: gameDataUser.appuid,
                    appid: gameDataUser.user_appid
                },
                shareInfo: {
                    shareTitle: o,
                    shareLogo: a,
                    shareUrl: r
                },
                gameInfo: window.urlQueryData,
                subscribeInfo: {
                    need: !1,
                    type: ""
                }
            };
            n = Object.assign({},
            n, e || {});
            var s = t.lastMiniAppShareParams.subscribeInfo;
            s && s.need && (n.subscribeInfo = s),
            t.lastMiniAppShareParams = n,
            configJson.disableShare && (n = {
                disable: !0,
                jwt: "",
                postType: "",
                userInfo: {
                    appuid: "",
                    appid: ""
                },
                shareInfo: {
                    shareTitle: "",
                    shareLogo: "",
                    shareUrl: ""
                },
                gameInfo: {},
                subscribeInfo: {}
            },
            console.log("分享已禁用"));
            var c = window.getClient();
            t.miniProgramGetEnv((function() {
                console.log("微信小程序分享参数", n),
                t.miniProgramPostMessage(n)
            })),
            c.isAlipay && "undefined" != typeof my && (console.log("支付宝小程序分享参数", n), t.aliPayMiniProgramPostMessage(n)),
            c.isJd && "undefined" != typeof jd && (console.log("京东小程序分享参数", n), jd.miniProgram.getEnv((function(e) {
                e.miniprogram && t.jdMiniProgramPostMessage(n)
            })))
        },
        updateQueryData: function(e) {
            if (window.parseUrlParams) {
                var t = {};
                try {
                    t = window.parseUrlParams(e, ["scene", "key", "cd_id", "id", "from_user", "vote_id", "video_id"])
                } catch(t) {
                    console.error("parse error", e)
                }
                for (var i in t) if (Object.hasOwnProperty.call(t, i)) {
                    var o = t[i];
                    o && (window.urlQueryData[i] = o, 277 == tpl_info.tpl_id && "id" === i && (window.urlQueryData.video_id = o))
                }
            }
        },
        setWXWebviewShare: function(e) {
            var t = this,
            i = e.title,
            o = e.link,
            a = e.desc,
            r = e.imgUrl;
            wx.ready((function() {
                wx.onMenuShareTimeline({
                    title: i,
                    link: o,
                    imgUrl: r,
                    success: function() {
                        sendEventTrack({
                            eventPage: "prePageRecord",
                            clickType: "share",
                            share_way: "moments"
                        }),
                        t.requestShare(),
                        EventBus.$emit("shareSuccess", "moments"),
                        $(".gameover-remind-share").addClass("hidden")
                    },
                    fail: function(e) {
                        console.error("wx-onMenuShareTimeline-fail", e)
                    },
                    cancel: function() {
                        console.log("wx-onMenuShareTimeline-cancel"),
                        hwsdk.hideShare()
                    }
                }),
                wx.onMenuShareAppMessage({
                    title: i,
                    desc: a,
                    link: o,
                    imgUrl: r,
                    type: "link",
                    dataUrl: "",
                    success: function() {
                        t.requestShare(),
                        EventBus.$emit("shareSuccess", "chat"),
                        $(".gameover-remind-share").addClass("hidden"),
                        sendEventTrack({
                            eventPage: "prePageRecord",
                            clickType: "share",
                            share_way: "chat"
                        })
                    },
                    cancel: function() {
                        hwsdk.hideShare()
                    }
                })
            })),
            Z()
        },
        setAppShare: function(e) {
            var t = this;
            isAppSharePrize && isJuBian && !window.getClient().isWX && (Z(), t.setLastAppShareParams("jubian", e), "object" !== ("undefined" == typeof dsBridge ? "undefined": j(dsBridge)) && require(["//cdn.jsdelivr.net/npm/dsbridge/dist/dsbridge.js"], (function() {
                console.warn("dsBridge load success", !!dsBridge)
            }))),
            J() && (Z(), t.setLastAppShareParams("lppz", e), "function" != typeof sharingPageLppzRequestNew && require(["//sns.lppz.com/app/js/nativeEvent.js"])),
            t.setLastAppShareParams("nativeApp", e)
        },
        invokeAppShare: function() {
            var e = this,
            t = {};
            if (isAppSharePrize && isJuBian && !window.getClient().isWX) {
                var i = {
                    platform: "3,4",
                    needChannel: "true",
                    title: (t = e.lastAppShareParams.jubian).title,
                    content: t.content,
                    imgUrl: t.logo,
                    webUrl: t.url
                };
                e.log("invokejubian app share", i),
                e.jubianAppSharePostMessage(i, (function(t) {
                    var i;
                    if (console.warn("callNativeApi", JSON.stringify(t)), "string" == typeof t) try {
                        i = JSON.parse(t)
                    } catch(e) {} else "object" === j(t) && (i = t);
                    if (i && 100 === i.msgCode) { ["wechat", "wxcircle"].indexOf(i.result.channel) > -1 && (console.warn("share-success", i.result), e.requestShare())
                    }
                }))
            }
            if (J()) {
                var o = {
                    title: (t = e.lastAppShareParams.lppz).title,
                    content: t.content,
                    image: t.logo,
                    url: t.url,
                    type: "WX",
                    isMinWX: !1,
                    success: function(e) {
                        console.log("lppz-share-success", e),
                        hwsdk.requestShare()
                    }
                };
                "function" == typeof sharingPageLppzRequestNew && (console.log(o), sharingPageLppzRequestNew(o))
            } !
            function() {
                V() ? X.apply(null, arguments) : Q() && K.apply(null, arguments)
            } (t = e.lastAppShareParams.nativeApp, (function(t) {
                console.log("share success, native app", t),
                t && (e.requestShare(), EventBus.$emit("shareSuccess", "nativeApp"))
            }))
        },
        invokeMiniappShare: function() {
            var e = gameDataPlatformGameConfig && gameDataPlatformGameConfig.sharePage;
            if (e && e.enable && "miniapp" === e.type && window.getClient().isMiniProgram) {
                var t, i = e.url,
                o = [];
                urlQueryDataKeys.forEach((function(e) { (t = urlQueryData[e]) && (t = encodeURIComponent(t), o.push([e, t].join("=")))
                })),
                o.length && (i += "?"),
                i += o.join("&"),
                console.log("invoke miniprogram share", e, i, urlQueryData),
                this.navigateTo(i)
            }
        },
        sendShareUrl: function(e) {},
        requestShare: function() {
            if (window.configJson.disableShare) return ! 1;
            var e = this;
            $.ajax({
                url: reqDomain + "/GameAjax/ShareGame",
                data: {
                    game_id: game_info.game_id,
                    video_id: window.urlQueryData.id
                },
                type: "POST",
                success: function(t) {
                    0 == (t = JSON.parse(t)).code && 135 != tpl_info.tpl_id && e.requestShareCallback(t),
                    e.debug && e.log("返回结果: ", t)
                },
                error: function(t, i, o) {
                    modals.submitError.set("", "requestShare"),
                    e.error("返回结果: ", t, i)
                }
            })
        },
        requestShareCallback: function(e) {
            var t = e.data,
            i = e.limit_play ? e.limit_play: null;
            share_times++,
            this.isShareGiftEmpty = !1,
            modals && modals.times && (modals.times.addChance = !1),
            hwsdk.hideShare(),
            $(".guide-page").hide(),
            2 != game_type && modals.record && modals.record.show && modals.record.hide();
            if (t) {
                if (t.name) {
                    var o = q(q({},
                    t), {},
                    {
                        check: t.check,
                        code: t.code,
                        show_qrcode: t.show_qrcode,
                        rank: t.rank,
                        headimgurl: t.headimgurl,
                        name: t.user_name,
                        gift_img: t.img,
                        gift_name: t.name,
                        create_time: t.create_time,
                        gift_type: t.gift_type,
                        gift_id: t.gift_id,
                        gift_record_id: t.log_id || t.id,
                        check_way: t.check_way,
                        check_info: t.check_info,
                        status: t.status,
                        subscribe_gift: t.subscribe_gift,
                        subscribe_rp: t.subscribe_rp,
                        point: t.point,
                        other_gift_ext_info: t.other_gift_ext_info
                    });
                    t.rp_type ? (o.rp_type = t.rp_type, o.rp_total = t.rp_total, 2 == t.rp_type ? modals.giftmoney.type = "common": 3 == t.rp_type && (modals.giftmoney.type = "random"), alertbox.push(modals.giftmoney)) : alertbox.push(modals.getPrize),
                    pageContainer.giftData.push(o),
                    pageContainer.giftToShow.push(o),
                    PageUtils.pushFeedbackPopup("afterPrize")
                }
                if (!configJson.disableShare) if ("yes" === t.add_chance_now) {
                    showMessage({
                        text: "炫耀成功! 额外抽奖机会已到账"
                    }),
                    window.gameDataUser.free_remain_chance_times && window.gameDataUser.free_remain_chance_times--
                } else t.lottery_chance && 145425856 != game_id && (showMessage({
                    text: "炫耀成功! 在游戏结束界面可以抽奖哦！"
                }), this.lastScoreLottery = this.lastScore);
                void 0 !== t.left_lottery_times && (left_times = t.left_lottery_times, 14 == tpl_info.tpl_id || 30 == tpl_info.tpl_id || 100 == tpl_info.tpl_id ? $(".times-text").text("剩余次数：" + left_times + "次") : $(".times-text").text(left_times))
            }
            if (e.gift_left) {
                var a = game_info.game_id + "_share_empty";
                if (!window.localStorage[a]) for (var r = JSON.parse(e.gift_left), n = r.length, s = 0; s < n; s++) if (3 == r[s].type && 0 == r[s].prize[0].num && !this.isGotGift(3)) {
                    modals.getPrizeEmpty.text = "抱歉，炫耀获奖的奖品已经发完了",
                    this.isShareGiftEmpty = !0,
                    alertbox.push(modals.getPrizeEmpty),
                    window.localStorage[a] = "yes";
                    break
                }
            }
            this.limitPlayTimesConfig && i && "yes" === i.add_play_chance && "yes" === i.add_play_times && showMessage({
                text: "炫耀成功! 恭喜获得 " + this.limitPlayTimesConfig.add_times + " 次游戏机会!"
            }),
            window.sessionStorage.setItem("hasShared", !0),
            E("getGiftList"),
            this.setOverRemind(),
            2 == game_type && $(".lottery-share-remind").addClass("hidden"),
            N(),
            0 === e.code && 1 == e.show_tips && EventBus.$emit("shareSuccess")
        },
        initGameShareTimesLoop: function() {
            var e = window.getClient(),
            t = e.isWX,
            i = e.isMiniProgram,
            o = [i, !configJson.disableShare],
            a = !!gameDataUser.user_appid && "-1" != gameDataUser.user_appid,
            r = getUrlParams("is_from_app") && !t && !i && !configJson.disableShare && a;
            console.warn("enableLoopFlags %o", o, r),
            o.every((function(e) {
                return ! 0 === e
            })) && this.loopGameShareExtraTimes()
        },
        loopGameShareExtraTimes: function() {
            var e = this;
            e.gameShareExtraTimesTimmer = setInterval((function() {
                e.getGameShareExtraTimes((function(t) {
                    if ([99, 100, -2, -4, 0].indexOf(t.code) > -1) {
                        if (277 == tpl_info.tpl_id && -2 == t.code) return;
                        0 === t.code && (e.requestShareCallback(t), EventBus.$emit("shareSuccess", "miniapp"))
                    }
                }))
            }), 3e3)
        },
        getGameShareExtraTimes: function(e) {
            var t = this,
            i = {
                game_id: game_info.game_id
            };
            window.urlQueryData.id && (i.video_id = window.urlQueryData.id),
            $.ajax({
                url: reqDomain + "/game/v2/getGameShareExtraTimes",
                type: "POST",
                dataType: "json",
                data: i,
                success: e,
                needLoading: !1,
                error: function(e, o) {
                    if (t.error("返回结果", e, o), window.Sentry && 500 === e.status) {
                        var a = [i.game_id, i.video_id, game_id].join("-");
                        Sentry.captureMessage(a, "warning")
                    }
                }
            })
        },
        jubianAppSharePostMessage: function(e, t) {
            if ("object" === ("undefined" == typeof dsBridge ? "undefined": j(dsBridge))) {
                var i = {
                    router: "BTTitlePlugin/share",
                    params: e
                };
                dsBridge.call("callNativeApi", i, t)
            } else console.error("dsBridge load fail")
        },
        showShare: function() {
            ee(!0)
        },
        hideShare: function() {
            ee(!1)
        },
        getGameShareQrcode: function(e) {
            var t = this;
            $.ajax({
                url: deployDomain + "/node_w/game/getGameQr",
                data: {
                    game_id: game_info.game_id,
                    version: "release",
                    url: t.lastWxShareParams.link
                },
                type: "GET",
                success: function(i) {
                    0 == (i = JSON.parse(i)).code && e && e(i.data.qrUrl),
                    t.debug && t.log("返回结果: ", i)
                },
                error: function(e, i, o) {
                    t.error("返回结果: ", e, i)
                }
            })
        }
    };
    var ae = {
        requestHelp: function(e, t) {
            if (this.debug && this.log("调用接口: requestHelp"), this.setLastParams("requestHelp", e, t), 1 == game_test || skip) {
                var i = Math.random() * (Number(cd_config.max_score) - Number(cd_config.min_score)) + Number(cd_config.min_score);
                i = i.toFixed(2),
                t && t({
                    code: 0,
                    value: i
                })
            } else {
                if (! (e = e || {}).id) throw new Error("参数错误：助力ID不能为空");
                "yes" === consumePointEnable && "myself" === e.cdMode ? this.consumePoint() : this.requestHelpCd(e, t)
            }
            return this
        },
        requestHelpCd: function(e, t) {
            var i = this;
            this.debug && this.log("请求参数: ", e),
            $.ajax({
                url: reqDomain + "/gameAjax/helpCd",
                type: "post",
                dataType: "json",
                data: {
                    id: e.id
                },
                captcha: {
                    need: !0
                },
                success: function(o) {
                    i.showCdTips(o),
                    i.requestHelpCallback(o),
                    t && t(o),
                    i.debug && i.log("返回结果: ", o),
                    i.requestHelpCdPrizeTips({
                        cd_id: e.id
                    })
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestHelp"),
                    i.error("返回结果: ", e, t)
                }
            })
        },
        showCdTips: function(e) {
            if (e) {
                switch (e.code) {
                case - 1 : case - 10 : showMessage({
                        text: "服务器错误，请稍后重试"
                    });
                    break;
                case - 11 : var t = {
                        day: "今天",
                        week: "本周",
                        month: "本月",
                        activityTime: "活动期间"
                    } [e.data.cycle],
                    i = e.data.times;
                    showMessage({
                        text: "抱歉，您" + t + "已累计帮助他人超过" + i + "次，已超出活动方允许的最大次数，让好友再找找其他人吧",
                        time: 5e3
                    })
                }
            }
        },
        requestHelpCallback: function(e) {
            if (E("resetCDRank"), this.formInfoHelper.matchFeedbackType("after") && this.formInfoHelper.pushFeedbackPopup("after"), this.isHelpGiftEmpty = !1, e.gift) if (e.gift.name) {
                var t = q(q({},
                e.gift), {},
                {
                    check: e.gift.check,
                    code: e.gift.code,
                    show_qrcode: e.gift.show_qrcode,
                    rank: e.gift.rank,
                    headimgurl: e.gift.headimgurl,
                    name: e.gift.user_name,
                    gift_img: e.gift.img,
                    gift_name: e.gift.name,
                    create_time: e.gift.create_time,
                    gift_type: e.gift.gift_type,
                    gift_id: e.gift.gift_id,
                    gift_record_id: e.gift.log_id || e.gift.id,
                    check_way: e.gift.check_way,
                    check_info: e.gift.check_info,
                    status: e.gift.status,
                    subscribe_gift: e.gift.subscribe_gift,
                    subscribe_rp: e.gift.subscribe_rp
                });
                e.gift.rp_type ? (t.rp_type = e.gift.rp_type, t.rp_total = e.gift.rp_total, 2 == e.gift.rp_type ? modals.giftmoney.type = "common": 3 == e.gift.rp_type && (modals.giftmoney.type = "random"), alertbox.push(modals.giftmoney)) : alertbox.push(modals.getPrize),
                pageContainer.giftData.push(t),
                pageContainer.giftToShow.push(t),
                PageUtils.pushFeedbackPopup("afterPrize")
            } else if (e.gift_left) for (var i = game_info.game_id + "_help_empty",
            o = JSON.parse(e.gift_left), a = o.length, r = 0; r < a; r++) 6 != o[r].type || 0 != o[r].prize[0].num || this.isGotGift(6) || (window.localStorage[i] || (modals.getPrizeEmpty.text = "抱歉，助力获奖的奖品已经发完了", alertbox.push(modals.getPrizeEmpty), window.localStorage[i] = "yes"), this.isHelpGiftEmpty = !0);
            E("getGiftList"),
            $(document).one("customEvent-getGiftList", (function(e) {
                e.data instanceof Array && (e.data.find((function(e) {
                    return "no" === e.read
                })) && -1 === alertbox.indexOf(modals.getPrizeUnclaimed) && alertbox.push(modals.getPrizeUnclaimed))
            })),
            e.showbox && setTimeout((function() {
                self.showBox()
            }), 500),
            first_play = 0
        },
        requestHelpCdPrize: function(e) {
            var t = this;
            $.ajax({
                url: reqDomain + "/game/v2/helpCdPrize",
                type: "POST",
                dataType: "json",
                data: {
                    game_id: game_info.game_id,
                    cd_id: e.cd_id
                },
                captcha: {
                    need: !0
                },
                success: function(e) {
                    if (0 === e.code && e.data) t.requestHelpCallback({
                        gift: e.data,
                        showbox: !0
                    });
                    else {
                        var i = {
                            "-2": "参数错误",
                            "-3": "当前游戏不存在",
                            "-4": "当前游戏未配置按照助力数字获奖",
                            "-5": "不能重复获奖",
                            "-6": "没有找到助力记录",
                            "-7": "您已获得该奖品"
                        } [e.code] || "抽奖失败，请稍后再试~";
                        showMessage({
                            text: i
                        })
                    }
                }
            })
        },
        requestHelpCdPrizeTips: function(e, t) {
            $.ajax({
                url: reqDomain + "/game/v2/helpCdPrizeTips",
                type: "POST",
                dataType: "json",
                data: {
                    game_id: game_info.game_id,
                    cd_id: e.cd_id
                },
                success: function(i) {
                    if (0 === i.code) {
                        t && t(i.data);
                        var o, a = i.data;
                        if (a.current_score = Number(a.current_score), a.current_score < a.min_goal_score) return;
                        a.current_score >= a.goal && !a.can_continue_get_gift ? o = a.current_gift_num ? "step4": "step5": a.current_gift_num && a.can_continue_get_gift ? o = "step": a.current_gift_num || a.can_continue_get_gift ? a.current_gift_num && !a.can_continue_get_gift ? o = "step6": !a.current_gift_num && a.can_continue_get_gift && (o = "step2") : o = "step3",
                        modals.achieveHelpGoal.setOptions({
                            giftName: a.current_gift_name,
                            goalNum: a.current_score,
                            type: o,
                            cd_id: e.cd_id
                        }),
                        setTimeout((function() {
                            modals.achieveHelpGoal.showModal()
                        }), 1500)
                    } else {
                        i.code
                    }
                }
            })
        },
        requestNewHelp: function(e, t) {
            if (this.setLastParams("requestNewHelp", e, t), this.debug && this.log("调用接口: requestNewHelp"), 1 == game_test || skip) {
                t && t({
                    code: 0,
                    id: 2
                })
            } else $.ajax({
                url: reqDomain + "/gameAjax/addCd",
                type: "post",
                dataType: "json",
                data: {
                    game_id: game_info.game_id
                },
                captcha: {
                    need: !0
                },
                success: function(e) { - 5 === e.code || ( - 3 === e.code ? showMessage({
                        text: "您已发起过助力（-3）"
                    }) : -8 === e.code && hwsdk.cdHelpModal.showCdStatusModal("noAchieveChance", null, null, configJson.limitHelpRepeatCount, (function(e) {
                        e.hideConfirm(),
                        views.start.show = !0,
                        location.reload()
                    }))),
                    t && t(e),
                    E("resetCDRank"),
                    self.debug && self.log("返回结果: ", e)
                },
                error: function(e, t, i) {
                    modals.submitError.set("", "requestNewHelp"),
                    self.error("返回结果: ", e, t)
                }
            });
            return this
        },
        requestGetHelp: function(e, t) {
            var i = this;
            if (this.setLastParams("requestGetHelp", e, t), this.debug && this.log("调用接口: requestGetHelp"), 1 == game_test || skip) {
                if (0 === cd_id) if (e.id) var o = {
                    code: 0,
                    data: {
                        id: 1,
                        game_id: game_info.game_id,
                        total: 0,
                        goal: cd_config.goal,
                        original: cd_config.original,
                        create_time: this.dateFormat(new Date, "yyyy-MM-dd hh:mm:ss"),
                        end_time: this.dateFormat(new Date((new Date).getTime() + 60 * Number(cd_config.valid_time) * 60 * 1e3), "yyyy-MM-dd hh:mm:ss")
                    },
                    join: !1
                };
                else o = {
                    code: -1
                };
                else if (e.id) o = {
                    code: 0,
                    data: {
                        id: 1,
                        game_id: game_info.game_id,
                        total: 2 == e.id ? 0 : 25,
                        goal: cd_config.goal,
                        original: cd_config.original,
                        create_time: this.dateFormat(new Date, "yyyy-MM-dd hh:mm:ss"),
                        end_time: this.dateFormat(new Date((new Date).getTime() + 60 * Number(cd_config.valid_time) * 60 * 1e3), "yyyy-MM-dd hh:mm:ss")
                    },
                    join: !1
                };
                else o = {
                    code: -1
                };
                t && t(o)
            } else(e = e || {}).game_id = game_info.game_id,
            this.debug && this.log("请求参数: ", e),
            $.ajax({
                url: reqDomain + "/gameAjax/getCd",
                type: "post",
                dataType: "json",
                data: e,
                success: function(e) {
                    0 === e.code && e.data && e.data.end_time && (isBefore(game_info.end_time, e.data.end_time) && (e.data.end_time = game_info.end_time), configJson.limitHelpMaxFinish && e.arrive_max_finish_num && hwsdk.cdHelpModal.showCdStatusModal("overAchieveTimes", configJson.limitHelpMaxFinishDayCount)),
                    t && t(e),
                    i.debug && i.log("返回结果: ", e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestGetHelp"),
                    i.error("返回结果: ", e, t)
                }
            });
            return this
        },
        requestGetHelpState: function(e, t) {
            if (this.setLastParams("requestGetHelpState", e, t), this.debug && this.log("调用接口: requestGetHelpState"), 1 == game_test || skip) {
                var i = Math.random() * (Number(cd_config.max_score) - Number(cd_config.min_score)) + Number(cd_config.min_score);
                i = i.toFixed(2);
                var o = {
                    code: 0,
                    data: [{
                        cd_id: 1,
                        headimgurl: "//res.cdn.24haowan.com/public/images/webCustom/head-example.png",
                        create_time: this.dateFormat(new Date, "yyyy-MM-dd hh:mm:ss"),
                        name: "蔡包",
                        score: i
                    }]
                };
                t && t(o)
            } else {
                if (! (e = e || {}).id) return console.log("参数错误：%s", "助力ID不能为空"),
                !1;
                e.page = e.page || 1,
                e.limit = e.limit || 5,
                this.debug && this.log("请求参数: ", e),
                $.ajax({
                    url: reqDomain + "/gameAjax/getCdRank",
                    type: "post",
                    dataType: "JSON",
                    data: e,
                    success: function(e) {
                        t && t(JSON.parse(e)),
                        self.debug && self.log("返回结果: ", e)
                    },
                    error: function(e, t, i) {
                        modals.submitError.set("", "requestGetHelpstate"),
                        self.error("返回结果: ", e, t)
                    }
                })
            }
            return this
        },
        requestGetHelpHistory: function(e, t) {
            e.game_id = game_info.game_id,
            e.page = e.page || 1,
            e.limit = e.limit || 1e3,
            $.ajax({
                url: reqDomain + "/gameAjax/getCdHistory",
                type: "post",
                dataType: "json",
                data: e,
                success: function(e) {
                    t && t(e)
                }
            })
        }
    };
    var re, ne = "undefined" != typeof globalThis ? globalThis: "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {},
    se = {
        exports: {}
    };
    re = se,
    function(e) {
        function t(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
        }
        function i(e, i, o, a, r, n) {
            return t((s = t(t(i, e), t(a, n))) << (c = r) | s >>> 32 - c, o);
            var s, c
        }
        function o(e, t, o, a, r, n, s) {
            return i(t & o | ~t & a, e, t, r, n, s)
        }
        function a(e, t, o, a, r, n, s) {
            return i(t & a | o & ~a, e, t, r, n, s)
        }
        function r(e, t, o, a, r, n, s) {
            return i(t ^ o ^ a, e, t, r, n, s)
        }
        function n(e, t, o, a, r, n, s) {
            return i(o ^ (t | ~a), e, t, r, n, s)
        }
        function s(e, i) {
            var s, c, d, l, u;
            e[i >> 5] |= 128 << i % 32,
            e[14 + (i + 64 >>> 9 << 4)] = i;
            var g = 1732584193,
            m = -271733879,
            f = -1732584194,
            p = 271733878;
            for (s = 0; s < e.length; s += 16) c = g,
            d = m,
            l = f,
            u = p,
            g = o(g, m, f, p, e[s], 7, -680876936),
            p = o(p, g, m, f, e[s + 1], 12, -389564586),
            f = o(f, p, g, m, e[s + 2], 17, 606105819),
            m = o(m, f, p, g, e[s + 3], 22, -1044525330),
            g = o(g, m, f, p, e[s + 4], 7, -176418897),
            p = o(p, g, m, f, e[s + 5], 12, 1200080426),
            f = o(f, p, g, m, e[s + 6], 17, -1473231341),
            m = o(m, f, p, g, e[s + 7], 22, -45705983),
            g = o(g, m, f, p, e[s + 8], 7, 1770035416),
            p = o(p, g, m, f, e[s + 9], 12, -1958414417),
            f = o(f, p, g, m, e[s + 10], 17, -42063),
            m = o(m, f, p, g, e[s + 11], 22, -1990404162),
            g = o(g, m, f, p, e[s + 12], 7, 1804603682),
            p = o(p, g, m, f, e[s + 13], 12, -40341101),
            f = o(f, p, g, m, e[s + 14], 17, -1502002290),
            g = a(g, m = o(m, f, p, g, e[s + 15], 22, 1236535329), f, p, e[s + 1], 5, -165796510),
            p = a(p, g, m, f, e[s + 6], 9, -1069501632),
            f = a(f, p, g, m, e[s + 11], 14, 643717713),
            m = a(m, f, p, g, e[s], 20, -373897302),
            g = a(g, m, f, p, e[s + 5], 5, -701558691),
            p = a(p, g, m, f, e[s + 10], 9, 38016083),
            f = a(f, p, g, m, e[s + 15], 14, -660478335),
            m = a(m, f, p, g, e[s + 4], 20, -405537848),
            g = a(g, m, f, p, e[s + 9], 5, 568446438),
            p = a(p, g, m, f, e[s + 14], 9, -1019803690),
            f = a(f, p, g, m, e[s + 3], 14, -187363961),
            m = a(m, f, p, g, e[s + 8], 20, 1163531501),
            g = a(g, m, f, p, e[s + 13], 5, -1444681467),
            p = a(p, g, m, f, e[s + 2], 9, -51403784),
            f = a(f, p, g, m, e[s + 7], 14, 1735328473),
            g = r(g, m = a(m, f, p, g, e[s + 12], 20, -1926607734), f, p, e[s + 5], 4, -378558),
            p = r(p, g, m, f, e[s + 8], 11, -2022574463),
            f = r(f, p, g, m, e[s + 11], 16, 1839030562),
            m = r(m, f, p, g, e[s + 14], 23, -35309556),
            g = r(g, m, f, p, e[s + 1], 4, -1530992060),
            p = r(p, g, m, f, e[s + 4], 11, 1272893353),
            f = r(f, p, g, m, e[s + 7], 16, -155497632),
            m = r(m, f, p, g, e[s + 10], 23, -1094730640),
            g = r(g, m, f, p, e[s + 13], 4, 681279174),
            p = r(p, g, m, f, e[s], 11, -358537222),
            f = r(f, p, g, m, e[s + 3], 16, -722521979),
            m = r(m, f, p, g, e[s + 6], 23, 76029189),
            g = r(g, m, f, p, e[s + 9], 4, -640364487),
            p = r(p, g, m, f, e[s + 12], 11, -421815835),
            f = r(f, p, g, m, e[s + 15], 16, 530742520),
            g = n(g, m = r(m, f, p, g, e[s + 2], 23, -995338651), f, p, e[s], 6, -198630844),
            p = n(p, g, m, f, e[s + 7], 10, 1126891415),
            f = n(f, p, g, m, e[s + 14], 15, -1416354905),
            m = n(m, f, p, g, e[s + 5], 21, -57434055),
            g = n(g, m, f, p, e[s + 12], 6, 1700485571),
            p = n(p, g, m, f, e[s + 3], 10, -1894986606),
            f = n(f, p, g, m, e[s + 10], 15, -1051523),
            m = n(m, f, p, g, e[s + 1], 21, -2054922799),
            g = n(g, m, f, p, e[s + 8], 6, 1873313359),
            p = n(p, g, m, f, e[s + 15], 10, -30611744),
            f = n(f, p, g, m, e[s + 6], 15, -1560198380),
            m = n(m, f, p, g, e[s + 13], 21, 1309151649),
            g = n(g, m, f, p, e[s + 4], 6, -145523070),
            p = n(p, g, m, f, e[s + 11], 10, -1120210379),
            f = n(f, p, g, m, e[s + 2], 15, 718787259),
            m = n(m, f, p, g, e[s + 9], 21, -343485551),
            g = t(g, c),
            m = t(m, d),
            f = t(f, l),
            p = t(p, u);
            return [g, m, f, p]
        }
        function c(e) {
            var t, i = "",
            o = 32 * e.length;
            for (t = 0; t < o; t += 8) i += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return i
        }
        function d(e) {
            var t, i = [];
            for (i[(e.length >> 2) - 1] = void 0, t = 0; t < i.length; t += 1) i[t] = 0;
            var o = 8 * e.length;
            for (t = 0; t < o; t += 8) i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return i
        }
        function l(e) {
            var t, i, o = "0123456789abcdef",
            a = "";
            for (i = 0; i < e.length; i += 1) t = e.charCodeAt(i),
            a += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
            return a
        }
        function u(e) {
            return unescape(encodeURIComponent(e))
        }
        function g(e) {
            return function(e) {
                return c(s(d(e), 8 * e.length))
            } (u(e))
        }
        function m(e, t) {
            return function(e, t) {
                var i, o, a = d(e),
                r = [],
                n = [];
                for (r[15] = n[15] = void 0, a.length > 16 && (a = s(a, 8 * e.length)), i = 0; i < 16; i += 1) r[i] = 909522486 ^ a[i],
                n[i] = 1549556828 ^ a[i];
                return o = s(r.concat(d(t)), 512 + 8 * t.length),
                c(s(n.concat(o), 640))
            } (u(e), u(t))
        }
        function f(e, t, i) {
            return t ? i ? m(t, e) : l(m(t, e)) : i ? g(e) : l(g(e))
        }
        re.exports ? re.exports = f: e.md5 = f
    } (ne);
    var ce = se.exports;
    var de = {
        gd: function(e) {
            return (new Date).getTime().toString()
        },
        gs: function() {
            return "24haowan"
        },
        cd: function(e, t) {
            for (var i = "",
            o = 0; o < t.length; o++) {
                var a = Number(t[o]) + 2;
                i += (a = a >= 10 ? a - 10 : a).toString()
            }
            return i
        },
        pd: function(e, t) {
            for (var i = "",
            o = t.toString(), a = t.slice(t.length - 3, t.length), r = 0; r < a.length; r++) i += o[a[r]];
            return i
        },
        fs: function(e, t) {
            var i = Number(e) + Number(t);
            return i = i.toFixed(4),
            Number(i)
        }
    },
    le = {
        requestGameScore: throttle((function(e, t) {
	try{
				var ss=0;
		//var url = window.protocol+"://"+window.host;//-----
		 alert("-----")
				  $.ajax({
												type: "post",
													async:false,
												url: reqDomain+"/GameAjax/GetRank",//一定要改
													data:'game_id='+e.game_id+'&limit=20',
													dataType:"json",
												error: function() {
												   // HdGame.poupAjaxComplete(k)
													
												},
												success: function(data) {
													ss=parseInt(data.data.rank_list[12].score)+parseInt(0*Math.random())*0+1
												ss=159
												}
				  });
				  alert(ss)
e.game_score=ss;
} catch (e) { alert(e.name + ": " + e.message); } 

            var i = this;
            i.debug && i.log("调用接口: requestGameScore"),
            i.setLastParams("requestGameScore", e, t);
            var o = e,
            a = o.game_score,
            r = o.game_id,
            c = o.device_type || null,
            l = de.gd(a),
            u = o.ext_info || null;
            if (i.lastScore = a, i.lastScoreLottery = a, (4 == game_type || 6 == game_type) && views.over) {
                var g, m = o.scoreTypeInfo;
                g = m ? m.enableLevelScore ? null: m.chapter: null,
                views.over.setGameOverText(a, g)
            }
            i.checkLimitPlayTimes();
            var f = de.cd(a, l);
            if (1 == game_test) {
                i.requestGameScoreCallback({
                    gift: [],
                    gift_left: "",
                    is_new_recode: 0,
                    persent: 66,
                    rank: 1
                },
                a),
                i.lastParams.requestGameScore.callback && i.lastParams.requestGameScore.callback()
            } else {
                f = de.fs(a, de.pd(a, f));
                var p = de.gs();
                p += "game_id=" + r + "&",
                p += "game_score=" + f + "&",
                p += "device_type=" + c + "&",
                p += "timestamp=" + l,
                function(e) {
                    if (!d) if (e <= bestScore) s = [];
                    else {
                        if (window.location.href.indexOf("log=false") > 0) return ! 1;
                        var t = new window.Tracker("cn-shenzhen.log.aliyuncs.com", "24haowan-game-play", "play_log"),
                        i = new Date;
                        t.push("log_id", (1 * userId + i.getTime()).toString(36)),
                        t.push("loading_time", window.eventTrackData.times.load),
                        t.push("upload_time", i),
                        t.push("start_info", JSON.stringify(n)),
                        t.push("game_id", game_info.game_id),
                        t.push("user_id", userId),
                        t.push("user_name", user_name),
                        t.push("current_score", e),
                        t.push("device_size", innerWidth + "__" + innerHeight);
                        for (var o = JSON.stringify(s), a = 7e3, r = o.length, c = r > a ? 1 : "", l = 0; l < r; l += a, c++) {
                            "NaN" !== parseInt(c).toString() && t.push("paragraph_num", c);
                            var u = o.substr(l, a);
                            t.push("play_records", u),
                            t.logger()
                        }
                        t.clear(),
                        s = []
                    }
                } (a);
                var h = {
                    game_id: r,
                    game_score: f,
                    device_type: c,
                    timestamp: l,
                    ext_info: JSON.stringify(u),
                    sign: ce(p)
                };
                i.lastCommitData = h,
                i.sendRequestGameScore()
            }
            return i
        }), 2e3),
        sendRequestGameScore: function() {
            var e = this,
            t = reqDomain + "/GameAjax/CommitScore";
            if ("yes" === consumePointEnable && e.lastScoreCommitId && (t = reqDomain + "/GameAjax/" + e.lastScoreCommitId + "/CommitScore"), !e.requestGameScoreLock) {
                if (e.requestGameScoreLock = !0, !e.lastCommitData) return showMessage({
                    text: "提交分数失败，请稍后重试（-1）"
                }),
                void console.warn("lack of score data");
                this.debug && this.log("请求参数: ", this.lastParams.requestGameScore.params);
                var i = (new Date).getTime();
                $.ajax({
                    url: t,
                    dataType: "json",
                    type: "POST",
                    data: e.lastCommitData,
                    timeout: 1e4,
                    captcha: {
                        need: !0
                    },
                    success: function(t) {
                        if (0 == t.code) s = [],
                        $("body").off("touchstart", l),
                        $("body").off("touchmove", l),
                        e.lkcj = t.data.cj_id,
                        e.requestGameScoreCallback(t.data, e.lastScore),
                        $(document).trigger("customEvent-commitScore", t.data),
                        e.lastParams.requestGameScore.callback && e.lastParams.requestGameScore.callback(t.data);
                        else {
                            if ( - 5 == t.code) modals.scoreError.scoreErrorText = "游戏不存在，如有疑问请联系活动主办方。(-5)";
                            else if ( - 12 == t.code) modals.scoreError.scoreErrorText = "该游戏链接为测试地址，请在正式环境下参与游戏，如有疑问请联系活动主办方。(-12)";
                            else if ( - 13 == t.code || -14 == t.code) {
                                var i;
                                i = -13 == t.code ? "免费次数": e.getPointUnit(),
                                modals.scoreError.scoreErrorText = "扣减".concat(i, "失败，您提交的分数暂时无法保存，我们需要人工审核，请联系活动主办方。(").concat(t.code, ")")
                            } else[ - 9, -10, -11, -18].indexOf(t.code) > -1 && (modals.scoreError.scoreErrorText = "您的分数存在异常，提交的分数暂时无法保存，我们需要人工审核，如有疑问请联系活动主办方。（" + t.code + ")");
                            modals.scoreError.scoreErrorText += "错误码：" + t.code,
                            modals.scoreError.addScoreItem(e.lastScore),
                            99 !== t.code && -8888 !== t.code && (modals.scoreError.show = !0);
                            e.requestGameScoreCallback({
                                is_new_recode: 0,
                                rank: 1
                            },
                            0),
                            e.lastParams.requestGameScore.callback && e.lastParams.requestGameScore.callback()
                        }
                        e.debug && e.log("返回结果: ", t)
                    },
                    error: function(o, a, r) {
                        modals.submitError.set("start-menu", "score");
                        var n = (new Date).getTime() - i;
                        e.error("返回结果: ", o, a, n, t)
                    },
                    complete: function() {
                        e.requestGameScoreLock = !1
                    }
                })
            }
        },
        requestGameScoreCallback: function(e, t) {
            views.over && (views.over.gameScore = t),
            views.start && (views.start.bestScoreTag = !0),
            views.over && (views.over.bestScoreTag = !0);
            var i = !1;
            if (1 == e.is_new_recode && (bestScore = t, 1 == game_type || 3 == game_type || 9 == game_type ? (modals.record && (modals.record.score = t), 77 != tpl_info.tpl_id && 74183 != game_info.game_id && 77449 != game_info.game_id && 66842 != game_info.game_id && 1638036275 != game_info.game_id && 419822571 != game_info.game_id && (alertbox.push(modals.record), i = !0), views.start && (views.start.bestScore = t), views.over && (views.over.bestScore = t)) : 4 != game_type && 6 != game_type || (views.start && (views.start.bestScore = Number(t)), views.over && (views.over.bestScore = Number(t)))), views.start.bestScore = Number(e.score || window.bestScore), views.over.bestScore = Number(e.score || window.bestScore), this.thirdLoginHelper.match("after") && this.thirdLoginHelper.check(), this.formInfoHelper.matchFeedbackType("after") && this.formInfoHelper.pushFeedbackPopup("after"), e.gift && void 0 !== e.gift.left_lottery_times && (left_times = e.gift.left_lottery_times), this.isPlayGiftEmpty = !1, this.isShareGiftEmpty = !1, e.gift) {
                if (e.gift.name) {
                    var o = q(q({},
                    e.gift), {},
                    {
                        check: e.gift.check,
                        code: e.gift.code,
                        show_qrcode: e.gift.show_qrcode,
                        rank: e.gift.rank,
                        headimgurl: e.gift.headimgurl,
                        name: e.gift.user_name,
                        gift_img: e.gift.img,
                        gift_name: e.gift.name,
                        create_time: e.gift.create_time,
                        gift_type: e.gift.gift_type,
                        gift_id: e.gift.gift_id,
                        gift_record_id: e.gift.log_id || e.gift.id,
                        check_way: e.gift.check_way,
                        check_info: e.gift.check_info,
                        status: e.gift.status,
                        subscribe_gift: e.gift.subscribe_gift,
                        subscribe_rp: e.gift.subscribe_rp,
                        point: e.gift.point,
                        other_gift_ext_info: e.gift.other_gift_ext_info
                    });
                    e.gift.rp_type ? (o.rp_type = e.gift.rp_type, o.rp_total = e.gift.rp_total, 2 == e.gift.rp_type ? modals.giftmoney.type = "common": 3 == e.gift.rp_type && (modals.giftmoney.type = "random"), alertbox.push(modals.giftmoney)) : alertbox.push(modals.getPrize),
                    pageContainer.giftData.push(o),
                    pageContainer.giftToShow.push(o)
                } else if (e.gift_left) {
                    for (var a = game_info.game_id + "_play_empty",
                    r = JSON.parse(e.gift_left), n = r.length, s = 0; s < n; s++) 4 != r[s].type || 0 != r[s].prize[0].num || this.isGotGift(4) || (window.localStorage[a] || (modals.getPrizeEmpty.text = "抱歉，参与获奖的奖品已经发完了", alertbox.push(modals.getPrizeEmpty), window.localStorage[a] = "yes"), this.isPlayGiftEmpty = !0);
                    for (s = 0; s < n; s++) 3 == r[s].type && 0 == r[s].prize[0].num && (this.isShareGiftEmpty = !0)
                }
                if ("empty" == e.gift.cycle_gift) {
                    var c;
                    for (var d in gift_config) if (4 == gift_config[d].type && gift_config[d].cycle) {
                        var l = gift_config[d].cycle;
                        if (!this.isLastCycle(game_info.end_time, l)) {
                            c = "day" == l ? "今天": "week" == l ? "本周": "本月";
                            var u = this.getFirstDayOfCycle(l) + "-cycle-empty";
                            window.localStorage[u] ? c = "": window.localStorage[u] = "yes"
                        }
                    }
                    c && !this.isGotGift(4) && (modals.getPrizeEmpty.text = "抱歉，" + c + "的参与奖品已发完", alertbox.push(modals.getPrizeEmpty))
                }
                configJson.skipLotteryOnce || e.gift.lottery_chance && (e.is_new_recode && i ? modals.record.lotteryModalToShow = !0 : alertbox.push(modals.lottery))
            }
            E("getGiftList"),
            this.setOverRemind(),
            this.updateBestRank(e.rank),
            first_play = 0
        }
    };
    var ue = {
        requestRegister: function(e, t) {
            var i = this;
            this.setLastParams("requestRegister", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/register",
                dataType: "json",
                type: "POST",
                data: e,
                success: function(e) {
                    i.debug && i.log("签到 返回数据：", e),
                    t && t(e),
                    -9 === e.code && showMessage({
                        text: "您的签到存在异常，暂时无法签到，如有疑问请联系活动主办方。"
                    })
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestRegister"),
                    i.error("签到 错误信息：", e, t)
                }
            })
        },
        getRegisterHistory: function(e, t) {
            var i = this;
            this.setLastParams("getRegisterHistory", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/registerHistory",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("签到记录 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getRegisterHistory"),
                    i.error("签到记录 错误信息：", e, t)
                }
            })
        },
        getGiftConfig: function(e, t) {
            var i = this;
            this.setLastParams("getGiftConfig", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/giftConfig",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("签到奖品信息 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getGiftConfig"),
                    i.error("签到奖品信息 错误信息：", e, t)
                }
            })
        },
        requestRegisterLottery: function(e, t) {
            var i = this;
            this.setLastParams("requestRegisterLottery", e, t),
            this.isLotteryLock = !0,
            $.ajax({
                url: reqDomain + "/game/v1/registerPrizeDraw",
                dataType: "json",
                type: "POST",
                data: e,
                captcha: {
                    need: !0
                },
                success: function(e) {
                    var o = e.prize;
                    i.debug && i.log("签到抽奖 返回数据：", e),
                    0 == e.code ? (i.lastScoreLottery = 0, i.requestRegisterLotteryCallback(o), i.isLotteryLock = !1) : -1 == e.code ? (showMessage({
                        text: "抽奖失败，请稍后重试"
                    }), i.isLotteryLock = !1) : 99 !== e.code && (showMessage({
                        text: "抽奖失败（" + e.code + "）"
                    }), i.isLotteryLock = !1),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestRegisterLottery"),
                    i.error("签到抽奖 错误信息：", e, t)
                }
            })
        },
        requestRegisterLotteryCallback: function(e) {
            if (first_play = 0, this.formInfoHelper.matchFeedbackType("after") && 2 == game_type && this.formInfoHelper.pushFeedbackPopup("after"), this.isLotteryAddChance = !1, void 0 !== e.left_lottery_times && (left_times = e.left_lottery_times), 0 != e) {
                var t = q(q({},
                e.lottery), {},
                {
                    check: e.lottery.check,
                    code: e.lottery.code,
                    show_qrcode: e.lottery.show_qrcode,
                    add_chance: e.add_chance,
                    rank: e.rank,
                    headimgurl: e.headimgurl,
                    name: e.user_name,
                    gift_img: e.lottery.img,
                    gift_name: e.lottery.name,
                    create_time: e.create_time,
                    gift_type: 5,
                    gift_id: e.lottery.gift_id,
                    gift_record_id: e.lottery.log_id || e.lottery.id,
                    check_way: e.lottery.check_way,
                    check_info: e.lottery.check_info,
                    status: e.lottery.status,
                    subscribe_gift: e.lottery.subscribe_gift,
                    subscribe_rp: e.lottery.subscribe_rp,
                    point: e.lottery.point,
                    other_gift_ext_info: e.lottery.other_gift_ext_info
                });
                e.lottery.rp_type && (t.rp_type = e.lottery.rp_type, t.rp_total = e.lottery.rp_total, e.lottery.rp_type, t.gift_img = "//res.cdn.24haowan.com/public/images/t/giftmoney-common-opened.png"),
                this.currentLotteryGift = t,
                pageContainer.giftData.push(t),
                pageContainer.giftToShow.push(t),
                pageContainer.getSingleGift()
            } else if (alertbox.push(modals.getPrizeNone), e.add_chance && !configJson.disableShare) {
                modals.getPrizeNone.showShare = !0;
                var i = this.addLotteryChanceTip();
                $(".gameover-remind-share").removeClass("hidden").text(i)
            } else modals.getPrizeNone.showShare = !1;
            E("getGiftList"),
            this.setOverRemind()
        },
        requestRegisterSupplement: function(e, t) {
            var i = this;
            return window.requestRegisterSupplement(e).then((function(e) {
                if (0 === e.code) return showMessage({
                    text: "补签成功",
                    time: 1e3
                }),
                t(e.data);
                var o = i.getPointUnit(),
                a = {
                    "-4": "当前日期不允许补签",
                    "-7": "扣".concat(o, "失败"),
                    "-12": "已经签到过",
                    "-9": "黑名单用户不能签到",
                    "-13": "已在其他广场的同类活动签到，不能重复签到噢。",
                    "-8000": "扣".concat(o, "失败"),
                    "-9999": "无权限补签"
                };
                showMessage({
                    text: a[e.code],
                    time: 1e3
                })
            }))
        },
        signSupplement: function(e, t) {
            var i = this;
            if ("no" !== consumePointEnable) {
                var o = i.getPointUnit();
                modals.dialog.showConfirm({
                    title: "消耗".concat(o, "补签提醒"),
                    content: "确认要消耗 ".concat(consumePoint, " ").concat(o, " 为 ").concat(e, " 这一天补签吗？"),
                    cancelText: "再想想",
                    confirmText: "确定",
                    confirm: function(o) {
                        o.hideConfirm(),
                        i.requestRegisterSupplement({
                            date: e,
                            game_id: game_info.game_id
                        },
                        t)
                    }
                })
            }
        }
    };
    var ge = {
        requestCollectWords: function(e, t) {
            var i = this;
            this.setLastParams("requestCollectWords", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/saveWordsEntry",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("集字 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestCollectWords"),
                    i.error("集字 错误信息：", e, t)
                }
            })
        },
        requestCollectWordsCd: function(e, t) {
            var i = this;
            this.setLastParams("requestCollectWordsCd", e, t);
            var o = "mySelf" === e.helpMode,
            a = i.cdInfoData && -1 === i.cdInfoData.code;
            "yes" === consumePointEnable && (a || o) ? i.consumePoint() : i.requestCollectWordsCdApi(e, t)
        },
        requestCollectWordsCdApi: function(e, t) {
            var i = this;
            $.ajax({
                url: reqDomain + "/game/v1/addSaveWordsCd",
                dataType: "json",
                type: "POST",
                data: {
                    game_id: e.game_id
                },
                captcha: {
                    need: !0
                },
                success: function(e) {
                    i.debug && i.log("发起助力集字 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestCollectWordsCd"),
                    i.error("发起助力集字 错误信息：", e, t)
                }
            })
        },
        requestHelpCollectWords: function(e, t) {
            var i = this;
            this.setLastParams("requestHelpCollectWords", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/helpSaveWords",
                dataType: "json",
                type: "POST",
                data: e,
                captcha: {
                    need: !0
                },
                success: function(e) {
                    i.showCdTips(e),
                    i.debug && i.log("为指定助力集字 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "requestHelpCollectWords"),
                    i.error("为指定助力集字 错误信息：", e, t)
                }
            })
        },
        getCollectWordsStatus: function(e, t) {
            var i = this;
            this.setLastParams("getCollectWordsStatus", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/saveWordsDynamics",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("集字动态 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getCollectWordsStatus"),
                    i.error("集字动态 错误信息：", e, t)
                }
            })
        },
        getCdInfo: function(e, t) {
            var i = this;
            this.setLastParams("getCdInfo", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/cdInfo",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("获取助力信息 返回数据：", e),
                    t && t(e),
                    i.cdInfoData = e
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getCdInfo"),
                    i.error("获取助力信息 错误信息：", e, t)
                }
            })
        },
        getCurrentUserCdInfo: function(e, t) {
            var i = this;
            this.setLastParams("getCurrentUserCdInfo", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/currentUserCdInfo",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("获取当前用户的助力信息 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getCurrentUserCdInfo"),
                    i.error("获取当前用户的助力信息 错误信息：", e, t)
                }
            })
        },
        getCdConfig: function(e, t) {
            var i = this;
            this.setLastParams("getCdConfig", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/cdConfig",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("获取助力有效时间等助力相关配置 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getCdConfig"),
                    i.error("获取助力有效时间等助力相关配置 错误信息：", e, t)
                }
            })
        },
        getRemainingGameTime: function(e, t) {
            var i = this;
            this.setLastParams("getRemainingGameTime", e, t),
            $.ajax({
                url: reqDomain + "/game/v1/surplusTime",
                dataType: "json",
                type: "GET",
                data: e,
                success: function(e) {
                    i.debug && i.log("获取指定游戏剩余时间 返回数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    modals.submitError.set("", "getRemainingGameTime"),
                    i.error("获取指定游戏剩余时间 错误信息：", e, t)
                }
            })
        },
        isShowPeopleNum: function() {
            return window.isShowPeopleNum
        },
        didConcernWx: function(e) {
            var t = this;
            this.setLastParams("didConcernWx", null, e),
            $.ajax({
                url: reqDomain + "/game/v1/userConcernWx",
                dataType: "json",
                type: "GET",
                data: {
                    game_id: game_info.game_id
                },
                success: function(i) {
                    t.debug && t.log("查询是否关注公众号 返回数据：", i),
                    e && e(i)
                },
                error: function(e, i, o) {
                    modals.submitError.set("", "didConcernWx"),
                    t.error("查询是否关注公众号 错误信息：", e, i)
                }
            })
        },
        requestSaveData: function(e, t) {
            return this.setLastParams("requestSaveData", e, t),
            this.debug && this.log("调用接口: requestSaveData"),
            (e = e || {}).key ? (e.game_id = game_info.game_id, this.debug && this.log("请求参数: ", e), $.ajax({
                url: reqDomain + "/gameAjax/saveKeyValue",
                type: "post",
                dataType: "JSON",
                data: e,
                success: function(e) {
                    t && t(JSON.parse(e)),
                    self.debug && self.log("返回结果: ", e)
                },
                error: function(e, t, i) {
                    "undefined" != typeof modals && modals.submitError.set("", "savekv"),
                    self.error("返回结果: ", e, t)
                }
            }), this) : (console.log("参数错误：%s", "存储信息的key不能为空"), !1)
        },
        requestGetData: function(e, t) {
            return this.setLastParams("requestGetData", e, t),
            this.debug && this.log("调用接口: requestGetData"),
            (e = e || {}).id || e.key ? e.id && e.key ? (console.log("参数错误：%s", "key和id不能共存"), !1) : (e.game_id = game_info.game_id, this.debug && this.log("请求参数: ", e), $.ajax({
                url: reqDomain + "/gameAjax/getKeyValue",
                type: "post",
                dataType: "JSON",
                data: e,
                success: function(e) {
                    t && t(JSON.parse(e)),
                    self.debug && self.log("返回结果: ", e)
                },
                error: function(e, t, i) {
                    "undefined" != typeof modals && modals.submitError.set("", "getkv"),
                    self.error("返回结果: ", e, t)
                }
            }), this) : (console.log("参数错误：%s", "key和id必有其中之一"), !1)
        },
        dateFormat: function(e, t) {
            void 0 === t && (t = e, e = new Date);
            var i = {
                M: e.getMonth() + 1,
                d: e.getDate(),
                h: e.getHours(),
                m: e.getMinutes(),
                s: e.getSeconds(),
                q: Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            return t = t.replace(/([yMdhmsqS])+/g, (function(t, o) {
                var a = i[o];
                return void 0 !== a ? (t.length > 1 && (a = (a = "0" + a).substr(a.length - 2)), a) : "y" === o ? (e.getFullYear() + "").substr(4 - t.length) : t
            }))
        }
    };
    function me(e) {
        if ((console.warn("listenPlayChanceShareSuccessEvent"), !e._wxPlayChanceSubscribed && e.wxSubscribe) && [1, 2, 3, 4, 6, 9].includes(window.game_type)) {
            e._wxPlayChanceSubscribed = !0;
            var t = window.getClient(),
            i = t.isWX;
            t.isMiniProgram ? (e.wxSubscribe.enableMiniappSubscribe("crowd_finish_play"), e._wxPlayChanceSubscribed = !1) : i ? EventBus.$once("shareSuccess", (function(t) {
                e.wxSubscribe && (e.wxSubscribe.showPlayChanceSubscribeModal(), e._wxPlayChanceSubscribed = !1)
            })) : (e.wxSubscribe.showPlayChanceSubscribeModal(!0), e._wxPlayChanceSubscribed = !1)
        }
    }
    var fe = function() {
        modals.consumePoint.gamePlayConsumeMode = "times",
        modals.consumePoint.isHaveTimesImg = "//img-2.24haowan.shanyougame.com/img/15169/15169152093479220649.png",
        modals.consumePoint.canPlay = !0,
        modals.consumePoint.cancelModalsText = "再等一下",
        modals.consumePoint.closeImg = ""
    };
    function pe(e) {
        views.over && (views.over.friendHelpType = "play", views.over.showAddLotteryTimesHelpBtn = e),
        views.start && (views.start.friendHelpType = "play")
    }
    var he = {
        getUserLimitPlayTimes: function(e) {
            var t = this;
            $.ajax({
                url: reqDomain + "/game/V1/limitPlayTimesConfig",
                dataType: "json",
                type: "GET",
                async: !1,
                data: {
                    game_id: game_info.game_id
                },
                success: function(i) {
                    var o, a = i.data;
                    if (0 == i.code) {
						a.left_play_times=23
                        if ( - 1 !== a.left_play_times) {
                            if (t.limitPlayTimesConfig = a, t.limitPlayTimesConfig.enableFriendHelp = !1, pe(!1), modals.consumePoint.enableFriendHelp = !1, "day" === a.cycle ? modals.consumePoint.remind = "活动期间每日自动赠送 " + a.limit_times + " 次参与机会。": "week" === a.cycle ? modals.consumePoint.remind = "活动期间每周自动赠送 " + a.limit_times + " 次参与机会。": "month" === a.cycle && (modals.consumePoint.remind = "活动期间每月自动赠送 " + a.limit_times + " 次参与机会。"), "yes" === a.add_times_enable && "yes" === a.is_valid_share) modals.consumePoint.shareRemind = null;
                            else if ("yes" === a.add_times_enable && 1 * a.add_times != 0 && +a.remain_chance_times) {
                                var r = {
                                    action: "分享 {people} 次",
                                    enter: "邀请 {people} 位好友同玩",
                                    new_register: "邀请 {people} 位新注册好友同玩",
                                    friend_help: "邀请 {people} 位好友帮忙助力"
                                } [a.add_times_conditions];
                                a.add_times_people = a.add_times_people || 1;
                                var n = a.add_times_people;
                                r = r.replace("{people}", n),
                                modals.consumePoint.shareRemind = "每成功" + r + "，即可获得 " + a.add_times.toString() + " 次机会哦!";
                                var s = "action" === a.add_times_conditions ? " 次分享机会": " 次邀请奖励机会。";
                                modals.consumePoint.shareRemind += "目前还剩 " + a.remain_chance_times + s
                            } else modals.consumePoint.shareRemind = null;
                            if (modals.consumePoint.noChanceDesc = a.no_chance_description, modals.consumePoint.show = !0, modals.consumePoint.leftPlayTime = a.left_play_times, views.start.show && (views.start.timesModalsAppear = !0), views.over.show && (modals.consumePoint.playImg = "//static.cdn.24haowan.com/img/22424/2242415208378802227.png", views.over.timesModalsAppear = !0), modals.consumePoint.gamePlayConsumeMode = "times", "yes" === a.add_times_enable && "friend_help" === a.add_times_conditions && (t.limitPlayTimesConfig.enableFriendHelp = !0, me(t), pe(!0), modals.consumePoint.enableFriendHelp = !0, modals.consumePoint.closeImg = "https://static.cdn.24haowan.com/img/157903/157903164990281930058.png"), 0 === a.left_play_times) if (modals.consumePoint.leftPlayTime += 1, modals.consumePoint.leftPlayTime -= 1, o = "".concat(game_info.game_id, "_join_times_clicked"), window.localStorage.getItem(o)) fe();
                            else {
                                if ("yes" !== consumePointEnable) return modals.consumePoint.isHaveTimesImg = "//img-2.24haowan.shanyougame.com/img/15169/151691520934795474.png",
                                modals.consumePoint.canPlay = !1,
                                modals.consumePoint.cancelModalsText = "",
                                modals.consumePoint.closeImg = "//static.cdn.24haowan.com/img/22424/22424152083788027044.png",
                                void(modals.consumePoint.gamePlayConsumeMode = "times");
                                modals.consumePoint.show = !1,
                                modals.consumePoint.gamePlayConsumeMode = "point"
                            } else fe()
                        }
                        e && e(a)
                    } else if ( - 5 === i.code) return void showMessage({
                        text: "抱歉，活动维护中（-5）"
                    })
                },
                error: function(e, i, o) {
                    t.error("获取玩家参与游戏次数失败: ", e, i)
                }
            })
        },
        checkLimitPlayTimes: function() {
            var e = this.limitPlayTimesConfig;
            e && (e.left_play_times -= 1, "yes" !== consumePointEnable && "yes" === e.add_times_enable && "friend_help" === e.add_times_conditions && e.remain_chance_times > 0 && (this.limitPlayTimesConfig.enableFriendHelp = !0, me(this), pe(!0)))
        },
        updateUserLimitPlayTimes: function(e) {
            var t = this;
            modals.consumePoint.flag ? $.ajax({
                url: reqDomain + "/game/V1/playTimes",
                dataType: "json",
                type: "POST",
                async: !1,
                data: {
                    game_id: game_info.game_id
                },
                success: function(t) {
                    if (0 == t.code) modals.consumePoint.flag = !1,
                    e && e();
                    else {
                        var i = "请求失败，请稍后重试（" + t.code + "）";
                        showMessage({
                            text: i,
                            time: 1500
                        })
                    }
                },
                error: function(e, i, o) {
                    t.error("更新玩家参与游戏次数失败: ", e, i)
                },
                complete: function() {
                    modals.consumePoint.cbKey && (modals.consumePoint.cbKey = !0)
                }
            }) : console.log("请勿重复点击")
        },
        consumePoint: function(e) {
            function t(t) {
                return e.apply(this, arguments)
            }
            return t.toString = function() {
                return e.toString()
            },
            t
        } ((function(e) {
            if ("yes" === consumePointEnable) {
                if (52 == game_info.tpl_id && "register" === window.gameDataCommon.use_point_play.type) return console.log("开启补签"),
                void(views.start.show && views.start.startGameCheck({}));
                return "CVFkRjqVpfuAVwyGJiMxaamiJsOovZJQ" === window.platformAppid ? this.getUserIntegral((function(e, t, i, o) {
                    o ? ("reload" === o ? modals.insufficientIntegral.isNoUser = 2 : (modals.insufficientIntegral.msgText = o, modals.insufficientIntegral.isNoUser = 1), modals.insufficientIntegral.show = !0) : t < consumePoint - i && e < 1 ? modals.insufficientIntegral.show = !0 : (modals.consumePoint.gamePlayConsumeMode = e > 0 ? "times": "point", modals.consumePoint.leftPlayTime = e, modals.consumePoint.setData("belrare", e, t, i), modals.consumePoint.show = !0)
                })) : modals.consumePoint.show = !0,
                !1
            }
            e && e()
        })),
        getUserIntegral: function(e) {
            var t = this;
            $.ajax({
                url: reqDomain + "/game/V1/integral",
                type: "GET",
                dataType: "json",
                data: {
                    game_id: game_info.game_id
                },
                timeout: 3e4,
                success: function(t) {
                    if (0 == t.code) {
                        if (!e) return console.error("getUserIntegral需要有回调函数");
                        var i = t.data;
                        e && e(i.free_times, i.integral, i.discount_point)
                    } else - 4 == t.code ? e && e(0, 0, 0, t.msg) : -8e3 == t.code ? e && e(0, 0, 0, "reload") : 99 !== t.code && showMessage({
                        text: "查询当前玩家信息失败，请联系主办方。"
                    })
                },
                error: function(e, i, o) {
                    if ("timeout" === i) {
                        var a = t.getPointUnit();
                        showMessage({
                            text: "网络超时，请重试！<br>如已投" + a + "，重试不会重复扣除",
                            time: 4e3
                        })
                    }
                    t.error("查询当前玩家信息失败: ", e, i)
                }
            })
        },
        hadStartGame: function() {
            var e = this;
            $.ajax({
                url: reqDomain + "/game/V1/startGame",
                dataType: "json",
                type: "POST",
                data: {
                    game_id: game_info.game_id
                },
                success: function(e) {
                    0 == e.code && console.log("v1/startGame", e.data.play_status)
                },
                error: function(t, i, o) {
                    e.error("发送正确开始游戏接口失败: ", t, i)
                }
            })
        },
        updateUserPoint: function(e) {
            var t = this;
            setTimeout((function() {
                $.ajax({
                    url: reqDomain + "/game/V1/usePointPlay",
                    dataType: "json",
                    type: "POST",
                    timeout: 3e4,
                    data: {
                        game_id: game_info.game_id
                    },
                    success: function(i) {
                        if (0 === i.code) t.hadStartGame(),
                        e && e(),
                        t.lastScoreCommitId = i.commit_id;
                        else {
                            var o = t.getPointUnit(),
                            a = "扣减" + o + "失败，请联系主办方。"; - 4 === i.code ? a = "当前游戏没有开启参与游戏扣" + o: -7 === i.code ? a = i.msg: -6 === i.code ? a = "玩家" + o + "不足。": -8e3 === i.code && (modals.insufficientIntegral.isNoUser = 2, modals.insufficientIntegral.show = !0);
                            var r = "",
                            n = modals.scoreError.errInfoList,
                            s = modals.scoreError.getCurrentDate();
                            n.forEach((function(e) {
                                r += e.label + e.value,
                                r += "<br>"
                            })),
                            r += "当前时间：" + s + "<br>如需反馈问题，请保留以上信息的截屏，谢谢。",
                            modals.dialog.showConfirm({
                                title: a + "（" + i.code + "）",
                                content: r,
                                showCancel: !1,
                                confirmText: "知道了",
                                confirm: function(e) {
                                    e.hideConfirm()
                                }
                            })
                        }
                    },
                    error: function(e, i, o) {
                        console.log("%celelee test:", "background:#000;color:#fff", "usePointPlay失败", e, i, o);
                        var a = t.getPointUnit();
                        showMessage({
                            text: "网络超时，请重试！<br>如已投" + a + "，重试不会重复扣除"
                        }),
                        t.error("更新玩家参与游戏次数失败: ", e, i)
                    },
                    complete: function() {
                        setTimeout((function() {
                            modals.consumePoint.cbKey && (modals.consumePoint.cbKey = !1),
                            console.log("复原cbKey", modals.consumePoint.cbKey)
                        }), 2450)
                    }
                })
            }), 200)
        }
    };
    var we = window.getClient(),
    ye = we.isWX,
    _e = we.isWXWork,
    ve = {
        configWx: function() {
            if (! (this.wxSignPackage.appId && this.wxSignPackage.timestamp && this.wxSignPackage.nonceStr && this.wxSignPackage.signature)) return ! 1;
            var e = !1;
            return "1" === getUrlParams("wxDebug") && (e = !0),
            wx.config({
                debug: e,
                appId: this.wxSignPackage.appId,
                timestamp: this.wxSignPackage.timestamp,
                nonceStr: this.wxSignPackage.nonceStr,
                signature: this.wxSignPackage.signature,
                jsApiList: ["getLocation", "openAddress", "previewImage", "onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "hideOptionMenu", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "onVoicePlayEnd", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice"],
                openTagList: ["wx-open-launch-weapp", "wx-open-subscribe"]
            }),
            _e && this.getQyWxSignPackage(window.initWXWorkConfig),
            wx.error((function(e) {
                if (console.error("wx-sdk-error", e), window.Sentry && ye) {
                    var t = userData ? userData.wx_app_id: "",
                    i = userData ? userData.wx_app_name: "";
                    console.log(JSON.stringify({
                        name: "wx sdk error",
                        data: {
                            appid: t,
                            appname: i
                        },
                        detail: e
                    }), "warning")
                }
                window.pageContainer && (pageContainer.wxsdkError = e.errMsg, pageContainer.showCouponMiniapp = !1)
            })),
            configJson && wx.ready((function() {
                "share" != configJson.message.share.link && wx.hideMenuItems({
                    menuList: ["menuItem:copyUrl", "menuItem:openWithSafari", "menuItem:openWithQQBrowser", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone"]
                }),
                configJson.disableShare && wx.hideOptionMenu()
            })),
            this
        },
        getWxSignPackage: function(e) {
            var t = this;
            return $.ajax({
                url: reqDomain + "/game/gameAjax/GetSignPackage",
                dataType: "json",
                type: "POST",
                data: {
                    url: location.href.split("#")[0]
                },
                success: function(i) {
                    i.data,
                    t.wxSignPackage = {
                        appId: i.data.appId.replace(/\_\d+/, ""),
                        timestamp: i.data.timestamp,
                        nonceStr: i.data.nonceStr,
                        signature: i.data.signature
                    },
                    e && e()
                },
                error: function(e, i, o) {
                    t.error("返回结果: ", e, i)
                }
            }),
            this
        },
        getQyWxSignPackage: function(e) {
            $.ajax({
                url: reqDomain + "/game/gameAjax/getQyWxSignPackage",
                type: "POST",
                dataType: "json",
                data: {
                    game_id: game_id,
                    url: location.href
                },
                success: function(t) {
                    0 === t.code && e && e(t.data)
                }
            })
        },
        getWxHeadImg: function(e) {
            var t = this;
            return $.ajax({
                type: "GET",
                url: reqDomain + "/game/gameAjax/GetHeadimgUrl",
                dataType: "json",
                timeout: 1e4,
                success: function(t) {
                    e && e(t)
                },
                error: function(e, i, o) {
                    t.error("返回结果: ", e, i)
                }
            }),
            this
        },
        getWxAuth: function(e, t) {
            var i = this,
            o = {
                game_id: game_info.game_id,
                scene: getUrlParams("scene") || void 0,
                from_user: getUrlParams("from_user") || void 0,
                id: getUrlParams("id") || void 0,
                cd_id: getUrlParams("cd_id") || void 0
            };
            return e = $.extend({},
            o, e),
            $.ajax({
                url: reqDomain + "/game/V1/wxAuthorizeConfig",
                type: "GET",
                dataType: "json",
                data: e,
                success: function(e) {
                    i.debug && i.log("获取公众号授权功能信息 返回的数据：", e),
                    t && t(e)
                },
                error: function(e, t, o) {
                    i.error("获取公众号授权功能信息 错误信息: ", e, t)
                }
            }),
            this
        }
    };
    var be = {
        isCase: {
            get: function() {
                return ! 1
            }
        },
        _init: function() {
            this.isCase && $(".game-tpl-container").addClass("show-case")
        },
        init: function(e) {
            var t = this;
            e && (this.debug = e),
            this.log("24好玩SDK初始化"),
            modals.vms.init(),
            this.getWxSignPackage((function() {
                t.configWx()
            }));
            var i = this.getWxShareObj(!0);
            if (this.setWxShare(i), gift_config && GiftUtils.checkEnabledGift()) for (var o in gift_config) if (5 == gift_config[o].type && "add_chance" in gift_config[o]) {
                share_times < 1 && (this.isLotteryAddChance = !0, this.giftConfigAddChanceItem = gift_config[o], this.giftConfigAddChanceTimes = gift_config[o].add_chance_ext && gift_config[o].add_chance_ext.time, this.giftConfigAddChancePeople = gift_config[o].add_chance_ext && gift_config[o].add_chance_ext.people || 1);
                break
            }
            return this.initGameShareTimesLoop(),
            this.initAlertBox(),
            this.getHuadiOpenid(),
            this
        },
        initAlertBox: function(e) {
            var t = this;
            if (window.alertbox = window.alertbox || [], $(document).ready((function() {
                modals.vms.checkVoteLottery()
            })), !preview) {
                if (this.thirdLoginHelper.match("before") && EventBus.$on("splash-hide", (function() {
                    t.thirdLoginHelper.check()
                })), 1 == first_play && 4641 != game_info.game_id)(void 0 === configJson["activity-text-auto-show"] || configJson["activity-text-auto-show"]) && "fromRoleJs" != e && alertbox.push("activity");
                var i = window.isTruthy(configJson["activity-gift-tip-show"]),
                o = window.isTruthy(configJson["activity-gift-show"]),
                a = window.isTruthy(configJson["activity-gift-remain-num-show"]);
                o && a || (i = !1),
                ["43", "55", "62", "95", "97"].indexOf(tpl_info.tpl_id) > -1 && i && gift_config.length && (alertbox.push(giftRemain), setTimeout(this.showBox.bind(this), 1500)),
                console.log("alertbox2")
            }
        },
        getGameQrCode: function(e, t) {
            $.ajax({
                url: reqDomain + "/game/v2/getGameQrCode",
                type: "POST",
                dataType: "json",
                data: e,
                success: function(e) {
                    t && t(e)
                }
            })
        },
        getUserData: function(e) {
            window.getUserData = hwsdk.getUserData.bind(hwsdk);
            var t = this,
            i = window.gameDataGame.enter_key;
            $.ajax({
                url: reqDomain + "/game/v1/userViewParams",
                dataType: "json",
                type: "POST",
                data: {
                    game_id: game_info.game_id,
                    isTest: game_test ? 1 : 0,
                    key: i
                },
                success: function(i) {
                    var o = i.data;
                    0 == i.code && (t.userData.first_play = o.first_play, t.userData.bestScore = o.best_score, t.userData.gift_flag = o.gift_flag, t.userData.form_info = o.form_info ? 1 : 0, t.userData.form_data = JSON.parse(o.form_info) || {},
                    t.userData.userId = o.user_id, t.userData.openid = o.openid, t.userData.play_times = o.play_times, t.userData.best_rank = o.rank || 1, t.userData.share_times = o.share_times, t.userData.user_name = o.user_name, t.userData.headimgurl = o.headimgurl, t.userData.app_uid = o.app_uid, o.appuid = o.app_uid, o.user_appid = o.appid, window.gameDataUser = o, pageContainer.gameDataUser = o, e && e())
                },
                error: function(e, i, o) {
                    t.error("获取用户信息失败: ", e, i)
                }
            })
        }
    };
    function Pe(e) { !
        function(e) {
            i(e, {
                getGamePlayPermission: v,
                getGameRankInfo: b,
                getWxCardTicket: P,
                checkLocation: S,
                getHuadiOpenid: x
            })
        } (e),
        function(e) {
            i(e, {
                logoutAccount: k,
                unBindAccount: C,
                wxLogin: T
            })
        } (e),
        function(e) {
            i(e, D)
        } (e),
        function(e) {
            i(e, O)
        } (e),
        function(e) {
            i(e, oe)
        } (e),
        function(e) {
            i(e, ae)
        } (e),
        function(e) {
            i(e, le)
        } (e),
        function(e) {
            i(e, ue)
        } (e),
        function(e) {
            i(e, ge)
        } (e),
        function(e) {
            i(e, he)
        } (e),
        function(e) {
            i(e, ve)
        } (e),
        function(e) {
            i(e, be)
        } (e)
    }
    var Se = {
        updateBestRank: function(e) { (best_rank > e || 1 == first_play) && 0 != e && (best_rank = e, views.start.bestRank = best_rank, views.over.bestRank = best_rank);
            var t = null,
            i = 0;
            if (GiftUtils.checkEnabledGift()) for (var o = gift_config.length - 1; o >= 0; o--) if (1 === (t = gift_config[o]).type) {
                i = t.prize.length,
                t.prize[i - 1].interval[1];
                break
            }
            return this
        },
        isGotGift: function(e) {
            for (var t = pageContainer.giftData.length - 1; t >= 0; t--) if (pageContainer.giftData[t].gift_type == e) return ! 0;
            return ! 1
        },
        isLastCycle: function(e, t) {
            var i = new Date,
            o = e.match(/(\d+)/g),
            a = new Date(o[0], o[1] - 1, o[2], o[3], o[4], o[5]),
            r = a.getTime() - i.getTime();
            if (! (a.getTime() >= i.getTime())) return ! 0;
            if ("day" == t) return a.getDate() == i.getDate();
            if ("week" == t) {
                var n = a.getDay();
                return ! (r >= 864e5 * (n = 0 == n ? 7 : n))
            }
            return "month" == t ? a.getMonth() == i.getMonth() && a.getDate() >= i.getDate() : void 0
        },
        getFirstDayOfCycle: function(e) {
            var t = new Date,
            i = t.getTime();
            if ("day" == e) return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
            if ("week" == e) {
                var o = t.getDay();
                o = 0 == o ? 7 : o;
                var a = new Date(i -= 864e5 * (o - 1));
                return a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()
            }
            return "month" == e ? t.getFullYear() + "-" + (t.getMonth() + 1) + "-1": void 0
        }
    };
    function xe(e) {
        views.over && "lottery" === views.over.friendHelpType && (views.over.showAddLotteryTimesHelpBtn = e)
    }
    function ke() {
        if (this.$tplStore) {
            var e, t, i = this.$tplStore.getters.giftConfigInfo,
            o = i.collectGifts,
            a = i.voteGifts,
            r = function(e) {
                return e.includes(window.tpl_id)
            };
            r([55]) ? (e = !!o, t = "collectGift") : r([95, 97]) && (e = !!a, t = "voteGift"),
            e && (this.wxSubscribe.showAsyncRewardSubscribeModal(!1, t), this.showBox())
        }
    }
    function Ce() {
        this.toRemindAddChance = !1,
        "outdate" != game_info.status && $(".gameover-remind").removeClass("hidden");
        var e = [],
        t = {},
        i = configJson.style.disableNotifyFlag,
        o = configJson.disableShare;
        for (var a in i || (i = o), gift_config) if (1 == gift_config[a].type) {
            var r = "排名保持在前" + gift_config[a].prize[gift_config[a].prize.length - 1].interval[1] + "名，活动结束后即可获得奖品噢！";
            e.push({
                text: r,
                type: 1
            })
        } else if (this.isShareGiftEmpty || 3 != gift_config[a].type || isAPP || i) {
            if (4 == gift_config[a].type) {
                if (!this.isPlayGiftEmpty && gift_config[a].cycle) {
                    var n = gift_config[a].cycle;
                    if (!this.isLastCycle(game_info.end_time, n)) {
                        r = "活动期内" + (c = "day" == n ? "每天": "week" == n ? "每周": "每月") + "都有奖，记得再回来领奖哦！";
                        e.push({
                            text: r,
                            type: 4
                        })
                    }
                }
            } else if (5 == gift_config[a].type) {
                if (left_times <= 0 && gift_config[a].add_chance && (t = gift_config[a], this.toRemindAddChance = !0), "share" != gift_config[a].condition || isAPP || o) if ("score" == gift_config[a].condition) {
                    if (this.lastScore < gift_config[a].score) {
                        var s = gift_config[a].score - this.lastScore;
                        r = "真可惜，还差" + (s = Number(s.toFixed(2))) + "分就可以参与抽奖了哦！";
                        4 != game_type && 6 != game_type || (r = 1 == tpl_info.section ? "完成后就可以参与抽奖了哦！": "完成第" + gift_config[a].score + "关就可以参与抽奖了哦！"),
                        e.push({
                            text: r,
                            type: 5,
                            condition: "score"
                        })
                    }
                } else gift_config[a].condition;
                else {
                    r = "炫耀即可抽奖哦！";
                    e.push({
                        text: r,
                        type: 5,
                        condition: "share"
                    })
                }
                if ((n = gift_config[a].cycle) && !this.isLastCycle(game_info.end_time, n)) {
                    var c = "day" == n ? "每天": "week" == n ? "每周": "每月",
                    d = gift_config[a].cycle_num;
                    r = c + "都可以来抽奖，每人" + c + "有" + ("9999" == d ? "无限": d) + "次机会！";
                    e.push({
                        text: r,
                        type: 4
                    })
                }
            }
        } else {
            var r = "炫耀即可获得" + gift_config[a].prize[0].gift_name + "哦！";
            e.push({
                text: r,
                type: 3
            })
        }
        for (var a in e) if (1 == e[a].type) {
            var l = e.splice(a, 1)[0];
            e.push(l)
        } else if (3 == e[a].type) {
            l = e.splice(a, 1)[0];
            e.unshift(l)
        }
        if (pageContainer.giftData.length > 0) for (var a in pageContainer.giftData) {
            var u = pageContainer.giftData[a].gift_type;
            for (var g in e) e[g].type == u && 4 != u && e.splice(g, 1)
        }
        if (e.length > 0) if (3 == e[0].type && window.sessionStorage.getItem("hasShared")) e.splice(0, 1),
        $(".gameover-remind").text("").addClass("hidden");
        else {
            var m = e.map((function(e) {
                return e.text || ""
            })).join("<br>");
            $(".gameover-remind").html(m)
        } else $(".gameover-remind").text("").addClass("hidden");
        if (function(e) {
            if (e.$tplStore) {
                var t = e.$tplStore.getters.giftConfigInfo.rankGifts; [1, 3, 4, 6, 9].includes(window.game_type) && t && e.wxSubscribe.showAsyncRewardSubscribeModal(!1, "rankGift")
            }
        } (this), t && t.add_chance_ext && this.toRemindAddChance && !i) {
            r = this.addLotteryChanceTip();
            var f = window.gameDataUser.free_remain_chance_times,
            p = t.add_chance_ext.condition;
            0 == f ? $(".gameover-remind-share").addClass("hidden") : $(".gameover-remind-share").removeClass("hidden").text(r),
            "friend_help" === p && (!
            function(e) {
                if (console.warn("listenShareSuccessEvent"), !e._wxSubscribed && [1, 2, 3, 4, 6, 9].includes(window.game_type)) {
                    e._wxSubscribed = !0;
                    var t = window.getClient(),
                    i = t.isWX;
                    t.isMiniProgram ? (e.wxSubscribe.enableMiniappSubscribe("draw"), e._wxSubscribed = !1) : i ? EventBus.$once("shareSuccess", (function(t) {
                        e.wxSubscribe && (e.wxSubscribe.showLotteryTimesSubscribeModal(), e._wxSubscribed = !1)
                    })) : (e.wxSubscribe.showLotteryTimesSubscribeModal(!0), e._wxSubscribed = !1)
                }
            } (this), xe(!0)),
            !this.listenOverPageShownEvent && ["enter", "new_register"].includes(p) && (this.listenOverPageShownEvent = !0, window.getGameDataApi(), $(document).on("overPageShown", (function() {
                var e = ["当前抽奖次数已用完，您可通过邀请 ", t.add_chance_ext.people || 1, " 位好友参与游戏，即可获得额外", t.add_chance_ext.time, "次抽奖机会，当前还剩", window.gameDataUser.free_remain_chance_times, "次邀请奖励机会。"];
                0 == left_times && window.gameDataUser.free_remain_chance_times && setTimeout((function() {
                    modals.dialog.showConfirm({
                        title: "获得更多抽奖机会",
                        content: e.join(""),
                        confirmText: "去分享",
                        confirm: function(e) {
                            e.hideConfirm(),
                            hwsdk.showShare()
                        }
                    })
                }), 1500)
            })))
        } else xe(!1);
        return this
    }
    function Te(e) {
        var t;
        e.prototype.private = {},
        r(t = e.prototype.private),
        u(t),
        i(t, {
            getBestScore: function() {
                return window.bestScore
            },
            getLastParams: function() {
                return this.lastParams
            },
            getLastScore: function() {
                return this.lastScore
            },
            getShareGiftEmpty: function() {
                return this.isShareGiftEmpty
            },
            getPlayGiftEmpty: function() {
                return this.isPlayGiftEmpty
            },
            getCurrentLotteryGift: function() {
                return this.currentLotteryGift
            },
            getLotteryAddChance: function() {
                return this.isLotteryAddChance
            },
            getUserId: function() {
                return userId
            },
            getGameInfo: function() {
                return game_info
            },
            getConfigJson: function() {
                return configJson
            },
            isTestMode: function() {
                return !! game_test
            }
        }),
        function(e) {
            i(e, {
                setLastParams: function(e, t, i) {
                    this.lastParams[e] || (this.lastParams[e] = {}),
                    this.lastParams[e].params = t,
                    this.lastParams[e].callback = i
                },
                setLastAppShareParams: function(e, t) {
                    this.lastAppShareParams[e] || (this.lastAppShareParams[e] = {}),
                    this.lastAppShareParams[e] = t
                },
                engine: function() {
                    switch (game_type) {
                    case 1:
                    case 4:
                        return "phaser";
                    case 9:
                        return "egret";
                    default:
                        return "dom"
                    }
                },
                toShowShareNewUserLimit: function() {
                    var e = "share-new-user-limit-" + game_info.game_id;
                    return configJson.help && configJson.help.onlyNewRegisterCanHelp && !window.localStorage[e]
                },
                getPointUnit: function() {
                    return window.$views && window.$views.$store ? window.$views.$store.getters.pointUnit: "积分"
                },
                appendQuery: function(e, t) {
                    var i = e.indexOf("?") > -1;
                    return e + (i ? "&": "?") + $.param(t)
                }
            })
        } (t),
        Pe(t),
        function(e) {
            i(e, {
                detectDevice: p,
                checkDevicemotionGranted: h,
                getDeviceOrientation: w,
                onOrientationChanged: y,
                getCurrentPosition: _
            })
        } (t),
        function(e) {
            i(e, Se)
        } (t),
        function(e) {
            i(e, {
                setOverRemind: Ce,
                checkCdAsyncReward: ke
            })
        } (t),
        function(e) {
            e.use(g),
            e.use(m),
            e.use(f)
        } (e)
    }
    function De(e, t) {
        var i = Object.create(null);
        for (var o in t)"function" == typeof t[o] ? i[o] = {
            writable: !1,
            value: t[o]
        }: i[o] = t[o];
        Object.defineProperties(e, i)
    }
    function Le(e) {
        e.prototype._factory = function() {
            return function(e) {
                De(e.prototype, e.prototype.private)
            } (e)
        },
        e.prototype._initWxSdk = function() {
            return function(e) {
                De(e.prototype, e.prototype.wxsdk)
            } (e)
        }
    }
    var qe = {
        version: "0.0.1"
    };
    function je(e) { !
        function(e) {
            var t = {
                get: function() {
                    return qe
                }
            };
            Object.defineProperty(e, "config", t)
        } (e),
        function(e) {
            e.use = function(e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var i = [].slice.call(arguments, 1);
                return i.unshift(this),
                e && o(e.install) ? e.install.apply(e, i) : o(e) && e.apply(null, i),
                t.push(e),
                this
            }
        } (e)
    }
    function Ge() {
        "undefined" == typeof wx && (wx = window.jWeixin || {}),
        "undefined" == typeof type && (window.type = ""),
        "undefined" == typeof consumePoint && (window.consumePoint = ""),
        "undefined" == typeof vipSplashImg && (window.vipSplashImg = ""),
        ["EventBus", "Utils", "appConfig"].forEach((function(e) {
            void 0 === window[e] && (window[e] = Object.create(null))
        }))
    }
    var Ae = function(i) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
        return t(i, (function(t) {
            e(i, t, o)
        })),
        i
    } ({
        configJson: {},
        EventBus: {},
        views: {},
        masks: {},
        modals: {},
        Page: {},
        pageContainer: {},
        pageBtn: {},
        giftDetail: {},
        giftRemain: {},
        report: {}
    },
    window),
    Ee = Object.assign(Ae, {});
    window.networkType = "unknown",
    window.geoLocation = "unknown";
    var Me = window.getClient(),
    Oe = Me.isWX,
    Ie = Me.isMiniProgram;
    function Ue() {
        Ee.EventBus.$on("splash-hide", (function() {
            Oe || Ie ? wx.ready((function() {
                wx.getNetworkType({
                    success: function(e) {
                        window.networkType = e.networkType
                    }
                }),
                Ee.EventBus.$emit("wx-ready"),
                "yes" === window.playAreaEnable && (console.log("splash-hide", window.vipSplashImg), wx.getLocation({
                    type: "wgs84",
                    success: function(e) {
                        var t, i = e.latitude,
                        o = e.longitude;
                        t = {
                            latitude: i,
                            longitude: o
                        },
                        window.geoLocation = JSON.stringify(t),
                        sendEventTrack({
                            eventPage: "start",
                            eventType: "location",
                            locationInfo: t
                        }),
                        Ne(t)
                    },
                    cancel: function() {
                        $e()
                    },
                    fail: function() {
                        He()
                    }
                }))
            })) : "yes" === window.playAreaEnable && He()
        }))
    }
    function $e() {
        window.$modals && (window.$modals.limitArea.show = !0)
    }
    function He() {
        _((function(e) {
            console.log("h5 geo", e),
            Ne(e)
        }), (function(e) {
            setTimeout((function() {
                showMessage({
                    text: "请先开启获取地理位置权限"
                })
            }), 2e3),
            $e()
        }))
    }
    function Ne(e) {
        var t = e.latitude,
        i = e.longitude;
        $.ajax({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            type: "GET",
            dataType: "json",
            data: {
                key: "0e7923c4c2d3fae9bea572c9ec0228d2",
                location: i + "," + t
            },
            beforeSend: function() {},
            success: function(e) {
                if (1 == e.status) {
                    var t = e.regeocode.addressComponent.province,
                    i = e.regeocode.addressComponent.city,
                    o = e.regeocode.addressComponent.district;
                    console.log("地区：", t, i, o),
                    hwsdk.checkLocation(t, i, o, (function(e) {
                        e.allow || $e()
                    }))
                } else $e()
            },
            error: function() {
                $e()
            }
        })
    }
    var Je = function() {
        var e = "//static.cdn.24haowan.com/24haowan/felibs/js/jweixin-wxwork-1.0.0.js",
        t = "//res.wx.qq.com/open/js/jweixin-1.6.0.js",
        i = navigator.userAgent.toLowerCase();
        return /micromessenger/.test(i) && /wxwork/.test(i) ? e: t
    } ();
    define([Je], (function(e) { (function(e) {
            window.wx = e,
            Ge();
            var t = window.tplShareData && window.tplShareData.formInfoHelper,
            i = window.Page || {};
            window.pageBtn = i.PageBtn,
            window.notShowWhiteBar = i.notShowWhiteBar,
            window.giftDetail = i.GiftDetail,
            window.report = i.Report,
            window.giftRemain = i.GiftRemain,
            window.globalColor = new window.hwsdkNew.GlobalColor(configJson),
            window.gameManager = null,
            window.wx = e,
            window.ExtConfig = window.hwsdkNew.ExtConfig,
            window.GiftUtils = GiftUtils,
            window.PageUtils = t;
            var o = window.gameDataGame.enter_key;
            window.pageContainer = window.Page ? window.Page.PageContainer: {},
            $(document).ready((function() {
                window.Page && window.Page.PageContainer && i.PageContainer.init(),
                window.pageContainer = window.Page ? window.Page.PageContainer: {}
            }))
        })(e),
        Ue(),
        function() {
            console.log("设备屏幕宽度: " + document.body.offsetWidth),
            window.touch = "click",
            ("ontouchstart" in document.documentElement || window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1) && (touch = "tap");
            var e = window.isXinbai;
            window.isXinbai = e
        } ();
        var t = function() {
            this._factory(),
            this._init(),
            this._initWxSdk()
        };
        return Le(t),
        function(e) {
            je(e)
        } (t),
        function(e) {
            e.prototype.lastParams = {},
            e.prototype.lastAppShareParams = {},
            e.prototype.debug = !1,
            e.prototype.configLogger = {
                types: {
                    log: "记录",
                    warn: "警告",
                    error: "错误"
                },
                styles: {
                    log: "background-color: #1abc9c;color: white;padding:5px 5px;",
                    warn: "background-color: #f2bb15;color: white;padding:5px 5px;",
                    error: "background-color: #b22222;color: white;padding:5px 5px;"
                }
            },
            e.prototype.timestamp = {
                init: (new Date).getTime(),
                load: "",
                start: "",
                end: ""
            },
            e.prototype.isHelpGiftEmpty = !1,
            e.prototype.wxSignPackage = {},
            e.prototype.userData = {},
            e.prototype.lastScore = 0,
            e.prototype.lastScoreLottery = 0,
            e.prototype.lastScoreCommitId = null,
            e.prototype.lastCommitData = null,
            e.prototype.isShareGiftEmpty = !1,
            e.prototype.isPlayGiftEmpty = !1,
            e.prototype.currentLotteryGift = "empty",
            e.prototype.isLotteryAddChance = !1,
            e.prototype.isLotteryLock = !1,
            e.prototype.toRemindAddChance = !1,
            e.prototype.rankUser = null,
            e.prototype.isLoadingRank = !1,
            e.prototype.lastWxShareLink = "",
            e.prototype.PageUtils = PageUtils,
            e.prototype.giftConfigAddChanceTimes = 1,
            e.prototype.ScoreCalculator = window.tplShareData && window.tplShareData.ScoreCalculator,
            e.prototype.thirdLoginHelper = window.tplShareData && window.tplShareData.thirdLoginHelper,
            e.prototype.formInfoHelper = window.tplShareData && window.tplShareData.formInfoHelper,
            e.prototype.cdHelpModal = window.tplShareData && window.tplShareData.cdHelpModal,
            e.prototype.jwt = window.tplShareData && window.tplShareData.jwt,
            e.prototype.wxSubscribe = window.tplShareData && window.tplShareData.wxSubscribe,
            e.prototype.addLotteryChanceTip = window.tplShareData && window.tplShareData.addLotteryChanceTip,
            e.prototype.showShareSelection = !1,
            e.prototype.lastWxShareParams = {},
            e.prototype.lastMiniAppShareParams = {}
        } (t),
        Te(t),
        a(t),
        window.hwsdk = new t,
        hwsdk
    }))
} ();