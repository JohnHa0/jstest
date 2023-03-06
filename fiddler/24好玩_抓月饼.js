!
function(e) {
    var t = {};
    function i(a) {
        if (t[a]) return t[a].exports;
        var s = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, i),
        s.l = !0,
        s.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    },
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) i.d(a, s,
        function(t) {
            return e[t]
        }.bind(null, s));
        return a
    },
    i.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return i.d(t, "a", t),
        t
    },
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "https://cdn-new.24haowan.com/game_tpl/",
    i(i.s = 445)
} ({
    445 : function(e, t, i) {
        "use strict";
        i.r(t);
        i(446)
    },
    446 : function(e, t) {
        var i = window.ASSET_BASE_URL;
        requirejs(["base/hwsdk"], (function(e) {
            e.init();
            var t = function(e, t, i) {
                this.bestScore = e || 0,
                this.config = t,
                this.domId = i || ""
            };
            t.prototype = {
                score: 0,
                bestScore: 0,
                isInit: !1,
                musicManager: null,
                domId: null,
                device: {
                    type: null,
                    platform: null,
                    width: 0,
                    height: 0
                },
                canvasSize: {
                    width: 0,
                    height: 0,
                    ratio: 0
                },
                instance: null,
                playedMusic: !1,
                initDevice: function() {
                    this.device.width = game_width,
                    this.device.height = game_height,
                    game_width > game_height && (this.device.width = game_height, this.device.height = game_width),
                    this.device.platform = navigator.userAgent.toLowerCase().indexOf("android") < 0 ? "apple": "android",
                    this.device.type = this.device.width > 700 ? "pad": "mobile"
                },
                initCanvasSize: function() {
                    game_width < game_height && (this.canvasSize.width = 2 * game_width, this.canvasSize.height = 2 * game_height, this.canvasSize.ratio = this.canvasSize.width / this.canvasSize.height)
                },
                toPlayMusic: function() {
                    this.playedMusic || (this.musicManager.play("bgMusic", !0), this.playedMusic = !0)
                },
                init: function() {
                    e.showLoadingPage();
                    var t = this;
                    this.initDevice(),
                    this.initCanvasSize(),
                    this.isInit = !0,
                    this.instance = new Phaser.Game(this.canvasSize.width, this.canvasSize.height, Phaser.AUTO, this.domId),
                    this.instance.States = {};
                    var s, n, o = this.instance;
                    o.States.boot = function() {
                        this.preload = function() {
                            $(o.canvas).css("width", t.canvasSize.width / 2),
                            $(o.canvas).css("height", t.canvasSize.height / 2),
                            o.stage.backgroundColor = "#aaa"
                        },
                        this.create = function() {
                            o.state.start("preload")
                        }
                    },
                    o.States.preload = function() {
                        this.preload = function() {
                            var a = !!showAd;
                            setTimeout((function() {
                                a = !0
                            }), 1e3),
                            o.load.crossOrigin = "Anonymous",
                            o.load.onLoadComplete.add((function e() {
                                1 == a ? o.state.start("create") : setTimeout((function() {
                                    e()
                                }), 1e3)
                            })),
                            o.load.onFileComplete.add((function(t) {
                                e.configLoadingPage({
                                    progress: t
                                })
                            }));
                            var s = t.config.game;
                            0 != s.bg.indexOf("#") && o.load.image("bg", s.bg),
                            o.load.image("guide_tap", i + "/assets/mobile/guide_tap.png"),
                            o.load.image("clock", i + "/assets/mobile/clock.png"),
                            o.load.image("plus10", i + "/assets/mobile/plus10.png"),
                            o.load.image("plus50", i + "/assets/mobile/plus50.png"),
                            o.load.image("plus100", i + "/assets/mobile/plus100.png"),
                            o.load.image("dashline", i + "/assets/mobile/dashline.png"),
                            o.load.image("hand_spread", i + "/assets/mobile/hand_spread.png"),
                            o.load.image("hand_hold", i + "/assets/mobile/hand_hold.png"),
                            o.load.image("redpaper50", s.redpaper50),
                            o.load.image("redpaper10", s.redpaper10),
                            o.load.image("coin", s.coin),
                            o.load.audio("bgMusic", s.music_bg),
                            o.load.audio("crash", s.music_crash),
                            o.load.audio("hit", s.music_hit),
                            o.load.audio("stretch", s.music_stretch)
                        }
                    },
                    o.States.create = function() {
                        this.create = function() {
                            t.musicManager = new a(o, t.device, ["bgMusic", "crash", "hit", "stretch"]),
                            o.state.start("play")
                        }
                    },
                    o.States.play = function() {
                        this.create = function() {
                            if (t.playedMusic || (o.paused = !0, e.hideLoadingPage().showStartPage().showPageBtn(), skip ? (o.paused = !1, gameManager.toPlayMusic()) : e.showBox()), 0 == t.config.game.bg.indexOf("#")) o.stage.backgroundColor = t.config.game.bg;
                            else {
                                var i = o.add.image(0, 0, "bg");
                                i.width = t.canvasSize.width,
                                i.height = t.canvasSize.height
                            } !
                            function() {
                                m = 1,//-----时间
                                u = 0,
                                o.world.camera.position.set(0);
                                var e = o.world.width + 100,
                                i = o.world.height + 100;
                                o.world.setBounds( - 50, -50, e, i);
                                var a = o.add.image(0, 0, "bg");
                                a.width = t.canvasSize.width,
                                a.height = t.canvasSize.height;
                                var y = 2 * t.canvasSize.height / 3,
                                P = o.add.sprite(0, y, "dashline");
                                P.rotation = -.01,
                                P.anchor.setTo(0, 1),
                                c = o.cache.getImage("hand_spread").width,
                                d = o.cache.getImage("hand_spread").height,
                                P.width / P.height,
                                s = new L(o, r = 180 - c, h = y + (d - 180 * d / c) - 30, "hand_spread"),
                                o.add.existing(s),
                                (n = o.add.sprite(r, h, "hand_hold")).anchor.setTo(0, 1),
                                n.visible = !1,
                                o.input.onDown.removeAll(),
                                o.input.onDown.add((function() {
                                    if (null != w && w.alive && w.kill(), S) {
                                        t.musicManager.play("stretch");
                                        var e = o.add.tween(s).to({
                                            x: -30,
                                            y: y + 30
                                        },
                                        250, Phaser.Easing.Linear.None, !0);
                                        o.add.tween(n).to({
                                            x: -30,
                                            y: y + 30
                                        },
                                        250, Phaser.Easing.Linear.None, !0);
                                        S = !1,
                                        e.onComplete.addOnce((function() {
                                            var e = o.add.tween(s).to({
                                                x: r,
                                                y: h
                                            },
                                            250, Phaser.Easing.Linear.None, !0);
                                            o.add.tween(n).to({
                                                x: r,
                                                y: h
                                            },
                                            250, Phaser.Easing.Linear.None, !0),
                                            e.onComplete.addOnce((function() {
                                                S = !0
                                            }), this)
                                        }), this)
                                    }
                                }), this),
                                function() { (l = o.add.text(t.canvasSize.width / 2 - 50, t.canvasSize.height / 2 - 300, "0", {
                                        fontSize: "70px",
                                        fill: "rgba(0,0,0,0.6)"
                                    })).anchor.setTo(0, .5);
                                    var e = o.add.sprite(t.canvasSize.width - 100, 100, "clock");
                                    e.alpha = 1,
                                    e.anchor.setTo(1, .5),
                                    e.width = 70,
                                    e.height = 73,
                                    (g = o.add.text(e.x + 10, 100, "" + m, {
                                        fontSize: "50px",
                                        fill: "rgba(0,0,0,0.6)"
                                    })).anchor.setTo(0, .5),
                                    o.time.totalElapsedSeconds()
                                } (),
                                function e() {
                                    null == w && (w = o.add.sprite(t.canvasSize.width / 2, t.canvasSize.height / 2, "guide_tap"));
                                    o.time.events.add(500, (function() {
                                        w.alive && (w.visible = !_, _ = !_, e())
                                    }), this)
                                } (),
                                function e(t) {
                                    f = o.time.events.add(t, (function() {
                                        var t = o.rnd.between(1500, 2e3);
                                        b("redpaper50"),
                                        e(t)
                                    }), this)
                                } (1500),
                                function e(t) {
                                    v = o.time.events.add(t, (function() {
                                        var t = o.rnd.between(500, 1e3);
                                        b("redpaper10"),
                                        e(t)
                                    }), this)
                                } (1e3),
                                (p = o.time.create(!1)).add(1e3 * m, O, this),
                                p.start()
                            } (),
                            "block" == $(".pause-mask").css("display") && (o.paused = !0),
                            this.stage.disableVisibilityChange = !0
                        },
                        this.update = function() { !
                            function() {
                                y % 9 == 0 && y > 0 && b("coin");
                                var e = p.duration; (e /= 1e3) < 0 && (e = 0);
                                e = e.toFixed(0),
                                g.setText("" + e)
                            } ()
                        }
                    };
                    var r, h, c, d, l, g, u, p, m, f, v, y = 0;
                    function b(e) {
                        var i;
                        switch ((i = c > t.canvasSize.width ? new P(o, o.rnd.between(180, t.canvasSize.width - 10), -30, e, s) : new P(o, o.rnd.between(180, c - 10), -30, e, s)).anchor.setTo(1, .5), e) {
                        case "redpaper50":
                            i.body.gravity.y = o.rnd.between(900, 1100);
                            break;
                        case "redpaper10":
                            i.body.gravity.y = o.rnd.between(500, 700);
                            break;
                        default:
                            i.body.gravity.y = 2500
                        }
                        o.add.existing(i),
                        y++
                    }
                    var w, S = !0;
                    var _ = !0;
                    var P = function(e, t, i, a, s) {
                        var n;
                        switch (Phaser.Sprite.call(this, e, t, i, a), e.physics.arcade.enable(this), this.anchor.setTo(.5, .5), n = this.width > this.height ? 154 / this.width: 154 / this.height, this.scale.set(n, n), this.target = s, this.checkWorldBounds = !0, this.killing = !1, a) {
                        case "redpaper50":
                            this.gain = "plus50",
                            this.score = 3;
                            break;
                        case "redpaper10":
                            this.gain = "plus10",
                            this.score = 1;
                            break;
                        case "coin":
                            this.gain = "plus100",
                            this.score = 10
                        }
                    };
                    function O() {
                        if (0) S = !0,
                        o.state.start("play");
                        else {
                            e.requestGameScore({
                                game_score: u,
                                game_id: game_info.game_id,
                                device_type: t.device.platform
                            },
                            (function() {
                                e.showOverPage().showPageBtn().showBox()
                            }));
                            var i = e.getWxShareObj(),
                            a = /\{score\}/gi;
                            i.link = i.link + "?score=" + u,
                            0 != u && (i.title = i.title.replace(a, (function() {
                                return u
                            })), i.desc = i.desc.replace(a, (function() {
                                return u
                            }))),
                            e.setWxShare(i, u),
                            S = !0,
                            o.state.start("end")
                        }
                    }
                    function x() {
                        this.body.gravity.y = 0,
                        this.body.velocity.y = 0,
                        o.add.tween(this).to({
                            alpha: 0
                        },
                        500, Phaser.Easing.Linear.None, !0).onComplete.addOnce((function() {
                            this.kill()
                        }), this),
                        n.visible = !0,
                        s.visible = !1;
                        var e, i, a = o.add.sprite(this.x, this.y, this.gain);
                        a.anchor.setTo(.5, .5),
                        o.add.tween(a).to({
                            alpha: 0,
                            y: a.y - 30
                        },
                        500, Phaser.Easing.Linear.None, !0).onComplete.addOnce((function() {
                            a.kill()
                        }), this),
                        s.timer.removeAll(),
                        s.timer.add(500, (function() {
                            n.visible = !1,
                            s.visible = !0
                        }), this),
                        s.timer.start(),
                        u += this.score,
                        l.setText("" + u.toFixed(0)),
                        this.killing = !0,
                        "plus100" == this.gain ? (e = {
                            x: o.camera.x - 10
                        },
                        i = Phaser.Easing.Bounce.InOut, o.add.tween(o.camera).to(e, 100, i, !1, 0, 1, !0).start(), t.musicManager.play("crash")) : t.musicManager.play("hit")
                    }
                    P.prototype = Object.create(Phaser.Sprite.prototype),
                    P.prototype.constructor = P,
                    P.prototype.update = function() {
                        this.killing || o.physics.arcade.overlap(this.target, this, x, null, this)
                    };
                    var L = function(e, t, i, a) {
                        Phaser.Sprite.call(this, e, t, i, a),
                        e.physics.arcade.enable(this),
                        this.anchor.setTo(0, 1);
                        var s = e.cache.getImage(a).width,
                        n = e.cache.getImage(a).height;
                        this.timer = e.time.create(!1),
                        this.body.setSize(100, 100, s - 100, 100 - n)
                    };
                    L.prototype = Object.create(Phaser.Sprite.prototype),
                    L.prototype.constructor = L,
                    o.States.end = function() {
                        this.create = function() {
                            t.musicManager.play("bgMusic", !0)
                        }
                    },
                    o.state.add("boot", o.States.boot),
                    o.state.add("preload", o.States.preload),
                    o.state.add("create", o.States.create),
                    o.state.add("play", o.States.play),
                    o.state.add("end", o.States.end),
                    o.state.start("boot")
                }
            };
            var a = function(e, t, i) {
                this.gameInstance = e,
                this.deviceInfo = t,
                this.assets = i,
                this.init()
            };
            function s(t) {
                "portrait" == t ? (e.hideRotateMask(), gameManager.isInit && (game.paused = !1), gameManager.isInit || gameManager.init()) : "landscape" == t ? (e.showRotateMask(), gameManager.isInit && (game.paused = !0)) : ("pc" == e.detectDevice() || "undefined" == t && "mobile" == e.detectDevice()) && gameManager.init()
            }
            a.prototype = {
                gameInstance: null,
                deviceInfo: null,
                assets: null,
                musicObject: null,
                isBaned: !1,
                isPlaying: !1,
                playingList: [],
                init: function() {
                    var e = this;
                    if (this.assets) {
                        this.musicObject = {};
                        for (var t = 0,
                        i = this.assets.length; t < i; t++) {
                            var a = this.gameInstance.add.audio(this.assets[t]);
                            a.name = this.assets[t],
                            a.onPause.add((function() {
                                e.playingList = e.playingList.splice(e.playingList.indexOf(a.name), 1),
                                0 == e.playingList.length && (e.isPlaying = !1)
                            })),
                            a.onStop.add((function() {
                                e.playingList = e.playingList.splice(e.playingList.indexOf(a.name), 1),
                                0 == e.playingList.length && (e.isPlaying = !1)
                            })),
                            this.musicObject[this.assets[t]] = a
                        }
                    }
                },
                play: function(e, t) {
                    this.isBaned || window.music_flag && (t ? this.musicObject[e].isPlaying || (this.musicObject[e].loopFull(), this.playingList.push(e)) : (this.musicObject[e].play(), this.musicObject[e].isPlaying || this.playingList.push(e)), this.isPlaying = !0)
                },
                resume: function() {
                    for (var e in this.playingList) {
                        var t = this.playingList[e];
                        this.musicObject[t].resume()
                    }
                    this.isPlaying = !0
                },
                pause: function() {
                    for (var e in this.playingList) {
                        var t = this.playingList[e];
                        this.musicObject[t].pause()
                    }
                    this.isPlaying = !1
                },
                stop: function() {
                    for (var e in this.playingList) {
                        var t = this.playingList[e];
                        this.musicObject[t].stop()
                    }
                    this.isPlaying = !1,
                    this.playingList = []
                },
                ban: function() {
                    this.isBaned = !0,
                    this.pause()
                },
                disban: function() {
                    this.isBaned = !1,
                    this.resume()
                }
            },
            gameManager = new t(bestScore, configJson, "game_div"),
            s(e.getDeviceOrientation()),
            e.onOrientationChanged(s)
        }))
    }
});