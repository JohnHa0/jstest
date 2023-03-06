(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-answer-content"], {
    "0b6c": function(t, e, i) {
        "use strict";
        var n;
        i.d(e, "b", (function() {
            return o
        })),
        i.d(e, "c", (function() {
            return s
        })),
        i.d(e, "a", (function() {
            return n
        }));
        var o = function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return t.loading ? t._e() : i("v-uni-view", {
                class: {
                    "answer-pc-content": t.isPcJoin
                }
            },
            [i("v-uni-view", {
                staticClass: "answer-bg",
                style: t.pageBg
            }), i("v-uni-view", {
                staticClass: "answer-content"
            },
            [!t.isShowSheet && !t.isShowDownTime || t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "tools-top",
                style: {
                    color: t.themeColor
                }
            },
            [t.isShowSheet ? i("v-uni-view", {
                staticClass: "item cursor-pointer",
                class: {
                    active: t.cardVisible
                },
                style: {
                    color: t.cardVisible ? t.themeColor: ""
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showCard.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-text", {
                staticClass: "icon iconfont iconshijian"
            }), t._v("答题卡")], 1) : t._e(), i("v-uni-view", {
                staticClass: "time item"
            },
            [t.isShowDownTime ? i("v-uni-view", {
                staticClass: "vertical-center down-time",
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.downTime))]) : t._e()], 1), t.isShowSheet ? i("v-uni-view", {
                staticClass: "item cursor-pointer",
                style: {
                    color: t.themeColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.submit.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-text", {
                staticClass: "icon iconfont iconsubmit"
            }), t._v("提交")], 1) : t._e()], 1), t.isPcJoin ? i("v-uni-view", {
                staticClass: "tools-top-pc"
            },
            [i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [1 != t.list[t.crtIndex].questionMode && t.list[t.crtIndex].questionMode ? t._e() : [t._v("【" + t._s(t.list[t.crtIndex].rightCount > 1 ? "多选题": "单选题") + "】")], 2 == t.list[t.crtIndex].questionMode ? [t._v("【判断题】")] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._v("【填空题】")] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._v("【排序题】")] : t._e(), 5 == t.list[t.crtIndex].questionMode ? [t._v("【简答题】")] : t._e(), t._v("（" + t._s(t.list[t.crtIndex].questionScore) + "分）")], 2), i("v-uni-view", {
                staticClass: "ml-md title"
            },
            [t._v("第"), i("v-uni-text", {
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.crtIndex + 1))]), t._v("题 共"), i("v-uni-text", {
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.list.length))]), t._v("题")], 1)], 1) : t._e(), i("v-uni-scroll-view", {
                staticClass: "content cursor-pointer",
                style: {
                    top: t.contentTop
                },
                attrs: {
                    "scroll-y": "true",
                    "scroll-top": t.scrollTop
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.hideCard.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-view", {
                staticClass: "question"
            },
            [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "order-number",
                style: {
                    color: t.titleColor
                }
            },
            [t._v("第"), i("v-uni-text", {
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.crtIndex + 1))]), t._v("题 共"), i("v-uni-text", {
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.list.length))]), t._v("题")], 1), i("v-uni-view", {
                staticClass: "title",
                style: {
                    color: t.titleColor
                }
            },
            [1 != t.list[t.crtIndex].questionMode && t.list[t.crtIndex].questionMode ? t._e() : [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【" + t._s(t.list[t.crtIndex].rightCount > 1 ? "多选题": "单选题") + "】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })], 2 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【判断题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【填空题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【排序题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e(), 5 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【简答题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e()], 2), t.list[t.crtIndex].image ? i("v-uni-image", {
                staticClass: "img",
                attrs: {
                    mode: "aspectFit",
                    src: t._f("imgPreFix")(t.list[t.crtIndex].image)
                }
            }) : t._e(), t.list[t.crtIndex].music ? i("v-uni-view", {
                staticClass: "audio cursor-pointer"
            },
            [t.musicPlay ? i("v-uni-view", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.pauseMusic.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-image", {
                attrs: {
                    mode: "aspectFit",
                    src: t.imageHost + t.icon_pause
                }
            })], 1) : t._e(), t.musicPlay ? t._e() : i("v-uni-view", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.playMusic.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-image", {
                attrs: {
                    mode: "aspectFit",
                    src: t.imageHost + t.icon_play
                }
            })], 1)], 1) : t._e(), t.list[t.crtIndex].video ? i("v-uni-view", {
                staticClass: "video"
            },
            [1 == t.list[t.crtIndex].videoType && t.list[t.crtIndex].playVideoUrl ? [i("v-uni-video", {
                attrs: {
                    id: "myVideo",
                    src: t.list[t.crtIndex].playVideoUrl,
                    "show-center-play-btn": !1,
                    playsinline: !1,
                    "webkit-playsinline": !1,
                    "x-webkit-airplay": "allow",
                    "x5-video-player-type": "h5",
                    airplay: "allow",
                    type: "video/mp4",
                    "x5-video-player-fullscreen": "true",
                    "x5-video-orientation": "portrait",
                    preload: "auto",
                    poster: t.list[t.crtIndex].videoPoster
                }
            })] : t._e(), 2 == t.list[t.crtIndex].videoType ? [i("v-uni-view", {
                staticClass: "iframe",
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].video)
                }
            })] : t._e()], 2) : t._e(), i("v-uni-view", {
                staticClass: "options mt-md",
                class: {
                    options: "text" == t.list[t.crtIndex].type || "1" == t.list[t.crtIndex].type,
                    options_one: "image" == t.list[t.crtIndex].type && t.list[t.crtIndex].options.length % 2 == 0,
                    options_two: "image" == t.list[t.crtIndex].type && t.list[t.crtIndex].options.length % 2 != 0
                }
            },
            [1 != t.list[t.crtIndex].questionMode && t.list[t.crtIndex].questionMode ? t._e() : ["text" == t.list[t.crtIndex].type ? t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: {
                        right: !0 === t.list[t.crtIndex].reply[n],
                        error: !1 === t.list[t.crtIndex].reply[n],
                        active: 1 === t.list[t.crtIndex].reply[n],
                        rightAnswer: t.list[t.crtIndex].state && t.list[t.crtIndex].rightCount > 1 && e.right
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.choose(e, n, i)
                        }
                    }
                },
                ["text" == t.list[t.crtIndex].type ? [t._v(t._s(t.WORD[n]) + ". " + t._s(e.value))] : t._e(), i("v-uni-text", {
                    staticClass: "right-icon iconfont iconzhengque"
                }), i("v-uni-text", {
                    staticClass: "error-icon iconfont iconwrong"
                })], 2)
            })) : t._e(), "image" == t.list[t.crtIndex].type ? t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: {
                        right: !0 === t.list[t.crtIndex].reply[n],
                        error: !1 === t.list[t.crtIndex].reply[n],
                        active: 1 === t.list[t.crtIndex].reply[n],
                        rightAnswer: t.list[t.crtIndex].state && t.list[t.crtIndex].rightCount > 1 && e.right
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.choose(e, n, i)
                        }
                    }
                },
                ["image" == t.list[t.crtIndex].type ? [i("v-uni-image", {
                    attrs: {
                        mode: "aspectFit",
                        src: t._f("imgPreFix")(e.value)
                    }
                }), i("v-uni-view", {
                    staticClass: "orderNumber"
                },
                [t._v(t._s(t.WORD[n]))]), i("v-uni-text", {
                    staticClass: "icon iconfont iconfangda",
                    staticStyle: {
                        display: "block",
                        color: "#fff",
                        "text-shadow": "0rpx 0rpx 6rpx rgba(0,0,0,0.40)",
                        position: "absolute",
                        top: "26rpx"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(),
                            arguments[0] = e = t.$handleEvent(e),
                            t.previewImg(n, t.list[t.crtIndex].options)
                        }
                    }
                })] : t._e(), i("v-uni-text", {
                    staticClass: "right-icon iconfont iconzhengque"
                }), i("v-uni-text", {
                    staticClass: "error-icon iconfont iconwrong"
                })], 2)
            })) : t._e(), !t.list[t.crtIndex].state && t.list[t.crtIndex].rightCount > 1 ? i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmMultiple.apply(void 0, arguments)
                    }
                }
            },
            [t._v("确认答案")]) : t._e()], 2 == t.list[t.crtIndex].questionMode ? t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: {
                        right: !0 === t.list[t.crtIndex].reply[n],
                        error: !1 === t.list[t.crtIndex].reply[n],
                        active: 1 === t.list[t.crtIndex].reply[n]
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.choose(e, n, i)
                        }
                    }
                },
                [[t._v(t._s(e.value))], i("v-uni-text", {
                    staticClass: "right-icon iconfont iconzhengque"
                }), i("v-uni-text", {
                    staticClass: "error-icon iconfont iconwrong"
                })], 2)
            })) : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item-fill",
                    class: {
                        "right-bg": !0 === t.list[t.crtIndex].reply[n],
                        "error-bg": !1 === t.list[t.crtIndex].reply[n]
                    },
                    style: t.optionsStyle
                },
                [i("v-uni-text", [t._v(t._s(t.fillIndex[n]) + ".")]), i("v-uni-input", {
                    staticClass: "item-input ml-xs",
                    attrs: {
                        placeholder: "请输入答案",
                        disabled: t.list[t.crtIndex].state
                    },
                    model: {
                        value: t.list[t.crtIndex].answer[n],
                        callback: function(e) {
                            t.$set(t.list[t.crtIndex].answer, n, e)
                        },
                        expression: "list[crtIndex].answer[index]"
                    }
                })], 1)
            })), t.list[t.crtIndex].state ? t._e() : i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmInput(e)
                    }
                }
            },
            [t._v("确认答案")])] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item-fill cursor-pointer",
                    class: {
                        "right-bg": "true" === t.list[t.crtIndex].result,
                        "error-bg": "false" === t.list[t.crtIndex].result
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.chooseOrder(t.list[t.crtIndex].answer[n], n, e)
                        }
                    }
                },
                [i("v-uni-view", {
                    staticClass: "item-num",
                    class: [{
                        curnum: t.list[t.crtIndex].answer[n] > 0
                    }],
                    style: {
                        background: t.list[t.crtIndex].answer[n] > 0 ? t.themeColor: ""
                    }
                },
                [t._v(t._s(t.list[t.crtIndex].answer[n]))]), i("v-uni-view", {
                    staticClass: "ml-sm"
                },
                [t._v(t._s(e.value))])], 1)
            })), t.list[t.crtIndex].state ? t._e() : i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmOrder(e)
                    }
                }
            },
            [t._v("确认答案")])] : t._e(), 5 == t.list[t.crtIndex].questionMode ? [i("v-uni-view", {
                staticClass: "item-textarea",
                style: t.optionsStyle
            },
            [i("v-uni-textarea", {
                staticClass: "detail",
                attrs: {
                    placeholder: "请输入解答内容",
                    maxlength: "500",
                    disabled: t.list[t.crtIndex].state
                },
                model: {
                    value: t.list[t.crtIndex].answer,
                    callback: function(e) {
                        t.$set(t.list[t.crtIndex], "answer", e)
                    },
                    expression: "list[crtIndex].answer"
                }
            })], 1), t.list[t.crtIndex].state ? t._e() : i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmShort(e)
                    }
                }
            },
            [t._v("确认答案")])] : t._e()], 2)], 1), 1 == t.isShowAnswer && t.isShowSheet ? [t.getAnalysisState(t.isShowExplainByRight, t.list[t.crtIndex].state, t.list[t.crtIndex].result) ? [i("v-uni-view", {
                staticClass: "analysis"
            },
            [i("v-uni-view", {
                staticClass: "title"
            },
            [t._v("答案解析")]), i("v-uni-view", {
                staticClass: "answer"
            },
            [1 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [e.right ? i("v-uni-text", {
                    key: n
                },
                [t._v(t._s(t.WORD[n]))]) : t._e()]
            }))] : t._e(), 2 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [e.right ? i("v-uni-text", {
                    key: n
                },
                [t._v(t._s(e.value))]) : t._e()]
            }))] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [i("v-uni-view", {
                    key: n
                },
                [t._v(t._s(t.fillIndex[n]) + ":" + t._s(e.value))])]
            }))] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._v("正确答案： " + t._s(t.list[t.crtIndex].resultPos))] : t._e()], 2), 1 == t.list[t.crtIndex].questionMode || 2 == t.list[t.crtIndex].questionMode || 3 == t.list[t.crtIndex].questionMode ? i("v-uni-view", {
                staticClass: "detail"
            },
            [t.list[t.crtIndex].hasExplain ? i("v-uni-view", [[t._v("【解析】")]], 2) : t._e(), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n
                },
                [e.right ? [t._v(t._s(e.answerExplain))] : t._e()], 2)
            }))], 2) : t._e(), 4 == t.list[t.crtIndex].questionMode || 5 == t.list[t.crtIndex].questionMode ? i("v-uni-view", {
                staticClass: "detail"
            },
            [i("v-uni-view", [t._v("【解析】"), t.list[t.crtIndex].answerExplain ? t._e() : [t._v("无")]], 2), [t._v(t._s(t.list[t.crtIndex].answerExplain))]], 2) : t._e()], 1)] : t._e()] : t._e(), t.isShowSheet ? i("v-uni-view", {
                staticClass: "tools-bottom"
            },
            [0 != t.crtIndex ? i("v-uni-button", {
                staticClass: "btn last cursor-pointer",
                style: t.lastBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.switchQuestion("last", e)
                    }
                }
            },
            [t._v("上一题")]) : t._e(), t.crtIndex < t.list.length - 1 ? i("v-uni-button", {
                staticClass: "btn cursor-pointer",
                class: {
                    "ml-lg": 0 != t.crtIndex && t.crtIndex < t.list.length - 1
                },
                style: t.nextBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.switchQuestion("next", e)
                    }
                }
            },
            [t._v("下一题")]) : t._e()], 1) : t._e()], 2), t.analysisVisible ? i("v-uni-view", {
                staticClass: "mask"
            },
            [i("v-uni-view", {
                staticClass: "popup",
                attrs: {
                    id: "analysis"
                }
            },
            [i("v-uni-view", {
                staticClass: "tips"
            },
            [i("v-uni-view", {
                staticClass: "analysis"
            },
            [i("v-uni-view", {
                staticClass: "answer"
            },
            [1 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [e.right ? i("v-uni-text", {
                    key: n
                },
                [t._v(t._s(t.WORD[n]))]) : t._e()]
            }))] : t._e(), 2 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [e.right ? i("v-uni-text", {
                    key: n
                },
                [t._v(t._s(e.value))]) : t._e()]
            }))] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [i("v-uni-view", {
                    key: n
                },
                [t._v(t._s(t.fillIndex[n]) + ":" + t._s(e.value))])]
            }))] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._v("正确答案： " + t._s(t.list[t.crtIndex].resultPos))] : t._e(), 5 == t.list[t.crtIndex].questionMode && 3 == t.list[t.crtIndex].scoreMode ? [t._v("正确答案： " + t._s(t.list[t.crtIndex].shortContent))] : t._e()], 2), i("v-uni-view", {
                staticClass: "detail"
            },
            [i("v-uni-view", [t._v("【解析】"), t.list[t.crtIndex].hasExplain ? t._e() : [t._v("无")]], 2), 1 == t.list[t.crtIndex].questionMode || 2 == t.list[t.crtIndex].questionMode || 3 == t.list[t.crtIndex].questionMode ? [t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [i("v-uni-view", {
                    key: e.id
                },
                [i("v-uni-view", [e.right && 1 == e.explainType ? i("v-uni-text", [t._v(t._s(e.answerExplain))]) : t._e()], 1), [e.right && 1 == e.explainType ? i("v-uni-view", {
                    key: e.id
                },
                [t._l(e.answerImage, (function(e, n) {
                    return [i("img", {
                        key: n,
                        staticStyle: {
                            "max-width": "460rpx",
                            display: "block",
                            "margin-bottom": "10rpx"
                        },
                        attrs: {
                            src: t._f("imgPreFix")(e),
                            alt: ""
                        }
                    })]
                }))], 2) : t._e()], i("v-uni-view", {
                    staticStyle: {
                        position: "relative",
                        "max-width": "460rpx"
                    },
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.playVideo(e.explainVideoUrl, n, t.crtIndex)
                        }
                    }
                },
                ["" != e.explainVideoUrl && 2 == e.explainType && 1 == e.videoSource ? i("v-uni-video", {
                    staticStyle: {
                        "max-width": "460rpx",
                        "object-fit": "cover"
                    },
                    attrs: {
                        id: "myVideo1",
                        src: e.explainVideoUrl,
                        "show-center-play-btn": !1,
                        playsinline: !1,
                        "webkit-playsinline": !1,
                        "x-webkit-airplay": "allow",
                        "x5-video-player-type": "h5",
                        airplay: "allow",
                        type: "video/mp4",
                        "x5-video-player-fullscreen": "true",
                        controls: void 0 != e.controlsPlay,
                        "x5-video-orientation": "portrait",
                        preload: "auto",
                        poster: t._f("imgPreFix")(e.explainVideoPoster)
                    }
                }) : t._e(), "" != e.explainVideoUrl && 2 == e.explainType && 1 == e.videoSource && void 0 == e.showicon ? i("v-uni-text", {
                    staticClass: "icon iconfont iconvoice_play",
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.playVideo(e.explainVideoUrl, n, t.crtIndex)
                        }
                    }
                }) : t._e()], 1), i("v-uni-view", {
                    staticStyle: {
                        width: "100%"
                    }
                },
                [2 == e.explainType && 2 == e.videoSource ? i("v-uni-view", {
                    staticClass: "iframe",
                    domProps: {
                        innerHTML: t._s(e.videoGeneralCode)
                    }
                }) : t._e()], 1)], 2)]
            }))] : t._e(), 4 == t.list[t.crtIndex].questionMode || 5 == t.list[t.crtIndex].questionMode ? [1 == t.list[t.crtIndex].explainType ? i("v-uni-view", [t._v(t._s(t.list[t.crtIndex].answerExplain))]) : t._e(), t._l(t.list[t.crtIndex].answerImage, (function(e, n) {
                return [i("v-uni-view", {
                    key: n
                },
                [1 == t.list[t.crtIndex].explainType ? i("img", {
                    staticStyle: {
                        "max-width": "460rpx",
                        display: "block",
                        "margin-bottom": "10rpx"
                    },
                    attrs: {
                        src: t._f("imgPreFix")(e),
                        alt: ""
                    }
                }) : t._e()])]
            })), i("v-uni-view", {
                staticStyle: {
                    position: "relative",
                    "max-width": "460rpx"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.playVideo_type2(t.list[t.crtIndex].explainVideoUrl, t.crtIndex)
                    }
                }
            },
            ["" != t.list[t.crtIndex].explainVideoUrl && 2 == t.list[t.crtIndex].explainType && 1 == t.list[t.crtIndex].videoSource ? i("v-uni-video", {
                staticStyle: {
                    "max-width": "460rpx",
                    "object-fit": "cover"
                },
                attrs: {
                    id: "myVideo2",
                    src: t.list[t.crtIndex].explainVideoUrl,
                    "show-center-play-btn": !1,
                    playsinline: !1,
                    "webkit-playsinline": !1,
                    "x-webkit-airplay": "allow",
                    "x5-video-player-type": "h5",
                    airplay: "allow",
                    type: "video/mp4",
                    "x5-video-player-fullscreen": "true",
                    controls: void 0 != t.list[t.crtIndex].controlsPlay,
                    "x5-video-orientation": "portrait",
                    preload: "auto",
                    poster: t._f("imgPreFix")(t.list[t.crtIndex].explainVideoPoster)
                }
            }) : t._e(), "" != t.list[t.crtIndex].explainVideoUrl && 2 == t.list[t.crtIndex].explainType && 1 == t.list[t.crtIndex].videoSource && void 0 == t.list[t.crtIndex].showicon ? i("v-uni-text", {
                staticClass: "icon iconfont iconvoice_play",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.playVideo_type2(t.list[t.crtIndex].explainVideoUrl, t.crtIndex)
                    }
                }
            }) : t._e()], 1), 2 == t.list[t.crtIndex].explainType && 2 == t.list[t.crtIndex].videoSource ? i("v-uni-view", {
                staticClass: "iframe",
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].videoGeneralCode)
                }
            }) : t._e()] : t._e()], 2)], 1)], 1), i("v-uni-button", {
                staticClass: "btn-sure block cursor-pointer",
                style: {
                    background: t.themeColor,
                    color: t.btnTextColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.colseAnalysis.apply(void 0, arguments)
                    }
                }
            },
            [t._v("知道了")])], 1)], 1) : t._e(), t.hideModal && !t.isPcJoin ? i("v-uni-view", {
                staticClass: "modals modals-bottom-dialog"
            },
            [i("v-uni-view", {
                staticClass: "modals-cancel cursor-pointer",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.hide.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                staticClass: "bottom-dialog-body bottom-pos",
                attrs: {
                    animation: t.animationData
                }
            },
            [i("v-uni-view", {
                staticClass: "inner"
            },
            [i("v-uni-view", {
                staticClass: "title"
            },
            [t._v("答题卡"), i("v-uni-text", {
                staticClass: "iconfont iconguan close cursor-pointer",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.hide.apply(void 0, arguments)
                    }
                }
            })], 1), i("v-uni-view", {
                staticClass: "answer-card"
            },
            [i("v-uni-view", {
                staticClass: "inner"
            },
            t._l(t.list, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: [{
                        active: t.list[n].state
                    },
                    {
                        right: "true" === t.list[n].result && t.isShowAnswer
                    },
                    {
                        error: "false" === t.list[n].result && t.isShowAnswer
                    }],
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.jumpQuestion(n)
                        }
                    }
                },
                [t._v(t._s(n + 1))])
            })), 1)], 1)], 1)], 1)], 1) : t._e()], 1), (t.isShowSheet || t.isShowDownTime) && t.isPcJoin ? i("v-uni-view", {
                staticClass: "right-box-pc"
            },
            [t.isShowDownTime ? i("v-uni-view", {
                staticClass: "time"
            },
            [i("v-uni-view", {
                staticClass: "title"
            },
            [i("v-uni-text", {
                staticClass: "icon iconfont iconshijian mr-xs"
            }), t._v("剩余时间")], 1), i("v-uni-view", {
                staticClass: "down-time",
                style: {
                    color: t.themeColor
                }
            },
            [t._v(t._s(t.downTime))])], 1) : t._e(), t.isShowSheet ? i("v-uni-view", {
                staticClass: "sheet"
            },
            [i("v-uni-view", {
                staticClass: "title"
            },
            [i("v-uni-text", {
                staticClass: "icon iconfont iconshijian mr-xs"
            }), t._v("答题卡")], 1), i("v-uni-view", {
                staticClass: "sheet-con"
            },
            t._l(t.list, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: [{
                        active: t.list[n].state && !t.isShowAnswer
                    },
                    {
                        right: "true" === t.list[n].result && t.isShowAnswer
                    },
                    {
                        error: "false" === t.list[n].result && t.isShowAnswer
                    },
                    {
                        actindex: n == t.crtIndex
                    }],
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.jumpQuestion(n)
                        }
                    }
                },
                [t._v(t._s(n + 1))])
            })), 1)], 1) : t._e(), t.isShowSheet ? i("v-uni-view", {
                staticClass: "sumbit-btn cursor-pointer",
                style: {
                    background: t.themeColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.submit.apply(void 0, arguments)
                    }
                }
            },
            [t._v("提交")]) : t._e()], 1) : t._e()], 1)
        },
        s = []
    },
    "0d31": function(t, e, i) {
        "use strict";
        var n = i("a4d36"),
        o = i.n(n);
        o.a
    },
    1406 : function(t, e, i) {
        "use strict";
        var n = i("4ea4"),
        o = (n(i("bee5")), n(i("60a2")), i("0c6d")),
        s = o.request,
        a = i("ca00"),
        r = function(t) {
            return s("m/Activity/Get", t)
        },
        l = function(t) {
            return s("pluginAnswer/answerView/UpdateAnswerCount", t)
        },
        c = function(t) {
            return s("pluginAnswer/answerView/SaveAnswer", t, "post")
        },
        d = function(t) {
            return s("pluginAnswer/ActivityViewCommon/MyAnswerRecordDetail", t)
        },
        u = function(t) {
            return t = a.appendAbProp(t),
            s("pluginAnswer/answerView/GetTops", t)
        },
        h = function(t) {
            return s("pluginAnswer/answerView/GetAnswerList", t, "GET", !0)
        },
        p = function(t) {
            return s("pluginAnswer/AnswerView/GetQuestionRecord", t)
        },
        f = function(t) {
            return s("pluginAnswer/AnswerView/GetAllAnswerList", t)
        },
        v = function(t) {
            return s("pluginAnswer/answerView/SaveMemberInfo", t)
        },
        w = function(t) {
            return s("pluginAnswer/answerView/SavePoster", t, "POST")
        },
        m = function(t) {
            return t = a.appendAbProp(t),
            s("pluginAnswer/answerView/GetGroupTops", t)
        },
        b = function(t) {
            return s("pluginAnswer/answerView/UpdateAnswerCount", t)
        };
        t.exports = {
            getActive: r,
            updateAnswerCount: l,
            saveAnswer: c,
            getRecordDetail: d,
            getTops: u,
            getList: h,
            getRecordList: p,
            getAllList: f,
            saveMemberInfo: v,
            savePoster: w,
            GetGroupTops: m,
            StartAnswer: b
        }
    },
    "26a7": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("0b6c"),
        o = i("4e4f");
        for (var s in o)["default"].indexOf(s) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return o[t]
            }))
        } (s);
        i("0d31");
        var a, r = i("f0c5"),
        l = Object(r["a"])(o["default"], n["b"], n["c"], !1, null, "bee2e07e", null, !1, n["a"], a);
        e["default"] = l.exports
    },
    3620 : function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("5c10"),
        o = i.n(n);
        for (var s in n)["default"].indexOf(s) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return n[t]
            }))
        } (s);
        e["default"] = o.a
    },
    "4a60": function(t, e, i) {
        var n = i("4bad");
        e = n(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.answer-content .tools-top[data-v-1305e76d]{position:fixed;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;z-index:10}.answer-content .tools-top .down-time[data-v-1305e76d]{font-size:%?52?%;color:#0064ff}.answer-content .tools-top > .item[data-v-1305e76d]{height:%?120?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\r\n/* .answer-content .tools-top .item +.item{\r\n  border-left: 2rpx solid #f0f0f0;\r\n} */.answer-content .tools-top .item.active[data-v-1305e76d]{color:#0064ff}.answer-content .tools-top .time[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.answer-content .tools-top .time .text[data-v-1305e76d]{margin-top:%?10?%;font-size:%?24?%;color:#999}.answer-content .tools-top .icon[data-v-1305e76d]{margin-right:%?10?%;font-size:%?34?%}.answer-card[data-v-1305e76d]{height:%?490?%;background:#fff;padding:%?60?% %?40?% 0 %?40?%}.answer-card .inner[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;z-index:2;left:%?30?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;width:100%;height:%?440?%;overflow:auto}.answer-card .item[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:cneter;-webkit-align-items:cneter;align-items:cneter;width:%?80?%;height:%?80?%;line-height:%?80?%;border-radius:50%;border:%?2?% solid #ebebeb;margin-left:%?30?%;margin-bottom:%?30?%;color:#666}.answer-card .item.right[data-v-1305e76d]{border-color:#0dd087;color:#0dd087;background:#f4fbf2}.answer-card .item.error[data-v-1305e76d]{border-color:#fd5050;color:#fd5050;background:#fff2f2}.answer-content .content[data-v-1305e76d]{position:fixed;top:%?120?%;left:0;right:0;bottom:0;overflow:auto;padding:0 %?50?%}.answer-content .content .question[data-v-1305e76d]{padding-bottom:%?40?%}.answer-content .content .question .order-number[data-v-1305e76d]{text-align:center;font-size:%?34?%;margin:%?30?% 0 %?140?% 0}.answer-content .content .question .title[data-v-1305e76d]{font-weight:700;margin-top:%?20?%;margin-bottom:%?60?%;font-size:%?32?%}.answer-content .content .options .item[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-size:%?30?%;padding:%?28?% %?70?% %?28?% %?50?%;margin-top:%?40?%;min-height:%?80?%;border:%?2?% solid #999;\r\n  /* background: #fff; */border-radius:%?50?%;color:#2c2c2c;text-align:left;word-break:break-all}.answer-content .content .options .item uni-image[data-v-1305e76d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?100?%;margin-left:%?20?%}.answer-content .content .options .item .iconfont[data-v-1305e76d]{display:none;position:absolute;top:%?26?%;right:%?28?%}.answer-content .content .options .item.active[data-v-1305e76d]{color:#fff}.answer-content .content .options .item.active[data-v-1305e76d]{background:#0064ff!important;color:#fff!important;border-color:#0064ff!important}.answer-content .content .options .item.right[data-v-1305e76d]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options .item.right .right-icon[data-v-1305e76d]{display:block}.answer-content .content .options .item.error .error-icon[data-v-1305e76d]{display:block}.answer-content .content .options .item.error[data-v-1305e76d]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options .item.rightAnswer[data-v-1305e76d]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.right-bg[data-v-1305e76d]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.error-bg[data-v-1305e76d]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options .item-fill[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;font-size:%?30?%;padding:0 %?30?%;margin-top:%?40?%;color:#2c2c2c;text-align:left;word-break:break-all;width:%?650?%;height:%?90?%;border-radius:%?4?%;border:%?2?% solid #999}.answer-content .content .options .item-fill .item-input[data-v-1305e76d]{width:%?450?%}.answer-content .content .options .item-fill .item-input .uni-input-placeholder[data-v-1305e76d]{color:#adadad}.answer-content .content .options .item-fill .item-num[data-v-1305e76d]{width:%?36?%;height:%?36?%;line-height:%?36?%;border:%?2?% solid #999;border-radius:%?2?%;color:#e0e0e0;font-size:%?24?%;text-align:center}.answer-content .content .options .item-fill .curnum[data-v-1305e76d]{color:#fff;border:none}.answer-content .content .options .item-textarea[data-v-1305e76d]{border-radius:%?8?%;border:%?2?% solid #999;padding:%?20?%;width:%?650?%;height:%?230?%}.answer-content .content .options .item-textarea .detail[data-v-1305e76d]{width:100%;height:100%}.answer-content .content .options .item-textarea .detail .uni-textarea-placeholder[data-v-1305e76d]{color:#adadad}.answer-content .content .img[data-v-1305e76d]{margin-top:%?20?%;width:100%;height:%?320?%}.answer-content .content .btn-sure[data-v-1305e76d]{width:%?260?%;height:%?68?%;line-height:%?68?%;background:#0064ff;text-align:center;color:#fff;border-radius:%?60?%;margin:%?50?% auto 0 auto;border:%?2?% solid transparent}.answer-content .content .audio[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?20?%;width:100%;height:%?100?%;background:none}.answer-content .content .audio uni-image[data-v-1305e76d]{width:%?100?%;height:%?100?%}.answer-content .content .video[data-v-1305e76d]{width:%?650?%;height:%?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.answer-content .content .video uni-video[data-v-1305e76d]{width:100%;height:100%}.answer-content .content .video .iframe[data-v-1305e76d]{height:100%}.answer-content .content .video iframe[data-v-1305e76d]{width:100%;height:100%}.answer-content .content .sapce[data-v-1305e76d]{height:%?20?%;background:#efeff4}.answer-content .content .analysis[data-v-1305e76d]{border-radius:%?16?%;margin-top:%?50?%;background:#fff}.answer-content .content .analysis .title[data-v-1305e76d]{padding:%?24?%;font-weight:700;margin-bottom:%?24?%;border-bottom:%?2?% solid hsla(0,0%,87.1%,.3)}.answer-content .content .analysis .answer[data-v-1305e76d]{font-weight:700;padding:0 %?24?%}.answer-content .content .analysis .detail[data-v-1305e76d]{color:#666;padding:%?30?%}.answer-content .tools-bottom[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?100?%;padding-bottom:%?80?%}.answer-content .tools-bottom > .btn[data-v-1305e76d]{font-size:%?30?%;height:%?90?%;width:%?310?%;border-radius:%?50?%;color:#fff;border:%?2?% solid #fff}.answer-content .tools-bottom .btn.last[data-v-1305e76d]{background:none;border:%?2?% solid #0064ff;color:#0064ff}.answer-content .mask[data-v-1305e76d]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:99}.answer-content .mask .popup[data-v-1305e76d]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-70%);transform:translateX(-50%) translateY(-70%);width:%?560?%;background:#fff;border-radius:%?10?%;padding:%?50?% %?50?% %?60?% %?50?%;font-size:%?36?%}.answer-content .mask .popup .btn-sure[data-v-1305e76d]{height:%?76?%;line-height:%?76?%;background:#0064ff;color:#fff;text-align:center;border-radius:%?50?%;margin-top:%?40?%}.answer-content .mask .popup .icon[data-v-1305e76d]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#fff;font-size:%?60?%}.answer-content .mask #analysis .tips[data-v-1305e76d]{max-height:%?500?%;overflow:auto;font-size:%?30?%}.modals[data-v-1305e76d]{position:fixed;z-index:999;top:0;left:0;right:0;bottom:0}.modals-cancel[data-v-1305e76d]{position:absolute;z-index:1000;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.2)}.bottom-dialog-body[data-v-1305e76d]{position:absolute;z-index:10001;bottom:0;left:0;right:0;height:%?600?%;background-color:#fff;border-top-left-radius:%?30?%;border-top-right-radius:%?30?%}.bottom-dialog-body .inner[data-v-1305e76d]{\r\n  /* padding:30rpx;  */}.bottom-dialog-body .close[data-v-1305e76d]{\r\n  /* position: absolute;\r\n  top: 14rpx;\r\n  right: 14rpx; */font-size:%?34?%\r\n  /* padding: 10rpx; */}.bottom-dialog-body .title[data-v-1305e76d]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;border-bottom:%?2?% solid #dfdfdf;font-weight:700}.bottom-dialog-body .header uni-image[data-v-1305e76d]{width:%?220?%;height:%?220?%;margin-right:%?20?%;border-radius:%?10?%}.bottom-dialog-body .header .info[data-v-1305e76d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?20?%}.bottom-pos[data-v-1305e76d]{-webkit-transform:translateY(100%);transform:translateY(100%)}.answer-bg[data-v-1305e76d]{position:fixed;left:0;top:0;z-index:-5;width:100%;height:100%;background-repeat:no-repeat;background-size:100% auto}.end-btn[data-v-1305e76d]{position:absolute;right:%?50?%;top:%?50?%;z-index:1}.answer-pc-practice[data-v-1305e76d]{width:750px!important;margin-left:250px;position:relative;margin-top:5px;margin-bottom:5px}.answer-pc-practice .answer-bg[data-v-1305e76d]{width:750px!important;position:absolute}.answer-pc-practice .answer-content[data-v-1305e76d]{width:750px!important;position:relative;height:100%;box-shadow:0 2px 8px 0 rgba(0,0,0,.1);border-radius:4px}.answer-pc-practice .answer-content .content[data-v-1305e76d]{width:750px!important;position:relative;margin-top:20px;top:0!important}.answer-pc-practice .answer-content .content .options[data-v-1305e76d]{margin:0 40px}.answer-pc-practice .answer-content .content .options .item-fill[data-v-1305e76d]{width:100%!important}.answer-pc-practice .answer-content .content .item-textarea[data-v-1305e76d]{width:100%!important}.answer-pc-practice .tools-top-pc[data-v-1305e76d]{width:100%;height:50px;line-height:50px;background:#fafafa;border-bottom:1px solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;color:#333;padding-left:15px}.answer-pc-practice .tools-top-pc .title[data-v-1305e76d]{font-size:14px}.answer-pc-practice .content .options[data-v-1305e76d]{margin:0 40px}.answer-pc-practice .content .options .item-fill[data-v-1305e76d]{width:100%!important}.answer-pc-practice .content .item-textarea[data-v-1305e76d]{width:100%!important}.answer-pc-practice .right-box-pc[data-v-1305e76d]{width:220px;height:600px;position:absolute;right:-235px;top:0}.answer-pc-practice .right-box-pc .sumbit-btn[data-v-1305e76d]{width:220px;height:45px;line-height:45px;border-radius:4px;font-size:16px;color:#fff;text-align:center;background:#0064ff}.answer-pc-practice .analysis[data-v-1305e76d]{width:616px;margin:0 auto}.answer-pc-practice .video[data-v-1305e76d]{margin:0 auto}', ""]),
        t.exports = e
    },
    "4e4f": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("6be3"),
        o = i.n(n);
        for (var s in n)["default"].indexOf(s) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return n[t]
            }))
        } (s);
        e["default"] = o.a
    },
    "52e6": function(t, e, i) {
        "use strict"; (function(t) {
            var n = i("4ea4");
            i("99af"),
            i("a623"),
            i("4de4"),
            i("caad"),
            i("a15b"),
            i("a434"),
            i("e25e"),
            i("4d63"),
            i("ac1f"),
            i("25f0"),
            i("2532"),
            i("5319"),
            i("1276"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var o = n(i("b85c")),
            s = n(i("e143")),
            a = n(i("ceb0")),
            r = n(i("0d1e")),
            l = n(i("c5e2")),
            c = n(i("ca00")),
            d = n(i("bee5")),
            u = n(i("60a2")),
            h = n(i("9cc6")),
            p = null,
            f = {
                props: {
                    activityInfo: {
                        type: Object,
                    default:
                        {
                            questionList:
                            []
                        }
                    },
                    theme: {
                        type: Object,
                    default:
                        {}
                    }
                },
                data: function() {
                    return {
                        loading: !0,
                        list: [],
                        emptyQuestion: !1,
                        imageHost: s.
                    default.conf.imageHost,
                        musicHost: s.
                    default.conf.musicHost,
                        WORD: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
                        fillIndex: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                        fillInputIndex: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"],
                        icon_play: "mini/icon/music_play.png",
                        icon_pause: "mini/icon/music_pause.png",
                        btnText: "下一题",
                        isEndByError: !0,
                        isShowAnswer: !0,
                        crtIndex: 0,
                        scrollTop: 0,
                        screenshotNum: 0,
                        unAnsweredNum: 0,
                        cheatTotal: 0,
                        downTime: "--:--",
                        timestamp: "",
                        musicPlay: "",
                        themeColor: "",
                        pageBg: "",
                        themeTextColor: "",
                        titleColor: "",
                        btnTextColor: "",
                        hideModal: !1,
                        animationData: {},
                        optionsStyle: "",
                        nextBtnStyle: "",
                        lastBtnStyle: "",
                        sureBtnStyle: "",
                        defaultOptionsStyle: {
                            color: "#333",
                            bgColor: "",
                            borderColor: "rgba(148, 148, 148, 0.5)",
                            bgImage: ""
                        },
                        defaultLastBtnStyle: {
                            bgColor: "",
                            bgImage: "",
                            borderColor: "#0064ff",
                            color: "#0064ff"
                        },
                        defaultNextBtnStyle: {
                            bgColor: "#0064ff",
                            bgImage: "",
                            borderColor: "#0064ff",
                            color: "#fff"
                        },
                        page: 1,
                        analysisVisible: !1,
                        isPcJoin: 1 == s.
                    default.$isPcJoin
                    }
                },
                mounted: function() {
                    if (this.isPcJoin) {
                        var e = document.getElementsByTagName("body")[0];
                        e.style.maxWidth = "1250px",
                        this.$nextTick((function() {
                            document.getElementsByTagName("uni-app")[0].style.boxShadow = "none"
                        }))
                    }
                    var i = d.
                default.getData("ANSWER_PRACTISE_DATA_" + this.activityInfo.activityGuid);
                    this.list = this.initQuestionList(i.questionList),
                    this.emptyQuestion = i.emptyQuestion,
                    this.list = this.filterQuestionTitle(this.list),
                    t.log(11111, this.list),
                    this.initAnswer()
                },
                destroyed: function() {
                    this.destroyAudio()
                },
                computed: {},
                methods: {
                    getAnalysisState: function(t, e, i) {
                        return ! (1 != t || !e) || !(0 != t || !e || "false" != i)
                    },
                    initAnswer: function() {
                        c.
                    default.showLoading(),
                        this.initSetting(),
                        this.initTheme(),
                        this.checkHaveAnswer()
                    },
                    initSetting: function() {
                        uni.removeStorageSync("ANSWER_RESULT_KEY");
                        var t = this.activityInfo,
                        e = t.answerSetting,
                        i = !0,
                        n = !0;
                        this.list && (0 != this.list.length ? (0 == e.isShowAnswer && (i = !1), 0 == e.isShowExplainByRight && (n = !1), this.isShowAnswer = i, this.isShowExplainByRight = n, this.timestamp = (new Date).getTime(), this.initAudio(), this.initVideo()) : c.
                    default.showAlert({
                            content:
                            "暂无题目",
                            callback: function() {
                                uni.navigateBack()
                            }
                        }))
                    },
                    initTheme: function() {
                        var t = this.theme,
                        e = l.
                    default.parseTheme(t);
                        if (d.
                    default.setData("ANSWER_STYLE_KEY", JSON.stringify(e)), e) {
                            e.bgStyle.backgroundColor,
                            e.colorStyle.color;
                            var i = e.colorStyle.themeColor,
                            n = e.optionsStyle || this.defaultOptionsStyle,
                            o = e.lastBtnStyle || this.defaultLastBtnStyle,
                            s = e.nextBtnStyle || this.defaultNextBtnStyle,
                            a = e.sureBtnStyle || {
                                color: e.startBtnStyle.color,
                                bgColor: i,
                                borderColor: i,
                                bgImage: ""
                            },
                            r = this.getStyleStr(n),
                            u = this.getStyleStr(o),
                            h = this.getStyleStr(s),
                            p = this.getStyleStr(a),
                            f = "background:" + l.
                        default.formatPluginBackGroud({
                                backgroundImage:
                                e.answerStyle.bgImage || "",
                                backgroundColor: e.answerStyle.bgColor || ""
                            });
                            this.pageBg = f,
                            this.themeColor = i,
                            this.themeTextColor = e.colorStyle.color,
                            this.titleColor = e.optionsStyle.titleColor || this.themeTextColor,
                            this.optionsStyle = r,
                            this.lastBtnStyle = u,
                            this.nextBtnStyle = h,
                            this.sureBtnStyle = p,
                            this.btnTextColor = e.startBtnStyle.color,
                            this.loading = !1,
                            this.$nextTick((function() {
                                var t = document.documentElement.clientHeight;
                                document.getElementsByClassName("answer-content")[0].style.minHeight = "".concat(t - 200, "px")
                            })),
                            c.
                        default.hideLoading()
                        }
                    },
                    initQuestionList: function(t) {
                        var e, i = [],
                        n = (0, o.
                    default)(t);
                        try {
                            for (n.s(); ! (e = n.n()).done;) {
                                for (var s = e.value,
                                a = [], r = [], l = [], d = s.exdata || {},
                                u = s.result.length, h = !1, p = 0; p < u; p++) a.push(""),
                                r.push(""),
                                l.push("");
                                var f, v = (0, o.
                            default)(s.result);
                                try {
                                    for (v.s(); ! (f = v.n()).done;) {
                                        var w = f.value;
                                        if (w.answerExplain) {
                                            h = !0;
                                            break
                                        }
                                    }
                                } catch(b) {
                                    v.e(b)
                                } finally {
                                    v.f()
                                }
                                4 != s.questionMode && 5 != s.questionMode || !d.answerExplain || (h = !0),
                                5 == s.questionMode && (l = "");
                                var m = {
                                    options: s.result,
                                    question: s.question,
                                    rightCount: s.rightCount,
                                    image: s.image,
                                    music: s.music,
                                    video: s.video,
                                    videoType: d.videoType,
                                    videoPoster: c.
                                default.getImageUrl(d.videoPoster),
                                    type: s.type,
                                    state: !1,
                                    result: "",
                                    answer: l,
                                    reply: a,
                                    multiple: s.rightCount > 1 ? r: [],
                                    isCheat: 0,
                                    answerTime: 0,
                                    score: 0,
                                    questionScore: s.score,
                                    questionGuid: s.guid,
                                    questionTotalScore: s.score,
                                    hasExplain: h,
                                    questionMode: s.questionMode || 1,
                                    scoreMode: s.scoreMode || 1,
                                    shortContent: s.shortContent || "",
                                    answerExplain: d.answerExplain || ""
                                };
                                i.push(m)
                            }
                        } catch(b) {
                            n.e(b)
                        } finally {
                            n.f()
                        }
                        return i
                    },
                    getStyleStr: function(t) {
                        return "color:".concat(t.color, ";background:").concat(t.bgColor, " url(").concat(c.
                    default.getImageUrl(t.bgImage), ") no-repeat center / cover;border-color:").concat(t.borderColor)
                    },
                    choose: function(t, e) {
                        if (!this.isChoose) {
                            var i = this.list,
                            n = (i.length, this.crtIndex, this.crtIndex),
                            o = t.right,
                            s = t.id,
                            a = i[n].score;
                            if (this.saveTime(), 1 == i[n].rightCount) {
                                this.isChoose = !0;
                                var r = i[n].options[e].right ? "true": "false";
                                if ("false" == r && (a = 0), i[n].state = !0, i[n].reply[e] = o, i[n].result = r, i[n].answer[e] = s, i[n].score = a, this.isShowAnswer) return void this.showAnalysis();
                                this.autoNext()
                            } else {
                                "list[".concat(n, "].multiple[").concat(e, "]");
                                var l = i[n].reply,
                                c = i[n].answer,
                                d = "";
                                1 == l[e] ? (i[n].answer.splice(e, 1, ""), d = "", i[n].reply[e] = d, i[n].multiple[e] = "", i[n].answer = c) : (d = 1, i[n].reply[e] = d, i[n].multiple[e] = o, i[n].answer[e] = s)
                            }
                            this.$forceUpdate()
                        }
                    },
                    confirmMultiple: function() {
                        var t = this.crtIndex,
                        e = ("list[".concat(t, "].reply"), "list[".concat(t, "].state"), "list[".concat(t, "].result"), this.list[t].multiple),
                        i = ((new Date).getTime(), this.timestamp, "list[".concat(t, "].score"), this.list[t].score),
                        n = "";
                        this.isEndByError,
                        this.list.length,
                        this.crtIndex;
                        if (this.saveTime(), e.includes(!1) || e.every((function(t) {
                            return "" === t
                        }))) n = "false";
                        else {
                            var s, a = 0,
                            r = (0, o.
                        default)(e);
                            try {
                                for (r.s(); ! (s = r.n()).done;) {
                                    var l = s.value; ! 0 === l && a++
                                }
                            } catch(c) {
                                r.e(c)
                            } finally {
                                r.f()
                            }
                            a && (n = a == this.list[t].rightCount ? "true": "false")
                        }
                        "false" == n && (i = 0),
                        this.isShowAnswer ? this.list[t].reply = e: this.list[t].right = !1,
                        this.list[t].state = !0,
                        this.list[t].result = n,
                        this.list[t].score = i,
                        this.$forceUpdate(),
                        this.isShowAnswer ? this.showAnalysis() : this.autoNext()
                    },
                    confirmInput: function(t) {
                        c.
                    default.recordClickEvent(t);
                        var e = this.crtIndex,
                        i = this.list[e].multiple,
                        n = this.list[e].score,
                        o = this.list[e].options,
                        s = this.list[e].answer,
                        a = "";
                        this.isEndByError;
                        if (this.saveTime(), this.isShowAnswer) {
                            for (var r = !0,
                            l = 0; l < o.length; l++) {
                                var d = o[l].value.split(",");
                                d.includes(s[l]) ? i[l] = !0 : (i[l] = !1, r = !1)
                            }
                            a = r
                        }
                        this.list[e].state = !0,
                        this.list[e].result = a,
                        this.list[e].score = n,
                        this.list[e].reply = i,
                        this.$forceUpdate(),
                        this.isShowAnswer ? this.showAnalysis() : this.autoNext()
                    },
                    chooseOrder: function(t, e, i) {
                        c.
                    default.recordClickEvent(i);
                        var n = this.list;
                        n.length,
                        this.crtIndex;
                        if (this.list[this.crtIndex].curChooseValue || (this.list[this.crtIndex].curChooseValue = 1), t) {
                            this.list[this.crtIndex].answer[e] = "";
                            for (var o = 0; o < this.list[this.crtIndex].answer.length; o++) parseInt(this.list[this.crtIndex].answer[o]) > parseInt(t) && this.list[this.crtIndex].answer[o]--;
                            this.list[this.crtIndex].curChooseValue--
                        } else this.list[this.crtIndex].answer[e] = this.list[this.crtIndex].curChooseValue,
                        this.list[this.crtIndex].curChooseValue++;
                        this.$forceUpdate()
                    },
                    confirmOrder: function(t) {
                        c.
                    default.recordClickEvent(t);
                        var e = this.crtIndex,
                        i = this.list[e].multiple,
                        n = this.list[e].score,
                        o = this.list[e].options,
                        s = this.list[e].answer,
                        a = "",
                        r = "";
                        this.isEndByError;
                        if (this.saveTime(), this.isShowAnswer) {
                            for (var l = !0,
                            d = [], u = 0; u < o.length; u++) o[u].resultPos != s[u] && (l = !1),
                            d.push(o[u].resultPos);
                            a = l,
                            r = d.join("")
                        }
                        this.list[e].state = !0,
                        this.list[e].result = a,
                        this.list[e].score = n,
                        this.list[e].reply = i,
                        this.list[e].resultPos = r,
                        this.$forceUpdate(),
                        this.isShowAnswer ? this.showAnalysis() : this.autoNext()
                    },
                    confirmShort: function(t) {
                        c.
                    default.recordClickEvent(t);
                        var e = this.crtIndex,
                        i = this.list[e].multiple,
                        n = this.list[e].score,
                        o = (this.list[e].options, this.list[e].answer, "");
                        this.isEndByError;
                        this.saveTime(),
                        this.list[e].state = !0,
                        this.list[e].result = o,
                        this.list[e].score = n,
                        this.list[e].reply = i,
                        this.$forceUpdate(),
                        this.isShowAnswer ? this.showAnalysis() : this.autoNext()
                    },
                    saveTime: function() {
                        var t = (new Date).getTime() - this.timestamp,
                        e = this.crtIndex,
                        i = this.list[e].state;
                        this.timestamp = (new Date).getTime(),
                        i || (this.list[e].answerTime = this.list[e].answerTime + t)
                    },
                    autoNext: function() {
                        var t = this;
                        this.list.length - 1 == this.crtIndex ? (this.emptyQuestion ? this.page = 2 : this.page++, this.getList(), this.isChoose = !1) : setTimeout((function() {
                            t.isChoose = !1,
                            t.next()
                        }), 400)
                    },
                    getList: function() {
                        var t = this,
                        e = {
                            activityGuid: this.activityInfo.guid,
                            activityType: this.activityInfo.activityType,
                            page: this.page
                        };
                        c.
                    default.showLoading(),
                        a.
                    default.GetQuestionListByPractise(e).then((function(e) {
                            if (0 == e.result) {
                                t.emptyQuestion = e.data.emptyQuestion;
                                var i = t.initQuestionList(u.
                            default.analysisRightAnswer(e.data.questionList, t.activityInfo));
                                t.list = t.list.concat(i),
                                setTimeout((function() {
                                    c.
                                default.hideLoading(),
                                    t.autoNext()
                                }), 600)
                            } else c.
                        default.hideLoading(),
                            c.
                        default.showToast(e.msg, "none")
                        }))
                    },
                    showAnalysis: function() {
                        var t = this.crtIndex,
                        e = this.list[t].state,
                        i = this.list[t].result;
                        this.isShowExplainByRight || !e || "false" != i && "" != i ? this.isShowExplainByRight && e ? this.analysisVisible = !0 : this.autoNext() : this.analysisVisible = !0
                    },
                    colseAnalysis: function() {
                        this.isEndByError,
                        this.list[this.crtIndex].result;
                        this.analysisVisible = !1,
                        this.autoNext()
                    },
                    confirmSubmit: function() {
                        c.
                    default.showToast("提交中", "loading"),
                        this.handExam()
                    },
                    submit: function() {
                        this.saveTime(),
                        this.handExam()
                    },
                    handExam: function() {
                        this.saveAnswer()
                    },
                    saveAnswer: function() {
                        var t, e = [],
                        i = (0, o.
                    default)(this.list);
                        try {
							//[{"isCheat":0,"answerTime":1091,"score":0,"right":0,"result":["18527324"],"questionGuid":"0fac036a6ddd8736c326653bd95774af","questionScore":"10"},{"isCheat":0,"answerTime":2162,"score":0,"right":0,"result":["18527345"],"questionGuid":"7222362b509496e57e9ce587c3180e85","questionScore":"10"},{"isCheat":0,"answerTime":1512,"score":0,"right":0,"result":["18527166"],"questionGuid":"ee1cd925cb8b32ea77c1c7d71879637a","questionScore":"10"},{"isCheat":0,"answerTime":1202,"score":0,"right":0,"result":["18527121"],"questionGuid":"814d45262279d5d0c07fe7e3c22f156c","questionScore":"10"},{"isCheat":0,"answerTime":1789,"score":0,"right":0,"result":["18527270"],"questionGuid":"13142e6b00a21ba1c14a17095e80bc92","questionScore":"10"}]
                            for (i.s(); ! (t = i.n()).done;) {
                                var n = t.value,
                                s = {
                                    isCheat: n.isCheat,
                                    answerTime: 1000+parseInt(Math.random()*50),//-----
                                    score: n.score,
                                    right: "true" == n.result ? 1 : 0,
                                    result: this.getResult(n),
                                    questionGuid: n.questionGuid,
                                    questionScore: n.questionTotalScore
                                };
                                e.push(s)
                            }
                        } catch(a) {
                            i.e(a)
                        } finally {
                            i.f()
                        }
                        this.$emit("saveAnswer", e)
                    },
                    getResult: function(t) {
                        var e = t.answer,
                        i = t.state,
                        n = t.questionMode,
                        s = t.options;
                        if (1 == n || 2 == n) {
                            var a, r = !1,
                            l = (0, o.
                        default)(e);
                            try {
                                for (l.s(); ! (a = l.n()).done;) {
                                    var c = a.value;
                                    "" !== c && (r = !0)
                                }
                            } catch(w) {
                                l.e(w)
                            } finally {
                                l.f()
                            }
                            return r && i ? e.filter((function(t) {
                                return t
                            })) : ""
                        }
                        if (3 == n) {
                            var d, u = !1,
                            h = (0, o.
                        default)(e);
                            try {
                                for (h.s(); ! (d = h.n()).done;) {
                                    var p = d.value;
                                    "" !== p && (u = !0)
                                }
                            } catch(w) {
                                h.e(w)
                            } finally {
                                h.f()
                            }
                            return u && i ? e.filter((function(t) {
                                return t
                            })) : []
                        }
                        if (4 == n) {
                            for (var f = [], v = 0; v < e.length; v++) f[e[v] - 1] = s[v].id;
                            return f
                        }
                        if (5 == n) return e
                    },
                    next: function() {
                        c.
                    default.hideToast(),
                        this.saveTime();
                        var t = this.crtIndex + 1;
                        this.activityInfo.answerSetting;
                        t == this.list.length - 1 && (this.btnText = "提交"),
                        this.crtIndex = t,
                        this.isChoose = !1,
                        this.initAudio(),
                        this.initVideo(),
                        this.checkHaveAnswer()
                    },
                    initAudio: function() {
                        var t = this;
                        if (this.destroyAudio(), 0 != this.list.length) {
                            var e = c.
                        default.getDataUrl(this.list[this.crtIndex].music);
                            e && (p = uni.createInnerAudioContext(), p.autoplay = !0, p.src = e, h.
                        default.stopBackgroundAudio(!0), p.play(), p.onPlay((function() {
                                t.musicPlay = !0
                            })), p.onPause((function() {
                                t.musicPlay = !1
                            })), p.onEnded((function() {
                                t.musicPlay = !1
                            })), p.onStop((function() {
                                t.musicPlay = !1
                            })), p.onError((function(t) {
                                c.
                            default.showAlert(t.msg)
                            })))
                        }
                    },
                    pauseMusic: function() {
                        p.pause(),
                        this.musicPlay = !1,
                        h.
                    default.resetBackgroundAudio()
                    },
                    playMusic: function() {
                        h.
                    default.stopBackgroundAudio(!0),
                        p.play(),
                        this.musicPlay = !0
                    },
                    destroyAudio: function() {
                        p && p.destroy(),
                        this.musicPlay = !1,
                        h.
                    default.resetBackgroundAudio()
                    },
                    checkHaveAnswer: function() {
                        var t = this;
                        0 != this.list.length && (0 != this.list[this.crtIndex].rightCount || 0 != this.list[this.crtIndex].state || 1 != this.list[this.crtIndex].questionMode && this.list[this.crtIndex].questionMode || (this.list[this.crtIndex].state = !0, c.
                    default.showAlertDialog({
                            content:
                            "该题未设置正确答案，不计分",
                            buttonText: "下一题",
                            callback: function() {
                                t.autoNext()
                            }
                        })))
                    },
                    initVideo: function() {
                        var t = this;
                        if (this.list[this.crtIndex].video && 1 == this.list[this.crtIndex].videoType && !this.list[this.crtIndex].playVideoUrl) {
                            var e = this.list[this.crtIndex].video,
                            i = {
                                activityGuid: this.activityInfo.activityGuid,
                                activityType: this.activityInfo.activityType,
                                encryptUrl: e
                            };
                            c.
                        default.showLoading(),
                            r.
                        default.getVideo(i).then((function(e) {
                                c.
                            default.hideLoading(),
                                0 == e.result ? (t.list[t.crtIndex].playVideoUrl = e.data.videoUrl, t.$forceUpdate()) : c.
                            default.showToast(e.msg, "none")
                            }))
                        }
                    },
                    filterQuestionTitle: function(t) {
                        for (var e = 0; e < t.length; e++) t[e].question = t[e].question.replace(new RegExp("\n", "gm"), "</br>");
                        return t
                    }
                }
            };
            e.
        default = f
        }).call(this, i("5a52")["default"])
    },
    "5c10": function(t, e, i) {
        "use strict";
        var n = i("4ea4");
        i("99af"),
        i("e25e"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = void 0;
        var o = n(i("b85c")),
        s = n(i("e143")),
        a = n(i("26a7")),
        r = n(i("f5b9")),
        l = n(i("1406")),
        c = n(i("ceb0")),
        d = n(i("3d0e")),
        u = n(i("ca00")),
        h = n(i("bee5")),
        p = n(i("4820")),
        f = n(i("60a2")),
        v = {
            data: function() {
                return {
                    list: [],
                    activityGuid: "",
                    activityInfo: {},
                    activityType: 4,
                    pagePath: s.
                default.$pagePath,
                    theme: {},
                    loading: !0,
                    practiceLoading: !0,
                    posterPageData: "",
                    userInfo: "",
                    showPoster: !1,
                    totalScore: 0,
                    totalTime: 0,
                    saveAnswerData: "",
                    posterQrData: {
                        path: "",
                        scene: ""
                    },
                    isCanTouch: !1,
                    posterData: {},
                    committing: !1,
                    submitCount: 0,
                    isPractice: 0,
                    practiceType: 1,
                    isAbnormal: 0
                }
            },
            onLoaded: function(t) {
                this.activityGuid = t.guid,
                h.
            default.getData("ANSWER_FLAG_" + this.activityGuid) ? (this.isPractice = t.isPractice || 0, this.isAbnormal = t.isAbnormal || 0, this.recordId = t.recordId, this.topDayId = t.topDayId, this.getActive()) : this.redirectHome()
            },
            components: {
                AnswerQuestion: a.
            default,
                AnswerPractice: r.
            default
            },
            HideSharePage: !0,
            methods: {
                getActive: function() {
                    var t = this,
                    e = {
                        activityGuid: this.activityGuid,
                        activityType: this.activityType
                    };
                    l.
                default.getActive(e).then((function(e) {
                        if (0 == e.result) {
                            var i = [];
                            if (i = 1 == t.isPractice ? h.
                        default.getData("ANSWER_PRACTISE_DATA_" + t.activityGuid).questionList: h.
                        default.getData("ANSWER_QUESTION_LIST_" + t.activityGuid), !i && 0 == t.isAbnormal) return void t.redirectHome();
                            i && (t.list = f.
                        default.initQuestionList(i)),
                            t.activityInfo = e.data,
                            u.
                        default.setNavigationBarTitle(t.activityInfo.activityName),
                            t.theme = e.data.theme,
                            t.activityInfo.activityAnswerPractise && (t.practiceType = t.activityInfo.activityAnswerPractise.practiceType || 1),
                            2 == t.practiceType && 1 == t.isPractice ? t.practiceLoading = !1 : t.loading = !1
                        } else u.
                    default.showToast(e.msg, "none")
                    }))
                },
                initQuestionList: function(t) {
                    var e, i = [],
                    n = (0, o.
                default)(t);
                    try {
                        for (n.s(); ! (e = n.n()).done;) {
                            for (var s = e.value,
                            a = [], r = [], l = [], c = s.exdata || {},
                            d = s.result.length, h = !1, p = 0; p < d; p++) a.push(""),
                            r.push(""),
                            l.push("");
                            var f, v = (0, o.
                        default)(s.result);
                            try {
                                for (v.s(); ! (f = v.n()).done;) {
                                    var w = f.value;
                                    if (w.answerExplain) {
                                        h = !0;
                                        break
                                    }
                                }
                            } catch(b) {
                                v.e(b)
                            } finally {
                                v.f()
                            }
                            4 != s.questionMode && 5 != s.questionMode || !c.answerExplain || (h = !0),
                            5 == s.questionMode && (l = "");
                            var m = {
                                options: s.result,
                                question: s.question,
                                rightCount: s.rightCount,
                                image: s.image,
                                music: s.music,
                                video: s.video,
                                videoType: c.videoType,
                                videoPoster: u.
                            default.getImageUrl(c.videoPoster),
                                type: s.type,
                                state: !1,
                                result: "",
                                answer: l,
                                reply: a,
                                multiple: s.rightCount > 1 ? r: [],
                                isCheat: 0,
                                answerTime: 0,
                                score: 0,
                                questionScore: s.score,
                                questionGuid: s.guid,
                                questionTotalScore: s.score,
                                hasExplain: h,
                                questionMode: s.questionMode || 1,
                                scoreMode: s.scoreMode || 1,
                                shortContent: s.shortContent || "",
                                answerExplain: c.answerExplain || ""
                            };
                            i.push(m)
                        }
                    } catch(b) {
                        n.e(b)
                    } finally {
                        n.f()
                    }
                    this.list = i
                },
                saveAnswer: function(t) {
                    var e = this;
                    if (!this.committing) if (this.committing = !0, u.
                default.showLoading("提交中"), 1 != this.isPractice) {
                        var i = {
                            resultData: t,
                            checkpoint: 0,
                            activityGuid: this.activityGuid,
                            activityType: this.activityType,
                            recordId: this.recordId,
                            topDayId: this.topDayId
                        };
                        l.
                    default.saveAnswer(i).then((function(i) {
                            if (u.
                        default.hideLoading(), e.committing = !1, 0 == i.result) {
                                if ((!i.data.record || !i.data.record.questionCount) && e.submitCount < 5) return e.submitCount++,
                                void e.saveAnswer(t);
                                e.saveAnswerData = i.data,
                                e.resetPoster()
                            } else 4500 == i.result ? u.
                        default.showVerifyCodeDialog({
                                guid:
                                e.activityGuid,
                                callback: function(i) {
                                    i && i.isVerify && e.saveAnswer(t)
                                }
                            }) : u.
                        default.showToast(i.msg, "none")
                        }))
                    } else this.savePractise(t)
                },
                savePractise: function(t) {
                    var e = this,
                    i = {
                        resultData: t,
                        activityGuid: this.activityGuid,
                        activityType: this.activityType
                    };
                    c.
                default.OverPractise(i).then((function(t) {
                        if (e.committing = !1, 0 == t.result) {
                            e.saveAnswerData = t.data;
                            var i = {
                                resultData: t.data.resultData,
                                activityGuid: e.activityGuid,
                                activityType: e.activityType,
                                wsiteGuid: e.activityInfo.wsiteGuid
                            };
                            h.
                        default.setData("PRACTICE_ANALYSIS_OPTION_" + e.activityGuid, i),
                            2 == e.practiceType ? e.answerSuccess() : e.resetPoster()
                        } else 4396 == t.result ? e.redirectHome() : u.
                    default.showToast(t.msg, "none")
                    }))
                },
                answerSuccess: function(t) {
                    var e = this;
                    u.
                default.showToast("提交成功");
                    var i = this.saveAnswerData,
                    n = this.isPractice || 0;
                    i.activityInfo.questionList = this.activityInfo.questionList,
                    t && (i.record.posterDataUrl = t),
                    h.
                default.setData("ANSWER_RESULT_KEY_" + i.activityInfo.guid, i),
                    setTimeout((function() {
                        u.
                    default.redirectTo({
                            url:
                            e.pagePath.answerResult + "?isPractice=".concat(n, "&guid=").concat(i.activityInfo.guid)
                        })
                    }), 500)
                },
                resetPoster: function() {
                    var t = this.saveAnswerData;
                    if (this.activityInfo.showSetting && 2 == this.activityInfo.showSetting.showAnswerType) {
                        for (var e = parseInt(t.record.totalScore), i = this.activityInfo.exPosterList, n = "", o = "", s = 0; s < i.length; s++) {
                            var a = parseInt(i[s]["lowScore"]),
                            r = parseInt(i[s]["topScore"]);
                            if (e >= a && e <= r) {
                                n = i[s].wsiteGuid,
                                o = i[s].posterNum;
                                break
                            }
                        }
                        o ? this.getPosterByNum(n, o) : this.answerSuccess()
                    } else this.answerSuccess()
                },
                getPosterByNum: function(t, e) {
                    var i = this,
                    n = {
                        posterWsiteGuid: t,
                        posterNum: e
                    };
                    d.
                default.getPosterData(n).then((function(t) {
                        0 == t.result ? i.cratePoster(t.data.posterData) : (u.
                    default.showToast(t.msg, "none"), i.answerSuccess())
                    }))
                },
                resetPosterParam: function(t) {
                    var e = this.saveAnswerData,
                    i = e.record.totalScore,
                    n = e.record.totalTime,
                    o = e.myRank,
                    s = t[0];
                    s.content || (s.content = []);
                    for (var a = 0; a < s.content.length; a++) {
                        var r = s.content[a];
                        "goal" == r.type ? (r.type = "text", r.text = i) : "useTime" == r.type ? (r.type = "text", r.text = n + "秒") : "ranking" == r.type && (r.type = "text", r.text = o)
                    }
                    return s
                },
                cratePoster: function(t) {
                    var e = this.resetPosterParam(t),
                    i = {
                        curPosterParam: e,
                        activityGuid: this.activityGuid
                    };
                    this.posterData = e;
                    var n = s.
                default.$wsiteGuid,
                    o = {
                        path: s.
                    default.$pagePath.answerIndex,
                        scene: "guid=" + this.activityGuid + "&wsiteGuid=" + n
                    };
                    u.
                default.showLoading("提交中");
                    var a = p.
                default.getUserInfo();
                    this.userInfo = a,
                    this.posterQrData = o,
                    this.posterPageData = i,
                    this.showPoster = !0
                },
                compoundFail: function() {
                    u.
                default.showToast("海报合成失败", "none", !0)
                },
                createOver: function(t) {
                    var e = t;
                    e ? this.answerSuccess(e) : u.
                default.showToast("海报合成失败", "none", !0)
                },
                redirectHome: function() {
                    u.
                default.chekIsH5Activity() ? u.
                default.goBackH5Page(s.
                default.$wsiteGuid, {}) : u.
                default.redirectTo({
                        url:
                        s.
                    default.$pagePath.answerIndex + "?guid=" + this.activityGuid + "&wsiteGuid=" + s.
                    default.$wsiteGuid
                    })
                }
            }
        };
        e.
    default = v
    },
    "628b": function(t, e, i) {
        "use strict";
        var n;
        i.d(e, "b", (function() {
            return o
        })),
        i.d(e, "c", (function() {
            return s
        })),
        i.d(e, "a", (function() {
            return n
        }));
        var o = function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return t.loading ? t._e() : i("v-uni-view", {
                class: {
                    "answer-pc-practice": t.isPcJoin
                }
            },
            [i("v-uni-view", {
                staticClass: "answer-bg",
                style: t.pageBg
            }), i("v-uni-view", {
                staticClass: "answer-content"
            },
            [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "end-btn cursor-pointer",
                style: {
                    color: t.themeColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.submit.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-text", {
                staticClass: "icon iconfont iconsubmit"
            }), t._v("结束练习")], 1), t.isPcJoin ? i("v-uni-view", {
                staticClass: "tools-top-pc"
            },
            [i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [1 != t.list[t.crtIndex].questionMode && t.list[t.crtIndex].questionMode ? t._e() : [t._v("【" + t._s(t.list[t.crtIndex].rightCount > 1 ? "多选题": "单选题") + "】")], 2 == t.list[t.crtIndex].questionMode ? [t._v("【判断题】")] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._v("【填空题】")] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._v("【排序题】")] : t._e(), 5 == t.list[t.crtIndex].questionMode ? [t._v("【简答题】")] : t._e(), t._v("（" + t._s(t.list[t.crtIndex].questionScore) + "分）")], 2)], 1) : t._e(), i("v-uni-view", {
                staticClass: "content",
                staticStyle: {
                    top: "0"
                }
            },
            [i("v-uni-view", {
                staticClass: "question"
            },
            [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "order-number",
                style: {
                    color: t.titleColor
                }
            }), i("v-uni-view", {
                staticClass: "title",
                style: {
                    color: t.titleColor
                }
            },
            [1 != t.list[t.crtIndex].questionMode && t.list[t.crtIndex].questionMode ? t._e() : [t.isPcJoin ? t._e() : [t._v("【" + t._s(t.list[t.crtIndex].rightCount > 1 ? "多选题": "单选题") + "】")], i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })], 2 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【判断题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【填空题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【排序题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e(), 5 == t.list[t.crtIndex].questionMode ? [t.isPcJoin ? t._e() : i("v-uni-view", {
                staticClass: "mb-xs"
            },
            [t._v("【简答题】(" + t._s(t.list[t.crtIndex].questionScore) + "分)")]), i("v-uni-view", {
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].question)
                }
            })] : t._e()], 2), t.list[t.crtIndex].image ? i("v-uni-image", {
                staticClass: "img",
                attrs: {
                    mode: "aspectFit",
                    src: t._f("imgPreFix")(t.list[t.crtIndex].image)
                }
            }) : t._e(), t.list[t.crtIndex].music ? i("v-uni-view", {
                staticClass: "audio cursor-pointer"
            },
            [t.musicPlay ? i("v-uni-view", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.pauseMusic.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-image", {
                attrs: {
                    mode: "aspectFit",
                    src: t.imageHost + t.icon_pause
                }
            })], 1) : t._e(), t.musicPlay ? t._e() : i("v-uni-view", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.playMusic.apply(void 0, arguments)
                    }
                }
            },
            [i("v-uni-image", {
                attrs: {
                    mode: "aspectFit",
                    src: t.imageHost + t.icon_play
                }
            })], 1)], 1) : t._e(), t.list[t.crtIndex].video ? i("v-uni-view", {
                staticClass: "video"
            },
            [1 == t.list[t.crtIndex].videoType && t.list[t.crtIndex].playVideoUrl ? [i("v-uni-video", {
                attrs: {
                    id: "myVideo",
                    src: t.list[t.crtIndex].playVideoUrl,
                    "show-center-play-btn": !1,
                    playsinline: !1,
                    "webkit-playsinline": !1,
                    "x-webkit-airplay": "allow",
                    "x5-video-player-type": "h5",
                    airplay: "allow",
                    type: "video/mp4",
                    "x5-video-player-fullscreen": "true",
                    "x5-video-orientation": "portrait",
                    preload: "auto",
                    poster: t.list[t.crtIndex].videoPoster
                }
            })] : t._e(), 2 == t.list[t.crtIndex].videoType ? [i("v-uni-view", {
                staticClass: "iframe",
                domProps: {
                    innerHTML: t._s(t.list[t.crtIndex].video)
                }
            })] : t._e()], 2) : t._e(), i("v-uni-view", {
                staticClass: "options"
            },
            [1 != t.list[t.crtIndex].questionMode && t.list[t.crtIndex].questionMode ? t._e() : [t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: {
                        right: !0 === t.list[t.crtIndex].reply[n],
                        error: !1 === t.list[t.crtIndex].reply[n],
                        active: 1 === t.list[t.crtIndex].reply[n],
                        rightAnswer: t.list[t.crtIndex].state && t.list[t.crtIndex].rightCount > 1 && e.right
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.choose(e, n)
                        }
                    }
                },
                ["text" == t.list[t.crtIndex].type ? [t._v(t._s(t.WORD[n]) + ". " + t._s(e.value))] : t._e(), "image" == t.list[t.crtIndex].type ? [i("v-uni-view", [t._v(t._s(t.WORD[n]) + ".")]), i("v-uni-image", {
                    attrs: {
                        mode: "aspectFit",
                        src: t._f("imgPreFix")(e.value)
                    }
                })] : t._e(), i("v-uni-text", {
                    staticClass: "right-icon iconfont iconzhengque"
                }), i("v-uni-text", {
                    staticClass: "error-icon iconfont iconwrong"
                })], 2)
            })), !t.list[t.crtIndex].state && t.list[t.crtIndex].rightCount > 1 ? i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmMultiple.apply(void 0, arguments)
                    }
                }
            },
            [t._v("确认答案")]) : t._e()], 2 == t.list[t.crtIndex].questionMode ? t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item cursor-pointer",
                    class: {
                        right: !0 === t.list[t.crtIndex].reply[n],
                        error: !1 === t.list[t.crtIndex].reply[n],
                        active: 1 === t.list[t.crtIndex].reply[n]
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(i) {
                            arguments[0] = i = t.$handleEvent(i),
                            t.choose(e, n, i)
                        }
                    }
                },
                [[t._v(t._s(e.value))], i("v-uni-text", {
                    staticClass: "right-icon iconfont iconzhengque"
                }), i("v-uni-text", {
                    staticClass: "error-icon iconfont iconwrong"
                })], 2)
            })) : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item-fill",
                    class: {
                        "right-bg": !0 === t.list[t.crtIndex].reply[n],
                        "error-bg": !1 === t.list[t.crtIndex].reply[n]
                    },
                    style: t.optionsStyle
                },
                [i("v-uni-text", [t._v(t._s(t.fillIndex[n]) + ".")]), i("v-uni-input", {
                    staticClass: "item-input ml-xs",
                    attrs: {
                        placeholder: "请输入答案"
                    },
                    model: {
                        value: t.list[t.crtIndex].answer[n],
                        callback: function(e) {
                            t.$set(t.list[t.crtIndex].answer, n, e)
                        },
                        expression: "list[crtIndex].answer[index]"
                    }
                })], 1)
            })), t.list[t.crtIndex].state ? t._e() : i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmInput.apply(void 0, arguments)
                    }
                }
            },
            [t._v("确认答案")])] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item-fill cursor-pointer",
                    class: {
                        "right-bg": !0 === t.list[t.crtIndex].result,
                        "error-bg": !1 === t.list[t.crtIndex].result
                    },
                    style: t.optionsStyle,
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.chooseOrder(t.list[t.crtIndex].answer[n], n)
                        }
                    }
                },
                [i("v-uni-view", {
                    staticClass: "item-num",
                    class: [{
                        curnum: t.list[t.crtIndex].answer[n] > 0
                    }],
                    style: {
                        background: t.list[t.crtIndex].answer[n] > 0 ? t.themeColor: ""
                    }
                },
                [t._v(t._s(t.list[t.crtIndex].answer[n]))]), i("v-uni-view", {
                    staticClass: "ml-sm"
                },
                [t._v(t._s(e.value))])], 1)
            })), t.list[t.crtIndex].state ? t._e() : i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmOrder.apply(void 0, arguments)
                    }
                }
            },
            [t._v("确认答案")])] : t._e(), 5 == t.list[t.crtIndex].questionMode ? [i("v-uni-view", {
                staticClass: "item-textarea",
                style: t.optionsStyle
            },
            [i("v-uni-textarea", {
                staticClass: "detail",
                attrs: {
                    placeholder: "请输入解答内容",
                    maxlength: "500"
                },
                model: {
                    value: t.list[t.crtIndex].answer,
                    callback: function(e) {
                        t.$set(t.list[t.crtIndex], "answer", e)
                    },
                    expression: "list[crtIndex].answer"
                }
            })], 1), t.list[t.crtIndex].state ? t._e() : i("v-uni-view", {
                staticClass: "btn-sure cursor-pointer",
                style: t.sureBtnStyle,
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.confirmShort.apply(void 0, arguments)
                    }
                }
            },
            [t._v("确认答案")])] : t._e()], 2)], 1), t.analysisVisible ? i("v-uni-view", {
                staticClass: "mask"
            },
            [i("v-uni-view", {
                staticClass: "popup",
                attrs: {
                    id: "analysis"
                }
            },
            [i("v-uni-view", {
                staticClass: "tips"
            },
            [i("v-uni-view", {
                staticClass: "analysis"
            },
            [i("v-uni-view", {
                staticClass: "answer"
            },
            [1 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [e.right ? i("v-uni-text", {
                    key: n
                },
                [t._v(t._s(t.WORD[n]))]) : t._e()]
            }))] : t._e(), 2 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [e.right ? i("v-uni-text", {
                    key: n
                },
                [t._v(t._s(e.value))]) : t._e()]
            }))] : t._e(), 3 == t.list[t.crtIndex].questionMode ? [t._v("正确答案："), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return [i("v-uni-view", {
                    key: n
                },
                [t._v(t._s(t.fillIndex[n]) + ":" + t._s(e.value))])]
            }))] : t._e(), 4 == t.list[t.crtIndex].questionMode ? [t._v("正确答案： " + t._s(t.list[t.crtIndex].resultPos))] : t._e(), 5 == t.list[t.crtIndex].questionMode && 3 == t.list[t.crtIndex].scoreMode ? [t._v("正确答案： " + t._s(t.list[t.crtIndex].shortContent))] : t._e()], 2), 1 == t.list[t.crtIndex].questionMode || 2 == t.list[t.crtIndex].questionMode || 3 == t.list[t.crtIndex].questionMode ? i("v-uni-view", {
                staticClass: "detail"
            },
            [t.list[t.crtIndex].hasExplain ? i("v-uni-view", [[t._v("【解析】")]], 2) : t._e(), t._l(t.list[t.crtIndex].options, (function(e, n) {
                return i("v-uni-view", {
                    key: n
                },
                [e.right ? [t._v(t._s(e.answerExplain))] : t._e()], 2)
            }))], 2) : t._e(), 4 == t.list[t.crtIndex].questionMode || 5 == t.list[t.crtIndex].questionMode ? i("v-uni-view", {
                staticClass: "detail"
            },
            [i("v-uni-view", [t._v("【解析】"), t.list[t.crtIndex].answerExplain ? t._e() : [t._v("无")]], 2), [t._v(t._s(t.list[t.crtIndex].answerExplain))]], 2) : t._e()], 1)], 1), i("v-uni-button", {
                staticClass: "btn-sure block cursor-pointer",
                style: {
                    background: t.themeColor,
                    color: t.btnTextColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.colseAnalysis.apply(void 0, arguments)
                    }
                }
            },
            [t._v("知道了")])], 1)], 1) : t._e()], 1)], 1), t.isPcJoin && !t.analysisVisible ? i("v-uni-view", {
                staticClass: "right-box-pc"
            },
            [i("v-uni-view", {
                staticClass: "sumbit-btn cursor-pointer",
                style: {
                    background: t.themeColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.submit.apply(void 0, arguments)
                    }
                }
            },
            [t._v("结束练习")])], 1) : t._e()], 1)
        },
        s = []
    },
    "66be": function(t, e, i) {
        var n = i("4bad");
        e = n(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.answer-content .tools-top[data-v-bee2e07e]{position:fixed;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;z-index:10}.answer-content .tools-top .down-time[data-v-bee2e07e]{font-size:%?52?%;color:#0064ff}.answer-content .tools-top > .item[data-v-bee2e07e]{height:%?120?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\r\n/* .answer-content .tools-top .item +.item{\r\n  border-left: 2rpx solid #f0f0f0;\r\n} */.answer-content .tools-top .item.active[data-v-bee2e07e]{color:#0064ff}.answer-content .tools-top .time[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.answer-content .tools-top .time .text[data-v-bee2e07e]{margin-top:%?10?%;font-size:%?24?%;color:#999}.answer-content .tools-top .icon[data-v-bee2e07e]{margin-right:%?10?%;font-size:%?34?%}.answer-card[data-v-bee2e07e]{height:%?490?%;background:#fff;padding:%?60?% %?40?% 0 %?40?%}.answer-card .inner[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;z-index:2;left:%?30?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;width:100%;height:%?440?%;overflow:auto}.answer-card .item[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:cneter;-webkit-align-items:cneter;align-items:cneter;width:%?80?%;height:%?80?%;line-height:%?80?%;border-radius:50%;border:%?2?% solid #ebebeb;margin-left:%?30?%;margin-bottom:%?30?%;color:#666}.answer-card .item.right[data-v-bee2e07e]{border-color:#0dd087!important;color:#0dd087!important;background:#f4fbf2}.answer-card .item.error[data-v-bee2e07e]{border-color:#fd5050!important;color:#fd5050!important;background:#fff2f2}.answer-card .item.active[data-v-bee2e07e]{border-color:#0064ff;color:#0064ff}.answer-content .content[data-v-bee2e07e]{position:fixed;top:%?120?%;left:0;right:0;bottom:0;overflow:auto;padding:0 %?50?%}.answer-content .content .question[data-v-bee2e07e]{padding-bottom:%?40?%}.answer-content .content .question .order-number[data-v-bee2e07e]{text-align:center;font-size:%?34?%;margin:%?30?% 0 %?50?% 0}.answer-content .content .question .title[data-v-bee2e07e]{font-weight:700;margin-top:%?20?%;margin-bottom:%?60?%;font-size:%?32?%;word-break:break-all}.answer-content .content .options .item[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-size:%?30?%;padding:%?32?%;margin-top:%?40?%;min-height:%?80?%;border:%?2?% solid #999;\r\n  /* background: #fff; */border-radius:%?50?%;color:#2c2c2c;text-align:left;word-break:break-all}.answer-content .content .options .item uni-image[data-v-bee2e07e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?100?%;margin-left:%?20?%}.answer-content .content .options .item .iconfont[data-v-bee2e07e]{display:none;position:absolute;top:%?26?%;right:%?28?%}.answer-content .content .options .item.active[data-v-bee2e07e]{background:#0064ff!important;color:#fff!important;border-color:#0064ff!important}.answer-content .content .options .item.right[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options .item.right .right-icon[data-v-bee2e07e]{display:block}.answer-content .content .options .item.error[data-v-bee2e07e]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options .item.error .error-icon[data-v-bee2e07e]{display:block}.answer-content .content .options .item.rightAnswer[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options .item-fill[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;font-size:%?30?%;padding:0 %?30?%;margin-top:%?40?%;color:#2c2c2c;text-align:left;word-break:break-all;width:%?650?%;height:%?90?%;border-radius:%?4?%;border:%?2?% solid #999}.answer-content .content .options .item-fill .item-input[data-v-bee2e07e]{width:%?450?%}.answer-content .content .options .item-fill .item-input .uni-input-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options .item-fill .item-num[data-v-bee2e07e]{width:%?36?%;height:%?36?%;line-height:%?36?%;border:%?2?% solid #999;border-radius:%?2?%;color:#e0e0e0;font-size:%?24?%;text-align:center}.answer-content .content .options .item-fill .curnum[data-v-bee2e07e]{color:#fff;border:none}.answer-content .content .options .item-textarea[data-v-bee2e07e]{border-radius:%?8?%;border:%?2?% solid #999;padding:%?20?%;width:%?650?%;height:%?230?%}.answer-content .content .options .item-textarea .detail[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .options .item-textarea .detail .uni-textarea-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_one[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.answer-content .content .options_one .item[data-v-bee2e07e]{width:%?305?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-size:%?30?%;padding:%?15?%;margin-top:%?40?%;min-height:%?80?%;border:%?2?% solid #999;\r\n  /* background: #fff; */border-radius:%?4?%;color:#2c2c2c;text-align:left;word-break:break-all}.answer-content .content .options_one .item uni-image[data-v-bee2e07e]{width:%?275?%;height:%?275?%;object-fit:cover;margin-bottom:%?40?%;border-radius:%?4?%}.answer-content .content .options_one .item .orderNumber[data-v-bee2e07e]{position:absolute;bottom:%?8?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.answer-content .content .options_one .item .iconfont[data-v-bee2e07e]{display:none;position:absolute;bottom:%?10?%;right:%?28?%}.answer-content .content .options_one .item.active[data-v-bee2e07e]{background:#0064ff!important;color:#fff!important;border-color:#0064ff!important}.answer-content .content .options_one .item.right[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_one .item.right .right-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_one .item.error[data-v-bee2e07e]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options_one .item.error .error-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_one .item.rightAnswer[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_one .item-fill[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;font-size:%?30?%;padding:0 %?30?%;margin-top:%?40?%;color:#2c2c2c;text-align:left;word-break:break-all;width:%?650?%;height:%?90?%;border-radius:%?4?%;border:%?2?% solid #999}.answer-content .content .options_one .item-fill .item-input[data-v-bee2e07e]{width:%?450?%}.answer-content .content .options_one .item-fill .item-input .uni-input-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_one .item-fill .item-num[data-v-bee2e07e]{width:%?36?%;height:%?36?%;line-height:%?36?%;border:%?2?% solid #999;border-radius:%?2?%;color:#e0e0e0;font-size:%?24?%;text-align:center}.answer-content .content .options_one .item-fill .curnum[data-v-bee2e07e]{color:#fff;border:none}.answer-content .content .options_one .item-textarea[data-v-bee2e07e]{border-radius:%?8?%;border:%?2?% solid #999;padding:%?20?%;width:%?650?%;height:%?230?%}.answer-content .content .options_one .item-textarea .detail[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .options_one .item-textarea .detail .uni-textarea-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_two[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;margin-bottom:%?80?%}.answer-content .content .options_two .item[data-v-bee2e07e]{width:%?305?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-size:%?30?%;padding:%?15?%;margin-top:%?40?%;min-height:%?80?%;border:%?2?% solid #999;\r\n  /* background: #fff; */border-radius:%?4?%;color:#2c2c2c;text-align:left;word-break:break-all}.answer-content .content .options_two .item uni-image[data-v-bee2e07e]{width:%?275?%;height:%?275?%;object-fit:cover;margin-bottom:%?40?%;border-radius:%?4?%}.answer-content .content .options_two .item .orderNumber[data-v-bee2e07e]{position:absolute;bottom:%?8?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.answer-content .content .options_two .item .iconfont[data-v-bee2e07e]{display:none;position:absolute;bottom:%?10?%;right:%?28?%}.answer-content .content .options_two .item.active[data-v-bee2e07e]{background:#0064ff!important;color:#fff!important;border-color:#0064ff!important}.answer-content .content .options_two .item.right[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_two .item.right .right-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_two .item.error[data-v-bee2e07e]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options_two .item.error .error-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_two .item.rightAnswer[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_two .item-fill[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;font-size:%?30?%;padding:0 %?30?%;margin-top:%?40?%;color:#2c2c2c;text-align:left;word-break:break-all;width:%?650?%;height:%?90?%;border-radius:%?4?%;border:%?2?% solid #999}.answer-content .content .options_two .item-fill .item-input[data-v-bee2e07e]{width:%?450?%}.answer-content .content .options_two .item-fill .item-input .uni-input-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_two .item-fill .item-num[data-v-bee2e07e]{width:%?36?%;height:%?36?%;line-height:%?36?%;border:%?2?% solid #999;border-radius:%?2?%;color:#e0e0e0;font-size:%?24?%;text-align:center}.answer-content .content .options_two .item-fill .curnum[data-v-bee2e07e]{color:#fff;border:none}.answer-content .content .options_two .item-textarea[data-v-bee2e07e]{border-radius:%?8?%;border:%?2?% solid #999;padding:%?20?%;width:%?650?%;height:%?230?%}.answer-content .content .options_two .item-textarea .detail[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .options_two .item-textarea .detail .uni-textarea-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_two .btn-sure[data-v-bee2e07e]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media screen and (min-width:600px){.answer-content .content .options_one[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;position:relative;margin-bottom:%?80?%}.answer-content .content .options_one .item[data-v-bee2e07e]{width:%?305?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-size:%?30?%;padding:%?15?%;margin-top:%?40?%;min-height:%?80?%;border:%?2?% solid #999;\r\n    /* background: #fff; */border-radius:%?4?%;color:#2c2c2c;text-align:left;word-break:break-all;margin-right:%?56?%}.answer-content .content .options_one .item uni-image[data-v-bee2e07e]{width:%?275?%;height:%?275?%;object-fit:cover;margin-bottom:%?40?%;border-radius:%?4?%}.answer-content .content .options_one .item .orderNumber[data-v-bee2e07e]{position:absolute;bottom:%?8?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.answer-content .content .options_one .item .iconfont[data-v-bee2e07e]{display:none;position:absolute;bottom:%?10?%;right:%?28?%}.answer-content .content .options_one .item.active[data-v-bee2e07e]{background:#0064ff!important;color:#fff!important;border-color:#0064ff!important}.answer-content .content .options_one .item.right[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_one .item.right .right-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_one .item.error[data-v-bee2e07e]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options_one .item.error .error-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_one .item.rightAnswer[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_one .item[data-v-bee2e07e]:nth-child(4n){margin-right:0}.answer-content .content .options_one .item-fill[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;font-size:%?30?%;padding:0 %?30?%;margin-top:%?40?%;color:#2c2c2c;text-align:left;word-break:break-all;width:%?650?%;height:%?90?%;border-radius:%?4?%;border:%?2?% solid #999}.answer-content .content .options_one .item-fill .item-input[data-v-bee2e07e]{width:%?450?%}.answer-content .content .options_one .item-fill .item-input .uni-input-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_one .item-fill .item-num[data-v-bee2e07e]{width:%?36?%;height:%?36?%;line-height:%?36?%;border:%?2?% solid #999;border-radius:%?2?%;color:#e0e0e0;font-size:%?24?%;text-align:center}.answer-content .content .options_one .item-fill .curnum[data-v-bee2e07e]{color:#fff;border:none}.answer-content .content .options_one .item-textarea[data-v-bee2e07e]{border-radius:%?8?%;border:%?2?% solid #999;padding:%?20?%;width:%?650?%;height:%?230?%}.answer-content .content .options_one .item-textarea .detail[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .options_one .item-textarea .detail .uni-textarea-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_one .btn-sure[data-v-bee2e07e]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.answer-content .content .options_two[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;position:relative;margin-bottom:%?80?%}.answer-content .content .options_two .item[data-v-bee2e07e]{width:%?305?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-size:%?30?%;padding:%?15?%;margin-top:%?40?%;min-height:%?80?%;border:%?2?% solid #999;\r\n    /* background: #fff; */border-radius:%?4?%;color:#2c2c2c;text-align:left;word-break:break-all;margin-right:%?56?%}.answer-content .content .options_two .item uni-image[data-v-bee2e07e]{width:%?275?%;height:%?275?%;object-fit:cover;margin-bottom:%?40?%;border-radius:%?4?%}.answer-content .content .options_two .item .orderNumber[data-v-bee2e07e]{position:absolute;bottom:%?8?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.answer-content .content .options_two .item .iconfont[data-v-bee2e07e]{display:none;position:absolute;bottom:%?10?%;right:%?28?%}.answer-content .content .options_two .item.active[data-v-bee2e07e]{background:#0064ff!important;color:#fff!important;border-color:#0064ff!important}.answer-content .content .options_two .item.right[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_two .item.right .right-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_two .item.error[data-v-bee2e07e]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .options_two .item.error .error-icon[data-v-bee2e07e]{display:block}.answer-content .content .options_two .item.rightAnswer[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.answer-content .content .options_two .item[data-v-bee2e07e]:nth-child(4n){margin-right:0}.answer-content .content .options_two .item-fill[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;font-size:%?30?%;padding:0 %?30?%;margin-top:%?40?%;color:#2c2c2c;text-align:left;word-break:break-all;width:%?650?%;height:%?90?%;border-radius:%?4?%;border:%?2?% solid #999}.answer-content .content .options_two .item-fill .item-input[data-v-bee2e07e]{width:%?450?%}.answer-content .content .options_two .item-fill .item-input .uni-input-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_two .item-fill .item-num[data-v-bee2e07e]{width:%?36?%;height:%?36?%;line-height:%?36?%;border:%?2?% solid #999;border-radius:%?2?%;color:#e0e0e0;font-size:%?24?%;text-align:center}.answer-content .content .options_two .item-fill .curnum[data-v-bee2e07e]{color:#fff;border:none}.answer-content .content .options_two .item-textarea[data-v-bee2e07e]{border-radius:%?8?%;border:%?2?% solid #999;padding:%?20?%;width:%?650?%;height:%?230?%}.answer-content .content .options_two .item-textarea .detail[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .options_two .item-textarea .detail .uni-textarea-placeholder[data-v-bee2e07e]{color:#adadad}.answer-content .content .options_two .btn-sure[data-v-bee2e07e]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}}.iconvoice_play[data-v-bee2e07e]{display:block;color:#fff;text-shadow:%?0?% %?0?% %?6?% rgba(0,0,0,.4);position:absolute;top:44%;left:50%;bottom:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.right-bg[data-v-bee2e07e]{background:#0dd087!important;color:#fff!important;border-color:#0dd087!important}.error-bg[data-v-bee2e07e]{background:#fd5050!important;color:#fff!important;border-color:#fd5050!important}.answer-content .content .img[data-v-bee2e07e]{margin-top:%?20?%;width:100%;height:%?320?%}.answer-content .content .btn-sure[data-v-bee2e07e]{width:%?250?%;height:%?68?%;line-height:%?68?%;background:#0064ff;text-align:center;color:#fff;border-radius:%?60?%;margin:%?50?% auto 0 auto;border:%?2?% solid transparent}.answer-content .content .audio[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?20?%;width:100%;height:%?100?%;background:none}.answer-content .content .audio uni-image[data-v-bee2e07e]{width:%?100?%;height:%?100?%}.answer-content .content .video[data-v-bee2e07e]{width:%?650?%;height:%?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.answer-content .content .video uni-video[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .video .iframe[data-v-bee2e07e]{height:100%}.answer-content .content .video iframe[data-v-bee2e07e]{width:100%;height:100%}.answer-content .content .sapce[data-v-bee2e07e]{height:%?20?%;background:#efeff4}.answer-content .content .analysis[data-v-bee2e07e]{border-radius:%?16?%;box-shadow:0 0 10px 0 rgba(0,0,0,.12);margin-top:%?50?%;background:#fff}.answer-content .content .analysis .title[data-v-bee2e07e]{padding:%?24?%;font-weight:700;margin-bottom:%?24?%;border-bottom:%?2?% solid hsla(0,0%,87.1%,.3)}.answer-content .content .analysis .answer[data-v-bee2e07e]{font-weight:700;padding:0 %?24?%}.answer-content .content .analysis .detail[data-v-bee2e07e]{color:#666;padding:%?30?%}.answer-content .tools-bottom[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?100?%;padding-bottom:%?80?%}.answer-content .tools-bottom > .btn[data-v-bee2e07e]{font-size:%?30?%;height:%?90?%;width:%?310?%;border-radius:%?50?%;color:#fff;border:%?2?% solid #fff}.answer-content .tools-bottom .btn.last[data-v-bee2e07e]{background:none;border:%?2?% solid #0064ff;color:#0064ff}.answer-content .mask[data-v-bee2e07e]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:99}.answer-content .mask .popup[data-v-bee2e07e]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-70%);transform:translateX(-50%) translateY(-70%);width:%?560?%;background:#fff;border-radius:%?10?%;padding:%?50?% %?50?% %?60?% %?50?%;font-size:%?36?%}.answer-content .mask .popup .btn-sure[data-v-bee2e07e]{height:%?76?%;line-height:%?76?%;background:#0064ff;color:#fff;text-align:center;border-radius:%?50?%;margin-top:%?40?%}.answer-content .mask .popup .icon[data-v-bee2e07e]{position:absolute;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#fff;font-size:%?60?%}.answer-content .mask #analysis .tips[data-v-bee2e07e]{max-height:%?500?%;overflow:auto;font-size:%?30?%}.modals[data-v-bee2e07e]{position:fixed;z-index:999;top:0;left:0;right:0;bottom:0}.modals-cancel[data-v-bee2e07e]{position:absolute;z-index:1000;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.2)}.bottom-dialog-body[data-v-bee2e07e]{position:absolute;z-index:10001;bottom:0;left:0;right:0;height:%?600?%;background-color:#fff;border-top-left-radius:%?30?%;border-top-right-radius:%?30?%}.bottom-dialog-body .inner[data-v-bee2e07e]{\r\n  /* padding:30rpx;  */}.bottom-dialog-body .close[data-v-bee2e07e]{\r\n  /* position: absolute;\r\n  top: 14rpx;\r\n  right: 14rpx; */font-size:%?34?%\r\n  /* padding: 10rpx; */}.bottom-dialog-body .title[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;border-bottom:%?2?% solid #dfdfdf;font-weight:700}.bottom-dialog-body .header uni-image[data-v-bee2e07e]{width:%?220?%;height:%?220?%;margin-right:%?20?%;border-radius:%?10?%}.bottom-dialog-body .header .info[data-v-bee2e07e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?20?%}.bottom-pos[data-v-bee2e07e]{-webkit-transform:translateY(100%);transform:translateY(100%)}.answer-bg[data-v-bee2e07e]{position:fixed;left:0;top:0;z-index:-5;width:100%;height:100%;background-repeat:no-repeat;background-size:100% auto}.answer-pc-content[data-v-bee2e07e]{width:750px!important;position:relative}.answer-pc-content .answer-bg[data-v-bee2e07e]{width:750px!important;position:absolute;border-radius:4px}.answer-pc-content .answer-content[data-v-bee2e07e]{width:750px!important;position:relative;height:100%;box-shadow:0 2px 8px 0 rgba(0,0,0,.1);border-radius:4px;overflow:hidden}.answer-pc-content .answer-content .content[data-v-bee2e07e]{width:750px!important;position:relative;margin-top:20px;top:0!important}.answer-pc-content .answer-content .content .question .title[data-v-bee2e07e]{margin-bottom:40px}.answer-pc-content .answer-content .content .question .img[data-v-bee2e07e]{margin-top:0!important;margin-bottom:25px!important;width:100%;height:%?320?%}.answer-pc-content .answer-content .content .analysis[data-v-bee2e07e]{margin-top:30px!important}.answer-pc-content .right-box-pc[data-v-bee2e07e]{width:220px;height:600px;position:absolute;right:-235px;top:0}.answer-pc-content .right-box-pc .time[data-v-bee2e07e]{width:220px;height:121px;background:#fff;padding:20px 0;margin-bottom:20px;box-shadow:0 2px 8px 0 rgba(0,0,0,.1);border-radius:4px}.answer-pc-content .right-box-pc .time .title[data-v-bee2e07e]{font-size:14px;color:#333;margin-left:20px;margin-bottom:20px}.answer-pc-content .right-box-pc .time .down-time[data-v-bee2e07e]{font-size:28px;text-align:center}.answer-pc-content .right-box-pc .sheet[data-v-bee2e07e]{width:220px;background:#fff;margin-bottom:20px;box-shadow:0 2px 8px 0 rgba(0,0,0,.15);border-radius:4px;padding:20px}.answer-pc-content .right-box-pc .sheet .quesnum[data-v-bee2e07e]{font-size:16px;color:#333;margin-bottom:20px}.answer-pc-content .right-box-pc .sheet .title[data-v-bee2e07e]{font-size:14px;color:#333;margin-bottom:20px}.answer-pc-content .right-box-pc .sheet .sheet-con[data-v-bee2e07e]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.answer-pc-content .right-box-pc .sheet .sheet-con .item[data-v-bee2e07e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:27px;height:27px;line-height:27px;border-radius:50%;border:1px solid #c2c2c2;margin-right:10px;margin-bottom:10px;color:#666;cursor:pointer}.answer-pc-content .right-box-pc .sheet .sheet-con .item[data-v-bee2e07e]:nth-child(5n){margin-right:0}.answer-pc-content .right-box-pc .sheet .sheet-con .right[data-v-bee2e07e]{border-color:#0dd087;color:#0dd087;background-color:#dffff3}.answer-pc-content .right-box-pc .sheet .sheet-con .error[data-v-bee2e07e]{border-color:#fd5050;color:#fd5050;background:#fff2f2}.answer-pc-content .right-box-pc .sheet .sheet-con .active[data-v-bee2e07e]{border-color:#0064ff;color:#0064ff;background-color:#eaf4ff}.answer-pc-content .right-box-pc .sheet .sheet-con .right[data-v-bee2e07e]{border-color:#0dd087;color:#0dd087;background:#f4fbf2}.answer-pc-content .right-box-pc .sheet .sheet-con .error[data-v-bee2e07e]{border-color:#fd5050;color:#fd5050;background:#fff2f2}.answer-pc-content .right-box-pc .sheet .sheet-con .active[data-v-bee2e07e]{border-color:#0064ff;color:#0064ff;background:#eaf4ff}.answer-pc-content .right-box-pc .sheet .sheet-con .actindex[data-v-bee2e07e]{border-color:#0064ff!important;color:#0064ff!important;background:#eaf4ff!important}.answer-pc-content .right-box-pc .sumbit-btn[data-v-bee2e07e]{width:220px;height:45px;line-height:45px;border-radius:4px;font-size:16px;color:#fff;text-align:center;background:#0064ff}.answer-pc-content .tools-top-pc[data-v-bee2e07e]{width:100%;height:50px;line-height:50px;background:#fafafa;border-bottom:1px solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;color:#333;padding-left:15px}.answer-pc-content .tools-top-pc .title[data-v-bee2e07e]{font-size:14px}.answer-pc-content .content .options[data-v-bee2e07e]{margin:0 40px}.answer-pc-content .content .options .item-fill[data-v-bee2e07e]{width:100%!important}.answer-pc-content .content .item-textarea[data-v-bee2e07e]{width:100%!important}.answer-pc-content .analysis[data-v-bee2e07e]{width:616px;margin:0 auto}.answer-pc-content .video[data-v-bee2e07e]{margin:0 auto}', ""]),
        t.exports = e
    },
    "6be3": function(t, e, i) {
        "use strict"; (function(t) {
            var n = i("4ea4");
            i("99af"),
            i("a623"),
            i("4de4"),
            i("caad"),
            i("c975"),
            i("a15b"),
            i("d81d"),
            i("a434"),
            i("a9e3"),
            i("e25e"),
            i("4d63"),
            i("ac1f"),
            i("25f0"),
            i("2532"),
            i("5319"),
            i("1276"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.
        default = void 0;
            var o = n(i("b85c")),
            s = n(i("e143")),
            a = (n(i("1406")), n(i("0d1e"))),
            r = n(i("c5e2")),
            l = n(i("ca00")),
            c = n(i("bee5")),
            d = n(i("60a2")),
            u = n(i("9cc6")),
            h = null,
            p = {
                name: "answerquestionzzz",
                props: {
                    propList: {
                        type: Array,
                    default:
                        []
                    },
                    activityInfo: {
                        type: Object,
                    default:
                        {
                            questionList:
                            []
                        }
                    },
                    theme: {
                        type: Object,
                    default:
                        {}
                    },
                    recordId: {
                        type: String,
                    default:
                        ""
                    },
                    topDayId: {
                        type: String,
                    default:
                        "0"
                    },
                    checkpointGuid: {
                        type: String,
                    default:
                        "0"
                    },
                    activityType: {
                        type: [String, Number],
                    default:
                        4
                    },
                    isPractice: {
                        type: [String, Number],
                    default:
                        0
                    },
                    isAbnormal: {
                        type: [String, Number],
                    default:
                        0
                    },
                    answerResult: {
                        type: Array,
                    default:
                        function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        list: [],
                        timer: null,
                        imageHost: s.
                    default.conf.imageHost,
                        musicHost: s.
                    default.conf.musicHost,
                        WORD: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
                        fillIndex: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                        fillInputIndex: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"],
                        icon_play: "mini/icon/music_play.png",
                        icon_pause: "mini/icon/music_pause.png",
                        btnText: "下一题",
                        isShowCard: !0,
                        isShowDownTime: !0,
                        isEndByError: !0,
                        isShowAnswer: !0,
                        cardVisible: !1,
                        analysisVisible: !1,
                        loading: !0,
                        crtIndex: 0,
                        scrollTop: 0,
                        screenshotNum: 0,
                        unAnsweredNum: 0,
                        cheatTotal: 0,
                        downTime: "--:--",
                        timestamp: "",
                        musicPlay: "",
                        themeColor: "",
                        pageBg: "",
                        themeTextColor: "",
                        titleColor: "",
                        btnTextColor: "",
                        isShowSheet: !1,
                        hideModal: !1,
                        animationData: {},
                        optionsStyle: "",
                        nextBtnStyle: "",
                        lastBtnStyle: "",
                        sureBtnStyle: "",
                        defaultOptionsStyle: {
                            color: "#333",
                            bgColor: "",
                            borderColor: "#999",
                            bgImage: ""
                        },
                        defaultLastBtnStyle: {
                            bgColor: "",
                            bgImage: "",
                            borderColor: "#0064ff",
                            color: "#0064ff"
                        },
                        defaultNextBtnStyle: {
                            bgColor: "#0064ff",
                            bgImage: "",
                            borderColor: "#0064ff",
                            color: "#fff"
                        },
                        defaultStartBtnStyle: {
                            bgColor: "#0064ff",
                            bgImage: "",
                            borderColor: "#0064ff",
                            color: "#fff"
                        },
                        defaultAnswerStyle: {
                            bgColor: "",
                            bgImage: ""
                        },
                        selectLevel: {},
                        numTime: 0,
                        lastLogTime: 0,
                        isPcJoin: 1 == s.
                    default.$isPcJoin
                    }
                },
                mounted: function() {
                    1 == this.activityInfo.answerSetting.isShowDownTime && l.
                default.showLoading();
                    var t = c.
                default.getData("ANSWER_ABNORMAL_SAVEDATA_" + this.activityInfo.activityGuid, !0);
                    if (1 == this.isAbnormal && t) {
                        t = l.
                    default.stringToObject(t);
                        var e = this.activityInfo.answerSetting.downTime;
                        32 == this.activityInfo.activityType && (e = 60 * parseInt(this.activityInfo.answerSetting.downTime)),
                        this.list = t.list,
                        this.crtIndex = t.crtIndex,
                        this.timestamp = t.timestamp,
                        this.lastLogTime = (new Date).getTime() - t.logData,
                        this.numTime = t.numTime || e,
                        this.initAnswer(),
                        8 == this.activityType && (this.selectLevel = t.selectLevel),
                        1 == this.activityInfo.answerSetting.isShowDownTime && this.updateDownTime(this.numTime)
                    } else {
                        if (8 == this.activityType) {
                            var i = c.
                        default.getData("SELECTLEVEL_" + this.activityInfo.activityGuid);
                            this.selectLevel = i
                        }
                        this.list = JSON.parse(JSON.stringify(this.propList)),
                        this.initAnswer()
                    }
                    this.list = this.filterQuestionTitle(this.list),
                    this.initLogData()
                },
                destroyed: function() {
                    this.destroyAudio(),
                    clearInterval(this.timer)
                },
                computed: {
                    contentTop: function() {
                        var t = 120;
                        return this.isShowSheet || this.isShowDownTime || (t = 0),
                        48 == this.activityInfo.activityType && (t += 160),
                        t + "rpx"
                    }
                },
                methods: {
                    getQuestionState: function(t) {
                        return "" === t ? "": !0 === t ? "right": 1 === t ? "active": "error"
                    },
                    getAnalysisState: function(t, e, i) {
                        return ! (1 != t || !e) || !(0 != t || !e || "false" != i)
                    },
                    initAnswer: function() {
                        l.
                    default.showLoading(),
                        this.initSetting(),
                        this.initTheme(),
                        this.checkHaveAnswer()
                    },
                    initSetting: function() {
                        uni.removeStorageSync("ANSWER_RESULT_KEY_" + this.activityInfo.guid);
                        var t = this.activityInfo,
                        e = t.answerSetting,
                        i = !0,
                        n = !0,
                        o = !0,
                        s = !0,
                        a = !0;
                        if (this.list) if (0 != this.list.length) {
                            if (1 != this.isAbnormal) {
                                var r = this.activityInfo.answerSetting.downTime;
                                32 == this.activityInfo.activityType && (r = 60 * parseInt(this.activityInfo.answerSetting.downTime)),
                                1 == e.isShowDownTime && (this.numTime = parseInt(r), this.updateDownTime(r)),
                                this.timestamp = (new Date).getTime()
                            }
                            0 == e.isShowDownTime && (o = !1),
                            (0 == e.isShowAnswerSheet || o && 1 == e.downTimeType) && (i = !1),
                            0 == e.isShowAnswer && (n = !1),
                            0 == e.isEndByError && (s = !1),
                            0 == e.isShowExplainByRight && (a = !1),
                            this.isShowSheet = i,
                            this.isShowDownTime = o,
                            this.isEndByError = s,
                            this.isShowAnswer = n,
                            this.isShowExplainByRight = a,
                            this.initAudio(),
                            this.initVideo()
                        } else l.
                    default.showAlert({
                            content:
                            "暂无题目",
                            callback: function() {
                                uni.navigateBack()
                            }
                        })
                    },
                    focusCheat: function() {
                        var t = this;
                        uni.onUserCaptureScreen((function(e) {
                            t.list[t.crtIndex].isCheat = 1;
                            var i = "请勿在答题过程中截屏，结果已上报";
                            l.
                        default.showAlert({
                                title:
                                "警告",
                                content: i
                            })
                        }))
                    },
                    initTheme: function() {
                        var t = this.theme,
                        e = r.
                    default.parseTheme(t);
                        if (c.
                    default.setData("ANSWER_STYLE_KEY", JSON.stringify(e)), e) {
                            var i = e.colorStyle.color,
                            n = e.colorStyle.themeColor,
                            o = e.optionsStyle || this.defaultOptionsStyle,
                            s = e.lastBtnStyle || this.defaultLastBtnStyle,
                            a = e.nextBtnStyle || this.defaultNextBtnStyle,
                            d = e.startBtnStyle || this.defaultStartBtnStyle,
                            u = e.answerStyle || this.defaultAnswerStyle,
                            h = e.sureBtnStyle || {
                                color: d.color,
                                bgColor: n,
                                borderColor: n,
                                bgImage: ""
                            },
                            p = o.titleColor || i,
                            f = this.getStyleStr(o),
                            v = this.getStyleStr(s),
                            w = this.getStyleStr(a),
                            m = this.getStyleStr(h),
                            b = "background:" + r.
                        default.formatPluginBackGroud({
                                backgroundImage:
                                u.bgImage || "",
                                backgroundColor: u.bgColor || "#fff",
                                bgtop: "top"
                            });
                            this.pageBg = b,
                            this.themeColor = n,
                            this.titleColor = p,
                            this.themeTextColor = e.colorStyle.color,
                            this.optionsStyle = f,
                            this.lastBtnStyle = v,
                            this.nextBtnStyle = w,
                            this.sureBtnStyle = m,
                            this.btnTextColor = d.color
                        }
                        if (0 == this.activityInfo.answerSetting.isShowDownTime && (this.loading = !1, setTimeout((function() {
                            l.
                        default.hideLoading()
                        }), 500)), this.isPcJoin) {
                            var x = document.getElementsByTagName("body")[0];
                            this.$nextTick((function() {
                                var t = document.documentElement.clientHeight;
                                document.getElementsByClassName("answer-content")[0].style.minHeight = "".concat(t - 200, "px"),
                                document.getElementsByTagName("uni-app")[0].style.borderRadius = "4px"
                            })),
                            (this.isShowSheet || this.isShowDownTime) && (x.style.maxWidth = "1250px", this.$nextTick((function() {
                                document.getElementsByClassName("answer-pc-content")[0].style.marginLeft = "250px",
                                document.getElementsByClassName("answer-pc-content")[0].style.marginTop = "5px",
                                document.getElementsByClassName("answer-pc-content")[0].style.marginBottom = "5px",
                                document.getElementsByTagName("uni-app")[0].style.boxShadow = "none"
                            })))
                        }
                    },
                    getStyleStr: function(t) {
                        return "color:".concat(t.color, ";background:").concat(t.bgColor, " url(").concat(l.
                    default.getImageUrl(t.bgImage), ") no-repeat center / cover;border-color:").concat(t.borderColor)
                    },
                    hideCard: function() {
                        this.cardVisible = !1
                    },
                    chooseOrder: function(t, e, i) {
                        l.
                    default.recordClickEvent(i);
                        var n = this.list,
                        o = n.length,
                        s = this.crtIndex + 1;
                        if (n[this.crtIndex].state && s < o) this.isShowSheet && l.
                    default.showToast("已作答，请答下一题", "none");
                        else if (n[this.crtIndex].state && s == o) this.isShowSheet && l.
                    default.showToast("已作答", "none");
                        else {
                            if (this.list[this.crtIndex].curChooseValue || (this.list[this.crtIndex].curChooseValue = 1), t) {
                                this.list[this.crtIndex].answer[e] = "";
                                for (var a = 0; a < this.list[this.crtIndex].answer.length; a++) parseInt(this.list[this.crtIndex].answer[a]) > parseInt(t) && this.list[this.crtIndex].answer[a]--;
                                this.list[this.crtIndex].curChooseValue--
                            } else this.list[this.crtIndex].answer[e] = this.list[this.crtIndex].curChooseValue,
                            this.list[this.crtIndex].curChooseValue++;
                            this.$forceUpdate()
                        }
                    },
                    choose: function(t, e, i) {
                        var n = this;
                        l.
                    default.recordClickEvent(i);
                        var o = this.list,
                        s = o.length,
                        a = this.crtIndex + 1;
                        if (o[this.crtIndex].state && a < s) this.isShowSheet && l.
                    default.showToast("已作答，请答下一题", "none");
                        else if (o[this.crtIndex].state && a == s) this.isShowSheet && l.
                    default.showToast("已作答", "none");
                        else {
                            var r = this.crtIndex,
                            c = t.right,
                            d = t.id,
                            u = o[r].score,
                            h = ("list[".concat(r, "].reply[").concat(e, "]"), "list[".concat(r, "].state"), "list[".concat(r, "].score"), "list[".concat(r, "].answer[").concat(e, "]"), "list[".concat(r, "].result"), this.isEndByError);
                            if (this.saveTime(), 1 == o[r].rightCount) {
                                var p = o[r].options[e].right ? "true": "false";
                                if ("false" == p && (u = 0), o[r].state = !0, this.isShowAnswer ? o[r].reply[e] = c: o[r].reply[e] = 1, o[r].result = p, o[r].answer[e] = d, o[r].score = u, this.$forceUpdate(), !this.isShowSheet && this.isShowAnswer) return void this.showAnalysis();
                                if (!this.isShowSheet) if (48 == this.activityInfo.activityType) {
                                    this.list[r].state = !0;
                                    var f = this.list[r].answerTime,
                                    v = this.answerResult[r].answerTime;
                                    if (f < v) {
                                        var w = v - f;
                                        clearInterval(this.timer),
                                        setTimeout((function() {
                                            n.autoNext()
                                        }), w)
                                    } else this.autoNext()
                                } else h && "true" == p ? this.autoNext() : h || this.autoNext();
                                this.endByError(p);
                                var m = "false" == p ? 0 : o[r].questionScore;
                                this.$emit("chooseAnswer", {
                                    score: m,
                                    index: r,
                                    time: this.list[r].answerTime
                                })
                            } else {
                                "list[".concat(r, "].multiple[").concat(e, "]");
                                var b = o[r].reply,
                                x = o[r].answer,
                                g = "";
                                1 == b[e] ? (o[r].answer.splice(e, 1, ""), g = "", o[r].reply[e] = g, o[r].multiple[e] = "", o[r].answer = x) : (g = 1, o[r].reply[e] = g, o[r].multiple[e] = c, o[r].answer[e] = d)
                            }
                            this.$forceUpdate()
                        }
                    },
                    confirmMultiple: function(t) {
                        var e = this;
                        l.
                    default.recordClickEvent(t);
                        var i = this.crtIndex,
                        n = ("list[".concat(i, "].reply"), "list[".concat(i, "].state"), "list[".concat(i, "].result"), this.list[i].multiple),
                        s = ((new Date).getTime(), this.timestamp, "list[".concat(i, "].score"), this.list[i].score),
                        a = "",
                        r = this.isEndByError;
                        this.list.length,
                        this.crtIndex;
                        if (this.saveTime(), n.includes(!1) || n.every((function(t) {
                            return "" === t
                        }))) a = "false";
                        else {
                            var c, d = 0,
                            u = (0, o.
                        default)(n);
                            try {
                                for (u.s(); ! (c = u.n()).done;) {
                                    var h = c.value; ! 0 === h && d++
                                }
                            } catch(m) {
                                u.e(m)
                            } finally {
                                u.f()
                            }
                            d && (a = d == this.list[i].rightCount ? "true": "false")
                        }
                        if ("false" == a && (s = 0), this.isShowAnswer && (this.list[i].reply = n), this.list[i].state = !0, this.list[i].result = a, this.list[i].score = s, this.$forceUpdate(), this.isShowSheet || !this.isShowAnswer) {
                            if (!this.isShowSheet) if (48 == this.activityInfo.activityType) {
                                this.list[i].state = !0;
                                var p = this.list[i].answerTime,
                                f = this.answerResult[i].answerTime;
                                if (p < f) {
                                    var v = f - p;
                                    clearInterval(this.timer),
                                    setTimeout((function() {
                                        e.autoNext()
                                    }), v)
                                } else this.autoNext()
                            } else r && "true" == a ? this.autoNext() : r || this.autoNext();
                            this.endByError(a);
                            var w = "false" == a ? 0 : this.list[i].questionScore;
                            this.$emit("chooseAnswer", {
                                score: w,
                                index: i,
                                time: this.list[i].answerTime
                            })
                        } else this.showAnalysis()
                    },
                    confirmInput: function(e) {
                        var i = this;
                        l.
                    default.recordClickEvent(e);
                        var n = this.crtIndex,
                        o = this.list[n].multiple,
                        s = this.list[n].score,
                        a = this.list[n].options,
                        r = this.list[n].answer,
                        c = "",
                        d = this.isEndByError,
                        u = 0;
                        if (t.log(this.list[n]), this.saveTime(), this.isShowAnswer) {
                            for (var h = !0,
                            p = 0; p < a.length; p++) {
                                var f = a[p].value.split(",");
                                f.includes(r[p]) ? (o[p] = !0, u += a[p].score) : (o[p] = !1, h = !1)
                            }
                            c = h ? "true": "false"
                        }
                        if (this.list[n].state = !0, this.list[n].result = c, this.list[n].score = s, this.list[n].reply = o, this.$forceUpdate(), this.isShowSheet || !this.isShowAnswer) {
                            if (!this.isShowSheet) if (48 == this.activityInfo.activityType) {
                                this.list[n].state = !0;
                                var v = this.list[n].answerTime,
                                w = this.answerResult[n].answerTime;
                                if (v < w) {
                                    var m = w - v;
                                    clearInterval(this.timer),
                                    setTimeout((function() {
                                        i.autoNext()
                                    }), m)
                                } else this.autoNext()
                            } else d && "true" == c ? this.autoNext() : d || this.autoNext();
                            this.endByError(c),
                            this.$emit("chooseAnswer", {
                                score: u,
                                index: n,
                                time: this.list[n].answerTime
                            })
                        } else this.showAnalysis()
                    },
                    confirmOrder: function(e) {
                        var i = this;
                        l.
                    default.recordClickEvent(e);
                        var n = this.crtIndex,
                        o = this.list[n].multiple,
                        s = this.list[n].score,
                        a = this.list[n].options,
                        r = this.list[n].answer,
                        c = "",
                        d = "",
                        u = this.isEndByError;
                        if (t.log(this.list[n]), this.saveTime(), this.isShowAnswer) {
                            for (var h = !0,
                            p = [], f = 0; f < a.length; f++) a[f].resultPos != r[f] && (h = !1),
                            p.push(a[f].resultPos);
                            c = h ? "true": "false",
                            d = p.join("")
                        }
                        if (this.list[n].state = !0, this.list[n].result = c, this.list[n].score = s, this.list[n].reply = o, this.list[n].resultPos = d, this.$forceUpdate(), this.isShowSheet || !this.isShowAnswer) {
                            if (!this.isShowSheet) if (48 == this.activityInfo.activityType) {
                                this.list[n].state = !0;
                                var v = this.list[n].answerTime,
                                w = this.answerResult[n].answerTime;
                                if (v < w) {
                                    var m = w - v;
                                    clearInterval(this.timer),
                                    setTimeout((function() {
                                        i.autoNext()
                                    }), m)
                                } else this.autoNext()
                            } else u && "true" == c ? this.autoNext() : u || this.autoNext();
                            this.endByError(c);
                            var b = "false" == c ? 0 : list[n].questionScore;
                            this.$emit("chooseAnswer", {
                                score: b,
                                index: n,
                                time: this.list[n].answerTime
                            })
                        } else this.showAnalysis()
                    },
                    confirmShort: function(e) {
                        l.
                    default.recordClickEvent(e);
                        var i = this.crtIndex,
                        n = this.list[i].multiple,
                        o = this.list[i].score,
                        s = (this.list[i].options, this.list[i].answer, ""),
                        a = this.isEndByError;
                        t.log(this.list[i]),
                        this.saveTime(),
                        this.list[i].state = !0,
                        this.list[i].result = s,
                        this.list[i].score = o,
                        this.list[i].reply = n,
                        this.$forceUpdate(),
                        this.isShowSheet || !this.isShowAnswer ? (this.isShowSheet || (a && "true" == s ? this.autoNext() : a || this.autoNext()), this.endByError(s)) : this.showAnalysis()
                    },
                    saveTime: function() {
                        var t = (new Date).getTime() - this.timestamp - this.lastLogTime,
                        e = this.crtIndex,
                        i = this.list[e].state;
                        this.activityInfo.answerSetting;
                        this.timestamp = (new Date).getTime(),
                        this.lastLogTime = 0,
                        i || (this.list[e].answerTime = this.list[e].answerTime + t)
                    },
                    endByError: function(t) {
                        var e = this,
                        i = this.isEndByError;
                        "false" != t && "" != t || !i || (l.
                    default.showToast("答题结束", "loading"), setTimeout((function() {
                            e.handExam()
                        }), 800))
                    },
                    autoNext: function() {
                        var t = this;
                        this.list.length - 1 == this.crtIndex ? (l.
                    default.showToast("答题结束", "loading"), setTimeout((function() {
                            t.handExam()
                        }), 500)) : setTimeout((function() {
                            t.next()
                        }), 600)
                    },
                    showAnalysis: function() {
                        var t = this.crtIndex,
                        e = this.list[t].state,
                        i = this.list[t].answerExplain,
                        n = this.list[t].result;
                        5 == this.list[t].questionMode ? this.isShowExplainByRight || !e || "false" != n && "" != n || !i ? this.isShowExplainByRight && e && i ? this.analysisVisible = !0 : this.autoNext() : this.analysisVisible = !0 : this.isShowExplainByRight || !e || "false" != n && "" != n ? this.isShowExplainByRight && e ? this.analysisVisible = !0 : this.autoNext() : this.analysisVisible = !0
                    },
                    colseAnalysis: function() {
                        var t = this.isEndByError,
                        e = this.list[this.crtIndex].result;
                        this.analysisVisible = !1,
                        !t || "false" != e && "" != e ? this.next() : this.endByError(e)
                    },
                    confirmSubmit: function() {
                        l.
                    default.showToast("提交中", "loading"),
                        this.handExam()
                    },
                    submit: function(t) {
                        var e = this;
                        l.
                    default.recordClickEvent(t),
                        this.saveTime();
                        var i, n = 0,
                        s = (0, o.
                    default)(this.list);
                        try {
                            for (s.s(); ! (i = s.n()).done;) {
                                var a = i.value;
                                a.state || (n += 1)
                            }
                        } catch(r) {
                            s.e(r)
                        } finally {
                            s.f()
                        }
                        this.unAnsweredNum = n,
                        n > 0 ? l.
                    default.showAlertDialog({
                            baseColor:
                            this.themeColor,
                            content: "你还有" + n + "题未答,确定提交吗",
                            callback: function() {
                                e.confirmSubmit()
                            }
                        }) : this.handExam()
                    },
                    handExam: function() {
                        clearInterval(this.timer),
                        this.saveAnswer()
                    },
                    saveAnswer: function() {
                        var e, i = [],
                        n = (0, o.
                    default)(this.list);
                        try {
                            for (n.s(); ! (e = n.n()).done;) {
                                var s = e.value,
                                a = {
                                    isCheat: s.isCheat,
                                    answerTime: 1020+parseInt(Math.random()*30),///------
                                    score: s.score,
                                    right: "true" == s.result ? 1 : 0,
                                    result: this.getResult(s),
                                    questionGuid: s.questionGuid,
                                    questionScore: s.questionTotalScore
                                };
                                i.push(a)
                            }
                        } catch(r) {
                            n.e(r)
                        } finally {
                            n.f()
                        }
                        t.log(i),
                        c.
                    default.clearData("ANSWER_ABNORMAL_SAVEDATA_" + this.activityInfo.activityGuid, !0),
                        this.$emit("saveAnswer", i)
                    },
                    getResult: function(t) {
                        var e = t.answer,
                        i = t.state,
                        n = t.questionMode,
                        s = t.options;
                        if (1 == n || 2 == n) {
                            var a, r = !1,
                            l = (0, o.
                        default)(e);
                            try {
                                for (l.s(); ! (a = l.n()).done;) {
                                    var c = a.value;
                                    "" !== c && (r = !0)
                                }
                            } catch(w) {
                                l.e(w)
                            } finally {
                                l.f()
                            }
                            return r && i ? e.filter((function(t) {
                                return t
                            })) : ""
                        }
                        if (3 == n) {
                            var d, u = !1,
                            h = (0, o.
                        default)(e);
                            try {
                                for (h.s(); ! (d = h.n()).done;) {
                                    var p = d.value;
                                    "" !== p && (u = !0)
                                }
                            } catch(w) {
                                h.e(w)
                            } finally {
                                h.f()
                            }
                            return u && i ? e.filter((function(t) {
                                return t
                            })) : []
                        }
                        if (4 == n) {
                            for (var f = [], v = 0; v < e.length; v++) f[e[v] - 1] = s[v].id;
                            return i ? f: []
                        }
                        if (5 == n) return i ? e: ""
                    },
                    jumpQuestion: function(t) {
                        this.destroyAudio(),
                        this.crtIndex = t,
                        this.cardVisible = !1,
                        t == this.list.length - 1 ? this.btnText = "提交": this.btnText = "下一题",
                        this.initAudio(),
                        this.initVideo()
                    },
                    switchQuestion: function(t, e) {
                        l.
                    default.recordClickEvent(e),
                        this.scrollTop = 0,
                        "last" == t ? this.last() : this.next()
                    },
                    next: function() {
                        var t = this;
                        if (l.
                    default.hideToast(), this.crtIndex != this.list.length - 1) {
                            this.saveTime();
                            var e = this.crtIndex + 1,
                            i = this.activityInfo.answerSetting;
                            if (e == this.list.length - 1 && (this.btnText = "提交"), 1 == i.isShowDownTime && 1 == i.downTimeType) {
                                var n = this.activityInfo.answerSetting.downTime;
                                32 == this.activityInfo.activityType && (n = 60 * parseInt(this.activityInfo.answerSetting.downTime)),
                                this.numTime = parseInt(n),
                                this.updateDownTime(n)
                            }
                            1 != i.isShowDownTime || 1 != i.downTimeType || this.isShowAnswer ? (this.crtIndex = e, this.initAudio(), this.initVideo()) : setTimeout((function() {
                                t.crtIndex = e,
                                t.initAudio(),
                                t.initVideo()
                            }), 500),
                            this.checkHaveAnswer(),
                            this.initLogData()
                        } else this.submit()
                    },
                    last: function() {
                        if (0 != this.crtIndex) {
                            this.saveTime();
                            var t = this.crtIndex - 1;
                            t < this.list.length - 1 && (this.btnText = "下一题"),
                            this.crtIndex = t,
                            this.initAudio(),
                            this.initVideo()
                        } else l.
                    default.showToast("已是第一题", "none")
                    },
                    initAudio: function() {
                        var t = this;
                        if (this.destroyAudio(), 0 != this.list.length) {
                            var e = l.
                        default.getDataUrl(this.list[this.crtIndex].music);
                            e && (h = uni.createInnerAudioContext(), h.autoplay = !0, h.src = e, u.
                        default.stopBackgroundAudio(!0), h.play(), h.onPlay((function() {
                                t.musicPlay = !0
                            })), h.onPause((function() {
                                t.musicPlay = !1
                            })), h.onEnded((function() {
                                t.musicPlay = !1
                            })), h.onStop((function() {
                                t.musicPlay = !1
                            })), h.onError((function(t) {
                                l.
                            default.showAlert(t.msg)
                            })))
                        }
                    },
                    pauseMusic: function() {
                        h.pause(),
                        this.musicPlay = !1,
                        u.
                    default.resetBackgroundAudio()
                    },
                    playMusic: function(t) {
                        l.
                    default.recordClickEvent(t),
                        u.
                    default.stopBackgroundAudio(!0),
                        h.play(),
                        this.musicPlay = !0
                    },
                    destroyAudio: function() {
                        h && h.destroy(),
                        this.musicPlay = !1,
                        u.
                    default.resetBackgroundAudio()
                    },
                    updateDownTime: function(t) {
                        var e = this;
                        clearInterval(this.timer);
                        var i = new Date,
                        n = i.getSeconds();
                        i.setSeconds(n + parseInt(t) + 1),
                        this.loading && (this.loading = !1, l.
                    default.hideLoading());
                        var o = setInterval((function() {
                            var t = d.
                        default.getDownTime(i),
                            n = "00" === t.days && "00" === t.hours ? t.minutes + ":" + t.seconds: t.hours + ":" + t.minutes + ":" + t.seconds;
                            "00" === t.days && "00" === t.hours && "00" === t.minutes && "00" === t.seconds && (e.timeOut(), clearInterval(o)),
                            e.numTime--,
                            e.initLogData(),
                            e.downTime = n
                        }), 1e3);
                        this.timer = o
                    },
                    timeOut: function() {
                        var t = this,
                        e = this.crtIndex,
                        i = this.activityInfo.answerSetting;
                        this.saveTime(),
                        this.list[e].state = !0,
                        1 == i.isShowDownTime && (1 == i.downTimeType && e != this.list.length - 1 ? this.isShowSheet ? this.isEndByError ? this.endByError() : this.next() : this.isShowAnswer ? this.showAnalysis() : (this.$emit("chooseAnswer", {
                            score: 0,
                            index: e,
                            time: this.list[e].answerTime
                        }), this.isEndByError ? this.endByError() : this.next()) : (l.
                    default.showConfirm("答题时间结束，是否提交？", (function() {
                            t.handExam()
                        }), uni.navigateBack), this.destroyAudio()))
                    },
                    showCard: function(t) {
                        var e = this;
                        l.
                    default.recordClickEvent(t),
                        this.hideModal = !0;
                        var i = uni.createAnimation({
                            duration: 400,
                            timingFunction: "ease"
                        });
                        this.animation = i,
                        setTimeout((function() {
                            e.fadeIn()
                        }), 200)
                    },
                    hide: function() {
                        var t = this,
                        e = uni.createAnimation({
                            duration: 400,
                            timingFunction: "ease"
                        });
                        this.animation = e,
                        this.fadeDown(),
                        setTimeout((function() {
                            t.hideModal = !1
                        }), 200)
                    },
                    fadeIn: function() {
                        this.animation.translateY(0).step(),
                        this.animationData = this.animation.export()
                    },
                    fadeDown: function() {
                        this.animation.translateY(700).step(),
                        this.animationData = this.animation.export()
                    },
                    checkHaveAnswer: function() {
                        var t = this;
                        0 != this.list.length && (0 != this.list[this.crtIndex].rightCount || 0 != this.list[this.crtIndex].state || 1 != this.list[this.crtIndex].questionMode && this.list[this.crtIndex].questionMode || (this.list[this.crtIndex].state = !0, l.
                    default.showAlertDialog({
                            content:
                            "该题未设置正确答案，不计分",
                            buttonText: "下一题",
                            callback: function() {
                                t.next()
                            },
                            cancelCallback: function() {
                                t.next()
                            }
                        })))
                    },
                    initLogData: function() {
                        if (1 != this.isPractice) {
                            var t = {
                                logData: (new Date).getTime(),
                                list: this.list,
                                crtIndex: this.crtIndex,
                                recordId: this.recordId,
                                topDayId: this.topDayId,
                                numTime: this.numTime,
                                selectLevel: this.selectLevel,
                                checkpointGuid: this.checkpointGuid,
                                timestamp: this.timestamp
                            };
                            t = l.
                        default.objectToString(t),
                            c.
                        default.setData("ANSWER_ABNORMAL_SAVEDATA_" + this.activityInfo.activityGuid, t, !0)
                        }
                    },
                    initVideo: function() {
                        var t = this;
                        if (this.list[this.crtIndex].video && 1 == this.list[this.crtIndex].videoType && !this.list[this.crtIndex].playVideoUrl) {
                            var e = this.list[this.crtIndex].video,
                            i = {
                                activityGuid: this.activityInfo.activityGuid,
                                activityType: this.activityType,
                                encryptUrl: e
                            };
                            l.
                        default.showLoading(),
                            a.
                        default.getVideo(i).then((function(e) {
                                l.
                            default.hideLoading(),
                                0 == e.result ? (t.list[t.crtIndex].playVideoUrl = e.data.videoUrl, t.$forceUpdate()) : l.
                            default.showToast(e.msg, "none")
                            }))
                        }
                    },
                    playVideo: function(e, i, n) {
                        var o = this;
                        if ( - 1 == e.indexOf("https")) {
                            t.log(i),
                            t.log(n);
                            var s = {
                                activityGuid: this.activityInfo.activityGuid,
                                activityType: this.activityType,
                                encryptUrl: e
                            };
                            l.
                        default.showLoading(),
                            a.
                        default.getVideo(s).then((function(e) {
                                l.
                            default.hideLoading(),
                                0 == e.result ? (t.log(e.data), o.list[n].options[i].explainVideoUrl = e.data.videoUrl, o.list[n].options[i].showicon = !0, o.list[n].options[i].controlsPlay = !0, uni.createVideoContext("myVideo1", o).play(), o.$forceUpdate()) : l.
                            default.showToast(e.msg, "none")
                            }))
                        }
                    },
                    playVideo_type2: function(e, i) {
                        var n = this;
                        if ( - 1 == e.indexOf("https")) {
                            var o = {
                                activityGuid: this.activityInfo.activityGuid,
                                activityType: this.activityType,
                                encryptUrl: e
                            };
                            l.
                        default.showLoading(),
                            a.
                        default.getVideo(o).then((function(e) {
                                l.
                            default.hideLoading(),
                                0 == e.result ? (t.log(e.data), n.list[i].explainVideoUrl = e.data.videoUrl, n.list[i].showicon = !0, n.list[i].controlsPlay = !0, uni.createVideoContext("myVideo2", n).play(), n.$forceUpdate()) : l.
                            default.showToast(e.msg, "none")
                            }))
                        }
                    },
                    filterQuestionTitle: function(t) {
                        for (var e = 0; e < t.length; e++) t[e].question = t[e].question.replace(new RegExp("\n", "gm"), "</br>");
                        return t
                    },
                    previewImg: function(t, e) {
                        var i = e.map((function(t) {
                            return t.value
                        })),
                        n = i.map((function(t) {
                            return l.
                        default.getImageUrl(t)
                        }));
                        uni.previewImage({
                            current:
                            t,
                            urls: n
                        })
                    }
                }
            };
            e.
        default = p
        }).call(this, i("5a52")["default"])
    },
    "91cb": function(t, e, i) {
        "use strict";
        var n = i("ae15"),
        o = i.n(n);
        o.a
    },
    "988e": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("52e6"),
        o = i.n(n);
        for (var s in n)["default"].indexOf(s) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return n[t]
            }))
        } (s);
        e["default"] = o.a
    },
    a4d36: function(t, e, i) {
        var n = i("66be");
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var o = i("4f06").
    default;
        o("00a2cdd6", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    ae15: function(t, e, i) {
        var n = i("4a60");
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var o = i("4f06").
    default;
        o("487a0994", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c281: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("f76a"),
        o = i("3620");
        for (var s in o)["default"].indexOf(s) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return o[t]
            }))
        } (s);
        var a, r = i("f0c5"),
        l = Object(r["a"])(o["default"], n["b"], n["c"], !1, null, "4766fc49", null, !1, n["a"], a);
        e["default"] = l.exports
    },
    f5b9: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("628b"),
        o = i("988e");
        for (var s in o)["default"].indexOf(s) < 0 &&
        function(t) {
            i.d(e, t, (function() {
                return o[t]
            }))
        } (s);
        i("91cb");
        var a, r = i("f0c5"),
        l = Object(r["a"])(o["default"], n["b"], n["c"], !1, null, "1305e76d", null, !1, n["a"], a);
        e["default"] = l.exports
    },
    f76a: function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return o
        })),
        i.d(e, "c", (function() {
            return s
        })),
        i.d(e, "a", (function() {
            return n
        }));
        var n = {
            basePage: i("3d21").
        default,
            activityPosterCompound: i("5488").
        default
        },
        o = function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("base-page", {
                attrs: {
                    id: "basePageId",
                    isShowCopyright: !1,
                    isShowMallTopbar: !1
                }
            },
            [i("v-uni-view", [t.loading ? t._e() : i("answer-question", {
                attrs: {
                    isPractice: t.isPractice,
                    isAbnormal: t.isAbnormal,
                    propList: t.list,
                    activityInfo: t.activityInfo,
                    theme: t.theme,
                    recordId: t.recordId,
                    topDayId: t.topDayId
                },
                on: {
                    saveAnswer: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.saveAnswer.apply(void 0, arguments)
                    }
                }
            }), t.practiceLoading ? t._e() : i("answer-practice", {
                attrs: {
                    activityInfo: t.activityInfo,
                    theme: t.theme
                },
                on: {
                    saveAnswer: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.saveAnswer.apply(void 0, arguments)
                    }
                }
            }), t.showPoster ? i("activity-poster-compound", {
                attrs: {
                    activityInfo: t.activityInfo,
                    posterData: t.posterData,
                    userInfo: t.userInfo,
                    qrConfig: t.posterQrData,
                    isCanTouch: t.isCanTouch
                },
                on: {
                    compoundFail: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.compoundFail.apply(void 0, arguments)
                    },
                    compoundSuccess: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.createOver.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1)], 1)
        },
        s = []
    }
}]);