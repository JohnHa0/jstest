!
function(t) {
    t.initTime = function(i) {
        var s, e = null,
        n = 0;
        function a(t) {
            var i = (Math.round(100 * t) / 100).toString(),
            s = i.indexOf(".");
            for (s < 0 && (s = i.length, i += "."); i.length <= s + 2;) i += "0";
            return i
        }
        var h = [70, 280];
        g_config.countsTimeType ? g_config.sortType && (h[1] = -1) : g_config.scoreType && g_config.sortType || (h[1] = -1);

			
		var tt=i, newNum
		var url;
	if(window.location.host=='11736559-43.hd.faisco.cn')
		url="https://11736559-43.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=11736559&gameId=43&style=38&openId=o1ueSjmdEfTrGibJwEySQ323rONc&start=0&limit=99&playerId=0"
	else if(window.location.host=='12556556-4.hd.faisco.cn')
		url="https://12556556-4.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=12556556&gameId=4&style=38&openId=otxGTwco1jkDKDa_UxhDR2M8cfN8&start=0&limit=99&playerId=0"
	else if(window.location.host=='8806752-37.hd.faisco.cn')
		url='https://8806752-37.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=8806752&gameId=37&style=38&openId=o1ueSjnP_he1dreJaq7njZpc4BGA&start=0&limit=99&playerId=0'
	else if(window.location.host=='11678830-85.hd.faisco.cn')
		url='https://11678830-85.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=11678830&gameId=85&style=8&openId=oeeD_tiyCmIgTIhahRLzCf5vYRFE&start=0&limit=99&playerId=0'
	else if(window.location.host=='14500814-6.hd.faisco.cn')
		url='https://14500814-6.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=14500814&gameId=6&style=38&openId=o1ueSjmamNb5JWk-6KopSl_5djiI&start=0&limit=99&playerId=29'
	else
		url="https://13438675-20.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=13438675&gameId=20&style=28&openId="+$("#_hdOpenIdDiv").html()+"&start=0&limit=99&playerId=0&_openId="+$("#_hdOpenIdDiv").html()
	//alert(url)
	 $.ajax({
												type: "post",
												url: url,
													async:false,
												success: function(r) {
														 var s = $.parseJSON(r);
														 
														var p = s.rankList;
														var t = s.rank;
														//alert(r)
														var first=parseFloat(p[0].achievement)//-----------
														var num=parseInt(30*Math.random())/100
															// newNum =num.toFixed(2);
															//alert(first)
															
																// if(g_config.countsTimeType)
																//	tt=first-0.01
																// else
																	  tt=first-num
												}
			 })
				// var num=parseInt(90*Math.random())/100
				//											 newNum =num.toFixed(2);
				// alert(tt)
				//我的保护神爸爸  上限120
				 var isDesc=false
					 
if(!g_config.scoreType) {tt=1;isDesc=true;}
if(window.location.href.indexOf('zjdsg')>-1) {tt=e;isDesc=false;}

        var r = {
            val: 0,
            pastTime: 0,
            interval: 140,
            range: h,
            target: null,
            isDesc: !g_config.countsTimeType,
            acceList: null,
            initTime: tt,
            status: "ended",
            updateFlag: !0,
            targetFlag: !0,
            gameCostTime: 0,
            frameInc: 0,
            isShowMs: !0,
            setAcceList: function(t) {
                if ("number" == typeof t) {
                    var i = t;
                    t = [];
                    for (var s = 0; s < i; s++) t.push((i - s) * (this.initTime / (i + 1)))
                }
                return this.acceList = t,
                this
            },
            setTarget: function() {
                var t = a(this.val);
                this.targetFlag && this.target.text(this.isShowMs ? t: t.split(".")[0]),
                this.fireWith("setTime", this, [this.isShowMs ? t: t.split(".")[0]])
            },
            init: function(t) {
                if (t && null != t.isShowMs && (this.isShowMs = t.isShowMs), 99999 !== this.initTime) return ! this.target && (this.target = $(".time")),
                this.val = this.initTime,
                this.pastTime = 0,
                this.setTarget(),
                this
            },
            start: function() {
                if (99999 !== this.initTime) return s = (new Date).getTime() / 1e3,
                this.updateFlag && "ended" === this.status ? (this.status = "runing", this.play()) : this.status = "runing",
                this
            },
            isRunning: function() {
                return "runing" === this.status
            },
            pause: function() {
                this.status = "pause"
            },
            end: function() {
                if ("ended" !== this.status) return clearTimeout(e),
                n = 0,
                this.update(),
                this.status = "ended",
                this
            },
            setTime: function() {
                var t = (new Date).getTime() / 1e3,
                i = t - s,
                a = this.isDesc ? -1 : 1;
                if (this.range[0] > 0 && i < this.range[0] / 1e3 ? i = this.range[0] / 1e3: this.range[1] > 0 && i > this.range[1] / 1e3 && (i = this.range[1] / 1e3), this.val += a * i, this.pastTime = a * (this.val - this.initTime), s = t, this.isDesc) {
                    if (this.acceList) for (var h = 0; h < this.acceList.length; h++) if (this.val <= this.acceList[h] && n == h) {
                        n++,
                        this.fireWith("acce", this, [n]);
                        break
                    }
                    if (this.val <= 0) return this.val = 0,
                    this.pastTime = this.initTime,
                    this.setTarget(),
                    clearTimeout(e),
                    n = 0,
                    this.status = "ended",
                    void this.fireWith("end", this)
                }
                this.setTarget()
            },
            update: function() {
                99999 !== this.initTime && ("pause" !== this.status && this.setTime(), this.fireWith("timer", this, ["pause" !== this.status]))
            },
            play: function() {
                this.update(),
                "ended" !== this.status && (e = setTimeout(arguments.callee.bind(this), this.interval))
            },
            updateInFrame: function(t) {
                99999 !== this.initTime && "ended" !== this.status && (t < 0 && (t = 0), this.frameInc += t, this.frameInc >= this.interval && (this.update(), this.frameInc = 0))
            }
        };
        return t.initCallBack(r, ["end", "timer", "acce", "setTime"]),
        r.init(),
        r.changeTwoDecimal_f = a,
        r
    }
} (HdGame);