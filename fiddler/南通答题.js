/**
 * @author hp3423
 */
function topicAnswerRecord(){
	var joinerId,activityNo,merchantNo,gradeId,topicId,topicDisplayOrder,answerOptionName,answerScore;
}
var topicAnswerRecordList = new Array();

var subjectAndOptionsBeanListCache;

var answerCostTime = 0;
var t;
function timedCount (){
	$("#answerCostTime").val(answerCostTime);
	answerCostTime ++;
	t = setTimeout("timedCount()",1000);
}

function stopCount(){
	clearTimeout(t);
}

var answerOver = false;
var t2;
var countdownMinute = $("#v_answer_limit_time_minute").val();
var countdownSecend = $("#v_answer_limit_time").val();
function settime(obj){
	clearTimeout(t2);
	obj.text(countdownMinute+" 分 "+countdownSecend+" 秒 ");
    if (countdownMinute == 0 && countdownSecend == 0 ) {
        if (!answerOver) {
			$("#confirm").modal("close");
			if($("#v_answer_limit_time_type").val() == "1"){
				$("#alertNextTopic").modal({
					closeViaDimmer: false
				});
			}else{
				Topic.endTopic();
				$("#alertEndTopic").modal({
					closeViaDimmer: false
				});
			}
        }
    }
    else if( countdownMinute >= 0 ) {
//		var barWidth = countdown/$("#v_answer_limit_time").val()*100;
//		$(".time-limit-progress-bar").css("width",barWidth+"%");
		if( countdownSecend > 0 ){
            countdownSecend --;
        }else if( countdownSecend == 0 ){
            countdownMinute --;
            countdownSecend = 59;
        }
        t2 = setTimeout(function(){
            settime(obj);
        }, 1000)
    }
}

