
var data=e;
//alert(JSON.stringify(data))
//刘晶 320925198907182023 13814929369  269569205@163.com 一条鱼
//定佑雄 422323195910024516  18205034470 269569205@qq.com lius1510 心想事成
//张祥英 320925195312072526  13812263438 s1399520@qq.com skycityhappy 秋衣
//刘成文 320925194803212517  18452411602  99164989@qq.com -
//陶敏  342625199103210715  13912367484  627268498@qq.com 露
//朱连强 341204197805062215  15052202321 bigbird0@qq.com 大眼睛
//王庭能  522636198810101030  18800561502  337001765@qq.com  白云

//孙远 421124199711106396  15051327017  lovemerling@qq.com  最爱
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  苏苏
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 机器猫
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  月风
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘维维",'memo':"320925198711141510",'timer':tt}),春雨绵绵
//	'phone':"18168867355 ",'name':"沈娅",'memo':"440902197312249645",'timer':tt}),-----代理
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),刘艳 蝶恋花
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}), 亮亮 李霞
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),----好心情 车昌强
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),浩南 刘成彬
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),吴先辉 美食
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),刘恩美 
						//if(Date.parse(new Date())>1522511999000) return;
						
if(data.question!=null){
	//alert('ccc');
					//	var  data = ea2a(e);
				
						 if(data.question.answer.indexOf("/")>0){//---next
							$(".check").show();	
							$(".check").find("button").show();
							}
							var tt=1270+parseInt(Math.random()*100)
								var secretBoxCode=location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0]
								if(secretBoxCode=="5611238530079"){
									tt=1900+parseInt(Math.random()*500)
								}
									if(secretBoxCode=="5651831696042"){
									tt=1550+parseInt(Math.random()*0)
								}
									try{
										$.post("/service/explore/personalExploreDetail", {
											secretBoxCode: n.secretBoxCode,
											exploreId: localStorage.exploreId,
											visitorId:localStorage.sbox_userid
										},
										function(m, t, o) {
											//alert(3); 用
											var ExploreList=m.exploreList;//题目list
										//	alert(localStorage.hasAnswered+"     :")
											var hasAnswered=localStorage.hasAnswered.split(',');
											var answerEd=[];
											for(var k=0;k<ExploreList.length;k++){
												if(!hasAnswered.includes(ExploreList[k].questionid)){
													//不存在
													//alert(ExploreList[k].correct)
													localStorage.myAnswer=ExploreList[k].correct;
													hasAnswered.push(ExploreList[k].questionid);
												}
												answerEd.push(ExploreList[k].questionid);
											}
											localStorage.hasAnswered=answerEd.join();
										})
								} catch (e) { alert(e.name + ": " + e.message); } 
							setTimeout(function(){//----
								//alert($("img").parent().parent().parent().parent().html())
								//	alert($(".choice-content").parent().parent().parent().parent().html())
									//alert($("span").parent().html())
								//$($("section").find(".btn")[rig]).trigger("click")
								//var sel=$("section").find(".btn");
								//var sel=$(".choice-content");
								//		alert($("li").parent().html())
							//	var sel=$(".choice-content").find("span");
								//var sel=$(".page3_A-text").find("span");
									var sel=$(".choice-content").find("span")
									if(sel.size()==0)
										sel=$(".page3_A-text").find("span");
								if(sel.size()==0)
									sel=$("section").find(".btn");
								if(sel.size()==0)
									sel=$(".btn_wrap").find(".btn");
								if(sel.size()==0)
									sel=$(".ivucheckbox").next().next();
								if(sel.size()==0)
									sel=$(".question-choice-text").find("span");
								if(sel.size()==0)
									sel=$(".single-choice-btn");
								if(sel.size()==0)
									sel=$(".choice_btn_wrap");
								if(sel.size()==0)
									sel=$(".choice-ico").next();
						
								if(data.question.pattern==1){
									
								}
							
									if(data.question.answer.indexOf("/")>0){
										
										sel.each(function(i){
											$(this).trigger("click")
											if(i+1==sel.size()){
												setTimeout(function(){
														$('.commit-btn').trigger("click")
													$('.question-commit').trigger("click")
													$('.question-commit').find("img").trigger("click")
															$('.page3_pagination').trigger("click")
																$('.weui-btn').trigger("click")
															$('.submitBtn').trigger("click")
												},100)
										
											}
										});

										return;

								}
								//alert("  xxxx"+sel.size())
								sel.each(function(i){
									$(this).parent().css({"cursor":"pointer"});
										$(this).parent()[0].click()
										 $(this).trigger("click")
											$(this).prev().trigger("click")
											 $(this).parent().trigger("click")
											 $('.question-commit').trigger("click")
															$('.question-commit').find("img").trigger("click")
									if(i+1==sel.size()){
										setTimeout(function(){
										//	alert($(".wholeSubmitBtn").html())
												$('.wholeSubmitBtn').trigger("click")
											//	alert($(".pagination_submit").html())
												$(".pagination_submit").trigger("click")
												$('.commit-btn').trigger("click")
										$('.question-commit').trigger("click")
											$('.question-commit').find("img").trigger("click")
														$('.pagination_next').trigger("click")
														$('.page3_pagination').trigger("click")
														$('.weui-btn').trigger("click")
													$('.weui-btn').trigger("click")
														$('.wholeSubmitBtn').find('img').trigger("click")
										},600)
										
									}
								})
								
							},tt)
}


