$(function () {
  initLocation(function (data) {//定位调取
    page.lat = data.latitude;
    page.lng = data.longitude;
  })
  //参与得分
  $.ajax({
    type: 'POST',
    url: vars.root + 'act/join/appid_' + vars.act.appId + '/actJoinAddPoints.do',
    data: {
      tableName: 'WX_COMM_ACTIVITY_HEAD',
      actId: vars.act.key
    },
    dataType: 'json',
    success: function (res) {
      // console.log(res);
    },
  });
  var cloudNum; //云数目
  var time; //总时间
  var useTime; //消耗时间变量
  var timeInt; //倒计时计时器
  var mainFunc; //主计时任务
  var humanStatus = 0; //人物状态 0未起跳状态 1起跳状态 2下落状态
  var humanStatusNum = 0; //起跳判断参数
  var gameStatus = 0; //游戏状态 0未开始 1开始 2成功 3结束
  var humanHei = 0; //当前第几层
  var cloudWayArr = []; //所有云运行方向
  // var humanJumpArr = [76,44,42,28,10]
  // var humanJumpArr = [34, 32, 29, 25, 22, 20, 16, 12, 7, 3]; //人跳跃速度
  var humanJumpArr = [20,19,18,17,16,15,14,13,12,11,9,8,7,6,5,4,3,2,1]; //人跳跃速度
//			var humanJumpArr = [34, 32, 290, -250, 22, 220, -160, 0, 0, 0]; //人跳跃速度
//   var speedArr = [5, 15, 20, 50] //速度数组
  var $cloud = ''; //云层Dom
  var $human = $('#box').find('#human'); //人物dom
  // var $flag = $('#box').find('#flag'); //旗杆dom
  var speed = 0;
  var uplevel = false;
  var point = 0;
  var pointAdd = 0;
  var showPointAdd  = false;//加分提示


  //获取留言
  getJson(vars.actRoot + '/requireMsg.do', {
    actId: vars.act.key
  }, function (data) {
    for (var i = 0; i < data.length; i++) {
      // if(i%2){
      //   renderTmp('#slideBox2', 'msgBoxTpl2', data[i])
      // }else{
        renderTmp('#slideBox1', 'msgBoxTpl1', data[i])
      // }
    }
    if (data.length > 1) {
      requestAnimationFrame(initDan);
    }
    // console.log(data)
  })


  modalLoading.change(1);
  getJson(vars.actRoot + '/gameIndexData.do', {
    keyId: vars.act.key
  }, function (data) {
    modalLoading.change(-1);
    // console.log(data)
    pointAdd = data.commAct.jumpCloudPoints;
    cloudNum = data.commAct.actLevels+1;//云层数
    time = useTime = data.commAct.actDuration;//时间
    // time = useTime = 1800;//时间
    speed = data.commAct.jumpStartSpeed;
    uplevel = data.commAct.jumpIsDifficulty;//递增难度
    init();
  })
  function initDan(){
    requestAnimationFrame(initDan);
    let wid = $('#slideBox1').find('.slide_item').eq(0).width();
    let left1 = $('#slideBox1').find('.slide_item').eq(0).offset().left;
    // let left2 = $('#slideBox2').find('.slide_item').eq(0).offset().left;
    if(left1<-wid){
      $('#slideBox1').find('.slide_item').eq(0).css('margin-left',0);
      $('#slideBox1').append($('#slideBox1').find('.slide_item').eq(0));
    }else{
      $('#slideBox1').find('.slide_item').eq(0).css('margin-left',left1-1);
    }
    // if(left2<-wid){
    //   $('#slideBox2').find('.slide_item').eq(0).css('margin-left',0);
    //   $('#slideBox2').append($('#slideBox2').find('.slide_item').eq(0));
    // }else{
    //   $('#slideBox2').find('.slide_item').eq(0).css('margin-left',left2-3);
    // }
  }

  function init() {
    if (mainFunc) {
      clearTimeout(mainFunc);
    }
    if (timeInt) {
      clearInterval(timeInt);
    }
    for (var i = 0; i < cloudNum; i++) {
      let num = parseInt(Math.random()*8)+1;
      let url = '../img/yun'+num+'.png';
      $('#box').append(`<div class='cloud pa' data-num='${i}' style='width:2.6rem;bottom:${i * 170 + 90}px;left:${25 + 0 * 5}%;background-image: url("${url}")'></div>`);
      cloudWayArr.push(i % 2 ? -1 : 1) //随机操控云朵左右
    }
    $cloud = $('#box').find('.cloud');
    // $flag.css('height', cloudNum * 160 + 150 + 'px')
    // $flag.css('top', $(window).height() - $flag.height());
    gameStatus = 1; //游戏开始
    timeInt = setInterval(function () {
      if (time > 0) {
        time -= .1;
        $('#timeBox').html(time.toFixed(1) + '' + parseInt(Math.random() * 10));
      } else {
        $('#timeBox').html(0);
        gameStatus = 3;
      }
    }, 100)
    startMain(); //初始化计时器startMain
  }

  //跳跃动作
  $('#box').on('click', function () {
    if (humanStatus == 0) {
      humanStatus = 1;
    }
  })

  function startMain() { //计时器
    check(); //执行监控
    requestAnimationFrame(startMain)
    // mainFunc = setTimeout(function () {
    //   startMain(); //初始化计时器
    // }, 100);
  };

  function check() { //监控函数
    if (gameStatus == 1) { //开始
      changeStatus();
    } else if (gameStatus == 2) { //过关
      gameStatus = 0;
      clearInterval(timeInt);
      clearTimeout(mainFunc);
	 
      var endPoint = parseInt(time)*pointAdd + point + parseInt(Math.random()*100);
	//  alert(parseInt(time)*pointAdd + point);
	//  return;
	  endPoint=10000//----
      // console.log(time)
      // var leaveTime = (useTime - time - Math.random() * .1).toFixed(2);
      modalLoading.change(1);
      getJson(vars.actRoot + '/updateRecord.do', {
        recId: recId,
        score: endPoint,
        lat:page.lat+parseInt(Math.random()*2000)/1000,
        lng:page.lng+parseInt(Math.random()*100)/1000,
      }, function (data) {
        if (data) {
          modalLoading.change(-1);
          toNewPage(vars.actRoot + "/gameOver.html?keyId=" + vars.act.key + '&typeId=' + typeId + '&score=' + endPoint, true);
        } else {
          toNewPage(vars.actRoot + "/gameOver.html?keyId=" + vars.act.key + '&typeId=' + typeId + '&score=' + endPoint, true);
        }
      })
    } else if (gameStatus == 3) {
      gameStatus = 0;
      clearInterval(timeInt);
      clearTimeout(mainFunc);
      modalLoading.change(1);
      getJson(vars.actRoot + '/updateRecord.do', {
        recId: recId,
        score: point,
        lat:page.lat?page.lat:0,
        lng:page.lng?page.lng:0,
      }, function (data) {
        if (data) {
          modalLoading.change(-1);
          toNewPage(vars.actRoot + "/gameOver.html?keyId=" + vars.act.key + '&typeId=' + typeId + '&score=' + point, true);
        } else {
          toNewPage(vars.actRoot + "/gameOver.html?keyId=" + vars.act.key + '&typeId=' + typeId + '&score=' + point, true);
        }
      })
    }
  }

  function changeStatus() { //游戏开始时监控逻辑
    point = humanHei*pointAdd;
    $('#pointBox').html(point)
    if (humanHei >= cloudNum - 1) { //到达层数
      gameStatus = 2;
      return;
    }

    changeCloud(); //改变云的位置
    checkHuman(); //改变人的位置
  }

  function changeCloud() { //改变云朵运行
    if (humanStatus == 3) {
      return
    }
    for (var i = 0; i < $cloud.length; i++) {
      if (i <= humanHei || i >= humanHei + 5) {
        continue
      }
      let left = $cloud.eq(i).offset().left;
      let right = $(window).width() - $cloud.eq(i).offset().left - $cloud.eq(i).width();

      if (left <= 0) {
        cloudWayArr[i] = 1;
      } else if (right <= 0) {
        cloudWayArr[i] = -1;
      }
      var b;
      if (cloudWayArr[i] > 0) {
        b = speed * 1;
      } else {
        b = speed * -1;
      }
      //$cloud.eq(i).css('left', $cloud.eq(i).offset().left + b + 'px')
    }
  }

  function checkHuman() { //改变人物运动
    switch (humanStatus) {
      case 0: //正常
        $human.find('img').attr('src', '../img/human.png');
        break;
      case 1: //起跳
        if (humanStatusNum < 10) {
          // console.log()
          $human.css('bottom', $(window).height() - $human.offset().top - $human.height() + humanJumpArr[0] + 'px');
          humanStatusNum++;
        } else {
          humanStatusNum = 0;
          humanStatus = 2; //到顶改状态
        }
        $human.find('img').attr('src', '../img/human2.png');
        break;
      case 2: //落下
        if (humanStatusNum < 10) {
          let humanBottom = $human.offset().top + $human.height();
          let newCloudTop = $cloud.eq(humanHei + 1).offset().top;
          let cloudCenter = $cloud.eq(humanHei + 1).offset().left + $cloud.eq(humanHei + 1).width() / 2;
          let humanCenter = $human.offset().left + $human.width() / 2;
          console.log(humanBottom - newCloudTop,Math.abs(cloudCenter - humanCenter),($cloud.eq(humanHei + 1).width() / 2) - $human.width() / 2)
          if ((humanBottom - newCloudTop < 15 && humanBottom - newCloudTop > -20) && Math.abs(cloudCenter - humanCenter) < ($cloud.eq(humanHei + 1).width() / 2)) {
            humanStatusNum = 0;
            humanHei++;
            if(uplevel){
              speed+=0.1
            }
            $human.css('bottom', $(window).height() - $cloud.eq(humanHei).offset().top + 'px');
            humanStatus = 3;
          } else {
            $human.css('bottom', $(window).height() - $human.offset().top - $human.height() - humanJumpArr[0] + 'px');
            humanStatusNum++;
          }
        } else {
          let oldCloudCenter = $cloud.eq(humanHei).offset().left + $cloud.eq(humanHei).width() / 2;
          let humanCenter = $human.offset().left + $human.width() / 2;
          humanStatusNum = 0;
          humanStatus = 0; //落到底改状态
        }
        break;
      case 3: //踩中全局下移
        if (humanStatusNum < 10) {
           humanStatusNum++;
          $human.css('bottom', $(window).height() - $human.offset().top - $human.height() - 17 + 'px');
          for (var i = 0; i < $cloud.length; i++) {
            $cloud.eq(i).css('top', $cloud.eq(i).offset().top + 17 + 'px');
          }
          if(!showPointAdd){
            showPointAdd = true
            var numCon = $('<div class="num_cons">+'+pointAdd+'</div>');
            $('body').append(numCon);
            numCon.css('top','50%');
            numCon.animate({top:'45%',opacity:0},1000,function () {
              numCon.remove();
              showPointAdd = false
            });
          }

          // $flag.css('top', $flag.offset().top + 42.5 + 'px');
          // $('.bottom,.bottom2').css('bottom', $(window).height() - $('.bottom').offset().top - $('.bottom').height() - 30 + 'px');
        } else {
          humanStatusNum = 0;
          humanStatus = 0
        }

        break;
      default:
        break;
    }
  }
})