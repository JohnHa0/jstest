/*
* @ time: 2018/07/16
* @ author: allen
*/
$(function(){
	
	function a(){
	 $.getJSON("/start?game=2",function(data){
		
            if (data.code === 0) {
                localStorage.setItem("gameToken", JSON.stringify(data.data));
				var gameToken=data.data;
				 $.post('/finished', {
                    n: 50,
                    game: 2,
                    timestamp: gameToken.timestamp,
                    token: gameToken.token
                }, function (res) {
                    if (res.code === 0) {
                        jq("#tk2").fadeIn(100);
                        jq("#tk2").find(".score").text(res.data.points);
						setTimeout(a,1000)
                    }
                    else {
                        alert("服务器错误，请重试")
                    }
                }, "json")
            }
            //game.gameInit()
        });
	}
	a();
})
function tplay(musicUrl) {
    var htm = '<audio id="www" src="' + musicUrl + '" preload="auto" style="visibility: hidden;"></audio>';
    $('body').append(htm);
    var bgmusic = document.getElementById('www');
    bgmusic.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        bgmusic.play()
    }, false)
};

function s(e) {
    var i = document.getElementById(e);
    // i.pause()
};

function o(e) {
    // var i = document.getElementById(e),
    //     n = function() {
    //         document.removeEventListener("WeixinJSBridgeReady", n), document.removeEventListener("YixinJSBridgeReady", n), i.play(), i.pause()
    //     };
    // document.addEventListener("WeixinJSBridgeReady", n, !1), document.addEventListener("YixinJSBridgeReady", n, !1)
};

function log(str) {
    console.log(str)
};

function getAngle(px, py, mx, my) {
    var x = Math.abs(px - mx);
    var y = Math.abs(py - my);
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    var cos = y / z;
    var radina = Math.acos(cos);
    var angle = Math.floor(radina * 180 / Math.PI);
    if (mx > px && my > py) {
        angle = 180 - angle
    }
    if (mx == px && my > py) {
        angle = 180
    }
    if (mx > px && my == py) {
        angle = 90
    }
    if (mx < px && my > py) {
        angle = 180 + angle
    }
    if (mx < px && my == py) {
        angle = 270
    }
    if (mx < px && my < py) {
        angle = 360 - angle
    }
    return angle
}
function Minmax(min, max) {
    return Math.min(Math.max(this, min), max)
};

function getAtan2(target, obj) {
    return Math.atan2(target.y - obj.y, target.x - obj.x)
};

function randnum(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
};

