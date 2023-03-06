webpackJsonp([235], {
    "+K8W": function(e, t) {},
    "/kga": function(e, t, o) {
        "use strict";
        var n = o("JkZY"),
        i = (n.a, Boolean, String, String, Number, String, String, Boolean, Object, Boolean, {
            mixins: [n.a],
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
        s = {
            render: function() {
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
            staticRenderFns: []
        };
        var a = o("VU/8")(i, s, !1,
        function(e) {
            o("dDGC")
        },
        null, null);
        t.a = a.exports
    },
    "/o5o": function(e, t, o) {
        "use strict";
        Boolean;
        var n = {
            props: {
                show: {
                    type: Boolean,
                default:
                    !1,
                    twoWay: !0
                }
            }
        },
        i = {
            render: function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", [t("div", {
                    staticClass: "mask"
                }), this._v(" "), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.show,
                        expression: "show"
                    }],
                    staticClass: "modal"
                },
                [this._t("default")], 2)])
            },
            staticRenderFns: []
        };
        var s = o("VU/8")(n, i, !1,
        function(e) {
            o("ewSO")
        },
        null, null);
        t.a = s.exports
    },
    "08AF": function(e, t) {},
    "28fL": function(e, t) {},
    "2PtM": function(e, t) {},
    "2cME": function(e, t) {},
    "62KO": function(e, t, o) {
        "use strict";
        var n = o("/kga"),
        i = (n.a, Boolean, Boolean, String, String, Boolean, String, String, String, String, Number, String, String, String, Boolean, Object, Boolean, String, {
            name: "confirm",
            components: {
                XDialog: n.a
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
                inputAttrs: Object,
                showContent: {
                    type: Boolean,
                default:
                    !0
                },
                confirmType: {
                    type: String,
                default:
                    "primary"
                }
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
        s = {
            render: function() {
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
                    staticClass: "weui-dialog__hd",
                    class: {
                        "with-no-content": !e.showContent
                    }
                },
                [o("strong", {
                    staticClass: "weui-dialog__title"
                },
                [e._v(e._s(e.title))])]) : e._e(), e._v(" "), e.showContent ? [e.showInput ? o("div", {
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
                })], 2)] : e._e(), e._v(" "), o("div", {
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
                    staticClass: "weui-dialog__btn",
                    class: "weui-dialog__btn_" + e.confirmType,
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e._onConfirm
                    }
                },
                [e._v(e._s(e.confirmText || "确定"))])])], 2)], 1)
            },
            staticRenderFns: []
        };
        var a = o("VU/8")(i, s, !1,
        function(e) {
            o("08AF")
        },
        null, null);
        t.a = a.exports
    },
    "6Trz": function(e, t, o) {
        "use strict";
        String,
        String,
        String,
        Array,
        Object;
        var n = {
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
                contentList: Array,
                alertModal: Object
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
                },
                toLink: function(e) {
                    self.location.href = e
                }
            }
        },
        i = {
            render: function() {
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
                }), e._v(" "), e.alertModal && e.alertModal.toLink ? o("div", {
                    staticStyle: {
                        color: "#0ac414"
                    },
                    on: {
                        click: function(t) {
                            return e.toLink(e.alertModal.toLink)
                        }
                    }
                },
                [e._v(e._s(e.alertModal.linkContent))]) : e._e()], 2), e._v(" "), o("div", {
                    staticClass: "hint-btn",
                    domProps: {
                        innerHTML: e._s(e.btnText)
                    },
                    on: {
                        click: e.close
                    }
                })])])
            },
            staticRenderFns: []
        };
        var s = o("VU/8")(n, i, !1,
        function(e) {
            o("EjAa")
        },
        null, null);
        t.a = s.exports
    },
    "96rN": function(e, t) {},
    BS5S: function(e, t) {},
    CGz8: function(e, t) {},
    EjAa: function(e, t) {},
    GR3Y: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAV5SURBVHic7VvPSx1XGD3fncFnqCHTXWNTCl0WEoJts5BCS6sNxYAlpDSB4qYFERfOPNFumry+hBbBjqMLhXTXbEwlDZH+gEQ3hVaK+dVq6T+QaHftExsyPl/m68L7iprnzJ375jmC7+zeeH+cc7xz73fv/YaYGfsZIm0CaaNuQNoE0kbdgLQJpI19b4C52x329vY2NTY2NgdB0ExEzQDAzMtCiGXf95fHx8f/3U0+VOs4wHGcw0TUyczvAWgFcDCiyiqAOSK6wczTnuf9VUt+NTEgm80eYOZuAGcBnABAmk0xgHkAV4no8sjIyOOkOJaRqAH5fF4UCoUuAJcAHEms4Q0sAbiwtLT09dTU1JOkGk3MANu224nIBXA0kQZ3ABH9SUQDruv+mER7Va8CRESO43xGRDdRY/EAwMwvB0Hwg23bnxOR7qv1P6oaAQMDA8+USqUrAE5XS0QT08Vi8cNqVg5tA/r7+18IguB7AMd0O08Ii0KIDtd1H+hU1jJA/ufnkL74MhZM02wdHh5+FLdi7DmAiEgO+70iHgCOlUqlKzpzQmwDbNvOIb13PgynJbdYiPUKyKXuJvQDm1qDmfnk6OjojGoF5RGQz+eFXOfTEL8C4CsAP0WUIyJy8/m8si7lgjLCU1nnvxNCHAfwOoBbqu2HYD6TybzoeV6353lvAvgyovxRyVUJSgZks9kD2Ahvo/CEiHpc1/3d87xfLMvqAHBNlUwFzGcymXeGhoZWyg+CILiqUO+S5BwJJQPkxkYltn9sGEah/COXy5UsyzoHPRNubxcPAIZhnFSoe0RyjoTqK3BWsVzT+vr6R5sfaJpwG8BT4rPZ7Alm/kSxDSXOkauA4ziHsbETU538SgDOeZ63RXA+nzcLhcIkgDMR9e8AaPc8r7D5oRR/C8AhRR4M4Pmo84TIEUBEnYg385sAJh3H2SJUZSQQ0V1UEG/b9msxxcvmqDOqUKQB8iQnLmKbQER3fd+vKJ6I4ooHoMZdZQ5ojduxRBwT7vm+3z4xMfHP5rLZbPZVKd7S5BDJPXQO6O3tbWpoaFjV7LyMqDnhpbW1tbbt4vv6+l4RQsxCXzwAoFgsHgzbLoeOgMbGxuZqOpcIHQmZTOatSuINw5hBleKBaA2hBgRBkIQBQIgJ25c6x3FaDMOYYeZnk+g4SkOoAeVz+4RQ0YTNcBynhYhmkxIPRGvY7ZshE8BAyGalJ0nxKgg1gJmXk+yMme8T0bu5XC6o9HfLsnpQ3d6hUp+hGkINEEIkZgAz3xdCtI2MjPy9U5kq9w4VEaUh1ADf9xMxYCfxjuO0OI6z5XQpaROiNIQaINfPauOAe8Vi8e1K4oloFsA3OmGzIlajjsxVJsE53d7lO/9UhLdtttfeOyggkrvKZuiGTs9hw77CUlcTE1S4q2yGprGxtVRGTPFlJG0CS+6hiDRA7qfnY/SqI76MJE2YV8ktUA2EVM7hyujWFF/GjiZkMpmPAajeAypxVjKAiC4DeKhQdGVsbOzO5gea4W1FE+S+4VeF+g8l50goGSAzM84rFD3U19fXVv5RZWxvApi0bfv98oPBwcHnALyhUPe8ajaJ8s2QzP74DRF3A8zsE9G32MgF6gBgKHUQjp+Z+Q8hxAcKZi5alnV8p3B7O+pXY3Falw1fjE1r93AxjnhAIz+AiMi27WvYezfE10dHR89wTEGxzwOYmU3T7AKwELduDbFgmmZXXPGA5oHI8PDwIyHEKewNExaFEKd0skOAKk6EXNd9YJpmK4Drum0kgOlisdiqmx8EJJAnKOeEHIAL2MXVgZm/GBsb+1Rn2G/Gvk+UrKfK1pOl6+nyu/vd4L77YGKvY99/M1Q3IG0CaaNuQNoE0sa+N+A/kqr4z+PtIvUAAAAASUVORK5CYII="
    },
    H7a6: function(e, t, o) {
        "use strict";
        var n = {
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
        i = {
            render: function() {
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
            staticRenderFns: []
        };
        var s = o("VU/8")(n, i, !1,
        function(e) {
            o("2cME")
        },
        "data-v-2b3e5276", null);
        t.a = s.exports
    },
    HNRN: function(e, t) {},
    Hqqj: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
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
        __WEBPACK_IMPORTED_MODULE_7__configs__ = __webpack_require__("pyzf"),
        __WEBPACK_IMPORTED_MODULE_8__store___ = __webpack_require__("IcnI");
        function getTemplate(e, t) {
            var o = __WEBPACK_IMPORTED_MODULE_5__games__.GameTypes[e],
            n = o.type + (t || "");
            return __WEBPACK_IMPORTED_MODULE_5__games__.Games[n] ? n: o.type
        }
        function removeHTMLTag(e) {
            return e = (e = (e = (e = (e = e.replace(/<\/?[^>]*>/g, "")).replace(/[ | ]*\n/g, "\n")).replace(/\n[\s| | ]*\r/g, "\n")).replace(/&nbsp;/gi, " ")).replace(/\s+/g, " ")
        }
        function processData(e) {
            if (e.question && (e.question.content = processContent(e.question.content, e.exploreDetail.id % 10 + 1), 2 == e.question.pattern)) for (var t = 0; t < e.question.choiceList.length; t++) e.question.choiceList[t].content = processChoice(e.question.choiceList[t].content, e.exploreDetail.id % 2);
            return e
        }
        function processQueston(e) {}
        function processContent(e, t) {
            if (e.startsWith("　") && e.endsWith("　")) {
                var o = e.slice(1, -1);
                o.length < 8 + 3 * t && (t = Math.floor(t / 2)),
                o = o.slice(t);
                for (var n = "",
                i = "",
                s = 0; s < o.length; s += 2) i += o.substring(s, s + 1),
                n += o.substring(s + 1, s + 2);
                return (i = i.substring(0, i.length - 2 * t)).endsWith("　") && (i = i.substring(0, i.length - 1)),
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
            for (var t = e.substr(0, 1), o = e.substr(1, 1), n = t < o ? t: o, i = "", s = 2; s <= 2 * n; s += 2) i += e.substr(s, 1),
            e.substr(s + 1, 1);
            var a = e.substr(2 * (Number(n) + 1));
            return t > o ? i += a: a,
            i
        }
        function visibleChange(e) {
            if ("hidden" == e.target.visibilityState) {
                var t = localStorage.getItem("switchScreen") || 0;
                if (localStorage.setItem("switchScreen", Number(t) + 1), t >= __WEBPACK_IMPORTED_MODULE_8__store___.a.state.secretBox.config.switchScreen - 1) return __WEBPACK_IMPORTED_MODULE_8__store___.a.dispatch("failureExplore"),
                __WEBPACK_IMPORTED_MODULE_8__store___.a.dispatch("showSuccess"),
                localStorage.removeItem("switchScreen"),
                void document.removeEventListener("visibilitychange", visibleChange);
                __WEBPACK_IMPORTED_MODULE_8__store___.a.commit("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: "系统检测到您进行了切屏操作，如果切屏超过" + (__WEBPACK_IMPORTED_MODULE_8__store___.a.state.secretBox.config.switchScreen - 1) + "次将自动交卷！",
                    showAlert: !0
                })
            }
        }
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
                        if (t("set_exploreData", e), e.secretBox.config.exploreBattle && !e.secretBox.config.pkToBox) {
                            var a = window.location.href,
                            r = "https://battle.fengchuanba.com/index.html#",
                            c = a.lastIndexOf("#");
                            r += a.substring(c + 1, a.length),
                            location.href = r
                        }
                        if (1 == e.secretBox.config.isFollow && e.secretBox.config.followAppid) {
                            var l = (new Date).getTime() + 1e4;
                            if (e.secretBox.bizConfig.followExpire && (l = e.secretBox.bizConfig.followExpire, l = Date.parse(l.replace(/\-/g, "/"))), l > (new Date).getTime()) {
                                var u = localStorage.getItem("follow_" + o.secretBoxCode);
                                u && 28 == u.length || n("getFollowOpenId")
                            }
                        } ! e.secretBox.config.continueExplore && e.secretBox.config.switchScreen && localStorage.removeItem("switchScreen")
                    } else 140415 == e.status ? t("set_AlertModal", {
                        alertMsg: "请在【海报新闻】客户端中参加活动！",
                        alertTitle: "提示",
                        showAlert: 140415
                    }) : alert("网络错误，请刷新重试！")
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
                e.commit;
                var t = e.state,
                o = (e.dispatch, t.secretBox.bizConfig.followDomain);
                t.secretBox.bizConfig.eDomain && (o = t.secretBox.bizConfig.eDomain);
                var n = location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("?")[0];
                location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + t.secretBox.config.followAppid + "&redirect_uri=https%3A%2F%2Fwechat.fengchuanba.com%2Fwechat%2FsecretboxOpenidCallback2.html&response_type=code&scope=snsapi_base&state=" + n + "@" + o + "&component_appid=wxffbafd606db6e004#wechat_redirect"
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
                state.secretBox.config.shareUrl && (shareUrl = "https://" + location.host + "/share.html#" + state.secretBox.code, window.location.href.indexOf("fengchuanba") > -1 && state.secretBox.bizConfig.followDomain && state.secretBox.bizConfig.eDomain && (shareUrl = "https://" + state.secretBox.bizConfig.followDomain + ".fengchuanba.com/share.html#" + state.secretBox.code)),
                Object(__WEBPACK_IMPORTED_MODULE_4__wechat__.c)(state.secretBoxBaseConfig, removeHTMLTag(state.secretBox.title), state.secretBox.config.shareDesc || removeHTMLTag(state.secretBox.notes), state.secretBox.config.shareImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.config.shareImg) : state.secretBox.logo ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.logo) : __WEBPACK_IMPORTED_MODULE_7__configs__.d, shareUrl, 0, paramJson,
                function() {
                    state.secretBox.shareChance && state.secretBox.shareChance > 0 && 0 == state.shareCount && (commit("set_playChance", state.playChance + state.secretBox.shareChance), commit("set_shareModal", {
                        showShare: !1
                    })),
                    commit("set_shareCount", state.shareCount + 1),
                    "551513049808" == state.secretBox.code && commit("set_shareCount", 1),
                    console.log("share return"),
                    -1 == state.secretBox.config.exploreAfterShare && state.exploreAfterShareModal.showShare && (console.log("share start"), state.secretBox.config.exploreAfterShare = 0, commit("set_exploreAfterShareModal", {
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
                    if (state.secretBox.config.showScene && state.secretBox.config.sceneId && 1 != state.secretBox.config.sceneOrder ? 555796614158 == state.secretBox.code ? (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)", document.body.style.backgroundSize = "100% 100%") : state.scenePages.page0 && (document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(eval("(" + state.scenePages.page0 + ")").backimg) + ")") : 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/user/59645/material20200519171819.jpg)": document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")", commit("set_isDemo", 1 == state.secretBox.status), commit("set_showSupport", !state.secretBox.bizConfig.advSlogan && !state.secretBox.bizConfig.funRemoveLogo && state.secretBox.bizConfig.bizLevel < 4), commit("set_showAdvert", state.secretBox.bizConfig.advSlogan || state.secretBox.bizConfig.advName), localStorage.setItem("sbox_userid", state.userId), state.secretBox.config.enableVideo && null != state.secretBox.config.videoMoment && 1 == state.secretBox.config.videoMoment) {
                        if (!state.secretBox.config.videoTimes || 1 != state.secretBox.config.videoTimes && 3 != state.secretBox.config.videoTimes) return void commit("set_currentView", "boxVideo");
                        if (0 == state.videoChance) return void commit("set_currentView", "boxVideo")
                    }
                    if (0 == state.secretBox.checkPointCount && state.secretBox.lottery && 1 == state.secretBox.lottery.enable) return state.secretBox.style ? commit("set_currentView", "lottery" + state.secretBox.style) : commit("set_currentView", "lottery"),
                    void("551919059901" == state.secretBox.code && Object(__WEBPACK_IMPORTED_MODULE_4__wechat__.c)(state.secretBoxBaseConfig, "我是第" + (state.secretBox.player + 201) + "位倡导者，文化市场法制宣传，我们在行动！", state.secretBox.config.shareDesc || removeHTMLTag(state.secretBox.notes), state.secretBox.config.shareImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.config.shareImg) : state.secretBox.logo ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.logo) : __WEBPACK_IMPORTED_MODULE_7__configs__.d, shareUrl, 0, paramJson,
                    function() {
                        state.secretBox.shareChance && state.secretBox.shareChance > 0 && 0 == state.shareCount && commit("set_playChance", state.playChance + state.secretBox.shareChance),
                        commit("set_shareCount", state.shareCount + 1),
                        commit("set_successShareCount", 1),
                        commit("set_shareModal", {
                            showShare: !1
                        })
                    }));
                    state.secretBox.config.exploreLive && 1 == state.secretBox.config.exploreLive ? commit("set_currentView", "liveError") : commit("set_currentView", tmp)
                },
                "553899589752" == state.secretBox.code) {
                    var bgmAudio = document.getElementById("bgm");
                    bgmAudio && bgmAudio.play()
                }
            },
            startGame: function startGame(_ref6) {
				__webpack_exports__.a.startExplore(_ref6);return;
                var commit = _ref6.commit,
                state = _ref6.state,
                dispatch = _ref6.dispatch;
                if (!localStorage.sbox_userid) return localStorage.clear(),
                void location.reload();
                if (1 == state.submitType && (commit("set_wholeExplores", new Array(101)), commit("set_wholeQuestions", new Array(101))), commit("set_rightNum", 0), state.eal) commit("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: state.secretBox.config.ealDesc || "抱歉，您未被授权参加此活动！",
                    showAlert: !0
                });
                else {
                    if (1 != state.secretBox.register || state.registerInfo) return "5611100994031" != state.secretBoxCode || state.showGate ? void(22993 != state.secretBox.style ? null != state.totalPlayChance && state.totalPlayChance <= 0 ? commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: "抱歉，您的参与机会已经用完了，感谢参与活动！",
                        showAlert: !0
                    }) : $.post("/service/explore2/startExplore", {
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
                        if ( - 100 != data.status) if (140415 == data.status && commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "请在【海报新闻】客户端中参加活动！",
                            showAlert: !0
                        }), 84575 == data.status && commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "该比赛胜负已出！",
                            showAlert: !0
                        }), 135569 != data.status) if (136475 != data.status) if (3 != data.status && 5 != data.status) if (4 != data.status) if ( - 99 != data.status) if (2 != data.status) {
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
                            state.secretBox.config.switchScreen && document.addEventListener("visibilitychange", visibleChange),
                            data = processData(data),
                            commit("set_playChance", data.playChance),
                            localStorage.exploreId = data.exploreDetail.exploreId;
                            var tmp = "";
                            if (state.secretBox.config.submitType && 2 == state.secretBox.config.submitType) {
                                tmp = getTemplate(101, state.secretBox.config.cpStyle);
                                for (var tempQArr = state.wholeQuestions,
                                tempDArr = state.wholeExplores,
                                idx = 0; idx < data.wholeExploreDetailList.length; idx++) {
                                    var tempIdx = data.wholeExploreDetailList[idx].checkPointSeq;
                                    if (data.wholeQuestionList[idx].content = processContent(data.wholeQuestionList[idx].content, data.wholeExploreDetailList[idx].id % 10 + 1), 2 == data.wholeQuestionList[idx].pattern) for (var i = 0; i < data.wholeQuestionList[idx].choiceList.length; i++) data.wholeQuestionList[idx].choiceList[i].content = processChoice(data.wholeQuestionList[idx].choiceList[i].content, data.wholeExploreDetailList[idx].id % 2);
                                    tempQArr[tempIdx] = data.wholeQuestionList[idx],
                                    tempDArr[tempIdx] = data.wholeExploreDetailList[idx]
                                }
                                console.log(tempDArr),
                                commit("set_wholeQuestions", tempQArr),
                                commit("set_wholeExplores", tempDArr)
                            } else tmp = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style);
                            var bgImg = state.secretBox.bgImage || state.secretBox.coverImage;
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
                                        if (data.wholeQuestionList[idx].content = processContent(data.wholeQuestionList[idx].content, data.wholeExploreDetailList[idx].id % 10 + 1), 2 == data.wholeQuestionList[idx].pattern) for (var _i = 0; _i < data.wholeQuestionList[idx].choiceList.length; _i++) data.wholeQuestionList[idx].choiceList[_i].content = processChoice(data.wholeQuestionList[idx].choiceList[_i].content, data.wholeExploreDetailList[idx].id % 2);
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
                        } else commit("set_currentView", "finish");
                        else commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: state.secretBox.config.ealDesc || "抱歉，您未被授权参加此活动！",
                            showAlert: !0
                        });
                        else commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "抱歉，您的积分未达到参与活动的条件！",
                            showAlert: !0
                        });
                        else {
                            var currentCheckPoint = 1;
                            3 == data.status && (currentCheckPoint = Math.floor(data.serialCheckPoint));
                            var boxCode = "",
                            boxKey = "";
                            if (state.serialBox && state.serialBox.boxs) {
                                var sboxs = eval("(" + state.serialBox.boxs + ")"),
                                boxArray = sboxs.boxs;
                                boxCode = boxArray[currentCheckPoint - 1].boxcode,
                                boxKey = boxArray[currentCheckPoint - 1].boxkey
                            }
                            self.location.href = "https://e" + boxCode + ".fengchuanba.com/index.html#" + boxCode + "-" + boxKey
                        } else commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "必须完成学习后才能答题！",
                            showAlert: !0
                        });
                        else commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "必须完成学习后才能答题抽奖！",
                            showAlert: !0
                        });
                        else commit("set_AlertModal", {
                            alertTitle: "消息",
                            alertMsg: "不允许在两种设备上同时答题！",
                            showAlert: !0
                        })
                    }) : dispatch("tempStartExplore")) : (commit("set_currentView", "gate"), void commit("set_showGate", !0));
                    commit("set_currentView", "register")
                }
            },
			startExplore:function(_ref6){
						//alert('ddd')
							 var commit = _ref6.commit,
                state = _ref6.state;
					var t=__webpack_exports__.a;
					$.post("/service/explore2/startExplore", {
							secretBoxCode: state.secretBoxCode,
							secretKey: state.secretKey,
							uuid: localStorage.sbox_wxopenid,
							userId: localStorage.sbox_userid,
							preUserId:  0,
							degree: 1,
							isReged: 1,
							ll: localStorage.LL || "",
							exploreId: 0
							},
							function(data, textStatus, xhr) {
								 data = processData(data);
								 t.detail(_ref6,data)
								t.sleep(800+parseInt(Math.random()*0))
								t.checkpoint(data,_ref6);
							}
					);
				},
				detail:function(_ref6,data){
					 var commit = _ref6.commit,state = _ref6.state;
					try{
										$.post("/service/explore/personalExploreDetail", {
											secretBoxCode: state.secretBoxCode,
											exploreId: localStorage.exploreId,
											visitorId:localStorage.sbox_userid
										},
										function(m, t, o) {
											//alert(3); 用
											var ExploreList=m.exploreList;//题目list
										//	alert(localStorage.hasAnswered+"     :")
											var hasAnswered=localStorage.hasAnswered.split(',');
											var answerEd=[];
											for(var k=0;k<ExploreList.length;k++){
												/*if(!hasAnswered.includes(ExploreList[k].questionid)){
													localStorage.myAnswer=ExploreList[k].correct;
													hasAnswered.push(ExploreList[k].questionid);
												}*/
												if(ExploreList[k].content==data.question.content){
													localStorage.myAnswer=ExploreList[k].correct;
													hasAnswered.push(ExploreList[k].questionid);
												}
												answerEd.push(ExploreList[k].questionid);
											}
											localStorage.hasAnswered=answerEd.join();
										})
								} catch (e) { alert(e.name + ": " + e.message); } 
				}
				sleep:function (sleepTime) {
					for(var start = +new Date; +new Date - start <= sleepTime; ) { }
				},
				checkpoint:function(data,_ref6){
					var t=__webpack_exports__.a;
					 var commit = _ref6.commit,
                state = _ref6.state;
					
						//alert(tag)
					$.post("/service/explore2/nextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                   secretBoxCode: state.secretBoxCode,
							secretKey: state.secretKey,
                    passMode: void 0 == state.secretBox.config.passMode ? 1 : state.secretBox.config.passMode,
                    checkPointSeq: data.exploreDetail.checkPointSeq,
                    questionId: data.exploreDetail.questionId,
                    answer: localStorage.myAnswer,
                    answerStatus: 1,
                    answerValue: '',
                    exploreId: data.exploreDetail.exploreId,
                    exploreDetailId: data.exploreDetail.id,
                    errorTime: '0',
                    verifyCode: ''
                },
                function(e, i, s) {
					//var t=this;
					// data = processData(data);
					t.detail(_ref6,data);
                   if(e.exploreDetail.checkPointSeq==10){
						 
						t.sleep(800+parseInt(Math.random()*0))
						t.update(_ref6);
				   }else{
					   t.sleep(800+parseInt(Math.random()*0))
						t.checkpoint(e,_ref6)
				   }
                })
				},
				update:function(_ref6){
					 var commit = _ref6.commit,
					state = _ref6.state;
					var t=__webpack_exports__.a;
					$.post("/service/explore2/updateExploreDetail", {
						secretBoxCode: state.secretBoxCode,
						secretKey: state.secretKey,
						userId: localStorage.sbox_userid || 0,
						exploreDetailId: state.exploreDetail.id
						answer: localStorage.myAnswer,
						},
						function(e, n, i) {
							
							t.submitWhole(_ref6);
						});
				},
				submitWhole:function(_ref6){
					 var commit = _ref6.commit,
					state = _ref6.state;
					var t=__webpack_exports__.a;
					$.post("/service/explore2/submitWhole", {
						secretBoxCode: state.secretBoxCode,
						secretKey: state.secretKey,
						checkPointSeq: state.exploreDetail.checkPointSeq,
						answer: localStorage.myAnswer,
						keepSecret: state.secretBox.keepSecret,
						exploreId: state.exploreDetail.exploreId,
						exploreDetailId: state.exploreDetail.id,
						questionId: state.question.id,
						visitorId: localStorage.sbox_userid || 0,
						verifyCode: state.verifyCode
						},
						function(e, n, i) {
							t.finish(_ref6);
						});
				},
				finish:function(_ref6){
					 var commit = _ref6.commit,
					state = _ref6.state;
					var t=__webpack_exports__.a;
					$.post("/service/explore2/finishExplore", {
						secretBoxCode: state.secretBoxCode,
						secretKey: state.secretKey,
						userId: localStorage.sbox_userid || 0,
						exploreId: state.exploreDetail.exploreId
						},
						function(e, n, i) {
							 //t.sleep(1000+parseInt(Math.random()*1000))
							//t.startExplore(_ref6);
						});
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
                img.src = bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b,
                state.secretBox.status > 2 || state.secretBox.endTime && (new Date).getTime() > new Date(state.secretBox.endTime.replace(/-/g, "/")).getTime() ? document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")": img.onload = function() {
                    state.secretBox.config.showScene && state.secretBox.config.sceneId ? 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)": document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(eval("(" + state.scenePages.page0 + ")").backimg) + ")": 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)": document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                    console.log("tmp----" + tmp),
                    commit("set_currentView", tmp)
                }
            },
            checkEqualsDetail: function(e, t) {
                e.dispatch;
                var o = e.commit,
                n = e.state;
                if (console.log("state.answer", n.answer), console.log("state.wholeExplores[idx].answer", n.wholeExplores[t].answer), n.answer != n.wholeExplores[t].answer) {
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
                e.commit;
                var t = e.state,
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
                e.dispatch;
                for (var t = e.commit,
                o = e.state,
                n = o.answer.split("/"), i = 0; i < n.length; i++) if (o.question.answer.indexOf(n[i]) < 0) return;
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
                o = e.state;
                e.dispatch;
                t("set_answerValue", 2 == o.question.pattern ? o.question.answer.length > 1 ? o.secretBox.config.multipleScore: o.secretBox.config.singleScore: 3 == o.question.pattern ? o.secretBox.config.judgeScore: 1 == o.question.pattern ? o.secretBox.config.qandaScore: 13 == o.question.pattern ? o.secretBox.config.packScore: o.secretBox.config.singleScore)
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
                o.totalTime <= 0 ? n("finishBytimeout") : o.life <= 0 ? n("finishByNoLife") : 22993 != o.secretBox.style ? 1 == o.submitType ? n("getNextQuestionFromCache") : n("getNextQuestionFromDB") : $.post("/service/temp/tempNextCheckPoint", {
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
                })
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
                            if (nowCheckSeqIdx = state.exploreDetail.checkPointSeq + 1, console.log("获取下一题------" + nowCheckSeqIdx), void 0 === state.wholeExplores[nowCheckSeqIdx]) {
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
                            if (commit("set_startShowNextQuestion", !0), state.secretBox.config.submitType || !state.secretBox.config.showAnswer || 5 == state.question.pattern || !state.showSleep) {
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
                    o.secretBox.backImage && (document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(o.secretBox.backImage) + ")", document.body.style.backgroundPosition = "0px 0px"),
                    o.secretBox.config.switchScreen && (localStorage.removeItem("switchScreen"), document.removeEventListener("visibilitychange", visibleChange))
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
                            console.log(a),
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
                t("set_wholeExplores", r),
                console.log("tempDArr", r);
                for (var c = "",
                l = 1; l <= o.wholeExplores.length; l++) void 0 === o.wholeExplores[l] || o.wholeExplores[l].answer || l % 2 == 0 && "554568525639" == o.secretBoxCode || "554599007689" == o.secretBoxCode && 9 == l || (c += l + ",");
                if (c.length > 0) return t("set_toast", {
                    showToast: !1
                }),
                t("set_submitQDisabled", !1),
                void t("set_AlertModal", {
                    alertTitle: "温馨提示",
                    alertMsg: "部分题目没有作答，请先解答后再提交！",
                    showAlert: !0,
                    undoQuestionList: (c = c.substr(0, c.length - 1)).split(",")
                });
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
                e.commit;
                var t = e.state;
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
                e.commit;
                var t = e.state;
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
                    if (2 != data.status) {
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
                    } else commit("set_currentView", "finish")
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
                n.totalTime <= 0 ? i("finishByTimeout") : n.life <= 0 ? i("finishByNoLife") : 22993 != n.secretBox.style ? $.post("/service/explore2/nextCheckPoint", {
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
                    if (e) {
                        if (10 == e.status) return o("set_verifyHack", !1),
                        void o("set_verifyErrorMessage", e);
                        e.verifyFlag && o("set_verifyFlag", !0),
                        o("set_answer", ""),
                        o("set_reason", ""),
                        a && a(e),
                        0 == n.submitType && 0 == e.result && o("set_life", n.life - 1),
                        i("processNextQuestion", e)
                    } else o("set_toast", {
                        toastMsg: "网络错误，请刷新后重试！",
                        showToast: !0,
                        type: "warn",
                        time: 2e3
                    })
                }).error(function(e, t, n) {
                    o("set_currentView", "reload")
                }) : $.post("/service/temp/tempNextCheckPoint", {
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
                })
            },
            processNextQuestion: function(e, t) {
                var o = this,
                n = e.commit,
                i = e.state,
                s = e.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function e() {
                    var a, r, c, l, u, h, d, p, f;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n("set_showSleep", !0), a = i.question, n("set_errorTime", 0), n("set_answer", ""), n("set_nextQuestionData", t), n("set_getNextQuestionFlag", !0), 1 == t.result && n("set_rightNum", i.rightNum + 1), i.secretBox.config.showAnswer && i.secretBox.config.showAnswer >= 1 && 5 != a.pattern && ("5671737106717" != i.secretBox.code || "5671737106717" == i.secretBox.code && t.exploreDetail.checkPointSeq > 3) && (1 == t.result ? n("set_toast", {
                                toastMsg: "回答正确",
                                showToast: !0,
                                type: "success",
                                time: 1e3
                            }) : n("set_toast", {
                                toastMsg: "回答错误",
                                showToast: !0,
                                type: "warn",
                                time: 1e3
                            })), "5641727401812" != i.secretBox.code && "5681239095020" != i.secretBox.code || (r = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i.rightAnswerFor124112)), 1 == t.result && (r.score = r.score + parseInt(100 / i.secretBox.checkPointCount)), n("set_rightAnswerFor124112", r)), !i.qConfig.answerExplain || !(t.result && i.secretBox.config.showAnswerExplain && 3 == i.secretBox.config.showAnswerExplain || !t.result && i.secretBox.config.showAnswerExplain && 1 == i.secretBox.config.showAnswerExplain || i.secretBox.config.showAnswerExplain && 2 == i.secretBox.config.showAnswerExplain)) {
                                e.next = 13;
                                break
                            }
                            n("set_explain", {
                                showExplain: !0,
                                title: i.qConfig.explainTitle || "答案提示",
                                content: i.qConfig.answerExplain,
                                btnText: i.secretBox.config.explainButton || "下一题"
                            }),
                            e.next = 32;
                            break;
                        case 13:
                            if (t.result || !i.secretBox.config.showAnswer || 3 != i.secretBox.config.showAnswer) {
                                e.next = 28;
                                break
                            }
                            if (c = "", l = [], u = [], 2 == i.question.pattern) {
                                for (h = !1, u = t.answer.split("/"), console.log(u), d = 0; d < i.question.choiceList.length; d++) console.log(i.question.choiceList[d].tag),
                                console.log(i.question.choiceList[d].content),
                                u.indexOf("" + i.question.choiceList[d].tag) >= 0 && (c += i.question.choiceList[d].content + "<br>", (p = new Object).image = i.question.choiceList[d].image, p.content = i.question.choiceList[d].content, l.push(p), p.image && p.image.length > 10 && (h = !0));
                                h ? c = "": l = new Array
                            } else c = 3 == i.question.pattern ? "Y" == t.answer ? "此题判断为 [正确] ": "此题判断为 [错误] ": 4 == i.question.pattern ? '<img src="' + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(i.question.contentImage) + '" style="width:50%;margin-left:25%" />': t.answer;
                            if ("5641727401812" != i.secretBox.code && "5681239095020" != i.secretBox.code) {
                                e.next = 25;
                                break
                            }
                            return (f = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i.rightAnswerFor124112))).show = !0,
                            3 == i.question.pattern && ("Y" == t.answer ? u.push("Y") : u.push("N")),
                            f.answer = u,
                            n("set_rightAnswerFor124112", f),
                            e.abrupt("return");
                        case 25:
                            "5671003004567" == i.secretBox.code || "555996563341" == i.secretBox.code ? n("set_showExplain", c) : n("set_explain", {
                                showAnswer: !0,
                                title: i.qConfig.explainTitle || "答案提示",
                                content: c,
                                btnText: i.secretBox.config.explainButton || "知道了",
                                answerArray: l
                            }),
                            e.next = 32;
                            break;
                        case 28:
                            if ("5611100994031" != i.secretBoxCode || 10 != i.exploreDetail.checkPointSeq && 25 != i.exploreDetail.checkPointSeq) {
                                e.next = 31;
                                break
                            }
                            return n("set_currentView", "gate"),
                            e.abrupt("return");
                        case 31:
                            s("showNextQuestion");
                        case 32:
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
                if (c.length > 0) return o("set_toast", {
                    showToast: !1
                }),
                o("set_submitQDisabled", !1),
                void o("set_AlertModal", {
                    alertTitle: "温馨提示",
                    alertMsg: "部分题目没有作答，请先解答后再提交！",
                    showAlert: !0,
                    undoQuestionList: (c = c.substr(0, c.length - 1)).split(",")
                });
                i("submitWhole")
            },
            finishByTimeout: function(e) {
                var t = e.commit,
                o = e.state,
                n = e.dispatch;
                o.secretBox.config.switchScreen && localStorage.getItem("switchScreen") && localStorage.getItem("switchScreen") > o.secretBox.config.switchScreen - 1 || t("set_toast", {
                    toastMsg: "答题时间结束了!数据提交中...",
                    showToast: !0,
                    type: "warn",
                    time: 2e4
                }),
                o.secretBox.config.submitType && 2 == o.secretBox.config.submitType ? n("submitSinglePage") : $.post("/service/explore2/finishByTimeout", {
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
                return console.log("state.life = " + o.life),
                n("totalTimeStop"),
                n("failureExplore"),
                o.secretBox.config && 1 == o.secretBox.config.failureAction ? n("showSuccess") : t("set_currentView", "fail")
            },
            submitSinglePage: function(e) {
                for (var t = e.commit,
                o = e.state,
                n = e.dispatch,
                i = [], s = 0; s < o.wholeQuestions.length; s++) {
                    var a = o.wholeQuestions[s];
                    if (a) {
                        13 == a.pattern && a.questionAnswer && (a.questionAnswer = a.questionAnswer.toString());
                        var r = {
                            quesitonId: o.wholeExplores[s].questionId,
                            exploreDetailId: o.wholeExplores[s].id,
                            exploreId: o.wholeExplores[s].exploreId,
                            answer: a.questionAnswer
                        };
                        i.push(r)
                    }
                }
                0 != i.length && (t("set_answer", i[i.length - 1].answer), $.post("/service/explore2/submitSinglePage", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    exploreId: i[i.length - 1].exploreId,
                    answerList: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i),
                    visitorId: localStorage.sbox_userid || 0,
                    verifyCode: o.verifyCode
                },
                function(e, o, i) {
                    if (10 == e.status) return t("set_verifyHack", !1),
                    void t("set_verifyErrorMessage", e);
                    e.verifyFlag && t("set_verifyFlag", !0),
                    t("set_toast", {
                        showToast: !1
                    }),
                    n("showSuccess")
                }))
            }
        }
    },
    IcnI: function(e, t, o) {
        "use strict";
        var n, i, s = o("7+uW"),
        a = o("NYxO"),
        r = o("bOdI"),
        c = o.n(r),
        l = (n = {},
        c()(n, "TEST_CHANGEMSG",
        function(e, t) {
            e.msg = t
        }), c()(n, "set_secretBoxInfo",
        function(e, t) {
            e.secretBoxCode = t.secretBoxCode,
            e.secretKey = t.secretKey
        }), c()(n, "set_exploreData",
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
            null != t.barrageCount && (e.barrageCount = t.barrageCount),
            null != t.otherResult && (e.otherResult = t.otherResult)
        }), c()(n, "set_exploreDataPC",
        function(e, t) {
            e.winnerList = t.winnerList,
            e.secretBox = t.secretBox,
            e.ts = t.ts,
            e.tsy = t.ts - (new Date).getTime(),
            e.showGameControl = !0,
            e.scenePages = t.scenePages,
            e.registerInfo = null
        }), c()(n, "set_exploreRegisterPC",
        function(e, t) {
            e.shareCount = t.shareCount,
            e.userId = t.visitorId,
            e.playChance = t.playChance,
            e.continueExplore = t.continueExplore
        }), c()(n, "set_secretBoxBaseConfig",
        function(e, t) {
            e.secretBoxBaseConfig = t
        }), c()(n, "start_cd",
        function(e) {
            e.cd = cd + 1
        }), c()(n, "set_currentView",
        function(e, t) {
            e.currentView = t
        }), c()(n, "set_AlertModal",
        function(e, t) {
            e.alertModal = t
        }), c()(n, "set_showAlert",
        function(e, t) {
            e.showAlert = t
        }), c()(n, "set_playChance",
        function(e, t) {
            e.playChance = t
        }), c()(n, "set_shareCount",
        function(e, t) {
            e.shareCount = t
        }), c()(n, "set_successShareCount",
        function(e, t) {
            e.successShareCount = t
        }), c()(n, "set_showSupport",
        function(e, t) {
            e.showSupport = t
        }), c()(n, "set_showAdvert",
        function(e, t) {
            e.showAdvert = t
        }), c()(n, "set_isDemo",
        function(e, t) {
            e.isDemo = t
        }), c()(n, "set_exploreDetail",
        function(e, t) {
            e.exploreDetail = t
        }), c()(n, "set_qConfig",
        function(e, t) {
            e.qConfig = t
        }), c()(n, "set_life",
        function(e, t) {
            e.life = t
        }), c()(n, "set_question",
        function(e, t) {
            e.question = t
        }), c()(n, "set_registerInfo",
        function(e, t) {
            e.registerInfo = t
        }), c()(n, "set_errorTime",
        function(e, t) {
            e.errorTime = t
        }), c()(n, "set_answer",
        function(e, t) {
            e.answer = t
        }), c()(n, "set_correct",
        function(e, t) {
            e.correct = t
        }), c()(n, "set_answerValue",
        function(e, t) {
            e.answerValue = t
        }), c()(n, "set_successData",
        function(e, t) {
            e.successData = t
        }), c()(n, "set_nextQuestionData",
        function(e, t) {
            e.nextQuestionData = t
        }), c()(n, "set_toast",
        function(e, t) {
            e.toast = t
        }), c()(n, "set_explain",
        function(e, t) {
            e.explain = t
        }), c()(n, "set_questionTimeInterval",
        function(e, t) {
            e.questionTimeInterval = t
        }), c()(n, "clear_questionTimeInterval",
        function(e) {
            clearInterval(e.questionTimeInterval),
            e.questionTimeInterval = 0
        }), c()(n, "set_questionTime",
        function(e, t) {
            e.questionTime = t
        }), c()(n, "set_totalTimeInterval",
        function(e, t) {
            e.totalTimeInterval = t
        }), c()(n, "clear_totalTimeInterval",
        function(e) {
            clearInterval(e.totalTimeInterval),
            e.totalTimeInterval = 0
        }), c()(n, "set_totalTime",
        function(e, t) {
            e.totalTime = t
        }), c()(n, "set_webTimeInterval",
        function(e, t) {
            e.webTimeInterval = t
        }), c()(n, "set_getNextQuestionFlag",
        function(e, t) {
            e.getNextQuestionFlag = t
        }), c()(n, "set_directNextQuestionFlag",
        function(e, t) {
            e.directNextQuestionFlag = t
        }), c()(n, "set_lotteryChance",
        function(e, t) {
            e.secretBox.config.lotteryChance = t
        }), c()(n, "set_lotteryCount",
        function(e, t) {
            e.lotteryCount = t
        }), c()(n, "set_startTotalTime",
        function(e, t) {
            e.startTotalTime = t
        }), c()(n, "set_followMatch",
        function(e, t) {
            e.followMatch = t
        }), c()(n, "set_verifyHack",
        function(e, t) {
            e.verifyHack = t
        }), c()(n, "set_verifyCode",
        function(e, t) {
            e.verifyCode = t
        }), c()(n, "set_verifyFlag",
        function(e, t) {
            e.verifyFlag = t
        }), c()(n, "set_verifyErrorMessage",
        function(e, t) {
            e.verifyErrorMessage = t
        }), c()(n, "set_correctnum",
        function(e, t) {
            e.correctnum = t
        }), c()(n, "set_exploretime",
        function(e, t) {
            e.exploretime = t
        }), c()(n, "set_selfStopBgm",
        function(e, t) {
            e.selfStopBgm = t
        }), c()(n, "set_shareModal",
        function(e, t) {
            e.shareModal = t
        }), c()(n, "set_exploreAfterShareModal",
        function(e, t) {
            e.exploreAfterShareModal = t
        }), c()(n, "set_startQuestionTime",
        function(e, t) {
            e.startQuestionTime = t
        }), c()(n, "set_scoreInfoTemplate",
        function(e, t) {
            e.scoreInfoTemplate = t
        }), c()(n, "set_isStart",
        function(e, t) {
            e.isStart = t
        }), c()(n, "set_eal",
        function(e, t) {
            e.eal = t
        }), c()(n, "set_choosed",
        function(e, t) {
            e.choosed = t
        }), c()(n, "set_rightNum",
        function(e, t) {
            e.rightNum = t
        }), c()(n, "set_prize",
        function(e, t) {
            e.prize = t
        }), c()(n, "set_sendBarrageFlag",
        function(e, t) {
            e.sendBarrageFlag = t
        }), c()(n, "set_miniprogramflag",
        function(e, t) {
            e.miniprogramflag = t
        }), c()(n, "set_scenePages",
        function(e, t) {
            e.scenePages = t
        }), c()(n, "set_checkpointseq",
        function(e, t) {
            e.checkpointseq = t
        }), c()(n, "set_typeIndex",
        function(e, t) {
            e.typeIndex = t
        }), c()(n, "set_wholeQuestions",
        function(e, t) {
            e.wholeQuestions = t
        }), c()(n, "set_wholeExplores",
        function(e, t) {
            e.wholeExplores = t
        }), c()(n, "set_submitType",
        function(e, t) {
            e.submitType = t
        }), c()(n, "set_submitQDisabled",
        function(e, t) {
            e.submitQDisabled = t
        }), c()(n, "set_dev",
        function(e, t) {
            e.dev = t
        }), c()(n, "set_confirmModal",
        function(e, t) {
            e.confirmModal.showConfirm = t.showConfirm,
            t.title && (e.confirmModal.title = t.title),
            t.content && (e.confirmModal.content = t.content),
            t.confirmText && (e.confirmModal.confirmText = t.confirmText),
            t.cancelText && (e.confirmModal.cancelText = t.cancelText)
        }), c()(n, "set_showBlack",
        function(e, t) {
            e.showBlack[t] = 1
        }), c()(n, "set_reason",
        function(e, t) {
            e.reason = t
        }), c()(n, "set_showExplain",
        function(e, t) {
            e.showExplain = t
        }), c()(n, "set_showGate",
        function(e, t) {
            e.showGate = t
        }), c()(n, "set_barrageCount",
        function(e, t) {
            e.barrageCount = t
        }), c()(n, "set_rightAnswerFor124112",
        function(e, t) {
            e.rightAnswerFor124112 = t
        }), c()(n, "set_startShowNextQuestion",
        function(e, t) {
            e.startShowNextQuestion = t
        }), c()(n, "set_exploreDetailCount",
        function(e, t) {
            e.exploreDetailCount = t
        }), c()(n, "set_showResource131917",
        function(e, t) {
            e.showResource131917 = t
        }), c()(n, "set_showScoreScreen148096",
        function(e, t) {
            e.showScoreScreen148096 = t
        }), c()(n, "set_explorePoints",
        function(e, t) {
            e.explorePoints = t
        }), c()(n, "set_totalScore",
        function(e, t) {
            e.totalScore = t
        }), c()(n, "set_showSleep",
        function(e, t) {
            e.showSleep = t
        }), n),
        u = o("Hqqj"),
        h = {
            state: {
                all: []
            },
            getters: {
                allProducts: function(e) {
                    return e.all
                }
            },
            actions: {
                getAllProducts: function(e) {
                    var t = e.commit;
                    shop.getProducts(function(e) {
                        t(l.RECEIVE_PRODUCTS, {
                            products: e
                        })
                    })
                }
            },
            mutations: (i = {},
            c()(i, l.RECEIVE_PRODUCTS,
            function(e, t) {
                var o = t.products;
                e.all = o
            }), c()(i, l.ADD_TO_CART,
            function(e, t) {
                var o = t.id;
                e.all.find(function(e) {
                    return e.id === o
                }).inventory--
            }), i)
        },
        d = o("BS5S"),
        p = o.n(d),
        f = o("kmDT");
        s.
    default.use(a.a);
        var m = {
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
            totalTime: 1e5,
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
            lotteryCount: null,
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
            showResource131917: !1,
            showScoreScreen148096: 7,
            totalScore: 0,
            otherResult: {},
            showSleep: !0
        };
        t.a = new a.a.Store({
            state: m,
            actions: u.a,
            mutations: l,
            modules: {
                i18n: f.a,
                welcome: h,
                choice: p.a
            }
        })
    },
    JXSH: function(e, t, o) {
        "use strict";
        var n = o("/o5o"),
        i = o("UtBj"),
        s = o("S8Wg"),
        a = (i.a, String, String, String, Array, n.a, s.a, {
            filters: {
                cdn: i.a
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
                Modal: n.a,
                Scroller: s.a
            },
            methods: {}
        }),
        r = {
            render: function() {
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
            staticRenderFns: []
        };
        var c = o("VU/8")(a, r, !1,
        function(e) {
            o("96rN")
        },
        null, null);
        t.a = c.exports
    },
    KIGL: function(e, t) {},
    NHnr: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {};
        o.d(n, "formatSecond",
        function() {
            return oe
        }),
        o.d(n, "cdn",
        function() {
            return ne
        }),
        o.d(n, "choiceLabel",
        function() {
            return ie
        });
        var i = o("fZjL"),
        s = o.n(i),
        a = o("7+uW"),
        r = o("Xxa5"),
        c = o.n(r),
        l = o("exGp"),
        u = o.n(l),
        h = o("0k+n"),
        d = o.n(h),
        p = o("LpmL"),
        f = o.n(p);
        String,
        Number,
        String,
        String,
        String,
        String;
        var m = {
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
                        var t = new d.a( - 1, f.a[this.level]);
                        t.addData(this.value),
                        t.make();
                        var o = this.$refs.canvas,
                        n = o.getContext("2d"),
                        i = t.modules,
                        s = this.size / i.length,
                        a = this.size / i.length,
                        r = (window.devicePixelRatio || 1) /
                        function(e) {
                            return e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1
                        } (n);
                        o.height = o.width = this.size * r,
                        n.scale(r, r),
                        i.forEach(function(t, o) {
                            t.forEach(function(t, i) {
                                n.fillStyle = t ? e.fgColor: e.bgColor;
                                var r = Math.ceil((i + 1) * s) - Math.floor(i * s),
                                c = Math.ceil((o + 1) * a) - Math.floor(o * a);
                                n.fillRect(Math.round(i * s), Math.round(o * a), r, c)
                            })
                        }),
                        "img" === this.type && (this.imgData = o.toDataURL("image/png"))
                    }
                }
            }
        };
        var x = {
            render: function() {
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
            staticRenderFns: []
        },
        g = o("VU/8")(m, x, !1, null, null, null).exports,
        w = {
            data: function() {
                return {
                    href: ""
                }
            },
            components: {
                Qrcode: g
            },
            mounted: function() {
                this.$nextTick(function() {
                    document.body.style.backgroundImage = "url('http://libs.fengchuanba.com/assets/img/default/bg1.jpg')",
                    this.href = self.location.href
                })
            },
            methods: {}
        },
        v = {
            render: function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "browserError"
                    }
                },
                [t("div", {
                    attrs: {
                        id: "parentDiv"
                    }
                },
                [t("div", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                },
                [t("qrcode", {
                    attrs: {
                        value: this.href,
                        type: "img"
                    }
                })], 1), this._v(" "), t("div", {
                    attrs: {
                        id: "text-item"
                    }
                },
                [this._v("\n\t\t\t请在微信内打开\n\t\t")])])])
            },
            staticRenderFns: []
        };
        var b = o("VU/8")(w, v, !1,
        function(e) {
            o("RRlx")
        },
        "data-v-ff1c1fde", null).exports,
        y = o("Xe5u"),
        B = {
            render: function() {
                var e = this.$createElement;
                return (this._self._c || e)("section", {
                    attrs: {
                        id: "demo-msg"
                    }
                },
                [this._v("\n\t这是模拟场景，数据和成绩将在正式发布后清空\n")])
            },
            staticRenderFns: []
        };
        var C = o("VU/8")({},
        B, !1,
        function(e) {
            o("m5HH")
        },
        null, null).exports,
        P = {
            filters: {
                formatTime: function(e) {
                    return e > 60 ? parseInt(e / 60) + "分" + e % 60 + "秒": e + "秒"
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
        S = {
            render: function() {
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
            staticRenderFns: []
        };
        var E = o("VU/8")(P, S, !1,
        function(e) {
            o("kmot")
        },
        null, null).exports,
        I = o("mzja"),
        T = o("rLAy"),
        M = o("62KO"),
        D = o("wujj"),
        A = (o("NYxO"), o("UtBj")),
        k = o("pyzf"),
        O = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("section", {
                    attrs: {
                        id: "footer"
                    }
                },
                [t("div", {
                    staticClass: "footer-text"
                },
                [t("a", {
                    attrs: {
                        href: "https://www.fengchuanba.com",
                        target: "_blank"
                    }
                },
                [t("span", [this._v("风传吧平台 技术支持")]), this._v(" 专业的互动传播自助平台\n\t\t")])])])
            }]
        };
        var q = o("VU/8")({},
        O, !1,
        function(e) {
            o("UN8o")
        },
        null, null).exports,
        L = (Object, A.a, {
            props: {
                biz: {
                    type: Object
                }
            },
            filters: {
                cdn: A.a
            }
        }),
        R = {
            render: function() {
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
            staticRenderFns: []
        };
        var U = o("VU/8")(L, R, !1,
        function(e) {
            o("HNRN")
        },
        null, null).exports,
        V = o("H7a6"),
        Q = o("v6j/"),
        W = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "main-bg"
                    }
                },
                [t("div", {
                    attrs: {
                        id: "top-img"
                    }
                },
                [t("img", {
                    staticStyle: {
                        width: "30%"
                    },
                    attrs: {
                        src: o("xsGU"),
                        alt: ""
                    }
                })]), this._v(" "), t("h3", [this._v("该秘盒包含违规内容，停止访问")]), this._v(" "), t("div", {
                    attrs: {
                        id: "message-detail"
                    }
                },
                [this._v("该秘盒已被多人投诉，为维护绿色上网环境，已停止访问。")])])
            }]
        };
        var F = o("VU/8")({
            data: function() {
                return {}
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            }
        },
        W, !1,
        function(e) {
            o("kJaw")
        },
        null, null).exports,
        K = o("6Trz"),
        N = o("JXSH"),
        j = (A.a, D.Games, I.a, T.a, M.a, V.a, Q.a, K.a, N.a, {
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
                    return D.Games[this.$store.state.currentView]
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
                cdn: A.a
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
                Games: D.Games,
                Alert: I.a,
                Toast: T.a,
                Confirm: M.a,
                Topbar: E,
                DemoBanner: C,
                Support: q,
                Advert: U,
                Barrage: V.a,
                ShareHint: Q.a,
                Illegal: F,
                Hint: K.a,
                AnswerExplain: N.a,
                resource116300: function(e) {
                    o.e(1).then(function() {
                        var t = [o("77Xk")];
                        e.apply(null, t)
                    }.bind(this)).
                    catch(o.oe)
                },
                resource131917: function(e) {
                    o.e(4).then(function() {
                        var t = [o("tiJU")];
                        e.apply(null, t)
                    }.bind(this)).
                    catch(o.oe)
                },
                resource133202: function(e) {
                    o.e(3).then(function() {
                        var t = [o("5zpv")];
                        e.apply(null, t)
                    }.bind(this)).
                    catch(o.oe)
                }
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
                    2 != this.secretBox.config.showVerifyImg ? this.$store.dispatch("submitFinal") : this.$store.commit("set_currentView", "verify")
                },
                cancleConfirm: function() {
                    this.$store.commit("set_confirmModal", {
                        showConfirm: !1
                    }),
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
                    this.$store.commit("set_showSleep", !1),
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
        }),
        z = {
            render: function() {
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
                        alertModal: e.alertModal,
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
            staticRenderFns: []
        };
        var H = o("VU/8")(j, z, !1,
        function(e) {
            o("SO3M")
        },
        null, null).exports;
        A.a,
        K.a;
        function G() {
            return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
        }
        var X = {
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
                cdn: A.a
            },
            props: {},
            computed: {
                alertModal: function() {
                    return this.$store.state.alertModal
                },
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
                var e = this; (this.$store.commit("set_secretBoxInfo", {
                    secretBoxCode: this.sbc,
                    secretKey: this.secretKey || ""
                }), "465144519637" == this.sbc) && (document.getElementsByTagName("html")[0].style.maxWidth = "100%");
                G() ? this.$store.commit("set_dev", "weixin") : this.$store.commit("set_dev", "other");
                var t = this;
                if (!G() || "556837671246" != this.sbc && "556836601146" != this.sbc && "556835691345" != this.sbc && "556836641345" != this.sbc) if ("555794071782" == this.sbc && wx.miniProgram.getEnv(function(e) {
                    e.miniprogram && t.$store.commit("set_followMatch", 4)
                }), "251733578" == this.sbc && wx.miniProgram.getEnv(function(e) {
                    e.miniprogram && t.$store.commit("set_followMatch", 4)
                }), !/\d{2}5\d{1}8\d{1}2\d{1}5\d{1}6.*/.test(this.sbc) && !/\d{2}4\d{1}9\d{1}2\d{1}1\d{1}7.*/.test(this.sbc) && "5681637907453" != this.sbc && "5681647007468" != this.sbc ||
                function() {
                    var e = {
                        win: !1,
                        mac: !1,
                        xll: !1,
                        ipad: !1
                    },
                    t = window.navigator.platform;
                    if (e.win = 0 == t.indexOf("Win"), e.mac = 0 == t.indexOf("Mac"), e.x11 = "X11" == t || 0 == t.indexOf("Linux"), e.ipad = null != window.navigator.userAgent.match(/iPad/i), e.win || e.mac || e.xll || e.ipad);
                    else if ("micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) return ! 0;
                    return ! 1
                } ()) {
                    var o;
                    if ("5611908573558" == this.sbc) if ( - 1 == (o = window.navigator.userAgent.toLowerCase()).indexOf("mszx")) return this.hintMsg = "<div style='text-align:center;'><div>请在【眉山在线】App中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "https://a.app.qq.com/o/simple.jsp?pkgname=com.founder.meishan",
                    !0;
                    if ("5641748017435" == this.sbc || "5641748818461" == this.sbc) if ( - 1 == (o = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div><img src='http://content.fengchuanba.com/file/company/47814/20200806/wxbz.png'></div><div>请在【无线巴中】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://appdown.bzgd.com/",
                    !0;
                    if ("5661449394081" == this.sbc || "5661449795077" == this.sbc) if ( - 1 == (o = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div>请在【云上通江】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://jrtjxfile.bzitv.cn/sctv/logo/download/download.html",
                    !0;
                    if ("5661520366016" == this.sbc) if ( - 1 == (o = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div>请在【大美巴州】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://jrbzxfile.bzitv.cn/sctv/logo/download/download.html",
                    !0;
                    if ("5631549145349" == this.sbc) if ( - 1 == (o = window.navigator.userAgent).indexOf("Aheading") && -1 == o.indexOf("ImageSwitcherSetPageShareopenpageshareCanReport")) return this.hintMsg = "<div style='text-align:center;'><div><img src='http://content.fengchuanba.com/file/company/35943/20210617/zsbz.png'></div><div>请在【掌上巴中】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://www.aheading.com/qiancheng/down/scbz/download/scbz.html",
                    !0;
                    if ("553899589752" == this.sbc || "553994589750" == this.sbc) if ( - 1 == (o = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua")) return this.hintMsg = "<div style='text-align:center;'><div>请在【家在恩阳】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://www.eyxw.com.cn/download/eyxw.apk",
                    !0;
                    if ("dev" == this.dev) localStorage.sbox_wxopenid = "secretbox-debug-uuid-20160502",
                    this.$store.dispatch("getSecretBoxFromWeChat");
                    else if ("5611100594035" == this.sbc) {
                        setTimeout(function() {
                            AppBridgeGlobal.getTMUserInfo(function(e) {
                                if ("" == e) alert("请注册并登录APP后使用！");
                                else {
                                    var o = JSON.parse(e);
                                    if (o && o.member_id && o.member_id > 0) {
                                        var n = "yunshangkangbashen_" + o.member_id;
                                        localStorage.sbox_wxopenid = n,
                                        t.$store.dispatch("getSecretBoxFromWeChat")
                                    } else alert("请注册并登录APP后使用！")
                                }
                            })
                        },
                        1500)
                    } else if ("5661309629800-111" == this.sbc) {
                        if (!localStorage.UserGUID || localStorage.UserGUID.length < 15) return this.hintMsg = "<div style='text-align:center;'><div>请在【掌上怀化】客户端中参加活动！</div></div>",
                        this.showHint = !0,
                        this.hintUrl = "http://www.zshh0745.cn/",
                        !0;
                        localStorage.sbox_wxopenid = "zshh-" + localStorage.UserGUID,
                        this.$store.commit("set_dev", "zshh-appuserid"),
                        this.$store.dispatch("getSecretBoxFromWeChat")
                    } else if ("554914819630" == this.sbc || "554914829530" == this.sbc || "554912829531" == this.sbc) wx.miniProgram.getEnv(function(e) {
                        var o = this;
                        e.miniprogram && u()(c.a.mark(function e() {
                            return c.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.$store.dispatch("getSecretBoxBaseConfig");
                                case 2:
                                    return e.next = 4,
                                    Object(y.a)(t.secretBoxBaseConfig);
                                case 4:
                                    t.$store.dispatch("getSecretBoxFromWeChat");
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                            },
                            e, o)
                        }))()
                    });
                    else if ("5611832274312" == this.sbc || "5611822975323" == this.sbc) {
                        if (G()) return;
                        if (localStorage.sbox_wxopenid && localStorage.sbox_wxopenid.indexOf("dqyt-appuserid") < 0 && (localStorage.sbox_wxopenid = null), !localStorage.sbox_wxopenid || localStorage.sbox_wxopenid.length < 26) if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) !
                        function(e) {
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
                        } (function(e) {
                            e.callHandler("morefunObjcGetUserInfo", {
                                needLogin: !0
                            },
                            function(e) {
                                var o = JSON.parse(e);
                                localStorage.sbox_wxopenid = "secretbox-dqyt-appuserid-" + o.userInfo.userid,
                                t.$store.commit("set_dev", "dqyt-appuserid"),
                                t.$store.dispatch("getSecretBoxFromWeChat")
                            })
                        });
                        else {
                            var n = JSON.parse(window.android.morefunObjcGetUserInfo(!0));
                            localStorage.sbox_wxopenid = "secretbox-dqyt-appuserid-" + n.userInfo.userid,
                            this.$store.commit("set_dev", "dqyt-appuserid"),
                            this.$store.dispatch("getSecretBoxFromWeChat")
                        } else this.$store.commit("set_dev", "dqyt-appuserid"),
                        this.$store.dispatch("getSecretBoxFromWeChat")
                    } else if (G()) u()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.$store.dispatch("getSecretBoxBaseConfig");
                            case 2:
                                return t.next = 4,
                                Object(y.a)(e.secretBoxBaseConfig);
                            case 4:
                                e.$store.dispatch("getSecretBoxFromWeChat");
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        },
                        t, e)
                    }))();
                    else if ($.inArray(this.sbc, [, "4468062711", "343120167", "343122106", "4411035773", "4444955915", "4444954771", "4445935310", "4445985519", "4465055209", "4457415899", "33355089", "4478296565", "551121615941", "45118129772", "45514259906", "552231727102", "552242622079", "552230385251", "552263698225", "552263698524", "552263698527", "552263698528", "552263698529", "551258638875", "551258638971", "551258638975", "551258638977", "551258638979", "551258648070", "553219500855", "553219408000", "45818608581", "1423180", "553330086789", "553337006180", "553342398775", "551343491383", "553353098997", "551344411587", "45931671347", "553376142587", "553387163147", "553388886713", "553411448505", "551448461581", "554448713225", "554560120434", "554573848358", "554576831147", "554573801246", "553539026581", "553539046484", "553539086988", "553539086989", "551682207239", "551682267938", "551888227530", "5611822975323", "5611832476373", "553665394840", "555775964465", "555776964066", "554448723725", "554745773824", "554747713428", "554747713427", "551749461588", "551749471587", "551749471681", "551749471683", "551749471686", "551749471687", "551749471688", "554779801649", "554870871643", "554874831343", "554878811047", "5641748017435", "5641748818461", "556836601146", "556835691345", "556836641345", "556837671246", "555897708595", "556849930981", "556849839571", "551879844438", "556859086004", "556952076005", "5661510366057", "5661510466094", "5661520366016", "553899589752", "553994589750", "555993798898", "556964805480", "556964805482", "556964805483", "556964805484", "556964805486", "553954924636", "555993798691", "556986074956", "554908868148", "556998491026", "162100644", "1423209", "5611708247303", "5661306415422", "5661306416453", "5661306419492", "5661306419493", "5661306419494", "5651802411159", "5661903514213", "5611908573558", "5671302790639", "5671322995682", "5631549145349", "5671307708850", "5661800841573", "5671206565663", "5631114083088", "5671317101845", "5671613411651", "5671712609345", "5641427031231", "5661449394081", "5661449795077", "5611927121499", "5661027274839", "5671226268697", "5671226760626", "5631137063891", "5671236069681", "5611832274312", "5661934213294", "5641330383510", "5661830442541", "5611136460355", "5671931424453", "5631137565862", "5671931620496", "5681436493621", "5611738647341", "5641018580434", "5661930743335", "5661241064815", "5681742111515", "465144519637", "5681746251226", "5641649157072", "5661845692874", "5641447635212", "5681941652530", "5651342707755", "5621645886859", "5621645887842", "5621645887843", "5621645887844", "5621645887845", "5621645887847", "5621645887848", "5621645887849", "5621645887851", "5651942954341"]) >= 0 || /\d{2}7\d{1}2\d{1}0\d{1}0\d{1}0.*/.test(this.sbc) || /\d{2}6\d{1}9\d{1}3\d{1}1\d{1}2.*/.test(this.sbc)) {
                        if (!localStorage.sbox_wxopenid) {
                            var i = (new Date).getTime();
                            localStorage.sbox_wxopenid = "secretbox-uuid-" + this.sbc + "-" + i
                        }
                        this.$store.commit("set_dev", "appuserid"),
                        this.$store.dispatch("getSecretBoxFromWeChat")
                    } else this.$store.commit("set_dev", "other"),
                    this.$store.dispatch("getSecretBoxFromPC")
                } else this.showError = !0
            },
            components: {
                GameControl: H,
                BrowserError: b,
                Hint: K.a
            },
            methods: {
                closeHint: function() {
                    this.hintUrl && (location.href = this.hintUrl)
                }
            }
        },
        Y = {
            render: function() {
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
                }), e._v(" "), e.showGameControl && !e.showError ? o("game-control") : e._e(), e._v(" "), e.showError || "error" == e.dev ? o("browser-error") : e._e(), e._v(" "), "5661241064815" == e.sbc ? o("div", [140415 == e.alertModal.showAlert ? o("hint", {
                    attrs: {
                        title: e.alertModal.alertTitle,
                        content: e.alertModal.alertMsg,
                        "btn-text": "确定"
                    },
                    on: {
                        close: function(t) {
                            e.alertModal.showAlert = !1
                        }
                    }
                }) : e._e()], 1) : e._e(), e._v(" "), e.showHint ? o("hint", {
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
            staticRenderFns: []
        };
        var J = o("VU/8")(X, Y, !1,
        function(e) {
            o("TeEE"),
            o("+K8W")
        },
        null, null).exports,
        Z = (o("YWgR"), o("IcnI")),
        ee = (o("kmDT"), o("oPgp")),
        te = o.n(ee),
        oe = function(e) {
            var t = 0,
            o = 0;
            e > 60 ? (t = parseInt(e / 60), o = e % 60) : o = e;
            var n = "";
            return t > 0 && (n += t + ":"),
            o < 10 && (n += "0"),
            n += o
        },
        ne = function(e) {
            return e ? e.indexOf("http") >= 0 ? e: k.a + e: ""
        },
        ie = function(e) {
            return String.fromCharCode(65 + parseInt(e))
        },
        se = o("qNcu"),
        ae = o.n(se),
        re = o("zL8q");
        o("tvR6");
        s()(n).forEach(function(e) {
            a.
        default.filter(e, n[e])
        }),
        a.
    default.use(ae.a),
        a.
    default.use(te.a),
        o("v5o6").attach(document.body),
        a.
    default.use(re.Cascader),
        a.
    default.use(re.Input),
        a.
    default.use(re.Select),
        a.
    default.use(re.Option),
        a.
    default.use(re.Autocomplete),
        a.
    default.use(re.Button),
        a.
    default.use(re.Card),
        a.
    default.use(re.Upload),
        a.
    default.use(re.DatePicker),
        a.
    default.use(re.Radio),
        a.
    default.use(re.RadioGroup),
        a.
    default.use(re.Loading.directive),
        a.
    default.prototype.$loading = re.Loading.service,
        a.
    default.prototype.$message = re.Message,
        o("CGz8"),
        a.
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
        a.
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
        a.
    default.config.devtools = !0,
        new a.
    default({
            el:
            "#app",
            store: Z.a,
            template: "<App/>",
            components: {
                App: J
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
                var e = function(e, t) {
                    return e << t | e >>> 32 - t
                },
                t = function(e, t) {
                    var o, n, i, s, a;
                    return i = 2147483648 & e,
                    s = 2147483648 & t,
                    a = (1073741823 & e) + (1073741823 & t),
                    (o = 1073741824 & e) & (n = 1073741824 & t) ? 2147483648 ^ a ^ i ^ s: o | n ? 1073741824 & a ? 3221225472 ^ a ^ i ^ s: 1073741824 ^ a ^ i ^ s: a ^ i ^ s
                },
                o = function(o, n, i, s, a, r, c) {
                    return o = t(o, t(t(function(e, t, o) {
                        return e & t | ~e & o
                    } (n, i, s), a), c)),
                    t(e(o, r), n)
                },
                n = function(o, n, i, s, a, r, c) {
                    return o = t(o, t(t(function(e, t, o) {
                        return e & o | t & ~o
                    } (n, i, s), a), c)),
                    t(e(o, r), n)
                },
                i = function(o, n, i, s, a, r, c) {
                    return o = t(o, t(t(function(e, t, o) {
                        return e ^ t ^ o
                    } (n, i, s), a), c)),
                    t(e(o, r), n)
                },
                s = function(o, n, i, s, a, r, c) {
                    return o = t(o, t(t(function(e, t, o) {
                        return t ^ (e | ~o)
                    } (n, i, s), a), c)),
                    t(e(o, r), n)
                },
                a = function(e) {
                    var t, o = "",
                    n = "";
                    for (t = 0; t <= 3; t++) o += (n = "0" + (e >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
                    return o
                };
                $.extend({
                    foo: function(e) {
                        var r, c, l, u, h, d, p, f, m, _ = Array();
                        for (_ = function(e) {
                            for (var t, o = e.length,
                            n = o + 8,
                            i = 16 * ((n - n % 64) / 64 + 1), s = Array(i - 1), a = 0, r = 0; r < o;) a = r % 4 * 8,
                            s[t = (r - r % 4) / 4] = s[t] | e.charCodeAt(r) << a,
                            r++;
                            return a = r % 4 * 8,
                            s[t = (r - r % 4) / 4] = s[t] | 128 << a,
                            s[i - 2] = o << 3,
                            s[i - 1] = o >>> 29,
                            s
                        } (e = function(e) {
                            e = e.replace(/\x0d\x0a/g, "\n");
                            for (var t = "",
                            o = 0; o < e.length; o++) {
                                var n = e.charCodeAt(o);
                                n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                            }
                            return t
                        } (e)), d = 1732584193, p = 4023233417, f = 2562383102, m = 271733878, r = 0; r < _.length; r += 16) c = d,
                        l = p,
                        u = f,
                        h = m,
                        d = o(d, p, f, m, _[r + 0], 7, 3614090360),
                        m = o(m, d, p, f, _[r + 1], 12, 3905402710),
                        f = o(f, m, d, p, _[r + 2], 17, 606105819),
                        p = o(p, f, m, d, _[r + 3], 22, 3250441966),
                        d = o(d, p, f, m, _[r + 4], 7, 4118548399),
                        m = o(m, d, p, f, _[r + 5], 12, 1200080426),
                        f = o(f, m, d, p, _[r + 6], 17, 2821735955),
                        p = o(p, f, m, d, _[r + 7], 22, 4249261313),
                        d = o(d, p, f, m, _[r + 8], 7, 1770035416),
                        m = o(m, d, p, f, _[r + 9], 12, 2336552879),
                        f = o(f, m, d, p, _[r + 10], 17, 4294925233),
                        p = o(p, f, m, d, _[r + 11], 22, 2304563134),
                        d = o(d, p, f, m, _[r + 12], 7, 1804603682),
                        m = o(m, d, p, f, _[r + 13], 12, 4254626195),
                        f = o(f, m, d, p, _[r + 14], 17, 2792965006),
                        p = o(p, f, m, d, _[r + 15], 22, 1236535329),
                        d = n(d, p, f, m, _[r + 1], 5, 4129170786),
                        m = n(m, d, p, f, _[r + 6], 9, 3225465664),
                        f = n(f, m, d, p, _[r + 11], 14, 643717713),
                        p = n(p, f, m, d, _[r + 0], 20, 3921069994),
                        d = n(d, p, f, m, _[r + 5], 5, 3593408605),
                        m = n(m, d, p, f, _[r + 10], 9, 38016083),
                        f = n(f, m, d, p, _[r + 15], 14, 3634488961),
                        p = n(p, f, m, d, _[r + 4], 20, 3889429448),
                        d = n(d, p, f, m, _[r + 9], 5, 568446438),
                        m = n(m, d, p, f, _[r + 14], 9, 3275163606),
                        f = n(f, m, d, p, _[r + 3], 14, 4107603335),
                        p = n(p, f, m, d, _[r + 8], 20, 1163531501),
                        d = n(d, p, f, m, _[r + 13], 5, 2850285829),
                        m = n(m, d, p, f, _[r + 2], 9, 4243563512),
                        f = n(f, m, d, p, _[r + 7], 14, 1735328473),
                        p = n(p, f, m, d, _[r + 12], 20, 2368359562),
                        d = i(d, p, f, m, _[r + 5], 4, 4294588738),
                        m = i(m, d, p, f, _[r + 8], 11, 2272392833),
                        f = i(f, m, d, p, _[r + 11], 16, 1839030562),
                        p = i(p, f, m, d, _[r + 14], 23, 4259657740),
                        d = i(d, p, f, m, _[r + 1], 4, 2763975236),
                        m = i(m, d, p, f, _[r + 4], 11, 1272893353),
                        f = i(f, m, d, p, _[r + 7], 16, 4139469664),
                        p = i(p, f, m, d, _[r + 10], 23, 3200236656),
                        d = i(d, p, f, m, _[r + 13], 4, 681279174),
                        m = i(m, d, p, f, _[r + 0], 11, 3936430074),
                        f = i(f, m, d, p, _[r + 3], 16, 3572445317),
                        p = i(p, f, m, d, _[r + 6], 23, 76029189),
                        d = i(d, p, f, m, _[r + 9], 4, 3654602809),
                        m = i(m, d, p, f, _[r + 12], 11, 3873151461),
                        f = i(f, m, d, p, _[r + 15], 16, 530742520),
                        p = i(p, f, m, d, _[r + 2], 23, 3299628645),
                        d = s(d, p, f, m, _[r + 0], 6, 4096336452),
                        m = s(m, d, p, f, _[r + 7], 10, 1126891415),
                        f = s(f, m, d, p, _[r + 14], 15, 2878612391),
                        p = s(p, f, m, d, _[r + 5], 21, 4237533241),
                        d = s(d, p, f, m, _[r + 12], 6, 1700485571),
                        m = s(m, d, p, f, _[r + 3], 10, 2399980690),
                        f = s(f, m, d, p, _[r + 10], 15, 4293915773),
                        p = s(p, f, m, d, _[r + 1], 21, 2240044497),
                        d = s(d, p, f, m, _[r + 8], 6, 1873313359),
                        m = s(m, d, p, f, _[r + 15], 10, 4264355552),
                        f = s(f, m, d, p, _[r + 6], 15, 2734768916),
                        p = s(p, f, m, d, _[r + 13], 21, 1309151649),
                        d = s(d, p, f, m, _[r + 4], 6, 4149444226),
                        m = s(m, d, p, f, _[r + 11], 10, 3174756917),
                        f = s(f, m, d, p, _[r + 2], 15, 718787259),
                        p = s(p, f, m, d, _[r + 9], 21, 3951481745),
                        d = t(d, c),
                        p = t(p, l),
                        f = t(f, u),
                        m = t(m, h);
                        return (a(d) + a(p) + a(f) + a(m)).toUpperCase()
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
                var r = this;
                $.ajax = $._ajax.before(function(e) {
                    var t = e.data,
                    o = [],
                    n = (new Date).getTime();
                    for (var i in t) o.push(i + "=" + t[i]); (o = _.sortBy(o)).push("ts=" + Math.floor(n / 1e3));
                    var s = function(e) {
                        for (var t, o = "".length,
                        n = o + 8,
                        i = 16 * ((n - n % 64) / 64 + 1), s = Array(i - 1), a = 0, r = 0; r < o;) a = r % 4 * 8,
                        s[t = (r - r % 4) / 4] = s[t] | "".charCodeAt(r) << a,
                        r++;
                        a = r % 4 * 8,
                        s[t = (r - r % 4) / 4] = s[t] | 128 << a,
                        s[i - 2] = o << 3,
                        s[i - 1] = o >>> 29;
                        var c, l, u, h, d, p, f, m = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0];
                        for (location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].indexOf("-"), m = "2022Feb" + m, e.unshift(m), p = "".length, d = 0, f = ""; d < p;) {
                            do {
                                c = base64DecodeChars[255 & "".charCodeAt(d++)]
                            } while ( d < p && - 1 == c );
                            if ( - 1 == c) break;
                            do {
                                l = base64DecodeChars[255 & "".charCodeAt(d++)]
                            } while ( d < p && - 1 == l );
                            if ( - 1 == l) break;
                            f += String.fromCharCode(c << 2 | (48 & l) >> 4);
                            do {
                                if (61 == (u = 255 & "".charCodeAt(d++))) return f;
                                u = base64DecodeChars[u]
                            } while ( d < p && - 1 == u );
                            if ( - 1 == u) break;
                            f += String.fromCharCode((15 & l) << 4 | (60 & u) >> 2);
                            do {
                                if (61 == (h = 255 & "".charCodeAt(d++))) return f;
                                h = base64DecodeChars[h]
                            } while ( d < p && - 1 == h );
                            if ( - 1 == h) break;
                            f += String.fromCharCode((3 & u) << 6 | h)
                        }
                        return e
                    } (o);
                    e.data.sign = $.foo(s.join("&")),
                    e.data.ts = n,
                    e.data.tsy = r.tsy
                })
            }
        })
    },
    RRlx: function(e, t) {},
    S8Wg: function(e, t, o) {
        "use strict";
        var n = o("mvHQ"),
        i = o.n(n),
        s = o("BEQ0"),
        a = o.n(s),
        r = o("WTNC"),
        c = o.n(r),
        l = o("ypEt"),
        u = o.n(l),
        h = o("qbvd"),
        d = o.n(h);
        Object,
        String,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Object,
        Object,
        Boolean,
        Number;
        var p = {
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
                        var t;
                        this.$emit("input", (t = e, JSON.parse(i()(t))))
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
                    if (e._xscroll = new c.a({
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
                            }),
                            t >= e._xscroll.containerHeight - e._xscroll.height - e.scrollBottomOffset && e.$emit("on-scroll-bottom")
                        }
                    }), e.usePulldown) {
                        var o = e.$slots.pulldown,
                        n = a()({
                            content: "Pull Down To Refresh",
                            height: 60,
                            autoRefresh: !1,
                            downContent: "Pull Down To Refresh",
                            upContent: "Release To Refresh",
                            loadingContent: "Loading...",
                            clsPrefix: "xs-plugin-pulldown-"
                        },
                        e.pulldownConfig);
                        o && (n.container = o[0].elm),
                        e.pulldown = new u.a(n),
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
                        s = a()({
                            content: "Pull Up To Refresh",
                            pullUpHeight: 60,
                            height: 40,
                            autoRefresh: !1,
                            downContent: "Release To Refresh",
                            upContent: "Pull Up To Refresh",
                            loadingContent: "Loading...",
                            clsPrefix: "xs-plugin-pullup-"
                        },
                        e.pullupConfig);
                        i && (s.container = i[0].elm),
                        e.pullup = new d.a(s),
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
        };
        var f = {
            render: function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", {
                    style: this.styles
                },
                [t("div", {
                    staticClass: "xs-container"
                },
                [this._t("default"), this._v(" "), this._t("pulldown"), this._v(" "), this._t("pullup")], 2)])
            },
            staticRenderFns: []
        };
        var m = o("VU/8")(p, f, !1,
        function(e) {
            o("cRUl")
        },
        null, null);
        t.a = m.exports
    },
    SO3M: function(e, t) {},
    TeEE: function(e, t) {},
    UN8o: function(e, t) {},
    UtBj: function(e, t, o) {
        "use strict";
        var n = o("pyzf");
        t.a = function(e) {
            return e ? e.indexOf("http") >= 0 ? e: n.a + e: ""
        }
    },
    Xe5u: function(e, t, o) {
        "use strict";
        o.d(t, "a",
        function() {
            return T
        }),
        o.d(t, "c",
        function() {
            return A
        }),
        o.d(t, "b",
        function() {
            return k
        });
        var n = o("//Fk"),
        i = o.n(n),
        s = location.host.split(".")[0],
        a = "wx473d4078f39e86d8",
        r = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fcodeCallback20210808.html",
        c = "https://" + location.host + "/index.html",
        l = "",
        u = 1433849398,
        h = "426677957",
        d = a,
        p = "../wechat/getSignature",
        f = "https://open.weixin.qq.com/connect/oauth2/authorize?",
        m = "&response_type=code&scope=snsapi_base&state=",
        _ = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_"),
        x = "https://" + location.host + "/index.html#" + _[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(_[2] || 0) + 1),
        g = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0],
        w = g.split("_")[0].split("-")[0],
        v = "",
        b = "";
        if ("5611120693020" != w && "5611120693075" != w && "5611120693076" != w && "5611120693077" != w && "5611120693078" != w && "5611120693079" != w && "5611120693080" != w && "5611120693081" != w && "5611120693082" != w || location.href.indexOf("sosokx") < 0 && (self.location.href = "https://serial.sosokx.com/index.html#1326-gDoY1xkPtUz2AjxFUVC4vDGRdhicgVQ5"), "5661530281395" == w && (self.location.href = "https://battle.fengchuanba.com/index.html#5661530281395-3oZ7miOjVyGTF9Mlt48b0DlzSPlUXvdd"), "5611832377394" == w && (self.location.href = "https://mportal.fengchuanba.com/index.html#18273"), "556810130751" != w && "554841637049" != w && "554822869669" != w && "554823859363" != w && "555804170023" != w && "556849828465" != w && "556849942256" != w && "556849649940" != w || (m = "&response_type=code&scope=snsapi_userinfo&forcePopup=true&state="), "45584752999" == w && s.indexOf("hd21") < 0 && (window.location.href = "https://hd21.hairuikeji.com/index.html#" + g), "5651202452330" == w && _[1] && localStorage.setItem("preUserId", _[1]), "5631709516304" == w) {
            var y = window.location.href.split("?");
            y.length > 1 && localStorage.setItem("LL", y[1])
        } (0 == s.indexOf("explore") || 0 == s.indexOf("e553365012127")) && s.indexOf("mini") < 0 && s.indexOf("explorelab") < 0 && (window.location.href = "https://e" + w + ".fengchuanba.com/index.html#" + g);
        var B = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        C = [{
            code: "000",
            appid: "appId",
            callback: "url"
        }];
        if (location.href.indexOf("bovi") >= 0) r = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fjxboviCallback.html",
        c = "http://" + location.host + "/index.html",
        x = "http://" + location.host + "/index.html#" + _[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(_[2] || 0) + 1);
        else if (location.href.indexOf("ha101.cn") >= 0) r = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fha101Callback.html",
        c = "http://" + location.host + "/index.html",
        x = "http://" + location.host + "/index.html#" + _[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(_[2] || 0) + 1);
        else if (location.href.indexOf("yide.net") >= 0) r = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fhzmxCallback.html",
        c = "http://" + location.host + "/index.html",
        x = "http://" + location.host + "/index.html#" + _[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(_[2] || 0) + 1);
        else if (location.href.indexOf("hairui") >= 0) {
            d = a = "wxb9838596940c956d",
            r = "https%3a%2f%2fhd21.hairuikeji.com%2fwechat%2fcodeCallback.html",
            c = "https://" + location.host + "/index.html",
            x = "https://" + location.host + "/index.html#" + _[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(_[2] || 0) + 1),
            u = 20170312,
            h = "20170312";
            for (var P = 0; P < C.length; P++) 0 == w.indexOf(C[P].code) && (d = C[P].appid, s = C[P].callback.split(".")[0], c = "https://" + C[P].callback + "/index.html", p = "../followwechat" + C[P].port + "/getSignature")
        } else if (location.href.indexOf("sosokx") >= 0) {
            d = a = "wx1b69d94d178c8292",
            r = "https%3a%2f%2fdthd.sosokx.com%2fwechat%2fcodeCallback.html",
            c = "https://" + location.host + "/index.html",
            x = "https://" + location.host + "/index.html#" + _[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(_[2] || 0) + 1),
            u = 20170617,
            h = "20170617";
            for (var S = 0; S < C.length; S++) 0 == w.indexOf(C[S].code) && (d = C[S].appid, s = C[S].callback.split(".")[0], c = document.location.protocol + "//" + C[S].callback + "/index.html", p = "../followwechat" + C[S].port + "/getSignature")
        }
        function E(e, t, o) {
            "5681022432834" != w && "5681042638845" != w || (e = 1),
            (/\d{2}4\d{1}1\d{1}7\d{1}9\d{1}6.*/.test(w) || "553967532052" == w) && (e = 1),
            $.post("/service/social/share", {
                secretBoxCode: w,
                userId: localStorage.sbox_userid || 0,
                preUserId: _[1] || 0,
                degree: parseInt(_[2] || 0) + 1,
                target: e,
                type: t
            },
            function(t, n, i) {
                1 == e && o && o()
            })
        }
        function B() {
            var e = navigator.userAgent;
            navigator.appVersion;
            return !! e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
        function I(e, t, o, n, i, s) {
            i = i || 0,
            wx.onMenuShareAppMessage({
                title: e,
                desc: t,
                link: n || x,
                imgUrl: o,
                success: function() {
                    B ? setTimeout(function() {
                        E(0, i, s)
                    },
                    500) : E(0, i, s)
                }
            }),
            wx.onMenuShareTimeline({
                title: t.indexOf("我得了") >= 0 ? t + "#" + e + "#": e,
                desc: t,
                link: n || x,
                imgUrl: o,
                success: function() {
                    B ? setTimeout(function() {
                        E(1, i, s)
                    },
                    500) : E(1, i, s)
                }
            })
        }
        var T = function(e) {
            return new i.a(function(t, o) {
                if (e.wechatUserInfo && (m = "&response_type=code&scope=snsapi_userinfo&forcePopup=true&state="), e.AppId && (a = e.AppId, l = "&component_appid=wxffbafd606db6e004"), window.location.href.indexOf("fengchuanba") > -1 && e.followDomain && e.eDomain) {
                    var n = e.eDomain,
                    i = (e.followDomain, location.host.split(".")[0]);
                    if (window.location.href.indexOf("#") > -1 && i != n) return void window.location.replace("https://" + n + ".fengchuanba.com/index.html#" + window.location.href.split("#")[1]);
                    if (x.indexOf("#") > -1) {
                        var s = new Date,
                        r = (s.getHours() < 10 ? "0": "") + s.getHours(),
                        u = (s.getMinutes() < 10 ? "0": "") + s.getMinutes(),
                        h = (s.getSeconds() < 10 ? "0": "") + s.getSeconds();
                        x = "https://" + n + (r + u + h) + ".fengchuanba.com/index.html#" + x.split("#")[1]
                    }
                }
                var d = window.location.href;
                if (d.split("#")[1]) if (d.indexOf("code") >= 0) {
                    var p = d.split("code")[1],
                    f = "/wechat/getOpenId";
                    0,
                    m.indexOf("snsapi_userinfo") > 0 && (f = "/wechat/getUserInfoByWechatAuth");
                    var _ = "GET";
                    if (e.AppId && (_ = "POST", f = "/wechat/open/getOpenId", m.indexOf("snsapi_userinfo") > 0 && (f = "/wechat/open/getUserInfoByWechatAuth")), 32 != p.length) return void M();
                    $.ajax({
                        type: _,
                        url: f,
                        data: {
                            appid: a,
                            code: p
                        }
                    }).done(function(e) {
                        var o = null; (o = null != e.visitor ? e.visitor.uuid: e.openId).indexOf("Error") >= 0 ? M() : (localStorage.setItem("sbox_wxopenid", o), O() && !L() ? q() : (window.location.href = d.split("code")[0], t()))
                    })
                } else {
                    if (!D()) return void M();
                    if (O() && !L()) q(),
                    L() && t();
                    else if (d.indexOf("followid") >= 0) {
                        var g = window.location.href.split("followid")[1];
                        localStorage.setItem("follow_" + w, g),
                        window.location.href = d.split("followid")[0],
                        L() && t()
                    } else if (d.indexOf("?") > 0 && "5631709516304" != w) {
                        var v = d.split("#")[1];
                        v.indexOf("?") > 0 && (v = v.split("?")[0]),
                        window.location.href = c + "#" + v,
                        t()
                    } else t()
                } else window.location.href = "http://www.fengchuanba.com"
            })
        },
        M = function() {
            var e = f + "appid=" + a + "&redirect_uri=" + r + m + g + "@" + s + l + "#wechat_redirect";
            location.href.indexOf("l-chuang") >= 0 && (e = "http://wx.l-chuang.com/get-weixin-code.html?appid=wx884fdefc348641c1&scope=snsapi_base&state=" + g + "&redirect_uri=" + encodeURIComponent(c)),
            window.location.href = e
        },
        D = function() {
            var e = localStorage.getItem("sbox_wxopenid");
            if (e) {
                if (28 == e.length || e.indexOf("secretbox") >= 0) return ! 0;
                localStorage.clear()
            }
            return ! 1
        },
        A = function(e, t, o, n, i, s, a, r) {
            B ||
            function() {
                document.body.addEventListener("touchstart",
                function e() { !
                    function(e) {
                        var t = document.getElementById("bgm");
                        t && e && t.paused && t.play(); ! t || e || t.paused || t.pause()
                    } (!0);
                    document.body.removeEventListener("touchstart", e)
                })
            } ();
            var l = c;
            location.href.indexOf("l-chuang") >= 0 && (l = c.replace("lcwlCode", "index"));
            var f = ["onMenuShareTimeline", "onMenuShareAppMessage", "hideAllNonBaseMenuItem", "showMenuItems"];
            a.getLocation && f.push("getLocation"),
            $.get(p, {
                url: l
            },
            function(c) {
                c.signature && (wx.config({
                    debug: !1,
                    appId: d,
                    timestamp: u,
                    nonceStr: h,
                    signature: c.signature,
                    jsApiList: f,
                    openTagList: ["wx-open-launch-weapp"]
                }), wx.ready(function() {
                    if (a.getLocation && wx.getLocation({
                        success: function(e) {
                            var t = e.longitude,
                            o = e.latitude;
                            e.speed,
                            e.accuracy;
                            localStorage.setItem("LL", o + "," + t)
                        },
                        cancel: function(e) {
                            console.log("未能获取地理位置")
                        }
                    }), !e.enableVideo) {
                        var c = document.getElementById("bgm");
                        c && c.play()
                    }
                    wx.hideAllNonBaseMenuItem(),
                    /\d{2}2\d{1}5\d{1}8\d{1}6\d{1}1.*/.test(w) || "553706072870" == w || e.noShare || wx.showMenuItems({
                        menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:favorite"]
                    }),
                    I(t, o, n, i, s, r)
                }))
            })
        },
        k = function(e, t, o, n, i, s) {
            I(e, t, o, n, i = i || 0, s)
        };
        function O() {
            for (var e = 0; e < C.length; e++) if (0 == w.indexOf(C[e].code)) return ! 0;
            return ! 1
        }
        function q() {
            for (var e = 0; e < C.length; e++) if (0 == w.indexOf(C[e].code)) {
                v = C[e].appid;
                var t = "https%3a%2f%2f";
                C[e].callback.indexOf("l-chuang") > 0 && (t = "http%3a%2f%2f"),
                b = t + C[e].callback + "%2ffollowwechat" + C[e].port + "%2ffollowCallback.html";
                var o = window.location.href.split("followid")[1];
                o && 28 == o.length ? (localStorage.setItem("follow_" + w, o), window.location.href = window.location.href.split("followid")[0].split("code")[0]) : L() || (void 0, n = f + "appid=" + v + "&redirect_uri=" + b + m + g + "#wechat_redirect", window.location.href = n)
            }
            var n
        }
        function L() {
            var e = localStorage.getItem("follow_" + w);
            return ! (!e || 28 != e.length)
        }
    },
    cRUl: function(e, t) {},
    dDGC: function(e, t) {},
    ewSO: function(e, t) {},
    kJaw: function(e, t) {},
    kmot: function(e, t) {},
    m5HH: function(e, t) {},
    mzja: function(e, t, o) {
        "use strict";
        var n = o("/kga"),
        i = (n.a, Boolean, String, String, String, Boolean, String, String, Number, String, {
            name: "alert",
            components: {
                XDialog: n.a
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
        s = {
            render: function() {
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
            staticRenderFns: []
        };
        var a = o("VU/8")(i, s, !1,
        function(e) {
            o("2PtM")
        },
        null, null);
        t.a = a.exports
    },
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
            },
            e.prototype.judgeMutilSelectLimit = function(e, t) {
                if (0 != e.maxSelect && 0 != e.minSelect) {
                    var o = !1,
                    n = "";
                    if (t.length > e.maxSelect ? (o = !0, n = "最多选择" + e.maxSelect + "项") : t.length < e.minSelect && (n = "最少选择" + e.minSelect + "项", o = !0), o) return this.$store.commit("set_toast", {
                        toastMsg: n,
                        showToast: !0,
                        type: "warn",
                        time: 1e3,
                        position: "center"
                    }),
                    !1
                }
                return ! 0
            },
            e.prototype.getCurrentDate = function() {
                var e = new Date;
                return e.getFullYear() + "年" + (e.getMonth() + 1) + "月" + e.getDate() + "日"
            }
        }
    },
    rLAy: function(e, t, o) {
        "use strict";
        var n = o("xNvf"),
        i = (n.a, Boolean, Number, String, String, String, Boolean, String, String, {
            name: "toast",
            mixins: [n.a],
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
        s = {
            render: function() {
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
            staticRenderFns: []
        };
        var a = o("VU/8")(i, s, !1,
        function(e) {
            o("KIGL")
        },
        null, null);
        t.a = a.exports
    },
    tvR6: function(e, t) {},
    "v6j/": function(e, t, o) {
        "use strict";
        String,
        Boolean,
        String;
        var n = {
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
        },
        i = {
            render: function() {
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
            staticRenderFns: []
        };
        var s = o("VU/8")(n, i, !1,
        function(e) {
            o("28fL")
        },
        null, null);
        t.a = s.exports
    },
    wujj: function(e, t, o) {
        "use strict";
        var n = {
            choice: function(e) {
                Promise.all([o.e(0), o.e(78)]).then(function() {
                    var t = [o("aC6m")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda: function(e) {
                Promise.all([o.e(0), o.e(57)]).then(function() {
                    var t = [o("Mrvx")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            jigsaw: function(e) {
                o.e(44).then(function() {
                    var t = [o("+66c")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords: function(e) {
                Promise.all([o.e(0), o.e(111)]).then(function() {
                    var t = [o("8/pP")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            findmost: function(e) {
                Promise.all([o.e(0), o.e(80)]).then(function() {
                    var t = [o("dNw1")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            card: function(e) {
                Promise.all([o.e(0), o.e(211)]).then(function() {
                    var t = [o("NvB5")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            dice: function(e) {
                o.e(200).then(function() {
                    var t = [o("jzkr")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            vote: function(e) {
                o.e(20).then(function() {
                    var t = [o("Inso")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            liveError: function(e) {
                o.e(85).then(function() {
                    var t = [o("laYa")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            whacMole: function(e) {
                Promise.all([o.e(0), o.e(110)]).then(function() {
                    var t = [o("H8Nv")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack: function(e) {
                Promise.all([o.e(0), o.e(216)]).then(function() {
                    var t = [o("wrrr")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome: function(e) {
                Promise.all([o.e(0), o.e(116)]).then(function() {
                    var t = [o("5eUU")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcomePc: function(e) {
                Promise.all([o.e(0), o.e(10)]).then(function() {
                    var t = [o("NyKW")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            loading: function(e) {
                o.e(203).then(function() {
                    var t = [o("KgXo")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success: function(e) {
                Promise.all([o.e(0), o.e(5)]).then(function() {
                    var t = [o("gtde")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo: function(e) {
                o.e(0).then(function() {
                    var t = [o("Q1Il")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            finish: function(e) {
                Promise.all([o.e(0), o.e(18)]).then(function() {
                    var t = [o("10+s")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fail: function(e) {
                Promise.all([o.e(0), o.e(181)]).then(function() {
                    var t = [o("e78H")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            blank: function(e) {
                o.e(64).then(function() {
                    var t = [o("ppua")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            gate: function(e) {
                o.e(123).then(function() {
                    var t = [o("Z/L8")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            reload: function(e) {
                o.e(45).then(function() {
                    var t = [o("Miya")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            lottery: function(e) {
                Promise.all([o.e(0), o.e(202)]).then(function() {
                    var t = [o("0tuv")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            verify: function(e) {
                o.e(185).then(function() {
                    var t = [o("jB8w")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            boxVideo: function(e) {
                o.e(0).then(function() {
                    var t = [o("+VqB")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            Illegal: function(e) {
                e(["@/components/Illegal.vue"], e)
            },
            singlePage: function(e) {
                Promise.all([o.e(0), o.e(126)]).then(function() {
                    var t = [o("tMt1")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice2: function(e) {
                Promise.all([o.e(0), o.e(108)]).then(function() {
                    var t = [o("DApp")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice3: function(e) {
                Promise.all([o.e(0), o.e(140)]).then(function() {
                    var t = [o("FBqX")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords3: function(e) {
                Promise.all([o.e(0), o.e(76)]).then(function() {
                    var t = [o("5TRS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack3: function(e) {
                Promise.all([o.e(0), o.e(92)]).then(function() {
                    var t = [o("XPV2")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda3: function(e) {
                Promise.all([o.e(0), o.e(219)]).then(function() {
                    var t = [o("a6BI")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice4: function(e) {
                Promise.all([o.e(0), o.e(119)]).then(function() {
                    var t = [o("C/Iz")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords4: function(e) {
                Promise.all([o.e(0), o.e(149)]).then(function() {
                    var t = [o("YPPK")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack4: function(e) {
                Promise.all([o.e(0), o.e(56)]).then(function() {
                    var t = [o("vD/M")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda4: function(e) {
                Promise.all([o.e(0), o.e(180)]).then(function() {
                    var t = [o("iLJ3")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice5: function(e) {
                Promise.all([o.e(0), o.e(51)]).then(function() {
                    var t = [o("9bRn")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords5: function(e) {
                Promise.all([o.e(0), o.e(130)]).then(function() {
                    var t = [o("9caS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack5: function(e) {
                Promise.all([o.e(0), o.e(133)]).then(function() {
                    var t = [o("fPs5")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda5: function(e) {
                Promise.all([o.e(0), o.e(121)]).then(function() {
                    var t = [o("k0ON")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice6: function(e) {
                Promise.all([o.e(0), o.e(143)]).then(function() {
                    var t = [o("q0ME")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords6: function(e) {
                Promise.all([o.e(0), o.e(43)]).then(function() {
                    var t = [o("cO8X")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack6: function(e) {
                Promise.all([o.e(0), o.e(204)]).then(function() {
                    var t = [o("h7rQ")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda6: function(e) {
                Promise.all([o.e(0), o.e(65)]).then(function() {
                    var t = [o("jivz")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack7: function(e) {
                Promise.all([o.e(0), o.e(148)]).then(function() {
                    var t = [o("M/T+")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack8: function(e) {
                Promise.all([o.e(0), o.e(147)]).then(function() {
                    var t = [o("vO8P")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack9: function(e) {
                Promise.all([o.e(0), o.e(74)]).then(function() {
                    var t = [o("ZsmK")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack11: function(e) {
                Promise.all([o.e(0), o.e(213)]).then(function() {
                    var t = [o("sqrF")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack12: function(e) {
                Promise.all([o.e(0), o.e(88)]).then(function() {
                    var t = [o("o3lv")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice7: function(e) {
                Promise.all([o.e(0), o.e(138)]).then(function() {
                    var t = [o("hM3L")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda7: function(e) {
                Promise.all([o.e(0), o.e(94)]).then(function() {
                    var t = [o("BSLV")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords7: function(e) {
                Promise.all([o.e(0), o.e(115)]).then(function() {
                    var t = [o("8/9R")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice8: function(e) {
                Promise.all([o.e(0), o.e(215)]).then(function() {
                    var t = [o("zT6p")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda8: function(e) {
                Promise.all([o.e(0), o.e(162)]).then(function() {
                    var t = [o("elvS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords8: function(e) {
                Promise.all([o.e(0), o.e(166)]).then(function() {
                    var t = [o("vVKH")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice9: function(e) {
                Promise.all([o.e(0), o.e(75)]).then(function() {
                    var t = [o("PWCS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda9: function(e) {
                Promise.all([o.e(0), o.e(188)]).then(function() {
                    var t = [o("uuqu")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords9: function(e) {
                Promise.all([o.e(0), o.e(173)]).then(function() {
                    var t = [o("iW6Q")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice10: function(e) {
                Promise.all([o.e(0), o.e(195)]).then(function() {
                    var t = [o("zQ9e")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda10: function(e) {
                Promise.all([o.e(0), o.e(89)]).then(function() {
                    var t = [o("zTpM")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords10: function(e) {
                Promise.all([o.e(0), o.e(197)]).then(function() {
                    var t = [o("X5DS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack10: function(e) {
                Promise.all([o.e(0), o.e(105)]).then(function() {
                    var t = [o("bvIi")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice11: function(e) {
                Promise.all([o.e(0), o.e(187)]).then(function() {
                    var t = [o("2FRu")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda11: function(e) {
                Promise.all([o.e(0), o.e(70)]).then(function() {
                    var t = [o("5Vhg")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords11: function(e) {
                Promise.all([o.e(0), o.e(182)]).then(function() {
                    var t = [o("iwCa")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice12: function(e) {
                Promise.all([o.e(0), o.e(227)]).then(function() {
                    var t = [o("38w7")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda12: function(e) {
                Promise.all([o.e(0), o.e(102)]).then(function() {
                    var t = [o("wljU")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice13: function(e) {
                Promise.all([o.e(0), o.e(229)]).then(function() {
                    var t = [o("B05L")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda13: function(e) {
                Promise.all([o.e(0), o.e(161)]).then(function() {
                    var t = [o("Nc/O")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords13: function(e) {
                Promise.all([o.e(0), o.e(224)]).then(function() {
                    var t = [o("rdng")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack13: function(e) {
                Promise.all([o.e(0), o.e(218)]).then(function() {
                    var t = [o("RyxS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice14: function(e) {
                Promise.all([o.e(0), o.e(199)]).then(function() {
                    var t = [o("01Ex")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda14: function(e) {
                Promise.all([o.e(0), o.e(155)]).then(function() {
                    var t = [o("xaBm")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords14: function(e) {
                Promise.all([o.e(0), o.e(99)]).then(function() {
                    var t = [o("eBh3")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack14: function(e) {
                Promise.all([o.e(0), o.e(198)]).then(function() {
                    var t = [o("xoyv")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice15: function(e) {
                Promise.all([o.e(0), o.e(112)]).then(function() {
                    var t = [o("u+lF")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda15: function(e) {
                Promise.all([o.e(0), o.e(228)]).then(function() {
                    var t = [o("9RAw")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords15: function(e) {
                Promise.all([o.e(0), o.e(142)]).then(function() {
                    var t = [o("eod/")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack15: function(e) {
                Promise.all([o.e(0), o.e(175)]).then(function() {
                    var t = [o("VqJG")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice16: function(e) {
                Promise.all([o.e(0), o.e(210)]).then(function() {
                    var t = [o("RQr7")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda16: function(e) {
                Promise.all([o.e(0), o.e(131)]).then(function() {
                    var t = [o("pfQK")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords16: function(e) {
                Promise.all([o.e(0), o.e(128)]).then(function() {
                    var t = [o("BREX")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack16: function(e) {
                Promise.all([o.e(0), o.e(91)]).then(function() {
                    var t = [o("zXOa")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice17: function(e) {
                Promise.all([o.e(0), o.e(59)]).then(function() {
                    var t = [o("xXI9")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda17: function(e) {
                Promise.all([o.e(0), o.e(47)]).then(function() {
                    var t = [o("HBVW")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords17: function(e) {
                Promise.all([o.e(0), o.e(90)]).then(function() {
                    var t = [o("vfTH")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack17: function(e) {
                Promise.all([o.e(0), o.e(141)]).then(function() {
                    var t = [o("PRhm")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice18: function(e) {
                Promise.all([o.e(0), o.e(217)]).then(function() {
                    var t = [o("EWn7")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda18: function(e) {
                Promise.all([o.e(0), o.e(50)]).then(function() {
                    var t = [o("FCXE")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords18: function(e) {
                Promise.all([o.e(0), o.e(87)]).then(function() {
                    var t = [o("Y9+J")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack18: function(e) {
                Promise.all([o.e(0), o.e(164)]).then(function() {
                    var t = [o("+4Nv")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice19: function(e) {
                Promise.all([o.e(0), o.e(40)]).then(function() {
                    var t = [o("MC/i")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda19: function(e) {
                Promise.all([o.e(0), o.e(35)]).then(function() {
                    var t = [o("751z")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords19: function(e) {
                Promise.all([o.e(0), o.e(38)]).then(function() {
                    var t = [o("bbo3")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack19: function(e) {
                Promise.all([o.e(0), o.e(37)]).then(function() {
                    var t = [o("ZRht")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice20: function(e) {
                Promise.all([o.e(0), o.e(41)]).then(function() {
                    var t = [o("v/lI")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda20: function(e) {
                Promise.all([o.e(0), o.e(34)]).then(function() {
                    var t = [o("1KGJ")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords20: function(e) {
                Promise.all([o.e(0), o.e(39)]).then(function() {
                    var t = [o("38gw")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack20: function(e) {
                Promise.all([o.e(0), o.e(36)]).then(function() {
                    var t = [o("AJS4")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome74301: function(e) {
                Promise.all([o.e(0), o.e(168)]).then(function() {
                    var t = [o("Ry0s")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome67392: function(e) {
                Promise.all([o.e(0), o.e(42)]).then(function() {
                    var t = [o("RiEA")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome67778: function(e) {
                Promise.all([o.e(0), o.e(214)]).then(function() {
                    var t = [o("GKpb")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome63473: function(e) {
                Promise.all([o.e(0), o.e(12)]).then(function() {
                    var t = [o("7ZYc")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            prizeShow63011: function(e) {
                o.e(66).then(function() {
                    var t = [o("WzES")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome63011: function(e) {
                Promise.all([o.e(0), o.e(6)]).then(function() {
                    var t = [o("cDGa")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            bgmControl63011: function(e) {
                o.e(0).then(function() {
                    var t = [o("OLgT")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            myInfo63011: function(e) {
                Promise.all([o.e(0), o.e(2)]).then(function() {
                    var t = [o("6cER")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            myPrize63011: function(e) {
                Promise.all([o.e(0), o.e(2)]).then(function() {
                    var t = [o("6cER")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice63011: function(e) {
                Promise.all([o.e(0), o.e(13)]).then(function() {
                    var t = [o("yGwI")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success63011: function(e) {
                Promise.all([o.e(0), o.e(7)]).then(function() {
                    var t = [o("sxEO")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice57387: function(e) {
                Promise.all([o.e(0), o.e(58)]).then(function() {
                    var t = [o("+QQG")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome37913: function(e) {
                Promise.all([o.e(0), o.e(144)]).then(function() {
                    var t = [o("s5ee")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice37913: function(e) {
                Promise.all([o.e(0), o.e(60)]).then(function() {
                    var t = [o("DzvC")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            jigsaw37913: function(e) {
                o.e(158).then(function() {
                    var t = [o("PEEX")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success37913: function(e) {
                Promise.all([o.e(0), o.e(154)]).then(function() {
                    var t = [o("WoZe")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice21041: function(e) {
                Promise.all([o.e(0), o.e(49)]).then(function() {
                    var t = [o("BtF5")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success21309: function(e) {
                Promise.all([o.e(0), o.e(208)]).then(function() {
                    var t = [o("8fVq")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome22582: function(e) {
                Promise.all([o.e(0), o.e(15)]).then(function() {
                    var t = [o("eVCZ")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success22582: function(e) {
                Promise.all([o.e(0), o.e(68)]).then(function() {
                    var t = [o("blD6")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome22993: function(e) {
                Promise.all([o.e(0), o.e(106)]).then(function() {
                    var t = [o("LO+Q")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice22993: function(e) {
                Promise.all([o.e(0), o.e(165)]).then(function() {
                    var t = [o("CKJI")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda22993: function(e) {
                Promise.all([o.e(0), o.e(79)]).then(function() {
                    var t = [o("Hgsk")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice56861: function(e) {
                Promise.all([o.e(0), o.e(97)]).then(function() {
                    var t = [o("OY6Y")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success24398: function(e) {
                Promise.all([o.e(0), o.e(230)]).then(function() {
                    var t = [o("+8qq")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success25422: function(e) {
                Promise.all([o.e(0), o.e(232)]).then(function() {
                    var t = [o("tX4h")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success26321: function(e) {
                Promise.all([o.e(0), o.e(169)]).then(function() {
                    var t = [o("0y3d")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome32829: function(e) {
                Promise.all([o.e(0), o.e(103)]).then(function() {
                    var t = [o("8jYi")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome32975: function(e) {
                Promise.all([o.e(0), o.e(139)]).then(function() {
                    var t = [o("laW1")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice32975: function(e) {
                Promise.all([o.e(0), o.e(209)]).then(function() {
                    var t = [o("VXDn")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success32975: function(e) {
                Promise.all([o.e(0), o.e(81)]).then(function() {
                    var t = [o("/WV3")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success32145: function(e) {
                Promise.all([o.e(0), o.e(150)]).then(function() {
                    var t = [o("afJE")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome34257: function(e) {
                Promise.all([o.e(0), o.e(117)]).then(function() {
                    var t = [o("o61E")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success35665: function(e) {
                Promise.all([o.e(0), o.e(54)]).then(function() {
                    var t = [o("6wZ5")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice19842: function(e) {
                Promise.all([o.e(0), o.e(176)]).then(function() {
                    var t = [o("jw71")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success35989: function(e) {
                Promise.all([o.e(0), o.e(114)]).then(function() {
                    var t = [o("xcjg")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success36814: function(e) {
                Promise.all([o.e(0), o.e(194)]).then(function() {
                    var t = [o("ZrMS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda36777: function(e) {
                Promise.all([o.e(0), o.e(179)]).then(function() {
                    var t = [o("c603")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success37717: function(e) {
                Promise.all([o.e(0), o.e(107)]).then(function() {
                    var t = [o("kfXm")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success38336: function(e) {
                Promise.all([o.e(0), o.e(124)]).then(function() {
                    var t = [o("rcjp")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome39021: function(e) {
                Promise.all([o.e(0), o.e(146)]).then(function() {
                    var t = [o("RgQk")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success40158: function(e) {
                Promise.all([o.e(0), o.e(118)]).then(function() {
                    var t = [o("Lpp1")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success41386: function(e) {
                Promise.all([o.e(0), o.e(145)]).then(function() {
                    var t = [o("dKPP")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success41491: function(e) {
                Promise.all([o.e(0), o.e(61)]).then(function() {
                    var t = [o("HuT8")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success41803: function(e) {
                Promise.all([o.e(0), o.e(84)]).then(function() {
                    var t = [o("eRo8")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome45179: function(e) {
                Promise.all([o.e(0), o.e(95)]).then(function() {
                    var t = [o("yA1V")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice45179: function(e) {
                Promise.all([o.e(0), o.e(96)]).then(function() {
                    var t = [o("mXiF")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success45179: function(e) {
                Promise.all([o.e(0), o.e(233)]).then(function() {
                    var t = [o("hHLu")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice59645: function(e) {
                Promise.all([o.e(0), o.e(135)]).then(function() {
                    var t = [o("K2Wb")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success59645: function(e) {
                Promise.all([o.e(0), o.e(132)]).then(function() {
                    var t = [o("SKC9")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            fillWords53255: function(e) {
                Promise.all([o.e(0), o.e(205)]).then(function() {
                    var t = [o("uCg1")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success53255: function(e) {
                Promise.all([o.e(0), o.e(157)]).then(function() {
                    var t = [o("cQBq")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice77678: function(e) {
                Promise.all([o.e(0), o.e(222)]).then(function() {
                    var t = [o("8akE")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome84225: function(e) {
                Promise.all([o.e(0), o.e(101)]).then(function() {
                    var t = [o("BK1z")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice84225: function(e) {
                Promise.all([o.e(0), o.e(152)]).then(function() {
                    var t = [o("V7kv")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success84225: function(e) {
                Promise.all([o.e(0), o.e(201)]).then(function() {
                    var t = [o("rYHk")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice84478: function(e) {
                Promise.all([o.e(0), o.e(122)]).then(function() {
                    var t = [o("ccAA")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome86496: function(e) {
                Promise.all([o.e(0), o.e(192)]).then(function() {
                    var t = [o("Mppx")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success88538: function(e) {
                Promise.all([o.e(0), o.e(55)]).then(function() {
                    var t = [o("i09R")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome89426: function(e) {
                Promise.all([o.e(0), o.e(159)]).then(function() {
                    var t = [o("Nakf")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success95099: function(e) {
                Promise.all([o.e(0), o.e(109)]).then(function() {
                    var t = [o("Z+2G")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice95315: function(e) {
                o.e(212).then(function() {
                    var t = [o("5AXZ")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome94917: function(e) {
                Promise.all([o.e(0), o.e(171)]).then(function() {
                    var t = [o("xa0o")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice99770: function(e) {
                o.e(207).then(function() {
                    var t = [o("4j52")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice100467: function(e) {
                o.e(191).then(function() {
                    var t = [o("i0fF")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            pack100467: function(e) {
                Promise.all([o.e(0), o.e(125)]).then(function() {
                    var t = [o("Jxpz")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo100467: function(e) {
                o.e(0).then(function() {
                    var t = [o("64By")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success100467: function(e) {
                Promise.all([o.e(0), o.e(21)]).then(function() {
                    var t = [o("t7V/")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome100467: function(e) {
                Promise.all([o.e(0), o.e(177)]).then(function() {
                    var t = [o("m2GF")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo100777: function(e) {
                o.e(0).then(function() {
                    var t = [o("aQg4")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome103330: function(e) {
                Promise.all([o.e(0), o.e(151)]).then(function() {
                    var t = [o("L/Ma")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success103715: function(e) {
                Promise.all([o.e(0), o.e(30)]).then(function() {
                    var t = [o("WE5+")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success106328: function(e) {
                Promise.all([o.e(0), o.e(29)]).then(function() {
                    var t = [o("hC70")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome104129: function(e) {
                Promise.all([o.e(0), o.e(167)]).then(function() {
                    var t = [o("tiS0")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome105606: function(e) {
                Promise.all([o.e(0), o.e(14)]).then(function() {
                    var t = [o("ySGe")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo105606: function(e) {
                o.e(0).then(function() {
                    var t = [o("w6ec")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice105606: function(e) {
                Promise.all([o.e(0), o.e(190)]).then(function() {
                    var t = [o("jLNJ")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome109067: function(e) {
                Promise.all([o.e(0), o.e(98)]).then(function() {
                    var t = [o("hVqa")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice109067: function(e) {
                Promise.all([o.e(0), o.e(223)]).then(function() {
                    var t = [o("5PDY")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome57500: function(e) {
                Promise.all([o.e(0), o.e(170)]).then(function() {
                    var t = [o("tHlV")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice57500: function(e) {
                Promise.all([o.e(0), o.e(69)]).then(function() {
                    var t = [o("pT37")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success57500: function(e) {
                Promise.all([o.e(0), o.e(193)]).then(function() {
                    var t = [o("/QGt")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome111544: function(e) {
                Promise.all([o.e(0), o.e(86)]).then(function() {
                    var t = [o("Y4FI")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice111544: function(e) {
                Promise.all([o.e(0), o.e(63)]).then(function() {
                    var t = [o("eL1m")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success111544: function(e) {
                Promise.all([o.e(0), o.e(28)]).then(function() {
                    var t = [o("pQcU")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome115238: function(e) {
                Promise.all([o.e(0), o.e(178)]).then(function() {
                    var t = [o("FIuW")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome115777: function(e) {
                Promise.all([o.e(0), o.e(172)]).then(function() {
                    var t = [o("K7El")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice116098: function(e) {
                Promise.all([o.e(0), o.e(120)]).then(function() {
                    var t = [o("QeW9")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda116098: function(e) {
                Promise.all([o.e(0), o.e(189)]).then(function() {
                    var t = [o("BREe")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice119631: function(e) {
                Promise.all([o.e(0), o.e(48)]).then(function() {
                    var t = [o("+L3F")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome119754: function(e) {
                Promise.all([o.e(0), o.e(137)]).then(function() {
                    var t = [o("7PxD")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success122132: function(e) {
                Promise.all([o.e(0), o.e(27)]).then(function() {
                    var t = [o("LS0b")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice122935: function(e) {
                Promise.all([o.e(0), o.e(226)]).then(function() {
                    var t = [o("P+w6")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome122710: function(e) {
                Promise.all([o.e(0), o.e(196)]).then(function() {
                    var t = [o("gwPh")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice122710: function(e) {
                Promise.all([o.e(0), o.e(83)]).then(function() {
                    var t = [o("JFas")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda122710: function(e) {
                Promise.all([o.e(0), o.e(52)]).then(function() {
                    var t = [o("DbEG")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice124112: function(e) {
                Promise.all([o.e(0), o.e(72)]).then(function() {
                    var t = [o("+9F8")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            lottery123976: function(e) {
                Promise.all([o.e(0), o.e(19)]).then(function() {
                    var t = [o("NirO")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            lottery125488: function(e) {
                Promise.all([o.e(0), o.e(17)]).then(function() {
                    var t = [o("HfVf")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            whacMole131773: function(e) {
                Promise.all([o.e(0), o.e(129)]).then(function() {
                    var t = [o("3qBR")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success131773: function(e) {
                Promise.all([o.e(0), o.e(25)]).then(function() {
                    var t = [o("/5x7")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome131917: function(e) {
                Promise.all([o.e(0), o.e(174)]).then(function() {
                    var t = [o("zI5B")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success130738: function(e) {
                Promise.all([o.e(0), o.e(26)]).then(function() {
                    var t = [o("qxgS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo130737: function(e) {
                Promise.all([o.e(0), o.e(156)]).then(function() {
                    var t = [o("tc75")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome129896: function(e) {
                Promise.all([o.e(0), o.e(93)]).then(function() {
                    var t = [o("1FGS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda132664: function(e) {
                Promise.all([o.e(0), o.e(153)]).then(function() {
                    var t = [o("htYf")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo132900: function(e) {
                Promise.all([o.e(0), o.e(104)]).then(function() {
                    var t = [o("Xq5Z")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success133794: function(e) {
                Promise.all([o.e(0), o.e(11)]).then(function() {
                    var t = [o("Xq4P")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo133794: function(e) {
                Promise.all([o.e(0), o.e(62)]).then(function() {
                    var t = [o("9hZ0")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome133918: function(e) {
                Promise.all([o.e(0), o.e(163)]).then(function() {
                    var t = [o("NHRl")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            qanda134236: function(e) {
                Promise.all([o.e(0), o.e(127)]).then(function() {
                    var t = [o("Wcen")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome133819: function(e) {
                Promise.all([o.e(0), o.e(221)]).then(function() {
                    var t = [o("1/Db")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome135079: function(e) {
                Promise.all([o.e(0), o.e(100)]).then(function() {
                    var t = [o("bA4q")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo134108: function(e) {
                Promise.all([o.e(0), o.e(231)]).then(function() {
                    var t = [o("6j8C")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome135756: function(e) {
                Promise.all([o.e(0), o.e(46)]).then(function() {
                    var t = [o("/dLT")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice135756: function(e) {
                Promise.all([o.e(0), o.e(186)]).then(function() {
                    var t = [o("YHX6")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo135678: function(e) {
                Promise.all([o.e(0), o.e(67)]).then(function() {
                    var t = [o("TYuS")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome136475: function(e) {
                Promise.all([o.e(0), o.e(16)]).then(function() {
                    var t = [o("rkr6")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome137091: function(e) {
                Promise.all([o.e(0), o.e(71)]).then(function() {
                    var t = [o("0DeU")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice138347: function(e) {
                Promise.all([o.e(0), o.e(220)]).then(function() {
                    var t = [o("t4YM")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo140151: function(e) {
                Promise.all([o.e(0), o.e(82)]).then(function() {
                    var t = [o("REZ9")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome138844: function(e) {
                Promise.all([o.e(0), o.e(73)]).then(function() {
                    var t = [o("zS7/")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome141406: function(e) {
                Promise.all([o.e(0), o.e(8)]).then(function() {
                    var t = [o("TAD4")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome142418: function(e) {
                Promise.all([o.e(0), o.e(225)]).then(function() {
                    var t = [o("7rKW")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            singlePage142418: function(e) {
                Promise.all([o.e(0), o.e(136)]).then(function() {
                    var t = [o("ROQ8")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success142418: function(e) {
                Promise.all([o.e(0), o.e(24)]).then(function() {
                    var t = [o("Z9jk")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success143318: function(e) {
                Promise.all([o.e(0), o.e(23)]).then(function() {
                    var t = [o("qWo9")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo143916: function(e) {
                Promise.all([o.e(0), o.e(33)]).then(function() {
                    var t = [o("RerD")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome145195: function(e) {
                Promise.all([o.e(0), o.e(206)]).then(function() {
                    var t = [o("X9Ej")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo145575: function(e) {
                Promise.all([o.e(0), o.e(184)]).then(function() {
                    var t = [o("G1Kf")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome147887: function(e) {
                Promise.all([o.e(0), o.e(113)]).then(function() {
                    var t = [o("N61a")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome148005: function(e) {
                Promise.all([o.e(0), o.e(160)]).then(function() {
                    var t = [o("EAin")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo146891: function(e) {
                Promise.all([o.e(0), o.e(32)]).then(function() {
                    var t = [o("Mi5+")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            scoreInfo148096: function(e) {
                Promise.all([o.e(0), o.e(31)]).then(function() {
                    var t = [o("l5cP")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome148096: function(e) {
                Promise.all([o.e(0), o.e(9)]).then(function() {
                    var t = [o("MZVM")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            lottery148476: function(e) {
                Promise.all([o.e(0), o.e(183)]).then(function() {
                    var t = [o("BDjw")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            success148473: function(e) {
                Promise.all([o.e(0), o.e(22)]).then(function() {
                    var t = [o("iTzH")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            choice148474: function(e) {
                Promise.all([o.e(0), o.e(134)]).then(function() {
                    var t = [o("WRuM")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome149441: function(e) {
                o.e(53).then(function() {
                    var t = [o("C1n/")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            },
            welcome149115: function(e) {
                Promise.all([o.e(0), o.e(77)]).then(function() {
                    var t = [o("b5FM")];
                    e.apply(null, t)
                }.bind(this)).
                catch(o.oe)
            }
        },
        i = [];
        i[1] = {
            type: "qanda"
        },
        i[2] = {
            type: "choice"
        },
        i[5] = {
            type: "choice"
        },
        i[4] = {
            type: "jigsaw"
        },
        i[6] = {
            type: "dice"
        },
        i[7] = {
            type: "fillWords"
        },
        i[99] = {
            type: "success"
        },
        i[100] = {
            type: "scoreInfo"
        },
        i[0] = {
            type: "welcome"
        },
        i[3] = {
            type: "choice"
        },
        i[8] = {
            type: "card"
        },
        i[10] = {
            type: "vote"
        },
        i[11] = {
            type: "findmost"
        },
        i[12] = {
            type: "whacMole"
        },
        i[13] = {
            type: "pack"
        },
        i[101] = {
            type: "singlePage"
        },
        e.exports = {
            Games: n,
            GameTypes: i
        }
    },
    xsGU: function(e, t, o) {
        e.exports = o.p + "static/img/illegal.9ce321a.png"
    }
},
["NHnr"]);