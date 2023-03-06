(function(win) {
	win.Wei = win.Wei || {};
	//Wind全局功能函数命名空间
	Wei.Util = {}
})(window);

if(typeof layerStyle=="undefined"){
	layerStyle = 1;
}

Wei.Util = {
	wapTipNew : function(jsonData, funcafter){
		console.log('layerStyle'+layerStyle+',jsonData:', jsonData);
		if(layerStyle == 1){ //适应电脑的版本
			var options = {
				area: 'auto'
			};
			if(jsonData.icon){
				options.icon = jsonData.icon;
			}
			var data = jsonData.data;
			if(typeof data=="undefined"){
				data = {};
			}
			if(data==null){
				data = {};
			}
			if(data.mode == 'alert'){
				layer.alert(jsonData.msg, options, funcafter);
			}else if(data.mode == 'jumplink'){
				var okName,cancelName;
				if(data.okName){
					okName = data.okName;
				}else{
					okName = '立即跳转';
				}
				if(data.cancelName){
					cancelName = data.cancelName;
				}else{
					cancelName = '留在当页';
				}
				layer.open({
					type: 1
					,title: false //不显示标题栏
					,closeBtn: false
					,area: '300px;'
					,shade: 0.8
					,skin: 'layer-ext-jumplink'
					,resize: false
					,btn: [okName, cancelName]
					,btnAlign: 'c'
					,moveType: 1 //拖拽模式，0或者1
					,content: jsonData.msg
					,success: function(layero){
						var btn = layero.find('.layui-layer-btn');
						btn.find('.layui-layer-btn0').attr({href: data.okLink});
					}
				});
			}else if(data.mode == 'msg'){
				layer.msg(jsonData.msg, options, funcafter);
			}else{
				if(funcafter){
					layer.alert(jsonData.msg, options, funcafter);
				}else{
					layer.alert(jsonData.msg, options);
					if(jsonData.url){
						Wei.Util.readyToJump(jsonData);
					}
				}
			}
		}else if(layerStyle == 2){ //适应触屏的版本
			var options = {
				skin: 'layer-ext-kswind',
				title: false,
				closeBtn: 1,
				btnAlign: 'c',
				area: 'auto'
			};
			if(jsonData.title){
				options.title = jsonData.title;
			}
			if(jsonData.icon){
				options.icon = jsonData.icon;
			}
			if(jsonData.time){
				options.time = jsonData.time;
			}
			var data = jsonData.data;
			if(typeof data=="undefined"){
				data = {};
			}
			if(data==null){
				data = {};
			}
			if(data.mode == 'alert'){
				if(data.isCallback == 1){
					layer.alert(jsonData.msg, options, funcafter);
				}else{
					layer.alert(jsonData.msg, options);
					Wei.Util.readyToJump(jsonData);
				}
			}else if(data.mode == 'msg'){
				if(funcafter){
					layer.msg(jsonData.msg, options, funcafter);
				}else{
					layer.msg(jsonData.msg, options);
					if(jsonData.url){
						Wei.Util.readyToJump(jsonData);
					}
				}
			}else if(data.mode == 'jumplink'){
				var okName,cancelName,skin;
				if(data.okName){
					okName = data.okName;
				}else{
					okName = '立即跳转';
				}
				if(data.cancelName){
					cancelName = data.cancelName;
				}else{
					cancelName = '留在当页';
				}
				if(data.skin){
					skin = data.skin;
				}else{
					skin = 'layer-ext-jumplink';
				}
				layer.open({
					type: 1,
					title: false, //不显示标题栏
					closeBtn: false,
					area: '300px;',
					skin: skin,
					icon: 1,
					resize: false,
					btn: [okName, cancelName],
					btnAlign: 'c',
					moveType: 1, //拖拽模式，0或者1
					content: jsonData.msg,
					success: function(layero){
						var btn = layero.find('.layui-layer-btn');
						btn.find('.layui-layer-btn0').attr({href: data.okLink});
					}
				});
			}else if(data.mode == 'layerConfirm'){
				var okName,cancelName,skin;
				if(data.okName){
					okName = data.okName;
				}else{
					okName = '立即跳转';
				}
				if(data.cancelName){
					cancelName = data.cancelName;
				}else{
					cancelName = '留在当页';
				}
				layer.confirm(jsonData.msg, {
					btn: [okName, cancelName]
					,skin: 'layer-ext-moon'
					,icon: jsonData.icon
				}, function(){
					window.location.href = data.okLink;
				}, function(){
				});
			}else if(data.mode == 'layerAlert'){
				if(data.isCallback == 1){
					layer.alert(jsonData.msg, {skin: 'layer-ext-moon', icon: jsonData.icon}, funcafter);
				}else{
					layer.alert(jsonData.msg, {skin: 'layer-ext-moon', icon: jsonData.icon});
					Wei.Util.readyToJump(jsonData);
				}
			}else if(data.mode == 'layerMsg'){
				if(funcafter){
					layer.msg(jsonData.msg, {icon: jsonData.icon}, funcafter);
				}else{
					layer.msg(jsonData.msg, {icon: jsonData.icon});
					Wei.Util.readyToJump(jsonData);
				}
			}else{
				if(funcafter){
					layer.msg(jsonData.msg, options, funcafter);
				}else{
					layer.msg(jsonData.msg, options);
					Wei.Util.readyToJump(jsonData);
				}
			}
		}else if(layerStyle == 3){ //sweet版本
			if(data.icon == 1){
				swal({
					title: '',
					html: data.msg,
					type: "success",
					//showCancelButton: true,
					//confirmButtonColor: "#DD6B55",
					closeOnConfirm: false
				});
			}else if(data.icon == 2){
				swal({
					title: '',
					html: data.msg,
					type: "warning",
					//showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					closeOnConfirm: false
				});
			}
		}else if(layerStyle == 4){ //信息提示版本
			var data = jsonData.data;
			if(typeof data=="undefined"){
				data = {};
			}
			if(data==null){
				data = {};
			}
			if(data.mode == 'jumplink'){
				var okName,cancelName,skin;
				if(data.okName){
					okName = data.okName;
				}else{
					okName = '立即跳转';
				}
				if(data.cancelName){
					cancelName = data.cancelName;
				}else{
					cancelName = '留在当页';
				}
				layer.open({
					type: 1,
					title: false, //不显示标题栏
					closeBtn: true,
					area: ['300px', '310px'],
					shade: 0.4,
					skin: 'layer-ext-infomation',
					icon: 1,
					resize: false,
					btn: [okName, cancelName],
					btnAlign: 'c',
					moveType: 1, //拖拽模式，0或者1
					content: '<div class="infomation-content">'+jsonData.msg+'</div>',
					success: function(layero){
						var btn = layero.find('.layui-layer-btn');
						btn.find('.layui-layer-btn0').attr({href: data.okLink});
					}
				});
			}else{
				if(jsonData.icon == 1){
					var index = layer.open({
						type: 1,
						title: false, //不显示标题栏
						closeBtn: true,
						area: ['300px', '310px'],
						shade: 0.4,
						skin: 'layer-ext-infomation',
						resize: false,
						moveType: 1, //拖拽模式，0或者1
						content: '<div class="infomation-content">'+jsonData.msg+'</div>',
						success: function(layero){
							//var btn = layero.find('.layui-layer-btn');
							//btn.find('.layui-layer-btn0').attr({href: data.okLink});
						},
						cancel: function(index, layero){
						}
					});
					Wei.Util.readyToJump(jsonData);
				}else if(jsonData.icon == 2){
					okLink = '';
					var index = layer.open({
						type: 1,
						title: false, //不显示标题栏
						closeBtn: true,
						area: ['300px', '310px'],
						shade: 0.4,
						skin: 'layer-ext-infomation layer-ext-infomationtip',
						resize: false,
						moveType: 1, //拖拽模式，0或者1
						content: '<div class="infomation-content">'+jsonData.msg+'</div>',
						success: function(layero){
							//var btn = layero.find('.layui-layer-btn');
							//btn.find('.layui-layer-btn0').attr({href: data.okLink});
						},
						cancel: function(index, layero){
							//Wei.Util.readyToJump(jsonData);
						}
					});
				}
			}
		}
	},
	readyToJump : function(jsonData){
		console.log('readyToJump,jsonData:', jsonData);
		var jump_time = 1200;
		var data = jsonData.data;
		if(typeof data.jump_type == "undefined"){
			data.jump_type = '';
		}
		if(data.jump_type == 'reload'){
			setTimeout(function(){
				window.location.reload();
			}, jump_time);
		}else if(jsonData.url){
			if(data.jump_time){
				jump_time = data.jump_time;
			}
			console.log('跳转地址:', jsonData.url);
			setTimeout(function(){
				if(jsonData.url){
					if(window.parent.isDialog){ //iframe弹出页
						window.parent.location.href = jsonData.url;
					}else{
						window.location.href = jsonData.url;
					}
				}
			}, jump_time);
		}
	}
};

