function getMoble() {
var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
var i = parseInt(10 * Math.random());
var prefix = prefixArray[i];
for (var j = 0; j < 8; j++) {
prefix = prefix + Math.floor(Math.random() * 10);
}
return prefix;
}
var sName=[],Name=[];
sName[0]="白|bai";
        sName[1]="白|bai";
        sName[2]="蔡|cai";
        sName[3]="曹|cao";
        sName[4]="陈|chen";
        sName[5]="戴|dai";
        sName[6]="窦|dou";
        sName[7]="邓|deng";
        sName[8]="狄|di";
        sName[9]="杜|du";
        sName[10]="段|duan";
        sName[11]="范|fan";
        sName[12]="樊|fan";
        sName[13]="房|fang";
        sName[14]="风|feng";
        sName[15]="符|fu";
        sName[16]="福|fu";
        sName[17]="高|gao";
        sName[18]="古|gu";
        sName[19]="关|guan";
        sName[20]="郭|guo";
        sName[21]="毛|mao";
        sName[22]="韩|han";
        sName[23]="胡|hu";
        sName[24]="花|hua";
        sName[25]="洪|hong";
        sName[26]="侯|hou";
        sName[27]="黄|huang";
        sName[28]="贾|jia";
        sName[29]="蒋|jiang";
        sName[30]="金|jin";
        sName[31]="廖|liao";
        sName[32]="梁|liang";
        sName[33]="李|li";
        sName[34]="林|lin";
        sName[35]="刘|liu";
        sName[36]="龙|long";
        sName[37]="陆|lu";
        sName[38]="卢|lu";
        sName[39]="罗|luo";
        sName[40]="马|ma";
        sName[41]="牛|niu";
        sName[42]="庞|pang";
        sName[43]="裴|pei";
        sName[44]="彭|peng";
        sName[45]="戚|qi";
        sName[46]="齐|qi";
        sName[47]="钱|qian";
        sName[48]="乔|qiao";
        sName[49]="秦|qin";
        sName[50]="邱|qiu";
        sName[51]="裘|qiu";
        sName[52]="仇|qiu";
        sName[53]="沙|sha";
        sName[54]="商|shang";
        sName[55]="尚|shang";
        sName[56]="邵|shao";
        sName[57]="沈|shen";
        sName[58]="师|shi";
        sName[59]="施|shi";
        sName[60]="宋|song";
        sName[61]="孙|sun";
        sName[62]="童|tong";
        sName[63]="万|wan";
        sName[64]="王|wang";
        sName[65]="魏|wei";
        sName[66]="卫|wei";
        sName[67]="吴|wu";
        sName[68]="武|wu";
        sName[69]="萧|xiao";
        sName[70]="肖|xiao";
        sName[71]="项|xiang";
        sName[72]="许|xu";
        sName[73]="徐|xu";
        sName[74]="薛|xue";
        sName[75]="杨|yang";
        sName[76]="羊|yang";
        sName[77]="阳|yang";
        sName[78]="易|yi";
        sName[79]="尹|yin";
        sName[80]="俞|yu";
        sName[81]="赵|zhao";
        sName[82]="钟|zhong";
        sName[83]="周|zhou";
        sName[84]="郑|zheng";
        sName[85]="朱|zhu";
        sName[86]="东方|dongfang";
        sName[87]="独孤|dugu";
        sName[88]="慕容|murong";
        sName[89]="欧阳|ouyang";
        sName[90]="司马|sima";
        sName[91]="西门|ximen";
        sName[92]="尉迟|yuchi";
        sName[93]="长孙|zhangsun";
        sName[94]="诸葛|zhuge";
         
        Name[0]="ai|皑艾哀";
        Name[1]="an|安黯谙";
        Name[2]="ao|奥傲敖骜翱";
        Name[3]="ang|昂盎";
        Name[4]="ba|罢霸";
        Name[5]="bai|白佰";
        Name[6]="ban|斑般";
        Name[7]="bang|邦";
        Name[8]="bei|北倍贝备";
        Name[9]="biao|表标彪飚飙";
        Name[10]="bian|边卞弁忭";
        Name[11]="bu|步不";
        Name[12]="cao|曹草操漕";
        Name[13]="cang|苍仓";
        Name[14]="chang|常长昌敞玚";
        Name[15]="chi|迟持池赤尺驰炽";
        Name[16]="ci|此次词茨辞慈";
        Name[17]="du|独都";
        Name[18]="dong|东侗";
        Name[19]="dou|都";
        Name[20]="fa|发乏珐";
        Name[21]="fan|范凡反泛帆蕃";
        Name[22]="fang|方访邡昉";
        Name[23]="feng|风凤封丰奉枫峰锋";
        Name[24]="fu|夫符弗芙";
        Name[25]="gao|高皋郜镐";
        Name[26]="hong|洪红宏鸿虹泓弘";
        Name[27]="hu|虎忽湖护乎祜浒怙";
        Name[28]="hua|化花华骅桦";
        Name[29]="hao|号浩皓蒿浩昊灏淏";
        Name[30]="ji|积极济技击疾及基集记纪季继吉计冀祭际籍绩忌寂霁稷玑芨蓟戢佶奇诘笈畿犄";
        Name[31]="jian|渐剑见建间柬坚俭";
        Name[32]="kan|刊戡";
        Name[33]="ke|可克科刻珂恪溘牁";
        Name[34]="lang|朗浪廊琅阆莨";
        Name[35]="li|历离里理利立力丽礼黎栗荔沥栎璃";
        Name[36]="lin|临霖林琳";
        Name[37]="ma|马"; 
        Name[38]="mao|贸冒貌冒懋矛卯瑁";
        Name[39]="miao|淼渺邈";
        Name[40]="nan|楠南";
        Name[41]="pian|片翩";
        Name[42]="qian|潜谦倩茜乾虔千";
        Name[43]="qiang|强羌锖玱";
        Name[44]="qin|亲琴钦沁芩矜";
        Name[45]="qing|清庆卿晴";
        Name[46]="ran|冉然染燃";
        Name[47]="ren|仁刃壬仞";
        Name[48]="sha|沙煞";
        Name[49]="shang|上裳商";
        Name[50]="shen|深审神申慎参莘";
        Name[51]="shi|师史石时十世士诗始示适炻";
        Name[52]="shui|水";
        Name[53]="si|思斯丝司祀嗣巳";
        Name[54]="song|松颂诵";
        Name[55]="tang|堂唐棠瑭";
        Name[56]="tong|统通同童彤仝";
        Name[57]="tian|天田忝";
        Name[58]="wan|万宛晚";
        Name[59]="wei|卫微伟维威韦纬炜惟玮为";
        Name[60]="wu|吴物务武午五巫邬兀毋戊";
        Name[61]="xi|西席锡洗夕兮熹惜";
        Name[62]="xiao|潇萧笑晓肖霄骁校";
        Name[63]="xiong|熊雄";
        Name[64]="yang|羊洋阳漾央秧炀飏鸯";
        Name[65]="yi|易意依亦伊夷倚毅义宜仪艺译翼逸忆怡熠沂颐奕弈懿翊轶屹猗翌";
        Name[66]="yin|隐因引银音寅吟胤訚烟荫";
        Name[67]="ying|映英影颖瑛应莹郢鹰";
        Name[68]="you|幽悠右忧猷酉";
        Name[69]="yu|渔郁寓于余玉雨语预羽舆育宇禹域誉瑜屿御渝毓虞禺豫裕钰煜聿";
        Name[70]="zhi|制至值知质致智志直治执止置芝旨峙芷挚郅炙雉帜";
        Name[71]="zhong|中忠钟衷";
        Name[72]="zhou|周州舟胄繇昼";
        Name[73]="zhu|竹主驻足朱祝诸珠著竺";
        Name[74]="zhuo|卓灼灼拙琢濯斫擢焯酌";
        Name[75]="zi|子资兹紫姿孜梓秭";
        Name[76]="zong|宗枞";
        Name[77]="zu|足族祖卒";
        Name[78]="zuo|作左佐笮凿";