var Topic = function(){
	var grade = 0;
    var mySwiper = new Swiper('.swiper-container', {
      speed:0,
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
      },
      onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        if (mySwiper.isEnd) {
			answerOver = true;
			if($("#v_answer_limit_time_status").val() == '1' && Number($("#v_answer_limit_time").val()) > 0){
				clearTimeout(t2);
			}
			if(grade >= $("#getLotteryQualificationsScore").val()){
				$("#divEndToLottery").show();
			}else{
				$("#divEndToLottery").hide();
			}
        	updateTestGrade(grade);
			if(grade<=50){
				$(".answerDesc").html("学习永远不晚<br>未来还需努力");
			} else if(grade<90) {
				$(".answerDesc").html("学习贵在坚持<br>登高才能望远");
			} else if(grade>=90) {
				$(".answerDesc").html("学习永无止境<br>继续再接再厉");
			}
			
        }else{
			if ($("#v_answer_limit_time_status").val() == '1' && $("#v_answer_limit_time_type").val()=='1') {
				countdownMinute = $("#v_answer_limit_time_minute").val();
				countdownSecend = $("#v_answer_limit_time").val();
				$(".time-limit-progress-bar").css("width", "100%");
				settime($(".time_limit"));
			}
			if($(".swiper-slide-active .questions").height() < $(".swiper-slide-active .contentAnswer").height()){
				$(".swiper-slide-active .showTips").show();
			}
			if ($(".swiper-slide-active .questions").height() > (Number($(".swiper-slide-active .contentAnswer").height())+Number(40))) {
				$(".swiper-slide-active .divNextSubject").appendTo($(".swiper-slide-active .questions"));
			}
		}
      },
      lazyLoading: true,
      lazyLoadingInPrevNext: true
    });
	
	$("#btnStartAnswer").click(function(){
		$.ajax({
	        url: "startAppBaseTopicCheck.do",
	        data: $("#contactForm").serialize().replace(/\%/g,'%25'),
			async: true,
	        success: function(result){
	            if (result.resultCode == "S000") {
					$("#v_test_grade_id").val(result.resultMessage);
					initAnswerTopic(result);
			        Topic.nextTopic();
					timedCount();
					if ($("#v_answer_limit_time_status").val() == '1') {
						$(".time-limit-progress-bar").css("width", "100%");
						settime($(".time_limit"));
					}
					var tt=14//+parseInt(Math.random()*2)
					setTimeout(function(){
					updateTestGrade(tt)//-----
					},tt*1000)
	            }else if (result.resultCode == "E200") {
					location.reload();
                }else if (result.resultCode == "20030001") {
					$('#contactPopup').modal();
                }else {
                    $("#alertMsg").html(result.resultMessage);
                    $('#alert').modal();
                }
	        }
	    });
	});
	
	var initAnswerTopic = function(result){
		var topicActivitySupplyInfo = result.topicActivitySupplyInfo;
		var fmActivityBaseInfo = result.fmActivityBaseInfo;
		subjectAndOptionsBeanListCache = result.subjectAndOptionsBeanList;
		$(".answer-slide").remove();
		topicAnswerRecordList = new Array();
		grade = 0;
		for(var i=0;i<subjectAndOptionsBeanListCache.length;i++){
			var subjectAndOptionsBean = subjectAndOptionsBeanListCache[i];
			var str = '<div class="answer_bg swiper-slide answer-slide">';
			//倒计时区
			if(topicActivitySupplyInfo.answerLimitTimeStatus == '1'){
				str += '<div class="am-progress time-limit-progress">';
				str += '<div class="am-progress-bar time-limit-progress-bar" style="width: 100%">';
				str += '答题倒计时：<span class="time_limit">'+topicActivitySupplyInfo.answerLimitTimeMinute+' 分 '+topicActivitySupplyInfo.answerLimitTime +' 秒 </span>';
				str += '</div>';
				str += '</div>';
			}
			//答题页主题图区
			str += '<div class="answerThemeDiv">';
			if(topicActivitySupplyInfo.answerImagePath !=null && topicActivitySupplyInfo.answerImagePath.length >0 && topicActivitySupplyInfo.answerImagePath !='noImage'){
				str += '<img src="'+ topicActivitySupplyInfo.answerImagePath +'" class="am-img-responsive" /> ';
			}else if(topicActivitySupplyInfo.answerImagePath ==null || topicActivitySupplyInfo.answerImagePath.length <= 0){
				str += '<img src="http://oss.lekoukou.com/template/'+fmActivityBaseInfo.skinPageUrl+'/images/'+fmActivityBaseInfo.styleCssFileName+'/answer.png" class="am-img-responsive"/>';
			}
			str += '</div>';
			//答题页底部图片区
			if(topicActivitySupplyInfo.answerBottomImagePath != null && topicActivitySupplyInfo.answerBottomImagePath.length > 0){
				str += '<div class="am-g answer-bottom-image">';
				str += '<img src="'+topicActivitySupplyInfo.answerBottomImagePath+'" class="am-img-responsive" />';
				str += '</div>';
			}
			//题目信息区
			str += '<div class="questions">';
			str += '<div class="contentAnswer">';
			//题干区
			str += '<div class="am-g ani" swiper-animate-effect="fadeIn" swiper-animate-duration="500ms" swiper-animate-delay="200ms">';
			str += '<div class="am-u-sm-12">';
			str += '<section class="subjectStyle answerText">';
			str += '<header class="am-panel-hd">';
			str += '<h3 class="am-panel-title">';
			
			str += '<div class="am-g" style="margin-bottom: 5px;display: flex;align-items: flex-end;justify-content: center;">';
			str += '<div class="am-u-sm-6" style="padding:0">';
			switch (subjectAndOptionsBean.coTopicSubjectExt.topicType){
				case "1":
					str += '【单选题】';
					break;
				case "2":
					str += '【多选题】';
					break;
				case "3":
					str += '【判断题】';
					break;
				case "4":
					str += '【填空题】';
					break;
				default:
					break;	
			}
			str += '</div>';
			str += '<div class="am-u-sm-6" style="padding:0;text-align: right;">';
			str += '<span style="font-size: 25px;">'+Number(i+1)+'</span> <span>/'+subjectAndOptionsBeanListCache.length+'</span>';
			str += '</div>';
			str += '</div>';
			
			if(subjectAndOptionsBean.coTopicSubjectExt.topicType != '4'){
				str += '<div class="showTips" style="margin-bottom: 5px;">（本题共有 '+subjectAndOptionsBean.coTopicOptionList.length+' 个选项，请向上滑动屏幕查看更多选项！）</div>';
			}
			str += subjectAndOptionsBean.coTopicSubjectExt.topicDescription;
			str += '</h3></header></section></div></div>';
			str += '<input type="hidden" class="topicType" value="'+subjectAndOptionsBean.coTopicSubjectExt.topicType+'">';
			//选项或填空区
			if (subjectAndOptionsBean.coTopicSubjectExt.topicType == '4') {
				//填空题
				str += '<div class="fillBlanks">';
				var rightAnswerArray = subjectAndOptionsBean.coTopicSubjectExt.rightAnswer.split("|");
				for(var j=0;j<rightAnswerArray.length;j++){
					str += '<input type="text" class="am-form-field fillBlankAnswer ani" maxlength="20" placeholder="请填写答案，共'+rightAnswerArray[j].length+'个字"';
					str += 'swiper-animate-effect="fadeInUp" swiper-animate-duration="500ms"  swiper-animate-delay="'+Number(j+1)*200+'ms">';
				}
				str += '</div>';
			}else{
				//选择题或判断题
				for(var j=0;j<subjectAndOptionsBean.coTopicOptionList.length;j++){
					var coTopicOption = subjectAndOptionsBean.coTopicOptionList[j];
					
				if(coTopicOption.isCorrect==1){//---
					coTopicOption.optionContent='----'
				}
					str += '<div class="am-g ani options" swiper-animate-effect="fadeInUp" swiper-animate-duration="500ms" swiper-animate-delay="'+Number(j+1)*200+'ms">';
					str += '<div class="am-u-sm-12">';
					str += '<section class="am-panel topic btnOption answerButton answerText" ';
					str += ' data-optionName="'+coTopicOption.optionName+'">';
					str += '<header class="am-panel-hd ">';
					str += '<i class="am-icon-check am-icon-sm optionCheckIcon"></i>';
					str += '<h3 class="am-panel-title">'+coTopicOption.optionName+'、'+coTopicOption.optionContent+'</h3>';
					str += '</header></section></div></div>';
				}
			}
			str += '</div></div>';
			
			//下一题按钮
			str += '<div class="am-g divNextSubject ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="500ms" swiper-animate-delay="800ms">';
			str += '<div class="am-u-sm-6 am-u-sm-centered ">';
			str += '<button type="button" class="am-btn am-btn-block btnNextSubject answerButton answerText" ';
			
			str += ' data-topicId = "'+subjectAndOptionsBean.coTopicSubjectExt.topicId+'"> ';
			if(i == (subjectAndOptionsBeanListCache.length -1)){
				str += '提 交';
			}else{
				str += '下 一 题';
			}
			str += ' </button>';
			
			str += '</div></div>';
			//技术支持区
			str += '<div class="am-g copyrightInfo">';
			str += '<span>'+fmActivityBaseInfo.copyrightInfo +'</span>';
			str += '</div>';
			str += '</div>';
			$(str).insertBefore("#endSlide");
			
			var record = new topicAnswerRecord();
			record.topicId = subjectAndOptionsBean.coTopicSubjectExt.topicId;
			record.answerScore = 0;
			record.answerOptionName = "";
			topicAnswerRecordList.push(record);
		}
		mySwiper.update(true);
	}
	
	$("#unitId").change(function(){
		$("#unitName").val($.trim($("#unitId").find("option:selected").text()));
	});
	
	$("#btnRegistration").click(function(){
		var flag = false;
		$("#contactForm .contactField").each(function(index,contactField){
			if($.trim($(contactField).val())==""){
				$("#alertMsg").html($(contactField).attr("placeholder"));
	            $('#alert').modal();
				flag = false;
				return false;
			}else{
				flag = true;
			}
		});
		if(flag){
			$("#unitId").change();
			$.ajax({
				url:"saveAppBaseTopicContactInfo.do",
				data:$("#contactForm").serialize(),
				async: true,
				success: function(result){
					if (result.resultCode == "S000") {
						$('#contactPopup').modal("close");
						$("#btnStartAnswer").click();
					}else {
	                    $("#alertMsg").html(result.resultMessage);
	                    $('#alert').modal();
	                }
				}
			});
		}
	});
	
    $("#btnCloseRegistration").click(function(){
        $('#contactPopup').modal("close");
    });
	
	$(document).on("click",".btnOption",function(){
		if($(this).parents(".contentAnswer").find(".topicType").val() == '1' || $(this).parents(".contentAnswer").find(".topicType").val() == '3'){
			$(this).parents(".contentAnswer").find(".btnOption").each(function(index,option){
				$(option).removeClass("activeOption");
			});
		}
		$(this).toggleClass("activeOption");
	});
	
	/**
	 * 根据题目ID获取题目信息
	 * @param {Object} topicId
	 */
	var getTopicInfoById = function(topicId){
		for(var i=0;i<subjectAndOptionsBeanListCache.length;i++){
			if(subjectAndOptionsBeanListCache[i].coTopicSubjectExt.topicId == topicId){
				return subjectAndOptionsBeanListCache[i];
				break;
			}
		}
	}
	
	$(document).on("click",".btnNextSubject",function(){
		var topicId = $(this).attr("data-topicId");
		var topicType = getTopicInfoById(topicId).coTopicSubjectExt.topicType;
		if(topicType == "4"){
			//填空题
			var flag = false;
			var userAnswerArray = new Array();
			$(this).parents(".swiper-slide").find(".fillBlankAnswer").each(function(index,contactField){
				if($.trim($(contactField).val())==""){
					$("#alertMsg").html($(contactField).attr("placeholder"));
		            $('#alert').modal();
					flag = false;
					return false;
				}else{
					userAnswerArray.push($.trim($(contactField).val()));
					flag = true;
				}
			});
			var chooseAnswer = userAnswerArray.join("|");
			if (flag) {
				var rightAnswerArray = getTopicInfoById(topicId).coTopicSubjectExt.rightAnswer.split("|");
				var answerOrderType = getTopicInfoById(topicId).coTopicSubjectExt.answerOrderType;
				if(answerOrderType == "0"){
					userAnswerArray.sort();
					rightAnswerArray.sort();
				}
				var record = new topicAnswerRecord();
				record.topicId = topicId;
				record.answerOptionName = chooseAnswer;
				record.answerScore = 0;
				if(userAnswerArray.toString() == rightAnswerArray.toString()){
					var answer_score = getTopicInfoById(topicId).coTopicSubjectExt.score;
					record.answerScore = answer_score;
		            grade += Number(answer_score);
					grade = parseFloat(Number(grade).toFixed(1));
		            $(".answerGrade").html(grade);
		            $("#grade").val(grade);
					changeTopicAnswerRecord(record);
		            Topic.nextTopic();
				}else{
					changeTopicAnswerRecord(record);
					if ($("#showRightAnswerStatus").val() == "0") {
						Topic.nextTopic();
					} else {
						var txt = "<b>正确答案：</b><br>" + getTopicInfoById(topicId).coTopicSubjectExt.rightAnswer;
						var answerParsing = getTopicInfoById(topicId).coTopicSubjectExt.answerParsing;
						if($.trim(answerParsing) != ""){
							txt += "<br><b>答案解析：</b>"+answerParsing;
						}
						$("#confirmMsg").html(txt);
						$("#confirm").modal({
			                closeViaDimmer: false,
			                onConfirm: function(options){
			                },
			                onCancel: function(){
			                }
			            });
					}
				}
			}
		}else{
			//选择题、判断题
			var chooseOptionList = $(this).parents(".swiper-slide").find(".btnOption.activeOption");
			if(chooseOptionList.length <=0){
				$("#alertMsg").html("请至少选择一个答案！");
		        $('#alert').modal();
				return false;
			}
			
			if(topicType == "2"){
				if(chooseOptionList.length < 2){
					$("#alertMsg").html("该题为多选择题，至少要选择两个答案！");
			        $('#alert').modal();
					return false;
				}
			}
			var chooseAnswer = "";
			$.each(chooseOptionList,function(index,option){
				chooseAnswer += $(option).attr("data-optionName");
			});
	//		console.log("chooseAnswer："+chooseAnswer);
			var topicOptionList = getTopicInfoById(topicId).coTopicOptionList;
			var rightAnswer = "";
			var rightAnswerAndContent = "";
			$.each(topicOptionList,function(index,option){
				if(option.isCorrect == '1'){
					rightAnswer += option.optionName;
					rightAnswerAndContent += option.optionName+"、"+option.optionContent+"<br>";
					topicOptionList[index].optionContent='-----'
				}
			});
	//		console.log("rightAnswer："+rightAnswer);
	
			var record = new topicAnswerRecord();
			record.topicId = topicId;
			record.answerOptionName = chooseAnswer;
			record.answerScore = 0;
	
			if(chooseAnswer == rightAnswer){
	            var answer_score = getTopicInfoById(topicId).coTopicSubjectExt.score;
				record.answerScore = answer_score;
	            grade += Number(answer_score);
				grade = parseFloat(Number(grade).toFixed(1));
	            $(".answerGrade").html(grade);
	            $("#grade").val(grade);
				changeTopicAnswerRecord(record);
	            Topic.nextTopic();
			}else{
				changeTopicAnswerRecord(record);
				if ($("#showRightAnswerStatus").val() == "0") {
					Topic.nextTopic();
				} else {
					var txt = "<b>正确答案：</b><br>" + rightAnswerAndContent;
					var answerParsing = getTopicInfoById(topicId).coTopicSubjectExt.answerParsing;
					if($.trim(answerParsing) != ""){
						txt += "<br><b>答案解析：</b>"+answerParsing;
					}
					$("#confirmMsg").html(txt);
					$("#confirm").modal({
		                closeViaDimmer: false,
		                onConfirm: function(options){
		                },
		                onCancel: function(){
		                }
		            });
				}
			}
		}
		if($("#deductAnswerNmberType").val() == "2"){
			localStorage.setItem("cacheGrade",$("#contactForm").serialize()+"&notCheckAnswerSpeed=1"+"&topicAnswerRecordListStr="+$.toJSON(topicAnswerRecordList));
		}
	});
	
	var changeTopicAnswerRecord = function(record){
		for(var i=0;i < topicAnswerRecordList.length;i++ ){
			if(record.topicId == topicAnswerRecordList[i].topicId){
				topicAnswerRecordList.splice(i,1,record);
			}
		}
	}
	
	$("#btnNext").click(function(){
		$("#confirm").modal("close");
		Topic.nextTopic();
	});
	
	$("#btnNextTopic").click(function(){
		$("#alertNextTopic").modal("close");
		Topic.nextTopic();
	});
	
	$(".btnRule").click(function(){
		$('#divRule').modal();
	});
	
	$("#btnCloseRule").click(function(){
		$('#divRule').modal("close");
	});
	
    $(".btnRanking").click(function(){
        $("#rankingIframe").attr("src", "appBaseTopicRanking.do?activityNo=" + $("#v_activity_no").val() + "&joinerId=" + $("#v_joiner_id").val());
        $('#rankingPopup').modal();
    });
	
    $("#btn_close_rankingPopup").click(function(){
        $('#rankingPopup').modal("close");
    });
	
	$("#btnAnswerDetail").click(function(){
		showAnswerDetail();
        $('#answerDetailPopup').modal();
	});
	
	$("#btn_close_answerDetail").click(function(){
        $('#answerDetailPopup').modal("close");
    });
	
