function PluginGameHelper(t, e, n, i, a) {
    function s() {
        gn || wn || (console.info("setPanel"), wn = t.getPage().find("div .pt-page-element-list-box"))
    }
    function o() {
        gn || xn || (xn = t.getWsiteCanvas().find(".pt-dialogs"))
    }
    function c(t) {
        if (rn.pluginGame) t(rn.pluginGame);
        else {
            if (Vt()) return void t(rn.pluginGame); !
            function(t) {
                En = pn.weixinStrong.getIdentifyId();
                var e = vn + "GetPluginInfo",
                n = new Date;
                Re(e, {
                    wsiteGuid: Sn,
                    gameGuid: dn,
                    identify: En,
                    t: n.getTime()
                }).then(function(e) {
                    t && t(e)
                })
            } (function(e) {
                rn.pluginGame = e.data,
                _n = e.data.preset,
                Hn = e.data.needPreset,
                Nn = e.data.canUseNewStoreAwardInfo,
                W(e.data.helperStyle, !0),
                function() {
                    if (!rn.pluginGame) return;
                    var t = "",
                    e = new Date,
                    n = rn.pluginGame.endTime.replace(/-/g, "/");
                    endTime = new Date(n),
                    endTime && endTime < e && (t = "活动已经结束");
                    var i = rn.pluginGame.startTime.replace(/-/g, "/"),
                    a = new Date(i);
                    a && a > e && (t = "活动还没开始");
                    t &&
                    function(t) {
                        var e = "pluginGame-TestTips-dialog" + In;
                        if (rn.pages[e]) return rn.pages[e];
                        o(),
                        rn.pages[e] = $('<div class="pluginGame-TestTips-dialog fadeInUp" style="display:none;background-color:rgba(255,165,0,0.5);color: #000;height: 60px; font-size: 26px; text-align: center; line-height: 60px; border-radius: 0px 0px 10px 10px;position: absolute; top: 0; left: 0; z-index: 10; width: 100%; user-select: none; pointer-events: none;">'),
                        xn.append(rn.pages[e]);
                        var n = $('<div class="dialog-content">');
                        n.append('<div class="content-info">' + t + "</div>"),
                        rn.pages[e].append(n),
                        rn.pages[e].show(),
                        rn.pages[e]
                    } (t += "，仅支持试玩")
                } (),
                ei.setGud(e.data.vuid),
                Kn = e.data.emptyPrize,
                Jn = e.data.emptyMsg,
                Vn = e.data.canGrab,
                Ln = e.data.canReplay,
                "0" != e.result && (rn.pluginGame.code = e.result, rn.pluginGame.msg = e.msg),
                t && t(rn.pluginGame)
            })
        }
    }
    function r() {
        var t = pn.getUrlParamByName(Un);
        ei.setUserConnectGuid(t),
        ei.setUserFriendGuidGuid(t)
    }
    function l(t, e) {
        t || !Qn.data ? rn.dataEvent.getSecret(function(t) {
            rn.dataEvent.getBySecret(t,
            function(t) {
                "0" == t.result && (ei.setUserData(t.data), ei.setUserGuid(t.data.guid, !0), t.data.guid && ei.setUserHelpGrabKey(t.data.helperData.grabKey), q() && ei.setSelfData(t.data)),
                e && e()
            },
            !0)
        },
        !0) : e && e()
    }
    function d(t, e) {
        var n = p(e),
        i = p(ei.getEnKey());
        return CryptoJS.AES.encrypt(t, n, {
            iv: i,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        }).toString()
    }
    function u(t, e) {
        gn || t && rn.scroll[t] || setTimeout(function() {
            rn.scroll[t] = new iScroll(e, {
                checkDOMChanges: !0,
                bounce: !1,
                bounceLock: !1,
                hScrollbar: !1,
                onBeforeScrollStart: function(t) {
                    t.stopPropagation()
                }
            })
        },
        100)
    }
    function p(t) {
        return CryptoJS.enc.Utf8.parse(t)
    }
    function g() {
        Rn = ei.getTimeStr()
    }
    function f(t, e) {
        return null == rn.themeDict ? null: e && rn.themeDict.dict[t] ? rn.themeDict.dict[t][e] : rn.themeDict.dict[t]
    }
    function h(t, e) {
        if (null == ln) return null;
        if (!ln[t]) return null;
        var n = ln[t];
        return e ? n ? n[e] : null: n
    }
    function v() {
        gn || (r(), An && pn.weixinStrong.auth(function(t) {
            rn.wxEnable = !0
        }))
    }
    function m() {
        s(),
        o(),
        S(),
        function(t) { (Mn = t) || (pn.stopFlip(), pn.createEvent("sysResetFlipCallBack",
            function() {
                pn.stopFlip()
            }))
        } (!1),
        function() {
            if (rn.customStrategy) return;
            var t = h("basic");
            t.hasOwnProperty("helperStyle") && (rn.gamePalyStrategy = t.helperStyle ? 2 : 1);
            t.hasOwnProperty("gameStyle") && (rn.gamePalyStrategy = t.gameStyle);
            console.log("gamePalyStrategy:", t)
        } (),
        r(),
        ei.checkGameGuid() && (ei.setUserGuid(), l(!0,
        function() {
            var t = -1,
            e = "";
            Qn.data && (t = Qn.data.bestCounter, e = Qn.data.guid),
            ei.setUserGuid(e, !0),
            setTimeout(function() {
                ei.setShareInfo(t)
            },
            3e3)
        })),
        function() {
            if (gn) return;
            Lt(!
            function() {
                if ((h("topStrategy", "isFriendPK") || !1) && Qn.connectGuid && (!Qn.guid || Qn.guid != Qn.connectGuid)) return ! 0;
                return ! 1
            } () ?
            function(t) {
                if ("0" == t.result) {
                    var e = h("basic"),
                    n = e && e.isAutoShow;
                    Qn.friendGuid && V() && (n = h("conditionHelpStrategy", "isAutoShow") || !1),
                    n && (void 0 != e.ruleStyle && 2 != e.ruleStyle || setTimeout(function() {
                        tt()
                    },
                    fn))
                } else me(t.msg)
            }: function(t) {
                "0" == t.result ?
                function() {
                    var t = Q();
                    t && (!
                    function(t) {
                        if (!t || 0 == t.length) return;
                        if (!ei.checkGameGuid()) return console.info("游戏数据没有设置！");
                        C("正在加载"),
                        rn.dataEvent.getByGuid(Qn.connectGuid,
                        function(e) {
                            G();
                            var n = null;
                            0 == e.result && (n = e.data, rn.incentivesEvent.setShareMsg(n)),
                            function(t, e) {
                                if (!t) return;
                                var n = ei.getWxInfo();
                                n.headimgurl = ei.getThumbImage(n.headimgurl),
                                t.topData.headImgurl = ei.getThumbImage(t.topData.headImgurl);
                                var i = e.find(".content-head"),
                                a = i.find(".friend-info img"),
                                s = i.find(".user-info img");
                                a.attr({
                                    src: t.topData.headImgurl
                                }),
                                s.attr({
                                    src: n.headimgurl
                                });
                                i.find(".friend-info-name").html(t.topData.nickName);
                                i.find(".user-info-name").html(n.nickname);
                                var o = e;
                                o.find(".friend-score-num").html(ei.getNumber(t.bestCounter)),
                                o.find(".friend-top-num").html(t.topData.top)
                            } (n, t)
                        })
                    } (t.find(".dialog-content")), x(!1), t.show(), t.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), t.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"))
                } () : me(t.msg)
            })
        } (),
        showRRXPrizeParseDictDialog = w,
        function() {
            var t = ei.getWxInfo();
            pn.checkOpenMyPrizeDialog(dn, t.id,
            function() {
                ct(t)
            })
        } (),
        h("basic", "hideShare") && ($(".rrx-icon-share").remove(), $(".rrx-icon-report").css({
            top: "10%"
        })),
        rn.friendsPkEvent.isLoadGamePKJS(),
        setTimeout(function() {
            b(!0)
        },
        2e3)
    }
    function b(t) {
        var e = h("basic");
        if (e.isBottomLink && e.isBottomLink.isOpen) {
            if (t && !e.isBottomLink.showHome) return;
            var n = "";
            if (n = e.isBottomLink.icon ? $('<div class="gameBottomLink fadeIn" style="animation: 1s ease 1s 1 normal both running fadeIn;width: 300px; height: 74px;position: absolute;top: 880px;text-align: center;background-color: rgba(0,0,0,0.3);display: flex;border-radius: 40px; text-align: center; justify-content: center;align-items: center;left: 50%;transform: translate3d(-50%, 0px, 0px)"> <img style="width: 50px;height: 50px;" src=' + e.isBottomLink.icon + '> <div style="color: #fff;font-size: 22px;font-weight: 500;margin-left: 10px;"> ' + e.isBottomLink.name + " </div>  </div>") : $('<div class="gameBottomLink fadeIn"  style="animation: 1s ease 1s 1 normal both running fadeIn;color:#fff;background-color: rgba(0, 0, 0, 0.5);height: 60px;font-size: 26px;text-align: center;line-height: 60px;position: absolute;bottom: 0px;left: 0px;z-index: 10;width: 100%;">' + e.isBottomLink.name + "</div>"), 1 == e.isBottomLink.isType) if ("miniprogram" !== window.__wxjs_environment && e.isBottomLink.miniLink) {
                var i = {
                    miniLink: e.isBottomLink.miniLink,
                    miniPagepath: e.isBottomLink.miniPagepath,
                    height: 60,
                    width: 640
                },
                a = '<wx-open-launch-weapp style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 1; opacity: 1;" username="' + i.miniLink + '" path="' + i.miniPagepath + '"> <template><button style="border: none;background:rgba(255, 0, 0, 0);width:' + i.width + "px;height:" + i.height + 'px;"></button></template></wx-open-launch-weapp>';
                n.append(a)
            } else {
                var s = null !== document.ontouchstart ? "click": "touchstart";
                n.bind(s,
                function() {
                    wx.miniProgram.reLaunch({
                        url: e.isBottomLink.miniPagepath,
                        success: function(t) {
                            console.log(t)
                        },
                        fail: function(t) {
                            alert(JSON.stringify(t)),
                            console.error(t)
                        }
                    })
                })
            }
            $(".pt-dialogs").find(".gameBottomLink").remove(),
            $(".pt-dialogs").append(n),
            0 == e.isBottomLink.isType && e.isBottomLink.link && n.bind("click",
            function() {
                window.location.href = e.isBottomLink.link
            })
        }
    }
    function y() {
        $(".pt-dialogs").find(".gameBottomLink").remove()
    }
    function w(t) {
        return console.log("game parse prizedict"),
        "string" == typeof t && (t = JSON.parse(t)),
        $.each(t,
        function(t, e) {
            if ("showqr" == e.value) {
                var n = ei.getThemeGroup("showqr");
                n && (e.value = n)
            }
        }),
        t
    }
    function x(t) {
        Mn && (t ? pn.resetFlip() : pn.stopFlip())
    }
    function S(t) {
        gn || (pn.showPluginCopyRight(Bn), $(".plugin-copyright").hide(), $(".copyright").hide())
    }
    function k() {
        var t = "pluginGame-process-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        s(),
        o(),
        rn.pages[t] = $('<div class="pluginGame-process-dialog" style="-webkit-user-select:none">'),
        xn.append(rn.pages[t]);
        var e = $('<div class="dialog-container">');
        rn.pages[t].append(e),
        Tn = $('<div class="dialog-container-process">').html("请稍等"),
        e.append(Tn)
    }
    function C(t) {
        var e = k();
        e && (t = t || "请稍等", Tn.html(t), e.show())
    }
    function G() {
        var t = k();
        t && (Tn.html("请稍等"), t.hide())
    }
    function z() {
        if (!B()) return null;
        var t = "pluginGame-focuswx-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        var e = yn + "assets/qr_finger_mark.gif",
        n = template.compile('<div class="pluginGame-focuswx-dialog"><div class="dialog-content"><div class="focus-box"><div class="focus-box-inner"><div class="title-tip">{{stateText}}</div><div class="wxqr"style="background-image:url({{qr_finger_mark}});"><img class="wxqr-img"src="{{wxQr}}"></div><div class="bottom-tip">请<span class="red-tips save-tip">长按二维码</span>图片<div class="mtop4">关注公众号后参加活动</div></div></div></div></div></div>'),
        i = h("basic", "wxQr"),
        a = n({
            wxQr: i,
            qr_finger_mark: e
        });
        return rn.pages[t] = $(a),
        wn.append(rn.pages[t]),
        rn.pages[t].unbind("click").bind("click",
        function(t) {
            if (t.stopPropagation(), t.preventDefault(), "pluginGame-focuswx-dialog" == t.currentTarget.className && "dialog-content" == t.target.className || "pluginGame-focuswx-dialog" == t.currentTarget.className && "pluginGame-focuswx-dialog" == t.target.className) {
                $(this).hide(),
                x(!0)
            }
        }),
        rn.pages[t]
    }
    function D(t) {
        var e = z();
        x(!1),
        e.find(".title-tip").html(t),
        e.show()
    }
    function P() {
        var t = z();
        t && (t.hide(), x(!0))
    }
    function T(e) {
        var n = "pluginGame-growpanel-dialog" + In;
        if (rn.pages[n] && !e) return rn.pages[n];
        o(),
        rn.pages[n] && rn.pages[n].remove(),
        rn.pages[n] = $('<div class="pluginGame-growpanel-dialog">'),
        xn.append(rn.pages[n]);
        var i = $('<div class="dialog-container">');
        rn.pages[n].append(i);
        var a = $('<div class="content-info">');
        i.append(a);
        var s = ei.getUserTopData(),
        c = s.nickName,
        r = ei.getAdText("frameName") || "农场";
        r && (c = c + " " + r),
        a.append('<img class="info-image" src="' + s.headImgurl + '">'),
        a.append('<span class="info-name" >' + c + "</span>"),
        function() {
            if (0 == si) {
                var e = t.getWsiteCanvas().height(),
                n = t.getWsiteCanvas().width(),
                i = n / 640;
                si = e / i | 0,
                console.log(e, n, i, si)
            }
        } (),
        a.css("top", 200 - si);
        var l = $('<div class="content-main">');
        i.append(l);
        var d = $('<div class="content-action">');
        i.append(d),
        d.css("top", 240 - si);
        var u = $('<div class="content-acount">');
        i.append(u);
        if (ei.checkIsSelf()) {
            var p = $('<div class="main-item friends">'),
            g = ei.getBtnStyle("icon_friends_png");
            p.css(g),
            l.append(p),
            I(p,
            function() {
                gt()
            });
            var f = $('<div class="main-item task">'),
            h = ei.getBtnStyle("icon_task_png");
            f.css(h),
            l.append(f),
            I(f,
            function() { !
                function() {
                    if (Vt()) return;
                    Ie(vi.pageNames.tasksPage)
                } ()
            });
            var v = $('<div class="main-item store">'),
            m = ei.getBtnStyle("icon_store_png");
            v.css(m),
            l.append(v),
            I(v,
            function() {
                Ue()
            })
        } else {
            var p = $('<div class="main-item friends">'),
            g = ei.getBtnStyle("icon_friends_png");
            p.css(g),
            l.append(p),
            I(p,
            function() {
                gt()
            });
            var b = $('<div class="main-item my">'),
            g = ei.getBtnStyle("icon_my_png");
            b.css(g),
            l.append(b),
            I(b,
            function() {
                rn.groupsStartegyEvent.changeMy(function() {
                    ei.noteGameHandle("reload")
                })
            })
        }
        if (N()) {
            var y = $('<div class="action-item active">'),
            w = ei.getBtnStyle("icon_active_png");
            y.css(w),
            d.append(y),
            I(y,
            function() { !
                function() {
                    if (Vt()) return;
                    ze(vi.pageNames.actionsPage)
                } ()
            })
        }
        var x = ei.getGrowActionList();
        if (x && x.length > 0) for (var S = 0; S < x.length; S++) {
            var k = ei.getActionImage(S),
            C = x[S].acount,
            G = "task_operate" + (S + 1),
            z = $('<div class="acount-item ' + G + '">');
            z.append('<img class="acount-op" src="' + k + '" alt="操作">'),
            z.append('<span class="acount-count"> X' + C + "</span>"),
            u.append(z)
        }
        if (ei.checkDanmu()) {
            var D = $('<div class="action-item danmu">'),
            P = ei.getBtnStyle("icon_danmu_png");
            D.css(P),
            d.append(D),
            I(D,
            function() {
                ei.openDanmu()
            })
        }
        return rn.pages[n]
    }
    function I(t, e, n) {
        t && (n = n || Cn, t.unbind().bind(n, e))
    }
    function M() {
        T(!0),
        function(t) {
            var e = T();
            if (e) {
                if (x(!1), e.css("display", "block"), t) return;
                e.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
                e.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni")
            }
        } (!0),
        pn.triggerEvent("gamePluginShowGrowPanel")
    }
    function O(t) {
        var e = T();
        if (e) {
            x(!0),
            e.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"),
            e.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni");
            var n = 600;
            t && (n = 0),
            setTimeout(function() {
                e.hide(),
                $e()
            },
            n)
        }
    }
    function B() {
        return h("basic", "isFocusWx") || !1
    }
    function U() {
        return h("prizeStrategy", "isEnable") || !1
    }
    function A() {
        return E() || H()
    }
    function E() {
        return h("topStrategy", "isEnable") || !1
    }
    function _() {
        if (qn) return ! 1;
        return h("topStrategy", "isEnablePrize") || !1
    }
    function H() {
        return h("topStrategy", "isFriendTops") || !1
    }
    function N() {
        return h("topStrategy", "isActions") || !1
    }
    function F() {
        return h("helpStrategy", "isEnable") || !1 || J()
    }
    function j() {
        return h("helpStrategy", "isEnablePrize") || !1
    }
    function R() {
        return h("groupsPrizeStrategy", "isEnablePrize") || !1
    }
    function V() {
        return h("conditionHelpStrategy", "isEnable") || !1
    }
    function L() {
        return h("conditionHelpStrategy", "isEnablePrize") || !1
    }
    function K() {
        return L() && !ei.checkIsSelf()
    }
    function J() {
        return null != h("joinsStrategy")
    }
    function W(t, e) {
        if ("0" != t || !rn.customStrategy) {
            switch (e || (rn.customStrategy = !0), t) {
            case "1":
                rn.gamePalyStrategy = 1;
                break;
            case "2":
                rn.gamePalyStrategy = 2;
                break;
            case "3":
                rn.gamePalyStrategy = 3;
                break;
            case "4":
                rn.gamePalyStrategy = 4;
                break;
            default:
                rn.gamePalyStrategy = 1
            }
            console.log("setGameStrategy:", t, rn.gamePalyStrategy, "---", e),
            console.log(typeof t)
        }
    }
    function X() {
        return 1 == rn.gamePalyStrategy || void 0 === rn.gamePalyStrategy
    }
    function q() {
        return 3 == rn.gamePalyStrategy
    }
    function Y() {
        return 4 == rn.gamePalyStrategy
    }
    function Q() {
        var t = "pluginGame-pk-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        var e = Yn.dot,
        n = Yn.challengeBtn,
        i = '<div class="pluginGame-pk-dialog">\t\t<div class="content-close">\t\t<img class="content-close-img" src="#">\t</div>\t<div class="dialog-content">\t\t\t\t\t\t<div class="content-head">\t\t\t\t\t\t<div class="head-info">\t\t\t\t<div class="friend-info">\t\t\t\t\t<img class="friend-info-head" src="">\t\t\t\t\t<div class="friend-info-name">\t\t\t\t\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<div class="pk">\t\t\t\t\t<img class="pk-img" src="">\t\t\t\t</div>\t\t\t\t<div class="user-info">\t<img class="user-info-head" src=""> <div class="user-info-name"> \t</div>\t</div>\t</div>\t\t</div>\t\t<div class="content-box">\t\t\t<div class="pk-info">\t\t\t\t<div class="friend-score">\t\t\t\t\t<span class="friend-score-num">500</span>\t\t\t\t\t<span class="friend-score-text">最好成绩</span>\t\t\t\t</div>\t\t\t\t<div class="friend-top">\t\t\t\t\t<span class="friend-top-text">全国排名:</span>\t<span class="friend-top-num">500</span>\t</div>\t\t\t</div>\t\t</div>\t\t<div class="content-box-svg">\t\t\t' + e + '\t\t\t</div>\t\t<div class="content-foot btn-border-40">\t\t\t' + n + "\t\t</div>\t</div></div>\n",
        a = (Tt(), template.compile(i)({
            challenge: n,
            dot: e
        }));
        rn.pages[t] = $(a),
        xn.append(rn.pages[t]);
        var s = xn.find(".pluginGame-pk-dialog");
        rn.pages[t] = s,
        Ee();
        var o = s.find(".content-head");
        o.css({
            "background-color": vi.cssObj.basicColor
        });
        var c = o.find(".friend-info img"),
        r = o.find(".user-info img");
        c.css({
            border: "4px solid " + vi.cssObj.basicColorChang
        }),
        r.css({
            border: "4px solid " + vi.cssObj.basicColorChang
        });
        s.find(".pk img").attr({
            src: yn + "./image/pkFlag.png"
        });
        s.find(".content-box").css({
            "background-color": vi.cssObj.basicColor,
            border: "10px solid " + vi.cssObj.basicColorChang + " ",
            "box-shadow": "0px 0px 20Px 8px " + vi.cssObj.basicColorChang + " "
        });
        var l = s.find(".content-foot");
        l.css({
            "box-shadow": " 2px 10px 1Px " + vi.cssObj.basicColorChang + " ",
            "background-color": vi.cssObj.basicColor
        }),
        l.unbind().bind(Cn,
        function() {
            Z()
        });
        s.find(".content-box-svg path").css({
            fill: vi.cssObj.basicColorChang
        });
        var d = s.find(".content-close-img");
        return d.attr({
            src: vi.cssObj.closeBtn
        }),
        d.unbind().bind(Cn,
        function() {
            Z()
        }),
        rn.pages[t]
    }
    function Z() {
        var t = Q();
        t && (x(!0), t.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide(),
            $e()
        },
        600))
    }
    function tt() {
        Vt() || ze()
    }
    function et() {
        E() ? ze("topsPage", !0) : H() && ze("friendsPage", !0)
    }
    function nt() {
        var t = h("basic", "ruleStyle");
        if (1 != t) if (3 == t) {
            var e = h("basic", "rulePage");
            e && (pn.gotoPage(e), x(!0), $e())
        } else tt()
    }
    function it(t) {
        if (t && 0 != t.length) {
            var e = U(),
            n = _(),
            i = j(),
            a = J(),
            s = R(),
            o = h("conditionStrategy", "isEnablePrize") || !1,
            c = V();
            return e || n || i || a || s || o || c ? ei.checkGameGuid() ? void(ei.checkNoRefresh(rn.cacheKeys.prizeData) ? ot(rn.prizeData, t) : (C("正在加载"), at(function(e) {
                G(),
                e && ei.setNoRefresh(rn.cacheKeys.prizeData),
                ot(rn.prizeData, t)
            }))) : console.info("游戏数据没有设置！") : console.info("奖品不可用")
        }
    }
    function at(t) {
        ei.checkDataIsNotEmpty(rn.prizeData) && t ? t(rn.prizeData) : Le(function(e) {
            var n = null;
            0 == e.result && (n = e.data, rn.prizeData = n),
            t && t(n)
        })
    }
    function st(t) {
        return ! t || 0 == t.length
    }
    function ot(t, e) {
        if (e.html(""), !t || 0 == t.length || st(t.grabPrize) && st(t.topsPrize) && st(t.helpPrize) && st(t.joinsPrize) && st(t.groupsPrize) &&
        function(t) {
            if (!t) return ! 0;
            var e = t.conditionPrize;
            return K() && (e = t.conditionHelpPrize),
            st(e)
        } (t)) xn.find(".rule .rule-three").hide();
        else {
            var n = f("prizeRulePage");
            n && n.rule;
            var i = 0;
            if (U() && t.grabPrize && t.grabPrize.length > 0) {
                i++;
                var a = $('<div class="head">抽奖奖品</div>');
                e.append(a),
                a.css({
                    color: vi.cssObj.basicColor
                });
                r = $("<ul>");
                $.each(t.grabPrize,
                function(t, e) {
                    var n = $("<li>"),
                    i = e.image;
                    i || (i = ei.getDefaultPrizeIcon());
                    var a = $("<img src=" + i + ">"),
                    s = $('<div class="grab-content-text"><p>' + e.name + "</p><span> " + dt(0 | e.prizeType) + "</span>");
                    n.append(a),
                    n.append(s),
                    r.append(n)
                }),
                e.append(r)
            }
            if (j() && t.helpPrize && t.helpPrize.length > 0) {
                i++;
                l = $('<div class="head">兑换奖品</div>');
                e.append(l),
                l.css({
                    color: vi.cssObj.basicColor
                });
                r = $("<ul>");
                $.each(t.helpPrize,
                function(t, e) {
                    var n = $("<li>"),
                    i = e.image;
                    i || (i = ei.getDefaultPrizeIcon());
                    var a = $("<img src=" + i + ">"),
                    s = $('<div class="grab-content-text"><p>' + e.name + "</p><span> " + dt(0 | e.prizeType) + "</span>");
                    n.append(a),
                    n.append(s),
                    r.append(n)
                }),
                e.append(r)
            }
            if (t.joinsPrize && t.joinsPrize.length > 0) {
                i++;
                l = $('<div class="head">众筹奖品</div>');
                e.append(l),
                l.css({
                    color: vi.cssObj.basicColor
                });
                r = $("<ul>");
                $.each(t.joinsPrize,
                function(t, e) {
                    var n = $("<li>"),
                    i = e.image;
                    i || (i = ei.getDefaultPrizeIcon());
                    var a = $("<img src=" + i + ">"),
                    s = $('<div class="grab-content-text"><p>' + e.name + "</p><span> " + dt(0 | e.prizeType) + "</span>");
                    n.append(a),
                    n.append(s),
                    r.append(n)
                }),
                e.append(r)
            }
            if (R() && t.groupsPrize && t.groupsPrize.length > 0) {
                i++;
                l = $('<div class="head">兑换奖品</div>');
                e.append(l),
                l.css({
                    color: vi.cssObj.basicColor
                });
                r = $("<ul>");
                $.each(t.groupsPrize,
                function(t, e) {
                    var n = $("<li>"),
                    i = e.image;
                    i || (i = ei.getDefaultPrizeIcon());
                    var a = $("<img src=" + i + ">"),
                    s = $('<div class="grab-content-text"><p>' + e.name + "</p><span> " + dt(0 | e.prizeType) + "</span>");
                    n.append(a),
                    n.append(s),
                    r.append(n)
                }),
                e.append(r)
            }
            var s = h("conditionStrategy", "isEnable") || !1,
            o = L();
            if (s || o) {
                var c = t.conditionPrize;
                if (K() && (c = t.conditionHelpPrize), c && c.length > 0) {
                    i++;
                    l = $('<div class="head">奖品</div>');
                    e.append(l),
                    l.css({
                        color: vi.cssObj.basicColor
                    });
                    var r = $("<ul>");
                    $.each(c,
                    function(t, e) {
                        var n = $("<li>"),
                        i = e.image;
                        i || (i = ei.getDefaultPrizeIcon());
                        var a = $("<img src=" + i + ">"),
                        s = $('<div class="grab-content-text"><p>' + e.name + "</p><span> " + dt(0 | e.prizeType) + "</span><p>得奖条件：" + e.scoreStart + "~" + e.scoreEnd + "分</p>");
                        n.append(a),
                        n.append(s),
                        r.append(n)
                    }),
                    e.append(r)
                }
            }
            if (_() && t.topsPrize && t.topsPrize.length > 0) {
                i++;
                var l = $('<div class="head">排行榜奖品</div>');
                e.append(l),
                l.css({
                    color: vi.cssObj.basicColor
                });
                var d = $("<ul>");
                $.each(t.topsPrize,
                function(t, e) {
                    var n = $('<li style="table"><div style="display: table-cell;vertical-align: middle;">'),
                    i = e.image;
                    i || (i = ei.getDefaultPrizeIcon());
                    var a = $('<div class="noNnm" style="vertical-align: middle;text-align: left;"> 第' +
                    function(t, e) {
                        return t == e ? t: t + " ~ " + e
                    } (e.topStart, e.topEnd) + "名</div>"),
                    s = $('<img style="margin-left:0px;vertical-align: middle;margin:0px 10px" src=' + i + ">"),
                    o = $('<div class="prizename" style="vertical-align: middle;text-align: left; width:250px">' + e.name + "</div>");
                    n.append(a),
                    n.append(s),
                    n.append(o),
                    d.append(n)
                }),
                e.append(d)
            }
            i >= 1 &&
            function(t) {
                if (un) {
                    var e = fe('<a href="javascript:void(0)" style="color:{{color}};text-decoration:none" class="rule-myPrizeBtn">我的奖品</a>', {
                        color: vi.cssObj.basicColor
                    });
                    t.append(e),
                    setTimeout(function() {
                        var e = ei.getWxInfo();
                        e && e.id && t.find(".rule-myPrizeBtn").off(Cn).on(Cn,
                        function(t) {
                            t.stopPropagation(),
                            t.preventDefault(),
                            ct(e)
                        })
                    },
                    1e3)
                }
            } ($(e.find("div.head").get(0)))
        }
    }
    function ct(t) {
        Ee(),
        pn.getMyActivePrizeListOld(Sn, dn, t.id, vi.cssObj.basicColor, "我的奖品",
        function(t) {
            var e = {
                id: t.prizeId,
                image: t.prizeIcon,
                name: t.prizeName,
                type: t.prizeType,
                prizeData: t.exdata
            };
            zn = e,
            lt()
        })
    }
    function rt() {
        Dn = !1,
        C(),
        rn.dataEvent.getSecret(function(t) {
            Ot(t, !1)
        },
        !1)
    }
    function lt() {
        if (zn && zn.prizeData) {
            ei.setDayTimesEnable(),
            Dn = !1;
            var t = Tt(),
            e = Rt(zn.prizeData.showForm);
            _n && (e = !1, Y() && (e = Hn)),
            Pn = j(),
            0 != t.length && e ? Nn ? Fn ? rt() : ee(function() {
                rt()
            },
            function() {
                It()
            }) : It() : rt()
        } else me("没有奖品可以领取!")
    }
    function dt(t) {
        var e = "";
        switch (t) {
        case 0:
            e = "不是奖品";
            break;
        case 1:
            e = "实物奖品";
            break;
        case 2:
            e = "奖券奖品";
            break;
        case 3:
            e = "第三方奖品";
            break;
        case 4:
            e = "微信红包";
            break;
        case 5:
            e = "微信卡券";
            break;
        case 6:
            e = "积分奖品";
            break;
        case 7:
            e = "游戏金币"
        }
        return e
    }
    function ut(t, e) {
        var n = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
        n.html("");
        var i = $("<div class='tops'>");
        if (i && 0 != i.length) {
            var a = E(),
            s = H();
            if (!a && !s) return console.info("排行榜不可用");
            C("正在加载数据");
            var o = ei.getSecret(),
            c = "",
            r = a && s;
            e ? (r = !1, c = t ? Qn.guid: "", !t, i = $("<div class='friends'>")) : r ? c = t ? Qn.guid: "": s && (t = !0, c = Qn.guid),
            n.append(i);
            var l = 0 | h("topStrategy", "topCount");
            Ke(c, o, l,
            function(e) {
                G();
                var n = null;
                0 == e.result && (n = e.data, t && "" == c && (n.rows = []), c && (rn.friendTopData = n)),
                ei.checkIsPersentTops() ?
                function(t, e, n, i, a) {
                    if (e.html(""), !t) return;
                    var s = $("<div class='tops-content'>"),
                    o = $("<ul>");
                    $.each(t.rows,
                    function(t, e) {
                        var n = $("<li>"),
                        i = $("<div class='tops-content-text'><div class='topsNum'> " + (t + 1) + "</div><img class='topsImage' src=" + e.headImgurl + "><div class='tops-content-name'>" + e.nickName + "</div><div class='tops-content-sc'>" + ei.getPersentNumber(e.bestCounter) + "</div></div>");
                        n.append(i),
                        o.append(n)
                    }),
                    s.append(o),
                    e.append(s)
                } (n, i) : function(t, e, n, i, a) {
                    if (e.html(""), !t) return;
                    var s = $('<div class="tops-info">');
                    e.append(s);
                    var o = t.topData,
                    c = "暂无",
                    r = "暂无",
                    l = " ",
                    d = bn + "2016/07/20/1468986497159.png",
                    u = ei.getWxInfo();
                    u && (d = ei.getThumbImage(u.headimgurl) || d, l = u.nickname || l);
                    o.top && 0 != o.top && (c = o.top);
                    r = ei.getNumber(o.bestCounter),
                    d = ei.getThumbImage(o.headImgurl) || d;
                    F() && Qn.data && !ei.getHelperData().hasScore && "";
                    var p = $("<img src=" + d + ">"),
                    g = $("<div class='tops-content-text'><div class='tops-name'>" + l + "</div>\t<div class='tops-score'>最好成绩<span>" + r + "</span></div><div class='tops-top'>全国排名<span>" + c + "</span></div></div></div>");
                    s.append(p),
                    s.append(g);
                    var f = _();
                    if (i) g.find(".tops-top").html("好友排名<span>" + c + "</span>");
                    else if (f) {
                        var h = !0;
                        if (Nn && (jn ? _n && !Hn && (h = !1) : h = !1), h) {
                            var v = $('<div class="content-box-action game-top-form">录入领奖人信息</div>');
                            v.unbind().bind(Cn,
                            function() {
                                De(),
                                Dn = !0,
                                setTimeout(function() {
                                    It()
                                },
                                600)
                            }),
                            v.css({
                                "background-color": vi.cssObj.basicColor
                            }),
                            s.append(v)
                        }
                    }
                    p.css({
                        border: "4px solid " + vi.cssObj.basicColor + " "
                    }),
                    g.find(".tops-score span").css({
                        color: vi.cssObj.basicColor
                    }),
                    g.find(".tops-top span").css({
                        color: vi.cssObj.basicColor
                    });
                    var m = $("<div class='content-box-color'></div>");
                    e.append(m);
                    var b = $("<div class='tops-content'>"),
                    y = $("<ul>");
                    $.each(t.rows,
                    function(t, e) {
                        var n = $("<li>"),
                        a = $("<div class='tops-content-text'><div class='topsNum'> " + (t + 1) + "</div><img class='topsImage' src=" + e.headImgurl + "><div class='tops-content-name'>" + e.nickName + "</div><div class='tops-content-sc'>" + ei.getNumber(e.bestCounter) + "</div></div>");
                        if (t < 3 && (a.find(".topsNum").css({
                            "background-image": 'url("' + yn + "./image/tops_" + (t + 1) + '.png")',
                            "vertical-align": "sub"
                        }), a.find(".topsNum").html("")), n.append(a), i) {
                            var s = q();
                            if (s && n.find(".tops-content-name").css("width", 170), s && Qn.guid && Qn.guid != e.guid) {
                                var o = $('<div class="grow-btn">去看看</div>'),
                                c = ei.getBtnColor();
                                o.css(c),
                                I(o,
                                function() {
                                    rn.groupsStartegyEvent.changeGrower(e.guid,
                                    function() {
                                        De();
                                        var t = ei.getAdText("visit");
                                        ei.noteGameHandle("reload"),
                                        setTimeout(function() {
                                            hi.showToast(e.nickName + " " + t)
                                        },
                                        oi.setDelay)
                                    })
                                }),
                                n.append(o)
                            }
                        }
                        y.append(n)
                    }),
                    b.append(y),
                    e.append(b)
                } (n, i, 0, t)
            })
        }
    }
    function pt() {
        Vt() || ze(vi.pageNames.helpersPage, !0)
    }
    function gt() {
        Vt() || ze(vi.pageNames.friendsPage)
    }
    function ft(t) {
        ei.getFather() ? rn.dataEvent.getHelperList(function(t) {
            var e = null;
            0 == t.result && (e = t.data),
            function(t) {
                var e = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
                if (e.html(""), !t) return;
                t.topData;
                var n = $('<div class="helpers-box">');
                ei.checkIsSelf() || n.append('<div class="helpers-box-msg hbox">TA的好友助力</div>');
                e.append(n);
                var i = bn + "2016/07/20/1468986497159.png",
                a = $("<ul>");
                $.each(t.rows,
                function(t, e) {
                    var n = $("<li>");
                    a.append(n);
                    var s = $('<div class="helper-content">'),
                    o = $('<img class="helperImage">');
                    s.append(o);
                    var c = e.headImgurl ? ei.getThumbImage(e.headImgurl) : i;
                    o.attr("src", c),
                    s.append('<div class="helperName">' + e.nickName + "</div>"),
                    s.append('<div class="helperText">' + rn.dataEvent.getHelperTextAssets(e, t) + "</div>"),
                    s.append('<div class="helperScore">' + rn.dataEvent.getHelperAssets(e, t) + "</div>"),
                    n.append(s)
                }),
                n.append(a)
            } (e)
        }) : function() {
            var t = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
            t.html("");
            var e = $('<div class="helpers-box">');
            t.append(e),
            e.append('<div class="helpers-box-msg">快去邀请好友</div>')
        } ()
    }
    function ht(t) {
        ei.getFather() ? rn.dataEvent.getActionsList(function(t) {
            var e = [];
            0 == t.result && (e = t.data),
            function(t) {
                var e = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
                if (e.html(""), !t) return;
                var n = $('<div class="actions-box">');
                ei.checkIsSelf() || n.append('<div class="actions-box-msg hbox">TA的动态</div>');
                e.append(n);
                var i = $('<div class="actions-container">');
                n.append(i);
                var a = ei.getThinColor();
                $.each(t.rows,
                function(t, e) {
                    var n = $('<div class="actions-container-item">'),
                    s = $('<div class="content">'),
                    o = $('<img class="content-line">');
                    s.append(o);
                    var c = $('<img class="content-image">');
                    s.append(c);
                    var r = ei.getTaskImage(e.eventType, e.aIndex, e.gIndex);
                    c.attr("src", r),
                    c.css("background-color", a);
                    var l = $('<div class="content-info">');
                    s.append(l),
                    l.append('<div class="content-text">' + e.desc + "</div>"),
                    l.append('<div class="content-time">' + ei.formatLevalTime(e.createTime) + "</div>"),
                    n.append(s),
                    i.append(n)
                })
            } (e)
        }) : function() {
            var t = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
            t.html("");
            var e = $('<div class="actions-box">');
            t.append(e),
            e.append('<div class="actions-box-msg">快去参加活动吧</div>')
        } ()
    }
    function vt() { !
        function(t) {
            var e = xn.find(".pluginGame-extend-dialog .dialog-content .dialog-content-box #scrolle");
            if (e.html(""), !t) return;
            var n = $('<div class="tasks-box">');
            e.append(n);
            var i = $("<ul>");
            $.each(t,
            function(t, e) {
                if (e.awards && e.awards.length > 0 && e.awards[0].count > 0) {
                    var n = $("<li>");
                    i.append(n);
                    var a = $('<div class="task-container">'),
                    s = $('<img class="task-image">');
                    a.append(s);
                    var o = ei.getTaskImage(e.taskType);
                    s.attr("src", o);
                    var c = $('<div class="task-content">');
                    c.append('<div class="task-content-name">' + e.taskName + "</div>"),
                    c.append('<div class="task-content-desc"><span class="desc-tag">赠送</span><span>' + ei.getTaskDescFormat(e.awards, t) + "</span></div>"),
                    a.append(c);
                    var r = $('<div class="task-operate">');
                    a.append(r);
                    var l = $('<div class="task-operate-btn">' + ei.getTaskOpName(e.taskType, e.isDone, e.isFinish) + "</div>"),
                    d = ei.getBtnColor();
                    e.isDone ? e.isFinish ? l.css("color", d["background-color"]) : (l.css(d), l.addClass("btnShake")) : l.css(d),
                    I(l,
                    function() { !
                        function(t) {
                            if (console.log(t), !ei.canTriggertEvent()) return;
                            if (console.log("--task event--"), t.isDone && t.isFinish) return;
                            if (t.isDone) rn.groupsStartegyEvent.taskGet(t.guid,
                            function(t) {
                                0 == t.result ? (hi.showToast("成功领取"), vt(), M()) : me(t.msg)
                            });
                            else {
                                var e = "任务完成啦，快去领取吧";
                                switch (t.taskType) {
                                case "2":
                                    !
                                    function(t) {
                                        if (oi.hasShareEvent) return;
                                        oi.hasShareEvent = !0,
                                        oi.shareData.guid = t,
                                        pn.createEvent("sysShareCallBack",
                                        function(t) {
                                            oi.shareData.success || "success" == t.type && (oi.shareData.success = !0, rn.groupsStartegyEvent.taskOperate(oi.shareData.guid,
                                            function(t) {
                                                0 == t.result && (hi.showToast("分享成功,快去领取奖励吧"), vt())
                                            }))
                                        })
                                    } (t.guid),
                                    rn.pageEvent.showShare();
                                    break;
                                case "12":
                                    rn.pageEvent.showShare();
                                    break;
                                default:
                                    rn.groupsStartegyEvent.taskOperate(t.guid,
                                    function(n) {
                                        0 == n.result ? ("6" == t.taskType && (e = "成功完成任务"), hi.showToast(e), vt()) : me(n.msg)
                                    })
                                }
                            }
                        } (e)
                    }),
                    r.append(l),
                    r.append('<div class="task-operate-info"><span class="task-info-cut">' + e.curCount + '</span>/<span class="task-info-total">' + e.taskCount + "</span></div>"),
                    n.append(a)
                }
            }),
            n.append(i)
        } (ei.getGrowTaskList())
    }
    function mt() {
        var t = xn.find(".pluginGame-extend-dialog .dialog-content .dialog-content-box #scrolle");
        t.html("");
        var e = $("<div class='store-box'>");
        t.append(e);
        var n = $('<div class="store-info">');
        e.append(n);
        var i = $('<div class="store-user">');
        n.append(i);
        var a = "暂无",
        s = bn + "2016/07/20/1468986497159.png",
        o = ei.getWxInfo();
        o && (s = ei.getThumbImage(o.headimgurl) || s, a = o.nickname || a),
        i.append('<img class="store-user-image" src=' + s + ">");
        var c = $('<div class="store-user-content">');
        i.append(c),
        c.append('<div class="content-name">' + a + "</div>"),
        c.append('<div class="content-acount"></div>'),
        bt();
        var r = ei.checkGrabPrizeEnable(),
        l = ei.checkExchangePrizeEnable(),
        d = $('<div class="store-nav">');
        n.append(d);
        var u = $('<div class="store-nav-item">商品</div>');
        if (I(u,
        function() {
            yt(u, oi.menus.buy)
        }), d.append(u), oi.curMenu && oi.curMenu != oi.menus.buy || (u.css({
            color: vi.cssObj.basicColor,
            "border-color": vi.cssObj.basicColor
        }), hasSelect = !0, oi.curMenu = oi.menus.buy), r) {
            var p = $('<div class="store-nav-item">抽奖</div>');
            I(p,
            function() {
                yt(p, oi.menus.grab)
            }),
            d.append(p),
            oi.curMenu == oi.menus.grab && (p.css({
                color: vi.cssObj.basicColor,
                "border-color": vi.cssObj.basicColor
            }), oi.curMenu = oi.menus.grab)
        }
        if (l) {
            var g = $('<div class="store-nav-item">商品兑换</div>');
            I(g,
            function() {
                yt(g, oi.menus.exchange)
            }),
            d.append(g),
            oi.curMenu == oi.menus.exchange && (g.css({
                color: vi.cssObj.basicColor,
                "border-color": vi.cssObj.basicColor
            }), oi.curMenu = oi.menus.exchange)
        }
        var f = $('<div class="store-content">');
        if (e.append(f), r) { !
            function(t, e) {
                var n = $('<div class="store-content-' + oi.menus.grab + '">');
                e && n.show();
                t.append(n),
                ei.getStoreGrabList(function(t) {
                    if (t && 0 != t.length) {
                        var e = $('<div class="store-grab-info">');
                        n.append(e);
                        var i = ei.getThemeGroup("btn_grab_png"),
                        a = "";
                        if (i) a = $('<img class="store-imgGrab" src="' + i + '" alt="抽奖按钮">');
                        else {
                            a = $('<div class="store-grab">开始抽奖</div>');
                            var s = ei.getBtnColor();
                            a.css(s)
                        }
                        I(a, xt),
                        e.append(a);
                        var o = $('<div class="store-rule">');
                        e.append(o);
                        var c = ei.getStoreGrabGlod(),
                        r = ei.getStoreUnit();
                        o.append('<p class="store-rule-item">抽奖规则：' + c + r + "/次</p>"),
                        o.append('<p class="store-rule-item">' + ei.getAdText("grab") + "</p>");
                        var l = $('<div class="store-prize">');
                        n.append(l);
                        var d = $("<ul>");
                        l.append(d),
                        $.each(t,
                        function(t, e) {
                            var n = $("<li>");
                            d.append(n);
                            var i = $('<div class="goods-container">'),
                            a = $('<img class="goods-image">');
                            i.append(a);
                            var s = e.image ? e.image: ei.getDefaultPrizeIcon();
                            a.attr("src", s);
                            var o = $('<div class="goods-content">');
                            o.append('<div class="goods-content-name">' + e.name + "</div>");
                            var c = dt(0 | e.prizeType);
                            o.append('<div class="goods-content-desc">' + c + "</div>"),
                            i.append(o),
                            n.append(i)
                        })
                    } else n.append('<div class="grab-empty">还没有可抽奖奖品</div>')
                })
            } (f, oi.curMenu == oi.menus.grab)
        }
        if (l) { !
            function(t, e) {
                var n = $('<div class="store-content-' + oi.menus.exchange + '">');
                e && n.show();
                t.append(n);
                var i = $("<ul>");
                n.append(i),
                ei.getStoreExChangeList(function(t) {
                    t && 0 != t.length ? $.each(t,
                    function(t, e) {
                        var n = $("<li>");
                        i.append(n);
                        var a = $('<div class="goods-container">'),
                        s = $('<img class="goods-image">');
                        a.append(s);
                        var o = e.image ? e.image: ei.getDefaultPrizeIcon();
                        s.attr("src", o);
                        var c = $('<div class="goods-content">');
                        c.append('<div class="goods-content-name">' + e.name + "</div>");
                        var r = ei.getGoodsName(e.exIndex);
                        c.append('<div class="goods-content-desc"><span>' + e.limitAmount + '</span><span class="exchange-unit">' + r + "</span></div>"),
                        a.append(c);
                        var l = $('<div class="goods-btn">兑换</div>'),
                        d = ei.getBtnColor();
                        l.css(d),
                        I(l,
                        function() { !
                            function(t) {
                                Yt(function(e) {
                                    if (0 == e.result) {
                                        var n = function(t, e) {
                                            var n = {
                                                can: !1,
                                                unit: ""
                                            },
                                            i = 0 | t,
                                            a = 0 | e,
                                            s = ei.getStoreAcount(),
                                            o = a - 1;
                                            if (o >= 0) {
                                                if (s.growAcounts.length > 0 && s.growAcounts[o]) {
                                                    var c = s.growAcounts[o]; (0 | c.acount) >= i ? n.can = !0 : (n.can = !1, n.unit = c.name)
                                                }
                                            } else(0 | s.acount) >= i ? n.can = !0 : (n.can = !1, n.unit = s.name);
                                            return n
                                        } (t.limitAmount, t.exIndex);
                                        if (!n.can) return void me(n.unit + "数量不足！"); !
                                        function(t, e) {
                                            var n = (zn = t).id,
                                            i = Tt(),
                                            a = Rt(zn.showForm);
                                            _n && (a = !1);
                                            if (0 == i.length || !a) return C(),
                                            void rn.dataEvent.getSecret(function(t) {
                                                var i = Ut();
                                                Bt(n, t, i, e)
                                            },
                                            !1); !
                                            function(t, e, n) {
                                                var i = ei.getBasicColor();
                                                showRRXGetPrizeDialog(pn, e, i,
                                                function(e) {
                                                    if ("submitEvent" == e.event) {
                                                        var i = e.result,
                                                        a = {
                                                            awardInfo: JSON.stringify(i.awardInfo),
                                                            smsData: i.smsData,
                                                            closeCallBack: e.closeCallBack
                                                        };
                                                        rn.dataEvent.getSecret(function(e) {
                                                            Bt(t, e, a, n)
                                                        },
                                                        !1)
                                                    }
                                                })
                                            } (n, i, e)
                                        } (t,
                                        function(t) {
                                            bt()
                                        })
                                    } else G(),
                                    me(e.msg)
                                },
                                !1, !0, !1, !1)
                            } (e)
                        }),
                        a.append(l),
                        n.append(a)
                    }) : i.append('<li><div class="goods-empty">还没有可兑换商品</div></li>')
                })
            } (f, oi.curMenu == oi.menus.exchange)
        } !
        function(t, e) {
            var n = $('<div class="store-content-' + oi.menus.buy + '">');
            e && n.show();
            t.append(n);
            var i = $("<ul>"),
            a = ei.getStoreBuyList();
            $.each(a,
            function(t, e) {
                var n = $("<li>");
                i.append(n);
                var a = $('<div class="buy-container">'),
                s = $('<img class="buy-image">');
                a.append(s);
                var o = e.imageUrl;
                s.attr("src", o);
                var c = $('<div class="buy-content">');
                c.append('<div class="buy-content-name">' + e.name + "</div>"),
                c.append('<div class="buy-content-desc"><span>' + e.gold + '</span><span class="buy-unit">' + e.unit + "</span></div>"),
                a.append(c);
                var r = $('<div class="buy-btn">购买</div>'),
                l = ei.getBtnColor();
                r.css(l),
                I(r,
                function() { !
                    function(t) {
                        var e = "购买：" + t.gold + t.unit;
                        kt([St(t.name, t.imageUrl, e, 1, 1e3, t)],
                        function(t) {
                            console.log(t);
                            var e = t[0];
                            if (! (e.count <= 0)) {
                                Ct();
                                var n = e.data.guid,
                                i = e.count,
                                a = e.data.type;
                                rn.dataEvent.doBuy(n, i, a,
                                function(t) {
                                    0 == t.result ? (hi.showToast("购买成功"), bt(), M()) : (me(t.msg), bt()),
                                    rn.dataEvent.doBuyCallBack(t)
                                })
                            }
                        })
                    } (e)
                }),
                a.append(r),
                n.append(a)
            }),
            n.append(i)
        } (f, oi.curMenu == oi.menus.buy)
    }
    function bt() {
        var t = xn.find(".pluginGame-extend-dialog .dialog-content .dialog-content-box #scrolle .store-user-content .content-acount");
        if (t && 0 != t.length) {
            t.html("");
            var e = ei.getStoreAcount(),
            n = $('<div class="content-acount-info">'),
            i = '<img class="acount-img" src="' + ei.getThemeImage(1, -1) + '">';
            if (n.append('<div class="acount-gold">' + i + ' <span class="acount-value">' + e.acount + "</span></div>"), t.append(n), e.hasAcount) {
                var a = "兑换" + e.name,
                s = $('<div class="acount-exchange" >' + a + "</div>");
                I(s,
                function() { !
                    function(t, e, n) {
                        for (var i = [], a = 0; a < t.length; a++) {
                            var s = t[a];
                            if (! (s.acount <= 0)) {
                                var o = "剩余数量：" + s.acount;
                                s.inGold && (o += "<br><span style='color:#666;'>1" + s.name + "兑换" + s.inGold / 100 + n + "</span>");
                                var c = s.acount > 5 ? 5 : s.acount,
                                r = s.acount;
                                i.push(St(s.name, ei.getGoodsImage(a), o, c, r, s))
                            }
                        }
                        i.length > 0 ? kt(i,
                        function(t) {
                            for (var e = [], n = 0; n < i.length; n++) {
                                var a = i[n];
                                a.count <= a.data.acount && e.push({
                                    guid: a.data.guid,
                                    count: a.count
                                })
                            }
                            if (e.length <= 0) return hi.showToast("没有物品可以兑换啦"),
                            Ct(),
                            void bt(); !
                            function(t, e) {
                                C(),
                                rn.dataEvent.getSecret(function(n) { !
                                    function(t, e, n) {
                                        var i = vn + "GroupsExchange",
                                        a = Kt({
                                            guid: Qn.guid,
                                            secret: t,
                                            exchangeData: e
                                        });
                                        Re(i, {
                                            data: a
                                        },
                                        "POST").then(function(t) {
                                            n && n(t)
                                        })
                                    } (n, t,
                                    function(t) {
                                        G(),
                                        0 == t.result ? (ei.setValidHelpeData(t.data.helperData), e && e()) : me(t.msg)
                                    })
                                },
                                !1)
                            } (e,
                            function() {
                                hi.showToast("成功兑换"),
                                bt(),
                                Ct()
                            })
                        },
                        e, "兑换") : hi.showToast("没有物品可以兑换啦")
                    } (e.growAcounts, a, e.name)
                }),
                n.append(s);
                for (var o = 0; o < e.growAcounts.length; o++) {
                    var c = e.growAcounts[o],
                    r = '<img class="acount-img" src="' + ei.getThemeImage(1, o) + '">';
                    t.append('<div class="acount-item">' + r + ' <span class="acount-value">' + c.acount + "</span></div>")
                }
            }
        }
    }
    function yt(t, e) {
        t && (t.siblings().css({
            color: "#342e2e",
            "border-color": "transparent"
        }), t.css({
            color: vi.cssObj.basicColor,
            "border-color": vi.cssObj.basicColor
        })),
        function(t) {
            var e = xn.find(".pluginGame-extend-dialog .dialog-content .dialog-content-box #scrolle");
            oi.curMenu && e.find(".store-content-" + oi.curMenu).hide();
            e.find(".store-content-" + t).show(),
            oi.curMenu = t
        } (e)
    }
    function wt() {
        var t = xn.find(".pluginGame-seed-dialog .dialog-content .dialog-content-box #scrolle");
        t.html("");
        var e = $("<div class='seed-box'>");
        t.append(e);
        xn.find(".pluginGame-seed-dialog").find(" .content-close-img").unbind().bind(Cn,
        function() {
            oi.seedCallback && oi.seedCallback({
                addCancel: !0
            }),
            Be()
        });
        var n = $("<ul>"),
        i = ei.getGrowSeedList();
        $.each(i,
        function(t, e) {
            var i = $("<li>");
            n.append(i);
            var a = $('<div class="seed-container">'),
            s = $('<img class="seed-image">');
            a.append(s);
            var o = ei.getGoodsImage(t);
            s.attr("src", o);
            var c = null;
            c = e.acount > 0 ? $('<div class="seed-count">' + e.acount + "</div>") : $('<div class="seed-count">去购买</div>'),
            a.append(c);
            var r = ei.getBtnColor();
            c.css(r),
            I(a,
            function() {
                if (console.log(e), e.acount <= 0) return ye("数量不够啦，现在去购买？", "购买",
                function() {
                    Ue(oi.menus.buy),
                    Be()
                }),
                void(oi.seedCallback && oi.seedCallback({
                    addCancel: !0
                }));
                oi.seedCallback && oi.seedCallback(e),
                Be()
            }),
            a.append(c),
            i.append(a)
        }),
        e.append(n)
    }
    function xt() { !
        function(t) {
            if (Vt()) return; !
            function(t) {
                C(),
                zn = null,
                Yt(function(e) {
                    0 == e.result ? rn.dataEvent.getSecret(function(n) { !
                        function(t, e) {
                            if (!
                            function() {
                                return ! this._curEvent && (this._curEvent = !0, !0)
                            } ()) return;
                            var n = vn + "GroupsGrab",
                            i = {
                                secret: t,
                                identify: En
                            },
                            a = Kt(i = pn.appendChannelParams(i));
                            Re(n, {
                                data: a
                            },
                            "POST").then(function(t) { !
                                function() {
                                    this._curEvent = !1
                                } (),
                                e && e(t)
                            })
                        } (n,
                        function(n) {
                            G(),
                            e.result = n.result,
                            e.grabRet = n,
                            0 == n.result ? (zn = n.data, n.data.prizeData ? (zn.prizeData = JSON.parse(n.data.prizeData), _t(zn)) : zn.prizeData = {},
                            te()) : pe(n.msg),
                            ei.setValidHelpeData(n.data.helperData),
                            t && t(e)
                        })
                    }) : (G(), me(e.msg), t && t(e))
                },
                !0, !1, !1, !1)
            } (t)
        } (function() {
            bt()
        })
    }
    function St(t, e, n, i, a, s) {
        return {
            name: t,
            imageUrl: e || "",
            desc: n || "",
            count: i || 1,
            max: a,
            data: s
        }
    }
    function kt(t, e, n, i) {
        var a = Gt(!0, t, e, n, i);
        a && (x(!1), a.show(), a.find(".p-form").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), a.find(".closeBtn").removeClass("bounceOutUpAni").addClass("bounceInUpAni"))
    }
    function Ct() {
        var t = Gt();
        t && (x(!0), t.find(".p-form").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".closeBtn").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide()
        },
        600))
    }
    function Gt(t, e, n, i, a) {
        function s(t, e, n) {
            if (c[t]) {
                var i = c[t];
                i.count += e,
                i.count <= 0 ? (i.count = 0, n.addClass("btn-disabled")) : n.removeClass("btn-disabled"),
                i.count >= i.max ? (i.count = i.max, n.addClass("btn-disabled")) : n.removeClass("btn-disabled"),
                f.find("#num" + t).val(i.count)
            }
        }
        var o = "pluginGame-buy-dialog" + In;
        if (rn.pages[o]) {
            if (!t) return rn.pages[o];
            rn.pages[o].remove()
        }
        i = i || "购买信息",
        a = a || "购买";
        var c = e;
        Ee();
        var r = vi.cssObj.basicColor,
        l = vi.cssObj.basicColorChang,
        d = "<header >" + i + "</header>",
        u = fe(Yn.changeLinkBtn, {
            linkUrl: "javascript:void(0)",
            linkName: a
        }),
        p = '<div class="{{formCss}}"><div class="closeBtn"><img src=' + (yn + "./image/close.png") + '></div><div class="p-form"><div style="background-color:' + r + ' " class="p-head">' + d + '</div><div class="p-container"><ul>{{each buyData as m j}}<li><div class="buy-container">{{if m.imageUrl}}<img class="buy-image"src="{{m.imageUrl}}">{{/if}}<div class="buy-content"><div class="buy-content-name">{{m.name}}</div>{{if m.desc}}<div class="buy-content-desc">{{m.desc}}</div>{{/if}}</div><div class="buy-count"><a href="javascript:void(0)"style=" background-color:{{pFromBg}}"class="btn-miuns"data-id="{{j}}">-</a><input id="num{{j}}"style="border: 1px solid {{pFromBg}};width:50px "placeholder="数量"class="input-count"type="tel"value="{{m.count}}" ><a href="javascript:void(0)"style=" background-color:{{pFromBg}}"class="btn-add"data-id="{{j}}">+</a></div></div></li>{{/each}}</ul></div><div class="p-foot">\t<div style="background-color:' + r + " ;box-shadow:2px 12px 1Px " + l + ' " class= "p-foot-btn">' + u + "\t</div></div>\t</div>\t</div>",
        g = template.compile(p)({
            formCss: "pluginGame-buy-dialog",
            buyData: c,
            pFromBg: r,
            pFromShadow: l
        }),
        f = $(g);
        return rn.pages[o] = f,
        f.find(".closeBtn").unbind().bind(Cn,
        function(t) {
            x(!0),
            Ct()
        }),
        f.find(".btn-add").unbind().bind(Cn,
        function(t) {
            s($(this).data("id"), 1, $(this))
        }),
        f.find(".btn-miuns").unbind().bind(Cn,
        function(t) {
            s($(this).data("id"), -1, $(this))
        }),
        f.find(".p-foot-btn").unbind().bind(Cn,
        function(t) {
            x(!1),
            n && n(c)
        }),
        f.find("input").unbind().bind("change",
        function(t) {
            var e = $(this).val(),
            n = f.find(".btn-miuns").data("id");
            c[n].count = e
        }),
        window.wxInputFocusEvent(f.find("input")),
        xn.append(rn.pages[o]),
        rn.pages[o]
    }
    function zt() {
        console.log("==领奖页面render==");
        var t = "pluginGame-active-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        Ee();
        var e = vi.cssObj.basicColor,
        n = vi.cssObj.basicColorChang,
        i = yn + "./image/close.png",
        a = Tt();
        console.log("awardModel", a);
        var s = fe('<div class="{{formClass}}"><div class="prizeget-dialog-content game-prizeget-dialog-content"><div class="closeBtn"><img src="{{closeTag}}"></div><div class="p-form"><div style="background-color:{{pFromBg}}" class="p-head">                {{activeTitle}}</div><ul>               {{each awardModel as m j}}<li {{if m.id == 5}} style="height: auto;" {{/if}}>                                   {{if m.inputType==\'select\'&&m.list&&m.list.length>0}}<div class="select-form" style="border: 1px solid {{pFromBg}}"><select class="select-form-item input-award-{{m.id}}"><option value="">                                               选择{{m.name}}</option>                                           {{each m.list as v}}<option value="{{v}}">                                               {{v}}</option>                                           {{/each}}</select><span class="select-marker"></span></div>                                   {{else if m.id == 5}}<div class="input-award-{{m.id}}"><div style="display: flex;">                                               {{if m.isProvince == 1}}<div class="select-form city-item" style="border: 1px solid {{pFromBg}};margin-bottom: 10px;"><select class="select-form-item award-province"><option value="0">省份</option></select></div>                                               {{/if}}                                               {{if m.isCity == 1}}<div class="select-form city-item" style="border: 1px solid {{pFromBg}};margin-bottom: 10px;"><select class="select-form-item award-city"><option value="0">城市</option></select></div>                                               {{/if}}                                               {{if m.isArea == 1}}<div class="select-form city-item" style="border: 1px solid {{pFromBg}};margin-bottom: 10px;"><select class="select-form-item award-area"><option value="0">区/县</option></select></div>                                               {{/if}}</div>                                           {{if m.isDetail == undefined || m.isDetail == \'undefined\' || m.isDetail == 1}}<div><input style="border: 1px solid {{pFromBg}};height: 60px;" placeholder="请输入详细地址" class="award-detail" type="text"></div>                                           {{/if}}</div>                                   {{else}}                                       {{if m.inputType==\'date\'}}<span class="date-pre-span">{{m.name}}</span>                                       {{/if}}<input style="border: 1px solid {{pFromBg}}" placeholder="{{m.name}}" class="input-award-{{m.id}}" type="{{m.inputType}}">                                   {{/if}}</li>                           {{if m.smscode==\'true\' || m.smscode===true}}<li><input style="border: 1px solid {{pFromBg}};width:50% "                                      placeholder="输入验证码" class="input-award-smscode" type="tel"><a href="javascript:void(0)" style="background-color:{{pfrombg}}" class="btn-smscode">获取验证码</a></li>                           {{/if}}                           {{/each}}</ul><div class="p-foot"><div class= "p-foot-btn" style="background-color:{{pFromBg}} ;box-shadow:2px 12px 1Px {{pFromShadow}} " ><a href="javascript:void(0)" class="submit-form">{{activeBtn}}</a></div></div></div></div></div>\n', {
            formClass: "rrx-prizeget-dialog",
            activeTitle: "<header >完善领奖信息</header>",
            awardModel: a,
            closeTag: i,
            pFromBg: e,
            pFromShadow: n,
            activeBtn: '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="150px" height="100px" viewBox="0 0 150 100" enable-background="new 0 0 150 100" xml:space="preserve"><g>\t<path fill="#fff" d="M45.38,32.559h6.637c-0.035,0.102-0.051,0.238-0.051,0.409c-0.206,1.022-0.429,1.96-0.669,2.813h-2.418\t\tc-1.167,0-2.195,0.443-3.087,1.329c-0.926,0.921-1.389,1.961-1.389,3.119v20.864c0,0.954,0.274,1.722,0.823,2.301\t\tc0.548,0.443,1.251,0.683,2.109,0.716c0.754,0,1.423-0.256,2.007-0.767c0.515-0.545,0.771-1.296,0.771-2.25v-17.54\t\tc-0.034-0.647,0.171-1.176,0.618-1.585c0.342-0.341,0.823-0.512,1.44-0.512h6.638c0.651,0,1.183,0.171,1.595,0.512\t\tc0.445,0.341,0.669,0.92,0.669,1.738v17.387c0,0.954,0.274,1.722,0.823,2.301c0.548,0.443,1.217,0.683,2.007,0.716\t\tc0.857,0,1.577-0.256,2.161-0.767c0.446-0.614,0.686-1.363,0.721-2.25V40.024c0-1.159-0.378-2.113-1.132-2.864\t\tc-0.926-0.92-1.973-1.38-3.139-1.38h-5.042c0.206-1.057,0.429-2.131,0.669-3.222h7.203c0.857,0,1.561-0.29,2.11-0.869\t\tc0.548-0.546,0.823-1.244,0.823-2.097s-0.275-1.568-0.823-2.148c-0.515-0.511-1.218-0.767-2.11-0.767H45.38\t\tc-0.926,0-1.646,0.273-2.161,0.818c-0.549,0.545-0.823,1.244-0.823,2.097s0.274,1.568,0.823,2.147\t\tC43.733,32.286,44.454,32.559,45.38,32.559z M23.976,43.655c0.72-0.716,1.731-1.943,3.036-3.683\t\tc1.474-1.841,3.087-4.175,4.836-7.005c0.137-0.341,0.309-0.528,0.515-0.563c0.206-0.034,0.429-0.018,0.669,0.051L39,38.95\t\tc0.754,0.546,1.509,0.768,2.264,0.665c0.754-0.103,1.423-0.528,2.006-1.278c0.515-0.647,0.721-1.381,0.618-2.199\t\tc-0.035-0.818-0.446-1.5-1.235-2.045l-8.078-7.568c-1.063-0.443-2.093-0.631-3.087-0.563c-1.235,0.103-2.333,1.057-3.293,2.863\t\tc-2.778,4.296-5.574,7.756-8.387,10.381c-0.652,0.647-1.012,1.364-1.08,2.147c-0.035,0.75,0.274,1.467,0.926,2.148\t\tc0.548,0.613,1.252,0.954,2.11,1.022C22.517,44.559,23.255,44.269,23.976,43.655z M35.038,65.593\t\tc3.533-4.705,6.037-8.813,7.512-12.324c0.548-1.363,0.548-2.591,0-3.682c-0.755-1.057-1.852-1.603-3.293-1.637H23.976\t\tc-0.926,0-1.646,0.256-2.161,0.768c-0.549,0.545-0.823,1.261-0.823,2.147c0,0.818,0.274,1.518,0.823,2.097\t\tc0.515,0.546,1.235,0.836,2.161,0.869h10.033c0.548,0,0.96,0.085,1.235,0.256c0.206,0.204,0.24,0.478,0.103,0.818\t\tc-0.241,0.75-2.007,3.238-5.3,7.466c-2.881-1.739-4.871-2.438-5.968-2.097c-0.755,0.238-1.304,0.767-1.647,1.585\t\tc-0.343,0.818-0.411,1.568-0.206,2.25c0.309,0.75,0.926,1.347,1.853,1.79c2.709,1.261,6.071,3.408,10.084,6.443\t\tc0.857,0.646,1.68,0.937,2.47,0.869c0.754-0.034,1.423-0.409,2.007-1.125c0.514-0.751,0.72-1.518,0.617-2.302\t\tC39.154,68.933,37.747,67.535,35.038,65.593z M31.385,38.439c-0.755,0.034-1.424,0.357-2.007,0.971\t\tc-0.549,0.648-0.806,1.33-0.771,2.046c0.034,0.818,0.411,1.534,1.132,2.147c0.445,0.409,1.011,1.023,1.698,1.841\t\tc0.548,0.818,1.217,1.313,2.007,1.483c0.72,0.137,1.44-0.034,2.161-0.512c0.651-0.511,1.063-1.142,1.234-1.892\t\tc0.137-1.534-0.943-3.238-3.241-5.114C32.877,38.764,32.139,38.439,31.385,38.439z M67.916,69.734\t\tc-2.401-1.773-4.563-3.103-6.483-3.988c-0.926-0.409-1.784-0.494-2.573-0.256c-0.72,0.307-1.27,0.835-1.646,1.585\t\tc-0.343,0.818-0.36,1.567-0.051,2.25c0.239,0.75,0.823,1.347,1.749,1.79c1.475,0.647,3.293,1.772,5.454,3.375\t\tc0.823,0.545,1.646,0.801,2.47,0.767c0.754-0.137,1.389-0.546,1.904-1.227c0.515-0.716,0.702-1.45,0.566-2.199\t\tC69.168,71.081,68.705,70.382,67.916,69.734z M58.655,59.456V46.979c0-1.022-0.292-1.841-0.875-2.454\t\tc-0.549-0.512-1.252-0.784-2.109-0.818c-0.858,0.034-1.562,0.324-2.11,0.869c-0.549,0.614-0.823,1.415-0.823,2.403v12.478\t\tc0,2.387-1.149,4.432-3.447,6.137c-1.44,0.954-3.208,1.806-5.299,2.557c-1.029,0.238-1.784,0.732-2.264,1.482\t\tc-0.343,0.647-0.429,1.415-0.257,2.302c0.24,0.852,0.72,1.465,1.441,1.841c0.857,0.545,2.486,0.357,4.888-0.563\t\tc5.866-2.659,9.347-6.273,10.445-10.841C58.449,61.553,58.585,60.581,58.655,59.456z M131.45,69.428\t\tc-2.265-2.489-4.254-4.994-5.969-7.518c3.944-7.67,6.174-17.011,6.688-28.022c-0.24-1.363-0.515-2.744-0.823-4.142\t\tc-0.411-0.647-1.029-1.177-1.853-1.586c-0.857-0.408-1.749-0.563-2.675-0.46h-13.893c-0.926,0-1.646,0.256-2.161,0.768\t\tc-0.103,0.034-0.188,0.119-0.257,0.255c-0.138-0.442-0.344-0.8-0.618-1.073c-0.514-0.512-1.218-0.768-2.109-0.768H86.377\t\tc-0.926,0-1.646,0.273-2.161,0.818c-0.549,0.546-0.823,1.245-0.823,2.097c0,0.853,0.274,1.568,0.823,2.147\t\tc0.515,0.546,1.235,0.818,2.161,0.818h0.772v29.864c-1.956,0-3.276,0.357-3.962,1.073c-0.515,0.648-0.755,1.381-0.721,2.199\t\tc0.034,0.92,0.343,1.653,0.926,2.198c0.549,0.512,1.304,0.75,2.265,0.717c3.808-0.205,8.695-0.734,14.664-1.586\t\tc0.033-0.034,0.103-0.034,0.205,0v4.5c0,0.954,0.274,1.756,0.823,2.403c0.549,0.512,1.252,0.784,2.11,0.818\t\tc0.856-0.034,1.56-0.324,2.109-0.869c0.548-0.613,0.84-1.398,0.874-2.353v-5.42c1.27-0.307,2.401-0.598,3.396-0.869\t\tc1.063-0.308,1.715-0.801,1.955-1.483c0.309-0.75,0.36-1.551,0.154-2.403c-0.24-0.818-0.703-1.414-1.39-1.79\t\tc-0.72-0.409-2.093-0.323-4.116,0.256V32.763h1.338c0.754,0,1.526-0.375,2.315-1.125c0.137,0.341,0.36,0.699,0.669,1.074\t\tc0.515,0.546,1.235,0.836,2.161,0.869h11.731c0.856-0.033,1.457,0.153,1.801,0.563c0.96,1.637,0.36,7.074-1.801,16.313\t\tc-0.927,2.659-1.716,4.704-2.367,6.137c-2.71-5.012-4.494-11.114-5.351-18.308c-0.138-0.954-0.55-1.67-1.235-2.147\t\tc-0.617-0.409-1.32-0.563-2.109-0.46c-0.823,0.204-1.44,0.597-1.853,1.176c-0.446,0.648-0.583,1.449-0.411,2.403\t\tc1.371,7.092,3.172,13.04,5.402,17.847c0.754,1.671,1.544,3.29,2.367,4.858c-1.888,2.761-4.306,5.028-7.255,6.801\t\tc-0.755,0.512-1.235,1.142-1.441,1.893c-0.137,0.749,0.052,1.517,0.566,2.301c0.445,0.716,1.029,1.192,1.749,1.432\t\tc0.754,0.238,1.577,0.052,2.47-0.563c2.573-1.738,4.87-3.938,6.895-6.597c3.088,4.909,5.454,7.415,7.101,7.518\t\tc0.754,0.033,1.509-0.223,2.265-0.768c0.548-0.613,0.891-1.313,1.028-2.097C132.479,71.029,132.136,70.211,131.45,69.428z\t\t M100.526,61.093c-0.926,0.102-1.887,0.222-2.881,0.357c-1.578,0.205-3.105,0.409-4.579,0.614v-6.495h7.46V61.093z M100.526,49.894\t\th-7.46v-5.574h7.46V49.894z M100.526,38.644h-7.46v-5.881h7.46V38.644z"/></g></svg>'
        });
        return rn.pages[t] = $(s),
        window.wxInputFocusEvent(rn.pages[t].find("input[type=text],input[type=tel],input[type=date]")),
        window.wxInputFocusEvent(rn.pages[t].find("textarea")),
        xn.append(rn.pages[t]),
        ci = '<option value="0">{{showTips}}</option>{{if list.length > 0}}    {{each list as row k}}<option value="{{row.item_code}}">{{row.item_name}}</option>    {{/each}}{{/if}}\n',
        pn.loadJs(appConfig.libHost + "citys/citysJson.js",
        function() {
            for (var t = cityJson.length,
            e = 0; e < t; e++) {
                if ("0000" != cityJson[e].item_code.substr(2, 4)) {
                    "00" != cityJson[e].item_code.substr(4, 2) ? ui.push(cityJson[e]) : di.push(cityJson[e])
                } else li.push(cityJson[e])
            }
            ri = fe(ci, {
                showTips: "省份",
                list: li
            }),
            pi.find(".award-province").html(ri)
        }),
        pi = xn,
        _couponBtn = pi.find(".coupon-module"),
        ni = pi.find(".award-province"),
        ii = pi.find(".award-city"),
        function(t) {
            t.find(".closeBtn").unbind().bind(Cn,
            function(e) {
                x(!0);
                for (var n = Tt(), i = 0; i < n.length; i++) {
                    t.find(".input-award-" + n[i].id).val(""),
                    "true" === n[i].smscode && (t.find(".btn-smscode").html("获取验证码"), t.find(".input-award-smscode").val(""))
                }
                $t()
            }),
            t.find(".btn-smscode").unbind().bind(Cn,
            function(e) {
                var n = function(t) {
                    for (var e = Tt(), n = 0; n < e.length; n++) if ("telephone" === e[n].type && "手机" === e[n].name) {
                        return t.find(".input-award-" + e[n].id).val()
                    }
                    return ""
                } (t);
                if (ei.checkPhone(n)) {
                    var i = t.find(".btn-smscode");
                    t.find(".input-award-smscode"); !
                    function(t, e, n) {
                        if (0 !== gi) return;
                        var i = pn.getInteractServiceHost();
                        verifyAlert(i, Sn, t, "",
                        function(t) {
                            t.isVerify && (C("正在发送..."), G(),
                            function(t) {
                                gi = 60,
                                t.html(gi + "s"),
                                t.css("background-color", "#e7e7e7"),
                                t.css("color", "#686868"),
                                ai = setInterval(function() {
                                    0 === (gi -= 1) ? (clearInterval(ai),
                                    function(t) {
                                        var e = vi.cssObj.basicColor;
                                        t.html("获取验证码"),
                                        t.css("background-color", e),
                                        t.css("color", "#fff")
                                    } (t)) : t.html(gi + "s")
                                },
                                1e3)
                            } (e))
                        })
                    } (n, i)
                } else me("请输入正确的手机号码！")
            }),
            t.find(".submit-form").unbind().bind(Cn,
            function(t) {
                x(!1),
                C(),
                rn.dataEvent.getSecret(function(t) {
                    Ot(t)
                },
                !1)
            }),
            t.find(".award-province").unbind().bind("change",
            function(t) {
                var e = pi.find(".award-province").val();
                console.log("provinceCode", e),
                function(t) {
                    var e = {
                        showTips: "城市",
                        list: []
                    };
                    if (t && 0 !== t && "0" !== t) {
                        for (var n = [], i = t.substr(0, 2), a = di.length, s = 0; s < a; s++) {
                            di[s].item_code.substr(0, 2) == i && n.push(di[s])
                        }
                        e.list = n
                    }
                    ri = fe(ci, e),
                    pi.find(".award-city").html(ri)
                } (e),
                Dt(0)
            }),
            t.find(".award-city").unbind().bind("change",
            function(t) {
                var e = pi.find(".award-city").val();
                console.log("cityCode", e),
                Dt(e)
            })
        } (rn.pages[t]),
        rn.pages[t]
    }
    function Dt(t) {
        var e = {
            showTips: "区/县",
            list: []
        };
        if (t && 0 !== t && "0" !== t) {
            for (var n = [], i = t.substr(0, 4), a = ui.length, s = 0; s < a; s++) {
                ui[s].item_code.substr(0, 4) == i && n.push(ui[s])
            }
            e.list = n
        }
        ri = fe(ci, e),
        pi.find(".award-area").html(ri)
    }
    function Pt(t, e) {
        var n = [];
        if (n = "province" == e ? li: "city" == e ? di: ui, !t || !n) return "";
        for (var i = "",
        a = 0; a < n.length; a++) if (t == n[a].item_code) {
            i = n[a].item_name;
            break
        }
        return i
    }
    function Tt() {
        if (!Gn && rn.pluginGame.awardModel) {
            Gn = [];
            for (var t = JSON.parse(rn.pluginGame.awardModel), e = 0; e < t.length; e++)"true" != t[e].display && 1 != t[e].display || ("date" != t[e].type && "select" != t[e].type || (t[e].inputType = t[e].type), Gn.push(t[e]))
        }
        return Gn
    }
    function It() {
        C(),
        Lt(function(t) {
            if (G(), 0 == t.result) {
                var e = zt();
                e && (x(!1), e.show(), e.find(".p-form").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), e.find(".closeBtn").removeClass("bounceOutUpAni").addClass("bounceInUpAni"))
            } else me(t.msg)
        })
    }
    function Mt() {
        var t = zt();
        t && (Dn && (Dn = !1), x(!0), t.find(".p-form").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".closeBtn").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide()
        },
        600))
    }
    function Ot(t, e) {
        var n = (e = jt(e)) ?
        function() {
            for (var t = [], e = Tt(), n = "", i = zt(), a = 0; a < e.length; a++) {
                var s = i.find(".input-award-" + e[a].id),
                o = s.val().trim();
                if (!o && 5 != e[a].id) return me(e[a].name + "不能为空"),
                !1;
                if (5 == e[a].id) {
                    var c = !1;
                    if (1 == e[a].isProvince) {
                        if (! (c = s.find(".award-province").val()) || 0 === c || "0" === c) return me("请选择省份！"),
                        !1;
                        o += Pt(c, "province")
                    }
                    if (1 == e[a].isCity) {
                        if (! (c = s.find(".award-city").val()) || 0 === c || "0" === c) return me("请选择城市！"),
                        !1;
                        o && (o += ","),
                        o += Pt(c, "city")
                    }
                    if (1 == e[a].isArea) {
                        if (! (c = s.find(".award-area").val()) || 0 === c || "0" === c) return me("请选择区/县！"),
                        !1;
                        o && (o += ","),
                        o += Pt(c, "area")
                    }
                    if (1 == e[a].isDetail || void 0 === e[a].isDetail || "undefined" === e[a].isDetail) {
                        var r = $.trim(s.find(".award-detail").val());
                        if (!r) return me("请填写详细地址！"),
                        !1;
                        o && (o += ","),
                        o += r
                    }
                    if (!o) return me("地址不能为空！"),
                    !1
                } else if ("telephone" === e[a].type) {
                    if (!ei.checkPhone(o)) return me("输入的手机号码格式不正确！"),
                    !1;
                    if (e[a].smscode) {
                        var l = i.find(".input-award-smscode");
                        if ("" === $.trim(l.val())) return me("验证码不能为空！"),
                        !1; (n = {}).sendPhone = o,
                        n.codeValue = l.val().trim()
                    }
                }
                if ("mail" === e[a].type) {
                    if (!/^(\S)+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(o)) return me("输入的邮箱格式不正确！"),
                    !1
                }
                t.push({
                    id: e[a].id,
                    name: e[a].name,
                    value: o,
                    unique: e[a].unique,
                    allunique: e[a].allunique,
                    smsticket: e[a].smsticket,
                    smscode: e[a].smscode
                })
            }
            return {
                smsData: n,
                awardInfo: t
            }
        } () : Ut();
        if (Nn && Fn && (n || (n = Ut())), n) {
            var i = JSON.stringify(n.awardInfo);
            Ve(t, i, n.smsData, Dn, Pn,
            function(n) {
                if (G(), 0 == n.result) {
                    if (Y() && _n && (Hn = !1), Dn) me("提交成功");
                    else {
                        ei.setWinKey(1),
                        zn.infoData = n.data,
                        zn.detail = n.data.prizeDetail;
                        var i = (zn.prizeData || {}).activeStyle || 3;
                        switch (parseInt(i)) {
                        case 1:
                            4 == zn.type ? me("红包领取成功!") : ce();
                            break;
                        case 2:
                            re();
                            break;
                        case 3:
                            ne(n.data)
                        }
                    }
                    console.log("showForm6", e),
                    e && Mt(),
                    rn.getPrizeCallback && (rn.getPrizeCallback(n), rn.getPrizeCallback = null)
                } else if (4500 == n.result) {
                    var a = pn.getInteractServiceHost();
                    window.verifyLotteryAlert(a, Sn, t,
                    function(n) {
                        n && n.isVerify && (C(), Ot(t, e))
                    })
                } else me(n.msg)
            })
        } else G()
    }
    function Bt(t, e, n, i) {
        var a = n.awardInfo; !
        function(t, e, n, i, a) {
            var s = vn + "GroupsStoreExchange",
            o = {
                prizeId: t,
                secret: e,
                identify: En,
                awardInfo: n,
                smsInfo: i
            },
            c = Kt(o = pn.appendChannelParams(o));
            Re(s, {
                data: c
            },
            "POST").then(function(t) {
                a && a(t)
            })
        } (t, e, a, n.smsData,
        function(a) {
            if (G(), 0 == a.result) {
                zn.infoData = a.data,
                zn.detail = a.data.prizeDetail,
                zn.prizeData = a.data.prizeData;
                var s = (zn.prizeData || {}).activeStyle || 3;
                switch (parseInt(s)) {
                case 1:
                    4 == zn.type ? me("红包领取成功!") : ce();
                    break;
                case 2:
                    re();
                    break;
                case 3:
                    ne(a.data)
                }
                ei.setValidHelpeData(a.data.helperData),
                n.closeCallBack && n.closeCallBack(),
                i && i()
            } else if (4500 == a.result) {
                var o = pn.getInteractServiceHost();
                window.verifyLotteryAlert(o, Sn, e,
                function(a) {
                    a && a.isVerify && (C(), Bt(t, e, n, i))
                })
            } else me(a.msg)
        })
    }
    function Ut() {
        for (var t = [], e = Tt(), n = 0; n < e.length; n++) t.push({
            id: e[n].id,
            name: e[n].name,
            value: "[不记录]",
            unique: !1,
            allunique: !1,
            smsticket: !1
        });
        return {
            smsData: "",
            awardInfo: t
        }
    }
    function $t() {
        if (Dn) Mt();
        else if (Mt(), zn && (1 == zn.prizeType || 2 == zn.prizeType || 3 == zn.prizeType || 7 == zn.prizeType)) {
            var t = ei.getSecret();
            if (t) return;
            if (!zn.id) return; !
            function(t, e, n, i) {
                Re(vn + "GiveUpPrize", {
                    wsiteGuid: Sn,
                    gameGuid: dn,
                    secret: t,
                    prizeId: e,
                    isHelperType: n ? 1 : 0,
                    fg: Wn
                },
                "POST").then(function(t) {
                    i && i(t)
                })
            } (t, zn.id, Pn,
            function(t) {
                0 == t.result && (Pn || ei.setWinKey(0))
            })
        }
    }
    function At() {
        var t = "pluginGame-grab-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        var e = f("prizePage");
        if (e) {
            rn.pages[t] = $('<div class="pluginGame-grab-dialog">'),
            xn.append(rn.pages[t]),
            rn.pages[t].css({
                left: "-130px"
            });
            var n = $('<div class="dialog-content">');
            rn.pages[t].append(n),
            n.css({
                "background-image": 'url("' + e.bgDialog + '")'
            });
            var i = $('<div class="content-close">');
            i.css({
                "background-image": 'url("' + vi.cssObj.closeBtn + '")'
            }),
            n.append(i),
            i.unbind().bind(Cn,
            function() { !
                function() {
                    var t = At();
                    t && (t.hide(), x(!0))
                } ()
            });
            var a = $('<div class="content-box-action">');
            n.append(a);
            var s = $('<div class="grab-action">');
            a.append(s),
            s.css({
                "background-image": 'url("' + e.btnGrab + '")'
            }),
            s.unbind().bind(Cn,
            function() {
                Ht()
            });
            var o = $('<div class="grab-action">');
            return a.append(o),
            o.css({
                "background-image": 'url("' + e.btnPrizeRule + '")'
            }),
            o.unbind().bind(Cn,
            function() {
                nt()
            }),
            rn.pages[t]
        }
    }
    function Et(t, e) {
        Vt() || (t && ei.setUserScore(t), Ht(e))
    }
    function _t(t) {
        t && t.prizeData && t.prizeData.message && (t.name = t.prizeData.message)
    }
    function Ht(t) {
        C(),
        zn = null,
        Lt(function(e) {
            0 == e.result ? rn.dataEvent.getSecret(function(n) {
                je(n, ei.getUserGrabKey(),
                function(n) {
                    G(),
                    ei.setGrabKey(1),
                    e.result = n.result,
                    e.grabRet = n,
                    0 == n.result ? (zn = n.data, n.data.prizeData ? (zn.prizeData = JSON.parse(n.data.prizeData), _t(zn)) : zn.prizeData = {},
                    te()) : pe(n.msg),
                    t && t(e)
                })
            }) : (G(), me(e.msg), t && t(e))
        },
        !0)
    }
    function Nt(t) {
        Vt() ||
        function(t) {
            C(),
            zn = null,
            qt(function(e) {
                0 == e.result ? rn.dataEvent.getSecret(function(n) {
                    var i = ei.getUserHelpGrabKey(); !
                    function(t, e, n) {
                        Re(vn + "HelpGrab", {
                            wsiteGuid: Sn,
                            gameGuid: dn,
                            secret: t,
                            grabKey: e,
                            identify: En,
                            fg: Wn
                        },
                        "POST").then(function(t) {
                            n && n(t)
                        })
                    } (n, i,
                    function(n) {
                        G(),
                        e.result = n.result,
                        e.grabRet = n,
                        0 == n.result ? (zn = n.data, n.data.prizeData ? (zn.prizeData = JSON.parse(n.data.prizeData), _t(zn)) : zn.prizeData = {},
                        te()) : pe(n.msg),
                        t && t(e)
                    })
                }) : (G(), me(e.msg), t && t(e))
            },
            !0, !1)
        } (t)
    }
    function Ft(t) {
        Vt() ||
        function(t) {
            C(),
            zn = null,
            qt(function(e) {
                0 == e.result ? rn.dataEvent.getSecret(function(n) {
                    var i = ei.getUserHelpGrabKey(); !
                    function(t, e, n) {
                        Re(vn + "JoinsGrab", {
                            wsiteGuid: Sn,
                            gameGuid: dn,
                            secret: t,
                            grabKey: e,
                            fg: Wn
                        },
                        "POST").then(function(t) {
                            n && n(t)
                        })
                    } (n, i,
                    function(i) {
                        if (G(), e.result = i.result, 0 == i.result) {
                            zn = i.data,
                            i.data.prizeData ? (zn.prizeData = JSON.parse(i.data.prizeData), _t(zn)) : zn.prizeData = {};
                            var a = Tt(),
                            s = jt(zn.prizeData.showForm);
                            if (0 == a.length || !s) return Dn = !1,
                            void Ot(n, !1);
                            te()
                        } else pe(i.msg);
                        t && t(e)
                    })
                }) : (G(), me(e.msg), t && t(e))
            },
            !0, !1)
        } (t)
    }
    function jt(t) {
        return void 0 == t || t
    }
    function Rt(t) {
        return void 0 != t && t
    }
    function Vt() {
        return ! ei.checkGameGuid() && (me("游戏数据没有设置！"), !0)
    }
    function Lt(t, e, n) {
        Jt(function(i) {
            if (0 == i.result) {
                var a = U();
                if (n && !a) return i = {
                    result: 7,
                    msg: "没有开启抽奖"
                },
                void(t && t(i));
                if (n && ei.getWinKey()) return i = {
                    result: 8,
                    msg: "已经中奖了"
                },
                void(t && t(i));
                var s = 0 | h("prizeStrategy", "limitScore");
                return e && s && !Dn && !ei.checkUserScore(s) ? (i = {
                    result: 4,
                    msg: "游戏得分不够"
                },
                void(t && t(i))) : n && ei.getGrabKey() >= rn.pluginGame.dayGrabCount ? (i = {
                    result: 5,
                    msg: "今天机会用完了"
                },
                void(t && t(i))) : n && !ei.checkUserGrabKey() ? (i = {
                    result: 6,
                    msg: "本次机会用完了"
                },
                void(t && t(i))) : void(t && t(i))
            }
            t && t(i)
        },
        !1, n)
    }
    function Kt(t, e) {
        var n = ei.getBaseData();
        if (t) for (key in t) n[key] = t[key];
        n.end = ei.getTimeStr(),
        e && (n = pn.appendChannelParams(n));
        return d(JSON.stringify(n), ei.getEnKey())
    }
    function Jt(t, e, n, i) {
        c(function() {
            var a = {
                result: 0,
                msg: ""
            };
            if (!rn.pluginGame) return a = {
                result: 1,
                msg: "游戏数据没有设置"
            },
            void Xt(t, a);
            if (ei.checkGameError(rn.pluginGame.code)) return a = {
                result: rn.pluginGame.code,
                msg: rn.pluginGame.msg
            },
            void Xt(t, a);
            if (i) {
                var s = new Date,
                o = rn.pluginGame.endTime.replace(/-/g, "/");
                if (endTime = new Date(o), endTime && endTime < s) return a = {
                    result: 2,
                    msg: "活动已经结束"
                },
                void Xt(t, a);
                var c = rn.pluginGame.startTime.replace(/-/g, "/"),
                r = new Date(c);
                if (r && r > s) return a = {
                    result: 3,
                    msg: "活动还没开始"
                },
                void Xt(t, a)
            }
            var l = !1;
            if (qn || rn.pluginGame.canRegionPlay && !n || (l = !0), l) console.log("=====pluginGame.canRegionPlay-1 ==="),
            e ? (console.log("=====pluginGame.canRegionPlay-isStart ==="), Wt(e, t)) : (window.showRRXProcess("加载中..."), setTimeout(function() {
                console.log("=====pluginGame.canRegionPlay-2 ==="),
                Wt(e, t)
            },
            2e3));
            else {
                if (e) return void oe(function(e, n) {
                    e && (n && (a = {
                        result: 14,
                        msg: n
                    }), Xt(t, a))
                });
                Xt(t, a)
            }
        })
    }
    function Wt(t, e) {
        var n = {
            result: 0,
            msg: ""
        };
        pn.checkReginLimit(rn.pluginGame.regionLimit,
        function(i, a) {
            if (window.hideRRXProcess(), 0 !== i) Xt(e, n = {
                result: 13,
                msg: a
            });
            else {
                if (t) return void oe(function(t, i) {
                    t && (i && (n = {
                        result: 14,
                        msg: i
                    }), Xt(e, n))
                });
                Xt(e, n)
            }
        },
        "", !0)
    }
    function Xt(t, e) {
        console.log("endEvent"),
        0 != e.result && $e(),
        t && t(e)
    }
    function qt(t, e, n, i) {
        Jt(function(a) {
            if (0 == a.result) {
                var s = j() || J();
                if (e && !s) return a = {
                    result: 7,
                    msg: "没有开启抽奖"
                },
                void(t && t(a));
                l(!1,
                function() {
                    return e && !Qn.guid ? (a = {
                        result: 8,
                        msg: "还没有发起助力"
                    },
                    void(t && t(a))) : e && !ei.checkIsSelf() ? (a = {
                        result: 9,
                        msg: "不是助力发起者"
                    },
                    void(t && t(a))) : (e || n || i) && !Qn.data.helperData ? (a = {
                        result: 1,
                        msg: "没有助力数据"
                    },
                    void(t && t(a))) : e && ei.getHelperData().needScore > 0 ? (a = {
                        result: 4,
                        msg: "游戏得分不够"
                    },
                    void(t && t(a))) : e && ei.getHelperData().needCount > 0 ? (a = {
                        result: 4,
                        msg: "助力好友不够"
                    },
                    void(t && t(a))) : e && !ei.checkUserHelpGrabKey() ? (a = {
                        result: 6,
                        msg: "本次机会用完了"
                    },
                    void(t && t(a))) : n && ei.checkIsSelf() && ei.getHelperData().isNewState && "0" == ei.getHelperData().leftSendCount ? (a = {
                        result: 11,
                        msg: "机会用完了"
                    },
                    void(t && t(a))) : n && Kn ? (a = {
                        result: 15,
                        msg: Jn
                    },
                    void(t && t(a))) : i && ei.getHelperData().isOverHelp && !ei.checkIsSelf() ? (a = {
                        result: 12,
                        msg: "TA已经完成目标了"
                    },
                    void(t && t(a))) : i && Qn.data.hasHelper ? (a = {
                        result: 17,
                        msg: "已经帮助过啦"
                    },
                    void(t && t(a))) : i && Kn ? (a = {
                        result: 16,
                        msg: Jn
                    },
                    void(t && t(a))) : void(t && t(a))
                })
            } else t && t(a)
        },
        n)
    }
    function Yt(t, e, n, i, a) {
        console.log("parm:", e, n, i, a),
        Jt(function(i) {
            if (0 == i.result) {
                var s = U();
                if (e && !s) return i = {
                    result: 7,
                    msg: "没有开启抽奖"
                },
                void(t && t(i));
                var o = R();
                if (n && !o) return i = {
                    result: 7,
                    msg: "没有开启兑换"
                },
                void(t && t(i));
                l(!1,
                function() {
                    return console.log("userdata:", Qn),
                    !e && !n || Qn.guid ? !e && !n || ei.checkIsSelf() ? (e || n || a) && !Qn.data.helperData ? (i = {
                        result: 1,
                        msg: "没有助力数据"
                    },
                    void(t && t(i))) : a && !Qn.guid ? (i = {
                        result: 4,
                        msg: "先要参加活动哦"
                    },
                    void(t && t(i))) : a && ei.getHelperData().isOverHelp && !ei.checkIsSelf() ? (i = {
                        result: 12,
                        msg: "TA已经完成目标了"
                    },
                    void(t && t(i))) : a && Qn.data.hasHelper ? (i = {
                        result: 17,
                        msg: "已经帮助过啦"
                    },
                    void(t && t(i))) : a && Kn ? (i = {
                        result: 16,
                        msg: Jn
                    },
                    void(t && t(i))) : void(t && t(i)) : (i = {
                        result: 9,
                        msg: "不是助力发起者"
                    },
                    void(t && t(i))) : (i = {
                        result: 8,
                        msg: "还没有发起助力"
                    },
                    void(t && t(i)))
                })
            } else t && t(i)
        },
        !1, !1, !0)
    }
    function Qt() {
        var t = "pluginGame-winPrize-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        Ee();
        var e = $('<div class="pluginGame-winPrize-dialog">\t\t<div class="content-close">\t\t<img class="content-close-img" src="#" alt="关闭按钮">\t</div>\t<div class="dialog-content">\t\t<div class="dialog-content-img">\t\t\t<div class="content-box-star"></div>\t\t\t\t\t\t<div class="content-box">\t\t\t\t<div class="content-box-head">\t<div class="winTest" style="width:400px;height:118px;margin: 0 auto;"></div>\t\t</div>\t<img class="content-box-body-headImg" src="#">\t\t\t<div class="content-box-body"> <div class="noPrize-info">\t\t\t\t\t\t<img src="http://wx.qlogo.cn/mmopen/ZpT6Pf3Ou7UPNKNEWNXGte5wIWXY9MegIaGJTzemahsNoropibPp9heo1aWL5yJnaovS7rsB3iaibG0QEZu9A0oYwnq6EGF3uhD/0">\t\t\t\t\t</div>\t\t\t<div class="winPrize-line"></div>\t\t\t\t\t<div class="winPrize-title">\t\t\t\t\t\t抽中20元优惠卷\t\t\t\t\t</div>\t</div> <div class="content-box-body-details"><div class="details-iscroll"><div><div style="display: table; width: 100%;min-height:140px"><div class="iscroll-text" style=" word-wrap:break-word;font-size:28px"></div></div> <div class="details-info"><div class="details-info-box"><img src="http://image3.weplus.me/2016/07/20/1468986497159.png"><span></span></div></div> </div> </div>\t</div>\t<div class="content-box-foot">\t\t\t\t\t<div class="content-action btn-border-40 ">\t\t\t\t\t\t\t\t</div>\t\t</div>\t</div></div></div></div> ');
        xn.append(e),
        e.find(".content-action").append(Yn.getBtn);
        var n = xn.find(".pluginGame-winPrize-dialog");
        rn.pages[t] = n;
        var i = n.find(".content-close-img");
        i.attr({
            src: yn + "./image/close.png"
        });
        n.find(".dialog-content-img").css({
            "background-image": 'url("' + yn + './image/prizeBg1.png")'
        });
        n.find(".content-box-star").css({
            "background-image": 'url("' + yn + './image/winPrizeStar.png")'
        });
        n.find(".dialog-content .content-box-head img").attr({
            src: yn + "./image/winPrizeInfo.png"
        });
        n.find(".dialog-content .content-box-body-headImg").attr({
            src: yn + "./image/prizeInfoBg1.png"
        }),
        n.find(".winTest").append(Yn.winTest),
        n.find(".winTest svg path").css({
            fill: vi.cssObj.basicColor
        }),
        n.find(".winTest svg  g path").css({
            fill: "#fff"
        }),
        n.find(".winTest svg polygon").eq(1).css({
            fill: vi.cssObj.basicColor
        });
        n.find(".content-action").css({
            "background-color": "#fff",
            "box-shadow": " 2px 12px 1Px #ccc"
        }),
        i.unbind().bind(Cn,
        function() {
            Dn = !1,
            ie(),
            $t()
        }),
        n.find(".dialog-content").css({
            background: "-webkit-gradient(linear, 0% 0%, 0% 100%, from(" + vi.cssObj.basicColorChang + "), to(" + vi.cssObj.basicColor + ")",
            background: "-moz-linear-gradient(top," + vi.cssObj.basicColorChang + " 0%, " + vi.cssObj.basicColor + " 100%)",
            background: "-webkit-linear-gradient(top, " + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)",
            background: "-o-linear-gradient(top," + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)",
            background: "-ms-linear-gradient(top, " + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)",
            background: "linear-gradient(to bottom, " + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)"
        }),
        n.find(".content-action").find("svg path").css({
            fill: vi.cssObj.basicColor
        });
        return u(t, n.find(".content-box-body-details")[0]),
        rn.pages[t]
    }
    function Zt() {
        Dn = !1,
        C(),
        rn.dataEvent.getSecret(function(t) {
            Ot(t, !1)
        },
        !1)
    }
    function te(t) {
        var e = Qt();
        if (e) {
            x(!1);
            c = e.find(".content-box-body-details");
            c.hide();
            var n = e.find(".content-box-body");
            n.show(),
            e.find(".content-box-foot").show();
            var i = e.find(".content-action"),
            a = e.find(".winPrize-title"),
            s = zn ? zn.image || bn + "2016/07/20/1468986497159.png": bn + "2016/07/20/1468986497159.png",
            o = zn ? zn.name || "": "";
            f("prizePage");
            if (a.html(o), a.css({
                color: vi.cssObj.basicColor
            }), e.find(".noPrize-info img").attr({
                src: s
            }), i.unbind().bind(Cn,
            function() {
                ie(),
                Dn = !1;
                var t = Tt(),
                e = Rt(zn.prizeData.showForm);
                _n && (e = !1),
                0 != t.length && e ? Nn ? Fn ? Zt() : ee(function() {
                    Zt()
                },
                function() {
                    It()
                }) : It() : Zt()
            }), zn.detail) {
                n.hide();
                var c; (c = e.find(".content-box-body-details")).show(),
                c.find(".details-iscroll .iscroll-text")[0].innerText = zn.detail,
                c.show();
                var r = e.find(".details-info");
                r.find("img").attr({
                    src: s
                }),
                r.find("span").html(o),
                r.find("span").css({
                    color: vi.cssObj.basicColor
                }),
                r.show();
                c.find(".details-info-box").css({
                    "border-top-color": vi.cssObj.basicColor
                }),
                e.find(".content-box-foot").hide()
            }
            e.show(),
            e.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
            e.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni")
        }
    }
    function ee(t, e) {
        var n = {
            activeGuid: dn
        };
        pn.checkHasFormInfo(n,
        function(n) {
            n.has && (Fn = !0),
            Fn ? t() : e()
        })
    }
    function ne(t) {
        if (Dn = !1, 3 != zn.type) {
            if (2 == zn.type) return void
            function() {
                var t = de();
                if (t) {
                    var e = zn ? zn.image || bn + "2016/07/20/1468986497159.png": bn + "2016/07/20/1468986497159.png",
                    n = zn ? zn.name || "": "";
                    t.find(".dialog-content-info-img").attr({
                        src: e
                    }),
                    t.find(".dialog-content-info-text-title").html(n),
                    zn.detail && (t.find(".detail-text")[0].innerText = zn.detail),
                    t.css({
                        display: "block"
                    }),
                    t.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
                    t.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
                    x(!1)
                }
            } ();
            if (7 == zn.type) return void
            function(t) {
                x(!1);
                var e = ei.getBasicColor(),
                n = {
                    name: zn ? zn.name || "": "",
                    image: zn ? zn.image: "",
                    detail: t.prizeDetail
                };
                le(!0);
                showRRXPrizeDetailDialog(pn, n, e,
                function() {
                    le(!1),
                    x(!0)
                })
            } (t);
            if (5 == zn.type) return void
            function() {
                var t = zn.infoData,
                e = t.cardId,
                n = t.cardExt;
                wx.addCard({
                    cardList: [{
                        cardId: e,
                        cardExt: n
                    }],
                    success: function(t) {
                        t.cardList
                    },
                    fail: function(t) {
                        me("加入卡券失败")
                    }
                })
            } ();
            if (6 == zn.type) {
                return void me("积分领取成功", "前往兑换", pn.formatJfCenterUrl(t.uniqueCenterUrl))
            }
            if (3 == zn.prizeType) return void se();
            me("领取成功")
        } else se()
    }
    function ie() {
        var t = Qt();
        t && (t.hide(), t.find(".dialog-content").removeClass("bounceInUpAni"), t.find(".content-close").removeClass("bounceInUpAni"), x(!0))
    }
    function ae(t) {
        ei.navigator(t)
    }
    function se() {
        if ("1" == zn.prizeData.isApiWay) return zn.detail ? (console.log("thridPrize-detial:", zn.detail), void
        function() {
            var t = zn ? zn.image || bn + "2016/07/20/1468986497159.png": bn + "2016/07/20/1468986497159.png",
            e = zn ? zn.name || "": "",
            n = w(zn.detail);
            console.log("--show dict parse-", n);
            var i = {
                name: e,
                image: t,
                detail: n
            },
            a = ei.getBasicColor();
            showRRXPrizeDetailDictDialog(pn, i, a)
        } ()) : void me("领取成功");
        1 != zn.prizeData.isLinkType ? zn && zn.prizeData.link ? ae(zn.prizeData.link) : me("奖品链接不可用") : me("奖品已发放", "前往领取", "1", {
            miniLink: zn.prizeData.miniLink,
            miniPagepath: zn.prizeData.miniPagepath || "",
            width: 275,
            height: 85
        })
    }
    function oe(t) {
        if (Hn) {
            if (ei.checkPresetCanAfter()) return void(t && t(!0));
            Qe(!1, !1),
            function(t) {
                x(!1);
                var e = ei.getBasicColor(),
                n = Tt();
                le(!0),
                showRRXPresetFormDialog(pn, dn, n, e,
                function(e) {
                    le(!1),
                    x(!0);
                    var n = !1,
                    i = "";
                    "okEvent" == e.event ? (Hn = !1, Vn = !0, n = !0) : "errorEvent" == e.event ? (n = !0, i = e.result) : "closeEvent" == e.event && (n = !0, i = "请先报名哦");
                    t && t(n, i)
                },
                !0)
            } (t)
        } else t && t(!0)
    }
    function ce() {
        x(!1);
        var t = ei.getBasicColor(),
        e = {
            openCode: zn.infoData.openCode
        };
        le(!0),
        showRRXAfterOnlineDialog(pn, e, t,
        function(t) {
            le(!1),
            x(!0)
        })
    }
    function re() {
        x(!1);
        var t = ei.getBasicColor(),
        e = zn.infoData,
        n = {
            openCode: e.openCode,
            appName: e.appName,
            appQrUrl: e.appQrUrl
        };
        le(!0),
        showRRXWxPuplicDialog(pn, n, t,
        function(t) {
            le(!1),
            x(!0)
        })
    }
    function le(t) {
        On = t
    }
    function de() {
        var t = "pluginGame-winPrizeDetail-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        Ee();
        var e = $('<div class="pluginGame-winPrizeDetail-dialog">\t<div class="content-close">\t\t\t\t<img class="content-close-img" src="#" alt="关闭按钮">\t</div> \t<div class="dialog-content"> \t\t<div class="dialog-content-left">\t\t</div> \t\t<div class="dialog-content-right">\t\t\t<div class="dialog-content-info">\t\t\t\t<img class="dialog-content-info-img" src="">\t\t\t\t<div class="dialog-content-info-text">\t\t\t\t\t<div class="dialog-content-info-text-title"></div>\t\t\t\t\t<div class="dialog-content-info-text-detail">\t\t\t\t\t\t<div class="detail-iScroll" style="position: absolute;overflow: hidden;">\t\t\t\t\t\t\t<div style="display: table;min-height: 130px;">\t\t\t\t\t\t\t<div class="detail-text" style="display: table-cell;\t\t\t\t\t\t\t\tword-wrap: break-word;\t\t\t\t\t\t\t\tword-break: break-all;\t\t\t\t\t\t\t\twidth: 100%;font-size: 22px;color: #929292">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t</div>\t</div></div></div>');
        xn.append(e),
        rn.pages[t] = xn.find(".pluginGame-winPrizeDetail-dialog");
        var n = e.find(".content-close-img");
        n.attr({
            src: yn + "./image/close.png"
        });
        var i = e.find(".dialog-content");
        i.css({
            "background-image": 'url("' + yn + './image/detailBg.png")'
        }),
        i.find(".dialog-content-left").append(Yn.winDetail),
        i.find(".dialog-content-left svg path").css({
            fill: vi.cssObj.basicColor
        }),
        i.find(".dialog-content-left svg  g path").css({
            fill: "#fff"
        }),
        i.find(".dialog-content-info-text-title").css({
            color: vi.cssObj.basicColor
        }),
        n.unbind().bind(Cn,
        function() { !
            function() {
                var t = de();
                t && (t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), x(!1), setTimeout(function() {
                    t.css({
                        display: "none"
                    })
                },
                600))
            } ()
        });
        return u(t, i.find(".dialog-content-info-text-detail")[0]),
        rn.pages[t]
    }
    function ue() {
        var t = "pluginGame-noPrize-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        Ee();
        var e = $('<div class="pluginGame-noPrize-dialog">\t\t<div class="content-close">\t\t<img class="content-close-img" src="#" alt="关闭按钮">\t</div>\t<div class="dialog-content">\t\t<div class="dialog-content-img">\t\t\t\t\t\t<div class="content-box">\t\t\t\t<div class="content-box-head">\t\t<div class="loseTest" style="width:376px;height:108px;margin: 0 auto;">  </div>\t\t\t\t\t</div>\t\t<img class="content-box-body-headImg" src="#">\t\t<div class="content-box-body">\t <div style="display: table;    margin: 0 auto;">\t\t\t\t<div class="noPrize-info" style="    display: table-cell;vertical-align: middle;">\t\t\t\t\t\t再接再厉\t\t\t\t\t</div>\t\t</div>\t\t\t<div class="noPrize-cry">\t\t\t\t\t\t\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="content-box-foot">\t\t\t<div class="content-action btn-border-40 ">\t\t\t\t\t\t</div>\t\t</div>\t</div></div></div></div> ');
        xn.append(e),
        e.find(".noPrize-cry").append(Yn.cry),
        e.find(".content-action").append(Yn.knowBtn);
        var n = xn.find(".pluginGame-noPrize-dialog"),
        i = (f("stylePage"), n.find(".content-close-img"));
        i.attr({
            src: yn + "./image/close.png"
        });
        n.find(".dialog-content-img").css({
            "background-image": 'url("' + yn + './image/prizeBg1.png")'
        });
        n.find(".dialog-content .content-box-head img").attr({
            src: yn + "./image/noPrizeInfo.png"
        });
        n.find(".dialog-content .content-box-body-headImg").attr({
            src: yn + "./image/prizeInfoBg1.png"
        });
        var a = n.find(".dialog-content .noPrize-cry");
        a.css({
            "border-top-color": vi.cssObj.basicColorChang
        }),
        a.find("svg path").css({
            fill: vi.cssObj.basicColor
        }),
        n.find(".loseTest").append(Yn.loseTest),
        n.find(".loseTest svg path").css({
            fill: vi.cssObj.basicColor
        }),
        n.find(".loseTest svg g path").css({
            fill: "#fff"
        });
        var s = n.find(".content-action");
        return s.css({
            "background-color": "#fff",
            "box-shadow": " 2px 12px 1Px " + vi.cssObj.basicColorChang + " "
        }),
        i.unbind().bind(Cn,
        function() {
            ge()
        }),
        s.unbind().bind(Cn,
        function() {
            ge()
        }),
        n.find(".dialog-content").css({
            background: "-webkit-gradient(linear, 0% 0%, 0% 100%, from(" + vi.cssObj.basicColorChang + "), to(" + vi.cssObj.basicColor + ")",
            background: "-moz-linear-gradient(top," + vi.cssObj.basicColorChang + " 0%, " + vi.cssObj.basicColor + " 100%)",
            background: "-webkit-linear-gradient(top, " + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)",
            background: "-o-linear-gradient(top," + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)",
            background: "-ms-linear-gradient(top, " + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)",
            background: "linear-gradient(to bottom, " + vi.cssObj.basicColorChang + " 0%," + vi.cssObj.basicColor + " 100%)"
        }),
        n.find(".content-action").find("svg path").css({
            fill: vi.cssObj.basicColor
        }),
        rn.pages[t] = n,
        rn.pages[t]
    }
    function pe(t) {
        var e = ue();
        e && (t && (t.length > 6 && t.length <= 12 ? e.find(".noPrize-info").css({
            "font-size": "40px"
        }) : t.length > 12 ? e.find(".noPrize-info").css({
            "font-size": "30px"
        }) : e.find(".noPrize-info").css({
            "font-size": "50px"
        }), e.find(".noPrize-info").html(t)), e.css({
            display: "block"
        }), e.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), e.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), x(!1))
    }
    function ge() {
        var t = ue();
        t && (t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide()
        },
        600), x(!0))
    }
    function fe(t, e) {
        template.config("escape", !1);
        return template.compile(t)(e)
    }
    function he(t) {
        if (!t) return t;
        if (t.indexOf("积分") > -1 && -1 === t.indexOf("积分商城")) {
            var e = pn.getMyJfConf();
            e.unit && (t = t.replace(/积分/g, e.unit))
        }
        return t
    }
    function ve(t, e, n, i) {
        var a = "pluginGame-info-dialog" + In;
        if (rn.pages[a]) {
            if (!n) return rn.pages[a];
            rn.pages[a].remove()
        }
        s(),
        o();
        var c = $('<div class="pluginGame-info-dialog">\t<div class="dialog-content">\t\t\t\t<div class="content-close">\t\t\t<img class="content-close-img" src="#">\t\t</div>\t\t\t\t<div class="content-info">\t\t\t<div class="content-info-inner">\t\t\t\t\t\t\t</div>\t\t</div>\t\t\t\t<div class="content-action btn-border-40">\t</div></div></div> ');
        xn.append(c);
        var r = Yn.knowBtn;
        t && e && (r = fe(Yn.changeLinkBtn, {
            linkUrl: e,
            linkName: t
        })),
        c.find(".content-action").append(r);
        var l = xn.find(".pluginGame-info-dialog");
        rn.pages[a] = l,
        Ee();
        l.find(".dialog-content").css({
            "background-color": "#fff",
            border: "4px solid  " + vi.cssObj.basicColor + " "
        });
        var d = l.find(".content-close-img");
        d.attr({
            src: yn + "./image/close.png"
        }),
        $contentInner = l.find(".content-info-inner"),
        $contentInner.css({
            color: vi.cssObj.basicColor
        });
        var u = l.find(".content-action");
        return u.css({
            "background-color": vi.cssObj.basicColor,
            "box-shadow": " 2px 12px 1Px " + vi.cssObj.basicColorChang + " "
        }),
        u.unbind().bind(Cn,
        function() {
            be(),
            i && i()
        }),
        d.unbind().bind(Cn,
        function() {
            be()
        }),
        rn.pages[a]
    }
    function me(t, e, n, i) {
        if (t) {
            var a = ve(e, n, !0);
            if (a.find(".content-action wx-open-launch-weapp").remove(), a && (t = he(t), a.find(".content-info-inner").html(t), a.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), a.show()), i) if ("miniprogram" === window.__wxjs_environment) a.find(".content-action").unbind().bind(Cn,
            function() {
                wx.miniProgram.reLaunch({
                    url: i.miniPagepath,
                    success: function(t) {
                        console.log(t)
                    },
                    fail: function(t) {
                        alert(JSON.stringify(t)),
                        console.error(t)
                    }
                })
            });
            else if (i && i.miniLink) {
                var s = '<wx-open-launch-weapp style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 1; opacity: 1;" username="' + i.miniLink + '" path="' + i.miniPagepath + '"> <template><button style="border: none;background:rgba(255, 0, 0, 0);width:' + i.width + "px;height:" + i.height + 'px;"></button></template></wx-open-launch-weapp>';
                a.find(".content-action").append(s)
            }
        }
    }
    function be() {
        var t = ve();
        t && (t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide()
        },
        600))
    }
    function ye(t, e, n) {
        var i = ve(e, "javascript:void(0)", !0, n);
        i && (t = he(t), i.find(".content-info-inner").html(t), i.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), i.show())
    }
    function we(t) {
        var e = "pluginGame-toast-dialog" + In;
        if (rn.pages[e]) {
            if (!t) return rn.pages[e];
            rn.pages[e].remove()
        }
        s(),
        o();
        var n = $('<div class="pluginGame-toast-dialog"><div class="toast-content"><div class="toast-title"><img class="toast-title-img" src="#"></div><div class="toast-info"><div class="toast-info-inner"></div></div></div></div>');
        xn.append(n);
        var i = xn.find(".pluginGame-toast-dialog");
        return rn.pages[e] = i,
        rn.pages[e]
    }
    function xe() {
        var t = we();
        if (t) return t.find(".toast-content").removeClass("toast-content-hide toast-show").addClass("toast-hide"),
        t
    }
    function Se(t, e) {
        t.find(".content-info").html(e),
        t.data("show", !0),
        t.css({
            animation: "fadeInUp 0.5s ease 0s 1 both"
        }),
        setTimeout(function() {
            t.css({
                animation: "fadeOut 0.5s ease 0s 1 both"
            }),
            setTimeout(function() {
                t.data("show", !1)
            },
            500)
        },
        1e3),
        t.show()
    }
    function ke() {
        return pn.getCustomerCopyrightInfo()
    }
    function Ce() {
        var t = "pluginGame-basic-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        o();
        var e = $('<div class="pluginGame-basic-dialog"> <div class="content-close"> <img class="content-close-img" src="#"> </div> <div class="dialog-content"> <div class="dialog-content-head"> <ul class="wrapper"> <li class="basicPage">活动说明</li> <span class="topsPage"></span> <li class="topsPage">排行榜</li> <span class="friendsPage"></span> <li class="friendsPage">好友排行</li> <span class="helpersPage"></span> <li class="helpersPage">助力榜</li> <span class="actionsPage"></span> <li class="actionsPage">动态</li> <span class="focusPage"></span> <li class="focusPage">关于我们</li> </ul> </div> <div class="dialog-content-box"> <div id="scrolle"> </div> </div> <div class="dialog-content-foot" style="overflow: hidden"> <a href="https://mp.weixin.qq.com/s/VJegP100czu3jWsYn92UxQ" target="_blank" style="text-decoration: none;color:#fff"> </a></div> </div> </div>');
        rn.pages[t] = e,
        Ee();
        f("stylePage");
        var n = e.find(" .content-close-img");
        n.attr({
            src: vi.cssObj.closeBtn
        });
        var i = e.find(".dialog-content-foot");
        i.css({
            "background-color": vi.cssObj.basicColor
        });
        var a = ke();
        if (a) if (a.content) i.find("a").html(a.content),
        i.find("a").attr({
            href: a.url
        });
        else {
            var s = ["6px", "-45px"],
            c = 0,
            r = $('<div class="scroll" style="position: relative;top:6px; -webkit-transition: top .8s; font-size:26px"><div>快速制作活动小游戏-人人秀 </div> <div>300万用户正在使用 </div> ');
            i.find("a").append(r);
            var l = i.find("a").find(".scroll");
            setInterval(function() {
                l.css({
                    top: s[c]
                }),
                ++c > 1 && (c = 0)
            },
            1800)
        } else i.remove(),
        e.find(".dialog-content-box").css({
            height: "700px"
        });
        n.unbind().bind(Cn,
        function() {
            De()
        }),
        function() {
            if (vi.pages) return;
            vi.pages = [],
            vi.names = [],
            vi.pages.push(vi.pageNames.basicPage),
            vi.names.push("活动说明");
            E() && (vi.pages.push(vi.pageNames.topsPage), vi.names.push("排行榜"));
            H() && (vi.pages.push(vi.pageNames.friendsPage), vi.names.push("好友榜"));
            var t = function() {
                if (F()) return h("topStrategy", "isHelperTops") || !1;
                return ! 1
            } (),
            e = J(); (t || e) && (vi.pages.push(vi.pageNames.helpersPage), vi.names.push("助力榜"));
            N() && (vi.pages.push(vi.pageNames.actionsPage), vi.names.push("动态"));
            B() && (vi.pages.push(vi.pageNames.focusPage), vi.names.push("关注我们"))
        } ();
        var d = e.find(".dialog-content-head li");
        $.each(vi.pages,
        function(t, n) {
            var i = e.find("li." + n);
            i.css({
                display: "inline"
            }),
            vi.tags[n] = i;
            e.find("span." + n).css({
                display: "inline"
            }),
            i.unbind().bind(Cn,
            function() {
                d.css({
                    color: "#342e2e",
                    "background-color": "transparent"
                }),
                Ge(i, n)
            })
        }),
        xn.append(rn.pages[t]);
        u(t + "meun", e.find(".dialog-content-head")[0]);
        return u(t, e.find(".dialog-content-box")[0]),
        rn.pages[t]
    }
    function Ge(t, e, n) {
        Ee(),
        n ? xn.find(".pluginGame-basic-dialog li." + e + " ").css({
            color: "#fff",
            "background-color": vi.cssObj.basicColor
        }) : t.css({
            color: "#fff",
            "background-color": vi.cssObj.basicColor
        }),
        e && e != vi.currentName && (vi.currentName = e, Ae(t, e))
    }
    function ze(t, e) {
        if (!Vt()) {
            var n = Ce();
            if (n) {
                t = t || vi.pages[0];
                Ge(n.find("." + t), t, e),
                n.show(),
                n.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
                n.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni")
            }
        }
    }
    function De() {
        var t = Ce();
        t && (t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide(),
            t.find(".dialog-content-head li").css({
                color: "#000",
                "background-color": "#fff"
            }),
            $e(),
            vi.currentName = null
        },
        600))
    }
    function Pe() {
        var t = "pluginGame-extend-dialog" + In;
        if (rn.pages[t]) return rn.pages[t];
        o();
        var e = $('<div class="pluginGame-extend-dialog"> <div class="content-close"> <img class="content-close-img" src="#"> </div> <div class="dialog-content"> <div class="dialog-content-head"> <ul class="wrapper"> <li class="tasksPage">任务</li> <span class="storePage"></span> <li class="storePage">商店</li> </ul> </div> <div class="dialog-content-box"> <div id="scrolle"> </div> </div> </div> </div>');
        rn.pages[t] = e,
        Ee();
        f("stylePage");
        var n = e.find(" .content-close-img");
        n.attr({
            src: vi.cssObj.closeBtn
        }),
        n.unbind().bind(Cn,
        function() { !
            function() {
                var t = Pe();
                t && (t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
                    t.hide(),
                    t.find(".dialog-content-head li").css({
                        color: "#000",
                        "background-color": "#fff"
                    }),
                    $e(),
                    vi.curExtendName = null
                },
                600))
            } ()
        });
        var i = [vi.pageNames.tasksPage, vi.pageNames.storePage],
        a = e.find(".dialog-content-head li");
        $.each(i,
        function(t, n) {
            var i = e.find("li." + n);
            i.css({
                display: "inline"
            }),
            vi.tags[n] = i;
            e.find("span." + n).css({
                display: "inline"
            }),
            i.unbind().bind(Cn,
            function() {
                a.css({
                    color: "#342e2e",
                    "background-color": "transparent"
                }),
                Te(i, n)
            })
        }),
        xn.append(rn.pages[t]);
        u(t + "meun", e.find(".dialog-content-head")[0]);
        return u(t, e.find(".dialog-content-box")[0]),
        rn.pages[t]
    }
    function Te(t, e, n) {
        if (Ee(), n ? xn.find(".pluginGame-extend-dialog li." + e + " ").css({
            color: "#fff",
            "background-color": vi.cssObj.basicColor
        }) : t.css({
            color: "#fff",
            "background-color": vi.cssObj.basicColor
        }), e && e != vi.curExtendName) {
            vi.curExtendName = e;
            Ae(xn.find(".pluginGame-extend-dialog .dialog-content-box #scrolle"), e)
        }
    }
    function Ie(t, e) {
        if (!Vt()) {
            var n = Pe();
            if (n) {
                t = t || vi.pageNames.tasksPage;
                Te(n.find("." + t), t, e),
                n.show(),
                n.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"),
                n.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni")
            }
        }
    }
    function Me(t) {
        var e = "pluginGame-seed-dialog" + In;
        if (rn.pages[e]) return rn.pages[e];
        t = t || "种子",
        o();
        var n = '<div class="pluginGame-seed-dialog"> <div class="content-close"> <img class="content-close-img" src="#"> </div> <div class="dialog-content"> <div class="dialog-content-head"> <ul class="wrapper"> <li class="seedPage">' + t + '</li> </ul> </div> <div class="dialog-content-box"> <div id="scrolle"> </div> </div> </div> </div>',
        i = $(n);
        rn.pages[e] = i,
        Ee();
        f("stylePage");
        i.find(" .content-close-img").attr({
            src: vi.cssObj.closeBtn
        });
        var a = [vi.pageNames.seedPage],
        s = i.find(".dialog-content-head li");
        $.each(a,
        function(t, e) {
            var n = i.find("li." + e);
            n.css({
                display: "inline"
            }),
            vi.tags[e] = n;
            i.find("span." + e).css({
                display: "inline"
            }),
            n.unbind().bind(Cn,
            function() {
                s.css({
                    color: "#342e2e",
                    "background-color": "transparent"
                }),
                Oe(n, e)
            })
        }),
        xn.append(rn.pages[e]);
        u(e + "meun", i.find(".dialog-content-head")[0]);
        return u(e, i.find(".dialog-content-box")[0]),
        rn.pages[e]
    }
    function Oe(t, e, n) {
        Ee(),
        n ? xn.find(".pluginGame-seed-dialog li." + e + " ").css({
            color: "#fff",
            "background-color": vi.cssObj.basicColor
        }) : t.css({
            color: "#fff",
            "background-color": vi.cssObj.basicColor
        }),
        e && e != vi.curSeedName && (vi.curSeedName = e)
    }
    function Be() {
        var t = Me();
        t && (t.find(".dialog-content").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), t.find(".content-close").removeClass("bounceInUpAni").addClass("bounceOutUpAni"), setTimeout(function() {
            t.hide(),
            t.find(".dialog-content-head li").css({
                color: "#000",
                "background-color": "#fff"
            }),
            $e(),
            vi.curSeedName = null
        },
        600))
    }
    function Ue(t) {
        Vt() || (t && (oi.curMenu = t), Ie(vi.pageNames.storePage))
    }
    function $e() {
        var t = vi.currentName;
        rn.dataEvent.tirggerCloseEvent(t)
    }
    function Ae(t, e, n) {
        switch (e) {
        case vi.pageNames.basicPage:
            !
            function(t) {
                if (!ei.checkGameGuid()) return console.info("游戏数据没有设置！");
                var e = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
                e.html(""),
                Ee();
                var n = vi.cssObj.basicColor,
                i = h("basic", "content");
                if (K()) {
                    var a = h("conditionHelpStrategy", "helpcontent");
                    a && (i = a)
                }
                var s = rn.pluginGame.startTime + " ~ " + rn.pluginGame.endTime,
                o = '<div class="rule" >\t<div class="rule-one"><div class="rule-one-head"><div style="background-color:' + n + '" class="item">1</div>活动规则</div><div class="rule-one-box"></div></div><div class="rule-line">\t\t\t\t\t\t<div class="rule-line-head">\t\t\t\t\t\t\t<div style="background-color:' + n + ' " class="item">2</div>活动时间</div>\t<div class="rule-line-box">' + s + "</div>\t\t\t\t\t</div>\t\t\t\t</div>\n",
                c = template.compile(o)({
                    gameTime: s,
                    numBgColor: n
                }),
                r = 3;
                e.append(c),
                e.find(".rule-one-box")[0].innerText = i;
                var l = e.find("div.rule");
                if (rn.pluginGame.regionLimit) {
                    var d = pn.getFormatRegionLimit(rn.pluginGame.regionLimit);
                    rn.pluginGame.canRegionPlay && (d = "奖品适用地区：" + d);
                    var u = '<div class="rule-line"><div class="rule-line-head"><div style="background-color:' + n + '" class="item">' + r + '</div>活动地区</div><div class="rule-line-box">' + d + "</div></div>";
                    l.append(u),
                    r++
                }
                var p = ke();
                if (p) {
                    var g = p.content || "人人秀",
                    f = '<div class="rule-line"><div class="rule-line-head"><div style="background-color:' + n + '" class="item">' + r + '</div>技术支持</div><div class="rule-line-box">' + g + "</div></div>";
                    l.append(f),
                    r++
                }
                var v = U(),
                m = _(),
                b = j(),
                y = J();
                if (! (v || m || b || y)) return console.info("奖品不可用");
                var w = '<div class="rule-three"><div class="rule-three-head"><div style="background-color:' + n + '" class="item">' + r + '</div>活动奖品</div><div class="rule-three-box"></div></div>';
                l.append(w);
                it(e.find(".rule-three-box"))
            } ();
            break;
        case vi.pageNames.topsPage:
            ut(!1, !1);
            break;
        case vi.pageNames.friendsPage:
            ut(!0, !0);
            break;
        case vi.pageNames.helpersPage:
            ft();
            break;
        case vi.pageNames.actionsPage:
            ht();
            break;
        case vi.pageNames.focusPage:
            !
            function() {
                var t = xn.find(".pluginGame-basic-dialog .dialog-content .dialog-content-box #scrolle");
                t.html("");
                var e = $("<div class='focus'>");
                if (e && 0 != e.length) {
                    var n = template.compile('<div class="focus-info"><img src="{{wxQr}}""><div>长按二维码</div><div>关注公众号</div></div>'),
                    i = h("basic", "wxQr");
                    i && (i = i);
                    var a = n({
                        wxQr: i
                    });
                    e.append(a),
                    t.append(e)
                }
            } ();
            break;
        case vi.pageNames.tasksPage:
            vt();
            break;
        case vi.pageNames.storePage:
            mt();
            break;
        case vi.pageNames.seedPage:
            wt();
            break;
        default:
            t.html(e)
        }
    }
    function Ee() {
        if (vi.cssObj) return vi.cssObj;
        vi.cssObj = {};
        var t = f("stylePage"),
        e = yn + "./image/close.png";
        return vi.cssObj.closeBtn = e,
        vi.cssObj.basicColor = t.styleColor,
        vi.cssObj.basicColorChang = function(t, e) {
            return t.length > 7 ?
            function(t, e) {
                var n = t.split(","),
                i = e < 0 ? 0 : 255,
                a = e < 0 ? -1 * e: e,
                s = parseInt(n[0].slice(4)),
                o = parseInt(n[1]),
                c = parseInt(n[2]);
                return "rgb(" + (Math.round((i - s) * a) + s) + "," + (Math.round((i - o) * a) + o) + "," + (Math.round((i - c) * a) + c) + ")"
            } (t, e) : function(t, e) {
                var n = parseInt(t.slice(1), 16),
                i = e < 0 ? 0 : 255,
                a = e < 0 ? -1 * e: e,
                s = n >> 16,
                o = n >> 8 & 255,
                c = 255 & n;
                return "#" + (16777216 + 65536 * (Math.round((i - s) * a) + s) + 256 * (Math.round((i - o) * a) + o) + (Math.round((i - c) * a) + c)).toString(16).slice(1)
            } (t, e)
        } (t.styleColor, .4),
        vi.cssObj
    }
    function _e() {
        return this.test = function() {
            return console.info("pageEventTest")
        },
        this.enableWxFocus = B,
        this.showWxFocus = D,
        this.hideWxFocus = P,
        this.showPrizeRule = nt,
        this.showBasicPage = ze,
        this.showTops = et,
        this.enableTops = A,
        this.checkGrab = function(t, e) {
            ei.setUserScore(t),
            Lt(e, !0, !0)
        },
        this.Grab = function(t, e) {
            Et(t, e)
        },
        this.prizeActive = function(t, e, n, i, a, s) {
            Ve(t, e, n, i, a,
            function(t) {
                s && s(t)
            })
        },
        this.abandonPrize = function() {
            $t()
        },
        this.showGrab = function(t) { !
            function(t) {
                if (!Vt()) {
                    t && ei.setUserScore(t);
                    var e = At();
                    e && (x(!1), e.show())
                }
            } (t)
        },
        this.infoMsg = me,
        this.showProcess = C,
        this.endProcess = G,
        this.showShare = function() {
            pn.showShareDialog()
        },
        this.showAbout = function() {
            ae("https://mp.weixin.qq.com/s/VJegP100czu3jWsYn92UxQ")
        },
        this.setPluginCopyright = function(t) { !
            function(t) {
                var e = !1;
                pn.getDanmuConfig() && (e = pn.getDanmuConfig().show);
                var n = $(".plugin-copyright");
                n.show(),
                t ? (e && ($(".danmu-button").hide(), $(".danmu-show").hide(), pn.stopDanma(), $(".plugin-copyright").hide()), $(".rrx-icon-share").hide(), $(".rrx-icon-report").hide(), n.hide()) : (e && ($(".danmu-button").show(), $(".danmu-show").show(), pn.startDanma()), n.css({
                    "background-color": "transparent"
                }), n.find("a").css({
                    "font-size": "20px"
                }), n.find("div").hide(), $(".rrx-icon-share").show(), $(".rrx-icon-report").show())
            } (t)
        },
        this.checkGrabData = function(t) {
            pn.checkWeixinAlert() && (Jt(t, !0), g())
        },
        this.showHelpers = pt,
        this.startHelper = function(t) {
            if (pn.checkWeixinAlert()) {
                rn.pluginGame.consumePoints > 0 ? cn("normal", t) : on("normal", t)
            }
        },
        this.startAddHelper = function(t) {
            if (pn.checkWeixinAlert()) {
                rn.pluginGame.consumePoints > 0 ? cn("helper", t) : on("helper", t)
            }
        },
        this.checkHelper = function(t, e, n, i) {
            qt(t, e, n, i)
        },
        this.HelpGrab = function(t) {
            Nt(t)
        },
        this.JoinsGrab = function(t) {
            Ft(t)
        },
        this.getBasicColor = function() {
            return ei.getBasicColor()
        },
        this.showPubGrowPanel = function() {
            bt(),
            M()
        },
        this.hidePubGrowPanel = O,
        this.showSeedPanel = function(t, e) { !
            function(t, e, n, i) {
                if (!Vt()) {
                    var a = Me(t);
                    a && (n = n || vi.pageNames.seedPage, Oe(a.find("." + n), n, i), oi.seedCallback = e, wt(), a.show(), a.find(".dialog-content").removeClass("bounceOutUpAni").addClass("bounceInUpAni"), a.find(".content-close").removeClass("bounceOutUpAni").addClass("bounceInUpAni"))
                }
            } (t,
            function(t) {
                console.log("wseed:", t),
                e && e(t)
            })
        },
        this
    }
    function He() {
        this.panelBox = null,
        this.options = {
            topUp: {
                list: [{
                    value: "0",
                    text: "加油，离第#向前排名#名就差一步了"
                },
                {
                    value: "1",
                    text: "欧了，已稳稳拿下第#当前排名#名"
                },
                {
                    value: "2",
                    text: "终于，成功干掉了第#当前排名#名"
                },
                {
                    value: "3",
                    text: "恭喜，已经上升排名到#当前排名#"
                }]
            },
            upShare: {
                list: ["已经成功KO#分享者#"]
            },
            doYouSelf: {},
            upScore: {
                list: ["恭喜你打破记录", "恭喜，又刷新了记录", "恭喜，创建自己的新记录", "Frighting！"]
            },
            speedUp: {
                list: [{
                    value: 1,
                    text: "实在太快了，我要去写张卷子冷静下。"
                },
                {
                    value: 1,
                    text: "你跑的这么快，我只想问，约吗？╮(╯▽╰)╭"
                },
                {
                    value: 1,
                    text: "前方高能，带我装X带我飞。"
                },
                {
                    value: 0,
                    text: "龟一样的速度，感觉醉醉哒!"
                },
                {
                    value: 0,
                    text: "你只想做个安静的美男子，速度都是浮云吗？"
                }]
            },
            friendTopUp: {
                list: ["呀呼，已经超越#好友#"]
            }
        },
        this.fnInit = function(t, e, n, i) {
            if (ei.checkGameGuid()) {
                var a = this;
                this.isScoreUp = !1,
                this.aScoreUpMsg = [],
                this.beyondSelf = [0, 0],
                this.topUpMsg = [!1, 0],
                this.topUpMsgText = [],
                this.currentMyTop,
                this.currentMyFriendTop,
                this.bFriendmsgShow = !1,
                this.friendTopUpMsgText = [],
                this.friendTopUpMsg = [!1, 0],
                this.doYouSelf = {},
                this.bSpeedUp = !1,
                this.aBadText = [],
                this.aGoodText = [],
                this.panelBox = function() {
                    var t = "pluginGame-IncentCopy-dialog" + In;
                    if (rn.pages[t]) return rn.pages[t];
                    s(),
                    rn.pages[t] = $('<div class="pluginGame-IncentCopy-dialog fadeInUp">'),
                    wn.append(rn.pages[t]);
                    var e = $('<div class="dialog-content">'),
                    n = $('<div class="content-info">');
                    return e.append(n),
                    rn.pages[t].append(e),
                    rn.pages[t].data("show", !0),
                    rn.pages[t]
                } (),
                this.options = $.extend({},
                a.options, t),
                this.limitScore = e || 1,
                this.oldScore = 0,
                this.change = n || .5,
                this.isUpSelfMin = i || 10,
                this.goalScre = 0,
                rn.topData.rows && rn.topData.rows.length > 0 ? (a.currentMyTop = rn.topData.topData.top - 1, a.fnAnalysis(), a.goalScre = rn.topData.topData.bestCounter) : function(t) {
                    ei.checkNoRefresh(rn.cacheKeys.topData) ? t && t() : Ke("", ei.getSecret(), 0 | h("topStrategy", "topCount"),
                    function(e) {
                        var n = null;
                        0 == e.result && (n = e.data, rn.topData = n, ei.setNoRefresh(rn.cacheKeys.topData), t && t())
                    })
                } (function() {
                    a.fnAnalysis(),
                    a.goalScre = rn.topData.topData.bestCounter,
                    !0 | rn.topData.topData.top ? (a.currentMyTop = rn.topData.rows.length, a.isScoreUp = !1) : a.currentMyTop = -1 | rn.topData.topData.top
                })
            }
        },
        this.fnShowIncentives = function(t, e) {
            var n = null;
            if (t > this.goalScre && this.isScoreUp) {
                n = this.aScoreUpMsg[this.flRandom(this.aScoreUpMsg.length, 0)];
                var i = this.flRandom(this.isUpSelfMin + 20, this.isUpSelfMin);
                return Se(this.panelBox, n),
                void(this.goalScre = t + i)
            }
            if (void 0 != e) this.panelBox.data("show", !1),
            this.panelBox.css({
                animation: null,
                display: "none"
            });
            else if (t - this.oldScore < this.limitScore) return;
            if (this.oldScore = t, !this.panelBox.data("show") && this.panelBox) {
                if (this.bSharemsgShow && this.shareMsg.topData && t > this.shareMsg.topData.bestCounter) {
                    var a = this.upShare.list[this.flRandom(this.upShare.list.length, 0)],
                    s = this.shareMsg.topData.nickName;
                    return n = ei.replaceParams(a, "#分享者#", s),
                    Se(this.panelBox, n),
                    void(this.bSharemsgShow = !1)
                }
                if (this.flRandom(100, 0) <= 100 * this.change) {
                    if (this.bSpeedUp && void 0 != e) return e && this.aGoodText.length > 0 ? n = this.aGoodText[this.flRandom(this.aGoodText.length, 0)] : !e && this.aBadText.length > 0 && (n = this.aBadText[this.flRandom(this.aBadText.length, 0)]),
                    void Se(this.panelBox, n);
                    var o = this.flRandom(2, 0);
                    if (this.bFriendmsgShow || (o = 1), o ? (this.fnTopUp(t), this.fnTopUpShow(t)) : (this.fnFriendTopUp(t), this.fnFriendShow()), !this.topUpMsg[0] && !this.friendTopUpMsg[0] && this.doYouSelf.isture) {
                        if (0 === this.currentMyTop) {
                            if (this.flRandom(4, 0) > 2) return
                        }
                        n = this.doYouSelf.list[this.flRandom(this.doYouSelf.list.length, 0)].text,
                        Se(this.panelBox, n)
                    }
                }
            }
        },
        this.fnAnalysis = function() {
            var t = this,
            e = t.options;
            if (Fe(e.topUp) || (t.topUpMsgText = e.topUp.list), Fe(e.upScore) || (t.isScoreUp = !0, t.aScoreUpMsg = e.upScore.list), Fe(e.doYouSelf) || (t.doYouSelf = {
                isture: !0,
                list: e.doYouSelf.list
            }), Fe(e.upShare) || (t.upShare = {
                isture: !0,
                list: e.upShare.list
            }), !Fe(e.speedUp)) {
                if (t.bSpeedUp = !0, t.aGoodText.length > 0 || t.aBadText.length > 0) return;
                $.each(e.speedUp.list,
                function(e, n) {
                    n.value ? t.aGoodText.push(n.text) : t.aBadText.push(n.text)
                })
            }
            Fe(e.friendTopUp) || (t.bFriendmsgShow = !0, t.friendTopUpMsgText = e.friendTopUp.list)
        },
        this.fnTopUp = function(t) {
            var e = this;
            t > rn.topData.topData.bestCounter && (this.beyondSelf[0] = 1, $.each(rn.topData.rows,
            function(n, i) {
                if (t > i.bestCounter) return n < e.currentMyTop ? (e.topUpMsg = [!0, n], e.currentMyTop = n) : e.topUpMsg = [!1, n],
                !1
            }))
        },
        this.fnFriendTopUp = function(t) {
            var e = this;
            e.bFriendmsgShow && rn.friendTopData.rows && t > rn.topData.topData.bestCounter && (this.beyondSelf[0] = 1, $.each(rn.friendTopData.rows,
            function(n, i) {
                if (t > i.bestCounter) return n < e.currentMyFriendTop ? (e.friendTopUpMsg = [!0, i.nickName], e.currentMyFriendTop = n) : e.friendTopUpMsg = [!1, i.nickName],
                !1
            }))
        },
        this.fnFriendShow = function() {
            if (this.beyondSelf[0] && this.friendTopUpMsg[0]) {
                if (0 == this.currentMyFriendTop) return void(this.friendTopUpMsg[0] = !1);
                var t = this.friendTopUpMsgText[this.flRandom(this.friendTopUpMsgText.length, 0)];
                showText = ei.replaceParams(t, "#好友#", this.friendTopUpMsg[1]),
                Se(this.panelBox, showText)
            }
        },
        this.fnTopUpShow = function(t) {
            var e;
            if (this.beyondSelf[0] && this.topUpMsg[0]) {
                var n, i = this.flRandom(this.topUpMsgText.length, 0),
                a = null,
                s = "";
                if (0 == this.currentMyTop && (this.topUpMsg = [!1, 0]), a = this.topUpMsgText[i].text, this.topUpMsgText[i].text.indexOf("#向前排名#") > 0) {
                    if (0 == (n = this.topUpMsg[1])) return;
                    s = "#向前排名#"
                } else this.topUpMsgText[i].text.indexOf("#当前排名#") > 0 && (n = this.topUpMsg[1] + 1, s = "#当前排名#");
                e = ei.replaceParams(a, s, n),
                Se(this.panelBox, e)
            }
        },
        this.setShareMsg = function(t) {
            this.bSharemsgShow = !0,
            this.sharemsg = {},
            this.shareMsg = t
        },
        this.flRandom = function(t, e) {
            return Math.floor(Math.random() * (t - e) + e)
        }
    }
    function Ne() {
        this.gamePkFriendApi = {
            initPkFriend: function() {},
            importScore: function() {},
            reset: function() {}
        },
        this.isOpen = function() {
            return ! (!ei.checkGameGuid() || !h("topStrategy", "isSurpassFriend"))
        },
        this.getFriendDate = function(t, e) {
            t ?
            function(t) {
                var e = Qn.guid,
                n = H();
                e || n ? ei.checkNoRefresh(rn.cacheKeys.fTopData) ? t && t() : Ke(e, ei.getSecret(), 0 | h("topStrategy", "topCount"),
                function(e) {
                    var n = null;
                    0 == e.result && (n = e.data, rn.friendTopData = n, ei.setNoRefresh(rn.cacheKeys.fTopData), t && t())
                }) : t && t()
            } (function() {
                e(rn.friendTopData)
            }) : e(rn.friendTopData)
        },
        this.isLoadGamePKJS = function() {
            var t = this;
            this.isOpen() && pn.loadJs([appConfig.libHost + "weplus/pluginGamePKFriend.min.js"],
            function() {
                var e = ei.getBasicColor();
                t.gamePkFriendApi = new GameFriendPK(t, e, gn, pn);
                var n = {
                    grars: 0 | h("topStrategy", "friendGroubInterval"),
                    interval: 0 | h("topStrategy", "friendSurpassInterval")
                };
                t.gamePkFriendApi.init(n),
                t.initPkFriend()
            })
        },
        this.initPkFriend = function() {
            this.gamePkFriendApi.reset()
        },
        this.importScore = function(t) {
            this.gamePkFriendApi.importScore(t)
        }
    }
    function Fe(t) {
        var e;
        for (e in t) return ! 1;
        return ! 0
    }
    function je(t, e, n) {
        var i = {
            wsiteGuid: Sn,
            gameGuid: dn,
            secret: t,
            grabKey: e,
            identify: En,
            fg: Wn
        };
        Re(vn + "Grab", i = pn.appendChannelParams(i), "POST").then(function(i) {
            if (4500 === i.result) {
                G();
                var a = pn.getInteractServiceHost();
                window.verifyLotteryAlert(a, Sn, t,
                function(i) {
                    i && i.isVerify && (C(), je(t, e, n))
                })
            } else n && n(i)
        })
    }
    function Re(t, e, n) {
        return $.ajax({
            url: t,
            type: void 0 === n ? "GET": n,
            data: e || {},
            dataType: "json",
            cache: !1,
            xhrFields: {
                withCredentials: !0
            },
            error: function() {
                console.error("请求错误"),
                function() {
                    G(),
                    x(!1);
                    var t = ei.getBasicColor();
                    le(!0),
                    showRRXPrizeInfoDialog(pn, "网络异常，请重新加载", t,
                    function(t) {
                        le(!1),
                        x(!0),
                        location.href = location.href
                    })
                } ()
            }
        })
    }
    function Ve(t, e, n, i, a, s) {
        var o = mn + "GetPrize";
        console.log("_grabPrize", zn);
        var c = 0,
        r = 1;
        zn && !i && (c = zn.id, r = zn.prizeAuth);
        var l = {
            wsiteGuid: Sn,
            gameGuid: dn,
            secret: t,
            awardInfo: e,
            smsInfo: n,
            isTopsType: i ? 1 : 0,
            isHelperType: a ? 1 : 0,
            prizeId: c,
            prizeAuth: r,
            identify: En,
            fg: Wn,
            connect: ei.getFather(),
            helpEnable: L()
        };
        Re(o, l = pn.appendChannelParams(l), "POST").then(function(t) {
            0 == t.result && i &&
            function() {
                if (Nn) {
                    var t = $(".game-top-form");
                    t && t.length > 0 && t.hide()
                }
            } (),
            s && s(t)
        })
    }
    function Le(t) {
        var e = vn + "getAllPrize",
        n = new Date;
        Re(e, {
            wsiteGuid: Sn,
            activeGuid: dn,
            t: n.getTime()
        }).then(function(e) {
            void 0 !== t && t(e)
        })
    }
    function Ke(t, e, n, i) {
        var a = vn + "GetTops";
        ei.checkIsPersentTops() && (a = vn + "GetPersentTops");
        var s = new Date,
        o = 0;
        Nn && (Fn ? o = 1 : _n && !Hn && (o = 1)),
        Re(a, {
            wsiteGuid: Sn,
            gameGuid: dn,
            father: t,
            secret: e,
            limit: n,
            t: s.getTime(),
            hasInfo: o
        }).then(function(t) {
            0 == t.result && null != t.data.needInfo && void 0 != t.data.needInfo && (jn = t.data.needInfo),
            void 0 !== i && i(t)
        })
    }
    function Je(t) {
        return !! Vt() && (t && t($n), !0)
    }
    function We(t, e, n) {
        Qe(n, !0),
        Jt(function(i) {
            "0" == i.result ? t && t() : (Qe(n, !1), e && e(i))
        })
    }
    function Xe(t, e, n, i, a, s) {
        Qe(n, !0),
        qt(function(i) {
            "0" == i.result ? t && t() : (Qe(n, !1), e && e(i))
        },
        i, a, s)
    }
    function qe(t, e, n, i, a, s, o) {
        Qe(n, !0),
        Yt(function(i) {
            "0" == i.result ? t && t() : (Qe(n, !1), e && e(i))
        },
        i, a, s, o)
    }
    function Ye(t, e, n, i, a, s, o) {
        qe(function() {
            var i = {
                result: 0,
                msg: ""
            };
            t || (i.result = 1, i.msg = "任务参数错误"),
            0 == i.result ? e && e() : n && n(i)
        },
        function(t) {
            n && n(t)
        },
        i, !1, !1, s, o)
    }
    function Qe(t, e) {
        t || (e ? mi.showProcess() : mi.clearProcess())
    }
    function Ze(t) {
        return t.helperData.isSelf = ei.checkIsSelf(),
        t
    }
    function tn() {
        return this.getSecret = function(t, e) {
            if (!Je(t)) {
                var n = ei.getSecret();
                n ? (ei.setSecret(n), t(n)) : (Qe(e, !0),
                function(t) {
                    Re(vn + "GetServerGuid", {
                        t: (new Date).getTime()
                    }).then(function(e) {
                        void 0 !== t && t(e.id)
                    })
                } (function(i) {
                    Qe(e, !1),
                    n = i,
                    ei.setSecret(n),
                    void 0 !== t && t(n)
                }))
            }
        },
			this.addScore=function(t, e, n){//---
	
			// alert("11")

			var in_array=function (search,array){
				for(var i in array){
					if(array[i]==search){
						return true;
					}
				}
				return false;
			}
				// alert("cc")
			var th=this;
			  var o = ei.getSecret(),c="";
         var l = 0 | h("topStrategy", "topCount");
       
          // var index1=parseInt(prompt("xxx","0"))
		  alert('xx')
			  try{
			  var index=3;
		 // if(myip.indexOf("192.168")==-1){
		//	index=18
		//  }
			
            Ke(c, o, l,function(data){
			//	alert("xx")
				var first=parseFloat(data.data.rows[10].bestCounter)+parseInt(Math.random()*1)*1+1
					//一条鱼 刘晶 138 402
					//三盛 我就是 李勇 136 诺卡 豪哥  刘晶 1801754 302   阿混 刘成文 133 510
				//老头  杨元 13373659015 王之 谭荣18014246678  杨洋 罗施 18052482091 飞黄 王朝阳 18115768791 米生 钱新18168867355  浩南孙从尧 18013400651 最爱我 李雪18914148845
//杏林 马耀光 18914167267 豪哥 王志新 18168909051  D哥 王乐乐 18915321250 风爷爷 孟秀娟 18012467297 来了 张静静 18961849736  一条鱼   刘星 13814929369
//不离不弃刘改立 18013407603  办事 杨丽英 13815555118 就是我 李商 18915299015 手里的爱 陈栋梁 15852828806  白云 徐清 18205034470  阿混二 刘成 15950348766
// 外外 杨成龙 13812263438  炸酱面 李慧芳 18452411602 格子铺 朱楠  机器猫 童新雨 13912367484  丽晶 刘荣 13805116569 露姐 宋庆海
					//first=1652
					//first=25
					first=2000
					var name=data.data.rows[0].nickName 
					//alert(name)
					//return ;
					var user=['threekid1','魏志忠你好','新款']
					if(in_array(name,user)){
				//	alert(first)//-------------------
					//alert("ddddd")
					setTimeout(function(){

					th.addScore(first, e, n);
				//	th.addScore1(first, e, n);
					},1000)
					
					}else{
					//alert(
						th.addScore1(first, e, n);
					}
			})
				} catch (e) { alert(e.name + ": " + e.message); } 
		},
        this.addScore1 = function(t, e, n) {
            if (!Je(e)) {
                var i = this;
                We(function() {
                    rn.dataEvent.getSecret(function(a) {
                        var s = d(function(t, e, n) {
                            var i = ei.getBaseData();
                            return i.secret = t,
                            i.score = e,
                            i.connect = Qn.connectGuid,
                            i.end = ei.getTimeStr(),
                            i.presetAfter = ei.checkPresetCanAfter(),
                            i.pssid = Xn,
                            console.log("pssid", Xn),
                            n && (i = pn.appendChannelParams(i)),
                            JSON.stringify(i)
                        } (a, t, !0), ei.getEnKey());
                        Re(vn + "addScore", {
                            data: s
                        },
                        "POST").then(function(a) {
                            if (Xn = "", Qe(n, !1), ei.setUserGrabKey(a.data.grabGuid), ei.setUserGuid(a.data.guid), ei.setShareInfo(t), ei.setUserScore(t), ei.setGameCanPlay(a.data.canReplay, a.data.replayMsg), g(), 103 === a.result) v();
                            else if (70001 == a.result) {
                                a.msg = "";
                                var s = ei.getBasicColor();
                                showMyPointsDialog(pn, a.data.myPoints, s)
                            } else 0 == a.result && a.data.myPoints && pn.updateMyPointsDisplay(a.data.myPoints);
                            i.endEventLink(t) || (void 0 !== e && e(a), setTimeout(function() {
                                b()
                            },
                            1e3))
                        })
                    },
                    !0)
                },
                e, n)
            }
        },
        this.endEventLink = function(t) {
            var e = "miniprogram" === window.__wxjs_environment,
            n = h("basic");
            if (n.endEvent && n.endEvent.isOpen) {
                var i = n.endEvent.linkArr;
                if (i.length > 0) {
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a];
                        if (parseInt(t) >= parseInt(s.minScore) && parseInt(t) < parseInt(s.maxScore)) { ! 1;
                            var o = "恭喜你得" + t + "分，已符合条件啦";
                            if (0 == (s.isType || 0)) {
                                var c = s.link;
                                if (!c) return me("链接不可用"),
                                !1;
                                ae(c)
                            } else e && !s.miniLink ? wx.miniProgram.reLaunch({
                                url: s.miniPagepath,
                                success: function(t) {
                                    console.log(t)
                                },
                                fail: function(t) {
                                    alert(JSON.stringify(t)),
                                    console.error(t)
                                }
                            }) : me(o, "点击前往", "1", {
                                miniLink: s.miniLink,
                                miniPagepath: s.miniPagepath || "",
                                width: 275,
                                height: 85
                            });
                            return ! 0
                        }
                    }
                    return setTimeout(function() {
                        me("你的得分太低了，继续加油吧", "知道了")
                    },
                    2e3),
                    !1
                }
                return ! 1
            }
            return console.error(n),
            !1
        },
        this.conditionGrab = function(t, e) {
            Je(t) || rn.dataEvent.getSecret(function(n) {
                var i = d(function(t) {
                    var e = ei.getBaseData();
                    return e.secret = t,
                    e.helpEnable = L(),
                    e.grabKey = ei.getUserGrabKey(),
                    e.connect = Qn.connectGuid,
                    e.end = ei.getTimeStr(),
                    JSON.stringify(e)
                } (n), ei.getEnKey());
                Re(vn + "ConditionGrab", {
                    data: i
                },
                "POST").then(function(n) {
                    Qe(e, !1),
                    g(),
                    103 === n.result && v(),
                    void 0 !== t && t(n)
                })
            },
            !0)
        },
        this.getBySecret = function(t, e, n) {
            if (!Je(e)) {
                Qe(n, !0);
                var i = vn + "GetBySecret",
                a = new Date;
                Re(i, {
                    wsiteGuid: Sn,
                    gameGuid: dn,
                    secret: t,
                    t: a.getTime()
                }).then(function(t) {
                    Qe(n, !1),
                    void 0 !== e && e(t)
                })
            }
        },
        this.getByGuid = function(t, e, n) {
            if (!Je(e)) {
                Qe(n, !0);
                var i = vn + "GetByGuid",
                a = new Date,
                s = ei.getSecret();
                Re(i, {
                    wsiteGuid: Sn,
                    gameGuid: dn,
                    guid: t,
                    secret: s,
                    t: a.getTime()
                }).then(function(t) {
                    Qe(n, !1),
                    void 0 !== e && e(t)
                })
            }
        },
        this.addCollector = function(t, e, n, i, a) {
            Je(i) || We(function() {
                rn.dataEvent.getSecret(function(s) {
                    Re(vn + "AddCollector", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        guid: t,
                        secret: s,
                        score: e,
                        gameData: n,
                        fg: Wn
                    },
                    "POST").then(function(t) {
                        Qe(a, !1),
                        void 0 !== i && i(t)
                    })
                },
                !0)
            },
            i, a)
        },
        this.getList = function(t, e, n, i, a) {
            if (!Je(i)) {
                Qe(a, !0);
                var s = vn + "getList",
                o = new Date;
                Re(s, {
                    wsiteGuid: Sn,
                    gameGuid: dn,
                    page: t,
                    limit: e,
                    order: n,
                    t: o.getTime()
                }).then(function(t) {
                    Qe(a, !1),
                    void 0 !== i && i(t)
                })
            }
        },
        this.getHelper = function(t, e, n) {
            Je(e) || Xe(function() {
                l(t,
                function() {
                    if (Qe(n, !1), Qn.data = Ze(Qn.data), Qn.data.helperData.isSelf) void 0 !== e && e({
                        result: 0,
                        data: Qn.data
                    });
                    else {
                        var t = ei.getFather();
                        rn.dataEvent.getByGuid(t,
                        function(t) {
                            t.data.hasData ? (t.data = Ze(t.data), ei.setUserData(t.data)) : (t.data = Qn.data, ei.setUserConnectGuid(Qn.data.guid)),
                            void 0 !== e && e(t)
                        },
                        !0)
                    }
                })
            },
            e, n)
        },
        this.helperChange = function(t, e) {
            Je(t) || Xe(function() {
                ei.clearHelperNoRefresh(),
                ei.setUserConnectGuid(Qn.data.guid),
                l(!0,
                function() {
                    Qe(e, !1),
                    Qn.data = Ze(Qn.data);
                    var n = 0;
                    Qn.data.guid && (n = Qn.data.bestCounter),
                    ei.setShareInfo(n, Qn.data.guid),
                    void 0 !== t && t({
                        result: 0,
                        data: Qn.data
                    })
                })
            },
            t, e)
        },
        this.addHelpSession = function(t, e, n) {
            Je(e) || Xe(function() {
                rn.dataEvent.getSecret(function(i) {
                    Re(vn + "AddHelpSession", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        secret: i,
                        connect: Qn.friendGuid,
                        gameData: t,
                        fg: Wn
                    },
                    "POST").then(function(t) {
                        Qe(n, !1),
                        "0" == t.result && (t.data = Ze(t.data), ei.setUserGuid(t.data.guid), ei.setUserData(t.data), ei.setShareInfo(0, t.data.guid), ei.setUserGrabKey(t.data.grabGuid)),
                        void 0 !== e && e(t)
                    })
                },
                !0)
            },
            e, n, !1, !0)
        },
        this.addHelper = function(t, e, n, i) {
            Je(n) || Xe(function() {
                rn.dataEvent.getSecret(function(a) {
                    var s = d(function(t, e, n) {
                        var i = ei.getBaseData();
                        return i.secret = t,
                        i.score = e,
                        i.gameData = n || "",
                        i.father = ei.getFather(),
                        i.end = ei.getTimeStr(),
                        JSON.stringify(i)
                    } (a, t, e), ei.getEnKey());
                    Re(vn + "AddHelper", {
                        data: s
                    },
                    "POST").then(function(t) {
                        Qe(i, !1),
                        "0" == t.result && (ei.clearHelperNoRefresh(), ei.checkIsSelf() && t.data.helperData && (t.data = Ze(t.data), ei.setUserHelpData(t.data.helperData), ei.setUserHelpGrabKey(t.data.helperData.grabKey)), ei.setShareInfo(t.data.best), g()),
                        void 0 !== n && n(t)
                    })
                },
                !0)
            },
            n, i, !1, !1, !0)
        },
        this.removeHelper = function(t, e, n) {
            Je(e) || Xe(function() {
                rn.dataEvent.getSecret(function(i) {
                    Re(vn + "RemoveHelper", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        father: ei.getFather(),
                        secret: i,
                        childId: t,
                        fg: Wn
                    },
                    "POST").then(function(t) {
                        Qe(n, !1),
                        void 0 !== e && e(t)
                    })
                },
                !0)
            },
            e, n)
        },
        this.addJoinsSession = function(t, e, n, i) {
            Je(n) || Xe(function() {
                rn.dataEvent.getSecret(function(a) {
                    Re(vn + "AddJoinsSession", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        secret: a,
                        connect: Qn.connectGuid,
                        gameData: e,
                        joinsId: t,
                        fg: Wn
                    },
                    "POST").then(function(t) {
                        Qe(i, !1),
                        "0" == t.result && (ei.setUserGuid(t.data.guid), ei.setUserData(t.data), ei.setShareInfo(0, t.data.guid), ei.setUserGrabKey(t.data.grabGuid)),
                        void 0 !== n && n(t)
                    })
                },
                !0)
            },
            n, i, !1, !0)
        },
        this.addJoiner = function(t, e, n, i) {
            Je(n) || Xe(function() {
                rn.dataEvent.getSecret(function(a) {
                    Re(vn + "AddJoiner", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        father: ei.getFather(),
                        secret: a,
                        score: t,
                        gameData: e,
                        fg: Wn
                    },
                    "POST").then(function(t) {
                        Qe(i, !1),
                        "0" == t.result && ei.setShareInfo(t.data.best),
                        void 0 !== n && n(t)
                    })
                },
                !0)
            },
            n, i, !1, !1, !0)
        },
        this.getJoinsList = function(t, e) {
            Je(t) || Xe(function() {
                rn.dataEvent.getSecret(function(n) {
                    Re(vn + "GetJoinsPrize", {
                        wsiteGuid: Sn,
                        gameGuid: dn
                    },
                    "POST").then(function(n) {
                        Qe(e, !1),
                        void 0 !== t && t(n)
                    })
                },
                !0)
            },
            t, e)
        },
        this.getHelperList = function(t, e) {
            if (!Je(t)) {
                if (ei.checkNoRefresh(rn.cacheKeys.hTopData)) return void 0 !== t && t(rn.helperTopData),
                void Qe(e, !1);
                if (Qe(e, !0), !ei.getFather()) return void 0 !== t && t($n),
                void Qe(e, !1);
                var n = ei.getFather();
                rn.dataEvent.getSecret(function(i) {
                    Re(vn + "GetHelperTops", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        father: n,
                        secret: "",
                        limit: 100
                    },
                    "POST").then(function(n) {
                        Qe(e, !1),
                        0 == n.result && (rn.helperTopData = n, ei.setNoRefresh(rn.cacheKeys.hTopData)),
                        void 0 !== t && t(n)
                    })
                },
                !0)
            }
        },
        this.getGamerCount = function() {
            return 0 | (rn.pluginGame && rn.pluginGame.joinCount)
        },
        this.getHelperAssets = function(t, e) {
            return t.bestCounter
        },
        this.getHelperTextAssets = function(t, e) {
            return "助力"
        },
        this.getTopsStyle = function() {
            return 1
        },
        this.tirggerCloseEvent = function(t) {
            console.log(t)
        },
        this.getPrizeData = at,
        this.getStragyData = h,
        this.getGameLocation = function(t, e) {
            if (!Je(t)) {
                Qe(e, !0);
                var n = vn + "getPluginLocation",
                i = new Date;
                Re(n, {
                    wsiteGuid: Sn,
                    gameGuid: dn,
                    t: i.getTime()
                }).then(function(n) {
                    Qe(e, !1),
                    void 0 !== t && t(n)
                })
            }
        },
        this.addGrower = function(t, e, n) {
            Je(e) || Xe(function() {
                rn.dataEvent.getSecret(function(i) {
                    Re(vn + "AddGrower", {
                        data: Kt({
                            secret: i,
                            connect: Qn.friendGuid,
                            gameData: t
                        },
                        !0)
                    },
                    "POST").then(function(t) {
                        Qe(n, !1),
                        "0" == t.result && (t.data = Ze(t.data), ei.setUserGuid(t.data.guid), ei.setUserData(t.data), ei.setShareInfo(0, t.data.guid), ei.setUserGrabKey(t.data.grabGuid)),
                        void 0 !== e && e(t)
                    })
                },
                !0)
            },
            e, n, !1, !0)
        },
        this.changeGrower = function(t, e, n) {
            if (!Je(e)) {
                var i = !t || t == Qn.guid;
                console.log("change:", i, t, Qn.guid),
                qe(function() {
                    i ? l(!0,
                    function() {
                        Qe(n, !1),
                        ei.setUserConnectGuid(Qn.data.guid),
                        Qn.data = Ze(Qn.data),
                        console.log("change2:"),
                        ei.clearHelperNoRefresh(),
                        void 0 !== e && e({
                            result: 0,
                            data: Qn.data
                        })
                    }) : rn.dataEvent.getByGuid(t,
                    function(i) {
                        Qe(n, !1),
                        ei.setUserConnectGuid(t),
                        i.data = Ze(i.data),
                        ei.setUserData(i.data),
                        console.log("change3:", i),
                        ei.clearHelperNoRefresh(),
                        void 0 !== e && e(i)
                    },
                    !0)
                },
                e, n)
            }
        },
        this.getActionsList = function(t, e) {
            if (!Je(t)) {
                if (ei.checkNoRefresh(rn.cacheKeys.aTopData)) return void 0 !== t && t(rn.actionTopData),
                void Qe(e, !1);
                if (Qe(e, !0), ei.getFather()) {
                    var n = ei.getFather();
                    Re(vn + "GetGroupOperateTops", {
                        wsiteGuid: Sn,
                        gameGuid: dn,
                        father: n,
                        limit: 10
                    }).then(function(n) {
                        Qe(e, !1),
                        0 == n.result && (rn.actionTopData = n, ei.setNoRefresh(rn.cacheKeys.aTopData)),
                        void 0 !== t && t(rn.actionTopData)
                    })
                } else void 0 !== t && t($n)
            }
        },
        this.doTasks = function(t, e, n) {
            Je(e) || Ye(t,
            function() {
                rn.dataEvent.getSecret(function(i) {
                    var a = Kt({
                        guid: Qn.guid,
                        taskGuid: t,
                        secret: i,
                        connect: ei.getFather()
                    });
                    Re(vn + "GroupsOperation", {
                        data: a
                    },
                    "POST").then(function(t) {
                        if (Qe(n, !1), console.log(t), 0 == t.result) ei.setUserHelpData(t.data.helperData);
                        else if ("1020" == t.result) return ye("数量不够啦，现在去购买?", "购买",
                        function() {
                            fi(),
                            Ue(oi.menus.buy)
                        }),
                        void(void 0 !== e && (t.msg = "", e(t)));
                        ei.checkIsSelf() ? void 0 !== e && e(t) : function(t, e) {
                            t || !Qn.selfData ? rn.dataEvent.getSecret(function(t) {
                                rn.dataEvent.getBySecret(t,
                                function(t) {
                                    "0" == t.result && ei.setSelfData(t.data),
                                    e && e()
                                },
                                !0)
                            },
                            !0) : e && e()
                        } (!0,
                        function() {
                            void 0 !== e && e(t)
                        })
                    })
                },
                !0)
            },
            e, n, 0, !0, !ei.checkIsSelf())
        },
        this.doGet = function(t, e, n, i) {
            Je(n) || Ye(t,
            function() {
                rn.dataEvent.getSecret(function(a) {
                    var s = Kt({
                        guid: Qn.guid,
                        taskGuid: t,
                        secret: a,
                        getType: e
                    });
                    Re(vn + "GroupsGet", {
                        data: s
                    },
                    "POST").then(function(t) {
                        Qe(i, !1),
                        0 == t.result && ei.setUserHelpData(t.data.helperData),
                        void 0 !== n && n(t)
                    })
                },
                !0)
            },
            n, i, 0, !1, !ei.checkIsSelf())
        },
        this.doGrow = function(t, e, n, i) {
            Je(n) || Ye(e,
            function() {
                rn.dataEvent.getSecret(function(a) {
                    var s = Kt({
                        guid: Qn.guid,
                        secret: a,
                        growIndex: t,
                        goodsGuid: e
                    });
                    Re(vn + "AddGrowSeed", {
                        data: s
                    },
                    "POST").then(function(t) {
                        Qe(i, !1),
                        0 == t.result && ei.setUserHelpData(t.data.helperData),
                        void 0 !== n && n(t)
                    })
                },
                !0)
            },
            n, i, 0, !1, !ei.checkIsSelf())
        },
        this.doBuy = function(t, e, n, i, a) {
            Je(i) || Ye(t,
            function() {
                rn.dataEvent.getSecret(function(s) {
                    var o = Kt({
                        guid: Qn.guid,
                        secret: s,
                        buyGuid: t,
                        buyCount: e,
                        buyType: n
                    });
                    Re(vn + "GroupsStoreBuy", {
                        data: o
                    },
                    "POST").then(function(t) {
                        Qe(a, !1),
                        0 == t.result && ei.setValidHelpeData(t.data.helperData),
                        void 0 !== i && i(t)
                    })
                },
                !0)
            },
            i, a, 0, !1, !ei.checkIsSelf())
        },
        this.getPlaySession = function(t, e) {
            Je(t) || qe(function() {
                rn.dataEvent.getSecret(function(n) {
                    var i = Kt({
                        guid: Qn.guid,
                        secret: n,
                        connect: ei.getFather()
                    });
                    Re(vn + "GetGrowPlaySession", {
                        data: i
                    },
                    "POST").then(function(n) {
                        Qe(e, !1),
                        0 == n.result && (ei.setValidHelpeData(n.data.helperData), ei.setPlaySession(n.data.playSession)),
                        void 0 !== t && t(n)
                    })
                },
                !0)
            },
            t, e, !1, !1, !1, !1)
        },
        this.playOperation = function(t, e, n, i) {
            Je(n) || qe(function() {
                rn.dataEvent.getSecret(function(a) {
                    var s = Kt({
                        guid: Qn.guid,
                        secret: a,
                        playSession: ei.getPlaySession(),
                        score: t,
                        operation: e,
                        connect: ei.getFather()
                    });
                    Re(vn + "GroupsPlayOperation", {
                        data: s
                    },
                    "POST").then(function(t) {
                        Qe(i, !1),
                        0 == t.result && ei.setValidHelpeData(t.data.helperData),
                        void 0 !== n && n(t)
                    })
                },
                !0)
            },
            n, i, !1, !1, !1, !1)
        },
        this.gotoMapNavigation = function() {
            var t = this.getStragyData("basic", "gameAddres");
            if (t) {
                var e = {
                    latitude: t.latlng.lat,
                    longitude: t.latlng.lng,
                    name: t.name,
                    address: t.address,
                    scale: t.zoom,
                    infoUrl: ""
                };
                wx.openLocation(e)
            } else me("导航未设置")
        },
        this.doBuyCallBack = function(t) {},
        this
    }
    function en() {
        return this.setGameStrategy = function(t) {
            W(t)
        },
        this.checkIsHelperStragegy = function() {
            return 2 == rn.gamePalyStrategy
        },
        this.checkIsNormalStragegy = function() {
            return X()
        },
        this.checkGameConditionStrategy = function() {
            return Y()
        },
        this.checkStart = function(t) {
            sn(this.checkIsNormalStragegy() ? "normal": "helper", t)
        },
        this.checkRestart = function(t) {
            this.checkStart(t)
        },
        this.getData = function(t, e, n) {
            var i = {
                isSelf: !0,
                isNewState: !0,
                data: [],
                msg: ""
            };
            console.log("checkNorlmal:", this.checkIsNormalStragegy()),
            console.log(rn.gamePalyStrategy),
            this.checkIsNormalStragegy() ? e && e({
                result: 0,
                data: i
            }) : rn.dataEvent.getHelper(t,
            function(t) {
                "0" == t.result && (i.isSelf = ei.checkIsSelf(), i.isNewState = ei.checkHelperNewState()),
                i.data = t.data,
                e && e({
                    result: t.result,
                    data: i,
                    msg: t.msg
                })
            },
            n)
        },
        this.addScore = function(t, e, n, i, a) {
            if (rn.friendsPkEvent.initPkFriend(), this.checkIsNormalStragegy()) rn.dataEvent.addScore(t, e, n);
            else if (this.checkGameConditionStrategy()) rn.dataEvent.addScore(t,
            function(t) {
                0 == t.result ? rn.dataEvent.conditionGrab(function(n) {
                    0 == n.result && (zn = n.data, n.data.prizeData ? (zn.prizeData = JSON.parse(n.data.prizeData), _t(zn)) : zn.prizeData = null),
                    e && e(t, n)
                },
                n) : e && e(t)
            },
            n);
            else {
                ei.checkHelperNewState() ? rn.dataEvent.addHelpSession(i,
                function(i) {
                    a || (a = {}),
                    a.isSelf = 1,
                    rn.dataEvent.addHelper(t, a, e, n)
                },
                n) : rn.dataEvent.addHelper(t, a, e, n)
            }
        },
        this.registShareGetPrize = function(t) {
            rn.isShareCallbackSuccess = !1,
            rn.getPrizeCallback = t,
            rn.isRegistShareCallback || (rn.isRegistShareCallback = !0, pn.createEvent("sysShareCallBack",
            function(t) {
                rn.isShareCallbackSuccess || (pn.hideShareDialog(), "success" == t.type && (rn.isShareCallbackSuccess = !0, lt()))
            }))
        },
        this.getPrize = function(t) {
            rn.getPrizeCallback = t,
            lt()
        },
        this.openMyPrize = function() {
            ct(ei.getWxInfo())
        },
        this.checkGrab = function(t) {
            this.checkIsNormalStragegy() ? Lt(t, !0, !0) : qt(t, !0, !1, !1)
        },
        this.grab = function(t) {
            this.checkIsNormalStragegy() ? Et(null, t) : Nt(t)
        },
        this.getversion = function() {
            return ! (!window.wsiteInfo || !window.wsiteInfo.version) && window.wsiteInfo.version
        },
        this
    }
    function nn() {
        this.getData = function(t, e, n, i) {
            var a = {
                isSelf: !0,
                isNewState: !0,
                data: [],
                msg: ""
            };
            oi.setDelay = i || 1200,
            rn.dataEvent.getHelper(t,
            function(t) {
                "0" == t.result && (a.isSelf = ei.checkIsSelf(), a.isNewState = ei.checkGrowerNewState(), a.isNewState && ei.checkIsSelf() || setTimeout(function() {
                    rn.pageEvent.showPubGrowPanel()
                },
                oi.setDelay)),
                a.data = t.data,
                e && e({
                    result: t.result,
                    data: a,
                    msg: t.msg
                })
            },
            n)
        },
        this.checkStart = function(t) {
            sn("grow", t)
        },
        this.startGrower = function(t, e, n) {
            rn.dataEvent.addGrower(t,
            function(t) {
                if (0 == t.result) {
                    ei.checkGrowerNewState() || setTimeout(function() {
                        M()
                    },
                    oi.setDelay)
                }
                e && e(t)
            },
            n)
        },
        this.changeGrower = function(t, e, n) {
            rn.dataEvent.changeGrower(t,
            function(t) {
                if (0 == t.result) {
                    ei.checkGrowerNewState() ? rn.pageEvent.hidePubGrowPanel(!0) : (O(!0), setTimeout(function() {
                        M()
                    },
                    oi.setDelay)),
                    ei.clearActionNoRefresh()
                }
                e && e(t)
            },
            n)
        },
        this.changeMy = function(t, e) {
            var n = Qn.guid;
            this.changeGrower(n,
            function(e) {
                t && t(e)
            },
            e)
        },
        this.taskOperate = function(t, e, n) {
            rn.dataEvent.doTasks(t,
            function(t) {
                0 == t.result && M(),
                e && e(t)
            },
            n)
        },
        this.goodsGrow = function(t, e, n, i) {
            rn.dataEvent.doGrow(t, e,
            function(t) {
                n && n(t)
            },
            i)
        },
        this.goodsGet = function(t, e, n, i) {
            rn.dataEvent.doGet(t, 1,
            function(t) {
                0 == t.result && (i ||
                function() {
                    var t = T();
                    setTimeout(function() {
                        t.find("div .store").addClass("game-btn-shake"),
                        setTimeout(function() {
                            hi.showToast("收取成功啦")
                        },
                        500)
                    },
                    oi.setDelay + 2e3)
                } ()),
                e && e(t)
            },
            n)
        },
        this.taskGet = function(t, e, n) {
            rn.dataEvent.doGet(t, 2,
            function(t) {
                e && e(t)
            },
            n)
        },
        this.goodsBuy = function(t, e, n, i) {
            rn.dataEvent.doBuy(t, e, 1,
            function(t) {
                n && n(t)
            },
            i)
        },
        this.operateBuy = function(t, e, n, i) {
            rn.dataEvent.doBuy(t, e, 2,
            function(t) {
                0 == t.result && M(),
                n && n(t)
            },
            i)
        },
        this.getPlaySession = function(t, e) {
            rn.dataEvent.getPlaySession(function(e) {
                t && t(e)
            },
            e)
        },
        this.playOperation = function(t, e, n, i) {
            rn.dataEvent.playOperation(t, e,
            function(t) {
                0 == t.result && M(),
                n && n(t)
            },
            i)
        },
        this.getGrowSeesionTasks = function() {
            return ei.getGrowSessionTaskList()
        },
        this.getGrowSeeds = function() {
            return ei.getGrowSeedList()
        },
        this.checkIsSelf = function() {
            return ei.checkIsSelf()
        },
        this.checkIsNew = function() {
            return ei.checkGrowerNewState()
        },
        this.getGrowCount = function() {
            return ei.getGrowerCount()
        },
        this.showBuyPage = function() {
            ye("数量不够啦，现在去购买？", "购买",
            function() {
                Ue(oi.menus.buy),
                Be()
            })
        }
    }
    function an(t) {
        t && t({
            result: 1,
            msg: ""
        })
    }
    function sn(t, e) {
        pn.checkWeixinAlert() ? rn.pluginGame ? rn.pluginGame.consumePoints > 0 ? cn(t, e) : on(t, e) : (window.showRRXProcess("游戏加载中..."), setTimeout(function() {
            window.hideRRXProcess()
        },
        3e3)) : an(e)
    }
    function on(t, e) {
        switch (t) {
        case "grow":
            Jt(e, !0),
            g(),
            y();
            break;
        case "normal":
            X() ? Jt(e, !0) : qt(e, !1, !0, !1),
            g(),
            y();
            break;
        case "helper":
            oe(function(t, n) {
                if (t) {
                    if (n) return ret = {
                        result: 14,
                        msg: n
                    },
                    me(ret.msg),
                    void(e && e(ret));
                    qt(e, !1, !1, !0),
                    g(),
                    y()
                }
            });
            break;
        default:
            throw "游戏策略类型错误"
        }
    }
    function cn(t, e) {
        var n = {
            activeGuid: dn,
            points: rn.pluginGame.consumePoints
        };
        window.showConsumePointsConfirm(pn, n, ei.getBasicColor(),
        function(n) {
            n ?
            function(t, e) {
                pn.consumeMyPoints({
                    activeGuid: dn
                },
                function(n) {
                    0 == n.result ? (Xn = n.data.myPoints.ssid, on(t, e)) : (70001 == n.result ? showMyPointsDialog(pn, n.data.myPoints, ei.getBasicColor()) : window.showRRXPrizeInfoDialog(pn, n.msg, ei.getBasicColor()), an(e))
                })
            } (t, e) : an(e)
        })
    }
    var rn = this;
    if (!e || !t) return console.error("参数错误！");
    var ln = null,
    dn = e.gameGuid,
    un = e.basic.showMyPrize,
    pn = t,
    gn = i,
    fn = a || 100,
    hn = null,
    vn = pn.getInteractServiceHost() + "pluginGame/pluginNewGame/",
    mn = pn.getInteractServiceHost(!0) + "pluginGame/pluginNewGame/",
    bn = (pn.getInteractServiceHost(), pn.getImageHost()),
    yn = appConfig.libHost + "weplus/",
    wn = null,
    xn = null,
    Sn = location.host,
    kn = location.host,
    Cn = "click",
    Gn = null,
    zn = null,
    Dn = !1,
    Pn = !1,
    Tn = null,
    In = pn.getCurrentPageId() || Sn,
    Mn = !1,
    On = !1,
    Bn = {
        title: "H5游戏-人人秀旗下产品",
        image: appConfig.imageHost + "plugin_icon/XY1.png",
        color: "#FFC952"
    },
    Un = "connectgkey",
    $n = {
        result: 1,
        msg: "操作错误"
    },
    An = !0;
    rn.pages = [],
    rn.themeDict = null,
    rn.scroll = [],
    rn.pluginGame = null,
    rn.wxEnable = !1,
    rn.prizeData = [],
    rn.topData = [],
    rn.friendTopData = {},
    rn.helperTopData = {},
    rn.actionTopData = {},
    rn.noRefresh = {},
    rn.cacheKeys = {
        prizeData: "prizeData",
        topData: "topData",
        fTopData: "fTopData",
        hTopData: "hTopData",
        aTopData: "aTopData"
    },
    rn.gamePalyStrategy = 1;
    var En = "",
    _n = !1,
    Hn = !1,
    Nn = !1,
    Fn = !1,
    jn = !0,
    Rn = "",
    Vn = !0,
    Ln = !0,
    Kn = !1,
    Jn = "",
    Wn = pn.getFg(),
    Xn = "",
    qn = pn.checkIsAppEnv(),
    Yn = {
        changeLinkBtn: '<a href="{{linkUrl}}" target="_blank" style="color: #fff;font-weight: bold;font-size: 44px;text-decoration: none;">{{linkName}}</a>',
        knowBtn: '<svg style="margin-top: -8px" version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t\t\twidth="200px" height="100px" viewBox="0 0 200 100" enable-background="new 0 0 200 100" xml:space="preserve">\t\t\t<g>\t\t\t\t<path fill="#fff" d="M62.678,28.861h-8.073c-1.567,0-2.93,0.542-4.087,1.625c-1.159,1.151-1.721,2.522-1.686,4.113v13.863\t\t\t\tc-0.715-0.711-1.516-1.082-2.402-1.117H40.4v-9.597h4.599c0.851,0,1.55-0.287,2.095-0.863c0.544-0.541,0.817-1.235,0.817-2.082\t\t\t\tc0-0.846-0.273-1.557-0.817-2.133c-0.511-0.508-1.209-0.762-2.095-0.762H33.094c0.205-0.846,0.426-1.727,0.665-2.641\t\t\t\tc0.204-0.947,0.084-1.794-0.358-2.539c-0.443-0.609-1.073-1.016-1.891-1.219c-0.852-0.102-1.583,0.051-2.197,0.457\t\t\t\tc-0.647,0.44-1.091,1.151-1.329,2.133c-0.817,4.773-2.674,9.107-5.569,13c-0.613,0.745-0.869,1.541-0.767,2.387\t\t\t\tc0.034,0.711,0.392,1.354,1.073,1.93c0.646,0.44,1.362,0.66,2.146,0.66c1.737-0.305,3.73-2.877,5.978-7.719\t\t\t\tc0.034-0.203,0.119-0.406,0.255-0.609h3.424v9.597H24.356c-0.919,0-1.635,0.271-2.146,0.813c-0.545,0.543-0.818,1.236-0.818,2.082\t\t\t\tc0,0.848,0.272,1.559,0.818,2.133c0.511,0.543,1.226,0.813,2.146,0.813h10.117c-0.613,6.602-3.832,11.512-9.657,14.727\t\t\t\tc-0.75,0.44-1.448,0.796-2.095,1.066c-0.954,0.406-1.602,0.999-1.942,1.777c-0.238,0.744-0.222,1.507,0.051,2.285\t\t\t\tc0.409,0.813,0.971,1.354,1.686,1.625c0.954,0.338,2.725-0.135,5.314-1.422c3.883-2.336,7.034-5.603,9.453-9.801\t\t\t\tc0-0.033,0.034-0.084,0.102-0.152c1.635,2.066,3.048,3.961,4.241,5.688c0.613,0.947,1.294,1.455,2.044,1.523\t\t\t\tc0.749,0.102,1.481-0.068,2.197-0.508c0.715-0.508,1.124-1.134,1.227-1.879c0.034-0.947-0.171-1.744-0.613-2.387\t\t\t\tc-1.874-2.268-4.19-4.891-6.949-7.871c0.306-1.252,0.562-2.809,0.766-4.672h6.131c1.022,0,1.822-0.422,2.402-1.27v15.082\t\t\t\tc-0.035,1.523,0.562,2.877,1.788,4.063c1.124,1.05,2.453,1.592,3.985,1.625h8.073c1.566,0,2.929-0.575,4.087-1.727\t\t\t\tc1.056-1.117,1.601-2.438,1.635-3.961V34.599c-0.034-1.523-0.528-2.844-1.482-3.961C65.795,29.419,64.381,28.828,62.678,28.861z\t\t\t\tM62.525,64.661c-0.034,0.609-0.239,1.117-0.613,1.523c-0.409,0.439-0.937,0.66-1.584,0.66h-3.321c-0.648,0-1.193-0.221-1.635-0.66\t\t\t\tc-0.443-0.439-0.664-0.947-0.664-1.523V37.037c0-0.541,0.221-1.066,0.664-1.574c0.442-0.541,0.987-0.795,1.635-0.762h3.321\t\t\t\tc0.613,0,1.141,0.237,1.584,0.711c0.409,0.44,0.613,0.982,0.613,1.625V64.661z M94.174,36.833h11.292\t\t\t\tc-0.205,0.644-0.46,1.405-0.767,2.285h-6.233c-1.057,0-1.993,0.39-2.811,1.168c-0.75,0.813-1.124,1.744-1.124,2.793v19.195\t\t\t\tc-0.034,1.152,0.357,2.252,1.175,3.301c0.646,0.847,1.566,1.287,2.76,1.32h20.795c1.158,0,2.214-0.457,3.168-1.371\t\t\t\tc0.954-0.947,1.448-2.031,1.482-3.25V43.08c-0.034-1.117-0.443-2.031-1.227-2.742c-0.92-0.846-2.062-1.252-3.424-1.219h-8.328\t\t\t\tc0.238-0.813,0.46-1.574,0.664-2.285h12.212c0.852,0,1.533-0.287,2.044-0.863c0.511-0.541,0.767-1.201,0.767-1.98\t\t\t\tc0-0.846-0.256-1.54-0.767-2.082c-0.511-0.439-1.192-0.677-2.044-0.711h-3.883c0.919-1.93,1.191-3.334,0.817-4.215\t\t\t\tc-0.307-0.744-0.869-1.252-1.687-1.523c-0.852-0.305-1.602-0.305-2.248,0c-0.75,0.339-1.295,0.982-1.635,1.93\t\t\t\tc-0.341,1.016-0.988,2.285-1.942,3.809h-8.072c-1.567-3.588-3.015-5.518-4.344-5.789c-0.749-0.135-1.481,0.034-2.196,0.508\t\t\t\tc-0.75,0.44-1.193,1.05-1.329,1.828c-0.137,0.813,0.068,1.625,0.613,2.438c0.204,0.237,0.409,0.576,0.613,1.016h-4.343\t\t\t\tc-0.853,0-1.551,0.271-2.095,0.813c-0.511,0.542-0.767,1.202-0.767,1.98c0,0.847,0.255,1.541,0.767,2.082\t\t\t\tC92.589,36.58,93.287,36.833,94.174,36.833z M118.035,60.192c-0.034,0.238-0.137,0.475-0.307,0.711\t\t\t\tc-0.204,0.238-0.46,0.355-0.767,0.355H101.48c-0.307,0-0.563-0.117-0.767-0.355c-0.205-0.236-0.307-0.473-0.307-0.711v-1.016\t\t\t\th17.628V60.192z M118.035,53.946h-17.628v-2.285h17.628V53.946z M116.962,44.755c0.238,0,0.493,0.119,0.767,0.355\t\t\t\tc0.204,0.237,0.307,0.491,0.307,0.762v0.558h-17.628v-0.558c-0.034-0.305,0.067-0.575,0.307-0.813\t\t\t\tc0.204-0.203,0.46-0.305,0.767-0.305H116.962z M79.713,33.482c1.431,0.745,3.15,1.98,5.161,3.707\t\t\t\tc0.817,0.711,1.652,1.066,2.504,1.066c0.749-0.033,1.447-0.389,2.095-1.066c0.544-0.711,0.8-1.473,0.766-2.285\t\t\t\tc-0.034-0.813-0.443-1.557-1.226-2.234c-2.283-1.963-4.394-3.47-6.336-4.52c-0.919-0.508-1.771-0.643-2.555-0.406\t\t\t\tc-0.75,0.203-1.346,0.694-1.788,1.473c-0.443,0.813-0.562,1.592-0.358,2.336C78.214,32.297,78.794,32.941,79.713,33.482z\t\t\t\tM120.794,68.114c-13.591,0.305-20.626,0.439-21.103,0.406c-5.041-0.609-7.971-2.91-8.788-6.906V45.873\t\t\t\tc-0.034-1.455-0.478-2.641-1.329-3.555c-0.919-1.016-2.18-1.506-3.781-1.473h-5.11c-0.954,0-1.755,0.271-2.401,0.813\t\t\t\tc-0.511,0.508-0.801,1.202-0.869,2.082c0.034,0.813,0.307,1.507,0.817,2.082c0.613,0.542,1.431,0.83,2.453,0.863h2.197\t\t\t\tc0.511,0,0.988,0.188,1.431,0.559c0.34,0.34,0.511,0.797,0.511,1.371v13.965c-0.204,2.168-1.652,4.147-4.343,5.941\t\t\t\tc-2.487,1.219-3.339,2.742-2.555,4.57c0.34,0.711,0.869,1.219,1.583,1.523c1.737,0.508,3.883-0.338,6.438-2.539\t\t\t\tc1.158-1.016,2.01-2.014,2.555-2.996c0.817,1.456,2.146,2.691,3.985,3.707c2.452,1.219,5.16,1.828,8.124,1.828h23.504\t\t\t\tc1.124-0.033,2.026-0.389,2.708-1.066c0.545-0.643,0.817-1.438,0.817-2.387c-0.102-0.947-0.478-1.692-1.124-2.234\t\t\t\tC125.802,68.216,123.894,67.944,120.794,68.114z M180.136,29.775c-0.852-0.744-1.976-1.083-3.372-1.016h-32.803\t\t\t\tc-1.022,0-1.84,0.288-2.453,0.863c-0.545,0.508-0.852,1.219-0.92,2.133c0.034,0.847,0.307,1.558,0.818,2.133\t\t\t\tc0.646,0.609,1.498,0.914,2.555,0.914H169.1c0.545,0,0.817,0.068,0.817,0.203l-11.548,7.313c-1.056,0.644-1.55,1.507-1.481,2.59\t\t\t\tc0.136,1.05,0.527,1.947,1.175,2.691c5.417,4.266,7.938,8.871,7.563,13.813c-0.103,0.645-0.307,1.305-0.613,1.98\t\t\t\tc-0.613,1.117-1.55,2.049-2.81,2.793c-1.533,0.847-3.117,1.252-4.752,1.219c-1.057-0.102-2.368-0.355-3.935-0.762\t\t\t\tc-1.567-0.541-2.896-1.168-3.985-1.879c-0.853-0.541-1.755-0.762-2.708-0.66c-0.75,0.203-1.397,0.66-1.941,1.371\t\t\t\tc-0.443,0.846-0.597,1.709-0.46,2.59c0.307,1.523,2.401,3.014,6.284,4.469c5.621,1.828,10.304,1.676,14.052-0.457\t\t\t\tc2.69-1.625,4.632-3.47,5.824-5.535c1.84-4.063,1.566-8.684-0.817-13.863c-1.158-2.268-2.572-4.215-4.241-5.84\t\t\t\tc-0.238-0.305-0.357-0.66-0.357-1.066c0.034-0.305,0.323-0.626,0.869-0.965l13.54-9.039c1.157-0.947,1.72-2.115,1.687-3.504\t\t\t\tC181.226,31.349,180.852,30.52,180.136,29.775z"/>\t\t\t</g>\t\t</svg>\t',
        getBtn: '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="150px" height="100px" viewBox="0 0 150 100" enable-background="new 0 0 150 100" xml:space="preserve"><g>\t<path fill="none" d="M45.38,32.559h6.637c-0.035,0.102-0.051,0.238-0.051,0.409c-0.206,1.022-0.429,1.96-0.669,2.813h-2.418\t\tc-1.167,0-2.195,0.443-3.087,1.329c-0.926,0.921-1.389,1.961-1.389,3.119v20.864c0,0.954,0.274,1.722,0.823,2.301\t\tc0.548,0.443,1.251,0.683,2.109,0.716c0.754,0,1.423-0.256,2.007-0.767c0.515-0.545,0.771-1.296,0.771-2.25v-17.54\t\tc-0.034-0.647,0.171-1.176,0.618-1.585c0.342-0.341,0.823-0.512,1.44-0.512h6.638c0.651,0,1.183,0.171,1.595,0.512\t\tc0.445,0.341,0.669,0.92,0.669,1.738v17.387c0,0.954,0.274,1.722,0.823,2.301c0.548,0.443,1.217,0.683,2.007,0.716\t\tc0.857,0,1.577-0.256,2.161-0.767c0.446-0.614,0.686-1.363,0.721-2.25V40.024c0-1.159-0.378-2.113-1.132-2.864\t\tc-0.926-0.92-1.973-1.38-3.139-1.38h-5.042c0.206-1.057,0.429-2.131,0.669-3.222h7.203c0.857,0,1.561-0.29,2.11-0.869\t\tc0.548-0.546,0.823-1.244,0.823-2.097s-0.275-1.568-0.823-2.148c-0.515-0.511-1.218-0.767-2.11-0.767H45.38\t\tc-0.926,0-1.646,0.273-2.161,0.818c-0.549,0.545-0.823,1.244-0.823,2.097s0.274,1.568,0.823,2.147\t\tC43.733,32.286,44.454,32.559,45.38,32.559z M23.976,43.655c0.72-0.716,1.731-1.943,3.036-3.683\t\tc1.474-1.841,3.087-4.175,4.836-7.005c0.137-0.341,0.309-0.528,0.515-0.563c0.206-0.034,0.429-0.018,0.669,0.051L39,38.95\t\tc0.754,0.546,1.509,0.768,2.264,0.665c0.754-0.103,1.423-0.528,2.006-1.278c0.515-0.647,0.721-1.381,0.618-2.199\t\tc-0.035-0.818-0.446-1.5-1.235-2.045l-8.078-7.568c-1.063-0.443-2.093-0.631-3.087-0.563c-1.235,0.103-2.333,1.057-3.293,2.863\t\tc-2.778,4.296-5.574,7.756-8.387,10.381c-0.652,0.647-1.012,1.364-1.08,2.147c-0.035,0.75,0.274,1.467,0.926,2.148\t\tc0.548,0.613,1.252,0.954,2.11,1.022C22.517,44.559,23.255,44.269,23.976,43.655z M35.038,65.593\t\tc3.533-4.705,6.037-8.813,7.512-12.324c0.548-1.363,0.548-2.591,0-3.682c-0.755-1.057-1.852-1.603-3.293-1.637H23.976\t\tc-0.926,0-1.646,0.256-2.161,0.768c-0.549,0.545-0.823,1.261-0.823,2.147c0,0.818,0.274,1.518,0.823,2.097\t\tc0.515,0.546,1.235,0.836,2.161,0.869h10.033c0.548,0,0.96,0.085,1.235,0.256c0.206,0.204,0.24,0.478,0.103,0.818\t\tc-0.241,0.75-2.007,3.238-5.3,7.466c-2.881-1.739-4.871-2.438-5.968-2.097c-0.755,0.238-1.304,0.767-1.647,1.585\t\tc-0.343,0.818-0.411,1.568-0.206,2.25c0.309,0.75,0.926,1.347,1.853,1.79c2.709,1.261,6.071,3.408,10.084,6.443\t\tc0.857,0.646,1.68,0.937,2.47,0.869c0.754-0.034,1.423-0.409,2.007-1.125c0.514-0.751,0.72-1.518,0.617-2.302\t\tC39.154,68.933,37.747,67.535,35.038,65.593z M31.385,38.439c-0.755,0.034-1.424,0.357-2.007,0.971\t\tc-0.549,0.648-0.806,1.33-0.771,2.046c0.034,0.818,0.411,1.534,1.132,2.147c0.445,0.409,1.011,1.023,1.698,1.841\t\tc0.548,0.818,1.217,1.313,2.007,1.483c0.72,0.137,1.44-0.034,2.161-0.512c0.651-0.511,1.063-1.142,1.234-1.892\t\tc0.137-1.534-0.943-3.238-3.241-5.114C32.877,38.764,32.139,38.439,31.385,38.439z M67.916,69.734\t\tc-2.401-1.773-4.563-3.103-6.483-3.988c-0.926-0.409-1.784-0.494-2.573-0.256c-0.72,0.307-1.27,0.835-1.646,1.585\t\tc-0.343,0.818-0.36,1.567-0.051,2.25c0.239,0.75,0.823,1.347,1.749,1.79c1.475,0.647,3.293,1.772,5.454,3.375\t\tc0.823,0.545,1.646,0.801,2.47,0.767c0.754-0.137,1.389-0.546,1.904-1.227c0.515-0.716,0.702-1.45,0.566-2.199\t\tC69.168,71.081,68.705,70.382,67.916,69.734z M58.655,59.456V46.979c0-1.022-0.292-1.841-0.875-2.454\t\tc-0.549-0.512-1.252-0.784-2.109-0.818c-0.858,0.034-1.562,0.324-2.11,0.869c-0.549,0.614-0.823,1.415-0.823,2.403v12.478\t\tc0,2.387-1.149,4.432-3.447,6.137c-1.44,0.954-3.208,1.806-5.299,2.557c-1.029,0.238-1.784,0.732-2.264,1.482\t\tc-0.343,0.647-0.429,1.415-0.257,2.302c0.24,0.852,0.72,1.465,1.441,1.841c0.857,0.545,2.486,0.357,4.888-0.563\t\tc5.866-2.659,9.347-6.273,10.445-10.841C58.449,61.553,58.585,60.581,58.655,59.456z M131.45,69.428\t\tc-2.265-2.489-4.254-4.994-5.969-7.518c3.944-7.67,6.174-17.011,6.688-28.022c-0.24-1.363-0.515-2.744-0.823-4.142\t\tc-0.411-0.647-1.029-1.177-1.853-1.586c-0.857-0.408-1.749-0.563-2.675-0.46h-13.893c-0.926,0-1.646,0.256-2.161,0.768\t\tc-0.103,0.034-0.188,0.119-0.257,0.255c-0.138-0.442-0.344-0.8-0.618-1.073c-0.514-0.512-1.218-0.768-2.109-0.768H86.377\t\tc-0.926,0-1.646,0.273-2.161,0.818c-0.549,0.546-0.823,1.245-0.823,2.097c0,0.853,0.274,1.568,0.823,2.147\t\tc0.515,0.546,1.235,0.818,2.161,0.818h0.772v29.864c-1.956,0-3.276,0.357-3.962,1.073c-0.515,0.648-0.755,1.381-0.721,2.199\t\tc0.034,0.92,0.343,1.653,0.926,2.198c0.549,0.512,1.304,0.75,2.265,0.717c3.808-0.205,8.695-0.734,14.664-1.586\t\tc0.033-0.034,0.103-0.034,0.205,0v4.5c0,0.954,0.274,1.756,0.823,2.403c0.549,0.512,1.252,0.784,2.11,0.818\t\tc0.856-0.034,1.56-0.324,2.109-0.869c0.548-0.613,0.84-1.398,0.874-2.353v-5.42c1.27-0.307,2.401-0.598,3.396-0.869\t\tc1.063-0.308,1.715-0.801,1.955-1.483c0.309-0.75,0.36-1.551,0.154-2.403c-0.24-0.818-0.703-1.414-1.39-1.79\t\tc-0.72-0.409-2.093-0.323-4.116,0.256V32.763h1.338c0.754,0,1.526-0.375,2.315-1.125c0.137,0.341,0.36,0.699,0.669,1.074\t\tc0.515,0.546,1.235,0.836,2.161,0.869h11.731c0.856-0.033,1.457,0.153,1.801,0.563c0.96,1.637,0.36,7.074-1.801,16.313\t\tc-0.927,2.659-1.716,4.704-2.367,6.137c-2.71-5.012-4.494-11.114-5.351-18.308c-0.138-0.954-0.55-1.67-1.235-2.147\t\tc-0.617-0.409-1.32-0.563-2.109-0.46c-0.823,0.204-1.44,0.597-1.853,1.176c-0.446,0.648-0.583,1.449-0.411,2.403\t\tc1.371,7.092,3.172,13.04,5.402,17.847c0.754,1.671,1.544,3.29,2.367,4.858c-1.888,2.761-4.306,5.028-7.255,6.801\t\tc-0.755,0.512-1.235,1.142-1.441,1.893c-0.137,0.749,0.052,1.517,0.566,2.301c0.445,0.716,1.029,1.192,1.749,1.432\t\tc0.754,0.238,1.577,0.052,2.47-0.563c2.573-1.738,4.87-3.938,6.895-6.597c3.088,4.909,5.454,7.415,7.101,7.518\t\tc0.754,0.033,1.509-0.223,2.265-0.768c0.548-0.613,0.891-1.313,1.028-2.097C132.479,71.029,132.136,70.211,131.45,69.428z\t\t M100.526,61.093c-0.926,0.102-1.887,0.222-2.881,0.357c-1.578,0.205-3.105,0.409-4.579,0.614v-6.495h7.46V61.093z M100.526,49.894\t\th-7.46v-5.574h7.46V49.894z M100.526,38.644h-7.46v-5.881h7.46V38.644z"/></g></svg>',
        challengeBtn: '<svg style="margin-top: -10px" version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t\t\twidth="220px" height="100px" viewBox="0 0 220 100" enable-background="new 0 0 220 100" xml:space="preserve">\t\t\t<g>\t\t\t\t<path fill="#fff" d="M55.442,48.718c0.786,0,1.415-0.266,1.887-0.797c0.472-0.5,0.708-1.109,0.708-1.828\t\t\t\tc0-0.781-0.236-1.422-0.708-1.922c-0.472-0.406-1.101-0.625-1.887-0.656H51.15c0.22-0.938,0.472-1.922,0.754-2.953\t\t\t\tc0.189-0.938,0.346-1.719,0.472-2.344h1.368c0.786,0,1.415-0.266,1.887-0.797c0.472-0.5,0.708-1.109,0.708-1.828\t\t\t\tc0-0.781-0.236-1.422-0.708-1.922c-0.472-0.406-1.101-0.625-1.887-0.656h-8.348c-0.377-2.375-0.959-3.813-1.745-4.313\t\t\t\tc-0.597-0.375-1.29-0.469-2.075-0.281c-0.786,0.219-1.368,0.625-1.745,1.219c-0.314,0.594-0.299,1.719,0.047,3.375h-8.396\t\t\t\tc-0.786,0-1.431,0.25-1.934,0.75c-0.472,0.5-0.708,1.109-0.708,1.828c0,0.781,0.236,1.422,0.708,1.922\t\t\t\tc0.472,0.469,1.116,0.703,1.934,0.703h1.085c0.597,2.25,1.021,4.016,1.273,5.297h-3.679c-0.787,0-1.431,0.25-1.934,0.75\t\t\t\tc-0.471,0.5-0.708,1.109-0.708,1.828c0,0.781,0.236,1.422,0.708,1.922c0.472,0.469,1.116,0.703,1.934,0.703h8.631\t\t\t\tc-0.472,0.844-1.258,2.109-2.358,3.797h-6.462c-0.314,0-0.55,0.031-0.708,0.094c0.095-0.594,0-1.188-0.283-1.781\t\t\t\tc-0.315-0.688-0.802-1.141-1.462-1.359c-0.598-0.219-1.305-0.172-2.122,0.141c-0.598,0.281-1.368,0.594-2.311,0.938v-7.734h3.301\t\t\t\tc0.786,0,1.431-0.266,1.934-0.797c0.503-0.5,0.755-1.141,0.755-1.922s-0.252-1.438-0.755-1.969\t\t\t\tc-0.471-0.469-1.116-0.703-1.934-0.703h-3.301v-6.328c0-0.938-0.268-1.688-0.802-2.25c-0.503-0.469-1.148-0.719-1.934-0.75\t\t\t\tc-0.786,0.031-1.431,0.297-1.934,0.797c-0.503,0.563-0.755,1.297-0.755,2.203v6.328h-3.349c-0.849,0-1.509,0.25-1.981,0.75\t\t\t\tc-0.503,0.5-0.754,1.141-0.754,1.922s0.251,1.438,0.754,1.969c0.472,0.5,1.132,0.75,1.981,0.75h3.349v9.328\t\t\t\tc-1.509,0.406-2.877,0.75-4.103,1.031c-0.787,0.125-1.384,0.516-1.792,1.172c-0.377,0.594-0.488,1.266-0.33,2.016\t\t\t\tc0.125,0.781,0.502,1.375,1.132,1.781c0.566,0.375,1.257,0.484,2.075,0.328c0.88-0.188,1.887-0.422,3.019-0.703v8.344\t\t\t\tc0.031,0.78-0.158,1.374-0.566,1.781c-0.409,0.281-1.116,0.437-2.122,0.469c-1.887-0.281-3.035,0.422-3.443,2.109\t\t\t\tc-0.094,0.75,0.047,1.421,0.424,2.016c0.409,0.593,1.085,0.984,2.028,1.172c2.924,0.375,5.015,0.141,6.273-0.703\t\t\t\tc1.887-1.219,2.83-3.032,2.83-5.438V56.218c1.634-0.5,3.049-1,4.245-1.5c0,0.969,0.236,1.734,0.708,2.297\t\t\t\tc0.472,0.469,1.116,0.703,1.934,0.703h1.934c-1.887,1.875-2.705,3.578-2.453,5.109c0.314,1.5,1.383,2.531,3.207,3.094l4.198,1.547\t\t\t\tc-1.918,0.499-4.15,0.874-6.697,1.125c-0.881,0-1.62,0.265-2.217,0.797c-0.503,0.469-0.802,1.108-0.896,1.922\t\t\t\tc0.031,0.78,0.283,1.453,0.754,2.016c0.566,0.499,1.336,0.78,2.311,0.844c5.283-0.656,9.92-2.032,13.914-4.125l9.669,3.469\t\t\t\tc0.88,0.312,1.682,0.328,2.405,0.047c0.597-0.313,1.053-0.813,1.368-1.5c0.219-0.782,0.188-1.485-0.095-2.109\t\t\t\tc-0.314-0.656-0.896-1.142-1.745-1.453l-6.792-2.25c2.578-2.719,4.323-5.563,5.235-8.531h1.368c0.786,0,1.415-0.266,1.887-0.797\t\t\t\tc0.472-0.5,0.708-1.109,0.708-1.828c0-0.781-0.236-1.422-0.708-1.922c-0.472-0.406-1.101-0.625-1.887-0.656H42.661\t\t\t\tc0.88-1.406,1.619-2.672,2.217-3.797H55.442z M48.368,57.718c-0.315,0.844-0.692,1.641-1.132,2.391\t\t\t\tc-1.038,1.688-2.217,3.063-3.538,4.125c-0.126,0.031-0.236,0.109-0.33,0.234l-6.933-2.344c-0.472-0.188-0.739-0.453-0.802-0.797\t\t\t\tc-0.032-0.313,0.125-0.625,0.471-0.938c0.88-0.875,1.761-1.766,2.642-2.672H48.368z M39.312,43.515\t\t\t\tc-0.315-2.094-0.724-3.859-1.226-5.297H47c-0.189,1.406-0.645,3.172-1.368,5.297H39.312z M104.551,42.624\t\t\t\tc-0.85-0.406-1.73-0.641-2.642-0.703h-2.358c1.321-3.219,1.714-5.313,1.179-6.281c-0.22-0.406-0.55-0.734-0.99-0.984\t\t\t\tc2.453-0.469,3.835-1.031,4.151-1.688c0.313-0.656,0.408-1.391,0.282-2.203c-0.188-0.75-0.565-1.328-1.132-1.734\t\t\t\tc-0.566-0.375-1.305-0.484-2.216-0.328c-6.98,1.438-17.703,2.109-32.167,2.016c-0.849-0.031-1.541,0.219-2.076,0.75\t\t\t\tc-0.503,0.5-0.771,1.156-0.802,1.969c-0.032,0.844,0.205,1.516,0.708,2.016c0.472,0.563,1.839,0.844,4.104,0.844\t\t\t\tc-0.314,0.313-0.519,0.688-0.613,1.125c-0.126,0.75,0.047,1.5,0.519,2.25c0.377,0.563,0.754,1.313,1.132,2.25h-2.453\t\t\t\tc-1.258-0.094-2.421,0.391-3.49,1.453c-1.069,1.063-1.557,2.234-1.462,3.516v5.016c0,0.875,0.251,1.594,0.754,2.156\t\t\t\tc0.472,0.469,1.116,0.734,1.934,0.797c0.754-0.031,1.398-0.281,1.934-0.75c0.502-0.563,0.77-1.297,0.802-2.203V49.14\t\t\t\tc-0.032-0.469,0.142-0.906,0.519-1.313c0.408-0.375,0.849-0.547,1.32-0.516h27.969c0.755-0.031,1.257,0.328,1.509,1.078\t\t\t\tc0.189,0.5,0.157,1.547-0.094,3.141c-0.503,1.813,0.094,3,1.792,3.563c0.754,0.188,1.445,0.125,2.075-0.188\t\t\t\tc0.66-0.375,1.115-1.016,1.367-1.922c0.943-3.5,0.975-6.25,0.095-8.25C105.824,43.952,105.273,43.249,104.551,42.624z\t\t\t\tM77.383,41.921c-0.188-1.406-0.975-3.156-2.358-5.25c-0.126-0.188-0.236-0.313-0.33-0.375c2.389-0.094,5.015-0.188,7.876-0.281\t\t\t\tc-0.315,0.219-0.551,0.531-0.708,0.938c-0.221,0.688-0.173,1.469,0.142,2.344c0.283,0.594,0.534,1.469,0.754,2.625H77.383z\t\t\t\tM95.636,36.53c-0.377,1.438-1.085,3.234-2.123,5.391h-5.188c0-2.188-0.629-4.078-1.887-5.672\t\t\t\tc-0.126-0.188-0.252-0.313-0.377-0.375c0.849-0.094,1.745-0.156,2.688-0.188c2.767-0.125,5.298-0.313,7.594-0.563\t\t\t\tC96.029,35.437,95.793,35.905,95.636,36.53z M102.381,68.499c-4.654-1.157-8.6-2.47-11.838-3.938\t\t\t\tc3.49-2.719,6.226-5.844,8.207-9.375c0.566-1.063,0.755-1.984,0.566-2.766c-0.126-0.875-0.535-1.625-1.227-2.25\t\t\t\tc-0.692-0.594-1.62-0.906-2.783-0.938H74.082c-0.849,0-1.509,0.234-1.981,0.703c-0.503,0.5-0.755,1.156-0.755,1.969\t\t\t\tc0,0.75,0.251,1.391,0.755,1.922c0.472,0.5,1.132,0.766,1.981,0.797h16.696c0.691,0,1.147,0.125,1.368,0.375\t\t\t\tc0.125,0.219,0.125,0.484,0,0.797c-1.541,2.094-3.758,4.125-6.65,6.094c-2.358-1.5-4.843-3.344-7.452-5.531\t\t\t\tc-0.692-0.594-1.447-0.859-2.264-0.797c-0.692,0.125-1.29,0.469-1.792,1.031c-0.472,0.656-0.661,1.313-0.566,1.969\t\t\t\tc0.095,0.75,0.487,1.406,1.179,1.969c1.823,1.438,3.71,2.813,5.66,4.125c-4.528,1.437-8.348,2.499-11.461,3.188\t\t\t\tc-0.849,0.124-1.494,0.469-1.934,1.031c-0.409,0.563-0.582,1.266-0.519,2.109c0.125,0.75,0.472,1.374,1.038,1.875\t\t\t\tc0.566,0.469,1.274,0.656,2.123,0.563c5.879-1.313,11.226-3.188,16.036-5.625c6.603,3.469,11.98,5.546,16.13,6.234\t\t\t\tc0.502,0,1.021-0.11,1.557-0.328c0.597-0.313,1.038-0.876,1.321-1.688c0.188-0.75,0.125-1.453-0.189-2.109\t\t\t\tC103.953,69.217,103.292,68.748,102.381,68.499z M129.746,51.53c0.094-0.688-0.047-1.375-0.425-2.063\t\t\t\tc-0.472-0.688-1.021-1.109-1.65-1.266c-0.755-0.125-1.871,0.281-3.349,1.219v-6.797h2.169c0.786,0,1.431-0.266,1.935-0.797\t\t\t\tc0.502-0.5,0.754-1.141,0.754-1.922s-0.252-1.438-0.754-1.969c-0.472-0.469-1.117-0.703-1.935-0.703h-2.169v-6.141\t\t\t\tc0-0.938-0.268-1.688-0.802-2.25c-0.504-0.469-1.148-0.719-1.934-0.75c-0.787,0.031-1.432,0.297-1.935,0.797\t\t\t\tc-0.503,0.563-0.754,1.297-0.754,2.203v6.141h-2.595c-0.849,0-1.509,0.25-1.98,0.75c-0.504,0.5-0.755,1.141-0.755,1.922\t\t\t\ts0.251,1.438,0.755,1.969c0.472,0.5,1.132,0.75,1.98,0.75h2.595v9.234c-1.259,0.406-2.5,0.781-3.727,1.125\t\t\t\tc-0.786,0.219-1.353,0.656-1.698,1.313c-0.314,0.688-0.33,1.438-0.047,2.25c0.22,0.75,0.676,1.297,1.368,1.641\t\t\t\tc0.691,0.313,1.43,0.344,2.217,0.094c0.597-0.219,1.227-0.438,1.887-0.656v8.484c0.03,0.78-0.158,1.374-0.566,1.781\t\t\t\tc-0.377,0.281-1.069,0.375-2.075,0.281c-1.887-0.375-3.035,0.296-3.443,2.016c-0.126,0.75-0.016,1.437,0.33,2.063\t\t\t\tc0.661,0.968,2.06,1.468,4.198,1.5c1.98,0,3.364-0.267,4.15-0.797c1.887-1.219,2.83-3.032,2.83-5.438V55.468\t\t\t\tc1.604-0.75,3.002-1.5,4.197-2.25C129.211,52.749,129.62,52.187,129.746,51.53z M156.536,61.468\t\t\t\tc-0.787,0.031-1.432,0.281-1.935,0.75c-0.503,0.594-0.786,1.313-0.849,2.156c-0.031,1.999-0.221,3.124-0.566,3.375\t\t\t\tc-0.66,0.281-1.572,0.422-2.735,0.422c-0.503-0.032-0.912-0.188-1.227-0.469c-0.22-0.22-0.346-0.609-0.377-1.172V55.14\t\t\t\tc1.981,1.5,3.694,2.875,5.142,4.125c0.754,0.688,1.492,0.969,2.216,0.844c0.691-0.031,1.305-0.344,1.84-0.938\t\t\t\tc0.503-0.594,0.707-1.25,0.613-1.969c-0.126-0.875-0.488-1.547-1.085-2.016c-2.39-1.688-5.299-3.625-8.726-5.813v-3.516\t\t\t\tc5.69-5.813,8.427-9.75,8.207-11.813c-0.032-0.031-0.048-0.078-0.048-0.141c-0.22-0.656-0.645-1.203-1.272-1.641\t\t\t\tc-0.692-0.375-1.385-0.469-2.076-0.281s-1.289,0.672-1.792,1.453c-0.755,1.313-1.761,2.781-3.019,4.406v-6.75\t\t\t\tc0-0.938-0.268-1.688-0.802-2.25c-0.503-0.469-1.148-0.719-1.934-0.75c-0.786,0.031-1.432,0.297-1.934,0.797\t\t\t\tc-0.504,0.563-0.755,1.297-0.755,2.203v37.594c0,1.249,0.393,2.344,1.179,3.281c0.975,0.968,2.279,1.5,3.915,1.594\t\t\t\tc2.012,0.094,3.915,0.094,5.707,0c1.446-0.032,2.516-0.501,3.207-1.406c0.755-0.844,1.336-3.392,1.745-7.641\t\t\t\tc0.031-0.938-0.205-1.688-0.707-2.25C157.966,61.796,157.321,61.53,156.536,61.468z M138.377,28.28\t\t\t\tc-0.786,0.031-1.431,0.297-1.934,0.797c-0.503,0.563-0.755,1.297-0.755,2.203v8.25c-0.943-2.563-1.902-4.781-2.877-6.656\t\t\t\tc-0.409-0.781-0.959-1.281-1.65-1.5c-0.66-0.219-1.321-0.141-1.981,0.234c-0.691,0.406-1.132,0.922-1.32,1.547\t\t\t\tc-0.188,0.688-0.079,1.422,0.33,2.203c1.163,2.094,2.312,5.063,3.443,8.906c0.283,0.875,0.723,1.5,1.32,1.875\t\t\t\tc0.566,0.375,1.227,0.453,1.98,0.234c0.22-0.094,0.473-0.203,0.755-0.328v4.078c-2.641,2.438-5.393,4.359-8.254,5.766\t\t\t\tc-0.786,0.469-1.32,1.078-1.604,1.828c-0.126,0.688-0.031,1.391,0.283,2.109c0.472,0.688,1.038,1.125,1.698,1.313\t\t\t\tc1.32,0.375,3.726-0.906,7.216-3.844c0.125-0.125,0.299-0.266,0.519-0.422c0,2.438-0.912,4.969-2.735,7.594\t\t\t\tc-0.943,1.343-2.06,2.484-3.349,3.422c-0.503,0.375-0.943,0.656-1.32,0.844c-0.85,0.469-1.399,1.078-1.651,1.828\t\t\t\tc-0.126,0.687-0.031,1.39,0.283,2.109c0.408,0.687,0.975,1.125,1.698,1.313c0.88,0.281,2.279-0.204,4.197-1.453\t\t\t\tc5.313-3.938,8.128-9.875,8.442-17.813V31.28c0-0.938-0.268-1.688-0.802-2.25C139.808,28.562,139.163,28.312,138.377,28.28z\t\t\t\tM197.39,34.233c0.975,0.594,2.201,1.547,3.679,2.859c0.691,0.656,1.415,1,2.17,1.031c0.691,0,1.32-0.281,1.887-0.844\t\t\t\tc0.566-0.594,0.833-1.266,0.802-2.016c-0.095-1.625-1.997-3.516-5.707-5.672c-0.786-0.469-1.541-0.625-2.264-0.469\t\t\t\tc-0.692,0.125-1.243,0.547-1.651,1.266c-0.408,0.688-0.534,1.375-0.377,2.063C196.116,33.14,196.604,33.733,197.39,34.233z\t\t\t\tM209.464,60.624c-0.472-0.688-1.054-1.094-1.745-1.219c-0.786-0.125-1.462,0-2.027,0.375c-0.881,0.594-1.321,2.141-1.321,4.641\t\t\t\tc-0.22,1.249-0.44,1.922-0.66,2.016c-0.377,0-0.975-0.579-1.792-1.734c-0.504-0.688-0.99-1.406-1.462-2.156\t\t\t\tc4.15-5.625,6.367-9.688,6.649-12.188c-0.031-0.281-0.094-0.547-0.188-0.797c-0.282-0.656-0.771-1.141-1.462-1.453\t\t\t\tc-0.755-0.313-1.462-0.359-2.122-0.141c-0.598,0.219-1.085,0.719-1.463,1.5c-1.54,3.469-2.829,5.938-3.867,7.406\t\t\t\tc-1.037-3.375-1.855-6.859-2.452-10.453l11.696-2.719c0.943-0.188,1.635-0.625,2.075-1.313c0.314-0.594,0.394-1.266,0.236-2.016\t\t\t\tc-0.188-0.844-0.598-1.438-1.227-1.781c-0.66-0.406-1.446-0.5-2.358-0.281l-11.083,2.578c-0.315-3.469-0.472-6.703-0.472-9.703\t\t\t\tc-0.032-0.594-0.236-1.203-0.613-1.828c-0.409-0.688-1.069-1.031-1.981-1.031c-0.943,0.031-1.65,0.344-2.122,0.938\t\t\t\tc-0.504,0.594-0.739,1.281-0.708,2.063c0.031,3.313,0.236,6.906,0.613,10.781l-5.518,1.266c-0.943,0.188-1.636,0.609-2.075,1.266\t\t\t\tc-0.315,0.656-0.395,1.406-0.236,2.25c0.188,0.688,0.613,1.266,1.273,1.734c0.597,0.313,1.368,0.359,2.312,0.141l4.999-1.125\t\t\t\tc0.88,5.156,2.186,9.844,3.915,14.063c-1.793,2-4.262,4.093-7.405,6.281c-0.692,0.499-1.101,1.108-1.227,1.828\t\t\t\tc-0.126,0.687,0.063,1.374,0.566,2.063c0.503,0.687,1.068,1.093,1.698,1.219c1.414,0.188,4.386-1.954,8.914-6.422\t\t\t\tc2.735,4.249,5.313,6.39,7.734,6.422c1.163,0,2.044-0.173,2.642-0.516c1.227-0.782,2.106-4.017,2.642-9.703\t\t\t\tC209.872,62.03,209.747,61.28,209.464,60.624z M180.316,49.796h-3.396v-7.172h5.943c0.785,0,1.431-0.266,1.934-0.797\t\t\t\tc0.503-0.5,0.755-1.141,0.755-1.922s-0.252-1.438-0.755-1.969c-0.472-0.469-1.116-0.703-1.934-0.703h-5.943V31.28\t\t\t\tc0-0.844-0.282-1.516-0.849-2.016c-0.503-0.469-1.132-0.703-1.887-0.703c-0.786,0-1.446,0.25-1.98,0.75\t\t\t\tc-0.472,0.469-0.708,1.125-0.708,1.969v18.516h-2.877c-1.037-0.031-1.918,0.328-2.641,1.078c-0.692,0.75-1.055,1.625-1.085,2.625\t\t\t\tv14.578c-0.032,1.155,0.33,2.203,1.085,3.141c0.597,0.78,1.478,1.187,2.641,1.219h11.697c1.132-0.032,2.122-0.469,2.971-1.313\t\t\t\tc0.881-0.876,1.337-1.892,1.368-3.047V53.499c-0.031-1.063-0.409-1.906-1.132-2.531C182.643,50.187,181.573,49.796,180.316,49.796z\t\t\t\tM179.231,66.015c0,0.281-0.095,0.516-0.283,0.703s-0.424,0.296-0.707,0.328h-6.934c-0.283,0-0.519-0.11-0.707-0.328\t\t\t\tc-0.189-0.22-0.283-0.454-0.283-0.703v-9.797c-0.032-0.281,0.063-0.531,0.283-0.75c0.22-0.188,0.455-0.281,0.707-0.281h6.934\t\t\t\tc0.22,0,0.455,0.109,0.707,0.328c0.188,0.219,0.283,0.453,0.283,0.703V66.015z"/>\t\t\t</g>\t\t</svg>',
        dot: '<svg version="1.1" style="width: 600px;height: 600px"\t xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"\t x="0px" y="0px" width="220px" height="100px" viewBox="-53.5 -4.618 220 100" enable-background="new -53.5 -4.618 220 100"\t xml:space="preserve"><defs></defs><g>\t<g>\t\t<path fill-rule="evenodd" clip-rule="evenodd" fill="#2C7EEE" d="M2.363,16.935C1.058,16.935,0,17.993,0,19.298\t\t\tc0,1.305,1.058,2.363,2.363,2.363c1.305,0,2.363-1.058,2.363-2.363C4.726,17.993,3.668,16.935,2.363,16.935z M16.935,12.209\t\t\tc-0.653,0-1.182,0.529-1.182,1.182c0,0.652,0.529,1.181,1.182,1.181c0.652,0,1.181-0.529,1.181-1.181\t\t\tC18.116,12.738,17.587,12.209,16.935,12.209z M9.846,41.353c-0.87,0-1.575,0.706-1.575,1.576c0,0.87,0.706,1.575,1.575,1.575\t\t\tc0.87,0,1.576-0.706,1.576-1.575C11.421,42.058,10.716,41.353,9.846,41.353z M105.351,9.452c-0.761,0-1.378,0.617-1.378,1.378\t\t\ts0.617,1.378,1.378,1.378c0.762,0,1.379-0.617,1.379-1.378S106.112,9.452,105.351,9.452z M38.596,0\t\t\tc-0.435,0-0.788,0.353-0.788,0.788s0.353,0.788,0.788,0.788c0.435,0,0.788-0.353,0.788-0.788S39.031,0,38.596,0z M30.719,88.613\t\t\tc-0.87,0-1.575,0.705-1.575,1.575s0.705,1.575,1.575,1.575s1.575-0.705,1.575-1.575S31.589,88.613,30.719,88.613z M103.382,59.863\t\t\tc-0.979,0-1.772,0.793-1.772,1.772c0,0.979,0.794,1.771,1.772,1.771s1.772-0.793,1.772-1.771\t\t\tC105.154,60.656,104.36,59.863,103.382,59.863z M114.016,64.195c-0.544,0-0.984,0.44-0.984,0.984s0.44,0.984,0.984,0.984\t\t\tS115,65.724,115,65.18S114.56,64.195,114.016,64.195z M8.074,59.469c-0.327,0-0.591,0.265-0.591,0.591s0.264,0.591,0.591,0.591\t\t\tc0.326,0,0.591-0.265,0.591-0.591S8.4,59.469,8.074,59.469z M93.93,89.4c-0.326,0-0.591,0.265-0.591,0.591\t\t\ts0.265,0.591,0.591,0.591s0.591-0.265,0.591-0.591S94.256,89.4,93.93,89.4z"/>\t</g></g></svg>',
        cry: '<svg version="1.1"\t xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"\t x="0px" y="0px" width="80px" height="80px" viewBox="-8.98 -16.372 80 80" enable-background="new -8.98 -16.372 80 80"\t xml:space="preserve"><defs></defs><g>\t<g>\t\t<path fill-rule="evenodd" clip-rule="evenodd" fill="#499BF5" d="M5.554,9.752c2.59,0,4.69-2.184,4.69-4.876\t\t\tc0-2.693-2.1-4.876-4.69-4.876S0.865,2.183,0.865,4.876C0.865,7.568,2.964,9.752,5.554,9.752z M55.842,9.752\t\t\tc2.59,0,4.689-2.184,4.689-4.876c0-2.693-2.1-4.876-4.689-4.876s-4.689,2.183-4.689,4.876C51.152,7.568,53.252,9.752,55.842,9.752\t\t\tz M62.141,47.212c-2.411-15.191-15.398-26.796-31.064-26.796c-15.667,0-28.654,11.604-31.064,26.796c0,0-0.298,2.393,2.112,2.552\t\t\tc2.526,0,3.01-2.552,3.01-2.552C7.486,34.856,18.2,25.52,31.076,25.52c12.876,0,23.59,9.337,25.942,21.692\t\t\tc0,0,0.219,2.445,2.381,2.552C62.205,49.977,62.141,47.212,62.141,47.212z"/>\t</g></g></svg>',
        loseTest: '<svg style="width:400px;height:120px" version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="800px" height="300px" viewBox="0 0 800 300" enable-background="new 0 0 800 300" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#247AEB" d="M770.088,169.701c-13.838,0-25.098-11.326-25.098-25.248\tc0-13.922,11.26-25.249,25.098-25.249s25.095,11.327,25.095,25.249C795.183,158.375,783.926,169.701,770.088,169.701z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#247AEB" d="M701.667,169.701c-13.838,0-25.096-11.326-25.096-25.248\tc0-13.922,11.258-25.249,25.096-25.249s25.098,11.327,25.098,25.249C726.765,158.375,715.505,169.701,701.667,169.701z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#247AEB" d="M633.249,169.701c-13.838,0-25.098-11.326-25.098-25.248\tc0-13.922,11.26-25.249,25.098-25.249s25.095,11.327,25.095,25.249C658.344,158.375,647.087,169.701,633.249,169.701z"/><path fill="#247AEB" d="M583.045,240.045c-35.102-3.668-62.579-13.041-81.809-27.885c-17.227,15.777-45.092,25.156-82.975,27.904\tl-7.603,0.553v-31.313l6.246-0.748c22.17-2.656,38.144-8.613,47.701-17.762h-51.782v-33.484l-2.165,0.725v-41.646l5.571-1.222\tc9.039-1.98,17.065-4.319,23.999-6.986c-7.137-3.384-14.283-5.602-21.321-6.61l-6.084-0.873V65.409l7.389,0.312\tc10.306,0.435,19.693,1.995,27.984,4.645V59.192h40.891v25.333c6.121-4.479,10.615-11.029,13.635-19.821l1.644-4.788h45.387\tl-3.968,7.974h43.644v28.921l-0.635,1.396c-12.69,27.949-34.034,46.892-63.612,56.532v1.579h64.97v34.477h-53.228\tc9.295,8.545,25.323,14.508,47.877,17.785l6.071,0.883v31.4L583.045,240.045z M448.197,156.318v-12.187\tc-8.464,3.73-17.904,7.341-28.199,10.783l-4.203,1.403H448.197z M489.088,130.575l0.628-0.152c4.064-0.983,7.587-1.946,10.639-2.873\tc-1.058-0.243-2.107-0.47-3.15-0.678l-5.695-1.144v-9.782c-0.798,0.142-1.604,0.271-2.421,0.389V130.575z"/><path fill="#247AEB" d="M273.791,241.533v-45.664h-59.916V85.286h59.916V58.466h47.388v26.819h59.916v69.288\tc0.552,14.501-2.592,25.415-9.345,32.44c-5.726,5.959-13.778,8.979-23.933,8.979c-1.182,0-2.399-0.041-3.651-0.123h-22.987v45.664\tH273.791z M333.579,160.667c1.641,0,2.315-0.335,2.437-0.462c0.008-0.01,0.792-0.882,0.591-4.362l-0.011-0.406v-34.949h-15.416\tv40.18H333.579z M273.791,160.667v-40.18h-15.416v40.18H273.791z"/><path fill="#247AEB" d="M71.231,240.084v-55.51c-11.271,20.381-30.207,36.123-56.621,47.004l-9.792,4.031v-34.537l2.972-2.121\tc14.699-10.486,23.947-24.592,28.113-42.947H4.818v-35.928h66.413V108.89H14.203V73.688h57.028V59.192h46.667v14.496h56.307v35.202\th-56.307v11.187h66.413v35.928h-31.811c4.16,18.355,13.407,32.457,28.116,42.947l2.974,2.121v34.537l-9.792-4.031\tc-25.862-10.652-44.551-25.959-55.9-45.713v54.219H71.231z"/><g>\t<g>\t\t<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M110.807,101.799h56.307v-21.02h-56.307V66.283H78.322v14.496\t\t\tH21.293v21.02h57.028v25.369H11.909v21.746h32.485c-3.374,24.167-14.201,42.765-32.485,55.81v20.297\t\t\tc37.538-15.461,58.709-40.828,63.525-76.106h2.888v84.079h32.485v-84.079h2.165c4.806,35.278,25.988,60.646,63.526,76.106v-20.297\t\t\tc-18.295-13.045-29.123-31.643-32.485-55.81h33.207v-21.746h-66.413V101.799z M374.004,92.376h-59.916V65.557h-33.206v26.819\t\t\th-59.916v96.401h59.916v45.664h33.206v-45.664h30.319c20.687,1.451,30.556-9.898,29.597-34.065V92.376z M280.882,167.758h-29.597\t\t\tv-54.361h29.597V167.758z M333.579,167.758h-19.491v-54.361h29.598v42.04C344.159,163.658,340.798,167.758,333.579,167.758z\t\t\t M455.288,156.161h26.709V66.283h-26.709v42.765c-9.634,5.323-22.143,9.671-37.538,13.046v26.095\t\t\tc14.438-4.826,26.946-9.899,37.538-15.222V156.161z M450.233,78.604c-8.663-3.375-18.769-5.312-30.318-5.798v21.745\t\t\tc10.107,1.45,20.213,5.074,30.318,10.872V78.604z M523.144,183.705h59.917v-20.297h-64.97v-10.146h-18.046\t\t\tc39.939-5.798,67.37-25.12,82.293-57.986V74.98h-47.644c0.473-0.962,1.195-2.412,2.165-4.349c0.476-1.45,0.96-2.651,1.444-3.625\t\t\th-28.876c-4.814,14.021-13.242,23.443-25.266,28.269v14.497c5.29-0.477,10.107-1.45,14.438-2.899v13.046\t\t\tc7.218,1.45,14.673,3.624,22.378,6.523c-5.775,3.874-15.646,7.499-29.597,10.873v15.946h-7.942v10.146h-63.524v20.297h58.472\t\t\tc-8.188,17.395-28.4,28.029-60.637,31.893v17.395c39.939-2.898,67.607-13.047,83.016-30.443\t\t\tc18.283,16.424,45.952,26.57,83.016,30.443v-17.395C550.574,210.773,530.363,200.137,523.144,183.705z M510.15,102.523\t\t\tc4.33-1.925,8.179-4.349,11.551-7.248h28.873c-7.218,11.121-13.715,19.333-19.49,24.644v-13.046\t\t\tC524.824,104.46,517.844,103.01,510.15,102.523z M633.249,126.296c-9.944,0-18.007,8.129-18.007,18.158\t\t\tc0,10.027,8.063,18.156,18.007,18.156c9.943,0,18.004-8.129,18.004-18.156C651.253,134.425,643.192,126.296,633.249,126.296z\t\t\t M701.667,126.296c-9.944,0-18.004,8.129-18.004,18.158c0,10.027,8.06,18.156,18.004,18.156c9.943,0,18.007-8.129,18.007-18.156\t\t\tC719.674,134.425,711.61,126.296,701.667,126.296z M770.088,126.296c-9.944,0-18.007,8.129-18.007,18.158\t\t\tc0,10.027,8.063,18.156,18.007,18.156c9.943,0,18.004-8.129,18.004-18.156C788.092,134.425,780.031,126.296,770.088,126.296z"/>\t</g></g></svg>',
        winTest: '<svg version="1.1" style="width: 320px;height:118px" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="800px" height="300px" viewBox="0 0 800 300" enable-background="new 0 0 800 300" xml:space="preserve"><polygon fill="none" points="706.948,272.125 706.948,181.432 709.815,181.432 705.242,42.813 800,42.813 795.427,181.432 \t799.108,181.432 799.108,272.125 "/><polygon fill="#247AEB" points="725.562,253.512 725.562,200.045 729.053,200.045 724.479,61.426 780.761,61.426 776.19,200.045 \t780.496,200.045 780.496,253.512 "/><path fill="#247AEB" d="M500.929,256.771V149.279c-0.144,0.044-0.286,0.088-0.435,0.131c-2.287,1.13-4.305,1.98-6.143,2.584\tl-10.477,3.456v-35.479l3.285-2.386c13.955-10.148,23.833-29.089,29.362-56.292l1.295-6.391h49.541l-0.328,1.633h44.87v7.978\tc0,0.937-0.094,2.038-0.294,3.438h75.008v62.43h-11.367v2.626c0,28.818,3.976,49.914,11.813,62.695l1.179,1.919v42.055\tl-11.919-6.773c-16.595-9.431-28.616-23.315-35.996-41.514v27.238c0.314,11.794-2.717,21.164-9.023,27.637\tc-6.279,6.448-15.508,9.718-27.42,9.718c-0.005,0-1.188-0.009-1.791-0.024l-32.135,0.003v-33.729\tc-4.685,4.324-9.904,8.146-15.651,11.462l-4.125,2.376v20.704h-49.25V256.771z M590.157,218.802\tc0.058-0.438,0.106-1.031,0.106-1.811v-23.455c-4.279,9.644-9.888,18.075-16.804,25.266H590.157z M550.184,180.17\tc3.155-11.039,4.871-25.271,5.126-42.574c-1.388,0.488-2.808,0.953-4.251,1.399l-0.875,0.273V180.17z M590.264,125.028v-9.319\tc-3.088,3.378-6.567,6.486-10.434,9.319H590.264z"/><path fill="#247AEB" d="M413.31,254.348c-0.577,0-1.164-0.01-1.762-0.025l-141.742,0.003v-49.741h-14.62v-34.708h18.679v-46.832\th-6.498V96.952h-9.745V62.241h73.09V53.27h52.501v8.971h74.71v34.711h-11.367v26.092h-4.872v12.194\tc0.627,12.088-2.034,21.364-7.904,27.567c-2.858,3.019-6.38,5.237-10.527,6.641l-0.215,0.43h37.324v34.711h-14.619v14.63\tc0.615,11.257-1.982,20.05-7.723,26.134C432.387,251.323,424.073,254.348,413.31,254.348L413.31,254.348z"/><path fill="#247AEB" d="M109.052,255.982c-0.566,0-1.144-0.011-1.725-0.027l-32.104,0.003v-11.414H35.432v-7.979\tc0-1.675,0.429-3.395,1.338-5.359c3.97-13.018,7.982-24.95,11.986-35.651c-3.913,0.896-7.969,1.697-12.15,2.396l-9.294,1.555\tv-36.109l6.134-1.46c11.618-2.763,21.355-6.993,29.408-12.799H27.312v-38.785h39.795v-4.433H33.812V67.133h33.295V53.27h50.876\tv13.863h22.212V53.27h50.063v13.863h33.297v38.786h-33.297v4.433h39.792v38.785h-35.552c8.05,5.806,17.795,10.037,29.418,12.799\tl6.131,1.46v36.868l-9.886-2.437c-1.028-0.254-2.223-0.566-3.575-0.932c4.7,12.009,8.841,24.594,12.368,37.577l2.734,10.068h-84.664\tl-1.054-6.747c-0.915-5.861-2.127-11.854-3.63-17.959v1.236C142.342,243.255,130.208,255.982,109.052,255.982z M91.321,218.802\tc0.41,0,0.74-0.02,1.005-0.045c-0.002-0.075-0.049-0.595-0.049-0.595v-12.435c-1.555,4.671-2.95,9.028-4.183,13.072h3.228V218.802z\t M154.523,173.954c-4.318-3.194-8.382-6.761-12.181-10.691v10.691H154.523z M132.256,151.122c-0.47-0.654-0.932-1.316-1.387-1.986\th-4.578c-0.496,0.669-0.993,1.332-1.496,1.986H132.256z M140.191,110.352v-4.433h-22.212v4.433H140.191z"/><g>\t<g>\t\t<path fill="#FFFFFF" d="M182.277,97.941h33.298v-22.83h-33.298V61.247h-34.108v13.865h-38.167V61.247H75.079v13.865H41.786v22.83\t\t\th33.293v20.387H35.286v22.831h47.102c-10.836,14.142-26.533,23.646-47.102,28.538v20.384c9.746-1.63,18.679-3.796,26.801-6.522\t\t\tc-5.964,14.142-11.914,30.986-17.865,50.562c-0.545,1.077-0.813,1.896-0.813,2.445h31.673c2.703-12.5,8.385-30.705,17.053-54.636\t\t\th-24.36c12.994-3.799,23.817-9.238,32.482-16.31v52.187c0.536,5.993-2.436,8.972-8.932,8.972h-8.12v21.202h24.365\t\t\tc17.865,0.535,26.8-8.434,26.8-26.907V159.1h-27.614c5.407-4.895,10.559-10.87,15.433-17.94h12.994\t\t\tc12.994,20.664,30.859,34.245,53.6,40.771h-14.62c7.574,18.489,12.994,36.695,16.24,54.636h30.86\t\t\tc-4.874-17.94-10.836-34.783-17.866-50.561c2.158,0.551,5.406,1.096,9.745,1.63c3.781,1.097,6.762,1.912,8.933,2.446v-20.384\t\t\tc-20.582-4.892-36.279-14.396-47.103-28.538h47.103v-22.831h-39.792V97.941H182.277z M148.169,118.328h-38.167V97.941h38.167\t\t\tV118.328z M138.424,181.93c7.577,19.034,12.716,37.244,15.429,54.636h30.86c-5.419-21.204-11.646-39.407-18.678-54.636H138.424z\t\t\t M415.028,169.697c0-1.082,0.265-2.164,0.81-3.262h-35.73c-1.626,4.357-2.436,7.619-2.436,9.785\t\t\tc-0.548,0.547-0.815,1.095-0.815,1.63h-38.982c0-1.083-0.543-2.446-1.623-4.077c-0.545-3.261-1.09-5.704-1.625-7.338h-35.731\t\t\tc0.532,1.096,0.813,2.176,0.813,3.262c1.625,3.812,2.701,6.523,3.248,8.153h-39.792v18.757h189.222v-18.757h-40.607\t\t\tC413.403,174.59,414.48,171.878,415.028,169.697z M437.765,203.133H277.78v43.217h133.997c18.4,0.536,27.068-8.434,25.985-26.907\t\t\tv-16.31H437.765z M395.537,230.043h-83.649v-10.601h91.766v4.077C404.188,227.874,401.491,230.043,395.537,230.043z\t\t\t M338.692,96.311h-63.345v18.753H438.58V96.311h-63.342v-7.339h74.711V70.216h-74.711v-8.972h-36.546v8.972h-73.09v18.756h73.09\t\t\tV96.311L338.692,96.311z M281.844,121.59v41.586h126.689c17.866,1.096,26.253-8.151,25.177-27.723v-13.861H281.844V121.59z\t\t\t M393.102,147.679h-77.965v-10.597h85.271v2.446C400.943,145.517,398.508,148.23,393.102,147.679z M592.554,133.005h-29.236\t\t\tc0,30.987-4.34,53.283-12.994,66.866v26.907C579.56,209.934,593.632,178.667,592.554,133.005z M592.554,98.757h54.41v23.646\t\t\th31.673V75.926h-77.149c0.532-1.631,1.077-3.529,1.622-5.708c0.533-2.713,0.813-4.612,0.813-5.705h-33.295\t\t\tc-2.169,19.566-9.479,35.061-21.928,46.477v20.386C569.814,124.849,584.435,113.981,592.554,98.757z M639.656,133.005\t\t\tc-1.622,45.662,11.903,76.65,40.608,92.958v-26.092c-8.669-14.129-12.994-36.414-12.994-66.866H639.656L639.656,133.005z\t\t\t M598.24,216.991c0,7.071-2.716,10.333-8.122,9.787h-12.184v21.202H602.3c20.569,0.535,30.579-9.252,30.047-29.355V113.434H598.24\t\t\tV216.991z M524.341,62.877c-5.965,29.356-16.788,49.743-32.487,61.159v20.387c1.622-0.535,3.513-1.35,5.687-2.446\t\t\tc5.405-1.631,9.2-2.981,11.365-4.077v110.899h33.298V108.547c6.495-11.416,11.637-26.63,15.431-45.664h-33.293V62.877z\t\t\t M768.458,192.526l4.06-123.125h-39.795l4.062,123.125H768.458z M733.539,245.534h38.979v-37.509h-38.979V245.534z"/>\t</g></g></svg>',
        winDetail: '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="85px" height="300px" viewBox="0 0 85 300" enable-background="new 0 0 85 300" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#1CA7FF" d="M85,20.441c-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05\tv3.05c-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05s0.896,2.05,2,2.05v3.05\tc-1.104,0-2,0.917-2,2.05s0.896,2.05,2,2.05v3.05c-1.104,0-2,0.917-2,2.05s0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05\tc0,1.132,0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v3c-1.104,0-2,0.918-2,2.05\tc0,1.132,0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05\ts0.896,2.05,2,2.05v3.05c-1.104,0-2,0.917-2,2.05s0.896,2.05,2,2.05v3.05c-1.104,0-2,0.917-2,2.05s0.896,2.05,2,2.05v3.05\tc-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v4\tc-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v3.05c-1.104,0-2,0.918-2,2.05c0,1.132,0.896,2.05,2,2.05v3.05\tc-1.104,0-2,0.918-2,2.05c0,1.133,0.896,2.051,2,2.051v3.05c-1.104,0-2,0.917-2,2.05s0.896,2.05,2,2.05v3.05\tc-1.104,0-2,0.918-2,2.051c0,1.131,0.896,2.049,2,2.049v3.051c-1.104,0-2,0.918-2,2.049c0,1.133,0.896,2.051,2,2.051v3.051\tc-1.104,0-2,0.918-2,2.049c0,1.133,0.896,2.051,2,2.051v3c-1.104,0-2,0.918-2,2.049c0,1.133,0.896,2.051,2,2.051v3.051\tc-1.104,0-2,0.918-2,2.049c0,1.133,0.896,2.051,2,2.051v3.049c-1.104,0-2,0.918-2,2.051s0.896,2.051,2,2.051v3.049\tc-1.104,0-2,0.918-2,2.051c0,1.131,0.896,2.049,2,2.049v3.051c-1.104,0-2,0.918-2,2.051c0,1.131,0.896,2.049,2,2.049v3.051\tc-1.104,0-2,0.918-2,2.049c0,1.133,0.896,2.051,2,2.051v3.051c-1.104,0-2,0.916-2,2.049s0.896,2.051,2,2.051v3\tc-1.104,0-2,0.918-2,2.049c0,1.133,0.896,2.051,2,2.051v3.051c-1.104,0-2,0.916-2,2.049s0.896,2.051,2,2.051v3.049\tc-1.104,0-2,0.918-2,2.051s0.896,2.051,2,2.051v3.049c-1.104,0-2,0.918-2,2.051c0,1.131,0.896,2.049,2,2.049v3.051\tc-1.104,0-2,0.918-2,2.051c0,1.131,0.896,2.049,2,2.049v2.391c-2.836,0.477-5,2.938-5,5.91H6.451c-0.765,0-1.495-0.152-2.176-0.418\tC4.732,261.27,5,260.387,5,259.441c0-2.762-2.239-5-5-5v-5c2.761,0,5-2.238,5-5s-2.239-5-5-5v-5c2.761,0,5-2.238,5-5s-2.239-5-5-5\tv-5c2.761,0,5-2.238,5-5s-2.239-5-5-5v-5c2.761,0,5-2.238,5-5s-2.239-5-5-5v-5c2.761,0,5-2.238,5-5s-2.239-5-5-5v-5\tc2.761,0,5-2.238,5-5s-2.239-5-5-5v-5.525c0.332,0.016,0.665,0.025,1,0.025c12.15,0,22-9.85,22-22s-9.85-22-22-22\tc-0.335,0-0.668,0.01-1,0.025v-5.525c2.761,0,5-2.239,5-5s-2.239-5-5-5v-5c2.761,0,5-2.239,5-5s-2.239-5-5-5v-5c2.761,0,5-2.239,5-5\ts-2.239-5-5-5v-5c2.761,0,5-2.239,5-5s-2.239-5-5-5v-5c2.761,0,5-2.239,5-5s-2.239-5-5-5v-5c2.761,0,5-2.239,5-5s-2.239-5-5-5v-5\tc2.761,0,5-2.239,5-5c0-0.946-0.268-1.828-0.725-2.583c0.681-0.265,1.411-0.417,2.176-0.417H80c0,2.972,2.164,5.433,5,5.91V20.441z"\t/><g>\t<g>\t\t<path fill="#FFFFFF" d="M53.565,71.363c-0.717,0-1.641-0.039-2.773-0.117c0.131,0.586,0.229,1.087,0.293,1.504\t\t\tc1.197,0,2.182-0.006,2.949-0.02c1.445-0.013,2.168-0.723,2.168-2.129v-7.598H45.343v9.902h1.523v-3.535h7.813v0.977\t\t\tC54.679,71.025,54.308,71.363,53.565,71.363z M46.866,64.254h7.813v1.348h-7.813V64.254z M46.866,68.16v-1.348h7.813v1.348H46.866\t\t\tz M57.862,60.582h-6.348v-1.348h5.449v-1.23h-5.449v-1.309h5.957v-1.23h-5.957v-1.758h-1.582v1.758h-5.684v1.23h5.684v1.309h-5\t\t\tv1.23h5v1.348h-6.309v1.23h14.238V60.582z M43.565,57.32c-0.82-0.911-1.764-1.895-2.832-2.949l-1.172,0.996\t\t\tc0.859,0.898,1.738,1.927,2.637,3.086L43.565,57.32z M40.909,69.332c0,0.716-0.221,1.283-0.664,1.699l0.898,1.289\t\t\tc0.977-0.755,2.168-1.602,3.574-2.539c-0.052-0.481-0.098-1.048-0.137-1.699c-0.729,0.534-1.458,1.048-2.188,1.543v-9.102h-3.867\t\t\tv1.426h2.383V69.332z M46.183,95.051c-0.742,0-1.843-0.052-3.301-0.156c0.144,0.586,0.247,1.179,0.313,1.777\t\t\tc1.458,0.013,2.598,0.02,3.418,0.02c1.615-0.02,2.422-0.82,2.422-2.402v-3.594h8.77v-1.543h-8.77v-3.496h7.09v-1.543h-7.09V80.51\t\t\tc2.369-0.11,4.701-0.237,6.992-0.381l-0.254-1.602c-4.141,0.365-9.538,0.599-16.191,0.703c0.117,0.521,0.215,1.055,0.293,1.602\t\t\tc2.545-0.065,5.052-0.146,7.52-0.244v3.525h-7.441v1.543h7.441v3.496h-8.809v1.543h8.809v3.047\t\t\tC47.394,94.615,46.989,95.051,46.183,95.051z M41.651,110.418v10.469h1.406v-10.313c0.593,0.586,1.289,1.322,2.09,2.207\t\t\tl1.055-1.074c-0.573-0.573-1.36-1.315-2.363-2.227l-0.781,0.781v-3.242h2.734v-1.328h-2.734v-3.848h-1.406v3.848h-3.047v1.328\t\t\th2.92c-0.619,2.513-1.657,4.857-3.115,7.031c0.221,0.56,0.436,1.133,0.645,1.719C40.089,114.409,40.955,112.625,41.651,110.418z\t\t\t M56.612,114.422c-0.053,1.159-0.143,2.24-0.273,3.242c-0.117,0.729-0.385,1.094-0.801,1.094h-0.449\t\t\tc-0.455,0-0.684-0.326-0.684-0.977v-14.688H47.14v8.301c0,3.828-1.028,6.647-3.086,8.457c0.403,0.443,0.788,0.885,1.152,1.328\t\t\tc2.33-2.097,3.496-5.475,3.496-10.137v-6.465h4.141v13.477c0,1.484,0.625,2.227,1.875,2.227h1.035c1.119,0,1.783-0.69,1.992-2.07\t\t\tc0.117-0.82,0.234-1.875,0.352-3.164C57.563,114.852,57.067,114.644,56.612,114.422z M40.616,136.928v7.979h1.328v-1.094h7.949\t\t\tv-1.172h-3.516v-1.602h3.301v-1.133h-3.301v-1.602h3.242v-1.133h-3.242v-1.602h3.535v-1.171h-3.418l0.664-0.547\t\t\tc-0.612-0.651-1.179-1.211-1.699-1.68l-0.918,0.781c0.449,0.43,0.901,0.912,1.357,1.445h-3.613\t\t\tc0.267-0.443,0.524-0.898,0.771-1.367l-1.25-0.547c-0.898,1.927-2.064,3.62-3.496,5.078c0.313,0.352,0.612,0.717,0.898,1.094\t\t\tC39.692,138.109,40.161,137.533,40.616,136.928z M41.944,135.57h3.105v1.602h-3.105V135.57z M41.944,138.305h3.105v1.602h-3.105\t\t\tV138.305z M41.944,141.039h3.105v1.602h-3.105V141.039z M53.839,126.606l-0.859,1.016c1.002,0.768,1.973,1.582,2.91,2.441\t\t\tl0.996-1.211C56.001,128.149,54.985,127.4,53.839,126.606z M57.921,140.258c-0.416-0.117-0.879-0.293-1.387-0.527\t\t\tc-0.143,1.172-0.293,2.084-0.449,2.734c-0.117,0.495-0.313,0.742-0.586,0.742c-0.326,0-0.658-0.279-0.996-0.84\t\t\tc-0.396-0.638-0.746-1.39-1.045-2.256c1.387-1.66,2.516-3.564,3.389-5.712l-1.367-0.586c-0.639,1.745-1.469,3.294-2.49,4.648\t\t\tc-0.424-1.758-0.689-3.86-0.801-6.308h5.42v-1.289H52.13c-0.059-1.452-0.088-3.099-0.088-4.941h-1.445\t\t\tc0.045,2.174,0.088,3.822,0.127,4.941h-5.4v-1.816h3.828v-1.25h-3.828v-1.855h-1.367v1.855h-4.141v1.25h4.141v1.816h-5.293v1.289\t\t\th12.119c0.137,3.073,0.488,5.628,1.055,7.666c-0.709,0.749-1.494,1.423-2.354,2.021c0.365,0.391,0.684,0.781,0.957,1.172\t\t\tc0.67-0.521,1.303-1.08,1.895-1.68c0.254,0.645,0.533,1.218,0.84,1.719c0.689,1.25,1.504,1.875,2.441,1.875\t\t\tc0.807,0,1.367-0.527,1.68-1.582C57.517,142.563,57.726,141.534,57.921,140.258z M53.448,155.039v-1.152h-6.914\t\t\tc0.279-0.345,0.541-0.696,0.781-1.055l-1.289-0.605c-1.146,1.745-2.61,3.262-4.395,4.551c0.377,0.365,0.697,0.684,0.957,0.957\t\t\tc0.729-0.566,1.403-1.146,2.021-1.738c0.664,0.82,1.455,1.547,2.373,2.178c-1.491,0.605-3.379,1.143-5.664,1.611\t\t\tc0.26,0.404,0.482,0.82,0.664,1.25c2.637-0.684,4.752-1.383,6.348-2.1c1.596,0.664,3.549,1.26,5.859,1.787\t\t\tc0.131-0.391,0.346-0.879,0.645-1.465c-1.992-0.26-3.676-0.621-5.049-1.084C51.271,157.243,52.491,156.198,53.448,155.039z\t\t\t M48.292,157.559c-1.152-0.625-2.106-1.422-2.861-2.393c0.02-0.02,0.039-0.042,0.059-0.068h6.025\t\t\tC50.714,156.016,49.64,156.836,48.292,157.559z M43.038,164.336c3.308,0.456,6.4,1.003,9.277,1.641l0.527-1.484\t\t\tc-3.008-0.572-6.139-1.074-9.395-1.504L43.038,164.336z M45.479,160.43l-0.391,1.309c1.875,0.261,3.881,0.605,6.016,1.035\t\t\tl0.41-1.367C49.405,161.042,47.394,160.717,45.479,160.43z M56.729,168.965v-18.379H39.503v18.379h1.465v-0.938h14.297v0.938\t\t\tH56.729z M40.968,166.621v-14.629h14.297v14.629H40.968z M52.491,185.387h5.313v-1.328h-6.445v-2.637h3.281v0.742h1.484v-7.363\t\t\tH45.226v7.5h1.484v-0.879h3.223v2.637h-6.484v1.328h5.117c-1.445,2.292-3.327,4.076-5.645,5.352\t\t\tc0.43,0.43,0.794,0.827,1.094,1.191c2.37-1.484,4.342-3.646,5.918-6.484v7.637h1.426v-7.559c1.303,2.526,3.178,4.531,5.625,6.016\t\t\tc0.248-0.403,0.572-0.885,0.977-1.445C55.513,188.948,53.688,187.379,52.491,185.387z M46.71,180.113v-4.004h7.93v4.004H46.71z\t\t\t M42.14,192.984v-13.789c0.625-1.497,1.204-3.105,1.738-4.824l-1.445-0.43c-0.963,3.711-2.318,6.869-4.063,9.473\t\t\tc0.221,0.521,0.423,1.055,0.605,1.602c0.612-0.885,1.198-1.842,1.758-2.871v10.84H42.14z M52.14,208.254\t\t\tc1.576-1.067,3.027-2.129,4.355-3.184v-1.582H45.206v1.426h9.063c-1.041,0.873-2.252,1.752-3.633,2.637v1.289h-6.738v1.426h6.738\t\t\tv4.141c0,0.69-0.346,1.035-1.035,1.035c-0.6,0-1.523-0.064-2.773-0.195c0.104,0.561,0.189,1.088,0.254,1.582\t\t\tc1.186,0.039,2.129,0.059,2.832,0.059c1.484,0,2.227-0.742,2.227-2.227v-4.395h5.762v-1.426H52.14V208.254z M57.765,201.379\t\t\tv-1.445H45.88c0.222-0.599,0.433-1.211,0.635-1.836l-1.602-0.41c-0.228,0.769-0.476,1.518-0.742,2.246h-5.488v1.445h4.922\t\t\tc-1.315,3.105-3.06,5.801-5.234,8.086c0.365,0.482,0.677,0.951,0.938,1.406c0.788-0.807,1.53-1.686,2.227-2.637v8.691h1.504\t\t\tv-10.957c0.833-1.406,1.592-2.936,2.275-4.59H57.765z"/>\t</g></g></svg>'
    };
    gn || (Sn = pn.getWsiteGuid()),
    pn.loadCss(yn + "pluginGame-2.0.css"); ({
        loadStrategyDict: function() {
            if (null == ln) {
                ln = [];
                for (var t in e) switch (t) {
                case "gameGuid":
                    ln[t] = e[t];
                    break;
                default:
                    ln[t] = function(t) {
                        if (null == t || !t.hasOwnProperty("data")) return null;
                        for (var e = [], n = t.data, i = 0; i < n.length; i++) {
                            var a = n[i];
                            e[a.key] = a.value
                        }
                        return e
                    } (e[t])
                }
            }
        },
        loadThemesDict: function() {
            null == hn && (hn = pn.parsePluginTheme(n, kn, !0), rn.themeDict = hn)
        },
        loadDict: function() {
            this.loadStrategyDict(),
            this.loadThemesDict()
        }
    }).loadDict(),
    rn.getThemeDict = function() {
        return hn
    },
    rn.initpluginCopyright = function(t) {
        t && (Bn = t)
    },
    rn.initData = function(t) {
        gn ? t && t() : c(function(e) {
            t && t()
        })
    },
    rn.showCopyright = S;
    var Qn = {
        score: 0,
        grabKey: "",
        guid: "",
        connectGuid: "",
        friendGuid: "",
        data: null,
        selfData: null,
        helpGrabKey: "",
        isRefresh: !1
    },
    Zn = {
        storage: window.localStorage,
        getMd5Key: function(t) {
            return hex_md5(window.location.host + t)
        },
        set: function(t, e) {
            try {
                this.storage && this.storage.setItem(hex_md5(t), e)
            } catch(t) {
                this.clear()
            }
        },
        get: function(t) {
            if (this.storage) {
                var e = this.storage.getItem(hex_md5(t));
                return void 0 === e || null === e ? this.storage.getItem(this.getMd5Key(t)) : e
            }
            return null
        },
        clear: function() {
            this.storage && this.storage.clear()
        },
        remove: function(t) {
            this.storage && this.storage.removeItem(this.getMd5Key(t))
        },
        isHave: function(t) {
            if (this.storage) {
                for (var e = 0; e < this.storage.length; e++) if (this.storage.key(e) === this.getMd5Key(t)) return ! 0;
                return ! 1
            }
            return ! 1
        }
    },
    ti = {
        set: function(t, e) {
            Cool.cookie.setWithoutTime(hex_md5(t), e, 100)
        },
        get: function(t) {
            var e = Cool.cookie.get(hex_md5(t));
            if (void 0 !== e && null !== e) return e;
            Zn.get(t)
        }
    },
    ei = {
        _sys: {},
        checkGameGuid: function() {
            return !! dn
        },
        getKey: function(t) {
            return ti.get(t)
        },
        setKey: function(t, e) {
            ti.set(t, e)
        },
        getSecret: function() {
            if (!Vt()) {
                var t = pn.weixinStrong.getAuthedInfo();
                if ("" !== t.id) return t.id;
                var e = "gameKey" + dn,
                n = this.getKey(e);
                return "" !== n ? n: ""
            }
        },
        getBaseData: function() {
            return {
                wsiteGuid: Sn,
                gameGuid: dn,
                fg: Wn,
                begin: Rn || ""
            }
        },
        getWxInfo: function() {
            var t = pn.weixinStrong.getAuthedInfo();
            return console.log(111, t),
            t
        },
        setSecret: function(t) {
            var e = "gameKey" + dn;
            this.setKey(e, t)
        },
        getToday: function() {
            var t = new Date;
            return t.getFullYear() + "" + (t.getMonth() + 1) + t.getDate()
        },
        timeFormat: function(t, e) {
            var n = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var i in n) new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
            return e
        },
        getTimeStr: function() {
            var t = new Date;
            return this.timeFormat(t, "yyyy-MM-dd hh:mm:ss")
        },
        checkDataIsNotEmpty: function(t) {
            return !! t && ("string" == typeof t || Array.isArray(t) ? t.length > 0 : Object.getOwnPropertyNames(t).length > 0)
        },
        formatLevalTime: function(t) {
            var e = new Date(t.replace(/-/g, "/")),
            n = (new Date).getTime() - e.getTime(),
            i = Math.floor(n / 864e5),
            a = n % 864e5,
            s = Math.floor(a / 36e5),
            o = a % 36e5,
            c = Math.floor(o / 6e4),
            r = o % 6e4;
            Math.round(r / 1e3);
            return 0 != i ? i > 3 ? this.timeFormat(e, "MM-dd hh:mm") : i + "天之前": 0 == i && 0 != s ? s + "小时之前": 0 == i && 0 == s ? c + "分钟之前": "现在"
        },
        canTriggertEvent: function() {
            if (null == this._sys.clickTime) this._sys.clickTime = (new Date).getTime();
            else {
                var t = (new Date).getTime();
                if (t - this._sys.clickTime < 500) return ! 1;
                this._sys.clickTime = t
            }
            return ! 0
        },
        getGrabKey: function() {
            if (!Vt()) {
                var t = dn + this.getToday();
                return parseInt(this.getKey(t) || 0)
            }
        },
        setGrabKey: function(t) {
            var e = dn + this.getToday(),
            n = this.getGrabKey() || 0;
            "0" == t ? "0" == n || --n: ++n,
            this.setKey(e, n)
        },
        getUserGrabKey: function() {
            var t = Qn.grabKey;
            return Pn = !1,
            Qn.grabKey = "",
            t
        },
        checkUserGrabKey: function() {
            return "" != Qn.grabKey
        },
        setUserGrabKey: function(t) {
            Qn.grabKey = t,
            ei.clearNoRefresh()
        },
        getUserHelpGrabKey: function() {
            var t = Qn.helpGrabKey;
            return Pn = !0,
            Qn.helpGrabKey = "",
            t
        },
        checkUserHelpGrabKey: function() {
            return "" != Qn.helpGrabKey
        },
        setUserHelpGrabKey: function(t) {
            Qn.helpGrabKey = t || ""
        },
        checkUserScore: function(t) {
            var e = !1;
            return Qn.score && Qn.score >= t && (e = !0),
            e
        },
        setUserScore: function(t) {
            Qn.score = ei.getNumber(t)
        },
        getGameCanPlay: function() {
            return Ln
        },
        setGameCanPlay: function(t, e) {
            void 0 != t && 0 == (Ln = t) && (rn.pluginGame.code = 401, rn.pluginGame.msg = e)
        },
        checkGameError: function(t) {
            return !! t && (401 == t ? !this.checkDayTimeEnable() : 0 != t)
        },
        setDayTimesEnable: function() {
            this._sys.grabDayTimeEnable = !0
        },
        checkDayTimeEnable: function() {
            var t = this._sys.grabDayTimeEnable || !1;
            return this._sys.grabDayTimeEnable = !1,
            t
        },
        getWinKey: function() {
            if (!Vt()) {
                if (void 0 != Vn) return ! Vn;
                var t = dn + "winPrize";
                return 0 | this.getKey(t)
            }
        },
        setWinKey: function(t) {},
        checkPhone: function(t) {
            return !! /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)
        },
        replaceParams: function() {
            for (var t = arguments,
            e = t[0], n = 1; n < t.length; n += 2) e = e.replace(t[n], t[n + 1]);
            return e
        },
        navigator: function(t) {
            t && pn.urlAuditVisit(t)
        },
        getDefaultPrizeIcon: function() {
            return bn + "2016/07/20/1468986497159.png"
        },
        setUserGuid: function(t, e) {
            var n = "localGuid" + dn;
            if (t || e) return Qn.guid = t,
            void this.setKey(n, Qn.guid);
            Qn.guid = this.getKey(n)
        },
        getUserGuid: function() {
            return Qn.guid
        },
        setUserData: function(t) {
            Qn.data = t
        },
        setSelfData: function(t) {
            Qn.selfData = t
        },
        setUserHelpData: function(t) {
            Qn.data && t && (t.isSelf = ei.checkIsSelf(), Qn.data.helperData = t),
            this.clearActionNoRefresh()
        },
        setValidHelpeData: function(t) {
            this.checkIsSelf() ? this.setUserHelpData(t) : Qn.selfData && Qn.selfData.helperData && (Qn.selfData.helperData = t)
        },
        setPlaySession: function(t) {
            this._sys.playSession = t
        },
        getPlaySession: function() {
            return this._sys.playSession || ""
        },
        setUserTopData: function(t) {
            Qn.data && t && (Qn.data.topData = t)
        },
        getUserTopData: function() {
            var t = {
                nickName: "",
                headImgurl: ""
            };
            if (Qn.data && Qn.data.topData) t.nickName = Qn.data.topData.nickName,
            t.headImgurl = Qn.data.topData.headImgurl;
            else {
                var e = this.getWxInfo();
                t.headImgurl = e.headimgurl,
                t.nickName = e.nickname
            }
            return t.headImgurl && (t.headImgurl = this.getThumbImage(t.headImgurl)),
            t
        },
        setUserFriendGuidGuid: function(t) {
            Qn.friendGuid = t
        },
        setUserConnectGuid: function(t) {
            Qn.connectGuid = t
        },
        setShareInfo: function(t, e) {
            var n = "",
            i = "";
            t && (shareScore = ei.getNumber(t), !h("basic", "isCustomShare") && 1 || (n = h("basic", "shareTitle")), n && (i = this.getWxInfo().headimgurl, (n = this.replaceParams(n, "#分数#", shareScore)).indexOf("#进度#") > -1 && (shareScore = this.getPersent(), n = this.replaceParams(n, "#进度#", shareScore))));
            var a = location.href,
            s = Qn.guid;
            e ? s = e: (F() || j()) && (s = Qn.connectGuid || Qn.guid),
            s && (a = this.setUrlParameter(Un, s)),
            a && (a = Cool.util.removeUrlPara(a, "uid")),
            pn.updateShareInfo(n, null, i, a)
        },
        setUrlParameter: function(t, e) {
            var n = location.href,
            i = encodeURIComponent(e);
            if ( - 1 != n.indexOf("?")) {
                n.indexOf(t) > -1 && (n = Cool.util.removeUrlPara(n, t));
                n += (n.indexOf("?") > -1 ? "&": "?") + t + "=" + i
            } else n += "?" + t + "=" + i;
            return n
        },
        checkIsSelf: function() {
            return ! Qn.connectGuid || Qn.connectGuid == Qn.guid
        },
        getFather: function() {
            return this.checkIsSelf() ? Qn.guid: Qn.connectGuid
        },
        getNumber: function(t) {
            return parseFloat(t)
        },
        getEnKey: function() {
            return pn.getGlobal("gu_rrx")
        },
        getPersentNumber: function(t) {
            return t > 100 ? "100%": t + "%"
        },
        getHelperData: function() {
            return Qn.data && Qn.data.helperData ? Qn.data.helperData: {}
        },
        getSelfHelperData: function() {
            return Qn.selfData && Qn.selfData.helperData ? Qn.selfData.helperData: {}
        },
        getValidGrowData: function() {
            return this.checkIsSelf() ? this.getHelperData() : this.getSelfHelperData()
        },
        getHelperCount: function() {
            return 0 | this.getHelperData().helperCount
        },
        getHelperLessCount: function() {
            return this.getHelperData().limitHelper || 1
        },
        checkHelperNewState: function() {
            var t = this.getHelperData();
            return t.isNewState && "0" != t.leftSendCount
        },
        checkGrowerNewState: function() {
            return this.getHelperData().isNewState
        },
        getGrowerCount: function() {
            return 0 | this.getHelperData().growCount
        },
        getPersent: function() {
            return Math.round(this.getHelperCount() / this.getHelperLessCount() * 100) + "%"
        },
        getThumbImage: function(t, e) {
            if (t) {
                var n = t.length - 1;
                if ("/0" == t.substr( - 2)) return e || (e = "132"),
                t.substr(0, n) + e
            }
            return t
        },
        getBasicColor: function() {
            var t = f("stylePage");
            return t ? t.styleColor: "#5595e0"
        },
        getThinColor: function() {
            Ee();
            return vi.cssObj.basicColorChang
        },
        getTheme: function(t) {
            var e = rn.getThemeDict();
            return e && e.dict[t] ? e.dict[t] : {}
        },
        getThemeGroup: function(t, e) {
            e = e || "skinPage";
            var n = this.getTheme(e);
            return n && n[t] ? n[t] : null
        },
        getBtnStyle: function(t, e) {
            var n = this.getThemeGroup(t, e);
            return n ? {
                "background-image": "url(" + n + ")"
            }: {}
        },
        getBtnColor: function() {
            var t = this.getThemeGroup("btn_pubs");
            return t ? {
                "background-color": t.bgColor,
                color: t.color
            }: {}
        },
        getAdText: function(t, e) {
            e = e || "ad_text";
            var n = this.getTheme("adPage");
            if (n && n[e] && n[e][t]) {
                var i = n[e][t],
                a = "";
                return i && i.value ? (i.hasOwnProperty("color") && i.color && (a = 'style="color:' + i.color + '"'), "<span " + a + ">" + i.value + "</span>") : ""
            }
            return ""
        },
        checkNoRefresh: function(t) {
            return void 0 != rn.noRefresh[t] && rn.noRefresh[t]
        },
        setNoRefresh: function(t) {
            rn.noRefresh[t] = !0
        },
        clearNoRefresh: function() {
            for (key in rn.noRefresh) key != rn.cacheKeys.fTopData && (rn.noRefresh[key] = !1)
        },
        clearHelperNoRefresh: function() {
            rn.noRefresh[rn.cacheKeys.fTopData] = !1
        },
        clearActionNoRefresh: function() {
            rn.noRefresh[rn.cacheKeys.aTopData] = !1
        },
        checkIsPersentTops: function() {
            return "2" == rn.dataEvent.getTopsStyle()
        },
        setGud: function(t) {
            pn.setGlobal("gu_rrx", t)
        },
        checkPanelRefresh: function() {
            var t = Qn.isRefresh;
            return Qn.isRefresh = !1,
            t
        },
        checkDanmu: function() {
            return ! 1
        },
        openDanmu: function() {
            console.log("open d m")
        },
        getStoreUnit: function() {
            return oi.unit ? oi.unit: (oi.unit = this.getHelperData().goldName || "金币", oi.unit)
        },
        getGoodsImage: function(t) {
            var e = "icon_goods" + (t + 1) + "_png";
            return this.getThemeGroup(e)
        },
        getOperateImage: function(t) {
            var e = "icon_operate" + (t + 1) + "_png";
            return this.getThemeGroup(e)
        },
        getGoodsName: function(t) {
            var e = h("groupsStrategy", "goods");
            if (e && e.list) {
                var n = e.list;
                if (n[t]) return n[t].settings[0].value
            }
            return ""
        },
        getActionImage: function(t) {
            var e = "task_operate" + (t + 1) + "_png";
            return this.getThemeGroup(e)
        },
        getThemeImage: function(t, e) {
            if (1 == t) {
                if ( - 1 == e) {
                    return this.getThemeGroup("task_gold_png")
                }
                return this.getGoodsImage(e)
            }
            return this.getActionImage(e)
        },
        getTaskImage: function(t, e, n) {
            var i = "task_sys_png";
            switch (0 | t) {
            case 1:
            case 3:
                return this.getActionImage(e);
            case 13:
            case 9:
                if (e >= 0) return this.getActionImage(e);
                if (n >= 0) return this.getGoodsImage(n);
            case 2:
                i = "task_share_png";
                break;
            case 5:
            case 6:
                i = "task_sign_png";
                break;
            case 7:
                i = "task_gold_png";
                break;
            case 10:
                i = "task_get_png";
                break;
            case 11:
                i = "task_grow_png";
                break;
            case 12:
                i = "task_invite_png";
                break;
            default:
                i = "task_sys_png"
            }
            return this.getThemeGroup(i)
        },
        getTaskOpName: function(t, e, n) {
            var i = "去完成";
            if (e && n) return "已完成";
            if (e) return "领取";
            switch (t) {
            case "2":
                i = "分享";
                break;
            case "5":
            case "6":
                i = "签到";
                break;
            case "12":
                i = "邀请";
                break;
            default:
                i = "去完成"
            }
            return i
        },
        getTaskDescFormat: function(t) {
            var e = "";
            if (t) for (var n = 0; n < t.length; n++) {
                var i = t[n];
                e += "<span class='award-item'><img class='award-image' src='" + ei.getThemeImage(i.type, i.index) + "'>x" + i.count + "</span>"
            }
            return e
        },
        getStoreAcount: function() {
            var t = this.getValidGrowData();
            return {
                hasAcount: t.hasAcount,
                name: t.goldName,
                acount: t.goldAcount,
                growAcounts: t.acounts
            }
        },
        getStoreGrabGlod: function() {
            return h("prizeStrategy", "limitScore")
        },
        checkExchangePrizeEnable: function() {
            return R()
        },
        getStoreExChangeList: function(t) {
            rn.prizeData && rn.prizeData.groupsPrize ? t && t(rn.prizeData.groupsPrize) : (C("正在加载"), Le(function(e) {
                G();
                var n = null;
                0 == e.result ? (n = e.data, rn.prizeData = n, t && t(rn.prizeData.groupsPrize)) : (rn.prizeData = {},
                t && t(null))
            }))
        },
        checkGrabPrizeEnable: function() {
            return U()
        },
        getStoreGrabList: function(t) {
            rn.prizeData && rn.prizeData.grabPrize ? t && t(rn.prizeData.grabPrize) : (C("正在加载"), Le(function(e) {
                G();
                var n = null;
                0 == e.result ? (n = e.data, rn.prizeData = n, t && t(rn.prizeData.grabPrize)) : (rn.prizeData = {},
                t && t(null))
            }))
        },
        getStoreBuyList: function() {
            function t(t, e, n, i, s, o, c) {
                var r = {
                    index: t,
                    imageUrl: n,
                    name: i,
                    gold: s,
                    unit: o,
                    type: c,
                    guid: e
                };
                a.push(r)
            }
            if (oi.buyList) return oi.buyList;
            var e = this.getValidGrowData(),
            n = e.seeds || [],
            i = e.actions || [],
            a = [],
            s = h("groupsStrategy", "action"),
            o = 0;
            if (s && s.list) for (f = 0; f < s.list.length; f++) {
                var c = s.list[f],
                r = ei.getActionImage(o),
                l = i[o],
                d = "";
                c.settings[2].unit && (d = "/" + c.settings[2].unit);
                var u = ei.getStoreUnit() + d;
                t(o, l.guid, r, l.name, l.outGold, u, 2),
                o++
            }
            var p = h("groupsStrategy", "goods"),
            g = 0;
            if (p && p.list) for (var f = 0; f < p.list.length; f++) {
                var v = p.list[f];
                if (!v.base.isHide && (!v.base.noBuy && 1 == v.base.goodsType)) {
                    var m = ei.getGoodsImage(g),
                    b = n[g],
                    d = "";
                    v.settings[2].unit && (d = "/" + v.settings[2].unit);
                    var y = ei.getStoreUnit() + d;
                    t(g, b.guid, m, b.name, b.outGold, y, 1),
                    g++
                }
            }
            return oi.buyList = a,
            oi.buyList
        },
        getGrowSeedList: function() {
            return this.getValidGrowData().seeds
        },
        getGrowActionList: function() {
            var t = this.getValidGrowData().actions;
            return t && 0 != t.length || (t = this.getLocalActionList()),
            t
        },
        getLocalActionList: function() {
            var t = h("groupsStrategy", "action"),
            e = [];
            if (t && t.list) for (var n = 0; n < t.list.length; n++) e.push({
                actonIndex: n,
                acount: 0,
                guid: ""
            });
            return e
        },
        getGrowTaskList: function() {
            return this.getValidGrowData().sysTasks || []
        },
        getGrowSessionTaskList: function() {
            var t = this.getHelperData().sessionTasks;
            return console.log("sessiontasks:", t),
            t || []
        },
        noteGameHandle: function(t, e) {
            window.platform && window.platform.rrxGameHandleEvent(t, e)
        },
        checkPresetCanAfter: function() {
            return h("basic", "afterPreset")
        }
    };
    rn.initWxAuth = v,
    rn.load = function() {
        gn || (An ? rn.wxEnable ? m() : pn.weixinStrong.auth(function(t) {
            rn.wxEnable = !0,
            m()
        }) : m())
    };
    var ni, ii, ai, si = 0,
    oi = {
        hasShareEvent: !1,
        shareData: {
            success: !1,
            guid: ""
        },
        curMenu: "",
        unit: "",
        menus: {
            grab: "grab",
            exchange: "exchange",
            buy: "buy"
        },
        setDelay: 1200,
        selfGrowData: {}
    },
    ci = "",
    ri = "",
    li = [],
    di = [],
    ui = [],
    pi = "",
    gi = 0;
    window.fnShowInfoPage = me;
    var fi = be,
    hi = {
        toastId: null,
        eventId: null,
        hasToast: !1,
        delayTime: 1500,
        delayEventTime: 1e3,
        showToast: function(t, e, n) {
            this.hasToast && (this.clear(), xe()),
            this.hasToast = !0,
            function(t, e) {
                if (t) {
                    var n = we();
                    if (n) {
                        n.find(".toast-info-inner").html(t);
                        var i = ei.getThemeGroup("tipTag_png") || "#";
                        e && (i = e);
                        var a = n.find(".toast-title-img");
                        a && a.length > 0 && a.attr("src", i),
                        n.find(".toast-content").removeClass("toast-hide").addClass("toast-content-hide toast-show"),
                        n.show()
                    }
                }
            } (t, e);
            var i = this;
            this.toastId = setTimeout(function() {
                var t = xe();
                i.eventId = setTimeout(function() {
                    i.clear(),
                    i.hasToast = !1,
                    t && t.hide(),
                    n && n()
                },
                i.delayEventTime)
            },
            this.delayTime)
        },
        clear: function() {
            this.toastId && (clearTimeout(this.toastId), this.toastId = null),
            this.eventId && (clearTimeout(this.eventId), this.eventId = null)
        }
    },
    vi = {
        currentName: "",
        isOnly: !1,
        pageNames: {
            basicPage: "basicPage",
            topsPage: "topsPage",
            friendsPage: "friendsPage",
            helpersPage: "helpersPage",
            focusPage: "focusPage",
            actionsPage: "actionsPage",
            storePage: "storePage",
            tasksPage: "tasksPage",
            seedPage: "seedPage"
        },
        curExtendName: "",
        tags: [],
        pages: null,
        names: null
    };
    rn.pageEvent = new _e,
    rn.incentivesEvent = new He,
    rn.friendsPkEvent = new Ne;
    var mi = {
        processId: null,
        isShow: !1,
        dealyTime: 1500,
        showProcess: function(t) {
            if (t) this.clearProcess(this.processId);
            else {
                var e = this;
                this.clearProcess(),
                this.processId = setTimeout(function() {
                    C(),
                    e.isShow = !0
                },
                this.dealyTime)
            }
        },
        clearProcess: function() {
            this.isShow && (G(), this.isShow = !1),
            this.processId && (clearTimeout(this.processId), this.processId = null, this.isShow = !1)
        }
    };
    return rn.dataEvent = new tn,
    rn.strategyEvent = new en,
    rn.groupsStartegyEvent = new nn,
    rn
}
console.log("loadScript");
var CryptoJS = CryptoJS ||
function(t, e) {
    var n = {},
    i = n.lib = {},
    a = function() {},
    s = i.Base = {
        extend: function(t) {
            a.prototype = this;
            var e = new a;
            return t && e.mixIn(t),
            e.hasOwnProperty("init") || (e.init = function() {
                e.$super.init.apply(this, arguments)
            }),
            e.init.prototype = e,
            e.$super = this,
            e
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments),
            t
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    },
    o = i.WordArray = s.extend({
        init: function(t, e) {
            t = this.words = t || [],
            this.sigBytes = void 0 != e ? e: 4 * t.length
        },
        toString: function(t) {
            return (t || r).stringify(this)
        },
        concat: function(t) {
            var e = this.words,
            n = t.words,
            i = this.sigBytes;
            if (t = t.sigBytes, this.clamp(), i % 4) for (var a = 0; a < t; a++) e[i + a >>> 2] |= (n[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 24 - (i + a) % 4 * 8;
            else if (65535 < n.length) for (a = 0; a < t; a += 4) e[i + a >>> 2] = n[a >>> 2];
            else e.push.apply(e, n);
            return this.sigBytes += t,
            this
        },
        clamp: function() {
            var e = this.words,
            n = this.sigBytes;
            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
            e.length = t.ceil(n / 4)
        },
        clone: function() {
            var t = s.clone.call(this);
            return t.words = this.words.slice(0),
            t
        },
        random: function(e) {
            for (var n = [], i = 0; i < e; i += 4) n.push(4294967296 * t.random() | 0);
            return new o.init(n, e)
        }
    }),
    c = n.enc = {},
    r = c.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; i < t; i++) {
                var a = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                n.push((a >>> 4).toString(16)),
                n.push((15 & a).toString(16))
            }
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length,
            n = [], i = 0; i < e; i += 2) n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
            return new o.init(n, e / 2)
        }
    },
    l = c.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; i < t; i++) n.push(String.fromCharCode(e[i >>> 2] >>> 24 - i % 4 * 8 & 255));
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length,
            n = [], i = 0; i < e; i++) n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
            return new o.init(n, e)
        }
    },
    d = c.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(l.stringify(t)))
            } catch(t) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(t) {
            return l.parse(unescape(encodeURIComponent(t)))
        }
    },
    u = i.BufferedBlockAlgorithm = s.extend({
        reset: function() {
            this._data = new o.init,
            this._nDataBytes = 0
        },
        _append: function(t) {
            "string" == typeof t && (t = d.parse(t)),
            this._data.concat(t),
            this._nDataBytes += t.sigBytes
        },
        _process: function(e) {
            var n = this._data,
            i = n.words,
            a = n.sigBytes,
            s = this.blockSize,
            c = a / (4 * s);
            if (e = (c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * s, a = t.min(4 * e, a), e) {
                for (var r = 0; r < e; r += s) this._doProcessBlock(i, r);
                r = i.splice(0, e),
                n.sigBytes -= a
            }
            return new o.init(r, a)
        },
        clone: function() {
            var t = s.clone.call(this);
            return t._data = this._data.clone(),
            t
        },
        _minBufferSize: 0
    });
    i.Hasher = u.extend({
        cfg: s.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t),
            this.reset()
        },
        reset: function() {
            u.reset.call(this),
            this._doReset()
        },
        update: function(t) {
            return this._append(t),
            this._process(),
            this
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, n) {
                return new t.init(n).finalize(e)
            }
        },
        _createHmacHelper: function(t) {
            return function(e, n) {
                return new p.HMAC.init(t, n).finalize(e)
            }
        }
    });
    var p = n.algo = {};
    return n
} (Math); !
function() {
    var t = CryptoJS,
    e = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function(t) {
            var e = t.words,
            n = t.sigBytes,
            i = this._map;
            t.clamp(),
            t = [];
            for (var a = 0; a < n; a += 3) for (var s = (e[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, o = 0; 4 > o && a + .75 * o < n; o++) t.push(i.charAt(s >>> 6 * (3 - o) & 63));
            if (e = i.charAt(64)) for (; t.length % 4;) t.push(e);
            return t.join("")
        },
        parse: function(t) {
            var n = t.length,
            i = this._map; (a = i.charAt(64)) && -1 != (a = t.indexOf(a)) && (n = a);
            for (var a = [], s = 0, o = 0; o < n; o++) if (o % 4) {
                var c = i.indexOf(t.charAt(o - 1)) << o % 4 * 2,
                r = i.indexOf(t.charAt(o)) >>> 6 - o % 4 * 2;
                a[s >>> 2] |= (c | r) << 24 - s % 4 * 8,
                s++
            }
            return e.create(a, s)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
} (),
function(t) {
    function e(t, e, n, i, a, s, o) {
        return ((t = t + (e & n | ~e & i) + a + o) << s | t >>> 32 - s) + e
    }
    function n(t, e, n, i, a, s, o) {
        return ((t = t + (e & i | n & ~i) + a + o) << s | t >>> 32 - s) + e
    }
    function i(t, e, n, i, a, s, o) {
        return ((t = t + (e ^ n ^ i) + a + o) << s | t >>> 32 - s) + e
    }
    function a(t, e, n, i, a, s, o) {
        return ((t = t + (n ^ (e | ~i)) + a + o) << s | t >>> 32 - s) + e
    }
    for (var s = CryptoJS,
    o = (r = s.lib).WordArray, c = r.Hasher, r = s.algo, l = [], d = 0; 64 > d; d++) l[d] = 4294967296 * t.abs(t.sin(d + 1)) | 0;
    r = r.MD5 = c.extend({
        _doReset: function() {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(t, s) {
            for (o = 0; 16 > o; o++) {
                r = t[c = s + o];
                t[c] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
            }
            var o = this._hash.words,
            c = t[s + 0],
            r = t[s + 1],
            d = t[s + 2],
            u = t[s + 3],
            p = t[s + 4],
            g = t[s + 5],
            f = t[s + 6],
            h = t[s + 7],
            v = t[s + 8],
            m = t[s + 9],
            b = t[s + 10],
            y = t[s + 11],
            w = t[s + 12],
            x = t[s + 13],
            S = t[s + 14],
            k = t[s + 15],
            C = o[0],
            G = o[1],
            z = o[2],
            D = o[3],
            G = a(G = a(G = a(G = a(G = i(G = i(G = i(G = i(G = n(G = n(G = n(G = n(G = e(G = e(G = e(G = e(G, z = e(z, D = e(D, C = e(C, G, z, D, c, 7, l[0]), G, z, r, 12, l[1]), C, G, d, 17, l[2]), D, C, u, 22, l[3]), z = e(z, D = e(D, C = e(C, G, z, D, p, 7, l[4]), G, z, g, 12, l[5]), C, G, f, 17, l[6]), D, C, h, 22, l[7]), z = e(z, D = e(D, C = e(C, G, z, D, v, 7, l[8]), G, z, m, 12, l[9]), C, G, b, 17, l[10]), D, C, y, 22, l[11]), z = e(z, D = e(D, C = e(C, G, z, D, w, 7, l[12]), G, z, x, 12, l[13]), C, G, S, 17, l[14]), D, C, k, 22, l[15]), z = n(z, D = n(D, C = n(C, G, z, D, r, 5, l[16]), G, z, f, 9, l[17]), C, G, y, 14, l[18]), D, C, c, 20, l[19]), z = n(z, D = n(D, C = n(C, G, z, D, g, 5, l[20]), G, z, b, 9, l[21]), C, G, k, 14, l[22]), D, C, p, 20, l[23]), z = n(z, D = n(D, C = n(C, G, z, D, m, 5, l[24]), G, z, S, 9, l[25]), C, G, u, 14, l[26]), D, C, v, 20, l[27]), z = n(z, D = n(D, C = n(C, G, z, D, x, 5, l[28]), G, z, d, 9, l[29]), C, G, h, 14, l[30]), D, C, w, 20, l[31]), z = i(z, D = i(D, C = i(C, G, z, D, g, 4, l[32]), G, z, v, 11, l[33]), C, G, y, 16, l[34]), D, C, S, 23, l[35]), z = i(z, D = i(D, C = i(C, G, z, D, r, 4, l[36]), G, z, p, 11, l[37]), C, G, h, 16, l[38]), D, C, b, 23, l[39]), z = i(z, D = i(D, C = i(C, G, z, D, x, 4, l[40]), G, z, c, 11, l[41]), C, G, u, 16, l[42]), D, C, f, 23, l[43]), z = i(z, D = i(D, C = i(C, G, z, D, m, 4, l[44]), G, z, w, 11, l[45]), C, G, k, 16, l[46]), D, C, d, 23, l[47]), z = a(z, D = a(D, C = a(C, G, z, D, c, 6, l[48]), G, z, h, 10, l[49]), C, G, S, 15, l[50]), D, C, g, 21, l[51]), z = a(z, D = a(D, C = a(C, G, z, D, w, 6, l[52]), G, z, u, 10, l[53]), C, G, b, 15, l[54]), D, C, r, 21, l[55]), z = a(z, D = a(D, C = a(C, G, z, D, v, 6, l[56]), G, z, k, 10, l[57]), C, G, f, 15, l[58]), D, C, x, 21, l[59]), z = a(z, D = a(D, C = a(C, G, z, D, p, 6, l[60]), G, z, y, 10, l[61]), C, G, d, 15, l[62]), D, C, m, 21, l[63]);
            o[0] = o[0] + C | 0,
            o[1] = o[1] + G | 0,
            o[2] = o[2] + z | 0,
            o[3] = o[3] + D | 0
        },
        _doFinalize: function() {
            var e = this._data,
            n = e.words,
            i = 8 * this._nDataBytes,
            a = 8 * e.sigBytes;
            n[a >>> 5] |= 128 << 24 - a % 32;
            var s = t.floor(i / 4294967296);
            for (n[15 + (a + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (a + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), e.sigBytes = 4 * (n.length + 1), this._process(), n = (e = this._hash).words, i = 0; 4 > i; i++) a = n[i],
            n[i] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
            return e
        },
        clone: function() {
            var t = c.clone.call(this);
            return t._hash = this._hash.clone(),
            t
        }
    }),
    s.MD5 = c._createHelper(r),
    s.HmacMD5 = c._createHmacHelper(r)
} (Math),
function() {
    var t = CryptoJS,
    e = t.lib,
    n = e.Base,
    i = e.WordArray,
    a = (e = t.algo).EvpKDF = n.extend({
        cfg: n.extend({
            keySize: 4,
            hasher: e.MD5,
            iterations: 1
        }),
        init: function(t) {
            this.cfg = this.cfg.extend(t)
        },
        compute: function(t, e) {
            for (var n = (c = this.cfg).hasher.create(), a = i.create(), s = a.words, o = c.keySize, c = c.iterations; s.length < o;) {
                r && n.update(r);
                var r = n.update(t).finalize(e);
                n.reset();
                for (var l = 1; l < c; l++) r = n.finalize(r),
                n.reset();
                a.concat(r)
            }
            return a.sigBytes = 4 * o,
            a
        }
    });
    t.EvpKDF = function(t, e, n) {
        return a.create(n).compute(t, e)
    }
} (),
CryptoJS.lib.Cipher ||
function(t) {
    var e = (g = CryptoJS).lib,
    n = e.Base,
    i = e.WordArray,
    a = e.BufferedBlockAlgorithm,
    s = g.enc.Base64,
    o = g.algo.EvpKDF,
    c = e.Cipher = a.extend({
        cfg: n.extend(),
        createEncryptor: function(t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e)
        },
        createDecryptor: function(t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e)
        },
        init: function(t, e, n) {
            this.cfg = this.cfg.extend(n),
            this._xformMode = t,
            this._key = e,
            this.reset()
        },
        reset: function() {
            a.reset.call(this),
            this._doReset()
        },
        process: function(t) {
            return this._append(t),
            this._process()
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(t) {
            return {
                encrypt: function(e, n, i) {
                    return ("string" == typeof n ? f: p).encrypt(t, e, n, i)
                },
                decrypt: function(e, n, i) {
                    return ("string" == typeof n ? f: p).decrypt(t, e, n, i)
                }
            }
        }
    });
    e.StreamCipher = c.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var r = g.mode = {},
    l = function(t, e, n) {
        var i = this._iv;
        i ? this._iv = void 0 : i = this._prevBlock;
        for (var a = 0; a < n; a++) t[e + a] ^= i[a]
    },
    d = (e.BlockCipherMode = n.extend({
        createEncryptor: function(t, e) {
            return this.Encryptor.create(t, e)
        },
        createDecryptor: function(t, e) {
            return this.Decryptor.create(t, e)
        },
        init: function(t, e) {
            this._cipher = t,
            this._iv = e
        }
    })).extend();
    d.Encryptor = d.extend({
        processBlock: function(t, e) {
            var n = this._cipher,
            i = n.blockSize;
            l.call(this, t, e, i),
            n.encryptBlock(t, e),
            this._prevBlock = t.slice(e, e + i)
        }
    }),
    d.Decryptor = d.extend({
        processBlock: function(t, e) {
            var n = this._cipher,
            i = n.blockSize,
            a = t.slice(e, e + i);
            n.decryptBlock(t, e),
            l.call(this, t, e, i),
            this._prevBlock = a
        }
    }),
    r = r.CBC = d,
    d = (g.pad = {}).Pkcs7 = {
        pad: function(t, e) {
            for (var n = 4 * e,
            a = (n = n - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, s = [], o = 0; o < n; o += 4) s.push(a);
            n = i.create(s, n),
            t.concat(n)
        },
        unpad: function(t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
        }
    },
    e.BlockCipher = c.extend({
        cfg: c.cfg.extend({
            mode: r,
            padding: d
        }),
        reset: function() {
            c.reset.call(this);
            var t = (e = this.cfg).iv,
            e = e.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var n = e.createEncryptor;
            else n = e.createDecryptor,
            this._minBufferSize = 1;
            this._mode = n.call(e, this, t && t.words)
        },
        _doProcessBlock: function(t, e) {
            this._mode.processBlock(t, e)
        },
        _doFinalize: function() {
            var t = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                t.pad(this._data, this.blockSize);
                var e = this._process(!0)
            } else e = this._process(!0),
            t.unpad(e);
            return e
        },
        blockSize: 4
    });
    var u = e.CipherParams = n.extend({
        init: function(t) {
            this.mixIn(t)
        },
        toString: function(t) {
            return (t || this.formatter).stringify(this)
        }
    }),
    r = (g.format = {}).OpenSSL = {
        stringify: function(t) {
            var e = t.ciphertext;
            return ((t = t.salt) ? i.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(s)
        },
        parse: function(t) {
            var e = (t = s.parse(t)).words;
            if (1398893684 == e[0] && 1701076831 == e[1]) {
                var n = i.create(e.slice(2, 4));
                e.splice(0, 4),
                t.sigBytes -= 16
            }
            return u.create({
                ciphertext: t,
                salt: n
            })
        }
    },
    p = e.SerializableCipher = n.extend({
        cfg: n.extend({
            format: r
        }),
        encrypt: function(t, e, n, i) {
            i = this.cfg.extend(i);
            var a = t.createEncryptor(n, i);
            return e = a.finalize(e),
            a = a.cfg,
            u.create({
                ciphertext: e,
                key: n,
                iv: a.iv,
                algorithm: t,
                mode: a.mode,
                padding: a.padding,
                blockSize: t.blockSize,
                formatter: i.format
            })
        },
        decrypt: function(t, e, n, i) {
            return i = this.cfg.extend(i),
            e = this._parse(e, i.format),
            t.createDecryptor(n, i).finalize(e.ciphertext)
        },
        _parse: function(t, e) {
            return "string" == typeof t ? e.parse(t, this) : t
        }
    }),
    g = (g.kdf = {}).OpenSSL = {
        execute: function(t, e, n, a) {
            return a || (a = i.random(8)),
            t = o.create({
                keySize: e + n
            }).compute(t, a),
            n = i.create(t.words.slice(e), 4 * n),
            t.sigBytes = 4 * e,
            u.create({
                key: t,
                iv: n,
                salt: a
            })
        }
    },
    f = e.PasswordBasedCipher = p.extend({
        cfg: p.cfg.extend({
            kdf: g
        }),
        encrypt: function(t, e, n, i) {
            return i = this.cfg.extend(i),
            n = i.kdf.execute(n, t.keySize, t.ivSize),
            i.iv = n.iv,
            (t = p.encrypt.call(this, t, e, n.key, i)).mixIn(n),
            t
        },
        decrypt: function(t, e, n, i) {
            return i = this.cfg.extend(i),
            e = this._parse(e, i.format),
            n = i.kdf.execute(n, t.keySize, t.ivSize, e.salt),
            i.iv = n.iv,
            p.decrypt.call(this, t, e, n.key, i)
        }
    })
} (),
function() {
    for (var t = CryptoJS,
    e = t.lib.BlockCipher,
    n = t.algo,
    i = [], a = [], s = [], o = [], c = [], r = [], l = [], d = [], u = [], p = [], g = [], f = 0; 256 > f; f++) g[f] = 128 > f ? f << 1 : f << 1 ^ 283;
    for (var h = 0,
    v = 0,
    f = 0; 256 > f; f++) {
        var m = (m = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & m ^ 99;
        i[h] = m,
        a[m] = h;
        var b = g[h],
        y = g[b],
        w = g[y],
        x = 257 * g[m] ^ 16843008 * m;
        s[h] = x << 24 | x >>> 8,
        o[h] = x << 16 | x >>> 16,
        c[h] = x << 8 | x >>> 24,
        r[h] = x,
        x = 16843009 * w ^ 65537 * y ^ 257 * b ^ 16843008 * h,
        l[m] = x << 24 | x >>> 8,
        d[m] = x << 16 | x >>> 16,
        u[m] = x << 8 | x >>> 24,
        p[m] = x,
        h ? (h = b ^ g[g[g[w ^ b]]], v ^= g[g[v]]) : h = v = 1
    }
    var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    n = n.AES = e.extend({
        _doReset: function() {
            for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), a = this._keySchedule = [], s = 0; s < n; s++) if (s < e) a[s] = t[s];
            else {
                var o = a[s - 1];
                s % e ? 6 < e && 4 == s % e && (o = i[o >>> 24] << 24 | i[o >>> 16 & 255] << 16 | i[o >>> 8 & 255] << 8 | i[255 & o]) : (o = o << 8 | o >>> 24, o = i[o >>> 24] << 24 | i[o >>> 16 & 255] << 16 | i[o >>> 8 & 255] << 8 | i[255 & o], o ^= S[s / e | 0] << 24),
                a[s] = a[s - e] ^ o
            }
            for (t = this._invKeySchedule = [], e = 0; e < n; e++) s = n - e,
            o = e % 4 ? a[s] : a[s - 4],
            t[e] = 4 > e || 4 >= s ? o: l[i[o >>> 24]] ^ d[i[o >>> 16 & 255]] ^ u[i[o >>> 8 & 255]] ^ p[i[255 & o]]
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._keySchedule, s, o, c, r, i)
        },
        decryptBlock: function(t, e) {
            var n = t[e + 1];
            t[e + 1] = t[e + 3],
            t[e + 3] = n,
            this._doCryptBlock(t, e, this._invKeySchedule, l, d, u, p, a),
            n = t[e + 1],
            t[e + 1] = t[e + 3],
            t[e + 3] = n
        },
        _doCryptBlock: function(t, e, n, i, a, s, o, c) {
            for (var r = this._nRounds,
            l = t[e] ^ n[0], d = t[e + 1] ^ n[1], u = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], g = 4, f = 1; f < r; f++) var h = i[l >>> 24] ^ a[d >>> 16 & 255] ^ s[u >>> 8 & 255] ^ o[255 & p] ^ n[g++],
            v = i[d >>> 24] ^ a[u >>> 16 & 255] ^ s[p >>> 8 & 255] ^ o[255 & l] ^ n[g++],
            m = i[u >>> 24] ^ a[p >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & d] ^ n[g++],
            p = i[p >>> 24] ^ a[l >>> 16 & 255] ^ s[d >>> 8 & 255] ^ o[255 & u] ^ n[g++],
            l = h,
            d = v,
            u = m;
            h = (c[l >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & p]) ^ n[g++],
            v = (c[d >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & l]) ^ n[g++],
            m = (c[u >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & d]) ^ n[g++],
            p = (c[p >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & u]) ^ n[g++],
            t[e] = h,
            t[e + 1] = v,
            t[e + 2] = m,
            t[e + 3] = p
        },
        keySize: 8
    });
    t.AES = e._createHelper(n)
} (),
CryptoJS.pad.ZeroPadding = {
    pad: function(t, e) {
        var n = 4 * e;
        t.clamp(),
        t.sigBytes += n - (t.sigBytes % n || n)
    },
    unpad: function(t) {
        for (var e = t.words,
        n = t.sigBytes - 1; ! (e[n >>> 2] >>> 24 - n % 4 * 8 & 255);) n--;
        t.sigBytes = n + 1
    }
};