// //顶部导航跟随滚动条
// $.fn.smartFloat = function(position_type) {
//	   var position = function(element) {
//		   var top = element.position().top, pos = element.css("position");
//		   $(window).scroll(function() {
//			   var scrolls = $(this).scrollTop();
//			   if (scrolls > top) {
//				   if (window.XMLHttpRequest) {
//					   element.css({
//						   position: "fixed",
//						   top: 0
//					   });
//				   } else {
//					   element.css({
//						   top: scrolls
//					   });
//				   }
//			   }else {
//				   if (typeof position_type != 'undefined') {
//					   element.css({
//						   position: position_type,
//						   top: top
//					   });
//				   } else {
//					   element.css({
//						   position: "static",
//						   top: top
//					   });
//				   }
//			   }
//		   });
//	   };
//	   return $(this).each(function() {
//		   position($(this));
//	   });
// };

//下拉组件
var timer,duration=500,fadeSpeed=50;
$(document).find('.J_dropdown').hover(function(){
	var $this = $(this);
	clearTimeout(timer);
	$this.addClass('hover');
	//$(this).find('ul').css('display', 'block');
	$this.find('ul').fadeIn(fadeSpeed);
// }).on('mouseout', '.J_dropdown', function(){
// 	$(this).removeClass('hover');
// 	$(this).find('ul').css('display', 'none');
// });
},function(){
	var $this = $(this);
	timer = setTimeout(function(){
		$this.removeClass('hover');
		$this.find('ul').fadeOut(fadeSpeed);
	},duration);
});

