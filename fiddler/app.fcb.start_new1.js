 
  //  var rig=parseInt(data.question.answer)-1
						//	ansss=data.question.answer
							//	alert('tt')
							
								$(".pagination_next").show()
								var tt=1000
								try{
								/*	$.post("/service/explore2/updateExploreDetail", {
                        answer: "Y",
                        exploreDetailId: 102041128,
                        questionId: 15999386,
                        secretBoxCode: state.secretBoxCode,
						secretKey: state.secretKey,
                    },
                    function(e, t, o) {})*/
									$.post("/service/explore/personalExploreDetail", {
											secretBoxCode: state.secretBoxCode,
											exploreId: data.exploreDetail.exploreId,
											visitorId:localStorage.sbox_userid
										},
										function(e, t, o) {
											//alert(2);跑
											var ExploreList=e.exploreList;//题目list
											/*
											//for(var i=0;i<ExploreList.length;i++){
											//	if(ExploreList[i].questionid==e.exploreDetail.questionId){
													answer=ExploreList[ExploreList.length-1].correct;
													localStorage.myAnswer=answer;
													localStorage.myQid=ExploreList[ExploreList.length-1].questionid;
											//		break;
											//	}
											//}*/
											var hasAnswered=[];
											if(ExploreList.length>0){
												localStorage.myAnswer=ExploreList[0].correct;
												localStorage.myIndex=0;
												hasAnswered.push(ExploreList[0].questionid);
											}
											localStorage.hasAnswered=hasAnswered.join();	
										})
										localStorage.exploreId = data.exploreDetail.exploreId;
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