//刘晶 320925198907182023 13814929369  269569205@163.com 一条鱼
//定佑雄 422323195910024516  18205034470 269569205@qq.com lius1510 心想事成
//张祥英 320925195312072526  13812263438 s1399520@qq.com skycityhappy 秋衣
//刘成文 320925194803212517  18452411602  99164989@qq.com 就是我
//陶敏  342625199103210715  13912367484  627268498@qq.com 露
//朱连强 341204197805062215  15052202321 bigbird0@qq.com 大眼睛
//王庭能  522636198810101030  18800561502  337001765@qq.com  白云

//孙远 421124199711106396  15051327017  lovemerling@qq.com  最爱
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  苏苏
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 机器猫
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  月风
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘维维",'memo':"320925198711141510",'timer':tt}),春雨绵绵
//	'phone':"18168867355 ",'name':"沈娅",'memo':"440902197312249645",'timer':tt}),-----代理
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),刘艳 蝶恋花
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}), 亮亮 李霞
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),----好心情 车昌强
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),浩南 刘成彬
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),吴先辉 美食
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),刘恩美 
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),
//	'phone':"18115768791",'name':"陈栋梁",'memo':"640423198611217746",'timer':tt}),
//老头  杨元 13373659015 外外  谭荣18014246678  杨洋 罗施 18052482091 飞黄 王朝阳 18115768791 米生 钱新18168867355  浩南孙从尧 18013400651 最爱我 李雪18914148845
//杏林 马耀光 18914167267 豪哥 王志新 18168909051  D哥 王乐乐 18915321250 风爷爷 孟秀娟 18012467297 来了 张静静 18961849736  一条鱼   刘晶晶 13814929369
//不离不弃刘改立 18013407603  办事 杨丽英 13815555118 就是我 李商 18915299015 手里的爱 陈栋梁 15852828806  白云 徐清 18205034470  阿混二 刘成 15950348766
// 王之 杨成龙 13812263438  代理 李慧芳 18452411602 浩南 童新雨 13912367484  丽晶 刘荣 13805116569 露姐 
//露姐 沈亚 15052202321
// YY 孙龙 15051327017
//来了 王来玉13962021537
//大眼睛 田亮 13813225967
//一头狮子 蒋元 13770203281
//秋衣 陈明 18800561502
	//setTimeout(function(){$("#ctlNext").trigger("click")},21500)
	//	alert("xx")