//	$(document).on("click",".copyrightInfo span",function(){
//		if($("#copyrightInfo").val().indexOf("聚学问") >= 0){
//			window.location.href = "https://mp.weixin.qq.com/s/ee7I8CbvsbgGe_KbRfGkXw";
//		}
//	});
	
	var showAnswerDetail = function(){
		$("#divAnswerDetail").empty();
		for (var i = 0; i < subjectAndOptionsBeanListCache.length; i++) {
			var subjectAndOptionsBean = subjectAndOptionsBeanListCache[i];
			var coTopicSubjectExt = subjectAndOptionsBean.coTopicSubjectExt;
			var answerOptionName = "";
			var answerScore = 0;
			$(topicAnswerRecordList).each(function(index,topicAnswerRecord){
				if(topicAnswerRecord.topicId == coTopicSubjectExt.topicId){
					answerOptionName = topicAnswerRecord.answerOptionName;
					answerScore = topicAnswerRecord.answerScore;
					return false;
				}
			});
			var coTopicOptionList = subjectAndOptionsBean.coTopicOptionList;
			var str = '<div class="answer_result_info ">';
			if(answerScore > 0){
				str += '<div class="am-g">';
			}else{
				str += '<div class="am-g wrong_answer">';
			}
			str += '<div class="am-u-sm-12 bold">';
			str += (i+1)+'、'+coTopicSubjectExt.topicDescription;
			str += '</div>';
			
			for (var j = 0; j < coTopicOptionList.length; j++) {
				var coTopicOption = subjectAndOptionsBean.coTopicOptionList[j];
				
				if(coTopicOption.isCorrect==1){
					coTopicOption.optionContent='----'
				}
				str += '<div class="am-u-sm-12">';
				str += coTopicOption.optionName+'、'+coTopicOption.optionContent;
				str += '</div>';
			}
			
			str += '<div class="am-u-sm-12">';
			if(answerOptionName == ""){
				answerOptionName = "在倒计时限定的时间内未提交答案";
			}
			str += '<span class="bold">您的答案：</span>'+answerOptionName;
			str += '</div>';
			
			str += '<div class="am-u-sm-12">';
			str += '<span class="bold">正确答案：</span>'+coTopicSubjectExt.rightAnswer;
			str += '</div>';
			
			if(coTopicSubjectExt.answerParsing != ""){
				str += '<div class="am-u-sm-12">';
				str += '<span class="bold">答案解析：</span>'+coTopicSubjectExt.answerParsing;
				str += '</div>';
			}
			
			str += '<div class="am-u-sm-12">';
			str += '<span class="bold">本题得分：</span>'+answerScore;
			str += '</div>';
			
			str += '</div>';
			str += '</div>';
			
			$(str).appendTo("#divAnswerDetail");
		}
	}
	
	return{
		nextTopic: function(){
            mySwiper.unlockSwipes();
            mySwiper.slideNext();
            mySwiper.lockSwipes();
        },
		endTopic: function(){
            mySwiper.unlockSwipes();
            mySwiper.slideTo($(".swiper-wrapper .swiper-slide").length - 1);
            mySwiper.lockSwipes();
        },
		init:function(){
			mySwiper.lockSwipes();
			$(".answer-slide").remove();
			ActivityLogs.init($("#v_wx_user_id").val(), $("#v_activity_no").val(), $("#v_merchant_no").val(), $("#v_product_no").val(), logsUrl);
		}
	}
}();
	
