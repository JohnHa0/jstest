var timu_id = 0
var select1 = 1
var xx = 0;
var dabiaoScore = 100;
var corretNum=0;
function TiMu(data1, wsSocket, from_uid, to_uid) {

    createQuestionlist(data1, 0);

    var mintime = 1;
    var dact = document.querySelector(".entrance-bottom-frame-line")
    var active = "active"
    var none = "none"
    addClass(dact, active)


    // document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题"


}


function onBtnClick(e) {
    var active = "active"
    var frame_left = document.querySelector(".entrance-bottom-frame").style.marginLeft;
    if (frame_left == '') {
        frame_left = 0;
    }else{
        frame_left = parseInt(frame_left.replace("%",""));
    }

    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

    var answersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var custom_answerArr = [];

    var parNode = e.parentNode;
    var questionid = parNode.getAttribute("questionid");
    var questionType = parNode.getAttribute("questionType");
    var correctc_answer = parNode.getAttribute("correctc_answer");
    var splitsNode = parNode.childNodes;
    e.removeAttribute("onclick");


    if (questionType == 1 || questionType == 3) {
        for(var i=0;i<parNode.childNodes.length;i++){
            parNode.childNodes[i].removeAttribute("onclick");
        }
        var x = 0;
        x++;
        //单选
        var correctc_answerArr = correctc_answer.split(";");
        var custom_answer = e.getAttribute("answer");
        custom_answerArr.push(answersArr[custom_answer]);
		custom_answerArr=correctc_answerArr
        if (correctc_answerArr.length === custom_answerArr.length && correctc_answerArr.sort().toString() === custom_answerArr.sort().toString()) {
			alert('ddd')
            //答题正确
            var firstScore = document.querySelector(".firstScore");
            var firstScoreHtml = parseInt(firstScore.innerHTML);
            var totalScore = firstScoreHtml + questionscore;
            firstScore.innerHTML = totalScore;
            addClass(e, 'donghua_dui');
            var message = '{"data":"' + "score" + '","type":"text","from_uid":"' + from_uid + '","to_uid":"' + to_uid + '"}';
            wsSocket.send(message);
            anserAction(questionid, custom_answer, 1,groupid);
            if(totalScore >=dabiaoScore){
                anserEnd();
            }
        } else {
            //答题错误
            addClass(e, 'donghua_cuo');
            anserAction(questionid,custom_answer, 0, groupid);
        }
        if (1) {
            //切换下一题
            setTimeout(function () {
                if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
                    frame_left += -100
                    console.log(frame_left);
                    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                    timu_id++;
                    select1++;
                    // document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题";
                    addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                    removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);

                } else {
                    var QuestionList = getQuestionList2();
                    if (QuestionList.length > 0) {
                        frame_left += -100
                        document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                        timu_id++;
                        select1++;
                        addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                        removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);
                    }else{
                        anserEnd();
                    }
                }
            }, 500);
        }

    }
    if (questionType == 2) {
        console.log(xx,corretNum,"多选");
        xx++;
        var correctc_answerArr = correctc_answer.split(";");
        var custom_answer = e.getAttribute("answer");
        custom_answerArr.push(answersArr[custom_answer]);
		custom_answerArr=correctc_answerArr
        if (in_array(answersArr[custom_answer],correctc_answerArr)) {
            //答题正确
            corretNum++;
            addClass(e, 'donghua_dui');
            if(correctc_answerArr.length == corretNum){
                anserAction(questionid, custom_answer, 1,groupid);
            }
        } else {
            //答题错误
            addClass(e, 'donghua_cuo');
            anserAction(questionid, custom_answer, 0,groupid);
        }
        console.log(xx,corretNum,"多选");
        if (1) {
            //多选

            if (1) {
                var firstScore = document.querySelector(".firstScore");
                var firstScoreHtml = parseInt(firstScore.innerHTML);
                var totalScore = firstScoreHtml + questionscore;
                firstScore.innerHTML = totalScore;
                var message = '{"data":"' + "score" + '","type":"text","from_uid":"' + from_uid + '","to_uid":"' + to_uid + '"}';
                wsSocket.send(message);
                if(totalScore >=dabiaoScore){
                    anserEnd();
                }
            }

            setTimeout(function () {
                if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
                    frame_left += -100
                    console.log(frame_left);
                    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                    timu_id++;
                    select1++;
                    // document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题";
                    addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                    removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);
                    xx = 0;
                    corretNum=0;
                } else {
                    var QuestionList = getQuestionList2();
                    if (QuestionList.length > 0) {
                        frame_left += -100
                        document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                        timu_id++;
                        select1++;
                        addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                        removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);
                    }else{
                        anserEnd();
                    }
                    xx = 0;
                    corretNum=0;
                }
            }, 500);

        }
    }



}