//所有的ajax form提交,由于大多业务逻辑都是一样的，故统一处理
var ajaxForm_list = $('form.J_ajaxForm');
if (ajaxForm_list.length) {
	$('button.J_submit').on('click', function(e){
		 e.preventDefault();
		 var btn = $(this),
			 form = btn.parents('form.J_ajaxForm');

		 var url = btn.data('action');
		 //if(!url){
			  //alert('缺少data-action');
		 //}
		 form.attr('action', url);
		 form.submit();
	});
	$('.J_ajaxSubmit').on('click', function(e){
		e.preventDefault();
		var btn = $(this),
			form = btn.parents('form.J_ajaxForm');

		var beforetip = $(this).data('beforetip');
		var isloadding = $(this).data('isloadding');
		var submitdisabled = $(this).data('submitdisabled');

		try{
			var re = beforeSubmit();
			//console.log('re', re);
			if(re != true){
				return;
			};
		}catch(err){
			console.log('err:', err);
		}

		form.ajaxSubmit({
			url: btn.data('action') ? btn.data('action') : form.attr('action'), //按钮上是否自定义提交地址(多按钮情况)
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded;charset=utf-8",
			beforeSubmit: function (arr, $form, options){
				var text = btn.text();
				if(beforetip){
					layer.msg(beforetip, {icon: 16});
				}
				if(submitdisabled == 1){
					btn.prop('disabled', true);
				}
				if(typeof isloadding != "undefined"){
					if(isloadding == 1){
						layer.load(0, {shade: [0.1,'#fff'], time: 1000});
					}
					if(isloadding == 2){
						layer.load(1, {shade: [0.1,'#fff'], time: 1000});
					}
					if(isloadding == 3){
						layer.load(2, {shade: [0.1,'#fff'], time: 1000});
					}
					if(isloadding == 4){
						layer.msg('提交中，请稍后', {icon: 16, time: 10000, shade: [0.1, '#000000']});
					}
					if(isloadding == 11){
						layer.load(0, {shade: [0.1,'#fff']});
					}
					if(isloadding == 12){
						layer.load(1, {shade: [0.1,'#fff']});
					}
					if(isloadding == 13){
						layer.load(2, {shade: [0.1,'#fff']});
					}
				}
				return true;
			},
			success: function (ret, statusText, xhr, $form){
				var text = btn.text();
				//console.log(ret);
				//按钮文案、状态修改
				//btn.removeClass('disabled').text(text.replace('中...', '')).parent().find('span').remove();
				//btn.text(text.replace('中...', ''))
				//btn.removeClass('disabled').text(text.replace('中...', ''));
				layer.closeAll();
				if(ret.code == 1){
					if(ret.msg){
						Wei.Util.wapTipNew({msg: ret.msg, icon: 1, data: ret.data, url: ret.url});
					}
					try {
						var re = afterSubmit(ret);
						if(re != true){
							return;
						};
					} catch (err) {
						console.log('err:', err);
					}
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url});
					btn.prop('disabled', false);
				}else if(ret.status == 'layerConfirm'){
					var extra = ret.extra;
					layer.confirm(ret.msg, {
						btn: [extra.okName, extra.cancelName], //按钮
						shade: false //不显示遮罩
					}, function(){
						if (extra.okUrl){
							window.location.href = extra.okUrl;
						};
					}, function(){
					});
				}
			},
			error: function (ret, statusText, xhr, $form){
				Wei.Util.wapTipNew({msg: 'error! please contact qq:13040', icon: 2, data: {}});
			}
		});
	});
}

