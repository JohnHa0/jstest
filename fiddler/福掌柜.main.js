var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype,
    t.prototype = new i
},
easy; !
function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = !1);
            var i = t.call(this) || this;
            return i._isAddedToStage = !1,
            i._top = 0,
            i._topEnabled = !1,
            i._left = 0,
            i._leftEnabled = !1,
            i._bottom = 0,
            i._bottomEnabled = !1,
            i._right = 0,
            i._rightEnabled = !1,
            i._horizontalEnabled = !1,
            i._horizontalCenter = 0,
            i._verticalEnabled = !1,
            i._verticalCenter = 0,
            i._registryPointEnabled = !1,
            i._registryOffsetX = 0,
            i._registryOffsetY = 0,
            i._data = null,
            i._enabled = !0,
            i._anchorEnabled = !1,
            i._anchorX = 0,
            i._anchorY = 0,
            i._hasInvalidatePosition = !1,
            i._drawDelay = !1,
            i._hasInvalidate = !1,
            i.addEventListener(egret.Event.ADDED_TO_STAGE, i.onFirstAddToStage, i),
            i._drawDelay = e,
            i
        }
        return __extends(e, t),
        e.prototype.onFirstAddToStage = function(t) {
            this._isAddedToStage = !0,
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onFirstAddToStage, this),
            this.createChildren(),
            this.initData()
        },
        e.prototype.initData = function() {},
        e.prototype.createChildren = function() {
            this.touchEnabled = !1,
            0 == this.width && (this.width = 100),
            0 == this.height && (this.height = 100)
        },
        Object.defineProperty(e.prototype, "width", {
            get: function() {
                return this.$getWidth()
            },
            set: function(e) {
                e > 0 && (t.prototype.$setWidth.call(this, e), 0 != this._anchorX && (this.anchorOffsetX = e * this._anchorX), this.onInvalidatePosition(), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "height", {
            get: function() {
                return this.$getHeight()
            },
            set: function(e) {
                e > 0 && (t.prototype.$setHeight.call(this, e), 0 != this._anchorY && (this.anchorOffsetY = e * this._anchorY), this.onInvalidatePosition(), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.move = function(t, e) {
            this.x = t,
            this.y = e
        },
        e.prototype.setSize = function(t, e) { (this.width != t || this.height != e) && (this.width = t, this.height = e)
        },
        Object.defineProperty(e.prototype, "top", {
            get: function() {
                return this._top
            },
            set: function(t) {
                this._top != t && (this._top = t, this._topEnabled && this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "topEnabled", {
            get: function() {
                return this._topEnabled
            },
            set: function(t) {
                this._topEnabled = t,
                this.onInvalidatePosition()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "left", {
            get: function() {
                return this._left
            },
            set: function(t) {
                this._left != t && (this._left = t, this._leftEnabled && this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "leftEnabled", {
            get: function() {
                return this._leftEnabled
            },
            set: function(t) {
                this._leftEnabled = t,
                this.onInvalidatePosition()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "bottom", {
            get: function() {
                return this._bottom
            },
            set: function(t) {
                this._bottom != t && (this._bottom = t, this._bottomEnabled && this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "bottomEnabled", {
            get: function() {
                return this._bottomEnabled
            },
            set: function(t) {
                this._bottomEnabled = t,
                this.onInvalidatePosition()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "right", {
            get: function() {
                return this._right
            },
            set: function(t) {
                this._right != t && (this._right = t, this._rightEnabled && this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "rightEnabled", {
            get: function() {
                return this._rightEnabled
            },
            set: function(t) {
                this._rightEnabled = t,
                this.onInvalidatePosition()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "horizontalEnabled", {
            get: function() {
                return this._horizontalEnabled
            },
            set: function(t) {
                this._horizontalEnabled = t,
                this.onInvalidatePosition()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "horizontalCenter", {
            get: function() {
                return this._horizontalCenter
            },
            set: function(t) {
                this._horizontalCenter != t && (this._horizontalCenter = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "verticalEnabled", {
            get: function() {
                return this._verticalEnabled
            },
            set: function(t) {
                this._verticalEnabled != t && (this._verticalEnabled = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "verticalCenter", {
            get: function() {
                return this._verticalCenter
            },
            set: function(t) {
                this._verticalCenter != t && (this._verticalCenter = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "registryPointEnabled", {
            get: function() {
                return this._registryPointEnabled
            },
            set: function(t) {
                this._registryPointEnabled != t && (this._registryPointEnabled = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.onInvalidatePosition = function() {
            if (!this._hasInvalidatePosition) {
                this._hasInvalidatePosition = !0,
                this.addEventListener(egret.Event.ENTER_FRAME, this.resetPosition, this);
                for (var t = 0; t < this.numChildren; t++) this.getChildAt(t) instanceof e && this.getChildAt(t).onInvalidatePosition()
            }
        },
        e.prototype.resetPosition = function() {
            var t = this.parent;
            if (null != t) {
                var i = t.width,
                n = t.height,
                s = this.width,
                a = this.height; (0 / 0 == i || void 0 == i) && (i = t.width, (0 / 0 == i || void 0 == i) && (i = t.measuredWidth), (0 / 0 == i || void 0 == i) && (i = 0)),
                (0 / 0 == n || void 0 == n) && (n = t.height, (0 / 0 == n || void 0 == n) && (n = t.measuredHeight), (0 / 0 == n || void 0 == n) && (n = 0)),
                (0 / 0 == s || void 0 == s) && (s = this.width, (0 / 0 == s || void 0 == s) && (s = this.measuredWidth), (0 / 0 == s || void 0 == s) && (s = 0)),
                (0 / 0 == a || void 0 == a) && (a = this.height, (0 / 0 == a || void 0 == a) && (a = this.measuredHeight), (0 / 0 == a || void 0 == a) && (s = 0));
                var r = !1,
                o = !1;
                if (this._topEnabled && !this._bottomEnabled) this.y = this._top;
                else if (this._bottomEnabled && !this._topEnabled) this.y = n - this._bottom - a;
                else if (this._topEnabled && this._bottomEnabled && (this.y = this._top, a = n - this._top - this._bottom, this.height != a)) {
                    this.height = a;
                    for (var h = 0; h < this.numChildren; h++) this.getChildAt(h) instanceof e && this.getChildAt(h).onInvalidatePosition();
                    r = !0
                }
                if (this._leftEnabled && !this._rightEnabled) this.x = this._left;
                else if (this._rightEnabled && !this._leftEnabled) this.x = i - this._right - s;
                else if (this._leftEnabled && this._rightEnabled && (this.x = this._left, s = i - this._left - this._right, this.width != s)) {
                    this.width = s;
                    for (var h = 0; h < this.numChildren; h++) this.getChildAt(h) instanceof e && this.getChildAt(h).onInvalidatePosition();
                    o = !0
                }
                this._horizontalEnabled && !o && (this.x = (i - s) / 2 + this._horizontalCenter),
                this._verticalEnabled && !r && (this.y = (n - a) / 2 + this._verticalCenter),
                this._registryPointEnabled && (this.x = i / 2 + this._registryOffsetX, this.y = n / 2 + this._registryOffsetY),
                this._anchorEnabled && (this.anchorOffsetX = this._anchorX * this.width, this.anchorOffsetY = this._anchorY * this.height)
            }
            this.removeEventListener(egret.Event.ENTER_FRAME, this.resetPosition, this),
            this._hasInvalidatePosition = !1
        },
        e.prototype.getData = function() {
            return this._data
        },
        e.prototype.setData = function(t) {
            this._data = t
        },
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
        e.prototype.clean = function() {},
        Object.defineProperty(e.prototype, "enabled", {
            get: function() {
                return this._enabled
            },
            set: function(t) {
                this._enabled = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "cx", {
            get: function() {
                return this.width / 2
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "cy", {
            get: function() {
                return this.height / 2
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.removeFromParent = function() {
            this.parent && this.parent.removeChild(this)
        },
        e.prototype.getGlobalXY = function() {
            var t = new egret.Point(0, 0);
            return this.localToGlobal(t.x, t.y, t),
            t
        },
        Object.defineProperty(e.prototype, "actualWidth", {
            get: function() {
                return this.width * this.scaleX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "actualHeight", {
            get: function() {
                return this.height * this.scaleX
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getRegPoint = function() {
            var t = new egret.Point(0, 0);
            return 0 != this.anchorOffsetX && (t.x = this.anchorOffsetX),
            0 != this.anchorOffsetX && (t.y = this.anchorOffsetY),
            t
        },
        e.prototype.invalidate = function() {
            this._hasInvalidate || this._drawDelay || (this.addEventListener(egret.Event.ENTER_FRAME, this.onInvalidate, this), this._hasInvalidate = !0)
        },
        e.prototype.onInvalidate = function(t) {
            this.draw(),
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onInvalidate, this),
            this._hasInvalidate = !1
        },
        e.prototype.draw = function() {},
        e.prototype._setDrawDelay = function(t) {
            this._drawDelay = t,
            this._drawDelay ? (this.removeEventListener(egret.Event.ENTER_FRAME, this.onInvalidate, this), this._hasInvalidate = !1) : this.invalidate()
        },
        Object.defineProperty(e.prototype, "drawDelay", {
            get: function() {
                return this._drawDelay
            },
            set: function(t) {
                this._drawDelay = t,
                this._drawDelay ? (this.removeEventListener(egret.Event.ENTER_FRAME, this.onInvalidate, this), this._hasInvalidate = !1) : this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isAddedToStage", {
            get: function() {
                return this._isAddedToStage
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(t) {
                this._anchorX != t && (this._anchorX = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(t) {
                this._anchorY != t && (this._anchorY = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "anchorEnabled", {
            get: function() {
                return this._anchorEnabled
            },
            set: function(t) {
                this._anchorEnabled != t && (this._anchorEnabled = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "registryOffsetX", {
            get: function() {
                return this._registryOffsetX
            },
            set: function(t) {
                this._registryOffsetX != t && (this._registryOffsetX = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "registryOffsetY", {
            get: function() {
                return this._registryOffsetY
            },
            set: function(t) {
                this._registryOffsetY != t && (this._registryOffsetY = t, this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } (egret.DisplayObjectContainer);
    t.BaseGroup = e,
    __reflect(e.prototype, "easy.BaseGroup")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = !1);
            var i = e.call(this, t) || this;
            return i._showBg = !0,
            i._bgColor = 13421772,
            i._bgImage = null,
            i._bgTexture = null,
            i._scale9GridEnable = !1,
            i._scale9GridRect = null,
            i._fillMode = "scale",
            i._border = !0,
            i._clip = !1,
            i._touchNonePixel = !1,
            i
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this)
        },
        Object.defineProperty(i.prototype, "bgColor", {
            get: function() {
                return this._bgColor
            },
            set: function(t) {
                this._bgColor != t && this._showBg && (this._bgColor = t, this._bgTexture = null, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fillMode", {
            get: function() {
                return this._fillMode
            },
            set: function(t) {
                this._fillMode != t && (this._fillMode = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "showBg", {
            get: function() {
                return this._showBg
            },
            set: function(t) {
                this._showBg != t && (this._showBg = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "clip", {
            get: function() {
                return this._clip
            },
            set: function(t) {
                t != this._clip && (this._clip = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.draw = function() {
            if (0 != this.width && 0 != this.height) {
                if (e.prototype.draw.call(this), this._clip) {
                    var i = t.ObjectPool.getByClass(egret.Rectangle);
                    this.scrollRect && (t.ObjectPool.recycleClass(this.scrollRect), this.scrollRect = null),
                    i.width = this.width,
                    i.height = this.height,
                    i.x = 0,
                    i.y = 0,
                    this.scrollRect = i
                } else this.scrollRect = null;
                this._showBg || this._touchNonePixel && this.touchEnabled ? (this.addDefaultSkin(), this._bgImage && (this._bgImage.visible = !0, this._touchNonePixel && !this._showBg ? this._bgImage.alpha = 0 : this._bgImage.alpha = 1)) : this._bgImage && (this._bgImage.visible = !1, this._bgImage.parent && this._bgImage.parent.removeChild(this._bgImage))
            }
        },
        i.prototype.addDefaultSkin = function() {
            if (this.width > 0 && this.height > 0) if (null == this._bgImage && (this._bgImage = new egret.Bitmap), null == this._bgTexture) {
                this._bgImage.fillMode = egret.BitmapFillMode.SCALE;
                var t = new egret.Shape;
                t.width = this.width,
                t.height = this.height,
                t.graphics.beginFill(this._bgColor, 1),
                t.graphics.drawRect(0, 0, this.width, this.height),
                t.graphics.endFill(),
                this._border && (t.graphics.lineStyle(1, 65280, 1), t.graphics.drawRect(0, 0, this.width, this.height));
                var e = new egret.RenderTexture;
                e.drawToTexture(t),
                this._bgTexture = e,
                this._bgImage.texture = this._bgTexture
            } else this._bgImage.texture = this._bgTexture;
            this._bgImage && (this._showBg || this._touchNonePixel && this.touchEnabled) && (this._bgImage.parent || this.addChildAt(this._bgImage, 0), this._scale9GridEnable && (this._bgImage.scale9Grid = this._scale9GridRect), this._bgImage.width = this.width, this._bgImage.height = this.height, this._bgImage.fillMode = this._fillMode)
        },
        Object.defineProperty(i.prototype, "border", {
            get: function() {
                return this._border
            },
            set: function(t) {
                this._border != t && (this._border = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.getDefaultSkin = function() {
            return this._bgImage
        },
        Object.defineProperty(i.prototype, "bgTexture", {
            get: function() {
                return this._bgTexture
            },
            set: function(t) {
                this._bgTexture != t && (this._bgTexture = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "touchNonePixel", {
            get: function() {
                return this._touchNonePixel
            },
            set: function(t) {
                t != this._touchNonePixel && (this._touchNonePixel = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridEnable", {
            get: function() {
                return this._scale9GridEnable
            },
            set: function(t) {
                this._scale9GridEnable != t && (this._scale9GridEnable = t, this._scale9GridEnable && null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle, this._scale9GridRect.x = 1, this._scale9GridRect.y = 1, this._scale9GridRect.width = 1, this._scale9GridRect.height = 1), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridX", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.x: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle, this._scale9GridRect.x = 1, this._scale9GridRect.y = 1, this._scale9GridRect.width = 1, this._scale9GridRect.height = 1),
                this._scale9GridRect.x != t && (this._scale9GridRect.x = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridY", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.y: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle, this._scale9GridRect.x = 1, this._scale9GridRect.y = 1, this._scale9GridRect.width = 1, this._scale9GridRect.height = 1),
                this._scale9GridRect.y != t && (this._scale9GridRect.y = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridWidth", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.width: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle, this._scale9GridRect.x = 1, this._scale9GridRect.y = 1, this._scale9GridRect.width = 1, this._scale9GridRect.height = 1),
                this._scale9GridRect.width != t && (this._scale9GridRect.width = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridHeight", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.height: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle, this._scale9GridRect.x = 1, this._scale9GridRect.y = 1, this._scale9GridRect.width = 1, this._scale9GridRect.height = 1),
                this._scale9GridRect.height != t && (this._scale9GridRect.height = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridRect", {
            get: function() {
                return this._scale9GridRect
            },
            set: function(t) {
                this._scale9GridRect = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (t.BaseGroup);
    t.Group = e,
    __reflect(e.prototype, "easy.Group")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = !1);
            var i = e.call(this, t) || this;
            return i._ui = null,
            i._uiResReady = !1,
            i._viewResDowloaded = !1,
            i.showLoading = !0,
            i._resUIFileArr = null,
            i._resUIGroup = null,
            i._progressCalculate = null,
            i
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.showBg = !1
        },
        i.prototype.initData = function() {
            this.validateNow()
        },
        i.prototype.setProgress = function(t, e) {},
        i.prototype.enter = function() {
            this.parent || (t.ViewManager.mainContainer ? t.ViewManager.mainContainer.addChild(this) : t.GlobalSetting.STAGE.addChild(this)),
            this.visible = this.showLoading,
            this.enterTransition(),
            this._viewResDowloaded = !1,
            this._resUIFileArr && (this._resUIFileArr.length = 0),
            this._resUIGroup && (this._resUIGroup.length = 0),
            this.parent && (this.x = t.GlobalSetting.DISPLAY_WIDTH / 2 - this.cx, this.y = t.GlobalSetting.DISPLAY_HEIGHT / 2 - this.cy),
            this._data && this.fireUIDownloading()
        },
        i.prototype.enterTransition = function() {
            this.alpha = 0,
            egret.Tween.get(this).to({
                alpha: 1
            },
            500).call(this.enterTransitionComplete, this)
        },
        i.prototype.enterTransitionComplete = function() {},
        i.prototype.outer = function() {
            this.outerTransition()
        },
        i.prototype.outerTransition = function() {
            egret.Tween.get(this).to({
                alpha: .5
            },
            300).call(this.outerTransitionComplete, this).to({
                alpha: 0
            },
            200)
        },
        i.prototype.outerTransitionComplete = function() {
            this._data && (this._data instanceof t.View ? t.ViewManager.waitViewDoEnter() : this._data instanceof t.Win && t.PopupManager.waitWinDoEnter()),
            this._data = null,
            this.removeFromParent()
        },
        i.prototype.getUI = function() {
            return this._ui
        },
        i.prototype.setUI = function(t) {
            this._ui = t,
            this._ui && (this.addChild(this._ui), this.setSize(this._ui.width, this._ui.height)),
            this.showBg = !1
        },
        i.prototype.validateNow = function() {
            this.drawDelay = !1,
            this._ui && this._ui.validateNow && this._ui.validateNow(),
            this._ui && (this._ui.drawDelay = !1),
            this.resetPosition();
            for (var e = 0; e < this.numChildren; e++) this.getChildAt(e) instanceof t.BaseGroup && this.getChildAt(e).resetPosition()
        },
        i.prototype.fireUIDownloading = function() {
            if (this._data && this._data._ui && this._data._ui.hasOwnProperty("resSpriteSheet") && this._data._ui.hasOwnProperty("resFiles")) {
                var e = t.GlobalSetting.CDN_RES;
                if (this._data._ui.hasOwnProperty("resourceRoot") && "" != this._data._ui.resourceRoot && (e = t.GlobalSetting.CDN_RES2), this._resUIFileArr = [].concat(this._data._ui.resFiles), this._resUIFileArr && this._resUIFileArr.length > 0) {
                    if (this._data._ui.hasOwnProperty("resGroup")) {
                        this._resUIGroup = [].concat(this._data._ui.resGroup);
                        for (var i = !0,
                        n = 0; n < this._resUIGroup.length; n++) if (!t.ResManager.isGroupLoaded(this._resUIGroup[n])) {
                            i = !1;
                            break
                        }
                        if (i) return this._viewResDowloaded = !0,
                        this._progressCalculate && this._progressCalculate.reset(),
                        void t.HeartBeat.addListener(this, this.onHbProgress, 2)
                    }
                    for (var s = [], a = 0; a < this._resUIFileArr.length; a++) s.push(t.GlobalSetting.CDN_RES + "assets/ui/" + this._resUIFileArr[a]);
                    return t.ResManager.loadConfigs(s, this._resUIGroup, this.onUIResourceLoadComplete, this, !0),
                    this._progressCalculate && this._progressCalculate.reset(),
                    t.HeartBeat.addListener(this, this.onHbProgress, 2),
                    !1
                }
            } else this._viewResDowloaded = !0,
            this._progressCalculate && this._progressCalculate.reset(),
            t.HeartBeat.addListener(this, this.onHbProgress, 2);
            return ! 0
        },
        i.prototype.onUIResourceLoadComplete = function(e) {
            for (var i = !0,
            n = 0; n < this._resUIGroup.length; n++) {
                var s = this._resUIGroup[n];
                t.ResManager.isGroupLoaded(s);
                if (!t.ResManager.isGroupLoaded(this._resUIGroup[n])) {
                    i = !1;
                    break
                }
            }
            i && (this._resUIGroup.length = 0, this._resUIFileArr.length = 0, this._viewResDowloaded = !0)
        },
        i.prototype.onHbProgress = function() {
            null == this._progressCalculate && (this._progressCalculate = new t.ProgressCalculate),
            this._viewResDowloaded && (this._progressCalculate._progressSpeedUp = this._viewResDowloaded);
            var e = this._progressCalculate.progress();
            this.setProgress(e, 100),
            e >= 100 && (this._data && this._data.validateNow && this._data.validateNow(), t.HeartBeat.removeListener(this, this.onHbProgress), this.outer())
        },
        i
    } (t.Group);
    t.LoadingBaseUI = e,
    __reflect(e.prototype, "easy.LoadingBaseUI")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this, !0) || this;
            return t.METHOD_DEF = {},
            t._ui = null,
            t._uiResReady = !1,
            t._isValidateNow = !1,
            t.showLoading = !0,
            t._forceValidateNow = !1,
            t._loadingUIClz = null,
            t._currentLoading = null,
            t.enterCompleted = !1,
            t._enterEffect = null,
            t._idleLoadedGroupCount = 0,
            t._isIdleDownload = !1,
            t.initWeekListener(),
            t
        }
        return __extends(i, e),
        i.prototype.onFirstAddToStage = function(t) {
            e.prototype.onFirstAddToStage.call(this, t),
            this.drawDelay = !0
        },
        i.prototype.initWeekListener = function() {},
        i.prototype.addHandleEvent = function(t, e) {
            this.METHOD_DEF[t] = e
        },
        i.prototype.addHandlePacket = function(t, e) {
            this.METHOD_DEF["" + t] = e
        },
        i.prototype.receivePacket = function(e) {
            if (this._ui) for (var i in this._ui) 0 == i.indexOf("$") || "__class__" == i || "hashCode" == i || "__types__" == i || "__proto__" == i || this._ui[i] instanceof Function || this._ui[i] instanceof t.Template && this._ui[i] != this && this._ui[i].parent && this._ui[i].receivePacket(e);
            this.METHOD_DEF["" + e.header.messageId] && this[this.METHOD_DEF[e.header.messageId]] && this[this.METHOD_DEF["" + e.header.messageId]].call(this, e)
        },
        i.prototype.receiveEvent = function(e) {
            if (this._ui) for (var i in this._ui) 0 == i.indexOf("$") || "__class__" == i || "hashCode" == i || "__types__" == i || "__proto__" == i || this._ui[i] instanceof Function || (this._ui[i] instanceof t.Template || this._ui[i] instanceof t.List || this._ui[i] instanceof t.ListAd) && this._ui[i] != this && this._ui[i].parent && this._ui[i].receiveEvent(e);
            this.METHOD_DEF[e.type] && this[this.METHOD_DEF[e.type]] && this[this.METHOD_DEF[e.type]].call(this, e)
        },
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.drawDelay = !0,
            this.touchEnabled = !0,
            this.showBg = !1,
            this.addHandleEvent(t.EventType.RESOURCE_DOWNLOADED, "onMyEventResDownloaded"),
            this._uiResReady && !this._isValidateNow && this.validateNow()
        },
        i.prototype.enter = function() {
            if (this._currentLoading, this._uiResReady && !this._isValidateNow && this.validateNow(), this._ui) {
                this._ui.enter && this._ui.enter();
                for (var e in this._ui) this._ui[e] instanceof t.Template && this._ui[e] != this && this._ui[e].parent && this._ui[e].enter()
            }
            this.enterTransition()
        },
        i.prototype.enterTransition = function() {
            this.enterCompleted = !1,
            this._enterEffect ? this._enterEffect.play() : this.enterTransitionComplete()
        },
        i.prototype.enterTransitionComplete = function() {},
        i.prototype.outer = function() {
            if (this._ui) {
                this._ui.outer && this._ui.outer();
                for (var e in this._ui) this._ui[e] instanceof t.Template && this._ui[e] != this && this._ui[e].outer()
            }
            this.outerTransition()
        },
        i.prototype.outerTransition = function() {
            this.outerTransitionComplete()
        },
        i.prototype.outerTransitionComplete = function() {
            this.removeFromParent()
        },
        i.prototype.getUI = function() {
            return this._ui
        },
        i.prototype.setUI = function(t) {
            this._ui = t,
            this._ui && (this.addChild(this._ui), this.setSize(this._ui.width, this._ui.height)),
            this.showBg = !1
        },
        i.prototype.destroy = function() {
            this._ui && (this._ui = null)
        },
        i.prototype.checkResReady = function() {
            return ! this._uiResReady && this._ui && this._ui.resFiles ? "" == this._ui.resSpriteSheet && 0 == this._ui.resFiles.length ? (this.validateNow(), !0) : this._loadingUIClz ? (this._currentLoading = t.ObjectPool.getByClass(this._loadingUIClz, "loading"), this._currentLoading._data = this, this._currentLoading.showLoading = this.showLoading, this._currentLoading.enter(), !1) : !0 : (this._forceValidateNow && this.validateNow(), !0)
        },
        i.prototype.validateNow = function() {
            this.drawDelay = !1,
            this._isValidateNow = !0,
            this._ui && this._ui.validateNow && this._ui.validateNow(),
            this._ui && (this._ui.drawDelay = !1)
        },
        i.prototype.idleDownload = function() {
            if (!this._isIdleDownload) if (!this._uiResReady && this._ui && this._ui.hasOwnProperty("resFiles") && this._ui.resFiles.length > 0) {
                this._idleLoadedGroupCount = 0,
                this._isIdleDownload = !0;
                for (var e = this._ui.resFiles,
                i = [], n = 0; n < e.length; n++) i.push(t.GlobalSetting.CDN_RES + "assets/ui/" + e[n]);
                t.ResManager.loadConfigs(i, [].concat(this._ui.resGroup), this.onLoadingResourceGroupComplete, this, !0)
            } else this._uiResReady = !0
        },
        i.prototype.onLoadingResourceGroupComplete = function(e) {
            if (!this._uiResReady && this._ui && this._ui.hasOwnProperty("resGroup") && this._ui.resGroup.length > 0) {
                for (var i = !0,
                n = 0; n < this._ui.resGroup.length; n++) if (!t.ResManager.isGroupLoaded(this._ui.resGroup[n])) {
                    i = !1;
                    break
                }
                i && (this._uiResReady = !0, this._forceValidateNow = !0)
            }
        },
        i.prototype.onStageResize = function() {
            if (this._ui) {
                this.onInvalidatePosition();
                for (var e in this._ui) this._ui[e] instanceof t.Template && this._ui[e] != this && this._ui[e].onStageResize()
            }
        },
        i
    } (t.Group);
    t.ReceiveGroup = e,
    __reflect(e.prototype, "easy.ReceiveGroup")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._outerEffect = null,
            i._loadingUIClz = t.PopupManager.defaultLoadingClass,
            i
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.enterTransitionComplete = function() {
            e.prototype.enterTransitionComplete.call(this)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this);
            var i = egret.getQualifiedClassName(this),
            n = t.MyEvent.getEvent(t.EventType.WIN_ENTER);
            if (n.addItem("data", i), n.send(), t.GlobalSetting.STATS_WIN) {
                var s = egret.getDefinitionByName("StatsUtil");
                s && s.trackPageview(egret.getQualifiedClassName(this))
            }
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this);
            var i = egret.getQualifiedClassName(this),
            n = t.MyEvent.getEvent(t.EventType.WIN_OUTER);
            n.addItem("data", i),
            n.send()
        },
        i.prototype.onStageResize = function() {
            this.x = t.ViewManager.currentView.cx - this.cx,
            this.y = t.ViewManager.currentView.cy - this.cy;
            var e = t.ObjectPool.getByClass(this._loadingUIClz, "loadingwin", !1);
            e && e.parent && (e.x = 0, e.y = 0)
        },
        i.prototype.hiddent = function() {
            t.PopupManager.hidden(this)
        },
        i
    } (t.ReceiveGroup);
    t.Win = e,
    __reflect(e.prototype, "easy.Win")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._scene = null,
            i._loadingUIClz = t.ViewManager.defaultLoadingClass,
            i
        }
        return __extends(i, e),
        i.prototype.enter = function() {
            e.prototype.enter.call(this);
            var i = egret.getQualifiedClassName(this),
            n = t.MyEvent.getEvent(t.EventType.VIEW_ENTER);
            if (n.addItem("data", i), n.send(), this._scene && this._scene.enter(), this.checkViewSize(), t.GlobalSetting.STATS_VIEW) {
                var s = egret.getDefinitionByName("StatsUtil");
                s && s.trackPageview(egret.getQualifiedClassName(this))
            }
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this);
            var i = egret.getQualifiedClassName(this),
            n = t.MyEvent.getEvent(t.EventType.VIEW_OUTER);
            n.addItem("data", i),
            n.send()
        },
        i.prototype.setUI = function(t) {
            e.prototype.setUI.call(this, t),
            this._ui = t,
            this._ui && this.addChild(this._ui)
        },
        i.prototype.checkViewSize = function() {
            if (t.GlobalSetting.DISPLAY_MODEL == t.GlobalSetting.DISPLAY_VIEW_EASYGAME) {
                var e = this.width,
                i = this.height;
                this._scene ? (e = this._scene.sceneWidth <= 0 ? t.GlobalSetting.STAGE_WIDTH: t.GlobalSetting.STAGE_WIDTH < e ? t.GlobalSetting.STAGE_WIDTH >= t.GlobalSetting.VIEW_MINI_WIDTH ? t.GlobalSetting.STAGE_WIDTH: t.GlobalSetting.VIEW_MINI_WIDTH: t.GlobalSetting.STAGE_WIDTH > this._scene.sceneWidth ? this._scene.sceneWidth: t.GlobalSetting.STAGE_WIDTH, this._scene.sceneHeight <= 0 ? (i = t.GlobalSetting.STAGE_HEIGHT, !egret.NumberUtils.isNumber(i)) : i = t.GlobalSetting.STAGE_HEIGHT < i ? t.GlobalSetting.STAGE_HEIGHT >= t.GlobalSetting.VIEW_MINI_HEIGHT ? t.GlobalSetting.STAGE_HEIGHT: t.GlobalSetting.VIEW_MINI_HEIGHT: t.GlobalSetting.STAGE_HEIGHT > this._scene.sceneHeight ? this._scene.sceneHeight: t.GlobalSetting.STAGE_HEIGHT) : (t.GlobalSetting.STAGE_WIDTH > e ? e = t.GlobalSetting.STAGE_WIDTH >= t.GlobalSetting.VIEW_MINI_WIDTH ? t.GlobalSetting.STAGE_WIDTH: t.GlobalSetting.VIEW_MINI_WIDTH: t.GlobalSetting.VIEW_MINI_WIDTH > e && (e = t.GlobalSetting.STAGE_WIDTH), t.GlobalSetting.STAGE_HEIGHT > i ? i = t.GlobalSetting.STAGE_HEIGHT >= t.GlobalSetting.VIEW_MINI_HEIGHT ? t.GlobalSetting.STAGE_HEIGHT: t.GlobalSetting.VIEW_MINI_HEIGHT: t.GlobalSetting.VIEW_MINI_HEIGHT > i && (i = t.GlobalSetting.STAGE_HEIGHT)),
                e = parseInt("" + e),
                i = parseInt("" + i),
                this.setSize(e, i);
                var n = this.getUI();
                n && n.setSize(e, i),
                this._scene && this._scene.setSize(e, i)
            }
        },
        i.prototype.enterTransition = function() {
            t.ViewManager.currentView && t.ViewManager.currentView != this && t.ViewManager.currentView.outer(),
            e.prototype.enterTransition.call(this)
        },
        i.prototype.enterTransitionComplete = function() {
            t.ViewManager.currentView && t.ViewManager.currentView != this && t.ViewManager.currentView.outerTransitionComplete(),
            e.prototype.enterTransitionComplete.call(this),
            t.ViewManager.currentView = this
        },
        Object.defineProperty(i.prototype, "scene", {
            get: function() {
                return this._scene
            },
            set: function(t) {
                this._scene && this._scene.removeFromParent(),
                this._scene = t,
                this._scene && this.addChildAt(this._scene, 0),
                this.checkViewSize()
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onStageResize = function() {
            if (t.GlobalSetting.DISPLAY_MODEL == t.GlobalSetting.DISPLAY_VIEW_EASYGAME) {
                this.setSize(t.GlobalSetting.DISPLAY_WIDTH, t.GlobalSetting.DISPLAY_HEIGHT),
                e.prototype.onStageResize.call(this),
                this.checkViewSize();
                var i = t.ObjectPool.getByClass(this._loadingUIClz, "loading", !1);
                i && i.parent && (i.x = 0, i.y = 0)
            }
        },
        i
    } (t.ReceiveGroup);
    t.View = e,
    __reflect(e.prototype, "easy.View")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._gridWidth = 256,
            t._gridHeight = 256,
            t._bmpLogo = null,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.showBg = !1,
            this.setSize(this._gridWidth, this._gridHeight),
            this._bmpLogo = new egret.Bitmap,
            this.addChild(this._bmpLogo),
            this._bmpLogo.texture = RES.getRes("loading_view"),
            this._bmpLogo.anchorOffsetX = .5 * this._bmpLogo.width,
            this._bmpLogo.anchorOffsetY = .5 * this._bmpLogo.height,
            this._bmpLogo.x = this.cx,
            this._bmpLogo.y = this.cy
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            this._bmpLogo.rotation = 0,
            this.alpha = 0,
            t.HeartBeat.addListener(this, this.onShowLoadingGraphics)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this),
            t.HeartBeat.removeListener(this, this.onShowLoadingGraphics)
        },
        i.prototype.onShowLoadingGraphics = function() {
            this.alpha < 1 && (this.alpha += .1),
            this._bmpLogo.rotation += 3
        },
        i
    } (t.LoadingBaseUI);
    t.DefaultLoadingView = e,
    __reflect(e.prototype, "easy.DefaultLoadingView")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {
            this._outerTarget = null,
            this._enterTarget = null
        }
        return e.prototype.play = function() {
            this._enterTarget = t.ViewManager._waitChangeView,
            this._outerTarget = t.ViewManager.currentView,
            this._enterTarget == this._outerTarget && (this._outerTarget = null),
            this.onPlayEffect()
        },
        e.prototype.onPlayEffect = function() {
            this._outerTarget && this._outerTarget.outerTransition(),
            this._enterTarget && this._enterTarget.enterTransition()
        },
        e.prototype.onEffectComplete = function() {
            this._outerTarget && this._outerTarget.outerTransitionComplete(),
            this._enterTarget && this._enterTarget.enterTransitionComplete(),
            this._outerTarget = null,
            this._enterTarget = null
        },
        e
    } ();
    t.BaseEffect = e,
    __reflect(e.prototype, "easy.BaseEffect", ["easy.IEffect"])
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.initData = function() {
            e.RUNTIME = egret.Capabilities.runtimeType,
            e.STAGE = egret.MainContext.instance.stage,
            t.Debug.log = "---- GlobalSetting init ----",
            t.Debug.log = "runtimeType=" + egret.Capabilities.runtimeType + ", deviceType=" + egret.MainContext.deviceType,
            t.Debug.log = "RUNTIME=" + e.RUNTIME,
            console.log("runtimeType=" + egret.Capabilities.runtimeType + ", deviceType=" + egret.MainContext.deviceType),
            e.initInfoSize()
        },
        e.initInfoSize = function() {
            console.log("stage resize w=" + e.STAGE.stageWidth + ", h=" + e.STAGE.stageHeight),
            e.STAGE_WIDTH = e.STAGE.stageWidth,
            e.STAGE_HEIGHT = e.STAGE.stageHeight,
            e.DISPLAY_WIDTH = e.STAGE_WIDTH,
            e.DISPLAY_HEIGHT = e.STAGE_HEIGHT,
            e.DEV_MODEL && (t.Debug.log = "---- GlobalSetting Info Size ----", t.Debug.log = "STAGE_WIDTH=" + e.STAGE_WIDTH + ", STAGE_HEIGHT=" + e.STAGE_HEIGHT)
        },
        e.isNative = function() {
            return e.RUNTIME == e.RUNTIME_NATIVE || e.RUNTIME == e.RUNTIME_WXGAME
        },
        e.prototype.isWeiXin = function() {
            var t = navigator.userAgent.toString(),
            e = t.match(/MicroMessenger/i);
            return "MicroMessenger" == e ? !0 : !1
        },
        e.DISPLAY_VIEW_EGRET = "egret",
        e.DISPLAY_VIEW_EASYGAME = "easygame",
        e.DISPLAY_MODEL = e.DISPLAY_VIEW_EGRET,
        e.DEV_MODEL = !0,
        e.SYSTEM_DATE = 0,
        e.VOLUME_OPEN = !0,
        e.FRAME_RATE = 60,
        e.STAGE = null,
        e.STAGE_WIDTH = 480,
        e.STAGE_HEIGHT = 800,
        e.DISPLAY_WIDTH = 480,
        e.DISPLAY_HEIGHT = 800,
        e.VIEW_MINI_WIDTH = 300,
        e.VIEW_MINI_HEIGHT = 300,
        e.LOADING_THREAD_MAX = 5,
        e.CHECK_IDLE_LOADING = 15,
        e.REPORT = !1,
        e.REPORT_UI = !1,
        e.REPORT_URL = "",
        e.APP_NAME = "",
        e.APP_PRODUCT = "",
        e.APP_DEVICE = "",
        e.APP_RATE = 0,
        e.APP_RATE_NAME = 0,
        e.APP_CHANNEL = "",
        e.APP_VERSION = "",
        e.APP_PROVIDE = 0,
        e.APP_STORAGE = "local",
        e.STORAGE_LOCAL = "local",
        e.STORAGE_NET = "net",
        e.STORAGE_LOCAL_NET = "local_net",
        e.RUNTIME = "web",
        e.RUNTIME_WEB = "web",
        e.RUNTIME_NATIVE = "native",
        e.RUNTIME_WXGAME = "wxgame",
        e.STATS_VIEW = !1,
        e.STATS_WIN = !1,
        e.STATS_BTN = !1,
        e.STATS_MC = !1,
        e.STATS_LIST = !1,
        e.CDN_RES = "resource/",
        e.CDN_RES2 = "resource2/",
        e.VERSION_RES = "",
        e
    } ();
    t.GlobalSetting = e,
    __reflect(e.prototype, "easy.GlobalSetting")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {
            this.hexcase = 0,
            this.b64pad = ""
        }
        return t.prototype.hex_md5 = function(t) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
        },
        t.prototype.b64_md5 = function(t) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
        },
        t.prototype.any_md5 = function(t, e) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
        },
        t.prototype.hex_hmac_md5 = function(t, e) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
        },
        t.prototype.b64_hmac_md5 = function(t, e) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
        },
        t.prototype.any_hmac_md5 = function(t, e, i) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), i)
        },
        t.prototype.md5_vm_test = function() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
        },
        t.prototype.rstr_md5 = function(t) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
        },
        t.prototype.rstr_hmac_md5 = function(t, e) {
            var i = this.rstr2binl(t);
            i.length > 16 && (i = this.binl_md5(i, 8 * t.length));
            for (var n = Array(16), s = Array(16), a = 0; 16 > a; a++) n[a] = 909522486 ^ i[a],
            s[a] = 1549556828 ^ i[a];
            var r = this.binl_md5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length);
            return this.binl2rstr(this.binl_md5(s.concat(r), 640))
        },
        t.prototype.rstr2hex = function(t) {
            try {
                this.hexcase
            } catch(e) {
                this.hexcase = 0
            }
            for (var i, n = this.hexcase ? "0123456789ABCDEF": "0123456789abcdef", s = "", a = 0; a < t.length; a++) i = t.charCodeAt(a),
            s += n.charAt(i >>> 4 & 15) + n.charAt(15 & i);
            return s
        },
        t.prototype.rstr2b64 = function(t) {
            try {
                this.b64pad
            } catch(e) {
                this.b64pad = ""
            }
            for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = "",
            s = t.length,
            a = 0; s > a; a += 3) for (var r = t.charCodeAt(a) << 16 | (s > a + 1 ? t.charCodeAt(a + 1) << 8 : 0) | (s > a + 2 ? t.charCodeAt(a + 2) : 0), o = 0; 4 > o; o++) n += 8 * a + 6 * o > 8 * t.length ? this.b64pad: i.charAt(r >>> 6 * (3 - o) & 63);
            return n
        },
        t.prototype.rstr2any = function(t, e) {
            var i, n, s, a, r, o = e.length,
            h = Array(Math.ceil(t.length / 2));
            for (i = 0; i < h.length; i++) h[i] = t.charCodeAt(2 * i) << 8 | t.charCodeAt(2 * i + 1);
            var l = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
            u = Array(l);
            for (n = 0; l > n; n++) {
                for (r = Array(), a = 0, i = 0; i < h.length; i++) a = (a << 16) + h[i],
                s = Math.floor(a / o),
                a -= s * o,
                (r.length > 0 || s > 0) && (r[r.length] = s);
                u[n] = a,
                h = r
            }
            var c = "";
            for (i = u.length - 1; i >= 0; i--) c += e.charAt(u[i]);
            return c
        },
        t.prototype.str2rstr_utf8 = function(t) {
            for (var e, i, n = "",
            s = -1; ++s < t.length;) e = t.charCodeAt(s),
            i = s + 1 < t.length ? t.charCodeAt(s + 1) : 0,
            e >= 55296 && 56319 >= e && i >= 56320 && 57343 >= i && (e = 65536 + ((1023 & e) << 10) + (1023 & i), s++),
            127 >= e ? n += String.fromCharCode(e) : 2047 >= e ? n += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : 65535 >= e ? n += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : 2097151 >= e && (n += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
            return n
        },
        t.prototype.str2rstr_utf16le = function(t) {
            for (var e = "",
            i = 0; i < t.length; i++) e += String.fromCharCode(255 & t.charCodeAt(i), t.charCodeAt(i) >>> 8 & 255);
            return e
        },
        t.prototype.str2rstr_utf16be = function(t) {
            for (var e = "",
            i = 0; i < t.length; i++) e += String.fromCharCode(t.charCodeAt(i) >>> 8 & 255, 255 & t.charCodeAt(i));
            return e
        },
        t.prototype.rstr2binl = function(t) {
            for (var e = Array(t.length >> 2), i = 0; i < e.length; i++) e[i] = 0;
            for (var i = 0; i < 8 * t.length; i += 8) e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
            return e
        },
        t.prototype.binl2rstr = function(t) {
            for (var e = "",
            i = 0; i < 32 * t.length; i += 8) e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
            return e
        },
        t.prototype.binl_md5 = function(t, e) {
            t[e >> 5] |= 128 << e % 32,
            t[(e + 64 >>> 9 << 4) + 14] = e;
            for (var i = 1732584193,
            n = -271733879,
            s = -1732584194,
            a = 271733878,
            r = 0; r < t.length; r += 16) {
                var o = i,
                h = n,
                l = s,
                u = a;
                i = this.md5_ff(i, n, s, a, t[r + 0], 7, -680876936),
                a = this.md5_ff(a, i, n, s, t[r + 1], 12, -389564586),
                s = this.md5_ff(s, a, i, n, t[r + 2], 17, 606105819),
                n = this.md5_ff(n, s, a, i, t[r + 3], 22, -1044525330),
                i = this.md5_ff(i, n, s, a, t[r + 4], 7, -176418897),
                a = this.md5_ff(a, i, n, s, t[r + 5], 12, 1200080426),
                s = this.md5_ff(s, a, i, n, t[r + 6], 17, -1473231341),
                n = this.md5_ff(n, s, a, i, t[r + 7], 22, -45705983),
                i = this.md5_ff(i, n, s, a, t[r + 8], 7, 1770035416),
                a = this.md5_ff(a, i, n, s, t[r + 9], 12, -1958414417),
                s = this.md5_ff(s, a, i, n, t[r + 10], 17, -42063),
                n = this.md5_ff(n, s, a, i, t[r + 11], 22, -1990404162),
                i = this.md5_ff(i, n, s, a, t[r + 12], 7, 1804603682),
                a = this.md5_ff(a, i, n, s, t[r + 13], 12, -40341101),
                s = this.md5_ff(s, a, i, n, t[r + 14], 17, -1502002290),
                n = this.md5_ff(n, s, a, i, t[r + 15], 22, 1236535329),
                i = this.md5_gg(i, n, s, a, t[r + 1], 5, -165796510),
                a = this.md5_gg(a, i, n, s, t[r + 6], 9, -1069501632),
                s = this.md5_gg(s, a, i, n, t[r + 11], 14, 643717713),
                n = this.md5_gg(n, s, a, i, t[r + 0], 20, -373897302),
                i = this.md5_gg(i, n, s, a, t[r + 5], 5, -701558691),
                a = this.md5_gg(a, i, n, s, t[r + 10], 9, 38016083),
                s = this.md5_gg(s, a, i, n, t[r + 15], 14, -660478335),
                n = this.md5_gg(n, s, a, i, t[r + 4], 20, -405537848),
                i = this.md5_gg(i, n, s, a, t[r + 9], 5, 568446438),
                a = this.md5_gg(a, i, n, s, t[r + 14], 9, -1019803690),
                s = this.md5_gg(s, a, i, n, t[r + 3], 14, -187363961),
                n = this.md5_gg(n, s, a, i, t[r + 8], 20, 1163531501),
                i = this.md5_gg(i, n, s, a, t[r + 13], 5, -1444681467),
                a = this.md5_gg(a, i, n, s, t[r + 2], 9, -51403784),
                s = this.md5_gg(s, a, i, n, t[r + 7], 14, 1735328473),
                n = this.md5_gg(n, s, a, i, t[r + 12], 20, -1926607734),
                i = this.md5_hh(i, n, s, a, t[r + 5], 4, -378558),
                a = this.md5_hh(a, i, n, s, t[r + 8], 11, -2022574463),
                s = this.md5_hh(s, a, i, n, t[r + 11], 16, 1839030562),
                n = this.md5_hh(n, s, a, i, t[r + 14], 23, -35309556),
                i = this.md5_hh(i, n, s, a, t[r + 1], 4, -1530992060),
                a = this.md5_hh(a, i, n, s, t[r + 4], 11, 1272893353),
                s = this.md5_hh(s, a, i, n, t[r + 7], 16, -155497632),
                n = this.md5_hh(n, s, a, i, t[r + 10], 23, -1094730640),
                i = this.md5_hh(i, n, s, a, t[r + 13], 4, 681279174),
                a = this.md5_hh(a, i, n, s, t[r + 0], 11, -358537222),
                s = this.md5_hh(s, a, i, n, t[r + 3], 16, -722521979),
                n = this.md5_hh(n, s, a, i, t[r + 6], 23, 76029189),
                i = this.md5_hh(i, n, s, a, t[r + 9], 4, -640364487),
                a = this.md5_hh(a, i, n, s, t[r + 12], 11, -421815835),
                s = this.md5_hh(s, a, i, n, t[r + 15], 16, 530742520),
                n = this.md5_hh(n, s, a, i, t[r + 2], 23, -995338651),
                i = this.md5_ii(i, n, s, a, t[r + 0], 6, -198630844),
                a = this.md5_ii(a, i, n, s, t[r + 7], 10, 1126891415),
                s = this.md5_ii(s, a, i, n, t[r + 14], 15, -1416354905),
                n = this.md5_ii(n, s, a, i, t[r + 5], 21, -57434055),
                i = this.md5_ii(i, n, s, a, t[r + 12], 6, 1700485571),
                a = this.md5_ii(a, i, n, s, t[r + 3], 10, -1894986606),
                s = this.md5_ii(s, a, i, n, t[r + 10], 15, -1051523),
                n = this.md5_ii(n, s, a, i, t[r + 1], 21, -2054922799),
                i = this.md5_ii(i, n, s, a, t[r + 8], 6, 1873313359),
                a = this.md5_ii(a, i, n, s, t[r + 15], 10, -30611744),
                s = this.md5_ii(s, a, i, n, t[r + 6], 15, -1560198380),
                n = this.md5_ii(n, s, a, i, t[r + 13], 21, 1309151649),
                i = this.md5_ii(i, n, s, a, t[r + 4], 6, -145523070),
                a = this.md5_ii(a, i, n, s, t[r + 11], 10, -1120210379),
                s = this.md5_ii(s, a, i, n, t[r + 2], 15, 718787259),
                n = this.md5_ii(n, s, a, i, t[r + 9], 21, -343485551),
                i = this.safe_add(i, o),
                n = this.safe_add(n, h),
                s = this.safe_add(s, l),
                a = this.safe_add(a, u)
            }
            return [i, n, s, a]
        },
        t.prototype.md5_cmn = function(t, e, i, n, s, a) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, a)), s), i)
        },
        t.prototype.md5_ff = function(t, e, i, n, s, a, r) {
            return this.md5_cmn(e & i | ~e & n, t, e, s, a, r)
        },
        t.prototype.md5_gg = function(t, e, i, n, s, a, r) {
            return this.md5_cmn(e & n | i & ~n, t, e, s, a, r)
        },
        t.prototype.md5_hh = function(t, e, i, n, s, a, r) {
            return this.md5_cmn(e ^ i ^ n, t, e, s, a, r)
        },
        t.prototype.md5_ii = function(t, e, i, n, s, a, r) {
            return this.md5_cmn(i ^ (e | ~n), t, e, s, a, r)
        },
        t.prototype.safe_add = function(t, e) {
            var i = (65535 & t) + (65535 & e),
            n = (t >> 16) + (e >> 16) + (i >> 16);
            return n << 16 | 65535 & i
        },
        t.prototype.bit_rol = function(t, e) {
            return t << e | t >>> 32 - e
        },
        t
    } ();
    t.MD5 = e,
    __reflect(e.prototype, "easy.MD5")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype.outerTransition = function() {},
        e
    } (t.ReceiveGroup);
    t.Template = e,
    __reflect(e.prototype, "easy.Template")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = !1);
            var i = t.call(this, e) || this;
            return i._gap = 0,
            i._hAlign = egret.HorizontalAlign.LEFT,
            i._vAlign = egret.VerticalAlign.MIDDLE,
            i
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.invalidate()
        },
        Object.defineProperty(e.prototype, "gap", {
            get: function() {
                return this._gap
            },
            set: function(t) {
                this._gap != t && (this._gap = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "hAlign", {
            get: function() {
                return this._hAlign
            },
            set: function(t) {
                this._hAlign != t && (this._hAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "vAlign", {
            get: function() {
                return this._vAlign
            },
            set: function(t) {
                this._vAlign != t && (this._vAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.draw = function() {
            this._bgImage && this._bgImage.parent && this._bgImage.parent.removeChild(this._bgImage),
            t.prototype.draw.call(this),
            this.updateLayout(),
            this._showBg && this.addChildAt(this._bgImage, 0)
        },
        e.prototype.updateLayout = function() {
            var t = 0,
            e = null,
            i = null,
            n = 0;
            for (t = 0; t < this.numChildren; t++) this.getChildAt(t) != this._bgImage && (n += this.getChildAt(t).width);
            n += (this.numChildren - 1) * this._gap;
            var s = !0;
            for (t = 0; t < this.numChildren; t++) e = this.getChildAt(t),
            e != this._bgImage && (s ? (s = !1, this._hAlign == egret.HorizontalAlign.LEFT ? e.x = 0 : this._hAlign == egret.HorizontalAlign.CENTER ? e.x = (this.width - n) / 2 : this._hAlign == egret.HorizontalAlign.RIGHT && (e.x = this.width - n)) : (i = this.getChildAt(t - 1), e.x = i.x + i.width + this.gap), this._vAlign == egret.VerticalAlign.TOP ? e.y = 0 : this._vAlign == egret.VerticalAlign.MIDDLE ? e.y = (this.height - e.height) / 2 : this._vAlign == egret.VerticalAlign.BOTTOM && (e.y = this.height - e.height))
        },
        e
    } (t.Group);
    t.HGroup = e,
    __reflect(e.prototype, "easy.HGroup")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = !1);
            var i = e.call(this, t) || this;
            return i._text = "",
            i._textureDict = {},
            i._texture = null,
            i._shape = null,
            i._initDisplayData = !1,
            i._chars = "0,1,2,3,4,5,6,7,8,9",
            i._charSplit = ",",
            i._horizontalSplit = !0,
            i._gapSplit = 0,
            i._soundName = null,
            i._sound = null,
            i._rollingEnable = !1,
            i._rollingZoomEnable = !1,
            i._rollingZoomValue = 1.5,
            i._rollingZoomAlign = egret.HorizontalAlign.CENTER,
            i._rollingEffect = null,
            i._step = 0,
            i._callbackFunc = null,
            i._callbackFuncThis = null,
            i
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.setSize(t.Style.TEXTINPUT_WIDTH, t.Style.TEXTINPUT_HEIGHT)
        },
        Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                this._text != t && (this._rollingEnable ? (null == this._rollingEffect && (this._rollingEffect = new EffectNumberRolling(this), this._rollingEffect.zoomEnable = this._rollingZoomEnable, this._rollingEffect.zoomValue = this._rollingZoomValue, this._rollingEffect.zoomAlign = this._rollingZoomAlign, this._rollingEffect.callbackFunc = this._callbackFunc, this._rollingEffect.callbackFuncThis = this._callbackFuncThis), this._rollingEffect.clean(), this._rollingEffect.setText(t, this._step)) : (this._rollingEffect && this._rollingEffect.clean(t), this.setText(t)))
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.setText = function(t) {
            this._text = "" + t,
            null == this._text && (this._text = ""),
            this.invalidate(),
            this.onPlaySound()
        },
        Object.defineProperty(i.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture != t && (this._texture = t, this._initDisplayData = !1, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "chars", {
            get: function() {
                return this._chars
            },
            set: function(t) {
                this._chars != t && (this._chars = t, this._initDisplayData = !1, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "step", {
            get: function() {
                return this._step
            },
            set: function(t) {
                this._step != t && (this._step = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "horizontalSplit", {
            get: function() {
                return this._horizontalSplit
            },
            set: function(t) {
                this._horizontalSplit != t && (this._horizontalSplit = t, this._initDisplayData = !1, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gapSplit", {
            get: function() {
                return this._gapSplit
            },
            set: function(t) {
                this._gapSplit != t && (this._gapSplit = t, this._initDisplayData = !1, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "charSplit", {
            get: function() {
                return this._charSplit
            },
            set: function(t) {
                this._charSplit != t && (this._charSplit = t, this._initDisplayData = !1, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.draw = function() {
            this._initDisplayData || this.splitTextureSource(),
            this._bgImage && this._bgImage.parent && this._bgImage.parent.removeChild(this._bgImage);
            for (var i = null,
            n = this.numChildren - 1; n >= 0; n--) i = this.getChildAt(n),
            i.texture = null,
            i.parent.removeChild(i),
            t.ObjectPool.recycleClass(i, "labelimg");
            var s = null;
            if (t.StringUtil.isUsage(this._text)) for (var n = 0; n < this._text.length; n++) s = this._textureDict[this._text.charAt(n)],
            s && (i = t.ObjectPool.getByClass(egret.Bitmap, "labelimg"), this.addChild(i), i.texture = s, i.width = s.textureWidth, i.height = s.textureHeight, i.visible = !0, i.alpha = 1);
            e.prototype.draw.call(this)
        },
        i.prototype.splitTextureSource = function() {
            if (this._texture && t.StringUtil.isUsage(this._chars)) {
                var e = t.StringUtil.spliteStrArr(this._chars, this._charSplit);
                if (e.length > 0) {
                    this._initDisplayData = !0;
                    var i = new egret.SpriteSheet(this._texture),
                    n = 0,
                    s = 0,
                    a = this._texture.textureWidth,
                    r = this._texture.textureHeight;
                    this._horizontalSplit ? (n = (a - e.length * this._gapSplit) / e.length, s = r) : (n = a, s = (r - e.length * this._gapSplit) / e.length);
                    for (var o = 0; o < e.length; o++) this._horizontalSplit ? this._textureDict[e[o]] = i.createTexture(this.name + Math.round(999999 * Math.random()) + "_" + e[o], o * n + o * this._gapSplit, 0, n, s) : this._textureDict[e[o]] = i.createTexture(this.name + Math.round(999999 * Math.random()) + "_" + e[o], 0, o * s + o * this._gapSplit, n, s)
                }
            }
        },
        i.prototype.onPlaySound = function() {
            null == this._sound && t.StringUtil.isUsage(this._soundName) && (this._sound = RES.getRes(this._soundName)),
            this._sound && this._sound.play()
        },
        Object.defineProperty(i.prototype, "sound", {
            get: function() {
                return this._soundName
            },
            set: function(t) {
                this._soundName = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "rollingEnable", {
            get: function() {
                return this._rollingEnable
            },
            set: function(t) {
                this._rollingEnable = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "rollingZoomEnable", {
            get: function() {
                return this._rollingZoomEnable
            },
            set: function(t) {
                this._rollingZoomEnable = t,
                this._rollingEffect && (this._rollingEffect.zoomEnable = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "rollingZoomValue", {
            get: function() {
                return this._rollingZoomValue
            },
            set: function(t) {
                this._rollingZoomValue = t,
                this._rollingEffect && (this._rollingEffect.zoomValue = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "rollingZoomAlign", {
            get: function() {
                return this._rollingZoomAlign
            },
            set: function(t) {
                this._rollingZoomAlign = t,
                this._rollingEffect && (this._rollingEffect.zoomAlign = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onInvalidatePosition = function() {
            this._hasInvalidatePosition || (this._hasInvalidatePosition = !0, this.addEventListener(egret.Event.ENTER_FRAME, this.resetPosition, this))
        },
        i.prototype.setRollingEndFunc = function(t, e) {
            this._callbackFunc = e,
            this._callbackFuncThis = t,
            this._rollingEffect && (this._rollingEffect.callbackFunc = this._callbackFunc, this._rollingEffect.callbackFuncThis = this._callbackFuncThis)
        },
        i.prototype.removeRollingEndFunc = function() {
            this._callbackFunc = null,
            this._callbackFuncThis = null,
            this._rollingEffect && (this._rollingEffect.callbackFunc = this._callbackFunc, this._rollingEffect.callbackFuncThis = this._callbackFuncThis)
        },
        i
    } (t.HGroup);
    t.LabelImage = e,
    __reflect(e.prototype, "easy.LabelImage")
} (easy || (easy = {}));
var EffectNumberRolling = function() {
    function t(t) {
        this.zoomEnable = !1,
        this.zoomValue = 1,
        this.zoomAlign = egret.HorizontalAlign.CENTER,
        this._isZoom = !1,
        this._zoomXOld = 1,
        this._zoomYOld = 1,
        this._xScale = 1,
        this._yScale = 1,
        this._xOld = 1,
        this._yOld = 1,
        this._labelImg = null,
        this._rollingText = [],
        this.callbackFunc = null,
        this.callbackFuncThis = null,
        this._labelImg = t,
        this._xOld = this._labelImg.x,
        this._yOld = this._labelImg.y
    }
    return t.prototype.clean = function(t) {
        void 0 === t && (t = null),
        this._rollingText.length > 0 && (this._labelImg.setText(this._rollingText[this._rollingText.length - 1]), this._lastRollString = this._rollingText[this._rollingText.length - 1]),
        this._rollingText.length = 0,
        easy.StringUtil.isUsage(t) && (this._lastRollString = t)
    },
    t.prototype.setText = function(t, e) {
        var i = this._labelImg.text;
        this._labelLength = parseInt(t);
        var n = this._labelLength + "";
        if (n.length == t.length) {
            this._rollingText.length > 0 ? (this._labelImg.setText(this._rollingText[this._rollingText.length - 1]), this._lastRollString = this._rollingText[this._rollingText.length - 1]) : this._lastRollString = i,
            this._rollingText.length = 0;
            var s, a, r = 0;
            if (r = e > 0 ? e: this.getStepValue(parseInt(this._lastRollString), parseInt(t)), s = parseInt(this._lastRollString) + r, a = s + "", this._rollingText.push(a), r > 0) for (; parseInt(this._rollingText[this._rollingText.length - 1]) < parseInt(t);) r + parseInt(this._rollingText[this._rollingText.length - 1]) < parseInt(t) ? (s += r, a = s + "") : (s = parseInt(t), a = s + ""),
            this._rollingText.push(a);
            else if (0 > r) for (; parseInt(this._rollingText[this._rollingText.length - 1]) > parseInt(t);) r + parseInt(this._rollingText[this._rollingText.length - 1]) > parseInt(t) ? (s += r, a = s + "") : (s = parseInt(t), a = s + ""),
            this._rollingText.push(a)
        }
        this.zoomEnable && 1 != this.zoomValue && (this._labelImg.scaleX = this.zoomValue, this._labelImg.scaleY = this.zoomValue, this.zoomValue > 1 ? (this._xScale = this._xOld - this._labelImg.width * (this._labelImg.scaleX - 1), this._yScale = this._yOld - this._labelImg.height * (this._labelImg.scaleX - 1)) : this.zoomValue < 1 && (this._xScale = this._xOld + this._labelImg.width * (this._labelImg.scaleX - 1), this._yScale = this._yOld + this._labelImg.height * (this._labelImg.scaleX - 1)), this.zoomValue > 1 ? "center" == this.zoomAlign ? (this._labelImg.x = this._xOld - this._labelImg.width * (this._labelImg.scaleX - 1) / 2, this._labelImg.y = this._yOld - this._labelImg.height * (this._labelImg.scaleY - 1) / 2) : "left" == this.zoomAlign ? this._labelImg.y = this._yOld - this._labelImg.height * (this._labelImg.scaleY - 1) / 2 : "right" == this.zoomAlign && (this._labelImg.x = this._xOld - this._labelImg.width * (this._labelImg.scaleX - 1), this._labelImg.y = this._yOld - this._labelImg.height * (this._labelImg.scaleY - 1) / 2) : this.zoomValue < 1 && ("center" == this.zoomAlign ? (this._labelImg.x = this._xOld + this._labelImg.width * (this._labelImg.scaleX - 1) / 2, this._labelImg.y = this._yOld + this._labelImg.height * (this._labelImg.scaleY - 1) / 2) : "left" == this.zoomAlign ? this._labelImg.y = this._yOld + this._labelImg.height * (this._labelImg.scaleY - 1) / 2 : "right" == this.zoomAlign && (this._labelImg.x = this._xOld + this._labelImg.width * (this._labelImg.scaleX - 1), this._labelImg.y = this._yOld + this._labelImg.height * (this._labelImg.scaleY - 1) / 2)), this._isZoom = !0),
        easy.HeartBeat.addListener(this, this.onChangeText, 3)
    },
    t.prototype.getStepValue = function(t, e) {
        var i = Math.abs(t - e),
        n = 1;
        return n = 30 > i ? 1 : 60 > i ? 2 : 100 > i ? 3 : 200 > i ? 5 : 400 > i ? 10 : 800 > i ? 20 : 1500 > i ? 30 : 2500 > i ? 40 : 3500 > i ? 50 : Math.floor(Math.round(i / 200) + 50),
        t > e && (n = -n),
        console.log("step=" + n),
        n
    },
    t.prototype.onChangeText = function() {
        if (this._rollingText.length > 0) this._labelImg.setText(this._rollingText.shift());
        else {
            if (easy.HeartBeat.removeListener(this, this.onChangeText), this._isZoom) {
                var t = {
                    scaleX: this._zoomXOld,
                    scaleY: this._zoomYOld
                };
                0 == this._labelImg.anchorX && 0 == this._labelImg.anchorOffsetX && (t.x = this._xOld),
                0 == this._labelImg.anchorY && 0 == this._labelImg.anchorOffsetY && (t.y = this._yOld),
                egret.Tween.get(this._labelImg).to(t, 200)
            }
            this._isZoom = !1,
            this.callbackFunc && this.callbackFuncThis && this.callbackFunc.call(this.callbackFuncThis)
        }
    },
    t
} ();
__reflect(EffectNumberRolling.prototype, "EffectNumberRolling");
var easy; !
function(t) {
    var e = function() {
        function t() {
            this.id = null,
            this.frame = 0,
            this.width = 0,
            this.height = 0,
            this.x = 0,
            this.y = 0,
            this.offsetX = 0,
            this.offsetY = 0,
            this.texutre = null,
            this.resId = null,
            this.hitRects = []
        }
        return t
    } ();
    t.AnimateTexture = e,
    __reflect(e.prototype, "easy.AnimateTexture")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._bottomContainer = null,
            t._topContainer = null,
            t._labelTitle = null,
            t._textInfo = null,
            t._btnClose = null,
            t._btnClean = null,
            t._btnRefresh = null,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.y = 80,
            this.width = 400,
            this.height = t.GlobalSetting.STAGE_HEIGHT - this.y,
            this._topContainer = new t.Group,
            this.addChild(this._topContainer),
            this._topContainer.height = 35,
            this._topContainer.width = this.width,
            this._topContainer.y = 0,
            this._labelTitle = new t.Label,
            this._topContainer.addChild(this._labelTitle),
            this._labelTitle.text = "Debug窗口",
            this._bottomContainer = new t.Group,
            this.addChild(this._bottomContainer),
            this._bottomContainer.height = 42,
            this._bottomContainer.width = this.width,
            this._bottomContainer.y = this.height - this._bottomContainer.height,
            this._btnRefresh = new t.Button,
            this._bottomContainer.addChild(this._btnRefresh),
            this._btnRefresh.label = "刷新",
            this._btnRefresh.x = 2,
            this._btnRefresh.y = 2,
            this._btnRefresh.setSize(125, 40),
            this._btnRefresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchRegresh, this),
            this._btnClose = new t.Button,
            this._bottomContainer.addChild(this._btnClose),
            this._btnClose.x = this._btnRefresh.x + this._btnRefresh.width + 8,
            this._btnClose.y = 2,
            this._btnClose.label = "关闭",
            this._btnClose.setSize(125, 40),
            this._btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchClose, this),
            this._btnClean = new t.Button,
            this._bottomContainer.addChild(this._btnClean),
            this._btnClean.x = this._btnClose.x + this._btnClose.width + 8,
            this._btnClean.y = 2,
            this._btnClean.label = "清除",
            this._btnClean.setSize(125, 40),
            this._btnClean.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchClean, this);
            var i = new t.Group;
            this.addChild(i),
            i.bgColor = 16777215,
            i.x = 0,
            i.y = this._topContainer.height + 1,
            i.width = this.width,
            i.height = this.height - this._topContainer.height - this._bottomContainer.height - 2,
            this._textInfo = new egret.TextField,
            this.addChild(this._textInfo),
            this._textInfo.multiline = !0,
            this._textInfo.textColor = 0,
            this._textInfo.size = 16,
            this._textInfo.lineSpacing = 6,
            this._textInfo.x = i.x + 1,
            this._textInfo.y = i.y,
            this._textInfo.width = i.width,
            this._textInfo.height = i.height,
            this.showBg = !0
        },
        i.prototype.onTouchRegresh = function(e) {
            this._textInfo.text = t.Debug.log
        },
        i.prototype.onTouchClose = function(t) {
            i.hidden()
        },
        i.prototype.onTouchClean = function(e) {
            t.Debug.clean(),
            this.onTouchRegresh(e)
        },
        i.show = function() {
            null == i._instance && (i._instance = new i),
            t.GlobalSetting.STAGE.addChild(i._instance)
        },
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            this.onTouchRegresh(null)
        },
        i.refresh = function() {
            i._instance && i._instance.parent && (i._instance._textInfo.text = t.Debug.log, i._instance._textInfo.height = i._instance._textInfo.textHeight, i._instance._textInfo.y = i._instance.height - i._instance._topContainer.height - i._instance._bottomContainer.height - i._instance._textInfo.textHeight)
        },
        i.hidden = function() {
            i._instance && i._instance.parent && i._instance.parent.removeChild(this._instance)
        },
        i._instance = null,
        i
    } (t.Win);
    t.DebugWin = e,
    __reflect(e.prototype, "easy.DebugWin")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this)
        },
        Object.defineProperty(e.prototype, "guideItem", {
            get: function() {
                return this._data ? this._data: null
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.enter = function() {
            this.guideItem && (this.x += this.guideItem.oxWin, this.y += this.guideItem.oyWin),
            t.prototype.enter.call(this)
        },
        e
    } (t.Win);
    t.DefaultGuideWin = e,
    __reflect(e.prototype, "easy.DefaultGuideWin")
} (easy || (easy = {}));
var GlobalSetting = easy.GlobalSetting,
LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.groupProgress = null,
        e.imgTiaoBg = null,
        e.imgTiao = null,
        e.imgTxt = null,
        e.imgLogo = null,
        e.groupMask = null,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.setSize(easy.GlobalSetting.STAGE_WIDTH, easy.GlobalSetting.STAGE_HEIGHT),
        this.groupProgress = new easy.BaseGroup(!0),
        this.groupProgress.name = "groupProgress",
        this.addChild(this.groupProgress),
        this.groupProgress.width = 500,
        this.groupProgress.height = 500,
        this.groupProgress.x = easy.GlobalSetting.DISPLAY_WIDTH / 2 - this.groupProgress.cx,
        this.groupProgress.y = easy.GlobalSetting.DISPLAY_HEIGHT / 2 - this.groupProgress.cy,
        this.imgTiaoBg = new easy.Image(!0),
        this.imgTiaoBg.name = "imgTiaoBg",
        this.groupProgress.addChild(this.imgTiaoBg),
        this.imgTiaoBg.x = -45.5,
        this.imgTiaoBg.y = 324.5,
        this.imgTiaoBg.width = 591,
        this.imgTiaoBg.height = 33,
        this.imgTxt = new easy.Image(!0),
        this.imgTxt.name = "imgTxt",
        this.groupProgress.addChild(this.imgTxt),
        this.imgTxt.x = 193,
        this.imgTxt.y = 384.5,
        this.imgTxt.width = 114,
        this.imgTxt.height = 31,
        this.imgLogo = new easy.Image(!0),
        this.imgLogo.name = "imgLogo",
        this.groupProgress.addChild(this.imgLogo),
        this.imgLogo.x = 125,
        this.imgLogo.width = 250,
        this.imgLogo.height = 250,
        this.groupMask = new easy.Group(!0),
        this.groupMask.name = "groupMask",
        this.groupProgress.addChild(this.groupMask),
        this.groupMask.x = -43.5,
        this.groupMask.y = 327,
        this.groupMask.width = 587,
        this.groupMask.height = 28,
        this.groupMask.showBg = !1,
        this.groupMask.width = 1,
        this.groupMask.clip = !0,
        this.imgTiao = new easy.Image(!0),
        this.imgTiao.name = "imgTiao",
        this.groupMask.addChild(this.imgTiao),
        this.imgTiao.width = 587,
        this.imgTiao.height = 28,
        this.groupProgress.drawDelay = !1,
        this.imgTiaoBg.texture = RES.getRes("loading_bg"),
        this.imgTiaoBg.drawDelay = !1,
        this.imgTiao.texture = RES.getRes("loading_tiao"),
        this.imgTiao.drawDelay = !1,
        this.imgTxt.texture = RES.getRes("loading_txt"),
        this.imgTxt.drawDelay = !1,
        this.imgLogo.texture = RES.getRes("logo"),
        this.imgLogo.drawDelay = !1,
        this.groupMask.drawDelay = !1
    },
    e.prototype.setProgress = function(t, e) {
        this.groupMask.width = this.imgTiao.width * (t / e)
    },
    e.prototype.enter = function() {},
    e.prototype.outer = function() {
        this.removeFromParent()
    },
    e
} (easy.BaseGroup);
__reflect(LoadingUI.prototype, "LoadingUI");
var easy; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e
    } (t.BaseEffect);
    t.RollerDown = e,
    __reflect(e.prototype, "easy.RollerDown")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._ui = null,
            e._uiResReady = !1,
            e.list = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.setSize(100, 65)
        },
        Object.defineProperty(e.prototype, "data", {
            get: function() {
                return this._data
            },
            set: function(t) {
                this._data = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.refresh = function() {
            this.data = this._data
        },
        Object.defineProperty(e.prototype, "selected", {
            get: function() {
                return this._selected
            },
            set: function(t) {
                this.setSelected(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setSelected = function(t) {
            this._selected != t && (this._selected = t, this.invalidate())
        },
        e.prototype.getUI = function() {
            return this._ui
        },
        e.prototype.setUI = function(t) {
            this._ui = t,
            this._ui && (this.addChild(this._ui), this.setSize(this._ui.width, this._ui.height)),
            this.showBg = !1
        },
        e.prototype.destroy = function() {
            this._ui && (this._ui = null)
        },
        e.prototype.validateNow = function() {
            this._ui && this._ui.validateNow && this._ui.validateNow(),
            this.drawDelay = !1,
            this._ui && (this._ui.drawDelay = !1)
        },
        e
    } (t.Group);
    t.DefaultRenderer = e,
    __reflect(e.prototype, "easy.DefaultRenderer")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.pause = function() {
            egret.stopTick(e.onEnterFrame, e)
        },
        e.restart = function() {
            e._listeners.length > 0 && egret.startTick(e.onEnterFrame, e)
        },
        e.onEnterFrame = function(i) {
            var n = 0,
            s = 0,
            a = null;
            for (s = e._listeners.length - 1, n = s; n >= 0; n--) a = e._listeners[n],
            a.index++,
            a.del ? (e._listeners.splice(n, 1), t.ObjectPool.recycleClass(a)) : (a.count <= 1 || a.index % a.count == 0) && (a.loopcount++, a.loop > 0 && a.loop <= a.loopcount && (a.del = !0), e._functionCallList.unshift(a));
            for (s = e._functionCallList.length, n = 0; s > n; n++) a = e._functionCallList.pop(),
            a.param && a.param.length > 0 ? a.func.apply(a.thisArg, a.param) : 0 == a.func.length ? a.func.call(a.thisArg) : a.func.call(a.thisArg, a.del);
            return 0 == e._listeners.length && egret.stopTick(e.onEnterFrame, e),
            !0
        },
        e.addListener = function(n, s, a, r, o, h, l) {
            if (void 0 === a && (a = 1), void 0 === r && (r = -1), void 0 === o && (o = 0), void 0 === h && (h = null), void 0 === l && (l = !1), null == s || e.isContainerListener(n, s)) return ! 1;
            var u = t.ObjectPool.getByClass(i);
            return u.setData(n, s, a, r, o, h),
            e._listeners.push(u),
            l && (u.loopcount++, u.param && u.param.length > 0 ? u.func.apply(u.thisArg, u.param) : 0 == u.func.length ? u.func.call(u.thisArg) : u.func.call(u.thisArg, u.del)),
            egret.startTick(e.onEnterFrame, e),
            !0
        },
        e.removeListener = function(t, i) {
            var n = 0;
            for (n = 0; n < e._listeners.length; n++) if (e._listeners[n].func == i && e._listeners[n].thisArg == t) {
                e._listeners[n].del = !0;
                break
            }
        },
        e.isContainerListener = function(t, i) {
            var n = 0;
            for (n = 0; n < e._listeners.length; n++) if (e._listeners[n].thisArg == t && e._listeners[n].func == i && !e._listeners[n].del) return ! 0;
            return ! 1
        },
        e.getHearBeatLenght = function() {
            return e._listeners.length
        },
        e.getHearBeatTrace = function() {
            var t = 0,
            i = "",
            n = null;
            for (i += "总数:" + e._listeners.length + "\n", i += "========================================================\n", t = 0; t < e._listeners.length; t++) n = e._listeners[t],
            n && (i += "基本信息 (" + t + "): ", i += "del=" + n.del + ", count=" + n.count + ", index=" + n.index + ", loop=" + n.loop + ", loopCount=" + n.loopcount + "\n", i += "------------------------------------\n");
            return i += "========================================================\n"
        },
        e._listeners = new Array,
        e._functionCallList = new Array,
        e
    } ();
    t.HeartBeat = e,
    __reflect(e.prototype, "easy.HeartBeat");
    var i = function() {
        function t() {
            this.func = null,
            this.thisArg = null,
            this.count = 0,
            this.index = 0,
            this.loop = 0,
            this.loopcount = 0,
            this.delay = 0,
            this.del = !1,
            this.traceMsg = null,
            this.param = null
        }
        return t.prototype.setData = function(t, e, i, n, s, a) {
            this.thisArg = t,
            this.func = e,
            this.count = i,
            this.loop = n,
            this.delay = s,
            this.index = 0,
            this.loopcount = 0,
            this.del = !1,
            this.param = a
        },
        t
    } ();
    __reflect(i.prototype, "BeatItem")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.getByClass = function(e, i, n) {
            void 0 === i && (i = ""),
            void 0 === n && (n = !0);
            var s = egret.getQualifiedClassName(e);
            s = i + s;
            var a = t.getObject(s, n);
            return null == a && (a = new e),
            n || t.recycleClass(a, i),
            a
        },
        t.recycleClass = function(e, i) {
            if (void 0 === i && (i = ""), e) {
                var n = egret.getQualifiedClassName(e);
                n = i + n,
                t.recycleObject(n, e)
            }
        },
        t.hasClass = function(e, i) {
            return void 0 === i && (i = ""),
            t.getByClass(e, i, !1)
        },
        t.getObject = function(e, i) {
            if (void 0 === i && (i = !0), t._dataPool.hasOwnProperty(e) && t._dataPool[e].length > 0) {
                var n = null;
                return i ? (n = t._dataPool[e].pop(), 0 == t._dataPool[e].length && delete t._dataPool[e]) : n = t._dataPool[e][0],
                n
            }
            return null
        },
        t.setObject = function(e, i) {
            t.recycleObject(e, i)
        },
        t.recycleObject = function(e, i) {
            i && (t._dataPool.hasOwnProperty(e) || (t._dataPool[e] = []), i.hasOwnProperty("destroy") && i.destroy(), t._dataPool[e].indexOf(i) < 0 && t._dataPool[e].push(i))
        },
        t.hasObject = function(e) {
            return t.getObject(e, !1)
        },
        t.dispose = function(e) {
            var i = egret.getQualifiedClassName(e);
            t.disposeObjects(i)
        },
        t.disposeObjects = function(e) {
            t._dataPool.hasOwnProperty(e) && (t._dataPool[e].length = 0, delete t._dataPool[e])
        },
        t._dataPool = {},
        t
    } ();
    t.ObjectPool = e,
    __reflect(e.prototype, "easy.ObjectPool")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.version = "0.0.51",
        t
    } ();
    t.Version = e,
    __reflect(e.prototype, "easy.Version")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {
            this.oldX = 0,
            this.oldY = 0,
            this.newX = 0,
            this.newY = 0,
            this.oldAlpha = 0,
            this.newAlpha = 0,
            this.oldRotation = 0,
            this.newRotation = 0,
            this.oldScaleX = 0,
            this.newScaleX = 0,
            this.oldScaleY = 0,
            this.newScaleY = 0,
            this.oldAnchorX = 0,
            this.newAnchorX = 0,
            this.oldAnchorY = 0,
            this.newAnchorY = 0,
            this.anchorEnabled = !1,
            this.isPlay = !1,
            this.loop = !1
        }
        return t
    } ();
    t.EffectData = e,
    __reflect(e.prototype, "easy.EffectData")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.breatheEffect = function(i, n, s, a, r) {
            if (void 0 === n && (n = 200), void 0 === s && (s = 1), void 0 === a && (a = 1), void 0 === r && (r = .03), null != i && void 0 != i) {
                var o = null;
                null == this.effectDic[i.hashCode] || void 0 == this.effectDic[i.hashCode] ? (o = new t.EffectData, e.saveOldValue(i, o), o.newAnchorX = .5, o.newAnchorY = .8, o.newX = o.oldX + i.width * o.newAnchorX, o.newY = o.oldY + i.height * o.newAnchorY, this.effectDic[i.hashCode] = o) : (o = this.effectDic[i.hashCode], o.loop = !0),
                o.anchorEnabled = i.anchorEnabled,
                i.anchorEnabled = !0,
                i.anchorX = o.newAnchorX,
                i.anchorY = o.newAnchorY,
                i.x = o.newX,
                i.y = o.newY,
                i.scaleX = 1 - r,
                i.scaleY = 1 + r;
                var h = function() {
                    o.loop && egret.Tween.get(i).to({
                        scaleX: 1 + r,
                        scaleY: 1.03 + r,
                        alpha: a
                    },
                    n + 200).to({
                        scaleX: 1 - r,
                        scaleY: 1 + r,
                        alpha: s
                    },
                    n).call(h, this)
                };
                egret.Tween.get(i).to({
                    scaleX: 1 + r,
                    scaleY: 1.03 + r,
                    alpha: a
                },
                n + 200).to({
                    scaleX: 1 - r,
                    scaleY: 1 + r,
                    alpha: s
                },
                n).call(h, this)
            }
        },
        e.pauseBreatheEffect = function(t) {
            if (null != t && void 0 != t && null != this.effectDic[t.hashCode] && void 0 != this.effectDic[t.hashCode]) {
                var e = this.effectDic[t.hashCode];
                t.anchorEnabled = e.anchorEnabled,
                t.anchorX = e.oldAnchorX,
                t.anchorY = e.oldAnchorY,
                t.x = e.oldX,
                t.y = e.oldY,
                t.scaleX = e.oldScaleX,
                t.scaleY = e.oldScaleY,
                egret.Tween.removeTweens(t),
                this.effectDic[t.hashCode] = null
            }
        },
        e.upDownEffect = function(i, n) {
            if (void 0 === n && (n = 500), null != i && void 0 != i) {
                var s = null;
                null == this.effectDic[i.hashCode] || void 0 == this.effectDic[i.hashCode] ? (s = new t.EffectData, e.saveOldValue(i, s), s.newAnchorX = .5, s.newAnchorY = .8, s.newX = s.oldX + i.width * s.newAnchorX, s.newY = s.oldY + i.height * s.newAnchorY, this.effectDic[i.hashCode] = s) : (s = this.effectDic[i.hashCode], s.loop = !0),
                s.anchorEnabled = i.anchorEnabled,
                i.anchorEnabled = !0,
                i.anchorX = s.newAnchorX,
                i.anchorY = s.newAnchorY,
                i.x = s.newX,
                i.y = s.newY,
                i.scaleX = .9,
                i.scaleY = 1.1;
                var a = function() {
                    s.loop && egret.Tween.get(i).to({
                        scaleX: 1.1,
                        scaleY: .9
                    },
                    n).to({
                        scaleX: .9,
                        scaleY: 1.1
                    },
                    n).call(a, this)
                };
                egret.Tween.get(i).to({
                    scaleX: 1.1,
                    scaleY: .9
                },
                n).to({
                    scaleX: .9,
                    scaleY: 1.1
                },
                n).call(a, this)
            }
        },
        e.pauseUpDownEffect = function(t) {
            if (null != t && void 0 != t && null != this.effectDic[t.hashCode] && void 0 != this.effectDic[t.hashCode]) {
                var e = this.effectDic[t.hashCode];
                t.anchorEnabled = e.anchorEnabled,
                t.anchorX = e.oldAnchorX,
                t.anchorY = e.oldAnchorY,
                t.x = e.oldX,
                t.y = e.oldY,
                t.scaleX = e.oldScaleX,
                t.scaleY = e.oldScaleY,
                egret.Tween.removeTweens(t),
                this.effectDic[t.hashCode] = null
            }
        },
        e.paopaoEffect = function(i, n) {
            if (void 0 === n && (n = 1500), null != i && void 0 != i) {
                var s = null;
                null == this.effectDic[i.hashCode] || void 0 == this.effectDic[i.hashCode] ? (s = new t.EffectData, e.saveOldValue(i, s), s.newAnchorX = .5, s.newAnchorY = .8, s.newX = s.oldX + i.width * s.newAnchorX, s.newY = s.oldY + i.height * s.newAnchorY, this.effectDic[i.hashCode] = s) : (s = this.effectDic[i.hashCode], s.loop = !0),
                s.anchorEnabled = i.anchorEnabled,
                i.anchorEnabled = !0,
                i.anchorX = s.newAnchorX,
                i.anchorY = s.newAnchorY,
                i.x = s.newX,
                i.y = s.newY,
                i.scaleX = .95,
                i.scaleY = 1.05;
                var a = function() {
                    s.loop && egret.Tween.get(i).to({
                        scaleX: 1.04,
                        scaleY: .96
                    },
                    n).to({
                        scaleX: .95,
                        scaleY: 1.05
                    },
                    n).call(a, this)
                };
                egret.Tween.get(i).to({
                    scaleX: 1.04,
                    scaleY: .96
                },
                n).to({
                    scaleX: .95,
                    scaleY: 1.05
                },
                n).call(a, this)
            }
        },
        e.pausePaopaoEffect = function(t) {
            if (null != t && void 0 != t && null != this.effectDic[t.hashCode] && void 0 != this.effectDic[t.hashCode]) {
                var e = this.effectDic[t.hashCode];
                t.anchorEnabled = e.anchorEnabled,
                t.anchorX = e.oldAnchorX,
                t.anchorY = e.oldAnchorY,
                t.x = e.oldX,
                t.y = e.oldY,
                t.scaleX = e.oldScaleX,
                t.scaleY = e.oldScaleY,
                egret.Tween.removeTweens(t),
                this.effectDic[t.hashCode] = null
            }
        },
        e.rockEffect = function(i, n, s) {
            if (void 0 === n && (n = 25), void 0 === s && (s = 200), null != i && void 0 != i) {
                var a = null;
                null == this.effectDic[i.hashCode] || void 0 == this.effectDic[i.hashCode] ? (a = new t.EffectData, e.saveOldValue(i, a), a.newAnchorX = .5, a.newAnchorY = .8, a.newX = a.oldX + i.width * a.newAnchorX, a.newY = a.oldY + i.height * a.newAnchorY, this.effectDic[i.hashCode] = a) : (a = this.effectDic[i.hashCode], a.loop = !0),
                a.anchorEnabled = i.anchorEnabled,
                i.anchorEnabled = !0,
                i.anchorX = a.newAnchorX,
                i.anchorY = a.newAnchorY,
                i.x = a.newX,
                i.y = a.newY,
                i.rotation = 0;
                var r = function() {
                    a.loop && egret.Tween.get(i).to({
                        rotation: n
                    },
                    s).to({
                        rotation: 0
                    },
                    s).to({
                        rotation: -n
                    },
                    s).to({
                        rotation: 0
                    },
                    s).to({
                        rotation: n
                    },
                    s).to({
                        rotation: 0
                    },
                    s).to({
                        rotation: -n
                    },
                    s).to({
                        rotation: 0
                    },
                    s).wait(2e3).call(r, this)
                };
                egret.Tween.get(i).to({
                    rotation: n
                },
                s).to({
                    rotation: 0
                },
                s).to({
                    rotation: -n
                },
                s).to({
                    rotation: 0
                },
                s).to({
                    rotation: n
                },
                s).to({
                    rotation: 0
                },
                s).to({
                    rotation: -n
                },
                s).to({
                    rotation: 0
                },
                s).wait(2e3).call(r, this)
            }
        },
        e.pauseRockEffect = function(t) {
            if (null != t && void 0 != t && null != this.effectDic[t.hashCode] && void 0 != this.effectDic[t.hashCode]) {
                var e = this.effectDic[t.hashCode];
                t.anchorEnabled = e.anchorEnabled,
                t.anchorX = e.oldAnchorX,
                t.anchorY = e.oldAnchorY,
                t.x = e.oldX,
                t.y = e.oldY,
                t.rotation = 0,
                egret.Tween.removeTweens(t),
                this.effectDic[t.hashCode] = null
            }
        },
        e.rotationEffect = function(i, n, s) {
            if (void 0 === n && (n = 1), void 0 === s && (s = 5e3), null != i && void 0 != i) {
                var a = null;
                if (null == this.effectDic[i.hashCode] || void 0 == this.effectDic[i.hashCode] ? (a = new t.EffectData, e.saveOldValue(i, a), a.newAnchorX = .5, a.newAnchorY = .5, a.newX = a.oldX + i.width * a.newAnchorX * i.scaleX, a.newY = a.oldY + i.height * a.newAnchorY * i.scaleY, this.effectDic[i.hashCode] = a) : (a = this.effectDic[i.hashCode], a.loop = !0), a.anchorEnabled = i.anchorEnabled, i.anchorEnabled = !0, i.anchorX = a.newAnchorX, i.anchorY = a.newAnchorY, i.x = a.newX, i.y = a.newY, 1 == n) {
                    var r = function() {
                        a.loop && (i.rotation = 0, egret.Tween.get(i).to({
                            rotation: 360
                        },
                        s).call(r, this))
                    };
                    i.rotation = 0,
                    egret.Tween.get(i).to({
                        rotation: 360
                    },
                    s).call(r, this)
                } else if ( - 1 == n) {
                    var o = function() {
                        a.loop && (i.rotation = 0, egret.Tween.get(i).to({
                            rotation: -360
                        },
                        s).call(o, this))
                    };
                    i.rotation = 0,
                    egret.Tween.get(i).to({
                        rotation: -360
                    },
                    s).call(o, this)
                }
            }
        },
        e.pauseRotationEffect = function(t) {
            if (null != t && void 0 != t && null != this.effectDic[t.hashCode] && void 0 != this.effectDic[t.hashCode]) {
                var e = this.effectDic[t.hashCode];
                t.anchorEnabled = e.anchorEnabled,
                t.anchorX = e.oldAnchorX,
                t.anchorY = e.oldAnchorY,
                t.x = e.oldX,
                t.y = e.oldY,
                t.rotation = 0,
                egret.Tween.removeTweens(t),
                this.effectDic[t.hashCode] = null
            }
        },
        e.flyObjEffect = function(i, n, s, a, r, o) {
            void 0 === n && (n = 200),
            void 0 === s && (s = 50),
            void 0 === a && (a = 1),
            void 0 === r && (r = 1),
            void 0 === o && (o = 1);
            var h = null;
            if (null == this.effectDic[i.hashCode] || void 0 == this.effectDic[i.hashCode] ? (h = new t.EffectData, e.saveOldValue(i, h), this.effectDic[i.hashCode] = h) : (h = this.effectDic[i.hashCode], h.loop = !0), egret.Tween.removeTweens(i), 1 == a) {
                if (0 == h.isPlay) {
                    var l = function() {
                        h.loop && egret.Tween.get(i).to({
                            y: h.oldY + s,
                            alpha: o
                        },
                        n).to({
                            y: h.oldY - s,
                            alpha: r
                        },
                        n).call(l, this)
                    };
                    egret.Tween.get(i).to({
                        y: h.oldY + s,
                        alpha: o
                    },
                    n).to({
                        y: h.oldY - s,
                        alpha: r
                    },
                    n).call(l, this),
                    h.isPlay = !1
                }
            } else if (0 == a && 0 == h.isPlay) {
                var l = function() {
                    h.loop && egret.Tween.get(i).to({
                        x: h.oldX + s,
                        alpha: o
                    },
                    n).to({
                        x: h.oldX - s,
                        alpha: r
                    },
                    n).call(l, this)
                };
                egret.Tween.get(i).to({
                    x: h.oldX + s,
                    alpha: o
                },
                n).to({
                    x: h.oldX - s,
                    alpha: r
                },
                n).call(l, this),
                h.isPlay = !1
            }
        },
        e.pauseFlyObjEffect = function(t) {
            if (null != t && void 0 != t && null != this.effectDic[t.hashCode] && void 0 != this.effectDic[t.hashCode]) {
                var e = this.effectDic[t.hashCode];
                t.alpha = 1,
                t.x = e.oldX,
                t.y = e.oldY,
                egret.Tween.removeTweens(t),
                this.effectDic[t.hashCode] = null
            }
        },
        e.playEffect = function(t, i) {
            if (void 0 === i && (i = 1), !e.isPlayEffectPlay) {
                e.isPlayEffectPlay = !0;
                var n = function() {
                    this.isPlayEffectPlay = !1
                },
                s = function() {
                    1 == i ? egret.Tween.get(t).to({
                        scaleX: 1,
                        scaleY: 1,
                        x: t.x - t.width / 4,
                        y: t.y - t.height / 4
                    },
                    500, egret.Ease.elasticOut).call(n, this) : 2 == i ? egret.Tween.get(t).to({
                        scaleX: 1,
                        scaleY: 1,
                        x: t.x - t.width / 4,
                        y: t.y - t.height / 4
                    },
                    500, egret.Ease.backOut).call(n, this) : 3 == i && egret.Tween.get(t).to({
                        scaleX: 1,
                        scaleY: 1,
                        x: t.x - t.width / 4,
                        y: t.y - t.height / 4
                    },
                    100).call(n, this)
                };
                egret.Tween.get(t).to({
                    scaleX: .5,
                    scaleY: .5,
                    x: t.x + t.width / 4,
                    y: t.y + t.height / 4
                },
                100, egret.Ease.sineIn).call(s, this)
            }
        },
        e.saveOldValue = function(t, e) {
            e.oldX = t.x,
            e.oldY = t.y,
            e.oldAnchorX = t.anchorX,
            e.oldAnchorY = t.anchorY,
            e.oldScaleX = t.scaleX,
            e.oldScaleY = t.scaleY,
            e.oldAlpha = t.alpha,
            e.loop = !0
        },
        e.smallTobig = function(e, i, n) {
            if (void 0 === i && (i = 200), void 0 === n && (n = 1), null != e && void 0 != e) {
                var s = null;
                null == this.effectDic[e.hashCode] || void 0 == this.effectDic[e.hashCode] ? (s = new t.EffectData, s.newAnchorX = .5, s.newAnchorY = .5, s.oldX = e.x, s.oldY = e.y, s.newX = s.oldX + e.width * s.newAnchorX * e.scaleX, s.newY = s.oldY + e.height * s.newAnchorY * e.scaleY, this.effectDic[e.hashCode] = s) : s = this.effectDic[e.hashCode],
                s.anchorEnabled = e.anchorEnabled,
                e.anchorEnabled = !0,
                e.anchorX = s.newAnchorX,
                e.anchorY = s.newAnchorY,
                e.x = s.newX,
                e.y = s.newY,
                1 == n ? (e.scaleX = 0, e.scaleY = 0, egret.Tween.get(e).to({
                    scaleX: 1,
                    scaleY: 1
                },
                300, egret.Ease.backOut)) : 2 == n && (e.scaleX = 1, e.scaleY = 1, egret.Tween.get(e).to({
                    scaleX: 0,
                    scaleY: 0
                },
                300, egret.Ease.backOut))
            }
        },
        e.effectDic = {},
        e.isPlayEffectPlay = !1,
        e
    } ();
    t.EffectUtil = e,
    __reflect(e.prototype, "easy.EffectUtil")
} (easy || (easy = {}));
var easy; !
function(easy) {
    var TweenEffect = function() {
        function TweenEffect() {}
        return TweenEffect.setAnchorXY = function(t, e, i) {
            void 0 === e && (e = .5),
            void 0 === i && (i = .5),
            t.anchorEnabled = !0,
            t.x += (e - t.anchorX) * t.scaleX * t.width,
            t.y += (i - t.anchorY) * t.scaleY * t.height,
            t.anchorX = e,
            t.anchorY = i
        },
        TweenEffect.magnifyEffect = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }];
            t.scaleX = t.scaleY = t.alpha = 0;
            var i = i ? i: 300;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.restoreEffect = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 1,
                    skewX: 0,
                    skewY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                }
            }],
            i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.shrinkEffect = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    scaleX: 0,
                    scaleY: 0,
                    alpha: 0
                }
            }];
            t.scaleX = t.scaleY = t.alpha = 1;
            var i = i ? i: 300;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.flutterEffect = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .25,
                attr: {
                    alpha: 0,
                    anchorX: 1
                }
            },
            {
                percent: .5,
                attr: {
                    alpha: 1,
                    anchorX: 0
                }
            },
            {
                percent: .75,
                attr: {
                    alpha: 0,
                    anchorX: 1
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorX: 0
                }
            }];
            t.anchorX = t.alpha = 0;
            var i = i ? i: 6e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.flutterPositionEffect = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .4,
                attr: {
                    anchorX: -.3,
                    anchorY: -.2,
                    scaleX: .9,
                    scaleY: .9,
                    alpha: .7
                }
            },
            {
                percent: .8,
                attr: {
                    anchorX: -.2,
                    anchorY: -.1,
                    scaleX: .95,
                    scaleY: .95,
                    alpha: .9
                }
            },
            {
                percent: 1,
                attr: {
                    anchorX: 0,
                    anchorY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }];
            t.anchorX = t.anchorY = 0,
            t.scaleX = t.scaleY = t.alpha = 1;
            var i = i ? i: 6e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeInEffect = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 1
                }
            }];
            t.alpha = 0;
            var i = i ? i: 500;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeInLeft = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorOffsetX: 0
                }
            }];
            t.alpha = 0,
            t.anchorOffsetX = 50;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeInRight = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorOffsetX: 0
                }
            }];
            t.alpha = 0,
            t.anchorOffsetX = -50;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeInUp = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorOffsetY: 0
                }
            }];
            t.alpha = 0,
            t.anchorOffsetY = -50;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeInDown = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorOffsetY: 0
                }
            }];
            t.alpha = 0,
            t.anchorOffsetY = 50;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeOut = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 0
                }
            }];
            t.alpha = 1;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeOutLeft = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 0,
                    anchorOffsetX: 50
                }
            }];
            t.alpha = 1;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeOutRight = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 0,
                    anchorOffsetX: -50
                }
            }];
            t.alpha = 1,
            t.anchorOffsetX = 0;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeOutDown = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 0,
                    anchorOffsetY: -50
                }
            }];
            t.alpha = 1,
            t.anchorOffsetY = 0;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.fadeOutUp = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: 1,
                attr: {
                    alpha: 0,
                    anchorOffsetY: 50
                }
            }];
            t.alpha = 1,
            t.anchorOffsetY = 0;
            var i = i ? i: 800;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.shake = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .22,
                attr: {
                    anchorX: .1
                }
            },
            {
                percent: .44,
                attr: {
                    anchorX: -.1
                }
            },
            {
                percent: .66,
                attr: {
                    anchorX: .1
                }
            },
            {
                percent: .88,
                attr: {
                    anchorX: -.1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorX: 0
                }
            }],
            i = i ? i: 450;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.skip = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .25,
                attr: {
                    scaleY: .8
                }
            },
            {
                percent: .5,
                attr: {
                    scaleY: 1.2
                }
            },
            {
                percent: .75,
                attr: {
                    scaleY: .8
                }
            },
            {
                percent: 1,
                attr: {
                    scaleY: 1
                }
            }];
            t.scaleY = 1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.arrowDown = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .5,
                attr: {
                    alpha: 1,
                    anchorY: -.5
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: .3,
                    anchorY: 0
                }
            }];
            t.alpha = 1,
            t.anchorY = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.arrowUp = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .5,
                attr: {
                    alpha: .3,
                    anchorY: .5
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorY: 0
                }
            }];
            t.alpha = 1,
            t.anchorY = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.arrowRight = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .5,
                attr: {
                    alpha: .3,
                    anchorX: -.5
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: 1,
                    anchorX: 0
                }
            }];
            t.alpha = 1,
            t.anchorX = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.arrowLeft = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .5,
                attr: {
                    alpha: 1,
                    anchorX: .5
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: .3,
                    anchorX: 0
                }
            }];
            t.alpha = 1,
            t.anchorX = 0,
            n = "backIn";
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.flash = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .25,
                attr: {
                    alpha: .4
                }
            },
            {
                percent: .5,
                attr: {
                    alpha: .9
                }
            },
            {
                percent: .75,
                attr: {
                    alpha: .2
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: 1
                }
            }];
            t.alpha = 1;
            var i = i ? i: 2e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.flashIn = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .25,
                attr: {
                    alpha: 0
                }
            },
            {
                percent: .5,
                attr: {
                    alpha: 1
                }
            },
            {
                percent: .75,
                attr: {
                    alpha: 0
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: 1
                }
            }];
            t.alpha = 1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.flashOut = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            t.anchorEnabled = !0,
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .25,
                attr: {
                    alpha: 1
                }
            },
            {
                percent: .5,
                attr: {
                    alpha: 0
                }
            },
            {
                percent: .75,
                attr: {
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    alpha: 0
                }
            }];
            t.alpha = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.rotation = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 1e3, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: object.rotation + 360
            },
            total, easeFun)
        },
        TweenEffect.rotationIn = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 500, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            object.rotation = object.scaleX = object.scaleY = object.alpha = 0,
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: object.rotation + 360,
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            },
            total, easeFun)
        },
        TweenEffect.rotationOut = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 500, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            object.rotation = 0,
            object.scaleX = object.scaleY = object.alpha = 1,
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: object.rotation + 360,
                scaleX: 0,
                scaleY: 0,
                alpha: 0
            },
            total, easeFun)
        },
        TweenEffect.rotationInLeft = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 500, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            object.rotation = 30,
            object.alpha = 0,
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: 0,
                alpha: 1
            },
            total, easeFun)
        },
        TweenEffect.rotationInRight = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 500, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            object.rotation = -30,
            object.alpha = 0,
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: 0,
                alpha: 1
            },
            total, easeFun)
        },
        TweenEffect.rotationOutLeft = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 500, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            object.rotation = 0,
            object.alpha = 1,
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: 30,
                alpha: 0
            },
            total, easeFun)
        },
        TweenEffect.rotationOutRight = function(object, delay, total, easeFunName, isLoop) {
            if (void 0 === delay && (delay = 0), void 0 === total && (total = 0), void 0 === easeFunName && (easeFunName = ""), void 0 === isLoop && (isLoop = !1), egret.Tween.removeTweens(object), total = total ? total: 500, easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            object.rotation = 0,
            object.alpha = 1,
            egret.Tween.get(object, {
                loop: isLoop
            }).wait(delay).to({
                rotation: -30,
                alpha: 0
            },
            total, easeFun)
        },
        TweenEffect.scaleOutRock = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .1,
                attr: {
                    scaleY: .9,
                    scaleX: .9,
                    rotation: -3
                }
            },
            {
                percent: .2,
                attr: {
                    scaleY: .9,
                    scaleX: .9,
                    rotation: -3
                }
            },
            {
                percent: .3,
                attr: {
                    scaleY: 1.1,
                    scaleX: 1.1,
                    rotation: 3
                }
            },
            {
                percent: .4,
                attr: {
                    scaleY: 1.1,
                    scaleX: 1.1,
                    rotation: -3
                }
            },
            {
                percent: .5,
                attr: {
                    scaleY: 1.1,
                    scaleX: 1.1,
                    rotation: 3
                }
            },
            {
                percent: .6,
                attr: {
                    scaleY: 1.1,
                    scaleX: 1.1,
                    rotation: -3
                }
            },
            {
                percent: .7,
                attr: {
                    scaleY: 1.1,
                    scaleX: 1.1,
                    rotation: 3
                }
            },
            {
                percent: .8,
                attr: {
                    scaleY: 1.1,
                    scaleX: 1.1,
                    rotation: 3
                }
            },
            {
                percent: 1,
                attr: {
                    scaleY: 1,
                    scaleX: 1,
                    rotation: 0
                }
            }];
            t.scaleX = t.scaleY = 1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.rubberBand = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t);
            var a = [{
                percent: .3,
                attr: {
                    scaleX: 1.25,
                    scaleY: .75
                }
            },
            {
                percent: .4,
                attr: {
                    scaleX: .75,
                    scaleY: 1.25
                }
            },
            {
                percent: .5,
                attr: {
                    scaleX: 1.15,
                    scaleY: .85
                }
            },
            {
                percent: .65,
                attr: {
                    scaleX: .95,
                    scaleY: 1.05
                }
            },
            {
                percent: .75,
                attr: {
                    scaleX: 1.05,
                    scaleY: .95
                }
            },
            {
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1
                }
            }];
            t.scaleX = t.scaleY = 1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounce = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .4,
                attr: {
                    anchorY: .1
                }
            },
            {
                percent: .43,
                attr: {
                    anchorY: .2
                }
            },
            {
                percent: .7,
                attr: {
                    anchorY: .1
                }
            },
            {
                percent: .8,
                attr: {
                    anchorY: 0
                }
            },
            {
                percent: .9,
                attr: {
                    anchorY: .04
                }
            },
            {
                percent: 1,
                attr: {
                    anchorY: 0
                }
            }];
            t.anchorY = 0;
            var i = i ? i: 500;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceIn = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    scaleX: 1.1,
                    scaleY: 1.1
                }
            },
            {
                percent: .4,
                attr: {
                    scaleX: .9,
                    scaleY: .9
                }
            },
            {
                percent: .6,
                attr: {
                    scaleX: 1.03,
                    scaleY: 1.03,
                    alpha: 1
                }
            },
            {
                percent: .8,
                attr: {
                    scaleX: .97,
                    scaleY: .97
                }
            },
            {
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.scaleX = t.scaleY = .3;
            var i = i ? i: 500;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceInDown = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .6,
                attr: {
                    anchorOffsetY: 25,
                    alpha: 1
                }
            },
            {
                percent: .75,
                attr: {
                    anchorOffsetY: -10,
                    alpha: 1
                }
            },
            {
                percent: .9,
                attr: {
                    anchorOffsetY: 5,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetY: 0,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.anchorOffsetY = -3e3;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceInUp = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .6,
                attr: {
                    anchorOffsetY: 25,
                    alpha: 1
                }
            },
            {
                percent: .75,
                attr: {
                    anchorOffsetY: -10,
                    alpha: 1
                }
            },
            {
                percent: .9,
                attr: {
                    anchorOffsetY: 5,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetY: 0,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.anchorOffsetY = 3e3;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceInLeft = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .6,
                attr: {
                    anchorOffsetX: 25,
                    alpha: 1
                }
            },
            {
                percent: .75,
                attr: {
                    anchorOffsetX: -10,
                    alpha: 1
                }
            },
            {
                percent: .9,
                attr: {
                    anchorOffsetX: 5,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetX: 0,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.anchorOffsetX = -3e3;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceInRight = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .6,
                attr: {
                    anchorOffsetX: 25,
                    alpha: 1
                }
            },
            {
                percent: .75,
                attr: {
                    anchorOffsetX: -10,
                    alpha: 1
                }
            },
            {
                percent: .9,
                attr: {
                    anchorOffsetX: 5,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetX: 0,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.anchorOffsetX = 3e3;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceOut = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    scaleX: .9,
                    scaleY: .9
                }
            },
            {
                percent: .5,
                attr: {
                    scaleX: 1.1,
                    scaleY: 1.1
                }
            },
            {
                percent: .55,
                attr: {
                    scaleX: 1.1,
                    scaleY: 1.1
                }
            },
            {
                percent: 1,
                attr: {
                    scaleX: .3,
                    scaleY: .3,
                    alpha: 0
                }
            }];
            t.alpha = t.scaleX = t.scaleY = 1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceOutUp = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    anchorOffsetY: 25,
                    alpha: 1
                }
            },
            {
                percent: .4,
                attr: {
                    anchorOffsetY: -20,
                    alpha: 1
                }
            },
            {
                percent: .45,
                attr: {
                    anchorOffsetY: -20,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetY: 2e3,
                    alpha: 0
                }
            }];
            t.alpha = 1,
            t.anchorOffsetY = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceOutDown = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    anchorOffsetY: -10,
                    alpha: 1
                }
            },
            {
                percent: .4,
                attr: {
                    anchorOffsetY: 20,
                    alpha: 1
                }
            },
            {
                percent: .45,
                attr: {
                    anchorOffsetY: 20,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetY: -2e3,
                    alpha: 0
                }
            }];
            t.alpha = 1,
            t.anchorOffsetY = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceOutLeft = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    anchorOffsetX: -25,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetX: 2e3,
                    alpha: 0
                }
            }];
            t.alpha = 1,
            t.anchorOffsetX = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.bounceOutRight = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    anchorOffsetX: 25,
                    alpha: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorOffsetX: -2e3,
                    alpha: 0
                }
            }];
            t.alpha = 1,
            t.anchorOffsetX = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.swing = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .2,
                attr: {
                    rotation: 15
                }
            },
            {
                percent: .4,
                attr: {
                    rotation: -10
                }
            },
            {
                percent: .6,
                attr: {
                    rotation: 5
                }
            },
            {
                percent: .8,
                attr: {
                    rotation: -5
                }
            },
            {
                percent: 1,
                attr: {
                    rotation: 0
                }
            }];
            t.rotation = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.scaleIn = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.scaleX = t.scaleY = 1.2;
            var i = i ? i: 500;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.scaleOut = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: 1,
                attr: {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: 0
                }
            }];
            t.alpha = 1,
            t.scaleX = t.scaleY = 1;
            var i = i ? i: 500;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.scaleInBig = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }];
            t.alpha = 0,
            t.scaleX = t.scaleY = 3;
            var i = i ? i: 500;
            n = "quadIn",
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.scaleOutBig = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: 1,
                attr: {
                    scaleX: 3,
                    scaleY: 3,
                    alpha: 0
                }
            }];
            t.alpha = 1,
            t.scaleX = t.scaleY = 1;
            var i = i ? i: 500;
            n = "quadIn",
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.rightSpeedIn = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .6,
                attr: {
                    skewX: 20,
                    alpha: 1,
                    anchorX: -.4
                }
            },
            {
                percent: .8,
                attr: {
                    skewX: -5,
                    alpha: 1,
                    anchorX: -.2
                }
            },
            {
                percent: 1,
                attr: {
                    skewX: 0,
                    alpha: 1,
                    anchorX: 0
                }
            }];
            t.skewX = t.alpha = 0,
            t.anchorX = -1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.pluse = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .5,
                attr: {
                    scaleX: 1.1,
                    scaleY: 1.1
                }
            },
            {
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1
                }
            }];
            t.scaleX = t.scaleY = 1;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.rotationFlash = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .25,
                attr: {
                    rotation: 5
                }
            },
            {
                percent: .75,
                attr: {
                    rotation: -5
                }
            },
            {
                percent: 1,
                attr: {
                    rotation: 0
                }
            }];
            t.rotation = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.breath = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .25,
                attr: {
                    scaleX: .92,
                    scaleY: .92,
                    alpha: .7
                }
            },
            {
                percent: .5,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            },
            {
                percent: .75,
                attr: {
                    scaleX: .92,
                    scaleY: .92,
                    alpha: .7
                }
            },
            {
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }];
            t.scaleX = t.scaleY = t.alpha = 1;
            var i = i ? i: 5e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.shiftUp = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .5,
                attr: {
                    anchorY: 1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorY: 0
                }
            }];
            t.anchorY = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.shiftDown = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .5,
                attr: {
                    anchorY: -1
                }
            },
            {
                percent: 1,
                attr: {
                    anchorY: 0
                }
            }];
            t.anchorY = 0;
            var i = i ? i: 1e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.jump = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = ""),
            void 0 === s && (s = !1),
            egret.Tween.removeTweens(t),
            t.anchorEnabled = !0;
            var a = [{
                percent: .4,
                attr: {
                    scaleX: 1.1,
                    scaleY: .9,
                    anchorY: .8
                }
            },
            {
                percent: .55,
                attr: {
                    scaleX: 1.8,
                    scaleY: .2,
                    anchorY: .9
                }
            },
            {
                percent: .65,
                attr: {
                    scaleX: .6,
                    scaleY: 1.4,
                    anchorY: .3
                }
            },
            {
                percent: 1,
                attr: {
                    scaleX: 1,
                    scaleY: 1,
                    anchorY: 0
                }
            }];
            t.anchorY = 0,
            t.scaleX = t.scaleY = 1;
            var i = i ? i: 2e3;
            TweenEffect.start(t, a, e, i, n, s)
        },
        TweenEffect.rock = function(t, e, i, n) {
            void 0 === e && (e = 25),
            void 0 === i && (i = 200),
            void 0 === n && (n = !1);
            var s = t.rotation;
            egret.Tween.get(t, {
                loop: n
            }).to({
                rotation: e + s
            },
            i).to({
                rotation: s
            },
            i).to({
                rotation: s - e
            },
            i).to({
                rotation: s
            },
            i).to({
                rotation: e + s
            },
            i).to({
                rotation: s
            },
            i).to({
                rotation: s - e
            },
            i).to({
                rotation: s
            },
            i).wait(2e3)
        },
        TweenEffect.fly = function(t, e, i, n, s) {
            void 0 === e && (e = 500),
            void 0 === i && (i = 3),
            void 0 === n && (n = !0),
            void 0 === s && (s = 1);
            var a, r;
            a = t.x,
            r = t.y,
            1 == s ? egret.Tween.get(t, {
                loop: n
            }).to({
                y: r + i
            },
            e).to({
                y: r
            },
            e).to({
                y: r - i
            },
            e).to({
                y: r
            },
            e) : egret.Tween.get(t, {
                loop: n
            }).to({
                x: a + i
            },
            e).to({
                x: a
            },
            e).to({
                x: a - i
            },
            e).to({
                x: a
            },
            e)
        },
        TweenEffect.start = function(object, attr, delay, total, easeFunName, isLoop) {
            void 0 === delay && (delay = 0),
            void 0 === total && (total = 0),
            void 0 === easeFunName && (easeFunName = ""),
            void 0 === isLoop && (isLoop = !1),
            egret.Tween.removeTweens(object);
            var index = 0,
            attr = attr,
            total = total,
            tweenTime = 0;
            if (easeFunName) var easeFun = eval("egret.Ease." + easeFunName);
            else easeFun = null;
            setTimeout(function t() {
                if (index >= attr.length) {
                    if (!isLoop) return;
                    index = 0
                }
                tweenTime = index > 0 ? (attr[index].percent - attr[index - 1].percent) * total: attr[index].percent * total,
                egret.Tween.get(object).to(attr[index].attr, tweenTime, easeFun).call(t, this),
                index++
            },
            delay)
        },
        TweenEffect
    } ();
    easy.TweenEffect = TweenEffect,
    __reflect(TweenEffect.prototype, "easy.TweenEffect")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.getPacket = function(t, i) {
            void 0 === i && (i = !0);
            var n = e.packetCachePool[(i ? "c_": "s_") + t];
            if (null == n && (n = new Array, e.packetCachePool[(i ? "c_": "s_") + t] = n), 0 == n.length) {
                var s = egret.getDefinitionByName("easy.PacketFactory");
                return s ? s.createPacket(t, i) : null
            }
            return n.shift()
        },
        e.releasePacket = function(t) {
            var i = e.packetCachePool[(t.clientSide ? "c_": "s_") + t.header.messageId];
            null == i && (i = new Array, e.packetCachePool[(t.clientSide ? "c_": "s_") + t.header.messageId] = i),
            i.push(t)
        },
        e.getEvent = function(i) {
            var n = e.eventCachePool[i];
            return null == n && (n = [], e.eventCachePool[i] = n),
            0 == n.length ? new t.MyEvent(i) : n.pop()
        },
        e.releaseEvent = function(t) {
            var i = e.eventCachePool[t.type];
            null == i && (i = [], e.eventCachePool[t.type] = i),
            t.destory(),
            i.push(t)
        },
        e.addPacketEvent = function(t, i, n) {
            if (null != i && !e.isContainerPacketEventListener(t, i, n)) {
                var s = null;
                s = e.packetEventList[e.PREFIX + t],
                null == s && (s = new Array, e.packetEventList[e.PREFIX + t] = s),
                s.push({
                    func: i,
                    owner: n
                })
            }
        },
        e.removePacketEvent = function(t, i, n) {
            if (null != i && e.isContainerPacketEventListener(t, i, n)) {
                var s = e.packetEventList[e.PREFIX + t];
                if (s) for (var a = 0; a < s.length; a++) if (s[a].func == i && s[a].owner == n) {
                    s.splice(a, 1);
                    break
                }
            }
        },
        e.isContainerPacketEventListener = function(t, i, n) {
            var s = e.packetEventList[e.PREFIX + t];
            if (null != s) for (var a = 0; a < s.length; a++) if (s[a].func == i && s[a].owner == n) return ! 0;
            return ! 1
        },
        e.dispactchPacket = function(i) {
            null != i && (t.Debug.log = i, this.packetSendCacheList.push(i), t.HeartBeat.addListener(e, e.onFireDispactchPacket))
        },
        e.onFireDispactchPacket = function() {
            if (e.packetSendCacheList.length > 0) {
                var i = e.packetSendCacheList.shift(),
                n = e.packetEventList[e.PREFIX + i.header.messageId];
                if (null != n) {
                    for (var s = n.length,
                    a = 0; s > a; a++) {
                        n[a];
                        n[a].func.call(n[a].owner, i)
                    }
                    e.releasePacket(i)
                }
                t.ViewManager.receivePacket(i)
            }
            0 == this.packetSendCacheList.length && t.HeartBeat.removeListener(e, e.onFireDispactchPacket)
        },
        e.dispatch = function(t, i, n) {
            void 0 === i && (i = null),
            void 0 === n && (n = !1);
            var s = e.getEvent(t);
            if (i) {
                var a = null;
                for (var r in i)"__class__" != r && "hashCode" != r && "__types__" != r && "__proto__" != r && (a = i[r], a instanceof Function || s.addItem(r, a))
            }
            e.dispatchEvent(s),
            n && this.onFiredispatchEvent()
        },
        e.dispatchEvent = function(i) {
            null != i && (e.eventSendCacheList.push(i), t.HeartBeat.addListener(e, e.onFiredispatchEvent))
        },
        e.onFiredispatchEvent = function() {
            if (e.eventSendCacheList.length > 0) {
                var i = e.eventSendCacheList.shift(),
                n = e.commEventList[i.type];
                if (null != n) for (var s = n.length - 1; s >= 0; s--) n[s].func.call(n[s].owner, i);
                t.ViewManager.receiveEvent(i),
                e.releaseEvent(i)
            }
            0 == e.eventSendCacheList.length && t.HeartBeat.removeListener(e, e.onFiredispatchEvent)
        },
        e.removeEventListener = function(t, i, n) {
            var s = e.commEventList[t];
            if (null != s) for (var a = 0; a < s.length; a++) if (s[a].func == i && s[a].owner == n) {
                s.splice(a, 1);
                break
            }
        },
        e.addEventListener = function(t, i, n) {
            if (null != i && !e.isContainerEventListener(t, i, n)) {
                var s = e.commEventList[t];
                null == s && (s = new Array, e.commEventList["" + t] = s),
                s.push({
                    func: i,
                    owner: n
                })
            }
        },
        e.isContainerEventListener = function(t, i, n) {
            var s = e.commEventList["" + t];
            if (null != s) for (var a = 0; a < s.length; a++) if (s[a].func == i && s[a].owner == n) return ! 0;
            return ! 1
        },
        e.PREFIX = "PKT_",
        e.packetEventList = {},
        e.commEventList = {},
        e.eventCachePool = {},
        e.eventSendCacheList = [],
        e.packetCachePool = {},
        e.packetSendCacheList = [],
        e
    } ();
    t.EventManager = e,
    __reflect(e.prototype, "easy.EventManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.SOCKET_CONNECT = "SOCKET_CONNECT",
        t.SOCKET_DISCONNECT_ERROR = "SOCKET_DISCONNECT_ERROR",
        t.SOCKET_DISCONNECT = "SOCKET_DISCONNECT",
        t.SOCKET_SEND_SHOW = "SOCKET_SEND_SHOW",
        t.SOCKET_SEND_HIDE = "SOCKET_SEND_HIDE",
        t.SOCKET_SEND_TIMEOUT = "SOCKET_SEND_TIMEOUT",
        t.STAGE_RESIZE = "STAGE_RESIZE",
        t.UI_CONFIG_VOLUME = "UI_CONFIG_VOLUME",
        t.UI_CONFIG_FULLSCREEN = "UI_CONFIG_FULLSCREEN",
        t.UI_LOADER_COMPLETED = "UI_LOADER_COMPLETED",
        t.MOVIEWCLIP_PLAY = "MOVIEWCLIP_PLAY",
        t.MOVIEWCLIP_PLAY_END = "MOVIEWCLIP_PLAY_END",
        t.UI_DEBUG_OPEN = "DEBUG_UI_OPEN",
        t.UI_DEBUG_CLOSE = "DEBUG_UI_CLOSE",
        t.VOLUME_CHANGED = "VOLUME_CHANGED",
        t.RESOURCE_DOWNLOADED = "RESOURCE_DOWNLOADED",
        t.RESOURCE_PROGRESS = "RESOURCE_PROGRESS",
        t.PROJECT_RES_DOWNLOADED = "PROJECT_RES_DOWNLOADED",
        t.GUIDE_FREEDBACK = "GUIDE_FREEDBACK",
        t.GUIDE_END = "GUIDE_END",
        t.GUIDE_SIMULATE = "GUIDE_SIMULATE",
        t.VIEW_ENTER = "VIEW_ENTER",
        t.VIEW_OUTER = "VIEW_OUTER",
        t.WIN_ENTER = "WIN_ENTER",
        t.WIN_OUTER = "WIN_OUTER",
        t.GUIDE_TASK_TALKING_NOTIFY = "GUIDE_TASK_TALKING_NOTIFY",
        t.GUIDE_PARAM_NOTIFY = "GUIDE_PARAM_NOTIFY",
        t.GUIDE_WIN_CLOSE_NOTIFY = "GUIDE_WIN_CLOSE_NOTIFY",
        t.GUIDE_TASK_CLOSE_NOTIFY = "GUIDE_TASK_CLOSE_NOTIFY",
        t.GUIDE_STOP_ITEM = "GUIDE_STOP_ITEM",
        t.STORY_TALKING = "STORY_TALKING",
        t.STORY_END = "STORY_END",
        t.GUIDE_EVENT_EXE = "GUIDE_EVENT_EXE",
        t.GUIDE_EVENT_END = "GUIDE_EVENT_END",
        t.GUIDE_CHAPTER_END = "GUIDE_CHAPTER_END",
        t.SOUND_COMPLETE = "SOUND_COMPLETE",
        t.SOUND_STOP = "SOUND_STOP",
        t.VIDEO_END = "VIDEO_END",
        t.ERASE_COMPLETE = "erase_complete",
        t.ERASE_CHANGE = "erase_change",
        t.RPG_SCENE_REACH_TARGET = "rpg_scene_reach_target",
        t.RPG_SCENE_SELECTED = "rpg_scene_selected",
        t.RPG_SCENE_HIT_FOCUS_ACTOR = "rpg_scene_hit_focus_actor",
        t.RPG_SCENE_ACTOR_MOVE_BEGIN = "rpg_scene_actor_move_begin",
        t.RPG_SCENE_ACTOR_MOVE_END = "rpg_scene_actor_move_end",
        t.RPG_SCENE_MAP_LOADED = "rpg_scene_map_loaded",
        t.RPG_SCENE_CTRL_ADD = "rpg_scene_ctrl_add",
        t.RPG_SCENE_CTRL_DEL = "rpg_scene_ctrl_del",
        t.RPG_SCENE_ACTOR_ADD = "rpg_scene_actor_add",
        t.RPG_SCENE_ACTOR_DEL = "rpg_scene_actor_del",
        t.RPG_SCENE_CLIP_ROUND_END = "rpg_scene_clip_round_end",
        t
    } ();
    t.EventType = e,
    __reflect(e.prototype, "easy.EventType")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.start = function(e, i, n, s, a) {
            if (void 0 === i && (i = !0), void 0 === n && (n = 0), void 0 === s && (s = 9999), void 0 === a && (a = !0), i) {
                var r = egret.MainContext.instance.stage;
                r.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this),
                r.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this),
                r.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
            } else this._moveObject.touchEnabled = !0,
            this._moveObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this),
            this._moveObject.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this),
            this._moveObject.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            this._moveObject = e,
            a && t.TweenEffect.setAnchorXY(this._moveObject),
            this._minScale = n * this._moveObject.width,
            this._maxScale = s * this._moveObject.width,
            this._moveObject instanceof t.Image && (this._moveObject.autoSize = !0)
        },
        e.mouseDown = function(t) {
            if (null == this._touchPoints[t.touchPointID] && (this._touchPoints[t.touchPointID] = new egret.Point(t.stageX, t.stageY), this._touchPoints.names.push(t.touchPointID)), this._touchCount++, 1 == this._touchCount) {
                var e = this._touchPoints.names;
                this._oldX = this._touchPoints[e[0]].x - this._moveObject.x,
                this._oldY = this._touchPoints[e[0]].y - this._moveObject.y,
                this._firstTouchId = t.touchPointID
            }
            2 == this._touchCount && (this._distance = this.getTouchDistance(), this._angle = this.getTouchAngle())
        },
        e.mouseMove = function(t) {
            if (this._touchPoints[t.touchPointID].x = t.stageX, this._touchPoints[t.touchPointID].y = t.stageY, t.touchPointID == this._firstTouchId && (this._moveObject.x = t.stageX - this._oldX, this._moveObject.y = t.stageY - this._oldY), 2 == this._touchCount) {
                var e = this.getTouchDistance(),
                i = e / this._distance;
                i * this._moveObject.width < this._minScale && (i = this._minScale / this._moveObject.width),
                i * this._moveObject.width > this._maxScale && (i = this._maxScale / this._moveObject.width),
                this._moveObject.scaleX = i,
                this._moveObject.scaleY = i;
                var n = this.getTouchAngle();
                this._moveObject.rotation = n - this._angle + this._currentRotation
            }
        },
        e.mouseUp = function(t) {
            delete this._touchPoints[t.touchPointID];
            var e = this._touchPoints.names.indexOf(t.touchPointID); - 1 != e && this._touchPoints.names.splice(e, 1),
            this._touchCount--,
            this._moveObject.width *= this._moveObject.scaleX,
            this._moveObject.height *= this._moveObject.scaleY,
            this._moveObject.scaleX = 1,
            this._moveObject.scaleY = 1,
            this._isMiddle && (this._moveObject.anchorOffsetX = this._moveObject.width / 2, this._moveObject.anchorOffsetY = this._moveObject.height / 2),
            this._moveObject.draw(),
            this._currentRotation = this._moveObject.rotation
        },
        e.getTouchDistance = function() {
            var t = this._touchPoints.names,
            e = 0;
            return e = egret.Point.distance(this._touchPoints[t[t.length - 1]], this._touchPoints[t[t.length - 2]])
        },
        e.getTouchAngle = function() {
            var t = 0,
            e = this._touchPoints.names,
            i = this._touchPoints[e[e.length - 1]],
            n = this._touchPoints[e[e.length - 2]];
            return t = 180 * Math.atan2(i.y - n.y, i.x - n.x) / Math.PI
        },
        e._touchPoints = {
            names: []
        },
        e._distance = 0,
        e._angle = 0,
        e._touchCount = 0,
        e._currentRotation = 0,
        e._moveObject = null,
        e._isMiddle = !0,
        e._minScale = 0,
        e._maxScale = 0,
        e._oldX = 0,
        e._oldY = 0,
        e._firstTouchId = 0,
        e
    } ();
    __reflect(e.prototype, "MoreTouch")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e(t) {
            this.callStack = null,
            this.type = null,
            this.datas = {},
            this.type = t
        }
        return e.prototype.addItem = function(t, e) {
            this.datas[t] = e
        },
        e.prototype.getItem = function(t) {
            return this.datas.hasOwnProperty(t) ? this.datas[t] : null
        },
        e.prototype.hasItem = function(t) {
            return this.datas.hasOwnProperty(t)
        },
        e.prototype.destory = function() {
            this.callStack = null;
            for (var t in this.datas) delete this.datas[t]
        },
        e.prototype.removeItem = function(t) {
            return this.datas.hasOwnProperty(t) ? (delete this.datas[t], !0) : !1
        },
        e.prototype.send = function() {
            t.EventManager.dispatchEvent(this)
        },
        e.getEvent = function(e) {
            return t.EventManager.getEvent(e)
        },
        e.sendEvent = function(e, i, n) {
            void 0 === i && (i = null),
            void 0 === n && (n = !1),
            t.EventManager.dispatch(e, i, n)
        },
        e
    } ();
    t.MyEvent = e,
    __reflect(e.prototype, "easy.MyEvent")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.init = function() {
            t.GlobalSetting.STAGE.frameRate = t.GlobalSetting.FRAME_RATE;
            var i = RES.getRes("easygame_config");
            if (i) {
                if (i.name && (t.GlobalSetting.APP_NAME = i.name), i.product && (t.GlobalSetting.APP_PRODUCT = i.product), i.version && (t.GlobalSetting.APP_VERSION = i.version), i.resource && (t.GlobalSetting.CDN_RES = i.resource), i.resource2 && (t.GlobalSetting.CDN_RES2 = i.resource2), i.version_res && (t.GlobalSetting.VERSION_RES = i.version_res, "" != t.GlobalSetting.VERSION_RES && t.GlobalSetting.VERSION_RES.indexOf("?r=") < 0 && (t.GlobalSetting.VERSION_RES = "?r=" + t.GlobalSetting.VERSION_RES)), i.report) {
                    var n = i.report;
                    if (n.url && (t.GlobalSetting.REPORT_URL = n.url), n.provide && (t.GlobalSetting.APP_PROVIDE = n.provide), n.channel) for (var s = 0; s < n.channel.length; s++) if (t.GlobalSetting.APP_PROVIDE == n.channel[s].id) {
                        t.GlobalSetting.APP_CHANNEL = n.channel[s].name,
                        t.GlobalSetting.APP_RATE = n.channel[s].rate,
                        t.GlobalSetting.APP_RATE_NAME = n.channel[s].unit,
                        t.GlobalSetting.REPORT = n.channel[s].report,
                        t.GlobalSetting.APP_STORAGE = n.channel[s].storage;
                        break
                    }
                }
                i.statistics && (i.statistics.view && (t.GlobalSetting.STATS_VIEW = i.statistics.view), i.statistics.win && (t.GlobalSetting.STATS_WIN = i.statistics.win), i.statistics.btn && (t.GlobalSetting.STATS_BTN = i.statistics.btn), i.statistics.mc && (t.GlobalSetting.STATS_MC = i.statistics.mc), i.statistics.list && (t.GlobalSetting.STATS_LIST = i.statistics.list)),
                i.dev && (i.dev.scale_mode && (t.GlobalSetting.DISPLAY_MODEL = i.dev.scale_mode), i.dev.loading_max && (t.GlobalSetting.LOADING_THREAD_MAX = i.dev.loading_max), i.dev.debug && (t.GlobalSetting.DEV_MODEL = "true" == i.dev.debug), t.GlobalSetting.DEV_MODEL && e.showDebugInfo(), RES.setMaxLoadingThread(t.GlobalSetting.LOADING_THREAD_MAX))
            }
            t.GlobalSetting.STAGE.addEventListener(egret.Event.RESIZE, e.onStageResize, e)
        },
        e.onStageResize = function(e) {
            t.GlobalSetting.initInfoSize(),
            t.ViewManager.currentView && t.ViewManager.currentView.onStageResize(),
            t.PopupManager.currentWin && t.PopupManager.currentWin.onStageResize()
        },
        e.showDebugInfo = function() {
            if (t.GlobalSetting.DEV_MODEL) {
                null == this._tfInfo && (this._tfInfo = new egret.TextField),
                t.GlobalSetting.STAGE.addChild(this._tfInfo),
                this._tfInfo.x = 300,
                this._tfInfo.width = 300,
                this._tfInfo.height = 40,
                t.HeartBeat.addListener(this, this.onShowHearBeatInfo);
                var e = new t.Button;
                t.GlobalSetting.STAGE.addChild(e),
                e.label = "DEBUG",
                e.fontSize = 16,
                e.labelColor = 16711935,
                e.setSize(80, 35),
                e.y = 2,
                e.x = 150,
                e.addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    t.DebugWin.show()
                },
                this)
            }
        },
        e.onShowHearBeatInfo = function() {
            e._tfInfo.text = "HB:" + t.HeartBeat.getHearBeatLenght(),
            t.DebugWin._instance && t.DebugWin._instance.parent && t.DebugWin.refresh()
        },
        e._tfInfo = null,
        e
    } ();
    t.EasyGame = e,
    __reflect(e.prototype, "easy.EasyGame");
    var i = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype.calculateStageSize = function(t, e, i, n, s) {
            var a = e,
            r = i,
            o = n,
            h = s,
            l = a / o || 0,
            u = r / h || 0;
            return l > u ? o = Math.round(a / u) : h = Math.round(r / l),
            {
                stageWidth: o,
                stageHeight: h,
                displayWidth: a,
                displayHeight: r
            }
        },
        e
    } (egret.sys.DefaultScreenAdapter);
    t.EasyGameFullScreen = i,
    __reflect(i.prototype, "easy.EasyGameFullScreen")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.show = function(i, n, s, a) {
            void 0 === n && (n = null),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
            var r = egret.getQualifiedClassName(i);
            if (e._winIsManager[r] = a, e.waitShowWin = t.ObjectPool.getByClass(i, "", !1), e.currentWin) {
                if (e.currentWin == e.waitShowWin) return t.GlobalSetting.STAGE.addChild(e.currentWin),
                e.waitShowWin = null,
                e.currentWin;
                if (r = egret.getQualifiedClassName(e.currentWin), e.currentWin) {
                    e.CURRENT_SHOW.indexOf(e.currentWin) < 0 && e.CURRENT_SHOW.push(e.currentWin);
                    var o = e._winIsManager[r];
                    o && e.currentWin.removeFromParent()
                }
            }
            return null == e._mask && (e._mask = new egret.Shape, e._mask.touchEnabled = !0, e._mask.graphics.beginFill(0, .8), e._mask.graphics.drawRect(0, 0, t.GlobalSetting.STAGE_WIDTH, t.GlobalSetting.STAGE_HEIGHT), e._mask.graphics.endFill()),
            s ? t.GlobalSetting.STAGE.addChild(e._mask) : e._mask.parent && e._mask.parent.removeChild(e._mask),
            e.waitShowWin && (e.waitShowWin.data = n, e.waitShowWin.alpha = 0, t.GlobalSetting.STAGE.addChildAt(e.waitShowWin, 0)),
            e.waitShowWin && e.waitShowWin.checkResReady() ? (e.waitWinDoEnter(), e.waitShowWin) : null
        },
        e.waitWinDoEnter = function() {
            if (e.waitShowWin) {
                e.waitShowWin._uiResReady || (e.waitShowWin._uiResReady = !0),
                e.waitShowWin.removeFromParent(),
                e.waitShowWin.alpha = 1,
                t.GlobalSetting.STAGE.addChild(e.waitShowWin),
                e.waitShowWin.x = t.ViewManager.currentView.cx - e.waitShowWin.cx,
                e.waitShowWin.y = t.ViewManager.currentView.cy - e.waitShowWin.cy;
                var i = egret.getQualifiedClassName(e.waitShowWin);
                e._winIsManager[i];
                e.waitShowWin instanceof t.DefaultGuideWin || (e.currentWin = e.waitShowWin),
                e.waitShowWin.enter()
            }
        },
        e.hidden = function(i) {
            var n = egret.getQualifiedClassName(i),
            s = t.ObjectPool.getObject(n, !1);
            s && (s.outer(), s.removeFromParent(), e.CURRENT_SHOW.lastIndexOf(s) >= 0 && e.CURRENT_SHOW.splice(e.CURRENT_SHOW.indexOf(s), 1)),
            e.currentWin == s && (e._mask && e._mask.parent && e._mask.parent.removeChild(e._mask), e.currentWin = null, e.CURRENT_SHOW.length > 0 && (e.currentWin = e.CURRENT_SHOW.pop())),
            e.currentWin ? (t.GlobalSetting.STAGE.addChild(e._mask), t.GlobalSetting.STAGE.addChild(e.currentWin)) : e._mask && e._mask.parent && t.GlobalSetting.STAGE.removeChild(e._mask)
        },
        e.getWinInstance = function(e) {
            return t.ObjectPool.getByClass(e, "", !1)
        },
        e.isShow = function(t) {
            var i = e.getWinInstance(t);
            return e.CURRENT_SHOW.indexOf(i) >= 0 || e.currentWin == i ? !0 : !1
        },
        e.onEventMask = function(t) {
            t.stopImmediatePropagation(),
            t.stopPropagation()
        },
        e.removeAll = function() {
            for (; e.currentWin;) e.hidden(e.currentWin);
            for (; e.CURRENT_SHOW.length > 0;) e.hidden(e.CURRENT_SHOW.pop());
            e.currentWin = null
        },
        e.receivePacket = function(t) {
            e.currentWin && e.currentWin.receivePacket(t);
            for (var i = 0; i < e.CURRENT_SHOW.length; i++) e.CURRENT_SHOW[i] != e.currentWin && e.CURRENT_SHOW[i].receivePacket(t)
        },
        e.receiveEvent = function(t) {
            e.currentWin && e.currentWin.receiveEvent(t);
            for (var i = 0; i < e.CURRENT_SHOW.length; i++) e.CURRENT_SHOW[i] != e.currentWin && e.CURRENT_SHOW[i].receiveEvent(t)
        },
        e.defaultLoadingClass = t.DefaultLoadingView,
        e.CURRENT_SHOW = [],
        e.waitShowWin = null,
        e.currentWin = null,
        e._winIsManager = {},
        e._mask = null,
        e
    } ();
    t.PopupManager = e,
    __reflect(e.prototype, "easy.PopupManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.getTexture = function(t) {
            return ! this._isInit && e._canSplite && e.spliteSpriteSheet(),
            e._projectNameSprite.indexOf(t) >= 0 ? this._isInit ? e._spriteSheet.getTexture(t) : null: e.getRes(t)
        },
        e.getRes = function(i, n) {
            return void 0 === n && (n = RES.ResourceItem.TYPE_IMAGE),
            t.StringUtil.isUsage(i) ? e._urlDataDict[i] ? e._urlDataDict[i] : RES.hasRes(i) ? RES.getRes(i) : (e._urlDownloading.indexOf(i) < 0 && (e._urlDownloading.push(i), t.GlobalSetting.isNative() ? RES.getResByUrl(i, e.onloadedCompleteDynamicTexture, this, n) : RES.getResByUrl(i + t.GlobalSetting.VERSION_RES, e.onloadedCompleteDynamicTexture, this, n)), null) : null
        },
        e.hasRes = function(i) {
            return t.StringUtil.isUsage(i) ? e._urlDataDict[i] ? !0 : RES.hasRes(i) ? !0 : !1 : !1
        },
        e.onloadedCompleteDynamicTexture = function(i, n) {
            var s = n;
            if (s.lastIndexOf("?r=") > 0 && (s = s.substring(0, s.lastIndexOf("?r="))), i) {
                e._urlDownloading.indexOf(s) >= 0 && e._urlDownloading.splice(e._urlDownloading.indexOf(s), 1),
                e._urlDataDict[s] = i;
                var a = t.MyEvent.getEvent(t.EventType.RESOURCE_DOWNLOADED);
                a.addItem("name", s),
                a.addItem("data", i),
                a.send()
            }
        },
        e.loadResFile = function(i) {
            e._projectName = i,
            e._projectGroup = i + "_common",
            e.loadConfig(t.GlobalSetting.CDN_RES + "assets/ui/" + e._projectName + "/" + e._projectGroup + "_loader.json", [e._projectGroup + "_group"], e.onLoadingGroupJosnFileComplete, e)
        },
        e.onLoadingGroupJosnFileComplete = function(i) {
            e.isGroupLoaded(e._projectGroup + "_group") && !e._canSplite && (e._canSplite = !0, t.MyEvent.sendEvent(t.EventType.PROJECT_RES_DOWNLOADED))
        },
        e.spliteSpriteSheet = function() {
            if (!e._isInit && e._canSplite) {
                e._isInit = !0;
                var t = RES.getRes(e._projectGroup + "_json");
                if (t) {
                    e._spriteSheet = new egret.SpriteSheet(RES.getRes(e._projectGroup + "_img"));
                    for (var i in t.texture) e._projectNameSprite.push(i),
                    e._spriteSheet.createTexture(i, t.texture[i].x, t.texture[i].y, t.texture[i].w, t.texture[i].h)
                }
            }
        },
        e.checkProjectResLoaded = function() {
            return t.StringUtil.isUsage(e._projectGroup) ? e._canSplite: !0
        },
        e.addIdleDownload = function(i) {
            if (i) {
                var n = new i;
                n instanceof t.View || n instanceof t.Win || n instanceof t.Template ? (e._idleDownloadClz.indexOf(i) < 0 && e._idleDownloadClz.push(i), t.ObjectPool.recycleClass(n), t.HeartBeat.addListener(this, this.onHbCheckDownloadIdle, t.GlobalSetting.CHECK_IDLE_LOADING)) : t.Debug.log = "[WARING]addIdleDownload 类不是WIN或者VIEW,不做调度下载!"
            }
        },
        e.onHbCheckDownloadIdle = function() {
            e._currentIdleDown && e._currentIdleDown._uiResReady && (e._currentIdleDown = null),
            null == e._currentIdleDown && e._idleDownloadClz.length > 0 && e.onFireIdleDownload(),
            0 == e._idleDownloadClz.length && (e._currentIdleDown = null, t.HeartBeat.removeListener(this, this.onHbCheckDownloadIdle))
        },
        e.onFireIdleDownload = function() {
            if (null == e._currentIdleDown && e._idleDownloadClz.length > 0) {
                var i = e._idleDownloadClz.shift(),
                n = t.ObjectPool.getByClass(i, "", !1);
                n && !n._uiResReady && (e._currentIdleDown = n, n.visible = !1, t.GlobalSetting.STAGE.addChildAt(n, 0), n.idleDownload(), n.removeFromParent(), n.visible = !0)
            }
        },
        e.loadConfig = function(i, n, s, a, r) {
            void 0 === n && (n = null),
            void 0 === s && (s = null),
            void 0 === a && (a = null),
            void 0 === r && (r = t.GlobalSetting.CDN_RES),
            t.GlobalSetting.isNative() || (i += t.GlobalSetting.VERSION_RES);
            var o = RES.loadConfig(i, r);
            o && o.then(function(t) {
                n && e.loadGroups(n, s, a)
            })["catch"](function(t) {
                console.error("[FAILD]loadConfig:" + t)
            })
        },
        e.loadConfigs = function(i, n, s, a, r, o) {
            void 0 === i && (i = []),
            void 0 === n && (n = null),
            void 0 === s && (s = null),
            void 0 === a && (a = null),
            void 0 === r && (r = !1),
            void 0 === o && (o = t.GlobalSetting.CDN_RES);
            for (var h = "",
            l = [], u = 0; u < i.length; u++) h = i[u],
            t.GlobalSetting.isNative() || (h += t.GlobalSetting.VERSION_RES),
            l.push(RES.loadConfig(h, o));
            l.length > 0 ? Promise.all(l).then(function() {
                e.loadGroups(n, s, a, r)
            })["catch"](function(t) {
                console.error("[FAILD]loadConfigs:" + t)
            }) : n && e.loadGroups(n, s, a, r)
        },
        e.loadGroups = function(t, i, n, s) {
            if (void 0 === i && (i = null), void 0 === n && (n = null), void 0 === s && (s = !1), null != t && 0 != t.length) {
                for (var a = [], r = 0; r < t.length; r++) e.isGroupLoaded(t[r]) || (a.push(RES.loadGroup(t[r])), e.addGroupCompleteListener(t[r], i, n));
                if (a.length > 0) Promise.all(a);
                else if (i && n) for (var r = 0; r < t.length; r++) i.call(n, t[r])
            }
        },
        e.isGroupLoaded = function(t) {
            return e._loadedGroups.indexOf(t) >= 0 ? !0 : !1
        },
        e.addGroupCompleteListener = function(i, n, s, a) {
            if (void 0 === a && (a = !1), t.StringUtil.isUsage(i)) {
                e._res_group_arr.indexOf(i) < 0 && (a ? e._res_group_arr.unshift(i) : e._res_group_arr.push(i), e.checkAddGroupCompleteListener());
                var r = [];
                if (e._res_group_listener_name.indexOf(i) >= 0 ? r = e._res_group_listener[i] : (e._res_group_listener_name.push(i), e._res_group_listener[i] = r), null != n || null != s) {
                    for (var o = 0; o < r.length; o++) if (r[o].func == n && r[o].thisObj == s) return;
                    r.push({
                        func: n,
                        thisObj: s
                    })
                }
            }
        },
        e.onLoadGroupComplete = function(t) {
            var i = t.groupName;
            i && e.onGroupNameComplete(i)
        },
        e.onGroupNameComplete = function(t) {
            if (e._loadedGroups.indexOf(t) < 0 && e._loadedGroups.push(t), e._res_group_listener_name.indexOf(t) >= 0) {
                for (var i = e._res_group_listener[t], n = 0; n < i.length; n++) i[n] && i[n].func && i[n].func.call(i[n].thisObj, t);
                e.removeGroupCompleteListener(t)
            }
            0 == e._res_group_arr.length && (e._res_group_listener_add && RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, e.onLoadGroupComplete, e), e._res_group_listener_add = !1)
        },
        e.checkAddGroupCompleteListener = function() {
            e._res_group_listener_add || (e._res_group_listener_add = !0, RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, e.onLoadGroupComplete, e), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, e.onLoadGroupError, e))
        },
        e.onLoadGroupError = function(t) {
            console.error("onLoadGroupError event=%s", t.groupName)
        },
        e.removeGroupCompleteListener = function(t) {
            e._res_group_listener_name.indexOf(t) >= 0 && (delete e._res_group_listener[t], e._res_group_listener_name.splice(e._res_group_listener_name.indexOf(t), 1), 0 == e._res_group_listener_name.length && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, e.onLoadGroupComplete, e), e._res_group_listener_add = !1))
        },
        e._hasProjectResLoading = !1,
        e._isInit = !1,
        e._canSplite = !1,
        e._projectGroup = "",
        e._projectName = "",
        e._projectNameSprite = [],
        e._spriteSheet = null,
        e._loadedGroups = [],
        e._urlDataDict = {},
        e._urlDownloading = [],
        e._idleDownloadClz = [],
        e._currentIdleDown = null,
        e._res_group_arr = [],
        e._res_group_listener = {},
        e._res_group_listener_name = [],
        e._res_group_listener_add = !1,
        e
    } ();
    t.ResManager = e,
    __reflect(e.prototype, "easy.ResManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.reverseView = function() {
            e.reverseClz && e.show(e.reverseClz, e.reverseData)
        },
        e.show = function(i, n, s) {
            void 0 === n && (n = null),
            void 0 === s && (s = !0),
            t.PopupManager.removeAll(),
            null == e.mainContainer && (e.mainContainer = t.GlobalSetting.STAGE.getChildAt(0)),
            e._waitChangeView = t.ObjectPool.getByClass(i, "", !1);
            egret.getQualifiedClassName(i);
            return e._waitChangeView == e.currentView ? void(e._waitChangeView = null) : (e.reverseClz = e._currentClz, e.reverseData = e._currentData, e._currentClz = i, e._currentData = n, e._waitChangeView && (e._waitChangeView.alpha = 0, e._waitChangeView.data = n, e._waitChangeView.showLoading = s, e.mainContainer.addChildAt(e._waitChangeView, 0)), void(e._waitChangeView && e._waitChangeView.checkResReady() && e.waitViewDoEnter()))
        },
        e.waitViewDoEnter = function() {
            if (e.currentView && e._waitChangeView && e._waitChangeView != e.currentView) {
                e.currentView.outer();
                egret.getQualifiedClassName(e.currentView)
            }
            e._waitChangeView && (e._waitChangeView._uiResReady || (e._waitChangeView._uiResReady = !0), e._waitChangeView.removeFromParent(), e.mainContainer.addChild(e._waitChangeView), e.currentView = e._waitChangeView, t.GlobalSetting.DISPLAY_MODEL == t.GlobalSetting.DISPLAY_VIEW_EASYGAME && e.currentView.setSize(t.GlobalSetting.DISPLAY_WIDTH, t.GlobalSetting.DISPLAY_HEIGHT), e.currentView.alpha = 1, e.currentView.x = 0, e.currentView.y = 0, e.currentView.enter(), e._waitChangeView = null)
        },
        e.receivePacket = function(i) {
            e.currentView && e.currentView.receivePacket(i),
            t.PopupManager.receivePacket(i)
        },
        e.receiveEvent = function(i) {
            e.currentView && e.currentView.receiveEvent(i),
            t.PopupManager.receiveEvent(i)
        },
        e.defaultLoadingClass = t.DefaultLoadingView,
        e.mainContainer = null,
        e.currentView = null,
        e._waitChangeView = null,
        e._currentClz = null,
        e._currentData = null,
        e.reverseClz = null,
        e.reverseData = null,
        e
    } ();
    t.ViewManager = e,
    __reflect(e.prototype, "easy.ViewManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {
            this.id = null,
            this.name = null,
            this.type = null,
            this.item = null
        }
        return e.prototype.escapeChars = function() {
            this.name = t.StringUtil.replace(this.name, "{~D!}", ","),
            this.name = t.StringUtil.replace(this.name, "{~N!}", "\n")
        },
        e
    } ();
    t.GuideChapter = e,
    __reflect(e.prototype, "easy.GuideChapter")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {
            this._condition = "befor",
            this._item = null,
            this._currentClz = null,
            this._completeCallFunc = null,
            this._completeCallFuncThis = null,
            t.EventManager.addEventListener(t.EventType.GUIDE_EVENT_END, this.onMyEventGuideExecuteEnd, this)
        }
        return e.prototype.onMyEventGuideExecuteEnd = function(e) {
            this._item && this._item.id == e.getItem("item_id") && ("befor" == this._condition ? t.GuideManager.playItem(this._item, this._currentClz, this._completeCallFunc, this._completeCallFuncThis, !1) : (t.GuideManager.currentItem = this._item, t.GuideManager._completeCallFunc = this._completeCallFunc, t.GuideManager._completeCallFuncThis = this._completeCallFuncThis, t.GuideManager.currentClz = this._currentClz, t.GuideManager.playNextItem(!1)), this._item = null, this._completeCallFunc = null, this._completeCallFuncThis = null, this._currentClz = null)
        },
        e.prototype.executeBefor = function(e, i, n, s) {
            if (void 0 === i && (i = null), void 0 === n && (n = null), void 0 === s && (s = null), t.StringUtil.isUsage(e.event_data)) {
                this._condition = "befor",
                this._item = e,
                this._completeCallFunc = n,
                this._completeCallFuncThis = s,
                this._currentClz = i;
                var a = t.MyEvent.getEvent(t.EventType.GUIDE_EVENT_EXE);
                a.addItem("event_data", e.event_data),
                a.addItem("item_id", e.id),
                a.send()
            }
        },
        e.prototype.executeAfter = function(e, i, n, s) {
            if (void 0 === i && (i = null), void 0 === n && (n = null), void 0 === s && (s = null), t.StringUtil.isUsage(e.event_data)) {
                this._condition = "after",
                this._item = e,
                this._completeCallFunc = n,
                this._completeCallFuncThis = s,
                this._currentClz = i;
                var a = t.MyEvent.getEvent(t.EventType.GUIDE_EVENT_EXE);
                a.addItem("event_data", e.event_data),
                a.addItem("item_id", e.id),
                a.send()
            }
        },
        e
    } ();
    t.GuideExecuteManager = e,
    __reflect(e.prototype, "easy.GuideExecuteManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {
            this.id = null,
            this.name = null,
            this.desc = null,
            this.type = null,
            this.chapter = null,
            this.target = null,
            this.next_frame = null,
            this.next_delay = 0,
            this.text = null,
            this.click_num = 0,
            this.click_stage = 1,
            this.aside = !1,
            this.h_align = null,
            this.h_pos = 0,
            this.v_align = null,
            this.v_pos = 0,
            this.icon = null,
            this.oxIcon = 0,
            this.oyIcon = 0,
            this.oxWin = 0,
            this.oyWin = 0,
            this.data = null,
            this.nick = null,
            this.mirror = 0,
            this.txt_model = null,
            this.txt_frame = 0,
            this.mask = null,
            this.opts = null,
            this.event_data = null,
            this.event_condition = null,
            this.handle_type = null,
            this.handle_path = null,
            this.handle_data = null,
            this.focus_color = null,
            this.focus_stress = 0,
            this.focus_gap = 0,
            this.focus_x = 0,
            this.focus_y = 0,
            this.focus_data = null
        }
        return e.prototype.escapeChars = function() {
            this.name = t.StringUtil.replace(this.name, "{~D!}", ","),
            this.name = t.StringUtil.replace(this.name, "{~N!}", "\n"),
            this.nick = t.StringUtil.replace(this.nick, "{~D!}", ","),
            this.nick = t.StringUtil.replace(this.nick, "{~N!}", "\n"),
            this.text = t.StringUtil.replace(this.text, "{~D!}", ","),
            this.text = t.StringUtil.replace(this.text, "{~N!}", "\n"),
            this.focus_color = t.StringUtil.replace(this.focus_color, "{~D!}", ",")
        },
        e.MASK_NONE = "none",
        e.MASK_NORMAL = "guide",
        e.MASK_CROPPING = "cropping",
        e
    } ();
    t.GuideItem = e,
    __reflect(e.prototype, "easy.GuideItem")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.play = function(t, i, n, s, a) {
            void 0 === i && (i = null),
            void 0 === n && (n = null),
            void 0 === s && (s = null),
            void 0 === a && (a = !0),
            e.guide_item_dict[t] && e.playItem(e.guide_item_dict[t], i, n, s, a)
        },
        e.playItem = function(i, n, s, a, r) {
            if (void 0 === n && (n = null), void 0 === s && (s = null), void 0 === a && (a = null), void 0 === r && (r = !0), i) {
                if (e._guideExecuteManager || (e._guideExecuteManager = new t.GuideExecuteManager), e._completeCallFunc = s, e._completeCallFuncThis = a, r && t.StringUtil.isUsage(i.event_data) && "after" != i.event_condition) return void e._guideExecuteManager.executeBefor(i, n, s, a);
                var o = t.DefaultGuideWin;
                if (e.currentClz && (o = e.currentClz), n && (o = n, e.currentClz = n), !e.checkReadyShow(i)) return e.currentItem = i,
                void t.HeartBeat.addListener(e, e.onHbCheckItemUIReady, 5);
                e.currentItem = i,
                e.currentClz = o,
                i.mask == t.GuideItem.MASK_NORMAL ? (e._targetFoucsUI.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchCanvasTap, e), e.setFoucsMaskSize(), e.showMaskFocus()) : (e.showMaskCropping(), t.ViewManager.currentView.touchEnabled = !1, t.ViewManager.currentView.touchChildren = !1, t.GlobalSetting.STAGE.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchStage, e));
                var h = t.PopupManager.isShow(o),
                l = t.PopupManager.show(o, i, !1);
                h && l && e.currentItem && (l.data = i, l.enter())
            }
        },
        e.onTouchCanvasTap = function(t) {
            e._targetFoucsUI.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchCanvasTap, e),
            e.checkPlayNextItem()
        },
        e.onTouchStage = function(i) {
            i.currentTarget == t.GlobalSetting.STAGE && (t.GlobalSetting.STAGE.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchStage, e), e.checkPlayNextItem())
        },
        e.checkPlayNextItem = function() {
            e.playNextItem() || t.PopupManager.hidden(t.PopupManager.getWinInstance(e.currentClz))
        },
        e.onHbCheckItemUIReady = function() {
            e.playItem(e.currentItem, e.currentClz, e._completeCallFunc, e._completeCallFuncThis)
        },
        e.checkReadyShow = function(i) {
            if (i && t.StringUtil.isUsage(i.handle_path)) {
                var n = t.StringUtil.spliteStrArr(i.handle_data, "."),
                s = null;
                if ("view" == i.handle_type ? s = t.ViewManager.currentView: "win" == i.handle_type && (s = t.PopupManager.currentWin), !s || egret.getQualifiedClassName(s) != i.handle_path) return ! 1;
                for (var a = 0; a < n.length; a++) if (s = s[n[a]], null == s) return ! 1;
                if (e._targetFoucsUI = s, t.HeartBeat.removeListener(e, e.onHbCheckItemUIReady), i.focus_gap > 0 && (e._circleRunGap = i.focus_gap), i.focus_stress > 0 && (e._circleRunThickness = i.focus_stress), t.StringUtil.isUsage(i.focus_color)) {
                    var r = t.StringUtil.spliteStrArr(i.focus_color, ",");
                    r.length > 0 && (this._circleColor = parseInt(r[0], 16)),
                    r.length > 1 && (this._circleRunColor = parseInt(r[1], 16))
                }
            }
            return ! 0
        },
        e.playNextItem = function(i) {
            if (void 0 === i && (i = !0), e._targetFoucsUI = null, i && e.currentItem && t.StringUtil.isUsage(e.currentItem.event_data) && "after" == e.currentItem.event_condition) return e._guideExecuteManager.executeAfter(e.currentItem, e.currentClz, e._completeCallFunc, e._completeCallFuncThis),
            void(e.currentItem = null);
            if (e.currentItem && t.StringUtil.isUsage(e.currentItem.next_frame)) {
                var n = e.guide_item_dict[e.currentItem.next_frame];
                if (n) return e.playItem(n, e.currentClz, e._completeCallFunc, e._completeCallFuncThis),
                !0
            }
            return e.stop(),
            !1
        },
        e.stop = function() {
            e._completeCallFunc && e._completeCallFunc.call(e._completeCallFuncThis),
            t.MyEvent.sendEvent(t.EventType.GUIDE_CHAPTER_END),
            t.ViewManager.currentView.touchEnabled = !0,
            t.ViewManager.currentView.touchChildren = !0,
            e.currentItem = null,
            e.removeMaskCropping(),
            e.removeMaskFocus(),
            e._completeCallFunc = null,
            e._completeCallFuncThis = null
        },
        e.showMaskFocus = function() {
            e.removeMaskFocus(),
            null == e._groupMask && (e._groupMask = new t.BaseGroup, e._groupMask.touchEnabled = !1, e._groupMask.touchChildren = !1),
            null == e._mask0 && (e._mask0 = new egret.Bitmap, e._mask0.touchEnabled = !1),
            null == e._maskCircle && (e._maskCircle = new egret.Shape, e._maskCircle.touchEnabled = !1),
            e._groupMask.x = 0,
            e._groupMask.y = 0;
            var i = 0,
            n = 0,
            s = 0,
            a = 0;
            s = 0,
            a = 0,
            i = e._circleY - e._circleR,
            n = t.GlobalSetting.DISPLAY_WIDTH,
            e._mask1 = t.ObjectPool.getByClass(egret.Shape),
            e._mask1.touchEnabled = !0,
            e._mask1.graphics.clear(),
            e._mask1.graphics.beginFill(e._maskColor, this._maskAlpha),
            e._mask1.graphics.drawRect(0, 0, n, i),
            e._mask1.graphics.endFill(),
            e._mask1.width = n,
            e._mask1.height = i,
            e._mask1.x = s,
            e._mask1.y = a,
            e._mask1.parent || t.GlobalSetting.STAGE.addChild(e._mask1),
            s = 0,
            a = e._circleY - e._circleR,
            n = e._circleX - e._circleR,
            i = 2 * e._circleR,
            e._mask2 = t.ObjectPool.getByClass(egret.Shape),
            e._mask2.touchEnabled = !0,
            e._mask2.graphics.clear(),
            e._mask2.graphics.beginFill(e._maskColor, e._maskAlpha),
            e._mask2.graphics.drawRect(0, 0, n, i),
            e._mask2.graphics.endFill(),
            e._mask2.width = n,
            e._mask2.height = i,
            e._mask2.x = s,
            e._mask2.y = a,
            t.GlobalSetting.STAGE.addChild(e._mask2),
            s = e._circleX + e._circleR,
            a = e._circleY - e._circleR,
            n = t.GlobalSetting.DISPLAY_WIDTH - e._circleX - e._circleR,
            i = 2 * e._circleR,
            e._mask3 = t.ObjectPool.getByClass(egret.Shape),
            e._mask3.touchEnabled = !0,
            e._mask3.graphics.clear(),
            e._mask3.graphics.beginFill(e._maskColor, e._maskAlpha),
            e._mask3.graphics.drawRect(0, 0, n, i),
            e._mask3.graphics.endFill(),
            e._mask3.width = n,
            e._mask3.height = i,
            e._mask3.x = s,
            e._mask3.y = a,
            t.GlobalSetting.STAGE.addChild(e._mask3),
            s = 0,
            a = e._circleY + e._circleR,
            n = t.GlobalSetting.DISPLAY_WIDTH,
            i = t.GlobalSetting.DISPLAY_HEIGHT - e._circleY - e._circleR,
            e._mask4 = t.ObjectPool.getByClass(egret.Shape),
            e._mask4.touchEnabled = !0,
            e._mask4.graphics.clear(),
            e._mask4.graphics.beginFill(e._maskColor, e._maskAlpha),
            e._mask4.graphics.drawRect(0, 0, n, i),
            e._mask4.graphics.endFill(),
            e._mask4.width = n,
            e._mask4.height = i,
            e._mask4.x = s,
            e._mask4.y = a,
            t.GlobalSetting.STAGE.addChild(e._mask4),
            s = this._circleX - this._circleR,
            a = this._circleY - this._circleR,
            n = 2 * e._circleR,
            i = 2 * e._circleR;
            var r = t.ObjectPool.getByClass(egret.Shape);
            r.graphics.clear(),
            r.graphics.beginFill(e._maskColor, e._maskAlpha),
            r.graphics.drawRect(0, 0, n, i),
            r.graphics.endFill();
            var o = t.ObjectPool.getByClass(egret.Shape);
            if (o.graphics.clear(), o.graphics.beginFill(e._maskColor, e._maskAlpha), o.graphics.drawCircle(e._circleR, e._circleR, e._circleR), o.graphics.endFill(), e._mask0.x = s, e._mask0.y = a, e._groupMask.addChild(e._mask0), e._groupMask.addChild(e._maskCircle), t.GlobalSetting.STAGE.addChild(e._groupMask), t.ObjectPool.recycleClass(r), t.ObjectPool.recycleClass(o), t.HeartBeat.addListener(e, e.onHbCircleRun, 1), e._circleRunR = e._circleR + e._circleRunGap * e._circleRunGapNum, e._circleRunAlpha = .1, e.currentClz) {
                var h = t.PopupManager.getWinInstance(e.currentClz);
                h && t.GlobalSetting.STAGE.addChild(h)
            }
        },
        e.setFoucsMaskSize = function() {
            var i = !1;
            if (e._targetFoucsUI && e.currentItem) {
                var n = t.StringUtil.parserStrToObj(e.currentItem.focus_data),
                s = e._targetFoucsUI.width;
                e._targetFoucsUI.height > s && (s = e._targetFoucsUI.height),
                s /= 2,
                n.gap_r && (s += parseFloat(n.gap_r)),
                e._circleR != s && (e._circleR = s, i = !0);
                var a = e._targetFoucsUI.parent.localToGlobal(e._targetFoucsUI.x, e._targetFoucsUI.y),
                r = a.x + e._targetFoucsUI.width / 2 + e.currentItem.focus_x,
                o = a.y + e._targetFoucsUI.height / 2 + e.currentItem.focus_y;
                e._circleX != r && (e._circleX = r, i = !0),
                e._circleY != o && (e._circleY = o, i = !0)
            }
            return i
        },
        e.onHbCircleRun = function() {
            return e._circleRunGapPause < e._circleRunGapPauseMax ? void e._circleRunGapPause++:(e.setFoucsMaskSize() && this.showMaskFocus(), e._maskCircle.graphics.clear(), e._maskCircle.graphics.lineStyle(e._circleRunThickness, e._circleColor), e._maskCircle.graphics.drawCircle(e._circleX, e._circleY, e._circleR + e._circleRunThickness / 2), e._maskCircle.graphics.endFill(), e._maskCircle.graphics.lineStyle(e._circleRunThickness2, e._circleRunColor, e._circleRunAlpha), e._maskCircle.graphics.drawCircle(e._circleX, e._circleY, e._circleRunR), e._maskCircle.graphics.endFill(), e._circleRunR -= e._circleRunGap, e._circleRunAlpha += 1 / e._circleRunGapNum, void(e._circleRunR <= e._circleR + e._circleRunThickness && (e._circleRunGapPause = 0, e._circleRunR = e._circleR + e._circleRunGap * e._circleRunGapNum, e._circleRunAlpha = .1)))
        },
        e.removeMaskFocus = function() {
            t.HeartBeat.removeListener(this, this.onHbCircleRun),
            e._mask1 && e._mask1.parent && (e._mask1.parent.removeChild(e._mask1), t.ObjectPool.recycleClass(e._mask1), e._mask1 = null),
            e._mask2 && e._mask2.parent && (e._mask2.parent.removeChild(e._mask2), t.ObjectPool.recycleClass(e._mask2), e._mask2 = null),
            e._mask3 && e._mask3.parent && (e._mask3.parent.removeChild(e._mask3), t.ObjectPool.recycleClass(e._mask3), e._mask3 = null),
            e._mask4 && e._mask4.parent && (e._mask4.parent.removeChild(e._mask4), t.ObjectPool.recycleClass(e._mask4), e._mask4 = null),
            e._groupMask && e._groupMask.removeFromParent()
        },
        e.showMaskCropping = function(i) {
            void 0 === i && (i = null),
            e.croppingTop || (e.croppingTop = new t.Group),
            e.croppingBottom || (e.croppingBottom = new t.Group),
            e.croppingTop.parent ? (t.GlobalSetting.STAGE.addChild(e.croppingTop), t.GlobalSetting.STAGE.addChild(e.croppingBottom), e.initCropping(i)) : (t.GlobalSetting.STAGE.addChild(e.croppingTop), t.GlobalSetting.STAGE.addChild(e.croppingBottom), e.initCropping(i), e.croppingTop.y = -e.croppingTop.height, e.croppingBottom.y = t.GlobalSetting.STAGE.stageHeight, egret.Tween.get(e.croppingTop).to({
                y: 0
            },
            500), egret.Tween.get(e.croppingBottom).to({
                y: t.GlobalSetting.STAGE.stageHeight - e.croppingBottom.height
            },
            500))
        },
        e.removeMaskCropping = function() {
            e.croppingTop && e.croppingTop.parent && (egret.Tween.get(e.croppingTop).to({
                y: -e.croppingTop.height
            },
            500).call(e.onCompleteOutCropping, e), egret.Tween.get(e.croppingBottom).to({
                y: t.GlobalSetting.STAGE.height
            },
            500))
        },
        e.onCompleteOutCropping = function() {
            e.croppingTop.removeFromParent(),
            e.croppingBottom.removeFromParent()
        },
        e.initCropping = function(i) {
            void 0 === i && (i = null),
            e._initCropping || (e._initCropping = !0, e.croppingTop.width = t.GlobalSetting.STAGE.stageWidth, e.croppingTop.border = !1, e.croppingBottom.width = t.GlobalSetting.STAGE.stageWidth, e.croppingBottom.border = !1, e.croppingTop.height = 100, e.croppingTop.bgColor = 0, e.croppingTop.alpha = .6, e.croppingBottom.height = 100, e.croppingBottom.bgColor = 0, e.croppingBottom.alpha = .6),
            i && (e.croppingTop.bgTexture = RES.getRes(i), e.croppingTop.alpha = 1, e.croppingBottom.bgTexture = RES.getRes(i), e.croppingBottom.alpha = 1, e.croppingTop.bgTexture && (e.croppingTop.height = e.croppingTop.bgTexture.textureHeight, e.croppingBottom.height = e.croppingBottom.bgTexture.textureHeight))
        },
        e.getGuideItem = function(i) {
            return t.StringUtil.isUsage(i) && e.guide_item_dict[i] ? e.guide_item_dict[i] : null
        },
        e.getGuideChapter = function(i) {
            return t.StringUtil.isUsage(i) && e.guide_chapter_dict[i] ? e.guide_chapter_dict[i] : null
        },
        e.addGuideItem = function(e) {
            t.GuideManager.guide_item_dict["" + e.id] = e,
            t.GuideManager.guide_item_arr.push(e)
        },
        e.addGuideChapter = function(e) {
            t.GuideManager.guide_chapter_dict["" + e.id] = e,
            t.GuideManager.guide_chapter_arr.push(e)
        },
        e._init_data = !1,
        e.guide_chapter_dict = {},
        e.guide_chapter_arr = [],
        e.guide_item_dict = {},
        e.guide_item_arr = [],
        e.currentItem = null,
        e.currentView = null,
        e.currentClz = null,
        e.croppingTop = null,
        e.croppingBottom = null,
        e._initCropping = !1,
        e._completeCallFunc = null,
        e._completeCallFuncThis = null,
        e._guideExecuteManager = null,
        e._groupMask = null,
        e._mask0 = null,
        e._maskCircle = null,
        e._mask1 = null,
        e._mask2 = null,
        e._mask3 = null,
        e._mask4 = null,
        e._circleX = 350,
        e._circleY = 800,
        e._circleR = 50,
        e._circleColor = 16771584,
        e._circleRunColor = 9206271,
        e._maskColor = 0,
        e._maskAlpha = .8,
        e._circleRunR = 0,
        e._circleRunThickness = 13,
        e._circleRunThickness2 = 8,
        e._circleRunGap = 8,
        e._circleRunGapNum = 30,
        e._circleRunGapPause = 60,
        e._circleRunGapPauseMax = 60,
        e._circleRunAlpha = 8,
        e._targetFoucsUI = null,
        e
    } ();
    t.GuideManager = e,
    __reflect(e.prototype, "easy.GuideManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(n) {
            void 0 === n && (n = !1);
            var s = e.call(this, n) || this;
            return s._textureLabel = null,
            s._textureIcon = null,
            s._label = null,
            s._text = "",
            s._texture = null,
            s._imgDisplay = null,
            s._imgLabel = null,
            s._imgIcon = null,
            s._initDisplayData = !1,
            s._selected = !1,
            s._toggleGroup = null,
            s.stateArray = [i.STATE_UP],
            s._currentState = i.STATE_UP,
            s._textureDict = {},
            s._verticalSplit = !0,
            s._labelMarginLeft = 0,
            s._labelMarginLeftEnable = !1,
            s._labelMarginTop = 0,
            s._labelMarginTopEnable = !1,
            s._iconMarginLeft = 0,
            s._iconMarginLeftEnable = !1,
            s._iconMarginTop = 0,
            s._iconMarginTopEnable = !1,
            s._autoSize = !1,
            s._labelColor = t.Style.BUTTON_TEXT,
            s._labelBold = !1,
            s._labelItalic = !1,
            s._labelLineSpacing = 0,
            s._labelMultiline = !1,
            s._labelStroke = 0,
            s._labelStrokeColor = 13136,
            s._fontSize = 12,
            s._fontName = null,
            s._scale9GridEnable = !1,
            s._scale9GridRect = null,
            s._fillMode = "scale",
            s._soundName = "sound_button",
            s._testPixelEnable = !1,
            s
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.setSize(t.Style.BUTTON_DEFAULT_WIDTH, t.Style.BUTTON_DEFAULT_HEIGHT),
            this.touchEnabled = !0,
            this.touchChildren = !1,
            this._imgDisplay = new egret.Bitmap,
            this.addChild(this._imgDisplay),
            this._imgDisplay.width = this.width,
            this._imgDisplay.height = this.height,
            this._imgDisplay.fillMode = egret.BitmapFillMode.SCALE,
            this._imgDisplay.touchEnabled = !1,
            this._label = new t.Label(this.drawDelay),
            this._label.autoSize = !0,
            this._label.clip = !1,
            this._label.hAlign = egret.HorizontalAlign.CENTER,
            this._label.showBg = !1,
            this.addChild(this._label),
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEvent, this),
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEvent, this),
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRleaseOutside, this),
            this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchRleaseOutside, this)
        },
        i.prototype.onTouchEvent = function(e) {
            if (!this.enabled) return void e.stopImmediatePropagation();
            if (t.GlobalSetting.STATS_BTN) {
                var n = egret.getDefinitionByName("StatsUtil");
                n && n.trackEvent("btn", "touch", this.name, 0)
            }
            if (e.currentTarget == this) {
                if (this._testPixelEnable && !this.testPixel32(e.localX, e.localY)) return void e.stopImmediatePropagation();
                t.StringUtil.isUsage(this._toggleGroup) ? (e.type == egret.TouchEvent.TOUCH_BEGIN && (this.selected = !this._selected), this.onPlaySound()) : (e.type == egret.TouchEvent.TOUCH_BEGIN ? (this._currentState = i.STATE_DOWN, this.onPlaySound()) : e.type == egret.TouchEvent.TOUCH_END ? this._currentState = i.STATE_UP: e.type == egret.TouchEvent.TOUCH_MOVE && (this._currentState = i.STATE_OVER), 1 == this.statesLength && this._currentState == i.STATE_DOWN ? (this.scaleX = .9, this.scaleY = .9, this.alpha = .8) : (this.scaleX = 1, this.scaleY = 1, this.alpha = 1))
            }
            this.invalidate()
        },
        i.prototype.onTouchRleaseOutside = function(e) { (!t.StringUtil.isUsage(this._toggleGroup) || t.StringUtil.isUsage(this._toggleGroup) && !this._selected) && (this._currentState = i.STATE_UP, this.invalidate(), this.scaleX = 1, this.scaleY = 1, this.alpha = 1)
        },
        Object.defineProperty(i.prototype, "currentState", {
            get: function() {
                return this._currentState
            },
            set: function(t) {
                this._currentState != t && (this._currentState = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture != t && (this._initDisplayData = !1, this._texture = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fillMode", {
            get: function() {
                return this._fillMode
            },
            set: function(t) {
                this._fillMode != t && (this._fillMode = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridEnable", {
            get: function() {
                return this._scale9GridEnable
            },
            set: function(t) {
                this._scale9GridEnable != t && (this._scale9GridEnable = t, this._scale9GridEnable && null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridX", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.x: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.x != t && (this._scale9GridRect.x = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridY", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.y: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.y != t && (this._scale9GridRect.y = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridWidth", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.width: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.width != t && (this._scale9GridRect.width = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridHeight", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.height: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.height != t && (this._scale9GridRect.height = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scale9GridRect", {
            get: function() {
                return this._scale9GridRect
            },
            set: function(t) {
                this._scale9GridRect = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.draw = function() {
            this._initDisplayData || (this._texture || (null == i.DEFAULT_TEXTURE && this.initDefaultTexture(), this._texture = i.DEFAULT_TEXTURE), this.splitTextureSource()),
            null != this._imgDisplay && (1 == this.statesLength && this._currentState == i.STATE_DOWN ? this._imgDisplay.texture = this._textureDict[i.STATE_UP] : this._imgDisplay.texture = this._textureDict[this._currentState], this.scale9GridEnable && null != this.scale9GridRect ? this._imgDisplay.scale9Grid = this.scale9GridRect: this._imgDisplay.scale9Grid = null, this._imgDisplay.fillMode = this._fillMode, this._imgDisplay.width = this.width, this._imgDisplay.height = this.height, this._imgDisplay.anchorOffsetX = this._imgDisplay.width / 2, this._imgDisplay.anchorOffsetY = this._imgDisplay.height / 2, this._imgDisplay.x = this._imgDisplay.width / 2, this._imgDisplay.y = this._imgDisplay.height / 2, null != this._textureLabel && (null == this._imgLabel && (this._imgLabel = new egret.Bitmap, this._imgLabel.touchEnabled = !1, this.addChild(this._imgLabel)), this._imgLabel.texture = this._textureLabel, this._labelMarginLeftEnable ? this._imgLabel.x = this._labelMarginLeft: this._imgLabel.x = (this.width - this._imgLabel.width) / 2, this._labelMarginTopEnable ? this._imgLabel.y = this._labelMarginTop: this._imgLabel.y = (this.height - this._imgLabel.height) / 2), null != this._textureIcon && (null == this._imgIcon && (this._imgIcon = new egret.Bitmap(null), this._imgIcon.touchEnabled = !1, this.addChild(this._imgIcon)), this._imgIcon.texture = this._textureIcon, this._iconMarginLeftEnable ? this._imgIcon.x = this._iconMarginLeft: this._imgIcon.x = (this.width - this._imgIcon.width) / 2, this._iconMarginTopEnable ? this._imgIcon.y = this._iconMarginTop: this._imgIcon.y = (this.height - this._imgIcon.height) / 2), this._label && (this._label.parent || this.addChild(this._label), this._label.text = this._text, this._label.fontSize = this._fontSize, this._label.fontName = this._fontName, this._label.bold = this._labelBold, this._label.italic = this._labelItalic, this._label.lineSpacing = this._labelLineSpacing, this._label.multiline = this._labelMultiline, this._label.stroke = this._labelStroke, this._label.strokeColor = this._labelStrokeColor, this._label.onInvalidate(null), this._labelMarginLeftEnable ? this._label.x = this._labelMarginLeft: this._label.x = (this.width - this._label.width) / 2, this._labelMarginTopEnable ? this._label.y = this._labelMarginTop: this._label.y = (this.height - this._label.height) / 2))
        },
        i.prototype.initDefaultTexture = function() {
            if (null == i.DEFAULT_TEXTURE) {
                var e = new egret.Shape;
                e.width = this.width,
                e.height = this.height,
                e.graphics.beginFill(t.Style.BUTTON_FACE),
                e.graphics.drawRect(0, 0, this.width, this.height),
                e.graphics.endFill(),
                e.graphics.lineStyle(1, 0),
                e.graphics.drawRect(0, 0, this.width - 1, this.height - 1);
                var n = new egret.RenderTexture;
                n.drawToTexture(e),
                i.DEFAULT_TEXTURE = n
            }
        },
        i.prototype.splitTextureSource = function() {
            if (this._texture) {
                this._initDisplayData = !0;
                var t = 0,
                e = 0,
                i = this._texture.textureWidth,
                n = this._texture.textureHeight;
                if (1 == this.stateArray.length) t = i,
                e = n,
                this._textureDict[this.stateArray[0]] = this._texture;
                else {
                    var s = 0,
                    a = 0,
                    r = 0;
                    this._verticalSplit ? (t = i, e = n / this.statesLength) : (t = i / this.statesLength, e = n);
                    var o = new egret.SpriteSheet(this._texture);
                    for (s = 0; s < this.stateArray.length; s++) this._verticalSplit ? this._textureDict[this.stateArray[s]] = o.createTexture(this.name + Math.round(999999 * Math.random()) + "_" + this.stateArray[s], a, s * e + r, t, e) : this._textureDict[this.stateArray[s]] = o.createTexture(this.name + Math.round(999999 * Math.random()) + "_" + this.stateArray[s], s * t + a, r, t, e)
                }
                this._autoSize && (this.width = t, this.height = e)
            }
        },
        Object.defineProperty(i.prototype, "upSkin", {
            get: function() {
                return this._textureDict[i.STATE_UP]
            },
            set: function(t) {
                this.isStateExist(i.STATE_UP) || this.stateArray.push(i.STATE_UP),
                this._textureDict[i.STATE_UP] = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "overSkin", {
            get: function() {
                return this._textureDict[i.STATE_OVER]
            },
            set: function(t) {
                this.isStateExist(i.STATE_OVER) || this.stateArray.push(i.STATE_OVER),
                this._textureDict[i.STATE_OVER] = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "downSkin", {
            get: function() {
                return this._textureDict[i.STATE_DOWN]
            },
            set: function(t) {
                this.isStateExist(i.STATE_DOWN) || this.stateArray.push(i.STATE_DOWN),
                this._textureDict[i.STATE_DOWN] = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "disableSkin", {
            get: function() {
                return this._textureDict[i.STATE_DISABLE]
            },
            set: function(t) {
                this.isStateExist(i.STATE_DISABLE) || this.stateArray.push(i.STATE_DISABLE),
                this._textureDict[i.STATE_DISABLE] = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.isStateExist = function(t) {
            return - 1 != this.stateArray.indexOf(t) ? !0 : !1
        },
        Object.defineProperty(i.prototype, "label", {
            get: function() {
                return this._text
            },
            set: function(t) {
                this._text = t,
                this._label && (this._label.text = this._text),
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return this._selected
            },
            set: function(e) {
                if (this._selected = e, this._currentState = this._selected ? i.STATE_DOWN: i.STATE_UP, this._selected && t.StringUtil.isUsage(this._toggleGroup)) {
                    var n = t.MyEvent.getEvent(i.TOGGLE_PREFIX + this._toggleGroup);
                    n.addItem("caller", this),
                    n.addItem("group", this._toggleGroup),
                    n.send()
                }
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "statesLength", {
            get: function() {
                return this.stateArray.length
            },
            set: function(t) {
                switch (t = 0 > t ? 1 : t) {
                case 1:
                    this.stateArray = [i.STATE_UP];
                    break;
                case 2:
                    this.stateArray = [i.STATE_UP, i.STATE_DOWN];
                    break;
                case 3:
                    this.stateArray = [i.STATE_UP, i.STATE_OVER, i.STATE_DOWN];
                    break;
                case 4:
                    this.stateArray = [i.STATE_UP, i.STATE_OVER, i.STATE_DOWN, i.STATE_DISABLE]
                }
                this._initDisplayData = !1,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "imgLabel", {
            get: function() {
                return this._textureLabel
            },
            set: function(t) {
                this._textureLabel != t && (this._textureLabel = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "imgIcon", {
            get: function() {
                return this._textureIcon
            },
            set: function(t) {
                this._textureIcon != t && (this._textureIcon = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelColor", {
            get: function() {
                return this._labelColor
            },
            set: function(t) {
                this._labelColor != t && (this._labelColor = t, this._label && (this._label.color = t), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontName", {
            get: function() {
                return this._fontName
            },
            set: function(t) {
                this._fontName != t && (this._fontName = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(t) {
                this._fontSize != t && (this._fontSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelMarginLeft", {
            get: function() {
                return this._labelMarginLeft
            },
            set: function(t) {
                this._labelMarginLeft != t && (this._labelMarginLeft = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelMarginLeftEnable", {
            get: function() {
                return this._labelMarginLeftEnable
            },
            set: function(t) {
                this._labelMarginLeftEnable != t && (this._labelMarginLeftEnable = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelMarginTop", {
            get: function() {
                return this._labelMarginTop
            },
            set: function(t) {
                this._labelMarginTop != t && (this._labelMarginTop = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelMarginTopEnable", {
            get: function() {
                return this._labelMarginTopEnable
            },
            set: function(t) {
                this._labelMarginTopEnable != t && (this._labelMarginTopEnable = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "iconMarginLeft", {
            get: function() {
                return this._iconMarginLeft
            },
            set: function(t) {
                this._iconMarginLeft != t && (this._iconMarginLeft = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "iconMarginLeftEnable", {
            get: function() {
                return this._iconMarginLeftEnable
            },
            set: function(t) {
                this._iconMarginLeftEnable != t && (this._iconMarginLeftEnable = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "iconMarginTop", {
            get: function() {
                return this._iconMarginTop
            },
            set: function(t) {
                this._iconMarginTop != t && (this._iconMarginTop = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "iconMarginTopEnable", {
            get: function() {
                return this._iconMarginTopEnable
            },
            set: function(t) {
                this._iconMarginTopEnable != t && (this._iconMarginTopEnable = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "autoSize", {
            get: function() {
                return this._autoSize
            },
            set: function(t) {
                this._autoSize != t && (this._autoSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "toggleGroup", {
            get: function() {
                return this._toggleGroup
            },
            set: function(e) {
                t.StringUtil.isUsage(this._toggleGroup) && t.EventManager.removeEventListener(i.TOGGLE_PREFIX + this._toggleGroup, this.onEventToggle, this),
                this._toggleGroup = e,
                t.StringUtil.isUsage(this._toggleGroup) && t.EventManager.addEventListener(i.TOGGLE_PREFIX + this._toggleGroup, this.onEventToggle, this)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onEventToggle = function(e) {
            t.StringUtil.isUsage(this._toggleGroup) && e.getItem("group") == this._toggleGroup && e.getItem("caller") != this && (this._selected = !1, this._currentState = i.STATE_UP, this.invalidate())
        },
        i.prototype.setSize = function(t, i) {
            e.prototype.setSize.call(this, t, i),
            this.autoSize = !1
        },
        i.prototype.onPlaySound = function() {
            t.StringUtil.isUsage(this._soundName) && t.Sound.play(this._soundName)
        },
        Object.defineProperty(i.prototype, "sound", {
            get: function() {
                return this._soundName
            },
            set: function(t) {
                this._soundName = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "drawDelay", {
            set: function(t) {
                this._setDrawDelay(t),
                this._label && (this._label.drawDelay = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelBold", {
            get: function() {
                return this._labelBold
            },
            set: function(t) {
                this._labelBold != t && (this._labelBold = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelItalic", {
            get: function() {
                return this._labelItalic
            },
            set: function(t) {
                this._labelItalic != t && (this._labelItalic = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelLineSpacing", {
            get: function() {
                return this._labelLineSpacing
            },
            set: function(t) {
                this._labelLineSpacing != t && (this._labelLineSpacing = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelMultiline", {
            get: function() {
                return this._labelMultiline
            },
            set: function(t) {
                this._labelMultiline != t && (this._labelMultiline = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelStroke", {
            get: function() {
                return this._labelStroke
            },
            set: function(t) {
                this._labelStroke != t && (this._labelStroke = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "labelStrokeColor", {
            get: function() {
                return this._labelStrokeColor
            },
            set: function(t) {
                this._labelStrokeColor != t && (this._labelStrokeColor = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "testPixelEnable", {
            get: function() {
                return this._testPixelEnable
            },
            set: function(t) {
                this._testPixelEnable = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.getPixel32 = function(t, e) {
            var i, n = this.globalToLocal(t, e),
            s = null;
            this._imgDisplay && this._imgDisplay.texture && (s = this._imgDisplay.texture.getPixel32(n.x, n.y));
            for (var a = 0; a < s.length; a++) if (s[a] > 0) return i = !0,
            s;
            this._imgIcon && this._imgIcon.texture && (s = this._imgIcon.texture.getPixel32(t, e));
            for (var a = 0; a < s.length; a++) if (s[a] > 0) return i = !0,
            s;
            this._imgLabel && this._imgLabel.texture && (s = this._imgLabel.texture.getPixel32(t, e));
            for (var a = 0; a < s.length; a++) if (s[a] > 0) return i = !0,
            s;
            return []
        },
        i.prototype.testPixel32 = function(t, e) {
            for (var i = this.getPixel32(t, e), n = 0; n < i.length; n++) if (i[n] > 0) return ! 0;
            return ! 1
        },
        i.TOGGLE_PREFIX = "ui#button#toggle_",
        i.DEFAULT_TEXTURE = null,
        i.STATE_UP = "up",
        i.STATE_OVER = "over",
        i.STATE_DOWN = "down",
        i.STATE_DISABLE = "disable",
        i
    } (t.BaseGroup);
    t.Button = e,
    __reflect(e.prototype, "easy.Button")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e(i) {
            this.id = null,
            this.frame = 0,
            this._json = null,
            this.width = 0,
            this.height = 0,
            this.cx = 0,
            this.cy = 0,
            this._spriteSheet = null,
            this.textures = null,
            this.textureDict = null,
            this._type = e.TYPE_EFFECT,
            this._merge = !0,
            this._hitCustom = !1,
            this._hitCustomDict = null,
            this._hitCustomData = null,
            this.id = i;
            var n = RES.getRes(i + "_animate_json");
            if (null != n) {
                this.textureDict = {},
                this.id = n.id,
                this.frame = n.frame,
                this._type = n.type,
                this.width = n.width,
                this.height = n.height,
                this.cx = n.cx,
                this.cy = n.cy,
                n.merge && (this._merge = "true" == n.merge),
                n.hitcustom && (this._hitCustom = "true" == n.hitcustom);
                var s = null;
                if (this._merge && (this._spriteSheet = new egret.SpriteSheet(RES.getRes(i + "_animate_img"))), "actor" == n.type) {
                    this._hitCustomDict = n.hits;
                    var a = null;
                    for (var r in n.texture) {
                        a = [],
                        this.textureDict[r] = a;
                        for (var o = 0; o < n.texture[r].length; o++) s = new t.AnimateTexture,
                        s.width = n.texture[r][o].w,
                        s.height = n.texture[r][o].h,
                        s.id = n.texture[r][o].id,
                        n.texture[r][o].hit && (s.hitRects = n.texture[r][o].hit),
                        s.width > this.width && (this.width = s.width),
                        s.height > this.height && (this.height = s.height),
                        n.texture[r][o].f ? s.frame = n.texture[r][o].f: s.frame = this.frame,
                        s.x = n.texture[r][o].ox,
                        s.y = n.texture[r][o].oy,
                        this._merge ? (s.offsetX = n.texture[r][o].x, s.offsetY = n.texture[r][o].y, s.texutre = this._spriteSheet.createTexture(r + "_" + o, s.offsetX, s.offsetY, s.width, s.height)) : (s.resId = n.texture[r][o].l, s.texutre = RES.getRes(s.resId)),
                        a.push(s)
                    }
                } else {
                    this.textures = [],
                    this._hitCustomData = n.hits;
                    for (var o = 0; o < n.texture.length; o++) s = new t.AnimateTexture,
                    s.width = n.texture[o].w,
                    s.height = n.texture[o].h,
                    s.id = n.texture[o].id,
                    n.texture[o].hit && (s.hitRects = n.texture[o].hit),
                    n.texture[o].f ? s.frame = n.texture[o].f: s.frame = this.frame,
                    s.x = n.texture[o].ox,
                    s.y = n.texture[o].oy,
                    this._merge ? (s.offsetX = n.texture[o].x, s.offsetY = n.texture[o].y, s.texutre = this._spriteSheet.createTexture(this.id + "_" + o, s.offsetX, s.offsetY, s.width, s.height)) : (s.resId = n.texture[o].l, s.texutre = RES.getRes(s.resId)),
                    this.textures.push(s)
                }
            }
        }
        return e.prototype.getTexture = function(t) {
            return t >= 0 && t < this.textures.length ? this.textures[t] : null
        },
        e.prototype.getTextureActor = function(t, e) {
            return this.textureDict[t] && e >= 0 && e < this.textureDict[t].length ? this.textureDict[t][e] : null
        },
        e.prototype.getTextureActorLength = function(t) {
            return this.textureDict[t] ? this.textureDict[t].length: 0
        },
        e.TYPE_ACTOR = "actor",
        e.TYPE_EFFECT = "effect",
        e
    } ();
    t.AnimateData = e,
    __reflect(e.prototype, "easy.AnimateData")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._dulation = 15,
            t._mssageArr = [],
            t.speed = 5,
            t._labelArr = [],
            t._showNext = !1,
            t
        }
        return __extends(i, e),
        i.getInstance = function() {
            return null == i._instance && (i._instance = new i),
            i._instance
        },
        i.showMessage = function(t, e, n, s, a, r) {
            void 0 === e && (e = 0),
            void 0 === n && (n = 16774758),
            void 0 === s && (s = 65535),
            void 0 === a && (a = 65535),
            void 0 === r && (r = 5),
            i.getInstance().showMsg(t, e, n, s, a, r)
        },
        i.prototype.showMsg = function(e, i, n, s, a, r) {
            void 0 === i && (i = 0),
            void 0 === n && (n = 16774758),
            void 0 === s && (s = 65535),
            void 0 === a && (a = 65535),
            void 0 === r && (r = 5),
            t.HeartBeat.addListener(this, this.onHeartBeat),
            0 == this._labelArr.length && (this._showNext = !0),
            this._mssageArr.push({
                msg: e,
                color: n,
                x: s,
                y: a,
                delay: i,
                speed: r
            })
        },
        i.prototype.onHeartBeat = function() {
            if (0 == this._labelArr.length && 0 == this._mssageArr.length) return void t.HeartBeat.removeListener(this, this.onHeartBeat);
            var e = null;
            if (this._showNext && this._mssageArr.length > 0) {
                var i = this._mssageArr.shift();
                e = t.ObjectPool.getByClass(t.Label, "msgtips"),
                e.text = i.msg,
                e.color = i.color,
                e.bold = !0,
                e.alpha = 0,
                e.fontSize = 40,
                e.showBg = !1,
                e.autoSize = !0,
                i.delay > 0 ? e.setData( - i.delay) : e.setData(0),
                t.GlobalSetting.STAGE.addChild(e),
                e.draw(),
                65535 == i.x ? e.x = t.GlobalSetting.DISPLAY_WIDTH / 2 - e.cx: e.x = i.x,
                65535 == i.y ? e.y = t.GlobalSetting.DISPLAY_HEIGHT / 2 : e.y = i.y,
                this._labelArr.push({
                    label: e,
                    speed: i.speed
                })
            }
            for (var n = 0; n < this._labelArr.length; n++) if (i = this._labelArr[n], e = i.label, e.getData() < 0) e.setData(e.getData() + 1);
            else {
                e.getData() < this._dulation ? (e.y -= i.speed, e.alpha += .1) : (e.y -= i.speed + 3, e.alpha -= .1),
                e.y < 0 && (this._labelArr.splice(n, 1), e.removeFromParent(), t.ObjectPool.recycleClass(e, "msgtips"));
                var s = t.ViewManager.currentView;
                null == s && (s = t.GlobalSetting.STAGE),
                n == this._labelArr.length - 1 && s.height / 2 - this._labelArr[n].y > 5 && (this._showNext = !0)
            }
        },
        i._instance = null,
        i
    } (t.BaseGroup);
    t.MessageTips = e,
    __reflect(e.prototype, "easy.MessageTips")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = !1);
            var i = t.call(this, e) || this;
            return i._bitmap = null,
            i._texture = null,
            i._autoSize = !1,
            i._scale9GridEnable = !1,
            i._scale9GridRect = null,
            i._fillMode = "scale",
            i._smoothing = !1,
            i
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this._bitmap = new egret.Bitmap,
            this.addChild(this._bitmap)
        },
        Object.defineProperty(e.prototype, "fillMode", {
            get: function() {
                return this._fillMode
            },
            set: function(t) {
                this._fillMode != t && (this._fillMode = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "autoSize", {
            get: function() {
                return this._autoSize
            },
            set: function(t) {
                this._autoSize != t && (this._autoSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture != t && (this._texture = t, this.invalidate(), this.onInvalidatePosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scale9GridEnable", {
            get: function() {
                return this._scale9GridEnable
            },
            set: function(t) {
                this._scale9GridEnable != t && (this._scale9GridEnable = t, this._scale9GridEnable && null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scale9GridX", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.x: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.x != t && (this._scale9GridRect.x = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scale9GridY", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.y: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.y != t && (this._scale9GridRect.y = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scale9GridWidth", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.width: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.width != t && (this._scale9GridRect.width = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scale9GridHeight", {
            get: function() {
                return this._scale9GridRect ? this._scale9GridRect.height: 0
            },
            set: function(t) {
                null == this._scale9GridRect && (this._scale9GridRect = new egret.Rectangle),
                this._scale9GridRect.height != t && (this._scale9GridRect.height = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scale9GridRect", {
            get: function() {
                return this._scale9GridRect
            },
            set: function(t) {
                this._scale9GridRect = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "smoothing", {
            get: function() {
                return this._smoothing
            },
            set: function(t) {
                this._smoothing != t && (this._smoothing = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.draw = function() { ! this._bitmap || null == this._texture && null == this._bitmap.texture || (this._bitmap.texture != this._texture && (this._bitmap.texture = this._texture), null != this._bitmap.texture && (this._scale9GridEnable && this._scale9GridRect ? (this._bitmap.scale9Grid = this._scale9GridRect, this._bitmap.width = this.width, this._bitmap.height = this.height) : (this._bitmap.scale9Grid = null, !this._scale9GridEnable && this._autoSize ? "scale" != this._fillMode ? (this._bitmap.width = this.width, this._bitmap.height = this.height) : (this._bitmap.scaleX = this.width / this._bitmap.texture.textureWidth, this._bitmap.scaleY = this.height / this._bitmap.texture.textureHeight) : this._texture && (this._bitmap.scaleX = 1, this._bitmap.scaleY = 1, this._bitmap.width = this._texture.textureWidth, this._bitmap.height = this._texture.textureHeight, this.$setWidth(this._texture.textureWidth), this.$setHeight(this._texture.textureHeight), this.anchorEnabled && (this.anchorOffsetX = this.width * this.anchorX), this.anchorEnabled && (this.anchorOffsetY = this.height * this.anchorY))), this._bitmap.fillMode = this._fillMode))
        },
        e.prototype.getBitmap = function() {
            return this._bitmap
        },
        e.prototype.getPixel32 = function(t, e) {
            if (this._bitmap && this._bitmap.texture) {
                var i = this.globalToLocal(t, e);
                return this._bitmap.texture.getPixel32(i.x, i.y)
            }
            return []
        },
        e.prototype.testPixel32 = function(t, e) {
            for (var i = this.getPixel32(t, e), n = 0; n < i.length; n++) if (i[n] > 0) return ! 0;
            return ! 1
        },
        e
    } (t.BaseGroup);
    t.Image = e,
    __reflect(e.prototype, "easy.Image")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(i) {
            void 0 === i && (i = !1);
            var n = e.call(this, i) || this;
            return n._text = "",
            n._textField = null,
            n._initFlow = null,
            n._htmlTextParser = null,
            n._fontSize = t.Style.fontSize,
            n._color = t.Style.LABEL_TEXT,
            n._fontName = t.Style.fontName,
            n._hAlign = egret.HorizontalAlign.LEFT,
            n._vAlign = egret.VerticalAlign.MIDDLE,
            n._bold = !1,
            n._italic = !1,
            n._lineSpacing = 0,
            n._multiline = !1,
            n._stroke = 0,
            n._strokeColor = 13136,
            n._html = !1,
            n._autoSize = !1,
            n._link = null,
            n
        }
        return __extends(i, e),
        i.prototype.initData = function() {
            e.prototype.initData.call(this)
        },
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this._autoSize || this.setSize(t.Style.TEXTINPUT_WIDTH, t.Style.TEXTINPUT_HEIGHT),
            this._textField = new egret.TextField,
            this._textField.addEventListener(egret.Event.CHANGE, this.onChangeHdl, this),
            this.addChild(this._textField),
            this.invalidate()
        },
        i.prototype.onChangeHdl = function(t) {
            this._text = this._textField.text
        },
        Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                this._text != t && (this._text = t, this._html ? null == this._text ? (this._text = "", this._initFlow = []) : (null == this._htmlTextParser && (this._htmlTextParser = new egret.HtmlTextParser), this._initFlow = this._htmlTextParser.parser(this._text)) : null == this._text && (this._text = ""), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.getTextField = function() {
            return this._textField
        },
        i.prototype.draw = function() {
            e.prototype.draw.call(this),
            null != this._textField && (null != this._fontName && (this._textField.fontFamily = this.fontName), this._color >= 0 && (this._textField.textColor = this._color), this._fontSize > 0 && (this._textField.size = this._fontSize), this._textField.bold = this._bold, this._textField.italic = this._italic, this._textField.multiline = this._multiline, this._textField.lineSpacing = this._lineSpacing, this._textField.stroke = this._stroke, this._textField.strokeColor = this._strokeColor, this._html ? (this._initFlow && (this._textField.textFlow = this._initFlow), this._initFlow = null) : this._textField.text = this._text, this._autoSize ? (this.height = this._textField.measuredHeight, this.width = this._textField.measuredWidth) : (this._textField.width = this.width, this._vAlign == egret.VerticalAlign.MIDDLE ? this._textField.y = (this.height - this._textField.height) / 2 : this._vAlign == egret.VerticalAlign.BOTTOM ? this._textField.y = this.height - this._textField.height: this._textField.y = 0), this._textField.textAlign = this._hAlign, this._textField.verticalAlign = this._vAlign)
        },
        Object.defineProperty(i.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(t) {
                this._italic != t && (this._italic = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(t) {
                this._bold != t && (this._bold = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontName", {
            get: function() {
                return this._fontName
            },
            set: function(t) {
                this._fontName != t && (this._fontName = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(t) {
                this._fontSize != t && (this._fontSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "color", {
            get: function() {
                return this._color
            },
            set: function(t) {
                this._color != t && (this._color = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(t) {
                this._lineSpacing != t && (this._lineSpacing = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "multiline", {
            get: function() {
                return this._multiline
            },
            set: function(t) {
                this._multiline != t && (this._multiline = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(t) {
                this._stroke != t && (this._stroke = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(t) {
                this._strokeColor != t && (this._strokeColor = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "autoSize", {
            get: function() {
                return this._autoSize
            },
            set: function(t) {
                this._autoSize != t && (this._autoSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "hAlign", {
            get: function() {
                return this._hAlign
            },
            set: function(t) {
                this._hAlign != t && (this._hAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "vAlign", {
            get: function() {
                return this._vAlign
            },
            set: function(t) {
                this._vAlign != t && (this._vAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "html", {
            get: function() {
                return this._html
            },
            set: function(t) {
                this._html != t && (this._html = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (t.Group);
    t.Label = e,
    __reflect(e.prototype, "easy.Label")
} (easy || (easy = {}));
var Main = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.loadResAllComplete = !1,
        e._isEasyGameOk = !1,
        e._isSoundOk = !1,
        e._isProjectUIOk = !1,
        e._isCreateScene = !1,
        e._isLoadingViewOk = !1,
        e._progressCalculate = null,
        e._isViewEnter = !1,
        e.loadResAllComplete = !1,
        e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e),
        e
    }
    return __extends(e, t),
    e.prototype.onAddToStage = function(t) {
        egret.ImageLoader.crossOrigin = "anonymous",
        easy.GlobalSetting.initData(),
        easy.ResManager.loadConfig(easy.GlobalSetting.CDN_RES + "loading_main.json", ["loading_main"], this.onResLoadingMianComplete, this),
        easy.ResManager.loadConfig(easy.GlobalSetting.CDN_RES + "loading_view.json", ["loading_view"], this.onResLoadingViewComplete, this),
        easy.EventManager.addEventListener(easy.EventType.VIEW_ENTER, this.onHiddenloadingMain, this)
    },
    e.prototype.onResLoadingViewComplete = function(t) {
        this._isLoadingViewOk = !0
    },
    e.prototype.onResLoadingMianComplete = function(t) {
        "loading_main" == t && (this.loadingMain = new scanNational.LoadMianProgressMainBar, this.stage.addChild(this.loadingMain), this.loadingMain.width = easy.GlobalSetting.DISPLAY_WIDTH, this.loadingMain.height = easy.GlobalSetting.DISPLAY_HEIGHT, this.loadingMain.enter(), this._progressCalculate = new easy.ProgressCalculate(10), easy.HeartBeat.addListener(this, this.onHbProgress, 2), easy.ResManager.loadConfig(easy.GlobalSetting.CDN_RES + "resource.json?v=1", ["group_easygame_config"], this.onResLoadGameConfigComplete, this), this._isProjectUIOk = !0)
    },
    e.prototype.onHbProgress = function() {
        var t = this._progressCalculate.progress();
        this._progressCalculate._progressSpeedUp = this.loadResAllComplete && this._isProjectUIOk && this._isViewEnter,
        this.loadingMain.setProgress(t, 100),
        this.loadResAllComplete && !this._isCreateScene && this._isLoadingViewOk && this.createScene(),
        100 == t && (easy.HeartBeat.removeListener(this, this.onHbProgress), this.removeLoadingUI())
    },
    e.prototype.removeLoadingUI = function() {
        this.loadingMain && this.loadingMain.outer()
    },
    e.prototype.onProjectResDownloaded = function(t) {
        easy.EventManager.removeEventListener(easy.EventType.PROJECT_RES_DOWNLOADED, this.onProjectResDownloaded, this),
        this._isProjectUIOk = !0,
        this.checkAllResourceLoaded()
    },
    e.prototype.onResLoadGameConfigComplete = function(t) {
        "group_easygame_config" == t && (this._isEasyGameOk = !0, easy.GlobalSetting.FRAME_RATE = 60, easy.EasyGame.init(), easy.ViewManager.defaultLoadingClass = easy.DefaultLoadingView, easy.PopupManager.defaultLoadingClass = easy.DefaultLoadingView),
        this.checkAllResourceLoaded()
    },
    e.prototype.onResLoadSoundComplete = function(t) {
        "sound" == t && (this._isSoundOk = !0, easy.Sound.play("sound_bg", 0, 0))
    },
    e.prototype.checkAllResourceLoaded = function() {
        this._isEasyGameOk && this._isProjectUIOk && (easy.GlobalSetting.APP_STORAGE == easy.GlobalSetting.STORAGE_NET || easy.GlobalSetting.APP_STORAGE == easy.GlobalSetting.STORAGE_LOCAL_NET ? this.loadDataFromNet() : this.loadResAllComplete = !0)
    },
    e.prototype.onHiddenloadingMain = function(t) {
        this._isViewEnter = !0,
        easy.EventManager.removeEventListener(easy.EventType.VIEW_ENTER, this.onHiddenloadingMain, this),
        easy.ResManager.addGroupCompleteListener("sound", this.onResLoadSoundComplete, this)
    },
    e.prototype.loadDataFromNet = function() {},
    e.prototype.loadDataFromNetComplete = function() {
        this.loadResAllComplete = !0
    },
    e.prototype.createScene = function() {
        this._isCreateScene || (this._isCreateScene = !0, easy.ResManager.addIdleDownload(scanNational.win_tsWin), window.getCookie("openid_wxe8b519101a38d172") && (scanNational.GameData.openid = window.getCookie("openid_wxe8b519101a38d172")), egret.getOption("openid") && (scanNational.GameData.openid = egret.getOption("openid")), scanNational.GameData.openid && scanNational.GameData.openid.length > 0 ? scanNational.GameData.info_detail(this.info_detail, this) : easy.ViewManager.show(scanNational.HallView, null, !1), scanNational.GameData.get_now_time(this.get_now_time, this), window.getShare())
    },
    e.prototype.get_now_time = function(t) {
        var e = JSON.parse(t);
        if (console.log("获取时间戳", e), 200 == e.code) {
            var i = new Date,
            n = i.getTime(),
            s = e.now_timestamp;
            scanNational.GameData.systemtimetxt = Math.floor(n / 1e3) - s
        } else easy.MessageTips.showMessage("" + e.msg)
    },
    e.prototype.info_detail = function(t) {
        var e = JSON.parse(t);
        console.log("获取用户信息", e),
        200 == e.code ? (scanNational.GameData.userInfo = e.user_info, easy.ViewManager.show(scanNational.HallView, null, !1), scanNational.GameData.header1 = new egret.URLRequestHeader("TOKEN", "" + e.user_info.token), scanNational.GameData.header2 = e.user_info.token) : easy.ViewManager.show(scanNational.HallView, e.msg, !1)
    },
    e
} (egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var easy; !
function(t) {
    var e = function(e) {
        function i(i) {
            void 0 === i && (i = !1);
            var n = e.call(this, i) || this;
            return n.METHOD_DEF = {},
            n._itemRenderer = t.DefaultRenderer,
            n._itemContainer = null,
            n._gap = 2,
            n._direction = t.Style.VERTICAL,
            n._dataIndexBegin = 0,
            n._dataIndexEnd = 0,
            n._itemDatas = null,
            n._dataIndexToRender = null,
            n._autoSize = !1,
            n._marginTop = 4,
            n._marginBottom = 4,
            n._marginLeft = 4,
            n._marginRight = 4,
            n._line = 1,
            n._lineGap = 2,
            n._effect = null,
            n._isDragBegin = !1,
            n._isMoveBegin = !1,
            n._moveCount = 0,
            n._dragBeginPoint = null,
            n._dragLastTime = 0,
            n._autoScrollGap = 0,
            n._lastTimeNum = 0,
            n._selected = null,
            n._fixed = !1,
            n._data_end_func_call = null,
            n._data_end_func_this = null,
            n
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.setSize(100, 300),
            this.touchEnabled = !0,
            this._itemContainer = new t.BaseGroup,
            this.addChild(this._itemContainer),
            this._itemContainer.touchEnabled = !0,
            this._itemContainer.setSize(this.width, this.height),
            this._itemContainer.scrollRect = new egret.Rectangle(0, 0, this.width, this.height),
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginEvent, this),
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveEvent, this),
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndEvent, this),
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchReleaseOutsideEvent, this),
            this._dragBeginPoint = new egret.Point,
            this.addHandleEvent(t.EventType.RESOURCE_DOWNLOADED, "onMyEventResDownloaded"),
            this.touchNonePixel = !0
        },
        i.prototype.addHandleEvent = function(t, e) {
            this.METHOD_DEF[t] = e
        },
        i.prototype.receiveEvent = function(t) {
            for (var e = null,
            i = 0; i < this._itemContainer.numChildren; i++) e = this._itemContainer.getChildAt(i),
            e.refresh && e.refresh()
        },
        i.prototype.onTouchBeginEvent = function(e) {
            this._itemDatas && 0 != this._itemDatas.length && (this._isDragBegin = !0, this._isMoveBegin = !1, this._lastTimeNum = 0, this._moveCount = 0, this._dragBeginPoint.x = e.stageX, this._dragBeginPoint.y = e.stageY, this._dragLastTime = egret.getTimer(), t.HeartBeat.removeListener(this, this.onAutoScroll))
        },
        i.prototype.onTouchMoveEvent = function(e) {
            if (this._itemDatas && 0 != this._itemDatas.length && this._isDragBegin) {
                if (this._isDragBegin && (this._isMoveBegin = !0, this._moveCount++, this.moveItemUIPosition(e.stageX - this._dragBeginPoint.x, e.stageY - this._dragBeginPoint.y)), this._direction == t.Style.VERTICAL) {
                    if (this._autoScrollGap = e.stageY - this._dragBeginPoint.y, e.stageY <= this.getGlobalXY().y || e.stageY >= this.getGlobalXY().y + this.height) return void this.onTouchEndEvent(e)
                } else if (this._autoScrollGap = e.stageX - this._dragBeginPoint.x, e.stageX <= this.getGlobalXY().x || e.stageX >= this.getGlobalXY().x + this.width) return void this.onTouchEndEvent(e);
                this._lastTimeNum = egret.getTimer() - this._dragLastTime,
                this._dragBeginPoint.x = e.stageX,
                this._dragBeginPoint.y = e.stageY,
                this._dragLastTime = egret.getTimer()
            }
        },
        i.prototype.onTouchReleaseOutsideEvent = function(t) {
            this.onTouchEndEvent(t),
            console.log("onTouchReleaseOutsideEvent")
        },
        i.prototype.onTouchEndEvent = function(e) {
            if (this._isDragBegin && (!this._isMoveBegin || this._moveCount < 4 && Math.abs(e.stageX - this._dragBeginPoint.x) < 5 && Math.abs(e.stageY - this._dragBeginPoint.y) < 5)) {
                for (var i = null,
                n = null,
                s = 0; s < this._itemContainer.numChildren; s++) if (i = this._itemContainer.getChildAt(s), n = this.localToGlobal(i.x, i.y), n.x < e.stageX && n.y < e.stageY && n.x + i.width > e.stageX && n.y + i.height > e.stageY) try {
                    this.selected = i._data;
                    break
                } catch(a) {}
                return this._isDragBegin = !1,
                void(this._isMoveBegin = !1)
            }
            return this._isDragBegin = !1,
            this._isMoveBegin = !1,
            this._lastTimeNum < 40 && (this._dataIndexBegin > 0 && this._autoScrollGap > 0 || this._itemDatas && this._dataIndexEnd < this._itemDatas.length - 1 && this._autoScrollGap < 0) ? (this._autoScrollGap = this._autoScrollGap / this._lastTimeNum * 10, void t.HeartBeat.addListener(this, this.onAutoScroll)) : void this.checkUIFreeback()
        },
        i.prototype.onAutoScroll = function() {
            this._direction == t.Style.VERTICAL ? this.moveItemUIPosition(0, this._autoScrollGap) : this.moveItemUIPosition(this._autoScrollGap, 0),
            this._autoScrollGap -= this._autoScrollGap / 20,
            (Math.abs(this._autoScrollGap) < .5 || 0 == this._dataIndexBegin || this._dataIndexEnd >= this._itemDatas.length - 1) && (t.HeartBeat.removeListener(this, this.onAutoScroll), this.checkUIFreeback())
        },
        i.prototype.checkUIFreeback = function() {
            if (this._itemContainer.numChildren > 0 && this._itemDatas && this._itemDatas.length > 0 && (0 == this._dataIndexBegin || this._dataIndexEnd >= this._itemDatas.length - 1)) {
                var e = 0;
                if (0 == this._dataIndexBegin ? (e = this._direction == t.Style.VERTICAL ? this._itemContainer.getChildAt(0).y: this._itemContainer.getChildAt(0).x, 0 > e && (this._direction == t.Style.VERTICAL ? (e = this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).y + this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).height - this._itemContainer.height, e + this._itemContainer.height > 0 && (e = this._itemContainer.getChildAt(0).y)) : e = this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).x + this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).width - this._itemContainer.width, e > 0 && (e = 0))) : this._dataIndexEnd >= this._itemDatas.length - 1 && (e = this._direction == t.Style.VERTICAL ? this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).y + this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).height - this._itemContainer.height: this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).x + this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).width - this._itemContainer.width), 0 != e) for (var i = 0; i < this._itemContainer.numChildren; i++) this._direction == t.Style.VERTICAL ? egret.Tween.get(this._itemContainer.getChildAt(i)).to({
                    y: this._itemContainer.getChildAt(i).y - e
                },
                100) : egret.Tween.get(this._itemContainer.getChildAt(i)).to({
                    x: this._itemContainer.getChildAt(i).x - e
                },
                100)
            }
        },
        i.prototype.removeRender = function(e) {
            if (e) {
                for (var i in this._dataIndexToRender) if (this._dataIndexToRender[i] == e) {
                    delete this._dataIndexToRender[i];
                    break
                }
                try {
                    e.data = null
                } catch(n) {}
                try {
                    e.list = null
                } catch(n) {}
                e && e.parent && e.parent.removeChild(e),
                t.ObjectPool.recycleClass(e, "list_" + this.name)
            }
        },
        i.prototype.moveItemUIPosition = function(e, i) {
            for (var n = null,
            s = 0,
            a = this._itemContainer.numChildren - 1; a >= 0; a--) if (n = this._itemContainer.getChildAt(a), this._direction == t.Style.VERTICAL) {
                if (this._fixed || (n.y += i), 0 == this._dataIndexBegin && i >= 0 || this._dataIndexEnd == this._itemDatas.length - 1 && 0 > i) continue;
                this._fixed && (n.y += i),
                0 > i && this._dataIndexEnd < this._itemDatas.length - 1 ? (this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).y + n.height + this._gap < this._itemContainer.height && (s = this.addUIItem(this._dataIndexEnd + 1, !1), this._dataIndexEnd += s), n.y + n.height < 0 && (this.removeRender(this._itemContainer.getChildAt(a)), this._dataIndexBegin++)) : this._dataIndexBegin > 0 && (this._itemContainer.getChildAt(0).y - this._gap > 0 && (s = this.addUIItem(this._dataIndexBegin - this._line, !0), this._dataIndexBegin -= s), n.y > this._itemContainer.height && (this.removeRender(this._itemContainer.getChildAt(a)), this._dataIndexEnd--))
            } else {
                if (this._fixed || (n.x += e), 0 == this._dataIndexBegin && e >= 0 || this._dataIndexEnd == this._itemDatas.length - 1 && 0 > e) continue;
                this._fixed && (n.x += e),
                0 > e && this._dataIndexEnd < this._itemDatas.length - 1 ? (this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).x + n.width + this._gap < this._itemContainer.width && (s = this.addUIItem(this._dataIndexEnd + 1, !1), this._dataIndexEnd += s), n.x + n.width < 0 && (this.removeRender(this._itemContainer.getChildAt(a)), this._dataIndexBegin++)) : this._dataIndexBegin > 0 && (this._itemContainer.getChildAt(0).x - this._gap > 0 && (s = this.addUIItem(this._dataIndexBegin - this.line, !0), this._dataIndexBegin -= s), n.x > this._itemContainer.width && (this.removeRender(this._itemContainer.getChildAt(a)), this._dataIndexEnd--))
            }
        },
        i.prototype.addUIItem = function(e, i) {
            if (!this._itemDatas || 0 > e || e >= this._itemDatas.length) return 0;
            for (var n = 0,
            s = 0,
            a = 0; n < this._line && !(!this._itemDatas || 0 > e || e >= this._itemDatas.length);) {
                var r = t.ObjectPool.getByClass(this._itemRenderer, "list_" + this.name);
                r.isAddedToStage || (this._itemContainer.addChild(r), this._itemContainer.removeChild(r)),
                r && r.validateNow && r.validateNow();
                try {
                    r.data = this._itemDatas[e]
                } catch(o) {}
                try {
                    r.list = this
                } catch(o) {}
                if (this._autoSize && (this._direction == t.Style.VERTICAL ? r.width = (this._itemContainer.width - (this._line - 1) * this._gap) / this._line: r.height = (this._itemContainer.height - (this._line - 1) * this._gap) / this._line), this._direction == t.Style.VERTICAL) {
                    if (a = (r.width + this._lineGap) * n, this._itemContainer.numChildren > 0 && 0 == n && (i ? (s = this._itemContainer.getChildAt(0).y, s -= this._gap + r.height) : (s = this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).y, s += (this._gap + this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).height) * (n + 1))), s > this._itemContainer.height || s < -r.height) return this.removeRender(r),
                    n;
                    r.y = s,
                    r.x = a
                } else {
                    if (s = (r.height + this._lineGap) * n, this._itemContainer.numChildren > 0 && 0 == n && (i ? (a = this._itemContainer.getChildAt(0).x, a -= this._gap + r.width) : (a = this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).x, a += (this._gap + this._itemContainer.getChildAt(this._itemContainer.numChildren - 1).width) * (n + 1))), a > this._itemContainer.width || a < -r.width) return this.removeRender(r),
                    n;
                    r.x = a,
                    r.y = s
                }
                i ? this._itemContainer.addChildAt(r, 0) : this._itemContainer.addChild(r),
                this._dataIndexToRender["" + e] = r,
                n++,
                e++
            }
            return e >= this._itemDatas.length && n > 0 && this._data_end_func_call && this._data_end_func_call.call(this._data_end_func_this),
            n
        },
        Object.defineProperty(i.prototype, "data", {
            set: function(e) {
                this._data = e,
                this._itemDatas = null,
                this._dataIndexToRender = {},
                this.setItemContainerSize();
                for (var i = null; this._itemContainer.numChildren > 0;) i = this._itemContainer.removeChildAt(0),
                i.data && (i.data = null),
                t.ObjectPool.recycleClass(i, "list_" + this.name);
                if (this._data instanceof Array) {
                    if (this._itemDatas = this._data, 0 == this._itemDatas.length) return;
                    this._dataIndexBegin = 0;
                    var n = this.addUIItem(this._dataIndexBegin, !1);
                    for (this._dataIndexEnd = n; 0 != n && this._dataIndexEnd < this._itemDatas.length;) n = this.addUIItem(this._dataIndexEnd, !1),
                    this._dataIndexEnd += n;
                    this._dataIndexEnd--
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.append = function(t) {
            t && (this._itemDatas = this._itemDatas.concat(t))
        },
        i.prototype.draw = function() {
            e.prototype.draw.call(this),
            this.setItemContainerSize()
        },
        i.prototype.setItemContainerSize = function() {
            this._itemContainer.x = this._marginLeft,
            this._itemContainer.y = this._marginTop,
            this._itemContainer.width = this.width - this._marginLeft - this._marginRight,
            this._itemContainer.height = this.height - this._marginTop - this._marginBottom,
            this._itemContainer.scrollRect.width = this._itemContainer.width,
            this._itemContainer.scrollRect.height = this._itemContainer.height
        },
        i.prototype.setHorizontalLayout = function() {
            this.layout = t.Style.HORIZONTAL
        },
        i.prototype.setVerticalLayout = function() {
            this.layout = t.Style.VERTICAL
        },
        Object.defineProperty(i.prototype, "layout", {
            get: function() {
                return this._direction
            },
            set: function(t) {
                this._direction = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return this._selected
            },
            set: function(t) {
                var e = null;
                this._selected = t;
                for (var i = 0; i < this._itemContainer.numChildren; i++) {
                    e = this._itemContainer.getChildAt(i),
                    e.selected && (e.selected = !1);
                    try {
                        e._data == t && (e.selected = !0)
                    } catch(n) {}
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "selectedIndex", {
            get: function() {
                return this._selected ? this._data.indexOf(this._selected) : -1
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "itemRenderer", {
            get: function() {
                return this._itemRenderer
            },
            set: function(t) {
                this._itemRenderer != t && (this._itemRenderer = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "autoSize", {
            get: function() {
                return this._autoSize
            },
            set: function(t) {
                this._autoSize != t && (this._autoSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "marginTop", {
            get: function() {
                return this._marginTop
            },
            set: function(t) {
                this._marginTop != t && (this._marginTop = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "marginBottom", {
            get: function() {
                return this._marginBottom
            },
            set: function(t) {
                this._marginBottom != t && (this._marginBottom = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "marginLeft", {
            get: function() {
                return this._marginLeft
            },
            set: function(t) {
                this._marginLeft = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "marginRight", {
            get: function() {
                return this._marginRight
            },
            set: function(t) { (this._marginRight = t) && (this._marginRight = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gap", {
            get: function() {
                return this._gap
            },
            set: function(t) {
                this._gap = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "line", {
            get: function() {
                return this._line
            },
            set: function(t) {
                this._line = t,
                this._line < 1 && (this._line = 1),
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "lineGap", {
            get: function() {
                return this._lineGap
            },
            set: function(t) {
                this._lineGap = t,
                this._lineGap < 0 && (this._lineGap = 0),
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fixed", {
            get: function() {
                return this._fixed
            },
            set: function(t) {
                this._fixed != t && (this._fixed = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.setDataEndCall = function(t, e) {
            this._data_end_func_call = t,
            this._data_end_func_this = e
        },
        i
    } (t.Group);
    t.List = e,
    __reflect(e.prototype, "easy.List")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(n) {
            void 0 === n && (n = !1);
            var s = e.call(this, n) || this;
            return s.METHOD_DEF = {},
            s._dataItems = [],
            s._itemContainer = null,
            s._itemRenderer = t.DefaultRenderer,
            s._itemIndexToRender = null,
            s._speed = 150,
            s._delay = 3e3,
            s._align = i.ALIGN_BOTTOM,
            s._gapFactor = 1,
            s._direction = i.SCROLL_LEFT,
            s._firstGapWidth = 0,
            s._scaleFactor = .1,
            s._maxTextureWidth = 0,
            s._maxTextureHeight = 0,
            s._totalLength = 0,
            s._middleIndex = 0,
            s._middleItemX = 0,
            s._middleItemY = 0,
            s._firstItemIndex = 0,
            s._gap = 2,
            s._stop = !1,
            s._delayIndex1 = 0,
            s._delayIndex2 = 0,
            s._destroyIndex = 0,
            s
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.setSize(300, 300),
            this._itemContainer = new t.Group,
            this.addChild(this._itemContainer),
            this._itemContainer.showBg = !1,
            this._itemContainer.setSize(this.width, this.height),
            this._itemContainer.horizontalEnabled = !0,
            this._itemContainer.verticalEnabled = !0,
            this.addHandleEvent(t.EventType.RESOURCE_DOWNLOADED, "onMyEventResDownloaded")
        },
        i.prototype.addHandleEvent = function(t, e) {
            this.METHOD_DEF[t] = e
        },
        i.prototype.receiveEvent = function(t) {
            for (var e = null,
            i = 0; i < this._itemContainer.numChildren; i++) e = this._itemContainer.getChildAt(i),
            e.refresh && e.refresh()
        },
        Object.defineProperty(i.prototype, "data", {
            get: function() {
                return this._data
            },
            set: function(e) {
                if (e) {
                    this._data = e,
                    this._dataItems = null,
                    this._itemIndexToRender = {};
                    for (var i = null; this._itemContainer.numChildren > 0;) i = this._itemContainer.removeChildAt(0),
                    i.data && (i.data = null),
                    t.ObjectPool.recycleClass(i, "listad_" + this.name);
                    if (e instanceof Array) {
                        if (this._dataItems = e, 0 == this._dataItems.length) return;
                        this._totalLength = this._dataItems.length,
                        this._totalLength % 2 == 0 ? this._middleIndex = this._totalLength / 2 : this._totalLength % 2 == 1 && (this._middleIndex = (this._totalLength - 1) / 2),
                        this._firstItemIndex = 0;
                        for (var n = 0; n < this._totalLength;) this.addItem(n),
                        n++;
                        this._dataItems.length <= 3
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.reserveModel = function() {},
        i.prototype.addItem = function(e) {
            var i = t.ObjectPool.getByClass(this._itemRenderer, "listad_" + this.name);
            i.setSize(200, 200),
            i.anchorX = .5,
            i.anchorY = .5,
            this._itemContainer.addChild(i),
            this._itemContainer.removeChild(i),
            i && i.validateNow && i.validateNow(),
            this._firstGapWidth || (this._firstGapWidth = i.width / 2),
            this._middleItemX = this._itemContainer.width / 2,
            this._middleItemY = this._itemContainer.height / 2,
            Math.abs(e - this._middleIndex) <= 1 && (e - this._middleIndex == -1 ? (this._itemContainer.addChild(i), i.x = (e - this._middleIndex) * this._firstGapWidth + this._middleItemX) : e == this._middleIndex ? (this._itemContainer.addChild(i), i.x = this._middleItemX) : e - this._middleIndex == 1 && (this._itemContainer.addChildAt(i, 1), i.x = this._middleItemX + (e - this._middleIndex) * this._firstGapWidth, i.bgColor = 0), i.scaleY = 1 - Math.abs(e - this._middleIndex) * this._scaleFactor, i.alpha = 1 - Math.abs(e - this._middleIndex) * this._scaleFactor, i.y = Math.abs(e - this._middleIndex) * this._scaleFactor * i.height * i.anchorY * this._gapFactor + this._middleItemY),
            i.data = this._dataItems[e],
            this._itemIndexToRender["" + e] = i
        },
        i.prototype.start = function() {
            this._delayIndex2 && egret.clearTimeout(this._delayIndex2);
            var t = 0,
            e = 0,
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            r = 0,
            o = 0,
            h = 0,
            l = [];
            r = this._middleIndex - 1,
            0 > r && (r = this._totalLength - 1),
            o = this._middleIndex,
            h = this._middleIndex + 1,
            h == this._totalLength && (h = 0),
            l = [r, o, h];
            for (var u = 0; u < l.length; u++) t = this._itemIndexToRender["" + l[u]].x,
            e = this._itemIndexToRender["" + l[u]].y,
            i = this._itemIndexToRender["" + l[u]].scaleY,
            n = this._itemIndexToRender["" + l[u]].alpha,
            s = this._itemIndexToRender["" + l[u]].height,
            a = this._itemIndexToRender["" + l[u]].anchorY,
            "left" == this._direction ? (this._destroyIndex = r, 0 == u ? egret.Tween.get(this._itemIndexToRender["" + l[u]]).to({
                x: t + this._firstGapWidth,
                y: e + this._scaleFactor * s * a * this._gapFactor,
                scaleY: i - this._scaleFactor,
                alpha: 0
            },
            this._speed) : 1 == u ? egret.Tween.get(this._itemIndexToRender["" + l[u]]).to({
                x: t - this._firstGapWidth,
                y: e + this._scaleFactor * s * a * this._gapFactor,
                scaleY: i - this._scaleFactor,
                alpha: n - this._scaleFactor
            },
            this._speed) : 2 == u && egret.Tween.get(this._itemIndexToRender["" + l[u]]).to({
                x: t - this._firstGapWidth,
                y: e - this._scaleFactor * s * a * this._gapFactor,
                scaleY: i + this._scaleFactor,
                alpha: n + this._scaleFactor
            },
            this._speed)) : "right" == this._direction && (this._destroyIndex = h, 0 == u ? egret.Tween.get(this._itemIndexToRender["" + l[u]]).to({
                x: t + this._firstGapWidth,
                y: e - this._scaleFactor * s * a * this._gapFactor,
                scaleY: i + this._scaleFactor,
                alpha: n + this._scaleFactor
            },
            this._speed) : 1 == u ? egret.Tween.get(this._itemIndexToRender["" + l[u]]).to({
                x: t + this._firstGapWidth,
                y: e + this._scaleFactor * s * a * this._gapFactor,
                scaleY: i - this._scaleFactor,
                alpha: n - this._scaleFactor
            },
            this._speed) : 2 == u && egret.Tween.get(this._itemIndexToRender["" + l[u]]).to({
                x: t - this._firstGapWidth,
                y: e - this._scaleFactor * s * a * this._gapFactor,
                scaleY: i + this._scaleFactor,
                alpha: 0
            },
            this._speed));
            "left" == this._direction ? (this._middleIndex++, this._middleIndex == this._totalLength && (this._middleIndex = 0)) : "right" == this._direction && (this._middleIndex--, this._middleIndex < 0 && (this._middleIndex = this._totalLength - 1)),
            this.addNewItem(this._direction),
            this._delayIndex1 = egret.setTimeout(this.refreshTree, this, this._speed)
        },
        i.prototype.stop = function() {
            for (var t in this._itemIndexToRender) egret.Tween.removeTweens(this._itemIndexToRender[t]);
            this._delayIndex1 && egret.clearTimeout(this._delayIndex1),
            this._delayIndex2 && egret.clearTimeout(this._delayIndex2)
        },
        i.prototype.addNewItem = function(t, e) {
            void 0 === e && (e = this._middleIndex),
            "left" == t ? (e++, e == this._totalLength && (e = 0)) : "right" == t && (e--, 0 > e && (e = this._totalLength - 1));
            var i = this._itemIndexToRender["" + e];
            this._itemContainer.addChildAt(i, 1),
            i.alpha = 0,
            i.anchorX = .5,
            i.anchorY = .5,
            i.scaleY = 1,
            i.x = this._middleItemX,
            i.y = this._middleItemY,
            i.bgColor = 0,
            i.data = i._data,
            "left" == t ? egret.Tween.get(i).to({
                x: i.x + this._firstGapWidth,
                y: i.y + this._scaleFactor * i.height * i.anchorY * this._gapFactor,
                scaleY: 1 - this._scaleFactor,
                alpha: 1 - this._scaleFactor
            },
            this._speed) : "right" == t && egret.Tween.get(i).to({
                x: i.x - this._firstGapWidth,
                y: i.y + this._scaleFactor * i.height * i.anchorY * this._gapFactor,
                scaleY: 1 - this._scaleFactor,
                alpha: 1 - this._scaleFactor
            },
            this._speed)
        },
        i.prototype.refreshTree = function() {
            for (var t in this._itemIndexToRender) egret.Tween.removeTweens(this._itemIndexToRender[t]);
            this._delayIndex1 && egret.clearTimeout(this._delayIndex1),
            this._itemIndexToRender["" + this._destroyIndex].removeFromParent(),
            this._itemContainer.addChildAt(this._itemIndexToRender["" + this._middleIndex], this._totalLength),
            this._delayIndex2 = egret.setTimeout(this.start, this, this._delay)
        },
        Object.defineProperty(i.prototype, "direction", {
            get: function() {
                return this._direction
            },
            set: function(t) {
                t && (this._direction = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "align", {
            get: function() {
                return this._align
            },
            set: function(t) {
                if ("bottom" == t) this._align = t,
                this._gapFactor = 1;
                else {
                    if ("center" != t) return;
                    this._align = t,
                    this._gapFactor = .2
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "speed", {
            get: function() {
                return this._speed
            },
            set: function(t) { ! t || 0 >= t || (this._speed = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "delay", {
            get: function() {
                return this._delay
            },
            set: function(t) { ! t || 0 >= t || (this._delay = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "itemRenderer", {
            get: function() {
                return this._itemRenderer
            },
            set: function(t) {
                this._itemRenderer != t && (this._itemRenderer = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gap", {
            get: function() {
                return this._gap
            },
            set: function(t) {
                this._gap = t,
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "scaleFactor", {
            get: function() {
                return this._scaleFactor
            },
            set: function(t) {
                this._scaleFactor = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "firstGapWidth", {
            get: function() {
                return this._firstGapWidth
            },
            set: function(t) {
                t && (this._firstGapWidth = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.ALIGN_BOTTOM = "bottom",
        i.ALIGN_CENTER = "center",
        i.SCROLL_UP = "up",
        i.SCROLL_DOWN = "down",
        i.SCROLL_LEFT = "left",
        i.SCROLL_RIGHT = "right",
        i
    } (t.Group);
    t.ListAd = e,
    __reflect(e.prototype, "easy.ListAd")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = !1);
            var i = e.call(this, t) || this;
            return i._imgDisplay = null,
            i._fps = 0,
            i._autoFps = !0,
            i._textures = null,
            i._numFrameIndex = 0,
            i._numFrammeCount = 0,
            i._isPlaying = !1,
            i._loop = !1,
            i._soundName = null,
            i._animateName = null,
            i._animateDataDownload = !1,
            i._animateData = null,
            i._callFuncDict = null,
            i._autoDestory = !1,
            i._autoSize = !0,
            i._autoplay = !1,
            i
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this._imgDisplay = new egret.Bitmap,
            this.addChild(this._imgDisplay),
            this.setSize(1, 1)
        },
        i.prototype.play = function(e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            (t.StringUtil.isUsage(this._animateName) || this._textures) && (e > 0 && (this._fps = e, this._autoFps = !1), this._numFrameIndex = i, this._isPlaying || (t.StringUtil.isUsage(this._animateName) || this._textures.length > 1 ? (this._numFrammeCount = this._fps, this.onChangeTexture(), t.HeartBeat.addListener(this, this.onChangeTexture, 1)) : this._imgDisplay.texture = this._textures[0], this._isPlaying = !0, this.onPlaySound()))
        },
        i.prototype.gotoAndPlay = function(t) {
            this.play(0, t)
        },
        i.prototype.gotoAndStop = function(e) {
            this._numFrameIndex = e,
            this._numFrammeCount = this._fps,
            this.onChangeTexture(),
            this._isPlaying = !1,
            t.HeartBeat.removeListener(this, this.onChangeTexture)
        },
        i.prototype.pause = function() {
            this._isPlaying = !1,
            t.HeartBeat.removeListener(this, this.onChangeTexture),
            t.Sound.stop(this._soundName)
        },
        i.prototype.stop = function() {
            this._isPlaying = !1,
            this._numFrameIndex = 0,
            this._numFrammeCount = 0,
            t.HeartBeat.removeListener(this, this.onChangeTexture),
            t.Sound.stop(this._soundName),
            this._callFuncDict && this._callFuncDict[ - 1] && this._callFuncDict[ - 1].func.call(this._callFuncDict[ - 1].thisFunc, this, -1),
            this._autoDestory && this.destory()
        },
        i.prototype.replay = function() { (t.StringUtil.isUsage(this._animateName) || this._textures) && (this._isPlaying = !0, t.StringUtil.isUsage(this._animateName) || this._textures.length > 1 ? t.HeartBeat.addListener(this, this.onChangeTexture, 1) : this._imgDisplay.texture = this._textures[0], t.Sound.play(this._soundName, 0, this._loop ? 0 : 1))
        },
        i.prototype.destory = function() {
            this._isPlaying = !1,
            this.resetData(),
            this.verticalEnabled = !1,
            this.horizontalEnabled = !1,
            t.HeartBeat.removeListener(this, this.onChangeTexture),
            this.removeFromParent()
        },
        i.prototype.resetData = function() {
            t.Sound.stop(this._soundName),
            this._autoFps = !0,
            this._numFrameIndex = 0,
            this._numFrammeCount = 0,
            this._textures = null,
            this._animateData = null,
            this._animateName = null,
            this._callFuncDict = null,
            this._animateDataDownload = !1,
            this.anchorX = 0,
            this.anchorY = 0,
            this.anchorEnabled = !1,
            this.anchorOffsetX = 0,
            this.anchorOffsetY = 0,
            this._imgDisplay && (this._imgDisplay.texture = null)
        },
        Object.defineProperty(i.prototype, "textures", {
            get: function() {
                return this._textures
            },
            set: function(t) {
                this._textures = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "animateName", {
            set: function(t) {
                this.resetData(),
                this._animateName = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "animateData", {
            get: function() {
                return this._animateData
            },
            set: function(t) {
                this._animateData = t,
                this._animateData && (this._animateName = t.id, this.setAnimateData())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "sound", {
            get: function() {
                return this._soundName
            },
            set: function(t) {
                this._soundName = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fps", {
            get: function() {
                return this._fps
            },
            set: function(t) {
                this._fps = t,
                0 != this._fps && (this._autoFps = !1)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "loop", {
            get: function() {
                return this._loop
            },
            set: function(t) {
                this._loop = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.setCallFunc = function(t, e, i) {
            void 0 === i && (i = -1),
            null == this._callFuncDict && (this._callFuncDict = {}),
            this._callFuncDict["" + i] = {
                func: e,
                thisFunc: t
            }
        },
        i.prototype.removeCallFunc = function(t) {
            void 0 === t && (t = -1),
            this._callFuncDict && this._callFuncDict["" + t] && delete this._callFuncDict["" + t]
        },
        i.prototype.onChangeTexture = function() {
            if (!this.parent) return void this.stop();
            if (this._imgDisplay && (this._numFrammeCount++, this._numFrammeCount >= this._fps)) {
                if (this._numFrammeCount = 0, !this._animateDataDownload && null == this._animateData && t.StringUtil.isUsage(this._animateName) && (this.animateData = t.AnimateManager.getAnimateData(this._animateName), this._animateDataDownload = !0, null == this.animateData)) return void t.EventManager.addEventListener(t.EventType.RESOURCE_DOWNLOADED, this.onEventAnimateDataDownloaded, this);
                if (this._textures) {
                    if (0 == this._fps && (this._fps = 1), this._numFrameIndex >= this._textures.length) {
                        if (!this._loop) return void this.stop();
                        this._numFrameIndex = 0
                    }
                } else if (this._animateData && this._numFrameIndex >= this._animateData.textures.length) {
                    if (!this._loop) return void this.stop();
                    this._numFrameIndex = 0
                }
                if (this._callFuncDict && this._callFuncDict["" + this._numFrameIndex] && this._callFuncDict["" + this._numFrameIndex].func.call(this._callFuncDict["" + this._numFrameIndex].thisFunc, this, this._numFrameIndex), this._textures) this._imgDisplay.texture = this._textures[this._numFrameIndex],
                this._imgDisplay.x = 0,
                this._imgDisplay.y = 0,
                this._numFrameIndex++;
                else if (this._animateData && this._animateData.textures && this._imgDisplay) {
                    var e = this._animateData.getTexture(this._numFrameIndex);
                    this._autoFps && (this._fps = e.frame),
                    this.animateData._merge && this._animateData.textures.length > 1 ? (this._imgDisplay.x = e.x, this._imgDisplay.y = e.y) : (this._imgDisplay.x = 0, this._imgDisplay.y = 0),
                    this._imgDisplay.texture = e.texutre,
                    this._numFrameIndex++,
                    1 == this._animateData.textures.length && t.HeartBeat.removeListener(this, this.onChangeTexture)
                }
            }
        },
        i.prototype.onEventAnimateDataDownloaded = function(e) {
            e.getItem("name") == this._animateName && (t.EventManager.removeEventListener(t.EventType.RESOURCE_DOWNLOADED, this.onEventAnimateDataDownloaded, this), this.setAnimateData())
        },
        i.prototype.setAnimateData = function() {
            this._animateData = t.AnimateManager.getAnimateData(this._animateName),
            this.animateData && this._autoSize && this.setSize(this.animateData.width, this.animateData.height),
            0 == this._fps && this.animateData && this._autoFps && (this._fps = this.animateData.frame)
        },
        i.prototype.onPlaySound = function() {
            t.GlobalSetting.VOLUME_OPEN && t.StringUtil.isUsage(this._soundName) && t.Sound.play(this._soundName, 0, this._loop ? 0 : 1)
        },
        Object.defineProperty(i.prototype, "isPlaying", {
            get: function() {
                return this._isPlaying
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "currentFrame", {
            get: function() {
                return this._numFrameIndex
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "totalFrame", {
            get: function() {
                return this._textures ? this._textures.length: this._animateData ? this._animateData.textures.length: 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "autoDestory", {
            get: function() {
                return this._autoDestory
            },
            set: function(t) {
                this._autoDestory = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "autoSize", {
            get: function() {
                return this._autoSize
            },
            set: function(t) {
                this._autoSize = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onInvalidatePosition = function() {
            this._hasInvalidatePosition || (this._hasInvalidatePosition = !0, this.addEventListener(egret.Event.ENTER_FRAME, this.resetPosition, this))
        },
        Object.defineProperty(i.prototype, "autoplay", {
            get: function() {
                return this._autoplay
            },
            set: function(t) {
                this._autoplay != t && (this._autoplay = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (t.BaseGroup);
    t.MovieClip = e,
    __reflect(e.prototype, "easy.MovieClip")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function n(t) {
            void 0 === t && (t = !1);
            var i = e.call(this, t) || this;
            return i._moveFunc = null,
            i._moveFuncThis = null,
            i._scrollItemArr = [],
            i._clip = !1,
            i._runing = !1,
            i._autoplay = !1,
            i
        }
        return __extends(n, e),
        n.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.clip = !0
        },
        n.prototype.setScrollData = function(e, s, a, r) {
            void 0 === s && (s = 3),
            void 0 === a && (a = n.SCROLL_DOWN),
            void 0 === r && (r = 0);
            var o = t.ObjectPool.getByClass(i);
            this.addChild(o),
            this._scrollItemArr.push(o),
            o.width = this.width,
            o.height = this.height,
            o.setScrollData(e, s, a, r),
            this.invalidate()
        },
        n.prototype.delScrollData = function(t) {
            void 0 === t && (t = -1);
            var e = null;
            if ( - 1 >= t) for (; this._scrollItemArr.length > 0;) e = this._scrollItemArr.pop(),
            e && e.removeFromParent();
            else t < this._scrollItemArr.length && (e = this._scrollItemArr[t], e && (e.removeFromParent(), this._scrollItemArr.splice(t, 1)))
        },
        n.prototype.play = function(e) {
            void 0 === e && (e = -1),
            this._runing = !0,
            this.setItemState(n.STATE_START, e),
            t.HeartBeat.addListener(this, this.onHeartBeat)
        },
        n.prototype.stop = function(e) {
            void 0 === e && (e = -1),
            this.setItemState(n.STATE_STOP, e),
            this._runing || t.HeartBeat.removeListener(this, this.onHeartBeat)
        },
        n.prototype.pause = function(e) {
            void 0 === e && (e = -1),
            this.setItemState(n.STATE_STOP, e),
            this._runing || t.HeartBeat.removeListener(this, this.onHeartBeat)
        },
        n.prototype.restart = function(e) {
            void 0 === e && (e = -1),
            this.setItemState(n.STATE_START, e),
            t.HeartBeat.addListener(this, this.onHeartBeat)
        },
        n.prototype.setSpeed = function(t, e) {
            if (void 0 === e && (e = -1), -1 >= e) for (var i = 0; i < this._scrollItemArr.length; i++) this._scrollItemArr[i].speed = t;
            else e >= 0 && e <= this._scrollItemArr.length - 1 && (this._scrollItemArr[e].speed = t)
        },
        n.prototype.setDirection = function(t, e) {
            if (void 0 === e && (e = -1), -1 >= e) for (var i = 0; i < this._scrollItemArr.length; i++) this._scrollItemArr[i].direction = t;
            else e >= 0 && e <= this._scrollItemArr.length - 1 && (this._scrollItemArr[e].direction = t)
        },
        n.prototype.setItemState = function(t, e) {
            if (void 0 === e && (e = -1), -1 >= e) for (var i = 0; i < this._scrollItemArr.length; i++) this._scrollItemArr[i]._state = t;
            else e >= 0 && e <= this._scrollItemArr.length - 1 && (this._scrollItemArr[e]._state = t);
            if (t == n.STATE_START) this._runing = !0;
            else {
                this._runing = !1;
                for (var i = 0; i < this._scrollItemArr.length; i++) if (this._scrollItemArr[i]._state == n.STATE_START) {
                    this._runing = !0;
                    break
                }
            }
        },
        n.prototype.onHeartBeat = function() {
            for (var t = 0; t < this._scrollItemArr.length; t++) this._scrollItemArr[t].onHeartBeat();
            this._moveFunc && this._moveFunc.call(this._moveFuncThis)
        },
        n.prototype.draw = function() {
            if (0 != this.width && 0 != this.height && (this._clip ? null == this.scrollRect ? this.scrollRect = new egret.Rectangle(0, 0, this.width, this.height) : (this.scrollRect.width = this.width, this.scrollRect.height = this.height) : this.scrollRect = null, 100 != this.width || 100 != this.height)) for (var t = 0; t < this._scrollItemArr.length; t++)(100 == this._scrollItemArr[t].width || 0 == this._scrollItemArr[t].width) && (this._scrollItemArr[t].width = this.width),
            (100 == this._scrollItemArr[t].height || 0 == this._scrollItemArr[t].height) && (this._scrollItemArr[t].height = this.height),
            this._scrollItemArr[t]._initData = !1
        },
        Object.defineProperty(n.prototype, "clip", {
            get: function() {
                return this._clip
            },
            set: function(t) {
                t != this._clip && (this._clip = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.setMoveCallbackFunc = function(t, e) {
            this._moveFunc = t,
            this._moveFuncThis = e
        },
        Object.defineProperty(n.prototype, "autoplay", {
            get: function() {
                return this._autoplay
            },
            set: function(t) {
                this._autoplay != t && (this._autoplay = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.SCROLL_UP = "up",
        n.SCROLL_DOWN = "down",
        n.SCROLL_LEFT = "left",
        n.SCROLL_RIGHT = "right",
        n.STATE_START = "start",
        n.STATE_STOP = "stop",
        n
    } (t.BaseGroup);
    t.ScrollGroup = e,
    __reflect(e.prototype, "easy.ScrollGroup");
    var i = function(i) {
        function n(n) {
            void 0 === n && (n = !1);
            var s = i.call(this, n) || this;
            return s.speed = 0,
            s.gap = 0,
            s.direction = e.SCROLL_DOWN,
            s._textures = null,
            s._scrollTextureIndex = 0,
            s._scrollBitmapArr = null,
            s._state = t.ScrollGroup.STATE_STOP,
            s._initData = !1,
            s._textureWidth = 0,
            s._textureHeight = 0,
            s._totalBitmapLength = 0,
            s._limitDistance = 0,
            s._clip = !1,
            s._textureIndex = 0,
            s
        }
        return __extends(n, i),
        n.prototype.createChildren = function() {
            i.prototype.createChildren.call(this)
        },
        n.prototype.setScrollData = function(i, n, s, a) {
            void 0 === n && (n = 3),
            void 0 === a && (a = 0),
            this._initData = !1,
            this.gap = a,
            this.direction = s,
            this._textureIndex = 0,
            this._textures = i,
            this._textureWidth = this._textures[0].textureWidth,
            this._textureHeight = this._textures[0].textureHeight,
            this.speed = n;
            this._textures.length;
            if (this._scrollBitmapArr && this._scrollBitmapArr.length > 0) for (var r = null; this._scrollBitmapArr.length > 0;) r = this._scrollBitmapArr.pop(),
            r.parent && r.parent.removeChild(r),
            t.ObjectPool.recycleClass(r, "scroll_group");
            if (this._scrollBitmapArr = [], this._totalBitmapLength = 0, this._limitDistance = 0, this.direction == e.SCROLL_DOWN || this.direction == e.SCROLL_UP) for (; this._limitDistance < this.height;) this._textureIndex >= this._textures.length && (this._textureIndex = 0),
            this._limitDistance += this._textures[this._textureIndex].textureHeight + this.gap,
            this._textureIndex++,
            this._totalBitmapLength++;
            else if (this.direction == e.SCROLL_LEFT || this.direction == e.SCROLL_RIGHT) for (; this._limitDistance < this.width;) this._textureIndex >= this._textures.length && (this._textureIndex = 0),
            this._limitDistance += this._textures[this._textureIndex].textureWidth + this.gap,
            this._textureIndex++,
            this._totalBitmapLength++;
            for (var o = 0; o < this._totalBitmapLength; o++) {
                var h = t.ObjectPool.getByClass(egret.Bitmap, "scroll_group");
                this._scrollBitmapArr.push(h)
            }
            for (var l = 0; l < this._scrollBitmapArr.length; l++) this.addChild(this._scrollBitmapArr[l]),
            this.getTexture(this._scrollBitmapArr[l]),
            this._scrollBitmapArr[l] && (this._scrollBitmapArr[l].width = this._scrollBitmapArr[l].texture.textureWidth, this._scrollBitmapArr[l].height = this._scrollBitmapArr[l].texture.textureHeight);
            this.initScrollBitmapData()
        },
        n.prototype.initScrollBitmapData = function() {
            if (!this._initData) if (this._initData = !0, this.direction == e.SCROLL_UP) for (var t = 0; t < this._scrollBitmapArr.length; t++) this._scrollBitmapArr[t].x = 0,
            0 == t ? this._scrollBitmapArr[0].y = 0 : t > 0 && (this._scrollBitmapArr[t].y = this._scrollBitmapArr[t - 1].y + this._scrollBitmapArr[t - 1].texture.textureHeight + this.gap);
            else if (this.direction == e.SCROLL_DOWN) for (var t = 0; t < this._scrollBitmapArr.length; t++) this._scrollBitmapArr[t].x = 0,
            0 == t ? this._scrollBitmapArr[0].y = this.height - this._scrollBitmapArr[0].texture.textureHeight: t > 0 && (this._scrollBitmapArr[t].y = this._scrollBitmapArr[t - 1].y - this._scrollBitmapArr[t].texture.textureHeight - this.gap);
            else if (this.direction == e.SCROLL_LEFT) for (var t = 0; t < this._scrollBitmapArr.length; t++) this._scrollBitmapArr[t].y = 0,
            0 == t ? this._scrollBitmapArr[0].x = 0 : t > 0 && (this._scrollBitmapArr[t].x = this._scrollBitmapArr[t - 1].x + this._scrollBitmapArr[t - 1].texture.textureWidth + this.gap);
            else if (this.direction == e.SCROLL_RIGHT) for (var t = 0; t < this._scrollBitmapArr.length; t++) this._scrollBitmapArr[t].y = 0,
            0 == t ? this._scrollBitmapArr[0].x = this.width - this._scrollBitmapArr[0].texture.textureWidth: t > 0 && (this._scrollBitmapArr[t].x = this._scrollBitmapArr[t - 1].x - this._scrollBitmapArr[t].texture.textureWidth - this.gap)
        },
        n.prototype.getTexture = function(t) {
            var e = this._textures[this._scrollTextureIndex];
            return this._scrollTextureIndex++,
            this._scrollTextureIndex >= this._textures.length && (this._scrollTextureIndex = 0),
            t.scaleX = 1,
            t.scaleY = 1,
            t.alpha = 1,
            t.rotation = 0,
            t.texture = e,
            t.width = e.textureWidth,
            t.height = e.textureHeight,
            e
        },
        n.prototype.onHeartBeat = function() {
            if (this._state != t.ScrollGroup.STATE_STOP) if (this._initData || this.initScrollBitmapData(), this.direction == e.SCROLL_UP) {
                for (var i = 0; i < this._scrollBitmapArr.length; i++) this._scrollBitmapArr[i].y -= this.speed;
                if (this._scrollBitmapArr[this._scrollBitmapArr.length - 1].y <= this.height - this._scrollBitmapArr[this._scrollBitmapArr.length - 1].texture.textureHeight - this.speed) {
                    var n = t.ObjectPool.getByClass(egret.Bitmap, "scroll_group");
                    this.addChild(n),
                    this.getTexture(n),
                    n.x = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].x,
                    n.y = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].y + this._scrollBitmapArr[this._scrollBitmapArr.length - 1].texture.textureHeight + this.gap,
                    this._scrollBitmapArr.push(n)
                }
                if (this._scrollBitmapArr[0].y + this._scrollBitmapArr[0].texture.textureHeight <= 0) {
                    var n = this._scrollBitmapArr.splice(0, 1)[0];
                    n.parent && n.parent.removeChild(n),
                    t.ObjectPool.recycleClass(n, "scroll_group")
                }
            } else if (this.direction == e.SCROLL_DOWN) {
                for (var i = 0; i < this._scrollBitmapArr.length; i++) this._scrollBitmapArr[i].y += this.speed;
                if (this._scrollBitmapArr[this._scrollBitmapArr.length - 1].y >= -this.speed) {
                    var n = t.ObjectPool.getByClass(egret.Bitmap, "scroll_group");
                    this.addChild(n),
                    this.getTexture(n),
                    n.x = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].x,
                    n.y = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].y - n.texture.textureHeight - this.gap,
                    this._scrollBitmapArr.push(n)
                }
                if (this._scrollBitmapArr[0].y >= this.height) {
                    var n = this._scrollBitmapArr.splice(0, 1)[0];
                    n.parent && n.parent.removeChild(n),
                    t.ObjectPool.recycleClass(n, "scroll_group")
                }
            } else if (this.direction == e.SCROLL_LEFT) {
                for (var i = 0; i < this._scrollBitmapArr.length; i++) this._scrollBitmapArr[i].x -= this.speed;
                if (this._scrollBitmapArr[this._scrollBitmapArr.length - 1].x <= this.width - this._scrollBitmapArr[this._scrollBitmapArr.length - 1].texture.textureWidth - this.speed) {
                    var n = t.ObjectPool.getByClass(egret.Bitmap, "scroll_group");
                    this.addChild(n),
                    this.getTexture(n),
                    n.y = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].y,
                    n.x = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].x + this._scrollBitmapArr[this._scrollBitmapArr.length - 1].texture.textureWidth + this.gap,
                    this._scrollBitmapArr.push(n)
                }
                if (this._scrollBitmapArr[0].x + this._scrollBitmapArr[0].texture.textureWidth <= 0) {
                    var n = this._scrollBitmapArr.splice(0, 1)[0];
                    n.parent && n.parent.removeChild(n),
                    t.ObjectPool.recycleClass(n, "scroll_group")
                }
            } else if (this.direction == e.SCROLL_RIGHT) {
                for (var i = 0; i < this._scrollBitmapArr.length; i++) this._scrollBitmapArr[i].x += this.speed;
                if (this._scrollBitmapArr[this._scrollBitmapArr.length - 1].x >= -this.speed) {
                    var n = t.ObjectPool.getByClass(egret.Bitmap, "scroll_group");
                    this.addChild(n),
                    this.getTexture(n),
                    n.y = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].y,
                    n.x = this._scrollBitmapArr[this._scrollBitmapArr.length - 1].x - n.texture.textureWidth - this.gap,
                    this._scrollBitmapArr.push(n)
                }
                if (this._scrollBitmapArr[0].x >= this.width) {
                    var n = this._scrollBitmapArr.splice(0, 1)[0];
                    n.parent && n.parent.removeChild(n),
                    t.ObjectPool.recycleClass(n, "scroll_group")
                }
            }
        },
        n.prototype.draw = function() {
            0 != this.width && 0 != this.height && (this._clip ? null == this.scrollRect ? this.scrollRect = new egret.Rectangle(0, 0, this.width, this.height) : (this.scrollRect.width = this.width, this.scrollRect.height = this.height) : this.scrollRect = null)
        },
        Object.defineProperty(n.prototype, "clip", {
            get: function() {
                return this._clip
            },
            set: function(t) {
                t != this._clip && (this._clip = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        n
    } (t.BaseGroup);
    __reflect(i.prototype, "ScrollItemGroup")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.setStyle = function(e) {
            switch (e) {
            case t.DARK:
                t.BACKGROUND = 4473924,
                t.BUTTON_FACE = 6710886,
                t.BUTTON_DOWN = 2236962,
                t.INPUT_TEXT = 12303291,
                t.LABEL_TEXT = 13421772,
                t.PANEL = 6710886,
                t.PROGRESS_BAR = 6710886,
                t.TEXT_BACKGROUND = 5592405,
                t.LIST_DEFAULT = 4473924,
                t.LIST_ALTERNATE = 3750201,
                t.LIST_SELECTED = 6710886,
                t.LIST_ROLLOVER = 7829367;
                break;
            case t.LIGHT:
            default:
                t.BACKGROUND = 13421772,
                t.BUTTON_FACE = 16777215,
                t.BUTTON_DOWN = 15658734,
                t.INPUT_TEXT = 3355443,
                t.LABEL_TEXT = 6710886,
                t.PANEL = 15987699,
                t.PROGRESS_BAR = 16777215,
                t.TEXT_BACKGROUND = 16777215,
                t.LIST_DEFAULT = 16777215,
                t.LIST_ALTERNATE = 15987699,
                t.LIST_SELECTED = 13421772,
                t.LIST_ROLLOVER = 14540253
            }
        },
        t.TEXT_BACKGROUND = 16777215,
        t.BACKGROUND = 13421772,
        t.BUTTON_FACE = 16777215,
        t.BUTTON_DOWN = 15658734,
        t.INPUT_TEXT = 3355443,
        t.LABEL_TEXT = 0,
        t.BUTTON_TEXT = 6710886,
        t.DROPSHADOW = 0,
        t.PANEL = 15987699,
        t.PROGRESS_BAR = 16777215,
        t.LIST_DEFAULT = 16777215,
        t.LIST_ALTERNATE = 15987699,
        t.LIST_SELECTED = 13421772,
        t.LIST_ROLLOVER = 14540253,
        t.BUTTON_DEFAULT_WIDTH = 100,
        t.BUTTON_DEFAULT_HEIGHT = 32,
        t.VIDEO_DEFAULT_WIDTH = 320,
        t.VIDEO_DEFAULT_HEIGHT = 250,
        t.embedFonts = !1,
        t.fontName = null,
        t.fontSize = 16,
        t.allowDefaultLabelFilter = !0,
        t.DARK = "dark",
        t.LIGHT = "light",
        t.allowColorFilterButtonEnabled = !1,
        t.allowButtonDefaultCoolDown = !1,
        t.defaultCoolDownFrames = 2,
        t.TEXTINPUT_HEIGHT = 25,
        t.TEXTINPUT_WIDTH = 100,
        t.TEXTINPUT_COLOR = 16777215,
        t.HORIZONTAL = "horizontal",
        t.VERTICAL = "vertical",
        t.SLIDER_WIDTH = 300,
        t.SLIDER_HEIGHT = 17,
        t.SCROLLBAR_WIDTH = 300,
        t.SCROLLBAR_HEIGHT = 17,
        t
    } ();
    t.Style = e,
    __reflect(e.prototype, "easy.Style")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(n) {
            void 0 === n && (n = !1);
            var s = e.call(this, n) || this;
            return s._text = "",
            s._initFlow = null,
            s._htmlTextParser = null,
            s._textField = null,
            s._fontSize = t.Style.fontSize,
            s._color = t.Style.LABEL_TEXT,
            s._fontName = t.Style.fontName,
            s._hAlign = egret.HorizontalAlign.LEFT,
            s._vAlign = egret.VerticalAlign.MIDDLE,
            s._bold = !1,
            s._italic = !1,
            s._lineSpacing = 0,
            s._stroke = 0,
            s._strokeColor = 13136,
            s._html = !1,
            s._editable = !1,
            s._maxChars = 0,
            s._restrict = null,
            s._inputType = null,
            s._followForce = !1,
            s._follow = i.FOLLOW_NONE,
            s.isAddScollListener = !1,
            s._link = null,
            s._isTouchBegin = !1,
            s._touchPoint = null,
            s
        }
        return __extends(i, e),
        i.prototype.initData = function() {
            e.prototype.initData.call(this)
        },
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.setSize(t.Style.SLIDER_WIDTH, t.Style.SLIDER_WIDTH),
            this._textField = new egret.TextField,
            this._textField.multiline = !0,
            this._textField.addEventListener(egret.Event.CHANGE, this.onChangeHdl, this),
            this.addChild(this._textField),
            this.invalidate(),
            this.touchChildren = !1
        },
        i.prototype.onSetScrollText = function(t) {
            t && !this.isAddScollListener ? (this.isAddScollListener = !0, this.touchNonePixel = !0, this.touchEnabled = !0, this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this), this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this)) : !t && this.isAddScollListener && (this.isAddScollListener = !1, this.touchNonePixel = !1, this.touchEnabled = !1, this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this), this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this))
        },
        i.prototype.onTouchBegin = function(t) {
            console.log("onTouchBegin numline=" + this._textField.numLines + ", scollv=" + this._textField.scrollV),
            this._isTouchBegin = !0,
            null == this._touchPoint && (this._touchPoint = new egret.Point),
            this._touchPoint.x = t.stageX,
            this._touchPoint.y = t.stageY
        },
        i.prototype.onTouchEnd = function(t) {
            this._isTouchBegin = !1
        },
        i.prototype.onTouchMove = function(t) {
            this._isTouchBegin && (Math.abs(t.stageY - this._touchPoint.y) >= 3 && (t.stageY - this._touchPoint.y > 0 ? this._textField.scrollV > 1 && (this._textField.scrollV = this._textField.scrollV - 1) : this._textField.scrollV < this._textField.numLines - 1 && (this._textField.scrollV = this._textField.scrollV + 1)), this._touchPoint.x = t.stageX, this._touchPoint.y = t.stageY)
        },
        i.prototype.onTouchCancel = function(t) {
            this._isTouchBegin = !1
        },
        i.prototype.onChangeHdl = function(t) {
            this._text = this._textField.text
        },
        Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                this._text != t && (this._text = t, this._html ? null == this._text ? (this._text = "", this._initFlow = []) : (null == this._htmlTextParser && (this._htmlTextParser = new egret.HtmlTextParser), this._initFlow = this._htmlTextParser.parser(this._text)) : null == this._text && (this._text = ""), this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.append = function(t) {
            var e = this._textField.numLines,
            n = this._textField.scrollV;
            if (this._html) {
                null == this._htmlTextParser && (this._htmlTextParser = new egret.HtmlTextParser);
                var s = this._htmlTextParser.parser(t);
                if (this._follow == i.FOLLOW_TOP) {
                    s.reverse();
                    for (var a = 0; a < s.length; a++) this._textField.textFlow.unshift(s[a]);
                    this._textField.textFlow = this._textField.textFlow,
                    this.draw()
                } else {
                    for (var a = 0; a < s.length; a++) this._textField.appendElement(s[a]);
                    this._textField.textHeight > this.height ? this.onSetScrollText(!0) : this.onSetScrollText(!1)
                }
            } else this._follow == i.FOLLOW_TOP ? (this._text = t + this._text, this.draw()) : (this._textField.appendText(t), this._textField.textHeight > this.height ? this.onSetScrollText(!0) : this.onSetScrollText(!1));
            this._follow != i.FOLLOW_NONE && (this._follow == i.FOLLOW_TOP ? (1 == e || this._followForce) && this.scrollTo(1) : (e == n || this._followForce) && this.scrollTo(this._textField.numLines))
        },
        i.prototype.scrollTo = function(t) {
            this._textField && (this._textField.scrollV = t)
        },
        i.prototype.getTextField = function() {
            return this._textField
        },
        i.prototype.draw = function() {
            e.prototype.draw.call(this),
            null != this._textField && (null != this._fontName && (this._textField.fontFamily = this.fontName), this._color >= 0 && (this._textField.textColor = this._color), this._fontSize > 0 && (this._textField.size = this._fontSize), this._textField.bold = this._bold, this._textField.italic = this._italic, this._html ? (this._initFlow && (this._textField.textFlow = this._initFlow), this._initFlow = null) : this._textField.text = this._text, this._editable ? this._textField.type = egret.TextFieldType.INPUT: this._textField.type = egret.TextFieldType.DYNAMIC, this._textField.maxChars = this._maxChars, t.StringUtil.isUsage(this._restrict) && (this._textField.restrict = this._restrict), t.StringUtil.isUsage(this._inputType) && (this._textField.inputType = this._inputType), this._textField.lineSpacing = this._lineSpacing, this._textField.stroke = this._stroke, this._textField.strokeColor = this._strokeColor, this._textField.width = this.width, this._textField.height = this.height, this._vAlign == egret.VerticalAlign.MIDDLE ? this._textField.y = (this.height - this._textField.height) / 2 : this._vAlign == egret.VerticalAlign.BOTTOM ? this._textField.y = this.height - this._textField.height: this._textField.y = 0, this._textField.textAlign = this._hAlign, this._textField.verticalAlign = this._vAlign, this._textField.textHeight > this.height ? this.onSetScrollText(!0) : this.onSetScrollText(!1))
        },
        Object.defineProperty(i.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(t) {
                this._italic != t && (this._italic = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(t) {
                this._bold != t && (this._bold = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontName", {
            get: function() {
                return this._fontName
            },
            set: function(t) {
                this._fontName != t && (this._fontName = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(t) {
                this._fontSize != t && (this._fontSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "color", {
            get: function() {
                return this._color
            },
            set: function(t) {
                this._color != t && (this._color = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(t) {
                this._lineSpacing != t && (this._lineSpacing = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(t) {
                this._stroke != t && (this._stroke = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(t) {
                this._strokeColor != t && (this._strokeColor = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "hAlign", {
            get: function() {
                return this._hAlign
            },
            set: function(t) {
                this._hAlign != t && (this._hAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "vAlign", {
            get: function() {
                return this._vAlign
            },
            set: function(t) {
                this._vAlign != t && (this._vAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "followForce", {
            get: function() {
                return this._followForce
            },
            set: function(t) {
                this._followForce = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "follow", {
            get: function() {
                return this._follow
            },
            set: function(t) {
                this._follow = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "html", {
            get: function() {
                return this._html
            },
            set: function(t) {
                this._html != t && (this._html = t, this._html ? this.touchChildren = !0 : this.touchChildren = !1, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "editable", {
            get: function() {
                return this._editable
            },
            set: function(t) {
                this._editable != t && (this._editable = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "maxChars", {
            get: function() {
                return this._maxChars
            },
            set: function(t) {
                this._maxChars != t && (this._maxChars = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "restrict", {
            get: function() {
                return this._restrict
            },
            set: function(t) {
                this._restrict != t && (this._restrict = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "inputType", {
            get: function() {
                return this._inputType
            },
            set: function(t) {
                this._inputType != t && (this._inputType = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.FOLLOW_NONE = "none",
        i.FOLLOW_TOP = "top",
        i.FOLLOW_BOTTOM = "bottom",
        i
    } (t.Group);
    t.TextArea = e,
    __reflect(e.prototype, "easy.TextArea")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(i) {
            void 0 === i && (i = !1);
            var n = e.call(this, i) || this;
            return n._textField = null,
            n._text = "",
            n._password = !1,
            n._fontName = t.Style.fontName,
            n._fontSize = t.Style.fontSize,
            n._fontColor = t.Style.TEXTINPUT_COLOR,
            n._hAlign = egret.HorizontalAlign.LEFT,
            n._vAlign = egret.VerticalAlign.MIDDLE,
            n._bold = !1,
            n._italic = !1,
            n._lineSpacing = 0,
            n._multiline = !1,
            n._stroke = 0,
            n._strokeColor = 0,
            n._wordWrap = !0,
            n._maxChars = 0,
            n._restrict = null,
            n._inputType = null,
            n
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.setSize(t.Style.TEXTINPUT_WIDTH, t.Style.TEXTINPUT_HEIGHT),
            this.bgColor = t.Style.INPUT_TEXT,
            this.clip = !1,
            this.touchEnabled = !0,
            this._textField = new egret.TextField,
            this._textField.height = this.height,
            this._textField.width = this.width,
            this._textField.displayAsPassword = !1,
            this._textField.type = egret.TextFieldType.INPUT,
            this._textField.addEventListener(egret.Event.CHANGE, this.onChangeHdl, this),
            this._textField.touchEnabled = !0,
            this.addChild(this._textField)
        },
        i.prototype.onChangeHdl = function(t) {
            this._text = this._textField.text,
            this.invalidate()
        },
        i.prototype.getTextField = function() {
            return this._textField
        },
        i.prototype.draw = function() {
            e.prototype.draw.call(this),
            this._textField && (null != this._fontName && (this._textField.fontFamily = this._fontName), this._fontColor >= 0 && (this._textField.textColor = this._fontColor), this._fontSize > 0 && (this._textField.size = this._fontSize), this._textField.textAlign = this._hAlign, this._textField.verticalAlign = this._vAlign, this._textField.bold = this._bold, this._textField.italic = this._italic, this._textField.multiline = this._multiline, this._textField.lineSpacing = this._lineSpacing, this._textField.stroke = this._stroke, this._textField.strokeColor = this._strokeColor, this._textField.width = this.width, this._textField.height = this.height, this._textField.displayAsPassword = this._password, this._textField.text = this._text, this._textField.wordWrap = this._wordWrap, this._textField.maxChars = this._maxChars, t.StringUtil.isUsage(this._restrict) && (this._textField.restrict = this._restrict), t.StringUtil.isUsage(this._inputType) && (this._textField.inputType = this._inputType))
        },
        Object.defineProperty(i.prototype, "fontName", {
            get: function() {
                return this._fontName
            },
            set: function(t) {
                this._fontName != t && (this._fontName = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "password", {
            get: function() {
                return this._password
            },
            set: function(t) {
                this._password != t && (this._password = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(t) {
                this._fontSize != t && (this._fontSize = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fontColor", {
            get: function() {
                return this._fontColor
            },
            set: function(t) {
                this._fontColor != t && (this._fontColor = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                this._text != t && (this._text = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(t) {
                this._lineSpacing != t && (this._lineSpacing = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "multiline", {
            get: function() {
                return this._multiline
            },
            set: function(t) {
                this._multiline != t && (this._multiline = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "wordWrap", {
            get: function() {
                return this._wordWrap
            },
            set: function(t) {
                this._wordWrap != t && (this._wordWrap = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(t) {
                this._stroke != t && (this._stroke = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(t) {
                this._strokeColor != t && (this._strokeColor = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "hAlign", {
            get: function() {
                return this._hAlign
            },
            set: function(t) {
                this._hAlign != t && (this._hAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "vAlign", {
            get: function() {
                return this._vAlign
            },
            set: function(t) {
                this._vAlign != t && (this._vAlign = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.setFocus = function() {
            this._textField && this._textField.setFocus()
        },
        Object.defineProperty(i.prototype, "maxChars", {
            get: function() {
                return this._maxChars
            },
            set: function(t) {
                this._maxChars != t && (this._maxChars = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "restrict", {
            get: function() {
                return this._restrict
            },
            set: function(t) {
                this._restrict != t && (this._restrict = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "inputType", {
            get: function() {
                return this._inputType
            },
            set: function(t) {
                this._inputType != t && (this._inputType = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (t.Group);
    t.TextInput = e,
    __reflect(e.prototype, "easy.TextInput")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = !1);
            var n = e.call(this, t) || this;
            return n._video = null,
            n._source = null,
            n._poster = null,
            n._imgPoster = null,
            n._valume = -1,
            n._fullscreen = !1,
            n._state = i.STATE_STOP,
            n._autoplay = !1,
            n._showBtnPlay = !0,
            n._btnPlayTexture = null,
            n._btnPlayTween = null,
            n._btnPlay = null,
            n._loop = !1,
            n._ioerror = 0,
            n
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.bgColor = 0,
            this.border = !1,
            this.setSize(t.Style.VIDEO_DEFAULT_WIDTH, t.Style.VIDEO_DEFAULT_HEIGHT),
            this._video = new egret.Video,
            this.addChild(this._video),
            this._video.addEventListener(egret.Event.COMPLETE, this.onEventComplete, this),
            this._video.addEventListener(egret.Event.ENDED, this.onEventEnd, this),
            this._video.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onEventError, this),
            null != this._source && (this._video.src = this._source),
            -1 != this._valume && (this._video.volume = this._valume / 100),
            null != this._poster && (this._video.poster = this._poster),
            this._video.fullscreen = this._fullscreen,
            this._autoplay && this.play()
        },
        i.prototype.onEventComplete = function(t) {
            this._ioerror = 0
        },
        i.prototype.onEventEnd = function(t) {
            this._ioerror = 0
        },
        i.prototype.onEventError = function(t) {
            this._video && this.state == i.STATE_PAUSE && this._ioerror < 3 && (this._video.parent && this._video.parent.removeChild(this._video), this._video = new egret.Video, this.addChildAt(this._video, 1), this._video.addEventListener(egret.Event.COMPLETE, this.onEventComplete, this), this._video.addEventListener(egret.Event.ENDED, this.onEventEnd, this), this._video.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onEventError, this), this._video.width = this.width, this._video.height = this.height, this._ioerror++, this._video.src = this._source, this._video.play(0, this._loop))
        },
        i.prototype.onShowBtnPlay = function() {
            if (this._showBtnPlay) {
                if (null == this._btnPlayTexture) {
                    var e = 58,
                    i = 60,
                    n = 80,
                    s = 72,
                    a = 73,
                    r = 70,
                    o = 70,
                    h = new egret.Shape;
                    h.graphics.beginFill(7970006, .3),
                    h.graphics.lineStyle(2, 16777215, .4),
                    h.graphics.drawCircle(s, a, e + 2),
                    h.graphics.endFill(),
                    h.graphics.beginFill(7970006),
                    h.graphics.lineStyle(1, 0, .5),
                    h.graphics.drawCircle(r, o, i),
                    h.graphics.endFill(),
                    h.graphics.beginFill(2637915),
                    h.graphics.lineStyle(1, 532286),
                    h.graphics.moveTo(r - Math.sqrt(3) / 6 * n, o - n / 2),
                    h.graphics.lineTo(r + Math.sqrt(3) / 3 * n, o),
                    h.graphics.lineTo(r - Math.sqrt(3) / 6 * n, o + n / 2),
                    h.graphics.lineTo(r - Math.sqrt(3) / 6 * n, o - n / 2),
                    h.graphics.endFill();
                    var l = new egret.RenderTexture;
                    l.drawToTexture(h),
                    this._btnPlayTexture = l
                }
                null == this._btnPlay && (this._btnPlay = new t.Button, this._btnPlay.statesLength = 1, this._btnPlay.texture = this._btnPlayTexture, this._btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapPlay, this)),
                this.addChild(this._btnPlay),
                this._btnPlay.width = this._btnPlayTexture.textureWidth,
                this._btnPlay.height = this._btnPlayTexture.textureHeight,
                this._btnPlay.x = this.cx - this._btnPlay.cx,
                this._btnPlay.y = this.cy - this._btnPlay.cy,
                null == this._btnPlayTween && (this._btnPlayTween = egret.Tween.get(this._btnPlay, {
                    loop: !0
                }).to({
                    alpha: .5
                },
                3e3).wait(1e3).to({
                    alpha: 1
                },
                3e3).wait(1e3)),
                this._btnPlayTween.setPaused(!1),
                this._imgPoster && this._imgPoster.parent && (this._imgPoster.visible = !0)
            }
        },
        i.prototype.onHiddenBtnPlay = function() {
            this._btnPlay && (this._btnPlay.removeFromParent(), this._btnPlayTween.setPaused(!0))
        },
        i.prototype.onVideoComplete = function(e) {
            this._video && (this._video.position = 0, t.MyEvent.sendEvent(t.EventType.VIDEO_END), this._video.removeEventListener(egret.Event.ENDED, this.onVideoComplete, this)),
            this.onShowBtnPlay()
        },
        i.prototype.onTouchTapPlay = function() {
            this.play()
        },
        i.prototype.playOrStopVideo = function(t) {
            this._video && (this._state == i.STATE_PLAYING ? this.pause() : this.play())
        },
        Object.defineProperty(i.prototype, "state", {
            get: function() {
                return this._state
            },
            set: function(t) {
                this._state != t && (this._state = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "source", {
            get: function() {
                return this._source
            },
            set: function(t) {
                this._source != t && (this._source = t, this._video && (this._video.src = this._source))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "poster", {
            get: function() {
                return this._poster
            },
            set: function(t) {
                this._poster != t && (this._poster = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "valume", {
            get: function() {
                return this._valume
            },
            set: function(t) {
                this._valume != t && (this._valume = t, this._video && (this._video.volume = this._valume / 100))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fullscreen", {
            get: function() {
                return this._fullscreen
            },
            set: function(t) {
                this._fullscreen != t && (this._fullscreen = t, this._video && (this._video.fullscreen = this._fullscreen))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "autoplay", {
            get: function() {
                return this._autoplay
            },
            set: function(t) {
                this._autoplay != t && (this._autoplay = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "loop", {
            get: function() {
                return this._loop
            },
            set: function(t) {
                this._loop != t && (this._loop = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "showBtnPlay", {
            get: function() {
                return this._showBtnPlay
            },
            set: function(t) {
                this._showBtnPlay != t && (this._showBtnPlay = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "btnPlayTexture", {
            get: function() {
                return this._btnPlayTexture
            },
            set: function(t) {
                this._btnPlayTexture != t && (this._btnPlayTexture = t, this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.play = function(t) {
            void 0 === t && (t = 0),
            this._video && this._source && (this._state = i.STATE_PLAYING, this.onHiddenBtnPlay(), 0 == t && (t = this._video.position), this._video.addEventListener(egret.Event.ENDED, this.onVideoComplete, this), this._video.play(t, this._loop), this._imgPoster && this._imgPoster.parent && (this._imgPoster.visible = !1))
        },
        i.prototype.load = function(t) {
            this._source = t,
            this._video && this._video.load(this.source)
        },
        i.prototype.close = function() {
            this._state = i.STATE_STOP,
            this._video && (this._video.close(), this.onShowBtnPlay()),
            this._imgPoster && this._imgPoster.parent && (this._imgPoster.visible = !0)
        },
        i.prototype.pause = function() {
            this._state = i.STATE_STOP,
            this._video && (this._state = i.STATE_PAUSE, this._video.pause(), this.onShowBtnPlay())
        },
        i.prototype.draw = function() {
            e.prototype.draw.call(this),
            null != this._video && (this._showBtnPlay && this._state != i.STATE_PLAYING && this.onShowBtnPlay(), t.StringUtil.isUsage(this._poster) && (null == this._imgPoster && (this._imgPoster = new egret.Bitmap, this.addChildAt(this._imgPoster, this.getChildIndex(this._btnPlay))), t.ResManager.getRes(this._poster) ? (this._imgPoster.texture = t.ResManager.getRes(this._poster), this._imgPoster.texture && (this._imgPoster.x = this.cx - this._imgPoster.width / 2, this._imgPoster.y = this.cy - this._imgPoster.height / 2)) : t.EventManager.addEventListener(t.EventType.RESOURCE_DOWNLOADED, this.onDownloadedPoster, this)), this._video.width = this.width, this._video.height = this.height, this._btnPlay && this._btnPlay.texture != this._btnPlayTexture && (this._btnPlay.texture = this._btnPlayTexture))
        },
        i.prototype.onDownloadedPoster = function(e) {
            t.ResManager.getRes(this._poster) && (t.EventManager.removeEventListener(t.EventType.RESOURCE_DOWNLOADED, this.onDownloadedPoster, this), this._imgPoster.texture = t.ResManager.getRes(this._poster), this._imgPoster.texture && (this._imgPoster.x = this.cx - this._imgPoster.width / 2, this._imgPoster.y = this.cy - this._imgPoster.height / 2))
        },
        i.STATE_PLAYING = "playing",
        i.STATE_PAUSE = "pause",
        i.STATE_STOP = "stop",
        i
    } (t.Group);
    t.Video = e,
    __reflect(e.prototype, "easy.Video")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.getDateDiff = function(e, i) {
            var n = t.getDateDiffArr(e, i),
            s = "";
            return n[0] > 0 && (s += n[0] + "天"),
            n[1] > 0 && (s += n[1] + "小时"),
            n[2] > 0 && (s += n[2] + "分"),
            n[3] > 0 && (s += n[3] + "秒"),
            s
        },
        t.getDateDiffArr = function(t, e) {
            var i = Math.abs(e - t),
            n = Math.floor(i / 864e5),
            s = i % 864e5,
            a = Math.floor(s / 36e5),
            r = s % 36e5,
            o = Math.floor(r / 6e4),
            h = r % 6e4,
            l = Math.round(h / 1e3);
            return [n, a, o, l]
        },
        t.formatTime = function(t, e) {
            void 0 === e && (e = ":");
            var i = "",
            n = Math.floor(t / 60);
            i = 10 > n ? "0" + n: "" + n,
            i += e;
            var s = Math.floor(t % 60);
            return i += 10 > s ? "0" + s: "" + s
        },
        t.dateFormat = function(t, e) {
            var i = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in i) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
            return e
        },
        t
    } ();
    t.DateUtil = e,
    __reflect(e.prototype, "easy.DateUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return Object.defineProperty(e, "log", {
            get: function() {
                return this._log
            },
            set: function(i) {
                t.GlobalSetting.DEV_MODEL && (e._log += i + "\n", e.callbackFunc && this.callbackFunc.call(null))
            },
            enumerable: !0,
            configurable: !0
        }),
        e.refresh = function() {
            e.callbackFunc && this.callbackFunc.call(null)
        },
        e.clean = function() {
            t.GlobalSetting.DEV_MODEL && (this._log = "", this.callbackFunc && this.callbackFunc.call(null))
        },
        e._log = "",
        e.callbackFunc = null,
        e
    } ();
    t.Debug = e,
    __reflect(e.prototype, "easy.Debug")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.dump = function(t) {
            var e = t.position,
            i = "",
            n = "";
            t.position = 0;
            for (var s = 0; s < t.length; s++) {
                s % 16 == 0 && (i += ("0000" + s.toString(16)).substr( - 4, 4) + " "),
                s % 8 == 0 && (i += " ");
                var a = t.readByte();
                i += ("0" + a.toString(16)).substr( - 2, 2) + " ",
                n += 32 > a || a > 126 ? ".": String.fromCharCode(a),
                ((s + 1) % 16 == 0 || s == t.length - 1) && (i += " |" + n + "|\r\n", n = "")
            }
            return t.position = e,
            i
        },
        t
    } ();
    t.HexUtil = e,
    __reflect(e.prototype, "easy.HexUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.testHitBitmap = function(t, e) {
            var i = t.getBounds(),
            n = e.getBounds();
            return i.intersects(n) || n.intersects(i)
        },
        t.testHitRect = function(t, e) {
            return t.intersects(e)
        },
        t.testHit = function(t, e) {
            if (!t.parent || !e.parent) return ! 1;
            var i = t.x,
            n = t.y,
            s = t.getBounds(),
            a = new egret.Point;
            t.parent.localToGlobal(i, n, a),
            s.x = a.x,
            s.y = a.y,
            i = e.x,
            n = e.y;
            var r = e.getBounds();
            return e.parent.localToGlobal(i, n, a),
            r.x = a.x,
            r.y = a.y,
            s.intersects(r)
        },
        t._shape = null,
        t
    } ();
    t.HitTestUtil = e,
    __reflect(e.prototype, "easy.HitTestUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.postData = function(i, n, s, a) {
            var r;
            if ( - 1 != i.indexOf("game_start") || -1 != i.indexOf("submit_step") || -1 != i.indexOf("submit_score") || -1 != i.indexOf("submit_info")) {
                var o = (new Date).getTime(),
                h = Math.floor(o / 1e3 - scanNational.GameData.systemtimetxt);
                r = n + "&result=" + scanNational.GameData.md5.hex_md5(scanNational.GameData.userInfo.token + h),
                console.log(scanNational.GameData.userInfo.token, h, scanNational.GameData.systemtimetxt, o / 1e3, r)
            } else r = n;
            var l = new egret.URLRequest(i),
            u = new egret.URLLoader;
            l.method = egret.URLRequestMethod.POST,
            t.StringUtil.isUsage(r) && (l.data = new egret.URLVariables(r)),
            u.addEventListener(egret.Event.COMPLETE,
            function(t) {
                var e = t.target;
                s.call(a, e.data)
            },
            e),
            scanNational.GameData.header1 && l.requestHeaders.push(scanNational.GameData.header1),
            u.load(l)
        },
        e.getData = function(i, n, s, a) {
            var r = new egret.URLRequest(i),
            o = new egret.URLLoader;
            r.method = egret.URLRequestMethod.GET,
            t.StringUtil.isUsage(n) && (r.data = new egret.URLVariables(n)),
            o.addEventListener(egret.Event.COMPLETE,
            function(t) {
                var e = t.target;
                s.call(a, e.data)
            },
            e),
            scanNational.GameData.header1 && r.requestHeaders.push(scanNational.GameData.header1),
            o.load(r)
        },
        e
    } ();
    t.HttpUtil = e,
    __reflect(e.prototype, "easy.HttpUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.set = function(t, i) {
            return egret.localStorage.setItem(e.getStorageName() + t, i)
        },
        e.setNumber = function(t, i) {
            e.set(t, "" + i)
        },
        e.setBoolean = function(t, i) {
            e.set(t, i ? "1": "0")
        },
        e.get = function(t) {
            return egret.localStorage.getItem(e.getStorageName() + t)
        },
        e.getNumber = function(i) {
            var n = egret.localStorage.getItem(e.getStorageName() + i);
            if (t.StringUtil.isUsage(n)) {
                var s = parseFloat(n);
                if (!isNaN(s)) return s
            }
            return 0
        },
        e.getInt = function(i) {
            var n = egret.localStorage.getItem(e.getStorageName() + i);
            if (t.StringUtil.isUsage(n)) {
                var s = parseInt(n);
                if (!isNaN(s)) return s
            }
            return 0
        },
        e.getBoolean = function(i) {
            var n = egret.localStorage.getItem(e.getStorageName() + i);
            return ! t.StringUtil.isUsage(n) || "1" != n && "true" != n ? !1 : !0
        },
        e.remvoe = function(t) {
            egret.localStorage.removeItem(e.getStorageName() + t)
        },
        e.getStorageName = function() {
            return "" == e._storageName && (e._storageName = ("" != t.ResManager._projectName ? t.ResManager._projectName: t.GlobalSetting.APP_NAME) + "_"),
            e._storageName
        },
        e._storageName = "",
        e
    } ();
    t.LocalStorage = e,
    __reflect(e.prototype, "easy.LocalStorage")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.getCrossPoint = function(t, e, i, n) {
            var s = 0,
            a = 0,
            r = 0,
            o = 0,
            h = e % 180 == 0 ? 1 : e % 90 == 0 ? -1 : 0,
            l = n % 180 == 0 ? 1 : n % 90 == 0 ? -1 : 0;
            0 == h && (s = Math.tan(e * Math.PI / 180)),
            0 == l && (a = Math.tan(n * Math.PI / 180));
            var u = Math.abs(e) + Math.abs(n);
            if (180 == u && 0 > e * n || Math.floor(e) == Math.floor(n)) return null;
            if (0 == h && 0 == l) r = (s * t.x - t.y - (a * i.x - i.y)) / (s - a),
            o = (s * i.y - i.x * s * a - (a * t.y - t.x * s * a)) / (s - a);
            else if (0 == h && 1 == l) o = i.y,
            r = (o - t.y) / s + t.x;
            else if (0 == h && -1 == l) r = i.x,
            o = (r - t.x) * s + t.y;
            else if (1 == h && 0 == l) o = t.y,
            r = (o - i.y) / a + i.x;
            else if (1 == h && -1 == l) o = t.y,
            r = i.x;
            else if ( - 1 == h && 0 == l) r = t.x,
            o = (r - i.x) * a + i.y;
            else {
                if ( - 1 != h || 1 != l) return null;
                r = t.x,
                o = i.y
            }
            return new egret.Point(100 * r / 1e3, 1e3 * o / 1e3)
        },
        t.getAngle = function(t, e) {
            var i = e.x - t.x,
            n = e.y - t.y,
            s = 180 * Math.atan2(n, i) / Math.PI;
            return s
        },
        t.getPos = function(t, e) {
            var i = t.x - e.x,
            n = t.y - e.y,
            s = Math.sqrt(i * i + n * n);
            return s
        },
        t.lineFunc = function(t, e) {
            if (t.x != e.x) {
                var i = (t.y - e.y) / (t.x - e.x),
                n = t.y - (t.y - e.y) / (t.x - e.x) * t.x;
                return new egret.Point(i, n)
            }
            return null
        },
        t.random = function(t, e, i) {
            return void 0 === i && (i = !0),
            i ? Math.floor(t + (e - t) * Math.random()) : t + (e - t) * Math.random()
        },
        t
    } ();
    t.MathUtil = e,
    __reflect(e.prototype, "easy.MathUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.getAnimateData = function(i) {
            return e._animiateDataDict[i] ? e._animiateDataDict[i] : t.ResManager.isGroupLoaded(i + "_animate_group") ? (e._animiateDataDict[i] = new t.AnimateData(i), e._animiateDataDict[i]) : (e.loadAnimate(i), null)
        },
        e.hasAnimateData = function(i) {
            return e._animiateDataDict[i] ? !0 : t.ResManager.isGroupLoaded(i + "_animate_group") ? !0 : !1
        },
        e.loadAnimate = function(i) {
            t.StringUtil.isUsage(i) && (e.names_down.indexOf(i) >= 0 || t.ResManager.isGroupLoaded(i + "_animate_group") || (e.waiting_groups.indexOf(i) < 0 && e.waiting_groups.push(i), e.waiting_names.indexOf(i) < 0 && e.waiting_names.push(i), e.names_down.push(i), t.HeartBeat.addListener(e, e.onHeartBeatCheckLoadedFile, 60)))
        },
        e.fireDownAnimate = function(i) {
            t.GlobalSetting.isNative() ? t.ResManager.loadConfig(t.GlobalSetting.CDN_RES + "assets/animate/" + i + "_loader.json", [i + "_animate_group"], e.onLoadingGroupJosnFileComplete, e) : t.ResManager.loadConfig(t.GlobalSetting.CDN_RES + "assets/animate/" + i + "_loader.json" + t.GlobalSetting.VERSION_RES, [i + "_animate_group"], e.onLoadingGroupJosnFileComplete, e)
        },
        e.onLoadingGroupJosnFileComplete = function(i) {
            if (t.StringUtil.isUsage(i) && i.indexOf("_animate_group") >= 0) {
                var i = i.substring(0, i.indexOf("_animate_group"));
                e.waiting_names.indexOf(i) >= 0 && e.waiting_names.splice(e.waiting_names.indexOf(i), 1),
                e.waiting_groups.indexOf(i) >= 0 && e.waiting_groups.splice(e.waiting_groups.indexOf(i), 1);
                var n = t.MyEvent.getEvent(t.EventType.RESOURCE_DOWNLOADED);
                n.addItem("name", i),
                n.send()
            }
            e.onHeartBeatCheckLoadedFile()
        },
        e.onHeartBeatCheckLoadedFile = function() {
            if (0 == e.waiting_groups.length && 0 == e.waiting_names.length && t.HeartBeat.removeListener(e, e.onHeartBeatCheckLoadedFile), e.waiting_groups.length > 0 && e.waiting_names.length > 0) {
                for (var i = [], n = e.waiting_names.length - 1; n >= 0; n--) e.waiting_groups.indexOf(e.waiting_names[n]) >= 0 && (i.push(e.waiting_names[n]), e.waiting_names.splice(n, 1), e.waiting_groups.splice(e.waiting_groups.indexOf(e.waiting_names[n]), 1));
                for (; i.length > 0;) e.fireDownAnimate(i.pop())
            }
        },
        e._animiateDataDict = {},
        e.waiting_groups = [],
        e.waiting_names = [],
        e.names_down = [],
        e
    } ();
    t.AnimateManager = e,
    __reflect(e.prototype, "easy.AnimateManager")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.copyValueToTarget = function(t, e) {
            if (console.log("src=" + egret.getQualifiedClassName(t) + ", target=" + egret.getQualifiedClassName(e)), t && e) for (var i in t) e.hasOwnProperty(i) && (e[i] = t[i], console.log("1111key=" + i + ", value=" + t[i]))
        },
        t.functionExist = function(t, e) {
            return t && "function" == typeof t[e] ? !0 : !1
        },
        t
    } ();
    t.ObjectUtil = e,
    __reflect(e.prototype, "easy.ObjectUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {
            this.startPt = null,
            this.endPt = null,
            this.vertexPt = null,
            this.a = 0,
            this.b = 0,
            this.c = 0
        }
        return e.prototype.getInstance = function() {
            return null == e._instance && (e._instance = new t.ParabolaUtil),
            e._instance
        },
        e.prototype.init = function(t, e, i) {
            void 0 === i && (i = 240),
            this.startPt = t,
            this.endPt = e,
            this.vertexPt = new egret.Point(this.startPt.x + (this.endPt.x - this.startPt.x) / 2, this.endPt.y - i);
            var n = this.startPt.x,
            s = this.endPt.x,
            a = this.vertexPt.x,
            r = this.startPt.y,
            o = this.endPt.y,
            h = this.vertexPt.y;
            this.b = ((r - h) * (n * n - s * s) - (r - o) * (n * n - a * a)) / ((n - a) * (n * n - s * s) - (n - s) * (n * n - a * a)),
            this.a = (r - o - this.b * (n - s)) / (n * n - s * s),
            this.c = r - this.a * n * n - this.b * n
        },
        e.prototype.getY = function(t) {
            return this.a * t * t + this.b * t + this.c
        },
        e._instance = null,
        e
    } ();
    t.ParabolaUtil = e,
    __reflect(e.prototype, "easy.ParabolaUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e(e, i, n) {
            void 0 === e && (e = 5),
            void 0 === i && (i = 2),
            void 0 === n && (n = [45, 75, 90, 95]),
            this._totalTime = 10,
            this._heartBeat = 1,
            this._phaseCount = 4,
            this._arrayLimitNode = [50, 65, 80, 95],
            this._arrayLimitTime = [],
            this._frameNumber = t.GlobalSetting.FRAME_RATE,
            this._increment = 0,
            this._decreaseFactor = 1.5,
            this._firstRefresh = !1,
            this._arrayIndex = 0,
            this._timeCount = 0,
            this._totalCurrentLoad = 0,
            this._currentLoad = 0,
            this._unitTime = 0,
            this._progressSpeedUp = !1,
            this._speedDataRefresh = !1,
            this._openSpeedDown = !1,
            this._totalTime = e,
            this._heartBeat = i,
            this._arrayLimitNode = n,
            this._phaseCount = n.length,
            this.reset()
        }
        return e.prototype.progress = function() {
            return this._progressSpeedUp && !this._speedDataRefresh && (this.speedUp(), this._speedDataRefresh = !0),
            this._timeCount++,
            this._timeCount > this._arrayLimitTime[this._arrayIndex] && (this._arrayIndex++, this._timeCount = 0),
            this._arrayIndex >= this._arrayLimitTime.length ? this._progressSpeedUp ? 100 : 99 : (this._arrayIndex > 0 ? this._increment = (this._arrayLimitNode[this._arrayIndex] - this._arrayLimitNode[this._arrayIndex - 1]) * (Math.sin(Math.PI / 2 * (this._timeCount / this._arrayLimitTime[this._arrayIndex])) - Math.sin(Math.PI / 2 * ((this._timeCount - 1) / this._arrayLimitTime[this._arrayIndex]))) : this._increment = this._arrayLimitNode[this._arrayIndex] * (Math.sin(Math.PI / 2 * (this._timeCount / this._arrayLimitTime[this._arrayIndex])) - Math.sin(Math.PI / 2 * ((this._timeCount - 1) / this._arrayLimitTime[this._arrayIndex]))), this._totalCurrentLoad += this._increment, this._currentLoad = Math.floor(this._totalCurrentLoad), this._currentLoad >= 95 && !this._openSpeedDown && !this._progressSpeedUp && (this.speedDown(), this._openSpeedDown = !0), this._currentLoad >= 100 && (this._currentLoad = 100), this._currentLoad)
        },
        e.prototype.speedUp = function() {
            this._timeCount = 0,
            this._arrayIndex = this._arrayLimitNode.length - 1,
            this._arrayLimitNode[this._arrayIndex - 1] = this._currentLoad,
            this._openSpeedDown ? this._arrayLimitTime[this._arrayIndex] = 2 : this._arrayLimitTime[this._arrayIndex] = 2
        },
        e.prototype.speedDown = function() {
            this._timeCount = 0,
            this._arrayIndex = this._arrayLimitNode.length - 1,
            this._arrayLimitNode[this._arrayIndex - 1] = this._currentLoad,
            this._arrayLimitNode[this._arrayIndex] = 99,
            this._arrayLimitTime[this._arrayIndex] = 8 * t.GlobalSetting.FRAME_RATE / this._heartBeat
        },
        e.prototype.reset = function() {
            this._progressSpeedUp = !1,
            this._openSpeedDown = !1,
            this._speedDataRefresh = !1,
            this._firstRefresh = !0,
            this._timeCount = 0,
            this._totalCurrentLoad = 0,
            this._currentLoad = 0,
            this._increment = 0,
            this._unitTime = 0,
            this._arrayIndex = 0;
            var t = 0,
            e = 0;
            this._arrayLimitTime = [];
            for (var i = 0; i < this._phaseCount; i++) t += Math.pow(this._decreaseFactor, i);
            this._unitTime = Math.floor(this._totalTime * this._frameNumber / t / this._heartBeat);
            for (var n = 1; n < this._phaseCount; n++) {
                var s = this._unitTime * n;
                e += s,
                this._arrayLimitTime.push(s)
            }
            var a = (this._totalTime * this._frameNumber - e) / this._heartBeat;
            this._arrayLimitTime.push(a)
        },
        e
    } ();
    t.ProgressCalculate = e,
    __reflect(e.prototype, "easy.ProgressCalculate")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.shake = function(e, i, n, s, a, r, o, h, l) {
            void 0 === r && (r = 0),
            void 0 === o && (o = 0),
            void 0 === h && (h = 2),
            void 0 === l && (l = 2);
            var u = {};
            t.SC_SHAKE_DATA_DIC.hasOwnProperty(e) ? u = t.SC_SHAKE_DATA_DIC[e] : t.SC_SHAKE_DATA_DIC[e] = u,
            u.disObj = e,
            u.duration = i,
            u.amplitude = n,
            u.directionModel = s,
            u.direction = a,
            u.recoverX = r,
            u.recoverY = o,
            u.shakeOffsetX = h,
            u.shakeOffsetY = l,
            u.startShakeTime = egret.getTimer(),
            u.vx = u.vx ? u.vx: 0,
            u.vy = u.vy ? u.vy: 0,
            e.removeEventListener(egret.Event.ENTER_FRAME, t.onEnterFrameHandler, t),
            e.addEventListener(egret.Event.ENTER_FRAME, t.onEnterFrameHandler, t)
        },
        t.clamp = function(t, e, i) {
            return e > t ? t = e: t > i && (t = i),
            t
        },
        t.onEnterFrameHandler = function(e) {
            var i = e.target,
            n = t.SC_SHAKE_DATA_DIC[i],
            s = n.duration,
            a = n.amplitude,
            r = n.directionModel,
            o = n.direction,
            h = n.recoverX,
            l = n.recoverY,
            u = n.shakeOffsetX,
            c = n.shakeOffsetY,
            g = n.vx,
            d = n.vy;
            if (egret.getTimer() - n.startShakeTime < s) {
                var p, _ = Math.random() * u - u / 2,
                m = Math.random() * c - c / 2;
                p = r == t.SpecialDirecitonShake ? egret.Point.polar(a, o * t.AngleUnit) : egret.Point.polar(a, 360 * Math.random() * t.AngleUnit);
                var f = Math.random() * p.x + p.x / 2,
                y = Math.random() * p.y + p.y / 2;
                g += (40 * f + 120 * g) / 160,
                d += (40 * y + 120 * d) / 160,
                g += _,
                d += m;
                var b = Math.abs(p.x / 2),
                v = Math.abs(p.y / 2);
                g = t.clamp(g, -b, b),
                d = t.clamp(d, -v, v),
                i.x = h + g,
                i.y = l + d
            }
            var w = h - i.x,
            T = l - i.y;
            if (g += 3 * w, d += 3 * T, g *= .3, d *= .3, i.x += g, i.y += d, Math.abs(w) < .1 && (i.x = h), Math.abs(T) < .1 && (i.y = l), 0 == w && 0 == T) {
                var E = t.SC_SHAKE_DATA_DIC[i];
                delete t.SC_SHAKE_DATA_DIC[i],
                E = null,
                i.removeEventListener(egret.Event.ENTER_FRAME, t.onEnterFrameHandler, t)
            }
            n.vx = g,
            n.vy = d
        },
        t.RandomDirecitonShake = "RandomDirecitonShake",
        t.SpecialDirecitonShake = "SpecialDirecitonShake",
        t.AngleUnit = Math.PI / 180,
        t.DegreeUnit = 180 / Math.PI,
        t.SC_SHAKE_DATA_DIC = {},
        t
    } ();
    t.ShakeUtil = e,
    __reflect(e.prototype, "easy.ShakeUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.play = function(i, n, s, a, r) {
            if (void 0 === n && (n = 0), void 0 === s && (s = 1), void 0 === a && (a = null), void 0 === r && (r = null), t.GlobalSetting.VOLUME_OPEN && t.StringUtil.isUsage(i)) {
                if (0 == s && e._soundDict[i]) return e._soundDict[i];
                var o = RES.getRes(i);
                if (!o && t.ResManager.hasRes(i) && (o = t.ResManager.getRes(i)), o) {
                    var h = o.play(n, s);
                    return e._soundDict[i] = {
                        channel: h,
                        loops: 0 >= s,
                        num: s,
                        func: a,
                        thisObj: r
                    },
                    h.addEventListener(egret.Event.SOUND_COMPLETE, e.onSoundComplete, e),
                    a && r && h.addEventListener(egret.Event.SOUND_COMPLETE, a, r),
                    h
                }
            }
            return null
        },
        e.volume = function(i, n) {
            if (t.StringUtil.isUsage(i) && e._soundDict[i]) {
                var s = e._soundDict[i];
                s.channel && (s.channel.volume = n)
            }
        },
        e.onSoundComplete = function(i) {
            var n = i.currentTarget,
            s = null;
            for (var a in e._soundDict) {
                s = e._soundDict[a];
                var r = t.MyEvent.getEvent(t.EventType.SOUND_COMPLETE);
                if (r.addItem("name", a), r.send(), s.channel == n) {
                    s.loops || (s.num--, 0 == s.num && n.hasEventListener(egret.Event.SOUND_COMPLETE) && (n.removeEventListener(egret.Event.SOUND_COMPLETE, e.onSoundComplete, e), delete e._soundDict[a], s.func && s.thisObj && n.removeEventListener(egret.Event.SOUND_COMPLETE, s.func, s.thisObj), s.func = null, s.thisObj = null, s.channel = null, delete e._soundDict[a]));
                    break
                }
            }
        },
        e.stop = function(i) {
            if (t.StringUtil.isUsage(i) && e._soundDict[i]) {
                var n = e._soundDict[i];
                if (n.channel) {
                    n.channel.hasEventListener(egret.Event.SOUND_COMPLETE) && (n.channel.removeEventListener(egret.Event.SOUND_COMPLETE, e.onSoundComplete, e), n.func && n.thisObj && n.channel.removeEventListener(egret.Event.SOUND_COMPLETE, n.func, n.thisObj)),
                    n.channel.stop(),
                    n.func = null,
                    n.thisObj = null,
                    n.channel = null;
                    var s = t.MyEvent.getEvent(t.EventType.SOUND_STOP);
                    s.addItem("name", i),
                    s.send(),
                    delete e._soundDict[i]
                }
            }
        },
        e._soundDict = {},
        e
    } ();
    t.Sound = e,
    __reflect(e.prototype, "easy.Sound")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.drawErase = function(t, e) {
            var i = new egret.DisplayObjectContainer;
            e.blendMode = egret.BlendMode.ERASE,
            i.addChild(t),
            i.addChild(e);
            var n = new egret.RenderTexture;
            return n.drawToTexture(i),
            i.removeChildren(),
            n
        },
        e.erase = function(t, e, i, n, s) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 5),
            void 0 === n && (n = 5),
            void 0 === s && (s = 40),
            this._eraseShape = new egret.Shape,
            this._sendEraseChangeArray = [95, 90, 85, 80, 70, 60, 50],
            this._hasComplete = !1,
            this._eraseObject = t,
            this._eraseTexture = t.texture,
            this._eraseLineWeight = s,
            this._gapX = i,
            this._gapY = n,
            e && (this._limitCheckNum = e),
            t.touchEnabled = !0,
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginDraw, this),
            t.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveDraw, this),
            t.addEventListener(egret.TouchEvent.TOUCH_END, this.onToucchEndDrawCircle, this),
            this.createAllRect()
        },
        e.createAllRect = function() {
            this._allCheckRect = [],
            this._hasCheck = 0;
            var t = Math.floor(this._eraseObject.width / this._gapX),
            e = Math.floor(this._eraseObject.height / this._gapY);
            this._totalXNum = t,
            this._totalYNum = e,
            this._totalRect = t * e;
            for (var i = 0; e > i; i++) {
                for (var n = [], s = 0; t > s; s++) n.push(1);
                this._allCheckRect.push(n)
            }
        },
        e.onTouchBeginDraw = function(t) {
            this._drawEnable || (this._drawEnable = !0, this._drawPoint = [], this._drawPoint.push(new egret.Point(t.localX, t.localY)))
        },
        e.onTouchMoveDraw = function(t) {
            this._drawEnable && (this._drawPoint.push(new egret.Point(t.localX, t.localY)), this.onDrawLine())
        },
        e.onDrawLine = function() {
            if (this._drawEnable && this._drawPoint.length > 0) {
                var e = this._drawPoint[this._drawPoint.length - 1],
                i = this._drawPoint[this._drawPoint.length - 2];
                this._eraseShape.graphics.beginFill(0, 0),
                this._eraseShape.graphics.lineStyle(this._eraseLineWeight, 0, 1, !0),
                this._eraseShape.graphics.moveTo(i.x, i.y),
                this._eraseShape.graphics.lineTo(e.x, e.y),
                this._eraseShape.graphics.endFill();
                var n = Math.min(i.x, e.x),
                s = Math.max(e.x, i.x),
                a = Math.min(e.y - this._eraseLineWeight / 2, i.y - this._eraseLineWeight / 2),
                r = Math.max(e.y + this._eraseLineWeight / 2, i.y + this._eraseLineWeight / 2);
                this.checkRect(n, a, s - n, r - a),
                t.HeartBeat.addListener(this, this.onErase, 10)
            }
        },
        e.onErase = function() {
            var t = new egret.Bitmap;
            t.texture = this._eraseTexture,
            this._eraseObject.texture = this.drawErase(t, this._eraseShape)
        },
        e.checkRect = function(t, e, i, n) {
            for (var s = Math.floor(e / this._gapY), a = Math.floor(t / this._gapX), r = Math.floor((t + i) / this._gapX), o = Math.floor((e + n) / this._gapY), h = s; o >= h && !(h >= this._totalYNum); h++) for (var l = a; r >= l; l++) l >= this._totalXNum || this._allCheckRect[h][l] && (this._allCheckRect[h][l] = 0, this._hasCheck++, this.sendCheckEvent(), console.log("hasCheck=" + this._hasCheck / this._totalRect))
        },
        e.sendCheckEvent = function() {
            if (!this._hasComplete) {
                var e = Math.ceil(100 * this._hasCheck / this._totalRect);
                if (this._limitCheckNum && e >= this._limitCheckNum) t.MyEvent.sendEvent(t.EventType.ERASE_COMPLETE),
                this._hasComplete = !0;
                else for (var i = this._sendEraseChangeArray.length,
                n = 0; i > n; n++) if (e >= this._sendEraseChangeArray[n] && this._sendEraseChangeArray[n]) {
                    this._sendEraseChangeArray[n] = 0,
                    0 == n && (t.MyEvent.sendEvent(t.EventType.ERASE_COMPLETE), this._hasComplete = !0);
                    var s = new t.MyEvent(t.EventType.ERASE_CHANGE);
                    s.addItem("hasCheck", e),
                    s.send();
                    break
                }
            }
        },
        e.onToucchEndDrawCircle = function() {
            this._eraseShape.graphics.endFill(),
            this._drawEnable = !1
        },
        e._eraseShape = null,
        e._eraseObject = null,
        e._eraseTexture = null,
        e._drawEnable = !1,
        e._drawPoint = [],
        e._eraseLineWeight = 0,
        e._allCheckRect = [],
        e._hasCheck = 0,
        e._gapX = 5,
        e._gapY = 5,
        e._totalRect = 0,
        e._totalXNum = 0,
        e._totalYNum = 0,
        e._limitCheckNum = 0,
        e._hasComplete = !1,
        e._sendEraseChangeArray = [],
        e
    } ();
    t.SpriteUtils = e,
    __reflect(e.prototype, "easy.SpriteUtils")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function e() {}
        return e.dump = function(t) {
            for (var e = "",
            i = "",
            n = 0; n < t.length; n++) {
                n % 16 == 0 && (e += ("0000" + n.toString(16)).substring( - 4, 4) + " "),
                n % 8 == 0 && (e += " ");
                var s = t[n];
                e += ("0" + s.toString(16)).substring( - 2, 2) + " ",
                ((n + 1) % 16 == 0 || n == t.length - 1) && (e += " |" + i + "|\n", i = "")
            }
            return e
        },
        e.isUsage = function(t) {
            return void 0 == t || null == t || "" + t == "" || "" + t == "undefined" || "" == ("" + t).trim() ? !1 : !0
        },
        e.randomRange = function(t, e) {
            return void 0 === e && (e = 0),
            Math.floor(t + Math.random() * (e - t))
        },
        e.changToMoney = function(t, e) {
            void 0 === e && (e = !1);
            var i = 0,
            n = 0,
            s = "";
            for (e && t.charCodeAt(0) >= 48 && t.charCodeAt(0) <= 57 && (t = "+" + t), i = t.length - 1; i >= 0; i--) s = t.charAt(i) + s,
            t.charCodeAt(i) >= 48 && t.charCodeAt(i) <= 57 ? t.charCodeAt(i - 1) >= 48 && t.charCodeAt(i - 1) <= 57 && (n++, 3 == n && (s = "," + s, n = 0)) : n = 0;
            return s
        },
        e.getMatchesCount = function(t, e) {
            var i = 0,
            n = e.lastIndexOf(t),
            s = e.indexOf(t);
            if (s == n && n >= 0) return 1;
            if (s != n && n >= 0) for (++i; s != n;) s = e.indexOf(t, s + t.length - 1),
            -1 != s && ++i;
            return i
        },
        e.changeIntToText = function(t) {
            void 0 === t && (t = 0);
            var e = "";
            return e += t >= 1e4 ? Math.ceil(t / 1e4).toFixed(0) + "万": 0 > t ? "0": t.toFixed(0)
        },
        e.convertColor2Html = function(t) {
            void 0 === t && (t = 0);
            var e = "#000000",
            i = "";
            try {
                for (i = t.toString(16); i.length < 6;) i = "0" + i;
                e = "#" + i
            } catch(n) {}
            return e
        },
        e.htmlESC = function(t) {
            if (e.isUsage(t)) {
                var i = /&/g,
                n = /</g,
                s = />/g;
                return t = t.replace(i, "&amp;"),
                t = t.replace(n, "&lt;"),
                t = t.replace(s, "&gt;")
            }
            return null
        },
        e.replaceNumberToArray = function(t) {
            for (var e = new Array,
            i = t.toString(), n = i.length, s = 0; n > s; s++) e.push(i.charAt(s));
            return e
        },
        e.replace = function(t, i, n) {
            if (!e.isUsage(t)) return "";
            for (; t.indexOf(i) >= 0;) t = t.replace(i, n);
            return t
        },
        e.spliteStrArr = function(t, i) {
            var n = [];
            if (e.isUsage(t)) for (var s = t.split(i), a = 0; a < s.length; a++) e.isUsage(s[a]) && n.push(s[a]);
            return n
        },
        e.parserStrToArray = function(t, i, n) {
            void 0 === i && (i = ","),
            void 0 === n && (n = ";");
            var s = [];
            if (!e.isUsage(t)) return s;
            for (var a = e.spliteStrArr(t, n), r = 0; r < a.length; r++) s.push(e.spliteStrArr(a[r], i));
            return s
        },
        e.parserStrToObj = function(i, n, s, a) {
            void 0 === n && (n = null),
            void 0 === s && (s = "@"),
            void 0 === a && (a = ";");
            var r = {};
            if (n && (r = n), !e.isUsage(i)) return r;
            for (var o = e.spliteStrArr(i, a), h = null, l = 0; l < o.length; l++) if (h = e.spliteStrArr(o[l], s), 2 == h.length) {
                var u = typeof r[h[0]];
                "number" == u ? r[h[0]] = parseInt(h[1]) : "boolean" == u ? r[h[0]] = "true" == h[1] : r[h[0]] instanceof Array ? r[h[0]] = t.StringUtil.spliteStrArr(h[1], ",") : r[h[0]] = h[1]
            }
            return r
        },
        e.parserObjToStr = function(t, e, i) {
            void 0 === e && (e = "@"),
            void 0 === i && (i = ";");
            var n = "";
            for (var s in t)"__class__" != s && "hashCode" != s && "__types__" != s && "__proto__" != s && (t[s] instanceof Function || (n += s + e + t[s] + i));
            return n
        },
        e.isPhone = function(t) {
            if (e.isUsage(t) && 11 == t.length) {
                var i = parseInt(t);
                if ("" + i == t) return ! 0
            }
            return ! 1
        },
        e.formatTime = function(t, e) {
            void 0 === e && (e = ":");
            var i = "",
            n = Math.floor(t / 60);
            i = 10 > n ? "0" + n: "" + n,
            i += e;
            var s = Math.floor(t % 60);
            return i += 10 > s ? "0" + s: "" + s
        },
        e.dateFormat = function(t, e) {
            var i = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in i) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
            return e
        },
        e
    } ();
    t.StringUtil = e,
    __reflect(e.prototype, "easy.StringUtil")
} (easy || (easy = {}));
var easy; !
function(t) {
    var e = function() {
        function t() {}
        return t.newUUID = function() {
            var t = function() {
                for (var t = Math.pow(16, 4) - 1, e = Math.floor(Math.random() * t), i = e.toString(16); i.length < 4;) i = "0" + i;
                return i
            },
            e = t() + t(),
            i = t(),
            n = t(),
            s = t(),
            a = t() + t() + t();
            return e + "-" + i + "-" + n + "-" + s + "-" + a
        },
        t.getUrlByName = function(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i");
            if (location) {
                var i = location.search.substr(1).match(e);
                if (null != i) return decodeURI(decodeURIComponent(decodeURI(i[2])))
            }
            return ""
        },
        t
    } ();
    t.UUID = e,
    __reflect(e.prototype, "easy.UUID")
} (easy || (easy = {}));
var scanNational; !
function(t) {
    var e = easy.MD5,
    i = function() {
        function t() {}
        return t.get_now_time = function(t, e) {
            easy.HttpUtil.postData(window.aipUrl + "source/front/get_now_time.php", "", t, e)
        },
        t.info_detail = function(t, e) {
            easy.HttpUtil.postData(window.aipUrl + "source/front/info_detail.php", "", t, e)
        },
        t.game_start = function(t, e) {
            easy.HttpUtil.postData(window.aipUrl + "source/front/game_start.php", "", t, e)
        },
        t.submit_step = function(e, i, n) {
			//	alert(n)
            var s = "step_score=" + e + "&use_second=" + i + "&cake_length=" + n + "&loggamescore_id=" + t.loggamescore_id;
            easy.HttpUtil.postData(window.aipUrl + "source/front/submit_step.php", s,
            function(t) {
                var e = JSON.parse(t);
                console.log("提交游戏阶段信息", e)
            },
            this)
        },
        t.submit_score = function(e, i, n, s, a) {
            var r = "game_score=" + e + "&use_second=" + i + "&cake_num=" + n + "&loggamescore_id=" + t.loggamescore_id;
            easy.HttpUtil.postData(window.aipUrl + "source/front/submit_score.php", r, s, a)
        },
        t.submit_info = function(t, e, i, n, s, a) {
            var r = "user_name=" + t + "&user_phone=" + e + "&user_addr=" + i + "&user_gender=" + n;
            easy.HttpUtil.postData(window.aipUrl + "source/front/submit_info.php", r, s, a)
        },
        t.score_rank = function(t, e, i) {
            var n = "list_type=2&page=" + t + "&range=20";
            easy.HttpUtil.getData(window.aipUrl + "source/front/score_rank.php", n, e, i)
        },
        t.md5 = new e,
        t.header2 = "",
        t.openid = null,
        t.userInfo = null,
        t.time_start = 0,
        t.game_num = 0,
        t.GAMEPLAY = "gameplay",
        t
    } ();
    t.GameData = i,
    __reflect(i.prototype, "scanNational.GameData")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, !0) || this;
            return e.resourceRoot = "",
            e.resSpriteSheet = "LoadMian",
            e.resTexture = ["bg0"],
            e.resGroup = ["loading_main"],
            e.resFiles = ["loading_main.json"],
            e.spriteSheet = null,
            e.group = null,
            e.imgbg = null,
            e.imgtu1 = null,
            e.imgtu2 = null,
            e.imgtu3 = null,
            e.groupdar = null,
            e.imgdar1 = null,
            e.imgdar2 = null,
            e.labeltxt = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.topEnabled = !0,
            this.bottomEnabled = !0,
            this.leftEnabled = !0,
            this.rightEnabled = !0,
            this.group = new easy.Group(!0),
            this.group.name = "group",
            this.addChild(this.group),
            this.group.showBg = !1,
            this.group.border = !1,
            this.group.width = 750,
            this.group.height = 1334,
            this.group.horizontalEnabled = !0,
            this.group.verticalEnabled = !0,
            this.imgbg = new easy.Image(!0),
            this.imgbg.name = "imgbg",
            this.group.addChild(this.imgbg),
            this.imgbg.y = -86,
            this.imgbg.width = 750,
            this.imgbg.height = 1506,
            this.imgtu1 = new easy.Image(!0),
            this.imgtu1.name = "imgtu1",
            this.group.addChild(this.imgtu1),
            this.imgtu1.x = 173.5,
            this.imgtu1.y = 247,
            this.imgtu1.width = 427,
            this.imgtu1.height = 642,
            this.imgtu2 = new easy.Image(!0),
            this.imgtu2.name = "imgtu2",
            this.group.addChild(this.imgtu2),
            this.imgtu2.x = 256.5,
            this.imgtu2.y = 853,
            this.imgtu2.width = 277,
            this.imgtu2.height = 14,
            this.imgtu3 = new easy.Image(!0),
            this.imgtu3.name = "imgtu3",
            this.group.addChild(this.imgtu3),
            this.imgtu3.x = 111.5,
            this.imgtu3.y = 889,
            this.imgtu3.width = 527,
            this.imgtu3.height = 37,
            this.groupdar = new easy.Group(!0),
            this.groupdar.name = "groupdar",
            this.group.addChild(this.groupdar),
            this.groupdar.showBg = !1,
            this.groupdar.border = !1,
            this.groupdar.x = 111.5,
            this.groupdar.y = 889,
            this.groupdar.width = 527,
            this.groupdar.height = 37,
            this.imgdar1 = new easy.Image(!0),
            this.imgdar1.name = "imgdar1",
            this.groupdar.addChild(this.imgdar1),
            this.imgdar1.x = 10,
            this.imgdar1.y = 6,
            this.imgdar1.width = 18,
            this.imgdar1.height = 25,
            this.imgdar2 = new easy.Image(!0),
            this.imgdar2.name = "imgdar2",
            this.groupdar.addChild(this.imgdar2),
            this.imgdar2.x = 495,
            this.imgdar2.y = 6,
            this.imgdar2.width = 19,
            this.imgdar2.height = 25,
            this.labeltxt = new easy.Label(!0),
            this.labeltxt.name = "labeltxt",
            this.group.addChild(this.labeltxt),
            this.labeltxt.text = "甜蜜加载中····30%",
            this.labeltxt.fontSize = 38,
            this.labeltxt.color = 16777215,
            this.labeltxt.hAlign = "center",
            this.labeltxt.autoSize = !1,
            this.labeltxt.bold = !0,
            this.labeltxt.width = 600,
            this.labeltxt.height = 50,
            this.labeltxt.x = 75,
            this.labeltxt.y = 942,
            this.labeltxt.showBg = !1
        },
        e.prototype.initData = function() {
            t.prototype.initData.call(this)
        },
        e.prototype.enter = function() {},
        e.prototype.outer = function() {},
        e.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("LoadMian_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("LoadMian_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.group.drawDelay = !1,
            this.imgbg.texture = RES.getRes("bg0"),
            this.imgbg.drawDelay = !1,
            this.imgtu1.texture = this.spriteSheet.getTexture("0_1"),
            this.imgtu1.drawDelay = !1,
            this.imgtu2.texture = this.spriteSheet.getTexture("0_2"),
            this.imgtu2.drawDelay = !1,
            this.imgtu3.texture = this.spriteSheet.getTexture("0_3"),
            this.imgtu3.drawDelay = !1,
            this.groupdar.drawDelay = !1,
            this.imgdar1.texture = this.spriteSheet.getTexture("0_4"),
            this.imgdar1.drawDelay = !1,
            this.imgdar2.texture = this.spriteSheet.getTexture("0_5"),
            this.imgdar2.drawDelay = !1,
            this.labeltxt.drawDelay = !1
        },
        e
    } (easy.Group);
    t.LoadMian = e,
    __reflect(e.prototype, "scanNational.LoadMian")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.imgKList = [],
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.LoadMian
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            easy.TweenEffect.setAnchorXY(this.ui.imgbg),
            this.ui.imgbg.x = 375,
            this.ui.imgbg.y = 667,
            this.ui.imgbg.scaleX = this.ui.imgbg.scaleY = Math.max(easy.GlobalSetting.DISPLAY_WIDTH / 750, easy.GlobalSetting.DISPLAY_HEIGHT / 1334),
            this.ui.groupdar.removeChildren();
            for (var t = 1; 35 > t; t++) {
                var i = new easy.Image(!0);
                this.ui.groupdar.addChild(i),
                i.x = 7 + 15 * (t - 1),
                i.y = 6,
                i.width = 18,
                i.height = 25,
                27 > t ? i.texture = this.ui.spriteSheet.getTexture("0_" + (t + 3)) : i.texture = this.ui.spriteSheet.getTexture("0_30"),
                i.draw(),
                i.visible = !1,
                this.imgKList.push(i)
            }
            easy.TweenEffect.setAnchorXY(this.ui.imgtu1)
        },
        i.prototype.setProgress = function(t, e) {
            for (var i = 0; i < Math.floor(t / (100 / 35)); i++) 34 > i && (this.imgKList[i].visible = !0);
            this.ui.labeltxt.text = "甜蜜加载中····" + t + "%"
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            this.ui.labeltxt.text = "甜蜜加载中····0%",
            egret.Tween.get(this.ui.imgtu1, {
                loop: !0
            }).to({
                rotation: 5
            },
            500).to({
                rotation: -5
            },
            1e3).to({
                rotation: 0
            },
            500)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.LoadingBaseUI);
    t.LoadMianProgressMainBar = e,
    __reflect(e.prototype, "scanNational.LoadMianProgressMainBar")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, !0) || this;
            return e.resourceRoot = "",
            e.resSpriteSheet = "temp_music",
            e.resTexture = [],
            e.resGroup = ["temp_temp_music"],
            e.resFiles = ["temp/temp_music_loader_220921161911.json"],
            e.spriteSheet = null,
            e.groupmusic = null,
            e.groupmusicbg = null,
            e.imgmusic = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.groupmusic = new easy.Group(!0),
            this.groupmusic.name = "groupmusic",
            this.addChild(this.groupmusic),
            this.groupmusic.showBg = !1,
            this.groupmusic.border = !1,
            this.groupmusicbg = new easy.Group(!0),
            this.groupmusicbg.name = "groupmusicbg",
            this.groupmusic.addChild(this.groupmusicbg),
            this.groupmusicbg.border = !1,
            this.groupmusicbg.alpha = 0,
            this.imgmusic = new easy.Image(!0),
            this.imgmusic.name = "imgmusic",
            this.groupmusic.addChild(this.imgmusic),
            this.imgmusic.x = 32,
            this.imgmusic.y = 36,
            this.imgmusic.width = 36,
            this.imgmusic.height = 28
        },
        e.prototype.initData = function() {
            t.prototype.initData.call(this)
        },
        e.prototype.enter = function() {},
        e.prototype.outer = function() {},
        e.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("temp_music_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("temp_music_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.groupmusic.drawDelay = !1,
            this.groupmusicbg.drawDelay = !1,
            this.spriteSheet && (this.imgmusic.texture = this.spriteSheet.getTexture("music1")),
            this.imgmusic.drawDelay = !1
        },
        e
    } (easy.Group);
    t.temp_music = e,
    __reflect(e.prototype, "scanNational.temp_music")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.temp_music
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            easy.TweenEffect.setAnchorXY(this.ui.imgmusic),
            this.ui.groupmusicbg.touchEnabled = !0,
            this.ui.groupmusicbg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchMusic, this)
        },
        i.prototype.onTouchMusic = function() {
            window.musicstart ? (window.musicstart = !1, window.audioPause(), this.ui.imgmusic.texture = this.ui.spriteSheet.getTexture("music2")) : (window.musicstart = !0, window.audioPaly(), this.ui.imgmusic.texture = this.ui.spriteSheet.getTexture("music1"))
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            window.musicstart ? (window.audioPaly(), this.ui.imgmusic.texture = this.ui.spriteSheet.getTexture("music1")) : (window.audioPause(), this.ui.imgmusic.texture = this.ui.spriteSheet.getTexture("music2"))
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.Template);
    t.temp_musicTemplate = e,
    __reflect(e.prototype, "scanNational.temp_musicTemplate")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, !0) || this;
            return e.resourceRoot = "",
            e.resSpriteSheet = "temp_rank",
            e.resTexture = [],
            e.resGroup = ["temp_temp_rank"],
            e.resFiles = ["temp/temp_rank_loader_220915171244.json"],
            e.spriteSheet = null,
            e.group = null,
            e.imgrank1 = null,
            e.imgid1 = null,
            e.imgid2 = null,
            e.imgid3 = null,
            e.imgid4 = null,
            e.labelid = null,
            e.labelname = null,
            e.labelnum = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 509,
            this.height = 60,
            this.group = new easy.Group(!0),
            this.group.name = "group",
            this.addChild(this.group),
            this.group.showBg = !1,
            this.group.border = !1,
            this.group.width = 509,
            this.group.height = 60,
            this.imgrank1 = new easy.Image(!0),
            this.imgrank1.name = "imgrank1",
            this.group.addChild(this.imgrank1),
            this.imgrank1.width = 509,
            this.imgrank1.height = 60,
            this.imgid1 = new easy.Image(!0),
            this.imgid1.name = "imgid1",
            this.group.addChild(this.imgid1),
            this.imgid1.x = 16,
            this.imgid1.y = -.5,
            this.imgid1.width = 74,
            this.imgid1.height = 61,
            this.imgid1.visible = !1,
            this.imgid2 = new easy.Image(!0),
            this.imgid2.name = "imgid2",
            this.group.addChild(this.imgid2),
            this.imgid2.x = 22,
            this.imgid2.y = .5,
            this.imgid2.width = 61,
            this.imgid2.height = 59,
            this.imgid2.visible = !1,
            this.imgid3 = new easy.Image(!0),
            this.imgid3.name = "imgid3",
            this.group.addChild(this.imgid3),
            this.imgid3.x = 23,
            this.imgid3.y = 5.5,
            this.imgid3.width = 61,
            this.imgid3.height = 49,
            this.imgid3.visible = !1,
            this.imgid4 = new easy.Image(!0),
            this.imgid4.name = "imgid4",
            this.group.addChild(this.imgid4),
            this.imgid4.x = 26,
            this.imgid4.y = 3,
            this.imgid4.width = 54,
            this.imgid4.height = 54,
            this.labelid = new easy.Label(!0),
            this.labelid.name = "labelid",
            this.group.addChild(this.labelid),
            this.labelid.text = "100",
            this.labelid.fontSize = 30,
            this.labelid.color = 14163743,
            this.labelid.hAlign = "center",
            this.labelid.autoSize = !1,
            this.labelid.width = 54,
            this.labelid.height = 54,
            this.labelid.x = 26,
            this.labelid.y = 3,
            this.labelid.showBg = !1,
            this.labelname = new easy.Label(!0),
            this.labelname.name = "labelname",
            this.group.addChild(this.labelname),
            this.labelname.text = "昵称昵称昵称",
            this.labelname.fontSize = 32,
            this.labelname.color = 16777215,
            this.labelname.hAlign = "center",
            this.labelname.autoSize = !1,
            this.labelname.width = 250,
            this.labelname.height = 60,
            this.labelname.x = 120,
            this.labelname.showBg = !1,
            this.labelnum = new easy.Label(!0),
            this.labelnum.name = "labelnum",
            this.group.addChild(this.labelnum),
            this.labelnum.text = "200",
            this.labelnum.fontSize = 52,
            this.labelnum.color = 16777215,
            this.labelnum.autoSize = !1,
            this.labelnum.width = 250,
            this.labelnum.height = 60,
            this.labelnum.x = 390,
            this.labelnum.showBg = !1
        },
        e.prototype.initData = function() {
            t.prototype.initData.call(this)
        },
        e.prototype.enter = function() {},
        e.prototype.outer = function() {},
        e.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("temp_rank_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("temp_rank_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.group.drawDelay = !1,
            this.spriteSheet && (this.imgrank1.texture = this.spriteSheet.getTexture("5_2")),
            this.imgrank1.drawDelay = !1,
            this.spriteSheet && (this.imgid1.texture = this.spriteSheet.getTexture("5_3")),
            this.imgid1.drawDelay = !1,
            this.spriteSheet && (this.imgid2.texture = this.spriteSheet.getTexture("5_4")),
            this.imgid2.drawDelay = !1,
            this.spriteSheet && (this.imgid3.texture = this.spriteSheet.getTexture("5_5")),
            this.imgid3.drawDelay = !1,
            this.spriteSheet && (this.imgid4.texture = this.spriteSheet.getTexture("5_6")),
            this.imgid4.drawDelay = !1,
            this.labelid.drawDelay = !1,
            this.labelname.drawDelay = !1,
            this.labelnum.drawDelay = !1
        },
        e
    } (easy.Group);
    t.temp_rank = e,
    __reflect(e.prototype, "scanNational.temp_rank")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.temp_rank
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            easy.EventManager.addEventListener(easy.EventType.RESOURCE_DOWNLOADED, this.onMyEventResDownloaded, this)
        },
        i.prototype._datas = function(t, e) {
            if (e) {
                for (var i = 1; 5 > i; i++) this.ui["imgid" + i].visible = !1;
                4 > t ? (this.ui["imgid" + t].visible = !0, this.ui.labelid.text = "") : (this.ui.imgid4.visible = !0, this.ui.labelid.text = "" + t),
                this.ui.labelname.text = "" + e.nickname,
                this.ui.labelnum.text = "" + e.best_score
            }
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this),
            easy.EventManager.removeEventListener(easy.EventType.RESOURCE_DOWNLOADED, this.onMyEventResDownloaded, this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.onMyEventResDownloaded = function(t) {
            this.validateNow()
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.Template);
    t.temp_rankTemplate = e,
    __reflect(e.prototype, "scanNational.temp_rankTemplate")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this, !0) || this;
            return t.resourceRoot = "",
            t.resSpriteSheet = "GameUI",
            t.resTexture = ["bg2"],
            t.resGroup = ["hall_GameUI"],
            t.resFiles = ["hall/GameUI_loader_220921162032.json"],
            t.spriteSheet = null,
            t.imgbg = null,
            t.group = null,
            t.grouptop = null,
            t.groupicon = null,
            t.imgicon = null,
            t.imgtop1 = null,
            t.labelname = null,
            t.imgtop2 = null,
            t.labelnum = null,
            t.labeltime = null,
            t.imgtop3 = null,
            t.groupgame = null,
            t.groupline = null,
            t.imgline1 = null,
            t.imgline2 = null,
            t.imggame1 = null,
            t.grouptemp = null,
            t.imgtemp1 = null,
            t.imgtemp2 = null,
            t.grouptempall = null,
            t.groupts = null,
            t.grouptsbg = null,
            t.grouptsall = null,
            t.imgts1 = null,
            t.imgts2 = null,
            t.imgts3 = null,
            t.imgts4 = null,
            t.temp_music = null,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.imgbg = new easy.Image(!0),
            this.imgbg.name = "imgbg",
            this.addChild(this.imgbg),
            this.imgbg.y = -86,
            this.imgbg.width = 750,
            this.imgbg.height = 1506,
            this.group = new easy.Group(!0),
            this.group.name = "group",
            this.addChild(this.group),
            this.group.showBg = !1,
            this.group.border = !1,
            this.group.width = 750,
            this.group.height = 1334,
            this.group.horizontalEnabled = !0,
            this.grouptop = new easy.Group(!0),
            this.grouptop.name = "grouptop",
            this.group.addChild(this.grouptop),
            this.grouptop.showBg = !1,
            this.grouptop.border = !1,
            this.grouptop.width = 750,
            this.grouptop.height = 1334,
            this.groupicon = new easy.Group(!0),
            this.groupicon.name = "groupicon",
            this.grouptop.addChild(this.groupicon),
            this.groupicon.showBg = !1,
            this.groupicon.border = !1,
            this.groupicon.x = 28,
            this.groupicon.y = 40,
            this.groupicon.width = 135,
            this.groupicon.height = 135,
            this.imgicon = new easy.Image(!0),
            this.imgicon.name = "imgicon",
            this.groupicon.addChild(this.imgicon),
            this.imgicon.autoSize = !0,
            this.imgicon.width = 135,
            this.imgicon.height = 135,
            this.imgtop1 = new easy.Image(!0),
            this.imgtop1.name = "imgtop1",
            this.grouptop.addChild(this.imgtop1),
            this.imgtop1.x = 19,
            this.imgtop1.y = 13,
            this.imgtop1.width = 152,
            this.imgtop1.height = 178,
            this.labelname = new easy.Label(!0),
            this.labelname.name = "labelname",
            this.grouptop.addChild(this.labelname),
            this.labelname.text = "昵称昵称昵称",
            this.labelname.fontSize = 16,
            this.labelname.color = 16777215,
            this.labelname.hAlign = "center",
            this.labelname.autoSize = !1,
            this.labelname.bold = !0,
            this.labelname.width = 125,
            this.labelname.height = 30,
            this.labelname.x = 31,
            this.labelname.y = 159,
            this.labelname.showBg = !1,
            this.imgtop2 = new easy.Image(!0),
            this.imgtop2.name = "imgtop2",
            this.grouptop.addChild(this.imgtop2),
            this.imgtop2.x = 189,
            this.imgtop2.y = 47,
            this.imgtop2.width = 539,
            this.labelnum = new easy.Label(!0),
            this.labelnum.name = "labelnum",
            this.grouptop.addChild(this.labelnum),
            this.labelnum.text = "260分",
            this.labelnum.fontSize = 50,
            this.labelnum.color = 14163743,
            this.labelnum.hAlign = "center",
            this.labelnum.autoSize = !1,
            this.labelnum.bold = !0,
            this.labelnum.width = 170,
            this.labelnum.height = 50,
            this.labelnum.x = 200,
            this.labelnum.y = 97,
            this.labelnum.showBg = !1,
            this.labeltime = new easy.Label(!0),
            this.labeltime.name = "labeltime",
            this.grouptop.addChild(this.labeltime),
            this.labeltime.text = "01:30",
            this.labeltime.fontSize = 50,
            this.labeltime.color = 14163743,
            this.labeltime.hAlign = "center",
            this.labeltime.autoSize = !1,
            this.labeltime.bold = !0,
            this.labeltime.width = 170,
            this.labeltime.height = 50,
            this.labeltime.x = 554,
            this.labeltime.y = 97,
            this.labeltime.showBg = !1,
            this.imgtop3 = new easy.Image(!0),
            this.imgtop3.name = "imgtop3",
            this.grouptop.addChild(this.imgtop3),
            this.imgtop3.x = -97.5,
            this.imgtop3.y = 13,
            this.imgtop3.width = 933,
            this.imgtop3.height = 408,
            this.groupgame = new easy.Group(!0),
            this.groupgame.name = "groupgame",
            this.group.addChild(this.groupgame),
            this.groupgame.showBg = !1,
            this.groupgame.border = !1,
            this.groupgame.width = 750,
            this.groupgame.height = 1334,
            this.groupline = new easy.Group(!0),
            this.groupline.name = "groupline",
            this.groupgame.addChild(this.groupline),
            this.groupline.showBg = !1,
            this.groupline.clip = !0,
            this.groupline.border = !1,
            this.groupline.y = 441,
            this.groupline.width = 750,
            this.groupline.height = 420,
            this.imgline1 = new easy.Image(!0),
            this.imgline1.name = "imgline1",
            this.groupline.addChild(this.imgline1),
            this.imgline1.x = 60,
            this.imgline1.width = 7,
            this.imgline1.height = 420,
            this.imgline2 = new easy.Image(!0),
            this.imgline2.name = "imgline2",
            this.groupline.addChild(this.imgline2),
            this.imgline2.x = 683,
            this.imgline2.width = 7,
            this.imgline2.height = 420,
            this.imggame1 = new easy.Image(!0),
            this.imggame1.name = "imggame1",
            this.groupgame.addChild(this.imggame1),
            this.imggame1.x = 89,
            this.imggame1.y = 441,
            this.imggame1.width = 572,
            this.imggame1.height = 392,
            this.grouptemp = new easy.Group(!0),
            this.grouptemp.name = "grouptemp",
            this.group.addChild(this.grouptemp),
            this.grouptemp.showBg = !1,
            this.grouptemp.border = !1,
            this.grouptemp.width = 750,
            this.grouptemp.height = 1334,
            this.imgtemp1 = new easy.Image(!0),
            this.imgtemp1.name = "imgtemp1",
            this.grouptemp.addChild(this.imgtemp1),
            this.imgtemp1.x = -153.5,
            this.imgtemp1.y = 1191,
            this.imgtemp1.width = 1057,
            this.imgtemp1.height = 176,
            this.imgtemp2 = new easy.Image(!0),
            this.imgtemp2.name = "imgtemp2",
            this.grouptemp.addChild(this.imgtemp2),
            this.imgtemp2.x = 89,
            this.imgtemp2.y = 944,
            this.imgtemp2.width = 572,
            this.imgtemp2.height = 392,
            this.grouptempall = new easy.Group(!0),
            this.grouptempall.name = "grouptempall",
            this.grouptemp.addChild(this.grouptempall),
            this.grouptempall.showBg = !1,
            this.grouptempall.border = !1,
            this.grouptempall.width = 750,
            this.grouptempall.height = 1334,
            this.groupts = new easy.Group(!0),
            this.groupts.name = "groupts",
            this.addChild(this.groupts),
            this.groupts.showBg = !1,
            this.groupts.border = !1,
            this.groupts.width = 750,
            this.groupts.height = 1334,
            this.groupts.horizontalEnabled = !0,
            this.groupts.verticalEnabled = !0,
            this.groupts.visible = !1,
            this.grouptsbg = new easy.Group(!0),
            this.grouptsbg.name = "grouptsbg",
            this.groupts.addChild(this.grouptsbg),
            this.grouptsbg.bgColor = 0,
            this.grouptsbg.border = !1,
            this.grouptsbg.x = -625,
            this.grouptsbg.y = -333,
            this.grouptsbg.width = 2e3,
            this.grouptsbg.height = 2e3,
            this.grouptsbg.alpha = .796875,
            this.grouptsall = new easy.Group(!0),
            this.grouptsall.name = "grouptsall",
            this.groupts.addChild(this.grouptsall),
            this.grouptsall.showBg = !1,
            this.grouptsall.border = !1,
            this.grouptsall.width = 750,
            this.grouptsall.height = 1334,
            this.grouptsall.horizontalEnabled = !0,
            this.grouptsall.verticalEnabled = !0,
            this.imgts1 = new easy.Image(!0),
            this.imgts1.name = "imgts1",
            this.grouptsall.addChild(this.imgts1),
            this.imgts1.x = 233,
            this.imgts1.y = 257,
            this.imgts1.width = 572,
            this.imgts1.height = 392,
            this.imgts1.scaleX = .5,
            this.imgts1.scaleY = .5,
            this.imgts2 = new easy.Image(!0),
            this.imgts2.name = "imgts2",
            this.grouptsall.addChild(this.imgts2),
            this.imgts2.x = 213.5,
            this.imgts2.y = 491,
            this.imgts2.width = 323,
            this.imgts2.height = 206,
            this.imgts3 = new easy.Image(!0),
            this.imgts3.name = "imgts3",
            this.grouptsall.addChild(this.imgts3),
            this.imgts3.x = 352,
            this.imgts3.y = 730,
            this.imgts3.width = 88,
            this.imgts3.height = 116,
            this.imgts4 = new easy.Image(!0),
            this.imgts4.name = "imgts4",
            this.grouptsall.addChild(this.imgts4),
            this.imgts4.x = 32,
            this.imgts4.y = 888,
            this.imgts4.width = 686,
            this.imgts4.height = 109,
            this.temp_music = new t.temp_musicTemplate,
            this.temp_music.name = "temp_music",
            this.addChild(this.temp_music),
            this.temp_music.ui.resFiles && (this.resFiles = this.resFiles.concat(this.temp_music.ui.resFiles)),
            this.temp_music.ui.resGroup && (this.resGroup = this.resGroup.concat(this.temp_music.ui.resGroup)),
            this.temp_music.x = 650
        },
        i.prototype.initData = function() {
            e.prototype.initData.call(this)
        },
        i.prototype.enter = function() {},
        i.prototype.outer = function() {},
        i.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("GameUI_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("GameUI_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.imgbg.texture = RES.getRes("bg2"),
            this.imgbg.drawDelay = !1,
            this.group.drawDelay = !1,
            this.grouptop.drawDelay = !1,
            this.groupicon.drawDelay = !1,
            this.imgicon.drawDelay = !1,
            this.spriteSheet && (this.imgtop1.texture = this.spriteSheet.getTexture("2_11")),
            this.imgtop1.drawDelay = !1,
            this.labelname.drawDelay = !1,
            this.spriteSheet && (this.imgtop2.texture = this.spriteSheet.getTexture("2_13")),
            this.imgtop2.drawDelay = !1,
            this.labelnum.drawDelay = !1,
            this.labeltime.drawDelay = !1,
            this.spriteSheet && (this.imgtop3.texture = this.spriteSheet.getTexture("2_10")),
            this.imgtop3.drawDelay = !1,
            this.groupgame.drawDelay = !1,
            this.groupline.drawDelay = !1,
            this.spriteSheet && (this.imgline1.texture = this.spriteSheet.getTexture("2_8")),
            this.imgline1.drawDelay = !1,
            this.spriteSheet && (this.imgline2.texture = this.spriteSheet.getTexture("2_8")),
            this.imgline2.drawDelay = !1,
            this.spriteSheet && (this.imggame1.texture = this.spriteSheet.getTexture("2_4")),
            this.imggame1.drawDelay = !1,
            this.grouptemp.drawDelay = !1,
            this.spriteSheet && (this.imgtemp1.texture = this.spriteSheet.getTexture("2_9")),
            this.imgtemp1.drawDelay = !1,
            this.spriteSheet && (this.imgtemp2.texture = this.spriteSheet.getTexture("2_4")),
            this.imgtemp2.drawDelay = !1,
            this.grouptempall.drawDelay = !1,
            this.groupts.drawDelay = !1,
            this.grouptsbg.drawDelay = !1,
            this.grouptsall.drawDelay = !1,
            this.spriteSheet && (this.imgts1.texture = this.spriteSheet.getTexture("2_4")),
            this.imgts1.drawDelay = !1,
            this.spriteSheet && (this.imgts2.texture = this.spriteSheet.getTexture("2_1")),
            this.imgts2.drawDelay = !1,
            this.spriteSheet && (this.imgts3.texture = this.spriteSheet.getTexture("2_2")),
            this.imgts3.drawDelay = !1,
            this.spriteSheet && (this.imgts4.texture = this.spriteSheet.getTexture("2_3")),
            this.imgts4.drawDelay = !1,
            this.temp_music.validateNow()
        },
        i
    } (easy.Group);
    t.GameUI = e,
    __reflect(e.prototype, "scanNational.GameUI")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._btnok = !0,
            t._cakeid = 2,
            t._cakearr = [],
            t._cakeWidth = 572,
            t._cakenum = 0,
            t._shape = null,
            t.headUrl = "",
            t._times = 90,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.GameUI
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            this.addHandleEvent(t.GameData.GAMEPLAY, "enter"),
            easy.TweenEffect.setAnchorXY(this.ui.imgbg),
            this.ui.imgbg.x = easy.GlobalSetting.DISPLAY_WIDTH / 2,
            this.ui.imgbg.y = easy.GlobalSetting.DISPLAY_HEIGHT / 2,
            this.ui.imgbg.scaleX = this.ui.imgbg.scaleY = easy.GlobalSetting.DISPLAY_WIDTH / 750,
            easy.TweenEffect.setAnchorXY(this.ui.imggame1, .5, 0),
            easy.TweenEffect.setAnchorXY(this.ui.imgline1, .5, 0),
            easy.TweenEffect.setAnchorXY(this.ui.imgline2, .5, 0),
            this.ui.groupts.touchEnabled = !0,
            this.ui.groupts.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnts, this),
            easy.TweenEffect.setAnchorXY(this.ui.imgts1),
            easy.TweenEffect.setAnchorXY(this.ui.imgts3, .2, .2),
            this.ui.imgbg.touchEnabled = !0,
            this.ui.imgbg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBtn, this)
        },
        i.prototype.onTouchBtnts = function(t) {
            this.ui.groupts.visible = !1,
            this.getCake()
        },
        i.prototype.onTouchBtn = function(e) {
            if (this._btnok) {
                this._btnok = !1,
                this._showTime || (this._showTime = egret.setInterval(this.showTime, this, 1e3)),
                this.ui.groupline.visible = !0,
                this.ui.groupgame.visible = !1,
                egret.Tween.removeTweens(this.ui.imggame1),
                egret.Tween.removeTweens(this.ui.groupline),
                this._cakeid++,
                this._cakeid > 4 && (this._cakeid = 1);
                var i = this,
                n = new easy.Image(!0);
                this.ui.grouptempall.addChild(n),
                easy.TweenEffect.setAnchorXY(n, .5, 0),
                n.texture = this.ui.imggame1.texture,
                n.draw(),
                n.scaleX = this.ui.imggame1.scaleX,
                n.scaleY = this.ui.imggame1.scaleY,
                n.x = this.ui.imggame1.x,
                n.y = this.ui.imggame1.y - this.ui.grouptemp.y;
                var s = this._cakearr[this._cakearr.length - 1].y - n.height * n.scaleY + 160 * this._cakearr[this._cakearr.length - 1].scaleX;
                egret.Tween.get(n).to({
                    y: s
                },
                2).call(function() {
                    i._cakeWidth = Math.floor(572 * n.scaleX),
                    i._cakearr.push(n)
                },
                this).call(function() {
						i._cakearr[i._cakearr.length - 1].scaleX=i._cakearr[i._cakearr.length - 2].scaleX-1
                   // if (i._cakearr[i._cakearr.length - 1].scaleX < i._cakearr[i._cakearr.length - 2].scaleX) {//---------
					if (t.GameData.game_num<560) {
                        t.GameData.game_num += 20,
                        i.ui.labelnum.text = t.GameData.game_num + "分";
                        var e = 950 - i._cakearr[i._cakearr.length - 1].y - i.ui.grouptemp.y;
                        i._cakearr[i._cakearr.length - 1].y - i.ui.grouptemp.y < 950 && e > 0 ? egret.Tween.get(i.ui.grouptemp).to({
                            y: i.ui.grouptemp.y + e
                        },
                        2 * 1).call(i.getCake, this) : egret.Tween.get(i.ui.grouptemp).call(i.getCake, this),
                        i._cakenum++;
							var tt=i._cakearr.length*2+1
                        var n = 90 - i._times;
                        1 > n && (n = 1),
                        t.GameData.submit_step(t.GameData.game_num, n, i._cakeWidth-2*i._cakearr.length)
                    } else i.gameOver()
                },
                this)
            }
        },
        i.prototype.getCake = function() {
            var t = this;
            this.ui.imgline1.x = 375 - this._cakeWidth / 2,
            this.ui.imgline2.x = 375 + this._cakeWidth / 2,
            this.ui.imggame1.texture = this.ui.spriteSheet.getTexture("2_" + (this._cakeid + 3)),
            this.ui.imggame1.draw(),
            this.ui.imggame1.scaleX = this.ui.imggame1.scaleY = .2,
            this.ui.groupline.height = 98.4,

            egret.Tween.get(this.ui.imggame1, {
                loop: !0
            }).to({
                scaleX: .95,
                scaleY: .95
            },
            1),
            egret.Tween.get(this.ui.groupline, {
                loop: !0
            }).to({
                height: 392.4
            },
            1e3).to({
                height: 98.4
            },
            1e3),
            egret.setTimeout(function() {
                t._btnok = !0,
                t.ui.groupgame.visible = !0
            },
            this, 10)
			
        },
        i.prototype.gameOver = function() {
            egret.clearInterval(this._showTime);
            var e = 90 - this._times;
            1 > e && (e = 1),
            t.GameData.submit_score(t.GameData.game_num, e, this._cakenum, this.submit_score, this)
        },
        i.prototype.submit_score = function(e) {
            var i = JSON.parse(e);
            console.log("提交游戏成绩", i),
            200 == i.code ? easy.PopupManager.show(t.win_overWin) : easy.ViewManager.show(t.HallView, i.msg, !1)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            this.reduction(),
            this.animation()
        },
        i.prototype.reduction = function() {
            egret.Tween.removeTweens(this.ui),
            this.ui.alpha = 0,
            this._showTime = null,
            t.GameData.game_num = 0,
            this.ui.labelnum.text = t.GameData.game_num + "分",
            this.ui.labeltime.text = "1:30",
            this._times = 90,
            this._cakenum = 0,
            this._btnok = !0,
            this._cakeid = 2,
            this._cakeWidth = 572,
            this.ui.groupline.visible = !1,
            this.ui.groupgame.visible = !1,
            this._cakearr = [],
            this._cakearr.push(this.ui.imgtemp2),
            this.ui.grouptemp.y = easy.GlobalSetting.DISPLAY_HEIGHT - 1334,
            this.ui.grouptempall.removeChildren(),
            this.ui.groupts.visible = !0,
            egret.Tween.removeTweens(this.ui.imgts1),
            this.ui.imgts1.scaleX = this.ui.imgts1.scaleY = .5,
            easy.PopupManager.hidden(t.win_overWin),
            this.ui.labelname.text = "" + t.GameData.userInfo.nickname,
            this._geticon()
        },
        i.prototype.animation = function() {
            egret.Tween.get(this.ui).wait(window.speed1).to({
                alpha: 1
            },
            window.speed2),
            egret.Tween.get(this.ui.imgts1, {
                loop: !0
            }).to({
                scaleX: .3,
                scaleY: .3
            },
            1e3).to({
                scaleX: .5,
                scaleY: .5
            },
            1e3)
        },
        i.prototype._geticon = function() {
            this.headUrl = "" + t.GameData.userInfo.headimgurl,
            this._shape || (this._shape = new egret.Shape, this._shape.graphics.clear(), this._shape.graphics.beginFill(0), this._shape.graphics.drawArc(this.ui.imgicon.x + 67.5, this.ui.imgicon.y + 67.5, 67.5, Math.PI / 180, 360 * Math.PI / 180, !1), this._shape.graphics.endFill(), this.ui.groupicon.addChild(this._shape), this.ui.imgicon.mask = this._shape),
            this.ui.imgicon.texture = easy.ResManager.getRes(this.headUrl),
            this.ui.imgicon.draw()
        },
        i.prototype.showTime = function() {
            this._times--;
            var t, e = Math.floor(this._times / 60),
            i = Math.floor(this._times % 60);
            t = i > 9 ? i: "0" + i,
            this.ui.labeltime.text = e + ":" + t,
            this._times <= 0 && this.gameOver()
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.onMyEventResDownloaded = function(t) {
            var e = t.datas.name;
            e == this.headUrl && (this.ui.imgicon.texture = easy.ResManager.getRes(this.headUrl), this.ui.imgicon.draw())
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.View);
    t.GameView = e,
    __reflect(e.prototype, "scanNational.GameView")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this, !0) || this;
            return t.resourceRoot = "",
            t.resSpriteSheet = "HallUI",
            t.resTexture = ["bg1", "rule4"],
            t.resGroup = ["hall_HallUI"],
            t.resFiles = ["hall/HallUI_loader_220928115221.json"],
            t.spriteSheet = null,
            t.group = null,
            t.imgbg = null,
            t.imglogo1 = null,
            t.imglogo2 = null,
            t.imgtitle = null,
            t.imgtu1 = null,
            t.btnrule = null,
            t.btngame = null,
            t.btnrank = null,
            t.temp_music = null,
            t.grouprule = null,
            t.grouprulebg = null,
            t.imgrule = null,
            t.grouptemp = null,
            t.imgtemp = null,
            t.imgarraw = null,
            t.btngame2 = null,
            t.btnclose = null,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.group = new easy.Group(!0),
            this.group.name = "group",
            this.addChild(this.group),
            this.group.showBg = !1,
            this.group.border = !1,
            this.group.width = 750,
            this.group.height = 1334,
            this.imgbg = new easy.Image(!0),
            this.imgbg.name = "imgbg",
            this.group.addChild(this.imgbg),
            this.imgbg.y = -86,
            this.imgbg.width = 750,
            this.imgbg.height = 1506,
            this.imglogo1 = new easy.Image(!0),
            this.imglogo1.name = "imglogo1",
            this.group.addChild(this.imglogo1),
            this.imglogo1.x = 43,
            this.imglogo1.y = 32,
            this.imglogo1.width = 75,
            this.imglogo1.height = 111,
            this.imglogo2 = new easy.Image(!0),
            this.imglogo2.name = "imglogo2",
            this.group.addChild(this.imglogo2),
            this.imglogo2.x = 603,
            this.imglogo2.y = 30,
            this.imglogo2.width = 121,
            this.imglogo2.height = 69,
            this.imgtitle = new easy.Image(!0),
            this.imgtitle.name = "imgtitle",
            this.group.addChild(this.imgtitle),
            this.imgtitle.x = 37,
            this.imgtitle.y = -61,
            this.imgtitle.width = 699,
            this.imgtitle.height = 622,
            this.imgtu1 = new easy.Image(!0),
            this.imgtu1.name = "imgtu1",
            this.group.addChild(this.imgtu1),
            this.imgtu1.x = 304,
            this.imgtu1.y = 426,
            this.imgtu1.width = 134,
            this.imgtu1.height = 112,
            this.btnrule = new easy.Button(!0),
            this.btnrule.name = "btnrule",
            this.group.addChild(this.btnrule),
            this.btnrule.width = 213,
            this.btnrule.height = 128,
            this.btnrule.y = 1174,
            this.btngame = new easy.Button(!0),
            this.btngame.name = "btngame",
            this.group.addChild(this.btngame),
            this.btngame.width = 376,
            this.btngame.height = 129,
            this.btngame.x = 169,
            this.btngame.y = 1174,
            this.btnrank = new easy.Button(!0),
            this.btnrank.name = "btnrank",
            this.group.addChild(this.btnrank),
            this.btnrank.width = 223,
            this.btnrank.height = 128,
            this.btnrank.x = 527,
            this.btnrank.y = 1174,
            this.temp_music = new t.temp_musicTemplate,
            this.temp_music.name = "temp_music",
            this.group.addChild(this.temp_music),
            this.temp_music.ui.resFiles && (this.resFiles = this.resFiles.concat(this.temp_music.ui.resFiles)),
            this.temp_music.ui.resGroup && (this.resGroup = this.resGroup.concat(this.temp_music.ui.resGroup)),
            this.temp_music.x = 650,
            this.temp_music.y = 80,
            this.grouprule = new easy.Group(!0),
            this.grouprule.name = "grouprule",
            this.addChild(this.grouprule),
            this.grouprule.showBg = !1,
            this.grouprule.border = !1,
            this.grouprule.width = 750,
            this.grouprule.height = 1334,
            this.grouprule.horizontalEnabled = !0,
            this.grouprule.verticalEnabled = !0,
            this.grouprulebg = new easy.Group(!0),
            this.grouprulebg.name = "grouprulebg",
            this.grouprule.addChild(this.grouprulebg),
            this.grouprulebg.bgColor = 0,
            this.grouprulebg.border = !1,
            this.grouprulebg.x = -625,
            this.grouprulebg.y = -333,
            this.grouprulebg.width = 2e3,
            this.grouprulebg.height = 2e3,
            this.grouprulebg.alpha = .796875,
            this.imgrule = new easy.Image(!0),
            this.imgrule.name = "imgrule",
            this.grouprule.addChild(this.imgrule),
            this.imgrule.x = 78,
            this.imgrule.y = 166.5,
            this.imgrule.width = 594,
            this.imgrule.height = 837,
            this.grouptemp = new easy.Group(!0),
            this.grouptemp.name = "grouptemp",
            this.grouprule.addChild(this.grouptemp),
            this.grouptemp.showBg = !1,
            this.grouptemp.clip = !0,
            this.grouptemp.border = !1,
            this.grouptemp.x = 99,
            this.grouptemp.y = 343,
            this.grouptemp.width = 552,
            this.grouptemp.height = 590,
            this.imgtemp = new easy.Image(!0),
            this.imgtemp.name = "imgtemp",
            this.grouptemp.addChild(this.imgtemp),
            this.imgtemp.width = 552,
            this.imgtemp.height = 1614,
            this.imgarraw = new easy.Image(!0),
            this.imgarraw.name = "imgarraw",
            this.grouprule.addChild(this.imgarraw),
            this.imgarraw.x = 361,
            this.imgarraw.y = 944,
            this.imgarraw.width = 28,
            this.imgarraw.height = 34,
            this.btngame2 = new easy.Button(!0),
            this.btngame2.name = "btngame2",
            this.grouprule.addChild(this.btngame2),
            this.btngame2.width = 546,
            this.btngame2.height = 100,
            this.btngame2.x = 96,
            this.btngame2.y = 1042,
            this.btnclose = new easy.Button(!0),
            this.btnclose.name = "btnclose",
            this.grouprule.addChild(this.btnclose),
            this.btnclose.width = 60,
            this.btnclose.height = 60,
            this.btnclose.x = 613,
            this.btnclose.y = 186
        },
        i.prototype.initData = function() {
            e.prototype.initData.call(this)
        },
        i.prototype.enter = function() {},
        i.prototype.outer = function() {},
        i.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("HallUI_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("HallUI_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.group.drawDelay = !1,
            this.imgbg.texture = RES.getRes("bg1"),
            this.imgbg.drawDelay = !1,
            this.spriteSheet && (this.imglogo1.texture = this.spriteSheet.getTexture("1_1")),
            this.imglogo1.drawDelay = !1,
            this.spriteSheet && (this.imglogo2.texture = this.spriteSheet.getTexture("1_2")),
            this.imglogo2.drawDelay = !1,
            this.spriteSheet && (this.imgtitle.texture = this.spriteSheet.getTexture("1_6")),
            this.imgtitle.drawDelay = !1,
            this.spriteSheet && (this.imgtu1.texture = this.spriteSheet.getTexture("1_7")),
            this.imgtu1.drawDelay = !1,
            this.spriteSheet && (this.btnrule.texture = this.spriteSheet.getTexture("1_3")),
            this.btnrule.drawDelay = !1,
            this.spriteSheet && (this.btngame.texture = this.spriteSheet.getTexture("1_4")),
            this.btngame.drawDelay = !1,
            this.spriteSheet && (this.btnrank.texture = this.spriteSheet.getTexture("1_5")),
            this.btnrank.drawDelay = !1,
            this.temp_music.validateNow(),
            this.grouprule.drawDelay = !1,
            this.grouprulebg.drawDelay = !1,
            this.spriteSheet && (this.imgrule.texture = this.spriteSheet.getTexture("rule1")),
            this.imgrule.drawDelay = !1,
            this.grouptemp.drawDelay = !1,
            this.spriteSheet && (this.imgtemp.texture = this.spriteSheet.getTexture("rule4_7")),
            this.imgtemp.drawDelay = !1,
            this.spriteSheet && (this.imgarraw.texture = this.spriteSheet.getTexture("rule2")),
            this.imgarraw.drawDelay = !1,
            this.spriteSheet && (this.btngame2.texture = this.spriteSheet.getTexture("rule3")),
            this.btngame2.drawDelay = !1,
            this.spriteSheet && (this.btnclose.texture = this.spriteSheet.getTexture("rule5")),
            this.btnclose.drawDelay = !1
        },
        i
    } (easy.Group);
    t.HallUI = e,
    __reflect(e.prototype, "scanNational.HallUI")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.myscrollView1 = new egret.ScrollView,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.HallUI
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            this.addHandleEvent(t.GameData.GAMEPLAY, "onTouchBtngame"),
            easy.TweenEffect.setAnchorXY(this.ui.group),
            this.ui.group.x = easy.GlobalSetting.DISPLAY_WIDTH / 2,
            this.ui.group.y = easy.GlobalSetting.DISPLAY_HEIGHT / 2,
            this.ui.group.scaleX = this.ui.group.scaleY = easy.GlobalSetting.DISPLAY_WIDTH / 750,
            easy.TweenEffect.setAnchorXY(this.ui.btnrule),
            this.ui.btnrule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnrule, this),
            easy.TweenEffect.setAnchorXY(this.ui.btngame),
            this.ui.btngame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtngame, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnrank),
            this.ui.btnrank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnrank, this),
            easy.TweenEffect.setAnchorXY(this.ui.btngame2),
            this.ui.btngame2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtngame, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnclose),
            this.ui.btnclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnclose, this),
            easy.TweenEffect.setAnchorXY(this.ui.imgtitle),
            this.ui.grouprulebg.touchEnabled = !0,
            this.myscrollView1.setContent(this.ui.imgtemp),
            this.myscrollView1.width = 552,
            this.myscrollView1.height = 590,
            this.myscrollView1.verticalScrollPolicy = "auto",
            this.ui.grouptemp.addChild(this.myscrollView1)
        },
        i.prototype.onTouchBtnrule = function(t) {
            this.myscrollView1.scrollTop = 0,
            this.ui.grouprule.visible = !0
        },
        i.prototype.onTouchBtngame = function(e) {
            return t.GameData.openid && 0 != t.GameData.openid.length ? void t.GameData.game_start(this.game_start, this) : void window.geturl()
        },
        i.prototype.game_start = function(e) {
            var i = JSON.parse(e);
            console.log("游戏开始", i),
            200 == i.code ? (t.GameData.loggamescore_id = i.loggamescore_id, easy.ViewManager.show(t.GameView, null, !1)) : easy.PopupManager.show(t.win_tsWin, i.msg)
        },
        i.prototype.onTouchBtnrank = function(e) {
            return t.GameData.openid && 0 != t.GameData.openid.length ? void easy.PopupManager.show(t.win_rankWin) : void window.geturl()
        },
        i.prototype.onTouchBtnclose = function(t) {
            this.ui.grouprule.visible = !1
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            this.reduction(),
            this.animation(),
            this.addIdleDownload()
        },
        i.prototype.reduction = function() {
            egret.Tween.removeTweens(this.ui.group),
            egret.Tween.removeTweens(this.ui.imgtitle),
            egret.Tween.removeTweens(this.ui.btnrule),
            egret.Tween.removeTweens(this.ui.btngame),
            egret.Tween.removeTweens(this.ui.btnrank),
            egret.Tween.removeTweens(this.ui.imgarraw),
            this.ui.group.alpha = 0,
            this.ui.imgtitle.scaleX = this.ui.imgtitle.scaleY = 0,
            this.ui.btnrule.scaleX = this.ui.btnrule.scaleY = 0,
            this.ui.btngame.scaleX = this.ui.btngame.scaleY = 0,
            this.ui.btnrank.scaleX = this.ui.btnrank.scaleY = 0,
            this.ui.imgarraw.y = 944,
            this.ui.grouprule.visible = !1;
            var e = "" + this.data;
            "" != e && null != e && "null" != e && easy.PopupManager.show(t.win_tsWin, e)
        },
        i.prototype.animation = function() {
            egret.Tween.get(this.ui.group).wait(window.speed1).to({
                alpha: 1
            },
            window.speed2),
            egret.Tween.get(this.ui.imgtitle).wait(2 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btngame).wait(3 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btnrule).wait(4 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btnrank).wait(4 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.imgarraw, {
                loop: !0
            }).to({
                y: this.ui.imgarraw.y + 10
            },
            1e3).to({
                y: this.ui.imgarraw.y
            },
            1e3)
        },
        i.prototype.addIdleDownload = function() {
            easy.ResManager.addIdleDownload(t.GameView),
            easy.ResManager.addIdleDownload(t.temp_rankTemplate),
            easy.ResManager.addIdleDownload(t.win_tsWin),
            easy.ResManager.addIdleDownload(t.win_rankWin),
            easy.ResManager.addIdleDownload(t.win_overWin),
            easy.ResManager.addIdleDownload(t.win_infoWin)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.View);
    t.HallView = e,
    __reflect(e.prototype, "scanNational.HallView")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, !0) || this;
            return e.resourceRoot = "",
            e.resSpriteSheet = "win_info",
            e.resTexture = [],
            e.resGroup = ["win_win_info"],
            e.resFiles = ["win/win_info_loader_220915170837.json"],
            e.spriteSheet = null,
            e.groupinfo = null,
            e.imginfo1 = null,
            e.imgsex = null,
            e.txtInputname = null,
            e.txtInputphone = null,
            e.txtInputadress = null,
            e.groupsex1 = null,
            e.groupsex2 = null,
            e.btnsubmit = null,
            e.btnrank = null,
            e.btnclose = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.groupinfo = new easy.Group(!0),
            this.groupinfo.name = "groupinfo",
            this.addChild(this.groupinfo),
            this.groupinfo.showBg = !1,
            this.groupinfo.border = !1,
            this.groupinfo.width = 750,
            this.groupinfo.height = 1334,
            this.imginfo1 = new easy.Image(!0),
            this.imginfo1.name = "imginfo1",
            this.groupinfo.addChild(this.imginfo1),
            this.imginfo1.x = 73,
            this.imginfo1.y = 194,
            this.imginfo1.width = 603,
            this.imginfo1.height = 880,
            this.imgsex = new easy.Image(!0),
            this.imgsex.name = "imgsex",
            this.groupinfo.addChild(this.imgsex),
            this.imgsex.x = 383,
            this.imgsex.y = 524,
            this.imgsex.width = 34,
            this.imgsex.height = 28,
            this.txtInputname = new easy.TextInput(!0),
            this.txtInputname.name = "txtInputname",
            this.groupinfo.addChild(this.txtInputname),
            this.txtInputname.text = "李李李",
            this.txtInputname.fontSize = 40,
            this.txtInputname.fontColor = 14163743,
            this.txtInputname.hAlign = "center",
            this.txtInputname.width = 350,
            this.txtInputname.height = 67,
            this.txtInputname.x = 259,
            this.txtInputname.y = 391,
            this.txtInputname.showBg = !1,
            this.txtInputphone = new easy.TextInput(!0),
            this.txtInputphone.name = "txtInputphone",
            this.groupinfo.addChild(this.txtInputphone),
            this.txtInputphone.text = "李李李",
            this.txtInputphone.fontSize = 40,
            this.txtInputphone.fontColor = 14163743,
            this.txtInputphone.hAlign = "center",
            this.txtInputphone.width = 350,
            this.txtInputphone.height = 67,
            this.txtInputphone.x = 259,
            this.txtInputphone.y = 618,
            this.txtInputphone.showBg = !1,
            this.txtInputadress = new easy.TextInput(!0),
            this.txtInputadress.name = "txtInputadress",
            this.groupinfo.addChild(this.txtInputadress),
            this.txtInputadress.text = "李李李",
            this.txtInputadress.fontSize = 40,
            this.txtInputadress.fontColor = 14163743,
            this.txtInputadress.hAlign = "center",
            this.txtInputadress.multiline = !0,
            this.txtInputadress.width = 350,
            this.txtInputadress.height = 160,
            this.txtInputadress.x = 259,
            this.txtInputadress.y = 740,
            this.txtInputadress.showBg = !1,
            this.groupsex1 = new easy.Group(!0),
            this.groupsex1.name = "groupsex1",
            this.groupinfo.addChild(this.groupsex1),
            this.groupsex1.border = !1,
            this.groupsex1.x = 272,
            this.groupsex1.y = 491,
            this.groupsex1.width = 150,
            this.groupsex1.height = 93,
            this.groupsex1.alpha = .5,
            this.groupsex2 = new easy.Group(!0),
            this.groupsex2.name = "groupsex2",
            this.groupinfo.addChild(this.groupsex2),
            this.groupsex2.border = !1,
            this.groupsex2.x = 442,
            this.groupsex2.y = 491,
            this.groupsex2.width = 150,
            this.groupsex2.height = 93,
            this.groupsex2.alpha = .5,
            this.btnsubmit = new easy.Button(!0),
            this.btnsubmit.name = "btnsubmit",
            this.groupinfo.addChild(this.btnsubmit),
            this.btnsubmit.width = 270,
            this.btnsubmit.height = 95,
            this.btnsubmit.x = 56,
            this.btnsubmit.y = 1112,
            this.btnrank = new easy.Button(!0),
            this.btnrank.name = "btnrank",
            this.groupinfo.addChild(this.btnrank),
            this.btnrank.width = 269,
            this.btnrank.height = 98,
            this.btnrank.x = 409.5,
            this.btnrank.y = 1112,
            this.btnclose = new easy.Button(!0),
            this.btnclose.name = "btnclose",
            this.groupinfo.addChild(this.btnclose),
            this.btnclose.width = 60,
            this.btnclose.height = 60,
            this.btnclose.x = 618,
            this.btnclose.y = 202
        },
        e.prototype.initData = function() {
            t.prototype.initData.call(this)
        },
        e.prototype.enter = function() {},
        e.prototype.outer = function() {},
        e.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("win_info_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("win_info_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.groupinfo.drawDelay = !1,
            this.spriteSheet && (this.imginfo1.texture = this.spriteSheet.getTexture("6_1")),
            this.imginfo1.drawDelay = !1,
            this.spriteSheet && (this.imgsex.texture = this.spriteSheet.getTexture("6_2")),
            this.imgsex.drawDelay = !1,
            this.txtInputname.drawDelay = !1,
            this.txtInputphone.drawDelay = !1,
            this.txtInputadress.drawDelay = !1,
            this.groupsex1.drawDelay = !1,
            this.groupsex2.drawDelay = !1,
            this.spriteSheet && (this.btnsubmit.texture = this.spriteSheet.getTexture("6_3")),
            this.btnsubmit.drawDelay = !1,
            this.spriteSheet && (this.btnrank.texture = this.spriteSheet.getTexture("6_4")),
            this.btnrank.drawDelay = !1,
            this.spriteSheet && (this.btnclose.texture = this.spriteSheet.getTexture("rule5")),
            this.btnclose.drawDelay = !1
        },
        e
    } (easy.Group);
    t.win_info = e,
    __reflect(e.prototype, "scanNational.win_info")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._sexid = 1,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.win_info
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            easy.TweenEffect.setAnchorXY(this.ui.btnsubmit),
            this.ui.btnsubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnsubmit, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnrank),
            this.ui.btnrank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnrank, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnclose),
            this.ui.btnclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnclose, this),
            easy.TweenEffect.setAnchorXY(this.ui.groupinfo);
            var t = this;
            this.ui.txtInputname._textField.addEventListener(egret.FocusEvent.FOCUS_IN,
            function() {
                window.outFocus2()
            },
            this),
            this.ui.txtInputname._textField.addEventListener(egret.FocusEvent.FOCUS_OUT,
            function() {
                window.outFocus1()
            },
            this),
            this.ui.txtInputphone._textField.addEventListener(egret.FocusEvent.FOCUS_IN,
            function() {
                window.outFocus2()
            },
            this),
            this.ui.txtInputphone._textField.addEventListener(egret.FocusEvent.FOCUS_OUT,
            function() {
                window.outFocus1()
            },
            this),
            this.ui.txtInputadress._textField.addEventListener(egret.FocusEvent.FOCUS_IN,
            function() {
                window.outFocus2()
            },
            this),
            this.ui.txtInputadress._textField.addEventListener(egret.FocusEvent.FOCUS_OUT,
            function() {
                window.outFocus1()
            },
            this),
            this.ui.txtInputphone._textField.restrict = "0-9",
            this.ui.txtInputphone._textField.inputType = egret.TextFieldInputType.TEL,
            this.ui.txtInputphone.addEventListener(egret.Event.CHANGE,
            function() {
                t.ui.txtInputphone.text.length > 11 && (t.ui.txtInputphone.text = t.ui.txtInputphone.text.substring(0, 11))
            },
            this);
            for (var i = 1; 3 > i; i++) this.ui["groupsex" + i].data = i,
            this.ui["groupsex" + i].alpha = 0,
            this.ui["groupsex" + i].touchEnabled = !0,
            this.ui["groupsex" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchSex, this)
        },
        i.prototype.onTouchSex = function(t) {
            this._sexid = t.currentTarget.data,
            1 == this._sexid ? this.ui.imgsex.x = 382 : this.ui.imgsex.x = 549
        },
        i.prototype.onTouchBtnsubmit = function(e) {
            window.outFocus1(),
            easy.StringUtil.isUsage(this.ui.txtInputname.text) ? easy.StringUtil.isUsage(this.ui.txtInputphone.text) && easy.StringUtil.isPhone(this.ui.txtInputphone.text) ? easy.StringUtil.isUsage(this.ui.txtInputadress.text) ? t.GameData.submit_info(this.ui.txtInputname.text, this.ui.txtInputphone.text, this.ui.txtInputadress.text, "" + this._sexid, this.submit_info, this) : easy.PopupManager.show(t.win_tsWin, "请输入地址") : easy.PopupManager.show(t.win_tsWin, "请输入正确电话") : easy.PopupManager.show(t.win_tsWin, "请输入姓名")
        },
        i.prototype.submit_info = function(e) {
            var i = JSON.parse(e);
            console.log(i),
            200 == i.code ? easy.PopupManager.show(t.win_tsWin, "提交成功") : easy.PopupManager.show(t.win_tsWin, "" + i.msg)
        },
        i.prototype.onTouchBtnrank = function(e) {
            easy.PopupManager.show(t.win_rankWin)
        },
        i.prototype.onTouchBtnclose = function(t) {
            easy.PopupManager.hidden(this)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            console.log(t.GameData.userInfo),
            t.GameData.userInfo ? (this.ui.txtInputname.text = "" + t.GameData.userInfo.user_name, this.ui.txtInputphone.text = "" + t.GameData.userInfo.user_phone, this.ui.txtInputadress.text = "" + t.GameData.userInfo.user_addr, this._sexid = parseInt(t.GameData.userInfo.user_gender), 1 == this._sexid ? (this._sexid = 1, this.ui.imgsex.x = 382) : (this._sexid = 2, this.ui.imgsex.x = 549)) : (this.ui.txtInputname.text = "", this.ui.txtInputphone.text = "", this.ui.txtInputadress.text = "", this._sexid = 1, this.ui.imgsex.x = 382),
            this.ui.btnsubmit.touchEnabled = !0,
            this.ui.groupinfo.scaleX = this.ui.groupinfo.scaleY = 0,
            this.ui.btnsubmit.scaleX = this.ui.btnsubmit.scaleY = 0,
            this.ui.btnrank.scaleX = this.ui.btnrank.scaleY = 0,
            egret.Tween.get(this.ui.groupinfo).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btnsubmit).wait(window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btnrank).wait(2 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.Win);
    t.win_infoWin = e,
    __reflect(e.prototype, "scanNational.win_infoWin")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, !0) || this;
            return e.resourceRoot = "",
            e.resSpriteSheet = "win_over",
            e.resTexture = [],
            e.resGroup = ["win_win_over"],
            e.resFiles = ["win/win_over_loader_220921155258.json"],
            e.spriteSheet = null,
            e.groupover = null,
            e.imgover1 = null,
            e.imgover2 = null,
            e.labelnum = null,
            e.btngame = null,
            e.btnrank = null,
            e.imgover3 = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.groupover = new easy.Group(!0),
            this.groupover.name = "groupover",
            this.addChild(this.groupover),
            this.groupover.showBg = !1,
            this.groupover.border = !1,
            this.groupover.width = 750,
            this.groupover.height = 1334,
            this.imgover1 = new easy.Image(!0),
            this.imgover1.name = "imgover1",
            this.groupover.addChild(this.imgover1),
            this.imgover1.x = .5,
            this.imgover1.y = 242.5,
            this.imgover1.width = 749,
            this.imgover1.height = 749,
            this.imgover2 = new easy.Image(!0),
            this.imgover2.name = "imgover2",
            this.groupover.addChild(this.imgover2),
            this.imgover2.x = 55.5,
            this.imgover2.y = 373,
            this.imgover2.width = 627,
            this.imgover2.height = 646,
            this.labelnum = new easy.Label(!0),
            this.labelnum.name = "labelnum",
            this.groupover.addChild(this.labelnum),
            this.labelnum.text = "260分",
            this.labelnum.fontSize = 100,
            this.labelnum.color = 16777215,
            this.labelnum.hAlign = "center",
            this.labelnum.autoSize = !1,
            this.labelnum.bold = !0,
            this.labelnum.width = 330,
            this.labelnum.height = 140,
            this.labelnum.x = 210,
            this.labelnum.y = 590,
            this.labelnum.showBg = !1,
            this.btngame = new easy.Button(!0),
            this.btngame.name = "btngame",
            this.groupover.addChild(this.btngame),
            this.btngame.width = 247,
            this.btngame.height = 90,
            this.btngame.x = 58,
            this.btngame.y = 1018,
            this.btnrank = new easy.Button(!0),
            this.btnrank.name = "btnrank",
            this.groupover.addChild(this.btnrank),
            this.btnrank.width = 247,
            this.btnrank.height = 90,
            this.btnrank.x = 451,
            this.btnrank.y = 1018,
            this.imgover3 = new easy.Image(!0),
            this.imgover3.name = "imgover3",
            this.groupover.addChild(this.imgover3),
            this.imgover3.x = 178.5,
            this.imgover3.y = 752.5,
            this.imgover3.width = 393,
            this.imgover3.height = 129
        },
        e.prototype.initData = function() {
            t.prototype.initData.call(this)
        },
        e.prototype.enter = function() {},
        e.prototype.outer = function() {},
        e.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("win_over_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("win_over_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.groupover.drawDelay = !1,
            this.spriteSheet && (this.imgover1.texture = this.spriteSheet.getTexture("3_1")),
            this.imgover1.drawDelay = !1,
            this.spriteSheet && (this.imgover2.texture = this.spriteSheet.getTexture("4_1")),
            this.imgover2.drawDelay = !1,
            this.labelnum.drawDelay = !1,
            this.spriteSheet && (this.btngame.texture = this.spriteSheet.getTexture("4_2")),
            this.btngame.drawDelay = !1,
            this.spriteSheet && (this.btnrank.texture = this.spriteSheet.getTexture("4_3")),
            this.btnrank.drawDelay = !1,
            this.spriteSheet && (this.imgover3.texture = this.spriteSheet.getTexture("4_4")),
            this.imgover3.drawDelay = !1
        },
        e
    } (easy.Group);
    t.win_over = e,
    __reflect(e.prototype, "scanNational.win_over")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.win_over
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            easy.TweenEffect.setAnchorXY(this.ui.btngame),
            this.ui.btngame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtngame, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnrank),
            this.ui.btnrank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnrank, this),
            easy.TweenEffect.setAnchorXY(this.ui.groupover),
            easy.TweenEffect.setAnchorXY(this.ui.imgover1),
            easy.TweenEffect.setAnchorXY(this.ui.imgover3)
        },
        i.prototype.onTouchBtngame = function(e) {
            t.GameData.game_start(this.game_start, this)
        },
        i.prototype.game_start = function(e) {
            var i = JSON.parse(e);
            console.log("游戏开始", i),
            200 == i.code ? (t.GameData.loggamescore_id = i.loggamescore_id, easy.MyEvent.sendEvent(t.GameData.GAMEPLAY)) : easy.PopupManager.show(t.win_tsWin, i.msg)
        },
        i.prototype.onTouchBtnrank = function(e) {
            easy.PopupManager.show(t.win_rankWin)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            t.GameData.game_num < 100 ? this.ui.imgover3.texture = this.ui.spriteSheet.getTexture("4_6") : t.GameData.game_num > 200 ? this.ui.imgover3.texture = this.ui.spriteSheet.getTexture("4_4") : this.ui.imgover3.texture = this.ui.spriteSheet.getTexture("4_5"),
            this.ui.labelnum.text = t.GameData.game_num + "分",
            egret.Tween.removeTweens(this.ui.imgover1),
            this.ui.groupover.scaleX = this.ui.groupover.scaleY = 0,
            this.ui.imgover1.alpha = 0,
            this.ui.imgover1.rotation = 0,
            this.ui.btngame.scaleX = this.ui.btngame.scaleY = 0,
            this.ui.btnrank.scaleX = this.ui.btnrank.scaleY = 0,
            egret.Tween.get(this.ui.groupover).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.imgover1).wait(window.speed1).to({
                alpha: 1
            },
            window.speed2),
            egret.Tween.get(this.ui.btngame).wait(window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btnrank).wait(2 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.imgover1, {
                loop: !0
            }).to({
                rotation: 360
            },
            5e3)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.Win);
    t.win_overWin = e,
    __reflect(e.prototype, "scanNational.win_overWin")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this, !0) || this;
            return t.resourceRoot = "",
            t.resSpriteSheet = "win_rank",
            t.resTexture = [],
            t.resGroup = ["win_win_rank"],
            t.resFiles = ["win/win_rank_loader_220915172837.json"],
            t.spriteSheet = null,
            t.group1 = null,
            t.imgtu1 = null,
            t.grouptemp = null,
            t.grouptempbg = null,
            t.grouptempall = null,
            t.temp = null,
            t.btngame = null,
            t.btninfo = null,
            t.btnshare = null,
            t.btnclose = null,
            t.group2 = null,
            t.groupbg2 = null,
            t.imgshare = null,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.group1 = new easy.Group(!0),
            this.group1.name = "group1",
            this.addChild(this.group1),
            this.group1.showBg = !1,
            this.group1.width = 750,
            this.group1.height = 1334,
            this.imgtu1 = new easy.Image(!0),
            this.imgtu1.name = "imgtu1",
            this.group1.addChild(this.imgtu1),
            this.imgtu1.x = 85,
            this.imgtu1.y = 93,
            this.imgtu1.width = 590,
            this.imgtu1.height = 973,
            this.grouptemp = new easy.Group(!0),
            this.grouptemp.name = "grouptemp",
            this.group1.addChild(this.grouptemp),
            this.grouptemp.showBg = !1,
            this.grouptemp.border = !1,
            this.grouptemp.x = 134.5,
            this.grouptemp.y = 317,
            this.grouptemp.width = 509,
            this.grouptemp.height = 712,
            this.grouptempbg = new easy.Group(!0),
            this.grouptempbg.name = "grouptempbg",
            this.grouptemp.addChild(this.grouptempbg),
            this.grouptempbg.border = !1,
            this.grouptempbg.width = 509,
            this.grouptempbg.height = 712,
            this.grouptempbg.topEnabled = !0,
            this.grouptempbg.bottomEnabled = !0,
            this.grouptempbg.leftEnabled = !0,
            this.grouptempbg.rightEnabled = !0,
            this.grouptempbg.alpha = 0,
            this.grouptempall = new easy.Group(!0),
            this.grouptempall.name = "grouptempall",
            this.grouptemp.addChild(this.grouptempall),
            this.grouptempall.showBg = !1,
            this.grouptempall.border = !1,
            this.grouptempall.width = 509,
            this.grouptempall.height = 712,
            this.temp = new t.temp_rankTemplate,
            this.temp.name = "temp",
            this.grouptempall.addChild(this.temp),
            this.temp.ui.resFiles && (this.resFiles = this.resFiles.concat(this.temp.ui.resFiles)),
            this.temp.ui.resGroup && (this.resGroup = this.resGroup.concat(this.temp.ui.resGroup)),
            this.temp.ui.labelname.x = 120,
            this.temp.ui.labelnum.x = 390,
            this.btngame = new easy.Button(!0),
            this.btngame.name = "btngame",
            this.group1.addChild(this.btngame),
            this.btngame.width = 247,
            this.btngame.height = 89,
            this.btngame.x = 48,
            this.btngame.y = 1082,
            this.btninfo = new easy.Button(!0),
            this.btninfo.name = "btninfo",
            this.group1.addChild(this.btninfo),
            this.btninfo.width = 247,
            this.btninfo.height = 89,
            this.btninfo.x = 458,
            this.btninfo.y = 1082,
            this.btnshare = new easy.Button(!0),
            this.btnshare.name = "btnshare",
            this.group1.addChild(this.btnshare),
            this.btnshare.width = 368,
            this.btnshare.height = 91,
            this.btnshare.x = 192,
            this.btnshare.y = 1191,
            this.btnclose = new easy.Button(!0),
            this.btnclose.name = "btnclose",
            this.group1.addChild(this.btnclose),
            this.btnclose.width = 60,
            this.btnclose.height = 60,
            this.btnclose.x = 612,
            this.btnclose.y = 87,
            this.group2 = new easy.Group(!0),
            this.group2.name = "group2",
            this.addChild(this.group2),
            this.group2.showBg = !1,
            this.group2.border = !1,
            this.group2.width = 750,
            this.group2.height = 1334,
            this.group2.visible = !1,
            this.groupbg2 = new easy.Group(!0),
            this.groupbg2.name = "groupbg2",
            this.group2.addChild(this.groupbg2),
            this.groupbg2.bgColor = 0,
            this.groupbg2.border = !1,
            this.groupbg2.x = -625,
            this.groupbg2.y = -333,
            this.groupbg2.width = 2e3,
            this.groupbg2.height = 2e3,
            this.groupbg2.alpha = 0,
            this.imgshare = new easy.Image(!0),
            this.imgshare.name = "imgshare",
            this.group2.addChild(this.imgshare),
            this.imgshare.x = 646,
            this.imgshare.width = 94,
            this.imgshare.height = 126
        },
        i.prototype.initData = function() {
            e.prototype.initData.call(this)
        },
        i.prototype.enter = function() {},
        i.prototype.outer = function() {},
        i.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("win_rank_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("win_rank_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.group1.drawDelay = !1,
            this.spriteSheet && (this.imgtu1.texture = this.spriteSheet.getTexture("5_1")),
            this.imgtu1.drawDelay = !1,
            this.grouptemp.drawDelay = !1,
            this.grouptempbg.drawDelay = !1,
            this.grouptempall.drawDelay = !1,
            this.temp.validateNow(),
            this.spriteSheet && (this.btngame.texture = this.spriteSheet.getTexture("5_7")),
            this.btngame.drawDelay = !1,
            this.spriteSheet && (this.btninfo.texture = this.spriteSheet.getTexture("5_8")),
            this.btninfo.drawDelay = !1,
            this.spriteSheet && (this.btnshare.texture = this.spriteSheet.getTexture("5_9")),
            this.btnshare.drawDelay = !1,
            this.spriteSheet && (this.btnclose.texture = this.spriteSheet.getTexture("rule5")),
            this.btnclose.drawDelay = !1,
            this.group2.drawDelay = !1,
            this.groupbg2.drawDelay = !1,
            this.spriteSheet && (this.imgshare.texture = this.spriteSheet.getTexture("5_10")),
            this.imgshare.drawDelay = !1
        },
        i
    } (easy.Group);
    t.win_rank = e,
    __reflect(e.prototype, "scanNational.win_rank")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.myscrollView1 = new egret.ScrollView,
            t._ids = 1,
            t._arr = [],
            t._isok = !0,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.win_rank
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            easy.TweenEffect.setAnchorXY(this.ui.btngame),
            this.ui.btngame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtngame, this),
            easy.TweenEffect.setAnchorXY(this.ui.btninfo),
            this.ui.btninfo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtninfo, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnshare),
            this.ui.btnshare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnshare, this),
            easy.TweenEffect.setAnchorXY(this.ui.btnclose),
            this.ui.btnclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnclose, this),
            this.ui.groupbg2.touchEnabled = !0,
            this.ui.groupbg2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnclose, this),
            easy.TweenEffect.setAnchorXY(this.ui.group1),
            this.myscrollView1.setContent(this.ui.grouptemp),
            this.myscrollView1.x = 134,
            this.myscrollView1.y = 317,
            this.myscrollView1.width = 509,
            this.myscrollView1.height = 712,
            this.ui.group1.addChild(this.myscrollView1),
            this.myscrollView1.addEventListener(egret.Event.COMPLETE, this.onComplete, this),
            this.ui.grouptemp.x = 0,
            this.ui.grouptemp.y = 0
        },
        i.prototype.onComplete = function() {
            this.myscrollView1.scrollTop >= this.ui.grouptemp.height - this.myscrollView1.height && this._isok && this._arr.length < 180 && (this._ids++, t.GameData.score_rank(this._ids, this.score_rank, this))
        },
        i.prototype.onTouchBtngame = function(e) {
            return t.GameData.openid && 0 != t.GameData.openid.length ? void t.GameData.game_start(this.game_start, this) : void window.geturl()
        },
        i.prototype.game_start = function(e) {
            var i = JSON.parse(e);
            console.log("游戏开始", i),
            200 == i.code ? (easy.PopupManager.hidden(this), t.GameData.loggamescore_id = i.loggamescore_id, easy.MyEvent.sendEvent(t.GameData.GAMEPLAY)) : easy.PopupManager.show(t.win_tsWin, i.msg)
        },
        i.prototype.onTouchBtninfo = function(e) {
            easy.PopupManager.show(t.win_infoWin)
        },
        i.prototype.onTouchBtnshare = function(t) {
            this.ui.group1.visible = !1,
            this.ui.group2.visible = !0
        },
        i.prototype.onTouchBtnclose = function(t) {
            this.ui.group2.visible ? (this.ui.group1.visible = !0, this.ui.group2.visible = !1) : easy.PopupManager.hidden(this)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            this.ui.group1.scaleX = this.ui.group1.scaleY = 0,
            this.ui.btngame.scaleX = this.ui.btngame.scaleY = 0,
            this.ui.btninfo.scaleX = this.ui.btninfo.scaleY = 0,
            this.ui.btnshare.scaleX = this.ui.btnshare.scaleY = 0,
            egret.Tween.get(this.ui.group1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btngame).wait(window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btninfo).wait(2 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.btnshare).wait(3 * window.speed1).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            this.ui.imgshare.y = -(easy.GlobalSetting.DISPLAY_HEIGHT - 1334) / 2 + 10,
            this._ids = 1,
            this._arr = [],
            this._isok = !0,
            this.myscrollView1.scrollTop = 0,
            this.ui.grouptempall.removeChildren(),
            t.GameData.score_rank(this._ids, this.score_rank, this)
        },
        i.prototype.score_rank = function(e) {
            this._isok = !1;
            var i = JSON.parse(e);
            if (console.log("排行榜", i), 200 == i.code) {
                for (var n = i.data,
                s = 0; s < n.length; s++) {
                    var a = new t.temp_rankTemplate;
                    this.ui.grouptempall.addChild(a),
                    a.enter(),
                    a.validateNow(),
                    a._datas(this._arr.length + 1, n[s]),
                    a.y = 70 * this._arr.length,
                    this._arr.push(a)
                }
                this.ui.grouptemp.height = 70 * this._arr.length,
                i.data.length >= 20 && (this._isok = !0)
            } else easy.MessageTips.showMessage("" + i.msg)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.Win);
    t.win_rankWin = e,
    __reflect(e.prototype, "scanNational.win_rankWin")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, !0) || this;
            return e.resourceRoot = "",
            e.resSpriteSheet = "win_ts",
            e.resTexture = [],
            e.resGroup = ["win_win_ts"],
            e.resFiles = ["win/win_ts_loader_220915180849.json"],
            e.spriteSheet = null,
            e.groupts = null,
            e.imgts1 = null,
            e.imgts2 = null,
            e.labelts = null,
            e.btnok = null,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.showBg = !1,
            this.border = !1,
            this.width = 750,
            this.height = 1334,
            this.groupts = new easy.Group(!0),
            this.groupts.name = "groupts",
            this.addChild(this.groupts),
            this.groupts.showBg = !1,
            this.groupts.border = !1,
            this.groupts.width = 750,
            this.groupts.height = 1334,
            this.imgts1 = new easy.Image(!0),
            this.imgts1.name = "imgts1",
            this.groupts.addChild(this.imgts1),
            this.imgts1.x = 1.5,
            this.imgts1.y = 364.5,
            this.imgts1.width = 749,
            this.imgts1.height = 749,
            this.imgts2 = new easy.Image(!0),
            this.imgts2.name = "imgts2",
            this.groupts.addChild(this.imgts2),
            this.imgts2.x = 135,
            this.imgts2.y = 530.5,
            this.imgts2.width = 486,
            this.imgts2.height = 357,
            this.labelts = new easy.Label(!0),
            this.labelts.name = "labelts",
            this.groupts.addChild(this.labelts),
            this.labelts.fontSize = 45,
            this.labelts.color = 12913954,
            this.labelts.hAlign = "center",
            this.labelts.multiline = !0,
            this.labelts.autoSize = !1,
            this.labelts.bold = !0,
            this.labelts.width = 486,
            this.labelts.height = 357,
            this.labelts.x = 132,
            this.labelts.y = 530.5,
            this.labelts.showBg = !1,
            this.btnok = new easy.Button(!0),
            this.btnok.name = "btnok",
            this.groupts.addChild(this.btnok),
            this.btnok.autoSize = !1,
            this.btnok.width = 204,
            this.btnok.height = 74,
            this.btnok.x = 274,
            this.btnok.y = 845
        },
        e.prototype.initData = function() {
            t.prototype.initData.call(this)
        },
        e.prototype.enter = function() {},
        e.prototype.outer = function() {},
        e.prototype.validateNow = function() {
            this.drawDelay = !1;
            var t = RES.getRes("win_ts_json");
            if (null != t) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("win_ts_img"));
                for (var e in t.texture) this.spriteSheet.createTexture(e, t.texture[e].x, t.texture[e].y, t.texture[e].w, t.texture[e].h)
            }
            this.groupts.drawDelay = !1,
            this.spriteSheet && (this.imgts1.texture = this.spriteSheet.getTexture("3_1")),
            this.imgts1.drawDelay = !1,
            this.spriteSheet && (this.imgts2.texture = this.spriteSheet.getTexture("3_4")),
            this.imgts2.drawDelay = !1,
            this.labelts.drawDelay = !1,
            this.spriteSheet && (this.btnok.texture = this.spriteSheet.getTexture("3_3")),
            this.btnok.drawDelay = !1
        },
        e
    } (easy.Group);
    t.win_ts = e,
    __reflect(e.prototype, "scanNational.win_ts")
} (scanNational || (scanNational = {}));
var scanNational; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.ui = new t.win_ts
        },
        Object.defineProperty(i.prototype, "ui", {
            get: function() {
                return this._ui
            },
            set: function(t) {
                this.setUI(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initData = function() {
            e.prototype.initData.call(this),
            easy.TweenEffect.setAnchorXY(this.ui.btnok),
            this.ui.btnok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnclose, this),
            easy.TweenEffect.setAnchorXY(this.ui.groupts),
            easy.TweenEffect.setAnchorXY(this.ui.imgts1)
        },
        i.prototype.onTouchBtnclose = function(t) {
            easy.PopupManager.hidden(this)
        },
        i.prototype.enter = function() {
            e.prototype.enter.call(this),
            this.ui.labelts.text = "" + this.data,
            console.log(this.data),
            egret.Tween.removeTweens(this.ui.imgts1),
            this.ui.groupts.scaleX = this.ui.groupts.scaleY = 0,
            this.ui.imgts1.alpha = 0,
            this.ui.imgts1.rotation = 0,
            egret.Tween.get(this.ui.groupts).to({
                scaleX: 1,
                scaleY: 1
            },
            window.speed2, egret.Ease.backOut),
            egret.Tween.get(this.ui.imgts1).wait(window.speed1).to({
                alpha: 1
            },
            window.speed2),
            egret.Tween.get(this.ui.imgts1, {
                loop: !0
            }).to({
                rotation: 360
            },
            5e3)
        },
        i.prototype.enterTransition = function() {
            e.prototype.enterTransition.call(this)
        },
        i.prototype.outer = function() {
            e.prototype.outer.call(this)
        },
        i.prototype.outerTransition = function() {
            e.prototype.outerTransition.call(this)
        },
        i.prototype.validateNow = function() {
            e.prototype.validateNow.call(this)
        },
        i
    } (easy.Win);
    t.win_tsWin = e,
    __reflect(e.prototype, "scanNational.win_tsWin")
} (scanNational || (scanNational = {}));