
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
	}
}
$('.J_captcha_btn_submit').on('click', function(e){
	e.preventDefault();
	layer.load(0, {shade: [0.1,'#fff'],time: 1000});
	doSubmit();
});
function doSubmit(){
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