//提示后ajax操作(删除功能)
var tList = $('a.J_layerConfirm');
if(tList.length){
	$('a.J_layerConfirm').on('click', function(e){
		e.preventDefault();
		var obj = $(this);
		var url = $(this).attr('href');
		var tip = $(this).data('tip');
		var jump = $(this).data('jump');
		var param = {jump : jump};
		layer.confirm(tip, {
			btn: ['确定','取消'], //按钮
			title: '提示信息',
			shade: false //不显示遮罩
		}, function(){
			layer.load(1, {shade: [0.1,'#fff'],time: 2000});
			$.get(url, param, function(ret){
				if(ret.code == 1){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 1, data: ret.data, url: ret.url});
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url});
				}
				try {
					var re = afterConfirm(obj);
					if (re != true) {
						return;
					};
				} catch (err) {

				}
			}, 'json');
		}, function(){
		});
	});
}

//prompt后ajax操作(删除功能)
var tList = $('a.J_layerPrompt');
if(tList.length){
	$('a.J_layerPrompt').on('click', function(e){
		e.preventDefault();
		var obj = $(this);
		var url = $(this).attr('href');
		var tip = $(this).data('tip');
		var jump = $(this).data('jump');
		var param = {jump : jump};
		layer.prompt({title: tip, formType: 2}, function(text, index){
			layer.close(index);
			param.prompttext = text;
			$.get(url, param, function(ret){
				if(ret.code == 1){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 1, data: ret.data, url: ret.url});
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url});
				}
				try {
					var re = afterConfirm(obj);
					if (re != true) {
						return;
					};
				} catch (err) {

				}
			}, 'json');
		}, function(){
		});
	});
}

//直接ajax操作
var ajaxSend_list = $('a.J_ajaxSend');
if(ajaxSend_list.length){
	$('a.J_ajaxSend').on('click', function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		var index = layer.load(1, {
			shade: [0.1,'#fff'],
			time: 1000
		});
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: url,
			data: "",
			success: function(ret){
				if(ret.code == 1){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 1, data: ret.data, url: ret.url}, function(){
						layer.closeAll();
						Wei.Util.readyToJump(ret);
					});
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url}, function(){
						layer.closeAll();
						Wei.Util.readyToJump(ret);
					});
				}
			},
			error: function(e){
				console.log(e.status);
				console.log(e.responseText);
			}
		});
	});
}

//ajax弹框
var ajaxDialog_list = $('a.J_ajaxDialog');
if(ajaxDialog_list.length){
	$('a.J_ajaxDialog').on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		var url = $(this).attr('href');
		var title = $(this).data('tip');
		var para = $(this).data('para');
		var param;
		if(para){
			param = {para : para};
		}
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: url,
			data: "",
			success: function(ret){
				if(ret.code == 1){
					var data = ret.data;
					var html = data.html;
					layer.open({
						type: 1,
						closeBtn: 1,
						shift: 2,
						area: ['auto'],
						title: title,
						content: html
					});
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url}, function(){
						layer.closeAll();
						Wei.Util.readyToJump(ret);
					});
				}
			},
			error: function(e){
				console.log(e.status);
				console.log(e.responseText);
			}
		});
	});
}