function getsName(){
	var n = Math.floor(Math.random() * sName.length + 1)-1; 
	return sName[n].split('|')[0];
}
function getName(){
	var n = Math.floor(Math.random() * Name.length + 1)-1; 
	var na=Name[n].split('|')[1];
	//console.log(na);
	var m = Math.floor(Math.random() * na.length + 1)-1; 
	//console.log(na.length );
	//console.log(m);
	return na.substr(m,1)
	
}
$(function () {

    function doAnimate(aniObj) {
        aniObj.find('.ani').each(function (n, el) {
            var delay = $(this).attr('delay') * 1000;
            if (typeof delay === 'undefined') delay = 100;
            var t = setTimeout(function () {
                $(el).show().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(el).removeClass('animated');
                });
            }, delay);
        });
    }
    var loadImgArr = [
        'images/bottom.png',
        'images/fail_start.png',
        'images/fail.png',
        'images/finish_chouj.png',
        'images/finish_restart.png',
        'images/huibei.png',
        'images/icons-dialog.png',
        'images/imgborder.jpg',
        'images/index1.png',
        'images/jinbei.png',
        'images/music_btn.png',
        'images/next.png',
        'images/notice_2.jpg',
        'images/notice_3.jpg',
        'images/notice_tit.jpg',
        'images/page1.jpg',
        'images/prize_result.png',
        'images/prize_resultbg.jpg',
        'images/quan.png',
        'images/restart.png',
        'images/right.png',
        'images/rule_btn.png',
        'images/share.png',
        'images/start.png',
        'images/success.png',
        'images/wrong.png',
        'images/xuhao_bg.png',
        'images/shareimg.jpg',
    ];
    var answerstr = "";//
    var questr = [];//问题
    var index = 0;//题目索引
    var score = 0;//计算正确个数
    var anserarr = [];//答案选择
    var quesnum = 10;//题目个数
    var questen = [];//随机的10题
    var indexArr = [];//题序数组
    var flag = false;//答题判断
    var name = "";
    var phone = "";
    function changePage(page1, page2) {
        if (page1 != undefined && page1 != null) {
            page1.animate({
                'opacity': 0
            }, 500, function () {
                $(this).hide();
                if (page2 != undefined && page2 != null) {
                    page2.show().animate({
                        'opacity': 1
                    }, 500, function () {
                        doAnimate(page2);
                    });
                }
            });
        } else if (page2 != undefined && page2 != null) {
            page2.show().animate({
                'opacity': 1
            }, 500, function () {
                doAnimate(page2);
            });
        }
    }
    var imgLoaded = 0;
    function preloadImages(dataArr) {
        function _onReady(imgsrc) {
            // if (imgLoaded !== undefined){
            imgLoaded++;
            var bar = imgLoaded / dataArr.length * 100;
            $('#load .loadbar').css('margin-left', -(100 - bar) + '%');
            // }
            // 图片加载完成
            if (imgLoaded === dataArr.length) {
                changePage($('#load'), $('.page1'));
            }
        }
        for (var i = 0; i < dataArr.length; i++) {
            loadImage(dataArr[i], _onReady);
        }
    }
    function loadImage(src, callback) {
        var image, imgElement;
        imgElement = new Image();
        imgElement.src = src;
        function onReady() {
            if (callback) callback(src);
        }
        imgElement.onload = function () {
            onReady();
        }
        imgElement.onerror = function () {
            reload();
        }
    };
    preloadImages(loadImgArr);
    changePage(null, $('#load'));

    //首页开始答题
    $('.start').click(function () {
        reset();
        changePage($('.page1'), $('.page2'));
    })
    //规则页开始闯关
    $('.notice_btn').click(function () {
        getQues();
        changePage($('.page2'), $('.page3'));
    })

    //选项选中
    $(".ques_con .card").click(function () {
        $(this).addClass("choose").siblings('.card').removeClass("choose");
        $(".ques_con .card").addClass("noclick");
        var str = $(this).find("span").html();
        answerstr = str;
        cardsub();
    })
    //不能抽奖
    $(".finish_restart").click(function () {
        reset();
        changePage($('.page3'), $('.page1'));
    })
    //抽奖
    $(".finish_cj").click(function () {
        $(this).addClass("noclick");
        submit();
    })
    //答题页面 重新开始
    $(".restart").click(function () {
        reset();
        changePage($('.page3'), $('.page1'));
    })
    //未中奖页面 开始答题
    $(".fail_start").click(function () {
        reset();
        changePage($('.page4'), $('.page1'));
    })

    //答题 提交答案
    function cardsub() {
        if (answerstr == "") {
            return false;
        }
		answerstr= questen[index].ra.trim()
        anserarr[index] = answerstr;
        $(this).addClass("noclick");
		
        if (answerstr == questen[index].ra.trim()) {
            flag = true;
            score += 1;
        } else {
            var rightans=questen[index].ra.trim();
            $(".card"+rightans).addClass("cardright");
            flag = false;
            
        }
        determine(flag);
    }
    function determine(flag) {
        if (index < quesnum - 1) {

            if (flag) {

                $(".wrong").hide();
                $(".right").show();
            } else {
                $(".right").hide();
                $(".wrong").show();
            }
        } else {
            $(".mask").show();
            $(".finish_con").hide();
            if (score == quesnum) {
                $(".success_con").show();
				setTimeout(function(){//---
					$("#name").val(getsName()+getName());

					$("#phone").val(getMoble());
					if($("#name").val()!=''&& $("#phone").val()!='')
					$(".finish_cj").trigger('click')
				},500)
				
            } else if (score < quesnum) {
                $(".fail_con").show();
            }
        }
    }

    //下一题
    $(".next").click(function () {
        $(this).addClass("noclick");
        index++;
        // console.log(index);
        showques(index);
    })
    function getQues() {
        $.ajax({
            url: "./js/ques.json",
            type: 'get',
            dataType: 'json',
            success: function (res) {
                if (res.length > 0) {
                    questr = res;
                    getQuesIndex(questr);
                }
            },
            error: function () {
                // alert("网络超时！");
                $.sendError('网络超时！', 3000000);
            }
        })
    }
    //答题结束 抽奖
    function submit() {
        var anserstr = anserarr.join('|');
        var ques = indexArr.join('|');
        var openid = window.sessionStorage.getItem('openid');
        var nickname = window.sessionStorage.getItem('nickname');
        var ptoken=sessionStorage.getItem('ptoken');
        name = $("#name").val();
        phone = $("#phone").val();
        if (!isChineseChar(name)) {
            $.sendError('请填写正确的姓名', 3000000);
            $(".finish_cj").removeClass("noclick");
            return false;
        }
        if (!checkPhone(phone)) {
            $.sendError('请填写正确的手机号', 3000000);
            $(".finish_cj").removeClass("noclick");
            return false;
        }
        $.ajax({
            type: 'POST',
            url: "https://webapp.yunnan.cn/new/index.php?nova_p=Vnp3c3VYSEtUdjVOTEdHcElZNHdKOTJUNExkOWtSRmVBNFh5aUowOUFjVEZ0NE1JR05KdHZLRkwrenNwNTdYdg@@",
            dataType: 'json',
            data: {
                openid: openid,
                nickname: nickname,
                anserstr: anserstr,
                ques: ques,
                score: score,
                ptoken:ptoken,
                name:name,
                phone:phone
            },
            success: function (res) {
                $(".mask").hide();
                sessionStorage.removeItem("ptoken"); 
                if (res.status == "success") {
                    /*changePage($('.page3'), $('.page5'));
                    $(".jdq1 span").html(res.number);
                    $(".jdq2 span").html(res.secret);
					*/
					 changePage($('.page3'), $('.page4'));
					setTimeout(function(){
						$(".fail_start").trigger('click')
					},200)
				    setTimeout(function(){
						$('.start').trigger('click')
					},300)
					setTimeout(function(){
						$('.notice_btn').trigger('click')
					},400)
                } else {

                    changePage($('.page3'), $('.page4'));
					setTimeout(function(){
						$(".fail_start").trigger('click')
					},200)
				    setTimeout(function(){
						$('.start').trigger('click')
					},300)
					setTimeout(function(){
						$('.notice_btn').trigger('click')
					},400)
								
					//$('.start').trigger('click')
                }
            },
            error: function () {
                $(".mask").hide();
                changePage($('.page3'), $('.page4'))
            }
        })

    }

    $(".share").click(function () {
        $(".sharetip").show();
    })
    $(".tipknow").click(function () {
        $(".sharetip").hide();
    })
    function reset() {
       // name = "";
      //  phone = "";
        $(".mask").hide();
        $(".finish_con").hide();
        $(".sharetip").hide();
        $(".card").removeClass("noclick");
        $(".card").removeClass("choose");
        $(".ques_con .card").removeClass("cardright");
        $(".finish_cj").removeClass("noclick");
        $(".wrong").hide();
        $(".right").hide();
        questr = [];//问题
        index = 0;//题目索引
        score = 0;//计算正确个数
        anserarr = [];//答案选择
        questen = [];//随机的10题
        indexArr = [];//题序数组
       // name = "";
        //phone = "";
       // $("#name").val("");
       // $("#phone").val("");
    }
    function getQuesIndex(questr) {
        $.ajax({
            url: "https://webapp.yunnan.cn/new/index.php?nova_p=Vnp3c3VYSEtUdjVOTEdHcElZNHdKemlzZnlIV1JNZ1l6Y2ozSlpYN2NMSk9HdzFoRW9TUHhZSmNBQW5NK1BlbQ@@",
            type: 'post',
            dataType: 'json',
            data: {},
            success: function (res) {
                // console.log(res);
                if (res.status == 'success') {
                    indexArr = res.ques;
                    sessionStorage.setItem('ptoken', res.token);
                    for (var j = 0; j < res.ques.length; j++) {
                        var quesindex = res.ques[j];
                        questen.push(questr[quesindex]);
                    }
                    showques(0);
                    // console.log(questen);
                }
            },
            error: function () {
				getQues()
            }
        })
    }
    //读取题目
    function showques(num) {
        var num2 = num + 1;
        $(".ques_con .card").removeClass("noclick");
        $(".ques_con .card").removeClass("choose");
        $(".ques_con .card").removeClass("cardright");
        $(".ques_con .btn img").removeClass("noclick");
        $(".right").hide();
        $(".wrong").hide();
        $(".ques .title").html(questen[num].title);
        $(".xuhao i").html(num2);
        $(".cardA i").html(questen[num].a1);
        $(".cardB i").html(questen[num].a2);
        $(".cardC i").html(questen[num].a3);
        answerstr = "";
		$(".cardA i").trigger('click');
		$(".next").trigger('click');
    }
     //中文验证
     function isChineseChar(str) {
        var reg = /^[\u4e00-\u9fa5]{2,6}$/;
        return reg.test(str);
    }
    //手机号验证
    function checkPhone(phone) {
        var reg = /^1[3456789]\d{9}$/;
        return reg.test(phone);
    }

    var audio = document.getElementById('bg-music');
    var controller = document.getElementById('musicBtn');
    window.addEventListener("load", function () {
        audio.play();
        $(".music-btn").addClass("on");
    }, false);
    function checkAudio() {
        if (audio.paused) {
            controller.className = 'music-btn';
        } else {
            controller.className = 'music-btn on';
        }
    }

    function playAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    $("#musicBtn").on("click", function () {
        playAudio();
        checkAudio();
    })
    checkAudio();
})