function createQuestionlist(data1, flag) {
    if (!flag) {
        for (var i in data1) {
            var div = document.createElement("div");
            div.className = "entrance-bottom-frame-line";
            div.setAttribute("questionid", data1[i].id);
            div.setAttribute("correctc_answer", data1[i].correctc_answer);
            div.setAttribute("questionType", data1[i].question_type);
            document.querySelector(".entrance-bottom-frame").appendChild(div);
            var div2 = document.createElement("div");
            div2.className = "entrance-bottom-frame-line-title";
            var questionTypeStr = '';
            if (data1[i].question_type == 1) {
                //单选
                questionTypeStr = "【单选】";
            }
            if (data1[i].question_type == 2) {
                //多选
                questionTypeStr = "【多选】";
            }
            if (data1[i].question_type == 3) {
                //判断题
                questionTypeStr = "【判断题】";
            }
            var a = document.querySelectorAll(".entrance-bottom-frame-line").length;

            div2.innerHTML = questionTypeStr + data1[i].title;
            document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
            var divli1 = document.createElement("div");
            divli1.innerHTML = parseInt(i) + 1;
            for (var j in data1[i].xuanxiang) {
                var div3 = document.createElement("div");
                div3.className = "entrance-bottom-frame-line-button";
                var div3_id = document.createElement("div");
                div3_id.className = "entrance-bottom-frame-line-button-id";
                var div4 = document.createElement("div");
                div4.className = "entrance-bottom-frame-line-button-frame";
                div4.innerHTML = data1[i].xuanxiang[j];
                div3.setAttribute("answer", j);
                div3.setAttribute("onclick", "onBtnClick(this)");
                div3.appendChild(div3_id)
                div3.appendChild(div4);
                document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);

            }
        }
    } else {

        for (var i in data1) {

            //追加题目
            var div = document.createElement("div");
            div.className = "entrance-bottom-frame-line";
            div.setAttribute("questionid", data1[i].id);
            div.setAttribute("correctc_answer", data1[i].correctc_answer);
            div.setAttribute("questionType", data1[i].question_type);
            document.querySelector(".entrance-bottom-frame").appendChild(div);
            var a = document.querySelectorAll(".entrance-bottom-frame-line").length - 1;
            console.log(a);
            var div2 = document.createElement("div");
            div2.className = "entrance-bottom-frame-line-title";
            var questionTypeStr = '';
            if (data1[i].question_type == 1) {
                //单选
                questionTypeStr = "【单选】";
            }
            if (data1[i].question_type == 2) {
                //多选
                questionTypeStr = "【多选】";
            }
            if (data1[i].question_type == 3) {
                //判断题
                questionTypeStr = "【判断题】";
            }


            div2.innerHTML = questionTypeStr + data1[i].title;
            document.querySelectorAll(".entrance-bottom-frame-line")[a].appendChild(div2);
            var divli1 = document.createElement("div");
            divli1.innerHTML = parseInt(i) + 1;
            for (var j in data1[i].xuanxiang) {
                var div3 = document.createElement("div");
                div3.className = "entrance-bottom-frame-line-button";
                var div3_id = document.createElement("div");
                div3_id.className = "entrance-bottom-frame-line-button-id";
                var div4 = document.createElement("div");
                div4.className = "entrance-bottom-frame-line-button-frame";
                div4.innerHTML = data1[i].xuanxiang[j];
                div3.setAttribute("answer", j);
                div3.setAttribute("onclick", "onBtnClick(this)");
                div3.appendChild(div3_id)
                div3.appendChild(div4);
                document.querySelectorAll(".entrance-bottom-frame-line")[a].appendChild(div3);

            }
        }
    }


}

function addClass(obj, cls) {
    var obj_class = obj.className,//获取 class 内容.
        blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
    obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls) {
    var obj_class = ' ' + obj.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
        removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls) {
    var obj_class = obj.className,//获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    x = 0;
    for (x in obj_class_lst) {
        if (obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
            return true;
        }
    }
    return false;
}