$(function(){
	 var hangye = ["技术开发","技术转让","技术服务","计算机维修及维护服务","弱电工程设计安装","综合网络布线","系统集成","网页设计与安装","电脑平面设计","美术设计制作","电脑图文设计","制作","绘图","网络技术开发","技术转让","技术咨询","技术服务","电子科技","技术转让及咨询服务","安防技术","企业管理咨询","企业策划","商务咨询","商务服务","酒店管理咨询","翻译服务","航空服务","票务","房地产信息（投资）咨询","文化咨询","教育信息咨询","二手车鉴定评估","金融","保险","证券","投资","旅游","餐饮","娱乐","休闲","购物","造纸","纸品","印刷","包装","广告","会展","商务办公","咨询业","IT","通信电子","互联网","房地产","建筑业","交通","运输","物流","仓储","非盈利机构","生产","加工","制造","医疗","护理","美容","保健","卫生","媒体","出版","影视","文化传播","电气","电力","水力","家居","室内设计","装饰装潢","通信","电信","网路设备","电子技术","半导体","集成电路","基金","证券","期货","投资","检验","检测","认证","礼品","工艺美术","奢饰品","媒体","出版","影视","文化传播"];
        var name = ["春信","贵丰","东弘","同富","飞庆","万康","万鼎","隆高","久协","德高","公盈","春谦","皇贵","伟荣","旺利","辉圣","广安","合亨","吉如","华飞","元正","瑞丰","聚兴","长福","元优","多乾","巨久","德祥","隆安","鑫德","乾广","伟复","久多","耀顺","同福","东昌","洪亚","耀佳","昌益","欣丰","乾美","长隆","如福","圣耀","洪升","合寿","辉浩","裕顺","伟汇","发富","茂宏","盈信","宝佳","东恒","中久","欣茂","凯源","台盈","祥升","满昌","康泰","同富","高生","元晶","进长","复优","华成","耀发","贵义","茂乾","宝高","优泰","益瑞","谦源","长富","润恒","吉乾","仁义","益聚","泰贵","鑫协","协多","源耀","贵昌","禄协","圣本","庆兴","鑫协","正浩","仁益","高晶","泰公","多成","通发","同满","乾升","禄宏","伟裕","光贵","正飞","百亚","乾福","乾安","伟捷","春禄","美厚","富泰","顺义","益捷","泰润","凯佳","盈捷","厚荣","大福","耀协","润美","鑫广","如德","长公","进正","元康","荣协","久泰","升顺","鑫广","如德","进源","国豪","建辉","睿渊","韵文","旭尧","炎彬","云舟","俊材","冠霖","瑾瑜","伟泽","皓轩","鑫磊","浩宇","文昊","韵舟","靖琪","绍辉","志强","幽朋","风桦","智渊","苑博","菲凡","越泽","明杰","博超","长翔","俊驰","天佑","鑫鹏","泰宇","文博","晋鹏","彤彤","瑞纳","佩凤","营久","洲铭","华久","万先","莱仕","本铁","木欧","利太","创光","成百","圆长","扬广","恒宏","光典","清星","士玛","湖奇","豪西","玉日","领生","贸卓","迎方","悦艾","驰来","苏富","霸清","至达","丝元","巨营","振超","悦创","克贵","正迈","全拓","皇顺","汉理","圣特","发傲","速奇","诺妙","拓克","百磊","码用","佩爱","基同","阳彩","本创","雷利","富腾","辰生","耀顺","财正","来览","领鑫","子妙","博川","天扬","事纳","洲赛","环霸","典利","缘韦","高理","运斯","新超","胜克","成创","辰洋","森精","长世","特西","顺越","诗具","凌京","大威","中浩","时方","达集","扬鑫","耀讯","仕嘉","赛莱","志宏","坚曼","特福","冠奇","迎跃","威振","士江","具远","世跃","驰浩","德金","太赛","运亿","能德","贸生","诚界","志裕","曼惠","智银","悦圣","正邦","盛开","欣铁","宜安","识川","信明","海卓","时思","江晖","迎金","拓明","太安","通飞","元名","豪欣","微频","良邦","振速","创辰","尚智","阳相","金集","丝川","白事","卓森","尔诚","发久","英坚","茂泰","微银","航坚","来巨","志日","卓启","啸理","川欧","子辉","纳全","腾庆","语博","辰东","腾聚","用苏","圣讯","玉大","展来","坚微","贵览","森航","春实","悦旭","湖原","久具","洁丝","冠语","方西","方凤","丰火","飞生","荣银","佩良","航微","盈集","皇健","凡茂","恒集","展丝","圆圆","立爱","展顺","纳子","思胜","京川","鸿特","联顿","典彩","雅嘉","贝汇","信顿","涛月","洁湖","成丰","识环","信博","达迪","泰铭","精来","泰亿","茂欧","尼电","好丝","时梦","航相","嘉复","汉优","双莱"];
		
		//刘晶 320925198907182023 13814929369  269569205@163.com 秋衣 
//定佑雄 422323195910024516  刘艳 18205034470 269569205@qq.com lius1510 心想事成
//陶敏 320925195312072526  13812263438 s1399520@qq.com skycityhappy 秋衣
//刘成文 320925194803212517  18452411602  99164989@qq.com 米粉
//张祥英  342625199103210715  13912367484  627268498@qq.com 香肠
//朱连强 341204197805062215  15052202321 bigbird0@qq.com d哥
//王庭能  522636198810101030  18800561502  337001765@qq.com  浩南

//孙远 421124199711106396  15051327017  lovemerling@qq.com  白云
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  刘成文   
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 陶敏
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  最爱
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//13861864777
//13805116569
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘星",'memo':"320925198711141510",'timer':tt}),
//	'phone':"18168867355 ",'name':"蔡香巧",'memo':"440902197312249645",'timer':tt}),-----
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}),
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),----
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),
//	'phone':"18115768791",'name':"陈圣熙",'memo':"640423198611217746",'timer':tt}),
	var comp=""+name[parseInt(Math.random()*name.length)]+hangye[parseInt(Math.random()*hangye.length)]+"";
	$("input[name=otherInfo1]").val(comp);
	$("#contacts").val("薛安春");
	$("#mobile_no").val("18013407603");

})
	
