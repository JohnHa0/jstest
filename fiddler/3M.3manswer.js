var AXEOrientation = {
    UNKONWN: 0
};
AXEOrientation.PORTRAIT_UP = parseInt("100", 2),
AXEOrientation.PORTRAIT_DOWN = parseInt("10", 2),
AXEOrientation.LANDSCAPE_LEFT = parseInt("1", 2),
AXEOrientation.LANDSCAPE_RIGHT = parseInt("1000", 2),
AXEOrientation.PORTRAIT = AXEOrientation.PORTRAIT_UP | AXEOrientation.PORTRAIT_DOWN,
AXEOrientation.LANDSCAPE = AXEOrientation.LANDSCAPE_LEFT | AXEOrientation.LANDSCAPE_RIGHT,
AXEOrientation.ALL_ORIENTATION = AXEOrientation.PORTRAIT | AXEOrientation.LANDSCAPE,
define("orientation",
function() {});
var AXEEvent = function(t, e) {
    this.timestamp = Date.now(),
    this.type = "string" == typeof t && t.length > 0 ? t: null,
    this.bubbles = "boolean" == typeof e && e
};
AXEEvent.ASSETS_LOAD = "assets_load",
AXEEvent.ACTION = "action",
AXEEvent.RESET = "reset",
AXEEvent.BACK = "back",
AXEEvent.LOAD = "load",
AXEEvent.PREPARED = "prepared",
AXEEvent.UPDATE = "update",
AXEEvent.READY = "ready",
AXEEvent.ADDED = "added",
AXEEvent.ADD_TO_STAGE = "add_to_stage",
AXEEvent.REMOVED = "removed",
AXEEvent.REMOVE_FROM_STAGE = "remove_from_stage",
AXEEvent.RESIZE = "resize",
AXEEvent.MAT_CHANGE = "mat_change",
AXEEvent.FINISH = "finish",
AXEEvent.START = "start",
AXEEvent.END = "end",
AXEEvent.COMPLETE = "complete",
AXEEvent.FAIL = "fail",
AXEEvent.CHANGE = "change",
AXEEvent.SELECT = "select",
AXEEvent.CANCEL = "cancel",
AXEEvent.BEGIN = "begin",
AXEEvent.PLAYING = "playing",
AXEEvent.CUE_POINT = "cue_point",
AXEEvent.PAUSE = "pause",
AXEEvent.PLAY = "play",
AXEEvent.ENDED = "ended",
AXEEvent.OPEN = "open",
AXEEvent.CLOSE = "close",
AXEEvent.INPUT = "input",
AXEEvent.NONE_PHASE = 0,
AXEEvent.CAPTURING_PHASE = 1,
AXEEvent.AT_TARGET = 2,
AXEEvent.BUBBLING_PHASE = 3,
AXEEvent.prototype.constructor = AXEEvent,
AXEEvent.prototype.evtData = null,
AXEEvent.prototype.target = null,
AXEEvent.prototype.currentTarget = null,
AXEEvent.prototype.currentPhase = AXEEvent.NONE_PHASE,
AXEEvent.prototype.type = null,
AXEEvent.prototype.bubbles = !1,
AXEEvent.prototype.timestamp = 0,
AXEEvent.prototype.eventStop = !1,
AXEEvent.prototype.cancel = !1,
AXEEvent.prototype.preventDefault = !1,
AXEEvent.prototype.stopPropagation = function() {
    this.bubbles = !1
},
AXEEvent.prototype.stopImmediatePropagation = function() {
    this.eventStop = !0
},
AXEEvent.prototype.clone = function() {
    var t = new AXEEvent(this.type, this.bubbles);
    return t.evtData = this.evtData,
    t
},
AXEEvent.prototype.dealloc = function() {
    this.evtData = null,
    this.type = null,
    this.timestamp = 0
},
define("event",
function() {});
var AXEDeviceEvent = function(t, e) {
    t == AXEDeviceEvent.ORIENTATION_CHANGE && 0 == isNaN(e) && (this.orientation = e),
    AXEEvent.prototype.constructor.call(this, t, !1)
};
AXEDeviceEvent.ORIENTATION_CHANGE = "orientation_change",
AXEDeviceEvent.SWING_START = "swing_start",
AXEDeviceEvent.SWING_END = "swing_end",
AXEDeviceEvent.SHAKE = "shake",
AXEDeviceEvent.prototype = new AXEEvent,
AXEDeviceEvent.prototype.constructor = AXEDeviceEvent,
AXEDeviceEvent.prototype.orientation = AXEOrientation.UNKONWN,
AXEDeviceEvent.prototype.clone = function() {
    var t = new AXEDeviceEvent(this.type, this.orientation);
    return t.evtData = this.evtData,
    t
},
AXEDeviceEvent.prototype.dealloc = function() {
    this.orientation = 0,
    AXEEvent.prototype.dealloc.call(this)
},
define("device_event", ["orientation", "event"],
function() {});
var AXEEventTarget = function() {}; !
function() {
    var t = function(t, e, i) {
        this.target = t,
        this.handler = e,
        this.priority = i
    };
    t.prototype.constructor = t,
    t.prototype.target = null,
    t.prototype.handler = null,
    t.prototype.priority = 0,
    t.prototype.match = function(t, e) {
        var i = !0;
        return i && Boolean(t) && (i = t === this.target),
        i && Boolean(e) && (i = e === this.handler),
        i
    },
    AXEEventTarget.prototype.constructor = AXEEventTarget,
    AXEEventTarget.prototype._captureHandlers = null,
    AXEEventTarget.prototype.captureHandlers = function() {
        return null == this._captureHandlers && (this._captureHandlers = {}),
        this._captureHandlers
    },
    AXEEventTarget.prototype._handlers = null,
    AXEEventTarget.prototype.handlers = function() {
        return null == this._handlers && (this._handlers = {}),
        this._handlers
    },
    AXEEventTarget.prototype.addListener = function(e, i, n, o, r) {
        o = "boolean" == typeof o && o,
        r = isNaN(r) ? 0 : r;
        var s = e.split(" ");
        if (s.length < 2) {
            var a = o ? this.captureHandlers() : this.handlers();
            0 == a.hasOwnProperty(e) && (a[e] = []);
            var l = a[e],
            h = new t(i, n, r);
            if (l.length <= 0) l.push(h);
            else for (var c = 0; c < l.length; c++) {
                if (l[c].priority < r) {
                    l.splice(c, h);
                    break
                }
                if (c == l.length - 1) {
                    l.push(h);
                    break
                }
            }
        } else for (var p = 0; p < s.length; p++) this.addListener(s[c], i, n, o, r)
    },
    AXEEventTarget.prototype.removeListener = function(t, e, i) {
        if ("string" == typeof t) {
            var n = t.split(" ");
            if (n.length > 1) for (var o = 0; o < n.length; o++) this.removeListener(n[o], e, i);
            else {
                var r = this.handlers().hasOwnProperty(t) ? this._handlers[t] : null,
                s = this.captureHandlers().hasOwnProperty(t) ? this._captureHandlers[t] : null;
                if (null != r) {
                    for (var a = r.length - 1; a >= 0; a--) r[a].match(e, i) && r.splice(a, 1);
                    r.length <= 0 && delete this._handlers[t]
                }
                if (null != s) {
                    for (var l = s.length - 1; l >= 0; l--) s[l].match(e, i) && s.splice(l, 1);
                    s.length <= 0 && delete this._captureHandlers[t]
                }
            }
        } else this._captureHandlers = null,
        this._handlers = null
    },
    AXEEventTarget.prototype.hasListener = function(t, e, i) {
        var n = !1;
        if (this.handlers().hasOwnProperty(t)) for (var o = this._handlers[t], r = 0; r < o.length; r++) if (o[r].match(e, i)) {
            n = !0;
            break
        }
        if (0 == n && this.captureHandlers().hasOwnProperty(t)) for (var s = this._captureHandlers[t], a = 0; a < s.length; a++) if (s.match(e, i)) {
            n = !0;
            break
        }
        return n
    },
    AXEEventTarget.prototype.spreadToDeep = function(t) {
        return ! 1
    },
    AXEEventTarget.prototype.spreadToTop = function(t) {},
    AXEEventTarget.prototype.triggerEvent = function(t) {
        t.currentTarget = this,
        null == t.target && (t.target = this);
        var e = null;
        if ((e = t.currentPhase == AXEEvent.CAPTURING_PHASE ? this.captureHandlers() : this.handlers()).hasOwnProperty(t.type)) for (var i = e[t.type].slice(), n = 0; n < i.length && (i[n].handler.call(i[n].target, t), !t.eventStop); n++);
        if (0 == t.eventStop) if (t.currentPhase == AXEEvent.CAPTURING_PHASE) {
            if (0 == this.spreadToDeep(t)) {
                var o = t.clone();
                o.target = this,
                o.currentPhase = AXEEvent.AT_TARGET,
                this.triggerEvent(o)
            }
        } else ! 0 === t.bubbles && this.spreadToTop(t)
    },
    AXEEventTarget.prototype.dealloc = function() {
        this._handlers = null,
        this._captureHandlers = null
    }
} (),
define("event_target", ["event"],
function() {});
var AXEEnv = {}; !
function(t, e) {
    var i = {},
    n = {},
    o = t.match(/WebKit[\/]?([\d.]+)/i),
    r = t.match(/(Android);?[\s\/]+([\d.]+)?/i),
    s = !!t.match(/\(Macintosh; Intel /),
    a = t.match(/(iPad).*OS\s([\d_]+)/),
    l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
    c = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
    p = /Win\d{2}|Windows/.test(e),
    u = t.match(/Windows Phone ([\d.]+)/),
    d = c && t.match(/TouchPad/),
    E = t.match(/Kindle\/([\d.]+)/),
    A = t.match(/Silk\/([\d._]+)/),
    g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
    w = t.match(/(BB10).*Version\/([\d.]+)/),
    f = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
    v = t.match(/PlayBook/),
    X = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
    y = t.match(/Firefox\/([\d.]+)/),
    m = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
    _ = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
    b = !X && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
    S = b || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
    T = t.match(/MicroMessenger/i),
    C = t.match(/miniProgram/i),
    V = t.match(/AliApp\(TB/i),
    M = t.match(/AliApp\(TM/i),
    R = t.match(/QQ/),
    x = t.match(/qzone/i),
    L = t.match(/weibo/i),
    P = t.match(/OfoApp/i),
    B = t.match(/DingTalk/i),
    N = t.match(/Eleme/i),
    I = t.match(/vipshop/i),
    k = t.match(/com.meitu/gi),
    O = t.match(/\bQQMUSIC\/(\d[\.\d]*)/i) || t.match(/QQMUSIC\/(\d[\.\d]*)/i),
    U = t.match(/FBAN/i),
    D = t.match(/twitter/i),
    F = t.match(/SNEBUY-APP/i),
    G = t.match(/keep/i);
    n.webkit = o,
    null != n.webkit && (n.version = o[1]),
    i.supportDeviceMotion = null != window.orientation && 0 == isNaN(parseFloat(window.orientation)),
    r && (i.android = !0, i.version = r[2]),
    h && !l && (i.ios = i.iphone = !0, i.version = h[2].replace(/_/g, ".")),
    a && (i.ios = i.ipad = !0, i.version = a[2].replace(/_/g, ".")),
    l && (i.ios = i.ipod = !0, i.version = l[3] ? l[3].replace(/_/g, ".") : null),
    u && (i.wp = !0, i.version = u[1]),
    c && (i.webos = !0, i.version = c[2]),
    d && (i.touchpad = !0),
    g && (i.blackberry = !0, i.version = g[2]),
    w && (i.bb10 = !0, i.version = w[2]),
    f && (i.rimtabletos = !0, i.version = f[2]),
    v && (n.playbook = !0),
    E && (i.kindle = !0, i.version = E[1]),
    A && (n.silk = !0, n.version = A[1]),
    !A && i.android && t.match(/Kindle Fire/) && (n.silk = !0),
    X && (n.chrome = !0, n.version = X[1]),
    y && (n.firefox = !0, n.version = y[1]),
    m && (i.firefoxos = !0, i.version = m[1]),
    _ && (n.ie = !0, n.version = _[1]),
    S && (s || i.ios || p) && (n.safari = !0, i.ios || (n.version = S[1])),
    b && (n.webview = !0),
    T && (n.wechat = !0),
    C && (n.miniApp = !0),
    R && (n.qq = !0),
    x && (n.qzone = !0),
    L && (n.weibo = !0),
    P && (n.ofo = !0),
    V && (n.taobao = !0),
    M && (n.tmall = !0),
    B && (n.ding = !0),
    n.aliApp = V || M || B,
    N && (n.eleme = N),
    I && (n.vip = I),
    k && (n.meitu = k),
    O && (n.qqmusic = O),
    U && (n.facebook = U),
    D && (n.twitter = D),
    F && (n.suningApp = F),
    G && (n.keep = G),
    i.tablet = !!(a || v || r && !t.match(/Mobile/) || y && t.match(/Tablet/) || _ && !t.match(/Phone/) && t.match(/Touch/)),
    i.phone = !(i.tablet || i.ipod || !(r || h || c || g || w || X && t.match(/Android/) || X && t.match(/CriOS\/([\d.]+)/) || y && t.match(/Mobile/) || _ && t.match(/Touch/))),
    i.isTouchDevice = "ontouchstart" in window,
    AXEEnv.browser = n,
    AXEEnv.os = i;
    var H, W = function() {
        var t = this;
        if (window.DeviceOrientationEvent && (window.addEventListener("deviceorientation",
        function(e) {
            var i, n;
            t.orientationDetail.beta = e.beta,
            t.orientationDetail.gamma = e.gamma,
            t.orientationDetail.alpha = e.alpha,
            AXEEnv.os.ios ? (i = e.alpha + e.gamma, (i %= 360) < 0 && (i += 360)) : AXEEnv.os.android && (i = e.alpha + e.gamma + 30),
            (i %= 360) < 0 && (i += 360),
            n = e.beta,
            n += 180,
            (n %= 360) < 0 && (n += 360),
            t.long = i,
            t.lat = n,
            e.preventDefault()
        },
        !1), window.addEventListener("orientationchange",
        function(e) {
            t.triggerEvent(new AXEDeviceEvent(AXEDeviceEvent.ORIENTATION_CHANGE, t.orientation())),
            e.preventDefault()
        },
        !1)), window.DeviceMotionEvent) {
            window.addEventListener("devicemotion",
            function(e) {
                null != e.acceleration ? (t.acceleration.x = e.acceleration.x, t.acceleration.y = e.acceleration.y, t.acceleration.z = e.acceleration.z) : (t.acceleration.x = 0, t.acceleration.y = 0, t.acceleration.z = 0),
                null != e.accelerationIncludingGravity ? (t.accelerationIncludingGravity.x = e.accelerationIncludingGravity.x, t.accelerationIncludingGravity.y = e.accelerationIncludingGravity.y, t.accelerationIncludingGravity.z = e.accelerationIncludingGravity.z) : (t.accelerationIncludingGravity.x = 0, t.accelerationIncludingGravity.y = 0, t.accelerationIncludingGravity.z = 0),
                null != e.rotationRate ? (t.rotationRate.beta = e.rotationRate.beta, t.rotationRate.gamma = e.rotationRate.gamma, t.rotationRate.alpha = e.rotationRate.alpha) : (t.rotationRate.beta = 0, t.rotationRate.gamma = 0, t.rotationRate.alpha = 0);
                var i = isNaN(parseFloat(t.rotationRate.alpha)) && isNaN(parseFloat(t.rotationRate.beta)) && isNaN(parseFloat(t.rotationRate.gamma));
                0 == (i = i || Boolean(AXEEnv.os.android)) && (Math.abs(t.rotationRate.beta) + Math.abs(t.rotationRate.gamma) + Math.abs(t.rotationRate.alpha) > t.SWING_START_THREHOLD && 0 == t.swinging() ? (t._swinging = !0, t.triggerEvent(new AXEDeviceEvent(AXEDeviceEvent.SWING_START))) : Math.abs(t.rotationRate.beta) + Math.abs(t.rotationRate.gamma) + Math.abs(t.rotationRate.alpha) < t.SWING_END_THREHOLD && t.swinging() && (t._swinging = !1, t.triggerEvent(new AXEDeviceEvent(AXEDeviceEvent.SWING_END))));
                var n = i ? t.accelerationIncludingGravity: t.acceleration;
                if (isNaN(n.x) && isNaN(n.y) && isNaN(n.z) && (i = !0, n = t.accelerationIncludingGravity), e.timeStamp - t.lastShakeTS > t.SHAKE_INTERVAL) {
                    if (t.lastShakeTS > 0) {
                        var o = Math.abs(t.shakeX - n.x + t.shakeY - n.y + t.shakeZ - n.z) / (e.timeStamp - t.lastShakeTS) * 1e3;
                        o > t.SHAKE_THRESHOLD && (t.triggerEvent(new AXEDeviceEvent(AXEDeviceEvent.SHAKE)), i && (t.triggerEvent(new AXEDeviceEvent(AXEDeviceEvent.SWING_START)), t.triggerEvent(new AXEDeviceEvent(AXEDeviceEvent.SWING_END)))),
                        t.changeRate = o
                    }
                    t.lastShakeTS = e.timeStamp,
                    t.shakeX = n.x,
                    t.shakeY = n.y,
                    t.shakeZ = n.z
                }
                e.preventDefault()
            },
            !1)
        }
    }; (W.prototype = new AXEEventTarget).constructor = W,
    W.prototype._orientation = AXEOrientation.UNKONWN,
    W.prototype.orientation = function() {
        if (null != window.orientation && 0 == isNaN(window.orientation)) switch (window.orientation) {
        case 0:
            this._orientation = AXEOrientation.PORTRAIT_UP;
            break;
        case - 90 : this._orientation = AXEOrientation.LANDSCAPE_RIGHT;
            break;
        case 90:
            this._orientation = AXEOrientation.LANDSCAPE_LEFT;
            break;
        case 180:
        case - 180 : this._orientation = AXEOrientation.PORTRAIT_DOWN;
            break;
        default:
            this._orientation = AXEOrientation.UNKONWN
        }
        return this._orientation
    },
    W.prototype.acceleration = {
        x: 0,
        y: 0,
        z: 0
    },
    W.prototype.accelerationIncludingGravity = {
        x: 0,
        y: 0,
        z: 0
    },
    W.prototype.rotationRate = {
        beta: 0,
        gamma: 0,
        alpha: 0
    },
    W.prototype.orientationDetail = {
        beta: 0,
        gamma: 0,
        alpha: 0
    },
    W.prototype.long = 0,
    W.prototype.lat = 0,
    W.prototype.windowWidth = 0,
    W.prototype.windowHeight = 0,
    W.prototype.shakeX = 0,
    W.prototype.shakeY = 0,
    W.prototype.shakeZ = 0,
    W.prototype.lastShakeTS = 0,
    W.prototype.changeRate = 0,
    W.prototype.SHAKE_INTERVAL = 50,
    W.prototype.SHAKE_THRESHOLD = 80,
    W.prototype.SWING_START_THREHOLD = 150,
    W.prototype.SWING_END_THREHOLD = 50,
    W.prototype._swinging = !1,
    W.prototype.swinging = function() {
        return this._swinging
    },
    AXEEnv.device = new W,
    AXEEnv.supportWEBGL = function() {
        var t = document.createElement("canvas"),
        e = AXEEnv.glRender(t),
        i = Boolean(e);
        return t = null,
        e = null,
        i
    },
    AXEEnv.glRender = function(t) {
        for (var e = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], i = null, n = 0; n < e.length; n++) {
            try {
                i = t.getContext(e[n])
            } catch(t) {}
            if (i) break
        }
        return i
    },
    AXEEnv.nativeXHR = function() {
        var t = null;
        if (null != window.XMLHttpRequest) t = new XMLHttpRequest;
        else try {
            t = new ActiveXObject("MSXML2.XMLHTTP")
        } catch(e) {
            try {
                t = new ActiveXObject("Microsoft.XMLHTTP")
            } catch(e) {
                t = null
            }
        }
        return t
    },
    AXEEnv.vendorJSProp = function(t, e) {
        var i = void 0;
        if (null != t[e]) i = t[e];
        else for (var n = e.slice(0, 1).toUpperCase() + e.slice(1, e.length), o = ["webkit", "moz", "o", "ms"], r = 0; r < o.length; r++) {
            var s = o[r] + n;
            if (null != t[s]) {
                i = t[s];
                break
            }
        }
        return i
    },
    AXEEnv.vendorPrefix = function() {
        var t = null;
        return null != document.hidden ? t = "": null != document.webkitHidden ? t = "webkit": null != document.mozHidden ? t = "moz": null != document.oHidden ? t = "o": null != document.msHidden && (t = "ms"),
        t
    },
    AXEEnv.addVendorPrefix = function(t) {
        var e = null,
        i = AXEEnv.vendorPrefix();
        return null != i && (e = i.length <= 0 ? t: i + t.slice(0, 1).toUpperCase() + t.slice(1, t.length)),
        e
    },
    AXEEnv.axeVars = (H = {},
    $("meta").each(function(t, e) {
        var i = $(e),
        n = i.attr("name");
        if (n && n.match(/^axe\:/i)) {
            var o = n.replace(/^axe\:/, ""),
            r = i.attr("content");
            H[o] = r
        }
    }), H);
    var z = window.alert;
    window.alert = function(t) {
        try {
            var e = document.createElement("IFRAME");
            e.style.display = "none",
            e.setAttribute("src", "data:text/plain,"),
            document.documentElement.appendChild(e),
            window.frames[0].window.alert(t),
            e.parentNode.removeChild(e)
        } catch(e) {
            z(t)
        }
    },
    Math.randWithPoints = function(t) {
        var e = Math.random();
        t = [new AXEVec2(0, 0)].concat(t).concat([new AXEVec2(1, 1)]);
        for (var i = null,
        n = null,
        o = 0; o < t.length; o++) if (e < t[o].x) {
            n = t[o],
            i = t[o - 1];
            break
        }
        var r = n.subtract(i),
        s = Math.tan(r.radian());
        return e * s + (n.y - s * n.x)
    },
    Math.TWO_PI = 2 * Math.PI,
    Math.HALF_PI = Math.PI / 2,
    Math.RAD = Math.PI / 180
} (window.navigator.userAgent, window.navigator.platform),
define("env", ["orientation", "device_event", "event_target"],
function() {});
var AXEDateUtil = {
    parseFormat: function(t) {
        var e = [],
        i = {
            type: "y"
        },
        n = /yyyy/g,
        o = t.search(n);
        o > -1 ? (i.length = 4, i.order = o, e.push(i)) : (n = /yy/g, (o = t.search(n)) > -1 && (i.length = 2, i.order = o, e.push(i)));
        var r = {
            type: "m"
        },
        s = /mm/g; (o = t.search(s)) > -1 ? (r.length = 2, r.order = o, e.push(r)) : (s = /m/g, (o = t.search(s)) > -1 && (r.length = 1, r.order = o, e.push(r)));
        var a = {
            type: "d"
        },
        l = /dd/g; (o = t.search(l)) > -1 ? (a.length = 2, a.order = o, e.push(a)) : (l = /d/g, (o = t.search(l)) > -1 && (a.length = 1, a.order = o, e.push(a)));
        var h = {
            type: "h"
        },
        c = /hh/g; (o = t.search(c)) > -1 ? (h.length = 2, h.order = o, e.push(h)) : (c = /h/g, (o = t.search(c)) > -1 && (h.length = 1, h.order = o, e.push(h)));
        var p = {
            type: "M"
        },
        u = /MM/g; (o = t.search(u)) > -1 ? (p.length = 2, p.order = o, e.push(p)) : (u = /M/g, (o = t.search(u)) > -1 && (p.length = 1, p.order = o, e.push(p)));
        var d = {
            type: "s"
        },
        E = /ss/g; (o = t.search(E)) > -1 ? (d.length = 2, d.order = o, e.push(d)) : (E = /s/g, (o = t.search(E)) > -1 && (d.length = 1, d.order = o, e.push(d)));
        var A = 0;
        do {
            A = 0;
            for (var g = 0; g < e.length - 1; g++) {
                var w = e[g],
                f = e[g + 1];
                w.order > f.order && (e[g] = f, e[g + 1] = w, A++)
            }
        } while ( A > 0 );
        return e
    },
    strToDate: function(t, e) {
        var i = AXEDateUtil.parseFormat(e),
        n = t.match(/\d+/g),
        o = new Date(0);
        if (null == n || n.length != i.length) throw new Error("Invalid date format!");
        o.setHours(0, 0, 0);
        for (var r = 0; r < n.length; r++) {
            var s = parseInt(n[r], 10),
            a = i[r];
            switch (a.type) {
            case "y":
                4 == a.length ? o.setFullYear(s) : 2 == a.length && (s < parseInt(String((new Date).getFullYear()).slice(2, 4), 10) ? o.setFullYear(2e3 + s) : o.setFullYear(1900 + s));
                break;
            case "m":
                o.setMonth(s - 1);
                break;
            case "d":
                o.setDate(s);
                break;
            case "h":
                o.setHours(s);
                break;
            case "M":
                o.setMinutes(s);
                break;
            case "s":
                o.setSeconds(s)
            }
        }
        return o
    },
    dateToStr: function(t, e) {
        for (var i = e,
        n = AXEDateUtil.parseFormat(e), o = 0; o < n.length; o++) {
            var r = n[o];
            switch (r.type) {
            case "y":
                var s = null;
                4 == r.length ? s = String(t.getFullYear()) : 2 == r.length && (s = String(t.getFullYear()).slice(2, 4)),
                i = i.replace(/y+/g, s);
                break;
            case "m":
                for (var a = String(t.getMonth() + 1); a.length < r.length;) a = "0" + a;
                i = i.replace(/m+/g, a);
                break;
            case "d":
                for (var l = String(t.getDate()); l.length < r.length;) l = "0" + l;
                i = i.replace(/d+/g, l);
                break;
            case "h":
                for (var h = String(t.getHours()); h.length < r.length;) h = "0" + h;
                i = i.replace(/h+/g, h);
                break;
            case "M":
                for (var c = String(t.getMinutes()); c.length < r.length;) c = "0" + c;
                i = i.replace(/M+/g, c);
                break;
            case "s":
                for (var p = String(t.getSeconds()); p.length < r.length;) p = "0" + p;
                i = i.replace(/s+/g, p)
            }
        }
        return i
    },
    uuid: function(t) {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        i = e.length / 10;
        t || (t = Date.now());
        for (var n = String(t); n.length < 25;) n += Math.floor(10 * Math.random());
        for (var o = [], r = null, s = 0; s < n.length; s++) {
            var a = Math.round(parseInt(n.charAt(s), 10) * (Math.random() * i)) % e.length,
            l = e.charAt(a); (null == r || r.length >= 5) && (null != r && o.push(r), r = ""),
            r += l
        }
        return null != r && r.length > 0 && o.push(r),
        o.join("-")
    }
};
define("date_util",
function() {});
var AXEManager = function() {};
AXEManager._keys = null,
AXEManager.keys = function() {
    return null == AXEManager._keys && (AXEManager._keys = []),
    AXEManager._keys
},
AXEManager._axes = null,
AXEManager.axes = function() {
    return null == AXEManager._axes && (AXEManager._axes = {}),
    AXEManager._axes
},
AXEManager.addAXE = function(t) {
    t.udid = AXEDateUtil.uuid(),
    AXEManager.keys().push(t.udid),
    AXEManager.axes()[t.udid] = t
},
AXEManager.axeByUdid = function(t) {
    return AXEManager.axes()[t]
},
define("axe_manager", ["date_util"],
function() {});
var AXEStringUtil = {
    formatString: function(t, e) {
        var i = t;
        for (var n in e) {
            var o = "%" + n + "%",
            r = String(e[n]),
            s = new RegExp(o, "ig");
            i = i.replace(s, r)
        }
        return i
    },
    fillStringTo: function(t, e, i, n) {
        var o = (t = String(t)).slice(0);
        for (n = !(arguments.length >= 4) || n; o.length < i;) o = n ? e + o: o + e;
        return o
    },
    lineToCamel: function(t) {
        return t.replace(/-(\w)/g,
        function(t, e) {
            return e.toUpperCase()
        })
    },
    camelToLine: function(t) {
        return t.replace(/\W/g,
        function(t) {
            return "-" + t.toLowerCase()
        })
    },
    parseXML: function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            window.DOMParser ? e = (new window.DOMParser).parseFromString(t, "text/xml") : ((e = new window.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
        } catch(t) {
            e = void 0
        }
        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || console.log("Invalid XML: " + t),
        e
    },
    group: function(t, e, i) {
        var n = [];
        if (i = "boolean" == typeof i && i) {
            var o = t.length % e;
            o > 0 && (n.push(t.substr(0, o)), t = t.substr(o, t.length - o))
        }
        for (var r = 0; r < t.length; r += e) n.push(t.substr(r, e));
        return n
    },
    cashFormat: function(t, e) {
        e = "number" == typeof e ? e: 0,
        t = Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
        var i = Math.floor(t),
        n = AXEStringUtil.group(String(i), 3, !0).join(","),
        o = String(t).replace(/^\d*(\.|$)/, "");
        return o = AXEStringUtil.fillStringTo(o, "0", e, !1),
        n + (e > 0 ? "." + o: "")
    },
    cashToNum: function(t) {
        var e = t.split(",");
        return parseFloat(e.join(""))
    },
    rawURLEncode: function(t) {
        let e = encodeURIComponent(t);
        return e = (e = (e = (e = (e = e.replace(/\*/g, "%2A")).replace(/!/g, escape("!"))).replace(/\(/g, escape("("))).replace(/\)/g, escape(")"))).replace(/'/g, escape("'"))
    }
};
define("string_util",
function() {});
var AXEArrayUtil = {
    each: function(t, e) {
        for (var i = 0; i < t.length && !1 !== e.call(t[i], i, t[i]); i++);
    },
    copyList: function(t) {
        for (var e = [], i = 0; i < t.length; i++)"function" == typeof t[i].clone ? e[i] = t[i].clone() : e[i] = t[i];
        return e
    },
    deepCopy: function(t, e, i) {
        for (var n in e) if (e.hasOwnProperty(n)) if ("number" == typeof t[n]) try {
            i[n] = t[n].clone()
        } catch(e) {
            i[n] = t[n]
        } else if ("function" == typeof t[n]) {
            var o = t[n].call(t);
            try {
                i[n] = o.clone()
            } catch(t) {
                i[n] = o
            }
        } else if ("object" == typeof t[n]) {
            var r = t[n],
            s = e[n],
            a = {};
            AXEArrayUtil.deepCopy(r, s, a),
            i[n] = a
        }
    },
    setValues: function(t, e, i, n) {
        for (var o in e) if (e.hasOwnProperty(o)) {
            var r, s = AXEStringUtil.lineToCamel(o);
            "function" == typeof t[s] ? "object" == typeof(r = t[s].call(t)) ? AXEArrayUtil.setValues(t[s].call(t), e[o], i[o], n) : "boolean" == typeof r || "string" == typeof r ? t[s].call(t, e[o]) : "number" == typeof r && t[s].call(t, e[o] + (i[o] - e[o]) * n) : "object" == typeof(r = t[s]) ? AXEArrayUtil.setValues(t[o], e[o], i[o], n) : "boolean" == typeof r || "string" == typeof r ? t[s] = e[o] : "number" == typeof r && (t[s] = e[o] + (i[o] - e[o]) * n)
        }
    },
    flatList: function(t) {
        for (var e = [], i = 0; i < t.length; i++) for (var n = 0; n < t[i].length; n++) e.push(t[i][n]);
        return e
    },
    shuffleList: function(t) {
        for (var e = t.slice(), i = []; e.length > 0;) {
            var n = Math.floor(e.length * Math.random()),
            o = e[n];
            i.push(o),
            e.splice(n, 1)
        }
        return i
    }
};
define("array_util", ["string_util"],
function() {});
var AXERunLoop = {}; !
function() {
    var t;
    AXERunLoop.timerScale = 1,
    AXERunLoop.targets = [],
    AXERunLoop.timer = void 0,
    AXERunLoop.lastTS = 0,
    AXERunLoop.enterFrame = null == (t = AXEEnv.vendorJSProp(window, "requestAnimationFrame")) ?
    function(t) {
        return window.setTimeout(t, 1e3 / 60)
    }: function(e) {
        return t.call(window, e)
    },
    AXERunLoop.clearAnimationFrame = function() {
        var t = AXEEnv.vendorJSProp(window, "cancelAnimationFrame");
        null == t && (t = window.clearTimeout);
        return function(e) {
            t.call(window, e)
        }
    } (),
    AXERunLoop.documentHidden = function() {
        var t = AXEEnv.vendorJSProp(document, "hidden");
        return void 0 === t && (t = !1),
        t
    },
    AXERunLoop.active = !1 === AXERunLoop.documentHidden(),
    AXERunLoop.onActivate = function() {
        if (!1 === AXERunLoop.active) {
            AXERunLoop.active = !0,
            AXERunLoop.lastTS = Date.now();
            for (var t = 0; t < AXERunLoop.targets.length; t++) {
                var e = AXERunLoop.targets[t].target;
                "function" == typeof e.onActivate && e.onActivate()
            }
            null != AXERunLoop.timer && (AXERunLoop.clearAnimationFrame(AXERunLoop.timer), AXERunLoop.timer = void 0),
            AXERunLoop.timer = AXERunLoop.enterFrame(AXERunLoop.onFire)
        }
    },
    AXERunLoop.onDeactivate = function() {
        if (!0 === AXERunLoop.active) {
            AXERunLoop.active = !1;
            for (var t = 0; t < AXERunLoop.targets.length; t++) {
                var e = AXERunLoop.targets[t].target;
                "function" == typeof e.onDeactivate && e.onDeactivate()
            }
        }
        null != AXERunLoop.timer && (AXEEnv.os.phone || AXEEnv.os.tablet) && (AXERunLoop.clearAnimationFrame(AXERunLoop.timer), AXERunLoop.timer = void 0)
    },
    AXERunLoop.inited = !1,
    AXERunLoop.pvDetectorTiemer = 0,
    AXERunLoop.detectorPageVisible = function() {
        AXERunLoop.active && AXERunLoop.documentHidden() ? AXERunLoop.onDeactivate() : AXERunLoop.active || AXERunLoop.documentHidden() || AXERunLoop.onActivate()
    },
    AXERunLoop.initialize = function() {
        if (!1 === AXERunLoop.inited) {
            AXERunLoop.inited = !0,
            null != window.onpageshow && null != window.onpagehide && (window.addEventListener("pageshow", AXERunLoop.onActivate), window.addEventListener("pagehide", AXERunLoop.onDeactivate));
            var t = AXEEnv.addVendorPrefix("visibilitychange");
            window.addEventListener(t,
            function() {
                AXERunLoop.documentHidden() ? AXERunLoop.onDeactivate() : AXERunLoop.onActivate()
            }),
            AXERunLoop.lastTS = (new Date).getTime(),
            AXERunLoop.active && (AXERunLoop.timer = AXERunLoop.enterFrame(AXERunLoop.onFire)),
            AXERunLoop.targets = [],
            AXEEnv.browser.wechat && (AXERunLoop.pvDetectorTiemer = window.setInterval(function() {
                AXERunLoop.detectorPageVisible()
            },
            100))
        }
    },
    AXERunLoop.addToRunLoop = function(t, e) {
        AXERunLoop.initialize();
        var i = !1;
        if (AXEArrayUtil.each(AXERunLoop.targets,
        function(n, o) {
            return o.target != t || (0 == isNaN(e) && (o.minInterval = e), i = !0, !1)
        }), !i) {
            var n = {
                target: t,
                ts: (new Date).getTime()
            };
            0 == isNaN(e) && (n.minInterval = e, n.step = 0),
            AXERunLoop.targets.unshift(n)
        }
    },
    AXERunLoop.onFire = function() {
        for (var t = (new Date).getTime(), e = (t - AXERunLoop.lastTS) / 1e3, i = 0; i < AXERunLoop.targets.length; i++) {
            var n = AXERunLoop.targets[i],
            o = n.target,
            r = (t - n.ts) / 1e3;
            if (n.hasOwnProperty("minInterval")) {
                if (n.step += e, n.step >= n.minInterval) {
                    var s = n.step;
                    n.step = 0,
                    o.fire && o.fire.call(o, r * AXERunLoop.timerScale, s * AXERunLoop.timerScale)
                }
            } else o.fire && o.fire.call(o, r, e)
        }
        AXERunLoop.lastTS = t,
        AXERunLoop.timer = AXERunLoop.enterFrame(AXERunLoop.onFire)
    },
    AXERunLoop.removeFromRunLoop = function(t) {
        for (var e = 0; e < AXERunLoop.targets.length; e++) if (AXERunLoop.targets[e].target == t) {
            AXERunLoop.targets.splice(e, 1);
            break
        }
    }
} (),
define("run_loop", ["env", "array_util"],
function() {});
var AXETouch = function(t, e, i, n) {
    this.x = t,
    this.y = e,
    this.stageX = i,
    this.stageY = n
};
AXETouch.prototype.constructor = AXETouch,
AXETouch.prototype.x = 0,
AXETouch.prototype.y = 0,
AXETouch.prototype.stageX = 0,
AXETouch.prototype.stageY = 0,
AXETouch.prototype.clone = function() {
    return new AXETouch(this.x, this.y, this.stageX, this.stageY)
},
define("touch",
function() {});
var AXEVec2 = function(t, e) {
    this.x = isNaN(t) ? this.x: t,
    this.y = isNaN(e) ? this.y: e
};
AXEVec2.vec2sFrom = function(t) {
    for (var e = [], i = 0; i < t.length; i++) e.push(new AXEVec2(t[i].x, t[i].y));
    return e
},
AXEVec2.prototype.constructor = AXEVec2,
AXEVec2.prototype.x = 0,
AXEVec2.prototype.y = 0,
AXEVec2.prototype.isOrigin = function() {
    return 0 == this.x && 0 == this.y
},
AXEVec2.prototype.equalsTo = function(t) {
    var e = !1;
    return t instanceof AXEVec2 && (e = this.x == t.x && this.y == t.y),
    e
},
AXEVec2.prototype.radian = function() {
    var t = 0;
    return 0 == this.x ? this.y > 0 ? t = Math.PI / 2 : this.y < 0 ? t = -1 * Math.PI / 2 : 0 == this.y && (t = 0) : (t = Math.atan(this.y / this.x), (this.y <= 0 && this.x < 0 || this.y >= 0 && this.x < 0) && (t += Math.PI)),
    t
},
AXEVec2.prototype.radian2PI = function() {
    var t = 0;
    return 0 == this.x ? this.y > 0 ? t = Math.PI / 2 : this.y < 0 ? t = Math.PI / 2 * 3 : 0 == this.y && (t = 0) : (t = Math.atan(this.y / this.x), this.x < 0 && this.y > 0 ? t += Math.PI: this.x < 0 && this.y < 0 ? t += Math.PI: this.x > 0 && this.y < 0 && (t += 2 * Math.PI)),
    t
},
AXEVec2.prototype.angle2PI = function() {
    return this.radian2PI() * (180 / Math.PI)
},
AXEVec2.prototype.angle = function() {
    return this.radian() * (180 / Math.PI)
},
AXEVec2.prototype.scale = function(t) {
    this.x = this.x * t,
    this.y = this.y * t
},
AXEVec2.prototype.scaleWith = function(t) {
    return new AXEVec2(this.x * t, this.y * t)
},
AXEVec2.prototype.scaleWithVec2 = function(t) {
    this.x = this.x * t.x,
    this.y = this.y * t.y
},
AXEVec2.prototype.scaleWithVec2 = function(t) {
    return new AXEVec2(this.x * t.x, this.y * t.y)
},
AXEVec2.prototype.multiply = function(t) {
    return this.x * t.x + this.y * t.y
},
AXEVec2.prototype.add = function(t) {
    return new AXEVec2(this.x + t.x, this.y + t.y)
},
AXEVec2.prototype.subtract = function(t) {
    return new AXEVec2(this.x - t.x, this.y - t.y)
},
AXEVec2.prototype.normalize = function() {
    var t = this.len();
    t > 0 && (this.x = this.x / t, this.y = this.y / t)
},
AXEVec2.prototype.normalization = function() {
    var t = this.len(),
    e = 0,
    i = 0;
    return t > 0 && (e = this.x / t, i = this.y / t),
    new AXEVec2(e, i)
},
AXEVec2.prototype.lerp = function(t, e) {
    return new AXEVec2(this.x * (1 - t) + e.x * t, this.y * (1 - t) + e.y * t)
},
AXEVec2.prototype.len = function(t) {
    if (0 == isNaN(t)) {
        var e = Math.pow(t, 2),
        i = this.x * this.x / (this.x * this.x + this.y * this.y),
        n = this.y * this.y / (this.x * this.x + this.y * this.y);
        this.x = this.x >= 0 ? Math.sqrt(e * i) : -1 * Math.sqrt(e * i),
        this.y = this.y >= 0 ? Math.sqrt(e * n) : -1 * Math.sqrt(e * n)
    }
    return Math.sqrt(this.x * this.x + this.y * this.y)
},
AXEVec2.prototype.distance = function(t) {
    return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y))
},
AXEVec2.prototype.intersect = function(t) {
    var e = null,
    i = Math.max(this.x, t.x),
    n = Math.min(this.y, t.y);
    return i < n && (e = new AXEVec2(i, n)),
    e
},
AXEVec2.prototype.contains = function(t) {
    return t >= this.x && t <= this.y
},
AXEVec2.prototype.isPerpendicular = function(t) {
    return this.x * t.x + this.y * t.y == 0
},
AXEVec2.prototype.projection = function(t) {
    var e = (this.x * t.x + this.y * t.y) / Math.pow(t.len(), 2);
    return new AXEVec2(e * t.x, e * t.y)
},
AXEVec2.prototype.perpendicular = function(t) {
    var e = this.projection(t);
    return new AXEVec2(this.x - e.x, this.y - e.y)
},
AXEVec2.prototype.toNormalCoordinate = function(t, e) {
    var i = t / 2,
    n = e / 2;
    this.x = (this.x - i) / i,
    this.y = -1 * (this.y - n) / n
},
AXEVec2.prototype.clone = function() {
    return new AXEVec2(this.x, this.y)
},
AXEVec2.prototype.toArray = function() {
    return [this.x, this.y]
},
AXEVec2.prototype.toString = function() {
    return "(x:" + this.x + ",y:" + this.y + ")"
},
define("vec2",
function() {});
var AXETouchEvent = function(t, e) {
    this.touches = AXEArrayUtil.copyList(e),
    AXEEvent.prototype.constructor.call(this, t, !0)
};
AXETouchEvent.CLICK = "click",
AXETouchEvent.TOUCH_START = "touch_start",
AXETouchEvent.TOUCH_MOVE = "touch_move",
AXETouchEvent.TOUCH_END = "touch_end",
AXETouchEvent.SWIPE = "swipe",
AXETouchEvent.ROLL_OVER = "roll_over",
AXETouchEvent.ROLL_OUT = "roll_out",
AXETouchEvent.DOUBLE_TAP = "double_tap",
AXETouchEvent.prototype = new AXEEvent,
AXETouchEvent.prototype.constructor = AXETouchEvent,
AXETouchEvent.prototype.touches = null,
AXETouchEvent.prototype.vec2Touches = function() {
    for (var t = [], e = 0; e < this.touches.length; e++) t.push(new AXEVec2(this.touches[e].x, this.touches[e].y));
    return t
},
AXETouchEvent.prototype.clone = function() {
    const t = new AXETouchEvent(this.type, this.touches);
    return t.evtData = this.evtData,
    t
},
define("touch_event", ["event", "touch", "array_util", "vec2"],
function() {});
var AXEMat3 = function(t, e, i, n, o, r) {
    this.a = isNaN(t) ? this.a: parseFloat(t),
    this.b = isNaN(e) ? this.b: parseFloat(e),
    this.c = isNaN(i) ? this.c: parseFloat(i),
    this.d = isNaN(n) ? this.d: parseFloat(n),
    this.tx = isNaN(o) ? this.tx: parseFloat(o),
    this.ty = isNaN(r) ? this.ty: parseFloat(r)
};
AXEMat3.mat3With2Points = function(t, e, i, n) {
    var o = ((i.x - n.x) * (t.x - e.x) - (i.y - n.y) * (e.y - t.y)) / (Math.pow(t.x - e.x, 2) - (t.y - e.y) * (e.y - t.y)),
    r = ((i.x - n.x) * (t.y - e.y) - (i.y - n.y) * (t.x - e.x)) / ((t.y - e.y) * (e.y * t.y) - Math.pow(t.x - e.x, 2)),
    s = i.x - t.x * o + r * t.y,
    a = i.y - r * t.x - o * t.y;
    return new AXEMat3(o, r, -r, o, s, a)
},
AXEMat3.rotateMat = function(t, e) {
    var i = new AXEMat3;
    return e || (e = new AXEVec2(0, 0)),
    i.a = Math.cos(t),
    i.b = Math.sin(t),
    i.c = -1 * i.b,
    i.d = i.a,
    i.tx = e.x - i.a * e.x - i.c * e.y,
    i.ty = e.y - i.b * e.x - i.d * e.y,
    i
},
AXEMat3.mat3With3Points = function(t, e) {
    var i = ((e[0].x - e[1].x) * (t[1].y - t[2].y) - (e[1].x - e[2].x) * (t[0].y - t[1].y)) / ((t[0].x - t[1].x) * (t[1].y - t[2].y) - (t[1].x - t[2].x) * (t[0].y - t[1].y)),
    n = ((e[0].x - e[1].x) * (t[0].x - t[2].x) - (e[0].x - e[2].x) * (t[0].x - t[1].x)) / ((t[0].x - t[2].x) * (t[0].y - t[1].y) - (t[0].x - t[1].x) * (t[0].y - t[2].y)),
    o = e[0].x - i * t[0].x - n * t[0].y,
    r = ((e[0].y - e[1].y) * (t[1].y - t[2].y) - (e[1].y - e[2].y) * (t[0].y - t[1].y)) / ((t[0].x - t[1].x) * (t[1].y - t[2].y) - (t[1].x - t[2].x) * (t[0].y - t[1].y)),
    s = ((e[0].y - e[1].y) * (t[0].x - t[2].x) - (e[0].y - e[2].y) * (t[0].x - t[1].x)) / ((t[0].x - t[2].x) * (t[0].y - t[1].y) - (t[0].x - t[1].x) * (t[0].y - t[2].y)),
    a = e[0].y - r * t[0].x - s * t[0].y;
    return new AXEMat3(i, r, n, s, o, a)
},
AXEMat3.prototype.a = 1,
AXEMat3.prototype.b = 0,
AXEMat3.prototype.c = 0,
AXEMat3.prototype.d = 1,
AXEMat3.prototype.tx = 0,
AXEMat3.prototype.ty = 0,
AXEMat3.prototype.scale = function(t, e) {
    e = arguments.length >= 2 ? e: t,
    this.concat(new AXEMat3(t, 0, 0, e))
},
AXEMat3.prototype.rotate = function(t) {
    var e = t * (Math.PI / 180);
    this.concat(new AXEMat3(Math.cos(e), Math.sin(e), -1 * Math.sin(e), Math.cos(e)))
},
AXEMat3.prototype.move = function(t, e) {
    this.concat(new AXEMat3(1, 0, 0, 1, t, e))
},
AXEMat3.prototype.concat = function(t) {
    var e = this.concatWith(t);
    this.a = e.a,
    this.b = e.b,
    this.c = e.c,
    this.d = e.d,
    this.tx = e.tx,
    this.ty = e.ty
},
AXEMat3.prototype.concatWith = function(t) {
    var e = this.a * t.a + this.b * t.c,
    i = this.a * t.b + this.b * t.d,
    n = this.c * t.a + this.d * t.c,
    o = this.c * t.b + this.d * t.d,
    r = this.tx * t.a + this.ty * t.c + t.tx,
    s = this.tx * t.b + this.ty * t.d + t.ty;
    return new AXEMat3(e, i, n, o, r, s)
},
AXEMat3.prototype.transformPoint = function(t) {
    var e = new AXEVec2;
    return e.x = t.x * this.a + t.y * this.c + this.tx,
    e.y = t.x * this.b + t.y * this.d + this.ty,
    e
},
AXEMat3.prototype.inversePoint = function(t) {
    return this.inversion().transformPoint(t)
},
AXEMat3.prototype.determinant = function() {
    return this.a * this.d - this.b * this.c
},
AXEMat3.prototype.inversion = function() {
    var t = this.clone();
    return t.inverse(),
    t
},
AXEMat3.prototype.inverse = function() {
    var t = this.determinant();
    if (0 === t) this.a = 0,
    this.b = 0,
    this.c = 0,
    this.d = 0,
    this.tx = 0,
    this.ty = 0;
    else {
        var e = 1 / t,
        i = this.d * e,
        n = -1 * this.b * e,
        o = -1 * this.c * e,
        r = this.a * e,
        s = (this.c * this.ty - this.d * this.tx) * e,
        a = -1 * (this.a * this.ty - this.b * this.tx) * e;
        this.a = i,
        this.b = n,
        this.c = o,
        this.d = r,
        this.tx = s,
        this.ty = a
    }
},
AXEMat3.prototype.adjoint = function() {
    var t = this.d,
    e = -1 * this.b,
    i = -1 * this.c,
    n = this.a,
    o = this.c * this.ty - this.d * this.tx,
    r = -1 * (this.a * this.ty - this.b * this.tx);
    return new AXEMat3(t, e, i, n, o, r)
},
AXEMat3.prototype.equalsTo = function(t) {
    var e = !1;
    return null != t && (e = this.a == t.a && this.b == t.b && this.c == t.c && this.d == t.d && this.tx == t.tx && this.ty == t.ty),
    e
},
AXEMat3.prototype.floatCount = function(t) {
    var e = Math.pow(10, t),
    i = new AXEMat3;
    return i.a = Math.round(this.a * e) / e,
    i.b = Math.round(this.b * e) / e,
    i.c = Math.round(this.c * e) / e,
    i.d = Math.round(this.d * e) / e,
    i.tx = Math.round(this.tx * e) / e,
    i.ty = Math.round(this.ty * e) / e,
    i
},
AXEMat3.prototype.clone = function() {
    return new AXEMat3(this.a, this.b, this.c, this.d, this.tx, this.ty)
},
AXEMat3.prototype.toArray = function() {
    return [this.a, this.b, this.c, this.d, this.tx, this.ty]
},
AXEMat3.prototype.toString = function() {
    var t = "a:" + this.a + "  b:" + this.b;
    return t += " c:" + this.c + "  d:" + this.d,
    t += " tx:" + this.tx + "  ty:" + this.ty
},
define("mat3", ["vec2"],
function() {});
var AXEBGRepeatMode = {
    REPEAT_ALL: "repeat_all",
    REPEAT_X: "repeat_x",
    REPEAT_Y: "repeat_y",
    NO_REPEAT: "no_repeat"
};
define("bg_repeat_mode",
function() {});
var AXEColor = function(t) {
    if (arguments.length >= 1) {
        var e, i, n, o, r = t.replace(/^#|^0x/, ""),
        s = parseInt(r, 16);
        if (6 != r.length && 8 != r.length || isNaN(s)) throw new Error("Invalid color value: " + t);
        6 == r.length ? (e = s >> 16 & 255, i = s >> 8 & 255, n = 255 & s, o = 255) : 8 == r.length && (e = s >> 24 & 255, i = s >> 16 & 255, n = s >> 8 & 255, o = 255 & s),
        this.r(e),
        this.g(i),
        this.b(n),
        this.a(o)
    }
};
AXEColor.merge2Colors = function(t, e, i) {
    var n = new AXEColor;
    return n.r(Math.floor(t.r() * i + e.r() * (1 - i))),
    n.g(Math.floor(t.g() * i + e.g() * (1 - i))),
    n.b(Math.floor(t.b() * i + e.b() * (1 - i))),
    n.a(Math.floor(t.a() * i + e.a() * (1 - i))),
    n
},
AXEColor.colorWithString = function(t) {
    return (t = t.replace(/^#|^0x/, "")).length < 6 && (t = AXEStringUtil.fillStringTo(t, "0", 6)),
    new AXEColor(t)
},
AXEColor.colorWithRGBA = function(t, e, i, n) {
    var o = new AXEColor;
    return o.r(t),
    o.g(e),
    o.b(i),
    arguments.length < 4 && (n = 255),
    o.a(n),
    o
},
AXEColor.randomColor = function(t, e) {
    var i = (t = isNaN(t) ? 0 : t) >> 16 & 255,
    n = t >> 8 & 255,
    o = 255 & t,
    r = (e = isNaN(e) ? 16777215 : e) >> 16 & 255,
    s = e >> 8 & 255,
    a = 255 & e,
    l = i + Math.floor(Math.random() * (r - i)),
    h = i + Math.floor(Math.random() * (s - n)),
    c = i + Math.floor(Math.random() * (a - o));
    return AXEColor.colorWithRGBA(l, h, c, 255)
},
AXEColor.prototype = new AXEEventTarget,
AXEColor.prototype.constructor = AXEColor,
AXEColor.prototype.bit24String = null,
AXEColor.prototype.bit24Updated = !1,
AXEColor.prototype.to24BitString = function(t) {
    if (null == this.bit24String || !1 === this.bit24Updated) {
        var e = AXEStringUtil.fillStringTo(this.r().toString(16), "0", 2).toUpperCase(),
        i = AXEStringUtil.fillStringTo(this.g().toString(16), "0", 2).toUpperCase(),
        n = AXEStringUtil.fillStringTo(this.b().toString(16), "0", 2).toUpperCase();
        t = arguments.length >= 1 ? t: "#",
        this.bit24String = t + e + i + n,
        this.bit24Updated = !0
    }
    return this.bit24String
},
AXEColor.prototype.bit32String = null,
AXEColor.prototype.bit32Updated = !1,
AXEColor.prototype.to32BitString = function(t) {
    if (null == this.bit32String || !1 === this.bit32Updated) {
        var e = AXEStringUtil.fillStringTo(this.r().toString(16), "0", 2).toUpperCase(),
        i = AXEStringUtil.fillStringTo(this.g().toString(16), "0", 2).toUpperCase(),
        n = AXEStringUtil.fillStringTo(this.b().toString(16), "0", 2).toUpperCase(),
        o = AXEStringUtil.fillStringTo(this.a().toString(16), "0", 2).toUpperCase();
        t = arguments.length >= 1 ? t: "#",
        this.bit32String = t + e + i + n + o,
        this.bit32Updated = !0
    }
    return this.bit32String
},
AXEColor.prototype.rgbString = null,
AXEColor.prototype.rgbStringUpdated = !1,
AXEColor.prototype.toRGBString = function() {
    if (null == this.rgbString || !1 === this.rgbStringUpdated) {
        this.rgbStringUpdated = !0;
        var t = Math.round(this.r()),
        e = Math.round(this.g()),
        i = Math.round(this.b());
        this.rgbString = "rgb(" + t.toString(10) + "," + e.toString(10) + "," + i.toString() + ")"
    }
    return this.rgbString
},
AXEColor.prototype.rgbaString = null,
AXEColor.prototype.rgbaStringUpdated = !1,
AXEColor.prototype.toRGBAString = function() {
    if (null == this.rgbaString || !1 === this.rgbaStringUpdated) {
        this.rgbaStringUpdated = !0;
        var t = Math.round(this.r()),
        e = Math.round(this.g()),
        i = Math.round(this.b()),
        n = Math.round(this.a() / 255 * 100) / 100;
        this.rgbaString = "rgba(" + t.toString(10) + "," + e.toString(10) + "," + i.toString() + "," + n.toString() + ")"
    }
    return this.rgbaString
},
AXEColor.prototype._r = 0,
AXEColor.prototype.r = function(t) {
    return arguments.length > 0 && (t = Math.max(0, Math.min(255, Math.round(t)))) != this._r && (this._r = t, this.bit24Updated = !1, this.bit32Updated = !1, this.rgbaStringUpdated = !1, this.rgbStringUpdated = !1, this.cieUpdated = !1, this.yuvUpdated = !1, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._r
},
AXEColor.prototype._g = 0,
AXEColor.prototype.g = function(t) {
    return arguments.length > 0 && (t = Math.max(0, Math.min(255, Math.round(t)))) != this._g && (this._g = t, this.bit24Updated = !1, this.bit32Updated = !1, this.rgbaStringUpdated = !1, this.rgbStringUpdated = !1, this.cieUpdated = !1, this.yuvUpdated = !1, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._g
},
AXEColor.prototype._b = 0,
AXEColor.prototype.b = function(t) {
    return arguments.length > 0 && (t = Math.max(0, Math.min(255, Math.round(t)))) != this._b && (this._b = t, this.bit24Updated = !1, this.bit32Updated = !1, this.rgbaStringUpdated = !1, this.rgbStringUpdated = !1, this.cieUpdated = !1, this.yuvUpdated = !1, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._b
},
AXEColor.prototype._a = 0,
AXEColor.prototype.a = function(t) {
    return arguments.length > 0 && (t = Math.max(0, Math.min(255, Math.round(t)))) != this._a && (this._a = t, this.bit24Updated = !1, this.bit32Updated = !1, this.rgbaStringUpdated = !1, this.rgbStringUpdated = !1, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._a
},
AXEColor.prototype.cieUpdated = !1,
AXEColor.prototype.updateCIE = function() {
    var t = this._r / 255,
    e = this._g / 255,
    i = this._b / 255;
    t > .04045 ? t = Math.pow((t + .055) / 1.055, 2.4) : t /= 12.92,
    e > .04045 ? e = Math.pow((e + .055) / 1.055, 2.4) : e /= 12.92,
    i > .04045 ? i = Math.pow((i + .055) / 1.055, 2.4) : i /= 12.92,
    t *= 100,
    e *= 100,
    i *= 100,
    this._x = .4124 * t + .3576 * e + .1805 * i,
    this._y = .2126 * t + .7152 * e + .0722 * i,
    this._z = .0193 * t + .1192 * e + .9505 * i;
    var n = this._x / 98.074,
    o = this._y / 100,
    r = this._z / 118.232;
    n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116;
    var s = 116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16,
    a = 500 * (n - o),
    l = 200 * (o - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116));
    this._cieL = s,
    this._cieA = a,
    this._cieB = l,
    this.cieUpdated = !0
},
AXEColor.prototype.compare = function(t) {
    var e = this.cieL(),
    i = this.cieA(),
    n = this.cieB(),
    o = t.cieL(),
    r = t.cieA(),
    s = t.cieB(),
    a = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)),
    l = o - e,
    h = Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2)) - a,
    c = Math.sqrt((e - o) * (e - o) + (i - r) * (i - r) + (n - s) * (n - s)),
    p = c * c - l * l - h * h;
    return p = p > 0 ? Math.sqrt(p) : 0,
    l /= 1,
    h /= 1 * (1 + .045 * a),
    p /= 1 * (1 + .015 * a),
    Math.sqrt(l * l + h * h + p * p)
},
AXEColor.prototype._cieL = 0,
AXEColor.prototype.cieL = function() {
    return this.cieUpdated || this.updateCIE(),
    this._cieL
},
AXEColor.prototype._cieA = 0,
AXEColor.prototype.cieA = function() {
    return this.cieUpdated || this.updateCIE(),
    this._cieA
},
AXEColor.prototype._cieB = 0,
AXEColor.prototype.cieB = function() {
    return this.cieUpdated || this.updateCIE(),
    this._cieB
},
AXEColor.prototype._x = 0,
AXEColor.prototype.x = function() {
    return this.cieUpdated || this.updateCIE(),
    this._x
},
AXEColor.prototype._y = 0,
AXEColor.prototype.y = function() {
    return this.cieUpdated || this.updateCIE(),
    this._y
},
AXEColor.prototype._z = 0,
AXEColor.prototype.z = function() {
    return this.cieUpdated || this.updateCIE(),
    this._z
},
AXEColor.prototype.compare2 = function(t) {
    return Math.sqrt(Math.pow(this.yuvU() - t.yuvU(), 2) + Math.pow(this.yuvV() - t.yuvV(), 2))
},
AXEColor.prototype.yuvUpdated = !1,
AXEColor.prototype.updateYUV = function() {
    this._yuvY = .299 * this.r() + .587 * this.g() + .114 * this.b(),
    this._yuvU = -.147 * this.r() - .289 * this.g() + .463 * this.b(),
    this._yuvV = .615 * this.r() - .515 * this.g() - .1 * this.b(),
    this.yuvUpdated = !0
},
AXEColor.prototype._yuvY = 0,
AXEColor.prototype.yuvY = function() {
    return this.yuvUpdated || this.updateYUV(),
    this._yuvY
},
AXEColor.prototype._yuvU = 0,
AXEColor.prototype.yuvU = function() {
    return this.yuvUpdated || this.updateYUV(),
    this._yuvU
},
AXEColor.prototype._yuvV = 0,
AXEColor.prototype.yuvV = function() {
    return this.yuvUpdated || this.updateYUV(),
    this._yuvV
},
AXEColor.prototype.compare3 = function(t) {
    var e = (this.r() + t.r()) / 2,
    i = this.r() - t.r(),
    n = this.g() - t.g(),
    o = this.b() - t.b();
    return Math.sqrt(((512 + e) * i * i >> 8) + 4 * n * n + ((767 - e) * o * o >> 8))
},
AXEColor.prototype.hsvUpdated = !1,
AXEColor.prototype.updateHSV = function() {
    var t = this.r() / 255,
    e = this.g() / 255,
    i = this.b() / 255,
    n = Math.max(t, e, i),
    o = n - Math.min(t, e, i);
    switch (o) {
    case 0:
        this._hsvH = 0;
        break;
    case t:
        this._hsvH = (e - i) / o % 6 * 60;
        break;
    case e:
        this._hsvH = 60 * ((i - t) / o + 2);
        break;
    case i:
        this._hsvH = 60 * ((t - e) / o + 4)
    }
    this._hsvS = 0 == n ? 0 : o / n,
    this._hsvV = n,
    this.hsvUpdated = !0
},
AXEColor.prototype._hsvH = 0,
AXEColor.prototype.hsvH = function() {
    return this.hsvUpdated || this.updateHSV(),
    this._hsvH
},
AXEColor.prototype._hsvS = 0,
AXEColor.prototype.hsvS = function() {
    return this.hsvUpdated || this.updateHSV(),
    this._hsvS
},
AXEColor.prototype._hsvV = 0,
AXEColor.prototype.hsvV = function() {
    return this.hsvUpdated || this.updateHSV(),
    this._hsvV
},
AXEColor.prototype.adjustSaturation = function(t) {
    if (t < 1) {
        var e = (this.r() + this.g() + this.b()) / 3,
        i = e + (this.r() - e) * t,
        n = e + (this.g() - e) * t,
        o = e + (this.b() - e) * t;
        this.r(Math.floor(i)),
        this.g(Math.floor(n)),
        this.b(Math.floor(o)),
        this.bit24Updated = !1,
        this.bit32Updated = !1,
        this.rgbaStringUpdated = !1,
        this.rgbStringUpdated = !1,
        this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))
    }
},
AXEColor.prototype.equalsTo = function(t) {
    return this.r() === t.r() && this.g() === t.g() && this.b() === t.b() && this.a() === t.a()
},
AXEColor.prototype.dodge = function(t) {
    var e = this.clone();
    return e.r(e.r() * (1 - t)),
    e.g(e.g() * (1 - t)),
    e.b(e.b() * (1 - t)),
    e
},
AXEColor.prototype.deepen = function(t) {
    var e = this.clone();
    return e.r(e.r() * (1 + t)),
    e.g(e.g() * (1 + t)),
    e.b(e.b() * (1 + t)),
    e
},
AXEColor.prototype.clone = function() {
    return AXEColor.colorWithRGBA(this.r(), this.g(), this.b(), this.a())
},
AXEColor.prototype.dealloc = function() {
    this._a = 0,
    this._r = 0,
    this._g = 0,
    this._b = 0,
    this.bit24String = null,
    this.bit24Updated = !1,
    this.bit32String = null,
    this.bit32Updated = !1,
    this.rgbString = null,
    this.rgbStringUpdated = !1,
    this.rgbaString = null,
    this.rgbaStringUpdated = !1,
    this.cieUpdated = !1,
    AXEEventTarget.prototype.dealloc.call(this)
},
define("color", ["string_util", "event", "event_target"],
function() {});
var AXEBlendMode = {
    SOURCE_OVER: "source-over",
    SOURCE_ATOP: "source-atop",
    SOURCE_IN: "source-in",
    SOURCE_OUT: "source-out",
    DESTINATION_OVER: "destination-over",
    DESTINATION_ATOP: "destination-atop",
    DESTINATION_IN: "destination-in",
    DESTINATION_OUT: "destination-out",
    LIGHTEN: "lighten",
    DARKEN: "darken",
    SCREEN: "screen",
    MULTIPLY: "multiply",
    OVERLAY: "overlay",
    XOR: "xor",
    COPY: "copy",
    COLOR_DODGE: "color-dodge"
};
define("blend_mode",
function() {});
var AXERender = function(t, e) {
    if (arguments.length > 0) {
        this.stage = t,
        this.stage.render = this;
        var i = $("body");
        this.$txtFPS = $("div.fps"),
        this.$wrap = Boolean(e) && e.length > 0 ? e: i,
        this.$canvas = this.createCanvas(),
        this.$wrap.prepend(this.$canvas),
        this.resize(),
        this.configEvents(),
        AXERunLoop.addToRunLoop(this, isNaN(this.stage.frameRate()) ? this.minRenderInterval() : 1 / this.stage.frameRate())
    }
};
AXERender.prototype.constructor = AXERender,
AXERender.prototype.stage = null,
AXERender.prototype.$wrap = null,
AXERender.prototype.$txtFPS = null,
AXERender.prototype.$canvas = null,
AXERender.prototype.createCanvas = function() {
    return null
},
AXERender.prototype.boxWidth = 0,
AXERender.prototype.boxHeight = 0,
AXERender.prototype.resizeCanvas = function() {
    this.$canvas.css("left", 0),
    this.$canvas.css("top", 0);
    var t = 0,
    e = 0;
    if (this.stage.lockSize()) {
        var i = $(window);
        t = i.scrollLeft(),
        e = i.scrollTop()
    }
    var n = this.stage.windowWidth + t,
    o = this.stage.windowHeight + e;
    return this.$canvas.width(n),
    this.$canvas.height(o),
    this.$canvas.attr("width", n * this.stage.ratio()),
    this.$canvas.attr("height", o * this.stage.ratio()),
    new AXEVec2(n, o)
},
AXERender.prototype.orientation = 0,
AXERender.prototype.resize = function() {
    var t, e;
    this.$wrap[0] == $("body")[0] ? (t = $(window).width(), e = $(window).height()) : (t = this.$wrap.width(), e = this.$wrap.height()),
    this.stage.minWidth() > 0 && t < this.stage.minWidth() ? (t = this.stage.minWidth(), "visible" != this.$wrap.css("overflow-x") && this.$wrap.css("overflow-x", "visible")) : "hidden" != this.$wrap.css("overflow-x") && this.$wrap.css("overflow-x", "hidden"),
    this.stage.minHeight() > 0 && e < this.stage.minHeight() ? (e = this.stage.minHeight(), "visible" != this.$wrap.css("overflow-y") && this.$wrap.css("overflow-y", "visible")) : "hidden" != this.$wrap.css("overflow-y") && this.$wrap.css("overflow-y", "hidden");
    var i = AXEEnv.device.orientation(); (t != this.boxWidth || e != this.boxHeight || this.stage.sizeChange || this.orientation != i) && (this.stage.lockSize() && this.orientation == i && AXEEnv.os.android || (this.boxWidth = t, this.boxHeight = e), this.orientation = i, this.stage.resize(this.boxWidth, this.boxHeight))
},
AXERender.prototype.onActivate = function() {
    this.stage.active(!0)
},
AXERender.prototype.onDeactivate = function() {
    this.stage.active(!1)
},
AXERender.prototype._minRenderInterval = .025,
AXERender.prototype.minRenderInterval = function(t) {
    return 0 == isNaN(t) && t != this._minRenderInterval && (this._minRenderInterval = t, this.currentInterval = t),
    this._minRenderInterval
},
AXERender.prototype.fire = function(t, e) {
    null != this.$txtFPS && this.$txtFPS.text(Math.round(1 / (e / AXERunLoop.timerScale) * 10) / 10),
    this.resize(),
    this.stage.update(t, e),
    this.stage.needToRender() && (this.render(), this.stage.needToRender(!1))
},
AXERender.prototype.render = function() {},
AXERender.prototype.takePhoto = function(t, e, i, n) {},
AXERender.prototype.createTouchEvent = function(t) {
    for (var e = this.$canvas.offset(), i = [], n = 0; n < t.length; n++) {
        var o = null,
        r = t[n].pageX - e.left,
        s = t[n].pageY - e.top;
        isNaN(t[n].clientX),
        o = new AXEVec2(r * this.stage.ratio(), s * this.stage.ratio()),
        o = this.stage.stageMatrix().inversePoint(o);
        var a = new AXETouch(o.x, o.y, o.x, o.y);
        i.push(a)
    }
    return i
},
AXERender.prototype.startEvent = null,
AXERender.prototype.lastEvent = null,
AXERender.prototype.lastClick = null,
AXERender.prototype.returnTiemer = 0,
AXERender.prototype.configEvents = function() {
    var t, e, i, n = this;
    n.$wrap.on("focusout",
    function() {
        window.clearTimeout(n.returnTiemer),
        n.returnTiemer = window.setTimeout(function() {
            $(window).scrollTop(0),
            n.stage.needToRender(!0)
        },
        100)
    }),
    n.$wrap.on("focusin",
    function() {
        window.clearTimeout(n.returnTiemer)
    }),
    AXEEnv.os.isTouchDevice ? (t = "touchstart", e = "touchmove", i = "touchend") : (t = "mousedown", e = "mousemove", i = "mouseup");
    var o = function(e) {
        var i = null;
        null != e.originalEvent && (e = e.originalEvent),
        i = e.type == t ? AXETouchEvent.TOUCH_START: AXETouchEvent.TOUCH_MOVE;
        var o = null;
        o = AXEEnv.os.isTouchDevice ? e.touches: [e];
        var r = n.createTouchEvent(o),
        s = new AXETouchEvent(i, r);
        s.currentPhase = AXEEvent.CAPTURING_PHASE,
        s.evtData = e,
        s.type == AXETouchEvent.TOUCH_START ? (n.startEvent = s, n.lastEvent = s) : n.lastEvent = s,
        n.stage.triggerEvent(s),
        e.preventDefault()
    },
    r = function() {
        0 == AXEEnv.os.isTouchDevice && (n.$canvas.on("mousemove",
        function(t) {
            var e = [t],
            i = n.createTouchEvent(e),
            o = new AXETouchEvent(AXETouchEvent.ROLL_OVER, i);
            o.evtData = t,
            o.currentPhase = AXEEvent.CAPTURING_PHASE,
            n.stage.triggerEvent(o),
            t.preventDefault()
        }), n.$canvas.on("mouseout",
        function(t) {
            var e = new AXETouchEvent(AXETouchEvent.ROLL_OUT, []);
            e.currentPhase = AXEEvent.CAPTURING_PHASE,
            e.evtData = t,
            n.stage.triggerEvent(e),
            t.preventDefault()
        }))
    };
    r(),
    n.$canvas.on(t,
    function(t) {
        var s = document.activeElement;
        try {
            s.blur()
        } catch(t) {
            console.log(t.message)
        }
        o(t),
        n.$canvas.off(e),
        n.$canvas.off(i),
        n.$canvas.on(e, o),
        n.$canvas.on(i,
        function(t) {
            t.preventDefault();
            var o = n.lastEvent.type == AXETouchEvent.TOUCH_START;
            if (0 == o && n.lastEvent.type == AXETouchEvent.TOUCH_MOVE) {
                var s = new AXEVec2(n.startEvent.touches[0].x, n.startEvent.touches[0].y),
                a = new AXEVec2(n.lastEvent.touches[0].x, n.lastEvent.touches[0].y);
                o = s.distance(a) < 20
            }
            if (o) {
                var l = new AXETouchEvent(AXETouchEvent.CLICK, n.lastEvent.touches);
                if (l.currentPhase = AXEEvent.CAPTURING_PHASE, l.evtData = t, n.stage.triggerEvent(l), null != n.lastClick && Math.abs(n.lastClick.timestamp - l.timestamp) <= 300) {
                    var h = new AXETouchEvent(AXETouchEvent.DOUBLE_TAP, n.lastClick.touches.concat(l.touches));
                    h.currentPhase = AXEEvent.CAPTURING_PHASE,
                    h.evtData = t,
                    n.lastClick = null,
                    n.stage.triggerEvent(h)
                } else n.lastClick = l
            }
            if (n.lastEvent.type == AXETouchEvent.TOUCH_MOVE && Math.abs(n.lastEvent.timestamp - n.startEvent.timestamp) <= 500 && n.lastEvent.touches.length == n.startEvent.touches.length) {
                var c = new AXEVec2(n.startEvent.touches[0].stageX, n.startEvent.touches[0].stageY),
                p = new AXEVec2(n.lastEvent.touches[0].stageX, n.lastEvent.touches[0].stageY);
                if (c.distance(p) > 50) {
                    var u = new AXETouchEvent(AXETouchEvent.SWIPE, [n.startEvent.touches[0], n.lastEvent.touches[0]]);
                    u.currentPhase = AXEEvent.CAPTURING_PHASE,
                    u.evtData = t,
                    n.stage.triggerEvent(u)
                }
            }
            var d = new AXETouchEvent(AXETouchEvent.TOUCH_END, []);
            d.currentPhase = AXEEvent.CAPTURING_PHASE,
            d.evtData = t,
            n.stage.triggerEvent(d),
            n.$canvas.off(e),
            n.$canvas.off(i),
            r()
        })
    })
},
AXERender.prototype.layoutHTMLElement = function(t, e, i, n) {
    t.css("outline", "none"),
    "none" != t.css("display").toLowerCase() && t.css("display", "block"),
    t.width(e.width()),
    t.height(e.height()),
    e.stageEnabled() ? t.css("pointer-events", "auto") : t.css("pointer-events", "none"),
    0 == (i = Boolean(i)) && t.css("opacity", e.stageAlpha()),
    null != e.bgColor() ? t.css("background", e.bgColor().to24BitString()) : (t.css("background", "none"), t.css("background-color", "rgba(0,0,0,0)")),
    t.css("overflow", e.clip() ? "hidden": "visible"),
    t.css("position", "absolute"),
    t.css("left", 0),
    t.css("top", 0);
    var o = e.stage();
    if (null != o && "AXEStage" == o.className) {
        var r = o.stageMatrix().concatWith(new AXEMat3(1 / o.ratio(), 0, 0, 1 / o.ratio(), 0, 0)),
        s = e.matrixTo(o).concatWith(r),
        a = "matrix(" + (s = s.floatCount(5)).toArray().join(",") + ")"; (n = "boolean" == typeof n && n) ? 0 == s.b && 0 == s.c ? (t.css("left", s.tx), t.css("top", s.ty), t.css("width", e.width() * s.a), t.css("height", e.height() * s.d), t.css("transform-origin", ""), t.css("-moz-transform-origin", ""), t.css("-webkit-transform-origin", ""), t.css("-o-transform-origin", ""), t.css("-m-transform-origin", ""), t.css("transform", ""), t.css("-webkit-transform", ""), t.css("-moz-transform", ""), t.css("-o-transform", ""), t.css("-m-transform", "")) : (t.css("width", e.width() * Math.abs(s.b)), t.css("height", e.height() * Math.abs(s.c)), s.a = 0, s.d = 0, s.b = s.b / Math.abs(s.b), s.c = s.c / Math.abs(s.c), t.css("transform-origin", "0 0"), t.css("-moz-transform-origin", "0 0"), t.css("-webkit-transform-origin", "0 0"), t.css("-o-transform-origin", "0 0"), t.css("-m-transform-origin", "0 0"), a = "matrix(" + s.toArray().join(",") + ")", t.css("transform", a), t.css("-webkit-transform", a), t.css("-moz-transform", a), t.css("-o-transform", a), t.css("-m-transform", a)) : (t.css("transform-origin", "0 0"), t.css("-moz-transform-origin", "0 0"), t.css("-webkit-transform-origin", "0 0"), t.css("-o-transform-origin", "0 0"), t.css("-m-transform-origin", "0 0"), t.css("transform", a), t.css("-webkit-transform", a), t.css("-moz-transform", a), t.css("-o-transform", a), t.css("-m-transform", a))
    }
},
define("render", ["run_loop", "env", "touch_event", "touch", "vec2", "mat3", "bg_repeat_mode", "color", "blend_mode"],
function() {});
var AXEGradientColor = function(t) {
    "string" == typeof t && (this.type = t)
}; !
function() {
    var t = function(t, e) {
        this.offset = t,
        this.color = e.clone()
    };
    t.prototype.offset = 0,
    t.prototype.color = null,
    t.prototype.clone = function() {
        return new t(this.offset, this.color)
    },
    AXEGradientColor.LINEAR = "linear",
    AXEGradientColor.RADIAL = "radial",
    AXEGradientColor.prototype.constructor = AXEGradientColor,
    AXEGradientColor.prototype.type = null,
    AXEGradientColor.prototype.parseXML = function(t) {
        var e = this;
        t.is("[use-percent]") ? e.usePercent("true" == t.attr("use-percent").toLowerCase()) : e.usePercent(!1),
        t.children("spot").each(function(t, i) {
            var n = $(i);
            e.addColor(parseFloat(n.attr("offset")), AXEColor.colorWithString(n.attr("color")))
        })
    },
    AXEGradientColor.prototype._usePercent = !1,
    AXEGradientColor.prototype.usePercent = function(t) {
        return "boolean" == typeof t && t != this._usePercent && (this._usePercent = !0),
        this._usePercent
    },
    AXEGradientColor.prototype.colors = null,
    AXEGradientColor.prototype.addColor = function(e, i) {
        var n = new t(e, i);
        null == this.colors && (this.colors = []),
        this.colors.push(n)
    },
    AXEGradientColor.prototype.copyColors = function(t) {
        for (var e = [], i = 0; i < this.colors.length; i++) e.push(this.colors[i].clone());
        t.colors = e
    },
    AXEGradientColor.prototype.clone = function() {
        return null
    },
    AXEGradientColor.prototype.dealloc = function() {
        this.colors = null
    }
} (),
define("gradient_color", ["color"],
function() {});
var AXERenderCanvas = function(t, e) {
    AXERender.prototype.constructor.call(this, t, e)
};
AXERenderCanvas.prototype = new AXERender,
AXERenderCanvas.prototype.constructor = AXERenderCanvas,
AXERenderCanvas.prototype.createCanvas = function() {
    var t = $("<canvas></canvas>");
    return t.css("position", "absolute"),
    t.css("left", 0),
    t.css("top", 0),
    t
},
AXERenderCanvas.prototype.takePhoto = function(t, e, i, n) {
    var o = $("<canvas></canvas>");
    o.attr("width", t.width()),
    o.attr("height", t.height());
    var r = t.clone();
    r.visible(!0),
    r.renderEvenNotOnTheStage(!0),
    r.matrix(new AXEMat3),
    r.alpha(1),
    r.update(0, 0);
    var s = o[0].getContext("2d");
    this.renderView(s, r, new AXEMat3, 1);
    var a = isNaN(n) ? 1 : n;
    a = Math.max(0, Math.min(1, a));
    var l = o[0].toDataURL("string" == typeof i ? i: "image/png", a),
    h = $("<img/>");
    h.on("load",
    function() {
        Boolean(e) && e(t, h[0])
    }),
    h.attr("src", l)
},
AXERenderCanvas.prototype.htmlNeedAdd = null,
AXERenderCanvas.prototype.htmlNeedRemove = null,
AXERenderCanvas.prototype.removeAllHTML = !1,
AXERenderCanvas.prototype.htmlIndex = 0,
AXERenderCanvas.prototype.render = function(t, e) {
    null != this.htmlNeedAdd ? this.htmlNeedRemove = this.htmlNeedAdd.slice() : this.htmlNeedRemove = [],
    this.htmlNeedAdd = [],
    this.removeAllHTML = !1;
    var i = this.resizeCanvas(),
    n = this.$canvas[0].getContext("2d");
    if (n.clearRect(0, 0, i.x * this.stage.ratio(), i.y * this.stage.ratio()), this.htmlIndex = 0, this.renderView(n, this.stage, this.stage.stageMatrix(), this.stage.alpha()), 0 == this.removeAllHTML) for (var o = 0; o < this.htmlNeedAdd.length; o++) {
        for (var r = this.htmlNeedAdd[o], s = !1, a = 0; a < this.htmlNeedRemove.length; a++) if (r == this.htmlNeedRemove[a]) {
            this.htmlNeedRemove.splice(a, 1),
            s = !0;
            break
        }
        0 == s && (r.css("pointer-events", "auto"), this.$wrap.append(r))
    } else this.htmlNeedAdd = [];
    for (var l = 0; l < this.htmlNeedRemove.length; l++) this.htmlNeedRemove[l].css("pointer-events", "none"),
    this.htmlNeedRemove[l].detach()
},
AXERenderCanvas.prototype.createGradient = function(t, e, i, n, o) {
    var r = null;
    if (o = isNaN(o) ? 0 : o, n.type == AXEGradientColor.LINEAR) r = n.usePercent() ? i.createLinearGradient(t * n.from.x + o, e * n.from.y + o, t * n.to.x + o, e * n.to.y + o) : i.createLinearGradient(n.from.x + o, n.from.y + o, n.to.x + o, n.to.y + o);
    else if (n.type == AXEGradientColor.RADIAL) if (n.usePercent()) {
        var s = Math.pow(Math.pow(t, 2) + Math.pow(e, 2), .5);
        r = i.createRadialGradient(t * n.inner.center.x + o, e * n.inner.center.y + o, s * n.inner.radius, t * n.outer.center.x + o, e * n.outer.center.y + o, s * n.outer.radius)
    } else r = i.createRadialGradient(n.inner.center.x + o, n.inner.center.y + o, n.inner.radius, n.outer.center.x + o, n.outer.center.y + o, n.outer.radius);
    if (null != n.colors && n.colors.length > 0) for (var a = 0; a < n.colors.length; a++) {
        var l = n.colors[a];
        r.addColorStop(l.offset, l.color.toRGBAString())
    }
    return r
},
AXERenderCanvas.prototype.renderView = function(t, e, i, n, o) {
    if (e.renderEngine(this), "AXEShape" != e.className || !e.isMask()) {
        if (o = (o = "boolean" == typeof o && o) || e.animating(), i = i instanceof AXEMat3 ? i: new AXEMat3, n = !1 === isNaN(n) ? n: 1, i = e.matrix().concatWith(i), 0 != e.shakeAlpha()) {
            var r = e.alpha() + Math.random() * e.shakeAlpha() * Math.pow( - 1, Math.floor(2 * Math.random()));
            n *= r = Math.min(1, r)
        } else n *= e.alpha();
        if (!1 == (0 == e.visible() || n <= 0 || null != e.mask() && e.mask().commands().length <= 0)) {
            t.globalAlpha = n;
            var s = new AXEMat3;
            if (0 != e.shakeX() && (s.tx = Math.random() * e.shakeX() * Math.pow( - 1, Math.floor(2 * Math.random()))), 0 != e.shakeY() && (s.ty = Math.random() * e.shakeY() * Math.pow( - 1, Math.floor(2 * Math.random()))), i = s.concatWith(i), t.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), null != e.cachedImage) t.drawImage(e.cachedImage, 0, 0, e.width(), e.height());
            else {
                var a = !1;
                if (e.blendMode() != AXEBlendMode.SOURCE_OVER && (a = !0, t.save(), t.globalCompositeOperation = e.blendMode()), null != e.mask() && (t.save(), this.drawPaths(t, e.mask()), t.clip()), e.cornerRadius() > 0) {
                    var l = e.cornerRadius(); (l = Math.min(l, Math.min(e.width() / 2, e.height() / 2))) > 0 ? (t.beginPath(), t.moveTo(l, 0), t.arcTo(e.width(), 0, e.width(), e.height(), l), t.arcTo(e.width(), e.height(), 0, e.height(), l), t.arcTo(0, e.height(), 0, 0, l), t.arcTo(0, 0, e.width(), 0, l), t.closePath()) : (t.beginPath(), t.rect(0, 0, e.width(), e.height()))
                } else t.beginPath(),
                t.rect(0, 0, e.width(), e.height());
                if (null != e.shadowColor() && (t.save(), t.shadowOffsetX = e.shadowOffsetX(), t.shadowOffsetY = e.shadowOffsetY(), t.shadowBlur = e.shadowBlur(), t.shadowColor = e.shadowColor().toRGBAString()), e.clip() && (t.save(), t.clip()), null != e.bgColor() && e.bgColor().a() > 0) {
                    t.globalAlpha = n * (e.bgColor().a() / 255);
                    var h = e.bgColor().clone();
                    h.adjustSaturation(e.bgSat()),
                    t.fillStyle = h.to24BitString(),
                    t.fill()
                }
                if (e.clip() && t.restore(), null != e.borderColor() && e.borderSize() > 0 && (t.globalAlpha = n * (e.borderColor().a() / 255), t.lineWidth = e.borderSize(), t.strokeStyle = e.borderColor().to24BitString(), t.stroke()), e.clip() && (t.save(), t.clip()), null != e.gradientBGColor()) {
                    var c = this.createGradient(e.width(), e.height(), t, e.gradientBGColor());
                    e.rect(e),
                    t.fillStyle = c,
                    t.fill()
                }
                switch (null != e.bgImage() && e.bgImage().bitmap() instanceof HTMLImageElement && (t.save(), this.drawBGImage(t, i, e), t.restore()), null != e.$html() && (this.layoutHTMLElement(e.$html(), e), this.htmlNeedAdd.push(e.$html()), e.$html().css("z-index", this.htmlIndex), this.htmlIndex += 1), this.removeAllHTML = e.removeAllHTML() || this.removeAllHTML, e.className) {
                case "AXEStage":
                case "AXEViewContainer":
                    this.renderContainer(t, e, i, n, o);
                    break;
                case "AXEQRCode":
                    this.renderQRCode(t, e);
                    break;
                case "AXEBarCode":
                    this.renderBarCode(t, e);
                    break;
                case "AXEBitmap":
                    this.renderBitmap(t, e);
                    break;
                case "AXEMovie":
                    this.renderMovie(t, e);
                    break;
                case "AXEShape":
                    this.renderShape(t, e, n);
                    break;
                case "AXEText":
                    this.renderText(t, e, n)
                }
                e.clip() && t.restore(),
                null != e.shadowColor() && t.restore(),
                null != e.mask() && t.restore(),
                a && t.restore()
            }
            null != e.$html() && (this.layoutHTMLElement(e.$html(), e), this.htmlNeedAdd.push(e.$html())),
            this.removeAllHTML = e.removeAllHTML() || this.removeAllHTML
        }
        e.afterRender()
    }
},
AXERenderCanvas.prototype.drawBGImage = function(t, e, i) {
    var n = i.bgImage(),
    o = n.bitmap();
    if (n.repeatMode() == AXEBGRepeatMode.NO_REPEAT) e = n.scaleMode().call(i, n.width(), n.height(), i.width(), i.height(), n.alignMode()).concatWith(e),
    t.setTransform(e.a, e.b, e.c, e.d, e.tx, e.ty),
    t.drawImage(o, 0, 0, n.width(), n.height(), 0, 0, n.width(), n.height());
    else {
        var r = 0,
        s = 0,
        a = 0,
        l = 0,
        h = 0;
        if ((n.alignMode() & AXEAlignMode.TOP) == AXEAlignMode.TOP) s = 0;
        else if ((n.alignMode() & AXEAlignMode.MIDDLE) == AXEAlignMode.MIDDLE) {
            var c = i.height() + n.height() / 2;
            s = c - Math.ceil(c / n.height()) * n.height()
        } else(n.alignMode() & AXEAlignMode.BOTTOM) == AXEAlignMode.BOTTOM && (s = i.height() - Math.ceil(i.height() / n.height()) * n.height());
        if ((n.alignMode() & AXEAlignMode.LEFT) == AXEAlignMode.LEFT) r = 0;
        else if ((n.alignMode() & AXEAlignMode.CENTER) == AXEAlignMode.CENTER) {
            var p = i.width() + n.width() / 2;
            r = p - Math.ceil(p / n.width()) * n.width()
        } else(n.alignMode() & AXEAlignMode.RIGHT) == AXEAlignMode.RIGHT && (r = i.width() - Math.ceil(i.width() / n.width()) * n.width());
        if (n.repeatMode() == AXEBGRepeatMode.REPEAT_ALL || n.repeatMode() == AXEBGRepeatMode.REPEAT_X) for (var u = r; u < i.width();) l += 1,
        u += n.width();
        if (n.repeatMode() == AXEBGRepeatMode.REPEAT_ALL || n.repeatMode() == AXEBGRepeatMode.REPEAT_Y) for (var d = s; d < i.height();) h += 1,
        d += n.height();
        n.repeatMode() == AXEBGRepeatMode.REPEAT_X && (a = l),
        n.repeatMode() == AXEBGRepeatMode.REPEAT_Y && (l = 1, a = h),
        n.repeatMode() == AXEBGRepeatMode.REPEAT_ALL && (a = h * l);
        for (var E = r,
        A = s,
        g = 0; g < a; g++) g % l == 0 && 0 != g && (E = r, A += n.height()),
        t.drawImage(o, 0, 0, o.naturalWidth, o.naturalHeight, E, A, n.width(), n.height()),
        E += n.width()
    }
},
AXERenderCanvas.prototype.renderContainer = function(t, e, i, n, o) {
    for (var r = e.subViews(), s = 0; s < r.length; s++) {
        var a = r[s]; (a.onTheStage() || a.renderEvenNotOnTheStage()) && (null != a.ghostShadow() && 0 == a.ghostShadow().overTargetView && this.renderGhostShadow(t, a, i, n), this.renderView(t, a, i, n, o), null != a.ghostShadow() && a.ghostShadow().overTargetView && this.renderGhostShadow(t, a, i, n))
    }
},
AXERenderCanvas.prototype.renderGhostShadow = function(t, e, i, n) {
    var o = e.ghostShadow().shadows;
    if (null != o && o.length > 0) for (var r = 0; r < o.length; r++) this.renderView(t, o[r], i, n)
},
AXERenderCanvas.prototype.renderQRCode = function(t, e) {
    t.fillStyle = e.color().to24BitString();
    var i = e.qrcode();
    if (null != i) for (var n = e.width() / i.getModuleCount(), o = e.height() / i.getModuleCount(), r = 0; r < i.getModuleCount(); r++) for (var s = 0; s < i.getModuleCount(); s++) if (i.isDark(r, s)) {
        var a = Math.ceil((s + 1) * n) - Math.floor(s * n),
        l = Math.ceil((r + 1) * n) - Math.floor(r * n);
        t.fillRect(Math.round(s * n), Math.round(r * o), a, l)
    }
},
AXERenderCanvas.prototype.renderBarCode = function(t, e) {
    t.fillStyle = e.color().to24BitString();
    var i = e.codes(),
    n = e.total();
    if (i && n > 0) for (var o = e.width() / n, r = 0, s = 0; s < i.length; s += 2) {
        var a = parseInt(i.charAt(s), 10) * o;
        t.fillRect(r, 0, a, e.height()),
        r += a + parseInt(i.charAt(s + 1), 10) * o
    }
},
AXERenderCanvas.prototype.renderBitmap = function(t, e) {
    var i = e.bitmap();
    if (null != i && (0 == e.showHTML() || this.removeAllHTML)) {
        var n, o, r = e.width(),
        s = e.height();
        if (i instanceof HTMLImageElement ? (n = i.naturalWidth, o = i.naturalHeight) : i instanceof HTMLVideoElement ? (n = i.videoWidth, o = i.videoHeight) : (n = r, o = s), t.drawImage(i, 0, 0, n, o, 0, 0, r, s), e.sat() < 1) {
            for (var a = e.rect(this.stage), l = a.width * a.height, h = t.getImageData(a.x, a.y, a.width, a.height), c = 0; c < 4 * l; c += 4) {
                var p = h.data[c],
                u = h.data[c + 1],
                d = h.data[c + 2],
                E = (p + u + d) / 3;
                p = E + (p - E) * e.sat(),
                u = E + (u - E) * e.sat(),
                d = E + (d - E) * e.sat(),
                h.data[c] = p,
                h.data[c + 1] = u,
                h.data[c + 2] = d
            }
            t.putImageData(h, a.x, a.y)
        }
    }
},
AXERenderCanvas.prototype.renderMovie = function(t, e) {
    if (e.framesCount() > 0) {
        var i = e.frames()[e.currentFrame()];
        if (null != i) {
            var n = e.width(),
            o = e.height();
            t.drawImage(i, 0, 0, i.naturalWidth, i.naturalHeight, 0, 0, n, o)
        }
    }
},
AXERenderCanvas.prototype.renderShape = function(t, e, i) {
    if (this.drawPaths(t, e.path()), null != e.lineDash() && e.lineDash().length > 0 ? t.setLineDash(e.lineDash()) : t.setLineDash([]), null != e.fillColor()) t.globalAlpha = i * (e.fillColor().a() / 255),
    t.fillStyle = e.fillColor().to24BitString(),
    t.fill();
    else if (null != e.gradientFillColor()) t.fillStyle = this.createGradient(e.width(), e.height(), t, e.gradientFillColor()),
    t.fill();
    else if (e.fillPattern()) {
        var n = t.createPattern(e.fillPattern().patternImg(), e.fillPattern().repeatMode());
        t.fillStyle = n,
        t.fill()
    }
    if (null != e.strokeColor() && e.strokeSize() > 0) t.globalAlpha = i * (e.strokeColor().a() / 255),
    t.lineWidth = e.strokeSize(),
    t.strokeStyle = e.strokeColor().to24BitString(),
    t.stroke();
    else if (null != e.gradientStrokeColor()) t.lineWidth = e.strokeSize(),
    t.strokeStyle = this.createGradient(e.width(), e.height(), t, e.gradientStrokeColor()),
    t.stroke();
    else if (e.strokePattern()) {
        var o = t.createPattern(e.strokePattern().patternImg(), e.strokePattern().repeatMode());
        t.strokeStyle = o,
        t.stroke()
    }
},
AXERenderCanvas.prototype.renderText = function(t, e, i) {
    null != e.$html() ? e.updateTextProperty() : (null != e.color() || null != e.gradientColor()) && e.text().length > 0 && (null != e.color() ? (t.globalAlpha = i * (e.color().a() / 255), t.fillStyle = e.color().to24BitString()) : null != e.gradientColor() && (t.fillStyle = this.createGradient(e.width(), e.height(), t, e.gradientColor())), t.font = e.textStyle(), null != e.strokeColor() && e.strokeSize() > 0 && (t.lineWidth = e.strokeSize(), t.strokeStyle = e.strokeColor().to24BitString()), e.wordWrap() ? this.renderMultipleLineText(t, e) : this.renderSingleLineText(t, e))
},
AXERenderCanvas.prototype.textSize = function(t) {
    var e = document.createElement("canvas").getContext("2d");
    e.font = t.textStyle();
    var i = new AXEVec2(0, 0),
    n = t.text();
    if (n.length > 0 && t.width() > 0) {
        for (var o = [], r = (n = n.replace(/<br\/>/gi, "\n")).split(""), s = ""; r.length > 0;) {
            var a = r.shift();
            if ("\n" == a) o.push(s),
            s = "";
            else {
                s += a;
                var l = e.measureText(s).width; (l > t.width() || r.length <= 0) && (l > t.width() && (s = s.slice(0, s.length - 1), r.unshift(a)), o.push(s), s = "")
            }
        }
        if (t.mergeLastLine() > 0) for (var h = o.length - 1; h > 0; h--) o[h].length <= t.mergeLastLine() && (o[h - 1] += o[h], o.splice(h, 1));
        o.length > 1 ? (i.x = t.width(), i.y = o.length * t.lineHeight()) : (i.x = e.measureText(n).width, i.y = t.height())
    }
    return i
},
AXERenderCanvas.prototype.splitTextToLines = function(t) {
    var e = $("<canvas></canvas>")[0].getContext("2d");
    e.font = t.textStyle();
    for (var i = t.text(), n = [], o = (i = i.replace(/<br\/>/gi, "\n")).split(""), r = ""; o.length > 0;) {
        var s = o.shift();
        if ("\n" == s) n.push(r),
        r = "";
        else {
            r += s;
            var a = e.measureText(r).width; (a > t.width() || o.length <= 0) && (a > t.width() && (r = r.slice(0, r.length - 1), o.unshift(s)), n.push(r), r = "")
        }
    }
    if (t.mergeLastLine() > 0) for (var l = n.length - 1; l > 0; l--) n[l].length <= t.mergeLastLine() && (n[l - 1] += n[l], n.splice(l, 1));
    return n
},
AXERenderCanvas.prototype.renderMultipleLineText = function(t, e) {
    if (e.text().length > 0 && e.width() > 0) {
        var i = this.splitTextToLines(e);
        t.textBaseline = "middle";
        for (var n = e.lineHeight() / 2, o = 0; o < i.length; o++) {
            var r = i[o],
            s = t.measureText(r),
            a = 0;
            e.textAlign() == AXETextAlign.LEFT ? a = 0 : e.textAlign() == AXETextAlign.CENTER ? a = e.width() / 2 - s.width / 2 : e.textAlign() == AXETextAlign.RIGHT && (a = e.width() - s.width),
            null != e.strokeColor() && e.strokeSize() > 0 && t.strokeText(r, a, n),
            t.fillText(r, a, n),
            n += e.lineHeight()
        }
    }
},
AXERenderCanvas.prototype.renderSingleLineText = function(t, e) {
    t.textBaseline = "alphabetic";
    var i = e.clone(),
    n = t.measureText(e.text());
    if (e.shrink() && e.width() > 0) for (; n.width > e.width() && i.size() > 1;) i.size(i.size() - 1),
    t.font = i.textStyle(),
    n = t.measureText(i.text());
    var o = 0;
    if (e.textAlign() == AXETextAlign.LEFT) o = 0,
    e.autoSize() && e.width(n.width);
    else if (e.textAlign() == AXETextAlign.CENTER) {
        if (o = e.width() / 2 - n.width / 2, e.autoSize()) {
            const t = e.x() + e.width() / 2;
            e.width(n.width),
            e.x(t - n.width / 2)
        }
    } else e.textAlign() == AXETextAlign.RIGHT && (o = e.width() - n.width);
    var r = 0;
    r = e.textVAlign() == AXETextVerticalAlign.TOP ? 0 - e.size() / 6 : e.textVAlign() == AXETextVerticalAlign.MIDDLE ? e.height() / 2 - e.size() / 6 + e.size() / 2 : e.height() - e.size() / 6,
    null != e.strokeColor() && e.strokeSize() > 0 && t.strokeText(e.text(), o, r),
    t.fillText(e.text(), o, r),
    e.underline() && t.fillRect(o, r + 14, n.width, 2)
},
AXERenderCanvas.prototype.drawPaths = function(t, e) {
    var i = e.commands();
    t.beginPath();
    for (var n = 0; n < i.length; n++) {
        var o = i[n],
        r = o.o,
        s = o.p;
        t[r].apply(t, s)
    }
},
define("render_canvas", ["render", "mat3", "vec2", "gradient_color", "bg_repeat_mode"],
function() {});
var AXERenderWebGL = function(t, e) {
    AXERender.prototype.constructor.call(this, t, e)
};
AXERenderWebGL.prototype = new AXERender,
AXERenderWebGL.prototype.constructor = AXERenderWebGL,
AXERenderWebGL.prototype.glRender = null,
AXERenderWebGL.prototype.createCanvas = function() {
    var t = $("<canvas></canvas>");
    return t.css("position", "absolute"),
    t.css("left", 0),
    t.css("top", 0),
    this.glRender = AXEEnv.glRender(t[0]),
    console.log(this.glRender),
    t
},
AXERenderWebGL.prototype.render = function(t, e) {
    var i = this.resizeCanvas();
    this.glRender.clear(this.glRender.COLOR_BUFFER_BIT | this.glRender.DEPTH_BUFFER_BIT | this.glRender.STENCIL_BUFFER_BIT),
    this.glRender.viewport(0, 0, i.w * this.stage.ratio(), i.h * this.stage.ratio()),
    this.renderView(this.stage, this.stage.stageMatrix(), this.stage.alpha())
},
AXERenderWebGL.prototype.renderView = function(t, e, i) {},
define("render_webgl", ["render"],
function() {});
var AXEViewFactory = function() {};
AXEViewFactory.ViewClasses = {},
AXEViewFactory.createViewByNodeName = function(t) {
    var e = null;
    return AXEViewFactory.ViewClasses.hasOwnProperty(t) && (e = new(0, AXEViewFactory.ViewClasses[t])),
    e
},
AXEViewFactory.addClass = function(t, e) {
    AXEViewFactory.ViewClasses[t] = e
},
define("view_factory",
function() {});
var AXEAlignMode = {
    NONE: 0
};
AXEAlignMode.CENTER = parseInt("1", 2),
AXEAlignMode.MIDDLE = parseInt("10", 2),
AXEAlignMode.TOP = parseInt("100", 2),
AXEAlignMode.BOTTOM = parseInt("1000", 2),
AXEAlignMode.LEFT = parseInt("10000", 2),
AXEAlignMode.RIGHT = parseInt("100000", 2),
AXEAlignMode.MIDDLE_LEFT = AXEAlignMode.MIDDLE | AXEAlignMode.LEFT,
AXEAlignMode.MIDDLE_CENTER = AXEAlignMode.MIDDLE | AXEAlignMode.CENTER,
AXEAlignMode.MIDDLE_RIGHT = AXEAlignMode.MIDDLE | AXEAlignMode.RIGHT,
AXEAlignMode.TOP_LEFT = AXEAlignMode.TOP | AXEAlignMode.LEFT,
AXEAlignMode.TOP_CENTER = AXEAlignMode.TOP | AXEAlignMode.CENTER,
AXEAlignMode.TOP_RIGHT = AXEAlignMode.TOP | AXEAlignMode.RIGHT,
AXEAlignMode.BOTTOM_LEFT = AXEAlignMode.BOTTOM | AXEAlignMode.LEFT,
AXEAlignMode.BOTTOM_CENTER = AXEAlignMode.BOTTOM | AXEAlignMode.CENTER,
AXEAlignMode.BOTTOM_RIGHT = AXEAlignMode.BOTTOM | AXEAlignMode.RIGHT,
define("align_mode",
function() {});
var AXEScaleMode = {
    align: function(t, e, i, n, o) {
        var r = null;
        return 0 != o && (r = new AXEVec2, 0 != (o & AXEAlignMode.LEFT) ? r.x = 0 : 0 != (o & AXEAlignMode.CENTER) ? r.x = Math.round(i / 2 - t / 2) : 0 != (o & AXEAlignMode.RIGHT) && (r.x = Math.round(i - t)), 0 != (o & AXEAlignMode.TOP) ? r.y = 0 : 0 != (o & AXEAlignMode.MIDDLE) ? r.y = Math.round(n / 2 - e / 2) : 0 != (o & AXEAlignMode.BOTTOM) && (r.y = Math.round(n - e))),
        r
    },
    noScale: function(t, e, i, n, o) {
        var r = new AXEMat3,
        s = AXEScaleMode.align(t, e, i, n, o);
        return s && (r.tx = s.x, r.ty = s.y),
        r
    },
    showAll: function(t, e, i, n, o) {
        var r = Math.min(i / t, n / e),
        s = Math.round(t * r),
        a = Math.round(e * r),
        l = new AXEMat3;
        l.a = s / t,
        l.d = a / e;
        var h = AXEScaleMode.align(s, a, i, n, o);
        return h && (l.tx = h.x, l.ty = h.y),
        l
    },
    noBorder: function(t, e, i, n, o) {
        var r = Math.max(i / t, n / e),
        s = Math.round(t * r),
        a = Math.round(e * r),
        l = new AXEMat3;
        l.a = s / t,
        l.d = a / e;
        var h = AXEScaleMode.align(s, a, i, n, o);
        return h && (l.tx = h.x, l.ty = h.y),
        l
    },
    extraFit: function(t, e, i, n) {
        var o = new AXEMat3;
        return o.a = i / t,
        o.d = n / e,
        o
    },
    fitWidth: function(t, e, i, n, o) {
        var r = i / t,
        s = Math.round(t * r),
        a = Math.round(e * r),
        l = new AXEMat3;
        l.a = s / t,
        l.d = a / e;
        var h = AXEScaleMode.align(s, a, i, n, o);
        return h && (l.tx = h.x, l.ty = h.y),
        l
    },
    fitHeight: function(t, e, i, n, o) {
        var r = n / e,
        s = Math.round(t * r),
        a = Math.round(e * r),
        l = new AXEMat3;
        l.a = s / t,
        l.d = a / e;
        var h = AXEScaleMode.align(s, a, i, n, o);
        return h && (l.tx = h.x, l.ty = h.y),
        l
    }
};
define("scale_mode", ["vec2", "mat3", "align_mode"],
function() {});
var AXELoaderConfig = {}; !
function() {
    var t, e, i;
    AXELoaderConfig.baseURI = (t = "./", AXEEnv.axeVars.hasOwnProperty("base-uri") && (t = AXEEnv.axeVars["base-uri"]), t),
    AXELoaderConfig.crossOrigin = (e = !1, AXEEnv.axeVars.hasOwnProperty("cross-origin") && (e = "true" == AXEEnv.axeVars["cross-origin"].toLowerCase()), e),
    AXELoaderConfig.loadThreadsCount = 10,
    AXELoaderConfig.MAX_FAIL_COUNT = 10,
    AXELoaderConfig.version = (i = null, AXEEnv.axeVars.hasOwnProperty("version") && (i = AXEEnv.axeVars.version), i)
} (),
define("loader_config", ["env"],
function() {});
var AXEProgressEvent = function(t) {
    this.percent = isNaN(t) ? 0 : t,
    AXEEvent.prototype.constructor.call(this, AXEProgressEvent.PROGRESS, !1)
};
AXEProgressEvent.PROGRESS = "progress",
AXEProgressEvent.prototype = new AXEEvent,
AXEProgressEvent.prototype.constructor = AXEProgressEvent,
AXEProgressEvent.prototype.percent = 0,
AXEProgressEvent.prototype.clone = function() {
    var t = new AXEProgressEvent(this.percent);
    return t.evtData = this.evtData,
    t
},
define("progress_event", ["event"],
function() {});
var AXEErrorEvent = function(t) {
    AXEEvent.prototype.constructor.call(this, AXEErrorEvent.ERROR, !1),
    this.error = t
};
AXEErrorEvent.ERROR = "error",
AXEErrorEvent.prototype = new AXEEvent,
AXEErrorEvent.prototype.constructor = AXEErrorEvent,
AXEErrorEvent.prototype.error = null,
AXEErrorEvent.prototype.clone = function() {
    var t = new AXEErrorEvent(this.error);
    return t.evtData = this.evtData,
    t
},
define("error_event", ["event"],
function() {});
var AXEURLUtil = {
    origin: function(t) {
        "string" == typeof t || (t = String(window.location.href));
        var e = /^(http[s]?:)?\/\/([^\/]*)\/?/;
        return e.test(t) ? t.match(e)[2] : window.location.host
    },
    domain: function() {
        var t = AXEURLUtil.origin().replace(/^https?:\/\//, "");
        return t = t.replace(/\//, "")
    },
    relativePath: function(t) {
        if (/^(http)|(\/\/)/gi.test(t)) return t.match(/^\/\//) && (t = window.location.protocol + t),
        t;
        var e = AXEURLUtil.cleanURL().split("/");
        e.pop();
        for (var i = t.split("/"), n = 0; n < i.length; n++) {
            var o = i[n];
            ".." == o ? e.pop() : o.length > 0 && "." != o && e.push(o)
        }
        return e.join("/")
    },
    cleanURL: function(t) {
        var e = String(window.location.href).split("#")[0];
        return 0 == Boolean(t) && (e = e.split("?")[0]),
        e
    },
    query: function(t) {
        t || (t = window.location.href);
        var e = t.split("?"),
        i = null;
        return e.length > 1 && (i = e[1].split("#")[0]),
        i
    },
    hash: function(t) {
        if (arguments.length > 0) {
            var e = AXEURLUtil.cleanURL(!0);
            window.location.href = e + "#" + encodeURIComponent(t)
        }
        var i = String(window.location.href).split("#"),
        n = null;
        return i.length > 1 && (n = decodeURIComponent(i[1])),
        n
    },
    decodeParams: function(t) {
        var e = null;
        if (null != t) {
            e = {};
            for (var i = t.split("&"), n = 0; n < i.length; n++) {
                var o = i[n].split("=");
                e[o[0]] = decodeURIComponent(o[1])
            }
        }
        return e
    },
    encodeParams: function(t) {
        var e = "";
        if (null != t) {
            var i = [];
            for (var n in t) if (t.hasOwnProperty(n)) {
                var o = encodeURIComponent(t[n]);
                i.push(n + "=" + o)
            }
            e = i.join("&")
        }
        return e
    },
    queryParam: function(t) {
        var e = AXEURLUtil.decodeParams(AXEURLUtil.query()),
        i = null;
        return e && e.hasOwnProperty(t) && (i = e[t]),
        i
    },
    hashParam: function(t) {
        var e = AXEURLUtil.decodeParams(AXEURLUtil.hash()),
        i = null;
        return e && e.hasOwnProperty(t) && (i = e[t]),
        i
    },
    splitURLs: function(t) {
        var e = /\[\d+-\d+]/,
        i = t.match(e),
        n = [];
        if (null != i) {
            var o = (i = i[0]).slice(1, i.length - 1).split("-"),
            r = o[0],
            s = o[1],
            a = Math.min(r.length, s.length);
            r = parseInt(r, 10),
            s = parseInt(s, 10);
            for (var l = r; l <= s; l++) {
                for (var h = String(l); h.length < a;) h = "0" + h;
                var c = t.replace(e, h);
                n.push(c)
            }
        } else n = [t];
        return n
    },
    assetLoadURL: function(t, e, i) {
        var n = null;
        return n = /^abs:/gi.test(e) ? e.slice(4, e.length) : /^https*/gi.test(e) || /^\//gi.test(e) || /^\.\//gi.test(e) ? e: t + e,
        "string" == typeof i && 0 == /\?\w+=[\d\w]+]/gi.test(n) && (n = n + "?v=" + i),
        n
    },
    pageName: function(t) {
        var e, i = window.location.pathname;
        return i.length <= 0 && "/" == i.charAt(i.length) ? e = "": (e = i.split("/").pop(), t || (e = e.split(".")[0])),
        e
    },
    externalLink: function(t, e) {
        var i = AXEURLUtil.decodeParams(AXEURLUtil.query());
        if (e && !i && (i = {}), e && i) for (var n in e) i[n] = e[n];
        var o = AXEURLUtil.decodeParams(AXEURLUtil.hash()),
        r = AXEURLUtil.cleanURL();
        if (i && (r += "?" + AXEURLUtil.encodeParams(i)), o && (r += "#" + AXEURLUtil.encodeParams(o)), window.history.pushState(null, "", r), AXEEnv.browser.safari) {
            var s = {
                jump_to: t,
                return_to: r
            };
            window.location.href = "./external.html?" + AXEURLUtil.encodeParams(s)
        } else window.location.href = t
    }
};
define("url_util",
function() {});
var Base64 = {}; !
function(global) {
    "use strict";
    var _Base64 = global.Base64,
    version = "2.4.9",
    buffer;
    if ("undefined" != typeof module && module.exports) try {
        buffer = eval("require('buffer').Buffer")
    } catch(t) {
        buffer = void 0
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    b64tab = function(t) {
        for (var e = {},
        i = 0,
        n = t.length; i < n; i++) e[t.charAt(i)] = i;
        return e
    } (b64chars),
    fromCharCode = String.fromCharCode,
    cb_utob = function(t) {
        if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t: e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
        var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
        return fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e)
    },
    re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    utob = function(t) {
        return t.replace(re_utob, cb_utob)
    },
    cb_encode = function(t) {
        var e = [0, 2, 1][t.length % 3],
        i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
        return [b64chars.charAt(i >>> 18), b64chars.charAt(i >>> 12 & 63), e >= 2 ? "=": b64chars.charAt(i >>> 6 & 63), e >= 1 ? "=": b64chars.charAt(63 & i)].join("")
    },
    btoa = global.btoa ?
    function(t) {
        return global.btoa(t)
    }: function(t) {
        return t.replace(/[\s\S]{1,3}/g, cb_encode)
    },
    _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ?
    function(t) {
        return (t.constructor === buffer.constructor ? t: buffer.from(t)).toString("base64")
    }: function(t) {
        return (t.constructor === buffer.constructor ? t: new buffer(t)).toString("base64")
    }: function(t) {
        return btoa(utob(t))
    },
    encode = function(t, e) {
        return e ? _encode(String(t)).replace(/[+\/]/g,
        function(t) {
            return "+" == t ? "-": "_"
        }).replace(/=/g, "") : _encode(String(t))
    },
    encodeURI = function(t) {
        return encode(t, !0)
    },
    re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
    cb_btou = function(t) {
        switch (t.length) {
        case 4:
            var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
            return fromCharCode(55296 + (e >>> 10)) + fromCharCode(56320 + (1023 & e));
        case 3:
            return fromCharCode((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
        default:
            return fromCharCode((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
        }
    },
    btou = function(t) {
        return t.replace(re_btou, cb_btou)
    },
    cb_decode = function(t) {
        var e = t.length,
        i = e % 4,
        n = (e > 0 ? b64tab[t.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[t.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[t.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[t.charAt(3)] : 0),
        o = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(255 & n)];
        return o.length -= [0, 0, 2, 1][i],
        o.join("")
    },
    atob = global.atob ?
    function(t) {
        return global.atob(t)
    }: function(t) {
        return t.replace(/[\s\S]{1,4}/g, cb_decode)
    },
    _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ?
    function(t) {
        return (t.constructor === buffer.constructor ? t: buffer.from(t, "base64")).toString()
    }: function(t) {
        return (t.constructor === buffer.constructor ? t: new buffer(t, "base64")).toString()
    }: function(t) {
        return btou(atob(t))
    },
    decode = function(t) {
        return _decode(String(t).replace(/[-_]/g,
        function(t) {
            return "-" == t ? "+": "/"
        }).replace(/[^A-Za-z0-9\+\/]/g, ""))
    },
    noConflict = function() {
        var t = global.Base64;
        return global.Base64 = _Base64,
        t
    };
    if (global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    },
    "function" == typeof Object.defineProperty) {
        var noEnum = function(t) {
            return {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        };
        global.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                return decode(this)
            })),
            Object.defineProperty(String.prototype, "toBase64", noEnum(function(t) {
                return encode(this, t)
            })),
            Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                return encode(this, !0)
            }))
        }
    }
    global.Meteor && (Base64 = global.Base64),
    "undefined" != typeof module && module.exports ? module.exports.Base64 = global.Base64: "function" == typeof define && define.amd && define("base64", [],
    function() {
        return global.Base64
    }),
    global.Base64
} (window);
var AXEAssetItem = function(t) {
    this.referenceCount = 1;
    var e = /:(\d+)$/;
    if (e.test(t)) {
        var i = t.match(e);
        this.sliceCount = parseInt(i[1], 10);
        var n = t.split(":");
        t = (n = n.slice(0, n.length - 1)).join(":")
    } else this.sliceCount = 1;
    var o = /^(\w+)\|/;
    if (o.test(t)) {
        var r = t.match(o);
        this.type = r[1],
        this.uri = t.slice(this.type.length + 1)
    } else {
        var s = /\.(\w+)$/;
        if (s.test(t)) switch (t.match(s)[1]) {
        case "jpg":
        case "jpeg":
        case "gif":
        case "png":
            this.type = AXEAssetType.IMAGE;
            break;
        case "json":
            this.type = AXEAssetType.JSON;
            break;
        case "html":
        case "htm":
            this.type = AXEAssetType.HTML;
            break;
        case "mp3":
        case "ogg":
            this.type = AXEAssetType.SOUND;
            break;
        case "mp4":
            this.type = AXEAssetType.VIDEO;
            break;
        case "xml":
            this.type = AXEAssetType.XML;
            break;
        case "css":
            this.type = AXEAssetType.CSS;
            break;
        case "obj":
            this.type = AXEAssetType.OBJ;
            break;
        case "fbx":
        case "FBX":
            this.type = AXEAssetType.FBX;
            break;
        case "gltf":
        case "GLTF":
        case "glb":
        case "GLB":
            this.type = AXEAssetType.GLTF;
            break;
        default:
            this.type = AXEAssetType.TEXT
        } else this.type = AXEAssetType.TEXT;
        this.uri = t
    }
    this.loadURL = AXEURLUtil.assetLoadURL(AXELoaderConfig.baseURI, this.uri, AXELoaderConfig.version),
    this.loaded = !1,
    this.asset = null,
    this.bytesLoaded = 0,
    this.bytesTotal = 0
};
AXEAssetItem.prototype = new AXEEventTarget,
AXEAssetItem.prototype.constructor = AXEAssetItem,
AXEAssetItem.prototype.referenceCount = 0,
AXEAssetItem.prototype.startLoadTS = 0,
AXEAssetItem.prototype.endLoadTS = 0,
AXEAssetItem.prototype.failCount = 0,
AXEAssetItem.prototype.uri = null,
AXEAssetItem.prototype.loadURL = null,
AXEAssetItem.prototype.type = null,
AXEAssetItem.prototype.loading = !1,
AXEAssetItem.prototype.loaded = !1,
AXEAssetItem.prototype.sliceCount = 1,
AXEAssetItem.prototype.bytesLoaded = 0,
AXEAssetItem.prototype.bytesTotal = 0,
AXEAssetItem.prototype.loadPercent = function() {
    return this.loaded ? 1 : 0 == this.bytesTotal ? 0 : this.bytesLoaded / this.bytesTotal
},
AXEAssetItem.prototype.asset = null,
AXEAssetItem.prototype.load = function() {
    this.loading = !0,
    this.startLoadTS = Date.now(),
    this[this.type + "Loader"].call(this)
},
AXEAssetItem.prototype.assetPaths = null,
AXEAssetItem.prototype.assetImages = null,
AXEAssetItem.prototype.multipleAssetLoaded = function(t, e, i) {
    this.asset = t,
    this.assetPaths = e,
    this.assetImages = i,
    this.loaded = !0,
    this.loading = !1,
    this.endLoadTS = (new Date).getTime();
    var n = new AXEEvent(AXEEvent.LOAD);
    this.triggerEvent(n)
},
AXEAssetItem.prototype.assetLoaded = function(t) {
    this.asset = t,
    this.loaded = !0,
    this.loading = !1,
    this.endLoadTS = (new Date).getTime();
    var e = new AXEEvent(AXEEvent.LOAD);
    this.triggerEvent(e)
},
AXEAssetItem.prototype.assetLoadError = function(t, e) {
    var i = this;
    if (i.failCount++, i.failCount < AXELoaderConfig.MAX_FAIL_COUNT) {
        window.console.log("Fail to fetch data from url: " + i.loadURL + ". status: " + t + " des: " + e + ". Will retry in 150ms. Fail count:" + i.failCount);
        var n = setTimeout(function() {
            clearTimeout(n),
            i.load()
        },
        150)
    } else {
        var o = "Fail to fetch data from url: " + i.loadURL + ". status: " + t + " des: " + e + ". Try count:" + i.failCount;
        window.console.log(o);
        var r = new Error(o);
        i.triggerEvent(new AXEErrorEvent(r))
    }
},
AXEAssetItem.prototype.loadWithXHR = function(t, e, i, n) {
    var o = this;
    e = "string" == typeof e ? e: "text",
    i = "boolean" != typeof i || i,
    n = "string" == typeof n ? n: "get",
    $.ajax({
        url: o.loadURL,
        dataType: e,
        async: !0,
        cache: i,
        type: n,
        success: function(e, i) {
            "success" == i ? t(e, i) : o.assetLoadError(i, "Unknown Error.")
        },
        xhr: function() {
            var t = AXEEnv.nativeXHR();
            return t.onprogress = function(t) {
                o.bytesTotal = t.total,
                o.bytesLoaded = t.loaded;
                var e = new AXEProgressEvent(o.loadPercent());
                o.triggerEvent(e)
            },
            t
        },
        error: function(t, e, i) {
            o.assetLoadError(e, i)
        }
    })
},
AXEAssetItem.prototype.imageLoader = function() {
    var t = this,
    e = $("<img/>");
    if (AXELoaderConfig.crossOrigin) {
        var i = AXEURLUtil.origin(t.loadURL);
        null != i && i != AXEURLUtil.origin() && (e[0].crossOrigin = "Anonymous")
    }
    e.width("auto").height("auto").css("display", "inline-block"),
    e.on("load",
    function() {
        e.off(),
        e.removeAttr("style"),
        t.assetLoaded(e[0])
    }),
    e.on("error",
    function() {
        t.assetLoadError("error", "Unknown error.")
    }),
    e.attr("src", t.loadURL)
},
AXEAssetItem.prototype.cssLoader = function() {
    var t = this;
    t.loadWithXHR(function(e) {
        var i = e.match(/@font-face\s*{[^}]*}/gi);
        if (null != i) for (var n = /font-family:\s*["']*([\w\d\s\-]+)["']*/,
        o = 0; o < i.length; o++) {
            var r = i[o].match(n)[1],
            s = $("<div></div>");
            s.text("..."),
            s.css("font-family", r),
            s.css("font-size", 0),
            s.width(0),
            s.height(0),
            $("body").prepend(s)
        }
        var a = document.createElement("style");
        a.innerHTML = e,
        document.getElementsByTagName("head")[0].appendChild(a),
        t.assetLoaded(e)
    },
    "text", !0)
},
AXEAssetItem.prototype.textLoader = function() {
    var t = this;
    t.loadWithXHR(function(e) {
        t.assetLoaded(e)
    },
    "text", !0)
},
AXEAssetItem.prototype.fbxLoader = function() {
    var t = this; (new THREE.FBXLoader).load(t.loadURL,
    function(e) {
        e.name = t.loadURL,
        e.animations && e.animations.length > 0 && (e.mixer = new THREE.AnimationMixer(e)),
        t.assetLoaded(e)
    },
    function(e) {
        t.bytesTotal = e.total,
        t.bytesLoaded = e.loaded;
        var i = new AXEProgressEvent(t.loadPercent());
        t.triggerEvent(i)
    })
},
AXEAssetItem.prototype.gltfLoader = function() {
    var t = this; (new THREE.GLTFLoader).load(t.loadURL,
    function(e) {
        var i = e.scenes[0];
        i.name = t.loadURL,
        e.animations && e.animations.length > 0 && (i.mixer = new THREE.AnimationMixer(i), i.animations = e.animations),
        t.assetLoaded(i)
    },
    function(e) {
        t.bytesTotal = e.total,
        t.bytesLoaded = e.loaded;
        var i = new AXEProgressEvent(t.loadPercent());
        t.triggerEvent(i)
    })
},
AXEAssetItem.prototype.objLoader = function() {
    var t = this;
    t.loadWithXHR(function(e) {
        t.assetLoaded(e)
    },
    "text", !0)
},
AXEAssetItem.prototype.jsonLoader = function() {
    var t = this;
    t.loadWithXHR(function(e) {
        t.assetLoaded(e)
    },
    "json", !0)
},
AXEAssetItem.prototype.htmlLoader = function() {
    var t = this;
    t.loadWithXHR(function(e) {
        var i = $(e),
        n = i.children("div[pre-load]");
        n.length > 0 ? t.assetLoaded(n) : t.assetLoaded(i)
    },
    "html", !0)
},
AXEAssetItem.prototype.xmlLoader = function() {
    var t = this;
    t.loadWithXHR(function(e) {
        t.assetLoaded($(e).children())
    },
    "xml", !0)
},
AXEAssetItem.prototype.videoLoader = function() {
    var t = this,
    e = AXEEnv.nativeXHR();
    e.responseType = "arraybuffer",
    e.open("get", t.loadURL, !0),
    e.onload = function(e) {
        var i = e.currentTarget.response,
        n = new DataView(i),
        o = new Uint8Array(i, 0, n.byteLength),
        r = (window.URL || window.webkitURL || window, "data:video/mp4;base64," + Base64.btoa(o));
        t.assetLoaded(r)
    },
    e.onprogress = function(e) {
        t.bytesTotal = e.total,
        t.bytesLoaded = e.loaded;
        var i = new AXEProgressEvent(t.loadPercent());
        t.triggerEvent(i)
    },
    e.onerror = function(e, i) {
        t.assetLoadError(e, i)
    },
    e.send()
},
AXEAssetItem.prototype.soundLoader = function() {
    var t = this,
    e = AXEEnv.nativeXHR();
    e.responseType = "arraybuffer",
    e.open("get", t.loadURL, !0),
    e.onload = function(e) {
        for (var i = e.currentTarget.response,
        n = new DataView(i), o = new Uint8Array(i, 0, n.byteLength), r = [], s = 0; s < o.length; s++) r += String.fromCharCode(o[s]);
        var a = Base64.btoa(r),
        l = document.createElement("audio"),
        h = document.createElement("source");
        h.type = "audio/mp3",
        h.src = "data:audio/mp3;base64," + a,
        l.appendChild(h),
        t.assetLoaded(l)
    },
    e.onprogress = function(e) {
        t.bytesTotal = e.total,
        t.bytesLoaded = e.loaded;
        var i = new AXEProgressEvent(t.loadPercent());
        t.triggerEvent(i)
    },
    e.onerror = function(e, i) {
        t.assetLoadError(e, i)
    },
    e.send()
},
AXEAssetItem.prototype.binaryLoader = function() {
    var t = this,
    e = AXEEnv.nativeXHR();
    e.responseType = "arraybuffer",
    e.open("get", t.loadURL, !0),
    e.onload = function(e) {
        var i = e.currentTarget.response;
        t.assetLoaded(i)
    },
    e.onprogress = function(e) {
        t.bytesTotal = e.total,
        t.bytesLoaded = e.loaded;
        var i = new AXEProgressEvent(t.loadPercent());
        t.triggerEvent(i)
    },
    e.onerror = function(e, i) {
        t.assetLoadError(e, i)
    },
    e.send()
},
AXEAssetItem.prototype.axeLoader = function() {
    var t = this,
    e = AXEEnv.nativeXHR();
    e.responseType = "arraybuffer",
    e.open("get", t.loadURL, !0),
    e.onload = function(e) {
        for (var i = e.currentTarget.response,
        n = new DataView(i), o = 0, r = [], s = [], a = []; o < n.byteLength;) {
            var l = n.getUint32(o, !1);
            o += 4;
            for (var h = "",
            c = 0; c < l; c++) {
                var p = n.getUint32(o, !1);
                o += 4,
                h += String.fromCharCode(p)
            }
            var u = n.getUint32(o, !1);
            o += 4;
            var d = new Uint8Array(i, o, u);
            o += u,
            r.push(h),
            a.push(d)
        }
        var E = 0,
        A = window.URL || window.webkitURL || window,
        g = function() {
            if (E >= a.length) t.multipleAssetLoaded(n, r, s);
            else {
                var e = a[E],
                i = document.createElement("img");
                i.onload = function(t) {
                    s.push(i),
                    E += 1,
                    g()
                };
                try {
                    i.src = A.createObjectURL(new Blob([e]))
                } catch(t) {
                    var o, l = r[E].substr(r[E].length - 3, 3).toLowerCase();
                    "jpg" == l || "jpeg" == l ? o = "data:image/jpeg;base64,": "png" == l ? o = "data:image/png;base64,": "gif" == l && (o = "data:image/gif;base64,"),
                    i.src = o + Base64.btoa(e)
                }
            }
        };
        g()
    },
    e.onprogress = function(e) {
        t.bytesTotal = e.total,
        t.bytesLoaded = e.loaded;
        var i = new AXEProgressEvent(t.loadPercent());
        t.triggerEvent(i)
    },
    e.onerror = function(e, i) {
        t.assetLoadError(e, i)
    },
    e.send()
},
AXEAssetItem.prototype.dealloc = function() {
    this.asset = null,
    this.assetImages = null,
    this.assetPaths = null,
    AXEEventTarget.prototype.dealloc.call(this)
},
define("asset_item", ["env", "loader_config", "event_target", "event", "progress_event", "error_event", "url_util", "base64"],
function() {});
var AXEAssetType = {
    BINARY: "binary",
    IMAGE: "image",
    TEXT: "text",
    CSS: "css",
    JSON: "json",
    HTML: "html",
    XML: "xml",
    SOUND: "sound",
    AXE: "axe",
    VIDEO: "video",
    OBJ: "obj",
    FBX: "fbx",
    GLTF: "gltf"
};
define("asset_type",
function() {});
var AXEAssetsLoader = function(t) {
    0 == isNaN(t) && (this._threadsCount = t)
};
AXEAssetsLoader._assets = function() {
    var t = null;
    if (null != window.AXE_VIEWS) {
        t = {};
        var e = window.AXE_VIEWS;
        for (var i in e) {
            var n = new AXEAssetItem;
            n.assetLoaded($(AXEStringUtil.parseXML(e[i])).children()),
            t[i] = n
        }
    }
    return t
} (),
AXEAssetsLoader.assets = function() {
    return null == AXEAssetsLoader._assets && (AXEAssetsLoader._assets = {}),
    AXEAssetsLoader._assets
},
AXEAssetsLoader.asset = function(t) {
    var e = AXEAssetsLoader.assets(),
    i = null;
    return e.hasOwnProperty(t) && (e[t].referenceCount += 1, i = e[t].asset),
    i
},
AXEAssetsLoader.releaseAssets = function(t) {
    for (var e = AXEAssetsLoader.assets(), i = 0; i < t.length; i++) for (var n = t[i], o = AXEURLUtil.splitURLs(n), r = 0; r < o.length; r++) {
        var s = o[r];
        if (e.hasOwnProperty(s)) {
            var a = e[s];
            a.referenceCount -= 1,
            a.referenceCount <= 0 && delete e[s]
        }
    }
},
AXEAssetsLoader.releaseAll = function() {
    var t = AXEAssetsLoader.assets();
    for (var e in t) if (t.hasOwnProperty(e)) {
        var i = t[e];
        i.referenceCount -= 1,
        i.referenceCount <= 0 && delete t[e]
    }
},
AXEAssetsLoader.clearAll = function() {
    AXEAssetsLoader._assets = null
},
AXEAssetsLoader.prototype = new AXEEventTarget,
AXEAssetsLoader.prototype.constructor = AXEAssetsLoader,
AXEAssetsLoader.prototype.assets = null,
AXEAssetsLoader.prototype.loadAssets = function(t) {
    t = "string" == typeof t ? [t] : t,
    this.assets = [];
    for (var e = 0; e < t.length; e++) for (var i = t[e], n = AXEURLUtil.splitURLs(i), o = 0; o < n.length; o++) {
        var r = new AXEAssetItem(n[o]);
        null == AXEAssetsLoader.asset(r.uri) ? (r.addListener(AXEProgressEvent.PROGRESS, this, this.onAssetLoadProgress), r.addListener(AXEEvent.LOAD, this, this.onAssetLoaded), r.addListener(AXEErrorEvent.ERROR, this, this.onAssetLoadError), this.assets.push(r)) : AXEAssetsLoader.assets()[r.uri].referenceCount += 1
    }
    this.assets.length <= 0 ? this.triggerEvent(new AXEEvent(AXEEvent.LOAD)) : this.multipleThreadLoad()
},
AXEAssetsLoader.prototype._threadsCount = 0,
AXEAssetsLoader.prototype.threadsCount = function() {
    var t = this._threadsCount;
    return (isNaN(t) || t < 1) && (t = AXELoaderConfig.loadThreadsCount),
    t
},
AXEAssetsLoader.prototype.loadingItemCount = 0,
AXEAssetsLoader.prototype.multipleThreadLoad = function() {
    if (this.loadingItemCount < this.threadsCount()) for (var t = 0; t < this.assets.length; t++) {
        var e = this.assets[t];
        if (!1 === e.loaded && !1 === e.loading && (e.load(), this.loadingItemCount++, this.loadingItemCount >= this.threadsCount())) break
    }
},
AXEAssetsLoader.prototype.loadProgress = function() {
    for (var t = 0,
    e = 0,
    i = 0; i < this.assets.length; i++) {
        var n = this.assets[i];
        t += n.sliceCount,
        e += n.loadPercent() * n.sliceCount
    }
    return e / t
},
AXEAssetsLoader.prototype.onAssetLoaded = function(t) {
    var e = t.target;
    if (e.removeListener(), null != AXEAssetsLoader.assets()[e.uri] ? AXEAssetsLoader.assets()[e.uri].referenceCount += 1 : AXEAssetsLoader.assets()[e.uri] = e, e.type == AXEAssetType.AXE) for (var i = 0; i < e.assetImages.length; i++) {
        var n = e.assetPaths[i],
        o = e.assetImages[i],
        r = new AXEAssetItem;
        r.assetLoaded(o),
        null != AXEAssetsLoader.assets()[n] ? AXEAssetsLoader.assets()[n].referenceCount += 1 : AXEAssetsLoader.assets()[n] = r
    }
    if (this.onAssetLoadProgress(), this.loadingItemCount--, this.multipleThreadLoad(), this.loadingItemCount <= 0) {
        var s = new AXEEvent(AXEEvent.LOAD);
        this.triggerEvent(s)
    }
},
AXEAssetsLoader.prototype.onAssetLoadProgress = function() {
    var t = this.loadProgress(),
    e = new AXEProgressEvent(t);
    this.triggerEvent(e)
},
AXEAssetsLoader.prototype.onAssetLoadError = function(t) {
    var e = new AXEErrorEvent(t.error);
    this.triggerEvent(e)
},
AXEAssetsLoader.prototype.dealloc = function() {
    null != this.assets && AXEArrayUtil.each(this.assets,
    function(t, e) {
        delete AXEAssetsLoader._assets[e.uri],
        e.dealloc(),
        e = null
    }),
    AXEEventTarget.prototype.dealloc.call(this)
},
define("assets_loader", ["array_util", "asset_item", "asset_type", "loader_config", "url_util", "string_util", "event_target", "event", "progress_event", "error_event"],
function() {});
var AXEBGImage = function() {};
AXEBGImage.prototype.constructor = AXEBGImage,
AXEBGImage.prototype.updateProp = function(t) {
    if (t.is("[src]") && this.bitmap(t.attr("src")), t.is("[width]") && this.width(parseFloat(t.attr("width"))), t.is("[height]") && this.height(parseFloat(t.attr("height"))), t.is("[repeat]")) {
        var e = AXEBGRepeatMode[t.attr("repeat").replace(/-/g, "_").toUpperCase()];
        this.repeatMode(e)
    }
    if (t.is("[align]")) {
        var i = AXEAlignMode[t.attr("align").replace(/-/g, "_").toUpperCase()];
        this.alignMode(i)
    }
    if (t.is("[scale]")) {
        var n = AXEStringUtil.lineToCamel(t.attr("scale").replace(/_/g, "-"));
        this.scaleMode(AXEScaleMode[n])
    }
},
AXEBGImage.prototype.needToRender = !1,
AXEBGImage.prototype._width = 0,
AXEBGImage.prototype.width = function(t) {
    return 0 == isNaN(t) && t != this._width && (this._width = t, this.needToRender = !0),
    this._width
},
AXEBGImage.prototype._height = 0,
AXEBGImage.prototype.height = function(t) {
    return 0 == isNaN(t) && t != this._height && (this._height = t, this.needToRender = !0),
    this._height
},
AXEBGImage.prototype._bitmap = null,
AXEBGImage.prototype.bitmap = function(t) {
    return "string" == typeof t ? (this._bitmap = AXEAssetsLoader.asset(t), this.width(this._bitmap.naturalWidth), this.height(this._bitmap.naturalHeight), this.needToRender = !0) : t instanceof HTMLImageElement && (this._bitmap = t, this.width(this._bitmap.naturalWidth), this.height(this._bitmap.naturalHeight), this.needToRender = !0),
    this._bitmap
},
AXEBGImage.prototype._repeatMode = AXEBGRepeatMode.NO_REPEAT,
AXEBGImage.prototype.repeatMode = function(t) {
    return "string" == typeof t && t != this._repeatMode && (this._repeatMode = t, this.needToRender = !0),
    this._repeatMode
},
AXEBGImage.prototype._scaleMode = AXEScaleMode.noScale,
AXEBGImage.prototype.scaleMode = function(t) {
    return "function" == typeof t && t != this._scaleMode && (this._scaleMode = t, this.needToRender = !0),
    this._scaleMode
},
AXEBGImage.prototype._alignMode = AXEAlignMode.TOP_LEFT,
AXEBGImage.prototype.alignMode = function(t) {
    return 0 == isNaN(t) && t != this._alignMode && (this._alignMode = t, this.needToRender = !0),
    this._alignMode
},
AXEBGImage.prototype.clone = function() {
    var t = new AXEBGImage;
    return t._bitmap = this.bitmap(),
    t._scaleMode = this.scaleMode(),
    t._alignMode = this.alignMode(),
    t._repeatMode = this.repeatMode(),
    t._width = this.width(),
    t._height = this.height(),
    t
},
AXEBGImage.prototype.dealloc = function() {
    this._bitmap = null
},
define("bg_image", ["bg_repeat_mode", "align_mode", "scale_mode", "assets_loader"],
function() {});
var AXELine = function(t, e, i) {
    if (arguments.length > 0) {
        isNaN(t) || (this.A = t),
        isNaN(e) || (this.B = e),
        isNaN(i) || (this.C = i)
    }
},
AXESeg = function(t, e) {
    this._p1 = t.clone(),
    this._p2 = e.clone();
    var i = AXELine.lineWithTowPoints(this._p1, this._p2);
    AXELine.prototype.constructor.call(this, i.A, i.B, i.C)
};
AXELine.lineWithTowPoints = function(t, e) {
    if (0 == t.equalsTo(e)) {
        var i = e.y - t.y,
        n = t.x - e.x,
        o = e.x * t.y - t.x * e.y,
        r = Math.sqrt(i * i + n * n);
        return new AXELine(i /= r, n /= r, o /= r)
    }
    throw new Error("Tow same points can not define one line.")
},
AXELine.prototype.constructor = AXELine,
AXELine.prototype.A = 0,
AXELine.prototype.B = 0,
AXELine.prototype.C = 0,
AXELine.prototype.k = function() {
    var t = NaN;
    return 0 != this.B && (t = this.A / this.B * -1),
    t
},
AXELine.prototype.b = function() {
    var t = NaN;
    return 0 != this.B && (t = this.C / this.B * -1),
    t
},
AXELine.prototype.containPoint = function(t) {
    return Math.abs(this.A * t.x + this.B * t.y + this.C) < .001
},
AXELine.prototype.willCross = function(t) {
    var e = this.k(),
    i = t.k();
    return 0 == (isNaN(e) && isNaN(i) || e == i)
},
AXELine.prototype.intersection = function(t) {
    var e = null;
    if (this.willCross(t)) {
        var i = (this.B * t.C - this.C * t.B) / (this.A * t.B - this.B * t.A),
        n = (this.A * t.C - this.C * t.A) / (this.B * t.A - this.A * t.B);
        e = new AXEVec2(i, n)
    }
    return e
},
AXESeg.prototype = new AXELine,
AXESeg.prototype.constructor = AXESeg,
AXESeg.prototype._p1 = null,
AXESeg.prototype.p1 = function() {
    return this._p1
},
AXESeg.prototype._p2 = null,
AXESeg.prototype.p2 = function() {
    return this._p2
},
AXESeg.prototype.containPoint = function(t) {
    var e = AXELine.prototype.containPoint.call(this, t);
    if (e) {
        var i = Math.min(this.p1().x, this.p2().x),
        n = Math.max(this.p1().x, this.p2().x);
        i == n && (i -= .01, n += .01);
        var o = Math.min(this.p1().y, this.p2().y),
        r = Math.max(this.p1().y, this.p2().y);
        o == r && (o -= .01, r += .01),
        e = t.x >= i && t.x <= n && t.y >= o && t.y <= r
    }
    return e
},
AXESeg.prototype.intersection = function(t) {
    var e = AXELine.prototype.intersection.call(this, t);
    return null != e && (0 != this.containPoint(e) && 0 != t.containPoint(e) || (e = null)),
    e
},
define("line", ["vec2"],
function() {});
var AXERect = function(t, e, i, n) {
    this.x = isNaN(t) ? this.x: t,
    this.y = isNaN(e) ? this.y: e,
    this.width = isNaN(i) ? this.width: i,
    this.height = isNaN(n) ? this.height: n
};
AXERect.prototype.x = 0,
AXERect.prototype.y = 0,
AXERect.prototype.width = 0,
AXERect.prototype.height = 0,
AXERect.prototype.isEmpty = function() {
    return 0 === this.width && 0 === this.height
},
AXERect.prototype.left = function(t) {
    return arguments.length > 0 && (this.x = t),
    this.x
},
AXERect.prototype.right = function(t) {
    return arguments.length > 0 && (this.width = t - this.x),
    this.x + this.width
},
AXERect.prototype.top = function(t) {
    return arguments.length > 0 && (this.y = t),
    this.y
},
AXERect.prototype.bottom = function(t) {
    return arguments.length > 0 && (this.height = t - this.y),
    this.y + this.height
},
AXERect.prototype.topLeft = function() {
    return new AXEVec2(this.x, this.y)
},
AXERect.prototype.randomPoint = function() {
    return new AXEVec2(this.x + Math.random() * this.width, this.y + Math.random() * this.height)
},
AXERect.prototype.topRight = function() {
    return new AXEVec2(this.right(), this.top())
},
AXERect.prototype.bottomRight = function() {
    return new AXEVec2(this.right(), this.bottom())
},
AXERect.prototype.bottomLeft = function() {
    return new AXEVec2(this.left(), this.bottom())
},
AXERect.prototype.center = function() {
    return new AXEVec2(this.x + this.width / 2, this.y + this.height / 2)
},
AXERect.prototype.equalsTo = function(t) {
    return this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height
},
AXERect.prototype.containsVec2 = function(t) {
    return t.x >= this.left() && t.x <= this.right() && t.y >= this.top() && t.y <= this.bottom()
},
AXERect.prototype.containsRect = function(t) {
    return t.left() >= this.left() && t.right() <= this.right() && t.top() >= this.top() && t.bottom() <= this.bottom()
},
AXERect.prototype.intersect = function(t) {
    var e = this.topLeft(),
    i = this.bottomRight(),
    n = t.topLeft(),
    o = t.bottomRight(),
    r = new AXEVec2(Math.max(e.x, n.x), Math.max(e.y, n.y)),
    s = new AXEVec2(Math.min(i.x, o.x), Math.min(i.y, o.y)),
    a = new AXERect(0, 0, 0, 0);
    return r.x <= s.x && r.y <= s.y && (a.x = r.x, a.y = r.y, a.width = s.x - r.x, a.height = s.y - r.y),
    a
},
AXERect.prototype.shrink = function() {
    this.x = Math.ceil(this.x),
    this.y = Math.ceil(this.y),
    this.width = Math.floor(this.width),
    this.height = Math.floor(this.height)
},
AXERect.prototype.expand = function() {
    this.x = Math.floor(this.x),
    this.y = Math.floor(this.y),
    this.width = Math.ceil(this.width),
    this.height = Math.ceil(this.height)
},
AXERect.prototype.crossPoints = function(t, e) {
    var i = [],
    n = AXELine.lineWithTowPoints(t, e),
    o = AXELine.lineWithTowPoints(this.topLeft(), this.bottomLeft());
    i.push(o.intersection(n));
    var r = AXELine.lineWithTowPoints(this.topLeft(), this.topRight());
    i.push(r.intersection(n));
    var s = AXELine.lineWithTowPoints(this.topRight(), this.bottomRight());
    i.push(s.intersection(n));
    var a = AXELine.lineWithTowPoints(this.bottomLeft(), this.bottomRight());
    i.push(a.intersection(n));
    for (var l = [], h = 0; h < i.length; h++) null != i[h] && this.containsVec2(i[h]) && l.push(i[h]);
    return l
},
AXERect.prototype.clone = function() {
    return new AXERect(this.x, this.y, this.width, this.height)
},
AXERect.prototype.toString = function() {
    return "[x:" + this.x + ",y:" + this.y + ",width:" + this.width + ",height:" + this.height + "]"
},
define("rect", ["vec2", "line"],
function() {});
var AXEPath = function() {};
AXEPath.prototype = new AXEEventTarget,
AXEPath.prototype.constructor = AXEPath,
AXEPath.prototype.rect = function(t) {
    this.rect4(t.x, t.y, t.width, t.height)
},
AXEPath.prototype.rect4 = function(t, e, i, n) {
    var o = [t, e, i, n];
    this.addCommand("R:" + o.join(","))
},
AXEPath.prototype.circle = function(t) {
    var e = [t.center.x, t.center.y, t.radius, 0, 2 * Math.PI];
    this.addCommand("A:" + e.join(","))
},
AXEPath.prototype.moveTo = function(t, e) {
    var i = [t, e];
    this.addCommand("M:" + i.join(","))
},
AXEPath.prototype.lineTo = function(t, e) {
    var i = [t, e];
    this.addCommand("L:" + i.join(","))
},
AXEPath.prototype.arcWithAngle = function(t, e, i, n, o, r) {
    for (var s = [], a = 0; a < arguments.length; a++) s.push(arguments[a]);
    s.length < 5 ? (s[3] = 0, s[4] = 2 * Math.PI) : (s[3] = n * (Math.PI / 180), s[4] = o * (Math.PI / 180)),
    this.addCommand("A:" + s.join(","))
},
AXEPath.prototype.ellipse = function(t, e, i, n, o, r, s, a) {
    for (var l = [], h = 0; h < arguments.length; h++) l.push(arguments[h]);
    this.addCommand("E:" + l.join(","))
},
AXEPath.prototype.arc = function(t, e, i, n, o, r) {
    for (var s = [], a = 0; a < arguments.length; a++) s.push(arguments[a]);
    s.length < 5 && (s[3] = 0, s[4] = 2 * Math.PI),
    this.addCommand("A:" + s.join(","))
},
AXEPath.prototype.arcTo = function(t, e, i, n, o) {
    var r = [t, e, i, n, o];
    this.addCommand("AT:" + r.join(","))
},
AXEPath.prototype.bezierCurveTo = function(t, e, i, n, o, r) {
    var s = [t, e, i, n, o, r];
    this.addCommand("BC:" + s.join(","))
},
AXEPath.prototype.quadraticCurveTo = function(t, e, i, n) {
    var o = [t, e, i, n];
    this.addCommand("QC:" + o.join(","))
},
AXEPath.prototype.closePath = function() {
    this.addCommand("C")
},
AXEPath.prototype._commands = null,
AXEPath.prototype.commands = function(t) {
    return t && t != this._commands && (this._commands = t.slice(), this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._commands || (this._commands = []),
    this._commands
},
AXEPath.prototype.clearCommands = function() {
    this._commands = [],
    this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))
},
AXEPath.prototype.operationMap = function(t) {
    var e = null;
    switch (t) {
    case "M":
        e = "moveTo";
        break;
    case "L":
        e = "lineTo";
        break;
    case "A":
    case "AA":
        e = "arc";
        break;
    case "AT":
        e = "arcTo";
        break;
    case "E":
        e = "ellipse";
        break;
    case "R":
        e = "rect";
        break;
    case "C":
        e = "closePath";
        break;
    case "BC":
        e = "bezierCurveTo";
        break;
    case "QC":
        e = "quadraticCurveTo"
    }
    return e
},
AXEPath.prototype.addCommand = function(t) {
    for (var e = t.split("|"), i = 0; i < e.length; i++) {
        var n = e[i].split(":"),
        o = this.operationMap(n[0]);
        if (null != o) {
            for (var r = n.length > 1 ? n[1].split(",") : [], s = 0; s < r.length; s++) {
                var a = parseFloat(r[s]);
                r[s] = isNaN(a) ? r[s] : a,
                "AA" != n[0] || 3 != s && 4 != s || (r[s] = r[s] * (Math.PI / 180)),
                "AA" != n[0] && "A" != n[0] || 5 != s || "string" != typeof r[s] || (r[s] = "true" == r[s])
            }
            var l = {
                o: o,
                p: r
            };
            this.commands().push(l)
        }
    }
    e.length > 0 && this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))
},
AXEPath.prototype.clone = function() {
    var t = new AXEPath;
    return t._commands = this.commands().slice(),
    t
},
define("path", ["event", "event_target"],
function() {});
var AXEEasing = {}; !
function() {
    var t = function() {};
    t.easeNone = function(t, e, i, n) {
        return i * t / n + e
    },
    t.easeIn = function(t, e, i, n) {
        return i * t / n + e
    },
    t.easeOut = function(t, e, i, n) {
        return i * t / n + e
    },
    t.easeInOut = function(t, e, i, n) {
        return i * t / n + e
    },
    AXEEasing.Linear = t;
    var e = function() {};
    e.easeIn = function(t, e, i, n) {
        return i * (t /= n) * t * t + e
    },
    e.easeOut = function(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t + 1) + e
    },
    e.easeInOut = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t + e: i / 2 * ((t -= 2) * t * t + 2) + e
    },
    AXEEasing.Cubic = e;
    var i = function() {};
    i.easeIn = function(t, e, n, o) {
        return n - i.easeOut(o - t, 0, n, o) + e
    },
    i.easeOut = function(t, e, i, n) {
        return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e: t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e: t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e: i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
    },
    i.easeInOut = function(t, e, n, o) {
        return t < o / 2 ? .5 * i.easeIn(2 * t, 0, n, o) + e: .5 * i.easeOut(2 * t - o, 0, n, o) + .5 * n + e
    },
    AXEEasing.Bounce = i;
    var n = function() {};
    n.easeIn = function(t, e, i, n) {
        var o = 1.70158;
        return i * (t /= n) * t * ((o + 1) * t - o) + e
    },
    n.easeOut = function(t, e, i, n) {
        var o = 1.70158;
        return i * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e
    },
    n.easeInOut = function(t, e, i, n) {
        var o = 1.70158;
        return (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + e: i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + e
    },
    AXEEasing.Back = n;
    var o = function() {};
    o.easeIn = function(t, e, i, n, o, r) {
        var s;
        return o = isNaN(o) ? 0 : o,
        r = isNaN(r) ? 0 : r,
        0 == t ? e: 1 == (t /= n) ? e + i: (r || (r = .3 * n), !o || o < Math.abs(i) ? (o = i, s = r / 4) : s = r / Math.TWO_PI * Math.asin(i / o), -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - s) * Math.TWO_PI / r) + e)
    },
    o.easeOut = function(t, e, i, n, o, r) {
        var s;
        return o = isNaN(o) ? 0 : o,
        r = isNaN(r) ? 0 : r,
        0 == t ? e: 1 == (t /= n) ? e + i: (r || (r = .3 * n), !o || o < Math.abs(i) ? (o = i, s = r / 4) : s = r / Math.TWO_PI * Math.asin(i / o), o * Math.pow(2, -10 * t) * Math.sin((t * n - s) * Math.TWO_PI / r) + i + e)
    },
    o.easeInOut = function(t, e, i, n, o, r) {
        var s;
        return o = isNaN(o) ? 0 : o,
        r = isNaN(r) ? 0 : r,
        0 == t ? e: 2 == (t /= n / 2) ? e + i: (r || (r = n * (.3 * 1.5)), !o || o < Math.abs(i) ? (o = i, s = r / 4) : s = r / Math.TWO_PI * Math.asin(i / o), t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - s) * Math.TWO_PI / r) * -.5 + e: o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - s) * Math.TWO_PI / r) * .5 + i + e)
    },
    AXEEasing.Elastic = o;
    var r = function() {};
    r.easeIn = function(t, e, i, n) {
        return - i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
    },
    r.easeOut = function(t, e, i, n) {
        return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
    },
    r.easeInOut = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e: i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    },
    AXEEasing.Circle = r;
    var s = function() {};
    s.easeIn = function(t, e, i, n) {
        return 0 == t ? e: i * Math.pow(2, 10 * (t / n - 1)) + e - .001 * i
    },
    s.easeOut = function(t, e, i, n) {
        return t == n ? e + i: i * (1 - Math.pow(2, -10 * t / n)) + e
    },
    s.easeInOut = function(t, e, i, n) {
        return 0 == t ? e: t == n ? e + i: (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e: i / 2 * (2 - Math.pow(2, -10 * --t)) + e
    },
    AXEEasing.Expo = s;
    var a = function() {};
    a.easeIn = function(t, e, i, n) {
        return i * (t /= n) * t + e
    },
    a.easeOut = function(t, e, i, n) {
        return - i * (t /= n) * (t - 2) + e
    },
    a.easeInOut = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t + e: -i / 2 * (--t * (t - 2) - 1) + e
    },
    AXEEasing.Quad = a;
    var l = function() {};
    l.easeIn = function(t, e, i, n) {
        return i * (t /= n) * t * t * t + e
    },
    l.easeOut = function(t, e, i, n) {
        return - i * ((t = t / n - 1) * t * t * t - 1) + e
    },
    l.easeInOut = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e: -i / 2 * ((t -= 2) * t * t * t - 2) + e
    },
    AXEEasing.Quart = l;
    var h = function() {};
    h.easeIn = function(t, e, i, n) {
        return i * (t /= n) * t * t * t * t + e
    },
    h.easeOut = function(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t * t * t + 1) + e
    },
    h.easeInOut = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e: i / 2 * ((t -= 2) * t * t * t * t + 2) + e
    },
    AXEEasing.Quint = h;
    var c = function() {};
    c.easeIn = function(t, e, i, n) {
        return - i * Math.cos(t / n * Math.HALF_PI) + i + e
    },
    c.easeOut = function(t, e, i, n) {
        return i * Math.sin(t / n * Math.HALF_PI) + e
    },
    c.easeInOut = function(t, e, i, n) {
        return - i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
    },
    AXEEasing.Sine = c,
    AXEEasing.segmentEase = function(t, e) {
        t = [new AXEVec2(0, 0)].concat(t).concat([new AXEVec2(1, 1)]);
        for (var i = null,
        n = null,
        o = 0; o < t.length; o++) if (e < t[o].x) {
            n = t[o],
            i = t[o - 1];
            break
        }
        var r = n.subtract(i),
        s = Math.tan(r.radian());
        return e * s + (n.y - s * n.x)
    }
} (),
define("easing",
function() {});
var AXEAnimate = function(t, e, i, n, o, r) {
    this.target = t,
    this.to = i,
    this.duration = e,
    this.easing = "function" == typeof n ? n: AXEEasing.Linear.easeNone,
    this.onUpdate = o,
    this.onComplete = r
};
AXEAnimate.prototype.constructor = AXEAnimate,
AXEAnimate.prototype.target = null,
AXEAnimate.prototype.duration = 0,
AXEAnimate.prototype.easing = null,
AXEAnimate.prototype.onUpdate = null,
AXEAnimate.prototype.onComplete = null,
AXEAnimate.prototype.to = null,
AXEAnimate.prototype.from = null,
AXEAnimate.prototype.startTimestamp = 0,
AXEAnimate.prototype.init = function(t) {
    this.startTimestamp = t,
    this.from = {},
    AXEArrayUtil.deepCopy(this.target, this.to, this.from)
},
AXEAnimate.prototype.update = function(t) {
    var e = Math.min(t - this.startTimestamp, this.duration),
    i = this.easing(e, 0, 1, this.duration);
    AXEArrayUtil.setValues(this.target, this.from, this.to, i),
    "function" == typeof this.onUpdate && this.onUpdate(this.target, i);
    var n = t - this.startTimestamp >= this.duration;
    return n && "function" == typeof this.onComplete && this.onComplete(this.target),
    n
},
AXEAnimate.prototype.jumpToEnd = function() {
    this.update(this.startTimestamp + this.duration)
},
AXEAnimate.prototype.dealloc = function() {
    this.target = null,
    this.from = null,
    this.to = null,
    this.easing = null,
    this.onComplete = null,
    this.onUpdate = null,
    this.startTimestamp = 0
},
define("animate", ["array_util", "easing"],
function() {});
var AXEGhostShadow = function(t, e, i, n, o, r) {
    this.targetView = t,
    this.shadowView = e,
    this.overTargetView = "boolean" == typeof i && i,
    0 == isNaN(n) && (this.shadowDuration = n),
    0 == isNaN(o) && (this.shadowInterval = o),
    0 == isNaN(r) && (this.initAlpha = r)
};
AXEGhostShadow.prototype.constructor = AXEGhostShadow,
AXEGhostShadow.prototype.targetView = null,
AXEGhostShadow.prototype.shadowView = null,
AXEGhostShadow.prototype.overTargetView = !1,
AXEGhostShadow.prototype.shadowInterval = .1,
AXEGhostShadow.prototype.shadows = null,
AXEGhostShadow.prototype.interval = 0,
AXEGhostShadow.prototype.shadowDuration = .5,
AXEGhostShadow.prototype.onShadowEmpty = null,
AXEGhostShadow.prototype.initAlpha = 0,
AXEGhostShadow.prototype.update = function(t, e) {
    var i = this;
    if (null != i.shadows) for (var n = 0; n < i.shadows.length; n++) i.shadows[n].update(t, e);
    if (null != i.shadows && i.shadows.length <= 0 && null != i.onShadowEmpty && i.onShadowEmpty(i), i.interval += e, i.interval > i.shadowInterval) {
        i.interval = 0;
        var o = i.shadowView.clone();
        o.renderEvenNotOnTheStage(!0),
        o.matrix(i.targetView.matrix().clone()),
        o.alpha(i.initAlpha > 0 ? i.initAlpha: i.targetView.alpha()),
        null == i.shadows && (i.shadows = []),
        i.shadows.unshift(o),
        o.animate(i.shadowDuration, {
            alpha: 0
        },
        null, null,
        function() {
            for (var t = i.shadows.length - 1; t >= 0; t--) if (i.shadows[t] == o) {
                o.dealloc(),
                i.shadows.splice(t, 1);
                break
            }
        })
    }
},
AXEGhostShadow.prototype.clone = function() {
    return new AXEGhostShadow(this.targetView, this.shadowView, this.overTargetView, this.shadowInterval)
},
AXEGhostShadow.prototype.dealloc = function() {
    if (null != this.shadows) {
        for (var t = 0; t < this.shadows.length; t++) this.shadows[t].dealloc();
        this.shadows = null
    }
},
define("ghost_shadow",
function() {});
var AXELinearGradientColor = function(t, e) {
    null != t && (this.from = t.clone()),
    null != e && (this.to = e.clone()),
    AXEGradientColor.prototype.constructor.call(this, AXEGradientColor.LINEAR)
};
AXELinearGradientColor.colorWithXML = function(t) {
    var e = new AXELinearGradientColor;
    return e.parseXML(t),
    e
},
AXELinearGradientColor.prototype = new AXEGradientColor,
AXELinearGradientColor.prototype.constructor = AXELinearGradientColor,
AXELinearGradientColor.prototype.from = null,
AXELinearGradientColor.prototype.to = null,
AXELinearGradientColor.prototype.parseXML = function(t) {
    var e = t.attr("from").split(",");
    this.from = new AXEVec2(parseFloat(e[0]), parseFloat(e[1]));
    var i = t.attr("to").split(",");
    this.to = new AXEVec2(parseFloat(i[0]), parseFloat(i[1])),
    AXEGradientColor.prototype.parseXML.call(this, t)
},
AXELinearGradientColor.prototype.clone = function() {
    var t = new AXELinearGradientColor;
    return this.copyColors(t),
    t.usePercent(this.usePercent()),
    t.from = this.from.clone(),
    t.to = this.to.clone(),
    t
},
define("linear_gradient_color", ["vec2", "gradient_color"],
function() {});
var AXECircle = function(t, e, i) {
    t = arguments.length > 0 ? t: 0,
    e = arguments.length > 1 ? e: 0,
    this.center = new AXEVec2(t, e),
    this.radius = arguments.length > 2 ? i: 0
};
AXECircle.prototype.constructor = AXECircle,
AXECircle.prototype.center = null,
AXECircle.prototype.radius = 0,
AXECircle.prototype.isEqualTo = function(t) {
    return 0 == this.center.distance(t.center) && this.radius == t.radius
},
AXECircle.prototype.containsAXEVec2 = function(t) {
    return this.center.distance(t) >= this.radius
},
AXECircle.prototype.intersect = function(t) {
    return this.center.distance(t.center) > this.radius + t.radius
},
AXECircle.prototype.clone = function() {
    return new AXECircle(this.center.x, this.center.y, this.radius)
},
AXECircle.prototype.toString = function() {
    return "[x:" + this.center.x + ", y:" + this.center.y + ", r:" + this.radius + "]"
},
define("circle", ["vec2"],
function() {});
var AXERadialGradientColor = function(t, e) {
    null != t && (this.inner = t.clone()),
    null != e && (this.to = e.clone()),
    AXEGradientColor.prototype.constructor.call(this, AXEGradientColor.RADIAL)
};
AXERadialGradientColor.colorWithXML = function(t) {
    var e = new AXERadialGradientColor;
    return e.parseXML(t),
    e
},
AXERadialGradientColor.prototype = new AXEGradientColor,
AXERadialGradientColor.prototype.constructor = AXERadialGradientColor,
AXERadialGradientColor.prototype.inner = null,
AXERadialGradientColor.prototype.outer = null,
AXERadialGradientColor.prototype.parseXML = function(t) {
    var e = t.attr("inner").split(",");
    this.inner = new AXECircle(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]));
    var i = t.attr("outer").split(",");
    this.outer = new AXECircle(parseFloat(i[0]), parseFloat(i[1]), parseFloat(i[2])),
    AXEGradientColor.prototype.parseXML.call(this, t)
},
AXERadialGradientColor.prototype.clone = function() {
    var t = new AXERadialGradientColor;
    return this.copyColors(t),
    t.usePercent(this.usePercent()),
    t.inner = this.inner.clone(),
    t.outer = this.outer.clone(),
    t
},
define("radial_gradient_color", ["circle", "gradient_color"],
function() {});
var AXEView = function(t) {
    if (arguments.length > 0 && t instanceof AXEView) return t
};
AXEView.viewIndex = 0,
AXEView.issueViewName = function(t) {
    var e = t + "_" + AXEView.viewIndex;
    return AXEView.viewIndex += 1,
    e
},
AXEView.prototype = new AXEEventTarget,
AXEView.prototype.constructor = AXEView,
AXEView.prototype.className = "AXEView",
AXEView.prototype.controller = null,
AXEView.prototype.dealloc = function() {
    this._ghostShadow = null,
    this._matrix = null,
    this._mask = null,
    this.remove(),
    null != this._bgColor && (this._bgColor.dealloc(), this._bgColor = null),
    null != this._gradientBGColor && (this._gradientBGColor.dealloc(), this._gradientBGColor = null),
    null != this._clickArea && (this._clickArea = null),
    AXEEventTarget.prototype.dealloc.call(this)
},
AXEView.prototype.clone = function() {
    var t = new AXEView;
    return this.copyProperties(t),
    t
},
AXEView.prototype.copyProperties = function(t) {
    t._onTheStage = -1,
    t.viewData(this.viewData()),
    t.bgSat(this.bgSat()),
    t.name(this.name()),
    t.width(this.width()),
    t.height(this.height()),
    t.widthPercent(this.widthPercent()),
    t.heightPercent(this.heightPercent()),
    t.xPercent(this.xPercent()),
    t.yPercent(this.yPercent()),
    t.alpha(this.alpha()),
    this._initMat && (t._initMat = this.initMat().clone()),
    this._initSize && (t._initSize = this.initSize().clone()),
    t.cornerRadius(this.cornerRadius()),
    null != this._clickArea && t.clickArea(this._clickArea),
    t.scaleMode(this.scaleMode()),
    t.alignMode(this.alignMode()),
    null != this.bgColor() && t.bgColor(this.bgColor().clone()),
    null != this.borderColor() && t.borderColor(this.borderColor()),
    t.borderSize(this.borderSize()),
    null != this.shadowColor() && t.shadowColor(this.shadowColor().clone()),
    null != this._gradientBGColor && t.gradientBGColor(this._gradientBGColor.clone()),
    t.shadowOffsetX(this.shadowOffsetX()),
    t.shadowOffsetY(this.shadowOffsetY()),
    t.shadowBlur(this.shadowBlur()),
    t.blendMode(this.blendMode()),
    t.enabled(this.enabled()),
    t.visible(this.visible()),
    t.clip(this.clip()),
    null != this.mask() && t.mask(this.mask().clone()),
    t.matrix(this.matrix().clone()),
    null != this._ghostShadow && (t._ghostShadow = this._ghostShadow.clone()),
    null != this.$html() && t.$html(this.$html().clone()),
    null != this.link() && t.link(this.link()),
    t.window(this.window()),
    null != this.bgImage() && t.bgImage(this.bgImage().clone()),
    t.shakeX(this.shakeX()),
    t.shakeY(this.shakeY()),
    t.shakeAlpha(this.shakeAlpha())
},
AXEView.prototype.updatePropsFromXML = function(t) {
    this.name(t.is("[name]") ? t.attr("name") : null),
    t.is("[hide-html]") ? this.removeAllHTML("true" == t.attr("hide-html").toLowerCase()) : this.removeAllHTML(!1);
    var e = t.children("data");
    if (e.length > 0) {
        var i = JSON.parse(e.text());
        this.viewData(i)
    } else this._viewData = null;
    var n = t.children("html");
    if (n.length > 0) {
        var o = $("<div></div>").append(n.children().clone()).html();
        if ("string" == typeof(o = o.replace(/<br><\/br>/gi, "<br/>")) && o.length > 0) {
            var r = $(o);
            if (r.is("[href]")) {
                var s = r.attr("href");
                s = decodeURIComponent(s),
                r.attr("href", s)
            }
            this.$html(r)
        }
    }
    var a = t.children("bg-img");
    if (a.length > 0) {
        var l = new AXEBGImage;
        l.updateProp(a),
        this.bgImage(l)
    } else this.bgImage(null);
    if (t.is("[shake-alpha]") && this.shakeAlpha(parseFloat(t.attr("shake-alpha"))), t.is("[shake]") ? (this.shakeX(parseFloat(t.attr("shake"))), this.shakeY(parseFloat(t.attr("shake")))) : (t.is("[shake-x]") ? this.shakeX(parseFloat(t.attr("shake-x"))) : this.shakeX(0), t.is("[shake-y]") ? this.shakeY(parseFloat(t.attr("shake-y"))) : this.shakeY(0)), t.is("[link]")) this.link(decodeURIComponent(t.attr("link"))),
    t.is("[window]") && this.window(t.attr("window"));
    else {
        var h = t.children("link");
        h.length > 0 && (this.link(h.text()), h.is("[window]") && this.window(h.attr("window")))
    }
    var c = /^([\-\d.]+)%$/;
    if (t.is("[width]")) {
        var p = t.attr("width").match(c);
        null != p ? this.widthPercent(parseFloat(p[1]) / 100) : this.width(parseFloat(t.attr("width")))
    }
    if (t.is("[height]")) {
        var u = t.attr("height").match(c);
        null != u ? this.heightPercent(parseFloat(u[1]) / 100) : this.height(parseFloat(t.attr("height")))
    }
    if (this._initSize = new AXEVec2(this.width(), this.height()), this.alpha(t.is("[alpha]") ? parseFloat(t.attr("alpha")) : 1), t.is("[corner-radius]") && this.cornerRadius(parseFloat(t.attr("corner-radius"))), t.is("[click-area]")) {
        for (var d = t.attr("click-area").split("|"), E = [], A = 0; A < d.length; A++) {
            var g = d[A].split(","),
            w = new AXEVec2(parseFloat(g[0]), parseFloat(g[1]));
            E.push(w)
        }
        this.clickArea(E)
    }
    if (t.is("[bg-sat]") && this.bgSat(parseFloat(t.attr("bg-sat"))), t.children("bg-color").length > 0) {
        var f = t.children("bg-color"),
        v = f.attr("type");
        v == AXEGradientColor.LINEAR ? this.gradientBGColor(AXELinearGradientColor.colorWithXML(f)) : v == AXEGradientColor.RADIAL && this.gradientBGColor(AXERadialGradientColor.colorWithXML(f))
    }
    t.is("[bg-color]") && this.bgColor(AXEColor.colorWithString(t.attr("bg-color"))),
    t.is("[border-color]") && this.borderColor(AXEColor.colorWithString(t.attr("border-color"))),
    t.is("[border-size]") && this.borderSize(parseInt(t.attr("border-size"), 10)),
    t.is("[shadow-color]") && this.shadowColor(AXEColor.colorWithString(t.attr("shadow-color"))),
    t.is("[shadow-x]") && this.shadowOffsetX(parseFloat(t.attr("shadow-x"))),
    t.is("[shadow-y]") && this.shadowOffsetY(parseFloat(t.attr("shadow-y"))),
    t.is("[shadow-blur]") && this.shadowBlur(parseInt(t.attr("shadow-blur"), 10)),
    this.blendMode(t.is("[blend]") ? t.attr("blend") : this._blendMode),
    this.enabled(!t.is("[enabled]") || "true" == t.attr("enabled")),
    this.visible(!t.is("[visible]") || "true" === String(t.attr("visible")).toLowerCase()),
    this.clip( !! t.is("[clip]") && "true" === String(t.attr("clip")).toLowerCase());
    var X = t.children("mask");
    if (X.length > 0) {
        var y = new AXEPath;
        y.addCommand(X.text()),
        this.mask(y)
    } else this.mask(null);
    var m = new AXEMat3;
    if (t.is("[matrix]")) {
        var _ = t.attr("matrix").split(",");
        m.a = parseFloat(_[0]),
        m.b = parseFloat(_[1]),
        m.c = parseFloat(_[2]),
        m.d = parseFloat(_[3]),
        m.tx = parseFloat(_[4]),
        m.ty = parseFloat(_[5])
    } else {
        var b = t.is("[scale-x]") ? parseFloat(t.attr("scale-x")) : 1,
        S = t.is("[scale-y]") ? parseFloat(t.attr("scale-y")) : 1,
        T = t.is("[rotation]") ? parseFloat(t.attr("rotation")) * (Math.PI / 180) : 0,
        C = 0;
        if (t.is("[x]")) {
            var V = t.attr("x"),
            M = V.match(c);
            null != M ? this.xPercent(parseFloat(M[1]) / 100) : C = parseFloat(V)
        }
        var R = 0;
        if (t.is("[y]")) {
            var x = t.attr("y"),
            L = x.match(c);
            null != L ? this.yPercent(parseFloat(L[1]) / 100) : R = parseFloat(x)
        }
        m.a = b * Math.cos(T),
        m.b = Math.sin(T),
        m.c = -1 * Math.sin(T),
        m.d = S * Math.cos(T),
        m.tx = C,
        m.ty = R
    }
    if (this.matrix(m), this._initMat = m.clone(), t.is("[align]")) {
        var P = AXEAlignMode[t.attr("align").replace(/-/g, "_").toUpperCase()];
        this.alignMode(P)
    }
    if (t.is("[scale]")) {
        var B = AXEStringUtil.lineToCamel(t.attr("scale").replace(/_/g, "-"));
        this.scaleMode(AXEScaleMode[B])
    }
    null != this.controller && this.controller.onViewUpdateFromXML(t)
},
AXEView.prototype._initMat = null,
AXEView.prototype.initMat = function() {
    return this._initMat && this._initMat instanceof AXEMat3 || (this._initMat = new AXEMat3),
    this._initMat
},
AXEView.prototype._initSize = null,
AXEView.prototype.initSize = function() {
    return this._initSize && this._initSize instanceof AXEVec2 || (this._initSize = new AXEVec2),
    this._initSize
},
AXEView.prototype.cachedImage = null,
AXEView.prototype._name = null,
AXEView.prototype.name = function(t) {
    return "string" == typeof t && (this._name = t),
    null == this._name && (this._name = AXEView.issueViewName(this.className)),
    this._name
},
AXEView.prototype.pathname = function() {
    var t = [],
    e = this;
    do {
        t.unshift(e.name()), e = e.parent()
    } while ( null != e );
    return t.join(".")
},
AXEView.prototype._needToRender = !1,
AXEView.prototype.needToRender = function(t) {
    arguments.length > 0 && t != this._needToRender && (this._needToRender = Boolean(t), 0 == this._needToRender && null != this.bgImage() && (this.bgImage().needToRender = !1));
    var e = this._needToRender;
    return null != this.bgImage() && (e = e || this.bgImage().needToRender),
    !e && this._ghostShadow && (e = this._ghostShadow.shadows.length > 0),
    e
},
AXEView.prototype._renderEngine = null,
AXEView.prototype.renderEngine = function(t) {
    return Boolean(t) && t != this._renderEngine && (this._renderEngine = t),
    this._renderEngine
},
AXEView.prototype._scaleMode = null,
AXEView.prototype.scaleMode = function(t) {
    return arguments.length > 0 && this._scaleMode != t && (this._scaleMode = t, this.needResizeFlag = !0),
    this._scaleMode
},
AXEView.prototype._alignMode = AXEAlignMode.NONE,
AXEView.prototype.alignMode = function(t) {
    return arguments.length > 0 && this._alignMode != t && (this._alignMode = t, this.needResizeFlag = !0),
    this._alignMode
},
AXEView.prototype._xPercent = 0,
AXEView.prototype.xPercent = function(t) {
    return 0 == isNaN(t) && this._xPercent != t && (this._xPercent = t, this.needResizeFlag = !0),
    this._xPercent
},
AXEView.prototype._yPercent = 0,
AXEView.prototype.yPercent = function(t) {
    return 0 == isNaN(t) && this._yPercent != t && (this._yPercent = t, this.needResizeFlag = !0),
    this._yPercent
},
AXEView.prototype.x = function(t) {
    if (0 == isNaN(t)) {
        var e = this.matrix().clone();
        e.tx = t,
        this.matrix(e)
    }
    return this.matrix().tx
},
AXEView.prototype.y = function(t) {
    if (0 == isNaN(t)) {
        var e = this.matrix().clone();
        e.ty = t,
        this.matrix(e)
    }
    return this.matrix().ty
},
AXEView.prototype.scaleX = function(t) {
    var e = this.matrix(),
    i = this.radian(),
    n = e.a / Math.cos(i);
    return 0 == isNaN(t) && (n = t, (e = e.clone()).a = n * Math.cos(i), this.matrix(e)),
    n
},
AXEView.prototype.scaleY = function(t) {
    var e = this.matrix(),
    i = this.radian(),
    n = e.d / Math.cos(i);
    return 0 == isNaN(t) && (n = t, (e = e.clone()).d = n * Math.cos(i), this.matrix(e)),
    n
},
AXEView.prototype.rotation = function(t) {
    var e = 0;
    if (0 == isNaN(t)) {
        e = t;
        var i = t * (Math.PI / 180);
        this.radian(i)
    } else e = this.radian() * (180 / Math.PI);
    return e
},
AXEView.prototype.radian = function(t) {
    var e = this.matrix(),
    i = Math.asin(e.b);
    if (e.b > 0 && e.a < 0 ? i = Math.PI - i: e.b < 0 && e.a < 0 ? i = Math.PI - i: e.b < 0 && e.a > 0 && (i = 2 * Math.PI + i), 0 == isNaN(t)) {
        var n = e.a / Math.cos(i);
        i = t,
        (e = e.clone()).a = n * Math.cos(i),
        e.b = Math.sin(i),
        e.c = -1 * e.b,
        e.d = e.a,
        this.matrix(e)
    }
    return i
},
AXEView.prototype._matrix = null,
AXEView.prototype.matrix = function(t) {
    return Boolean(t) && t != this._matrix && (this._matrix = t.clone(), this.triggerEvent(new AXEEvent(AXEEvent.MAT_CHANGE)), this.needToRender(!0)),
    null == this._matrix && (this._matrix = new AXEMat3),
    this._matrix
},
AXEView.prototype.needResizeFlag = !1,
AXEView.prototype._width = 1,
AXEView.prototype.width = function(t) {
    return 0 == isNaN(t) && this._width != t && (this._width = t, this.needResizeFlag = !0, this.needToRender(!0)),
    this._width
},
AXEView.prototype._height = 1,
AXEView.prototype.height = function(t) {
    return 0 == isNaN(t) && this._height != t && (this._height = t, this.needResizeFlag = !0, this.needToRender(!0)),
    this._height
},
AXEView.prototype._widthPercent = 0,
AXEView.prototype.widthPercent = function(t) {
    return 0 == isNaN(t) && (t = Math.max(0, t)) != this._widthPercent && (this._widthPercent = t, this.needResizeFlag = !0),
    this._widthPercent
},
AXEView.prototype._heightPercent = 0,
AXEView.prototype.heightPercent = function(t) {
    return 0 == isNaN(t) && (t = Math.max(0, t)) != this._heightPercent && (this._heightPercent = t, this.needResizeFlag = !0),
    this._heightPercent
},
AXEView.prototype._borderSize = 0,
AXEView.prototype.borderSize = function(t) {
    return 0 == isNaN(t) && (this._borderSize = t, this.needToRender(!0)),
    this._borderSize
},
AXEView.prototype._borderColor = null,
AXEView.prototype.borderColor = function(t) {
    return t instanceof AXEColor && (this._borderColor = t.clone(), this.needToRender(!0)),
    this._borderColor
},
AXEView.prototype.stageEnabled = function() {
    for (var t = this.enabled(), e = this; null != e.parent() && t;) t = e.parent().enabled() && e.enabled(),
    e = e.parent();
    return t
},
AXEView.prototype.stageAlpha = function() {
    for (var t = this.alpha(), e = this; null != e.parent();) t = e.parent().alpha() * t,
    e = e.parent();
    return t
},
AXEView.prototype._alpha = 1,
AXEView.prototype.alpha = function(t) {
    return 0 == isNaN(t) && this._alpha != t && (this._alpha = t, this.needToRender(!0)),
    this._alpha
},
AXEView.prototype._clickArea = null,
AXEView.prototype.clickArea = function(t) {
    if (Boolean(t) && t != this._clickArea) {
        for (var e = [], i = 0; i < t.length; i++) e.push(t[i].clone());
        this._clickArea = e
    }
    return this._clickArea
},
AXEView.prototype._cornerRadius = 0,
AXEView.prototype.cornerRadius = function(t) {
    return 0 == isNaN(t) && t != this._cornerRadius && (this._cornerRadius = t, this.needToRender(!0)),
    this._cornerRadius
},
AXEView.prototype._bgSat = 1,
AXEView.prototype.bgSat = function(t) {
    return 0 == isNaN(t) && (t = Math.max(0, Math.min(1, t))) != this._bgSat && (this._bgSat = t, this.needToRender(!0)),
    this._bgSat
},
AXEView.prototype._bgImage = null,
AXEView.prototype.bgImage = function(t) {
    return arguments.length > 0 && t != this._bgImage && (null != this._bgImage && (this._bgImage.dealloc(), this._bgImage = null), this._bgImage = t, this.needToRender(!0)),
    this._bgImage
},
AXEView.prototype._bgColor = null,
AXEView.prototype.bgColor = function(t) {
    return arguments.length > 0 && (this._bgColor = Boolean(t) ? t.clone() : null, this.needToRender(!0)),
    this._bgColor
},
AXEView.prototype._gradientBGColor = null,
AXEView.prototype.gradientBGColor = function(t) {
    return arguments.length > 0 && (this._gradientBGColor = Boolean(t) ? t.clone() : null, this.needToRender(!0)),
    this._gradientBGColor
},
AXEView.prototype._clip = !1,
AXEView.prototype.clip = function(t) {
    return arguments.length > 0 && t != this._clip && (this._clip = t, this.needToRender(!0)),
    this._clip
},
AXEView.prototype.onViewMaskChange = function() {
    this.needToRender(!0)
},
AXEView.prototype._maskShape = null,
AXEView.prototype.maskShape = function(t) {
    return null != t && t != this._maskShape && (null != this._maskShape && (this._maskShape.isMask(!1), this._maskShape.path().removeListener(AXEEvent.CHANGE, this, this.onViewMaskChange)), this._maskShape = t, null != this._maskShape && (this._maskShape.isMask(!0), this._maskShape.path().addListener(AXEEvent.CHANGE, this, this.onViewMaskChange))),
    this._maskShape
},
AXEView.prototype._mask = null,
AXEView.prototype.mask = function(t) {
    return arguments.length > 0 && t != this._mask && (null != this._mask && this._mask.dealloc(), null != t ? (this._mask = t.clone(), this._mask.addListener(AXEEvent.CHANGE, this, this.onViewMaskChange)) : this._mask = null, this.needToRender(!0)),
    this._mask
},
AXEView.prototype._shadowOffsetX = 0,
AXEView.prototype.shadowOffsetX = function(t) {
    return ! 1 === isNaN(t) && parseFloat(t) != this._shadowOffsetX && (this._shadowOffsetX = parseFloat(t), this.needToRender(!0)),
    this._shadowOffsetX
},
AXEView.prototype._shadowOffsetY = 0,
AXEView.prototype.shadowOffsetY = function(t) {
    return ! 1 === isNaN(t) && parseFloat(t) != this._shadowOffsetY && (this._shadowOffsetY = parseFloat(t), this.needToRender(!0)),
    this._shadowOffsetY
},
AXEView.prototype._shadowColor = null,
AXEView.prototype.shadowColor = function(t) {
    return arguments.length > 0 && (Boolean(t) ? null != this._shadowColor && 0 != this._shadowColor.equalsTo(t) || (null != this._shadowColor && this._shadowColor.dealloc(), this._shadowColor = t.clone(), this.needToRender(!0)) : null != this._shadowColor && (this._shadowColor.dealloc(), this._shadowColor = null, this.needToRender(!0))),
    this._shadowColor
},
AXEView.prototype._shadowBlur = 0,
AXEView.prototype.shadowBlur = function(t) {
    return 0 == isNaN(t) && t != this._shadowBlur && (this._shadowBlur = t, this.needToRender(!0)),
    this._shadowBlur
},
AXEView.prototype._blendMode = "source-over",
AXEView.prototype.blendMode = function(t) {
    return "string" == typeof t && t != this._blendMode && (this._blendMode = t, this.needToRender(!0)),
    this._blendMode
},
AXEView.prototype._ghostShadow = null,
AXEView.prototype.ghostShadow = function() {
    return this._ghostShadow
},
AXEView.prototype.setGhostShadow = function(t, e, i, n, o) {
    this.clearGhostShadow(),
    this._ghostShadow = new AXEGhostShadow(this, t, e, i, n, o),
    this.needToRender(!0)
},
AXEView.prototype.clearGhostShadow = function() {
    null != this._ghostShadow && (this._ghostShadow.dealloc(), this._ghostShadow = null)
},
AXEView.prototype._visible = !0,
AXEView.prototype.visible = function(t) {
    return "boolean" == typeof t && t != this._visible && (this._onTheStage = -1, this._visible = t, this.resetEvents(), this.needToRender(!0)),
    this._visible
},
AXEView.prototype._parent = null,
AXEView.prototype.parent = function(t) {
    return arguments.length > 0 && t != this._parent && (this._parent = t),
    this._parent
},
AXEView.prototype.remove = function() {
    null != this.parent() && this.parent().removeSubView(this)
},
AXEView.prototype._enabled = !0,
AXEView.prototype.enabled = function(t) {
    return "boolean" == typeof t && t != this._enabled && (this._enabled = t, this.resetEvents(), this.needToRender(!0)),
    this._enabled
},
AXEView.prototype.matrixTo = function(t) {
    var e = null;
    if (arguments.length > 0 && t != this) {
        for (var i = this,
        n = new AXEMat3; null != i.parent();) if (n = n.concatWith(i.matrix()), (i = i.parent()) == t) return n;
        for (var o = t,
        r = new AXEMat3; null != o.parent();) r = r.concatWith(o.matrix()),
        o = o.parent();
        e = n.concatWith(r.inversion())
    } else e = new AXEMat3;
    return e
},
AXEView.prototype._renderEvenNotOnTheStage = !1,
AXEView.prototype.renderEvenNotOnTheStage = function(t) {
    return "boolean" == typeof t && t != this._renderEvenNotOnTheStage && (this._renderEvenNotOnTheStage = t),
    this._renderEvenNotOnTheStage
},
AXEView.prototype._onTheStage = -1,
AXEView.prototype.onTheStage = function() {
    if ( - 1 == this._onTheStage) {
        var t = !1;
        if (this.visible()) {
            var e = this.stage();
            if (e && "AXEStage" == e.className) {
                var i = e.rect(),
                n = this.rect(e);
                0 == i.intersect(n).isEmpty() && (t = !0)
            }
        }
        this._onTheStage = t ? 1 : 0
    }
    return 1 == this._onTheStage
},
AXEView.prototype.rect = function(t) {
    var e = new AXEVec2(0, 0),
    i = new AXEVec2(this.width(), 0),
    n = new AXEVec2(0, this.height()),
    o = new AXEVec2(this.width(), this.height()),
    r = arguments.length > 0 ? this.matrixTo(t) : this.matrixTo(),
    s = null;
    if (null != r) {
        var a = r.transformPoint(e),
        l = r.transformPoint(i),
        h = r.transformPoint(n),
        c = r.transformPoint(o),
        p = Math.min(a.x, l.x, h.x, c.x),
        u = Math.max(a.x, l.x, h.x, c.x),
        d = Math.min(a.y, l.y, h.y, c.y),
        E = Math.max(a.y, l.y, h.y, c.y);
        s = new AXERect(p, d, u - p, E - d)
    }
    return s
},
AXEView.prototype.canTrigger = function(t) {
    var e;
    if (null == this.clickArea()) e = this.rect().containsVec2(t);
    else {
        var i = this.clickArea();
        e = !1;
        for (var n = 0; n < i.length; n++) {
            var o = (n + 1) % i.length;
            i[n].y > t.y != i[o].y > t.y && t.x <= (i[o].x - i[n].x) * (t.y - i[n].y) / (i[o].y - i[n].y) + i[n].x && (e = !e)
        }
    }
    return e
},
AXEView.prototype.convertTouches = function(t, e) {
    for (var i = [], n = e.matrixTo(this), o = 0; o < t.length; o++) {
        var r = new AXEVec2(t[o].x, t[o].y);
        r = n.transformPoint(r);
        var s = new AXETouch(r.x, r.y, t[o].stageX, t[o].stageY);
        i.push(s)
    }
    return i
},
AXEView.prototype.spreadToTop = function(t) {
    if (null != this.parent()) {
        var e = t.clone();
        e.target = t.target,
        e.currentPhase = AXEEvent.BUBBLING_PHASE,
        t instanceof AXETouchEvent && (e.touches = this.parent().convertTouches(t.touches, this)),
        this.parent().triggerEvent(e)
    }
},
AXEView.prototype.lastEvent = null,
AXEView.prototype.startEvent = null,
AXEView.prototype.lastClickEvent = null,
AXEView.prototype.isRolling = !1,
AXEView.prototype.triggerEvent = function(t) {
    var e = this;
    if (t instanceof AXETouchEvent && t.currentPhase == AXEEvent.CAPTURING_PHASE) if (e.enabled() && e.visible()) if (t.type == AXETouchEvent.ROLL_OVER) {
        if (e.canTrigger(new AXEVec2(t.touches[0].x, t.touches[0].y))) 0 == e.isRolling ? (e.isRolling = !0, AXEEventTarget.prototype.triggerEvent.call(e, t)) : e.spreadToDeep(t);
        else if (e.isRolling) {
            e.isRolling = !1;
            var i = new AXETouchEvent(AXETouchEvent.ROLL_OUT, []);
            i.currentPhase = AXEEvent.CAPTURING_PHASE,
            AXEEventTarget.prototype.triggerEvent.call(e, i)
        }
        t.cancel = !0
    } else t.type == AXETouchEvent.ROLL_OUT ? (e.isRolling && AXEEventTarget.prototype.triggerEvent.call(e, t), t.cancel = !0) : t.type == AXETouchEvent.TOUCH_START ? e.canTrigger(new AXEVec2(t.touches[0].x, t.touches[0].y)) ? (e.lastEvent = t, e.startEvent = e.lastEvent, AXEEventTarget.prototype.triggerEvent.call(e, t)) : t.cancel = !0 : t.type == AXETouchEvent.TOUCH_MOVE ? null != e.lastEvent ? (e.lastEvent = t, AXEEventTarget.prototype.triggerEvent.call(e, t)) : t.cancel = !0 : t.type == AXETouchEvent.TOUCH_END ? null != e.lastEvent ? (e.lastEvent = null, e.startEvent = null, AXEEventTarget.prototype.triggerEvent.call(e, t)) : t.cancel = !0 : t.type == AXETouchEvent.CLICK ? null != e.lastEvent ? (e.lastClickEvent = t, AXEEventTarget.prototype.triggerEvent.call(e, t)) : t.cancel = !0 : t.type == AXETouchEvent.SWIPE ? null != e.lastEvent && e.lastEvent.type == AXETouchEvent.TOUCH_MOVE ? AXEEventTarget.prototype.triggerEvent.call(e, t) : t.cancel = !0 : t.type == AXETouchEvent.DOUBLE_TAP && (null != e.lastClickEvent && Math.abs(e.lastClickEvent.timestamp - t.timestamp) <= 300 ? AXEEventTarget.prototype.triggerEvent.call(e, t) : t.cancel = !0);
    else t.cancel = !0;
    else {
        if (t.type == AXETouchEvent.CLICK && null != e.link() && e.link().length > 0) var n = setTimeout(function() {
            clearTimeout(n),
            AXEEnv.os.wechat || "_self" == e.window() ? window.location.href = e.link() : window.open(e.link(), e.window())
        },
        100);
        AXEEventTarget.prototype.triggerEvent.call(e, t)
    }
},
AXEView.prototype.animateChangeFlag = !1,
AXEView.prototype.objAnimate = null,
AXEView.prototype._animating = !1,
AXEView.prototype.animating = function(t) {
    "boolean" == typeof t && (this._animating = t);
    var e = this._animating;
    return ! 1 === e && null != this.parent() && (e = this.parent().animating()),
    e
},
AXEView.prototype.animate = function(t, e, i, n, o) {
    this.objAnimate = new AXEAnimate(this, t, e, i, n, o),
    this.animateChangeFlag = !0,
    this.needToRender(!0)
},
AXEView.prototype.fadeOut = function({
    duration: t = .4,
    onComplete: e = null
}) {
    const i = this;
    i.animate(t, {
        alpha: 0
    },
    AXEEasing.Sine.easeInOut, null,
    function() {
        i.visible(!1),
        e && e(i)
    })
},
AXEView.prototype.fadeIn = function({
    duration: t = .4,
    onComplete: e = null
}) {
    const i = this;
    i.visible(!0),
    i.alpha(0),
    i.animate(t, {
        alpha: 1
    },
    AXEEasing.Sine.easeInOut, null,
    function() {
        e && e(i)
    })
},
AXEView.prototype.stopAnimation = function(t) {
    null != this.objAnimate && (t = "boolean" == typeof t && t, this._animating && t && this.objAnimate.jumpToEnd(), this.animating(!1), this.animateChangeFlag = !1, this.objAnimate = null, this.onAnimationStop())
},
AXEView.prototype.onAnimationStart = function() {
    null != this.controller && this.controller.onViewStartAnimate()
},
AXEView.prototype.onAnimationStop = function() {
    null != this.controller && this.controller.onViewEndAnimate()
},
AXEView.prototype.onAdd = function(t) {
    null != this.controller && this.controller.onViewAdded(t);
    var e = new AXEEvent(AXEEvent.ADDED);
    this.triggerEvent(e)
},
AXEView.prototype.resetEvents = function() {
    this.isRolling = !1,
    this.lastEvent = null,
    this.startEvent = null,
    this.lastClickEvent = null
},
AXEView.prototype.afterRender = function() {
    null != this.controller && this.controller.onViewAfterRender()
},
AXEView.prototype.onRemoveFromStage = function() {
    this.resetEvents(),
    null != this.controller && this.controller.onViewRemoveFromStage();
    var t = new AXEEvent(AXEEvent.REMOVE_FROM_STAGE);
    this.triggerEvent(t)
},
AXEView.prototype.onRemoveFromSuperView = function(t) {
    this.resetEvents(),
    null != this.controller && this.controller.onViewRemoved(t);
    var e = new AXEEvent(AXEEvent.REMOVED);
    this.triggerEvent(e),
    this.onRemoveFromStage()
},
AXEView.prototype.stage = function() {
    for (var t = this; null != t.parent() && "AXEStage" != t.parent().className;) t = t.parent();
    return null == t.parent() ? t: t.parent()
},
AXEView.prototype.onStage = !1,
AXEView.prototype.onAddToStage = function() {
    this.onStage = !0,
    this.resetEvents();
    var t = new AXEEvent(AXEEvent.ADD_TO_STAGE);
    this.triggerEvent(t);
    var e = this.stage();
    null != e && (this.onWindowOrientationChanged(e.orientation), null != this.parent() ? this.resize(this.parent().width(), this.parent().height()) : this.resize(this.width(), this.height())),
    null != this.controller && this.controller.onViewAddToStage()
},
AXEView.prototype.onWindowOrientationChanged = function(t) {
    this.windowOrientationChange(t),
    null != this.controller && this.controller.onWindowOrientationChanged(t)
},
AXEView.prototype.windowOrientationChange = function(t) {},
AXEView.prototype._active = !0,
AXEView.prototype.active = function(t) {
    return null != t && this._active != t && (this._active = t, this._active ? (this.onActivate(), null != this.controller && this.controller.onViewActivate(), this.needToRender(!0)) : (this.onDeactivate(), null != this.controller && this.controller.onViewDeactivate())),
    this._active
},
AXEView.prototype.onActivate = function() {},
AXEView.prototype.onDeactivate = function() {},
AXEView.prototype.resize = function(t, e) {
    if (0 != this.widthPercent() && this.width(t * this.widthPercent()), 0 != this.heightPercent() && this.height(e * this.heightPercent()), 0 != this.xPercent() && this.x(t * this.xPercent()), 0 != this.yPercent() && this.y(e * this.yPercent()), 0 == isNaN(this.alignMode()) && null != this.scaleMode()) {
        var i = this.alignMode(),
        n = this.scaleMode()(this.width(), this.height(), t, e, i);
        this.matrix(n)
    }
    null != this.controller && this.controller.onViewResize(t, e);
    var o = new AXEEvent(AXEEvent.RESIZE);
    this.triggerEvent(o)
},
AXEView.prototype._shakeX = 0,
AXEView.prototype.shakeX = function(t) {
    return 0 == isNaN(t) && t != this._shakeX && (this._shakeX = t, this.needToRender(!0)),
    this._shakeX
},
AXEView.prototype._shakeY = 0,
AXEView.prototype.shakeY = function(t) {
    return 0 == isNaN(t) && t != this._shakeY && (this._shakeY = t, this.needToRender(!0)),
    this._shakeY
},
AXEView.prototype._shakeAlpha = 0,
AXEView.prototype.shakeAlpha = function(t) {
    return 0 == isNaN(t) && t != this._shakeAlpha && (this._shakeAlpha = t, this.needToRender(!0)),
    this._shakeAlpha
},
AXEView.prototype.update = function(t, e) {
    if (null != this._maskShape) {
        this._maskShape.update(t, e);
        var i = this._maskShape.path().clone();
        this.mask(i)
    }
    if (this.animateChangeFlag && (this.animateChangeFlag = !1, null != this.objAnimate && (this.objAnimate.init(t), this.animating(!0), this.onAnimationStart())), null != this.objAnimate) {
        this.needToRender(!0);
        var n = this.objAnimate;
        this.objAnimate.update(t) && n == this.objAnimate && (this.objAnimate = null, this.animating(!1), this.onAnimationStop())
    }
    null != this.controller && this.controller.onViewUpdated(t, e),
    null != this._ghostShadow && this._ghostShadow.update(t, e),
    0 == this.shakeX() && 0 == this.shakeY() && 0 == this.shakeAlpha() || this.needToRender(!0),
    this.needToRender() && (this.cachedImage = null),
    this.needResizeFlag && null != this.parent() && (this.needResizeFlag = !1, this.resize(this.parent().width(), this.parent().height())),
    this._onTheStage = -1
},
AXEView.prototype._removeAllHTML = !1,
AXEView.prototype.removeAllHTML = function(t) {
    return "boolean" == typeof t && t != this._removeAllHTML && (this._removeAllHTML = t, this.needToRender(!0)),
    this._removeAllHTML
},
AXEView.prototype.triggerCanvasEvent = function(t) {
    t instanceof TouchEvent ? this.renderEngine() && this.renderEngine().$canvas[0].dispatchEvent(new TouchEvent(t.type, {
        touches: t.touches
    })) : this.renderEngine().$canvas[0].dispatchEvent(new MouseEvent(t.type, {
        clientX: t.clientX,
        clientY: t.clientY,
        screenX: t.screenX,
        screenY: t.screenY,
        offsetX: t.offsetX,
        offsetY: t.offsetY,
        x: t.x,
        y: t.y
    }))
},
AXEView.prototype._$html = null,
AXEView.prototype.$html = function(t) {
    var e = this;
    if (arguments.length > 0) {
        if (e._$html = t, null != e._$html) {
            var i = AXEEnv.os.isTouchDevice ? "touchstart": "mousedown";
            e.$html().on(i,
            function(t) {
                var i = e.$html()[0].nodeName.toLowerCase();
                "input" != i && "select" != i && "textarea" != i && (AXEEnv.os.ios && t.preventDefault(), e.triggerCanvasEvent(t))
            });
            var n = AXEEnv.os.isTouchDevice ? "touchmove": "mousemove";
            e.$html().on(n,
            function(t) {
                var i = e.$html()[0].nodeName.toLowerCase();
                "input" != i && "select" != i && "textarea" != i && (AXEEnv.os.ios && t.preventDefault(), e.triggerCanvasEvent(t))
            });
            var o = AXEEnv.os.isTouchDevice ? "touchend": "mouseup";
            e.$html().on(o,
            function(t) {
                var i = e.$html()[0].nodeName.toLowerCase();
                "input" != i && "select" != i && "textarea" != i && (AXEEnv.os.ios && t.preventDefault(), e.triggerCanvasEvent(t))
            });
            var r = AXEEnv.os.isTouchDevice ? "touchend": "click";
            e.$html().on(r,
            function(t) {
                var i = e.$html()[0].nodeName.toLowerCase();
                "input" != i && "select" != i && "textarea" != i && (AXEEnv.os.ios && t.preventDefault(), e.triggerCanvasEvent(t))
            })
        }
        e.needToRender(!0)
    }
    return e._$html
},
AXEView.prototype._link = null,
AXEView.prototype.link = function(t) {
    return arguments.length > 0 && (this._link = t),
    this._link
},
AXEView.prototype._window = "_self",
AXEView.prototype.window = function(t) {
    return Boolean(t) && t != this._window && (this._window = t),
    this._window
},
AXEView.prototype._viewData = null,
AXEView.prototype.viewData = function(t) {
    return arguments.length > 0 && (this._viewData = t),
    null == this._viewData && (this._viewData = {}),
    this._viewData
},
define("view", ["bg_image", "string_util", "mat3", "rect", "vec2", "path", "animate", "easing", "color", "event", "event_target", "touch", "touch_event", "scale_mode", "align_mode", "ghost_shadow", "gradient_color", "linear_gradient_color", "radial_gradient_color"],
function() {});
var AXEViewContainer = function(t) {
    if (arguments.length > 0 && t instanceof AXEViewContainer) return t
};
AXEViewContainer.prototype = new AXEView,
AXEViewContainer.prototype.constructor = AXEViewContainer,
AXEViewContainer.prototype.className = "AXEViewContainer",
AXEViewContainer.prototype.clone = function() {
    var t = new AXEViewContainer;
    return this.copyProperties(t),
    t
},
AXEViewContainer.prototype.copyProperties = function(t) {
    AXEView.prototype.copyProperties.call(this, t),
    AXEViewContainer(t).muted(this.muted()),
    this.subViews().length > 0 && this.eachSubView(function(e, i) {
        AXEViewContainer(t).addSubView(i.clone())
    })
},
AXEViewContainer.prototype.dealloc = function() {
    for (var t = this.subViews(), e = 0; e < t.length; e++) t[e].dealloc();
    AXEView.prototype.dealloc.call(this)
},
AXEViewContainer.prototype.updatePropsFromXML = function(t) {
    var e = this;
    AXEView.prototype.updatePropsFromXML.call(e, t),
    t.is("[muted]") && e.muted("true" == t.attr("muted")),
    t.children().each(function(t, i) {
        var n = $(i),
        o = n[0].nodeName.toLowerCase(),
        r = AXEViewFactory.createViewByNodeName(o);
        null != r && (r.updatePropsFromXML(n), e.addSubView(r))
    })
},
AXEViewContainer.prototype.needToRender = function(t) {
    var e, i = this.subViews();
    if (arguments.length > 0) e = AXEView.prototype.needToRender.call(this, t),
    !1 === Boolean(t) && this.eachSubView(function(t, e) {
        e.needToRender(!1)
    });
    else if (!1 === (e = AXEView.prototype.needToRender.call(this))) for (var n = 0; n < i.length; n++) if (i[n].needToRender()) {
        e = !0;
        break
    }
    return e
},
AXEViewContainer.prototype.resetEvents = function() {
    AXEView.prototype.resetEvents.call(this),
    this.eachSubView(function(t, e) {
        e.resetEvents()
    })
},
AXEViewContainer.prototype._subViews = null,
AXEViewContainer.prototype.subViews = function() {
    return null == this._subViews && (this._subViews = []),
    this._subViews
},
AXEViewContainer.prototype.subViewsCount = function() {
    return this.subViews().length
},
AXEViewContainer.prototype.addSubView = function(t) {
    null != t.parent() && t.parent().clearSubView(t),
    this.subViews().push(t),
    this.afterSubViewAdded(t)
},
AXEViewContainer.prototype.insertSubViewAt = function(t, e) {
    null != t.parent() && t.parent().clearSubView(t);
    var i = this.subViews();
    e = Math.max(0, Math.min(i.length, e)),
    i.splice(e, 0, t),
    this.afterSubViewAdded(t)
},
AXEViewContainer.prototype.swapSubViews = function(t, e) {
    var i = this.indexOfSubView(t);
    if (i >= 0) {
        var n = this.indexOfSubView(e);
        n >= 0 && this.swapSubViewsByIndex(i, n)
    }
},
AXEViewContainer.prototype.swapSubViewsByIndex = function(t, e) {
    if (t >= 0 && t < this.subViewsCount() && e >= 0 && e < this.subViewsCount()) {
        var i = this.subViews().slice();
        this.subViews()[t] = i[e],
        this.subViews()[e] = i[t]
    }
},
AXEViewContainer.prototype.afterSubViewAdded = function(t) {
    t.parent(this),
    t.onAdd(this),
    this.onTheStage() && t.onAddToStage(),
    t.active(this.active()),
    this.needToRender(!0)
},
AXEViewContainer.prototype.renderEvenNotOnTheStage = function(t) {
    var e = AXEView.prototype.renderEvenNotOnTheStage.call(this);
    return "boolean" == typeof t && e != t && (e = AXEView.prototype.renderEvenNotOnTheStage.call(this, t), this.eachSubView(function(e, i) {
        i.renderEvenNotOnTheStage(t)
    })),
    e
},
AXEViewContainer.prototype.onAddToStage = function() {
    AXEView.prototype.onAddToStage.call(this);
    for (var t = 0; t < this.subViews().length; t++) this.subViews()[t].onAddToStage()
},
AXEViewContainer.prototype.empty = function() {
    for (var t = this.subViews().slice(), e = 0; e < t.length; e++) this.removeSubView(t[e])
},
AXEViewContainer.prototype.orderSubViews = function(t) {
    var e, i = this.subViews().slice(),
    n = !1;
    do {
        e = 0;
        for (var o = 0; o < i.length - 1; o++) {
            var r = i[o],
            s = i[o + 1];
            t(r, s) && (n = !0, i[o] = s, i[o + 1] = r, e++)
        }
    } while ( e > 0 );
    n && (this._subViews = i, this.needToRender(!0))
},
AXEViewContainer.prototype.clearSubView = function(t) {
    var e = !1;
    if (t.parent() == this) for (var i = 0; i < this.subViews().length; i++) {
        var n = this.subViews()[i];
        if (n === t) {
            this.subViews().splice(i, 1),
            n.parent(null),
            e = !0;
            break
        }
    }
    return e && this.needToRender(!0),
    e
},
AXEViewContainer.prototype.removeSubView = function(t) {
    this.clearSubView(t) && t.onRemoveFromSuperView(this)
},
AXEViewContainer.prototype.onRemoveFromStage = function() {
    AXEView.prototype.onRemoveFromStage.call(this),
    this.eachSubView(function(t, e) {
        e.onRemoveFromStage()
    })
},
AXEViewContainer.prototype.indexOfSubView = function(t) {
    for (var e = -1,
    i = 0; i < this.subViews().length; i++) if (this.subViews()[i] === t) {
        e = i;
        break
    }
    return e
},
AXEViewContainer.prototype.subViewByIndex = function(t) {
    var e = null;
    return t >= 0 && t < this.subViews().length && (e = this.subViews()[t]),
    e
},
AXEViewContainer.prototype.subViewsByReg = function(t) {
    var e = [];
    return this.eachSubView(function(i, n) {
        if (n.name().match(t) && e.push(n), n instanceof AXEViewContainer) {
            var o = n.subViewsByReg(t);
            o.length > 0 && (e = e.concat(o))
        }
    }),
    e
},
AXEViewContainer.prototype.subViewByName = function(t) {
    for (var e = null,
    i = 0; i < this.subViews().length; i++) {
        var n = this.subViews()[i];
        if (n.name() == t) {
            e = n;
            break
        }
    }
    if (null == e) for (var o = 0; o < this.subViews().length; o++) {
        var r = this.subViews()[o];
        if (r instanceof AXEViewContainer && (e = r.subViewByName(t)), null != e) break
    }
    return e
},
AXEViewContainer.prototype.containsSubView = function(t) {
    var e = !1;
    return this.eachSubView(function(i, n) {
        return n != t || (e = !0, !1)
    }),
    e
},
AXEViewContainer.prototype.onTheStage = function() {
    if ( - 1 == this._onTheStage) {
        var t = AXEView.prototype.onTheStage.call(this);
        this.visible() && 0 == t && 0 == this.clip() && this.eachSubView(function(e, i) {
            if (i.onTheStage()) return t = !0,
            !1
        }),
        this._onTheStage = t ? 1 : 0
    }
    return 1 == this._onTheStage
},
AXEViewContainer.prototype.eachSubView = function(t) {
    for (var e = this.subViews().slice(), i = 0; i < e.length; i++) {
        var n = e[i];
        if (!1 === t.call(this, i, n)) break
    }
},
AXEViewContainer.prototype._muted = !1,
AXEViewContainer.prototype.muted = function(t) {
    return "boolean" == typeof t && t != this._muted && (this._muted = t),
    this._muted
},
AXEViewContainer.prototype.spreadToDeep = function(t) {
    var e = !1;
    if (this.subViewsCount() > 0) for (var i = this.subViews().slice(), n = i.length - 1; n >= 0; n--) {
        var o = i[n],
        r = t.clone();
        if (r.currentPhase = AXEEvent.CAPTURING_PHASE, r instanceof AXETouchEvent && (r.touches = o.convertTouches(t.touches, this)), o.triggerEvent(r), 0 == r.cancel) {
            e = !0;
            break
        }
    }
    return e
},
AXEViewContainer.prototype.triggerEvent = function(t) {
    t instanceof AXETouchEvent ? this.visible() && this.enabled() ? this.muted() ? t.currentPhase == AXEEvent.CAPTURING_PHASE ? t.cancel = !this.spreadToDeep(t) : t.currentPhase == AXEEvent.BUBBLING_PHASE ? AXEView.prototype.triggerEvent.call(this, t) : t.currentPhase == AXEEvent.AT_TARGET && 1 == t.bubbles && this.spreadToTop(t) : AXEView.prototype.triggerEvent.call(this, t) : t.cancel = !0 : AXEView.prototype.triggerEvent.call(this, t)
},
AXEViewContainer.prototype.active = function(t) {
    var e = AXEView.prototype.active.call(this, t);
    return this.eachSubView(function(t, i) {
        i.active(e)
    }),
    e
},
AXEViewContainer.prototype.onWindowOrientationChanged = function(t) {
    AXEView.prototype.onWindowOrientationChanged.call(this, t),
    this.eachSubView(function(e, i) {
        i.onWindowOrientationChanged(t)
    })
},
AXEViewContainer.prototype.resize = function(t, e) {
    var i = this;
    AXEView.prototype.resize.call(i, t, e),
    i.eachSubView(function(t, e) {
        e.resize(i.width(), i.height())
    })
},
AXEViewContainer.prototype.update = function(t, e) {
    if (null == this.cachedImage) for (var i = this.subViews(), n = 0; n < i.length; n++) {
        var o = i[n];
        o.visible() && o.update(t, e)
    }
    AXEView.prototype.update.call(this, t, e)
},
define("view_container", ["view", "rect", "touch_event", "view_factory"],
function() {});
var AXEStage = function(t) {
    if (arguments.length > 0 && t instanceof AXEStage) return t
};
AXEStage.prototype = new AXEViewContainer,
AXEStage.prototype.constructor = AXEStage,
AXEStage.prototype.className = "AXEStage",
AXEStage.prototype.render = null,
AXEStage.prototype.clone = function() {
    var t = new AXEStage;
    return this.copyProperties(t),
    t
},
AXEStage.prototype.copyProperties = function(t) {
    AXEViewContainer.prototype.copyProperties.call(this, t),
    AXEStage(t).ratio(this.ratio()),
    AXEStage(t).acceptOrientation(this.acceptOrientation()),
    AXEStage(t)._frameRate = this._frameRate
},
AXEStage.prototype.updatePropsFromXML = function(t) {
    if (AXEViewContainer.prototype.updatePropsFromXML.call(this, t), t.is("[ratio]") ? this.ratio(parseFloat(t.attr("ratio"))) : null != window.devicePixelRatio && this.ratio(window.devicePixelRatio), t.is("[fps]") ? this._frameRate = parseFloat(t.attr("fps")) : this._frameRate = 40, t.is("[min-width]") && this.minWidth(parseFloat(t.attr("min-width"))), t.is("[min-height]") && this.minHeight(parseFloat(t.attr("min-height"))), t.is("[orientation]")) {
        for (var e = t.attr("orientation").split("|"), i = 0, n = 0; n < e.length; n++) i |= AXEOrientation[e[n].toUpperCase()];
        this.acceptOrientation(i)
    }
},
AXEStage.prototype._frameRate = 40,
AXEStage.prototype.frameRate = function(t) {
    return 0 == isNaN(t) && t != this._frameRate && (this._frameRate = t),
    this._frameRate
},
AXEStage.prototype._minWidth = 0,
AXEStage.prototype.minWidth = function(t) {
    return 0 == isNaN(t) && t != this._minWidth && (this._minWidth = t, this.sizeChange = !0),
    this._minWidth
},
AXEStage.prototype._minHeight = 0,
AXEStage.prototype.minHeight = function(t) {
    return 0 == isNaN(t) && t != this._minHeight && (this._minHeight = t, this.sizeChange = !0),
    this._minHeight
},
AXEStage.prototype.dealloc = function() {
    this._stageMatrix = null,
    AXEViewContainer.prototype.dealloc.call(this)
},
AXEStage.prototype.sizeChange = !1,
AXEStage.prototype._acceptOrientation = AXEOrientation.ALL_ORIENTATION,
AXEStage.prototype.acceptOrientation = function(t) {
    return 0 == isNaN(t) && t != this._acceptOrientation && (this._acceptOrientation = t, this.sizeChange = !0),
    this._acceptOrientation
},
AXEStage.prototype.matrix = function(t) {
    if (t instanceof AXEMat3 && 0 == t.equalsTo(new AXEMat3)) throw new Error("Stage matrix should not be set.");
    return AXEViewContainer.prototype.matrix.call(this)
},
AXEStage.prototype._stageMatrix = new AXEMat3,
AXEStage.prototype.stageMatrix = function(t) {
    return arguments.length > 0 && (this._stageMatrix = t, this.needToRender(!0)),
    this._stageMatrix
},
AXEStage.prototype._ratio = window.devicePixelRatio || 2,
AXEStage.prototype.ratio = function(t) {
    return ! 1 === isNaN(t) && this._ratio != parseFloat(t) && (this._ratio = t, this.needToRender(!0)),
    this._ratio
},
AXEStage.prototype.orientation = AXEOrientation.UNKONWN,
AXEStage.prototype.windowWidth = 0,
AXEStage.prototype.windowHeight = 0,
AXEStage.prototype._lockSise = !1,
AXEStage.prototype.lockSize = function(t) {
    return "boolean" == typeof t && t != this._lockSise && (this._lockSise = t, 0 == this._lockSise && (this.sizeChange = !0)),
    this._lockSise
},
AXEStage.prototype.firstUpdate = !1,
AXEStage.prototype.update = function(t, e) {
    AXEViewContainer.prototype.update.call(this, t, e),
    this.sizeChange && (this.sizeChange = !1, this.resizeStage()),
    0 == this.firstUpdate && (this.firstUpdate = !0, this.onAddToStage())
},
AXEStage.prototype.openResize = 0,
AXEStage.prototype.resize = function(t, e) {
    var i = AXEEnv.device.orientation();
    i != this.orientation && i != AXEOrientation.UNKONWN && (this.openResize = Date.now()),
    this.windowWidth = t,
    this.windowHeight = e,
    (0 == this.lockSize() || Date.now() - this.openResize < 500) && (this.sizeChange = !0)
},
AXEStage.prototype.resizeStage = function() {
    if (0 == this.lockSize() || Date.now() - this.openResize < 500) {
        var t = AXEEnv.device.orientation();
        if ((this.acceptOrientation() & t) == t) this.width(this.windowWidth * this.ratio()),
        this.height(this.windowHeight * this.ratio()),
        this.stageMatrix(new AXEMat3);
        else {
            var e, i, n, o; (this.acceptOrientation() | t) == AXEOrientation.PORTRAIT || (this.acceptOrientation() | t) == AXEOrientation.LANDSCAPE ? (this.width(this.windowWidth * this.ratio()), this.height(this.windowHeight * this.ratio()), i = e = this.width() / 2, o = n = this.height() / 2) : (this.width(this.windowHeight * this.ratio()), this.height(this.windowWidth * this.ratio()), e = this.width() / 2, n = this.height() / 2, i = this.height() / 2, o = this.width() / 2);
            var r = new AXEMat3,
            s = 0;
            t == AXEOrientation.PORTRAIT_UP ? s = (this.acceptOrientation() & AXEOrientation.PORTRAIT_DOWN) == AXEOrientation.PORTRAIT_DOWN ? Math.PI: (this.acceptOrientation() & AXEOrientation.LANDSCAPE_LEFT) == AXEOrientation.LANDSCAPE_LEFT ? Math.PI / 2 : -1 * Math.PI / 2 : t == AXEOrientation.PORTRAIT_DOWN ? s = (this.acceptOrientation() & AXEOrientation.PORTRAIT_UP) == AXEOrientation.PORTRAIT_UP ? Math.PI: (this.acceptOrientation() & AXEOrientation.LANDSCAPE_LEFT) == AXEOrientation.LANDSCAPE_LEFT ? -1 * Math.PI / 2 : Math.PI / 2 : t == AXEOrientation.LANDSCAPE_LEFT ? s = (this.acceptOrientation() & AXEOrientation.LANDSCAPE_RIGHT) == AXEOrientation.LANDSCAPE_RIGHT ? Math.PI: (this.acceptOrientation() & AXEOrientation.PORTRAIT_UP) == AXEOrientation.PORTRAIT_UP ? -1 * Math.PI / 2 : Math.PI / 2 : t == AXEOrientation.LANDSCAPE_RIGHT && (s = (this.acceptOrientation() & AXEOrientation.LANDSCAPE_LEFT) == AXEOrientation.LANDSCAPE_LEFT ? Math.PI: (this.acceptOrientation() & AXEOrientation.PORTRAIT_UP) == AXEOrientation.PORTRAIT_UP ? Math.PI / 2 : -1 * Math.PI / 2),
            r.a = Math.cos(s),
            r.b = Math.sin(s),
            r.c = -1 * r.b,
            r.d = r.a,
            r.tx = i - r.a * e - r.c * n,
            r.ty = o - r.b * e - r.d * n,
            this.stageMatrix(r)
        }
        this.needToRender(!0),
        AXEViewContainer.prototype.resize.call(this, this.width(), this.height()),
        t != this.orientation && (this.orientation = t, this.onWindowOrientationChanged(t))
    }
},
define("stage", ["mat3", "env", "orientation", "view_container", "date_util"],
function() {});
var AXEQRCode = function(t) {
    if (t instanceof AXEQRCode) return t
}; !
function() {
    function t(t) {
        this.mode = i.MODE_8BIT_BYTE,
        this.data = t
    }
    function e(t, e) {
        this.typeNumber = t,
        this.errorCorrectLevel = e,
        this.modules = null,
        this.moduleCount = 0,
        this.dataCache = null,
        this.dataList = []
    }
    t.prototype = {
        getLength: function(t) {
            return this.data.length
        },
        write: function(t) {
            for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
        }
    },
    e.prototype = {
        addData: function(e) {
            var i = new t(e);
            this.dataList.push(i),
            this.dataCache = null
        },
        isDark: function(t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            if (this.typeNumber < 1) {
                var t = 1;
                for (t = 1; t < 40; t++) {
                    for (var e = v.getRSBlocks(t, this.errorCorrectLevel), i = new X, n = 0, o = 0; o < e.length; o++) n += e[o].dataCount;
                    for (o = 0; o < this.dataList.length; o++) {
                        var r = this.dataList[o];
                        i.put(r.mode, 4),
                        i.put(r.getLength(), A.getLengthInBits(r.mode, t)),
                        r.write(i)
                    }
                    if (i.getLengthInBits() <= 8 * n) break
                }
                this.typeNumber = t
            }
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(t, i) {
            this.moduleCount = 4 * this.typeNumber + 17,
            this.modules = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++) {
                this.modules[n] = new Array(this.moduleCount);
                for (var o = 0; o < this.moduleCount; o++) this.modules[n][o] = null
            }
            this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(t, i),
            this.typeNumber >= 7 && this.setupTypeNumber(t),
            null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, i)
        },
        setupPositionProbePattern: function(t, e) {
            for (var i = -1; i <= 7; i++) if (! (t + i <= -1 || this.moduleCount <= t + i)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + i][e + n] = 0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4)
        },
        getBestMaskPattern: function() {
            for (var t = 0,
            e = 0,
            i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var n = A.getLostPoint(this); (0 == i || t > n) && (t = n, e = i)
            }
            return e
        },
        createMovieClip: function(t, e, i) {
            var n = t.createEmptyMovieClip(e, i);
            this.make();
            for (var o = 0; o < this.modules.length; o++) for (var r = 1 * o,
            s = 0; s < this.modules[o].length; s++) {
                var a = 1 * s;
                this.modules[o][s] && (n.beginFill(0, 100), n.moveTo(a, r), n.lineTo(a + 1, r), n.lineTo(a + 1, r + 1), n.lineTo(a, r + 1), n.endFill())
            }
            return n
        },
        setupTimingPattern: function() {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        },
        setupPositionAdjustPattern: function() {
            for (var t = A.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
                var n = t[e],
                o = t[i];
                if (null == this.modules[n][o]) for (var r = -2; r <= 2; r++) for (var s = -2; s <= 2; s++) this.modules[n + r][o + s] = -2 == r || 2 == r || -2 == s || 2 == s || 0 == r && 0 == s
            }
        },
        setupTypeNumber: function(t) {
            for (var e = A.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                var n = !t && 1 == (e >> i & 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
            }
            for (i = 0; i < 18; i++) {
                n = !t && 1 == (e >> i & 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
            }
        },
        setupTypeInfo: function(t, e) {
            for (var i = this.errorCorrectLevel << 3 | e,
            n = A.getBCHTypeInfo(i), o = 0; o < 15; o++) {
                var r = !t && 1 == (n >> o & 1);
                o < 6 ? this.modules[o][8] = r: o < 8 ? this.modules[o + 1][8] = r: this.modules[this.moduleCount - 15 + o][8] = r
            }
            for (o = 0; o < 15; o++) {
                r = !t && 1 == (n >> o & 1);
                o < 8 ? this.modules[8][this.moduleCount - o - 1] = r: o < 9 ? this.modules[8][15 - o - 1 + 1] = r: this.modules[8][15 - o - 1] = r
            }
            this.modules[this.moduleCount - 8][8] = !t
        },
        mapData: function(t, e) {
            for (var i = -1,
            n = this.moduleCount - 1,
            o = 7,
            r = 0,
            s = this.moduleCount - 1; s > 0; s -= 2) for (6 == s && s--;;) {
                for (var a = 0; a < 2; a++) if (null == this.modules[n][s - a]) {
                    var l = !1;
                    r < t.length && (l = 1 == (t[r] >>> o & 1)),
                    A.getMask(e, n, s - a) && (l = !l),
                    this.modules[n][s - a] = l,
                    -1 == --o && (r++, o = 7)
                }
                if ((n += i) < 0 || this.moduleCount <= n) {
                    n -= i,
                    i = -i;
                    break
                }
            }
        }
    },
    e.PAD0 = 236,
    e.PAD1 = 17,
    e.createData = function(t, i, n) {
        for (var o = v.getRSBlocks(t, i), r = new X, s = 0; s < n.length; s++) {
            var a = n[s];
            r.put(a.mode, 4),
            r.put(a.getLength(), A.getLengthInBits(a.mode, t)),
            a.write(r)
        }
        var l = 0;
        for (s = 0; s < o.length; s++) l += o[s].dataCount;
        if (r.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * l + ")");
        for (r.getLengthInBits() + 4 <= 8 * l && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
        for (; ! (r.getLengthInBits() >= 8 * l || (r.put(e.PAD0, 8), r.getLengthInBits() >= 8 * l));) r.put(e.PAD1, 8);
        return e.createBytes(r, o)
    },
    e.createBytes = function(t, e) {
        for (var i = 0,
        n = 0,
        o = 0,
        r = new Array(e.length), s = new Array(e.length), a = 0; a < e.length; a++) {
            var l = e[a].dataCount,
            h = e[a].totalCount - l;
            n = Math.max(n, l),
            o = Math.max(o, h),
            r[a] = new Array(l);
            for (var c = 0; c < r[a].length; c++) r[a][c] = 255 & t.buffer[c + i];
            i += l;
            var p = A.getErrorCorrectPolynomial(h),
            u = new f(r[a], p.getLength() - 1).mod(p);
            s[a] = new Array(p.getLength() - 1);
            for (c = 0; c < s[a].length; c++) {
                var d = c + u.getLength() - s[a].length;
                s[a][c] = d >= 0 ? u.get(d) : 0
            }
        }
        var E = 0;
        for (c = 0; c < e.length; c++) E += e[c].totalCount;
        var g = new Array(E),
        w = 0;
        for (c = 0; c < n; c++) for (a = 0; a < e.length; a++) c < r[a].length && (g[w++] = r[a][c]);
        for (c = 0; c < o; c++) for (a = 0; a < e.length; a++) c < s[a].length && (g[w++] = s[a][c]);
        return g
    };
    for (var i = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    },
    n = 1, o = 0, r = 3, s = 2, a = 0, l = 1, h = 2, c = 3, p = 4, u = 5, d = 6, E = 7, A = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(t) {
            for (var e = t << 10; A.getBCHDigit(e) - A.getBCHDigit(A.G15) >= 0;) e ^= A.G15 << A.getBCHDigit(e) - A.getBCHDigit(A.G15);
            return (t << 10 | e) ^ A.G15_MASK
        },
        getBCHTypeNumber: function(t) {
            for (var e = t << 12; A.getBCHDigit(e) - A.getBCHDigit(A.G18) >= 0;) e ^= A.G18 << A.getBCHDigit(e) - A.getBCHDigit(A.G18);
            return t << 12 | e
        },
        getBCHDigit: function(t) {
            for (var e = 0; 0 != t;) e++,
            t >>>= 1;
            return e
        },
        getPatternPosition: function(t) {
            return A.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function(t, e, i) {
            switch (t) {
            case a:
                return (e + i) % 2 == 0;
            case l:
                return e % 2 == 0;
            case h:
                return i % 3 == 0;
            case c:
                return (e + i) % 3 == 0;
            case p:
                return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
            case u:
                return e * i % 2 + e * i % 3 == 0;
            case d:
                return (e * i % 2 + e * i % 3) % 2 == 0;
            case E:
                return (e * i % 3 + (e + i) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + t)
            }
        },
        getErrorCorrectPolynomial: function(t) {
            for (var e = new f([1], 0), i = 0; i < t; i++) e = e.multiply(new f([1, g.gexp(i)], 0));
            return e
        },
        getLengthInBits: function(t, e) {
            if (1 <= e && e < 10) switch (t) {
            case i.MODE_NUMBER:
                return 10;
            case i.MODE_ALPHA_NUM:
                return 9;
            case i.MODE_8BIT_BYTE:
            case i.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + t)
            } else if (e < 27) switch (t) {
            case i.MODE_NUMBER:
                return 12;
            case i.MODE_ALPHA_NUM:
                return 11;
            case i.MODE_8BIT_BYTE:
                return 16;
            case i.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + t)
            } else {
                if (! (e < 41)) throw new Error("type:" + e);
                switch (t) {
                case i.MODE_NUMBER:
                    return 14;
                case i.MODE_ALPHA_NUM:
                    return 13;
                case i.MODE_8BIT_BYTE:
                    return 16;
                case i.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + t)
                }
            }
        },
        getLostPoint: function(t) {
            for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) {
                for (var r = 0,
                s = t.isDark(n, o), a = -1; a <= 1; a++) if (! (n + a < 0 || e <= n + a)) for (var l = -1; l <= 1; l++) o + l < 0 || e <= o + l || 0 == a && 0 == l || s == t.isDark(n + a, o + l) && r++;
                r > 5 && (i += 3 + r - 5)
            }
            for (n = 0; n < e - 1; n++) for (o = 0; o < e - 1; o++) {
                var h = 0;
                t.isDark(n, o) && h++,
                t.isDark(n + 1, o) && h++,
                t.isDark(n, o + 1) && h++,
                t.isDark(n + 1, o + 1) && h++,
                0 != h && 4 != h || (i += 3)
            }
            for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (i += 40);
            for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (i += 40);
            var c = 0;
            for (o = 0; o < e; o++) for (n = 0; n < e; n++) t.isDark(n, o) && c++;
            return i += 10 * (Math.abs(100 * c / e / e - 50) / 5)
        }
    },
    g = {
        glog: function(t) {
            if (t < 1) throw new Error("glog(" + t + ")");
            return g.LOG_TABLE[t]
        },
        gexp: function(t) {
            for (; t < 0;) t += 255;
            for (; t >= 256;) t -= 255;
            return g.EXP_TABLE[t]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    },
    w = 0; w < 8; w++) g.EXP_TABLE[w] = 1 << w;
    for (w = 8; w < 256; w++) g.EXP_TABLE[w] = g.EXP_TABLE[w - 4] ^ g.EXP_TABLE[w - 5] ^ g.EXP_TABLE[w - 6] ^ g.EXP_TABLE[w - 8];
    for (w = 0; w < 255; w++) g.LOG_TABLE[g.EXP_TABLE[w]] = w;
    function f(t, e) {
        if (null == t.length) throw new Error(t.length + "/" + e);
        for (var i = 0; i < t.length && 0 == t[i];) i++;
        this.num = new Array(t.length - i + e);
        for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
    }
    function v(t, e) {
        this.totalCount = t,
        this.dataCount = e
    }
    function X() {
        this.buffer = new Array,
        this.length = 0
    }
    f.prototype = {
        get: function(t) {
            return this.num[t]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= g.gexp(g.glog(this.get(i)) + g.glog(t.get(n)));
            return new f(e, 0)
        },
        mod: function(t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = g.glog(this.get(0)) - g.glog(t.get(0)), i = new Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
            for (n = 0; n < t.getLength(); n++) i[n] ^= g.gexp(g.glog(t.get(n)) + e);
            return new f(i, 0).mod(t)
        }
    },
    v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
    v.getRSBlocks = function(t, e) {
        var i = v.getRsBlockTable(t, e);
        if (null == i) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var n = i.length / 3,
        o = new Array,
        r = 0; r < n; r++) for (var s = i[3 * r + 0], a = i[3 * r + 1], l = i[3 * r + 2], h = 0; h < s; h++) o.push(new v(a, l));
        return o
    },
    v.getRsBlockTable = function(t, e) {
        switch (e) {
        case n:
            return v.RS_BLOCK_TABLE[4 * (t - 1) + 0];
        case o:
            return v.RS_BLOCK_TABLE[4 * (t - 1) + 1];
        case r:
            return v.RS_BLOCK_TABLE[4 * (t - 1) + 2];
        case s:
            return v.RS_BLOCK_TABLE[4 * (t - 1) + 3];
        default:
            return
        }
    },
    X.prototype = {
        get: function(t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        },
        put: function(t, e) {
            for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++
        }
    },
    AXEQRCode.CORRECT_LEVEL_L = 1,
    AXEQRCode.CORRECT_LEVEL_M = 0,
    AXEQRCode.CORRECT_LEVEL_Q = 3,
    AXEQRCode.CORRECT_LEVEL_H = 2,
    AXEQRCode.VERSION_2 = 2,
    AXEQRCode.prototype = new AXEView,
    AXEQRCode.prototype.constructor = AXEQRCode,
    AXEQRCode.prototype.className = "AXEQRCode",
    AXEQRCode.prototype.clone = function() {
        var t = new AXEQRCode;
        return this.copyProperties(t),
        t
    },
    AXEQRCode.prototype.copyProperties = function(t) {
        AXEQRCode(t).text(this.text()),
        AXEQRCode(t).correctLevel(this.correctLevel()),
        AXEQRCode(t).color(this.color().clone()),
        AXEView.prototype.copyProperties.call(this, t)
    },
    AXEQRCode.prototype.updatePropsFromXML = function(t) {
        AXEView.prototype.updatePropsFromXML.call(this, t),
        t.is("[correct]") && this.correctLevel(parseInt(AXEQRCode["CORRECT_LEVEL_" + t.attr("correct").toUpperCase()], 10)),
        t.children("text").length > 0 && this.text(t.children("text").text()),
        t.is("[color]") && this.color(AXEColor.colorWithString(t.attr("color")))
    },
    AXEQRCode.prototype.update = function(t, i) {
        if (AXEView.prototype.update.call(this, t, i), (this.correctLevelChange || this.textChange) && null != this._text) {
            this.correctLevelChange = !1,
            this.textChange = !1;
            var n = new e( - 1, this.correctLevel());
            n.addData(this.text()),
            n.make(),
            this._qrcode = n,
            this.needToRender(!0)
        }
    },
    AXEQRCode.prototype._qrcode = null,
    AXEQRCode.prototype.qrcode = function() {
        return this._qrcode
    },
    AXEQRCode.prototype._color = null,
    AXEQRCode.prototype.color = function(t) {
        return t instanceof AXEColor && t != this._color && (this._color = t.clone(), this.needToRender(!0)),
        null == this._color && (this._color = AXEColor.colorWithString("#000000")),
        this._color
    },
    AXEQRCode.prototype.correctLevelChange = !1,
    AXEQRCode.prototype._correctLevel = AXEQRCode.CORRECT_LEVEL_L,
    AXEQRCode.prototype.correctLevel = function(t) {
        return "number" == typeof t && t != this._correctLevel && (this._correctLevel = t, this.correctLevelChange = !0),
        this._correctLevel
    },
    AXEQRCode.prototype.textChange = !1,
    AXEQRCode.prototype._text = null,
    AXEQRCode.prototype.text = function(t) {
        return "string" == typeof t && t != this._text && (this._text = t, this.textChange = !0),
        this._text
    }
} (),
define("qrcode", ["view", "color"],
function() {});
var AXEBarCode = function(t) {
    if (t instanceof AXEBarCode) return t
};
AXEBarCode.prototype = new AXEView,
AXEBarCode.prototype.constructor = AXEBarCode,
AXEBarCode.prototype.BARS = [212222, 222122, 222221, 121223, 121322, 131222, 122213, 122312, 132212, 221213, 221312, 231212, 112232, 122132, 122231, 113222, 123122, 123221, 223211, 221132, 221231, 213212, 223112, 312131, 311222, 321122, 321221, 312212, 322112, 322211, 212123, 212321, 232121, 111323, 131123, 131321, 112313, 132113, 132311, 211313, 231113, 231311, 112133, 112331, 132131, 113123, 113321, 133121, 313121, 211331, 231131, 213113, 213311, 213131, 311123, 311321, 331121, 312113, 312311, 332111, 314111, 221411, 431111, 111224, 111422, 121124, 121421, 141122, 141221, 112214, 112412, 122114, 122411, 142112, 142211, 241211, 221114, 413111, 241112, 134111, 111242, 121142, 121241, 114212, 124112, 124211, 411212, 421112, 421211, 212141, 214121, 412121, 111143, 111341, 131141, 114113, 114311, 411113, 411311, 113141, 114131, 311141, 411131, 211412, 211214, 211232, 23311120],
AXEBarCode.prototype.START_BASE = 38,
AXEBarCode.prototype.STOP = 106,
AXEBarCode.prototype.fromType = {
    A: function(t) {
        var e = t;
        return t >= 0 && t < 32 && (e = t + 64),
        t >= 32 && t < 96 && (e = t - 32),
        e
    },
    B: function(t) {
        var e = t;
        return t >= 32 && t < 128 && (e = t - 32),
        e
    },
    C: function(t) {
        return t
    }
},
AXEBarCode.prototype.code128Detect = function(t) {
    return /^[0-9]+$/.test(t) ? "C": /[a-z]/.test(t) ? "B": "A"
},
AXEBarCode.prototype.bar2html = function(t) {
    for (var e = 0,
    i = []; e < t.length; e += 2) i.push('<div class="bar' + t.charAt(e) + " space" + t.charAt(e + 1) + '"></div>');
    return i.join("")
},
AXEBarCode.prototype.parseBarcode = function(t, e) {
    var i = this,
    n = [];
    n.add = function(t) {
        var e = i.BARS[t];
        this.check = 0 == this.length ? t: this.check + t * this.length,
        this.push(e || "UNDEFINED: " + t + "->" + e)
    },
    n.add(i.START_BASE + e.charCodeAt(0));
    for (var o = 0; o < t.length; o++) {
        var r = "C" == e ? +t.substr(o++, 2) : t.charCodeAt(o),
        s = i.fromType[e](r);
        if (isNaN(s) || s < 0 || s > 106) throw new Error("Unrecognized character (" + r + ") at position " + o + " in code '" + t + "'.");
        n.add(s)
    }
    return n.push(i.BARS[n.check % 103], i.BARS[i.STOP]),
    n
},
AXEBarCode.prototype.barNeedRender = !1,
AXEBarCode.prototype.className = "AXEBarCode",
AXEBarCode.prototype.clone = function() {
    var t = new AXEBarCode;
    return this.copyProperties(t),
    t
},
AXEBarCode.prototype.copyProperties = function(t) {
    AXEView.prototype.copyProperties.call(this, t);
    var e = AXEBarCode(t);
    e.text(this.text()),
    e.color(this.color().clone()),
    e.type(this.type()),
    this.renderBar()
},
AXEBarCode.prototype.updatePropsFromXML = function(t) {
    AXEView.prototype.updatePropsFromXML.call(this, t),
    t.is("[color]") && this.color(AXEColor.colorWithString(t.attr("color"))),
    t.is("[text]") && this.text(t.attr("text")),
    t.is("[type]") && this.type(t.attr("type"))
},
AXEBarCode.prototype.update = function(t, e) {
    AXEView.prototype.update.call(this, t, e),
    this.barNeedRender && this.renderBar()
},
AXEBarCode.prototype._text = null,
AXEBarCode.prototype.text = function(t) {
    return t && t != this._text && (this._text = t, this.barNeedRender = !0),
    this._text
},
AXEBarCode.prototype._color = null,
AXEBarCode.prototype.color = function(t) {
    return t && t != this._color && (this._color = t.clone(), this.barNeedRender = !0),
    this._color || (this._color = AXEColor.colorWithString("#000000")),
    this._color
},
AXEBarCode.prototype._type = "C",
AXEBarCode.prototype.type = function(t) {
    return t && t != this._type && (this._type = t, this.barNeedRender = !0),
    this._type
},
AXEBarCode.prototype._codes = null,
AXEBarCode.prototype.codes = function() {
    return this._codes
},
AXEBarCode.prototype._total = 0,
AXEBarCode.prototype.total = function() {
    return this._total
},
AXEBarCode.prototype.renderBar = function() {
    var t = this.type(),
    e = this.text();
    "C" == t && e.length % 2 == 1 && (e = "0" + e);
    var i = this.parseBarcode(e, t);
    this._codes = i.join(""),
    this._total = 0;
    for (var n = 0; n < this._codes.length; n++) {
        var o = parseInt(this._codes.charAt(n), 10);
        this._total += o
    }
    console.log(this._codes),
    console.log(this._total),
    this.needToRender(!0),
    this.barNeedRender = !1
},
define("barcode", ["view", "color"],
function() {});
var AXEBitmap = function(t) {
    if (arguments.length > 0 && t instanceof AXEBitmap) return t
};
AXEBitmap.prototype = new AXEView,
AXEBitmap.prototype.constructor = AXEBitmap,
AXEBitmap.prototype.renderHTML = function() {
    null != this._bitmap && this.showHTML() ? this.$html($(this._bitmap).clone()) : this.$html(null)
},
AXEBitmap.prototype.className = "AXEBitmap",
AXEBitmap.prototype.clone = function() {
    var t = new AXEBitmap;
    return this.copyProperties(t),
    t
},
AXEBitmap.prototype.copyProperties = function(t) {
    AXEView.prototype.copyProperties.call(this, t),
    AXEBitmap(t).sat(this.sat()),
    AXEBitmap(t).fixSize(this.fixSize()),
    AXEBitmap(t).bitmap(this.bitmap()),
    AXEBitmap(t).showHTML(this.showHTML())
},
AXEBitmap.prototype.dealloc = function() {
    this._bitmap = null,
    AXEView.prototype.dealloc.call(this)
},
AXEBitmap.prototype.updatePropsFromXML = function(t) {
    AXEView.prototype.updatePropsFromXML.call(this, t),
    t.is("[html]") ? this.showHTML("true" == t.attr("html").toLowerCase()) : this.showHTML(!1),
    t.is("[sat]") ? this.sat(parseFloat(t.attr("sat"))) : this.sat(1),
    this.fixSize(t.is("[width]") && t.is("[height]")),
    t.is("[src]") && this.bitmap(AXEAssetsLoader.asset(t.attr("src")))
},
AXEBitmap.prototype.updateSize = function() {
    null != this.bitmap() && (0 == this.fixSize() ? (this.width(this.bitmap().naturalWidth), this.height(this.bitmap().naturalHeight)) : (this.bitmap().width = this.width(), this.bitmap().height = this.height()))
},
AXEBitmap.prototype._showHTML = !1,
AXEBitmap.prototype.showHTML = function(t) {
    return "boolean" == typeof t && t != this._showHTML && (this._showHTML = t, this.renderHTML()),
    this._showHTML
},
AXEBitmap.prototype._fixSize = !1,
AXEBitmap.prototype.fixSize = function(t) {
    return arguments.length > 0 && t != this._fixSize && (this._fixSize = t, this.updateSize(), this.needToRender(!0)),
    this._fixSize
},
AXEBitmap.prototype._bitmap = null,
AXEBitmap.prototype.bitmap = function(t) {
    return arguments.length > 0 && t != this._bitmap && (this._bitmap = t, this.updateSize(), this.renderHTML(), this.needToRender(!0)),
    this._bitmap
},
AXEBitmap.prototype._sat = 1,
AXEBitmap.prototype.sat = function(t) {
    return 0 == isNaN(t) && (t = Math.max(Math.min(1, t), 0)) != this._sat && (this._sat = t, this.needToRender(!0)),
    this._sat
},
define("bitmap", ["view", "assets_loader"],
function() {});
var AXEAudioController = function(t, e) {
    if (arguments.length > 0) if ("string" == typeof t) {
        var i = AXEAssetsLoader.asset(t);
        if (null == i) {
            i = document.createElement("audio");
            var n = document.createElement("source");
            n.type = "audio/mp3",
            n.src = AXEURLUtil.assetLoadURL(AXELoaderConfig.baseURI, t, AXELoaderConfig.version),
            i.appendChild(n)
        }
        this.audio(i)
    } else "object" == typeof t && this.audio(t);
    if ("boolean" == typeof e) {
        var o = $(this.audio());
        e ? o.attr("loop", "loop") : o.removeAttr("loop"),
        this.loop(e)
    }
};
AXEAudioController.audioByURL = function(t) {
    return new AXEAudioController(t)
},
AXEAudioController.prototype = new AXEEventTarget,
AXEAudioController.prototype.constructor = AXEAudioController,
AXEAudioController.prototype._audio = null,
AXEAudioController.prototype.audio = function(t) {
    if ("object" == typeof t && this._audio != t) {
        null != this._audio && (this.pause(), this._audio.removeEventListener("playing", this), this._audio.removeEventListener("pause", this), this._audio.removeEventListener("ended", this), this._audio = null),
        this._audio = t;
        try {
            this._audio.loop = this.loop()
        } catch(t) {}
        try {
            this._audio.volume = this._volume
        } catch(t) {}
        this._audio.addEventListener("playing", this),
        this._audio.addEventListener("pause", this),
        this._audio.addEventListener("ended", this)
    }
    return this._audio
},
AXEAudioController.prototype.handleEvent = function(t) {
    var e = t.type;
    "playing" == e ? (this._playing = !0, this.triggerEvent(new AXEEvent(AXEEvent.PLAYING))) : "pause" == e ? (this._playing = !1, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))) : "ended" == e && (this.loop() ? this.play(0) : (this._playing = !1, this.triggerEvent(new AXEEvent(AXEEvent.END))))
},
AXEAudioController.prototype._volume = 1,
AXEAudioController.prototype.volume = function(t) {
    if (!1 === isNaN(t) && this._volume != t && (this._volume = t, null != this.audio())) try {
        this.audio().volume = this._volume
    } catch(t) {}
    return this._volume
},
AXEAudioController.prototype._playing = !1,
AXEAudioController.prototype.playing = function() {
    return this._playing
},
AXEAudioController.prototype._loop = !1,
AXEAudioController.prototype.loop = function(t) {
    if ("boolean" == typeof t && t != this._loop && (this._loop = t, null != this.audio())) try {
        this.audio().loop = this._loop
    } catch(t) {}
    return this._loop
},
AXEAudioController.prototype.play = function(t) {
    if (null != this.audio()) {
        if (!1 === isNaN(t)) try {
            this.currentTime(t)
        } catch(t) {}
        try {
            this.audio().play()
        } catch(t) {}
    }
},
AXEAudioController.prototype.pause = function() {
    if (null != this.audio()) try {
        this.audio().pause()
    } catch(t) {}
},
AXEAudioController.prototype.duration = function() {
    var t = 0;
    if (null != this.audio()) try {
        t = this.audio().duration
    } catch(t) {}
    return t
},
AXEAudioController.prototype.currentTime = function(t) {
    if (0 == isNaN(t) && null != this.audio()) try {
        if (this.audio().fastSeek) this.audio().fastSeek(t);
        else {
            var e = this.audio().seekable,
            i = e.start(0),
            n = e.end(0);
            t >= i && t < n ? this.audio().currentTime = t: t < i ? this.audio().currentTime = i: t > n && (this.audio().currentTime = n)
        }
    } catch(t) {}
    var o = 0;
    if (null != this.audio()) try {
        o = this.audio().currentTime
    } catch(t) {}
    return o
},
AXEAudioController.prototype.ended = function() {
    var t = !0;
    if (null != this._audio) try {
        t = this._audio.ended
    } catch(t) {}
    return t
},
AXEAudioController.prototype.dealloc = function() {
    null != this._audio && (this.pause(), this._audio.removeEventListener("playing", this), this._audio.removeEventListener("pause", this), this._audio.removeEventListener("ended", this), this._audio = null, this._playing = !1, this._loop = !1, this._volume = 1),
    AXEEventTarget.prototype.dealloc.call(this)
},
define("audio_ctrl", ["url_util", "event_target", "event", "assets_loader", "loader_config"],
function() {});
var AXEMovie = function(t) {
    if (arguments.length > 0 && t instanceof AXEMovie) return t
}; !
function() {
    var t = function(t, e, i, n) {
        this.frame = t,
        this.target = n instanceof Object ? n: null,
        this.action = e,
        this.params = i instanceof Array ? i: []
    };
    t.prototype.constructor = t,
    t.prototype.target = null,
    t.prototype.action = null,
    t.prototype.params = null,
    t.prototype.frame = NaN,
    t.prototype.execute = function() {
        this.action.apply(this.target, this.params)
    },
    AXEMovie.prototype = new AXEView,
    AXEMovie.prototype.constructor = AXEMovie,
    AXEMovie.prototype.className = "AXEMovie",
    AXEMovie.prototype.dealloc = function() {
        this._frames = null,
        AXEView.prototype.dealloc.call(this)
    },
    AXEMovie.prototype.clone = function() {
        var t = new AXEMovie;
        return this.copyProperties(t),
        t
    },
    AXEMovie.prototype.copyProperties = function(t) {
        if (AXEView.prototype.copyProperties.call(this, t), AXEMovie(t).playing = this.playing, AXEMovie(t)._currentFrame = this._currentFrame, AXEMovie(t)._frames = this.frames().slice(), AXEMovie(t).pauseWhenAnimating(this.pauseWhenAnimating()), AXEMovie(t).frameRate(this.frameRate()), AXEMovie(t).loop(this.loop()), AXEMovie(t).backToFirst(this.backToFirst()), AXEMovie(t).autoPlay(this.autoPlay()), AXEMovie(t).reversing = this.reversing, null != this.actions()) {
            AXEMovie(t)._actions = {};
            var e = this.actions();
            for (var i in e) e.hasOwnProperty(i) && (AXEMovie(t)._actions[i] = e[i])
        }
    },
    AXEMovie.prototype.updatePropsFromXML = function(t) {
        var e = this;
        AXEView.prototype.updatePropsFromXML.call(e, t);
        var i = t.children("frame"),
        n = e.frames();
        i.each(function(t, e) {
            for (var i = $(e), o = i.is("[repeat]") ? parseInt(i.attr("repeat"), 10) : 1, r = [], s = 0; s < o; s++) {
                var a = i.text(),
                l = AXEURLUtil.splitURLs(a);
                i.is("[reverse]") && (l = l.reverse());
                for (var h = 0; h < l.length; h++) {
                    var c = l[h];
                    r.push(AXEAssetsLoader.asset(c))
                }
            }
            if (i.is("[random]")) for (var p = 0; p < r.length; p++) {
                var u = Math.floor(Math.random() * r.length),
                d = Math.floor(Math.random() * r.length),
                E = r[u];
                r[u] = r[d],
                r[d] = E
            }
            n = n.concat(r)
        }),
        e.frames(n),
        t.is("[pause-when-animating]") && e.pauseWhenAnimating("true" === t.attr("pause-when-animating")),
        t.is("[fps]") && e.frameRate(parseFloat(t.attr("fps"))),
        e.loop(!t.is("[loop]") || "true" == String(t.attr("loop")).toLowerCase()),
        e.backToFirst( !! t.is("[back]") && "true" == String(t.attr("back")).toLowerCase()),
        t.children("script").each(function(t, i) {
            var n, o = $(i),
            r = o.attr("frame").toLowerCase();
            if (n = "first" == r ? 0 : "last" == r ? e.framesCount() - 1 : parseInt(r, 10), !isNaN(n)) {
                var s = o.attr("action").split(":"),
                a = s[0],
                l = e[a];
                if ("function" == typeof l) {
                    var h = [];
                    if (s.length > 1) {
                        h = s[1].split(",");
                        for (var c = 0; c < h.length; c++) {
                            var p = parseFloat(h[c]); ! 1 === isNaN(p) ? h[c] = p: "true" != h[c] && "false" != h[c] || (h[c] = "true" == h[c])
                        }
                    }
                    e.addAction(n, l, h, e)
                }
            }
        }),
        t.is("[auto-play]") ? e.autoPlay("true" == t.attr("auto-play").toLowerCase()) : e.autoPlay(!1)
    },
    AXEMovie.prototype._actions = null,
    AXEMovie.prototype.actions = function() {
        return null == this._actions && (this._actions = {}),
        this._actions
    },
    AXEMovie.prototype.frameActions = function(t) {
        var e = String(t),
        i = null;
        return this.actions().hasOwnProperty(e) && (i = this.actions()[e]),
        i
    },
    AXEMovie.prototype.addAction = function(e, i, n, o) {
        var r = new t(e, i, n, o),
        s = this.frameActions(e);
        return null == s && (s = [], this.actions()[String(e)] = s),
        s.push(r),
        r
    },
    AXEMovie.prototype.removeAction = function(t) {
        var e = this.frameActions(t.frame);
        if (null != e) for (var i = 0; i < e.length; i++) if (e[i] == t) {
            e.splice(i, 1);
            break
        }
    },
    AXEMovie.prototype.removeFrameAction = function(t) {
        null != this.frameActions(t) && delete this.actions()[String(t)]
    },
    AXEMovie.prototype._actionDisabled = !1,
    AXEMovie.prototype.actionDisabled = function(t) {
        return "boolean" == typeof t && t != this._actionDisabled && (this._actionDisabled = t),
        this._actionDisabled
    },
    AXEMovie.prototype._frameActionDisabled = null,
    AXEMovie.prototype.frameActionDisabled = function(t, e) {
        var i = String(t);
        "boolean" == typeof e && (this._frameActionDisabled = null == this._frameActionDisabled ? {}: this._frameActionDisabled, this._frameActionDisabled[i] = e);
        var n = !1;
        return null != this._frameActionDisabled && this._frameActionDisabled.hasOwnProperty(i) && (n = this._frameActionDisabled[i]),
        n
    },
    AXEMovie.prototype.playWhenAddToStage = function() {
        this.goToAndPlay(0)
    },
    AXEMovie.prototype._autoPlay = !1,
    AXEMovie.prototype.autoPlay = function(t) {
        return "boolean" == typeof t && t != this._autoPlay && (this._autoPlay = t, t ? this.addListener(AXEEvent.ADD_TO_STAGE, this, this.playWhenAddToStage) : this.removeListener(AXEEvent.ADD_TO_STAGE, this, this.playWhenAddToStage)),
        this._autoPlay
    },
    AXEMovie.prototype._backToFirst = !1,
    AXEMovie.prototype.backToFirst = function(t) {
        return arguments.length > 0 && (this._backToFirst = t),
        this._backToFirst
    },
    AXEMovie.prototype._loop = !0,
    AXEMovie.prototype.loop = function(t) {
        return arguments.length > 0 && (this._loop = t),
        this._loop
    },
    AXEMovie.prototype.duration = function() {
        return this.framesCount() / this.frameRate()
    },
    AXEMovie.prototype.sounds = null,
    AXEMovie.prototype.soundBySrc = function(t) {
        var e = null;
        return null != this.sounds && this.sounds.hasOwnProperty(t) && (e = this.sounds[t]),
        e
    },
    AXEMovie.prototype.playSound = function(t, e) {
        var i = this.soundBySrc(t);
        null == i && (i = new AXEAudioController(t, e = "boolean" == typeof e && e), null == this.sounds && (this.sounds = {}), this.sounds[t] = i),
        0 != i.playing() && 0 != i.loop() || i.play(0)
    },
    AXEMovie.prototype.pauseSound = function(t) {
        if (Boolean(t)) {
            if (null != this.sounds && this.sounds.hasOwnProperty(t)) {
                var e = this.sounds[t];
                null != e && e.pause()
            }
        } else if (null != this.sounds) for (var i in this.sounds) this.sounds.hasOwnProperty(i) && this.sounds[i].pause()
    },
    AXEMovie.prototype.framesCount = function() {
        return this.frames().length
    },
    AXEMovie.prototype.addFramesByURL = function(t, e, i) {
        i = isNaN(i) ? 1 : i,
        e = "boolean" == typeof e && e;
        for (var n = this.frames(), o = 0; o < i; o++) {
            var r = AXEURLUtil.splitURLs(t);
            e && (r = r.reverse());
            for (var s = 0; s < r.length; s++) {
                var a = r[s];
                n.push(AXEAssetsLoader.asset(a))
            }
        }
    },
    AXEMovie.prototype.delayTimer = null,
    AXEMovie.prototype.delay = function(t) {
        var e = this;
        e.clearDelay(),
        e.stop(),
        e.delayTimer = window.setTimeout(function() {
            window.clearTimeout(e.delayTimer),
            e.clearDelay()
        },
        1e3 * t)
    },
    AXEMovie.prototype.clearDelay = function() {
        0 == isNaN(this.delayTimer) && (window.clearTimeout(this.delayTimer), this.delayTimer = null, this.play())
    },
    AXEMovie.prototype.setFramesByURL = function(t) {
        for (var e = this.frames().slice(), i = AXEURLUtil.splitURLs(t), n = 0; n < i.length; n++) {
            var o = i[n];
            e.push(AXEAssetsLoader.asset(o))
        }
        this.frames(e)
    },
    AXEMovie.prototype._frames = null,
    AXEMovie.prototype.frames = function(t) {
        return arguments.length > 0 && null != t && (this._frames = t.slice(), this.needToRender(!0)),
        null == this._frames && (this._frames = []),
        this._frames
    },
    AXEMovie.prototype._frameRate = 24,
    AXEMovie.prototype.frameRate = function(t) {
        return ! 1 === isNaN(t) && (this._frameRate = t, this.needToRender(!0)),
        this._frameRate
    },
    AXEMovie.prototype.reversing = !1,
    AXEMovie.prototype.reverse = function() {
        var t = this.frames();
        t.reverse(),
        this.frames(t),
        this.reversing = !this.reversing
    },
    AXEMovie.prototype.playing = !1,
    AXEMovie.prototype.play = function() {
        this.playing || (this.playing = !0)
    },
    AXEMovie.prototype.stop = function() {
        this.playing && (this.playing = !1)
    },
    AXEMovie.prototype.goToAndStop = function(t) {
        this.stop(),
        this._currentFrame = Math.max(0, Math.min(this.framesCount() - 1, t)),
        this.needToRender(!0)
    },
    AXEMovie.prototype.goToAndPlay = function(t) {
        this.goToAndStop(t),
        this.play(),
        this.needToRender(!0)
    },
    AXEMovie.prototype._currentFrame = 0,
    AXEMovie.prototype.currentFrame = function(t) {
        return 0 == isNaN(t) && t != this._currentFrame && (this._currentFrame = t, this.needToRender(!0)),
        Math.floor(this._currentFrame)
    },
    AXEMovie.prototype._pauseWhenAnimating = !1,
    AXEMovie.prototype.pauseWhenAnimating = function(t) {
        return arguments.length > 0 && t != this._pauseWhenAnimating && (this._pauseWhenAnimating = t),
        this._pauseWhenAnimating
    },
    AXEMovie.prototype.update = function(t, e) {
        if (AXEView.prototype.update.call(this, t, e), this.playing && (!1 === this.pauseWhenAnimating() || !1 === this.animating())) {
            for (var i = e * this.frameRate(), n = Math.floor(this._currentFrame + i), o = n - this.currentFrame(), r = this._currentFrame + i - n, s = 0; s < o; s++) {
                var a = this.currentFrame();
                if (0 == this.actionDisabled() && 0 == this.frameActionDisabled(a)) {
                    var l = this.frameActions(a);
                    if (null != l) for (var h = 0; h < l.length; h++) l[h].execute()
                }
                if (this._currentFrame = this.currentFrame() + 1, this._currentFrame == this.framesCount() && (this.loop() ? this._currentFrame = 0 : (this._currentFrame = this.backToFirst() ? 0 : this.framesCount() - 1, this.stop()), this.triggerEvent(new AXEEvent(AXEEvent.END))), this.needToRender(!0), this.triggerEvent(new AXEEvent(AXEEvent.CHANGE)), 0 == this.playing) break
            }
            this.playing && (this._currentFrame = this.currentFrame() + r)
        }
    }
} (),
define("movie", ["view", "assets_loader", "url_util", "event", "audio_ctrl"],
function() {});
var AXEPattern = function(t, e) {
    this._patternImg = t,
    this._repeatMode = e
};
AXEPattern.REPEAT = "repeat",
AXEPattern.REPEAT_X = "repeat-x",
AXEPattern.REPEAT_Y = "repeat-y",
AXEPattern.NO_REPEAT = "no-repeat",
AXEPattern.prototype = new AXEEventTarget,
AXEPattern.prototype.constructor = AXEPattern,
AXEPattern.prototype._patternImg = null,
AXEPattern.prototype.patternImg = function(t) {
    return t && t != this._patternImg && (this._patternImg = t, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._patternImg
},
AXEPattern.prototype._repeatMode = AXEPattern.NO_REPEAT,
AXEPattern.prototype.repeatMode = function(t) {
    return t && t != this._repeatMode && (this._repeatMode = t, this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this._repeatMode
},
AXEPattern.prototype.clone = function() {
    return new AXEPattern(this.patternImg(), this.repeatMode())
},
define("pattern", ["event", "event_target"],
function() {});
var AXEShape = function(t) {
    if (arguments.length > 0 && t instanceof AXEShape) return t
};
AXEShape.prototype = new AXEView,
AXEShape.prototype.constructor = AXEShape,
AXEShape.prototype.className = "AXEShape",
AXEShape.prototype.dealloc = function() {
    null != this._lineDash && (this._lineDash = null),
    null != this._path && (this._path.dealloc(), this._path = null),
    null != this._strokeColor && (this._strokeColor.dealloc(), this._strokeColor = null),
    null != this._fillColor && (this._fillColor.dealloc(), this._fillColor = null),
    null != this._gradientFillColor && (this._gradientFillColor.dealloc(), this._gradientFillColor = null),
    null != this._gradientStrokeColor && (this._gradientStrokeColor.dealloc(), this._gradientStrokeColor = null),
    AXEView.prototype.dealloc.call(this)
},
AXEShape.prototype.clone = function() {
    var t = new AXEShape;
    return this.copyProperties(t),
    t
},
AXEShape.prototype.copyProperties = function(t) {
    AXEView.prototype.copyProperties.call(this, t),
    AXEShape(t).strokeSize(this.strokeSize()),
    null != this.strokeColor() && AXEShape(t).strokeColor(this.strokeColor().clone()),
    null != this.fillColor() && AXEShape(t).fillColor(this.fillColor().clone()),
    null != this.path() && (AXEShape(t)._path = this.path().clone()),
    null != this._lineDash && AXEShape(t).lineDash(this._lineDash.slice()),
    null != this._gradientFillColor && (AXEShape(t)._gradientFillColor = this._gradientFillColor),
    null != this._gradientStrokeColor && (AXEShape(t)._gradientStrokeColor = this._gradientStrokeColor),
    this._fillPattern && (AXEShape(t)._fillPattern = this._fillPattern.clone()),
    this._strokePattern && (AXEShape(_strokePattern)._strokePattern = this._strokePattern.clone())
},
AXEShape.prototype.updatePropsFromXML = function(t) {
    AXEView.prototype.updatePropsFromXML.call(this, t);
    var e = t.children("fill-pattern");
    if (e.length > 0) {
        var i = AXEAssetsLoader.asset(e.attr("src")),
        n = e.attr("repeat-mode");
        this.createFillPattern(i, n)
    }
    var o = t.children("stroke-pattern");
    if (o.length > 0) {
        var r = AXEAssetsLoader.asset(o.attr("src")),
        s = o.attr("repeat-mode");
        this.createStrokePattern(r, s)
    }
    if (t.is("[dash]")) {
        for (var a = t.attr("dash").split(","), l = 0; l < a.length; l++) a[l] = parseFloat(a[l]);
        this.lineDash(a)
    }
    if (t.is("[stroke-size]") && this.strokeSize(parseFloat(t.attr("stroke-size"))), t.is("[stroke-color]") && this.strokeColor(AXEColor.colorWithString(t.attr("stroke-color"))), t.is("[fill-color]") && this.fillColor(AXEColor.colorWithString(t.attr("fill-color"))), t.children("fill-color").length > 0) {
        var h = t.children("fill-color"),
        c = h.attr("type");
        c == AXEGradientColor.LINEAR ? this.gradientFillColor(AXELinearGradientColor.colorWithXML(h)) : c == AXEGradientColor.RADIAL && this.gradientFillColor(AXERadialGradientColor.colorWithXML(h))
    }
    if (t.children("stroke-color").length > 0) {
        var p = t.children("stroke-color"),
        u = p.attr("type");
        u == AXEGradientColor.LINEAR ? this.gradientStrokeColor(AXELinearGradientColor.colorWithXML(p)) : u == AXEGradientColor.RADIAL && this.gradientStrokeColor(AXERadialGradientColor.colorWithXML(p))
    }
    var d = t.children("path");
    if (d.length > 0) {
        var E = $.trim(d.text());
        this.path().clearCommands(),
        this.path().addCommand(E)
    }
},
AXEShape.prototype._strokeSize = 1,
AXEShape.prototype.strokeSize = function(t) {
    return 0 == isNaN(t) && this._strokeSize != t && (this._strokeSize = t, this.needToRender(!0)),
    this._strokeSize
},
AXEShape.prototype._strokeColor = null,
AXEShape.prototype.strokeColor = function(t) {
    return arguments.length > 0 && this._strokeColor != t && (this._strokeColor = t, this.gradientStrokeColor(null), this.needToRender(!0)),
    this._strokeColor
},
AXEShape.prototype._fillColor = null,
AXEShape.prototype.fillColor = function(t) {
    return arguments.length > 0 && this._fillColor != t && (this._fillColor = t, this.gradientFillColor(null), this.needToRender(!0)),
    this._fillColor
},
AXEShape.prototype._gradientStrokeColor = null,
AXEShape.prototype.gradientStrokeColor = function(t) {
    return arguments.length > 0 && t != this._gradientStrokeColor && (this._gradientStrokeColor = t, this.strokeColor(null), this.needToRender(!0)),
    this._gradientFillColor
},
AXEShape.prototype._gradientFillColor = null,
AXEShape.prototype.gradientFillColor = function(t) {
    return arguments.length > 0 && t != this._gradientFillColor && (this._gradientFillColor = t, this.fillColor(null), this.needToRender(!0)),
    this._gradientFillColor
},
AXEShape.prototype._lineDash = null,
AXEShape.prototype.lineDash = function(t) {
    return arguments.length > 0 && t.length > 0 && (this._lineDash = t.slice(), this.needToRender(!0)),
    this._lineDash
},
AXEShape.prototype._path = null,
AXEShape.prototype.path = function() {
    return null == this._path && (this._path = new AXEPath, this._path.addListener(AXEEvent.CHANGE, this, this.onPathChanged)),
    this._path
},
AXEShape.prototype._isMask = !1,
AXEShape.prototype.isMask = function(t) {
    return "boolean" == typeof t && t != this._isMask && (this._isMask = t, this.needToRender(!0)),
    this._isMask
},
AXEShape.prototype.onPathChanged = function() {
    this.needToRender(!0)
},
AXEShape.prototype._strokePattern = null,
AXEShape.prototype.strokePattern = function() {
    return this._strokePattern
},
AXEShape.prototype.createStrokePattern = function(t, e) {
    this.clearStrokePattern();
    var i = null;
    i = "string" == typeof t ? AXEAssetsLoader.asset(t) : t,
    this._strokePattern = new AXEPattern(i, e),
    this.needToRender(!0)
},
AXEShape.prototype.clearStrokePattern = function() {
    this._strokePattern && (this._strokePattern.dealloc(), this._strokePattern = null, this.needToRender(!0))
},
AXEShape.prototype._fillPattern = null,
AXEShape.prototype.fillPattern = function() {
    return this._fillPattern
},
AXEShape.prototype.createFillPattern = function(t, e) {
    this.clearFillPattern();
    var i = null;
    i = "string" == typeof t ? AXEAssetsLoader.asset(t) : t,
    this._fillPattern = new AXEPattern(i, e),
    this.needToRender(!0)
},
AXEShape.prototype.clearFillPattern = function() {
    this._fillPattern && (this._fillPattern.dealloc(), this._fillPattern = null, this.needToRender(!0))
},
define("shape", ["view", "color", "path", "pattern", "assets_loader"],
function() {});
var AXETextAlign = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
};
define("text_align",
function() {});
var AXETextVerticalAlign = {
    TOP: "top",
    MIDDLE: "middle",
    BOTTOM: "bottom",
    ALPHABETIC: "alphabetic",
    IDEOGRAPHIC: "ideographic",
    HANGING: "hanging"
};
define("text_v_align",
function() {});
var AXEText = function(t) {
    if (arguments.length > 0 && t instanceof AXEText) return t
};
AXEText.prototype = new AXEView,
AXEText.prototype.constructor = AXEText,
AXEText.prototype.className = "AXEText",
AXEText.prototype.renderHTML = function() {
    var t = null;
    this.wordWrap() ? t = $("<textarea></textarea>") : (t = $("<input/>")).attr("type", "text"),
    t.val(this.text()),
    t.on("focusin",
    function() {
        $(this).val("")
    }),
    this.$html(t),
    this.needToRender(!0)
},
AXEText.prototype.dealloc = function() {
    AXEView.prototype.dealloc.call(this),
    null != this._strokeColor && (this._strokeColor.dealloc(), this._strokeColor = null),
    null != this._color && (this._color.dealloc(), this._color = null),
    null != this._gradientColor && (this._gradientColor.dealloc(), this._gradientColor = null)
},
AXEText.prototype.clone = function() {
    var t = new AXEText;
    return this.copyProperties(t),
    t
},
AXEText.prototype.copyProperties = function(t) {
    AXEView.prototype.copyProperties.call(this, t),
    null != this.color() && AXEText(t).color(this.color().clone()),
    null != this.font() && AXEText(t).font(this.font()),
    AXEText(t).lineHeight(this.lineHeight()),
    AXEText(t).wordWrap(this.wordWrap()),
    AXEText(t).size(this.size()),
    AXEText(t).style(this.style()),
    AXEText(t).textAlign(this.textAlign()),
    AXEText(t).textVAlign(this.textVAlign()),
    AXEText(t).text(this.text()),
    AXEText(t).mergeLastLine(this.mergeLastLine()),
    AXEText(t).underline(this.underline()),
    AXEText(t).autoSize(this.autoSize()),
    AXEText(t).shrink(this.shrink()),
    AXEText(t).fillRepeat(this.fillRepeat()),
    AXEText(t)._initText = this._initText,
    null != this._gradientColor && AXEText(t).gradientColor(this.gradientColor().clone()),
    null != this.strokeColor() && AXEText(t).strokeColor(this.strokeColor().clone()),
    AXEText(t).strokeSize(this.strokeSize()),
    AXEText(t).maxLength(this.maxLength()),
    AXEText(t).editable(this.editable())
},
AXEText.prototype.updatePropsFromXML = function(t) {
    if (AXEView.prototype.updatePropsFromXML.call(this, t), t.is("[auto-size]") ? this.autoSize("true" == t.attr("auto-size").toLowerCase()) : this.autoSize(!1), t.is("[shrink]") ? this.shrink("true" == t.attr("shrink").toLowerCase()) : this.shrink(!1), t.is("[merge-last-line]") && this.mergeLastLine(parseInt(t.attr("merge-last-line"), 10)), t.is("[color]") && this.color(AXEColor.colorWithString(t.attr("color"))), t.is("[fill-repeat]") ? this.fillRepeat("true" == t.attr("fill-repeat").toLowerCase()) : this.fillRepeat(!1), t.children("color").length > 0) {
        var e = t.children("color"),
        i = e.attr("type");
        i == AXEGradientColor.LINEAR ? this.gradientColor(AXELinearGradientColor.colorWithXML(e)) : i == AXEGradientColor.RADIAL && this.gradientColor(AXERadialGradientColor.colorWithXML(e))
    }
    t.is("[font]") && this.font(t.attr("font")),
    t.is("[size]") && this.size(parseFloat(t.attr("size"))),
    t.is("[style]") && this.style(t.attr("style")),
    t.is("[text-align]") && this.textAlign(t.attr("text-align")),
    t.is("[text-v-align]") && this.textVAlign(t.attr("text-v-align")),
    t.is("[word-wrap]") && this.wordWrap("true" == t.attr("word-wrap")),
    t.is("[line-height]") && this.lineHeight(parseFloat(t.attr("line-height"))),
    t.is("[underline]") && this.underline("true" == t.attr("underline")),
    t.is("[stroke-size]") ? this.strokeSize(parseFloat(t.attr("stroke-size"))) : this.strokeSize(0),
    t.is("[stroke-color]") ? this.strokeColor(AXEColor.colorWithString(t.attr("stroke-color"))) : this.strokeColor(null);
    var n = $.trim(t.text());
    this.text(n),
    this._initText = n,
    t.is("[max-length]") ? this.maxLength(parseInt(t.attr("max-length"), 10)) : this.maxLength(0),
    t.is("[editable]") ? this.editable("true" == t.attr("editable").toLowerCase()) : this.editable(!1)
},
AXEText.prototype.update = function(t, e) {
    AXEView.prototype.update.call(this, t, e);
    var i = this.$html();
    if (i) {
        var n = $.trim(i.val());
        this.text() != n && (this.text(n), this.triggerEvent(new AXEEvent(AXEEvent.CHANGE)))
    }
},
AXEText.prototype._initText = null,
AXEText.prototype.initText = function() {
    return this._initText
},
AXEText.prototype._underline = !1,
AXEText.prototype.underline = function(t) {
    return "boolean" == typeof t && t != this._underline && (this._underline = t, this.needToRender(!0)),
    this._underline
},
AXEText.prototype._mergeLastLine = 0,
AXEText.prototype.mergeLastLine = function(t) {
    return 0 == isNaN(t) && this._mergeLastLine != Math.abs(t) && (this._mergeLastLine = Math.abs(t), this.needToRender(!0)),
    this._mergeLastLine
},
AXEText.prototype._lineHeight = 0,
AXEText.prototype.lineHeight = function(t) {
    return arguments.length > 0 && t != this._lineHeight && (this._lineHeight = t, this.needToRender(!0)),
    this._lineHeight
},
AXEText.prototype._wordWrap = !1,
AXEText.prototype.wordWrap = function(t) {
    return arguments.length > 0 && t != this._wordWrap && (this._wordWrap = t, this.needToRender(!0)),
    this._wordWrap
},
AXEText.prototype._fillRepeat = !1,
AXEText.prototype.fillRepeat = function(t) {
    return "boolean" == typeof t && t != this._fillRepeat && (this._fillRepeat = t, this.needToRender(!0)),
    this._fillRepeat
},
AXEText.prototype._gradientColor = null,
AXEText.prototype.gradientColor = function(t) {
    return arguments.length > 0 && t != this._gradientColor && (this._gradientColor = t, this.color(null), this.needToRender(!0)),
    this._gradientColor
},
AXEText.prototype._color = null,
AXEText.prototype.color = function(t) {
    return arguments.length > 0 && t != this._color && (null != this._color && (this._color.dealloc(), this._color = null), this._color = t, this.gradientColor(null), this.needToRender(!0)),
    this._color
},
AXEText.prototype._strokeSize = 0,
AXEText.prototype.strokeSize = function(t) {
    return 0 == isNaN(t) && t != this._strokeSize && (this._strokeSize = t, this.needToRender(!0)),
    this._strokeSize
},
AXEText.prototype._strokeColor = null,
AXEText.prototype.strokeColor = function(t) {
    return arguments.length > 0 && t != this._strokeColor && (null != this._strokeColor && (this._strokeColor.dealloc(), this._strokeColor = null), this._strokeColor = t, this.needToRender(!0)),
    this._strokeColor
},
AXEText.prototype._font = "sans-serif",
AXEText.prototype.font = function(t) {
    return arguments.length > 0 && "string" == typeof t && this._font != t && (this._font = t, this.needToRender(!0)),
    this._font
},
AXEText.prototype._size = 12,
AXEText.prototype.size = function(t) {
    return arguments.length > 0 && !1 === isNaN(parseFloat(t)) && parseFloat(t) != this._size && (this._size = parseFloat(t), this.needToRender(!0)),
    this._size
},
AXEText.prototype._style = null,
AXEText.prototype.style = function(t) {
    return arguments.length > 0 && "string" == typeof t && t != this._style && (this._style = t, this.needToRender(!0)),
    this._style
},
AXEText.prototype.textStyle = function() {
    var t = [];
    return null != this._style && t.push(this._style),
    null != this._size && t.push(this._size + "px"),
    null != this._font && t.push(this._font),
    t.join(" ")
},
AXEText.prototype._textVAlign = AXETextVerticalAlign.ALPHABETIC,
AXEText.prototype.textVAlign = function(t) {
    return arguments.length > 0 && "string" == typeof t && this._textVAlign != t && (this._textVAlign = t, this.needToRender(!0)),
    this._textVAlign
},
AXEText.prototype._textAlign = AXETextAlign.LEFT,
AXEText.prototype.textAlign = function(t) {
    return arguments.length > 0 && "string" == typeof t && t != this._textAlign && (this._textAlign = t, this.needToRender(!0)),
    this._textAlign
},
AXEText.prototype._text = "",
AXEText.prototype.text = function(t) {
    return arguments.length > 0 && this._text != String(t) && (this._text = String(t), this.needToRender(!0)),
    this._text
},
AXEText.prototype._autoSize = !1,
AXEText.prototype.autoSize = function(t) {
    return "boolean" == typeof t && t != this._autoSize && (this._autoSize = t, this.needToRender(!0)),
    this._autoSize
},
AXEText.prototype._maxLength = 0,
AXEText.prototype.maxLength = function(t) {
    return 0 == isNaN(t) && t != this._maxLength && (this._maxLength = t),
    this._maxLength
},
AXEText.prototype._editable = !1,
AXEText.prototype.editable = function(t) {
    if ("boolean" == typeof t && t != this._editable) if (this._editable = t, this._editable) this.renderHTML();
    else {
        var e = this.$html();
        e && e.off(),
        this.$html(null)
    }
    return this._editable
},
AXEText.prototype._shrink = !1,
AXEText.prototype.shrink = function(t) {
    return "boolean" == typeof t && t != this._shrink && (this._shrink = t, this.needToRender(!0)),
    this._shrink
},
AXEText.prototype.computeTextWidth = function() {
    var t = $("<div></div>");
    t.css("white-space", "nowrap"),
    t.css("display", "inline-block"),
    t.css("line-height", this.height() + "px"),
    t.css("font-family", this.font() + "px"),
    t.css("font-size", this.size() + "px"),
    t.css("font-style", this.style()),
    t.css("width", "auto"),
    t.text(this.text()),
    t.css("opacity", 0),
    $("body").append(t);
    var e = t.width();
    return t.remove(),
    e
},
AXEText.prototype.computeTextHeight = function() {
    var t = $("<div></div>");
    t.css("line-height", this.lineHeight() + "px"),
    t.css("font-family", this.font() + "px"),
    t.css("font-size", this.size() + "px"),
    t.css("font-style", this.style()),
    t.css("height", "auto"),
    t.width(this.width()),
    t.html(this.text()),
    t.css("opacity", 0),
    $("body").append(t);
    var e = t.height();
    return t.remove(),
    e
},
AXEText.prototype.updateTextProperty = function() {
    var t = this.$html();
    t && (t.attr("maxlength", this.maxLength()), t.css("color", this.color().to24BitString()), t.css("font-size", this.size() + "px"), t.css("font-family", this.font()), t.css("text-align", this.textAlign()), this.lineHeight() > 0 ? t.css("line-height", this.lineHeight() + "px") : this.height() > 0 && t.css("line-height", this.height() + "px"), null != this.style() && this.style().length > 0 && (/bold/i.test(this.style()) ? t.css("font-weight", "bold") : t.css("font-weight", "normal"), /itlic/i.test(this.style()) ? t.css("font-style", "italic") : t.css("font-style", "normal")), this.underline() ? t.css("text-decoration", "underline") : t.css("text-decoration", "none"))
},
define("text", ["view", "color", "text_align", "text_v_align"],
function() {});
var AXEButtonState = {
    NORMAL_STATE: 0,
    DOWN_STATE: 1,
    UP_STATE: 2
};
define("button_state",
function() {});
var AXESoundManager = function() {
    AXERunLoop.addToRunLoop(this)
};
AXESoundManager.initSounds = function(t) {
    var e = AXESoundManager.manager();
    e.mute(!0);
    for (var i = 0; i < t.length; i++) e.addSound(t[i].path, t[i].loop);
    $(document).one("WeixinJSBridgeReady",
    function() {
        e.prepareSounds()
    }),
    $(window).one("click touchend",
    function() {
        e.prepareSounds()
    })
},
AXESoundManager._manager = null,
AXESoundManager.manager = function() {
    return AXESoundManager._manager || (AXESoundManager._manager = new AXESoundManager),
    AXESoundManager._manager
},
AXESoundManager.prototype = new AXEEventTarget,
AXESoundManager.prototype.constructor = AXESoundManager,
AXESoundManager.prototype._prepared = !1,
AXESoundManager.prototype.prepared = function() {
    return this._prepared
},
AXESoundManager.prototype.prepareSounds = function() {
    if (!this.prepared()) {
        var t = this.sounds();
        for (var e in t) {
            var i = t[e];
            try {
                i.play(),
                i.pause()
            } catch(t) {}
        }
        AXESoundManager.manager().mute(!1),
        this._prepared = !0
    }
},
AXESoundManager.prototype.onSoundPlayToEnd = function(t) {
    var e = t.currentTarget,
    i = null;
    for (var n in this.sounds()) if (this.sounds()[n] == e) {
        i = n;
        break
    }
    e.loop() || this.pauseSound(i)
},
AXESoundManager.prototype._sounds = null,
AXESoundManager.prototype.sounds = function() {
    return this._sounds || (this._sounds = {}),
    this._sounds
},
AXESoundManager.prototype._playingSounds = null,
AXESoundManager.prototype.playingSounds = function() {
    return this._playingSounds || (this._playingSounds = {}),
    this._playingSounds
},
AXESoundManager.prototype.sound = function(t) {
    return this.sounds()[t]
},
AXESoundManager.prototype.addSound = function(t, e) {
    if (!this.sounds().hasOwnProperty(t)) {
        var i = new AXEAudioController(t);
        "boolean" == typeof e ? i.loop(e) : i.loop(!1),
        i.addListener(AXEEvent.END, this, this.onSoundPlayToEnd),
        this.sounds()[t] = i
    }
},
AXESoundManager.prototype.playSound = function(t, e) {
    if (!this.playingSounds().hasOwnProperty(t)) {
        var i = this.sounds()[t];
        i && (this.mute() ? i.loop() && (this.playingSounds()[t] = i) : (i.play(e), this.playingSounds()[t] = i))
    }
},
AXESoundManager.prototype.pauseSound = function(t) {
    if (t) this.sounds().hasOwnProperty(t) && (this.sounds()[t].pause(), delete this.playingSounds()[t]);
    else for (var e in this.playingSounds()) this.playingSounds()[e].pause(),
    delete this.playingSounds()[e]
},
AXESoundManager.prototype._mute = !1,
AXESoundManager.prototype.mute = function(t) {
    if ("boolean" == typeof t && this._mute != t) {
        for (var e in this._mute = t,
        this.playingSounds()) if (this.playingSounds().hasOwnProperty(e)) {
            var i = this.playingSounds()[e];
            this._mute ? (i.pause(), !1 === i.loop() && delete this.playingSounds()[e]) : i.loop() ? i.play() : i.play(0)
        }
        this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))
    }
    return this._mute
},
AXESoundManager.prototype.onActivate = function() {
    if (!this.mute()) {
        var t = this.playingSounds();
        for (var e in t) t[e],
        t[e].play()
    }
},
AXESoundManager.prototype.onDeactivate = function() {
    if (!this.mute()) {
        var t = this.playingSounds();
        for (var e in t) t[e],
        t[e].pause()
    }
},
define("sound_manager", ["audio_ctrl", "run_loop", "assets_loader", "event_target", "event", "loader_config"],
function() {});
var AXEButton = function(t) {
    if (arguments.length > 0 && t instanceof AXEButton) return t
};
AXEButton.prototype = new AXEViewContainer,
AXEButton.prototype.constructor = AXEButton,
AXEButton.prototype.normalStateView = null,
AXEButton.prototype.clickStateView = null,
AXEButton.prototype.disableStateView = null,
AXEButton.prototype.clone = function() {
    var t = new AXEButton;
    return this.copyProperties(t),
    t
},
AXEButton.prototype.copyProperties = function(t) {
    AXEViewContainer.prototype.copyProperties.call(this, t),
    AXEButton(t).initButton(),
    AXEButton(t).switchMode(this.switchMode()),
    AXEButton(t).clickSound(this.clickSound()),
    AXEButton(t).resizeable(this.resizeable())
},
AXEButton.prototype.updatePropsFromXML = function(t) {
    AXEViewContainer.prototype.updatePropsFromXML.call(this, t),
    this.initButton(),
    t.is("[switch-mode]") && this.switchMode("true" == t.attr("switch-mode")),
    t.is("[click-sound]") ? this.clickSound(t.attr("click-sound")) : this.clickSound(null),
    t.is("[resizable]") ? this.resizeable("true" == t.attr("resizable").toLowerCase()) : this.resizeable(!1)
},
AXEButton.prototype.onAddToStage = function() {
    AXEViewContainer.prototype.onAddToStage.call(this),
    0 == this.switchMode() && this.buttonState(AXEButtonState.NORMAL_STATE)
},
AXEButton.prototype.initButton = function() {
    this.normalStateView = this.subViewByName("normal"),
    this.clickStateView = this.subViewByName("click"),
    this.disableStateView = this.subViewByName("disable"),
    this.updateButtonView(),
    this.addListener(AXETouchEvent.CLICK, this, this.onButtonClick),
    AXEEnv.os.isTouchDevice ? (this.addListener(AXETouchEvent.TOUCH_START, this, this.onButtonTouchStart), this.addListener(AXETouchEvent.TOUCH_END, this, this.onButtonTouchEnd)) : (this.addListener(AXETouchEvent.ROLL_OVER, this, this.onButtonTouchStart), this.addListener(AXETouchEvent.ROLL_OUT, this, this.onButtonTouchEnd))
},
AXEButton.prototype.onButtonClick = function() {
    this.switchMode() && (this.buttonState() == AXEButtonState.NORMAL_STATE ? this.buttonState(AXEButtonState.DOWN_STATE) : this.buttonState(AXEButtonState.NORMAL_STATE), this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))),
    this.clickSound() && AXESoundManager.manager().playSound(this.clickSound(), 0)
},
AXEButton.prototype.onButtonTouchStart = function() { ! 1 === this.switchMode() && this.buttonState(AXEButtonState.DOWN_STATE)
},
AXEButton.prototype.onButtonTouchEnd = function() {
    this.switchMode() || this.buttonState(AXEButtonState.NORMAL_STATE)
},
AXEButton.prototype._clickSound = null,
AXEButton.prototype.clickSound = function(t) {
    return arguments.length > 0 && t != this._clickSound && (this._clickSound = t),
    this._clickSound
},
AXEButton.prototype._switchMode = !1,
AXEButton.prototype.switchMode = function(t) {
    return "boolean" == typeof t && t != this._switchMode && (this._switchMode = t, this.buttonState(AXEButtonState.NORMAL_STATE)),
    this._switchMode
},
AXEButton.prototype._buttonState = AXEButtonState.NORMAL_STATE,
AXEButton.prototype.buttonState = function(t) {
    return ! 1 === isNaN(t) && (this._buttonState = t, this.updateButtonView()),
    this._buttonState
},
AXEButton.prototype.enabled = function(t) {
    var e = AXEViewContainer.prototype.enabled.call(this, t);
    return "boolean" == typeof t && this.updateButtonView(),
    e
},
AXEButton.prototype.resetEvents = function() {
    AXEViewContainer.prototype.resetEvents.call(this),
    0 == this.switchMode() && this.buttonState(AXEButtonState.NORMAL_STATE)
},
AXEButton.prototype._resizeable = !1,
AXEButton.prototype.resizeable = function(t) {
    return "boolean" == typeof t && t != this._resizeable && (this._resizeable = t, this.updateButtonView()),
    this._resizeable
},
AXEButton.prototype.updateButtonView = function() {
    var t = null;
    this.enabled() || null == this.disableStateView ? (this.disableStateView && this.disableStateView.visible(!1), null != this.normalStateView && (this.normalStateView.visible(this.buttonState() == AXEButtonState.NORMAL_STATE), this.normalStateView.visible() && (t = this.normalStateView.height())), null != this.clickStateView && (this.clickStateView.visible(this.buttonState() == AXEButtonState.DOWN_STATE), this.clickStateView.visible() && (t = this.clickStateView.height()))) : (this.disableStateView.visible(!0), t = this.disableStateView.height(), this.normalStateView && this.normalStateView.visible(!1), this.clickStateView && this.clickStateView.visible(!1)),
    this.resizeable() && this.height(t)
},
define("button", ["env", "view_container", "button_state", "event_target", "touch_event", "event", "sound_manager"],
function() {});
var AXEScrollBarStyle = {
    AUTO: 0,
    HIDDEN: 1,
    VISIBLE: 2
};
define("scroll_bar_style",
function() {});
var AXEScrollBar = function(t) {
    if ("boolean" == typeof t) {
        this._isVertical = t,
        this.buildView()
    }
};
AXEScrollBar.prototype = new AXEViewContainer,
AXEScrollBar.prototype.constructor = AXEScrollBar,
AXEScrollBar.prototype.BAR_SIZE = 4,
AXEScrollBar.prototype.BAR_MARGIN = 2,
AXEScrollBar.prototype.BAR_COLOR = AXEColor.colorWithString("#00000000"),
AXEScrollBar.prototype.MIN_BAR_SIZE = 10,
AXEScrollBar.prototype.barView = null,
AXEScrollBar.prototype.buildView = function() {
    this.barView = new AXEView,
    this.barView.bgColor(this.BAR_COLOR),
    this.barView.cornerRadius(this.BAR_SIZE / 2),
    this.barView.clip(!0),
    this.isVertical() ? (this.width(this.BAR_SIZE + 2 * this.BAR_MARGIN), this.barView.width(this.BAR_SIZE), this.barView.x(this.BAR_MARGIN)) : (this.height(this.BAR_SIZE + 2 * this.BAR_MARGIN), this.barView.height(this.BAR_SIZE), this.barView.y(this.BAR_MARGIN)),
    this.addSubView(this.barView)
},
AXEScrollBar.prototype.renderSlider = function() {
    var t, e, i, n;
    if (this.isVertical()) {
        this.height(this.scrollView().height()),
        this.x(this.scrollView().width() - this.width()),
        t = this.scrollView().contentSize().y,
        e = this.scrollView().height(),
        i = this.height() - 2 * this.BAR_MARGIN,
        n = Math.max(i * (e / t), this.MIN_BAR_SIZE);
        var o = this.scrollView().offset().y;
        o = Math.max(0, Math.min(o, this.scrollView().contentSize().y - this.scrollView().height())),
        this.barView.height(n),
        this.barView.y((this.height() - 2 * this.BAR_MARGIN) * (o / this.scrollView().contentSize().y))
    } else {
        this.width(this.scrollView().width()),
        this.y(this.scrollView().height() - this.height()),
        t = this.scrollView().contentSize().x,
        e = this.scrollView().width(),
        i = this.width() - 2 * this.BAR_MARGIN,
        n = Math.max(i * (e / t), this.MIN_BAR_SIZE);
        var r = this.scrollView().offset().x;
        r = Math.max(0, Math.min(r, this.scrollView().contentSize().x - this.scrollView().width())),
        this.barView.width(n),
        this.barView.x((this.width() - 2 * this.BAR_MARGIN) * (r / this.scrollView().contentSize().x))
    }
},
AXEScrollBar.prototype.barNeedRender = !1,
AXEScrollBar.prototype.update = function(t, e) {
    AXEViewContainer.prototype.update.call(this, t, e),
    this.barNeedRender && null != this.scrollView() && (this.renderSlider(), this.barNeedRender = !1)
},
AXEScrollBar.prototype._isVertical = !1,
AXEScrollBar.prototype.isVertical = function(t) {
    return "boolean" == typeof t && t != this._isVertical && (this._isVertical = t, this.barNeedRender = !0),
    this._isVertical
},
AXEScrollBar.prototype._scrollView = null,
AXEScrollBar.prototype.scrollView = function(t) {
    return arguments.length > 0 && t != this._scrollView && (this._scrollView = t, this.barNeedRender = !0),
    this._scrollView
},
AXEScrollBar.prototype.updateScroll = function() {
    this.barNeedRender = !0
},
AXEScrollBar.prototype.hidden = !1,
AXEScrollBar.prototype.show = function() {
    this.hidden && (this.hidden = !1, this.stopAnimation(), this.visible(!0), this.alpha(1))
},
AXEScrollBar.prototype.hide = function() {
    var t = this;
    0 == t.hidden && (t.hidden = !0, t.animate(.4, {
        alpha: 0
    },
    AXEEasing.Cubic.easeOut, null,
    function() {
        t.visible(!1)
    }))
},
define("scroll_bar", ["view_container", "shape", "color", "circle", "rect", "easing"],
function() {});
var AXEScrollView = function(t) {
    if (arguments.length > 0 && t instanceof AXEScrollView) return t
}; !
function() {
    var t = function() {};
    t.prototype.scrollBar = function(t, e) {
        return null
    },
    t.prototype.onScrollViewStartScroll = function(t) {},
    t.prototype.onScrollViewScrolling = function(t) {},
    t.prototype.onScrollViewEndScroll = function(t) {},
    t.prototype.onScrollViewStartEasing = function(t) {},
    AXEScrollView.prototype = new AXEViewContainer,
    AXEScrollView.prototype.constructor = AXEScrollView,
    AXEScrollView.prototype.scrolling = !1,
    AXEScrollView.prototype.delegate = null,
    AXEScrollView.prototype.dealloc = function() {
        null != this._contentView && (this._contentView.dealloc(), this._contentView = null),
        null != this._hScrollBar && (this._hScrollBar.remove(), this._hScrollBar.dealloc(), this._hScrollBar = null),
        null != this._vScrollBar && (this._vScrollBar.remove(), this._vScrollBar.dealloc(), this._vScrollBar = null),
        AXEViewContainer.prototype.dealloc.call(this)
    },
    AXEScrollView.prototype.clone = function() {
        var t = new AXEScrollView;
        return this.copyProperties(t),
        t
    },
    AXEScrollView.prototype.copyProperties = function(t) {
        AXEViewContainer.prototype.copyProperties.call(this, t),
        AXEScrollView(t).empty(),
        null != this._contentView && (AXEScrollView(t)._contentView = this._contentView.clone(), AXEScrollView(t).addSubView(this._contentView)),
        null != this._hScrollBar && (AXEScrollView(t)._hScrollBar = this._hScrollBar.clone(), AXEScrollView(t)._hScrollBar.scrollView = t, AXEScrollView(t).addSubView(this._hScrollBar)),
        null != this._vScrollBar && (AXEScrollView(t)._vScrollBar = this._vScrollBar.clone(), AXEScrollView(t)._vScrollBar.scrollView = t, AXEScrollView(t).addSubView(this._vScrollBar)),
        AXEScrollView(t).loop(this.loop()),
        AXEScrollView(t).offset(this.offset().clone()),
        AXEScrollView(t).contentSize(this.contentSize().clone()),
        AXEScrollView(t).paging(this._paging),
        AXEScrollView(t).minMove(this._minMove),
        AXEScrollView(t).pageSize(this._pageSize),
        AXEScrollView(t).bouncing(this._bouncing),
        AXEScrollView(t).lockHorizontal(this._lockHorizontal),
        AXEScrollView(t).lockVertical(this._lockVertical),
        AXEScrollView(t).scrollBarStyle(this._scrollBarStyle),
        AXEScrollView(t).easing(this._easing),
        AXEScrollView(t).scrollable(this._scrollable),
        AXEScrollView(t).resizeable(this._resizeable),
        AXEScrollView(t).maxScale(this._maxScale),
        AXEScrollView(t).minScale(this._minScale),
        AXEScrollView(t).reloadData()
    },
    AXEScrollView.prototype.updatePropsFromXML = function(t) {
        AXEViewContainer.prototype.updatePropsFromXML.call(this, t),
        t.is("[show-all]") ? this.clip("false" == t.attr("show-all").toLowerCase()) : this.clip(!0);
        var e = t.children("content");
        if (e.length > 0 && this.contentView().updatePropsFromXML(e), t.is("[resizeable]") ? this.resizeable("true" == t.attr("resizeable").toLowerCase()) : this.resizeable(!1), t.is("[max-scale]") ? this.maxScale(parseFloat(t.attr("max-scale"))) : this.maxScale(1), t.is("[min-scale]") ? this.minScale(parseFloat(t.attr("min-scale"))) : this.minScale(1), t.is("[loop]") ? this.loop("true" == t.attr("loop").toLowerCase()) : this.loop(!1), t.is("[scale]") ? this.currentScale(parseFloat(t.attr("scale"))) : this.currentScale(1), t.is("[scrollable]") ? this.scrollable("true" == t.attr("scrollable").toLowerCase()) : this.scrollable(!1), t.is("[offset]")) {
            var i = t.attr("offset").split(","),
            n = new AXEVec2(parseFloat(i[0]), parseFloat(i[1]));
            this.offset(n)
        }
        if (t.is("[content-size]")) {
            var o = t.attr("content-size").split(","),
            r = new AXEVec2(parseFloat(o[0]), parseFloat(o[1]));
            this.contentSize(r)
        }
        t.is("[bouncing]") && this.bouncing("true" == t.attr("bouncing")),
        t.is("[paging]") && this.paging("true" == t.attr("paging")),
        t.is("[min-move]") ? this.minMove(parseFloat(t.attr("min-move"))) : this.minMove(0),
        t.is("[page-size]") && this.pageSize(parseFloat(t.attr("page-size"))),
        t.is("[lock-h]") && this.lockHorizontal("true" == t.attr("lock-h")),
        t.is("[lock-v]") && this.lockVertical("true" == t.attr("lock-v")),
        t.is("[scroll-bar-style]") && this.scrollBarStyle(AXEScrollBarStyle[t.attr("scroll-bar-style").toUpperCase()]),
        this.reloadData()
    },
    AXEScrollView.prototype.lastOffset = null,
    AXEScrollView.prototype.currentSpeed = null,
    AXEScrollView.prototype.easingInitSpeed = null,
    AXEScrollView.prototype.easingDuration = null,
    AXEScrollView.prototype.easingAcc = null,
    AXEScrollView.prototype.desOffset = null,
    AXEScrollView.prototype.beginEasing = !1,
    AXEScrollView.prototype.easingStartTs = 0,
    AXEScrollView.prototype.easingStartOffset = null,
    AXEScrollView.prototype.renderScale = function() {
        var t = this.contentView().matrixTo(this).inversion().transformPoint(this.scaleOrigin()),
        e = new AXEMat3;
        e.a = this.currentScale(),
        e.d = this.currentScale(),
        e.tx = this.scaleOrigin().x - (e.a * t.x + e.c * t.y),
        e.ty = this.scaleOrigin().y - (e.b * t.x + e.d * t.y),
        this.contentView().scaleX(e.a),
        this.contentView().scaleY(e.d);
        var i = new AXEVec2( - 1 * e.tx, -1 * e.ty);
        i.x = Math.max(0, Math.min(i.x, this.maxOffset().x)),
        i.y = Math.max(0, Math.min(i.y, this.maxOffset().y)),
        this.offset(i),
        this.needScale = !1
    },
    AXEScrollView.prototype.update = function(t, e) {
        if (null != this.lastOffset) {
            var i = this.offset().clone();
            0 != this.paging() && 0 != this.lastOffset.equalsTo(i) || (this.currentSpeed = new AXEVec2, this.currentSpeed.x = (i.x - this.lastOffset.x) / e, this.currentSpeed.y = (i.y - this.lastOffset.y) / e)
        }
        if (this.lastOffset = this.offset().clone(), this.beginEasing && (this.easingStartTs = t, this.easingStartOffset = this.offset().clone(), this.beginEasing = !1), null != this.easingInitSpeed) {
            var n = t - this.easingStartTs,
            o = this.offset().clone();
            n < this.easingDuration.x ? o.x = this.easingStartOffset.x + this.easingInitSpeed.x * n + this.easingAcc.x * n * n / 2 : o.x = this.desOffset.x,
            n < this.easingDuration.y ? o.y = this.easingStartOffset.y + this.easingInitSpeed.y * n + this.easingAcc.y * n * n / 2 : o.y = this.desOffset.y,
            this.offset(o),
            n >= this.easingDuration.x && n >= this.easingDuration.y ? this.onViewEndScroll() : null != this.delegate && null != this.delegate.onScrollViewScrolling && this.delegate.onScrollViewScrolling(this)
        }
        this.needScale && this.renderScale(),
        this.needReload && (this.needReload = !1, this.renderView()),
        AXEViewContainer.prototype.update.call(this, t, e)
    },
    AXEScrollView.prototype.width = function(t) {
        return 0 == isNaN(t) && t != this.width() && (AXEViewContainer.prototype.width.call(this, t), this.reloadData()),
        AXEViewContainer.prototype.width.call(this)
    },
    AXEScrollView.prototype.height = function(t) {
        return 0 == isNaN(t) && t != this.height() && (AXEViewContainer.prototype.height.call(this, t), this.reloadData()),
        AXEViewContainer.prototype.height.call(this)
    },
    AXEScrollView.prototype._contentView = null,
    AXEScrollView.prototype.contentView = function() {
        return null == this._contentView && (this._contentView = new AXEViewContainer, this.insertSubViewAt(this._contentView, 0)),
        this._contentView
    },
    AXEScrollView.prototype._offset = null,
    AXEScrollView.prototype.offset = function(t) {
        return Boolean(t) && (null != this._offset && 0 != t.equalsTo(this._offset) || (this._offset = t.clone(), this.reloadData())),
        null == this._offset && (this._offset = new AXEVec2),
        this._offset
    },
    AXEScrollView.prototype._contentSize = null,
    AXEScrollView.prototype.contentSize = function(t) { ! Boolean(t) || 0 != Boolean(this._contentSize) && 0 != t.equalsTo(this._contentSize) || (this._contentSize = t.clone(), this.reloadData()),
        null == this._contentSize && (this._contentSize = new AXEVec2);
        var e = this._contentSize.clone();
        return e.x = e.x * this.currentScale(),
        e.y = e.y * this.currentScale(),
        e
    },
    AXEScrollView.prototype.maxOffset = function() {
        var t = new AXEVec2;
        return t.x = Math.max(0, this.contentSize().x - this.width()),
        t.y = Math.max(0, this.contentSize().y - this.height()),
        t
    },
    AXEScrollView.prototype._bouncing = !0,
    AXEScrollView.prototype.bouncing = function(t) {
        return "boolean" == typeof t && this._bouncing != t && (this._bouncing = t),
        this._bouncing
    },
    AXEScrollView.prototype._easing = !0,
    AXEScrollView.prototype.easing = function(t) {
        return "boolean" == typeof t && t == this._easing && (this._easing = t),
        this._easing
    },
    AXEScrollView.prototype._loop = !1,
    AXEScrollView.prototype.loop = function(t) {
        return "boolean" == typeof t && t != this._loop && (this._loop = t),
        this._loop
    },
    AXEScrollView.prototype._minMove = 0,
    AXEScrollView.prototype.minMove = function(t) {
        return 0 == isNaN(t) && t >= 0 && t != this._minMove && (this._minMove = t),
        this._minMove
    },
    AXEScrollView.prototype._paging = !1,
    AXEScrollView.prototype.paging = function(t) {
        return "boolean" == typeof t && this._paging != t && (this._paging = t),
        this._paging
    },
    AXEScrollView.prototype._pageSize = 0,
    AXEScrollView.prototype.pageSize = function(t) {
        return 0 == isNaN(t) && t != this._pageSize && (this._pageSize = t),
        this._pageSize
    },
    AXEScrollView.prototype._hScrollBar = null,
    AXEScrollView.prototype.hScrollBar = function() {
        return null == this._hScrollBar && (null != this.delegate && null != this.delegate.scrollBar && (this._hScrollBar = this.delegate.scrollBar(this, !1)), null == this._hScrollBar && (this._hScrollBar = new AXEScrollBar(!1), this.addSubView(this._hScrollBar)), this._hScrollBar.scrollView(this)),
        this._hScrollBar
    },
    AXEScrollView.prototype._vScrollBar = null,
    AXEScrollView.prototype.vScrollBar = function() {
        return null == this._vScrollBar && (null != this.delegate && null != this.delegate.scrollBar && (this._vScrollBar = this.delegate.scrollBar(this, !0)), null == this._vScrollBar && (this._vScrollBar = new AXEScrollBar(!0), this.addSubView(this._vScrollBar)), this._vScrollBar.scrollView(this)),
        this._vScrollBar
    },
    AXEScrollView.prototype._lockHorizontal = !1,
    AXEScrollView.prototype.lockHorizontal = function(t) {
        return "boolean" == typeof t && this._lockHorizontal != t && (this._lockHorizontal = t),
        this._lockHorizontal
    },
    AXEScrollView.prototype._lockVertical = !1,
    AXEScrollView.prototype.lockVertical = function(t) {
        return "boolean" == typeof t && this._lockVertical != t && (this._lockVertical = t),
        this._lockVertical
    },
    AXEScrollView.prototype._maxScale = 1,
    AXEScrollView.prototype.maxScale = function(t) {
        return 0 == isNaN(t) && (t = Math.max(1, t)) != this._maxScale && (this._maxScale = t),
        this._maxScale
    },
    AXEScrollView.prototype._minScale = 1,
    AXEScrollView.prototype.minScale = function(t) {
        return 0 == isNaN(t) && (t = Math.min(1, Math.max(0, t))) != this._minScale && (this._minScale = t),
        this._minScale
    },
    AXEScrollView.prototype.needScale = !1,
    AXEScrollView.prototype._scaleOrigin = null,
    AXEScrollView.prototype.scaleOrigin = function(t) {
        return t instanceof AXEVec2 && t != this._scaleOrigin && (this._scaleOrigin = t.clone(), this.needScale = !0),
        this._scaleOrigin
    },
    AXEScrollView.prototype._currentScale = 1,
    AXEScrollView.prototype.currentScale = function(t) {
        return 0 == isNaN(t) && (t = Math.max(this.minScale(), Math.min(this.maxScale(), t))) != this._currentScale && (this._currentScale = t, this.needScale = !0),
        this._currentScale
    },
    AXEScrollView.prototype.lastScalePoints = null,
    AXEScrollView.prototype.onViewResizeStart = function(t) { (this.maxScale() > 1 || this.minScale() < 1) && t.touches.length >= 2 && (this.lastScalePoints = [new AXEVec2(t.touches[0].x, t.touches[0].y), new AXEVec2(t.touches[1].x, t.touches[1].y)], this.addListener(AXETouchEvent.TOUCH_MOVE, this, this.onViewResizing), this.addListener(AXETouchEvent.TOUCH_END, this, this.onViewResizeEnd))
    },
    AXEScrollView.prototype.onViewResizing = function(t) {
        if (t.touches.length > 1) {
            var e = this.lastScalePoints,
            i = [new AXEVec2(t.touches[0].x, t.touches[0].y), new AXEVec2(t.touches[1].x, t.touches[1].y)],
            n = new AXEVec2((i[0].x + i[1].x) / 2, (i[0].y + i[1].y) / 2);
            this.scaleOrigin(n);
            var o = i[0].distance(i[1]) / e[0].distance(e[1]);
            this.currentScale(this.currentScale() * o),
            this.lastScalePoints = i
        }
    },
    AXEScrollView.prototype.onViewResizeEnd = function() {
        this.removeListener(AXETouchEvent.TOUCH_MOVE, this, this.onViewResizing),
        this.removeListener(AXETouchEvent.TOUCH_END, this, this.onViewResizeEnd)
    },
    AXEScrollView.prototype.onViewDoubleTap = function(t) {
        this.currentScale(1),
        this.scaleOrigin(new AXEVec2(t.touches[0].x, t.touches[0].y))
    },
    AXEScrollView.prototype._resizeable = !1,
    AXEScrollView.prototype.resizeable = function(t) {
        return "boolean" == typeof t && t != this._resizeable && (this._resizeable = t, this._resizeable ? (this.addListener(AXETouchEvent.TOUCH_START, this, this.onViewResizeStart), this.addListener(AXETouchEvent.DOUBLE_TAP, this, this.onViewDoubleTap)) : (this.removeListener(AXETouchEvent.TOUCH_START, this, this.onViewResizeStart), this.removeListener(AXETouchEvent.DOUBLE_TAP, this, this.onViewDoubleTap))),
        this._resizeable
    },
    AXEScrollView.prototype._scrollable = !1,
    AXEScrollView.prototype.scrollable = function(t) {
        return "boolean" == typeof t && t != this._scrollable && (this._scrollable = t, this._scrollable ? this.addListener(AXETouchEvent.TOUCH_START, this, this.onViewScrollBegin) : this.removeListener(AXETouchEvent.TOUCH_START, this, this.onViewScrollBegin)),
        this._scrollable
    },
    AXEScrollView.prototype._scrollBarStyle = AXEScrollBarStyle.AUTO,
    AXEScrollView.prototype.scrollBarStyle = function(t) {
        return 0 == isNaN(t) && t != this._scrollBarStyle && (this._scrollBarStyle = t, this._scrollBarStyle == AXEScrollBarStyle.AUTO ? (null != this._hScrollBar && (this._hScrollBar.stopAnimation(), this.scrolling && 0 == this.lockHorizontal() && this.contentSize().x > this.width() ? this._hScrollBar.show() : this._hScrollBar.hide()), null != this._vScrollBar && 0 == this.lockVertical() && this.contentSize().y > this.height() && (this._vScrollBar.stopAnimation(), this.scrolling ? this._vScrollBar.show() : this._vScrollBar.hide())) : this._scrollBarStyle == AXEScrollBarStyle.HIDDEN ? (null != this._hScrollBar && (this._hScrollBar.remove(), this._hScrollBar.dealloc(), this._hScrollBar = null), null != this._vScrollBar && (this._vScrollBar.remove(), this._vScrollBar.dealloc(), this._vScrollBar = null)) : this._scrollBarStyle == AXEScrollBarStyle.VISIBLE && (0 == this.lockHorizontal() && this.hScrollBar().show(), 0 == this.lockVertical() && this.vScrollBar().show())),
        this._scrollBarStyle
    },
    AXEScrollView.prototype.needReload = !1,
    AXEScrollView.prototype.reloadData = function() {
        if (this.loop()) {
            var t = this.offset().clone(),
            e = this.maxOffset(); (t.x < 0 || t.x > e.x) && (t.x = (t.x % e.x + e.x) % e.x),
            (t.y < 0 || t.y > e.y) && (t.y = (t.y % e.y + e.y) % e.y),
            t.equalsTo(this.offset()) || this.offset(t)
        }
        this.needReload = !0
    },
    AXEScrollView.prototype.renderView = function() {
        if (0 == this.bouncing()) {
            var t = this.offset();
            t.x = Math.max(0, Math.min(this.contentSize().x - this.width(), t.x)),
            t.y = Math.max(0, Math.min(this.contentSize().y - this.height(), t.y))
        }
        this.lockHorizontal() && (this.offset().x = 0),
        this.lockVertical() && (this.offset().y = 0),
        null != this._contentView && (this._contentView.width(this.contentSize().x), this._contentView.height(this.contentSize().y), this._contentView.x( - 1 * this.offset().x), this._contentView.y( - 1 * this.offset().y)),
        null != this._hScrollBar && this._hScrollBar.updateScroll(this),
        null != this._vScrollBar && this._vScrollBar.updateScroll(this)
    },
    AXEScrollView.prototype.lastTouch = null,
    AXEScrollView.prototype.figureMoved = !1,
    AXEScrollView.prototype.onViewScrollBegin = function(t) { (this.contentSize().x > this.width() || this.contentSize().y > this.height()) && 1 == t.touches.length && (this.easingInitSpeed = null, this.easingDuration = null, this.easingAcc = null, this.desOffset = null, this.lastTouch = new AXEVec2(t.touches[0].x, t.touches[0].y), this.figureMoved = !1, this.addListener(AXETouchEvent.TOUCH_MOVE, this, this.onViewScrolling), this.addListener(AXETouchEvent.TOUCH_END, this, this.onViewScrollEnd), this.scrolling = !0, null != this.delegate && null != this.delegate.onScrollViewStartScroll && this.delegate.onScrollViewStartScroll(this)),
        t.touches.length > 1 && (this.figureMoved = !1, this.onViewScrollEnd())
    },
    AXEScrollView.prototype.onViewScrolling = function(t) {
        var e = new AXEVec2(t.touches[0].x, t.touches[0].y),
        i = this.offset().clone(),
        n = new AXEVec2;
        this.lockHorizontal() ? n.x = i.x: i.x >= 0 && i.x <= this.contentSize().x - this.width() ? n.x = i.x - (e.x - this.lastTouch.x) : n.x = i.x - (e.x - this.lastTouch.x) / 4,
        this.lockVertical() ? n.y = i.y: i.y >= 0 && i.y <= this.contentSize().y - this.height() ? n.y = i.y - (e.y - this.lastTouch.y) : n.y = i.y - (e.y - this.lastTouch.y) / 4,
        this.offset(n),
        this.lastTouch = e,
        null != this.delegate && null != this.onScrollViewScrolling && this.delegate.onScrollViewScrolling(this),
        this.scrollBarStyle() == AXEScrollBarStyle.AUTO && (0 == this.lockHorizontal() && this.contentSize().x > this.width() && this.hScrollBar().show(), 0 == this.lockVertical() && this.contentSize().y > this.height() && this.vScrollBar().show()),
        this.figureMoved = !0
    },
    AXEScrollView.prototype.bouncingDuration = .3,
    AXEScrollView.prototype.easeDuration = .5,
    AXEScrollView.prototype.onViewScrollEnd = function() {
        if (this.figureMoved) {
            var t = this.offset().clone(),
            e = t.clone(),
            i = 0,
            n = 0,
            o = 0,
            r = 0;
            null == this.currentSpeed && (this.currentSpeed = new AXEVec2);
            var s = this.currentSpeed.clone();
            if (t.x < 0) e.x = 0,
            i = this.bouncingDuration,
            s.x = 2 * (e.x - t.x) / i,
            o = s.x / i * -1;
            else if (t.x > this.contentSize().x - this.width()) e.x = this.contentSize().x - this.width(),
            i = this.bouncingDuration,
            s.x = 2 * (e.x - t.x) / i,
            o = s.x / i * -1;
            else if (this.paging()) {
                var a = this.pageSize() > 0 ? this.pageSize() : this.width(),
                l = t.x / a - Math.floor(t.x / a);
                s.x > 0 ? l > this.minMove() ? e.x = Math.ceil(t.x / a) * a: e.x = Math.round(t.x / a) * a: s.x < 0 && l < 1 - this.minMove() ? e.x = Math.floor(t.x / a) * a: e.x = Math.round(t.x / a) * a,
                e.x = Math.max(0, Math.min(e.x, this.contentSize().x - this.width())),
                i = this.easeDuration,
                s.x = 2 * (e.x - t.x) / i,
                o = s.x / i * -1
            } else this.easing() && 0 != s.x && (i = this.easeDuration, e.x = t.x + s.x * i / 2, e.x = Math.max(0, Math.min(e.x, this.contentSize().x - this.width())), s.x = 2 * (e.x - t.x) / i, o = s.x / i * -1);
            if (t.y < 0) e.y = 0,
            n = this.bouncingDuration,
            s.y = 2 * (e.y - t.y) / n,
            r = s.y / n * -1;
            else if (t.y > this.contentSize().y - this.height()) e.y = this.contentSize().y - this.height(),
            n = this.bouncingDuration,
            s.y = 2 * (e.y - t.y) / n,
            r = s.y / n * -1;
            else if (this.paging()) {
                var h = t.y / this.height() - Math.floor(t.y / this.height());
                s.y > 0 ? h > this.minMove() ? e.y = Math.ceil(t.y / this.height()) * this.height() : e.y = Math.round(t.y / this.height()) * this.height() : s.y < 0 && h < 1 - this.minMove() ? e.y = Math.floor(t.y / this.height()) * this.height() : e.y = Math.round(t.y / this.height()) * this.height(),
                e.y = Math.max(0, Math.min(e.y, this.contentSize().y - this.height())),
                n = this.easeDuration,
                s.y = 2 * (e.y - t.y) / n,
                r = s.y / n * -1
            } else this.easing() && 0 != s.y && (n = this.easeDuration, e.y = t.y + s.y * n / 2, e.y = Math.max(0, Math.min(e.y, this.contentSize().y - this.height())), s.y = 2 * (e.y - t.y) / n, r = s.y / n * -1);
            e.equalsTo(t) ? this.onViewEndScroll() : (this.desOffset = e, this.easingInitSpeed = s, this.easingDuration = new AXEVec2(i, n), this.easingAcc = new AXEVec2(o, r), this.beginEasing = !0, null != this.delegate && null != this.delegate.onScrollViewStartEasing && this.delegate.onScrollViewStartEasing(this))
        }
        this.lastTouch = null,
        this.removeListener(AXETouchEvent.TOUCH_MOVE, this, this.onViewScrolling),
        this.removeListener(AXETouchEvent.TOUCH_END, this, this.onViewScrollEnd)
    },
    AXEScrollView.prototype.onViewEndScroll = function() {
        this.scrolling = !1,
        this.easingInitSpeed = null,
        this.easingDuration = null,
        this.easingAcc = null,
        this.desOffset = null,
        null != this.delegate && null != this.delegate.onScrollViewEndScroll && this.delegate.onScrollViewEndScroll(this),
        this.scrollBarStyle() == AXEScrollBarStyle.AUTO && (0 == this.lockHorizontal() && this.contentSize().x > this.width() && this.hScrollBar().hide(), 0 == this.lockVertical() && this.contentSize().y > this.height() && this.vScrollBar().hide())
    }
} (),
define("scroll_view", ["view_container", "scroll_bar_style", "scroll_bar", "touch_event"],
function() {});
var AXETableView = function() {
    AXEScrollView.prototype.constructor.call(this)
};
AXETableView.prototype = new AXEScrollView,
AXETableView.constructor = AXETableView,
AXETableView.prototype._dataSource = null,
AXETableView.prototype.dataSource = function(t) {
    return Boolean(t) && t != this._dataSource && (this._dataSource = t, t.isVertical(this) ? (this.lockHorizontal(!0), this.lockVertical(!1)) : (this.lockVertical(!0), this.lockHorizontal(!1))),
    this._dataSource
},
AXETableView.prototype.reloadData = function() {
    if (null != this._dataSource) {
        for (var t = new AXEVec2,
        e = 0; e < this._dataSource.cellCount(this); e++) t[this._dataSource.isVertical(this) ? "y": "x"] += this._dataSource.cellSizeByIndex(this, e);
        this._contentSize = t,
        AXEScrollView.prototype.reloadData.call(this)
    }
},
AXETableView.prototype.renderView = function() {
    if (null != this._dataSource) {
        if (0 == this.bouncing()) {
            var t = this.offset();
            t.x = Math.max(0, Math.min(this.contentSize().x - this.width(), t.x)),
            t.y = Math.max(0, Math.min(this.contentSize().y - this.height(), t.y))
        }
        var e, i = this.contentView();
        i.width(this.width()),
        i.height(this.height()),
        e = this._dataSource.isVertical(this) ? this.renderVertical() : this.renderHorizontal();
        for (var n = this.contentView().subViews().slice(), o = 0; o < n.length; o++) {
            for (var r = !0,
            s = 0; s < e.length; s++) if (n[o] == e[s]) {
                r = !1;
                break
            }
            r && n[o].remove()
        }
        for (var a = 0; a < e.length; a++) {
            for (var l = !0,
            h = 0; h < n.length; h++) if (e[a] == n[h]) {
                l = !1;
                break
            }
            l && this.contentView().addSubView(e[a])
        }
        null != this._hScrollBar && this._hScrollBar.updateScroll(),
        null != this._vScrollBar && this._vScrollBar.updateScroll()
    }
},
AXETableView.prototype.renderVertical = function() {
    for (var t = new AXEVec2(this.offset().y, this.offset().y + this.height()), e = [], i = 0, n = 0; n < this.dataSource().cellCount(this); n++) {
        var o = this.dataSource().cellSizeByIndex(this, n),
        r = new AXEVec2(i, i + o);
        if (0 == (r.y < t.x || r.x > t.y)) {
            var s = this.dataSource().cellByIndex(this, n);
            s.x(0),
            s.y(i - this.offset().y),
            e.push(s)
        }
        i += o
    }
    return e
},
AXETableView.prototype.renderHorizontal = function() {
    for (var t = new AXEVec2(this.offset().x, this.offset().x + this.width()), e = [], i = 0, n = 0; n < this.dataSource().cellCount(this); n++) {
        var o = this.dataSource().cellSizeByIndex(this, n),
        r = new AXEVec2(i, i + o);
        if (0 == (r.y < t.x || r.x > t.y)) {
            var s = this.dataSource().cellByIndex(this, n);
            s.x(i - this.offset().x),
            s.y(0),
            e.push(s)
        }
        i += o
    }
    return e
},
define("table_view", ["scroll_view", "rect", "vec2"],
function() {});
var AXESpinView = function(t) {
    if (arguments.length > 0 && t instanceof AXESpinView) return t
};
AXESpinView.prototype = new AXEViewContainer,
AXESpinView.prototype.constructor = AXESpinView,
AXESpinView.prototype.clone = function() {
    var t = new AXESpinView;
    return this.copyProperties(t),
    t
},
AXESpinView.prototype.copyProperties = function(t) {
    AXEViewContainer.prototype.copyProperties.call(this, t),
    AXESpinView(t).originalMat = this.originalMat.clone(),
    AXESpinView(t).clockwise = this.clockwise,
    AXESpinView(t).aps(this.aps()),
    AXESpinView(t).angle(this.angle()),
    this.playing ? AXESpinView(t).play() : AXESpinView(t).pause()
},
AXESpinView.prototype.dealloc = function() {
    this.originalMat = null,
    AXEViewContainer.prototype.dealloc.call(this)
},
AXESpinView.prototype.originalMat = null,
AXESpinView.prototype.updatePropsFromXML = function(t) {
    if (AXEViewContainer.prototype.updatePropsFromXML.call(this, t), this.originalMat = this.matrix().clone(), t.is("[clockwise]") ? this.clockwise = "true" == t.attr("clockwise") : this.clockwise = !0, t.is("[angle]") && this.angle(parseFloat(t.attr("angle"))), t.is("[aps]")) {
        var e = parseFloat(t.attr("aps"));
        this.aps(e)
    }
    t.is("[auto-play]") ? this.playing = "true" == t.attr("auto-play") : this.playing = !0
},
AXESpinView.prototype.playing = !1,
AXESpinView.prototype.clockwise = !0,
AXESpinView.prototype.play = function() {
    this.playing = !0
},
AXESpinView.prototype.pause = function() {
    this.playing = !1
},
AXESpinView.prototype.angleChanged = !1,
AXESpinView.prototype._angle = 0,
AXESpinView.prototype.angle = function(t) {
    return "number" == typeof t && (t = t >= 0 ? t % 360 : 360 - Math.abs(t) % 360, this._angle != t && (this._angle = t, this.angleChanged = !0)),
    this._angle
},
AXESpinView.prototype._aps = 0,
AXESpinView.prototype.aps = function(t) {
    return 0 == isNaN(t) && t != this._aps && (this._aps = t, this.needToRender(!0)),
    this._aps
},
AXESpinView.prototype.update = function(t, e) {
    if (AXEViewContainer.prototype.update.call(this, t, e), this.playing) {
        var i = e * this.aps();
        this.angle(this.angle() + (this.clockwise ? 1 : -1) * i)
    }
    if (this.angleChanged) {
        this.angleChanged = !1;
        var n = this.angle() * (Math.PI / 180),
        o = new AXEMat3;
        o.a = Math.cos(n),
        o.b = Math.sin(n),
        o.c = -1 * o.b,
        o.d = o.a,
        o.tx = this.width() / 2 - o.a * this.width() / 2 - o.c * this.height() / 2,
        o.ty = this.height() / 2 - o.b * this.width() / 2 - o.d * this.height() / 2,
        o = o.concatWith(this.originalMat),
        this.matrix(o)
    }
},
define("spin_view", ["view_container", "mat3"],
function() {});
var AXEMotionFrame = function() {};
AXEMotionFrame.prototype.constructor = AXEMotionFrame,
AXEMotionFrame.prototype.time = 0,
AXEMotionFrame.prototype.tween = null,
AXEMotionFrame.prototype.isBlank = !1,
AXEMotionFrame.prototype.properties = null,
AXEMotionFrame.prototype.updateFromXML = function(t) {
    if (this.isBlank = t.is("[blank]"), this.time = parseFloat(t.attr("time")), t.is("[tween]")) {
        var e = t.attr("tween").split(".");
        this.tween = AXEEasing[e[0]][e[1]]
    } else this.tween = null;
    this.properties = {};
    for (var i = t[0].attributes, n = 0; n < i.length; n++) {
        var o = i[n].name;
        if ("tween" != o && "blank" != o && "time" != o) if ("matrix" == o) {
            var r = i[n].value.split(",");
            this.properties.matrix = {
                a: parseFloat(r[0]),
                b: parseFloat(r[1]),
                c: parseFloat(r[2]),
                d: parseFloat(r[3]),
                tx: parseFloat(r[4]),
                ty: parseFloat(r[5])
            }
        } else if (o.match(/color/gi)) if (/^#/.test(i[n].value)) {
            var s = AXEColor.colorWithString(i[n].value);
            this.properties[o] = {
                r: s.r(),
                g: s.g(),
                b: s.b(),
                a: s.a()
            }
        } else {
            var a = i[n].value.split(",");
            this.properties[o] = {
                r: parseFloat(a[0]),
                g: parseFloat(a[1]),
                b: parseFloat(a[2])
            },
            a.length > 3 ? this.properties[o].a = parseFloat(a[3]) : this.properties[o].a = 255
        } else {
            var l = i[n].value;
            if (/^{[\d\D]*}$/.test(l)) this.properties[o] = JSON.parse(l.replace(/'/g, '"'));
            else {
                var h, c = /^0x|^#/,
                p = !1;
                c.test(l) ? (p = !0, h = parseInt(l.replace(c, ""), 16)) : h = parseFloat(l),
                0 != isNaN(h) || 0 != /[^\d.\-]/.test(l) && !p ? "true" == l.toLowerCase() || "false" == l.toLowerCase() ? this.properties[o] = "true" == l: this.properties[o] = l: this.properties[o] = h
            }
        }
    }
},
AXEMotionFrame.prototype.clone = function() {
    var t = new AXEMotionFrame;
    return t.time = this.time,
    t.tween = this.tween,
    t.isBlank = this.isBlank,
    t.properties = JSON.parse(JSON.stringify(this.properties)),
    t
},
AXEMotionFrame.prototype.dealloc = function() {
    this.properties = null
},
define("motion_frame", ["vec2", "mat3", "color", "easing"],
function() {});
var AXEMotionLayer = function() {};
AXEMotionLayer.prototype.constructor = AXEMotionLayer,
AXEMotionLayer.prototype.contentView = null,
AXEMotionLayer.prototype.updateFromXML = function(t) {
    var e = this,
    i = t.children("content").children();
    if (i.length > 0) {
        var n = i[0].nodeName.toLowerCase();
        e.contentView = AXEViewFactory.createViewByNodeName(n),
        null != e.contentView && e.contentView.updatePropsFromXML(i),
        "AXEViewContainer" == e.contentView.className && e.contentView.subViews().length
    } else e.contentView = null;
    e.frames = [],
    t.children("frame").each(function(t, i) {
        var n = $(i),
        o = new AXEMotionFrame;
        o.updateFromXML(n),
        e.frames.push(o)
    })
},
AXEMotionLayer.prototype.frames = null,
AXEMotionLayer.prototype.contentWithTime = function(t) {
    for (var e = null,
    i = null,
    n = this.frames.length - 1; n >= 0; n--) {
        var o = this.frames[n];
        if (o.time <= t) {
            e = o,
            n < this.frames.length - 1 && (i = this.frames[n + 1]);
            break
        }
    }
    var r = null;
    if (null != e && 0 == e.isBlank) if (r = this.contentView, null == e.tween || null == i) AXEArrayUtil.setValues(r, e.properties, e.properties, 0);
    else {
        var s = i.time - e.time,
        a = t - e.time,
        l = e.tween(a, 0, 1, s);
        AXEArrayUtil.setValues(r, e.properties, i.properties, l)
    }
    return r
},
AXEMotionLayer.prototype.reverse = function(t) {
    for (var e = [], i = this.frames.length - 1; i >= 0; i--) {
        var n = this.frames[i].clone();
        if (n.time = t - n.time, i > 0) {
            var o = this.frames[i - 1];
            n.tween = o.tween
        } else n.tween = null;
        e.push(n)
    }
    this.frames = e
},
AXEMotionLayer.prototype.clone = function() {
    var t = new AXEMotionLayer;
    null != this.contentView && (t.contentView = this.contentView.clone()),
    t.frames = [];
    for (var e = 0; e < this.frames.length; e++) {
        var i = this.frames[e].clone();
        t.frames.push(i)
    }
    return t
},
AXEMotionLayer.prototype.dealloc = function() {
    this.contentView.dealloc(),
    this.contentView = null;
    for (var t = 0; t < this.frames.length; t++) this.frames[t].dealloc();
    this.frames = null
},
define("motion_layer", ["motion_frame", "array_util", "mat3", "view_factory", "color", "vec2"],
function() {});
var AXEMotion = function(t) {
    if (arguments.length > 0 && t instanceof AXEMotion) return t
};
AXEMotion.prototype = new AXEViewContainer,
AXEMotion.prototype.constructor = AXEMotion,
AXEMotion.prototype.clone = function() {
    var t = new AXEMotion;
    return this.copyProperties(t),
    t
},
AXEMotion.prototype.copyProperties = function(t) {
    AXEViewContainer.prototype.copyProperties.call(this, t),
    AXEMotion(t).empty(),
    AXEMotion(t).layers = [];
    for (var e = 0; e < this.layers.length; e++) {
        var i = this.layers[e];
        AXEMotion(t).layers.push(i.clone())
    }
    if (AXEMotion(t)._duration = this.duration(), AXEMotion(t).loop(this.loop()), AXEMotion(t).isReverse = this.isReverse, AXEMotion(t).speedScale(this._speedScale), AXEMotion(t).isPlaying = this.isPlaying, AXEMotion(t).autoPlay(this.autoPlay()), null != this._labels) for (var n in AXEMotion(t)._labels = {},
    this._labels) this._labels.hasOwnProperty(n) && (AXEMotion(t)._labels[n] = this._labels[n]);
    AXEMotion(t).currentTime(this.currentTime())
},
AXEMotion.prototype.updatePropsFromXML = function(t) {
    var e = this;
    if (AXEViewContainer.prototype.updatePropsFromXML.call(e, t), e.layers = [], t.children("layer").each(function(t, i) {
        var n = $(i),
        o = new AXEMotionLayer;
        o.updateFromXML(n),
        e.layers.push(o)
    }), e._duration = parseFloat(t.attr("duration")), e.loop(!t.is("[loop]") || "true" == t.attr("loop")), t.is("[speed-scale]") ? e.speedScale(parseFloat(t.attr("speed-scale"))) : e.speedScale(1), t.is("[labels]")) {
        var i = t.attr("labels").split(",");
        e._labels = {};
        for (var n = 0; n < i.length; n++) {
            var o = i[n].split(":"),
            r = o[0];
            e._labels[r] = o[1]
        }
    }
    t.is("[reverse]") && e.reverse(),
    t.is("[time]") ? e.currentTime(parseFloat(t.attr("time"))) : e.currentTime(0),
    e.updateFromTime(),
    t.is("[auto-play]") ? e.autoPlay("true" == t.attr("auto-play").toLowerCase()) : e.autoPlay(!1)
},
AXEMotion.prototype.remainLabels = null,
AXEMotion.prototype.resetLabels = function() {
    if (this.remainLabels = {},
    null != this.labels()) for (var t in this.labels()) this.remainLabels[t] = this.labels()[t]
},
AXEMotion.prototype._labels = null,
AXEMotion.prototype.labels = function() {
    return this._labels
},
AXEMotion.prototype.timeByLabel = function(t) {
    var e = this.labels(),
    i = 0;
    for (var n in e) if (e[n] == t) {
        i = parseFloat(n);
        break
    }
    return i
},
AXEMotion.prototype.layers = null,
AXEMotion.prototype.layerContentByName = function(t) {
    for (var e = null,
    i = 0; i < this.layers.length; i++) {
        var n = this.layers[i].contentView;
        if (n.name() == t) {
            e = n;
            break
        }
    }
    if (null == e) for (var o = 0; o < this.layers.length; o++) {
        var r = this.layers[o].contentView;
        if (r instanceof AXEMotion ? e = AXEMotion(r).layerContentByName(t) : r instanceof AXEViewContainer && (e = AXEViewContainer(r).subViewByName(t)), null != e) break
    }
    return e
},
AXEMotion.prototype._speedScale = 1,
AXEMotion.prototype.speedScale = function(t) {
    return 0 == isNaN(t) && t != this._speedScale && (this._speedScale = t),
    this._speedScale
},
AXEMotion.prototype.isReverse = !1,
AXEMotion.prototype.reverse = function() {
    for (var t = 0; t < this.layers.length; t++) this.layers[t].reverse(this.duration());
    var e = {};
    for (var i in this.labels()) e[this.duration() - parseFloat(i)] = this.labels()[i];
    this._labels = e,
    this.updateFromTime(),
    this.isReverse = !this.isReverse
},
AXEMotion.prototype._duration = 0,
AXEMotion.prototype.duration = function() {
    return this._duration
},
AXEMotion.prototype.percent = function(t) {
    return 0 == isNaN(t) && this.currentTime(this.duration() * t),
    this.currentTime() / this.duration()
},
AXEMotion.prototype._currentTime = NaN,
AXEMotion.prototype.currentTime = function(t) {
    if (0 == isNaN(t) && (this.loop() ? t -= Math.floor(t / this.duration()) * this.duration() : t = Math.min(this.duration(), Math.max(0, t)), this._currentTime != t && (this._currentTime = t, this.updateFromTime(), null != this.labels()))) for (var e in this.remainLabels = {},
    this.labels()) parseFloat(e) > this._currentTime && (this.remainLabels[e] = this.labels()[e]);
    return this._currentTime
},
AXEMotion.prototype.labelToTime = function(t) {
    var e = this.labels(),
    i = null;
    for (var n in e) if (e[n] == t) {
        i = parseFloat(n);
        break
    }
    return i
},
AXEMotion.prototype.isPlaying = !1,
AXEMotion.prototype.pause = function(t) {
    "string" == typeof t && (t = this.timeByLabel(t)),
    0 == isNaN(t) && this.currentTime(t),
    this.isPlaying = !1
},
AXEMotion.prototype.play = function(t) {
    "string" == typeof t && (t = this.timeByLabel(t)),
    0 == isNaN(t) && this.currentTime(t),
    this.isPlaying = !0
},
AXEMotion.prototype.playWhenAddToStage = function() {
    "AXEStage" == this.stage().className && this.play(0)
},
AXEMotion.prototype.visible = function(t) {
    var e = AXEViewContainer.prototype.visible.call(this);
    return "boolean" == typeof t && t != e && (e = AXEViewContainer.prototype.visible.call(this, t)) && "AXEStage" == this.stage().className && (this.isPlaying || this.autoPlay()) && this.play(0),
    e
},
AXEMotion.prototype._autoPlay = !1,
AXEMotion.prototype.autoPlay = function(t) {
    return "boolean" == typeof t && t != this._autoPlay && (this._autoPlay = t, t ? this.addListener(AXEEvent.ADD_TO_STAGE, this, this.playWhenAddToStage) : this.removeListener(AXEEvent.ADD_TO_STAGE, this, this.playWhenAddToStage)),
    this._autoPlay
},
AXEMotion.prototype._loop = !1,
AXEMotion.prototype.loop = function(t) {
    return "boolean" == typeof t && t != this._loop && (this._loop = t, this.needToRender(!0)),
    this._loop
},
AXEMotion.prototype.updateFromTime = function() {
    for (var t = this.subViews().slice(), e = [], i = 0; i < this.layers.length; i++) {
        var n = this.layers[i].contentWithTime(this.currentTime());
        null != n && e.push(n)
    }
    for (var o = 0; o < t.length; o++) {
        for (var r = !0,
        s = 0; s < e.length; s++) if (e[s] == t[o]) {
            r = !1;
            break
        }
        r && t[o].remove()
    }
    this._subViews = [];
    for (var a = 0; a < e.length; a++) {
        for (var l = !1,
        h = 0; h < t.length; h++) if (e[a] == t[h]) {
            t.splice(h, 1),
            l = !0;
            break
        }
        l ? this._subViews[a] = e[a] : this.addSubView(e[a])
    }
    this.needToRender(!0)
},
AXEMotion.prototype.update = function(t, e) {
    if (AXEViewContainer.prototype.update.call(this, t, e), this.isPlaying) {
        e *= this.speedScale();
        var i = this.currentTime() + e,
        n = i;
        for (var o in this.loop() ? i -= Math.floor(i / this.duration()) * this.duration() : i = Math.min(this.duration(), Math.max(0, i)), i != this._currentTime && (this._currentTime = i, this.updateFromTime()), this.triggerEvent(new AXEEvent(AXEEvent.CHANGE)), null == this.remainLabels && this.resetLabels(), this.remainLabels) if (parseFloat(o) <= n) {
            var r = new AXEEvent(AXEEvent.CUE_POINT);
            r.evtData = {
                time: parseFloat(o),
                label: this.remainLabels[o]
            };
            var s = this.remainLabels[o].match(/^sound\(([\w\W]*)\)$/);
            if (s && s.length > 1) {
                var a = s[1];
                AXESoundManager.manager().pauseSound(a),
                AXESoundManager.manager().playSound(a, 0)
            }
            if (!this.isPlaying) {
                this.currentTime(o);
                break
            }
            delete this.remainLabels[o],
            this.triggerEvent(r)
        }
        n >= this.duration() && (this.resetLabels(), 0 == this.loop() && this.pause(), this.triggerEvent(new AXEEvent(AXEEvent.END)))
    }
},
AXEMotion.prototype.eachLayers = function(t) {
    for (var e = this.layers.slice(), i = 0; i < e.length; i++) {
        var n = e[i].contentView;
        if (!1 === t.call(this, i, n)) break
    }
},
AXEMotion.prototype.dealloc = function() {
    for (var t = 0; t < this.layers.length; t++) this.layers[t].dealloc();
    this._labels = null,
    this.remainLabels = null,
    AXEViewContainer.prototype.dealloc.call(this)
},
define("motion", ["view_container", "motion_layer", "event"],
function() {});
var AXERequest = function(t, e, i, n) {
    this._url = t,
    this.method(e),
    this.retryCount(i),
    this.retryInterval(n)
};
AXERequest.prototype = new AXEEventTarget,
AXERequest.prototype.constructor = AXERequest,
AXERequest.prototype.failCount = 0,
AXERequest.prototype.logFailRequest = function() {
    console.log("Fetch data from " + this.url() + " fail! Error ID: " + this.errorId() + "\nFail count: " + this.failCount + "\nError Msg: " + this.errorMsg())
},
AXERequest.prototype._url = null,
AXERequest.prototype.url = function() {
    return this._url
},
AXERequest.prototype._retryInterval = .1,
AXERequest.prototype.retryInterval = function(t) {
    return 0 == isNaN(t) && t != this._retryInterval && (this._retryInterval = t),
    this._retryInterval
},
AXERequest.prototype._retryCount = 1,
AXERequest.prototype.retryCount = function(t) {
    return 0 == isNaN(t) && t != this._retryCount && (this._retryCount = t),
    this._retryCount
},
AXERequest.prototype._crossDomain = !1,
AXERequest.prototype.crossDomain = function(t) {
    return "boolean" == typeof t && (this._crossDomain = t),
    this._crossDomain
},
AXERequest.prototype._errorList = null,
AXERequest.prototype.errorList = function() {
    return this._errorList || (this._errorList = []),
    this._errorList
},
AXERequest.prototype.addErrorCodes = function(t) {
    for (var e = 0; e < t.length; e++) this.addErrorCode(t[e])
},
AXERequest.prototype.addErrorCode = function(t) {
    this.errorList().push(t)
},
AXERequest.prototype._method = "get",
AXERequest.prototype.method = function(t) {
    if ("string" == typeof t && t != this._method) {
        if ("get" != t.toLowerCase() && "post" != t.toLowerCase()) throw new Error("Unsupported request method.");
        this._method = t
    }
    return this._method
},
AXERequest.prototype._jsonp = null,
AXERequest.prototype.jsonp = function(t) {
    return "string" == typeof t && t != this._jsonp && (this._jsonp = t),
    this._jsonp
},
AXERequest.prototype._headers = null,
AXERequest.prototype.headers = function() {
    return null == this._headers && (this._headers = {}),
    this._headers
},
AXERequest.prototype.addHeader = function(t, e) {
    this.headers()[t] = e
},
AXERequest.prototype._data = null,
AXERequest.prototype.data = function() {
    return this._data
},
AXERequest.prototype.dealloc = function() {
    null != this._data && (this._data = null),
    null != this._headers && (this._headers = null),
    AXEEventTarget.prototype.dealloc.call(this)
},
AXERequest.prototype._errorId = null,
AXERequest.prototype.errorId = function() {
    return this._errorId
},
AXERequest.prototype._errorMsg = null,
AXERequest.prototype.errorMsg = function() {
    return this._errorMsg
},
AXERequest.prototype.abort = function() {
    const t = this;
    t._xhr && 4 != t._xhr.readyState && (t._xhr.abort(), t._xhr = null)
},
AXERequest.prototype._xhr = null,
AXERequest.prototype.xhr = function() {
    return this._xhr
},
AXERequest.prototype.send = function(t) {
    var e = this;
    e._data = null;
    var i = {
        url: e.url(),
        cache: !1,
        async: !0,
        type: e.method()
    };
    if (null != e.jsonp() ? (i.dataType = "jsonp", i.jsonp = e.jsonp()) : i.dataType = "json", null != t && (i.data = t), e.crossDomain() && (i.crossDomain = !0, i.xhrFields = {
        withCredentials: !0
    }), null != e._headers) for (var n in i.headers = e._headers,
    e._headers) i[n] = e._headers[n];
    i.success = function(t, i, n) {
        "success" == i && (e.failCount = 0, e._errorId = parseInt(n.status, 0), e._errorMsg = n.statusText, e._data = t, e.triggerEvent(new AXEEvent(AXEEvent.COMPLETE)))
    },
    i.error = function(i) {
        e.failCount++;
        var n = parseInt(i.status, 10),
        o = i.statusText,
        r = !1;
        if (AXEArrayUtil.each(e.errorList(),
        function(t, e) {
            if (n == parseInt(e, 10)) return r = !0,
            !1
        }), e.failCount >= e.retryCount() || r) {
            e.failCount = 0,
            e._errorId = n,
            e._errorMsg = o,
            e._data = i.response,
            e.logFailRequest();
            var s = new Error(n + ":" + o);
            e.triggerEvent(new AXEErrorEvent(s))
        } else setTimeout(function() {
            e.send(t)
        },
        1e3 * e.retryInterval())
    },
    e._xhr = $.ajax(i)
},
define("request", ["event_target"],
function() {});
var AXETracker = function() {};
AXETracker.GTAG = parseInt("1", 2),
AXETracker.UMENG = parseInt("10", 2),
AXETracker.BAIDU = parseInt("100", 2),
AXETracker.GROWING_IO = parseInt("1000", 2),
AXETracker.types = 0,
AXETracker.gaAccount = null,
AXETracker.initTracker = function(t, e) {
    AXETracker.types = t,
    e && (AXETracker.gaAccount = e)
},
AXETracker.trackPV = function(t, e, i) {
    if (t = t.replace(/^\/*/, "/"), (AXETracker.types & AXETracker.GTAG) == AXETracker.GTAG) try {
        var n = {
            page_path: t
        };
        e && (n.page_title = e),
        i && (n.page_refer = i),
        gtag("config", AXETracker.gaAccount, n)
    } catch(t) {
        console.log(t.message)
    }
    if ((AXETracker.types & AXETracker.UMENG) == AXETracker.UMENG) try {
        _czc.push(["_trackPageview", t, i])
    } catch(t) {
        console.log(t.message)
    }
    if ((AXETracker.types & AXETracker.BAIDU) == AXETracker.BAIDU) try {
        _hmt.push(["_trackPageview", t])
    } catch(t) {
        console.log(t.message)
    }
    if ((AXETracker.types & AXETracker.GROWING_IO) == AXETracker.GROWING_IO) try {
        gio("track", "pv_" + t, {
            path: t,
            title: e,
            refer: i
        })
    } catch(t) {
        console.log(t.message)
    }
},
AXETracker.trackEvent = function(t, e, i, n) {
    if (e || (e = i), t || (t = e), (AXETracker.types & AXETracker.GTAG) == AXETracker.GTAG) try {
        var o = {
            event_label: e
        };
        t && (o.event_category = t),
        gtag("event", i, o)
    } catch(t) {
        console.log(t.message)
    }
    if ((AXETracker.types & AXETracker.UMENG) == AXETracker.UMENG) try {
        _czc.push(["_trackEvent", t, i, e])
    } catch(t) {
        console.log(t.message)
    }
    if ((AXETracker.types & AXETracker.BAIDU) == AXETracker.BAIDU) try {
        _hmt.push(["_trackEvent", t, i, e])
    } catch(t) {
        console.log(t.message)
    }
    if ((AXETracker.types & AXETracker.GROWING_IO) == AXETracker.GROWING_IO) try {
        gio("track", "event_" + e, {
            category: t,
            label: e,
            action: i
        })
    } catch(t) {
        console.log(t.message)
    }
    n && window.setTimeout(function() {
        window.location.href = n
    },
    100)
},
define("tracker",
function() {});
var AXESNSEvent = function(t, e, i) {
    this.channel = e,
    this.message = i,
    AXEEvent.prototype.constructor.call(this, t, !1)
};
AXESNSEvent.CANCEL_SHARING = "cancel_sharing",
AXESNSEvent.SUCCESS_SHARING = "success_sharing",
AXESNSEvent.WEICHAT_READY = "wechat_ready",
AXESNSEvent.SNS_ERROR = "sns_error",
AXESNSEvent.prototype = new AXEEvent,
AXESNSEvent.prototype.constructor = AXESNSEvent,
AXESNSEvent.prototype.message = null,
AXESNSEvent.prototype.channel = null,
AXESNSEvent.prototype.clone = function() {
    var t = new AXESNSEvent(this.type, this.channel, this.message);
    return t.evtData = t,
    t
},
define("sns_event", ["event"],
function() {});
var AXEWechat = function() {}; !
function() {
    var t = window.jWeixin;
    AXEWechat._wechat = null,
    AXEWechat.MOMENTS = "moments",
    AXEWechat.FRIENDS = "to_friends",
    AXEWechat.QQ_WEIBO = "qq_weibo",
    AXEWechat.wechat = function() {
        return null == AXEWechat._wechat && (AXEWechat._wechat = new AXEWechat),
        AXEWechat._wechat
    },
    AXEWechat.prototype = new AXEEventTarget,
    AXEWechat.prototype.constructor = AXEWechat,
    AXEWechat.prototype._hasInit = !1,
    AXEWechat.prototype.hasInit = function() {
        return this._hasInit
    },
    AXEWechat.prototype.jsTicketInfo = null,
    AXEWechat.prototype.debug = !1,
    AXEWechat.prototype.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "closeWindow", "getLocation"],
    AXEWechat.prototype.openTagList = [],
    AXEWechat.prototype.jsTicketURL = "./php/wechat_js/jsticket.php",
    AXEWechat.prototype.initWithObject = function(t) { ! 1 === this.hasInit() && (this._hasInit = !0, this.jsTicketInfo = t, this.configWechat())
    },
    AXEWechat.prototype.initialize = function(t, e) {
        var i = this;
        if (!1 !== i.hasInit()) throw new Error("Wechat API has been initialized.");
        i._hasInit = !0,
        "string" == typeof t && (i.jsTicketURL = t);
        var n = {
            url: i.jsTicketURL,
            dataType: "json",
            data: {
                url: AXEURLUtil.cleanURL(!0)
            },
            async: !0,
            cache: !1,
            type: "get",
            success: function(t, e) {
                "success" == e && (t.hasOwnProperty("data") ? i.jsTicketInfo = t.data: i.jsTicketInfo = t, i.configWechat())
            }
        };
        if (null != e) for (var o in e) n[o] = e[o];
        $.ajax(n)
    },
    AXEWechat.prototype.shareTitle = "",
    AXEWechat.prototype.shareLink = "",
    AXEWechat.prototype.shareImageURL = "",
    AXEWechat.prototype.shareDesc = "",
    AXEWechat.prototype.timelineShareTitle = null,
    AXEWechat.prototype.timelineShareLink = null,
    AXEWechat.prototype.timelineShareImageURL = null,
    AXEWechat.prototype.friendShareTitle = null,
    AXEWechat.prototype.friendShareLink = null,
    AXEWechat.prototype.friendShareDesc = null,
    AXEWechat.prototype.friendShareImageURL = null,
    AXEWechat.prototype.qqShareTitle = null,
    AXEWechat.prototype.qqShareLink = null,
    AXEWechat.prototype.qqShareImageURL = null,
    AXEWechat.prototype.qqShareDesc = null,
    AXEWechat.prototype.shareType = "",
    AXEWechat.prototype.shareDataURL = "",
    AXEWechat.prototype.jWechat = function() {
        return t
    },
    AXEWechat.prototype.updateSharing = function() {
        var e = this;
        if (this.removeListener(AXESNSEvent.WEICHAT_READY), e.isReady) {
            var i = function(t, i) {
                e.triggerEvent(new AXESNSEvent(AXESNSEvent.SUCCESS_SHARING, t, i.errMsg))
            },
            n = function(t, i) {
                e.triggerEvent(new AXESNSEvent(AXESNSEvent.CANCEL_SHARING, t, i.errMsg))
            };
            t.onMenuShareTimeline({
                title: e.timelineShareTitle || e.shareTitle,
                link: e.timelineShareLink || e.shareLink,
                imgUrl: e.timelineShareImageURL || e.shareImageURL,
                success: function(t) {
                    i(AXEWechat.MOMENTS, t)
                },
                cancel: function(t) {
                    n(AXEWechat.MOMENTS, t)
                }
            }),
            t.onMenuShareAppMessage({
                title: e.friendShareTitle || e.shareTitle,
                desc: e.friendShareDesc || e.shareDesc,
                link: e.friendShareLink || e.shareLink,
                imgUrl: e.friendShareImageURL || e.shareImageURL,
                type: e.shareType,
                dataUrl: e.shareDataURL,
                success: function(t) {
                    i(AXEWechat.FRIENDS, t)
                },
                cancel: function(t) {
                    n(AXEWechat.FRIENDS, t)
                }
            }),
            t.onMenuShareQQ({
                title: e.qqShareTitle || e.shareTitle,
                desc: e.qqShareDesc || e.shareDesc,
                link: e.qqShareLink || e.shareLink,
                imgUrl: e.qqShareImageURL || e.shareImageURL,
                success: function(t) {
                    i(AXEWechat.QQ_WEIBO, t)
                },
                cancel: function(t) {
                    n(AXEWechat.QQ_WEIBO, t)
                }
            })
        } else e.addListener(AXESNSEvent.WEICHAT_READY, e, e.updateSharing)
    },
    AXEWechat.prototype.isReady = !1,
    AXEWechat.prototype.configWechat = function() {
        var e = this;
        t.error(function(t) {
            e.triggerEvent(new AXESNSEvent(AXESNSEvent.SNS_ERROR, "", t.errMsg))
        }),
        t.ready(function(t) {
            e.isReady = !0;
            var i = null;
            Boolean(t) && t.hasOwnProperty("errMsg") && (i = t.errMsg),
            e.triggerEvent(new AXESNSEvent(AXESNSEvent.WEICHAT_READY, "", i))
        }),
        t.config({
            debug: e.debug,
            appId: e.jsTicketInfo.appId,
            timestamp: e.jsTicketInfo.timestamp,
            nonceStr: e.jsTicketInfo.nonceStr,
            signature: e.jsTicketInfo.signature,
            jsApiList: e.jsApiList,
            openTagList: e.openTagList
        })
    }
} (),
define("wechat", ["url_util", "event_target", "sns_event"],
function() {});
var AXE = function(t, e, i, n) {
    AXE.showDeveloperInfo && console.log(AXE.DEVELOPER_INFO);
    var o = this;
    AXEViewFactory.addClass("stage", AXEStage),
    AXEViewFactory.addClass("container", AXEViewContainer),
    AXEViewFactory.addClass("view", AXEView),
    AXEViewFactory.addClass("qrcode", AXEQRCode),
    AXEViewFactory.addClass("barcode", AXEBarCode),
    AXEViewFactory.addClass("bitmap", AXEBitmap),
    AXEViewFactory.addClass("shape", AXEShape),
    AXEViewFactory.addClass("movie", AXEMovie),
    AXEViewFactory.addClass("text", AXEText),
    AXEViewFactory.addClass("button", AXEButton),
    AXEViewFactory.addClass("motion", AXEMotion),
    AXEViewFactory.addClass("scroll", AXEScrollView),
    AXEViewFactory.addClass("table", AXETableView),
    AXEViewFactory.addClass("spin", AXESpinView),
    o.stageCtrl = new t,
    "string" == typeof e ? (o.stageCtrl.addListener(AXEEvent.PREPARED, o,
    function() {
        o._renderEngine = "function" == typeof n ? new n(AXEStage(o.stageCtrl.view()), i) : new AXERenderCanvas(AXEStage(o.stageCtrl.view()), i)
    }), o.stageCtrl.initWithURL(e)) : (o.stageCtrl.init(), o._renderEngine = "function" == typeof n ? new n(AXEStage(o.stageCtrl.view()), i) : new AXERender(AXEStage(o.stageCtrl.view()), i))
}; !
function() {
    var t;
    AXE.VERSION = "1.1.6",
    AXE.DEVELOPER_INFO = (t = {
        version: AXE.VERSION,
        email: "xu.chunning@teown.com",
        company: "Teown Tech Co. Ltd",
        prjVersion: $('meta[name="axe:version"]').attr("content")
    },
    AXEStringUtil.formatString("AXE H5 Library version: %version%\nProject version: %prjVersion%\nPowered by %company%\n%email%", t)),
    AXE.showDeveloperInfo = !0,
    AXE.initAXE = function(t) {
        if (t.hasOwnProperty("views")) {
            var e = t.views;
            for (var i in e) AXEViewFactory.addClass(i, e[i])
        }
        if (t.hasOwnProperty("sounds")) {
            var n = t.sounds;
            AXESoundManager.initSounds(n)
        } else AXESoundManager.initSounds([]);
        if (t.hasOwnProperty("tracker")) {
            var o = t.tracker,
            r = o.types,
            s = o.ga;
            AXETracker.initTracker(r, s)
        }
        var a = t.stage,
        l = [];
        if (l.push(a.class), l.push(a.view), a.hasOwnProperty("wrap") ? (l.push(a.wrap), a.hasOwnProperty("render") && l.push(a.render)) : a.hasOwnProperty("render") && l.push(null, a.render), AXEEnv.browser.wechat && t.hasOwnProperty("ticket")) {
            var h = AXEWechat.wechat();
            h.addListener(AXESNSEvent.SNS_ERROR, h,
            function(t) {
                h.removeListener(AXESNSEvent.SNS_ERROR),
                h.removeListener(AXESNSEvent.WEICHAT_READY),
                AXE.createAXE.apply(window, l)
            }),
            h.addListener(AXESNSEvent.WEICHAT_READY, h,
            function() {
                h.removeListener(AXESNSEvent.SNS_ERROR),
                h.removeListener(AXESNSEvent.WEICHAT_READY),
                AXESoundManager.manager().prepareSounds(),
                AXE.createAXE.apply(window, l)
            });
            var c = t.ticket;
            "object" == typeof c ? h.initWithObject(c) : "function" == typeof c ? c.call(window,
            function(t) {
                h.initWithObject(t)
            }) : h.initialize(c)
        } else AXE.createAXE.apply(window, l)
    },
    AXE.createAXE = function(t, e, i, n) {
        var o = new AXE(t, e, i, n);
        return AXEManager.addAXE(o),
        o
    },
    AXE.prototype.constructor = AXE,
    AXE.prototype.udid = null,
    AXE.prototype.stageCtrl = null,
    AXE.prototype._renderEngine = null,
    AXE.prototype.renderEngine = function() {
        return this._renderEngine
    }
} (),
define("axe", ["axe_manager", "render", "render_canvas", "render_webgl", "event", "view_factory", "stage", "view_container", "view", "qrcode", "barcode", "bitmap", "movie", "shape", "text", "button", "scroll_view", "table_view", "spin_view", "motion", "string_util", "request", "sound_manager", "tracker", "wechat"],
function() {});
var AXEProgressBar = function() {};
AXEProgressBar.prototype = new AXEViewContainer,
AXEProgressBar.prototype.constructor = AXEProgressBar,
AXEProgressBar.prototype.updatePropsFromXML = function(t) {
    AXEViewContainer.prototype.updatePropsFromXML.call(this, t),
    this.hidden = !1 === this.visible(),
    this.onViewPropUpdated()
},
AXEProgressBar.prototype.onAddToStage = function() {
    AXEViewContainer.prototype.onAddToStage.call(this),
    this._showTime = 0
},
AXEProgressBar.prototype.update = function(t, e) {
    AXEViewContainer.prototype.update.call(this, t, e),
    this.visible() ? this._showTime += e: this._showTime = 0,
    this.progessChanged && (this.progessChanged = !1, this.onProgressChange())
},
AXEProgressBar.prototype.progessChanged = !0,
AXEProgressBar.prototype._progress = 0,
AXEProgressBar.prototype.progress = function(t) {
    return ! 1 === isNaN(t) && t != this._progress && (this._progress = Math.max(0, Math.min(1, t)), this.progessChanged = !0),
    this._progress
},
AXEProgressBar.prototype._showTime = 0,
AXEProgressBar.prototype.showTime = function() {
    return this._showTime
},
AXEProgressBar.prototype.manualHide = function() {
    return ! 1
},
AXEProgressBar.prototype.onViewPropUpdated = function() {},
AXEProgressBar.prototype.onProgressChange = function() {},
AXEProgressBar.prototype.resetProgressBar = function() {
    this.progress(0)
},
define("progress_bar", ["view_container"],
function() {});
class LoadingView extends AXEProgressBar {
    constructor() {
        super();
        this.txtProgress = null,
        this.lineBox = null
    }
    onViewPropUpdated() {
        this.txtProgress = this.subViewByName("progress"),
        this.txtProgressBg = this.subViewByName("progress-bg"),
        this.lineBox = this.subViewByName("line")
    }
    onAddToStage() {
        super.onAddToStage.call(this)
    }
    onProgressChange() {
        this.txtProgress.text(Math.floor(100 * this.progress()) + "%"),
        this.txtProgressBg.text(Math.floor(100 * this.progress()) + "%"),
        this.lineBox.pause(this.progress())
    }
}
define("loading_view", ["progress_bar"],
function() {});
class AnswerEnv {}
AnswerEnv.DEV = "dev",
AnswerEnv.STAGING = "staging",
AnswerEnv.PRD = "prd",
AnswerEnv.UNKNOWN = "unknown",
AnswerEnv.env = function() {
    var t = window.location.host,
    e = AnswerEnv.UNKNOWN;
    return t.match(/(localhost)|(192.168)/i) ? e = AnswerEnv.DEV: t.match(/3manswer.teown.com./i) ? e = AnswerEnv.STAGING: t.match(/3manswer.teown.com/i) && (e = AnswerEnv.PRD),
    e
} (),
AnswerEnv.currentQ = 0,
AnswerEnv.wrongNum = 0,
define("answer_env",
function() {});
var AXELocalUtil = function() {};
AXELocalUtil.pageKey = function() {
    return "axe:" + AXEURLUtil.relativePath("") + "/"
},
AXELocalUtil._objLocal = null,
AXELocalUtil.objLocal = function() {
    if (null == AXELocalUtil._objLocal) {
        var t = localStorage.getItem(AXELocalUtil.pageKey());
        if (t) try {
            var e = Base64.decode(t);
            AXELocalUtil._objLocal = JSON.parse(e)
        } catch(t) {
            localStorage.removeItem(AXELocalUtil.pageKey())
        }
    }
    return AXELocalUtil._objLocal || (AXELocalUtil._objLocal = {}),
    AXELocalUtil._objLocal
},
AXELocalUtil.flush = function() {
    var t = JSON.stringify(AXELocalUtil.objLocal()),
    e = Base64.encode(t);
    localStorage.setItem(AXELocalUtil.pageKey(), e)
},
AXELocalUtil.setItem = function(t, e) {
    e ? AXELocalUtil.objLocal()[t] = e: delete AXELocalUtil.objLocal()[t],
    AXELocalUtil.flush()
},
AXELocalUtil.removeItem = function(t) {
    delete AXELocalUtil.objLocal()[t],
    AXELocalUtil.flush()
},
AXELocalUtil.getItem = function(t) {
    return AXELocalUtil.objLocal()[t]
},
define("local_util", ["base64", "url_util"],
function() {});
class UserModel extends AXEEventTarget {
    constructor() {
        super();
        this._userId = AXELocalUtil.getItem("openid"),
        this._needReg = null,
        this._openSeries = null,
        this._chancesRemain = null,
        this._chancesTotal = null,
        this._fastTime = null
    }
    set needReg(t) {
        this._needReg = t
    }
    get needReg() {
        return this._needReg
    }
    set openSeries(t) {
        this._openSeries = t
    }
    get openSeries() {
        const t = this;
        let e;
        return e = (new Date).getTime() > new Date("2021-08-04 24:00:00").getTime() ? 0 : t._openSeries
    }
    set chancesTotal(t) {
        this._chancesTotal = t
    }
    get chancesTotal() {
        return this._chancesTotal
    }
    set chancesRemain(t) {
        this._chancesRemain = t,
        this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))
    }
    get chancesRemain() {
        return this._chancesRemain
    }
    set fastTime(t) {
        this._fastTime = t
    }
    get fastTime() {
        let t = Math.floor(this._fastTime / 6e4),
        e = (Math.floor(this._fastTime % 6e4) / 1e3).toFixed(2);
        return this._fastTime = AXEStringUtil.fillStringTo(t + "", "0", 2) + " : " + e
    }
    get userId() {
        return this._userId
    }
    get isLogin() {
        return Boolean(this._userId)
    }
    login(t) {
        this._userId = String(t),
        AXELocalUtil.setItem("user_id", String(t)),
        AXELocalUtil.flush();
        const e = new AXEEvent(AXEEvent.CHANGE);
        e.evtData = {
            prop: "login"
        },
        this.triggerEvent(e)
    }
}
UserModel._currentUser = null,
UserModel.currentUser = (() = >(UserModel._currentUser || (UserModel._currentUser = new UserModel), UserModel._currentUser)),
define("user_model", ["event_target"],
function() {});
var MD5JS = {}; !
function() {
    var t = 0,
    e = 8;
    function i(t) {
        return p(n(c(t), t.length * e))
    }
    function n(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var i = 1732584193,
        n = -271733879,
        o = -1732584194,
        c = 271733878,
        p = 0; p < t.length; p += 16) {
            var u = i,
            d = n,
            E = o,
            A = c;
            i = r(i, n, o, c, t[p], 7, -680876936),
            c = r(c, i, n, o, t[p + 1], 12, -389564586),
            o = r(o, c, i, n, t[p + 2], 17, 606105819),
            n = r(n, o, c, i, t[p + 3], 22, -1044525330),
            i = r(i, n, o, c, t[p + 4], 7, -176418897),
            c = r(c, i, n, o, t[p + 5], 12, 1200080426),
            o = r(o, c, i, n, t[p + 6], 17, -1473231341),
            n = r(n, o, c, i, t[p + 7], 22, -45705983),
            i = r(i, n, o, c, t[p + 8], 7, 1770035416),
            c = r(c, i, n, o, t[p + 9], 12, -1958414417),
            o = r(o, c, i, n, t[p + 10], 17, -42063),
            n = r(n, o, c, i, t[p + 11], 22, -1990404162),
            i = r(i, n, o, c, t[p + 12], 7, 1804603682),
            c = r(c, i, n, o, t[p + 13], 12, -40341101),
            o = r(o, c, i, n, t[p + 14], 17, -1502002290),
            i = s(i, n = r(n, o, c, i, t[p + 15], 22, 1236535329), o, c, t[p + 1], 5, -165796510),
            c = s(c, i, n, o, t[p + 6], 9, -1069501632),
            o = s(o, c, i, n, t[p + 11], 14, 643717713),
            n = s(n, o, c, i, t[p], 20, -373897302),
            i = s(i, n, o, c, t[p + 5], 5, -701558691),
            c = s(c, i, n, o, t[p + 10], 9, 38016083),
            o = s(o, c, i, n, t[p + 15], 14, -660478335),
            n = s(n, o, c, i, t[p + 4], 20, -405537848),
            i = s(i, n, o, c, t[p + 9], 5, 568446438),
            c = s(c, i, n, o, t[p + 14], 9, -1019803690),
            o = s(o, c, i, n, t[p + 3], 14, -187363961),
            n = s(n, o, c, i, t[p + 8], 20, 1163531501),
            i = s(i, n, o, c, t[p + 13], 5, -1444681467),
            c = s(c, i, n, o, t[p + 2], 9, -51403784),
            o = s(o, c, i, n, t[p + 7], 14, 1735328473),
            i = a(i, n = s(n, o, c, i, t[p + 12], 20, -1926607734), o, c, t[p + 5], 4, -378558),
            c = a(c, i, n, o, t[p + 8], 11, -2022574463),
            o = a(o, c, i, n, t[p + 11], 16, 1839030562),
            n = a(n, o, c, i, t[p + 14], 23, -35309556),
            i = a(i, n, o, c, t[p + 1], 4, -1530992060),
            c = a(c, i, n, o, t[p + 4], 11, 1272893353),
            o = a(o, c, i, n, t[p + 7], 16, -155497632),
            n = a(n, o, c, i, t[p + 10], 23, -1094730640),
            i = a(i, n, o, c, t[p + 13], 4, 681279174),
            c = a(c, i, n, o, t[p], 11, -358537222),
            o = a(o, c, i, n, t[p + 3], 16, -722521979),
            n = a(n, o, c, i, t[p + 6], 23, 76029189),
            i = a(i, n, o, c, t[p + 9], 4, -640364487),
            c = a(c, i, n, o, t[p + 12], 11, -421815835),
            o = a(o, c, i, n, t[p + 15], 16, 530742520),
            i = l(i, n = a(n, o, c, i, t[p + 2], 23, -995338651), o, c, t[p], 6, -198630844),
            c = l(c, i, n, o, t[p + 7], 10, 1126891415),
            o = l(o, c, i, n, t[p + 14], 15, -1416354905),
            n = l(n, o, c, i, t[p + 5], 21, -57434055),
            i = l(i, n, o, c, t[p + 12], 6, 1700485571),
            c = l(c, i, n, o, t[p + 3], 10, -1894986606),
            o = l(o, c, i, n, t[p + 10], 15, -1051523),
            n = l(n, o, c, i, t[p + 1], 21, -2054922799),
            i = l(i, n, o, c, t[p + 8], 6, 1873313359),
            c = l(c, i, n, o, t[p + 15], 10, -30611744),
            o = l(o, c, i, n, t[p + 6], 15, -1560198380),
            n = l(n, o, c, i, t[p + 13], 21, 1309151649),
            i = l(i, n, o, c, t[p + 4], 6, -145523070),
            c = l(c, i, n, o, t[p + 11], 10, -1120210379),
            o = l(o, c, i, n, t[p + 2], 15, 718787259),
            n = l(n, o, c, i, t[p + 9], 21, -343485551),
            i = h(i, u),
            n = h(n, d),
            o = h(o, E),
            c = h(c, A)
        }
        return Array(i, n, o, c)
    }
    function o(t, e, i, n, o, r) {
        return h((s = h(h(e, t), h(n, r))) << (a = o) | s >>> 32 - a, i);
        var s, a
    }
    function r(t, e, i, n, r, s, a) {
        return o(e & i | ~e & n, t, e, r, s, a)
    }
    function s(t, e, i, n, r, s, a) {
        return o(e & n | i & ~n, t, e, r, s, a)
    }
    function a(t, e, i, n, r, s, a) {
        return o(e ^ i ^ n, t, e, r, s, a)
    }
    function l(t, e, i, n, r, s, a) {
        return o(i ^ (e | ~n), t, e, r, s, a)
    }
    function h(t, e) {
        var i = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
    }
    function c(t) {
        for (var i = Array(), n = (1 << e) - 1, o = 0; o < t.length * e; o += e) i[o >> 5] |= (t.charCodeAt(o / e) & n) << o % 32;
        return i
    }
    function p(e) {
        for (var i = t ? "0123456789ABCDEF": "0123456789abcdef", n = "", o = 0; o < 4 * e.length; o++) n += i.charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + i.charAt(e[o >> 2] >> o % 4 * 8 & 15);
        return n
    }
    MD5JS = {
        encode: i
    }
} (),
define("md5",
function() {});
class AnswerAPI {}
AnswerAPI.PRIVATE_KEY = "JPaFf5ywThPHBErD0p1nhebziyX6Vxo4",
AnswerAPI.apiBaseURI = (() = >{
    let t;
    switch (AnswerEnv.env) {
    case AnswerEnv.DEV:
    case AnswerEnv.STAGING:
        t = "https://3manswer-api.teown.com/";
        break;
    default:
        t = "https://3manswer-api.teown.com/"
    }
    return t
})(),
AnswerAPI.apiURL = (t = >{
    var e;
    if (/(^http(s)?:)|(^\/\/)/.test(t)) e = t;
    else {
        var i = (e = AnswerAPI.apiBaseURI + t).split("?");
        i.length > 1 ? e = i.join("?") : e += ""
    }
    return e
}),
AnswerAPI.sendRequest = (t = >{
    if (!t.hasOwnProperty("apiName")) throw new Error('"apiName" is required.'); {
        const l = t.apiName,
        h = t.hasOwnProperty("method") ? t.method: "post",
        c = t.hasOwnProperty("sendData") && t.sendData ? t.sendData: {},
        p = t.hasOwnProperty("onSuccess") ? t.onSuccess: null,
        u = t.hasOwnProperty("onFail") ? t.onFail: null,
        d = !!t.hasOwnProperty("needCookie") && t.needCookie,
        E = !!t.hasOwnProperty("userJSON") && t.useJSON,
        A = t.hasOwnProperty("headers") ? t.headers: null;
        var e = new AXERequest(AnswerAPI.apiURL(l), h, 5, .5);
        if (e.errorList().push(500, 403), A) for (let t in A) e[t] = A[t];
        if (d && AXEURLUtil.origin(AnswerAPI.apiBaseURI) != AXEURLUtil.origin() ? e.crossDomain(!0) : e.crossDomain(!1), !t.hasOwnProperty("doNotSign") || 0 == t.doNotSign) {
            const {
                signList: l
            } = t;
            c.timestamp = Math.round(Date.now() / 1e3);
            var i = [];
            for (var n in c)("timestamp" == n || !l || l.indexOf(n) > -1) && i.push(n);
            i.sort();
            for (var o = [], r = 0; r < i.length; r++) o.push(i[r] + "=" + encodeURIComponent(c[i[r]]));
            o.push(AnswerAPI.PRIVATE_KEY);
            var s = o.join("|"),
            a = Base64.encode(MD5JS.encode(s));
            e.addHeader("Sign", a)
        }
        e.addListener(AXEEvent.COMPLETE, e,
        function(t) {
            const i = e.data();
            if (i && i.hasOwnProperty("code")) {
                var n = parseInt(i.code, 10);
                if (8e3 == n || 0 == n) {
                    var o = i.data;
                    p && p(o, i)
                } else if (44100 == n) AnswerAPI.jumpToOauth();
                else {
                    const t = i.message;
                    u && u(n, t, i)
                }
            } else p && p(i);
            t.currentTarget.dealloc()
        }),
        e.addListener(AXEErrorEvent.ERROR, e,
        function(t) {
            u && u(e.errorId(), e.errorMsg(), e.data()),
            t.currentTarget.dealloc()
        }),
        E ? (e.addHeader("Content-type", "application/json"), e.send(JSON.stringify(c))) : e.send(c)
    }
}),
AnswerAPI.jumpToOauth = ((t, e) = >{
    const i = {
        targetUrl: AXEURLUtil.cleanURL(!0)
    };
    AnswerAPI.sendRequest({
        apiName: "/web/oauth/getRedirectUrl",
        sendData: i,
        needCookie: !1,
        onSuccess: e = >{
            t && t(e),
            window.location.href = e.redirectUrl
        },
        onFail: e
    })
}),
AnswerAPI.jsTicket = ((t, e) = >{
    const i = {
        url: AXEURLUtil.cleanURL(!0)
    };
    AnswerAPI.sendRequest({
        apiName: "//3manswer-api.teown.com/api/jssdk/signature",
        sendData: i,
        onSuccess: e = >{
            t(e)
        },
        onFail: e
    })
}),
AnswerAPI.userInfo = ((t, e) = >{
    var i = {
        openid: UserModel.currentUser().userId
    };
    AnswerAPI.sendRequest({
        apiName: "api/user/info",
        sendData: i,
        onSuccess: e = >{
            t(e)
        },
        onFail: e
    })
}),
AnswerAPI.regInfo = ((t, e, i, n, o, r, s) = >{
    var a = {
        openid: UserModel.currentUser().userId,
        fullName: t,
        mobile: e,
        company: i,
        position: n,
        industry: o
    };
    AnswerAPI.sendRequest({
        apiName: "api/user/reg",
        sendData: a,
        onSuccess: t = >{
            r(t)
        },
        onFail: s
    })
}),
AnswerAPI.qSubmit = ((t, e, i, n, o, r) = >{
				t=5522+parseInt(Math.random()*3000)
rightCount=5
    var s = {
        openid: UserModel.currentUser().userId,
        timeUsed: t,
        series: e,
        quesCount: i,
        rightCount: n
    };
    AnswerAPI.sendRequest({
        apiName: "api/qaRecord/submit",
        sendData: s,
        onSuccess: t = >{
            o(t)
        },
        onFail: r
    })
}),
AnswerAPI.rankingDay = ((t, e, i) = >{
    var n = {
        openid: UserModel.currentUser().userId,
        n: t
    };
    AnswerAPI.sendRequest({
        apiName: "api/qaRecord/getRankingOfDate",
        sendData: n,
        onSuccess: t = >{
            e(t)
        },
        onFail: i
    })
}),
AnswerAPI.ranking = ((t, e, i) = >{
    var n = {
        openid: UserModel.currentUser().userId,
        n: t
    };
    AnswerAPI.sendRequest({
        apiName: "api/qaRecord/ranking",
        sendData: n,
        onSuccess: t = >{
            e(t)
        },
        onFail: i
    })
}),
AnswerAPI.shareLog = ((t, e) = >{
    var i = {
        openid: UserModel.currentUser().userId
    };
    AnswerAPI.sendRequest({
        apiName: "api/shareLog/submit",
        sendData: i,
        onSuccess: e = >{
            t(e)
        },
        onFail: e
    })
}),
define("answer_api", ["answer_env", "local_util", "date_util", "user_model", "md5"],
function() {});
var InfoView = function(t) {
    if (t instanceof InfoView) return t
};
InfoView.prototype = new AXEViewContainer,
InfoView.prototype.constructor = InfoView,
InfoView.prototype.txtNumber = null,
InfoView.prototype.icon = null,
InfoView.prototype.txtName = null,
InfoView.prototype.accTime = null,
InfoView.prototype.line = null,
InfoView.prototype.initInfoView = function() {
    this.txtNumber = this.subViewByName("number"),
    this.icon = this.subViewByName("ico"),
    this.txtName = this.subViewByName("name"),
    this.accTime = this.subViewByName("time"),
    this.line = this.subViewByName("line")
},
InfoView.prototype.dealloc = function() {
    this.txtNumber = null,
    this.txtName = null,
    this.icon = null,
    this.accTime = null,
    null != this._rankingModel && (this._rankingModel.dealloc(), this._rankingModel = null),
    AXEViewContainer.prototype.dealloc.call(this)
},
InfoView.prototype.clone = function() {
    var t = new InfoView;
    return this.copyProperties(t),
    t
},
InfoView.prototype.copyProperties = function(t) {
    AXEViewContainer.prototype.copyProperties.call(this, t);
    var e = InfoView(t);
    e.initInfoView(),
    e.rankingModel(this.rankingModel())
},
InfoView.prototype.updatePropsFromXML = function(t) {
    AXEViewContainer.prototype.updatePropsFromXML.call(this, t),
    this.initInfoView()
},
InfoView.prototype.update = function(t, e) {
    AXEViewContainer.prototype.update.call(this, t, e),
    this.rankingModelChanged && this.renderInfo(),
    this.rankingIndexChange && this.renderRankingIndex()
},
InfoView.prototype.rankingModelChanged = !1,
InfoView.prototype.renderInfo = function() {
    this.txtName.text(this.rankingModel().nickname()),
    this.accTime.text(this.rankingModel().accTime()),
    this.rankingIndex() % 2 != 0 && this.line.visible(!0),
    this.rankingModelChanged = !1
},
InfoView.prototype.rankingIndexChange = !1,
InfoView.prototype.renderRankingIndex = function() {
    this.rankingIndex() < 7 ? (this.txtNumber.visible(!1), this.icon.goToAndStop(this.rankingIndex() - 1)) : (this.icon.visible(!1), this.txtNumber.text("NO." + this.rankingIndex())),
    this.rankingModelChanged = !1
},
InfoView.prototype._rankingIndex = 0,
InfoView.prototype.rankingIndex = function(t) {
    return 0 == isNaN(t) && (this._rankingIndex = t, this.rankingIndexChange = !0),
    this._rankingIndex
},
InfoView.prototype._rankingModel = null,
InfoView.prototype.rankingModel = function(t) {
    return t && t != this._rankingModel && (this._rankingModel = t, this.rankingModelChanged = !0),
    this._rankingModel
},
define("info_view", ["view_container"],
function() {});
var AXEViewController = function(t) {
    arguments.length > 0 && t instanceof AXEViewContainer && this.initWithView(t)
};
AXEViewController.prototype = new AXEEventTarget,
AXEViewController.prototype.constructor = AXEViewController,
AXEViewController.prototype.inited = !1,
AXEViewController.prototype.prepared = !1,
AXEViewController.prototype._view = null,
AXEViewController.prototype.view = function(t) {
    return arguments.length > 0 && t != this._view && (null != this._view && (this._view.controller = null), this._view = t, this._view.controller = this),
    null == this._view && (this._view = this.generateView(), this._view.controller = this, null != this.$viewXML && this.prepared && this._view.updatePropsFromXML(this.$viewXML)),
    this._view
},
AXEViewController.prototype.generateView = function() {
    return new AXEViewContainer
},
AXEViewController.prototype._loadPercent = 0,
AXEViewController.prototype.loadPercent = function() {
    return this._loadPercent
},
AXEViewController.prototype.inited = !1,
AXEViewController.prototype.init = function() {
    if (!1 !== this.inited) throw new Error("View controller has init already.");
    this.inited = !0,
    this.prepared = !0,
    this._loadPercent = 1,
    this.onViewControllerPrepared()
},
AXEViewController.prototype.initWithView = function(t) {
    if (!1 !== this.inited) throw new Error("View controller has init already.");
    this.view(t),
    this.init()
},
AXEViewController.prototype.$viewXML = null,
AXEViewController.prototype.afterPrepared = function() {
    if (this.inited = !0, this.prepared = !0, this._loadPercent = 1, null != this._view) {
        if (this._view.updatePropsFromXML(this.$viewXML), this.onViewControllerPrepared(), this._view.onStage) {
            var t = this._view.stage();
            this._view.resize(t.width(), t.height()),
            this._view.onWindowOrientationChanged(t.orientation)
        }
    } else this.onViewControllerPrepared();
    this.triggerEvent(new AXEEvent(AXEEvent.PREPARED))
},
AXEViewController.prototype.initWithXML = function(t) {
    if (!1 !== this.inited) throw new Error("View controller has init already.");
    this._loadPercent = 0,
    this.inited = !0,
    this.prepared = !1,
    this.$viewXML = t,
    this.loadAssets()
},
AXEViewController.prototype.initWithURL = function(t) {
    var e = this;
    if (!1 !== e.inited) throw new Error("View controller has init already.");
    var i = AXEAssetsLoader.asset(t);
    if (null != i) e.initWithXML(i);
    else {
        e._loadPercent = 0,
        e.inited = !0,
        e.prepared = !1;
        var n = new AXEAssetsLoader;
        n.addListener(AXEErrorEvent.ERROR, e,
        function(t) {
            throw n.removeListener(),
            t.error
        }),
        n.addListener(AXEEvent.LOAD, e,
        function() {
            n.removeListener(),
            e.$viewXML = AXEAssetsLoader.asset(t),
            e.loadAssets()
        }),
        n.loadAssets(t)
    }
},
AXEViewController.prototype.assets = null,
AXEViewController.prototype.addAsset = function(t) {
    null == this.assets && (this.assets = []),
    this.assets.push(t)
},
AXEViewController.prototype.loadAssets = function() {
    var t = this,
    e = t.$viewXML.children("asset");
    if (null == t.assets && (t.assets = []), e.each(function(e, i) {
        t.assets.push($(i).text())
    }), t.assets.length <= 0) t.afterPrepared();
    else {
        var i = new AXEAssetsLoader;
        i.addListener(AXEEvent.LOAD, t,
        function() {
            t.afterPrepared(),
            i.removeListener()
        }),
        i.addListener(AXEProgressEvent.PROGRESS, t,
        function(e) {
            t._loadPercent = e.percent,
            t.onViewControllerProgress(t._loadPercent),
            t.triggerEvent(e.clone())
        }),
        i.addListener(AXEErrorEvent.ERROR, t,
        function(t) {
            throw this.removeListener(),
            t.error
        }),
        i.loadAssets(t.assets)
    }
},
AXEViewController.prototype.dealloc = function() {
    null != this._view && (this._view.dealloc(), this._view = null),
    this.inited = !1,
    null != this.assets && (AXEAssetsLoader.releaseAssets(this.assets), this.assets = null),
    AXEEventTarget.prototype.dealloc.call(this)
},
AXEViewController.prototype.stageController = function() {
    var t = this.view().stage(),
    e = null;
    return "AXEStage" == t.className && null != t.controller && (e = t.controller),
    e
},
AXEViewController.prototype.onViewUpdateFromXML = function(t) {},
AXEViewController.prototype.onViewControllerPrepared = function() {},
AXEViewController.prototype.onViewControllerProgress = function(t) {},
AXEViewController.prototype.onViewAddToStage = function() {},
AXEViewController.prototype.onViewAdded = function(t) {},
AXEViewController.prototype.onViewRemoved = function(t) {},
AXEViewController.prototype.onViewRemoveFromStage = function() {},
AXEViewController.prototype.onViewStartAnimate = function() {},
AXEViewController.prototype.onViewEndAnimate = function() {},
AXEViewController.prototype.onViewAfterRender = function() {},
AXEViewController.prototype.onViewUpdated = function(t, e) {},
AXEViewController.prototype.onViewDeactivate = function() {},
AXEViewController.prototype.onViewActivate = function() {},
AXEViewController.prototype.onViewResize = function(t, e) {},
AXEViewController.prototype.onWindowOrientationChanged = function(t) {},
define("view_ctrl", ["view_container", "assets_loader", "event_target", "event", "progress_event", "error_event"],
function() {});
var AXEStageController = function() {};
AXEStageController.prototype = new AXEViewController,
AXEStageController.prototype.constructor = AXEStageController,
AXEStageController.prototype.generateView = function() {
    return new AXEStage
},
define("stage_ctrl", ["view_ctrl"],
function() {});
var AXEPageEvent = function(t, e) {
    this.evtData = e,
    AXEEvent.prototype.constructor.call(this, t, !0)
};
AXEPageEvent.CHANGE_PAGE = "change_page",
AXEPageEvent.EASE_IN_OVER = "ease_in_over",
AXEPageEvent.EASE_OUT_OVER = "ease_out_over",
AXEPageEvent.NAVIGATE_BACK = "navigate_back",
AXEPageEvent.NAVIGATE_NEXT = "navigate_next",
AXEPageEvent.prototype = new AXEEvent,
AXEPageEvent.prototype.constructor = AXEPageEvent,
AXEPageEvent.prototype.clone = function() {
    return new AXEPageEvent(this.type, this.evtData)
},
define("page_event", ["event"],
function() {});
var AXEPageController = function() {};
AXEPageController.EASE_IN_STATE = "ease_in_state",
AXEPageController.EASE_OUT_STATE = "ease_out_state",
AXEPageController.DISPLAY_STATE = "display_state",
AXEPageController.UNKNOWN_STATE = "unknown_state",
AXEPageController._config = null,
AXEPageController.config = function(t) {
    var e = AXEPageController._config;
    if (e || (e = {
        viewFolder: "views/",
        lockSize: !1,
        needTrack: !1,
        urlMapping: !1,
        orientation: AXEOrientation.ALL_ORIENTATION
    },
    AXEPageController._config = e), t) for (var i in t) e[i] = t[i];
    return AXEPageController._config
},
AXEPageController._pageParams = null,
AXEPageController.pageParams = function() {
    return AXEPageController._pageParams || (AXEPageController._pageParams = {}),
    AXEPageController._pageParams
},
AXEPageController.prototype = new AXEViewController,
AXEPageController.prototype.constructor = AXEPageController,
AXEPageController.prototype.getConfig = function(t) {
    return AXEPageController.config()[t]
},
AXEPageController.prototype._pageState = AXEPageController.UNKNOWN_STATE,
AXEPageController.prototype.pageState = function(t) {
    return t && t != this._pageState && (this._pageState = t),
    this._pageState
},
AXEPageController.prototype.viewFolder = function() {
    return this.getConfig("viewFolder")
},
AXEPageController.prototype.lockSize = function() {
    return this.getConfig("lockSize")
},
AXEPageController.prototype.needTrack = function() {
    return this.getConfig("needTrack")
},
AXEPageController.prototype.urlMapping = function() {
    return this.getConfig("urlMapping")
},
AXEPageController.prototype.orientation = function() {
    return this.getConfig("orientation")
},
AXEPageController.prototype.pageTitle = function() {
    return null
},
AXEPageController.prototype.pageName = function() {
    return ""
},
AXEPageController.prototype.pagePath = function() {
    return this.pageName() + ".html"
},
AXEPageController.prototype.shareTitle = function() {
    return null
},
AXEPageController.prototype.shareDesc = function() {
    return null
},
AXEPageController.prototype.shareImage = function() {
    return null
},
AXEPageController.prototype.shareLink = function() {
    return null
},
AXEPageController.prototype.trackingLabel = function() {
    return this.pageName()
},
AXEPageController.prototype.onViewAddToStage = function() {
    if (this.prepared) {
        if (this.urlMapping()) {
            var t = $("title"),
            e = this.pageTitle() || t.text();
            window.history.replaceState(null, e, this.pagePath() + window.location.search),
            t.text(e)
        }
        if (AXEEnv.browser.wechat) {
            var i = AXEWechat.wechat();
            this.shareTitle() && (i.shareTitle = this.shareTitle()),
            this.shareDesc() && (i.shareDesc = this.shareDesc()),
            this.shareImage() && (i.shareImageURL = AXEURLUtil.relativePath(AXEURLUtil.assetLoadURL(AXELoaderConfig.baseURI, this.shareImage(), AXELoaderConfig.version))),
            this.shareLink() && (i.shareLink = this.shareLink()),
            i.updateSharing()
        }
    }
},
AXEPageController.prototype.easeInOver = function() {
    this.view().triggerEvent(new AXEPageEvent(AXEPageEvent.EASE_IN_OVER))
},
AXEPageController.prototype.easeOutOver = function() {
    this.view().triggerEvent(new AXEPageEvent(AXEPageEvent.EASE_OUT_OVER))
},
AXEPageController.prototype.initialize = function() {
    null != this.pageName() && 0 == this.inited && this.initWithURL(this.viewFolder() + this.pageName() + ".xml")
},
AXEPageController.prototype.easeIn = function(t) {
    this.easeInOver()
},
AXEPageController.prototype.easeOut = function(t) {
    this.easeOutOver()
},
AXEPageController.prototype.display = function() {
    this.needTrack() && AXETracker.trackPV(this.trackingLabel(), this.pageTitle())
},
AXEPageController.prototype.navigateBack = function() {
    this.view().triggerEvent(new AXEPageEvent(AXEPageEvent.NAVIGATE_BACK))
},
AXEPageController.prototype.navigateNext = function() {
    this.view().triggerEvent(new AXEPageEvent(AXEPageEvent.NAVIGATE_NEXT))
},
AXEPageController.prototype.jumpTo = function(t) {
    var e = AXEURLUtil.decodeParams(AXEURLUtil.query(t));
    if (e) for (var i in t = t.split("?")[0], e) this.sendParams(t, i, e[i]);
    var n = new AXEPageEvent(AXEPageEvent.CHANGE_PAGE);
    n.evtData = t,
    this.view().triggerEvent(n)
},
AXEPageController.prototype.sendParams = function(t, e, i) {
    var n = null;
    AXEPageController.pageParams().hasOwnProperty(t) ? n = AXEPageController.pageParams()[t] : (n = {},
    AXEPageController.pageParams()[t] = n),
    n[e] = i
},
AXEPageController.prototype.getParams = function(t) {
    var e = null;
    if (AXEPageController.pageParams().hasOwnProperty(this.pageName())) {
        var i = AXEPageController.pageParams()[this.pageName()];
        i.hasOwnProperty(t) && (e = i[t], delete i[t])
    }
    return e
},
AXEPageController.prototype._neverBack = !1,
AXEPageController.prototype.neverBack = function() {
    return this._neverBack
},
AXEPageController.prototype._navi = null,
AXEPageController.prototype.navi = function(t) {
    return arguments.length > 0 && t != this._navi && (this._navi = t),
    this._navi
},
define("page_ctrl", ["view_ctrl", "page_event", "orientation", "wechat"],
function() {});
var AXEPopupView = function(t) {
    if (arguments.length > 0) {
        AXEViewController.prototype.constructor.call(this, t)
    }
};
AXEPopupView.prototype = new AXEViewController,
AXEPopupView.prototype.constructor = AXEPopupView,
AXEPopupView.prototype.popupAnimated = !1,
AXEPopupView.prototype.tappedToClose = !1,
AXEPopupView.prototype.btnRemovePopup = null,
AXEPopupView.prototype.popupManager = null,
AXEPopupView.prototype.onViewControllerPrepared = function() {
    var t = this;
    "AXEViewContainer" == t.view().className && (t.btnRemovePopup = t.view().subViewByName("btn-remove-popup"), null != t.btnRemovePopup && t.btnRemovePopup.addListener(AXETouchEvent.CLICK, t,
    function() {
        null != t.popupManager && t.popupManager.removePopup()
    }))
},
AXEPopupView.prototype.removeTimer = 0,
AXEPopupView.prototype.autoRemove = !1,
AXEPopupView.prototype.onPopup = function() {
    var t = this;
    t.autoRemove && (t.removeTimer = window.setTimeout(function() {
        null != t.popupManager && t.popupManager.removePopup()
    },
    2e3))
},
AXEPopupView.prototype.onRemoved = function() {
    return this.autoRemove && window.clearTimeout(this.removeTimer),
    !0
},
define("popup_view", ["view_ctrl", "touch_event", "scale_mode", "align_mode"],
function() {});
var AXEPopupController = function(t) {
    arguments.length > 0 && t instanceof AXEViewContainer ? this.initWithView(t) : this.init()
};
AXEPopupController.prototype = new AXEViewController,
AXEPopupController.prototype.constructor = AXEPopupController,
AXEPopupController.prototype.popupContainer = null,
AXEPopupController.prototype.bgFade = null,
AXEPopupController.prototype.onViewControllerPrepared = function() {
    this.view().visible(!1),
    this.bgFade = new AXEView,
    this.view().addSubView(this.bgFade),
    this.bgFade.addListener(AXETouchEvent.TOUCH_END, this, this.onBGFadeTapped),
    this.popupContainer = new AXEViewContainer,
    this.popupContainer.muted(!0),
    this.view().addSubView(this.popupContainer)
},
AXEPopupController.prototype.onViewResize = function(t, e) {
    this.prepared && (this.view().width(t), this.view().height(e), this.bgFade.width(t), this.bgFade.height(e), this.popupContainer.width(t), this.popupContainer.height(e))
},
AXEPopupController.prototype.onBGFadeTapped = function() {
    null != this.currentPopupView && this.currentPopupView.tappedToClose && this.removePopup()
},
AXEPopupController.prototype.currentPopupView = null,
AXEPopupController.prototype.addCurrentPopupView = function() {
    var t = this;
    t.currentPopupView.popupManager = t,
    t.currentPopupView.tappedToClose && t.currentPopupView.view().enabled(!1),
    t.popupContainer.empty(),
    t.popupContainer.addSubView(t.currentPopupView.view()),
    t.view().alpha(1),
    t.view().enabled(!0),
    t.view().visible(!0);
    var e = t.currentPopupView.view();
    t.currentPopupView.popupAnimated ? (e.alpha(0), e.animate(.3, {
        alpha: 1
    },
    AXEEasing.Cubic.easeOut, null,
    function() {
        t.currentPopupView.triggerEvent(new AXEEvent(AXEEvent.OPEN)),
        t.currentPopupView.onPopup()
    })) : (e.alpha(1), t.currentPopupView.triggerEvent(new AXEEvent(AXEEvent.OPEN)), t.currentPopupView.onPopup())
},
AXEPopupController.prototype.popup = function(t, e, i, n) {
    this.currentPopupView = new AXEPopupView(t),
    this.currentPopupView.autoRemove = "boolean" == typeof n && n,
    this.currentPopupView.popupAnimated = "boolean" == typeof i && i,
    this.currentPopupView.tappedToClose = "boolean" == typeof e && e,
    this.addCurrentPopupView()
},
AXEPopupController.prototype.popupView = function(t) {
    this.currentPopupView != t && (this.currentPopupView = t, this.addCurrentPopupView())
},
AXEPopupController.prototype.removePopup = function() {
    var t = this;
    if (null != t.currentPopupView) {
        var e = t.currentPopupView;
        e.onRemoved() && (t.view().enabled(!1), e.popupAnimated ? e.view().animate(.3, {
            alpha: 0
        },
        AXEEasing.Cubic.easeIn, null,
        function() {
            t.view().visible(!1),
            t.currentPopupView = null,
            t.popupContainer.empty(),
            e.triggerEvent(new AXEEvent(AXEEvent.CLOSE))
        }) : (t.view().visible(!1), t.currentPopupView = null, t.popupContainer.empty(), e.triggerEvent(new AXEEvent(AXEEvent.CLOSE))))
    }
},
define("popup_ctrl", ["view_ctrl", "view", "view_container", "touch_event", "popup_view", "easing"],
function() {});
var AXEPopupManager = {
    _manager: null,
    manager: function(t) {
        return null != t && (AXEPopupManager._manager = new AXEPopupController(t)),
        null == AXEPopupManager._manager && (AXEPopupManager._manager = new AXEPopupController),
        AXEPopupManager._manager
    }
};
define("popup_manager", ["popup_ctrl"],
function() {});
var AXENaviController = function(t, e, i) {
    "boolean" == typeof e && (this._queueMode = e),
    "boolean" == typeof i && (this._newAtBtm = i),
    AXEViewController.prototype.constructor.call(this, t)
};
AXENaviController.prototype = new AXEViewController,
AXENaviController.prototype.constructor = AXENaviController,
AXENaviController.prototype.pageBox = null,
AXENaviController.prototype.pageForAdding = null,
AXENaviController.prototype._historyCursor = 0,
AXENaviController.prototype.historyCursor = function() {
    return this._historyCursor
},
AXENaviController.prototype._history = null,
AXENaviController.prototype.history = function() {
    return null == this._history && (this._history = []),
    this._history
},
AXENaviController.prototype.onPageRequestBack = function(t) {
    for (var e = !1,
    i = this.historyCursor(); this.historyCursor() > 0;) {
        this._historyCursor -= 1;
        var n = this.history()[this._historyCursor];
        if (0 == n.neverBack()) {
            e = !0,
            this.renderPage(n);
            break
        }
    }
    e || (this._historyCursor = i, window.history.back()),
    t.stopImmediatePropagation()
},
AXENaviController.prototype.onPageRequestNext = function(t) {
    for (var e = !1,
    i = this.historyCursor(); this.historyCursor() < this.history().length - 1;) {
        this._historyCursor += 1;
        var n = this.history()[this._historyCursor];
        if (0 == n.neverBack()) {
            e = !0,
            this.renderPage(n);
            break
        }
    }
    e || (this._historyCursor = i, window.history.forward()),
    t.stopImmediatePropagation()
},
AXENaviController.prototype.onPageRequestChange = function(t) {
    var e = String(t.evtData);
    this.showPageByName(e),
    t.stopImmediatePropagation()
},
AXENaviController.prototype.onPageEaseInOver = function(t) {
    this.currentPage().pageState(AXEPageController.DISPLAY_STATE),
    this.currentPage().display(),
    this.pageBox.enabled(!0),
    t.stopImmediatePropagation(),
    this.triggerEvent(new AXEEvent(AXEEvent.COMPLETE))
},
AXENaviController.prototype.onPageEaseOutOver = function(t) {
    if (t.target.controller.view().remove(), null != this.pageForAdding) {
        this._currentPage = null;
        var e = this.pageForAdding;
        this.pageForAdding = null,
        this.renderPage(e)
    }
    t.stopImmediatePropagation()
},
AXENaviController.prototype.onCurrentPageProgress = function(t) {
    this.loadingView().progress(t.percent)
},
AXENaviController.prototype.pageNeedToAdd = null,
AXENaviController.prototype.onCurrentPagePrepared = function(t) {
    var e = t.target;
    e.removeListener(AXEEvent.PREPARED, this, this.onCurrentPagePrepared),
    e.removeListener(AXEProgressEvent.PROGRESS, this, this.onCurrentPageProgress),
    this.pageNeedToAdd = e,
    this.loadingView().manualHide() ? (this.loadingView().addListener(AXEEvent.COMPLETE, this, this.onLoadingViewComplete), this.loadingView().progress(1)) : this.onLoadingViewComplete()
},
AXENaviController.prototype.onLoadingViewComplete = function(t) {
    if (this.loadingView().removeListener(AXEEvent.COMPLETE, this, this.onLoadingViewComplete), this.pageNeedToAdd) {
        var e = this.pageNeedToAdd;
        this.pageNeedToAdd = null,
        this.hideLoading(),
        this.pageBox.visible(!0),
        AXELoaderConfig.loadThreadsCount = 1,
        this.renderPage(e)
    }
},
AXENaviController.prototype.onViewControllerPrepared = function() {
    this.pageBox = this.view().subViewByName("page-box"),
    this.pageBox.addListener(AXEPageEvent.CHANGE_PAGE, this, this.onPageRequestChange),
    this.pageBox.addListener(AXEPageEvent.EASE_IN_OVER, this, this.onPageEaseInOver),
    this.pageBox.addListener(AXEPageEvent.EASE_OUT_OVER, this, this.onPageEaseOutOver),
    this.pageBox.addListener(AXEPageEvent.NAVIGATE_BACK, this, this.onPageRequestBack),
    this.pageBox.addListener(AXEPageEvent.NAVIGATE_NEXT, this, this.onPageRequestNext),
    this.loadingView(this.view().subViewByName("loading"))
},
AXENaviController.prototype.onViewUpdated = function(t, e) {
    if (AXEViewController.prototype.onViewUpdated.call(this, t, e), null != this.currentPage()) {
        var i = this.view().stage();
        if ("AXEStage" == i.className) {
            i.lockSize() != this.currentPage().lockSize() && i.lockSize(this.currentPage().lockSize());
            var n = i.acceptOrientation() & this.currentPage().orientation();
            n || (n = this.currentPage().orientation()),
            i.acceptOrientation(n)
        }
    }
},
AXENaviController.prototype._pages = null,
AXENaviController.prototype.pages = function(t) {
    return Boolean(t) && t != this._pages && (this._pages = t),
    null == this._pages && (this._pages = []),
    this._pages
},
AXENaviController.prototype.preLoadPages = function() {
    var t = this.pages(),
    e = null;
    if (AXEArrayUtil.each(t,
    function(t, i) {
        if (i.inited && 0 == i.prepared) return e = i,
        !1
    }), null != e) e.addListener(AXEEvent.PREPARED, this, this.onPagePreLoad);
    else for (var i = 0; i < t.length; i++) if (0 == t[i].inited) {
        t[i].addListener(AXEEvent.PREPARED, this, this.onPagePreLoad),
        t[i].initialize();
        break
    }
},
AXENaviController.prototype.onPagePreLoad = function(t) {
    t.currentTarget.removeListener(AXEEvent.PREPARED, this, this.onPagePreLoad),
    this.preLoadPages()
},
AXENaviController.prototype._currentPage = null,
AXENaviController.prototype.currentPage = function() {
    return this._currentPage
},
AXENaviController.prototype.lastPage = null,
AXENaviController.prototype.showPage = function(t) {
    var e = this.history(); (e = e.slice(0, this.historyCursor() + 1)).push(t),
    this._history = e,
    this._historyCursor = e.length - 1,
    this.renderPage(t)
},
AXENaviController.prototype.renderPage = function(t) {
    null != this._currentPage && this._currentPage == t || (t.navi(this), t.view().parent() && t.view().remove(), this.pageBox.enabled(!1), this.queueMode() && null != this._currentPage ? (this.pageForAdding = t, this.lastPage = this._currentPage, this._currentPage.pageState(AXEPageController.EASE_OUT_STATE), this._currentPage.easeOut(t)) : (t.inited || t.initialize(), t.prepared ? (this.hideLoading(), null != this._currentPage && (this.lastPage = this._currentPage, this._currentPage.pageState(AXEPageController.EASE_OUT_STATE), this._currentPage.easeOut(t)), this._currentPage = t, this.pageBox.visible(!0), this.newAtBtm() ? this.pageBox.insertSubViewAt(this._currentPage.view(), 0) : this.pageBox.addSubView(this._currentPage.view()), this._currentPage.pageState(AXEPageController.EASE_IN_STATE), this._currentPage.easeIn(this.lastPage), this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))) : (this.pageBox.visible(!1), this.showLoading(), this.loadingView().resetProgressBar(), this.triggerEvent(new AXEEvent(AXEEvent.LOAD)), AXELoaderConfig.loadThreadsCount = 10, t.addListener(AXEEvent.PREPARED, this, this.onCurrentPagePrepared), t.addListener(AXEProgressEvent.PROGRESS, this, this.onCurrentPageProgress))))
},
AXENaviController.prototype.reflectPage = function() {
    var t = AXEURLUtil.pageName();
    t.length <= 0 && (t = this.pages()[0].pageName()),
    this.showPageByName(t)
},
AXENaviController.prototype.showPageByName = function(t) {
    var e = this.pageByName(t);
    if (null == e) throw new Error("The specified page: " + t + " does not exist.");
    this.currentPage() && this.currentPage() == e || this.showPage(e)
},
AXENaviController.prototype.hideLoading = function() {
    null != this._loadingView && this._loadingView.remove()
},
AXENaviController.prototype.showLoading = function() {
    null != this._loadingView && (this.currentPageReady = !1, this.view().addSubView(this._loadingView))
},
AXENaviController.prototype._loadingView = null,
AXENaviController.prototype.loadingView = function(t) {
    return Boolean(t) && (this._loadingView = t, this.hideLoading()),
    null == this._loadingView && (this._loadingView = new AXEProgressBar, this.hideLoading()),
    this._loadingView
},
AXENaviController.prototype._newAtBtm = !1,
AXENaviController.prototype.newAtBtm = function() {
    return this._newAtBtm
},
AXENaviController.prototype._queueMode = !1,
AXENaviController.prototype.queueMode = function() {
    return this._queueMode
},
AXENaviController.prototype.pageByName = function(t) {
    for (var e = null,
    i = this.pages(), n = 0; n < i.length; n++) if (t == i[n].pageName()) {
        e = i[n];
        break
    }
    return e
},
define("navi_ctrl", ["view_ctrl", "page_event", "page_ctrl", "popup_manager", "progress_bar"],
function() {});
var AXEButtonGroup = function(t) {
    if (arguments.length > 0) {
        for (var e = [], i = 0; i < arguments.length; i++) e.push(arguments[i]);
        this.addButtons(e)
    }
};
AXEButtonGroup.prototype = new AXEEventTarget,
AXEButtonGroup.prototype.constructor = AXEButtonGroup,
AXEButtonGroup.prototype.eachButton = function(t) {
    for (var e = 0; e < this.buttons().length && !1 !== t(e, this.buttons()[e]); e++);
},
AXEButtonGroup.prototype._buttons = null,
AXEButtonGroup.prototype.buttons = function() {
    return null == this._buttons && (this._buttons = []),
    this._buttons
},
AXEButtonGroup.prototype.addButtons = function(t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.switchMode(!0),
        i.buttonState(AXEButtonState.NORMAL_STATE),
        i.addListener(AXETouchEvent.CLICK, this, this.onButtonTouchEnd),
        this.buttons().push(i)
    }
},
AXEButtonGroup.prototype.onButtonTouchEnd = function(t) {
    var e = t.currentTarget;
    this.selectButton(AXEButton(e)),
    this.triggerEvent(new AXEEvent(AXEEvent.CHANGE))
},
AXEButtonGroup.prototype.enable = function() {
    var t = this;
    t.eachButton(function(e, i) {
        i != t._selectedButton && i.enabled(!0)
    })
},
AXEButtonGroup.prototype.disable = function() {
    this.eachButton(function(t, e) {
        e.enabled(!1)
    })
},
AXEButtonGroup.prototype.selectedIndex = function() {
    return this.indexOfButton(this._selectedButton)
},
AXEButtonGroup.prototype._selectedButton = null,
AXEButtonGroup.prototype.selectedButton = function() {
    return this._selectedButton
},
AXEButtonGroup.prototype.buttonByIndex = function(t) {
    var e = null;
    return t >= 0 && t < this.buttons().length && (e = this.buttons()[t]),
    e
},
AXEButtonGroup.prototype.indexOfButton = function(t) {
    for (var e = -1,
    i = 0; i < this.buttons().length; i++) if (t == this.buttons()[i]) {
        e = i;
        break
    }
    return e
},
AXEButtonGroup.prototype.cancelable = !1,
AXEButtonGroup.prototype.selectButton = function(t) {
    if (this.cancelable) {
        null != this._selectedButton && this._selectedButton.buttonState(AXEButtonState.NORMAL_STATE);
        var e = this._selectedButton;
        this._selectedButton = null,
        e != t && (t.buttonState(AXEButtonState.DOWN_STATE), this._selectedButton = t)
    } else null != this._selectedButton && this._selectedButton != t && (this._selectedButton.enabled(!0), this._selectedButton.buttonState(AXEButtonState.NORMAL_STATE)),
    t.buttonState(AXEButtonState.DOWN_STATE),
    t.enabled(!1),
    this._selectedButton = t
},
AXEButtonGroup.prototype.selectButtonByIndex = function(t) {
    var e = this.buttonByIndex(t);
    null != e && this.selectButton(e)
},
AXEButtonGroup.prototype.cancelSelect = function() {
    null != this._selectedButton && (this._selectedButton.enabled(!0), this._selectedButton.buttonState(AXEButtonState.NORMAL_STATE), this._selectedButton = null)
},
AXEButtonGroup.prototype.dealloc = function() {
    AXEArrayUtil.each(this.buttons(),
    function(t, e) {
        e.removeListener(AXETouchEvent.TOUCH_START),
        e.removeListener(AXETouchEvent.TOUCH_END),
        e.removeListener(AXETouchEvent.CLICK)
    }),
    this._buttons = null,
    AXEEventTarget.prototype.dealloc.call(this)
},
define("button_group", ["event_target", "touch_event", "button_state", "event"],
function() {});
class RuleView extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/rule.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick);
        var t = this.view().subViewByName("slices");
        this.slices = t.subViews().slice(),
        t.remove(),
        this.contentBox = this.view().subViewByName("content-box"),
        this.contentBox.scrollBarStyle(AXEScrollBarStyle.HIDDEN),
        this.contentBox.dataSource(this)
    }
    onBtnCloseClick() {
        AXETracker.trackEvent("rule view", "close", "Click"),
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared && this.contentBox.reloadData()
    }
    isVertical(t) {
        return ! 0
    }
    cellCount(t) {
        return this.slices.length
    }
    cellSizeByIndex(t, e) {
        return this.slices[e].height()
    }
    cellByIndex(t, e) {
        return this.slices[e]
    }
}
RuleView._instance = null,
RuleView.instance = function() {
    return RuleView._instance || (RuleView._instance = new RuleView),
    RuleView._instance
},
define("rule_view", ["popup_view"],
function() {});
class SuccessView extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/success.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
SuccessView._instance = null,
SuccessView.instance = function() {
    return SuccessView._instance || (SuccessView._instance = new SuccessView),
    SuccessView._instance
},
define("success_view", ["popup_view"],
function() {});
class Right1View extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/right1.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
Right1View._instance = null,
Right1View.instance = function() {
    return Right1View._instance || (Right1View._instance = new Right1View),
    Right1View._instance
},
define("right1_view", ["popup_view"],
function() {});
class Right2View extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/right2.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
Right2View._instance = null,
Right2View.instance = function() {
    return Right2View._instance || (Right2View._instance = new Right2View),
    Right2View._instance
},
define("right2_view", ["popup_view"],
function() {});
class Wrong1View extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/wrong1.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
Wrong1View._instance = null,
Wrong1View.instance = function() {
    return Wrong1View._instance || (Wrong1View._instance = new Wrong1View),
    Wrong1View._instance
},
define("wrong1_view", ["popup_view"],
function() {});
class Wrong2View extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/wrong2.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
Wrong2View._instance = null,
Wrong2View.instance = function() {
    return Wrong2View._instance || (Wrong2View._instance = new Wrong2View),
    Wrong2View._instance
},
define("wrong2_view", ["popup_view"],
function() {});
class TipsView extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/tips.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
TipsView._instance = null,
TipsView.instance = function() {
    return TipsView._instance || (TipsView._instance = new TipsView),
    TipsView._instance
},
define("tips_view", ["popup_view"],
function() {});
class PrivacyView extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/privacy.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick);
        var t = this.view().subViewByName("slices");
        this.slices = t.subViews().slice(),
        t.remove(),
        this.contentBox = this.view().subViewByName("content-box"),
        this.contentBox.scrollBarStyle(AXEScrollBarStyle.HIDDEN),
        this.contentBox.dataSource(this)
    }
    onBtnCloseClick() {
        AXETracker.trackEvent("privacy view", "close", "Click"),
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared && this.contentBox.reloadData()
    }
    isVertical(t) {
        return ! 0
    }
    cellCount(t) {
        return this.slices.length
    }
    cellSizeByIndex(t, e) {
        var i = this.slices[e],
        n = this.contentBox.width() / i.width();
        return i.height() * n
    }
    cellByIndex(t, e) {
        var i = this.slices[e],
        n = this.contentBox.width() / i.width();
        return i.matrix(new AXEMat3(n, 0, 0, n, 0, 0)),
        i
    }
}
PrivacyView._instance = null,
PrivacyView.instance = function() {
    return PrivacyView._instance || (PrivacyView._instance = new PrivacyView),
    PrivacyView._instance
},
define("privacy_view", ["popup_view"],
function() {});
class TimeModel extends AXEEventTarget {
    constructor() {
        super();
        this.hour = 0,
        this.minute = 0,
        this.second = 0,
        this.timeTxt = "",
        this.timer = null,
        this._secondNum = null,
        this._timeNum = 0
    }
    initTime() {
        this.hour = 0,
        this.minute = 0,
        this.second = 0,
        this.timeTxt = "",
        this._secondNum = 0,
        this._timeNum = 0
    }
    resetTime() {
        window.clearInterval(this.timer),
        this.hour = 0,
        this.minute = 0,
        this.second = 0,
        this.timeTxt = "",
        this._secondNum = 0,
        this._timeNum = 0
    }
    startTime() {
        const t = this;
        t.timer = setInterval(function() {
            t.timerText()
        },
        100)
    }
    timerText() {
        let t = Math.floor(this._timeNum / 6e4),
        e = (Math.floor(this._timeNum % 6e4) / 1e3).toFixed(2).split(".");
        return this.timeTxt = AXEStringUtil.fillStringTo(t + "", "0", 2) + " : " + AXEStringUtil.fillStringTo(e[0] + "", "0", 2) + "." + AXEStringUtil.fillStringTo(e[1] + "", "0", 2)
    }
    set timeNum(t) {
        this._timeNum += t
    }
    get timeNum() {
        return this._timeNum
    }
    get time() {
        return this.timeTxt
    }
    get secondNum() {
        return this._secondNum
    }
}
TimeModel._time = null,
TimeModel.timer = function() {
    return TimeModel._time || (TimeModel._time = new TimeModel),
    TimeModel._time
},
define("time_model", ["event_target"],
function() {});
var RankingModel = function() {};
RankingModel.fromObject = function(t) {
    var e = new RankingModel;
    return e._nickname = t.nickname,
    e._accTime = t.timeUsed,
    e._qType = t.series,
    e
},
RankingModel.prototype = new AXEEventTarget,
RankingModel.prototype.constructor = RankingModel,
RankingModel.prototype._nickname = null,
RankingModel.prototype.nickname = function() {
    return this._nickname
},
RankingModel.prototype._accTime = null,
RankingModel.prototype.accTime = function() {
    let t = Math.floor(this._accTime / 6e4),
    e = (Math.floor(this._accTime % 6e4) / 1e3).toFixed(2);
    return this._accTime = AXEStringUtil.fillStringTo(t + "", "0", 2) + ":" + e
},
RankingModel.prototype._qType = null,
RankingModel.prototype.qType = function() {
    return this._qType
},
define("ranking_model", ["event_target"],
function() {});
class AnswerPage extends AXEPageController {
    constructor() {
        super();
        this.commonAssetsLoad = !1,
        this.outMotions = null,
        this.soundBox = null,
        this.btnSound = null,
        this.backBox = null,
        this.btnBack = null,
        this.logoBox = null,
        this.loadFlag = !0
    }
    addCommonAssets(t) {
        if (0 == this.commonAssetsLoad) {
            AXEAssetsLoader.asset("views/common.xml").children("asset").each(function(e, i) {
                t.addAsset(String($(i).text()))
            }),
            AnswerPage.commonAssetsLoad = !0
        }
    }
    playEaseMotions(t, e) {
        AXEArrayUtil.each(t,
        function(t, i) {
            isNaN(e) ? i.play() : i.play(e)
        })
    }
    onOutMotionPlayToEnd(t) {
        if (t.type == AXEEvent.END || t.type == AXEEvent.CUE_POINT && "break" == t.evtData.label) {
            if (t.currentTarget.removeListener(AXEEvent.END, this, this.onInMotionPlayToEnd), t.currentTarget.removeListener(AXEEvent.CUE_POINT, this, this.onInMotionPlayToEnd), t.currentTarget.removeListener(AXEEvent.END, this, this.onOutMotionPlayToEnd), t.currentTarget.removeListener(AXEEvent.CUE_POINT, this, this.onOutMotionPlayToEnd), t.type == AXEEvent.CUE_POINT) {
                var e = t.evtData.time;
                t.currentTarget.pause(e)
            }
            var i = !0;
            AXEArrayUtil.each(this.outMotions,
            function(t, e) {
                if (e.visible() && e.isPlaying) return i = !1,
                !1
            }),
            i && this.easeOutOver()
        }
    }
    onInMotionPlayToEnd(t) {
        if (t.type == AXEEvent.END || t.type == AXEEvent.CUE_POINT && "break" == t.evtData.label) {
            if (t.currentTarget.removeListener(AXEEvent.END, this, this.onInMotionPlayToEnd), t.currentTarget.removeListener(AXEEvent.CUE_POINT, this, this.onInMotionPlayToEnd), t.currentTarget.removeListener(AXEEvent.END, this, this.onOutMotionPlayToEnd), t.currentTarget.removeListener(AXEEvent.CUE_POINT, this, this.onOutMotionPlayToEnd), t.type == AXEEvent.CUE_POINT) if ("break" == t.evtData.label) {
                var e = t.evtData.time;
                t.currentTarget.pause(e)
            }
            var i = !0;
            AXEArrayUtil.each(this.inMotions,
            function(t, e) {
                if (e.visible() && e.isPlaying) return i = !1,
                !1
            }),
            i && this.easeInOver()
        }
    }
    showSound() {
        return ! 1
    }
    showBack() {
        return ! 1
    }
    showRule() {
        return ! 1
    }
    showLogo() {
        return ! 1
    }
    needTrack() {
        return ! 0
    }
    onBtnSoundChange(t) {
        AXESoundManager.manager().mute(this.btnSound.buttonState() == AXEButtonState.NORMAL_STATE)
    }
    onBtnBackClick() {
        this.navigateBack()
    }
    onSoundManagerChange() {
        this.btnSound && this.btnSound.buttonState(AXESoundManager.manager().mute() ? AXEButtonState.NORMAL_STATE: AXEButtonState.DOWN_STATE)
    }
    doNotLoadCommon() {
        return ! 1
    }
    initialize() {
        this.doNotLoadCommon() || this.addCommonAssets(this),
        AXEPageController.prototype.initialize.call(this)
    }
    onViewControllerPrepared() {
        if (!this.doNotLoadCommon()) {
            var t = AXEAssetsLoader.asset("views/common.xml"),
            e = new AXEViewController;
            e.initWithXML(t)
        }
        if (this.showBack()) {
            this.backBox || (this.backBox = this.view().subViewByName("back-box") || this.view());
            var i = e.view().subViewByName("back-box");
            this.backBox.addSubView(i),
            this.btnBack = i.subViewByName("btn-back"),
            this.btnBack.addListener(AXETouchEvent.CLICK, this, this.onBtnBackClick)
        }
        if (this.showLogo()) {
            this.logoBox || (this.logoBox = this.view().subViewByName("logo-box") || this.view());
            var n = e.view().subViewByName("logo-box");
            this.logoBox.addSubView(n)
        }
        if (this.showSound()) {
            this.soundBox || (this.soundBox = this.view().subViewByName("sound-box") || this.view());
            var o = e.view().subViewByName("sound-box");
            this.soundBox.addSubView(o),
            this.btnSound = o.subViewByName("btn-sound"),
            this.btnSound.addListener(AXEEvent.CHANGE, this, this.onBtnSoundChange),
            AXESoundManager.manager().addListener(AXEEvent.CHANGE, this, this.onSoundManagerChange)
        }
        this.inMotions = this.view().subViewsByReg(/(^|-)in-/),
        this.outMotions = this.view().subViewsByReg(/(^|-)out-/)
    }
    onViewAddToStage() {
        super.onViewAddToStage.call(this),
        this.prepared && (this.onSoundManagerChange(), AXEArrayUtil.each(this.inMotions,
        function(t, e) {
            e.pause(0)
        }), AXEArrayUtil.each(this.outMotions,
        function(t, e) {
            e.pause(0)
        }), this.view().visible(!0))
    }
    easeIn(t) {
        var e = this;
        e.inMotions.length > 0 ? (AXEArrayUtil.each(e.inMotions,
        function(t, i) {
            i.removeListener(AXEEvent.END, e, e.onInMotionPlayToEnd),
            i.removeListener(AXEEvent.CUE_POINT, e, e.onInMotionPlayToEnd),
            i.removeListener(AXEEvent.END, e, e.onOutMotionPlayToEnd),
            i.removeListener(AXEEvent.CUE_POINT, e, e.onOutMotionPlayToEnd),
            i.addListener(AXEEvent.CUE_POINT, e, e.onInMotionPlayToEnd),
            i.addListener(AXEEvent.END, e, e.onInMotionPlayToEnd)
        }), e.playEaseMotions(e.inMotions, 0)) : (e.view().alpha(0), e.view().animate(.5, {
            alpha: 1
        },
        AXEEasing.Sine.easeOut, null,
        function() {
            e.easeInOver()
        }))
    }
    easeOut(t) {
        var e = this;
        e.outMotions.length > 0 ? (AXEArrayUtil.each(e.outMotions,
        function(t, i) {
            i.removeListener(AXEEvent.END, e, e.onInMotionPlayToEnd),
            i.removeListener(AXEEvent.CUE_POINT, e, e.onInMotionPlayToEnd),
            i.removeListener(AXEEvent.END, e, e.onOutMotionPlayToEnd),
            i.removeListener(AXEEvent.CUE_POINT, e, e.onOutMotionPlayToEnd),
            i.addListener(AXEEvent.CUE_POINT, e, e.onOutMotionPlayToEnd),
            i.addListener(AXEEvent.END, e, e.onOutMotionPlayToEnd)
        }), e.playEaseMotions(e.outMotions)) : e.view().animate(.5, {
            alpha: 0
        },
        AXEEasing.Sine.easeOut, null,
        function() {
            e.easeOutOver()
        })
    }
    showLoading() {
        this.view().stage().controller.showLoading()
    }
    hideLoading() {
        this.view().stage().controller.hideLoading()
    }
}
define("answer_page", ["page_ctrl", "popup_manager", "rule_view", "success_view", "right1_view", "right2_view", "wrong1_view", "wrong2_view", "tips_view", "privacy_view", "user_model", "time_model", "ranking_model", "array_util"],
function() {});
class IndexPage extends AnswerPage {
    constructor() {
        super();
        this.btnRule = null,
        this.btnStart = null
    }
    pageName() {
        return "index"
    }
    onViewControllerPrepared() {
        super.onViewControllerPrepared.call(this),
        this.btnRule = this.view().subViewByName("btn-rule"),
        this.btnRule.addListener(AXETouchEvent.CLICK, this, this.showRulePopup),
        this.btnStart = this.view().subViewByName("btn-start"),
        this.btnStart.addListener(AXETouchEvent.CLICK, this, this.toNextPage)
    }
    showRulePopup() {
        AXETracker.trackEvent("rule_btn", "hdgz", "Click");
        let t = RuleView.instance();
        AXEPopupManager.manager().popupView(t)
    }
    toNextPage() {
        const t = this;
        AXETracker.trackEvent("index_btn", "cyhd", "Click"),
        UserModel.currentUser().needReg ? window.location.href = "https://psd-contenthub.3m.com.cn/p/c8f71": t.jumpTo("list")
    }
    onViewAddToStage() {
        super.onViewAddToStage.call(this),
        this.prepared
    }
}
define("index_page", ["answer_page"],
function() {});
class FormPage extends AnswerPage {
    constructor() {
        super();
        this.nameBox = null,
        this.$name = null,
        this.phoneBox = null,
        this.$phone = null,
        this.codeBox = null,
        this.$code = null,
        this.sendCodeBtn = null,
        this.countdown = 60,
        this.buttonFlag = !0,
        this.timeFalg = null,
        this.companyBox = null,
        this.$company = null,
        this.postBox = null,
        this.$post = null,
        this.industryBox = null,
        this.$industry = null,
        this.phoneRexp = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
        this.btnSubmit = null,
        this.btnGou = null,
        this.gouImg = null,
        this.btnPrivate = null
    }
    pageName() {
        return "form"
    }
    lockSize() {
        return ! 0
    }
    onViewControllerPrepared() {
        super.onViewControllerPrepared.call(this),
        this.nameBox = this.view().subViewByName("name_box"),
        this.$name = this.nameBox.$html(),
        this.phoneBox = this.view().subViewByName("phone_box"),
        this.$phone = this.phoneBox.$html(),
        this.codeBox = this.view().subViewByName("code_box"),
        this.$code = this.codeBox.$html(),
        this.sendCodeBtn = this.view().subViewByName("send-code-btn"),
        this.sendCodeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnSendCodeClick),
        this.companyBox = this.view().subViewByName("company_box"),
        this.$company = this.companyBox.$html(),
        this.postBox = this.view().subViewByName("post_box"),
        this.$post = this.postBox.$html(),
        this.industryBox = this.view().subViewByName("industry_box"),
        this.$industry = this.industryBox.$html(),
        this.gouImg = this.view().subViewByName("gou-img"),
        this.btnGou = this.view().subViewByName("btn-gou"),
        this.btnGou.addListener(AXETouchEvent.CLICK, this, this.onBtnGouClick),
        this.btnPrivate = this.view().subViewByName("btn-private"),
        this.btnPrivate.addListener(AXETouchEvent.CLICK, this, this.onBtnPrivateClick),
        this.btnSubmit = this.view().subViewByName("btn-submit"),
        this.btnSubmit.addListener(AXETouchEvent.CLICK, this, this.onBtnSubmitClick)
    }
    onBtnSendCodeClick() {
        if (this.buttonFlag) {
            AXETracker.trackEvent("code_btn", "yzm", "Click");
            var t = $.trim(this.$phone.val());
            "" != t ? this.phoneRexp.test(t) ? this.setCodeTime() : alert("请输入正确的手机号") : alert("请输入手机号")
        }
    }
    setCodeTime() {
        var t = this;
        if (0 == t.countdown) return t.sendCodeBtn.text("获取验证"),
        t.buttonFlag = !0,
        t.countdown = 60,
        !1;
        var e = t.countdown;
        e--,
        t.sendCodeBtn.text(t.countdown),
        t.buttonFlag = !1,
        t.countdown = e,
        t.timeFalg = setTimeout(function() {
            t.setCodeTime()
        },
        1e3)
    }
    onBtnPrivateClick() {
        AXETracker.trackEvent("privacy_btn", "ysgz", "Click"),
        this.view().removeAllHTML(!0);
        let t = PrivacyView.instance();
        AXEPopupManager.manager().popupView(t),
        t.view().addListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hidePrivacyView)
    }
    hidePrivacyView() {
        this.view().removeAllHTML(!1)
    }
    onBtnGouClick() {
        const t = this;
        AXETracker.trackEvent("gou_btn", "gou", "Click"),
        t.gouImg.visible() ? t.gouImg.visible(!1) : t.gouImg.visible(!0)
    }
    onBtnSubmitClick() {
        const t = this;
        let e = $.trim(t.$name.val());
        if ("" == e) return alert("请输入真实姓名"),
        !1;
        let i = $.trim(t.$phone.val());
        if ("" == i) return alert("请输入手机号"),
        !1;
        if (!t.phoneRexp.test(i)) return alert("请输入正确的手机号"),
        !1;
        $.trim(t.$code.val());
        let n = $.trim(t.$company.val());
        if ("" == n) return alert("请输入公司名称"),
        !1;
        let o = $.trim(t.$post.val());
        if ("" == o) return alert("请输入职位"),
        !1;
        let r = $.trim(t.$industry.val());
        return "" == r ? (alert("请输入行业"), !1) : t.gouImg.visible() ? (AXETracker.trackEvent("submit_btn", "tj", "Click"), void AnswerAPI.regInfo(e, i, n, o, r,
        function(e) {
            UserModel.currentUser().needReg = !1,
            t.jumpTo("list")
        },
        function(t, e) {
            44102 == t && alert("该手机号码已注册过会员")
        })) : (alert("请勾选协议"), !1)
    }
    onViewAddToStage() {
        super.onViewAddToStage.call(this),
        this.prepared
    }
}
define("form_page", ["answer_page"],
function() {});
class ListPage extends AnswerPage {
    constructor() {
        super();
        this.line = null,
        this.numView = null,
        this.$big = null,
        this.$small = null,
        this.btns = null,
        this.masks = null,
        this.btnRanking = null,
        this.btnFollow = null,
        this.btnRule = null
    }
    pageName() {
        return "list"
    }
    onViewControllerPrepared() {
        const t = this;
        super.onViewControllerPrepared.call(t),
        t.line = t.view().subViewByName("line"),
        t.numView = t.view().subViewByName("num"),
        t.$big = t.numView.$html().children(".big"),
        t.$small = t.numView.$html().children(".small"),
        t.btns = t.view().subViewsByReg(/btn-/),
        t.btns.forEach(function(e) {
            e.addListener(AXETouchEvent.CLICK, t, t.onBtnsClick)
        }),
        t.masks = t.view().subViewsByReg(/mask-/),
        t.btnRanking = t.view().subViewByName("ranking"),
        t.btnRanking.addListener(AXETouchEvent.CLICK, t, t.onBtnRankingClick),
        t.btnFollow = t.view().subViewByName("follow"),
        t.btnFollow.addListener(AXETouchEvent.CLICK, t, t.onBtnFollowClick),
        t.btnRule = t.view().subViewByName("rule"),
        t.btnRule.addListener(AXETouchEvent.CLICK, t, t.onBtnRuleClick);
        var e = t.view().subViewByName("slices");
        t.slices = e.subViews().slice(),
        e.remove(),
        t.contentBox = t.view().subViewByName("content-box"),
        t.contentBox.scrollBarStyle(AXEScrollBarStyle.HIDDEN),
        t.contentBox.dataSource(t),
        UserModel.currentUser().addListener(AXEEvent.CHANGE, t, t.updateInfo)
    }
    onBtnRuleClick() {
        AXETracker.trackEvent("rule_btn", "hdgz", "Click"),
        this.numView.visible(!1);
        let t = RuleView.instance();
        AXEPopupManager.manager().popupView(t),
        t.view().addListener(AXEEvent.REMOVE_FROM_STAGE, this, this.onRuleRemove)
    }
    onRuleRemove() {
        this.numView.visible(!0)
    }
    updateInfo() {
        this.$big.text(UserModel.currentUser().chancesRemain),
        this.line.width((UserModel.currentUser().chancesTotal - UserModel.currentUser().chancesRemain) / 4 * 234)
    }
    onBtnFollowClick() {
        window.location.href = "https://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzA5OTA3NzY2Nw==#wechat_redirect"
    }
    onBtnRankingClick() {
        AXETracker.trackEvent("ranking_btn", "phb", "Click"),
        this.jumpTo("ranking")
    }
    onBtnsClick(t) {
        if (UserModel.currentUser().chancesRemain < 1) return alert("机会不足"),
        !1;
        let e = t.currentTarget._name.substr(4);
        AXETracker.trackEvent("question_btn", "question" + e, "Click"),
        this.jumpTo("question" + e)
    }
    onViewResize() {
        const t = this;
        if (super.onViewResize.call(t), t.prepared) {
            t.contentBox.reloadData();
            var e = t.contentBox.offset().clone();
            e.y = Math.max(0, Math.min(e.y, t.contentBox.maxOffset().y)),
            t.contentBox.offset(e)
        }
    }
    onViewAddToStage() {
        const t = this;
        super.onViewAddToStage.call(t),
        t.prepared && (UserModel.currentUser().isLogin ? (t.$big.text(UserModel.currentUser().chancesRemain), t.$small.text("4"), t.line.width((UserModel.currentUser().chancesTotal - UserModel.currentUser().chancesRemain) / 4 * 234), t.masks.forEach(function(t, e) {
            e < UserModel.currentUser().openSeries && t.visible(!1)
        }), t.view().visible(!0), t.contentBox.offset(new AXEVec2(0, 0)), t.contentBox.reloadData()) : t.view().visible(!1), t.masks.forEach(function(t, e) {
            e < 0 && t.visible(!1)
        }), t.view().visible(!0), t.contentBox.offset(new AXEVec2(0, 0)), t.contentBox.reloadData())
    }
    isVertical(t) {
        return ! 0
    }
    cellCount(t) {
        return this.slices.length
    }
    cellSizeByIndex(t, e) {
        var i = this.slices[e],
        n = this.contentBox.width() / i.width();
        return i.height() * n
    }
    cellByIndex(t, e) {
        var i = this.slices[e],
        n = this.contentBox.width() / i.width();
        return i.matrix(new AXEMat3(n, 0, 0, n, 0, 0)),
        i
    }
}
define("list_page", ["answer_page"],
function() {});
class HintView extends AXEPopupView {
    constructor() {
        super();
        this.popupAnimated = !0,
        this.tappedToClose = !1,
        this.btnClose = null,
        this.initWithURL("views/hint.xml")
    }
    onViewControllerPrepared() {
        this.closeBtn = this.view().subViewByName("btn-close"),
        this.closeBtn.addListener(AXETouchEvent.CLICK, this, this.onBtnCloseClick)
    }
    onBtnCloseClick() {
        AXETracker.trackEvent("hint view", "close", "Click"),
        this.popupManager && this.popupManager.removePopup()
    }
    onViewAddToStage() {
        this.prepared
    }
}
HintView._instance = null,
HintView.instance = function() {
    return HintView._instance || (HintView._instance = new HintView),
    HintView._instance
},
define("hint_view", ["popup_view"],
function() {});
class Question1Page extends AnswerPage {
    constructor() {
        super();
        this.question = null,
        this.currentTime = null,
        this.numView = null,
        this.big = null,
        this.small = null,
        this.qBtns = [],
        this.answer = [],
        this.answerCopy = [[0, 1, 6], [1, 0, 5], [2, 3, 4], [3, 1, 3], [4, 3, 2], [5, 3, 1], [6, 1, 0]],
        this.btnNext = null,
        this.btnSubmit = null,
        this.currentBtn = null,
        this.wrongNum = 0
    }
    pageName() {
        return "question1"
    }
    onViewControllerPrepared() {
        const t = this;
        super.onViewControllerPrepared.call(t),
        t.question = t.view().subViewByName("question"),
        t.numView = t.view().subViewByName("num"),
        t.big = t.view().subViewByName("big"),
        t.small = t.view().subViewByName("small"),
        t.currentTime = t.view().subViewByName("current-time"),
        t.view().subViewsByReg(/q\d{1,2}_btns/).forEach(function(e, i) {
            let n = e.subViews();
            t.qBtns[i] = new AXEButtonGroup,
            t.qBtns[i].addButtons(n),
            t.qBtns[i].addListener(AXEEvent.CHANGE, t, t.onBtnsChange)
        }),
        t.qBtns.reverse(),
        t.btnNext = t.view().subViewByName("btn-next"),
        t.btnNext.addListener(AXETouchEvent.CLICK, t, t.onBtnNextClick),
        t.btnSubmit = t.view().subViewByName("btn-submit"),
        t.btnSubmit.addListener(AXETouchEvent.CLICK, t, t.onBtnSubmitClick)
    }
    onBtnNextClick() {
        const t = this;
        let e = Right1View.instance(),
        i = Wrong1View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove))
    }
    hintViewRemove() {
        Right1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        Wrong1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        this.question.pause(this.answer[parseInt(this.big.text(), 10)][0]);
        let t = parseInt(this.big.text(), 10);
        this.big.text(t + 1),
        this.btnNext.visible(!1),
        this.currentBtn = null
    }
    onBtnSubmitClick() {
        const t = this;
        let e = Right2View.instance(),
        i = Wrong2View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)),
        t.currentBtn = null
    }
    onBtnsChange(t) {
        const e = this;
        let i = parseInt(t.target._selectedButton._parent._name.substr(1, 1)) - 1;
        e.currentBtn = e.qBtns[i];
        let n = "";
        switch (e.currentBtn.selectedIndex()) {
        case 0:
            n = "A";
            break;
        case 1:
            n = "B";
            break;
        case 2:
            n = "C";
            break;
        case 3:
            n = "D";
            break;
        case 4:
            n = "E"
        }
        AXETracker.trackEvent("question" + (i + 1), n, "Click"),
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    answerEnd() {
        const t = this;
        Right2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        Wrong2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        AnswerEnv.currentQ = 1,
        AnswerAPI.qSubmit(TimeModel.timer().timeNum, 1, t.answer.length, t.answer.length - t.wrongNum,
        function(e) {
            t.sendParams("time", "timeTxt", TimeModel.timer().timerText()),
            AnswerEnv.wrongNum = t.wrongNum,
            UserModel.currentUser().fastTime = e.historyBest,
            TimeModel.timer().resetTime(),
            t.jumpTo("time")
        },
        function(e, i) {
            return 44500 == e ? (alert("活动未开始"), t.jumpTo("list"), !1) : 44501 == e ? (alert("活动已结束"), t.jumpTo("list"), !1) : 44101 == e ? (alert("请先注册哦"), window.location.href = "https://3m.convertlab.com/loyalty/page/4baa02518f8c47cfb871591bb1693043-3Amd_wj36dn46_dNCR-WIQ", !1) : void 0
        })
    }
    onViewUpdated(t, e) {
        super.onViewUpdated(t, e);
        const i = this;
        i.prepared && parseInt(i.big.text(), 10) <= i.answer.length && (TimeModel.timer().timeNum = 1e3 * e, i.currentTime.text(TimeModel.timer().timerText()))
    }
    onAnswerUpdate(t) {
        const e = this;
        let i = e.question.layers[e.answer[t][2]].contentView.subViews()[1];
        e.question.layers[e.answer[t][2]].contentView.subViews()[0].subViewByName("current-num").text(t + 1 + "、");
        let n = i.subViews(),
        o = [];
        for (let t = 0; t < n.length; t++) o.push(t);
        let r = AXEArrayUtil.shuffleList(o);
        console.log(e.answer[t][1], r),
        n.forEach(function(t, e) {
            t.subViews()[0].subViewByName("answer").goToAndStop(r[e]),
            t.subViews()[1].subViewByName("answer").goToAndStop(r[e])
        });
        for (let i = 0; i < n.length; i++) if (e.answer[t][1] == n[i].subViews()[0].subViewByName("answer").currentFrame()) {
            e.answer[t][1] = i,
            console.log(e.answer[t], i, "for");
            break
        }
        console.log(e.answer[t])
    }
    onViewAddToStage() {
        const t = this;
        if (super.onViewAddToStage.call(t), t.prepared) {
            t.qBtns.forEach(function(t) {
                t.cancelSelect()
            }),
            t.answer = [],
            t.answerCopy.forEach(function(e, i) {
                t.answer.push(e.slice())
            }),
            t.big.text("1"),
            TimeModel.timer().initTime(),
            t.answer = AXEArrayUtil.shuffleList(t.answer),
            t.answer.splice(4, 2),
            t.wrongNum = 0,
            t.currentBtn = null,
            t.btnNext.visible(!1),
            t.btnSubmit.visible(!1),
            AnswerEnv.wrongNum = 0;
            for (let e = 0; e < t.answer.length; e++) t.onAnswerUpdate(e);
            t.question.pause(t.answer[0][0]),
            t.small.text(t.answer.length)
        }
    }
}
define("question1_page", ["answer_page", "hint_view"],
function() {});
class Question2Page extends AnswerPage {
    constructor() {
        super();
        this.question = null,
        this.currentTime = null,
        this.numView = null,
        this.big = null,
        this.small = null,
        this.qBtns = [],
        this.answer = [],
        this.answerCopy = [[0, 1, 6], [1, 0, 5], [2, 3, 4], [3, 0, 3], [4, 0, 2], [5, 0, 1], [6, 3, 0]],
        this.btnNext = null,
        this.btnSubmit = null,
        this.currentBtn = null,
        this.wrongNum = 0
    }
    pageName() {
        return "question2"
    }
    onViewControllerPrepared() {
        const t = this;
        super.onViewControllerPrepared.call(t),
        t.question = t.view().subViewByName("question"),
        t.numView = t.view().subViewByName("num"),
        t.big = t.view().subViewByName("big"),
        t.small = t.view().subViewByName("small"),
        t.currentTime = t.view().subViewByName("current-time"),
        t.view().subViewsByReg(/q\d{1,2}_btns/).forEach(function(e, i) {
            let n = e.subViews();
            t.qBtns[i] = new AXEButtonGroup,
            t.qBtns[i].addButtons(n),
            t.qBtns[i].addListener(AXEEvent.CHANGE, t, t.onBtnsChange)
        }),
        t.qBtns.reverse(),
        t.btnNext = t.view().subViewByName("btn-next"),
        t.btnNext.addListener(AXETouchEvent.CLICK, t, t.onBtnNextClick),
        t.btnSubmit = t.view().subViewByName("btn-submit"),
        t.btnSubmit.addListener(AXETouchEvent.CLICK, t, t.onBtnSubmitClick)
    }
    onBtnNextClick() {
        const t = this;
        let e = Right1View.instance(),
        i = Wrong1View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove))
    }
    hintViewRemove() {
        Right1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        Wrong1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        this.question.pause(this.answer[parseInt(this.big.text(), 10)][0]);
        let t = parseInt(this.big.text(), 10);
        this.big.text(t + 1),
        this.btnNext.visible(!1),
        this.currentBtn = null
    }
    onBtnSubmitClick() {
        const t = this;
        let e = Right2View.instance(),
        i = Wrong2View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)),
        t.currentBtn = null
    }
    onBtnsChange(t) {
        const e = this;
        let i = parseInt(t.target._selectedButton._parent._name.substr(1, 1)) - 1;
        e.currentBtn = e.qBtns[i];
        let n = "";
        switch (e.currentBtn.selectedIndex()) {
        case 0:
            n = "A";
            break;
        case 1:
            n = "B";
            break;
        case 2:
            n = "C";
            break;
        case 3:
            n = "D";
            break;
        case 4:
            n = "E"
        }
        AXETracker.trackEvent("question" + (i + 8), n, "Click"),
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    answerEnd() {
        const t = this;
        Right2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        Wrong2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        AnswerEnv.currentQ = 2,
        AnswerAPI.qSubmit(TimeModel.timer().timeNum, 2, t.answer.length, t.answer.length - t.wrongNum,
        function(e) {
            t.sendParams("time", "timeTxt", TimeModel.timer().timerText()),
            AnswerEnv.wrongNum = t.wrongNum,
            UserModel.currentUser().fastTime = e.historyBest,
            TimeModel.timer().resetTime(),
            t.jumpTo("time")
        },
        function(e, i) {
            return 44500 == e ? (alert("活动未开始"), t.jumpTo("list"), !1) : 44501 == e ? (alert("活动已结束"), t.jumpTo("list"), !1) : 44101 == e ? (alert("请先注册哦"), window.location.href = "https://3m.convertlab.com/loyalty/page/4baa02518f8c47cfb871591bb1693043-3Amd_wj36dn46_dNCR-WIQ", !1) : void 0
        })
    }
    onViewUpdated(t, e) {
        super.onViewUpdated(t, e);
        const i = this;
        i.prepared && parseInt(i.big.text(), 10) <= i.answer.length && (TimeModel.timer().timeNum = 1e3 * e, i.currentTime.text(TimeModel.timer().timerText()))
    }
    onAnswerUpdate(t) {
        const e = this;
        let i = e.question.layers[e.answer[t][2]].contentView.subViews()[1];
        e.question.layers[e.answer[t][2]].contentView.subViews()[0].subViewByName("current-num").text(t + 1 + "、");
        let n = i.subViews(),
        o = [];
        for (let t = 0; t < n.length; t++) o.push(t);
        let r = AXEArrayUtil.shuffleList(o);
        n.forEach(function(t, e) {
            t.subViews()[0].subViewByName("answer").goToAndStop(r[e]),
            t.subViews()[1].subViewByName("answer").goToAndStop(r[e])
        });
        for (let i = 0; i < n.length; i++) if (e.answer[t][1] == n[i].subViews()[0].subViewByName("answer").currentFrame()) {
            e.answer[t][1] = i,
            console.log(e.answer[t], i, "for");
            break
        }
    }
    onViewAddToStage() {
        const t = this;
        if (super.onViewAddToStage.call(t), t.prepared) {
            t.qBtns.forEach(function(t) {
                t.cancelSelect()
            }),
            t.answer = [],
            t.answerCopy.forEach(function(e, i) {
                t.answer.push(e.slice())
            }),
            t.big.text("1"),
            TimeModel.timer().initTime(),
            t.answer = AXEArrayUtil.shuffleList(t.answer),
            t.answer.splice(4, 2),
            t.wrongNum = 0,
            t.currentBtn = null,
            t.btnNext.visible(!1),
            t.btnSubmit.visible(!1),
            AnswerEnv.wrongNum = 0;
            for (let e = 0; e < t.answer.length; e++) t.onAnswerUpdate(e);
            t.question.pause(t.answer[0][0]),
            t.small.text(t.answer.length)
        }
    }
}
define("question2_page", ["answer_page", "hint_view"],
function() {});
class Question3Page extends AnswerPage {
    constructor() {
        super();
        this.question = null,
        this.currentTime = null,
        this.numView = null,
        this.big = null,
        this.small = null,
        this.qBtns = [],
        this.answer = [],
        this.answerCopy = [[0, 3, 6], [1, 3, 5], [2, 1, 4], [3, 2, 3], [4, 0, 2], [5, 1, 1], [6, 2, 0]],
        this.btnNext = null,
        this.btnSubmit = null,
        this.currentBtn = null,
        this.wrongNum = 0
    }
    pageName() {
        return "question3"
    }
    onViewControllerPrepared() {
        const t = this;
        super.onViewControllerPrepared.call(t),
        t.question = t.view().subViewByName("question"),
        t.numView = t.view().subViewByName("num"),
        t.big = t.view().subViewByName("big"),
        t.small = t.view().subViewByName("small"),
        t.currentTime = t.view().subViewByName("current-time"),
        t.view().subViewsByReg(/q\d{1,2}_btns/).forEach(function(e, i) {
            let n = e.subViews();
            t.qBtns[i] = new AXEButtonGroup,
            t.qBtns[i].addButtons(n),
            t.qBtns[i].addListener(AXEEvent.CHANGE, t, t.onBtnsChange)
        }),
        t.qBtns.reverse(),
        t.btnNext = t.view().subViewByName("btn-next"),
        t.btnNext.addListener(AXETouchEvent.CLICK, t, t.onBtnNextClick),
        t.btnSubmit = t.view().subViewByName("btn-submit"),
        t.btnSubmit.addListener(AXETouchEvent.CLICK, t, t.onBtnSubmitClick)
    }
    onBtnNextClick() {
        const t = this;
        let e = Right1View.instance(),
        i = Wrong1View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove))
    }
    hintViewRemove() {
        Right1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        Wrong1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        this.question.pause(this.answer[parseInt(this.big.text(), 10)][0]);
        let t = parseInt(this.big.text(), 10);
        this.big.text(t + 1),
        this.btnNext.visible(!1),
        this.currentBtn = null
    }
    onBtnSubmitClick() {
        const t = this;
        let e = Right2View.instance(),
        i = Wrong2View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)),
        t.currentBtn = null
    }
    onBtnsChange(t) {
        const e = this;
        let i = parseInt(t.target._selectedButton._parent._name.substr(1, 1)) - 1;
        e.currentBtn = e.qBtns[i];
        let n = "";
        switch (e.currentBtn.selectedIndex()) {
        case 0:
            n = "A";
            break;
        case 1:
            n = "B";
            break;
        case 2:
            n = "C";
            break;
        case 3:
            n = "D";
            break;
        case 4:
            n = "E"
        }
        AXETracker.trackEvent("question" + (i + 22), n, "Click"),
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    answerEnd() {
        const t = this;
        Right2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        Wrong2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        AnswerEnv.currentQ = 3,
        AnswerAPI.qSubmit(TimeModel.timer().timeNum, 3, t.answer.length, t.answer.length - t.wrongNum,
        function(e) {
            t.sendParams("time", "timeTxt", TimeModel.timer().timerText()),
            AnswerEnv.wrongNum = t.wrongNum,
            UserModel.currentUser().fastTime = e.historyBest,
            TimeModel.timer().resetTime(),
            t.jumpTo("time")
        },
        function(e, i) {
            return 44500 == e ? (alert("活动未开始"), t.jumpTo("list"), !1) : 44501 == e ? (alert("活动已结束"), t.jumpTo("list"), !1) : 44101 == e ? (alert("请先注册哦"), window.location.href = "https://3m.convertlab.com/loyalty/page/4baa02518f8c47cfb871591bb1693043-3Amd_wj36dn46_dNCR-WIQ", !1) : void 0
        })
    }
    onViewUpdated(t, e) {
        super.onViewUpdated(t, e);
        const i = this;
        i.prepared && parseInt(i.big.text(), 10) <= i.answer.length && (TimeModel.timer().timeNum = 1e3 * e, i.currentTime.text(TimeModel.timer().timerText()))
    }
    onAnswerUpdate(t) {
        const e = this;
        let i = e.question.layers[e.answer[t][2]].contentView.subViews()[1];
        e.question.layers[e.answer[t][2]].contentView.subViews()[0].subViewByName("current-num").text(t + 1 + "、");
        let n = i.subViews(),
        o = [];
        for (let t = 0; t < n.length; t++) o.push(t);
        let r = AXEArrayUtil.shuffleList(o);
        n.forEach(function(t, e) {
            t.subViews()[0].subViewByName("answer").goToAndStop(r[e]),
            t.subViews()[1].subViewByName("answer").goToAndStop(r[e])
        });
        for (let i = 0; i < n.length; i++) if (e.answer[t][1] == n[i].subViews()[0].subViewByName("answer").currentFrame()) {
            e.answer[t][1] = i,
            console.log(e.answer[t], i, "for");
            break
        }
    }
    onViewAddToStage() {
        const t = this;
        if (super.onViewAddToStage.call(t), t.prepared) {
            t.qBtns.forEach(function(t) {
                t.cancelSelect()
            }),
            t.answer = [],
            t.answerCopy.forEach(function(e, i) {
                t.answer.push(e.slice())
            }),
            t.big.text("1"),
            TimeModel.timer().initTime(),
            t.answer = AXEArrayUtil.shuffleList(t.answer),
            t.answer.splice(4, 2),
            t.wrongNum = 0,
            t.currentBtn = null,
            t.btnNext.visible(!1),
            t.btnSubmit.visible(!1),
            AnswerEnv.wrongNum = 0;
            for (let e = 0; e < t.answer.length; e++) t.onAnswerUpdate(e);
            t.question.pause(t.answer[0][0]),
            t.small.text(t.answer.length)
        }
    }
}
define("question3_page", ["answer_page", "hint_view"],
function() {});
class Question4Page extends AnswerPage {
    constructor() {
        super();
        this.question = null,
        this.numView = null,
        this.big = null,
        this.small = null,
        this.qBtns = [],
        this.answer = [],
        this.answerCopy = [[0, 0, 6], [1, 1, 5], [2, 2, 4], [3, 3, 3], [4, 0, 2]],
        this.otherAnswer = [],
        this.otherAnswerCopy = [[5, [0, 1, 2], 1], [6, [0, 2], 0]],
        this.btnNext = null,
        this.btnSubmit = null,
        this.currentBtn = null,
        this.wrongNum = 0,
        this.o1Btns = null,
        this.o2Btns = null,
        this.oAnswer = null,
        this.o1BtnsArr = [0, 0, 0, 0],
        this.o2BtnsArr = [0, 0, 0, 0]
    }
    pageName() {
        return "question4"
    }
    onViewControllerPrepared() {
        const t = this;
        super.onViewControllerPrepared.call(t),
        t.question = t.view().subViewByName("question"),
        t.numView = t.view().subViewByName("num"),
        t.big = t.view().subViewByName("big"),
        t.small = t.view().subViewByName("small"),
        t.currentTime = t.view().subViewByName("current-time"),
        t.view().subViewsByReg(/q\w_btns/).forEach(function(e, i) {
            let n = e.subViews();
            t.qBtns[i] = new AXEButtonGroup,
            t.qBtns[i].addButtons(n),
            t.qBtns[i].addListener(AXEEvent.CHANGE, t, t.onBtnsChange)
        }),
        t.qBtns.reverse(),
        t.o1Btns = t.view().subViewByName("o1_btns"),
        t.o1Btns.subViews().forEach(function(e, i) {
            e.addListener(AXETouchEvent.CLICK, t, t.onO1BtnsClick)
        }),
        t.o2Btns = t.view().subViewByName("o2_btns"),
        t.o2Btns.subViews().forEach(function(e, i) {
            e.addListener(AXETouchEvent.CLICK, t, t.onO2BtnsClick)
        }),
        t.btnNext = t.view().subViewByName("btn-next"),
        t.btnNext.addListener(AXETouchEvent.CLICK, t, t.onBtnNextClick),
        t.btnSubmit = t.view().subViewByName("btn-submit"),
        t.btnSubmit.addListener(AXETouchEvent.CLICK, t, t.onBtnSubmitClick)
    }
    onO1BtnsClick(t) {
        const e = this;
        let i = parseInt(t.currentTarget._name.substr(4), 10) - 1;
        e.o1BtnsArr[i] = t.currentTarget._buttonState,
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    onO2BtnsClick(t) {
        const e = this;
        let i = parseInt(t.currentTarget._name.substr(4), 10) - 1;
        e.o2BtnsArr[i] = t.currentTarget._buttonState,
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    otherIsWrong(t, e) {
        const i = this;
        let n = Right1View.instance(),
        o = Wrong1View.instance(),
        r = Right2View.instance(),
        s = Wrong2View.instance(),
        a = !1,
        l = 0;
        if (t.forEach(function(t, e) {
            l += t
        }), l > e.length) i.wrongNum += 1,
        a = !0;
        else for (let n = 0; n < e.length; n++) {
            if (1 != t[e[n]]) {
                i.wrongNum += 1,
                a = !0;
                break
            }
            console.log(t[e[n]])
        }
        a ? parseInt(i.big.text(), 10) >= i.answer.length ? (AXEPopupManager.manager().popupView(s), s.view().addListener(AXEEvent.REMOVE_FROM_STAGE, i, i.answerEnd)) : (AXEPopupManager.manager().popupView(o), o.view().addListener(AXEEvent.REMOVE_FROM_STAGE, i, i.hintViewRemove)) : parseInt(i.big.text(), 10) >= i.answer.length ? (AXEPopupManager.manager().popupView(r), r.view().addListener(AXEEvent.REMOVE_FROM_STAGE, i, i.answerEnd)) : (AXEPopupManager.manager().popupView(n), n.view().addListener(AXEEvent.REMOVE_FROM_STAGE, i, i.hintViewRemove))
    }
    onBtnNextClick() {
        const t = this;
        let e = Right1View.instance(),
        i = Wrong1View.instance();
        if (Array.isArray(t.answer[parseInt(t.big.text(), 10) - 1][1])) if (5 == t.answer[parseInt(t.big.text(), 10) - 1][0]) {
            if (t.o1BtnsArr.reduce(function(t, e) {
                return t + e
            },
            0) <= 0) return alert("请选择答案！"),
            !1;
            t.otherIsWrong(t.o1BtnsArr, t.answer[parseInt(t.big.text(), 10) - 1][1])
        } else {
            if (t.o2BtnsArr.reduce(function(t, e) {
                return t + e
            },
            0) <= 0) return alert("请选择答案！"),
            !1;
            t.otherIsWrong(t.o2BtnsArr, t.answer[parseInt(t.big.text(), 10) - 1][1])
        } else t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove))
    }
    hintViewRemove() {
        Right1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        Wrong1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        this.question.pause(this.answer[parseInt(this.big.text(), 10)][0]);
        let t = parseInt(this.big.text(), 10);
        this.big.text(t + 1),
        this.btnNext.visible(!1),
        this.currentBtn = null
    }
    onBtnSubmitClick() {
        const t = this;
        let e = Right2View.instance(),
        i = Wrong2View.instance();
        if (Array.isArray(t.answer[parseInt(t.big.text(), 10) - 1][1])) if (5 == t.answer[parseInt(t.big.text(), 10) - 1][0]) {
            if (t.o1BtnsArr.reduce(function(t, e) {
                return t + e
            },
            0) <= 0) return alert("请选择答案！"),
            !1;
            t.otherIsWrong(t.o1BtnsArr, t.answer[parseInt(t.big.text(), 10) - 1][1])
        } else {
            if (t.o2BtnsArr.reduce(function(t, e) {
                return t + e
            },
            0) <= 0) return alert("请选择答案！"),
            !1;
            t.otherIsWrong(t.o2BtnsArr, t.answer[parseInt(t.big.text(), 10) - 1][1])
        } else t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd));
        t.currentBtn = null
    }
    onBtnsChange(t) {
        const e = this;
        let i = parseInt(t.target._selectedButton._parent._name.substr(1, 1)) - 1;
        e.currentBtn = e.qBtns[i];
        let n = "";
        switch (e.currentBtn.selectedIndex()) {
        case 0:
            n = "A";
            break;
        case 1:
            n = "B";
            break;
        case 2:
            n = "C";
            break;
        case 3:
            n = "D";
            break;
        case 4:
            n = "E"
        }
        AXETracker.trackEvent("question" + (i + 21), n, "Click"),
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    answerEnd() {
        const t = this;
        Right2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        Wrong2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        AnswerEnv.currentQ = 4,
        AnswerAPI.qSubmit(TimeModel.timer().timeNum, 4, t.answer.length, t.answer.length - t.wrongNum,
        function(e) {
            t.sendParams("time", "timeTxt", TimeModel.timer().timerText()),
            UserModel.currentUser().fastTime = e.historyBest,
            AnswerEnv.wrongNum = t.wrongNum,
            TimeModel.timer().resetTime(),
            t.jumpTo("time")
        },
        function(e, i) {
            return 44500 == e ? (alert("活动未开始"), t.jumpTo("list"), !1) : 44501 == e ? (alert("活动已结束"), t.jumpTo("list"), !1) : 44101 == e ? (alert("请先注册哦"), window.location.href = "https://3m.convertlab.com/loyalty/page/4baa02518f8c47cfb871591bb1693043-3Amd_wj36dn46_dNCR-WIQ", !1) : void 0
        })
    }
    onViewUpdated(t, e) {
        super.onViewUpdated(t, e);
        const i = this;
        i.prepared && parseInt(i.big.text(), 10) <= i.answer.length && (TimeModel.timer().timeNum = 1e3 * e, i.currentTime.text(TimeModel.timer().timerText()))
    }
    onAnswerUpdate(t) {
        const e = this;
        let i = e.question.layers[e.answer[t][2]].contentView.subViews()[1];
        e.question.layers[e.answer[t][2]].contentView.subViews()[0].subViewByName("current-num").text(t + 1 + "、");
        let n = i.subViews(),
        o = [];
        for (let t = 0; t < n.length; t++) o.push(t);
        let r = AXEArrayUtil.shuffleList(o);
        n.forEach(function(t, e) {
            t.subViews()[0].subViewByName("answer").goToAndStop(r[e]),
            t.subViews()[1].subViewByName("answer").goToAndStop(r[e])
        });
        for (let i = 0; i < n.length; i++) if (e.answer[t][1] == n[i].subViews()[0].subViewByName("answer").currentFrame()) {
            e.answer[t][1] = i,
            console.log(e.answer[t], i, "for");
            break
        }
    }
    insetOther() {
        const t = this;
        t.oAnswer = AXEArrayUtil.shuffleList([0, 1, 2, 3]),
        t.o1Btns.subViews().forEach(function(e, i) {
            e.buttonState(AXEButtonState.NORMAL_STATE),
            e.subViews()[0].subViewByName("answer").goToAndStop(t.oAnswer[i]),
            e.subViews()[1].subViewByName("answer").goToAndStop(t.oAnswer[i]);
            for (let n = 0; n < t.otherAnswer[0][1].length; n++) if (t.otherAnswerCopy[0][1][n] == e.subViews()[0].subViewByName("answer").currentFrame()) {
                t.otherAnswer[0][1][n] = i;
                break
            }
        }),
        t.o2Btns.subViews().forEach(function(e, i) {
            e.buttonState(AXEButtonState.NORMAL_STATE),
            e.subViews()[0].subViewByName("answer").goToAndStop(t.oAnswer[i]),
            e.subViews()[1].subViewByName("answer").goToAndStop(t.oAnswer[i]);
            for (let n = 0; n < t.otherAnswer[1][1].length; n++) if (t.otherAnswerCopy[1][1][n] == e.subViews()[0].subViewByName("answer").currentFrame()) {
                t.otherAnswer[1][1][n] = i;
                break
            }
        });
        let e = AXEArrayUtil.shuffleList([0, 1, 2, 3, 4, 5, 6]);
        t.answer.splice(e[0], 0, t.otherAnswer[0]),
        t.answer.splice(e[1], 0, t.otherAnswer[1]),
        t.answer.splice(5, 2),
        console.log(t.answer),
        t.answer.forEach(function(e, i) {
            t.question.layers[t.answer[i][2]].contentView.subViews()[0].subViewByName("current-num").text(i + 1 + "、")
        })
    }
    onViewAddToStage() {
        const t = this;
        if (super.onViewAddToStage.call(t), t.prepared) {
            t.qBtns.forEach(function(t, e) {
                t.cancelSelect()
            }),
            t.answer = [],
            t.answerCopy.forEach(function(e, i) {
                t.answer.push(e.slice())
            });
            let e = JSON.stringify(t.otherAnswerCopy);
            t.otherAnswer = JSON.parse(e),
            t.big.text("1"),
            t.small.text(t.answer.length),
            t.question.pause(0),
            TimeModel.timer().initTime(),
            t.answer = AXEArrayUtil.shuffleList(t.answer),
            t.wrongNum = 0,
            t.currentBtn = null,
            t.btnNext.visible(!1),
            t.btnSubmit.visible(!1),
            AnswerEnv.wrongNum = 0;
            for (let e = 0; e < t.answer.length; e++) t.onAnswerUpdate(e);
            t.oAnswer = null,
            t.o1BtnsArr = [0, 0, 0, 0],
            t.o2BtnsArr = [0, 0, 0, 0],
            t.insetOther(),
            t.question.pause(t.answer[0][0])
        }
    }
}
define("question4_page", ["answer_page", "hint_view"],
function() {});
class Question5Page extends AnswerPage {
    constructor() {
        super();
        this.question = null,
        this.currentTime = null,
        this.numView = null,
        this.big = null,
        this.small = null,
        this.qBtns = [],
        this.answer = [],
        this.answerCopy = [[0, 3, 6], [1, 0, 5], [2, 1, 4], [3, 2, 3], [4, 1, 2], [5, 3, 1], [6, 2, 0]],
        this.btnNext = null,
        this.btnSubmit = null,
        this.currentBtn = null,
        this.wrongNum = 0
    }
    pageName() {
        return "question5"
    }
    onViewControllerPrepared() {
        const t = this;
        super.onViewControllerPrepared.call(t),
        t.question = t.view().subViewByName("question"),
        t.numView = t.view().subViewByName("num"),
        t.big = t.view().subViewByName("big"),
        t.small = t.view().subViewByName("small"),
        t.currentTime = t.view().subViewByName("current-time"),
        t.view().subViewsByReg(/q\d{1,2}_btns/).forEach(function(e, i) {
            let n = e.subViews();
            t.qBtns[i] = new AXEButtonGroup,
            t.qBtns[i].addButtons(n),
            t.qBtns[i].addListener(AXEEvent.CHANGE, t, t.onBtnsChange)
        }),
        t.qBtns.reverse(),
        t.btnNext = t.view().subViewByName("btn-next"),
        t.btnNext.addListener(AXETouchEvent.CLICK, t, t.onBtnNextClick),
        t.btnSubmit = t.view().subViewByName("btn-submit"),
        t.btnSubmit.addListener(AXETouchEvent.CLICK, t, t.onBtnSubmitClick)
    }
    onBtnNextClick() {
        const t = this;
        let e = Right1View.instance(),
        i = Wrong1View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.hintViewRemove))
    }
    hintViewRemove() {
        Right1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        Wrong1View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, this, this.hintViewRemove),
        this.question.pause(this.answer[parseInt(this.big.text(), 10)][0]);
        let t = parseInt(this.big.text(), 10);
        this.big.text(t + 1),
        this.btnNext.visible(!1),
        this.currentBtn = null
    }
    onBtnSubmitClick() {
        const t = this;
        let e = Right2View.instance(),
        i = Wrong2View.instance();
        t.currentBtn.selectedIndex() != t.answer[parseInt(t.big.text(), 10) - 1][1] ? (t.wrongNum += 1, AXEPopupManager.manager().popupView(i), i.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)) : (AXEPopupManager.manager().popupView(e), e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd)),
        t.currentBtn = null
    }
    onBtnsChange(t) {
        const e = this;
        let i = parseInt(t.target._selectedButton._parent._name.substr(1, 1)) - 1;
        e.currentBtn = e.qBtns[i];
        let n = "";
        switch (e.currentBtn.selectedIndex()) {
        case 0:
            n = "A";
            break;
        case 1:
            n = "B";
            break;
        case 2:
            n = "C";
            break;
        case 3:
            n = "D";
            break;
        case 4:
            n = "E"
        }
        AXETracker.trackEvent("question" + (i + 29), n, "Click"),
        parseInt(e.big.text(), 10) >= e.answer.length ? (e.btnNext.visible(!1), e.btnSubmit.visible(!0)) : e.btnNext.visible(!0)
    }
    answerEnd() {
        const t = this;
        Right2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        Wrong2View.instance().view().removeListener(AXEEvent.REMOVE_FROM_STAGE, t, t.answerEnd),
        AnswerEnv.currentQ = 5,
        AnswerAPI.qSubmit(TimeModel.timer().timeNum, 5, t.answer.length, t.answer.length - t.wrongNum,
        function(e) {
            t.sendParams("time", "timeTxt", TimeModel.timer().timerText()),
            AnswerEnv.wrongNum = t.wrongNum,
            UserModel.currentUser().fastTime = e.historyBest,
            TimeModel.timer().resetTime(),
            t.jumpTo("time")
        },
        function(e, i) {
            return 44500 == e ? (alert("活动未开始"), t.jumpTo("list"), !1) : 44501 == e ? (alert("活动已结束"), t.jumpTo("list"), !1) : 44101 == e ? (alert("请先注册哦"), window.location.href = "https://3m.convertlab.com/loyalty/page/4baa02518f8c47cfb871591bb1693043-3Amd_wj36dn46_dNCR-WIQ", !1) : void 0
        })
    }
    onViewUpdated(t, e) {
        super.onViewUpdated(t, e);
        const i = this;
        i.prepared && parseInt(i.big.text(), 10) <= i.answer.length && (TimeModel.timer().timeNum = 1e3 * e, i.currentTime.text(TimeModel.timer().timerText()))
    }
    onAnswerUpdate(t) {
        const e = this;
        let i = e.question.layers[e.answer[t][2]].contentView.subViews()[1],
        n = e.question.layers[e.answer[t][2]].contentView.subViews()[0].subViewByName("current-num"),
        o = i.subViews(),
        r = [];
        n.text(t + 1 + "、");
        for (let t = 0; t < o.length; t++) r.push(t);
        let s = AXEArrayUtil.shuffleList(r);
        o.forEach(function(t, e) {
            t.subViews()[0].subViewByName("answer").goToAndStop(s[e]),
            t.subViews()[1].subViewByName("answer").goToAndStop(s[e])
        });
        for (let i = 0; i < o.length; i++) if (e.answer[t][1] == o[i].subViews()[0].subViewByName("answer").currentFrame()) {
            e.answer[t][1] = i,
            console.log(e.answer[t], i, "for");
            break
        }
    }
    onViewAddToStage() {
        const t = this;
        if (super.onViewAddToStage.call(t), t.prepared) {
            t.qBtns.forEach(function(t) {
                t.cancelSelect()
            }),
            t.answer = [],
            t.answerCopy.forEach(function(e, i) {
                t.answer.push(e.slice())
            }),
            t.big.text("1"),
            TimeModel.timer().initTime(),
            t.answer = AXEArrayUtil.shuffleList(t.answer),
            t.answer.splice(4, 2),
            t.wrongNum = 0,
            t.currentBtn = null,
            t.btnNext.visible(!1),
            t.btnSubmit.visible(!1),
            AnswerEnv.wrongNum = 0;
            for (let e = 0; e < t.answer.length; e++) t.onAnswerUpdate(e);
            t.question.pause(t.answer[0][0]),
            t.small.text(t.answer.length)
        }
    }
}
define("question5_page", ["answer_page", "hint_view"],
function() {});
class TimePage extends AnswerPage {
    constructor() {
        super();
        this.currentTime = null,
        this.fastestTime = null,
        this.btnAgain = null,
        this.successBox = null,
        this.wrongBox = null,
        this.wrongTxt = null
    }
    pageName() {
        return "time"
    }
    onViewControllerPrepared() {
        super.onViewControllerPrepared.call(this),
        this.successBox = this.view().subViewByName("success_box"),
        this.wrongBox = this.view().subViewByName("wrong_box"),
        this.wrongTxt = this.view().subViewByName("wrong-txt"),
        this.currentTime = this.view().subViewByName("current-time"),
        this.fastestTime = this.view().subViewByName("fastest-time"),
        this.btnAgain = this.view().subViewByName("btn-again"),
        this.btnAgain.addListener(AXETouchEvent.CLICK, this, this.onBtnAgainClick)
    }
    onBtnAgainClick() {
        AXETracker.trackEvent("again_btn", "question" + AnswerEnv.currentQ, "Click"),
        this.jumpTo("list")
    }
    onSuccessViewRemove() {
        this.view().removeAllHTML(!1)
    }
    onViewAddToStage() {
        const t = this;
        if (super.onViewAddToStage.call(t), t.prepared) if (UserModel.currentUser().chancesRemain -= 1, AnswerEnv.wrongNum > 0) t.successBox.visible(!1),
        t.wrongBox.visible(!0),
        t.wrongTxt.text(AnswerEnv.wrongNum);
        else {
            t.successBox.visible(!0),
            t.wrongBox.visible(!1),
            t.currentTime.text(t.getParams("timeTxt")),
            t.fastestTime.text(UserModel.currentUser().fastTime),
            t.view().removeAllHTML(!0);
            let e = SuccessView.instance();
            AXEPopupManager.manager().popupView(e),
            e.view().addListener(AXEEvent.REMOVE_FROM_STAGE, t, t.onSuccessViewRemove)
        }
    }
}
define("time_page", ["answer_page"],
function() {});
class RankingPage extends AnswerPage {
    constructor() {
        super();
        this.btnBack = null,
        this.typeBtn = null,
        this.type2 = null,
        this.contentBox = null,
        this.slice = null,
        this.userInfo = null,
        this.userInFoClone = null
    }
    pageName() {
        return "ranking"
    }
    onViewControllerPrepared() {
        super.onViewControllerPrepared.call(this),
        this.type2 = this.view().subViewByName("type2"),
        this.userInfo = this.view().subViewByName("user_info"),
        this.userInfo.remove(),
        this.contentBox = this.view().subViewByName("content-box"),
        this.contentBox.dataSource(this),
        this.btnTips = this.view().subViewByName("btn-tips"),
        this.btnTips.addListener(AXETouchEvent.CLICK, this, this.onBtnTipsClick),
        this.btnBack = this.view().subViewByName("btn-back"),
        this.btnBack.addListener(AXETouchEvent.CLICK, this, this.onBtnBackClick)
    }
    onBtnTipsClick() {
        AXETracker.trackEvent("list_back_btn", "fhhdy", "Click");
        let t = TipsView.instance();
        AXEPopupManager.manager().popupView(t)
    }
    onBtnBackClick() {
        this.jumpTo("list")
    }
    getRanking() {
        const t = this;
        null != t.slices && t.slices.length > 0 && AXEArrayUtil.each(t.slices,
        function(t, e) {
            e.dealloc()
        }),
        t.slices = [],
        AnswerAPI.ranking(100,
        function(e) {
            AXEArrayUtil.each(e,
            function(e, i) {
                var n = RankingModel.fromObject(i),
                o = t.userInfo.clone();
                o.rankingIndex(e + 1),
                o.rankingModel(n),
                t.slices.push(o)
            }),
            t.contentBox.offset(new AXEVec2(0, 0)),
            t.contentBox.reloadData()
        },
        function(t) {
            console.log(t)
        })
    }
    onViewAddToStage() {
        const t = this;
        super.onViewAddToStage.call(t),
        t.prepared && t.getRanking()
    }
    isVertical(t) {
        return ! 0
    }
    cellCount(t) {
        return this.slices.length
    }
    cellSizeByIndex(t, e) {
        return this.slices[e].height()
    }
    cellByIndex(t, e) {
        return this.slices[e]
    }
}
define("ranking_page", ["answer_page", "info_view"],
function() {});
var AnswerApp = function() {};
AnswerApp.prototype = new AXEStageController,
AnswerApp.prototype.constructor = AnswerApp,
AnswerApp.prototype.navi = null,
AnswerApp.prototype.onViewControllerPrepared = function() {
    AXEPageController.config({
        needTrack: !0
    }),
    this.navi = new AXENaviController(this.view().subViewByName("navi"), !1, !1),
    this.navi.pages().push(new IndexPage, new ListPage, new Question1Page, new Question2Page, new Question3Page, new Question4Page, new Question5Page, new TimePage, new RankingPage);
    var t = AXEPopupManager.manager().view();
    this.view().addSubView(t)
},
AnswerApp.prototype.onViewAddToStage = function() {
    if (this.prepared) {
        var t = AXEURLUtil.decodeParams(AXEURLUtil.query());
        t && t.hasOwnProperty("regToken") ? (this.navi.showPageByName("list"), this.navi.preLoadPages()) : (this.navi.showPageByName("index"), this.navi.preLoadPages())
    }
},
define("answer", ["answer_env", "stage_ctrl", "page_ctrl", "navi_ctrl", "popup_manager", "button_group", "index_page", "form_page", "list_page", "question1_page", "question2_page", "question3_page", "question4_page", "question5_page", "time_page", "ranking_page"],
function() {}),
require.config({
    baseUrl: "./static/js",
    paths: void 0 !== window.AXELibrary ? AXELibrary.modules() : {},
    shim: void 0 !== window.AXELibrary ? AXELibrary.shims() : {},
    urlArgs: "v=" + $('meta[name="axe:version"]').attr("content")
}),
require(["env", "axe", "wechat", "url_util", "loading_view", "tracker", "loader_config", "answer_api", "info_view", "answer"], () = >{
    var t = AXEURLUtil.decodeParams(AXEURLUtil.query());
    t && t.hasOwnProperty("openid") && UserModel.currentUser().login(t.openid),
    UserModel.currentUser().isLogin ? AnswerAPI.userInfo(function(t) {
        var e;
        UserModel.currentUser().needReg = t.needReg,
        UserModel.currentUser().openSeries = t.openSeries,
        UserModel.currentUser().chancesRemain = t.chancesRemain,
        UserModel.currentUser().chancesTotal = t.chancesTotal,
        (e = AXEWechat.wechat()).shareTitle = "答题大赢家第二季来啦~工友们冲鸭！",
        e.shareDesc = "",
        e.shareImageURL = AXEURLUtil.relativePath(AXEURLUtil.assetLoadURL(AXELoaderConfig.baseURI, "images/share.jpg", AXELoaderConfig.version)),
        e.shareLink = AXEURLUtil.cleanURL(!1) + "?share=share",
        e.updateSharing(),
        e.addListener(AXESNSEvent.SUCCESS_SHARING, null,
        function(t) {
            AnswerAPI.shareLog(function(t) {
                AnswerAPI.userInfo(function(t) {
                    AXETracker.trackEvent("share", "share", "Click"),
                    UserModel.currentUser().chancesTotal = t.chancesTotal,
                    UserModel.currentUser().chancesRemain = t.chancesRemain
                },
                function(t) {
                    console.log(t)
                })
            },
            function(t) {
                console.log(t)
            })
        }),
        AXE.initAXE({
            views: {
                progress: LoadingView,
                info: InfoView
            },
            tracker: {
                types: AXETracker.BAIDU
            },
            stage: {
                class: AnswerApp,
                view: "views/stage.xml"
            },
            ticket: AnswerAPI.jsTicket
        })
    },
    function(t) {
        console.log(t)
    }) : AnswerAPI.jumpToOauth()
}),
define("main",
function() {});