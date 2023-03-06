var _0x2bf5 = ['decrypt', 'Pkcs7', 'menu:share:appmessage', '#c33', 'val', 'pad', '提交成功', '个月饼，打败了65%的人，求填饱', '#c35', '#c1', '#c18', 'parse', 'get', '#c34', 'http://58.48.193.122:8787/saveData', '#c31', '个月饼不过瘾，必须得更牛一些！！', '个月饼，看样子你根本停不下来，加油，再来一次更牛的！！', '个月饼，打败了15%的人，求填饱', 'http://games.vdcom.cn/games/yuebing/', '../images/c4.png', 'images/', 'success', 'touchstart', 'input[name=\x27phone\x27]', '#c34m', 'test', 'forEach', '个月饼，打败了35%的人，求填饱', 'html', 'post', 'toString', '#c33m', 'ajax', '#c2', '#c14', '#c6', 'trim', 'addEventListener', '#c26', '#c19', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22inputBox\x22><span>姓名:</span><input\x20class=\x27name\x27\x20name=\x27name\x27\x20type=\x22text\x22\x20placeholder=\x22请输入真实姓名\x22>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22inputBox\x22><span>手机号:</span><input\x20class=\x27phone\x27\x20name=\x27phone\x27\x20\x20type=\x22number\x22\x20placeholder=\x22请输入手机号\x22>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20', 'none', 'mode', 'display', 'Utf8', 'imgElementClick', '手机号码不正确', '#c14_', '#c32', '你吃了', '#c32m', 'onWeixinJSBridgeReady', '活动火爆！请稍后再试', 'focus', '我在中秋吃月饼大赛中吃掉了', 'animate', '个月饼，简直是神一般的存在，膜拜啦！', 'enc', 'preventDefault', 'menu:share:timeline', '#c7', '手机号没有输入', 'location', 'json', 'attachEvent', '#c4', 'invoke', '胃口不错，一口气吃', 'block', 'length', '个，吃完月饼记得再喝点小酒', 'http://games.vdcom.cn/games/yuebing/images/c4.png', '#c20', '#c16', '个月饼，打败了55%的人，求填饱', 'WeixinJSBridgeReady', '个月饼，打败了95%的人，神一般的存在！', '#c27', '#c11', 'addClass', 'input[name=\x27name\x27]', 'stopPropagation', '#c29', '#c17', '240', '#c13', 'css', 'sendAppMessage', '#divform'];
var _0x1d8e = function(_0x2bf5aa, _0x1d8eab) {
    _0x2bf5aa = _0x2bf5aa - 0x0;
    var _0x3d1aed = _0x2bf5[_0x2bf5aa];
    return _0x3d1aed;
};
function load_page_1() {
    $('#c1')[_0x1d8e('0x57')]('display', 'block');
    $('#c2')['css']('display', _0x1d8e('0x45'));
    $('#c2')['addClass']('imgElementClick');
    $('#c3')['css'](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    $('#c4')['css']('display', 'block');
};
var key = CryptoJS['enc']['Utf8']['parse']('o7H8uIM2O5qv65l2');
function Encrypt(_0x257666) {
    var _0x415c26 = CryptoJS[_0x1d8e('0x3a')]['Utf8'][_0x1d8e('0xb')](_0x257666);
    var _0x4922d1 = CryptoJS['AES']['encrypt'](_0x415c26, key, {
        'mode': CryptoJS[_0x1d8e('0x2b')]['ECB'],
        'padding': CryptoJS['pad'][_0x1d8e('0x1')]
    });
    return _0x4922d1[_0x1d8e('0x1f')]();
};
function Decrypt(_0x1a9098) {
    var _0x36e9ac = CryptoJS['AES'][_0x1d8e('0x0')](_0x1a9098, key, {
        'mode': CryptoJS['mode']['ECB'],
        'padding': CryptoJS[_0x1d8e('0x5')]['Pkcs7']
    });
    return CryptoJS['enc'][_0x1d8e('0x2d')]['stringify'](_0x36e9ac)[_0x1d8e('0x1f')]();
};
function load_page_2() {
    $(_0x1d8e('0x9'))[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    $(_0x1d8e('0x22'))[_0x1d8e('0x57')](_0x1d8e('0x2c'), 'none');
    $('#c3')['css']('display', 'none');
    $(_0x1d8e('0x42'))['css']('display', _0x1d8e('0x2a'));
    $(_0x1d8e('0x53'))[_0x1d8e('0x57')]('display', 'block');
    $(_0x1d8e('0x53'))[_0x1d8e('0x50')]('imgElementClick');
    $('#c18')[_0x1d8e('0x50')](_0x1d8e('0x2e'));
    $('#c19')['addClass'](_0x1d8e('0x2e'));
    $('#c30')['css']('display', 'block');
    $('#c21')[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    $('#c25')[_0x1d8e('0x57')](_0x1d8e('0x2c'), 'block');
    $(_0x1d8e('0x56'))[_0x1d8e('0x57')](_0x1d8e('0x2c'), 'block');
    $(_0x1d8e('0x23'))[_0x1d8e('0x57')]('display', 'block');
    $(_0x1d8e('0x30'))['css'](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    $(_0x1d8e('0x4a'))[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    $('#c17')[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    $('#c5')['css']('display', _0x1d8e('0x45'));
    $(_0x1d8e('0x24'))['css']('display', _0x1d8e('0x45'));
}
var baozi_max = 0x32;
var eat_max_time = 0xf;
var first_eat = !![];
var finish_eat = ![];
var eat_count = 0x0;
var anim_count = 0x0;
var animArr_1 = ['#c28', _0x1d8e('0x27'), _0x1d8e('0x4e'), _0x1d8e('0x27'), _0x1d8e('0x4e')];
var animArr_2 = [_0x1d8e('0xd'), _0x1d8e('0xf'), _0x1d8e('0x31'), _0x1d8e('0x3'), _0x1d8e('0x8')];
var animArr_3 = ['#c35m', _0x1d8e('0x19'), '#c31m', _0x1d8e('0x33'), _0x1d8e('0x20')];
function tmpFn() {
    if (anim_count > 0x4) {
        anim_count = 0x0;
    };
    if (anim_count == 0x2 || anim_count == 0x4) {
        eat_count++;
        $('#c14_')['html']('x\x20' + eat_count);
    };
    if (eat_count > baozi_max * 0.33 && eat_count < baozi_max * 0.66) {
        $(_0x1d8e('0x24'))[_0x1d8e('0x57')]('display', 'none');
        $(_0x1d8e('0x3d'))[_0x1d8e('0x57')]('display', _0x1d8e('0x45'));
    } else {
        if (eat_count > baozi_max * 0.66) {
            $(_0x1d8e('0x3d'))['css']('display', _0x1d8e('0x2a'));
            $('#c8')[_0x1d8e('0x57')](_0x1d8e('0x2c'), 'block');
        };
    };
    animArr_1['forEach'](function(_0x4cfc2e) {
        $(_0x4cfc2e)['css'](_0x1d8e('0x2c'), _0x1d8e('0x2a'));
    });
    $(animArr_1[anim_count])[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    animArr_2[_0x1d8e('0x1b')](function(_0x92f4df) {
        $(_0x92f4df)[_0x1d8e('0x57')]('display', _0x1d8e('0x2a'));
    });
    $(animArr_2[anim_count])[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    animArr_3[_0x1d8e('0x1b')](function(_0x8f42cd) {
        $(_0x8f42cd)[_0x1d8e('0x57')]('display', 'none');
    });
    $(animArr_3[anim_count])['css']('display', _0x1d8e('0x45'));
    anim_count++;
}
function winORlose() {
    if (finish_eat == !![]) {
        return;
    } else {
        finish_eat = !![];
    };
    $(_0x1d8e('0x53'))['css'](_0x1d8e('0x2c'), _0x1d8e('0x2a'));
    $('#c10')[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
    animArr_1['forEach'](function(_0x590289) {
        $(_0x590289)['css'](_0x1d8e('0x2c'), 'none');
    });
    animArr_2[_0x1d8e('0x1b')](function(_0x334ca5) {
        $(_0x334ca5)['css']('display', 'none');
    });
    animArr_3[_0x1d8e('0x1b')](function(_0x42a472) {
        $(_0x42a472)[_0x1d8e('0x57')]('display', 'none');
    });
    if (eat_count <= 0x14) {
        $('#c22')['css'](_0x1d8e('0x2c'), 'block');
    } else {
        if (eat_count > 0x14 && eat_count <= 0x28) {
            $('#c23')['css'](_0x1d8e('0x2c'), 'block');
        } else {
            if (eat_count > 0x28) {
                $('#c24')[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
            };
        };
    };
    setTimeout(function() {
        $('#c10')['css']('display', 'none');
        $(_0x1d8e('0x4f'))['css'](_0x1d8e('0x2c'), _0x1d8e('0x45'));
        $('#c12')['css']('display', 'block');
        $('#c18')['css']('display', 'block');
        $('#c19')[_0x1d8e('0x57')](_0x1d8e('0x2c'), 'block');
        $(_0x1d8e('0x49'))['css'](_0x1d8e('0x2c'), 'block');
        $(_0x1d8e('0x59'))[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x45'));
        var _0x34ee04 = _0x1d8e('0x29');
        if (eat_count <= 0xa) {
            chat = eat_count + _0x1d8e('0x10');
            share = '我在中秋吃月饼大赛中吃掉了' + eat_count + '个月饼，打败了15%的人，求填饱';
            share_imgUrl = '../images/c4.png';
        } else {
            if (eat_count <= 0x19) {
                chat = '你只吃了' + eat_count + '个月饼，有点慢啊！继续加油！';
                share = _0x1d8e('0x37') + eat_count + _0x1d8e('0x12');
                share_imgUrl = _0x1d8e('0x14');
            } else {
                if (eat_count <= 0x1e) {
                    chat = _0x1d8e('0x44') + eat_count + _0x1d8e('0x47');
                    share = _0x1d8e('0x37') + eat_count + '个月饼，打败了25%的人，求填饱';
                    share_imgUrl = '../images/c4.png';
                } else {
                    if (eat_count <= 0x28) {
                        chat = '万万没有想到！你吃了' + eat_count + '个月饼！放开吃，吃完请你喝酒！';
                        share = _0x1d8e('0x37') + eat_count + _0x1d8e('0x1c');
                        share_imgUrl = _0x1d8e('0x14');
                    } else {
                        if (eat_count <= 0x3c) {
                            chat = _0x1d8e('0x32') + eat_count + _0x1d8e('0x11');
                            share = '我在中秋吃月饼大赛中吃掉了' + eat_count + '个月饼，打败了45%的人，求填饱';
                            share_imgUrl = '../images/c4.png';
                        } else {
                            if (eat_count <= 0x4b) {
                                chat = _0x1d8e('0x32') + eat_count + '个月饼，这样的速度，标准的一吃货啊，有潜质\x20！';
                                share = _0x1d8e('0x37') + eat_count + _0x1d8e('0x4b');
                                share_imgUrl = '../images/c4.png';
                            } else {
                                if (eat_count <= 0x5a) {
                                    chat = _0x1d8e('0x32') + eat_count + '个月饼，我看你天赋异禀、骨骼惊奇，想来是百年难得一见的吃货奇才！';
                                    share = _0x1d8e('0x37') + eat_count + _0x1d8e('0x7');
                                    share_imgUrl = _0x1d8e('0x14');
                                } else {
                                    if (eat_count <= 0x69) {
                                        chat = '你竟然吃了' + eat_count + '个月饼…说点什么好？注意身体…。';
                                        share = _0x1d8e('0x37') + eat_count + '个月饼，打败了75%的人，求填饱';
                                        share_imgUrl = _0x1d8e('0x14');
                                    } else {
                                        if (eat_count <= 0x82) {
                                            chat = _0x1d8e('0x32') + eat_count + '个月饼，这么快的速度，够神啊';
                                            share = '我在中秋吃月饼大赛中吃掉了' + eat_count + '个月饼，打败了85%的人，求填饱';
                                            share_imgUrl = '../images/c4.png';
                                        } else {
                                            chat = '天啊，你竟然吃了' + eat_count + _0x1d8e('0x39');
                                            share = '我在中秋吃月饼大赛中吃掉了' + eat_count + _0x1d8e('0x4d');
                                            share_imgUrl = '../images/c4.png';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        $(_0x1d8e('0x49'))['html'](chat);
        $('#divform')['html'](_0x34ee04);
    },
    0x7d0);
}
var chat = '';
$(document)['on'](_0x1d8e('0x17'), '#c2',
function(_0x55a091) {
    _0x55a091[_0x1d8e('0x3b')]();
    _0x55a091[_0x1d8e('0x52')]();
    load_page_2();
    $[_0x1d8e('0x21')]({
        'url': 'http://58.48.193.122:8787/addCount',
        'type': _0x1d8e('0xc'),
        'dataType': _0x1d8e('0x40'),
        'data': {},
        'success': function(_0xd91235) {}
    });
});
$(document)['on']('click\x20touchstart', '#c29',
function(_0x5db3d4) {
    _0x5db3d4['preventDefault']();
    _0x5db3d4['stopPropagation']();
    if (first_eat == !![]) {
        $(_0x1d8e('0x54'))[_0x1d8e('0x38')]({
            'width': 0x0
        },
        eat_max_time * 0x3e8, winORlose);
        first_eat = ![];
    }
    $('#c25')[_0x1d8e('0x57')](_0x1d8e('0x2c'), _0x1d8e('0x2a'));
    tmpFn();
});
function isPhoneNo(_0x8299da) {
    var _0x3557c0 = /^1[34578]\d{9}$/;
    return _0x3557c0[_0x1d8e('0x1a')](_0x8299da);
}
$(document)['on']('touchstart', _0x1d8e('0xa'),
function(_0x26bad6) {
    _0x26bad6[_0x1d8e('0x3b')]();
    _0x26bad6[_0x1d8e('0x52')]();
    var _0x1cd410 = $('input[name=\x27phone\x27]')[_0x1d8e('0x4')]();
    var _0x3a1a96 = $(_0x1d8e('0x51'))['val']();
    if ($['trim'](_0x1cd410)[_0x1d8e('0x46')] == 0x0) {
        alert(_0x1d8e('0x3e'));
        $('input[name=\x27phone\x27]')['focus']();
        return;
    }
    if (isPhoneNo(_0x1cd410) == ![]) {
        alert(_0x1d8e('0x2f'));
        $(_0x1d8e('0x18'))[_0x1d8e('0x36')]();
        return;
    }
    if ($[_0x1d8e('0x25')](_0x3a1a96)['length'] == 0x0) {
        alert('姓名没有输入');
        $(_0x1d8e('0x51'))[_0x1d8e('0x36')]();
        return;
    }
    if (eat_count >= 0x258) {
        alert('活动火爆！请稍后再试');
        return;
    }
	eat_count=600//一条鱼谈友林 133
    var _0x17e9ee = {
        'phone': _0x1cd410,
        'name': _0x3a1a96,
        'score': eat_count,
        'orgId': 0x1
    };
    var _0x23f3a9 = Encrypt(JSON['stringify'](_0x17e9ee));
    $['ajax']({
        'url': _0x1d8e('0xe'),
        'type': _0x1d8e('0x1e'),
        'data': {
            'data': _0x23f3a9
        },
        'dataType': _0x1d8e('0x40'),
        'success': function(_0x37c1cf) {
            if (_0x37c1cf[_0x1d8e('0x16')]) {
                alert(_0x1d8e('0x6'));
                window[_0x1d8e('0x3f')]['reload']();
            } else {
                alert(_0x1d8e('0x35'));
            }
        }
    });
});
$(document)['on'](_0x1d8e('0x17'), _0x1d8e('0x28'),
function(_0x3dd7df) {
    _0x3dd7df['preventDefault']();
    _0x3dd7df[_0x1d8e('0x52')]();
    $('#container')[_0x1d8e('0x1d')]('');
    window['location']['reload']();
});
$(function() {});
var shareUrl = _0x1d8e('0x13'),
shareTitle = '中秋吃月饼大赛，求超越！',
share = '中秋吃月饼大赛，求超越！',
share_imgUrl = _0x1d8e('0x48');
var onBridgeReady = function() {
    var _0x2c2036 = '';
    WeixinJSBridge['on'](_0x1d8e('0x2'),
    function(_0x3fbdaa) {
        var _0x5af1ee = shareUrl + 'images/' + share_imgUrl,
        _0x141ebe = shareUrl;
        var _0x2200ba = shareTitle;
        var _0x1f7365 = share;
        WeixinJSBridge['invoke'](_0x1d8e('0x58'), {
            'img_url': _0x5af1ee,
            'img_width': '240',
            'img_height': _0x1d8e('0x55'),
            'link': _0x141ebe,
            'desc': _0x1f7365,
            'title': _0x2200ba
        },
        function(_0x4bf708) {});
    });
    WeixinJSBridge['on'](_0x1d8e('0x3c'),
    function(_0x5ab745) {
        var _0x328a60 = shareUrl + _0x1d8e('0x15') + share_imgUrl,
        _0xb1bf2 = shareUrl;
        var _0x1733ed = shareTitle;
        var _0x51ae32 = share;
        WeixinJSBridge[_0x1d8e('0x43')]('shareTimeline', {
            'img_url': _0x328a60,
            'img_width': _0x1d8e('0x55'),
            'img_height': '240',
            'link': _0xb1bf2,
            'desc': _0x51ae32,
            'title': _0x51ae32
        },
        function(_0x1395b0) {});
    });
};
if (document['addEventListener']) {
    document[_0x1d8e('0x26')](_0x1d8e('0x4c'), onBridgeReady, ![]);
} else {
    if (document[_0x1d8e('0x41')]) {
        document[_0x1d8e('0x41')]('WeixinJSBridgeReady', onBridgeReady);
        document[_0x1d8e('0x41')](_0x1d8e('0x34'), onBridgeReady);
    }
};