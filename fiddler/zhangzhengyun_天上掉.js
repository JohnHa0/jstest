webpackJsonp([1], {
    "4GQV": function(t, e, a) {
        "use strict";
        e.__esModule = !0,
        e.parseTimeData = function(t) {
            var e = Math.floor(t / s),
            a = Math.floor(t % s / r),
            i = Math.floor(t % r / o),
            d = Math.floor(t % o / n),
            c = Math.floor(t % n);
            return {
                days: e,
                hours: a,
                minutes: i,
                seconds: d,
                milliseconds: c
            }
        },
        e.parseFormat = function(t, e) {
            var a = e.days,
            n = e.hours,
            o = e.minutes,
            r = e.seconds,
            s = e.milliseconds; - 1 === t.indexOf("DD") ? n += 24 * a: t = t.replace("DD", (0, i.padZero)(a)); - 1 === t.indexOf("HH") ? o += 60 * n: t = t.replace("HH", (0, i.padZero)(n)); - 1 === t.indexOf("mm") ? r += 60 * o: t = t.replace("mm", (0, i.padZero)(o)); - 1 === t.indexOf("ss") ? s += 1e3 * r: t = t.replace("ss", (0, i.padZero)(r));
            if ( - 1 !== t.indexOf("S")) {
                var d = (0, i.padZero)(s, 3);
                t = -1 !== t.indexOf("SSS") ? t.replace("SSS", d) : -1 !== t.indexOf("SS") ? t.replace("SS", d.slice(0, 2)) : t.replace("S", d.charAt(0))
            }
            return t
        },
        e.isSameSecond = function(t, e) {
            return Math.floor(t / 1e3) === Math.floor(e / 1e3)
        };
        var i = a("tNtU"),
        n = 1e3,
        o = 60 * n,
        r = 60 * o,
        s = 24 * r
    },
    Cdx3: function(t, e, a) {
        var i = a("sB3e"),
        n = a("lktj");
        a("uqUo")("keys",
        function() {
            return function(t) {
                return n(i(t))
            }
        })
    },
    DJbO: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, n = a("fZjL"),
        o = a.n(n),
        r = a("Dd8w"),
        s = a.n(r),
        d = a("bOdI"),
        c = a.n(d),
        h = (a("tLo2"), a("blRl")),
        u = a.n(h),
        l = (a("MHRi"), a("6xqC")),
        m = a.n(l),
        g = (a("jydU"), a("WQwN")),
        f = a.n(g),
        p = (a("GKy3"), a("4vvA")),
        w = a.n(p),
        v = (a("K7fX"), a("G7a8")),
        b = a.n(v),
        y = (a("FDxC"), a("w+oK")),
        S = a.n(y),
        x = a("FPWn"),
        D = a("NYxO"),
        M = {
            components: (i = {},
            c()(i, S.a.name, S.a), c()(i, b.a.name, b.a), c()(i, w.a.name, w.a), c()(i, f.a.name, f.a), c()(i, m.a.name, m.a), c()(i, u.a.name, u.a), c()(i, "sprite", x.a), i),
            filters: {},
            watch: {},
            inject: ["actmusic"],
            data: function() {
                return {
                    columns: {},
                    puzzleData: [],
                    copygame: null
                }
            },
            computed: s()({},
            Object(D.c)(["gamePageData", "hdid", "openid", "gameData", "gameStarId", "routerorder"]), {
                noGuide: function() {
                    return JSON.parse(localStorage.getItem("rou"))[0].isShow
                }
            }),
            methods: s()({},
            Object(D.b)(["pageJumpEvent", "changeBagStatus", "changeMusicStatus", "$uStore"]), {
                auto: function(t) {
                    return 2 * t
                },
                gamePlay: function() {
                    var t = this,
                    e = t.puzzleData,
                    a = 750 / window.innerWidth * window.innerHeight,
                    i = new Phaser.Game(750, a, Phaser.CANVAS, "game"),
                    n = [],
                    r = {
                        preload: function() {
                            this.preload = function() {
                                i.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL,
                                console.log("preload"),
                                i.stage.backgroundColor = "#000000",
                                i.load.crossOrigin = "anonymous",
                                i.load.image("bg", e.backgroundImg),
                                i.load.image("dude", e.playImg),
                                i.load.image("tips", e.tipsImg);
                                for (var t = 0; t < e.list.length; t++) i.load.image("apple" + t, e.list[t].imgs[0]),
                                i.load.image("addScore" + t, e.list[t].imgs[1]),
                                n.push({
                                    apple: "apple" + t,
                                    scoreImg: "addScore" + t,
                                    score: e.list[t].score,
                                    type: e.list[t].type
                                });
                                console.log(n),
                                i.load.audio("scoreMusic", "../../static/music/addscore.mp3"),
                                i.load.audio("bombMusic", "../../static/music/boom.mp3"),
                                i.load.onFileComplete.add(function(t) {}),
                                i.load.onLoadComplete.add(function() {
                                    i.state.start("created")
                                })
                            }
                        },
                        created: function() {
                            this.create = function() {
                                var t = i.add.sprite(0, 0, "tips");
                                t.width = i.world.width,
                                t.height = i.world.width / i.cache.getImage("tips").width * i.cache.getImage("tips").height,
                                t.inputEnabled = !0,
                                t.input.useHandCursor = !0,
                                t.events.onInputDown.add(function() {
                                    i.state.start("play")
                                },
                                this)
                            }
                        },
                        play: function() {
                            var a, o, r, s, d, c, h, u;
                            function l(t, e) {
                                var a = i.add.image(e.x, e.y, e.scoreImg),
                                n = i.cache.getImage(e.scoreImg);
                                a.width = e.width,
                                a.height = a.width / (n.width / n.height),
                                a.alpha = 0,
                                i.add.tween(a).to({
                                    alpha: 1,
                                    y: a.y - 20
                                },
                                100, Phaser.Easing.Linear.None, !0, 0, 0, !1).onComplete.add(function() {
                                    i.add.tween(a).to({
                                        alpha: 0,
                                        y: a.y - 20
                                    },
                                    100, Phaser.Easing.Linear.None, !0, 200, 0, !1).onComplete.add(function() {
                                        a.kill()
                                    })
                                }),
                                e.kill(),
                                "sub" === e.type ? '': (r = 195, s.text = "得分：" + r, d.play())
                            }
                            this.create = function() {
                                r = 0,
                                h = e.time,
                                i.physics.startSystem(Phaser.Physics.Arcade),
                                i.physics.arcade.gravity.y = 300,
                                d = i.add.audio("scoreMusic"),
                                c = i.add.audio("bombMusic");
                                var l = i.add.image(0, 0, "bg");
                                l.width = i.world.width,
                                l.height = i.world.width / i.cache.getImage("bg").width * i.cache.getImage("bg").height,
                                a = i.add.sprite(i.world.centerX, .75 * i.world.height, "dude");
                                var m = i.cache.getImage("dude");
                                a.width = .2 * i.world.width,
                                a.height = a.width / m.width * m.height,
                                a.anchor.setTo(.5, .5),
                                i.physics.enable(a),
                                a.body.allowGravity = !1,
                                (s = i.add.text(20, 40, "得分：0", {
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    fill: t.gamePageData.textDom.fontColour.value
                                })).anchor.setTo(0, .5),
                                (u = i.add.text(i.world.centerX, 40,
                                function(t) {
                                    var e = Math.floor(t / 60),
                                    a = t - 60 * e;
                                    return f(e) + ":" + f(a)
                                } (h), {
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    fill: t.gamePageData.textDom.fontColour.value
                                })).anchor.setTo(.5, .5);
                                var g = i.time.events.loop(Phaser.Timer.SECOND,
                                function() {
                                    h--;
                                    var t = Math.floor(h / 60),
                                    e = h - 60 * t,
                                    a = f(t) + ":" + f(e);
                                    u.text = a,
                                    0 == h && (i.time.events.remove(g), i.state.start("over", !0, !1, r))
                                },
                                this);
                                function f(t) {
                                    return t < 10 && (t = "0" + t),
                                    t
                                }
                                var p = !1;
                                i.input.onDown.add(function(t) {
                                    Math.abs(t.x - a.x) < a.width / 2 && (p = !0)
                                }),
                                i.input.onUp.add(function() {
                                    p = !1
                                }),
                                i.input.addMoveCallback(function(t, e, n, o) { ! o && p && (e < a.width / 2 && (e = a.width / 2), e > i.world.width - a.width / 2 && (e = i.world.width - a.width / 2), a.x = e)
                                }),
                                o = i.add.group(),
                                console.log(o);
                                var w = i.time.create(!0),
                                v = 1e3;
                                "0x76c06bba91" == t.hdid && (v = 500),
                                w.loop(v,
                                function() {
                                    var t = Math.random() * i.world.width,
                                    a = Math.floor(Math.random() * n.length),
                                    r = i.cache.getImage(n[a].apple),
                                    s = n[a].type,
                                    d = o.create(t, 0, n[a].apple);
                                    d.score = n[a].score,
                                    d.scoreImg = n[a].scoreImg,
                                    d.type = s,
                                    i.physics.enable(d);
                                    var c = i.rnd.between(10 * e.speed[0], 10 * e.speed[1]);
                                    console.log(c),
                                    d.body.velocity.y = c / 10 * 150,
                                    d.width = i.world.width / 8,
                                    d.height = d.width / r.width * r.height,
                                    d.body.collideWorldBounds = !0,
                                    d.body.onWorldBounds = new Phaser.Signal,
                                    d.body.onWorldBounds.add(function(t, e, a, i, n) {
                                        a && t.kill()
                                    })
                                }),
                                w.start()
                            },
                            this.update = function() {
                                i.physics.arcade.overlap(a, o, l, null, this)
                            }
                        },
                        over: function() {
                            var e = 0;
                            this.init = function() {
                                e = arguments[0]
                            },
                            this.create = function() {
                                var a = i.add.image(0, 0, "bg");
                                a.width = i.world.width,
                                a.height = i.world.width / i.cache.getImage("bg").width * i.cache.getImage("bg").height,
                                i.add.text(i.world.centerX, .25 * i.world.height, "游戏结束", {
                                    fontSize: "80px",
                                    fontWeight: "bold",
                                    fill: t.gamePageData.textDom.fontColour.value
                                }).anchor.setTo(.5, .5);
                                var n = "你的得分是：" + e + "分";
                                i.add.text(i.world.centerX, .4 * i.world.height, n, {
                                    fontSize: "60px",
                                    fontWeight: "bold",
                                    fill: t.gamePageData.textDom.fontColour.value
                                }).anchor.setTo(.5, .5),
                                i.add.text(i.world.centerX, .6 * i.world.height, "点击继续", {
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                    fill: t.gamePageData.textDom.fontColour.value
                                }).anchor.setTo(.5, .5),
                                i.input.onTap.add(function() {
                                    t.subEvent(e)
                                })
                            }
                        }
                    };
                    o()(r).map(function(t) {
                        i.state.add(t, r[t])
                    }),
                    i.state.start("preload")
                },
                gameDataInit: function() {
                    var t = this;
                    this.puzzleData = this.gamePageData.otherJson,
                    this.$api.gamestar({
                        hdid: this.hdid,
                        openid: this.openid
                    }).then(function(e) {
                        t.gamePlay(),
                        t.$uStore({
                            name: "gameStarId",
                            value: e.data.id
                        }),
                        t.$uStore({
                            name: "isshowbaberrage",
                            value: !1
                        })
                    }).
                    catch(function(e) {
                        m.a.alert({
                            title: "提示",
                            message: e
                        }).then(function() {
                            t.pageJumpEvent(0)
                        })
                    })
                },
                subEvent: function(t) {
                    var e = this;
                    this.$api.answeradd({
                        hdid: this.hdid,
                        openid: this.openid,
                        columns: {
                            sore: t
                        },
                        id: this.gameStarId
                    }).then(function(t) {
                        t.isluck ? m.a.alert({
                            title: "提示",
                            message: t.msg
                        }).then(function() {
                            e.pageJumpEvent(3)
                        }) : m.a.alert({
                            title: "提示",
                            message: t.msg
                        }).then(function() {
                            if ("0x76c06bba91" != e.hdid) return e.pageJumpEvent(0);
                            m.a.alert({
                                title: "提示",
                                message: "返回首页刷新界面可查看排名"
                            }).then(function() {
                                return e.pageJumpEvent(0)
                            })
                        })
                    }).
                    catch(function(t) {
                        m.a.alert({
                            title: "提示",
                            message: t
                        }).then(function() {
                            e.pageJumpEvent(0)
                        })
                    })
                }
            }),
            created: function() {
                var t = this;
                this.changeBagStatus(!1),
                this.gameData.gameNum <= 0 ? m.a.alert({
                    title: "提示",
                    message: "参与活动次数不足"
                }).then(function() {
                    t.noGuide ? t.pageJumpEvent(0) : t.$wx.closeWindow()
                }) : (this.$uStore({
                    name: "gameData.gameNum",
                    value: this.gameData.gameNum - 1
                }), this.gameDataInit())
            },
            destroyed: function() {
                this.actmusic.pause()
            }
        },
        I = {
            render: function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    staticStyle: {
                        width: "100vw",
                        height: "100vh"
                    },
                    attrs: {
                        id: "game"
                    }
                })
            },
            staticRenderFns: []
        };
        var O = a("VU/8")(M, I, !1,
        function(t) {
            a("OOhG")
        },
        "data-v-1a65073c", null);
        e.
    default = O.exports
    },
    G7a8: function(t, e, a) {
        "use strict";
        e.__esModule = !0,
        e.
    default = void 0;
        var i = a("VxeN"),
        n = a("fcQK"),
        o = a("4GQV"),
        r = (0, i.createNamespace)("count-down"),
        s = r[0],
        d = r[1],
        c = s({
            props: {
                millisecond: Boolean,
                time: {
                    type: [Number, String],
                default:
                    0
                },
                format: {
                    type: String,
                default:
                    "HH:mm:ss"
                },
                autoStart: {
                    type: Boolean,
                default:
                    !0
                }
            },
            data: function() {
                return {
                    remain: 0
                }
            },
            computed: {
                timeData: function() {
                    return (0, o.parseTimeData)(this.remain)
                },
                formattedTime: function() {
                    return (0, o.parseFormat)(this.format, this.timeData)
                }
            },
            watch: {
                time: {
                    immediate: !0,
                    handler: "reset"
                }
            },
            activated: function() {
                this.keepAlivePaused && (this.counting = !0, this.keepAlivePaused = !1, this.tick())
            },
            deactivated: function() {
                this.counting && (this.pause(), this.keepAlivePaused = !0)
            },
            beforeDestroy: function() {
                this.pause()
            },
            methods: {
                start: function() {
                    this.counting || (this.counting = !0, this.endTime = Date.now() + this.remain, this.tick())
                },
                pause: function() {
                    this.counting = !1,
                    (0, n.cancelRaf)(this.rafId)
                },
                reset: function() {
                    this.pause(),
                    this.remain = +this.time,
                    this.autoStart && this.start()
                },
                tick: function() {
                    i.inBrowser && (this.millisecond ? this.microTick() : this.macroTick())
                },
                microTick: function() {
                    var t = this;
                    this.rafId = (0, n.raf)(function() {
                        t.counting && (t.setRemain(t.getRemain()), t.remain > 0 && t.microTick())
                    })
                },
                macroTick: function() {
                    var t = this;
                    this.rafId = (0, n.raf)(function() {
                        if (t.counting) {
                            var e = t.getRemain(); (0, o.isSameSecond)(e, t.remain) && 0 !== e || t.setRemain(e),
                            t.remain > 0 && t.macroTick()
                        }
                    })
                },
                getRemain: function() {
                    return Math.max(this.endTime - Date.now(), 0)
                },
                setRemain: function(t) {
                    this.remain = t,
                    this.$emit("change", this.timeData),
                    0 === t && (this.pause(), this.$emit("finish"))
                }
            },
            render: function() {
                return (0, arguments[0])("div", {
                    class: d()
                },
                [this.slots("default", this.timeData) || this.formattedTime])
            }
        });
        e.
    default = c
    },
    K7fX: function(t, e, a) {
        a("XqYu"),
        a("NMcM")
    },
    NMcM: function(t, e) {},
    OOhG: function(t, e) {},
    fZjL: function(t, e, a) {
        t.exports = {
        default:
            a("jFbC"),
            __esModule: !0
        }
    },
    jFbC: function(t, e, a) {
        a("Cdx3"),
        t.exports = a("FeBl").Object.keys
    },
    uqUo: function(t, e, a) {
        var i = a("kM2E"),
        n = a("FeBl"),
        o = a("S82l");
        t.exports = function(t, e) {
            var a = (n.Object || {})[t] || Object[t],
            r = {};
            r[t] = e(a),
            i(i.S + i.F * o(function() {
                a(1)
            }), "Object", r)
        }
    }
});
//# sourceMappingURL=1.7720825bfd53b06545f4.js.map