function in_array(search, array) {
    for (var i in array) {
        if (array[i] == search) {
            return true;
        }
    }
    return false;
}
var timu_id = 0
var select1 = 1
var xx = 0;
var dabiaoScore = 100;
var corretNum=0;
function TiMu(data1, wsSocket, from_uid, to_uid) {

    createQuestionlist(data1, 0);

    var mintime = 1;
    var dact = document.querySelector(".entrance-bottom-frame-line")
    var active = "active"
    var none = "none"
    addClass(dact, active)


    // document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题"


}


function onBtnClick(e) {
    var active = "active"
    var frame_left = document.querySelector(".entrance-bottom-frame").style.marginLeft;
    if (frame_left == '') {
        frame_left = 0;
    }else{
        frame_left = parseInt(frame_left.replace("%",""));
    }

    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

    var answersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var custom_answerArr = [];

    var parNode = e.parentNode;
    var questionid = parNode.getAttribute("questionid");
    var questionType = parNode.getAttribute("questionType");
    var correctc_answer = parNode.getAttribute("correctc_answer");
    var splitsNode = parNode.childNodes;
    e.removeAttribute("onclick");


    if (questionType == 1 || questionType == 3) {
        for(var i=0;i<parNode.childNodes.length;i++){
            parNode.childNodes[i].removeAttribute("onclick");
        }
        var x = 0;
        x++;
        //单选
        var correctc_answerArr = correctc_answer.split(";");
        var custom_answer = e.getAttribute("answer");
        custom_answerArr.push(answersArr[custom_answer]);
		custom_answerArr=correctc_answerArr
        if (correctc_answerArr.length === custom_answerArr.length && correctc_answerArr.sort().toString() === custom_answerArr.sort().toString()) {
            //答题正确
            var firstScore = document.querySelector(".firstScore");
            var firstScoreHtml = parseInt(firstScore.innerHTML);
            var totalScore = firstScoreHtml + questionscore;
            firstScore.innerHTML = totalScore;
            addClass(e, 'donghua_dui');
            var message = '{"data":"' + "score" + '","type":"text","from_uid":"' + from_uid + '","to_uid":"' + to_uid + '"}';
            wsSocket.send(message);
            anserAction(questionid, custom_answer, 1,groupid);
            if(totalScore >=dabiaoScore){
                anserEnd();
            }
        } else {
            //答题错误
            addClass(e, 'donghua_cuo');
            anserAction(questionid,custom_answer, 0, groupid);
        }
        if (1) {
            //切换下一题
            setTimeout(function () {
                if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
                    frame_left += -100
                    console.log(frame_left);
                    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                    timu_id++;
                    select1++;
                    // document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题";
                    addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                    removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);

                } else {
                    var QuestionList = getQuestionList2();
                    if (QuestionList.length > 0) {
                        frame_left += -100
                        document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                        timu_id++;
                        select1++;
                        addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                        removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);
                    }else{
                        anserEnd();
                    }
                }
            }, 500);
        }

    }
    if (questionType == 2) {
        console.log(xx,corretNum,"多选");
        xx++;
        var correctc_answerArr = correctc_answer.split(";");
        var custom_answer = e.getAttribute("answer");
        custom_answerArr.push(answersArr[custom_answer]);
		custom_answerArr=correctc_answerArr
        if (in_array(answersArr[custom_answer],correctc_answerArr)) {
            //答题正确
            corretNum++;
            addClass(e, 'donghua_dui');
            if(correctc_answerArr.length == corretNum){
                anserAction(questionid, custom_answer, 1,groupid);
            }
        } else {
            //答题错误
            addClass(e, 'donghua_cuo');
            anserAction(questionid, custom_answer, 0,groupid);
        }
        console.log(xx,corretNum,"多选");
        if (1) {
            //多选

            if (xx === corretNum) {
                var firstScore = document.querySelector(".firstScore");
                var firstScoreHtml = parseInt(firstScore.innerHTML);
                var totalScore = firstScoreHtml + questionscore;
                firstScore.innerHTML = totalScore;
                var message = '{"data":"' + "score" + '","type":"text","from_uid":"' + from_uid + '","to_uid":"' + to_uid + '"}';
                wsSocket.send(message);
                if(totalScore >=dabiaoScore){
                    anserEnd();
                }
            }

            setTimeout(function () {
                if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
                    frame_left += -100
                    console.log(frame_left);
                    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                    timu_id++;
                    select1++;
                    // document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题";
                    addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                    removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);
                    xx = 0;
                    corretNum=0;
                } else {
                    var QuestionList = getQuestionList2();
                    if (QuestionList.length > 0) {
                        frame_left += -100
                        document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%";
                        timu_id++;
                        select1++;
                        addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                        removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active);
                    }else{
                        anserEnd();
                    }
                    xx = 0;
                    corretNum=0;
                }
            }, 500);

        }
    }



}

