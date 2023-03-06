function TiMu(questionData,questionListLength){
	for(var i in questionData){
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);
		
		
		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";

		document.getElementById('qid').value = questionData[i].id;

		div2.innerHTML = questionData[i].title;
		div2.innerHTML = questionData[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
			
		
		var divli1 = document.createElement("div");
		divli1.innerHTML = parseInt(i) + 1;
		
		var timu = questionListLength
		for(var j in questionData[i].question_option){
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if(j == 0){
				 div3_id.innerHTML = "A";
			}else if(j == 1){
				 div3_id.innerHTML = "B";
			}else if(j == 2){
				 div3_id.innerHTML = "C";
			}else{
				 div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";
			div4.innerHTML = questionData[i].question_option[j];
			 div3.appendChild(div3_id)
			div3.appendChild(div4);
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
			// timu++
            //
            div3.setAttribute('id','attr_value_'+questionData[i].id+'_'+[j]);
			div3_id.setAttribute('id','option_value_'+questionData[i].id+'_'+[j]);
		}
	}
	mintime = 1;
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var active = "active"
	var none = "none"
	addClass(dact, active);
	//todo 判断题目正确
	checkAnswer(active,timu,questionData);


}

function checkAnswer(active,timu,questionData){

	var btn = document.getElementById("confirmQuestion");
	var next_question = document.getElementById('nextQuestion')

	$(document).click(function (e) {
		var class_name = e.target.className;
		if(class_name == 'entrance-bottom-frame-line-button-frame' || class_name== 'entrance-bottom-frame-line-button' || class_name=='entrance-bottom-frame-line-button-id'){
			document.getElementById('user_answer').value= e.target.outerText.slice(0,1);
		}

	});

	var timu_id = 0
	var select1 = 1
	var frame_left = 0

	document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
	document.querySelector(".topic-frameli").innerHTML = "<div>" + select1 + "</div>" + "/" + timu
	for(var i = 0;i<document.querySelectorAll(".entrance-bottom-frame-line-button").length;i++){
		document.getElementById('nextQuestion').onclick = function(){
			btn.style.display = 'block'
			next_question.style.display = 'none'
			document.getElementById("user_answer").value = '';
			document.getElementById('questionAnswer').style.display = 'none'

			//添加逻辑
			if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
				frame_left += -100
				document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

				timu_id++;
				select1++;
				document.querySelector(".topic-frameli").innerHTML = "<div>" + select1 + "</div>" + "/" + timu
				addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
				removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id-1], active)
			}else{
				document.getElementById('submitQuestion').style.display = 'block'
			}
		}
	}


	btn.onclick = function(){

		var qid = $($('.active').children()[1]).attr('id').split('_')[2];
		var user_answer = document.getElementById("user_answer").value;
		var project_manager_id = document.getElementById("project_manager_id").value;

		if(user_answer == "" || project_manager_id == "" || qid ==""){
			return false;
		}

		$.ajax({
			"url":"/index/question.question/answer_action?id="+project_manager_id,
			"type":"post",
			"datatype":"json",
			"data": {"qid":qid,"selected":user_answer},
			"success":function(res){
				if(res.code==1){
					error_option = checkoutOption(user_answer)
					success_option = checkoutOption(res.data.data)
					error_attr = 'attr_value_'+res.data.id+'_'+error_option;
					success_option = 'attr_value_'+res.data.id+'_'+success_option;

					if(user_answer==res.data.data){
						error_color = document.getElementById(error_attr)
						success_color = document.getElementById(success_option)
						success_color.style.background="green";
						btn.style.display = 'none'
						next_question.style.display = 'block'

						document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
						document.querySelector(".topic-frameli").innerHTML = "<div>" + select1 + "</div>" + "/" + timu

						btn.style.display = 'block'
						next_question.style.display = 'none'
						document.getElementById("user_answer").value = '';
						document.getElementById('questionAnswer').style.display = 'none'

						if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
							frame_left += -100
							document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

							timu_id++;
							select1++;
							document.querySelector(".topic-frameli").innerHTML = "<div>" + select1 + "</div>" + "/" + timu
							addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
							removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id-1], active)
						}else{
							document.getElementById('submitQuestion').style.display = 'block'
							document.getElementById('confirmQuestion').style.display = 'none'
							document.getElementById('nextQuestion').style.display = 'none'
						}


					}else{
						document.getElementById('questionAnswer').style.display = 'block'
						document.getElementById('answerOption').innerHTML = res.data.data
						document.getElementById('answer').innerHTML = res.data.answer

						error_color = document.getElementById(error_attr)
						success_color = document.getElementById(success_option)
						error_color.style.background="red";
						success_color.style.background="green";
						btn.style.display = 'none'
						next_question.style.display = 'block'

						document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
						document.querySelector(".topic-frameli").innerHTML = "<div>" + select1 + "</div>" + "/" + timu

						if(select1==timu){
							document.getElementById('submitQuestion').style.display = 'block'
							document.getElementById('confirmQuestion').style.display = 'none'
							document.getElementById('nextQuestion').style.display = 'none'
						}
					}
				}
			}
		})
	}

	//提交
	submitQuestionClick = document.getElementById('submitQuestion');
	submitQuestionClick.onclick = function(){
		var project_manager_id = $("#project_manager_id").val();
		$.ajax({
			"url":"/index/question.question/answer_end?id="+project_manager_id,
			"type":"post",
			"datatype":"json",
			"data": {},
			"success":function(res){
				if(res.code==1){
					document.getElementById('correctly').innerHTML = res.data.score
					document.getElementById('accuracy').innerHTML = res.data.accuracy
					document.getElementById('questionTime').innerHTML = res.data.surplusTime
					document.getElementById('errorQuestion').innerHTML = res.data.score
					document.getElementById('integral').innerHTML = res.data.score
					document.getElementById('questionShow').style.display = 'block'
				}
			}
		});
	}
}

function checkoutOption(question) {
	switch (question) {
		case 'A':
			return  "0";
			break;
		case 'B':
			return "1";
			break;
		case 'C':
			return "2";
			break;
		case 'D':
			return  "3";
			break;
		case 'E':
			return  "4";
	}
}

function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}
        

var ajax=$.ajax;
$.ajax=function(obj){
	if(obj.url.indexOf('index/question.ToDayQuestion/index')>-1){
		var fun=obj.success;
		obj.success=function(data){
			data.data.question.question=data.data.question.correctc_answer
				fun(data)
		}
	}
	ajax(obj);
}