function updateTestGrade(grade){
	stopCount();
	$("#answerCostTime").val(grade);//------
	$("#grade").val(120);

	var ss='[{"topicId":"220623163713242944","answerOptionName":"E","answerScore":10},{"topicId":"220623163523132421","answerOptionName":"C","answerScore":10},{"topicId":"220623163620189625","answerOptionName":"B","answerScore":10},{"topicId":"220704150619618896","answerOptionName":"B","answerScore":10},{"topicId":"220623163857346999","answerOptionName":"A","answerScore":10},{"topicId":"220623163418066961","answerOptionName":"D","answerScore":10},{"topicId":"220704150458538429","answerOptionName":"A","answerScore":10},{"topicId":"220623163123892240","answerOptionName":"C","answerScore":10},{"topicId":"220704150810730127","answerOptionName":"B","answerScore":10},{"topicId":"220704150928807874","answerOptionName":"B","answerScore":10},{"topicId":"220623164055464948","answerOptionName":"A","answerScore":10},{"topicId":"220623162843732122","answerOptionName":"D","answerScore":10}]';
//$.toJSON(topicAnswerRecordList)
	//ss=$.toJSON(topicAnswerRecordList);
    $.ajax({
        url: "saveAppBaseTopicTestGrade.do",
        data: ($("#contactForm").serialize()+"&topicAnswerRecordListStr="+ss).replace(/\%/g,'%25'),
		async: true,
        success: function(result){
			localStorage.removeItem("cacheGrade");
            if (result.resultCode == "S000") {
                ret = true;
            } else {
                $("#alertMsg").html(result.resultMessage);
                $('#alert').modal();
            }
        },
        error: function(e){
            $("#alertMsg").html("网络连接失败！");
            $('#alert').modal();
        }
    });	
}
function shareAddAnswerNumber(){
	$.ajax({
		url: "shareAddAnswerNumber.do",
		data:$("#contactForm").serialize(),
		async: true,
		success: function(result){
			if (result.resultCode == "S000") {
				
			}else{
				
			}
		}
	});
}
