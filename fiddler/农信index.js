var self;
var statusInput = true;
var verification_code_sign = '';
var sign_canuse = false;
var hour,minute,second;//时 分 秒
hour=minute=second=0;//初始化
var millisecond=0;//毫秒
var int;
handleFontSize();
function handleFontSize(){
	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
		handleFontSize();
	} else {
		if (document.addEventListener) {
			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
		} else if (document.attachEvent) {
			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
	}
	function handleFontSize() {
		// 设置网页字体为默认大小
		WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
		// 重写设置网页字体大小的事件
		WeixinJSBridge.on('menu:setfont', function() {
			WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
		});
	}
}
(function(){
	function reset()//重置
	{
		window.clearInterval(int);
		millisecond=hour=minute=second=0;
		self.game_time='00'+':'+'00'+':'+'00';
	}

	function start()//开始
	{
		int=setInterval(timer,50);
	}

	function timer()//计时
	{
		millisecond=millisecond+50;
		if(millisecond>=1000)
		{
			millisecond=0;
			second=second+1;
		}
		if(second>=60)
		{
			second=0;
			minute=minute+1;
		}
		var t1,t2,t3;
		if(String(minute).length<=1){
			t1='0'+minute;
		}else{
			t1=minute;
		}
		if(String(second).length<=1){
			t2='0'+second;
		}else{
			t2=second;
		}
		if(String(millisecond).length<=2){
			t3='000';
		}else{
			t3=millisecond;
		}
		self.game_time=t1+':'+t2+':'+t3;
	}

	function stop()//暂停
	{
		window.clearInterval(int);
	}

	window.timeObj={
		reset:reset,
		timer:timer,
		stop:stop,
		start:start,
	}
})()

