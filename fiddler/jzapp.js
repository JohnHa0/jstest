window.__require = function t(e, n, o) {
	function i(a, c) {
		if (!n[a]) {
			if (!e[a]) {
				var s = a.split("/");
				if (s = s[s.length - 1], !e[s]) {
					var u = "function" == typeof __require && __require;
					if (!c && u) return u(s, !0);
					if (r) return r(s, !0);
					throw new Error("Cannot find module '" + a + "'")
				}
				a = s
			}
			var p = n[a] = {
				exports: {}
			};
			e[a][0].call(p.exports, function(t) {
				return i(e[a][1][t] || t)
			}, p, p.exports, t, e, n, o)
		}
		return n[a].exports
	}
	for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
	return i
}({
	AudioManager: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "f7a8cr56VNOr60x/KFwWxO5", "AudioManager");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.AudioName = void 0;
		var a = cc._decorator,
			c = a.ccclass,
			s = a.property,
			u = a.menu,
			p = function() {
				function t() {
					this.name = "", this.audioClip = null, this.relativeVolume = 1
				}
				return r([s()], t.prototype, "name", void 0), r([s({
					type: cc.AudioClip
				})], t.prototype, "audioClip", void 0), r([c("Audio")], t)
			}(),
			l = function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.nowBgm = null, e.bgmPlaying = !1, e.bgm = null, e.bgmVolume = 1, e.bgmRelativeVolume = 1, e.audios = [], n.instance = e, e
				}
				var n;
				return i(e, t), n = e, e.stopAllSound = function() {
					cc.audioEngine.stopAll(), n.audioIds = {}
				}, e.prototype.start = function() {
					var t = function() {
						document.removeEventListener("mousedown", t, !0), document.removeEventListener("touchstart", t, !0)
					};
					document.addEventListener("mousedown", t, !0), document.addEventListener("touchstart", t, !0), this.bgmVolume = 0, window.notAutoPlayBgm
				}, e.getAudioClipByName = function(t) {
					return n.instance.audios.find(function(e) {
							return e.name === t
						})
						.audioClip
				}, e.playBgm = function(t) {
					if (t) {
						var e = n.instance.audios.find(function(e) {
							return e.name === t
						});
						n._playBgm(e.audioClip, n.instance.bgmVolume * n.instance.bgmRelativeVolume), n.instance.nowBgm = e.audioClip
					} else n._playBgm(n.instance.bgm, n.instance.bgmVolume * n.instance.bgmRelativeVolume), n.instance.nowBgm = n.instance.bgm;
					n.canPlayAduio = !0
				}, e.stopBgm = function() {
					n._stopAudio(n.instance.nowBgm)
				}, e.resumeBgm = function() {
					n._resumeAudio(n.instance.nowBgm)
				}, e.pauseBgm = function() {
					n._pauseAudio(n.instance.nowBgm)
				}, e.stop = function(t) {
					n._stopAudio(n.getAudioClipByName(t))
				}, e.play = function(t, e, o) {
					if (void 0 === e && (e = .2 * this.instance.bgmVolume), void 0 === o && (o = null), 1 == n.canPlayAduio) {
						var i = n.instance.audios.find(function(e) {
							return e.name === t
						});
						console.log(i), i && n._playAudio(i.audioClip, e * i.relativeVolume, o)
					}
				}, e.playSole = function(t, e, o) {
					if (void 0 === e && (e = .2 * this.instance.bgmVolume), void 0 === o && (o = null), 1 != n.canPlayAduio) return !1;
					var i = n.instance.audios.find(function(e) {
						return e.name === t
					});
					return console.log(i), !!i && n._playSoleAudio(i.audioClip, e * i.relativeVolume, o)
				}, e._playSoleAudio = function(t, e, n) {
					return void 0 === e && (e = 1), void 0 === n && (n = null), !!t && cc.audioEngine.getState(this.currAudioId) != cc.audioEngine.AudioState.PLAYING && (this.currAudioId = cc.audioEngine.play(t, !1, e), n && cc.audioEngine.setFinishCallback(this.currAudioId, n), !0)
				}, e.getCurrAudioState = function() {
					return cc.audioEngine.getState(this.currAudioId)
				}, e._playAudio = function(t, e, o) {
					void 0 === e && (e = 1), void 0 === o && (o = null), t && (t in n.audioIdsTimeouts && n.audioIdsTimeouts[t] + 33 > Date.now() || (n.audioIdsTimeouts[t] = Date.now(), n.audioIds[t] = cc.audioEngine.play(t, !1, e), o && cc.audioEngine.setFinishCallback(n.audioIds[t], o)))
				}, e._playBgm = function(t, e) {
					void 0 === e && (e = 1), t && (t in n.audioIds ? cc.audioEngine.getState(n.audioIds[t]) !== cc.audioEngine.AudioState.PLAYING && cc.audioEngine.resume(n.audioIds[t]) : n.audioIds[t] = cc.audioEngine.play(t, !0, e))
				}, e._resumeAudio = function(t) {
					t && t in n.audioIds && cc.audioEngine.resume(n.audioIds[t])
				}, e._pauseAudio = function(t) {
					t && t in n.audioIds && cc.audioEngine.pause(n.audioIds[t])
				}, e._stopAudio = function(t) {
					t && t in n.audioIds && (cc.audioEngine.stop(n.audioIds[t]), delete n.audioIds[t])
				}, e.instance = null, e.canPlayAduio = !1, e.audioIds = {}, e.audioIdsTimeouts = {}, r([s({
					type: cc.AudioClip
				})], e.prototype, "bgm", void 0), r([s()], e.prototype, "bgmVolume", void 0), r([s({
					type: [p]
				})], e.prototype, "audios", void 0), n = r([c, u("\u901a\u7528\u7ec4\u4ef6/\u97f3\u9891\u7ba1\u7406\u5668")], e)
			}(cc.Component);
		n.default = l;
		var d = function() {
			function t() {}
			return t.Click = "Click", t.Right = "Right", t.Wrong = "Wrong", t
		}();
		n.AudioName = d, cc._RF.pop()
	}, {}],
	AuidoBtn: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "ab331MUuA1Hi7wEYXpBxIZM", "AuidoBtn");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../../Other/AudioManager"),
			c = cc._decorator,
			s = c.ccclass,
			u = c.property,
			p = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.openSprite = null, e.closeSprite = null, e
				}
				return i(e, t), e.prototype.onEnable = function() {}, e.prototype.onLoad = function() {
					this.node.on("click", this.onBtnClick, this)
				}, e.prototype.start = function() {
					console.log("onEnable"), a.default.instance.bgmVolume = 0, this.setBtnIcon()
				}, e.prototype.onBtnClick = function() {
					a.default.play(a.AudioName.Click), 0 == a.default.instance.bgmVolume ? (a.default.instance.bgmVolume = 1, a.default.playBgm()) : (a.default.instance.bgmVolume = 0, a.default.stopBgm()), this.setBtnIcon()
				}, e.prototype.setBtnIcon = function() {
					0 == a.default.instance.bgmVolume ? cc.find("Background", this.node)
						.getComponent(cc.Sprite)
						.spriteFrame = this.closeSprite : cc.find("Background", this.node)
						.getComponent(cc.Sprite)
						.spriteFrame = this.openSprite
				}, r([u(cc.SpriteFrame)], e.prototype, "openSprite", void 0), r([u(cc.SpriteFrame)], e.prototype, "closeSprite", void 0), r([s], e)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../Other/AudioManager": "AudioManager"
	}],
	AutoResizeLayer: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "b0c97gMpEZFf5SIomWuTtOF", "AutoResizeLayer");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			c = a.ccclass,
			s = a.property,
			u = a.menu,
			p = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.size = cc.size(1920, 1080), e.resizeCallback = null, e.setResizeCallback = function(t) {
						l.isFirstRun && (l.isFirstRun = !1, cc.view.setResizeCallback(function() {
							l.events.forEach(function(t) {
								t()
							})
						})), l.events.push(t)
					}, e.clearResizeCallback = function(t) {
						e.removeItem(l.events, t)
					}, e.removeItem = function(t, e) {
						var n = t.indexOf(e);
						return -1 != n && (t.splice(n, 1), !0)
					}, e
				}
				return i(e, t), e.prototype.onLoad = function() {
					var t = this;
					this.resizeCallback = function() {
						t.resizeGame()
					}, this.resizeGame(), this.setResizeCallback(this.resizeCallback)
				}, e.prototype.onDestroy = function() {
					this.clearResizeCallback(this.resizeCallback)
				}, e.prototype.resizeGame = function() {
					var t = cc.view.getCanvasSize(),
						e = t.width,
						n = t.height,
						o = 1;
					this.size.width / this.size.height > e / n && (o = e / n / (this.size.width / this.size.height)), this.node.scale = o, this.node.dispatchEvent(new cc.Event.EventCustom("ResizeView", !0))
				}, r([s(cc.Size)], e.prototype, "size", void 0), r([c, u("Tools/AutoResizeLayer")], e)
			}(cc.Component);
		n.default = p;
		var l = {
			scale: 1,
			events: [],
			isFirstRun: !0
		};
		cc._RF.pop()
	}, {}],
	BaseView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "aa839J5FQtE/Jsiexkruthg", "BaseView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			c = a.ccclass,
			s = (a.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.showView = function() {
					this.node.active = !0
				}, e.prototype.hideView = function() {
					this.node.active = !1
				}, r([c], e)
			}(cc.Component));
		n.default = s, cc._RF.pop()
	}, {}],
	ExtendTool: [function(t, e, n) {
		"use strict";

		function o() {
			var t = navigator.userAgent.toLowerCase(),
				e = function(e) {
					return e.test(t)
				},
				n = "unknown";
			return e(/windows|win32|win64|wow32|wow64/gi) ? n = "windows" : e(/macintosh|macintel/gi) ? n = "osx" : e(/x11/gi) ? n = "linux" : e(/android|adr/gi) ? n = "android" : e(/ios|iphone|ipad|ipod|iwatch/gi) && (n = "ios"), "windows" === n || "osx" === n || "linux" === n ? "Mouse" : "android" === n || "ios" === n || e(/mobile/gi) ? "Touch" : "Mouse"
		}

		function i() {
			var t = navigator.userAgent.toLowerCase(),
				e = function(e) {
					return e.test(t)
				},
				n = "unknown";
			return e(/windows|win32|win64|wow32|wow64/gi) ? n = "windows" : e(/macintosh|macintel/gi) ? n = "osx" : e(/x11/gi) ? n = "linux" : e(/android|adr/gi) ? n = "android" : e(/ios|iphone|ipad|ipod|iwatch/gi) && (n = "ios"), "windows" === n || "osx" === n || "linux" === n ? 1 : "android" === n || "ios" === n || e(/mobile/gi) ? 0 : 9
		}

		function r() {
			return cc.sys.browserType
		}

		function a(t, e) {
			var n = {
				"M+": t.getMonth() + 1,
				"d+": t.getDate(),
				"h+": t.getHours(),
				"m+": t.getMinutes(),
				"s+": t.getSeconds(),
				"q+": Math.floor((t.getMonth() + 3) / 3),
				S: t.getMilliseconds()
			};
			for (var o in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "")
				.substr(4 - RegExp.$1.length))), n) new RegExp("(" + o + ")")
				.test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o])
					.substr(("" + n[o])
						.length)));
			return e
		}
		cc._RF.push(e, "e625a3Kn39HhoCxwixN6cBj", "ExtendTool"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.DateFormat = n.getNavigatorInfo = n.getDeviceType = n.getDevice = void 0, n.getDevice = o, n.getDeviceType = i, n.getNavigatorInfo = r, n.DateFormat = a, n.default = {
			getNavigatorInfo: r,
			getDeviceType: i,
			getDevice: o,
			DateFormat: a
		}, cc._RF.pop()
	}, {}],
	GameItem: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "a3aaaaa3ytAeZMEPqqIbdQa", "GameItem");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.CardState = void 0;
		var a, c = t("../../Other/AudioManager"),
			s = cc._decorator,
			u = s.ccclass,
			p = s.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.spriteList = [], e.m_state = a.Back, e.isClick = !0, e
				}
				return i(e, t), Object.defineProperty(e.prototype, "type", {
					get: function() {
						return this.m_type
					},
					set: function(t) {
						this.m_type = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "state", {
					get: function() {
						return this.m_state
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.onLoad = function() {
					this.cradNode = cc.find("Card", this.node), this.cradBack = cc.find("CardBack", this.cradNode), this.cradFront = cc.find("CardFront", this.cradNode), this.cardSprite = this.cradFront.getComponent(cc.Sprite)
				}, e.prototype.setType = function(t) {
					this.isClick = !0, this.type = t, this.cardSprite.spriteFrame = this.spriteList[t], this.cardSprite.node.opacity = 255, this.cardSprite.node.scale = 1, this.cardSprite.node.x = 0
				}, e.prototype.playFlopAnim = function(t, e, n, o) {
					var i = this;
					void 0 === e && (e = .3), void 0 === n && (n = null), void 0 === o && (o = null), this.cradNode.scale = 1, this.cradFront.active = !t, this.cradBack.active = t, this.m_state = t ? a.BackToFront : a.FrontToBack, cc.Tween.stopAllByTarget(this.cradNode), cc.tween(this.cradNode)
						.to(e / 2, {
							scaleX: 0
						})
						.call(function() {
							i.cradFront.active = t, i.cradBack.active = !t
						})
						.to(e / 2, {
							scaleX: 1
						})
						.call(function() {
							i.m_state = t ? a.Front : a.Back, n && (o ? n.apply(o) : n())
						})
						.start()
				}, e.prototype.showCrad = function(t) {
					cc.Tween.stopAllByTarget(this.cradNode), this.cradNode.scale = 1, this.cradFront.active = t, this.cradBack.active = !t, this.m_state = t ? a.Front : a.Back
				}, e.prototype.playWrongAnim = function() {
					var t = this;
					c.default.play(c.AudioName.Wrong);
					var e = cc.tween()
						.to(.05, {
							x: 5
						})
						.to(.05, {
							x: -5
						});
					cc.tween(this.cardSprite.node)
						.repeat(5, e)
						.call(function() {
							t.cardSprite.node.x = 0
						})
						.start()
				}, e.prototype.playRightAnim = function(t) {
					c.default.play(c.AudioName.Right), this.isClick = !1, cc.tween(this.cardSprite.node)
						.to(.15, {
							scale: .8
						})
						.to(.4, {
							scale: 1,
							opacity: 0
						})
						.call(function() {
							t && t()
						})
						.start()
				}, r([p([cc.SpriteFrame])], e.prototype, "spriteList", void 0), r([u], e)
			}(cc.Component);
		n.default = l,
			function(t) {
				t[t.Back = 0] = "Back", t[t.Front = 1] = "Front", t[t.BackToFront = 2] = "BackToFront", t[t.FrontToBack = 3] = "FrontToBack"
			}(a = n.CardState || (n.CardState = {})), cc._RF.pop()
	}, {
		"../../Other/AudioManager": "AudioManager"
	}],
	GameView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "bf1a6mQwj1PwKYgvR3l0qLk", "GameView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Components/GameItem"),
			u = t("./Components/TitleAnim"),
			p = t("./Data/StaticData"),
			l = t("./Util"),
			d = t("./ViewManager"),
			f = cc._decorator,
			h = f.ccclass,
			g = f.property,
			y = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.itemList = new Array, e.roundList = [], e.flopTime = .3, e.currType = 0, e.currIndex = [], e.currOptionNum = 0, e.openCardNum = 0, e.optionList = [2, 3, 4, 5, 6], e.knowledgeList = [{
						name: "HIV\uff08\u827e\u6ecb\u75c5\u75c5\u6bd2\uff09",
						content: "HIV\u662f\u4eba\u7c7b\u514d\u75ab\u7f3a\u9677\u75c5\u6bd2\uff0c\u4f5c\u4e3a\u5f15\u8d77\u83b7\u5f97\u6027\u514d\u75ab\u7f3a\u9677\u7efc\u5408\u5f81\u5373\u827e\u6ecb\u75c5\u7684\u7f6a\u9b41\u7978\u9996\uff0c\u5b83\u662f\u4e00\u79cd\u80fd\u653b\u51fb\u4eba\u4f53\u514d\u75ab\u7cfb\u7edf\u7684\u75c5\u6bd2\uff0c\u4e3b\u8981\u901a\u8fc7\u8840\u6db2\u9014\u5f84\u3001\u6027\u9014\u5f84\u548c\u6bcd\u5a74\u9014\u5f84\u4f20\u64ad\uff0c\u5728\u4eba\u4f53\u5185\u7684\u6f5c\u4f0f\u671f\u5e73\u5747\u4e3a8\uff5e9\u5e74\u3002\u4eba\u7c7b\u611f\u67d3HIV\u540e\uff0c\u4e00\u65e6\u75c5\u6bd2\u672a\u80fd\u5f97\u5230\u63a7\u5236\uff0c\u5c06\u7834\u574f\u4eba\u4f53\u7684\u514d\u75ab\u7cfb\u7edf\uff0c\u4ece\u800c\u5f15\u53d1\u4e00\u7cfb\u5217\u673a\u4f1a\u6027\u611f\u67d3\u53ca\u6076\u6027\u80bf\u7624\uff0c\u4e25\u91cd\u8005\u53ef\u5bfc\u81f4\u6b7b\u4ea1\u3002"
					}, {
						name: "\u5b89\u5168\u7528\u8840\u548c\u8fdc\u79bb\u6bd2\u54c1",
						content: "\u7ecf\u8840\u9014\u5f84\u611f\u67d3HIV\u7684\u51e0\u7387\u8f83\u9ad8\uff0c\u8f93\u5165\u6c61\u67d3\u7684\u8840\u6db2\uff0c\u6216\u8005\u4e0e\u4ed6\u4eba\u5171\u7528\u6ce8\u5c04\u5668\u5438\u6bd2\uff0c\u90fd\u4f1a\u9020\u6210HIV\u901a\u8fc7\u8840\u6db2\u4f20\u64ad\u3002\u4fdd\u8bc1\u5b89\u5168\u7528\u8840\u3001\u5b89\u5168\u4f7f\u7528\u8840\u6db2\u5236\u54c1\u3001\u5021\u5bfc\u8fdc\u79bb\u6bd2\u54c1\u5371\u5bb3\u662f\u9884\u9632\u827e\u6ecb\u75c5\u75c5\u6bd2\u7ecf\u8840\u6db2\u4f20\u64ad\u7684\u91cd\u8981\u63aa\u65bd\u3002"
					}, {
						name: "\u5b89\u5168\u5957",
						content: "\u5b89\u5168\u5957\u4f5c\u4e3a\u7269\u7406\u5c4f\u969c\uff0c\u80fd\u591f\u6709\u6548\u963b\u9694HIV\u4f20\u64ad\uff0c\u6b63\u786e\u4f7f\u7528\u5b89\u5168\u5957\u80fd\u591f\u907f\u514d95%\u7684\u6027\u75c5\u4ee5\u53caHIV\u7684\u4f20\u64ad\uff0c\u662f\u4e00\u79cd\u5f88\u6709\u6548\u7684\u9884\u9632\u827e\u6ecb\u75c5\u4f20\u64ad\u7684\u65b9\u6cd5\u3002"
					}, {
						name: "PrEP\uff08\u66b4\u9732\u524d\u9884\u9632\uff09",
						content: "PrEP\u5168\u79f0Pre-exposure Prophylaxis\uff0c\u662f\u901a\u8fc7\u670d\u7528\u6297\u75c5\u6bd2\u836f\u7269\u6765\u9884\u9632 HIV \u611f\u67d3\u7684\u4e00\u79cd\u65b0\u578b\u6709\u6548\u7684\u751f\u7269\u5b66\u9884\u9632\u65b9\u6cd5\u3002\u9700\u8981\u4e0ePEP\uff0c\u5168\u79f0Post-exposure Prophylaxis\u5373\u66b4\u9732\u540e\u9884\u9632\u533a\u5206\u3002"
					}, {
						name: "\u7ea2\u4e1d\u5e26",
						content: "\u201c\u7ea2\u4e1d\u5e26\u201d\u8d77\u6e90\u4e8e1991\u5e74\u7ebd\u7ea6\u768415\u540d\u827a\u672f\u5bb6\u6210\u7acb\u7684\u201c\u89c6\u89c9\u827e\u6ecb\u75c5\u201d\u7ec4\u7ec7\u521b\u9020\u7684\u89c6\u89c9\u8c61\u5f81\uff0c\u8868\u8fbe\u5bf9\u827e\u6ecb\u75c5\u611f\u67d3\u8005\u548c\u827e\u6ecb\u75c5\u60a3\u8005\u7684\u540c\u60c5\u3002\u8fd9\u4e2a\u6807\u5fd7\u6cbf\u7528\u81f3\u4eca\uff0c\u8868\u8fbe\u7740\u7740\u5168\u4e16\u754c\u5bf9\u827e\u6ecb\u75c5\u60a3\u8005\u3001\u827e\u6ecb\u75c5\u75c5\u6bd2\u611f\u67d3\u8005\u53ca\u5176\u7167\u987e\u8005\u7684\u5173\u6000\u4e0e\u63a5\u7eb3\uff0c\u4ee5\u53ca\u5bf9\u827e\u6ecb\u75c5\u5065\u5eb7\u6559\u80b2\u3001\u6cbb\u7597\u65b9\u6cd5\u548c\u75be\u75c5\u7814\u7a76\u7684\u652f\u6301\u3002"
					}], e.isClick = !0, e.isPause = !0, e.countDownTime = 40, e.countDownMaxTime = 40, e
				}
				return i(e, t), e.prototype.init = function() {
					var t = this;
					this.stageTxt = cc.find("Title/Stage/Label", this.node)
						.getComponent(cc.Label), this.countDownTxt = cc.find("Title/CountDown/Label", this.node)
						.getComponent(cc.Label), this.timeProgress = cc.find("TimeProgressBar", this.node)
						.getComponent(cc.ProgressBar);
					for (var e = cc.find("GameNode/GameBroad", this.node), n = cc.find("gameItem", e), o = function(o) {
						var r = cc.instantiate(n);
						r.setParent(e);
						var c = r.getComponent(s.default),
							u = o;
						r.on("click", function() {
							if (!t.isPause && t.isClick && c.isClick)
								if (t.currIndex.indexOf(u) >= -1) {
								//alert(t.openCardNum)
									c.isClick = !1, t.openCardNum++;
									var e = !1;
									1 && (t.isPause = !0, t.isClick = !1, e = !0), c.playFlopAnim(!0, t.flopTime, function() {
										a.default.play(a.AudioName.Right), e && (t.knowledgeList[t.currType], d.default.getSingle()
											.knowledgePopup.showView1(t.currType, function() {
												t.isPause = !1, t.nextGame()
											}))
									})
								} else t.isClick = !1, t.openCardNum = 0, c.playFlopAnim(!0, t.flopTime, function() {
									a.default.play(a.AudioName.Wrong), t.playFlopAnim(!1, t.flopTime, function() {
										t.isClick = !0
									}, t)
								})
						}, i), i.itemList.push(c)
					}, i = this, r = 0; r < 36; r++) o(r);
					n.active = !1, cc.find("Title", this.node)
						.getComponent(u.default)
						.init(), this.node.active = !1
				}, e.prototype.showView = function() {
					for (var t = 0; t < this.roundList.length; t++) this.roundList[t].active = 0 == t;
					this.node.active = !0, this.startGame()
				}, e.prototype.startGame = function() {
					var t = this;
					this.startCountDown(), this.currType = 0, this.currOptionNum = this.optionList[0], this.stageTxt.string = "1", this.setGameOption(this.currType), this.isPause = !0, this.openCardNum = 0, this.showAllCard(!1), this.scheduleOnce(function() {
						t.playFlopAnim(!0), t.scheduleOnce(function() {
							t.playFlopAnim(!1, t.flopTime, function() {
								t.isPause = !1, t.isClick = !0
							})
						}, 3)
					}, 1)
				}, e.prototype.nextGame = function() {
					var t = this;
					this.currType >= 4 ? this.gameOver() : (this.currType++, this.currOptionNum = this.optionList[this.currType], this.stageTxt.string = (this.currType + 1)
						.toString(), this.setGameOption(this.currType), this.startCountDown(), this.isPause = !0, this.openCardNum = 0, this.showAllCard(!1), this.scheduleOnce(function() {
							t.playFlopAnim(!0), t.scheduleOnce(function() {
								t.playFlopAnim(!1, t.flopTime, function() {
									t.isPause = !1, t.isClick = !0
								})
							}, 3)
						}, 1))
				}, e.prototype.gameOver = function() {
					this.isPause = !0, p.default.countDownTime = this.countDownTime, d.default.getSingle()
						.gameWin.showView(), this.hideView()
				}, e.prototype.startCountDown = function() {
					this.countDownTime = this.countDownMaxTime, this.setProgress(), this.isPause = !1
				}, e.prototype.stopCountDown = function() {
					this.isPause = !0
				}, e.prototype.setProgress = function() {
					var t = Math.max(0, this.countDownTime);
					this.countDownTxt.string = t.toFixed(0), this.timeProgress.progress = 1 - t / this.countDownMaxTime
				}, e.prototype.setGameOption = function(t) {
					for (var e = 0; e < this.roundList.length; e++) this.roundList[e].active = e == t;
					for (this.currIndex = l.default.randomIntArray(0, 35, this.currOptionNum), console.log(this.currIndex), e = 0; e < this.itemList.length; e++)
						if (this.currIndex.indexOf(e) >= 0) this.itemList[e].getComponent(s.default)
							.setType(t);
						else {
							var n = Math.floor(5 * Math.random());
							n >= t && n++, this.itemList[e].getComponent(s.default)
								.setType(n)
						}
				}, e.prototype.playFlopAnim = function(t, e, n, o) {
					void 0 === e && (e = .3), void 0 === n && (n = null), void 0 === o && (o = null);
					for (var i = [], r = 0; r < this.itemList.length; r++) {
						var a = this.itemList[r];
						t ? a.state == s.CardState.Back && i.push(a) : a.state == s.CardState.Front && i.push(a)
					}
					for (r = 0; r < i.length; r++) 0 == r ? i[r].playFlopAnim(t, e, function() {
						for (var t = 0; t < i.length; t++) i[t].isClick = !0;
						n && n()
					}, o) : i[r].playFlopAnim(t, e)
				}, e.prototype.showAllCard = function(t) {
					for (var e = 0; e < this.itemList.length; e++) this.itemList[e].showCrad(t)
				}, e.prototype.gameOut = function() {
					this.isPause = !0, d.default.getSingle()
						.timeOutView.showView()
				}, e.prototype.update = function(t) {
					this.isPause || (this.countDownTime -= t, this.setProgress(), this.countDownTime <= 0 && (this.isPause = !0, this.gameOut()))
				}, r([g([cc.Node])], e.prototype, "roundList", void 0), r([h], e)
			}(c.default);
		n.default = y, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Components/GameItem": "GameItem",
		"./Components/TitleAnim": "TitleAnim",
		"./Data/StaticData": "StaticData",
		"./Util": "Util",
		"./ViewManager": "ViewManager"
	}],
	GameWin: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "188a8SjQllLsYVcpUL44JfX", "GameWin");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Util"),
			u = t("./ViewManager"),
			p = cc._decorator,
			l = p.ccclass,
			d = (p.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.init = function() {
					this.btnNext = cc.find("Sprite/BtnCom", this.node), this.btnNext.on("click", this.onBtnNextClick, this), this.node.active = !1
				}, e.prototype.showView = function() {
					s.default.popupEffect(cc.find("Window", this.node)), this.node.active = !0
				}, e.prototype.onBtnNextClick = function() {
					a.default.play(a.AudioName.Click), this.toLuckDraw()
				}, e.prototype.toGameOver = function() {
					this.hideView(), u.default.getSingle()
						.turnView.showView(), u.default.getSingle()
						.luckyBackView.showView()
				}, e.prototype.toLuckDraw = function() {
					this.hideView(), u.default.getSingle()
						.turnView.showView()
				}, r([l], e)
			}(c.default));
		n.default = d, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Util": "Util",
		"./ViewManager": "ViewManager"
	}],
	HttpManager: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "adfe5F2o3xPO4MjYv7XwCnC", "HttpManager"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.HttpHeaders = void 0;
		var o = function() {
			function t() {}
			return t.post = function(t, e, n, o, i) {
				void 0 === o && (o = null), void 0 === i && (i = null);
				var r = new XMLHttpRequest;
				if (console.log(this.url + t), r.open("POST", this.url + t, !0), r.setRequestHeader("Content-Type", "application/json"), i && i.key)
					for (var a = 0; a < i.key.length; a++) r.setRequestHeader(i.key[a], i.value[a]);
				r.onreadystatechange = function() {
					if (4 == r.readyState && r.status >= 200 && r.status < 400) {
						var e = r.responseText;
						console.log(r.responseURL);
						var i = JSON.parse(e);
						console.log(e + "   " + t), n && n(i)
					} else 4 == r.readyState ? (o && o(), console.log("url=>" + t + " xhr.readyState=>" + r.readyState + "; status=>" + r.status)) : console.log("url=>" + t + " xhr.readyState=>" + r.readyState + "; status=>" + r.status)
				}, r.timeout = 8e3, console.log(e), console.log(JSON.stringify(e)), r.send(JSON.stringify(e))
			}, t.postUrl = function(t, e, n, o) {
				void 0 === o && (o = null);
				var i = new XMLHttpRequest;
				if (console.log(t), i.open("POST", t, !0), i.setRequestHeader("Content-Type", "application/json"), o && o.key)
					for (var r = 0; r < o.key.length; r++) i.setRequestHeader(o.key[r], o.value[r]);
				i.onreadystatechange = function() {
					if (4 == i.readyState && i.status >= 200 && i.status < 400) {
						var e = i.responseText;
						console.log(i.responseURL);
						var o = JSON.parse(e);
						console.log(e + "   " + t), n && n(o)
					} else console.log("url=>" + t + " xhr.readyState=>" + i.readyState + "; status=>" + i.status)
				}, i.timeout = 8e3, console.log(e), console.log(JSON.stringify(e)), i.send(JSON.stringify(e))
			}, t.getUrl = function(t, e, n) {
				void 0 === n && (n = null);
				var o = new XMLHttpRequest;
				if (o.open("GET", t, !0), n && n.key)
					for (var i = 0; i < n.key.length; i++) o.setRequestHeader(n.key[i], n.value[i]);
				o.onreadystatechange = function() {
					if (4 == o.readyState && o.status >= 200 && o.status < 400) {
						var n = o.responseText,
							i = JSON.parse(n);
						console.log(n + "   " + t), e && e(i)
					} else console.log("url=>" + t + " xhr.readyState=>" + o.readyState + "; status=>" + o.status)
				}, o.timeout = 8e3, o.send()
			}, t.get = function(t, e, n, o) {
				void 0 === o && (o = null);
				var i = new XMLHttpRequest,
					r = "";
				if (e && (Object.keys(e)
					.forEach(function(t) {
						r += t + "=" + e[t] + "&"
					}), "" !== r && (r = r.substr(0, r.lastIndexOf("&")))), console.log(this.url + t + "?" + r), i.open("GET", this.url + t + "?" + r, !0), i.setRequestHeader("Content-Type", "application/json"), o && o.key)
					for (var a = 0; a < o.key.length; a++) i.setRequestHeader(o.key[a], o.value[a]);
				e && (Object.keys(e)
					.forEach(function(t) {
						r += t + "=" + e[t] + "&"
					}), "" !== r && (r = r.substr(0, r.lastIndexOf("&")))), i.onreadystatechange = function() {
					if (4 == i.readyState && i.status >= 200 && i.status < 400) {
						var e = i.responseText;
						console.log(e);
						var o = JSON.parse(e);
						console.log(e + "   " + t), n && n(o)
					} else console.log("url=>" + t + " xhr.readyState=>" + i.readyState + "; status=>" + i.status)
				}, i.timeout = 8e3, i.send()
			}, t.uploadImage = function(t, e, n, o, i) {
				void 0 === o && (o = null), void 0 === i && (i = null);
				var r = new XMLHttpRequest;
				console.log(this.url + t), r.open("POST", this.url + t, !0);
				var a = new FormData;
				if (a.append("img", e), i && i.key)
					for (var c = 0; c < i.key.length; c++) r.setRequestHeader(i.key[c], i.value[c]);
				r.onreadystatechange = function() {
					if (4 == r.readyState && r.status >= 200 && r.status < 400) {
						var e = r.responseText;
						console.log(r.responseURL);
						var i = JSON.parse(e);
						console.log(e + "   " + t), n && n(i)
					} else 4 == r.readyState ? (o && o(), console.log("url=>" + t + " xhr.readyState=>" + r.readyState + "; status=>" + r.status)) : console.log("url=>" + t + " xhr.readyState=>" + r.readyState + "; status=>" + r.status)
				}, r.timeout = 8e3, r.send(a)
			}, t.url = "https://www.jiangzhiapp.com/game/ai/", t
		}();
		n.default = o;
		n.HttpHeaders = function() {}, cc._RF.pop()
	}, {}],
	HttpUrl: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "ab4330Sbe1OoawpCgKtLgIW", "HttpUrl"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.HttpData = void 0;
		var o = function() {
			function t() {}
			return t.WX_CODO = "wx/wxapi.php", t.MAIN_INDEX = "api/index.php", t
		}();
		n.default = o;
		var i = function() {
			function t() {}
			return t.WX_CODO = {
				action: "gettoken"
			}, t.GET_JSSDK = {
				action: "jssdk"
			}, t.DO_LOTTERY = {
				c: "aigame",
				a: "doLottery"
			}, t.LOTTERY_INFO = {
				c: "aigame",
				a: "findLotteryInfoByOpenId"
			}, t.SAVE_PHONE = {
				c: "aigame",
				a: "doSavePhoneNo"
			}, t
		}();
		n.HttpData = i, cc._RF.pop()
	}, {}],
	KnowledgePopup: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "68fdcwP94pJebLHfHcqvgBI", "KnowledgePopup");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Util"),
			u = cc._decorator,
			p = u.ccclass,
			l = u.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.knowSprites = [], e.knowHeights = [], e
				}
				return i(e, t), e.prototype.init = function() {
					cc.find("Window/BtnNext", this.node)
						.on("click", this.onBtnNextClick, this), this.knowledgeName = cc.find("Window/Name", this.node)
						.getComponent(cc.Label), this.knowledgeImg = cc.find("Window/Image", this.node)
						.getComponent(cc.Sprite), this.knowledgeContent = cc.find("Window/Content", this.node)
						.getComponent(cc.Label), this.window = cc.find("Window", this.node), this.node.active = !1
				}, e.prototype.showView1 = function(t, e) {
					this.node.active = !0, this.callback = e, this.knowledgeImg.spriteFrame = this.knowSprites[t], s.default.popupEffect(cc.find("Window", this.node))
				}, e.prototype.onBtnNextClick = function() {
					a.default.play(a.AudioName.Click), this.hideView(), this.callback && this.callback()
				}, r([l([cc.SpriteFrame])], e.prototype, "knowSprites", void 0), r([l([Number])], e.prototype, "knowHeights", void 0), r([p], e)
			}(c.default);
		n.default = d, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Util": "Util"
	}],
	LuckyBackView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "0a832nscJxCepXltF/jG60F", "LuckyBackView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./ViewManager"),
			u = cc._decorator,
			p = u.ccclass,
			l = (u.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.init = function() {
					this.btnBack = cc.find("Window/BtnBack", this.node), this.btnBackHome = cc.find("Window/BtnShare", this.node), this.btnBack.on("click", this.onBtnBackHomeClick, this), this.btnBackHome.on("click", this.onBtnBackHomeClick, this), this.node.active = !1
				}, e.prototype.showView2 = function(t) {
					console.log(t), cc.find("Window/Label", this.node)
						.getComponent(cc.Label)
						.string = t, this.showView()
				}, e.prototype.onBtnBackHomeClick = function() {
					a.default.play(a.AudioName.Click), s.default.getSingle()
						.turnView.hideView(), this.hideView(), s.default.getSingle()
						.startView.showView()
				}, r([p], e)
			}(c.default));
		n.default = l, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./ViewManager": "ViewManager"
	}],
	ShareView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "0cfc7tA2DxOboIQO7mQB20y", "ShareView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Util"),
			u = t("./ViewManager"),
			p = cc._decorator,
			l = p.ccclass,
			d = (p.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.init = function() {
					this.btnBack = cc.find("Window/BtnBack", this.node), this.btnShare = cc.find("Window/BtnShare", this.node), this.btnBack.on("click", this.onBtnBackClick, this), this.btnShare.on("click", this.onBtnShareClick, this), this.node.active = !1
				}, e.prototype.showView = function() {
					s.default.popupEffect(cc.find("Window", this.node)), this.node.active = !0
				}, e.prototype.onBtnBackClick = function() {}, e.prototype.onBtnShareClick = function() {
					a.default.play(a.AudioName.Click), u.default.getSingle()
						.showMask()
				}, r([l], e)
			}(c.default));
		n.default = d, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Util": "Util",
		"./ViewManager": "ViewManager"
	}],
	StartView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "5798e8NsxNGWZdJ5nK2F5Es", "StartView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Data/StaticData"),
			u = t("./Http/HttpManager"),
			p = t("./Http/HttpUrl"),
			l = t("./Util"),
			d = t("./ViewManager"),
			f = cc._decorator,
			h = f.ccclass,
			g = (f.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.init = function() {
					var t = this;
					this.btnStart = cc.find("BtnStart", this.node), this.btnStart.on("click", this.onBtnStartClick, this), this.btnStart.getComponent(cc.Button)
						.interactable = !1, s.default.isTest ? (this.getTestOpenId(), this.btnStart.getComponent(cc.Button)
							.interactable = !0) : this.getOpenId(this.getCode(), function() {
							t.btnStart.getComponent(cc.Button)
								.interactable = !0
						})
				}, e.prototype.onBtnStartClick = function() {
					a.default.play(a.AudioName.Click), d.default.getSingle()
						.gameView.showView(), this.hideView()
				}, e.prototype.getTestOpenId = function() {
					s.default.setOpenid(l.default.randowString(28))
				}, e.prototype.getCode = function() {
					var t = encodeURIComponent(window.location.href);
					console.log(t);
					var e = this.getURL()
						.code;
					if (e) return e;
					window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx45a727e8a427adcf&redirect_uri=" + t + "&response_type=code&snsapi_base&state=STATE#wechat_redirect"
				}, e.prototype.getOpenId = function(t, e) {
					var n = p.HttpData.WX_CODO;
					n.code = t, u.default.get(p.default.WX_CODO, n, function(t) {
						t.openid ? (s.default.setOpenid(t.openid), e && e()) : window.location.href = window.location.href.split("?")[0]
					})
				}, e.prototype.getURL = function() {
					var t = location.search;
					console.log("\u89e3\u6790URL");
					var e = new Object;
					if (-1 != t.indexOf("?"))
						for (var n = t.substring(1)
							.split("&"), o = 0; o < n.length; o++) e[n[o].split("=")[0]] = unescape(n[o].split("=")[1]);
					return e
				}, r([h], e)
			}(c.default));
		n.default = g, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Data/StaticData": "StaticData",
		"./Http/HttpManager": "HttpManager",
		"./Http/HttpUrl": "HttpUrl",
		"./Util": "Util",
		"./ViewManager": "ViewManager"
	}],
	StaticData: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "4fc73pXlD1Jb6+W46xGSWZj", "StaticData"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = t("../Http/HttpManager"),
			i = t("../Http/HttpUrl"),
			r = function() {
				function t() {}
				return t.getOpenid = function() {
					return this.m_openId
				}, t.setOpenid = function(t) {
					this.m_openId = t
				}, t.getToken = function() {
					return this.m_token
				}, t.setToken = function(t) {
					this.m_token = t
				}, t.setShareFriend = function() {
					var t = window.wx;
					if (t) {
						var e = this.getRootPath() + "Image/Icon.png";
						console.log(e), t.ready(function() {
							t.updateAppMessageShareData({
								title: "\u4e3a\u7231\u4f20\u9012",
								desc: "\u5b66\u827e\u6ecb\u75c5\u9632\u6cbb\u77e5\u8bc6\uff0c\u73a9\u6e38\u620f\u62bd\u5956\u52b1",
								link: window.location.href.split("?")[0],
								imgUrl: e,
								success: function() {
									console.log("\u81ea\u5b9a\u4e49\u201c\u5206\u4eab\u7ed9\u670b\u53cb\u201d\u53ca\u201c\u5206\u4eab\u5230QQ\u201d\u6309\u94ae\u7684\u5206\u4eab\u5185\u5bb9\uff0c\u6210\u529f")
								}
							})
						})
					}
				}, t.setShare = function() {
					var t = window.wx;
					if (t) {
						var e = this.getRootPath() + "Image/Icon.png";
						console.log(e), t.ready(function() {
							t.updateTimelineShareData({
								title: "\u4e3a\u7231\u4f20\u9012",
								link: window.location.href.split("?")[0],
								imgUrl: e,
								success: function() {
									console.log("\u81ea\u5b9a\u4e49\u201c\u5206\u4eab\u5230\u670b\u53cb\u5708\u201d\u53ca\u201c\u5206\u4eab\u5230 QQ \u7a7a\u95f4\u201d\u6309\u94ae\u7684\u5206\u4eab\u5185\u5bb9\uff0c\u6210\u529f")
								}
							})
						})
					}
				}, t.setConfig = function(t, e) {
					void 0 === t && (t = !1);
					var n = window.wx;
					if (n) {
						var r = i.HttpData.GET_JSSDK;
						r.url = encodeURIComponent(location.href.split("#")[0]), o.default.get(i.default.WX_CODO, r, function(o) {
							var i = o;
							console.log(i), t && console.log("\u83b7\u53d6\u4f01\u4e1a\u7b7e\u540d\u6210\u529f");
							var r = {};
							r.appId = i.appId, r.debug = t, r.timestamp = i.timestamp, r.nonceStr = i.nonceStr, r.signature = i.signature, r.jsApiList = ["updateTimelineShareData", "updateAppMessageShareData"], console.log(r), n.config(r), e && e()
						})
					}
				}, t.getRootPath = function() {
					return window.location.origin + (window.location.pathname + "/../")
				}, t.isTest = !1, t
			}();
		n.default = r, cc._RF.pop()
	}, {
		"../Http/HttpManager": "HttpManager",
		"../Http/HttpUrl": "HttpUrl"
	}],
	TimeOutView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "979810fDpVBX59hvf5qaVGx", "TimeOutView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Util"),
			u = t("./ViewManager"),
			p = cc._decorator,
			l = p.ccclass,
			d = (p.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.init = function() {
					cc.find("Window/BtnAgain", this.node)
						.on("click", this.onBtnAgainClick, this), this.node.active = !1
				}, e.prototype.showView = function() {
					s.default.popupEffect(cc.find("Window", this.node)), this.node.active = !0
				}, e.prototype.onBtnAgainClick = function() {
					a.default.play(a.AudioName.Click), u.default.getSingle()
						.gameView.hideView(), this.hideView(), u.default.getSingle()
						.startView.showView()
				}, r([l], e)
			}(c.default));
		n.default = d, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Util": "Util",
		"./ViewManager": "ViewManager"
	}],
	TitleAnimManager: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "4bbc6oGPgBHDLPvJuQ+R6c8", "TitleAnimManager");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("./TitleAnim"),
			c = cc._decorator,
			s = c.ccclass,
			u = (c.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.start = function() {
					this.showSprite1(), this.hideSprite2(), this.playTitleAnim()
				}, e.prototype.playTitleAnim = function() {
					var t = this;
					this.scheduleOnce(function() {
						t.showSprite2(), t.hideSprite1(), t.scheduleOnce(function() {
							t.showSprite1(), t.hideSprite2(), t.playTitleAnim()
						}, 3)
					}, 3)
				}, e.prototype.showSprite1 = function() {
					for (var t = a.default.sprite1, e = 0; e < t.length; e++) t[e] && (t[e].active = !0)
				}, e.prototype.hideSprite1 = function() {
					for (var t = a.default.sprite1, e = 0; e < t.length; e++) t[e] && (t[e].active = !1)
				}, e.prototype.showSprite2 = function() {
					for (var t = a.default.sprite2, e = 0; e < t.length; e++) t[e] && (t[e].active = !0)
				}, e.prototype.hideSprite2 = function() {
					for (var t = a.default.sprite2, e = 0; e < t.length; e++) t[e] && (t[e].active = !1)
				}, r([s], e)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {
		"./TitleAnim": "TitleAnim"
	}],
	TitleAnim: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "5d93do/YglCcpe6vYhcDBI5", "TitleAnim");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			c = a.ccclass,
			s = (a.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var n;
				return i(e, t), n = e, e.prototype.init = function() {
					n.sprite1.push(cc.find("Sprite_1", this.node)), n.sprite2.push(cc.find("Sprite_2", this.node))
				}, e.prototype.start = function() {}, e.sprite1 = new Array, e.sprite2 = new Array, n = r([c], e)
			}(cc.Component));
		n.default = s, cc._RF.pop()
	}, {}],
	Tool: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "f3e299qxjZAPZ5ySXMq1Jj7", "Tool"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.Tool = void 0,
			function(t) {
				var e = function() {
					function t() {}
					return t.getIntRandom = function(t, e) {
						return Math.floor(this.getFloatRandom(t, e))
					}, t.getFloatRandom = function(t, e) {
						return t + Math.random() * (e - t)
					}, t
				}();
				t.Matht = e;
				var n = function() {
					function t() {}
					return t.scale = function(t, e, n, o, i) {
						return void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === o && (o = .3), void 0 === i && (i = ""), t.scale = e, cc.tween(t)
							.to(o, {
								scale: n
							}, {
								easing: i
							})
					}, t
				}();
				t.CommonTween = n;
				var o = function() {
					function t() {}
					return t.curtStamp = function() {
						return (new Date)
							.getTime()
					}, t.formatSeconds = function(t, e) {
						void 0 === e && (e = !1);
						var n = t,
							o = 0,
							i = 0,
							r = e ? "" : "\u79d2",
							a = e ? ":" : "\u5206",
							c = e ? ":" : "\u65f6";
						n >= 60 && (o = n / 60, n %= 60, o >= 60 && (i = o / 60, o %= 60));
						var s = "" + n;
						return s = n < 10 && n >= 0 ? "0" + n.toFixed(0) + r : "" + n.toFixed(0) + r, s = o < 10 && o >= 0 ? "0" + Math.floor(o) + a + s : "" + Math.floor(o) + a + s, i > 0 && (s = "" + Math.floor(i) + c + s), s
					}, t
				}();
				t.Time = o;
				var i = function() {
					function t() {}
					return t.Log = function(t, e) {
						void 0 === e && (e = "#FF0000"), console.log("%c" + t, "color:" + e)
					}, t
				}();
				t.LogColor = i;
				var r = function() {
					function t() {}
					return t.loadSprite = function(t, e) {
						cc.resources.load(t, function(t, n) {
							e.spriteFrame = new cc.SpriteFrame(n)
						})
					}, t.loadJson = function(t) {
						var e = "Json/" + t;
						return new Promise(function(t, n) {
							cc.loader.loadRes(e, function(e, o) {
								e ? n(e) : t(o.json)
							})
						})
					}, t.loadImage = function(t) {
						return new Promise(function(e, n) {
							cc.resources.loadDir(t, cc.SpriteFrame, function(o, i) {
								if (o) n(o);
								else {
									var r = {};
									r.path = t, r.assets = i, e(r)
								}
							})
						})
					}, t
				}();
				t.Res = r
			}(n.Tool || (n.Tool = {})), cc._RF.pop()
	}, {}],
	TurnView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "626128YVxJKdpiSAlbX1YYo", "TurnView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("./Components/BaseView"),
			c = t("./Components/TitleAnim"),
			s = t("./Data/StaticData"),
			u = t("./Http/HttpManager"),
			p = t("./Http/HttpUrl"),
			l = t("./ViewManager"),
			d = cc._decorator,
			f = d.ccclass,
			h = d.property,
			g = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.isTurn = !1, e.maxSpeed = 720, e.acc = 100, e.winPrize = [
						[0, 23],
						[93, 148],
						[219, 267],
						[333, 360]
					], e.notWinPrize = [
						[30, 87],
						[158, 209],
						[274, 325]
					], e.m_rotAngle = 0, e.m_rotSpeed = 0, e.isStopTurn = !1, e.isLotterying = !1, e.isLotteryEnd = !1, e
				}
				return i(e, t), Object.defineProperty(e.prototype, "rotAngle", {
					get: function() {
						return this.m_rotAngle
					},
					set: function(t) {
						this.m_rotAngle = t % 360
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "rotSpeed", {
					get: function() {
						return this.m_rotSpeed
					},
					set: function(t) {
						this.m_rotSpeed = Math.min(t, this.maxSpeed)
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.init = function() {
					this.stageTxt = cc.find("Title/Stage/Label", this.node)
						.getComponent(cc.Label), this.countDownTxt = cc.find("Title/CountDown/Label", this.node)
						.getComponent(cc.Label), this.turnTable = cc.find("GameNode/TurnTable", this.node), this.turnTable.on("click", this.startTurn, this), this.node.active = !1, cc.find("Title", this.node)
						.getComponent(c.default)
						.init(), this.stageTxt.string = "5"
				}, e.prototype.showView = function() {
					this.countDownTxt.string = s.default.countDownTime.toFixed(0), this.turnState = -1, this.isTurn = !1, this.isStopTurn = !1, this.isLotterying = !1, this.isLotteryEnd = !1, this.node.active = !0
				}, e.prototype.startTurn = function() {
					var t = this;
					if (!this.isLotterying && !this.isLotteryEnd) {
						this.isLotterying = !0, this.scheduleOnce(function() {
							t.isLotterying = !1
						}, 3);
						var e = p.HttpData.DO_LOTTERY;
						e.openid = s.default.getOpenid(), u.default.get(p.default.MAIN_INDEX, e, function(e) {
							if (t.isLotteryEnd = !0, 1 == e.ret) {
								t.isTurn || (t.isTurn = !0, t.rotSpeed = 0);
								var n = e.data;
								t.scheduleOnce(function() {
									t.setTurnPos(n.lotteryResult)
								}, 3)
							} else switch (e.code.toString()) {
								case "2":
								case "3":
								case "4":
									l.default.getSingle()
										.luckyBackView.showView2(e.msg);
									break;
								default:
									l.default.getSingle()
										.luckyBackView.showView2("\u60a8\u5df2\u62bd\u8fc7\u5956\u4e86\u54df\uff5e")
							}
						})
					}
				}, e.prototype.setTurnPos = function(t) {
					var e;
					switch (this.turnState = t, console.log(t), t.toString()) {
						case "0":
							e = this.notWinPrize;
							break;
						case "1":
							e = this.winPrize;
							break;
						default:
							return
					}
					var n = this.getAreaPos(e);
					this.stopTurnTo(n)
				}, e.prototype.getAreaPos = function(t) {
					for (var e = 0, n = 0; n < t.length; n++) e += (i = t[n])[1] - i[0];
					var o = Math.random() * e;
					for (n = 0; n < t.length; n++) {
						var i, r = (i = t[n])[1] - i[0];
						if (o <= r) return i[0] + o;
						o -= r
					}
					return -1
				}, e.prototype.stopTurnTo = function(t) {
					t = 3600 + t, this.stopRotAngle = t, this.rotAngle2 = this.m_rotAngle, this.isTurn = !1, this.isStopTurn = !0
				}, e.prototype.stopTurn = function(t) {
					this.isStopTurn && (this.rotSpeed = Math.min(this.stopRotAngle - this.rotAngle2, this.maxSpeed), this.rotSpeed = Math.max(this.rotSpeed, .1), this.rotAngle2 += this.rotSpeed * t, this.stopRotAngle - this.rotAngle2 <= .3 && (this.rotAngle2 = this.stopRotAngle, this.isStopTurn = !1, this.isTurn = !1, console.log("turnOver"), this.turnOver()), this.turnTable.angle = this.rotAngle2)
				}, e.prototype.turnOver = function() {
					switch (this.turnState.toString()) {
						case "0":
							console.log("turnOver2"), l.default.getSingle()
								.shareView2.showView();
							break;
						case "1":
							console.log("turnOver1"), l.default.getSingle()
								.winView.showView();
							break;
						default:
							return
					}
				}, e.prototype.update = function(t) {
					this.isTurn && (this.rotSpeed += t * this.acc, this.rotAngle += this.rotSpeed * t, this.turnTable.angle = this.rotAngle), this.stopTurn(t)
				}, r([h(Number)], e.prototype, "maxSpeed", void 0), r([h(Number)], e.prototype, "acc", void 0), r([f], e)
			}(a.default);
		n.default = g, cc._RF.pop()
	}, {
		"./Components/BaseView": "BaseView",
		"./Components/TitleAnim": "TitleAnim",
		"./Data/StaticData": "StaticData",
		"./Http/HttpManager": "HttpManager",
		"./Http/HttpUrl": "HttpUrl",
		"./ViewManager": "ViewManager"
	}],
	Util: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "3c7a04kEJ5KPZmxqLwQRxwS", "Util");
		var o = this && this.__decorate || function(t, e, n, o) {
			var i, r = arguments.length,
				a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
			else
				for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
			return r > 3 && a && Object.defineProperty(e, n, a), a
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = !1,
			r = cc._decorator,
			a = r.ccclass,
			c = (r.property, function() {
				function t() {}
				return t.shake = function(t, e, n, o, r) {
					if (void 0 === e && (e = 2), void 0 === n && (n = 4), void 0 === o && (o = 40), !i) {
						i = !0;
						var a = cc.v2(t.x, t.y),
							c = [0, 0],
							s = 0,
							u = setInterval(function() {
								c[s % 2] = s++ % 4 < 2 ? 0 : n, s > 4 * e + 1 && (i = !1, clearInterval(u), s = 0, r && r()), t.x = c[0] + a.x, t.y = c[1] + a.y
							}, o)
					}
				}, t.Shake = function(t, e) {
					cc.tween(t)
						.by(.02, {
							position: cc.v3(3, -3, 0)
						})
						.by(.02, {
							position: cc.v3(-3, -3, 0)
						})
						.by(.02, {
							position: cc.v3(-3, 3, 0)
						})
						.by(.02, {
							position: cc.v3(3, 3, 0)
						})
						.union()
						.repeat(5)
						.union()
						.call(function() {
							e && e()
						})
						.start()
				}, t.ShowNode = function(t, e, n) {
					t.active = !0, n || (n = 255), 0 != e ? cc.tween(t)
						.to(e, {
							opacity: n
						}, {
							easing: "fade"
						})
						.start() : t.opacity = n
				}, t.HideNode = function(t, e, n) {
					if (n || (n = 0), 0 != e) cc.tween(t)
						.to(.5, {
							opacity: n
						}, {
							easing: "fade"
						})
						.call(function() {
							0 == n && (t.active = !1)
						})
						.start();
					else {
						if (t.opacity = n, 0 != n) return;
						t.active = !1
					}
				}, t.ChangePos = function(t, e) {
					var n = e.parent.convertToWorldSpaceAR(e.position);
					return t.parent.convertToNodeSpaceAR(n)
				}, t.localConverWorldPointAR = function(t) {
					return t.convertToWorldSpaceAR(cc.v2(0, 0))
				}, t.worldConvertLoaclPointAR = function(t, e) {
					return t.convertToNodeSpaceAR(e)
				}, t.convertOtherNodeSpace = function(t, e) {
					var n = this.localConverWorldPointAR(t);
					return this.worldConvertLoaclPointAR(e, n)
				}, t.RunActionFinger = function(t, e, n) {
					var o = this;
					void 0 === n && (n = 0);
					var i = cc.tween;
					i(t)
						.to(.6, {
							position: e[n]
						})
						.repeat(3, i()
							.by(.2, {
								y: 20
							})
							.by(.2, {
								y: -20
							}))
						.call(function() {
							var i = n + 1 > e.length - 1 ? 0 : n + 1;
							o.RunActionFinger(t, e, i)
						})
						.start()
				}, t.LableEffect = function(t, e) {
					if ((e = e || {})
						.initNum != e.num) var n = e.time,
						o = e.num,
						i = e.regulator || 100,
						r = (o - e.initNum) / (n / i),
						a = e.initNum,
						c = e.initNum,
						s = setInterval(function() {
							(a += r) >= o && e.initNum < o && (clearInterval(s), a = o), a <= o && e.initNum > o && (clearInterval(s), a = o);
							var n = Math.floor(a);
							n != c && (c = n, t.string = c + "")
						}, 30)
				}, t.FlipCard = function(t) {
					(0, cc.tween)(t)
					.to(.3, {
							scaleX: 0,
							scaleY: 1
						})
						.to(.3, {
							scaleX: 1,
							scaleY: 1
						})
						.start()
				}, t.randomArray = function(t) {
					return t.length > 0 ? t[Math.floor(t.length * Math.random())] : null
				}, t.randomIntArray = function(t, e, n) {
					e - t + 1 < n && console.error("\u6570\u91cf\u8d85\u8fc7\u6700\u5927\u533a\u95f4");
					for (var o = [], i = 0; i < e - t + 1; i++) o.push(i + t);
					var r = [];
					for (i = 0; i < n; i++) {
						var a = Math.floor(Math.random() * o.length);
						r.push(o.splice(a, 1)[0])
					}
					return r
				}, t.randowString = function(t) {
					t = t || 32;
					for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = e.length, o = "", i = 0; i < t; i++) o += e.charAt(Math.floor(Math.random() * n));
					return o
				}, t.swap = function(t, e, n) {
					if (e != n) {
						var o = t[e];
						t[e] = t[n], t[n] = o
					}
				}, t.find = function(t, e, n) {
					void 0 === n && (n = null);
					for (var o = 0; o < t.length; o++)
						if (n) {
							if (t[o][n] == e) return o
						} else if (t[o] == e) return o;
					return -1
				}, t.randomInteger = function(t, e) {
					return Math.floor(Math.random() * (e - t + 1) + t)
				}, t.random = function(t, e) {
					return Math.random() * (e - t) + t
				}, t.interval = function(t, e, n) {
					return Math.max(t, Math.min(e, n))
				}, t.getLength = function(t) {
					for (var e = t.split(""), n = 0, o = 0; o < e.length; o++) {
						var i = e[o];
						this.isChinese(i) ? n += 2 : n += 1
					}
					return n
				}, t.isChinese = function(t) {
					return /^.*[\u4E00-\u9FA5]+.*$/.test(t)
				}, t.isEqual = function(t, e, n) {
					return void 0 === n && (n = !1), n ? t.toLowerCase() == e.toLowerCase() : t == e
				}, t.upset = function(t) {
					for (var e, n, o = t.length - 1; o >= 0; o--) e = Math.random() * o | 0, n = t[o], t[o] = t[e], t[e] = n
				}, t.nonce = function(t) {
					for (var e = "", n = 0; n < t; n++) Math.random() < .5 ? e += String.fromCharCode(48 + Math.floor(9 * Math.random())) : e += String.fromCharCode(65 + Math.floor(25 * Math.random()));
					return e
				}, t.currentTime = function(t) {
					void 0 === t && (t = 1);
					var e = new Date;
					return 1 == t ? this.cover(e.getHours()) + ":" + this.cover(e.getMinutes()) + ":" + this.cover(e.getSeconds()) : 2 == t ? e.getFullYear() + "-" + this.cover(e.getMonth() + 1) + "-" + this.cover(e.getDate()) + " " + this.cover(e.getHours()) + ":" + this.cover(e.getMinutes()) + ":" + this.cover(e.getSeconds()) : 3 == t ? this.cover(e.getHours()) + ":" + this.cover(e.getMinutes()) : ""
				}, t.cover = function(t) {
					return t >= 10 ? t.toString() : "0" + t
				}, t.curtStamp = function() {
					return (new Date)
						.getTime()
				}, t.formatSeconds = function(t, e) {
					void 0 === e && (e = !1);
					var n = Math.ceil(t),
						o = 0,
						i = 0,
						r = e ? "" : "\u79d2",
						a = e ? ":" : "\u5206",
						c = e ? ":" : "\u65f6";
					n >= 60 && (o = n / 60, n %= 60, o >= 60 && (i = o / 60, o %= 60));
					var s = "" + n;
					return s = n < 10 && n >= 0 ? "0" + Math.floor(n) + r : "" + Math.floor(n) + r, s = o < 10 && o >= 0 ? "0" + Math.floor(o) + a + s : "" + Math.floor(o) + a + s, i > 0 && (s = "" + Math.floor(i) + c + s), s
				}, t.copy = function(t) {
					var e = null;
					if (t instanceof Array) e = [];
					else {
						if (!(t instanceof Object)) return t;
						e = {}
					}
					for (var n = Object.keys(t), o = 0, i = n.length; o < i; o++) {
						var r = n[o];
						e[r] = this.copy(t[r])
					}
					return e
				}, t.getAngle = function(t) {
					return 180 * t / Math.PI
				}, t.getRadian = function(t) {
					return t / 180 * Math.PI
				}, t.getRadianTwoPoint = function(t, e) {
					var n = e.x - t.x,
						o = e.y - t.y;
					return Math.atan2(o, n)
				}, t.getAngleTwoPoint = function(t, e) {
					var n = e.y - t.y,
						o = e.x - t.x,
						i = 0;
					return 0 == n ? o < 0 ? 180 : 0 : 0 == o ? (n > 0 ? i = 90 : n < 0 && (i = 270), i) : (i = this.getAngle(Math.atan(Math.abs(n) / Math.abs(o))), o > 0 ? n < 0 && (i = 360 - i) : i = n > 0 ? 180 - i : 180 + i, i)
				}, t.getDistance = function(t, e) {
					var n = e.x - t.x,
						o = e.y - t.y,
						i = Math.pow(n, 2) + Math.pow(o, 2);
					return Math.sqrt(i)
				}, t.exactCount = function(t, e) {
					void 0 === e && (e = 0);
					var n = Math.pow(10, e);
					return (t * n | 0) / n
				}, t.node1ToNode2 = function(t, e, n, o) {
					var i = e.parent.convertToWorldSpaceAR(e.position),
						r = t.parent.convertToNodeSpaceAR(i);
					cc.tween(t)
						.to(n, {
							position: r
						})
						.call(function() {
							o && o()
						})
						.start()
				}, t.localConvertWorldPointAR = function(t) {
					return t ? t.parent.convertToWorldSpaceAR(t.position) : null
				}, t.worldConvertLocalPointAR = function(t, e) {
					return t ? t.parent.convertToNodeSpaceAR(e) : null
				}, t.logColor = function(t, e) {
					console.log("%c" + t, "color:" + e)
				}, t.getRandomInt = function(t, e) {
					return void 0 === t && (t = 0), void 0 === e && (e = 1), Math.floor(Math.random() * (e - t) + t)
				}, t.getPseudoRandomInt = function(t, e) {
					return Math.ceil((9301 * t + 49297) % 233280 / 233280 * e)
				}, t.getPosAngle = function(t, e) {
					return Math.atan((e.y - t.y) / (e.x - t.x))
				}, t.angleToRadian = function(t) {
					return t * Math.PI / 180
				}, t.loadImgPng = function(t, e) {
					t += "?.png", cc.loader.load(t, function(t, n) {
						t ? console.error("\u83b7\u53d6\u8d44\u6e90\u5931\u8d25\uff1a" + t) : e && e(n)
					})
				}, t.getStringObjectByBytes = function(t, e) {
					var n = "",
						o = 0;
					t || (t = "");
					for (var i = 0; i < t.length; i++) {
						if (t.charCodeAt(i) < 128 ? o += 1 : o += 2, !(o <= e)) {
							n += "...";
							break
						}
						n += t.slice(i, i + 1)
					}
					return n
				}, t.popupEffect = function(t, e, n) {
					t ? (t.scale = .3, e ? n ? cc.tween(t)
						.to(.3, {
							scale: 1
						})
						.call(e, n)
						.start() : cc.tween(t)
						.to(.3, {
							scale: 1
						})
						.call(e)
						.start() : cc.tween(t)
						.to(.3, {
							scale: 1
						})
						.start()) : e && (n ? e.apply(n) : e())
				}, t.Const_Dura = [.3, .5, .8], t.Const_Dura_panel = [.2, .25, .4], t.Const_Prencent = [1.1, 1.15, 1.2], t.removeItem = function(t, e) {
					var n = t.indexOf(e);
					return -1 != n && (t.splice(n, 1), !0)
				}, o([a], t)
			}());
		n.default = c, cc._RF.pop()
	}, {}],
	ViewManager: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "875592ix01I9LQN4B/wyMPN", "ViewManager");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("./Data/StaticData"),
			c = t("./GameView"),
			s = t("./GameWin"),
			u = t("./KnowledgePopup"),
			p = t("./LuckyBackView"),
			l = t("./ShareView"),
			d = t("./StartView"),
			f = t("./TimeOutView"),
			h = t("./TurnView"),
			g = t("./WinView"),
			y = cc._decorator,
			w = y.ccclass,
			m = (y.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var n;
				return i(e, t), n = e, e.getSingle = function() {
					return this.single
				}, e.prototype.onLoad = function() {
					n.single = this, this.startView = cc.find("StartView", this.node)
						.getComponent(d.default), this.startView.init(), this.gameView = cc.find("GameView", this.node)
						.getComponent(c.default), this.gameView.init(), this.timeOutView = cc.find("TimeOutView", this.node)
						.getComponent(f.default), this.timeOutView.init(), this.gameWin = cc.find("GameWin", this.node)
						.getComponent(s.default), this.gameWin.init(), this.winView = cc.find("WinView", this.node)
						.getComponent(g.default), this.winView.init(), this.shareView1 = cc.find("ShareView1", this.node)
						.getComponent(l.default), this.shareView1.init(), this.shareView2 = cc.find("ShareView2", this.node)
						.getComponent(l.default), this.shareView2.init(), this.turnView = cc.find("TurnView", this.node)
						.getComponent(h.default), this.turnView.init(), this.luckyBackView = cc.find("LuckyBackView", this.node)
						.getComponent(p.default), this.luckyBackView.init(), this.knowledgePopup = cc.find("KnowledgePopup", this.node)
						.getComponent(u.default), this.knowledgePopup.init(), this.mask = cc.find("Mask", this.node), this.mask.active = !1
				}, e.prototype.showMask = function() {
					this.mask.active = !0
				}, e.prototype.hideMask = function() {
					this.mask.active = !1
				}, e.prototype.start = function() {
					this.isHaveWX()
				}, e.prototype.isHaveWX = function() {
					var t = this;
					window.wx ? a.default.setConfig(a.default.isTest, function() {
						a.default.setShareFriend(), a.default.setShare()
					}) : this.scheduleOnce(function() {
						t.isHaveWX()
					})
				}, n = r([w], e)
			}(cc.Component));
		n.default = m, cc._RF.pop()
	}, {
		"./Data/StaticData": "StaticData",
		"./GameView": "GameView",
		"./GameWin": "GameWin",
		"./KnowledgePopup": "KnowledgePopup",
		"./LuckyBackView": "LuckyBackView",
		"./ShareView": "ShareView",
		"./StartView": "StartView",
		"./TimeOutView": "TimeOutView",
		"./TurnView": "TurnView",
		"./WinView": "WinView"
	}],
	WinView: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "030a5NH8pVCLon/O/8Ui0xO", "WinView");
		var o, i = this && this.__extends || (o = function(t, e) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
					})(t, e)
			}, function(t, e) {
				function n() {
					this.constructor = t
				}
				o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}),
			r = this && this.__decorate || function(t, e, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
				else
					for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
				return r > 3 && a && Object.defineProperty(e, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = t("../Other/AudioManager"),
			c = t("./Components/BaseView"),
			s = t("./Data/StaticData"),
			u = t("./Http/HttpManager"),
			p = t("./Http/HttpUrl"),
			l = t("./ViewManager"),
			d = cc._decorator,
			f = d.ccclass,
			h = (d.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return i(e, t), e.prototype.init = function() {
					this.btnCom = cc.find("Window/BtnCom", this.node), this.btnBack = cc.find("Window/BtnBack", this.node), this.phoneEdit = cc.find("Window/PhoneEditBox", this.node)
						.getComponent(cc.EditBox), this.btnCom.on("click", this.onBtnComClick, this), this.warningLabel = cc.find("Window/WarningLabel", this.node)
						.getComponent(cc.Label), this.node.active = !1
				}, e.prototype.showView = function() {
					this.warningLabel.string = "", this.btnCom.position = new cc.Vec3(0, -270, 0), this.node.active = !0
				}, e.prototype.onBtnComClick = function() {
					a.default.play(a.AudioName.Click);
					var t = this.phoneEdit.string;
					t.length < 11 || "1" != t[0] ? (this.warningLabel.string = "\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u683c\u5f0f \u6709\u8bef\uff0c\u8bf7\u66f4\u6b63", this.btnCom.position = new cc.Vec3(0, -270, 0)) : (this.warningLabel.string = "", this.btnCom.position = new cc.Vec3(0, -270, 0), this.sendPhone())
				}, e.prototype.sendPhone = function() {
					var t = this;
					console.error("\u9700\u8981\u4e00\u4e2a\u5b9a\u65f6");
					var e = p.HttpData.SAVE_PHONE;
					e.openid = s.default.getOpenid(), e.phone = this.phoneEdit.string, u.default.get(p.default.MAIN_INDEX, e, function(e) {
						if (1 == e.ret) t.hideView(), l.default.getSingle()
							.shareView1.showView();
						else {
							switch (e.code) {
								case 2:
								case 3:
								case 5:
								case 6:
									t.warningLabel.string = e.msg, t.btnCom.position = new cc.Vec3(0, -270, 0);
									break;
								default:
									t.warningLabel.string = "\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u5df2\u9886 \u53d6\u8fc7\u5956\u52b1\uff5e", t.btnCom.position = new cc.Vec3(0, -270, 0)
							}
							console.log(e.code, e.msg)
						}
					})
				}, r([f], e)
			}(c.default));
		n.default = h, cc._RF.pop()
	}, {
		"../Other/AudioManager": "AudioManager",
		"./Components/BaseView": "BaseView",
		"./Data/StaticData": "StaticData",
		"./Http/HttpManager": "HttpManager",
		"./Http/HttpUrl": "HttpUrl",
		"./ViewManager": "ViewManager"
	}],
	WuJiangProto: [function(t, e, n) {
		"use strict";
		cc._RF.push(e, "cccd6wDQtJIhpFtc7SKtP8Q", "WuJiangProto"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.gameFinishQuitGame = n.gameFinish = n.gamePauseQuitGame = n.gameLoadFinish = n.sendDebugData = n.DebugData = n.OriginalData = void 0;
		n.default = function() {
			this.userPracticeId = 0, this.startTime = 0, this.endTime = 0, this.browserInfo = "", this.inputMode = 0, this.tempScore = 0, this.tempStar = 0, this.practiceStageStop = 0
		};
		var o = function() {
			function t() {
				this.practiceStage = [], this.isCorrect = [], this.cResp = [], this.uResp = [], this.respTime = [], this.cStimulus = [], this.uStimulus = [], this.playTips = []
			}
			return t.prototype.addOriginalData = function(t, e, n, o, i, r, a, c) {
				this.practiceStage.push(t), this.isCorrect.push(e), this.cResp.push(n), this.uResp.push(o), this.respTime.push(i), this.cStimulus.push(r), this.uStimulus.push(a), this.playTips.push(c)
			}, t.prototype.getOriginalData = function() {
				return {
					practiceStage: this.arrayToString(this.practiceStage),
					isCorrect: this.arrayToString(this.isCorrect),
					cResp: this.arrayToString(this.cResp),
					uResp: this.arrayToString(this.uResp),
					respTime: this.arrayToString(this.respTime),
					cStimulus: this.arrayToString(this.cStimulus),
					uStimulus: this.arrayToString(this.uStimulus),
					playTips: this.arrayToString(this.playTips)
				}
			}, t.prototype.getResultData = function() {
				var t = this.isCorrect.length,
					e = 0;
				this.isCorrect.forEach(function(t) {
					e += t
				});
				var n = t - e,
					o = e / t,
					i = 0,
					r = 0;
				return this.respTime.forEach(function(t) {
					t >= 0 && (i++, r += t)
				}), {
					totalNum: t,
					rightNum: e,
					wrongNum: n,
					respAcc: o,
					rtAverage: 0 == i ? 0 : r / i
				}
			}, t.prototype.arrayToString = function(t) {
				var e = "(";
				return t.forEach(function(t, n) {
					e += 0 != n ? "," + t : t
				}), e += ")"
			}, t
		}();
		n.OriginalData = o;
		n.DebugData = function() {}, n.sendDebugData = function(t) {
			var e = {
				logData: t
			};
			console.log(e), window.parent.postMessage(e, "*")
		}, n.gameLoadFinish = function() {
			console.log({
				loaded: 1
			}), window.parent.postMessage({
				loaded: 1
			}, "*")
		}, n.gamePauseQuitGame = function(t) {
			void 0 === t && (t = -1);
			var e = {
				gameEnd: t
			};
			console.log(e), window.parent.postMessage({
				gameEnd: t
			}, "*")
		}, n.gameFinish = function(t) {
			var e = {
				gameResultData: t
			};
			console.log(e), window.parent.postMessage(e, "*")
		}, n.gameFinishQuitGame = function(t) {
			var e = {
				gameEnd: t
			};
			console.log(e), window.parent.postMessage(e, "*")
		}, cc._RF.pop()
	}, {}]
}, {}, ["AudioManager", "AutoResizeLayer", "ExtendTool", "Tool", "WuJiangProto", "AuidoBtn", "BaseView", "GameItem", "TitleAnim", "TitleAnimManager", "StaticData", "GameView", "GameWin", "HttpManager", "HttpUrl", "KnowledgePopup", "LuckyBackView", "ShareView", "StartView", "TimeOutView", "TurnView", "Util", "ViewManager", "WinView"]);