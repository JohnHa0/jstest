$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

    function playAudio_suc(){
      var audio_suc=document.getElementById('music-suc');
      if (audio_suc.paused) {
          audio_suc.play();
      } else {
          audio_suc.pause();
      }
    }

    function playAudio_fail(){
      var audio_fail=document.getElementById('music-fail');
      if (audio_fail.paused) {
          audio_fail.play();
      } else {
          audio_fail.pause();
      }
    }

    var q_index=0,q_len=0,q_clock,q_all=5,token='';

    resetbody();
    //clearStorage();

    //getQuestions();
    //showHome("home_4");
    //init_school();
    //setStorage();
    //showFail();
    //showSuccess();

    function showHome(id){
      $(".home").fadeOut();
      $("#"+id).fadeIn();
    }

    //开始
    $("#img1_3,#img_r").on("click",function(){
      var st=new Date("2023-05-01 00:00:00");
      //var st=new Date("2023-04-26 00:00:00");
      var ed=new Date("2023-06-30 23:59:59");
      var cur=Date.now();
      if(cur<st){
        alert("答题活动尚未开始！");
        return;
      }
      else if(cur>ed){
        alert("答题活动已经结束！");
        return;
      }else{
        layer.closeAll();
        showHome("home_2a");
        // init_school();
        setStorage();
      }
    });

    //再来一次
    $("#img_e,.img_l5_3").on("click",function(){
      layer.closeAll();
      $("#btn_nav").attr("src","images/btn_6.png");
      $("#btn_nav1").attr("src","images/btn_6.png");
      getQuestions();
    });

    //返回
    $(".div4_4 img").on("click",function(){
      layer.closeAll();
      showHome("home_1");
    });

    //积分榜
    // $(".img1_4,.img_l4_2,.img_l5_4").on("click",function(){
    //   getScores();
    //   layer.closeAll();
    //   showHome("home_4");
    // });

    $(".img1_4").on("click",function(){
      layer.open({
        type: 1,
        title: false,
        closeBtn: true,
        area:['90%'],
        shade:0.6,
        content: $(".div1")
      });
    });
    // 小贴士
    $("#btn_xts").on("click",function(){
      var q_cur=$(".q_cont").eq(q_index);
      var note=q_cur.find(".div3_2_4").html();
      $(".flxts").html(note)
      layer.open({
        type: 1,
        title: false,
        closeBtn: true,
        area:['90%'],
        shade:0.6,
        content: $(".div1_02")
      });
    });

    $(".img_l5_2").on("click",function(){
      var fullname=$("#fullname").val().trim();
      var email=$("#email").val().trim();
      var reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
      if(fullname==""||email==""){
        alert("请填写姓名和邮箱！");return;
      }else if(email!=""&&!(reg.test(email))){
        alert("邮箱格式不正确！");return;
      }else{
        localStorage.setItem("fullname",fullname);
        localStorage.setItem("email",email);
        saveInfo();
      }
    });

    $(".div1_3 img").on("click",function(){
      layer.closeAll();
    });

    //弹出提示框
    $("#btn_help").on("click",function(){
      var q_cur=$(".q_cont").eq(q_index);
      var note=q_cur.find(".div3_2_4").html();
      $(".div_l3").html(note);
      layer.open({
        type: 1,
        shadeClose: true,
        title: false,
        closeBtn: true,
        area:['90%'],
        shade:0.6,
        content: $(".div_l3"),
        end:function(){
          $(".div_l3").html("");
          $(".div_l3").hide();
        }
      });
    });
	var abc=0;
    //下一题
    $("#btn_nav").on("click",function(){
      var q_cur=$(".q_cont").eq(q_index);
      var q_next=$(".q_cont").eq(q_index+1);
      var q_cur_id=q_cur.attr("id");
      //var anw_cur=q_cur.find("input:checked").val();
      q_cur.find("label").each(function(){
		if($(this).html().indexOf('----')>-1){
			$(this).trigger('click')
		}
	  })
      var anw_cur = "";
       setTimeout(function(){
		 // if(q_index<=4)
			//	$("#btn_nav").trigger('click')
	  },1000)
      q_cur.find("input:checked").each(function (index, item) {
        anw_cur += $(this).val();
      });
      //console.log(q_cur.find("input:checked").val());
      if(anw_cur==""){
        alert("请选择答案！");
        return;
      }
      else{
        // 新增题目没有小贴士则不显示小贴士按钮判断
      var note=q_next.find(".div3_2_4").html();
      if(note != '' && note != null){
        $("#btn_xts").show();
      }else{
        $("#btn_xts").hide();
      }
       // 检查答案
        var url =
        "https://webapp-ali.ynurl.cn/index.php?nova_p=VThPTmd0WXZmMTUyUzFuNlRZT2dPNERPdGFhODdDRW1MVXYwWkhLL0UzdnVxclVBRThhV0cvaDNEbGNCaUh4VQ@@";
          $.ajax({
            url: url + "&" + new Date().getTime(),
            type: "POST",
            data: { q: q_cur_id, anw: anw_cur },
            dataType: "json",
            success: function (result) {
				abc++;
              if (result.status == 1) {
                var div;
                console.log("fs:" + result.score);
                if (result.score == 1) {
                  q_cur.find("input:checked+Label").addClass("ans_suc");

                  setTimeout(function () {
                    goNext();
					setTimeout(function () {
						if(abc<=4)
							$("#btn_nav").trigger('click')
					}, 500);
                  }, 500);
                } else {
                  q_cur.find("input:checked+Label").addClass("ans_fail");
                  setTimeout(function () {
                    goNext();
                  }, 500);
                }
              } else {
                if (result.msg != "") alert(result.msg);
              }
            },
            error: function (msg) {
              //alert("发生错误！");
            },
          });
      }
    });
    $(".div_l2_1_2 img").on("click",function(){
      goNext1();
    });

    function showFail(type){//0没有答对5题，1答对5题没有中奖
      playAudio_fail();
      if(type == 1){
        layer.open({
          type: 1,
          title: false,
          closeBtn: false,
          area:['100%','100%'],
          shade:0.6,
          content: $(".div_l4")
        });
      }else if(type == 0){
        layer.open({
          type: 1,
          title: false,
          closeBtn: false,
          area:['100%','100%'],
          shade:0.6,
          content: $(".div_l44")
        });
      }
    }

    // 答对5题跳转到抽奖页
  function showSuccess(){
   // playAudio_suc();
   if(times>1)return;
    layer.open({
      type: 1,
      title: false,
      closeBtn: false,
      area:['100%','100%'],
      shade:0.6,
      content: $(".div_l7"),
      end:function(){
        var q_cur=$(".q_cont").eq(q_index);
        var q_next=$(".q_cont").eq(q_index+1);
      }
    });
  }

  //弹出中奖框
  $("#img_choujiang").on("click",function(){
	  alert('开始抽奖')
    choujiang();
  });

    function goNext(){
      layer.closeAll();
      var q_cur=$(".q_cont").eq(q_index);
      var q_next=$(".q_cont").eq(q_index+1);

      if(q_index==q_len-2){
        //设置最后一页为提交按钮
        $("#btn_nav").attr("src","images/btn_8.png");
        $("#btn_nav1").attr("src","images/btn_8.png");
      }

      var ans1=check(q_cur);

      if(ans1==''){
        goNext1();
      }
      else{
        $(".div_l2_1_1").text("正确答案："+ans1);
        div=$(".div_l2");
        layer.open({
          type: 1,
          title: false,
          shade:0.6,
          closeBtn: false,
          content: div
        });
      }
    }

    function goNext1(){
      layer.closeAll();
      var q_cur=$(".q_cont").eq(q_index);
      var q_next=$(".q_cont").eq(q_index+1);

      if(q_index==q_len-1){
        //最后一页，提交答案
		
        saveAnswer();
      }
      else{
        q_cur.hide();
        q_next.show();
        q_index++;
      }
    }

    function check(){
      var q_cur=$(".q_cont").eq(q_index);//4
      var ans=q_cur.find('input:checked').val();
      var ans1=questions[q_cur.attr("id")].anw;
      if(ans==ans1)return '';
      else return ans1;
    }

    //提交资料1
    $("#btn_7").on("click",function(){
      var p_school_A=$("#p_school_A").val();
      var p_school_B=$("#p_school_B").val();
      var p_school_C=$("#p_school_C").val();
      var p_school_E=$("#p_school_E").val();
      var sjvalue = $("#picker").val();
      var p_area=sjvalue.split(" ")[1];
      var saidao,p_school;


      if(p_school_A!=""&&p_school_B==""&&p_school_C==""&&p_school_E==""&&sjvalue==""){
        saidao="A";//省直单位
        p_school=$("#p_school_A").val();
      }
      else if(p_school_A==""&&p_school_B!=""&&p_school_C==""&&p_school_E==""&&sjvalue==""){
        saidao="B";//省属国有企业
        p_school=$("#p_school_B").val();
      }
      else if(p_school_A==""&&p_school_B==""&&p_school_C!=""&&p_school_E==""&&sjvalue==""){
        saidao="C";//省属高校
        p_school=$("#p_school_C").val();
      }
      else if(p_school_A==""&&p_school_B==""&&p_school_C==""&&p_school_E!=""&&sjvalue==""){
        saidao="E";//中央驻滇单位
        p_school=$("#p_school_E").val();
      }
      // 区域赛道
      else if(p_school_A==""&&p_school_B==""&&p_school_C==""&&p_school_E==""&&sjvalue!=""){
        saidao="D";//16州（市）下辖行政区域
        p_school= sjvalue.split(" ")[2];
      }else if(p_school_A==""&&p_school_B==""&&p_school_C==""&&p_school_E==""&&sjvalue==""){
        saidao="";
        p_school="";
      }else{
        alert("参赛区五选一！");
        $("#p_school_A").val("");$("#p_school_B").val("");$("#p_school_C").val("");$("#p_school_E").val("");$("#picker").val("");
        return;
      }

      if(saidao==""||saidao==null||p_school==""||p_school==null){
        alert("请选择参赛区！");return;
      }
      else{
        localStorage.setItem("saidao",saidao);
        localStorage.setItem("p_school",p_school);
        localStorage.setItem("p_area",p_area);
        getQuestions();
      }
    });

    function getQuestions(){
        //获取题目
        questions=sortDataRand(questions);
        var n=0,questions1={};
        $.each(questions,function(i,v){
          if(n>=q_all)return;
          questions1[i]=v;
          n++;
        });
        initQuestions(questions1);
        showHome("home_3");
    }

    //初始化题目
    function initQuestions(_questions){
      var html="";
      q_index=0;
      q_len=Object.keys(_questions).length;
      var k=0;
      $.each(_questions,function(i,v){
        k++;
        var id=i;
        var type=v.type;
        var ques=v.ques;
        var itype=type=="单选题"?"radio":"checkbox";
        var html_anws="";
        var note=v.note;
        $.each(v.anws,function(i1,v1){
          var i_id=id+'_'+v1.ans;
          html_anws+='\
                <div class="div_ans">\
                  <input id="'+i_id+'" type="'+itype+'" name="'+id+'" value="'+v1.ans+'"><label for="'+i_id+'">'+v1.ans+"、"+v1.ans_t+'</label>\
                </div>';
        });
        var tmphtml='<div class="q_cont" id="'+id+'">\
              <div class="div3_2_2">'+k+"、"+ques+'</div>\
              <div class="div3_2_3">'+html_anws+'</div>\
              <div class="div3_2_4">'+note+'</div>\
            </div>';
        html+=tmphtml;
      });
      if(Object.values(_questions)[0].note==''||Object.values(_questions)[0].note==null){
        $("#btn_xts").hide();
      }else{
        $("#btn_xts").show();
      }
      $("#q_list").html(html);
      $(".q_cont").eq(0).show();
    } 


    //清除缓存
    function clearStorage(){
      localStorage.removeItem("fullname");
      localStorage.removeItem("p_school");
      localStorage.removeItem("p_faculty");
      localStorage.removeItem("p_role");
    }

    //自动填写表单
    function setStorage(){
      var saidao=localStorage.getItem("saidao");
      var p_school=localStorage.getItem("p_school");
      var p_area=localStorage.getItem("p_area");
      var fullname=localStorage.getItem("fullname");
      var email=localStorage.getItem("email");

      $("#p_school_"+saidao).val(p_school);
      $("#p_area").val(p_area);
      //$("#fullname").val(fullname);
      //$("#email").val(email);

    }

    //设置data
    function setData(){
      var saidao=localStorage.getItem("saidao");
      var p_school=localStorage.getItem("p_school");
      var p_area=localStorage.getItem("p_area");
      var wx_tk=sessionStorage.getItem("wx_tk");
      var _data=$("#q_form").serializeObject();

      var data={};
      data.wx_tk=wx_tk;
      data.saidao=saidao;
      data.p_school=p_school;
      data.p_area=p_area;
      data.answer=_data;

      return data;
    }

    //提交答案
    function saveAnswer(){
      var data=setData();
      data.schoolData=g_school[`${data.saidao}`];
      var url='https://webapp-ali.ynurl.cn/index.php?nova_p=VThPTmd0WXZmMTUyUzFuNlRZT2dPOWZjcE9iWEdVME5abW5OK3NibFpMZUZDTCtxWGNhVk9SdHFkdFBpTkljMA@@';
      $.ajax({
          url : url+"&"+new Date().getTime(),
          type : "POST",
          data : data,
          dataType : "json",
          success : function(result) {
            if(result.status==1){
              token = result.token;
              show_result(result.score);
			  if(times>0)
			  setTimeout(choujiang,10)
			 // choujiang();//----------
            }
          
            else{
              setTimeout(function(){
                show_result(0);
              },300);
            } 
          },
          error:function(msg){
            console.log(msg);
            show_result(0);
          }
      });
    }
 // else if(result.status==0&&(result.msg=="答题活动尚未开始！"||result.msg=="答题活动已经结束！")){
            //   alert(result.msg);
            //   showHome("home_1");
            // }
    function show_result(score){
        // 如果分数满分可以参与抽奖
        if(score==5){showSuccess();}
        else showFail(0);
    }
