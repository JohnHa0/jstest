"undefined" == typeof HdGame && (HdGame = {}),
function(e) {
    if (!_manage) var t = g_config.$$needNewVersion || -1 != [75, 115].indexOf(g_config.style);
    g_config.$$haveLongAndShortPage && (_manage && !_preview ? parent.game._setting.isLongPage = !!parent.game._setting.isLongPage: g_config.isLongPage = !!g_config.isLongPage, g_config.isLongPage ? $(".shortPage").remove() : $(".longPage, #gameDescInfo").remove()),
    [60, 64, 85].indexOf(g_config.style) > -1 && (g_config.isLongPage ? $(".shortPage").remove() : $(".longPage, #gameDescInfo").remove());
    var a = Array.prototype;
    function n(t) {
        return "function" == e.getType(t)
    }
    var o, s, r, g, c, d = function() {},
    l = function() {},
    f = function() {},
    u = function() {},
    p = function() {},
    h = function() {};
    function m(e, t) {
        return (e & t) == t
    }
    if (e.isUrl = function(e, t) {
        if (void 0 === t && (t = !0), t && e.length >= 1 && "/" == e.charAt(0)) return ! 0;
        if (t && e.length >= 1 && "#" == e.charAt(0)) return ! 0;
        return /^(\w+:).+/.test(e)
    },
    e.fixUrl = function(t, a) {
        return e.isUrl(t, a) ? t: "http://" + t
    },
    e.isVisitorA = function() {
        return g_config.isVisitorA
    },
    e.encodeHtml = function(e) {
        return e && e.replace ? e.replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/\b&nbsp;+/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/\n/g, "<br/>").replace(/\r/g, "") : e
    },
    e.encodeHtmlAttr = function(e) {
        return e && e.replace ? e.replace(/\"/g, "&#x22;").replace(/\'/g, "&#x27;").replace(/</g, "&#x3c;").replace(/>/g, "&#x3e;").replace(/&/g, "&#x26;").replace(/\\/g, "&#5c;") : e
    },
    e.encodeUrl = function(e) {
        return void 0 === e ? "": encodeURIComponent(e)
    },
    e.decodeHtml = function(e) {
        return e && e.replace ? e.replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/g, ">").replace(/&#92;/gi, "\\").replace(/&#39;/gi, "'").replace(/&quot;/gi, '"').replace(/\<br\/\>/gi, "\n").replace(/&amp;/gi, "&") : e
    },
    e.decodeUrl = function(e) {
        return void 0 === e ? "": decodeURIComponent(e)
    },
    e.checkCharacterLen = function(e, t) {
        for (var a = ("string" == $.type(t) ? t: t.val()).replace(/[^\x00-\xff]/g, "**").trim().length, i = 0, n = 0; n < a; n++) i++;
        return i > e
    },
    e.checkTextLength = function(e, t, a) {
        var i, n = (i = a ? t: t.val()).replace(/[^\x00-\xff]/g, "**");
        if (n.length < e) return {
            isOverflow: !1
        };
        for (var o = n.substr(0, e), s = 0, r = "", g = 0; g < o.length; g++) {
            "*" == o.substr(g, 1) && s++
        }
        var c = 0;
        if (s % 2 == 0 ? (c = s / 2 + (1 * e - s), r = i.substr(0, c)) : (c = (s - 1) / 2 + (1 * e - s), r = i.substr(0, c)), a) return {
            isOverflow: !0,
            returnValue: r
        };
        t.val(r)
    },
    e.fadOut = function(e, t) {
        e.is(":visible") ? t && t() : (e.css("opacity", 0), e.show(), e.addClass("poupFadIn"), setTimeout(function() {
            e.removeClass("poupFadIn"),
            e.css("opacity", 1),
            t && t()
        },
        200))
    },
    e.fadIn = function(e, t) {
        e.is(":hidden") ? t && t() : (e.css("opacity", 1), e.addClass("poupFadOut"), setTimeout(function() {
            e.hide(),
            e.removeClass("poupFadOut"),
            e.css("opacity", 1),
            t && t()
        },
        200))
    },
    e.isQuestionGame = function(e) {
        return - 1 !== [18, 28, 42, 56, 80, 85, 100, 119].indexOf(e)
    },
    e.toggleActiveRuleView = function() {
        var e = 0,
        t = 0;
        _manage ? (e = parent.game.style, t = parent.game.gameType) : (e = g_config.style, t = gameType);
        var a = $("#activeRuleBox");
        if ( - 1 !== [24, 25, 79].indexOf(e)) return i(!(4 === t));
        if ( - 1 !== [39, 47, 98].indexOf(e)) return i(!(1 === t || 4 === t));
        if (34 === e) return i(!(3 === t));
        function i(e) {
            var t = a.hasClass("hiddenActiveRule");
            e ? (_manage && (newWin().game.$$showActiveRuleEdit = !0), !t && a.removeClass("hide")) : (_manage && (newWin().game.$$showActiveRuleEdit = !1), !t && a.addClass("hide"))
        }
    },
    e.isGameNoaward = function(e, t) {
        return - 1 !== [28, 80, 85, 100].indexOf(e) && 6 == t
    },
    $.fn.extend({
        newAwardSlide: function(e) {
            if ("object" == typeof e) {
                e = $.extend({
                    effect: "normal",
                    margin_bottom: "0",
                    padding_right: "0",
                    speed: 2
                },
                e),
                this.each(function() {
                    if ($(this).show(), "on" == $(this).data("run")) return $(this);
                    $(this).data("run", "on");
                    var t = $(this),
                    a = t.children("ul"),
                    i = $(window).width(),
                    n = i * e.speed / 6e3;
                    if (function(e) {
                        if ($("body .awardBox_cache").length > 0) return $("body .awardBox_cache");
                        var t = e.clone();
                        e.addClass("awardBox_show"),
                        t.addClass("awardBox_cache").removeClass("showAwardBox").removeClass("esseHide").css({
                            height: "0",
                            display: "block",
                            "z-index": "-1"
                        }),
                        $("body").append(t),
                        $("body .awardBox_cache")
                    } (t), $(".awardInfoList .uerItem").css({
                        "padding-left": e.padding_left,
                        "padding-right": e.padding_right
                    }), "fade" === e.effect || "fade" === $(this).attr("effect")) $(".home,.showAwardBoxPage").each(function(e, t) {
                        var a, i, n;
                        a = 0,
                        i = $(t).find(".awardInfoList .uerItem"),
                        n = i.length,
                        i.hide(),
                        i.eq(a).fadeIn(),
                        setInterval(function() {
                            i.eq(a).fadeOut(150,
                            function() {++a >= n && (a = 0),
                                i.eq(a).fadeIn(150)
                            })
                        },
                        2800)
                    });
                    else if ("vScroll" === e.effect || "vScroll" === $(this).attr("effect")) {
                        var o = $(".showAwardBox .awardInfoList li");
                        o.append(o.find(".uerItem").clone());
                        var s = 3.51 * o.find(".uerItem").eq(0).height();
                        setInterval(function() {
                            o.append(o.find(".uerItem").eq(0).clone()),
                            o.append(o.find(".uerItem").eq(1).clone()),
                            o.append(o.find(".uerItem").eq(2).clone()),
                            o.find(".uerItem").css({
                                "transition-duration": "500ms",
                                transform: "translateY(-" + s + "px)"
                            }),
                            setTimeout(function() {
                                o.find(".uerItem").css({
                                    "transition-duration": "0ms",
                                    transform: "translateY(-0px)"
                                }),
                                o.find(".uerItem").eq(0).remove(),
                                o.find(".uerItem").eq(0).remove(),
                                o.find(".uerItem").eq(0).remove()
                            },
                            500)
                        },
                        2800)
                    } else {
                        var r, g = 0,
                        c = 0,
                        d = 10,
                        l = (new Date).getTime(),
                        f = (new Date).getTime(),
                        u = 0,
                        p = 0,
                        h = !1,
                        m = null;
                        for ($(".awardBox_cache .awardInfoList .uerItem").each(function() {
                            var e = $(this).outerWidth(!0);
                            c += e
                        }), a.css({
                            width: 2 * c + 10
                        }), a.append(a.find("li").clone().css("z-index", 100)), r = 2 * c + 10, (m = a.find("li")).css({
                            width: "50%",
                            left: i + 20
                        }); a.find("li").eq(0).outerHeight(!0) > 1.75 * g_rem + 5 && d > 0;) d--,
                        a.css({
                            width: a.outerWidth(!0) + .8 * g_rem
                        });
                        var w = function() {
                            var e = (new Date).getTime(),
                            t = e - l;
                            if (l = e, g < 30 && g++, u = (u += n * (t = t > 500 ? 0 : t)) > r ? 0 : u, m.eq(0).css({
                                transform: "translate3d(-" + u + "px,0,0)"
                            }), u > r / 2 && !h && (h = !0, f = (new Date).getTime()), h) {
                                var a = (new Date).getTime(),
                                i = a - f;
                                f = a,
                                p = (p += n * (i = i > 500 ? 0 : i)) > r ? 0 : p,
                                m.eq(1).css({
                                    transform: "translate3d(-" + p + "px,0,0)"
                                })
                            }
                            requestAnimationFrame(w)
                        };
                        w()
                    }
                }),
                $("body .awardBox_cache").remove()
            } else "stop" === e ? $(this).hide() : "wakeup" === e && $(this).show();
            return $(this)
        }
    }), e.showMsgToast5 = function(e) {},
    e.unPublishMsg = function() {
        var e = "";
        isPublish ? g_config.$$caseAcctPublishTips && (e = '<div class="unPublish">该活动为示例活动，仅供体验</div>') : e = _showUnPublishPage ? '<div class="unPublish"><div class="contentBox"><p class="animate">活动尚未发布，当前产生的活动数据发布后将被清空</p></div></div>': '<div class="unPublish">活动尚未发布，当前仅供预览</div>',
        _preview || $("body").prepend(e)
    },
    e.showUnPublishPage = function(e) {
        if (g_config.$$isOpenGameVer2) return (!isPublish || g_config.$$caseAcctPublishTips) && (zgnpyVue.isShowUnPublishPage = !0),
        void(zgnpyVue.closeUnPubPageCb = e);
        var t = $(".publishTipsBox"); (!isPublish || g_config.$$caseAcctPublishTips) && t.fadeIn(300),
        t.find(".sureBtn").click(function() {
            t.fadeOut(600),
            e && e()
        })
    },
    e.share = function() {
        $("#sharePanel").length > 0 ? $("#sharePanel").show() : ($("body").append("<div id='sharePanel'></div>"), $("#sharePanel").on("touchend touchstart",
        function() {
            $(this).hide()
        }))
    },
    e.favorite = function(e) {
        if (! (e || g_config.isOem || g_config.isPaymentGame) && g_config.showSkillSup && g_config.createTime > 1521648e6) if ($(".code").removeClass("selectText"), $("#cardBagEnter").length > 0) $("#cardBagEnter").show();
        else {
            var t = $("<div id='cardBagEnter'><div id='cardContainer' class='cardContainer' ><canvas class='cardCanvas' ></canvas><img class='cardImg cardContainer' /></div></div>"); ! isPublish && t.append('<div class="topTips">活动未发布，奖品不会收入我的卡包</div>'),
            t.on("click",
            function(e) {
                $(e.target).hasClass("cardContainer") || ($(".code").addClass("selectText"), $("#cardBagEnter").hide())
            });
            var a = t.find(".cardCanvas")[0],
            i = a.getContext("2d");
            a.width = 11.65 * g_rem,
            a.height = 17.5 * g_rem;
            var n = LF.setCanvasePixelRatio(i);
            a.style.height = a.height + "px",
            a.style.width = a.width + "px",
            a.width *= n,
            a.height *= n,
            i.beginPath(),
            i.fillStyle = "rgba(255, 255, 255, 0)",
            i.fillRect(0, 0, 11.65 * g_rem, 17.5 * g_rem),
            Fai.loadImg([[_resRoot + "/image/myCardBag/web/cardBagEnterBg.png?v=202105181456", {
                crossOrigin: "anonymous"
            }], [_resRoot + "/image/myCardBag/web/qrCode_selModule.png?v=201908261650", {
                crossOrigin: "anonymous"
            }]], !0).then(function(e, n) {
                if (e.success && i.drawImage(e.val[0], 0, 0, 11.65 * g_rem, 17.5 * g_rem), n.success) {
                    var o = .5 * (11.65 - 7.75) * g_rem;
                    i.drawImage(n.val[0], o, 1.75 * g_rem, 7.75 * g_rem, 7.75 * g_rem)
                }
                var s = a.toDataURL("image/png", 8);
                t.find(".cardCanvas").hide(),
                t.find(".cardImg").attr("src", s).show(),
                t.appendTo("body")
            })
        } else $("#favoritePanel").length > 0 ? $("#favoritePanel").show() : ($("body").append("<div id='favoritePanel'></div>"), $("#favoritePanel").on("touchend touchstart",
        function(e) {
            setTimeout(function() {
                $("#favoritePanel").hide()
            },
            500)
        }))
    },
    e.getLevelName = function(e, t) {
        t = $.extend({
            newAwardType: !1
        },
        t);
        var a = g_config.isShoppingGame,
        i = g_config.hasGiftList,
        n = t.newAwardType;
        switch (parseInt(e)) {
        case 1:
            return i ? "礼品一": a ? g_config.isSingleAward ? "商品": "商品一": n ? "奖项一": "一等奖";
        case 2:
            return i ? "礼品二": a ? "商品二": n ? "奖项二": "二等奖";
        case 3:
            return i ? "礼品三": a ? "商品三": n ? "奖项三": "三等奖";
        case 4:
            return i ? "礼品四": a ? "商品四": n ? "奖项四": "四等奖";
        case 5:
            return i ? "礼品五": a ? "商品五": n ? "奖项五": "五等奖";
        case 6:
            return i ? "礼品六": a ? "商品六": n ? "奖项六": "六等奖";
        case 7:
            return i ? "礼品七": a ? "商品七": n ? "奖项七": "七等奖";
        case 8:
            return i ? "礼品八": a ? "商品八": n ? "奖项八": "八等奖";
        case 900:
            return "安慰奖"
        }
    },
    e.getStatusName = function(e) {
        switch (e) {
        case 0:
            return "未领取";
        case 1:
            return "已兑奖";
        case 2:
            return "未兑奖";
        case 3:
            return "已过期";
        case 4:
            return "已作废";
        case 5:
            return "已失效";
        case 7:
        case 8:
            return "核销中"
        }
    },
    e.getPayStatusName = function(e) {
        switch (e) {
        case 1:
            return "支付立享";
        case 2:
            return "已付款";
        case 3:
            return "支付失败";
        case 4:
            return "退款中";
        case 5:
            return "退款完成";
        case 6:
            return "退款失败";
        case 7:
            return "超时未付";
        case 8:
            return "取消订单";
        case 9:
            return "支付中"
        }
    },
    function() {
        var t = null;
        _lastWrap = null,
        _stop = function(e) {
            e ? e.data("_guide") && (e.data("_guide").remove(), e.removeData("_guide")) : t && (t.remove(), t = null, _lastWrap && _lastWrap.removeData("_guide"))
        };
        var a = {
            play: function(e, a, i) {
                var n = $('<div class="ball-scale-multiple"><div></div><div></div><div></div></div>');
                if ("static" === e.css("position") && e.css("position", "relative"), "object" == typeof a && void 0 !== a.x && void 0 !== a.y && void 0 !== a.w && void 0 !== a.h) {
                    var o = Math.min(a.w, a.h) * (i || 1);
                    n.children().css({
                        width: o,
                        height: o
                    }),
                    n.css({
                        left: a.x + (a.w - o) / 2,
                        top: a.y + (a.h - o) / 2
                    })
                } else {
                    i = i || .8;
                    var s = e.outerHeight(),
                    r = e.outerWidth(),
                    g = ("w" === a ? r / 2 : "h" === a ? s / 2 : "min" === a ? Math.min(s, r) / 2 : Math.max(s, r) / 2) * i;
                    n.css({
                        left: r / 2 - g,
                        top: s / 2 - g
                    }),
                    n.children().css({
                        width: 2 * g,
                        height: 2 * g
                    })
                }
                e.append(n),
                t = n,
                e.data("_guide", n),
                _lastWrap = e
            },
            stop: _stop
        };
        e.Guide = a
    } (), e.homePoup = function(t) {
        1 == t ? ($("#rankBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 4), g_config.localPoupPage = 4)) : 3 == t ? ($("#awardBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 2), g_config.localPoupPage = 2)) : 4 == t && ($("#regAwardBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 3), g_config.localPoupPage = 3)),
        g_config.createTime < 1494376826e3 && ($("#poupInfoBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 1), g_config.localPoupPage = 1))
    },
    e.poupAjaxComplete = function() {
        var e = $(".ajaxLoadBar");
        e.addClass("ajaxComplete"),
        $(".ajaxLoadBg").hide(),
        setTimeout(function() {
            e.removeClass("ajaxLoad"),
            e.removeClass("ajaxComplete")
        },
        500)
    },
    e.refreshGiftListAndAwardDetail = function(t, a, i, n) {
        $.ajax({
            type: "post",
            url: g_config.apiAjaxUrl + "rank/getGiftList",
            data: {
                gameId: t,
                openId: a,
                code: i
            },
            success: function(t) {
                var a = $.parseJSON(t);
                a.success && (e.changeCodeInfo(n, a.list[0]), e.openAwardDetail(a.list[0]))
            }
        })
    },
    e.hdUploadify = function(t, a) {
        if (t && 0 != t.length) {
            a || (a = {});
            var i = {
                auto: !0,
                fileSizeLimit: 10485760,
                fileCompressSize: 0,
                breakPoints: !0,
                getFileSizeUrl: g_config.apiAjaxUrl + "uploadFile/getUploadSize?aid=" + g_config.aid + "&gameId=" + g_config.gameId
            },
            n = {
                uploadType: "",
                uploadImg: null,
                uploadVideo: null,
                progress: !1
            },
            o = {
                image: "*.jpg;*.png;*.gif;*.jpeg;",
                excel: "*.xlsx;*.xls;",
                video: "*.mp4;*.mov;",
                word: "*.doc;*.docx;"
            };
            $.each(n,
            function(e) {
                e in a && (n[e] = a[e], delete a[e])
            });
            var s = n.uploadType;
            $.isArray(s) ? (i.fileTypeExts = "", $.each(["image", "excel", "video", "word"],
            function(e, t) {
                s.indexOf(t) > -1 && (i.fileTypeExts += o[t])
            })) : i.fileTypeExts = o[s],
            $.extend(i, a),
            a.onUploadError || (a.onUploadError = function(t, a) {
                console.log(a),
                e.showMsgToast("网络繁忙，文件:" + t.name + "上传失败，请稍后重试")
            });
            var r = null;
            n.progress && (n.progress = $.extend({
                warp: null,
                onCancel: null,
                fadeOutTime: 3e3
            },
            n.progress), n.progress.warp || (n.progress.warp = t.parent()), i.progressBox = n.progress.warp, r = e.getUploadProgress(n.progress.fadeOutTime)),
            $.each({
                onUploadSuccess: function(e, t) {
                    var a = $.parseJSON(t);
                    a.success && (r && r.update("progress", 100), "image" == n.uploadType && n.uploadImg ? n.uploadImg.attr("src", a.path) : "video" == n.uploadType && n.uploadVideo && n.uploadVideo.attr("src", a.path))
                },
                onUploadStart: function(e) {
                    r && r.update("show")
                },
                onUploadError: function(e, t) {
                    r && r.update("remove")
                },
                onUploadComplete: function(e) {
                    r && r.update("complete")
                },
                onProgress: function(e) {
                    r && ("start" == e.status ? r.create(e.id, n.progress.warp,
                    function(e) {
                        window.event.cancelBubble = !0,
                        g.cancel(),
                        n.progress.onCancel && n.progress.onCancel(g)
                    }) : "ing" == e.status ? r.update("ing", e.percent) : "end" == e.status && r.update("remove"))
                }
            },
            function(e, t) {
                i[e] = function() {
                    t.apply(this, arguments),
                    a[e] && a[e].apply(this, arguments)
                }
            });
            var g = null;
            return $.fn.uploadify && (g = $.fn.uploadify.call(t, i)),
            g
        }
    },
    e.getUploadProgress = function(e) {
        e = e || 3e3;
        var t = {
            elem: null,
            percent: 0,
            create: function(e, a, i) {
                return t.elem && t.elem.remove(),
                a.append('<div id="progressWrap_' + e + '" class="bodyProgressWrap uploadtime"><div class="mission uploadInner"><div id="progress' + e + '" class="progress uploadprogres"></div></div><div id="progressNum' + e + '" class="progressNum uploadpercent">0%</div><a class="progressCancel cancelUpload" href="javascript:void(0);"></a></div>'),
                t.elem = a.find(".uploadtime"),
                t.elem.find(".cancelUpload").on("click",
                function() {
                    i && i(),
                    t.update("remove")
                }),
                this.percent = 0,
                this
            },
            update: function(a, i) {
                t.elem && ("show" == a ? t.elem.show() : "ing" == a ? (i > 99.5 && t.elem.find(".cancelUpload").off("click"), t.update("progress", i)) : "progress" == a ? (t.percent = Math.round(i), 100 == t.percent && (t.percent = 99), t.elem.find(".progress").css("width", t.percent + "%"), t.elem.find(".uploadpercent").html(t.percent + "%")) : "remove" == a ? (t.elem.remove(), t.elem = null) : "complete" == a && (t.elem.add(t.elem.find(".progress,.uploadpercent")).attr("id", ""), t.elem.fadeOut(e,
                function() {
                    t.update("remove")
                })))
            }
        };
        return t
    },
    e.interceptVideoFirstImg = function(t, a, i) {
        return $.Deferred(function(n) {
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "uploadFile/addFirstImg",
                data: {
                    aid: t,
                    gameId: a,
                    path: i
                },
                error: function() {
                    n.reject(),
                    e.showMsgToast("服务繁忙，请稍候重试")
                },
                success: function(e) {
                    var t = $.parseJSON(e);
                    t.success ? n.resolve({
                        firstImg: t.data.firstImg
                    }) : n.reject()
                }
            })
        })
    },
    function() {
        var e = 410,
        t = g_config.verInfo && g_config.verInfo.ver;
        if (null != t) {
            if (0 == g_config.isAOpenId) switch (t) {
            case 0:
                e = 470;
                break;
            case 1:
                e = 472;
                break;
            case 2:
                e = 471;
                break;
            case 3:
                e = 474;
                break;
            case 4:
                e = 497;
                break;
            case 5:
                e = 437
            } else switch (t) {
            case 0:
                e = 475;
                break;
            case 1:
                e = 477;
                break;
            case 2:
                e = 476;
                break;
            case 3:
                e = 478;
                break;
            case 4:
                e = 498;
                break;
            case 5:
                e = 438
            }
            g_config._ta = e
        } else g_config._ta = e
    } (),
    function() {
        var t = {
            rankUrl: "",
            awardUrl: "",
            getRegAwardUrl: "",
            getStoreUrl: "",
            mhaveScore: 0,
            openId: "",
            gameId: 0
        },
        i = {
            menuLen: "",
            slideBarWidth: "",
            slideBarMaxWidth: "",
            marginLeft: !1,
            hasInitEvent: !1
        };
        "undefined" != typeof g_config && (g_config.firstTouchRank = g_config.firstTouchAward = g_config.firstTouchWinList = !0);
        var n = {
            isLoad: !1,
            isRankAll: !1,
            hasLoadAll: !1,
            start: 0,
            num: 0,
            limit: 99,
            delay: 500,
            close: function() {
                this.isClose = !0,
                this.isRankAll = !1,
                this.hasLoadAll = !1,
                this.num = this.start = 0
            },
            getRankData: function(a) {
                n.isLoad || n.isClose || n.isRankAll || n.hasLoadAll || ((a = $.extend({
                    init: null,
                    success: null,
                    error: null,
                    container: null
                },
                a)).init && a.init(), a.container && (o = container), n.isLoad = !0, $.ajax({
                    type: "post",
                    url: t.rankUrl + "&start=" + n.start + "&limit=" + n.limit + "&playerId=" + g_config.playerId,
                    error: function() {
                        a.error && a.error(),
                        0 == n.num && e.poupAjaxComplete(),
                        n.isLoad = !1
                    },
                    success: function(t) {
                        e.tlog("creatRankList", t);
                        var i = $.parseJSON(t);
                        a.success && a.success(i),
                        i.isRankAll && (n.hasLoadAll = !0),
                        0 == n.num && e.poupAjaxComplete();
                        var o = function() {
                            e.logDog(1000010),
                            n.creatRankList(i),
                            n.isLoad = !1,
                            n.num++,
                            n.start = n.num * n.limit,
                            hg.fire("updateRankList", i)
                        };
                        n.delay ? setTimeout(o, n.delay) : o(),
                        0 == n.num && (g_config.firstTouchRank = !1),
                        e.hideLoadToast()
                    }
                }))
            },
            creatRankList: function(t) {
                var a = t.rankList,
                i = t.rank,
                s = t.bestCostTime,
                r = o.find("#rankInfoBox");
                if (0 == a.length) g_config.$$needNewVersion && o.find("#rankInfoBox, #rankBox .poupMainInfo").hide(),
                o.find(g_config.$$needNewVersion ? ".noRank": "#noRank").show();
                else {
                    g_config.$$needNewVersion && o.find("#rankInfoBox, #rankBox .poupMainInfo").show(),
                    o.find(".rankNum").show();
                    var g = 0,
                    c = o.find("#rankHeader"),
                    d = 0,
                    l = !1,
                    f = !1;
                    a.length <= 3 && g_config.createTime > 15837696e5 && g_config.openStrongAttention && g_config.ishasAttentiosThisAPP && -1 !== [1, 3].indexOf(g_config.gameType) && i > 0 && i <= 3 && (l = !0),
                    (56 == g_config.style || 80 == g_config.style || 85 == g_config.style) && g_config.createTime > 15421608e5 && (f = !0);
                    var u = function(t) {
                        if (g_config.createTime > 15361128e5 && e._showTowPointNum) if (a[t].achievement.indexOf(".") < 0) a[t].achievement = "" === a[t].achievement ? "无": a[t].achievement + ".00";
                        else {
                            var i = a[t].achievement.indexOf(".") + 1;
                            1 == a[t].achievement.length - i && (a[t].achievement = a[t].achievement + "0")
                        }
                    };
                    if (a.length >= 3 && !l) {
                        c.html("");
                        for (var p = 3,
                        h = 0; h < p; h++) {
                            var m = null == (y = a[h].info.length > 0 ? $.parseJSON(a[h].info).headImg: null) ? "": "src='" + e.encodeHtmlAttr(y) + "'";
                            if (g_config.createTime > 15837696e5 && g_config.openStrongAttention && g_config.ishasAttentiosThisAPP && -1 !== [1, 3].indexOf(g_config.gameType)) {
                                var w = e.encodeHtml(a[h].name);
                                if (h + 1 == i) {
                                    p++,
                                    d = 1;
                                    continue
                                }
                            }
                            u(h);
                            var _ = '<div class="headItem">                                    <div class="headImgBg">                                        <img class="headImg" ' + m + '/>                                    </div>                                    <p class="nickName ellipsis">' + e.encodeHtml(a[h].name) + '</p>                                    <p class="score pageStyleColor">' + ("" === a[h].achievement || "无" === a[h].achievement ? "无": a[h].achievement + g_config.scoreUnit) + "</p>                                    " + (f ? '<p class="bestCostTime">' + a[h].bestCostTime + ("无" == a[h].bestCostTime ? "": "秒") + "</p>": "") + "</div>";
                            c.append(_)
                        }
                        g = p,
                        o.find("#rankHeader .headItem").eq(1).insertBefore(o.find("#rankHeader .headItem").eq(0))
                    }
                    g_config.$$needNewVersion && a.length > 10 && !LongPageCard.isShowDeatil && (a = a.slice(0, 10), o.find("#rankList .seeDetailList").show());
                    for (var v = g; v < a.length; v++) {
                        var y;
                        w = e.encodeHtml(a[v].name),
                        m = null == (y = a[v].info.length > 0 ? $.parseJSON(a[v].info).headImg: null) ? "": "src='" + e.encodeHtmlAttr(y) + "'";
                        if (g_config.createTime > 15837696e5 && g_config.openStrongAttention && g_config.ishasAttentiosThisAPP && -1 !== [1, 3].indexOf(g_config.gameType) && v + 1 == i) d = 1;
                        else {
                            n.start + v + 1 >= rankShowNum && (n.isRankAll = !0),
                            u(v);
                            var x = "";
                            if (g_config.isDoubleGame) {
                                var I = a[v].info.length > 0 ? $.parseJSON(a[v].info).headImgB: null;
                                x = '<img class="headImg" ' + (null == I ? "": "src='" + e.encodeHtmlAttr(I) + "'") + " />"
                            }
                            var b = !1;
                            v + 1 == i && (b = !0);
                            var T = '<li class="' + (b ? "mySelf": "") + '">                                ' + (b ? '<span class="myRank">我的排名</span>': "") + '                                <span class="rankNumText">NO.' + (n.start + v + 1 - d) + '</span>                                <div><img class="headImg" ' + m + "/>" + x + '</div>                                <span class="nickName ellipsis">' + w + "</span>                                " + (f ? '<span class="bestCostTime">' + a[v].bestCostTime + ("无" == a[v].bestCostTime ? "": "秒") + "</span>": "") + '<span class="rankScore pageStyleColor">' + e.encodeHtml("" === a[v].achievement || "无" === a[v].achievement ? "无": a[v].achievement + g_config.scoreUnit) + "</span>                            </li>";
                            r.append(T)
                        }
                    }
                    if (o.find("#showRankNum").text(rankShowNum), (n.isRankAll || n.hasLoadAll) && i > rankShowNum) {
                        if (e.currentScore) {
                            m = g_config.headImg ? "src='" + e.encodeHtmlAttr(g_config.headImg) + "'": "";
                            $(".outOf100").html("").show().append('<p class="rankNum">— 只显示前<span id="showRankNum">' + rankShowNum + '</span>名 —</p>                                <div class="mySelf">                                    <span class="myRank">我的排名</span>                                    <span class="rankNumText">NO.' + i + '</span>                                    <div><img class="headImg" ' + m + '/></div>                                    <span class="nickName ellipsis">' + e.encodeHtml(g_config.userName) + "</span>                                    " + (f ? '<span class="bestCostTime">' + (e.currentBestCostTime || s) + ("无" == e.currentBestCostTime || "无" == s ? "": "秒") + "</span>": "") + '<span class="rankScore pageStyleColor">' + ((g_config.scoreType ? e.encodeHtml(e.currentScore) : parseInt(e.currentScore)) + g_config.scoreUnit) + "</span>                                </div>")
                        }
                    } else $(".outOf100").html("");
                    hg.fire("setPageStyleColor", "rankList", "", o)
                }
            }
        };
        e.rankAjax = n,
        e.initChangePoup = function(a) {
            a && $.extend(t, a),
            _manage && $("#Award_Round_Dot").show(),
            i.menuLen = 0,
            $(".poupTitleBox .poupTitleMune").each(function() {
                71 == g_config.style && 4 == $(this).attr("_flag") && $(this).css("display", "block"),
                "block" == $(this).css("display") ? ($(this).removeClass("hide"), i.menuLen++) : $(this).addClass("hide")
            }),
            $(".popTabBox").css("width", 16 * g_rem * i.menuLen);
            var o = null;
            $(".poupTitleBox .poupTitleMune").not(".hide").each(function(e, t) {
                for (var a = $(this).attr("_flag"), i = 0; i < $("#poupInfoBox .poupMain").length; i++) {
                    var n = $("#poupInfoBox .poupMain").eq(i);
                    if (n.attr("_flag") == a) return n.show(),
                    void(o = o ? o.add(n) : n)
                }
            });
            var s = _manage ? $(window).width() : 100 / i.menuLen + "%";
            $("#poupInfoBox .poupMain").css("width", s),
            $("#poupInfoBox .poupMain").not(o).hide(),
            $(".poupTitleBox .poupTitleMune").css("width", 12.95 / i.menuLen + "rem");
            for (var r = 0; r < i.menuLen - 1; r++) $(".poupTitleBox .poupTitleMune .item").eq(r).addClass("hasBorder");
            i.slideBarWidth = parseInt($(".poupTitleBox .poupTitleMune").css("width")),
            i.slideBarMaxWidth = parseInt($(".poupTitleBox .slideBarTip").css("max-width")),
            i.slideBarWidth > i.slideBarMaxWidth && (i.marginLeft = !0),
            i.hasInitEvent || (!
            function() {
                var t = _manage ? "click": "touchstart",
                a = $(".poupTitleBox .poupTitleMune");
                a.on(t,
                function() {
                    if (a.length == a.not(".hide").length) var t = $(this).index();
                    else {
                        var t = a.filter(":visible").index(this);
                        t = t < 0 ? 0 : t
                    }
                    var i = parseInt($(this).attr("_flag"));
                    e.changePoup(i, t),
                    _manage && e.removeAllEditLayer()
                });
                var i = $("#rankBox .poupMainInfo");
                i.scroll(function(t) {
                    _manage || 2 * $("#rankHeight").height() / 3 <= i.height() + i.scrollTop() && n.getRankData({
                        init: function() {
                            e.showLoadToast("数据加载中")
                        }
                    })
                })
            } (), i.hasInitEvent = !0)
        },
        e.hdSkillLog = function(t, a) {
            g_config.realVer == HdVerDef.FREE ? e.logDog(a, t ? 0 : 1) : g_config.realVer == HdVerDef.BJ ? e.logDog(a, t ? 2 : 3) : g_config.realVer == HdVerDef.BY ? e.logDog(a, t ? 4 : 5) : g_config.realVer == HdVerDef.ZS ? e.logDog(a, t ? 6 : 7) : g_config.realVer == HdVerDef.MD ? e.logDog(a, t ? 8 : 9) : g_config.realVer == HdVerDef.ZT && e.logDog(a, t ? 10 : 11)
        },
        e.getUserInfo = function() {
            var a = new Array;
            a.push("gameId=", t.gameId),
            a.push("&openId=", t.openId),
            g_config.isPaymentGame && a.push("&mchCode=", $("#resule-gift-sucImg").data("openCode")),
            g_config.isDoubleGame && a.push("&openIdB=", e.otherOpenId),
            $("#resule-gift-sucImg").data("openCode") && a.push("&afterGetResultOpen=true"),
            e.ajaxLoad.show(),
            $.ajax({
                type: "post",
                url: t.awardUrl,
                data: a.join(""),
                error: function() {
                    e.ajaxLoad.hide()
                },
                success: function(t) {
                    e.ajaxLoad.hide();
                    var a = $.parseJSON(t);
                    if (g_config.userInfo = a.userInfo, a.userInfo) {
                        var i = !1;
                        if (a.userInfo.ausername || a.userInfo.aphone || a.userInfo.aadress) i = !0;
                        else for (var n in a.userInfo) if (/^aprop.*/.test(n) && null != a.userInfo[n] && "" !== a.userInfo[n]) {
                            i = !0;
                            break
                        }
                        i && !g_config.isYKY && ($("#awardContactInfo").show(), e.updateContactView(a.userInfo))
                    }
                    g_config.firstTouchUserInfo = !0
                }
            })
        },
        e.changePoup = function(a, o, g, l) {
            if (g_config.$$isOpenGameVer2 && -1 != $.inArray(a, [1, 2, 3, 4]) && (zgnpyVue.isShowActiveRule = !0, zgnpyVue.$refs.activityRule.showPoupInfoBox(1 == a ? 2 : 2 == a ? 1 : a)), !_manage && g_config.showSkillSup) switch (a) {
            case 1:
                e.logDog(1000200, 4),
                g_config.localPoupPage = 4;
                break;
            case 3:
                e.logDog(1000200, 2),
                g_config.localPoupPage = 2;
                break;
            case 4:
                e.logDog(1000200, 3),
                g_config.localPoupPage = 3;
                break;
            case 2:
                e.logDog(1000200, 1),
                g_config.localPoupPage = 1
            }
            if (~ [1, 2, 3, 4].indexOf(a)) {
                var f, u;
                switch (a) {
                case 1:
                    f = $("#ruleBox"),
                    u = 7;
                    break;
                case 2:
                    f = $("#rankBox"),
                    u = 6;
                    break;
                case 3:
                    f = $("#awardBox"),
                    u = 4;
                    break;
                case 4:
                    f = $("#regAwardBox"),
                    u = 8
                }
                f.find(".hasMoreActiveBtn").length > 0 && (f.find(".hasMoreActiveBtn").show(), f.find(".noMoreActiveBtn").hide()),
                e.gamePageExposure(u, !f.find(".noMoreActiveBtn").is(":visible"), f.find(".hasMoreActiveBtn .moreActive"))
            }
            0 == o && (0 == g_config.isAOpenId ? e.logDog(1000115, 5) : e.logDog(1000115, 6)),
            n.isClose = !1;
            var p = $("#ruleImg"),
            h = p.length > 0 && p.offset().left + p.width() / 2 + "px ",
            m = p.length > 0 && p.offset().top + p.height() / 2 + "px";
            if ($("#poupInfoBox").css({
                "transform-origin": h + m,
                "-webkit-transform-origin": h + m,
                "z-index": 1500
            }), 5 != a && $("#poupInfoBox").show(), g_config.isPaymentGame && $("#poupInfoBox").hide(), $(".poupTitleMune").removeClass("checked"), 5 == a && 1 == t.hasReport) e.Res.loadg("complaint").then(function() {
                Complaint.showResultPage(!0)
            });
            else if ("number" == typeof o) {
                var w = $(".poupTitleMune").filter(":visible").eq(o);
                "我的奖品" == w[0].outerText && d(0),
                w.addClass("checked"),
                a = parseInt(w.attr("_flag"))
            } else $(".poupTitleBox .poupTitleMune").filter(":visible").each(function(e, t) {
                $.trim($(this).attr("_flag")) == a && (o = e, $(this).addClass("checked"))
            });
            if (2 != a || _manage || g_config.firstTouchUserInfo || e.getUserInfo(), _manage) {
                var _ = $.trim($(".poupTitleMune").eq(o).find(".item").text()),
                y = parent.$("#editActive .topBar .column");
                "活动说明" == _ && (_ = "活动奖品");
                var x = g_config.isAngular ? -28 : 2;
                y.each(function() {
                    $.trim($(this).find(".name").text()) == _ && (parent.$(".topBar .transitionPanel").css("left", $(this).offset().left + x + "px"), y.removeClass("checked"), $(this).addClass("checked"))
                }),
                48 == g_config.style && $(".body").scrollTop(0).css("overflow-y", "hidden")
            }
            i.marginLeft ? $(".poupSlideBar .slideBarTip").css("left", 12.95 / i.menuLen * o + (i.slideBarWidth - i.slideBarMaxWidth) / g_rem / 2 + .2 + "rem") : $(".poupSlideBar .slideBarTip").css("left", 12.95 / i.menuLen * o + "rem"),
            function(a, o, g) {
                var l = $("#poupInfoBox").attr("class");
                if (_manage) $("#poupInfoBox").addClass("retrans");
                else {
                    var f = o;
                    if (f) 5 != a && $("#poupInfoBox").addClass("retrans");
                    else {
                        var l = $("#poupInfoBox").attr("class");
                        $("#poupInfoBox").hasClass("enlarge") || ($("#poupInfoBox").addClass("enlarge"), d = $buryPoint.enterActivityDecPage())
                    }
                    115 != g_config.style && $(".gameBox,.home,.body").addClass("overflow-y-hidden"),
                    e.tlog("testjjp--addadd"),
                    55 != g_config.style && g_config.showSkillSup && $(".bottomSkill").hide()
                }
                $(".poupClose").off("click"),
                setTimeout(function() {
                    if ($(".poupClose").on("click",
                    function(t) {
                        if (!_manage) {
                            t.preventDefault(),
                            t.stopPropagation(),
                            g_config.firstTouchRank = !0,
                            g_config.firstTouchAward = !0,
                            g_config.firstTouchWinList = !0,
                            n.close(),
                            $("#rankInfoBox").html(""),
                            $(".poupTitleMune").removeClass("checked"),
                            $(".poupTitleMune").eq(0).addClass("checked");
                            var s = $("#poupInfoBox");
                            s.css({
                                "z-index": -1
                            }),
                            s.removeClass("enlarge").removeClass("retrans"),
                            "retrans" == l && s.hide(),
                            o && s.hide(),
                            (g_config.isShoppingGame || -1 != [71].indexOf(g_config.style)) && setTimeout(function() {
                                s.hide()
                            },
                            500),
                            g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !0),
                            $(".gameBox,.home,.body").removeClass("overflow-y-hidden"),
                            e.tlog("testjjp--removeremove"),
                            g_config.showSkillSup && $(".bottomSkill").show(),
                            60 != g_config.style && 45 != g_config.style || $(".notFullLuckOne").is(":visible") && g_config.showSkillSup && $(".gameBgBox .bottomSkill").hide(),
                            setTimeout(function() {
                                $(".popTabBox").css("left", 0),
                                $(".poupSlideBar .slideBarTip").css("left", (i.slideBarWidth - i.slideBarMaxWidth) / 40 + "rem")
                            },
                            100),
                            hg.fire("hidePoup", a)
                        }
                    }), $("#poupInfoBox .poupMainInfo .poupLine:last").addClass("noAfter"), !g_config.$$isOpenGameVer2) {
                        var t = $("#ruleBox .poupMainInfoWrap, #rankBox .poupMainInfoWrap, #regAwardBox .poupMainInfo, #awardBox .poupMainInfoWrap"),
                        s = function() {
                            var e = $(this).scrollTop(),
                            t = $(this).height(),
                            i = $(this)[0].scrollHeight,
                            n = i > t && e + t >= i - 1; (2 === a && !n && i === t || 4 === a && g) && (n = !0)
                        };
                        s.call(t, !0),
                        t.scroll($.throttle(s))
                    }
                },
                300),
                e.tlog(a),
                1 === a ? s(a) : 2 === a ?
                function(a) {
                    _manage || (g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !1), g_config.showSkillSup && e.logDog(1000200, 1), g_config.localPoupPage = 1, e.logDog(1000009), 2 != skillSupportType && 3 != skillSupportType || (e.hdSkillLog(!1, 1000069), e.logDog(1000028, 2), e.FdpTrack("hd_game_ad_expo", {
                        hd_modid: g_config.modId,
                        hd_ta: g_config._ta,
                        hd_free_text_0: "活动说明"
                    })));
                    isLimitDraw && drawTimesLimitShow == drawTotalLimitShow ? ($("#explaiDrawInfoBox").find(".dayFont").hide(), $("#explaiDrawInfoBox").find(".drawTotalFont").hide(), $("#explaiDrawInfoBox").find(".chanceFont").show(), $("#explaiDrawInfoBox").find(".everyOneFont").show()) : $("#directDrawInfoBox").find(".drawTotalFont").show();
                    isLimitDraw || ($("#explaiDrawInfoBox").find(".drawTotalFont").hide(), $("#explaiDrawInfoBox").find(".chanceFont").show(), $("#explaiDrawInfoBox").find(".everyOneFont").show());
                    isLimitDraw && 4 == gameType && $(".drawTotalFont").hide();
                    $("#ruleBox .poupMainInfo").css("padding-bottom", $("#ruleBox .attentionBox").outerHeight()),
                    g_config.isPaymentGame && $("#ruleBox .poupMainInfo").css("padding-bottom", $("#ruleBox .attentionBox").outerHeight());
                    $("#ruleBox").show(),
                    $("#poupInfoBox").show(),
                    (!t.mhaveScore && 61 != g_config.style && 62 != g_config.style || 39 == g_config.style || 9 == g_config.style || 58 == g_config.style || 50 == g_config.style) && $("#haveScore").hide();
                    e.isGameNoaward(g_config.style, gameType) ? $("#awardLine").hide() : $("#awardLine").show();
                    parent.game && parent.game._flagC.f2048 && 2 === parent.game._setting.accessrule ? (3 == gameType || e.isGameNoaward(g_config.style, gameType)) && $("#explainPlayInfoBox").hide() : (3 == gameType || e.isGameNoaward(g_config.style, gameType)) && g_config.isCheckPlayTimes && 63 != g_config.style ? (PlayInfo.isLimitPlay.show && playTimesLimit == playTotalLimit && ($("#explainPlayInfoBox").find(".dayFont").hide(), $("#explainPlayInfoBox").find(".playTotalFont").hide(), $("#explainPlayInfoBox").find(".chanceFont").show(), $("#explainPlayInfoBox").find(".everyOneFont").show()), PlayInfo.isLimitPlay.show || ($("#explainPlayInfoBox").find(".playTotalFont").hide(), $("#explainPlayInfoBox").find(".chanceFont").show(), $("#explainPlayInfoBox").find(".everyOneFont").show()), $("#explainPlayInfoBox").canShow()) : 3 == gameType && 51 == g_config.style ? ($("#directDrawInfoBox").hide(), $("#explainPlayInfoBox").mustHide()) : $("#explainPlayInfoBox").mustHide();
                    0 != gameType && 5 != gameType && $("#directDrawInfoBox").hide();
                    e.toggleActiveRuleView()
                } () : 3 === a ? r(a) : 4 === a ? c(a) : 5 === a && !t.hasReport && e.Res.loadg("complaint").then(function() {
                    9863194 == g_config.aid ? zgnpyVue.$refs.complaint.getHasReport(t) : Complaint.getHasReport(t)
                });
                hg.fire("showPoup", a)
            } (a, g),
            $(".popTabBox").css("left", -$(window).width() * o);
            var I = _manage ? parent.game._awardList: g_config.awardList;
            $.each(I,
            function(t, a) {
                e.watch("awardList[" + t + "].afterPayStyle", a.afterPayStyle,
                function(e) {
                    var i = (_manage ? a.$type: g_config.$$awardTypeInfo[v(a.awardtype)]).isAfterPayType || !1;
                    $(".unComfortLine .afterPayStyle").eq(t).toggle(i && a.isOpenAfterPay).text((e || "").replace("#money#", a.payMoney / 100).replace("#val#", "元立享")),
                    $(".unComfortLine .awardStyle").eq(t).toggle(!(i && a.isOpenAfterPay))
                })
            })
        };
        var o = $("body");
        function s(t, a) {
            a && (o = a),
            g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !1),
            !_manage && g_config.showSkillSup && e.FdpTrack("hd_game_ad_expo", {
                hd_modid: g_config.modId,
                hd_ta: g_config._ta,
                hd_free_text_0: "排行榜"
            });
            var i = !1;
            if (g_config.isDoubleGame && o.find("#rankBox").addClass("isDoubleGame"), o.find("#rankBox .poupMainInfo").css("padding-bottom", o.find("#rankBox .attentionBox").height() + 18), _manage) {
                var s = 999;
                g_config.createTime > 15361128e5 && e._showTowPointNum && (s = 999.99); (56 == g_config.style || 80 == g_config.style || 85 == g_config.style) && g_config.createTime > 15421608e5 && (i = !0);
                var r = [{
                    name: "magazine",
                    achievement: s
                },
                {
                    name: "hubert",
                    achievement: s
                },
                {
                    name: "lvox",
                    achievement: s
                },
                {
                    name: "hth",
                    achievement: s
                },
                {
                    name: "monica",
                    achievement: s
                },
                {
                    name: "lzz",
                    achievement: s
                },
                {
                    name: "william",
                    achievement: s
                },
                {
                    name: "sinki",
                    achievement: s
                },
                {
                    name: "weiqizhou",
                    achievement: s
                },
                {
                    name: "candyq",
                    achievement: s
                },
                {
                    name: "jarvis",
                    achievement: s
                },
                {
                    name: "johnvi",
                    achievement: s
                },
                {
                    name: "tomato",
                    achievement: s
                },
                {
                    name: "tina",
                    achievement: s
                }];
                e.homePoup(t);
                var g = o.find("#rankInfoBox"),
                c = o.find("#rankHeader");
                g.html(""),
                c.html(""),
                $(".rankNum").show();
                var d = "",
                l = void 0 === l || "" == l.trim() ? g_config.scoreUnit: l,
                f = _resRoot + "/image/manImg.jpg",
                u = _resRoot + "/image/girlImg.jpg";
                d = g_config.isDoubleGame ? '<img class="headImg" src="' + f + '"/><img class="headImg2" src="' + u + '"/>': '<img class="headImg" src="' + f + '"/>';
                var p = newWin().$("#setGameUnit").val();
                l = p ? Fai.encodeHtml(p) : g_config.scoreUnit;
                for (var h = 0; h < 3; h++) {
                    var m = '<div class="headItem">                            <div class="headImgBg">                                <img class="headImg" src="' + f + '"/>                            </div>                            <p class="nickName ellipsis">' + e.encodeHtml(r[h].name) + '</p>                            <p class="score pageStyleColor">' + r[h].achievement + l + "</p>                            " + (i ? '<p class="bestCostTime">12.9秒</p>': "") + "</div>";
                    1 === h ? c.prepend(m) : c.append(m)
                }
                g_config.$$needNewVersion && r.length > 10 && !LongPageCard.isShowDeatil && (r = r.slice(0, 10), o.find("#rankList .seeDetailList").show());
                for (var w = 3; w < r.length; w++) {
                    var _ = '<li class="' + (5 === w ? "mySelf": "") + '">                            ' + (5 === w ? '<span class="myRank">我的排名</span>': "") + '                            <span class="rankNumText">NO.' + (w + 1) + "</span>                            <div>" + d + '</div>                            <span class="nickName ellipsis ' + (g_config.isDoubleGame ? "doubleGame": "") + ' ">' + e.encodeHtml(r[w].name) + "</span>                            " + (i ? '<span class="bestCostTime">12.9秒</span>': "") + '<span class="rankScore pageStyleColor">' + r[w].achievement + l + "</span>                        </li>";
                    g.append(_)
                }
                var v = parseInt(o.find("#showRankNum").text()) - 4;
                o.find("#rankInfoBox li:gt(" + v + ")").hide(),
                hg.fire("setPageStyleColor", "rankList", "", o)
            } else e.logDog(1000010, 0),
            g_config.firstTouchRank && (g_config.$$isOpenGameVer2 || $(".ajaxLoadBg").show(), $(".ajaxLoadBar").addClass("ajaxLoad"), g_config.$$needNewVersion && o.find("#rankInfoBox").show(), o.find(g_config.$$needNewVersion ? ".noRank": "#noRank").hide(), g_config.openStrongAttention && g_config.hasWXAuth && g_config.ishasAttentiosThisAPP ? e.Res.loadg("fansExclusive").then(function() {
                e.getIsHasAttention(null, !0, !0).then(function() {
                    n.getRankData()
                })
            }) : g_config.$$isOpenGameVer2 ? (zgnpyVue.$refs.activityRule.showPoupInfoBox(2, !0), zgnpyVue.isShowActiveRule = !0) : n.getRankData())
        }
        e.epImg_default = _resRoot + "/image/ptchl_zf/describeImg.png",
        e.refreshImgTextBox = function(t, a) {
            var i = $(t);
            if (i.length > 0) {
                i.find(".imgTextList").length <= 0 && i.append($('<div class="imgTextList"></div>'));
                var n = i.find(".imgTextList");
                n.css("display", "block");
                for (var o = 0; o < a.count; o++) {
                    var s = n.children(".imgTextItem:eq(" + o + ")");
                    s.length <= 0 && (s = $('<div class="imgTextItem"><img/><div></div></div>'), n.append(s));
                    var r = a.imgList && a.imgList[o] || e.epImg_default,
                    g = a.textList && e.encodeHtml(a.textList[o]) || "";
                    s.children("img").attr("src", r),
                    s.find("img").on("load",
                    function() {
                        hg.fire("setHeight")
                    }),
                    s.children("div").html(g).css("margin", g.length > 0 ? ".25rem 0": 0)
                }
                if (n.children(".imgTextItem").length > a.count) for (var c = n.children(".imgTextItem").length - 1; c >= a.count; c--) n.children(".imgTextItem:eq(" + c + ")").remove()
            }
        },
        e.refreshExplainBox = function() {
            if ($("#exlainInfo").length > 0) {
                var t = !_preview && parent.game && parent.game._setting._ep || $.parseJSON(g_config.explainInfo);
                if (!t) return;
                $("#exlainInfo").html('<p class="exlainInfoText">' + e.encodeHtml(t.top) + "</p>"),
                $("#explainBox").css("display", "block"),
                2 === t.type ? e.refreshImgTextBox("#exlainInfo", t) : 1 === t.type && ($("#explainBox").find(".imgTextList").css("display", "none"), t.top || $("#explainBox").css("display", "none"))
            }
        },
        e.refreshBandIntroductionBox = function() {
            if ($("#bandIntroductionBox").length > 0) {
                var t = !_preview && parent.game && parent.game._setting._bi || $.parseJSON(g_config.bandInfo) || {};
                if (void 0 === t) return;
                t.count || (t.count = 1),
                e.refreshImgTextBox("#bandIntroductionBox", t)
            }
        },
        e.refreshExplainBox(),
        -1 !== [106, 113].indexOf(g_config.style) && e.refreshBandIntroductionBox();
        var r = function(a, i) { ! _manage && g_config.showSkillSup && (e.logDog(1000011, 0), e.logDog(1000200, 2), g_config.localPoupPage = 2);
            var n = new Array;
            if (75 == g_config.style) $("#myAwardInfo");
            else $("#awardInfo"); - 1 !== [75, 113, 115].indexOf(g_config.style) ? $("#awardInfoBox").css("height", "auto") : setTimeout(function() {
                $("#awardInfoBox").css("padding-bottom", $("#awardBox .attentionBox").height() + 18)
            },
            500),
            $("#poupInfoBox,#awardBox").show(),
            !_manage && g_config.showSkillSup && (e.hdSkillLog(!0, 1000069), e.logDog(1000028, 1), e.FdpTrack("hd_game_ad_expo", {
                hd_modid: g_config.modId,
                hd_ta: g_config._ta,
                hd_free_text_0: "我的奖品"
            }), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 1 + g_config.isAOpenId)),
            g_config.showMenu && e.logDog(1000036),
            _manage ? parent.awardList && parent.awardList.length > 0 && e.showAwardDetail([parent.awardList[0]]) : (n.push("gameId=", t.gameId), n.push("&openId=", t.openId), g_config.isPaymentGame && n.push("&mchCode=", $("#resule-gift-sucImg").data("openCode")), g_config.isDoubleGame && n.push("&openIdB=", e.otherOpenId), $("#resule-gift-sucImg").data("openCode") && n.push("&afterGetResultOpen=true"), g_config.isPaymentGame && $("#poupInfoBox").hide(), (g_config.firstTouchAward || g_config.$$isLongPageAwardBox) && (e.ajaxLoad.show(), $.ajax({
                type: "post",
                url: t.awardUrl,
                data: n.join(""),
                error: function() {
                    e.ajaxLoad.hide()
                },
                success: function(t) {
                    e.ajaxLoad.hide(),
                    e.tlog("poupAward", t);
                    var a = $.parseJSON(t);
                    if (e.awardList = a.list, $("#Award_Round_Dot").hide(), e.logDog(1000011), e.tlog("success", a.success), a.success ? ((!g_config.isPaymentGame || 4 != e.awardList[0].codeStatus) && e.showAwardDetail(a.list, i), g_config.isPaymentGame && $("#poupInfoBox").hide()) : (g_config.isPaymentGame && $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), $("#awardInfo").find(".noPrize").show()), g_config.userInfo = a.userInfo, a.userInfo) {
                        var n = !1;
                        if (a.userInfo.ausername || a.userInfo.aphone || a.userInfo.aadress) n = !0;
                        else for (var o in a.userInfo) if (/^aprop.*/.test(o) && null != a.userInfo[o] && "" !== a.userInfo[o]) {
                            n = !0;
                            break
                        }
                        n && !g_config.isYKY && ($("#awardContactInfo").show(), e.updateContactView(a.userInfo)),
                        $("#awardBox .noPrize").toggleClass("hasConcatInfo", n && !g_config.isYKY)
                    }
                    g_config.firstTouchAward = !1
                }
            })))
        };
        e.poupLongPageAwardBox = function() {
            g_config.$$isLongPageAwardBox = !0,
            e.poupAward()
        },
        e.poupAward = function() {
            r(3, !0)
        },
        e.poupRegAward = function(e) {
            c(4, e)
        },
        e.poupRank = function(e) {
            s(1, e)
        },
        e.updateContactView = function(t) {
            var a = !1,
            i = $.parseJSON(g_config.contactNoDraw);
            if (i && "object" == typeof i[0]) {
                $contactGroup = $("#awardContactInfo .contactGroup"),
                $contactGroup.empty();
                for (var n = 0; n < i.length; n++) {
                    var o = i[n];
                    if (o.isOpen) {
                        var s = e.encodeHtml(o.name),
                        r = t[o.key];
                        if (null != r && "" != r) {
                            r = e.encodeHtml(r);
                            var g = '<div class="contactItem contact-' + o.key + ' hide" style="display: block;">' + s + "： <span>" + r + "</span></div>";
                            $contactGroup.append(g),
                            a = !0
                        }
                    }
                }
            } else {
                t.ausername && ($("#awardContactInfo .contactName").show(), $("#awardContactInfo .contactName span").text(t.ausername), a = !0),
                t.aphone && ($("#awardContactInfo .contactPhone").show(), $("#awardContactInfo .contactPhone span").text(t.aphone), a = !0);
                var c = t.aadress && t.aadress.replace(/,/g, "");
                c && ($("#awardContactInfo .contactAddress span").text(c), $("#awardContactInfo .contactAddress").show(), a = !0)
            }
            $("#awardContactInfo").toggle(a)
        },
        parseAward = function(e) {
            if (!e._award && e.awardInfo) {
                var a = g_config.$$awardTypeInfo,
                i = e._award = $.parseJSON(e.awardInfo);
                if (i.$type = $.extend(!0, {},
                a.def, a[v(i.awardtype)]), 1 == i.awardtype ? (void 0 === i.jumptype && (i.jumptype = 0), $.extend(i.$type, i.$type[i.jumptype])) : 2 == i.awardtype && t.afterWxCard ? ($.extend(i.$type, i.$type[i.cashtype]), 1 == i.cashtype && $.extend(i.$type, i.$type[i.onlinect])) : -1 != $.inArray(i.awardtype, [5, 6, 7, 8, 11, 12, 13, 15, 16, 17, 26, 27]) ? (void 0 === i.payment && (i.payment = 0), $.extend(i.$type, i.$type[i.payment])) : 10 == i.awardtype && $.extend(i.$type, i.$type[i.cashtype]), i["$cashsite_" + i.$type.sitetype] = i.cashsite, i.$opqrc = i.opqrc, t.afterWxCard && "auto" != i.$type.qrcode && (i.$opqrc = i.$type.qrcode), void 0 === i.attention && (i.attention = i.oct ? 2 : 1), i.genewxcard) ! e.depositTime || (e.depositTime, (new Date).getTime());
                e.awardCode || (e.awardCode = e.custom && e.custom.length > 0 ? e.custom: e.code ? e.code: e.code1, e.anwei && (e.awardCode = e.cusCode && e.cusCode.length > 0 ? e.cusCode: e.code1)),
                e.isTrash && (e.codeStatus = 4)
            }
        },
        e.changeCodeInfo = function(t, a) {
            e.awardList && ($.each(e.awardList,
            function(i, n) {
                n.code == t.code && (e.awardList[i] = a)
            }), e.showAwardDetail(e.awardList))
        },
        e.checkHasInternalAward = function(e) {
            for (var t = !1,
            a = !1,
            i = g_config.awardList,
            n = 0,
            o = g_config.awardNum; n < o; n++) {
                if (5 == i[n].mainStyle) {
                    a = !0;
                    break
                }
            }
            for (n = 0, o = g_config.awardNum; n < o; n++) {
                if (9 == i[n].mainStyle) {
                    t = !0;
                    break
                }
            }
            return t = t || 5 == g_config.joinLimit && g_config.isOpenInternalCreditJoin,
            a = a || 2 == g_config.joinLimit && g_config.isOpenInternalCreditJoin,
            {
                hasInternalAward: t || a,
                isOpenYkGift: t,
                isOpenMallGift: a
            }
        },
        e.showAwardDetail = function(t, a) {
            if (!_manage || !e.showAwardDetail.hasRun) {
                if (75 == g_config.style) var i = $("#myAwardInfo");
                else i = $("#awardInfo");
                i.html("");
                for (var n = "",
                o = $("#resule-gift-sucImg").data("openCode"), s = null, r = 0; r < t.length; r++) {
                    var g = t[r];
                    if (_manage) var c = g.awardtype;
                    else c = $.parseJSON(g.awardInfo).awardtype;
                    var d = "",
                    l = !1,
                    f = !1,
                    u = !1,
                    p = Fai.checkBit(g.flag, 512),
                    h = null,
                    m = (_manage ? g.$type: g_config.$$awardTypeInfo[v(c)]).isAfterPayType || !1;
                    if (_manage) {
                        h = g;
                        var w = 1,
                        _ = m && h.isOpenAfterPay ? "支付立享": "未兑奖";
                        g.codeStatus = 2,
                        l = 2 == g.mainStyle,
                        f = [5, 9].indexOf(g.mainStyle) > -1,
                        u = 6 == g.mainStyle
                    } else {
                        parseAward(g),
                        h = g._award;
                        w = g.anwei ? g.awardLevel: g.level,
                        _ = !m || !h.isOpenAfterPay || p || g.isTrash || 5 == g.codeStatus ? e.getStatusName(g.codeStatus) : e.getPayStatusName(g.codeStatus);
                        l = 2 == g._award.mainStyle,
                        f = [5, 9].indexOf(g._award.mainStyle) > -1,
                        u = 6 == g._award.mainStyle,
                        g._award.genewxcard && ($("#awardCollectionBtn").attr("isWxCard", !0), "DATE_TYPE_FIX_TERM" != g._award.t_type || g.depositTime || (d = "领取后" + (0 == g._award.cfbt ? "当": g._award.cfbt) + "天生效，有效天数" + g._award.cft + "天"))
                    }
                    var y = !m || !h.isOpenAfterPay || p || g.isTrash || 5 == g.codeStatus ? /0|2|7|8/.test(g.codeStatus) ? "": "useless": /1|2|4|5|9/.test(g.codeStatus) ? "pay": "useless";
                    if (g_config.$$isLongPageAwardBox) n += '<div id="codeInfo' + r + '" class="codeInfoBox MyAwardSimpleBox newVersionCard_myGiftBox"><div class="giftBgImg"></div><div class="myGiftBoxDetail flexBox justify-content_flex-justify"><div class="awardLimitBox leftBox"><span class=\'awardText awardLevel awardStyle title\'></span><span class="afterPayStyle"></span><span class=\'colon\'>：</span><span class=\'awardText awardName\'></span></div><div class="rightBox"><span class="getDetailBtn awardInfoDetail">' + (m && h.isOpenAfterPay ? "支付立享": "查看详情") + '</span></div></div><div class="limitTimePay hide">※待支付剩余<span class="payTimeDetail"></span>，逾期奖品失效</div></div>';
                    else[117, 119].indexOf(g_config.style) > -1 ? n += '<div id="codeInfo' + r + '" class="codeInfoBox"><div class="leftBox"><span class="awardStyle ellipsis"></span>：<span class="awardName"></span></div><div class="rightBox"><div class="getDetailBtn">前往兑奖</div></div></div>': n += '<div id="codeInfo' + r + '" class="codeInfoBox' + (9 == c ? " isJZCoupon": "") + (g_config.isYKY || l || f || u ? " isYKY": "") + '" _level="' + w + '"><div class="isEmptyAward"><p class="awardStyle ellipsis"></p><p class="afterPayStyle ellipsis"></p><p class="awardName"></p><p class="limitTimePay hide">待支付剩余<span class="payTimeDetail"></span>，逾期奖品失效</p><div class="goDetailIcon"></div></div><div class="dashedLine"></div><div class="noPartnersBox"><div class="codeperiod"><span class="awardTypeName"></span>：' + ("" != d ? d: '<span class="awardBgTime"></span> 至 <span class="awardEndTime"></span>') + '</div><div class="codeStatusName ' + y + '">' + _ + "</div></div></div>";
                    var x = !!g && (m && (g.awardInfo ? JSON.parse(g.awardInfo) : {}).isOpenAfterPay);
                    _manage || void 0 === o || o != g.awardCode && o != g._awardCode || !(!x || x && p) || (s = g)
                }
                i.html(n),
                g_config.$$isLongPageAwardBox && (hg.edit.initEdit("myAwardInfoBox"), hg.fire("setPageStyleColor"));
                var I = $(".limitTimePay .payTimeDetail");
                $.each(t,
                function(t, a) {
                    $(".goDetailIcon").height($(".isEmptyAward").height());
                    var n = _manage ? a: a._award,
                    o = i.find("#codeInfo" + t),
                    s = (_manage ? n.$type: g_config.$$awardTypeInfo[v(n.awardtype)]).isAfterPayType || !1;
                    e.watch("awardList[0].style", a.awardStyle,
                    function(e) {
                        o.find(".awardStyle").text(e).toggle(!(s && n.isOpenAfterPay))
                    }),
                    e.watch("awardList[0].name", a[a.anwei ? "award": "awardName"],
                    function(e) {
                        o.find(".awardName").text(e)
                    });
                    var r, g, c = 6 == a.codeStatus && !a.isTrash;
                    if (e.watch('awardList[0].needlessconsume && awardList[0].$type.sitetype == "url"', c,
                    function(e) {
                        o.find(".codeStatusName").toggle(!e)
                    }), e.watch("awardList[0].awardtype", n.awardtype,
                    function(e) { [31, 32, 33].indexOf(e) > -1 ? o.toggleClass("isJZCoupon", !1).find(".noPartnersBox, .dashedLine").hide() : o.toggleClass("isJZCoupon", 9 == e).find(".noPartnersBox, .dashedLine").toggle(9 != e)
                    }), !g_config.isYKY) {
                        e.watch("awardList[0].$type.deadline", n.$type.deadline,
                        function(e) {
                            o.find(".awardTypeName").text(e)
                        }),
                        e.watch("awardList[0].cbt", n.cbt,
                        function(e) {
                            o.find(".awardBgTime").text(e.substring(0, 10).replace("-", ".").replace("-", "."))
                        }),
                        e.watch("awardList[0].cet", n.cet,
                        function(e) {
                            o.find(".awardEndTime").text(e.substring(0, 10).replace("-", ".").replace("-", "."))
                        });
                        var d = Fai.checkBit(a.flag, 512);
                        e.watch("awardList[0].afterPayStyle", n.afterPayStyle,
                        function(e) {
                            o.find(".afterPayStyle").text((e || "").replace("#money#", n.payMoney / 100).replace("#val#", "元立享")).toggle(s && n.isOpenAfterPay)
                        }),
                        e.watch("awardList[0].payTimeLimit", n.payTimeLimit,
                        function(e) {
                            if (e) {
                                var t = (n.payTime && n.payTime.pay_day > 0 ? n.payTime.pay_day + "天": "") + (n.payTime && n.payTime.pay_hour > 0 ? n.payTime.pay_hour + "小时": "") + (n.payTime ? n.payTime.pay_min: 0) + "分钟" || 0;
                                o.find(".limitTimePay").toggle(s && n.isOpenAfterPay && e && !d).find(".payTimeDetail").text(t)
                            }
                        }),
                        !_manage && s && n.isOpenAfterPay && !d && n.payTimeLimit && (r = t, g = 24 * n.payTime.pay_day * 3600 + 3600 * n.payTime.pay_hour + 60 * n.payTime.pay_min, e.countDownTime({
                            endTime: a.awardTime + 1e3 * g
                        }).on("change",
                        function(e, t) {
                            I.eq(r).text(t)
                        }).on("end",
                        function() {
                            I.eq(r).parent().hide(),
                            g_config.$$isLongPageAwardBox ? (getPageStyleColorVal(), $(".MyAwardSimpleBox .awardInfoDetail").eq(r).text("已失效").addClass("useless").removeClass("getDetailBtn"), $(".MyAwardSimpleBox .myGiftBoxDetail").eq(r).addClass("disabled")) : $(".codeStatusName").eq(r).text("已失效").addClass("useless").removeClass("pay")
                        }))
                    }
                    o.data("data", a)
                }),
                s && !a && (e.openAwardDetail(s), $("#resule-gift-sucImg").removeData("openCode")),
                _manage && (e.showAwardDetail.hasRun = !0)
            }
        },
        e.openStoreLocation = function(e) {
            var t = $(e).parent().data("store"),
            a = $.parseJSON(t.point);
            wx.openLocation({
                latitude: a.lat,
                longitude: a.lng,
                name: t.name,
                address: t.address,
                scale: 22,
                infoUrl: ""
            })
        },
        function() {
            function a(t, a) {
                if (g_config.afterLinkModify) {
                    if (e.shouldRegInfo([2, 3, 4])) return ! 0
                } else if (void 0 !== t.continfo) {
                    if (a && (0 == gameType || 4 == gameType || 5 == gameType) && g_config.wxAward.oplink) {
                        var i = t.continfo,
                        n = 2 & i,
                        o = 4 & i,
                        s = 1 & i && !g_config.awardUsername,
                        r = n && !g_config.awardPhone,
                        g = o && !g_config.awardAddress;
                        if (s || r || g) return ! 0
                    }
                } else if (!g_config.awardUsername && !g_config.awardPhone && !g_config.awardAddress && g_config.award && (0 == gameType || 4 == gameType) && g_config.wxAward.oplink) return ! 0;
                return ! 1
            }
            function i(e) {
                if ($(document).find(".awardCloseIcon").click(), [31, 32, 33].indexOf(e) > -1) {
                    var t = "";
                    switch (e) {
                    case 31:
                        t = "integral/memberIntegral";
                        break;
                    case 32:
                        t = "coupon/list";
                        break;
                    case 33:
                        t = "remain/balance"
                    }
                    return $(".gameBox,.home,.body").removeClass("overflow-y-hidden"),
                    wx.miniProgram.navigateTo({
                        url: "/pages/" + t
                    })
                }
            }
            function n(t, a, i) {
                var n = $("#awardDetailBox");
                if (t && 0 != t.length) {
                    if (null != a && null != i) {
                        for (var s = 0; s < t.length; s++) {
                            var r = t[s],
                            g = $.parseJSON(r.point),
                            c = e.computeDistance(a, i, g.lat, g.lng);
                            r.distance = parseInt(c),
                            e.tlog("distance", r.distance)
                        }
                        t.sort(function(e, t) {
                            return e.distance - t.distance
                        })
                    } else t.sort(function(e, t) {
                        return t.id - e.id
                    });
                    var d = t[0],
                    l = $("#useStoreBox");
                    if (l.find(".storeInfoBox").data("store", d), o(d, l.find(".storeInfoBox")), n.find("#useStoreBox").removeClass("initHide"), n.find("#useStoreBox").canShow("listNotNull"), t.length > 1 ? (l.find(".storeNumText").show(), l.find("#storeNum").text(t.length), l.find(".moreBtn").show()) : (l.find(".storeNumText").hide(), l.find(".moreBtn").hide()), !_manage && t.length > 1) {
                        var f = $("#storeListBox .list");
                        f.empty();
                        for (s = 0; s < t.length; s++) {
                            r = t[s];
                            var u = $('<div class="storeInfoBox"><div class="locationBtn" onclick="HdGame.openStoreLocation(this)"><i class="iconfont icondizhi awardDetailStyleColor"></i></div><div class="info"><div class="storeNameBox"><span id="storeName"></span><span id="distance"></span></div><div class="storeAdress"></div></div></div>');
                            u.data("store", r),
                            o(r, u),
                            f.append(u)
                        }
                        var p = hg.edit.getCrrCss(g_config.$$needNewVersion ? "awardDetailStyleColor": "pageStyleColor")[0].css[0].val;
                        $("#storeListBox .locationBtn .awardDetailStyleColor").css("color", p),
                        $("#storeListBox").css("backgroundColor", p)
                    }
                } else n.find("#useStoreBox").mustHide("listNotNull")
            }
            function o(e, t) {
                var a = "",
                i = "",
                n = "";
                if (e) {
                    a = e.name,
                    i = function(e) {
                        if ("北京" == e.province || "天津" == e.province || "上海" == e.province || "重庆" == e.province) return e.city + e.county + e.address;
                        return e.province + e.city + e.county + e.address
                    } (e);
                    var o = e.distance;
                    o && o > 0 && (n = o > 1e3 ? parseInt(o / 1e3) + "km": o + "m")
                }
                t.find("#storeName").text(a),
                t.find(".storeAdress").text(i),
                t.find("#distance").text(n)
            }
            e.checkContact = a,
            e.openAwardDetail = function(o, s) {
                e.tlog("=========comeInOpenAward111"),
                e.tlog("awardTestttttt=========14", $("#awardDetailBox"));
                var r = $("#awardDetailBox");
                e.tlog("awardTestttttt=========11");
                var g = $("#ticketDetailBox");
                e.tlog("awardTestttttt=========12");
                var c = r.find("#bottomCusBtnBox");
                e.tlog("awardTestttttt=========13");
                var d = {};
                if (e.tlog("awardTestttttt=========1"), _manage) $$(function() {
                    d = o = parent.game.$cAward
                });
                else {
                    if (e.adsenseCEndExposure(17), r.find("#button-ad-slot-17 .moreActive").off("touchstart").on("touchstart",
                    function() {
                        e.handleMoreActive(17)
                    }), o && o.awardInfo || (o = $(this).data("data")), $(".codeInfoBox.checked").removeClass("checked"), $(this).addClass("checked"), parseAward(o), (d = o._award) && d.isRedeemMsgNotice && 0 == g_config.gameType && "DATE_TYPE_FIX_TIME_RANGE" == d.t_type && [0, 1].indexOf(d.mainStyle) > -1 && !s) {
                        var l = this;
                        return e.Res.loadg("wxMsgFunc").then(function() {
                            return WxMsgFunc.openWxMessage({
                                msg: "为防止错过兑奖时间，是否同意接收兑奖消息通知？",
                                type: 3,
                                awardLevel: d.level
                            }).then(function() {
                                return e.openAwardDetail.call(l, o, !0)
                            })
                        })
                    }
                    if (g_config.award = o, g_config.wxAward = d, !g_config.$$isPayTypeNewActivity) if (Fai.checkBit(o.flag, 64)) e.Res.loadg("fission").then(function() {
                        if (Fission.isNeedFisLinkInfo([2, 3, 4])) return g_config.$$isOpenGameVer2 ? zgnpyVue.$refs.aUserInfo.show(arguments, this, !0) : e.aUserInfo.show(arguments, this, !0)
                    });
                    else if ( - 1 === [120].indexOf(g_config.style) && a(d, o)) return g_config.$$isOpenGameVer2 ? zgnpyVue.$refs.aUserInfo.show(arguments, this) : e.aUserInfo.show(arguments, this);
                    if (g_config.isYKY) return void(function(a) {
                        if (isPublish) {
                            var i = "_loadYKY_" + a.awardCode;
                            if (!e.openAwardDetail[i]) {
                                var n = $.parseJSON(a.prop),
                                o = function(t) {
                                    e.replaceUrlByTime(),
                                    window.open(t)
                                };
                                return n && n.ykyurl ? (e.tlog("getYKYAwardUrl", n), void o(n.ykyurl)) : !g_config.ykyRelationId || void(e.openAwardDetail[i] = $.ajax({
                                    type: "post",
                                    url: g_config.apiAjaxUrl + "yky/getYKYAwardUrl?gameId=" + t.gameId + "&openId=" + t.openId + "&code=" + a.awardCode + "&ykyRelationId=" + g_config.ykyRelationId,
                                    error: function() {
                                        e.showMsgToast("服务繁忙，请稍候重试")
                                    },
                                    success: function(t) {
                                        e.tlog("getYKYAwardUrl", t);
                                        var i = $.parseJSON(t);
                                        e.tlog("result", i),
                                        i.success ? 0 !== i.status && (a.prop = $.toJSON({
                                            ykyurl: i.data.url
                                        }), o(i.data.url)) : e.showMsgToast(i.data.failMessages)
                                    },
                                    complete: function() {
                                        e.hideLoadToast(),
                                        delete e.openAwardDetail[i]
                                    }
                                }))
                            }
                        } else e.showMsgToast("活动尚未发布<br>无法查看奖品详情")
                    } (o) && (g_config.$$isOpenGameVer2 ? zgnpyVue.$refs.aUserInfo.show(arguments, this) : e.aUserInfo.show(arguments, this)));
                    if ( - 1 !== [106, 111].indexOf(g_config.style)) return hg.fire("getAwardEvent");
                    if (900 != o.level && [2, 5, 6, 9].indexOf(o._award.mainStyle) > -1) return function(t) {
                        var a = t._award;
                        if (!isPublish) return e.showMsgToast("活动尚未发布<br>无法查看奖品详情",
                        function() {
                            9 == a.mainStyle && $(document).find(".awardCloseIcon").click()
                        });
                        if (Fai.checkBit(t.flag, 256)) {
                            if (9 == a.mainStyle) return i(a.awardtype);
                            var n = $.parseJSON(t.prop);
                            n && n.cdUrl ? ( - 1 == n.cdUrl.indexOf("http") && (n.cdUrl = "http://" + n.cdUrl), window.location.href = n.cdUrl) : e.showMsg("当前该礼品无详情介绍")
                        } else {
                            e.showLoadToast("数据加载中");
                            var o = [2, 6].indexOf(a.mainStyle) > -1 ? "distributePartnerGift": "distrbuteInternalGift";
                            $.ajax({
                                type: "post",
                                url: g_config.apiAjaxUrl + "partner/" + o + "?uid=" + g_config.uid + "&gameId=" + g_config.gameId + "&playerId=" + g_config.playerId + "&awardCode=" + t.awardCode
                            }).done(function(t) {
                                var n = $.parseJSON(t);
                                if (n.success) {
                                    if (9 == a.mainStyle) return i(a.awardtype);
                                    n.cdUrl ? window.location.href = n.cdUrl: e.showMsg("派发成功，当前该礼品无详情介绍", !0, "知道了",
                                    function() {
                                        location.reload(!0)
                                    })
                                } else e.showMsg(n.msg || "系统繁忙，请稍后重试")
                            }).always(function() {
                                e.hideLoadToast(),
                                e.otherAjaxComplete()
                            })
                        }
                    } (o); !
                    function(e, t) {
                        var a = $(".codeDetailInfoBox").hide(),
                        i = $("#codeStatusBox").show(),
                        n = i.find("#codeStatusInfo").show(),
                        o = i.find("#codeStatusBtn"),
                        s = i.find("#codeStatusTips").hide(),
                        r = $.parseJSON(t.awardInfo).awardtype;
                        if (s.css("fontSize", ""), $("#awardCollectionBtn").show(), o.show(), 4 == t.codeStatus) o.html("已作废"),
                        5 == t.status ? n.html("微信检测到您有刷红包嫌疑，为保证公平公正<br>已取消您的领取资格") : 4 == t.status ? n.html("红包超过24小时未领取，已退回至商家账户") : n.html("商家已将该兑奖码设置为作废<br>详情请联系商家");
                        else if (1 == t.codeStatus) o.html("已兑奖"),
                        n.hide();
                        else if (5 == t.codeStatus) {
                            o.html("已失效");
                            var g = 5 == r ? "红包已失效，详细请联系商家": "已失效，详细请联系商家";
                            n.html(g)
                        } else if (3 == t.codeStatus) o.html("已过期"),
                        n.hide();
                        else if (t.theGiftDate < 0) {
                            o.html("未到兑奖时间"),
                            n.hide(),
                            s.show().find(".giftNameA").text(e.$type.collect);
                            var c = -1 * t.theGiftDate / 864e5,
                            d = (new Date).setHours(23, 59, 59),
                            l = c < 1 && t.codeStartTime <= d ? "今天": Math.ceil(c) + "天后";
                            s.find(".targetDateMin").text(l),
                            e.genewxcard && (e.depositTime || (e.depositTime = t.depositTime), e.depositTime ? (s.show().find(".giftNameA").text("打开微信卡券"), s.css("fontSize", "")) : (s.show().find(".giftNameA").text("领取到微信卡包"), o.hide(), s.css("fontSize", "0.75rem")))
                        } else {
                            var f = e.depositTime || t.depositTime;
                            e && e.genewxcard && !f ? (o.hide(), n.text("请先领取到微信卡包，以获取优惠码")) : (a.show(), i.hide())
                        }
                        var u = a.find(".redPacketTip").hide(),
                        p = a.find(".codeOptInfo").canShow("redPacket");
                        Fai.checkBit(t.flag, 1) && (0 == t.status ? (a.show(), u.show().html("您的红包正在发送中，请耐心等待"), p.mustHide("redPacket")) : 1 == t.status ? n.show().html("红包已发送，请留意服务通知！") : 2 == t.status && (a.show(), u.show(), p.mustHide("redPacket"), "FREQ_LIMIT" == t.result_code ? u.html("目前领取人数过多，请稍后点击“立即领取”重试！") : u.html("红包发送失败，点击“立即领取”重试，如多次失败请联系管理员！")))
                    } (d, o);
                    var f = o.gameid || o.gameId;
                    $("#awardCodeLayer,#awardDetailBox").find(".codeImg").attr("src", "http://" + e.gameDomain + "/manage/qrCode.jsp?cmd=qrurl&siteUrl=" + e.encodeUrl(900 == o.awardLevel ? "id=" + o.id + "&code=" + o.code1 + "&gameId=" + f: "code=" + o.awardCode + "&gameId=" + f)),
                    r.find(".code,.copyCode").text(o.awardCode),
                    $("#awardCodeLayer").find(".code").text(o.awardCode),
                    r.find(".code").attr("code", o.code);
                    var u = r.find("#bottomCusBtnInfo");
                    e.log(u);
                    var p = o._award;
                    if (u.removeAttr("href").unbind("click").off(".cusBtn"), $("#awardDetailBox #ticketDetailBox .addressLine .guideMap").data("pointData", p.addressData), t.afterWxCard) {
                        if ("wxUrl" == d.$type.sitetype) {
                            var h = /\?/.test(g_config.sendGiftUrl),
                            m = function(e) {
                                var t = g_config.award._award,
                                a = 27 == t.awardtype ? t.freeGiftTypeItem.val: t.giftTypeItem.val,
                                i = e + (h ? "&": "?") + "typeB=" + a + "&awardCode=" + o.awardCode + "&gameId=" + g_config.gameId + "&jsHostId=" + g_config.jsHostId;
                                u.attr("href", i)
                            }; - 1 != $.inArray(d.awardtype, [6, 7, 26]) ? m(g_config.sendGiftUrl) : -1 != $.inArray(d.awardtype, [8, 11, 12, 13, 15, 16, 17, 27]) ? m(g_config.sendVideoVipUrl) : e.checkDiffRedPacketSendWay().then(function(t) {
                                if (t) u.click(function() {
                                    e.showMsgToast2({
                                        bodyMsg: "商家更换了红包派发方式，当前无法派发红包，请联系商家"
                                    })
                                });
                                else {
                                    var a = g_config.redPacketUrl + "&redCode=" + o.awardCode + "&jsHostId=" + g_config.jsHostId + "&canal=" + fromCanal;
                                    u.attr("href", a)
                                }
                            })
                        } else if ("url" == d.$type.sitetype) {
                            var w = d.cashsite.indexOf("https:") > -1 ? "https:": "http:",
                            _ = e.fixUrl(w + "//" + d.cashsite.replace(/^(http(s)?:\/\/)+/g, ""));
                            /[?&]hd_code=djm\b/.test(_) && (_ = e.setUrlArg(_, ["hd_code", o.awardCode])),
                            "http://" == _ ? u.click(function() {
                                e.showMsgToast2({
                                    bodyMsg: "商家暂未填写兑奖网页链接<br/>请联系商家"
                                })
                            }) : _fromCardBag || _fromHdportalM ? u.click(function() {
                                e.copyContent3(_)
                            }) : (_.indexOf("w.url.cn") > -1 && (_ += "#wechat_redirect"), u.click(function() {
                                window.open(_)
                            }))
                        } else "taopw" == d.$type.sitetype ? u.off(".cusBtn").on("click.cusBtn",
                        function() { !
                            function(t, a) {
                                var i = $("#taopwPoup");
                                function n() {
                                    var e = $("#codeStatusBtn"),
                                    n = e.text();
                                    i.show();
                                    var o = t.cashsite_taopw_decode ? decodeURIComponent(t.cashsite_taopw_decode) : t.cashsite;
                                    i.find(".taopwtext").text(o),
                                    e.is(":visible") && n ? i.find(".codetext").text(n) : i.find(".codetext").text(a.awardCode);
                                    var s = Fai.checkBit(a.flag, 32) ? Fai.checkBit(a.flag, 16) : 6 == a.codeStatus;
                                    i.toggleClass("needlessconsume", s);
                                    var r = i.find(".attentionPoup");
                                    r.css("margin-top", Math.max($(window).height() - r.outerHeight(), 0) / 2)
                                }
                                0 == i.length ? ((i = $('<div id="taopwPoup" class="homePoupMask"><div class="attentionPoup"><div class="close"></div><div class="tips tips1">点击“一键复制”按钮复制淘口令</div><div class="tips taopwtext"></div><div class="tips copyBtn">一键复制</div><div class="tips tips2">在手机中打开淘宝APP即可进入对应商品链接</div><div class="needconsume"><div class="tips tips3">联系客服并发送优惠码即可兑奖<br><span class="note">注：淘口令优惠券可直接领取</span></div><div class="tips tips4">您的优惠码</div><div class="tips codetext"></div></div></div></div>').appendTo("body")).find(".close").on("click",
                                function(e) {
                                    i.hide()
                                }), e.showLoadToast("数据加载中"), e.Res.load("js_clipboard").then(function() {
                                    e.hideLoadToast(),
                                    new ClipboardJS(i.find(".copyBtn"), {
                                        text: function() {
                                            return i.find(".taopwtext").text()
                                        }
                                    }).on("success",
                                    function(t) {
                                        e.showSuccessToast("复制成功")
                                    }),
                                    n()
                                })) : n()
                            } (d, o)
                        }) : "img" == d.$type.sitetype ? (2 == d.awardtype && 1 == d.cashtype && 1 == d.onlinect || 2 == d.awardtype && 3 == d.cashtype || $.inArray(d.awardtype, [5, 6, 7, 8, 11, 12, 13, 15, 16, 17, 26]), u.off(".cusBtn").on("click.cusBtn",
                        function() {
                            if (_fromCardBag && e.logDog(1000314, 8), g_config.$$isOpenGameVer2) return e.showAttentionPoup({
                                url: g_config.qrCodeUrl,
                                isMinAppCode: d && 2 == d.qrCodeType || !d && 2 == g_config.qrCodeType
                            });
                            e.Res.loadg("attentionUs").then(function() {
                                e.showAttentionPoup({
                                    url: g_config.qrCodeUrl,
                                    isMinAppCode: d && 2 == d.qrCodeType || !d && 2 == g_config.qrCodeType
                                })
                            })
                        })) : "text" == d.$type.sitetype ? u.off(".cusBtn").on("click.cusBtn",
                        function() { !
                            function(t, a) {
                                var i = $.parseJSON(t.tlmt),
                                n = (new Date).getDay(),
                                o = !1,
                                s = !0;
                                if (0 != g_config.status && (s = s || g_config.verInfo.createAuthVer >= 2), o = 1 == i.length && 8 == i[0] || i.some(function(e) {
                                    return 7 == e && (e = 0),
                                    e == n
                                }), t.iscancelver && s) {
                                    if (1 == a.codeStatus) return void e.statusMsg("该兑奖码已被核销！", "");
                                    if (3 == a.codeStatus) return void e.statusMsg("该兑奖码已过期！", "");
                                    if (4 == a.codeStatus) return void e.statusMsg("该兑奖码已作废！", "");
                                    if (!o) return void e.showMsg("该奖项未到可用时段！");
                                    var r = {
                                        hasHead: !0,
                                        headMsg: "请联系核销员确认核销",
                                        bodyMsg: '<div class="weui-cell" style="border: 1px solid #D5D5D6"><div class="weui-cell__bd"><input class="weui-input" type="text" placeholder="请输入核销码" style="color: #000" onblur="window.scroll(0, 0);"></div></div>',
                                        isTwoFootBtn: !0,
                                        isFocusInput: !0,
                                        primaryBtnText: "确认核销",
                                        defaultBtnText: "取消",
                                        primaryBtnFn: function(i, n) {
                                            var o = n.find(".weui-input").val().trim().toLowerCase();
                                            if ("" == o) return setTimeout(function() {
                                                e.statusMsg("请先输入核销码", "")
                                            },
                                            200),
                                            "stop";
                                            t.vercodeFlow || (t.vercodeFlow = !0, $.ajax({
                                                url: g_config.apiAjaxUrl + "consumeCode/checkVerificationCode",
                                                type: "post",
                                                data: {
                                                    storeId: g_config.storeId,
                                                    areaId: g_config.areaId,
                                                    vcode: o,
                                                    id: g_config.playerId,
                                                    gameId: g_config.gameId,
                                                    openId: g_config.openId,
                                                    code: a.code,
                                                    extra: g_config.extra
                                                },
                                                success: function(t) {
                                                    t = JSON.parse(t),
                                                    e.tlog("cancelVer", t),
                                                    $("#verifictionCodeLayer").hide(),
                                                    n.find(".weui-input").val("");
                                                    var i = a.codeStatus;
                                                    if (t.success ? (e.statusMsg(t.msg, ""), a.codeStatus = 1) : ( - 6 == t.rt ? a.codeStatus = 1 : -15 == t.rt ? a.codeStatus = 3 : -12 == t.rt ? a.codeStatus = 4 : 71 == t.rt && (a.codeStatus = 6), e.statusMsg(t.msg, 0, 0, "",
                                                    function() { - 1 != t.rt || $("#bottomCusBtnInfo").click()
                                                    })), i != a.codeStatus) {
                                                        var o = {
                                                            gameId: g_config.gameId,
                                                            openId: g_config.openId
                                                        };
                                                        g_config.isPaymentGame ? o.mchCode = a.code: o.code = a.code,
                                                        $.ajax({
                                                            type: "post",
                                                            url: g_config.apiAjaxUrl + "rank/getGiftList",
                                                            data: o,
                                                            success: function(t) {
                                                                var i = $.parseJSON(t);
                                                                i.success && (g_config.isPaymentGame ? (e.tlog(a), e.openAwardDetail(a)) : (e.changeCodeInfo(a, i.list[0]), e.openAwardDetail(i.list[0])))
                                                            }
                                                        })
                                                    }
                                                },
                                                error: function() {
                                                    e.statusMsg("服务器繁忙，请稍后再试", "")
                                                },
                                                complete: function() {
                                                    t.vercodeFlow = !1
                                                }
                                            }))
                                        },
                                        defaultBtnFn: function(e) {
                                            return e.find(".weui-input").val(""),
                                            "delay"
                                        }
                                    };
                                    e.showMsgToast2(r)
                                } else $("#awardCodeLayer").show()
                            } (d, o)
                        }) : "minUrl" == d.$type.sitetype ? 6 == d.cashtype && u.off(".weappBtn").on("click.weappBtn",
                        function() {
                            e.showMsg("当前微信版本过低，无法跳转小程序")
                        }) : "serviceWx" == d.$type.sitetype && u.off(".cusBtn").on("click.cusBtn",
                        function() { !
                            function(t) {
                                var a = $("#serviceWxPoup");
                                if (!t.serviceWxImg) return e.showMsg("商家暂未上传客服微信二维码，请联系商家");
                                0 == a.length ? e.Res.loadg("attentionUs").then(function() {
                                    a = $(_fromHdportalM ? '<div id="serviceWxPoup" class="homePoupMask"><div class="homePoupInner attentionPoup cardBag"><div class="container"><img class="qrImg serviceWxImg" src="' + t.serviceWxImg + '" /><div class="tipsContainer"><div>请保存图片</div><div>打开“<span class="wxScanLabel"><span class="label">微信扫一扫</span><div class="underline"></div></span>”识别二维码</div></div></div><div class="bottom">凡科互动-你的活动营销专家</div></div></div>': '<div id="serviceWxPoup" class="homePoupMask"><div class="content flexBox flex-column justify-center align-center"><img class="serviceWxImg" src="' + t.serviceWxImg + '" /><div class="flexBox justify-center align-center"><div class="merchantIcon"></div><div><div class="p1">长按识别二维码</div><div class="p2">添加商家客服微信</div></div></div></div><div class="closeBtn"></div></div>').appendTo("body").show(),
                                    _fromHdportalM ? a.on("click",
                                    function(e) {
                                        $(e.target).hasClass("homePoupMask") && a.hide()
                                    }) : a.on("click", ".closeBtn",
                                    function() {
                                        a.hide()
                                    })
                                }) : a.show().find(".serviceWxImg").attr("src", t.serviceWxImg)
                            } (d)
                        });
                        o && (6 == o.codeStatus ? o.aid && 17396608 == o.aid || $(".codeImgBox .codeLine").hide() : $(".codeImgBox .codeLine").show())
                    } else $(".awardCusText").toggle(d.optx),
                    r.find("#awardCusTextInfo").text(d.txc);
                    if (d.genewxcard ? c.hdToggle("codeStatus", o.theGiftDate < 0 || 1 != o.codeStatus) : c.find("#bottomCusBtnInfo").hdToggle("codeStatus", !(o.theGiftDate < 0 || ["text", "serviceWx"].indexOf(d.$type.sitetype) > -1 && -1 != $.inArray(o.codeStatus, [4, 1, 5, 3]))), e.logDog(1000085), 3 == d.attention) $("#awardCusBtnInfo").off(".cusBtn").on("touchend.cusBtn",
                    function() {
                        if (e.logDog(1000086), _fromCardBag && e.logDog(1000314, 8), g_config.$$isOpenGameVer2) return e.showAttentionPoup({
                            url: d.attentionimg,
                            isMinAppCode: d && 2 == d.qrCodeType || !d && 2 == g_config.qrCodeType
                        });
                        e.Res.loadg("attentionUs").then(function() {
                            e.showAttentionPoup({
                                url: d.attentionimg,
                                isMinAppCode: d && 2 == d.qrCodeType || !d && 2 == g_config.qrCodeType
                            })
                        })
                    });
                    else if (2 == d.attention) {
                        var v = $("#awardCusBtnInfo");
                        if (2 == d.msJumpType) v.off(".weappBtn").on("click.weappBtn",
                        function() {
                            e.showMsg("当前微信版本过低，无法跳转小程序")
                        }),
                        e.insertWxOpenLaunchWeapp({
                            id: "jumptoMinappBtn_Diy",
                            type: 2,
                            btnName: d.btn,
                            insertOuter: !0,
                            insertEle: v,
                            mpAppId: d.diyMinAppId,
                            mpPagePath: d.diyMinAppPath
                        });
                        else {
                            v.off(".cusBtn").unbind("click");
                            var y = e.fixUrl(d.btl);
                            _fromCardBag || _fromHdportalM ? v.click(function() {
                                e.copyContent3(y)
                            }) : v.attr("href", y)
                        }
                        $("._jumptoMinappBtn_Diy").toggle(2 == d.msJumpType)
                    }
                    var x = $("#hostInfoDetail").off("click.hostDetail");
                    d.isOpenHostInfo && x.on("click.hostDetail",
                    function() {
                        e.jumpToHostUrl(!0)
                    }),
                    $("#awardCusBtnInfo").hdToggle("attention", 1 != d.attention && !(e.UA.compareWxVer("7.0.12") && 2 == d.attention && 2 == d.msJumpType)),
                    g_config.$$isOpenGameVer2 ? hg.on("initWxconfig",
                    function() {
                        e.wxConfig.setWxShareUrlArg(["fromFav", o.awardCode])
                    }) : e.wxConfig.setWxShareUrlArg(["fromFav", o.awardCode]),
                    e.logDog(1000056),
                    e.logDog(1000045, 1),
                    $("#awardDeailBg").show(),
                    setTimeout(function() {
                        $("#awardDeailBg").hide()
                    },
                    800)
                }
                var I = e.watch.bind(["award", "game. $cAward", d], ["type", "game.$cAward.$type", d.$type]),
                b = g_config.isPaymentGame;
                I("{award}.cbt",
                function(e) {
                    var a = d.awardtype;
                    _manage && $$(function() {
                        a = parent.game.$cAward.awardtype
                    });
                    var i = g_config.createTime > 15561576e5 && -1 == $.inArray(a, [4, 9]) ? 16 : 10; (r.find(".awardCodeTime .codeBgTime")[0] || r.find(".awardCodeTime").append(" : <span class='codeBgTime'></span> - "), "string" != typeof e && (e = e.toString()), r.find(".awardCodeTime .codeBgTime").text(e.substring(0, i).replace(/-/g, ".")), t.afterWxCard) && (r.find(".itemList .beginTime")[0] || r.find(".itemList.dateLine.codeTimeFixedRange .box").html("").append("<span class='beginTime'></span>至"), g.find(".itemList .beginTime").html(e.substring(0, i)))
                }),
                I("{award}.cet",
                function(e) {
                    var a = d.awardtype;
                    _manage && $$(function() {
                        a = parent.game.$cAward.awardtype
                    });
                    var i = g_config.createTime > 15561576e5 && -1 == $.inArray(a, [4, 9]) ? 16 : 10; (r.find(".awardCodeTime .codeEndTime")[0] || r.find(".awardCodeTime").append("<span class='codeEndTime'></span>"), "string" != typeof e && (e = e.toString()), r.find(".awardCodeTime .codeEndTime").text(e.substring(0, i).replace(/-/g, ".")), t.afterWxCard) && (r.find(".itemList .endTime")[0] || r.find(".itemList.dateLine.codeTimeFixedRange .box").append("<span class='endTime'></span>"), g.find(".itemList .endTime").html(e.substring(0, i)))
                }),
                e.watch("game.$cAward.name", o.awardName || o.name,
                function(e) {
                    r.find(".awardName").text(e)
                }),
                I("{award}.stl",
                function(e) {
                    r.find(".awardSubTitle").text(e)
                }),
                I("{type}.showsitebox?{award}.opti:{type}.opti",
                function(e) {
                    r.add("#awardCodeLayer").find(".codeOptInfo").text(e)
                }),
                I("{type}.deadline",
                function(e) {
                    if (d && d.genewxcard && "DATE_TYPE_FIX_TERM" == d.t_type && !d.depositTime && !d.depositTime && !_manage) {
                        var t = (a = d.cfbt, i = d.cft, "领取后" + (0 == a ? "当": a) + "天生效，有效天数" + i + "天");
                        return r.find(".awardCodeTime").html("<em>" + t + " </em>"),
                        void r.find(".itemList.dateLine.codeTimeFixedRange .box").text(t)
                    }
                    var a, i;
                    e = b ? "兑换期限": e,
                    r.find(".awardCodeTime em").text(e)
                }),
                I("{type}.collect",
                function(t) {
                    t = b ? "收藏兑换券": t;
                    var a = hg.edit.getCrrCss(g_config.$$needNewVersion ? "awardDetailStyleColor": "pageStyleColor")[0].css[0].val;
                    if (!g_config.$$needNewVersion) {
                        var i = hg.edit.getCrrCss("pageStyleColor")[0].css[0];
                        a = 0 == i.opt && 2 == g_config.poupInfoType ? "rgb(255, 150, 45)": i.val
                    }
                    $("#awardCollectionBtn").length > 0 && $("#awardCollectionBtn").html('<i class="iconfont iconshoucang awardDetailStyleColor" style="color:' + a + '"></i>' + e.encodeHtml(t)),
                    e.checkInWebView().then(function(i) {
                        var n = $("#wxAwardCollectionBtn");
                        n.length > 0 && (n.css("background", hg.edit.getRgba(a, .1)), e.UA.compareWxVer("7.0.12") && !i ? (n.html('<i class="iconfont iconshoucang awardDetailStyleColor" style="color:' + a + '"></i><span style="color: ' + a + ';font-size: 0.6rem;">' + e.encodeHtml(t) + "</span>"), n.click(function() {
                            if ($(".code").removeClass("selectText"), $("#cardBagEnter").length > 0) $("#cardBagEnter").show();
                            else {
                                var t = $("<div id='cardBagEnter'><div id='cardContainer' class='cardContainer changeBox'><img class='cardImg cardContainer' /></div></div>"); ! isPublish && t.append('<div class="topTips">活动未发布，奖品不会收入我的卡包</div>'),
                                t.on("click",
                                function(e) {
                                    $(e.target).hasClass("cardContainer") || ($(".code").addClass("selectText"), $("#cardBagEnter").hide())
                                }),
                                t.find(".cardImg").attr("src", _resRoot + "/image/myCardBag/web/qrCode_poupModule.png?v=20218161420").show(),
                                t.appendTo("body")
                            }
                            e.FdpTrack("hd_mycardbag_tzhdxz_popup", {})
                        })) : n.html('<i class="iconfont iconshoucang awardDetailStyleColor" style="color:' + a + '"></i><span style="color: ' + a + ';font-size: 0.6rem;">' + e.encodeHtml(t) + "</span>"), n.click(function() { (i || !e.UA.compareWxVer("7.0.12")) && e.favorite(),
                            e.logDog(1000045, 2)
                        }))
                    })
                }),
                I("{type}.codename",
                function(e) {
                    e = b ? "兑换码": e,
                    $("#codeName").text(e)
                }),
                I("{award}.btn",
                function(e) {
                    r.find(".awardCusBtn .text").text(e)
                }),
                I("{award}.awardtype",
                function(e) {
                    6 == e || 7 == e || 8 == e ? ($(".codeDetailInfoBox").find(".codeOptInfo_Gift").canShow(), $(".codeDetailInfoBox").find(".codeOptInfo").mustHide(), g.find(".addressLine").mustHide()) : ($(".codeDetailInfoBox").find(".codeOptInfo_Gift").mustHide(), $(".codeDetailInfoBox").find(".codeOptInfo").canShow(), g.find(".addressLine").canShow())
                }),
                I("{type}.btn",
                function(e) {
                    e = b ? "立即兑换": _manage || [2, 6].indexOf(o.codeStatus) > -1 ? e: "查看详情",
                    g_config.$$isPayTypeNewActivity && -1 === [2, 6].indexOf(o.codeStatus) && (e = "查看详情"),
                    r.find("#bottomCusBtnInfo .text").text(e)
                }),
                I("{award}.genewxcard",
                function(e) {
                    e && (o.depositTime || (o.depositTime = d.depositTime), d.depositTime && r.find("#bottomCusBtnInfo .text").text("打开微信卡券"))
                }),
                I("{type}.sitetype == 'url' && !{award}.$cashsite_url",
                function(e) {
                    r.find("#bottomCusBtnBox #bottomCusBtnInfo,.codeOptInfo").hdToggle("emptyUrl", !e)
                }),
                I("{award}.$opqrc",
                function(e) {
                    void 0 === e || e ? $("#awardDetailBox .codeImg ").show() : $("#awardDetailBox .codeImg,#awardDetailBox .codeDetailImgBox").hide()
                }),
                I("{award}.addressType == 0",
                function(e) {
                    $("#awardDetailBox #ticketDetailBox .addressLine").toggleClass("addGuideMap", e)
                }),
                t.afterWxCard ? (I("{type}.details",
                function(e) {
                    e = b ? "兑换券详情": e,
                    g.find(".awardCusText .text,.ticketitle .text").html(e)
                }), I("{type}.sitetype == 'text'",
                function(e) {
                    r.find("#useStoreBox").hdToggle("address", e),
                    g.find(".addressLine").toggleClass("addressHide", !e)
                }), I("{type}.site",
                function(e) {
                    e = b ? "兑换地址": e,
                    g.find(".itemList .titleAdress").text(e)
                }), I("{type}.term",
                function(e) {
                    g.find(".itemList .timelimit").parents(".itemList").toggle(e)
                }), I("{type}.showcopy",
                function(e) {
                    $(".codeDetailInfoBox .copy").toggle(e)
                }), I("{type}.showsitebox?{award}.opti:{type}.opti",
                function(e) {
                    r.find(".codeOptInfo").text(e),
                    r.find(".codeOptInfo_Gift").text(e)
                }), I("{award}.$cashsite_text",
                function(e) {
                    _manage && b && (e = 0 == parent.game._setting.addressCategory ? parent.game._setting.payData.site: parent.game._setting.businessInfo.site);
                    g.find(".itemList .address").toggleClass("fintColor", "请填写您的兑奖地址或者门店地址" == e),
                    g.find(".itemList .address").text(e)
                }), I("{type}.notice",
                function(e) {
                    e = b ? "兑换须知": e,
                    g.find(".itemList .titleNotice").text(e)
                }), I("{award}.servicepho",
                function(e) {
                    _manage ? r.find(".servicePhone .text").html("客服电话" + (e ? "": "<span>（未开启）</span>")) : (r.find(".servicePhone").toggle( !! e), r.find(".servicePhone").parent("a").attr("href", "tel:" + e)),
                    r.find(".servicePhone .phoneText").text(e)
                }), I("{award}.isOpenHostInfo",
                function(e) {
                    _manage ? r.find(".jumptoHostInfo .text").html((g_config.isYKY ? "主办方": "主办单位") + "介绍" + (e ? "": "（未开启）")) : r.find(".jumptoHostInfo").toggle( !! e)
                }), I("{award}.tlmt",
                function(t) {
                    g.find(".itemList .timelimit").text(e.changeTimeLimit(t))
                }), I("{award}.cashinfo",
                function(t) {
                    null == t || "" == t ? _manage ? t = "<span style='color: #999;'>不填写则不显示</span>": g.find(".noticeLine").hide() : (t = e.encodeHtml(t), g.find(".noticeLine").show()),
                    g.find(".itemList .notice>pre").html(t)
                }), I("{award}.storeType",
                function(e) {
                    e && 1 != e ? (r.find("#useStoreBox").canShow("storeType"), g.find(".addressLine").mustHide()) : (r.find("#useStoreBox").mustHide("storeType"), g.find(".addressLine").canShow())
                }), I("{award}.$$useStoreList",
                function(t) { (_manage || t && !(t.length <= 0)) && (_manage || g_config.test ? n(t) : wx.ready(function() {
                        wx.getLocation({
                            type: "gcj02",
                            success: function(e) {
                                var a = e.latitude,
                                i = e.longitude;
                                n(t, a, i)
                            },
                            fail: function(a) {
                                e.statusMsg("当前微信版本不支持定位或没开启定位服务，请联系活动主办单位", ""),
                                n(t)
                            },
                            cancel: function() {
                                e.statusMsg("用户拒绝了授权地理位置信息", ""),
                                n(t)
                            }
                        })
                    }))
                })) : I("{award}.txn",
                function(e) {
                    r.find(".awardCusText .text").text(e)
                });
                var T = $("#seeFsnDetail").hide();
                $("#awardCusBtnInfo").nextAll(".hold").height("3.15rem"),
                T.off(".fsnBtn").on("click.fsnBtn",
                function() {
                    e.Res.loadg("fission").then(function() {
                        Fission.showFissionDetail(o)
                    })
                });
                var B = Fai.checkBit(o.flag, 128),
                S = !(o.theGiftDate < 0 || ["text", "serviceWx"].indexOf(d.$type.sitetype) > -1 && -1 != $.inArray(o.codeStatus, [4, 1, 5, 3]));
                if (9 == d.awardtype) _manage || (r.hide(), $.ajax({
                    type: "post",
                    url: g_config.apiAjaxUrl + "faierDepartment/getJzCouponAwardUrl",
                    data: {
                        gameId: g_config.gameId,
                        openId: g_config.openId,
                        code: r.find(".code").attr("code")
                    },
                    success: function(t) {
                        var a = $.parseJSON(t);
                        if (a.success) {
                            var i = a.url ? a.url: a.data.url;
                            _fromCardBag || _fromHdportalM ? e.copyContent3(i) : window.location.href = i
                        } else {
                            var n = {
                                bodyMsg: "活动未发布" == a.msg ? "活动尚未发布<br>无法查看奖品详情": a.msg,
                                primaryBtnFn: function() {
                                    hg.fire("scrollEvent", !0)
                                }
                            };
                            e.showMsgToast2(n)
                        }
                    }
                }));
                else if (_manage || !B || o.fissileOriginCode) { (C = -1 != [2, 10].indexOf(d.awardtype) && 6 == d.cashtype && S) && e.insertWxOpenLaunchWeapp({
                        id: "jumptoMinappBtn",
                        type: 1,
                        btnName: "立即兑奖",
                        insertOuter: !0,
                        insertEle: r.find("#bottomCusBtnInfo"),
                        mpAppId: d.minAppId,
                        mpPagePath: d.minAppPath
                    }),
                    $("._jumptoMinappBtn").toggle(C),
                    r.show(),
                    !_manage && r.height() > r.find(".awardDetailBoxBg").height() && r.toggleClass("shortPage", !0),
                    _manage && r.find(".awardDetailBoxBg").css("min-height", "100%")
                } else {
                    var C, A = $.parseJSON(o.prop) || {};
                    if ($(this).hasClass("seeCurAwaFsn") || -1 != [1, 3, 4, 5].indexOf(o.codeStatus) || A.fissileFinish || g_config.isFromFav) g_config.isFromFav = !1,
                    (C = -1 != [2, 10].indexOf(d.awardtype) && 6 == d.cashtype && S) && e.insertWxOpenLaunchWeapp({
                        id: "jumptoMinappBtn",
                        type: 1,
                        btnName: "立即兑奖",
                        insertOuter: !0,
                        insertEle: r.find("#bottomCusBtnInfo"),
                        mpAppId: d.minAppId,
                        mpPagePath: d.minAppPath
                    }),
                    $("._jumptoMinappBtn").toggle(C),
                    r.show(),
                    r.height() > r.find(".awardDetailBoxBg").height() && r.toggleClass("shortPage", !0),
                    T.toggle( - 1 == [1, 3, 4, 5].indexOf(o.codeStatus)),
                    $("#awardCusBtnInfo").nextAll(".hold").height("5.4rem");
                    else e.Res.loadg("fission").then(function() {
                        Fission.showFissionDetail(o)
                    })
                }
            },
            e.showWxCodePage = function(a, i) {
                if (a) {
                    var n = new Array;
                    n.push("gameId=", t.gameId),
                    n.push("&openId=", t.openId),
                    g_config.isDoubleGame && n.push("&openIdB=", e.otherOpenId),
                    e.ajaxLoad.show(),
                    $.ajax({
                        type: "post",
                        url: t.awardUrl,
                        data: n.join(""),
                        error: function() {
                            e.ajaxLoad.hide()
                        },
                        success: function(t) {
                            e.ajaxLoad.hide();
                            var i = $.parseJSON(t);
                            if (i.success) for (var n = i.list,
                            o = n.length,
                            s = 0; s < o; s++) if (n[s].code == a) {
                                e.openAwardDetail(n[s]);
                                break
                            }
                        }
                    })
                }
            },
            e.showAwardDetailByCode = function(a, i) {
                var n = ["style=" + g_config.style, "aid=" + g_config.aid, "gameId=" + t.gameId, "openId=" + t.openId];
                g_config.isDoubleGame && n.push("openIdB=" + e.otherOpenId);
                var o = "",
                s = i > 100,
                r = [117].indexOf(g_config.style) > -1;
                o += s ? g_config.apiAjaxUrl + "gameOther/getMyGiftList": r ? g_config.apiAjaxUrl + "gameOther/getMyPrizeList": g_config.apiAjaxUrl + "rank/getGiftList",
                e.ajaxLoad.show(),
                $.ajax({
                    type: "post",
                    url: o,
                    data: n.join("&"),
                    error: function() {
                        e.ajaxLoad.hide()
                    },
                    success: function(t) {
                        e.ajaxLoad.hide();
                        var i = $.parseJSON(t);
                        if (i.success) for (var n = s ? i.data.codeList: r ? i.data.prizeList: i.list, o = 0; o < n.length; o++) if (n[o].code == a) {
                            e.openAwardDetail(n[o], !0);
                            break
                        }
                    }
                })
            },
            e.getScrollWidth = function() {
                var e = $('<div class="outerDiv"></div>').prependTo($("body")),
                t = $('<div class="innerDiv"></div>').appendTo(e),
                a = e.width() - t.width();
                return e.remove(),
                a
            }
        } (),
        e.shouldRegInfo = function(t, i, n) {
            var o = a.slice.call(arguments);
            if ($.isArray(t)) {
                for (var s = 0; s < t.length; s++) if (o[0] = t[s], e.shouldRegInfo.apply(e, o)) return ! 0;
                return ! 1
            }
            var r = !1;
            if (g_config.afterLinkModify) {
                if (1 != g_config.linkInfoType && g_config.linkInfoType == t && (r = !0), !e._isZhuliPlayer || 2 != g_config.linkInfoType && 3 != g_config.linkInfoType || (r = !1), 4 == t && !g_config.linkInfoAll && g_config.award) {
                    var g = g_config.award.level;
                    900 == g ? (g = g_config.award.awardLevel, r = g_config.comfort.comOplink) : r = g_config[g < 100 ? "awardList": "gift_List"][g - (g < 100 ? 1 : 101)].oplink
                }
            } else 3 != gameType && 1 != gameType && 6 != gameType || !g_config.openAwardLinkNoDraw || (r = !0);
            return !! (r && !
            function() {
                for (var e = $.parseJSON(g_config.contactNoDraw), t = 0, a = !1, i = 0, n = e.length - 1; i <= n; i++) {
                    if ("ausername" === e[i].key && e[i].isOpen && (t++, !g_config.awardUsername)) {
                        a = !0;
                        break
                    }
                    if ("aphone" === e[i].key && e[i].isOpen && (t++, !g_config.awardPhone)) {
                        a = !0;
                        break
                    }
                    if ("aadress" === e[i].key && e[i].isOpen && (t++, !g_config.awardAddress)) {
                        a = !0;
                        break
                    }
                }
                if (a) return ! 1;
                if (t && !a) return ! 0;
                var o = g_config.userInfo;
                if (o) for (var s in o) if (/^aprop.*/.test(s) && null != o[s] && "" !== o[s]) return ! 0;
                return ! 1
            } () || g_config.$$resultForLinkInfoIsEmpty && 21050753 == g_config.aid) && (g_config.$$isOpenGameVer2 ? (zgnpyVue.$refs.aUserInfo.theAuserInfo.isFirstSet = !0, o.length > 1 && zgnpyVue.$refs.aUserInfo.show(i, n)) : (g_config.$$isFirstSet = !0, o.length > 1 && e.aUserInfo.show(i, n)), !0)
        };
        var g = $("body");
        function c(a, i) {
            if (i && (g = i), setTimeout(function() {
                g.find("#regAwardBox .poupMainInfo").css("padding-bottom", $("#regAwardBox .attentionBox").height() + 18),
                g.find("#regAwardBox").show()
            },
            500), _manage && !g_config.$$needNewVersion) {
                e.homePoup(a);
                var n = [],
                o = ["lvox、hubert", '<span class="pageStyleColor">magazine</span>、tina', "monica、hth"],
                s = g.find(".regAwardList");
                s.find(".playerName").html(""),
                s.each(function(e) {
                    $(this).find(".playerName").html(o[e]),
                    $(this).find(".bgSpan").width($(this).find(".titleName").width() / g_rem + .4 + "rem")
                }),
                hg.fire("setPageStyleColor", "regAwardMain", "", g)
            } else {
                e.logDog(1000034);
                var r = t.getRegAwardUrl;
                if (_manage && g_config.$$needNewVersion) {
                    n = [];
                    for (var c = [[{
                        name: "lvox"
                    },
                    {
                        name: "hubert"
                    }], [{
                        name: "magazine",
                        isSelf: !0
                    },
                    {
                        name: "tina"
                    }], [{
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    },
                    {
                        name: "monica"
                    },
                    {
                        name: "hth"
                    }]], d = 0; d < 3; d++) n.push({
                        level: g_config.awardList[d].level,
                        list: c[d] || []
                    });
                    return l({
                        regAwardList: n
                    })
                }
                if (g_config.isDoubleGame) r = r + "&openIdB=" + e.otherOpenId;
                g_config.firstTouchWinList && (e.ajaxLoad.show(), $.ajax({
                    type: "post",
                    url: r,
                    error: function() {
                        e.ajaxLoad.hide()
                    },
                    success: function(t) {
                        e.ajaxLoad.hide(),
                        e.tlog("poupRegAward", t);
                        var a = $.parseJSON(t);
                        $("#Mingdan_Round_Dot").hide(),
                        l(a),
                        g_config.firstTouchWinList = !1
                    }
                }))
            }
        }
        function l(e) {
            var t = !1;
            if (g.find("#regAwardMain").empty(), !e) return f(t);
            var a = e.regAwardList,
            i = !1;
            g_config.$$needNewVersion && a.length > 3 && !LongPageCard.isShowDeatil && (a.length = 3, g.find(".seeDetailList").show());
            for (var n = 0; n < a.length; ++n) {
                var o = a[n];
                if (o) {
                    var s = o.level;
                    g.find("#regAwardMain").append(u(s));
                    var r = o.list,
                    c = g.find(".regAwardList");
                    if (g_config.$$needNewVersion) {
                        var d = "",
                        l = r.length > 6 && !LongPageCard.isShowDeatil; ! i && l && (i = !0, g.find("#regAwardList .seeDetailList").show()),
                        l && (r = r.slice(0, 5));
                        for (var p = 0; p < r.length; ++p) {
                            var h = r[p].name,
                            m = r[p].isSelf;
                            d += '<div class="playerInfo display_flex flex-direction_column align-items_center"><img src="' + (r[p].headImg || _resRoot + "/image/rank1.jpg") + '" class="headImg"><span class="ellipsis ' + (m ? "pageStyleColor": "") + '">' + h + "</span></div>"
                        }
                        l && (d += '<i class="iconfont icongengduo"></i>'),
                        c.eq(n).find(".playerName").addClass("display_flex flexWrap align-items_center").append(d)
                    } else {
                        for (d = [], p = 0; p < r.length; ++p) {
                            h = r[p].name; (m = r[p].isSelf) ? d.push('<span class="pageStyleColor">' + h + "</span>") : d.push(h)
                        }
                        c.eq(n).find(".playerName").append(d.join("、"))
                    }
                    t = !0
                }
            }
            return f(e, t)
        }
        function f(e, t) {
            setTimeout(function() {
                if (t ? (g.find("#noRegAward").hide(), g.find("#regAwardMain").show()) : (g.find("#noRegAward").show(), g.find("#regAwardMain").hide()), g_config.$$needNewVersion) LongPageCard.initBgSpanCss("regAwardList", g);
                else for (var a = g.find("#regAwardMain .regAwardList"), i = 0; i < e.regAwardList.length; i++) a.eq(i).find(".bgSpan").width(a.eq(i).find(".titleName").width() / g_rem + .4 + "rem")
            },
            30),
            hg.fire("setPageStyleColor", "regAwardMain", "", g)
        }
        function u(t) {
            var a = 9 == t ? g_config.comfort.cas: g_config.awardList[t - 1].style;
            return "<div class='regAwardList " + (g_config.$$needNewVersion ? "poupLine": "") + "'>                    <div class='mainTitle'>                        <p class='titleName'>" + e.encodeHtml(a) + "</p>                        <span class='bgSpan'></span>                    </div>                    <div class='playerName playerList'></div>                </div>"
        }
        g_config.$$isOpenPlayerEditLinkInfo ? $("#awardContactInfo .updateBtn").hide() : $("#awardContactInfo").on("click", ".updateBtn",
        function() {
            _manage || (g_config.$$isOpenGameVer2 ? zgnpyVue.$refs.aUserInfo.show() : e.aUserInfo.show())
        });
        var p = g_rem || 23.4375,
        h = $("#poupInfoBox").outerHeight() - $(".poupHead").outerHeight() - .5 * p,
        m = h - 3 * p + .5 * p;
        switch (g_config.poupInfoType) {
        case 1:
            $("#poupInfoBox .poupMain").height(h),
            $("#poupInfoBox").removeClass("darkMode").removeClass("halfWindow");
            break;
        case 2:
            $("#poupInfoBox .poupMain").height(h),
            $("#poupInfoBox").addClass("darkMode").removeClass("halfWindow");
            break;
        case 3:
            $("#poupInfoBox .poupMain").height(m),
            $("#poupInfoBox").addClass("halfWindow").removeClass("darkMode"),
            _manage || ($("#poupInfoBox #simulateMask").off("click"), $("#poupInfoBox #simulateMask").on("click",
            function() {
                $("#poupInfoBox #poupHead .poupClose").click()
            }))
        }
        window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
    } (),
    function() {
        e.sortRuleBox = {
            init: function(t, a, i, n) {
                e.tlog("initRule");
                var o = a || $("#ruleBox .poupMainInfo"),
                s = _manage && !_preview && parent.game.$$data.isMinAppGame;
                if (s) if (a) for (var r = $(".newVersionCardBox"), g = 0, c = r.length; g < c; g++) 0 == $(r[g]).find(".newVersionCard").length && r[g].remove();
                else for (var l = $(".poupLineBox"), g = 0, c = l.length; g < c; g++) 0 == $(l[g]).find(".poupLine").length && l[g].remove();
                s && (o = a ? $("#EditMoveBox") : $("#ruleBox"));
                121 == g_config.style && (o = o.eq(0));
                var f = i || o.find(".poupLine");
                s && (f = i ? $("#EditMoveBox .newVersionCardBox") : o.find(".poupLineBox"));
                if (f.length > t.length) for (var u = "a".charCodeAt(), g = t.length; g < f.length; g++) t += String.fromCharCode(u + g);
                var p = f.sort(function(e, a) {
                    var i = $(e).data("sortkey"),
                    n = $(a).data("sortkey");
                    s && (i = $(e).children().data("sortkey"), n = $(a).children().data("sortkey"));
                    var o = t.indexOf(i),
                    r = t.indexOf(n);
                    return - 1 == o || -1 == r ? 0 : o > r ? 1 : -1
                });
                if (o.append(p), !n && -1 == [92, 102, 107, 109, 114].indexOf(g_config.style) && (69 == g_config.style ? o.append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);$(\'.body\').scrollTop(0);" class="noMove">投诉</div></div>') : -1 !== [75, 106].indexOf(g_config.style) ? $(".coomInformLineBox").append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);hg.fire(\'scrollEvent\',false);" class="noMove">投诉</div></div>') : g_config.$$needNewVersion ? $("#EditMoveBox").after('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);" class="noMove"><i class="iconfont icontousu"></i>投诉</div></div>') : o.append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);" class="noMove">投诉</div></div>'), g_config.$$needNewVersion || ~ [75, 115].indexOf(g_config.style))) {
                    $(".attentionBox.attentionBoxB").find(".hasMoreActiveBtn").remove(),
                    $(".attentionBox.attentionBoxB").find(".noMoreActiveBtn .theSpecialTarget").data("pagekey", 5);
                    var h = g_config.$$pageAdInfo[5],
                    m = g_config.$$canOpenCSkill && h.isOpen;
                    if (e.gamePageExposure(5, m), m) {
                        var w = ~h.whiteBgStyleList.indexOf(g_config.style) ? h.btnImgForWhiteBg: h.btnImg;
                        $("#informLine").before('<div id="moreActiveBtn" class="hdskillInfo skillInfo"><a class="moreActive" style="background-image:url(\'' + w + '\')" href="javascript:;" data-pagekey="5"></div>'),
                        !_manage && e.isVisitorA() && h.isATestToQb && e.checkInWebView().then(function(t) {
                            t || (e.insertWxOpenLaunchWeapp({
                                id: "jumptoMinappBtn_moreActive_5",
                                type: 6,
                                insertOuter: !0,
                                insertEle: $("#moreActiveBtn .moreActive"),
                                mpAppId: "gh_911891f93b38",
                                mpPagePath: "/pages/findAct/findAct?fromH5Ad=true"
                            }), $("._jumptoMinappBtn_moreActive_5").length > 0 && ($("._jumptoMinappBtn_moreActive_5").show(), $("._jumptoMinappBtn_moreActive_5").off("click").on("click",
                            function() {
                                e.adClick(5, !0)
                            })))
                        })
                    }
                }
                if ($("#informLine #newInformBtn, .homeBtnBox #informBtn").on("touchend",
                function() {
                    d(4),
                    !_manage && $buryPoint.homePageInfo(5)
                }), [96, 116].indexOf(g_config.style) > -1 && a && g_config.showPromoteCourtesy) {
                    var _ = o.find(".promoteCourtesyBox"),
                    v = parseInt(_.data("fixedindex"));
                    o.find(".EditMoveLine").eq(v).before(_)
                }
            }
        }
    } (),
    function() {
        if (!g_config.$$isOpenGameVer2) {
            var t = {
                show: function(t, a, i) {
                    e.lastDisplayStatus || (e.lastDisplayStatus = {
                        gameBox: $(".gameBox").is(":visible"),
                        home: $(".home").is(":visible")
                    }),
                    e.tlog(e.lastDisplayStatus);
                    var n = g_config.ajaxUrl.replace("/ajax/", "");
                    $("#awardUserInfoBg").data({
                        _aUserInfoArg: t,
                        _aUserInfoThis: a
                    }).show(),
                    !_manage && e.ajaxLoad.hide(),
                    0 == $("#contactInputIframe").length && setTimeout(function() { ! _manage && e.ajaxLoad.show();
                        var t = n + "/contactInfo.jsp?afterLinkModify=" + g_config.afterLinkModify + "&fromCanal=" + fromCanal + "&awardLinkMsg=" + e.encodeUrl(e._awardLinkMsg) + "&isSetFissileInfo=" + i + "&_manage=" + _manage + "&isLinkInfoNotPayMinApp=" + g_config.$$isLinkInfoNotPayMinApp + "&style=" + g_config.style;
                        g_config.$$isFirstSet && (t += "&isFirstSet=true", g_config.$$isFirstSet = !1);
                        var a = $('<iframe id="contactInputIframe" frameborder="0" scrolling="yes" src="' + t + '" style="height: 100%; width: 100%;"></iframe>');
                        $("#awardUserInfoBg").append(a),
                        a.load(function() { ! $("#contactInputIframe").length && $(".gameBgBox, .home").hide(),
                            !_manage && e.ajaxLoad.hide()
                        })
                    },
                    50),
                    $("#spxdPage").addClass("spxdPageHide"),
                    $("#nameInput").val(g_config.awardUsername),
                    $("#phoneInput").val(g_config.awardPhone),
                    $("#addressInput").text(g_config.awardAddress),
                    t || $("#awardUserInfoBg").removeData("_aUserInfoArg")
                },
                hide: function() {
                    e.tlog(e.lastDisplayStatus),
                    e.lastDisplayStatus && (e.lastDisplayStatus.gameBox && $(".gameBgBox").show(), e.lastDisplayStatus.home && $(".home").show(), e.lastDisplayStatus = null);
                    var a = $("#awardUserInfoBg");
                    a.hide(),
                    $("#spxdPage").removeClass("spxdPageHide");
                    var i = a.data("_aUserInfoArg");
                    if (i) {
                        if (function(e) {
                            return "undefined" != typeof gameOver && e.callee === gameOver || "undefined" != typeof startBtnAjax && e.callee === startBtnAjax || "undefined" != typeof luckDraw && e.callee === luckDraw
                        } (i)) {
                            var n = i[2];
                            n && n.info && (n.info = $.parseJSON(n.info), n.info.ausername = g_config.awardUsername, n.info.aphone = g_config.awardPhone, n.info.aadress = g_config.awardAddress, n.info = $.toJSON(n.info))
                        }
                        t.afterUserInfoHide = !0,
                        g_config.$$isCheckPrizeMsg = !0;
                        var o = a.data("_aUserInfoThis");
                        i.callee.apply(o, i),
                        setTimeout(function() {
                            t.afterUserInfoHide = !1
                        },
                        0),
                        setTimeout(function() {
                            $("#contactInputIframe").remove()
                        },
                        510)
                    }
                },
                refresh: function() {
                    var e = $("#contactInputIframe");
                    e.length > 0 && e.attr("src", $("#contactInputIframe").attr("src"))
                }
            };
            e.aUserInfo = t
        }
    } (),
    function() {
        Math.max($(window).height() / $(window).width(), $(window).width() / $(window).height());
        var t, a, i, n, o, s, r, g = {
            startStatus: !1,
            exposeFlag: !1,
            disable: !1,
            result_disable: !1,
            gift_disable: !1
        },
        c = {
            drawType: !1,
            home: function() {},
            again: function() {},
            giftInit: function(e) {
                $buryPoint.drawprize(),
                e && e()
            }
        },
        d = (r = 0,
        function(e) {
            if (g.startStatus && (!g_config.$$hasLuckShakePage || 3 == g_config.shakeModel)) {
                var d = (new Date).getTime();
                if (d - r > 100) {
                    $("input").blur();
                    var l = e.accelerationIncludingGravity;
                    r = d,
                    t = l.x,
                    a = l.y,
                    i = l.z,
                    Math.sqrt(t * t + a * a + i * i) / Math.sqrt(n * n + o * o + s * s) > 1.5 && (g.startStatus = !1, c.giftInit(function(e) {
                        hg.sound.play("yiy"),
                        setTimeout(function() {
                            g.showGift(e)
                        },
                        1500)
                    })),
                    n = t,
                    o = a,
                    s = i
                }
            }
        }),
        w = {};
        function _() {
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "playerOther/setHaveBeenShownAchieve?gameId=" + g_config.gameId + "&openId=" + g_config.openId,
                success: function(e) {
                    $.parseJSON(e).success && (g_config.$hasShowScore = !0)
                }
            })
        }
        g.initArg = function(e) {
            this.disable || $.extend(w, e)
        },
        g.init = function(t) {
            if (!this.disable) {
                $.extend(c, t),
                $.extend(c, w),
                this.giftBox = $("#resule-gift-box"),
                this.resuleBox = $(".resuleBox"),
                this.statusBox = $("#resule-status-box");
                var a = this,
                i = $("#resule-status-lots").width(),
                n = $("#resule-status-lots").height(),
                o = $("#lots-wait-img").width(),
                s = $("#lots-wait-img").height();
                $("#lots-wait-img").css({
                    width: i / (6.15 * g_rem) * o,
                    height: n / (12.4 * g_rem) * s
                }),
                e.currentScore >= g_config.scoreSet && "" != g_config.scoreSet ? e.isplaySucess = !0 : e.isplaySucess = !1,
                $(document).on("touchend", ".resule-status-home , .resule-gift-home, .resule-gift-home2",
                function() {
                    event.preventDefault(),
                    event.stopPropagation(),
                    _manage || (e.logDog(1000015), g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !0), l(2), f(1), u(1), p(1), h(1), e.fadIn(a.resuleBox,
                    function() {
                        a.giftBox.hide(),
                        a.statusBox.hide(),
                        $(".gameBox,.home,.body").removeClass("overflow-y-hidden"),
                        g_config.showSkillSup && (e.logDog(1000028, 0), !_manage && !g_config.isOem && g_config.createTime > 16038504e5 && e.FdpTrack("hd_game_ad_expo", {
                            hd_modid: g_config.modId,
                            hd_ta: g_config._ta,
                            hd_free_text_0: "首页"
                        }), $(".bottomSkill").show())
                    }), c.home(), switchPage("home"))
                }),
                $("#resule-status-lotsHand .waitDrawBtn").off("touchend").on("touchend",
                function() {
                    g.startStatus = !1,
                    c.giftInit(function(e) {
                        a.showGift(e)
                    })
                }),
                e.watch("game._setting.shakeModel", g_config.shakeModel,
                function(e, t) {
                    if (g_config.$$hasLuckShakePage && _manage) {
                        var a = $("#resule-status-lotsBox");
                        switch (e) {
                        case 0:
                            a.find("#lucyClick-wrap").show().siblings().hide();
                            break;
                        case 1:
                            a.find("#drawPrize-wrap").show().siblings().hide(),
                            initDrawPrize(),
                            initDrawEvent(g, c);
                            break;
                        case 2:
                            a.find("#lukyWheel-wrap").show().siblings().hide(),
                            initLuckWheel(g, c),
                            updateAwardImg(parent.game._setting.an, parent.game._flag.f16);
                            break;
                        case 3:
                            a.find("#yaoyiyao-wrap").show().siblings().hide()
                        }
                    }
                }),
                hg.assets.onload(function() {
                    if (!_manage && g_config.$$hasLuckShakePage) switch (g_config.shakeModel) {
                    case 0:
                        $("#resule-status-lucyClick").off("touchend").on("touchend",
                        function() {
                            openBoxAnimation.isAnimation || (g.startStatus = !1, c.giftInit(function(e) {
                                openBoxAnimation.isAnimation = !0,
                                openBoxAnimation(g, e)
                            }))
                        });
                        break;
                    case 1:
                        guagualeDraw(g, c);
                        break;
                    case 2:
                        initLuckWheel(g, c)
                    }
                }),
                $(".resule-gift-draw").off("touchend").on("touchend",
                function() {
                    if (!_manage) {
                        if (l(1), f(0), u(0), e.ajaxLoad.show(), window.addEventListener("devicemotion", d, !1), g.exposeFlag && e.logDog(1000025, 29), g.exposeFlag && e.logDog(1000026, 29), !g_config.openAccessKeyOnce) return g_config.isOpenCreditJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerCreditJoin ? e.checkMemberCredit(function() {
                            0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel(t) : t()
                        }) : 0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel(t) : g_config.$$isInternalJoin ? e.checkMallJoinLimit(t) : void e.refreshDrawTimes().then(function(i) {
                            if (!i) {
                                if (a.resuleArg.isLimitDrawTotal && a.resuleArg.totalCount <= 1) return e.ajaxLoad.hide(),
                                void e.statusMsg(6);
                                if (a.resuleArg.count <= 1) return e.ajaxLoad.hide(),
                                e.statusMsg(4),
                                void(g_config.showHelpGuide || $(this).data("awarded") || c.home())
                            }
                            t(),
                            setTimeout(function() {
                                a.resuleArg.totalCount > 0 && a.resuleArg.totalCount--,
                                a.resuleArg.count > 0 && a.resuleArg.count--
                            },
                            1e3)
                        });
                        e.checkAccessKeyLuckyDrawTotal().then(t, e.ajaxLoad.hide)
                    }
                    function t() {
                        e.ajaxLoad.hide(),
                        $("#resule-status-scrollWrap,#resule-gift-box").hide(),
                        $("#resule-status-lotsBox,#resule-status-box").show(),
                        clearTimeout(e.lotTimer),
                        $("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").show(),
                        $("#resule-status-lotsHand .waitDrawBtn").hide(),
                        e.lotTimer = setTimeout(function() {
                            window.drawStatusLuckDraw && ($("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").hide(), $("#resule-status-lotsHand .waitDrawBtn").show())
                        },
                        5e3),
                        g.exposeFlag = !1,
                        g.startStatus = !0,
                        e.yaoyiyaoClickLuckDraw({
                            time: 0,
                            clickCallback: function() {
                                g.startStatus = !1,
                                c.giftInit(function(e) {
                                    hg.sound.play("yiy"),
                                    setTimeout(function() {
                                        g.showGift(e)
                                    },
                                    1500)
                                })
                            }
                        })
                    }
                }),
                $("#resule_seeRank_show").on("touchend",
                function() {
                    p(3),
                    h(3)
                }),
                0 !== c.drawType && 2 !== c.drawType || 61 == g_config.style || 27 == g_config.style || 47 == g_config.style || 98 == g_config.style ? 1 !== c.drawType && 61 != g_config.style && 27 != g_config.style && 47 != g_config.style && 98 != g_config.style || ($(".resule-status-seeRank,.resule-gift-seeRank").on("touchstart",
                function() {
                    event.preventDefault(),
                    event.stopPropagation(),
                    _manage || (g_config.createTime > 1520265601e3 && 1 == gameType ? window.showRule() : window.showRank())
                }), $(".resule-status-again").on("touchstart",
                function() {
                    if (event.preventDefault(), event.stopPropagation(), !_manage) {
                        if (h(0), e.ajaxLoad.show(), !g_config.openAccessKeyOnce) return g_config.isOpenCreditJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerCreditJoin ? e.checkMemberCredit(function() {
                            0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel(t) : t()
                        }) : 0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel(t) : g_config.$$isInternalJoin ? e.checkMallJoinLimit(t) : (e.logDog(1000016), (3 == gameType || e.isGameNoaward(g_config.style, gameType)) && g_config.isCheckPlayTimes && PlayInfo.getTotalRemainTimes() <= 0 ? (e.ajaxLoad.hide(), void e.statusMsg(8)) : (3 == gameType || e.isGameNoaward(g_config.style, gameType)) && g_config.isCheckPlayTimes && PlayInfo.getTodayRemainTimes() <= 0 ? (e.ajaxLoad.hide(), void e.statusMsg(7)) : void t());
                        e.checkAccessKeyLuckyDrawTotal().then(t, e.ajaxLoad.hide)
                    }
                    function t() {
                        e.ajaxLoad.hide(),
                        $(".gameBox,.home,.body").removeClass("overflow-y-hidden"),
                        g_config.isDoubleGame || e.fadIn(a.resuleBox,
                        function() {
                            a.giftBox.hide(),
                            a.statusBox.hide()
                        }),
                        g_config.isNewAttentionFlag ? ($("#startBtnImg").trigger("touchend"), g_config.isNewAttentionFlag = !1) : c.again()
                    }
                }), this.hideScore = function(e) {
                    $(".comm-status .beatSpan").html(""),
                    $(".youraward.yourScore .resuleArg, .youraward.costTime .resuleArg, .comm-status .beatSpan, .resultArg-wrap .bestArgWrap, .resultArg-wrap .bestRankWrap, .resultArg-wrap .bestCostTimeWrap, .resultArg-wrap .bestArgWrap, .resultArg-wrap .bestRankWrap, .resultArg-wrap .bestCostTimeWrap").addClass("isNewAttention"),
                    e.eq(0).text(""),
                    e.eq(1).text(""),
                    $(".resule-foot-one .resule-status-again, .comm-status .beatI").hide(),
                    $(".resule-foot-one .resule-status-seeScore").show()
                },
                this.seeScore = function(e, t) {
                    $("#resule-status-body .beat-Percent span").text(t.beat),
                    e.eq(0).text(t.gameScore),
                    e.eq(1).text(t.gameCostTime),
                    e.eq(3).text(t.bestScore),
                    e.eq(4).text(t.bestCostTime),
                    e.eq(5).text(t.rank),
                    $(".resule-foot-one .resule-status-again, .comm-status .beatI").show(),
                    $(".resule-foot-one .resule-status-seeScore").hide(),
                    $(".youraward.yourScore .resuleArg, .youraward.costTime .resuleArg, .comm-status .beatSpan, .resultArg-wrap .bestArgWrap, .resultArg-wrap .bestRankWrap, .resultArg-wrap .bestCostTimeWrap").removeClass("isNewAttention")
                },
                g_config.$$isOpenGameVer2 || hg.sound.load(_resRoot + "/image/yaoyiyao.mp3", "yiy"), window.addEventListener("devicemotion", d, !1), (m_debug || g_config.test) && $("#resule-status-lotsHand").on("touchstart",
                function() {
                    g.startStatus = !1,
                    c.giftInit(function(e) {
                        a.showGift(e)
                    })
                }), this.giftEvent = function() {
                    if (!_manage && (e.ajaxLoad.show(), !g_config.afterLinkModify || !e.shouldRegInfo(3, arguments, this))) if (g_config.openAccessKeyOnce) e.checkAccessKeyLuckyDrawTotal().then(t, e.ajaxLoad.hide);
                    else {
                        if (g_config.isOpenCreditJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerCreditJoin) return e.checkMemberCredit(function() {
                            0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin ? e.checkMemberLevel(t) : t()
                        });
                        if (0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin || 1 == g_config.joinLimit && g_config.isOpenBigCustomerMemberLevelJoin) return e.checkMemberLevel(t);
                        if (g_config.$$isInternalJoin) return e.checkMallJoinLimit(t);
                        if (g.exposeFlag && e.logDog(1000014), 47 != g_config.style && 98 != g_config.style) return e.refreshDrawTimes().then(function(i) {
                            if (!i) {
                                if (a.resuleArg || (a.resuleArg = $.extend({},
                                g_config.lastSetAchivelResult)), a.resuleArg.isLimitDrawTotal && 0 === a.resuleArg.totalCount) return e.ajaxLoad.hide(),
                                void e.statusMsg(6);
                                if (0 === a.resuleArg.count) return e.ajaxLoad.hide(),
                                void e.statusMsg(4)
                            }
                            t()
                        });
                        hg.fireWith("beforeStartGiftEvent") ? t() : e.ajaxLoad.hide()
                    }
                    function t() {
                        if (e.ajaxLoad.hide(), $("#resule-status-scrollWrap").hide(), $("#resule-status-lotsBox").show(), $("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").show(), $("#resule-status-lotsHand .waitDrawBtn").hide(), e.resulePoup.statusBox.show(), e.resulePoup.resuleBox.show(), g_config.$$isTheSpecAid && e.resulePoup.resuleBox.css({
                            "z-index": "999",
                            opacity: 1
                        }), g.startStatus = !0, !g_config.$$hasLuckShakePage || 3 == g_config.shakeModel) {
                            e.setIOSDeviceMotionEvent({
                                type: "luckDraw",
                                cancelCallback: function() {}
                            }),
                            e.yaoyiyaoClickLuckDraw({
                                time: 4e3,
                                clickCallback: function() {
                                    g.startStatus = !1,
                                    c.giftInit(function(e) {
                                        hg.sound.play("yiy"),
                                        setTimeout(function() {
                                            g.showGift(e)
                                        },
                                        1500)
                                    })
                                }
                            })
                        }
                        e.lotTimer = setTimeout(function() {
                            window.drawStatusLuckDraw && ($("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").hide(), $("#resule-status-lotsHand .waitDrawBtn").show())
                        },
                        5e3),
                        g.exposeFlag = !1
                    }
                },
                $(".resule-status-gift").on("touchstart",
                function() {
                    p(0),
                    g_config.openStrongAttention ? e.Res.loadg("fansExclusive").then(function() {
                        e.showForcedAttPoup({
                            type: 3
                        }).then(g.giftEvent)
                    }) : g.giftEvent()
                }), g_config.createTime > 15837696e5 && g_config.openStrongAttention && g_config.hasAchieve && e.Res.loadg("fansExclusive").then(function() {
                    e.getIsHasAttention(null, !0, !0).then(function() {
                        if (!g_config.ishasAttentiosThisAPP) {
                            g_config.isNewAttentionFlag = !0;
                            var t = {
                                isSuc: g_config.lastSetAchivelResult.isSuc,
                                gameScore: g_config.lastSetAchivelResult.lastPlInfo.currentAchievement,
                                minScore: g_config.drawLimitDef,
                                bestScore: g_config.lastSetAchivelResult.bestRankInfo.score,
                                gameType: g_config.gameType,
                                rank: g_config.lastSetAchivelResult.bestRankInfo.rank,
                                beat: g_config.lastSetAchivelResult.bestRankInfo.beat,
                                count: g_config.drawTimesLimit - g_config.count < 0 ? 0 : g_config.drawTimesLimit - g_config.count,
                                isLimitDrawTotal: g_config.isLimitDraw,
                                totalCount: g_config.drawTotalLimit - g_config.totalCount < 0 ? 0 : g_config.drawTotalLimit - g_config.totalCount,
                                isEqualDraw: g_config.drawTimesLimit == g_config.drawTotalLimit,
                                gameCostTime: g_config.lastSetAchivelResult.bestRankInfo.prop ? JSON.parse(g_config.lastSetAchivelResult.bestRankInfo.prop).lastCostTime: 0,
                                bestCostTime: g_config.lastSetAchivelResult.bestRankInfo.prop ? JSON.parse(g_config.lastSetAchivelResult.bestRankInfo.prop).bestCostTime: 0,
                                isSetShownAchieve: 1 == g_config.gameType || 3 == g_config.gameType
                            };
                            if (g.showResult(t), 41 === g_config.style) {
                                var a = e.getLocalStorage("skltzStr") || "";
                                $(".readResult").html(a),
                                t.isSetShownAchieve && _()
                            }
                        }
                    })
                }), this.regEvent = function() {
                    if (!_manage && !e.shouldRegInfo(3, arguments, this)) {
                        e.logDog(1000032),
                        e.ajaxLoad.show();
                        var t = c.regUrl;
                        g_config.isDoubleGame && (t += "&openIdB=" + e.otherOpenId),
                        $.ajax({
                            type: "post",
                            url: t,
                            error: function() {
                                e.ajaxLoad.hide()
                            },
                            success: function(t) {
                                var a; (e.ajaxLoad.hide(), (a = $.parseJSON(t)).isOutofTestNum) ? e.statusMsg("活动尚未发布", "最多测试人数为100人！") : a.isOutofRegNum ? g_config.createTime > 1520265601e3 ? e.statusMsg("本活动参与人数已达到最大限制如需继续参与，请与主办方联系。") : e.statusMsg("本活动报名人数已达到最大限制如需继续参与，请与主办方联系。") : (g_config.isReg = !0, (a = $.parseJSON(t)).success && ($(".resule-foot-one .resule-status-again span").html("继续刷记录"), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $("#resule-status-count").mustHide(), $("#resule-sucReg").show()))
                            }
                        })
                    }
                },
                $(".resule-status-reg").on("touchstart", this.regEvent), this.show = this.showResult) : ($(".resule-gift-home").css({
                    width: "10rem",
                    height: "1.75rem",
                    "line-height": "1.75rem"
                }), $(".resule-gift-home2").css({
                    width: "4.75rem",
                    height: "1.75rem",
                    "line-height": "1.75rem"
                }), this.giftBox.find(".resule-gift-seeRank").remove(), this.show = this.showGift)
            }
        },
        g.showResult = function(t) {
            if (!this.disable && !this.result_disable) {
                g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !1);
                var a = $.extend({
                    isSuc: !1,
                    gameScore: 0,
                    minScore: 0,
                    bestScore: 10,
                    rank: 10,
                    count: 3,
                    beat: 99,
                    notreal: !1,
                    gameType: 0,
                    gameCostTime: 0,
                    bestCostTime: 0
                },
                t);
                e.tlog("resuleDef---", a.gameScore),
                !_manage && g_config.showSkillSup && (a.isSuc ? (e.logDog(1000200, 5), g_config.localPoupPage = 5) : (e.logDog(1000200, 6), g_config.localPoupPage = 6)),
                this.resuleArg = a,
                !a.notreal && (e.currentRank = a.rank),
                !a.notreal && (e.currentScore = a.bestScore),
                !a.notreal && (e.currentBestCostTime = a.bestCostTime),
                e.wxConfig.setWxShareByStatus(),
                $("#resule-status-scrollWrap").show(),
                $("#resule-status-lotsBox,#resule-gift-box").hide(),
                $(".resule-one-button").hide(),
                $("#resule-status-playinfo").mustHide(),
                $(".resule-foot-box").css("margin-top", "-2.6rem");
                var i = !t.isSuc && (3 != a.gameType || ~ [28, 18].indexOf(g_config.style)) && 6 != a.gameType;
                $(".sucResule").toggleClass("hide", i),
                $(".failResule").toggleClass("hide", !i),
                _manage || (hg.edit.initEdit("resuleFootOne"), hg.edit.initEdit("resuleFootTwo")),
                this.statusBox.show(),
                e.fadOut(this.resuleBox),
                $("#resule-status-head .sucResule").hasClass("hide") ? $("#resule-status-head .failResule").hasClass("hide") || (h = !_manage && $buryPoint.enterFailurePage()) : p = !_manage && $buryPoint.enterSuccessPage(),
                g_config.$$isTheSpecAid && this.resuleBox.css({
                    "z-index": "999",
                    opacity: 1
                });
                var n = $(".resuleArg");
                if (a && void 0 !== a.gameType) if (4 == a.gameType || 0 == a.gameType) $("#drawMenuBtnBox").toggleClass("hide", !0),
                $("._jumptoMinappBtn_fun").hide();
                else {
                    var o = _manage ? g_config._preview ? !g_config.showMenu: 1 == parent.game._setting.ms: !g_config.showMenu;
                    $("#drawMenuBtnBox").toggleClass("hide", o),
                    $("._jumptoMinappBtn_fun2").toggle(!o),
                    $("._jumptoMinappBtn_fun3").toggle(!o),
                    $("._jumptoMinappBtn_fun").hide()
                }
                a.notreal || g_config.sortType != a.gameScore >= g_config.drawLimitDef || (void 0 === e.oss_aof && (e.oss_aof = 0), e.oss_aof++, e.oss_aof >= 2 && (e.logDog(1000033, g_config.failSrcId), e.oss_aof = 0)),
                $("#resule-status-scrollWrap").css("height", $(window).height() - 1.2 * g_rem),
                !_manage && g_config.showSkillSup && (e.hdSkillLog(!0, 1000069), e.logDog(1000028, 1), e.FdpTrack("hd_game_ad_expo", {
                    hd_modid: g_config.modId,
                    hd_ta: g_config._ta,
                    hd_free_text_0: "挑战结果"
                }), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 1 + g_config.isAOpenId)),
                1 != a.gameType && 3 != a.gameType || (g_config.showMenu && e.logDog(1000036), g_config.openStrongAttention && (a.isSetShownAchieve || a.isSuc && !g_config.ishasAttentiosThisAPP && !g_config.hasShowScore && !g_config.$hasShowScore) && _()),
                _manage || ($(".gameBox,.home,.body").addClass("overflow-y-hidden"), $(".bottomSkill").is(":visible") && $(".bottomSkill").hide()),
                42 != g_config.style && 56 != g_config.style && 85 != g_config.style && 80 != g_config.style || g_config.createTime > 15421608e5 && ($(".youraward.costTime").show(), $("#bestCostTime").show()),
                $(".resule-status-seeScore").on("touchstart",
                function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    _manage || e.Res.loadg("fansExclusive").then(function() {
                        e.showForcedAttPoup().then(function() {
                            g.seeScore(n, a),
                            !g_config.$hasShowScore && _()
                        })
                    })
                });
                var s = _manage ? parent.game._setting.hideRank: g_config.hideRank,
                r = function(e) {
                    e ? s ? ($("#resule-status-body .beat-Percent").hide(), $("#resule-status-body .resultArg-wrap").hide()) : ($("#resule-status-body .beat-Percent").show(), $("#resule-status-body .resultArg-wrap").show()) : s ? $("#resule-status-body .resultArg-wrap").hide() : $("#resule-status-body .resultArg-wrap").show(),
                    s ? ($("#resule-status-count").addClass("hideRank"), $("#resule-status-playinfo").addClass("hideRank"), $("#resule-sucReg").addClass("hideRank")) : ($("#resule-status-count").removeClass("hideRank"), $("#resule-status-playinfo").removeClass("hideRank"), $("#resule-sucReg").removeClass("hideRank"))
                },
                c = 0;
                if (3 == a.gameType || e.isGameNoaward(g_config.style, a.gameType)) $(".resule-foot-one .resule-status-again").show(),
                $(".resule-foot-one .resule-status-again span").html(g_config.resuleStatusAgainText),
                $("#resule-foot-box").css("padding-bottom", "1rem"),
                "fail" == a.gameScore ? (this.seeScore(n, a), $("#resule-status-bird").show(), $("#resule-status-ribbon").removeClass("resule-status-ribbon").addClass("resule-status-faiRibbon"), $("#resule-status-bird").removeClass("resule-status-birdfly").addClass("resule-status-birdfly"), $("#resule-status-box .resule-bgLight").hide(), $(".resule-status-userImg").css("border-color", "#B5B5B5"), $("#resule-status-body .beat-Percent").hide(), r(!1), 0 == a.rank || $("#resule-status-body .result-scoreUnit").show(), n.eq(0).text("无"), 0 == n.eq(2).text().length ? (n.eq(2).text(a.bestScore), n.eq(3).text(a.rank > 0 ? a.rank: "无")) : "无" == n.eq(0).text() ? $("#resule-status-body .youraward .result-scoreUnit").hide() : $("#resule-status-body .result-scoreUnit").show(), e.isplaySucess = !1, c = 1) : ($("#resule-status-bird").hide(), $(".resule-status-userImg").css("border-color", "#70D572"), $("#resule-status-ribbon").removeClass("resule-status-faiRegRibbon").removeClass("resule-status-faiRibbon").addClass("resule-status-ribbon"), $("#resule-status-box .resule-bgLight").show(), r(!0), g_config.createTime > 15837696e5 ? _manage ? this.seeScore(n, a) : g_config.openStrongAttention && g_config.ishasAttentiosThisAPP ? this.hideScore(n) : this.seeScore(n, a) : ($("#resule-status-body .result-scoreUnit").show(), this.seeScore(n, a)), e.isplaySucess = !0, c = 10),
                $(".resule-status-minscore").hide(),
                $("#resule-status-count").mustHide(),
                $(".resule-foot-one .resule-status-gift").hide(),
                $(".resule-foot-one .resule-status-reg").hide(),
                $(".resule-foot-two .resule-status-again").hide(),
                $(".resule-foot-two .resule-status-home").show(),
                (3 == gameType || e.isGameNoaward(g_config.style, gameType)) && g_config.isCheckPlayTimes ? $("#resule-status-playinfo").canShow() : $("#rank_showRule").show();
                else if ("fail" === a.gameScore ? ($(".resuleArg-fail").text(a.minScore), $("#resule-status-body").hide(), $("#resule-status-other").show()) : ($("#resule-status-body").show(), $("#resule-status-other").hide()), a.isSuc) {
                    e.isplaySucess = !0,
                    $("#resule-status-bird").hide(),
                    18 != g_config.style && 28 != g_config.style && 100 != g_config.style || ($(".youraward").show(), $(".youraward.costTime").hide(), $(".youraward.special").hide(), $("#bestArg").show(), $("#bestRank").show(), $(".resule-status-minscore").css("margin", 0)),
                    $("#resule-status-ribbon").removeClass("resule-status-faiRibbon").removeClass("resule-status-faiRegRibbon").addClass("resule-status-ribbon"),
                    $(".resule-status-userImg").css("border-color", "#70D572"),
                    $(".resule-status-minscore").hide(),
                    $("#resule-status-count").canShow(),
                    0 == a.gameType ? ($(".resule-foot-one .resule-status-gift").show(), $(".resule-foot-one .resule-status-again").hide(), $(".resule-foot-two .resule-status-again").show(), $(".resule-foot-two .resule-status-home").hide(), e.logDog(1000027)) : 4 == a.gameType ? ($(".resule-foot-one .resule-status-send").show(), $(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show(), $("#resule-status-count").mustHide()) : 1 == a.gameType && ($("#resule-status-count").mustHide(), $("#resule-foot-box").css("margin-top", "0.6rem"), $(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show(), e.logDog(1000035), g_config.createTime > 1520265601e3 ? ($(".resule-foot-one .resule-status-again span").html("刷记录"), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $("#resule-sucReg").show(), g_config.createTime > 15837696e5 && g_config.openStrongAttention && !g_config.hasWXAuth && g_config.ishasAttentiosThisAPP && ($(".resule-foot-one .resule-status-again, .home").hide(), $(".resule-foot-one .resule-status-seeScore, .gameBox").show())) : g_config.isReg ? ($(".resule-foot-one .resule-status-again span").html("继续刷记录"), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $("#resule-sucReg").show()) : $(".resule-foot-one .resule-status-reg").show()); - 1 != [1, 6].indexOf(newGameType) && ($(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show()),
                    g.exsposeFlag = !0,
                    $("#resule-status-box .resule-bgLight").show();
                    for (var d = 0,
                    l = (f = [a.gameScore, a.gameCostTime, a.minScore, a.bestScore, a.bestCostTime, a.rank, a.totalCount, a.count, a.count]).length; d < l; d++) n.eq(d).text(f[d]);
                    $("#resule-status-body .dayDrawCount").text(_manage ? parent.game._setting.dtl: a.count),
                    $("#resule-status-body #totalDrawCount").text(_manage ? parent.game._setting.drawTotal: a.totalCount),
                    $("#msxbSucTip").text("恭喜你获得密室小能手称号！"),
                    $("#resule-status-body .beat-Percent span").text(a.beat),
                    r(!0),
                    a.isSuc && 1 === a.gameType && g_config.createTime > 15837696e5 && g_config.openStrongAttention && (_manage || (g_config.ishasAttentiosThisAPP ? this.hideScore(n) : this.seeScore(n, a))),
                    c = 10
                } else {
                    this.seeScore(n, a),
                    $("#resule-status-bird").show(),
                    18 != g_config.style && 28 != g_config.style && 100 != g_config.style || ($(".youraward").hide(), $(".youraward.special").show(), $("#bestArg").hide(), $("#bestRank").hide(), $(".resule-status-minscore").css("margin", "10px 0 10px")),
                    1 != a.gameType || g_config.createTime < 1520265601e3 ? $("#resule-status-ribbon").removeClass("resule-status-ribbon").addClass("resule-status-faiRibbon") : $("#resule-status-ribbon").removeClass("resule-status-ribbon").addClass("resule-status-faiRegRibbon"),
                    $(".resule-foot-one .resule-status-again span").html(g_config.resuleStatusAgainText),
                    $(".resule-status-userImg").css("border-color", "#B5B5B5"),
                    $(".resule-status-minscore").show(),
                    $("#resule-status-count").mustHide(),
                    $("#resule-status-box .resule-bgLight").hide(),
                    $(".resule-foot-one .resule-status-gift").hide(),
                    $(".resule-foot-one .resule-status-reg").hide(),
                    $(".resule-foot-one .resule-status-again").show(),
                    $(".resule-foot-two .resule-status-again").hide(),
                    $(".resule-foot-two .resule-status-home").show(),
                    $("#resule-status-bird").removeClass("resule-status-birdfly").addClass("resule-status-birdfly");
                    var f;
                    for (d = 0, l = (f = [a.gameScore, a.gameCostTime, a.minScore, a.bestScore, a.bestCostTime, a.rank, a.count]).length; d < l; d++) n.eq(d).text(f[d]);
                    $("#resule-status-body .beat-Percent").hide(),
                    r(!1),
                    e.isplaySucess = !1,
                    c = 1
                }
                if (0 !== c) {
                    var u = $("#resule-status-scrollWrap").find(".hasMoreActiveBtn"),
                    m = $("#resule-status-scrollWrap").find(".noMoreActiveBtn");
                    if (u.length > 0) {
                        var w = g_config.$$pageAdInfo[c];
                        w.btnIsImg ? (u.find(".moreActive").css("backgroundImage", "url(" + w.btnImg + ")"), u.find(".moreActive").removeClass("theRunningAdClass moreActiveNotImg moreActiveNotImgWhite").html("")) : (u.find(".moreActive").css("backgroundImage", ""), u.find(".moreActive").addClass("theRunningAdClass moreActiveNotImg moreActiveNotImgWhite").html(w.btnText + "<span class='gotoFlag'><i></i></span>")),
                        u.find(".moreActive").data("pagekey", c),
                        u.show(),
                        m.hide(),
                        u.find(".moreActive").toggleClass("hasMarginRight", 2 !== w.positionType),
                        u.find(".theSpecialTarget").toggle( !! ~ [1, 3].indexOf(w.positionType))
                    }
                    $("#resule-status-scrollWrap").find(".theSpecialTarget").data("pagekey", c),
                    e.gamePageExposure(c, !m.is(":visible"), u.find(".moreActive"))
                }
                $("._jumptoMinappBtn_fun").css("display", $("._jumptoMinappBtn_fun").css("display")),
                e.optReSize(),
                hg.fire("showResult", a, n)
            }
        },
        g.showGift = function(t) {
            if (!this.disable && !this.gift_disable) {
                g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !1);
                var a = $.extend({},
                {
                    isSuc: !1,
                    showNoAwardPage: !1,
                    giftName: "",
                    giftStyle: "",
                    giftCode: 0,
                    giftImage: "",
                    awardImageW: "9rem",
                    awardImageH: "9rem",
                    awardTypeNum: 0,
                    awardIndex: 1,
                    genewxcard: !1
                },
                t),
                i = !(0 != gameType || !g_config.isShowNoAwardTips || !a.isOutAwardNum),
                n = g_config.createTime > 16000992e5,
                o = !n && i,
                s = n && (a.showNoAwardPage || i),
                r = a.isSuc && !s,
                g = !a.isSuc && !s,
                c = a.awardIndex == (_manage ? 9 : 900) ? g_config.comfort: g_config.awardList[a.awardIndex - 1];
                if (_manage || g_config.$$hasLuckShakePage && 3 != g_config.shakeModel || $(".yaoyiyao-luckDraw-tip").remove(), !_manage && g_config.showSkillSup && (r ? (e.logDog(1000200, 7), g_config.localPoupPage = 7) : g && (e.logDog(1000200, 8), g_config.localPoupPage = 8)), this.statusBox && !i && e.fadIn(this.statusBox), o) e.showMsg("来得太晚啦<br>奖品已经派完，下次请早点哦", 0, "返回首页",
                function() {
                    51 == g_config.style || 62 == g_config.style || 61 == g_config.style ? window.location.reload() : home("luckDraw")
                },
                !0);
                else {
                    if ($("#resule-gift-box").find(".attentionBox .menuBtnBox").attr("data-minapp") || $("#resule-gift-box").find(".attentionBox .menuBtnBox").show(), $("#noAwardPage").hide(), $(".menuAgain,.menuBack,.backListen,.repeatDraw,.TellToOther").css({
                        bottom: $("#resule-gift-box").find(".attentionBox").height() + .3 * g_rem,
                        "line-height": "1.75rem"
                    }), $(".menuAgain,#resule-gift-box .menuBack,.repeatDraw,.backListen").css({
                        bottom: "auto"
                    }), $("#resule-gift-sucImg").data("openCode", a.giftCode), e.fadOut(this.resuleBox), e.fadOut(this.giftBox), g_config.$$isTheSpecAid && (this.resuleBox.css({
                        "z-index": "999",
                        opacity: 1
                    }), this.giftBox.css({
                        "z-index": "999",
                        opacity: 1
                    })), a.isSuc ? $("._jumptoMinappBtn_fun").hide() : $("._jumptoMinappBtn_fun").show(), (0 == gameType || 4 == gameType || 5 == gameType) && !_manage) {
                        var d = $(".cannotGetThePriceBox").height(),
                        p = $(".resuleBox").height() - $("#resule-gift-box").find(".attentionBox").height() - 2.5 * g_rem;
                        if (d > (p = 75 == g_config.style ? p + 2.5 * g_rem: p)) {
                            $(".cannotGetThePriceBox").height(p);
                            var h = 16 * g_rem - parseFloat($("#faiImgBox img").css("left")),
                            w = p - parseFloat($("#faiImgBox img").css("top")),
                            _ = $("#faiImgBox img").width() / $("#faiImgBox img").height();
                            $("#faiImgBox img").height() > w && (w * _ > h ? $("#faiImgBox img").height(h / _).width(h) : $("#faiImgBox img").height(w).width(w * _))
                        }
                    }
                    $(".TellToOther").toggle(r),
                    $(".backToListen,.tellToTA").css({
                        bottom: "-2.5rem",
                        "line-height": "1.9rem"
                    }),
                    $(".menuAgain").length > 0 ? $("#resule-gift-scrollWrap").css("height", $(window).height() - $(".menuAgain").outerHeight(!0) - 6.7 * g_rem) : $("#resule-gift-scrollWrap").css("height", $(window).height() - $(".menuBtnBox").outerHeight(!0) - 6.7 * g_rem);
                    var y = $(".gifArg"),
                    x = $(".seeAwardDetail"),
                    I = $(".payGet"),
                    b = ((_manage ? parent.game._awardList[a.awardIndex - 1].$type: g_config.$$awardTypeInfo[v(c.awardtype)]).isAfterPayType || !1) && c.isOpenAfterPay; ! _manage && g_config.showSkillSup && (e.hdSkillLog(!0, 1000069), e.logDog(1000028, 1), e.FdpTrack("hd_game_ad_expo", {
                        hd_modid: g_config.modId,
                        hd_ta: g_config._ta,
                        hd_free_text_0: "挑战结果"
                    }), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 1 + g_config.isAOpenId)),
                    g_config.showMenu && e.logDog(1000036);
                    var T = $("#resule-gift-box .attentionBox"),
                    B = T.find(".hdskillInfo").outerHeight(!0) + T.find(".holdBox").outerHeight(!0) + .5 * g_rem;
                    isOldAwardPage ? $("#resule-gift-scrollWrap").css("height", $(window).height() - 1.2 * T.height() - 6.8 * g_rem) : 75 == g_config.style ? $("#resule-gift-scrollWrap").css("height", $(window).height() - 1.2 * T.height() - 1.2 * g_rem) : $("#resule-gift-scrollWrap").css("height", $(window).height() - B - 8.2 * g_rem);
                    var S = 0;
                    if (r) {
                        l = !_manage && $buryPoint.enterWinPrizePage(),
                        $("#resule-gift-box").css("height", "auto"),
                        $("#faiImgBox").hide(),
                        !isOldAwardPage && $(".attentionBox .tellToOthers,#resule-gift-box .attentionBox .menuBtnBox").css({
                            visibility: "hidden"
                        }),
                        $("#Award_Round_Dot").css("display", "inline-block"),
                        $("#resule-gift-scrollWrap").show(),
                        m(g_config.flagB, 8388608) && $(".attentionBox").show().html("返回首页").addClass("attentionBox_mobi2");
                        var C = function(t) {
                            var a = $("#resule-gift-sucImg").height();
                            t && (a = $("#luckContainer .imgContainer").height());
                            var i = B + .5 * g_rem,
                            n = $(window).height() - 18.45 * g_rem - i;
                            25 != g_config.style && 27 != g_config.style && (2.5, n += 3.1 * g_rem),
                            75 != g_config.style && (a > n ? (e.tlog("短屏幕"), g_config.isShortWindow = !0, $("#resule-gift-buttonMenu").hide(), $("#resule-gift-buttonMenu-bottom").show().css({
                                bottom: i,
                                height: "4.5rem"
                            }), $("#resule-gift-scrollWrap").css("height", $(window).height() - B - 6.7 * g_rem)) : (e.tlog("不是短屏幕"), g_config.isShortWindow = !1, $("#resule-gift-buttonMenu").show(), $("#resule-gift-buttonMenu-bottom").hide(), $("#resule-gift-scrollWrap").css("height", $(window).height() - B - 2.2 * g_rem)))
                        };
                        if (isOldAwardPage || (_manage ? $("#resule-gift-sucImg").off("hd-resizable-resize.setAwardPageCSS").on("hd-resizable-resize.setAwardPageCSS", C) : setTimeout(C, 0)), $("#resule-gift-sucImg").trigger("hd-resizable-resize"), !e.currentAwardLevel && (e.currentAwardLevel = []), e.wxConfig.setCurrentAward(e.currentAwardLevel.join("") + a.awardIndex), 58 != g_config.style && 59 != g_config.style && 60 != g_config.style && 61 != g_config.style && 62 != g_config.style && 63 != g_config.style && 70 != g_config.style && 79 != g_config.style && e.wxConfig.setWxShareByStatus(), this.hasGift = !0, !_manage) {
                            g_config.currentAward = c;
                            var A = Date.now();
                            if (75 != g_config.style) $(".afterPayStyle").toggle(b).text((c.afterPayStyle || "").replace("#money#", c.payMoney / 100).replace("#val#", "元立享")),
                            I.toggle(b).text("支付" + c.payMoney / 100 + "元立享"),
                            y.eq(0).toggle(!b).text(a.giftStyle),
                            x.toggle(!b);
                            else {
                                $("#resule-gift-sucImg").toggleClass("afterPaySucImg", b);
                                var k = b ? c.afterPayStyle.replace("#money#", c.payMoney / 100).replace("#val#", "元立享") : a.giftStyle;
                                y.eq(0).text(k),
                                $(".editTarget-seeAwardDetailImg").toggle(!b),
                                $(".payBox").toggle(b),
                                $(".gotoPayBtn").text("支付" + c.payMoney / 100 + "元立享")
                            }
                            var P = b && c.payTimeLimit;
                            if ($(".payTimeTips").toggle(P), this.countDown && this.countDown.stop(), this.getShortWindowTimer && clearTimeout(this.getShortWindowTimer), P) {
                                var L = 24 * c.payTime.pay_day * 3600 + 3600 * c.payTime.pay_hour + 60 * c.payTime.pay_min,
                                D = this;
                                this.getShortWindowTimer = setTimeout(function() {
                                    var t = g_config.isShortWindow ? $(".payTimeTips .payTimeDetail").get(1) : $(".payTimeTips .payTimeDetail").get(0);
                                    D.countDown = e.countDownTime({
                                        endTime: A + 1e3 * L
                                    }).on("change",
                                    function(e, a) {
                                        $(t).text(a)
                                    }).on("end",
                                    function() {
                                        g_config.payTimeout = !0,
                                        D.getShortWindowTimer && clearTimeout(D.getShortWindowTimer),
                                        $(".payTimeTips").hide()
                                    })
                                },
                                20)
                            }
                            $(".payGet, .gotoPayBtn").off("touchend.pay").on("touchend.pay",
                            function() {
                                var t = {
                                    enCode: a.awardCode || a.giftCode,
                                    payTime: c.payTime,
                                    awardTime: A,
                                    payTimeLimit: c.payTimeLimit,
                                    codeStatus: a.codeStatus
                                };
                                e.awardPay(t)
                            })
                        }
                        y.eq(1).text(a.giftName),
                        9 == a.awardTypeNum ? x.addClass("jzCouponBtn").attr("code", a.giftCode).text("点击领取") : b ? (x.hide(), I.show()) : (!_manage && I.hide(), 15823657 == g_config.aid && x.removeClass("jzCouponBtn").text("填写领取礼品信息")),
                        $("#resule-gift-sucImg").css({
                            width: a.awardImageW,
                            height: a.awardImageH
                        });
                        var O = $("#resule-gift-sucImg").parent().height() / 2 - parseRemToPx(g_config.clickTips.pointH) / 2;
                        if ($("#lightPoint").css("top", O), O += .4 * g_rem, $("#click-view").css("top", O), $("#resule-gift-sucImg").css("opacity", 0), $("#resule-gift-sucImg").on("load",
                        function() {
                            console.log("1"),
                            $(this).css("opacity", 1),
                            $(this).unbind("load")
                        }), 900 == a.awardIndex) $("#resule-gift-sucImg").attr("src", e.modifyVersion(_manage ? a.giftImage: g_config.comfort.comimg));
                        else {
                            g_config.award || (g_config.award = c, g_config.wxAward = c);
                            var M = b ? "paimg": "aimg";
                            $("#resule-gift-sucImg").attr("src", e.modifyVersion(_manage ? a.giftImage: c[M]))
                        }
                        e.logDog(1000003, 0),
                        e.logObjDog(1000092, 3, g_config.gameId),
                        _manage || ($(".gameBox,.home,.body").addClass("overflow-y-hidden"), $(".bottomSkill").is(":visible") && $(".bottomSkill").hide()),
                        S = 9
                    } else(g || s) && ($("#faiImgBox .resultGiftBtnGroup").css({
                        bottom: $("#resule-gift-box .attentionBox").height() + 3 * g_rem
                    }), _preview && $("#theGetPricePic,#theGetPricePicTwo,#theGetPricePicThree").attr("src", e.modifyVersion($("#theGetPricePic,#theGetPricePicTwo,#theGetPricePicThree").attr("src"))), 75 != g_config.style && $(".attentionBox:not(.attentionBoxB) .menuBtnBox.faiMenuBtn ").css("margin-bottom", "0.8rem"), $("#resule-gift-box").css("height", $(window).height() - $("#resule-gift-box .attentionBox").height()), g_config.style, $("#resule-gift-scrollWrap,#resule-status-lotsBox").hide(), isOldAwardPage || ($(".attentionBox .tellToOthers,#resule-gift-box .attentionBox .menuBtnBox").css({
                        visibility: "visible"
                    }), $("#resule-gift-buttonMenu-bottom").hide()), !_manage && isLimitDraw && drawTotalLimit - totalCount == 0 && $("#resule-gift-box .resule-gift-home.menuAgain").text("返回首页"), $("#faiImgBox").show(), $("#cannotGetThePriceContainer").toggle(g), g && (f = !_manage && $buryPoint.enterLosePrizePage()), $("#noAwardContainer").toggle(s), s && (u = !_manage && $buryPoint.enterNoPrizePage()), m(g_config.flagB, 8388608) && ($("#xydzpAgainImg").attr("src", _resRoot + "/image/xydzp/backToHomeImg.png"), $("#xydzpCloseImg").attr("src", _resRoot + "/image/xydzp/backToHomeImg.png"), $(".attentionBox").hide()), S = g ? 2 : 3);
                    if (0 !== S) {
                        var j = $("#resule-gift-box").find(".hasMoreActiveBtn"),
                        R = $("#resule-gift-box").find(".noMoreActiveBtn");
                        if (j.length > 0) {
                            var N = g_config.$$pageAdInfo[S];
                            N.btnIsImg ? (j.find(".moreActive").css("backgroundImage", "url(" + N.btnImg + ")"), j.find(".moreActive").removeClass("theRunningAdClass moreActiveNotImg moreActiveNotImgWhite").html("")) : (j.find(".moreActive").css("backgroundImage", ""), j.find(".moreActive").addClass("theRunningAdClass moreActiveNotImg moreActiveNotImgWhite").html(N.btnText + "<span class='gotoFlag'><i></i></span>")),
                            j.find(".moreActive").data("pagekey", S),
                            j.show(),
                            R.hide(),
                            j.find(".moreActive").toggleClass("hasMarginRight", 2 !== N.positionType),
                            j.find(".theSpecialTarget").toggle( !! ~ [1, 3].indexOf(N.positionType))
                        }
                        $("#resule-gift-box").find(".theSpecialTarget").data("pagekey", S),
                        e.gamePageExposure(S, !R.is(":visible"), j.find(".moreActive"))
                    }
                    g_config.haveAward && 6 != gameType && ("findAct" == _fromCbGameOrigin && e.logDog(1000314, 103), g_config.$$isOpenGameVer2 ? zgnpyVue.showMyAwardBtn = !0 : $("#myAwardBtn").show())
                }
            }
        },
        e.resulePoup = g
    } (),
    function() {
        var t, a, i, n, o = 0;
        $.each({
            tlog: function(t, a) { / log / .test(g_config.testCMD) && e.logStd(t, a),
                this.log(t, a)
            },
            tlogErr: function(e, t) {
                this.log(e, t, !0)
            },
            log: function(s, r, g) {
                m_debug && $(function() {
                    try {
                        t ||
                        function() {
                            t = $('<div id="logBox"><div id="log_head"><div id="log_close" class="log_icon">╳</div><div id="log_min" class="log_icon">━</div>' + ("undefined" != typeof g_config && g_config.test ? '<div id="log_share" class="log_icon">share</div>': "") + '</div><div id="log_text_wrap"><div id="log_text"></div></div></div>'),
                            a = t.find("#log_text"),
                            i = t.find("#log_text_wrap"),
                            n = $('<div id="log_max" class="hide"><div id="log_max_inner"><div id="log_max_innerText">＋</div></div></div>');
                            var s = t.find("#log_head"),
                            r = {},
                            g = $("body");
                            if (g.length < 0) return;
                            g.append(t),
                            g.append(n),
                            s.on("touchstart",
                            function(e) {
                                e.preventDefault(),
                                e.stopPropagation();
                                var t = e.originalEvent.targetTouches[0];
                                r.x = t.pageX,
                                r.y = t.pageY
                            }).on("touchmove",
                            function(e) {
                                e.preventDefault(),
                                e.stopPropagation();
                                var a = e.originalEvent.targetTouches[0],
                                i = t.offset().left + a.pageX - r.x,
                                n = t.offset().top + a.pageY - r.y;
                                r.x = a.pageX,
                                r.y = a.pageY,
                                i > -.2 * t.width() && i + .5 * t.width() < $(window).width() && (t[0].style.left = i + "px"),
                                n > 0 && n + .5 * t.height() < $(window).height() && (t[0].style.top = n + "px")
                            }),
                            t.find("#log_close").on("touchstart",
                            function() {
                                n.hide(),
                                t.hide(),
                                a.empty(),
                                o = 0
                            }),
                            t.find("#log_min").on("touchstart",
                            function() {
                                n.show(),
                                t.hide()
                            }),
                            t.find("#log_share").on("touchstart",
                            function() {
                                var t = e.wxConfigArg.url + "&hdtest=true";
                                if (e.log("shareUrl", t), g_config.test) {
                                    t = escape(t).replace(/\+/g, "%2B").replace(/\"/g, "%22").replace(/\'/g, "%27").replace(/\//g, "%2F");
                                    var a = "http://" + e.gameDomain + "/hdtest.jsp?cmd=setUrl&url=" + t;
                                    window.open(a)
                                }
                            }),
                            n.on("touchstart",
                            function() {
                                n.hide(),
                                t.show(),
                                n.removeClass("hasNewErr")
                            }),
                            a.on("touchstart", ".log_flag",
                            function() {
                                var e = $(this).parent();
                                e.hasClass("log_line_ellipsis") ? e.removeClass("log_line_ellipsis") : e.addClass("log_line_ellipsis")
                            })
                        } (),
                        0 === o && t.show(),
                        o++,
                        a.append('<div class="log_line log_line_ellipsis' + (g ? " log_line_err": "") + '"><span class="log_flag">' + e.decodeHtml(s) + '</span><span class="log_text">' + e.decodeHtml(r) + "</span></div>"),
                        i[0].scrollTop = i[0].scrollHeight,
                        g && n.is(":visible") && n.addClass("hasNewErr")
                    } catch(e) {
                        console.log(e)
                    }
                })
            }
        },
        function(t, a) {
            e[t] = function(t, i, n) {
                e.IsPC() || (arguments.length <= 1 && (i = t, t = "###"), i = "object" === e.getType(i) || "array" === e.getType(i) ? $.toJSON(i) : String(i), a.call(e, t, i, n))
            }
        })
    } (), e.initEdit = function(t) {
        var a = t.origin,
        n = t.originDef,
        o = t.originMod,
        s = /\b(editTarget|editRelate)(-\w+?)(-\d+?)?\b/,
        r = {};
        function g(e) {
            if (e = $.trim(e), /^#[0-9a-fA-f]{3}$/.test(e)) {
                for (var t = "#",
                a = 1; a < 4; a += 1) {
                    var i = e.slice(a, a + 1);
                    t += i + i
                }
                e = t
            }
            return /^#[0-9a-fA-f]{6}$/.test(e) ? ["rgb(", (e = parseInt(e.substring(1), 16)) >> 16, ",", (65280 & e) >> 8, ",", 255 & e, ")"].join("") : e
        }
        function c(e, t) {
            return void 0 === t || -1 == t || "transparent" == e ? e: "rgba" + e.substring(e.indexOf("("), e.indexOf(")")) + "," + (t || 0) + ")"
        }
        function d(e) {
            for (var t = 0; t < a.length; t++) {
                var i = a[t];
                if (i.name === e) return [i, n[t]]
            }
            return [!1, !1]
        }
        function l(t, a, i, n) {
            var o = {};
            o.from = t,
            o.title = a[1],
            o.limit = a[2],
            o.defSrc = e.getSrc(a[0]);
            var s = i.showPath[n];
            return "number" == typeof s && s >= 0 && (o.showPath = i.showPath, o.showPathIndex = n),
            a[3] && (o.defSize = a[3]),
            o
        }
        function f(t, a) {
            if (1 == arguments.length) {
                if (! (a = t.attr("edit_defer_src"))) return;
                t.removeAttr("edit_defer_src")
            }
            return a || e.log("setJqSrc src null"),
            t.each(function() {
                var t, i;
                /img/i.test($(this)[0].nodeName) ? $(this).attr("src", a) : ($(this).css({
                    "background-image": 'url("' + a + '")',
                    "background-position": "center center",
                    "background-repeat": "no-repeat"
                }).addClass("hd-game-theBg-fillAuto"), t = this, i = a, e.imgReady(i,
                function() {
                    if (!$(t).hasClass("hd-img-fillDiv")) {
                        var a = {
                            width: $(t).outerWidth(),
                            height: $(t).outerHeight()
                        },
                        i = e.Img.calcSize(this.width, this.height, a.width, a.height, e.Img.MODE_SCALE_DEFLATE_FILL, !0),
                        n = 100 * i.width / a.width,
                        o = 100 * i.height / a.height;
                        $(t).css("background-size", n + "% " + o + "%")
                    }
                }))
            }),
            t
        }
        function u(e, t, a) {
            var i = e;
            $.isArray(e) ? (void 0 === t && (t = 0), void 0 === (i = e[t]) && (i = void 0 === a ? e[0] : u(a, t))) : void 0 === i && void 0 !== a && (i = a);
            return i
        }
        function p(a, i, n) {
            var o = a[0],
            s = a[1],
            g = void 0 !== n;
            i || (i = $(".editTarget-" + o.name).not(".cacheDiv")); !
            function(a, i, n) {
                a.name;
                var o = -2,
                s = null,
                g = !1,
                c = null,
                f = i.targetName || !0,
                u = "editTarget-" + a.name,
                p = i.isExpand,
                m = !!i.isEditVisible,
                w = !!i.changeTitle;
                if (!i._initModuleLayerArgs) {
                    if ((i.css || i.cssAll) && (i.cssAll ? (c = [], $.each(i.cssAll,
                    function(e, t) {
                        d(t)[1].css && (c = c.concat(d(t)[1].crrCssArg))
                    })) : c = i.crrCssArg, g = !c[0].targetName || c[0].targetName, 1 == i.cssEdit && "_backgroundAll" !== i.edit)) {
                        var _ = c;
                        $$(function() {
                            var t = "pageStyleColor" == a.name,
                            i = "awardDetailStyleColor" == a.name;
                            parent.Edit.addEditBtn({
                                name: c[0].targetName || "编辑背景",
                                selecter: "." + u,
                                onclick: function() {
                                    return parent.Edit.Css.showCssByGame.call($("." + u), "." + u, _, _[0].targetName),
                                    parent.operateFlagList[21] = !0,
                                    e.logPhoneDog(5),
                                    !1
                                },
                                prepend: t || i,
                                filter: function(e) {
                                    if (t) {
                                        var a = ".advertisingBox,.friendEnter,.createShareImageBox,.giftBarBox,.awardDetail,#poupHead";
                                        return 102 == g_config.style ? a += ",.taskBarBox,.turnTableBox": 107 == g_config.style && (a += ",#xydzpBg,#hlwwjBg,#fkpBg,#sssqBg,#jfzBg"),
                                        0 == $(e).closest(a).length
                                    }
                                    if (i) {
                                        var a = "#awardDetailBox";
                                        return $(e).parents(a).length > 0
                                    }
                                    return null
                                }
                            })
                        }),
                        g = !1,
                        c = null
                    }
                    if (void 0 !== i.edit) if ("number" == typeof i.edit) o = i.edit;
                    else {
                        if (h(i.edit)) { ! t.bgList && (t.bgList = []);
                            var v = null,
                            y = $.isArray(i.path[0]),
                            x = "advertising" === i.name,
                            I = "wcdAdvertising" === i.name,
                            b = i.name,
                            T = i.from || ".editTarget-" + b + ",.editRelate-" + b;
                            if (y) { (v = {}).paths = [];
                                for (var B = 0; B < 4; B++) {
                                    var S = i.path[B] || i.path[0];
                                    B > 0 && (T = ".editTarget-" + b + "-" + B + ",.editRelate-" + b + "-" + B),
                                    v.paths.push(l(T, S, a, B))
                                }
                            } else v = l(T, i.path, a, 0);
                            if (v._flag = -1, "_backgroundAll" === i.edit && c && (v._cssArg = c, v._flag = -5, g = !1, c = null), x && (v._flag = -7), I && (v._flag = -10), n.closest(".home,.gameBgBox,.gameBgBox2").length > 0 && -1 == $.inArray(g_config.style, [49, 67, 71, 75, 77, 87, 94, 96, 102, 106, 108, 113, 114])) t.bgList.push(v);
                            else {
                                var C = {
                                    title: "背景图片",
                                    size: "640px*1600px",
                                    limit: "5000k",
                                    defSize: "640px*1600px"
                                },
                                A = [$.extend({},
                                v, C)];
                                y && (A = v.paths.map(function(e) {
                                    return $.extend({},
                                    e, v, C)
                                })),
                                $$(function() {
                                    var t = ".editTarget-" + a.name;
                                    x && (t = ".advertisingBox"),
                                    I && (t = ".wcdAdvertisingBox"),
                                    e.saveModuleLayerImg(A);
                                    var n = [];
                                    93 == g_config.style && n.push("homePage"),
                                    -1 == n.indexOf(a.name) && e.diffModuleLayerImg.handlePage({
                                        page: -1 == ["fissionDetailBg", "fissionShareBg"].indexOf(a.name) && (["homeBox"].indexOf(a.name) > -1 || /Bg/.test(a.name)) ? "bgPage": a.name,
                                        imgArgs: A
                                    }),
                                    parent.Edit.addEditBtn(i.targetName || "编辑背景", t,
                                    function() {
                                        return hg.fire("editBackground", v, !0),
                                        parent.Edit.showEditByGame(v._flag, "", A),
                                        !1
                                    })
                                })
                            }
                            return hg.fire("reAddBgClickFn"),
                            void n.data("hasBindEdit", !0)
                        }
                        if ("_none" !== i.edit) {
                            if (s = [], r["edit-" + i.edit]) s = r["edit-" + i.edit];
                            else {
                                var k = [];
                                "all" === i.edit ? $.each(t.originDef,
                                function(e, a) {
                                    a.formDefaultStyle || h(a.edit) || k.push([t.origin[e], a])
                                }) : $.each(i.edit.split(","),
                                function(e, t) {
                                    k.push(d(t))
                                }),
                                $.each(k,
                                function(t, a) {
                                    var i = a[1].path,
                                    n = a[1].name,
                                    o = ".editTarget-" + n + ",.editRelate-" + n;
                                    void 0 !== i && ("array" === e.getType(i[0]) ? $.each(i,
                                    function(e, t) {
                                        e > 0 && (o = ".editTarget-" + n + "-" + e + ",.editRelate-" + n + "-" + e),
                                        s.push(l(o, t, a[0], e))
                                    }) : s.push(l(o, i, a[0], 0)))
                                }),
                                !r["edit-" + i.edit] && (r["edit-" + i.edit] = s)
                            }
                            o = -1
                        } else f = !1
                    } else f = !1;
                    i.text && (f = !i.text[0].targetName || i.text[0].targetName, a.text = $.extend(!0, [], i.text, a.text), 1 == i.text[0].type && (f = !1), a.text.filter(function(e) {
                        return 2 == e.type
                    }).length > 0 && (o = 0, u = function() { (function(t, a, i) {
                            var n = this;
                            return parent.Edit.editPoup.show({
                                className: "editText",
                                title: a[0].allTitel || "编辑内容",
                                info: function(o, s, r) {
                                    $.each(t,
                                    function(t, n) {
                                        if (2 == n.type) {
                                            var r = a[t],
                                            g = (r.title || "文字内容") + "：",
                                            c = n.val,
                                            d = (r.remark, r.publishModify || !1),
                                            l = '<div class="editLine">';
                                            n.shouInput ? l +=
                                            function(t, a, i, n) {
                                                return '<div class="answerLine clearfix" style="margin-top:' + (i > 0 ? "20px": "0px") + '"><div class="floatLeft newTextT" style="width: 100px; padding-right:16px; text-align:right;" >' + t + '</div><div style="width: 320px;" class="floatLeft"><div class="newTextArea"><input type="text" class="input scrollBox activeInput" style="width: 300px;height: 32px; padding-left: 5px;" value="' + e.encodeHtml(a) + '" ' + (isPublish && !n ? "disabled": "") + ">" + (n ? "": '<div style="color:#888; padding-top: 5px;">确认发布后无法修改，请认真输入！</div>') + '<div class="editErr inputErrMsg ERR_errMsg hide" style="color: red;">输入文字不能为空</div><div class="editErr2 inputErrMsg ERR_errMsg hide" style="color: red;display: none;">输入仅限中文字母跟数字</div></div></div></div>'
                                            } (g, c, t, d) : l +=
                                            function(t, a, i, n) {
                                                var o = e.encodeHtml(a);
                                                return '<div class="answerLine clearfix"><div class="floatLeft newTextT" style="width: 100px; padding-right: 16px; text-align:right;">' + t + '</div><div class="floatLeft" style="width: 320px;"><div><input id="editWriteDef_' + i + '" type="radio" name="theRealOnly_' + i + '"' + (n ? "": "checked") + '><label for="editWriteDef_' + i + '" style="height: 16px;line-height: 16px;">默认</label><input id="editWriteSelf_' + i + '" type="radio" name="theRealOnly_' + i + '"' + (n ? "checked": "") + '><label for="editWriteSelf_' + i + '" style="height: 16px;line-height: 16px;">自定义</label></div><div class="newTextArea"><textarea class="input scrollBox activeInput" style="width:300px;height:100px;padding:5px;margin-top:7px;">' + o + '</textarea><div class="editErr inputErrMsg ERR_errMsg hide" style="color: red;">输入文字不可少于10个</div><div class="editErr2 inputErrMsg ERR_errMsg hide" style="color: red; display: none;">输入仅限中文</div></div></div></div>'
                                            } (g, c, t, n.txtopt),
                                            l += "</div>",
                                            l += '<div class="cutLine"></div>',
                                            l = s.$(l),
                                            o.append(l);
                                            var f = r.numLimit;
                                            "array" != e.getType(f) && (r.numLimit = f = [0, f]),
                                            r.from || (r.from = ".editTarget-" + i + ",.editRelate-" + i);
                                            var u = $(r.from),
                                            p = l.find(".newTextArea .activeInput"),
                                            h = !0;
                                            p.on("blur.text",
                                            function() {
                                                var e = $(this).val();
                                                $.trim(e).length < f[0] + 1 && ($(this).addClass("inputErr"), $(this).parent().find(".editErr").show().text("输入的文字不可少于" + (f[0] + 1) + "个"), u.text(n.val))
                                            }).on("focus.text",
                                            function() {
                                                $(this).removeClass("inputErr").siblings(".editErr,.editErr2").hide()
                                            }).on("compositionstart.text",
                                            function() {
                                                h = !1
                                            }).on("compositionend.text",
                                            function() {
                                                h = !0;
                                                var e = {};
                                                e.str = $(this).val(),
                                                e.str = e.str.substr(0, f[1]),
                                                e.len = $.trim($(this).val()).length,
                                                e.len > f[1] && $(this).val(e.str),
                                                $(this).trigger("text-beforeSave", [e, n, r]),
                                                e.str.length > f[0] && (void 0 === f[1] || e.str.length <= f[1]) && (n.val = e.str, u.text(n.val))
                                            }).on("input.text",
                                            function() {
                                                var e = {};
                                                e.str = $(this).val(),
                                                e.str = e.str.substr(0, f[1]),
                                                e.len = $.trim($(this).val()).length,
                                                e.len > f[1] && h && $(this).val(e.str),
                                                $(this).trigger("text-beforeSave", [e, n, r]),
                                                e.str.length > f[0] && (void 0 === f[1] || e.str.length <= f[1]) && (n.val = e.str, u.text(n.val))
                                            }).on("input.text",
                                            function() {
                                                parent.changeIsSave()
                                            }),
                                            n.txtopt ? p.show().val(n.val) : p.hide(),
                                            n.shouInput || (l.find("#editWriteDef_" + t).on("click",
                                            function() {
                                                1 == n.txtopt && parent.changeIsSave(),
                                                n.txtopt = 0,
                                                u.text(r.val),
                                                p.hide().removeClass("inputErr").val(r.val),
                                                p.siblings(".editErr,.editErr2").hide(),
                                                hg.fire("afterEditWrite")
                                            }), l.find("#editWriteSelf_" + t).on("click",
                                            function() {
                                                0 == n.txtopt && parent.changeIsSave(),
                                                n.txtopt = 1,
                                                p.show().val(n.val),
                                                u.text(n.val),
                                                hg.fire("afterEditWrite")
                                            }))
                                        }
                                    }),
                                    $(n).hdTrigger("hd-editUpload-textEdit", [s, t, a])
                                }
                            }),
                            !1
                        }).call(this, a.text, i.text, a.name)
                    })),
                    i.textarea && (o = "showEditTextareaPoup"),
                    i.textContent && (o = "showEditTextContentPoup"),
                    i.swiperConfig && g_config.useSwiperBanner && (o = -8),
                    "banner" !== i.name && "banner1" !== i.name && "banner2" !== i.name && "homeBanner" !== i.name && "detailBanner" !== i.name || g_config.useSwiperBanner || ((s = s.slice(0, 1))[0].title = s[0].title.replace(/01/, "")),
                    i._initModuleLayerArgs = [o, u, s, g, c, f, p, m, w]
                } (void 0 !== i.edit || i._initModuleLayerArgs[4]) && (n.hdTrigger("hd-editUpload-initModuleLayer", [i]), e.initModuleLayer.apply(e, [n].concat(i._initModuleLayerArgs)))
            } (o, s, i.not(function() {
                return $(this).data("hasBindEdit")
            }));
            var c = "array" === e.getType(s.pos) && "array" !== e.getType(s.size),
            f = function(t, a) {
                var i = $(a).data("editName", o.name);
                if (!i.data("hasBindEdit")) {
                    var n = u(s.size, t),
                    r = u(s.pos, t),
                    g = u(o.size, t, s.size),
                    d = u(o.pos, t, s.pos);
                    if (g && n && (i.addClass("slaveImg"), i.parents().hasClass("imgContainer") || i.wrap('<div class="imgContainer absCenter"></div>'), i.parent(".imgContainer").css("height", 0), !n.disable)) {
                        if (c) {
                            var l = null;
                            i.addResizableFn("start",
                            function(e, t) {
                                l = $(".editTarget-" + o.name).not(this),
                                /n|w/.test(t.axis) && !n.noSyncOffset && l.each(function(e, a) {
                                    var i = $(this),
                                    n = i.parents(".ui-wrapper");
                                    i.data("originalPosition-relative", {
                                        left: parseFloat(n.css("left")) - t.originalPosition.left,
                                        top: parseFloat(n.css("top")) - t.originalPosition.top
                                    })
                                })
                            }),
                            i.addResizableFn("resize",
                            function(e, t) {
                                l.add(l.parents(".ui-wrapper")).css({
                                    width: $(t.element).width(),
                                    height: $(t.element).height()
                                }),
                                /n|w/.test(t.axis) && !n.noSyncOffset && l.each(function(e, a) {
                                    var i = $(this),
                                    n = i.data("originalPosition-relative");
                                    i.add(i.parents(".ui-wrapper")).css({
                                        left: t.position.left + n.left,
                                        top: t.position.top + n.top
                                    })
                                })
                            }),
                            i.addResizableFn("stop",
                            function(e, t) {
                                n.noSyncOffset || l.each(function(e, t) {
                                    $(this).removeData("originalPosition-relative").attr("resize", "1")
                                }),
                                l = null
                            })
                        }
                        var f = {
                            width: n.width,
                            height: n.height,
                            handles: n.handles
                        };
                        r && r.disable && (f.left = r.left, f.top = r.top),
                        e.moduleSlaveImgResize(i, f, n.containment),
                        c && i.addResizableFn("recover",
                        function() {
                            var e = $(this).parents(".ui-wrapper");
                            $(".editTarget-" + o.name).each(function(t, a) {
                                if (a !== i[0]) {
                                    var n = $(a).add($(a).parents(".ui-wrapper"));
                                    n.width(e.width()).height(e.height());
                                    var o = u(s.pos, t);
                                    o && o.disable && n.css({
                                        left: o.left,
                                        top: o.top
                                    }),
                                    n.attr("resize", 0)
                                }
                            })
                        })
                    }
                    if (d && r && !r.disable) {
                        var p = "false" != r.forParent,
                        h = r.containment;
                        p && !i.parents().hasClass("imgContainer") && i.wrap('<div class="imgContainer absCenter"></div>'),
                        e.moduleDraggale(i, p, h)
                    }
                }
            };
            g ? f(n, i) : i.each(f),
            i.data("hasBindEdit", !0)
        }
        function h(e) {
            return /^_background/.test(e)
        }
        function m(e, t) {
            if (0 != e.length) {
                var a, i = e.attr("class").match(s);
                i && (a = d(i[2].slice(1)))[0] && a[1] && t && t(a)
            }
        }
        function w(e) {
            $.each(a,
            function(t, a) {
                if (e) {
                    if (e == a.name) return _(a, n[t], $(".editTarget-" + a.name))
                } else _(a, n[t], $(".editTarget-" + a.name))
            })
        }
        function _(t, a, i, n) {
            var o, r, d, l, p, m, w, _, y, x, I, b = void 0 !== n,
            T = ".editTarget-" + t.name + ",.editRelate-" + t.name;
            if (b && 0 == i.length) return ! 1;
            if (h(a.edit) && (a.from ? $(a.from).addClass("hd-Special-bgImgInfo") : i.addClass("hd-Special-bgImgInfo")), _manage && a.cacheDiv && 0 == $(".cacheDiv.editTarget-" + t.name).length ? ($("body").append('<div class="cacheDiv editTarget-' + t.name + ' hide"></div>'), i = $(".editTarget-" + t.name)) : i = i.not(".cacheDiv"), (p = function(e) {
                var i = function(e, i) {
                    var n = u(t.pos, e, a.pos),
                    o = u(t.size, e, a.size);
                    a.pos && n && n.top && n.left && $(i).css({
                        top: n.top,
                        left: n.left
                    }).addClass("abs"),
                    a.size && o && o.width && o.height && $(i).css({
                        width: o.width,
                        height: o.height
                    })
                };
                b ? i(n, e) : e.each(i)
            })(i), t.swiperConfig && (_manage ? e.renderSwiperByManage({
                name: a.name
            },
            i) : e.renderSwiper({
                name: a.name,
                config: $.extend({},
                a.swiperConfig, t.swiperConfig),
                videoConfig: $.extend([], a.videoConfig, t.videoConfig)
            },
            i)), t.path) if (l = function(t, a) {
                var n;
                return (t = t.not(i)).length > 0 && !t.is(i) && (n = e.getJqSrc(t)),
                n || a || ""
            },
            r = ".editRelate-" + t.name, m = function(e, i, n) {
                0 != e.length && (0 !== t.showPath[n] ? a.deferPath && !_manage ? e.attr("edit_defer_src", i) : f(e, i) : e.attr("edit_store_src", i))
            },
            a.from && (i = $(a.from)), "array" === e.getType(t.path[0])) if (b) {
                if ((o = i.attr("class").match(s)) && o[2] == "-" + t.name) {
                    o[3] && (d = parseInt(o[3].slice(1)));
                    var B = l($(".editTarget-" + t.name + (isNaN(d) ? "": "-" + d)));
                    isNaN(d) && (d = 0),
                    !B && (B = e.getSrc(t.path[d][0])),
                    m(i, B, d)
                }
            } else $.each(t.path,
            function(n, o) {
                var s = e.getSrc(o[0]),
                g = "editTarget-" + t.name,
                c = i;
                0 !== n && (g = "editTarget-" + t.name + "-" + n, r = ".editRelate-" + t.name + "-" + n, c = $("." + g)),
                0 != i.length && 0 == c.length ? _manage && v(a) && $("body").append('<input class="' + g + '" type="hidden" value="' + s + '">') : 0 !== n && p(c),
                m(c.add(r), s, n)
            });
            else t.path[0] && (b ? m(i, l($(".editTarget-" + t.name), e.getSrc(t.path[0])), 0) : m(i.add(r), e.getSrc(t.path[0]), 0));
            return t.css && (w = function(e, t, a) {
                var n;
                if (b) {
                    if (!i.is(e)) return;
                    n = i
                } else n = $(e); !
                function(e, t, a) {
                    var i, n = a ? t.defVal: t.val,
                    o = a ? t.defTra: t.tra;
                    n && t.name && (t.from && (e = $(t.from)), "color" == t.type ? ((e.hasClass("newVersionCard") || e.hasClass("awardADText")) && console.log("aaa"), n = g(n), "text-shadow" === t.name ? e.css(t.name, (i = c(n, o)) + " -1px -1px 0px, " + i + " 0px -1px 0px, " + i + " 1px -1px 0px, " + i + " 1px 0px 0px, " + i + " 1px 1px 0px, " + i + " 0px 1px 0px, " + i + " -1px 1px 0px, " + i + " -1px 0px 0px") : e.css(t.name, c(n, o))) : "align" == t.type ? (e.css(t.name, n), "justify-content" == t.name && ("flex-start" == n || "left" == n ? e.css("text-align", "left") : "center" == n ? e.css("text-align", "center") : "flex-end" != n && "right" != n || e.css("text-align", "right"))) : "font-size" !== t.name || isNaN(Number(n)) ? e.css(t.name, n) : e.css(t.name, n / 20 + "rem"))
                } (n, t, a)
            },
            $.extend(!0, a.css, t.css), $.each(a.css,
            function(e, t) {
                t.from || (t.from = T),
                t.css ? $.each(t.css,
                function(e, a) {
                    a.from || (a.from = t.from),
                    w(a.from, a, 0 === a.opt)
                }) : w(t.from, t, 0 === t.opt)
            })),
            t.text && $.each(t.text,
            function(e, t) {
                a.text;
                var n = a.text;
                if (n) {
                    var o, s = n[e];
                    if (s) {
                        if (!s.from && (s.from = T), b) {
                            if (!i.is(s.from)) return;
                            o = i
                        } else o = $(s.from);
                        if (2 == s.type) {
                            var r = Fai.encodeHtml(t.txtopt ? t.val: s.val);
                            o.html(r)
                        } else o.val(t.value)
                    }
                }
            }),
            t.textarea && (_ = t, y = a, x = $.extend(!0, [], y.textarea, _.textarea), I = v(y), x.forEach(function(e, t) {
                var a = t > 0 ? y.name + "-" + t: y.name,
                i = function(e) {
                    var t = ".editTarget-{{name}},.editRelate-{{name}}".replace(/{{name}}/g, e),
                    a = $(t);
                    return ! a.length && _manage && I && (a = $('<div style="display: none;" class="hideImpl editTarget-' + e + '"></div>'), $("body").append(a)),
                    a
                } (a),
                n = e.value;
                if (i.data(y.name, x), i.data("notUseTextArea", y.notUseTextArea), y.notUseTextArea) i.text(n);
                else {
                    var o = function(e) {
                        var t = e.find(".editTextarea");
                        return t.length || (t = $('<textarea class="editTextarea" readonly="readonly"></textarea>'), e.append(t)),
                        t
                    } (i); !
                    function(e) {
                        "static" === e.css("position") && e.css("position", "relative");
                        var t = e.find(".editTextareaMask");
                        t.length || (t = $('<div class="editTextareaMask"></div>'), e.append(t))
                    } (i),
                    o.val(n).trigger("contentChange", n)
                }
            })),
            t.textContent &&
            function(e, t) {
                var a = $.extend(!0, [], t.textContent, e.textContent),
                i = v(t);
                a.forEach(function(e, n) {
                    var o = n > 0 ? t.name + "-" + n: t.name,
                    s = function(e) {
                        var t = ".editTarget-{{name}},.editRelate-{{name}}".replace(/{{name}}/g, e),
                        a = $(t); ! a.length && _manage && i && (a = $('<div style="display: none;" class="hideImpl editTarget-' + e + '"></div>'), $("body").append(a));
                        return a
                    } (o);
                    s.css({
                        "white-space": "pre-wrap"
                    });
                    var r = e.value;
                    s.data(t.name, a),
                    s.text(r).trigger("contentChange", r)
                })
            } (t, a),
            !0
        }
        function v(e) {
            return ! e.notAutoGeneration
        }
        return o && ($.each(o,
        function(e, i) {
            if ( - 1 == n.indexOf(i)) {
                var o = a[e],
                s = n[e],
                r = function(e) {
                    e.pos = $.extend({},
                    s.pos),
                    e.size = $.extend({},
                    s.size),
                    e.path[0][0] = s.path[0][0]
                };
                if (g_config.isOldFaiImgGame || -1 == i.name.indexOf("theGetPricePic") || (r(i), (g_config.isNewGame || t.isMod) && r(o)), i.css) {
                    var g = function(e, t) {
                        void 0 === e.opt || t || (e.opt = 0),
                        "undefined" !== e.tra && (e.defTra = e.tra),
                        t || (e.defVal = e.val)
                    };
                    $.each(i.css,
                    function(e, t) {
                        var a = s.css[e];
                        if (t.css) {
                            var i = a.css[0];
                            $.each(t.css,
                            function(e, t) {
                                g(t, i && ("justify-content" == i.name || "text-align" == i.name))
                            })
                        } else g(t)
                    }),
                    (g_config.isNewGame || t.isMod) && $.extend(!0, o.css, i.css)
                }
                i.text && $.each(i.text,
                function(e, a) { (g_config.isNewGame || t.isMod) && $.extend(!0, o.text, i.text),
                    2 == a.type && (a.txtopt = 0, delete a.numLimit)
                })
            }
        }), $.extend(!0, n, o)),
        $.each(a,
        function(t, a) {
            var i = n[t];
            if (!a.showPath && (a.showPath = [], n[t].showPath)) for (var o = 0,
            s = n[t].showPath.length; o < s; o++) a.showPath.push(1);
            i.swiperConfig && !a.swiperConfig && (a.swiperConfig = $.extend(!0, {},
            i.swiperConfig)); !
            function(t, a) { - 1 != $.inArray(t.name, a) && t.path && $.each(t.path,
                function(t, a) {
                    a[0] = e.modifyVersion(a[0])
                })
            } (a, ["advertising", "theGetPricePic", "theGetPricePicTwo", "theGetPricePicThree"])
        }),
        _manage ? t.setAllEdit = function() {
            w(),
            t.hasInitEle = !0,
            $.each(n,
            function(e, t) {
                t.css && !t.crrCssArg && (t.crrCssArg = $.extend(!0, [], t.css, a[e].css))
            }),
            $.each(a,
            function(e, t) {
                "menuBtnBox" == t.name && console.log("aaaa"),
                p([t, n[e]])
            })
        }: (t.hasInitEle = !0, w()),
        t.setEdit = function(e, t) {
            m(e,
            function(n) {
                void 0 === t && (t = 0),
                _(n[0], n[1], e, t),
                _manage && (n[1].css && !n[1].crrCssArg && (n[1].crrCssArg = $.extend(!0, [], n[1].css, a[i].css)), p(n, e, t))
            })
        },
        t.getImgInfo = function(t, a) {
            var i = "getImgInfo-" + t;
            a && (i = "getImgInfo-rem-" + t);
            var n = r[i];
            if (n) return n;
            var o = d(t)[0];
            if (o) {
                if (n = {
                    name: t,
                    css: o.css
                },
                o.path) if ("array" === e.getType(o.path[0])) {
                    n.path = [];
                    for (var s = 0; s < o.path.length; s++) n.path[s] = e.getSrc(o.path[s][0])
                } else n.path = e.getSrc(o.path[0]);
                var g = a ? parseFloat: parseRemToPx,
                c = {
                    size: ["width", "height"],
                    pos: ["left", "top"]
                };
                for (var i in c) {
                    var l = c[i],
                    f = o[i];
                    f && ("array" === e.getType(f) ? (n[l[0]] = [], n[l[1]] = [], $.each(f,
                    function(e, t) {
                        n[l[0]].push(g(t[l[0]])),
                        n[l[1]].push(g(t[l[1]]))
                    })) : (n[l[0]] = g(f[l[0]]), n[l[1]] = g(f[l[1]])))
                }
                return r[i] = n,
                n
            }
        },
        t.getInfoByName = d,
        t.HextoRgb = g,
        t.getRgba = c,
        t.initEdit = w,
        t.initEditByPage = function(e) {
            $.each(a,
            function(t, a) {
                e == n[t].page && (_(a, n[t], $(".editTarget-" + a.name)), _manage && p([a, n[t]]))
            })
        },
        t.initByElem = function(e, t, a) {
            m(e,
            function(i) {
                void 0 === t && (t = 0),
                _(i[0], i[1], e, t),
                a && a()
            })
        },
        t.cache = r,
        t.setJqSrc = f,
        t.getCrrCss = function(e) {
            var t, a = hg.edit,
            i = a.origin,
            n = a.originDef;
            return $.each(i,
            function(a, i) {
                if (e == i.name) return n[a].crrCssArg ? void(t = n[a].crrCssArg) : void(t = n[a].css)
            }),
            t
        },
        delete t.originMod,
        t
    },
    g_config.$$isOpenGameVer2 || (e.initSound = function(t, a, i) {
        i && a && $.each(i,
        function(e, i) {
            a[e] && (a[e].path = i.path),
            a[e] && (a[e].fileName = i.fileName),
            g_config.isModel && (t[e].optFlag = a[e].optFlag)
        }),
        t && a && $.each(t,
        function(t, i) {
            var n = a[t];
            0 !== t && 1 === i.optFlag && (i.optFlag = 2),
            i.path = e.getSrc(i.path),
            n && (n.path = e.getSrc(n.path))
        });
        var n = {},
        o = LF.sound.webAudioEnabled,
        s = {
            list: t,
            listDef: a,
            allowPlay: !0,
            setPlayPower: function(e, t) {
                return "boolean" == typeof e && (this.allowPlay = e),
                this.get(e,
                function(e) {
                    e._allowPlay = t
                }),
                this
            },
            play: function(a, i, n) {
                if (_manage || tryPlay) return this;
                if (!this.allowPlay && 9 != g_config.style && 58 != g_config.style) return this;
                if (t && "number" === e.getType(a)) {
                    var s = 0 === a ? 1 : 3;
                    if (t[a].optFlag === s) return this
                }
                return 0 !== a && t && 1 !== t[0].optFlag && !o ? this: (this.get(a,
                function(t) {
                    if (e.tlog("sound play get: ", t._allowPlay + " - " + t.isWebAudio + " - " + t.isOnec + " - " + t.playing), t._allowPlay && !(t.isWebAudio && t.isOnec && t.playing)) {
                        var a = !t.playing; (!e.isIPhone() || t.isWebAudio) && t.play(i, n),
                        t.isWebAudio ? a && t.fire("play", t) : !t.playing && wx.checkJsApi && wx.checkJsApi({
                            jsApiList: ["checkJsApi"],
                            success: function() {
                                t.play(i, n)
                            }
                        })
                    }
                }), this)
            },
            readyPlay: function(t, a, i) {
                return _manage ? this: m(g_config.flagB, 8388608) || g_config.$$isLiveActive ? this: (this.get(t,
                function(n) {
                    var o = this;
                    n.isWebAudio || o.play(t, a, i),
                    o.onReady(t,
                    function() { ! n.isWebAudio && n.playing || (o.play(t, a, i), e.tlog("sound_play2:" + t + "|" + n.playing))
                    })
                }), this)
            },
            pause: function(e) {
                return _manage ? this: (this.get(e,
                function(e) {
                    var t = e.playing;
                    e.stop(),
                    t && e.isWebAudio && e.fire("pause", e)
                }), this)
            },
            pauseAll: function() {
                if (_manage) return this;
                var e;
                for (e in n) this.pause(e);
                return this
            },
            load: function(t, a, i, s) {
                if (_manage) return this;
                if (n[a]) return e.tlog("Sound_load_err", "这个key:" + a + " 已经存在!"),
                this;
                var r = null,
                g = o;
                if ("boolean" == typeof i && (g = i), /.wav$/.test(t) && e.isIPhone() && (g = !1), e.tlog("useWebAudio=" + g + ",key=" + a), g)(r = new LF.webAudio).isWebAudio = !0;
                else {
                    r = new LF.media;
                    try {
                        r.data = new Audio
                    } catch(e) {
                        console.warn("ReferenceError: Can't find variable: Audio"),
                        r.data = {}
                    }
                    r.data.loop = !1,
                    r.data.autoplay = !1
                }
                return e.tlog("lsound", r),
                r.register([["ready", !0], "play", "pause"]),
                g || (r.data.addEventListener("play",
                function() {
                    r.playing = !0,
                    r.fire("play", r)
                },
                !1), r.data.addEventListener("pause",
                function() {
                    r.playing = !1,
                    r.fire("pause", r)
                },
                !1)),
                r.isOnec = !!s,
                r._type = "audio",
                t && (e.tlog("load", a + "_wuhao"), r.load(t)),
                r.on("complete",
                function(t) {
                    r.complete = !0,
                    r.fire("ready", r),
                    e.tlog("sound", a + " ready")
                }),
                r._allowPlay = !0,
                r.name = a,
                n[a] = r,
                this
            },
            onReady: function(e, t) {
                return _manage ? this: (this.get(e,
                function(e) {
                    e.complete ? t(e) : e.on("ready", t)
                }), this)
            },
            setVolume: function(e, t) {
                return _manage ? this: (this.get(e,
                function(e) {
                    e.isWebAudio ? e.volume = t: e.data.volume = t
                }), this)
            },
            get: function(t, a) {
                var i = n[t];
                return i ? a && a.call(this, i) : e.tlog("sound_get_err", "这个key:" + t + " 不存在!"),
                i
            },
            cache: n
        };
        s.load(_resRoot + "/image/button.mp3", "startButton"),
        t && $.each(t,
        function(t, a) {
            var i = a.path;
            if (0 === t) {
                var n = !1,
                o = e.UA;
                o.isWX() && !o.isIOS() && o.getWxVerNum() >= o.getWxVerNum("6.6.6") && (n = !0),
                s.load(i, t, n, !0),
                !g_config.fromFlyerIframe &&
                function() {
                    if (_manage || !s.cache[0]) return;
                    s.get("0",
                    function(t) {
                        t.on("play",
                        function() {
                            $(function() {
                                $(".soundIcon").length <= 0 && e.appendMusicIcon(),
                                $(".soundIcon").removeClass("soundIconOff")
                            })
                        }).on("pause",
                        function() {
                            $(function() {
                                $(".soundIcon").addClass("soundIconOff")
                            })
                        }),
                        Audio && t.data instanceof Audio && document.getElementById("pageMusic").appendChild(t.data)
                    })
                } ()
            } else s.load(i, t)
        });
        return 1 == g_config.drawType || ~ [40, 45, 60, 46, 59, 48, 9, 58, 55, 27, 62, 63, 61, 64, 70, 67, 78].indexOf(g_config.style) || (s.readyPlay(0, 0, "loop"), wx.ready(function() {
            s.readyPlay(0, 0, "loop")
        })),
        s
    }), e.initCallBack = function(e, t) {
        var a = new Fai.CallBack;
        return e = e || {},
        $.each(a.getApiKeys(),
        function(t, i) {
            e[i] = function() {
                var e = a[i].apply(a, arguments);
                return e === a ? this: e
            }
        }),
        "array" == $.type(t) && a.register(t),
        e
    },
    e.initGrade = function() {
        var t = function(e) {
            t.set(t.val + e)
        };
        return $.extend(t, {
            val: 0,
            set: function(e) {
                t.val = e,
                t.val < 0 && (t.val = 0),
                t.fireWith("setGrade", t, [t.val]),
                t.target && t.target.text(t.val)
            }
        }),
        $(function() {
            t.target = $("#grade")
        }),
        e.initCallBack(t, ["setGrade"]),
        t
    },
    e.initWxConfig = function(t) {
        "findAct" == _fromCbGameOrigin && e.logDog(1000314, 102);
        var i = e.parseURL(document.URL).params.sTkPartnerId;
        function n(t, a, i) {
            return t = e.removeUrlArg.apply(e, [t].concat(["from", "fromQrcode", "fromImgMsg", "fromCardBag"])),
            e.setUrlArg(t, [a, i])
        }
        function o(a, o, s, r) {
            r = r || e.decodeHtml(t.activeName),
            e.tlog("setWxShare: " + o),
            _manage || g_config.$$sensitWordAndAdvance.forEach(function(e) {
                a = a.replace(new RegExp(e.sensword, "g"), e.adVance)
            }),
            a = e.decodeHtml(a),
            o = e.removeUrlArg(o, "code", "state"),
            o = e.removeUrlArg(o, "fromFlyerHd"),
            o = e.removeUrlArg(o, "openGId"),
            g_config.isYKY && (o = e.removeUrlArg(o, "identity", "relationId")),
            g_config.internalJoinLimit > 0 && (o = e.removeUrlArg(o, "uid", "relationType", "sign")),
            g_fromTs && (o = e.setUrlArg(o, ["tsSid", g_tsSid]), o = e.setUrlArg(o, ["tsViewerId", g_tsViewerId]), o = e.setUrlArg(o, ["fromTs", g_fromTs]), o = (o = e.removeUrlArg(o, "tsFromViewerId")).replace(/tsViewerId/, "tsFromViewerId"));
            var d = o;
            if (!t.dynamicShareUrlRootEmpty) {
                for (var l = o.split("?")[1].split("&"), f = "", u = 0; u < l.length; u++) {
                    var p = l[u];
                    "aid" !== p.split("=")[0] && "id" !== p.split("=")[0] && "style" !== p.split("=")[0] && (f.length > 0 && (f += "&"), f += p)
                }
                d = m_debug ? t.dynamicShareUrlRoot + "share.jsp?fsl=" + t.fsl + "&aid=" + g_config.aid + "&id=" + g_config.urlToken + "&" + f: t.dynamicShareUrlRoot + g_config.aid + "/" + g_config.urlToken + "/share.html?fsl=" + t.fsl + "&" + f
            }
            o = e.setUrlArg(o, ["otherplayer", g_config.openId]),
            d = e.setUrlArg(d, ["otherplayer", g_config.openId]),
            o = e.setUrlArg(o, ["shareDeep", t.shareDeep + 1]),
            d = e.setUrlArg(o, ["canal", fromCanal]),
            o = e.setUrlArg(o, ["canal", fromCanal]),
            d = e.setUrlArg(d, ["shareDeep", t.shareDeep + 1]),
            o = e.setUrlArg(o, ["notP4Share", !isPublish]),
            d = e.setUrlArg(d, ["notP4Share", !isPublish]),
            e.log(g_config.openStrongAttention);
            var h = e.getUrlValByKey(o, "_origin"),
            m = e.getUrlValByKey(o, "_source");
            if (h || (o = e.setUrlArg(o, ["_origin", m]), d = e.setUrlArg(d, ["_origin", m])), o = e.setUrlArg(o, ["_source", 3]), d = e.setUrlArg(d, ["_source", 3]), o = e.setUrlArg(o, ["isOfficialLianjie", "false"]), d = e.setUrlArg(d, ["isOfficialLianjie", "false"]), i && -1 == o.indexOf("sTkPartnerId") && (o = e.setUrlArg(o, ["sTkPartnerId", i]), d = e.setUrlArg(d, ["sTkPartnerId", i])), e.tlog("flyerfid", o.indexOf("flyerfid")), -1 !== o.indexOf("flyerfid") && (o = e.setUrlArg(o, ["jumpFlag", !0]), d = e.setUrlArg(d, ["jumpFlag", !0])), _showUnPublishPage && (o = e.setUrlArg(o, ["editQrcode", !0]), d = e.setUrlArg(d, ["editQrcode", !0])), o = n(o, "from", "singlemessage"), d = n(d, "from", "timeline"), o !== e.wxConfigArg.url || e.wxConfigArg.desc !== a || e.wxConfigArg.callBack !== s || e.wxConfigArg.pyqUrl !== d) {
                var w = t.shareImg;
                wx.ready(function() { ! /^http:/.test(w) && /^\/\//.test(w) && (w = "http:" + w),
                    e.tlog("checkdsffg---url=", o);
                    try {
                        wx.onMenuShareAppMessage({
                            title: r,
                            desc: a,
                            link: o,
                            imgUrl: w,
                            type: "link",
                            success: function() {
                                $buryPoint.shareActivity("好友及群聊"),
                                g_fromTs && yxCard.$refs.yxSaleCard.tsPushReCord();
                                var t = "aid=" + g_config.aid + "&gameId=" + g_config.gameId + "&openId=" + g_config.openId + "&type=friend&shareDeep=" + g_config.shareDeep;
                                g_config.uid && (t += "&uid=" + g_config.uid),
                                g_config.extra && (t += "&extra=" + g_config.extra),
                                $.ajax({
                                    type: "post",
                                    url: g_config.apiAjaxUrl + "gameStat/setShareNum?" + t,
                                    error: function() {
                                        m_debug && alert("服务繁忙，请稍候重试")
                                    },
                                    success: function(t) {
                                        m_debug || (e.logDog(1000004, g_config.srcId), g_config.realVer >= HdVerDef.ZS ? e.logDog(1000181, g_config.realVer + 1) : e.logDog(1000181, g_config.authVer + 1), e.logObjDog(1000092, 2, g_config.gameId), e.logDog(1000055, 0), e.LogFaiOpenId(1000232, 0), g_config.fromGuideShare && e.logDog(1000239, 4), g_config.freeFirstPublish && e.logDog(1000240, g_config.aid % 2 + 5)),
                                        c(t),
                                        g(),
                                        s && s(t)
                                    }
                                })
                            },
                            cancel: function() {},
                            fail: function(t) {
                                alert("分享失败请退出微信重新登录！"),
                                e.logStd("testLog_Comm", "-wxShareFailErr" + JSON.stringify(t), 2)
                            }
                        }),
                        wx.onMenuShareTimeline({
                            title: a,
                            link: d,
                            imgUrl: w + "xxxxx",
                            success: function(t) {
                                e.tlog("wyyytttttesthhhhh==========test", JSON.stringify(t)),
                                $buryPoint.shareActivity("朋友圈"),
                                g_fromTs && yxCard.$refs.yxSaleCard.tsPushReCord();
                                var a = "aid=" + g_config.aid + "&gameId=" + g_config.gameId + "&openId=" + g_config.openId + "&type=pyq&shareDeep=" + g_config.shareDeep + "&extra=" + g_config.extra;
                                g_config.uid && (a += "&uid=" + g_config.uid),
                                g_config.extra && (a += "&extra=" + g_config.extra);
                                var i = function() {
                                    $.ajax({
                                        type: "post",
                                        url: g_config.apiAjaxUrl + "gameStat/setShareNum?" + a,
                                        error: function(e) {
                                            m_debug && alert("服务繁忙，请稍候重试")
                                        },
                                        success: function(t) {
                                            m_debug || (e.logDog(1000004, g_config.srcId), g_config.realVer >= HdVerDef.ZS ? e.logDog(1000181, g_config.realVer + 1) : e.logDog(1000181, g_config.authVer + 1), e.logObjDog(1000092, 2, g_config.gameId), e.logDog(1000055, 1), e.LogFaiOpenId(1000232, 0), g_config.fromGuideShare && e.logDog(1000239, 4), g_config.freeFirstPublish && e.logDog(1000240, g_config.aid % 2 + 5)),
                                            c(t),
                                            g(),
                                            s && s(t)
                                        }
                                    })
                                };
                                e.isIPhone() ? setTimeout(i, 100) : i()
                            },
                            cancel: function(e) {},
                            fail: function(e) {
                                m_debug && alert("3:" + JSON.stringify(e))
                            }
                        }),
                        e.tlog("当前分享朋友链接：", o),
                        e.tlog("当前分享朋友圈链接：", d)
                    } catch(e) {
                        alert("4:" + e.message)
                    }
                }),
                e.wxConfigArg.desc = a,
                e.wxConfigArg.url = o,
                e.wxConfigArg.callBack = s,
                e.wxConfigArg.pyqUrl = d,
                e.wxConfigArg.title = r,
                [21, 22, 23, 24].indexOf(g_config.profType) > -1 ? activityExt.config({
                    actExtdata: g_config.extra,
                    success: function() {
                        activityExt.share({
                            type: "friends",
                            shareUrl: encodeURIComponent(o + "&act_extdata=" + g_config.extra),
                            showMask: !1,
                            onMaskClose: function() {},
                            fail: function() {},
                            success: function() {}
                        })
                    },
                    fail: function() {}
                }) : (_fromHdportalM && wx.miniProgram.postMessage({
                    data: $.extend({},
                    g_config, e.getminDataByHdportalM(w))
                }), g_config._minapp_findAct && wx.miniProgram.postMessage({
                    data: $.extend({},
                    g_config, e.getminData())
                }))
            }
        }
        function s(t) {
            return (t = t.replace(/\u200b/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')).replace(/<span class=["']tag["'] contenteditable=["']?false["']?>(.+?)<\/span>/g,
            function(t, a) {
                switch (a) {
                case "玩家名称":
                case "用户名称":
                    return 48 == g_config.style ? e.hykjUserName: e.captainUserName ? e.captainUserName: g_config.userName;
                case "游戏成绩":
                case "活动成绩":
                case "当前成绩":
                    if (49 == g_config.style) return parseInt(e.currentScore) + g_config.scoreUnit;
                    var i = isNaN(parseInt(e.currentScore)) ? 0 : parseInt(e.currentScore);
                    return g_config.scoreType ? e.currentScore + g_config.scoreUnit: i + g_config.scoreUnit;
                case "活动排名":
                case "游戏排名":
                    return e.currentRank;
                case "奖品名称":
                    return e.currentAward;
                case "奖项等级":
                    return e.currentAwardStyle;
                case "收集的字":
                    return '"' + e.ccndrmTitle + '"';
                case "剩余名额":
                    return e.restQuota;
                case "参与人数":
                    return g_config.realJoinNum;
                case "礼品名称":
                    return g_config.currentGift;
                case "选手编号":
                    return e.playerNumber;
                case "参赛名称":
                    return e.completitionName
                }
            })
        }
        function r(a, i) {
            if (!_manage && (void 0 === a && (a = e.wxConfigArg.url), void 0 === i && (i = e.wxConfigArg.callBack), 3 != g_config.drawType)) {
                if (49 == g_config.style || 69 == g_config.style) return void o(s(t.wxShareText_def), a, i);
                e.currentAward ? o(s(61 == g_config.style ? t.wxShareText_rank: t.wxShareText_award), a, i) : e.currentRank ? o(s(t.wxShareText_rank), a, i) : o(s(t.wxShareText_def), a, i)
            }
        }
        function g() {
            var e = {
                aid: g_config.aid,
                gameId: g_config.gameId
            };
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "faierDepartment/logShare2WXAst",
                data: e,
                error: function() {
                    Fai.ing("服务正忙。", !1)
                },
                success: function() {}
            })
        }
        function c(a) {
            var i = $.parseJSON(a),
            n = '<span class="title">分享成功</span>';
            if (i && i.shareaward) {
                if (drawTimesLimit += t.addDrawTime, 50 != g_config.style && (drawTotalLimit += t.addDrawTime), 0 == g_config.drawType && 27 != g_config.style || !e.resulePoup.resuleArg || (e.resulePoup.resuleArg.count += t.addDrawTime, e.resulePoup.resuleArg.totalCount += t.addDrawTime), $(".dayDrawCount").text(drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count), $(".totalDrawCount,#totalDrawCount").text(drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount), g_config.showHelpGuide = !1, PlayInfo.addPlayTimesLimit(t.addDrawTime), 50 == g_config.style) {
                    var o = $(".gameScoreUnit").eq(0).text();
                    qdydjAddText($("#grade .specil"), t.addDrawTime),
                    n = '<span class="title">分享成功</span><br><span class="content">获得' + t.addDrawTime + o + "</span>"
                }
                var s = drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
                r = drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount;
                isLimitDraw && drawTimesLimit - count > 0 && drawTotalLimit - totalCount > 0 && (2 == helpType || 3 == helpType) ? ($(".dayDraw4Total").html('今天可抽 <span class="count specil dayDrawCount">' + s + "</span> 次"), $(".totalDraw").html('您还有 <span class="totalDrawCount specil">' + r + "</span> 次抽奖机会"), $(".dayDraw").html('您今天还有 <span id="count" class="specil dayDrawCount">' + s + "</span> 次抽奖机会"), $(".dayDraw").off("onclick"), $(".dayDraw4Total").off("onclick")) : !isLimitDraw && drawTimesLimit - count > 0 && (2 == helpType || 3 == helpType) && ($(".dayDraw4Total").html('今天可抽 <span class="count specil dayDrawCount">' + s + "</span> 次"), $(".totalDraw").html('您还有 <span class="totalDrawCount specil">' + r + "</span> 次抽奖机会"), $(".dayDraw").html('您今天还有 <span id="count" class="specil dayDrawCount">' + s + "</span> 次抽奖机会"), $(".dayDraw").off("onclick"), $(".dayDraw4Total").off("onclick"))
            }
            e.showNewMsgToast({
                msg: n,
                adsenseIndex: 16
            }),
            $("#helpGuideBox").hide()
        }
        function d(t) {
            if (!_manage) {
                t.haveAward && t.plInfo.$awardLevel && l(t.plInfo.$awardLevel.join(""), t.plInfo.isFissilePlayer);
                var a = t.bestRankInfo;
                e.currentRank = a.rank,
                e.currentBestCostTime = a.bestCostTime,
                63 == g_config.style && !a.score && (a.score = "0"),
                e.currentScore = a.score,
                r()
            }
        }
        function l(t, a) {
            var i = [],
            n = [],
            o = [];
            g_config.awardList.map(function(e) {
                new RegExp(e.level).test(t) && (n.push(e.style), i.push(a ? "裂变优惠券": e.name), o.push(e.level))
            }),
            /900/.test(t) && (n.push(g_config.comfort.cas), i.push(g_config.comfort.ca), o.push(900)),
            e.currentAward = i.join(","),
            e.currentAwardStyle = n.join(","),
            e.currentAwardLevel = o
        }
        e.wxConfigArg = {
            url: t.fullUrl,
            wxShareGroup: e.encodeHtml(t.wxShareText_group),
            wxShareRank: e.encodeHtml(t.wxShareText_rank),
            wxShareDef: e.encodeHtml(t.wxShareText_def)
        },
        d({
            haveAward: g_config.haveAward,
            plInfo: t.plInfo,
            bestRankInfo: g_config.bestRankInfo,
            comfortAwardStyle: g_config.comfort.cas
        }),
        e.tlog("HdGame.initWxConfig", t),
        wx.config({
            debug: !1,
            appId: t.jsSdkAppid,
            timestamp: t.timestamp,
            nonceStr: t.nonce_str,
            signature: t.signature,
            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "translateVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
            openTagList: ["wx-open-launch-weapp"]
        }),
        wx.ready(function() {
            $("#bottomCusBtnInfo").on("touchstart",
            function() {
                var a = !0,
                i = g_config.wxAward,
                n = i.genewxcard,
                o = "DATE_TYPE_FIX_TERM" == i.t_type,
                s = i.cfbt,
                r = i.cft,
                g = g_config.acctOpenId || g_config.openId;
                if (n) {
                    if (0 == g_config.status) return void e.statusMsg("活动尚未发布", "无法加入到微信卡券");
                    var c = i.wxcardid,
                    d = $("#awardDetailBox .codeLine .code").text(),
                    l = $("#awardDetailBox .codeLine .code").attr("code"),
                    f = g_config.award.depositTime;
                    e.log(c),
                    e.log(d),
                    $.ajax({
                        type: "post",
                        url: g_config.apiAjaxUrl + "wxCard/getCardSign?cardTick=" + t.cardTicket + "&cardId=" + c + "&code=" + d + "&openId=" + g + "&gameId=" + g_config.gameId,
                        error: function() {
                            m_debug && alert("服务繁忙，请稍候重试")
                        },
                        success: function(t) {
                            e.tlog("getCardSign", t);
                            var n = $.parseJSON(t),
                            u = n.data;
                            if (1 != u.codeStatus) {
                                if (!n.success) return e.statusMsg(n.msg || "系统繁忙！请稍后再试");
                                var p = '{"timestamp":"' + u.timestamp + '","openid":"' + g + '","nonce_str":"' + u.nonce_str + '","code":"' + d + '","signature":"' + u.sign + '"}'; (f && f < Date.parse(new Date) || "打开微信卡券" == $("#bottomCusBtnInfo .text").text()) && (a = !1),
                                e.log("depositTime=" + f),
                                e.log("isAddCard=" + a),
                                a ? wx.addCard({
                                    cardList: [{
                                        cardId: c,
                                        cardExt: p
                                    }],
                                    success: function(t) {
                                        e.tlog("addCard", t),
                                        e.logDog(1000108, 1);
                                        var n = t.cardList[0];
                                        a = !1,
                                        n.isSuccess && $.ajax({
                                            type: "get",
                                            url: g_config.apiAjaxUrl + "wxCard/setCode?code=" + l + "&gameId=" + g_config.gameId,
                                            error: function() {
                                                m_debug && alert("服务繁忙，请稍候重试")
                                            },
                                            success: function(t) {
                                                e.tlog("setCode", t);
                                                var a = $.parseJSON(t);
                                                g_config.award.depositTime = Date.parse(new Date),
                                                i.code = l,
                                                $(".codeDetailInfoBox").show(),
                                                $("#codeStatusBox").hide(),
                                                $("#bottomCusBtnInfo .text").text("打开微信卡券"),
                                                e.refreshGiftListAndAwardDetail(g_config.gameId, g_config.openId, l, g_config.award);
                                                var n = (new Date).getTime();
                                                if (o) {
                                                    var g = a.depositTime;
                                                    n = g + 864e5 * s;
                                                    var c = g + 864e5 * r,
                                                    d = $.format.date(new Date(n), "yyyy-MM-dd"),
                                                    f = $.format.date(new Date(c), "yyyy-MM-dd");
                                                    $(".awardDetail .awardCodeTime em").html("使用期限：" + d + " - " + f),
                                                    $("#ticketDetailBox .codeTimeFixedRange .box").html(d + " 至 " + f),
                                                    (new Date).getTime() < n && ($("#codeStatusBox #codeStatusBtn").show(), $("#codeStatusBox").show(), $("#codeStatusTips").css("fontSize", "0.55rem"), $("#codeStatusTips").find(".giftNameA").text("打开微信卡券"), $(".codeDetailInfoBox").hide())
                                                } else e.tlog("award.cbt", i.cbt),
                                                i.cbt && (n = new Date(i.cbt).getTime());
                                                e.tlog("sTime", n),
                                                (new Date).getTime() < n && ($("#codeStatusBox #codeStatusBtn").show(), $("#codeStatusBox").show(), $("#codeStatusTips").css("fontSize", "0.55rem"), $("#codeStatusTips").find(".giftNameA").text("打开微信卡券"), $(".codeDetailInfoBox").hide())
                                            }
                                        })
                                    },
                                    fail: function(t) {
                                        e.tlog("addCardErr=", t)
                                    }
                                }) : wx.openCard({
                                    cardList: [{
                                        cardId: c,
                                        code: d
                                    }]
                                })
                            } else e.statusMsg("该兑奖码已被核销，无法放入微信卡包")
                        }
                    })
                }
            })
        }),
        wx.ready(function() {
            wx.hideMenuItems({
                menuList: ["menuItem:copyUrl"]
            }),
            e.tlog("isForbidShareactivity=" + g_config.isForbidShareactivity),
            g_config.isForbidShareactivity ? wx.hideOptionMenu() : wx.showMenuItems({
                menuList: ["menuItem:copyUrl", "menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:originPage", "menuItem:openWithQQBrowser", "menuItem:openWithSafari"]
            }),
            e.tlog("isCloseShareCircleOfFriends=" + g_config.isCloseShareCircleOfFriends),
            !g_config.isForbidShareactivity && g_config.isCloseShareCircleOfFriends && wx.hideMenuItems({
                menuList: ["menuItem:share:timeline"]
            });
            try {
                t.isHideShareBtn && wx.hideMenuItems({
                    menuList: ["menuItem:share:timeline", "menuItem:share:qq"]
                }),
                wx.error(function(e) {
                    m_debug && (console.log($.toJSON(e)), alert("1:" + $.toJSON(e)))
                })
            } catch(e) {
                alert("2:" + e.message)
            }
            if (void 0 !== t.checkControlLevel) {
                var a = 0 == g_config.authVer;
                switch (t.checkControlLevel) {
                case 1:
                    a && wx.hideMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    });
                    break;
                case 2:
                    a && wx.hideMenuItems({
                        menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
                    });
                    break;
                case 3:
                    wx.hideMenuItems({
                        menuList:
                        ["menuItem:share:timeline"]
                    });
                    break;
                case 4:
                    wx.hideMenuItems({
                        menuList:
                        ["menuItem:share:timeline", "menuItem:share:appMessage"]
                    })
                }
            }
            /VIVO Y66I/i.test(navigator.userAgent) && wx.showMenuItems({
                menuList: ["menuItem:favorite"]
            })
        }),
        wx.ready(function() {
            var t = window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1 || window.navigator.userAgent.indexOf("iPod") > -1,
            a = window.navigator.userAgent.indexOf("Android") > -1,
            i = "unknown";
            t ? i = "apple": a && (i = "android"),
            !g_config.isFromZhuliShare && isPublish && wx.getNetworkType({
                success: function(t) {
                    var a = "other";
                    a = "wifi" === t.networkType ? "wifi": "other",
                    $.ajax({
                        url: g_config.apiAjaxUrl + "gameStat/setBehavior?gameId=" + g_config.gameId + "&openId=" + g_config.openId,
                        type: "post",
                        data: {
                            netType: a,
                            sysType: i
                        },
                        success: function(t) {
                            e.tlog("setBehavior success")
                        }
                    })
                }
            })
        });
        var f = {};
        f.handleShareAward = c,
        f.setWxShareByStatus = r,
        f.setShareText = s,
        f.removeWxShareUrlArg = function() {
            var t = a.slice.call(arguments);
            t.unshift(e.wxConfigArg.url),
            o(e.wxConfigArg.desc, e.removeUrlArg.apply(e, t), e.wxConfigArg.callBack)
        },
        f.setWxShareUrlArg = function() {
            var t = a.slice.call(arguments);
            t.unshift(e.wxConfigArg.url),
            o(e.wxConfigArg.desc, e.setUrlArg.apply(e, t), e.wxConfigArg.callBack)
        },
        f.setWxShare = o,
        f.setWxShareArg = d,
        f.setCurrentAward = l,
        e.wxConfig = f
    },
    e.addJoinGameBehavior = function() {
        e.updateGroupMemberJoin(2);
        var t = void 0 !== g_config.ipInfo.provice ? g_config.ipInfo.provice: "",
        a = void 0 !== g_config.ipInfo.city ? g_config.ipInfo.city: "",
        i = void 0 !== g_config.ipInfo.district ? g_config.ipInfo.district: "";
        $.ajax({
            url: g_config.apiAjaxUrl + "gameStat/joinGameBehavior?openId=" + g_config.openId + "&canal=" + fromCanal,
            type: "post",
            data: {
                gameId: g_config.gameId,
                openId: g_config.openId,
                shareDeep: g_config.shareDeep,
                provice: t,
                city: a,
                district: i,
                headImg: g_config.headImg,
                userName: g_config.userName
            },
            error: function(e, t) {
                hg.fire("luckDrawErr")
            },
            success: function(t) {
                "findAct" == _fromCbGameOrigin && e.logDog(1000314, 107),
                "findAct" == _fromCbGameOrigin && _fromCardBag && (1 == _isShowWinnersList && e.logDog(1000314, 110), 2 == _isShowWinnersList && e.logDog(1000314, 113)),
                _fromCardBag && (e.tlog("_qbAid", _qbAid), e.tlog("g_config.openId", g_config.openId), e.tlog("g_config.aid", g_config.aid), e.tlog("g_config.gameId", g_config.gameId), e.qbLogForTargetUserA(), _isTargetUser && e.logDog(1000314, 14), _isTargetUser && !_isFinishJoinGame && e.logDog(1000351, 7))
            }
        })
    },
    e.qbLogForTargetUserA = function() {
        $.ajax({
            url: g_config.apiAjaxUrl + "card4WxApp/logToUser",
            type: "post",
            data: {
                aid: _qbAid,
                faiOpenId: g_config.openId,
                fromPage: 3,
                gameAid: g_config.aid,
                gameId: g_config.gameId
            },
            success: function(t) {
                e.tlog("qbLogForTargetUserA_aid", _qbAid)
            }
        })
    },
    e.setGameEnd = function() {
        var t = $(".bottomSkill");
        $(".home").html(""),
        $(".home").append(t),
        $(".home").append('<p style="font-size:0.9rem; color:#e7e7e7; text-align: center; padding-top:10rem; line-height: 1.3rem">活动已结束<br>请期待下次活动</p>'),
        $(".home").css({
            height: e.getBgHeight(),
            background: "#424242",
            width: "100%",
            position: "fixed",
            "z-index": "500"
        }),
        document.title = "活动已结束",
        $(".home").addClass("showImp"),
        $(".homeBtnBox").addClass("showImp"),
        $(".ruleImg,#ruleImg").addClass("showImp"),
        $(".gameInfoBox").addClass("hideImp"),
        $(".showAwardBox").addClass("hideImp"),
        $("#informBtn").addClass("hideImp"),
        hg.sound.allowPlay = !1,
        hg.sound.pauseAll()
    },
    e.getBgHeight = function() {
        return Math.max($(window).width() * g_config.HWRatio, $(window).height())
    },
    e.modifyVersion = function(t) {
        t = e.getSrc(t);
        return e.parseURL(t).params && "202010221200" == e.parseURL(t).params.v ? t: e.jointUrlArg(e.removeUrlArg(t, "v"), e.jointParams({
            v: "202010221200"
        }))
    },
    function() {
        function t(e, t) {
            $("#" + e).css({
                transform: "rotate(" + t + "deg)",
                "-webkit-transform": "rotate(" + t + "deg)"
            })
        }
        function a() {
            if ( - 1 === [75, 106, 113].indexOf(g_config.style)) {
                var e = document.getElementById("ruleImg"),
                t = document.getElementById("arrow"),
                a = (document.getElementById("tip_txt"), parseInt($("#tip_txt").css("margin-left"))),
                i = e.x - t.clientWidth;
                i < a && i > 0 && $("#activityKit .arrow").css({
                    width: e.x - a + "px",
                    height: 1.13 * (e.x - a) + "px"
                })
            }
        }
        e.showRuleDecide = function() {
            if (! (g_config.$$isOpenGameVer2 || g_config.isNotSelf && g_config.createTime > 1494376826e3 || [69, 75, 115].indexOf(g_config.style) > -1)) {
                var i = g_config.aid + "|" + g_config.gameId + "|" + g_config.openId;
                e.getLocalStorage(i) || (e.setLocalStorage(i, "-"), g_config.createTime < 1494376826e3 ? showRule() : !g_config.$$fromMinapp_Jfly &&
                function() {
                    $("#activityKit").show();
                    var e = $("#ruleImg");
                    if (0 == e.length) return;
                    var i = e.offset().left,
                    n = e.offset().top,
                    o = $("#ruleImg"),
                    s = $("#activityKit .arrow"),
                    r = $("#activityKit #tip_txt"),
                    g = (parseInt($("#tip_txt").css("margin-left")), i - s.width()),
                    c = $(window).width() - o.width() - i - s.width(),
                    d = o.width(),
                    l = o.height();
                    g <= 0 && c <= 0 && (d /= 2);
                    n + l / 2 < window.innerHeight / 2 ? ($("#arrow").css("top", n + o.height() + "px"), g > 0 ? (a(), $("#arrow").css("left", i - s.height() + "px")) : (t("arrow", 270), $("#arrow").css("left", i + d + "px")), $("#tip_txt").css("top", n + o.height() + s.height() + "px")) : (g > 0 ? (t("arrow", 90), a(), $("#arrow").css("left", i - s.height() + "px")) : (t("arrow", 180), $("#arrow").css("left", i + d + "px")), $("#arrow").css("top", n - s.height() + "px"), $("#tip_txt").css("top", n - s.height() - r.height() + "px"))
                } ())
            }
        },
        $(function() {
            $("#activityKit").click(function() {
                $("#activityKit").hide()
            })
        })
    } (), e.openLocation = function(e, t, a, i, n, o) {
        wx.openLocation({
            latitude: e,
            longitude: t,
            name: a,
            address: i,
            scale: n || 25,
            infoUrl: o || ""
        })
    },
    e.computeDistance = function(e, t, a, i) {
        var n = new qq.maps.LatLng(e, t),
        o = new qq.maps.LatLng(a, i);
        return qq.maps.geometry.spherical.computeDistanceBetween(n, o)
    },
    e.getHanziSize = function(e, t) {
        e = e || "";
        for (var a = /[^\x00-\xff]/,
        i = 0,
        n = 0,
        o = 0; o < e.length; o++) {
            var s = e.charAt(o);
            if (a.test(s) ? i += 2 : n++, t && i + n > t) return e.substr(0, o)
        }
        return t ? e: i + n
    },
    e.sortBy = function(e) {
        return function(t, a) {
            var i, n;
            if ("object" == typeof t && "object" == typeof a && t && a) return (i = t[e]) === (n = a[e]) ? 0 : typeof i == typeof n ? i < n ? -1 : 1 : typeof i < typeof n ? -1 : 1
        }
    },
    !g_config.$$isOpenGameVer2) {
        e.checkWebp = function() {
            try {
                return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
            } catch(e) {
                return ! 1
            }
        },
        e.isSupportWebp = !_manage && e.checkWebp(),
        10 == g_config.style || g_config.open_webp || (e.isSupportWebp = !1);
        var w = /\.(bmp|jpg|jpeg|png)(\?.*)?$/i;
        e.getWebpOrOtherImg = function(t) {
            return e.isSupportWebp ? $.isArray(t) || $.isPlainObject(t) ? ($.forEach(t,
            function(a, i) {
                t[i] = e.getWebpOrOtherImg(a)
            }), t) : t && "string" == $.type(t) && -1 !== t.indexOf(".h40.") ? t.replace(w, ".$1.webp$2") : t: t
        },
        e.parseWebpSrc = function(t, a) {
            t.each(function(t, i) {
                var n = (i = $(this)).attr("webp_src"),
                o = i.attr("webp_key") || "src",
                s = e.getWebpOrOtherImg(n);
                "background" == o ? i.css("background-image", "url(" + s + ")") : i.attr(o, s),
                i.removeAttr("webp_src webp_key"),
                a && a(s, n, o)
            })
        }
    }
    function _(e) {
        switch (e) {
        case 1:
            return "周一";
        case 2:
            return "周二";
        case 3:
            return "周三";
        case 4:
            return "周四";
        case 5:
            return "周五";
        case 6:
            return "周六";
        case 7:
            return "周日"
        }
        return ""
    }
    function v(e) {
        return void 0 === e ? 2 : e
    }
    e.initJsFoot = function(i) {
        g_config.$$fromMinapp_Jfly && (e.jflyFn.addBackBtn(), e.jflyFn.addRuleBtn()),
        $("body").data("hd-initHdGameJsfootArg", {
            soundIcon_l: i.soundIcon_l,
            soundIcon_t: i.soundIcon_t
        }),
        g_config.showActiveEndPage && ($("#ruleImg").show().parent().css("z-index", 1499), $(".advertisingBox").hide(), setTimeout(function() {
            $(".activeEndTipsBox").after($("#ruleImg").parent())
        },
        300)),
        $(function() {
            e.sortRuleBox.init(i.rulesortstr),
            _manage && !_preview && parent.game.$$data.isMinAppGame && e.sortRuleBox.init(parent.game._setting.mainModuleSortStr || "abc", $("#EditMoveBox"), $(".EditMoveLine"), !0),
            $(function() {
                $(".replaceBox").each(function(e, t) {
                    var a = $(this),
                    i = a.attr("_target");
                    i && (i = $("#" + i)).length > 0 && (a.after(i), a.remove())
                })
            });
            var t, n = ['<div class="diffBox" id="getCaseBox">获取同行营销案例</div>', '<div class="diffBox" id="createActiveBox">创建营销活动及咨询优惠</div>', '<div class="diffBox" id="playerBox"><div class="diffTitle">我是玩家</div><div>想要参与更多抽奖活动</div></div>']; (n.sort(function(e, t) {
                return Math.random() > .5 ? -1 : 1
            }), $.each(n,
            function(e, t) {
                $("#skillDiffMask .userChoiseBox").append(t)
            }), !g_config.$$fromMinapp_Jfly && e.unPublishMsg(), isPublish && !g_config.$$caseAcctPublishTips && $(".unPublish").css("top", "-2rem"), i.isHideTitle && $(75 == g_config.style ? ".titleImg img": ".titleImg").addClass("hideTitleImg"), g_config.showActiveEndPage && ($("#ruleImg").show().parent().css("z-index", 1499), $(".advertisingBox").hide(), setTimeout(function() {
                $(".activeEndTipsBox").after($("#ruleImg").parent())
            },
            300)), g_config.$$isOpenGameVer2 || g_config.isJXKJ || "model" != g_config._minapp_preview && "active" != g_config._minapp_preview) || ("model" == g_config._minapp_preview ? t = $('<div class="homeBottomBtn createActiveBtn" onclick="createActiveForMinapp()">马上创建</div>') : "active" == g_config._minapp_preview && (t = $('<div class="homeBottomBtn shareActiveBtn" onclick="shareActiveForMinapp()"><span class="shareIcon"></span>分享活动</div>')), t.on("touchstart",
            function() {
                $(this).addClass("active")
            }).on("touchend",
            function() {
                $(this).removeClass("active")
            }), $("body").append(t));
            var o = e.decodeHtml(i.hostName),
            s = e.decodeHtml(i.hostLink).replace("http://", ""),
            r = e.decodeHtml(i.menuLink).replace("http://", ""),
            g = $(".menuName,.menuLinkBtn");
            function c(t) {
                e.checkInWebView().then(function(a) {
                    if (a && (_fromRealHdportalM || "active" == g_config._minapp_preview)) e.showMsgToast2({
                        bodyMsg: "即将跳转凡科互动小程序",
                        isTwoFootBtn: !0,
                        primaryBtnText: "确认",
                        defaultBtnText: "取消",
                        primaryBtnFn: function() {
                            wx.miniProgram.reLaunch({
                                url: "/pages/newActive/newActive"
                            })
                        }
                    });
                    else {
                        var i = t && g_config.isU_PlusAccount;
                        _fromCardBag && e.logDog(1000314, 8),
                        $("#skillSupMask").show(),
                        $("#skillSupMask .U_PlusSkill").toggle(i),
                        $("#skillSupMask .hdSkill").toggle(!i)
                    }
                })
            }
            $("#skillSupMask .U_PlusSkill .applyBtn").on("click",
            function() {
                window.location.replace($(this).attr("data-url"))
            }),
            (i.fromFav && g_config.haveAward || i.fromFav && g_config.isPaymentGame) && ($("#resule-gift-sucImg").data("openCode", i.fromFav), g_config.isFromFav = !0, showAwardDetail4Draw()),
            e.tlog("redirectPage", e.getUrlValByKey(document.URL, "redirectPage")),
            "myAwardPage" === e.getUrlValByKey(document.URL, "redirectPage") && (g_config.$$isOpenGameVer2 ? hg.on("initGameEnd",
            function() {
                e.changePoup(3, "", !1)
            }) : e.changePoup(3, "", !1)),
            "fromRedirectWxMsg3" === e.getUrlValByKey(document.URL, "wxMsgfrom") && ($("#prizeBtn").length > 0 && (g_config.$$isOpenGameVer2 ? hg.on("initGameEnd",
            function() {
                e.changePoup(3, "", !1)
            }) : e.changePoup(3, "", !1)), e.wxConfig.removeWxShareUrlArg("wxMsgfrom"));
            var d, w = e.getUrlValByKey(document.URL, "cashPrizeMsgCode");
            if (w) {
                var _ = parseInt(e.getUrlValByKey(document.URL, "awardLevel") || 0);
                e.showAwardDetailByCode(w, _),
                e.wxConfig.removeWxShareUrlArg("cashPrizeMsgCode")
            }
            if (!_manage && (!(g_config.createTime < 1494376826e3) || i.openAwardExp)) {
                g_config.isPaymentGame || -1 != $.inArray(g_config.style, [49, 69, 75, 115, 119]) ? e.showRuleDecide() : 0 != gameType && 4 != gameType && -1 == $.inArray(g_config.style, [48, 67]) || 3 != g_config.status ? 3 != gameType && 1 != gameType && -1 == $.inArray(g_config.style, [71]) || 3 != g_config.status ? e.showRuleDecide() : (d = function(t) {
                    $("#activityKit").hide(),
                    t ? g_config.$$isOpenGameVer2 ? hg.on("initGameEnd",
                    function() {
                        e.changePoup(3, "", !1)
                    }) : e.changePoup(3, "", !1) : e.changePoup(4, "", !1, t)
                },
                _manage || $.ajax({
                    type: "post",
                    url: g_config.apiAjaxUrl + "rank/getGiftList",
                    data: {
                        gameId: g_config.gameId,
                        openId: g_config.openId
                    },
                    success: function(e) {
                        var t = $.parseJSON(e);
                        t.success && t.list ? d && d(!0, t.list) : d && d(!1)
                    }
                })) : g_config.$$isOpenGameVer2 ? hg.on("initGameEnd",
                function() {
                    e.changePoup(3, "", !1)
                }) : e.changePoup(3, "", !1)
            }
            $("#showRankNum").text(rankShowNum),
            $(".hostName").text(o),
            $(".resule-status-send").on("touchstart",
            function() {
                _manage || (47 != g_config.style && 98 != g_config.style || hg.fireWith("beforeStartGiftEvent", this, [!0])) && (g_config.haveAward ? g_config.$$isOpenGameVer2 ? (zgnpyVue.isShowActiveRule = !0, zgnpyVue.$refs.activityRule.showPoupInfoBox(3)) : e.changePoup(3, "", !0) : g_config.openStrongAttention ? e.Res.loadg("fansExclusive").then(function() {
                    e.showForcedAttPoup({
                        type: 3
                    }).then(luckDraw)
                }) : luckDraw())
            }),
            $("#helpGuideBox").on("touchend",
            function() {
                $("#helpGuideBox").hide()
            }),
            $("#awardInfo").off("click").on("click", ".codeInfoBox",
            function(t) {
                if (!_manage) {
                    var a = $(this).index(),
                    i = e.awardList[a],
                    n = i.awardInfo ? JSON.parse(i.awardInfo) : {},
                    o = Fai.checkBit(i.flag, 512),
                    s = (_manage ? i.$type: g_config.$$awardTypeInfo[v(n.awardtype)]).isAfterPayType || !1;
                    if (s && n.isOpenAfterPay && 5 != i.codeStatus) {
                        if (o) return e.openAwardDetail.call(this, t);
                        e.awardPay({
                            enCode: i.awardCode,
                            payTime: n.payTime,
                            awardTime: i.awardTime,
                            payTimeLimit: n.payTimeLimit,
                            codeStatus: i.codeStatus,
                            isUseless: $(this).find(".codeStatusName").hasClass("useless")
                        })
                    } else s && n.isOpenAfterPay && 5 == i.codeStatus ? e.showMsgToast2({
                        bodyMsg: "兑奖券已失效，遗憾错失本次福利"
                    }) : e.openAwardDetail.call(this, t)
                }
            });
            var y = 75 == g_config.style ? "#resule-gift-sucImg, .seeAwardDetailImg .seeDetail": "#resule-gift-sucImg, .clickHere, .seeAwardDetail";
            if ($(y).on("click",
            function(e) { - 1 != e.currentTarget.className.indexOf("slaveImg") ? !_manage && l(4) : !_manage && l(0),
                _manage || 75 == g_config.style && m(g_config.flagB, 8388608) ||
                function() {
                    g_config.firstTouchRank = g_config.firstTouchAward = g_config.firstTouchWinList = !0;
                    var e = (_manage ? g_config.currentAward.$type: g_config.$$awardTypeInfo[v(g_config.currentAward.awardtype)]).isAfterPayType || !1;
                    75 == g_config.style && e && g_config.currentAward.isOpenAfterPay ? $(".afterPaySucImg").trigger("touchend") : showAwardDetail4Draw()
                } ()
            }), $(".awardCloseIcon").on("click",
            function() {
                _manage || (hg.fire("awardDetailClose"), e.wxConfig.removeWxShareUrlArg("fromFav"), $("#awardDetailBox").removeClass("shortPage").hide(), $("#resule-gift-box,resule-status-box").hide(), $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), g_config.showSkillSup && $(".bottomSkill").show(), g_config.firstTouchAward = !0)
            }), $(".codeImg").on("click",
            function() {
                $(".codeDetailImgBox").show()
            }), !_manage && $("#immediaAwardBtn").on("click",
            function() {
                $("#awardCodeLayer").show()
            }), $(".codeDetailImgBox").click(function() {
                $(this).hide()
            }), $("#useStoreBox .moreBtn").click(function() {
                _manage || $("#storeListBox").show()
            }), $("#storeListBox .closeBtn").click(function() {
                $("#storeListBox").hide()
            }), $(".codeDetailInfoBox .copy").on("click",
            function() {
                if (!_manage) {
                    var t = $("#awardDetailBox").find(".copyCode").text();
                    e.copyContent2("input-copyCode", t) ? e.showSuccessToast("复制成功") : $(".codeCopyDetailMask").show()
                }
            }), $(".codeCopyDetailMask").click(function() {
                $(this).hide()
            }), $("#awardDetailBox #ticketDetailBox .guideMap").on("click",
            function() {
                e.bindGolocation($.extend($(this).data("pointData"), {
                    bindBtn: $(this),
                    isOperation: !0
                }))
            }), g_config.afterWxCard || $(".awardCusText").on("touchstart",
            function() {
                var e = $("#awardCusTextInfo");
                "block" == e.css("display") ? ($(this).find(".awardDeailIcon").removeClass("awardIncoSlideDown"), $(this).find(".awardDeailIcon").addClass("awardIncoSlideUp")) : ($(this).find(".awardDeailIcon").removeClass("awardIncoSlideUp"), $(this).find(".awardDeailIcon").addClass("awardIncoSlideDown")),
                e.slideToggle()
            }), i.isHideFxts && $(".resule-fxts").hide(), g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !0), 9 != g_config.style && g_config.showSkillSup && (e.logDog(1000028, 0), !_manage && !g_config.isOem && g_config.createTime > 16038504e5 && e.FdpTrack("hd_game_ad_expo", {
                hd_modid: g_config.modId,
                hd_ta: g_config._ta,
                hd_free_text_0: "首页"
            })), !(g_config.isHideskillInfo || g_config.$$fromMinapp_Jfly || g_config.isJDJR || g_config.$$needNewVersion)) {
                var x = $(".home,.showBottomSkillPage"),
                I = '<div class="bottomSkill skillInfo">页面技术由 ' + i.skillSupport + " 提供</div>";
                55 == g_config.style ? x = $(".gameBox,.showBottomSkillPage") : 69 == g_config.style && (x = $(".home,.signUpPage,.joinDetailPage,.rank"), I = '<div class="specialSkill skillInfo">页面技术由 ' + i.skillSupport + " 提供</div>"),
                g_config.isOem && g_config.oemCloseSkillSupport || x.append(I),
                g_config._minapp_preview
            }
            if (!_manage && g_config.$$hasPromotionCourtesy && g_config.$$isOpenPromoteCourtesy && $(".promoteCourtesyBox").off("click").on("click",
            function() {
                e.Res.loadg("promotionCourtesy").then(function() {
                    Promote.showPromoteDetail()
                })
            }), _manage && $("a").on("click",
            function(e) {
                e.preventDefault()
            }), $("body").on("click touchstart", '.homePoupMask:not(".noTouch")',
            function(e) {
                _manage || $(e.target).hasClass("homePoupMask") && $(this).hide()
            }), $(".menuBtnBox").on("touchend",
            function() {
                e.logDog(1000012)
            }), i.showJoinNum ? $("#joinNumLine").show() : $("#joinNumLine").hide(), i.showRedDot && $("#Award_Round_Dot").css("display", "inline-block"), i.showMDRedDot && $("#Mingdan_Round_Dot").css("display", "inline-block"), i.showAwardBtn && 6 != gameType && (g_config.$$isOpenGameVer2 ? zgnpyVue.showMyAwardBtn = !0 : ($("#myAwardBtn").show(), $("#myAwardBtn").on("touchend",
            function() { ! _manage && $buryPoint.homePageInfo(1)
            }))), i.isSelAwardLine ? ($("#selfAwardLine").show(), $("#awardLineBox").hide()) : ($("#awardLineBox").show(), $("#selfAwardLine").hide()), i.showSkillSup || ($(".skillInfo").hide(), $(".skillInfo").addClass("hideSkill")), !g_config.isOem && $(".attentionBox.attentionBoxB").length > 0) {
                if ($(".attentionBox.attentionBoxB").find(".menuBtnBox").addClass("btnBoxB"), e.isIphoneX_XS() || e.isIphoneXR_XSMax() || e.isIphone12() || e.isIphone12ProMax()) {
                    var b = document.body.offsetHeight;
                    $(".attentionBox.attentionBoxB").css("top", "calc(" + b + "px - 2.5rem)")
                }
                i.showSkillSup || $(".attentionBox.attentionBoxB .menuBtnBox").addClass("justOneBtn"),
                1 == i.menuStyle && $(".attentionBox.attentionBoxB .skillInfo").addClass("justOneBtn"),
                i.showSkillSup || 1 != i.menuStyle || ($(".attentionBox.attentionBoxB").css({
                    height: "0",
                    padding: "0"
                }), $(".rldk .home").removeClass("newBoxB"))
            }
            if (1 == i.menuStyle) $(".menuBtnBox").addClass("hide");
            else if (2 == i.menuStyle) {
                if (2 == i.msJumpType) {
                    _manage || g.off(".weappBtn").on("click.weappBtn",
                    function() {
                        e.showMsg("当前微信版本过低，无法跳转小程序")
                    });
                    var T = [];
                    69 == g_config.style && T.push({
                        id: "jumptoMinappBtn_fun_mb",
                        type: 4,
                        insertEle: g.find("#cusBtnTab"),
                        cb: function() {
                            $("._jumptoMinappBtn_fun_mb").show()
                        }
                    }),
                    g_config.$$isOpenGameVer2 || T.push({
                        id: "jumptoMinappBtn_fun",
                        type: 3,
                        insertEle: g.parent(".menuBtnBox")
                    }),
                    T.push({
                        id: "jumptoMinappBtn_fun2",
                        type: 3,
                        insertEle: $("#drawMenuBtnBox")
                    }),
                    75 == g_config.style && T.push({
                        id: "jumptoMinappBtn_fun3",
                        type: 3,
                        insertEle: $(".faiMenuBtn.showAttentionBtn")
                    });
                    for (var B = 0; B < T.length; B++) e.insertWxOpenLaunchWeapp({
                        id: T[B].id,
                        type: T[B].type,
                        btnName: i.menuName,
                        insertOuter: !0,
                        insertEle: T[B].insertEle,
                        mpAppId: i.mpAppId,
                        mpPagePath: i.mpPagePath
                    }),
                    T[B].cb && T[B].cb()
                } else 0 == $.trim(r).length ? g.css("text-decoration", "none") : _manage || (_fromCardBag || _fromHdportalM ? g.on("click",
                function() {
                    e.copyContent3(e.decodeHtml(i.menuLink))
                }) : g.attr("href", e.decodeHtml(i.menuLink)));
                $("._jumptoMinappBtn_fun").toggle(2 == i.msJumpType),
                $("._jumptoMinappBtn_fun2").hide(),
                $("._jumptoMinappBtn_fun3").toggle(2 == i.msJumpType)
            } else 3 == i.menuStyle && g.on("touchend",
            function() {
                return _fromCardBag && e.logDog(1000314, 8),
                void 0 !== f ? f(3) : void 0 !== u && u(3),
                g_config.$$isOpenGameVer2 ? e.showAttentionPoup({
                    url: e.parseURL(document.URL).params.fromhdhome ? _resRoot + "/image/hdQRcode/hdhome.jpg": r,
                    isMinAppCode: 2 == g_config.qrCodeType
                }) : e.Res.loadg("attentionUs").then(function() {
                    e.showAttentionPoup({
                        url: e.parseURL(document.URL).params.fromhdhome ? _resRoot + "/image/hdQRcode/hdhome.jpg": r,
                        isMinAppCode: 2 == g_config.qrCodeType
                    })
                }),
                !1
            });
            0 == $.trim(s).length && ($(".hostName").css("text-decoration", "none"), $("a.hostName").attr("href", "javascript:;")),
            isLimitDraw ? ($(".totalDraw").show(), $(".dayDraw").hide(), drawTimesLimit - count < drawTotalLimit - totalCount && $(".dayDraw4Total").show()) : $(".totalDraw").hide(),
            0 == $("#awardExplain").text().length && $("#awardExplain_h").hide(),
            $("a.hostName").click(function() {
                e.logDog(1000013),
                _manage || e.jumpToHostUrl(!1)
            }),
            1 == skillSupportType ? _manage ? $(".skillCont").hide() : $(".skillLine").css("padding", "0").hide() : 3 != skillSupportType || i.isAdverQRCode || ($(".skillName").text(skillName), _fromCardBag || _fromHdportalM ? $(".skillName").attr("href", "").click(function(t) {
                t.preventDefault(),
                e.copyContent3(skillLink)
            }) : $(".skillName").attr("href", skillLink)),
            (3 != skillSupportType || skillLink.indexOf("mp.weixin.qq.com/s?__biz=MjM5MTk5MjI3OA==&mid=209854000&idx=1&sn=82241d924839270d3ea820ad2d56c01b#wechat_redirect") >= 0 && !_fromCardBag || i.isAdverQRCode) && $(".skillName").click(function() {
                if (! (_manage || $(this).attr("href") && ~$(this).attr("href").indexOf("https://hdm.fkw.com/pro6.jsp"))) {
                    e.logDog(1000013),
                    e.hdSkillLog(!1, 1000070);
                    var t = $(this).parents(".home").length > 0 || $(this).parents(".attentionBox").parent().length > 0 && "body" == $(this).parents(".attentionBox").parent().get(0).tagName.toLowerCase(),
                    a = -1 != $.inArray(g_config.style, [75, 111, 113, 115, 117, 119]) && t && !_manage && !g_config.isOem && g_config.createTime > 16038504e5;
                    return e.FdpTrack("hd_game_ad_click", {
                        hd_modid: g_config.modId,
                        hd_ta: g_config._ta,
                        hd_free_text_0: a ? "首页": "其他"
                    }),
                    0 == g_config.isAOpenId ? e.logDog(1000115, 7) : e.logDog(1000115, 8),
                    14788299 != g_config.aid ? (e.isVisitorA() || e.FdpTrack("hd_game_distinctbc_expo", {
                        hd_free_text_1: e.isVisitorA() ? "a": "b"
                    }), c(!1), !1) : void 0
                }
            }),
            $(".U_PlusName").click(function() {
                if (!_manage) return c(!0),
                !1
            }),
            $(".hdskillInfo a").click(function() {
                if (_manage) return ! 1;
                l(3),
                f(2),
                u(2),
                p(2),
                h(2);
                var t = $(this).data("pagekey");
                if (t > 0) {
                    var a = $(this).hasClass("moreActive");
                    if (a) return e.handleMoreActive(t);
                    e.adClick(t, a)
                }
                e.logDog(1000005, 0),
                e.hdSkillLog(!0, 1000070);
                var i = $(this).parents(".home").length > 0 || $(this).parents(".attentionBox").parent().length > 0 && "body" == $(this).parents(".attentionBox").parent().get(0).tagName.toLowerCase(),
                n = -1 != $.inArray(g_config.style, [75, 111, 113, 115, 117, 119]) && i && !_manage && !g_config.isOem && g_config.createTime > 16038504e5;
                if (e.FdpTrack("hd_game_ad_click", {
                    hd_modid: g_config.modId,
                    hd_ta: g_config._ta,
                    hd_free_text_0: n ? "首页": "其他"
                }), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 3 + g_config.isAOpenId), g_config.showSkillSup && e.logDog(1000201, g_config.localPoupPage), [24344174, 20833039, 9884765, 9884766].indexOf(g_config.aid) > -1) {
                    var o = {
                        9884765 : 2403,
                        9884766 : 2404,
                        24344174 : 2403,
                        20833039 : 2404
                    } [g_config.aid];
                    return window.location.href = "https://i.hd.fkw.com/mobi/index_m.jsp?isFromCreateActive=true&openId=&isAB=0&_ta=" + o,
                    !1
                }
                return g_config.isOem || 14788299 == g_config.aid ? void 0 : (e.FdpTrack("hd_game_clickad_test", {
                    hd_free_text_1: e.isVisitorA() ? "a": "b"
                }), e.isVisitorA() || e.FdpTrack("hd_game_distinctbc_expo", {
                    hd_free_text_1: e.isVisitorA() ? "a": "b"
                }), c(!0), !1)
            }),
            $("#getCaseBox, #createActiveBox").on("click touchstart",
            function() {
                $("#skillDiffMask").hide(),
                c(g_config.showSkillMaskFlag),
                e.FdpTrack("hd_game_distinctbc_click", {
                    hd_free_text_0: "getCaseBox" === $(this).attr("id") ? "案例": "活动",
                    hd_free_text_1: e.isVisitorA() ? "a": "b"
                })
            }),
            $("#playerBox").on("click touchstart",
            function() {
                $("#skillDiffMask").hide(),
                $("#skillMiniCJMask").show(),
                e.FdpTrack("hd_game_distinctbc_click", {
                    hd_free_text_0: "玩家",
                    hd_free_text_1: e.isVisitorA() ? "a": "b"
                })
            }),
            g_config.$$isOpenGameVer2 || hg.sound.list && hg.sound.list.length > 0 && (!g_config.fromFlyerIframe && e.appendMusicIcon(), 1 != i.drawType && -1 == $.inArray(g_config.style, [4, 40, 61, 64, 67, 78]) || $(".home .soundIcon").remove()),
            $("#resule-gift-sucImg").css({
                "margin-left": "auto",
                "margin-top": "1.6rem",
                "margin-right": "auto",
                "margin-bottom": "1.6rem"
            });
            var S = $(".homeBox");
            if (S.length || (S = $(".home")), 121 != g_config.style && (S.append($(".editTarget-slogan")), S.append($("#logoImgBox"))), _manage) e.bindModuleLayer && e.bindModuleLayer(i);
            else {
                $(".gameBgBox .soundIcon").css("z-index", "100"),
                $(".soundIcon").addClass("soundIconPlay");
                var C = "soundPause|" + g_config.aid + "|" + g_config.gameId + "|" + g_config.openId;
                function A(e) {
                    e.preventDefault()
                }
                g_config.$$isOpenGameVer2 || ($(".soundIcon").on("touchstart",
                function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    $(".soundIcon").hasClass("soundIconOff") ? (hg.sound.allowPlay = !0, hg.sound.readyPlay(0, 0, "loop"), e.removeLocalStorage(C)) : (hg.sound.allowPlay = !1, hg.sound.pauseAll(), e.setLocalStorage(C, "-"))
                }), e.getLocalStorage(C) && (hg.sound.allowPlay = !1, hg.sound.pauseAll(), $(function() {
                    $(".soundIcon").hasClass("soundIconOff") || $(".soundIcon").addClass("soundIconOff")
                }))),
                $("#ruleImg").addClass("ruleImgAnimate"),
                $("body").on("touchend", "img#gameBg", A),
                $(".home").on("touchend", "#startBtnImg,#titleImg,#homeBg", A),
                $(".imgPreventDefault").on("touchend", A);
                var k = function(t) { [101, 115].indexOf(g_config.style) > -1 && !startStatus || (g_fromTs && yxCard && yxCard.$refs && (yxCard.$refs.yxSaleCard.isShowCard = !1), startBtnAjax.call(this, t, null,
                    function() {
                        var t = a.slice.call(arguments); - 1 == [79, 88, 115].indexOf(g_config.style) && hg.sound.play("startButton"),
                        hg.sound.get("0",
                        function(a) {
                            51 != g_config.style && 49 != g_config.style && 9 != g_config.style && 48 != g_config.style && 57 != g_config.style && 62 != g_config.style && 58 != g_config.style && 65 != g_config.style && 69 != g_config.style && 100 != g_config.style && (27 != g_config.style || e.getLocalStorage(C) || (hg.sound.allowPlay = !0), t[0] && hg.sound.readyPlay(0, 0, "loop"))
                        })
                    }))
                };
                $("#startBtnImg,.startBtnImg").each(function(e, t) {
                    if (!g_config.$$fromMinapp_Jfly) {
                        var a = $(this).data("tapEventType") || "touchend";
                        $(this).on(a,
                        function() {
                            g_config.$$isNetworkSecurityAnswer ? HdgToast.showMsgToast4({
                                popupBodySty: "text-align: initial; max-height: 16rem; overflow-y: auto; font-size: 0.625rem; padding-bottom: 0;",
                                msg: "①用户需在限时5分钟内完成随机抽取的10道题目，活动总分100分，答对1题加10分；<br>②活动期间，答题达到70分即可获得1次抽奖机会；完成组队任务，组成2人小队，队内成员均可额外获得1次抽奖机会，每位用户仅可加入1支小队；<br>③广州市网络安全产业促进会对以上规则保留最终同意和确认权。<br>",
                                confirmText: "开始挑战",
                                confirmFn: function() {
                                    k()
                                }
                            }) : k()
                        })
                    }
                }),
                g_config._minapp_findAct && !g_config.isForbidShareactivity && e.watchMiniMusic(),
                new(window[decodeBase64("RnVuY3Rpb24=")])(decodeBase64($(decodeBase64("I3RoZW1lR2FtZUNvZGVJbWc="))[decodeBase64("YXR0cg==")](decodeBase64("X3NyYw=="))[decodeBase64("cmVwbGFjZQ==")](decodeBase64("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFg="), "")))();
                var P = function() {
                    var t = $(".home");
                    e.slideSwiperTo({
                        swiperSelector: ".swiper-container:not(.advertisingBox)"
                    }),
                    (0 == t.length || t.is(":visible") || 69 == g_config.style) && startBtnDelay()
                };
                if (g_config.openAdvertising && !g_config.showActiveEndPage ? g_config.$$isOpenGameVer2 ? setTimeout(function() {
                    zgnpyVue.$refs.advertising.show(function() {
                        hg.fire("hideAdvertisingBox"),
                        zgnpyVue.game.showUnPublishPage && !isPublish || zgnpyVue.game.caseAcctPublishTips ? e.showUnPublishPage(P) : P()
                    })
                },
                100) : e.Res.loadg("advertising").then(function() {
                    Advertising.show(function() {
                        hg.fire("hideAdvertisingBox"),
                        _showUnPublishPage && !isPublish || g_config.$$caseAcctPublishTips ? e.showUnPublishPage(P) : P()
                    })
                }) : _showUnPublishPage && !isPublish || g_config.$$caseAcctPublishTips ? e.showUnPublishPage(P) : hg.assets.onload(P), g_config.isDeviceMotionGame) {
                    e.setIOSDeviceMotionEvent({
                        type: -1 == [1, 24].indexOf(g_config.style) ? "game": "luckDraw"
                    })
                }
            }
        }),
        e.hdLunboFn = function() {
            var t = 55 == g_config.style ? $(".gameBox,.showAwardBoxPage") : $(".home,.showAwardBoxPage");
            if (67 == g_config.style || 77 == g_config.style || 94 == g_config.style ? t = $(".showAwardBoxPage_dspkj,.showAwardBoxPage") : 71 == g_config.style && ($(".home").append("<div class='slideBoxBlank' style='width:16rem;height:1.75rem;position:relative;'></div>"), t = $(".showAwardBoxPage")), _manage) {
                if (75 != g_config.style) {
                    var a = "",
                    i = [];
                    switch (g_config.style) {
                    case 106:
                        a = "fade",
                        i = [{
                            headImg: g_config.headImg,
                            name: "范女神",
                            tips: '<span class="regular">成功提现</span><span class="award">200.00</span>元'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "小星儿",
                            tips: '<span class="regular">成功提现</span><span class="award">200.00</span>元'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "LVYD",
                            tips: '<span class="regular">成功提现</span><span class="award">200.00</span>元'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "萌妹子",
                            tips: '<span class="regular">成功提现</span><span class="award">200.00</span>元'
                        }];
                        break;
                    case 113:
                        a = "fade",
                        i = [{
                            headImg: g_config.headImg,
                            name: "范女神",
                            tips: '<span class="regular">成功瓜分</span><span class="award">200.00</span>元'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "小星儿",
                            tips: '<span class="regular">成功瓜分</span><span class="award">200.00</span>元'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "LVYD",
                            tips: '<span class="regular">成功瓜分</span><span class="award">200.00</span>元'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "萌妹子",
                            tips: '<span class="regular">成功瓜分</span><span class="award">200.00</span>元'
                        }];
                        break;
                    default:
                        (g_config.$$needNewVersion || 115 == g_config.style) && (a = "fade"),
                        i = [{
                            headImg: g_config.headImg,
                            name: "范女神",
                            tips: '<span class="regular">获得了</span><span class="award">100元优惠券</span>'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "小星儿",
                            tips: '<span class="regular">获得了</span><span class="award">50元优惠券</span>'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "LVYD",
                            tips: '<span class="regular">获得了</span><span class="award">30元优惠券</span>'
                        },
                        {
                            headImg: g_config.headImg,
                            name: "萌妹子",
                            tips: '<span class="regular">获得了</span><span class="award">10元优惠券</span>'
                        }]
                    }
                    var n = function(t) {
                        t = $.extend(!0, {
                            effect: "",
                            dataSource: [{
                                headImg: "",
                                name: "",
                                tips: ""
                            }]
                        },
                        t);
                        for (var a = "",
                        i = 0,
                        n = t.dataSource.length; i < n; i++) {
                            var o = t.dataSource[i];
                            a += '<div class="uerItem"><img src="' + o.headImg + '" /><span class="winner regular">' + e.limitMaxText(o.name, 3) + "</span>" + o.tips + "</div>"
                        }
                        return '<div class="showAwardBox ' + t.effect + ' " effect="' + t.effect + '" ><ul class="awardInfoList"><li>' + a + "</li></ul></div>"
                    } ({
                        effect: a,
                        dataSource: i
                    });
                    t.append(n),
                    $("#skillLine").css("min-height", "1rem")
                }
            } else if (!_manage && playerAwardList.length > 3 && 75 != g_config.style && 6 != gameType) if ( - 1 !== [106, 115].indexOf(g_config.style)) {
                r({
                    tag: t,
                    verb: -1 !== [106].indexOf(g_config.style) ? "成功提现": "获得了",
                    awardList: playerAwardList
                })
            } else if ( - 1 !== [113, 119].indexOf(g_config.style)) - 1 !== [113].indexOf(g_config.style) && $.each(playerAwardList,
            function(e, t) {
                this.award = this.award.slice(0, this.award.indexOf("元") + 1)
            }),
            r({
                tag: t,
                verb: -1 !== [113].indexOf(g_config.style) ? "成功瓜分": "获得了",
                awardList: playerAwardList
            });
            else {
                t.append('<div class="showAwardBox ' + (g_config.$$needNewVersion ? "fade": "") + '" ' + (g_config.$$needNewVersion ? "effect=fade": "") + '><ul class="awardInfoList"><li></li></ul></div>');
                var o = "",
                s = -1 !== [117].indexOf(g_config.style);
                $.each(playerAwardList,
                function(t, a) {
                    var i = s ? this.headImg: JSON.parse(this.info).headImg,
                    n = s ? this.awardName: this.award;
                    n.length,
                    this.name.length;
                    o += '<div class="uerItem ellipsis"><img src="' + i + '"><span class="winner regular ellipsis">' + this.name + '</span><span class="regular">获得了</span><span class="award ellipsis">' + e.encodeHtml(n) + "</span></div>"
                }),
                55 == g_config.style ? ($(".showAwardBox").hide(), setTimeout(function() {
                    $(".awardInfoList li").append(o),
                    $(".showAwardBox").newAwardSlide({
                        padding_right: "0.8rem"
                    })
                },
                3500)) : setTimeout(function() {
                    $(".awardInfoList li").append(o),
                    $(".showAwardBox").newAwardSlide({
                        padding_right: "0.8rem"
                    })
                },
                100),
                $(".homeBtnBox").css("bottom", "3.5rem")
            }
            function r(t) {
                t = $.extend(!0, {
                    tag: "body",
                    verb: "成功领取",
                    awardList: []
                },
                t),
                $mountTag = $(t.tag);
                $mountTag.append('<div class="showAwardBox fade" effect="fade" ><ul class="awardInfoList"><li></li></ul></div>'),
                setTimeout(function() {
                    var a;
                    $mountTag.find(".awardInfoList li").append((a = "", $.each(t.awardList,
                    function(i, n) {
                        var o = this.info ? JSON.parse(this.info).headImg: this.headImg,
                        s = this.award || this.awardName;
                        a += '<div class="uerItem ellipsis"><img src="' + o + '"><span class="winner regular ellipsis">' + this.name + '</span><span class="regular">' + t.verb + '</span><span class="award ellipsis">' + e.encodeHtml(s) + "</span></div>"
                    }), a)),
                    $mountTag.find(".showAwardBox").newAwardSlide({
                        effect: "fade",
                        padding_right: "0.8rem"
                    })
                },
                100)
            }
            setTimeout(function() {
                var t = e.getBgHeight();
                e.tlog("showAwardBoxPageHeight1", t),
                $(".showAwardBox").parent().hasClass("showAwardBoxPage") && $(".showAwardBoxPage").is(":visible") && (t = $(".showAwardBoxPage").outerHeight(), e.tlog("showAwardBoxPageHeight2", t));
                var a = g_config.showSkillSup ? 1 : 0;
                e.isIphoneX_XS() ? t = 690 : e.isIphoneXR_XSMax() ? t > 774 && (t = 774) : e.isIphone12() ? t > 722 && (t = 722) : e.isIphone12ProMax() && t > 804 && (t = 804),
                e.tlog("realHeight", t),
                _manage ? $(".showAwardBox").css("top", (t - $(".bottomSkill").outerHeight() * a - $(".showAwardBox").outerHeight() - 2) / g_rem + "rem") : $(".showAwardBox").css("top", (t - $(".bottomSkill").outerHeight() * a - $(".showAwardBox").outerHeight()) / g_rem + "rem"),
                g_config.showSkillSup && $(".showAwardBox").css("top", (t - $(".bottomSkill").outerHeight() * a - $(".showAwardBox").outerHeight() - 2) / g_rem + "rem")
            },
            80),
            g_config.showSlide ? _manage || $(".showAwardBox").addClass("footerBox") : ($(".showAwardBox").hide(), 71 == g_config.style && $(".slideBoxBlank").hide())
        },
        !g_config.$$isOpenGameVer2 && e.hdLunboFn(),
        hg.on("home", $.throttle(function() {
            var t = $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "playerJoinGame/getJoinNum?gameId=" + g_config.gameId + "&openId=" + g_config.openId,
                success: function(t) {
                    e.tlog("getJoinNum", t);
                    var a = $.parseJSON(t);
                    if (!isNaN(a.joinNum)) {
                        var i = g_config.$$virtualPlayerCount || 0;
                        realJoinNum = a.joinNum + i,
                        $("#joinNum").text(realJoinNum),
                        g_config.realJoinNum = realJoinNum,
                        e.wxConfig.setWxShareByStatus()
                    }
                },
                error: function(e) {
                    console.log(e)
                }
            });
            _manage && t.abort()
        },
        100)),
        e.watch("((game.$$isPublish ? game._sub_flagD.f1024 : game.$$interfaceInfo.flag.f1) && game._sub_flagD.f256) || ((game.$$isPublish ? game._sub_flagD.f2048 : game.$$interfaceInfo.flag.f2) && game._sub_flagD.f512)", g_config.isOpenCreditJoin || 0 != g_config.joinLimit && g_config.isOpenMemberLevelJoin,
        function(t, a) {
            if (g_config.isPartnerAcct) {
                $("#drawInfo,#resule-status-count,#resule-status-playinfo,#directDrawInfoBox,#explainPlayInfoBox" + (_manage && !_preview ? ",#playInfo": "")).hdToggle("partnerAcct", !t);
                var i = e.isGameNoaward(g_config.style, gameType),
                n = -1 !== [119].indexOf(g_config.style); ! _manage && $("#playInfo").toggle((3 == gameType || i || n) && g_config.isCheckPlayTimes && !t)
            }
        }),
        e.watch("(!game.$isPartnerAcct && ((game._setting.joinLimit == 1 && game._sub_flagD.f536870912) || ([2, 5].indexOf(game._setting.joinLimit) > -1 && game._sub_flagD.f256)))", !g_config.isPartnerAcct && (1 == g_config.joinLimit && g_config.isOpenBigCustomerCreditJoin || g_config.$$isInternalJoin && g_config.isOpenInternalCreditJoin),
        function(t, a) {
            if (!g_config.isPartnerAcct) { - 1 == [3, 4].indexOf(gameType) && $("#drawInfo,#resule-status-count,#resule-status-playinfo,#directDrawInfoBox,#explainPlayInfoBox" + (_manage && !_preview ? ",#playInfo": "")).hdToggle("partnerAcct", !t);
                var i = e.isGameNoaward(g_config.style, gameType),
                n = -1 !== [119].indexOf(g_config.style); ! _manage && $("#playInfo").toggle((3 == gameType || i || n) && g_config.isCheckPlayTimes && !t)
            }
        }),
        $("#newAwardExplainBox").on("touchend",
        function(e) { - 1 != e.target.parentElement.parentElement.className.indexOf("active") && (d(1), t && !_manage && $buryPoint.homePageInfo(2))
        }),
        g_config.$$newAwardDescript && $(function() {
            $("#selfAwardLine").toggle(g_config.$$showCustomExplain),
            $("#newAwardExplainBox").toggleClass("hide", g_config.$$showCustomExplain),
            e.Res.loadg("awardExplain").done(function() {
                e.runAwardExplain && e.runAwardExplain({
                    el: g_config.$$showCustomExplain ? "#selfAwardExplainBox": "#newAwardExplainBox",
                    type: g_config.awardExplainType,
                    specialClass: -1 !== [75].indexOf(g_config.style) ? "xydzpSpecial": "",
                    autoInit: !0
                })
            })
        }),
        _fromOtherProd > 0 && (g_config.$$isOpenGameVer2 ? e.$injectHd({
            _fromOtherProd: _fromOtherProd
        }) : e.Res.loadg("injectHd").then(function() {
            e.runInjectHd()
        }))
    },
    e.jumpToHostUrl = function(t) {
        var a = $("#hostInfoBg").hide(),
        i = $("#ruleBox a.hostName").attr("href", "javascript:;");
        if (0 == g_config.jumpType) t && e.showMsg("主办方还未添加介绍");
        else if (1 == g_config.jumpType) {
            if (_fromCardBag || _fromHdportalM) return e.copyContent3(g_config.hostLink);
            t ? window.open(e.decodeHtml(g_config.hostLink)) : i.attr("href", e.decodeHtml(g_config.hostLink))
        } else if (2 == g_config.jumpType) {
            if (0 == $("#hostInfoIframe").length) {
                var n = g_config.ajaxUrl.replace("/ajax/", "") + "/hostIntroducePage.jsp?aid=" + g_config.aid + (_fromCardBag ? "&nFromCardBag=true": "") + (_fromHdportalM ? "&fromHdportalM=true": "");
                n += "&storeId=" + g_config.storeId + "&areaId=" + g_config.areaId,
                a.append('<iframe id="hostInfoIframe" frameborder="0" scrolling="yes" src="' + n + '" style="height: 100%; width: 100%;"></iframe>')
            }
            a.show()
        } else 3 == g_config.jumpType && -2 != g_config.jzSiteId && $.ajax({
            type: "post",
            url: g_config.apiAjaxUrl + "faierDepartment/getJzSiteJumpUrl",
            data: {
                aid: g_config.aid,
                jzSiteId: g_config.jzSiteId
            },
            success: function(t) {
                var a = $.parseJSON(t);
                if (_fromCardBag || _fromHdportalM) return e.copyContent3(a.jumpUrl);
                window.location.href = "//" + a.jumpUrl
            }
        })
    },
    e.setStartBtnHeight = function(t, a) {
        var i = $(window).height();
        if (0 !== i) {
            if (117 != g_config.style) {
                void 0 === t && (t = g_config.showSlide),
                void 0 === a && (a = g_config.showSkillSup);
                var n = t ? 1 : 0,
                o = a ? 1 : 0,
                s = $(".bottomSkill").outerHeight() * o + $(".showAwardBox").outerHeight() * n,
                r = $("#startBtnImg").parent(),
                g = $("#ruleImg"),
                c = $("#joinNumLine"),
                d = $("#drawInfo"),
                l = $(".homeBtnBox"),
                f = $("#gameTips"),
                u = parseInt(r.css("top")) + r.outerHeight(),
                p = parseInt(c.css("top")) + c.outerHeight(),
                h = parseInt(d.css("top")) + d.outerHeight(),
                m = parseInt(g.css("top")) + g.outerHeight(),
                w = parseInt(f.css("top")) + f.outerHeight();
                r.length > 0 && u > i - s && r.css("top", (i - s - r.outerHeight() - 5) / g_rem + "rem"),
                g.length > 0 && m > i - s && g.css("top", (i - s - g.outerHeight() - 5) / g_rem + "rem"),
                c.length > 0 && p > i - s && c.css("top", (i - s - c.outerHeight() - 5) / g_rem + "rem"),
                d.length > 0 && h > i - s && d.css("top", (i - s - d.outerHeight() - 5) / g_rem + "rem"),
                l.length > 0 && l.css("bottom", (s + 8) / g_rem + "rem"),
                f.length > 0 && w > i - s && f.css("top", (i - s - f.outerHeight() - 5) / g_rem + "rem"),
                _manage && 75 === g_config.style || $("#limitRange").css("height", $(window).height() - s)
            }
        } else setTimeout(function() {
            e.setStartBtnHeight(t, a)
        },
        20)
    },
    e.getGameRule = (o = !1,
    function(t, a) {
        a = $.extend({
            initTime: g_config.initTime,
            initTimeSign: g_config.initTimeSign
        },
        a),
        _manage ? t && t() : o || (o = !0, e.ajaxLoad.show(), $.ajax({
            type: "post",
            url: g_config.apiAjaxUrl + "gameOther/getGameRule?aid=" + g_config.aid + "&gameId=" + g_config.gameId + "&openId=" + g_config.openId + "&jfly_UnionId=" + g_config.jfly_UnionId,
            data: a,
            complete: function() {
                e.ajaxLoad.hide(),
                setTimeout(function() {
                    o = !1
                },
                200)
            },
            error: function() {
                e.showMsg("网络繁忙，请刷新重试")
            },
            success: function(a) {
                e.tlog("getGameRule", a);
                var i = $.parseJSON(a);
                i.success ? (_ruleInfo.rule = i.data, "string" == typeof _ruleInfo.rule.info ? i.data = $.parseJSON(_ruleInfo.rule.info).rule: i.data = _ruleInfo.rule.info.rule, t && t(i)) : e.showMsg("系统错误，请刷新重试")
            }
        }))
    }),
    e.showAccessKeyPopup = function(t) {
        t = $.extend({
            title: ~ [69].indexOf(g_config.style) ? "输入活动密码后参与报名": "输入活动密码后进入活动",
            manage: !1,
            isOnLoad: !1
        },
        t),
        ~ [69].indexOf(g_config.style) && "输入活动密码后进入活动" === t.title && (t.title = "输入活动密码后参与报名");
        var a = !t.manage,
        i = $("#accessKeyPopup");
        function n() {
            $(".accessKeyInput").blur(),
            t.callback && t.callback(),
            a && (i = $("#accessKeyPopupIframe")),
            i.remove(),
            $("html").css({
                "overflow-y": "visible"
            }),
            $("body").removeAttr("style"),
            setTimeout(function() {
                l && c.removeClass("imp-hide")
            },
            400)
        }
        if (i.length) u();
        else {
            var o = '<div id="accessKeyPopup"><div class="weui-mask"></div><div class="weui-dialog" style="z-index:1800;"><div class="weui-dialog__hd"><div id="accessKeyPopupTitle" class="weui-dialog__title">' + e.encodeHtml(t.title) + '</div></div><div class="weui-dialog__bd"><input class="weui-input accessKeyInput" type="text" placeholder="请输入"><div class="errMessage hide"></div></div><div class="weui-dialog__ft"><span class="weui-dialog__btn weui-dialog__btn_primary accessKeyConfirmBtn">进入活动</span></div></div></div>';
            if (i = $(o), t.manage) return $("body").append(i),
            void i.show();
            var s = i.find(".accessKeyInput"),
            r = i.find(".errMessage"),
            g = i.find(".accessKeyConfirmBtn"),
            c = $("#spxdPage"),
            d = !1,
            l = !1;
            c.hasClass("imp-hide") || (l = !0, c.addClass("imp-hide")),
            s.off("focus").on("focus",
            function(e) {
                e.target.scrollIntoView(!1)
            }),
            s.off("blur").on("blur",
            function() {
                window.scrollTo(0, 0),
                f()
            }),
            s.off("input propertychange").on("input propertychange",
            function() {
                f()
            });
            var f = function() {
                var e, t, a = (e = s.val(), t = e.length, !(/[^0-9a-zA-Z\u4e00-\u9fa5]/.test(e) || t <= 0 || t > 20));
                s.data("hasErr", !a),
                a ? (r.hide(), s.removeClass("hasErr")) : (s.addClass("hasErr"), r.text("请输入正确的活动密码"), r.show())
            };
            g.off("click").on("click",
            function() {
                if ($(".accessKeyInput").blur(), !d && !s.data("hasErr")) {
                    if (d = !0, "" == s.val().trim()) return s.addClass("hasErr"),
                    r.text("请输入正确的活动密码"),
                    r.show(),
                    void(d = !1);
                    p(encodeURI(s.val().trim())).done(function(e, t) {
                        if (e) n();
                        else {
                            switch (t) {
                            case "系统错误":
                                t = "系统繁忙，请稍后重试"
                            }
                            s.addClass("hasErr"),
                            r.text(t),
                            r.show()
                        }
                    }).fail(function() {
                        s.removeClass("hasErr"),
                        r.hide()
                    }).always(function() {
                        d = !1
                    })
                }
            }),
            u()
        }
        function u() {
            $.Deferred(function(e) {
                g_config.openAccessKeyOnce ? e.resolve(!1) : $.ajax({
                    type: "post",
                    dataType: "json",
                    url: g_config.apiAjaxUrl + "accessKey/checkPlayerHasAccessKey?gameId=" + g_config.gameId + "&openid=" + g_config.openId + "&aid=" + g_config.aid,
                    success: function(t) {
                        t.rt ? e.reject() : e.resolve(t.result)
                    },
                    error: function(t) {
                        e.reject()
                    }
                })
            }).done(function(o) {
                var s;
                o ? n() : g_config.fromAccessKeyQrcode ? g_config.openAccessKeyOnce && t.isOnLoad ? (s = g_config.qrCodeAccessKey, $.Deferred(function(e) {
                    $.ajax({
                        type: "post",
                        url: g_config.apiAjaxUrl + "accessKey/isAccessKeyValid",
                        data: {
                            gameId: g_config.gameId,
                            openId: g_config.openId,
                            key: s
                        },
                        success: function(t) {
                            t = JSON.parse(t),
                            e.resolve(t)
                        },
                        error: function(t) {
                            e.resolve.reject(),
                            alert("系统繁忙，请重试")
                        }
                    })
                })).done(function(t) {
                    t.canAccess ? n() : e.showMsgToast2({
                        bodyMsg: "此二维码已失效，请重新确认",
                        primaryBtnFn: function() {
                            wx.closeWindow()
                        }
                    })
                }) : p(g_config.qrCodeAccessKey).done(function(t) {
                    t ? n() : e.showMsgToast2({
                        bodyMsg: "此二维码已失效，请重新确认",
                        primaryBtnFn: function() {
                            wx.closeWindow()
                        }
                    })
                }).fail(function() {
                    alert("系统繁忙，请刷新重试")
                }) : function() {
                    if (a) {
                        var e = g_config.ajaxUrl.replace("/ajax/", "");
                        $('<iframe id="accessKeyPopupIframe" allowtransparency="true" frameborder="0" scrolling="no" src="' + e + '/accessKeyPopup.jsp"></iframe>').appendTo($("body")).show(),
                        $("#accessKeyPopupIframe").load(function() {
                            i.appendTo($("#accessKeyPopupIframe").css({
                                opacity: 1
                            }).contents().find("body")).show()
                        })
                    } else i.appendTo($("body")).show();
                    $("html").css({
                        "overflow-y": "hidden"
                    }),
                    $("body").css({
                        "overflow-y": "hidden"
                    })
                } ()
            }).fail(function() {
                alert("系统繁忙，请刷新重试")
            })
        }
        function p(e) {
            return $.Deferred(function(t) {
                $.ajax({
                    type: "post",
                    url: g_config.apiAjaxUrl + "accessKey/checkAccessKey?gameId=" + g_config.gameId + "&openid=" + g_config.openId + "&key=" + e + "&aid=" + g_config.aid,
                    success: function(e) {
                        var a = (e = JSON.parse(e)).msg;
                        t.resolve(e.result, a)
                    },
                    error: function(e) {
                        alert("系统繁忙，请重试"),
                        t.reject()
                    }
                })
            })
        }
    },
    e.getSrc = function(e) {
        return e && e.replace("*_resRoot*", _resRoot)
    },
    e.getJqSrc = function(e) {
        var t = "";
        if (e.attr("src")) t = e.attr("src");
        else if (e.val()) t = e.val();
        else if (e.css("background-image")) {
            var a = e.css("background-image"),
            i = a.match(/url\("(.+)"\)/) || a.match(/url\('(.+)'\)/) || a.match(/url\((.+)\)/);
            i && (t = i[1])
        }
        return t
    },
    e.setCookie = function(e, t, a) {
        var i = new Date;
        i.setDate(i.getDate() + a),
        document.cookie = e + "=" + escape(t) + (null == a ? "": ";expires=" + i.toGMTString())
    },
    e.getCookie = function(e) {
        return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
    },
    e.getServerTime = function() {
        var e = +new Date;
        return "undefined" != typeof g_timeDeviation && (e += g_timeDeviation),
        e
    },
    $.each(["set", "get", "remove"],
    function(t, a) {
        e[a + "LocalStorage"] = function(t, i, n) {
            if (localStorage) {
                if ("set" == a) {
                    var o = {}; ($.isPlainObject(i) || $.isArray(i)) && (i = $.toJSON(i), o.json = 1),
                    n && !isNaN(n) && (o.expires = n, o.stime = e.getServerTime()),
                    $.isEmptyObject(o) ? localStorage.removeItem(t + "@{conf}") : localStorage.setItem(t + "@{conf}", $.toJSON(o))
                } else if ("get" == a) {
                    var s;
                    if ((o = localStorage.getItem(t + "@{conf}")) && ((o = $.parseJSON(o)).expires && o.stime && e.getServerTime() - o.stime > o.expires ? (localStorage.removeItem(t), o = null, s = null) : o.json && (s = $.parseJSON(localStorage.getItem(t))), $.isEmptyObject(o) && localStorage.removeItem(t + "@{conf}"), void 0 !== s)) return s
                } else localStorage.removeItem(t + "@{conf}");
                return localStorage[a + "Item"](t, i)
            }
            console.warn("不支持localStorage")
        }
    }),
    e.setSessionStorage = function(t, a) {
        window.sessionStorage ? window.sessionStorage.setItem(t, a) : e.log("不支持sessionStorage")
    },
    e.getSessionStorage = function(t) {
        if (window.sessionStorage) return window.sessionStorage.getItem(t);
        e.log("不支持sessionStorage")
    },
    e.refresh = function() {
        window.location.reload()
    },
    e.noLoadingRefresh = function() {
        window.location.href = document.URL.indexOf("noLoading") >= 0 ? document.URL: document.URL + (document.URL.indexOf("?") >= 0 ? "&": "?") + "noLoading=fff"
    },
    s = {
        val: window.navigator.userAgent,
        isPC: function() {
            for (var e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !0, a = 0; a < e.length; a++) if (s.val.indexOf(e[a]) > 0) {
                t = !1;
                break
            }
            return t
        },
        isIOS: function() {
            return /iPhone/i.test(s.val) || /iPad/i.test(s.val)
        },
        isIPhone: function() {
            return /iPhone/i.test(s.val)
        },
        isAndroid: function() {
            return /Android/i.test(s.val) || /Linux/i.test(s.val)
        },
        isWX: function() {
            return /MicroMessenger/i.test(s.val)
        },
        getWxVer: function() {
            var e = s.val.match(/MicroMessenger\/([\d\.]+)/i);
            return e && e[1] ? e[1] : ""
        },
        getOsVersion: function() {
            var e = navigator.userAgent,
            t = {};
            if (e.indexOf("Mac OS X") > -1) {
                var a = e.match(/OS [\d._]*/gi);
                t.name = "IOS",
                t.num = (a + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
            } else if (e.indexOf("Android") > -1 || e.indexOf("Linux") > -1) t.name = "Android",
            t.num = e.substr(e.indexOf("Android") + 8, e.indexOf(";", e.indexOf("Android")) - e.indexOf("Android") - 8);
            else if (e.indexOf("BB10") > -1) t.name = "blackberry",
            t.num = e.substr(e.indexOf("BB10") + 5, e.indexOf(";", e.indexOf("BB10")) - e.indexOf("BB10") - 5);
            else if (e.indexOf("IEMobile") > -1) t.name = "winphone",
            t.num = e.substr(e.indexOf("IEMobile") + 9, e.indexOf(";", e.indexOf("IEMobile")) - e.indexOf("IEMobile") - 9);
            else {
                var i = navigator.userAgent.toLowerCase();
                i.indexOf("windows nt 5.0") > -1 ? t.name = "Windows 2000": i.indexOf("windows nt 5.1") > -1 || i.indexOf("windows nt 5.2") > -1 ? t.name = "Windows XP": i.indexOf("windows nt 6.0") > -1 ? t.name = "Windows Vista": i.indexOf("windows nt 6.1") > -1 || i.indexOf("windows 7") > -1 ? t.name = "Windows 7": i.indexOf("windows nt 6.2") > -1 || i.indexOf("windows 8") > -1 ? t.name = "Windows 8": i.indexOf("windows nt 6.3") > -1 ? t.name = "Windows 8.1": i.indexOf("windows nt 6.2") > -1 || i.indexOf("windows nt 10.0") > -1 ? t.name = "Windows 10": t.name = "Unknown",
                t.num = "Unknown"
            }
            return t
        }
    },
    $.each(s,
    function(e, t) {
        var a;
        "function" == typeof t && (s[e] = function() {
            return a = t.call(s),
            s[e] = function() {
                return a
            },
            a
        })
    }),
    s.getWxVerNum = function(e) {
        if (e || (e = s.getWxVer()), !e) return 0;
        var t = 0;
        return $.each(e.split("."),
        function(e, a) {
            t += Math.pow(1e3, 2 - e) * parseInt(a)
        }),
        t
    },
    s.compareWxVer = function(e) {
        return s.getWxVerNum() >= s.getWxVerNum(e)
    },
    s.compareOsVer = function(e, t) {
        var a = s.getOsVersion();
        return a.name == e && s.getWxVerNum(a.num) > s.getWxVerNum(t)
    },
    e.isIPhone = s.isIPhone,
    e.IsPC = s.isPC,
    e.UA = s,
    e.getType = function(e) {
        return Object.prototype.toString.call(e).match(/\[object\s(\w+)]/)[1].toLowerCase()
    },
    e.changeTimeLimit = function(e) {
        if (!e || "[8]" == e) return "周一至周日";
        for (var t = $.parseJSON(e), a = "", i = 0; i < t.length; i++) {
            for (var n = i,
            o = i; t[o + 1] == t[o] + 1;) o++;
            a = n == o ? a + (a ? "、": "") + _(t[n]) : a + (a ? "、": "") + _(t[n]) + "至" + _(t[o]),
            i = o
        }
        return a
    },
    e.jointUrlArg = function(e, t) {
        return t ? e + (e.indexOf("?") >= 0 ? "&": "?") + t: e
    },
    e.jointUrlArgNew = function(e, t) {
        return - 1 != e.indexOf(t) ? e: t ? e + (e.indexOf("?") >= 0 ? "&": "?") + t: e
    },
    e.jointParams = function(e) {
        var t = [];
        return $.each(e,
        function(e, a) {
            t.push(e + "=" + a)
        }),
        t.join("&")
    },
    e.setUrlArg = function() {
        if (! (arguments.length < 2)) {
            var t = a.slice.call(arguments),
            i = e.parseURL(t.shift());
            return $.each(t,
            function(e, t) {
                "array" === $.type(t) && (i.params[t[0]] = t[1])
            }),
            i.obj.search = e.jointUrlArg("", e.jointParams(i.params)),
            i.obj.href
        }
    },
    e.removeUrlArg = function() {
        var t = a.slice.call(arguments);
        if (! (t.length < 2)) {
            var i = e.parseURL(t.shift());
            return $.each(t,
            function(e, t) {
                i.params.hasOwnProperty(t) && delete i.params[t]
            }),
            i.obj.search = e.jointUrlArg("", e.jointParams(i.params)),
            i.obj.href
        }
    },
    e.parseURL = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        {
            obj: t,
            source: e,
            protocol: t.protocol.replace(":", ""),
            host: t.hostname,
            port: t.port,
            query: t.search,
            params: function() {
                for (var e, a = {},
                i = t.search.replace(/^\?/, "").split("&"), n = i.length, o = 0; o < n; o++) i[o] && (a[(e = i[o].split("="))[0]] = e[1]);
                return a
            } (),
            file: (t.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
            hash: t.hash.replace("#", ""),
            path: t.pathname.replace(/^([^\/])/, "/$1"),
            relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
            segments: t.pathname.replace(/^\//, "").split("/")
        }
    },
    e.replaceUrlByTime = function() {
        try {
            var e = document.URL.replace(/[&?]_hgTime=\d+/, "");
            e += ( - 1 == e.indexOf("?") ? "?": "&") + "_hgTime=" + (new Date).getTime(),
            history.replaceState(null, "", e)
        } catch(e) {}
    },
    e.shuffle = function(e) {
        for (var t = e.length,
        a = 0; a < t - 1; a++) {
            var i = Math.floor(Math.random() * (t - a)),
            n = e[i];
            e[i] = e[t - a - 1],
            e[t - a - 1] = n
        }
        return e
    },
    function() {
        function t(e, t) {
            return function(a, i, n) {
                void 0 === t[a] ? t[a] = 0 : t[a]++,
                void 0 === n && (n = e),
                n > 0 && t[a] >= n || t(a, i)
            }
        }
        e.logStd = t(40,
        function(e, t) {
            try {
                t = t.slice(0, 2e3)
            } catch(e) {} - 1 !== ["UserAgent-refreshRem-gRem-fontSize", "testLog_Game", "testLog_Comm", "gps-LogStd"].indexOf(e) && $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "logJsErr/jsLogStd",
                data: {
                    msg: "hgLog-" + e + " msg=" + t + " aid=" + g_config.aid + " gameId=" + g_config.gameId + " openId=" + g_config.openId
                }
            })
        }),
        e.logErr = t(3,
        function(e, t) {
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "logJsErr/jsLogErr",
                data: {
                    msg: "hgErr-" + e + " msg=" + t + " aid=" + g_config.aid + " gameId=" + g_config.gameId + " openId=" + g_config.openId
                }
            })
        })
    } (),
    function() {
        e.logPhoneDog = function(t) {
            e.logDog(1000155, t + 1)
        };
        var t = $.throttle(function(t) {
            1 == t.length ? e.logDogSynch.apply(e, t[0]) : e.logDogList($.map(t,
            function(e) {
                var t = {
                    id: parseInt(e[0])
                },
                a = parseInt(e[1]),
                i = parseInt(e[2]);
                return ! isNaN(a) && (t.src = a),
                !isNaN(i) && (t.objId = i),
                t
            }))
        },
        0, !0);
        e.logDog = function(a) {
            t.apply(e, arguments)
        },
        e.logObjDog = function(t, a, i) {
            e.logDog(t, a, i)
        },
        e.logDogList = function(e) {
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "log/dogList",
                data: {
                    dogList: $.toJSON(e)
                }
            })
        },
        e.logDogSynch = function(t, a, i) {
            var n = isNaN(i) ? "": "&objId=" + e.encodeUrl(i);
            $.ajax({
                type: "get",
                url: g_config.apiAjaxUrl + "log/dog?dogId=" + e.encodeUrl(t) + "&dogSrc=" + e.encodeUrl(a) + n
            })
        }
    } (),
    function() {
        var t;
        "undefined" != typeof _manage && _manage && !_preview && (t = function() {
            return parent.Edit.getInjector()
        }),
        e.watch = function e() {
            function i(e, a, o, s, r) {
                if (n(o)) return t ? i.add(e, o, s, r) : void o(a, a)
            }
            i.add = function(e, a, i, o) {
                if (t && n(a)) {
                    var s, r = $.extend({
                        objectEquality: !1
                    },
                    o),
                    g = function(t) {
                        t.$evalAsync && t.$watch ? t.$safeApply(function() {
                            s = $.isArray(e) ? t.$watchGroup(e, a, r.objectEquality) : t.$watch(e, a, r.objectEquality)
                        }) : t.getScope().$safeApply(function() {
                            s = {
                                uw: function() {
                                    t.stop(e)
                                },
                                check: t(e, a, r.objectEquality)
                            }
                        })
                    };
                    return "string" == $.type(i) ? i = $$(i).data("$scope") : "boolean" == $.type(i) && i ? t().invoke(["watch", g]) : "object" == typeof i && i ? g(i) : t().invoke(["$rootScope", g]),
                    s
                }
            };
            i.bind = function() {
                var e = a.slice.call(arguments),
                n = !1;
                $.isArray(e[0]) || (n = e.shift(), t && ("string" == $.type(n) ? n = $$(n).data("$scope") : "function" == $.type(n) && (n = n())));
                var o = {};
                $.each(e,
                function(e, t) {
                    t.$exp = t[t.length - 2],
                    t.$regExp = new RegExp("\\{" + t[0] + "}", "g"),
                    t.$val = t[t.length - 1],
                    o[t[0]] = t.$val
                });
                var s = function(t) {
                    return function() {
                        var a = o;
                        arguments[2] || (a = {},
                        $.each(e,
                        function(e, t) {
                            a[t[0]] = r.evalNg(t.$exp, !0)
                        })),
                        a.$context = this,
                        t.apply(a, arguments)
                    }
                },
                r = function(e, t, a, o) {
                    return t = a ? s(t) : t,
                    i(r.getNgExp(e), r.eval(e), t, n, o)
                };
                return r.add = function(e, t, a, o) {
                    return t = a ? s(t) : t,
                    i.add(r.getNgExp(e), t, n, o)
                },
                r.getNgExp = function(t) {
                    return $.each(e,
                    function(e, a) {
                        t = t.replace(a.$regExp, a.$exp)
                    }),
                    t
                },
                r.evalNg = function(e, a) {
                    if (!a && (e = r.getNgExp(e)), n && n.$eval) return n.$eval(e);
                    var i = null;
                    return t().invoke(["$rootScope",
                    function(t) {
                        i = t.$eval(e)
                    }]),
                    i
                },
                r.eval = function(t, a) {
                    return $.each(e,
                    function(e, a) {
                        t = t.replace(a.$regExp, "conf[" + e + "].$val")
                    }),
                    new Function("conf", "return (" + t + ");")(e)
                },
                r
            };
            i.$new = e;
            return i
        } ()
    } (),
    r = 0,
    e.showLoadToast = function(e) {
        return $("#loadingToast .weui-toast__content").text(e),
        $("#loadingToast").removeClass("hide"),
        ++r
    },
    e.hideLoadToast = function(e) {
        void 0 !== e && e !== r || $("#loadingToast").addClass("hide")
    },
    e.showLoadBottom = function(e) {
        e.html("<div id='bottomLoading' class='bottom_load'></div>")
    },
    e.otherAjaxComplete = function() {
        var e;
        tryPlay ? ((e = $(".ajaxLoadBar")).addClass("ajaxComplete"), setTimeout(function() {
            e.removeClass("ajaxLoad"),
            e.removeClass("ajaxComplete"),
            $(".ajaxLoadBg").hide()
        },
        500)) : ((e = newWin().$(".ajaxLoadBar")).addClass("ajaxComplete"), setTimeout(function() {
            e.removeClass("ajaxLoad"),
            e.removeClass("ajaxComplete"),
            newWin().$(".ajaxLoadBg").hide()
        },
        500))
    },
    e.ajaxLoad = {
        show: function(t) {
            var a = function() {
                c = !0,
                $(".ajaxLoadBg").show(),
                $(".ajaxLoadBar").addClass("ajaxLoad"),
                e.showLoadToast("数据加载中")
            };
            0 == arguments.length ? a() : g = setTimeout(a, t)
        },
        hide: function() {
            clearTimeout(g),
            c && (e.hideLoadToast(), e.otherAjaxComplete(), c = !1)
        }
    },
    e.ajaxLoad = function() {
        var t, a, i = !1;
        return {
            show: function(n) {
                var o = function() {
                    clearTimeout(a),
                    i || ($(".ajaxLoadBg").show(), $(".ajaxLoadBar").addClass("ajaxLoad"), e.showLoadToast("数据加载中"), i = !0)
                };
                void 0 === n ? o() : t = setTimeout(o, n)
            },
            hide: function(n) {
                var o = function() {
                    clearTimeout(t),
                    i && (e.hideLoadToast(), e.otherAjaxComplete(), i = !1)
                };
                void 0 === n ? o() : a = setTimeout(o, n)
            }
        }
    } (),
    e.appendMusicIcon = function() {
        if ( - 1 === [100, 102, 106].indexOf(g_config.style)) {
            var e = $("body").data("hd-initHdGameJsfootArg");
            if (e) {
                var t = function(t) {
                    return t.find('.soundIcon:not(".soundIconPlay")').css({
                        left: e.soundIcon_l,
                        top: e.soundIcon_t
                    }),
                    t
                },
                a = function(e, t) {
                    return e.append('<div class="' + (_manage ? "": "soundIconOff ") + "soundIcon" + (1 != hg.sound.list[0].optFlag ? "": " soundIconHide") + '" style="z-index:' + (t || 100) + '"></div>'),
                    e
                };
                55 == g_config.style || 27 == g_config.style ? (t(a($(".gameBgBox"), 90)), $('.home .soundIcon:not(".soundIconPlay")').hide()) : g_config.isPaymentGame && 114 != g_config.style || -1 != $.inArray(g_config.style, [49, 69]) ? t(a($(".body"), 700)) : 67 == g_config.style ? t(a($(".myCutDownPriceList"), 700)) : 107 == g_config.style ? t(a($(".commEleBox .soundBox"), 700)) : -1 != $.inArray(g_config.style, [114, 119, 121]) ? t(a($(".body"), 700)) : 117 == g_config.style ? t(a($(".home"), 700)) : (a($(".home,.gameBgBox"), 700), t($(".home"))),
                $("body").removeData("hd-initHdGameJsfootArg")
            }
        }
    },
    e.checkStatus = function() {
        if (3 == g_config.status) return e.statusMsg(3),
        !0
    },
    e.getIsOutofJoinNumFlag = function(t) {
        var a = 71 == g_config.style ? "checkJoinGroupNum": "checkJoinNum",
        i = e.jointUrlArg(g_config.apiAjaxUrl + "playerJoinGame/" + a, e.jointParams({
            gameId: g_config.gameId,
            openId: g_config.openId
        }));
        return $.ajax({
            type: "POST",
            url: i,
            dataType: "json",
            success: function(a) {
                e.tlog("isOutofJoinNum", a),
                t && a && t(null, a)
            },
            error: function() {
                t && t("error")
            }
        })
    },
    e.initPageSet = function(t, a, i) {
        var n = {},
        o = {},
        s = "",
        r = 0;
        function g(e, t) {
            c(e),
            l(t)
        }
        function c(e) {
            if ($.isArray(e)) for (var t = 0,
            a = e.length; t < a; t++) $.isArray(e[t]) ? d(e[t][0], e[t][1]) : "string" == typeof e[t] && d(e[t]);
            else "string" == typeof e && d(e, arguments[1])
        }
        function d(t, a) {
            o[t] ? e.tlog("page " + pageObj + " has registered") : (o[t] = {
                isInit: !1,
                ele: a || "." + t,
                content: []
            },
            $(o[t].ele).addClass("regPage"))
        }
        function l(t) {
            if (t) if ($.isArray(t)) for (var a = 0,
            i = t.length; a < i; a++) l(t[a]);
            else "string" == typeof t && (o[t] ? delete o[t] : e.tlog("page " + t + " is not registered"))
        }
        function f(e) {
            for (var t in e) u(t, e[t])
        }
        function u(e, t) {
            var a = o[e];
            if (a) {
                if (t.content) for (var i = a.content,
                n = 0,
                s = t.content.length; n < s; n++) {
                    for (var r = 0,
                    g = i.length; r < g && t.content[n] != i[r]; r++);
                    r == g && i.push(t.content[n])
                }
                delete t.content,
                $.extend(!0, a, t)
            }
        }
        function p(t, a, i) {
            if (55 != g_config.style) {
                s == t && e.tlog("curPage is allright");
                var g = o[t];
                g ? (g.isInit || (!
                function(e) {
                    var t = o[e];
                    if (t) {
                        var a = t.content;
                        if (t.beforeSet && t.beforeSet(), a) for (var i = 0,
                        s = a.length; i < s; i++) {
                            var g = n[a[i]];
                            if (g) {
                                var c = $(g.content);
                                c.parent().length > 0 ? (c.addClass("share_assembly share_assembly_" + e), g.container && 0 == c.parent(g.container).length && c.appendTo(g.container)) : g.container && g.isInit ? g.shareNum && $(".share_assembly_" + g.shareNum).addClass("share_assemblyshare_assembly_" + e) : (g.container && (g.shareNum = ++r, c.addClass("share_assembly share_assembly_" + g.shareNum + " share_assembly_" + e)), g.beforeSet && g.beforeSet(c), c.appendTo(g.container ? g.container: o[e].ele), g.afterSet && g.afterSet(c), g.isInit = !0)
                            }
                        }
                        t.afterSwitch && t.afterSwitch()
                    }
                } (t), g.isInit = !0), (void 0 === i || i) && s && $(".regPage").hide(),
                function(e, t) {
                    $(".share_assembly_" + e).show(),
                    (void 0 === t || t) && $(".share_assembly:not(.share_assembly_" + e + ")").hide()
                } (t, i), $(g.ele).show(), s = t, a && a()) : e.tlog("ERR: page " + t + " is not registered")
            }
        }
        function h(e) {
            for (var t in e)"string" == typeof e[t] && (e[t] = {
                content: e[t]
            });
            $.extend(n, e)
        }
        return h(t),
        g(a),
        f(i),
        p("home"),
        {
            addAssembly: h,
            modifyAssembly: function(e) {
                $.extend(!0, n, e)
            },
            registerPage: g,
            addPage: c,
            removePage: l,
            setPage: f,
            setSinglePage: u,
            switchPage: p
        }
    },
    e.optReSize = function() {
        $("#resule-status-scrollWrap .optContainer").height($("#resule-status-scrollWrap").innerHeight() - $("#resule-status-scrollWrap .attentionBox").eq(0).outerHeight() - 1.8 * g_rem)
    },
    e.forbinSlide = function(e) {
        var t = ".srl_container",
        a = 0,
        i = 0,
        n = 0,
        o = 0;
        t = e ? e.join(",") : t,
        $("body>*:not(.hd_srl)").off("touchmove.hd_srl_fixed").on("touchmove.hd_srl_fixed",
        function(e) {
            e.preventDefault()
        }).addClass(".hd_srl"),
        $(t).css("overflow-y", "hidden"),
        $(t).off("touchstart.hd_srl").on("touchstart.hd_srl",
        function(e) {
            n = 0;
            var t = $(this).find(".srl_content");
            0 == t.length && (t = $(this).wrapInner('<div class="srl_content" style="width:100%;position:relative;top:0;left:0;overflow:hidden;"><div class="srl_content" style="overflow:hidden;width:100%;position:absolute;top:0;left:0;"></div></div>').find(".srl_content"));
            var i = t.length;
            o = 0;
            for (var s = t.eq(i - 1).children(), r = 0, g = s.length; r < g; r++) {
                var c = s.eq(r);
                if ("none" != c.css("display")) {
                    var d = c.position().top + c.outerHeight(!0);
                    o = d > o ? d: o
                }
            }
            var l = t.eq(0).css("transition-duration", "0ms").position().top;
            o += l < 0 ? 0 : l,
            o = e.delegateTarget.clientHeight > o ? e.delegateTarget.clientHeight: o,
            t.eq(0).position().top <= 0 && t.css("height", o + "px"),
            a = e.originalEvent.targetTouches[0].pageY,
            e.stopPropagation()
        }),
        $(t).off("touchend.hd_srl").on("touchend.hd_srl",
        function(e) { (i += 4 * n) > 0 ? i = 0 : 0 - i + e.delegateTarget.clientHeight > o && (i = e.delegateTarget.clientHeight - o),
            $(this).children().css({
                "transition-duration": "200ms",
                transform: "translate3d(0px, " + i + "px, 0px)"
            }),
            e.stopPropagation()
        }),
        $(t).off("touchmove.hd_srl").on("touchmove.hd_srl",
        function(e) {
            e.preventDefault();
            var t = $(this).children(".srl_content"),
            s = e.originalEvent.targetTouches;
            n = s[0].pageY - a,
            i > 0 || 0 - i + e.delegateTarget.clientHeight > o ? i += n / 3 : (i += n, o = e.delegateTarget.scrollHeight),
            t.css("transform", "translate3d(0px, " + i + "px, 0px)"),
            a = s[0].pageY,
            e.stopPropagation()
        }),
        $("#log_text_wrap").off("touchmove.hd_srl").on("touchmove.hd_srl",
        function(e) {
            e.stopPropagation()
        })
    },
    e.ctlScl = function(t, a, i) {
        function n(e, t) {
            if (t) {
                var a = "";
                $.isArray(t) ? a = t.join(",") : "string" == typeof t ? a = t: "boolean" == typeof t && (i = t),
                $(a).addClass(e)
            }
        }
        n("srl_container", arguments[0]),
        n("srl_content", arguments[1]),
        i && e.forbinSlide(t)
    },
    e.getPosAndSize = function(t, a, i) { ! i && (i = e.Img.MODE_SCALE_DEFLATE_FILL);
        var n = e.Img.calcSize(t.width, t.height, a.width, a.height, i, !0),
        o = a.left || 0,
        s = a.top || 0;
        return $.extend(n, {
            left: (a.width - n.width) / 2 + o,
            top: (a.height - n.height) / 2 + s
        })
    },
    $.ajaxPrefilter("*",
    function(e, t, a) {
        e.data ? e.data = e.data + "&": e.data = "",
        "undefined" != typeof fromCanal && (e.data += $.param({
            canal: fromCanal
        })),
        ( - 1 != t.url.indexOf("cmd=setPhone") || -1 != t.url.indexOf("cmd=setAchieve") || t.url.indexOf(!0) || t.url.indexOf("zhuLi/addPlayerForZL")) && (e.data += "&" + $.param({
            playerOrigin: g_config.playerOrigin,
            uid: g_config.uid
        })),
        g_config.extra && t.url.indexOf("cmd=addPlayerForZL") > -1 && (e.data += "&" + $.param({
            extra: g_config.extra
        })),
        g_config.extra && t.url.indexOf("zhuLi/addPlayerForZL") > -1 && (e.data += "&" + $.param({
            extra: g_config.extra
        })),
        g_config.aid && g_config.gameId && (e.data += "&" + $.param({
            aid: g_config.aid,
            gameId: g_config.gameId
        }))
    }),
    function() {
        function t(e, t) {
            var a = 0,
            i = e.toString(),
            n = t.toString();
            try {
                a += i.split(".")[1].length
            } catch(e) {}
            try {
                a += n.split(".")[1].length
            } catch(e) {}
            return Number(i.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, a)
        }
        function a(e) {
            return function(t, a) {
                return isNaN(t) || isNaN(a) ? NaN: e(t, a)
            }
        }
        e.Num = {
            add: a(function(e, a) {
                var i, n, o;
                try {
                    i = e.toString().split(".")[1].length
                } catch(e) {
                    i = 0
                }
                try {
                    n = a.toString().split(".")[1].length
                } catch(e) {
                    n = 0
                }
                return (t(e, o = Math.pow(10, Math.max(i, n))) + t(a, o)) / o
            }),
            sub: a(function(e, a) {
                var i, n, o, s;
                try {
                    i = e.toString().split(".")[1].length
                } catch(e) {
                    i = 0
                }
                try {
                    n = a.toString().split(".")[1].length
                } catch(e) {
                    n = 0
                }
                return o = Math.pow(10, Math.max(i, n)),
                s = i >= n ? i: n,
                Number(((t(e, o) - t(a, o)) / o).toFixed(s))
            }),
            mul: a(t),
            div: a(function(e, t) {
                var a = 0,
                i = 0;
                try {
                    a = e.toString().split(".")[1].length
                } catch(e) {}
                try {
                    i = t.toString().split(".")[1].length
                } catch(e) {}
                return Number(e.toString().replace(".", "")) / Number(t.toString().replace(".", "")) * Math.pow(10, i - a)
            })
        },
        e.foreiganNum = function(e) {
            for (var t = (e + "").split("."), a = [], i = 0, n = (e = ((e = parseInt(t[0])) || 0).toString().split("")).length - 1; n >= 0; n--) i++,
            a.unshift(e[n]),
            i % 3 || 0 == n || a.unshift(",");
            var o = a.join("");
            return 2 == t.length && (o = o + "." + t[1]),
            o
        }
    } (),
    e.poupValidate = function(e, t) {
        if ($("#spxdPage").hasClass("imp-hide") || $("#spxdPage").addClass("imp-hide"), g_config.theValiteCodeComeInTime = (new Date).getTime(), 0 == $("#valiteInputIframe").length) {
            var a = g_config.ajaxUrl.replace("/ajax/", "");
            $("#validteBoxerBg").data("_theCallBack", e).show(),
            $("#validteBoxerBg").append('<iframe id="valiteInputIframe" frameborder="0" scrolling="no" src="' + a + '/poupvalite.jsp" style="height: 25rem; width: 100%;"></iframe>')
        } else $("#validteBoxerBg").data("_theCallBack", e).show();
        t && (g_config.valiteOptions = t),
        void 0 === t && delete g_config.valiteOptions
    },
    e.showFaitestValidate = function(t) {
        e.Res.loadg("faitest").then(function() {
            var a, i;
            a = function(a) {
                var i, n, o;
                i = a.valicateCode,
                n = t,
                o = {
                    code: i,
                    gameId: g_config.gameId,
                    openId: g_config.openId,
                    style: g_config.style,
                    otherPlayerOpenId: g_config.otherplayer,
                    comeInTime: g_config.theValiteCodeComeInTime,
                    passTimer: (new Date).getTime()
                },
                $.extend(o, g_config.valiteOptions),
                $.ajax({
                    url: g_config.apiAjaxUrl + "other/checkValidateCode",
                    data: o,
                    type: "post",
                    success: function(t) { (t = $.parseJSON(t)).success ? n && n(t) : e.showMsgToast("验证失败~")
                    }
                })
            },
            initFaitest instanceof Function && (initFaitest({
                bss: 2,
                bssKey: "AKjHodsCCAEQAhoMWzMsMTEsMTIsMTNdIgnmuKnlgaXmsJE"
            },
            function(e) {
                a && a({
                    valicateCode: e
                })
            }), i instanceof Function && $(".fa-modal--close").on("click", i))
        })
    },
    e.checkPhone = function(e) {
        return !! /^1[3456789]\d{9}$/.test(e)
    },
    e.initSwiper = function(t, a, i, n) {
        var o = t instanceof $ ? t: $(t).eq(0);
        return e.tlog("initSwiperBanner: ", o),
        o.data("swiper") && o.data("swiper").initialized ? (e.tlog(t, "已经初始化"), console.warn(t + " 已经初始化")) : a <= 1 ? (o.find(".swiper-wrapper").css("transform", "translate3d(0px, 0px, 0px)"), o.find(".swiper-number-pagination").addClass("hide"), void(n && n({
            number: a,
            autoplay: i
        }))) : void e.Res.load("swiper_simple").then(function() {
            e.tlog("load swiper_simple: ", "ok");
            var o = {
                el: t,
                loop: !0
            };
            i && (o.autoplay = {
                enabled: !0,
                delay: 2500,
                disableOnInteraction: !1
            });
            var s = new Swiper(o),
            r = s.$el.find(".swiper-number-pagination");
            r.removeClass("hide").text(s.realIndex + 1 + "/" + a),
            s.on("realIndexChange",
            function() {
                s.updateSlides(),
                r.text(s.realIndex + 1 + "/" + a)
            }),
            i && hg.on("startBannerVideo",
            function() {
                s.autoplay.stop()
            }).on("endBannerVideo",
            function() {
                s.autoplay.start()
            }),
            n && n({
                swiper: s,
                number: a,
                autoplay: i
            })
        })
    },
    e.minShareTouch = function(t) {
        t = t || {},
        $("body").append("<div id='minShareBtn'></div>");
        var a = $("#minShareBtn"),
        i = a.outerWidth(),
        n = a.outerHeight(),
        o = {
            width: $(window).width(),
            height: $(window).height()
        },
        s = {
            width: o.width - i,
            height: o.height - n
        },
        r = {
            status: !1,
            x: s.width - .64 * g_rem,
            y: s.height - 1.74 * g_rem,
            touchX: 0,
            touchY: 0
        };
        function g(e, t) { (r.status || t) && (a.css({
                "-webkit-transform": "translate(" + r.x + "px," + r.y + "px)",
                transform: "translate(" + r.x + "px," + r.y + "px)"
            }), requestAnimFrame(g))
        }
        g(0, !0),
        a.on({
            touchstart: function(e) {
                $(this).addClass("move");
                var t = e.originalEvent.targetTouches[0];
                r.touchX = t.pageX,
                r.touchY = t.pageY,
                r.status = !0,
                g()
            },
            touchmove: function(e) {
                var t = e.originalEvent.targetTouches[0],
                a = t.pageX > 0 ? t.pageX < o.width ? t.pageX: o.width: 0,
                i = t.pageY > 0 ? t.pageY < o.height ? t.pageY: o.height: 0,
                n = r.x + a - r.touchX,
                g = r.y + i - r.touchY;
                r.x = n > 0 ? n < s.width ? n: s.width: 0,
                r.y = g > 0 ? g < s.height ? g: s.height: 0,
                r.touchX = a,
                r.touchY = i,
                e.preventDefault()
            },
            touchend: function(e) {
                $(this).removeClass("move"),
                r.status = !1
            },
            click: $.throttle(function() {
                var a = e.getminData();
                for (var i in t) t.hasOwnProperty(i) && (a[i] = t[i]);
                var n = "";
                for (var i in a) a.hasOwnProperty(i) && (n && (n += "&"), n += i + "=" + a[i]);
                wx.miniProgram.navigateTo({
                    url: "/pages/sharePage/sharePage?" + n
                })
            },
            500)
        })
    },
    e.getminData = function() {
        return {
            gameUrl: encodeURIComponent(e.wxConfigArg.url + "&fromCardBag=true"),
            aid: g_config.aid,
            gameId: g_config.gameId,
            openId: g_config.openId,
            shareDeep: g_config.shareDeep
        }
    },
    e.getminDataByHdportalM = function(t) {
        return {
            gameUrl: encodeURIComponent(e.wxConfigArg.url + "&fromHdportalM=true"),
            shareDesc: e.wxConfigArg.desc,
            shareImg: t
        }
    },
    e.watchMiniMusic = function() {
        var e = "hidden" in document ? "hidden": "webkitHidden" in document ? "webkitHidden": "mozHidden" in document ? "mozHidden": null,
        t = !0;
        $(document).on("visibilitychange",
        function(a) {
            document[e] ? hg.sound.cache[0].playing ? hg.sound.pauseAll() : t = !1 : t && hg.sound.play(0)
        })
    },
    e.renderSwiper = function(t, a) {
        var i = $.extend({},
        t);
        if (!i.name) return console.warn("HdGame.renderSwiper(): name is not defined!");
        if (!a || !a.length) return console.warn("HdGame.renderSwiper(): container is not defined!");
        if (!i.config) return console.warn("HdGame.renderSwiper(): config is not defined!");
        for (var n = i.name,
        o = i.config,
        s = i.videoConfig,
        r = function(t) {
            var a = "";
            if (g_config.$$hasBannerVideoGame && s.length > 0 && 1 == s[t].bannerFormat) {
                var i = s[t],
                n = 1 == i.videoFormat ? 2 : 1;
                a = '<div class="game_videoPlayer" data-viewType="' + n + '" data-videoSrc="' + (1 == n ? e.encodeHtml(i.videoCode) : e.encodeHtmlAttr(i.videoSrc)) + '"></div><div class="game_playerMask"></div>'
            }
            return a
        },
        g = '<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide swiper-slide-first">' + r(0) + "</div>", c = 1; c < o.bannerNumber; c++) g += '<div class="swiper-slide"><div class="editTarget-' + n + "-" + c + ' swiper-editTarget swiper-background-full"></div>' + r(c) + "</div>";
        g += '</div><div class="swiper-number-pagination ' + (1 == o.bannerNumber ? "hide": "") + '">1/' + o.bannerNumber + "</div></div>",
        g = $(g),
        g_config.$$hasBannerVideoGame && s.length > 0 && e.Res.load("js_uploader").then(function() {
            $(".game_videoPlayer").off("click").on("click",
            function() {
                hg.fire("startBannerVideo");
                var e = $(this).data("viewtype"),
                t = $(this).data("videosrc");
                Uploader.viewVideo({
                    viewType: e,
                    src: t,
                    btnText: "关闭",
                    isShowCloseBtn: !1,
                    onClose: function() {
                        hg.fire("endBannerVideo");
                        var t = $("#uploaderEditBox .videoViewBox .viewIframeElem"),
                        a = $("#uploaderEditBox .videoViewBox .viewVideoElem");
                        1 == e && t.empty(),
                        2 == e && a.empty()
                    }
                })
            })
        }),
        a.addClass("swiper-editTarget swiper-background-full"),
        g.insertBefore(a).find(".swiper-wrapper .swiper-slide-first").append(a),
        e.initSwiper(g, o.bannerNumber, o.bannerAutoplay)
    },
    e.slideSwiperTo = function(e) {
        var t = $.extend({
            page: 0
        },
        e);
        return null == t.page ? console.warn("HdGame.slideSwiperTo(): page is not defined!") : t.swiperSelector ? void(t.swiperSelector instanceof $ ? t.swiperSelector: $(t.swiperSelector)).each(function() {
            var e = $(this).data("swiper");
            if (e) {
                var a = t.page,
                i = e.params.autoplay.enabled;
                e.params.loop && (a += 1),
                e.slideTo(a, 0, !1),
                i && (e.autoplay.stop(), e.autoplay.start())
            } else console.warn("HdGame.slideSwiperTo(): %s is not instantiate Swiper.", this)
        }) : console.warn("HdGame.slideSwiperTo(): swiperSelector is not defined!")
    },
    e.changeSwiperAwardList = function(e) {
        var t = $.extend({},
        e);
        if (null == t.index) return console.warn("HdGame.changeSwiperAwardList(): index is not defined!");
        $(t.selector).each(function(e) {
            $(this).toggleClass("hide", t.index !== e)
        })
    },
    e.drawShareImage = function(t) {
        t = $.extend(!0, {
            ver: 0
        },
        t);
        var i = $('<div id="createImageSharePoup" class="is-active ver' + t.ver + '"><div class="mask"></div>' + (1 === t.ver ? '<div class="tipsContainer"><div class="pointer"></div><div class="tipsText"><p>长按图片保存，</p><p>分享给好友赚取更多佣金</p></div></div>': '<div class="tipsText">长按保存图片，发给好友一起参与</div>') + '<div id="createImageShareWrapper"><span style="display: inline-block; margin-top: 5rem;">生成图片中...</span></div></div>');
        i.find(".mask").on("touchstart",
        function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            i.hide()
        }),
        $("body").append(i);
        var n = document.createElement("canvas"),
        o = n.getContext("2d"),
        s = void 0 !== o.__LF__pixel__ratio__,
        r = LF.setCanvasePixelRatio(o),
        g = 12.5 * g_rem,
        c = 20 * g_rem;
        n.width = g * r,
        n.height = c * r,
        n.style.width = g + "px",
        n.style.height = c + "px",
        e.tlog("canvas width: ", n.width),
        e.tlog("canvas height: ", n.height),
        e.tlog("canvas style width: ", n.style.width),
        e.tlog("canvas style height: ", n.style.height);
        var d = hg.edit.getInfoByName,
        l = .5 * g_rem,
        f = 1.4 * l,
        u = 7.5 * g_rem,
        p = {
            wxCreateImageSharePatternBackground: {
                order: 0,
                pos: {
                    left: 0,
                    top: 0
                },
                size: {
                    width: g,
                    height: c
                }
            },
            wxCreateImageSharePatternCoverMap: {
                order: 1,
                clip: function(e, t) { !
                    function(e, t, a, i, n, o) {
                        e.beginPath(),
                        e.moveTo(t + o, a),
                        e.arcTo(t + i, a, t + i, a + n, o),
                        e.arcTo(t + i, a + n, t, a + n, o),
                        e.arcTo(t, a + n, t, a, o),
                        e.arcTo(t, a, t + i, a, o),
                        e.clip(),
                        e.closePath()
                    } (e, t.left, t.top, t.width, t.height, .15 * g_rem)
                }
            },
            wxCreateImageSharePatternFansHead: {
                order: 2,
                path: g_config.headImg || "//hdg.faisys.com/image/manImg.jpg",
                clip: function(e, t) {
                    var a = Math.min(t.width, t.height) / 2,
                    i = {
                        x: t.left + a,
                        y: t.top + a
                    };
                    e.beginPath(),
                    e.arc(i.x, i.y, a, 0, 2 * Math.PI),
                    e.clip(),
                    e.closePath()
                },
                after: function(e, t) {
                    var a = Math.min(t.width, t.height) / 2,
                    i = {
                        x: t.left + a,
                        y: t.top + a
                    };
                    e.strokeStyle = "#FFFFFF",
                    e.lineWidth = .15 * g_rem * 2,
                    e.beginPath(),
                    e.arc(i.x, i.y, a, 0, 2 * Math.PI),
                    e.stroke(),
                    e.closePath()
                }
            }
        };
        function h(e) {
            var t = $.Deferred();
            return e(t.resolve, t.reject),
            t
        }
        function m(e) {
            switch ($.type(e)) {
            case "string":
                return parseFloat(e) * g_rem;
            case "number":
            default:
                return e
            }
        }
        function w(t) {
            var a = t.key;
            if (t.selected && !~ ["wxCreateImageShareActiveQrCode", "wxCreateImageSharePublicQrCode"].indexOf(t.key)) {
                var i = d(a),
                n = $.extend({
                    order: 10
                },
                i[1], i[0], p[a]);
                return $.extend({},
                {
                    order: n.order,
                    name: n.name,
                    path: e.getSrc(($.isArray(n.path) ? n.path[0] : n.path) || ""),
                    text: function() {
                        if (n.textarea && n.textarea[0]) return n.textarea[0].value ? n.textarea[0] : {
                            value: i[1].textarea[0].value
                        }
                    } (),
                    pos: n.pos,
                    size: n.size,
                    clip: n.clip,
                    after: n.after
                })
            }
        }
        var _, v, y = (_ = g_config._zhuliGameCreateImageShare, v = [], $.each([{
            key: "wxCreateImageSharePatternBackground",
            selected: !0
        }].concat(_),
        function() {
            var e = w(this);
            e && v.push(e)
        }), v.sort(function(e, t) {
            return e.order - t.order
        })).map(function(t) {
            return console.log("config", t),
            new h(function(a) {
                if (e.tlog("config: ", t), "wxCreateImageSharePatternTitle" === t.name && (t.text = {
                    value: g_config.awardList[0].name
                }), t.path) {
                    var i = new Image;
                    i.crossOrigin = "Anonymous",
                    i.onload = function() {
                        e.tlog("resolve image: ", t.name);
                        var n = $.extend({},
                        {
                            img: i,
                            left: m(t.pos.left),
                            top: m(t.pos.top),
                            width: m(t.size.width),
                            height: m(t.size.height),
                            clip: t.clip,
                            after: t.after
                        });
                        e.tlog("data: ", n),
                        a("image", n)
                    },
                    i.src = t.path + "?" + Date.now()
                } else t.text && a("text", $.extend({},
                {
                    text: t.text.value,
                    left: m(t.pos.left),
                    top: m(t.pos.top),
                    clip: t.clip,
                    after: t.after
                }))
            })
        }),
        x = {};
        $.when.apply($, y).then(function() {
            a.slice.call(1 === y.length ? [arguments] : arguments).forEach(function(t) {
                e.tlog("resolve data: ", t);
                var a = t[0],
                i = t[1];
                switch (a) {
                case "image":
                    o.save(),
                    i.clip && i.clip(o, i),
                    o.drawImage.apply(o, [i.img, i.left, i.top, i.width, i.height]),
                    i.after && i.after(o, i),
                    o.restore();
                    break;
                case "text":
                    o.save(),
                    i.clip && i.clip(o, i),
                    o.font = l + "px 微软雅黑",
                    o.fillStyle = "#313131",
                    function(e, t, a, i, n, o, s) {
                        var r = 0,
                        g = 0,
                        c = 1;
                        function d(e) {
                            r = e,
                            g = 0,
                            c += 1
                        }
                        void 0 === s && (s = "\n"),
                        t.split(s).forEach(function(t) {
                            for (var s, l, f = 0; f < t.length; f++) s = t[f],
                            l = t[f + 1] || "",
                            g += e.measureText(s).width,
                            n - g <= e.measureText(l).width && (e.fillText(t.slice(r, f + 1), a, i + c * o), d(f + 1));
                            e.fillText(t.slice(r), a, i + c * o),
                            d(0)
                        })
                    } (o, i.text, i.left, i.top - (f - l), u, f),
                    i.after && i.after(o, i),
                    o.restore();
                    break;
                default:
                    console.warn("HdGame.drawShareImage(): unknown type %s", a)
                }
            });
            var t = document.createElement("canvas"),
            i = t.getContext("2d");
            t.width = n.width,
            t.height = n.height,
            t.style.width = n.style.width,
            t.style.height = n.style.height,
            e.tlog("tmpCanvas width: ", t.width),
            e.tlog("tmpCanvas height: ", t.height),
            e.tlog("tmpCanvas style width: ", t.style.width),
            e.tlog("tmpCanvas style height: ", t.style.height);
            var g = s ? r: 1;
            i.drawImage(n, 0, 0, n.width / g, n.height / g),
            LF.setCanvasePixelRatio(i);
            var c = w({
                key: "wxCreateImageSharePatternQrCode",
                selected: !0
            }),
            d = function() {
                var a = e.wxConfigArg.url,
                n = "//" + window.location.host + (m_debug && /\/hd/.test(window.location.pathname) ? "/hd": "") + "/qrCode.jsp?cmd=qrurl&siteUrl=" + e.encodeUrl(a),
                o = e.getPosterQrCodeUrl(n);
                return new h(function(s) {
                    e.getMinappCodeInfo(g_config.gameId, a).then(function(r) {
                        var g = new Image;
                        g.crossOrigin = "anonymous",
                        g.onload = function() {
                            e.tlog("resolve image: ", c.name),
                            i.save(),
                            i.drawImage(g, m(c.pos.left), m(c.pos.top), m(c.size.width), m(c.size.height)),
                            i.restore();
                            var n = t.toDataURL("image/png");
                            x[a] = n,
                            s(n)
                        },
                        g.onerror = function() {
                            g.src = r ? r.codeImageUrl: n
                        },
                        g.src = r ? r.codeImageUrl: o
                    })
                })
            };
            e.drawShareImage = function() {
                var t = $("#createImageSharePoup"),
                a = e.wxConfigArg.url;
                if (t.length) return t.show(),
                void 0 !== x[a] ? void $("#createImageSharePoup").find("#createImageShareWrapper").html('<img class="sharePicture" src="' + x[a] + '" />') : (t.find("#createImageShareWrapper").html('<span style="display: inline-block; margin-top: 5rem;">生成图片中...</span>'), void d().then(function(e) {
                    $("#createImageSharePoup").find("#createImageShareWrapper").html('<img class="sharePicture" src="' + e + '" />')
                }))
            },
            d().then(function(e) {
                $("#createImageSharePoup").find("#createImageShareWrapper").html('<img class="sharePicture" src="' + e + '" />')
            })
        })
    },
    e.checkIsFaiOpenId = function() {
        var e = g_config.openId;
        return !! (e && e.length > 0) && (m_debug ? 0 == e.indexOf("osi") || 0 == e.indexOf("ofkc") : 0 == e.indexOf("osi") || 0 == e.indexOf("oosn"))
    },
    e.LogFaiOpenId = function(t, a) {
        e.checkIsFaiOpenId() && $.ajax({
            type: "get",
            url: g_config.apiAjaxUrl + "log/logDogOss?id=" + e.encodeUrl(t) + "&src=" + e.encodeUrl(a) + "&cliId=" + e.encodeUrl(g_config.openId)
        })
    },
    e.bindGolocation = function(t) {
        if (!_manage) {
            var a = {
                pointData: {
                    province: "北京",
                    city: "北京",
                    county: "",
                    address: "",
                    point: '{"lat":39.91485,"lng":116.403765}'
                },
                isOperation: !1,
                bindBtn: null,
                success: function() {},
                fail: function() {
                    e.showMsg("当前微信版本不支持定位或没开启定位服务，请联系活动主办单位")
                }
            };
            t = $.extend(!0, a, t),
            e.tlog("bindGolocation option", t);
            var i = function() {
                if (!t.point) return e.showMsg("主办方暂无设置地图定位选点");
                var a = "";
                $.forEach(["province", "city", "county", "address"],
                function(e) {
                    t[e] && (a += t[e])
                });
                var i = t.point,
                n = this;
                wx.ready(wx.openLocation({
                    latitude: i.lat,
                    longitude: i.lng,
                    name: t.address,
                    address: a,
                    scale: 22,
                    success: function(e) {
                        t.success.call(n, e, t)
                    },
                    fail: function(a) {
                        e.logStd("testLog_Comm", "-bindGolocation fail res" + $.toJSON(a)),
                        t.fail.call(n, a, t)
                    }
                }))
            };
            t.isOperation ? i.call(t.bindBtn) : t.bindBtn && t.bindBtn.length > 0 ? t.bindBtn.off("click.guideMap").on("click.guideMap",
            function() {
                i.call($(this))
            }) : console.warn("bindBtn can't be null or undefined ")
        }
    },
    e.checkAccessKeyLuckyDrawTotal = function(t) {
        return t = $.extend({},
        t),
        $.Deferred(function(a) {
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "accessKey/getLuckyDrawTotal",
                data: {
                    gameId: g_config.gameId,
                    openId: g_config.openId
                },
                dataType: "json",
                success: function(i) {
                    var n = i.msg || "系统繁忙，请稍后重试";
                    if (i.rt) return e.showMsgToast2({
                        bodyMsg: n
                    }),
                    void a.reject();
                    i.total > 0 ? a.resolve() : (e.otherAjaxComplete(), e.hideLoadToast(), t.notLuckyDrawTotal && t.notLuckyDrawTotal(), e.showAccessKeyPopup({
                        title: g_config.accesspopuptitle,
                        callback: function() {
                            a.resolve()
                        }
                    }))
                },
                error: a.reject
            })
        })
    },
    e.checkDiffRedPacketSendWay = function() {
        return $.Deferred(function(e) {
            $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "mobi/isDiffRedPacketSendWay",
                data: {
                    storeId: g_config.storeId,
                    areaId: g_config.areaId,
                    gameId: g_config.gameId
                },
                success: function(t) {
                    var a = $.parseJSON(t);
                    a.success && e.resolve(a.isDiffSendWay)
                },
                error: function() {
                    e.resolve(!1)
                }
            })
        })
    },
    e.sendQuestionGameReq = function(t, a, i, n, o, s, r) {
        return $.Deferred(function(g) {
            if (g_config.openNew_Qt) {
                if ("check" == t) {
                    var c = [];
                    if (void 0 === n) c = g_config.qtInfoParam.allAnswerList;
                    else if ("string" == typeof n) { (l = {}).answer = i,
                        l.sign = n,
                        c.push(l)
                    } else if ("object" == typeof n) for (var d = 0; d < n.length; d++) {
                        var l; (l = {}).answer = $.parseJSON(i)[d],
                        l.sign = n[d],
                        c.push(l)
                    }
                    g_config.qtInfoParam.allAnswerList = c
                }
                g_config.qtInfoParam.qtNum = g_config.qtNum,
                g_config.questionScore && (g_config.qtInfoParam.qtScore = g_config.questionScore);
                var f = {
                    gameId: g_config.gameId,
                    req_Type: t,
                    isManage: a,
                    titleIndex: o,
                    playerAnswer: i,
                    qtInfoParam: g_config.qtInfoParam,
                    openId: g_config.openId,
                    isOrder: r
                };
                s && $.extend(f, s),
                $.ajax({
                    type: "post",
                    url: g_config.apiAjaxUrl + "game4Qt/qtGame_Req?aid=" + g_config.aid,
                    data: {
                        questionObj: $.toJSON(f)
                    },
                    error: function() {
                        e.showMsg("网络繁忙，请刷新重试")
                    },
                    success: function(a) {
                        var i = $.parseJSON(a);
                        i.success ? ("get" == t && (g_config.qtInfoParam.exposure_QtList = g_config.qtInfoParam.exposure_QtList ? g_config.qtInfoParam.exposure_QtList: [], g_config.qtInfoParam.exposure_QtList.push(i.data.titleIndex), g_config.qtInfoParam.moreAnswer = i.data.moreAnswer, g_config.qtInfoParam.allAnswerList = i.data.allAnswerList), "check" != t || $.isEmptyObject(i.data.score_Qt) || ($.isEmptyObject(g_config.qtInfoParam.score_Qt) ? g_config.qtInfoParam.score_Qt = i.data.score_Qt: i.data.score_Qt.score >= g_config.qtInfoParam.score_Qt.score && (g_config.qtInfoParam.score_Qt = i.data.score_Qt)), g_config.qtInfoParam.playingAns = i.data.playingAns, g_config.qtInfoParam.r_List = i.data.r_List, g_config.qtInfoParam.analyze = i.data.analyze, g.resolve(i.data)) : i.isModify ? e.showMsg(i.msg, 0, "返回首页",
                        function() {
                            window.location.reload()
                        }) : e.showMsg(i.msg || "网络繁忙，请刷新重试")
                    }
                })
            } else g.resolve()
        })
    },
    e.isIphoneX_XS = function() {
        return /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width
    },
    e.isIphoneXR_XSMax = function() {
        return /iphone/gi.test(navigator.userAgent) && 896 == screen.height && 414 == screen.width
    },
    e.isIphone12 = function() {
        return /iphone/gi.test(navigator.userAgent) && 844 == screen.height && 390 == screen.width
    },
    e.isIphone12ProMax = function() {
        return /iphone/gi.test(navigator.userAgent) && 926 == screen.height && 428 == screen.width
    },
    e.isFullScreen_Phone = function() {
        return e.isIphoneX_XS() || e.isIphoneXR_XSMax() || e.isIphone12() || e.isIphone12ProMax()
    },
    e.refreshDrawTimes = function() {
        return $.Deferred(function(t) { (_fromCardBag || _fromHdportalM) && 2 == helpType ? $.ajax({
                type: "post",
                url: g_config.apiAjaxUrl + "gameOther/getGameDrawLimit",
                data: {
                    gameId: g_config.gameId,
                    openId: g_config.openId
                },
                error: function() {
                    t.resolve(!1)
                },
                success: function(a) {
                    var i = $.parseJSON(a);
                    if (i.rt) return t.resolve(!1);
                    var n = i.data;
                    e.tlog("drawTimesLimit, data.drawTimesLimit = " + drawTimesLimit + " - " + n.drawTimesLimit),
                    2 == helpType && drawTimesLimit != n.drawTimesLimit ? (e.wxConfig.handleShareAward('{"shareaward": true}'), t.resolve(!0)) : t.resolve(!1)
                }
            }) : t.resolve(!1)
        })
    },
    e.getUrlValByKey = function(e, t) {
        for (var a = e.split("?").length > 1 ? e.split("?")[1].split("&") : [], i = 0; i < a.length; i++) {
            var n = a[i].split("=");
            if (n[0] == t) return n[1]
        }
    },
    e.setIOSDeviceMotionEvent = function(t) {
        t = $.extend({
            type: "",
            cancelCallback: null
        },
        t);
        var a = !1;
        function i() {
            DeviceMotionEvent.requestPermission().then(function(a) {
                var i = "hasRequestDeviceMotion_" + g_config.gameId + "_" + g_config.aid;
                if (e.setLocalStorage(i, "-"), e.tlog("IOS devictMotion", a), "denied" == a) {
                    e.tlog("IOS devictMotion", "取消授权");
                    var n = t.type && "game" == t.type ? "由于您拒绝了手机访问动作与方向的权限，当前游戏无法正常进行，如需重新获取授权，可上滑关闭微信后再进入活动。": "由于您拒绝了手机访问动作与方向的权限，请点击屏幕任意区域进行抽奖。";
                    e.showMsgToast2({
                        bodyMsg: n,
                        primaryBtnText: "我知道了"
                    }),
                    t.cancelCallback && t.cancelCallback()
                }
            }).
            catch(function(n) {
                a ? t.cancelCallback && t.cancelCallback() : (e.tlog("IOS devictMotion", "显示授权前置提示"), a = !0, e.showMsgToast4({
                    hasHead: !0,
                    headImgSty: 4,
                    name: "IOSdevice",
                    confirmText: "我知道了",
                    msg: '<div class="title">获取授权</div><div class="content">请在接下来的弹窗中允许获取授权， 否则将无法正常进行' + (t.type && "game" == t.type ? "活动": "摇一摇") + '。</div><img src="' + _resRoot + '/image/comm/deviceImg.png" style="width: 6.45rem; height: 3.3rem;">',
                    confirmFn: function() {
                        i()
                    }
                }))
            })
        }
        "undefined" == typeof DeviceMotionEvent || g_config.test || "function" != typeof DeviceMotionEvent.requestPermission || (e.tlog("IOS devictMotion", "function"), i())
    },
    e.setIOSDeviceMotionEventOld = function() {
        "undefined" == typeof DeviceMotionEvent || g_config.test || "function" != typeof DeviceMotionEvent.requestPermission || (e.tlog("IOS devictMotion", "function"), !e.getLocalStorage("hasRequestDeviceMotion_" + g_config.gameId + "_" + g_config.aid) ? e.showMsgToast4({
            hasHead: !0,
            headImgSty: 0,
            name: "IOSdevice",
            confirmText: "我知道了",
            msg: '<div class="title">温馨提示</div><div class="content">由于微信版本升级需要手动获取访问动作与方向的权限，为保障游戏正常运行，请在访问提示中点击允许。</div>',
            confirmFn: function() {
                e.requestIOSDeviceMotion()
            }
        }) : e.requestIOSDeviceMotion())
    },
    e.requestIOSDeviceMotion = function() {
        DeviceMotionEvent.requestPermission().then(function(t) {
            var a = "hasRequestDeviceMotion_" + g_config.gameId + "_" + g_config.aid;
            e.setLocalStorage(a, "-"),
            e.tlog("IOS devictMotion", t),
            "denied" == t && (e.tlog("IOS devictMotion", "取消授权"), e.showMsgToast2({
                bodyMsg: "由于您拒绝了手机访问动作与方向的权限，当前游戏无法正常进行。",
                primaryBtnText: "我知道了"
            }))
        }).
        catch(function(e) {})
    },
    e.yaoyiyaoClickLuckDraw = function(t) {
        var a = window.hasShowedYiyClickBtn ? 0 : 1e4;
        e.yiyClickTimer && clearTimeout(e.yiyClickTimer),
        t = $.extend({
            time: 0,
            clickCallback: null,
            parentEl: "#resule-status-lotsBox",
            clickEl: "#resule-status-lotsBox",
            isLuckDrawGame: !1
        },
        t),
        (g_config.$$hasLuckShakePage && 3 == g_config.shakeModel || t.isLuckDrawGame) && (e.yiyClickTimer = setTimeout(function() {
            window.drawStatusLuckDraw && (window.hasShowedYiyClickBtn || (window.hasShowedYiyClickBtn = !0, e.showMsgToast3({
                msg: "若摇一摇无法抽奖，可点击屏幕进行抽奖",
                duration: 3e3,
                round: !0,
                msgBoxSty: "height: 0.6rem; line-height: 0.6rem; top: 0.5rem; bottom: auto; z-index: 1000;",
                msgBoxClass: "yaoyiyao-luckDraw-tip",
                parentEl: t.parentEl
            })), $(t.clickEl).off("touchstart").on("touchstart",
            function() {
                t.clickCallback && t.clickCallback()
            }))
        },
        a))
    },
    e.watch("game._setting.hideRank", g_config.hideRank,
    function(t, a) {
        if (g_config.$$isHasRank) if (_manage && parent.Edit && parent.Edit.showTabByStyle(!1), 69 == g_config.style) {
            t && ($("#mbtp_InnerRank").hide(), _manage || $("#bottomTab #rankTab").hide().addClass("hide").siblings().eq(0).click()),
            _manage && (t ? $("#bottomTab #rankTab").hide().addClass("hide").siblings().eq(0).click() : $("#bottomTab #rankTab").show().removeClass("hide").click());
            var i = $("#bottomTab .bottomItem:visible").length;
            $("#bottomTab .bottomItem").css("width", 100 / i + "%")
        } else if (g_config.$$needNewVersion) $("#rankWrap").toggle(!t);
        else {
            if ($("#ranBtn").toggle(!t), $("#seeRank_show_rankText").parent().toggle(!t).siblings().toggleClass("fullWidth", t), $(".myTwo .myRank").toggle(!t).parent().toggleClass("toOneBtn", t), t != a && e.initChangePoup(), t) _manage && $(".poupTitleBox").children(".poupTitleMune").not("hide").eq(0).trigger("click");
            else if (_manage) parent.$(".topBar .column").each(function() {
                if ("排行榜" == $(this).find(".name").text()) return $(this).trigger("click", "formTabSetting"),
                !1
            }),
            $("#ranBtn").click()
        }
    }),
    e.watch.add(["game._setting.isToStorePay", "game._setting.isBeforeFullGPay"],
    function(e, t) {
        g_config.$$hasToStorePay && _manage && (g_config.isPTGame ? (parent.$("#paymentGamelimit").toggle(!e[1] && !e[0]), e[1] != t[1] && e[1] && (parent.game._setting.isToStorePay = !1)) : parent.$("#paymentGamelimit").toggle(!e[0]), e[0] != t[0] && ((e[0] || e[1]) && (parent.game.$$needSwitchLinkInfoTab = !1), parent.game._setting.isdelivery = !e[0], parent.game._setting.isgetself = e[0], e[0] != t[0] && 0 == e[0] && (parent.game._setting.isgetself = !0, parent.game._setting.isdelivery = !1)))
    }),
    e.countDownTime = function(t) {
        var a = null,
        i = {
            day: "0",
            hour: "0",
            minute: "0",
            second: "0"
        },
        n = {
            day: "天",
            hour: "小时",
            minute: "分钟",
            second: "秒"
        },
        o = "";
        function s() {
            t = $.extend({
                endTime: 0,
                interval: 1e3,
                console: !1,
                mergeTo: "",
                fillZero: !0
            },
            t);
            var s = this,
            r = -1,
            g = 0,
            c = e.getServerTime(),
            d = t.endTime - c,
            l = function() {
                r++;
                var e = Date.now() - (c + r * t.interval);
                e > 5e3 && (g = ~~ (e / t.interval), r += g, d -= g * t.interval);
                var n = t.interval - e;
                n = n < 0 ? 0 : n,
                d -= t.interval,
                t.console && console.log("前后秒数误差值：" + e + "ms, settimeout下一秒时间：" + n + "ms, 距离倒计时结束还有：" + d + "ms"),
                f(),
                d > 0 ? (a = setTimeout(l, n), s.fireWith("change", s, [i, o])) : (clearTimeout(a), s.fireWith("end", s, [i, o]))
            },
            f = function() {
                if (! (d < 0)) {
                    var e = 0,
                    a = 0,
                    s = 0,
                    r = Math.floor(d / 36e5 / 24),
                    g = Math.floor(d / 36e5) % 24,
                    c = Math.floor(d / 6e4) % 60,
                    l = Math.floor(d / 1e3) % 60;
                    switch (t.mergeTo) {
                    case "hh":
                        e = u(r);
                        break;
                    case "mm":
                        a = u(r, g);
                        break;
                    case "ss":
                        s = u(r, g, c)
                    }
                    i.day = /hh|mm|ss/.test(t.mergeTo) ? "": r + "",
                    i.hour = /mm|ss/.test(t.mergeTo) ? "": t.fillZero && String(g + e).length < 2 ? "0" + (g + e) : g + e + "",
                    i.minute = /ss/.test(t.mergeTo) ? "": t.fillZero && String(c + a).length < 2 ? "0" + (c + a) : c + a + "",
                    i.second = t.fillZero && String(l + s).length < 2 ? "0" + (l + s) : l + s + "",
                    o = "",
                    $.each(i,
                    function(e, t) { ("second" == e || t > 0 || o) && (o += t + n[e])
                    })
                }
            },
            u = function(e, t, a) {
                switch (arguments.length) {
                case 1:
                    return 24 * e;
                case 2:
                    return 24 * e * 60 + 60 * t;
                case 3:
                    return 3600 * (24 * e + t) + 60 * a
                }
            };
            e.initCallBack(this, ["change", "end", "stop"]),
            a = setTimeout(l, 0)
        }
        return s.prototype.stop = function() {
            clearTimeout(a),
            this.fireWith("stop", this, [i, o])
        },
        new s
    },
    e.awardPay = function(t) {
        function a() {
            if (g_config.fromFlyerIframe) return g_config.test ? e.showMsgToast2({
                bodyMsg: "预览状态下不支持支付功能，请用微信扫码进行体验"
            }) : e.showMsgToast2({
                bodyMsg: "即将跳转去互动活动进行支付，跳转后将无法返回微传单",
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
            e.showLoadToast("数据加载中"),
            $.ajax({
                url: g_config.apiAjaxUrl + "order/addAwardCodeOrder",
                data: {
                    gameId: g_config.gameId,
                    openId: g_config.openId,
                    enCode: t.enCode
                },
                dataType: "json"
            }).then(function(a) {
                a.success ? e.invokePay(a.data, t) : 163 == a.rt ? (e.showMsg("兑奖券已过期，遗憾错失本次福利"), e.hideLoadToast()) : 214 == a.rt ? (e.showMsg("兑奖券已失效，遗憾错失本次福利"), e.hideLoadToast()) : (e.showMsg(a.msg || "系统繁忙，请稍后重试！"), e.hideLoadToast())
            }).fail(function(t) {
                alert("支付异常"),
                e.tlog("addOrderErr", t)
            })
        }
        g_config.isOem || t.isUseless || [3, 4].indexOf(t.codeStatus) > -1 ? a() : e.showMsgToast4({
            headImgSty: 0,
            name: "payTip",
            hasHeadCloseIcon: !0,
            confirmText: "前往支付",
            msg: '<div class="title">尊敬的活动参与者：</div><div class="content">请您在支付前先详细阅读并同意《用户购买须知》再继续进行支付。</div><div class="buyNotice"><span class="tickBox select"></span>购买前需同意<span class="text">《用户购买须知》</span></div>',
            layoutFn: function(t) {
                t.on("click", ".buyNotice .tickBox",
                function() {
                    $(this).toggleClass("select"),
                    t.find(".confirmBtn").toggleClass("disabled")
                }),
                t.on("click", ".buyNotice .text",
                function() {
                    e.showMsgToast4({
                        name: "buyNotice",
                        confirmText: "我已阅读并同意",
                        hasFootCloseIcon: !0,
                        msg: '<div class="content"><div class="bold">致 广大活动参与者：</div><div class="rowSpacing indent">我司广州华可科技有限公司作为本活动提供方的技术服务方，特此发出如下购买须知：</div><div class="rowSpacing indent">1.您所参与的活动并非我司发布，您应当明确您所参与的活动发布方主体，并遵守发布方的活动规则。</div><div class="rowSpacing indent">2.我司仅为活动发布方提供技术支持，含支付功能支持。</div><div class="rowSpacing indent">3.若出现活动发布方向您索取个人信息、财物的，您应当谨慎处理，以防个人信息泄露或造成财产损失。</div><div class="rowSpacing indent">4.您参与活动后，任何支付行为均非我司要求的支付，而是活动发布方根据活动所设置，您所支付的款项直接由活动发布方收取，我司不会以任何理由向您索取任何财物。</div><div class="rowSpacing indent">5.您需要进行活动兑奖或根据活动规则获取商品及其他物品时，请联系活动发布方处理，我司不负责向您兑奖或提供任何商品或其他物品。</div><div class="rowSpacing indent">6.我司作为网络服务提供者，会对活动发布方进行基本的审查，但鉴于我司并非为有权、专业的机关，客观上无法完全确认活动发布方所发布的活动是否存在误导、欺骗等等违法行为，因此您应当核实您所参与的活动的真实性与合法性。</div><div class="rowSpacing indent">7.您与活动发布方发生的任何纠纷，应当自行与活动发布方解决，与我司无关，但我司可根据情况进行协调处理。若您在参与活动过程中遭受损害的，一切责任由活动发布方承担，我司不承担任何责任，但您可及时通过我司投诉反馈窗口（网址：http://www.fkw.com/complaints.jsp）按照系统要求填写信息、上传文件向我司投诉、举报，我司经核实后会立即关闭活动或断开活动链接，防止您的损失进一步扩大。</div><div class="bold rowSpacing indent" style="color: #535353;">勾选确认选择接受本须知，即表示您愿意接受本须知的内容。您应在接受前认真阅读本须知，如果您对本须知的内容有疑问或者不同意本须知的任一条款，请不要进行后续操作。</div><div class="rowSpacing indent">特此声明！</div><div class="rowSpacing textRight">技术提供方：广州华可科技有限公司</div></div>'
                    })
                })
            },
            confirmFn: a
        })
    },
    e.invokePay = function(t, a) {
        var i = ["aid=" + g_config.aid, "style=" + g_config.style, "gameId=" + g_config.gameId, "orderId=" + (t.wares ? JSON.parse(t.wares)[0] : t.wareid), "test=" + g_config.test, "createTime=" + t.createTime, "awardInfo=" + JSON.stringify(a), "afterPay=true", "redirectURI=" + e.encodeUrl(document.URL)];
        g_config.partnerAppid && g_config.partnerOpenid && (i.push("partnerAppid=" + g_config.partnerAppid), i.push("openId=" + g_config.partnerOpenid));
        var n = "",
        o = "invokePayment.jsp",
        s = !1; (g_config.playerOrigin && 6 === g_config.playerOrigin || _fromCardBag && m_debug) && (s = !0, o = "invokePayment.html");
        var r = "./invokePayment.jsp?" + i.join("&");
        if ((g = document.URL).match("(?:http[s]?://)?.*?/[\\d]+/.*?/") && (r = (n = (n = g.match("(?:.*?[/]{2})?.*?/")[0]).substr(0, n.length - 1)) + "/" + o + "?" + i.join("&")), s && (r = r.replace("invokePayment.jsp", "invokePayment.html")), e.hideLoadToast(), g_config.test) {
            var g; (g = document.URL).match("/hd/") && (n += "/hd");
            var c = "orcy75n1F3Axq0MDvCRykOSrdLXM";
            return null != t.mch_billno && 0 === t.mch_billno.indexOf("149") && (c = "ovTDB09I2ZNYSFh30YrUctZ6XHHw"),
            void $.ajax({
                url: n + "/api/order/getPrepayId?" + $.param({
                    cmd: "getPrepayId",
                    aid: g_config.aid,
                    gameid: g_config.gameId,
                    orderId: t.wares ? JSON.parse(t.wares)[0] : t.wareid,
                    faiPayOpenId: "o5m5G1uOb7JzXHS2MO_cHzdhtl18",
                    openId: c
                }),
                type: "post",
                success: function(e) {
                    if ((e = $.parseJSON(e)).success && e.args) {
                        if (e.args.package && "" === e.args.package.replace("prepay_id=", "")) return void alert("系统繁忙，请稍后重试");
                        var a = n + "/hdtest.jsp?payOrder=true&gameId=" + g_config.gameId + "&orderId=" + (t.wares ? JSON.parse(t.wares)[0] : t.wareid);
                        window.open(a)
                    } else if (81 == e.rt) {
                        var i = e.msg || "提交订单成功！但活动未发布，无法支付";
                        alert(i)
                    } else 93 == e.rt ? alert("订单创建失败") : 116 == e.rt ? utils.invokePaySuccess("支付成功") : alert(e.msg || "系统繁忙，请稍后重试")
                }
            })
        }
        window.location.replace(r)
    },
    e.reckonGameCostTime = function(e) {
        _manage || new(window[decodeBase64("RnVuY3Rpb24=")])(decodeBase64("dHlwZQ=="), decodeBase64($(decodeBase64("I3JlY2tvbkdhbWVDb3N0VGltZUNvZGVJbWc="))[decodeBase64("YXR0cg==")](decodeBase64("X3NyYw=="))[decodeBase64("cmVwbGFjZQ==")](decodeBase64("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFg="), "")))(e)
    },
    e.insertWxOpenLaunchWeapp = function(t) {
        var a = {
            flag: "",
            type: 1,
            btnName: "",
            insertOuter: !1,
            insertEle: $(""),
            pageKey: 1
        };
        if (t = $.extend(a, t), e.UA.compareWxVer("7.0.12")) {
            t.insertEle.attr("data-minapp", !0).hide();
            var i = "",
            n = "",
            o = (m_debug ? "http:": "https:") + _resRoot;
            if (1 == t.type) i = "margin:0.92rem 0;width: 16rem;height: 2.46rem;line-height: 2.46rem;background: rgba(212,54,92,1);-webkit-box-shadow: 0rem 0.075rem 0.35rem 0rem rgba(212,54,92,0.4);box-shadow: 0rem 0.075rem 0.35rem 0rem rgba(212,54,92,0.4);border-radius: 1.97rem;border: transparent;font-size: 1.23rem;text-align: center;color:#fff;";
            else if (2 == t.type) i = "position: relative;width: 23rem;height: 3.5rem;line-height: 3.5rem;color: #000000;padding-left: 1.11rem;background-color: #fff;font-size: 1.11rem;}.btn{height: 3.5rem;line-height: 3.5rem;display: inline-block;}.icon{float:right;position: relative;display: inline-block;}." + t.id + ':before{content: "";background-image: url(' + o + '/image/splitLine2.png?v=201912301606);background-size: 100% 100%;width: 100%;height: 0.5rem;position: absolute;top: 0;left: 0;}.icon:after{content: " ";display: inline-block;height: 0.37rem;width: 0.37rem;border-width: 0.13rem 0.13rem 0 0;border-color: #C8C8CD;border-style: solid;-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);position: absolute;top:-1.85rem;right:0.9rem;';
            else if (3 == t.type) if (t.insertEle.hasClass("btnBoxB")) {
                var s = t.insertEle.parent(".attentionBoxB").css("backgroundColor"),
                r = "";
                g_config.showSkillSup || (r = "float: inherit; margin: 0 auto;"),
                i = "margin: 0;width: " + 7.5 * g_rem + "px;height: " + 1.5 * g_rem + "px;line-height: " + 1.5 * g_rem + "px;background: #fff;-webkit-box-shadow: none;box-shadow: none;border-radius: 32px;border: none;font-size: " + .65 * g_rem + "px;text-align: center;color :" + s + ";" + r
            } else i = "margin:15px 0;width: 260px;height: 40px;line-height: 40px;background: linear-gradient(0deg,rgba(218,160,84,1),rgba(248,196,128,1));-webkit-box-shadow: 0rem 0.075rem 0.35rem 0rem rgba(212,54,92,0.4);box-shadow: 0rem 0.075rem 0.35rem 0rem rgba(212,54,92,0.4);border-radius: 32px;border: transparent;font-size: 16px;text-align: center;color:#fff;";
            else 4 == t.type ? (i = "height: 100%;text-align: center;color: #666;overflow: hidden;font-size:13px;}.btn{white-space: nowrap;width: 3.8rem;}.icon{margin:0 auto;width: 1.55rem;height: 1.55rem;background-size: 100% 100%;background-image: url(" + o + "/image/mbtp_new/linkIcon.png?v=202009031424);", n = "margin-left:0.6rem;") : 5 == t.type ? i = "width: " + 10.25 * g_rem + "px;height: " + 3.775 * g_rem + "px;margin: 0 auto " + .55 * g_rem + "px;background: url(http:" + _resRoot + "/image/preview/playerBg.png?v=202102221013) no-repeat center center;background-size: cover;position: relative;}.btn{font-size: " + .6 * g_rem + "px;font-weight: 500;color: #474747;position: absolute;top: " + 1.12 * g_rem + "px;left: " + .675 * g_rem + "px;}.desc{font-size: " + .675 * g_rem + "px;font-weight: bold;color: #474747;position: absolute;top: " + 1.75 * g_rem + "px;left: " + .675 * g_rem + "px;": 6 == t.type ? i = "display:inline-block;width: " + 10 * g_rem + "px;height: " + 1.5 * g_rem + "px;border-radius: " + .75 * g_rem + "px;background-image: url(" + g_config.$$pageAdInfo[t.pageKey].btnImg + ");background-size: 100% 100%;}": 7 == t.type && (i = "padding: " + .15 * g_rem + "px " + 3.675 * g_rem + "px " + .175 * g_rem + "px;line-height: " + 1.5 * g_rem + "px;border-radius: " + .75 * g_rem + "px;position:relative;top:" + (4 === t.pageKey ? .01 : 1 === t.pageKey ? -.2 : -.1) * g_rem + "px;margin-right: " + .5 * g_rem + "px;background-image: url(" + g_config.$$pageAdInfo[t.pageKey].btnImg + ");background-size: 100% 100%;}");
            if ($("._" + t.id).remove(), t.insertOuter) {
                var g = $('<wx-open-launch-weapp class="_' + t.id + '" style="display:none;' + n + '" username="' + t.mpAppId + '" path="' + t.mpPagePath + '"><script type="text/wxtag-template"><style>.' + t.id + " {" + i + "}</style>" + (4 == t.type ? '<div class="icon"></div>': "") + (~ [6, 7].indexOf(t.type) ? '<a class="moreActive ' + t.id + '" href="javascript:;"></a>': '<div class="' + t.id + '"><div class="btn">' + e.encodeHtml(t.btnName) + "</div></div>") + (2 == t.type ? '<div class="icon"></div>': "") + (5 == t.type ? '<div class="desc">想要参与更多抽奖活动</div>': "") + "<\/script></wx-open-launch-weapp>");
                t.insertEle.after(g)
            } else {
                var c = $("._" + t.id);
                g = $('<script type="text/wxtag-template"><style>.' + t.id + " {" + i + '}</style><div class="' + t.id + '">' + e.encodeHtml(t.btnName) + "</div><\/script>");
                c.append(g)
            }
        } else t.insertEle.removeClass("hide")
    },
    e.FdpTrack = function(e, t, a, i, n) {
        try {
            Fdp.track(e, t, a || g_config.aid, i, n || g_config.openId)
        } catch(e) {
            console.warn(e)
        }
    },
    e.checkInWebView = function() {
        return $.Deferred(function(t) {
            if (void 0 !== e.$$isInWebView) return t.resolve(e.$$isInWebView);
            "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ? wx.miniProgram.getEnv(function(a) {
                e.$$isInWebView = a.miniprogram,
                a.miniprogram ? t.resolve(!0) : t.resolve(!1)
            }) : t.resolve(!1)
        })
    },
    e.getPosterQrCodeUrl = function(t) {
        var a = !0,
        i = ~ [69, 121].indexOf(g_config.style),
        n = g_config.qrCodeUrl,
        o = _manage ? i ? parent.game._setting.cusPosterData: parent.game._setting._zhuliGameCreateImageShare: i ? g_config.cusPosterData: g_config._zhuliGameCreateImageShare;
        if (!_manage && !g_config.hasAuthorized && g_config.isServiceAccount && g_config.isIdentify || $.each(o,
        function(e, t) {
            "wxCreateImageSharePublicQrCode" === t.key && (a = !t[i ? "isOpen": "selected"])
        }), !a) {
            var s = i ? "url": "siteUrl",
            r = e.getUrlValByKey(t, s);
            n = g_config.apiAjaxUrl + "QRCode/zlQrCode?url=" + r
        }
        return a ? t: n
    },
    e.numList = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五"],
    _manage || g_config.isOem || e.FdpTrack("hd_game_visit_test", {
        hd_free_text_1: e.isVisitorA() ? "a": "b"
    }),
    !_manage && !g_config.isOem && g_config.createTime > 16038504e5 && -1 != $.inArray(g_config.style, [75, 111, 113, 115, 117, 119]) && e.FdpTrack("hd_game_expo", {
        hd_modid: g_config.modId,
        hd_ta: g_config._ta,
        hd_free_text_1: e.isVisitorA() ? "a": "b"
    }),
    g_config.fromFlyerIframe && $("#bottomCusBtnInfo").on("touchend",
    function() {
        if (g_config.wxAward.genewxcard) {
            if (0 == g_config.status) return void e.statusMsg("活动尚未发布", "无法加入到微信卡券");
            e.showMsgToast2({
                bodyMsg: "即将跳转去互动活动" + (g_config.award.depositTime && g_config.award.depositTime < Date.now() ? "打开": "领取") + "微信卡券，跳转后将无法返回微传单",
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
            })
        }
    }),
    e.getMinappCodeInfo = function(t, a) {
        return $.Deferred(function(i) {
            g_config.$$partnerInfo && 3 == g_config.$$partnerInfo.activeShowType ? e.getPartnerMinappCodeInfo(t, a).then(function(e) {
                i.resolve(e)
            }) : i.resolve()
        })
    },
    e.initPageCard = function() {
        var e = g_config.$$needNewVersion,
        t = function(e) {
            var t = hg.edit.getCrrCss("pageStyleColor")[0].css[0];
            return hg.edit.HextoRgb(e ? t.defVal: t.val)
        },
        a = function(e) {
            var t = $("#awardDetailBox.isAngular");
            t.css("backgroundColor", e),
            t.find("#awardCollectionBtn").css("background", hg.edit.getRgba(e, .1)),
            t.find("#bottomCusBtnBox .cusBtn").css({
                background: e,
                boxShadow: "0rem 0.075rem 0.35rem 0rem " + hg.edit.getRgba(e, .4)
            }),
            t.find(".awardDetailStyleColor").css({
                color: e
            })
        },
        i = function(e, t) {
            var a = (t = t || $("body")).find("#rankBox");
            a.find(".pageStyleColor").css("color", e),
            a.find("#rankList ul li.mySelf .myRank, #rankList .outOf100 .mySelf .myRank").css("background", e),
            a.find("#rankList ul li.mySelf, #rankList .outOf100 .mySelf").css({
                background: hg.edit.getRgba(e, 2 == g_config.poupInfoType ? 1 : .06),
                borderColor: hg.edit.getRgba(e, 2 == g_config.poupInfoType ? 1 : .2)
            })
        },
        n = function(e) {
            var t = $("#poupInfoBox");
            t.find(".bgSpan").css("backgroundColor", hg.edit.getRgba(e, .08)),
            t.find(".codeInfoBox .noPartnersBox .codeStatusName").css("backgroundColor", hg.edit.getRgba(e, .04)),
            t.find(".slideBarTip").css({
                background: e,
                boxShadow: "0px 0.05rem 0.225rem 0px " + hg.edit.getRgba(e, .4)
            }),
            t.find("#ruleBox .pageStyleColor").css("color", e)
        },
        o = function(e, t) {
            var a = (t = t || $("body")).find("#regAwardMain");
            a.find(".pageStyleColor").css("color", e),
            a.find(".bgSpan").css("backgroundColor", hg.edit.getRgba(e, .08))
        };
        e ? hg.on("setPageStyleColor",
        function(e, t, n) {
            var s = "awardDetailStyleColor" == e ? "awardDetailStyleColor": "pageStyleColor";
            hg.edit.getCrrCss(s) && (t = t || hg.edit.HextoRgb(hg.edit.getCrrCss(s)[0].css[0].val), "awardDetailStyleColor" != e ? "rankList" != e ? "regAwardMain" != e ? (i(t), $(".newVersionCard_myGiftBox .leftBox, .newVersionCard_myRedBox .leftBox, #awardLine .pageStyleColor").css("color", t), 111 != g_config.style ? $(".newVersionCard .getDetailBtn").css({
                backgroundColor: t,
                color: "#ffffff",
                "line-height": "1.15rem"
            }) : $(".newVersionCard .getDetailBtn").css({
                border: "1px solid " + t,
                color: t
            }), $(".newVersionCard .bgSpan, .newVersionCard .newVersionCard_myGiftBox, .newVersionCard .newVersionCard_myRedBox").css("backgroundColor", hg.edit.getRgba(t, .08))) : o(t, n) : i(t, n) : a(t))
        }).on("setAwardExplainColor",
        function(e) {
            _manage && !_preview && parent.Edit.Css.setColor($(e ? "#gameExplainBox .awardItemBox.pageStyleColor": "#gameExplainBox .awardItemBox .pageStyleColor"), hg.edit.getCrrCss("pageStyleColor")[0].css[0])
        }) : hg.on("setPageStyleColor",
        function(e, s) {
            s = s || t(),
            0 == hg.edit.getCrrCss("pageStyleColor")[0].opt && (s = 2 == g_config.poupInfoType ? "rgb(255, 150, 45)": t(!0)),
            "rankList" != e ? "regAwardMain" != e ? (n(s), i(s), a(s)) : o(s) : i(s)
        }).on("setAwardExplainColor",
        function() {
            if (!e) {
                var a = hg.edit.HextoRgb(t());
                $(g_config.$$showCustomExplain ? "#selfAwardExplainBox .awardItemBox.pageStyleColor": "#newAwardExplainBox .awardItemBox .pageStyleColor").css("color", a)
            }
        }).on("setPoupInfoType",
        function(e) {
            var a = 0 == hg.edit.getCrrCss("pageStyleColor")[0].opt,
            n = {
                defVal: t(!0),
                from: ".pageStyleColor",
                name: "color",
                opt: 1,
                title: "页面配色",
                type: "color",
                val: t()
            };
            a && (n.opt = 0, n.defVal = 2 == e ? "rgb(255, 150, 45)": n.defVal),
            n.defVal = hg.edit.HextoRgb(n.defVal),
            n.val = hg.edit.HextoRgb(n.val),
            parent.Edit.Css.setColor($("#poupInfoBox .pageStyleColor"), n, a),
            i(a ? n.defVal: n.val)
        }),
        e && !g_config.isOem || ($(".attentionBox .menuBtnBox").addClass("editTarget-menuBtnBox"), hg.edit.initEdit("menuBtnBox")),
        setTimeout(function() {
            e && LongPageCard.load(),
            hg.fire("setPageStyleColor", "", t())
        },
        400);
        t = function(e) {
            var t = hg.edit.getCrrCss("pageStyleColor")[0].css[0];
            return hg.edit.HextoRgb(e ? t.defVal: t.val)
        }
    },
    e.limitMaxText = function(e, t) {
        return e.length > t ? e.slice(0, t) + "...": e
    },
    e.handleMoreActive = function(t) {
        var a = g_config.$$pageAdInfo[t];
        if (!_manage && !g_config.isOem && g_config.showSkillSup && a.isOpen && g_config.$$canOpenCSkill) {
            e.adClick(t, !0);
            var i = function() {
                e.checkInWebView().then(function(t) {
                    var i = ~ [19165477, 9867096].indexOf(g_config.aid);
                    t ? wx.miniProgram.reLaunch({
                        url: "/pages/moreActive/moreActive?adSlotId=" + a.adSlotId + (i ? "&debug=true": "") + "&domian=" + e.encodeUrl(a.minAppDomian)
                    }) : (e.ajaxLoad.show(), setTimeout(function() {
                        e.ajaxLoad.hide(),
                        i && alert("给测试陈大神看的跳转链接----------" + a.jumpH5Url),
                        window.location.href = a.jumpH5Url
                    },
                    800))
                })
            };
            4 === t && e.FdpTrack("hd_game_ad_wdjp_click"),
            a.isJumpABTest && !e.isVisitorA() || a.isJumpPopup ? (e.FdpTrack("hd_game_ad_confirm_popup", {
                hd_free_text_0: a.name
            }), e.showNewMsgToast({
                msg: "即将离开当前活动",
                mustShowRightTopCloseBtn: !0,
                confirmFn: function() {
                    e.FdpTrack("hd_game_ad_confirm_click", {
                        hd_free_text_0: a.name,
                        hd_free_text_1: "我知道了"
                    }),
                    i()
                },
                closeFn: function() {
                    e.FdpTrack("hd_game_ad_confirm_click", {
                        hd_free_text_0: a.name,
                        hd_free_text_1: "关闭"
                    })
                }
            })) : i()
        }
    },
    e.gamePageExposure = function(t, a, i) {
        _manage || g_config.isOem || e.checkInWebView().then(function(n) {
            var o = "jumptoMinappBtn_moreActive_" + t;
            if (a && 5 !== t && g_config.$$pageAdInfo[t].isATestToQb && e.isVisitorA() && !n && 0 === $("._" + o).length) {
                e.insertWxOpenLaunchWeapp({
                    id: o,
                    type: 7,
                    insertOuter: !0,
                    insertEle: i,
                    mpAppId: "gh_911891f93b38",
                    mpPagePath: "/pages/findAct/findAct?fromH5Ad=true",
                    pageKey: t
                });
                var s = $("._" + o);
                s.length > 0 && (s.show(), s.off("click").on("click",
                function() {
                    e.adClick(t, !0)
                }))
            }
            var r = n ? "webview": "H5",
            g = g_config.$$pageAdInfo[t].name;
            e.FdpTrack("hd_game_popup", {
                hd_free_bool_1: !g_config.showSkillSup,
                hd_free_text_1: g,
                hd_app_terminal: r
            }),
            g_config.showSkillSup && (e.FdpTrack("hd_game_ad_c_popup_test", {
                hd_free_text_1: g,
                hd_free_text_2: "b端广告位",
                hd_free_text_3: e.isVisitorA() ? "a": "b",
                hd_app_terminal: r
            }), a && e.FdpTrack("hd_game_ad_c_popup_test", {
                hd_free_text_1: g,
                hd_free_text_2: "c端广告位",
                hd_free_text_3: e.isVisitorA() ? "a": "b",
                hd_app_terminal: r
            }))
        })
    },
    e.adClick = function(t, a) {
        _manage || g_config.isOem || e.checkInWebView().then(function(i) {
            var n = {
                hd_free_text_1: g_config.$$pageAdInfo[t].name,
                hd_free_text_2: a ? "更多活动": "免费创建",
                hd_app_terminal: i ? "webview": "H5"
            }; - 1 === [12, 13, 14, 15, 16, 17].indexOf(t) && (n.hd_free_bool_1 = !e.UA.compareWxVer("7.0.12"), n.hd_free_text_3 = e.isVisitorA() ? "a": "b"),
            e.FdpTrack("hd_game_ad_c_click_test", n)
        })
    },
    e.getCloneAttentionBox = function(e, t) {
        var a = e.find(".hasMoreActiveBtn"),
        i = e.find(".noMoreActiveBtn"),
        n = e.find(".hasMoreActiveBtn .moreActive"),
        o = g_config.$$pageAdInfo[11],
        s = o.positionType;
        return e.find(".moreActive, .theSpecialTarget").data("pagekey", 11),
        o.isOpen && 3 !== g_config.newGameType && 3 !== s ? a.length > 0 && (o.btnIsImg ? n.css("backgroundImage", "url(" + o.btnImg + ")") : (n.css("backgroundImage", ""), n.addClass("theRunningAdClass moreActiveNotImg").html(o.btnText + "<span class='gotoFlag'><i></i></span>"), !t && a.find(".moreActive").addClass("moreActiveNotImgWhite")), 1 === s ? (0 === a.find(".theSpecialTarget").length && (a.append(i.find(".theSpecialTarget")), a.find(".theSpecialTarget").addClass("theRunningAdClass theRunningAdClassClone")), 0 === a.find(".theSpecialTarget .gotoFlag").length && a.find(".theSpecialTarget").append('<span class="gotoFlag"><i></i></span>')) : a.find(".theSpecialTarget").length > 0 && a.find(".theSpecialTarget").remove(), n.toggleClass("hasMarginRight", 1 === s), i.length > 0 && i.remove(), a.show()) : a.length > 0 && a.remove(),
        e
    },
    e.updateGroupMemberJoin = function(t) {
        e.getWxGroupMemberJoinFlag().then(function(a) { ! _manage && a && "" !== g_config.openGId && e.Res.loadg("groupMemberJoinFunc").then(function() {
                GroupMemberJoin.updateGroupMemberJoin(t)
            })
        })
    },
    e.checkOpenGroupMemberJoin = function() {
        return $.Deferred(function(t) {
            e.getWxGroupMemberJoinFlag().then(function(a) {
                a && "" === g_config.openGId ? e.checkInWebView().then(function(a) {
                    var i = "";
                    i = a ? "参与失败，您当前不在指定的可参与群聊内": "当前活动已开启仅群成员可参与功能，请从小程序中打开活动",
                    e.showNewMsgToast({
                        msg: i
                    }),
                    t.reject()
                }) : t.resolve()
            })
        })
    },
    $(".hostLine.poupLine .hostName").on("touchend",
    function() {
        d(2),
        t && !_manage && $buryPoint.homePageInfo(3)
    }),
    $("#skillLine .skillCont .skillName").on("touchend",
    function() {
        d(3),
        t && !_manage && $buryPoint.homePageInfo(4)
    }),
    $(".ruleImg #ruleImg").on("click",
    function() { ! _manage && $buryPoint.homePageInfo(6)
    }),
    e.insertAdsenseCEnd = function(e, t) {
        var a = g_config.$$pageAdInfo[t];
        if (g_config.isOem || !g_config.showSkillSup || !g_config.$$canOpenCSkill || !a.isOpen) return e;
        var i = "";
        return i = a.btnIsImg || a.isBanner ? '<div class="attentionBox"><div class="hdskillInfo hasMoreActiveBtn"><a class="theRunningAdClass moreActive singleBtn" style="background-image:url(' + (a.isBanner ? a.bannerImg: a.btnImg) + ') " href="javascript:;" data-pagekey="' + t + '"></a></div><div class="holdBox"></div></div>': '<div class="attentionBox"><div class="hdskillInfo hasMoreActiveBtn"><a class="theRunningAdClass moreActive moreActiveNotImg" href="javascript:;" data-pagekey="' + t + '">' + a.btnText + '<span class="gotoFlag"><i></i></span></a></div><div class="holdBox"></div></div>',
        e.append(i),
        a.isBanner && setTimeout(function() {
            $(".theRunningAdClass").addClass("hdAdBannerClass"),
            $(".attentionBox").addClass("attentionBoxForBanner"),
            $(".attentionBoxForBanner .holdBox").css("display", "none")
        }),
        e
    },
    e.adsenseCEndExposure = function(t) {
        _manage || g_config.isOem || e.checkInWebView().then(function(a) {
            var i = a ? "webview": "H5",
            n = g_config.$$pageAdInfo[t],
            o = n.name;
            e.FdpTrack("hd_game_popup", {
                hd_free_bool_1: !g_config.showSkillSup,
                hd_free_text_1: o,
                hd_app_terminal: i
            }),
            g_config.showSkillSup && n.isOpen && g_config.$$canOpenCSkill && e.FdpTrack("hd_game_ad_c_popup_test", {
                hd_free_text_1: o,
                hd_free_text_2: "c端广告位",
                hd_app_terminal: i
            })
        })
    },
    e.getWxGroupMemberJoinFlag = function() {
        return $.Deferred(function(e) {
            $.ajax({
                type: "get",
                url: g_config.apiAjaxUrl + "game/isForbidGameShare",
                success: function(t) {
                    t.success ? e.resolve(t.data.isOpenWxGroupChatMemberJoin) : e.resolve(!1)
                },
                error: function() {
                    e.resolve(!1)
                }
            })
        })
    },
    e.parseURL(document.URL).params.fromFlyerIframe && e.FdpTrack("hd_game_cdiframe_load_suc", {})
} (HdGame);
var PlayInfo = function() {
    var e = 0,
    t = 0,
    a = 5,
    i = 10,
    n = !1,
    o = {
        show: !1
    };
    function s() {
        var t = a - e,
        i = r();
        return t > i && (t = i),
        t < 0 && (t = 0),
        t
    }
    function r() {
        if (!n) return 100;
        var e = i - t;
        return e > 0 ? e: 0
    }
    function g() {
        $(".todayPlayCount").text(s()),
        $(".totalPlayCount").text(r()),
        $(".playTimesLimit").text(a),
        n ? ($(".dayPlayHint").hide(), $(".totalPlayHint").show(), $(".dayPlayHint4Total").show()) : ($(".dayPlayHint").show(), $(".totalPlayHint").hide(), $(".dayPlayHint4Total").hide(), $(".playTotalFont").hide())
    }
    return {
        isLimitPlay: o,
        initData: function(s, r, c, d, l, f) {
            e = s,
            t = r,
            a = c,
            d,
            i = l,
            n = f,
            o.show = f,
            g()
        },
        getTodayRemainTimes: s,
        getTotalRemainTimes: r,
        addPlayTimes: function(a) {
            e += a,
            t += a,
            g()
        },
        addPlayTimesLimit: function(e) {
            a += e,
            i += e,
            g()
        },
        setPlayTimesLimit: function(e) {
            a = e,
            g()
        },
        setPlayTimesLimitShow: function(e) {
            e,
            g()
        },
        setPlayTotalLimit: function(e) {
            i = e,
            g()
        },
        setLimitPlay: function(e) {
            n = e,
            o.show = e,
            g()
        }
    }
} ();


