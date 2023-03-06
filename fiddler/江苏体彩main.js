

var screenH = $(window).height();
$(".fmTop").css('top',(screenH-680-300));

var fengMian = document.querySelector('.fengMian');
var container = document.querySelector('.container');
var hand = document.querySelector('.hand');
var add = document.querySelector('.add');


var a = document.getElementById('a');
var b = document.getElementById('b');

var progress=document.querySelector('.pros');
var start=document.querySelector('.start');
var tip_btn=document.querySelector('.tip_btn');
var title=document.querySelector('.title');
var pros=document.getElementsByClassName('pro')[0];
var pros2=document.getElementsByClassName('pros2')[0];
var over=document.getElementsByClassName('over')[0];
var restart=document.getElementsByClassName('restart')[0];
var restart2=document.getElementsByClassName('restart2')[0];
var kengBox=document.querySelector('.kengBox');
var scores=document.querySelector('.score');
var s=0;
var timer_pro=0;
var rules=document.querySelector('.rules');
var rule=document.querySelector('.rule');
var close=document.querySelector('a');
//要塞的球的数组
var push_arr=[];

// 开始游戏
start.onclick=function(){
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
				$('.fengMian').hide();
				$(".popBox").show();
				$(".dialog").hide();
				$(".myPrize2").show();
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


}

tip_btn.onclick=function(){
	// 按钮移除
	// this.remove();
	fengMian.style.display='none';
	$(".popBox").hide();
	$(".myPrize2").hide();
	container.style.display='block';
	//return false;
	// 进度条
	var s30=30;
	timer_pro = setInterval(function(){
		s30-=1;
		if(s30>=10) {
			title.innerHTML="00:"+s30;
		} else {
			title.innerHTML="00:0"+s30;
		}
		if (s30<=0) {
			$(".loadingBox").show();
			clearInterval(timer_pro);
			clearInterval(circle);

			if(s>=15){
				setTimeout(function(){
					$(".loadingBox").hide();
					$(".popBox").show();
					$(".success").show();
				}, 1000);
			}else{
				setTimeout(function(){
					$(".loadingBox").hide();
					$(".popBox").show();
					over.style.display='block';
				}, 1000);
			};

		}
	},1000);
	star();	// 第一次游戏的函数
	res();	// 调用重新开始的函数
}