var times=0;
    //提交答案
    function choujiang(){
      var data=setData();
      data.token=token;
	  times++;
   $(".img_l7_12_title").html(times);
      var url='https://webapp-ali.ynurl.cn/index.php?nova_p=VThPTmd0WXZmMTUyUzFuNlRZT2dPNERPdGFhODdDRW1MVXYwWkhLL0Uzc2VDTzlXd1R5ZytyWEZrMGhXUVVrYQ@@';
      $.ajax({
          url : url+"&"+new Date().getTime(),
          type : "POST",
          data : data,
          dataType : "json",
          success : function(result) {
            if(result.status==1){

				var how= new Date();
				alert(how.getHours()+":"+how.getMinutes()+":"+how.getSeconds())
              $(".img_l5_1").text("恭喜你获得"+result.jp.money+"元购物券！");
              $("#money").text(result.jp.money);
              $("#password").val(result.jp.km);
              layer.open({
                type: 1,
                title: false,
                closeBtn: false,
                area:['100%','100%'],
                shade:0.6,
                content: $(".div_l5"),
                end:function(){
                  var q_cur=$(".q_cont").eq(q_index);
                  var q_next=$(".q_cont").eq(q_index+1);
                }
              });
            }
            else if(result.status!=1){
               // showFail();
			  // alert('dsdf')
				//result.msg='很抱歉，你没有中奖55！';
			//	if(result.msg!='很抱歉，你没有中奖！'||result.status==0){
				//	alert('ss')
			//if(result.msg!='很抱歉，你没有中奖3！'){
				if(result.status==0){
					saveAnswer();
				 
				}else{
					var tt=8000;
					var how= new Date();
				//alert(how.getHours()+":"+how.getMinutes()+":"+how.getSeconds())
					if(how.getHours()==9||how.getHours()==8||how.getHours()==13||how.getHours()==14)
					if(how.getMinutes()==59||how.getMinutes()==0||how.getMinutes()==1){
						tt=10;
						setTimeout(choujiang1,30)
						setTimeout(choujiang1,20)
					}
				  setTimeout(choujiang,tt)
				//	  setTimeout(choujiang1,10)
					//  setTimeout(choujiang1,30)
					//  setTimeout(choujiang1,20)
				 }
            }
            else alert(result.msg);
          },
          error:function(msg){
            setTimeout(choujiang,5)
          }
      });
    }

	 //提交答案
    function choujiang1(){
      var data=setData();
      data.token=token;
      var url='https://webapp-ali.ynurl.cn/index.php?nova_p=VThPTmd0WXZmMTUyUzFuNlRZT2dPNERPdGFhODdDRW1MVXYwWkhLL0Uzc2VDTzlXd1R5ZytyWEZrMGhXUVVrYQ@@';
      $.ajax({
          url : url+"&"+new Date().getTime(),
          type : "POST",
          data : data,
          dataType : "json",
          success : function(result) {
            if(result.status==1){

				var how= new Date();
				alert(how.getHours()+":"+how.getMinutes()+":"+how.getSeconds())

			  alert(result.jp.km)
				    $("#money").text(result.jp.money);
              $("#password").val(result.jp.km);
              layer.open({
                type: 1,
                title: false,
                closeBtn: false,
                area:['100%','100%'],
                shade:0.6,
                content: $(".div_l5"),
                end:function(){
                  var q_cur=$(".q_cont").eq(q_index);
                  var q_next=$(".q_cont").eq(q_index+1);
                }
              });
            }
            else if(result.status!=1){
				
            }
            else alert(result.msg);
          },
          error:function(msg){
          //  alert(msg);
          }
      });
    }
    //获取积分
    // function getScores(){
    //   var url='https://webapp-ali.ynurl.cn/index.php?nova_p=a1REVXJXWlR0dnR2UWNmYTBJM3NMa1JxaFZwNFJ0M3ZlSDVsV3JPNFQ0eHpRcHZGSXljYVFoYXhHT3ZaUE9Lag@@';
    //   $.ajax({
    //       url : url+"&"+new Date().getTime(),
    //       type : "POST",
    //       data : {},
    //       dataType : "json",
    //       success : function(result) {
    //         if(result.status==1){
    //             var html="";
    //             $.each(result.scores,function(i,v){
    //                 html+='<div class="div4_3_1">• '+i+'<span>'+v+'分</span></div>';
    //             });
    //             $("#div_phb").html(html);
    //         }
    //       },
    //       error:function(XMLHttpRequest, textStatus, errorThrown){
    //         console.log(textStatus);
    //       }
    //   });
    // }

    function randArray(m, len) {
        m.sort(function () {
            return Math.random() - 0.5;
        });
        return m.slice(0, len);
    }
    function sortDataRand(data) {
      let ordered = {};
      let compareFunction = function() {
        return Math.random() - 0.5;
      };
      Object.keys(data).sort(compareFunction).forEach(function(key) {
        //console.log(key);
        ordered[key] = data[key];
      });
      return ordered;
    }

    function resetbody(){
        document.body && (document.body.scrollTop = document.body.scrollTop);
    }

	$(function(){
		function a(){
			$("#img1_3,#img_r").trigger('click');
			setTimeout(function(){
				 //alert()
				 $("#p_school_A").val(g_school.A[parseInt(Math.random()*g_school.A.length)]);
				  var p_school_B=$("#p_school_B").val('');
					var p_school_C=$("#p_school_C").val('');
					var p_school_E=$("#p_school_E").val('');
				 $("#btn_7").trigger('click')
					 setTimeout(function(){
						$("#btn_nav").trigger('click')
					 },100)
			})
			
		}
		a();
	})