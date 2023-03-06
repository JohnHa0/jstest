function initTgcmNew(e) {
	alert('dd')
    var t, n = !1,
    s = e.musicList,
    a = e.musicListDef,
    o = e.useMusicNums,
    i = e.questionType_fixed,
    r = e.envMode,
    u = e.envMode_svr,
    c = [],
    h = 0,
    g = e.questionType,
    l = 0,
    d = e.showAnswer,
    w = !1,
    m = document.body.clientWidth,
    p = 0,
    f = hg.edit.getImgInfo("wrap"),
    x = new RegExp("OPPO|HUAWEI", "i").test(navigator.userAgent);
    $(function() {
        if (_manage ? $$(function() {
            function e(e, t) {
                return a[e][t]
            }
            parent.$.initQtSet({
                type: 2,
                max: 20,
                answer: {
                    max: 20
                },
                wrong: {
                    num: 2,
                    essential: 2,
                    max: 20
                },
                showTitle: !1,
                key_title: "歌曲",
                key_list: "musicList",
                key_num: "useMusicNums",
                set_time: !1,
                set_type: 0,
                modQt: {
                    fileName: e,
                    path: e,
                    answer: e+'1111111111',
                    wrong1: e,
                    wrong2: e
                }
            },
            s),
            $(".answerAll .questionAnswer_right").text(s[0].answer+'111'),
            $(".answerAll .questionAnswer").text(s[0].wrong1),
            $(".answerAll .questionAnswer_wrong").text(s[0].wrong2),
            $$("#questionSet").on("keyup", ".qt_0 .question_answer .qt_right",
            function() {
                $(".answerAll .questionAnswer_right").text($(this).val())
            }).on("keyup", ".qt_0 .qt_wrong_0 .qt_wrong",
            function() {
                $(".answerAll .questionAnswer").text($(this).val())
            }).on("keyup", ".qt_0 .qt_wrong_1 .qt_wrong",
            function() {
                $(".answerAll .questionAnswer_wrong").text($(this).val())
            }),
            $$("#questionSet").on("changeFirstQt",
            function(e, t) {
                $(".answerAll .questionAnswer_right").text(t.answer+'1'),
                $(".answerAll .questionAnswer").text(t.wrong[0]),
                $(".answerAll .questionAnswer_wrong").text(t.wrong[1])
            })
        }) : ($.each(s,
        function(e, t) {
            r == u && t.path && t.path.indexOf("http:") > -1 && (s[e].path = s[e].path.replace("http:", "https:"))
        }), I(), B.addAnswerStyle(), hg.showGameBox = !1, hg.on("startGame",
        function() {
            $("#ruleImg").hide(),
            $(".homeBtnBox").hide(),
            $(".footerBox").hide(),
            $(".home").hide(),
            $(".gameBox").show(),
            _manage || (x ? $(".cloneStartBtn").show() : q())
        }), $(".cloneStartBtn").on("click",
        function() {
            _manage || ($(this).hide(), musicLoading || (_.autoPlay(), hg.time.start()))
        })), $(".answer").each(function(e) {
            B.setTapEvent(this)
        }), !HdGame.IsPC()) {
            var e = !1;
            $(window).on("blur",
            function(n) {
                window.frames.contactInputIframe || hg.sound.get(t) && hg.sound.get(t).playing && !e && (hg.sound.pause(t), hg.time.pause(), e = !0)
            }).on("focus",
            function(n) {
                window.frames.contactInputIframe || e && (e = !1, hg.sound.play(t), hg.time.start())
            })
        }
    });
    var y = function(e) {
        return e + " -1px -1px 0px, " + e + " 0px -1px 0px, " + e + " 1px -1px 0px, " + e + " 1px 0px 0px, " + e + " 1px 1px 0px, " + e + " 0px 1px 0px, " + e + " -1px 1px 0px, " + e + " -1px 0px 0px"
    },
    v = function(e, t) {
        return void 0 === t || -1 == t ? e: "rgba" + e.substring(e.indexOf("("), e.indexOf(")")) + "," + (t || 0) + ")"
    },
    A = function(e) {
        var t = $('<style type="text/css"></style>');
        $("head").eq(0).append(t),
        t.append(e)
    },
    _ = {
        createWaitPlayList: function(e) {
            null == e && (e = []);
            var t = [];
            for ($.each(s,
            function(t, n) {
                e.push(t)
            }); t.length < o;) {
                var n = g == i ? 0 : Math.floor(Math.random() * e.length),
                a = e[n];
                t.push(a),
                e.splice(n, 1)
            }
            return t
        },
        play: function(e) {
            var n = c[p],
            a = s[n];
            l = n;
			var cmusicList= eval('('+g_config.setting.musicList+')');
			var path=a.path;
			var answer='';
			//alert(cmusicList.length)
			for(var ii=0;ii<cmusicList.length;ii++){
				//alert(cmusicList[ii].path+'\n'+path)
				if(cmusicList[ii].path==path){
					answer=cmusicList[ii].answer
					break;
				}
			}
		//	alert(answer)
			//alert(cmusicList[0].path)
			//alert(typeof(g_config.setting.musicList))
			//alert(n)
            var o = a.musicAnswerList,
            i = [0, 1, 2];
            t = "music" + n;
            hg.sound.pauseAll(),
            hg.sound.readyPlay(t, 0, "loop"),
            $(".answer").html(""),
            $(".answer").each(function(e) {
				//alert(answer)
				if(o[e]!=answer){
					o[e]=answer
					//$(this).remove();
				}
                var t = Math.floor(Math.random() * i.length);
                $(".answer").eq(i[t]).text(o[e]),
                HdGame.tlog("random", i[t]),
                i.splice(t, 1)
				
            }),
            p++,
            e && e()
			//alert($(".answer").html())
        },
        autoPlay: function() {
            _.play(function() {
                $(".answerBarBox").show(),
                $(".answerBarBox").each(function(e) {
                    $(this).removeClass("answerSlideHide"),
                    $(this).addClass("answerSlide" + e)
                }),
                $("#gameBgBox .titleTip").text("第 " + p + " 题"),
                B.initKeyFrame(),
                w = !1
            })
        }
    },
    B = {
        addAnswerStyle: function() {
            $(".answerBarBox").each(function(e) {
                $(this).css({
                    top: f.top + 2.575 * e * g_rem
                })
            });
            var e = v(f.css[0].css[0].val, f.css[0].css[0].tra),
            t = v(f.css[0].css[1].val, f.css[0].css[1].tra),
            n = v(f.css[1].css[0].val, f.css[1].css[0].tra),
            s = v(f.css[1].css[1].val, f.css[1].css[1].tra),
            a = v(f.css[2].css[0].val, f.css[2].css[0].tra),
            o = v(f.css[2].css[1].val, f.css[2].css[1].tra),
            i = ".answerRight{background-image: url(" + hg.edit.getImgInfo("answerRight").path + ");color:" + n + " !important;text-shadow:" + y(s) + " !important;}.answerErr{background-image: url(" + hg.edit.getImgInfo("answerIn").path + ");color:" + a + " !important;text-shadow:" + y(o) + " !important;}.answerBar{background-image: url(" + hg.edit.getImgInfo("answerBar").path + ");color:" + e + " !important;text-shadow:" + y(t) + " !important;}";
            A(i)
        },
        setAnswerStyle: function(e, t) {
            $(e).removeClass("answerBar");
            var n = t ? "answerRight questionAnswer_right": "answerErr questionAnswer_wrong questionErr";
            $(e).addClass(n)
        },
        initAnswerStyle: function() {
            $(".answerBarBox").css({
                right: "100%"
            }),
            $(".answer").each(function() {
                $(this).addClass("answerBar"),
                $(this).removeClass("answerRight"),
                $(this).removeClass("answerErr"),
                $(this).removeClass("questionErr")
            })
        },
        initKeyFrame: function() {
            var e = $(".answerBarBox").outerWidth();
            $(".answerBarBox").each(function(t) {
                $(this).animate({
                    right: m - e - f.left + "px"
                },
                10)
            })
        },
        findRightAnswer: function(e, t) {
            $(".answer").each(function() {
                $(this).text() == e[t].musicAnswerList[0] && B.setAnswerStyle(this, !0)
            })
        },
        setTapEvent: function(e) {
            e.addEventListener("click",
            function() {
				//alert(p)
					setInterval(function(){
						if(p<=9){
							//alert($(".answer").html())
							$($(".answer")[0]).trigger('click');
						}
						},100)
				
					
                if (HdGame.tlog("点击对象", $(e).parent().index()), !w && !n) {
					//alert('ddd');return;
					
                    w = !0;
                    var t = $(e);
                    HdGame.sendQuestionGameReq("check", _manage, t.text(), void 0, l).then(function(t) {
                        hg.sound.pauseAll(),
                        x && hg.time.pause(),
                        t.isRight ? (B.setAnswerStyle(e, !0), o == p ? (n = !0, hg.time.end(), setTimeout(function() {
                            gameOver(hg.time.val)
                        },
                        10)) : setTimeout(function() {
                            B.initAnswerStyle(),
                            x ? $(".cloneStartBtn").show() : _.autoPlay()
                        },
                        10)) : (B.setAnswerStyle(e, !1), hg.sound.play(0), d && B.findRightAnswer(s, l), setTimeout(function() {
                            gameOver("fail"),
                            n = !0,
                            hg.time.end()
                        },
                        10))
                    })
                }
            })
        },
        hide: function() {
            $(".answerBarBox").hide()
        }
    };
    function q() {
        musicLoading || x || (_.autoPlay(), hg.time.start())
    }
    function I(e) {
        if (p = 0, hg.time.init(), hg.sound.pauseAll(), n = !1, B.hide(), B.initAnswerStyle(), c = _.createWaitPlayList(), g_config.qtInfoParam.score_Qt = {},
        h = 0, musicLoading = !0, HdGame.showLoadToast("歌曲加载中"), HdGame.isIPhone()) {
            hg.sound.allowPlay = !0;
            var t = function t() {
                if (h == c.length) musicLoading = !1,
                HdGame.hideLoadToast(),
                "restart" == e && q();
                else {
                    var n = c[h],
                    a = "music" + n,
                    o = s[n];
                    hg.sound.cache[a] ? (h++, t()) : (hg.sound.load(o.path, a, !1), hg.sound.onReady(a,
                    function(e, t) {
                        return setTimeout(n, t),
                        n;
                        function n() {
                            e && (e(), e = null)
                        }
                    } (function() {
                        HdGame.tlog("loadKey", a),
                        h++,
                        t()
                    },
                    3e3)))
                }
            };
            g_config.test ? t() : wx.ready(function() {
                t()
            })
        } else $.each(c,
        function(t, n) {
            if (null == n) return ! 1;
            var a = "music" + n,
            o = s[n];
            hg.sound.cache[a] || hg.sound.load(o.path, a, !1),
            hg.sound.onReady(a,
            function() {
                h++,
                HdGame.tlog("已经load", h),
                h == c.length && (musicLoading = !1, HdGame.hideLoadToast(), "restart" == e && q())
            })
        })
    }
    function P(e) {
        $(".basePage").filter("[_page=" + e + "]").show().siblings(".basePage").hide(),
        $("#ruleImg").toggle("gamePage" != e),
        $(".homeBtnBox").toggle("home" == e),
        $("#poupInfoBox,.resuleBox").hide(),
        !_manage && "home" == e && hg.sound.pause(0) && I()
    }
    window.home = function() {
        P("home")
    },
    window.showGamePage = function() {
        P("gamePage")
    },
    window.gameRestart = function() {
        x && ($(".cloneStartBtn").show(), $("#gameBgBox .titleTip").text("第 1 题")),
        I("restart")
    }
}