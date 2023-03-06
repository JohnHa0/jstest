!function(){
		try{
	//alert(GD.publishedFormData.data.publishedForm.form.fields.nodes.length)
	//var nodes=GD.publishedFormData.data.publishedForm.form.fields.nodes;
	var nodes=GD.publishedFormData.data.publishedForm.form.fields.nodes

for(var tt=0;tt<nodes.length;tt++){
	if(nodes[tt].__typename=="RadioButton"){
		var right=nodes[tt].extraConfigurableSettings.answers[0].correctAnswer;
		//alert(right)
		for(var kk=0;kk<nodes[tt].choices.length;kk++){
			//for(var j=0;j<right.length;j++){
			//	alert(right)
				if(right==nodes[tt].choices[kk].value){
					//GD.data.publishedForm.form.fields.nodes[i].choices[k].name="---------------"
					GD.publishedFormData.data.publishedForm.form.fields.nodes[tt].choices[kk].name="---------------"
				}
			//}
		}
	
	}
	if(nodes[tt].label=="填空题"){
		var right=nodes[tt].extraConfigurableSettings.answers[0].correctAnswer;
		nodes[tt].notes="    "+right;
	
	}
}
setTimeout(function(){
	//alert($($("input")[1]).parent().parent().parent().parent().parent().html())
	//	alert($($("input")[1]).parent().parent().parent().parent().html())
	//	$("input").val('xxxx')
	//fillingDuration:parseFloat((22+parseInt(6000*Math.random())/1000).toFixed(3))
	$($("input")[0]).val('刘晶')
	$($("input")[1]).val('18014246678')
alert($($("input")[0]).val())
	//$($("input")[2]).val('上海市长宁区江苏路舜元发展大厦2501')//上海市浦东新区张江镇古桐五村丰巢快递柜代收
	//alert($("input[name=field_1]").parent().parent().html())
	$("input[name=field_51]").val('刘晶')
	$("input[name=field_53]").val('18014246678')
	$("input[name=field_52]").val('上海市长宁区江苏路舜元发展大厦2501')
	$(".other-choice-option-name").each(function(){
		if($(this).html().indexOf('----')>-1){
			$(this).parent().trigger('click')
		}
	})
	
	//填空题
	var nodes=GD.publishedFormData.data.publishedForm.form.fields.nodes

	for(var tt=0;tt<nodes.length;tt++){
		if(nodes[tt].label=="填空题"){
			var right=nodes[tt].extraConfigurableSettings.answers[0].correctAnswer;
			$("input[name="+nodes[tt].apiCode+"]").val(right)
		
		}
	}
},5000)
} catch (e) { alert(e.name + ": " + e.message); } 

//刘晶 320925198907182023 13814929369  269569205@163.com 秋衣 
//定佑雄 422323195910024516  刘艳 18205034470 269569205@qq.com lius1510 心想事成
//陶敏  342625199103210715  13812263438 s1399520@qq.com skycityhappy 秋衣
//刘成文 320925194803212517  18452411602  99164989@qq.com 米粉
//张祥英   320925195312072526 13912367484  627268498@qq.com 香肠
//朱连强 341204197805062215  15052202321 bigbird0@qq.com d哥
//王庭能  522636198810101030  18800561502  337001765@qq.com  浩南

//孙远 421124199711106396  15051327017  lovemerling@qq.com  白云
//葛弯弯 411425199002103407 13962021537 1915077634@@qq.com  刘成文   
//许红芳 320925197801206729 13813225967 ys2920zpfn5864@163.com 陶敏
//谈友林 320925199102222037  13770203281 au0109foli5719@163.com  最爱
//学法典 一条鱼   刘晶晶 13814929369   露姐 沈娅 18452411602 627268498qq.com  京东客服 谈友林 18205034470 99164989  兔兔 许红芳 13912367484 s1399520@qq.com
//13861864777
//13805116569 高全勇
//17327402146 陈栋梁
//	'phone':"15950348766",'name':"刘广东",'memo':"220284198706254359",'timer':tt}),
//	'phone':"15852828806",'name':"刘艳",'memo':"341722198703041389",'timer':tt}),
//	'phone':"15061665288",'name':"许秀记",'memo':"420222197107241226",'timer':tt}),
//'phone':"13815555118",'name':"刘荣",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13524568836",'name':"徐芹",'memo':"411522198509027804",'timer':tt}),
//'phone':"18014246678",'name':"刘星",'memo':"320925198711141510",'timer':tt}),
//	'phone':"18168867355 ",'name':"蔡香巧",'memo':"440902197312249645",'timer':tt}),-----
//	'phone':"18052482091",'name':"费亦玉",'memo':"140932199009040167",'timer':tt}),
//	'phone':"18914167267",'name':"蒋旦",'memo':"140723197101270495",'timer':tt}),
//	'phone':"18914148845",'name':"昌腮羽",'memo':"530821197107201517",'timer':tt}),
//	'phone':"18013407603",'name':"薛安春",'memo':"341722198703041389",'timer':tt}),
//	'phone':"18013400651",'name':"谢建华",'memo':"220284198706254359",'timer':tt}),
//	'phone':"18915321250",' ':"郜晓蕾",'memo':"420222197107241226",'timer':tt}),----
//	'phone':"18168909051",'name':"茅源",'memo':"141002197410036038",'timer':tt}),
//	'phone':"18961849736",'name':"水博博",'memo':"131122198612114966",'timer':tt}),
//	'phone':"13373659015",'name':"邹灵卉",'memo':"411522198509027804",'timer':tt}),
//	'phone':"18915299015",'name':"奚代蓝",'memo':"640423198611217746",'timer':tt}),
//	'phone':"18115768791",'name':"陈圣熙",'memo':"640423198611217746",'timer':tt}),
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

