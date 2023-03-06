webpackJsonp([2], {
    "4Xvd": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAlklEQVQ4T2P852T0iYGB8dF/hv+7mf7/ncO4/+JVBiTA+NfJ6D8S/y8DA8N0phc/ihmvXfsFEkdXAFbLyMCwl/HFDy+QIqwKoCZOYd53Lhefgr9M///q41MAMmgCXgWMDIxXCShg+EzICuzexBdQyHKQMEELyVEFGCEAERgKAYU/wRBMcoQSLcFkjzvj4Mt6mJmXUPYHAJOQh6qnFxppAAAAAElFTkSuQmCC"
    },
    HXef: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a("mvHQ"),
        i = a.n(s),
        n = a("5Xhr"),
        o = a("y6zN"),
        r = {
            data: function() {
                return {
                    middleTabData2: [],
                    middleTabData: [{
                        logo: "http://view.youth.cn/image/kkz_three_icon_0807.png",
                        button: "去领取",
                        desc: "免费水果,包邮到家",
                        icon: "免费领",
                        title: "领水果",
                        event: "play_game_fruits_gain",
                        miniprogram: {
                            appId: "wx457cf9ab6f548562",
                            miniprogramId: "gh_1540a8b84e9f",
                            miniprogramType: 0,
                            package_name: "cn.youth.news",
                            path: "pages/index/index?wxgamecid=CCBgAAoXkpQY8X-4JNwfG2&from=zhongqing_H5"
                        }
                    }],
                    taskHeadTabList: [],
                    taskTabList: [],
                    params: Object(o.b)(),
                    list: [],
                    elseList: [],
                    chestList: [],
                    tcChestReward: 0,
                    tcChestRewardNum: null,
                    progressNum: null,
                    progressBarWidth: 0,
                    videoList: [],
                    boxVideo: !1,
                    boxVideoId: "",
                    videoEndReward: null,
                    isInitstall: !1,
                    downLoadReward: 0,
                    isCanClick: !0,
                    rewardMoney: 0,
                    encryptionCode: "",
                    easyTimeID: "",
                    can_score: "",
                    isLayer: !1,
                    can_num: 0,
                    storeTime: 0,
                    iosIsHide: !1,
                    taskTabListShow: !0,
                    isAndroid350: !1,
                    adPosition350: ""
                }
            },
            created: function() {
                this.iosIsHide = !!Object(o.c)(),
                this.isAndroid350 = Object(o.c)() && this.getAppVersion() >= 350,
                this.getTabListFun(),
                this.getChestConfigDataFun(),
                this.getHeadTabListFun(),
                this.getKanKanVideoRewardFun(),
                this.initWebview()
            },
            mounted: function() {
                var e = this;
                this.storeTime = (new Date).getTime() > Number(window.localStorage.getItem("layerTimer")) + 144e5,
                this.initZq(),
                this.$nextTick(function() {
                    e.iosIsHide && e.getAppVersion() >= 222 ? (console.log("调用"), setTimeout(function() {
                        document.querySelector(".Loading").style.display = "none",
                        e.$refs.watchMoney.style.opacity = "1",
                        window.WebViewJavascriptBridge.callHandler("get_server_ua")
                    },
                    500)) : (document.querySelector(".Loading").style.display = "none", e.$refs.watchMoney.style.opacity = "1", e.getTaskListFun())
                }),
                zq.saCommSendData("pageView", {
                    page_name: "task_look_list_page",
                    page_title: "看看赚H5页"
                })
            },
            methods: {
                detailsWeChatApp: function(e) {
                    var t = {
                        miniprogram: e.miniprogram
                    };
                    console.log(t),
                    window.WebViewJavascriptBridge.callHandler("jumpToWeappAd", t),
                    zq.saCommSendData("lookPageIconClick", {
                        taskAction: e.event || "",
                        taskName: e.title
                    })
                },
                initZq: function() {
                    zq.saCommInit({
                        uid: this.params.uid,
                        _scConfig: {
                            show_log: !1
                        }
                    })
                },
                closeWindow: function() {
                    window.WebViewJavascriptBridge.callHandler("closeWindow", {},
                    function(e) {}),
                    this.closeLayer()
                },
                closeLayer: function() {
                    this.isLayer = !1,
                    window.localStorage.setItem("layerTimer", (new Date).getTime()),
                    console.log("储存", (new Date).getTime())
                },
                encryptCode: function(e) {
						this.$toast.loading({
                        mask: !1,
                        message: JSON.stringify(e),
                        duration: 100
                    });
                    console.log(e.banner_id),
                    this.params.task_id = e.banner_id,
                    window.WebViewJavascriptBridge.callHandler("getEncryptParams", this.params,
                    function(e) {
                        console.log(e + "返回加密串")
                    })
                },
                goBDProgram: function(e) {
                    0 == e.status ? e.completed_task < 10 ? (this.$toast.loading({
                        mask: !1,
                        message: "跳转中",
                        duration: 1e3
                    }), this.openChestBDTask(e)) : (this.$toast.loading({
                        mask: !1,
                        message: "领取中",
                        duration: 1e3
                    }), this.getBDTask(e)) : 2 == e.status && (this.$toast.loading({
                        mask: !1,
                        message: "跳转中",
                        duration: 1e3
                    }), this.openChestBDTask(e))
                },
                openChestBDTask: function(e) {
                    var t = this;
                    this.encryptCode(e),
                    setTimeout(function() {
                        t.stratBdTask();
                        var e = encodeURIComponent(t.encryptionCode);
                        e = e.replace(/\%3D/g, "@@@"),
                        window.WebViewJavascriptBridge.callHandler("openBaiduApp", {
                            url: "youthapp://swan/10XKZT10f6sIUtE1CyjdCLe19XSNL6YX/pages/index/index?p=" + e
                        },
                        function(e) {})
                    },
                    1e3)
                },
                stratBdTask: function() {
                    n.a.adlickstart({
                        p: encodeURI(this.encryptionCode)
                    }).then(function(e) {
                        console.log(e)
                    })
                },
                getBDTask: function(e) {
                    var t = this;
                    this.encryptCode(e),
                    setTimeout(function() {
                        n.a.adlickend({
                            p: encodeURI(t.encryptionCode)
                        }).then(function(e) {
                            console.log(e, "领取奖励"),
                            console.log(e.data.items.score),
                            e.data.items.score ? setTimeout(function() {
                                window.WebViewJavascriptBridge.callHandler("reward_two_ad", {
                                    score: e.data.items.score ? e.data.items.score: "200",
                                    source: "REWARD_TWO_AD"
                                },
                                function() {}),
                                t.getTabListFun()
                            },
                            500) : (console.log("领取失败"), t.$toast({
                                message: e.data.items.message ? e.data.items.message: "领取失败"
                            }))
                        })
                    },
                    1e3)
                },
                getAppVersion: function() {
                    return Object(o.b)("app_version").split(".").join("")
                },
                jumpRouter: function(e) {
                    document.querySelector(".Loading").style.display = "block",
                    setTimeout(function() {
                        document.querySelector(".Loading").style.display = "none"
                    },
                    2e3),
                    this.$router.push({
                        path: e,
                        query: this.$route.query
                    })
                },
                tabHandleEvent: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    try {
                        if (e.event) {
                            var t = {
                                page_name: "task_look_list_page",
                                element_title: e.title,
                                element_name: "task_look_" + e.event
                            };
                            zq.saCommSendData("elementClick", t)
                        }
                        zq.saCommSendData("lookPageIconClick", {
                            taskAction: e.event || "",
                            taskName: e.title
                        })
                    } catch(e) {
                        console.warn(e, "tabHandleEvent")
                    }
                },
                toGetMoney: function(e, t) {
                    if (this.tabHandleEvent(), 666 != e.type) {
                        if (e.miniprogram) return this.detailsWeChatApp(e),
                        !1;
                        if (this.easyTimeID && (clearTimeout(this.easyTimeID), this.easyTimeID = ""), 1 * e.type != 8) {
                            var a = void 0;
                            if ("yuetoutiao" == e.type) window.WebViewJavascriptBridge.callHandler("ytt_cpa_play", {});
                            else if ("2" == e.type) a = "/browsed",
                            this.jumpRouter(a);
                            else if ("6" == e.type) a = "/SharePage",
                            this.jumpRouter(a);
                            else if ("7" == e.type) a = "/TimePage",
                            this.jumpRouter(a);
                            else if ("read" == e.type) a = "/read",
                            this.jumpRouter(a);
                            else if ("99" == e.type) {
                                var s = {
                                    record_time: "90",
                                    task_id: "browse_easy_money_task_" + e.banner_id,
                                    url: e.url,
                                    type: 2
                                };
                                this.easyTimeID = setTimeout(function() {
                                    window.WebViewJavascriptBridge.callHandler("openSourceUrl", s)
                                },
                                300)
                            } else if ("fast_clear_gain" == e.type) {
                                var i = {
                                    type: 0,
                                    url: e.url
                                };
                                window.WebViewJavascriptBridge.callHandler("openSourceUrl", i)
                            } else if ("to_yue_meng_novel" == e.type) window.WebViewJavascriptBridge.callHandler("openSome", {
                                action: "to_yue_meng_novel"
                            });
                            else {
                                var n = {
                                    type: 0,
                                    url: e.url
                                };
                                window.WebViewJavascriptBridge.callHandler("openSourceUrl", n)
                            }
                        }
                    } else this.jumpRouter(e.route_url)
                },
                getHeadTabListFun: function() {},
                getTabListFun: function() {
                    var e = this;
                    n.a.getTabList().then(function(t) {
                        var a = [];
                        1 === t.data.status && (!e.iosIsHide && (e.middleTabData = []), (a = JSON.parse(i()(t.data.data))).map(function(t, s) {
                            "play_wechat_app" == t.event && (e.middleTabData2 = [t], a.splice(s, 1))
                        }), e.taskTabList = a, e.taskTabListShow && (e.taskTabListShow = 0, e.taskTabList.map(function(e, t) {
                            if (e.event) {
                                var a = {
                                    page_name: "task_look_list_page",
                                    element_title: e.title,
                                    element_name: "task_look_" + e.event
                                };
                                zq.saCommSendData("elementShow", a)
                            }
                        })))
                    }).
                    catch(function(e) {
                        return console.log("任务Tab数据失败", e)
                    })
                },
                getTaskListFun: function() {
						
                    var e = this;
                    n.a.getTaskList({
                        type: 0
                    }).then(function(t) {
                        if (t.data.data && (e.list = t.data.data.list, e.can_score = t.data.data.can_score, e.can_num = t.data.data.can_num, e.resizeData(e.list), e.iosIsHide && e.storeTime && e.can_num > 0)) {
                            var a = e;
                            window.history.pushState({},
                            document.title, "#"),
                            window.addEventListener("popstate",
                            function() {
                                a.isLayer = !0
                            },
                            !1)
                        }
                    })
                },
                resizeData: function(e) {
                    var t = [],
                    a = [];
                    e.map(function(e, s) {
                        "2" == e.status && "2" != e.ctype ? a.push(e) : "2" != e.ctype && t.push(e)
                    }),
                    this.elseList = t.concat(a)
								this.$toast.loading({
                        mask: !1,
                        message: JSON.stringify(this.elseList[0]),
                        duration: 100
                    });
					
					//alert(JSON.stringify(this.elseList))
                },
                getKanKanVideoRewardFun: function() {
                    var e = this;
                    n.a.getKanKanVideoReward().then(function(t) {
                        console.log("获取激励视频广告配置", t),
                        t.data.status && (e.isAndroid350 ? e.adPosition350 = t.data.data.position_id: (e.videoList = t.data.data.video.concat(t.data.data.tt_video), e.pVideo(e.videoList, "newspz")))
                    }).
                    catch(function(e) {
                        return console.log("获取激励视频广告配置失败", e)
                    })
                },
                pVideo: function(e, t) {
                    var a = {
                        config: this.watchVideoBefore(e),
                        source: t,
                        type: "video"
                    };
                    window.WebViewJavascriptBridge.callHandler("load_ad", a,
                    function() {})
                },
                watchVideo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (this.isAndroid350 && this.adPosition350) {
                        var t = {
                            position_id: this.adPosition350,
                            box_index: e
                        };
                        console.log(t, "watchVideo"),
                        window.WebViewJavascriptBridge.callHandler("show_reward_video_position", t,
                        function() {})
                    } else {
                        var a = {
                            config: this.watchVideoBefore(this.videoList),
                            source: "newspz",
                            type: "video"
                        };
                        console.log("传给客户端的广告"),
                        console.log(a);
                        window.WebViewJavascriptBridge.callHandler("show_ad", a,
                        function() {})
                    }
                },
                watchVideoBefore: function(e) {
                    console.log(e);
                    for (var t = e,
                    a = [], s = 0; s < t.length; s++) {
                        var i = {
                            position_id: t[s].postid,
                            app_id: t[s].app_id,
                            ad_type: t[s].ad_type,
                            ad_show_type: t[s].ad_show_type,
                            ad_weight: t[s].ad_weight
                        };
                        a.push(i)
                    }
                    return a
                },
                pageBrowsing: function(e) {
                    this.$toast.loading({
                        mask: !1,
                        message: "跳转中",
                        duration: 300
                    });
                    if (1 != e.complete) {
                        var t = 2 == e.status ? 0 : 1;
                        if (e.user_agent && this.getAppVersion() >= 222) var a = {
                            type: 3 == e.ctype ? 5 : e.ctype,
                            task_type: 1,
                            task_id: e.banner_id,
                            is_reward_read: t,
                            user_agent: e.user_agent && this.getAppVersion() >= 222 ? e.user_agent: "",
                            url: e.url
                        };
                        else a = {
                            type: 3 == e.ctype ? 5 : e.ctype,
                            task_type: 1,
                            task_id: e.banner_id,
                            is_reward_read: t,
                            url: e.url
                        };
                        console.log(e.user_agent, "item.user_agent"),
                        "1976" != e.id && "1182" != e.id && (a.tuia_action1 = {
                            code_id: 329359,
                            action: "inter"
                        },
                        a.tuia_action2 = {
                            code_id: 329552,
                            action: "inter"
                        }),
                        window.WebViewJavascriptBridge.callHandler("openSourceUrl", a)
                    }
                },
                initWebview: function() {
                    console.log("Home初始化webview");
                    var e = this;
                    window.WebViewJavascriptBridge.callHandler("needCallBack", {
                        name: "allShareBack"
                    },
                    function(e) {}),
                    window.sessionStorage.getItem("WebviewInit1") || (window.WebViewJavascriptBridge.init(function(e, t) {
                        t({
                            "Javascript Responds": "Wee!"
                        })
                    }), window.sessionStorage.setItem("WebviewInit1", !0)),
                    window.WebViewJavascriptBridge.registerHandler("browseEnd",
                    function(t, a) {
                        console.log("返回完成了", JSON.parse(t).items.score),
                        console.log(1 * JSON.parse(t).items.score != 0),
                        t && JSON.parse(t).items && JSON.parse(t).items.score && 1 * JSON.parse(t).items.score != 0 ? (e.rewardMoney = JSON.parse(t).items.score, window.WebViewJavascriptBridge.callHandler("reward_two_ad", {
                            score: e.rewardMoney,
                            source: "REWARD_TWO_AD"
                        }), e.getTabListFun()) : console.log("阅读时长不够")
                    }),
                    window.WebViewJavascriptBridge.registerHandler("show_ad_callback",
                    function(t, a) {
                        e.boxVideo ? (console.log("视频观看完成3"), n.a.getChestRewardData({
                            id: e.boxVideoId
                        }).then(function(t) {
                            1 === t.data.status && (e.getChestConfigDataFun(), window.WebViewJavascriptBridge.callHandler("reward_two_ad", {
                                score: t.data.data,
                                source: "REWARD_TWO_AD"
                            })),
                            e.boxVideo = !1
                        }).
                        catch(function(e) {
                            return console.log("获取宝箱奖励数据失败", e)
                        })) : n.a.kankanVideoRewardCallback().then(function(t) {
                            console.log("看完视频后给的奖励", t),
                            t.data.status && (e.videoEndReward = t.data.data, window.WebViewJavascriptBridge.callHandler("reward_two_ad", {
                                score: e.videoEndReward,
                                source: "REWARD_TWO_AD"
                            }), e.getHeadTabListFun())
                        }).
                        catch(function(e) {
                            return console.log("看完视频后给的奖励失败", e)
                        })
                    }),
                    window.WebViewJavascriptBridge.registerHandler("allShareBack",
                    function(t, a) {
                        console.log("视频观看完成2"),
                        e.getHeadTabListFun(),
                        e.getTaskListFun(),
                        e.getChestConfigDataFun(),
                        e.getTabListFun(),
                        e.isInitstall && (console.log("奖励弹窗"), e.getAppVersion() > 163 ? (console.log("大于163版本,h5调用奖励接口"), n.a.downloadVideoRewardCallback().then(function(t) {
                            console.log("下载视频给奖励接口", t.data.data),
                            e.downLoadReward = t.data.data,
                            window.WebViewJavascriptBridge.callHandler("reward_two_ad", {
                                score: e.downLoadReward,
                                source: "REWARD_TWO_AD"
                            }),
                            e.downLoadReward = 0
                        }).
                        catch(function(e) {
                            return console.log("下载视频给奖励失败", e)
                        })) : (console.log("小于等于163版本,客户端调用奖励接口"), window.WebViewJavascriptBridge.callHandler("reward_two_ad", {
                            score: 200,
                            source: "REWARD_TWO_AD"
                        })), e.isInitstall = !1)
                    }),
                    window.WebViewJavascriptBridge.registerHandler("downLoadReward_callback",
                    function(t, a) {
                        console.log("安装完成的回调----------------\x3e"),
                        e.isInitstall = !0
                    }),
                    window.WebViewJavascriptBridge.registerHandler("callEncryptBack",
                    function(t, a) {
                        console.log("返回加密串", t),
                        e.encryptionCode = t,
                        e.getTabListFun()
                    }),
                    window.WebViewJavascriptBridge.registerHandler("get_server_ua_callback",
                    function(t) {
                        console.log("get_server_ua_callback", t),
                        e.getTaskListFun()
                    })
                },
                getChestConfigDataFun: function() {
                    var e = this;
                    n.a.getChestConfigData().then(function(t) {
                        1 === t.data.status && (e.chestList = t.data.data.list, e.progressNum = Number(t.data.data.num), e.progressNum <= 3 ? e.progressBarWidth = 5.4 * e.progressNum: e.progressNum > 3 && e.progressNum <= 8 ? e.progressBarWidth = 7 * (e.progressNum - 3) + 15.3 : e.progressNum > 8 && e.progressNum < 15 ? e.progressBarWidth = 2.85 * (e.progressNum - 8) + 50 : e.progressBarWidth = 100, e.$refs.progress_bar.style.width = e.progressBarWidth + "%", e.$refs.progress_bg.style.display = "block")
                    }).
                    catch(function(e) {
                        return console.log("获取宝箱配置数据失败", e)
                    })
                },
                openChest: function(e, t) {
                    var a = this;
                    console.log("红包状态", 1 === e.status ? "1，可领": 2 === e.status ? "2，已领": "0，不能领"),
                    1 == e.status ? Object(o.c)() && this.getAppVersion() >= 151 ? (this.boxVideo = !0, this.boxVideoId = e.id, this.watchVideo(t)) : (console.log(2), n.a.getChestRewardData({
                        id: e.id
                    }).then(function(e) {
                        console.log(e.data.status),
                        1 === e.data.status && (a.tcChestRewardNum = e.data.data, a.tcChestReward = 1, setTimeout(function() {
                            a.tcChestReward = 0,
                            a.getChestConfigDataFun()
                        },
                        2e3))
                    }).
                    catch(function(e) {
                        return console.log("获取宝箱奖励数据失败", e)
                    })) : this.$toast({
                        message: "完成任务后才能领取宝箱"
                    })
                }
            }
        },
        c = {
            render: function() {
                var e = this,
                t = e.$createElement,
                a = e._self._c || t;
                return a("div", {
                    ref: "watchMoney",
                    staticClass: "watchMoney"
                },
                [a("div", {
                    staticClass: "watchVideoWrap row_box"
                },
                e._l(e.taskTabList,
                function(t, s) {
                    return a("div", {
                        key: s,
                        staticClass: "watchVideo",
                        on: {
                            click: function(a) {
                                return e.toGetMoney(t, 1)
                            }
                        }
                    },
                    [a("div", [a("img", {
                        staticStyle: {
                            width: ".88rem",
                            height: ".88rem",
                            "margin-right": "0.08rem",
                            "margin-left": "0.1rem"
                        },
                        attrs: {
                            src: t.logo,
                            alt: ""
                        }
                    }), e._v(" "), a("div", [a("div", {
                        staticClass: "newAddInfo"
                    },
                    [a("span", {
                        staticStyle: {
                            "font-size": "0.32rem",
                            color: "#333",
                            "white-space": "nowrap"
                        }
                    },
                    [e._v(e._s(t.title))]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" != t.icon,
                            expression: "item.icon != ''"
                        }],
                        staticClass: "getmark"
                    },
                    [e._v(e._s(t.icon))])]), e._v(" "), a("p", {
                        staticStyle: {
                            color: "#999",
                            "font-size": "0.24rem"
                        }
                    },
                    [e._v(e._s(t.desc))]), e._v(" "), "9" == t.type ? a("p", {
                        staticStyle: {
                            color: "#999",
                            "font-size": "0.24rem"
                        }
                    },
                    [e._v(e._s("(" + t.completed_task + "/" + t.total_task + ")"))]) : e._e()])])])
                }), 0), e._v(" "), e.iosIsHide && e.middleTabData2.length > 0 ? a("div", {
                    staticClass: "watchVideoWrap",
                    staticStyle: {
                        margin: ".16rem .2rem 0",
                        overflow: "hidden"
                    }
                },
                e._l(e.middleTabData2,
                function(t, s) {
                    return a("div", {
                        key: s,
                        staticClass: "watchVideo",
                        staticStyle: {
                            width: "100%",
                            "margin-left": "0"
                        },
                        on: {
                            click: function(a) {
                                return e.toGetMoney(t)
                            }
                        }
                    },
                    [a("div", [a("img", {
                        staticStyle: {
                            width: ".88rem",
                            height: ".88rem",
                            "margin-right": "0.08rem",
                            "margin-left": "0.1rem"
                        },
                        attrs: {
                            src: t.logo,
                            alt: ""
                        }
                    }), e._v(" "), a("div", [a("div", {
                        staticClass: "newAddInfo"
                    },
                    [a("span", {
                        staticStyle: {
                            "font-size": "0.32rem",
                            color: "#333",
                            "white-space": "nowrap"
                        }
                    },
                    [e._v(e._s(t.title))]), e._v(" "), a("span", {
                        staticClass: "getmark"
                    },
                    [e._v(e._s(t.icon))])]), e._v(" "), a("p", {
                        staticStyle: {
                            color: "#999",
                            "font-size": "0.24rem"
                        }
                    },
                    [e._v(e._s(t.desc))])])]), e._v(" "), a("p", {
                        staticClass: "btn-play",
                        staticStyle: {
                            "margin-right": ".2rem"
                        }
                    },
                    [e._v(e._s(t.button))])])
                }), 0) : e._e(), e._v(" "), a("div", {
                    staticClass: "taskBao row_box",
                    staticStyle: {
                        overflow: "hidden",
                        background: "#fff"
                    }
                },
                [e._m(0), e._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.iosIsHide,
                        expression: "iosIsHide"
                    }],
                    staticClass: "chest_box"
                },
                [a("ul", {
                    staticClass: "chest_list rowFlex columnCenter spaceBetween"
                },
                [e._l(e.chestList,
                function(t, s) {
					t.status=0
                    return a("li", {
                        key: s,
                        staticClass: "chest_item columnFlex allCenter",
                        class: {
                            no_receive: 0 === t.status,
                            can_receive: 1 === t.status,
                            have_receive: 2 === t.status
                        },
                        on: {
                            click: function(a) {
                                return e.openChest(t, s)
                            }
                        }
                    },
                    [a("div", {
                        staticClass: "chest_img rowFlex allCenter",
                        class: {
                            shankAni: 1 === t.status
                        }
                    },
                    [2 != t.status ? a("p", {
                        staticClass: "chest_tips"
                    },
                    [e._v("返" + e._s(t.score) + "青豆")]) : e._e()]), e._v(" "), a("div", {
                        staticClass: "circle"
                    }), e._v(" "), 0 == t.status ? a("p", {
                        staticClass: "chest_text"
                    },
                    [e._v("完成" + e._s(t.num) + "个任务")]) : e._e(), e._v(" "), 1 == t.status ? a("p", {
                        staticClass: "chest_text can_receive_text"
                    },
                    [e._v("点击领取")]) : e._e(), e._v(" "), 2 == t.status ? a("p", {
                        staticClass: "chest_text"
                    },
                    [e._v("奖励已获得")]) : e._e()])
                }), e._v(" "), a("div", {
                    ref: "progress_bg",
                    staticClass: "progress_bg"
                },
                [a("div", {
                    ref: "progress_bar",
                    staticClass: "progress_bar"
                })])], 2)]), e._v(" "), a("ul", {
                    staticClass: "kankan_mainU"
                },
                e._l(e.elseList,
                function(t, s) {
                    return a("li", {
                        key: s,
                        staticClass: "kankan_mainUL"
                    },
                    [a("div", {
                        staticClass: "kankan_mainULR",
                        on: {
                            click: function(a) {//-----

                                return e.pageBrowsing(t)
                            }
                        }
                    },
                    [a("h5", [e._v(e._s(t.title))]), e._v(" "), a("span", [e._v("+" + e._s(t.score) + "青豆")]), e._v(" "), "0" == t.status ? a("p", {
                        staticClass: "kankan_mainULRQ",
                        attrs: {
                            id: "task_browse_515",
                            rev: "0"
                        }
                    },
                    [e._v("去完成")]) : e._e(), e._v(" "), "0" != t.status && "2" != t.status ? a("p", {
                        staticClass: "kankan_mainULRQ kankan_mainULRQ_pending",
                        attrs: {
                            id: "task_browse_515",
                            rev: "0"
                        }
                    },
                    [e._v("进行中")]) : e._e(), e._v(" "), "2" == t.status ? a("p", {
                        staticClass: "kankan_mainULRQ kankan_mainULRY",
                        attrs: {
                            id: "task_browse_515",
                            rev: "0"
                        }
                    },
                    [e._v("已完成")]) : e._e()])])
                }), 0)]), e._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 !== e.tcChestReward,
                        expression: "tcChestReward !== 0"
                    }],
                    staticClass: "tanchuang_bg rowFlex allCenter"
                },
                [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === e.tcChestReward,
                        expression: "tcChestReward === 1"
                    }],
                    staticClass: "tcReward columnFlex allCenter"
                },
                [a("img", {
                    attrs: {
                        src: "https://res.youth.cn/20181210/img/qingdou-icon.png",
                        alt: ""
                    }
                }), e._v(" "), a("p", [e._v(e._s(e.tcChestRewardNum) + "青豆")])]), e._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 === e.tcChestReward,
                        expression: "tcChestReward === 2"
                    }],
                    staticClass: "tc_video_tips columnFlex allCenter"
                },
                [a("p", [e._v("今日已经全部完成，明日再来吧~")])])]), e._v(" "), e.isLayer ? a("div", {
                    staticClass: "layer",
                    on: {
                        click: e.closeLayer
                    }
                },
                [a("div", {
                    staticClass: "layerContent columnFlex columnCenter",
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                },
                [a("div", {
                    staticClass: "layerContentImage"
                }), e._v(" "), a("div", {
                    staticClass: "layerContentText"
                },
                [e._v("\n        您还有"), a("span", [e._v(e._s(e.can_num))]), e._v("个任务尚未完成, 全部完成可领取"), a("span", [e._v(e._s(e.can_score))]), e._v("青豆， 确认要离开么?\n      ")]), e._v(" "), a("div", {
                    staticClass: "btn2",
                    on: {
                        click: e.closeWindow
                    }
                },
                [e._v("稍后再来")]), e._v(" "), a("div", {
                    staticClass: "btn1",
                    on: {
                        click: e.closeLayer
                    }
                },
                [e._v("继续赚钱")])])]) : e._e()])
            },
            staticRenderFns: [function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", {
                    staticClass: "kankan_mainBottom rowFlex columnCenter spaceBetween"
                },
                [t("div", {
                    staticClass: "rowFlex columnCenter"
                },
                [t("img", {
                    attrs: {
                        src: a("4Xvd"),
                        alt: ""
                    }
                }), this._v(" "), t("p", [this._v("每天一次任务")])]), this._v(" "), t("p", [this._v("阅读6篇得青豆")])])
            }]
        };
        var d = a("VU/8")(r, c, !1,
        function(e) {
            a("g5uW")
        },
        null, null);
        t.
    default = d.exports
    },
    g5uW: function(e, t) {},
    mvHQ: function(e, t, a) {
        e.exports = {
        default:
            a("qkKv"),
            __esModule: !0
        }
    },
    qkKv: function(e, t, a) {
        var s = a("FeBl"),
        i = s.JSON || (s.JSON = {
            stringify: JSON.stringify
        });
        e.exports = function(e) {
            return i.stringify.apply(i, arguments)
        }
    }
});