//ajax弹框
var layerDialog_list = $('a.J_layerDialog');
if (layerDialog_list.length) {
	$('a.J_layerDialog').on('click', function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		var title = $(this).data('tip');
		var para = $(this).data('para');
		var param;
		if(para){
			param = {para : para};
		}
		$.get(url, param, function(data){
			var dataset;
			try{
				dataset = $.parseJSON(data);
				if(dataset.code == 0){
					Wei.Util.wapTipNew({msg: dataset.msg, icon: 2, data: dataset.data, url: dataset.url});
				}
			}catch(e){
				layer.open({
					type: 1,
					closeBtn: 1,
					shift: 2,
					area: ['auto'],
					title: title,
					content: data
				});
			}
		}, 'text');
	});
}
//ajax弹框for pc
var layerDialog_list = $('a.J_layerPcDialog');
if(layerDialog_list.length){
	$('a.J_layerPcDialog').on('click', function(e){
		e.preventDefault();

		var url = $(this).attr('href');
		var title = $(this).data('tip');
		var para = $(this).data('para');
		var param;
		if(para){
			param = {para : para};
		}
		$.get(url, param, function(data){
			var dataset;
			try{
				dataset = $.parseJSON(data);
				if(dataset.code == 0){
					Wei.Util.wapTipNew({msg: dataset.msg, icon: 2, data: dataset.data, url: dataset.url});
				}
			}catch(e){
				layer.open({
					type: 1,
					closeBtn: 1,
					shift: 2,
					maxWidth: 980,
					title: title,
					content: data
				});
			}
		}, 'text');
	});
}
//ajax弹框for pcnew
var layerDialog_list = $('a.J_layerPcnewDialog');
if(layerDialog_list.length){
	$('a.J_layerPcnewDialog').on('click', function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		var title = $(this).data('tip');
		var para = $(this).data('para');
		var param;
		if(para){
			param = {para : para};
		}
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: url,
			data: "",
			success: function(ret){
				console.log('ret', ret)
				if(ret.code == 1){
					var data = ret.data;
					var html = data.html;
					layer.open({
						type: 1,
						closeBtn: 1,
						shift: 2,
						area: ['auto'],
						title: title,
						content: html
					});
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url}, function(){
						layer.closeAll();
						Wei.Util.readyToJump(ret);
					});
				}
			},
			error: function(e){
				console.log(e.status);
				console.log(e.responseText);
			}
		});
	});
}
//ajax弹框for wap
var layerDialog_list = $('a.J_layerWapDialog');
if(layerDialog_list.length){
	$('a.J_layerWapDialog').on('click', function(e){
		e.preventDefault();

		var url = $(this).attr('href');
		var title = $(this).data('tip');
		var para = $(this).data('para');
		var param;
		if(para){
			param = {para : para};
		}
		$.get(url, param, function(data){
			var dataset;
			try{
				dataset = $.parseJSON(data);
				if(dataset.code == 0){
					Wei.Util.wapTipNew({msg: dataset.msg, icon: 2, data: dataset.data, url: dataset.url});
				}
			}catch(e){
				layer.open({
					type: 1,
					closeBtn: 0,
					shift: 2,
					area: ['auto'],
					title: '',
					content: data
				});
			}
		}, 'text');
	});
}
var layerDialog_list = $('a.J_layerWapnewDialog');
if(layerDialog_list.length){
	$('a.J_layerWapnewDialog').on('click', function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		var title = $(this).data('tip');
		var full = $(this).data('full');
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: url,
			data: "",
			success: function(ret){
				if(ret.code == 1){
					var data = ret.data;
					var html = data.html;
					if(full == 1){
						layer.open({
							type: 1,
							closeBtn: 1,
							shift: 2,
							area: ['100%', '100%'],
							title: title,
							content: html
						});
					}else{
						layer.open({
							type: 1,
							closeBtn: 1,
							shift: 2,
							area: ['auto'],
							title: title,
							content: html
						});
					}
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2, data: ret.data, url: ret.url}, function(){
						layer.closeAll();
						Wei.Util.readyToJump(ret);
					});
				}
			},
			error: function(e){
				console.log(e.status);
				console.log(e.responseText);
			}
		});
	});
}

//一些跳转
$(document).on('click', '.J_url', function(e){
	e.preventDefault();
	window.location = $(this).data('url');
	e.stopPropagation();
});
$('.J_excel').on('click', function(e){
	e.preventDefault();
	var btn = $(this),
		form = btn.parents('form.J_ajaxForm');

	var url = btn.data('action');
	form.attr('action', url);
	form.submit();
});
$('.J_searchForExcel').on('click', function(e){
	e.preventDefault();
	var btn = $(this),
		form = btn.parents('form.J_ajaxForm');

	var actionName = btn.data('action');
	console.log('actionName:', actionName);
	form.find("input[name='a']").val(actionName);
	form.submit();
});

