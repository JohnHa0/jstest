
var inter;
var processIdArr = [];
var examstart = new Date().getTime(); //开始的毫秒数
var examend,examprocess;

//开始答题
$('.J_product').eq(0).show();

var isfinish = initPid = initSort = 0;
$('.J_next').on('click', function(e){
	e.preventDefault();
	var parentObj = $(this).parent().parent();
	isfinish = $(this).data('isfinish');
	initPid = $(this).data('pid');
	initSort = $(this).data('sort');
	var type = $(this).data('type');
	var analysis = parentObj.data('analysis');
	console.log('当前题目的pid:'+initPid+';排序:'+initSort+';类型:'+type+';是否解析:'+analysis);
	if(active_mode == 1){ //问卷模式
		if(analysis == 1){
			verfiyAnswer(parentObj, type, analysis, '');
		}else{
			goNext();
		}
	}else if(active_mode == 2){ //答题模式
		if(check_type == 1){
			var correctAnswer = parentObj.find('.J_correctAnswer').val();
			console.log('正确答案correctAnswer:', correctAnswer);
			verfiyAnswer(parentObj, type, analysis, correctAnswer);
		}else{
			examprocess = new Date().getTime(); //结束的毫秒数
			var param = {
				kid: kid,
				pid: initPid,
				examtime: examtime,
				examstart: examstart,
				examprocess: examprocess
			}
			$.ajax({
				type: "POST",
				dataType: "JSON",
				url: url_checkAnswer,
				data: param,
				success: function(ret){
					if(ret.code == 1){
						var retData = ret.data;
						var processId = retData.processId;
						processIdArr.push(processId);
						var correct_answer = retData.productInfo.correct_answer;
						verfiyAnswer(parentObj, type, analysis, correct_answer);
					}else if(ret.code == 0){
						Wei.Util.wapTipNew({msg: ret.msg, icon: 2});
					}
				},
				error: function(e){
					console.log(e.status);
					console.log(e.responseText);
				}
			});
		}
	}
	//Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 2, url: url_score, data: {'mode':'layerMsg'}});
	//Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 3, url: url_score});
	var descrip = parentObj.find('.J_product_descrip').html();
	//console.log(descrip);
	$('.J_descrip_content').html(descrip);
});
function verfiyAnswer(parentObj, type, analysis, correctAnswer){
	if(type == 1){
		$("input:radio[name='answerSimple["+initPid+"]']").val(correctAnswer)
		$("#"+initPid+"_"+correctAnswer).trigger("click")
		var tmpAnswer = $("input:radio[name='answerSimple["+initPid+"]']:checked").val();
		if(!tmpAnswer){
			Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 2, data: {}});
			return;
		}else{
// 	        $("input:radio[name='answerSimple["+initPid+"]']").each(function(index, item){
// 	            $(this).attr("disabled", "disabled");
// 	        });
		}
		if(active_mode == 1){
			$("#modal-jiexi").openModal();
	    }else if(active_mode == 2){
			console.log('单选题,您选择的答案:', tmpAnswer, ';正确答案是:', correctAnswer);
	    	parentObj.find('.J_nowAnswer').val(tmpAnswer);
			//验证答案是否正确
			if(tmpAnswer != correctAnswer){
				Wei.Util.wapTipNew({msg: '您的答案选择有误，正确答案是'+correctAnswer, icon: 2, time: 1000}, function(){
					if(analysis == 1){
						$("#modal-jiexi").openModal();
					}else{
						goNext();
					}
				});
			}else{
				Wei.Util.wapTipNew({msg: '您选择的答案正确', icon: 1, time: 1000}, function(){
					goNext();
				});
			}
	    }
	}else if(type == 2){
		var tmpArr = [];
        $("input:checkbox[name='answerMultiple["+initPid+"][]']:checked").each(function(index, item){
            tmpArr.push($(this).val());
        });
		if(tmpArr.length == 0){
			Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 2});
			return;
		}else{
// 	        $("input:checkbox[name='answerMultiple["+initPid+"][]']").each(function(index, item){
// 	            $(this).attr("disabled", "disabled");
// 	        });
		}
		if(active_mode == 1){
			$("#modal-jiexi").openModal();
	    }else if(active_mode == 2){
			var tmpStr = tmpArr.join(',');
			console.log('多选题,您选择的答案:', tmpStr, ';正确答案是:', correctAnswer);
		    parentObj.find('.J_nowAnswer').val(tmpStr);
			//验证答案是否正确
			if(tmpStr != correctAnswer){
				Wei.Util.wapTipNew({msg: '您的答案选择有误，正确答案是'+correctAnswer, icon: 2, time: 1000}, function(){
					if(analysis == 1){
						$("#modal-jiexi").openModal();
					}else{
						goNext();
					}
				});
			}else{
				Wei.Util.wapTipNew({msg: '您选择的答案正确', icon: 1, time: 1000}, function(){
					goNext();
				});
			}
		}
	}else if(type == 3){
		$("input:radio[name='answerSimple["+initPid+"]']").val(correctAnswer)
		$("#"+initPid+"_"+correctAnswer).trigger("click")
		var tmpAnswer = $("input:radio[name='answerJudge["+initPid+"]']:checked").val();
		if(!tmpAnswer){
			Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 2});
			return;
		}else{
// 	        $("input:radio[name='answerJudge["+initPid+"]']").each(function(index, item){
// 	            $(this).attr("disabled", "disabled");
// 	        });
		}
		if(active_mode == 1){
			$("#modal-jiexi").openModal();
	    }else if(active_mode == 2){
			console.log('判断题,您选择的答案:', tmpAnswer, ';正确答案是:', correctAnswer);
		    parentObj.find('.J_nowAnswer').val(tmpAnswer);
			//验证答案是否正确
			if(tmpAnswer != correctAnswer){
				Wei.Util.wapTipNew({msg: '您的答案选择有误，正确答案是'+correctAnswer, icon: 2, time: 1000}, function(){
					if(analysis == 1){
						$("#modal-jiexi").openModal();
					}else{
						goNext();
					}
				});
			}else{
				Wei.Util.wapTipNew({msg: '您选择的答案正确', icon: 1, time: 1000}, function(){
					goNext();
				});
			}
		}
	}
}
//选项扩展
$('.J_expand').on("click", function(){
	$(this).next('div').show();
})
//点击解析结束按钮
$('.J_descrip_close').on('click', function(e){
	console.log('是否结束isfinish:', isfinish);
	if(isfinish == 1){
		if(captcha_type != 0){ //开启验证码功能
			examend = new Date().getTime(); //结束的毫秒数
			clearInterval(inter); //清除定时器
			getCaptcha();
		}else{
			doSubmit();
		}
	}else{
		$("#modal-jiexi").closeModal();
		$('.J_product').hide();
		var nextSort = parseInt(initSort)+1;
		console.log('nextSort:', nextSort);
		$('.J_product').eq(nextSort).show();
	}
});
function goNext(){
	console.log('是否结束isfinish:', isfinish);
	if(isfinish == 1){
		if(captcha_type != 0){ //开启验证码功能
			examend = new Date().getTime(); //结束的毫秒数
			clearInterval(inter); //清除定时器
			getCaptcha();
		}else{
			doSubmit();
		}
	}else{
		$('.J_product').hide();
		var nextSort = parseInt(initSort)+1;
		console.log('nextSort:', nextSort);
		$('.J_product').eq(nextSort).show();
		setTimeout(function(){
			//if(nextSort<9)
			$($('.J_next')[nextSort]).trigger('click')
		},100)
	}
}
$('.J_captcha_btn_submit').on('click', function(e){
	e.preventDefault();
	layer.load(0, {shade: [0.1,'#fff'],time: 1000});
	doSubmit();
});

