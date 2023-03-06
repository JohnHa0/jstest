var HostAddress = "/back/cbdio-visit/cbdio-visit/";
var FtpUrl = "/download";
var systemCode = 'cbdio-centre'
var storage = window.localStorage;
//截取地址后面的参数-数组
function GetRequest() {
	var url = decodeURI(decodeURI(location.search)); //获取url中"?"符后的字串，使用了两次decodeRUI解码
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
		return theRequest;
	}
}

function interface(url, data, Method) {
	var me=Method;
Method=function(data){
if(url.indexOf('getQuestionList')>-1){

	setTimeout(function(){
		interface(url, data, Method)

	},1000)
	add(data.data)
}
me(data)
}
	$.ajax({
		type: "post",
		url: HostAddress + url,
		timeout: 0, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		},
		dataType: 'json',
		data: JSON.stringify(data),
		success: Method,
		error: function(XMLHttpRequest) { //异常处理；
			//			console.log(XMLHttpRequest);
			//			var data = $.parseJSON(XMLHttpRequest);
			//			layer.alert(data.message)
			// location.href = 'new_file.html'
		}
	});
}

function add(data){
	
$.ajax({
		type: "post",
		url: "http://xx.com/cmobile/index.php?app=myanswer&mod=test",
		timeout: 0, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		},
		dataType: 'json',
		data: JSON.stringify(data),
		success: function(data){
			layer.alert(data.msg)
		},
		error: function(XMLHttpRequest) { //异常处理；
			//			console.log(XMLHttpRequest);
			//			var data = $.parseJSON(XMLHttpRequest);
			//			layer.alert(data.message)
			// location.href = 'new_file.html'
		}
	});
}