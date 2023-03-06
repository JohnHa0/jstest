

var dd=340+parseInt(Math.random()*30)//-----------------
var init = function () {

    Main.init().open()
    Rules.init().close()
    Registry.init().close()
    Ranking.init().close()
    Share_.init().close()
    Game.init().close()
    Gift.init().close()
    Certitude.init().close()
    End.init().close()
    List.init().close()
}

// 首页
var Main = {
    init() {
        $('.p1btnRanking').click(() => {
            Ranking.open()
        })
        $('.p1btnGift').click(() => {
            Gift.open()

        })
        $('.p1btnRules').click(() => {
            // Rules.isBack = 'p2btnBack'
            Rules.open()
        })
        $('.p1btnStart').click(() => {
            // Rules.isBack = 'p2btnStart'
            // Game.isStart()
			dd=340+parseInt(Math.random()*30)//-----------------
            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=FormDrawGameFunStatr`,
                type: 'post',
                data: {},
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {

                        Game.role = 1
                        $('.p1roleBox').show()

                    } else {
                        if (gamenum == 2) {
                            console.log(gamenum);
                            Share_.open()
                        } else {
                            popup.show({ type: 'toast', icon: 'warn', tip: '今天的3次机会已用完,请明天再来' });

                        }

                    }
                }
            })
        })
        $('.p1roleSelBtn').click((e) => {
            const i = $(e.target).attr('data-i')
            $('.p1role').hide()
            $('.p1role' + i).show()
            Game.role = i
        })
        $('.p1btnStart2').click(() => {
            Game.open()
            startGame()
            $('.p1roleBox').hide()
        })
        $('.p1btnJoin').click(() => {
            $('.p1tips').hide()
        })

        return this
    },
    open(data) {
        $('.p1roleBox').hide()
        $('.p1role').hide()
        $('.p1role1').show()
        $('.Main').fadeIn(300, function () {

        })
    },
    close(data) {
        $('.Main').fadeOut(300, function () {

        })
    }
}

// 规则
var Rules = {
    init() {
        this.isBack
        // 返回
        $('.p2btnClose').click(() => {
            this.close()
        })


        return this
    },
    open(data) {

        $('.Rules').fadeIn(300, function () {

        })
    },
    close(data) {
        $('.Rules').fadeOut(300, function () {

        })
    }
}

// 登记
var Registry = {
    init() {
        this.UserName = '';
        this.UserPhone = '';
        this.UserAddress = ''

        $('.p3btnClose').click(() => {
            this.close()
            Registry.isCertitude = false
        })

        //名字输入
        $('.name').on('input', function () {
            // $(this).val($(this).val().substring(0, 15))
            Registry.UserName = $(this).val();
        })
        //电话输入
        $('.phone').on('input', function () {
            $(this).val($(this).val().substring(0, 11))
            Registry.UserPhone = $(this).val();
        })
        //学校输入
        $('.address').on('input', function () {
            // $(this).val($(this).val().substring(0, 11))
            Registry.UserAddress = $(this).val();
        })
        $('.p3btnxg').click(() => {
            $('.name').val('')
            $('.phone').val('')
            $('.address').val('')

            this.UserName = '';
            this.UserPhone = '';
            this.UserAddress = '';
        })

        //确定
        let myreg = /^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;
        $('.p3btnOk').click(() => {
            if (Registry.UserName === '' || Registry.UserPhone === '') {
                popup.show({
                    type: 'toast',
                    icon: 'warn',
                    tip: '请填写完整'
                });
                return
            }
            if (!myreg.test(Registry.UserPhone)) {
                popup.show({
                    type: 'toast',
                    icon: 'warn',
                    tip: '电话格式错误'
                });
                $(this).val('');
                return
            }
            console.log(Registry.UserName, Registry.UserPhone)
            // IsCommit = '1'
            // this.close();
            // Poster.open();

            // return

            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=SaveUserData`,
                type: 'post',
                data: {
                    UserName: Registry.UserName,
                    UserPhone: Registry.UserPhone,
                    UserAddress: Registry.UserAddress
                },
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {

                        iscommit = '1'
                        UserName = Registry.UserName
                        UserPhone = Registry.UserPhone
                        UserAddress = Registry.UserAddress

                        Registry.close()

                        if (Registry.isCertitude) {
                            Certitude.x()
                        }
                        // Gift.open()

                    } else {
                        popup.show({
                            type: 'toast',
                            icon: 'warn',
                            tip: res.Msg
                        });
                    }
                }
            })

        })

        return this;
    },
    open(data) {
        $('.p3btnxg').hide()

        // if (Registry.isCertitude) {
        //     Registry.UserName = UserName
        //     Registry.UserPhone = UserPhone
        //     Registry.UserAddress = UserAddress
        //     $('.name').val(UserName)
        //     $('.phone').val(UserPhone)
        //     $('.address').val(UserAddress)
        //     $('.p3btnxg').show()

        // }

        $('.Registry').fadeIn(300, function () {

        })
    },
    close(data) {
        $('.Registry').fadeOut(300, function () {

        })
    }
}

