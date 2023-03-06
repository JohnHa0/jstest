var index1=parseInt(prompt("xxx","500"))
function Ship(ctx){
	gameMonitor.im.loadImage(['static/img/player.png']);
	this.width = 150;
	this.height = 150;
	this.left = gameMonitor.w/2 - this.width/2;
	this.top = gameMonitor.h - (50 + this.height);
	this.player = gameMonitor.im.createImage('static/img/player.png');

	this.paint = function(){
		ctx.drawImage(this.player, this.left, this.top, this.width, this.height);
	}

	this.setPosition = function(event){
		if(gameMonitor.isMobile()){
			var tarL = event.changedTouches[0].clientX;
			// var tarT = event.changedTouches[0].clientY;
		}
		else{
			var tarL = event.offsetX;
			// var tarT = event.offsetY;
		}
		this.left = tarL - this.width/2 - 16;
		// this.top = tarT - this.height/2;
		if(this.left<0){
			this.left = 0;
		}
		if(this.left>640-this.width){
			this.left = 640-this.width;
		}
		// if(this.top<0){
		// 	this.top = 0;
		// }
		// if(this.top>gameMonitor.h - this.height){
		// 	this.top = gameMonitor.h - this.height;
		// }
		this.paint();
	}

	this.controll = function(){
		var _this = this;
		var stage = $('#gamepanel');
		var currentX = this.left,
			currentY = this.top,
			move = false;
		stage.on(gameMonitor.eventType.start, function(event){
			_this.setPosition(event);
			move = true;
		}).on(gameMonitor.eventType.end, function(){
			move = false;
		}).on(gameMonitor.eventType.move, function(event){
			event.preventDefault();
			if(move){
				_this.setPosition(event);	
			}
			
		});
	}

	this.eat = function(foodlist){
		for(var i=foodlist.length-1; i>=0; i--){
			var f = foodlist[i];
			if(f){
				var l1 = this.top+this.height/2 - (f.top+f.height/2);
				var l2 = this.left+this.width/2 - (f.left+f.width/2);
				var l3 = Math.sqrt(l1*l1 + l2*l2);
				if(l3<=this.height/2 + f.height/2){
					foodlist[f.id] = null;
					switch (f.type){
						case 1:
							var score = 5;
							break;
						case 2:
							var score = 4;
							break;
						case 3:
							var score = 3;
							break;
						case 4:
							var score = 2;
							break;
						case 5:
							var score = 1;
							break;
						case 6:
							var score = 1;
							break;
						case 7:
							var score = 1;
							break;
						case 8:
							var score = -10;
							break;
						default:
							var score = -5;
							break;
					}

					gameMonitor.score = gameMonitor.score + score;
					if ( gameMonitor.score <=0 ) gameMonitor.score=0;
					$('#score').text(gameMonitor.score);
					$('.heart').removeClass('hearthot').addClass('hearthot');
					setTimeout(function() {
						$('.heart').removeClass('hearthot')
					}, 200);

				}
			}
			
		}
		if ( gameMonitor.timer <= 0 ){
			$('#timer').text(0);
			gameMonitor.stop();
			gameMonitor.getScore();
		}
	}
}

function Food(type, left, id){
	this.speedUpTime = 250;
	this.id = id;
	this.type = type;
	this.width = 100;
	this.height = 100;
	this.left = left;
	this.top = -100;
	this.speed = 0.04 * Math.pow(1.2, Math.floor(gameMonitor.time/this.speedUpTime));
	this.loop = 0;

	switch ( this.type ){
		case 1:
			var p = 'static/img/1.png';
			break;
		case 2:
			var p = 'static/img/2.png';
			break;
		case 3:
			var p = 'static/img/3.png';
			break;
		case 4:
			var p = 'static/img/4.png';
			break;
		case 5:
			var p = 'static/img/5.png';
			break;
		case 6:
			var p = 'static/img/6.png';
			break;
		case 7:
			var p = 'static/img/7.png';
			break;
		case 8:
			var p = 'static/img/8.png';
			break;
		default:
			var p = 'static/img/10.png';
			break;
	}
	this.pic = gameMonitor.im.createImage(p);
}
Food.prototype.paint = function(ctx){
	ctx.drawImage(this.pic, this.left, this.top, this.width, this.height);
}
Food.prototype.move = function(ctx){
	if(gameMonitor.time % this.speedUpTime == 0){
		this.speed *= 1.2;
	}
	this.top += ++this.loop * this.speed;
	if(this.top>gameMonitor.h){
	 	gameMonitor.foodList[this.id] = null;
	}
	else{
		this.paint(ctx);
	}
}


function ImageMonitor(){
	var imgArray = [];
	return {
		createImage : function(src){
			return typeof imgArray[src] != 'undefined' ? imgArray[src] : (imgArray[src] = new Image(), imgArray[src].src = src, imgArray[src])
		},
		loadImage : function(arr, callback){
			for(var i=0,l=arr.length; i<l; i++){
				var img = arr[i];
				imgArray[img] = new Image();
				imgArray[img].onload = function(){
					if(i==l-1 && typeof callback=='function'){
						callback();
					}
				}
				imgArray[img].src = img
			}
		}
	}
}