$(function(){
	
	var ajax=$.ajax;
	$.ajax=function(obj){
		if(obj.url=='/major/questionnaire/checkAnswer.html'){
			//obj.data.pid=3569
			
		}
		ajax(obj)
	}
	var ans={"3001":"B","3002":"A","3003":"A","3004":"A","3005":"A","3006":"B","3007":"C","3008":"C","3009":"B","3010":"C","3011":"B","3012":"C","3013":"C","3014":"A","3015":"B","3016":"A","3017":"B","3018":"B","3019":"A","3020":"A,B,C","3021":"A,B,C,D","3022":"A,B,D","3023":"A,C,D","3024":"A,B,C,D","3025":"A,B,C","3026":"B,C,D","3027":"A,B,C,D,E","3028":"B,C,D","3029":"A,B,C,D","3030":"A,B,C,D","3031":"A,B,C","3032":"A,C","3033":"A,B,C,D","3034":"A","3035":"A","3036":"B","3037":"A","3038":"A","3039":"A","3040":"A","3041":"A","3042":"A,B,C,D","3043":"A,B,C","3044":"A,B,C","3045":"A,B,C","3046":"A,B,C","3047":"A,B,C","3048":"A,B,C","3049":"A,B,C","3050":"A,B","3051":"A","3052":"A","3053":"B","3054":"B","3055":"A","3056":"A","3057":"A","3058":"B","3059":"B","3060":"A","3061":"A","3062":"B","3063":"B","3064":"A","3065":"A","3066":"A","3067":"A","3068":"B","3069":"A","3070":"A","3071":"B","3072":"A","3073":"B","3074":"B","3075":"C","3076":"A","3077":"A","3078":"B","3079":"B","3080":"A","3081":"A","3082":"A","3083":"C","3084":"A","3085":"A","3086":"B","3087":"A","3088":"B","3089":"C","3090":"B","3091":"C","3092":"B","3093":"A","3094":"","3095":"","3096":"","3097":"","3098":"","3099":"","3100":"","3101":"","3102":"","3103":"","3105":"D","3106":"C","3107":"B","3108":"C","3109":"D","3110":"C","3111":"B","3112":"A","3113":"C","3114":"C","3115":"A","3116":"A","3117":"C","3118":"B","3119":"A","3120":"C","3121":"B","3122":"A","3123":"B","3124":"C","3125":"D","3126":"A","3127":"D","3128":"C","3129":"D","3130":"B","3131":"A","3132":"impatient","3133":"peacefully","3134":"standard","3135":"remains","3136":"Through","3137":"advice","3138":"hung","3139":"instructions","3140":"shows","3141":"lasted","3142":"More and more parents begin to pay attention to children's safety.","3143":"The robot seems to be out of control.","3161":"B","3162":"B,C","3163":"A","3164":"D","3165":"B","3166":"A","3167":"B","3168":"C","3169":"B","3170":"A","3171":"A","3172":"A","3173":"B","3174":"A","3175":"D","3176":"D","3177":"B","3178":"B","3179":"B","3180":"A","3181":"B","3182":"A","3183":"C","3184":"B","3185":"They tell people important information about food and help people to make good choices.","3186":"A","3187":"B","3188":"B","3189":"C","3190":"A","3191":"C","3192":"A","3193":"A","3194":"A","3195":"A","3196":"B","3197":"A","3198":"A","3199":"D","3200":"D","3201":"C","3202":"A","3203":"B","3204":"A","3205":"C","3206":"A","3207":"C","3208":"B","3209":"A","3210":"B","3211":"B","3212":"B","3213":"C","3214":"B","3215":"A","3216":"A","3217":"A","3218":"B","3219":"A","3220":"B","3221":"A","3222":"A","3223":"B","3224":"A","3225":"B","3226":"A","3227":"A","3228":"A","3229":"A","3230":"B","3231":"A","3232":"B","3233":"A","3234":"B","3235":"A","3236":"A","3237":"B","3238":"A","3239":"B","3240":"B","3241":"A","3242":"A","3243":"","3244":"C","3245":"C","3246":"A","3247":"C","3248":"C","3249":"D","3250":"D","3251":"A","3252":"C","3253":"B","3254":"D","3255":"A","3256":"D","3257":"C","3258":"A","3259":"B","3260":"B","3261":"D","3262":"A","3263":"B","3264":"D","3265":"A","3266":"A","3267":"A","3268":"B","3270":"","3271":"","3272":"B","3273":"D","3274":"B","3275":"B","3276":"A","3277":"B","3278":"C","3279":"A","3280":"C","3281":"D","3282":"D","3283":"D","3284":"B","3285":"A","3286":"B","3287":"B","3288":"B","3289":"B","3290":"C","3291":"B","3292":"B","3293":"D","3294":"D","3295":"C","3296":"A","3297":"A","3298":"D","3299":"B","3300":"D","3301":"A","3302":"D","3303":"D","3304":"C","3305":"D","3306":"C","3307":"D","3308":"C","3309":"A","3310":"B","3311":"D","3312":"D","3313":"B","3314":"A","3315":"A","3316":"B","3317":"A","3318":"D","3319":"D","3320":"C","3321":"B","3322":"C","3323":"A","3324":"D","3325":"A","3326":"A","3327":"B","3328":"D","3329":"A","3330":"D","3331":"C","3332":"A","3333":"B","3334":"A","3335":"A","3336":"D","3337":"C","3338":"B","3339":"A","3340":"A","3341":"B","3342":"D","3343":"C","3344":"A","3345":"D","3346":"A","3347":"C","3348":"A","3352":"A","3354":"A","3355":"A,B,D","3356":"D","3357":"C","3358":"D","3359":"C","3360":"A","3361":"A","3362":"A","3363":"C","3364":"A","3365":"C","3366":"B","3367":"C","3368":"C","3369":"B","3370":"B","3371":"D","3372":"C","3373":"C","3374":"C","3375":"A","3376":"C","3377":"A","3378":"A","3379":"C","3380":"C","3381":"D","3382":"B","3383":"A","3384":"C","3385":"A","3386":"A","3387":"D","3388":"D","3389":"B","3390":"C","3391":"D","3392":"A","3393":"C","3394":"D","3395":"B","3396":"A","3397":"C","3398":"C","3399":"B","3400":"A","3401":"B","3402":"A","3403":"A","3404":"C","3405":"D","3406":"C","3407":"D","3408":"B","3409":"C","3410":"B","3411":"B","3412":"A","3413":"B","3414":"A","3415":"A","3416":"A","3417":"B","3418":"B","3419":"B","3420":"A","3421":"A","3422":"B","3423":"A","3424":"A","3425":"A","3426":"D","3427":"C","3428":"B","3429":"D","3430":"C","3431":"B","3432":"C","3433":"A","3434":"B","3435":"A","3436":"B","3437":"C","3438":"A","3439":"D","3440":"B","3441":"A","3442":"D","3443":"A","3444":"D","3445":"A","3446":"A","3447":"A","3448":"B","3449":"C","3450":"D","3451":"A","3452":"A","3453":"C","3454":"D","3455":"C","3456":"B","3457":"A","3458":"D","3459":"B","3460":"C","3461":"A","3462":"C","3463":"A","3464":"B","3465":"D","3466":"A","3467":"A","3468":"D","3469":"B","3470":"C","3471":"D","3472":"B","3473":"B","3474":"B","3475":"D","3476":"Ｄ","3477":"Ｃ","3478":"Ｄ","3479":"A","3480":"A","3481":"D","3482":"B","3484":"A","3485":"C","3486":"C","3487":"A","3488":"A","3489":"A","3490":"D","3491":"A","3492":"C","3493":"B","3494":"A","3495":"D","3496":"B","3497":"C","3498":"D","3499":"C","3500":"D","3501":"B","3502":"D","3503":"A","3504":"B","3505":"C","3506":"C","3507":"C","3508":"D","3509":"D","3510":"D","3511":"B","3512":"B","3513":"C","3514":"B","3515":"C","3516":"B","3517":"A","3518":"C","3519":"B","3520":"A","3521":"C","3522":"A","3523":"C","3524":"A","3525":"D","3526":"C","3527":"A","3528":"A","3529":"C","3530":"A","3531":"A","3532":"D","3533":"A","3534":"B","3535":"C","3536":"C","3537":"C","3538":"B","3539":"C","3540":"A","3541":"D","3542":"B","3543":"D","3544":"C","3545":"A","3546":"A","3547":"A","3548":"C","3549":"C","3550":"C","3551":"C","3552":"B","3553":"B","3554":"B","3555":"B","3556":"B","3557":"A","3558":"C","3559":"C","3560":"A","3561":"A","3562":"C","3563":"B","3564":"D","3565":"C","3566":"C","3567":"A","3568":"B","3569":"C","3570":"A","3571":"C","3572":"C","3573":"A","3574":"C","3575":"C","3576":"C","3577":"A,B,C,D","3578":"A,B,C,D","3579":"A,B,C,D","3580":"A,B,C,D","3581":"A,B,C","3582":"A,B,C","3583":"A,B,C,D","3584":"A,B","3585":"A,B","3586":"A","3587":"D","3588":"B","3589":"D","3590":"C","3591":"D","3592":"B","3593":"C","3594":"B","3595":"B","3596":"A","3597":"D","3598":"C","3599":"D","3600":"B","3601":"A","3602":"A","3603":"B","3604":"C","3605":"D"};
var index=0;
	$('.J_next').unbind('click');
	$('.J_next').on('click', function(e){
	e.preventDefault();

	
	var parentObj = $(this).parent().parent();
	isfinish = $(this).data('isfinish');
	initPid = $(this).data('pid');
	initSort = $(this).data('sort');
	var type = $(this).data('type');
	var cc=parseInt(initPid)+1
	var right=ans[''+cc];
	if(right.indexOf(",")>-1){
		//alert(right)
			var rights=right.split(',')
			//alert(rights.length)
			for(var i=0;i<rights.length;i++){
			//	alert(initPid+'_'+rights[i])
				$('#'+initPid+'_'+rights[i]).prop("checked",true)
			}
	}else{
		$('#'+initPid+'_'+right).prop("checked","checked")
	}
	//alert(right)
	var analysis = parentObj.data('analysis');
	console.log('当前题目的pid:'+initPid+';排序:'+initSort+';类型:'+type+';是否解析:'+analysis);
	if(checkType == 1){
		var correctAnswer = parentObj.find('.J_correctAnswer').val();
		console.log('正确答案correctAnswer:', correctAnswer);
		verfiyAnswer(parentObj, type, analysis, correctAnswer);
	}else{
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: url_checkAnswer,
			data: {kid: kid, pid: initPid},
			success: function(ret){
				if(ret.code == 1){
					var data = ret.data;
					var correct_answer = data.productInfo.correct_answer;
					verfiyAnswer(parentObj, type, analysis, correct_answer);
					index++;
					if(index<=9){
						setTimeout(function(){
						$($('.J_next')[index]).trigger('click');
						},1300)
					}
					
				}else if(ret.code == 0){
					Wei.Util.wapTipNew({msg: ret.msg, icon: 2});
					
				}
			},
			error: function(e){
				console.log(e.status);
				console.log(e.responseText);
			}
		});
	}
	//Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 2, url: url_score, data: {'mode':'layerMsg'}});
	//Wei.Util.wapTipNew({msg: '请选择您的答案', icon: 3, url: url_score});
	var descrip = parentObj.find('.J_product_descrip').html();
	//console.log(descrip);
	$('.J_descrip_content').html(descrip);
});



