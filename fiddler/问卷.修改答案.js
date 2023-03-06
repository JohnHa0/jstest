/*! For license information please see 24.c6b53ce8.chunk.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || [])
.push([
	[24, "commons~check-contact~check-password~check-phone~end-page~error-page~pay-time~white-list"], {
		13: function(t, e, n) {
			"use strict";
			n(37);

			function r(t) {
				var e;
				null === (e = window.parent) || void 0 === e || e.postMessage(t, "*")
			}
			e.a = {
				mounted: function() {
					r("hideFission")
				}
			}
		},
		20: function(t, e, n) {
			"use strict";

			function r(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function o(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next())
							.done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || function(t, e) {
					if (!t) return;
					if ("string" == typeof t) return i(t, e);
					var n = Object.prototype.toString.call(t)
						.slice(8, -1);
					"Object" === n && t.constructor && (n = t.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(t);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
				}(t, e) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function i(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function a(t) {
				if ((t = t.toLowerCase()) && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
					if (4 === t.length) {
						for (var e = "#", n = 1; n < 4; n += 1) e += t.slice(n, n + 1)
							.concat(t.slice(n, n + 1));
						t = e
					}
					for (var r = [], o = 1; o < 7; o += 2) r.push(parseInt("0x".concat(t.slice(o, o + 2))));
					return r
				}
				return t
			}

			function c(t) {
				var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = (null == t ? void 0 : t.val) || [],
					i = o(r, 4),
					c = i[0],
					u = void 0 === c ? "" : c,
					s = i[1],
					l = void 0 === s ? 1 : s,
					f = i[2],
					h = void 0 === f ? "" : f,
					d = i[3],
					p = void 0 === d ? "" : d;
				if (l = n.opacity || l, t) {
					var y = t.conf;
					e = y[u]
				} else e = n.color;
				if (e) {
					var v = a(e);
					return v instanceof Array == !0 ? "".concat(h, " rgba(")
						.concat(v.join(","), ",")
						.concat(l, ") ")
						.concat(p) : /^(rgb|RGB)/.test(v) ? (v = v.replace(/(?:\(|\)|rgb|RGB)*/g, "")
							.split(","), "".concat(h, " rgba(")
							.concat(v.join(","), ", ")
							.concat(l, ") ")
							.concat(p)) : "".concat(h, " ")
						.concat(v, " ")
						.concat(p)
				}
			}

			function u(t) {
				var e, n = t.appearanceSettings,
					o = void 0 === n ? {} : n,
					i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					a = o.style,
					u = o.background,
					s = (null == a ? void 0 : a.btnsColor) || "",
					l = (u && (u.bgOpacity || 0 === u.bgOpacity) && u.bgOpacity, u && ("select_color" !== u.backgroudType && u.bgImageUrl || "select_color" === u.backgroudType && u.bgColor), {
						COLOR_BUTTON: ".theme-button",
						COLOR_NAME: ".theme-color",
						COLOR_BG_NAME: ".theme-bg-color",
						COLOR_OPACITY_NAME: ".theme-opacity-color",
						PRIMARY: "COLOR.PRIMARY",
						OPTION_BG_HOVER: ".option-bg-hover"
					}),
					f = (r(e = {}, "".concat(l.COLOR_BUTTON, ",\n        ")
						.concat(l.COLOR_BUTTON, ":hover"), {
							"background-color": [l.PRIMARY]
						}), r(e, "".concat(l.COLOR_BG_NAME), {
						"background-color": [l.PRIMARY]
					}), r(e, "".concat(l.OPTION_BG_HOVER, ":hover"), {
						"background-color": [l.PRIMARY, .05]
					}), e),
					h = r({}, l.PRIMARY, s),
					d = Object.keys(f)
					.map((function(t) {
						var e = f[t];
						return "".concat(t, "{")
							.concat(Object.keys(e)
								.map((function(e) {
									return "".concat(e, ":")
										.concat(c({
											val: f[t][e],
											conf: h
										}), "!important;")
								}))
								.join(""), "}")
					}))
					.join("");
				if (i) return d;
				var p = document.getElementById("inject-style");
				p && p.remove(), document.head.insertAdjacentHTML("beforeend", '<style id="inject-style">'.concat(d, "</style>"))
			}

			function s() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
				return t ? (t = "".concat("".concat(t)
					.replace(/px/g, "")), "welcome" === e && ["14"].includes(t) || "option" === e && ["16"].includes(t) || "topic" === e && ["20"].includes(t) || "quesiton" === e && ["16"].includes(t) ? null : "".concat(t, "px")) : null
			}

			function l() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option",
					n = {};
				return Object.keys(t)
					.forEach((function(r) {
						var o = r,
							i = t[r];
						switch (r) {
							case "fontBold":
								o = "fontWeight";
								break;
							case "fontColor":
								o = "color";
								break;
							case "fontItalic":
								o = "fontStyle";
								break;
							case "fontUnderline":
								o = "textDecoration";
								break;
							case "fontSize":
								i = s(i, e)
						}
						i && (n[o] = i)
					})), n
			}
			n.d(e, "a", (function() {
				return c
			})), n.d(e, "c", (function() {
				return u
			})), n.d(e, "b", (function() {
				return l
			}))
		},
		24: function(t, e, n) {
			"use strict";
			var r = n(0),
				o = n(33);

			function i(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function a(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? i(Object(n), !0)
						.forEach((function(e) {
							c(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n))
						.forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
				}
				return t
			}

			function c(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}
			e.a = {
				props: {},
				methods: {
					initWxShareConfig: function(t) {
						var e = t.projectCustomAttr,
							n = t.projectTitle,
							i = t.beginDesc,
							c = t.accessAllowWxShare,
							u = t.pType,
							s = t.sceneType,
							l = t.errCode;
						Object(r.l)()
							.isMobile && Object(o.b)(a(a({}, e), {}, {
								accessAllowWxShare: c,
								projectTitle: n,
								beginDesc: i
							}), {
								pType: u,
								sceneType: s
							}, l)
					}
				}
			}
		},
		32: function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return o
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "g", (function() {
				return c
			})), n.d(e, "a", (function() {
				return u
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "j", (function() {
				return l
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "h", (function() {
				return h
			})), n.d(e, "i", (function() {
				return d
			}));
			var r = n(0);

			function o(t) {
				return "18516597166" === t
			}
			var i = function(t) {
					return {
						"6144477cb5ce87a66b505d77": 100,
						"61446d384400f26104b5c07a": 300,
						"5fcf1e4debc4044e854dd075": 300,
						"6312d19b80ad9115d6bd3d06": 300
					} [t]
				},
				a = function(t) {
					return {
						"6104e9cbbac485d4fdd0ac62": 50,
						"62f0c551d0af589d27260866": 500,
						"636de09bfb0723627e660866": 500
					} [t]
				};

			function c(t) {
				return ["6306ed41361904b6b917974f", "61d568b9fb072311350a2ff5"].includes(t)
			}
			var u = ["5c8f04a292beb57052a78b1f", "5760c8f0a320fcaf1e0889a4", "537bfa11f7405b1c38535cfa", "5fd0c9763631f2660dc5af3b", "616f88daebc4041d01e9665e", "5786052da320fc289e740614", "5562f43ef7405b2abf534ce6", "5d917fff92beb55b8bd72f1b"],
				s = ["5ce79a1192beb540ebf0aff6", "5ce79a1a92beb541047e1f47", "5ce79a1e92beb54109d2c47b", "5ce79a2392beb541172cc098", "5ce79aec92beb542deca2cd6", "5ce79a2792beb54124c02949", "5ce79a163631f2f1c9f06323", "5df8b43d92beb5624d780069"],
				l = ["UZBZJvxco7", "UZBZJv6L6E", "N3iINf"];

			function f(t) {
				return "613847d6fd631e5596e5fe19" === t
			}

			function h() {
				return "feyYJnO" !== Object(r.C)()
			}
			var d = ["UZBZJvMs6jT", "RBNRviw", "UZBZJvtHV", "UZBZJvJcWu"]
		},
		33: function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return w
			})), n.d(e, "b", (function() {
				return O
			}));
			var r = n(0),
				o = n(2),
				i = n(32);

			function a(t) {
				return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, a(t)
			}

			function c() {
				c = function() {
					return t
				};
				var t = {},
					e = Object.prototype,
					n = e.hasOwnProperty,
					r = "function" == typeof Symbol ? Symbol : {},
					o = r.iterator || "@@iterator",
					i = r.asyncIterator || "@@asyncIterator",
					u = r.toStringTag || "@@toStringTag";

				function s(t, e, n) {
					return Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), t[e]
				}
				try {
					s({}, "")
				} catch (t) {
					s = function(t, e, n) {
						return t[e] = n
					}
				}

				function l(t, e, n, r) {
					var o = e && e.prototype instanceof d ? e : d,
						i = Object.create(o.prototype),
						a = new _(r || []);
					return i._invoke = function(t, e, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return E()
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = j(a, n);
									if (c) {
										if (c === h) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var u = f(t, e, n);
								if ("normal" === u.type) {
									if (r = n.done ? "completed" : "suspendedYield", u.arg === h) continue;
									return {
										value: u.arg,
										done: n.done
									}
								}
								"throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
							}
						}
					}(t, n, a), i
				}

				function f(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}
				t.wrap = l;
				var h = {};

				function d() {}

				function p() {}

				function y() {}
				var v = {};
				s(v, o, (function() {
					return this
				}));
				var g = Object.getPrototypeOf,
					m = g && g(g(I([])));
				m && m !== e && n.call(m, o) && (v = m);
				var w = y.prototype = d.prototype = Object.create(v);

				function b(t) {
					["next", "throw", "return"].forEach((function(e) {
						s(t, e, (function(t) {
							return this._invoke(e, t)
						}))
					}))
				}

				function O(t, e) {
					function r(o, i, c, u) {
						var s = f(t[o], t, i);
						if ("throw" !== s.type) {
							var l = s.arg,
								h = l.value;
							return h && "object" == a(h) && n.call(h, "__await") ? e.resolve(h.__await)
								.then((function(t) {
									r("next", t, c, u)
								}), (function(t) {
									r("throw", t, c, u)
								})) : e.resolve(h)
								.then((function(t) {
									l.value = t, c(l)
								}), (function(t) {
									return r("throw", t, c, u)
								}))
						}
						u(s.arg)
					}
					var o;
					this._invoke = function(t, n) {
						function i() {
							return new e((function(e, o) {
								r(t, n, e, o)
							}))
						}
						return o = o ? o.then(i, i) : i()
					}
				}

				function j(t, e) {
					var n = t.iterator[e.method];
					if (void 0 === n) {
						if (e.delegate = null, "throw" === e.method) {
							if (t.iterator.return && (e.method = "return", e.arg = void 0, j(t, e), "throw" === e.method)) return h;
							e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
						}
						return h
					}
					var r = f(n, t.iterator, e.arg);
					if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, h;
					var o = r.arg;
					return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
				}

				function x(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function S(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function _(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(x, this), this.reset(!0)
				}

				function I(t) {
					if (t) {
						var e = t[o];
						if (e) return e.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var r = -1,
								i = function e() {
									for (; ++r < t.length;)
										if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
									return e.value = void 0, e.done = !0, e
								};
							return i.next = i
						}
					}
					return {
						next: E
					}
				}

				function E() {
					return {
						value: void 0,
						done: !0
					}
				}
				return p.prototype = y, s(w, "constructor", y), s(y, "constructor", p), p.displayName = s(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
				}, t.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
				}, t.awrap = function(t) {
					return {
						__await: t
					}
				}, b(O.prototype), s(O.prototype, i, (function() {
					return this
				})), t.AsyncIterator = O, t.async = function(e, n, r, o, i) {
					void 0 === i && (i = Promise);
					var a = new O(l(e, n, r, o), i);
					return t.isGeneratorFunction(n) ? a : a.next()
						.then((function(t) {
							return t.done ? t.value : a.next()
						}))
				}, b(w), s(w, u, "Generator"), s(w, o, (function() {
					return this
				})), s(w, "toString", (function() {
					return "[object Generator]"
				})), t.keys = function(t) {
					var e = [];
					for (var n in t) e.push(n);
					return e.reverse(),
						function n() {
							for (; e.length;) {
								var r = e.pop();
								if (r in t) return n.value = r, n.done = !1, n
							}
							return n.done = !0, n
						}
				}, t.values = I, _.prototype = {
					constructor: _,
					reset: function(t) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
							for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(t) {
						if (this.done) throw t;
						var e = this;

						function r(n, r) {
							return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
						}
						for (var o = this.tryEntries.length - 1; o >= 0; --o) {
							var i = this.tryEntries[o],
								a = i.completion;
							if ("root" === i.tryLoc) return r("end");
							if (i.tryLoc <= this.prev) {
								var c = n.call(i, "catchLoc"),
									u = n.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return r(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return r(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var o = this.tryEntries[r];
							if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
								var i = o;
								break
							}
						}
						i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
						var a = i ? i.completion : {};
						return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), h
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									S(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(t, e, n) {
						return this.delegate = {
							iterator: I(t),
							resultName: e,
							nextLoc: n
						}, "next" === this.method && (this.arg = void 0), h
					}
				}, t
			}

			function u(t, e, n, r, o, i, a) {
				try {
					var c = t[i](a),
						u = c.value
				} catch (t) {
					return void n(t)
				}
				c.done ? e(u) : Promise.resolve(u)
					.then(r, o)
			}

			function s(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(r, o) {
						var i = t.apply(e, n);

						function a(t) {
							u(i, r, o, a, c, "next", t)
						}

						function c(t) {
							u(i, r, o, a, c, "throw", t)
						}
						a(void 0)
					}))
				}
			}
			var l = "https://s1.wenjuan.com/static",
				f = {
					title: "内容违规，查看详情",
					link: "".concat(l, "/weixin/tip.html?v1.0"),
					imgUrl: "".concat(l, "/weixin/weigui.jpg"),
					desc: ""
				},
				h = "".concat(l, "/images/rspd_share_wenjuan.png");

			function d() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					e = t,
					n = /^http/;
				return n.test(e) || (e = h), e
			}

			function p() {
				return Object(r.x)("fissionId")
			}

			function y(t, e) {
				var n = Object(r.x)("user"),
					o = window.location.href;
				n && (o = encodeURI(decodeURI(o)));
				var i = t.wx_share_title || Object(r.B)(t.projectTitle || "");
				return {
					"default-share": {
						link: o,
						desc: t.wx_share_desc || Object(r.B)(t.beginDesc || ""),
						title: i,
						imgUrl: d(t.survey_share_pic_url)
					},
					fission_page: {
						title: i,
						desc: "这个项目分享给你，打开可快速复制哦～",
						imgUrl: d(),
						link: o
					}
				} [p() ? "fission_page" : "default-share"]
			}

			function v() {
				window.wx.hideAllNonBaseMenuItem()
			}

			function g(t, e) {
				var n = t.isAllowShare,
					r = t.projectType,
					o = t.baseShareData,
					a = window,
					c = a.WeixinJSBridge,
					u = a.wx,
					s = [40101, 40102, 40103, 40100].includes(e);
				if (2 === r.pType && f && (f.title = "微信暂不支持分享"), s && (o.title = "该项目不存在", o.imgUrl = d(), o.desc = "该项目不存在，请联系项目发布者"), 2 === r.pType) {
					if (p()) Object(i.h)() && (f = {
						title: "内容违规，查看详情",
						link: "https://s1.wenjuan.com/static/weixin/tip.html?v1.0",
						imgUrl: "https://s1.wenjuan.com/static/weixin/weigui.jpg",
						desc: ""
					});
					if (-1 !== [40112, 40108, 40118].indexOf(e)) return u.onMenuShareTimeline({
						title: f.title || o.title,
						link: f.link || o.link,
						imgUrl: f.imgUrl || o.imgUrl,
						desc: f.desc || o.desc
					}), !1;
					c.on("menu:share:timeline", (function() {
						1 === n && (f = null), c.invoke("shareTimeline", {
							title: f ? f.title : o.title,
							desc: f ? f.desc : o.desc || "",
							appid: "",
							img_width: "120",
							img_height: "120",
							link: f ? f.link : o.link,
							img_url: f ? f.imgUrl : o.imgUrl
						}, (function(t) {}))
					}))
				} else u.onMenuShareTimeline({
					title: o.title,
					link: o.link,
					imgUrl: o.imgUrl,
					desc: o.desc || "",
					type: "link"
				})
			}

			function m(t, e) {
				var n = t.baseShareData,
					r = window.wx;
				void 0 === window.WeixinJSBridge ? setTimeout((function() {
					var n;
					null === (n = document) || void 0 === n || n.addEventListener("WeixinJSBridgeReady", (function() {
						g(t, e)
					}))
				})) : g(t, e), r.onMenuShareAppMessage(n), r.onMenuShareQQ(n), r.onMenuShareWeibo(n)
			}

			function w() {
				return b.apply(this, arguments)
			}

			function b() {
				return (b = s(c()
						.mark((function t() {
							var e, n, i, a, u, s, l;
							return c()
								.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (e = Object(r.l)(), e.isWeixin) {
												t.next = 3;
												break
											}
											return t.abrupt("return", !1);
										case 3:
											if (n = window, i = n.wx, a = n.location, i) {
												t.next = 6;
												break
											}
											return t.abrupt("return");
										case 6:
											return u = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "hideMenuItems", "startRecord", "stopRecord", "onVoiceRecordEnd", "translateVoice", "scanQRCode"], t.next = 9, Object(o.k)({
												location_url: a.href
											});
										case 9:
											return s = t.sent, l = s.data.wx_share_info, i.config({
												debug: !1,
												appId: l.appId,
												timestamp: l.timestamp,
												nonceStr: l.noncestr,
												signature: l.signature,
												jsApiList: u,
												openTagList: ["wx-open-launch-weapp", "wx-open-subscribe"]
											}), t.abrupt("return", !0);
										case 13:
										case "end":
											return t.stop()
									}
								}), t)
						}))))
					.apply(this, arguments)
			}

			function O(t, e, n) {
				return j.apply(this, arguments)
			}

			function j() {
				return j = s(c()
					.mark((function t(e, n, o) {
						var i, a, u, s, l, f, h, d, p, g = arguments;
						return c()
							.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (i = g.length > 3 && void 0 !== g[3] ? g[3] : {}, a = Object(r.l)(), u = a.isWxwork, a.isWeixin) {
											t.next = 4;
											break
										}
										return t.abrupt("return", !1);
									case 4:
										if (s = window, l = s.wx) {
											t.next = 7;
											break
										}
										return t.abrupt("return");
									case 7:
										return t.next = 9, w();
									case 9:
										return f = t.sent, h = 2 === n.pType ? e.accessAllowWxShare : 1, Object(r.x)("openid") && l.ready((function() {
											l.hideMenuItems({
												menuList: ["menuItem:copyUrl"]
											})
										})), d = e.forbid_wx_share, p = "1" === e.answer_people_limit, l.ready((function() {
											if (0 === h || d || p && u) v();
											else {
												l.showAllNonBaseMenuItem();
												var t = y(e);
												t = Object.assign(t, i), m({
													isAllowShare: h,
													baseShareData: t,
													projectType: n
												}, o)
											}
										})), t.abrupt("return", f);
									case 17:
									case "end":
										return t.stop()
								}
							}), t)
					}))), j.apply(this, arguments)
			}
		},
		7: function(t, e, n) {
			"use strict";

			function r(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				try {
					var n = e ? window.sessionStorage.getItem("".concat(t)) : window.localStorage.getItem("".concat(t)),
						r = JSON.parse(n);
					return r
				} catch (t) {
					return null
				}
			}

			function o(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				try {
					return n ? window.sessionStorage.setItem("".concat(t), JSON.stringify(e)) : window.localStorage.setItem("".concat(t), JSON.stringify(e)), !0
				} catch (t) {
					return !1
				}
			}

			function i(t, e) {
				try {
					return e ? window.sessionStorage.removeItem("".concat(t)) : window.localStorage.removeItem("".concat(t)), !0
				} catch (t) {
					return !1
				}
			}

			function a(t, e) {
				try {
					return Object.keys(e ? window.sessionStorage : window.localStorage)
						.forEach((function(n, o) {
							var i = r(n, e);
							t(n, i, o)
						})), !0
				} catch (t) {
					return !1
				}
			}
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "d", (function() {
				return o
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "a", (function() {
				return a
			}))
		},
		724: function(t, e, n) {
			"use strict";
			n.r(e);
			var r = n(50),
				o = n(99),
				i = n.n(o);
			var a = n(7),
				c = n(20),
				u = n(46),
				s = n(0),
				l = n(24),
				f = n(13),
				h = n(32),
				d = n(2),
				p = n(4),
				y = n(8);

			function v(t) {
				return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, v(t)
			}

			function g() {
				g = function() {
					return t
				};
				var t = {},
					e = Object.prototype,
					n = e.hasOwnProperty,
					r = "function" == typeof Symbol ? Symbol : {},
					o = r.iterator || "@@iterator",
					i = r.asyncIterator || "@@asyncIterator",
					a = r.toStringTag || "@@toStringTag";

				function c(t, e, n) {
					return Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), t[e]
				}
				try {
					c({}, "")
				} catch (t) {
					c = function(t, e, n) {
						return t[e] = n
					}
				}

				function u(t, e, n, r) {
					var o = e && e.prototype instanceof f ? e : f,
						i = Object.create(o.prototype),
						a = new _(r || []);
					return i._invoke = function(t, e, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return E()
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = j(a, n);
									if (c) {
										if (c === l) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var u = s(t, e, n);
								if ("normal" === u.type) {
									if (r = n.done ? "completed" : "suspendedYield", u.arg === l) continue;
									return {
										value: u.arg,
										done: n.done
									}
								}
								"throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
							}
						}
					}(t, n, a), i
				}

				function s(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}
				t.wrap = u;
				var l = {};

				function f() {}

				function h() {}

				function d() {}
				var p = {};
				c(p, o, (function() {
					return this
				}));
				var y = Object.getPrototypeOf,
					m = y && y(y(I([])));
				m && m !== e && n.call(m, o) && (p = m);
				var w = d.prototype = f.prototype = Object.create(p);

				function b(t) {
					["next", "throw", "return"].forEach((function(e) {
						c(t, e, (function(t) {
							return this._invoke(e, t)
						}))
					}))
				}

				function O(t, e) {
					function r(o, i, a, c) {
						var u = s(t[o], t, i);
						if ("throw" !== u.type) {
							var l = u.arg,
								f = l.value;
							return f && "object" == v(f) && n.call(f, "__await") ? e.resolve(f.__await)
								.then((function(t) {
									r("next", t, a, c)
								}), (function(t) {
									r("throw", t, a, c)
								})) : e.resolve(f)
								.then((function(t) {
									l.value = t, a(l)
								}), (function(t) {
									return r("throw", t, a, c)
								}))
						}
						c(u.arg)
					}
					var o;
					this._invoke = function(t, n) {
						function i() {
							return new e((function(e, o) {
								r(t, n, e, o)
							}))
						}
						return o = o ? o.then(i, i) : i()
					}
				}

				function j(t, e) {
					var n = t.iterator[e.method];
					if (void 0 === n) {
						if (e.delegate = null, "throw" === e.method) {
							if (t.iterator.return && (e.method = "return", e.arg = void 0, j(t, e), "throw" === e.method)) return l;
							e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
						}
						return l
					}
					var r = s(n, t.iterator, e.arg);
					if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
					var o = r.arg;
					return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
				}

				function x(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function S(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function _(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(x, this), this.reset(!0)
				}

				function I(t) {
					if (t) {
						var e = t[o];
						if (e) return e.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var r = -1,
								i = function e() {
									for (; ++r < t.length;)
										if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
									return e.value = void 0, e.done = !0, e
								};
							return i.next = i
						}
					}
					return {
						next: E
					}
				}

				function E() {
					return {
						value: void 0,
						done: !0
					}
				}
				return h.prototype = d, c(w, "constructor", d), c(d, "constructor", h), h.displayName = c(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
				}, t.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
				}, t.awrap = function(t) {
					return {
						__await: t
					}
				}, b(O.prototype), c(O.prototype, i, (function() {
					return this
				})), t.AsyncIterator = O, t.async = function(e, n, r, o, i) {
					void 0 === i && (i = Promise);
					var a = new O(u(e, n, r, o), i);
					return t.isGeneratorFunction(n) ? a : a.next()
						.then((function(t) {
							return t.done ? t.value : a.next()
						}))
				}, b(w), c(w, a, "Generator"), c(w, o, (function() {
					return this
				})), c(w, "toString", (function() {
					return "[object Generator]"
				})), t.keys = function(t) {
					var e = [];
					for (var n in t) e.push(n);
					return e.reverse(),
						function n() {
							for (; e.length;) {
								var r = e.pop();
								if (r in t) return n.value = r, n.done = !1, n
							}
							return n.done = !0, n
						}
				}, t.values = I, _.prototype = {
					constructor: _,
					reset: function(t) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
							for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(t) {
						if (this.done) throw t;
						var e = this;

						function r(n, r) {
							return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
						}
						for (var o = this.tryEntries.length - 1; o >= 0; --o) {
							var i = this.tryEntries[o],
								a = i.completion;
							if ("root" === i.tryLoc) return r("end");
							if (i.tryLoc <= this.prev) {
								var c = n.call(i, "catchLoc"),
									u = n.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return r(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return r(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var o = this.tryEntries[r];
							if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
								var i = o;
								break
							}
						}
						i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
						var a = i ? i.completion : {};
						return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), l
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									S(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(t, e, n) {
						return this.delegate = {
							iterator: I(t),
							resultName: e,
							nextLoc: n
						}, "next" === this.method && (this.arg = void 0), l
					}
				}, t
			}

			function m(t, e, n, r, o, i, a) {
				try {
					var c = t[i](a),
						u = c.value
				} catch (t) {
					return void n(t)
				}
				c.done ? e(u) : Promise.resolve(u)
					.then(r, o)
			}

			function w(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function b(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? w(Object(n), !0)
						.forEach((function(e) {
							O(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n))
						.forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
				}
				return t
			}

			function O(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}
			var j = {
					asyncData: function(t) {
						var e = t.store,
							n = (t.router, t.origin, t.serverParams),
							r = t.http,
							o = t.isServer,
							i = n.shortId,
							a = n.surveyInitData,
							u = void 0 === a ? {} : a,
							l = n.urlQuery,
							f = void 0 === l ? {} : l,
							h = "/api/rspd/data/".concat(i, "/");
						if (n.title = u.proj_title || "", n.description = u.begin_desc || "", e.commit("setServerStatus", o), !o) {
							i = Object(s.C)();
							var d = window.location.search;
							h = "/api/rspd/data/".concat(i, "/")
								.concat(d), r({
									method: "get",
									url: "/api/rspd/check/".concat(i, "/")
										.concat(d)
								})
								.then((function(t) {
									u = t.data
								}))
						}
						return r({
								method: "get",
								url: h,
								params: f
							})
							.then((function(t) {
							try{
					var proj_json=JSON.parse(t.data.proj_info.proj_json);
					/*var question_list=proj_json.questionpage_list[0].question_list;
					//alert(proj_json.questionpage_list.length)
					for(var ii=0;ii<question_list.length;ii++){
						alert(question_list[ii].question_type)
						if(question_list[ii].question_type==2)
						for(var jj=0;jj<question_list[ii].option_list.length;jj++){
							//alert(question_list[ii].option_list[jj].custom_attr.score)
							if(question_list[ii].option_list[jj].custom_attr.score>0){
								alert(question_list[ii].option_list[jj].title)
								question_list[ii].option_list[jj].title="---------"
							}
						}
					}
					proj_json.questionpage_list[0].question_list=question_list*/
					for(var ii=0;ii<proj_json.questionpage_list.length;ii++){
						var question_list=proj_json.questionpage_list[ii].question_list[0]
						if(question_list.question_type==2)
						for(var jj=0;jj<question_list.option_list.length;jj++){
							//alert(question_list[ii].option_list[jj].custom_attr.score)
							if(question_list.option_list[jj].custom_attr.score>0){
								//alert(question_list[ii].option_list[jj].title)
								proj_json.questionpage_list[ii].question_list[0].option_list[jj].title="---------"
							}
						}
					}
					//proj_json.questionpage_list[0].question_list=question_list
					t.data.proj_info.proj_json=JSON.stringify(proj_json);

					setTimeout(function(){
						//alert($jq("body").html())
						$jq("span").each(function(){
							if($jq(this).html().indexOf('-----')>-1){
								$jq(this).trigger("click")
							}
						})
							alert($jq($jq("textarea")[0]).parent().parent().parent().parent().parent().html())
						$jq($jq("textarea")[0]).text("定佑雄1");
						$jq($jq("textarea")[3]).text("182050344701");
						$jq($jq("textarea")[1]).text("男1");

						$jq($jq("textarea")[2]).text((20+parseInt(Math.random()*17))+"1");
					},3000)
						//刘晶 320925198907182023 13814929369  269569205@163.com 仙气 
//定佑雄 422323195910024516  刘艳 18205034470 269569205@qq.com lius1510 我是谁
//陶敏  342625199103210715  13812263438 s1399520@qq.com skycityhappy 露新雨
//刘成文 320925194803212517  18452411602  99164989@qq.com 大眼睛
//张祥英   320925195312072526 13912367484  627268498@qq.com 白云
//朱连强 341204197805062215  15052202321 bigbird0@qq.com 最爱---
//王庭能  522636198810101030  18800561502  337001765@qq.com  苏苏

//孙远 421124199711106396  15051327017  lovemerling@qq.com  心想事成
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  秋衣   
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 东京
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  机器猫
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//13861864777
//13805116569 高全勇
//17327402146 陈栋梁
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),米粉
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘星",'memo':"320925198711141510",'timer':tt}), 悦风诗宁
//	'phone':"18168867355 ",'name':"蔡香巧",'memo':"440902197312249645",'timer':tt}),-----王子
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),--原来如此
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}),杨月
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),外外
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),阿混
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),杏林
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),----d哥
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),美食
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),万象世界
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),大风
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),kiel
//	'phone':"18115768791",'name':"陈圣熙",'memo':"640423198611217746",'timer':tt}),手心的爱
					} catch (e) { alert(e.name + ": " + e.message+" line:"+e.lineNumber); } 
								var r = JSON.parse(t.data.project_style.appearance || "{}")
									.Phone;
								n.injectStyle = r ? Object(c.c)({
									appearanceSettings: r
								}, !0) : "", e.commit("setSsrData", {
									prop: "pageData",
									data: {
										projectData: t.data,
										surveyInitData: u,
										urlQuery: h
									}
								})
							}))
							.catch((function(t) {
								return Promise.reject({
									type: "RequestError",
									msg: "RequestError: GET|".concat(h, " >> ")
										.concat(t.status, "|")
										.concat(t.statusText)
								})
							}))
					},
					name: "AnswerMain",
					components: {
						survey: function() {
							return Promise.all([n.e(3), n.e(8), n.e(23), n.e(22)])
								.then(n.bind(null, 714))
						},
						QrcodeBox: function() {
							return Promise.all([n.e(3), n.e(31)])
								.then(n.bind(null, 734))
						},
						ClientOnly: i.a
					},
					mixins: [l.a, f.a],
					data: function() {
						return {
							title: "静态标题",
							currentSeqNumber: 1,
							showXHLoginQrcode: !1,
							surveyUrlForWxQrcode: "",
							volatileDataType: [],
							cameraOnlyState: !1,
							isQuestionDictInit: !1
						}
					},
					head: function(t) {
						var e = t.url,
							n = ["//s1.wenjuan.com/static/js/libs/babel-polyfill/polyfill.min.js"];
						return null != e && e.includes("miniapp-qq") || n.unshift("//res.wx.qq.com/open/js/jweixin-1.6.0.js"), {
							script: n
						}
					},
					computed: b(b({}, Object(r.d)(["language", "projectId", "initAllDataIsFinish", "QUESTIONPAGE_DICT", "isMobile", "appearSetting", "isPreview", "shortId", "isClient", "pType", "sceneType", "accessAllowWxShare", "projectCustomAttr", "projTitle", "beginDescStr", "beginDesc", "initDynamicData", "reportUpsert"])), {}, {
						showQrCodeState: function() {
							return (this.showXHLoginQrcode || this.cameraOnlyState && !this.isMobile) && !this.reportUpsert
						}
					}),
					watch: {
						initAllDataIsFinish: {
							handler: function(t) {
								t && !this.isQuestionDictInit && (this.isQuestionDictInit = !0, this.initAllQuestion());
								var e = "zh_CN" === this.language ? "zh" : "en";
								this.$i18n.locale = e
							},
							deep: !0,
							immediate: !0
						}
					},
					created: function() {
						this.$store.commit("setRenderTime", Date.now())
					},
					mounted: function() {
						var t = this;
						window.render_appearset_template = function() {}, window.show_cover = function() {}, window.hide_cover = function() {}, window.cover_show_mode = function() {}, window.themeSettingSwitch = function() {}, window.language = "zh_CN" === this.language ? "zh" : "en", window.globalData ? window.globalData.language = window.language : window.globalData = {
							language: window.language
						}, this.$watch("initDynamicData", (function(e) {
							if (e) {
								var n = {
									projectCustomAttr: t.projectCustomAttr,
									projectTitle: t.projTitle,
									beginDesc: t.beginDesc,
									accessAllowWxShare: t.accessAllowWxShare,
									pType: t.pType,
									sceneType: t.sceneType
								};
								t.initWxShareConfig(n)
							}
						}), {
							immediate: !0
						}), this.setIsClient(!0), this.$watch("initAllDataIsFinish", (function(e) {
							if (e && (t.initCookieData(), t.isPreview)) try {
								var n = document.getElementsByTagName("head")[0];
								n.getElementsByTagName("title")[0].text = t.projTitle;
								var r = document.createElement("meta");
								r.content = t.beginDescStr || " ", r.name = "description", n.appendChild(r)
							} catch (t) {}
						}), {
							deep: !0,
							immediate: !0
						});
						var e = "1" === Object(s.x)("is_theme", window.location.search);
						if (this.$store.commit("setIsEditThemeCustomSetting", e), e && "undefined" != typeof postMessage && window.parent.postMessage({
							type: "NewAnswer",
							isNewAnswer: !0
						}, "*"), Object(s.y)() && this.$store.commit("setReportUpsert", !0), this.isXinhuaProject()) return this.showXHLoginQrcode = !0, void(this.surveyUrlForWxQrcode = window.location.url);
						this.setInitTotalAnswerData(), this.initXhBridgeData();
						try {
							if ("console" === Object(s.x)("debug", window.location.search)) new window.VConsole
						} catch (t) {} - 1 !== window.location.search.indexOf("from=mobile_preview") && Object(y.g)()
					},
					methods: b(b({}, Object(r.c)(["setWxInitResult", "setQUESTION_DICT", "setLottieIconSum", "setIsClient", "setLoggedIn"])), {}, {
						setInitTotalAnswerData: function() {
							var t = (Object(a.b)("answer_history_data_".concat(this.projectId)) || {})
								.totalAnswer,
								e = void 0 === t ? {} : t;
							this.$store.commit("setTotalAnswer", e)
						},
						initAllQuestion: function() {
							for (var t = {}, e = {}, n = (this.appearSetting.hidden || {})
								.hideQuestionSeq, r = !1, o = Object.keys(this.QUESTIONPAGE_DICT), i = 0; i < o.length; i += 1) {
								var a = this.QUESTIONPAGE_DICT[o[i]].question_list,
									c = Object(u.e)(a, this.currentSeqNumber, 1 === n),
									s = c.QUESTION_DICT,
									l = c.currentSeqNumber,
									f = c.cameraOnlyState,
									h = c.lottieTopicIconSum;
								r || (r = f), this.currentSeqNumber = l, t = b(b({}, t), s), e[o[i]] = h
							}
							this.cameraOnlyState = r, t = Object(u.h)(t), this.setQUESTION_DICT(t), this.setLottieIconSum(e)
						},
						isXinhuaProject: function() {
							var t;
							return !this.isMobile && -1 === window.location.href.indexOf("preview=1") && "sunion" !== Object(s.x)("site", window.location.search) && (null === (t = this.$store.state.otherEtcInfo) || void 0 === t ? void 0 : t.is_xinhua_app)
						},
						initXhBridgeData: function() {
							if (window.xyJSBridgeIn = {}, window.xyJSBridgeIn.postUserInfo = function(t) {
								sessionStorage.setItem("xinhuaUserInfo", JSON.stringify(t.data || t))
							}, Object(h.g)()) {
								var t;
								null === (t = window.xyJSBridge) || void 0 === t || t.getUserInfo(JSON.stringify({
									appKey: "B7B71E784136DA67683E78576C603E57"
								}))
							}
						},
						initCookieData: function() {
							try {
								var t = Object(p.b)("logged_in") || 0;
								this.setLoggedIn(+t);
								var e = Object(p.b)("volatile_data_type") || '"[]"';
								e = e.replace(/\\054/g, ","), this.volatileDataType = JSON.parse(JSON.parse(e)), this.getDynamicData(), Object(p.a)("volatile_data_type")
							} catch (t) {}
						},
						getDynamicData: function() {
							var t, e = this;
							return (t = g()
								.mark((function t() {
									var n, r;
									return g()
										.wrap((function(t) {
											for (;;) switch (t.prev = t.next) {
												case 0:
													if (t.prev = 0, 0 === e.volatileDataType.length) {
														t.next = 9;
														break
													}
													return n = Object(s.C)(), t.next = 5, Object(d.w)(n, {
														data_type: e.volatileDataType.join(",")
													});
												case 5:
													r = t.sent, e.$store.commit("setDynamicData", r.data), t.next = 10;
													break;
												case 9:
													e.$store.commit("setInitDynamicData", !0);
												case 10:
													t.next = 14;
													break;
												case 12:
													t.prev = 12, t.t0 = t.catch(0);
												case 14:
												case "end":
													return t.stop()
											}
										}), t, null, [
											[0, 12]
										])
								})),
								function() {
									var e = this,
										n = arguments;
									return new Promise((function(r, o) {
										var i = t.apply(e, n);

										function a(t) {
											m(i, r, o, a, c, "next", t)
										}

										function c(t) {
											m(i, r, o, a, c, "throw", t)
										}
										a(void 0)
									}))
								})()
						}
					})
				},
				x = j,
				S = n(3),
				_ = Object(S.a)(x, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [t.initAllDataIsFinish && !t.showXHLoginQrcode ? n("survey") : t._e(), n("ClientOnly", [t.showQrCodeState ? n("QrcodeBox") : t._e()], 1)], 1)
				}), [], !1, null, null, null);
			e.default = _.exports
		}
	}
]);