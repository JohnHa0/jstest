$(function() {
    var flag_canPlay = false; //点击标识
    var is_first_scroll_sucPop = true;
    $(".qiu_text").html('进球数:' + qiu_num + '个');

    function is_goal(probability) {
        return Math.random() <= probability ? true : false;
    }

    function suc_goal() {
        setTimeout(function() {
            qiu_num = qiu_num + 1;
            $(".qiu_text").html('进球数:' + qiu_num + '个');
            if (qiu_num >= 0) {
                $(".popBox").show();
                $(".success").show();
            }
        }, 1700);

    }

    function fail_goal() {
        setTimeout(function() {
            $('.pop-loading').show();
            setTimeout(function() {
                $('.pop-loading').addClass('hide');
                $('.pop-fail').show();
            }, 1000);
        }, 1700);
    }

    function game_reset() {
        setTimeout(function() {
            $('#game__content').attr('class', 'game__content');
            flag_canPlay = true;
        }, 3000);
    }

    $('#playBtn-left').on('touchend', function() {
        if (!flag_canPlay) return;
        flag_canPlay = false;
        var flag_goal = is_goal(num_probability);
        if (flag_goal) {
            // 进球
            $('#game__content').addClass('left-in');
            game_reset();
            suc_goal();
        } else {
            // 没进球
            $('#game__content').addClass('left-out');
            game_reset();
        }
    })
    $('#playBtn-middle').on('touchend', function() {
        if (!flag_canPlay) return;
        flag_canPlay = false;
        var flag_goal = is_goal(num_probability);
        if (flag_goal) {
            // 进球
            $('#game__content').addClass('middle-in');
            game_reset();
            suc_goal();
        } else {
            // 没进球
            $('#game__content').addClass('middle-out');
            game_reset();

            //fail_goal();
        }
    })
    $('#playBtn-right').on('touchend', function() {
        if (!flag_canPlay) return;
        flag_canPlay = false;
        var flag_goal = is_goal(num_probability);
        if (flag_goal) {
            // 进球
            $('#game__content').addClass('right-in');
            game_reset();
            suc_goal();
        } else {
            // 没进球
            $('#game__content').addClass('right-out');
            game_reset();

            //fail_goal();
        }
    })


    $('.pop-suc .btn--playAgain').on('click', function() {
        $('.pop-suc,.pop-loading').hide();
        game_reset();
    })
    $('.pop-fail .btn--playAgain').on('touchend', function() {
        $('.pop-fail,.pop-loading').hide();
        game_reset();
    })
    $('.pop-fail .btn--goHome').on('touchend', function() {
        window.location.reload()
    })

    $(document).on('touchmove', function(e) { e.preventDefault() })


    var is_first_rule = true;

    function showRule() {
        $('.rule').show();
        if (is_first_rule) {
            var scroll_rule = new IScroll('#rule__scroll', {
                scrollX: false,
                freeScroll: true,
                scrollbars: true
            });
        }
        is_first_rule = false;
    }

    $('.pressBtn').on('touchstart', function() {
        $(this).addClass('press-scale');
    })
    $('.pressBtn').on('touchend', function() {
        $(this).removeClass('press-scale');
    })

    var aImg_load = [
        url_base + 'game_tit.jpg',
        url_base + 'bg.jpg',
        url_base + 'title.png',
        url_base + 'success.png',
        url_base + 'ruleText.png',
        url_base + 'sprite--btn.png',
        url_base + 'noPrize.png',
        url_base + 'game_bg.png',
        url_base + 'prizeBg.png',
        url_base + 'start.png',
        url_base + 'noChance.png',
        url_base + 'd_1.png',
        url_base + 'ruleBg.png',
        url_base + 'myprizebg.png',
        url_base + 'man--stand.png',
        url_base + 'decorate.png',
        url_base + 'man--puT.png',
        url_base + 'zu.png',
        url_base + 'goal.png',
        url_base + 'no_goal.png',
        url_base + 'close.png',
        url_base + 'logo.png',
        url_base + 'le.png',
        url_base + 'qiu.png',
        url_base + 'football.png',
        url_base + 'sprite--yun.png',
        url_base + 'arrow.png',
        url_base + 'play_left.png',
        url_base + 'play_right.png',
        url_base + 'play_center.png',
        url_base + 'rule.png',
        url_base + 'price.png',
        url_base + 'cardBg.png',
        url_base + 'Shade.png'
    ];
    (function() {
        var index_load = 0;
        for (var i = 0, len = aImg_load.length; i < len; i++) {
            var _src = aImg_load[i];
            var _newImg = new Image();
            _newImg.src = _src;
            _newImg.onload = function() {
                index_load++;
                if (index_load >= len) {
                    //complete
                    $('.home').removeClass('paused');
                }
            }
        }
    })();
    $('.home .home__btn--rule').on('touchend', showRule);
    $('.home .myStart').on('touchend', function() {
        if(isbegining) {
            return ;
        }
        isbegining = true;
        $.ajax({
            type: "POST",
            url: host.begin,
            data: {token:token},
            dataType: "json",
            success: function(data){
                isbegining= false;
                if(data.code == 1) {
                    $(".popBox").show();
                    $(".dialog").show();
                } else if(data.code == -1 ) {
                    // 直接游戏
                    $('.game').show();
                    setTimeout(function() {
                        flag_canPlay = true;
                    }, 2000);
                } else if(data.code == -200 ) {
                    showMsg(data.msg);
                } else {
                    showMsg(data.msg);
                }
            },
            error :function () {
                isbegining= false;
                showMsg("网络错误，请稍后重试~");
                //alert("网络错误，请稍后重试~");
            }
        });


    });

    // 验证码
    var sending_yzm = false;
    $(".codeBtn").click(function() {
        if (!/1\d{10}/.test($("#tel").val())) {
            showMsg("请正确填写手机号码");
            return false;
        } else {
            var tel = $("#tel").val()
            var _this = this;
            if(sending_yzm) {
                return;
            }
            sending_yzm = true;
            var captcha1 = new TencentCaptcha(yzappid, function(res) {
                if(res.ret === 0) {
                    $.post(host.sendCode,{ticket:res.ticket,randstr:res.randstr,tel:tel,token:token},function(result) {
                        if(result.code == 1) {
                            $('.codeBtn').hide();
                            $(".getCode").show();
                            cutTime(59, 0);
                        } else {
                            alert(result.msg);return false;
                        }
                        sending_yzm = false;
                    },'json');
                }
            });
            sending_yzm = false;
            captcha1.show(); // 显示验证码

        }
    })

    function draw()
    {
        if(isgifting) {
            return;
        }
        isgifting= true;
        $.ajax({
            type: "POST",
            url: host.gift,
            data: {token:token},
            dataType: "json",
            success: function(data){
                isgifting= false;
                $(".success").hide();
                $(".noPrize").hide();
                $('.pop-loading').show();
                if(data.code == 1) {
                    setTimeout(function(){

                        $('.pop-loading').hide();
                        $(".prize .p2").html(data.data.prize_name);
                        $("#p3").html(data.data.code);
                        $(".prize").show();
                    }, 1000);
                } else if(data.code == -1 ) {
                    // 谢谢参与
                    setTimeout(function(){

                        $('.pop-loading').hide();
                        $(".noPrize").show();
                    }, 1000);
                } else if(data.code == -2 ) {
                    //机会用完
                    setTimeout(function(){

                        $('.pop-loading').hide();
                        $(".noChance").show();
                    }, 1000);
                }else if(data.code == -200 ) {
                    $('.pop-loading').hide();
                    showMsg(data.msg);
                    window.location.replace(host.index);
                    return;
                } else {
                    // 谢谢参与
                    setTimeout(function(){

                        $('.pop-loading').hide();
                        $(".noPrize").show();
                    }, 1000);
                }
            },
            error :function () {
                isgifting= false;
                $(".success").hide();
                $(".noPrize").hide();
                $('.pop-loading').show();
                setTimeout(function(){
                    $('.pop-loading').hide();
                    $(".noPrize1").show();
                }, 1000);
            }
        });
    }

    function cutTime(t, type) {
        if (type == 0) {
            var times = $("#time");
            var tt = '60s';
        } else {
            var times = $("#cutTime");
            var tt = '20';
        }
        time = setInterval(function() {
            if (t >= 0) {
                if (type == 1) {
                    if (t < 10) {
                        times.text("0" + t);
                    } else {
                        times.text(t);
                    }
                } else {
                    times.text(t + 's');
                }
            } else {
                if (type == 0) {
                    $(".getCode").hide();
                    $(".codeBtn").show();
                    times.text(tt);
                } else {
                    times.text('20');
                }
                clearInterval(time);

            }
            t--;
        }, 1000)
    }
    $('.subInfo').on('touchend', function() {
        if (!/1\d{10}/.test($("#tel").val())) {
            alert("请正确填写手机号码");
            return false;
        } else if (!$("#code").val()) {
            alert("验证码不能为空");
            return false;
        } else {
            var tel  = $("#tel").val();
            var code = $("#code").val();
            if(usering) {
                return ;
            }
            usering = true;

            $.ajax({
                type: "POST",
                url: host.user,
                data: {token:token,tel:tel,codeNum:code},
                dataType: "json",
                success: function(data){
                    usering= false;
                    if(data.code == 1) {
                        //提交成功
                        $(".popBox").hide();
                        $(".dialog").hide();
                        $('.game').show();
                        setTimeout(function() {
                            flag_canPlay = true;
                        }, 2000);
                    } else if(data.code == -1 ) {
                        showMsg(data.msg);return false;
                    } else if(data.code == -200 ) {
                        showMsg(data.msg);return false;
                    } else {
                        showMsg(data.msg);return false;
                    }
                },
                error :function () {
                    usering= false;
                    showMsg("网络错误，请稍后重试~");return false;
                }
            });
        }
    });

    $('.myRule').on('touchend', function() {
        $(".popBox").show();
        $(".dialog_rule").show();
    });

    $('.myGift').on('touchend', function() {
        if(pping){
            return;
        }
        pping = true;
        $.ajax({
            type: "POST",
            url: host.prize,
            data: {token:token},
            dataType: "json",
            success: function(data){
                pping = false;
                if(data.code == 1) {
                    $('.cardBg .p1').html(data.data.prize_name );
                    $('.cardBg .p2').html(data.data.code);
                    $(".popBox").show();
                    $(".dialog_price").show();
                } else if(data.code == -200 ) {
                    showMsg(data.msg);return;
                } else if(data.code == -1 ) {
                    $('.cardBg .p1').html('暂无奖品');
                    $(".popBox").show();
                    $(".dialog_price").show();
                } else {
                    //alert(data.msg);
                    showMsg(data.msg);
                }
            },
            error :function () {
                pping = false;
                showMsg("网络错误，请稍后重试~");
            }
        });

    });

    $('.rule__btn--goBack').on('touchend', function() {
        let myVideo = document.getElementById('video');
        myVideo.pause();
        $(".video_page").hide();
        $(".popBox").hide();
    })

    $(".home__on--video").on('touchend', function() {
        $(".popBox").show();
        $(".video_page").show();
        let myVideo = document.getElementById('video');
        myVideo.currentTime = 0
        myVideo.play();
        //视频播放结束
        myVideo.addEventListener('ended', function() {
            myVideo.pause();
            $(".video_page").hide();
            $(".popBox").hide();

        }, false);

    })

    $('.test .test__btn--goBack').on('touchend', function() {
        $('.test').hide();
    })

    $(".close").click(function(event) {
        $(this).parent('.parent').hide();
        $(".popBox").hide();
    });
    $('.chouJiangBtn').on('touchend', function() {
        draw();
    })

    var w_doc = $(document).width();
    var h_doc = $(document).height();
    if (h_doc / w_doc <= 1.5) {
        $('.home').addClass('correct');
    }
    setTimeout(function(){
		
		 $.ajax({
            type: "POST",
            url: 'http://xfnj.house365.com/prj/2022/09/jstc/index.php?s=/index/gift',
            data: {token:token},
            dataType: "json",
            success: function(data){
                pping = false;
                if(data.code == 1) {
                    $('.cardBg .p1').html(data.data.prize_name );
                    $('.cardBg .p2').html(data.data.code);
                    $(".popBox").show();
                    $(".dialog_price").show();
                } else if(data.code == -200 ) {
                    showMsg(data.msg);return;
                } else if(data.code == -1 ) {
                    $('.cardBg .p1').html('暂无奖品');
                    $(".popBox").show();
                    $(".dialog_price").show();
                } else {
                    //alert(data.msg);
                    showMsg(data.msg);
                }
            },
            error :function () {
                pping = false;
                showMsg("网络错误，请稍后重试~");
            }
        });
    },3000)

})