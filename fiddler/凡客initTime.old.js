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
        var h = [100, 100];
        g_config.countsTimeType ? g_config.sortType && (h[1] = -1) : g_config.scoreType && g_config.sortType || (h[1] = -1);
        var r = {
            val: 0,
            pastTime: 0,
            interval: 140,
            range: h,
            target: null,
            isDesc: !g_config.countsTimeType,
            acceList: null,
            initTime: i,
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
                if (this.range[0] > 0 && i < this.range[0] / 1e3 ? i = this.range[0] / 1e3: this.range[1] > 0 && i > this.range[1] / 1e3 && (i = this.range[1] / 1e3),/*this.val>=3?'': this.val += 0.1,*/ this.val += a * i, this.pastTime = a * (this.val - this.initTime), s = t, this.isDesc) {
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