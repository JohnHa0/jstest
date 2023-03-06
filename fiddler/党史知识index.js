/**
 * 首页事件S
 */
//#region 
$("#homePage-opsGroup").click(function (e) {
    if (e.target.dataset.target !== "winnerLists") {
        if(e.target.dataset.target=="loginPage"){
            //登陆验证码
            changeLoginVerifyCode()
        }
        $(".homePage").hide()
        $(`.${e.target.dataset.target}`).show()
        $(".btn-close").show()
        
    }
    else {
        window.alert("活动结束后开放")
        // window.location.href="https://theory.southcn.com/node_38c0920b8c/f158d9e2e7.shtml"
    }
   
})
var questionsID = 1
var answer_data = []
//计时器
var pastTimeCount

//#endregion
/**
 * 首页事件E
 */



/**
 *登录页事件S
 */
//#region 
function changeLoginVerifyCode(){
    $(".login-verifyImage").attr("src", 'https://game.southcn.com/nfwapp/nfw_tinygame/api/yzm2.php')
}
$(".login-verifyImage").click(function(){
    changeLoginVerifyCode()
})
$(".loginPage-btn").click(function () {
    $(".tips").text("")
    var userName = $('input[name="userName"]')[0].value
    var userTEL = $('input[name="userTEL"]')[0].value
    var verifyText = $('input[name="login-verifyText"]')[0].value
    // var TELFormat = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/
    var TELFormat = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
   
    if (!userName || !TELFormat.test(userTEL)) {
        $(".tips").text("请输入正确的用户名和11位手机号码")
        $(".tips").show()
    }else if(!verifyText){
        $(".tips").text("验证码不能为空")
        $(".tips").show()
    }
    else if (moment().get("hour") <  9|| moment().get("hour") > 22) {
        window.alert("答题时间段为9:00-22:00")
    }
    else {
        $.ajax({
            url: "https://game.southcn.com/nfwapp/nfw_tinygame/api/index.php",
            xhrFields: {
                withCredentials: true
            },
            type:"POST",
            data: {
                "act": "checkPhone",
                phone: userTEL,
                code:verifyText
            },
            success: function (res) {
                res = JSON.parse(res)
                if(res.success==1){
                    if(!res.data.answered[1]==0&&!res.data.answered[2]==0){
                        $(".tips").text("您已答题超过两次")
                        $(".tips").show()
                    }else{
                        questionsID=res.data.answered[1]==0?1:2
                        getQuestion()
                    }  
                }
                 else {
                    $(".tips").text("请输入正确验证码(两分钟内有效)")
                    $(".tips").show()
                    changeLoginVerifyCode()
                }
            }
        })


    }
})
$('input').on('blur',function(){      
    $(".loginPage")[0].scrollTop=0
}); 

//#endregion
/**
 *登录页事件E
 */


/**
 * 答题页事件S
 */
//#region 
//题库获取
//获得题目数据
function getQuestion() {
    // questionsID = Math.floor(Math.random() * 6 + 1)
    answer_data = Array.apply(null, Array(0))
    $.ajax({
         
        url: "https://game.southcn.com/nfwapp/nfw_tinygame/api/index.php",
        data: {
            "act": "getQuestion",
            "appid": 40,
            custom_type: questionsID,
        },
        success: function (res) {
            var allTmsUrl = JSON.parse(res).data.file_js[""].replace("http:", "https:")
            $('head').append(`<script src="${allTmsUrl}" async></script>`)
            window.setTimeout(function(){
            //获得验证码
                $(".verifyImage").attr("src", 'https://game.southcn.com/nfwapp/nfw_tinygame/api/yzm.php?t=' + new Date().getTime())
                $(".loginPage").hide()
                $(".answerPage").show()
                $(".nextQuestion-btn").text("下一题")
                //开始计时

                pastTimeCount = setInterval(function () {
                    pastTime += 1
                }, 1000)
                showQuestion(count)
            },500)

        }
    })
}

//设置初始变量-当前题目索引，每道题时间，花费时间，正确数量
var count = 0
var allTime = 20
var pastTime = 0
var score = 0

//初始化答题区
var initAnswerpage = function () {
    $(".timeLeft").text(`00:${allTime}`)
    $(".stem").text("")
    $(".optionsGroup").html("")
}
//显示题目内容
function showQuestion(index) {
    //移除选项组点击事件
    $(".optionsGroup").off("click", opsSelect)
    initAnswerpage()
    var currentTms = questions[index]
    var opsHtml = ""
    var oldopsGroup=currentTms.options.split("||")
    var opsGroup = currentTms.options.split("||").sort(function () {
        return Math.random() - 0.5
    })

    var opsIndex = ["A", "B", "C", "D"]
    $(".stem").text(currentTms.question)
    for (let i = 0; i < opsGroup.length; i++) {
        var isTrue = opsGroup[i] == oldopsGroup[opsIndex.indexOf(currentTms.answer)]
        var currentIndex= oldopsGroup.indexOf(opsGroup[i])
	if(isTrue)opsGroup[i]='-------';
        opsHtml += `<li data-ans="${isTrue}" data-sel="${opsIndex[currentIndex]}" data-id="${currentTms.id}"><div class='selectResult'></div>${opsIndex[i]} ${opsGroup[i]}</li>`
    }
    $(".optionsGroup").html(opsHtml)
    $(".optionsGroup").click(opsSelect)
    countDown()
    //先获得下一题题号
    count += 1
    $(".currentCount").html(count+'/'+questions.length)
    if (count >= questions.length) {
        $(".nextQuestion-btn").text("完成答题")
    }
}
//选择答案
function opsSelect(e) {
    if (e.target.dataset.ans) {
        if (e.target.dataset.ans == "true") {
            $(e.target).addClass("rightAnswer")
            score += 1
        } else {
            $(e.target).addClass("errorAnswer")
        }
        // console.log(e.target.dataset.sel)
        answer_data.push({ 'answer': e.target.dataset.sel, "sort": e.target.dataset.id })
        //移除选项组点击事件
        $(".optionsGroup").off("click", opsSelect)
        //关闭定时器
        countStop()
    }
}
//倒计时
var timeLoop
function countDown() {
    countStop()
    var timeLeft = allTime
    function fn() {
        timeLeft--
        timeLeft > 9 ? $(".timeLeft").text(`00:${timeLeft}`) : $(".timeLeft").text(`00:0${timeLeft}`)
        if (timeLeft <= 0) {
            clearInterval(timeLoop)
            //移除选项组点击事件
            $(".optionsGroup").off("click", opsSelect)
            //直接下一题
            if (count < questions.length) {
                showQuestion(count)
            }

        }
    }
    timeLoop = setInterval(fn, 1000)
}
function countStop() {
    clearInterval(timeLoop)
}

