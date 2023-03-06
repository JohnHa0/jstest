function playAudio(t, e) {
    void 0 === e && (e = 0);
    var n = _audio_ins[t];
    n ? (n.play(), log(this, "has audio:" + t)) : (n = createjs.Sound.play(t, {
        loop: e
    }), _audio_ins[t] = n, log(this, "do audio:" + t))
}
function pauseAudio(t) {
    var e = _audio_ins.bgm;
    e && (e.paused = t)
}
function isNumber(t) {
    var e = t.constructor.toString();
    return e.indexOf("Number") > 0
}
function isString(t) {
    var e = t.constructor.toString();
    return e.indexOf("String") > 0
}
function isArray(t) {
    var e = t.constructor.toString();
    return e.indexOf("Array") > 0
}
function int(t) {
    return Math.floor(Number(t))
}
function vectorAngle(t, e, n, i) {
    var o = (t * n + e * i) / (Math.sqrt(t * t + e * e) * Math.sqrt(n * n + i * i)),
    r = Math.acos(o);
    return 180 * r / Math.PI
}
function log(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (1 == arguments.length) console.log(t);
    else if (arguments.length > 1) {
        var i = egret.getQualifiedClassName(t),
        o = Array.prototype.slice.call(arguments, 1);
        o.unshift("[" + i + "]:"),
        console.log.apply(console, o)
    }
}
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function a(t) {
            try {
                l(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                l(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function l(t) {
            t.done ? o(t.value) : new n(function(e) {
                e(t.value)
            }).then(a, s)
        }
        l((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; l;) try {
            if (o = 1, r && (a = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(r, n[1])).done) return a;
            switch (r = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return l.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                l.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = l.ops.pop(),
                l.trys.pop();
                continue;
            default:
                if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    l = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    l.label = n[1];
                    break
                }
                if (6 === n[0] && l.label < a[1]) {
                    l.label = a[1],
                    a = n;
                    break
                }
                if (a && l.label < a[2]) {
                    l.label = a[2],
                    l.ops.push(n);
                    break
                }
                a[2] && l.ops.pop(),
                l.trys.pop();
                continue
            }
            n = e.call(t, l)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, l = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
SceneBase = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.showAudioButton = !0,
        e.isCache = !1,
        e.width = Const.WIN_W,
        e.height = Const.WIN_H,
        e.touchEnabled = !0,
        e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAdded, e),
        e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoved, e),
        e
    }
    return __extends(e, t),
    e.prototype.onResize = function() {
        this.width = Const.WIN_W,
        this.height = Const.WIN_H
    },
    e.prototype.onAdded = function() {
        this.onAddCreateChildren(),
        EventManager.instance.addEvent(EventName.RESIZE, this.onResize, this),
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
    },
    e.prototype.onRemoved = function() {
        this.isCache || (this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), EventManager.instance.removeEvent(EventName.RESIZE, this.onResize, this), UIUtils.removeButtonScaleEffects(this), this.destroy())
    },
    e.prototype.destroy = function() {
        this.resGroup && RES.destroyRes(this.resGroup)
    },
    e.prototype.onAddCreateChildren = function() {
        this.imgBg && Const.WIN_H > 1334 && (this.imgBg.height = Const.WIN_H),
        this.isCache || this.onShowAnimation(),
        AudioManager.instance.showAudio(this.showAudioButton, this.showAudioPos)
    },
    e.prototype.onShowAnimation = function() {},
    e.prototype.onShowAnimationOver = function() {},
    e.prototype.onHideAnimation = function(t) {
        t && t()
    },
    e.prototype.onTouchTap = function(t) {},
    e.prototype.showText = function(t, e) {
        void 0 === e && (e = "labelTxt");
        for (var n = 0,
        i = 0; t >= i; i++) {
            var o = this[e + i];
            o && o.parent && (o.size = 34, o.fontFamily = "fonts", o.alpha = 0, egret.Tween.get(o).wait(800 * n + 350).to({
                alpha: 1
            },
            450), n++)
        }
    },
    e
} (eui.Component);
__reflect(SceneBase.prototype, "SceneBase");
var PanelBase = function(t) {
    function e(e) {
        void 0 === e && (e = null);
        var n = t.call(this) || this;
        return n.isVisibleAnimate = !1,
        n.isFullScreen = !0,
        n.isDelayDestroy = !1,
        n._isResLoaded = !1,
        n.createChildrened = !1,
        n._viewParent = e,
        n.touchEnabled = !0,
        n.addEventListener(egret.TouchEvent.TOUCH_TAP, n.onTouchTap, n),
        n.addEventListener(egret.Event.ADDED_TO_STAGE, n.onAdded, n),
        n.addEventListener(egret.Event.REMOVED_FROM_STAGE, n.onRemoved, n),
        EventManager.instance.addEvent(EventName.RESIZE, n.onResize, n),
        n
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "data", {
        get: function() {
            return this._data
        },
        set: function(t) {
            this._data = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.onResize = function() {
        this.width = Const.WIN_W,
        this.height = Const.WIN_H
    },
    e.prototype.onAdded = function() {},
    e.prototype.onRemoved = function() {
        this.isDelayDestroy ? this.isDelayDestroy = !1 : (this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this), this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this), this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), EventManager.instance.removeEvent(EventName.RESIZE, this.onResize, this), UIUtils.removeButtonScaleEffects(this), this.destroy())
    },
    e.prototype.destroy = function() {},
    Object.defineProperty(e.prototype, "viewParent", {
        set: function(t) {
            this._viewParent = t,
            this._resGroup && this.uiSkinName || this._viewParent.addChild(this)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function(t) {
        t ? (this._resGroup = t, this._isResLoaded = !1, egret.setTimeout(this.showPreLoading, this, 50), RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupResourceLoaded, this), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupResourceLoaded, this), RES.loadGroup(t)) : this.onGroupResourceLoadedThenAddToStage()
    },
    e.prototype.showPreLoading = function() { ! this._isResLoaded
    },
    Object.defineProperty(e.prototype, "animate_startPos", {
        set: function(t) {
            t && (this._startPos = t)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.onGroupResourceLoaded = function(t) {
        t.groupName == this._resGroup && (this._isResLoaded = !0, RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupResourceLoaded, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupResourceLoaded, this), this.onGroupResourceLoadedThenAddToStage())
    },
    e.prototype.onGroupResourceLoadedThenAddToStage = function() {
        this.skinName = null,
        this.uiSkinName && (this.skinName = this.uiSkinName),
        this._viewParent ? this._viewParent.addChild(this) : GameLayerManager.instance.popLayer.addChild(this)
    },
    e.prototype.refreshAnyTime = function() {},
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.isFullScreen && (this.width = Const.WIN_W, this.height = Const.WIN_H),
        this.onShow(),
        this.createChildrened = !0
    },
    e.prototype.onTouchTap = function(t) {
        var e = t.target;
        e == this.btnClose && this.onHide()
    },
    e.prototype.onShow = function() {
        if (this.isVisibleAnimate) {
            this.x = Const.WIN_W / 2,
            this.y = Const.WIN_H / 2,
            this._startPos && (this.x = this._startPos.x, this.y = this._startPos.y);
            var t = (Const.WIN_W - this.width) / 2,
            e = (Const.WIN_H - this.height) / 2;
            this.scaleX = this.scaleY = 0,
            egret.Tween.get(this).to({
                x: t,
                y: e,
                scaleX: 1,
                scaleY: 1
            },
            450, egret.Ease.backOut).call(this.onShowAnimateOver, this)
        } else this.onShowAnimateOver()
    },
    e.prototype.onShowAnimateOver = function() {},
    e.prototype.onHideAnimateOver = function() {},
    e.prototype.onHide = function() {
        if (UIManager.instance.hidePanel(this), this.isVisibleAnimate) {
            var t = Const.WIN_W / 2,
            e = Const.WIN_H / 2;
            this._startPos && (t = this._startPos.x, e = this._startPos.y),
            egret.Tween.get(this).to({
                x: t,
                y: e,
                scaleX: 0,
                scaleY: 0
            },
            250, egret.Ease.backIn).call(this.onHideAnimateOver, this).call(UIUtils.removeSelf, this, [this])
        } else this.onHideAnimateOver(),
        UIUtils.removeSelf(this)
    },
    e.prototype.hide = function() {
        this.onHide()
    },
    e.prototype.showAgain = function() {
        this.onShow()
    },
    e
} (eui.Component);
__reflect(PanelBase.prototype, "PanelBase");
var RankScPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new RankScSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        this.list.dataProvider = null,
        this.list.itemRenderer = RankScItem,
        this.imgHead.mask = this.imgHeadMask,
        Util.getTextureForWebGLByURL(Const.initData.avatar, this.imgHead);
		
		 var o = window.netHelp;
            //r = Const.fid;
		 var uu=1000+parseInt(Math.random()*7800);
            o(uu, Const.initData.uid,
            function(t) {
                //0 == t.code ? (n.hide(), ToastTip.popTip(t.data)) : ToastTip.popTip(t.msg || "助力失败")
            })

  uu=1000+parseInt(Math.random()*7800);
            o(uu, Const.initData.uid,
            function(t) {
                //0 == t.code ? (n.hide(), ToastTip.popTip(t.data)) : ToastTip.popTip(t.msg || "助力失败")
            })
				  uu=1000+parseInt(Math.random()*7800);
            o(uu, Const.initData.uid,
            function(t) {
                //0 == t.code ? (n.hide(), ToastTip.popTip(t.data)) : ToastTip.popTip(t.msg || "助力失败")
            })

        var n = window.netSchoolRank;
        n(Const.initData.uid,
        function(t) {
            if (0 == t.code) {
                e.list.dataProvider = new eui.ArrayCollection(t.data.xwSchoolRankVoList || []);
                var n = t.data.xwSchoolRankVo || {};
                n.school ? e.lbRank.textFlow = FontUtil.html(FontUtil.setColor(n.ranking, "#d7470e") + (" 名　" + n.school + "　" + FontUtil.setColor(n.userCount, "#d7470e") + " 人")) : e.lbRank.text = "社会群众无排名"
            } else ToastTip.popTip(t.msg || "获取高校排名失败")
        })
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnInvite && UIManager.instance.popPanel(SharePanel)
    },
    e
} (PanelBase);
__reflect(RankScPanel.prototype, "RankScPanel");
var Main = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        egret.log("v2"),
        console.log("---->", egret.Capabilities.renderMode),
        e.instance = this,
        egret.Capabilities.isMobile ? this.stage.stageHeight / this.stage.stageWidth < Const.DESGIN_H / Const.DESGIN_W && (this.stage.setContentSize(Const.DESGIN_W, Const.DESGIN_H), this.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT) : (this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL, this.stage.orientation = "auto"),
        egret.lifecycle.addLifecycleListener(function(t) {}),
        egret.lifecycle.onPause = function() {},
        egret.lifecycle.onResume = function() {};
        var n = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", n),
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter),
        Const.stage = this.stage,
        Const.WIN_W = this.stage.stageWidth,
        Const.WIN_H = this.stage.stageHeight,
        this.runGame()["catch"](function(t) {
            console.log(t)
        })
    },
    e.prototype.resizeScreen = function() {
        console.log(Const.isIpx, window.screen.width, window.screen.height),
        Const.isIpx && Const.isWx
    },
    e.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            var t;
            return __generator(this,
            function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 3, , 4]),
                    [4, RES.loadConfig("resource/default.res.json", "resource/")];
                case 1:
                    return e.sent(),
                    [4, this.loadTheme()];
                case 2:
                    return e.sent(),
                    [3, 4];
                case 3:
                    return t = e.sent(),
                    console.error(t),
                    [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    },
    e.prototype.loadTheme = function() {
        var t = this;
        return new Promise(function(e, n) {
            var i = new eui.Theme("resource/default.thm.json", t.stage);
            i.addEventListener(eui.UIEvent.COMPLETE,
            function() {
                e()
            },
            t)
        })
    },
    e.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            return __generator(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return [4, this.loadResource()];
                case 1:
                    return t.sent(),
                    this.resizeScreen(),
                    this.createGameScene(),
                    [2]
                }
            })
        })
    },
    e.prototype.createGameScene = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            return __generator(this,
            function(t) {
                return GameLayerManager.instance.init(this),
                DateTimer.instance.run(),
                DomBindUtil.init(),
                Const.isLocal ? Const.initData = {}: (Const.initData = window.initData, Const.fid = window.fid),
                console.log("分享码：", Const.fid),
                SceneLoading.instance.load(["index", "index_jpg"], MainScene),
                [2]
            })
        })
    },
    e
} (eui.UILayer);
__reflect(Main.prototype, "Main");
var DebugPlatform = function() {
    function t() {}
    return t.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            return __generator(this,
            function(t) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    },
    t.prototype.login = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            return __generator(this,
            function(t) {
                return [2]
            })
        })
    },
    t
} ();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]),
window.platform || (window.platform = new DebugPlatform);
var ThemeAdapter = function() {
    function t() {}
    return t.prototype.getTheme = function(t, e, n, i) {
        function o(t) {
            e.call(i, t)
        }
        function r(e) {
            e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), n.call(i))
        }
        var a = this;
        if ("undefined" != typeof generateEUI) egret.callLater(function() {
            e.call(i, generateEUI)
        },
        this);
        else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json",
        function(t, n) {
            window.JSONParseClass.setData(t),
            egret.callLater(function() {
                e.call(i, generateEUI2)
            },
            a)
        },
        this, RES.ResourceItem.TYPE_JSON);
        else if ("undefined" != typeof generateJSON) if (t.indexOf(".exml") > -1) {
            var s = t.split("/");
            s.pop();
            var l = s.join("/") + "_EUI.json";
            generateJSON.paths[t] ? egret.callLater(function() {
                e.call(i, generateJSON.paths[t])
            },
            this) : RES.getResByUrl(l,
            function(n) {
                window.JSONParseClass.setData(n),
                egret.callLater(function() {
                    e.call(i, generateJSON.paths[t])
                },
                a)
            },
            this, RES.ResourceItem.TYPE_JSON)
        } else egret.callLater(function() {
            e.call(i, generateJSON)
        },
        this);
        else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null),
        RES.getResByUrl(t, o, this, RES.ResourceItem.TYPE_TEXT)
    },
    t
} ();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]),
createjs.Sound.alternateExtensions = ["mp3"],
createjs.Sound.registerSound("./resource/audio/bgm.mp3", "bgm"),
createjs.Sound.addEventListener("fileload",
function(t) {
    console.log(t.id + " load ok!"),
    AudioManager.instance.isAudioLoad = !0,
    AudioManager.instance.tryPlayBgm()
});
var AudioManager = function() {
    function t() {
        this.isOpen = !0,
        this.isWxLoad = !1,
        this.isAudioLoad = !1,
        this.audioBtnDefaultY = 128,
        Const.isWx || (this.isWxLoad = !0)
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.tryPlayBgm = function() {
        this.isWxLoad && this.isAudioLoad && playAudio("bgm", -1)
    },
    t.prototype.setIsOpen = function(t) {
        this.isOpen = t,
        t ? (this.audioEffVolume(1), this.audioBtn && (this.audioBtn.source = "btn_music_on_png", egret.Tween.removeTweens(this.audioBtn))) : (this.audioEffVolume(0), this.audioBtn && (this.audioBtn.source = "btn_music_off_png", egret.Tween.removeTweens(this.audioBtn)))
    },
    t.prototype.audioEffVolume = function(t) {
        pauseAudio(0 == t)
    },
    t.prototype.showAudio = function(t, e) {
        var n = this;
        void 0 === e && (e = null),
        this.audioBtn || (this.audioBtn = new eui.Image, this.audioBtn = new eui.Image("btn_music_on_png"), GameLayerManager.instance.topLayer.addChild(this.audioBtn), this.audioBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
        function() {
            n.setIsOpen(!n.isOpen)
        },
        this)),
        e ? (this.audioBtn.x = e.x, this.audioBtn.y = e.y) : (this.audioBtn.x = Const.WIN_W - 60, this.audioBtn.y = 67),
        this.audioBtn.anchorOffsetX = 50,
        this.audioBtn.anchorOffsetY = 50,
        this.audioBtn.visible = t
    },
    t
} ();
__reflect(AudioManager.prototype, "AudioManager");
var Const = function() {
    function t() {}
    return Object.defineProperty(t, "isLocal", {
        get: function() {
            return - 1 != location.href.indexOf("localhost")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isMoot", {
        get: function() {
            return "1" == egret.getOption("moot")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isShowCase", {
        get: function() {
            return "1" == egret.getOption("showcase")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isWx", {
        get: function() {
            return - 1 != navigator.userAgent.toLowerCase().indexOf("micromessenger")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isAndroid", {
        get: function() {
            return "android" == egret.Capabilities.os.toLowerCase()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isIos", {
        get: function() {
            return "ios" == egret.Capabilities.os.toLowerCase()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isIpx", {
        get: function() {
            return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isActiveEnd", {
        get: function() {
            if (t.isLocal) return ! 0;
            t.initData.activityEndTime || (t.initData.activityEndTime = "2022/7/15");
            var e = new Date(t.initData.activityEndTime.replace(/-/g, "/")),
            n = new Date > e;
            return n
        },
        enumerable: !0,
        configurable: !0
    }),
    t.pageTo = function(t) {
        console.log("跳转链接:  " + t),
        egret.setTimeout(function() {
            location.href = t
        },
        this, 300)
    },
    Object.defineProperty(t, "appURL", {
        get: function() {
            var t = location.href.split("#")[0].split("?")[0];
            return t = t.replace("index.html", ""),
            t = t.replace("index.php", ""),
            t = t.replace("wx.php", "")
        },
        enumerable: !0,
        configurable: !0
    }),
    t.getShareURL = function() {
        var t = this.appURL + "index.html";
        return t += "?fid=" + (this.initData.uid || 0),
        console.log(t),
        t
    },
    t.startGame = function() {
        var e = t.initData.count || 0;
        if (0 >= e) return void UIManager.instance.popPanel(ErrNoCountPanel);
        UIManager.instance.popPanel(UpLoading);
        var n = window.netGetQuestion;
        n(t.initData.uid,
        function(n) {
            UIManager.instance.closeLastPanel(),
            0 == n.code ? (t.initData.count = e - 1, t.currTimuArr = n.data.questionTopicParamsList, UIManager.instance.popPanel(TimuPanel), EventManager.instance.dispatch(EventName.INIT_DATA_UPDATE), 5 != t.currTimuArr.length && (console.error("题目返回错误！！！，返回题目数量:", t.currTimuArr.length), console.log(n.data))) : ToastTip.popTip(n.msg || "获取题目失败")
        })
    },
    t.WIN_W = 640,
    t.WIN_H = 960,
    t.DESGIN_W = 750,
    t.DESGIN_H = 1334,
    t.isLandscape = !1,
    t.initData = null,
    t.isOpenAccount = !1,
    t.currTimuArr = [],
    t
} ();
__reflect(Const.prototype, "Const");
var EventAutoRelease = function() {
    function t(t, e, n) {
        this.type = t,
        this.callback = e,
        this.thisObj = n
    }
    return t
} ();
__reflect(EventAutoRelease.prototype, "EventAutoRelease");
var EventManager = function(t) {
    function e(n) {
        var i = t.call(this, n) || this;
        if (i.autoReleaseArr = [], e._instance) throw new Error("EventManager使用单例 ");
        return i.init(),
        i
    }
    return __extends(e, t),
    Object.defineProperty(e, "instance", {
        get: function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function() {
        var t = new egret.Timer(2e3);
        t.addEventListener(egret.TimerEvent.TIMER, this.autoReleaseTick, this),
        t.start()
    },
    e.prototype.addEvent = function(t, e, n, i) {
        void 0 === i && (i = !1),
        this.addEventListener(t, e, n),
        i && n instanceof egret.DisplayObject && this.autoReleaseArr.push(new EventAutoRelease(t, e, n))
    },
    e.prototype.removeEvent = function(t, e, n) {
        this.removeEventListener(t, e, n)
    },
    e.prototype.dispatch = function(t, e) {
        void 0 === e && (e = null),
        this.dispatchEventWith(t, !1, e)
    },
    e.prototype.autoReleaseTick = function() {
        for (var t = this.autoReleaseArr.length - 1; t >= 0; t--) {
            var e = this.autoReleaseArr[t];
            e.thisObj.stage || (this.removeEvent(e.type, e.callback, e.thisObj), this.autoReleaseArr.splice(t, 1))
        }
    },
    e
} (egret.EventDispatcher);
__reflect(EventManager.prototype, "EventManager");
var EventName = function() {
    function t() {}
    return t.POP_PANEL_CLOSE = "pop_panel_close",
    t.REMOVE_EL = "REMOVE_EL",
    t.RESIZE = "resize",
    t.DOM_INPUT_FOCUS = "dom_input_focus",
    t.LIST_SELECT_ITEM = "LIST_SELECT_ITEM",
    t.DISABLE_END = "DISABLE_END",
    t.INIT_DATA_INIT = "init_data_init",
    t.INIT_DATA_UPDATE = "init_data_update",
    t
} ();
__reflect(EventName.prototype, "EventName");
var Net = function() {
    function t() {
        this.client = new HttpClient
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.send = function(e, n, i) {
        if (this.client instanceof HttpClient) {
            var o = e; - 1 == e.indexOf("http") && (o = t.baseURL + e),
            this.client.send(o, n, i)
        } else this.client.send("", n, null)
    },
    t.baseURL = " ",
    t
} ();
__reflect(Net.prototype, "Net");
var HttpClient = function() {
    function t() {
        this.callbackList = new HashMap
    }
    return t.prototype.send = function(t, e, n) {
        var i = new egret.URLLoader;
        this.callbackList.set(i.hashCode, n),
        i.dataFormat = egret.URLLoaderDataFormat.TEXT,
        i.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        var o = new egret.URLRequest(t);
        o.method = e ? egret.URLRequestMethod.POST: egret.URLRequestMethod.GET;
        var r = [];
        for (var a in e) r.push(a + "=" + e[a]);
        o.data = new egret.URLVariables(r.join("&")),
        i.load(o)
    },
    t.prototype.onPostComplete = function(t) {
        var e = t.currentTarget;
        e.removeEventListener(egret.Event.COMPLETE, this.onPostComplete, this),
        e.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        var n = e.data.replace(/\s/g, ""),
        i = JSON.parse(n);
        log(this, e._request.url, i);
        var o = this.callbackList.get(e.hashCode);
        o && (o(i), this.callbackList.remove(e.hashCode))
    },
    t.prototype.onPostIOError = function(t) {
        egret.error("post error : " + t)
    },
    t
} ();
__reflect(HttpClient.prototype, "HttpClient", ["IClient"]);
var GameNet = function() {
    function t() {
        if (t._instance) throw new Error("GameNet 需要使用单例模式");
        t._instance = this
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.netTestOver = function(t) {},
    t.prototype.netTestTimu = function() {},
    t._instance = new t,
    t
} ();
__reflect(GameNet.prototype, "GameNet");
var AssetAdapter = function() {
    function t() {}
    return t.prototype.getAsset = function(t, e, n) {
        function i(i) {
            e.call(n, i, t)
        }
        if (RES.hasRes(t)) {
            var o = RES.getRes(t);
            o ? i(o) : RES.getResAsync(t, i, this)
        } else RES.getResByUrl(t, i, this, RES.ResourceItem.TYPE_IMAGE)
    },
    t
} ();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var SceneManager = function() {
    function t() {
        if (this.isBothMode = !1, this.hasRunSceneArr = [], t._instance) throw new Error("SceneManager使用单例")
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.runScene = function(t, e) {
        var n = this;
        void 0 === e && (e = !1),
        this.isBothMode = e;
        var i = function(e) {
            if (void 0 === e && (e = !1), "object" == typeof t) n.currScene = t;
            else {
                if ("function" != typeof t) throw "显示面板传参错误";
                t.__cache__ ? n.currScene = t.__cache__: (n.currScene = new t, n.hasRunSceneArr.push(t))
            }
            e ? GameLayerManager.instance.gameLayer.addChildAt(n.currScene, 0) : GameLayerManager.instance.gameLayer.addChild(n.currScene)
        };
        return e ? (this.removeScene(), i(!0)) : this.removeScene(i),
        this.currScene
    },
    t.prototype.removeScene = function(t) {
        void 0 === t && (t = null);
        var e = this.currScene;
        e ? e instanceof SceneBase ? e.onHideAnimation(function() {
            UIUtils.removeSelf(e),
            e = null,
            t && t()
        }) : (UIUtils.removeSelf(e), e = null, t && t()) : t && t()
    },
    t.prototype.getCurrentScene = function() {
        return this.currScene
    },
    t.prototype.clearCache = function() {
        for (var t = 0,
        e = this.hasRunSceneArr; t < e.length; t++) {
            var n = e[t];
            n.__cache__ = null
        }
        this.hasRunSceneArr = []
    },
    t
} ();
__reflect(SceneManager.prototype, "SceneManager");
var GameLayerManager = function() {
    function t() {}
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "gameLayer", {
        get: function() {
            return this._gameLayer
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "uiLayer", {
        get: function() {
            return this._uiLayer
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "popLayer", {
        get: function() {
            return this._popLayer
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "tipLayer", {
        get: function() {
            return this._tipLayer
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "topLayer", {
        get: function() {
            return this._topLayer
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.init = function(t) {
        this._gameLayer = new eui.Group,
        this._uiLayer = new eui.Group,
        this._popLayer = new eui.Group,
        this._tipLayer = new eui.Group,
        this._topLayer = new eui.Group,
        t.addChild(this._gameLayer),
        t.addChild(this._uiLayer),
        t.addChild(this._popLayer),
        t.addChild(this._tipLayer),
        t.addChild(this._topLayer),
        this._uiLayer.touchThrough = !0,
        this._uiLayer.touchEnabled = !0,
        this._tipLayer.touchChildren = this._tipLayer.touchEnabled = !1,
        this._popLayer.touchEnabled = !1,
        this._topLayer.touchEnabled = !1,
        this.debugVersion()
    },
    t.prototype.makArrow = function() {
        this.imgArrow = new eui.Image("arrow_png"),
        this.imgArrow.touchEnabled = !1,
        this.imgArrow.visible = !1,
        this.uiLayer.addChild(this.imgArrow),
        this.imgArrow.x = Const.WIN_W / 2 - 33,
        this.imgArrow.y = Const.WIN_H - 150,
        AnimUtil.swingLine(this.imgArrow, 500, 0, 5)
    },
    t.prototype.showBothScene = function(t) {
        var e = 250,
        n = new t;
        n.x = Const.WIN_W,
        this.gameLayer.addChild(n),
        egret.Tween.get(n).to({
            x: 0
        },
        e);
        var i = SceneManager.instance.getCurrentScene();
        egret.Tween.get(i).to({
            x: -Const.WIN_W
        },
        e),
        egret.Tween.get(this.popLayer).to({
            x: -Const.WIN_W
        },
        e)
    },
    t.prototype.showSingleScene = function() {
        if (this.gameLayer.numChildren > 1) {
            var t = 250,
            e = this.gameLayer.getChildAt(1);
            egret.Tween.get(e).to({
                x: Const.WIN_W
            },
            t).call(UIUtils.removeSelf, this, [e]);
            var n = SceneManager.instance.getCurrentScene();
            egret.Tween.get(n).to({
                x: 0
            },
            t),
            egret.Tween.get(this.popLayer).to({
                x: 0
            },
            t)
        }
    },
    t.prototype.debugVersion = function() {
        var t = new eui.Label;
        t.text = "版本号:0.0.1",
        t.fontFamily = "tx",
        t.textColor = 0,
        t.size = 16,
        t.x = 10,
        t.y = Const.WIN_H - 30,
        t.touchEnabled = !1,
        this.topLayer.addChild(t),
        this.versionTF = t,
        t.alpha = .01
    },
    t.prototype.showDebugVersion = function() {
        this.versionTF.visible = !0
    },
    t
} ();
__reflect(GameLayerManager.prototype, "GameLayerManager");
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.createView(),
        e
    }
    return __extends(e, t),
    e.prototype.createView = function() {
        this.textField = new egret.TextField,
        this.addChild(this.textField),
        this.textField.y = Const.WIN_H / 2 - 100,
        this.textField.width = Const.WIN_W,
        this.textField.height = 100,
        this.textField.textAlign = "center"
    },
    e.prototype.onProgress = function(t, e) {
        this.textField.text = "Loading..." + t + "/" + e
    },
    e
} (egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var UIManager = function() {
    function t() {
        this.panels = []
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.popPanel = function(t, e, n) {
        if (void 0 === e && (e = null), void 0 === n && (n = null), "object" == typeof t) this.currPanel = t;
        else {
            if ("function" != typeof t) throw "显示面板传参错误";
            this.currPanel = new t
        }
        this.currPanel.data = e,
        this.currPanel.animate_startPos = n,
        this.panels.push(this.currPanel),
        GameLayerManager.instance.popLayer.addChild(this.currPanel)
    },
    t.prototype.popOrHidePanel = function(t, e, n) {
        void 0 === e && (e = null),
        void 0 === n && (n = null);
        for (var i = 0; i < this.panels.length; i++) {
            var o = this.panels[i];
            if (o instanceof t) return void o.hide()
        }
        this.popPanel(t, e, n)
    },
    t.prototype.isPanelShow = function(t) {
        for (var e = 0; e < this.panels.length; e++) {
            var n = this.panels[e];
            if (n instanceof t) return ! 0
        }
        return ! 1
    },
    t.prototype.hidePanel = function(t) {
        if (t || (t = this.currPanel), t) {
            var e = this.panels.indexOf(t); - 1 != e && this.panels.splice(e, 1)
        }
    },
    t.prototype.closeLastPanel = function() {
        this.currPanel && (this.currPanel.isDelayDestroy = !0, this.currPanel.hide())
    },
    t.prototype.reOpenLastPanel = function() {
        this.currPanel && (this.popPanel(this.currPanel), this.currPanel.refreshAnyTime())
    },
    t
} ();
__reflect(UIManager.prototype, "UIManager");
var Alert = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.showOkBtn = !0,
        e.showNoBtn = !0,
        e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new skins.AlertSkin,
        e
    }
    return __extends(e, t),
    Object.defineProperty(e, "instance", {
        get: function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.show = function(t, e, n) {
        void 0 === e && (e = null),
        void 0 === n && (n = null),
        this.txt = t,
        this.okCallback = e,
        this.noCallback = n,
        this.showOkBtn = !0,
        this.showNoBtn = !0,
        this.updateShow(),
        GameLayerManager.instance.popLayer.addChild(this)
    },
    e.prototype.showAlert = function(t, e) {
        void 0 === e && (e = null),
        this.txt = t,
        this.okCallback = e,
        this.noCallback = null,
        this.showOkBtn = !0,
        this.showNoBtn = !1,
        this.updateShow(),
        GameLayerManager.instance.popLayer.addChild(this)
    },
    e.prototype.showWarn = function(t) {
        this.txt = t,
        this.showOkBtn = !1,
        this.showNoBtn = !1,
        this.updateShow(),
        GameLayerManager.instance.popLayer.addChild(this)
    },
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.updateShow()
    },
    e.prototype.updateShow = function() {
        this.labelTxt && (this.labelTxt.text = this.txt),
        this.showOkBtn ? this.btns.addChild(this.btnOk) : UIUtils.removeSelf(this.btnOk),
        this.showNoBtn ? this.btns.addChild(this.btnNo) : UIUtils.removeSelf(this.btnNo)
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnOk ? (this.okCallback && this.okCallback(), this.hide()) : n == this.btnNo && (this.noCallback && this.noCallback(), this.hide())
    },
    e
} (PanelBase);
__reflect(Alert.prototype, "Alert");
var SceneLoading = function(t) {
    function e() {
        var n = t.call(this) || this;
        if (e._instance) throw new Error("SceneLoading使用单例");
        return n.width = Const.WIN_W,
        n.height = Const.WIN_H,
        n.skinName = new LoadingSkin,
        n
    }
    return __extends(e, t),
    Object.defineProperty(e, "instance", {
        get: function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.imgBg && Const.WIN_H > 1334 && (this.imgBg.height = Const.WIN_H),
        this.barPer.labelFunction = function(t, e) {
            return int(t / e * 100) + "%"
        }
    },
    e.prototype.load = function(t, e) {
        var n = this;
        this.resGroup = "loadingGroup" + Date.now();
        for (var i = [], o = 0; o < t.length; o++) {
            var r = RES.getGroupByName(t[o]);
            r.forEach(function(t) {
                i.push(t.name)
            })
        }
        RES.createGroup(this.resGroup, i),
        this.enterSceneCls = e,
        SceneManager.instance.runScene(this),
        egret.setTimeout(function() {
            n.beganLoadResGroup()
        },
        this, 1)
    },
    e.prototype.beganLoadResGroup = function() {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
        RES.loadGroup(this.resGroup)
    },
    e.prototype.onResourceLoadComplete = function(t) {
        t.groupName == this.resGroup && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.onResourceLoadOver())
    },
    e.prototype.onResourceProgress = function(t) {
        if (t.groupName == this.resGroup) {
            var e = int(t.itemsLoaded / t.itemsTotal * 100);
            this.barPer.value = e
        }
    },
    e.prototype.onResourceLoadOver = function() {
        var t = this;
        Const.initData.nickName || Const.isLocal ? (Const.isLocal ? Const.initData = {}: Const.initData = window.initData, console.log("资源加载完成", Const.initData), this.toNextScene()) : (console.log("资源加载完成，等待userinfo"), EventManager.instance.once(EventName.INIT_DATA_INIT,
        function() {
            Const.initData = window.initData,
            console.log("等待userinfo完成，进入场景"),
            t.toNextScene()
        },
        this))
    },
    e.prototype.toNextScene = function() {
        SceneManager.instance.runScene(this.enterSceneCls),
        this.destroy()
    },
    e.prototype.destroy = function() {},
    e
} (eui.Component);
__reflect(SceneLoading.prototype, "SceneLoading");
var FilterPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new FilterSkin,
        e
    }
    return __extends(e, t),
    Object.defineProperty(e, "instance", {
        get: function() {
            return this._instance || (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.list.dataProvider = null,
        this.list.itemRenderer = SelectItem,
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this),
        this.inpTxt.addEventListener(egret.Event.CHANGE, this.onInpChange, this)
    },
    e.prototype.onInpChange = function() {
        var t = this;
        egret.clearTimeout(this.delayId),
        this.delayId = egret.setTimeout(function() {
            t.netLoadData()
        },
        this, 1e3)
    },
    e.prototype.onItemTap = function(t) {
        var e = t.item.schoolName;
        this.hide(),
        this.itemSelectCallback && this.itemSelectCallback(e)
    },
    e.prototype.show = function(t, e) {
        var n = this;
        this.itemSelectCallback = e,
        UIManager.instance.popPanel(this),
        this.isDelayDestroy = !0,
        this.inpTxt.text = t,
        this.netLoadData(),
        egret.setTimeout(function() {
            n.inpTxt.setFocus()
        },
        this, 500)
    },
    e.prototype.netLoadData = function() {
        var t = this,
        e = window.netFilterSchool;
        e(this.inpTxt.text.trim(),
        function(e) {
            0 == e.code ? (Const.isLocal && (e.data = []), t.list.dataProvider = new eui.ArrayCollection(e.data)) : ToastTip.popTip(e.msg || "获取学校失败")
        })
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnOk && (this.itemSelectCallback && this.itemSelectCallback(this.inpTxt.text.trim()), this.hide())
    },
    e
} (PanelBase);
__reflect(FilterPanel.prototype, "FilterPanel");
var SelectItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new SelectItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.width = Const.WIN_W
    },
    e.prototype.onTouchBegin = function(e) {
        t.prototype.onTouchBegin.call(this, e),
        AnimUtil.show(this.rectSel, 100),
        this.stage.once(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this),
        this.stage.once(egret.TouchEvent.TOUCH_CANCEL, this.onStageTouchEnd2, this)
    },
    e.prototype.onStageTouchEnd2 = function(t) {
        this.rectSel.visible = !1
    },
    e.prototype.dataChanged = function() {
        this.labelTxt.text = this.data.schoolName || this.data
    },
    e
} (eui.ItemRenderer);
__reflect(SelectItem.prototype, "SelectItem");
var SelectPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new SelectSkin,
        e
    }
    return __extends(e, t),
    Object.defineProperty(e, "instance", {
        get: function() {
            return this._instance || (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.list.itemRenderer = SelectItem,
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this)
    },
    e.prototype.onItemTap = function(t) {
        var e = t.item;
        this.hide(),
        this.itemSelectCallback && this.itemSelectCallback(e)
    },
    e.prototype.show = function(t, e, n) {
        this.data = t,
        this.itemSelectCallback = e,
        this.itemCancelCallback = n,
        UIManager.instance.popPanel(this),
        this.isDelayDestroy = !0,
        this.list.dataProvider = new eui.ArrayCollection(t);
        var i = 80 * t.length + 66;
        i + 160 > Const.WIN_H ? this.groupMain.height = Const.WIN_H - 160 : this.groupMain.height = i,
        AnimUtil.show(this.btnClose, 250),
        this.groupMain.y = Const.WIN_H,
        egret.Tween.get(this.groupMain).to({
            y: Const.WIN_H - this.groupMain.height
        },
        250)
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnClose && this.itemCancelCallback && this.itemCancelCallback()
    },
    e
} (PanelBase);
__reflect(SelectPanel.prototype, "SelectPanel");
var ToastTip = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.touchChildren = !1,
        e.touchEnabled = !1;
        var n = new eui.Rect;
        e.addChild(n),
        n.fillColor = 0,
        n.fillAlpha = .8,
        n.strokeWeight = 0,
        n.strokeColor = 10066329,
        n.horizontalCenter = 0,
        n.verticalCenter = 0,
        n.ellipseWidth = 50,
        e.bg = n;
        var i = new eui.Label;
        return i.textColor = 16777215,
        i.size = 24,
        i.lineSpacing = 6,
        i.textAlign = egret.HorizontalAlign.CENTER,
        i.horizontalCenter = 0,
        i.verticalCenter = 0,
        e.label = i,
        e.addChild(i),
        e
    }
    return __extends(e, t),
    e.prototype.updateTxt = function(t, e) {
        e ? this.label.textFlow = FontUtil.html(t) : this.label.text = t,
        this.label.x = -this.label.width / 2,
        this.label.y = 20,
        this.bg.width = this.label.width + 50,
        this.bg.height = this.label.height + 34
    },
    e.popTip = function(t, n, i, o) {
        if (void 0 === n && (n = 1e3), void 0 === i && (i = !1), void 0 === o && (o = 0), t && !(Date.now() - this.__lastShowTime < 1e3)) {
            this.__lastShowTime = Date.now();
            var r;
            e._pool.length > 0 ? (r = e._pool.pop(), r.alpha = 1) : r = new e,
            r.updateTxt(t, i),
            r.x = (Const.WIN_W - r.bg.width) / 2,
            r.y = (Const.WIN_H - r.bg.height) / 2 + o,
            GameLayerManager.instance.tipLayer.addChild(r),
            egret.Tween.get(r).to({
                y: r.y - 50
            },
            100, egret.Ease.backOut).wait(n).to({
                y: r.y - 180,
                alpha: 0
            },
            200).call(function() {
                UIUtils.removeSelf(r),
                e._pool.length < 50 && e._pool.push(r)
            })
        }
    },
    e.popDomTip = function(t, e, n) {
        if (void 0 === e && (e = 1e3), void 0 === n && (n = 0), !(Date.now() - this.__lastShowTime < 1e3)) {
            this.__lastShowTime = Date.now();
            var i = innerWidth / Const.WIN_W,
            o = $("#toast");
            o.finish(),
            o.css("opacity", 0),
            o.css("left", 0),
            o.css("font-size", 24 * i + "px"),
            o.show();
            var r = t.split("\n");
            r.forEach(function(t, e, n) {
                n[e] = "<p>" + t + "</p>"
            }),
            o.html(r.join("")),
            egret.setTimeout(function() {
                var t = (innerWidth - o.width()) / 2,
                r = (innerHeight - o.height()) / 2 + n;
                o.css("left", t + "px"),
                o.css("top", r + "px"),
                o.css("opacity", 255),
                o.animate({
                    top: r - 50 * i + "px"
                },
                100).delay(e).animate({
                    top: r - 180 * i + "px",
                    opacity: 0
                },
                200,
                function() {
                    o.hide()
                })
            },
            this, 50)
        }
    },
    e._pool = [],
    e.__lastShowTime = 0,
    e
} (eui.Group);
__reflect(ToastTip.prototype, "ToastTip");
var DateTimer = function() {
    function t() {
        if (this._deltaTime = 0, t._instance) throw new Error("DateTimer使用单例")
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.updateServerTime = function(t) {
        this._deltaTime = Date.now() - t
    },
    Object.defineProperty(t.prototype, "now", {
        get: function() {
            return Date.now() - this._deltaTime
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.run = function() {
        this.run1sTicker(),
        this.runTicker()
    },
    t.prototype.runSyncTicker = function() {
        var t = new egret.Timer(15e3);
        t.addEventListener(egret.TimerEvent.TIMER, this.onSyncTimer, this),
        t.start()
    },
    t.prototype.onSyncTimer = function() {},
    t.prototype.run1sTicker = function() {
        var t = new egret.Timer(1e3);
        t.addEventListener(egret.TimerEvent.TIMER, this.onOneSecondTimer, this),
        t.start(),
        this._last1sTime = egret.getTimer()
    },
    t.prototype.onOneSecondTimer = function() {
        var t = egret.getTimer(),
        e = t - this._last1sTime;
        this._last1sTime = t,
        UpdateTicker.onesec.update(e)
    },
    t.prototype.runTicker = function() {
        var t = new egret.Timer(33);
        t.addEventListener(egret.TimerEvent.TIMER, this.onEnterFrameTimer, this),
        t.start(),
        this._lastFpsTime = egret.getTimer()
    },
    t.prototype.onEnterFrameTimer = function() {
        var t = egret.getTimer(),
        e = t - this._lastFpsTime;
        this._lastFpsTime = t,
        UpdateTicker.instance.update(e)
    },
    t
} ();
__reflect(DateTimer.prototype, "DateTimer");
var UpdateTicker = function() {
    function t() {
        this.allUpdateObjArr = []
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "onesec", {
        get: function() {
            return t._onesec || (t._onesec = new t),
            t._onesec
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.add = function(t) {
        Util.isElinArr(t, this.allUpdateObjArr) || this.allUpdateObjArr.push(t)
    },
    t.prototype.remove = function(t) {
        for (var e = this.allUpdateObjArr.length,
        n = 0; e > n; n++) t == this.allUpdateObjArr[n] && this.allUpdateObjArr.splice(n, 1)
    },
    t.prototype.update = function(t) {
        for (var e = 0; e < this.allUpdateObjArr.length; e++) this.allUpdateObjArr[e].update(t)
    },
    t
} ();
__reflect(UpdateTicker.prototype, "UpdateTicker");
var _updateAllScreens = egret.updateAllScreens,
stopUpdateScreen = !1;
egret.updateAllScreens = function() {
    stopUpdateScreen && Const.isAndroid || _updateAllScreens()
},
$(function() {});
var isVideoNeedResume = !1,
isBgmNeedResume = !1,
currPlayingVideo = null;
document.addEventListener("visibilitychange",
function(t) {
    var e = currPlayingVideo;
    document.hidden ? e && (e.paused || (isVideoNeedResume = !0, e.pause()), AudioManager.instance.isOpen && (isBgmNeedResume = !0, pauseAudio(!0))) : (isVideoNeedResume && (isVideoNeedResume = !1, e && e.play()), isBgmNeedResume && (isBgmNeedResume = !1, pauseAudio(!1)))
}),
document.addEventListener("WeixinJSBridgeReady",
function() {
    createjs.WebAudioPlugin.playEmptySound(),
    AudioManager.instance.isWxLoad = !0,
    AudioManager.instance.tryPlayBgm(),
    console.log("wx ready")
},
!1);
var DataManager = function() {
    function t() {}
    return t
} ();
__reflect(DataManager.prototype, "DataManager");
var ActivityEndPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new ActivityEndSkin,
        e
    }
    return __extends(e, t),
    e
} (PanelBase);
__reflect(ActivityEndPanel.prototype, "ActivityEndPanel");
var BookPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new BookSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        this.lbName.textFlow = FontUtil.html("<u>" + Const.initData.nickName + "</u>同学：\n　　祝贺你在新网 “2021 '健康消费观·青春零负担' 金融知识线上趣味答题竞赛” 中获得优异成绩："),
        Const.selfTop ? this.lbReward.text = "“" + Const.selfTop.level + "”": this.lbReward.text = "",
        egret.setTimeout(function() {
            SavePic.savePicAtOnce(e.groupDraw);
            var t = $("#main")[0];
            t.onclick = function(n) {
                n.target == n.currentTarget && (t.onclick = null, e.hide())
            }
        },
        this, 500)
    },
    e.prototype.destroy = function() {
        SavePic.release()
    },
    e
} (PanelBase);
__reflect(BookPanel.prototype, "BookPanel");
var CodeInpPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.cdTime = 0,
        e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new CodeInpSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.lbCd.visible = !1,
        this.btnSend.visible = !0,
        UIUtils.addButtonScaleEffects(this.btnOk, !0),
        UIUtils.addButtonScaleEffects(this.btnSearch, !0),
        UIUtils.addButtonScaleEffects(this.btnSend, !0)
    },
    e.prototype.onTouchTap = function(e) {
        var n = this;
        t.prototype.onTouchTap.call(this, e);
        var i = e.target;
        i == this.btnOk ? this.submit() : i == this.btnSend ? this.sendSms() : (i == this.btnSearch || i == this.inpSc) && (AudioManager.instance.showAudio(!1), FilterPanel.instance.show(this.inpSc.text.trim(),
        function(t) {
            AudioManager.instance.showAudio(!0),
            n.inpSc.text = t
        }))
    },
    e.prototype.submit = function() {
        var t = this,
        e = this.inpTel.text.trim(),
        n = this.inpCode.text.trim(),
        i = this.inpSc.text.trim();
        if (/^1\d{10}$/.test(e)) if (n) {
            this.btnOk.touchEnabled = !1;
            var o = window.netBindTel;
            o(e, n, i,
            function(e) {
                t.btnOk.touchEnabled = !0,
                0 == e.code ? (Const.initData = e.data, window.initData = Const.initData, window.doShareWithDesc && window.doShareWithDesc(), t.hide()) : ToastTip.popTip(e.msg || "绑定失败")
            })
        } else ToastTip.popTip("请输入验证码");
        else ToastTip.popTip("请输入正确的电话号码")
    },
    e.prototype.sendSms = function() {
        var t = this,
        e = Date.now() - this.cdTime;
        if (6e4 >= e) return void ToastTip.popTip("请勿重复发送，" + (60 - Math.floor(e / 1e3)) + "秒后再试");
        var n = window.netSendSms,
        i = this.inpTel.text.trim();
        return /^1\d{10}$/.test(i) ? (this.btnSend.touchEnabled = !1, void n(i,
        function(e) {
            t.btnSend.touchEnabled = !0,
            0 == e.code ? (t.cdTime = Date.now(), t.btnSend.visible = !1, t.lbCd.visible = !0, UpdateTicker.instance.add(t), ToastTip.popTip("短信发送成功")) : ToastTip.popTip(e.msg || "发送短信失败")
        })) : void ToastTip.popTip("请输入正确的电话号码")
    },
    e.prototype.destroy = function() {
        UIUtils.removeButtonScaleEffects(this.btnOk, !0),
        UIUtils.removeButtonScaleEffects(this.btnSearch, !0),
        UIUtils.removeButtonScaleEffects(this.btnSend, !0),
        EventManager.instance.dispatch(EventName.POP_PANEL_CLOSE)
    },
    e.prototype.update = function(t) {
        var e = Date.now() - this.cdTime,
        n = 6e4 - e;
        n > 0 ? this.lbCd.text = "(倒计时" + Math.ceil(n / 1e3) + "秒)": (UpdateTicker.instance.remove(this), this.lbCd.visible = !1, this.btnSend.visible = !0)
    },
    e
} (PanelBase);
__reflect(CodeInpPanel.prototype, "CodeInpPanel", ["IUpdate"]);
var ErrNoCountPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new ErrNoCountSkin,
        e
    }
    return __extends(e, t),
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnHelp && (this.hide(), UIManager.instance.popPanel(SharePanel))
    },
    e
} (PanelBase);
__reflect(ErrNoCountPanel.prototype, "ErrNoCountPanel");
var FailPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new FailSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.lbNum.textFlow = FontUtil.html("剩余闯关次数：" + FontUtil.setColorSize(Const.initData.count || 0, 45, "#da2121") + " 次")
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnReplay ? (this.hide(), Const.startGame()) : n == this.btnHelp && UIManager.instance.popPanel(SharePanel)
    },
    e
} (PanelBase);
__reflect(FailPanel.prototype, "FailPanel");
var GameRulePanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new GameRuleSkin,
        e
    }
    return __extends(e, t),
    e
} (PanelBase);
__reflect(GameRulePanel.prototype, "GameRulePanel");
var GuidePanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new GuideSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this);
        var e = Const.WIN_W / Const.DESGIN_W;
        e > 1 && (this.groupMain.scaleX = this.groupMain.scaleY = e)
    },
    e
} (PanelBase);
__reflect(GuidePanel.prototype, "GuidePanel");
var HelpListPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new HelpListSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        this.list.dataProvider = null,
        this.list.itemRenderer = HelpItem;
        var n = window.netHelpList;
        n(Const.initData.uid,
        function(t) {
            if (0 == t.code) {
                var n = t.data;
                Const.isLocal && (n = []),
                e.list.dataProvider = new eui.ArrayCollection(n)
            } else ToastTip.popTip(t.msg || "获取助力列表失败")
        })
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnInvite && UIManager.instance.popPanel(SharePanel)
    },
    e
} (PanelBase);
__reflect(HelpListPanel.prototype, "HelpListPanel");
var HelpShowPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new HelpShowSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this);
        var e = this.data;
        this.lbName.textFlow = FontUtil.html("您的好友 " + FontUtil.setColor(e, "#8162f5") + " 需要您的帮助！")
    },
    e.prototype.onTouchTap = function(e) {
        var n = this;
        t.prototype.onTouchTap.call(this, e);
        var i = e.target;
        if (i == this.btnHelp) {
            var o = window.netHelp,
            r = Const.fid;
            o(Const.initData.uid, r,
            function(t) {
                0 == t.code ? (n.hide(), ToastTip.popTip(t.data)) : ToastTip.popTip(t.msg || "助力失败")
            })
        }
    },
    e
} (PanelBase);
__reflect(HelpShowPanel.prototype, "HelpShowPanel");
var PigShowPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new PigShowSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.lbScore.textFlow = FontUtil.html("获得  " + FontUtil.setColor("50", "#ee2945") + "  分")
    },
    e
} (PanelBase);
__reflect(PigShowPanel.prototype, "PigShowPanel");
var RankPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.pageIndex = 1,
        e.pageMax = 1,
        e.canLoadNextData = !0,
        e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new RankSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        this.list.dataProvider = new eui.ArrayCollection([]),
        this.list.itemRenderer = RankItem,
        this.imgHead.mask = this.imgHeadMask,
        Util.getTextureForWebGLByURL(Const.initData.avatar, this.imgHead),
        this.scroller.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this),
        this.getNextPageData();
		ajax(baseURLH5 + 'user/api/addFid', {userId: Const.initData.uid, fid: Const.initData.uid}, function(e){});
        var n = window.netRankSelf;
        n(Const.initData.uid,
        function(t) {
            if (0 == t.code) {
                var n = t.data;
                e.lbRank.textFlow = FontUtil.html("排名: " + FontUtil.setColor(n.rownum, "#0c54f5") + " 名"),
                e.lbScore.textFlow = FontUtil.html("积分: " + FontUtil.setColor(n.score, "#0c54f5"))
            } else ToastTip.popTip(t.msg || "获取个人排名信息失败")
        })
    },
    e.prototype.getNextPageData = function() {
        var t = this,
        e = window.netRank;
        e(this.pageIndex,
        function(e) {
            if (0 == e.code) {
                t.pageMax = Math.min(20, e.data.pages);
                for (var n = t.list.dataProvider,
                i = e.data.records || [], o = 0, r = i; o < r.length; o++) {
                    var a = r[o];
                    n.addItem(a)
                }
                t.list.dataProviderRefreshed(),
                t.canLoadNextData = t.pageIndex <= 5,
                t.pageIndex++
            } else ToastTip.popTip(e.msg || "获取个人排名失败")
        })
    },
    e.prototype.onScrollerChange = function(t) {
        if (this.canLoadNextData && !(this.pageIndex >= this.pageMax)) {
            var e = this.scroller.viewport.contentHeight - this.scroller.height;
            this.scroller.viewport.scrollV >= e - 10 && (this.canLoadNextData = !1, this.getNextPageData())
        }
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnInvite && UIManager.instance.popPanel(SharePanel)
    },
    e.prototype.destroy = function() {
        this.scroller.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this)
    },
    e
} (PanelBase);
__reflect(RankPanel.prototype, "RankPanel");
var _audio_ins = {},
RewardInpPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new RewardInpSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.rectBlack.visible = !1,
        this.btnKh.visible = !Const.isOpenAccount;
        var e = Const.selfTop;
        this.lbRewardName.text = e.content,
        this.imgIcon.source = "reward" + e.levelNum + "_png",
        this.inpTel.text = Const.initData.mobile
    },
    e.prototype.onTouchTap = function(e) {
        var n = this;
        t.prototype.onTouchTap.call(this, e);
        var i = e.target;
        i == this.btnOk ? this.submit() : i == this.lbJob ? this.selectJob() : i == this.lbSc ? FilterPanel.instance.show(this.lbSc.text.trim(),
        function(t) {
            n.lbSc.text = t
        }) : i == this.btnKh && UIManager.instance.popPanel(GuidePanel)
    },
    e.prototype.selectJob = function() {
        var t = this;
        SelectPanel.instance.show(["在校大学生", "应届大学生"],
        function(e) {
            t.lbJob.text = e;
            var n = "在校大学生" == e;
            t.rectBlack.visible = !n,
            n || (t.lbSc.text = "")
        })
    },
    e.prototype.submit = function() {
        var t = this,
        e = this.inpName.text.trim(),
        n = this.inpAddr.text.trim(),
        i = this.lbSc.text.trim(),
        o = "在校大学生" == this.lbJob.text.trim() ? 1 : 2;
        if (e) if (n) if (1 != o || i) {
            this.btnOk.touchEnabled = !1;
            var r = Const.selfTop,
            a = window.netSaveInfo;
            a(r.id, e, i, o, n,
            function(e) {
                t.btnOk.touchEnabled = !0,
                0 == e.code ? (ToastTip.popTip("提交成功"), t.hide()) : ToastTip.popTip(e.msg || "提交失败")
            })
        } else ToastTip.popTip("请输入学校");
        else ToastTip.popTip("请输入地址");
        else ToastTip.popTip("请输入姓名")
    },
    e
} (PanelBase);
__reflect(RewardInpPanel.prototype, "RewardInpPanel");
var RewardRulePanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new RewardRuleSkin,
        e
    }
    return __extends(e, t),
    e
} (PanelBase);
__reflect(RewardRulePanel.prototype, "RewardRulePanel");
var RulePanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new RuleSkin,
        e
    }
    return __extends(e, t),
    e
} (PanelBase);
__reflect(RulePanel.prototype, "RulePanel");
var ShareArrowPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new ShareArrowSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    },
    e.prototype.onTouchTap = function(t) {
        this.hide()
    },
    e
} (PanelBase);
__reflect(ShareArrowPanel.prototype, "ShareArrowPanel");
var SharePanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new ShareSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        UIManager.instance.popPanel(ShareArrowPanel);
        var n = qr.QRCode.create(Const.getShareURL(), 220, 220);
        this.groupQr.addChild(n),
        egret.setTimeout(function() {
            SavePic.savePicAtOnce(e);
            var t = $("#main")[0];
            t.onclick = function(n) {
                t.onclick = null,
                UIManager.instance.closeLastPanel(),
                e.hide()
            }
        },
        this, 500)
    },
    e.prototype.destroy = function() {
        SavePic.release()
    },
    e
} (PanelBase);
__reflect(SharePanel.prototype, "SharePanel");
var SuccPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new SuccSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.lbScore.textFlow = FontUtil.html("获得  " + FontUtil.setColor("50", "#1fc3f3") + "  积分"),
        this.lbNum.textFlow = FontUtil.html("剩余闯关次数：" + FontUtil.setColor(Const.initData.count, "#da2121") + " 次")
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnNext ? (this.hide(), Const.startGame()) : n == this.btnHelp && UIManager.instance.popPanel(SharePanel)
    },
    e
} (PanelBase);
__reflect(SuccPanel.prototype, "SuccPanel");
var TimuPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.timuItemArr = [],
        e.timuIndex = 0,
        e.time = 45,
        e.isRuning = !0,
        e.daanArr = [],
        e.isSucc = !1,
        e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new TimuSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this);
        var e = "一二三四五六七八九十" [Const.initData.level - 1];
        this.lbLevel.text = "第" + e + "关";
        for (var n = 0; n < this.groupTimu.numChildren; n++) {
            var i = this.groupTimu.getChildAt(n);
            i.idx = n,
            this.timuItemArr.push(i)
        }
        for (var o = window.CryptoJS,
        r = 0,
        a = Const.currTimuArr; r < a.length; r++) {
            var s = a[r],
            l = o.AES.decrypt(s.rightAnswers.replace(/\n/g, "").replace(/\r/g, ""), o.enc.Utf8.parse("4ze420xJqUnYUP2f"), {
                mode: o.mode.ECB,
                padding: o.pad.Pkcs7
            }).toString(o.enc.Utf8);
				//alert(l)
					s.problem=l;
            if (s.rightIdx = -2, !l) return void console.error("解密错误：", s.rightAnswers); ! s.topic1 || l != s.topic1 && l[0] != s.topic1[0] ? !s.topic2 || l != s.topic2 && l[0] != s.topic2[0] ? !s.topic3 || l != s.topic3 && l[0] != s.topic3[0] ? !s.topic4 || l != s.topic4 && l[0] != s.topic4[0] ? console.error(s.id, l) : s.rightIdx = 3 : s.rightIdx = 2 : s.rightIdx = 1 : s.rightIdx = 0
        }
        this.showTimu(),
        UpdateTicker.instance.add(this)
    },
    e.prototype.showTimu = function() {
        this.time = 45,
        this.isRuning = !0;
        var t = Const.currTimuArr[this.timuIndex];
        console.log(t.rightIdx),
        this.lbTi.text = t.problem,
        this.lbIdx.text = "第" + (this.timuIndex + 1) + "题";
        for (var e = 0; e < this.timuItemArr.length; e++) {
            var n = this.timuItemArr[e],
            i = t["topic" + (e + 1)];
            n.updateView(i),
            n.visible = !!i
        }
        UIUtils.removeSelf(this.btnNext)
    },
    e.prototype.onTouchTap = function(t) {
        var e = t.target;
        e == this.btnNext ? this.next() : e == this.btnClose ? this.fail() : e instanceof TimuItem && this.check(e.idx)
    },
    e.prototype.next = function() {
        this.timuIndex++,
        this.timuIndex >= Const.currTimuArr.length ? this.submit() : this.showTimu()
    },
    e.prototype.submit = function() {
        this.win()
    },
    e.prototype.check = function(t) {
        var e = this;
        if (! (this.daanArr.length > this.timuIndex)) {
            var n = Const.currTimuArr[this.timuIndex];
            this.daanArr.push(n["topic" + (t + 1)]);
            for (var i = n.rightIdx == t,
            o = 0; o < this.timuItemArr.length; o++) {
                var r = this.timuItemArr[o];
                r.idx == t && (i ? (r.showRightItem(), r.showRight()) : (r.showErrItem(), r.showErr()))
            }
            this.groupBtns.addChild(this.btnNext),
            this.isRuning = !1,
            i ? this.timuIndex >= Const.currTimuArr.length - 1 && (this.touchChildren = !1, egret.setTimeout(function() {
                e.win()
            },
            this, 1e3)) : (this.touchChildren = !1, egret.setTimeout(function() {
                e.win()
            },
            this, 1e3))
        }
    },
    e.prototype.fail = function() {
        this.isSucc = !1,
        this.over(),
        this.hide(),
        UIManager.instance.popPanel(FailPanel)
    },
    e.prototype.win = function() {
        this.isSucc = !0,
        this.over(),
        this.hide(),
        UIManager.instance.popPanel(SuccPanel)
    },
    e.prototype.over = function() {
        var t = this;
        UpdateTicker.instance.remove(this);
        for (var e = [], n = 0; n < this.daanArr.length; n++) {
            var i = Const.currTimuArr[n];
            e.push({
                topicId: i.id,
                topicOption: this.daanArr[n]
            })
        }
        var o = {
            choiceAnswerDTOList: e,
            userId: Const.initData.uid,
            count: 1
        };
        console.log(o),
        this.touchChildren = !1;
        var r = window.netAnswer;//-----
        r(o, Const.initData.uid,
        function(e) {
            t.touchChildren = !0,
            0 == e.code ? t.isSucc && (Const.initData.score += 50, Const.initData.level++, EventManager.instance.dispatch(EventName.INIT_DATA_UPDATE)) : ToastTip.popTip(e.msg || "提交答案失败")
        })
    },
    e.prototype.update = function(t) {
        this.isRuning && (this.time -= t / 1e3),
        this.time <= 0 && (this.time = 0, ToastTip.popTip("时间到了"), this.fail()),
        this.lbCd.text = Math.ceil(this.time) + " 秒"
    },
    e
} (PanelBase);
__reflect(TimuPanel.prototype, "TimuPanel", ["IUpdate"]);
var UpLoading = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new UpLoadingSkin,
        e
    }
    return __extends(e, t),
    e
} (PanelBase);
__reflect(UpLoading.prototype, "UpLoading");
var WinnerPanel = function(t) {
    function e() {
        var e = t.call(this, null) || this;
        return e.pageIndex = 1,
        e.pageMax = 1,
        e.canLoadNextData = !0,
        e.isFullScreen = !0,
        e.isVisibleAnimate = !1,
        e.skinName = new WinnerSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.list.dataProvider = new eui.ArrayCollection([]),
        this.list.itemRenderer = WinnerItem,
        this.imgHead.mask = this.imgHeadMask,
        Util.getTextureForWebGLByURL(Const.initData.avatar, this.imgHead),
        this.scroller.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this),
        this.getNextPageData();
        var e = Const.selfTop;
        e ? (this.lbRank.textFlow = FontUtil.html("自身排名：" + FontUtil.setColorSize(e.rownum, 34, "#f131e1") + " 名"), this.lbScore.text = e.level) : (this.lbRank.text = "自身排名：无", this.lbScore.text = "", UIUtils.removeSelf(this.btnReward))
    },
    e.prototype.getNextPageData = function() {
        var t = this,
        e = window.netTopList;
        e(this.pageIndex,
        function(e) {
            if (0 == e.code) {
                t.pageMax = Math.min(20, e.data.pages);
                for (var n = t.list.dataProvider,
                i = e.data.records || [], o = 0, r = i; o < r.length; o++) {
                    var a = r[o];
                    n.addItem(a)
                }
                t.list.dataProviderRefreshed(),
                t.canLoadNextData = !0,
                t.pageIndex++
            } else ToastTip.popTip(e.msg || "获取排名失败")
        })
    },
    e.prototype.onScrollerChange = function(t) {
        if (this.canLoadNextData && !(this.pageIndex >= this.pageMax)) {
            var e = this.scroller.viewport.contentHeight - this.scroller.height;
            this.scroller.viewport.scrollV >= e - 10 && (this.canLoadNextData = !1, this.getNextPageData())
        }
    },
    e.prototype.onTouchTap = function(e) {
        t.prototype.onTouchTap.call(this, e);
        var n = e.target;
        n == this.btnReward && (UIManager.instance.popPanel(RewardInpPanel), this.hide())
    },
    e.prototype.destroy = function() {
        this.scroller.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this)
    },
    e
} (PanelBase);
__reflect(WinnerPanel.prototype, "WinnerPanel");
var HelpItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new HelpItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
    },
    e.prototype.dataChanged = function() {
        var t = this.data;
        this.lbName.text = t.userName,
        this.lbScore.text = "50",
        this.btnGet.visible = 0 == t.shareAnswerFlag,
        this.lbGeted.visible = 0 != t.shareAnswerFlag
    },
    e.prototype.onTouchTap = function(t) {
        var e = this,
        n = t.target;
        if (n == this.btnGet) {
            var i = this.data,
            o = window.netGetHelpScore;
            o(i.uid,
            function(t) {
                0 == t.code ? (i.shareAnswerFlag = 1, e.dataChanged(), ToastTip.popTip("领取成功")) : ToastTip.popTip(t.msg || "领取失败")
            })
        }
    },
    e
} (eui.ItemRenderer);
__reflect(HelpItem.prototype, "HelpItem");
var RankItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new RankItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.imgHead.mask = this.imgHeadMask
    },
    e.prototype.dataChanged = function() {
        var t = this.data;
        this.lbRank.text = t.rownum || "无",
        this.lbName.text = t.userName,
        this.lbScore.text = t.score || 0,
        Util.getTextureForWebGLByURL(t.avatar, this.imgHead)
    },
    e
} (eui.ItemRenderer);
__reflect(RankItem.prototype, "RankItem");
var RankScItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new RankScItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.dataChanged = function() {
        var t = this.data;
        this.lbRank.text = t.ranking || "无",
        this.lbName.text = t.school || "社会群众",
        this.lbNum.text = t.userCount || 0,
        this.lbScore.text = t.scoreSum || 0
    },
    e
} (eui.ItemRenderer);
__reflect(RankScItem.prototype, "RankScItem");
var TimuItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.idx = 0,
        e.skinName = new TimuItemSkin,
        e.touchChildren = !1,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.updateView("")
    },
    e.prototype.updateView = function(t) {
        this.lbTxt.text = t,
        this.imgBg.source = "ti_item_png",
        this.imgIcon.visible = !1
    },
    e.prototype.showRightItem = function() {
        this.imgBg.source = "ti_green_png"
    },
    e.prototype.showErrItem = function() {
        this.imgBg.source = "ti_red_png"
    },
    e.prototype.showRight = function() {
        this.imgIcon.source = "gou_png",
        this.imgIcon.visible = !0
    },
    e.prototype.showErr = function() {
        this.imgIcon.source = "cha_png",
        this.imgIcon.visible = !0
    },
    e
} (eui.Component);
__reflect(TimuItem.prototype, "TimuItem");
var WinnerItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new WinnerItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.imgHead.mask = this.imgHeadMask
    },
    e.prototype.dataChanged = function() {
        var t = this.data,
        e = this.itemIndex + 1;
        Util.getTextureForWebGLByURL(t.avatar, this.imgHead),
        this.lbName.text = t.nickName,
        this.lbScore.text = t.level,
        this.lbRank.text = e + "",
        3 >= e ? (this.imgRank.visible = !0, this.imgRank.source = "rank" + e + "_png") : this.imgRank.visible = !1
    },
    e
} (eui.ItemRenderer);
__reflect(WinnerItem.prototype, "WinnerItem");
var Bg = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new BgSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this);
        for (var e = 0; e < this.dots.numChildren; e++) {
            var n = this.dots.getChildAt(e);
            n.name = e + "",
            UIUtils.addButtonScaleEffects(n, !0)
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
        AnimUtil.timeScaleTweenGroup(this.anim, 6),
        AnimUtil.loopTweenGroup(this.anim),
        this.anim.play(0),
        AnimUtil.timeScaleTweenGroup(this.anim2, 5),
        AnimUtil.loopTweenGroup(this.anim2),
        this.anim2.play(0);
        for (var e = 0; 6 >= e; e++) {
            var i = this["pig" + e];
            i.visible = !1,
            AnimUtil.swingLine(i, Util.rang(500, 1200), 0, Util.rang(3, 6) * Util.bit(Math.random() - .5))
        }
        if (1 == Const.initData.lucky && Const.initData.todayNum > 0 && Const.initData.pigCount <= 5) {
            var o = Math.min(Const.initData.todayNum, 5 - Const.initData.pigCount, 5);
            if (o > 0) {
                o = Util.rang(1, o),
                console.log("随机" + o + "只小猪");
                for (var r = Util.getRandomArray(o, 7), a = 0, s = r; a < s.length; a++) {
                    var l = s[a];
                    if (6 >= l) {
                        var i = this["pig" + l];
                        i.visible = !0
                    }
                }
            }
        }
    },
    e.prototype.onTouchTap = function(t) {
        if (t.target.parent == this.groupPig) this.randomBox(t.target);
        else if (t.target.name) {
            if (Const.isActiveEnd) return void ToastTip.popTip("活动已结束");
            var e = +t.target.name,
            n = Const.initData.level || 0;
            e == n - 1 ? Const.startGame() : n - 1 > e ? ToastTip.popTip("已通关") : ToastTip.popTip("请先通关第" + e + "关")
        }
    },
    e.prototype.randomBox = function(t) {
        if (Const.isActiveEnd) return void ToastTip.popTip("活动已结束");
        var e = window.netCardScore;
        e(function(e) {
            0 == e.code ? (t.visible = !1, Const.initData.score += 50, EventManager.instance.dispatch(EventName.INIT_DATA_UPDATE), UIManager.instance.popPanel(PigShowPanel)) : ToastTip.popTip(e.msg || "很遗憾，未获得积分")
        })
    },
    e.prototype.updateDots = function() {
        var t = Const.initData.level || 0;
        this.imgCurr.visible = !1,
        egret.Tween.removeTweens(this.imgCurr);
        for (var e = 0; e < this.dots.numChildren; e++) {
            var n = this.dots.getChildAt(e);
            t - 1 > e ? n.source = "s1_dot" + (e + 1) + "_png": n.source = "s1_g_dot" + (e + 1) + "_png",
            e == t - 1 && (this.imgCurr.visible = !0, this.imgCurr.x = n.x, this.imgCurr.y = n.y - 25, AnimUtil.swingLine(this.imgCurr, 800, 0, -10))
        }
    },
    e
} (eui.Component);
__reflect(Bg.prototype, "Bg");
var MainScene = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new MainSkin,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        if (t.prototype.createChildren.call(this), AnimUtil.blinkAlpha(this.imgTip, 500), Const.initData.mobile || Const.isLocal || !window.openid ? this.showHelp() : (UIManager.instance.popPanel(CodeInpPanel), EventManager.instance.addEvent(EventName.POP_PANEL_CLOSE,
        function() {
            e.showHelp()
        },
        this)), Const.isActiveEnd) {
            var n = window.netTopSelf;
            n(Const.initData.uid,
            function(t) {
                0 == t.code && (Const.selfTop = t.data)
            });
            var i = window.netOpenAccount;
            i(Const.initData.mobile,
            function(t) {
                0 == t.code && 1 == t.data.status && (Const.isOpenAccount = !0)
            }),
            UIManager.instance.popPanel(ActivityEndPanel)
        }
    },
    e.prototype.showHelp = function() {
        if (Const.fid && +Const.fid > 0 && Const.fid != Const.initData.uid) {
            var t = window.netHelpInfo;
            t(Const.initData.uid, Const.fid,
            function(t) {
                0 == t.code && t.data && 0 === t.data[0] && UIManager.instance.popPanel(HelpShowPanel, t.data[1])
            })
        }
    },
    e.prototype.onTouchTap = function(t) {
        SceneManager.instance.runScene(Scene1)
    },
    e.prototype.destroy = function() {
        egret.Tween.removeTweens(this.imgTip)
    },
    e
} (SceneBase);
__reflect(MainScene.prototype, "MainScene");
var Scene1 = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = new Scene1Skin,
        e.showAudioButton = !1,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this);
        var e = Const.WIN_W / Const.DESGIN_W;
        e > 1 && (this.comBg.scaleX = this.comBg.scaleY = e),
        UIUtils.addButtonScaleEffects(this.btnRule, !0),
        UIUtils.addButtonScaleEffects(this.btnGameRule, !0),
        UIUtils.addButtonScaleEffects(this.btnRank, !0),
        UIUtils.addButtonScaleEffects(this.btnRankSc, !0),
        UIUtils.addButtonScaleEffects(this.btnShare, !0),
        UIUtils.addButtonScaleEffects(this.btnRule2, !0),
        UIUtils.addButtonScaleEffects(this.btnAwardList, !0),
        UIUtils.addButtonScaleEffects(this.btnAwardRule, !0),
        UIUtils.addButtonScaleEffects(this.btnCard, !0),
        this.lbName.text = Const.initData.nickName,
        this.imgHead.mask = this.imgHeadMask,
        Util.getTextureForWebGLByURL(Const.initData.avatar, this.imgHead),
        this.updateView();
        var n = Const.isActiveEnd;
        if (this.groupMain.visible = !n, this.groupMain2.visible = n, !n) {
            var i = new Date(Const.initData.activityEndTime.replace(/-/g, "/")),
            o = i.getTime() - Date.now(),
            r = Math.ceil(o / 24 / 36e5);
            this.lbDay.text = "剩余活动天数 " + r + " 天"
        }
        EventManager.instance.addEvent(EventName.INIT_DATA_UPDATE, this.updateView, this)
    },
    e.prototype.updateView = function() {
        var t = Const.initData.count || 0;
        this.lbCount.text = "剩余次数 " + t + " 次",
        this.lbScore.text = "累计积分：" + (Const.initData.score || 0),
        this.barNum.maximum = 5,
        this.barNum.value = t,
        this.comBg.updateDots()
    },
    e.prototype.onTouchTap = function(t) {
        var e = t.target;
        e == this.btnRule || e == this.btnRule2 ? UIManager.instance.popPanel(RulePanel) : e == this.btnGameRule ? UIManager.instance.popPanel(GameRulePanel) : e == this.btnAwardRule ? UIManager.instance.popPanel(RewardRulePanel) : e == this.btnRankSc ? UIManager.instance.popPanel(RankScPanel) : e == this.btnRank ? UIManager.instance.popPanel(RankPanel) : e == this.btnShare ? UIManager.instance.popPanel(HelpListPanel) : e == this.btnAwardList ? UIManager.instance.popPanel(WinnerPanel) : e == this.btnCard && UIManager.instance.popPanel(BookPanel)
    },
    e.prototype.destroy = function() {
        EventManager.instance.removeEvent(EventName.INIT_DATA_UPDATE, this.updateView, this),
        UIUtils.removeButtonScaleEffects(this.btnRule, !0),
        UIUtils.removeButtonScaleEffects(this.btnGameRule, !0),
        UIUtils.removeButtonScaleEffects(this.btnRank, !0),
        UIUtils.removeButtonScaleEffects(this.btnRankSc, !0),
        UIUtils.removeButtonScaleEffects(this.btnShare, !0),
        UIUtils.removeButtonScaleEffects(this.btnRule2, !0),
        UIUtils.removeButtonScaleEffects(this.btnAwardList, !0),
        UIUtils.removeButtonScaleEffects(this.btnAwardRule, !0),
        UIUtils.removeButtonScaleEffects(this.btnCard, !0)
    },
    e
} (SceneBase);
__reflect(Scene1.prototype, "Scene1");
var AnimUtil = function() {
    function t() {}
    return t.hide = function(t, e, n, i) {
        void 0 === n && (n = 0),
        void 0 === i && (i = !0),
        egret.Tween.get(t).wait(n).to({
            alpha: 0
        },
        e).call(function() {
            i && UIUtils.removeSelf(t)
        })
    },
    t.show = function(t, e, n, i) {
        return void 0 === n && (n = 0),
        void 0 === i && (i = !0),
        t ? (t.visible = !0, i && (t.alpha = 0), egret.Tween.get(t).wait(n).to({
            alpha: 1
        },
        e), e + n) : void 0
    },
    t.showHide = function(t, e, n, i, o) {
        return t ? (t.visible = !0, t.alpha = 0, egret.Tween.get(t).wait(e).to({
            alpha: 1
        },
        n).wait(i).to({
            alpha: 0
        },
        o), e + n + i + o) : void 0
    },
    t.blinkAlpha = function(t, e, n, i, o, r) {
        function a(s) {
            s == i && o--,
            egret.Tween.get(t).to({
                alpha: s
            },
            e).call(function() {
                o > 0 ? a(s == n ? i: n) : r && r()
            })
        }
        void 0 === n && (n = 0),
        void 0 === i && (i = 1),
        void 0 === o && (o = Number.MAX_VALUE),
        void 0 === r && (r = null),
        a(n)
    },
    t.blink = function(t, e, n, i) {
        function o() {
            n--,
            egret.Tween.get(t).wait(.67 * e).set({
                alpha: 0
            }).wait(.33 * e).set({
                alpha: 1
            }).call(function() {
                n > 0 ? o() : i && i()
            })
        }
        void 0 === n && (n = Number.MAX_VALUE),
        void 0 === i && (i = null),
        o()
    },
    t.frame = function(t, e, n, i, o, r, a, s, l) {
        function c() {
            if (t.frameAnim) {
                if (t.source = e + u + p, h) {
                    if (u--, i > u) {
                        if (!r) return void(l && l());
                        u += 2,
                        h = !1
                    }
                } else if (u++, u > o) if (r) s ? (u -= 2, h = !0) : u = i;
                else {
                    if (!s) return void(l && l());
                    u -= 2,
                    h = !0
                }
                var a = egret.setTimeout(c, t, n);
                t.animDelayId = a
            }
        }
        void 0 === r && (r = !0),
        void 0 === a && (a = -1),
        void 0 === s && (s = !1),
        void 0 === l && (l = null),
        this.stopFrame(t);
        var u = a;
        0 > u && (u = i),
        t.frameAnim = !0;
        var h = !1,
        p = "_png";
        0 == e.indexOf("jpg:") && (e = e.replace("jpg:", ""), p = "_jpg"),
        c()
    },
    t.stopFrame = function(t) {
        t.frameAnim = !1,
        egret.clearTimeout(t.animDelayId)
    },
    t.swing = function(t, e, n, i, o, r) {
        void 0 === o && (o = !0),
        void 0 === r && (r = !0),
        t.rotation = n,
        o ? egret.Tween.get(t, {
            loop: r
        }).to({
            rotation: i
        },
        e).to({
            rotation: n
        },
        e) : egret.Tween.get(t, {
            loop: r
        }).to({
            rotation: i
        },
        e)
    },
    t.swingLine = function(t, e, n, i) {
        var o = t.x - n,
        r = t.y - i,
        a = t.x + n,
        s = t.y + i;
        egret.Tween.get(t).to({
            x: o,
            y: r
        },
        e / 2).call(function() {
            egret.Tween.get(t, {
                loop: !0
            }).to({
                x: a,
                y: s
            },
            e).to({
                x: o,
                y: r
            },
            e)
        })
    },
    t.shakeLine = function(e, n, i, o, r, a, s, l) {
        function c() {
            egret.Tween.get(e).to({
                x: p,
                y: d
            },
            n / 4).to({
                x: u,
                y: h
            },
            n / 2).to({
                x: f,
                y: g
            },
            n / 4).call(function() {
                v--,
                v > 0 ? c() : egret.Tween.get(e).wait(s).call(function() {
                    a--,
                    a > 0 ? t.shakeLine(e, n, i, o, r, a, s, l) : l && l()
                })
            })
        }
        void 0 === a && (a = 1),
        void 0 === s && (s = 0),
        void 0 === l && (l = null);
        var u = e.x - i,
        h = e.y - o,
        p = e.x + i,
        d = e.y + o,
        f = e.x,
        g = e.y,
        v = r;
        c()
    },
    t.circle = function(t, e, n) {
        void 0 === n && (n = 1),
        egret.Tween.get(t, {
            loop: !0
        }).to({
            rotation: 360 * n
        },
        e)
    },
    t.scale = function(t, e, n, i, o, r) {
        void 0 === n && (n = 0),
        void 0 === i && (i = 1),
        void 0 === o && (o = !0),
        void 0 === r && (r = !0);
        var a = t.scaleX < 0 ? -1 : 1,
        s = t.scaleY < 0 ? -1 : 1;
        r ? egret.Tween.get(t, {
            loop: o
        }).set({
            scaleX: n * a,
            scaleY: n * s
        },
        t).to({
            scaleX: i * a,
            scaleY: i * s
        },
        e).to({
            scaleX: n * a,
            scaleY: n * s
        },
        e) : egret.Tween.get(t, {
            loop: o
        }).set({
            scaleX: n * a,
            scaleY: n * s
        },
        t).to({
            scaleX: i * a,
            scaleY: i * s
        },
        e)
    },
    t.typer = function(t, e, n, i) {
        function o() {
            var i = Date.now() - s,
            r = Math.round(i / n * e.length),
            a = e.substr(0, r);
            t.text = a,
            r >= e.length || egret.setTimeout(o, this, 33)
        }
        function r() {
            a++;
            var n = e.substr(0, a);
            t.text = n,
            a >= e.length || egret.setTimeout(r, this, i)
        }
        void 0 === i && (i = -1),
        t.text = "";
        var a = 0,
        s = Date.now();
        n > 0 ? o() : r()
    },
    t.timeScaleTweenGroup = function(t, e) {
        void 0 === e && (e = 1),
        t.items.forEach(function(t) {
            t.paths.forEach(function(t) {
                t.duration && (t.duration *= e)
            })
        })
    },
    t.loopTweenGroup = function(t) {
        for (var e in t.items) t.items[e].props = {
            loop: !0
        }
    },
    t.initProps = function(t) {
        for (var e = 0,
        n = t.items; e < n.length; e++) for (var i = n[e], o = i.target, r = i.paths, a = 0, s = r; a < s.length; a++) {
            var l = s[a];
            if (l instanceof egret.tween.Set) {
                var c = l.props;
                for (var u in c) o[u] = c[u];
                break
            }
        }
    },
    t
} ();
__reflect(AnimUtil.prototype, "AnimUtil");
var Base64Texture = function() {
    function t() {}
    return t.getTexture = function(t, e) {
        var n = new Image;
        n.avaliable = !0,
        n.onload = function() {
            var t = new egret.Texture,
            i = new egret.BitmapData(n);
            t._setBitmapData(i),
            e(t)
        },
        n.src = t
    },
    t
} ();
__reflect(Base64Texture.prototype, "Base64Texture");
var DomBindVo = function() {
    function t(t, e, n) {
        this.isRunning = !0,
        this.forceRunning = !1,
        this.egretTar = t,
        this.domTar = e,
        this.isAppend = n
    }
    return t
} ();
__reflect(DomBindVo.prototype, "DomBindVo");
var DomBindUtil = function() {
    function t() {}
    return t.init = function() {
        this.tick()
    },
    t.initInput = function(e) {
        var n = this;
        this.hasEl = !1,
        $(e).on("focus",
        function(e) {
            n.hasEl = !0,
            t.currDomInp = e.currentTarget,
            Const.stage.once(egret.TouchEvent.TOUCH_BEGIN,
            function() {
                t.currDomInp && $(t.currDomInp).blur()
            },
            n),
            Const.isAndroid && EventManager.instance.dispatch(EventName.DOM_INPUT_FOCUS, n.getVo(t.currDomInp).egretTar)
        }),
        $(e).on("blur",
        function(e) {
            n.hasEl = !1,
            t.currDomInp = null;
            var i = e.currentTarget,
            o = t.getVo(i);
            o && (o.egretTar.text = i.value, setTimeout(function() {
                this.hasEl || window.scrollTo(0, 0)
            },
            50))
        })
    },
    t.getVo = function(t) {
        for (var e = 0,
        n = this.arr; e < n.length; e++) {
            var i = n[e];
            if (i.domTar == t || i.egretTar == t) return i
        }
        return null
    },
    t.tick = function() {
        requestAnimationFrame(this.tick.bind(this));
        for (var t = 0,
        e = this.arr; t < e.length; t++) {
            var n = e[t]; (n.isRunning || n.forceRunning) && this.layoutDom(n.egretTar, n.domTar, n.isAppend)
        }
    },
    t.layoutDom = function(t, e, n) {
        var i = t.parent.localToGlobal(t.x - t.anchorOffsetX, t.y - t.anchorOffsetY),
        o = document.getElementsByTagName("canvas")[0];
        if (n) {
            var r = o.width / Const.WIN_W;
            e.style.width = t.width * r + "px",
            e.style.height = t.height * r + "px";
            var a = i.x * r,
            s = i.y * r;
            e.style.webkitTransform = "translate(" + a + "px," + s + "px)",
            e.style.transform = "translate(" + a + "px," + s + "px)",
            e.style.fontSize = e.style.height
        } else {
            var l = o.getBoundingClientRect(),
            c = l.width / Const.WIN_W,
            u = 1;
            e.style.webkitTransformOrigin = "0% 0%",
            e.style.transformOrigin = "0% 0%",
            e.style.webkitTransform = "matrix(" + 1 / u + ", 0, 0, " + 1 / u + ", 0, 0)",
            e.style.transform = "matrix(" + 1 / u + ", 0, 0, " + 1 / u + ", 0, 0)";
            var a = i.x * c + l.left,
            s = i.y * c + l.top;
            e.style.left = a + "px";
            var h = document.documentElement.scrollTop || document.body.scrollTop || scrollY || 0;
            e.style.top = s + h + "px";
            var p = (Const.WIN_W / Const.WIN_H, t.width * c * u),
            d = t.height * c * u;
            if (e.style.width = p + "px", e.style.height = d + "px", e.style.right = "initial", e.style.marginLeft = "initial", t.width == Const.WIN_W && egret.Capabilities.isMobile) return e.style.width = "100%",
            void(e.style.left = "0px");
            if ("VIDEO" == e.tagName && egret.Capabilities.isMobile) return e.style.left = "50%",
            e.style.right = "50%",
            void(e.style.marginLeft = -p / 2 + "px")
        }
    },
    t.bind = function(t, e, n) {
        void 0 === n && (n = !0);
        for (var i = 0,
        o = this.arr; i < o.length; i++) {
            var r = o[i];
            if (r.domTar == e) return void console.warn("已经被绑定过了" + e.id)
        }
        if (this.arr.push(new DomBindVo(t, e, n)), n) {
            var a = document.getElementById("StageDelegateDiv");
            a.appendChild(e)
        }
        e.style.display = "block"
    },
    t.unbind = function(t) {
        for (var e = 0,
        n = this.arr; e < n.length; e++) {
            var i = n[e];
            if (i.domTar == t || i.egretTar == t) return Util.arrayRemove(i, this.arr),
            void(i.domTar.style.display = "none")
        }
    },
    t.pause = function(t) {
        for (var e = 0,
        n = this.arr; e < n.length; e++) {
            var i = n[e];
            if (i.domTar == t || i.egretTar == t) return void(i.isRunning = !1)
        }
    },
    t.resume = function(t) {
        for (var e = 0,
        n = this.arr; e < n.length; e++) {
            var i = n[e];
            if (i.domTar == t || i.egretTar == t) return void(i.isRunning = !0)
        }
    },
    t.bindInput = function(e) {
        function n() {
            t.pause(e),
            egret.clearInterval(l),
            i.parentNode && (i.style.display = "block", e.visible = !1)
        }
        if (egret.Capabilities.isMobile) {
            if (this.getVo(e)) return void console.warn("input已经被绑定过了");
            var i = document.createElement("input");
            e.multiline && (i = document.createElement("textarea")),
            document.body.appendChild(i),
            i.className = "dom_inp",
            i.value = e.text,
            e.touchEnabled = !1,
            e.text = "1",
            i.style.fontSize = innerWidth / Const.WIN_W * e.size + "px",
            i.style.color = "#" + e.textColor.toString(16),
            e.text = i.value,
            i.style.textAlign = e.textAlign,
            i.style.verticalAlign = e.verticalAlign,
            i.setAttribute("placeholder", e.prompt || ""),
            i.setAttribute("type", e.inputType),
            e.maxChars && i.setAttribute("maxlength", e.maxChars + ""),
            e.restrict && i.setAttribute("pattern", e.restrict),
            this.bind(e, i, !1),
            i.style.display = "none";
            var o = 0,
            r = 0,
            a = i.style.left + i.style.top + i.style.width + i.style.height,
            s = Date.now(),
            l = egret.setInterval(function() {
                if (o++, Date.now() - s > 800) return void n();
                var t = i.style.left + i.style.top + i.style.width;
                return t == a ? r++:(a = t, r = 0),
                o > 10 && r > 3 ? void n() : void 0
            },
            this, 1);
            return this.getVo(i).delayId = l,
            this.initInput(i),
            i
        }
    },
    t.unbindInput = function(t) {
        for (var e = 0,
        n = this.arr; e < n.length; e++) {
            var i = n[e];
            if (i.egretTar == t) {
                i.delayId && egret.clearInterval(i.delayId),
                $(i.domTar).remove(),
                i.egretTar.visible = !0,
                Util.arrayRemove(i, this.arr);
                break
            }
        }
    },
    t.arr = [],
    t.hasEl = !1,
    t
} ();
__reflect(DomBindUtil.prototype, "DomBindUtil");
var FixTouchUtil = function() {
    function t() {}
    return t.fix = function(t) {
        t.hasEventListener(egret.TouchEvent.TOUCH_BEGIN) || (this.currTar = t, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), t.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this))
    },
    t.release = function(t) {
        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
        t.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    },
    t.onTouchBegin = function(t) {
        this.touchTarget = t.target,
        this.touchPos = new egret.Point(t.stageX, t.stageY)
    },
    t.onTouchEnd = function(t) {
        if (t.target == this.touchTarget) {
            var e = new egret.Point(t.stageX, t.stageY);
            egret.Point.distance(e, this.touchPos) < 20 && this.currTar.onTouchTap2(this.touchTarget)
        }
    },
    t
} ();
__reflect(FixTouchUtil.prototype, "FixTouchUtil");
var FontUtil = function() {
    function t() {}
    return t.setColor = function(t, e) {
        return '<font color="' + e + '">' + t + "</font>"
    },
    t.setSize = function(t, e) {
        return '<font size="' + e + '">' + t + "</font>"
    },
    t.setColorSize = function(t, e, n) {
        return '<font color="' + n + '" size="' + e + '">' + t + "</font>"
    },
    t.html = function(t) {
        return (new egret.HtmlTextParser).parser(t)
    },
    t
} ();
__reflect(FontUtil.prototype, "FontUtil");
var HashMap = function() {
    function t() {
        this.data = {}
    }
    return t.prototype.set = function(t, e) {
        this.data[t] = e
    },
    t.prototype.put = function(t, e) {
        this.set(t, e)
    },
    t.prototype.add = function(t, e) {
        this.set(t, e)
    },
    t.prototype.get = function(t, e) {
        return 1 == arguments.length ? this.data[t] : this.has(t) ? this.data[t] : e
    },
    t.prototype.addNum = function(t, e) {
        if (isNumber(e)) {
            var n = this.get(t, 0) + e;
            this.put(t, n)
        }
    },
    t.prototype.has = function(t) {
        return this.data.hasOwnProperty(t)
    },
    t.prototype.remove = function(t) {
        this.data[t] = void 0,
        delete this.data[t]
    },
    t.prototype.clear = function() {
        this.data = {}
    },
    t.prototype.keys = function() {
        var t = [];
        for (var e in this.data) t.push(e);
        return t
    },
    t.prototype.intKeys = function() {
        var t = [];
        for (var e in this.data) t.push(int(e));
        return t
    },
    t.prototype.values = function() {
        var t = [];
        for (var e in this.data) t.push(this.data[e]);
        return t
    },
    t.prototype.eachValue = function(t, e) {
        for (var n in this.data) t.call(e, this.data[n])
    },
    t.prototype.forEach = function(t, e) {
        for (var n in this.data) t.call(e, n, this.data[n])
    },
    t.prototype.isEmpty = function() {
        for (var t in this.data) return ! 1;
        return ! 0
    },
    t.prototype.reset = function(t) {
        t && (this.data = t.data || t)
    },
    t.prototype.parse = function(t) {
        if (t) {
            var e = JSON.parse(t);
            this.data = e.data
        }
    },
    t.prototype.toString = function() {
        return JSON.stringify(this.data)
    },
    t
} ();
__reflect(HashMap.prototype, "HashMap");
var MCUtil = function() {
    function t() {}
    return t.getMc = function(t, e, n) {
        function i(e) {
            var n = RES.getRes(t + "_png"),
            i = RES.getRes(t + "_json"),
            o = new egret.MovieClipDataFactory(i, n),
            r = new egret.MovieClip(o.generateMovieClipData(e));
            return r.fac = o,
            r.touchEnabled = !1,
            r
        }
        var o = this;
        void 0 === e && (e = null),
        void 0 === n && (n = "");
        var r = RES.getRes(t + "_png");
        if (r) {
            var a = i(n);
            return e && e(a),
            a
        }
        return RES.getResAsync(t + "_png",
        function() {
            RES.getResAsync(t + "_json",
            function() {
                e(i(n))
            },
            o)
        },
        this),
        null
    },
    t.changeAction = function(t, e) {
        var n = t.fac;
        t.movieClipData = n.generateMovieClipData(e)
    },
    t
} ();
__reflect(MCUtil.prototype, "MCUtil");
var ShakeUtil = function() {
    function t() {}
    return t.start = function(t) {
        this.isEventInited && (this.isEventInited = !0, window.addEventListener("devicemotion", this.deviceMotionHandler, !1)),
        this.last_update = Date.now(),
        this.last_x = 0,
        this.last_y = 0,
        this.last_z = 0,
        this.isAccWork = !0,
        this.shakeOverCallback = t
    },
    t.stop = function() {
        this.isAccWork = !1
    },
    t.deviceMotionHandler = function(t) {
        if (this.isAccWork) {
            var e = t.accelerationIncludingGravity,
            n = Date.now();
            if (n - this.last_update > 10) {
                var i = n - this.last_update;
                this.last_update = n,
                this.x = e.x,
                this.y = e.y,
                this.z = e.z;
                var o = Math.abs(this.x + this.y + this.z - this.last_x - this.last_y - this.last_z) / i * 1e4;
                o > this.SHAKE_THRESHOLD && this.last_x != this.last_y && this.last_x != this.last_z && this.last_y != this.last_z && this.shakeOk(),
                this.last_x = this.x,
                this.last_y = this.y,
                this.last_z = this.z
            }
        }
    },
    t.shakeOk = function() {
        this.isAccWork && (egret.log("----------------"), this.isAccWork = !1, this.shakeOverCallback && this.shakeOverCallback(), this.shakeOverCallback = null)
    },
    t.isEventInited = !1,
    t.isAccWork = !1,
    t.SHAKE_THRESHOLD = 1500,
    t.last_update = 0,
    t.last_x = 0,
    t.last_y = 0,
    t.last_z = 0,
    t.shakeOverCallback = null,
    t
} ();
__reflect(ShakeUtil.prototype, "ShakeUtil");
var TimeFormat = function() {
    function t() {}
    return t.showDDHH = function(t) {
        var e = int(t / 864e5);
        t %= 864e5;
        var n = int(t / 36e5);
        return 0 > e ? n + "小时": e + "天" + n + "小时"
    },
    t.format = function(t, e) {
        var n = t.getFullYear(),
        i = t.getMonth() + 1,
        o = t.getDate();
        return e = e.replace("YYYY", Util.fullNumberShow(n, 2)),
        e = e.replace("MM", Util.fullNumberShow(i, 2)),
        e = e.replace("DD", Util.fullNumberShow(o, 2))
    },
    t.showHHMMSS = function(t) {
        var e = int(t / 36e5);
        t %= 36e5;
        var n = int(t / 6e4);
        t %= 6e4;
        var i = int(t / 1e3);
        return (10 > e ? "0" + e: e) + ":" + (10 > n ? "0" + n: n) + ":" + (10 > i ? "0" + i: i)
    },
    t.showDayOrDate = function(t) {
        var e = new Date(DateTimer.instance.now),
        n = new Date(t),
        i = e.getDate(),
        o = n.getDate(),
        r = DateTimer.instance.now - t,
        a = n.getHours(),
        s = n.getMinutes(),
        l = n.getSeconds(),
        c = "";
        if (864e5 > r && i == o) c = "今天 " + (10 > a ? "0" + a: a) + ":" + (10 > s ? "0" + s: s) + ":" + (10 > l ? "0" + l: l);
        else if (1728e5 > r && i == o + 1) c = "昨天 " + (10 > a ? "0" + a: a) + ":" + (10 > s ? "0" + s: s) + ":" + (10 > l ? "0" + l: l);
        else {
            var u = n.getFullYear(),
            h = n.getMonth();
            c = u + "-" + h + "-" + o + " " + (10 > a ? "0" + a: a) + ":" + (10 > s ? "0" + s: s) + ":" + (10 > l ? "0" + l: l)
        }
        return c
    },
    t
} ();
__reflect(TimeFormat.prototype, "TimeFormat");
var UIUtils = function() {
    function t() {}
    return t.addButtonScaleEffects = function(e, n) {
        if (void 0 === n && (n = !1), e) if (n) e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onButtonTouchBegan, e);
        else if (egret.is(e, egret.getQualifiedClassName(eui.Button))) e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onButtonTouchBegan, e);
        else for (var i = e.numChildren,
        o = 0; i > o; o++) {
            var r = e.getChildAt(o);
            t.addButtonScaleEffects(r)
        }
    },
    t.onButtonTouchBegan = function(t) {
        var e = t.target;
        egret.Tween.get(e).to({
            scaleX: 1.05,
            scaleY: 1.05
        },
        50).to({
            scaleX: 1,
            scaleY: 1
        },
        50);
        var n = e,
        i = n.source;
        if (i && i.indexOf("_card") > 0) {
            var o = e.group;
            if (o) for (var r = 0,
            a = o; r < a.length; r++) {
                var s = a[r];
                if (s == n) {
                    var l = i.replace("_card", "_1card");
                    n.source = l
                } else {
                    var c = s.source,
                    l = c.replace("_1card", "_card");
                    s.source = l
                }
            }
        }
    },
    t.removeButtonScaleEffects = function(e, n) {
        if (void 0 === n && (n = !1), e) if (n) e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onButtonTouchBegan, e);
        else if (egret.is(e, egret.getQualifiedClassName(eui.Button))) e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onButtonTouchBegan, e);
        else for (var i = e.numChildren,
        o = 0; i > o; o++) {
            var r = e.getChildAt(o);
            t.removeButtonScaleEffects(r)
        }
    },
    t.addShortTouch = function(e, n, i) {
        e.shortTouchCallback = n,
        e.shortTouchEndCallback = i,
        e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t._onShortTouchBegan, e)
    },
    t._onShortTouchBegan = function(e) {
        var n = e.currentTarget;
        n.shortTouchCallback && n.shortTouchCallback(e),
        Const.stage.once(egret.TouchEvent.TOUCH_END, t._onShortTouchEnd, this, !0, Number.MAX_VALUE),
        Const.stage.once(egret.TouchEvent.TOUCH_CANCEL, t._onShortTouchEnd, this, !0, Number.MAX_VALUE)
    },
    t._onShortTouchEnd = function(e) {
        e.stopImmediatePropagation(),
        e.stopPropagation();
        var n = this;
        n.shortTouchEndCallback && n.shortTouchEndCallback(e),
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_END, t._onShortTouchEnd, this, !0),
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, t._onShortTouchEnd, this, !0)
    },
    t.addLongTouch = function(e, n, i) {
        e.longTouchCallback = n,
        e.longTouchEndCallback = i,
        e.longTouchTrigger = !1,
        e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t._onLongTouchBegan, e)
    },
    t._onLongTouchBegan = function(e) {
        var n = this,
        i = e.currentTarget;
        Const.stage.once(egret.TouchEvent.TOUCH_END, t._onLongTouchEnd, this, !0, Number.MAX_VALUE),
        egret.clearTimeout(t.longTouchDelayId),
        t.longTouchDelayId = egret.setTimeout(function() {
            i.longTouchTrigger = !0,
            i.longTouchCallback && i.longTouchCallback(e),
            i.once(egret.TouchEvent.TOUCH_TAP, t._stopTapEvent, n, !0, Number.MAX_VALUE)
        },
        this, 350)
    },
    t._stopTapEvent = function(t) {
        t.stopImmediatePropagation(),
        t.stopPropagation()
    },
    t._onLongTouchEnd = function(e) {
        e.stopImmediatePropagation(),
        e.stopPropagation();
        var n = this;
        n.longTouchTrigger ? n.longTouchEndCallback && n.longTouchEndCallback(e) : egret.clearTimeout(t.longTouchDelayId),
        n.longTouchTrigger = !1
    },
    t.removeLongTouch = function(e) {
        e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, t._onLongTouchBegan, e)
    },
    t.removeSelf = function(t) {
        t && t.parent && t.parent.removeChild(t)
    },
    t
} ();
__reflect(UIUtils.prototype, "UIUtils");
var Util = function() {
    function t() {}
    return t.bit = function(t) {
        return t > 0 ? 1 : 0 > t ? -1 : 0
    },
    t.rang = function(t, e) {
        return Math.round(Math.random() * (e - t) + t)
    },
    t.isRang = function(t, e, n) {
        return t >= e && n >= t
    },
    t.limit = function(t, e, n) {
        return Math.max(e, Math.min(n, t))
    },
    t.stringMax = function(t, e) {
        return t ? t.length <= e ? t: t.substr(0, e - 1) + "...": ""
    },
    t.getRandomArray = function(t, e) {
        var n = [];
        if (isNumber(e)) for (var i = 0; e > i; i++) n.push(i);
        else for (var i = 0; i < e.length; i++) n.push(e[i]);
        return this.randomArr(n),
        n.length = t,
        n
    },
    t.randomArr = function(t) {
        for (var e = 0; 5 > e; e++) t.sort(function() {
            return Math.random() - .5
        });
        return t
    },
    t.copyArray = function(t, e) {
        for (var n = [], i = 0; e > i; i++) for (var o = 0,
        r = t; o < r.length; o++) {
            var a = r[o];
            n.push(a)
        }
        return n
    },
    t.getContainsArray = function(e, n, i) {
        for (var o = [], r = t.getRandomArray(n, n), a = 0, s = 0, l = e; s < l.length; s++) {
            var c = l[s];
            o.push(c),
            a++
        }
        for (var u = 0,
        h = r; u < h.length; u++) {
            var c = h[u];
            i > a && !this.isElinArr(c, e) && (o.push(c), a++)
        }
        return o = this.getRandomArray(i, o)
    },
    t.randomByWeight = function(e) {
        for (var n = 0,
        i = e.length,
        o = 0; i > o; o++) n += e[o];
        var r = t.rang(0, n - 1);
        n = 0;
        for (var o = 0; i > o; o++) if (n += e[o], n > r) return o;
        return 0
    },
    t.ang2rad = function(t) {
        return t / 180 * Math.PI
    },
    t.rad2ang = function(t) {
        return t / Math.PI * 180
    },
    t.fullNumberShow = function(t, e) {
        void 0 === e && (e = 2);
        var n = t + "";
        if (n.length >= e) return n;
        var i = "000000000000000000".substr(0, e - n.length);
        return i + n
    },
    t.getBigTimeShow = function(t) {
        var e = Math.round(t / 1e3);
        if (e > 3600) {
            var n = int(e / 3600);
            e %= 3600;
            var i = Math.round(e / 60);
            return n + "H" + i + "M"
        }
        if (e > 60) {
            var i = int(e / 60);
            return e %= 60,
            i + "M" + e + "S"
        }
        return e + "S"
    },
    t.arrayRemove = function(t, e) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    t.arrayAddSet = function(t, e) {
        var n = e.indexOf(t); - 1 == n && e.push(t)
    },
    t.isElinArr = function(t, e) {
        return e.indexOf(t) > -1
    },
    t.isArrCrossing = function(e, n) {
        for (var i = 0; i < e.length; i++) if (t.isElinArr(e[i], n)) return ! 0;
        return ! 1
    },
    t.copyToClipboardWeb = function(t) {},
    Object.defineProperty(t, "isIOS", {
        get: function() {
            return "ios" == egret.Capabilities.os.toLocaleLowerCase()
        },
        enumerable: !0,
        configurable: !0
    }),
    t.getStringShowLen = function(t) {
        if (!t) return 0;
        for (var e = 0,
        n = 0; n < t.length; n++) e += this.getCharLen(t[n]);
        return Math.ceil(e / 2)
    },
    t.getChar = function(t, e, n) {
        if (void 0 === n && (n = !0), !t) return "";
        if (t.length <= e) return t;
        var i = "",
        o = 2 * e,
        r = 0,
        a = 0,
        s = t.substr(a, 1);
        for (r += this.getCharLen(s); o >= r;) i += s,
        a++,
        s = t.substr(a, 1),
        r += this.getCharLen(s);
        return i == t ? t: i + (n ? "...": "")
    },
    t.getCharLen = function(t) {
        var e = new egret.ByteArray;
        return e.writeUTFBytes(t),
        e.length < 2 ? 1 : 2
    },
    t.layoutDom = function(t, e, n) {
        var i = this;
        void 0 === n && (n = !0);
        var o = e.localToGlobal(0, 0),
        r = document.getElementsByTagName("canvas")[0],
        a = r.width / Const.WIN_W,
        s = document.getElementById("StageDelegateDiv");
        n && s.appendChild(t);
        var l = {
            left: 0,
            top: 0
        };
        s != t.parentNode && (a = innerWidth / Const.WIN_W, l = r.getBoundingClientRect(), console.log(l)),
        e.x > 0 && 0 == o.x && egret.setTimeout(function() {
            i.layoutDom(t, e, !1)
        },
        this, 50),
        t.style.left = o.x * a + l.left + "px",
        t.style.top = o.y * a + l.top + "px",
        t.style.width = e.width * a + "px",
        t.style.height = e.height * a + "px"
    },
    t.layoutIframe = function(t, e) {},
    t.changeLandscap = function(t) {},
    t.updateImageBase64 = function(t, e, n) {
        if (e) {
            var i = e.match(/;base64,/);
            i && i.length > 0 && (e = e.substr(i.index + ";base64,".length)),
            egret.BitmapData.create("base64", e,
            function(e) {
                var i = new egret.Texture;
                i.bitmapData = e,
                t.texture = i,
                n && n(i)
            })
        }
    },
    t.getTextureForWebGLByURL = function(t, e) {
        return __awaiter(this, void 0, void 0,
        function() {
            var n = this;
            return __generator(this,
            function(i) {
                return [2, new Promise(function(i) {
                    return n._cache_webgl_texture[t] ? (e && (e.source = n._cache_webgl_texture[t]), void i(n._cache_webgl_texture[t])) : void fetch(t).then(function(t) {
                        return t.blob()
                    }).then(function(o) {
                        var r = new FileReader;
                        r.onloadend = function() {
                            return __awaiter(n, void 0, void 0,
                            function() {
                                var n, o = this;
                                return __generator(this,
                                function(a) {
                                    switch (a.label) {
                                    case 0:
                                        return n = i,
                                        [4, new Promise(function(n) {
                                            return egret.BitmapData.create("base64", r.result.split(",")[1],
                                            function(i) {
                                                var r = new egret.Texture;
                                                r.bitmapData = i,
                                                e && (e.source = r),
                                                o._cache_webgl_texture[t] = r,
                                                n(r)
                                            })
                                        })];
                                    case 1:
                                        return n.apply(void 0, [a.sent()]),
                                        [2]
                                    }
                                })
                            })
                        },
                        r.readAsDataURL(o)
                    })
                })]
            })
        })
    },
    t._cache_webgl_texture = {},
    t
} ();
__reflect(Util.prototype, "Util");
var SavePic = function() {
    function t() {}
    return t.savePicAtOnce = function(t) {
        var e = new egret.RenderTexture;
        e.drawToTexture(t, new egret.Rectangle(0, 0, int(t.width), int(t.height)));
        var n = e.toDataURL("image/png"),
        i = document.getElementById("code2");
        i.src = n,
        i.style.display = "block",
        e.dispose(),
        Util.layoutDom(i, t);
        var o = $("#main canvas")[0];
        return o.parentNode.appendChild(o),
        o.style.pointerEvents = "none",
        n
    },
    t.release = function(t) {
        void 0 === t && (t = []);
        var e = document.getElementById("code2");
        e.style.display = "none";
        var n = $("#main canvas")[0];
        n.style.pointerEvents = "auto";
        var i = $("#StageDelegateDiv")[0];
        i.parentNode.appendChild(i);
        for (var o = 0,
        r = t; o < r.length; o++) {
            var a = r[o];
            document.getElementById(a).style.display = "none"
        }
    },
    t.setFocusCanvas = function(t) {
        var e = $("#main canvas")[0];
        t ? e.style.pointerEvents = "auto": e.style.pointerEvents = "none"
    },
    t
} ();
__reflect(SavePic.prototype, "SavePic");
var UploadPic = function() {
    function t() {}
    return t.showInputClick = function(t) {
        this.getBase64Callback = t;
        var e = document.getElementById("uploadImg");
        Const.isIos && e.removeAttribute("capture"),
        e.onchange = this.onChang.bind(this),
        e.click()
    },
    t.onChang = function() {
        var t = this,
        e = document.getElementById("uploadImg"),
        n = e.files[0],
        i = /^image\//;
        if (!i.test(n.type)) return void alert("请选择图片类型上传");
        var o = new FileReader;
        o.onload = function() {
            e.value = null,
            t.getOrientation(n,
            function(e) {
                t.getImgData(o.result, e,
                function(e) {
                    t.getBase64Callback && t.getBase64Callback(e)
                })
            })
        },
        o.readAsDataURL(n)
    },
    t.getOrientation = function(t, e) {
        var n = new FileReader;
        n.onload = function() {
            var t = new DataView(n.result);
            if (65496 != t.getUint16(0, !1)) return e( - 2);
            for (var i = t.byteLength,
            o = 2; i > o;) {
                var r = t.getUint16(o, !1);
                if (o += 2, 65505 == r) {
                    if (1165519206 != t.getUint32(o += 2, !1)) return e( - 1);
                    var a = 18761 == t.getUint16(o += 6, !1);
                    o += t.getUint32(o + 4, a);
                    var s = t.getUint16(o, a);
                    o += 2;
                    for (var l = 0; s > l; l++) if (274 == t.getUint16(o + 12 * l, a)) return e(t.getUint16(o + 12 * l + 8, a))
                } else {
                    if (65280 != (65280 & r)) break;
                    o += t.getUint16(o, !1)
                }
            }
            return e( - 1)
        },
        n.readAsArrayBuffer(t.slice(0, 65536))
    },
    t.getImgData = function(t, e, n) {
        var i = this,
        o = new Image;
        o.onload = function() {
            var t, r, a = 0,
            s = o.naturalWidth,
            l = o.naturalHeight,
            c = Math.max(s, l);
            if (c > 2048) {
                var u = Math.min(s, l);
                u = u / c * 2048,
                c = 2048,
                s > l ? (s = c, l = u) : (s = u, l = c)
            }
            var h = document.createElement("canvas");
            h.width = t = s,
            h.height = r = l;
            var p = h.getContext("2d");
            switch (e) {
            case 3:
                a = 180,
                s = -t,
                l = -r;
                break;
            case 6:
                h.width = r,
                h.height = t,
                a = 90,
                s = t,
                l = -r;
                break;
            case 8:
                h.width = r,
                h.height = t,
                a = 270,
                s = -t,
                l = r
            }
            p.rotate(a * Math.PI / 180),
            p.drawImage(o, 0, 0, s, l);
            var d = h.toDataURL("image/png");
            i.autoSizeBase64(d, 566, 645,
            function(t) {
                n(t)
            })
        },
        o.src = t
    },
    t.autoSizeBase64 = function(t, e, n, i) {
        i(t)
    },
    t
} ();
__reflect(UploadPic.prototype, "UploadPic");
var UploadVideo = function() {
    function t() {}
    return t.showInputClick = function(t) {
        this.getFileCallback = t;
        var e = document.getElementById("uploadVideo");
        e.onchange = this.onChang.bind(this),
        e.click()
    },
    t.onChang = function() {
        var t = document.getElementById("uploadVideo"),
        e = t.files[0];
        if (e) {
            console.log("file size", (e.size / 1024 / 1024).toFixed(3) + "M");
            var n = /^video\//;
            return n.test(e.type) ? e.size > 8388608 ? void ToastTip.popTip("视频不能超过8M") : void(this.getFileCallback && this.getFileCallback(e)) : void ToastTip.popTip("请选择视频类型上传")
        }
    },
    t.capturePoster = function(t, e, n) {
        var i = this;
        void 0 === n && (n = 3);
        var o = document.getElementById("video3"),
        r = document.createElement("canvas"),
        a = r.getContext("2d");
        o.src = URL.createObjectURL(t),
        o.play(),
        wx.getNetworkType({
            success: function(t) {
                o.play()
            }
        }),
        Const.isAndroid,
        o.onloadeddata = function(t) {
            console.log("video len:" + o.duration),
            o.currentTime = Util.limit(n, 0, o.duration),
            o.pause();
            var s = o.videoWidth,
            l = o.videoHeight;
            if (Const.isAndroid) s = $(o).width(),
            l = $(o).height();
            else if (o.width = s, o.height = l, s > 400) {
                var c = 400 / s;
                s = 400,
                l = int(c * l)
            }
            r.width = s,
            r.height = l,
            console.log(s, l),
            egret.setTimeout(function() {
                a.drawImage(o, 0, 0, s, l);
                var t = r.toDataURL("image/jpeg");
                e(t),
                Const.isAndroid && DomBindUtil.unbind(o)
            },
            i, Const.isAndroid ? 500 : 200)
        }
    },
    t
} ();
__reflect(UploadVideo.prototype, "UploadVideo");
var VideoPlay = function() {
    function t() {}
    return t.play = function(t, e, n, i) {
        var o = this; - 1 == t.indexOf("?") && (t += WEB_VERSION),
        this.pause();
        var r = document.getElementById(n || "video1");
        e && DomBindUtil.layoutDom(e, r, !1),
        r.src = t,
        r.style.display = "block",
        currPlayingVideo = r,
        r.play(),
        wx.getNetworkType({
            success: function(t) {
                r.play()
            }
        });
        var a = egret.setInterval(function() {
            Const.isAndroid && !o.isPlayed && (Const.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
            function() {
                o.isPlayed || r.play()
            },
            o), Const.stage.addEventListener(egret.TouchEvent.TOUCH_END,
            function() {
                o.isPlayed || r.play()
            },
            o))
        },
        this, 200);
        r.ontimeupdate = function() {
            o.isPlayed = !0,
            r.ontimeupdate = null,
            egret.clearInterval(a),
            r.muted = !1
        },
        r.onended = function() {
            i && i()
        };
        var s = AudioManager.instance.isOpen;
        r.onplay = function() {
            AudioManager.instance.setIsOpen(!1)
        },
        r.onpause = function() {
            AudioManager.instance.setIsOpen(s)
        }
    },
    t.pause = function() {
        for (var t = document.getElementsByTagName("video"), e = 0; e < t.length; e++) {
            var n = t[e];
            n.pause(),
            n.style.display = "none",
            n.style.width = "0",
            n.style.left = "-9999px"
        }
    },
    t.isPlayed = !1,
    t
} ();
__reflect(VideoPlay.prototype, "VideoPlay");
var qr; !
function(t) {
    var e = function() {
        function e(e) {
            this.mode = t.QRMode.MODE_8BIT_BYTE,
            this.data = e,
            this.parsedData = [];
            for (var n = 0,
            i = this.data.length; i > n; n++) {
                var o = [],
                r = this.data.charCodeAt(n);
                r > 65536 ? (o[0] = 240 | (1835008 & r) >>> 18, o[1] = 128 | (258048 & r) >>> 12, o[2] = 128 | (4032 & r) >>> 6, o[3] = 128 | 63 & r) : r > 2048 ? (o[0] = 224 | (61440 & r) >>> 12, o[1] = 128 | (4032 & r) >>> 6, o[2] = 128 | 63 & r) : r > 128 ? (o[0] = 192 | (1984 & r) >>> 6, o[1] = 128 | 63 & r) : o[0] = r,
                this.parsedData.push(o)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
        }
        return e.prototype.getLength = function(t) {
            return this.parsedData.length
        },
        e.prototype.write = function(t) {
            for (var e = 0,
            n = this.parsedData.length; n > e; e++) t.put(this.parsedData[e], 8)
        },
        e
    } ();
    t.QR8bitByte = e,
    __reflect(e.prototype, "qr.QR8bitByte")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function t() {
            this.buffer = [],
            this.length = 0
        }
        return t.prototype.get = function(t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        },
        t.prototype.put = function(t, e) {
            for (var n = 0; e > n; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
        },
        t.prototype.getLengthInBits = function() {
            return this.length
        },
        t.prototype.putBit = function(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++
        },
        t
    } ();
    t.QRBitBuffer = e,
    __reflect(e.prototype, "qr.QRBitBuffer")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function e() {}
        return e.create = function(n, i, o, r, a) {
            if (void 0 === i && (i = 200), void 0 === o && (o = 200), void 0 === r && (r = 0), void 0 === a && (a = 2), !n) return new egret.Sprite;
            var s = {
                width: i,
                height: o,
                correctLevel: t.QRErrorCorrectLevel.H,
                color: r
            },
            l = new t.QRCodeModel(t.QRUtil._getTypeNumber(n, s.correctLevel), s.correctLevel);
            return l.addData(n),
            l.make(),
            e.draw(l, s)
        },
        e.draw = function(t, e) {
            var n = new egret.Sprite,
            e = e,
            i = t.getModuleCount(),
            o = e.width / i,
            r = e.height / i;
            n.graphics.beginFill(16777215),
            n.graphics.drawRect(0, 0, e.width, e.height),
            n.graphics.beginFill(e.color);
            for (var a = 0; i > a; a++) for (var s = 0; i > s; s++) {
                var l = t.isDark(a, s);
                l && n.graphics.drawRect(s * o, a * r, o, r)
            }
            return n.graphics.endFill(),
            n
        },
        e
    } ();
    t.QRCode = e,
    __reflect(e.prototype, "qr.QRCode")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function e(t, e) {
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = [],
            this.typeNumber = t,
            this.errorCorrectLevel = e,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        return e.prototype.addData = function(e) {
            var n = new t.QR8bitByte(e);
            this.dataList.push(n),
            this.dataCache = null
        },
        e.prototype.isDark = function(t, e) {
            if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e]
        },
        e.prototype.getModuleCount = function() {
            return this.moduleCount
        },
        e.prototype.make = function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        e.prototype.makeImpl = function(t, n) {
            this.moduleCount = 4 * this.typeNumber + 17,
            this.modules = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var o = 0; o < this.moduleCount; o++) this.modules[i][o] = null
            }
            this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(t, n),
            this.typeNumber >= 7 && this.setupTypeNumber(t),
            null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, n)
        },
        e.prototype.setupPositionProbePattern = function(t, e) {
            for (var n = -1; 7 >= n; n++) if (! ( - 1 >= t + n || this.moduleCount <= t + n)) for (var i = -1; 7 >= i; i++) - 1 >= e + i || this.moduleCount <= e + i || (n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 2 && 4 >= n && i >= 2 && 4 >= i ? this.modules[t + n][e + i] = !0 : this.modules[t + n][e + i] = !1)
        },
        e.prototype.getBestMaskPattern = function() {
            for (var e = 0,
            n = 0,
            i = 0; 8 > i; i++) {
                this.makeImpl(!0, i);
                var o = t.QRUtil.getLostPoint(this); (0 == i || e > o) && (e = o, n = i)
            }
            return n
        },
        e.prototype.createMovieClip = function(t, e, n) {
            var i = t.createEmptyMovieClip(e, n),
            o = 1;
            this.make();
            for (var r = 0; r < this.modules.length; r++) for (var a = r * o,
            s = 0; s < this.modules[r].length; s++) {
                var l = s * o,
                c = this.modules[r][s];
                c && (i.beginFill(0, 100), i.moveTo(l, a), i.lineTo(l + o, a), i.lineTo(l + o, a + o), i.lineTo(l, a + o), i.endFill())
            }
            return i
        },
        e.prototype.setupTimingPattern = function() {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        },
        e.prototype.setupPositionAdjustPattern = function() {
            for (var e = t.QRUtil.getPatternPosition(this.typeNumber), n = 0; n < e.length; n++) for (var i = 0; i < e.length; i++) {
                var o = e[n],
                r = e[i];
                if (null == this.modules[o][r]) for (var a = -2; 2 >= a; a++) for (var s = -2; 2 >= s; s++) - 2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s ? this.modules[o + a][r + s] = !0 : this.modules[o + a][r + s] = !1
            }
        },
        e.prototype.setupTypeNumber = function(e) {
            for (var n = t.QRUtil.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                var o = !e && 1 == (n >> i & 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = o
            }
            for (var i = 0; 18 > i; i++) {
                var o = !e && 1 == (n >> i & 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = o
            }
        },
        e.prototype.setupTypeInfo = function(e, n) {
            for (var i = this.errorCorrectLevel << 3 | n,
            o = t.QRUtil.getBCHTypeInfo(i), r = 0; 15 > r; r++) {
                var a = !e && 1 == (o >> r & 1);
                6 > r ? this.modules[r][8] = a: 8 > r ? this.modules[r + 1][8] = a: this.modules[this.moduleCount - 15 + r][8] = a
            }
            for (var r = 0; 15 > r; r++) {
                var a = !e && 1 == (o >> r & 1);
                8 > r ? this.modules[8][this.moduleCount - r - 1] = a: 9 > r ? this.modules[8][15 - r - 1 + 1] = a: this.modules[8][15 - r - 1] = a
            }
            this.modules[this.moduleCount - 8][8] = !e
        },
        e.prototype.mapData = function(e, n) {
            for (var i = -1,
            o = this.moduleCount - 1,
            r = 7,
            a = 0,
            s = this.moduleCount - 1; s > 0; s -= 2) for (6 == s && s--;;) {
                for (var l = 0; 2 > l; l++) if (null == this.modules[o][s - l]) {
                    var c = !1;
                    a < e.length && (c = 1 == (e[a] >>> r & 1));
                    var u = t.QRUtil.getMask(n, o, s - l);
                    u && (c = !c),
                    this.modules[o][s - l] = c,
                    r--,
                    -1 == r && (a++, r = 7)
                }
                if (o += i, 0 > o || this.moduleCount <= o) {
                    o -= i,
                    i = -i;
                    break
                }
            }
        },
        e.createData = function(n, i, o) {
            for (var r = t.QRRSBlock.getRSBlocks(n, i), a = new t.QRBitBuffer, s = 0; s < o.length; s++) {
                var l = o[s];
                a.put(l.mode, 4),
                a.put(l.getLength(), t.QRUtil.getLengthInBits(l.mode, n)),
                l.write(a)
            }
            for (var c = 0,
            s = 0; s < r.length; s++) c += r[s].dataCount;
            if (a.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * c + ")");
            for (a.getLengthInBits() + 4 <= 8 * c && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(!1);
            for (; ! (a.getLengthInBits() >= 8 * c) && (a.put(e.PAD0, 8), !(a.getLengthInBits() >= 8 * c));) a.put(e.PAD1, 8);
            return e.createBytes(a, r)
        },
        e.createBytes = function(e, n) {
            for (var i = 0,
            o = 0,
            r = 0,
            a = new Array(n.length), s = new Array(n.length), l = 0; l < n.length; l++) {
                var c = n[l].dataCount,
                u = n[l].totalCount - c;
                o = Math.max(o, c),
                r = Math.max(r, u),
                a[l] = new Array(c);
                for (var h = 0; h < a[l].length; h++) a[l][h] = 255 & e.buffer[h + i];
                i += c;
                var p = t.QRUtil.getErrorCorrectPolynomial(u),
                d = new t.QRPolynomial(a[l], p.getLength() - 1),
                f = d.mod(p);
                s[l] = new Array(p.getLength() - 1);
                for (var h = 0; h < s[l].length; h++) {
                    var g = h + f.getLength() - s[l].length;
                    s[l][h] = g >= 0 ? f.get(g) : 0
                }
            }
            for (var v = 0,
            h = 0; h < n.length; h++) v += n[h].totalCount;
            for (var m = new Array(v), y = 0, h = 0; o > h; h++) for (var l = 0; l < n.length; l++) h < a[l].length && (m[y++] = a[l][h]);
            for (var h = 0; r > h; h++) for (var l = 0; l < n.length; l++) h < s[l].length && (m[y++] = s[l][h]);
            return m
        },
        e.PAD0 = 236,
        e.PAD1 = 17,
        e
    } ();
    t.QRCodeModel = e,
    __reflect(e.prototype, "qr.QRCodeModel")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function t() {}
        return t.L = 1,
        t.M = 0,
        t.Q = 3,
        t.H = 2,
        t
    } ();
    t.QRErrorCorrectLevel = e,
    __reflect(e.prototype, "qr.QRErrorCorrectLevel")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function t() {}
        return t.PATTERN000 = 0,
        t.PATTERN001 = 1,
        t.PATTERN010 = 2,
        t.PATTERN011 = 3,
        t.PATTERN100 = 4,
        t.PATTERN101 = 5,
        t.PATTERN110 = 6,
        t.PATTERN111 = 7,
        t
    } ();
    t.QRMaskPattern = e,
    __reflect(e.prototype, "qr.QRMaskPattern")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function t() {}
        return t.glog = function(e) {
            return t.isInit || t.init(),
            1 > e && console.log("错误:n=" + e),
            t.LOG_TABLE[e]
        },
        t.gexp = function(e) {
            for (t.isInit || t.init(); 0 > e;) e += 255;
            for (; e >= 256;) e -= 255;
            return t.EXP_TABLE[e]
        },
        t.init = function() {
            t.isInit = !0;
            for (var e = 0; 8 > e; e++) t.EXP_TABLE[e] = 1 << e;
            for (var e = 8; 256 > e; e++) t.EXP_TABLE[e] = t.EXP_TABLE[e - 4] ^ t.EXP_TABLE[e - 5] ^ t.EXP_TABLE[e - 6] ^ t.EXP_TABLE[e - 8];
            for (var e = 0; 255 > e; e++) t.LOG_TABLE[t.EXP_TABLE[e]] = e
        },
        t.EXP_TABLE = new Array(256),
        t.LOG_TABLE = new Array(256),
        t
    } ();
    t.QRMath = e,
    __reflect(e.prototype, "qr.QRMath")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function t() {}
        return t.MODE_NUMBER = 1,
        t.MODE_ALPHA_NUM = 2,
        t.MODE_8BIT_BYTE = 4,
        t.MODE_KANJI = 8,
        t
    } ();
    t.QRMode = e,
    __reflect(e.prototype, "qr.QRMode")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function e(t, e) {
            if (void 0 == t.length) throw new Error(t.length + "/" + e);
            for (var n = 0; n < t.length && 0 == t[n];) n++;
            this.num = new Array(t.length - n + e);
            for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n]
        }
        return e.prototype.get = function(t) {
            return this.num[t]
        },
        e.prototype.getLength = function() {
            return this.num.length
        },
        e.prototype.multiply = function(n) {
            for (var i = new Array(this.getLength() + n.getLength() - 1), o = 0; o < this.getLength(); o++) for (var r = 0; r < n.getLength(); r++) i[o + r] ^= t.QRMath.gexp(t.QRMath.glog(this.get(o)) + t.QRMath.glog(n.get(r)));
            return new e(i, 0)
        },
        e.prototype.mod = function(n) {
            if (this.getLength() - n.getLength() < 0) return this;
            for (var i = t.QRMath.glog(this.get(0)) - t.QRMath.glog(n.get(0)), o = new Array(this.getLength()), r = 0; r < this.getLength(); r++) o[r] = this.get(r);
            for (var r = 0; r < n.getLength(); r++) o[r] ^= t.QRMath.gexp(t.QRMath.glog(n.get(r)) + i);
            return new e(o, 0).mod(n)
        },
        e
    } ();
    t.QRPolynomial = e,
    __reflect(e.prototype, "qr.QRPolynomial")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function e(t, e) {
            this.totalCount = t,
            this.dataCount = e
        }
        return e.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        e.getRSBlocks = function(t, n) {
            var i = e.getRsBlockTable(t, n);
            if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + n);
            for (var o = i.length / 3,
            r = [], a = 0; o > a; a++) for (var s = i[3 * a + 0], l = i[3 * a + 1], c = i[3 * a + 2], u = 0; s > u; u++) r.push(new e(l, c));
            return r
        },
        e.getRsBlockTable = function(n, i) {
            switch (i) {
            case t.QRErrorCorrectLevel.L:
                return e.RS_BLOCK_TABLE[4 * (n - 1) + 0];
            case t.QRErrorCorrectLevel.M:
                return e.RS_BLOCK_TABLE[4 * (n - 1) + 1];
            case t.QRErrorCorrectLevel.Q:
                return e.RS_BLOCK_TABLE[4 * (n - 1) + 2];
            case t.QRErrorCorrectLevel.H:
                return e.RS_BLOCK_TABLE[4 * (n - 1) + 3];
            default:
                return
            }
        },
        e
    } ();
    t.QRRSBlock = e,
    __reflect(e.prototype, "qr.QRRSBlock")
} (qr || (qr = {}));
var qr; !
function(t) {
    var e = function() {
        function e() {}
        return e.getBCHTypeInfo = function(t) {
            for (var n = t << 10; e.getBCHDigit(n) - e.getBCHDigit(e.G15) >= 0;) n ^= e.G15 << e.getBCHDigit(n) - e.getBCHDigit(e.G15);
            return (t << 10 | n) ^ e.G15_MASK
        },
        e.getBCHTypeNumber = function(t) {
            for (var n = t << 12; e.getBCHDigit(n) - e.getBCHDigit(e.G18) >= 0;) n ^= e.G18 << e.getBCHDigit(n) - e.getBCHDigit(e.G18);
            return t << 12 | n
        },
        e.getBCHDigit = function(t) {
            for (var e = 0; 0 != t;) e++,
            t >>>= 1;
            return e
        },
        e.getPatternPosition = function(t) {
            return e.PATTERN_POSITION_TABLE[t - 1]
        },
        e.getMask = function(e, n, i) {
            switch (e) {
            case t.QRMaskPattern.PATTERN000:
                return (n + i) % 2 == 0;
            case t.QRMaskPattern.PATTERN001:
                return n % 2 == 0;
            case t.QRMaskPattern.PATTERN010:
                return i % 3 == 0;
            case t.QRMaskPattern.PATTERN011:
                return (n + i) % 3 == 0;
            case t.QRMaskPattern.PATTERN100:
                return (Math.floor(n / 2) + Math.floor(i / 3)) % 2 == 0;
            case t.QRMaskPattern.PATTERN101:
                return n * i % 2 + n * i % 3 == 0;
            case t.QRMaskPattern.PATTERN110:
                return (n * i % 2 + n * i % 3) % 2 == 0;
            case t.QRMaskPattern.PATTERN111:
                return (n * i % 3 + (n + i) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + e)
            }
        },
        e.getErrorCorrectPolynomial = function(e) {
            for (var n = new t.QRPolynomial([1], 0), i = 0; e > i; i++) n = n.multiply(new t.QRPolynomial([1, t.QRMath.gexp(i)], 0));
            return n
        },
        e.getLengthInBits = function(e, n) {
            if (n >= 1 && 10 > n) switch (e) {
            case t.QRMode.MODE_NUMBER:
                return 10;
            case t.QRMode.MODE_ALPHA_NUM:
                return 9;
            case t.QRMode.MODE_8BIT_BYTE:
                return 8;
            case t.QRMode.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + e)
            } else if (27 > n) switch (e) {
            case t.QRMode.MODE_NUMBER:
                return 12;
            case t.QRMode.MODE_ALPHA_NUM:
                return 11;
            case t.QRMode.MODE_8BIT_BYTE:
                return 16;
            case t.QRMode.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + e)
            } else {
                if (! (41 > n)) throw new Error("type:" + n);
                switch (e) {
                case t.QRMode.MODE_NUMBER:
                    return 14;
                case t.QRMode.MODE_ALPHA_NUM:
                    return 13;
                case t.QRMode.MODE_8BIT_BYTE:
                    return 16;
                case t.QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + e)
                }
            }
        },
        e.getLostPoint = function(t) {
            for (var e = t.getModuleCount(), n = 0, i = 0; e > i; i++) for (var o = 0; e > o; o++) {
                for (var r = 0,
                a = t.isDark(i, o), s = -1; 1 >= s; s++) if (! (0 > i + s || i + s >= e)) for (var l = -1; 1 >= l; l++) 0 > o + l || o + l >= e || (0 != s || 0 != l) && a == t.isDark(i + s, o + l) && r++;
                r > 5 && (n += 3 + r - 5)
            }
            for (var i = 0; e - 1 > i; i++) for (var o = 0; e - 1 > o; o++) {
                var c = 0;
                t.isDark(i, o) && c++,
                t.isDark(i + 1, o) && c++,
                t.isDark(i, o + 1) && c++,
                t.isDark(i + 1, o + 1) && c++,
                (0 == c || 4 == c) && (n += 3)
            }
            for (var i = 0; e > i; i++) for (var o = 0; e - 6 > o; o++) t.isDark(i, o) && !t.isDark(i, o + 1) && t.isDark(i, o + 2) && t.isDark(i, o + 3) && t.isDark(i, o + 4) && !t.isDark(i, o + 5) && t.isDark(i, o + 6) && (n += 40);
            for (var o = 0; e > o; o++) for (var i = 0; e - 6 > i; i++) t.isDark(i, o) && !t.isDark(i + 1, o) && t.isDark(i + 2, o) && t.isDark(i + 3, o) && t.isDark(i + 4, o) && !t.isDark(i + 5, o) && t.isDark(i + 6, o) && (n += 40);
            for (var u = 0,
            o = 0; e > o; o++) for (var i = 0; e > i; i++) t.isDark(i, o) && u++;
            var h = Math.abs(100 * u / e / e - 50) / 5;
            return n += 10 * h
        },
        e.prototype.static_isSupportCanvas = function() {
            return "undefined" != typeof CanvasRenderingContext2D
        },
        e._getTypeNumber = function(n, i) {
            for (var o = 1,
            r = e._getUTF8Length(n), a = 0, s = e.QRCodeLimitLength.length; s >= a; a++) {
                var l = 0;
                switch (i) {
                case t.QRErrorCorrectLevel.L:
                    l = e.QRCodeLimitLength[a][0];
                    break;
                case t.QRErrorCorrectLevel.M:
                    l = e.QRCodeLimitLength[a][1];
                    break;
                case t.QRErrorCorrectLevel.Q:
                    l = e.QRCodeLimitLength[a][2];
                    break;
                case t.QRErrorCorrectLevel.H:
                    l = e.QRCodeLimitLength[a][3]
                }
                if (l >= r) break;
                o++
            }
            if (o > e.QRCodeLimitLength.length) throw new Error("Too long data");
            return o
        },
        e._getUTF8Length = function(t) {
            var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return e.length + (e.length != t ? 3 : 0)
        },
        e.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        e.G15 = 1335,
        e.G18 = 7973,
        e.G15_MASK = 21522,
        e.QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
        e
    } ();
    t.QRUtil = e,
    __reflect(e.prototype, "qr.QRUtil")
} (qr || (qr = {}));
var GestureDrag = function() {
    function t() {
        this.curPointID = -1
    }
    return t.prototype.setTarget = function(t) {
        this.target = t
    },
    t.prototype.setBounds = function(t) {
        this.boundsBox = t
    },
    t.prototype.start = function() {
        this.curPointID = -1,
        Const.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
    },
    t.prototype.stop = function() {
        this.curPointID = -1,
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this),
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    },
    t.prototype.onTouchBegin = function(t) { - 1 == this.curPointID && (this.curPointID = t.touchPointID, this.lastX = t.stageX, this.lastY = t.stageY, Const.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), Const.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this))
    },
    t.prototype.onTouchMove = function(t) {
        t.touchPointID == this.curPointID && (this.target.x += t.stageX - this.lastX, this.target.y += t.stageY - this.lastY, this.lastX = t.stageX, this.lastY = t.stageY)
    },
    t.prototype.onTouchEnd = function(t) {
        t.touchPointID == this.curPointID && (this.curPointID = -1, Const.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), Const.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this))
    },
    t.prototype.destroy = function() {
        this.stop(),
        this.target = null
    },
    t
} ();
__reflect(GestureDrag.prototype, "GestureDrag");
var GesturePinch = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.touchIDList = new Array,
        e.initTouchPos = {},
        e.curTouchPos = {},
        e.minScale = .25,
        e
    }
    return __extends(e, t),
    e.prototype.setTarget = function(t) {
        this.target = t
    },
    e.prototype.setTargetMinScale = function(t) {
        this.minScale = t
    },
    e.prototype.start = function() {
        Const.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
        Const.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    },
    e.prototype.stop = function() {
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
        Const.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this)
    },
    e.prototype.onTouchBegin = function(t) {
        if (this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_BEGIN)), this.touchIDLen = this.touchIDList.length, this.touchIDLen < 2 && (this.touchIDList.push(t.touchPointID), this.initTouchPos[t.touchPointID] = new egret.Point(t.stageX, t.stageY), this.curTouchPos[t.touchPointID] = this.initTouchPos[t.touchPointID], this.touchIDLen = this.touchIDList.length), 2 == this.touchIDLen) {
            Const.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this),
            this.initDist = egret.Point.distance(this.initTouchPos[this.touchIDList[0]], this.initTouchPos[this.touchIDList[1]]),
            this.startScale = this.target.scaleX;
            var e = this.initTouchPos[this.touchIDList[0]],
            n = this.initTouchPos[this.touchIDList[1]];
            this.startAngle = Math.atan2(n.y - e.y, n.x - e.x),
            this.targetAngle = this.target.rotation
        }
    },
    e.prototype.onTouchMove = function(t) {
        this.curPot = this.curTouchPos[t.touchPointID];
        this.curTouchPos[this.touchIDList[0]],
        this.curTouchPos[this.touchIDList[1]];
        if (this.curPot) {
            this.curPot.x = t.stageX,
            this.curPot.y = t.stageY;
            var e = egret.Point.distance(this.curTouchPos[this.touchIDList[0]], this.curTouchPos[this.touchIDList[1]]),
            n = e / this.initDist;
            this.target.scaleX = Util.limit(n * this.startScale, this.minScale, 5),
            this.target.scaleY = this.target.scaleX;
            var i = this.curTouchPos[this.touchIDList[0]],
            o = this.curTouchPos[this.touchIDList[1]],
            r = Math.atan2(o.y - i.y, o.x - i.x),
            a = r - this.startAngle;
            this.target.rotation = this.targetAngle + Util.rad2ang(a)
        }
    },
    e.prototype.onTouchEnd = function(t) {
        var e = this.touchIDList.indexOf(t.touchPointID); - 1 != e && this.touchIDList.splice(e, 1),
        this.touchIDList.length < 2 && (this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_END)), Const.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this))
    },
    e.prototype.destroy = function() {
        this.stop(),
        this.target = null
    },
    e
} (egret.EventDispatcher);
__reflect(GesturePinch.prototype, "GesturePinch");