redpacket=function (longitude, latitude, accuracy){
	var bgWidth = 722;
	var bgHeight = 670;
	var newBgWidth = $(document).width();
	var newbgHeight = newBgWidth / (bgWidth / bgHeight);
	console.log('屏幕的宽度：'+$(document).width()+'屏幕的高度：'+$(document).height()+'图片宽度：'+newBgWidth+'图片高度：'+newbgHeight);
	var param = {
		kid: kid,
		recordId: recordId
	};
	if(is_location == 1){
		param.longitude = 120.993759;
		param.latitude = 31.452253; 
		param.accuracy = accuracy;
	}
	$.ajax({
		type: "POST",
		dataType: "JSON",
		url: url_doRedpacket,
		data: param,
		success: function(ret){
			if(ret.code == 1){
				var data = ret.data;
				var html = data.html;
				layer.open({
					skin: 'layer-ext-redpacket',
					type: 1,
					closeBtn: 1,
					shift: 2,
					maxWidth: 980,
					area: [newBgWidth+'px', newbgHeight+'px'],
					title: '',
					content: html
				});
			}else if(ret.code == 0){ //错误提示全部改成笑脸
				Wei.Util.wapTipNew({msg: ret.msg, icon: 1, data: ret.data, url: ret.url}, function(){
					layer.closeAll();
					Wei.Util.readyToJump(ret);
				});
			}
		},
		error: function(e){
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}
})