// 排行榜
var Ranking = {
    init() {
        this.renwu = 0


        // 返回
        $('.p4btnBack').click(() => {
            this.close();
            Game.close()
        })
        $('.p4btnBack').click((e) => {
            this.close()

        })
        $('.p4btnStart1').click(() => {
            // this.close();
            Gift.open()
        })
        $('.p4btnStart2').click(() => {
            $('.p4TipsBox').show()

            $('.p4tips2').hide()
            $('.p4tips3').hide()

            $('.p4tipsText').hide()
            $('.p4tipsText2').show()

            $('.p4tipsText_').hide()
            $('.p4tipsText_2').show()

            Ranking.renwu = 2
        })
        $('.p4btnStart3').click(() => {
            $('.p4TipsBox').show()

            $('.p4tips2').hide()
            $('.p4tips3').hide()

            $('.p4tipsText').hide()
            $('.p4tipsText3').show()

            $('.p4tipsText_').hide()
            $('.p4tipsText_3').show()

            Ranking.renwu = 3
        })
        $('.p4tips2').click(() => {
            $('.p4TipsBox').hide()
        })
        $('.p4tips3').click(() => {
            $('.p4TipsBox').hide()
        })

        //电话输入
        $('.p4phone').on('input', function () {
            $(this).val($(this).val().substring(0, 11))
            Ranking.UserPhone = $(this).val();
        })
        $('.p4tipsZx').click(() => {
            $('.p4TipsBox').hide()
        })
        $('.p4tipsCj').click(() => {
            $('.p4TipsBox').hide()
        })
        $('.p4tipsTj').click(() => {

            let myreg = /^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;
            if (!myreg.test(Ranking.UserPhone)) {
                popup.show({
                    type: 'toast',
                    icon: 'warn',
                    tip: '电话格式错误'
                });
                $(this).val('');
                return
            }
            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=SaveUserData`,
                type: 'post',
                data: {
                    UserPhone: Ranking.UserPhone,
                },
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {
                        $('.p4TipsBox').hide()
                        iscommit = '1'
                        popup.show({
                            type: 'toast',
                            icon: 'success',
                            tip: res.Msg
                        });

                        if (Ranking.renwu == 2) {
                            $('.p4btnStart2').hide()
                            $('.p4btnShz2').show()
                            // renwu2 = 1
                        }
                        // else if(Ranking.renwu == 3){
                        //     $('.p4btnStart2').hide()
                        //     $('.p4btnCompleted2').show()
                        // }

                        Ranking.renwu = 0

                    } else {
                        popup.show({
                            type: 'toast',
                            icon: 'warn',
                            tip: res.Msg
                        });
                    }
                }
            })
        })

        // 获取当前周数
        $.ajax({
            url: `dal/dal.aspx?action=GetActInfo`,
            type: 'post',
            data: {},
            dataType: 'json',
            success(res) {
                // 关闭提示加载 toast , success warn error
                popup.hide();
                console.log(res)
                if (res.IsSuccess) {

                    Ranking.week = res.Data[0].Num
                    console.log(Ranking.week + '周');

                } else {
                    // popup.show({type: 'toast', icon: 'warn', tip: res.Msg});
                }
            }
        })

        this.bScroll = new BScroll('.p4', { probeType: 2, click: true })

        this.getTipsData = () => {
            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=GetDesc`,
                type: 'post',
                data: {
                    pageindex: 1,
                    pagesize: 4,
                    num: Ranking.week
                },
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {
                        Ranking.renderRank(res.Data)

                    } else {
                        popup.show({
                            type: 'toast',
                            icon: 'warn',
                            tip: res.Msg
                        });
                    }
                }
            })
        }

        // 渲染排行榜
        this.renderRank = function (data) {
            let dom = ''

            // <div class="p4time">${v.Addtime.split('T')[1]}</div>
            data.dt.forEach((v, i) => {
                dom += `
                            
                <div class="p4item">
                    <div class="p4rank">${v.rowid}</div>
                    <img class="p4head" src="${v.headimg}" alt="">
                    <div class="p4fraction">${v.Gamenum}分</div>
                    <div class="p4time">${v.Addtime2}</div>
                </div>
                        `
            })
            $('.p4list').html(dom)

            let dom2 = ''

            const list = [...data.dtothers, ...data.dtMy]
            list.forEach((v, i) => {
                dom2 += `
                            
                <div class="p4item">
                    <div class="p4rank">${v.rowid}</div>
                    <img class="p4head" src="${v.headimg}" alt="">
                    <div class="p4fraction">${v.Gamenum}分</div>
                    <div class="p4time">${v.Addtime2}</div>
                </div>
                        `
            })

            if (list.length < 2) dom2 = '<div class="p4item"></div>' + dom2

            $('.p4list1').html(dom2)

            // this.bScroll.refresh();
        }

        this.getData = function () {

            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=GetDesc`,
                type: 'post',
                data: {
                    pageindex: 1,
                    pagesize: 4,
                    num: Ranking.week
                },
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {
                        Ranking.renderRank(res.Data)

                    } else {
                        popup.show({
                            type: 'toast',
                            icon: 'warn',
                            tip: res.Msg
                        });
                    }
                }
            })
        }

        return this
    },
    open(data) {
        $('.p4btnStart1').hide();
        $('.p4btnCompleted1').hide();
        $('.p4btnStart2').hide();
        $('.p4btnCompleted2').hide();

        $('.p4TipsBox').hide();

        $('.p4task2').hide()
        $('.p4task3').hide()

            ; +renwu1 > 0 ? $('.p4btnCompleted1').show() : $('.p4btnStart1').show();

        if (iscommit == 1) {
            if (renwu2 == 1) {
                $('.p4btnCompleted2').show()
            } else {
                $('.p4btnShz2').show()
            }
        } else {
            $('.p4btnStart2').show()
        }

        if (renwu3 == 0 || iscommit == '') {
            $('.p4btnStart3').show()
        } else if (renwu3 == 1) {
            $('.p4btnShz3').show()
        } else if (renwu3 == 2) {
            $('.p4btnCompleted3').show()
        }

        $('.Ranking').fadeIn(300, function () {
            Ranking.getData()


        })
    },
    close(data) {
        $('.Ranking').fadeOut(300, function () {

            $('.rankBox').empty()
        })
    }
}

// 分享
var Share_ = {
    init() {
        $('.Share').click(() => {
            this.close()
        })
        $('.p5btnAgain').click(() => {
            this.close()
        })
        $('.p5btnRanking').click(() => {
            this.close()
            Ranking.open()
        })
        $('.p5btnGift').click(() => {
            this.close()
            Gift.open()
        })

        return this
    },
    open(data) {
        $('.Share').fadeIn(300, function () {

        })
    },
    close(data) {
        $('.Share').fadeOut(300, function () {

        })
    }
}

// 获奖
var List = {
    init() {
        $('.p10btnClose').click(() => {
            this.close()
        })
        this.bScroll = new BScroll('.p10listBox', { probeType: 2, click: true })

        // 渲染排行榜
        this.renderRank = function (data) {
            let dom = ''

            data.dt.forEach((v, i) => {
                dom += `
                            
                <div class="p10item">
                    <div class="p10rank">${v.rowid}</div>
                    <img class="p10head" src="${v.headimg}" alt="">
                    <div class="p10fraction">${v.Gamenum}分</div>
                    <div class="p10time">${v.Addtime.split('T')[0]}</div>
                </div>
                        `
            })
            $('.p10list').html(dom)

            // this.bScroll.refresh();
        }


        this.getData = function () {

            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=getrankResult`,
                type: 'post',
                data: {
                    Num: 1,
                },
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {
                        // List.renderRank(res.Data)

                    } else {
                        popup.show({
                            type: 'toast',
                            icon: 'warn',
                            tip: res.Msg
                        });
                    }
                }
            })
        }

        return this
    },
    open(data) {
        $('.List').fadeIn(300, function () {

        })
    },
    close(data) {
        $('.List').fadeOut(300, function () {

        })
    }
}