var gameMonitor = {
	w : 640,
	h : 1230,
	bgWidth : 640,
	bgHeight : 1230,
	time : 0,
	timmer : null,
	timer: 60,
	bgSpeed : 0,
	bgloop : 0,
	score : 0,
	im : new ImageMonitor(),
	foodList : [],
	bgDistance : 0,//背景位置
	eventType : {
		start : 'touchstart',
		move : 'touchmove',
		end : 'touchend'
	},
	init : function(){
		var _this = this;
		var canvas = document.getElementById('stage');
		var ctx = canvas.getContext('2d');

		//绘制背景
		var bg = new Image();
		_this.bg = bg;
		bg.onload = function(){
          	ctx.drawImage(bg, 0, 0, _this.bgWidth, _this.bgHeight);
		}
		bg.src = 'static/img/bg.png';

		_this.initListener(ctx);
	},
	start:function(){
			init();
			var canvas = document.getElementById('stage');
			var ctx = canvas.getContext('2d');
			_this.ship = new Ship(ctx);
      		_this.ship.controll();
      		_this.reset();
			_this.run(ctx);
		},
	initListener : function(ctx){
		var _this = this;
		var body = $(document.body);
		$(document).on(gameMonitor.eventType.move, function(event){
			event.preventDefault();
		});
		body.on(gameMonitor.eventType.start, '.again-btn, .playagain', function(){
			init();
			var canvas = document.getElementById('stage');
			var ctx = canvas.getContext('2d');
			_this.ship = new Ship(ctx);
      		_this.ship.controll();
      		_this.reset();
			_this.run(ctx);
		});

		body.on(gameMonitor.eventType.start, '#guidePanel', function(){
			$(this).hide();
			_this.ship = new Ship(ctx);
			_this.ship.paint();
      		_this.ship.controll();
			gameMonitor.run(ctx);

			setInterval(function (){
				_this.timer = _this.timer -1;
				if ( _this.timer >= 0 ){
					$('#timer').text(_this.timer);
				}
			},1000);
		});


	},
	rollBg : function(ctx){
		ctx.drawImage(this.bg, 0, this.bgDistance, this.bgWidth, this.bgHeight);
	},
	run : function(ctx){
		var _this = gameMonitor;
		ctx.clearRect(0, 0, _this.bgWidth, _this.bgHeight);
		_this.rollBg(ctx);

		//绘制飞船
		_this.ship.paint();
		_this.ship.eat(_this.foodList);


		//产生月饼
		_this.genorateFood();

		//绘制月饼
		for(i=_this.foodList.length-1; i>=0; i--){
			var f = _this.foodList[i];
			if(f){
				// f.paint(ctx);
				f.move(ctx);
			}
		}
		_this.timmer = setTimeout(function(){
			gameMonitor.run(ctx);
		}, Math.round(1000/60));
		_this.time++;
	},
	stop : function(){
		var _this = this
		$('#stage').off(gameMonitor.eventType.start + ' ' +gameMonitor.eventType.move);
		setTimeout(function(){
			clearTimeout(_this.timmer);
		}, 0);

	},
	genorateFood : function(){
		var genRate = 30; //产生月饼的频率
		var random = Math.random();
		if( random*genRate > genRate-1){
			var left = Math.random()*(this.w - 100);
			var type = Math.floor(left)%9;
			var id = this.foodList.length;
			var f = new Food(type, left, id);
			this.foodList.push(f);
		}
	},
	reset : function(){
		this.foodList = [];
		this.bgloop = 0;
		this.score = 0;
		this.timmer = null;
		this.time = 0;
		this.timer = 60;
		$('#timer').text(this.timer);
		$('#score').text(this.score);
	},
	getScore : function(){
		$(".page3").hide();
		$(".page4").show();
		$(".score-box").empty();
		var first=0;
	//	alert('dddd')//------------
  $.ajax({
												type: "post",
												url: 'https://wework.vi1208.com/h520221222/rank',
													async :false,
													dataType:'json',
												success: function(r) {
													first=r[4].score+1*parseInt(Math.random()*3)+1
												}
  });
  this.score=198// +parseInt(Math.random()*50   )+1
		$.ajax({
			type: "post",
			url: "/h520221222/score",
			data: { score:this.score},
			dataType: "json",
			success: function (e) {
			}
		});
		setTimeout(function(){
			
		},3000)
		if ( this.score < 60 ){
			$(".draw-btn").hide();
			$(".share-btn").css({ right:"calc((100% - 296px)/2)" })
		}else{
			$(".draw-btn").show();
			$(".share-btn").css({ right:"0px" });
		}
		var scoreArr =  this.score.toString().split("");
		var html = "";
		for (var i=0;i<scoreArr.length;i++){
			html += "<img src='./images/p4/num/"+ scoreArr[i] +".png'>"
		}
		$(".score-box").append(html);

	},
	isMobile : function(){
		var sUserAgent= navigator.userAgent.toLowerCase(),
		bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
		bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
		bIsMidp= sUserAgent.match(/midp/i) == "midp",
		bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
		bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
		bIsAndroid= sUserAgent.match(/android/i) == "android",
		bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
		bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile",
		bIsWebview = sUserAgent.match(/webview/i) == "webview";
		return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
     }
}
if(!gameMonitor.isMobile()){
	gameMonitor.eventType.start = 'mousedown';
	gameMonitor.eventType.move = 'mousemove';
	gameMonitor.eventType.end = 'mouseup';
}

gameMonitor.init();