var confVue = new Vue({
	el: '.wrap',
	data: {
		list:[],
		loginData:{
			name:'',
			phone:'',
			company:'',
		},
		// rules:{
		// 	userName: [
		// 		{
		// 			required: true,
		// 			message: "请输入联系人姓名",
		// 			trigger: ["blur", "change"]
		// 		},
		// 		{
		// 			min: 1,
		// 			max: 30,
		// 			message: "联系人姓名长度在 1 到 30 位 ",
		// 			trigger: ["blur", "change"]
		// 		}
		// 	],
		// 	phone: [
		// 		{
		// 			required: true,
		// 			message: "手机号不能为空",
		// 			trigger: ["blur", "change"]
		// 		},
		// 		{
		// 			required: true,
		// 			pattern: /^(((13[0-9]{1})|(14[01356789]{1})|(15[012356789]{1})|(16[2567]{1})|(17[012345678]{1})|(18[0-9]{1})|(19[01356789]{1}))+\d{8})$/,
		// 			message: "手机号输入错误",
		// 			trigger: ["blur", "change"]
		// 		}
		// 	],
		// 	unit: [
		// 		{
		// 			required: true,
		// 			message: "请输入单位内容",
		// 			trigger: ["blur", "change"]
		// 		},
		// 		{
		// 			min: 1,
		// 			max: 30,
		// 			message: "单位内容长度在 1 到 50 位",
		// 			trigger: ["blur", "change"]
		// 		}
		// 	],
		// },
		rabRankIs:true,
		loginIsShow:false,
		tipsText:'手机号错误<br>请输入正确手机号码',
		tipsIsShow:false,
		startIsTime:false,
		ruleIsShow:false,
		endIsTime:false,
		winIsTips:false,
		winIsForm:false,
		userIsAdd:false,
		rankArr:[
			// {
			// 	num:1,
			// 	img:'images/rankUserImg.png',
			// 	name:'123123123',
			// 	allNum:12,
			// 	allTime:'00:00:000'
			// },
			// {
			// 	num:2,
			// 	img:'images/rankUserImg.png',
			// 	name:'123123123',
			// 	allNum:12,
			// 	allTime:'00:00:000'
			// },
			// {
			// 	num:3,
			// 	img:'images/rankUserImg.png',
			// 	name:'123123123',
			// 	allNum:12,
			// 	allTime:'00:00:000'
			// },
			// {
			// 	num:4,
			// 	img:'images/rankUserImg.png',
			// 	name:'123123123',
			// 	allNum:12,
			// 	allTime:'00:00:000'
			// },
			// {
			// 	num:5,
			// 	img:'images/rankUserImg.png',
			// 	name:'123123123',
			// 	allNum:12,
			// 	allTime:'00:00:000'
			// },
			// {
			// 	num:6,
			// 	img:'images/rankUserImg.png',
			// 	name:'123123123',
			// 	allNum:12,
			// 	allTime:'00:00:000'
			// },
		],
		glUrl:'https://tb.mocentre.cn',
		// glUrl:'https://inc-d4.mocentre.cn',
		keymark:'',
		token:'',
		confData:{
			user_info:'',
		},
		game_time:'00:00:00',
		user_info:{},
		quest_list:[
			{
				answerArr:[],
				right_answer:''
			}
		],
		timeIsText:'',
		timeIsShow:true,
		indexShow:false,
		quest_list_is:false,
		resultNum:'',
		answerClickIndex:'-1',
		answerAllIndex:0,
		answerListArr:[],
		answerLetter:['A','B','C','D'],
		confirmIs:false,
		nextIsTopic:false,
		quest_list_right: {},
		oneIsLogin:false,
		reqAllScore:0,
		subScoreObj:{},
		logInfo:[],
		personelInfoObj:{},
		personelInfoArr:[],
		tempScore:0,
		timeOverIs:true,
		code_table:{},
		log:{
			num1:0,
			num2:0,
			num3:0,
		},
		hotIsShow:false,
		companyIsDis:0,
	},
	created: function(){
		self=this;
	},
	mounted: function () {
		if(getURLParam('keymark')!=null){
			self.keymark=getURLParam('keymark');
		}
		if(getURLParam('token')!=null){
			self.token=getURLParam('token');
		}else{
			layer.open({type: 2});
		}
		self.wxShareFn();
	},
	methods: {
		wxShareFn:function(){
			wxShareFn();
			var share={
				title: "农信银支付结算及反洗钱知识竞赛",
				url: location.href.split('?')[0]+'?keymark='+self.keymark,
				desc: "您的好友邀请您一起参加农信银支付结算及反洗钱知识竞赛",
				imgUrl: "https://static.mocentre.cn/staticflie/rcb_answer/images/share.png"
			}
			function wxShareFn(){
				$.ajax({
					url: 'https://api.mocentre.cn/Api/Wxsdk/sign',
					type: 'post',
					data:{
						url: location.href.split('#')[0],
						is_json :1
					},
					success: function(res) {
						wx.config({
							debug: false, // 是否开启调试模式
							appId: res.data.appId, //appid
							timestamp:res.data.timestamp, // 时间戳
							nonceStr:res.data.nonceStr, // 随机字符串
							signature:res.data.signature, // 签名
							jsApiList: [
								'onMenuShareAppMessage',
								'onMenuShareTimeline',
							]
						});

						wx.ready(function() {
							wx.checkJsApi({
								jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'],
								success:function(res){
									// alert(res.checkResult.chooseImage);
								}
							});
							//var myurl = location.href.split('#')[0];
							//分享给朋友
							// self.baseData.data.title
							wx.onMenuShareAppMessage({
								title : share.title, // 分享标题
								desc : share.desc, // 分享描述
								link : share.url, // 分享链接
								imgUrl : share.imgUrl, // 分享图标
								type : 'link', // 分享类型,music、video或link，不填默认为link
								success : function() {
									// 用户确认分享后执行的回调函数
								},
								cancel : function() {
									// 用户取消分享后执行的回调函数
								}
							});
							//data.title
							wx.onMenuShareTimeline({
								title : share.title, // 分享标题
								link : share.url, // 分享链接
								imgUrl : share.imgUrl, // 分享图标
								success : function() {
									// 用户确认分享后执行的回调函数
								},
								cancel : function() {
									// 用户取消分享后执行的回调函数
								}
							});
						});

						wx.error(function(res) {
							console.log(res);
						});
					},
					error: function(res) {
						console.log(res);
					}
				});
			}
		},
		audioFun:function(){
			var bgMusic = $('.indexAudio').get(0);
			var btnMusic = $('.music_btn');

			if(sessionStorage.getItem('open')=='true'){
				bgMusic.play();
				document.addEventListener("WeixinJSBridgeReady", function () {
					bgMusic.play();
				}, false);
				setTimeout(function(){
					bgMusic.play();
					document.addEventListener("WeixinJSBridgeReady", function () {
						bgMusic.play();
					}, false);
				},100)
				$('.music_btn').addClass('play');
			}
			var stauts=false
			// $('body').click(function(){
			// 	if(stauts){
			// 		return;
			// 	}
			// 	stauts=true;
			//     bgMusic.play();
			// });

			btnMusic.click(function () {
				console.log(bgMusic.paused,bgMusic,123);
				if (bgMusic.paused) {
					bgMusic.play();
					document.addEventListener("WeixinJSBridgeReady", function () {
						bgMusic.play();
					}, false);
					$(this).addClass('play');
					sessionStorage.setItem('open','true');
					// if(window.location.pathname.indexOf('game')>-1){
					//
					// }
					sessionStorage.setItem('gameOpen','true');
				} else {
					bgMusic.pause();
					$(this).removeClass('play');
					sessionStorage.setItem('open','false');
					// if(window.location.pathname.indexOf('game')>-1){
					//
					// }
					sessionStorage.setItem('gameOpen','false');
				}
				console.log(sessionStorage.getItem('open')=='true',999);
			});
		},
		userEdit:function (){
			self.userIsAdd=true;
			self.loginData.name=self.personelInfoObj.name;
			self.loginData.phone=self.personelInfoObj.complete_phone;
			self.loginData.company=self.personelInfoObj.company;
		},
		personelInfoFun:function (){
			var param={
				keymark:self.keymark,
				token:self.token,
				callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
			};
			layer.open({type: 2});
			self.httpAjax(self.glUrl+'/Wap/RcbQuestion/personelInfo',"get",param,function(d){
				console.log(d);
				layer.closeAll();
				if(d.code==200) {
					self.personelInfoObj=d.data;
					self.personelInfoArr=d.data.prizeInfo;
				}
			},function(d){
				console.log(d);
				layer.closeAll();
				// self.hotIsShow=true;
			});
		},
		myResultsFun:function (){
			var param={
				keymark:self.keymark,
				token:self.token,
				callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
			};
			layer.open({type: 2});
			self.httpAjax(self.glUrl+'/Wap/RcbQuestion/myRankList',"get",param,function(d){
				console.log(d);
				layer.closeAll();
				if(d.code==200) {
					self.user_info=d.data.userInfo;
					self.logInfo=d.data.logInfo;
				}
			},function(d){
				console.log(d);
				layer.closeAll();
				// self.hotIsShow=true;
			});
		},
		getRankListFun:function (){
			var param={
				keymark:self.keymark,
				token:self.token,
				tab:self.rabRankIs?'1':'2',
				callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
			};
			layer.open({type: 2});
			self.httpAjax(self.glUrl+'/Wap/RcbQuestion/getRankList',"get",param,function(d){
				console.log(d);
				layer.closeAll();
				if(d.code==200) {
					console.log(d.data.rankList,12391);
					self.rankArr=d.data.rankList;


					if(self.rankArr!='null'){
						self.rankArr=JSON.parse(self.rankArr)
						self.rankArr.forEach(function(item,index){
							item.nickname=Base64.decode(item.nickname);
						})
					}else{
						self.rankArr=[];
					}




					// var tempList=[];
					// for (item in self.rankArr){
					// 	console.log(item);
					// 	tempList.push(item);
					// }
					// var tempArr=[];
					// tempList.forEach(function(item,index){
					// 	tempArr.push({
					// 		id:tempList[index],
					// 		score:self.rankArr[tempList[index]].score,
					// 		score_time:self.rankArr[tempList[index]].score_time,
					// 		headimg:self.rankArr[tempList[index]].headimg,
					// 		nickname:self.rankArr[tempList[index]].nickname,
					// 	});
					// })
					// self.rankArr=tempArr;
					self.user_info=d.data.userInfo;
				}
			},function(d){
				console.log(d);
				layer.closeAll();
				// self.hotIsShow=true;
			});
		},
		againClick:function (){
			if(self.subScoreObj.game_num<=0){
				// window.location.href=window.location.origin+'/staticflie/rcb_answer/index.html?keymark='+self.keymark+'&token='+self.token;
				window.location.href='./index.html?keymark='+self.keymark+'&token='+self.token;
				return;
			}else{
				self.user_info.all_score=0;
				self.tempScore=0;
				self.answerClickIndex='-1';
				self.answerAllIndex='0';
				self.answerListArr=[];
				self.confirmIs=false;
				self.nextIsTopic=false;
				self.quest_list_right= {};
				self.oneIsLogin=false;
				self.reqAllScore=0;
				self.subScoreObj= {};
				self.resultNum='';
				self.quest_list_is=false;
				self.indexShow=false;
				self.quest_list=[
					{
						answerArr:[],
						right_answer:''
					}
				];
				self.user_info= {};
				self.confData= {};
				self.game_time='00:00:00';
				self.winIsTips=false;
				self.gameDataFun();
			}
		},
		indexGo:function (){
			// window.location.href=window.location.origin+'/staticflie/rcb_answer/index.html?keymark='+self.keymark+'&token='+self.token;

			window.location.href='./index.html?keymark='+self.keymark+'&token='+self.token;
		},
		upInfoFun:function (type){
			if(self.loginData.phone==''){
				self.tipsIndexFun('手机号不能为空');
				return;
			}
			var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if (!myreg.test(self.loginData.phone)) {
				self.tipsIndexFun('手机号错误');
				return;
			}

			// if(self.verifyStr()){
			// 	return;
			// }
			var param={
				keymark:self.keymark,
				token:self.token,
				phone:self.loginData.phone.trim(),
				name: self.loginData.name.trim(),
				company: self.loginData.company.trim(),
				callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
			};
			// console.log('签名使用了')
			self.httpAjax(self.glUrl+'/Wap/RcbQuestion/upInfo',"get",param,function(d){
				console.log(d,9999);
				layer.closeAll();
				if(d.code==200) {
					if(type==1){
						self.personelInfoFun();
						self.userIsAdd=false;
					}else{
						setTimeout(function(){
							self.submitBtn(2);
						},100)
					}
				}else{
					self.tipsFun(d.msg);
				}
			},function(d){
				console.log(d);
				layer.closeAll();
				// self.hotIsShow=true;
			});
		},
		confirmFun:function (){//---
			setTimeout(function(){
				$(".nextBtn").click();

			},200)
			//alert("confirmFun")
			/*Array.from($('.game-options')).forEach(function(item,index){
				//var ans=self.code_table[self.quest_list[self.answerAllIndex].right_answer];
				//alert($(item).html())
				if($(item).html().indexOf('---')>-1){
					$(item).click();

				}
			});*/
			// $('.game-options').click();
			if(self.quest_list.length<=self.answerAllIndex){
				// console.log('完成');
				self.commitResults();
				return;
			}
			if(!self.confirmIs){
				return;
			}
			var indexList=0;
			self.answerListArr.forEach(function (item,index){
				if(item=='true'){
					indexList=index;
				}
			})

			Array.from($('.game-options')).forEach(function(item,index){
				// console.log($(item).find('p')[0],123);
				//
				// console.log(item.getAttribute('data-ustatus'),87666);

				if(item.getAttribute('data-ustatus')=='true'){
					$(item).find('p').css({'opacity':1})

				}
			});
			setTimeout(function (){
				self.code_table[self.quest_list[self.answerAllIndex].right_answer].replace(/，/ig,',').replace(/\s+/g,'').split(',').forEach(function(item,index){
					// console.log(item,self.answerLetter.indexOf(item))
					if(item,self.answerLetter.indexOf(item)>-1){
						// console.log(item,self.answerLetter.indexOf(item),$('.game-options').eq(self.answerLetter.indexOf(item)))
						$('.game-options').eq(self.answerLetter.indexOf(item)).find('p').css({'opacity':1})

					}
				})

			},10)

			// console.log(indexList,999999);

			if(self.quest_list[self.answerAllIndex].ques_type==2){
				//多选题
				var answerNums=[];
				self.answerListArr.forEach(function (item,index){
					if(item=='true'){
						answerNums.push(index)
					}
				});
				// console.log(answerNums,123123123);
				var tempArr=[];
				answerNums.forEach(function (itemSub,indexSub){
					tempArr.push(self.answerLetter[itemSub]);
				});

				// if(self.quest_list[self.answerAllIndex].right_answer.replace(/，/ig,',').replace(/\s+/g,'').split(',').length==tempArr.length){
				//
				// }

				var nums1=0;
				var anwerRight=self.code_table[self.quest_list[self.answerAllIndex].right_answer].replace(/，/ig,',').replace(/\s+/g,'').split(',');

				//接口给的正确答案数组
				anwerRight.forEach((item,index)=>{
					//用户选择答案数组
					tempArr.forEach((items,indexs)=>{
						if(item.indexOf(items)>=0){
							nums1++;  // 正确答案  跟 用户选择的答案， 俩个数组匹配出来的
						}
					})
				});


				if(tempArr.length>anwerRight.length){
					// self.nextIsTopic=true;
					self.nextIsTopicFun();
				}

				// console.log(tempArr.length<=anwerRight.length&&answerNums.length>=nums1);
				// console.log(tempArr.length,anwerRight.length,answerNums.length,nums1);
				// if(tempArr.length<=anwerRight.length&&answerNums.length<=nums1){
				// 	var all_score=0;
				// 	if(anwerRight.length==1){
				// 		if(nums1==1){
				// 			all_score=8;
				// 		}
				// 	}else if(anwerRight.length==2){
				// 		if(nums1==1){
				// 			all_score=2;
				// 		}else if(nums1==2){
				// 			all_score=8;
				// 		}
				// 	}else if(anwerRight.length==3){
				// 		if(nums1==tempArr.length){
				// 			if(nums1==1){
				// 				all_score=2;
				// 			}else if(nums1==2){
				// 				all_score=4;
				// 			}else if(nums1==3){
				// 				all_score=8;
				// 			}
				// 		}
				// 	}else if(anwerRight.length==4){
				// 		if(nums1==tempArr.length){
				// 			if(nums1==1){
				// 				all_score=2;
				// 			}else if(nums1==2){
				// 				all_score=4;
				// 			}else if(nums1==3){
				// 				all_score=6;
				// 			}else if(nums1==4){
				// 				all_score=8;
				// 			}
				// 		}
				// 	}

					if(tempArr.length<=anwerRight.length&&answerNums.length<=nums1){
						var all_score=0;
						if(anwerRight.length==1){
							if(nums1==1){
								all_score=self.quest_list[self.answerAllIndex].get_grade;
							}
						}else if(anwerRight.length==2){
							if(nums1==1){
								all_score=nums1*2;
							}else if(nums1==2){
								all_score=self.quest_list[self.answerAllIndex].get_grade;
							}
						}else if(anwerRight.length==3){
							if(nums1==tempArr.length){
								if(nums1==1){
									all_score=nums1*2;
								}else if(nums1==2){
									all_score=nums1*2;
								}else if(nums1==3){
									all_score=self.quest_list[self.answerAllIndex].get_grade;
								}
							}
						}else if(anwerRight.length==4){
							if(nums1==tempArr.length){
								if(nums1==1){
									all_score=nums1*2;
								}else if(nums1==2){
									all_score=nums1*2;
								}else if(nums1==3){
									all_score=nums1*2;
								}else if(nums1==4){
									all_score=self.quest_list[self.answerAllIndex].get_grade;
								}
							}
						}
					self.scoreFun(2,all_score);
					self.nextIsTopicFun();
					// self.nextIsTopic=true;
				}else{
					self.nextIsTopicFun();
					// self.nextIsTopic=true;
				}
				// self.quest_list_right.push({
				// 	id:self.quest_list[self.answerAllIndex].id,
				// 	answer:tempArr.join(',')
				// })

				self.quest_list_right[self.quest_list[self.answerAllIndex].id]=tempArr.join(',');
			}else{
				//单选题
				if(self.code_table[self.quest_list[self.answerAllIndex].right_answer].replace(/\s+/g,'')==self.answerLetter[indexList]){
					console.log('回答正确');
					self.scoreFun(1);
					// self.nextIsTopic=true;
					self.nextIsTopicFun();
				}else{
					console.log('回答错误');
					// self.nextIsTopic=true;
					self.nextIsTopicFun();
				}

				// console.log(self.answerLetter[indexList],123);
				// self.quest_list_right.push({
				// 	id:self.quest_list[self.answerAllIndex].id,
				// 	answer:self.answerLetter[indexList]
				// })
				self.quest_list_right[self.quest_list[self.answerAllIndex].id]=self.answerLetter[indexList];
			}
			
			// console.log(self.reqAllScore);
			// console.log(self.quest_list[self.answerAllIndex].right_answer,self.answerLetter[indexList],123);
		},
		scoreFun:function (type,num){
			if(type==1){
				self.user_info.all_score=Number(self.user_info.all_score)+Number(self.quest_list[self.answerAllIndex].get_grade);
				self.tempScore=Number(self.tempScore)+Number(self.quest_list[self.answerAllIndex].get_grade);
				console.log('加+',self.quest_list[self.answerAllIndex].get_grade);
				console.log('现在分数:'+self.tempScore);
			}else{
				self.user_info.all_score=Number(self.user_info.all_score)+Number(num);
				self.tempScore=Number(self.tempScore)+Number(num);
				console.log('加+',Number(num));
				console.log('现在分数:'+self.tempScore);
			}
		},
		nextIsTopicFun:function (){
			if(self.quest_list.length>=self.answerAllIndex+2){
				self.nextIsTopic=true;
			}else{
				self.commitResults();
			}
		},
		commitResults:function (){
			self.confirmIs=false;
			timeObj.reset();
			if(self.oneIsLogin){
				self.winIsForm=true;
			}else{
				setTimeout(function(){
					self.submitBtn(2);
				},100)
			}
			console.log('完成');
		},
		nextTopicFun:function (){
			//alert("nextTopicFun")
			self.answerAllIndex++;
			self.answerListArr=[];
			self.answerClickIndex=-1;
			self.confirmIs=false;
			self.nextIsTopic=false;
			setTimeout(function(){
				
				Array.from($('.game-options')).forEach(function(item,index){
				//var ans=self.code_table[self.quest_list[self.answerAllIndex].right_answer];
				
				if($(item).html().indexOf('-----')>-1){//---
					//alert($(item).html())
					//$(item).click();

				}
				});
			},1000)
		},
		topicFun:function (){
			self.tipsFun('请选择答案');
		},
		selectItem:function (event,index,item){
			if(self.nextIsTopic){
				return;
			}
			// self.answerClickIndex=indexSub;
			//alert("ddd")
			// console.log(event,index,item,123);
			self.answerListArr=[];
			if(item.ques_type==2){
				if(event.target.parentNode.getAttribute('data-ustatus')=='false'){
					event.target.parentNode.setAttribute('data-ustatus',true);
					event.target.parentNode.className='game-options animated fadeInLeftBig cur'
				}else{
					event.target.parentNode.setAttribute('data-ustatus',false);
					event.target.parentNode.className='game-options animated fadeInLeftBig'
				}
				Array.from($('.game-options')).forEach(function(item,index){
					self.answerListArr.push(item.getAttribute('data-ustatus'))
				})
				// console.log(self.answerListArr,123);
			}else{
				self.answerClickIndex=index;
				Array.from($('.game-options')).forEach(function(item,index){
					item.setAttribute('data-ustatus',false);
				})
				event.target.parentNode.setAttribute('data-ustatus',true);
				Array.from($('.game-options')).forEach(function(item,index){
					self.answerListArr.push(item.getAttribute('data-ustatus'))
				})
			}
			var answerTrue=[];
			self.answerListArr.forEach(function (item,index){
				if(item=='true'){
					answerTrue.push(true);
				}
			});
			//alert(answerTrue.length)
			if(answerTrue.length<=0){
				self.confirmIs=false;
			}else{
				self.confirmIs=true;
			}
		},
		transformTime: function (t){
			//注意：苹果手机不支持以“-”分割的时间形式，故必须进行格式转换。
			var time = t.replace(/-/g,"/")
			return Date.parse(time);
		},
		timeIsFun:function(){
			// var start_time = self.transformTime('2020-09-27 14:27:15');
			//  var end_time = self.transformTime('2020-09-31 14:28:40');
			var start_time = self.transformTime(self.confData.start_time);
			var end_time = self.transformTime(self.confData.end_time);
			var thieTime=Date.parse(new Date());

			if(start_time<thieTime&&end_time>thieTime){
				console.log('活动进行中');
				self.timeIsShow=true;
			}
			if(start_time>thieTime){
				self.timeIsShow=false;
				self.timeIsText='<p>活动未开始</p>\n' +
					'\t\t\t<span>活动时间</span>\n' +
					'\t\t\t<b>'+ '2021年9月22日10:00 - 9月26日17:00'+'</b>';
				console.log('活动未开始');
				self.timeOverIs=false;
			}
			if(end_time<thieTime){
				self.timeIsShow=false;
				self.timeIsShow=false;
				self.timeIsText='<p>活动已结束</p>\n' +
					'\t\t\t<span>活动时间</span>\n' +
					'\t\t\t<b>'+ self.confData.start_time+' - '+self.confData.end_time+'</b>';
				console.log('活动已结束');
			}
		},
		getLoginKey:function (){
			console.log('sign_canuse', sign_canuse)
			if (sign_canuse) {
				 console.log('签名没用,还可使navClick用')
				self.submitBtn(1);
			} else {
				var param={
					keymark:self.keymark,
					token:self.token,
				};
				// console.log('签名使用了')
				self.httpAjax(self.glUrl+'/Wap/RcbQuestion/getLoginKey',"get",param,function(d){
					console.log(d,123);
					layer.closeAll();
					if(d.code==200) {
						console.log(d.data.login_key,'验证码');
						verification_code_sign = d.data.login_key;
						self.submitBtn(1);
					}
				},function(){
					// popup('验证失败');
					setTimeout(function(){
						self.getLoginKey();
					}, 4000)
					// 获取失败重新获取
				},function(d){
					console.log(d);
					layer.closeAll();
					// self.hotIsShow=true;
				});
			}
		},
		start_game_fun:function (){

			if(self.confData.user_info.is_login==1){
				if(self.confData.user_info.game_num==0){
					self.tipsIndexFun('您今天的答题次数已用尽')
				}else{
					localStorage.setItem("opengo", "true");
					window.location.href='./game.html?keymark='+self.keymark+'&token='+self.token;
				}
			}
		},
		gameDataFun:function (){
			var param={
				keymark:self.keymark,
				token:self.token,
				callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
			};
			layer.open({type: 2});
			self.httpAjax(self.glUrl+'/Wap/RcbQuestion/getRandQuestionList',"get",param,function(d){
				console.log(d);
				layer.closeAll();
				if(d.code==200) {

					for(var i=0;i<d.data.quest_list.length;i++){
						right_answer=d.data.quest_list[i].right_answer;
						d.data.quest_list[i].question=d.data.code_table[''+right_answer];
						for(v in d.data.quest_list[i].answer){
							//
							if(d.data.quest_list[i].answer[v+'']!=null){
								//alert(d.data.quest_list[i].answer[v+''].substring(0,1)+" "+right_answer)
								if(d.data.code_table[''+right_answer].indexOf(v)>-1){
								//alert(d.data.quest_list[i].answer[v+''])
								d.data.quest_list[i].answer[v+'']='-----'
								}
							}
							
							//alert(d.data.quest_list[i].answer[v+''])
						}
					}
					//alert( JSON.stringify(d.data.quest_list[0].answer))
					//---------------
					//达人榜  一条鱼-刘成文-133
					//阿混二 刘维维 18052482091
					self.user_info=d.data.user_info;
					self.code_table=d.data.code_table;
					if(d.data.user_info.all_score==0){
						self.oneIsLogin=true;
					}else{
						self.reqAllScore=d.data.user_info.all_score;
					}
					self.user_info.all_score=0;
					self.quest_list=d.data.quest_list;


					self.loginData.name=self.user_info.name;
					self.loginData.phone=self.user_info.complete_phone;
					self.loginData.company=self.user_info.company;

					self.quest_list.forEach(function (item,index){
						if(item.ques_type==1){
							self.log.num1++;
							console.log(item)
						}else if(item.ques_type==2){
							self.log.num2++;
						}else if(item.ques_type==3){
							self.log.num3++;
						}
					})
					// self.quest_list=[{
					// 	"id": "4364",
					// 	"ques_type": "2",
					// 	"get_grade": "8",
					// 	"question": "\u4ee5\u4e0b\u53d1\u751f\u7684\u5927\u989d\u4ea4\u6613\uff0c\u5982\u672a\u53d1\u73b0\u8be5\u4ea4\u6613\u53ef\u7591\u7684\uff0c\u53ef\u4ee5\u4e0d\u62a5\u9001\u53cd\u6d17\u94b1\u76d1\u6d4b\u4e2d\u5fc3\u7684\u662f\uff08   \uff09",
					// 	"answer": {
					// 		"A": "A\u3001\u5b9a\u671f\u5b58\u6b3e\u5230\u671f\u540e\uff0c\u4e0d\u76f4\u63a5\u63d0\u53d6\u6216\u5212\u8f6c\uff0c\u800c\u662f\u672c\u91d1\u6216\u8005\u672c\u91d1\u52a0\u5168\u90e8\u6216\u90e8\u5206\u5229\u606f\u7eed\u5b58\u5165\u5728\u540c\u4e00\u91d1\u878d\u673a\u6784\u5f00\u7acb\u7684\u540c\u4e00\u6237\u540d\u4e0b\u7684\u53e6\u4e00\u5e10\u6237",
					// 		"B": "B\u3001\u81ea\u7136\u4eba\u5b9e\u76d8\u5916\u6c47\u4e70\u5356\u4ea4\u6613\u8fc7\u7a0b\u4e2d\u4e0d\u540c\u5916\u5e01\u5e01\u79cd\u95f4\u7684\u8f6c\u6362",
					// 		"C": "C\u3001\u91d1\u878d\u673a\u6784\u5185\u90e8\u8c03\u62e8\u8d44\u91d1,\u91d1\u878d\u673a\u6784\u5728\u9ec4\u91d1\u4ea4\u6613\u6240\u8fdb\u884c\u7684\u9ec4\u91d1\u4ea4\u6613",
					// 		"D": "D\u3001\u56fd\u9645\u91d1\u878d\u7ec4\u7ec7\u548c\u5916\u56fd\u653f\u5e9c\u8d37\u6b3e\u8f6c\u8d37\u4e1a\u52a1\u9879\u4e0b\u7684\u4ea4\u6613"
					// 	},
					// 	"right_answer": "A\uff0cB\uff0cC\uff0cD"
					// },{
					// 	"id": "4364",
					// 	"ques_type": "2",
					// 	"get_grade": "8",
					// 	"question": "\u4ee5\u4e0b\u53d1\u751f\u7684\u5927\u989d\u4ea4\u6613\uff0c\u5982\u672a\u53d1\u73b0\u8be5\u4ea4\u6613\u53ef\u7591\u7684\uff0c\u53ef\u4ee5\u4e0d\u62a5\u9001\u53cd\u6d17\u94b1\u76d1\u6d4b\u4e2d\u5fc3\u7684\u662f\uff08   \uff09",
					// 	"answer": {
					// 		"A": "A\u3001\u5b9a\u671f\u5b58\u6b3e\u5230\u671f\u540e\uff0c\u4e0d\u76f4\u63a5\u63d0\u53d6\u6216\u5212\u8f6c\uff0c\u800c\u662f\u672c\u91d1\u6216\u8005\u672c\u91d1\u52a0\u5168\u90e8\u6216\u90e8\u5206\u5229\u606f\u7eed\u5b58\u5165\u5728\u540c\u4e00\u91d1\u878d\u673a\u6784\u5f00\u7acb\u7684\u540c\u4e00\u6237\u540d\u4e0b\u7684\u53e6\u4e00\u5e10\u6237",
					// 		"B": "B\u3001\u81ea\u7136\u4eba\u5b9e\u76d8\u5916\u6c47\u4e70\u5356\u4ea4\u6613\u8fc7\u7a0b\u4e2d\u4e0d\u540c\u5916\u5e01\u5e01\u79cd\u95f4\u7684\u8f6c\u6362",
					// 		"C": "C\u3001\u91d1\u878d\u673a\u6784\u5185\u90e8\u8c03\u62e8\u8d44\u91d1,\u91d1\u878d\u673a\u6784\u5728\u9ec4\u91d1\u4ea4\u6613\u6240\u8fdb\u884c\u7684\u9ec4\u91d1\u4ea4\u6613",
					// 		"D": "D\u3001\u56fd\u9645\u91d1\u878d\u7ec4\u7ec7\u548c\u5916\u56fd\u653f\u5e9c\u8d37\u6b3e\u8f6c\u8d37\u4e1a\u52a1\u9879\u4e0b\u7684\u4ea4\u6613"
					// 	},
					// 	"right_answer": "A\uff0cB\uff0cC\uff0cD"
					// }];
					var answerArr=[];
					self.quest_list.forEach(function (item,index){
						for(d in item.answer){
							answerArr.push({
								answerIndex:index,
								answerNum:d,
								answerItem:item.answer[d],
							});
						}
					})
					self.quest_list.forEach(function (item,index){
						item.answerArr=[];
						answerArr.forEach(function (itemSub,indexSub){
							if(index==itemSub.answerIndex){
								item.answerArr.push({
									answerIndex:itemSub.answerIndex,
									answerNum:itemSub.answerNum,
									answerItem:itemSub.answerItem,
								});
							}
						})
					})

					self.quest_list_is=true;
					console.log(self.quest_list,9912);
					timeObj.start()
					console.log(d,'game');
				}
			},function(d){
				console.log(d);
				layer.closeAll();
				// self.hotIsShow=true;
			});
		},
		indexDataFun:function (){
			var param={
				keymark:self.keymark,
				token:self.token,
				callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
			};
			layer.open({type: 2});
			self.httpAjax(self.glUrl+'/Wap/RcbQuestion/getConf',"get",param,function(d){
				console.log(d);
				console.log(self.token,'token');
				layer.closeAll();
				self.indexShow=true;
				if(d.code==200) {
					self.confData=d.data;
					self.timeIsFun();
					if (d.data.user_info.is_login==0) {
						window.location.href=d.data.user_info.auth_url;
					}else if(d.data.user_info.is_login==2){
						self.loginIsShow=true;
					}
					console.log(d, d.data.user_info.is_login,d.data.user_info.auth_url,'confdata');
				}
			},function(d){
				console.log(d);
				layer.closeAll();
				// self.hotIsShow=true;
			});
		},
		winIsFormFun:function (){
			self.winIsForm=false;
		},
		rank_fun:function (){

			window.location.href='./rankList.html'+'?keymark='+self.keymark+'&token='+self.token;
		},
		user_fun:function (){
			window.location.href='./user.html'+'?keymark='+self.keymark+'&token='+self.token;
		},
		my_fun:function (){
			window.location.href='./myResults.html'+'?keymark='+self.keymark+'&token='+self.token;
		},
		index_rule_fun:function (){
			self.ruleIsShow=false;
		},
		index_tips_fun:function (){
			self.tipsIsShow=false;
		},
		verifyStr:function(e){
			var pattern = /[0-9a-z]/i;
			if(pattern.test(self.loginData.company)){
				self.tipsIndexFun('所在单位只支持中文<br>' +
					'跟特殊符号');
				return true;
			}
		},
		tiemFun:function (){
			var nums=0;
			this.gameSelf.timeName = setInterval(function() {
				selfTime.gameSelf.timeApi = --selfTime.gameSelf.timeApi < 0 ? 0 : selfTime.gameSelf.timeApi;
				var ms = Math.floor(selfTime.gameSelf.timeApi / 10).toString();
				if(ms.length <= 1) {
					ms = "0" + ms;
				}
				var hm = Math.floor(selfTime.gameSelf.timeApi % 10).toString();
				if(hm.length <= 1) {
					selfTime.timeSp=setInterval(function(){
						if(selfTime.gameSelf.timeApi == 0) {

							clearInterval(selfTime.timeSp);
							selfTime.gameSelf.timeText.text = '00'+':00';
						}
						nums++;
						if(nums==9){
							nums=0;

						}
					},100)
					hm =  hm+(nums+'');
				}
				if(selfTime.gameSelf.timeApi ==3){
					// mstart.button(selfTime.gameSelf.bg,false);
					self.maskClickFun(false);
				}
				if(selfTime.gameSelf.timeApi == 0) {
					selfTime.gameSelf.isNextGame=false;
					// mstart.button(selfTime.gameSelf.bg,false);
					setTimeout(function(){
						// selfTime.gameSelf.sendData();
						selfTime.gameSelf.nextLvFun();
					},500)
					// selfTime.gameSelf.btnStop();

					clearInterval(selfTime.gameSelf.timeName);
					clearInterval(selfTime.timeSp);
					selfTime.gameSelf.timeText.text = '00'+':00';
				}
				selfTime.gameSelf.timeText.text = ms+':'+hm;
			}, 100);
		},
		verification:function (){
			var rand_data = randomWord(true, 8, 15);
			$('.verification_code_wrap').show();
			$('.verification_code_inner').slideVerify({
				type: 2,		//类型
				vOffset: 5,	//误差量，根据需求自行调整
				vSpace: 5,	//间隔
				imgName: ['images/VerificationCodeImg.jpg'],
				imgSize: {
					width: '300px',
					height: '150px',
				},
				blockSize: {
					width: '40px',
					height: '40px',
				},
				barSize: {
					width: '300px',
					height: '40px',
				},
				ready: function () {
				},
				success: function () {
					console.log(verification_code_sign,'login_key', rand_data,'random_str');
					var param={
						keymark:self.keymark,
						token:self.token,
						phone: self.loginData.phone.trim(),
						name: self.loginData.name.trim(),
						company: self.loginData.company.trim(),
						sign: hex_md5(verification_code_sign + rand_data),
						random_str: rand_data,
						timestamp: timest(),
					}
					console.log(param,123);
					layer.open({type: 2});
					self.httpAjax(self.glUrl+'/Wap/RcbQuestion/registerUser',"post",param,function(d){
						console.log(d,'reg');
						layer.closeAll();
						if(d.code==200) {
							window.location.reload();
						}
					},function(d){
						console.log(d);
						layer.closeAll();
						// self.hotIsShow=true;
					});

					// console.log('验证成功');
					// sign_canuse = false;
				},
				error: function () {
					sign_canuse = true;
					self.tipsIndexFun('验证失败');
				}
			});
		},
		submitBtn:function (type){
			if(type==1){
				// if(self.loginData.name==''){
				// 	self.tipsIndexFun('姓名不能为空');
				// 	return;
				// }
				if(self.loginData.phone==''){
					self.tipsIndexFun('手机号不能为空');
					return;
				}

				var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if (!myreg.test(self.loginData.phone)) {
					self.tipsIndexFun('手机号错误');
					return;
				}

				// if(self.verifyStr()){
				// 	return;
				// }
				// if(self.loginData.company==''){
				// 	self.tipsIndexFun('单位不能为空');
				// 	return;
				// }
				console.log('提交');
				self.verification();
			}else if(type==2){
				var quest_list_right=JSON.stringify(self.quest_list_right);
				self.tempScore=100//----------
				var param={
					keymark:self.keymark,
					token:self.token,
					score:self.tempScore,
					question_number:self.user_info.question_number,
					callback_url:window.location.origin+window.location.pathname+'?keymark='+self.keymark,
					sign: hex_md5(self.token+self.keymark+Base64.encode(encodeURIComponent(JSON.stringify(self.quest_list_right)))+self.user_info.question_number),
					quest_list:Base64.encode(encodeURIComponent(JSON.stringify(self.quest_list_right))),
					//	quest_list:JSON.stringify(self.quest_list_right),
					// quest_list:	{
					// 	2595:'A',
					// 	3035:'A',
					// 	2471:'A',
					// 	2964:'A',
					// 	2589:'A',
					// 	2567:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// 	2595:'A',
					// },
				};

				console.log(self.token,self.keymark,Base64.encode(encodeURIComponent(JSON.stringify(self.quest_list_right))),self.user_info.question_number,'sign没转md5的');
				console.log(param,'提交时候的参数');


				// var param={
				// 	keymark: self.keymark,
				// 	token: self.token,
				// 	score: 57,
				// 	question_number: self.user_info.question_number,
				// 	callback_url: window.location.origin+window.location.pathname+'?keymark='+self.keymark,
				// quest_list: JSON.stringify([{"id":"2656","answer":"A"},{"id":"2540","answer":"B"},{"id":"2715","answer":"A"},{"id":"2619","answer":"B"},{"id":"2856","answer":"B"},{"id":"2995","answer":"B"},{"id":"2628","answer":"B"},{"id":"2896","answer":"B"},{"id":"2618","answer":"B"},{"id":"2593","answer":"B,D"},{"id":"2555","answer":"A"},{"id":"2721","answer":"C"},{"id":"3046","answer":"C"},{"id":"2763","answer":"A"},{"id":"2921","answer":"C"},{"id":"2464","answer":"B"},{"id":"2570","answer":"B"},{"id":"2565","answer":"B,D"},{"id":"3057","answer":"A"}])
				// };
				layer.open({type: 2});
				self.httpAjax(self.glUrl+'/Wap/RcbQuestion/subScore',"get",param,function(d){//----
					console.log(d,456);
					layer.closeAll();
					if(d.code==200) {
						self.subScoreObj=d.data;
						self.winIsForm=false;
						self.winIsTips=true;
						self.game_time=self.subScoreObj.now_score_time
						self.user_info.all_score=self.subScoreObj.now_score

						console.log(d,1115);
					}
				},function(d){
					console.log(d);
					layer.closeAll();
					self.hotIsShow=true;
				});
			}
		},
		tabRankFun:function (type){

			self.rabRankIs=type;
			self.getRankListFun();
			// self.rabRankIs=!self.rabRankIs;
		},
		tipsIndexFun:function (msg){
			self.tipsIsShow=true;
			self.tipsText=msg;
		},
		tipsFun:function(msg){
			layer.open({
				time: 2,
				content: msg,
				yes: function (index) {
					layer.close(index);

				}
			});
		},
		httpAjax:function(url,type,data,callFn,errorFn){
			$.ajax({
				url:url,
				type:type,
				data:data,
					jsonp: "successCallback",
    jsonpCallback: 'jsonpReturn',
				dataType: "jsonp",//jsonp
				success: function (d) {
					if(d.code=='noLogin'){
						setTimeout(function(){
							window.location.href=d.data.login_url;
						},10)
						return false
					}
					// if(d.code==2023){
					// 	self.token='';
					// 	window.location.href=window.location.origin+window.location.pathname+'?keymark='+self.keymark;
					// 	return false
					// }
					callFn(d);
				},
				error: function () {
					errorFn();
				}
			})
		},
	}
});

function getURLParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}


// 获取随机串
function randomWord(randomFlag, min, max) {
	var str = "";
	var range = min;
	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','a', 'b', 'c',
		'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
		'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
		'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	if (randomFlag) {
		range = Math.round(Math.random() * (max - min)) + min;// 任意长度
	}
	for (var i = 0; i < range; i++ ) {
		pos = Math.round(Math.random() * (arr.length - 1));
		str += arr[pos];
	}
	return str;
}

// 获取时间
function timest() {
	var tmp = Date.parse(new Date()).toString();
	tmp = tmp.substr(0, 10);
	return tmp;
}