// 结束
var End = {
    init() {
        $('.p7btnColse').click(() => {
            this.close()
            Game.close()
        })
        $('.p7btnAgain').click(() => {
            this.close()
            Game.close()
            $('.p1btnStart').click()
        })
        $('.p7btnGift').click(() => {
            this.close()
            Game.close()
            Gift.open()
        })
        $('.p7btnRanking').click(() => {
            this.close()
            Game.close()
            Ranking.open()
        })

        return this
    },
    open(data) {
        $('.p7giftName1').hide()
        $('.p7gift').hide()
        if (data) {

            console.log(data.Data.giftid);

            $('.p7img1').hide()
            $('.p7img2').hide()

            $('.p7text1 span').text(data.Data.vals)
            $('.p7text2 span').text(data.Data.MyScore)
            $('.p7text3 span').text(data.Data.TopUser[0].Gamenum)

            if (data.Data.giftid == 0) {
                $('.p7giftName').hide()
                $('.p7textBox').css({
                    'top': 'calc(50vh - 3.5rem)'
                })
                $('.p7img2').show()
            } else {
                // $('.p7giftName').text(Gift.id[data.Data.giftid][0] + Gift.id[data.Data.giftid][2])
                $('.p7img1').show()

                $('.p7gift' + data.Data.giftid).show()
            }

            if (data.Data.giftid == 10) {
                $('.p7giftName1').show()
            }

        }

        $('.End').fadeIn(300, function () {

        })
    },
    close(data) {
        $('.End').fadeOut(300, function () {

        })
    }
}