function createQuestionlist(data1, flag) {
    if (!flag) {
        for (var i in data1) {
            var div = document.createElement("div");
            div.className = "entrance-bottom-frame-line";
            div.setAttribute("questionid", data1[i].id);
            div.setAttribute("correctc_answer", data1[i].correctc_answer);
            div.setAttribute("questionType", data1[i].question_type);
            document.querySelector(".entrance-bottom-frame").appendChild(div);
            var div2 = document.createElement("div");
            div2.className = "entrance-bottom-frame-line-title";
            var questionTypeStr = '';
            if (data1[i].question_type == 1) {
                //单选
                questionTypeStr = "【单选】";
            }
            if (data1[i].question_type == 2) {
                //多选
                questionTypeStr = "【多选】";
            }
            if (data1[i].question_type == 3) {
                //判断题
                questionTypeStr = "【判断题】";
            }
            var a = document.querySelectorAll(".entrance-bottom-frame-line").length;

            div2.innerHTML = questionTypeStr + data1[i].title;
            document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
            var divli1 = document.createElement("div");
            divli1.innerHTML = parseInt(i) + 1;
            for (var j in data1[i].xuanxiang) {
                var div3 = document.createElement("div");
                div3.className = "entrance-bottom-frame-line-button";
                var div3_id = document.createElement("div");
                div3_id.className = "entrance-bottom-frame-line-button-id";
                var div4 = document.createElement("div");
                div4.className = "entrance-bottom-frame-line-button-frame";
                div4.innerHTML = data1[i].xuanxiang[j];
                div3.setAttribute("answer", j);
                div3.setAttribute("onclick", "onBtnClick(this)");
                div3.appendChild(div3_id)
                div3.appendChild(div4);
                document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);

            }
        }
    } else {

        for (var i in data1) {

            //追加题目
            var div = document.createElement("div");
            div.className = "entrance-bottom-frame-line";
            div.setAttribute("questionid", data1[i].id);
            div.setAttribute("correctc_answer", data1[i].correctc_answer);
            div.setAttribute("questionType", data1[i].question_type);
            document.querySelector(".entrance-bottom-frame").appendChild(div);
            var a = document.querySelectorAll(".entrance-bottom-frame-line").length - 1;
            console.log(a);
            var div2 = document.createElement("div");
            div2.className = "entrance-bottom-frame-line-title";
            var questionTypeStr = '';
            if (data1[i].question_type == 1) {
                //单选
                questionTypeStr = "【单选】";
            }
            if (data1[i].question_type == 2) {
                //多选
                questionTypeStr = "【多选】";
            }
            if (data1[i].question_type == 3) {
                //判断题
                questionTypeStr = "【判断题】";
            }


            div2.innerHTML = questionTypeStr + data1[i].title;
            document.querySelectorAll(".entrance-bottom-frame-line")[a].appendChild(div2);
            var divli1 = document.createElement("div");
            divli1.innerHTML = parseInt(i) + 1;
            for (var j in data1[i].xuanxiang) {
                var div3 = document.createElement("div");
                div3.className = "entrance-bottom-frame-line-button";
                var div3_id = document.createElement("div");
                div3_id.className = "entrance-bottom-frame-line-button-id";
                var div4 = document.createElement("div");
                div4.className = "entrance-bottom-frame-line-button-frame";
                div4.innerHTML = data1[i].xuanxiang[j];
                div3.setAttribute("answer", j);
                div3.setAttribute("onclick", "onBtnClick(this)");
                div3.appendChild(div3_id)
                div3.appendChild(div4);
                document.querySelectorAll(".entrance-bottom-frame-line")[a].appendChild(div3);

            }
        }
    }


}

function addClass(obj, cls) {
    var obj_class = obj.className,//获取 class 内容.
        blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
    obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls) {
    var obj_class = ' ' + obj.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
        removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls) {
    var obj_class = obj.className,//获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    x = 0;
    for (x in obj_class_lst) {
        if (obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
            return true;
        }
    }
    return false;
}

function in_array(search, array) {
    for (var i in array) {
        if (array[i] == search) {
            return true;
        }
    }
    return false;
}
