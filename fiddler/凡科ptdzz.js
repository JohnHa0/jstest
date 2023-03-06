var Puzzle = function() {
    function t(t, e, a, i) {
        var s = ptRanks.split("x");
        this.wrap = t,
        this.img = e,
        this.x = a || parseInt(s[0]),
        this.y = i || parseInt(s[1]),
        this.w = this.wrap.width(),
        this.h = this.wrap.height(),
        this.sizeW = Math.ceil(this.w / this.x),
        this.sizeH = Math.ceil(this.h / this.y),
        this.w = this.sizeW * this.x,
        this.h = this.sizeH * this.y,
        this.size = this.x * this.y,
        this.step = 0,
        this.lastTarget = null,
        this.currentTarget = null,
        this.create()
    }
    return $.extend(t.prototype, {
        create: function() {
            this.setPuzzle(),
            this.step > this.size / 2 && this.setPuzzle(),
            this.setTapEvent()
        },
        setPuzzle: function() {
            for (var t = [], e = 0; e < this.size; e++) t.push(e);
            //HdGame.shuffle(t);
			var tmp=t[0];
			t[0]=t[1];
			t[1]=tmp;
            var a = "";
            for (e = 0; e < this.y; e++) for (var i = 0; i < this.x; i++) {
                var s = e * this.x + i,
                r = this.getXY(t[s]);
                a += '<div id="puzzle-' + s + '" class="puzzle" data-index=' + t[s] + ' style="width:' + this.sizeW + "px;height:" + this.sizeH + "px;left:" + i * this.sizeW + "px;top:" + e * this.sizeH + "px;background-image:url(" + this.img + ");background-size:" + this.w + "px " + this.h + "px;background-position:" + -r.x * this.sizeW + "px " + -r.y * this.sizeH + 'px;"></div>',
                s == t[s] && this.step++
            }
            this.wrap.html(a)
        },
        setTapEvent: function() {
            var t = this;
            fromIframe ? (this.wrap.off("touchstart").on("touchstart", ".puzzle", (function(e) {
                if (e.preventDefault(), e.stopPropagation(), !_gameOver && !t.currentTarget) {
                    var a = e.originalEvent.targetTouches[0];
                    t.currentTarget = this,
                    t.lastTarget = $(this),
                    $(this).addClass("target"),
                    t.originalx = a.pageX,
                    t.originaly = a.pageY,
                    t.ox = parseFloat(e.target.style.left),
                    t.oy = parseFloat(e.target.style.top),
                    t.CD = 0,
                    $(this).css("z-index", "10")
                }
            })), this.wrap.off("touchmove").on("touchmove", ".puzzle", (function(e) {
                e.preventDefault(),
                e.stopPropagation();
                var a = this[0];
                if (! (_gameOver || t.currentTarget !== a || t.CD++<2)) {
                    t.CD = 0;
                    var i = e.originalEvent,
                    s = t.ox + i.pageX - t.originalx,
                    r = t.oy + i.pageY - t.originaly;
                    s > 0 && s + t.sizeW < t.w && (a.style.left = s + "px"),
                    r > 0 && r + t.sizeH < t.h && (a.style.top = r + "px");
                    var g = t.getTarget(a.style);
                    g[0] !== a && g !== t.lastTarget && (t.lastTarget.removeClass("checked"), g.addClass("checked"), t.lastTarget = g)
                }
            })), this.wrap.off("touchend").on("touchend", ".puzzle", (function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                _gameOver || t.currentTarget !== this || e()
            }))) : (this.wrap.off("touchstart").on("touchstart", ".puzzle", (function(e) {
                if (e.preventDefault(), e.stopPropagation(), !_gameOver && !t.currentTarget) {
                    var a = e.originalEvent.targetTouches[0];
                    t.currentTarget = this,
                    t.lastTarget = $(this),
                    $(this).addClass("target"),
                    t.originalx = a.pageX,
                    t.originaly = a.pageY,
                    t.ox = parseFloat(e.target.style.left),
                    t.oy = parseFloat(e.target.style.top),
                    t.CD = 0,
                    $(this).css("z-index", "10")
                }
            })), this.wrap.off("touchmove").on("touchmove", ".puzzle", (function(e) {
                if (! (_gameOver || t.currentTarget !== this || t.CD++<2)) {
                    t.CD = 0;
                    var a = e.originalEvent.targetTouches[0],
                    i = t.ox + a.pageX - t.originalx,
                    s = t.oy + a.pageY - t.originaly;
                    i > 0 && i + t.sizeW < t.w && (this.style.left = i + "px"),
                    s > 0 && s + t.sizeH < t.h && (this.style.top = s + "px");
                    var r = t.getTarget(this.style);
                    r[0] !== this && r !== t.lastTarget && (t.lastTarget.removeClass("checked"), r.addClass("checked"), t.lastTarget = r)
                }
            })), this.wrap.off("touchend").on("touchend", ".puzzle", (function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                _gameOver || t.currentTarget !== this || e()
            }))),
            this.wrap.on("touchcancel", ".puzzle", (function() {
                event.preventDefault(),
                event.stopPropagation(),
                e()
            }));
            var e = function() {
                if (t.currentTarget) {
                    $(t.currentTarget).css("z-index", "0"),
                    $(t.currentTarget).removeClass("target"),
                    t.lastTarget.removeClass("checked");
                    var e = t.getIndexByOff(t.currentTarget.style),
                    a = t.getIndexById(t.currentTarget.id);
                    t.swap(e, a),
                    t.setStep() && (hg.time.end(), _gameOver = !0, gameOver(hg.time.val)),
                    t.currentTarget = null
                }
            }
        },
        getTarget: function(t) {
            var e = this.getIndexByOff(t);
            return this.wrap.find("#puzzle-" + e)
        },
        getIndex: function(t, e) {
            return e * this.x + t
        },
        getXY: function(t) {
            return {
                x: t % this.x,
                y: ~~ (t / this.x)
            }
        },
        getIndexByOff: function(t) {
            var e = ~~ ((parseFloat(t.left) + this.sizeW / 2) / this.sizeW),
            a = ~~ ((parseFloat(t.top) + this.sizeH / 2) / this.sizeH);
            return this.getIndex(e, a)
        },
        getIndexById: function(t) {
            return t.split("-")[1]
        },
        swap: function(t, e) {
            var a = this.wrap.find("#puzzle-" + t),
            i = this.wrap.find("#puzzle-" + e);
            this.setOffset(a, e),
            this.setOffset(i, t),
            a.attr("id", "puzzle-" + e),
            i.attr("id", "puzzle-" + t)
        },
        setOffset: function(t, e) {
            var a = this.getXY(e);
            t.css({
                left: a.x * this.sizeW,
                top: a.y * this.sizeH
            })
        },
        setStep: function() {
            this.step = 0;
            for (var t = 0; t < this.size; t++) t == $("#puzzle-" + t).data("index") && this.step++;
            return this.step === this.size
        }
    }),
    t
} ();
function showGamePage() {
    $("#ruleImg").hide(),
    $(".homeBtnBox").hide(),
    $(".footerBox").hide(),
    $(".home").hide(),
    $("#poupInfoBox").hide(),
    $(".resuleBox").hide(),
    $(".gameBox").show()
}
function gamePicLayer() {
    var t = [],
    e = {
        from: "#gameStartBtn,#gameStartImg",
        title: "*å¼€å§‹æŒ‰é’®*",
        limit: "5000k"
    };
    e.defSrc = game_assets.gameStartBtn_def;
    var a = {
        from: "#tipsBtn",
        title: "*æç¤ºæŒ‰é’®*",
        limit: "5000k"
    };
    a.defSrc = game_assets.tipsBtn_def,
    t.push(e),
    t.push(a);
    var i = [],
    s = {
        from: "#gameImg",
        title: "æ‹¼å›¾å›¾ç‰‡",
        limit: "5000k"
    };
    s.src = $("#gameImg").attr("src"),
    $$((function() {
        s.src = parent.getJqSrc($("#gameImg"))
    })),
    s.defSrc = game_assets.gameImg_def,
    i.push(s),
    HdGame.diffModuleLayerImg.handlePage({
        page: "allPage",
        imgArgs: i.concat(t)
    }),
    HdGame.initModuleLayer("#gameStartBtns", -1, "", t),
    HdGame.initModuleLayer("#gameImg", -1, "", i)
}
function gameInit() {
    hg.time.init(),
    $("#gameStartImg").show(),
    $("#tipsImg").hide(),
    $("#gameImgWrap").hide(),
    $("#gameImg").show(),
    firstFlag = !0,
    toggleFlag = !0,
    _gameOver = !1
}
function home() {
    $("#ruleImg").show(),
    $(".homeBtnBox").show(),
    $(".footerBox").show(),
    $(".gameBox").hide(),
    startBtnDelay(),
    $(".home").show(),
    $("#poupInfoBox").hide(),
    $(".resuleBox").hide(),
    gameInit()
}
function gameRestart() {
    $(".gameBox").show(),
    gameInit()
}
$((function() {
    if (gameInit(), _manage) {
        gamePicLayer(),
        $$((function() {
            parent.setJqSrc($("#gameImg"), game_assets.gameImg),
            HdGame.moduleSlaveImgResize($("#gameStartBtns"), {
                width: game_assets.gameStartBtn_w_def,
                height: game_assets.gameStartBtn_h_def
            }),
            HdGame.moduleDraggale("#gameStartBtns", !1),
            $("#gameStartImg").data("defData", {
                width: game_assets.gameStartBtn_w_def,
                height: game_assets.gameStartBtn_h_def
            }).on("load", (function() {
                var t = $(this).data("your-Original-Size"),
                e = $(this).data("hd-resizable-autoChange");
                if (t) {
                    var a = $(this).data("defData"),
                    i = {
                        width: parseRemToPx(a.width),
                        height: parseRemToPx(a.height)
                    },
                    s = HdGame.Img.calcSize(t.width, t.height, i.width, i.height, HdGame.Img.MODE_SCALE_DEFLATE_FILL),
                    r = HdGame.getPosition($(this), i, s);
                    $(this).parent().css({
                        width: s.width,
                        height: s.height
                    });
                    var g = $.extend({},
                    s);
                    g = $.extend(g, r),
                    $(this).parent().css({
                        left: r.left,
                        top: r.top
                    }),
                    e && e.fireWith(this, [g]),
                    $(this).removeData("your-Original-Size").attr("resize", "1")
                }
            }))
        }));
        var t = ["2x3", "3x3", "3x4", "4x4", "4x5", "5x5", "5x6"];
        $("#gameImg").addEditUploadFn("imgEdit", (function(e) {
            var a, i = e.getWarp("info");
            i.prepend('<div class="editLine uploadLine"><span class="title item" style="text-align:right;">æ‹¼å›¾æ ¼æ•°ï¼š</span><select  class="setAllTitleNums input" name="titleNums" style="height: 44px; width: 82px;padding-left: 3px;margin-left: 20px;">' + (a = "", $.each(t, (function(t, e) {
                var i = e.split("x");
                a += '<option value="' + e + '">' + i[0] * i[1] + "æ ¼</option>"
            })), a + "</select></div>")),
            i.find(".setAllTitleNums").val(ptRanks).change((function(t) {
                ptRanks = $(this).val(),
                $$((function() {
                    parent.changeIsSave()
                }))
            }))
        })),
        hg.on("save", (function(t) {
            t.pt_ranks = ptRanks
        }))
    } else HdGame.imgReady(game_assets.gameImg, (function() {
        var t = "#gameImg",
        e = {
            width: $(t).outerWidth(),
            height: $(t).outerHeight()
        },
        a = HdGame.Img.calcSize(this.width, this.height, e.width, e.height, HdGame.Img.MODE_SCALE_DEFLATE_FILL);
        $(t).css({
            "background-image": 'url("' + game_assets.gameImg + '")',
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "background-size": a.width + "px " + a.height + "px"
        })
    }));
    var e = $("#gameStartImg"),
    a = $("#gameImgWrap"),
    i = $("#gameImg"),
    s = $("#tipsImg");
    $("#gameStartBtns").on("touchend", (function() {
        if (event.preventDefault(), event.stopPropagation(), firstFlag) {
            firstFlag = !1,
            e.hide(),
            i.hide(),
            s.show(),
            a.show(),
            hg.time.start();
            new Puzzle($("#gameImgWrap"), game_assets.gameImg)
        } else toggleFlag ? (a.hide(), i.show(), e.show(), s.hide(), toggleFlag = !1) : (a.show(), i.hide(), e.hide(), s.show(), toggleFlag = !0)
    })),
    testGame && $(".gameBox").on("touchstart", (function(t) {
        t.originalEvent.changedTouches[0].pageX,
        t.originalEvent.changedTouches[0].pageY < 3.3 * g_rem && !_gameOver && (hg.time.end(), _gameOver = !0, gameOver(hg.time.val))
    }))
}));