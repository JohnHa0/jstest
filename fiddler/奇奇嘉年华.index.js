window.__require = function t(e, o, n) {
    function i(a, s) {
        if (!o[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (r) return r(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var u = o[a] = {
                exports: {}
            };
            e[a][0].call(u.exports,
            function(t) {
                return i(e[a][1][t] || t)
            },
            u, u.exports, t, e, o, n)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require,
    a = 0; a < n.length; a++) i(n[a]);
    return i
} ({
    ActiveRuleView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6d518N4xvVDKa00Eizb8xmL", "ActiveRuleView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = (a.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([s], e)
        } (cc.Component));
        o.
    default = c,
        cc._RF.pop()
    },
    {}],
    ActiveView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "455794qH1hFZLRwT3ClaRqO", "ActiveView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("./GameManager/ShareManager"),
        c = t("./GameUtil"),
        l = t("./GlobalData"),
        u = t("./GolfGameManage"),
        h = t("./Layer/LevelView"),
        p = t("./Layer/MatchRewardView"),
        d = t("./Layer/RankView"),
        f = cc._decorator,
        _ = f.ccclass,
        g = f.property; (function(t) {
            t.SHARE = "share",
            t.RECORD = "record",
            t.RULE = "rule",
            t.GUIDE = "guide",
            t.RANK = "rank",
            t.TASK = "task",
            t.QUICKLY = "quickly",
            t.MATCH_0 = "match0",
            t.MATCH_1 = "match1",
            t.MATCH_2 = "match2",
            t.MATCH_REWARD_0 = "match_reward0",
            t.MATCH_REWARD_1 = "match_reward1",
            t.MATCH_REWARD_2 = "match_reward2"
        })(a || (a = {}));
        var y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_surplus_par = null,
                e.lb_ticket = null,
                e.lb_ID = null,
                e.lb_diamond = null,
                e.lb_today_pole = null,
                e.match_node = null,
                e.pfb_task = null,
                e.pfb_rank = null,
                e.pfb_level = null,
                e.pfb_reward = null,
                e.pfb_record = null,
                e.pfb_rule = null,
                e._selectMatch = l.MATCH_TYPE.PUSSY_CAT,
                e._levelData = [],
                e._matchNodeList = [],
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.initView()
            },
            e.prototype.start = function() {
                GameClient.on(GameClient.EVENT_GAME_WEALTHY_UPDATE, this.updateUserInfo, this),
                GameClient.on(GameClient.EVENT_GAME_UPDATE_ID, this.updateID, this),
                GameClient.on(GameClient.EVENT_GET_GOLF_LOTTERY_DATA, this.updateView, this),
                GameClient.on(GameClient.EVENT_UPDATE_FREE_POLE, this.updateFreePole, this)
            },
            e.prototype.updateFreePole = function() {
                this.lb_surplus_par.string = "" + l.
            default.getInstance().playFreeTimes
            },
            e.prototype.updateUserInfo = function() {
                this.lb_ticket.string = "" + l.
            default.getInstance().userInfo.ticket,
                this.lb_diamond.string = "" + l.
            default.getInstance().userInfo.diamond
            },
            e.prototype.updateID = function() {
                this.lb_ID.string = "ID:" + (l.
            default.getInstance().accountInfo.memberid || "000000")
            },
            e.prototype.initView = function() {
                for (var t = 0; t < 3; t++) {
                    var e = this.match_node.getChildByName("btn_match_" + t);
                    e && this._matchNodeList.push(e)
                }
                this.lb_ID.string = "ID:000000",
                this.updateMatch(),
                this.updateFreePole(),
                this.updateUserInfo(),
                this.updateID(),
                l.
            default.getInstance().bGameBack && this.setSelectMatch(u.
            default.getInstance().getSelectMatchID()),
                l.
            default.getInstance().bGameBack = !1
            },
            e.prototype.initConfig = function() {
                for (var t = [], e = [[3, 7], [5, 10, 15], [4, 9, 12]], o = [], n = 1, i = 1, r = 0, a = 0; a < 60; a++) {
                    for (var s = {},
                    c = 1e4 * n,
                    u = 100 * i,
                    h = 0; h < e[n - 1].length; h++) e[n - 1][h];
                    if (++r > e[n - 1][e[n - 1].length - 1] ? (c = 1e4 * (n += 1), r = 1, i = 1) : r > e[n - 1][i - 1] && (i += 1), u = 100 * i, !e[n - 1]) {
                        n = 1;
                        break
                    }
                    s.match_id = c,
                    s.station_id = u,
                    s.standard_poles = 10 + 10 * a,
                    s.map_id = c + u + r,
                    t.push(s)
                }
                for (e = [[3, 7], [5, 10, 15]], o = [], n = 1, i = 1, r = 0, a = 1; a < 23; a++) {
                    for (s = {},
                    c = 1e4 * n, u = 100 * i, h = 0; h < e[n - 1].length; h++) e[n - 1][h];
                    if (++r > e[n - 1][e[n - 1].length - 1] ? (c = 1e4 * (n += 1), r = 1, i = 1) : r > e[n - 1][i - 1] && (i += 1), u = 100 * i, !e[n - 1]) {
                        n = 1;
                        break
                    }
                    s.map_id = c + u + r,
                    s.state = 0,
                    s.op_num = 1 + 5 * a,
                    s.drop_pos_x = cc.v2(0, 0),
                    s.drop_pos_y = cc.v2(0, 0),
                    s.windSpeed = 0,
                    s.windAngle = 0,
                    s.pole_type = 0,
                    s.standard_poles = 10 + 10 * a,
                    o.push(s)
                }
                l.
            default.getInstance().mapFinishList = o,
                console.log("gameConfig=", t);
                var p = {};
                for (a = 0; a < t.length; a++) {
                    var d = {};
                    d.standard_poles = t[a].standard_poles,
                    d.map_id = t[a].map_id,
                    p.hasOwnProperty(t[a].match_id) ? p[t[a].match_id].station.hasOwnProperty(t[a].station_id) ? p[t[a].match_id].station[t[a].station_id].stationList.push(d) : (p[t[a].match_id].station[t[a].station_id] = {},
                    p[t[a].match_id].station[t[a].station_id].station_id = t[a].station_id, p[t[a].match_id].station[t[a].station_id].stationList = [], p[t[a].match_id].station[t[a].station_id].stationList.push(d)) : (p[t[a].match_id] = {},
                    p[t[a].match_id].match_id = t[a].match_id, p[t[a].match_id].standard_poles = t[a].standard_poles, p[t[a].match_id].station = {},
                    p[t[a].match_id].station[t[a].station_id] = {},
                    p[t[a].match_id].station[t[a].station_id].station_id = t[a].station_id, p[t[a].match_id].station[t[a].station_id].stationList = [], p[t[a].match_id].station[t[a].station_id].stationList.push(d))
                }
                var f = [];
                for (var _ in p) {
                    var g = p[_],
                    y = f.length;
                    f[y] = {},
                    f[y].match_id = g.match_id,
                    f[y].standard_poles = g.standard_poles,
                    f[y].stationList = [];
                    var m = g.station;
                    for (var v in m) {
                        var b = f[y].stationList.length;
                        f[y].stationList[b] = {},
                        f[y].stationList[b].station_id = m[v].station_id,
                        f[y].stationList[b].mapList = m[v].stationList
                    }
                }
                l.
            default.getInstance().matchList = f,
                this.updateMatch(),
                console.log("match=", p),
                console.log("matchInfo=", f)
            },
            e.prototype.btnClick = function(t, e) {
                if (console.log("clickType ====" + e), e == a.SHARE) u.
            default.getInstance().sendShareData(),
                s.
            default.instance.share(0, !1);
                else if (e == a.RECORD)(o = cc.instantiate(this.pfb_record)).parent = this.node;
                else if (e == a.RULE) {
                    var o = cc.instantiate(this.pfb_rule);
                    cc.find("GameMusicNode").getComponent("GameMusic").PlayFinishEffect(),
                    o.parent = this.node
                } else if (e == a.GUIDE) l.
            default.getInstance().guide_state = 0,
                cc.director.loadScene("TiledMapTest");
                else if (e == a.RANK) {
                    var n = cc.instantiate(this.pfb_rank);
                    n.parent = this.node,
                    n.getComponent(d.
                default).initView()
                } else if (e == a.TASK)(o = cc.instantiate(this.pfb_task)).parent = this.node;
                else if (e == a.QUICKLY);
                else if (e == a.MATCH_0 || e == a.MATCH_1 || e == a.MATCH_2) {
                    if (u.
                default.getInstance().getGuideUnFinished()) {
                        var i = {
                            desc: "前往新手关完成新手任务!",
                            left: {
                                name: "取消",
                                callback: null
                            },
                            right: {
                                name: "前往",
                                callback: function() {
                                    l.
                                default.getInstance().guide_state = 0,
                                    cc.director.loadScene("TiledMapTest")
                                }
                            }
                        };
                        return void c.
                    default.showBoxTip(i)
                    }
                    this.setSelectMatch(e)
                } else if (e == a.MATCH_REWARD_0 || e == a.MATCH_REWARD_1 || e == a.MATCH_REWARD_2) {
                    var r = cc.instantiate(this.pfb_reward);
                    r.parent = this.node;
                    var h = l.MATCH_TYPE.PUSSY_CAT;
                    e == a.MATCH_REWARD_1 ? h = l.MATCH_TYPE.QIQI: e == a.MATCH_REWARD_2 && (h = l.MATCH_TYPE.ROCKET_TURTLE),
                    r.getComponent(p.
                default).initData(h)
                }
            },
            e.prototype.setSelectMatch = function(t) {
                t == a.MATCH_0 ? l.
            default.getInstance().selectMatch = l.MATCH_TYPE.PUSSY_CAT: t == a.MATCH_1 ? l.
            default.getInstance().selectMatch = l.MATCH_TYPE.QIQI: t == a.MATCH_2 && (l.
            default.getInstance().selectMatch = l.MATCH_TYPE.ROCKET_TURTLE),
                this.updateLevelView()
            },
            e.prototype.updateLevelView = function() {
                var t = l.
            default.getInstance().selectMatch,
                e = u.
            default.getInstance().getMatchStationList(t);
                if (e) {
                    var o = cc.instantiate(this.pfb_level);
                    o.parent = this.node,
                    o.getComponent(h.
                default).initView(e)
                } else c.
            default.showTip("当前比赛尚未开启")
            },
            e.prototype.updateMatch = function() {
                var t = l.
            default.getInstance().todayPlayTimes,
                e = l.
            default.getInstance().todayPlayLimit;
                this.lb_today_pole.string = "每日挥杆上限：" + t + "/" + e;
                for (var o = 0; o < this._matchNodeList.length; o++) {
                    u.
                default.getInstance().getMatchPass(o);
                    var n = u.
                default.getInstance().getMatchScore(o),
                    i = u.
                default.getInstance().getMatchStation(o),
                    r = this._matchNodeList[o].getChildByName("lb_allStation").getComponent(cc.Label),
                    a = this._matchNodeList[o].getChildByName("frame_pole").getChildByName("lb_score").getComponent(cc.Label);
                    r.string = "共" + i + "站",
                    a.string = "string" == typeof n ? n + "杆": "未完赛"
                }
            },
            e.prototype.updateView = function() {
                u.
            default.getInstance().getGuideUnFinished() && (l.
            default.getInstance().guide_state = 0, cc.director.loadScene("TiledMapTest")),
                this.updateMatch()
            },
            r([g(cc.Label)], e.prototype, "lb_surplus_par", void 0),
            r([g(cc.Label)], e.prototype, "lb_ticket", void 0),
            r([g(cc.Label)], e.prototype, "lb_ID", void 0),
            r([g(cc.Label)], e.prototype, "lb_diamond", void 0),
            r([g(cc.Label)], e.prototype, "lb_today_pole", void 0),
            r([g(cc.Node)], e.prototype, "match_node", void 0),
            r([g(cc.Prefab)], e.prototype, "pfb_task", void 0),
            r([g(cc.Prefab)], e.prototype, "pfb_rank", void 0),
            r([g(cc.Prefab)], e.prototype, "pfb_level", void 0),
            r([g(cc.Prefab)], e.prototype, "pfb_reward", void 0),
            r([g(cc.Prefab)], e.prototype, "pfb_record", void 0),
            r([g(cc.Prefab)], e.prototype, "pfb_rule", void 0),
            r([_], e)
        } (cc.Component);
        o.
    default = y,
        cc._RF.pop()
    },
    {
        "./GameManager/ShareManager": "ShareManager",
        "./GameUtil": "GameUtil",
        "./GlobalData": "GlobalData",
        "./GolfGameManage": "GolfGameManage",
        "./Layer/LevelView": "LevelView",
        "./Layer/MatchRewardView": "MatchRewardView",
        "./Layer/RankView": "RankView"
    }],
    Ball: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "92bc5EyG/JM4Ltq1hR5AfUY", "Ball");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ballSprite = null,
                e.motion = null,
                e.ballList = [],
                e._bCircle = !1,
                e._parent = !1,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.init = function(t, e) {
                void 0 === e && (e = !1),
                this._parent = t,
                this._bCircle = e,
                this.motion.active = this._bCircle,
                this.ballSprite.spriteFrame = this._bCircle ? this.ballList[1] : this.ballList[0]
            },
            r([c(cc.Sprite)], e.prototype, "ballSprite", void 0),
            r([c(cc.Node)], e.prototype, "motion", void 0),
            r([c([cc.SpriteFrame])], e.prototype, "ballList", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    DiamondOrTicketTip: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "14c74c+76pLpoQBEdHmegsH", "DiamondOrTicketTip");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_count = null,
                e.img_diamond = null,
                e.img_ticket = null,
                e._height = 960,
                e._taskData = null,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initView = function(t, e, o) {
                this.img_diamond.active = !1,
                this.img_ticket.active = !1,
                t.diamond ? (this.lb_count.string = "x" + t.diamond, this.img_diamond.active = !0) : t.ticket && (this.lb_count.string = "x" + t.ticket, this.img_ticket.active = !0);
                var n = cc.v2(0, this.img_diamond.y),
                i = this.img_diamond.getPosition();
                console.log("beginPosX===" + i.x + "--beginPosy==" + i.y),
                i = this.img_diamond.parent.convertToWorldSpaceAR(i),
                console.log("beginPosX 111===" + i.x + "--beginPosy==" + i.y),
                n = e.x > i.x ? cc.v2(i.x + 100, i.y - 50) : cc.v2(i.x - 100, i.y - 50),
                n = o.convertToNodeSpaceAR(n),
                e = o.convertToNodeSpaceAR(e),
                i = o.convertToNodeSpaceAR(i);
                for (var r = 0; r < 3; r++) {
                    var a = null;
                    t.diamond ? a = cc.instantiate(this.img_diamond) : t.ticket && (this.img_ticket.active = !0, a = cc.instantiate(this.img_ticket)),
                    a.parent = o,
                    a.position = i,
                    cc.tween(a).delay(.1 + .1 * r).bezierTo(.8, n, n, e).removeSelf().start()
                }
                var s = this;
                cc.tween(this.node).delay(2).call(function() {
                    s.node.active = !1
                }).start()
            },
            r([c(cc.Label)], e.prototype, "lb_count", void 0),
            r([c(cc.Node)], e.prototype, "img_diamond", void 0),
            r([c(cc.Node)], e.prototype, "img_ticket", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    ErrorCode: [function(t, e, o) {
        "use strict";
        var n;
        cc._RF.push(e, "5faa8uN6uFJuaX/kB1WVMDt", "ErrorCode"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.ERROR_CODE = void 0,
        function(t) {
            t[t.ok = 0] = "ok",
            t[t.params_error = 1] = "params_error",
            t[t.config_not_found = 2] = "config_not_found",
            t[t.condition_not_meet = 3] = "condition_not_meet",
            t[t.bonus_already_got = 4] = "bonus_already_got",
            t[t.activity_expired = 5] = "activity_expired",
            t[t.initing = 6] = "initing",
            t[t.server_error = 7] = "server_error",
            t[t.act_not_open = 8] = "act_not_open",
            t[t.not_friend = 9] = "not_friend",
            t[t.friend_has_no_uid = 10] = "friend_has_no_uid",
            t[t.friend_mailbox_full = 11] = "friend_mailbox_full",
            t[t.doll_not_exists = 12] = "doll_not_exists",
            t[t.wish_task_expired = 13] = "wish_task_expired",
            t[t.max_alive_send_wish_limit = 14] = "max_alive_send_wish_limit",
            t[t.task_not_completed = 15] = "task_not_completed",
            t[t.gift_sended = 16] = "gift_sended",
            t[t.prop_not_exists = 17] = "prop_not_exists",
            t[t.no_bonus_conf = 18] = "no_bonus_conf",
            t[t.max_daily_take_wish_award_limit = 19] = "max_daily_take_wish_award_limit",
            t[t.room_not_exit = 20] = "room_not_exit",
            t[t.wrong_doll_id = 21] = "wrong_doll_id",
            t[t.dec_money_fail = 22] = "dec_money_fail",
            t[t.medal_not_enough = 23] = "medal_not_enough",
            t[t.act_medal_history_sended = 24] = "act_medal_history_sended",
            t[t.reach_exchange_maximum = 25] = "reach_exchange_maximum",
            t[t.not_enough_pieces = 26] = "not_enough_pieces",
            t[t.today_shared_pieces_obtained = 27] = "today_shared_pieces_obtained",
            t[t.not_finish_props_collection = 28] = "not_finish_props_collection",
            t[t.has_get_props_collection_award = 29] = "has_get_props_collection_award",
            t[t.can_not_props_collection_share_award = 30] = "can_not_props_collection_share_award",
            t[t.has_get_props_collection_share_award = 31] = "has_get_props_collection_share_award",
            t[t.not_get_props_collection_award_time = 32] = "not_get_props_collection_award_time",
            t[t.act_honey_fight_reward_fail = 33] = "act_honey_fight_reward_fail",
            t[t.has_no_activity_cnt = 34] = "has_no_activity_cnt",
            t[t.today_no_more_open = 35] = "today_no_more_open",
            t[t.no_more_open_chance = 36] = "no_more_open_chance",
            t[t.not_enough_money = 37] = "not_enough_money",
            t[t.act_req_too_fast = 38] = "act_req_too_fast",
            t[t.act_golf_extral_map_error = 39] = "act_golf_extral_map_error",
            t[t.act_golf_map_locking = 40] = "act_golf_map_locking",
            t[t.act_golf_beginner_course_unlock = 41] = "act_golf_beginner_course_unlock"
        } (o.ERROR_CODE || (o.ERROR_CODE = {}));
        var i = function() {
            function t() {}
            return t.ErrorCodeDesc = ((n = {})[0] = "", n[1] = "参数错误", n[2] = "奖励配置不存在", n[3] = "条件不满足", n[4] = "奖励已经领取过", n[5] = "活动已过期", n[6] = "数据加载中", n[7] = "服务器错误", n[8] = "活动未开启", n[9] = "对方不是你的好友", n[10] = "好友尚未有游戏账号", n[11] = "好友邮箱满了", n[12] = "娃娃不存在", n[13] = "心愿任务已经失效", n[14] = "最大的活着的发出的心愿个数限制", n[15] = "任务还未完成", n[16] = "娃娃已经送出去了", n[17] = "道具不存在", n[18] = "没有奖励配置", n[19] = "每天领取心愿任务的个数限制", n[20] = "房间不存在", n[21] = "错误的娃娃id", n[22] = "扣钱失败", n[23] = "勋章不足", n[24] = "勋章榜历史已发", n[25] = "兑换达到最大值", n[26] = "碎片不够", n[27] = "今日分享碎片已获取", n[28] = "沒有完成瓜分任务", n[29] = "已经获取过奖励", n[30] = "不能领取分享奖励", n[31] = "已经获取过分享奖励", n[32] = "未到领取奖励时间", n[33] = "亲密值大作战领奖失败", n[34] = "没有抽奖次数", n[35] = "已达今日挥杆上限,
完成任务可获得更多免费杆数!", n[36] = "没有开奖机会了达到总限制", n[37] = "奖券不足", n[38] = "活动请求太频繁", n[39] = "高尔夫配置文件错误", n[40] = "高尔夫地图未解锁", n[41] = "高尔夫新手教程地图未解锁", n),
            t
        } ();
        o.
    default = i,
        cc._RF.pop()
    },
    {}],
    GameConfig: [function(t, e, o) {
        "use strict";
        var n, i;
        cc._RF.push(e, "22cdcT9WWBGdZGu6jvnKm4E", "GameConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.GAME_STATE = o.AREA_TYPE = o.POLE_TYPE = void 0,
        function(t) {
            t[t.WOOD = 0] = "WOOD",
            t[t.IRON = 1] = "IRON",
            t[t.PUTTERS = 2] = "PUTTERS"
        } (n = o.POLE_TYPE || (o.POLE_TYPE = {})),
        function(t) {
            t[t.TREE = 0] = "TREE",
            t[t.WATER = 1] = "WATER",
            t[t.SAND = 2] = "SAND",
            t[t.DEEP_GRASS = 3] = "DEEP_GRASS",
            t[t.SHALLOW_GRASS = 4] = "SHALLOW_GRASS",
            t[t.HOLE = 5] = "HOLE",
            t[t.PUTTING_GREEN = 6] = "PUTTING_GREEN",
            t[t.SERVICR_AREA = 7] = "SERVICR_AREA",
            t[t.OUT_OF = 8] = "OUT_OF",
            t[t.NULL = 9] = "NULL"
        } (i = o.AREA_TYPE || (o.AREA_TYPE = {})),
        function(t) {
            t[t.FREE = 0] = "FREE",
            t[t.PLAYING = 1] = "PLAYING",
            t[t.PAUSE = 2] = "PAUSE",
            t[t.ENTER_HOLE = 3] = "ENTER_HOLE",
            t[t.GAME_END = 4] = "GAME_END",
            t[t.WAIT_DATA = 5] = "WAIT_DATA"
        } (o.GAME_STATE || (o.GAME_STATE = {}));
        var r = function() {
            function t() {}
            return t.initSpeed = 100,
            t.airDrag = 5,
            t.displayZIndex = 10,
            t.guideZIndex = 11,
            t.gameOverZIndex = 100,
            t.windMaxLevel = 4,
            t.windMinLevel = 0,
            t.G = 9.8,
            t.ballRadius = 20,
            t.holeRadius = 20,
            t.poleToBallDistance = 35,
            t.enterHoleRotateAngle = 540,
            t.pointSpace = 40,
            t.battingTime = 5,
            t.awaitTime = 1,
            t.POLE_CONFIG = [{
                type: n.WOOD,
                name: "木杆",
                emission_angle: 30,
                emission_speed: 100
            },
            {
                type: n.IRON,
                name: "铁杆",
                emission_angle: 30,
                emission_speed: 70
            },
            {
                type: n.PUTTERS,
                name: "推杆",
                emission_angle: 0,
                emission_speed: 25
            }],
            t.AREA_ID = [{
                type: i.TREE,
                id: [6],
                retarded_speed: 15,
                serve_ratio: 1
            },
            {
                type: i.WATER,
                id: [2],
                retarded_speed: 50,
                serve_ratio: 1
            },
            {
                type: i.SAND,
                id: [5],
                retarded_speed: 25,
                serve_ratio: .2
            },
            {
                type: i.DEEP_GRASS,
                id: [3],
                retarded_speed: 15,
                serve_ratio: .35
            },
            {
                type: i.SHALLOW_GRASS,
                id: [1],
                retarded_speed: 6,
                serve_ratio: 1
            },
            {
                type: i.HOLE,
                id: [1317],
                retarded_speed: 0,
                serve_ratio: 1
            },
            {
                type: i.PUTTING_GREEN,
                id: [4],
                retarded_speed: 0,
                serve_ratio: 1
            },
            {
                type: i.SERVICR_AREA,
                id: [8],
                retarded_speed: 5,
                serve_ratio: 1
            },
            {
                type: i.OUT_OF,
                id: [7],
                retarded_speed: 5,
                serve_ratio: 1
            }],
            t.WIND_POWER = [{
                level: 0,
                speed: 0,
                speedMin: 0,
                speedMax: 0
            },
            {
                level: 1,
                speed: 3,
                speedMin: 1,
                speedMax: 3
            },
            {
                level: 2,
                speed: 5,
                speedMin: 4,
                speedMax: 7
            },
            {
                level: 3,
                speed: 8,
                speedMin: 8,
                speedMax: 11
            },
            {
                level: 4,
                speed: 10,
                speedMin: 12,
                speedMax: 15
            }],
            t.RESULT_NAME = [{
                pole_num: -4,
                name: "三鹰球"
            },
            {
                pole_num: -3,
                name: "信天翁"
            },
            {
                pole_num: -2,
                name: "老鹰球"
            },
            {
                pole_num: -1,
                name: "小鸟球"
            },
            {
                pole_num: 0,
                name: "标准杆"
            },
            {
                pole_num: 1,
                name: "柏忌"
            },
            {
                pole_num: 2,
                name: "双柏忌"
            }],
            t
        } ();
        o.
    default = r,
        cc._RF.pop()
    },
    {}],
    GameMusic: [function(t, e) {
        "use strict";
        cc._RF.push(e, "4327dHHoxhFDI4kAgvYSYRI", "GameMusic"),
        cc.Class({
            extends: cc.Component,
            properties: {
                game_result_effect: {
                default:
                    [],
                    type: cc.AudioClip
                },
                start_effect: {
                default:
                    [],
                    type: cc.AudioClip
                },
                end_effect: {
                default:
                    [],
                    type: cc.AudioClip
                },
                finish_effect: {
                default:
                    null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                cc.game.addPersistRootNode(this.node)
            },
            start: function() {},
            PlayResultEffect: function(t) {
                cc.audioEngine.playEffect(this.game_result_effect[t], !1)
            },
            PlayStartEffect: function(t) {
                cc.audioEngine.playEffect(this.start_effect[t], !1)
            },
            PlayEndEffect: function(t) {
                cc.audioEngine.playEffect(this.end_effect[t], !1)
            },
            PlayFinishEffect: function() {
                var t = cc.audioEngine.playEffect(this.finish_effect, !1);
                cc.audioEngine.setVolume(t, .2)
            }
        }),
        cc._RF.pop()
    },
    {}],
    GameOver: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e6537dOvalFDrBLxmDuJJv2", "GameOver");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("./GameConfig"),
        c = t("./GameUtil"),
        l = t("./GlobalData"),
        u = t("./GolfGameManage"),
        h = t("./Layer/MatchRewardView"),
        p = cc._decorator,
        d = p.ccclass,
        f = p.property; (function(t) {
            t.AGAIN = "next",
            t.CLOSE = "close",
            t.REWARD = "reward"
        })(a || (a = {}));
        var _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.mapEnd = null,
                e.stationEnd = null,
                e.matchEnd = null,
                e.img_reward = null,
                e.lb_reward_name = null,
                e.lb_map_reward = null,
                e.lb_name = null,
                e.lb_score = null,
                e.img_ticket = null,
                e.img_diamond = null,
                e.btn_confirm = null,
                e.btn_next = null,
                e.btn_reward = null,
                e.img_light = null,
                e.pfb_reward = null,
                e._parent = null,
                e._battingEndType = u.BATTING_END_TYPE.MAP_END,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.mapEnd.active = !1,
                this.stationEnd.active = !1,
                this.matchEnd.active = !1,
                this.lb_name.node.active = !1,
                console.log("sssssssssssssssssssssssssss")
            },
            e.prototype.start = function() {},
            e.prototype.init = function(t, e, o) {
                this._parent = t,
                this._battingEndType = e,
                this.img_reward.getComponent(cc.Sprite).spriteFrame = null,
                this.img_ticket.active = !1,
                this.img_diamond.active = !1,
                this.mapEnd.active = e == u.BATTING_END_TYPE.MAP_END,
                this.stationEnd.active = e == u.BATTING_END_TYPE.STATION_END,
                this.matchEnd.active = e == u.BATTING_END_TYPE.MATCH_END,
                this.lb_name.node.active = e == u.BATTING_END_TYPE.MAP_END,
                this.img_light.active = e == u.BATTING_END_TYPE.MATCH_END,
                e == u.BATTING_END_TYPE.MATCH_END ? (this.btn_next.active = !1, this.btn_reward.active = !0, this.btn_confirm.getChildByName("lb_desc").getComponent(cc.Label).string = "确定") : (this.btn_reward.active = !1, this.btn_next.active = !0, this.btn_confirm.getChildByName("lb_desc").getComponent(cc.Label).string = "退出"),
                this.lightAcion(),
                cc.isValid(this._parent) && (this.showScore(e), this.showReward(e, o))
            },
            e.prototype.lightAcion = function() {
                cc.tween(this.img_light).by(3, {
                    angle: -360
                }).repeatForever().start()
            },
            e.prototype.showReward = function(t, e) {
                console.error("battingEndType ===" + t);
                var o = this,
                n = "",
                i = e.props,
                r = u.
            default.getInstance().getMapId();
                e.diamond ? (this.img_diamond.active = !0, n += "钻石x" + e.diamond) : e.gold ? n += NaN + e.gold: e.exp ? n += "经验x" + e.exp: e.ticket ? (this.img_ticket.active = !0, n += "奖券x" + e.ticket) : i && i && (n = i[0].prop_name + "x" + i[0].quantity, cc.assetManager.loadRemote(i[0].prop_url,
                function(t, e) {
                    cc.isValid(o.node) && (t ? console.log("加载失败======") : (console.log("加载成功======"), o.img_reward.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)))
                })),
                this.lb_reward_name.string = n,
                t == u.BATTING_END_TYPE.MAP_END ? u.
            default.getInstance().setMapId(r + 1) : t == u.BATTING_END_TYPE.STATION_END && u.
            default.getInstance().setMapId(r + 101)
            },
            e.prototype.showScore = function(t) {
                if (t == u.BATTING_END_TYPE.MAP_END) this.showName();
                else if (t == u.BATTING_END_TYPE.STATION_END) {
                    var e = u.
                default.getInstance().getStationPoleCount();
                    this.lb_score.string = "本站成绩：" + e + "杆"
                } else t == u.BATTING_END_TYPE.MATCH_END && (e = u.
            default.getInstance().getMatchPoleCount(), this.lb_score.string = "本赛成绩：" + e + "杆");
                cc.find("GameMusicNode").getComponent("GameMusic").PlayFinishEffect();
                var o = this._parent.getEvenPar(),
                n = this._parent.getCurrBattingCount(),
                i = n - o;
                1 == n ? cc.find("GameMusicNode").getComponent("GameMusic").PlayResultEffect(7) : i >= 2 ? cc.find("GameMusicNode").getComponent("GameMusic").PlayResultEffect(6) : i <= -5 ? cc.find("GameMusicNode").getComponent("GameMusic").PlayResultEffect(4) : i >= 0 ? cc.find("GameMusicNode").getComponent("GameMusic").PlayResultEffect(5 + i) : cc.find("GameMusicNode").getComponent("GameMusic").PlayResultEffect( - (i + 1))
            },
            e.prototype.showName = function() {
                var t = this._parent.getEvenPar(),
                e = this._parent.getCurrBattingCount();
                console.log("currPole ===" + e),
                console.log("par ===" + t);
                var o = e - t,
                n = s.
            default.RESULT_NAME,
                i = "";
                if (1 == e) i = "一杆进洞";
                else if (o > 2) i = c.
            default.numToChinese(o) + "柏忌";
                else if (o <= -5) i = "四鹰球";
                else for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    o == a.pole_num && (i = a.name)
                }
                this.lb_score.string = "本图成绩：" + o + "杆",
                this.lb_name.string = "评价：" + i
            },
            e.prototype.btnClick = function(t, e) {
                if (e == a.AGAIN) cc.director.loadScene("TiledMapTest"),
                console.log("下一关");
                else if (e == a.CLOSE) this._battingEndType == u.BATTING_END_TYPE.MATCH_END ? l.
            default.getInstance().bGameBack = !1 : l.
            default.getInstance().bGameBack = !0,
                cc.director.loadScene("ActiveScene"),
                console.log("结算关闭");
                else if (e == a.REWARD) {
                    var o = cc.instantiate(this.pfb_reward);
                    o.parent = this.node;
                    var n = l.
                default.getInstance().selectMatch;
                    o.getComponent(h.
                default).initData(n)
                }
            },
            r([f(cc.Node)], e.prototype, "mapEnd", void 0),
            r([f(cc.Node)], e.prototype, "stationEnd", void 0),
            r([f(cc.Node)], e.prototype, "matchEnd", void 0),
            r([f(cc.Node)], e.prototype, "img_reward", void 0),
            r([f(cc.Label)], e.prototype, "lb_reward_name", void 0),
            r([f(cc.Label)], e.prototype, "lb_map_reward", void 0),
            r([f(cc.Label)], e.prototype, "lb_name", void 0),
            r([f(cc.Label)], e.prototype, "lb_score", void 0),
            r([f(cc.Node)], e.prototype, "img_ticket", void 0),
            r([f(cc.Node)], e.prototype, "img_diamond", void 0),
            r([f(cc.Node)], e.prototype, "btn_confirm", void 0),
            r([f(cc.Node)], e.prototype, "btn_next", void 0),
            r([f(cc.Node)], e.prototype, "btn_reward", void 0),
            r([f(cc.Node)], e.prototype, "img_light", void 0),
            r([f(cc.Prefab)], e.prototype, "pfb_reward", void 0),
            r([d], e)
        } (cc.Component);
        o.
    default = _,
        cc._RF.pop()
    },
    {
        "./GameConfig": "GameConfig",
        "./GameUtil": "GameUtil",
        "./GlobalData": "GlobalData",
        "./GolfGameManage": "GolfGameManage",
        "./Layer/MatchRewardView": "MatchRewardView"
    }],
    GameScene: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "30417lGhK5KHrrXSVjF68Sr", "GameScene");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./Ball"),
        s = t("./GameConfig"),
        c = t("./GameOver"),
        l = t("./GameUtil"),
        u = t("./GlobalData"),
        h = t("./GolfGameManage"),
        p = t("./TipManage"),
        d = cc._decorator,
        f = d.ccclass,
        _ = d.property,
        g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ballPrefab = null,
                e.gameOverLayer = null,
                e.polePrefab = null,
                e.pointPrefab = null,
                e.rockerPrefab = null,
                e.rulePrefab = null,
                e.helpSuccessPrefab = null,
                e.lb_evenPar = null,
                e.lb_battingCount = null,
                e.lb_windForce = null,
                e.lb_windDirection = null,
                e.lb_pole = null,
                e.lb_surplusPar = null,
                e.lb_ticket = null,
                e.lb_diamond = null,
                e.lb_force_ratio = null,
                e.lb_distanceFromHole = null,
                e.displayLayer = null,
                e.img_0 = null,
                e.img_wind_angle = null,
                e.batting_tip = null,
                e.img_water = null,
                e.img_cancel = null,
                e.img_cancel_sprite = [],
                e.delay_node = null,
                e.img_map_bg = null,
                e.testMap = null,
                e.graphics = null,
                e.m_rockerNode = null,
                e.m_ball1 = null,
                e.m_ball_circle = null,
                e.m_pole = null,
                e.m_motionStreak = null,
                e.m_arrow = null,
                e.m_rocker_base = null,
                e.m_rocker = null,
                e.m_graphics = null,
                e._tiledLayer = null,
                e._tiledStartObj = null,
                e._tiledEndObj = null,
                e._gameOverLayer = null,
                e._ruleView = null,
                e._helpSuccessView = null,
                e._touchStartPos = cc.v2(0, 0),
                e._touchEndPos = cc.v2(0, 0),
                e._ballStartPos = cc.v2( - 500, -150),
                e._holePos = cc.v2(),
                e._drawEndPos = cc.v2(0, 0),
                e._startAngle = 0,
                e._enterHoleCurrAngle = 0,
                e._enterHoleStartAngle = 0,
                e._enterHoleDis = 0,
                e._speed = s.
            default.initSpeed,
                e._initSpeed = s.
            default.initSpeed,
                e._addSpeedZ = s.
            default.G,
                e._initDistance = 0,
                e._bFly = !1,
                e._bPreFly = !1,
                e._game_state = s.GAME_STATE.FREE,
                e._bDrawRunRotue = !1,
                e._bInitDistance = !1,
                e._bTouchStart = !1,
                e._areaType = s.AREA_TYPE.NULL,
                e._currPole = s.POLE_TYPE.WOOD,
                e._verticalAngle = 30,
                e._parallaxAngle = 30,
                e._horizontalAngle = 90,
                e._forceAngle = 0,
                e._airDrag = s.
            default.airDrag,
                e._addSpeed = 0,
                e._windSpeed = 10,
                e._windAngle = 30,
                e._awaitTime = s.
            default.awaitTime,
                e._timeScale = .1,
                e._current_speedX = 0,
                e._current_speedY = 0,
                e._current_speedZ = 0,
                e._currDrawSpeedX = 0,
                e._currDrawSpeedY = 0,
                e._currDrawSpeedZ = 0,
                e._startSpeedX = 0,
                e._startSpeedY = 0,
                e._currScale = 1,
                e._stepScale = .03,
                e._forceRatio = 1,
                e._batting_count = 0,
                e._evenPar = 0,
                e._hole = 0,
                e._noodPool = null,
                e._pointArr = [],
                e._currDrawPos = cc.v2(),
                e._clickStartPos = cc.v2(),
                e._mapInfo = {},
                e._mapID = 1,
                e._num = 0,
                e._click = 0,
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                this.initData(),
                this.initMap(),
                this.img_cancel.active = !1,
                this.img_water.active = !1,
                this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this),
                GameClient.on(GameClient.EVENT_GAME_WEALTHY_UPDATE, this.updateUserInfo, this),
                GameClient.on(GameClient.EVENT_UPDATE_FREE_POLE, this.refreshSurplusPar, this)
            },
            e.prototype.awaitTimeUpdate = function() {
                this._awaitTime += .1
            },
            e.prototype.registerAwaitTimeUpdate = function() {
                this.schedule(this.awaitTimeUpdate, .1)
            },
            e.prototype.unRegisterAwaitTimeUpdate = function() {
                this.unschedule(this.awaitTimeUpdate)
            },
            e.prototype.initData = function() {
                u.
            default.getInstance().bGameBack = !1,
                h.
            default.getInstance().getBGuide() ? (this._mapID = 1, this._mapInfo = h.
            default.getInstance().getGuideData()):
                (this._mapID = u.
            default.getInstance().mapId, this._mapInfo = h.
            default.getInstance().getMapInfo(this._mapID)),
                console.log("this._mapID ====", this._mapID),
                console.log("this._mapInfo ====", this._mapInfo),
                this._batting_count = this._mapInfo.op_num,
                this._evenPar = this._mapInfo.standard_poles,
                h.
            default.getInstance().setBattingCount(this._batting_count),
                h.
            default.getInstance().setEvenPar(this._evenPar)
            },
            e.prototype.touchStart = function(t) {
                if (! (this._game_state != s.GAME_STATE.PAUSE && this._game_state != s.GAME_STATE.FREE || this._bInitDistance)) {
                    this.img_cancel.active = !0,
                    this.img_cancel.getComponent(cc.Sprite).spriteFrame = this.img_cancel_sprite[0],
                    this.m_rockerNode.active = !0,
                    this._touchStartPos = t.getLocation(),
                    this._touchEndPos = this._touchStartPos,
                    this._bTouchStart = !0;
                    var e = this.m_rockerNode.convertToNodeSpaceAR(this._touchStartPos);
                    this.m_rocker_base.setPosition(e),
                    this.m_rocker.setPosition(e),
                    console.log("touch =========")
                }
            },
            e.prototype.touchEnd = function() {
                if (this.m_rockerNode.active = !1, this.lb_force_ratio.node.active = !1, !(this._game_state != s.GAME_STATE.PAUSE && this._game_state != s.GAME_STATE.FREE || this._bInitDistance) && this._bTouchStart && (this._touchStartPos.x != this._touchEndPos.x || this._touchStartPos.y != this._touchEndPos.y)) {
                    if (this.img_cancel.getBoundingBoxToWorld().contains(this._touchEndPos)) return this.clearPool(),
                    this.img_cancel.active = !1,
                    void(this._bTouchStart = !1);
                    this.img_cancel.active = !1,
                    this._bTouchStart = !1,
                    this.battingClick()
                }
            },
            e.prototype.touchMove = function(t) {
                if (! (this._game_state != s.GAME_STATE.PAUSE && this._game_state != s.GAME_STATE.FREE || this._bInitDistance) && this._bTouchStart) {
                    var e = t.getLocation();
                    if (this._touchEndPos = e, this._touchStartPos.x != this._touchEndPos.x || this._touchStartPos.y != this._touchEndPos.y) {
                        this.img_cancel.getBoundingBoxToWorld().contains(e) ? this.img_cancel.getComponent(cc.Sprite).spriteFrame = this.img_cancel_sprite[1] : this.img_cancel.getComponent(cc.Sprite).spriteFrame = this.img_cancel_sprite[0];
                        var o = this.m_rockerNode.convertToNodeSpaceAR(e);
                        this.m_rocker.setPosition(o.x, o.y),
                        this.setPowerRatio(e, this._touchStartPos),
                        this.lb_force_ratio.node.active = !0,
                        this.lb_force_ratio.string = Math.round(100 * this._forceRatio) + "%";
                        var n = e.x - this._touchStartPos.x,
                        i = e.y - this._touchStartPos.y,
                        r = 0,
                        a = 0;
                        0 == i ? r = n < 0 ? 90 : -90 : (a = n / i, r = 180 * -Math.atan(a) / Math.PI),
                        i < 0 && (r += 180),
                        this.m_arrow.angle = r,
                        this._horizontalAngle = this.m_arrow.angle + 90,
                        this.drawRoute()
                    }
                }
            },
            e.prototype.touchCanCel = function() {
                this.m_rockerNode.active = !1
            },
            e.prototype.initNodePool = function() {
                this._noodPool = new cc.NodePool;
                for (var t = 0; t < 20; t++) {
                    var e = cc.instantiate(this.pointPrefab);
                    this._noodPool.put(e)
                }
            },
            e.prototype.clearPool = function() {
                for (var t = 0; t < this._pointArr.length; t++) this._noodPool.put(this._pointArr[t]);
                this._pointArr.length = 0
            },
            e.prototype.createPoint = function(t) {
                if (this._noodPool.size() > 0)(e = this._noodPool.get()).parent = this.m_graphics.parent,
                e.setPosition(t),
                this._pointArr.push(e);
                else {
                    var e = cc.instantiate(this.pointPrefab);
                    this._noodPool.put(e),
                    e.setPosition(t),
                    this._pointArr.push(e)
                }
            },
            e.prototype.initMap = function() {
                var t = this,
                e = "map/map" + this._mapID;
                l.
            default.showLoading(),
                cc.resources.load(e, cc.TiledMapAsset,
                function(e, o) {
                    if (e) cc.error(e);
                    else {
                        t.testMap.tmxAsset = o;
                        var n = "GolfBg/map" + t._mapID;
                        cc.resources.load(n,
                        function(e, o) {
                            if (l.
                        default.hideLoading(), t.init(), e) return cc.error(e),
                            t.img_map_bg.node.active = !1,
                            void(t.img_water.active = !1);
                            t.img_map_bg.node.active = !0,
                            t.img_water.active = !0,
                            t.img_map_bg.spriteFrame = new cc.SpriteFrame(o)
                        })
                    }
                }),
                h.
            default.getInstance().getGuideUnFinished() && cc.resources.load("Guide", cc.Prefab,
                function(e, o) {
                    if (e) cc.error(e);
                    else {
                        var n = cc.instantiate(o);
                        n.parent = t.node,
                        n.zIndex = s.
                    default.guideZIndex
                    }
                })
            },
            e.prototype.init = function() {
                this.initNodePool(),
                this.img_cancel.active = !1,
                this.lb_force_ratio.node.active = !1,
                this._tiledLayer = this.testMap.getLayer("块层 1");
                var t = this.testMap.getObjectGroup("对象层 1");
                this._tiledStartObj = t.getObject("start"),
                this._tiledEndObj = t.getObject("end"),
                this._ballStartPos = this.tilePosConvertToCurrMap(cc.v2(this._tiledStartObj.x, this._tiledStartObj.y)),
                this._holePos = this.tilePosConvertToCurrMap(cc.v2(this._tiledEndObj.x, this._tiledEndObj.y)),
                this.img_0.parent.zIndex = 1,
                this.img_0.setPosition(this._holePos.x + 6, this._holePos.y + 20),
                this.m_ball1 = cc.instantiate(this.ballPrefab),
                this.m_ball1.parent = this.node,
                this.m_ball1.setPosition(this._ballStartPos),
                this.m_ball1.getComponent(a.
            default).init(this),
                this.m_rockerNode = cc.instantiate(this.rockerPrefab),
                this.m_rockerNode.parent = this.node,
                this.m_rockerNode.active = !1,
                this.m_rocker_base = this.m_rockerNode.getChildByName("img_base"),
                this.m_rocker = this.m_rockerNode.getChildByName("img_rocker"),
                this.m_ball_circle = cc.instantiate(this.ballPrefab),
                this.m_ball_circle.parent = this.node,
                this.m_ball_circle.setPosition(this._ballStartPos),
                this.m_ball_circle.getComponent(a.
            default).init(this, !0),
                this.m_motionStreak = this.m_ball_circle.getChildByName("motion"),
                this.m_pole = cc.instantiate(this.polePrefab),
                this.m_pole.parent = this.node,
                this.m_pole.active = !1,
                this.m_graphics = cc.instantiate(this.graphics.node),
                this.m_graphics.parent = this.node,
                this.graphics.node.zIndex = 1,
                this.m_graphics.zIndex = 1,
                this.m_arrow = this.m_ball1,
                this.m_arrow.setPosition(this._ballStartPos),
                this.displayLayer.zIndex = s.
            default.displayZIndex,
                this.resetAll()
            },
            e.prototype.updateBall = function(t) {
                var e = 60 * this._timeScale,
                o = this._airDrag;
                this._addSpeed > this._airDrag && (o = this._addSpeed);
                var n = this._current_speedX,
                i = this._current_speedY;
                this._bFly && (this._current_speedZ = this._current_speedZ - t * e * this._addSpeedZ, this._current_speedZ = this._current_speedZ - o * t * e * Math.sin(this._verticalAngle * Math.PI / 180));
                var r = o * t * e * Math.cos(this._forceAngle * Math.PI / 180),
                a = o * t * e * Math.sin(this._forceAngle * Math.PI / 180);
                this._current_speedX < 0 && r < 0 || this._current_speedX > 0 && r > 0 ? this._current_speedX = this._current_speedX - o * t * e * Math.cos(this._forceAngle * Math.PI / 180) : this._current_speedX = this._current_speedX + o * t * e * Math.cos(this._forceAngle * Math.PI / 180),
                this._current_speedY < 0 && a < 0 || this._current_speedY > 0 && a > 0 ? this._current_speedY = this._current_speedY - o * t * e * Math.sin(this._forceAngle * Math.PI / 180) : this._current_speedY = this._current_speedY + o * t * e * Math.sin(this._forceAngle * Math.PI / 180),
                n = this._current_speedX,
                i = this._current_speedY,
                this._current_speedZ > 0 ? this._currScale += this._stepScale: (this._currScale -= this._stepScale, this._currScale <= 1 && (this._currScale = 1)),
                this.updateScale();
                var s = this._act_pos.x,
                c = this._act_pos.y,
                l = this._act_pos.z;
                if (s += n * t * e, c += i * t * e, l += this._current_speedZ * t * e, 0 == this._verticalAngle) {
                    if (this._bFly = !1, this.smoothMotionEnd()) return
                } else if (this._bFly) {
                    if (l <= 0 && this._current_speedZ < 0) {
                        if (l = 0, this._act_pos = cc.v3(s, c, l), this._bFly = !1, this._addSpeedZ = 0, this._current_speedZ = 0, this._currScale = 1, this.checkBallInHoleArea()) return;
                        return cc.find("GameMusicNode").getComponent("GameMusic").PlayEndEffect(2),
                        this.drawAngleMoveRotue(),
                        void this.checkPosOutOf(this.m_ball1.getPosition())
                    }
                } else if (this.smoothMotionEnd()) return;
                this._act_pos = cc.v3(s, c, l),
                this.drawAngleMoveRotue()
            },
            e.prototype.smoothMotionEnd = function() {
                if (Math.abs(this._startSpeedY) <= Math.abs(this._startSpeedX)) {
                    if (Math.cos(this._horizontalAngle * Math.PI / 180) >= 0 && this._current_speedX <= 0 || Math.cos(this._horizontalAngle * Math.PI / 180) <= 0 && this._current_speedX >= 0) return this.drawAngleMoveRotue(),
                    this._game_state = s.GAME_STATE.PAUSE,
                    this.checkPosOutOf(this.m_ball1.getPosition()),
                    !0
                } else if (Math.sin(this._horizontalAngle * Math.PI / 180) <= 0 && this._current_speedY >= 0 || Math.sin(this._horizontalAngle * Math.PI / 180) >= 0 && this._current_speedY <= 0) return this.drawAngleMoveRotue(),
                this._game_state = s.GAME_STATE.PAUSE,
                this.checkPosOutOf(this.m_ball1.getPosition()),
                !0;
                return this.checkPosOutOf(this.m_ball1.getPosition())
            },
            e.prototype.updateScale = function() {
                this.m_ball1.scale = this._currScale,
                this.m_ball_circle.scale = this._currScale
            },
            e.prototype.updateEnterHole = function() {
                if (Math.abs(this._enterHoleStartAngle - this._enterHoleCurrAngle) >= s.
            default.enterHoleRotateAngle) {
                    this._game_state = s.GAME_STATE.WAIT_DATA;
                    var t = function(t) {
                        if (!t) return this._game_state = s.GAME_STATE.PAUSE,
                        void this.resetBallData()
                    }.bind(this);
                    if (h.
                default.getInstance().getBGuide()) this.battingEndUpData(h.BATTING_END_TYPE.MAP_END, t);
                    else {
                        var e = h.
                    default.getInstance().getGameOverType(this._mapID);
                        this.battingEndUpData(e, t)
                    }
                    console.log("旋转两圈结束")
                } else this._enterHoleCurrAngle -= 10,
                this._enterHoleDis > 1 && (this._enterHoleDis -= .5),
                this.m_ball1.scale > .5 && (this.m_ball1.scale -= .005, this.m_ball_circle.scale -= .005),
                this.m_ball1.opacity > 150 && (this.m_ball1.opacity -= .5, this.m_ball_circle.opacity -= .5),
                this.refreshEnterHolePos()
            },
            e.prototype.refreshEnterHolePos = function() {
                var t = this._enterHoleCurrAngle * Math.PI / 180,
                e = Math.cos(t) * this._enterHoleDis + this._holePos.x,
                o = Math.sin(t) * this._enterHoleDis + this._holePos.y;
                this.m_ball1.setPosition(e, o),
                this.m_ball_circle.setPosition(e, o)
            },
            e.prototype.update = function() {
                this._game_state != s.GAME_STATE.ENTER_HOLE ? this._game_state == s.GAME_STATE.PLAYING && this.updateBall(.01667) : this.updateEnterHole()
            },
            e.prototype.getDrawEndPos = function() {
                return this._act_pos
            },
            e.prototype.drawRotue = function(t, e) {
                var o = Math.sqrt(Math.pow(t.x - this._ballStartPos.x, 2) + Math.pow(t.y - this._ballStartPos.y, 2));
                if (t.y - this._ballStartPos.y >= 0 ? this.lb_force_ratio.node.setPosition(t.x, t.y + 40) : this.lb_force_ratio.node.setPosition(t.x, t.y - 40), this._bInitDistance) return this._initDistance = o,
                void(this._bInitDistance = !1);
                this.drawPointRotue(t, o, e, 0)
            },
            e.prototype.drawPointRotue = function(t, e, o, n) {
                var i = o * Math.PI / 180,
                r = this._ballStartPos.x,
                a = this._ballStartPos.y;
                if (e <= n + s.
            default.pointSpace) return r = this._ballStartPos.x + e * Math.cos(i),
                a = this._ballStartPos.y + e * Math.sin(i),
                void this.drawPoint(r, a);
                n += s.
            default.pointSpace,
                r = this._ballStartPos.x + n * Math.cos(i),
                a = this._ballStartPos.y + n * Math.sin(i),
                this.drawPoint(r, a),
                this.drawPointRotue(t, e, o, n)
            },
            e.prototype.drawAngleMoveRotue = function() {
                var t = Math.abs(this._horizontalAngle % 360);
                t % 180 == 0 ? t = 0 : t % 90 == 0 ? t = 90 : t > 90 && t < 180 || t > 270 && t < 360 ? t = 90 - t % 90 : t %= 90,
                this._parallaxAngle = t;
                var e = cc.v2(0, 0);
                e.x = this._act_pos.x,
                e.y = this._act_pos.y + this._act_pos.z * Math.cos(this._parallaxAngle * Math.PI / 180),
                this._game_state == s.GAME_STATE.PLAYING && (this.m_ball1.x = e.x, this.m_ball1.y = e.y, this.m_ball_circle.x = e.x, this.m_ball_circle.y = e.y, this.checkPointInArea(this.m_ball1.getPosition()), this.refreshDistance(), this._bDrawRunRotue && this.drawPoint1(e.x, e.y))
            },
            e.prototype.drawRoute = function() {
                this.resetBattingData(),
                this._act_pos = cc.v3(this._ballStartPos),
                this._bPreFly = !0,
                this.refreshGolfClubsPos(),
                this.updateDrawPoint(.01667)
            },
            e.prototype.updateDrawPoint = function(t) {
                void 0 === t && (t = .01667);
                var e = 60 * this._timeScale;
                this._currDrawSpeedX = this._currDrawSpeedX - this._airDrag * t * e * Math.cos(this._horizontalAngle * Math.PI / 180),
                this._currDrawSpeedY = this._currDrawSpeedY - this._airDrag * t * e * Math.sin(this._horizontalAngle * Math.PI / 180),
                this._bPreFly && (this._currDrawSpeedZ = this._currDrawSpeedZ - t * e * this._addSpeedZ, this._currDrawSpeedZ = this._currDrawSpeedZ - this._airDrag * t * e * Math.sin(this._verticalAngle * Math.PI / 180)),
                (Math.cos(this._horizontalAngle * Math.PI / 180) >= 0 && this._currDrawSpeedX <= 0 || Math.cos(this._horizontalAngle * Math.PI / 180) <= 0 && this._currDrawSpeedX >= 0) && (this._currDrawSpeedX = 0),
                (Math.sin(this._horizontalAngle * Math.PI / 180) <= 0 && this._currDrawSpeedY >= 0 || Math.sin(this._horizontalAngle * Math.PI / 180) >= 0 && this._currDrawSpeedY <= 0) && (this._currDrawSpeedY = 0);
                var o = this._act_pos.x,
                n = this._act_pos.y,
                i = this._act_pos.z;
                if (o += this._currDrawSpeedX * t * e, n += this._currDrawSpeedY * t * e, i += this._currDrawSpeedZ * t * e, 0 == this._verticalAngle) {
                    if (this._bPreFly = !1, Math.cos(this._horizontalAngle * Math.PI / 180) >= 0 && this._currDrawSpeedX <= 0 || Math.cos(this._horizontalAngle * Math.PI / 180) <= 0 && this._currDrawSpeedX >= 0) return this.drawAngleMoveRotue(),
                    void this.drawRotue(this.getDrawEndPos(), this._horizontalAngle)
                } else if (this._bPreFly && i <= 0 && this._currDrawSpeedZ < 0) return i = 0,
                this._act_pos = cc.v3(o, n, i),
                this._currDrawSpeedZ = 0,
                this._addSpeedZ = 0,
                this._bPreFly = !1,
                void this.drawRotue(this.getDrawEndPos(), this._horizontalAngle);
                this._act_pos = cc.v3(o, n, i),
                this.updateDrawPoint(.01667)
            },
            e.prototype.resetAll = function() {
                this._awaitTime = s.
            default.awaitTime,
                this._horizontalAngle = 90,
                this._game_state = s.GAME_STATE.FREE,
                this._bFly = !1,
                this._bPreFly = !1,
                this.clearPool(),
                this.graphics.clear(),
                this.m_graphics.getComponent(cc.Graphics).clear(),
                this._areaType = s.AREA_TYPE.NULL,
                this.m_ball1.scale = 1,
                this.m_ball_circle.scale = 1,
                this.m_ball1.active = !0,
                this.m_ball_circle.active = !0,
                this._currScale = 1,
                this._addSpeedZ = s.
            default.G,
                this.m_arrow.angle = this._horizontalAngle - 90,
                this._mapInfo && this._mapInfo.op_num > 0 ? this.resumeGame(this._mapInfo) : (this._currPole = s.POLE_TYPE.WOOD, h.
            default.getInstance().getBGuide() ? this.randomWindForceAndDirection() : this._mapInfo && (this._windSpeed = this._mapInfo.windSpeed, this._windAngle = this._mapInfo.windAngle, this.refreshWindForceAndDirection()), this.resetData()),
                this.updateLayerData()
            },
            e.prototype.updateLayerData = function() {
                this.refreshCurrBattingCount(),
                this.refreshSurplusPar(),
                this.refreshDistance(),
                this.refreshGolfClubsPos(),
                this.updateUserInfo(),
                this.refreshEvenPar()
            },
            e.prototype.resumeGame = function(t) {
                this._batting_count = t.op_num,
                this._windSpeed = t.windSpeed,
                this._windAngle = t.windAngle,
                this._currPole = t.pole_type,
                this._ballStartPos.x = Number(t.drop_pos_x),
                this._ballStartPos.y = Number(t.drop_pos_y),
                this.resetBallData(),
                this.changeSpeedAndAngle(),
                this.updateLayerData(),
                this.refreshWindForceAndDirection()
            },
            e.prototype.resetData = function() {
                this._ballStartPos = this.tilePosConvertToCurrMap(cc.v2(this._tiledStartObj.x, this._tiledStartObj.y)),
                this.m_ball1.setPosition(this._ballStartPos),
                this.m_ball_circle.setPosition(this._ballStartPos),
                this._currDrawPos = this.m_ball1.getPosition(),
                this._act_pos = cc.v3(this._ballStartPos),
                this._addSpeed = 0,
                0 == this._verticalAngle && (this._addSpeed = 0, this._addSpeedZ = 0),
                this.m_arrow.angle = this._horizontalAngle - 90,
                this.changeSpeedAndAngle()
            },
            e.prototype.resetSpeed = function() {
                var t = this._verticalAngle;
                this._addSpeedZ = s.
            default.G,
                this._speed = this._initSpeed * this._forceRatio,
                this._speed = this._speed * this.getWoodPoleServeRatio(),
                this._airDrag = .08 * this._speed,
                this._current_speedX = this._currDrawSpeedX = this._speed * Math.cos(t * Math.PI / 180) * Math.cos(this._horizontalAngle * Math.PI / 180),
                this._current_speedY = this._currDrawSpeedY = this._speed * Math.cos(t * Math.PI / 180) * Math.sin(this._horizontalAngle * Math.PI / 180),
                this._current_speedZ = this._currDrawSpeedZ = this._speed * Math.sin(t * Math.PI / 180),
                this._currPole != s.POLE_TYPE.PUTTERS && (this._current_speedX = this._current_speedX + this._windSpeed * Math.cos(this._windAngle * Math.PI / 180), this._current_speedY = this._current_speedY + this._windSpeed * Math.sin(this._windAngle * Math.PI / 180)),
                this._startSpeedX = this._current_speedX,
                this._startSpeedY = this._current_speedY;
                var e = this._current_speedY / this._current_speedX,
                o = 180 * Math.atan(e) / Math.PI;
                this._current_speedY < 0 && (o += 180),
                this._forceAngle = o
            },
            e.prototype.resetBallData = function() {
                this.clearPool(),
                this._game_state = s.GAME_STATE.PAUSE,
                this._bFly = !1,
                this._bPreFly = !1,
                this.m_ball1.setPosition(this._ballStartPos),
                this.m_ball_circle.setPosition(this._ballStartPos),
                this.graphics.clear(),
                this.m_graphics.getComponent(cc.Graphics).clear(),
                this._act_pos = cc.v3(this._ballStartPos),
                this._currDrawPos = this.m_ball1.getPosition(),
                this._addSpeedZ = s.
            default.G,
                this._areaType = s.AREA_TYPE.NULL,
                this.m_motionStreak.active = !0,
                this.m_ball1.scale = 1,
                this.m_ball_circle.scale = 1,
                this.m_ball1.opacity = 255,
                this.m_ball_circle.opacity = 255,
                this.refreshDistance()
            },
            e.prototype.resetBattingData = function() {
                this.resetBallData(),
                this.resetSpeed()
            },
            e.prototype.drawPoint = function(t, e) {
                this.createPoint(cc.v2(t, e))
            },
            e.prototype.drawPoint1 = function(t, e) {
                this.graphics.moveTo(t, e),
                this.graphics.circle(t, e, 8),
                this.graphics.fill()
            },
            e.prototype.outOf = function() {
                this._game_state = s.GAME_STATE.PAUSE,
                this._bFly = !1,
                this._bPreFly = !1,
                this.node.stopAllActions();
                var t = function(t) {
                    t ? (this._game_state = s.GAME_STATE.PAUSE, console.log("显示挥杆落水 奖励")) : this._game_state = s.GAME_STATE.PAUSE
                }.bind(this);
                cc.tween(this.node).delay(1).call(function() {
                    this.m_motionStreak.active = !1,
                    this.m_ball1.setPosition(this._ballStartPos),
                    this.m_ball_circle.setPosition(this._ballStartPos),
                    this.resetBattingData(),
                    this.battingEndUpData(h.BATTING_END_TYPE.BATTING_END, t)
                }.bind(this)).start()
            },
            e.prototype.checkPosOutOf = function(t) {
                var e = this.getCheckTileGID(t);
                if (0 == e) return console.log("出界======"),
                cc.find("TipManage").getComponent(p.
            default).showTip("出界"),
                this.outOf(),
                !0;
                for (var o = s.
            default.AREA_ID,
                n = 0; n < o.length; n++) if (o[n].id.includes(e)) {
                    if (s.AREA_TYPE.WATER == o[n].type) return cc.find("TipManage").getComponent(p.
                default).showTip("落水"),
                    cc.find("GameMusicNode").getComponent("GameMusic").PlayEndEffect(1),
                    this.outOf(),
                    !0;
                    if (s.AREA_TYPE.OUT_OF == o[n].type && this._game_state == s.GAME_STATE.PAUSE) return cc.find("TipManage").getComponent(p.
                default).showTip("出界"),
                    this.outOf(),
                    !0
                }
                if (this._game_state != s.GAME_STATE.PLAYING) {
                    this._ballStartPos = this.m_ball1.getPosition(),
                    this._currDrawPos = this._ballStartPos.clone();
                    var i = this.getCheckTileGID(this._ballStartPos);
                    for (n = 0; n < o.length; n++) if (o[n].id.includes(i)) {
                        if (s.AREA_TYPE.SAND == o[n].type || s.AREA_TYPE.DEEP_GRASS == o[n].type) {
                            this._currPole = s.POLE_TYPE.IRON,
                            this.changeSpeedAndAngle();
                            break
                        }
                        if (s.AREA_TYPE.SHALLOW_GRASS == o[n].type || s.AREA_TYPE.TREE == o[n].type || s.AREA_TYPE.SERVICR_AREA == o[n].type) {
                            this._currPole = s.POLE_TYPE.WOOD,
                            this.changeSpeedAndAngle();
                            break
                        }
                        if (s.AREA_TYPE.PUTTING_GREEN == o[n].type) {
                            this._currPole = s.POLE_TYPE.PUTTERS,
                            this.changeSpeedAndAngle();
                            break
                        }
                        this._forceRatio = 1,
                        this.resetSpeed(),
                        this._bInitDistance = !0,
                        this._bPreFly = 0 != this._verticalAngle,
                        this.updateDrawPoint()
                    }
                    var r = function(t) {
                        t ? (this._game_state = s.GAME_STATE.PAUSE, console.log("显示挥杆奖励111")) : this._game_state = s.GAME_STATE.PAUSE
                    }.bind(this);
                    this.battingEndUpData(h.BATTING_END_TYPE.BATTING_END, r)
                }
                return ! 1
            },
            e.prototype.checkPointInArea = function(t) {
                if (!this._bPreFly) {
                    var e = this.getCheckTileGID(t),
                    o = s.
                default.AREA_ID;
                    if (this._bFly) {
                        for (var n = 0; n < o.length; n++) if (o[n].type == s.AREA_TYPE.TREE && this._act_pos.z < 50) {
                            if (o[n].id.includes(e)) {
                                if (this._areaType !== o[n].type) {
                                    this._areaType = o[n].type,
                                    this.changeAddSpeed(),
                                    console.log("gid1111 ========= " + e);
                                    break
                                }
                            } else this._areaType = s.AREA_TYPE.NULL;
                            break
                        }
                    } else {
                        if (this._areaType == s.AREA_TYPE.PUTTING_GREEN && this.checkBallInHoleArea()) return;
                        for (n = 0; n < o.length; n++) if (o[n].id.includes(e) && this._areaType != o[n].type) {
                            this._areaType = o[n].type,
                            this.changeAddSpeed();
                            break
                        }
                    }
                    this.m_ball1.active = !(this._areaType == s.AREA_TYPE.TREE && this._act_pos.z < 10)
                }
            },
            e.prototype.setPowerRatio = function(t, e) {
                var o = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)); (o *= 3) >= this._initDistance && (o = this._initDistance),
                0 == this._speed ? this._forceRatio = 1 : this._forceRatio = o / this._initDistance
            },
            e.prototype.getWoodPoleServeRatio = function() {
                var t = s.
            default.AREA_ID,
                e = this.m_ball1.getPosition(),
                o = this.getCheckTileGID(e);
                if (this._currPole == s.POLE_TYPE.WOOD) for (var n = 0; n < t.length; n++) if (t[n].id.includes(o)) return t[n].serve_ratio;
                return 1
            },
            e.prototype.getBallToHoleDistance = function(t) {
                void 0 === t && (t = !1);
                var e = this.m_ball1.getPosition(),
                o = this._holePos,
                n = Math.sqrt(Math.pow(e.x - o.x, 2) + Math.pow(e.y - o.y, 2));
                return t && (n *= .390625),
                n
            },
            e.prototype.getEvenPar = function() {
                return this._evenPar = h.
            default.getInstance().getEvenPar(),
                this._evenPar
            },
            e.prototype.getCurrBattingCount = function() {
                return this._batting_count = h.
            default.getInstance().getBattingCount(),
                this._batting_count
            },
            e.prototype.getPoleType = function() {
                return this._currPole
            },
            e.prototype.getCheckTileGID = function(t) {
                var e = this.node.convertToWorldSpaceAR(t),
                o = this.testMap.node.getContentSize(),
                n = this.testMap.getTileSize();
                e = this.testMap.node.convertToNodeSpaceAR(e);
                var i = Math.floor((o.width / 2 + e.x) / n.width),
                r = Math.floor((o.height - (o.height / 2 + e.y)) / n.height);
                return i > o.width / n.width - 1 || i < 0 || r > o.height / n.height - 1 || r < 0 ? 0 : this._tiledLayer.getTileGIDAt(cc.v2(i, r))
            },
            e.prototype.tilePosConvertToCurrMap = function(t) {
                var e = this.testMap.node.getContentSize(),
                o = -e.width / 2 + t.x,
                n = -e.height / 2 + t.y;
                return cc.v2(o, n)
            },
            e.prototype.checkBallInHoleArea = function() {
                var t = this.getBallToHoleDistance();
                if (t < s.
            default.ballRadius) {
                    this._game_state = s.GAME_STATE.ENTER_HOLE,
                    this.img_0.active = !1,
                    this.m_ball1.opacity = 255,
                    this.m_ball1.scale = 1,
                    this.m_ball_circle.opacity = 255,
                    this.m_ball_circle.scale = 1;
                    var e = this.m_ball1.x - this._holePos.x,
                    o = this.m_ball1.y - this._holePos.y,
                    n = e / o,
                    i = 180 * -Math.atan(n) / Math.PI;
                    return 0 == o && (i = 90),
                    this.m_ball1.y - this._holePos.y < 0 && (i += 180),
                    i += 90,
                    console.log("angle ====" + i),
                    this._enterHoleCurrAngle = i,
                    this._enterHoleStartAngle = i,
                    this._enterHoleDis = t,
                    this.refreshEnterHolePos(),
                    cc.find("GameMusicNode").getComponent("GameMusic").PlayEndEffect(0),
                    !0
                }
                return ! 1
            },
            e.prototype.randomEvenPar = function() {
                var t = h.
            default.getInstance().getPassHole();
                if (! (this._hole < t)) {
                    this._hole = 0;
                    var e = l.
                default.random(3, 10);
                    this._evenPar = e,
                    h.
                default.getInstance().setEvenPar(e),
                    t = l.
                default.random(1, 3),
                    console.error("this._hole ===" + t),
                    h.
                default.getInstance().setPassHole(t),
                    this._batting_count = 0,
                    h.
                default.getInstance().setBattingCount(this._batting_count),
                    this.refreshEvenPar()
                }
            },
            e.prototype.changeAddSpeed = function() {
                var t = this;
                s.
            default.AREA_ID.forEach(function(e) {
                    e.type != t._areaType || (t._addSpeed = e.retarded_speed)
                })
            },
            e.prototype.randomWindForceAndDirection = function() {
                for (var t = l.
            default.random(1, 4), e = 0, o = s.
            default.WIND_POWER; e < o.length; e++) {
                    var n = o[e];
                    if (n.level == t) {
                        this._windSpeed = l.
                    default.random(n.speedMin, n.speedMax);
                        break
                    }
                }
                this._windAngle = l.
            default.random(0, 360),
                this.refreshWindForceAndDirection()
            },
            e.prototype.refreshWindForceAndDirection = function() {
                var t = this._windAngle,
                e = this._windSpeed,
                o = s.
            default.WIND_POWER;
                this.img_wind_angle.angle = t - 90;
                var n = "正北风";
                t > 270 ? (n = "东南风", t = 360 - t) : t > 180 ? (n = "西南风", t -= 180) : t > 90 ? (n = "西北风", t = 180 - t) : t > 0 ? (n = "东北风", t = t) : (t = 270) ? (n = "正南风", t = 0) : (t = 180) ? (n = "正西风", t = 0) : (t = 90) ? (n = "正北风", t = 0) : (t = 0) && (n = "正东风", t = 0);
                for (var i = 0,
                r = o; i < r.length; i++) {
                    var a = r[i];
                    if (a.speedMin <= e && e <= a.speedMax) {
                        this.lb_windForce.string = a.level + "米/秒",
                        0 == e && (this.lb_windForce.string = "无风", this.img_wind_angle.angle = 0);
                        break
                    }
                }
                this.lb_windDirection.string = "风向:" + n + "," + t + "°"
            },
            e.prototype.refreshDistance = function() {
                var t = Math.floor(this.getBallToHoleDistance(!0));
                this.lb_distanceFromHole.string = t + "米"
            },
            e.prototype.updateUserInfo = function() {
                this.lb_ticket.string = "" + u.
            default.getInstance().userInfo.ticket,
                this.lb_diamond.string = "" + u.
            default.getInstance().userInfo.diamond
            },
            e.prototype.refreshSurplusPar = function() {
                this.lb_surplusPar.string = "" + h.
            default.getInstance().getSurplusPar()
            },
            e.prototype.refreshEvenPar = function() {
                this.lb_evenPar.string = this._batting_count + "/" + this._evenPar
            },
            e.prototype.refreshCurrBattingCount = function() {
                this.lb_battingCount.string = "当前杆数：" + this._batting_count,
                this.refreshEvenPar()
            },
            e.prototype.refreshGolfClubsPos = function() {
                var t = s.
            default.poleToBallDistance,
                e = this._horizontalAngle,
                o = -Math.cos(e * Math.PI / 180) * t,
                n = -Math.sin(e * Math.PI / 180) * t;
                o += this.m_ball1.x,
                n += this.m_ball1.y,
                this.m_pole.setPosition(cc.v2(o, n)),
                this.m_pole.angle = e - 90,
                this._game_state != s.GAME_STATE.PAUSE && this._game_state != s.GAME_STATE.FREE || (this.m_pole.active = !0)
            },
            e.prototype.playLbPoleAction = function() {
                this.lb_pole.node.parent.active = !0,
                this.lb_pole.node.parent.opacity = 255,
                this.lb_pole.node.parent.stopAllActions(),
                this.lb_pole.node.parent.setPosition(this.m_ball1.x, this.m_ball1.y - 50),
                cc.tween(this.lb_pole.node.parent).delay(1).to(1.5, {
                    opacity: 0
                }).call(function() {
                    this.lb_pole.node.parent.stopAllActions(),
                    this.lb_pole.node.parent.active = !1
                }.bind(this)).start()
            },
            e.prototype.changeSpeedAndAngle = function() {
                for (var t = s.
            default.POLE_CONFIG,
                e = function(t) {
                    if (t.type == o._currPole) {
                        o._speed = t.emission_speed,
                        o._initSpeed = o._speed,
                        o._forceRatio = 1,
                        o._verticalAngle = t.emission_angle,
                        o.lb_pole.string = t.name,
                        o.playLbPoleAction();
                        var e = o;
                        return cc.resources.load("Pole/img_pole_" + o._currPole,
                        function(t, o) {
                            t ? console.log("球杆加载失败======") : e.m_pole.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o)
                        }),
                        o._bInitDistance = !0,
                        o._bPreFly = 0 !== o._verticalAngle,
                        o._act_pos = o.m_ball1.getPosition(),
                        o.resetSpeed(),
                        o.updateDrawPoint(),
                        {
                            value: void 0
                        }
                    }
                },
                o = this, n = 0, i = t; n < i.length; n++) {
                    var r = e(i[n]);
                    if ("object" == typeof r) return r.value
                }
            },
            e.prototype.btnBack = function() {
                this._bPreFly || this._game_state == s.GAME_STATE.PLAYING || (h.
            default.getInstance().getBGuide() || (u.
            default.getInstance().bGameBack = !0), cc.director.loadScene("ActiveScene"))
            },
            e.prototype.btnChangePole = function() {
                this._bPreFly || this._game_state == s.GAME_STATE.PLAYING || (this._currPole++, this._currPole > s.POLE_TYPE.PUTTERS && (this._currPole = s.POLE_TYPE.WOOD), this.changeSpeedAndAngle(), this.drawRoute())
            },
            e.prototype.btnRuleClick = function() {
                this.showRuleView()
            },
            e.prototype.battingClick = function() {
                if (! (this._game_state != s.GAME_STATE.PAUSE && this._game_state != s.GAME_STATE.FREE || this._awaitTime < s.
            default.awaitTime)) {
                    this._currPole == s.POLE_TYPE.WOOD || this._currPole == s.POLE_TYPE.IRON ? cc.find("GameMusicNode").getComponent("GameMusic").PlayStartEffect(0) : cc.find("GameMusicNode").getComponent("GameMusic").PlayStartEffect(1),
                    this.unRegisterAwaitTimeUpdate(),
                    this.registerAwaitTimeUpdate(),
                    this._awaitTime = 0,
                    this._click++,
                    this.lb_pole.node.parent.active = !1,
                    this._game_state = s.GAME_STATE.WAIT_DATA;
                    var t = function(t) {
                        t ? (this.resetBattingData(), this._game_state = s.GAME_STATE.PLAYING, 0 !== this._verticalAngle && (this._bFly = !this._bFly), this._addSpeed = 0, this._addSpeedZ = s.
                    default.G, this._act_pos = cc.v3(this._ballStartPos), this._areaType = s.AREA_TYPE.NULL, this.m_graphics.getComponent(cc.Graphics).clear(), this.m_pole.active = !1) : this._game_state = s.GAME_STATE.PAUSE
                    }.bind(this);
                    h.
                default.getInstance().getBGuide() ? t(!0) : h.
                default.getInstance().ask_golf_to_play({
                        map_id:
                        this._mapID
                    },
                    t)
                }
            },
            e.prototype.showRuleView = function() {
                var t = cc.instantiate(this.rulePrefab);
                t.parent = this.node,
                t.zIndex = s.
            default.gameOverZIndex
            },
            e.prototype.showHelpSuccessView = function() {
                var t = cc.instantiate(this.helpSuccessPrefab);
                t.parent = this.node,
                t.zIndex = s.
            default.gameOverZIndex
            },
            e.prototype.showGameOverLayer = function(t, e) {
                this._game_state = s.GAME_STATE.GAME_END,
                this.m_motionStreak.active = !1,
                this._gameOverLayer || (this._gameOverLayer = cc.instantiate(this.gameOverLayer), this._gameOverLayer.parent = this.node, this._gameOverLayer.zIndex = s.
            default.gameOverZIndex),
                this._gameOverLayer.getComponent(c.
            default).init(this, t, e)
            },
            e.prototype.showReward = function(t, e) {
                if (t == h.BATTING_END_TYPE.BATTING_END) {
                    var o = cc.v2(),
                    n = null,
                    i = null;
                    e.diamond ? n = (i = this.lb_diamond.node.parent).getChildByName("img_diamond") : e.ticket && (n = (i = this.lb_ticket.node.parent).getChildByName("img_ticket")),
                    i && n && (o = i.convertToWorldSpaceAR(n.getPosition()), l.
                default.showDiamondOrTicketTip(e, o, this.node))
                } else this.showGameOverLayer(t, e)
            },
            e.prototype.hideGameOverLayer = function() {
                this._gameOverLayer.destroy(),
                this._gameOverLayer = null
            },
            e.prototype.battingEndUpData = function(t, e) {
                if (h.
            default.getInstance().getBGuide()) this.updateGuideData(t, e);
                else {
                    var o = {
                        map_id: this._mapID,
                        match_id: h.
                    default.getInstance().getSelectMatchID(),
                        op_lvl: t,
                        drop_pos_x: "" + this.m_ball1.x,
                        drop_pos_y: "" + this.m_ball1.y,
                        windSpeed: this._windSpeed,
                        windAngle: this._windAngle,
                        pole_type: this._currPole
                    },
                    n = this;
                    h.
                default.getInstance().open_golf_lottery_reward(o,
                    function(t, o) {
                        if (t) {
                            n._mapInfo = o.map_data,
                            n._batting_count = n._mapInfo.op_num,
                            n._evenPar = n._mapInfo.standard_poles,
                            h.
                        default.getInstance().setBattingCount(n._batting_count),
                            h.
                        default.getInstance().setEvenPar(n._evenPar);
                            var i = o.reward_bonus;
                            "number" == typeof i.play_free_times && (u.
                        default.getInstance().playFreeTimes = i.play_free_times, GameClient.emit(GameClient.EVENT_UPDATE_FREE_POLE)),
                            n.updateLayerData(),
                            console.log("op_lvl ========" + i.op_lvl),
                            n.showReward(i.op_lvl, i.bonus)
                        }
                        e(t, o)
                    })
                }
            },
            e.prototype.updateGuideData = function(t, e) {
                this._batting_count++,
                h.
            default.getInstance().setBattingCount(this._batting_count);
                var o = this._mapInfo;
                o.map_id = this._mapID,
                o.op_num = this._batting_count,
                o.drop_pos_x = "" + this.m_ball1.x,
                o.drop_pos_y = "" + this.m_ball1.y,
                o.windSpeed = this._windSpeed,
                o.windAngle = this._windAngle,
                o.pole_type = this._currPole,
                t == h.BATTING_END_TYPE.BATTING_END ? o.state = 0 : (o.op_num = 0, o.state = 1);
                var n = this;
                h.
            default.getInstance().update_golf_beginner_course({
                    course_map:
                    o
                },
                function(o, i) {
                    if (o && t == h.BATTING_END_TYPE.MAP_END) {
                        var r = {
                            desc: "是否继续教学练习？",
                            left: {
                                name: "继续",
                                callback: function() {
                                    u.
                                default.getInstance().guide_state = 0,
                                    cc.director.loadScene("TiledMapTest")
                                }
                            },
                            right: {
                                name: "取消",
                                callback: function() {
                                    cc.director.loadScene("ActiveScene")
                                }
                            }
                        };
                        h.
                    default.getInstance().getGuideUnFinished() ? (i.help_status && n.showHelpSuccessView(), h.
                    default.getInstance().setGuideFinish()):
                        l.
                    default.showBoxTip(r)
                    }
                    e(o)
                }),
                this.updateLayerData()
            },
            r([_(cc.Prefab)], e.prototype, "ballPrefab", void 0),
            r([_(cc.Prefab)], e.prototype, "gameOverLayer", void 0),
            r([_(cc.Prefab)], e.prototype, "polePrefab", void 0),
            r([_(cc.Prefab)], e.prototype, "pointPrefab", void 0),
            r([_(cc.Prefab)], e.prototype, "rockerPrefab", void 0),
            r([_(cc.Prefab)], e.prototype, "rulePrefab", void 0),
            r([_(cc.Prefab)], e.prototype, "helpSuccessPrefab", void 0),
            r([_(cc.Label)], e.prototype, "lb_evenPar", void 0),
            r([_(cc.Label)], e.prototype, "lb_battingCount", void 0),
            r([_(cc.Label)], e.prototype, "lb_windForce", void 0),
            r([_(cc.Label)], e.prototype, "lb_windDirection", void 0),
            r([_(cc.Label)], e.prototype, "lb_pole", void 0),
            r([_(cc.Label)], e.prototype, "lb_surplusPar", void 0),
            r([_(cc.Label)], e.prototype, "lb_ticket", void 0),
            r([_(cc.Label)], e.prototype, "lb_diamond", void 0),
            r([_(cc.Label)], e.prototype, "lb_force_ratio", void 0),
            r([_(cc.Label)], e.prototype, "lb_distanceFromHole", void 0),
            r([_(cc.Node)], e.prototype, "displayLayer", void 0),
            r([_(cc.Node)], e.prototype, "img_0", void 0),
            r([_(cc.Node)], e.prototype, "img_wind_angle", void 0),
            r([_(cc.Node)], e.prototype, "batting_tip", void 0),
            r([_(cc.Node)], e.prototype, "img_water", void 0),
            r([_(cc.Node)], e.prototype, "img_cancel", void 0),
            r([_(cc.SpriteFrame)], e.prototype, "img_cancel_sprite", void 0),
            r([_(cc.Node)], e.prototype, "delay_node", void 0),
            r([_(cc.Sprite)], e.prototype, "img_map_bg", void 0),
            r([_(cc.TiledMap)], e.prototype, "testMap", void 0),
            r([_(cc.Graphics)], e.prototype, "graphics", void 0),
            r([f], e)
        } (cc.Component);
        o.
    default = g,
        cc._RF.pop()
    },
    {
        "./Ball": "Ball",
        "./GameConfig": "GameConfig",
        "./GameOver": "GameOver",
        "./GameUtil": "GameUtil",
        "./GlobalData": "GlobalData",
        "./GolfGameManage": "GolfGameManage",
        "./TipManage": "TipManage"
    }],
    GameUtil: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "87959Zw+BBNv7o/RfXrdf3t", "GameUtil"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.random = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            },
            t.getUrlHavePicturSuffix = function(t) {
                var e = t.substring(t.lastIndexOf(".") + 1);
                return ["png", "jpg", "jpeg", "webp"].indexOf(e.toLowerCase()) > -1
            },
            t.getTime = function(t) {
                var e = {},
                o = new Date(t);
                return e.year = o.getFullYear(),
                e.month = o.getMonth() < 9 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1,
                e.day = o.getDate() < 10 ? "0" + o.getDate() : o.getDate(),
                e.hour = o.getHours() < 10 ? "0" + o.getHours() : o.getHours(),
                e.min = o.getMinutes() < 10 ? "0" + o.getMinutes() : o.getMinutes(),
                e
            },
            t.numToChinese = function(t) {
                var e = "",
                o = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
                n = ["", "十", "百", "千"],
                i = ["", "万", "亿", "兆"];
                if ("number" != typeof t || isNaN(t)) return "";
                var r = parseInt(t.toString());
                if (0 == Number(r)) return "";
                if (10 <= Number(r) && Number(r) < 20) {
                    var a = Math.floor(Number(r) / 10);
                    e += n[a];
                    var s = Number(r) % 10;
                    return e += 0 == s ? "": o[s]
                }
                var c = r.toString().split("");
                console.log("numArr=", c);
                var l = 0;
                return c.forEach(function(t, r) {
                    var a = c.length - r - 1,
                    s = a / 4,
                    u = a % 4;
                    0 == Number(t) ? l++:(l > 0 && (e += o[0]), l = 0, 2 == c.length && 10 < Number(t) && Number(t) < 20 ? e += n[u] : e += o[t] + n[u]),
                    0 == u && (e += i[s])
                }),
                e
            },
            t.showTip = function(t) {
                cc.find("TipManage").getComponent("TipManage").showTip(t)
            },
            t.showBoxTip = function(t, e) {
                cc.find("TipManage").getComponent("TipManage").showBoxTip(t, e)
            },
            t.showLoading = function() {
                cc.find("Loading").active = !0
            },
            t.hideLoading = function() {
                cc.find("Loading").active = !1
            },
            t.showGuideReward = function(t) {
                var e = cc.director.getScene().getChildByName("GuideReward");
                e && e.destroy(),
                cc.resources.load("GuideReward",
                function(o, n) {
                    o ? console.log("加载失败=====") : ((e = cc.instantiate(n)).name = "GuideReward", e.parent = cc.director.getScene(), e.getComponent("GuideReward").init(t))
                })
            },
            t.showShareTip = function() {
                var t = cc.director.getScene().getChildByName("ShareTip");
                t || cc.resources.load("ShareTip",
                function(e, o) {
                    if (e) console.log("加载失败=====");
                    else { (t = cc.instantiate(o)).name = "ShareTip",
                        t.parent = cc.director.getScene(),
                        t.setPosition(cc.winSize.width / 2, cc.winSize.height / 2),
                        t.getChildByName("img_share_tip").setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
                        var n = t.getChildByName("mask");
                        n.on(cc.Node.EventType.TOUCH_START,
                        function() {
                            t.destroy()
                        },
                        n)
                    }
                })
            },
            t.showDiamondOrTicketTip = function(t, e, o) {
                var n = cc.director.getScene().getChildByName("RewardTip");
                n || cc.resources.load("RewardTip",
                function(i, r) {
                    i ? console.log("加载失败=====") : ((n = cc.instantiate(r)).name = "RewardTip", n.parent = o, n.getComponent("DiamondOrTicketTip").initView(t, e, o))
                })
            },
            t
        } ();
        o.
    default = n,
        cc._RF.pop()
    },
    {}],
    GlobalData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "292beuxhmxPOargc+/UCYFT", "GlobalData");
        var n = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.HELP_STATE = o.REWARD_TYPE = o.MATCH_TYPE = void 0;
        var i, r, a = t("./GameManager/ErrorCode"),
        s = t("./GameUtil"),
        c = cc._decorator,
        l = c.ccclass;
        c.property,
        function(t) {
            t[t.PUSSY_CAT = 0] = "PUSSY_CAT",
            t[t.QIQI = 1] = "QIQI",
            t[t.ROCKET_TURTLE = 2] = "ROCKET_TURTLE"
        } (i = o.MATCH_TYPE || (o.MATCH_TYPE = {})),
        function(t) {
            t[t.PROP = 0] = "PROP",
            t[t.DIAMOND = 1] = "DIAMOND",
            t[t.GOLD = 2] = "GOLD",
            t[t.EXP = 3] = "EXP",
            t[t.TICKET = 4] = "TICKET"
        } (o.REWARD_TYPE || (o.REWARD_TYPE = {})),
        function(t) {
            t[t.OLD_USER = 0] = "OLD_USER",
            t[t.NEW_USER = 1] = "NEW_USER",
            t[t.HELP_SUCCESS = 2] = "HELP_SUCCESS"
        } (r = o.HELP_STATE || (o.HELP_STATE = {}));
        var u = function() {
            function t() {
                this.taskInfo = {},
                this.userInfo = {
                    diamond: 0,
                    ticket: 0
                },
                this.accountInfo = {},
                this.bBinding = !1,
                this.selectMatch = i.PUSSY_CAT,
                this.courseData = {},
                this.guide_state = 1,
                this.playFreeTimes = 0,
                this.playCost = 0,
                this.mapId = 0,
                this.todayPlayLimit = 0,
                this.todayPlayTimes = 0,
                this.gameConfig = [],
                this.matchList = [],
                this.mapList = [],
                this.mapFinishList = [],
                this.matchPass = [0, 0, 0],
                this.match_score = [],
                this.rankRewardConfig = [],
                this.rankData = [[], [], []],
                this.matchRewardData = [[], [], []],
                this.bGameBack = !1,
                this.helpStatus = r.OLD_USER,
                this.bMaskedPrint = !1
            }
            var e;
            return e = t,
            t.getInstance = function() {
                return this.instance || (this.instance = new e),
                this.instance
            },
            t.prototype.init = function() {
                GameClient.on(GameClient.EVENT_LOGIN, this.logonBack, this),
                GameClient.on("get_user_info", this.get_user_info, this),
                GameClient.on("get_golf_lottery_data", this.setMatchData, this),
                GameClient.on("user_info_change", this.user_info_change, this),
                GameClient.on("on_golf_next_map_unlock", this.on_golf_next_map_unlock, this),
                GameClient.on("on_golf_beginner_course_reward", this.on_golf_beginner_course_reward, this),
                GameClient.on("on_golf_lottery_data_change", this.on_golf_lottery_data_change, this),
                GameClient.on("golf_three_rank_begin", this.golf_three_rank_begin, this),
                GameClient.on("golf_three_rank", this.golf_three_rank, this),
                GameClient.on("golf_three_rank_end", this.golf_three_rank_end, this),
                GameClient.on("golf_two_rank_begin", this.golf_two_rank_begin, this),
                GameClient.on("golf_two_rank", this.golf_two_rank, this),
                GameClient.on("golf_two_rank_end", this.golf_two_rank_end, this),
                GameClient.on("golf_one_rank_begin", this.golf_one_rank_begin, this),
                GameClient.on("golf_one_rank", this.golf_one_rank, this),
                GameClient.on("golf_one_rank_end", this.golf_one_rank_end, this)
            },
            t.prototype.logonBack = function(t) {
                "login_outerid" == t.name && this.login_outerid(t.args)
            },
            t.prototype.login_outerid = function(t) {
                console.log("login_outerid---", t),
                0 == t.error_code && (this.accountInfo = t.account_info, this.setBinding(t.has_bind || !1), this.get_golf_one_rank_conf(), this.get_golf_two_rank_conf(), this.get_golf_three_rank_conf(), GameClient.emit(GameClient.EVENT_GAME_UPDATE_ID))
            },
            t.prototype.get_user_info = function(t) {
                console.log("get_user_info---", t),
                0 == t.error_code && (this.userInfo = t, GameClient.emit(GameClient.EVENT_GAME_WEALTHY_UPDATE))
            },
            t.prototype.setBinding = function(t) {
                this.bBinding = t
            },
            t.prototype.setMatchData = function(t) {
                if (console.log("get_golf_lottery_data ==", t), 0 == t.error_code) {
                    this.taskInfo = t.task_data,
                    this.playFreeTimes = t.play_free_times,
                    this.playCost = t.play_cost,
                    this.courseData = t.course_data,
                    this.guide_state = t.course_data.course_status,
                    this.helpStatus = t.course_data.help_status || 0,
                    this.matchPass[0] = t.match_pass_1,
                    this.matchPass[1] = t.match_pass_2,
                    this.matchPass[2] = t.match_pass_3,
                    this.match_score[0] = t.best_achievement_1,
                    this.match_score[1] = t.best_achievement_2,
                    this.match_score[2] = t.best_achievement_3,
                    this.todayPlayLimit = t.today_play_limit,
                    this.todayPlayTimes = t.today_play_times,
                    this.courseData.course_map.standard_poles = 5;
                    for (var e = t.game_conf || [], o = t.maps_data || [], n = {},
                    i = 0; i < e.length; i++) {
                        var r = {};
                        r.standard_poles = e[i].standard_poles,
                        r.map_id = e[i].map_id,
                        this.mapList.push(r),
                        n.hasOwnProperty(e[i].match_id) ? n[e[i].match_id].station.hasOwnProperty(e[i].station_id) ? n[e[i].match_id].station[e[i].station_id].stationList.push(r) : (n[e[i].match_id].station[e[i].station_id] = {},
                        n[e[i].match_id].station[e[i].station_id].station_id = e[i].station_id, n[e[i].match_id].station[e[i].station_id].stationList = [], n[e[i].match_id].station[e[i].station_id].stationList.push(r)) : (n[e[i].match_id] = {},
                        n[e[i].match_id].match_id = e[i].match_id, n[e[i].match_id].station = {},
                        n[e[i].match_id].station[e[i].station_id] = {},
                        n[e[i].match_id].station[e[i].station_id].station_id = e[i].station_id, n[e[i].match_id].station[e[i].station_id].stationList = [], n[e[i].match_id].station[e[i].station_id].stationList.push(r))
                    }
                    var c = [];
                    for (var l in n) {
                        var u = n[l],
                        h = c.length;
                        c[h] = {},
                        c[h].match_id = u.match_id,
                        c[h].stationList = [];
                        var p = u.station;
                        for (var d in p) {
                            var f = c[h].stationList.length;
                            c[h].stationList[f] = {},
                            c[h].stationList[f].station_id = p[d].station_id,
                            c[h].stationList[f].mapList = p[d].stationList
                        }
                    }
                    for (i = 0; i < this.mapList.length; i++) for (var _ = 0; _ < o.length; _++) if (this.mapList[i].map_id == o[_].map_id) {
                        o[_].standard_poles = this.mapList[i].standard_poles;
                        break
                    }
                    this.mapFinishList = o,
                    console.log("mapFinishList ==", o),
                    this.matchList = c,
                    console.log("matchInfo ==", c),
                    GameClient.emit(GameClient.EVENT_UPDATE_FREE_POLE),
                    GameClient.emit(GameClient.EVENT_GET_GOLF_LOTTERY_DATA)
                } else {
                    var g = {
                        desc: a.
                    default.ErrorCodeDesc[t.error_code],
                        left: {
                            name: "确定",
                            callback: function() {
                                cc.sys.browserType == cc.sys.BROWSER_TYPE_WECHAT ? wx.closeWindow() : cc.game.end()
                            }
                        }
                    };
                    s.
                default.showBoxTip(g, "reconnect")
                }
                s.
            default.hideLoading()
            },
            t.prototype.on_golf_next_map_unlock = function(t) {
                console.log("on_golf_next_map_unlock ==", t);
                for (var e = this.mapFinishList,
                o = 0; o < e.length; o++) if (e[o].map_id == t.change_map.map_id) return void(e[o] = t.change_map);
                e.push(t.change_map)
            },
            t.prototype.on_golf_beginner_course_reward = function(t) {
                console.log("on_golf_beginner_course_reward ==", t),
                s.
            default.showGuideReward(t)
            },
            t.prototype.on_golf_lottery_data_change = function(t) {
                console.log("on_golf_lottery_data_change ==", t),
                this.playFreeTimes = t.play_free_times,
                this.taskInfo = t.task_data,
                GameClient.emit(GameClient.EVENT_UPDATE_TASK_INFO),
                GameClient.emit(GameClient.EVENT_UPDATE_FREE_POLE)
            },
            t.prototype.user_info_change = function(t) {
                if (console.log("user_info_change ==", t), t.kvs) for (var e in t.kvs) switch (t.kvs[e].key) {
                case 1:
                    this.userInfo.diamond = Number(t.kvs[e].val);
                    break;
                case 2:
                    this.userInfo.gold = Number(t.kvs[e].val);
                    break;
                case 3:
                    this.userInfo.level = Number(t.kvs[e].val);
                    break;
                case 4:
                    this.userInfo.exp = Number(t.kvs[e].val);
                    break;
                case 5:
                    this.userInfo.total_game_times = Number(t.kvs[e].val);
                    break;
                case 6:
                    this.userInfo.success_game_times = Number(t.kvs[e].val);
                    break;
                case 7:
                    this.userInfo.ticket = Number(t.kvs[e].val);
                    break;
                case 8:
                    this.userInfo.vip_level = Number(t.kvs[e].val);
                    break;
                case 9:
                    this.userInfo.vip_exp = Number(t.kvs[e].val);
                    break;
                case 10:
                    this.userInfo.identify_info = Number(t.kvs[e].val);
                    break;
                case 11:
                    this.userInfo.baibai_free_times = Number(t.kvs[e].val);
                    break;
                case 12:
                    this.userInfo.nickname = t.kvs[e].val;
                    break;
                case 13:
                    this.userInfo.queue_num = Number(t.kvs[e].val);
                    break;
                case 14:
                    this.userInfo.activity_point = Number(t.kvs[e].val);
                    break;
                case 15:
                    this.userInfo.exchange_bind_phone = Number(t.kvs[e].val);
                    break;
                case 16:
                    this.userInfo.ex_multi_sms_verify = Number(t.kvs[e].val)
                }
                GameClient.emit(GameClient.EVENT_GAME_WEALTHY_UPDATE)
            },
            t.prototype.setRankRewardConfig = function(t, e) {
                var o = {};
                o.begin_time = e.begin_time,
                o.end_time = e.end_time,
                o.bonus_conf = e.bonus_conf,
                o.matchSelect = t,
                this.rankRewardConfig[t] = o
            },
            t.prototype.get_golf_one_rank_conf = function() {
                console.log("get_golf_one_rank_conf =====");
                var t = this;
                GameClient.sendRequest("get_golf_one_rank_conf", {},
                function(e) {
                    console.log("get_golf_one_rank_conf11 =====", e),
                    0 == e.error_code && t.setRankRewardConfig(i.PUSSY_CAT, e)
                })
            },
            t.prototype.get_golf_two_rank_conf = function() {
                console.log("get_golf_two_rank_conf =====");
                var t = this;
                GameClient.sendRequest("get_golf_two_rank_conf", {},
                function(e) {
                    console.log("get_golf_two_rank_conf222 =====", e),
                    0 == e.error_code && t.setRankRewardConfig(i.QIQI, e)
                })
            },
            t.prototype.get_golf_three_rank_conf = function() {
                console.log("get_golf_three_rank_conf =====");
                var t = this;
                GameClient.sendRequest("get_golf_three_rank_conf", {},
                function(e) {
                    console.log("get_golf_three_rank_conf333 =====", e),
                    0 == e.error_code && t.setRankRewardConfig(i.ROCKET_TURTLE, e)
                })
            },
            t.prototype.golf_three_rank_begin = function() {
                this.rankData[i.ROCKET_TURTLE].length = 0,
                console.log("golf_three_rank_begin ====")
            },
            t.prototype.golf_three_rank = function(t) {
                this.rankData[i.ROCKET_TURTLE] = this.rankData[i.ROCKET_TURTLE].concat(t.data),
                console.log("golf_three_rank ====", t)
            },
            t.prototype.golf_three_rank_end = function() {
                console.log("golf_three_rank_end ===="),
                GameClient.emit(GameClient.EVENT_UPDATE_RANK_INFO)
            },
            t.prototype.golf_two_rank_begin = function() {
                this.rankData[i.QIQI].length = 0,
                console.log("golf_two_rank_begin ====")
            },
            t.prototype.golf_two_rank = function(t) {
                this.rankData[i.QIQI] = this.rankData[i.QIQI].concat(t.data),
                console.log("golf_two_rank ====", t)
            },
            t.prototype.golf_two_rank_end = function() {
                console.log("golf_two_rank_end ===="),
                GameClient.emit(GameClient.EVENT_UPDATE_RANK_INFO)
            },
            t.prototype.golf_one_rank_begin = function() {
                this.rankData[i.PUSSY_CAT].length = 0,
                console.log("golf_one_rank_begin ====")
            },
            t.prototype.golf_one_rank = function(t) {
                this.rankData[i.PUSSY_CAT] = this.rankData[i.PUSSY_CAT].concat(t.data),
                console.log("golf_one_rank ====", this.rankData[i.PUSSY_CAT]),
                console.log("golf_one_rank ====", t)
            },
            t.prototype.golf_one_rank_end = function() {
                console.log("golf_one_rank_end ====", this.rankData[i.PUSSY_CAT].length),
                console.log("golf_one_rank_end ===="),
                GameClient.emit(GameClient.EVENT_UPDATE_RANK_INFO)
            },
            t.instance = null,
            e = n([l], t)
        } ();
        o.
    default = u,
        cc._RF.pop()
    },
    {
        "./GameManager/ErrorCode": "ErrorCode",
        "./GameUtil": "GameUtil"
    }],
    GolfGameManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "39761Qr3KVAKLtA94VXoL9b", "GolfGameManage");
        var n = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.BATTING_END_TYPE = o.MAP_STATUS = void 0;
        var i, r, a = t("./GameManager/ErrorCode"),
        s = t("./GameUtil"),
        c = t("./GlobalData"),
        l = cc._decorator,
        u = l.ccclass;
        l.property,
        function(t) {
            t[t.UNFINISHED = 0] = "UNFINISHED",
            t[t.FINISHED = 1] = "FINISHED",
            t[t.LOCK = 2] = "LOCK"
        } (i = o.MAP_STATUS || (o.MAP_STATUS = {})),
        function(t) {
            t[t.BATTING_END = 1] = "BATTING_END",
            t[t.MAP_END = 2] = "MAP_END",
            t[t.STATION_END = 3] = "STATION_END",
            t[t.MATCH_END = 4] = "MATCH_END"
        } (r = o.BATTING_END_TYPE || (o.BATTING_END_TYPE = {}));
        var h = function() {
            function t() {
                this.battingCount = 0,
                this.evenPar = 0,
                this.passHole = 0,
                this.bPass = !0,
                this.battingCount = 0,
                this.evenPar = 0,
                this.bPass = !0,
                this.passHole = 0
            }
            var e;
            return e = t,
            t.getInstance = function() {
                return this.instance || (this.instance = new e),
                this.instance
            },
            t.prototype.setMatchRewardData = function(t, e) {
                "number" != typeof e && (e = c.
            default.getInstance().selectMatch),
                c.
            default.getInstance().matchRewardData[e] = t
            },
            t.prototype.getMatchRewardData = function(t) {
                return "number" != typeof t && (t = c.
            default.getInstance().selectMatch),
                c.
            default.getInstance().matchRewardData[t]
            },
            t.prototype.getRankRewardConfig = function() {
                return c.
            default.getInstance().rankRewardConfig
            },
            t.prototype.getRankData = function() {
                return c.
            default.getInstance().rankData
            },
            t.prototype.getGuideData = function() {
                return c.
            default.getInstance().courseData.course_map
            },
            t.prototype.getGuideUnFinished = function() {
                return 0 == c.
            default.getInstance().courseData.course_status
            },
            t.prototype.setGuideFinish = function() {
                return c.
            default.getInstance().courseData.course_status = 1
            },
            t.prototype.getBGuide = function() {
                return 0 == c.
            default.getInstance().guide_state
            },
            t.prototype.setBattingCount = function(t) {
                this.battingCount = t
            },
            t.prototype.getBattingCount = function() {
                return this.battingCount
            },
            t.prototype.setEvenPar = function(t) {
                this.evenPar = t
            },
            t.prototype.getEvenPar = function() {
                return this.evenPar
            },
            t.prototype.setBPass = function(t) {
                this.bPass = t
            },
            t.prototype.getBPass = function() {
                return this.bPass
            },
            t.prototype.setPassHole = function(t) {
                this.passHole = t
            },
            t.prototype.getPassHole = function() {
                return this.passHole
            },
            t.prototype.setSurplusPar = function(t) {
                t <= 0 && (t = 0),
                c.
            default.getInstance().playFreeTimes = t
            },
            t.prototype.getSurplusPar = function() {
                return c.
            default.getInstance().playFreeTimes
            },
            t.prototype.setMapId = function(t) {
                c.
            default.getInstance().mapId = t
            },
            t.prototype.getMapId = function() {
                return c.
            default.getInstance().mapId
            },
            t.prototype.getMapInfo = function(t) {
                for (var e = c.
            default.getInstance().mapFinishList, o = 0; o < e.length; o++) if (t == e[o].map_id) return e[o];
                return null
            },
            t.prototype.setMapData = function(t) {
                for (var e = c.
            default.getInstance().mapFinishList, o = 0; o < e.length; o++) if (e[o].map_id == t.map_id) return void(e[o] = t);
                e.push(t)
            },
            t.prototype.setMatchPass = function(t) {
                t.match_pass_1 && (c.
            default.getInstance().matchPass[0] = t.match_pass_1),
                t.match_pass_2 && (c.
            default.getInstance().matchPass[1] = t.match_pass_2),
                t.match_pass_3 && (c.
            default.getInstance().matchPass[2] = t.match_pass_3),
                t.best_achievement_1 && (c.
            default.getInstance().match_score[0] = t.match_pass_3),
                t.best_achievement_2 && (c.
            default.getInstance().match_score[1] = t.match_pass_3),
                t.best_achievement_3 && (c.
            default.getInstance().match_score[2] = t.match_pass_3)
            },
            t.prototype.getMatchPass = function(t) {
                return c.
            default.getInstance().matchPass.length - 1 < t ? 0 : c.
            default.getInstance().matchPass[t]
            },
            t.prototype.getMatchScore = function(t) {
                if (! (c.
            default.getInstance().match_score.length - 1 < t)) return c.
            default.getInstance().match_score[t]
            },
            t.prototype.getSelectMatchID = function(t) {
                "number" != typeof t && (t = c.
            default.getInstance().selectMatch);
                for (var e = c.
            default.getInstance().matchList, o = 0; o < e.length; o++) if (t == o) return e[o].match_id;
                return null
            },
            t.prototype.getMatchPoleCount = function(t, e) {
                void 0 === t && (t = !1);
                for (var o = this.getSelectMatchID(e), n = c.
            default.getInstance().matchList, r = [], a = 0; a < n.length; a++) if (o == n[a].match_id) {
                    r = n[a].stationList;
                    break
                }
                var s = 0,
                l = 0;
                for (a = 0; a < r.length; a++) for (var u = r[a].mapList, h = 0; h < u.length; h++) {
                    var p = this.getMapInfo(u[h].map_id);
                    t ? p && p.state == i.FINISHED && (l += u[h].standard_poles, s += p.op_num) : p && p.state >= i.FINISHED && (l += u[h].standard_poles, s += p.op_num)
                }
                return s - l
            },
            t.prototype.getStationPoleCount = function(t) {
                t = t || c.
            default.getInstance().mapId;
                for (var e = Math.floor(t / 1e4) - 1, o = Math.floor(t % 1e4 / 100) - 1, n = this.getMatchStationList(e)[o].mapList, r = 0, a = 0, s = 0; s < n.length; s++) {
                    var l = this.getMapInfo(n[s].map_id);
                    l && l.state >= i.FINISHED && (a += n[s].standard_poles, r += l.op_num)
                }
                return r - a
            },
            t.prototype.getMatchStation = function(t) {
                for (var e = this.getSelectMatchID(t), o = c.
            default.getInstance().matchList, n = 0; n < o.length; n++) if (e == o[n].match_id) return o[n].stationList.length;
                return 0
            },
            t.prototype.getMatchStationList = function(t) {
                for (var e = this.getSelectMatchID(t), o = c.
            default.getInstance().matchList, n = 0; n < o.length; n++) if (e == o[n].match_id) return o[n].stationList;
                return null
            },
            t.prototype.getMatchFinished = function(t) {
                for (var e = this.getSelectMatchID(t), o = c.
            default.getInstance().matchList, n = [], r = 0; r < o.length; r++) if (e == o[r].match_id) {
                    n = o[r].stationList;
                    break
                }
                var a = 0,
                s = 0;
                for (r = 0; r < n.length; r++) {
                    var l = n[r].mapList;
                    a += l.length;
                    for (var u = 0; u < l.length; u++) {
                        var h = this.getMapInfo(l[r].map_id);
                        h && h.state >= i.FINISHED && s++
                    }
                }
                return s >= a
            },
            t.prototype.getGameOverType = function(t) {
                var e = Math.floor(t / 1e4) - 1,
                o = t + 1,
                n = Math.floor(t % 1e4 / 100) - 1,
                i = this.getMatchStation(e),
                a = this.getMatchStationList(e),
                s = a[i - 1].mapList,
                c = a[n].mapList;
                return o > s[s.length - 1].map_id ? r.MATCH_END: o > c[c.length - 1].map_id ? r.STATION_END: r.MAP_END
            },
            t.prototype.golf_lottery_open_records = function(t, e) {
                GameClient.sendRequest("golf_lottery_open_records", t,
                function(t) {
                    console.log("golf_lottery_open_records ====", t),
                    t.error_code == a.ERROR_CODE.ok ? e(t) : s.
                default.showTip(a.
                default.ErrorCodeDesc[t.error_code])
                })
            },
            t.prototype.ask_golf_to_play = function(t, e) {
                var o = this;
                console.log("ask_golf_to_play11 ====", t),
                GameClient.sendRequest("ask_golf_to_play", t,
                function(t) {
                    console.log("ask_golf_to_play ====", t),
                    t.error_code == a.ERROR_CODE.ok ? (o.setMapData(t.map_data), e(!0, t)) : (e(!1), t.error_code == a.ERROR_CODE.not_enough_money ? s.
                default.showBoxTip({
                        desc:
                        "哎呀，奖券数不足啦。
去做点任务得免费杆数吧~",
                        left: {
                            name: "知道啦",
                            callback: null
                        }
                    }) : s.
                default.showTip(a.
                default.ErrorCodeDesc[t.error_code]))
                })
            },
            t.prototype.open_golf_lottery_reward = function(t, e) {
                var o = this;
                console.log("open_golf_lottery_reward111 ====", t),
                GameClient.sendRequest("open_golf_lottery_reward", t,
                function(t) {
                    console.log("open_golf_lottery_reward ====", t),
                    t.error_code == a.ERROR_CODE.ok ? (o.setMapData(t.map_data), o.setMatchPass(t), c.
                default.getInstance().todayPlayTimes = t.today_play_limit || 0, c.
                default.getInstance().todayPlayTimes = t.today_play_times || 0, t.reward_bonus.op_lvl == r.MATCH_END && GameClient.sendData("get_golf_lottery_data"), e(!0, t)) : (e(!1, t), s.
                default.showTip(a.
                default.ErrorCodeDesc[t.error_code]))
                })
            },
            t.prototype.update_golf_beginner_course = function(t, e) {
                console.log("update_golf_beginner_course ====", t),
                GameClient.sendRequest("update_golf_beginner_course", t,
                function(o) {
                    console.log("update_golf_beginner_course ====", o),
                    o.error_code == a.ERROR_CODE.ok ? e(!0, t) : (e(!1), s.
                default.showTip(a.
                default.ErrorCodeDesc[o.error_code]))
                })
            },
            t.prototype.sendShareData = function() {
                GameClient.sendRequest("act_share", {
                    type: 1,
                    act_id: 23
                },
                function(t) {
                    console.log("share ====", t),
                    t.error_code == a.ERROR_CODE.ok || s.
                default.showTip(a.
                default.ErrorCodeDesc[t.error_code])
                })
            },
            t.prototype.golf_lottery_match_reward_list = function(t, o) {
                var n = this,
                i = e.getInstance().getSelectMatchID(t);
                console.log("matchId ===" + i),
                0 != this.getMatchRewardData(t).length ? o() : GameClient.sendRequest("golf_lottery_match_reward_list", {
                    match_id: i
                },
                function(e) {
                    console.log("golf_lottery_match_reward_list ====", e),
                    e.error_code == a.ERROR_CODE.ok ? (0 == n.getMatchRewardData(t).length && n.setMatchRewardData(e.reward_bonus, t), o()) : s.
                default.showTip(a.
                default.ErrorCodeDesc[e.error_code])
                })
            },
            t.prototype.get_golf_rank_user_best_achievements = function(t, e) {
                GameClient.sendRequest("get_golf_rank_user_best_achievements", {
                    open_id: t
                },
                function(t) {
                    t.error_code == a.ERROR_CODE.ok ? e(t) : s.
                default.showTip(a.
                default.ErrorCodeDesc[t.error_code])
                })
            },
            t.instance = null,
            t.surplusPar = 10,
            t.freeTimes = 3,
            t.bGuide = !1,
            e = n([u], t)
        } ();
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "./GameManager/ErrorCode": "ErrorCode",
        "./GameUtil": "GameUtil",
        "./GlobalData": "GlobalData"
    }],
    GuideReward: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e36220ZRyJBGZ1+jaAbgu3e", "GuideReward");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.img_reward = null,
                e.lb_reward_name = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {},
            e.prototype.start = function() {},
            e.prototype.init = function(t) {
                var e = t.reward_bonus || {},
                o = this,
                n = e.props;
                n && (o.lb_reward_name.string = n[0].prop_name + "x" + n[0].quantity, cc.assetManager.loadRemote(n[0].prop_url,
                function(t, e) {
                    t ? console.log("加载失败======") : (console.log("加载成功======"), o.img_reward.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e))
                }))
            },
            e.prototype.btnClick = function() {
                "ActiveScene" == cc.director.getScene().name ? this.node.destroy() : cc.director.loadScene("ActiveScene")
            },
            r([c(cc.Node)], e.prototype, "img_reward", void 0),
            r([c(cc.Label)], e.prototype, "lb_reward_name", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    GuideView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3a81bJwnfhOGo/bJtIvVEZH", "GuideView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GlobalData"),
        s = cc._decorator,
        c = s.ccclass,
        l = s.property,
        u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_desc = null,
                e.btn_left = null,
                e.btn_right = null,
                e.img_title_reward = null,
                e.img_title_help = null,
                e.webView = null,
                e._guideIndex = 0,
                e._descList = ["完成挑战即可
助力成功！！！", "长按屏幕拖动，
决定方向和力度", "松手挥杆击球", "球进入球洞
即完成本地图"],
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                this.webView.node.active = !0,
                this.updateView()
            },
            e.prototype.btnClick = function(t, e) {
                "left" == e ? this._guideIndex--:"right" == e && this._guideIndex++,
                this._guideIndex < 0 && (this._guideIndex = 0),
                this._guideIndex > this._descList.length - 1 && (this._guideIndex = this._descList.length - 1),
                this.updateView()
            },
            e.prototype.updateView = function() {
                this.img_title_help.active = !1,
                this.img_title_reward.active = !1,
                a.
            default.getInstance().helpStatus == a.HELP_STATE.NEW_USER ? this.img_title_help.active = !0 : this.img_title_reward.active = !0
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([l(cc.Label)], e.prototype, "lb_desc", void 0),
            r([l(cc.Node)], e.prototype, "btn_left", void 0),
            r([l(cc.Node)], e.prototype, "btn_right", void 0),
            r([l(cc.Node)], e.prototype, "img_title_reward", void 0),
            r([l(cc.Node)], e.prototype, "img_title_help", void 0),
            r([l(cc.WebView)], e.prototype, "webView", void 0),
            r([c], e)
        } (cc.Component);
        o.
    default = u,
        cc._RF.pop()
    },
    {
        "../GlobalData": "GlobalData"
    }],
    HelpSuccessView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7f4ecShsLRI+5BSrFW1wtow", "HelpSuccessView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = (a.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.btnClick = function() {
                location.href = "http://app.7gyou.com"
            },
            e.prototype.btnClose = function() {},
            r([s], e)
        } (cc.Component));
        o.
    default = c,
        cc._RF.pop()
    },
    {}],
    InviteRewardItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "05d3aYvBBhP57QjcTSxU/uL", "InviteRewardItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("../GameUtil"),
        c = cc._decorator,
        l = c.ccclass,
        u = c.property; (function(t) {
            t[t.SHARE = 1] = "SHARE",
            t[t.INVITE = 2] = "INVITE",
            t[t.PRIZE_CLAW = 3] = "PRIZE_CLAW",
            t[t.RECHARGE = 4] = "RECHARGE",
            t[t.SPEND_DIAMOND = 5] = "SPEND_DIAMOND"
        })(a || (a = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_name = null,
                e.lb_time = null,
                e.img_bg = null,
                e.img_head = null,
                e._index = 0,
                e._itemData = {},
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initItem = function(t, e) {
                var o = this;
                this._itemData = t || {},
                this._index = e,
                this.node.color = (new cc.Color).fromHEX("#ffffff"),
                e % 2 == 0 && (this.img_bg.color = (new cc.Color).fromHEX("#eaf5ff"));
                var n, i = t.pic_url;
                n = s.
            default.getUrlHavePicturSuffix(i) ? {}: {
                    ext: ".png"
                },
                t.pic_url && cc.assetManager.loadRemote(t.pic_url, n,
                function(t, e) {
                    t ? console.log("头像加载失败======") : (console.log("头像加载成功======"), o.img_head.spriteFrame = new cc.SpriteFrame(e))
                }),
                this.lb_name.string = "" + (t.nickname || ""),
                t.help_time = 1e3 * t.help_time;
                var r = s.
            default.getTime(t.help_time);
                this.lb_time.string = r.year + "." + r.month + "." + r.day + " " + r.hour + ":" + r.min,
                console.log("date===", r)
            },
            e.prototype.updateItem = function() {},
            r([u(cc.Label)], e.prototype, "lb_name", void 0),
            r([u(cc.Label)], e.prototype, "lb_time", void 0),
            r([u(cc.Node)], e.prototype, "img_bg", void 0),
            r([u(cc.Sprite)], e.prototype, "img_head", void 0),
            r([l], e)
        } (cc.Component);
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "../GameUtil": "GameUtil"
    }],
    InviteRewardView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3f2fddW1xVIlo7zf+ZDiOdZ", "InviteRewardView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GameManager/ErrorCode"),
        s = t("../GameUtil"),
        c = t("../Item/InviteRewardItem"),
        l = cc._decorator,
        u = l.ccclass,
        h = l.property,
        p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.layout_content = null,
                e.pfb_inviteItem = null,
                e._inviteData = [],
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                this.getInviteRewardData()
            },
            e.prototype.getInviteRewardData = function() {
                var t = this;
                GameClient.sendRequest("golf_lottery_friend_help_records", {},
                function(e) {
                    console.log("golf_lottery_friend_help_records ====", e),
                    e.error_code == a.ERROR_CODE.ok ? (t._inviteData = e.data || [], t.initView()) : s.
                default.showTip(a.
                default.ErrorCodeDesc[e.error_code])
                })
            },
            e.prototype.initView = function() {
                for (var t = this._inviteData,
                e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.pfb_inviteItem);
                    o.parent = this.layout_content,
                    o.getComponent(c.
                default).initItem(t[e], e)
                }
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([h(cc.Node)], e.prototype, "layout_content", void 0),
            r([h(cc.Prefab)], e.prototype, "pfb_inviteItem", void 0),
            r([u], e)
        } (cc.Component);
        o.
    default = p,
        cc._RF.pop()
    },
    {
        "../GameManager/ErrorCode": "ErrorCode",
        "../GameUtil": "GameUtil",
        "../Item/InviteRewardItem": "InviteRewardItem"
    }],
    LabelAction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "43277sVieNMM56UuY83aLka", "LabelAction");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = (a.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.start = function() {
                this.node.getComponent(cc.Label)._forceUpdateRenderData();
                var t = this.node.parent;
                if (this.node.stopAllActions(), this.node.x = 0, this.node.width > t.width) {
                    var e = (this.node.width - t.width + 10) / 2,
                    o = .02 * e,
                    n = this.node.width - t.width + 10,
                    i = .02 * n,
                    r = cc.tween().by(o, {
                        x: e
                    }).delay(1),
                    a = cc.tween().by(i, {
                        x: -n
                    }).delay(1).by(i, {
                        x: n
                    }).delay(1).union().repeatForever();
                    cc.tween(this.node).sequence(r, a).start()
                }
            },
            r([s], e)
        } (cc.Component));
        o.
    default = c,
        cc._RF.pop()
    },
    {}],
    LevelView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "006e4SSIURELqPqMle59krS", "LevelView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GlobalData"),
        s = t("../GolfGameManage"),
        c = t("../Item/StationItem"),
        l = cc._decorator,
        u = l.ccclass,
        h = l.property,
        p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.layout_content = null,
                e.lb_currPole = null,
                e.lb_ticket = null,
                e.lb_diamond = null,
                e.lb_cost = null,
                e.lb_surplus_pole = null,
                e.pfb_stationItem = null,
                e.img_title = null,
                e._levelData = [],
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                GameClient.on(GameClient.EVENT_UPDATE_FREE_POLE, this.updateFreePole, this),
                GameClient.on(GameClient.EVENT_GAME_WEALTHY_UPDATE, this.updateUserInfo, this)
            },
            e.prototype.initView = function(t) {
                this._levelData = t;
                for (var e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.pfb_stationItem);
                    o.parent = this.layout_content,
                    o.getComponent(c.
                default).initItem(t[e], e)
                }
                this.lb_currPole.string = s.
            default.getInstance().getMatchPoleCount(!0) + "杆",
                this.lb_surplus_pole.string = "" + s.
            default.getInstance().getSurplusPar(),
                this.lb_cost.string = a.
            default.getInstance().playCost + "券/杆",
                this.updateUserInfo();
                var n = "Level/img_match_" + a.
            default.getInstance().selectMatch,
                i = this;
                cc.resources.load(n,
                function(t, e) {
                    t ? console.log("加载失败=====") : i.img_title.spriteFrame = new cc.SpriteFrame(e)
                })
            },
            e.prototype.updateFreePole = function() {
                this.lb_surplus_pole.string = "" + s.
            default.getInstance().getSurplusPar()
            },
            e.prototype.updateUserInfo = function() {
                this.lb_ticket.string = "" + a.
            default.getInstance().userInfo.ticket,
                this.lb_diamond.string = "" + a.
            default.getInstance().userInfo.diamond
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([h(cc.Node)], e.prototype, "layout_content", void 0),
            r([h(cc.Label)], e.prototype, "lb_currPole", void 0),
            r([h(cc.Label)], e.prototype, "lb_ticket", void 0),
            r([h(cc.Label)], e.prototype, "lb_diamond", void 0),
            r([h(cc.Label)], e.prototype, "lb_cost", void 0),
            r([h(cc.Label)], e.prototype, "lb_surplus_pole", void 0),
            r([h(cc.Prefab)], e.prototype, "pfb_stationItem", void 0),
            r([h(cc.Sprite)], e.prototype, "img_title", void 0),
            r([u], e)
        } (cc.Component);
        o.
    default = p,
        cc._RF.pop()
    },
    {
        "../GlobalData": "GlobalData",
        "../GolfGameManage": "GolfGameManage",
        "../Item/StationItem": "StationItem"
    }],
    LoadingAction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c62c8x8wKBAv7uo0bqwjOtn", "LoadingAction");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = (a.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._node = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                cc.game.addPersistRootNode(this.node)
            },
            e.prototype.start = function() {},
            e.prototype.onEnable = function() {
                this._node = this.node.getChildByName("img_loading"),
                this._node.stopAllActions(),
                this._node.parent.setPosition(cc.winSize.width / 2, cc.winSize.height / 2),
                this._node.angle = 0,
                cc.tween(this._node).by(2, {
                    angle: -360
                }).repeatForever().start()
            },
            r([s], e)
        } (cc.Component));
        o.
    default = c,
        cc._RF.pop()
    },
    {}],
    LoginInfo: [function(t, e) {
        "use strict";
        cc._RF.push(e, "c9454ZLiZ1PQppM4frhRGEr", "LoginInfo"),
        cc._RF.pop()
    },
    {}],
    LogonManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "650a8qHuepMfZ3eI67K5hRz", "LogonManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = t("../distConfig"),
        i = t("../GameManager/ShareManager"),
        r = t("../GameUtil"),
        a = function() {
            function t() {
                this.m_svrt0 = 0,
                this.m_localt0 = 0,
                this.wechat_code = null,
                this.loginAuth = null
            }
            return Object.defineProperty(t.prototype, "serverTime", {
                get: function() {
                    return this.m_svrt0 + Math.floor((new Date).getTime() / 1e3) - this.m_localt0
                },
                enumerable: !1,
                configurable: !0
            }),
            t.getInstance = function() {
                return null == this.singleton && (this.singleton = new t),
                this.singleton
            },
            t.prototype.setEnv = function() {
                this.getParam("env"),
                n.distConfig.logonAddr = "wss://zww-ws-slb.njmqhs.cn",
                n.distConfig.wx = !0;
                var t = this.getUrl() + "?env=prd";
                n.distConfig.url = t
            },
            t.prototype.init = function() {
                GameClient.on(GameClient.EVENT_CONNECTED, this.logon, this),
                GameClient.on(GameClient.EVENT_LOGIN, this.logonBack, this),
                GameClient.on(GameClient.EVENT_DISCONNECTED, this.onDisconnected, this),
                GameClient.on("kick_user", this.kick_user, this)
            },
            t.prototype.login = function() {
                var t = getAgentInfo(),
                e = {
                    account_plat: "test"
                };
                e.phone_plat = "ios" == t.platform ? 0 : 1,
                e.outerid = "robot_1018",
                e.token = "wawasleeping$",
                e.app_ver = "1.2.0.30",
                e.res_ver = "1.2.0.30",
                e.phone_info = "{}",
                e.reg_info = "",
                e.is_turn_on_camera = !0,
                e.channel_id = Number(n.distConfig.channel),
                e.is_ignore_ver_chk = !0,
                e.idfa = "",
                e.client_type = 2,
                this.loginAuth = e,
                n.distConfig.wx ? this.wxLogon() : this.doRobotLogin()
            },
            t.prototype.doWxLogin = function() {
                var t = this.loginAuth;
                t.account_plat = "wc",
                t.app_ver = "1.0.0.1",
                t.res_ver = "1.0.0.1",
                t.outerid = localStorage.getItem("zww_outerid"),
                t.token = localStorage.getItem("zww_token"),
                console.log("a ====", t),
                GameClient.sendData("login_outerid", t)
            },
            t.prototype.doRobotLogin = function() {
                var t = this.loginAuth;
                t.app_ver = "1.0.0.1",
                t.res_ver = "1.0.0.1",
                console.log("RobotLogin ======="),
                GameClient.sendData("login_outerid", t)
            },
            t.prototype.getWXtoken = function() {
                var t = this;
                console.log("getWXtoken ============"),
                GameClient.sendRequest("get_tx_login_token", {
                    type: 2,
                    state: "1",
                    code: this.wechat_code || null
                },
                function(e) {
                    this.wechat_code = null,
                    0 == e.error_code ? (localStorage.setItem("zww_outerid", e.tx_openid), localStorage.setItem("zww_token", e.access_token), t.doWxLogin()) : (r.
                default.showTip("微信登录失败请稍后重试"), t.logOut())
                })
            },
            t.prototype.logon = function() { - 1 != location.href.indexOf("#") && (location.href = location.href.split("#")[0]),
                this.getChannelID(),
                this.login()
            },
            t.prototype.getChannelID = function() {
                var t = this.getParam("channel");
                t && (n.distConfig.channel = t)
            },
            t.prototype.wxLogon = function() {
                this.checkWxAuthorization() ? this.wxAuthorization() : localStorage.getItem("zww_token") && localStorage.getItem("zww_outerid") ? this.doWxLogin() : this.wechat_code && this.getWXtoken()
            },
            t.prototype.getParam = function(t) {
                return function() {
                    var t = location.href,
                    e = new Object;
                    if ( - 1 != t.indexOf("?")) for (var o = t.substr(t.indexOf("?") + 1).split("&"), n = 0; n < o.length; n++) e[o[n].split("=")[0]] = decodeURI(o[n].split("=")[1]);
                    return e
                } ()[t]
            },
            t.prototype.getUrl = function() {
                var t;
                return - 1 != (t = location.href).indexOf("?") && (t = t.substr(0, t.indexOf("?"))),
                t
            },
            t.prototype.checkWxAuthorization = function() {
                var t = !1,
                e = this.getParam("code");
                e && (this.wechat_code = e, t = !1);
                var o = window.localStorage.getItem("zww_token"),
                n = window.localStorage.getItem("zww_outerid");
                return o && n || this.wechat_code || (t = !0),
                t
            },
            t.prototype.wxAuthorization = function() { (new Date).getTime();
                var t = n.distConfig.url + "&channel=" + n.distConfig.channel,
                e = this.getParam("inviteID");
                e && (t = t + "&inviteID=" + e);
                var o = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx21833143e80f8422&redirect_uri=" + encodeURIComponent(t) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
                window.location.href = o
            },
            t.prototype.logonBack = function(t) {
                "login_outerid" == t.name && this.login_outerid(t.args)
            },
            t.prototype.login_outerid = function(t) {
                console.log("aaaaaaaaaaaa---", t),
                0 == t.error_code ? (this.m_svrt0 = t.now, this.m_localt0 = Math.floor((new Date).getTime() / 1e3), this.onLoginSucceeded()) : (this.logOut(), this.login())
            },
            t.prototype.onLoginSucceeded = function() {
                var t = this.getParam("inviteID");
                t ? GameClient.sendRequest("bind_by_invite_code", {
                    invite_code: t
                },
                function() {
                    GameClient.sendData("get_golf_lottery_data")
                }) : GameClient.sendData("get_golf_lottery_data"),
                GameClient.sendData("get_user_info"),
                is_wechat() ? n.distConfig.wx && i.
            default.instance.getTicket():
                i.
            default.instance.initShare()
            },
            t.prototype.logOut = function() {
                localStorage.removeItem("zww_outerid"),
                localStorage.removeItem("zww_token")
            },
            t.prototype.kick_user = function(t) {
                console.log("data ======", t);
                var e = {
                    desc: t.msg,
                    left: {
                        name: "关闭",
                        callback: function() {
                            cc.sys.browserType == cc.sys.BROWSER_TYPE_WECHAT ? wx.closeWindow() : cc.game.end()
                        }
                    },
                    right: {
                        name: "刷新",
                        callback: function() {
                            console.log("刷新页面========"),
                            cc.game.restart()
                        }
                    }
                };
                r.
            default.showBoxTip(e, "reconnect")
            },
            t.prototype.onDisconnected = function() {
                GameClient.disconnect();
                var t = {
                    desc: "服务器连接失败,
请确保网络顺通",
                    left: {
                        name: "取消",
                        callback: function() {}
                    },
                    right: {
                        name: "重连",
                        callback: function() {
                            console.log("重连========"),
                            GameClient.connect()
                        }
                    }
                };
                r.
            default.showBoxTip(t, "reconnect")
            },
            t
        } ();
        o.
    default = a,
        cc._RF.pop()
    },
    {
        "../GameManager/ShareManager": "ShareManager",
        "../GameUtil": "GameUtil",
        "../distConfig": "distConfig"
    }],
    MapItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dc62cxsMXlFsoSfbZsOt0OF", "MapItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GlobalData"),
        s = t("../GolfGameManage"),
        c = cc._decorator,
        l = c.ccclass,
        u = c.property,
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_index = null,
                e.lb_score = null,
                e.img_lock = null,
                e.btn_start = null,
                e._index = 0,
                e._mapId = 0,
                e._itemData = {},
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initItem = function(t, e) {
                this._itemData = t || {},
                this._index = e,
                this.lb_index.string = "" + (e + 1),
                this._mapId = t.map_id;
                var o = s.
            default.getInstance().getMapInfo(t.map_id);
                o ? (this.lb_score.string = o.op_num - t.standard_poles + "杆", this.lb_score.node.active = !0, this.img_lock.active = o.state == s.MAP_STATUS.LOCK, this.btn_start.active = o.state == s.MAP_STATUS.UNFINISHED) : (this.img_lock.active = !0, this.btn_start.active = !1, this.lb_score.node.active = !1)
            },
            e.prototype.enterRoom = function() {
                a.
            default.getInstance().guide_state = 1,
                a.
            default.getInstance().mapId = this._mapId,
                cc.director.loadScene("TiledMapTest")
            },
            e.prototype.updateItem = function() {},
            r([u(cc.Label)], e.prototype, "lb_index", void 0),
            r([u(cc.Label)], e.prototype, "lb_score", void 0),
            r([u(cc.Node)], e.prototype, "img_lock", void 0),
            r([u(cc.Node)], e.prototype, "btn_start", void 0),
            r([l], e)
        } (cc.Component);
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "../GlobalData": "GlobalData",
        "../GolfGameManage": "GolfGameManage"
    }],
    MatchRewardItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4dc71xOsE5BFoTlwxeXtWEq", "MatchRewardItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_name = null,
                e.img_icon = null,
                e._index = 0,
                e._itemData = {},
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initItem = function(t, e) {
                this._itemData = t || {},
                this._index = e;
                var o = t.props,
                n = this;
                o && (this.lb_name.string = o[0].prop_name + "x" + o[0].quantity, console.log("比赛奖励资源地址 =====" + o[0].prop_url), cc.assetManager.loadRemote(o[0].prop_url,
                function(t, e) {
                    t ? console.log("加载失败======") : (console.log("加载成功======"), n.img_icon.spriteFrame = new cc.SpriteFrame(e))
                }))
            },
            e.prototype.updateItem = function() {},
            r([c(cc.Label)], e.prototype, "lb_name", void 0),
            r([c(cc.Sprite)], e.prototype, "img_icon", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    MatchRewardView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cb81cy4pQhJarSthtPjI/0X", "MatchRewardView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GameManager/ErrorCode"),
        s = t("../GameUtil"),
        c = t("../GolfGameManage"),
        l = t("../Item/MatchRewardItem"),
        u = cc._decorator,
        h = u.ccclass,
        p = u.property,
        d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.layout_content = null,
                e.pfb_matchRewardItem = null,
                e.node_toggle = null,
                e._matchRewardData = [[], [], []],
                e._checkIndex = 0,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initData = function(t) {
                this._checkIndex = t;
                for (var e = this.node_toggle.childrenCount,
                o = 0; o < e; o++) this._checkIndex == o && (this.node_toggle.getChildByName("toggle" + (o + 1)).getComponent(cc.Toggle).isChecked = !0);
                this.getMatchRewardData(t)
            },
            e.prototype.getMatchRewardData = function(t) {
                var e = this,
                o = c.
            default.getInstance().getSelectMatchID(t);
                console.log("matchId ===" + o),
                0 != e._matchRewardData[t].length ? e.updateRank() : GameClient.sendRequest("golf_lottery_match_reward_list", {
                    match_id: o
                },
                function(t) {
                    console.log("golf_lottery_match_reward_list ====", t),
                    t.error_code == a.ERROR_CODE.ok ? (0 == e._matchRewardData[e._checkIndex].length && (e._matchRewardData[e._checkIndex] = t.reward_bonus), e.updateRank()) : s.
                default.showTip(a.
                default.ErrorCodeDesc[t.error_code])
                })
            },
            e.prototype.initView = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.pfb_matchRewardItem);
                    o.parent = this.layout_content,
                    o.getComponent(l.
                default).initItem(t[e], e)
                }
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            e.prototype.updateRank = function() {
                var t = this._matchRewardData[this._checkIndex] || [];
                this.layout_content.removeAllChildren();
                for (var e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.pfb_matchRewardItem);
                    o.parent = this.layout_content,
                    o.getComponent(l.
                default).initItem(t[e], e)
                }
            },
            e.prototype.toggleClick = function() {
                for (var t = this.node_toggle.childrenCount,
                e = 0; e < t; e++) this.node_toggle.getChildByName("toggle" + (e + 1)).getComponent(cc.Toggle).isChecked && (this._checkIndex = e, this.getMatchRewardData(this._checkIndex));
                console.log("click-------------")
            },
            r([p(cc.Node)], e.prototype, "layout_content", void 0),
            r([p(cc.Prefab)], e.prototype, "pfb_matchRewardItem", void 0),
            r([p(cc.Node)], e.prototype, "node_toggle", void 0),
            r([h], e)
        } (cc.Component);
        o.
    default = d,
        cc._RF.pop()
    },
    {
        "../GameManager/ErrorCode": "ErrorCode",
        "../GameUtil": "GameUtil",
        "../GolfGameManage": "GolfGameManage",
        "../Item/MatchRewardItem": "MatchRewardItem"
    }],
    NativeShare: [function(t, e, o) {
        "use strict";
        var n, i;
        cc._RF.push(e, "3383764Q2xJNL81WXaMQWIm", "NativeShare"),
        n = "undefined" != typeof self ? self: void 0,
        i = function() {
            return function(t) {
                function e(n) {
                    if (o[n]) return o[n].exports;
                    var i = o[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(i.exports, i, i.exports, e),
                    i.l = !0,
                    i.exports
                }
                var o = {};
                return e.m = t,
                e.c = o,
                e.d = function(t, o, n) {
                    e.o(t, o) || Object.defineProperty(t, o, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                },
                e.n = function(t) {
                    var o = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return e.d(o, "a", o),
                    o
                },
                e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                },
                e.p = "",
                e(e.s = 0)
            } ([function(t, e, o) {
                function n() {}
                function i(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                    o = document.getElementsByTagName("script")[0],
                    i = document.createElement("script");
                    i.src = t,
                    i.async = !0,
                    o.parentNode.insertBefore(i, o),
                    i.onload = e
                }
                function r(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var o = Object(t), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (null != i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i[r])
                    }
                    return o
                }
                function a(t) {
                    if (rt) location.href = t;
                    else {
                        var e = document.createElement("iframe");
                        e.style.display = "none",
                        e.src = t,
                        document.body.appendChild(e),
                        setTimeout(function() {
                            e && e.parentNode && e.parentNode.removeChild(e)
                        },
                        2e3)
                    }
                }
                function s(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = [];
                    for (var n in t) e ? o.push(n + "=" + encodeURIComponent(t[n])) : o.push(n + "=" + t[n]);
                    return o.join("&")
                }
                function c(t) {
                    var e = document.createElement("a");
                    return e.href = t,
                    e.hostname
                }
                function l(t) {
                    _t ? _t.content = t: document.head.insertAdjacentHTML("beforeend", '<meta name="description" content="' + t + '">')
                }
                function u(t) {
                    gt ? gt.href = t: document.head.insertAdjacentHTML("beforeend", '<link rel="shortcut icon" href="' + t + '">')
                }
                function h(t) {
                    document.title = t
                }
                function p(t) {
                    return s({
                        share_id: 924053302,
                        url: ft.encode(t.link),
                        title: ft.encode(t.title),
                        description: ft.encode(t.desc),
                        previewimageUrl: ft.encode(t.icon),
                        image_url: ft.encode(t.icon)
                    })
                }
                function d() {
                    a((rt ? "mqqapi://share/to_fri?src_type=web&version=1&file_type=news": "mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news") + "&" + p(yt))
                }
                function f() {
                    a((rt ? "mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A": "mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1") + "&" + p(yt))
                }
                function _() {
                    var t = {
                        url: yt.link,
                        title: yt.title,
                        pic: yt.icon,
                        desc: yt.desc
                    };
                    location.href = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s(t, !0)
                }
                function g() {
                    var t = {
                        url: yt.link,
                        title: yt.title,
                        pic: yt.icon
                    };
                    location.href = "http://service.weibo.com/share/share.php?" + s(t, !0)
                }
                function y(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function m(t, e, o) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = o,
                    t
                }
                function v(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function b(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function w(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function T(t, e, o) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = o,
                    t
                }
                function P(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function E(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function S(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function O(t, e, o) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = o,
                    t
                }
                function I(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function R(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function C(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function A(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function k(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function D(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function M(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function x(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function G(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function N(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function L(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function j(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function F(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function U(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function B(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function H(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function V(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function Y(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function W(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function z(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function q(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function X(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function Q(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function Z(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function K(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                function J(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! e || "object" != typeof e && "function" != typeof e ? t: e
                }
                function $(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var tt, et = navigator.userAgent,
                ot = /(iPad).*OS\s([\d_]+)/.test(et),
                nt = /(iPod)(.*OS\s([\d_]+))?/.test(et),
                it = !ot && /(iPhone\sOS)\s([\d_]+)/.test(et),
                rt = ot || nt || it,
                at = /(Android);?[\s\/]+([\d.]+)?/.test(et),
                st = /micromessenger/i.test(et),
                ct = /QQ\/([\d\.]+)/.test(et),
                lt = /Qzone\//.test(et),
                ut = /MQQBrowser/i.test(et) && !st && !ct,
                ht = /UCBrowser/i.test(et),
                pt = /mobile.*baidubrowser/i.test(et),
                dt = /SogouMobileBrowser/i.test(et),
                ft = (/baiduboxapp/i.test(et), {
                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function(t) {
                        var e, o, n, i, r, a, s, c = "",
                        l = 0;
                        for (t = ft._utf8_encode(t); l < t.length;) i = (e = t.charCodeAt(l++)) >> 2,
                        r = (3 & e) << 4 | (o = t.charCodeAt(l++)) >> 4,
                        a = (15 & o) << 2 | (n = t.charCodeAt(l++)) >> 6,
                        s = 63 & n,
                        isNaN(o) ? a = s = 64 : isNaN(n) && (s = 64),
                        c = c + this._keyStr.charAt(i) + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
                        return c
                    },
                    _utf8_encode: function(t) {
                        t = t.replace(/\r
/g, "
");
                        for (var e = "",
                        o = 0; o < t.length; o++) {
                            var n = t.charCodeAt(o);
                            n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
                        }
                        return e
                    }
                }),
                _t = document.querySelector("meta[name=description]"),
                gt = document.querySelector("link[rel*=icon]"),
                yt = {
                    link: location.href,
                    title: document.title,
                    desc: Object(_t).content || "",
                    icon: Object(gt).href || location.protocol + "//" + location.hostname + "/favicon.ico",
                    from: "",
                    success: n,
                    fail: n,
                    trigger: n
                },
                mt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                vt = function() {
                    function t(e) {
                        y(this, t),
                        this._shareData = yt,
                        this._config = {
                            syncDescToTag: !1,
                            syncIconToTag: !1,
                            syncTitleToTag: !1
                        },
                        this.setConfig(e)
                    }
                    return mt(t, [{
                        key: "getShareData",
                        value: function() {
                            return r({},
                            this._shareData)
                        }
                    },
                    {
                        key: "setShareData",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            r(this._shareData, t),
                            this._config.syncDescToTag && l(this._shareData.desc),
                            this._config.syncIconToTag && u(this._shareData.icon),
                            this._config.syncTitleToTag && h(this._shareData.title)
                        }
                    },
                    {
                        key: "setConfig",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            r(this._config, t)
                        }
                    },
                    {
                        key: "getConfig",
                        value: function() {
                            return r({},
                            this._config)
                        }
                    }]),
                    t
                } (),
                bt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                wt = function() {
                    function t(e) {
                        v(this, t);
                        var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return i("https://jsapi.qq.com/get?api=app.share"),
                        o
                    }
                    return w(t, vt),
                    bt(t, [{
                        key: "call",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                            e = arguments[1];
                            this.setShareData(e);
                            var o = this.getShareData(),
                            n = this.constructor.commamdMap[String(t).toLowerCase()];
                            browser.app.share({
                                title: o.title,
                                description: o.desc,
                                url: o.link,
                                img_url: o.icon,
                                from: o.from,
                                to_app: n
                            })
                        }
                    }]),
                    t
                } ();
                wt.commamdMap = (m(tt = {},
                "wechattimeline", 8), m(tt, "wechatfriend", 1), m(tt, "qqfriend", 4), m(tt, "qzone", 3), m(tt, "weibo", 11), m(tt, "copyurl", 10), m(tt, "more", 5), m(tt, "generateqrcode", 7), m(tt, "default", void 0), tt);
                var Tt, Pt = wt,
                Et = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                St = function() {
                    function t(e) {
                        return P(this, t),
                        E(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                    }
                    return S(t, vt),
                    Et(t, [{
                        key: "call",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                            e = arguments[1];
                            this.setShareData(e);
                            var o = this.getShareData(),
                            n = this.constructor.commamdMap[String(t).toLowerCase()];
                            ucbrowser.web_shareEX ? ucbrowser.web_shareEX(JSON.stringify({
                                title: o.title,
                                content: o.desc,
                                sourceUrl: o.link,
                                imageUrl: o.icon,
                                source: o.from,
                                target: n
                            })) : ucbrowser.web_share(title, desc, link, n, "", from, "")
                        }
                    }]),
                    t
                } ();
                St.commamdMap = (T(Tt = {},
                "wechattimeline", "kWeixinFriend"), T(Tt, "wechatfriend", "kWeixin"), T(Tt, "qqfriend", "kQQ"), T(Tt, "qzone", "kQZone"), T(Tt, "weibo", "kSinaWeibo"), T(Tt, "default", void 0), Tt);
                var Ot, It = St,
                Rt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Ct = function() {
                    function t(e) {
                        return I(this, t),
                        R(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                    }
                    return C(t, vt),
                    Rt(t, [{
                        key: "call",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                            e = arguments[1];
                            this.setShareData(e);
                            var o = this.getShareData(),
                            n = this.constructor.commamdMap[String(t).toLowerCase()];
                            ucweb.startRequest("shell.page_share", [o.title, o.desc, o.link, n, "", o.from, o.icon])
                        }
                    }]),
                    t
                } ();
                Ct.commamdMap = (O(Ot = {},
                "wechattimeline", "WechatTimeline"), O(Ot, "wechatfriend", "WechatFriends"), O(Ot, "qqfriend", "QQ"), O(Ot, "qzone", "Qzone"), O(Ot, "weibo", "SinaWeibo"), O(Ot, "default", ""), Ot);
                var At, kt = Ct,
                Dt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Mt = function() {
                    function t(e) {
                        return A(this, t),
                        k(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                    }
                    return D(t, vt),
                    Dt(t, [{
                        key: "call",
                        value: function(t, e) {
                            this.setShareData(e);
                            var o = this.getShareData();
                            _flyflowNative.exec("bd_utils", "shareWebPage", JSON.stringify({
                                title: o.title,
                                content: o.desc,
                                landurl: o.link,
                                imageurl: o.icon,
                                shareSource: o.from
                            }), "")
                        }
                    }]),
                    t
                } (),
                xt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Gt = function() {
                    function t(e) {
                        return M(this, t),
                        x(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                    }
                    return G(t, vt),
                    xt(t, [{
                        key: "call",
                        value: function(t, e) {
                            this.setShareData(e);
                            var o = this.getShareData();
                            location.href = "baidubrowserapp://bd_utils?action=shareWebPage&params=" + encodeURIComponent(JSON.stringify({
                                title: o.title,
                                content: o.desc,
                                imageurl: o.icon,
                                landurl: o.link,
                                mediaType: 0,
                                share_type: "webpage"
                            }))
                        }
                    }]),
                    t
                } (),
                Nt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Lt = function() {
                    function t(e) {
                        return N(this, t),
                        L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                    }
                    return j(t, vt),
                    Nt(t, [{
                        key: "call",
                        value: function(t, e) {
                            this.setShareData(e);
                            var o = this.getShareData();
                            SogouMse.Utility.shareWithInfo({
                                shareTitle: o.title,
                                shareContent: o.desc,
                                shareImageUrl: o.icon,
                                shareUrl: o.link
                            })
                        }
                    }]),
                    t
                } (),
                jt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Ft = function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(e, o);
                    if (void 0 === i) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : t(r, o, n)
                    }
                    if ("value" in i) return i.value;
                    var a = i.get;
                    return void 0 !== a ? a.call(n) : void 0
                },
                Ut = function() {
                    function t(e) {
                        F(this, t);
                        var o = U(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return o.setConfig(e),
                        o
                    }
                    return B(t, vt),
                    jt(t, [{
                        key: "call",
                        value: function(t, e) {
                            this.setShareData(e)
                        }
                    },
                    {
                        key: "setConfig",
                        value: function(e) {
                            Ft(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setConfig", this).call(this, e),
                            this.init(this.getConfig().wechatConfig)
                        }
                    },
                    {
                        key: "init",
                        value: function(t) {
                            var e = this;
                            t && i("https://res.wx.qq.com/open/js/jweixin-1.4.0.js",
                            function() {
                                wx.config(r({
                                    debug: !1,
                                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "updateAppMessageShareData", "updateTimelineShareData"]
                                },
                                t));
                                var o = e._shareData,
                                n = {};
                                Object.defineProperty(n, "trigger", {
                                    get: function() {
                                        return function() {
                                            r(n, {
                                                title: o.title,
                                                desc: o.desc,
                                                link: o.link,
                                                imgUrl: o.icon,
                                                success: o.success,
                                                fail: o.fail,
                                                cancel: o.fail
                                            }),
                                            o.trigger.apply(o, arguments)
                                        }
                                    },
                                    set: function(t) {
                                        o.trigger = t
                                    },
                                    enumerable: !0
                                }),
                                wx.ready(function() {
                                    wx.onMenuShareAppMessage(n),
                                    wx.onMenuShareQQ(n),
                                    wx.onMenuShareQZone(n),
                                    wx.onMenuShareWeibo(n),
                                    wx.onMenuShareTimeline(n),
                                    wx.updateAppMessageShareData(n),
                                    wx.updateTimelineShareData(n)
                                })
                            })
                        }
                    }]),
                    t
                } (),
                Bt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Ht = function() {
                    function t(e) {
                        return H(this, t),
                        V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                    }
                    return Y(t, vt),
                    Bt(t, [{
                        key: "call",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                            e = arguments[1];
                            if (this.setShareData(e), navigator.share) {
                                var o = this.getShareData(),
                                n = {
                                    url: o.link,
                                    title: o.title,
                                    text: o.desc
                                };
                                navigator.share(n).then(o.success).
                                catch(o.fail)
                            } else {
                                if ("weibo" !== (t = String(t).toLowerCase())) throw "qqfriend" === t ? d() : "qzone" === t && f(),
                                new Error("the browser may not support command " + t + "!");
                                g()
                            }
                        }
                    }]),
                    t
                } (),
                Vt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Yt = function() {
                    function t(e) {
                        W(this, t);
                        var o = z(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return o.init(),
                        o
                    }
                    return q(t, vt),
                    Vt(t, [{
                        key: "call",
                        value: function() {
                            var t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]);
                            this.setShareData(t),
                            mqq.ui.showShareMenu()
                        }
                    },
                    {
                        key: "init",
                        value: function() {
                            var t = this;
                            i("https://open.mobile.qq.com/sdk/qqapi.js",
                            function() {
                                var e = t._shareData;
                                mqq.ui.setOnShareHandler(function(t) {
                                    mqq.ui.shareMessage({
                                        back: !0,
                                        share_type: t,
                                        title: e.title,
                                        desc: e.desc,
                                        share_url: e.link,
                                        image_url: e.icon,
                                        sourceName: e.from
                                    },
                                    function(t) {
                                        0 === t.retCode ? e.success(t) : e.fail(t)
                                    })
                                })
                            })
                        }
                    }]),
                    t
                } (),
                Wt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                zt = function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(e, o);
                    if (void 0 === i) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : t(r, o, n)
                    }
                    if ("value" in i) return i.value;
                    var a = i.get;
                    return void 0 !== a ? a.call(n) : void 0
                },
                qt = function() {
                    function t(e) {
                        X(this, t);
                        var o = Q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return o.init(),
                        o
                    }
                    return Z(t, vt),
                    Wt(t, [{
                        key: "setShareData",
                        value: function(e) {
                            zt(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setShareData", this).call(this, e);
                            var o = this.getShareData();
                            c(o.link) !== location.hostname && (o.link = location.href, console.warn("安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url"));
                            try {
                                mqq.data.setShareInfo({
                                    share_url: o.link,
                                    title: o.title,
                                    desc: o.desc,
                                    image_url: o.icon
                                },
                                function(t) { ! 0 !== t && console.warn(t)
                                })
                            } catch(e) {}
                        }
                    },
                    {
                        key: "call",
                        value: function() {
                            var t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]);
                            this.setShareData(t),
                            mqq.ui.showShareMenu()
                        }
                    },
                    {
                        key: "init",
                        value: function() {
                            var t = this;
                            i("https://open.mobile.qq.com/sdk/qqapi.js",
                            function() {
                                t.setShareData()
                            })
                        }
                    }]),
                    t
                } (),
                Xt = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o),
                        n && t(e, n),
                        e
                    }
                } (),
                Qt = function() {
                    function t(e) {
                        K(this, t);
                        var o = J(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return o.init(),
                        o
                    }
                    return $(t, vt),
                    Xt(t, [{
                        key: "call",
                        value: function() {
                            var t = this,
                            e = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]);
                            this.setShareData(e);
                            for (var o = this.getShareData(), n = [], i = [], r = [], a = [], s = 0; s < 5; s++) n.push(o.icon),
                            a.push(o.link),
                            i.push(o.title),
                            r.push(o.desc);
                            QZAppExternal.setShare(function(e) {
                                0 != e.code && (t.hasSomethingWrong = !0)
                            },
                            {
                                type: "share",
                                image: n,
                                title: i,
                                summary: r,
                                shareURL: a
                            })
                        }
                    },
                    {
                        key: "setShareData",
                        value: function(t) {
                            try {
                                this.call("default", t)
                            } catch(t) {}
                        }
                    },
                    {
                        key: "init",
                        value: function() {
                            var t = this;
                            i("https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",
                            function() {
                                t.call("default")
                            })
                        }
                    }]),
                    t
                } ();
                o.d(e, "Share",
                function() {
                    return vt
                }),
                o.d(e, "QQMobileBrowser",
                function() {
                    return Pt
                }),
                o.d(e, "UCIosBrowser",
                function() {
                    return It
                }),
                o.d(e, "UCAndroidBrowser",
                function() {
                    return kt
                }),
                o.d(e, "BaiduAndroidBrowser",
                function() {
                    return Mt
                }),
                o.d(e, "BaiduIosBrowser",
                function() {
                    return Gt
                }),
                o.d(e, "SogouIosBrowser",
                function() {
                    return Lt
                }),
                o.d(e, "Wechat",
                function() {
                    return Ut
                }),
                o.d(e, "Others",
                function() {
                    return Ht
                }),
                o.d(e, "QQIos",
                function() {
                    return Yt
                }),
                o.d(e, "QQAndroid",
                function() {
                    return qt
                }),
                o.d(e, "QZone",
                function() {
                    return Qt
                }),
                o.d(e, "shareToQQ",
                function() {
                    return d
                }),
                o.d(e, "shareToQZone",
                function() {
                    return f
                }),
                o.d(e, "shareToWeibo4Web",
                function() {
                    return g
                }),
                o.d(e, "shareToQZone4Web",
                function() {
                    return _
                }),
                At = st ? Ut: ct && rt ? Yt: ct && at ? qt: lt ? Qt: ut ? Pt: ht && rt ? It: ht && at ? kt: pt && at ? Mt: pt && rt ? Gt: dt && rt ? Lt: Ht,
                window.NativeShare = At,
                e.
            default = At
            }])
        },
        "object" == typeof o && "object" == typeof e ? e.exports = i() : "function" == typeof define && define.amd ? define([], i) : "object" == typeof o ? o["NativeShare.js"] = i() : n["NativeShare.js"] = i(),
        cc._RF.pop()
    },
    {}],
    NetManager: [function(t, e) {
        "use strict";
        cc._RF.push(e, "11b7elQjUVB06a9Npmxtrr0", "NetManager");
        var o = t("../distConfig").distConfig,
        n = t("../sproto/sproto");
        cc.Class({
            extends: cc.EventTarget,
            properties: {
                serverIP: "wss://zww-qa-ws.njmqhs.cn",
                useSecConn: !0,
                connKeySent: !1,
                pendingResponses: [],
                session: 0,
                socketStatus: 0,
                isPinging: !1,
                EVENT_CONNECTED: "EVENT_CONNECTED",
                EVENT_CONNECT_FAILED: "EVENT_CONNECT_FAILED",
                EVENT_TRYING_NEXT_ADDR: "EVENT_TRYING_NEXT_ADDR",
                EVENT_DISCONNECTED: "EVENT_DISCONNECTED",
                EVENT_PACKET: "EVENT_PACKET",
                EVENT_LOGIN: "EVENT_LOGIN",
                EVENT_GAME_WEALTHY_UPDATE: "EVENT_GAME_WEALTHY_UPDATE",
                EVENT_UPDATE_FREE_POLE: "EVENT_UPDATE_FREE_POLE",
                EVENT_GET_GOLF_LOTTERY_DATA: "EVENT_GET_GOLF_LOTTERY_DATA",
                EVENT_UPDATE_TASK_INFO: "EVENT_UPDATE_TASK_INFO",
                EVENT_UPDATE_RANK_INFO: "EVENT_UPDATE_RANK_INFO"
            },
            init: function() {
                cc._g_sproto = {},
                this.initSproto(),
                cc.log("NetManager init")
            },
            initSproto: function() {
                var t = this;
                this.recvDecBuf = new Uint8Array(32800),
                this.sendEncBuf = new Uint8Array(32800),
                cc.resources.load("proto/c2s",
                function(t, o) {
                    t ? console.log("err:", t) : cc.assetManager.loadAny({
                        url: o.nativeUrl,
                        type: "binary"
                    },
                    function(t, o) {
                        t ? console.log("err:", t) : (o = new Uint8Array(o), cc._g_sproto.c2sBinary = o, e())
                    })
                }),
                cc.resources.load("proto/s2c",
                function(t, o) {
                    t ? console.log("err:", t) : cc.assetManager.loadAny({
                        url: o.nativeUrl,
                        type: "binary"
                    },
                    function(t, o) {
                        t ? console.log("err:", t) : (o = new Uint8Array(o), cc._g_sproto.s2cBinary = o, e())
                    })
                });
                var e = function() {
                    null != cc._g_sproto.c2sBinary && null != cc._g_sproto.s2cBinary && (t.loadSproto(), t.deps_c2s && (cc.loader.release(t.deps_c2s), t.deps_c2s = null), t.deps_s2c && (cc.loader.release(t.deps_s2c), t.deps_s2c = null))
                }
            },
            initEventHandlers: function() {},
            loadSproto: function() {
                if (null != cc._g_sproto.c2sBinary && null != cc._g_sproto.s2cBinary) {
                    var t = n.createNew(cc._g_sproto.s2cBinary);
                    if (null != t) {
                        t.dump();
                        var e = n.createNew(cc._g_sproto.c2sBinary);
                        if (null != e) {
                            e.dump(),
                            cc._g_sproto.c2sBinary = null,
                            cc._g_sproto.s2cBinary = null,
                            cc._g_sproto = {};
                            var o = t.host(),
                            i = o.attach(e);
                            this.host = o,
                            this.request = i,
                            cc.log("load sproto success !");
                            var r = this;
                            cc.game.on(cc.game.EVENT_SHOW,
                            function() {
                                r.connect()
                            }),
                            this.connect()
                        }
                    }
                }
            },
            connect: function() {
                if (null == this._ws) {
                    this.connKeySent = !1;
                    var t = this,
                    e = function() {
                        t._ws.binaryType = "arraybuffer",
                        t._ws.onopen = function() {
                            t.socketStatus = 1,
                            cc.log("socket opened"),
                            t.onSocketOpen()
                        },
                        t._ws.onmessage = function(e) {
                            t.onMessage(e.data)
                        },
                        t._ws.onerror = function(e) {
                            cc.log("WebSocket error observed:", JSON.stringify(e)),
                            t.emit(cc.EVENT_CONNECT_FAILED)
                        },
                        t._ws.onclose = function() {
                            t.socketStatus = 0,
                            cc.log("WebSocket is closed ..."),
                            t.emit(t.EVENT_DISCONNECTED)
                        },
                        t._ws.ondisconnect = function() {
                            t.socketStatus = 0,
                            cc.log("WebSocket is ondisconnected ..."),
                            t.emit(t.EVENT_DISCONNECTED)
                        }
                    };
                    this.serverIP = o.logonAddr,
                    console.log("this.serverIP ===" + this.serverIP),
                    cc.sys.isNative ? (cc.log("cc.sys.isNative -===== ..."), cc.resources.load("key",
                    function(o, n) {
                        o ? console.log("err:", o) : (cc.log("pemUrl ..." + n.nativeUrl), t._ws = new WebSocket(t.serverIP, null, n.nativeUrl), e())
                    })) : (this._ws = new WebSocket(this.serverIP), e())
                }
            },
            disconnect: function() {
                null != this._ws && (this._ws.close(), this._ws = null, cc.log("NetManager disconnect ..."))
            },
            onSocketOpen: function() {
                this.emit(this.EVENT_CONNECTED),
                this.startHeartbeat()
            },
            sendHeartbeat: function() {
                this.lastSendTime = Date.now();
                var t = this;
                this.sendRequest("heartbeat", null,
                function() {
                    t.lastRecieveTime = Date.now(),
                    t.delayMS = t.lastRecieveTime - t.lastSendTime
                })
            },
            sendData: function(t, e) {
                cc.log("NetManager sendData=> ", t, JSON.stringify(e)),
                this.sendRequest(t, e, null)
            },
            sendRequest: function(t, e, o) {
                if (null != this._ws && 1 == this.socketStatus) {
                    this.session = this.session + 1;
                    var n = this.request(t, e, this.session);
                    if (null != n.packed) {
                        var i = new Uint8Array(n.packed, 0, n.packed.length);
                        if (n.hasResponse && (this.pendingResponses[this.session] = {
                            name: t,
                            handler: o
                        }), this.useSecConn) {
                            if (!this.connKeySent) {
                                var r = new JSEncrypt.JSEncrypt;
                                r.setPublicKey("305a300d06092a864886f70d01010105000349003046024100a8402bb11748d804a387ae4fe06f49b31c57a2880ddaef92ba6beed208f340af740b0189d5d70328e4dee6fbde49234349a1293f3c8d471ae166db4b16cec92b020111");
                                for (var a = r.encryptRaw("12345678"), s = Math.floor(a.length / 2), c = new Uint8Array(s), l = 0; l < s; ++l) c[l] = parseInt(a.substr(2 * l, 2), 16);
                                this._ws.send(c),
                                this.connKey = CryptoJS.enc.Utf8.parse("12345678"),
                                this.connKeySent = !0
                            }
                            if (this.useSecConn) {
                                for (var u = new CryptoJS.WordArray.init(i), h = this.connKey, p = CryptoJS.DES.encrypt(u, h, {
                                    mode: CryptoJS.mode.ECB,
                                    padding: CryptoJS.pad.Iso97971
                                }).ciphertext, d = new DataView(this.sendEncBuf.buffer), f = p.words, _ = (l = 0, Math.ceil(p.sigBytes / 4)); l < _; ++l) d.setInt32(4 * l, f[l], !1);
                                i = new Uint8Array(d.buffer, d.byteOffset, p.sigBytes)
                            }
                        }
                        this._ws.send(i)
                    }
                }
            },
            onMessage: function(t) {
                var e = new Uint8Array(t);
                if (this.useSecConn) {
                    for (var o = CryptoJS,
                    n = new Uint8Array(t), i = new o.WordArray.init(n), r = this.connKey, a = o.DES.decrypt({
                        ciphertext: i
                    },
                    r, {
                        mode: o.mode.ECB,
                        padding: o.pad.Iso97971
                    }), s = new DataView(this.recvDecBuf.buffer), c = a.words, l = 0, u = Math.ceil(a.sigBytes / 4); l < u; ++l) s.setInt32(4 * l, c[l], !1);
                    e = new Uint8Array(s.buffer, s.byteOffset, a.sigBytes)
                }
                this.messageParse(e)
            },
            messageParse: function(t) {
                var e = this.host.dispatch(t),
                o = e.type,
                n = e.pname,
                i = e.result,
                r = e.session;
                if ("RESPONSE" == o) {
                    var a = this.pendingResponses[r];
                    if (null != a && (this.pendingResponses[r] = null, null != a.handler)) return void a.handler(i)
                }
                this.onPacket(!1, n, i, r)
            },
            onPacket: function(t, e, o, n) {
                cc.log("onPacket data = ", e, JSON.stringify(o)),
                "login_outerid" === e ? this.emit(this.EVENT_LOGIN, {
                    name: e,
                    args: o,
                    session: n
                }) : this.emit(e, o)
            },
            isConnected: function() {
                return null != this._ws
            },
            startHeartbeat: function() {
                var t = this;
                t.lastRecieveTime = Date.now(),
                cc.log("start heartbeat ..."),
                t.isPinging || (t.isPinging = !0, cc.game.on(cc.game.EVENT_HIDE,
                function() {
                    t.sendHeartbeat()
                }), setInterval(function() {
                    t._ws && t.sendHeartbeat()
                }.bind(this), 5e3), setInterval(function() {
                    t._ws && Date.now() - t.lastRecieveTime > 3e4 && t.disconnect()
                }.bind(this), 1e3))
            }
        }),
        cc._RF.pop()
    },
    {
        "../distConfig": "distConfig",
        "../sproto/sproto": "sproto"
    }],
    PlatformUtils: [function(t, e) {
        "use strict";
        cc._RF.push(e, "2f513PsSy5MZagnZS+zi8RC", "PlatformUtils"),
        window.getAgentInfo = function() {
            var t = {
                platform: "",
                deviceType: "",
                OSname: "",
                browserName: "",
                browserVer: "",
                adaptType: 0,
                _init: function() {
                    t.setDeviceAndOS(),
                    t.setBrowser()
                },
                setDeviceAndOS: function() {
                    var e = "unknown",
                    o = "android";
                    if ( - 1 != window.navigator.userAgent.indexOf("Android") ? (e = "Android", o = "android") : -1 != window.navigator.userAgent.indexOf("iPhone") ? (e = "iPhone", o = "ios") : -1 != window.navigator.userAgent.indexOf("SymbianOS") ? (e = "SymbianOS", o = "symbian") : -1 != window.navigator.userAgent.indexOf("Windows Phone") ? (e = "Windows Phone", o = "winphone") : -1 != window.navigator.userAgent.indexOf("iPad") ? (e = "iPad", o = "ios") : -1 != window.navigator.userAgent.indexOf("iPod") && (e = "iPod", o = "ios"), "unknown" != e) return t.OSname = e,
                    t.deviceType = "mobile",
                    void(t.platform = o); - 1 != window.navigator.userAgent.indexOf("Windows NT 10.0") ? (e = "Windows 10", o = "win") : -1 != window.navigator.userAgent.indexOf("Windows NT 6.2") ? (e = "Windows 8", o = "win") : -1 != window.navigator.userAgent.indexOf("Windows NT 6.1") ? (e = "Windows 7", o = "win") : -1 != window.navigator.userAgent.indexOf("Windows NT 6.0") ? (e = "Windows Vista", o = "win") : -1 != window.navigator.userAgent.indexOf("Windows NT 5.1") ? (e = "Windows XP", o = "win") : -1 != window.navigator.userAgent.indexOf("Windows NT 5.0") ? (e = "Windows 2000", o = "win") : -1 != window.navigator.userAgent.indexOf("Mac") ? (e = "Mac/iOS", o = "mac") : -1 != window.navigator.userAgent.indexOf("X11") ? (e = "UNIX", o = "unix") : -1 != window.navigator.userAgent.indexOf("Linux") && (e = "Linux", o = "linux"),
                    t.OSname = e,
                    t.deviceType = "pc",
                    t.platform = o
                },
                setBrowser: function() {
                    var e, o, n, i = navigator.userAgent,
                    r = navigator.appName,
                    a = "" + parseFloat(navigator.appVersion),
                    s = parseInt(navigator.appVersion, 10); - 1 != (o = i.indexOf("Opera")) ? (r = "Opera", a = i.substring(o + 6), -1 != (o = i.indexOf("Version")) && (a = i.substring(o + 8))) : -1 != i.indexOf("Trident") ? ("5" == (a = -1 != (o = i.indexOf("MSIE")) ? i.substring(o + 5) : "11.0") && (a = "11.0"), r = "IE") : -1 != (o = i.indexOf("Chrome")) ? (r = "Chrome", a = i.substring(o + 7)) : -1 != (o = i.indexOf("Safari")) ? (r = "Safari", a = i.substring(o + 7), -1 != (o = i.indexOf("Version")) && (a = i.substring(o + 8))) : -1 != (o = i.indexOf("Firefox")) ? (r = "Firefox", a = i.substring(o + 8)) : (e = i.lastIndexOf(" ") + 1) < (o = i.lastIndexOf("/")) && (r = i.substring(e, o), a = i.substring(o + 1), r.toLowerCase() == r.toUpperCase() && (r = navigator.appName)),
                    -1 != (n = a.indexOf(";")) && (a = a.substring(0, n)),
                    -1 != (n = a.indexOf(" ")) && (a = a.substring(0, n)),
                    s = parseInt("" + a, 10),
                    isNaN(s) && (a = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)),
                    t.browserName = r,
                    t.browserVer = a
                },
                isMobile: function() {
                    return "mobile" == t.deviceType
                },
                setAdaptType: function() {
                    screen.width <= 374 ? t.adaptType = 0 : screen.width <= 413 ? t.adaptType = 1 : t.adaptType = 2
                }
            };
            return t._init(),
            t
        },
        cc._RF.pop()
    },
    {}],
    PlayRuleView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "db320IUGdBNoJu0aQn+fX2P", "PlayRuleView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = (a.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([s], e)
        } (cc.Component));
        o.
    default = c,
        cc._RF.pop()
    },
    {}],
    PopTipView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b3dff+lY+NH3qVLO9K9K3dj", "PopTipView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_desc = null,
                e.lb_content = null,
                e.btn_left = null,
                e.btn_right = null,
                e._leftCallBack = null,
                e._rightCallBack = null,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.show = function(t) {
                var e = t.desc;
                if (this.btn_left.active = !1, this.btn_right.active = !1, t.left && (this._leftCallBack = t.left.callback || null, this.btn_left.active = !0, this.btn_left.getChildByName("lb_name").getComponent(cc.Label).string = t.left.name || "取消"), t.right ? (this._rightCallBack = t.right.callback || null, this.btn_right.active = !0, this.btn_right.getChildByName("lb_name").getComponent(cc.Label).string = t.right.name || "确定") : this.btn_left.x = 0, "string" == typeof e)(n = cc.instantiate(this.lb_desc)).parent = this.lb_content,
                n.x = 0,
                n.getComponent(cc.Label).string = "" + e;
                else if ("object" == typeof e && e.length > 0) for (var o = 0; o < e.length; o++) {
                    var n; (n = cc.instantiate(this.lb_desc)).parent = this.lb_content,
                    n.x = 0,
                    n.getComponent(cc.Label).string = "" + e
                }
            },
            e.prototype.leftBtnClick = function() {
                this._leftCallBack && this._leftCallBack(),
                this._leftCallBack = null,
                this.node.destroy()
            },
            e.prototype.rightBtnClick = function() {
                this._rightCallBack && this._rightCallBack(),
                this._rightCallBack = null,
                this.node.destroy()
            },
            r([c(cc.Node)], e.prototype, "lb_desc", void 0),
            r([c(cc.Node)], e.prototype, "lb_content", void 0),
            r([c(cc.Node)], e.prototype, "btn_left", void 0),
            r([c(cc.Node)], e.prototype, "btn_right", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    RankDetailView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a2802NAn1NBdrH1er+1y8dF", "RankDetailView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("../GameUtil"),
        c = t("../GolfGameManage"),
        l = cc._decorator,
        u = l.ccclass,
        h = l.property; (function(t) {
            t[t.SHARE = 1] = "SHARE",
            t[t.INVITE = 2] = "INVITE",
            t[t.PRIZE_CLAW = 3] = "PRIZE_CLAW",
            t[t.RECHARGE = 4] = "RECHARGE",
            t[t.SPEND_DIAMOND = 5] = "SPEND_DIAMOND"
        })(a || (a = {}));
        var p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_name = null,
                e.lb_score_0 = null,
                e.lb_score_1 = null,
                e.lb_score_2 = null,
                e.img_head = null,
                e._index = 0,
                e._parent = null,
                e._itemData = {},
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {},
            e.prototype.start = function() {},
            e.prototype.show = function(t, e, o) {
                console.log("data ==", t),
                this.lb_score_0.string = "未完赛",
                this.lb_score_1.string = "未完赛",
                this.lb_score_2.string = "未完赛",
                this._parent = o,
                this._itemData = t || {},
                this._index = e,
                this.lb_name.string = t.nickname || "";
                var n = this;
                "string" == typeof t.openid && c.
            default.getInstance().get_golf_rank_user_best_achievements(t.openid,
                function(t) {
                    n.updateView(t)
                });
                var i = t.pic_url;
                if (i) {
                    var r;
                    r = s.
                default.getUrlHavePicturSuffix(i) ? {}: {
                        ext: ".png"
                    },
                    cc.assetManager.loadRemote(t.pic_url, r,
                    function(t, e) {
                        t ? console.log("加载失败======") : (console.log("加载成功======"), n.img_head.spriteFrame = new cc.SpriteFrame(e))
                    })
                } else n.img_head.spriteFrame = null
            },
            e.prototype.updateView = function(t) {
                "string" == typeof t.best_achievement_1 && (this.lb_score_0.string = t.best_achievement_1 + "杆"),
                "string" == typeof t.best_achievement_2 && (this.lb_score_1.string = t.best_achievement_2 + "杆"),
                "string" == typeof t.best_achievement_3 && (this.lb_score_2.string = t.best_achievement_3 + "杆")
            },
            e.prototype.btnClick = function() {},
            e.prototype.updateItem = function() {},
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([h(cc.Label)], e.prototype, "lb_name", void 0),
            r([h(cc.Label)], e.prototype, "lb_score_0", void 0),
            r([h(cc.Label)], e.prototype, "lb_score_1", void 0),
            r([h(cc.Label)], e.prototype, "lb_score_2", void 0),
            r([h(cc.Sprite)], e.prototype, "img_head", void 0),
            r([u], e)
        } (cc.Component);
        o.
    default = p,
        cc._RF.pop()
    },
    {
        "../GameUtil": "GameUtil",
        "../GolfGameManage": "GolfGameManage"
    }],
    RankItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ad34dxO2SFOmZcL6HeMFwNs", "RankItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("../GameUtil"),
        c = t("../GlobalData"),
        l = t("../GolfGameManage"),
        u = t("../Layer/RankDetailView"),
        h = cc._decorator,
        p = h.ccclass,
        d = h.property; (function(t) {
            t[t.SHARE = 1] = "SHARE",
            t[t.INVITE = 2] = "INVITE",
            t[t.PRIZE_CLAW = 3] = "PRIZE_CLAW",
            t[t.RECHARGE = 4] = "RECHARGE",
            t[t.SPEND_DIAMOND = 5] = "SPEND_DIAMOND"
        })(a || (a = {}));
        var f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_name = null,
                e.lb_par = null,
                e.lb_reward = null,
                e.lb_rank = null,
                e.img_icon = null,
                e.img_rank = null,
                e.pfb_rankDetail = null,
                e._index = 0,
                e._parent = null,
                e._itemData = {},
                e._rankRewardConfig = [],
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this._rankRewardConfig = l.
            default.getInstance().getRankRewardConfig()
            },
            e.prototype.start = function() {},
            e.prototype.getCurrRankReward = function(t, e) {
                e = c.MATCH_TYPE.PUSSY_CAT;
                for (var o = [], n = 0; n < this._rankRewardConfig.length; n++) if (e == this._rankRewardConfig[n].matchSelect) {
                    o = this._rankRewardConfig[n].bonus_conf;
                    break
                }
                for (n = 0; n < o.length; n++) if (o[n].rank_begin <= t && t <= o[n].rank_end) return o[n].bonus
            },
            e.prototype.show = function(t, e, o) {
                if (this._parent = o, this._itemData = t || {},
                this._index = e, this.lb_name.string = t.nickname || "", this.lb_rank.string = "" + t.rank, this.lb_par.string = t.score + "杆", this.img_rank.active = this._index <= 2, this.lb_rank.node.active = !(this._index <= 2), e <= 2) {
                    var n = "rank/img_ranking" + (e + 1);
                    cc.resources.load(n,
                    function(t, e) {
                        t ? console.log("加载失败======") : (console.log("加载成功======"), l.img_rank.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e))
                    })
                }
                var i = this.getCurrRankReward(t.rank),
                r = "",
                a = i.props;
                if (i.diamond) r += i.diamond + "钻石 ";
                else if (i.gold) r += i.gold + "金币 ";
                else if (i.exp) r += i.exp + "经验 ";
                else if (i.ticket) r += i.ticket + "奖券 ";
                else if (a) for (var c = 0; c < a.length; c++) r += a[c].prop_name + "x" + a[c].quantity + " ";
                this.lb_reward.string = r;
                var l = this,
                u = t.pic_url;
                if (u) {
                    var h;
                    h = s.
                default.getUrlHavePicturSuffix(u) ? {}: {
                        ext: ".png"
                    },
                    cc.assetManager.loadRemote(t.pic_url, h,
                    function(t, e) {
                        t ? console.log("加载失败======") : (console.log("加载成功======"), l.img_icon.spriteFrame = new cc.SpriteFrame(e))
                    })
                } else l.img_icon.spriteFrame = null
            },
            e.prototype.btnClick = function() {
                var t = this._parent.getChildByName("rankDetail");
                t ? t.getComponent(u.
            default).show(this._itemData):
                ((t = cc.instantiate(this.pfb_rankDetail)).parent = this._parent, t.name = "rankDetail", t.getComponent(u.
            default).show(this._itemData))
            },
            e.prototype.updateItem = function() {},
            r([d(cc.Label)], e.prototype, "lb_name", void 0),
            r([d(cc.Label)], e.prototype, "lb_par", void 0),
            r([d(cc.Label)], e.prototype, "lb_reward", void 0),
            r([d(cc.Label)], e.prototype, "lb_rank", void 0),
            r([d(cc.Sprite)], e.prototype, "img_icon", void 0),
            r([d(cc.Node)], e.prototype, "img_rank", void 0),
            r([d(cc.Prefab)], e.prototype, "pfb_rankDetail", void 0),
            r([p], e)
        } (cc.Component);
        o.
    default = f,
        cc._RF.pop()
    },
    {
        "../GameUtil": "GameUtil",
        "../GlobalData": "GlobalData",
        "../GolfGameManage": "GolfGameManage",
        "../Layer/RankDetailView": "RankDetailView"
    }],
    RankView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "12fdcT7MChIj68N4+TMvIt2", "RankView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GameManager/ErrorCode"),
        s = t("../GameUtil"),
        c = t("../GlobalData"),
        l = t("../GolfGameManage"),
        u = t("../Item/RankItem"),
        h = t("../super-scrollview/UISuperLayout"),
        p = cc._decorator,
        d = p.ccclass,
        f = p.property,
        _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.layout_content = null,
                e.pfb_rankItem = null,
                e.node_toggle = null,
                e.rankScrollView = null,
                e.layout = null,
                e.my_rank = null,
                e._rankData = [[], [], []],
                e._selfRankData = [],
                e._checkIndex = 0,
                e._bFirstReq = [!0, !0, !0],
                e._spaceY = 10,
                e._itemIndex = 0,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                GameClient.on(GameClient.EVENT_UPDATE_RANK_INFO, this.updateRank, this)
            },
            e.prototype.start = function() {},
            e.prototype.initData = function() {},
            e.prototype.initView = function(t) {
                void 0 === t && (t = c.MATCH_TYPE.PUSSY_CAT),
                this._checkIndex = t;
                for (var e = this.node_toggle.childrenCount,
                o = 0; o < e; o++) this.node_toggle.getChildByName("toggle" + (o + 1)).getComponent(cc.Toggle).isChecked = !1,
                o == this._checkIndex && (this.node_toggle.getChildByName("toggle" + (o + 1)).getComponent(cc.Toggle).isChecked = !0);
                this.getSelfRankData(t),
                this.getRankData(t)
            },
            e.prototype.setSelfRankData = function(t, e) {
                if (!this._selfRankData[t]) {
                    var o = {};
                    o.score = e.score,
                    o.rank = e.rank,
                    this._selfRankData[t] = o
                }
                this.updateSelfRank()
            },
            e.prototype.getSelfRankData = function(t) {
                var e = this;
                console.log("matchId ===" + t),
                e._selfRankData[e._checkIndex] ? e.updateSelfRank() : t == c.MATCH_TYPE.PUSSY_CAT ? GameClient.sendRequest("get_golf_one_rank_self", {},
                function(t) {
                    console.log("get_golf_one_rank_self ====", t),
                    e.setSelfRankData(c.MATCH_TYPE.PUSSY_CAT, t)
                }) : t == c.MATCH_TYPE.QIQI ? GameClient.sendRequest("get_golf_two_rank_self", {},
                function(t) {
                    console.log("get_golf_two_rank_self ====", t),
                    e.setSelfRankData(c.MATCH_TYPE.QIQI, t)
                }) : GameClient.sendRequest("get_golf_three_rank_self", {},
                function(t) {
                    console.log("get_golf_three_rank_self ====", t),
                    e.setSelfRankData(c.MATCH_TYPE.ROCKET_TURTLE, t)
                })
            },
            e.prototype.getRankData = function(t) {
                var e = this;
                console.log("matchId ===" + t),
                t == c.MATCH_TYPE.PUSSY_CAT ? this._bFirstReq[t] ? GameClient.sendRequest("get_golf_one_rank", {},
                function(t) {
                    console.log("get_golf_one_rank ====", t),
                    t.error_code == a.ERROR_CODE.ok ? e._bFirstReq[c.MATCH_TYPE.PUSSY_CAT] = !1 : e.updateRank()
                }) : e.updateRank() : t == c.MATCH_TYPE.QIQI ? this._bFirstReq[t] ? GameClient.sendRequest("get_golf_two_rank", {},
                function(t) {
                    console.log("get_golf_two_rank ====", t),
                    t.error_code == a.ERROR_CODE.ok ? e._bFirstReq[c.MATCH_TYPE.QIQI] = !1 : e.updateRank()
                }) : e.updateRank() : this._bFirstReq[t] ? GameClient.sendRequest("get_golf_three_rank", {},
                function(t) {
                    console.log("get_golf_three_rank ====", t),
                    t.error_code == a.ERROR_CODE.ok ? e._bFirstReq[c.MATCH_TYPE.PUSSY_CAT] = !1 : e.updateRank()
                }) : e.updateRank()
            },
            e.prototype.updateRank = function() {
                this._rankData = l.
            default.getInstance().getRankData(),
                this.layout.total(this._rankData[this._checkIndex].length)
            },
            e.prototype.updateSelfRank = function() {
                var t = this._selfRankData[this._checkIndex] || {},
                e = this.my_rank.getChildByName("img_icon"),
                o = this.my_rank.getChildByName("lb_name"),
                n = this.my_rank.getChildByName("lb_par"),
                i = this.my_rank.getChildByName("lb_rank");
                o.getComponent(cc.Label).string = c.
            default.getInstance().accountInfo.nickname || "",
                n.getComponent(cc.Label).string = t.score + "杆",
                l.
            default.getInstance().getMatchPass(this._checkIndex) ? n.active = !0 : n.active = !1,
                t.rank ? i.getComponent(cc.Label).string = "第" + t.rank + "名": i.getComponent(cc.Label).string = "未上榜";
                var r = c.
            default.getInstance().accountInfo.pic_url;
                if (r) {
                    var a;
                    a = s.
                default.getUrlHavePicturSuffix(r) ? {}: {
                        ext: ".png"
                    },
                    cc.assetManager.loadRemote(r, a,
                    function(t, o) {
                        t ? (e.getComponent(cc.Sprite).spriteFrame = null, console.log("加载失败======")) : (console.log("加载成功======"), e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o))
                    })
                } else e.getComponent(cc.Sprite).spriteFrame = null
            },
            e.prototype.onRefreshEvent = function(t, e) {
                var o = this._rankData[this._checkIndex][e];
                t.getComponent(u.
            default).show(o, e, this.node)
            },
            e.prototype.toggleClick = function() {
                for (var t = this.node_toggle.childrenCount,
                e = 0; e < t; e++) this.node_toggle.getChildByName("toggle" + (e + 1)).getComponent(cc.Toggle).isChecked && (this._checkIndex = e, this.getSelfRankData(this._checkIndex), this.getRankData(this._checkIndex));
                console.log("click-------------")
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([f(cc.Node)], e.prototype, "layout_content", void 0),
            r([f(cc.Prefab)], e.prototype, "pfb_rankItem", void 0),
            r([f(cc.Node)], e.prototype, "node_toggle", void 0),
            r([f(cc.ScrollView)], e.prototype, "rankScrollView", void 0),
            r([f(h.
        default)], e.prototype, "layout", void 0),
            r([f(cc.Node)], e.prototype, "my_rank", void 0),
            r([d], e)
        } (cc.Component);
        o.
    default = _,
        cc._RF.pop()
    },
    {
        "../GameManager/ErrorCode": "ErrorCode",
        "../GameUtil": "GameUtil",
        "../GlobalData": "GlobalData",
        "../GolfGameManage": "GolfGameManage",
        "../Item/RankItem": "RankItem",
        "../super-scrollview/UISuperLayout": "UISuperLayout"
    }],
    RecordView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "419bbsagIxHwqiggupQ/l+D", "RecordView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GameManager/ErrorCode"),
        s = t("../GameUtil"),
        c = t("../Item/RewardRecordItem"),
        l = cc._decorator,
        u = l.ccclass,
        h = l.property,
        p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.layout_content = null,
                e.pfb_recordItem = null,
                e._recordData = [],
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                this.initData()
            },
            e.prototype.initData = function() {
                var t = this;
                GameClient.sendRequest("golf_lottery_open_records", {},
                function(e) {
                    console.log("golf_lottery_open_records ====", e),
                    e.error_code == a.ERROR_CODE.ok ? (t._recordData = e.open_records || [], t.initView(t._recordData)) : s.
                default.showTip(a.
                default.ErrorCodeDesc[e.error_code])
                })
            },
            e.prototype.initView = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.pfb_recordItem);
                    o.parent = this.layout_content,
                    o.getComponent(c.
                default).initItem(t[e], e)
                }
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([h(cc.Node)], e.prototype, "layout_content", void 0),
            r([h(cc.Prefab)], e.prototype, "pfb_recordItem", void 0),
            r([u], e)
        } (cc.Component);
        o.
    default = p,
        cc._RF.pop()
    },
    {
        "../GameManager/ErrorCode": "ErrorCode",
        "../GameUtil": "GameUtil",
        "../Item/RewardRecordItem": "RewardRecordItem"
    }],
    RewardRecordItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f32d1ff6W1FZIUWyC252Ugx", "RewardRecordItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = cc._decorator,
        c = s.ccclass,
        l = s.property; (function(t) {
            t[t.SHARE = 1] = "SHARE",
            t[t.INVITE = 2] = "INVITE",
            t[t.PRIZE_CLAW = 3] = "PRIZE_CLAW",
            t[t.RECHARGE = 4] = "RECHARGE",
            t[t.SPEND_DIAMOND = 5] = "SPEND_DIAMOND"
        })(a || (a = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_ticket_type = null,
                e.lb_rewards = null,
                e.img_bg = null,
                e._index = 0,
                e._itemData = {},
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initItem = function(t, e) {
                this._itemData = t || {},
                this._index = e,
                this.node.color = (new cc.Color).fromHEX("#ffffff"),
                e % 2 == 0 && (this.img_bg.color = (new cc.Color).fromHEX("#eaf5ff")),
                0 == t.open_type ? this.lb_ticket_type.string = "免费次数": this.lb_ticket_type.string = "奖券";
                var o = t.reward_bonus;
                this.lb_rewards.string = "";
                var n = "",
                i = o.props;
                if (o.diamond) n += o.diamond + "钻石";
                else if (o.gold) n += o.gold + "金币";
                else if (o.exp) n += o.exp + "经验";
                else if (o.ticket) n += o.ticket + "奖券";
                else if (i) for (var r = 0; r < i.length; r++) n += i[r].prop_name + "x" + i[r].quantity;
                this.lb_rewards.string = n
            },
            e.prototype.updateItem = function() {},
            r([l(cc.Label)], e.prototype, "lb_ticket_type", void 0),
            r([l(cc.Label)], e.prototype, "lb_rewards", void 0),
            r([l(cc.Node)], e.prototype, "img_bg", void 0),
            r([c], e)
        } (cc.Component);
        o.
    default = u,
        cc._RF.pop()
    },
    {}],
    ShareManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "13795T1fbRKar0NXphuktGT", "ShareManager");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        });
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../distConfig"),
        a = t("../GameUtil"),
        s = t("../GlobalData"),
        c = t("../LogonManager/LogonManager"),
        l = t("./sha1"),
        u = ["wechatFriend", "wechatTimeline", "qZone", "qqFriend", "weibo", "default"],
        h = "奇奇4周年限定高尔夫，惊喜不断，快来参加！",
        p = "http://zww-prd-plaza.7gyou.com/config/golf_icon.png",
        d = function() {
            return navigator.userAgent.indexOf("MicroMessenger") > -1
        };
        window.is_wechat = d;
        var f = function() {
            return navigator.userAgent.indexOf("QQ") > -1
        },
        _ = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.nativeShare = null,
                e.isQQFirstTime = !0,
                e
            }
            return i(e, t),
            e.prototype.initShare = function() {
                var t = this;
                t.nativeShare = new NativeShare;
                var o = s.
            default.getInstance().accountInfo,
                n = r.distConfig.url + "&channel=" + r.distConfig.channel + "&inviteID=" + o.memberid.toString();
                console.log("ShareTitle1111 =====奇奇高尔夫"),
                console.log("ShareContent2222 =====" + h),
                console.log("shareUrl1111 =====" + n);
                var i = {
                    title: "奇奇高尔夫",
                    desc: h,
                    link: n,
                    icon: p,
                    success: function() {
                        console.log("ssssssssssssssssssss ====="),
                        t.shareCallBack(!0)
                    },
                    fail: function() {
                        t.shareCallBack(!1),
                        a.
                    default.showBoxTip({
                            desc:
                            "请点击浏览器右上角或底部栏的分享按钮进行分享！!",
                            left: {
                                name: "确定",
                                callback: null
                            }
                        })
                    }
                };
                t.nativeShare.setShareData(i),
                f() && t.isQQFirstTime && (e.instance.share(5, t.isQQFirstTime), t.isQQFirstTime = !1)
            },
            e.prototype.call = function(t, e) {
                try {
                    this.nativeShare.call(t)
                } catch(o) {
                    f() && e || (navigator.userAgent.indexOf("Chrome") > -1 || navigator.userAgent.indexOf("Safari") > -1 ? this.showShareTips() : a.
                default.showBoxTip({
                        desc:
                        "请点击浏览器右上角或底部栏的分享按钮进行分享！!",
                        left: {
                            name: "确定",
                            callback: null
                        }
                    }))
                }
            },
            e.prototype.share = function(t, e) {
                var o;
                null == (o = navigator.userAgent) || null != /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i.exec(o) ? d() ? a.
            default.showShareTip():
                this.call(u[t], e) : a.
            default.showBoxTip({
                    desc:
                    "PC端不支持分享，请用手机打开链接。!",
                    left: {
                        name: "确定",
                        callback: null
                    }
                })
            },
            e.prototype.showShareTips = function() {},
            e.prototype.getTicket = function() {
                var t = this;
                console.log("get_web_ticket ==============="),
                GameClient.sendRequest("get_web_ticket", {},
                function(e) {
                    console.log("get_web_ticket1111111111111 ===============", e),
                    0 == e.error_code && (console.log("get_ticket回调：" + e.ticket), t.init(e.ticket))
                })
            },
            e.prototype.shareCallBack = function(t) {
                console.error("分享回调------", t),
                this.emit(e.EVENT_USER_SHARE_CALLBACK, [t])
            },
            e.prototype.init = function(t) {
                console.error("分享回调111111111111------");
                var e = this,
                o = c.
            default.getInstance().serverTime,
                n = function(t) {
                    t = t || 32;
                    for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
                    o = e.length,
                    n = "",
                    i = 0; i < t; i++) n += e.charAt(Math.floor(Math.random() * o));
                    return n
                } (16),
                i = "jsapi_ticket=" + t + "&noncestr=" + n + "&timestamp=" + o + "&url=" + location.href.split("#")[0],
                a = l.hex_sha1(i),
                u = s.
            default.getInstance().accountInfo,
                d = r.distConfig.url + "&channel=" + r.distConfig.channel + "&inviteID=" + u.memberid.toString();
                console.log("ShareTitle =====奇奇高尔夫"),
                console.log("ShareContent =====" + h),
                console.log("shareUrl =====" + d),
                wx.config({
                    debug: !1,
                    appId: "wx21833143e80f8422",
                    timestamp: o,
                    nonceStr: n,
                    signature: a,
                    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "chooseWXPay"]
                }),
                wx.ready(function() {
                    wx.updateAppMessageShareData({
                        title: "奇奇高尔夫",
                        desc: h,
                        link: d,
                        imgUrl: p,
                        success: function() {
                            console.log("updateAppMessageShareData ------")
                        }
                    }),
                    wx.updateTimelineShareData({
                        title: h,
                        link: d,
                        imgUrl: p,
                        success: function() {
                            console.log("updateTimelineShareData ------")
                        }
                    }),
                    wx.onMenuShareTimeline({
                        title: h,
                        link: d,
                        imgUrl: p,
                        success: function() {
                            e.shareCallBack(!0)
                        },
                        cancel: function() {
                            e.shareCallBack(!1)
                        }
                    }),
                    wx.onMenuShareAppMessage({
                        title: "奇奇高尔夫",
                        desc: h,
                        link: d,
                        imgUrl: p,
                        type: "",
                        dataUrl: "",
                        success: function() {
                            e.shareCallBack(!0)
                        },
                        cancel: function() {
                            e.shareCallBack(!1)
                        }
                    }),
                    wx.onMenuShareQQ({
                        title: "奇奇高尔夫",
                        desc: h,
                        link: d,
                        imgUrl: p,
                        type: "",
                        dataUrl: "",
                        success: function() {
                            e.shareCallBack(!0)
                        },
                        cancel: function() {
                            e.shareCallBack(!1)
                        }
                    }),
                    wx.onMenuShareQZone({
                        title: "奇奇高尔夫",
                        desc: h,
                        link: d,
                        imgUrl: p,
                        success: function() {
                            e.shareCallBack(!0)
                        },
                        cancel: function() {
                            e.shareCallBack(!1)
                        }
                    })
                }),
                wx.error(function() {})
            },
            Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this.singleton && (this.singleton = new e),
                    this.singleton
                },
                enumerable: !1,
                configurable: !0
            }),
            e.EVENT_USER_SHARE_CALLBACK = "EVENT_USER_SHARE_CALLBACK",
            e
        } (cc.EventTarget);
        o.
    default = _,
        cc._RF.pop()
    },
    {
        "../GameUtil": "GameUtil",
        "../GlobalData": "GlobalData",
        "../LogonManager/LogonManager": "LogonManager",
        "../distConfig": "distConfig",
        "./sha1": "sha1"
    }],
    Start: [function(t, e) {
        "use strict";
        cc._RF.push(e, "42f5eElSwFJSZ4rTKLaCKxm", "Start");
        var o = t("./GameUtil").
    default,
        n = t("./GlobalData").
    default;
        window.closeWebView = function() {
            console.log("关闭webView =====");
            var t = cc.find("Canvas/Guide/webView");
            console.log("关闭webView111 =====", t),
            t && (console.log("关闭webView222222 ====="), t.active = !1)
        },
        cc.Class({
            extends: cc.Component,
            onLoad: function() {
                console.log("222222222"),
                n.getInstance().bMaskedPrint,
                console.log = function() {},
                cc.log = function() {},
                cc.game.addPersistRootNode(this.node)
            },
            start: function() {
                o.showLoading();
                var e = t("./GameManager/NetManager"),
                i = t("./LogonManager/LogonManager").
            default;
                i.getInstance().setEnv(),
                window.GameClient = new e,
                GameClient.init(),
                n.getInstance().init(),
                i.getInstance().init()
            }
        }),
        cc._RF.pop()
    },
    {
        "./GameManager/NetManager": "NetManager",
        "./GameUtil": "GameUtil",
        "./GlobalData": "GlobalData",
        "./LogonManager/LogonManager": "LogonManager"
    }],
    StationItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "61e582x57hPBLUVcdM/qUeW", "StationItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./MapItem"),
        s = cc._decorator,
        c = s.ccclass,
        l = s.property,
        u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.img_station = null,
                e.layout_content = null,
                e.pfb_mapItem = null,
                e._index = 0,
                e._itemData = {},
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initItem = function(t, e) {
                this._itemData = t || {},
                this._index = e;
                for (var o = Math.floor(t.station_id / 100), n = 0; n < t.mapList.length; n++) {
                    var i = cc.instantiate(this.pfb_mapItem);
                    i.parent = this.layout_content,
                    i.getComponent(a.
                default).initItem(t.mapList[n], n)
                }
                var r = "Level/img_station_" + o,
                s = this;
                cc.resources.load(r,
                function(t, e) {
                    t ? console.log("加载失败=====") : s.img_station.spriteFrame = new cc.SpriteFrame(e)
                })
            },
            e.prototype.updateItem = function() {},
            r([l(cc.Sprite)], e.prototype, "img_station", void 0),
            r([l(cc.Node)], e.prototype, "layout_content", void 0),
            r([l(cc.Prefab)], e.prototype, "pfb_mapItem", void 0),
            r([c], e)
        } (cc.Component);
        o.
    default = u,
        cc._RF.pop()
    },
    {
        "./MapItem": "MapItem"
    }],
    TaskItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dd330/+6jxI4Ib9wHngW1do", "TaskItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("../GameManager/ShareManager"),
        c = t("../GameUtil"),
        l = t("../GolfGameManage"),
        u = cc._decorator,
        h = u.ccclass,
        p = u.property; (function(t) {
            t[t.SHARE = 1] = "SHARE",
            t[t.INVITE = 2] = "INVITE",
            t[t.PRIZE_CLAW = 3] = "PRIZE_CLAW",
            t[t.RECHARGE = 4] = "RECHARGE",
            t[t.SPEND_DIAMOND = 5] = "SPEND_DIAMOND"
        })(a || (a = {}));
        var d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_name = null,
                e.lb_reward = null,
                e.lb_progress = null,
                e.img_finished = null,
                e.btn_goto = null,
                e.btn_invite_record = null,
                e.pfb_invite_record = null,
                e._index = 0,
                e._taskType = a.SHARE,
                e._itemData = {},
                e._parent = null,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initItem = function(t, e, o) {
                this._parent = t,
                this._itemData = e || {},
                this._index = o,
                this._taskType = e.id;
                var n = e.task_repeat_times,
                i = e.task_cond_times,
                r = e.complete_task_times,
                s = e.task_reward_free_times,
                c = Math.floor(r / i),
                l = r % i,
                u = "";
                c >= n ? (c = n, l = i, this.img_finished.active = !0, this.btn_goto.active = !1) : (this.img_finished.active = !1, this.btn_goto.active = !0),
                this.btn_invite_record.active = this._taskType == a.INVITE,
                this._taskType == a.SHARE ? u = "分享" + i + "次活动(" + l + "/" + i + ")": this._taskType == a.INVITE ? u = "成功邀请" + i + "位新用户助力(" + l + "/" + i + ")": this._taskType == a.PRIZE_CLAW ? u = "成功抓取" + i + "个娃娃(" + l + "/" + i + ")": this._taskType == a.RECHARGE ? u = "充值满" + i + "元(" + l + "/" + i + ")": this._taskType == a.SPEND_DIAMOND && (u = "消耗" + i + "钻石(" + l + "/" + i + ")"),
                this.lb_progress.string = "可完成次数(" + c + "/" + n + ")",
                this.lb_reward.string = "免费次数+" + s,
                this.lb_name.string = u
            },
            e.prototype.updateItem = function() {},
            e.prototype.btnGotoClick = function() {
                if (this._taskType == a.SHARE || this._taskType == a.INVITE) console.log("微信分享-------" + this._index),
                l.
            default.getInstance().sendShareData(),
                s.
            default.instance.share(0, !1),
                this._parent.btnClose();
                else if (this._taskType == a.PRIZE_CLAW || this._taskType == a.RECHARGE || this._taskType == a.SPEND_DIAMOND) {
                    c.
                default.showTip("请前往app完成任务");
                    var t = {
                        desc: "请前往app完成任务!",
                        left: {
                            name: "取消",
                            callback: null
                        },
                        right: {
                            name: "前往",
                            callback: function() {
                                cc.sys.openURL("http://app.7gyou.com")
                            }
                        }
                    };
                    c.
                default.showBoxTip(t)
                }
            },
            e.prototype.btnInviteRecordClick = function() {
                this._taskType == a.INVITE && (cc.instantiate(this.pfb_invite_record).parent = this._parent.node)
            },
            r([p(cc.Label)], e.prototype, "lb_name", void 0),
            r([p(cc.Label)], e.prototype, "lb_reward", void 0),
            r([p(cc.Label)], e.prototype, "lb_progress", void 0),
            r([p(cc.Node)], e.prototype, "img_finished", void 0),
            r([p(cc.Node)], e.prototype, "btn_goto", void 0),
            r([p(cc.Node)], e.prototype, "btn_invite_record", void 0),
            r([p(cc.Prefab)], e.prototype, "pfb_invite_record", void 0),
            r([h], e)
        } (cc.Component);
        o.
    default = d,
        cc._RF.pop()
    },
    {
        "../GameManager/ShareManager": "ShareManager",
        "../GameUtil": "GameUtil",
        "../GolfGameManage": "GolfGameManage"
    }],
    TaskView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ee144ktpyxG8ZGu6SyBPigQ", "TaskView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../GlobalData"),
        s = t("../Item/TaskItem"),
        c = cc._decorator,
        l = c.ccclass,
        u = c.property,
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.layout_content = null,
                e.pfb_taskItem = null,
                e.layout_mask = null,
                e.layout_scroll = null,
                e._height = 960,
                e._taskData = null,
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                GameClient.on(GameClient.EVENT_UPDATE_FREE_POLE, this.updateView, this),
                this._taskData = a.
            default.getInstance().taskInfo,
                this.initView(this._taskData)
            },
            e.prototype.initView = function(t) {
                this.layout_content.removeAllChildren();
                for (var e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.pfb_taskItem);
                    o.parent = this.layout_content,
                    o.getComponent(s.
                default).initItem(this, t[e], e)
                }
                this.layout_content.getComponent(cc.Layout).updateLayout(),
                console.log("this.layout_content.height = " + this.layout_content.height),
                this.layout_scroll.height = this._height,
                this.layout_mask.height = this._height,
                this.layout_content.height < this._height && (this.layout_scroll.height = this.layout_content.height, this.layout_mask.height = this.layout_content.height)
            },
            e.prototype.updateView = function() {
                this._taskData = a.
            default.getInstance().taskInfo,
                this.initView(this._taskData)
            },
            e.prototype.btnClose = function() {
                this.node.destroy()
            },
            r([u(cc.Node)], e.prototype, "layout_content", void 0),
            r([u(cc.Prefab)], e.prototype, "pfb_taskItem", void 0),
            r([u(cc.Node)], e.prototype, "layout_mask", void 0),
            r([u(cc.Node)], e.prototype, "layout_scroll", void 0),
            r([l], e)
        } (cc.Component);
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "../GlobalData": "GlobalData",
        "../Item/TaskItem": "TaskItem"
    }],
    TestView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6fcb7mvEB1I4q1WW1FzIp2G", "TestView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./GameUtil"),
        s = t("./Layer/DiamondOrTicketTip"),
        c = (t("./GameManager/NetManager"), cc._decorator),
        l = c.ccclass,
        u = c.property,
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.img_diamond = null,
                e.lb_diamond = null,
                e.tipNode = null,
                e._click = 0,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.initView = function() {},
            e.prototype.btnClick = function() {
                var t = {
                    diamond: 100
                },
                e = this.lb_diamond.node.getPosition(),
                o = this.lb_diamond.node;
                console.log("diamondPos.x ==" + e.x + "---diamondPos.y===" + e.y);
                var n = o.parent.convertToWorldSpaceAR(o.getPosition());
                if (this._click % 2 == 0) a.
            default.showDiamondOrTicketTip(t, n, this.node);
                else {
                    var i = cc.instantiate(this.tipNode);
                    i.active = !0,
                    i.parent = this.node,
                    i.getComponent(s.
                default).initView(t, n, this.node)
                }
                this._click++
            },
            r([u(cc.Node)], e.prototype, "img_diamond", void 0),
            r([u(cc.Label)], e.prototype, "lb_diamond", void 0),
            r([u(cc.Node)], e.prototype, "tipNode", void 0),
            r([l], e)
        } (cc.Component);
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "./GameManager/NetManager": "NetManager",
        "./GameUtil": "GameUtil",
        "./Layer/DiamondOrTicketTip": "DiamondOrTicketTip"
    }],
    TiledMapTest: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "37036S+1+RGnYu34XH19lcC", "TiledMapTest");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.label = null,
                e.text = "hello",
                e.testMap = null,
                e.graphics = null,
                e.collider = null,
                e.collisonNode = null,
                e.ball = null,
                e._tiledLayer = null,
                e._landPolygon = [],
                e._land1Polygon = [],
                e
            }
            return i(e, t),
            e.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
            },
            e.prototype.touchStart = function(t) {
                var e = t.getLocation(),
                o = this.testMap.node.getContentSize(),
                n = this.testMap.getTileSize();
                e = this.testMap.node.convertToNodeSpaceAR(e);
                var i = Math.floor((o.width / 2 + e.x) / n.width),
                r = Math.floor((o.height - (o.height / 2 + e.y)) / n.height);
                if (! (i > o.width / n.width - 1 || i < 0 || r > o.height / n.height - 1 || r < 0)) {
                    var a = this._tiledLayer.getTileGIDAt(cc.v2(i, r));
                    console.log("gid ==" + a + "---x ===" + i + "----j===" + r)
                }
            },
            e.prototype.click = function() {
                this.getLayer()
            },
            e.prototype.getLayer = function() {
                this._tiledLayer = this.testMap.getLayer("BlockLayer"),
                this._tiledLayer.node.active = !1
            },
            e.prototype.getObject = function() {
                this.testMap.getObjectGroups();
                var t = this.testMap.getObjectGroup("obj").getObjects();
                this.initCollider(t),
                console.log("aaaa")
            },
            e.prototype.setColliderTag = function(t, e) {
                t.includes("land1") ? (e.tag = "land1", this._land1Polygon.push(e)) : t.includes("land") ? (e.tag = "land", this._landPolygon.push(e)) : e.tag = "other"
            },
            e.prototype.initCollider = function(t) {
                this.collisonNode.removeAllChildren(),
                this.graphics.clear();
                for (var e = 0; e < t.length; e++) {
                    var o = cc.instantiate(this.collider.node);
                    o.active = !1;
                    var n = t[e];
                    this.graphics.moveTo(n.x, n.y),
                    o.parent = this.collisonNode;
                    var i = o.getComponent(cc.PolygonCollider);
                    o.setPosition(n);
                    var r = t[e].points;
                    i.points.length = r.length,
                    this.setColliderTag(n.name, i);
                    for (var a = 0; a < r.length; a++) 0 == a || (a == r.length - 1 ? (this.graphics.lineTo(n.x + r[a].x, n.y + r[a].y), this.graphics.close(), this.graphics.stroke()) : this.graphics.lineTo(n.x + r[a].x, n.y + r[a].y)),
                    i.points[a].x = r[a].x,
                    i.points[a].y = r[a].y,
                    console.log("points ===", r[a]);
                    console.log(t[e])
                }
            },
            r([c(cc.Label)], e.prototype, "label", void 0),
            r([c], e.prototype, "text", void 0),
            r([c(cc.TiledMap)], e.prototype, "testMap", void 0),
            r([c(cc.Graphics)], e.prototype, "graphics", void 0),
            r([c(cc.PolygonCollider)], e.prototype, "collider", void 0),
            r([c(cc.Node)], e.prototype, "collisonNode", void 0),
            r([c(cc.Node)], e.prototype, "ball", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    TipManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0f98c2RphxHKa0Wjfl3UXtN", "TipManage");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./PopTipView"),
        s = t("./TipNode"),
        c = cc._decorator,
        l = c.ccclass,
        u = c.property,
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.tipNode = null,
                e.boxTipNode = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                cc.game.addPersistRootNode(this.node)
            },
            e.prototype.start = function() {},
            e.prototype.showTip = function(t) {
                var e = cc.instantiate(this.tipNode);
                e.parent = this.node,
                e.setPosition(cc.winSize.width / 2, cc.winSize.height / 2),
                e.zIndex = 9999,
                e.getComponent(s.
            default).show(t)
            },
            e.prototype.showBoxTip = function(t, e) {
                var o = null;
                if (e && "reconnect" == e && (o = this.node.getChildByName(e)), !o) {
                    var n = cc.instantiate(this.boxTipNode);
                    n.parent = this.node,
                    n.setPosition(cc.winSize.width / 2, cc.winSize.height / 2),
                    n.zIndex = 9999,
                    n.getComponent(a.
                default).show(t),
                    e && (n.name = e)
                }
            },
            r([u(cc.Prefab)], e.prototype, "tipNode", void 0),
            r([u(cc.Prefab)], e.prototype, "boxTipNode", void 0),
            r([l], e)
        } (cc.Component);
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "./PopTipView": "PopTipView",
        "./TipNode": "TipNode"
    }],
    TipNode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6944fpkb+BBzbnorbOyyUe8", "TipNode");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
        s = a.ccclass,
        c = a.property,
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lb_desc = null,
                e.frame_bg = null,
                e
            }
            return i(e, t),
            e.prototype.start = function() {},
            e.prototype.show = function(t, e, o) {
                void 0 === e && (e = 1),
                void 0 === o && (o = .5),
                this.lb_desc.string = "" + t,
                this.lb_desc._forceUpdateRenderData(),
                this.frame_bg.height = this.lb_desc.node.height,
                cc.tween(this.node).to(e, {
                    position: cc.v3(this.node.x, this.node.y + 100)
                }).delay(o).removeSelf().start()
            },
            r([c(cc.Label)], e.prototype, "lb_desc", void 0),
            r([c(cc.Node)], e.prototype, "frame_bg", void 0),
            r([s], e)
        } (cc.Component);
        o.
    default = l,
        cc._RF.pop()
    },
    {}],
    UISuperItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4780fwIhzhOYLzBo6o6Qb2l", "UISuperItem");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./UISuperLayout"),
        s = cc._decorator,
        c = s.ccclass,
        l = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.layout.vertical ? (this.layout.accommodWidth - this.layout.spacingWidth) / this.layout.column: this.node.width * this.layout.getUsedScaleValue(this.node.scaleX)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.layout.horizontal ? (this.layout.accommodHeight - this.layout.spacingWidth) / this.layout.column: this.node.height * this.layout.getUsedScaleValue(this.node.scaleY)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onLoad = function() {
                this.node.watchSelf = this.watchSelf.bind(this),
                this.node.saveOriginSize = this.saveOriginSize.bind(this);
                var t = this.node.getComponent(cc.Widget);
                t && (cc.warn("UISuperItem: item不允许挂cc.Widget组件 请手动移除"), this.node.removeComponent(t))
            },
            e.prototype.saveOriginSize = function() {
                this.originSize = cc.size(this.width, this.height),
                this.node.setContentSize(this.originSize),
                this.originScale = cc.v2(this.node.scaleX, this.node.scaleY)
            },
            e.prototype.init = function(t) {
                this.layout = t,
                this.layout.node.on(a.UIChangeBrotherEvnet, this.onChangeBrother, this),
                this.saveOriginSize(),
                this.node.on(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this),
                this.node.on(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this),
                this.onChangeBrother()
            },
            e.prototype.onDestroy = function() {
                this.layout.node.off(a.UIChangeBrotherEvnet, this.onChangeBrother, this),
                this.node.off(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this),
                this.node.off(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this),
                this.unlisten()
            },
            e.prototype.onChangeBrother = function() {
                var t, e = this.layout.getBrotherNode(this.node); (null == e ? void 0 : e.uuid) != (null === (t = this.brother) || void 0 === t ? void 0 : t.uuid) && (this.unlisten(), this.brother = e, this.listen(), this.watchBrother())
            },
            e.prototype.listen = function() {
                var t, e;
                null === (t = this.brother) || void 0 === t || t.on("leave", this.unlisten, this),
                null === (e = this.brother) || void 0 === e || e.on(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this)
            },
            e.prototype.unlisten = function() {
                var t, e;
                null === (t = this.brother) || void 0 === t || t.off("leave", this.unlisten, this),
                null === (e = this.brother) || void 0 === e || e.off(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this),
                this.brother = null
            },
            e.prototype.watchSize = function() {
                this.layout.column > 1 ? (this.node.setContentSize(this.originSize), this.node.setScale(this.originScale)) : (!this.layout.vertical || this.node.getContentSize().width == this.originSize.width && this.node.scaleX == this.originScale.x ? !this.layout.horizontal || this.node.getContentSize().height == this.originSize.height && this.node.scaleY == this.originScale.y || (cc.warn("水平排列不允许修改【高度】"), this.node.height = this.originSize.height, this.node.scaleY = this.originScale.y) : (cc.warn("垂直排列不允许修改【宽度】"), this.node.width = this.originSize.width, this.node.scaleX = this.originScale.x), this.brother && this.watchBrother(), this.layout.resetScrollView(), this.node.emit(cc.Node.EventType.POSITION_CHANGED)),
                0 == this.node.index && this.layout.isNormalSize && this.node.setPosition(this.layout.getGroupHeader(this.node))
            },
            e.prototype.watchBrother = function() {
                this.brother && (this.layout.headerToFooter ? this.headerToFooterRelativeToFooter(this.brother) : this.footerToHeaderRelativeToFooter(this.brother))
            },
            e.prototype.isOutOfBoundary = function(t) {
                return ! (!this.layout.vertical || 0 != t.y) || !(!this.layout.horizontal || 0 != t.x)
            },
            e.prototype.footerToHeaderWatchHeader = function() {
                if (! (this.layout.getSiblingIndex(this.node) >= this.layout.column)) {
                    var t = this.layout.footer.index + 1;
                    if (t >= this.layout.maxItemTotal) {
                        if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter) return;
                        t = 0
                    }
                    var e = this.layout.isOutOfBoundaryFooter(this.node);
                    this.isOutOfBoundary(e) && (this.node.index = t, this.layout.notifyRefreshItem(this.node), this.node.emit("leave"), this.layout.setSiblingIndex(this.node, this.layout.children.length - 1))
                }
            },
            e.prototype.footerToHeaderWatchFooter = function() {
                if (! (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column)) {
                    var t = this.layout.header.index - 1;
                    if (t < 0) {
                        if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter) return;
                        t = this.node.index
                    }
                    var e = this.layout.isOutOfBoundaryHeader(this.node);
                    this.isOutOfBoundary(e) && (this.node.index = t, this.layout.notifyRefreshItem(this.node), this.node.emit("leave"), this.unlisten(), this.footerToHeaderRelativeToHeader(this.layout.header), this.layout.setSiblingIndex(this.node, 0))
                }
            },
            e.prototype.headerToFooterWatchHeader = function() {
                if (! (this.layout.getSiblingIndex(this.node) >= this.layout.column)) {
                    var t = this.layout.footer.index + 1;
                    if (t > this.layout.maxItemTotal - 1) {
                        if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter) return;
                        t = 0
                    }
                    var e = this.layout.isOutOfBoundaryHeader(this.node);
                    this.isOutOfBoundary(e) && (this.node.index = t, this.layout.notifyRefreshItem(this.node), this.node.emit("leave"), this.layout.setSiblingIndex(this.node, this.layout.children.length - 1))
                }
            },
            e.prototype.headerToFooterWatchFooter = function() {
                if (! (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column)) {
                    var t = this.layout.header.index - 1;
                    if (t < 0) {
                        if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter) return;
                        t = this.node.index
                    }
                    var e = this.layout.isOutOfBoundaryFooter(this.node);
                    this.isOutOfBoundary(e) && (this.node.index = t, this.layout.notifyRefreshItem(this.node), this.node.emit("leave"), this.unlisten(), this.headerToFooterRelativeToHeader(this.layout.header), this.layout.setSiblingIndex(this.node, 0))
                }
            },
            e.prototype.watchSelf = function(t) {
                t ? this.layout.headerToFooter ? this.headerToFooterWatchFooter() : this.footerToHeaderWatchHeader() : this.layout.headerToFooter ? this.headerToFooterWatchHeader() : this.footerToHeaderWatchFooter()
            },
            e.prototype.footerToHeaderRelativeToHeader = function(t) {
                var e = this.node.getPosition();
                this.layout.vertical ? (this.layout.isGroupHeader(t) ? (e.x = this.layout.getGroupFooter(this.node).x, e.y = this.layout.getGroupBottomY(this.node, t)) : (e.x = this.layout.getGroupLeftX(this.node, t), e.y = t.y), 0 == this.node.index && (e.x = this.layout.getGroupHeader(this.node).x)) : (this.layout.isGroupHeader(t) ? (e.x = this.layout.getGroupRightX(this.node, t), e.y = this.layout.getGroupFooter(this.node).y) : (e.x = t.x, e.y = this.layout.getGroupTopY(this.node, t)), 0 == this.node.index && (e.y = this.layout.getGroupHeader(this.node).y)),
                this.node.setPosition(e)
            },
            e.prototype.footerToHeaderRelativeToFooter = function(t) {
                var e = this.node.getPosition();
                this.layout.vertical ? this.layout.isGroupFooter(t) ? (e.x = this.layout.getGroupHeader(this.node).x, e.y = this.layout.getGroupTopY(this.node, t)) : (e.x = this.layout.getGroupRightX(this.node, t), e.y = t.y) : this.layout.isGroupFooter(t) ? (e.x = this.layout.getGroupLeftX(this.node, t), e.y = this.layout.getGroupHeader(this.node).y) : (e.x = t.x, e.y = this.layout.getGroupBottomY(this.node, t)),
                this.node.setPosition(e)
            },
            e.prototype.headerToFooterRelativeToHeader = function(t) {
                var e = this.node.getPosition();
                this.layout.vertical ? (this.layout.isGroupHeader(t) ? (e.x = this.layout.getGroupFooter(this.node).x, e.y = this.layout.getGroupTopY(this.node, t)) : (e.x = this.layout.getGroupLeftX(this.node, t), e.y = t.y), 0 == this.node.index && (e.x = this.layout.getGroupHeader(this.node).x)) : (this.layout.isGroupHeader(t) ? (e.x = this.layout.getGroupLeftX(this.node, t), e.y = this.layout.getGroupFooter(this.node).y) : (e.x = t.x, e.y = this.layout.getGroupTopY(this.node, t)), 0 == this.node.index && (e.y = this.layout.getGroupHeader(this.node).y)),
                this.node.setPosition(e)
            },
            e.prototype.headerToFooterRelativeToFooter = function(t) {
                var e = this.node.getPosition();
                this.layout.vertical ? this.layout.isGroupFooter(t) ? (e.x = this.layout.getGroupHeader(this.node).x, e.y = this.layout.getGroupBottomY(this.node, t)) : (e.x = this.layout.getGroupRightX(this.node, t), e.y = t.y) : this.layout.isGroupFooter(t) ? (e.x = this.layout.getGroupRightX(this.node, t), e.y = this.layout.getGroupHeader(this.node).y) : (e.x = t.x, e.y = this.layout.getGroupBottomY(this.node, t)),
                this.node.setPosition(e)
            },
            r([c], e)
        } (cc.Component));
        o.
    default = l,
        cc._RF.pop()
    },
    {
        "./UISuperLayout": "UISuperLayout"
    }],
    UISuperLayout: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bb715kAbblFDrSd8KKAwXnB", "UISuperLayout");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        },
        a = this && this.__awaiter ||
        function(t, e, o, n) {
            function i(t) {
                return t instanceof o ? t: new o(function(e) {
                    e(t)
                })
            }
            return new(o || (o = Promise))(function(o, r) {
                function a(t) {
                    try {
                        c(n.next(t))
                    } catch(e) {
                        r(e)
                    }
                }
                function s(t) {
                    try {
                        c(n.
                        throw (t))
                    } catch(e) {
                        r(e)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : i(t.value).then(a, s)
                }
                c((n = n.apply(t, e || [])).next())
            })
        },
        s = this && this.__generator ||
        function(t, e) {
            var o, n, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }),
            r;
            function s(t) {
                return function(e) {
                    return c([t, e])
                }
            }
            function c(r) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; a;) try {
                    if (o = 1, n && (i = 2 & r[0] ? n.
                    return: r[0] ? n.
                    throw || ((i = n.
                    return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                    switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                    case 0:
                    case 1:
                        i = r;
                        break;
                    case 4:
                        return a.label++,
                        {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        a.label++,
                        n = r[1],
                        r = [0];
                        continue;
                    case 7:
                        r = a.ops.pop(),
                        a.trys.pop();
                        continue;
                    default:
                        if (! (i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            a = 0;
                            continue
                        }
                        if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                            a.label = r[1];
                            break
                        }
                        if (6 === r[0] && a.label < i[1]) {
                            a.label = i[1],
                            i = r;
                            break
                        }
                        if (i && a.label < i[2]) {
                            a.label = i[2],
                            a.ops.push(r);
                            break
                        }
                        i[2] && a.ops.pop(),
                        a.trys.pop();
                        continue
                    }
                    r = e.call(t, a)
                } catch(s) {
                    r = [6, s],
                    n = 0
                } finally {
                    o = i = 0
                }
                if (5 & r[0]) throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                }
            }
        },
        c = this && this.__spreadArrays ||
        function() {
            for (var t = 0,
            e = 0,
            o = arguments.length; e < o; e++) t += arguments[e].length;
            var n = Array(t),
            i = 0;
            for (e = 0; e < o; e++) for (var r = arguments[e], a = 0, s = r.length; a < s; a++, i++) n[i] = r[a];
            return n
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.UISuperDirection = o.UISuperAxis = o.UIChangeBrotherEvnet = void 0;
        var l, u, h = t("./UISuperScrollView"),
        p = t("./UISuperItem"),
        d = cc._decorator,
        f = d.ccclass,
        _ = d.property,
        g = d.menu;
        o.UIChangeBrotherEvnet = "UIChangeBrotherEvnet",
        function(t) {
            t[t.HORIZONTAL = 0] = "HORIZONTAL",
            t[t.VERTICAL = 1] = "VERTICAL"
        } (l = o.UISuperAxis || (o.UISuperAxis = {})),
        function(t) {
            t[t.HEADER_TO_FOOTER = 0] = "HEADER_TO_FOOTER",
            t[t.FOOTER_TO_HEADER = 1] = "FOOTER_TO_HEADER"
        } (u = o.UISuperDirection || (o.UISuperDirection = {}));
        var y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.startAxis = l.VERTICAL,
                e.direction = u.HEADER_TO_FOOTER,
                e.paddingTop = 0,
                e.paddingBottom = 0,
                e.paddingLeft = 0,
                e.paddingRight = 0,
                e.spacing = cc.Vec2.ZERO,
                e.column = 2,
                e.multiple = 2,
                e.prefab = null,
                e.headerLoop = !1,
                e.footerLoop = !1,
                e.affectedByScale = !0,
                e.refreshItemEvents = [],
                e._isinited = !1,
                e._maxPrefabTotal = 0,
                e._children = [],
                e._scrollView = null,
                e._maxItemTotal = 0,
                e._prevLayoutPosition = cc.Vec2.ZERO,
                e.scrollToHeaderOrFooter = !1,
                e
            }
            return i(e, t),
            Object.defineProperty(e.prototype, "layoutDirection", {
                get: function() {
                    var t = cc.Vec2.ZERO;
                    return this.vertical ? t.y = this.node.y - this._prevLayoutPosition.y: t.x = this.node.x - this._prevLayoutPosition.x,
                    this._prevLayoutPosition = this.node.getPosition(),
                    t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isScrollToFooter", {
                get: function() {
                    return this.vertical ? this.layoutDirection.y < 0 : this.layoutDirection.x > 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "children", {
                get: function() {
                    return this._children
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "maxItemTotal", {
                get: function() {
                    return this._maxItemTotal
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "maxPrefabTotal", {
                get: function() {
                    return this._maxPrefabTotal
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "viewSize", {
                get: function() {
                    return this.scrollView.view.getContentSize()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "vertical", {
                get: function() {
                    return this.startAxis == l.VERTICAL
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "horizontal", {
                get: function() {
                    return this.startAxis == l.HORIZONTAL
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "headerToFooter", {
                get: function() {
                    return this.direction == u.HEADER_TO_FOOTER
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "footerToHeader", {
                get: function() {
                    return this.direction == u.FOOTER_TO_HEADER
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "spacingWidth", {
                get: function() {
                    return this.spacing.x * (this.column - 1)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "spacingHeight", {
                get: function() {
                    return this.spacing.y * (this.column - 1)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "accommodWidth", {
                get: function() {
                    return this.viewSize.width - this.paddingLeft - this.paddingRight
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "accommodHeight", {
                get: function() {
                    return this.viewSize.height - this.paddingTop - this.paddingBottom
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "scrollView", {
                get: function() {
                    return this._scrollView || (this._scrollView = this.node.parent.parent.getComponent(h.
                default)),
                    this._scrollView
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "header", {
                get: function() {
                    return this._children[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "footer", {
                get: function() {
                    return this._children[this._children.length - 1]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "topBoundary", {
                get: function() {
                    return this.headerToFooter ? this.headerBoundaryY + this.paddingTop: this.footerBoundaryY + this.paddingTop
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "bottomBoundary", {
                get: function() {
                    return this.headerToFooter ? this.footerBoundaryY - this.paddingBottom: this.headerBoundaryY - this.paddingBottom
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "leftBoundary", {
                get: function() {
                    return this.headerToFooter ? this.headerBoundaryX - this.paddingLeft: this.footerBoundaryX - this.paddingLeft
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rightBoundary", {
                get: function() {
                    return this.headerToFooter ? this.footerBoundaryX + this.paddingRight: this.headerBoundaryX + this.paddingRight
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "headerBoundaryX", {
                get: function() {
                    return this.headerToFooter ? this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header) : this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "headerBoundaryY", {
                get: function() {
                    return this.headerToFooter ? this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header) : this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "footerBoundaryX", {
                get: function() {
                    return this.headerToFooter ? this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer) : this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "footerBoundaryY", {
                get: function() {
                    return this.headerToFooter ? this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer) : this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isNormalSize", {
                get: function() {
                    return this.node.getContentSize().equals(this.viewSize)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.getContentSize = function() {
                var t = this.getReallySize(),
                e = this.scrollView.view.getContentSize();
                return t.height < e.height && (t.height = e.height),
                t.width < e.width && (t.width = e.width),
                t
            },
            e.prototype.getReallySize = function() {
                if (0 == this.node.childrenCount) return this.viewSize;
                var t = cc.Size.ZERO;
                return this.headerToFooter ? (t.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight, t.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom) : (t.width = this.headerBoundaryX + -this.footerBoundaryX + this.paddingLeft + this.paddingRight, t.height = this.footerBoundaryY + -this.headerBoundaryY + this.paddingTop + this.paddingBottom),
                t
            },
            e.prototype.resetScrollView = function() {
                this.scrollView.reset()
            },
            e.prototype.getUsedScaleValue = function(t) {
                return this.affectedByScale ? Math.abs(t) : 1
            },
            e.prototype.total = function(t) {
                return a(this, void 0, void 0,
                function() {
                    var e, o;
                    return s(this,
                    function(n) {
                        switch (n.label) {
                        case 0:
                            return this.scrollView.stopAutoScroll(),
                            this.scrollView.release(),
                            this.initlized(),
                            [4, this.asyncCreateItem(t)];
                        case 1:
                            return n.sent(),
                            e = this.getDataOffset(t),
                            o = this.getReallyOffset(e),
                            this.refreshItems(t, o),
                            this._maxItemTotal = t,
                            [2]
                        }
                    })
                })
            },
            e.prototype.getBrotherNode = function(t) {
                var e = this.getSiblingIndex(t) - 1;
                return this._children[e]
            },
            e.prototype.isGroupHeader = function(t) {
                var e = this.getGroupHeader(t),
                o = this.vertical ? cc.v2(e.x, 0) : cc.v2(0, e.y);
                return (this.vertical ? cc.v2(t.x, 0) : cc.v2(0, t.y)).fuzzyEquals(o, 1e-4)
            },
            e.prototype.isGroupFooter = function(t) {
                var e = this.getGroupFooter(t),
                o = this.vertical ? cc.v2(e.x, 0) : cc.v2(0, e.y);
                return (this.vertical ? cc.v2(t.x, 0) : cc.v2(0, t.y)).fuzzyEquals(o, 1e-4)
            },
            e.prototype.getGroupHeader = function(t) {
                var e = cc.Vec2.ZERO;
                return t ? (this.vertical ? this.headerToFooter ? (e.x = t.anchorX * this.getScaleWidth(t) + this.paddingLeft * t.scaleX - this.node.anchorX * this.viewSize.width * t.scaleX, e.y = (1 - t.anchorY) * -this.getScaleHeight(t) - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height) : (e.x = t.anchorX * this.getScaleWidth(t) + this.paddingLeft - this.node.anchorX * this.viewSize.width, e.y = t.anchorY * this.getScaleHeight(t) + this.paddingBottom - this.node.anchorY * this.viewSize.height) : this.headerToFooter ? (e.x = t.anchorX * this.getScaleWidth(t) + this.paddingLeft - this.node.anchorX * this.viewSize.width, e.y = (1 - t.anchorY) * -t.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height) : (e.x = this.accommodWidth * this.node.anchorX - this.getScaleWidth(t) * (1 - t.anchorX), e.y = (1 - t.anchorY) * -t.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height), e) : e
            },
            e.prototype.getGroupFooter = function(t) {
                var e = cc.Vec2.ZERO;
                return t ? (this.vertical ? (e.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(t) * (1 - t.anchorX) + this.node.anchorX * this.paddingRight), e.y = t.y) : (e.x = t.x, e.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(t) * t.anchorY) + (1 - t.anchorY) * this.paddingBottom), e) : e
            },
            e.prototype.getGroupRightX = function(t, e) {
                return t && e ? e.x + this.getScaleWidth(e) * (1 - e.anchorX) + this.getScaleWidth(t) * t.anchorX + this.spacing.x: this.getGroupHeader(t).x
            },
            e.prototype.getGroupLeftX = function(t, e) {
                return t && e ? e.x - this.getScaleWidth(e) * e.anchorX - this.getScaleWidth(t) * (1 - t.anchorX) - this.spacing.x: this.getGroupFooter(t).x
            },
            e.prototype.getGroupBottomY = function(t, e) {
                return e.y - this.getScaleHeight(e) * e.anchorY - this.getScaleHeight(t) * (1 - t.anchorY) - this.spacing.y
            },
            e.prototype.getGroupTopY = function(t, e) {
                return e.y + this.getScaleHeight(e) * (1 - e.anchorY) + this.getScaleHeight(t) * t.anchorY + this.spacing.y
            },
            e.prototype.isOutOfBoundaryHeader = function(t, e) {
                void 0 === e && (e = 1.5);
                var o = t.width * this.getUsedScaleValue(t.scaleX) * e,
                n = -t.height * this.getUsedScaleValue(t.scaleY) * e;
                return this.scrollView.getHowMuchOutOfBoundary(cc.v2(o, n))
            },
            e.prototype.isOutOfBoundaryFooter = function(t, e) {
                void 0 === e && (e = 1.5);
                var o = -t.width * this.getUsedScaleValue(t.scaleX) * e,
                n = t.height * this.getUsedScaleValue(t.scaleY) * e;
                return this.scrollView.getHowMuchOutOfBoundary(cc.v2(o, n))
            },
            e.prototype.scrollToHeader = function(t, e) {
                this.scrollToHeaderOrFooter = t > 0,
                this.scrollView.stopAutoScroll(),
                this.resetToHeader(),
                this.headerToFooter ? this.vertical ? this.scrollView.scrollToTop(t, e) : this.scrollView.scrollToLeft(t, e) : this.vertical ? this.scrollView.scrollToBottom(t, e) : this.scrollView.scrollToRight(t, e)
            },
            e.prototype.scrollToFooter = function(t, e) {
                this.scrollToHeaderOrFooter = t > 0,
                this.scrollView.stopAutoScroll(),
                this.resetToFooter(),
                this.headerToFooter ? this.vertical ? this.scrollView.scrollToBottom(t, e) : this.scrollView.scrollToRight(t, e) : this.vertical ? this.scrollView.scrollToTop(t, e) : this.scrollView.scrollToLeft(t, e)
            },
            e.prototype.notifyRefreshItem = function(t) {
                cc.Component.EventHandler.emitEvents(this.refreshItemEvents, t, t.index)
            },
            e.prototype.getSiblingIndex = function(t) {
                return this._children.indexOf(t)
            },
            e.prototype.setSiblingIndex = function(t, e) {
                e = -1 !== e ? e: this._children.length - 1;
                var n = this._children.indexOf(t);
                e !== n && (this._children.splice(n, 1), e < this._children.length ? this._children.splice(e, 0, t) : this._children.push(t), this.node.emit(o.UIChangeBrotherEvnet))
            },
            e.prototype.onLoad = function() {
                this.initlized()
            },
            e.prototype.initlized = function() {
                this._isinited || (this.node.anchorX = .5, this.node.anchorY = .5, this.node.setContentSize(this.viewSize), this.node.getContentSize = this.getContentSize.bind(this), this.node.setPosition(cc.Vec2.ZERO), this.column = this.column < 1 ? 1 : this.column, this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this), this.scrollView.view.on(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this), this._isinited = !0)
            },
            e.prototype.onDestroy = function() {
                this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this),
                this.scrollView.view.off(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this)
            },
            e.prototype.onChangePosition = function() {
                var t = this.isScrollToFooter;
                this.headerToFooter ? t ? this.footerToHeaderWatchChilds(t) : this.headerToFooterWatchChilds(t) : t ? this.headerToFooterWatchChilds(t) : this.footerToHeaderWatchChilds(t),
                (this.vertical && 0 == this.node.y || this.horizontal && 0 == this.node.x) && this.header.setPosition(this.getGroupHeader(this.header))
            },
            e.prototype.resetItemSize = function() {
                if (0 != this.children.length) {
                    for (var t = 0; t < this.children.length; t++) this.children[t].saveOriginSize();
                    var e = this.getGroupHeader(this.header);
                    for (this.vertical ? this.header.x = e.x: this.header.y = e.y, t = 0; t < this.children.length; t++) this.children[t].emit(cc.Node.EventType.POSITION_CHANGED)
                }
            },
            e.prototype.getScaleWidth = function(t) {
                return t.width * this.getUsedScaleValue(t.scaleX)
            },
            e.prototype.getScaleHeight = function(t) {
                return t.height * this.getUsedScaleValue(t.scaleY)
            },
            e.prototype.getTempChildren = function() {
                for (var t = [], e = 0; e < this._children.length; e++) {
                    var o = this._children[e];
                    t.push(o)
                }
                return t
            },
            e.prototype.headerToFooterWatchChilds = function(t) {
                for (var e = this.getTempChildren(), o = 0; o < e.length; o++) e[o].watchSelf(t)
            },
            e.prototype.footerToHeaderWatchChilds = function(t) {
                for (var e = this.getTempChildren(), o = e.length - 1; o >= 0; o--) e[o].watchSelf(t)
            },
            e.prototype.getDataOffset = function(t) {
                if (this.footer && this.footer.index + 1 >= t) {
                    var e = this.footer.index + 1 - t;
                    return 0 == e ? 0 : -e
                }
                return 0 == this._maxItemTotal || t < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal ? 0 : this.isGroupFooter(this.footer) ? 0 : t - this._maxItemTotal
            },
            e.prototype.getReallyOffset = function(t) {
                if (!this.header) return 0;
                if (t > 0) {
                    for (var e = 0; e < t; e++) {
                        if (this.isGroupFooter(this.footer)) return e;
                        var o = this.header.getPosition();
                        this.vertical ? this.isGroupFooter(this.header) ? (this.headerToFooter ? o.y = this.getGroupBottomY(this.header, this.header) : o.y = this.getGroupTopY(this.header, this.header), o.x = this.getGroupHeader(this.header).x) : o.x = this.getGroupRightX(this.header, this.header) : this.isGroupFooter(this.header) ? (this.headerToFooter ? o.x = this.getGroupRightX(this.header, this.header) : o.x = this.getGroupLeftX(this.header, this.header), o.y = this.getGroupHeader(this.header).y) : o.y = this.getGroupBottomY(this.header, this.header),
                        this.header.setPosition(o)
                    }
                    return t
                }
                for (e = 0; e < Math.abs(t); e++) o = cc.Vec2.ZERO,
                this.vertical ? this.isGroupHeader(this.header) ? (o.x = this.getGroupFooter(this.header).x, this.headerToFooter ? o.y = this.getGroupTopY(this.header, this.header) : o.y = this.getGroupBottomY(this.header, this.header)) : (o.x = this.getGroupLeftX(this.header, this.header), o.y = this.header.y) : this.isGroupHeader(this.header) ? (o.y = this.getGroupFooter(this.header).y, this.headerToFooter ? o.x = this.getGroupLeftX(this.header, this.header) : o.x = this.getGroupRightX(this.header, this.header)) : (o.y = this.getGroupTopY(this.header, this.header), o.x = this.header.x),
                this.header.setPosition(o);
                return this.scrollView.calculateBoundary(),
                t
            },
            e.prototype.refreshItems = function(t, e) {
                if (void 0 === e && (e = 0), this.header) for (var o = this.header.index - 1 + e,
                n = 0; n < this._children.length; n++) {
                    var i = this._children[n]; ++o > t - 1 ? o = 0 : o < 0 && (o = t - 1),
                    i.index = o,
                    this.notifyRefreshItem(i)
                }
            },
            e.prototype.resetToHeader = function() {
                for (var t, e, o = 0; o < this._children.length; o++) {
                    var n = this._children[o];
                    n.index = o,
                    this.notifyRefreshItem(n)
                }
                this.headerLoop || this.footerLoop ? this.scrollToHeaderOrFooter || null === (e = this.header) || void 0 === e || e.setPosition(this.getGroupHeader(this.header)) : null === (t = this.header) || void 0 === t || t.setPosition(this.getGroupHeader(this.header))
            },
            e.prototype.resetToFooter = function() {
                for (var t = this._maxItemTotal,
                e = this._children.length - 1; e >= 0; e--) {
                    var o = this._children[e];
                    o.index = --t,
                    this.notifyRefreshItem(o)
                }
            },
            e.prototype.removeChilds = function(t) {
                for (var e = this.node.childrenCount - t,
                o = 0; o < e; o++) {
                    var n = this.footer;
                    this.remChild(n),
                    n.destroy(),
                    this.node.removeChild(n)
                }
                if (this.header) {
                    var i = this.getGroupHeader(this.header);
                    this.vertical ? this.header.x = i.x: this.header.y = i.y
                }
            },
            e.prototype.asyncCreateItem = function(t) {
                var e;
                return a(this, void 0, void 0,
                function() {
                    var o, n = this;
                    return s(this,
                    function(i) {
                        switch (i.label) {
                        case 0:
                            return null === (e = this._gener) || void 0 === e || e.
                            return (""),
                            this.node.childrenCount > t ? [2, this.removeChilds(t)] : this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount ? [2] : (o = t - this.node.childrenCount, this._gener = this.getGeneratorLength(o,
                            function() {
                                var t = cc.instantiate(n.prefab);
                                t.index = n.node.childrenCount,
                                n.addChild(t);
                                var e, o, i = t.getComponent(p.
                            default) || t.addComponent(p.
                            default);
                                if (n.node.addChild(t), i.init(n), n.notifyRefreshItem(t), 1 == n.node.childrenCount) {
                                    var r = n.getGroupHeader(n.header);
                                    n.header.setPosition(r),
                                    n.scrollView.calculateBoundary()
                                }
                                return n.vertical ? (e = n.getReallySize().height, o = n.viewSize.height) : (e = n.getReallySize().width, o = n.viewSize.width),
                                !(e >= o * n.multiple && n.isGroupFooter(n.footer) && (n._maxPrefabTotal = n.node.childrenCount, 1))
                            }), [4, this.exeGenerator(this._gener, 10)]);
                        case 1:
                            return i.sent(),
                            [2]
                        }
                    })
                })
            },
            e.prototype.addChild = function(t) {
                this._children.push(t),
                this.node.emit(o.UIChangeBrotherEvnet)
            },
            e.prototype.remChild = function(t) {
                var e = this._children.indexOf(t); - 1 != e && (this._children.splice(e, 1), this.node.emit(o.UIChangeBrotherEvnet))
            },
            e.prototype.getGeneratorLength = function(t, e) {
                var o, n, i = [];
                for (o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                return s(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        n = 0,
                        o.label = 1;
                    case 1:
                        return n < t ? e.apply(void 0, c([n], i)) ? [4] : [3, 3] : [3, 5];
                    case 2:
                        return o.sent(),
                        [3, 4];
                    case 3:
                        return [2];
                    case 4:
                        return n++,
                        [3, 1];
                    case 5:
                        return [2]
                    }
                })
            },
            e.prototype.exeGenerator = function(t, e) {
                return new Promise(function(o) {
                    var n = t,
                    i = function() {
                        for (var t = (new Date).getTime(), r = n.next();; r = n.next()) {
                            if (null == r || r.done) return void o(null);
                            if ((new Date).getTime() - t > e) return void setTimeout(function() {
                                return i()
                            },
                            1e3 * cc.director.getDeltaTime())
                        }
                    };
                    i()
                })
            },
            r([_({
                type: cc.Enum(l),
                displayName: "排列方向"
            })], e.prototype, "startAxis", void 0),
            r([_({
                type: cc.Enum(u),
                displayName: "排列子节点的方向"
            })], e.prototype, "direction", void 0),
            r([_({
                displayName: "上边距"
            })], e.prototype, "paddingTop", void 0),
            r([_({
                displayName: "下边距"
            })], e.prototype, "paddingBottom", void 0),
            r([_({
                displayName: "左边距"
            })], e.prototype, "paddingLeft", void 0),
            r([_({
                displayName: "右边距"
            })], e.prototype, "paddingRight", void 0),
            r([_({
                displayName: "间隔"
            })], e.prototype, "spacing", void 0),
            r([_({
                displayName: "每组item个数",
                tooltip: "单行的列数 或 单列的行数"
            })], e.prototype, "column", void 0),
            r([_({
                displayName: "item创建倍率",
                tooltip: "相对于view的尺寸 默认2倍"
            })], e.prototype, "multiple", void 0),
            r([_({
                type: cc.Prefab,
                displayName: "item Prefab"
            })], e.prototype, "prefab", void 0),
            r([_({
                displayName: "头部滑动循环"
            })], e.prototype, "headerLoop", void 0),
            r([_({
                displayName: "尾部滑动循环"
            })], e.prototype, "footerLoop", void 0),
            r([_], e.prototype, "affectedByScale", void 0),
            r([_(cc.Component.EventHandler)], e.prototype, "refreshItemEvents", void 0),
            r([f, g("UISuperLayout")], e)
        } (cc.Component);
        o.
    default = y,
        cc._RF.pop()
    },
    {
        "./UISuperItem": "UISuperItem",
        "./UISuperScrollView": "UISuperScrollView"
    }],
    UISuperScrollView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0d2f3RtwCJHDIOnjZn6f3x/", "UISuperScrollView");
        var n, i = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
        r = this && this.__decorate ||
        function(t, e, o, n) {
            var i, r = arguments.length,
            a = r < 3 ? e: null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./UISuperLayout"),
        s = cc._decorator,
        c = s.ccclass,
        l = s.property,
        u = s.menu,
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.headerOutOffset = 200,
                e.headerMultiple = 2,
                e.footerOutOffset = 200,
                e.footerMultiple = 2,
                e.pullDownEvents = [],
                e.pullUpEvents = [],
                e.isMoveHeader = !1,
                e.isMoveFooter = !1,
                e.isLockHeader = !1,
                e.isLockFooter = !1,
                e.headerProgress = 0,
                e.footerProgress = 0,
                e._layout = null,
                e
            }
            return i(e, t),
            Object.defineProperty(e.prototype, "view", {
                get: function() {
                    return this._view
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "autoScrolling", {
                get: function() {
                    return this._autoScrolling
                },
                set: function(t) {
                    this._autoScrolling = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "layout", {
                get: function() {
                    return null == this._layout && (this._layout = this.content.getComponent(a.
                default)),
                    this._layout
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isHeader", {
                get: function() {
                    var t, e, o, n;
                    if (this.layout.headerToFooter) {
                        if (null === (t = this.layout) || void 0 === t ? void 0 : t.header) return 0 == (null === (e = this.layout) || void 0 === e ? void 0 : e.header.index)
                    } else if (null === (o = this.layout) || void 0 === o ? void 0 : o.footer) return (null === (n = this.layout) || void 0 === n ? void 0 : n.footer.index) == this.layout.maxItemTotal - 1;
                    return ! 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isFooter", {
                get: function() {
                    var t, e, o;
                    if (this.layout.headerToFooter) {
                        if (null === (t = this.layout) || void 0 === t ? void 0 : t.footer) return this.layout.footer.index == this.layout.maxItemTotal - 1
                    } else if (null === (e = this.layout) || void 0 === e ? void 0 : e.header) return 0 == (null === (o = this.layout) || void 0 === o ? void 0 : o.header.index);
                    return ! 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isCalculPull", {
                get: function() {
                    return this.pullDownEvents.length > 0 || this.pullUpEvents.length > 0
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.calculateBoundary = function() {
                this._calculateBoundary()
            },
            e.prototype.getHowMuchOutOfBoundary = function(t) {
                return this._getHowMuchOutOfBoundary(t)
            },
            e.prototype.onLoad = function() {
                this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this)
            },
            e.prototype.onDestroy = function() {
                this.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this)
            },
            e.prototype.onChangeSize = function() {
                var t = this.view.getComponent(cc.Widget);
                t && t.updateAlignment()
            },
            e.prototype.release = function() {
                if (this.isMoveHeader = !1, this.isMoveFooter = !1, this.isLockHeader || this.isLockFooter) {
                    var t = this.getHowMuchOutOfBoundary(),
                    e = this.vertical ? t.y: -t.x,
                    o = !0; (0 == e || this.isLockHeader && e < 0 || this.isLockFooter && e > 0) && (this.clearProgress(), o = !1),
                    this.isLockHeader = !1,
                    this.isLockFooter = !1,
                    o && (this._outOfBoundaryAmountDirty = !0, this._processInertiaScroll())
                } else this.clearProgress()
            },
            e.prototype.reset = function() {
                this._outOfBoundaryAmountDirty = !0,
                this.getHowMuchOutOfBoundary().fuzzyEquals(cc.v2(0, 0), 1e-4) || this._processInertiaScroll()
            },
            e.prototype._onTouchMoved = function(e, o) {
                if (t.prototype._onTouchMoved.call(this, e, o), this.isCalculPull) {
                    var n = this.getHowMuchOutOfBoundary(),
                    i = this.vertical ? n.y: -n.x;
                    i > 0 && this.isHeader && !this.isLockHeader && !this.isLockFooter ? (this.headerProgress = i < 1e-4 ? 0 : i / this.headerOutOffset, this.isMoveHeader = this.headerProgress >= this.headerMultiple, this.emitPullDownEvent({
                        action: !1,
                        progress: this.headerProgress,
                        progressStage: this.isMoveHeader ? "wait": "touch"
                    }), this.emitPullUpEvent({
                        action: !1,
                        progress: 0,
                        progressStage: "release"
                    })) : i < 0 && this.isFooter && !this.isLockFooter && !this.isLockHeader && (this.footerProgress = -i < 1e-4 ? 0 : -i / this.footerOutOffset, this.isMoveFooter = this.footerProgress >= this.footerMultiple, this.emitPullUpEvent({
                        action: !1,
                        progress: this.footerProgress,
                        progressStage: this.isMoveFooter ? "wait": "touch"
                    }), this.emitPullDownEvent({
                        action: !1,
                        progress: 0,
                        progressStage: "release"
                    }))
                }
            },
            e.prototype._dispatchEvent = function(e) {
                t.prototype._dispatchEvent.call(this, e),
                "scroll-ended" == e && (this.layout.scrollToHeaderOrFooter = !1)
            },
            e.prototype._getContentTopBoundary = function() {
                var t, e = this.view.getContentSize(),
                o = 0;
                return o = (null === (t = this.layout) || void 0 === t ? void 0 : t.header) && this.layout.getReallySize().height > e.height ? this.layout.topBoundary: this._getContentBottomBoundary() + e.height,
                this.isHeader && this.isLockHeader && (o += this.headerOutOffset),
                o
            },
            e.prototype._getContentBottomBoundary = function() {
                var t, e = this.view.getContentSize(),
                o = 0;
                return o = (null === (t = this.layout) || void 0 === t ? void 0 : t.footer) && this.layout.getReallySize().height > e.height ? this.layout.bottomBoundary: this.layout.node.y - this.layout.node.getAnchorPoint().y * e.height,
                this.isFooter && this.isLockFooter && (o -= this.footerOutOffset),
                o
            },
            e.prototype._getContentLeftBoundary = function() {
                var t, e = this.view.getContentSize(),
                o = 0;
                return o = (null === (t = this.layout) || void 0 === t ? void 0 : t.header) && this.layout.getReallySize().width > e.width ? this.layout.leftBoundary: this.layout.node.x - this.layout.node.getAnchorPoint().x * e.width,
                this.isHeader && this.isLockHeader && (o -= this.headerOutOffset),
                o
            },
            e.prototype._getContentRightBoundary = function() {
                var t, e = this.view.getContentSize(),
                o = 0;
                return o = (null === (t = this.layout) || void 0 === t ? void 0 : t.footer) && this.layout.getReallySize().width > e.width ? this.layout.rightBoundary: this._getContentLeftBoundary() + e.width,
                this.isFooter && this.isLockFooter && (o += this.footerOutOffset),
                o
            },
            e.prototype._startAutoScroll = function(e, o, n) {
                this.isCalculPull && (this.isMoveHeader && !this.isLockHeader ? (this.isLockHeader = !0, this.vertical && (e.y -= this.headerOutOffset), this.horizontal && (e.x += this.headerOutOffset), this.emitPullDownEvent({
                    action: !0,
                    progress: this.headerProgress,
                    progressStage: "lock"
                })) : this.isMoveFooter && !this.isLockFooter && (this.isLockFooter = !0, this.vertical && (e.y += this.footerOutOffset), this.horizontal && (e.x -= this.footerOutOffset), this.emitPullUpEvent({
                    action: !0,
                    progress: this.footerProgress,
                    progressStage: "lock"
                }))),
                t.prototype._startAutoScroll.call(this, e, o, n)
            },
            e.prototype._updateScrollBar = function(e) {
                if (t.prototype._updateScrollBar.call(this, e), this.isCalculPull && !this._autoScrollBraking && this.autoScrolling) {
                    var o = this.vertical ? e.y: -e.x;
                    if (o > 0) {
                        var n = o < 1e-4 ? 0 : o / this.headerOutOffset,
                        i = void 0;
                        this.isLockHeader ? (this.headerProgress = 1 == this.headerProgress ? this.headerProgress: Math.max(n, 1), i = "lock") : (this.headerProgress = n < this.headerProgress ? n: this.headerProgress, i = "release"),
                        this.emitPullDownEvent({
                            action: !1,
                            progress: this.headerProgress,
                            progressStage: i
                        })
                    } else o < 0 ? (n = -o < 1e-4 ? 0 : -o / this.footerOutOffset, i = void 0, this.isLockFooter ? (this.footerProgress = 1 == this.footerProgress ? this.footerProgress: Math.max(n, 1), i = "lock") : (this.footerProgress = n < this.footerProgress ? n: this.footerProgress, i = "release"), this.emitPullUpEvent({
                        action: !1,
                        progress: this.footerProgress,
                        progressStage: i
                    })) : 0 == o && (this.isLockHeader || this.isLockFooter || this.clearProgress())
                }
            },
            e.prototype.clearProgress = function() {
                this.headerProgress = 0,
                this.footerProgress = 0,
                this.emitPullDownEvent({
                    action: !1,
                    progress: 0,
                    progressStage: "release"
                }),
                this.emitPullUpEvent({
                    action: !1,
                    progress: 0,
                    progressStage: "release"
                })
            },
            e.prototype.emitPullDownEvent = function(t) {
                cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, t)
            },
            e.prototype.emitPullUpEvent = function(t) {
                cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, t)
            },
            r([l({
                displayName: "顶部偏移量",
                tooltip: "下拉时超过此偏移会发送下拉事件"
            })], e.prototype, "headerOutOffset", void 0),
            r([l({
                displayName: "满足触发Header的倍数"
            })], e.prototype, "headerMultiple", void 0),
            r([l({
                displayName: "底部偏移量",
                tooltip: "上拉时超过此偏移会发送上拉事件"
            })], e.prototype, "footerOutOffset", void 0),
            r([l({
                displayName: "满足触发Footer的倍数"
            })], e.prototype, "footerMultiple", void 0),
            r([l({
                type: cc.Component.EventHandler,
                displayName: "下拉事件"
            })], e.prototype, "pullDownEvents", void 0),
            r([l({
                type: cc.Component.EventHandler,
                displayName: "上拉事件"
            })], e.prototype, "pullUpEvents", void 0),
            r([c, u("UISpuerScrollView")], e)
        } (cc.ScrollView);
        o.
    default = h,
        cc._RF.pop()
    },
    {
        "./UISuperLayout": "UISuperLayout"
    }],
    WebHistoryManager: [function(t, e) {
        "use strict";
        cc._RF.push(e, "2f788pm+uxOWbG6QWT4X6r4", "WebHistoryManager");
        var o, n = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            })(t, e)
        },
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }); (function(t) {
            function e() {
                var e = t.call(this) || this;
                e.operations = [],
                e.curPage = 0,
                e.curUrlSurffix = "",
                e.innerDocClick = !1,
                e.timer = null,
                e.getSharps = function(t) {
                    for (var e = "",
                    o = 0; o < t; ++o) e += "#";
                    return e
                };
                var o = e;
                return document.addEventListener("touchstart",
                function() {
                    o.innerDocClick = !1,
                    setTimeout(function() {
                        document.body.scrollTop = document.body.scrollHeight
                    },
                    300)
                }),
                window.onpopstate = function(t) {
                    t.state && "PAYNAV" == t.state.name && history.go( - 2)
                },
                document.addEventListener("touchmove",
                function() {
                    o.innerDocClick = !0,
                    o.timer && (clearTimeout(o.timer), o.timer = null)
                }),
                document.addEventListener("touchend",
                function() {
                    o.timer = setTimeout(function() {
                        o.innerDocClick = !1
                    },
                    500)
                }),
                window.onhashchange = function() {
                    for (var t = location.href,
                    e = "",
                    n = t.length - 1; n >= 0; n--) if ("#" != t.substr(n, 1)) {
                        n < t.length - 1 && (e = t.substr(n + 1));
                        break
                    }
                    o.onHistoryChanged(e, o.innerDocClick),
                    o.innerDocClick = !1
                },
                e
            }
            n(e, t),
            e.prototype.setPage = function(t) {
                t < this.curPage ? window.history.back() : t != this.curPage && t > this.curPage && this.pushOperation(null, null)
            },
            e.prototype.go = function() {
                this.setPage(this.curPage + 1)
            },
            e.prototype.back = function() {
                this.innerDocClick = !1,
                this.timer && (clearTimeout(this.timer), this.timer = null),
                this.setPage(this.curPage - 1)
            },
            e.prototype.pushOperation = function(t, e) {
                this.curUrlSurffix = this.curUrlSurffix + "#",
                this.curUrlSurffix;
                var o = !1;
                if (this.operations.length > 0) for (var n = 0,
                i = this.operations; n < i.length; n++) {
                    var r = i[n];
                    if (r.key == this.curUrlSurffix) {
                        r.redo = t,
                        r.undo = e,
                        o = !0;
                        break
                    }
                }
                o || this.operations.push({
                    key: this.curUrlSurffix,
                    redo: t,
                    undo: e
                }),
                window.location.href = this.curUrlSurffix,
                this.curPage = this.curPage + 1
            },
            e.prototype.setCurUndo = function(t) {
                var e = !1;
                if (this.operations.length > 0) for (var o = 0,
                n = this.operations; o < n.length; o++) {
                    var i = n[o];
                    if (i.key == this.curUrlSurffix) {
                        i.undo = t,
                        e = !0;
                        break
                    }
                }
                e || this.operations.push({
                    key: this.curUrlSurffix,
                    redo: null,
                    undo: t
                })
            },
            e.prototype.setCurRedo = function(t) {
                var e = !1;
                if (this.operations.length > 0) for (var o = 0,
                n = this.operations; o < n.length; o++) {
                    var i = n[o];
                    if (i.key == this.curUrlSurffix) {
                        i.redo = t,
                        e = !0;
                        break
                    }
                }
                e || this.operations.push({
                    key: this.curUrlSurffix,
                    redo: t,
                    undo: null
                })
            },
            e.prototype.onHistoryChanged = function(t, e) {
                var o = this.curUrlSurffix;
                this.curUrlSurffix = t;
                var n = o.length,
                i = t.length;
                if (i < n) for (var r = n; r > i; r--) {
                    this.curPage = this.curPage - 1;
                    var a = null;
                    if (this.operations.length > 0) for (var s = 0,
                    c = this.operations; s < c.length; s++) if ((d = c[s]).key == this.getSharps(r)) {
                        a = d;
                        break
                    }
                    null == a || null == a.undo || e ? null != a && null != a.undo && e && a.undo(!1) : a.undo(!0)
                } else if (i > n) for (var l = n + 1; l <= i; l++) {
                    this.curPage = this.curPage + 1;
                    var u = null;
                    if (this.operations.length > 0) for (var h = 0,
                    p = this.operations; h < p.length; h++) {
                        var d;
                        if ((d = p[h]).key == this.getSharps(l)) {
                            u = d;
                            break
                        }
                    }
                    null != u && null != u.redo && u.redo()
                }
            },
            Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this.singleton && (this.singleton = new e),
                    this.singleton
                },
                enumerable: !1,
                configurable: !0
            }),
            e.EVENT_HISTORY_BACK = "EVENT_HISTORY_BACK"
        })(EventTarget),
        cc._RF.pop()
    },
    {}],
    distConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "34bffZVpTxNs56nEMndvu89", "distConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.distConfig = void 0;
        var n = function() {
            function t() {}
            return t.showDebugMsg = !1,
            t.channel = "20000",
            t.logonAddr = "wss://zww-qa-ws.njmqhs.cn",
            t.wx = !1,
            t.url = "http://h5.njmqhs.cn/webtest/index.html?env=test",
            t.updateTime = "7gyou H5 v1.0.7 build 1805291810",
            t
        } ();
        o.distConfig = n,
        cc._RF.pop()
    },
    {}],
    "jweixin-1.6.0": [function(t, e) {
        "use strict";
        cc._RF.push(e, "83708tNhPdGF7Yahlwhu1Fq", "jweixin-1.6.0"),
        function(t, e) {
            "function" == typeof define && (define.amd || define.cmd) ? define(function() {
                return e(t)
            }) : e(t, !0)
        } (window,
        function(t, e) {
            if (!t.jWeixin) {
                var o, n, i = {
                    config: "preVerifyJSAPI",
                    onMenuShareTimeline: "menu:share:timeline",
                    onMenuShareAppMessage: "menu:share:appmessage",
                    onMenuShareQQ: "menu:share:qq",
                    onMenuShareWeibo: "menu:share:weiboApp",
                    onMenuShareQZone: "menu:share:QZone",
                    previewImage: "imagePreview",
                    getLocation: "geoLocation",
                    openProductSpecificView: "openProductViewWithPid",
                    addCard: "batchAddCard",
                    openCard: "batchViewCard",
                    chooseWXPay: "getBrandWCPayRequest",
                    openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                    startSearchBeacons: "startMonitoringBeacons",
                    stopSearchBeacons: "stopMonitoringBeacons",
                    onSearchBeacons: "onBeaconsInRange",
                    consumeAndShareCard: "consumedShareCard",
                    openAddress: "editAddress"
                },
                r = function() {
                    var t = {};
                    for (var e in i) t[i[e]] = e;
                    return t
                } (),
                a = t.document,
                s = a.title,
                c = navigator.userAgent.toLowerCase(),
                l = navigator.platform.toLowerCase(),
                u = !(!l.match("mac") && !l.match("win")),
                h = -1 != c.indexOf("wxdebugger"),
                p = -1 != c.indexOf("micromessenger"),
                d = -1 != c.indexOf("android"),
                f = -1 != c.indexOf("iphone") || -1 != c.indexOf("ipad"),
                _ = (n = c.match(/micromessenger\/(\d+\.\d+\.\d+)/) || c.match(/micromessenger\/(\d+\.\d+)/)) ? n[1] : "",
                g = {
                    initStartTime: M(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                },
                y = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    isPreVerifyOk: 1,
                    systemType: f ? 1 : d ? 2 : -1,
                    clientVersion: _,
                    url: encodeURIComponent(location.href)
                },
                m = {},
                v = {
                    _completes: []
                },
                b = {
                    state: 0,
                    data: {}
                };
                x(function() {
                    g.initEndTime = M()
                });
                var w = !1,
                T = [],
                P = ((o = {
                    config: function(e) {
                        D("config", m = e);
                        var o = !1 !== m.check;
                        x(function() {
                            if (o) O(i.config, {
                                verifyJsApiList: k(m.jsApiList),
                                verifyOpenTagList: k(m.openTagList)
                            },
                            function() {
                                v._complete = function(t) {
                                    g.preVerifyEndTime = M(),
                                    b.state = 1,
                                    b.data = t
                                },
                                v.success = function() {
                                    y.isPreVerifyOk = 0
                                },
                                v.fail = function(t) {
                                    v._fail ? v._fail(t) : b.state = -1
                                };
                                var t = v._completes;
                                return t.push(function() { !
                                    function() {
                                        if (! (u || h || m.debug || _ < "6.0.2" || y.systemType < 0)) {
                                            var t = new Image;
                                            y.appId = m.appId,
                                            y.initTime = g.initEndTime - g.initStartTime,
                                            y.preVerifyTime = g.preVerifyEndTime - g.preVerifyStartTime,
                                            P.getNetworkType({
                                                isInnerInvoke: !0,
                                                success: function(e) {
                                                    y.networkType = e.networkType;
                                                    var o = "https://open.weixin.qq.com/sdk/report?v=" + y.version + "&o=" + y.isPreVerifyOk + "&s=" + y.systemType + "&c=" + y.clientVersion + "&a=" + y.appId + "&n=" + y.networkType + "&i=" + y.initTime + "&p=" + y.preVerifyTime + "&u=" + y.url;
                                                    t.src = o
                                                }
                                            })
                                        }
                                    } ()
                                }),
                                v.complete = function() {
                                    for (var e = 0,
                                    o = t.length; e < o; ++e) t[e]();
                                    v._completes = []
                                },
                                v
                            } ()),
                            g.preVerifyStartTime = M();
                            else {
                                b.state = 1;
                                for (var t = v._completes,
                                e = 0,
                                n = t.length; e < n; ++e) t[e]();
                                v._completes = []
                            }
                        }),
                        P.invoke || (P.invoke = function(e, o, n) {
                            t.WeixinJSBridge && WeixinJSBridge.invoke(e, R(o), n)
                        },
                        P.on = function(e, o) {
                            t.WeixinJSBridge && WeixinJSBridge.on(e, o)
                        })
                    },
                    ready: function(t) {
                        0 != b.state ? t() : (v._completes.push(t), !p && m.debug && t())
                    },
                    error: function(t) {
                        _ < "6.0.2" || ( - 1 == b.state ? t(b.data) : v._fail = t)
                    },
                    checkJsApi: function(t) {
                        O("checkJsApi", {
                            jsApiList: k(t.jsApiList)
                        },
                        (t._complete = function(t) {
                            if (d) {
                                var e = t.checkResult;
                                e && (t.checkResult = JSON.parse(e))
                            }
                            t = function(t) {
                                var e = t.checkResult;
                                for (var o in e) {
                                    var n = r[o];
                                    n && (e[n] = e[o], delete e[o])
                                }
                                return t
                            } (t)
                        },
                        t))
                    },
                    onMenuShareTimeline: function(t) {
                        I(i.onMenuShareTimeline, {
                            complete: function() {
                                O("shareTimeline", {
                                    title: t.title || s,
                                    desc: t.title || s,
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href,
                                    type: t.type || "link",
                                    data_url: t.dataUrl || ""
                                },
                                t)
                            }
                        },
                        t)
                    },
                    onMenuShareAppMessage: function(t) {
                        I(i.onMenuShareAppMessage, {
                            complete: function(e) {
                                "favorite" === e.scene ? O("sendAppMessage", {
                                    title: t.title || s,
                                    desc: t.desc || "",
                                    link: t.link || location.href,
                                    img_url: t.imgUrl || "",
                                    type: t.type || "link",
                                    data_url: t.dataUrl || ""
                                }) : O("sendAppMessage", {
                                    title: t.title || s,
                                    desc: t.desc || "",
                                    link: t.link || location.href,
                                    img_url: t.imgUrl || "",
                                    type: t.type || "link",
                                    data_url: t.dataUrl || ""
                                },
                                t)
                            }
                        },
                        t)
                    },
                    onMenuShareQQ: function(t) {
                        I(i.onMenuShareQQ, {
                            complete: function() {
                                O("shareQQ", {
                                    title: t.title || s,
                                    desc: t.desc || "",
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href
                                },
                                t)
                            }
                        },
                        t)
                    },
                    onMenuShareWeibo: function(t) {
                        I(i.onMenuShareWeibo, {
                            complete: function() {
                                O("shareWeiboApp", {
                                    title: t.title || s,
                                    desc: t.desc || "",
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href
                                },
                                t)
                            }
                        },
                        t)
                    },
                    onMenuShareQZone: function(t) {
                        I(i.onMenuShareQZone, {
                            complete: function() {
                                O("shareQZone", {
                                    title: t.title || s,
                                    desc: t.desc || "",
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href
                                },
                                t)
                            }
                        },
                        t)
                    },
                    updateTimelineShareData: function(t) {
                        O("updateTimelineShareData", {
                            title: t.title,
                            link: t.link,
                            imgUrl: t.imgUrl
                        },
                        t)
                    },
                    updateAppMessageShareData: function(t) {
                        O("updateAppMessageShareData", {
                            title: t.title,
                            desc: t.desc,
                            link: t.link,
                            imgUrl: t.imgUrl
                        },
                        t)
                    },
                    startRecord: function(t) {
                        O("startRecord", {},
                        t)
                    },
                    stopRecord: function(t) {
                        O("stopRecord", {},
                        t)
                    },
                    onVoiceRecordEnd: function(t) {
                        I("onVoiceRecordEnd", t)
                    },
                    playVoice: function(t) {
                        O("playVoice", {
                            localId: t.localId
                        },
                        t)
                    },
                    pauseVoice: function(t) {
                        O("pauseVoice", {
                            localId: t.localId
                        },
                        t)
                    },
                    stopVoice: function(t) {
                        O("stopVoice", {
                            localId: t.localId
                        },
                        t)
                    },
                    onVoicePlayEnd: function(t) {
                        I("onVoicePlayEnd", t)
                    },
                    uploadVoice: function(t) {
                        O("uploadVoice", {
                            localId: t.localId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        },
                        t)
                    },
                    downloadVoice: function(t) {
                        O("downloadVoice", {
                            serverId: t.serverId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        },
                        t)
                    },
                    translateVoice: function(t) {
                        O("translateVoice", {
                            localId: t.localId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        },
                        t)
                    },
                    chooseImage: function(t) {
                        O("chooseImage", {
                            scene: "1|2",
                            count: t.count || 9,
                            sizeType: t.sizeType || ["original", "compressed"],
                            sourceType: t.sourceType || ["album", "camera"]
                        },
                        (t._complete = function(t) {
                            if (d) {
                                var e = t.localIds;
                                try {
                                    e && (t.localIds = JSON.parse(e))
                                } catch(t) {}
                            }
                        },
                        t))
                    },
                    getLocation: function() {},
                    previewImage: function(t) {
                        O(i.previewImage, {
                            current: t.current,
                            urls: t.urls
                        },
                        t)
                    },
                    uploadImage: function(t) {
                        O("uploadImage", {
                            localId: t.localId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        },
                        t)
                    },
                    downloadImage: function(t) {
                        O("downloadImage", {
                            serverId: t.serverId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        },
                        t)
                    },
                    getLocalImgData: function(t) { ! 1 === w ? (w = !0, O("getLocalImgData", {
                            localId: t.localId
                        },
                        (t._complete = function() {
                            if (w = !1, 0 < T.length) {
                                var t = T.shift();
                                wx.getLocalImgData(t)
                            }
                        },
                        t))) : T.push(t)
                    },
                    getNetworkType: function(t) {
                        O("getNetworkType", {},
                        (t._complete = function(t) {
                            t = function(t) {
                                var e = t.errMsg;
                                t.errMsg = "getNetworkType:ok";
                                var o = t.subtype;
                                if (delete t.subtype, o) t.networkType = o;
                                else {
                                    var n = e.indexOf(":"),
                                    i = e.substring(n + 1);
                                    switch (i) {
                                    case "wifi":
                                    case "edge":
                                    case "wwan":
                                        t.networkType = i;
                                        break;
                                    default:
                                        t.errMsg = "getNetworkType:fail"
                                    }
                                }
                                return t
                            } (t)
                        },
                        t))
                    },
                    openLocation: function(t) {
                        O("openLocation", {
                            latitude: t.latitude,
                            longitude: t.longitude,
                            name: t.name || "",
                            address: t.address || "",
                            scale: t.scale || 28,
                            infoUrl: t.infoUrl || ""
                        },
                        t)
                    }
                }).getLocation = function(t) {
                    O(i.getLocation, {
                        type: (t = t || {}).type || "wgs84"
                    },
                    (t._complete = function(t) {
                        delete t.type
                    },
                    t))
                },
                o.hideOptionMenu = function(t) {
                    O("hideOptionMenu", {},
                    t)
                },
                o.showOptionMenu = function(t) {
                    O("showOptionMenu", {},
                    t)
                },
                o.closeWindow = function(t) {
                    O("closeWindow", {},
                    t = t || {})
                },
                o.hideMenuItems = function(t) {
                    O("hideMenuItems", {
                        menuList: t.menuList
                    },
                    t)
                },
                o.showMenuItems = function(t) {
                    O("showMenuItems", {
                        menuList: t.menuList
                    },
                    t)
                },
                o.hideAllNonBaseMenuItem = function(t) {
                    O("hideAllNonBaseMenuItem", {},
                    t)
                },
                o.showAllNonBaseMenuItem = function(t) {
                    O("showAllNonBaseMenuItem", {},
                    t)
                },
                o.scanQRCode = function(t) {
                    O("scanQRCode", {
                        needResult: (t = t || {}).needResult || 0,
                        scanType: t.scanType || ["qrCode", "barCode"]
                    },
                    (t._complete = function(t) {
                        if (f) {
                            var e = t.resultStr;
                            if (e) {
                                var o = JSON.parse(e);
                                t.resultStr = o && o.scan_code && o.scan_code.scan_result
                            }
                        }
                    },
                    t))
                },
                o.openAddress = function(t) {
                    O(i.openAddress, {},
                    (t._complete = function(t) {
                        t = function(t) {
                            return t.postalCode = t.addressPostalCode,
                            delete t.addressPostalCode,
                            t.provinceName = t.proviceFirstStageName,
                            delete t.proviceFirstStageName,
                            t.cityName = t.addressCitySecondStageName,
                            delete t.addressCitySecondStageName,
                            t.countryName = t.addressCountiesThirdStageName,
                            delete t.addressCountiesThirdStageName,
                            t.detailInfo = t.addressDetailInfo,
                            delete t.addressDetailInfo,
                            t
                        } (t)
                    },
                    t))
                },
                o.openProductSpecificView = function(t) {
                    O(i.openProductSpecificView, {
                        pid: t.productId,
                        view_type: t.viewType || 0,
                        ext_info: t.extInfo
                    },
                    t)
                },
                o.addCard = function(t) {
                    for (var e = t.cardList,
                    o = [], n = 0, r = e.length; n < r; ++n) {
                        var a = e[n],
                        s = {
                            card_id: a.cardId,
                            card_ext: a.cardExt
                        };
                        o.push(s)
                    }
                    O(i.addCard, {
                        card_list: o
                    },
                    (t._complete = function(t) {
                        var e = t.card_list;
                        if (e) {
                            for (var o = 0,
                            n = (e = JSON.parse(e)).length; o < n; ++o) {
                                var i = e[o];
                                i.cardId = i.card_id,
                                i.cardExt = i.card_ext,
                                i.isSuccess = !!i.is_succ,
                                delete i.card_id,
                                delete i.card_ext,
                                delete i.is_succ
                            }
                            t.cardList = e,
                            delete t.card_list
                        }
                    },
                    t))
                },
                o.chooseCard = function(t) {
                    O("chooseCard", {
                        app_id: m.appId,
                        location_id: t.shopId || "",
                        sign_type: t.signType || "SHA1",
                        card_id: t.cardId || "",
                        card_type: t.cardType || "",
                        card_sign: t.cardSign,
                        time_stamp: t.timestamp + "",
                        nonce_str: t.nonceStr
                    },
                    (t._complete = function(t) {
                        t.cardList = t.choose_card_info,
                        delete t.choose_card_info
                    },
                    t))
                },
                o.openCard = function(t) {
                    for (var e = t.cardList,
                    o = [], n = 0, r = e.length; n < r; ++n) {
                        var a = e[n],
                        s = {
                            card_id: a.cardId,
                            code: a.code
                        };
                        o.push(s)
                    }
                    O(i.openCard, {
                        card_list: o
                    },
                    t)
                },
                o.consumeAndShareCard = function(t) {
                    O(i.consumeAndShareCard, {
                        consumedCardId: t.cardId,
                        consumedCode: t.code
                    },
                    t)
                },
                o.chooseWXPay = function(t) {
                    O(i.chooseWXPay, C(t), t)
                },
                o.openEnterpriseRedPacket = function(t) {
                    O(i.openEnterpriseRedPacket, C(t), t)
                },
                o.startSearchBeacons = function(t) {
                    O(i.startSearchBeacons, {
                        ticket: t.ticket
                    },
                    t)
                },
                o.stopSearchBeacons = function(t) {
                    O(i.stopSearchBeacons, {},
                    t)
                },
                o.onSearchBeacons = function(t) {
                    I(i.onSearchBeacons, t)
                },
                o.openEnterpriseChat = function(t) {
                    O("openEnterpriseChat", {
                        useridlist: t.userIds,
                        chatname: t.groupName
                    },
                    t)
                },
                o.launchMiniProgram = function(t) {
                    O("launchMiniProgram", {
                        targetAppId: t.targetAppId,
                        path: function(t) {
                            if ("string" == typeof t && 0 < t.length) {
                                var e = t.split("?")[0],
                                o = t.split("?")[1];
                                return e += ".html",
                                void 0 !== o ? e + "?" + o: e
                            }
                        } (t.path),
                        envVersion: t.envVersion
                    },
                    t)
                },
                o.openBusinessView = function(t) {
                    O("openBusinessView", {
                        businessType: t.businessType,
                        queryString: t.queryString || "",
                        envVersion: t.envVersion
                    },
                    (t._complete = function(t) {
                        if (d) {
                            var e = t.extraData;
                            if (e) try {
                                t.extraData = JSON.parse(e)
                            } catch(e) {
                                t.extraData = {}
                            }
                        }
                    },
                    t))
                },
                o.miniProgram = {
                    navigateBack: function(t) {
                        t = t || {},
                        x(function() {
                            O("invokeMiniProgramAPI", {
                                name: "navigateBack",
                                arg: {
                                    delta: t.delta || 1
                                }
                            },
                            t)
                        })
                    },
                    navigateTo: function(t) {
                        x(function() {
                            O("invokeMiniProgramAPI", {
                                name: "navigateTo",
                                arg: {
                                    url: t.url
                                }
                            },
                            t)
                        })
                    },
                    redirectTo: function(t) {
                        x(function() {
                            O("invokeMiniProgramAPI", {
                                name: "redirectTo",
                                arg: {
                                    url: t.url
                                }
                            },
                            t)
                        })
                    },
                    switchTab: function(t) {
                        x(function() {
                            O("invokeMiniProgramAPI", {
                                name: "switchTab",
                                arg: {
                                    url: t.url
                                }
                            },
                            t)
                        })
                    },
                    reLaunch: function(t) {
                        x(function() {
                            O("invokeMiniProgramAPI", {
                                name: "reLaunch",
                                arg: {
                                    url: t.url
                                }
                            },
                            t)
                        })
                    },
                    postMessage: function(t) {
                        x(function() {
                            O("invokeMiniProgramAPI", {
                                name: "postMessage",
                                arg: t.data || {}
                            },
                            t)
                        })
                    },
                    getEnv: function(e) {
                        x(function() {
                            e({
                                miniprogram: "miniprogram" === t.__wxjs_environment
                            })
                        })
                    }
                },
                o),
                E = 1,
                S = {};
                return a.addEventListener("error",
                function(t) {
                    if (!d) {
                        var e = t.target,
                        o = e.tagName,
                        n = e.src;
                        if (("IMG" == o || "VIDEO" == o || "AUDIO" == o || "SOURCE" == o) && -1 != n.indexOf("wxlocalresource://")) {
                            t.preventDefault(),
                            t.stopPropagation();
                            var i = e["wx-id"];
                            if (i || (i = E++, e["wx-id"] = i), S[i]) return;
                            S[i] = !0,
                            wx.ready(function() {
                                wx.getLocalImgData({
                                    localId: n,
                                    success: function(t) {
                                        e.src = t.localData
                                    }
                                })
                            })
                        }
                    }
                },
                !0),
                a.addEventListener("load",
                function(t) {
                    if (!d) {
                        var e = t.target,
                        o = e.tagName;
                        if (e.src, "IMG" == o || "VIDEO" == o || "AUDIO" == o || "SOURCE" == o) {
                            var n = e["wx-id"];
                            n && (S[n] = !1)
                        }
                    }
                },
                !0),
                e && (t.wx = t.jWeixin = P),
                P
            }
            function O(e, o, n) {
                t.WeixinJSBridge ? WeixinJSBridge.invoke(e, R(o),
                function(t) {
                    A(e, t, n)
                }) : D(e, n)
            }
            function I(e, o, n) {
                t.WeixinJSBridge ? WeixinJSBridge.on(e,
                function(t) {
                    n && n.trigger && n.trigger(t),
                    A(e, t, o)
                }) : D(e, n || o)
            }
            function R(t) {
                return (t = t || {}).appId = m.appId,
                t.verifyAppId = m.appId,
                t.verifySignType = "sha1",
                t.verifyTimestamp = m.timestamp + "",
                t.verifyNonceStr = m.nonceStr,
                t.verifySignature = m.signature,
                t
            }
            function C(t) {
                return {
                    timeStamp: t.timestamp + "",
                    nonceStr: t.nonceStr,
                    package: t.package,
                    paySign: t.paySign,
                    signType: t.signType || "SHA1"
                }
            }
            function A(t, e, o) {
                "openEnterpriseChat" != t && "openBusinessView" !== t || (e.errCode = e.err_code),
                delete e.err_code,
                delete e.err_desc,
                delete e.err_detail;
                var n = e.errMsg;
                n || (n = e.err_msg, delete e.err_msg, n = function(t, e) {
                    var o = t,
                    n = r[o];
                    n && (o = n);
                    var i = "ok";
                    if (e) {
                        var a = e.indexOf(":");
                        "confirm" == (i = e.substring(a + 1)) && (i = "ok"),
                        "failed" == i && (i = "fail"),
                        -1 != i.indexOf("failed_") && (i = i.substring(7)),
                        -1 != i.indexOf("fail_") && (i = i.substring(5)),
                        "access denied" != (i = (i = i.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != i || (i = "permission denied"),
                        "config" == o && "function not exist" == i && (i = "ok"),
                        "" == i && (i = "fail")
                    }
                    return o + ":" + i
                } (t, n), e.errMsg = n),
                (o = o || {})._complete && (o._complete(e), delete o._complete),
                n = e.errMsg || "",
                m.debug && !o.isInnerInvoke && alert(JSON.stringify(e));
                var i = n.indexOf(":");
                switch (n.substring(i + 1)) {
                case "ok":
                    o.success && o.success(e);
                    break;
                case "cancel":
                    o.cancel && o.cancel(e);
                    break;
                default:
                    o.fail && o.fail(e)
                }
                o.complete && o.complete(e)
            }
            function k(t) {
                if (t) {
                    for (var e = 0,
                    o = t.length; e < o; ++e) {
                        var n = t[e],
                        r = i[n];
                        r && (t[e] = r)
                    }
                    return t
                }
            }
            function D(t, e) {
                if (! (!m.debug || e && e.isInnerInvoke)) {
                    var o = r[t];
                    o && (t = o),
                    e && e._complete && delete e._complete,
                    console.log('"' + t + '",', e || "")
                }
            }
            function M() {
                return (new Date).getTime()
            }
            function x(e) {
                p && (t.WeixinJSBridge ? e() : a.addEventListener && a.addEventListener("WeixinJSBridgeReady", e, !1))
            }
        }),
        cc._RF.pop()
    },
    {}],
    sha1: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2ad6cEvnhGybRns+4IK94G", "sha1"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.hex_sha1 = void 0;
        var n = 0,
        i = 8;
        function r(t, e) {
            t[e >> 5] |= 128 << 24 - e % 32,
            t[15 + (e + 64 >> 9 << 4)] = e;
            for (var o = Array(80), n = 1732584193, i = -271733879, r = -1732584194, u = 271733878, h = -1009589776, p = 0; p < t.length; p += 16) {
                for (var d = n,
                f = i,
                _ = r,
                g = u,
                y = h,
                m = 0; m < 80; m++) {
                    o[m] = m < 16 ? t[p + m] : l(o[m - 3] ^ o[m - 8] ^ o[m - 14] ^ o[m - 16], 1);
                    var v = c(c(l(n, 5), a(m, i, r, u)), c(c(h, o[m]), s(m)));
                    h = u,
                    u = r,
                    r = l(i, 30),
                    i = n,
                    n = v
                }
                n = c(n, d),
                i = c(i, f),
                r = c(r, _),
                u = c(u, g),
                h = c(h, y)
            }
            return Array(n, i, r, u, h)
        }
        function a(t, e, o, n) {
            return t < 20 ? e & o | ~e & n: t < 40 ? e ^ o ^ n: t < 60 ? e & o | e & n | o & n: e ^ o ^ n
        }
        function s(t) {
            return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514
        }
        function c(t, e) {
            var o = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o
        }
        function l(t, e) {
            return t << e | t >>> 32 - e
        }
        function u(t) {
            for (var e = Array(), o = (1 << i) - 1, n = 0; n < t.length * i; n += i) e[n >> 5] |= (t.charCodeAt(n / i) & o) << 24 - n % 32;
            return e
        }
        function h(t) {
            for (var e = n ? "0123456789ABCDEF": "0123456789abcdef", o = "", i = 0; i < 4 * t.length; i++) o += e.charAt(t[i >> 2] >> 8 * (3 - i % 4) + 4 & 15) + e.charAt(t[i >> 2] >> 8 * (3 - i % 4) & 15);
            return o
        }
        o.hex_sha1 = function(t) {
            return h(r(u(t), t.length * i))
        },
        cc._RF.pop()
    },
    {}],
    sproto: [function(t, e) {
        "use strict";
        cc._RF.push(e, "7d951+0JmdBap9+oFWynOHC", "sproto");
        var o = t("./../utils/utils"),
        n = function() {
            var t = {},
            e = {},
            n = {},
            i = 0,
            r = 1,
            a = 0,
            s = 1,
            c = 2,
            l = 3,
            u = -1,
            h = -2,
            p = -3,
            d = 128,
            f = 4,
            _ = 2,
            g = 2,
            y = 64;
            function m(t) {
                var e = t;
                return 0 != (2147483648 & e) && (e = 0 + (4294967295 & e)),
                e
            }
            function v(t, e) {
                return 4294967296 * (4294967295 & e) + t
            }
            function b(t, e) {
                return Math.floor(t / Math.pow(2, e))
            }
            function w(t) {
                return 255 & t[0] | (255 & t[1]) << 8
            }
            function T(t) {
                return (255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24) >>> 0
            }
            function P(t) {
                var e = T(t),
                o = 0;
                for (t = t.slice(f); e > 0;) {
                    var n;
                    if (e < f) return - 1;
                    if (n = T(t), (n += f) > e) return - 1; ++o,
                    t = t.slice(n),
                    e -= n
                }
                return o
            }
            function E(t, e) {
                var o, n, i, r;
                if (e < f) return - 1;
                if (n = w(t), e < (i = _ + g * n)) return - 1;
                for (o = t.slice(_), e -= i, t = t.slice(i), r = 0; r < n; r++) {
                    var a;
                    if (0 == w(o.slice(r * g + _))) {
                        if (e < f) return - 1;
                        if (a = T(t), e < f + a) return - 1;
                        t = t.slice(f + a),
                        e -= f + a
                    }
                }
                return n
            }
            function S(t, e) {
                for (var o = T(e), n = "", i = e.slice(f, f + o), r = 0; r < i.length; r++) n += String.fromCharCode(i[r]);
                return n
            }
            function O(t, e) {
                if (0 == e) return 1;
                var o = O(t * t, Math.floor(e / 2));
                return 0 != (1 & e) && (o *= t),
                o
            }
            function I(t, e, o) {
                var n, i, r, s = 0,
                u = -1;
                if (e.tag = -1, e.type = -1, e.name = null, e.st = null, e.key = -1, e.extra = 0, n = T(o), i = (o = o.slice(f)).slice(n), (r = E(o, n)) < 0) return null;
                o = o.slice(_);
                for (var h = 0; h < r; h++) {
                    var p;
                    if (++u, !0 & (p = w(o.slice(g * h)))) u += Math.floor(p / 2);
                    else if (0 != u) {
                        if (0 == p) return null;
                        switch (p = Math.floor(p / 2) - 1, u) {
                        case 1:
                            if (p >= l) return null;
                            e.type = p;
                            break;
                        case 2:
                            if (e.type == a) e.extra = O(10, p);
                            else if (e.type == c) e.extra = p;
                            else {
                                if (p >= t.type_n) return null;
                                if (e.type >= 0) return null;
                                e.type = l,
                                e.st = p
                            }
                            break;
                        case 3:
                            e.tag = p;
                            break;
                        case 4:
                            0 != p && (s = d);
                            break;
                        case 5:
                            e.key = p;
                            break;
                        default:
                            return null
                        }
                    } else {
                        if (0 != p) return null;
                        e.name = S(0, o.slice(r * g))
                    }
                }
                return e.tag < 0 || e.type < 0 || null == e.name ? null: (e.type |= s, i)
            }
            function R(t, e, o) {
                var n, i, r, a, s, c = T(o);
                if (n = (o = o.slice(f)).slice(c), (i = E(o, c)) <= 0 || i > 2) return null;
                for (var l = 0; l < i * g; l += g) if (0 != w(o.slice(_ + l))) return null;
                if (e.name = null, e.n = 0, e.base = 0, e.maxn = 0, e.f = null, o = o.slice(_ + i * g), e.name = S(0, o), 1 == i) return n;
                if ((r = P(o = o.slice(T(o) + f))) < 0) return null;
                for (o = o.slice(f), a = r, s = -1, e.n = r, e.f = new Array, l = 0; l < r; l++) {
                    var u;
                    e.f[l] = new Object;
                    var h = e.f[l];
                    if (null == (o = I(t, h, o))) return null;
                    if ((u = h.tag) <= s) return null;
                    u > s + 1 && ++a,
                    s = u
                }
                return e.maxn = a,
                e.base = e.f[0].tag,
                (r = e.f[r - 1].tag - e.base + 1) != e.n && (e.base = -1),
                n
            }
            function C(t, e, o) {
                var n, a, s, c;
                a = T(o),
                n = (o = o.slice(f)).slice(a),
                s = E(o, a),
                o = o.slice(_),
                e.name = null,
                e.tag = -1,
                e.p = new Array,
                e.p[i] = null,
                e.p[r] = null,
                e.confirm = 0,
                c = 0;
                for (var l = 0; l < s; l++, c++) {
                    var u = w(o.slice(g * l));
                    if (!0 & u) c += Math.floor(u - 1) / 2;
                    else switch (u = Math.floor(u / 2) - 1, l) {
                    case 0:
                        if ( - 1 != u) return null;
                        e.name = S(0, o.slice(g * s));
                        break;
                    case 1:
                        if (u < 0) return null;
                        e.tag = u;
                        break;
                    case 2:
                        if (u < 0 || u >= t.type_n) return null;
                        e.p[i] = t.type[u];
                        break;
                    case 3:
                        if (u < 0 || u > t.type_n) return null;
                        e.p[r] = t.type[u];
                        break;
                    case 4:
                        e.confirm = u;
                        break;
                    default:
                        return null
                    }
                }
                return null == e.name || e.tag < 0 ? null: n
            }
            function A(t, e, o) {
                var n, i, r, a = E(e, o);
                if (a < 0 || a > 2) return null;
                n = (e = e.slice(_)).slice(a * g);
                for (var s = 0; s < a; s++) {
                    if (0 != w(e.slice(s * g))) return null;
                    var c = P(n);
                    if (c < 0) return null;
                    0 == s ? (i = n.slice(f), t.type_n = c, t.type = new Array) : (r = n.slice(f), t.protocol_n = c, t.proto = new Array),
                    n = n.slice(T(n) + f)
                }
                for (s = 0; s < t.type_n; s++) if (t.type[s] = new Object, null == (i = R(t, t.type[s], i))) return null;
                for (s = 0; s < t.protocol_n; s++) if (t.proto[s] = new Object, null == (r = C(t, t.proto[s], r))) return null;
                return t
            }
            function k(t) {
                console.log(t)
            }
            function D(t, e) {
                for (var o = 0; o < t.protocol_n; o++) if (e == t.proto[o].name) return t.proto[o].tag;
                return - 1
            }
            function M(t, e) {
                for (var o = 0,
                n = t.protocol_n; o < n;) {
                    var i = Math.floor((o + n) / 2),
                    r = t.proto[i].tag;
                    if (r == e) return t.proto[i];
                    e > r ? o = i + 1 : n = i
                }
                return null
            }
            function x(t, e, o) {
                var n;
                return o < 0 || o > 1 ? null: (n = M(t, e)) ? n.p[o] : null
            }
            function G(t, e) {
                var o = M(t, e);
                return o ? o.name: null
            }
            function N(t, e) {
                for (var o = 0; o < t.type_n; o++) if (e == t.type[o].name) return t.type[o];
                return null
            }
            function L(t, e) {
                var o, n;
                if (t.base >= 0) return (e -= t.base) < 0 || e > t.n ? null: t.f[e];
                for (o = 0, n = t.n; o < n;) {
                    var i = Math.floor((o + n) / 2),
                    r = t.f[i],
                    a = r.tag;
                    if (a == e) return r;
                    e > a ? o = i + 1 : n = i
                }
                return null
            }
            function j(t, e, o) {
                return t[e] = 255 & o,
                t[e + 1] = o >> 8 & 255,
                t[e + 2] = o >> 16 & 255,
                t[e + 3] = o >> 24 & 255,
                o + f
            }
            function F(t, e, o) {
                return e[o + 4] = 255 & t,
                e[o + 5] = t >> 8 & 255,
                e[o + 6] = t >> 16 & 255,
                e[o + 7] = t >> 24 & 255,
                j(e, o, 4)
            }
            function U(t, e, o) {
                return e[o + 4] = 255 & t,
                e[o + 5] = 255 & b(t, 8),
                e[o + 6] = 255 & b(t, 16),
                e[o + 7] = 255 & b(t, 24),
                e[o + 8] = 255 & b(t, 32),
                e[o + 9] = 255 & b(t, 40),
                e[o + 10] = 255 & b(t, 48),
                e[o + 11] = 255 & b(t, 56),
                j(e, o, 8)
            }
            function B(t, e, o, n) {
                var i;
                return e.buffer = o,
                e.buffer_idx = n + f,
                (i = t(e)) < 0 ? i == h ? 0 : -1 : j(o, n, i)
            }
            function H(t, e, o) {
                t ? (e[o + 4] = 255, e[o + 5] = 255, e[o + 6] = 255, e[o + 7] = 255) : (e[o + 4] = 0, e[o + 5] = 0, e[o + 6] = 0, e[o + 7] = 0)
            }
            function V(t, e, o, n, i) {
                var r, a, s = n;
                for (n++, r = 4, a = 1, i.value = 0;;) {
                    var c;
                    if (e.value = null, e.length = 8, e.index = a, (c = t(e)) <= 0) {
                        if (c == h) break;
                        if (c == p) {
                            i.value = 1;
                            break
                        }
                        return null
                    }
                    if (4 == c) {
                        var l = e.value;
                        o[n] = 255 & l,
                        o[n + 1] = l >> 8 & 255,
                        o[n + 2] = l >> 16 & 255,
                        o[n + 3] = l >> 24 & 255,
                        8 == r && H(2147483648 & l, o, n)
                    } else {
                        if (8 != c) return null;
                        if (4 == r) {
                            n += 4 * (a - 1);
                            for (var u = a - 2; u >= 0; u--) {
                                for (var d = 1 + 8 * u; d < 5 + 8 * u; d++) header[d] = header[d - 4 * u];
                                H(128 & header[4 + 8 * u], o, n + 1 + 8 * u)
                            }
                            r = 8
                        }
                        l = value,
                        o[n] = 255 & l,
                        o[n + 1] = l >> 8 & 255,
                        o[n + 2] = l >> 16 & 255,
                        o[n + 3] = l >> 24 & 255,
                        o[n + 4] = l >> 32 & 255,
                        o[n + 5] = l >> 40 & 255,
                        o[n + 6] = l >> 48 & 255,
                        o[n + 7] = l >> 56 & 255
                    }
                    n += r,
                    a++
                }
                return n == s + 1 ? s: (o[s] = 255 & r, n)
            }
            function Y(t, e, o, n) {
                var i, r = o,
                c = n + f;
                switch (e.type) {
                case a:
                    var l = {
                        value: 0
                    };
                    if (null == (c = V(t, e, r, c, l))) return - 1;
                    if (0 != l.value) return 0;
                    break;
                case s:
                    for (e.index = 1;;) {
                        if (e.value = 0, e.length = 4, (i = t(e)) < 0) {
                            if (i == h) break;
                            return i == p ? 0 : -1
                        }
                        if (i < 1) return - 1;
                        r[c] = 1 == e.value ? 1 : 0,
                        c++,
                        ++e.index
                    }
                    break;
                default:
                    for (e.index = 1;;) {
                        if (e.buffer = r, e.buffer_idx = c + f, (i = t(e)) < 0) {
                            if (i == h) break;
                            return i == p ? 0 : -1
                        }
                        j(r, c, i),
                        c += f + i,
                        ++e.index
                    }
                }
                return 0 == (i = c - (n + f)) ? 0 : j(r, n, i)
            }
            function W(t, e, o, n) {
                for (var i, r = 1; n > 0;) {
                    if (n < f) return - 1;
                    if (i = T(o), o = o.slice(f), i > (n -= f)) return - 1;
                    if (e.index = r, e.value = o, e.length = i, 0 != t(e)) return - 1;
                    n -= i,
                    o = o.slice(i),
                    ++r
                }
                return 0
            }
            function z(t, e, o) {
                var n = T(o),
                i = e.type;
                if (0 == n) return e.index = -1,
                e.value = null,
                e.length = 0,
                t(e),
                0;
                switch (o = o.slice(f), i) {
                case a:
                    var r = o[0];
                    if (o = o.slice(1), --n, 4 == r) {
                        if (n % 4 != 0) return - 1;
                        for (var u = 0; u < Math.floor(n / 4); u++) {
                            var h = m(T(o.slice(4 * u)));
                            e.index = u + 1,
                            e.value = h,
                            e.length = 8,
                            t(e)
                        }
                    } else {
                        if (8 != r) return - 1;
                        if (n % 8 != 0) return - 1;
                        for (u = 0; u < Math.floor(n / 8); u++) h = v(T(o.slice(8 * u)), T(o.slice(8 * u + 4))),
                        e.index = u + 1,
                        e.value = h,
                        e.length = 8,
                        t(e)
                    }
                    break;
                case s:
                    for (u = 0; u < n; u++) h = o[u],
                    e.index = u + 1,
                    e.value = h,
                    e.length = 8,
                    t(e);
                    break;
                case c:
                case l:
                    return W(t, e, o, n);
                default:
                    return - 1
                }
                return 0
            }
            function q(t, e, o, n, i, r) {
                var a = 0,
                s = 0,
                c = n;
                n++,
                --i < 0 && (c = null);
                for (var l = 0; l < 8; l++) 0 != t[e + l] && (s++, a |= 1 << l, i > 0 && (o[n] = t[e + l], ++n, --i));
                return (7 == s || 6 == s) && r > 0 && (s = 8),
                8 == s ? r > 0 ? 8 : 10 : (null != c && (o[c] = a), s + 1)
            }
            function X(t, e, o, n, i) {
                var r = i + 7 & -8;
                o[n] = 255,
                o[n + 1] = Math.floor(r / 8) - 1;
                for (var a = 0; a < i; a++) o[n + a + 2] = t[e + a];
                for (a = 0; a < r - i; a++) o[n + i + 2 + a] = 0
            }
            function Q(t, e, o, n) {
                for (var i, r, a = new Array(8), s = 0, c = 0, l = 0, u = 0, h = t, p = o, d = t.length, f = 1 << 30, _ = 0; _ < d; _ += 8) {
                    var g, y = _ + 8 - d;
                    if (y > 0) {
                        for (var m = 0; m < 8 - y; m++) a[m] = h[e + m];
                        for (m = 0; m < y; m++) a[7 - m] = 0;
                        h = a,
                        e = 0
                    }
                    f -= g = q(h, e, p, n, f, l),
                    10 == g ? (i = h, s = e, r = p, c = n, l = 1) : 8 == g && l > 0 ? 256 == ++l && (f >= 0 && X(i, s, r, c, 2048), l = 0) : l > 0 && (f >= 0 && X(i, s, r, c, 8 * l), l = 0),
                    e += 8,
                    n += g,
                    u += g
                }
                if (f >= 0 && (1 == l ? X(i, s, r, c, 8) : l > 1 && X(i, s, r, c, d - s), p.length > u)) for (_ = u; _ < p.length; _++) p[_] = 0;
                return u
            }
            function Z(t, e, o, n) {
                for (var i = t,
                r = o,
                a = 0,
                s = t.length,
                c = 1 << 30; s > 0;) {
                    var l = i[e];
                    if (--s, ++e, 255 == l) {
                        var u;
                        if (s < 0) return - 1;
                        if (s < 1 + (u = 8 * (i[e] + 1))) return - 1;
                        if (s -= u + 1, ++e, c >= u) for (var h = 0; h < u; h++) r[n + h] = i[e + h];
                        c -= u,
                        n += u,
                        e += u,
                        a += u
                    } else for (h = 0; h < 8; h++) {
                        if (0 != (l >>> h & 1)) {
                            if (s < 0) return - 1;
                            c > 0 && (r[n] = i[e], --c, ++n),
                            ++e,
                            --s
                        } else c > 0 && (r[n] = 0, --c, ++n); ++a
                    }
                }
                return a
            }
            return t.pack = function(t) {
                var e = new Array;
                return Q(t, 0, e, 0),
                e
            },
            t.unpack = function(t) {
                var e = new Array;
                return Z(t, 0, e, 0),
                e
            },
            t.createNew = function(P) {
                if (null == P) return null;
                var E = {};
                new Object,
                new Array,
                E.type_n = 0,
                E.protocol_n = 0,
                E.type = null,
                E.proto = null,
                E.tcache = {},
                E.pcache = {};
                var S = A(E, P, P.length);
                if (null == S) return null;
                function O(t, e, o, n, i) {
                    var r, u, f, y = new Object,
                    m = o,
                    v = o,
                    b = _ + t.maxn * g;
                    y.ud = i,
                    v = m + b,
                    r = 0,
                    u = -1;
                    for (var w = 0; w < t.n; w++) {
                        var T = t.f[w],
                        P = T.type,
                        E = 0,
                        O = -1;
                        if (y.tagname = T.name, y.tagid = T.tag, null != T.st ? y.subtype = S.type[T.st] : y.subtype = null, y.mainindex = T.key, y.extra = T.extra, 0 != (P & d)) y.type = P & ~d,
                        O = Y(n, y, e, v);
                        else switch (y.type = P, y.index = 0, P) {
                        case a:
                        case s:
                            if (y.value = 0, y.length = 8, y.buffer = e, y.buffer_idx = o, (O = n(y)) < 0) {
                                if (O == h) continue;
                                return O == p ? 0 : -1
                            }
                            if (4 == O) y.value < 32767 ? (E = 2 * (y.value + 1), O = 2) : O = F(y.value, e, v);
                            else {
                                if (8 != O) return - 1;
                                O = U(y.value, e, v)
                            }
                            break;
                        case l:
                        case c:
                            O = B(n, y, e, v)
                        }
                        if (O < 0) return - 1;
                        if (O > 0) {
                            var I, R;
                            if (0 == E && (v += O), I = m + _ + g * r, (R = T.tag - u - 1) > 0) {
                                if ((R = 2 * (R - 1) + 1) > 65535) return - 1;
                                e[I] = 255 & R,
                                e[I + 1] = R >> 8 & 255,
                                ++r,
                                I += g
                            }++r,
                            e[I] = 255 & E,
                            e[I + 1] = E >> 8 & 255,
                            u = T.tag
                        }
                    }
                    if (e[m] = 255 & r, e[m + 1] = r >> 8 & 255, f = v - (m + b), v = m + b, r != t.maxn) {
                        for (var C = e.slice(v, v + f), A = 0; A < C.length; A++) e[m + _ + r * g + A] = C[A];
                        e.length,
                        C.length,
                        e.splice(m + _ + r * g + C.length, e.length)
                    }
                    return _ + r * g + f
                }
                function I(t) {
                    var e = t.ud;
                    if (e.deep >= y) return alert("table is too deep"),
                    -1;
                    if (null == e.indata[t.tagname]) return h;
                    var n = null;
                    if (t.index > 0) {
                        if (t.tagname != e.array_tag) {
                            if (e.array_tag = t.tagname, "object" != typeof e.indata[t.tagname]) return e.array_index = 0,
                            h;
                            if (0 == e.indata[t.tagname].length || null == e.indata[t.tagname].length) return e.array_index = 0,
                            p
                        }
                        if (null == (n = e.indata[t.tagname][t.index - 1])) return h
                    } else n = e.indata[t.tagname];
                    switch (t.type) {
                    case a:
                        var i, r;
                        if (t.extra > 0) {
                            var d = n;
                            i = Math.floor(d * t.extra + .5)
                        } else i = n;
                        return 0 == (r = b(i, 31)) || -1 == r ? (t.value = i >>> 0, 4) : (t.value = i, 8);
                    case s:
                        return 1 == n ? t.value = 1 : 0 == n && (t.value = 0),
                        4;
                    case c:
                        var f = n,
                        _ = o.string2utf8(f),
                        g = _.length;
                        g > t.length && (t.length = g);
                        for (var m = 0; m < _.length; m++) t.buffer[t.buffer_idx + m] = _[m];
                        return g;
                    case l:
                        var v = new Object;
                        v.st = t.subtype,
                        v.deep = e.deep + 1,
                        v.indata = n;
                        var w = O(t.subtype, t.buffer, t.buffer_idx, I, v);
                        return w < 0 ? u: w;
                    default:
                        return alert("Invalid filed type " + t.type),
                        u
                    }
                }
                function R(t, e, o, n, i) {
                    var r, u, h, p, y = new Object,
                    b = o;
                    if (o < _) return - 1;
                    if (h = w(r = e.slice(0)), r = r.slice(_), (o -= _) < h * g) return - 1;
                    u = r.slice(h * g),
                    o -= h * g,
                    y.ud = i,
                    p = -1;
                    for (var P = 0; P < h; P++) {
                        var E, O = null,
                        I = w(r.slice(P * g));
                        if (++p, !0 & I) p += Math.floor(I / 2);
                        else {
                            if (I = Math.floor(I / 2) - 1, O = u.slice(0), I < 0) {
                                if (o < f) return - 1;
                                if (o < (C = T(u)) + f) return - 1;
                                u = u.slice(C + f),
                                o -= C + f
                            }
                            if (null != (E = L(t, p))) if (y.tagname = E.name, y.tagid = E.tag, y.type = E.type & ~d, null != E.st ? y.subtype = S.type[E.st] : y.subtype = null, y.index = 0, y.mainindex = E.key, y.extra = E.extra, I < 0) if (0 != (E.type & d)) {
                                if (z(n, y, O)) return - 1
                            } else switch (E.type) {
                            case a:
                                if (4 == (C = T(O))) {
                                    var R = m(T(O.slice(f)));
                                    y.value = R,
                                    y.length = 8,
                                    n(y)
                                } else {
                                    if (8 != C) return - 1;
                                    R = v(T(O.slice(f)), T(O.slice(f + 4))),
                                    y.value = R,
                                    y.length = 8,
                                    n(y)
                                }
                                break;
                            case c:
                            case l:
                                var C = T(O);
                                if (y.value = O.slice(f), y.length = C, 0 != n(y)) return - 1;
                                break;
                            default:
                                return - 1
                            } else {
                                if (E.type != a && E.type != s) return - 1;
                                y.value = I,
                                y.length = 8,
                                n(y)
                            }
                        }
                    }
                    return b - o
                }
                function C(t) {
                    var e, n = t.ud;
                    if (n.deep >= y && alert("the table is too deep"), 0 != t.index && t.tagname != n.array_tag && (n.array_tag = t.tagname, n.result[t.tagname] = new Array, t.index < 0)) return 0;
                    switch (t.type) {
                    case a:
                        e = t.extra ? t.value / t.extra: t.value;
                        break;
                    case s:
                        e = 1 == t.value || 0 != t.value && null;
                        break;
                    case c:
                        for (var i = new Array,
                        r = 0; r < t.length; r++) i.push(t.value[r]);
                        e = o.utf82string(i);
                        break;
                    case l:
                        var h, p = new Object;
                        if (p.deep = n.deep + 1, p.array_index = 0, p.array_tag = null, p.result = new Object, t.mainindex >= 0) {
                            if (p.mainindex_tag = t.mainindex, (h = R(t.subtype, t.value, t.length, C, p)) < 0 || h != t.length) return h;
                            e = p.result;
                            break
                        }
                        if (p.mainindex_tag = -1, p.key_index = 0, (h = R(t.subtype, t.value, t.length, C, p)) < 0) return u;
                        if (h != t.length) return h;
                        e = p.result;
                        break;
                    default:
                        alert("Invalid type")
                    }
                    return t.index > 0 ? n.result[t.tagname][t.index - 1] = e: n.result[t.tagname] = e,
                    0
                }
                function M(t, e) {
                    var o = t.tcache[e];
                    return null == o && (o = N(t, e), t.tcache[e] = o),
                    o
                }
                function j(t, e) {
                    var o = null,
                    n = null;
                    if ("number" == typeof e) {
                        if (o = e, null === (n = G(t, e))) return null
                    } else if (n = o = D(t, e), -1 === o) return null;
                    return {
                        ret1: n,
                        request: x(t, o, i),
                        response: x(t, o, r)
                    }
                }
                function H(t, e) {
                    var o = t.pcache[e];
                    if (null == o) {
                        var n = j(t, e),
                        i = n.ret1;
                        if ("number" == typeof e) {
                            var r = i;
                            i = e,
                            e = r
                        }
                        o = {
                            request: n.request,
                            response: n.response,
                            name: e,
                            tag: i
                        },
                        t.pcache[e] = o,
                        t.pcache[i] = o
                    }
                    return o
                }
                function V(t, e, i) {
                    return function(r) {
                        n.type = null,
                        n.session = i;
                        var a = t.proto.encode(t.package, n);
                        if (e) {
                            var s = t.proto.encode(e, r);
                            return t.proto.pack(o.arrayconcat(a, s))
                        }
                        return t.proto.pack(a)
                    }
                }
                return S.dump = function() {
                    console.log("========== sproto dump =========="),
                    k(this),
                    console.log("=================================")
                },
                S.objlen = function(t, e) {
                    var o = null;
                    if ("string" == typeof t || "number" == typeof t) {
                        if (null == (o = M(S, t))) return null
                    } else o = t;
                    var n = new Object;
                    return n.array_tag = null,
                    n.deep = 0,
                    n.result = new Object,
                    R(o, e, e.length, C, n)
                },
                S.encode = function(t, e) {
                    var o = new Object,
                    n = null;
                    if ("string" == typeof t || "number" == typeof t) {
                        if (null == (n = M(S, t))) return null
                    } else n = t;
                    var i = new Array;
                    for (o.st = n, o.tbl_index = 2, o.indata = e;;) return o.array_tag = null,
                    o.array_index = 0,
                    o.deep = 0,
                    o.iter_index = 3,
                    O(n, i, 0, I, o) < 0 ? null: i
                },
                S.decode = function(t, e) {
                    var o = null;
                    if ("string" == typeof t || "number" == typeof t) {
                        if (null == (o = M(S, t))) return null
                    } else o = t;
                    var n = e,
                    i = e.length,
                    r = new Object;
                    return r.array_tag = null,
                    r.deep = 0,
                    r.result = new Object,
                    R(o, n, i, C, r) < 0 ? null: r.result
                },
                S.pack = function(e) {
                    return t.pack(e)
                },
                S.unpack = function(e) {
                    return t.unpack(e)
                },
                S.pencode = function(t, e) {
                    var o = S.encode(t, e);
                    return null == o ? null: S.pack(o)
                },
                S.pdecode = function(t, e) {
                    var o = S.unpack(e);
                    return null == o ? null: S.decode(t, o)
                },
                S.host = function(t) {
                    function o(t) {
                        t = t || "package",
                        this.proto = S,
                        this.package = M(S, t),
                        this.package = this.package ? this.package: "package",
                        this.session = {}
                    }
                    return o.prototype = e,
                    new o(t)
                },
                e.attach = function(t) {
                    this.attachsp = t;
                    var e = this;
                    return function(i, r, a) {
                        var s = H(t, i);
                        n.type = s.tag,
                        n.session = a;
                        var c = t.encode(e.package, n);
                        if (a && (e.session[a] = !s.response || {
                            response: s.response,
                            name: s.name
                        }), r) {
                            var l = t.encode(s.request, r);
                            return {
                                packed: t.pack(o.arrayconcat(c, l)),
                                hasResponse: null != s.response
                            }
                        }
                        return {
                            packed: t.pack(c),
                            hasResponse: null != s.response
                        }
                    }
                },
                e.dispatch = function(t) {
                    var e = this.proto,
                    o = e.unpack(t);
                    n.type = null,
                    n.session = null,
                    n = e.decode(this.package, o);
                    var i = e.objlen(this.package, o),
                    r = o.slice(i, o.length);
                    if (n.type) {
                        var a = H(e, n.type);
                        return a.request && (s = e.decode(a.request, r)),
                        n.session ? {
                            type: "REQUEST",
                            pname: a.name,
                            result: s,
                            responseFunc: V(this, a.response, n.session),
                            session: n.session
                        }: {
                            type: "REQUEST",
                            pname: a.name,
                            result: s
                        }
                    }
                    e = this.attachsp;
                    var s, c = n.session,
                    l = this.session[c];
                    return delete this.session[c],
                    !0 === l ? {
                        type: "RESPONSE",
                        session: c
                    }: {
                        type: "RESPONSE",
                        session: c,
                        result: s = e.decode(l.response, r),
                        pname: l.name
                    }
                },
                S
            },
            t
        } ();
        e.exports = n,
        cc._RF.pop()
    },
    {
        "./../utils/utils": "utils"
    }],
    utils: [function(t, e) {
        "use strict";
        cc._RF.push(e, "6f3a8zxTOJBZJPaSs2XG/v5", "utils");
        var o, n = o = {
            getQueryVariable: function(t) {
                for (var e = window.location.search.substring(1).split("&"), o = 0; o < e.length; o++) {
                    var n = e[o].split("=");
                    if (n[0] == t) return n[1]
                }
                return ! 1
            },
            array2arraybuffer: function(t) {
                for (var e = new ArrayBuffer(t.length), o = new DataView(e, 0), n = 0; n < t.length; n++) o.setUint8(n, t[n]);
                return e
            },
            arraybuffer2array: function(t) {
                for (var e = new DataView(t, 0), o = new Array, n = 0; n < e.byteLength; n++) o[n] = e.getUint8(n);
                return o
            },
            string2utf8: function(t) {
                for (var e = [], o = 0; o < t.length; o++) {
                    var n = t.charCodeAt(o);
                    0 <= n && n <= 127 ? e.push(n) : 128 <= n && n <= 2047 ? (e.push(192 | 31 & n >> 6), e.push(128 | 63 & n)) : (2048 <= n && n <= 55295 || 57344 <= n && n <= 65535) && (e.push(224 | 15 & n >> 12), e.push(128 | 63 & n >> 6), e.push(128 | 63 & n))
                }
                for (o = 0; o < e.length; o++) e[o] &= 255;
                return e
            },
            utf82string: function(t) {
                if ("string" == typeof t) return null;
                for (var e = "",
                o = 0; o < t.length && null != t[o]; o++) {
                    var n = t[o].toString(2),
                    i = n.match(/^1+?(?=0)/);
                    if (i && 8 == n.length) {
                        for (var r = i[0].length, a = t[o].toString(2).slice(7 - r), s = 1; s < r; s++) a += t[s + o].toString(2).slice(2);
                        e += String.fromCharCode(parseInt(a, 2)),
                        o += r - 1
                    } else e += String.fromCharCode(t[o])
                }
                return e
            },
            checknumber: function(t, e) {
                return tonumber(t, e) || 0
            },
            urlencode: function(t) {
                return t = string.gsub(tostring(t), "
", "\r
"),
                t = string.gsub(t, "([^%w%.%- ])", urlencodechar),
                string.gsub(t, " ", "+")
            },
            urldecode: function(t) {
                return t = string.gsub(t, "+", " "),
                t = string.gsub(t, "%%(%x%x)",
                function(t) {
                    return string.char(o.checknumber(t, 16))
                }),
                string.gsub(t, "\r
", "
")
            },
            arrayconcat: function(t, e) {
                for (var o = new Array,
                n = 0; n < t.length; n++) o[n] = t[n];
                for (var i = t.length; i < t.length + e.length; i++) o[i] = e[i - t.length];
                return o
            },
            setFitSreenMode: function() {
                var t = cc.find("Canvas"),
                e = cc.view.getFrameSize(),
                o = e.width,
                n = e.height,
                i = t.getComponent(cc.Canvas);
                o / n > i.designResolution.width / i.designResolution.height ? (i.fitHeight = !0, i.fitWidth = !1) : (i.fitHeight = !1, i.fitWidth = !0)
            }
        };
        e.exports = n,
        cc._RF.pop()
    },
    {}]
},
{},
["ActiveView", "Ball", "GameConfig", "ErrorCode", "NetManager", "ShareManager", "WebHistoryManager", "sha1", "GameMusic", "GameOver", "GameScene", "GameUtil", "GlobalData", "GolfGameManage", "GuideReward", "InviteRewardItem", "MapItem", "MatchRewardItem", "RankItem", "RewardRecordItem", "StationItem", "TaskItem", "LabelAction", "ActiveRuleView", "DiamondOrTicketTip", "GuideView", "HelpSuccessView", "InviteRewardView", "LevelView", "MatchRewardView", "PlayRuleView", "RankDetailView", "RankView", "RecordView", "TaskView", "LoadingAction", "LoginInfo", "LogonManager", "PopTipView", "Start", "TestView", "TiledMapTest", "TipManage", "TipNode", "distConfig", "sproto", "UISuperItem", "UISuperLayout", "UISuperScrollView", "PlatformUtils", "utils", "NativeShare", "jweixin-1.6.0"]);