/**
 * 加密
 * @param encryptString 要加密的字符串
 * @param key 秘钥
 * @returns {string} 加密后的字符串
 */
function aesEncrypt(encryptString, key, iv){
    var key = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.enc.Utf8.parse(iv);
    var srcs = CryptoJS.enc.Utf8.parse(encryptString);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}
/**
 * 解密
 * @param decryptString 要解密的字符串
 * @param key 秘钥
 * @returns {string} 解密后的字符串
 */
function aesDecrypt(decryptString, key, iv){
    var key = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.enc.Utf8.parse(iv);
    var decrypt = CryptoJS.AES.decrypt(decryptString, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
var key = "qyxksbbsxcx31kdw";
var iv = "vtgh432188654ffr";
// var pazzword = "杰克马的财富密码";
// // aes 加密
// pazzword = aesEncrypt(pazzword, key, iv);
// console.log('加密后：' + pazzword);
// // aes 解密
// console.log("解密后：" + aesDecrypt(pazzword, key, iv));

function doSubmit(){
	//刘晶 320925198907182023 13814929369  269569205@163.com 天天 
//定佑雄 422323195910024516  刘艳 18205034470 269569205@qq.com lius1510 月月
//陶敏  342625199103210715  13812263438 s1399520@qq.com skycityhappy 美丽
//刘成文 320925194803212517  18452411602  99164989@qq.com 兔斯基
//张祥英   320925195312072526 13912367484  627268498@qq.com 越
//朱连强 341204197805062215  15052202321 bigbird0@qq.com 原来如此
//王庭能  522636198810101030  18800561502  337001765@qq.com  。

//孙远 421124199711106396  15051327017  lovemerling@qq.com  美食
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  万像   
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 大风
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  心想事成
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//13861864777
//13805116569 高全勇
//17327402146 陈栋梁
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),米粉
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘星",'memo':"320925198711141510",'timer':tt}), 悦风诗宁
//	'phone':"18168867355 ",'name':"蔡香巧",'memo':"440902197312249645",'timer':tt}),-----王子
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),--原来如此
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}),杨月
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),外外
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),阿混
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),杏林
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),----d哥
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),美食
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),万象世界
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),大风
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),kiel
//	'phone':"18115768791",'name':"陈圣熙",'memo':"640423198611217746",'timer':tt}),手心的爱
	examstart=examend-28401-parseInt(Math.random()*100)

	var crypted_text = aesEncrypt(productIdStr, key, iv); //aes加密
	$('.J_crypted_text').val(crypted_text);
	$('.J_examtime').val(examtime);
	$('.J_processIds').val(processIdArr);
	$('.J_examstart').val(examstart);
	$('.J_examend').val(examend);
	var form = $('.J_ajaxForm');
	form.ajaxSubmit({
		url: form.attr('action'),
		dataType: 'json',
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
		beforeSubmit: function (arr, $form, options){
			layer.load(1, {
				shade: [0.1,'#fff'],
				time: 1000
			});
            return true;
		},
		success: function (ret, statusText, xhr, $form){
			if(ret.code == 1){
				Wei.Util.wapTipNew({msg: ret.msg, icon: 1, data: ret.data, url: ret.url});
			}else if(ret.code == 0){
				Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url});
			}
		},
		error: function (ret, statusText, xhr, $form){
			//alert('error');
		}
	});
}

//自动交卷
//计算答题时间
function timer1(){
	inter = window.setInterval(function(){
		//console.log('examtime:', examtime);
		examtime++;
	}, 1000);
}
//计算答题时间并自动交卷
function timer2(intDiff){
	var inter = window.setInterval(function(){
		var day=0,
			hour=0,
			minute=0,
			second=0;//时间默认值
		if(intDiff > 0){
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		var str = '距离交卷还剩';
		if(day){
			str += '<i class="mc-num">'+day+'</i><span class="mc-text">天</span>';
		}
		if(hour){
			str += '<span></span><i class="mc-num">'+hour+'</i><span class="mc-text">小时</span>';
		}
		str += '<i class="mc-num">'+minute+'</i><span class="mc-text">分</span>';
		str += '<i class="mc-num">'+second+'</i><span class="mc-text">秒</span>';
		$('.J_remainTime').html(str);
		intDiff--;
		examtime++;
		if(intDiff < 0){
			console.log('答题时间到');
			clearInterval(inter);
			doSubmit();
		}
	}, 1000);
}
$(function(){
	if(intDiff > 0){
		timer2(intDiff);
	}else{
		timer1();
	}
});