$(".nextQuestion-btn").click(function () {
    //答完全部题目
    if (count >= questions.length) {

        $(".verify-page").show()



    } else {
        showQuestion(count)
    }
})
//提交答案
$(".submit").click(function () {
    submitAnswer()
})
function submitAnswer() {
    var verifyText = $('input[name="verifyText"]')[0].value
    if (verifyText.trim()) {
         $(".verify-tips").text("提交中，请稍后")
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            type: 'POST',
            url: "https://game.southcn.com/nfwapp/nfw_tinygame/api/index.php",
            data: {
                "act": "post_answer_batch_2",
                "appid": 40,
                "phone": $('input[name="userTEL"]')[0].value,
                "username": $('input[name="userName"]')[0].value,
                "custom_type": questionsID,
                "answer_data": answer_data,
                "school": 41,
                "code": $('input[name="verifyText"]')[0].value
            },
            success: function (res) {
                res = JSON.parse(res)
                if (res.success === "0") {
                    if (res.msg&&res.msg.includes('请输入正确验证码')) {
                        $(".verify-tips").text("请输入正确的验证码")
                    }
                    if (res.msg&&res.msg.includes('还未答题')) {
                        $(".verify-tips").text("还未答题")
                    }
                    // else if (res.msg.includes('您已答题')) {
                    //     $(".verify-tips").text("您已答题超过两次")
                    // }
                }
                else {
                    clearInterval(pastTimeCount)
                    $("#score").text(`${Math.ceil((score / questions.length) * 100)}%`)
                    $("#time").text(`${pastTime}秒`)
                    $(".answerPage").hide()

                    $(".scorePage").show()


                }

            }
        })
    } else {
        $(".verify-tips").text("验证码不能为空")
    }
}

//#endregion
/**
* 答题页事件E
*/

/**
 * 成绩页事件S
 */
//#region 

$(".restart").click(function (e) {
    // getQuestion()
    $(".scorePage").hide()
    count = 0
    allTime = 20
    pastTime = 0
    score = 0
    $(".loginPage").show()
    $(".verify-page").hide()
    $('input[name="verifyText"]').val("")
    $('input[name="login-verifyText"]').val("")
    $(".verify-tips").text("")
      $(".tips").hide()
})
$(".showRank").click(function () {
    $(".scorePage").hide()
    $(".answerPage").hide()
    showRank()

    $(".rankPage").show()


})
//#endregion
/**
 * 成绩页事件E
 */

/**
 *排行榜S
 */
//#region 

//显示排行榜数据
function showRank() {

    rankDate = moment().get("hour") >= 12 ? moment().format("YYYY-MM-DD") : moment().subtract(1, 'days').format("YYYY-MM-DD")
    $.ajax({
        url: "https://game.southcn.com/nfwapp/nfw_tinygame/result/" + rankDate + ".json",
        success: function (res) {
            // res=res.reverse()
            $("#rankData").html()
            var rankHtml = ""
            for (let i = 0; i < 10; i++) {
                 if(res[i]){
                            rankHtml += "<li>"
                            + `<span class='userName'>${res[i].username}</span>`
                            + `<span>${res[i].phone.slice(-4)}</span>`
                            + `<span class="correctRate">正确率：${Math.ceil((res[i].correct / 20) * 100)}%</span>`
                            + `<span class="rankTime">时间${res[i].second}s</span>`
                            + "</li>"
                        }
                    
            }
            $("#rankData").html(rankHtml)
            $(".footer").text("注：数据更新时间：每天中午12:00")

        },
        error: function () {
            $.ajax({
                url: "https://game.southcn.com/nfwapp/nfw_tinygame/result/" + moment().subtract(1, 'days').format("YYYY-MM-DD") + ".json",
                success: function (res) {
                    // res=res.reverse()
                    $("#rankData").html()
                    var rankHtml = ""
                    for (let i = 0; i < 10; i++) {
                        if(res[i]){
                            rankHtml += "<li>"
                            + `<span class='userName'>${res[i].username}</span>`
                            + `<span>${res[i].phone.slice(-4)}</span>`
                            + `<span class="correctRate">正确率：${Math.ceil((res[i].correct / 20) * 100)}%</span>`
                            + `<span class="rankTime">时间${res[i].second}s</span>`
                            + "</li>"
                        }
                        
                    }
                    $("#rankData").html(rankHtml)
                    $(".footer").text("注：排行榜数据尚未更新")
                }
            })
        }
    })
}

//#endregion
/**
 *排行榜E
 */

//先加载排行榜数据
showRank()

/**
 * 返回首页
 */
$(".btn-close").click(function () {
    location.reload()
})

/**
 * 监听浏览器后退行为E
 */