function radian(deg) {
    return deg * Math.PI / 180
}
function SceneOne() {
    PIXI.Container.call(this), this.init = function () {
        var bg = this.createSprite("images/bg1.png");
        this.addChild(bg);
        var yun1 = this.createSprite("images/sence/3.png");
        yun1.position.set(-150, -10);
        this.addChild(yun1);
        TWEEN.Tween.get(yun1, {
            loop: true
        }).to({
            x: 50
        }, 5000, TWEEN.Ease.linear).to({
            x: -150
        }, 5000, TWEEN.Ease.linear);
        var yun2 = this.createSprite("images/sence/4.png");
        yun2.position.set(564, 132);
        this.addChild(yun2);
        TWEEN.Tween.get(yun2, {
            loop: true
        }).to({
            x: 350
        }, 4000, TWEEN.Ease.linear).to({
            x: 564
        }, 4000, TWEEN.Ease.linear);
        var yun3 = this.createSprite("images/sence/5.png");
        yun3.position.set(-50, 330);
        this.addChild(yun3);
        TWEEN.Tween.get(yun3, {
            loop: true
        }).to({
            x: 10
        }, 3000, TWEEN.Ease.linear).to({
            x: -50
        }, 3000, TWEEN.Ease.linear);
        var yun4 = this.createSprite("images/sence/6.png");
        yun4.position.set(650, 343);
        this.addChild(yun4);
        TWEEN.Tween.get(yun4, {
            loop: true
        }).to({
            x: 550
        }, 3000, TWEEN.Ease.linear).to({
            x: 650
        }, 3000, TWEEN.Ease.linear);
        var yun5 = this.createSprite("images/sence/7.png");
        yun5.position.set(90, 694);
        this.addChild(yun5);
        TWEEN.Tween.get(yun5, {
            loop: true
        }).to({
            x: 50
        }, 3000, TWEEN.Ease.linear).to({
            x: 90
        }, 3000, TWEEN.Ease.linear);
        var yun6 = this.createSprite("images/sence/8.png");
        yun6.position.set(508, 504);
        this.addChild(yun6);
        TWEEN.Tween.get(yun6, {
            loop: true
        }).to({
            x: 660
        }, 3000, TWEEN.Ease.linear).to({
            x: 508
        }, 3000, TWEEN.Ease.linear);
        var grass = this.createSprite("images/sence/9.png");
        grass.position.set(-60, Mc.viewHeight - 380);
        this.addChild(grass);
        var mc1 = this.createSprite("images/sence/1.png");
        mc1.position.set(-330, 176);
        this.addChild(mc1);
        var mc2 = this.createSprite("images/sence/2.png");
        mc2.position.set(288, 440);
        mc2.alpha = 0;
        this.addChild(mc2);
        var self = this;
        TWEEN.Tween.get(mc1).to({
            x: 116
        }, 1000, TWEEN.Ease.sineOut).call(function () {
            TWEEN.Tween.get(mc2).to({
                y: 322,
                alpha: 1
            }, 1000, TWEEN.Ease.sineOut).call(function () {
                TWEEN.Tween.get(mc1).to({
                    alpha: 0
                }, 400, TWEEN.Ease.linear);
                TWEEN.Tween.get(mc2).to({
                    alpha: 0
                }, 400, TWEEN.Ease.linear);
                TWEEN.Tween.get(grass).to({
                    alpha: 0,
                    y: Mc.viewHeight - 100
                }, 400, TWEEN.Ease.linear).call(function () {
                    self.update()
                })
            })
        })
    }, this.update = function () {
        var self = this;
        var mc3 = this.createSprite("images/sence/18.png");
        mc3.position.set(-20, Mc.viewHeight);
        mc3.alpha = 0;
        this.addChild(mc3);
        var t1 = this.createSprite("images/sence/10.png");
        t1.position.set(-360, 124);
        this.addChild(t1);
        var t2 = this.createSprite("images/sence/11.png");
        t2.position.set(256, 70);
        t2.alpha = 0;
        // this.addChild(t2);
        var t3 = this.createSprite("images/sence/12.png");
        t3.position.set(750, 374);
        t3.x = t3.x + (t3.width / 2);
        t3.y = t3.y + (t3.height / 2);
        t3.pivot.set((t3.width / 2), (t3.height / 2));
        // this.addChild(t3);
        var t4 = this.createSprite("images/sence/13.png");
        t4.position.set(81, 360);
        t4.alpha = 0;
        t4.x = t4.x + (t4.width / 2);
        t4.y = t4.y + (t4.height / 2);
        t4.pivot.set((t4.width / 2), (t4.height / 2));
        this.addChild(t4);
        var t1Mc = TWEEN.Tween.get(t1).to({
            x: 94
        }, 500, TWEEN.Ease.linear).call(function () {
            TWEEN.Tween.get(t2).to({
                y: 210,
                alpha: 1
            }, 400, TWEEN.Ease.linear).call(function () {
                TWEEN.Tween.get(t3).to({
                    x: 500,
                }, 300, TWEEN.Ease.linear).call(function () {
                    TWEEN.Tween.get(t4).wait(200).to({
                        y: 500,
                        alpha: 1
                    }, 200, TWEEN.Ease.linear).call(function () {
                        TWEEN.Tween.get(t4.scale).to({
                            x: 1.3,
                            y: 1.3
                        }, 200, TWEEN.Ease.linear).to({
                            x: 1,
                            y: 1
                        }, 200, TWEEN.Ease.linear).to({
                            x: 1.3,
                            y: 1.3
                        }, 200, TWEEN.Ease.linear).to({
                            x: 1,
                            y: 1
                        }, 200, TWEEN.Ease.linear).call(function () {
                            TWEEN.Tween.get(t5).to({
                                y: 500,
                                alpha: 1
                            }, 200, TWEEN.Ease.linear).call(function () {
                                TWEEN.Tween.get(t5.scale).to({
                                    x: 1.3,
                                    y: 1.3
                                }, 200, TWEEN.Ease.linear).to({
                                    x: 1,
                                    y: 1
                                }, 200, TWEEN.Ease.linear).to({
                                    x: 1.3,
                                    y: 1.3
                                }, 200, TWEEN.Ease.linear).to({
                                    x: 1,
                                    y: 1
                                }, 200, TWEEN.Ease.linear).call(function () {
                                    TWEEN.Tween.get(mc3).to({
                                        alpha: 1,
                                        y: Mc.viewHeight - 420
                                    }, 300, TWEEN.Ease.linear);
                                    TWEEN.Tween.get(t6).to({
                                        y: 500,
                                        alpha: 1
                                    }, 200, TWEEN.Ease.linear).call(function () {
                                        TWEEN.Tween.get(t6.scale).to({
                                            x: 1.3,
                                            y: 1.3
                                        }, 200, TWEEN.Ease.linear).to({
                                            x: 1,
                                            y: 1
                                        }, 200, TWEEN.Ease.linear).to({
                                            x: 1.3,
                                            y: 1.3
                                        }, 200, TWEEN.Ease.linear).to({
                                            x: 1,
                                            y: 1
                                        }, 200, TWEEN.Ease.linear).call(function () {
                                            TWEEN.Tween.get(t7).to({
                                                y: 586,
                                                alpha: 1
                                            }, 300, TWEEN.Ease.linear).call(function () {
                                                TWEEN.Tween.get(t8).wait(200).to({
                                                    x: 424,
                                                    alpha: 1
                                                }, 200, TWEEN.Ease.linear).call(function () {
                                                    TWEEN.Tween.get(t8.scale).to({
                                                        x: 1.3,
                                                        y: 1.3
                                                    }, 200, TWEEN.Ease.linear).to({
                                                        x: 1,
                                                        y: 1
                                                    }, 200, TWEEN.Ease.linear).to({
                                                        x: 1.3,
                                                        y: 1.3
                                                    }, 200, TWEEN.Ease.linear).to({
                                                        x: 1,
                                                        y: 1
                                                    }, 200, TWEEN.Ease.linear).call(function () {
                                                        Mc.SceneManager.loadScene("SceneTwo", false);
                                                        Mc.SceneManager.currentScene.position.set(750, 0);
                                                        TWEEN.Tween.get(self).wait(200).to({
                                                            x: -750
                                                        }, 300, TWEEN.Ease.linear);
                                                        TWEEN.Tween.get(Mc.SceneManager.currentScene).wait(200).to({
                                                            x: 0
                                                        }, 300, TWEEN.Ease.linear).call(function () {
                                                            Mc.SceneManager.stage.removeChildAt(0)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
        var t5 = this.createSprite("images/sence/14.png");
        t5.position.set(315, 372);
        t5.alpha = 0;
        t5.x = t5.x + (t5.width / 2);
        t5.y = t5.y + (t5.height / 2);
        t5.pivot.set((t5.width / 2), (t5.height / 2));
        this.addChild(t5);
        var t6 = this.createSprite("images/sence/15.png");
        t6.position.set(528, 360);
        t6.alpha = 0;
        t6.x = t6.x + (t6.width / 2);
        t6.y = t6.y + (t6.height / 2);
        t6.pivot.set((t6.width / 2), (t6.height / 2));
        this.addChild(t6);
        var t7 = this.createSprite("images/sence/16.png");
        t7.position.set(74, 456);
        t7.alpha = 0;
        this.addChild(t7);
        var t8 = this.createSprite("images/sence/17.png");
        t8.position.set(750, 704);
        t8.alpha = 0;
        t8.rotation = -30 * Math.PI / 180;
        t8.x = t8.x + (t8.width / 2);
        t8.y = t8.y + (t8.height / 2);
        t8.pivot.set((t8.width / 2), (t8.height / 2));
        this.addChild(t8)
    }, this.createSprite = function (t) {
        var r = PIXI.Sprite.fromImage(t);
        return r
    }
}
SceneOne.prototype = Object.create(PIXI.Container.prototype);

function SceneTwo() {
    PIXI.Container.call(this), this.init = function () {
        var self = this;
        var bg = this.createSprite("images/bg1.png");
        this.addChild(bg);
        var yun1 = this.createSprite("images/sence/3.png");
        yun1.position.set(-150, -10);
        this.addChild(yun1);
        TWEEN.Tween.get(yun1, {
            loop: true
        }).to({
            x: 50
        }, 5000, TWEEN.Ease.linear).to({
            x: -150
        }, 5000, TWEEN.Ease.linear);
        var yun2 = this.createSprite("images/sence/4.png");
        yun2.position.set(564, 132);
        this.addChild(yun2);
        TWEEN.Tween.get(yun2, {
            loop: true
        }).to({
            x: 480
        }, 4000, TWEEN.Ease.linear).to({
            x: 564
        }, 4000, TWEEN.Ease.linear);
        var yun3 = this.createSprite("images/sence/5.png");
        yun3.position.set(-50, 430);
        this.addChild(yun3);
        var yun4 = this.createSprite("images/sence/6.png");
        yun4.position.set(650, 343);
        this.addChild(yun4);
        TWEEN.Tween.get(yun4, {
            loop: true
        }).to({
            x: 550
        }, 3000, TWEEN.Ease.linear).to({
            x: 650
        }, 3000, TWEEN.Ease.linear);
        var yun5 = this.createSprite("images/sence/7.png");
        yun5.position.set(90, 694);
        this.addChild(yun5);
        TWEEN.Tween.get(yun5, {
            loop: true
        }).to({
            x: 50
        }, 3000, TWEEN.Ease.linear).to({
            x: 90
        }, 3000, TWEEN.Ease.linear);
        var yun6 = this.createSprite("images/sence/8.png");
        yun6.position.set(508, 504);
        this.addChild(yun6);
        TWEEN.Tween.get(yun6, {
            loop: true
        }).to({
            x: 660
        }, 3000, TWEEN.Ease.linear).to({
            x: 508
        }, 3000, TWEEN.Ease.linear);
        var ty = this.createSprite("images/sence/22.png");
        ty.position.set(296, Mc.viewHeight - 360);
        this.addChild(ty);
        var self = this;
        var x1 = this.createSprite("images/sence/19.png");
        x1.position.set(320, 0);
        x1.alpha = 0;
        x1.x = x1.x + (x1.width / 2);
        x1.y = x1.y + (x1.height / 2);
        x1.pivot.set((x1.width / 2), (x1.height / 2));
        this.addChild(x1);
        var x2 = this.createSprite("images/sence/20.png");
        x2.position.set(288, 68);
        x2.alpha = 0;
        x2.x = x2.x + (x2.width / 2);
        x2.y = x2.y + (x2.height / 2);
        x2.pivot.set((x2.width / 2), (x2.height / 2));
        this.addChild(x2);
        var x3 = this.createSprite("images/sence/21.png");
        x3.position.set(338, 484);
        x3.alpha = 0;
        x3.x = x3.x + (x3.width / 2);
        x3.y = x3.y + (x3.height / 2);
        x3.pivot.set((x3.width / 2), (x3.height / 2));
        this.addChild(x3);
        TWEEN.Tween.get(x1).wait(1000).to({
            y: 150,
            alpha: 1
        }, 400, TWEEN.Ease.linear).call(function () {
            TWEEN.Tween.get(x2).wait(300).to({
                y: 418,
                alpha: 1
            }, 400, TWEEN.Ease.linear).call(function () {
                TWEEN.Tween.get(x3).to({
                    y: 684,
                    alpha: 1
                }, 400, TWEEN.Ease.linear).call(function () {
                    TWEEN.Tween.get(self).wait(300).to({
                        alpha: 0
                    }, 800, TWEEN.Ease.circInOut).call(function () {
                        self.removeChild(x3, x2, x1, ty);
                        yun5.position.set(90, 954);
                        yun3.position.set(-80, 330);
                        self.update();
                        TWEEN.Tween.get(self).to({
                            alpha: 1
                        }, 800, TWEEN.Ease.circInOut).call(function () { })
                    })
                })
            })
        })
    }, this.update = function () {
        var self = this;
        var xty = this.createSprite("images/sence/36.png");
        xty.position.set(14, Mc.viewHeight - 220 - 112);
        this.addChild(xty);
        var yw1 = this.createSprite("images/sence/37.png");
        yw1.position.set(395, Mc.viewHeight - 140 - 112);
        yw1.rotation = 45 * Math.PI / 180;
        yw1.alpha = 0;
        this.addChild(yw1);
        TWEEN.Tween.get(yw1, {
            loop: true
        }).to({
            y: Mc.viewHeight - 200 - 112,
            alpha: 1,
            x: 234,
            rotation: 0,
        }, 2000, TWEEN.Ease.linear);
        var yw2 = this.createSprite("images/sence/38.png");
        yw2.position.set(320, Mc.viewHeight - 80 - 112);
        yw2.rotation = -45 * Math.PI / 180;
        yw2.alpha = 0;
        this.addChild(yw2);
        TWEEN.Tween.get(yw2, {
            loop: true
        }).to({
            y: Mc.viewHeight - 200 - 112,
            alpha: 1,
            x: 394,
            rotation: 0,
        }, 2000, TWEEN.Ease.linear);
        var b1 = this.createSprite("images/sence/23.png");
        b1.position.set(-186, 106);
        b1.alpha = 0;
        this.addChild(b1);
        var b2 = this.createSprite("images/sence/24.png");
        b2.position.set(306, -80);
        b2.alpha = 0;
        b2.x = b2.x + (b2.width / 2);
        b2.y = b2.y + (b2.height / 2);
        b2.pivot.set((b2.width / 2), (b2.height / 2));
        this.addChild(b2);
        var b3 = this.createSprite("images/sence/25.png");
        b3.position.set(-184, 180);
        b3.alpha = 0;
        this.addChild(b3);
        TWEEN.Tween.get(b1).wait(800).to({
            alpha: 1,
            x: 120,
        }, 300, TWEEN.Ease.linear).call(function () {
            TWEEN.Tween.get(b2).to({
                alpha: 1,
                y: 130,
            }, 300, TWEEN.Ease.linear).call(function () {
                TWEEN.Tween.get(b2.scale).to({
                    y: 1.2,
                    x: 1.2
                }, 200, TWEEN.Ease.linear).to({
                    y: 1,
                    x: 1
                }, 200, TWEEN.Ease.linear).to({
                    y: 1.2,
                    x: 1.2
                }, 200, TWEEN.Ease.linear).to({
                    y: 1,
                    x: 1
                }, 200, TWEEN.Ease.linear).call(function () {
                    TWEEN.Tween.get(b3).to({
                        x: 120,
                        alpha: 1
                    }, 300, TWEEN.Ease.linear).call(function () {
                        TWEEN.Tween.get(b4).to({
                            y: 280,
                            alpha: 1
                        }, 300, TWEEN.Ease.linear).call(function () {
                            TWEEN.Tween.get(b4.scale).to({
                                y: 1.2,
                                x: 1.2
                            }, 200, TWEEN.Ease.linear).to({
                                y: 1,
                                x: 1
                            }, 200, TWEEN.Ease.linear).to({
                                y: 1.2,
                                x: 1.2
                            }, 200, TWEEN.Ease.linear).to({
                                y: 1,
                                x: 1
                            }, 200, TWEEN.Ease.linear).call(function () {
                                TWEEN.Tween.get(b5).to({
                                    x: 320,
                                    alpha: 1
                                }, 300, TWEEN.Ease.linear).call(function () {
                                    TWEEN.Tween.get(b6).to({
                                        y: 370,
                                        alpha: 1
                                    }, 300, TWEEN.Ease.linear).call(function () {
                                        TWEEN.Tween.get(b6.scale).to({
                                            y: 1.2,
                                            x: 1.2
                                        }, 200, TWEEN.Ease.linear).to({
                                            y: 1,
                                            x: 1
                                        }, 200, TWEEN.Ease.linear).to({
                                            y: 1.2,
                                            x: 1.2
                                        }, 200, TWEEN.Ease.linear).to({
                                            y: 1,
                                            x: 1
                                        }, 200, TWEEN.Ease.linear).call(function () {
                                            TWEEN.Tween.get(b7).to({
                                                x: 122,
                                                alpha: 1
                                            }, 200, TWEEN.Ease.linear).call(function () {
                                                TWEEN.Tween.get(b8).to({
                                                    x: 398,
                                                    alpha: 1
                                                }, 300, TWEEN.Ease.linear).call(function () {
                                                    TWEEN.Tween.get(b8.scale).to({
                                                        y: 1.2,
                                                        x: 1.2
                                                    }, 200, TWEEN.Ease.linear).to({
                                                        y: 1,
                                                        x: 1
                                                    }, 200, TWEEN.Ease.linear).to({
                                                        y: 1.2,
                                                        x: 1.2
                                                    }, 200, TWEEN.Ease.linear).to({
                                                        y: 1,
                                                        x: 1
                                                    }, 200, TWEEN.Ease.linear).call(function () {
                                                        TWEEN.Tween.get(b9).to({
                                                            x: 126,
                                                            alpha: 1
                                                        }, 300, TWEEN.Ease.linear).call(function () {
                                                            TWEEN.Tween.get(b10).to({
                                                                x: 202,
                                                                alpha: 1
                                                            }, 300, TWEEN.Ease.linear).call(function () {
                                                                TWEEN.Tween.get(b10.scale).to({
                                                                    y: 1.2,
                                                                    x: 1.2
                                                                }, 200, TWEEN.Ease.linear).to({
                                                                    y: 1,
                                                                    x: 1
                                                                }, 200, TWEEN.Ease.linear).to({
                                                                    y: 1.2,
                                                                    x: 1.2
                                                                }, 200, TWEEN.Ease.linear).to({
                                                                    y: 1,
                                                                    x: 1
                                                                }, 200, TWEEN.Ease.linear).call(function () {
                                                                    TWEEN.Tween.get(b11).to({
                                                                        y: 738,
                                                                        alpha: 1
                                                                    }, 300, TWEEN.Ease.linear).call(function () {
                                                                        TWEEN.Tween.get(b12).to({
                                                                            y: 660,
                                                                            x: 456,
                                                                            alpha: 1
                                                                        }, 300, TWEEN.Ease.linear).call(function () {
                                                                            TWEEN.Tween.get(b13).to({
                                                                                y: 862,
                                                                                x: 580,
                                                                                alpha: 1
                                                                            }, 300, TWEEN.Ease.linear).call(function () {
                                                                                TWEEN.Tween.get(b13.scale).to({
                                                                                    y: 1.3,
                                                                                    x: 1.3
                                                                                }, 200, TWEEN.Ease.linear).to({
                                                                                    y: 1,
                                                                                    x: 1
                                                                                }, 200, TWEEN.Ease.linear).to({
                                                                                    y: 1.3,
                                                                                    x: 1.3
                                                                                }, 200, TWEEN.Ease.linear).to({
                                                                                    y: 1,
                                                                                    x: 1
                                                                                }, 200, TWEEN.Ease.linear).call(function () {
                                                                                    Mc.SceneManager.loadScene("SceneThree", false);
                                                                                    Mc.SceneManager.currentScene.position.set(750, 0);
                                                                                    TWEEN.Tween.get(self).wait(200).to({
                                                                                        x: -750
                                                                                    }, 300, TWEEN.Ease.linear);
                                                                                    TWEEN.Tween.get(Mc.SceneManager.currentScene).wait(200).to({
                                                                                        x: 0
                                                                                    }, 300, TWEEN.Ease.linear).call(function () {
                                                                                        Mc.SceneManager.stage.removeChildAt(0)
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
        var b4 = this.createSprite("images/sence/26.png");
        b4.position.set(122, 140);
        b4.alpha = 0;
        b4.x = b4.x + (b4.width / 2);
        b4.y = b4.y + (b4.height / 2);
        b4.pivot.set((b4.width / 2), (b4.height / 2));
        this.addChild(b4);
        var b5 = this.createSprite("images/sence/27.png");
        b5.position.set(750, 184);
        b5.alpha = 0;
        this.addChild(b5);
        var b6 = this.createSprite("images/sence/28.png");
        b6.position.set(390, 242);
        b6.alpha = 0;
        b6.x = b6.x + (b6.width / 2);
        b6.y = b6.y + (b6.height / 2);
        b6.pivot.set((b6.width / 2), (b6.height / 2));
        this.addChild(b6);
        var b7 = this.createSprite("images/sence/29.png");
        b7.position.set(-203, 434);
        b7.alpha = 0;
        this.addChild(b7);
        var b8 = this.createSprite("images/sence/30.png");
        b8.position.set(488, 418);
        b8.alpha = 0;
        b8.x = b8.x + (b8.width / 2);
        b8.y = b8.y + (b8.height / 2);
        b8.pivot.set((b8.width / 2), (b8.height / 2));
        this.addChild(b8);
        var b9 = this.createSprite("images/sence/31.png");
        b9.position.set(-186, 510);
        b9.alpha = 0;
        this.addChild(b9);
        var b10 = this.createSprite("images/sence/32.png");
        b10.position.set(302, 570);
        b10.alpha = 0;
        b10.x = b10.x + (b10.width / 2);
        b10.y = b10.y + (b10.height / 2);
        b10.pivot.set((b10.width / 2), (b10.height / 2));
        this.addChild(b10);
        var b11 = this.createSprite("images/sence/33.png");
        b11.position.set(86, 638);
        b11.alpha = 0;
        this.addChild(b11);
        var b12 = this.createSprite("images/sence/34.png");
        b12.position.set(750, 960);
        b12.alpha = 0;
        this.addChild(b12);
        var b13 = this.createSprite("images/sence/35.png");
        b13.position.set(750, 1182);
        b13.alpha = 0;
        b13.x = b13.x + (b13.width / 2);
        b13.y = b13.y + (b13.height / 2);
        b13.pivot.set((b13.width / 2), (b13.height / 2));
        this.addChild(b13);
        var bg1 = this.createSprite("images/sence/39.png");
        bg1.position.set(-2, Mc.viewHeight - 200);
        this.addChild(bg1)
    }, this.createSprite = function (t) {
        var r = PIXI.Sprite.fromImage(t);
        return r
    }
}
SceneTwo.prototype = Object.create(PIXI.Container.prototype);

function SceneThree() {
    PIXI.Container.call(this), this.init = function () {
        var self = this;
        var bg = this.createSprite("images/bg1.png");
        this.addChild(bg);
        var yun1 = this.createSprite("images/sence/3.png");
        yun1.position.set(-150, -10);
        this.addChild(yun1);
        TWEEN.Tween.get(yun1, {
            loop: true
        }).to({
            x: 50
        }, 5000, TWEEN.Ease.linear).to({
            x: -150
        }, 5000, TWEEN.Ease.linear);
        var yun2 = this.createSprite("images/sence/4.png");
        yun2.position.set(564, 132);
        this.addChild(yun2);
        TWEEN.Tween.get(yun2, {
            loop: true
        }).to({
            x: 480
        }, 4000, TWEEN.Ease.linear).to({
            x: 564
        }, 4000, TWEEN.Ease.linear);
        var yun3 = this.createSprite("images/sence/5.png");
        yun3.position.set(-50, 430);
        this.addChild(yun3);
        var yun5 = this.createSprite("images/sence/7.png");
        yun5.position.set(90, 1000);
        this.addChild(yun5);
        TWEEN.Tween.get(yun5, {
            loop: true
        }).to({
            x: 0
        }, 3000, TWEEN.Ease.linear).to({
            x: 90
        }, 3000, TWEEN.Ease.linear);
        var yun6 = this.createSprite("images/sence/8.png");
        yun6.position.set(508, 484);
        this.addChild(yun6);
        TWEEN.Tween.get(yun6, {
            loop: true
        }).to({
            x: 660
        }, 3000, TWEEN.Ease.linear).to({
            x: 508
        }, 3000, TWEEN.Ease.linear);
        var yf = this.createSprite("images/sence/48.png");
        yf.position.set(396, 926);
        this.addChild(yf);
        var c1 = this.createSprite("images/sence/40.png");
        c1.position.set(106, 0);
        c1.alpha = 0;
        this.addChild(c1);
        var c2 = this.createSprite("images/sence/41.png");
        c2.position.set(0, 208);
        c2.alpha = 0;
        this.addChild(c2);
        var c3 = this.createSprite("images/sence/42.png");
        c3.position.set(260, 116);
        c3.alpha = 0;
        this.addChild(c3);
        var c4 = this.createSprite("images/sence/43.png");
        c4.position.set(260, 220);
        c4.alpha = 0;
        this.addChild(c4);
        var c5 = this.createSprite("images/sence/44.png");
        c5.position.set(80, 404);
        c5.alpha = 0;
        this.addChild(c5);
        var c6 = this.createSprite("images/sence/45.png");
        c6.position.set(750, 626);
        c6.alpha = 0;
        // this.addChild(c6);
        TWEEN.Tween.get(c1).wait(500).to({
            y: 140,
            alpha: 1
        }, 400, TWEEN.Ease.linear).call(function () {
            TWEEN.Tween.get(c2).to({
                x: 174,
                alpha: 1
            }, 400, TWEEN.Ease.linear).call(function () {
                TWEEN.Tween.get(c3).wait(500).to({
                    y: 266,
                    alpha: 1
                }, 400, TWEEN.Ease.linear).call(function () {
                    TWEEN.Tween.get(c4).wait(500).to({
                        y: 370,
                        alpha: 1
                    }, 400, TWEEN.Ease.linear).call(function () {
                        TWEEN.Tween.get(c5).wait(500).to({
                            y: 554,
                            alpha: 1
                        }, 400, TWEEN.Ease.linear).call(function () {
                            TWEEN.Tween.get(c6).wait(500).to({
                                x: 80,
                                alpha: 1
                            }, 400, TWEEN.Ease.linear).call(function () {
                                TWEEN.Tween.get(c7.scale).to({
                                    x: 1,
                                    y: 1,
                                }, 400, TWEEN.Ease.linear).call(function () {
                                    TWEEN.Tween.get(c8).to({
                                        x: 386,
                                        alpha: 1
                                    }, 400, TWEEN.Ease.linear).call(function () {
                                        TWEEN.Tween.get(c8.scale).to({
                                            x: 1.2,
                                            y: 1.2
                                        }, 200, TWEEN.Ease.linear).to({
                                            x: 1,
                                            y: 1
                                        }, 200, TWEEN.Ease.linear).to({
                                            x: 1.2,
                                            y: 1.2
                                        }, 200, TWEEN.Ease.linear).to({
                                            x: 1,
                                            y: 1
                                        }, 200, TWEEN.Ease.linear).call(function () {
                                            self.update()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
        var c7 = this.createSprite("images/sence/46.png");
        c7.position.set(84, 800);
        c7.scale.set(0, 0);
        c7.x = c7.x + (c7.width / 2);
        c7.y = c7.y + (c7.height / 2);
        c7.pivot.set((c7.width / 2), (c7.height / 2));
        this.addChild(c7);
        var c8 = this.createSprite("images/sence/47.png");
        c8.position.set(600, 864);
        c8.alpha = 0;
        c8.x = c8.x + (c8.width / 2);
        c8.y = c8.y + (c8.height / 2);
        c8.pivot.set((c8.width / 2), (c8.height / 2));
        this.addChild(c8)
    }, this.update = function () {
        var self = this;
        var end = new PIXI.Container();
        var mask = new PIXI.Graphics();
        mask.position.set(0, 0);
        mask.beginFill(0xfffff, 1);
        mask.drawCircle(Mc.viewWidth / 2, Mc.viewHeight / 2, 0);
        mask.endFill();
        end.mask = mask;
        this.addChild(end, mask);
        TWEEN.Tween.get(mask.graphicsData[0].shape).wait(500).to({
            radius: Mc.viewHeight / 2 + 200
        }, 1000, TWEEN.Ease.linear).call(function () {
            log("$goto:" + $goto);
            if ($goto) {
                h5.moveTo(1, true);
                s("www");
                h5._bgMusic("music/bg.mp3");
                Mc.stopRefresh();
                jq("#stage").html("")
            }
        });
        var m1 = this.createSprite("images/bg2.png");
        end.addChild(m1);
        var m2 = this.createSprite("images/line.png");
        end.addChild(m2)
    }, this.createSprite = function (t) {
        var r = PIXI.Sprite.fromImage(t);
        return r
    }
}
SceneThree.prototype = Object.create(PIXI.Container.prototype);
!
    function ($) {
        var t = this;
        var e = e || {};
        e.stage = null, e.renderer = null, e.loader = null, e.ticker = null, e.Refresh = true, e.viewWidth = window.innerWidth, e.viewHeight = window.innerHeight, e.run = function () {
            // tplay("/game2/music/s.mp3");
            e.init();
            e.SceneManager.loadScene("SceneOne", false);
            e.loop()
        }, e.init = function () {
            e.ticker = new e.Ticker, TWEEN.Ticker.init(), e.stage = new PIXI.Container, e.renderer = new PIXI.CanvasRenderer(e.viewWidth, e.viewHeight, {
                transparent: true
            }), $("#stage").append(e.renderer.view), e.SceneManager = new e.SceneManager, e.SceneManager.stage = e.stage
        }, e.loop = function () {
            requestAnimationFrame(e.loop);
            if (e.ticker.isRun) {
                TWEEN.Ticker._tick()
            }
            if (e.Refresh) {
                e.renderer.render(e.stage)
            }
        }, e.stopRefresh = function () {
            this.Refresh = false
        }, e.Ticker = function () {
            this.tick = e.loop, this.isRun = true
        }, e.Ticker.prototype.stop = function () {
            this.isRun = false, TWEEN.Ticker.setPaused(true)
        }, e.Ticker.prototype.start = function () {
            this.isRun = true, TWEEN.Ticker.setPaused(false)
        }, e.Ticker.prototype.constructor = e.Ticker, e.SceneManager = function () {
            this.currentScene = null, this.stage = null
        }, e.SceneManager.prototype.loadScene = function (t, i) {
            TWEEN.Tween.removeAllTweens();
            this.currentScene = i ? new window[t](i) : new window[t];
            this.currentScene.init();
            this.stage.addChild(this.currentScene);
            log(t + " add to stage!")
        }, e.SceneManager.prototype.constructor = e.SceneManager, t.Mc = e
    }($);
o("mc");
o("bgmusic");
var $goto = true;
var jq = $.noConflict();
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var baseUrl = window.location.href.split('index')[0];
var h5 = new PageSlider({
    pages: $('.page-wrap .page'),
    dev: 0,
    baseUrl: baseUrl,
    onchange: function () {
        if (this.index == 1) {
            $(".p2-2")[0].addEventListener("webkitAnimationEnd", function () {
                jq(".p2-4").removeClass('none');
                jq(".p2-5").removeClass('none')
            }, false)
        } else {
            jq(".p2-4").addClass('none');
            jq(".p2-5").addClass('none')
        }
    }
});
h5.wxShare('热浪大逃亡', '夏日热浪逃亡狂欢季，来了就能拿福利！', h5.baseUrl + 'index.php', h5.baseUrl + 'images/share.png', function () { });

function music(musicUrl) {
    $('#btnMusic').html("");
    var htm = '<audio id="biu" src="' + musicUrl + '" preload="auto" style="visibility: hidden;"></audio>';
    $('#btnMusic').append(htm);
    var bgmusic = document.getElementById('biu');
    // bgmusic.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        // bgmusic.play()
    }, false)
}
function gameStart() {
    var resource = ["images/start-btn.png", "images/rule-btn.png", "images/rank-btn.png", "images/prize-btn.png", "images/line.png", "images/back.png", "images/goto.png", "images/ts.png", "images/play.png", "images/pause.png", "images/get-btn.png", "images/grass.png", "images/person.png", "images/tk/close.png", "images/tk/ewm.png", "images/tk/tk1-1.png", "images/tk/tk1-2.png", "images/tk/tk1-3.png", "images/tk/tk2-1.png", "images/tk/tk2-2.png", "images/tk/tk3-1.png", "images/tk/tk3-2.png", "images/tk/tk4-1.png", "images/tk/tk4-2.png", "images/tk/tk4-3.png", "images/tk/tk5-1.png", "images/tk/tk6-1.png", "images/tk/tk-fx.png", "images/tk/tk-rule.png"];
    for (var a = 1; a < 13; a++) resource.push("images/img" + a + ".png");
    for (var b = 1; b < 10; b++) resource.push("images/r" + b + ".png");
    for (var c = 1; c < 6; c++) resource.push("images/bg" + c + ".png");
    for (var d = 1; d < 11; d++) resource.push("images/tk/" + d + ".png");
    for (var e = 1; e < 50; e++) resource.push("images/sence/" + e + ".png");
    for (var i = 1; i < 6; i++) resource.push("images/" + i + ".png");

    function PIXICANVAS(a, b) {
        this.root = new PIXI.CanvasRenderer(a, b, {
            backgroundColor: 0xFFFFFF
        });
        this.stage = new PIXI.Container;
        this.poolContainer = new PIXI.Container;
        this.scoreTime = null;
        this.scoreObj = null;
        this.scorenum = 0;
        this.SpriteArr = ["images/r1.png", "images/r2.png", "images/r3.png", "images/r4.png", "images/r5.png", "images/r6.png", "images/r7.png", "images/r8.png", "images/r9.png", "images/r6.png"];
        this.targetContainer = new PIXI.Container;
        this.target = PIXI.Sprite.fromImage(window.person);
        this.targetSpeed = 20;
        this.cloudContainer = new PIXI.Container;
        this.flame = null;
        this.dieDistance = 200;
        this.firstTouch = true;
        this.move = false;
        this.rotateFlag = false;
        this.angle = 0;
        this.hitTarget = null;
        this.tsUrl = null;
        this.TOUCHENABLE = true;
        this.refresh = false;
        this.SpriteLength = 10;
        this.moveSpeed = 2;
        this.angleSpeed = 3;
        this.yoyoSpeed = 5;
        this.yoyonum = 1;
        this.distance = 400;
        this.timer = null;
        this.minutes = 0;
        this.seconds = 0;
        this.ms = 0;
        this.init()
    };
    PIXICANVAS.prototype.init = function () {
        var self = this;
        var bgContainer = new PIXI.Container();
        bgContainer.interactive = !0;
        bgContainer.buttonMode = !0;
        this.flame = PIXI.Sprite.fromImage("images/img11.png");
        this.flame.position.set(375, screenHeight - 256);
        this.flame.anchor.set(0.5, 0.5);
        this.flame.alpha = 0;
        var clockImg = PIXI.Sprite.fromImage("images/img10.png");
        clockImg.position.set(36, 48);
        var timeImg = PIXI.Sprite.fromImage("images/img9.png");
        timeImg.position.set(240, 52);
        var grass = PIXI.Sprite.fromImage("images/grass-01.png");
        grass.position.set(0, screenHeight - 1079);
        var sky = PIXI.Sprite.fromImage("images/bg5.png");
        sky.position.set(0, screenHeight - 270 - 1844);
        var cloud1 = PIXI.Sprite.fromImage("images/bg4.png");
        cloud1.position.set(0, screenHeight - 360 - 1638);
        var cloud2 = PIXI.Sprite.fromImage("images/bg4.png");
        cloud2.position.set(0, screenHeight - 360 - 1638 - 1638);
        this.cloudContainer.addChild(cloud1, cloud2);
        this.scoreObj = new PIXI.Text('0', {
            fontFamily: 'Arial',
            fontSize: 40,
            fill: 0xffffff,
            align: 'center'
        });
        this.scoreObj.position.set(104, 58);
        this.scoreTime = new PIXI.Text('00′00″00', {
            fontFamily: 'Arial',
            fontSize: 40,
            fill: 0xffffff,
            align: 'center'
        });
        this.scoreTime.position.set(294, 58);
        this.targetContainer.addChild(this.target);
        this.tsUrl = PIXI.Sprite.fromImage("images/ts.png");
        this.tsUrl.position.set(475, screenHeight - 430);
        this.tsUrl.anchor.set(0.5, 0.5);
        bgContainer.addChild(sky, this.cloudContainer, this.poolContainer, this.scoreTime, this.scoreObj, clockImg, timeImg, grass, this.targetContainer, this.flame, this.tsUrl);
        this.stage.addChild(bgContainer);
        this.target.position.set(375, screenHeight - 230);
        this.target.anchor.set(0.5, 0.5);
        this.target.scale.set(0.15, 0.15);
        this.target.rotation = 0;
        for (var i = 0; i < this.SpriteLength; i++) {
            var imgUrl = this.SpriteArr[i];
            var sprite = PIXI.Sprite.fromImage(imgUrl);
            var s = randnum(9, 10) / 10;
            sprite.anchor.set(0.5, 0.5);
            sprite.collide = false;
            sprite.rotation = 0;
            sprite.angleSpeed = Math.random() > 0.5 ? this.angleSpeed : -this.angleSpeed;
            if (i == 0) {
                sprite.animate = false;
                sprite.position.set(375, screenHeight - 900)
            } else {
                var lastSprite = this.poolContainer.children[this.poolContainer.children.length - 1];
                var num = randnum(sprite.width / 2 + 100, (750 - sprite.width / 2) - 100);
                sprite.animate = Math.random() > this.yoyonum ? true : false;
                sprite.position.set(num, lastSprite.y - this.distance)
            }
            this.poolContainer.addChild(sprite)
        }
        bgContainer.on("touchstart", function () {
            if (!self.TOUCHENABLE) return;
            self.TOUCHENABLE = false;
            self.rotateFlag = false;
            self.move = true;
            self.angle = 0;
            self.tsUrl.alpha = 0;
            music("music/btn.mp3");
            if (self.firstTouch) {
                self.refresh = true;
                self.timeUpdate()
            }
        });
        this.root.render(this.stage);
        this.animate()
    };
    PIXICANVAS.prototype.gameInit = function () {
        var self = this;
        this.poolContainer.y = 0;
        this.targetContainer.y = 0;
        this.cloudContainer.y = 0;
        self.tsUrl.alpha = 1;
        this.scoreTime.text = '00′00″00';
        this.scoreObj.text = 0;
        this.scorenum = 0;
        this.firstTouch = true;
        this.move = false;
        this.rotateFlag = false;
        this.angle = 0;
        this.hitTarget = null;
        this.TOUCHENABLE = true;
        this.target.position.set(375, screenHeight - 230);
        this.target.anchor.set(0.5, 0.5);
        this.target.rotation = 0;
        this.flame.alpha = 0;
        for (var i = 0; i < this.SpriteLength; i++) {
            var sprite = this.poolContainer.children[i];
            sprite.collide = false;
            sprite.rotation = 0;
            sprite.angleSpeed = Math.random() > 0.5 ? this.angleSpeed : -this.angleSpeed;
            if (i == 0) {
                sprite.animate = false;
                sprite.position.set(375, screenHeight - 900)
            } else {
                var lastSprite = this.poolContainer.children[i - 1];
                var num = randnum(sprite.width / 2 + 100, (750 - sprite.width / 2) - 100);
                sprite.animate = Math.random() > this.yoyonum ? true : false;
                sprite.position.set(num, lastSprite.y - this.distance)
            }
        }
    };
    PIXICANVAS.prototype.play = function () {
        var self = this;
        for (var i = 0, pool = this.poolContainer.children, lastSprite = pool[pool.length - 1]; i < pool.length; i++) {
            if (pool[i].animate) {
                if (pool[i].x <= pool[i].width / 2) {
                    pool[i].angleSpeed = this.angleSpeed;
                    pool[i].x += this.yoyoSpeed
                } else if (pool[i].x >= screenWidth - pool[i].width / 2) {
                    pool[i].angleSpeed = -this.angleSpeed;
                    pool[i].x -= this.yoyoSpeed
                } else {
                    if (pool[i].angleSpeed > 0) {
                        pool[i].x += this.yoyoSpeed
                    } else {
                        pool[i].x -= this.yoyoSpeed
                    }
                }
            }
            if (pool[i].getGlobalPosition().y - pool[i].height / 2 >= screenHeight) {
                var num = randnum(pool[i].width / 2 + 100, (750 - pool[i].width / 2) - 100);
                pool[i].position.set(num, lastSprite.y - this.distance);
                pool[i].animate = Math.random() > this.yoyonum ? true : false;
                pool[i].collide = false;
                this.poolContainer.setChildIndex(pool[i], pool.length - 1)
            }
            pool[i].rotation += radian(pool[i].angleSpeed)
        }
        this.poolContainer.y += this.moveSpeed;
        this.targetContainer.y += this.moveSpeed;
        this.cloudContainer.y >= 1638 ? this.cloudContainer.y = 0 : this.cloudContainer.y += 2;
        if (this.move && this.gameover()) {
            this.refresh = false;
            clearInterval(self.timer);
            music("music/gmover.mp3");
            this.ajax("moving", this.scorenum, this.scoreTime.text)
        }
        if (!this.move) {
            if (this.target.getGlobalPosition().y - this.target.height / 2 >= screenHeight - this.dieDistance) {
                this.refresh = false;
                clearInterval(self.timer);
                music("music/gmover.mp3");
                this.ajax("Don't move", this.scorenum, this.scoreTime.text)
            }
        }
        if (this.rotateFlag) {
            this.target.rotation = getAtan2(self.target, self.hitTarget) + Math.PI / 2;
            this.target.x = (self.hitTarget.x + Math.sin(-self.angle) * (self.hitTarget.width / 2 + this.target.height / 2));
            this.target.y = (self.hitTarget.y + Math.cos(-self.angle) * (self.hitTarget.width / 2 + this.target.height / 2));
            this.angle += radian(self.hitTarget.angleSpeed);
            this.TOUCHENABLE = true
        }
    };
    PIXICANVAS.prototype.PlayerMove = function () {
        var self = this;
        if (!this.firstTouch) {
            var deg = radian(getAngle(self.target.x, self.target.y, self.hitTarget.x, self.hitTarget.y));
            this.target.x -= Math.sin(deg) * this.targetSpeed;
            this.target.y += Math.cos(deg) * this.targetSpeed
        } else {
            this.target.y -= this.targetSpeed
        }
    };
    PIXICANVAS.prototype.gameover = function () {
        var player = this.target;
        var position = player.getGlobalPosition();
        if ((position.x + player.width / 2) <= 0 || (position.x - player.width / 2) >= 750 || position.y - player.height / 2 >= screenHeight - this.dieDistance || position.y + player.height / 2 <= 0) return true;
        return false
    };
    PIXICANVAS.prototype.hit = function (obj, target) {
        var distance = Math.sqrt(Math.pow(obj.x - target.x, 2) + Math.pow(obj.y - target.y, 2));
        return distance < (obj.width / 2) + (target.width / 2)
    };
    PIXICANVAS.prototype.animate = function () {
        var self = this;
        requestAnimationFrame(function () {
            self.animate()
        });
        self.root.render(self.stage);
        self.gameUpdate()
    };
    PIXICANVAS.prototype.gameUpdate = function () {
        var self = this;
        if (this.refresh) {
            if (this.move) {
                for (var i = 0, obj = this.poolContainer.children; i < obj.length; i++) {
                    if (this.hit(self.target, obj[i])) {
                        if (!obj[i].collide) {
                            this.scorenum++;
                            this.scoreObj.text = this.scorenum;
                            this.hitTarget = obj[i];
                            this.hitTarget.collide = true;
                            this.angle = radian(getAngle(self.target.x, self.target.y, self.hitTarget.x, self.hitTarget.y));
                            this.move = false;
                            this.rotateFlag = true;
                            this.firstTouch && (this.firstTouch = false, TWEEN.Tween.get(self.flame).to({
                                alpha: 1,
                            }, 500, TWEEN.Ease.linear))
                        }
                    }
                }
                self.PlayerMove()
            }
            this.play()
        }
    };
    PIXICANVAS.prototype.timeUpdate = function () {
        var self = this;
        this.timer = null;
        this.minutes = 0;
        this.seconds = 0;
        this.ms = 0;
        this.timer = setInterval(function () {
            self.scoreTime.text = self.CountDown(self)
        }, 10)
    };
    PIXICANVAS.prototype.CountDown = function (self) {
        self.ms++;
        if (self.seconds == 60) {
            self.minutes++;
            self.seconds = 0
        }
        if (self.ms == 100) {
            self.seconds++;
            self.ms = 0
        }
        var msStr = self.ms < 10 ? "0" + self.ms : self.ms;
        var secStr = self.seconds < 10 ? "0" + self.seconds : self.seconds;
        var minStr = self.minutes < 10 ? "0" + self.minutes : self.minutes;
        return minStr + "′" + secStr + "″" + msStr
    };
    PIXICANVAS.prototype.ajax = function (type, score, time) {
        log(type);
        //jq("#tkload").show();
        key(score, time)
    };
    var $id = 0;
    var $page = true;
    $(".tk-again-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk2").fadeOut();
        $.getJSON("/start?game=2",function(data){
            if (data.code === 0) {
                localStorage.setItem("gameToken", JSON.stringify(data.data));
            }
            game.gameInit()
        });
    });

    function key(score, time) {
        /*$.ajax({
            url: 'index.php?mod=game&ac=key',
            type: "post",
            dataType: "json",
            success: function(data) {
                ajax(score, time, data.encrypted)
            }
        })*/
        var encrypted = '称号'
        ajax(score, time, encrypted)
    };

    function ajax(score, time, encrypted) {
        /*$.ajax({
            url: 'index.php?mod=game&ac=game',
            type: "post",
            data: {
                score: score,
                gametime: time,
                encrypted: encrypted
            },
            dataType: "json",
            success: function(data) {
                jq("#tkload").hide();
                if (data.result) {
                    if (data.hasOwnProperty("id")) {
                        $id = data.id;
                        var str = 0;
                        if (data.id < 10) {
                            str = "000" + data.id
                        } else if (data.id < 100) {
                            str = "00" + data.id
                        } else if (data.id < 1000) {
                            str = "0" + data.id
                        } else {
                            str = data.id
                        }
                        jq(".tk4-4").html(str);
                        jq("#tk4").show()
                    }
                    Titlefn(score);
                    var $state = jq("#state").val();
                    if ($state == 0) {
                        jq("#tk10").show()
                    }
                } else {
                    if (data.error == 1) {
                        jq("#tk12").show();
                        Titlefn(score)
                    } else if (data.error == 2) {
                        alert("参数不全!")
                    } else if (data.error == 3) {
                        alert("非法请求!")
                    } else if (data.error == 4) {
                        alert("参与活动失败")
                    }
                }
            }
        })*/
        //alert(encrypted)

        /*var str = 888;
        jq(".tk4-4").html(str);
        jq("#tk4").show()*/

        Titlefn(score);
        var $state = jq("#state").val();
        if ($state == 0) {
            jq("#tk10").show()
        }
    };

    function rankList(cb) {
        $.ajax({
            url: 'index.php?mod=game&ac=rank',
            type: "get",
            dataType: "json",
            success: function (data) {
                if (data.result) {
                    var html = "";
                    if (data.data == null) {
                        html = '<li class="clearfix"><p class="nodata">暂无数据...</p></li>'
                    } else {
                        for (var i = 0, json = data.data; i < json.length; i++) {
                            html += '<li class="clearfix"><div class="rank-pm">' + (i + 1) + '</div>';
                            html += '<div class="rank-name">' + json[i].phone + '</div>';
                            html += '<div class="rank-score"><p>得分</p><p>' + json[i].score + '</p></div>';
                            html += '<div class="rank-time"><p>用时</p><p>' + json[i].gametime + '</p></div></li>'
                        }
                    }
                    jq(".rankul").html(html);
                    if (data.mydata.rank == null || data.mydata.rank > 102) {
                        jq(".myrank").html("暂未上榜")
                    } else {
                        jq(".myrank").html("NO:" + data.mydata.rank)
                    }
                    jq(".myscore").html(data.mydata.score);
                    jq(".mytime").html(data.mydata.gametime);
                    if (data.rankstate == 0) {
                        jq(".prize-btn").hide()
                    } else {
                        jq(".prize-btn").show()
                    }
                }
                cb && cb()
            }
        })
    };
    var Loader = new PIXI.loaders.Loader();
    var game = null;
    Loader.add(resource).onProgress.add(function (e) {
        jq("#process").html((Math.round(e.progress) + "%"))
    });
    Loader.load(function (res) {
        jq(".loading").fadeOut(300);
        Mc.run();
        game = new PIXICANVAS(screenWidth, screenHeight);
        jq(".page3 .page-inner").append(game.root.view)
    });
    $("#goto").on("click", function (e) {
        e.preventDefault();
        $goto = false;
        h5.moveTo(1, true);
        s("www");
        h5._bgMusic("music/bg.mp3");
        Mc.stopRefresh();
        jq("#stage").html("")
    });
    $(".start-btn").on("click", function (e) {
        e.preventDefault();
        h5.moveTo(2, true);
        TWEEN.Tween.get(game.tsUrl.scale, {
            loop: true
        }).to({
            x: 0.8,
            y: 0.8
        }, 400, TWEEN.Ease.linear).to({
            x: 1,
            y: 1
        }, 400, TWEEN.Ease.linear);
        jq("#tk1").show()
    });
    $(".tk4-2").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk4").fadeOut();
        jq("#tk5").show()
    });
    $(".prize-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk13").show()
    });
    var inputFlag3 = true;
    $(".tk5-2").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var phone = jq("#tk5-tel").val();
        if (phone.length != 11) {
            jq("#tk6").show();
            timeOut && clearTimeout(timeOut);
            var timeOut = setTimeout(function () {
                jq("#tk6").fadeOut()
            }, 2000)
        } else {
            if (inputFlag3) {
                inputFlag3 = false;
                $.ajax({
                    url: 'index.php?mod=game&ac=firstinfo',
                    type: "post",
                    data: {
                        phone: phone,
                        ranknum: $id
                    },
                    dataType: "json",
                    success: function (data) {
                        inputFlag3 = true;
                        if (data.result) {
                            jq("#tk5").fadeOut();
                            jq("#tk7").show();
                            timeOut1 && clearTimeout(timeOut);
                            var timeOut1 = setTimeout(function () {
                                jq("#tk7").fadeOut()
                            }, 2000)
                        } else {
                            if (data.error == 2) {
                                alert("参数不全！")
                            } else if (data.error == 3) {
                                alert("非法请求！")
                            } else if (data.error == 4) {
                                alert("数据库请求失败！")
                            }
                        }
                    }
                })
            }
        }
    });
    var rankFlag = true;
    $(".rank-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        /*$page = true;
        var $state = jq("#state").val();
        if ($state == 0) {
            jq("#tk10").show()
        } else {
            if (rankFlag) {
                rankFlag = false;
                rankList(function() {
                    rankFlag = true;
                    h5.moveTo(3, true)
                })
            }
        }*/
        alert('暂无开放！');
    });
    $(".tk-home-btn").on("click", function (e) {
        location.href = "/";
    });
    $(".tk-rank-btn").on("click", function (e) {
        /*e.preventDefault();
        e.stopPropagation();
        $page = false;
        var $state = jq("#state").val();
        if ($state == 0) {
            jq("#tk10").show()
        } else {
            if (rankFlag) {
                rankFlag = false;
                rankList(function() {
                    rankFlag = true;
                    h5.moveTo(3, true)
                })
            }
            jq("#tk2").fadeOut()
        }*/
        alert('暂无')
    });
    $(".close").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk1").fadeOut()
    });
    $(".rule-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk3").show()
    });
    $(".close-tk3").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk3").fadeOut()
    });
    $(".tk12-2").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk12").fadeOut()
    });
    $(".tk4-3").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk4").fadeOut()
    });
    $(".get-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk8").show()
    });
    $(".tk8-2").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk8").fadeOut()
    });
    $(".back").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$page) {
            jq("#tk2").show();
            h5.moveTo(2, true)
        } else {
            game.gameInit();
            h5.moveTo(1, true)
        }
    });
    $(".tk-helpfriends-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk9").fadeIn()
    });
    $("#tk9").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk9").fadeOut()
    });
    $(".tk10-close").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk10").fadeOut()
    });
    var flaglast = true;
    $(".tk13-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var name1 = jq("#tk13-name").val();
        var phone1 = jq("#tk13-tel").val();
        var address1 = jq("#tk13-adress").val();
        if (name1 == "" || phone1.length != 11 || address1 == "") {
            jq("#tk11").show()
        } else {
            if (flaglast) {
                flaglast = false;
                $.ajax({
                    url: 'index.php?mod=game&ac=info',
                    type: "post",
                    data: {
                        phone: phone1,
                        name: name1,
                        address: address1
                    },
                    dataType: "json",
                    success: function (data) {
                        inputFlag = true;
                        if (!data.result) {
                            if (data.error == 2) {
                                alert("参数不全!")
                            } else if (data.error == 3) {
                                alert("非法请求!")
                            } else if (data.error == 4) {
                                alert("请求失败!")
                            }
                        } else {
                            jq("#tk13-name").val("");
                            jq("#tk13-tel").val("");
                            jq("#tk13").fadeOut();
                            jq(".prize-btn").hide();
                            jq("#tk7").show();
                            setTimeout(function () {
                                jq("#tk7").fadeOut()
                            }, 2000)
                        }
                    }
                })
            }
        }
    });
    var inputFlag = true;
    $(".tk10-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var username = jq("#tk10-name").val();
        var phone = jq("#tk10-tel").val();
        var address = jq("#tk13-adress").val();
        if (username == "") {
            jq("#tk11").show()
        } else if (phone.length != 11) {
            jq("#tk11").show()
        } else {
            if (inputFlag) {
                inputFlag = false;
                $.ajax({
                    url: 'index.php?mod=game&ac=info',
                    type: "post",
                    data: {
                        phone: phone,
                        name: username,
                        address: address
                    },
                    dataType: "json",
                    success: function (data) {
                        inputFlag = true;
                        if (!data.result) {
                            if (data.error == 2) {
                                alert("参数不全!")
                            } else if (data.error == 3) {
                                alert("非法请求!")
                            } else if (data.error == 4) {
                                alert("请求失败!")
                            }
                        } else {
                            jq("#tk10-name").val("");
                            jq("#tk10-tel").val("");
                            jq("#tk10").fadeOut();
                            jq("#state").val(1)
                        }
                    }
                })
            }
        }
    });
    $(".tk11-2").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        jq("#tk11").fadeOut()
    });

    function Titlefn(score) {
		score=100
        var num = 1;
        if (score <= 15) {
            num = 1
        } else if (score > 15 && score <= 30) {
            num = 2
        } else if (score > 30 && score <= 45) {
            num = 3
        } else if (score > 45 && score <= 100) {
            num = 4
        } else if (score > 100) {
            num = 5
        }
        var canvasObj = document.createElement("canvas");
        ctx = canvasObj.getContext("2d"), canvasObj.width = 541, canvasObj.height = 806;
        var img1 = new Image();
        img1.src = "images/" + num + ".png";
        img1.onload = function () {
            ctx.drawImage(img1, 0, 0, 541, 806);
            var img2 = new Image();
            img2.src = "images/tk/ewm.png";
            img2.onload = function () {
                ctx.drawImage(img2, 146, 666, 128, 128);
                ctx.font = "26px Arial";
                ctx.textAlign = "center";
                ctx.fillStyle = "#000000";
                ctx.fillText('获得避暑神器' + score + '个', 270, 624);
                var base64 = canvasObj.toDataURL("image/png", 0.8);
                jq(".resurl").attr("src", base64);
                var gameToken = JSON.parse(localStorage.getItem('gameToken'));
                $.post('/finished', {
                    n: score,
                    game: 2,
                    timestamp: gameToken.timestamp,
                    token: gameToken.token
                }, function (res) {
                    if (res.code === 0) {
                        jq("#tk2").fadeIn(100);
                        jq("#tk2").find(".score").text(res.data.points);
                    }
                    else {
                        alert("服务器错误，请重试")
                    }
                }, "json")

            }
        }
    }
}
alert('--')
