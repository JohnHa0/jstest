var first=parseInt(prompt("xx","584"))+parseInt(Math.random()*30);

//http://100001741918.teachers.n.weimob.com/api3/teachers/h5/rankList
function rank(){
	var i = new AjaxPost();
	var y = copydata(window.owndata);
        i.sendScore(window.url + "rankList", y,
        function(z) {
            if (z.code.errcode == "0") {
				//alert(z.data.totalRank[0].bestScore)
               first=z.data.totalRank[0].bestScore
            } else {
               
            }
        });

}
setInterval(rank,500)
//first=589
//--杨洋 133  一头狮子  138
var cyh = cyh || {};
$(document).ready(function() {
    window.url = "/api3/teachers/h5/";
    var i = new AjaxPost();
    var l;
    var e;
    var n;
    var c = false;
    var u = copydata(window.owndata);
    var g = "";
    i.sendScore(window.url + "index", u,
    function(x) {
        $(".loading2").hide();
        $(".daddy").show();
        if (x.code.errcode == "0") {
            l = x.data;
            r();
            addshareHandle(window.sharelink, x.data.activitySharePhoto, x.data.activityShareTitle, x.data.activityShareContent);
            $(".index .bg").attr("src", x.data.backgroundImg);
            if (x.data.backgroundMusicOn == 1) {
                if (cyh.data == undefined) {
                    cyh.data = {}
                }
                cyh.data.musicSrc = x.data.backgroundMusic
            }
        } else {
            if (x.code.errcode == "86101003340") {
                adNonePlay()
            } else {
                $(".daddy").hide();
                $(".error").show()
            }
        }
    });
    function r() {
        $(".btn_rule").on("click", m);
        $(".btn_phb").on("click", a);
        $(".btn_prize").on("click", j);
        $(".btn_start").on("click", q)
    }
    function q() {
        if (!l.ifStart) {
            showTC($(".nostart"));
            $(".nostart .says").html("活动暂未开始哦");
            return
        } else {
            if (l.gameover) {
                showTC($(".nostart"));
                $(".nostart .says").html("活动已经结束了");
                return
            } else {
                if (l.joinOptions != null && l.joinOptions.length != 0) {
                    w(l.joinOptions, 0,
                    function() {
                        rprm.rec({
                            pagename: "huod_home",
                            elementid: "start",
                            eventtype: "tap",
                            content: g
                        });
                        g = "";
                        h()
                    })
                } else {
                    h();
                    rprm.rec({
                        pagename: "huod_home",
                        elementid: "start",
                        eventtype: "tap"
                    })
                }
            }
        }
    }
    function h(A, x) {
        var z = copydata(window.owndata);
        if (A == undefined) {
            var y = Game.properties.manifest;
            o(y)
        }
        $(".loading2").show();
        i.sendScore(window.url + "intoGame", z,
        function(C) {
            if (C.code.errcode == "0") {
                if (C.data.follow == 1) {
                    location.href = scanlink
                }
                if (C.data.gameover) {
                    $(".over").hide();
                    showTC($(".nostart"),
                    function() {
                        location.href = window.sharelink + "?ran=" + Math.random()
                    });
                    $(".nostart .says").html("活动已经结束了");
                    return
                }
                if (A == undefined) {
                    var B = new ltt_load();
                    n = C.data.gameTime;
                    if (!C.data.gameLimit) {
                        $(".loading2").show();
                        B.ltts([y], [images_game],
                        function() {},
                        function() {
                            $(".loading2").hide();
                            f()
                        })
                    } else {
                        $(".over").hide();
                        alertss("您的参与次数已经用完啦~",
                        function() {
                            location.href = window.sharelink + "?ran=" + Math.random()
                        })
                    }
                } else {
                    f(A);
                    if (x != undefined) {
                        x()
                    }
                }
            } else {
                if (C.code.errcode == "86101003312") {
                    alertss("您还不是会员哦",
                    function() {
                        rprm.rec({
                            pagename: "huo_joinvip",
                            elementid: "sign",
                            eventtype: "tap"
                        });
                        location.href = C.exp.url
                    },
                    "注册会员");
                    return
                }
                if (x != undefined) {
                    $(".over").hide();
                    alertss(C.code.errmsg,
                    function() {
                        $(".over").show()
                    })
                } else {
                    alertss(C.code.errmsg)
                }
            }
        })
    }
    function o(d) {
        for (var x = 0; x < d.length; x++) {
            d[x].src = window.staticPic + d[x].src
        }
    }
    function f(aa) {
        if (c) {
            return
        }
        c = true;
        $("body").scrollTop(0);
        $(".index").hide();
        $(".canvass").show();
        $(".canvass .tou img").attr("src", l.photo);
        $(".canvass .name").html(l.nick);
        $(document).scrollTop(0);
        var ad = copydata(window.owndata);
        var P = 0;
        var R = "";
        var Z = R.split("");
        var H = 0;
        var S = 0;
        var B;
        var C;
        var M = new Date();
        var z = document.getElementById("game");
        var W = new createjs.Stage(z);
        z.height = 1287;
        createjs.Touch.enable(W);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", W);
        W.removeAllChildren();
        var L = new Game.main();
        var N = n * 60;
        var X = 10;
        var y = N;
        var D = L.times.mc;
        var J = new createjs.Shape();
        J.graphics.beginFill("#ff0000").drawRect(0, 0, 320, 46);
        J.x = D.x;
        J.y = D.y;
        D.mask = J;
        W.looking = false;
        W.looking2 = false;
        W.waiting = false;
        var Q = L.btn_sleep;
        var Y = L.teacher;
        var ae = L.boss_coming;
        var d = L.boss;
        var U = L.child;
        var T;
        var K;
        var af = 0;
        var A = new Audio();
        var O = false;
        var V = 2;
        A.src = window.staticPic + "/audio/play.mp3";
        W.addChild(L);
        if (aa == undefined) {
            $(".tishi .con").css({
                width: $(window).width() - 2,
                height: $(window).height() - 2
            });
            showTC($(".tishi"),
            function() {
                M = new Date();
                $("body").scrollTop(0);
                G();
                $(".canvass .score").html("得分：" + (P));
                Q.addEventListener("click", I);
                Q.addEventListener("mousedown", ab);
                W.addEventListener("stagemouseup", E);
                B = setInterval(F, 1000 / 60);
                C = setInterval(ac, 1000)
		setInterval(function(){//----
					if (!W.looking && !W.looking2) {
						 if(P<first+parseInt(Math.random()*20))
							I()
					}
				},20);//------------
            })
        } else {
            M = new Date();
            $("body").scrollTop(0);
            G();
            $(".canvass .score").html("得分：" + (P));
            Q.addEventListener("click", I);
            Q.addEventListener("mousedown", ab);
            W.addEventListener("stagemouseup", E);
            B = setInterval(F, 1000 / 60);
            C = setInterval(ac, 1000)
        }
        function ac() {
            var ai = new Date();
            var ah = ai.getTime() - M.getTime();
            var ag = ah * 60 / 1000;
            N = parseInt(y - ag)
        }
        function ab() {
            Q.gotoAndStop(1)
        }
        function E() {
            Q.gotoAndStop(0)
        }
        function G() {
            T = parseInt(Math.random() * 60) + 2 * 60;
            K = parseInt(Math.random() * 5 * 60) + 10 * 60
        }
        function F() {
            if (N < 1) {
                N = 1
            }
            N--;
            var ah = N / y;
            J.scaleX = ah;
            T--;
            K--;
            if (T == 0 && !W.waiting) {
                W.waiting = true;
                T = parseInt(Math.random() * 30) + 30
            } else {
                if (T == 0 && W.waiting && !W.looking) {
                    if (parseInt(Math.random() * 10) > V) {
                        W.looking = true;
                        Y.gotoAndPlay("good");
                        T = parseInt(Math.random() * 30) + 30
                    } else {
                        V = -1;
                        W.waiting = false;
                        W.looking = false;
                        Y.gotoAndPlay(0);
                        U.gotoAndStop(0);
                        T = parseInt(Math.random() * 60) + 2 * 60
                    }
                } else {
                    if (T == 0 && W.looking) {
                        if (V == -1) {
                            V = 2
                        }
                        W.waiting = false;
                        U.gotoAndStop(0);
                        W.looking = false;
                        Y.gotoAndPlay(0);
                        T = parseInt(Math.random() * 60) + 2 * 60
                    }
                }
            }
            if (K == 0 && !W.looking2) {
                d.gotoAndPlay(1);
                K = parseInt(Math.random() * 5 * 60) + 12 * 60
            } else {
                if (K == 60 && !W.looking2) {
                    ae.gotoAndPlay(1)
                }
            }
            if (!W.looking && !W.looking2) {
                if (X <= 0) {
                    R += "0";
                    X = 10;
                    S = 0
                } else {
                    X--
                }
            }
            if (N <= 0) {
                O = true;
                x();
                var ag = new Audio();
                ag.src = window.staticPic + "/audio/win.mp3";
                ag.play()
            }
        }
        function I() {
		if (W.looking || W.looking2) { //--
				alert('ccc')
				return;//---
			
			}
            if (O) {
                return
            }
            var ag;
            X = 10;
            if (W.looking || W.looking2) {
                ag = 0;
                Y.gotoAndPlay("shenqi");
                U.gotoAndStop(1);
                x();
                var ah = new Audio();
                ah.src = window.staticPic + "/audio/lose.mp3";
                ah.play();
                O = true;
                return
            } else {
                R += "1";
                ag = 1;
                af = 0;
                U.gotoAndPlay(2)
            }
            if (ag == 0) {
                S = 0
            } else {
                S++;
                if (S % 10 == 0) {
                    if (S > 10) {
                        H += 20
                    } else {
                        H += 10
                    }
                } else {
                    H++
                }
            }
            P = (H - 0);
            $(".canvass .score").html("得分：" + (P));
            A.play();
            A.currentTime = 0
	     if(P<first+parseInt(Math.random()*20)){//-------------+parseInt(Math.random()*20)
				//alert("dd")
			//setTimeout(onClickHandle,20)
				}else{
					 /*af = 0;
					 Y.gotoAndPlay("shenqi");
					U.gotoAndStop(1);
					x();
					
					O = true;*/
                return
				}
        }
        function x() {
            Q.removeEventListener("click", I);
            clearInterval(B);
            clearInterval(C);
            Q.removeEventListener("mousedown", ab);
            W.removeEventListener("stagemouseup", E);
            if (P == 0 && H == 0) {
                P = 0
            }
            ad.datetime = "" + ad.pid + H + ad.activityId;
            ad.datetime = s(ad.datetime);
            ad.score = P;
            ad.ps = R;
            b(ad, P)
        }
    }
    function s(d) {
        d = d.replace(/1/g, "a");
        d = d.replace(/0/g, "c");
        d = d.replace(/9/g, "u");
        d = d.replace(/8/g, "g");
        d = d.replace(/5/g, "p");
        d = d.replace(/7/g, "l");
        d = d.replace(/3/g, "k");
        return d
    }
    function b(d, x) {
        i.sendScore(window.url + "saveScore", d,
        function(y) {
            if (y.code.errcode == 0) {
                c = false;
                k(y, x);
                addshareHandle(window.sharelink, y.data.sharePhoto, y.data.shareTitle, y.data.shareSummary)
            } else {
                alertss(y.code.errmsg,
                function() {
                    b(d, x)
                })
            }
        })
    }
    function k(d, y) {
        showTC($(".over"));
        $(".over .says").html("你获得了" + (y) + "分<br/>快找你的小伙伴一起PK吧</p>");
        if (d.data.restTime > 0) {
            $(".over .con .btn_right").on("click", x);
            $(".over .times").html("还能参加" + d.data.restTime + "次")
        } else {
            if (d.data.restTime == 0) {
                $(".over .times").hide();
                $(".over .con .btn_right").hide();
                $(".over .con .btn_left").addClass("btn_mini");
                $(".over .con .btn_midd").addClass("btn_mini")
            } else {
                $(".over .times").hide();
                $(".over .con .btn_right").on("click", x);
                $(".over .con .xian .btns").css({
                    marginBottom: "1rem"
                })
            }
        }
        $(".over .con .btn_midd").on("click",
        function() {
            a(1)
        });
        $(".over .con .btn_left").on("click",
        function() {
            location.href = window.sharelink + "?ran=" + Math.random()
        });
        function x() {
            h(true,
            function() {
                $(".over .con .btn_right").off("click", x);
                $(".over .con .btn_midd").off("click");
                $(".over .con .btn_left").off("click");
                $(".over").hide()
            });
            rprm.rec({
                pagename: "huo_result",
                elementid: "again",
                eventtype: "tap"
            })
        }
    }
    function w(G, H, D, E) {
        if (H == 0) {
            var F = l.other
        } else {
            var F = E
        }
        $(".mydata .con ul").html("");
        $(".mydata .input").val("");
        var x = false;
        for (var z = 0; z < G.length; z++) {
            A(G[z])
        }
        console.log("_getPhone", x);
        if (x) {
            cyh.getPhone(function() {
                cyh.loadJsAndCss("#tphone")
            })
        }
        $(".mydata .con .names .tous img").attr("src", l.photo);
        $(".mydata .con .names .name").html(l.nick);
        showTC($(".mydata"),
        function() {
            $(".mydata .btn_sure").off("click", y);
            D()
        });
        function A(I) {
            var J = false;
            if (I == 3) {
                J = true
            }
            if (I == 0) {
                var K = ' <li><div class="yzms"><input type="text" class="input yzm shortInput" name="yzm" placeholder="请填写验证码" /><a href="javascript:;" class="btn_get">获取验证码</a></li>';
                K = $(K);
                var d = false;
                K.find(".btn_get").on("click",
                function() {
                    if (d) {
                        return
                    }
                    d = true;
                    var N = new AjaxPost();
                    var O = copydata(window.owndata);
                    var M = $(".mydata .con ul li .phone");
                    var L = M.parent().find(".tphone").attr("code");
                    var P = M.val();
                    O.phone = L + P;
                    O.openid = l.openId;
                    if ((L == "0086-" && !textTel(P)) || (L != "0086-" && !numberCheck(P))) {
                        C($(".mydata"),
                        function() {
                            alertss("手机格式不正确！",
                            function() {
                                d = false;
                                showTC($(".mydata"))
                            })
                        });
                        return
                    }
                    $(".loading2").show();
                    N.sendScore(window.url + "sendcode", O,
                    function(R) {
                        if (R.code.errcode == "0") {
                            var Q = 60;
                            K.find(".btn_get").html(Q + "s");
                            e = setInterval(function() {
                                Q--;
                                if (Q > 0) {
                                    K.find(".btn_get").html(Q + "s")
                                } else {
                                    K.find(".btn_get").html("获取验证码");
                                    d = false;
                                    clearInterval(e)
                                }
                            },
                            1000)
                        } else {
                            alertss(R.code.errmsg);
                            d = false
                        }
                    })
                })
            } else {
                if (I == 1) {
                    var K = '<li><input type="text" class="input"  name="nick" data-rule-required="true"  placeholder="微信昵称" /></li>'
                } else {
                    if (I == 2) {
                        var K = '<li><input type="text" class="input"  name="realName" data-rule-required="true"  placeholder="真实姓名" /></li>'
                    } else {
                        if (I == 3) {
                            if (cyh.knowPhone != undefined) {
                                var K = '<li><div class="tphone" code="" id="tphone"></div><input type="text" class="input phone phonesp"  name="phone" data-rule-Mobile="true"  placeholder="手机号" /></li>'
                            } else {
                                var K = '<li><div class="tphone" code="0086-" id="tphone">CN +86</div><input type="text" class="input phone phonesp"  name="phone" data-rule-Mobile="true"  placeholder="手机号" /></li>'
                            }
                            x = true;
                            console.log("2", x)
                        } else {
                            if (I == 4) {
                                var K = '<li><input type="text" class="input"  name="email" data-rule-Mail="true"  placeholder="邮箱" /></li>'
                            } else {
                                if (I == 5) {
                                    var K = '<li><input type="text" class="input"  name="wechatid" data-rule-required="true"  placeholder="微信号" /></li>'
                                } else {
                                    if (I == 6) {
                                        var K = '<li><input type="text" class="input"  name="qq" data-rule-num="true"  placeholder="QQ号" /></li>'
                                    } else {
                                        if (I == 7) {
                                            var K = '<li><input type="text" class="input"  name="address" data-rule-required="true"  placeholder="邮寄地址" /></li>'
                                        } else {
                                            if (I == 8) {
                                                var K = '<li><input type="text" class="input"  name="otheroption" data-rule-required="true"  placeholder="' + F + '" /></li>'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            $(".mydata .con ul").append(K)
        }
        $(".mydata .btn_sure").on("click", y);
        function y() {
            var M = selectedInput(".input");
            for (var J = 0; J < M.length; J++) {
                if (M[J].error) {
                    $(".mydata .btn_close").click();
                    if (M[J].required) {
                        C($(".mydata"),
                        function() {
                            alertss("信息未填写完整！", B)
                        });
                        return
                    } else {
                        if (M[J].mobile) {
                            C($(".mydata"),
                            function() {
                                alertss("手机格式有误！", B)
                            });
                            return
                        } else {
                            if (M[J].mail) {
                                C($(".mydata"),
                                function() {
                                    alertss("邮箱格式有误！", B)
                                });
                                return
                            } else {
                                if (M[J].number) {
                                    C($(".mydata"),
                                    function() {
                                        alertss("QQ号为纯数字！", B)
                                    });
                                    return
                                }
                            }
                        }
                    }
                }
            }
            var N = copydata(window.owndata);
            N.type = H;
            getInputData(".input", N);
            $(".loading2").show();
            var K = {
                realName: {
                    cnKey: "真实姓名",
                    enKey: "realname"
                },
                phone: {
                    cnKey: "手机号",
                    enKey: "phone"
                },
                email: {
                    cnKey: "邮箱",
                    enKey: "email"
                },
                wechatid: {
                    cnKey: "微信号",
                    enKey: "wxNo"
                },
                qq: {
                    cnKey: "QQ号",
                    enKey: "qqNo"
                },
                address: {
                    cnKey: "邮寄地址",
                    enKey: "reciveAddress"
                },
                otheroption: {
                    cnKey: "other",
                    enKey: F
                }
            };
            var I = [];
            for (var J in N) {
                if (K[J] != undefined) {
                    var L = {
                        cnKey: K[J].cnKey,
                        enKey: K[J].enKey,
                        value: N[J]
                    };
                    I.push(L)
                }
            }
            g = JSON.stringify(I);
            i.sendScore(window.url + "updateuserinfo", N,
            function(O) {
                if (O.code.errcode == "0") {
                    if (H == 0) {
                        l.joinOptions = null
                    }
                    if (e != null) {
                        clearInterval(e)
                    }
                    if (D != null) {
                        D()
                    }
                } else {
                    alertss(O.code.errmsg, B)
                }
                $(".mydata .btn_sure").off("click", y);
                $(".mydata").hide();
                $(".mydata .btn_close").click()
            })
        }
        function B() {
            showTC($(".mydata"),
            function() {
                $(".mydata .btn_sure").off("click", y)
            });
            $(".mydata .btn_sure").on("click", y)
        }
        function C(I, d) {
            I.hide();
            d()
        }
    }
    function j(y) {
        $(".loading2").show();
        var x = copydata(window.owndata);
        i.sendScore(window.url + "getMyPrizes", x,
        function(z) {
            if (z.code.errcode == "0") {
                v($(".prize_ts"), z.data, y)
            } else {
                alertss(z.code.errmsg)
            }
        })
    }
    function v(H, E, G, z) {
        var I = E;
        rprm.rec({
            pagename: "huod_gifts",
            elementid: "pv",
            eventtype: "view"
        });
        if (G != 1) {
            H.show()
        }
        var D = H.find(".con").height();
        H.find(".con .xian").css({
            height: D - 2.8 * window.size
        });
        if (E.myprizes.length == 0) {
            H.find(".nowins").show();
            H.find(".ds").hide()
        } else {
            H.find(".nowins").hide();
            H.find(".ds").show();
            H.find(".prizes").html("");
            for (var C = 0; C < E.myprizes.length; C++) {
                x(E.myprizes[C])
            }
        }
        H.find(".con .btn_close").on("click",
        function() {
            H.find(".con .btn_close").off("click");
            H.hide()
        });
        function x(K) {
            var J = '<li><div class="ps"><div class="tou"><img src="' + K.prizeImg + '" alt=""></div><div class="names"><p class="name"><span>名称：</span>' + K.prizeName + '</p><p class="sn"><span>' + K.virtualName + "：</span>" + K.sncode + '</p></div></div><p class="says">奖品说明:' + K.description + '</p><div class="btns"><p class="state">状态：未兑奖</p><a href="javascript:;" class="btn_sure btn_dh" >立即兑奖</a><p class="tyz">奖品派发中，请耐心等待哦~</p></div><img src="' + window.staticPic + '/images/line.png" class="le"></li>';
            J = $(J);
            if (K.state == 0 || K.state == 1) {
                J.find(".btn_dh").on("click", B);
                if (K.type == 0 && !K.fastExchange && (I.exchangeOptions == null || I.exchangeOptions == undefined || I.exchangeOptions.length == 0)) {
                    J.find(".btn_dh").hide();
                    J.find(".tyz").show()
                }
            } else {
                J.find(".state").html("状态：已兑奖");
                if (K.link != null && K.link != "") {
                    J.find(".btn_dh").attr("data-link", K.link);
                    J.find(".btn_dh").off("click");
                    J.find(".btn_dh").html("立即使用");
                    J.find(".btn_dh").on("click",
                    function() {
                        rprm.rec({
                            pagename: "huod_gifts",
                            elementid: "use",
                            eventtype: "tap"
                        });
                        hdCoreUtil.href($(this).attr("data-link"))
                    })
                } else {
                    J.find(".btn_dh").hide()
                }
            }
            if (K.virtualName == null || K.virtualName == "" || K.sncode == null || K.sncode == "") {
                J.find(".sn").hide();
                J.find(".names .name").css({
                    lineHeight: "3.6rem"
                })
            }
            H.find(".prizes").html(J)
        }
        function B() {
            var J = $(this).parents("li").index();
            if (I.exchangeOptions == null || I.exchangeOptions == undefined || I.exchangeOptions.length == 0) {
                if (E.myprizes[J].fastExchange == true) {
                    A(false, E.myprizes[J])
                } else {
                    y(E.myprizes[J], null)
                }
            } else {
                var d = I.exchangeOptions.length;
                w(E.exchangeOptions, 1,
                function() {
                    if (E.myprizes[J].fastExchange == true) {
                        A(true, E.myprizes[J])
                    } else {
                        y(E.myprizes[J], undefined, undefined, d)
                    }
                },
                E.other)
            }
        }
        function y(M, K, d, J) {
            if (J != undefined && J != null && J != 0 && M.type == 0) {
                $(".loading2").show();
                j(1);
                return
            }
            $(".loading2").show();
            var L = copydata(window.owndata);
            L.prizeId = M.winnerId;
            L.openId = E.openId;
            L.weimobId = E.weimobId;
            if (M.fastExchange) {
                L.exchangeCode = K
            }
            L.type = M.type;
            i.sendScore(window.url + "exchange", L,
            function(N) {
                if (N.code.errcode == "0") {
                    if (M.fastExchange) {
                        showTC($(".sw_winer"),
                        function() {
                            j(1)
                        })
                    } else {
                        showTC($(".xn_winner"),
                        function() {
                            j(1)
                        });
                        setTimeout(function() {
                            $(".xn_winner").fadeOut();
                            j(1)
                        },
                        2000)
                    }
                } else {
                    if (N.code.errcode == "86101003312") {
                        alertss("您还不是会员哦",
                        function() {
                            rprm.rec({
                                pagename: "huod_cgift",
                                elementid: "sign",
                                eventtype: "tap"
                            });
                            location.href = N.exp.url
                        },
                        "注册会员");
                        return
                    }
                    if (M.fastExchange) {
                        F(d, M)
                    } else {
                        showTC($(".xn_lose"),
                        function() {
                            j()
                        });
                        setTimeout(function() {
                            $(".xn_lose").fadeOut();
                            j(1)
                        },
                        2000)
                    }
                }
                rprm.rec({
                    pagename: "huod_use",
                    elementid: "use",
                    eventtype: "tap",
                    content: g,
                    prizename: M.prizeName
                });
                g = ""
            })
        }
        function A(d, K) {
            showTC($(".mima"));
            $(".mima input").val("");
            $(".mima .con .xian .btns .btn_left").on("click",
            function() {
                $(".mima").hide();
                J();
                if (d) {
                    j(1)
                }
            });
            $(".mima .con .xian .btns .btn_right ").on("click",
            function() {
                var L = $(".mima input").val();
                J();
                $(".mima").hide();
                if (L == "") {
                    F(d, K)
                } else {
                    y(K, L, d)
                }
            });
            function J() {
                $(".mima .con .xian .btns .btn_right ").off("click");
                $(".mima .con .xian .btns .btn_left ").off("click")
            }
        }
        function F(d, K) {
            showTC($(".sw_lose"));
            $(".sw_lose .con .xian .btns .btn_left").on("click",
            function() {
                $(".sw_lose").hide();
                J();
                A(d, K)
            });
            $(".sw_lose .con .xian .btns .btn_right").on("click",
            function() {
                $(".sw_lose").hide();
                J();
                if (d) {
                    j(1)
                }
            });
            function J() {
                $(".sw_lose .con .xian .btns .btn_right ").off("click");
                $(".sw_lose .con .xian .btns .btn_left ").off("click")
            }
        }
    }
    function a(x) {
        $(".loading2").show();
        var y = copydata(window.owndata);
        i.sendScore(window.url + "rankList", y,
        function(z) {
            if (z.code.errcode == "0") {
                p($(".phb"), z.data)
            } else {
                if (x != undefined) {
                    $(".over").hide();
                    alertss(z.code.errmsg,
                    function() {
                        $(".over").show()
                    })
                } else {
                    alertss(z.code.errmsg)
                }
            }
        });
        $(".phb .con .btn_close").on("click",
        function() {
            $(".phb .con .btn_close").off("click");
            $(".phb").hide()
        });
        rprm.rec({
            pagename: "huod_record",
            elementid: "pv",
            eventtype: "view"
        })
    }
    function p(B, D) {
        B.show();
        var z = B.find(".con").height();
        z = z - 1.4 * window.size;
        B.find(".con .xian").css({
            height: z
        });
        if (D.myRank != null) {
            z = z - B.find(".owns").height() - 0.2 * window.size;
            B.find(".con .xian ul").css({
                height: z
            });
            var A = '<div class="num">99</div><div class="tou"><img src=""></div><div class="names"><p class="name texthide"></p><p class="score"></p></div><p class="time"></p>';
            B.find(".own").html(A);
            B.find(".own").show();
            var x = B.find(".own");
            if (D.myRank.rank < 4) {
                x.find(".num").html('<img src="' + window.staticPic + "/images/win_" + D.myRank.rank + '.png">')
            } else {
                x.find(".num").html(D.myRank.rank)
            }
            x.find(".tou img").attr("src", D.myRank.photo);
            x.find(".names .name").html(D.myRank.nick);
            x.find(".names .score").html(D.myRank.bestScore + "分");
            x.find(".time").html(D.myRank.bestTime)
        } else {
            B.find(".own").hide();
            z = z - B.find(".owns").height() - 0.2 * window.size;
            B.find(".con .xian ul").css({
                height: z
            })
        }
        if (D.totalRank != null && D.totalRank.length != 0) {
            B.find("ul").html("");
            for (var y = 0; y < D.totalRank.length; y++) {
                C(D.totalRank[y])
            }
        } else {
            B.find("ul").html("暂时还没有玩家上榜哦~快去参与游戏吧")
        }
        B.find(".con .btn_close").on("click",
        function() {
            B.find(".con .btn_close").off("click");
            B.hide()
        });
        function C(F) {
            var E = '<li><div class="line"><div class="num">99</div><div class="tou"><img src=""></div><div class="names"><p class="name texthide"></p><p class="score"></p></div><p class="time"></p></div></li>';
            E = $(E);
            if (F.rank < 4) {
                E.find(".num").html('<img src="' + window.staticPic + "/images/win_" + F.rank + '.png">')
            } else {
                E.find(".num").html(F.rank)
            }
            E.find(".tou img").attr("src", F.photo);
            E.find(".names .name").html(F.nick);
            E.find(".names .score").html(F.bestScore + "分");
            E.find(".time").html(F.bestTime);
            B.find("ul").append(E)
        }
    }
    function m() {
        $(".loading2").show();
        var x = copydata(window.owndata);
        i.sendScore(window.url + "showRuleAndPRize", x,
        function(y) {
            if (y.code.errcode == "0") {
                t($(".rule"), y.data)
            } else {
                alertss(y.code.errmsg)
            }
        });
        rprm.rec({
            pagename: "huod_instruction",
            elementid: "pv",
            eventtype: "view"
        })
    }
    function t(A, B) {
        A.show();
        var z = A.find(".con").height();
        A.find(".con .xian").css({
            height: z - 2.4 * window.size
        });
        A.find(".times .pps").html(B.startTime + "~" + B.endTime);
        A.find(".says .pps").html(B.activityRule);
        A.find(".prize").html("");
        for (var y = 0; y < B.prizesVOs.length; y++) {
            if (y == 0) {
                x(B.prizesVOs[y], false)
            } else {
                x(B.prizesVOs[y], true)
            }
        }
        function x(E, D) {
            var C = '<li><div class="tou"><img src="' + E.photo + '" alt=""></div><div class="right"><p class="prizename pps"><span>' + E.prizeCategory + "</span>：" + E.prizeName + '</p><p class="pps">奖品说明:' + E.prizeComment + "</p></div></li>";
            C = $(C);
            if (D) {
                C.prepend('<img src="' + window.staticPic + '/images/line.png"  class="line" alt="" />')
            }
            A.find(".prize").append(C)
        }
        A.find(".con .btn_close").on("click",
        function() {
            A.find(".con .btn_close").off("click");
            A.hide()
        })
    }
});
function alertss(e, a, c) {
    var d = $(".alertss");
    if (d == undefined || d == null || d.length == 0) {
        var b = '<div class="tan alertss" ><div class="con" ><div class="xian"><p class="says"></p><a href="javascript:;" class="btn_know btn_sure btn_close">确定</a></div></div></div>';
        b = $(b);
        $("body").append(b)
    }
    d = $(".alertss");
    if (c != undefined) {
        d.find(".btn_close.btn_know").html(c)
    }
    d.find(".says").html(e);
    showTC($(".alertss"), a)
}
function ltt_load() {
    this.ltts = function(l, k, b, c) {
        var g = [];
        for (var f = 0; f < l.length; f++) {
            if (k != null) {
                for (var e = 0; e < l[f].length; e++) {
                    l[f][e].image = k[f]
                }
            }
            g = g.concat(l[f])
        }
        var h = new createjs.LoadQueue(true);
        h.loadManifest(g);
        h.on("fileload", a);
        h.on("complete", d);
        h.on("progress", m);
        function a(i) {
            if (i.item.type == "image" && k != null) {
                i.item.image[i.item.id] = i.result
            }
        }
        function d() {
            if (c != null && c != undefined && c != "") {
                c()
            }
        }
        function m(i) {
            if (b != null && b != undefined && b != "") {
                b(i.progress)
            }
        }
    }
}
function adNonePlay() {
    var a = "<div style='width: 54.3%;margin: 8.57rem auto 0;'><img style='width: 100%;' src='//cdn.weimob.com/h5static/hd_all/images/none.png'></div><p style='font-size: 1.07rem;color: #888888;width: 100%;text-align: center;margin-top: 1.17rem;'>活动已失效</p>";
    $("body").html(a)
};