// 奖品
var Gift = {
    init() {
        $('.p8btnBack').click(() => {
            this.close()
        })

        $('.p8GiftTipsShow').click((e) => {
            console.log(e);
            $('.p8GiftTipsBox').show()
            $('.p8GiftTips').hide()
            $('.p8GiftTips' + $(e.target).attr('data-id')).show()
        })

        $('.p8btnHx').click(e => {
            const dom = $(e.target)

            Certitude.position = dom.attr('data-position')
            Certitude.id = dom.attr('data-id')
            Certitude.open()

            console.log(Certitude.id, this.id[Certitude.id]?.[0]);

        })

        $('.p8GiftTipsBox').click(() => {
            $('.p8GiftTipsBox').hide()
        })

        this.id = {
            1: ['鲁花食用油', '1,2', '直降588元'],
            2: ['德施曼智能门锁', '1,2,3', '直降1700元'],
            3: ['全光WIFI组网(FTTR)', '1,2', '直降1700元'],
            4: ['电动自行车', '3', '直降1700元'],
            5: ['智家产品', '1,2', '直降500元'],
            6: ['儿童手表', '3', '直降500元'],
            7: ['潮品礼包', '4', '直降200元', '使用范围:电信校园用户，请前往就近校园营业厅领取'],
            8: ['6个月互联网会员权益', '4', '互联网会员权益', '使用范围:电信校园用户，请前往就近校园营业厅领取'],
            9: ['终端(零售价达2000元及以上)', '5', '直降200'],
            10: ['礼品兑换券', '1,2,3,4', ''],
        }

        this.bScroll = new BScroll('.p8', { probeType: 2, click: true })

        this.renderRank = function (data) {

            let isGift = false

            $('.p8btnGift').hide()

            data.forEach((v, i) => {

                if (+v.Prizeid > 10) {
                    // $('.p8tips1').text(v.PrizeLevel.split('|')[2])
                    // $('.p8name').text(v.PrizeName)
                    // $('.p8img1').hide()

                    $('.p8info').show()

                    $('.p8gift').hide()
                    $('.p8gift' + v.Prizeid).show()

                    isGift = true

                        ; v.state == 0 ? $('.p8btnExchange').show() : $('.p8btnRedeemed').show()

                    $('.p8btnExchange')
                        .attr('data-is', v.state)
                        .attr('data-position', v.PrizeLevel.split('|')[1])
                        .attr('data-id', v.Prizeid)

                } else {
                    const j = v.Prizeid

                    v.state == 0 ? $('.p8btnExchange' + j).show() : $('.p8btnRedeemed' + j).show()
                    $('.p8btnNot' + j).hide()

                    $('.p8btnExchange' + j)
                        .attr('data-is', v.state)
                        .attr('data-position', v.PrizeLevel.split('|')[1])
                        .attr('data-id', v.Prizeid)
                }


            })

            console.log(isGift);

            if (!isGift) {

                if (+isresult1 != 0 && +Ranking.week == 1) {
                    $('.p8img2').show()
                } else if (+isresult2 != 0 && +Ranking.week == 2) {
                    $('.p8img2').show()

                }

            }

            // dom += '<div class="p8Line"></div>'
            // $('.p8list').html(dom)

            // if (isCertitude) {
            //     $('.p8Lbtn').attr('data-is', 0)
            //     $('.p8Lbtn').css({
            //         'filter': 'grayscale(1)',
            //         '-webkit-filter': 'grayscale(1)',
            //     })
            // }

            // setTimeout(() => { Gift.bScroll.refresh() }, 500)
        }

        return this
    },
    open(data) {

        $('.p8img1').show()
        if (+isresult1 != 0 || +isresult1 != 0) {
            $('.p8img1').hide()
        }

        $('.p8img2').hide()
        $('.p8gift').hide()
        $('.p8info').hide()

        $('.p8GiftTipsBox').hide()

        // if (iscommit != '1' && !Registry.isCertitude) {
        //     setTimeout(() => {
        //         Registry.open()
        //     }, 2000)
        // }

        $('.Gift').fadeIn(300, function () {
            // return

            //发送请求
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=GetMyGift`,
                type: 'post',
                data: {},
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {
                        Gift.renderRank(res.Data)

                    } else {
                        popup.show({
                            type: 'toast',
                            icon: 'warn',
                            tip: res.Msg
                        });
                    }
                }
            })
        })
    },
    close(data) {
        $('.Gift').fadeOut(300, function () {

        })
    }
}

// 核销
var Certitude = {
    init() {
        this.id = null
        this.position = null
        this.code = ''
        this.address = null

        $('.p9btnBack').click(() => {
            this.close()
        })

        $('.p9btnNavigation').click((e) => {
            console.log(e);
            const i = $(e.currentTarget).attr('data-i')
            console.log(i);
            const adress = Certitude.adress[i]

            wx.openLocation({
                latitude: adress.latitude, // 纬度，浮点数，范围为90 ~ -90
                longitude: adress.longitude, // 经度，浮点数，范围为180 ~ -180。
                name: adress.adress, // 位置名
                address: adress.adressremark, // 地址详情说明
                scale: 15, // 地图缩放级别,整型值,范围从1~28。默认为最大
                infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
            });
        })

        $('.p9inp').on('input', function () {
            // $(this).val($(this).val().substring(0, 15))
            Certitude.code = $(this).val();
        })
        $('.p9btnOk').click(() => {
            if (Certitude.code == '') {
                popup.show({
                    type: 'toast',
                    icon: 'warn',
                    tip: '请填写核销码'
                });
                return
            }

            if (+Certitude.id > 10) {
                Registry.isCertitude = true
                Registry.open()
            } else {
                this.x()
            }


        })

        // 核销
        this.x = () => {
            console.log('核销');
            console.log(Certitude.position);
            console.log(Certitude.id);
            // return
            popup.show({
                type: 'loading',
                icon: 'warn',
                tip: 'loading...'
            });
            $.ajax({
                url: `dal/dal.aspx?action=CheckGift`,
                type: 'post',
                data: {
                    Checkcode: Certitude.code,
                    Prizeid: Certitude.id,
                    type: Certitude.position,
                },
                dataType: 'json',
                success(res) {
                    // 关闭提示加载 toast , success warn error
                    popup.hide();
                    console.log(res)
                    if (res.IsSuccess) {

                        if (Certitude.id == 10) {
                            renwu1 = 1
                        }

                        popup.show({
                            type: 'toast',
                            icon: 'success',
                            tip: res.Msg
                        });

                        setTimeout(() => {
                            Certitude.close()
                            // Registry.isCertitude = true
                            // Registry.open()
                            Gift.open()

                            Ranking.close()
                        }, 1500)

                    } else {
                        popup.show({
                            type: 'alert',
                            title: '',
                            tip: res.Msg
                        });
                    }
                }
            })
        }

        this.getAddress = () => {

            // popup.show({
            //     type: 'loading',
            //     icon: 'warn',
            //     tip: 'loading...'
            // });
            wx.getLocation({
                type: 'wgs84', // 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
                success: function (res) {
                    console.log(res);
                    // var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    // var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    // var speed = res.speed; // 速度，以米/每秒计
                    // var accuracy = res.accuracy; // 位置精度

                    $.ajax({
                        url: `dal/dal.aspx?action=gettopaddress`,
                        type: 'post',
                        data: {
                            longitude: res.longitude,
                            latitude: res.latitude,
                            type: Certitude.position
                        },
                        dataType: 'json',
                        success(res) {
                            // 关闭提示加载 toast , success warn error
                            popup.hide();
                            console.log(res)
                            if (res.IsSuccess) {
                                res.Data.forEach((v, i) => {
                                    $('.p9Address' + (i + 1)).text('地址：' + v.adressremark + v.adress)
                                })
                                Certitude.adress = res.Data

                            } else {
                                popup.show({
                                    type: 'toast',
                                    icon: 'warn',
                                    tip: res.Msg
                                });
                            }
                        }
                    })
                },
                fail: () => {

                    $.ajax({
                        url: `dal/dal.aspx?action=gettopaddress`,
                        type: 'post',
                        data: {
                            longitude: '',
                            latitude: '',
                            type: Certitude.position
                        },
                        dataType: 'json',
                        success(res) {
                            // 关闭提示加载 toast , success warn error
                            popup.hide();
                            console.log(res)
                            if (res.IsSuccess) {
                                res.Data.forEach((v, i) => {
                                    $('.p9Address' + (i + 1)).text('地址：' + v.adressremark + v.adress)
                                })
                                Certitude.adress = res.Data

                            } else {
                                popup.show({
                                    type: 'toast',
                                    icon: 'warn',
                                    tip: res.Msg
                                });
                            }
                        }
                    })
                }
            });

        }



        return this
    },
    open(data) {

        this.code = ''
        $('.p9inp').val(this.code)

        $('.p9Occlusion').hide()

        $('.Certitude').fadeIn(300, function () {
            if (Certitude.id == 7 || Certitude.id == 8) {
                $('.p9Occlusion').show()
            } else {
                Certitude.getAddress()
            }

        })
    },
    close(data) {
        $('.Certitude').fadeOut(300, function () {

        })
    }
}

// 游戏
var Game = {
    init() {
        this.mql = window.matchMedia('(orientation: portrait)');

        console.log(this.mql);

        
        this.mql.addListener(this.resize)

        this.resize = () => {

            if (this.mql.matches) {
                console.log('1竖屏');
    
            } else {
                alert('禁止横屏')
                console.log('1横屏');
                if(this.lifeNum != 0){
                    this.lifeNum === 0
                    Game.close()
                }
            }
        }
        this.resize()

        setInterval(() => {
            this.resize()
        }, 1000)

        $('.p6btnStart').click(() => {
            $('.p6start').hide()
            this.start()
        })
        $('.p6btnRanking').click(() => {
            this.open()
            Ranking.open()
        })

        $('.p6avatar').attr('src', headimg)
        $('.p6name').text(nickname)

        this.jgList = [1, 7, 12, 5, 18, 19, 10, 17, 15, 11, 9, 14, 6, 4, 2, 16, 3, 13, 8, 19]
        this.role = 1
        this.scenes = 5
        this.isMove = false
        this.differenceX = 0
        this.sceneryNum = 5
        this.lifeNum = 0
        this.score = 0
        this.speed = 2
        this.creationCarTime = 1000
        this.nvincible = false
        this.playerW = $('.player').width()
        this.playerH = $('.player').height()
        this.playerT = +$('.player').css('top').slice(0, -2)

        // 手指滑动
        $('.gamebox').on('touchmove', (e) => {

            if (this.isMove) {
                let left
                const x = e.targetTouches[0].pageX
                const w = +$('.gamebox').css('width').slice(0, -2)
                const w1 = +$('.player').css('width').slice(0, -2)
                const l = +$('.player').css('left').slice(0, -2)

                if ((x - this.differenceX) < 40) {
                    left = 40
                } else if ((x - this.differenceX) > w - w1 - 40) {
                    left = w - w1 - 40
                } else {
                    left = x - this.differenceX
                }

                $('.player').css({
                    'left': left + 'px'
                })

                // let top
                // const y1 = $('.gamebox').offset().top
                // const y = e.targetTouches[0].pageY - y1
                // const tw = +$('.gamebox').css('height').slice(0, -2)
                // const tw1 = +$('.player').css('height').slice(0, -2)
                // const tl = +$('.player').css('top').slice(0, -2)

                // if((y - this.differenceY) < tw / 3){
                //     top = tw / 3
                // }else if((y - this.differenceY) > tw - tw1){
                //     top = tw - tw1
                // }else{
                //     top = y - this.differenceY
                // }

                // $('.player').css({'top' : top + 'px'})
            }
        })
        // 手指按下
        $('.player').on('touchstart', (e) => {
            let player = $('.player')
            let lpx = +player.css('left').slice(0, -2)
            this.differenceX = e.targetTouches[0].pageX - lpx

            let tpx = +player.css('top').slice(0, -2)
            this.differenceY = e.targetTouches[0].pageY - tpx - $('.gamebox').offset().top
            console.log(this.differenceY)
            this.isMove = true
        })
        // 手指抬起
        $('.player').on('touchend', (e) => {
            this.isMove = false
        })

        // 创造街景
        this.plants = false
        this.jgListId = 0
        this.streetscape = (data) => {
            if (this.lifeNum === 0) return

            let dom = $('.construct')
            let i1, i2
            if (this.plants) {
                i1 = Math.random() > 0.5 ? 20 : 21
                i2 = Math.random() > 0.5 ? 20 : 21
            } else {
                // i1 = parseInt(Math.random() * 18) + 1
                // i2 = data ? parseInt(Math.random() * 18) + 1 : 1
                i1 = this.jgList[this.jgListId]

                i2 = this.jgList[this.jgListId + 1]

                    // console.log(i1, i2, this.jgListId);
                    ; this.jgListId >= this.jgList.length - 2 ? this.jgListId = 0 : this.jgListId += 2
            }
            this.plants = !this.plants

            $('.gamebox').prepend(
                `
                        <img class="construct rightAni" src="./img/game/scenery${i1}.png" alt="">
                        <img class="construct leftAni" src="./img/game/scenery${i2}.png" alt="">
                
                        `
            )

            if (dom.length > 20) {
                $(dom[dom.length - 1]).remove()
                $(dom[dom.length - 2]).remove()
            }

            setTimeout(() => {
                this.streetscape(1)
            }, 800)
        }
		
        // 创造障碍
        this.creationCar = () => {
            if (this.lifeNum === 0) return

            var index = parseInt(Math.random() * 3) + 1
            var carI = Math.random() > 0.8 ? 2 : 1
			if(this.score<dd){
				if(carI==2) index=1;//------
					else
					 index=2;
			}else{
				carI=1;
				index=1;
			}
			if(this.score>100&&this.lifeNum>0){
			//	carI=1;
			//	index=1;
			}
            // const carI = 2

            $('.gamebox').append(
                `
                        <img data-id=${carI} class="barriers barriers${index}" style="animation-name: barriers${index};animation-duration: ${this.speed}s;" src="./img/game/barriers${carI}.png" alt="">
                
                        `
            )

            let dom = $('.barriers')
            if (dom.length > 20) {
                $(dom[0]).remove()
            }

            setTimeout(() => {
                this.creationCar()
            }, this.creationCarTime)
        }

        // 判断是否相撞
        this.isCollision = () => {
            if (this.lifeNum === 0) return

            if (!this.nvincible) {
                let domArr = $('.barriers')
                for (let dom of domArr) {
                    const w1 = $(dom).width()
                    const h1 = $(dom).height()
                    const l1 = +$(dom).css('left').slice(0, -2)
                    const t1 = +$(dom).css('top').slice(0, -2)

                    const l2 = +$('.player' + Game.role).css('left').slice(0, -2)

                    // 判断礼物
                    if ($(dom).attr('data-id') == 2 && $('.gamebox').height() - h1 * 2 < t1) {
                        // $(dom).attr('src', './img/game/barriers22.png')
                        this.addFractionAni($(dom))

                       // createjs.Sound.play('add')
                    }

                    // return
                    if (h1 + t1 > this.playerT && t1 < this.playerT + this.playerH && $(dom).attr(
                        'data-id') == 1) {

                        if (l1 < this.playerW + l2 - this.playerW * 0.2 && l1 + w1 > l2 + this.playerW *
                            0.2 && t1 + h1 > this.playerT + this.playerH * 0.7 && t1 < this.playerT +
                            this.playerH) {

                            console.log('撞了')
                            // alert('撞了')
                            // break
                            $(dom).css({
                                'animation-name': 'aaa'
                            })
                            $(dom).css({
                                'width': w1 + 'px',
                                'top': t1 + 'px',
                                'left': l1 + 'px'
                            })

                            this.lifeNum--

                            if (this.lifeNum === 0) {
                                this.isMove = false
                                $('.p6deathTips').css({
                                    'animation-name': 'p6deathTips',
                                    'animation-duration': '3s'
                                })

                                setTimeout(() => {
                                    $('.p6deathTips').css({
                                        'animation-name': 'aaa',
                                        'opacity': '0'
                                    })
                                    this.end()
                                }, 3000)

                                break
                            } else {
                                // $('.player').addClass('playerAni')
                                // this.nvincible = true

                                // setTimeout(() => {
                                //     this.nvincible = false
                                //     $('.player').removeClass('playerAni')
                                // }, 2000)

                                // $('.life span').text(this.lifeNum - 1)

                            }


                        }


                    }

                }
            }

            setTimeout(() => {
                this.isCollision()
            }, 150)
        }

        // 加分动画 
        this.addFractionAni = (dom) => {
            let left = +dom.css('left').slice(0, -2)
            let id = parseInt(Math.random() * 100000)
            let addDom =
                `
                        <p style='left : ${left + dom.width() / 2}px' class="p6addFraction p6addFraction${id}">+1</p>
                        <img style='left : ${left}px' class="p6barriers22 p6barriers22${id}" src="./img/game/barriers22.png" alt="">
                    `

            $('.gamebox').append(addDom)
            dom.remove()

            this.score += 1
            gameval = this.score
            addval()
            $('.p6score').text(this.score)

            setTimeout(() => {
                $('.p6addFraction' + id).remove()
            }, 500)
            setTimeout(() => {
                $('.p6barriers22' + id).remove()
            }, 200)
        }

        // 场景切换
        this.scenesToggle = () => {


            // 监听路牌动画，切换场景
            $('.brand').on('animationiteration', function (e) {
                if (this.lifeNum === 0) return
                console.log('切换')

                Game.scenes >= 9 ? Game.scenes = 1 : Game.scenes++

                $('.brand').attr('src',
                    `./img/game/scenes${Game.scenes}_brand.png`
                )

                // Game.scenes === 3 && $($('.rightAni')[0]).attr('src', `./img/game/scenery0_33.png`)
                // $($('.leftAni')[0]).attr('src', `./img/game/scenery0_${Game.scenes}.png`)

                // $('.pdbg').fadeOut(300)
                // let i = +$('.pdbg').attr('data-i') + 1
                // i = i > 2 ? 0 : i
                // i !== 0 && $('.side' + i).fadeIn(300)
                // $('.pdbg').attr('data-i', i)

                setTimeout(() => {
                    $($('.leftAni')[0]).attr('src',
                        `./img/game/scenery0_${Game.scenes}.png`
                    )
                }, 200)
            })

            $($('.leftAni')[0]).attr('src',
                `./img/game/scenery0_${Game.scenes}.png`
            )

        }

        // 人物动画
        this.playerAni = () => {
            if (this.lifeNum === 0) return

            setTimeout(() => {
                $('.player1').hide()
                $('.player2').show()
            }, 200)
            setTimeout(() => {
                $('.player2').hide()
                $('.player3').show()
            }, 400)
            setTimeout(() => {
                $('.player3').hide()
                $('.player1').show()
            }, 600)

            setTimeout(() => {
                this.playerAni()
            }, 2000)
        }

        // 计分
        this.addScore = () => {
            if (this.lifeNum === 0) return

            this.score += 2
            gameval = this.score
            addval()
            $('.p6score').text(this.score)
            this.creationCarTime > 170 && (this.creationCarTime -= 20)
            this.speed > 1.2 && (this.speed -= 0.02)


            setTimeout(() => {
                this.addScore()
            }, 1000)

        }

        // 游戏开始
        this.start = () => {

            // 初始化值
            this.isMove = true
            this.scenes = 1
            this.speed = 2
            this.lifeNum = 1
            this.nvincible = false
            this.score = 0
            this.creationCarTime = 1000

            $('.p6score').text(this.score)
            // $('.otherAni').show()

            $('.p6scenery').show().css({
                'width': '28rem',
                'left': '-9.5rem',
                'top': '10rem'
            })
            this.creationCar()
            this.isCollision()
            this.streetscape()
            this.addScore()
            // this.playerAni()
            // this.scenesToggle()

        }

        this.end = () => {
            $('.p6scenery').hide().css({
                'width': '100vw',
                'left': '0rem',
                'top': '0rem'
            })

            // $('.brand').off('animationiteration')
            // $('.otherAni').hide()

            $('#Button1').click()
            console.log(curgameval, 'curgameval');
            console.log(curtime, 'curtime');

            // if(iscommit !== '1'){
            //     Registry.open()
            // }else{
            //     $('#Button1').click()
            // }

        }

        this.isStart = () => {

            // Game.open()
            // return
            // if(iscommit !== '1'){
            //     Registry.open()
            //     return
            // }

        }

        return this
    },
    open(data) {
        this.jgListId = 0
        $('.player').hide().css({
            'left': '3.1rem'
        })
        $('.player1').show()
        $('.construct').remove()
        $('.barriers').remove()
        // $('.otherAni').hide()

        $('.p6tips').hide()
        $('.p6start').hide()

        $('.p6scenery').hide().css({
            'width': '100vw',
            'left': '0rem',
            'top': '0rem'
        })

        $('.player').hide()
        $('.player' + this.role).show()

        $('.Game').fadeIn(300, () => {
            this.start()
        })
    },
    close(data) {
        $('.Game').fadeOut(300, function () {

        })
    }
}