// 游戏开始函数
function star(){

	//=======游戏进行时
	container.ontouchstart=function(e){
		var oEvent = e || event;
		var pageX = oEvent.changedTouches[0].clientX;
		var pageY = oEvent.changedTouches[0].clientY;

		hand.style.left = pageX+"px";
		hand.style.top = (pageY-50)+"px";
		hand.style.display='block';
	};
    var left_wfLocation=-1;
	circle = setInterval(function(){
	//灰太狼随机出现的位置
	var arrPos = [
		{left:"23px",bottom:"82px"},
		{left:"215px",bottom:"82px"},
		{left:"418px",bottom:"82px"},
		{left:"23px",bottom:"335px"},
		{left:"215px",bottom:"335px"},
		{left:"418px",bottom:"335px"},
		{left:"23px",bottom:"622px"},
		{left:"215px",bottom:"622px"},
		{left:"418px",bottom:"622px"}
	];
	
	// 将图片存进数组
	var wolf_1=[BASE_URL + 'img/h0.png',BASE_URL + 'img/h1.png',BASE_URL + 'img/h2.png',BASE_URL + 'img/h3.png',BASE_URL + 'img/h4.png',BASE_URL + 'img/h5.png',BASE_URL + 'img/h6.png',BASE_URL + 'img/h7.png',BASE_URL + 'img/h8.png',BASE_URL + 'img/h9.png'];
	var wolf_2=[BASE_URL + 'img/x0.png',BASE_URL + 'img/x1.png',BASE_URL + 'img/x2.png',BASE_URL + 'img/x3.png',BASE_URL + 'img/x4.png',BASE_URL + 'img/x5.png',BASE_URL + 'img/x6.png',BASE_URL + 'img/x7.png',BASE_URL + 'img/x8.png',BASE_URL + 'img/x9.png'];
	var appearWolf=[BASE_URL + 'img/h0.png',BASE_URL + 'img/x0.png'];
	var wfLocation=rand(0,8);
	// 狼的随机位置
	if(left_wfLocation != wfLocation) {
		var newImg=document.createElement('img');
	    kengBox.appendChild(newImg);
		newImg.style.left=arrPos[wfLocation].left;
		newImg.style.bottom=arrPos[wfLocation].bottom;
		newImg.style.position='absolute';
		newImg.id="laoShu";
	//	if(if (ulList[idx].children.length == 0))
		
	    var code = +new Date();
        left_wfLocation=wfLocation;
        //var code = left_wfLocation;
		var y=0;var indexs=0;
		//循环0-5图片展示
		var data_num=rand(1,36);
		newImg.setAttribute("data-id", code);
		newImg.setAttribute("data_num", data_num);
		if (data_num <=35){
			newImg.src=BASE_URL + 'img/'+data_num+'.png';
		}else{
			newImg.src=BASE_URL + 'img/bomp.png';
		};
		
        
		newImg.style.display='block';
		if(wfLocation>=0 && wfLocation<3) {
		    $('#laoShu[data-id="' + code + '"]').animate({
                    bottom: '182px'
                }, 800).animate({
                    bottom: '82px'
                }, 800);
		} else if(wfLocation>=3 && wfLocation<6) {
			 $('#laoShu[data-id="' + code + '"]').animate({
                    bottom: '435px'
                }, 800).animate({
                    bottom: '335px'
                }, 800);
		} else {
			 $('#laoShu[data-id="' + code + '"]').animate({
                    bottom: '722px'
                }, 800).animate({
                    bottom: '622px'
                }, 800);

		}

		newImg.ontouchstart=function(e){
                
				indexs++;
				if (indexs>1) {
					return false;
					// 鼠标只能点击1次 而不能无限点
				}
				var data_num=parseInt(newImg.getAttribute("data_num"));
				if (data_num<=35) {
					//判断是否在数组中
					var index = $.inArray(newImg.getAttribute("data_num"), push_arr);
					if (index >= 0) {
						$(".title2").show();
						setTimeout(function(){$(".title2").hide();},400);
					
					} else {
						push_arr.push(newImg.getAttribute("data_num"));			
					}
				} else {
					push_arr.pop();  
				}
				
				//console.log(newImg.getAttribute("data_num"));
				y=5;
				
				if (data_num<=35) {
					a.cloneNode().play();
					s+=1;
					
					// $(".add").eq(wfLocation).show();
					// setTimeout(function(){$(".add").eq(wfLocation).hide();},400);
				}else{
					b.cloneNode().play();
					s-=1;
					if (s<=0) {
						s=0;
					}
					
					// $(".cut").eq(wfLocation).show();
					// setTimeout(function(){$(".cut").eq(wfLocation).hide();},400);
				}
			}
			html='';
			for (let i = 0; i < push_arr.length; i++) {
			    if(push_arr[i] <10) {
					html=html+"<span>0"+push_arr[i]+"</span>";
				} else {
					html=html+"<span>"+push_arr[i]+"</span>";
				}
			}
			$('.score').html(html);
			$('.success .p1').html(html);
			var d_num=rand(1,12);
			var d_num2=rand(1,11);
			var d1='';
			var d2='';
			if (d_num == d_num2) {
				d_num2=d_num2+1;
			}
			if (d_num <10) {
				d1="0"+d_num;
			} else {
				d1=d_num;
			}
			if (d_num2 <10) {
				d2="0"+d_num2;
			} else {
				d2=d_num2;
			}
			$('.success .p2').html("<span>"+d1+"</span><span>"+d2+"</span>");
			console.log(push_arr.length);
			if(push_arr.length>=0) {
				s=16;
				$(".loadingBox").show();
				clearInterval(timer_pro);
				clearInterval(circle);
				setTimeout(function(){
					$(".loadingBox").hide();
					$(".popBox").show();
					$(".success").show();
				}, 1000);
			}
			setTimeout(function () {
				$('#laoShu[data-id="' + code + '"]').remove();
				left_wfLocation=-1;
			}, 1500);
		

	}

},1100);
	// s=0;
	// scores.innerHTML=s;
	// console.log(s);
	//========游戏结束
};




// 重新开始函数
function res(){
	restart.onclick=function(){
		//alert(111111);
		// 挑战失败，再来一次 清零
		push_arr=[];
		s=0;
		$('.score').html('');
		$('.success .p1').html('');
		$('.success .p2').html('');
		$(".popBox").hide();
		over.style.display='none';

		var s30=30;
			title.innerHTML="00:"+s30;
		var timer_pro = setInterval(function(){
			s30-=1;
			if(s30>=10) {
				title.innerHTML="00:"+s30;

			} else {
				title.innerHTML="00:0"+s30;
			}
			
			if (s30<=0) {

				$(".loadingBox").show();
				clearInterval(timer_pro);
				clearInterval(circle);
				if(s>=15){
					setTimeout(function(){
						$(".loadingBox").hide();
						$(".popBox").show();
						$(".success").show();
					}, 1000);

				}else{
					setTimeout(function(){
						$(".loadingBox").hide();
						$(".popBox").show();
						over.style.display='block';
					}, 1000);
				};
			}
		},1000);
		star();
	};
}
// rules.onclick=function(){
// 	rule.style.display='block';
// }
// close.onclick=function(){
// 	rule.style.display='none';
// }



// 随机函数
function rand(min,max){
	return Math.round(Math.random()*(max-min)+min);
}
var secs=rand(800,1000);
var stay=rand(150,250);



$(".rulerBtn").click(function(event) {
	$(".popBox").show();
	$(".rule").show();
});

// 我的奖品
var pping = false;
$(".myPrizeBtn").click(function(event) {
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
				$(".myPrize").show();
			} else if(data.code == -200 ) {
				showMsg(data.msg);return;
			} else if(data.code == -1 ) {
				$('.cardBg .p1').html('暂无奖品');
				$(".popBox").show();
				$(".myPrize").show();
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

$(".close").click(function(event) {
	$(this).parent('.parent').hide();
	$(".popBox").hide();
});


$("input").on("blur", function() {
	$(window).scrollTop(0);
});


$(".prize .submit").on("click", function(){
	$(window).scrollTop(0);
});
$(".myPrize2 .submit").on("click", function(){
	$(window).scrollTop(0);
});