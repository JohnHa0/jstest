webpackJsonp([202], {
    "/o5o": function(e, t, o) {
        "use strict";
        function n(e) {
            o("JbJP")
        }
        var i = (Boolean, {
            props: {
                show: {
                    type: Boolean,
                default:
                    !1,
                    twoWay: !0
                }
            }
        }),
        s = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", [o("div", {
                staticClass: "mask"
            }), e._v(" "), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "modal"
            },
            [e._t("default")], 2)])
        },
        a = [],
        r = {
            render: s,
            staticRenderFns: a
        },
        c = r,
        l = o("VU/8"),
        u = n,
        h = l(i, c, !1, u, null, null);
        t.a = h.exports
    },
    "24qm": function(e, t) {},
    "3zsV": function(e, t, o) {
        "use strict";
        function n(e) {
            o("6Y9E")
        }
        var i = o("52AH"),
        s = (i.a, Boolean, String, String, Number, String, String, Boolean, Object, Boolean, {
            mixins: [i.a],
            name: "x-dialog",
            model: {
                prop: "show",
                event: "change"
            },
            props: {
                show: {
                    type: Boolean,
                default:
                    !1
                },
                maskTransition: {
                    type: String,
                default:
                    "vux-mask"
                },
                maskZIndex: [String, Number],
                dialogTransition: {
                    type: String,
                default:
                    "vux-dialog"
                },
                dialogClass: {
                    type: String,
                default:
                    "weui-dialog"
                },
                hideOnBlur: Boolean,
                dialogStyle: Object,
                scroll: {
                    type: Boolean,
                default:
                    !0,
                    validator: function(e) {
                        return ! 0
                    }
                }
            },
            computed: {
                maskStyle: function() {
                    if (void 0 !== this.maskZIndex) return {
                        zIndex: this.maskZIndex
                    }
                }
            },
            mounted: function() {
                "undefined" != typeof window && window.VUX_CONFIG && "VIEW_BOX" === window.VUX_CONFIG.$layout && (this.layout = "VIEW_BOX")
            },
            watch: {
                show: function(e) {
                    this.$emit("update:show", e),
                    this.$emit(e ? "on-show": "on-hide"),
                    e ? this.addModalClassName() : this.removeModalClassName()
                }
            },
            methods: {
                shouldPreventScroll: function() {
                    var e = /iPad|iPhone|iPod/i.test(window.navigator.userAgent),
                    t = this.$el.querySelector("input") || this.$el.querySelector("textarea");
                    if (e && t) return ! 0
                },
                hide: function() {
                    this.hideOnBlur && (this.$emit("update:show", !1), this.$emit("change", !1), this.$emit("on-click-mask"))
                }
            },
            data: function() {
                return {
                    layout: ""
                }
            }
        }),
        a = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticClass: "vux-x-dialog",
                class: {
                    "vux-x-dialog-absolute": "VIEW_BOX" === e.layout
                }
            },
            [o("transition", {
                attrs: {
                    name: e.maskTransition
                }
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "weui-mask",
                style: e.maskStyle,
                on: {
                    click: e.hide
                }
            })]), e._v(" "), o("transition", {
                attrs: {
                    name: e.dialogTransition
                }
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                class: e.dialogClass,
                style: e.dialogStyle
            },
            [e._t("default")], 2)])], 1)
        },
        r = [],
        c = {
            render: a,
            staticRenderFns: r
        },
        l = c,
        u = o("VU/8"),
        h = n,
        d = u(s, l, !1, h, null, null);
        t.a = d.exports
    },
    "54Cf": function(e, t) {},
    "5cLG": function(e, t) {},
    "5ll8": function(e, t) {},
    "6Trz": function(e, t, o) {
        "use strict";
        function n(e) {
            o("SA4W")
        }
        var i = (String, String, String, Array, {
            data: function() {
                return {}
            },
            props: {
                title: {
                default:
                    "信息",
                    type: String
                },
                content: {
                default:
                    "",
                    type: String
                },
                btnText: {
                default:
                    "确定",
                    type: String
                },
                contentList: Array
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                question: function() {
                    return this.$store.state.question
                },
                wholeExplores: function() {
                    return this.$store.state.wholeExplores
                },
                stateAnswer: function() {
                    return this.$store.state.answer
                },
                exploreDetail: function() {
                    return this.$store.state.exploreDetail
                }
            },
            methods: {
                close: function() {
                    this.$emit("close"),
                    "5631739515369" == this.secretBox.code && (self.location.href = "http://dt2022.scbaixin.cn/")
                },
                goToQuestion: function(e) {
                    this.wholeExplores[e].answer = this.stateAnswer,
                    $.post("/service/explore2/updateExploreDetail", {
                        answer: this.stateAnswer,
                        exploreDetailId: this.exploreDetail.id,
                        questionId: this.question.id,
                        secretBoxCode: this.secretBox.code
                    },
                    function(e, t, o) {}),
                    this.$store.dispatch("goTochoosedQuestion", e)
                }
            }
        }),
        s = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                attrs: {
                    id: "Hint"
                }
            },
            [o("div", {
                staticClass: "hint-modal"
            },
            [o("div", {
                staticClass: "hint-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), o("div", {
                staticClass: "hint-content"
            },
            [o("span", {
                domProps: {
                    innerHTML: e._s(e.content)
                }
            }), e._v(" "), e._l(e.contentList,
            function(t) {
                return o("div", {
                    staticStyle: {
                        color: "#0ac414"
                    },
                    on: {
                        click: function(o) {
                            return e.goToQuestion(t)
                        }
                    }
                },
                [e._v("点击前往第" + e._s(t) + "题")])
            })], 2), e._v(" "), o("div", {
                staticClass: "hint-btn",
                domProps: {
                    innerHTML: e._s(e.btnText)
                },
                on: {
                    click: e.close
                }
            })])])
        },
        a = [],
        r = {
            render: s,
            staticRenderFns: a
        },
        c = r,
        l = o("VU/8"),
        u = n,
        h = l(i, c, !1, u, null, null);
        t.a = h.exports
    },
    "6Y9E": function(e, t) {},
    BS5S: function(e, t) {},
    CGz8: function(e, t) {},
    GR3Y: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAV5SURBVHic7VvPSx1XGD3fncFnqCHTXWNTCl0WEoJts5BCS6sNxYAlpDSB4qYFERfOPNFumry+hBbBjqMLhXTXbEwlDZH+gEQ3hVaK+dVq6T+QaHftExsyPl/m68L7iprnzJ375jmC7+zeeH+cc7xz73fv/YaYGfsZIm0CaaNuQNoE0kbdgLQJpI19b4C52x329vY2NTY2NgdB0ExEzQDAzMtCiGXf95fHx8f/3U0+VOs4wHGcw0TUyczvAWgFcDCiyiqAOSK6wczTnuf9VUt+NTEgm80eYOZuAGcBnABAmk0xgHkAV4no8sjIyOOkOJaRqAH5fF4UCoUuAJcAHEms4Q0sAbiwtLT09dTU1JOkGk3MANu224nIBXA0kQZ3ABH9SUQDruv+mER7Va8CRESO43xGRDdRY/EAwMwvB0Hwg23bnxOR7qv1P6oaAQMDA8+USqUrAE5XS0QT08Vi8cNqVg5tA/r7+18IguB7AMd0O08Ii0KIDtd1H+hU1jJA/ufnkL74MhZM02wdHh5+FLdi7DmAiEgO+70iHgCOlUqlKzpzQmwDbNvOIb13PgynJbdYiPUKyKXuJvQDm1qDmfnk6OjojGoF5RGQz+eFXOfTEL8C4CsAP0WUIyJy8/m8si7lgjLCU1nnvxNCHAfwOoBbqu2HYD6TybzoeV6353lvAvgyovxRyVUJSgZks9kD2Ahvo/CEiHpc1/3d87xfLMvqAHBNlUwFzGcymXeGhoZWyg+CILiqUO+S5BwJJQPkxkYltn9sGEah/COXy5UsyzoHPRNubxcPAIZhnFSoe0RyjoTqK3BWsVzT+vr6R5sfaJpwG8BT4rPZ7Alm/kSxDSXOkauA4ziHsbETU538SgDOeZ63RXA+nzcLhcIkgDMR9e8AaPc8r7D5oRR/C8AhRR4M4Pmo84TIEUBEnYg385sAJh3H2SJUZSQQ0V1UEG/b9msxxcvmqDOqUKQB8iQnLmKbQER3fd+vKJ6I4ooHoMZdZQ5ojduxRBwT7vm+3z4xMfHP5rLZbPZVKd7S5BDJPXQO6O3tbWpoaFjV7LyMqDnhpbW1tbbt4vv6+l4RQsxCXzwAoFgsHgzbLoeOgMbGxuZqOpcIHQmZTOatSuINw5hBleKBaA2hBgRBkIQBQIgJ25c6x3FaDMOYYeZnk+g4SkOoAeVz+4RQ0YTNcBynhYhmkxIPRGvY7ZshE8BAyGalJ0nxKgg1gJmXk+yMme8T0bu5XC6o9HfLsnpQ3d6hUp+hGkINEEIkZgAz3xdCtI2MjPy9U5kq9w4VEaUh1ADf9xMxYCfxjuO0OI6z5XQpaROiNIQaINfPauOAe8Vi8e1K4oloFsA3OmGzIlajjsxVJsE53d7lO/9UhLdtttfeOyggkrvKZuiGTs9hw77CUlcTE1S4q2yGprGxtVRGTPFlJG0CS+6hiDRA7qfnY/SqI76MJE2YV8ktUA2EVM7hyujWFF/GjiZkMpmPAajeAypxVjKAiC4DeKhQdGVsbOzO5gea4W1FE+S+4VeF+g8l50goGSAzM84rFD3U19fXVv5RZWxvApi0bfv98oPBwcHnALyhUPe8ajaJ8s2QzP74DRF3A8zsE9G32MgF6gBgKHUQjp+Z+Q8hxAcKZi5alnV8p3B7O+pXY3Falw1fjE1r93AxjnhAIz+AiMi27WvYezfE10dHR89wTEGxzwOYmU3T7AKwELduDbFgmmZXXPGA5oHI8PDwIyHEKewNExaFEKd0skOAKk6EXNd9YJpmK4Drum0kgOlisdiqmx8EJJAnKOeEHIAL2MXVgZm/GBsb+1Rn2G/Gvk+UrKfK1pOl6+nyu/vd4L77YGKvY99/M1Q3IG0CaaNuQNoE0sa+N+A/kqr4z+PtIvUAAAAASUVORK5CYII="
    },
    H7a6: function(e, t, o) {
        "use strict";
        function n(e) {
            o("Y81D")
        }
        var i = {
            name: "barrage",
            data: function() {
                return {
                    barragetextarr: [],
                    barragecolorarr: ["#00FFFF", "#FFFF00", "#FFFFFF", "#00FF00"],
                    barragetoparr0: ["5vh", "8vh", "11vh"],
                    barragetoparr1: ["15vh", "17vh", "19vh"],
                    barragetoparr2: ["5px", "17px", "28px"],
                    barrageduarr: [8e3, 9e3, 1e4, 10500, 11e3, 11500],
                    barrageidx: 0,
                    barragedsq: "",
                    barragelist: [],
                    susendbarrageflag: !1,
                    barragecontent: ""
                }
            },
            props: {},
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                sendBarrageFlag: function() {
                    return this.$store.state.sendBarrageFlag
                }
            },
            methods: {
                movebarrage: function(e) {
                    $("#singleba" + e).animate({
                        left: "-500px"
                    },
                    this.barrageduarr[Math.floor(6 * Math.random())])
                },
                createsinglebarrage: function(e) {
                    var t = "",
                    o = "5vh";
                    return o = this.secretBox.config.coverMode ? this.barragetoparr1[Math.floor(3 * Math.random())] : this.barragetoparr0[Math.floor(3 * Math.random())],
                    t = $("<div id='singleba" + e + "' style='color:" + this.barragecolorarr[Math.floor(4 * Math.random())] + ";bottom:" + o + ";position:fixed;left:150vw;z-index:-100;width:300vw;font-size:13px;'><span style='background-color:rgba(0,0,0,0.5);padding:0.2rem 0.5rem;border-radius:15px;'>" + this.barragetextarr[e].content + "</span></div>"),
                    "554404860400" != this.secretBox.code && "554502830104" != this.secretBox.code || (o = this.barragetoparr2[Math.floor(3 * Math.random())], t = $("<div id='singleba" + e + "' style='color:" + this.barragecolorarr[Math.floor(4 * Math.random())] + ";bottom:" + o + ";position:absolute;left:150vw;z-index:-100;width:300vw;font-size:13px;'><span style='background-color:rgba(0,0,0,0.5);padding:0.2rem 0.5rem;border-radius:15px;'>" + this.barragetextarr[e].content + "</span></div>")),
                    t
                },
                barragemove: function() {
                    if (0 != this.barragetextarr.length) {
                        if (this.barrageidx == this.barragetextarr.length) return this.barrageidx = 0,
                        this.barragetextarr = [],
                        void window.setTimeout(this.timeoutcontrol, 3e3);
                        var e = this.createsinglebarrage(this.barrageidx);
                        $("#barrageBoard").append(e),
                        this.movebarrage(this.barrageidx),
                        this.barrageidx++
                    }
                },
                timeoutcontrol: function() {
                    $("#barrageBoard").empty(),
                    this.loadallmsg()
                },
                loadallmsg: function() {
                    var e = this;
                    $.post("/service/message/loadallmsg", {
                        secretBoxCode: e.secretBox.code,
                        visitorid: localStorage.sbox_userid
                    },
                    function(t, o, n) {
                        e.barragetextarr = t.data,
                        e.controlmsgmove()
                    })
                },
                controlmsgmove: function() {
                    this.barragetextarr.length > 0 && (this.barragemove(), window.clearInterval(this.barragedsq), this.barragedsq = setInterval(this.barragemove, 3e3))
                },
                loadmymsg: function() {
                    var e = this;
                    $.post("service/message/loadmymsg", {
                        secretBoxCode: this.secretBox.code,
                        visitorid: localStorage.sbox_userid
                    },
                    function(t, o, n) {
                        e.barragelist = t.data
                    })
                },
                realsendbarrage: function() {
                    var e = this;
                    this.barragecontent.length > 0 && $.post("service/message/sendbarrage", {
                        secretBoxCode: this.secretBox.code,
                        userId: localStorage.sbox_userid,
                        content: this.barragecontent
                    },
                    function(t, o, n) {
                        e.barragelist.unshift({
                            content: e.barragecontent
                        }),
                        e.barragetextarr.unshift({
                            content: e.barragecontent
                        }),
                        e.controlmsgmove(),
                        e.barragecontent = "",
                        e.susendbarrageflag = !0,
                        setTimeout(function() {
                            e.susendbarrageflag = !1
                        },
                        1e3)
                    })
                },
                closesendbarrage: function() {
                    this.$store.commit("set_sendBarrageFlag", !1)
                }
            },
            mounted: function() {
                localStorage.sbox_userid && (this.loadallmsg(), this.loadmymsg())
            }
        },
        s = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "barrage"
                }
            },
            [e.sendBarrageFlag ? n("div", {
                staticClass: "sendbarragecls"
            },
            [n("img", {
                staticStyle: {
                    position: "absolute",
                    right: ".6rem",
                    top: "0.2rem",
                    width: "10%"
                },
                attrs: {
                    src: o("GR3Y")
                },
                on: {
                    click: e.closesendbarrage
                }
            }), e._v(" "), n("div", {
                staticClass: "barragetitlecls",
                domProps: {
                    innerHTML: e._s(e.secretBox.title)
                }
            }), e._v(" "), n("div", {
                staticStyle: {
                    margin: "0 auto",
                    width: "80vw"
                }
            },
            [n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.barragecontent,
                    expression: "barragecontent"
                }],
                staticClass: "barragetextcls",
                attrs: {
                    rows: "5",
                    placeholder: "请留言..."
                },
                domProps: {
                    value: e.barragecontent
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.barragecontent = t.target.value)
                    }
                }
            }), e._v(" "), n("div", {
                staticStyle: {
                    "font-size": "12px",
                    "text-align": "left"
                }
            },
            [e._v("目前仅支持文字输入，不支持表情等图形。")]), e._v(" "), n("button", {
                staticClass: "barragebtn",
                on: {
                    click: e.realsendbarrage
                }
            },
            [e._v("立即发送")])]), e._v(" "), e.barragelist.length > 0 ? n("div", {
                staticClass: "barragelistcls"
            },
            e._l(e.barragelist,
            function(t) {
                return n("div", {
                    staticStyle: {
                        "margin-bottom": "0.5rem"
                    }
                },
                [n("div", {
                    staticStyle: {
                        color: "#aaa",
                        "font-size": "14px"
                    }
                },
                [e._v("我")]), e._v(" "), n("div", {
                    staticStyle: {
                        "font-size": "14px"
                    }
                },
                [e._v(e._s(t.content))])])
            }), 0) : e._e()]) : e._e(), e._v(" "), n("div", {
                class: {
                    barrageBox: "554404860400" == e.secretBox.code || "554502830104" == e.secretBox.code
                },
                attrs: {
                    id: "barrageBoard"
                }
            }), e._v(" "), e.susendbarrageflag ? n("div", {
                staticClass: "successsendBarrage"
            },
            [e._v("发送成功")]) : e._e()])
        },
        a = [],
        r = {
            render: s,
            staticRenderFns: a
        },
        c = r,
        l = o("VU/8"),
        u = n,
        h = l(i, c, !1, u, "data-v-2b3e5276", null);
        t.a = h.exports
    },
    Hqqj: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function getTemplate(e, t) {
            var o = __WEBPACK_IMPORTED_MODULE_5__games__.GameTypes[e],
            n = o.type + (t || "");
            return __WEBPACK_IMPORTED_MODULE_5__games__.Games[n] ? n: o.type
        }
        function removeHTMLTag(e) {
            return e = e.replace(/<\/?[^>]*>/g, ""),
            e = e.replace(/[ | ]*\n/g, "\n"),
            e = e.replace(/\n[\s| | ]*\r/g, "\n"),
            e = e.replace(/&nbsp;/gi, " "),
            e = e.replace(/\s+/g, " ")
        }
        function processData(e) {
            if (e.question && (e.question.content = processContent(e.question.content, e.exploreDetail.id % 10 + 1), 2 == e.question.pattern)) for (var t = 0; t < e.question.choiceList.length; t++) e.question.choiceList[t].content = processChoice(e.question.choiceList[t].content, e.exploreDetail.id % 2);
            return e
        }
        function processQueston(e) {}
        function processContent(e, t) {
            if (e.startsWith("　") && e.endsWith("　")) {
                var o = e.slice(1, -1);
                o.length < 8 + 3 * t && (t /= 2),
                o = o.slice(t);
                for (var n = "",
                i = "",
                s = 0; s < o.length; s += 2) i += o.substring(s, s + 1),
                n += o.substring(s + 1, s + 2);
                return i = i.substring(0, i.length - 2 * t),
                i.endsWith("　") && (i = i.substring(0, i.length - 1)),
                n + i
            }
            return e
        }
        function processChoice(e, t) {
            if (e.startsWith("　") && e.endsWith("　")) {
                for (var o = e.slice(1, -1), n = "", i = "", s = 0; s < 10; s += 2) n += o.substring(s, s + 1),
                i += o.substring(s + 1, s + 2);
                return (e = 0 == t ? n: i) + o.substring(10)
            }
            return e
        }
        function sleep(e) {
            return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(t, o) {
                setTimeout(function() {
                    t()
                },
                e)
            })
        }
        function tempSbc(e) {
            for (var t = e.substr(0, 1), o = e.substr(1, 1), n = t < o ? t: o, i = "", s = "", a = 2; a <= 2 * n; a += 2) i += e.substr(a, 1),
            s += e.substr(a + 1, 1);
            var r = e.substr(2 * (Number(n) + 1));
            return t > o ? i += r: s += r,
            i
        }
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ"),
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5"),
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__),
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp"),
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__),
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__("//Fk"),
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__),
        __WEBPACK_IMPORTED_MODULE_4__wechat__ = __webpack_require__("Xe5u"),
        __WEBPACK_IMPORTED_MODULE_5__games__ = __webpack_require__("wujj"),
        __WEBPACK_IMPORTED_MODULE_5__games___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__games__),
        __WEBPACK_IMPORTED_MODULE_6__filters_parseFile__ = __webpack_require__("UtBj"),
        __WEBPACK_IMPORTED_MODULE_7__configs__ = __webpack_require__("pyzf");
        __webpack_exports__.a = {
            getSecretBoxBaseConfig: function(e) {
                var t = e.commit,
                o = e.state;
                e.dispatch;
                return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(e) {
                    $.post("/service/explore2/getSecretBoxBaseConfig", {
                        secretBoxCode: o.secretBoxCode,
                        secretKey: o.secretKey
                    },
                    function(o, n, i) {
                        1 == o.status ? (o.config && t("set_secretBoxBaseConfig", o.config), e()) : alert("网络错误，请刷新重试！")
                    })
                })
            },
            getSecretBoxFromWeChat: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                $.post("/service/explore2/getSecretBoxFromWeChat", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    uuid: localStorage.sbox_wxopenid,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[2] || 0),
                    reason: localStorage.reason
                },
                function(e, i, s) {
                    if (t("set_eal", e.eal), 1 == e.status) {
                        if (t("set_exploreData", e), 1 == e.secretBox.config.isFollow && e.secretBox.config.followAppid) {
                            var a = (new Date).getTime() + 1e4;
                            if (e.secretBox.bizConfig.followExpire && (a = e.secretBox.bizConfig.followExpire, a = Date.parse(a.replace(/\-/g, "/"))), a > (new Date).getTime()) {
                                var r = localStorage.getItem("follow_" + o.secretBoxCode);
                                r && 28 == r.length || n("getFollowOpenId")
                            }
                        }
                    } else alert("网络错误，请刷新重试！")
                })
            },
            getSecretBoxFromPC: function(e) {
                var t = e.commit,
                o = e.state;
                e.dispatch;
                $.post("/service/explore2/getSecretBoxFromPC", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[2] || 0)
                },
                function(e, o, n) {
                    t("set_eal", e.eal),
                    1 == e.status ? t("set_exploreDataPC", e) : 2 == e.status ? location.href = "https://explore.fengchuanba.com/wxcj.html": alert("网络错误，请刷新重试！")
                })
            },
            getFollowOpenId: function(e) {
                var t = (e.commit, e.state),
                o = (e.dispatch, location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("?")[0]);
                location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + t.secretBox.config.followAppid + "&redirect_uri=https%3A%2F%2Fwechat.fengchuanba.com%2Fwechat%2FsecretboxOpenidCallback2.html&response_type=code&scope=snsapi_base&state=" + o + "@" + t.secretBox.bizConfig.followDomain + "&component_appid=wxffbafd606db6e004#wechat_redirect"
            },
            showWelcome: function showWelcome(_ref5) {
                var commit = _ref5.commit,
                state = _ref5.state,
                bgImg = state.secretBox.coverImage || state.secretBox.bgImage;
                document.title = removeHTMLTag(state.secretBox.title),
                state.secretBox.config.isCopy && document.querySelector("body").setAttribute("style", "-moz-user-select: text; -webkit-user-select: text; -ms-user-select: text;-khtml-user-select: text; -o-user-select:text; user-select: text;");
                var paramJson = {};
                state.secretBox.config.getLocation && (paramJson.getLocation = !0);
                var shareUrl = null;
                state.secretBox.config.shareUrl && (shareUrl = "https://" + location.host + "/share.html#" + state.secretBox.code),
                Object(__WEBPACK_IMPORTED_MODULE_4__wechat__.c)(state.secretBoxBaseConfig, removeHTMLTag(state.secretBox.title), state.secretBox.config.shareDesc || removeHTMLTag(state.secretBox.notes), state.secretBox.config.shareImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.config.shareImg) : state.secretBox.logo ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.logo) : __WEBPACK_IMPORTED_MODULE_7__configs__.d, shareUrl, 0, paramJson,
                function() {
                    state.secretBox.shareChance && state.secretBox.shareChance > 0 && 0 == state.shareCount && (commit("set_playChance", state.playChance + state.secretBox.shareChance), commit("set_shareModal", {
                        showShare: !1
                    })),
                    commit("set_shareCount", state.shareCount + 1),
                    "551513049808" == state.secretBox.code && commit("set_shareCount", 1),
                    -1 == state.secretBox.config.exploreAfterShare && state.exploreAfterShareModal.showShare && (state.secretBox.config.exploreAfterShare = 0, commit("set_exploreAfterShareModal", {
                        showShare: !1
                    }))
                });
                var tmp = "";
                tmp = "other" == state.dev ? getTemplate(0, "Pc") : getTemplate(0, state.secretBox.style),
                "551203401184" != state.secretBox.code && "553315909237" != state.secretBox.code || (document.body.maxWidth = "1024px", document.getElementsByTagName("html")[0].style.maxWidth = "1024px", document.getElementById("app").style.maxWidth = "1024px", tmp = getTemplate(0, state.secretBox.style));
                var img = new Image;
                if (img.src = bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b, (state.secretBox.status > 2 || state.secretBox.endTime && (new Date).getTime() > new Date(state.secretBox.endTime.replace(/-/g, "/")).getTime()) && 5621028584688 != state.secretBox.code) return document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                commit("set_showSupport", !state.secretBox.bizConfig.advSlogan && !state.secretBox.bizConfig.funRemoveLogo && state.secretBox.bizConfig.bizLevel < 4),
                commit("set_showAdvert", state.secretBox.bizConfig.advSlogan || state.secretBox.bizConfig.advName),
                localStorage.setItem("sbox_userid", state.userId),
                void(553332684343 == state.secretBox.code ? commit("set_currentView", "finish32833") : commit("set_currentView", "finish"));
                if (img.onload = function() {
                    if (state.secretBox.config.showScene && state.secretBox.config.sceneId && 1 != state.secretBox.config.sceneOrder ? 555796614158 == state.secretBox.code ? (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)", document.body.style.backgroundSize = "100% 100%") : document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(eval("(" + state.scenePages.page0 + ")").backimg) + ")": 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/user/59645/material20200519171819.jpg)": document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")", commit("set_isDemo", 1 == state.secretBox.status), commit("set_showSupport", !state.secretBox.bizConfig.advSlogan && !state.secretBox.bizConfig.funRemoveLogo && state.secretBox.bizConfig.bizLevel < 4), commit("set_showAdvert", state.secretBox.bizConfig.advSlogan || state.secretBox.bizConfig.advName), localStorage.setItem("sbox_userid", state.userId), state.secretBox.config.enableVideo && null != state.secretBox.config.videoMoment && 1 == state.secretBox.config.videoMoment) {
                        if (!state.secretBox.config.videoTimes || 1 != state.secretBox.config.videoTimes && 3 != state.secretBox.config.videoTimes) return void commit("set_currentView", "boxVideo");
                        if (0 == state.videoChance) return void commit("set_currentView", "boxVideo")
                    }
                    return 0 == state.secretBox.checkPointCount && state.secretBox.lottery && 1 == state.secretBox.lottery.enable ? (state.secretBox.style ? commit("set_currentView", "lottery" + state.secretBox.style) : commit("set_currentView", "lottery"), void("551919059901" == state.secretBox.code && Object(__WEBPACK_IMPORTED_MODULE_4__wechat__.c)(state.secretBoxBaseConfig, "我是第" + (state.secretBox.player + 201) + "位倡导者，文化市场法制宣传，我们在行动！", state.secretBox.config.shareDesc || removeHTMLTag(state.secretBox.notes), state.secretBox.config.shareImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.config.shareImg) : state.secretBox.logo ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.logo) : __WEBPACK_IMPORTED_MODULE_7__configs__.d, shareUrl, 0, paramJson,
                    function() {
                        state.secretBox.shareChance && state.secretBox.shareChance > 0 && 0 == state.shareCount && commit("set_playChance", state.playChance + state.secretBox.shareChance),
                        commit("set_shareCount", state.shareCount + 1),
                        commit("set_successShareCount", 1),
                        commit("set_shareModal", {
                            showShare: !1
                        })
                    }))) : state.secretBox.config.exploreLive && 1 == state.secretBox.config.exploreLive ? void commit("set_currentView", "liveError") : void commit("set_currentView", tmp)
                },
                "553899589752" == state.secretBox.code) {
                    var bgmAudio = document.getElementById("bgm");
                    bgmAudio && bgmAudio.play()
                }
            },
            startGame: function startGame(_ref6) {
                var commit = _ref6.commit,
                state = _ref6.state,
                dispatch = _ref6.dispatch;
                return localStorage.sbox_userid ? (1 == state.submitType && (commit("set_wholeExplores", new Array(101)), commit("set_wholeQuestions", new Array(101))), commit("set_rightNum", 0), state.eal ? void commit("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: state.secretBox.config.ealDesc || "抱歉，您未被授权参加此活动！",
                    showAlert: !0
                }) : 1 != state.secretBox.register || state.registerInfo ? "5611100994031" != state.secretBoxCode || state.showGate ? 22993 == state.secretBox.style ? void dispatch("tempStartExplore") : null != state.totalPlayChance && state.totalPlayChance <= 0 ? void commit("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: "抱歉，您的参与机会已经用完了，感谢参与活动！",
                    showAlert: !0
                }) : void $.post("/service/explore2/startExplore", {
                    secretBoxCode: state.secretBoxCode,
                    secretKey: state.secretKey,
                    uuid: localStorage.sbox_wxopenid,
                    userId: localStorage.sbox_userid,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("_")[2] || 0),
                    isReged: null != state.registerInfo ? 1 : 0,
                    ll: localStorage.LL || "",
                    exploreId: localStorage.exploreId || 0
                },
                function(data, textStatus, xhr) {
                    if ( - 100 == data.status) return void commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: "不允许在两种设备上同时答题！",
                        showAlert: !0
                    });
                    if (135569 == data.status) return void commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: "必须完成学习后才能答题抽奖！",
                        showAlert: !0
                    });
                    if ( - 99 == data.status) return void commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: state.secretBox.config.ealDesc || "抱歉，您未被授权参加此活动！",
                        showAlert: !0
                    });
                    if (2 == data.status) return void commit("set_currentView", "finish");
                    if (null != data.playChance && data.playChance <= 0) {
                        var alertMsg = "",
                        shareChanceText = state.secretBox.shareChance > 99 ? "无限": state.secretBox.shareChance;
                        return state.secretBox.shareChance > 0 && 0 == data.shareCount ? (alertMsg = state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~": state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~": "抱歉，您的参与机会已经用完了，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~", commit("set_isStart", !1), void commit("set_shareModal", {
                            content: alertMsg,
                            showShare: !0
                        })) : (state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? (alertMsg = "抱歉，您今天的参与机会用完了，请明天再来吧！", "5611120594099" != state.secretBoxCode && "5611120594051" != state.secretBoxCode && "555996563448" != state.secretBoxCode || 1 != data.needRegister || (alertMsg = "抱歉，您今天的参与机会已经用完了，分享朋友圈并注册鄂尔多斯手机台APP即可多两次参与机会，请使用您登记时所留的手机号注册！<br/><img style='width: 60%;margin-left: 20%;' src='https://content.fengchuanba.com/file/user/11090/material20220125143329.jpg'>")) : alertMsg = state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完了，请下周再来吧！": "抱歉，您的参与机会已经用完了，感谢参与活动！", void commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: alertMsg,
                            showAlert: !0
                        }))
                    }
                    data = processData(data),
                    commit("set_playChance", data.playChance),
                    localStorage.exploreId = data.exploreDetail.exploreId;
                    var tmp = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style),
                    bgImg = state.secretBox.bgImage || state.secretBox.coverImage;
                    if (document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")", 37203 == state.secretBox.config.cpStyle && (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/37741/37203/crjhDB.jpg)"), 555796614158 == state.secretBox.code && (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)"), commit("set_isDemo", !1), commit("set_exploreDetail", data.exploreDetail), commit("set_qConfig", eval("(" + data.question.config + ")")), commit("set_currentView", tmp), state.secretBox.config.submitType && commit("set_submitType", state.secretBox.config.submitType), 0 == state.submitType && commit("set_life", state.secretBox.wrongTime), state.secretBox.config.totalTimeLimit && commit("set_totalTime", state.secretBox.config.totalTimeLimit), "5641107497637" == state.secretBoxCode && (data.question.correct = data.correct, data.question.wrong = data.wrong), commit("set_question", data.question), 1 == state.submitType) {
                        var tempIdx = data.exploreDetail.checkPointSeq,
                        tempQArr = new Array(101);
                        tempQArr[tempIdx] = data.question,
                        commit("set_wholeQuestions", tempQArr);
                        var tempDArr = new Array(101);
                        tempDArr[tempIdx] = data.exploreDetail,
                        commit("set_wholeExplores", tempDArr)
                    }
                    if (commit("set_startTotalTime", Date.now()), state.secretBox.config.continueExplore && 1 == state.secretBox.config.continueExplore) if (1 == data.continueExplore) {
                        if (0 == state.submitType && data.wrongNum > 0 && commit("set_life", state.secretBox.wrongTime - data.wrongNum), state.secretBox.config.totalTimeLimit && (commit("set_totalTime", data.restTotalTime), commit("set_startTotalTime", data.startTime)), 1 == state.submitType) {
                            for (var tempQArr = state.wholeQuestions,
                            tempDArr = state.wholeExplores,
                            idx = 0; idx < data.wholeExploreDetailList.length; idx++) {
                                var tempIdx = data.wholeExploreDetailList[idx].checkPointSeq;
                                if (data.wholeQuestionList[idx].content = processContent(data.wholeQuestionList[idx].content, data.wholeExploreDetailList[idx].id % 10 + 1), 2 == data.wholeQuestionList[idx].pattern) for (var i = 0; i < data.wholeQuestionList[idx].choiceList.length; i++) data.wholeQuestionList[idx].choiceList[i].content = processChoice(data.wholeQuestionList[idx].choiceList[i].content, data.wholeExploreDetailList[idx].id % 2);
                                tempQArr[tempIdx] = data.wholeQuestionList[idx],
                                tempDArr[tempIdx] = data.wholeExploreDetailList[idx]
                            }
                            commit("set_wholeQuestions", tempQArr),
                            commit("set_wholeExplores", tempDArr)
                        }
                    } else if (2 == data.continueExplore) return void dispatch("finishByTimeout");
                    data.question && data.question.timeLimit > 0 && 0 == state.submitType && dispatch("questionTimeFlow"),
                    state.secretBox.config.totalTimeLimit > 0 && dispatch("totalTimeFlow"),
                    "553955109989" == state.secretBoxCode && dispatch("webTimeFlow"),
                    data.exploreDetailCount && commit("set_exploreDetailCount", data.exploreDetailCount)
                }) : (commit("set_currentView", "gate"), void commit("set_showGate", !0)) : void commit("set_currentView", "register")) : (localStorage.clear(), void location.reload())
            },
            reStartGame: function reStartGame(_ref7) {
                var commit = _ref7.commit,
                state = _ref7.state,
                dispatch = _ref7.dispatch,
                bgImg = state.secretBox.coverImage || state.secretBox.bgImage;
                document.title = removeHTMLTag(state.secretBox.title),
                commit("set_isStart", !1),
                commit("set_choosed", !1),
                localStorage.sbox_wxopenid = "",
                localStorage.sbox_userid = "";
                var userInfoTemp = {};
                commit("set_registerInfo", userInfoTemp);
                var tmp = "";
                tmp = "other" == state.dev ? getTemplate(0, "Pc") : getTemplate(0, state.secretBox.style),
                "551203401184" != state.secretBox.code && "553315909237" != state.secretBox.code || (document.body.maxWidth = "1024px", document.getElementById("app").style.maxWidth = "1024px", tmp = getTemplate(0, state.secretBox.style));
                var img = new Image;
                if (img.src = bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b, state.secretBox.status > 2 || state.secretBox.endTime && (new Date).getTime() > new Date(state.secretBox.endTime.replace(/-/g, "/")).getTime()) return void(document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")");
                img.onload = function() {
                    state.secretBox.config.showScene && state.secretBox.config.sceneId ? 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)": document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(eval("(" + state.scenePages.page0 + ")").backimg) + ")": 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)": document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                    commit("set_currentView", tmp)
                }
            },
            checkEqualsDetail: function(e, t) {
                var o = (e.dispatch, e.commit),
                n = e.state;
                if (n.answer != n.wholeExplores[t].answer) {
                    var i = n.wholeExplores;
                    i[t].answer = n.answer,
                    o("set_wholeExplores", i),
                    $.post("/service/explore2/updateExploreDetail", {
                        answer: n.answer,
                        exploreDetailId: n.exploreDetail.id,
                        questionId: n.question.id,
                        secretBoxCode: n.secretBoxCode
                    },
                    function(e, t, o) {})
                }
            },
            getSecretBoxBack: function(e) {
                var t = (e.commit, e.state),
                o = (e.dispatch, parseInt(t.secretBox.checkPointCount / 2) + 1);
                if (t.exploreDetail.checkPointSeq == o) {
                    var n = parseInt(t.exploreDetail.exploreId % 1e4 / 10);
                    0 == n && (n = 333);
                    var i = t.exploreDetail.exploreId % 1e3;
                    0 == i && (i = 666);
                    var s = t.exploreDetail.checkPointSeq + "" + parseInt(t.exploreDetail.exploreId / n) + parseInt(localStorage.sbox_userid / i);
                    $.post("/service/explore2/getSecretBoxBack", {
                        secretBoxCode: t.secretBoxCode,
                        v: localStorage.sbox_userid,
                        e: t.exploreDetail.exploreId,
                        i: s
                    },
                    function(e, t, o) {}).error(function(e, t, o) {})
                }
            },
            showWholePreQuestion: function showWholePreQuestion(_ref10) {
                var _this = this,
                dispatch = _ref10.dispatch,
                commit = _ref10.commit,
                state = _ref10.state;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
                    var nowCheckSeqIdx, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                        for (;;) switch (_context.prev = _context.next) {
                        case 0:
                            return _context.next = 2,
                            sleep(50);
                        case 2:
                            return commit("set_currentView", "blank"),
                            _context.next = 5,
                            sleep(50);
                        case 5:
                            nowCheckSeqIdx = state.exploreDetail.checkPointSeq,
                            commit("set_choosed", !1),
                            dispatch("checkEqualsDetail", nowCheckSeqIdx),
                            nowCheckSeqIdx--,
                            commit("set_question", state.wholeQuestions[nowCheckSeqIdx]),
                            commit("set_answer", state.wholeExplores[nowCheckSeqIdx].answer),
                            commit("set_exploreDetail", state.wholeExplores[nowCheckSeqIdx]),
                            commit("set_qConfig", eval("(" + state.wholeQuestions[nowCheckSeqIdx].config + ")")),
                            nextMission = getTemplate(state.wholeQuestions[nowCheckSeqIdx].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nowCheckSeqIdx].style),
                            commit("set_currentView", nextMission);
                        case 15:
                        case "end":
                            return _context.stop()
                        }
                    },
                    _callee, _this)
                }))()
            },
            countMultipleScore: function(e) {
                for (var t = (e.dispatch, e.commit), o = e.state, n = o.answer.split("/"), i = 0; i < n.length; i++) if (o.question.answer.indexOf(n[i]) < 0) return;
                t("set_answerValue", 1)
            },
            wrongAnswer: function(e, t) {
                var o = e.dispatch,
                n = e.commit,
                i = e.state;
                n("set_answer", t),
                n("set_correct", !1),
                n("set_answerValue", 0),
                0 == i.submitType && n("set_life", i.life - 1),
                i.question.timeLimit > 0 && n("clear_questionTimeInterval"),
                1 == i.secretBox.config.exploreAfterShare && 0 == i.life && i.exploreDetail.checkPointSeq < i.secretBox.checkPointCount && (n("set_life", i.life + 1), i.secretBox.config.exploreAfterShare = -1, i.exploreAfterShareModal.content = "您的错题次数已经用完，分享到朋友圈后可获得一次复活机会！", ["555669799839", "555760709032"].includes(i.secretBoxCode) && i.correctnum >= 20 && (i.exploreAfterShareModal.callbackBtn = "不分享，直接抽奖"), i.exploreAfterShareModal.showShare = !0),
                o("submitNextQuestion", {
                    answer: t
                })
            },
            rightAnswer: function(e, t) {
                var o = e.dispatch,
                n = e.commit,
                i = e.state;
                if (n("set_answer", t), n("set_correct", !0), 2 == i.secretBox.keepSecret) {
                    for (var s = 0,
                    a = i.question.choiceList || [], r = 0; r < a.length; r++)(t + "").indexOf(a[r].tag) >= 0 && (s += a[r].value || 0);
                    n("set_answerValue", s)
                } else 3 == i.secretBox.keepSecret && o("countQuestionScore");
                i.question.timeLimit > 0 && n("clear_questionTimeInterval"),
                n("set_correctnum", i.correctnum + 1),
                o("getNextQuestion")
            },
            countQuestionScore: function(e) {
                var t = e.commit,
                o = e.state,
                n = (e.dispatch, 0);
                n = 2 == o.question.pattern ? o.question.answer.length > 1 ? o.secretBox.config.multipleScore: o.secretBox.config.singleScore: 3 == o.question.pattern ? o.secretBox.config.judgeScore: 1 == o.question.pattern ? o.secretBox.config.qandaScore: 13 == o.question.pattern ? o.secretBox.config.packScore: o.secretBox.config.singleScore,
                t("set_answerValue", n)
            },
            getNextQuestion: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                if (o.exploreDetail.checkPointSeq == o.secretBox.checkPointCount && o.secretBox.config.showVerifyImg && 0 != o.secretBox.config.showVerifyImg && !o.verifyHack) {
                    if (1 != o.secretBox.config.showVerifyImg) return t("clear_totalTimeInterval"),
                    void t("set_currentView", "verify");
                    var i = 0;
                    if (i = o.secretBox.checkPointCount < 10 ? o.secretBox.checkPointCount - 1 : o.secretBox.checkPointCount + o.secretBox.checkPointCount / 10, o.secretBox.checkPointCount > 1 && o.exploretime <= i && o.correctnum == o.secretBox.checkPointCount - 1 && o.correct) return t("clear_totalTimeInterval"),
                    void t("set_currentView", "verify")
                }
                return o.totalTime <= 0 ? void n("finishBytimeout") : o.life <= 0 ? void n("finishByNoLife") : 22993 == o.secretBox.style ? void $.post("/service/temp/tempNextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    passMode: void 0 == o.secretBox.config.passMode ? 1 : o.secretBox.config.passMode,
                    checkPointSeq: o.exploreDetail.checkPointSeq,
                    questionId: o.exploreDetail.questionId,
                    answer: o.answer,
                    answerStatus: o.correct ? 1 : 0,
                    answerValue: o.answerValue,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    errorTime: o.errorTime,
                    typeIndex: o.typeIndex
                },
                function(e, i, s) {
                    t("set_answer", ""),
                    t("set_reason", ""),
                    callback && callback(e),
                    0 == o.submitType && 0 == e.result && t("set_life", o.life - 1),
                    n("processNextQuestion", e)
                }).error(function(e, o, n) {
                    t("set_currentView", "reload")
                }) : void n(1 == o.submitType ? "getNextQuestionFromCache": "getNextQuestionFromDB")
            },
            getNextQuestionFromCache: function getNextQuestionFromCache(_ref16) {
                var _this2 = this,
                commit = _ref16.commit,
                state = _ref16.state,
                dispatch = _ref16.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
                    var nowCheckSeqIdx, nextMission, tempDArr;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                        for (;;) switch (_context2.prev = _context2.next) {
                        case 0:
                            if (nowCheckSeqIdx = state.exploreDetail.checkPointSeq + 1, void 0 === state.wholeExplores[nowCheckSeqIdx]) {
                                _context2.next = 19;
                                break
                            }
                            return _context2.next = 5,
                            sleep(50);
                        case 5:
                            return commit("set_currentView", "blank"),
                            _context2.next = 8,
                            sleep(50);
                        case 8:
                            return dispatch("checkEqualsDetail", nowCheckSeqIdx - 1),
                            commit("set_choosed", !1),
                            commit("set_exploreDetail", state.wholeExplores[nowCheckSeqIdx]),
                            commit("set_question", state.wholeQuestions[nowCheckSeqIdx]),
                            commit("set_qConfig", eval("(" + state.wholeQuestions[nowCheckSeqIdx].config + ")")),
                            nextMission = getTemplate(state.wholeQuestions[nowCheckSeqIdx].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nowCheckSeqIdx].style),
                            commit("set_currentView", nextMission),
                            commit("set_answer", state.wholeExplores[nowCheckSeqIdx].answer),
                            _context2.abrupt("return");
                        case 19:
                            tempDArr = state.wholeExplores,
                            tempDArr[nowCheckSeqIdx - 1].answer = state.answer,
                            commit("set_wholeExplores", tempDArr),
                            dispatch("getNextQuestionFromDB");
                        case 23:
                        case "end":
                            return _context2.stop()
                        }
                    },
                    _callee2, _this2)
                }))()
            },
            getNextQuestionFromDB: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                $.post("/service/explore2/nextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    passMode: void 0 == o.secretBox.config.passMode ? 1 : o.secretBox.config.passMode,
                    checkPointSeq: o.exploreDetail.checkPointSeq,
                    questionId: o.exploreDetail.questionId,
                    answer: o.answer,
                    answerStatus: o.correct ? 1 : 0,
                    answerValue: o.answerValue,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    errorTime: o.errorTime,
                    verifyCode: o.verifyCode
                },
                function(e, i, s) {
                    return 10 == e.status ? (t("set_verifyHack", !1), void t("set_verifyErrorMessage", e)) : (t("set_errorTime", 0), t("set_answer", ""), t("set_nextQuestionData", e), t("set_getNextQuestionFlag", !0), o.directNextQuestionFlag ? n("showNextQuestion") : void 0)
                }).error(function(e, o, n) {
                    t("set_currentView", "reload")
                })
            },
            showNextQuestion: function showNextQuestion(_ref18) {
                var _this3 = this,
                commit = _ref18.commit,
                state = _ref18.state,
                dispatch = _ref18.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
                    var data, audio, setHight, tempIdx, tempQArr, tempDArr, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                        for (;;) switch (_context3.prev = _context3.next) {
                        case 0:
                            if (commit("set_startShowNextQuestion", !0), !state.secretBox.config.showAnswer) {
                                _context3.next = 4;
                                break
                            }
                            return _context3.next = 4,
                            sleep(1e3);
                        case 4:
                            if (commit("set_getNextQuestionFlag", !1), commit("set_directNextQuestionFlag", !0), data = state.nextQuestionData, state.secretBox.bgVoice && !state.selfStopBgm && (audio = document.getElementById("bgm"), audio.play()), 555796614158 == state.secretBox.code && (document.body.style.transition = "1s", state.exploreDetail.checkPointSeq <= 20 && (setHight = 5 * state.exploreDetail.checkPointSeq, document.body.style.backgroundPosition = "0px " + setHight + "%")), !(state.totalTime <= 0)) {
                                _context3.next = 12;
                                break
                            }
                            return commit("clear_totalTimeInterval"),
                            _context3.abrupt("return");
                        case 12:
                            if (! (state.life <= 0)) {
                                _context3.next = 22;
                                break
                            }
                            if (! (1 == state.secretBox.config.exploreAfterShare && 0 == state.life && state.exploreDetail.checkPointSeq < state.secretBox.checkPointCount)) {
                                _context3.next = 20;
                                break
                            }
                            commit("set_life", state.life + 1),
                            state.secretBox.config.exploreAfterShare = -1,
                            state.exploreAfterShareModal.content = "您的错题次数已经用完，分享到朋友圈后可获得一次复活机会！",
                            state.exploreAfterShareModal.showShare = !0,
                            _context3.next = 22;
                            break;
                        case 20:
                            return dispatch("finishByNoLife"),
                            _context3.abrupt("return");
                        case 22:
                            return _context3.next = 24,
                            sleep(5);
                        case 24:
                            return commit("set_currentView", "blank"),
                            commit("set_getNextQuestionFlag", !0),
                            _context3.next = 28,
                            sleep(10);
                        case 28:
                            2 == data.status ? (dispatch("totalTimeStop"), commit("set_currentView", "finish")) : 3 == data.status ? dispatch("showSuccess") : (data = processData(data), data.correctnum > state.correctnum && commit("set_correctnum", data.correctnum), commit("set_choosed", !1), commit("set_exploreDetail", data.exploreDetail), "5641107497637" == state.secretBoxCode && (data.question.correct = data.correct, data.question.wrong = data.wrong), commit("set_question", data.question), 1 == state.submitType && (tempIdx = data.exploreDetail.checkPointSeq, tempQArr = state.wholeQuestions, tempQArr[tempIdx] = data.question, commit("set_wholeQuestions", tempQArr), tempDArr = state.wholeExplores, tempDArr[tempIdx] = data.exploreDetail, commit("set_wholeExplores", tempDArr)), commit("set_qConfig", eval("(" + state.nextQuestionData.question.config + ")")), nextMission = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style), commit("set_currentView", nextMission), data.question.timeLimit > 0 && 0 == state.submitType ? dispatch("questionTimeFlow") : commit("set_questionTime", 1e4), dispatch("getSecretBoxBack"));
                        case 29:
                        case "end":
                            return _context3.stop()
                        }
                    },
                    _callee3, _this3)
                }))()
            },
            showSuccess: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                n("totalTimeStop"),
                $.post("/service/explore2/finishExplore", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    userId: localStorage.sbox_userid || 0,
                    exploreId: o.exploreDetail.exploreId
                },
                function(e, n, i) {
                    t("set_successData", e);
                    var s = getTemplate(99, o.secretBox.finishStyle);
                    t("set_currentView", s),
                    t("set_isDemo", 1 == o.secretBox.status),
                    o.secretBox.backImage && (document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(o.secretBox.backImage) + ")", document.body.style.backgroundPosition = "0px 0px")
                }),
                localStorage.exploreId = 0,
                "553955109989" == o.secretBoxCode && n("webTimeStop")
            },
            getScore: function(e, t) {
                var o = e.commit,
                n = e.state;
                e.dispatch;
                return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(e) {
                    $.post("service/explore2/getScore", {
                        count: n.secretBox.config.scoreListNum || 100,
                        secretBoxCode: n.secretBox.code,
                        keepSecret: n.secretBox.keepSecret,
                        rankMode: n.secretBox.config.rankMode,
                        userId: localStorage.sbox_userid,
                        field: t
                    },
                    function(t, i, s) {
                        if (1 == t.status) {
                            var a = getTemplate(100, n.secretBox.config.siStyle);
                            o("set_scoreInfoTemplate", a),
                            e(t)
                        }
                    })
                })
            },
            questionTimeFlow: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                if (t("set_questionTime", o.question.timeLimit), t("set_startQuestionTime", Date.now() - 1), 0 == o.questionTimeInterval) {
                    var i = setInterval(function() {
                        var e = Date.now();
                        if (o.questionTime <= 0) {
                            if (131773 == o.secretBox.config.cpStyle) return t("clear_questionTimeInterval"),
                            t("set_choosed", !0),
                            void n("failureExplore");
                            if (t("set_toast", {
                                toastMsg: "该题时间已结束!",
                                showToast: !0,
                                type: "warn",
                                time: 2e3
                            }), t("clear_questionTimeInterval"), t("set_choosed", !0), n("wrongAnswer", 0), 34460 == o.secretBox.config.cpStyle) {
                                if (20 == o.exploreDetail.checkPointSeq) {
                                    if (! (o.rightNum >= 15)) return void(self.location.href = "./reload2.html#" + location.href.split("#")[1]);
                                    t("set_rightNum", 0)
                                }
                                if (40 == o.exploreDetail.checkPointSeq && !(o.rightNum >= 18)) return void(self.location.href = "./reload2.html#" + location.href.split("#")[1])
                            }
                        } else - 1 == o.secretBox.config.exploreAfterShare ? t("set_startQuestionTime", Date.now() - 1) : o.startQuestionTime < e ? (t("set_questionTime", o.questionTime - Math.round((e - o.startQuestionTime) / 1e3)), t("set_startQuestionTime", e)) : (t("clear_questionTimeInterval"), t("set_choosed", !0), n("wrongAnswer", 0))
                    },
                    1e3);
                    t("set_questionTimeInterval", i)
                }
            },
            questionTimeStop: function(e) {
                var t = e.commit;
                e.state;
                t("clear_questionTimeInterval"),
                t("set_questionTime", 1e4)
            },
            submitWhole: function(e) {
                var t = e.commit;
                e.state,
                e.dispatch;
                t("set_confirmModal", {
                    showConfirm: !0,
                    title: "提示",
                    content: "请确定是否提交？",
                    confirmText: "确定提交",
                    cancelText: "我再想想"
                })
            },
            submitFinal: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                $.post("/service/explore2/submitWhole", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    checkPointSeq: o.exploreDetail.checkPointSeq,
                    answer: o.answer,
                    keepSecret: o.secretBox.keepSecret,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    questionId: o.question.id,
                    visitorId: localStorage.sbox_userid || 0,
                    verifyCode: o.verifyCode
                },
                function(e, o, i) {
                    if (10 == e.status) return t("set_verifyHack", !1),
                    void t("set_verifyErrorMessage", e);
                    t("set_toast", {
                        showToast: !1
                    }),
                    n("showSuccess")
                }).error(function(e, o, n) {
                    t("set_currentView", "reload")
                })
            },
            submitWholeNext: function(e) {
                for (var t = e.commit,
                o = e.state,
                n = e.dispatch,
                i = 0,
                s = 1; s <= o.wholeExplores.length; s++) void 0 !== o.wholeExplores[s] && i++;
                if (o.secretBox.checkPointCount != i) return t("set_AlertModal", {
                    alertTitle: "温馨提示",
                    alertMsg: "您还有题尚未解答，请先解答后再提交！",
                    showAlert: !0,
                    undoQuestionList: []
                }),
                void t("set_submitQDisabled", !1);
                var a = o.exploreDetail.checkPointSeq,
                r = o.wholeExplores;
                r[a].answer = o.answer,
                t("set_wholeExplores", r);
                for (var c = "",
                l = 1; l <= o.wholeExplores.length; l++) void 0 === o.wholeExplores[l] || o.wholeExplores[l].answer || l % 2 == 0 && "554568525639" == o.secretBoxCode || "554599007689" == o.secretBoxCode && 9 == l || (c += l + ",");
                if (c.length > 0) {
                    t("set_toast", {
                        showToast: !1
                    }),
                    t("set_submitQDisabled", !1),
                    c = c.substr(0, c.length - 1);
                    return void t("set_AlertModal", {
                        alertTitle: "温馨提示",
                        alertMsg: "部分题目没有作答，请先解答后再提交！",
                        showAlert: !0,
                        undoQuestionList: c.split(",")
                    })
                }
                n("submitWhole")
            },
            goTochoosedQuestion: function goTochoosedQuestion(_ref26, i) {
                var _this4 = this,
                dispatch = _ref26.dispatch,
                commit = _ref26.commit,
                state = _ref26.state;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
                    var nowCheckSeqIdx, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                        for (;;) switch (_context4.prev = _context4.next) {
                        case 0:
                            return _context4.next = 2,
                            sleep(50);
                        case 2:
                            return commit("set_currentView", "blank"),
                            _context4.next = 5,
                            sleep(50);
                        case 5:
                            nowCheckSeqIdx = state.exploreDetail.checkPointSeq,
                            dispatch("checkEqualsDetail", nowCheckSeqIdx),
                            commit("set_choosed", !1),
                            commit("set_question", state.wholeQuestions[i]),
                            commit("set_answer", ""),
                            commit("set_exploreDetail", state.wholeExplores[i]),
                            commit("set_qConfig", eval("(" + state.wholeQuestions[i].config + ")")),
                            nextMission = getTemplate(state.wholeQuestions[i].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[i].style),
                            commit("set_currentView", nextMission);
                        case 14:
                        case "end":
                            return _context4.stop()
                        }
                    },
                    _callee4, _this4)
                }))()
            },
            totalTimeFlow: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch,
                i = setInterval(function() {
                    var e = Date.now();
                    if (t("set_totalTime", o.secretBox.config.totalTimeLimit - Math.round((e - o.startTotalTime) / 1e3)), o.totalTime <= 0) {
                        if (t("clear_totalTimeInterval"), "5671207526806" == o.secretBoxCode) return;
                        n("finishByTimeout")
                    }
                },
                1e3);
                t("set_totalTimeInterval", i)
            },
            totalTimeStop: function(e) {
                var t = e.commit;
                e.state;
                t("clear_totalTimeInterval"),
                t("set_totalTime", -1)
            },
            webTimeFlow: function(e) {
                var t = e.commit,
                o = e.state;
                e.dispatch;
                t("set_webTimeInterval", setInterval(function() {
                    $.post("/service/explore2/updateExploreTime", {
                        secretBoxCode: o.secretBoxCode,
                        secretKey: o.secretKey,
                        visitorId: localStorage.sbox_userid || 0,
                        exploreId: o.exploreDetail.exploreId,
                        duration: 3
                    },
                    function(e, t, o) {})
                },
                3e3))
            },
            webTimeStop: function(e) {
                var t = (e.commit, e.state);
                clearInterval(t.webTimeInterval)
            },
            getImgRealWidthAndHight: function(e) {
                var t = e,
                o = new Image;
                o.src = t,
                o.onload = function() {
                    return "width:" + o.width + ",height:" + o.height
                }
            },
            reloadQuestion: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                t("set_errorTime", o.errorTime + 1),
                o.errorTime < 5 ? n("getNextQuestion") : t("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: "请求失败次数过多请刷新本页面重试！",
                    showAlert: !0
                })
            },
            failureExplore: function(e) {
                var t = (e.commit, e.state);
                e.dispatch;
                $.post("/service/explore2/failureExplore", {
                    secretBoxCode: t.secretBoxCode,
                    secretKey: t.secretKey,
                    userId: localStorage.sbox_userid || 0,
                    answer: t.answer,
                    answerStatus: t.correct ? 1 : 0,
                    exploreId: t.exploreDetail.exploreId,
                    exploreDetailId: t.exploreDetail.id,
                    questionId: t.question.id
                },
                function(e, t, o) {})
            },
            tempStartExplore: function tempStartExplore(_ref33) {
                var commit = _ref33.commit,
                state = _ref33.state,
                dispatch = _ref33.dispatch;
                $.post("/service/temp/tempStartExplore", {
                    secretBoxCode: state.secretBoxCode,
                    secretKey: state.secretKey,
                    uuid: localStorage.sbox_wxopenid,
                    userId: localStorage.sbox_userid,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("_")[2] || 0),
                    isReged: null != state.registerInfo ? 1 : 0,
                    typeIndex: state.typeIndex
                },
                function(data, textStatus, xhr) {
                    if (2 == data.status) return void commit("set_currentView", "finish");
                    if (100 == data.status) return commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: "该类别题目已经全部答完",
                        showAlert: !0
                    }),
                    void commit("set_isStart", !1);
                    if (null != data.playChance && data.playChance <= 0) {
                        var alertMsg = "",
                        shareChanceText = state.secretBox.shareChance > 99 ? "无限": state.secretBox.shareChance;
                        return state.secretBox.shareChance > 0 && 0 == data.shareCount ? (alertMsg = state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~": state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~": "抱歉，您的参与机会已经用完了，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~", commit("set_isStart", !1)) : alertMsg = state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完了，请明天再来吧！": state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完了，请下周再来吧！": "抱歉，您的参与机会已经用完了，感谢参与活动！",
                        void commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: alertMsg,
                            showAlert: !0
                        })
                    }
                    data = processData(data),
                    commit("set_playChance", data.playChance);
                    var tmp = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style),
                    bgImg = state.secretBox.bgImage || state.secretBox.coverImage;
                    if (document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")", commit("set_isDemo", !1), commit("set_exploreDetail", data.exploreDetail), commit("set_qConfig", eval("(" + data.question.config + ")")), commit("set_currentView", tmp), state.secretBox.config.submitType && commit("set_submitType", state.secretBox.config.submitType), 0 == state.submitType && commit("set_life", state.secretBox.wrongTime), state.secretBox.config.totalTimeLimit && commit("set_totalTime", state.secretBox.config.totalTimeLimit), commit("set_question", data.question), commit("set_startTotalTime", Date.now()), state.secretBox.config.continueExplore && 1 == state.secretBox.config.continueExplore) if (1 == data.continueExplore) data.wrongNum > 0 && commit("set_life", state.secretBox.wrongTime - data.wrongNum),
                    state.secretBox.config.totalTimeLimit && (commit("set_totalTime", data.restTotalTime), commit("set_startTotalTime", data.startTime));
                    else if (2 == data.continueExplore) return void dispatch("finishByTimeout");
                    data.question && data.question.timeLimit > 0 && dispatch("questionTimeFlow"),
                    state.secretBox.config.totalTimeLimit > 0 && dispatch("totalTimeFlow")
                })
            },
            submitNextQuestion: function(e, t) {
                var o = e.commit,
                n = e.state,
                i = e.dispatch,
                s = t.answer,
                a = t.callback;
                if (n.question.timeLimit > 0 && o("clear_questionTimeInterval"), n.exploreDetail.checkPointSeq == n.secretBox.checkPointCount && n.secretBox.config.showVerifyImg && 0 != n.secretBox.config.showVerifyImg && !n.verifyHack) {
                    if (o("set_answer", s), 1 != n.secretBox.config.showVerifyImg) return o("clear_totalTimeInterval"),
                    void o("set_currentView", "verify");
                    if (n.verifyFlag) return o("clear_totalTimeInterval"),
                    void o("set_currentView", "verify")
                }
                return n.totalTime <= 0 ? void i("finishByTimeout") : n.life <= 0 ? void i("finishByNoLife") : 22993 == n.secretBox.style ? void $.post("/service/temp/tempNextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: n.secretBoxCode,
                    secretKey: n.secretKey,
                    passMode: void 0 == n.secretBox.config.passMode ? 1 : n.secretBox.config.passMode,
                    checkPointSeq: n.exploreDetail.checkPointSeq,
                    questionId: n.exploreDetail.questionId,
                    answer: s,
                    answerStatus: n.correct ? 1 : 0,
                    answerValue: n.answerValue,
                    exploreId: n.exploreDetail.exploreId,
                    exploreDetailId: n.exploreDetail.id,
                    errorTime: n.errorTime,
                    typeIndex: n.typeIndex
                },
                function(e, t, s) {
                    o("set_answer", ""),
                    o("set_reason", ""),
                    a && a(e),
                    0 == n.submitType && 0 == e.result && o("set_life", n.life - 1),
                    i("processNextQuestion", e)
                }).error(function(e, t, n) {
                    o("set_currentView", "reload")
                }) : void $.post("/service/explore2/nextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: n.secretBoxCode,
                    secretKey: n.secretKey,
                    passMode: void 0 == n.secretBox.config.passMode ? 1 : n.secretBox.config.passMode,
                    checkPointSeq: n.exploreDetail.checkPointSeq,
                    questionId: n.exploreDetail.questionId,
                    answer: s,
                    answerStatus: n.correct ? 1 : 0,
                    answerValue: n.answerValue,
                    exploreId: n.exploreDetail.exploreId,
                    exploreDetailId: n.exploreDetail.id,
                    errorTime: n.errorTime,
                    reason: n.reason,
                    verifyCode: n.verifyCode
                },
                function(e, t, s) {
			alert('55555')
                    if (10 == e.status) return o("set_verifyHack", !1),
                    void o("set_verifyErrorMessage", e);
                    e.verifyFlag && o("set_verifyFlag", !0),
                    o("set_answer", ""),
                    o("set_reason", ""),
                    a && a(e),
                    0 == n.submitType && 0 == e.result && o("set_life", n.life - 1),
                    i("processNextQuestion", e)
		var    data=e;
alert(JSON.stringify(data))
                }).error(function(e, t, n) {
                    o("set_currentView", "reload")
                })
            },
            processNextQuestion: function(e, t) {
                var o = this,
                n = e.commit,
                i = e.state,
                s = e.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function e() {
                    var a, r, c, l, u, h, d, p;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n("set_errorTime", 0), n("set_answer", ""), n("set_nextQuestionData", t), n("set_getNextQuestionFlag", !0), 1 == t.result && n("set_rightNum", i.rightNum + 1), i.secretBox.config.showAnswer && i.secretBox.config.showAnswer >= 1 && ("5671737106717" != i.secretBox.code || "5671737106717" == i.secretBox.code && t.exploreDetail.checkPointSeq > 3) && (1 == t.result ? n("set_toast", {
                                toastMsg: "回答正确",
                                showToast: !0,
                                type: "success",
                                time: 1e3
                            }) : n("set_toast", {
                                toastMsg: "回答错误",
                                showToast: !0,
                                type: "warn",
                                time: 1e3
                            })), "5641727401812" != i.secretBox.code && "5681239095020" != i.secretBox.code || (a = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i.rightAnswerFor124112)), 1 == t.result && (a.score = a.score + parseInt(100 / i.secretBox.checkPointCount)), n("set_rightAnswerFor124112", a)), !i.qConfig.answerExplain || !(t.result && i.secretBox.config.showAnswerExplain && 3 == i.secretBox.config.showAnswerExplain || !t.result && i.secretBox.config.showAnswerExplain && 1 == i.secretBox.config.showAnswerExplain || i.secretBox.config.showAnswerExplain && 2 == i.secretBox.config.showAnswerExplain)) {
                                e.next = 11;
                                break
                            }
                            n("set_explain", {
                                showExplain: !0,
                                title: i.qConfig.explainTitle || "答案提示",
                                content: i.qConfig.answerExplain,
                                btnText: i.secretBox.config.explainButton || "下一题"
                            }),
                            e.next = 30;
                            break;
                        case 11:
                            if (t.result || !i.secretBox.config.showAnswer || 3 != i.secretBox.config.showAnswer) {
                                e.next = 26;
                                break
                            }
                            if (r = "", c = [], l = [], 2 == i.question.pattern) {
                                for (u = !1, l = t.answer.split("/"), h = 0; h < i.question.choiceList.length; h++) l.indexOf("" + i.question.choiceList[h].tag) >= 0 && (r += i.question.choiceList[h].content + "<br>", d = new Object, d.image = i.question.choiceList[h].image, d.content = i.question.choiceList[h].content, c.push(d), d.image && d.image.length > 10 && (u = !0));
                                u ? r = "": c = new Array
                            } else r = 3 == i.question.pattern ? "Y" == t.answer ? "此题判断为 [正确] ": "此题判断为 [错误] ": 4 == i.question.pattern ? '<img src="' + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(i.question.contentImage) + '" style="width:50%;margin-left:25%" />': t.answer;
                            if ("5641727401812" != i.secretBox.code && "5681239095020" != i.secretBox.code) {
                                e.next = 23;
                                break
                            }
                            return p = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i.rightAnswerFor124112)),
                            p.show = !0,
                            3 == i.question.pattern && ("Y" == t.answer ? l.push("Y") : l.push("N")),
                            p.answer = l,
                            n("set_rightAnswerFor124112", p),
                            e.abrupt("return");
                        case 23:
                            "5671003004567" == i.secretBox.code || "555996563341" == i.secretBox.code ? n("set_showExplain", r) : n("set_explain", {
                                showAnswer: !0,
                                title: i.qConfig.explainTitle || "答案提示",
                                content: r,
                                btnText: i.secretBox.config.explainButton || "知道了",
                                answerArray: c
                            }),
                            e.next = 30;
                            break;
                        case 26:
                            if ("5611100994031" != i.secretBoxCode || 10 != i.exploreDetail.checkPointSeq && 25 != i.exploreDetail.checkPointSeq) {
                                e.next = 29;
                                break
                            }
                            return n("set_currentView", "gate"),
                            e.abrupt("return");
                        case 29:
                            s("showNextQuestion");
                        case 30:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, o)
                }))()
            },
            getWholeNextQuestion: function getWholeNextQuestion(_ref37, answer) {
                var _this6 = this,
                commit = _ref37.commit,
                state = _ref37.state,
                dispatch = _ref37.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
                    var nextCheckPointSeq, tempEArr, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
                        for (;;) switch (_context6.prev = _context6.next) {
                        case 0:
                            if (nextCheckPointSeq = state.exploreDetail.checkPointSeq + 1, void 0 === state.wholeExplores[nextCheckPointSeq]) {
                                _context6.next = 17;
                                break
                            }
                            return _context6.next = 4,
                            sleep(50);
                        case 4:
                            return commit("set_currentView", "blank"),
                            _context6.next = 7,
                            sleep(50);
                        case 7:
                            return answer != state.wholeExplores[state.exploreDetail.checkPointSeq].answer && (tempEArr = state.wholeExplores, tempEArr[state.exploreDetail.checkPointSeq].answer = answer, commit("set_wholeExplores", tempEArr), $.post("/service/explore2/updateExploreDetail", {
                                answer: answer,
                                exploreDetailId: state.exploreDetail.id,
                                questionId: state.question.id,
                                secretBoxCode: state.secretBoxCode
                            },
                            function(e, t, o) {})),
                            commit("set_exploreDetail", state.wholeExplores[nextCheckPointSeq]),
                            commit("set_question", state.wholeQuestions[nextCheckPointSeq]),
                            commit("set_answer", state.wholeExplores[nextCheckPointSeq].answer),
                            commit("set_qConfig", eval("(" + state.wholeQuestions[nextCheckPointSeq].config + ")")),
                            nextMission = getTemplate(state.wholeQuestions[nextCheckPointSeq].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nextCheckPointSeq].style),
                            commit("set_currentView", nextMission),
                            _context6.abrupt("return");
                        case 17:
                            tempEArr = state.wholeExplores,
                            tempEArr[state.exploreDetail.checkPointSeq].answer = answer,
                            commit("set_wholeExplores", tempEArr),
                            $.post("/service/explore2/nextCheckPoint", {
                                userId: localStorage.sbox_userid || 0,
                                secretBoxCode: state.secretBoxCode,
                                secretKey: state.secretKey,
                                passMode: void 0 == state.secretBox.config.passMode ? 1 : state.secretBox.config.passMode,
                                checkPointSeq: state.exploreDetail.checkPointSeq,
                                questionId: state.exploreDetail.questionId,
                                answer: answer,
                                answerStatus: 0,
                                answerValue: state.answerValue,
                                exploreId: state.exploreDetail.exploreId,
                                exploreDetailId: state.exploreDetail.id,
                                errorTime: state.errorTime
                            },
                            function(e, t, o) {
                                commit("set_errorTime", 0),
                                commit("set_answer", ""),
                                commit("set_nextQuestionData", e),
                                dispatch("showNextQuestion")
                            }).error(function(e, t, o) {
                                commit("set_currentView", "reload")
                            });
                        case 21:
                        case "end":
                            return _context6.stop()
                        }
                    },
                    _callee6, _this6)
                }))()
            },
            getWholePreQuestion: function getWholePreQuestion(_ref38, answer) {
                var _this7 = this,
                dispatch = _ref38.dispatch,
                commit = _ref38.commit,
                state = _ref38.state;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
                    var tempEArr, preCheckPointSeq, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
                        for (;;) switch (_context7.prev = _context7.next) {
                        case 0:
                            return _context7.next = 2,
                            sleep(50);
                        case 2:
                            return commit("set_currentView", "blank"),
                            _context7.next = 5,
                            sleep(50);
                        case 5:
                            answer != state.wholeExplores[state.exploreDetail.checkPointSeq].answer && (tempEArr = state.wholeExplores, tempEArr[state.exploreDetail.checkPointSeq].answer = answer, commit("set_wholeExplores", tempEArr), $.post("/service/explore2/updateExploreDetail", {
                                secretBoxCode: state.secretBoxCode,
                                secretKey: state.secretKey,
                                answer: answer,
                                exploreDetailId: state.exploreDetail.id,
                                questionId: state.question.id
                            },
                            function(e, t, o) {})),
                            preCheckPointSeq = state.exploreDetail.checkPointSeq - 1,
                            commit("set_question", state.wholeQuestions[preCheckPointSeq]),
                            commit("set_answer", state.wholeExplores[preCheckPointSeq].answer),
                            commit("set_exploreDetail", state.wholeExplores[preCheckPointSeq]),
                            commit("set_qConfig", eval("(" + state.wholeQuestions[preCheckPointSeq].config + ")")),
                            nextMission = getTemplate(state.wholeQuestions[preCheckPointSeq].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[preCheckPointSeq].style),
                            commit("set_currentView", nextMission);
                        case 13:
                        case "end":
                            return _context7.stop()
                        }
                    },
                    _callee7, _this7)
                }))()
            },
            submitWholeFinish: function(e, t) {
                for (var o = e.commit,
                n = e.state,
                i = e.dispatch,
                s = 0,
                a = 1; a <= n.wholeExplores.length; a++) void 0 !== n.wholeExplores[a] && s++;
                if (n.secretBox.checkPointCount != s && "5671109336287" != n.secretBox.code) return o("set_AlertModal", {
                    alertTitle: "温馨提示",
                    alertMsg: "您还有题尚未解答，请先解答后再提交！",
                    showAlert: !0,
                    undoQuestionList: []
                }),
                void o("set_submitQDisabled", !1);
                if (t != n.wholeExplores[n.exploreDetail.checkPointSeq].answer) {
                    var r = n.wholeExplores;
                    r[n.exploreDetail.checkPointSeq].answer = t,
                    o("set_wholeExplores", r),
                    $.post("/service/explore2/updateExploreDetail", {
                        secretBoxCode: n.secretBoxCode,
                        secretKey: n.secretKey,
                        answer: t,
                        exploreDetailId: n.exploreDetail.id,
                        questionId: n.question.id
                    },
                    function(e, t, o) {})
                }
                o("set_answer", t);
                for (var c = "",
                l = 1; l <= n.wholeExplores.length; l++) void 0 === n.wholeExplores[l] || n.wholeExplores[l].answer || (c += l + ",");
                if (c.length > 0) {
                    o("set_toast", {
                        showToast: !1
                    }),
                    o("set_submitQDisabled", !1),
                    c = c.substr(0, c.length - 1);
                    return void o("set_AlertModal", {
                        alertTitle: "温馨提示",
                        alertMsg: "部分题目没有作答，请先解答后再提交！",
                        showAlert: !0,
                        undoQuestionList: c.split(",")
                    })
                }
                i("submitWhole")
            },
            finishByTimeout: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                t("set_toast", {
                    toastMsg: "答题时间结束了!数据提交中...",
                    showToast: !0,
                    type: "warn",
                    time: 2e4
                }),
                $.post("/service/explore2/finishByTimeout", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    userId: localStorage.sbox_userid || 0,
                    answer: o.answer,
                    answerStatus: o.correct ? 1 : 0,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    questionId: o.question.id
                },
                function(e, o, i) {
                    t("set_toast", {
                        showToast: !1
                    }),
                    n("showSuccess")
                })
            },
            finishByNoLife: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                return n("totalTimeStop"),
                n("failureExplore"),
                o.secretBox.config && 1 == o.secretBox.config.failureAction ? n("showSuccess") : t("set_currentView", "fail")
            }
        }
    },
    IbBP: function(e, t, o) {
        "use strict";
        function n(e) {
            o("5cLG")
        }
        var i = o("bxxF"),
        s = (i.a, Boolean, Number, String, String, String, Boolean, String, String, {
            name: "toast",
            mixins: [i.a],
            props: {
                value: Boolean,
                time: {
                    type: Number,
                default:
                    2e3
                },
                type: {
                    type: String,
                default:
                    "success"
                },
                transition: String,
                width: {
                    type: String,
                default:
                    "7.6em"
                },
                isShowMask: {
                    type: Boolean,
                default:
                    !1
                },
                text: String,
                position: String
            },
            data: function() {
                return {
                    show: !1
                }
            },
            created: function() {
                this.value && (this.show = !0)
            },
            computed: {
                currentTransition: function() {
                    return this.transition ? this.transition: "top" === this.position ? "vux-slide-from-top": "bottom" === this.position ? "vux-slide-from-bottom": "vux-fade"
                },
                toastClass: function() {
                    return {
                        "weui-toast_forbidden": "warn" === this.type,
                        "weui-toast_cancel": "cancel" === this.type,
                        "weui-toast_success": "success" === this.type,
                        "weui-toast_text": "text" === this.type,
                        "vux-toast-top": "top" === this.position,
                        "vux-toast-bottom": "bottom" === this.position,
                        "vux-toast-middle": "middle" === this.position
                    }
                },
                style: function() {
                    if ("text" === this.type && "auto" === this.width) return {
                        padding: "10px"
                    }
                }
            },
            watch: {
                show: function(e) {
                    var t = this;
                    e && (this.$emit("input", !0), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                        t.show = !1,
                        t.$emit("input", !1),
                        t.$emit("on-hide"),
                        t.fixSafariOverflowScrolling("touch")
                    },
                    this.time))
                },
                value: function(e) {
                    this.show = e
                }
            }
        }),
        a = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticClass: "vux-toast"
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isShowMask && e.show,
                    expression: "isShowMask && show"
                }],
                staticClass: "weui-mask_transparent"
            }), e._v(" "), o("transition", {
                attrs: {
                    name: e.currentTransition
                }
            },
            [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "weui-toast",
                class: e.toastClass,
                style: {
                    width: e.width
                }
            },
            [o("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "text" !== e.type,
                    expression: "type !== 'text'"
                }],
                staticClass: "weui-icon-success-no-circle weui-icon_toast"
            }), e._v(" "), e.text ? o("p", {
                staticClass: "weui-toast__content",
                style: e.style,
                domProps: {
                    innerHTML: e._s(e.text)
                }
            }) : o("p", {
                staticClass: "weui-toast__content",
                style: e.style
            },
            [e._t("default")], 2)])])], 1)
        },
        r = [],
        c = {
            render: a,
            staticRenderFns: r
        },
        l = c,
        u = o("VU/8"),
        h = n,
        d = u(s, l, !1, h, null, null);
        t.a = d.exports
    },
    JXSH: function(e, t, o) {
        "use strict";
        function n(e) {
            o("5ll8")
        }
        var i = o("/o5o"),
        s = o("UtBj"),
        a = o("PCS2"),
        r = (s.a, String, String, String, Array, i.a, a.a, {
            filters: {
                cdn: s.a
            },
            props: {
                explainTitle: {
                    type: String,
                default:
                    "问题解读"
                },
                explainDetail: {
                    type: String,
                default:
                    "答案解释"
                },
                explainButton: {
                    type: String,
                default:
                    "我知道了"
                },
                answerArray: {
                    type: Array
                }
            },
            components: {
                Modal: i.a,
                Scroller: a.a
            },
            methods: {}
        }),
        c = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                attrs: {
                    id: "answerexplain"
                }
            },
            [o("div", {
                staticClass: "weui-mask"
            }), e._v(" "), o("div", {
                staticClass: "weui-dialog"
            },
            [o("div", {
                staticClass: "title"
            },
            [e._v("\n\t\t\t\t" + e._s(e.explainTitle) + "\n\t\t")]), e._v(" "), o("div", {
                staticClass: "answer_body"
            },
            [o("div", [o("div", {
                domProps: {
                    innerHTML: e._s(e.explainDetail)
                }
            }), e._v(" "), e._l(e.answerArray,
            function(t) {
                return o("div", {
                    staticClass: "answerDiv"
                },
                [o("div", {
                    staticClass: "answerContent"
                },
                [e._v(e._s(t.content))]), e._v(" "), o("img", {
                    staticClass: "answerImage",
                    attrs: {
                        src: e._f("cdn")(t.image),
                        alt: ""
                    }
                })])
            }), e._v(" "), o("div", {
                staticStyle: {
                    clear: "both"
                }
            })], 2)]), e._v(" "), o("div", {
                staticClass: "weui-dialog__ft",
                on: {
                    click: function(t) {
                        return e.$emit("closeExplain")
                    }
                }
            },
            [o("a", {
                staticClass: "weui-dialog__btn weui-dialog__btn_primary"
            },
            [e._v(e._s(e.explainButton))])])])])
        },
        l = [],
        u = {
            render: c,
            staticRenderFns: l
        },
        h = u,
        d = o("VU/8"),
        p = n,
        f = d(r, h, !1, p, null, null);
        t.a = f.exports
    },
    JbJP: function(e, t) {},
    LTJL: function(e, t, o) {
        "use strict";
        function n(e) {
            o("vSYg")
        }
        var i = o("3zsV"),
        s = (i.a, Boolean, String, String, String, Boolean, String, String, Number, String, {
            name: "alert",
            components: {
                XDialog: i.a
            },
            created: function() {
                void 0 !== this.value && (this.showValue = this.value)
            },
            props: {
                value: Boolean,
                title: String,
                content: String,
                buttonText: String,
                hideOnBlur: {
                    type: Boolean,
                default:
                    !1
                },
                maskTransition: {
                    type: String,
                default:
                    "vux-mask"
                },
                dialogTransition: {
                    type: String,
                default:
                    "vux-dialog"
                },
                maskZIndex: [Number, String]
            },
            data: function() {
                return {
                    showValue: !1
                }
            },
            methods: {
                _onHide: function() {
                    this.showValue = !1
                }
            },
            watch: {
                value: function(e) {
                    this.showValue = e
                },
                showValue: function(e) {
                    this.$emit("input", e)
                }
            }
        }),
        a = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticClass: "vux-alert"
            },
            [o("x-dialog", {
                attrs: {
                    "mask-transition": e.maskTransition,
                    "dialog-transition": e.dialogTransition,
                    "hide-on-blur": e.hideOnBlur,
                    "mask-z-index": e.maskZIndex
                },
                on: {
                    "on-hide": function(t) {
                        return e.$emit("on-hide")
                    },
                    "on-show": function(t) {
                        return e.$emit("on-show")
                    }
                },
                model: {
                    value: e.showValue,
                    callback: function(t) {
                        e.showValue = t
                    },
                    expression: "showValue"
                }
            },
            [o("div", {
                staticClass: "weui-dialog__hd"
            },
            [o("strong", {
                staticClass: "weui-dialog__title"
            },
            [e._v(e._s(e.title))])]), e._v(" "), o("div", {
                staticClass: "weui-dialog__bd"
            },
            [e._t("default",
            function() {
                return [o("div", {
                    domProps: {
                        innerHTML: e._s(e.content)
                    }
                })]
            })], 2), e._v(" "), o("div", {
                staticClass: "weui-dialog__ft"
            },
            [o("a", {
                staticClass: "weui-dialog__btn weui-dialog__btn_primary",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e._onHide
                }
            },
            [e._v(e._s(e.buttonText || "确定"))])])])], 1)
        },
        r = [],
        c = {
            render: a,
            staticRenderFns: r
        },
        l = c,
        u = o("VU/8"),
        h = n,
        d = u(s, l, !1, h, null, null);
        t.a = d.exports
    },
    MO5W: function(e, t, o) {
        "use strict";
        function n(e) {
            o("YxIj")
        }
        var i = o("3zsV"),
        s = (i.a, Boolean, Boolean, String, String, Boolean, String, String, String, String, Number, String, String, String, Boolean, Object, {
            name: "confirm",
            components: {
                XDialog: i.a
            },
            props: {
                value: {
                    type: Boolean,
                default:
                    !1
                },
                showInput: {
                    type: Boolean,
                default:
                    !1
                },
                placeholder: {
                    type: String,
                default:
                    ""
                },
                theme: {
                    type: String,
                default:
                    "ios"
                },
                hideOnBlur: {
                    type: Boolean,
                default:
                    !1
                },
                title: String,
                confirmText: String,
                cancelText: String,
                maskTransition: {
                    type: String,
                default:
                    "vux-fade"
                },
                maskZIndex: [Number, String],
                dialogTransition: {
                    type: String,
                default:
                    "vux-dialog"
                },
                content: String,
                closeOnConfirm: {
                    type: Boolean,
                default:
                    !0
                },
                inputAttrs: Object
            },
            created: function() {
                this.showValue = this.show,
                this.value && (this.showValue = this.value)
            },
            watch: {
                value: function(e) {
                    this.showValue = e
                },
                showValue: function(e) {
                    var t = this;
                    this.$emit("input", e),
                    e && (this.showInput && (this.msg = "", setTimeout(function() {
                        t.$refs.input && t.setInputFocus()
                    },
                    300)), this.$emit("on-show"))
                }
            },
            data: function() {
                return {
                    msg: "",
                    showValue: !1
                }
            },
            methods: {
                setInputValue: function(e) {
                    this.msg = e
                },
                setInputFocus: function() {
                    this.$refs.input.focus()
                },
                _onConfirm: function() {
                    this.showValue && (this.closeOnConfirm && (this.showValue = !1), this.$emit("on-confirm", this.msg))
                },
                _onCancel: function() {
                    this.showValue && (this.showValue = !1, this.$emit("on-cancel"))
                }
            }
        }),
        a = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticClass: "vux-confirm"
            },
            [o("x-dialog", {
                attrs: {
                    "dialog-class": "android" === e.theme ? "weui-dialog weui-skin_android": "weui-dialog",
                    "mask-transition": e.maskTransition,
                    "dialog-transition": "android" === e.theme ? "vux-fade": e.dialogTransition,
                    "hide-on-blur": e.hideOnBlur,
                    "mask-z-index": e.maskZIndex
                },
                on: {
                    "on-hide": function(t) {
                        return e.$emit("on-hide")
                    }
                },
                model: {
                    value: e.showValue,
                    callback: function(t) {
                        e.showValue = t
                    },
                    expression: "showValue"
                }
            },
            [e.title ? o("div", {
                staticClass: "weui-dialog__hd"
            },
            [o("strong", {
                staticClass: "weui-dialog__title"
            },
            [e._v(e._s(e.title))])]) : e._e(), e._v(" "), e.showInput ? o("div", {
                staticClass: "vux-prompt",
                on: {
                    touchstart: function(t) {
                        return t.preventDefault(),
                        e.setInputFocus.apply(null, arguments)
                    }
                }
            },
            ["checkbox" === e.inputAttrs.type ? o("input", e._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.msg,
                    expression: "msg"
                }],
                ref: "input",
                staticClass: "vux-prompt-msgbox",
                attrs: {
                    placeholder: e.placeholder,
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.msg) ? e._i(e.msg, null) > -1 : e.msg
                },
                on: {
                    change: function(t) {
                        var o = e.msg,
                        n = t.target,
                        i = !!n.checked;
                        if (Array.isArray(o)) {
                            var s = e._i(o, null);
                            n.checked ? s < 0 && (e.msg = o.concat([null])) : s > -1 && (e.msg = o.slice(0, s).concat(o.slice(s + 1)))
                        } else e.msg = i
                    }
                }
            },
            "input", e.inputAttrs, !1)) : "radio" === e.inputAttrs.type ? o("input", e._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.msg,
                    expression: "msg"
                }],
                ref: "input",
                staticClass: "vux-prompt-msgbox",
                attrs: {
                    placeholder: e.placeholder,
                    type: "radio"
                },
                domProps: {
                    checked: e._q(e.msg, null)
                },
                on: {
                    change: function(t) {
                        e.msg = null
                    }
                }
            },
            "input", e.inputAttrs, !1)) : o("input", e._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.msg,
                    expression: "msg"
                }],
                ref: "input",
                staticClass: "vux-prompt-msgbox",
                attrs: {
                    placeholder: e.placeholder,
                    type: e.inputAttrs.type
                },
                domProps: {
                    value: e.msg
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.msg = t.target.value)
                    }
                }
            },
            "input", e.inputAttrs, !1))]) : o("div", {
                staticClass: "weui-dialog__bd"
            },
            [e._t("default",
            function() {
                return [o("div", {
                    domProps: {
                        innerHTML: e._s(e.content)
                    }
                })]
            })], 2), e._v(" "), o("div", {
                staticClass: "weui-dialog__ft"
            },
            [o("a", {
                staticClass: "weui-dialog__btn weui-dialog__btn_default",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e._onCancel
                }
            },
            [e._v(e._s(e.cancelText || "取消"))]), e._v(" "), o("a", {
                staticClass: "weui-dialog__btn weui-dialog__btn_primary",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e._onConfirm
                }
            },
            [e._v(e._s(e.confirmText || "确定"))])])])], 1)
        },
        r = [],
        c = {
            render: a,
            staticRenderFns: r
        },
        l = c,
        u = o("VU/8"),
        h = n,
        d = u(s, l, !1, h, null, null);
        t.a = d.exports
    },
    MUl7: function(e, t) {},
    NHnr: function(e, t, o) {
        "use strict";
        function n(e) {
            return e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1
        }
        function i(e) {
            return e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1
        }
        function s(e) {
            o("MUl7")
        }
        function a(e) {
            o("fIqF")
        }
        function r(e) {
            o("Og/v")
        }
        function c(e) {
            o("jUd5")
        }
        function l(e) {
            o("24qm")
        }
        function u(e) {
            o("YCc4")
        }
        function h(e) {
            o("NUFU")
        }
        function d() {
            return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
        }
        function p(e) {
            if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
            if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
            window.WVJBCallbacks = [e];
            var t = document.createElement("iframe");
            t.style.display = "none",
            t.src = "https://__bridge_loaded__",
            document.documentElement.appendChild(t),
            setTimeout(function() {
                document.documentElement.removeChild(t)
            },
            0)
        }
        function f() {
            var e = {
                win: !1,
                mac: !1,
                xll: !1,
                ipad: !1
            },
            t = window.navigator.platform;
            if (e.win = 0 == t.indexOf("Win"), e.mac = 0 == t.indexOf("Mac"), e.x11 = "X11" == t || 0 == t.indexOf("Linux"), e.ipad = null != window.navigator.userAgent.match(/iPad/i), e.win || e.mac || e.xll || e.ipad);
            else {
                if ("micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) return ! 0
            }
            return ! 1
        }
        function m() {
            return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
        }
        function x(e) {
            if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
            if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
            window.WVJBCallbacks = [e];
            var t = document.createElement("iframe");
            t.style.display = "none",
            t.src = "https://__bridge_loaded__",
            document.documentElement.appendChild(t),
            setTimeout(function() {
                document.documentElement.removeChild(t)
            },
            0)
        }
        function g() {
            var e = {
                win: !1,
                mac: !1,
                xll: !1,
                ipad: !1
            },
            t = window.navigator.platform;
            if (e.win = 0 == t.indexOf("Win"), e.mac = 0 == t.indexOf("Mac"), e.x11 = "X11" == t || 0 == t.indexOf("Linux"), e.ipad = null != window.navigator.userAgent.match(/iPad/i), e.win || e.mac || e.xll || e.ipad);
            else {
                if ("micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) return ! 0
            }
            return ! 1
        }
        function v(e) {
            o("havD"),
            o("QwpI")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var w = {};
        o.d(w, "formatSecond",
        function() {
            return Ft
        }),
        o.d(w, "cdn",
        function() {
            return Qt
        }),
        o.d(w, "choiceLabel",
        function() {
            return Wt
        });
        var b, y, B = o("fZjL"),
        C = o.n(B),
        P = o("7+uW"),
        S = o("Xxa5"),
        T = o.n(S),
        I = o("exGp"),
        E = o.n(I),
        D = o("MDSg"),
        M = o.n(D),
        A = o("N4bT"),
        k = o.n(A),
        q = (String, Number, String, String, String, String, {
            name: "qrcode",
            props: {
                value: String,
                size: {
                    type: Number,
                default:
                    160
                },
                level: {
                    type: String,
                default:
                    "L"
                },
                bgColor: {
                    type: String,
                default:
                    "#FFFFFF"
                },
                fgColor: {
                    type: String,
                default:
                    "#000000"
                },
                type: {
                    type: String,
                default:
                    "img"
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick(function() {
                    e.render()
                })
            },
            data: function() {
                return {
                    imgData: ""
                }
            },
            watch: {
                value: function() {
                    this.render()
                },
                size: function() {
                    this.render()
                },
                level: function() {
                    this.render()
                },
                bgColor: function() {
                    this.render()
                },
                fgColor: function() {
                    this.render()
                }
            },
            methods: {
                render: function() {
                    var e = this;
                    if (void 0 !== this.value) {
                        var t = new M.a( - 1, k.a[this.level]);
                        t.addData(this.value),
                        t.make();
                        var o = this.$refs.canvas,
                        n = o.getContext("2d"),
                        s = t.modules,
                        a = this.size / s.length,
                        r = this.size / s.length,
                        c = (window.devicePixelRatio || 1) / i(n);
                        o.height = o.width = this.size * c,
                        n.scale(c, c),
                        s.forEach(function(t, o) {
                            t.forEach(function(t, i) {
                                n.fillStyle = t ? e.fgColor: e.bgColor;
                                var s = Math.ceil((i + 1) * a) - Math.floor(i * a),
                                c = Math.ceil((o + 1) * r) - Math.floor(o * r);
                                n.fillRect(Math.round(i * a), Math.round(o * r), s, c)
                            })
                        }),
                        "img" === this.type && (this.imgData = o.toDataURL("image/png"))
                    }
                }
            }
        }),
        O = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", [o("canvas", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "canvas" === e.type,
                    expression: "type === 'canvas'"
                }],
                ref: "canvas",
                style: {
                    height: e.size + "px",
                    width: e.size + "px"
                },
                attrs: {
                    height: e.size,
                    width: e.size
                }
            }), e._v(" "), "img" === e.type ? o("img", {
                style: {
                    height: e.size + "px",
                    width: e.size + "px"
                },
                attrs: {
                    src: e.imgData
                }
            }) : e._e()])
        },
        L = [],
        R = {
            render: O,
            staticRenderFns: L
        },
        U = R,
        V = o("VU/8"),
        F = V(q, U, !1, null, null, null),
        Q = F.exports,
        W = {
            data: function() {
                return {
                    href: ""
                }
            },
            components: {
                Qrcode: Q
            },
            mounted: function() {
                this.$nextTick(function() {
                    document.body.style.backgroundImage = "url('http://libs.fengchuanba.com/assets/img/default/bg1.jpg')",
                    this.href = self.location.href
                })
            },
            methods: {}
        },
        N = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                attrs: {
                    id: "browserError"
                }
            },
            [o("div", {
                attrs: {
                    id: "parentDiv"
                }
            },
            [o("div", {
                staticStyle: {
                    margin: "0 auto"
                }
            },
            [o("qrcode", {
                attrs: {
                    value: e.href,
                    type: "img"
                }
            })], 1), e._v(" "), o("div", {
                attrs: {
                    id: "text-item"
                }
            },
            [e._v("\n\t\t\t请在微信内打开\n\t\t")])])])
        },
        K = [],
        j = {
            render: N,
            staticRenderFns: K
        },
        z = j,
        H = o("VU/8"),
        G = s,
        X = H(W, z, !1, G, "data-v-ff1c1fde", null),
        Y = X.exports,
        J = o("Xe5u"),
        Z = {},
        ee = function() {
            var e = this,
            t = e.$createElement;
            return (e._self._c || t)("section", {
                attrs: {
                    id: "demo-msg"
                }
            },
            [e._v("\n\t这是模拟场景，数据和成绩将在正式发布后清空\n")])
        },
        te = [],
        oe = {
            render: ee,
            staticRenderFns: te
        },
        ne = oe,
        ie = o("VU/8"),
        se = a,
        ae = ie(Z, ne, !1, se, null, null),
        re = ae.exports,
        ce = {
            filters: {
                formatTime: function(e) {
                    if (e > 60) {
                        return parseInt(e / 60) + "分" + e % 60 + "秒"
                    }
                    return e + "秒"
                }
            },
            computed: {
                totalTime: function() {
                    return this.$store.state.totalTime
                },
                life: function() {
                    return this.$store.state.life
                },
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                exploreDetail: function() {
                    return this.$store.state.exploreDetail
                },
                questionTime: function() {
                    return this.$store.state.questionTime
                }
            }
        },
        le = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                attrs: {
                    id: "topbar"
                }
            },
            [e.life <= 10 ? o("span", e._l(e.life,
            function(t) {
                return o("span", {
                    staticClass: "life",
                    class: {
                        life: t <= e.life,
                        nolife: t > e.life
                    }
                },
                [o("i", {
                    class: {
                        "icon-heart": t <= e.life,
                        "icon-heart-broken": t > e.life
                    }
                })])
            }), 0) : e._e(), e._v(" "), e._t("time"), e._v(" "), o("span", {
                staticClass: "index"
            },
            [e._v(e._s(e.exploreDetail.checkPointSeq) + "/" + e._s(e.secretBox.checkPointCount))]), e._v(" "), e.totalTime > 0 && e.totalTime < 1e4 ? o("span", {
                staticClass: "totalTime"
            },
            [o("i", {
                staticClass: "icon-hour-glass"
            },
            [e._v(e._s(e._f("formatTime")(e.totalTime)))])]) : e._e(), e._v(" "), e.questionTime > 0 && e.questionTime < 1e4 ? o("span", {
                staticClass: "questionTime"
            },
            [o("i", {
                staticClass: "icon-alarm"
            },
            [e._v(e._s(e.questionTime))])]) : e._e()], 2)
        },
        ue = [],
        he = {
            render: le,
            staticRenderFns: ue
        },
        de = he,
        pe = o("VU/8"),
        fe = r,
        me = pe(ce, de, !1, fe, null, null),
        _e = me.exports,
        xe = o("LTJL"),
        ge = o("IbBP"),
        ve = o("MO5W"),
        we = o("wujj"),
        be = o("NYxO"),
        ye = o("UtBj"),
        Be = o("pyzf"),
        Ce = {},
        Pe = function() {
            var e = this,
            t = e.$createElement;
            e._self._c;
            return e._m(0)
        },
        Se = [function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("section", {
                attrs: {
                    id: "footer"
                }
            },
            [o("div", {
                staticClass: "footer-text"
            },
            [o("a", {
                attrs: {
                    href: "https://www.fengchuanba.com",
                    target: "_blank"
                }
            },
            [o("span", [e._v("风传吧平台 技术支持")]), e._v(" 专业的互动传播自助平台\n\t\t")])])])
        }],
        Te = {
            render: Pe,
            staticRenderFns: Se
        },
        Ie = Te,
        Ee = o("VU/8"),
        De = c,
        Me = Ee(Ce, Ie, !1, De, null, null),
        Ae = Me.exports,
        ke = (Object, ye.a, {
            props: {
                biz: {
                    type: Object
                }
            },
            filters: {
                cdn: ye.a
            }
        }),
        qe = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("section", {
                attrs: {
                    id: "biz"
                }
            },
            [o("a", {
                attrs: {
                    href: e.biz.advUrl
                }
            },
            [e.biz.advLogo ? o("img", {
                attrs: {
                    src: e._f("cdn")(e.biz.advLogo),
                    alt: ""
                }
            }) : e._e(), e._v(" "), e.biz.advName ? o("span", {
                staticClass: "name",
                class: {
                    "text-height": e.biz.advLogo
                },
                domProps: {
                    textContent: e._s(e.biz.advName)
                }
            }) : e._e(), e._v(" "), o("span", {
                class: {
                    "text-height": e.biz.advLogo
                },
                domProps: {
                    textContent: e._s(e.biz.advSlogan)
                }
            }), e._v(" "), e.biz.advPrompt ? o("div", {
                staticClass: "download"
            },
            [o("span", [e._v(e._s(e.biz.advPrompt || "点击下载"))])]) : e._e()])])
        },
        Oe = [],
        Le = {
            render: qe,
            staticRenderFns: Oe
        },
        Re = Le,
        Ue = o("VU/8"),
        Ve = l,
        $e = Ue(ke, Re, !1, Ve, null, null),
        Fe = $e.exports,
        Qe = o("H7a6"),
        We = o("v6j/"),
        Ne = {
            data: function() {
                return {}
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            }
        },
        Ke = function() {
            var e = this,
            t = e.$createElement;
            e._self._c;
            return e._m(0)
        },
        je = [function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-bg"
                }
            },
            [n("div", {
                attrs: {
                    id: "top-img"
                }
            },
            [n("img", {
                staticStyle: {
                    width: "30%"
                },
                attrs: {
                    src: o("xsGU"),
                    alt: ""
                }
            })]), e._v(" "), n("h3", [e._v("该秘盒包含违规内容，停止访问")]), e._v(" "), n("div", {
                attrs: {
                    id: "message-detail"
                }
            },
            [e._v("该秘盒已被多人投诉，为维护绿色上网环境，已停止访问。")])])
        }],
        ze = {
            render: Ke,
            staticRenderFns: je
        },
        He = ze,
        Ge = o("VU/8"),
        Xe = u,
        Ye = Ge(Ne, He, !1, Xe, null, null),
        Je = Ye.exports,
        Ze = o("6Trz"),
        et = o("JXSH"),
        tt = function(e) {
            o.e(1).then(function() {
                var t = [o("77Xk")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ot = function(e) {
            o.e(3).then(function() {
                var t = [o("tiJU")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        nt = function(e) {
            o.e(2).then(function() {
                var t = [o("5zpv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        it = (ye.a, we.Games, xe.a, ge.a, ve.a, Qe.a, We.a, Ze.a, et.a,
        function(e) {
            o.e(1).then(function() {
                var t = [o("77Xk")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        }),
        st = function(e) {
            o.e(3).then(function() {
                var t = [o("tiJU")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        at = function(e) {
            o.e(2).then(function() {
                var t = [o("5zpv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        rt = {
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                isDemo: function() {
                    return this.$store.state.isDemo
                },
                question: function() {
                    return this.$store.state.question
                },
                userId: function() {
                    return this.$store.state.userId
                },
                shareCount: function() {
                    return this.$store.state.shareCount
                },
                successShareCount: function() {
                    return this.$store.state.successShareCount
                },
                playChance: function() {
                    return this.$store.state.playChance
                },
                currentChangeView: function() {
                    return we.Games[this.$store.state.currentView]
                },
                currentView: function() {
                    return this.$store.state.currentView
                },
                alertModal: function() {
                    return this.$store.state.alertModal
                },
                toast: function() {
                    return this.$store.state.toast
                },
                explain: function() {
                    return this.$store.state.explain
                },
                showSupport: function() {
                    return this.$store.state.showSupport
                },
                showAdvert: function() {
                    return this.$store.state.showAdvert
                },
                shareModal: function() {
                    return this.$store.state.shareModal
                },
                confirmModal: function() {
                    return this.$store.state.confirmModal
                },
                exploreAfterShareModal: function() {
                    return this.$store.state.exploreAfterShareModal
                },
                wholeExplores: function() {
                    return this.$store.state.wholeExplores
                },
                stateAnswer: function() {
                    return this.$store.state.answer
                },
                exploreDetail: function() {
                    return this.$store.state.exploreDetail
                },
                showResource131917: function() {
                    return this.$store.state.showResource131917
                }
            },
            filters: {
                cdn: ye.a
            },
            data: function() {
                return {
                    text: "",
                    accuracy: 1,
                    showSlide: !1,
                    showResource: !0
                }
            },
            components: {
                Games: we.Games,
                Alert: xe.a,
                Toast: ge.a,
                Confirm: ve.a,
                Topbar: _e,
                DemoBanner: re,
                Support: Ae,
                Advert: Fe,
                Barrage: Qe.a,
                ShareHint: We.a,
                Illegal: Je,
                Hint: Ze.a,
                AnswerExplain: et.a,
                resource116300: it,
                resource131917: st,
                resource133202: at
            },
            mounted: function() {
                this.secretBox.bizConfig.forbid && 1 != !this.secretBox.bizConfig.forbid || this.showWelcome()
            },
            methods: {
                onHide: function() {
                    this.$store.commit("set_AlertModal", {
                        alertMsg: "",
                        alertTitle: "",
                        showAlert: !1
                    })
                },
                showWelcome: function() {
                    this.$store.dispatch("showWelcome")
                },
                submitWholeNext: function() {
                    if (2 == this.secretBox.config.showVerifyImg) return void this.$store.commit("set_currentView", "verify");
                    this.$store.dispatch("submitFinal")
                },
                cancleConfirm: function() {
                    var e = {
                        showConfirm: !1
                    };
                    this.$store.commit("set_confirmModal", e),
                    this.$store.commit("set_submitQDisabled", !1)
                },
                closeShare: function() {
                    this.$store.commit("set_shareModal", {
                        showShare: !1
                    })
                },
                exploreNoShare: function() {
                    this.$store.commit("set_exploreAfterShareModal", {
                        showShare: !1
                    }),
                    this.$store.dispatch("failureExplore"),
                    this.$store.dispatch("showSuccess")
                },
                closeExplain: function() {
                    this.explain.showAnswer = !1,
                    this.explain.showExplain = !1,
                    this.$store.dispatch("showNextQuestion")
                },
                backToSerialBox: function() {
                    self.location.href = "https://serial2.fengchuanba.com/index.html#949-LKcVRqeBvLZRWWB7LCevGIfmqO8q3NrA"
                },
                closeResource: function() {
                    this.$store.commit("set_showResource131917", !1),
                    this.$store.dispatch("startGame")
                }
            }
        },
        ct = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return e.secretBox.bizConfig.forbid && 1 == e.secretBox.bizConfig.forbid ? o("div", [o("Illegal")], 1) : o("div", [e.isDemo ? o("demo-banner") : e._e(), e._v(" "), e.explain.showAnswer ? o("answer-explain", {
                attrs: {
                    "explain-title": "正确答案",
                    "explain-detail": e.explain.content,
                    "explain-button": "我知道了",
                    "answer-array": e.explain.answerArray
                },
                on: {
                    closeExplain: e.closeExplain
                }
            }) : e._e(), e._v(" "), e.explain.showExplain ? o("hint", {
                attrs: {
                    title: e.explain.title,
                    content: e.explain.content,
                    "btn-text": e.explain.btnText
                },
                on: {
                    close: e.closeExplain
                }
            }) : e._e(), e._v(" "), e.shareModal.showShare ? o("share-hint", {
                attrs: {
                    content: e.shareModal.content
                },
                on: {
                    close: e.closeShare
                }
            }) : e._e(), e._v(" "), e.exploreAfterShareModal.showShare ? o("share-hint", {
                attrs: {
                    content: e.exploreAfterShareModal.content,
                    callbackBtn: e.exploreAfterShareModal.callbackBtn,
                    hasClose: !1
                },
                on: {
                    callback: e.exploreNoShare
                }
            }) : e._e(), e._v(" "), e.showSupport ? o("support") : e._e(), e._v(" "), e.showAdvert ? o("advert", {
                attrs: {
                    biz: e.secretBox.bizConfig
                }
            }) : e._e(), e._v(" "), o(e.currentChangeView, {
                tag: "component"
            }), e._v(" "), e.alertModal.showAlert ? o("hint", {
                attrs: {
                    title: e.alertModal.alertTitle,
                    content: e.alertModal.alertMsg,
                    contentList: e.alertModal.undoQuestionList,
                    "btn-text": "确定"
                },
                on: {
                    close: e.onHide
                }
            }) : e._e(), e._v(" "), o("Confirm", {
                attrs: {
                    title: e.confirmModal.title,
                    content: e.confirmModal.content,
                    "confirm-text": e.confirmModal.confirmText,
                    "cancel-text": e.confirmModal.cancelText
                },
                on: {
                    "on-confirm": e.submitWholeNext,
                    "on-cancel": e.cancleConfirm
                },
                model: {
                    value: e.confirmModal.showConfirm,
                    callback: function(t) {
                        e.$set(e.confirmModal, "showConfirm", t)
                    },
                    expression: "confirmModal.showConfirm"
                }
            }), e._v(" "), o("toast", {
                attrs: {
                    text: e.toast.toastMsg,
                    type: e.toast.type,
                    time: e.toast.time,
                    position: e.toast.position,
                    "is-show-mask": ""
                },
                model: {
                    value: e.toast.showToast,
                    callback: function(t) {
                        e.$set(e.toast, "showToast", t)
                    },
                    expression: "toast.showToast"
                }
            }), e._v(" "), "553376034314" == e.secretBox.code ? o("audio", {
                attrs: {
                    id: "wrongBgm36334",
                    preload: ""
                }
            },
            [o("source", {
                attrs: {
                    src: "http://content.fengchuanba.com/file/company/20680/18430/wrong.mp3",
                    type: "audio/mpeg"
                }
            })]) : e._e(), e._v(" "), "553376034314" == e.secretBox.code ? o("audio", {
                attrs: {
                    id: "rightBgm36334",
                    preload: ""
                }
            },
            [o("source", {
                attrs: {
                    src: "http://content.fengchuanba.com/file/company/20680/18430/right.mp3",
                    type: "audio/mpeg"
                }
            })]) : e._e(), e._v(" "), "553376034314" == e.secretBox.code ? o("audio", {
                attrs: {
                    id: "startBgm36334"
                }
            },
            [o("source", {
                attrs: {
                    src: "https://bpic.588ku.com/audio_copy/audio/18/07/29/effca9471831a5bf1d2f19f81390380d.mp3",
                    type: "audio/mpeg"
                }
            })]) : e._e(), e._v(" "), "556966114940" == e.secretBox.code || "556966164249" == e.secretBox.code ? o("div", {
                staticClass: "back_serialbox",
                on: {
                    click: e.backToSerialBox
                }
            },
            [e._v("返回首页")]) : e._e(), e._v(" "), "5671619683100" == e.secretBox.code && e.showResource ? o("resource116300", {
                on: {
                    close: function(t) {
                        e.showResource = !1
                    }
                }
            }) : e._e(), e._v(" "), 131917 == e.secretBox.style && e.showResource131917 ? o("resource131917", {
                on: {
                    close: e.closeResource
                }
            }) : e._e(), e._v(" "), "5681432322102" == e.secretBox.code && e.showResource131917 ? o("resource133202", {
                on: {
                    close: e.closeResource
                }
            }) : e._e()], 1)
        },
        lt = [],
        ut = {
            render: ct,
            staticRenderFns: lt
        },
        ht = ut,
        dt = o("VU/8"),
        pt = h,
        ft = dt(rt, ht, !1, pt, null, null),
        mt = ft.exports,
        _t = (ye.a, Ze.a, {
            data: function() {
                return {
                    ingame: !0,
                    sbc: location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0],
                    secretKey: location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[1],
                    showError: !1,
                    showHint: !1,
                    hintTitle: "消息",
                    hintMsg: "",
                    hintBtn: "好的，现在就去下载",
                    hintUrl: ""
                }
            },
            filters: {
                cdn: ye.a
            },
            props: {},
            computed: {
                showGameControl: function() {
                    return this.$store.state.showGameControl
                },
                dev: function() {
                    return this.$store.state.dev
                },
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                secretBoxBaseConfig: function() {
                    return this.$store.state.secretBoxBaseConfig
                }
            },
            mounted: function() {
                var e = this;
                this.$store.commit("set_secretBoxInfo", {
                    secretBoxCode: this.sbc,
                    secretKey: this.secretKey || ""
                }),
                m() ? this.$store.commit("set_dev", "weixin") : this.$store.commit("set_dev", "other");
                var t = [, "4468062711", "343120167", "343122106", "4411035773", "4444955915", "4444954771", "4445935310", "4445985519", "4465055209", "4457415899", "33355089", "4478296565", "551121615941", "45118129772", "45514259906", "552231727102", "552242622079", "552230385251", "552263698225", "552263698524", "552263698527", "552263698528", "552263698529", "551258638875", "551258638971", "551258638975", "551258638977", "551258638979", "551258648070", "553219500855", "553219408000", "45818608581", "1423180", "553330086789", "553337006180", "553342398775", "551343491383", "553353098997", "551344411587", "45931671347", "553376142587", "553387163147", "553388886713", "553411448505", "551448461581", "554448713225", "554560120434", "554573848358", "554576831147", "554573801246", "553539026581", "553539046484", "553539086988", "553539086989", "551682207239", "551682267938", "551888227530", "5611822975323", "5611832476373", "553665394840", "555775964465", "555776964066", "554448723725", "554745773824", "554747713428", "554747713427", "551749461588", "551749471587", "551749471681", "551749471683", "551749471686", "551749471687", "551749471688", "554779801649", "554870871643", "554874831343", "554878811047", "554974821547", "5641728616440", "5641738013434", "556836601146", "556835691345", "556836641345", "556837671246", "555897708595", "556849930981", "556849839571", "551879844438", "556859086004", "556952076005", "5661510366057", "5661510466094", "5661520366016", "553899589752", "553994589750", "555993798898", "556964805480", "556964805482", "556964805483", "556964805484", "556964805486", "553954924636", "555993798691", "556986074956", "554908868148", "556998491026", "162100644", "1423209", "5611708247303", "5661306415422", "5661306416453", "5661306419492", "5661306419493", "5661306419494", "5651802411159", "5661903514213", "5611908573558", "5671302790639", "5671322995682", "5631529745332", "5671307708850", "5661800841573", "5671206565663", "5631114083088", "5671317101845", "5671613411651", "5671712609345", "5641427031231", "5661429097071", "5611927121499", "5661027274839", "5671226268697", "5671226760626", "5631137063891", "5671236069681", "5611832274312", "5661934213294", "5641330383510", "5661830442541", "5611136460355", "5671931424453", "5631137565862"],
                o = this;
                if (!m() || "556837671246" != this.sbc && "556836601146" != this.sbc && "556835691345" != this.sbc && "556836641345" != this.sbc) {
                    if ("555794071782" == this.sbc && wx.miniProgram.getEnv(function(e) {
                        e.miniprogram && o.$store.commit("set_followMatch", 4)
                    }), "251733578" == this.sbc && wx.miniProgram.getEnv(function(e) {
                        e.miniprogram && o.$store.commit("set_followMatch", 4)
                    }), (/\d{2}5\d{1}8\d{1}2\d{1}5\d{1}6.*/.test(this.sbc) || /\d{2}4\d{1}9\d{1}2\d{1}1\d{1}7.*/.test(this.sbc)) && !g()) return void(this.showError = !0);
                    if ("5611908573558" == this.sbc) {
                        var n = window.navigator.userAgent.toLowerCase();
                        if ( - 1 == n.indexOf("mszx")) return this.hintMsg = "<div style='text-align:center;'><div>请在【眉山在线】App中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "https://a.app.qq.com/o/simple.jsp?pkgname=com.founder.meishan",
                        !0
                    }
                    if ("5641738013434" == this.sbc) {
                        var n = window.navigator.userAgent.toLowerCase();
                        if ( - 1 == n.indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div><img src='http://content.fengchuanba.com/file/company/47814/20200806/wxbz.png'></div><div>请在【无线巴中】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://appdown.bzgd.com/",
                        !0
                    }
                    if ("5661429097071" == this.sbc) {
                        var n = window.navigator.userAgent.toLowerCase();
                        if ( - 1 == n.indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div>请在【云上通江】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://jrtjxfile.bzitv.cn/sctv/logo/download/download.html",
                        !0
                    }
                    if ("5661520366016" == this.sbc) {
                        var n = window.navigator.userAgent.toLowerCase();
                        if ( - 1 == n.indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div>请在【大美巴州】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://jrbzxfile.bzitv.cn/sctv/logo/download/download.html",
                        !0
                    }
                    if ("5631529745332" == this.sbc) {
                        var n = window.navigator.userAgent;
                        if ( - 1 == n.indexOf("Aheading") && -1 == n.indexOf("ImageSwitcherSetPageShareopenpageshareCanReport")) return this.hintMsg = "<div style='text-align:center;'><div><img src='http://content.fengchuanba.com/file/company/35943/20210617/zsbz.png'></div><div>请在【掌上巴中】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://www.aheading.com/qiancheng/down/scbz/download/scbz.html",
                        !0
                    }
                    if ("553899589752" == this.sbc || "553994589750" == this.sbc) {
                        var n = window.navigator.userAgent.toLowerCase();
                        if ( - 1 == n.indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div>请在【家在恩阳】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://www.eyxw.com.cn/download/eyxw.apk",
                        !0
                    }
                    if ("dev" == this.dev) localStorage.sbox_wxopenid = "secretbox-debug-uuid-20160502",
                    this.$store.dispatch("getSecretBoxFromWeChat");
                    else if ("5611100594035" == this.sbc) {
                        var i = function() {
                            AppBridgeGlobal.getTMUserInfo(function(e) {
                                if ("" == e) alert("请注册并登录APP后使用！");
                                else {
                                    var t = JSON.parse(e);
                                    if (t && t.member_id && t.member_id > 0) {
                                        var n = "yunshangkangbashen_" + t.member_id;
                                        localStorage.sbox_wxopenid = n,
                                        o.$store.dispatch("getSecretBoxFromWeChat")
                                    } else alert("请注册并登录APP后使用！")
                                }
                            })
                        };
                        setTimeout(i, 1500)
                    } else if ("5661309629800-111" == this.sbc) {
                        if (!localStorage.UserGUID || localStorage.UserGUID.length < 15) return this.hintMsg = "<div style='text-align:center;'><div>请在【掌上怀化】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://www.zshh0745.cn/",
                        !0;
                        localStorage.sbox_wxopenid = "zshh-" + localStorage.UserGUID,
                        this.$store.commit("set_dev", "zshh-appuserid"),
                        this.$store.dispatch("getSecretBoxFromWeChat")
                    } else if ("554914819630" == this.sbc || "554914829530" == this.sbc || "554912829531" == this.sbc) wx.miniProgram.getEnv(function(e) {
                        var t = this;
                        e.miniprogram && E()(T.a.mark(function e() {
                            return T.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.$store.dispatch("getSecretBoxBaseConfig");
                                case 2:
                                    return e.next = 4,
                                    Object(J.a)(o.secretBoxBaseConfig);
                                case 4:
                                    o.$store.dispatch("getSecretBoxFromWeChat");
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                            },
                            e, t)
                        }))()
                    });
                    else if ("5611832274312" == this.sbc || "5611822975323" == this.sbc) {
                        if (m()) return;
                        if (localStorage.sbox_wxopenid && localStorage.sbox_wxopenid.indexOf("dqyt-appuserid") < 0 && (localStorage.sbox_wxopenid = null), !localStorage.sbox_wxopenid || localStorage.sbox_wxopenid.length < 26) {
                            var s = navigator.userAgent.toLowerCase();
                            if (s.indexOf("iphone") > -1) x(function(e) {
                                e.callHandler("morefunObjcGetUserInfo", {
                                    needLogin: !0
                                },
                                function(e) {
                                    var t = JSON.parse(e);
                                    localStorage.sbox_wxopenid = "secretbox-dqyt-appuserid-" + t.userInfo.userid,
                                    o.$store.commit("set_dev", "dqyt-appuserid"),
                                    o.$store.dispatch("getSecretBoxFromWeChat")
                                })
                            });
                            else {
                                var a = JSON.parse(window.android.morefunObjcGetUserInfo(!0));
                                localStorage.sbox_wxopenid = "secretbox-dqyt-appuserid-" + a.userInfo.userid,
                                this.$store.commit("set_dev", "dqyt-appuserid"),
                                this.$store.dispatch("getSecretBoxFromWeChat")
                            }
                        } else this.$store.commit("set_dev", "dqyt-appuserid"),
                        this.$store.dispatch("getSecretBoxFromWeChat")
                    } else if (m()) E()(T.a.mark(function t() {
                        return T.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.$store.dispatch("getSecretBoxBaseConfig");
                            case 2:
                                return t.next = 4,
                                Object(J.a)(e.secretBoxBaseConfig);
                            case 4:
                                e.$store.dispatch("getSecretBoxFromWeChat");
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, e)
                    }))();
                    else if ($.inArray(this.sbc, t) >= 0 || /\d{2}7\d{1}2\d{1}0\d{1}0\d{1}0.*/.test(this.sbc) || /\d{2}6\d{1}9\d{1}3\d{1}1\d{1}2.*/.test(this.sbc)) {
                        if (!localStorage.sbox_wxopenid) {
                            var r = (new Date).getTime();
                            localStorage.sbox_wxopenid = "secretbox-uuid-" + this.sbc + "-" + r
                        }
                        this.$store.commit("set_dev", "appuserid"),
                        this.$store.dispatch("getSecretBoxFromWeChat")
                    } else this.$store.commit("set_dev", "other"),
                    this.$store.dispatch("getSecretBoxFromPC")
                }
            },
            components: {
                GameControl: mt,
                BrowserError: Y,
                Hint: Ze.a
            },
            methods: {
                closeHint: function() {
                    this.hintUrl && (location.href = this.hintUrl)
                }
            }
        }),
        xt = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                attrs: {
                    id: "app"
                }
            },
            [o("audio", {
                attrs: {
                    id: "bgm",
                    src: e._f("cdn")(e.secretBox.bgVoice),
                    autoplay: "autoplay",
                    loop: "loop"
                }
            }), e._v(" "), e.showGameControl && !e.showError ? o("game-control") : e._e(), e._v(" "), e.showError || "error" == e.dev ? o("browser-error") : e._e(), e._v(" "), e.showHint ? o("hint", {
                attrs: {
                    title: e.hintTitle,
                    content: e.hintMsg,
                    "btn-text": e.hintBtn
                },
                on: {
                    close: e.closeHint
                }
            }) : e._e()], 1)
        },
        gt = [],
        vt = {
            render: xt,
            staticRenderFns: gt
        },
        wt = vt,
        bt = o("VU/8"),
        yt = v,
        Bt = bt(_t, wt, !1, yt, null, null),
        Ct = Bt.exports,
        Pt = (o("YWgR"), o("bOdI")),
        St = o.n(Pt),
        Tt = (b = {},
        St()(b, "TEST_CHANGEMSG",
        function(e, t) {
            e.msg = t
        }), St()(b, "set_secretBoxInfo",
        function(e, t) {
            e.secretBoxCode = t.secretBoxCode,
            e.secretKey = t.secretKey
        }), St()(b, "set_exploreData",
        function(e, t) {
            e.winnerList = t.winnerList,
            e.secretBox = t.secretBox,
            e.serialBox = t.serialBox,
            e.explorePoints = t.explorePoints,
            e.registerInfo = t.registerInfo,
            e.shareCount = t.shareCount,
            e.ts = t.ts,
            e.tsy = t.ts - (new Date).getTime(),
            e.userId = t.userId,
            e.playChance = t.playChance,
            e.continueExplore = t.continueExplore,
            e.lotteryCount = t.lotteryCount,
            e.showGameControl = !0,
            e.isPrePass = t.isPrePass,
            e.isMember = t.isMember,
            e.scenePages = t.scenePages,
            e.playedChance = t.playedChance,
            null != t.videoChance && (e.videoChance = t.videoChance),
            null != t.totalPlayChance && (e.totalPlayChance = t.totalPlayChance),
            null != t.leftPrizeNum && (e.leftPrizeNum = t.leftPrizeNum),
            null != t.totalScore && (e.totalScore = t.totalScore),
            null != t.dayCount && (e.dayCount = t.dayCount),
            null != t.peopleRealCount && (e.peopleRealCount = t.peopleRealCount),
            null != t.barrageCount && (e.barrageCount = t.barrageCount)
        }), St()(b, "set_exploreDataPC",
        function(e, t) {
            e.winnerList = t.winnerList,
            e.secretBox = t.secretBox,
            e.ts = t.ts,
            e.tsy = t.ts - (new Date).getTime(),
            e.showGameControl = !0,
            e.scenePages = t.scenePages,
            e.registerInfo = null
        }), St()(b, "set_exploreRegisterPC",
        function(e, t) {
            e.shareCount = t.shareCount,
            e.userId = t.visitorId,
            e.playChance = t.playChance,
            e.continueExplore = t.continueExplore
        }), St()(b, "set_secretBoxBaseConfig",
        function(e, t) {
            e.secretBoxBaseConfig = t
        }), St()(b, "start_cd",
        function(e) {
            e.cd = cd + 1
        }), St()(b, "set_currentView",
        function(e, t) {
            e.currentView = t
        }), St()(b, "set_AlertModal",
        function(e, t) {
            e.alertModal = t
        }), St()(b, "set_showAlert",
        function(e, t) {
            e.showAlert = t
        }), St()(b, "set_playChance",
        function(e, t) {
            e.playChance = t
        }), St()(b, "set_shareCount",
        function(e, t) {
            e.shareCount = t
        }), St()(b, "set_successShareCount",
        function(e, t) {
            e.successShareCount = t
        }), St()(b, "set_showSupport",
        function(e, t) {
            e.showSupport = t
        }), St()(b, "set_showAdvert",
        function(e, t) {
            e.showAdvert = t
        }), St()(b, "set_isDemo",
        function(e, t) {
            e.isDemo = t
        }), St()(b, "set_exploreDetail",
        function(e, t) {
            e.exploreDetail = t
        }), St()(b, "set_qConfig",
        function(e, t) {
            e.qConfig = t
        }), St()(b, "set_life",
        function(e, t) {
            e.life = t
        }), St()(b, "set_question",
        function(e, t) {
            e.question = t
        }), St()(b, "set_registerInfo",
        function(e, t) {
            e.registerInfo = t
        }), St()(b, "set_errorTime",
        function(e, t) {
            e.errorTime = t
        }), St()(b, "set_answer",
        function(e, t) {
            e.answer = t
        }), St()(b, "set_correct",
        function(e, t) {
            e.correct = t
        }), St()(b, "set_answerValue",
        function(e, t) {
            e.answerValue = t
        }), St()(b, "set_successData",
        function(e, t) {
            e.successData = t
        }), St()(b, "set_nextQuestionData",
        function(e, t) {
            e.nextQuestionData = t
        }), St()(b, "set_toast",
        function(e, t) {
            e.toast = t
        }), St()(b, "set_explain",
        function(e, t) {
            e.explain = t
        }), St()(b, "set_questionTimeInterval",
        function(e, t) {
            e.questionTimeInterval = t
        }), St()(b, "clear_questionTimeInterval",
        function(e) {
            clearInterval(e.questionTimeInterval),
            e.questionTimeInterval = 0
        }), St()(b, "set_questionTime",
        function(e, t) {
            e.questionTime = t
        }), St()(b, "set_totalTimeInterval",
        function(e, t) {
            e.totalTimeInterval = t
        }), St()(b, "clear_totalTimeInterval",
        function(e) {
            clearInterval(e.totalTimeInterval),
            e.totalTimeInterval = 0
        }), St()(b, "set_totalTime",
        function(e, t) {
            e.totalTime = t
        }), St()(b, "set_webTimeInterval",
        function(e, t) {
            e.webTimeInterval = t
        }), St()(b, "set_getNextQuestionFlag",
        function(e, t) {
            e.getNextQuestionFlag = t
        }), St()(b, "set_directNextQuestionFlag",
        function(e, t) {
            e.directNextQuestionFlag = t
        }), St()(b, "set_lotteryChance",
        function(e, t) {
            e.secretBox.config.lotteryChance = t
        }), St()(b, "set_lotteryCount",
        function(e, t) {
            e.lotteryCount = t
        }), St()(b, "set_startTotalTime",
        function(e, t) {
            e.startTotalTime = t
        }), St()(b, "set_followMatch",
        function(e, t) {
            e.followMatch = t
        }), St()(b, "set_verifyHack",
        function(e, t) {
            e.verifyHack = t
        }), St()(b, "set_verifyCode",
        function(e, t) {
            e.verifyCode = t
        }), St()(b, "set_verifyFlag",
        function(e, t) {
            e.verifyFlag = t
        }), St()(b, "set_verifyErrorMessage",
        function(e, t) {
            e.verifyErrorMessage = t
        }), St()(b, "set_correctnum",
        function(e, t) {
            e.correctnum = t
        }), St()(b, "set_exploretime",
        function(e, t) {
            e.exploretime = t
        }), St()(b, "set_selfStopBgm",
        function(e, t) {
            e.selfStopBgm = t
        }), St()(b, "set_shareModal",
        function(e, t) {
            e.shareModal = t
        }), St()(b, "set_exploreAfterShareModal",
        function(e, t) {
            e.exploreAfterShareModal = t
        }), St()(b, "set_startQuestionTime",
        function(e, t) {
            e.startQuestionTime = t
        }), St()(b, "set_scoreInfoTemplate",
        function(e, t) {
            e.scoreInfoTemplate = t
        }), St()(b, "set_isStart",
        function(e, t) {
            e.isStart = t
        }), St()(b, "set_eal",
        function(e, t) {
            e.eal = t
        }), St()(b, "set_choosed",
        function(e, t) {
            e.choosed = t
        }), St()(b, "set_rightNum",
        function(e, t) {
            e.rightNum = t
        }), St()(b, "set_prize",
        function(e, t) {
            e.prize = t
        }), St()(b, "set_sendBarrageFlag",
        function(e, t) {
            e.sendBarrageFlag = t
        }), St()(b, "set_miniprogramflag",
        function(e, t) {
            e.miniprogramflag = t
        }), St()(b, "set_scenePages",
        function(e, t) {
            e.scenePages = t
        }), St()(b, "set_checkpointseq",
        function(e, t) {
            e.checkpointseq = t
        }), St()(b, "set_typeIndex",
        function(e, t) {
            e.typeIndex = t
        }), St()(b, "set_wholeQuestions",
        function(e, t) {
            e.wholeQuestions = t
        }), St()(b, "set_wholeExplores",
        function(e, t) {
            e.wholeExplores = t
        }), St()(b, "set_submitType",
        function(e, t) {
            e.submitType = t
        }), St()(b, "set_submitQDisabled",
        function(e, t) {
            e.submitQDisabled = t
        }), St()(b, "set_dev",
        function(e, t) {
            e.dev = t
        }), St()(b, "set_confirmModal",
        function(e, t) {
            e.confirmModal.showConfirm = t.showConfirm,
            t.title && (e.confirmModal.title = t.title),
            t.content && (e.confirmModal.content = t.content),
            t.confirmText && (e.confirmModal.confirmText = t.confirmText),
            t.cancelText && (e.confirmModal.cancelText = t.cancelText)
        }), St()(b, "set_showBlack",
        function(e, t) {
            e.showBlack[t] = 1
        }), St()(b, "set_reason",
        function(e, t) {
            e.reason = t
        }), St()(b, "set_showExplain",
        function(e, t) {
            e.showExplain = t
        }), St()(b, "set_showGate",
        function(e, t) {
            e.showGate = t
        }), St()(b, "set_barrageCount",
        function(e, t) {
            e.barrageCount = t
        }), St()(b, "set_rightAnswerFor124112",
        function(e, t) {
            e.rightAnswerFor124112 = t
        }), St()(b, "set_startShowNextQuestion",
        function(e, t) {
            e.startShowNextQuestion = t
        }), St()(b, "set_exploreDetailCount",
        function(e, t) {
            e.exploreDetailCount = t
        }), St()(b, "set_showResource131917",
        function(e, t) {
            e.showResource131917 = t
        }), St()(b, "set_explorePoints",
        function(e, t) {
            e.explorePoints = t
        }), b),
        It = o("Hqqj"),
        Et = {
            all: []
        },
        Dt = {
            allProducts: function(e) {
                return e.all
            }
        },
        Mt = {
            getAllProducts: function(e) {
                var t = e.commit;
                shop.getProducts(function(e) {
                    t(Tt.RECEIVE_PRODUCTS, {
                        products: e
                    })
                })
            }
        },
        At = (y = {},
        St()(y, Tt.RECEIVE_PRODUCTS,
        function(e, t) {
            var o = t.products;
            e.all = o
        }), St()(y, Tt.ADD_TO_CART,
        function(e, t) {
            var o = t.id;
            e.all.find(function(e) {
                return e.id === o
            }).inventory--
        }), y),
        kt = {
            state: Et,
            getters: Dt,
            actions: Mt,
            mutations: At
        },
        qt = o("BS5S"),
        Ot = o.n(qt),
        Lt = o("kmDT");
        P.
    default.use(be.a);
        var Rt = {
            dev: "",
            eal: "",
            testMsg: "test",
            secretBoxCode: "",
            secretKey: "",
            ts: 0,
            tsy: 0,
            isDemo: !1,
            verifyHack: !1,
            verifyCode: "",
            verifyFlag: !1,
            verifyErrorMessage: "",
            exploretime: 0,
            correctnum: 0,
            followUserInfo: {},
            followUserArea: "",
            followMatch: 1,
            showGameControl: !1,
            selfStopBgm: !1,
            scoreInfoTemplate: "scoreInfo",
            questionTimeInterval: 0,
            totalTimeInterval: 0,
            webTimeInterval: 0,
            questionTime: 1e4,
            totalTime: 1e4,
            startTotalTime: Date.now(),
            startQuestionTime: Date.now(),
            toast: {
                toastMsg: "",
                showToast: !1,
                type: "warn",
                time: 2500,
                position: "default"
            },
            explain: {
                showAnswer: !1,
                showExplain: !1,
                title: "答案提示",
                content: "",
                answerArray: [],
                btnText: "知道了"
            },
            alertModal: {
                alertMsg: "",
                alertTitle: "",
                showAlert: !1
            },
            shareModal: {
                showShare: !1
            },
            exploreAfterShareModal: {
                showShare: !1
            },
            isStart: !1,
            isPrePass: null,
            isMember: null,
            playedChance: 0,
            videoChance: 0,
            directNextQuestionFlag: !0,
            getNextQuestionFlag: !1,
            exploreDetail: {},
            question: {},
            nextQuestion: {},
            nextQuestionData: {},
            answer: "",
            correct: !1,
            answerValue: "",
            errorTime: 0,
            choosed: !1,
            successData: {},
            showAdvert: !1,
            showSupport: !1,
            winnerList: {},
            secretBox: {},
            registerInfo: {},
            shareCount: {},
            successShareCount: 0,
            lotteryCount: 0,
            userId: 0,
            playChance: 0,
            continueExplore: null,
            currentView: "loading2",
            life: 9999,
            prize: {},
            qConfig: {},
            checkpointseq: 0,
            sendBarrageFlag: !1,
            miniprogramflag: !1,
            leftPrizeNum: null,
            typeIndex: 0,
            wholeQuestions: new Array(101),
            wholeExplores: new Array(101),
            submitType: 0,
            submitQDisabled: !1,
            confirmModal: {
                showConfirm: !1,
                title: "提示",
                content: "",
                confirmText: "确定",
                cancelText: "取消"
            },
            showBlack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            secretBoxBaseConfig: {},
            peopleRealCount: -1,
            serialBox: {},
            reason: "",
            showExplain: "",
            explorePoints: 0,
            totalPlayChance: null,
            showGate: !1,
            barrageCount: 0,
            rightAnswerFor124112: {
                show: !1,
                answer: "",
                score: 0
            },
            startShowNextQuestion: !1,
            exploreDetailCount: 0,
            showResource131917: !1
        },
        Ut = new be.a.Store({
            state: Rt,
            actions: It.a,
            mutations: Tt,
            modules: {
                i18n: Lt.a,
                welcome: kt,
                choice: Ot.a
            }
        }),
        Vt = o("oPgp"),
        $t = o.n(Vt),
        Ft = function(e) {
            var t = 0,
            o = 0;
            e > 60 ? (t = parseInt(e / 60), o = e % 60) : o = e;
            var n = "";
            return t > 0 && (n += t + ":"),
            o < 10 && (n += "0"),
            n += o
        },
        Qt = function(e) {
            return e ? e.indexOf("http") >= 0 ? e: Be.a + e: ""
        },
        Wt = function(e) {
            return String.fromCharCode(65 + parseInt(e))
        },
        Nt = o("qNcu"),
        Kt = o.n(Nt),
        jt = o("zL8q");
        o("tvR6");
        C()(w).forEach(function(e) {
            P.
        default.filter(e, w[e])
        }),
        P.
    default.use(Kt.a),
        P.
    default.use($t.a),
        o("v5o6").attach(document.body),
        P.
    default.use(jt.Cascader),
        P.
    default.use(jt.Input),
        P.
    default.use(jt.Select),
        P.
    default.use(jt.Option),
        P.
    default.use(jt.Autocomplete),
        P.
    default.use(jt.Button),
        P.
    default.use(jt.Card),
        P.
    default.use(jt.Upload),
        P.
    default.use(jt.DatePicker),
        P.
    default.use(jt.Loading.directive),
        P.
    default.prototype.$loading = jt.Loading.service,
        o("CGz8"),
        P.
    default.prototype.getCurrentTimeHhMm = function() {
            var e = new Date,
            t = e.getHours(),
            o = e.getMinutes(),
            n = "";
            return t < 10 && (n += "0"),
            n += t + ":",
            o < 10 && (n += "0"),
            n += o
        },
        P.
    default.prototype.getCurrentDateTime = function() {
            var e = new Date,
            t = e.getFullYear(),
            o = e.getMonth() + 1,
            n = e.getDate(),
            i = e.getHours(),
            s = e.getMinutes(),
            a = e.getSeconds(),
            r = t + "-";
            return o < 10 && (r += "0"),
            r += o + "-",
            n < 10 && (r += "0"),
            r += n + " ",
            i < 10 && (r += "0"),
            r += i + ":",
            s < 10 && (r += "0"),
            r += s + ":",
            a < 10 && (r += "0"),
            r += a
        },
        P.
    default.config.devtools = !0,
        new P.
    default({
            el:
            "#app",
            store: Ut,
            template: "<App/>",
            components: {
                App: Ct
            },
            data: {
                currentRoute: ""
            },
            computed: {
                tsy: function() {
                    return this.$store.state.tsy
                }
            },
            mounted: function() {
                function e(e) {
                    for (var t, o = "",
                    n = o.length,
                    i = n + 8,
                    s = (i - i % 64) / 64, a = 16 * (s + 1), r = Array(a - 1), c = 0, l = 0; l < n;) t = (l - l % 4) / 4,
                    c = l % 4 * 8,
                    r[t] = r[t] | o.charCodeAt(l) << c,
                    l++;
                    t = (l - l % 4) / 4,
                    c = l % 4 * 8,
                    r[t] = r[t] | 128 << c,
                    r[a - 2] = n << 3,
                    r[a - 1] = n >>> 29;
                    var u = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0];
                    location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].indexOf("-"),
                    u = "2022Feb" + u,
                    e.unshift(u);
                    var h, d, p, f, m, _, x, g = "";
                    for (_ = g.length, m = 0, x = ""; m < _;) {
                        do {
                            h = base64DecodeChars[255 & g.charCodeAt(m++)]
                        } while ( m < _ && - 1 == h );
                        if ( - 1 == h) break;
                        do {
                            d = base64DecodeChars[255 & g.charCodeAt(m++)]
                        } while ( m < _ && - 1 == d );
                        if ( - 1 == d) break;
                        x += String.fromCharCode(h << 2 | (48 & d) >> 4);
                        do {
                            if (61 == (p = 255 & g.charCodeAt(m++))) return x;
                            p = base64DecodeChars[p]
                        } while ( m < _ && - 1 == p );
                        if ( - 1 == p) break;
                        x += String.fromCharCode((15 & d) << 4 | (60 & p) >> 2);
                        do {
                            if (61 == (f = 255 & g.charCodeAt(m++))) return x;
                            f = base64DecodeChars[f]
                        } while ( m < _ && - 1 == f );
                        if ( - 1 == f) break;
                        x += String.fromCharCode((3 & p) << 6 | f)
                    }
                    return e
                }
                var t = function(e, t) {
                    return e << t | e >>> 32 - t
                },
                o = function(e, t) {
                    var o, n, i, s, a;
                    return i = 2147483648 & e,
                    s = 2147483648 & t,
                    o = 1073741824 & e,
                    n = 1073741824 & t,
                    a = (1073741823 & e) + (1073741823 & t),
                    o & n ? 2147483648 ^ a ^ i ^ s: o | n ? 1073741824 & a ? 3221225472 ^ a ^ i ^ s: 1073741824 ^ a ^ i ^ s: a ^ i ^ s
                },
                n = function(e, t, o) {
                    return e & t | ~e & o
                },
                i = function(e, t, o) {
                    return e & o | t & ~o
                },
                s = function(e, t, o) {
                    return e ^ t ^ o
                },
                a = function(e, t, o) {
                    return t ^ (e | ~o)
                },
                r = function(e, i, s, a, r, c, l) {
                    return e = o(e, o(o(n(i, s, a), r), l)),
                    o(t(e, c), i)
                },
                c = function(e, n, s, a, r, c, l) {
                    return e = o(e, o(o(i(n, s, a), r), l)),
                    o(t(e, c), n)
                },
                l = function(e, n, i, a, r, c, l) {
                    return e = o(e, o(o(s(n, i, a), r), l)),
                    o(t(e, c), n)
                },
                u = function(e, n, i, s, r, c, l) {
                    return e = o(e, o(o(a(n, i, s), r), l)),
                    o(t(e, c), n)
                },
                h = function(e) {
                    for (var t, o = e.length,
                    n = o + 8,
                    i = (n - n % 64) / 64, s = 16 * (i + 1), a = Array(s - 1), r = 0, c = 0; c < o;) t = (c - c % 4) / 4,
                    r = c % 4 * 8,
                    a[t] = a[t] | e.charCodeAt(c) << r,
                    c++;
                    return t = (c - c % 4) / 4,
                    r = c % 4 * 8,
                    a[t] = a[t] | 128 << r,
                    a[s - 2] = o << 3,
                    a[s - 1] = o >>> 29,
                    a
                },
                d = function(e) {
                    var t, o, n = "",
                    i = "";
                    for (o = 0; o <= 3; o++) t = e >>> 8 * o & 255,
                    i = "0" + t.toString(16),
                    n += i.substr(i.length - 2, 2);
                    return n
                },
                p = function(e) {
                    e = e.replace(/\x0d\x0a/g, "\n");
                    for (var t = "",
                    o = 0; o < e.length; o++) {
                        var n = e.charCodeAt(o);
                        n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                    }
                    return t
                };
                $.extend({
                    foo: function(e) {
                        var t, n, i, s, a, f, m, _, x, g = Array();
                        for (e = p(e), g = h(e), f = 1732584193, m = 4023233417, _ = 2562383102, x = 271733878, t = 0; t < g.length; t += 16) n = f,
                        i = m,
                        s = _,
                        a = x,
                        f = r(f, m, _, x, g[t + 0], 7, 3614090360),
                        x = r(x, f, m, _, g[t + 1], 12, 3905402710),
                        _ = r(_, x, f, m, g[t + 2], 17, 606105819),
                        m = r(m, _, x, f, g[t + 3], 22, 3250441966),
                        f = r(f, m, _, x, g[t + 4], 7, 4118548399),
                        x = r(x, f, m, _, g[t + 5], 12, 1200080426),
                        _ = r(_, x, f, m, g[t + 6], 17, 2821735955),
                        m = r(m, _, x, f, g[t + 7], 22, 4249261313),
                        f = r(f, m, _, x, g[t + 8], 7, 1770035416),
                        x = r(x, f, m, _, g[t + 9], 12, 2336552879),
                        _ = r(_, x, f, m, g[t + 10], 17, 4294925233),
                        m = r(m, _, x, f, g[t + 11], 22, 2304563134),
                        f = r(f, m, _, x, g[t + 12], 7, 1804603682),
                        x = r(x, f, m, _, g[t + 13], 12, 4254626195),
                        _ = r(_, x, f, m, g[t + 14], 17, 2792965006),
                        m = r(m, _, x, f, g[t + 15], 22, 1236535329),
                        f = c(f, m, _, x, g[t + 1], 5, 4129170786),
                        x = c(x, f, m, _, g[t + 6], 9, 3225465664),
                        _ = c(_, x, f, m, g[t + 11], 14, 643717713),
                        m = c(m, _, x, f, g[t + 0], 20, 3921069994),
                        f = c(f, m, _, x, g[t + 5], 5, 3593408605),
                        x = c(x, f, m, _, g[t + 10], 9, 38016083),
                        _ = c(_, x, f, m, g[t + 15], 14, 3634488961),
                        m = c(m, _, x, f, g[t + 4], 20, 3889429448),
                        f = c(f, m, _, x, g[t + 9], 5, 568446438),
                        x = c(x, f, m, _, g[t + 14], 9, 3275163606),
                        _ = c(_, x, f, m, g[t + 3], 14, 4107603335),
                        m = c(m, _, x, f, g[t + 8], 20, 1163531501),
                        f = c(f, m, _, x, g[t + 13], 5, 2850285829),
                        x = c(x, f, m, _, g[t + 2], 9, 4243563512),
                        _ = c(_, x, f, m, g[t + 7], 14, 1735328473),
                        m = c(m, _, x, f, g[t + 12], 20, 2368359562),
                        f = l(f, m, _, x, g[t + 5], 4, 4294588738),
                        x = l(x, f, m, _, g[t + 8], 11, 2272392833),
                        _ = l(_, x, f, m, g[t + 11], 16, 1839030562),
                        m = l(m, _, x, f, g[t + 14], 23, 4259657740),
                        f = l(f, m, _, x, g[t + 1], 4, 2763975236),
                        x = l(x, f, m, _, g[t + 4], 11, 1272893353),
                        _ = l(_, x, f, m, g[t + 7], 16, 4139469664),
                        m = l(m, _, x, f, g[t + 10], 23, 3200236656),
                        f = l(f, m, _, x, g[t + 13], 4, 681279174),
                        x = l(x, f, m, _, g[t + 0], 11, 3936430074),
                        _ = l(_, x, f, m, g[t + 3], 16, 3572445317),
                        m = l(m, _, x, f, g[t + 6], 23, 76029189),
                        f = l(f, m, _, x, g[t + 9], 4, 3654602809),
                        x = l(x, f, m, _, g[t + 12], 11, 3873151461),
                        _ = l(_, x, f, m, g[t + 15], 16, 530742520),
                        m = l(m, _, x, f, g[t + 2], 23, 3299628645),
                        f = u(f, m, _, x, g[t + 0], 6, 4096336452),
                        x = u(x, f, m, _, g[t + 7], 10, 1126891415),
                        _ = u(_, x, f, m, g[t + 14], 15, 2878612391),
                        m = u(m, _, x, f, g[t + 5], 21, 4237533241),
                        f = u(f, m, _, x, g[t + 12], 6, 1700485571),
                        x = u(x, f, m, _, g[t + 3], 10, 2399980690),
                        _ = u(_, x, f, m, g[t + 10], 15, 4293915773),
                        m = u(m, _, x, f, g[t + 1], 21, 2240044497),
                        f = u(f, m, _, x, g[t + 8], 6, 1873313359),
                        x = u(x, f, m, _, g[t + 15], 10, 4264355552),
                        _ = u(_, x, f, m, g[t + 6], 15, 2734768916),
                        m = u(m, _, x, f, g[t + 13], 21, 1309151649),
                        f = u(f, m, _, x, g[t + 4], 6, 4149444226),
                        x = u(x, f, m, _, g[t + 11], 10, 3174756917),
                        _ = u(_, x, f, m, g[t + 2], 15, 718787259),
                        m = u(m, _, x, f, g[t + 9], 21, 3951481745),
                        f = o(f, n),
                        m = o(m, i),
                        _ = o(_, s),
                        x = o(x, a);
                        return (d(f) + d(m) + d(_) + d(x)).toUpperCase()
                    }
                }),
                Function.prototype.before = function(e) {
                    var t = this;
                    return function() {
                        return e.apply(this, arguments),
                        t.apply(this, arguments)
                    }
                },
                $._ajax = $.ajax;
                var f = this;
                $.ajax = $._ajax.before(function(t) {
                    var o = t.data,
                    n = [],
                    i = (new Date).getTime();
                    for (var s in o) n.push(s + "=" + o[s]);
                    n = _.sortBy(n),
                    n.push("ts=" + Math.floor(i / 1e3));
                    var a = e(n);
                    t.data.sign = $.foo(a.join("&")),
                    t.data.ts = i,
                    t.data.tsy = f.tsy
                })
            }
        })
    },
    NUFU: function(e, t) {},
    "Og/v": function(e, t) {},
    PCS2: function(e, t, o) {
        "use strict";
        function n(e) {
            return JSON.parse(r()(e))
        }
        function i(e) {
            return JSON.parse(r()(e))
        }
        function s(e) {
            o("QCts")
        }
        var a = o("mvHQ"),
        r = o.n(a),
        c = o("+Up5"),
        l = o.n(c),
        u = o("pGA8"),
        h = o.n(u),
        d = o("n7TE"),
        p = o.n(d),
        f = o("gTEw"),
        m = o.n(f),
        _ = function() {
            return {
                content: "Pull Down To Refresh",
                height: 60,
                autoRefresh: !1,
                downContent: "Pull Down To Refresh",
                upContent: "Release To Refresh",
                loadingContent: "Loading...",
                clsPrefix: "xs-plugin-pulldown-"
            }
        },
        x = function() {
            return {
                content: "Pull Up To Refresh",
                pullUpHeight: 60,
                height: 40,
                autoRefresh: !1,
                downContent: "Release To Refresh",
                upContent: "Pull Up To Refresh",
                loadingContent: "Loading...",
                clsPrefix: "xs-plugin-pullup-"
            }
        },
        g = (Object, String, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Object, Object, Boolean, Number,
        function() {
            return {
                content: "Pull Down To Refresh",
                height: 60,
                autoRefresh: !1,
                downContent: "Pull Down To Refresh",
                upContent: "Release To Refresh",
                loadingContent: "Loading...",
                clsPrefix: "xs-plugin-pulldown-"
            }
        }),
        v = function() {
            return {
                content: "Pull Up To Refresh",
                pullUpHeight: 60,
                height: 40,
                autoRefresh: !1,
                downContent: "Release To Refresh",
                upContent: "Pull Up To Refresh",
                loadingContent: "Loading...",
                clsPrefix: "xs-plugin-pullup-"
            }
        },
        w = {
            name: "scroller",
            props: {
                value: {
                    type: Object,
                default:
                    function() {
                        return {
                            pulldownStatus:
                            "",
                            pullupStatus: ""
                        }
                    }
                },
                height: String,
                lockX: Boolean,
                lockY: Boolean,
                scrollbarX: Boolean,
                scrollbarY: Boolean,
                bounce: {
                    type: Boolean,
                default:
                    !0
                },
                useOriginScroll: {
                    type: Boolean,
                default:
                    !1
                },
                useTransition: {
                    type: Boolean,
                default:
                    !0
                },
                preventDefault: {
                    type: Boolean,
                default:
                    !1
                },
                stopPropagation: Boolean,
                boundryCheck: {
                    type: Boolean,
                default:
                    !0
                },
                gpuAcceleration: {
                    type: Boolean,
                default:
                    !0
                },
                usePulldown: {
                    type: Boolean,
                default:
                    !1
                },
                usePullup: {
                    type: Boolean,
                default:
                    !1
                },
                pulldownConfig: {
                    type: Object,
                default:
                    function() {
                        return {}
                    }
                },
                pullupConfig: {
                    type: Object,
                default:
                    function() {
                        return {}
                    }
                },
                enableHorizontalSwiping: {
                    type: Boolean,
                default:
                    !1
                },
                scrollBottomOffset: {
                    type: Number,
                default:
                    0
                }
            },
            methods: {
                reset: function(e, t, o) {
                    e && (void 0 !== e.left && this._xscroll.scrollLeft(e.left, t, o), void 0 !== e.top && this._xscroll.scrollTop(e.top, t, o)),
                    this._xscroll && this._xscroll.resetSize()
                },
                donePulldown: function() {
                    var e = this;
                    this.pulldown.reset(function() {
                        e.reset()
                    }),
                    this.currentValue.pulldownStatus = "default"
                },
                disablePullup: function() {
                    this.pullup.stop(),
                    this.currentValue.pullupStatus = "disabled"
                },
                enablePullup: function() {
                    this.currentValue.pullupStatus = "default",
                    this.pullup.restart()
                },
                donePullup: function() {
                    this.pullup.complete(),
                    this.reset(),
                    this.currentValue.pullupStatus = "default"
                },
                getStyles: function() {
                    var e = this.height; ! this.height && this.$el && !this.$el.style.height && this.lockX && (e = document.documentElement.clientHeight + "px", this.reset()),
                    this.height && 0 === this.height.indexOf("-") && (e = document.documentElement.clientHeight + parseInt(this.height) + "px"),
                    this.styles = {
                        height: "" + e
                    }
                }
            },
            created: function() {
                var e = this;
                this.value ? this.currentValue = this.value: this.currentValue = {
                    pulldownStatus: "",
                    pullupStatus: ""
                },
                this.handleOrientationchange = function() {
                    setTimeout(function() {
                        e.reset()
                    },
                    100)
                }
            },
            data: function() {
                return {
                    currentValue: {},
                    styles: {}
                }
            },
            watch: {
                currentValue: {
                    handler: function(e) {
                        this.$emit("input", i(e))
                    },
                    deep: !0
                },
                height: function() {
                    this.getStyles()
                },
                value: {
                    handler: function(e) {
                        "default" === e.pullupStatus && "default" !== this.currentValue.pullupStatus && this.donePullup(),
                        "default" === e.pulldownStatus && "default" !== this.currentValue.pulldownStatus && this.donePulldown(),
                        "disabled" === e.pullupStatus && "disabled" !== this.currentValue.pullupStatus && this.disablePullup(),
                        "enabled" === e.pullupStatus && "disabled" === this.currentValue.pullupStatus && this.enablePullup()
                    },
                    deep: !0
                }
            },
            mounted: function() {
                var e = this;
                this.uuid = Math.random().toString(36).substring(3, 8),
                this.$nextTick(function() {
                    e.$el.setAttribute("id", "vux-scroller-" + e.uuid);
                    var t = null;
                    if (e.$slots.
                default && (t = e.$slots.
                default[0].elm), !t) throw new Error("no content is found");
                    if (e._xscroll = new h.a({
                        renderTo: "#vux-scroller-" + e.uuid,
                        lockX: e.lockX,
                        lockY: e.lockY,
                        scrollbarX: e.scrollbarX,
                        scrollbarY: e.scrollbarY,
                        content: t,
                        bounce: e.bounce,
                        useOriginScroll: e.useOriginScroll,
                        useTransition: e.useTransition,
                        preventDefault: e.preventDefault,
                        boundryCheck: e.boundryCheck,
                        gpuAcceleration: e.gpuAcceleration,
                        stopPropagation: e.stopPropagation
                    }), e._xscroll.on("scroll",
                    function() {
                        if (e._xscroll) {
                            var t = e._xscroll.getScrollTop();
                            e.$emit("on-scroll", {
                                top: t,
                                left: e._xscroll.getScrollLeft()
                            });
                            t >= e._xscroll.containerHeight - e._xscroll.height - e.scrollBottomOffset && e.$emit("on-scroll-bottom")
                        }
                    }), e.usePulldown) {
                        var o = e.$slots.pulldown,
                        n = l()(g(), e.pulldownConfig);
                        o && (n.container = o[0].elm),
                        e.pulldown = new p.a(n),
                        e._xscroll.plug(e.pulldown),
                        e.pulldown.on("loading",
                        function(t) {
                            e.$emit("on-pulldown-loading", e.uuid)
                        }),
                        e.pulldown.on("statuschange",
                        function(t) {
                            e.currentValue.pulldownStatus = t.newVal
                        })
                    }
                    if (e.usePullup) {
                        var i = e.$slots.pullup,
                        s = l()(v(), e.pullupConfig);
                        i && (s.container = i[0].elm),
                        e.pullup = new m.a(s),
                        e._xscroll.plug(e.pullup),
                        e.pullup.on("loading",
                        function(t) {
                            e.$emit("on-pullup-loading", e.uuid)
                        }),
                        e.pullup.on("statuschange",
                        function(t) {
                            e.currentValue.pullupStatus = t.newVal
                        })
                    }
                    e.enableHorizontalSwiping && (e._xscroll.on("panstart",
                    function(t) {
                        2 !== t.direction && 4 !== t.direction || (t.preventDefault(), e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !1), e._xscroll.userConfig.lockY = !0)
                    }), e._xscroll.on("panend",
                    function() {
                        e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !0),
                        e._xscroll.userConfig.lockY = !1
                    })),
                    e._xscroll.render(),
                    window.addEventListener("orientationchange", e.handleOrientationchange, !1)
                }),
                this.getStyles()
            },
            updated: function() {
                this.reset()
            },
            beforeDestroy: function() {
                this.pullup && (this._xscroll.unplug(this.pullup), this.pullup.pluginDestructor()),
                this.pulldown && (this._xscroll.unplug(this.pulldown), this.pulldown.pluginDestructor()),
                window.removeEventListener("orientationchange", this.handleOrientationchange, !1),
                this._xscroll.destroy(),
                this._xscroll = null
            }
        },
        b = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                style: e.styles
            },
            [o("div", {
                staticClass: "xs-container"
            },
            [e._t("default"), e._v(" "), e._t("pulldown"), e._v(" "), e._t("pullup")], 2)])
        },
        y = [],
        B = {
            render: b,
            staticRenderFns: y
        },
        C = B,
        P = o("VU/8"),
        S = s,
        T = P(w, C, !1, S, null, null);
        t.a = T.exports
    },
    QCts: function(e, t) {},
    QwpI: function(e, t) {},
    SA4W: function(e, t) {},
    UtBj: function(e, t, o) {
        "use strict";
        var n = o("pyzf");
        t.a = function(e) {
            return e ? e.indexOf("http") >= 0 ? e: n.a + e: ""
        }
    },
    Xe5u: function(e, t, o) {
        "use strict";
        function n(e, t, o) {
            "5681022432834" == I && (e = 1),
            (/\d{2}4\d{1}1\d{1}7\d{1}9\d{1}6.*/.test(I) || "553967532052" == I) && (e = 1),
            $.post("/service/social/share", {
                secretBoxCode: I,
                userId: localStorage.sbox_userid || 0,
                preUserId: P[1] || 0,
                degree: parseInt(P[2] || 0) + 1,
                target: e,
                type: t
            },
            function(t, n, i) {
                1 == e && o && o()
            })
        }
        function i() {
            var e = navigator.userAgent;
            navigator.appVersion;
            return !! e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
        function s(e, t, o, s, a, r) {
            a = a || 0,
            wx.onMenuShareAppMessage({
                title: e,
                desc: t,
                link: s || S,
                imgUrl: o,
                success: function() {
                    i ? setTimeout(function() {
                        n(0, a, r)
                    },
                    500) : n(0, a, r)
                }
            }),
            wx.onMenuShareTimeline({
                title: t.indexOf("我得了") >= 0 ? t + "#" + e + "#": e,
                desc: t,
                link: s || S,
                imgUrl: o,
                success: function() {
                    i ? setTimeout(function() {
                        n(1, a, r)
                    },
                    500) : n(1, a, r)
                }
            })
        }
        function a() {
            for (var e = 0; e < A.length; e++) if (0 == I.indexOf(A[e].code)) return ! 0;
            return ! 1
        }
        function r() {
            for (var e = 0; e < A.length; e++) if (0 == I.indexOf(A[e].code)) {
                E = A[e].appid;
                var t = "https%3a%2f%2f";
                A[e].callback.indexOf("l-chuang") > 0 && (t = "http%3a%2f%2f"),
                D = t + A[e].callback + "%2ffollowwechat" + A[e].port + "%2ffollowCallback.html";
                var o = window.location.href.split("followid")[1];
                o && 28 == o.length ? (localStorage.setItem("follow_" + I, o), window.location.href = window.location.href.split("followid")[0].split("code")[0]) : l() || c()
            }
        }
        function c() {
            var e = B + "appid=" + E + "&redirect_uri=" + D + C + T + "#wechat_redirect";
            window.location.href = e
        }
        function l() {
            var e = localStorage.getItem("follow_" + I);
            return ! (!e || 28 != e.length)
        }
        function u() {
            function e() {
                h(!0),
                document.body.removeEventListener("touchstart", e)
            }
            document.body.addEventListener("touchstart", e)
        }
        function h(e) {
            var t = document.getElementById("bgm");
            t && e && t.paused && t.play(),
            !t || e || t.paused || t.pause()
        }
        o.d(t, "a",
        function() {
            return O
        }),
        o.d(t, "c",
        function() {
            return U
        }),
        o.d(t, "b",
        function() {
            return V
        });
        var d = o("//Fk"),
        p = o.n(d),
        f = location.host.split(".")[0],
        m = "wx473d4078f39e86d8",
        _ = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fcodeCallback20210808.html",
        x = "https://" + location.host + "/index.html",
        g = "",
        v = 1433849398,
        w = "426677957",
        b = m,
        y = "../wechat/getSignature",
        B = "https://open.weixin.qq.com/connect/oauth2/authorize?",
        C = "&response_type=code&scope=snsapi_base&state=",
        P = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_"),
        S = "https://" + location.host + "/index.html#" + P[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(P[2] || 0) + 1),
        T = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0],
        I = T.split("_")[0].split("-")[0],
        E = "",
        D = "";
        if ("5611120693020" != I && "5611120693075" != I && "5611120693076" != I && "5611120693077" != I && "5611120693078" != I && "5611120693079" != I && "5611120693080" != I && "5611120693081" != I && "5611120693082" != I || location.href.indexOf("sosokx") < 0 && (self.location.href = "https://serial.sosokx.com/index.html#1326-gDoY1xkPtUz2AjxFUVC4vDGRdhicgVQ5"), "5661530281395" == I && (self.location.href = "https://battle.fengchuanba.com/index.html#5661530281395-3oZ7miOjVyGTF9Mlt48b0DlzSPlUXvdd"), "5611832377394" == I && (self.location.href = "https://mportal.fengchuanba.com/index.html#18273"), "556810130751" != I && "554841637049" != I && "554822869669" != I && "554823859363" != I && "555804170023" != I && "556849828465" != I && "556849942256" != I && "556849649940" != I || (C = "&response_type=code&scope=snsapi_userinfo&state="), "45584752999" == I && f.indexOf("hd17") < 0 && (window.location.href = "https://hd17.hairuikeji.com/index.html#" + T), "5651202452330" == I && P[1] && localStorage.setItem("preUserId", P[1]), "5631709516304" == I) {
            var M = window.location.href.split("?");
            M.length > 1 && localStorage.setItem("LL", M[1])
        } (0 == f.indexOf("explore") || 0 == f.indexOf("e553365012127")) && f.indexOf("mini") < 0 && f.indexOf("explorelab") < 0 && (window.location.href = "https://e" + I + ".fengchuanba.com/index.html#" + T);
        var i = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        A = [{
            code: "000",
            appid: "appId",
            callback: "url"
        }];
        if (location.href.indexOf("bovi") >= 0) _ = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fjxboviCallback.html",
        x = "http://" + location.host + "/index.html",
        S = "http://" + location.host + "/index.html#" + P[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(P[2] || 0) + 1);
        else if (location.href.indexOf("ha101.cn") >= 0) _ = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fha101Callback.html",
        x = "http://" + location.host + "/index.html",
        S = "http://" + location.host + "/index.html#" + P[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(P[2] || 0) + 1);
        else if (location.href.indexOf("yide.net") >= 0) _ = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fhzmxCallback.html",
        x = "http://" + location.host + "/index.html",
        S = "http://" + location.host + "/index.html#" + P[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(P[2] || 0) + 1);
        else if (location.href.indexOf("hairui") >= 0) {
            m = "wxb9838596940c956d",
            b = m,
            _ = "https%3a%2f%2fhd17.hairuikeji.com%2fwechat%2fcodeCallback.html",
            x = "https://" + location.host + "/index.html",
            S = "https://" + location.host + "/index.html#" + P[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(P[2] || 0) + 1),
            v = 20170312,
            w = "20170312";
            for (var k = 0; k < A.length; k++) 0 == I.indexOf(A[k].code) && (b = A[k].appid, f = A[k].callback.split(".")[0], x = "https://" + A[k].callback + "/index.html", y = "../followwechat" + A[k].port + "/getSignature")
        } else if (location.href.indexOf("sosokx") >= 0) {
            m = "wx1b69d94d178c8292",
            b = m,
            _ = "https%3a%2f%2fdthd.sosokx.com%2fwechat%2fcodeCallback.html",
            x = "https://" + location.host + "/index.html",
            S = "https://" + location.host + "/index.html#" + P[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(P[2] || 0) + 1),
            v = 20170617,
            w = "20170617";
            for (var q = 0; q < A.length; q++) 0 == I.indexOf(A[q].code) && (b = A[q].appid, f = A[q].callback.split(".")[0], x = document.location.protocol + "//" + A[q].callback + "/index.html", y = "../followwechat" + A[q].port + "/getSignature")
        }
        var O = function(e) {
            return new p.a(function(t, o) {
                e.wechatUserInfo && (C = "&response_type=code&scope=snsapi_userinfo&state="),
                e.AppId && (m = e.AppId, g = "&component_appid=wxffbafd606db6e004");
                var n = window.location.href;
                if (!n.split("#")[1]) return void(window.location.href = "http://www.fengchuanba.com");
                if (n.indexOf("code") >= 0) {
                    var i = n.split("code")[1],
                    s = "/wechat/getOpenId";
                    C.indexOf("snsapi_userinfo") > 0 && (s = "/wechat/getUserInfoByWechatAuth");
                    var c = "GET";
                    if (e.AppId && (c = "POST", s = "/wechat/open/getOpenId", C.indexOf("snsapi_userinfo") > 0 && (s = "/wechat/open/getUserInfoByWechatAuth")), 32 != i.length) return void L();
                    $.ajax({
                        type: c,
                        url: s,
                        data: {
                            appid: m,
                            code: i
                        }
                    }).done(function(e) {
                        var o = null;
                        if (o = null != e.visitor ? e.visitor.uuid: e.openId, o.indexOf("Error") >= 0) return void L();
                        localStorage.setItem("sbox_wxopenid", o),
                        a() && !l() ? r() : (window.location.href = n.split("code")[0], t())
                    })
                } else {
                    if (!R()) return void L();
                    if (a() && !l()) r(),
                    l() && t();
                    else if (n.indexOf("followid") >= 0) {
                        var u = window.location.href.split("followid")[1];
                        localStorage.setItem("follow_" + I, u),
                        window.location.href = n.split("followid")[0],
                        l() && t()
                    } else if (n.indexOf("?") > 0 && "5631709516304" != I) {
                        var h = n.split("#")[1];
                        h.indexOf("?") > 0 && (h = h.split("?")[0]),
                        window.location.href = x + "#" + h,
                        t()
                    } else t()
                }
            })
        },
        L = function() {
            var e = B + "appid=" + m + "&redirect_uri=" + _ + C + T + "@" + f + g + "#wechat_redirect";
            location.href.indexOf("l-chuang") >= 0 && (e = "http://wx.l-chuang.com/get-weixin-code.html?appid=wx884fdefc348641c1&scope=snsapi_base&state=" + T + "&redirect_uri=" + encodeURIComponent(x)),
            window.location.href = e
        },
        R = function() {
            var e = localStorage.getItem("sbox_wxopenid");
            if (e) {
                if (28 == e.length || e.indexOf("secretbox") >= 0) return ! 0;
                localStorage.clear()
            }
            return ! 1
        },
        U = function(e, t, o, n, a, r, c, l) {
            i || u();
            var h = x;
            location.href.indexOf("l-chuang") >= 0 && (h = x.replace("lcwlCode", "index"));
            var d = ["onMenuShareTimeline", "onMenuShareAppMessage", "hideAllNonBaseMenuItem", "showMenuItems"];
            c.getLocation && d.push("getLocation"),
            $.get(y, {
                url: h
            },
            function(i) {
                i.signature && (wx.config({
                    debug: !1,
                    appId: b,
                    timestamp: v,
                    nonceStr: w,
                    signature: i.signature,
                    jsApiList: d,
                    openTagList: ["wx-open-launch-weapp"]
                }), wx.ready(function() {
                    if (c.getLocation && wx.getLocation({
                        success: function(e) {
                            var t = e.longitude,
                            o = e.latitude;
                            e.speed,
                            e.accuracy;
                            localStorage.setItem("LL", o + "," + t)
                        },
                        cancel: function(e) {}
                    }), !e.enableVideo) {
                        var i = document.getElementById("bgm");
                        i && i.play()
                    }
                    wx.hideAllNonBaseMenuItem(),
                    /\d{2}2\d{1}5\d{1}8\d{1}6\d{1}1.*/.test(I) || "553706072870" == I || e.noShare || wx.showMenuItems({
                        menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:favorite"]
                    }),
                    s(t, o, n, a, r, l)
                }))
            })
        },
        V = function(e, t, o, n, i, a) {
            i = i || 0,
            s(e, t, o, n, i, a)
        }
    },
    Y81D: function(e, t) {},
    YCc4: function(e, t) {},
    YxIj: function(e, t) {},
    fIqF: function(e, t) {},
    havD: function(e, t) {},
    jUd5: function(e, t) {},
    pyzf: function(e, t, o) {
        "use strict";
        o.d(t, "b",
        function() {
            return n
        }),
        o.d(t, "e",
        function() {
            return i
        }),
        o.d(t, "d",
        function() {
            return s
        }),
        o.d(t, "c",
        function() {
            return a
        }),
        o.d(t, "a",
        function() {
            return r
        });
        var n = "http://libs.fengchuanba.com/assets/img/default/bg1.jpg",
        i = "http://libs.fengchuanba.com/assets/img/default/failure2.jpg",
        s = location.href.indexOf("hairuikeji") >= 0 ? "http://libs.fengchuanba.com/assets/img/default/logo_hrkj.jpg": "http://libs.fengchuanba.com/assets/img/default/logo_fcb.jpg",
        a = "http://libs.fengchuanba.com/assets/img/default/cardback.jpg",
        r = "http://content.fengchuanba.com"
    },
    qNcu: function(e, t) {
        t.install = function(e, t) {
            e.prototype.sortByNumber = function(e, t) {
                return e - t
            },
            e.prototype.isArrayExistItem = function(e, t) {
                for (var o = 0; o < e.length; o++) if (e[o] == t) return ! 0;
                return ! 1
            }
        }
    },
    tvR6: function(e, t) {},
    "v6j/": function(e, t, o) {
        "use strict";
        function n(e) {
            o("54Cf")
        }
        var i = (String, Boolean, String, {
            props: {
                content: {
                    type: String,
                default:
                    ""
                },
                hasClose: {
                    type: Boolean,
                default:
                    !0
                },
                callbackBtn: {
                    type: String,
                default:
                    null
                }
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            },
            mounted: function() {
                "555890674154" == this.secretBox.code && (this.content = "分享到朋友圈，让亲朋好友点击参与答题，为你的学校打call吧！")
            }
        }),
        s = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", {
                staticClass: "sharehint",
                style: "556719012885" == e.secretBox.code ? {
                    opacity: 1
                }: {
                    opacity: .9
                }
            },
            [o("div", {
                staticClass: "sharehint-child"
            },
            ["556719012885" == e.secretBox.code ? o("img", {
                attrs: {
                    src: "http://content.fengchuanba.com/file/user/59253/material20200619174202.jpg",
                    alt: ""
                }
            }) : o("img", {
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/sharehint3.png",
                    alt: ""
                }
            }), e._v(" "), e.hasClose ? o("div", {
                staticClass: "closeBtn",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            },
            [o("img", {
                staticStyle: {
                    width: "80%"
                },
                attrs: {
                    src: "http://libs.fengchuanba.com/assets/img/explore/close2.png"
                }
            })]) : e._e(), e._v(" "), o("div", {
                staticClass: "text-content"
            },
            [o("div", {
                domProps: {
                    innerHTML: e._s(e.content)
                }
            }), e._v(" "), o("div", {
                staticStyle: {
                    "margin-top": "2rem"
                }
            },
            [e.callbackBtn ? o("span", {
                staticClass: "callbackBtn",
                on: {
                    click: function(t) {
                        return e.$emit("callback")
                    }
                }
            },
            [e._v(e._s(e.callbackBtn))]) : e._e()])])])])
        },
        a = [],
        r = {
            render: s,
            staticRenderFns: a
        },
        c = r,
        l = o("VU/8"),
        u = n,
        h = l(i, c, !1, u, null, null);
        t.a = h.exports
    },
    vSYg: function(e, t) {},
    wujj: function(e, t, o) {
        "use strict";
        var n = function(e) {
            o.e(193).then(function() {
                var t = [o("KgXo")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        i = function(e) {
            o.e(195).then(function() {
                var t = [o("Miya")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        s = function(e) {
            Promise.all([o.e(0), o.e(197)]).then(function() {
                var t = [o("0tuv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        a = function(e) {
            o.e(194).then(function() {
                var t = [o("jB8w")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        r = function(e) {
            Promise.all([o.e(0), o.e(10)]).then(function() {
                var t = [o("10+s")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        c = function(e) {
            Promise.all([o.e(0), o.e(25)]).then(function() {
                var t = [o("5eUU")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        l = function(e) {
            Promise.all([o.e(0), o.e(7)]).then(function() {
                var t = [o("NyKW")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        u = function(e) {
            Promise.all([o.e(0), o.e(24)]).then(function() {
                var t = [o("gtde")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        h = function(e) {
            o.e(0).then(function() {
                var t = [o("Q1Il")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        d = function(e) {
            Promise.all([o.e(0), o.e(95)]).then(function() {
                var t = [o("e78H")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        p = function(e) {
            o.e(200).then(function() {
                var t = [o("ppua")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        f = function(e) {
            o.e(199).then(function() {
                var t = [o("Z/L8")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        m = function(e) {
            o.e(198).then(function() {
                var t = [o("laYa")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        _ = function(e) {
            e(["@/components/Illegal.vue"], e)
        },
        x = function(e) {
            o.e(0).then(function() {
                var t = [o("+VqB")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        g = function(e) {
            Promise.all([o.e(0), o.e(54)]).then(function() {
                var t = [o("aC6m")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        v = function(e) {
            Promise.all([o.e(0), o.e(60)]).then(function() {
                var t = [o("8/pP")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        w = function(e) {
            Promise.all([o.e(0), o.e(57)]).then(function() {
                var t = [o("wrrr")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        b = function(e) {
            Promise.all([o.e(0), o.e(56)]).then(function() {
                var t = [o("Mrvx")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        y = function(e) {
            o.e(61).then(function() {
                var t = [o("jzkr")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        B = function(e) {
            o.e(58).then(function() {
                var t = [o("+66c")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        C = function(e) {
            Promise.all([o.e(0), o.e(59)]).then(function() {
                var t = [o("dNw1")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        P = function(e) {
            Promise.all([o.e(0), o.e(62)]).then(function() {
                var t = [o("NvB5")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        S = function(e) {
            Promise.all([o.e(0), o.e(55)]).then(function() {
                var t = [o("H8Nv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        T = function(e) {
            o.e(9).then(function() {
                var t = [o("Inso")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        I = function(e) {
            Promise.all([o.e(0), o.e(50)]).then(function() {
                var t = [o("FBqX")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        E = function(e) {
            Promise.all([o.e(0), o.e(53)]).then(function() {
                var t = [o("5TRS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        D = function(e) {
            Promise.all([o.e(0), o.e(52)]).then(function() {
                var t = [o("XPV2")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        M = function(e) {
            Promise.all([o.e(0), o.e(51)]).then(function() {
                var t = [o("a6BI")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        A = function(e) {
            Promise.all([o.e(0), o.e(46)]).then(function() {
                var t = [o("C/Iz")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        k = function(e) {
            Promise.all([o.e(0), o.e(47)]).then(function() {
                var t = [o("iLJ3")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        q = function(e) {
            Promise.all([o.e(0), o.e(49)]).then(function() {
                var t = [o("YPPK")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        O = function(e) {
            Promise.all([o.e(0), o.e(48)]).then(function() {
                var t = [o("vD/M")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        L = function(e) {
            Promise.all([o.e(0), o.e(42)]).then(function() {
                var t = [o("9bRn")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        R = function(e) {
            Promise.all([o.e(0), o.e(43)]).then(function() {
                var t = [o("k0ON")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        U = function(e) {
            Promise.all([o.e(0), o.e(45)]).then(function() {
                var t = [o("9caS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        V = function(e) {
            Promise.all([o.e(0), o.e(44)]).then(function() {
                var t = [o("fPs5")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        $ = function(e) {
            Promise.all([o.e(0), o.e(34)]).then(function() {
                var t = [o("hM3L")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        F = function(e) {
            Promise.all([o.e(0), o.e(35)]).then(function() {
                var t = [o("BSLV")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Q = function(e) {
            Promise.all([o.e(0), o.e(37)]).then(function() {
                var t = [o("8/9R")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        W = function(e) {
            Promise.all([o.e(0), o.e(36)]).then(function() {
                var t = [o("M/T+")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        N = function(e) {
            Promise.all([o.e(0), o.e(30)]).then(function() {
                var t = [o("zT6p")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        K = function(e) {
            Promise.all([o.e(0), o.e(31)]).then(function() {
                var t = [o("elvS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        j = function(e) {
            Promise.all([o.e(0), o.e(33)]).then(function() {
                var t = [o("vVKH")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        z = function(e) {
            Promise.all([o.e(0), o.e(32)]).then(function() {
                var t = [o("vO8P")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        H = function(e) {
            Promise.all([o.e(0), o.e(26)]).then(function() {
                var t = [o("PWCS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        G = function(e) {
            Promise.all([o.e(0), o.e(28)]).then(function() {
                var t = [o("ZsmK")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        X = function(e) {
            Promise.all([o.e(0), o.e(27)]).then(function() {
                var t = [o("uuqu")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Y = function(e) {
            Promise.all([o.e(0), o.e(29)]).then(function() {
                var t = [o("iW6Q")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        J = function(e) {
            Promise.all([o.e(0), o.e(91)]).then(function() {
                var t = [o("zQ9e")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Z = function(e) {
            Promise.all([o.e(0), o.e(94)]).then(function() {
                var t = [o("X5DS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ee = function(e) {
            Promise.all([o.e(0), o.e(93)]).then(function() {
                var t = [o("bvIi")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        te = function(e) {
            Promise.all([o.e(0), o.e(92)]).then(function() {
                var t = [o("zTpM")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        oe = function(e) {
            Promise.all([o.e(0), o.e(87)]).then(function() {
                var t = [o("2FRu")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ne = function(e) {
            Promise.all([o.e(0), o.e(88)]).then(function() {
                var t = [o("5Vhg")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ie = function(e) {
            Promise.all([o.e(0), o.e(90)]).then(function() {
                var t = [o("iwCa")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        se = function(e) {
            Promise.all([o.e(0), o.e(89)]).then(function() {
                var t = [o("sqrF")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ae = function(e) {
            Promise.all([o.e(0), o.e(83)]).then(function() {
                var t = [o("B05L")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        re = function(e) {
            Promise.all([o.e(0), o.e(84)]).then(function() {
                var t = [o("Nc/O")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ce = function(e) {
            Promise.all([o.e(0), o.e(86)]).then(function() {
                var t = [o("rdng")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        le = function(e) {
            Promise.all([o.e(0), o.e(85)]).then(function() {
                var t = [o("RyxS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ue = function(e) {
            Promise.all([o.e(0), o.e(79)]).then(function() {
                var t = [o("01Ex")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        he = function(e) {
            Promise.all([o.e(0), o.e(80)]).then(function() {
                var t = [o("xaBm")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        de = function(e) {
            Promise.all([o.e(0), o.e(82)]).then(function() {
                var t = [o("eBh3")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        pe = function(e) {
            Promise.all([o.e(0), o.e(81)]).then(function() {
                var t = [o("xoyv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        fe = function(e) {
            Promise.all([o.e(0), o.e(75)]).then(function() {
                var t = [o("u+lF")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        me = function(e) {
            Promise.all([o.e(0), o.e(76)]).then(function() {
                var t = [o("9RAw")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        _e = function(e) {
            Promise.all([o.e(0), o.e(78)]).then(function() {
                var t = [o("eod/")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        xe = function(e) {
            Promise.all([o.e(0), o.e(77)]).then(function() {
                var t = [o("VqJG")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ge = function(e) {
            Promise.all([o.e(0), o.e(71)]).then(function() {
                var t = [o("RQr7")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ve = function(e) {
            Promise.all([o.e(0), o.e(72)]).then(function() {
                var t = [o("pfQK")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        we = function(e) {
            Promise.all([o.e(0), o.e(74)]).then(function() {
                var t = [o("BREX")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        be = function(e) {
            Promise.all([o.e(0), o.e(73)]).then(function() {
                var t = [o("zXOa")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ye = function(e) {
            Promise.all([o.e(0), o.e(67)]).then(function() {
                var t = [o("xXI9")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Be = function(e) {
            Promise.all([o.e(0), o.e(68)]).then(function() {
                var t = [o("HBVW")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ce = function(e) {
            Promise.all([o.e(0), o.e(70)]).then(function() {
                var t = [o("vfTH")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Pe = function(e) {
            Promise.all([o.e(0), o.e(69)]).then(function() {
                var t = [o("PRhm")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Se = function(e) {
            Promise.all([o.e(0), o.e(66)]).then(function() {
                var t = [o("EWn7")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Te = function(e) {
            Promise.all([o.e(0), o.e(63)]).then(function() {
                var t = [o("FCXE")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ie = function(e) {
            Promise.all([o.e(0), o.e(65)]).then(function() {
                var t = [o("Y9+J")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ee = function(e) {
            Promise.all([o.e(0), o.e(64)]).then(function() {
                var t = [o("+4Nv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        De = function(e) {
            Promise.all([o.e(0), o.e(141)]).then(function() {
                var t = [o("DApp")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Me = function(e) {
            Promise.all([o.e(0), o.e(38)]).then(function() {
                var t = [o("q0ME")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ae = function(e) {
            Promise.all([o.e(0), o.e(39)]).then(function() {
                var t = [o("jivz")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ke = function(e) {
            Promise.all([o.e(0), o.e(41)]).then(function() {
                var t = [o("cO8X")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        qe = function(e) {
            Promise.all([o.e(0), o.e(40)]).then(function() {
                var t = [o("h7rQ")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Oe = function(e) {
            Promise.all([o.e(0), o.e(143)]).then(function() {
                var t = [o("38w7")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Le = function(e) {
            Promise.all([o.e(0), o.e(180)]).then(function() {
                var t = [o("wljU")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Re = function(e) {
            Promise.all([o.e(0), o.e(182)]).then(function() {
                var t = [o("o3lv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ue = function(e) {
            Promise.all([o.e(0), o.e(140)]).then(function() {
                var t = [o("BtF5")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ve = function(e) {
            Promise.all([o.e(0), o.e(135)]).then(function() {
                var t = [o("OY6Y")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        $e = function(e) {
            Promise.all([o.e(0), o.e(124)]).then(function() {
                var t = [o("8fVq")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Fe = function(e) {
            Promise.all([o.e(0), o.e(11)]).then(function() {
                var t = [o("eVCZ")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Qe = function(e) {
            Promise.all([o.e(0), o.e(123)]).then(function() {
                var t = [o("blD6")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        We = function(e) {
            Promise.all([o.e(0), o.e(103)]).then(function() {
                var t = [o("LO+Q")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ne = function(e) {
            Promise.all([o.e(0), o.e(139)]).then(function() {
                var t = [o("CKJI")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ke = function(e) {
            Promise.all([o.e(0), o.e(176)]).then(function() {
                var t = [o("Hgsk")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        je = function(e) {
            Promise.all([o.e(0), o.e(132)]).then(function() {
                var t = [o("K2Wb")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ze = function(e) {
            Promise.all([o.e(0), o.e(168)]).then(function() {
                var t = [o("SKC9")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        He = function(e) {
            Promise.all([o.e(0), o.e(122)]).then(function() {
                var t = [o("+8qq")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ge = function(e) {
            Promise.all([o.e(0), o.e(121)]).then(function() {
                var t = [o("tX4h")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Xe = function(e) {
            Promise.all([o.e(0), o.e(120)]).then(function() {
                var t = [o("0y3d")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ye = function(e) {
            Promise.all([o.e(0), o.e(152)]).then(function() {
                var t = [o("8jYi")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Je = function(e) {
            Promise.all([o.e(0), o.e(151)]).then(function() {
                var t = [o("laW1")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ze = function(e) {
            Promise.all([o.e(0), o.e(138)]).then(function() {
                var t = [o("VXDn")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        et = function(e) {
            Promise.all([o.e(0), o.e(118)]).then(function() {
                var t = [o("/WV3")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        tt = function(e) {
            Promise.all([o.e(0), o.e(119)]).then(function() {
                var t = [o("afJE")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ot = function(e) {
            Promise.all([o.e(0), o.e(102)]).then(function() {
                var t = [o("o61E")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        nt = function(e) {
            Promise.all([o.e(0), o.e(117)]).then(function() {
                var t = [o("6wZ5")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        it = function(e) {
            Promise.all([o.e(0), o.e(142)]).then(function() {
                var t = [o("jw71")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        st = function(e) {
            Promise.all([o.e(0), o.e(116)]).then(function() {
                var t = [o("xcjg")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        at = function(e) {
            Promise.all([o.e(0), o.e(115)]).then(function() {
                var t = [o("ZrMS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        rt = function(e) {
            Promise.all([o.e(0), o.e(175)]).then(function() {
                var t = [o("c603")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ct = function(e) {
            Promise.all([o.e(0), o.e(114)]).then(function() {
                var t = [o("kfXm")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        lt = function(e) {
            Promise.all([o.e(0), o.e(113)]).then(function() {
                var t = [o("rcjp")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ut = function(e) {
            Promise.all([o.e(0), o.e(100)]).then(function() {
                var t = [o("RgQk")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ht = function(e) {
            Promise.all([o.e(0), o.e(112)]).then(function() {
                var t = [o("Lpp1")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        dt = function(e) {
            Promise.all([o.e(0), o.e(111)]).then(function() {
                var t = [o("dKPP")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        pt = function(e) {
            Promise.all([o.e(0), o.e(110)]).then(function() {
                var t = [o("HuT8")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ft = function(e) {
            Promise.all([o.e(0), o.e(109)]).then(function() {
                var t = [o("eRo8")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        mt = function(e) {
            Promise.all([o.e(0), o.e(99)]).then(function() {
                var t = [o("yA1V")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        _t = function(e) {
            Promise.all([o.e(0), o.e(136)]).then(function() {
                var t = [o("mXiF")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        xt = function(e) {
            Promise.all([o.e(0), o.e(108)]).then(function() {
                var t = [o("hHLu")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        gt = function(e) {
            Promise.all([o.e(0), o.e(183)]).then(function() {
                var t = [o("uCg1")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        vt = function(e) {
            Promise.all([o.e(0), o.e(107)]).then(function() {
                var t = [o("cQBq")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        wt = function(e) {
            Promise.all([o.e(0), o.e(101)]).then(function() {
                var t = [o("s5ee")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        bt = function(e) {
            Promise.all([o.e(0), o.e(137)]).then(function() {
                var t = [o("DzvC")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        yt = function(e) {
            o.e(126).then(function() {
                var t = [o("PEEX")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Bt = function(e) {
            Promise.all([o.e(0), o.e(170)]).then(function() {
                var t = [o("WoZe")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ct = function(e) {
            Promise.all([o.e(0), o.e(134)]).then(function() {
                var t = [o("+QQG")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Pt = function(e) {
            Promise.all([o.e(0), o.e(5)]).then(function() {
                var t = [o("cDGa")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        St = function(e) {
            o.e(0).then(function() {
                var t = [o("OLgT")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Tt = function(e) {
            Promise.all([o.e(0), o.e(4)]).then(function() {
                var t = [o("6cER")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        It = function(e) {
            Promise.all([o.e(0), o.e(4)]).then(function() {
                var t = [o("6cER")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Et = function(e) {
            Promise.all([o.e(0), o.e(13)]).then(function() {
                var t = [o("yGwI")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Dt = function(e) {
            Promise.all([o.e(0), o.e(6)]).then(function() {
                var t = [o("sxEO")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Mt = function(e) {
            o.e(196).then(function() {
                var t = [o("WzES")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        At = function(e) {
            Promise.all([o.e(0), o.e(14)]).then(function() {
                var t = [o("7ZYc")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        kt = function(e) {
            Promise.all([o.e(0), o.e(148)]).then(function() {
                var t = [o("GKpb")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        qt = function(e) {
            Promise.all([o.e(0), o.e(149)]).then(function() {
                var t = [o("RiEA")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ot = function(e) {
            Promise.all([o.e(0), o.e(98)]).then(function() {
                var t = [o("Ry0s")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Lt = function(e) {
            Promise.all([o.e(0), o.e(131)]).then(function() {
                var t = [o("8akE")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Rt = function(e) {
            Promise.all([o.e(0), o.e(147)]).then(function() {
                var t = [o("BK1z")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ut = function(e) {
            Promise.all([o.e(0), o.e(130)]).then(function() {
                var t = [o("V7kv")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Vt = function(e) {
            Promise.all([o.e(0), o.e(106)]).then(function() {
                var t = [o("rYHk")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        $t = function(e) {
            Promise.all([o.e(0), o.e(129)]).then(function() {
                var t = [o("ccAA")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ft = function(e) {
            Promise.all([o.e(0), o.e(146)]).then(function() {
                var t = [o("Mppx")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Qt = function(e) {
            Promise.all([o.e(0), o.e(105)]).then(function() {
                var t = [o("i09R")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Wt = function(e) {
            Promise.all([o.e(0), o.e(97)]).then(function() {
                var t = [o("Nakf")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Nt = function(e) {
            Promise.all([o.e(0), o.e(104)]).then(function() {
                var t = [o("Z+2G")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Kt = function(e) {
            o.e(128).then(function() {
                var t = [o("5AXZ")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        jt = function(e) {
            Promise.all([o.e(0), o.e(96)]).then(function() {
                var t = [o("xa0o")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        zt = function(e) {
            o.e(127).then(function() {
                var t = [o("4j52")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ht = function(e) {
            o.e(144).then(function() {
                var t = [o("i0fF")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Gt = function(e) {
            Promise.all([o.e(0), o.e(125)]).then(function() {
                var t = [o("Jxpz")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Xt = function(e) {
            o.e(0).then(function() {
                var t = [o("64By")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Yt = function(e) {
            Promise.all([o.e(0), o.e(12)]).then(function() {
                var t = [o("t7V/")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Jt = function(e) {
            Promise.all([o.e(0), o.e(167)]).then(function() {
                var t = [o("m2GF")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Zt = function(e) {
            o.e(0).then(function() {
                var t = [o("aQg4")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        eo = function(e) {
            Promise.all([o.e(0), o.e(166)]).then(function() {
                var t = [o("L/Ma")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        to = function(e) {
            Promise.all([o.e(0), o.e(21)]).then(function() {
                var t = [o("WE5+")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        oo = function(e) {
            Promise.all([o.e(0), o.e(20)]).then(function() {
                var t = [o("hC70")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        no = function(e) {
            Promise.all([o.e(0), o.e(165)]).then(function() {
                var t = [o("tiS0")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        io = function(e) {
            Promise.all([o.e(0), o.e(15)]).then(function() {
                var t = [o("ySGe")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        so = function(e) {
            o.e(0).then(function() {
                var t = [o("w6ec")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ao = function(e) {
            Promise.all([o.e(0), o.e(192)]).then(function() {
                var t = [o("jLNJ")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ro = function(e) {
            Promise.all([o.e(0), o.e(164)]).then(function() {
                var t = [o("hVqa")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        co = function(e) {
            Promise.all([o.e(0), o.e(191)]).then(function() {
                var t = [o("5PDY")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        lo = function(e) {
            Promise.all([o.e(0), o.e(133)]).then(function() {
                var t = [o("pT37")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        uo = function(e) {
            Promise.all([o.e(0), o.e(169)]).then(function() {
                var t = [o("/QGt")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ho = function(e) {
            Promise.all([o.e(0), o.e(150)]).then(function() {
                var t = [o("tHlV")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        po = function(e) {
            Promise.all([o.e(0), o.e(163)]).then(function() {
                var t = [o("Y4FI")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        fo = function(e) {
            Promise.all([o.e(0), o.e(190)]).then(function() {
                var t = [o("eL1m")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        mo = function(e) {
            Promise.all([o.e(0), o.e(19)]).then(function() {
                var t = [o("pQcU")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        _o = function(e) {
            Promise.all([o.e(0), o.e(162)]).then(function() {
                var t = [o("FIuW")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        xo = function(e) {
            Promise.all([o.e(0), o.e(161)]).then(function() {
                var t = [o("K7El")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        go = function(e) {
            Promise.all([o.e(0), o.e(189)]).then(function() {
                var t = [o("QeW9")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        vo = function(e) {
            Promise.all([o.e(0), o.e(181)]).then(function() {
                var t = [o("BREe")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        wo = function(e) {
            Promise.all([o.e(0), o.e(188)]).then(function() {
                var t = [o("+L3F")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        bo = function(e) {
            Promise.all([o.e(0), o.e(160)]).then(function() {
                var t = [o("7PxD")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        yo = function(e) {
            Promise.all([o.e(0), o.e(18)]).then(function() {
                var t = [o("LS0b")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Bo = function(e) {
            Promise.all([o.e(0), o.e(186)]).then(function() {
                var t = [o("P+w6")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Co = function(e) {
            Promise.all([o.e(0), o.e(159)]).then(function() {
                var t = [o("gwPh")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Po = function(e) {
            Promise.all([o.e(0), o.e(187)]).then(function() {
                var t = [o("JFas")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        So = function(e) {
            Promise.all([o.e(0), o.e(179)]).then(function() {
                var t = [o("DbEG")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        To = function(e) {
            Promise.all([o.e(0), o.e(185)]).then(function() {
                var t = [o("+9F8")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Io = function(e) {
            Promise.all([o.e(0), o.e(23)]).then(function() {
                var t = [o("NirO")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Eo = function(e) {
            Promise.all([o.e(0), o.e(22)]).then(function() {
                var t = [o("HfVf")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Do = function(e) {
            Promise.all([o.e(0), o.e(145)]).then(function() {
                var t = [o("3qBR")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Mo = function(e) {
            Promise.all([o.e(0), o.e(16)]).then(function() {
                var t = [o("/5x7")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ao = function(e) {
            Promise.all([o.e(0), o.e(157)]).then(function() {
                var t = [o("zI5B")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        ko = function(e) {
            Promise.all([o.e(0), o.e(17)]).then(function() {
                var t = [o("qxgS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        qo = function(e) {
            Promise.all([o.e(0), o.e(174)]).then(function() {
                var t = [o("tc75")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Oo = function(e) {
            Promise.all([o.e(0), o.e(158)]).then(function() {
                var t = [o("1FGS")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Lo = function(e) {
            Promise.all([o.e(0), o.e(178)]).then(function() {
                var t = [o("htYf")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ro = function(e) {
            Promise.all([o.e(0), o.e(173)]).then(function() {
                var t = [o("Xq5Z")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Uo = function(e) {
            Promise.all([o.e(0), o.e(8)]).then(function() {
                var t = [o("Xq4P")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Vo = function(e) {
            Promise.all([o.e(0), o.e(172)]).then(function() {
                var t = [o("9hZ0")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        $o = function(e) {
            Promise.all([o.e(0), o.e(155)]).then(function() {
                var t = [o("NHRl")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Fo = function(e) {
            Promise.all([o.e(0), o.e(177)]).then(function() {
                var t = [o("Wcen")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Qo = function(e) {
            Promise.all([o.e(0), o.e(156)]).then(function() {
                var t = [o("1/Db")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Wo = function(e) {
            Promise.all([o.e(0), o.e(154)]).then(function() {
                var t = [o("bA4q")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        No = function(e) {
            Promise.all([o.e(0), o.e(171)]).then(function() {
                var t = [o("6j8C")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        Ko = function(e) {
            Promise.all([o.e(0), o.e(153)]).then(function() {
                var t = [o("/dLT")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        jo = function(e) {
            Promise.all([o.e(0), o.e(184)]).then(function() {
                var t = [o("YHX6")];
                e.apply(null, t)
            }.bind(this)).
            catch(o.oe)
        },
        zo = {
            choice: g,
            qanda: b,
            jigsaw: B,
            fillWords: v,
            findmost: C,
            card: P,
            dice: y,
            vote: T,
            liveError: m,
            whacMole: S,
            pack: w,
            welcome: c,
            welcomePc: l,
            loading: n,
            success: u,
            scoreInfo: h,
            finish: r,
            fail: d,
            blank: p,
            gate: f,
            reload: i,
            lottery: s,
            verify: a,
            boxVideo: x,
            Illegal: _,
            choice2: De,
            choice3: I,
            fillWords3: E,
            pack3: D,
            qanda3: M,
            choice4: A,
            fillWords4: q,
            pack4: O,
            qanda4: k,
            choice5: L,
            fillWords5: U,
            pack5: V,
            qanda5: R,
            choice6: Me,
            fillWords6: ke,
            pack6: qe,
            qanda6: Ae,
            pack7: W,
            pack8: z,
            pack9: G,
            pack11: se,
            pack12: Re,
            choice7: $,
            qanda7: F,
            fillWords7: Q,
            choice8: N,
            qanda8: K,
            fillWords8: j,
            choice9: H,
            qanda9: X,
            fillWords9: Y,
            choice10: J,
            qanda10: te,
            fillWords10: Z,
            pack10: ee,
            choice11: oe,
            qanda11: ne,
            fillWords11: ie,
            choice12: Oe,
            qanda12: Le,
            choice13: ae,
            qanda13: re,
            fillWords13: ce,
            pack13: le,
            choice14: ue,
            qanda14: he,
            fillWords14: de,
            pack14: pe,
            choice15: fe,
            qanda15: me,
            fillWords15: _e,
            pack15: xe,
            choice16: ge,
            qanda16: ve,
            fillWords16: we,
            pack16: be,
            choice17: ye,
            qanda17: Be,
            fillWords17: Ce,
            pack17: Pe,
            choice18: Se,
            qanda18: Te,
            fillWords18: Ie,
            pack18: Ee,
            welcome74301: Ot,
            welcome67392: qt,
            welcome67778: kt,
            welcome63473: At,
            prizeShow63011: Mt,
            welcome63011: Pt,
            bgmControl63011: St,
            myInfo63011: Tt,
            myPrize63011: It,
            choice63011: Et,
            success63011: Dt,
            choice57387: Ct,
            welcome37913: wt,
            choice37913: bt,
            jigsaw37913: yt,
            success37913: Bt,
            choice21041: Ue,
            success21309: $e,
            welcome22582: Fe,
            success22582: Qe,
            welcome22993: We,
            choice22993: Ne,
            qanda22993: Ke,
            choice56861: Ve,
            success24398: He,
            success25422: Ge,
            success26321: Xe,
            welcome32829: Ye,
            welcome32975: Je,
            choice32975: Ze,
            success32975: et,
            success32145: tt,
            welcome34257: ot,
            success35665: nt,
            choice19842: it,
            success35989: st,
            success36814: at,
            qanda36777: rt,
            success37717: ct,
            success38336: lt,
            welcome39021: ut,
            success40158: ht,
            success41386: dt,
            success41491: pt,
            success41803: ft,
            welcome45179: mt,
            choice45179: _t,
            success45179: xt,
            choice59645: je,
            success59645: ze,
            fillWords53255: gt,
            success53255: vt,
            choice77678: Lt,
            welcome84225: Rt,
            choice84225: Ut,
            success84225: Vt,
            choice84478: $t,
            welcome86496: Ft,
            success88538: Qt,
            welcome89426: Wt,
            success95099: Nt,
            choice95315: Kt,
            welcome94917: jt,
            choice99770: zt,
            choice100467: Ht,
            pack100467: Gt,
            scoreInfo100467: Xt,
            success100467: Yt,
            welcome100467: Jt,
            scoreInfo100777: Zt,
            welcome103330: eo,
            success103715: to,
            success106328: oo,
            welcome104129: no,
            welcome105606: io,
            scoreInfo105606: so,
            choice105606: ao,
            welcome109067: ro,
            choice109067: co,
            welcome57500: ho,
            choice57500: lo,
            success57500: uo,
            welcome111544: po,
            choice111544: fo,
            success111544: mo,
            welcome115238: _o,
            welcome115777: xo,
            choice116098: go,
            qanda116098: vo,
            choice119631: wo,
            welcome119754: bo,
            success122132: yo,
            choice122935: Bo,
            welcome122710: Co,
            choice122710: Po,
            qanda122710: So,
            choice124112: To,
            lottery123976: Io,
            lottery125488: Eo,
            whacMole131773: Do,
            success131773: Mo,
            welcome131917: Ao,
            success130738: ko,
            scoreInfo130737: qo,
            welcome129896: Oo,
            qanda132664: Lo,
            scoreInfo132900: Ro,
            success133794: Uo,
            scoreInfo133794: Vo,
            welcome133918: $o,
            qanda134236: Fo,
            welcome133819: Qo,
            welcome135079: Wo,
            scoreInfo134108: No,
            welcome135756: Ko,
            choice135756: jo
        },
        Ho = [];
        Ho[1] = {
            type: "qanda"
        },
        Ho[2] = {
            type: "choice"
        },
        Ho[5] = {
            type: "choice"
        },
        Ho[4] = {
            type: "jigsaw"
        },
        Ho[6] = {
            type: "dice"
        },
        Ho[7] = {
            type: "fillWords"
        },
        Ho[99] = {
            type: "success"
        },
        Ho[100] = {
            type: "scoreInfo"
        },
        Ho[0] = {
            type: "welcome"
        },
        Ho[3] = {
            type: "choice"
        },
        Ho[8] = {
            type: "card"
        },
        Ho[10] = {
            type: "vote"
        },
        Ho[11] = {
            type: "findmost"
        },
        Ho[12] = {
            type: "whacMole"
        },
        Ho[13] = {
            type: "pack"
        },
        e.exports = {
            Games: zo,
            GameTypes: Ho
        }
    },
    xsGU: function(e, t, o) {
        e.exports = o.p + "static/img/illegal.9ce321a.png"
    }
},
["NHnr"]);