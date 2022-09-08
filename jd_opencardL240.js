/*
9.8-9.16 福满中秋 聚惠相随
开卡脚本,一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 9.8-9.16 福满中秋 聚惠相随 ]

请求太频繁会被黑ip
请更换IP后再执行脚本

cron:29 11,19 8-16 9 *
============Quantumultx===============
[task_local]
#9.8-9.16 福满中秋 聚惠相随
29 11,12,16,19 8-16 9 * jd_opencardL240.js, tag=9.8-9.16 福满中秋 聚惠相随, enabled=true

*/

const $ = new Env('9.8-9.16 福满中秋 聚惠相随')
const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
const notify=$.isNode()?require('./sendNotify'):'';
let opencard_draw=$.isNode()?process.env.opencard_draw?process.env.opencard_draw:'0':$.getdata('opencard_draw')?$.getdata('opencard_draw'):'0';
let opencard_addCart=$.isNode()?process.env.opencard_addCart?process.env.opencard_addCart:false:$.getdata('opencard_addCart')?$.getdata('opencard_addCart'):false;
const JD_SIGN_API=process.env.JD_SIGN_API||'http://api.nolanstore.top/sign';
let cookiesArr=[],cookie='';
let lz_cookie={};
if($.isNode()){
	Object.keys(jdCookieNode).forEach(O0000OQ=>{
		cookiesArr.push(jdCookieNode[O0000OQ]);
	});
	if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
}else{
	cookiesArr=[$.getdata('CookieJD'),$.getdata('CookieJD2'),...jsonParse($.getdata('CookiesJD')||'[]').map(Q0O0OOO=>Q0O0OOO.cookie)].filter(QQOQQ00=>!!QQOQQ00);
}
allMessage='';
message='';
$.hotFlag=false;
$.outFlag=false;
$.activityEnd=false;
let lz_jdpin_token_cookie='';
let activityCookie='';
!(async()=>{
	if(!cookiesArr[0]){
		$.msg($.name,'【提示】请先获取cookie\n直接使用NobyDa的京东签到获取','https://bean.m.jd.com/',{'open-url':'https://bean.m.jd.com/'});
		return;
	}
	authorCodeList=await getAuthorCodeList('http://code.kingran.ga/240.json');
	$.activityId='5d6b66ed10a8456fa4e161af5d55e1b9';
	$.authorCode='5b7cf3dde1f14281b29418c0aac2965b';
	$.shareUuid=$.authorCode;
	console.log(('活动入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId='+$.activityId)+'&shareUuid='+$.shareUuid);
	console.log('❖ 默认不加购，如需加购请设置环境变量 [opencard_addCart]，变量值为 true');
	console.log('❖ 默认不抽奖，如需抽奖请设置环境变量 [opencard_draw]，变量值为抽奖次数');
	for(let Q00OQQ0=0;Q00OQQ0<cookiesArr.length;Q00OQQ0++){
		cookie=cookiesArr[Q00OQQ0];
		originCookie=cookiesArr[Q00OQQ0];
		if(cookie){
			$.UserName=decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/)&&cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
			$.index=(Q00OQQ0+1);
			message='';
			$.bean=0;
			$.hotFlag=false;
			$.nickName='';
			console.log(('\n******开始【京东账号'+$.index+'】')+($.nickName||$.UserName)+'*********\n');
			await getUA();
			await run();
			await $.wait(1200);
			if($.outFlag||$.activityEnd)break;
		}
	}
	if($.outFlag){
		let Q0O000O='此ip已被限制，请更换IP后再执行脚本';
		$.msg($.name,'',''+Q0O000O);
		if($.isNode())await notify.sendNotify(''+$.name,''+Q0O000O);
	}
	if(allMessage){
		$.msg($.name,'',''+allMessage);
	}
})().catch(O0000O0=>$.logErr(O0000O0)).finally(()=>$.done());
async function run(){
	try{
		$.hasEnd=true;
		$.endTime=0;
		lz_jdpin_token_cookie='';
		$.Token='';
		$.Pin='';
		let O0O0QOQ=false;
		await getToken();
		if($.Token==''){
			console.log('获取[token]失败！');
			return;
		}
		await getCk();
		if(activityCookie==''){
			console.log('获取cookie失败');
			return;
		}
		if($.activityEnd===true){
			console.log('活动结束');
			return;
		}
		if($.outFlag){
			console.log('此ip已被限制，请更换IP后再执行脚本\n');
			return;
		}
		await takePostRequest('getMyPing');
		if(!$.Pin){
			console.log('获取[Pin]失败！');
			return;
		}
		await takePostRequest('accessLogWithAD');
		await takePostRequest('activityContent');
		if($.hotFlag)return;
		if(!$.actorUuid){
			console.log('获取不到[actorUuid]退出执行，请重新执行');
			return;
		}
		console.log($.actorUuid);
		if(($.hasEnd===true)||(Date.now()>$.endTime)){
			$.activityEnd=true;
			console.log('活动结束');
			return;
		}
		await takePostRequest('drawContent');
		$.openList=[];
		$.allOpenCard=false;
		await takePostRequest('checkOpenCard');
		await takePostRequest('taskRecord');
		await $.wait(1000);
		await takePostRequest('assist');
		if($.allOpenCard==false){
			console.log('开卡任务：');
			for(o of $.openList){
				$.openCard=false;
				if(!$.openVenderId.includes(o.value*1)){
					O0O0QOQ=true;
					$.shopactivityId='';
					$.joinVenderId=o.venderId||o.value;
					await getshopactivityId();
					for(let OO0QQQO=0;OO0QQQO<Array(5).length;OO0QQQO++){
						if(OO0QQQO>0)console.log('第'+OO0QQQO+'次 重新开卡');
						await joinShop();
						await $.wait(700);
						if($.errorJoinShop.indexOf('活动太火爆，请稍后再试')==-1&&($.errorJoinShop.indexOf('加入店铺会员失败')==-1)){
							break;
						}
					}
					if($.errorJoinShop.indexOf('活动太火爆，请稍后再试')>-1){
						console.log('开卡失败❌ ，重新执行脚本');
					}else{
						$.joinStatus=true;
					}
					await takePostRequest('activityContent');
					await $.wait(1000);
				}
			}
		}else{
			console.log('已全部开卡');
		}
		if(!$.followShop&&!$.outFlag){
			console.log('');
			await takePostRequest('followShop');
			await $.wait(parseInt((Math.random()*1000)+1200,10));
		}
		if(opencard_addCart){
			if(!$.addCart&&!$.outFlag){
				await takePostRequest('addCart');
				await $.wait(parseInt(Math.random()*1000+1200,10));
			}
		}
		console.log('去助力 -> '+$.shareUuid);
		await takePostRequest('assist');
		await $.wait(parseInt(Math.random()*1000+1200,10));
		console.log(($.assistState===1)?'助力成功 ✅':$.assistState===10?'已经助力过了哟~':$.assistState===21?'未全部开卡或者其他原因':($.assistState===11)?'已助力其他用户':($.assistState===0)?'不能助力自己':('未知-'+$.assistState));
		if(O0O0QOQ){
			await takePostRequest('activityContent');
		}
		if((opencard_draw+'')!=='0'){
			$.runFalag=true;
			let QQQ0Q0Q=parseInt($.score/100);
			opencard_draw=parseInt(opencard_draw,10);
			if(QQQ0Q0Q>opencard_draw)QQQ0Q0Q=opencard_draw;
			console.log('已设置抽奖次数为'+QQQ0Q0Q+'次，当前有'+$.score+'金币');
			for(m=1;QQQ0Q0Q--;m++){
				console.log('进行第'+m+'次抽奖');
				await takePostRequest('startDraw');
				if($.runFalag==false)break;
				if(Number(QQQ0Q0Q)<=0)break;
				if(m>=5){
					console.log('抽奖太多次，多余的次数请再执行脚本');
					break;
				}
				await $.wait(parseInt(Math.random()*2000+2000,10));
			}
		}
		if($.outFlag){
			console.log('🚫 此ip已被限制，请更换IP后再执行脚本\n');
			return;
		}
		console.log('\n当前已邀请'+$.assistCount+'人');
		await takePostRequest('drawRecord');
		if($.index==1){
			//$.shareUuid=$.actorUuid;
			console.log('后面的号都会助力 -> '+$.shareUuid);
		}
		if($.index%5==0)await $.wait(parseInt(Math.random()*5000+15000,10));
	}catch(O0O0QO0){
		console.log(O0O0QO0);
	}
}
async function takePostRequest(QQQOO00){
	if($.outFlag)return;
	let OQQ0O0Q='https://lzdz1-isv.isvjcloud.com';
	let QQQQ0OQ='';
	let Q0Q0000='POST';
	let O0QQ00O='';
	switch(QQQOO00){
		case 'getSimpleActInfoVo':
			url=OQQ0O0Q+'/dz/common/getSimpleActInfoVo';
			QQQQ0OQ='activityId='+$.activityId;
			break;
		case 'getMyPing':
			url=OQQ0O0Q+'/customer/getMyPing';
			QQQQ0OQ='userId=1000000904&token='+$.Token+'&fromType=APP';
			break;
		case 'accessLogWithAD':
			url=OQQ0O0Q+'/common/accessLogWithAD';
			let QO0QQQ0=OQQ0O0Q+'/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid;
			QQQQ0OQ='venderId=1000000904&code=99&pin='+encodeURIComponent($.Pin)+'&activityId='+$.activityId+'&pageUrl='+encodeURIComponent(QO0QQQ0)+'&subType=app&adSource=';
			break;
		case 'getUserInfo':
			url=OQQ0O0Q+'/wxActionCommon/getUserInfo';
			QQQQ0OQ='pin='+encodeURIComponent($.Pin);
			break;
		case 'activityContent':
			url=OQQ0O0Q+'/dingzhi/joinCommon/activityContent';
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&pinImg='+encodeURIComponent('https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png')+'&nick='+encodeURIComponent($.nickname)+'&cjyxPin=&cjhyPin=&shareUuid='+$.shareUuid;
			break;
		case 'drawContent':
			url=OQQ0O0Q+'/dingzhi/joinCommon/drawContent';
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'checkOpenCard':
			url=OQQ0O0Q+'/dingzhi/joinCommon/taskInfo';
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'assist':
			url=OQQ0O0Q+'/dingzhi/joinCommon/assist';
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&uuid='+$.actorUuid+'&shareUuid='+$.shareUuid;
			break;
		case 'taskRecord':
			url=OQQ0O0Q+'/dingzhi/joinCommon/taskRecord';
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&uuid='+$.actorUuid+'&taskType=';
			break;
		case 'followShop':
			url=OQQ0O0Q+'/dingzhi/joinCommon/doTask';
			QQQQ0OQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin)+'&taskType=20&taskValue=';
			break;
		case 'addCart':
			url=OQQ0O0Q+'/dingzhi/joinCommon/doTask';
			QQQQ0OQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin)+'&taskType=23&taskValue=';
			break;
		case 'sign':
		case 'browseGoods':
			url=OQQ0O0Q+'/dingzhi/opencard/'+QQQOO00;
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			if(QQQOO00=='browseGoods')QQQQ0OQ+='&value='+$.visitSkuValue;
			break;
		case 'viewVideo':
		case 'visitSku':
		case 'toShop':
		case 'addSku':
			url=OQQ0O0Q+'/dingzhi/opencard/'+QQQOO00;
			let OO00QOQ='';
			let OO00QOO='';
			if(QQQOO00=='viewVideo'){
				OO00QOQ=31;
				OO00QOO=31;
			}else if(QQQOO00=='visitSku'){
				OO00QOQ=5;
				OO00QOO=$.visitSkuValue||5;
			}else if(QQQOO00=='toShop'){
				OO00QOQ=14;
				OO00QOO=$.toShopValue||14;
			}else if(QQQOO00=='addSku'){
				OO00QOQ=2;
				OO00QOO=$.addSkuValue||2;
			}
			QQQQ0OQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&taskType='+OO00QOQ+'&taskValue='+OO00QOO;
			break;
		case 'drawRecord':
			url=OQQ0O0Q+'/dingzhi/joinCommon/drawRecord';
			QQQQ0OQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'getShareRecord':
			url=OQQ0O0Q+'/dingzhi/joinCommon/shareRecord';
			QQQQ0OQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin)+'&num=30';
			break;
		case 'startDraw':
			url=OQQ0O0Q+'/dingzhi/joinCommon/startDraw';
			QQQQ0OQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin);
			break;
		default:
			console.log('错误'+QQQOO00);
	}
	let OO0OOQ0=getPostRequest(url,QQQQ0OQ,Q0Q0000);
	return new Promise(async Q0OOQQQ=>{
		$.post(OO0OOQ0,(OQQQQ0O,Q0OO000,Q0OOQQO)=>{
			try{
				setActivityCookie(Q0OO000);
				if(OQQQQ0O){
					if(Q0OO000&&typeof Q0OO000.statusCode!='undefined'){
						if(Q0OO000.statusCode==493){
							console.log('此ip已被限制，请更换IP后再执行脚本\n');
						}
					}
					console.log(''+$.toStr(OQQQQ0O,OQQQQ0O));
					console.log(QQQOO00+' API请求失败，请检查网路重试');
				}else{
					dealReturn(QQQOO00,Q0OOQQO);
				}
			}catch(O0O000O){
				console.log(O0O000O,Q0OO000);
			}finally{
				Q0OOQQQ();
			}
		});
	});
}
async function dealReturn(Q0QQOQQ,O0Q0OQO){
	let OO0OOQO='';
	try{
		if((Q0QQOQQ!='accessLogWithAD')||Q0QQOQQ!='drawContent'){
			if(O0Q0OQO){
				OO0OOQO=JSON.parse(O0Q0OQO);
			}
		}
	}catch(Q0QQOOO){
		console.log(Q0QQOQQ+' 执行任务异常');
		console.log(O0Q0OQO);
		$.runFalag=false;
	}
	try{
		switch(Q0QQOQQ){
			case 'getSimpleActInfoVo':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&OO0OOQO.result===true){
						if(typeof OO0OOQO.data.shopId!='undefined')$.shopId=OO0OOQO.data.shopId;
						if(typeof OO0OOQO.data.venderId!='undefined')$.venderId=OO0OOQO.data.venderId;
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'getMyPing':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&OO0OOQO.result===true){
						if(OO0OOQO.data&&typeof OO0OOQO.data.secretPin!='undefined')$.Pin=OO0OOQO.data.secretPin;
						if(OO0OOQO.data&&(typeof OO0OOQO.data.nickname!='undefined'))$.nickname=OO0OOQO.data.nickname;
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'getUserInfo':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&OO0OOQO.result===true){
						if(OO0OOQO.data&&(typeof OO0OOQO.data.yunMidImageUrl!='undefined'))$.attrTouXiang=OO0OOQO.data.yunMidImageUrl||'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'activityContent':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&OO0OOQO.result===true){
						$.endTime=OO0OOQO.data.endTime||OO0OOQO.data.activityVo&&OO0OOQO.data.activityVo.endTime||OO0OOQO.data.activity.endTime||0;
						$.hasEnd=OO0OOQO.data.isEnd||false;
						$.score=OO0OOQO.data.actorInfo.score||0;
						//$.actorUuid=OO0OOQO.data.actorInfo.uuid||'';
						$.assistCount=OO0OOQO.data.actorInfo.assistCount||0;
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case'assist':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&(OO0OOQO.result===true)){
						$.assistState=OO0OOQO.data.assistState||0;
						$.allOpenCard=OO0OOQO.data.openCardInfo.openAll||false;
						$.openVenderId=OO0OOQO.data.openCardInfo.openVenderId||[];
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'taskRecord':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&(OO0OOQO.result===true)){
						$.followShop=OO0OOQO.data['20'].recordCount||0;
						$.addCart=OO0OOQO.data['23'].recordCount||0;
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'checkOpenCard':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&(OO0OOQO.result===true)){
						let QO00QOQ=OO0OOQO.data['10'].settingInfo||[];
						let OO0QQOQ=OO0OOQO.data.cardList||[];
						let QQQO0QQ=OO0OOQO.data.openCardList||[];
						$.openList=[...OO0QQOQ,...QO00QOQ,...QQQO0QQ];
						$.openCardScore1=OO0OOQO.data.score1||0;
						$.openCardScore2=OO0OOQO.data.score2||0;
						$.drawScore=OO0OOQO.data.drawScore||0;
						if(OO0OOQO.data.beans||OO0OOQO.data.addBeanNum)console.log('开卡获得：'+(OO0OOQO.data.beans||OO0OOQO.data.addBeanNum)+'京豆 🐶');
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'followShop':
			case 'viewVideo':
			case 'visitSku':
			case 'toShop':
			case'addSku':
			case 'sign':
			case 'addCart':
			case 'browseGoods':
			case 'startDraw':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&(OO0OOQO.result===true)){
						if(typeof OO0OOQO.data=='object'){
							let QQQO0QO='';
							let OQ0O0OQ='抽奖';
							if(OO0OOQO.data.addBeanNum){
								QQQO0QO=OO0OOQO.data.addBeanNum+'京豆';
							}
							if(OO0OOQO.data.addPoint){
								QQQO0QO+=' '+OO0OOQO.data.addPoint+'游戏机会';
							}
							if(Q0QQOQQ=='followShop'){
								OQ0O0OQ='关注';
								if(OO0OOQO.data.beans!='0'){
									QQQO0QO+=OO0OOQO.data.beans+'京豆 🐶';
								}
							}else if((Q0QQOQQ=='addSku')||Q0QQOQQ=='addCart'){
								OQ0O0OQ='加购';
								if(OO0OOQO.data.beans!='0'){
									QQQO0QO+=OO0OOQO.data.beans+'京豆 🐶';
								}
							}else if(Q0QQOQQ=='viewVideo'){
								OQ0O0OQ='热门文章';
							}else if(Q0QQOQQ=='toShop'){
								OQ0O0OQ='浏览店铺';
							}else if(Q0QQOQQ=='visitSku'||(Q0QQOQQ=='browseGoods')){
								OQ0O0OQ='浏览商品';
							}else if(Q0QQOQQ=='sign'){
								OQ0O0OQ='签到';
							}else{
								let OQQ00Q0=typeof OO0OOQO.data.drawOk==='object'&&OO0OOQO.data.drawOk||OO0OOQO.data;
								QQQO0QO=OQQ00Q0.drawOk==true&&OQQ00Q0.name||'';
							}
							if(!QQQO0QO){
								QQQO0QO='空气 💨';
							}
							console.log(OQ0O0OQ+'获得：'+(QQQO0QO||O0Q0OQO));
						}else{
							console.log(''+O0Q0OQO);
						}
					}else if(OO0OOQO.errorMessage){
						$.runFalag=false;
						console.log(''+(OO0OOQO.errorMessage||''));
					}else{
						console.log(''+O0Q0OQO);
					}
				}else{
					console.log(''+O0Q0OQO);
				}
				break;
			case 'drawRecord':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&(OO0OOQO.result===true)){
						let O0QQOQQ=0;
						for(let O0QOOQ0 of OO0OOQO.data){
							infoType=O0QOOQ0.infoType;
							infoName=O0QOOQ0.infoName;
							switch(infoType){
								case 6:
									infoName=Number(infoName.replace('京豆',''));
									O0QQOQQ+=infoName;
									break;
								case 7:
									console.log('🎉 恭喜获得实物 '+infoName+' ，请前往活动页填写收货地址~');
									await notify.sendNotify(''+$.name,'【账号'+$.UserName+'】抽中'+infoName+'，请前往活动页填写收货地址领取。');
									break;
								case 13:
									console.log('🎉 恭喜获得'+infoName);
									await notify.sendNotify(''+$.name,'【账号'+$.UserName+'】抽中'+infoName);
									break;
							}
						}
						if(O0QQOQQ>0){
							console.log('当前累计获得 '+O0QQOQQ+' 京豆 🐶');
						}
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case'getShareRecord':
				if(typeof OO0OOQO=='object'){
					if(OO0OOQO.result&&(OO0OOQO.result===true)&&OO0OOQO.data){
						$.ShareCount=OO0OOQO.data.shareList.length;
						$.log('=========== 你邀请了:'+$.ShareCount+'个\n由于接口数据只有30个 故邀请大于30个的需要自行判断\n');
					}else if(OO0OOQO.errorMessage){
						console.log(Q0QQOQQ+' '+(OO0OOQO.errorMessage||''));
					}else{
						console.log(Q0QQOQQ+' '+O0Q0OQO);
					}
				}else{
					console.log(Q0QQOQQ+' '+O0Q0OQO);
				}
				break;
			case 'accessLogWithAD':
			case 'drawContent':
				break;
			default:
				console.log(Q0QQOQQ+'-> '+O0Q0OQO);
		}
		if(typeof OO0OOQO=='object'){
			if(OO0OOQO.errorMessage){
				if(OO0OOQO.errorMessage.indexOf('火爆')>-1){
					$.hotFlag=true;
				}
			}
		}
	}catch(OQQO0QO){
		console.log(OQQO0QO);
	}
}
function getPostRequest(QQ0QO0Q,QQ0QO0O,QO0QOQ0='POST'){
	let O0QOOQO={'Accept':'application/json','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'User-Agent':$.UA,'X-Requested-With':'XMLHttpRequest'};
	if(QQ0QO0Q.indexOf('https://lzdz1-isv.isvjcloud.com')>-1){
		O0QOOQO.Referer='https://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid;
		O0QOOQO.Cookie=''+((lz_jdpin_token_cookie&&lz_jdpin_token_cookie)||'')+($.Pin&&('AUTH_C_USER='+$.Pin+';')||'')+activityCookie;
	}
	return{'url':QQ0QO0Q,'method':QO0QOQ0,'headers':O0QOOQO,'body':QQ0QO0O,'timeout':30000};
}
async function getToken(){
	await getSign('isvObfuscator',{'id':JD_SIGN_API,'url':'https://lzdz1-isv.isvjcloud.com'});
	let QQ00O0O={'url':'https://api.m.jd.com/client.action?functionId=isvObfuscator','headers':{'Host':'api.m.jd.com','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)','Accept-Language':'zh-Hans-CN;q=1','Accept-Encoding':'gzip, deflate, br'},'body':''+$.Signz};
	return new Promise(QO0Q00Q=>{
		$.post(QQ00O0O,(QQ00O0Q,O0QQQQ0,O0QQQQQ)=>{
			try{
				if(QQ00O0Q){
					$.log(QQ00O0Q);
				}else{
					if(O0QQQQQ){
						O0QQQQQ=JSON.parse(O0QQQQQ);
						if(O0QQQQQ.code==='0'){
							$.Token=O0QQQQQ.token;
						}
					}else{
						$.log('京东返回了空数据');
					}
				}
			}catch(OQ00Q00){
				$.log(OQ00Q00);
			}finally{
				QO0Q00Q();
			}
		});
	});
}
function getSign(QO00OOO,Q000OQO){
	let OQ0OO0O={'fn':QO00OOO,'body':JSON.stringify(Q000OQO)};
	let O0OOQOO={'url':JD_SIGN_API,'body':JSON.stringify(OQ0OO0O),'headers':{'Content-Type':'application/json'},'timeout':30000};
	return new Promise(async OOQOOQQ=>{
		$.post(O0OOQOO,(QQ0QQ0O,OOQ0QQQ,OQ0OO0O)=>{
			try{
				if(QQ0QQ0O){
					console.log(''+JSON.stringify(QQ0QQ0O));
					console.log($.name+' getSign API请求失败，请检查网路重试');
				}else{
					OQ0OO0O=JSON.parse(OQ0OO0O);
					if((typeof OQ0OO0O==='object')&&OQ0OO0O&&OQ0OO0O.body){
						$.Signz=OQ0OO0O.body||'';
					}else{
						console.log('获取服务失败~~');
					}
				}
			}catch(Q0Q0QO0){
				$.logErr(Q0Q0QO0,OOQ0QQQ);
			}finally{
				OOQOOQQ(OQ0OO0O);
			}
		});
	});
};
function getCk(){
	return new Promise(O0OOQO0=>{
		let OQ0Q0OO={'url':'https://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid,'followRedirect':false,'headers':{'User-Agent':$.UA},'timeout':30000};
		$.get(OQ0Q0OO,async(QQ00O00,OOQQQO0,OOQOOQ0)=>{
			try{
				if(QQ00O00){
					if(OOQQQO0&&(typeof OOQQQO0.statusCode!='undefined')){}
					console.log(''+$.toStr(QQ00O00));
					console.log($.name+' cookie API请求失败，请检查网路重试');
				}else{
					let OO0QOQQ=OOQOOQ0.match(/(活动已经结束)/)&&OOQOOQ0.match(/(活动已经结束)/)[1]||'';
					if(OO0QOQQ){
						$.activityEnd=true;
						console.log('活动已结束');
					}
					setActivityCookie(OOQQQO0);
				}
			}catch(QQ0Q0QQ){
				$.logErr(QQ0Q0QQ,OOQQQO0);
			}finally{
				O0OOQO0();
			}
		});
	});
}
function setActivityCookie(QOQO000){
	if(QOQO000.headers['set-cookie']){
		cookie=originCookie+';';
		for(let OQ0QQ0Q of QOQO000.headers['set-cookie']){
			lz_cookie[OQ0QQ0Q.split(';')[0].substr(0,OQ0QQ0Q.split(';')[0].indexOf('='))]=OQ0QQ0Q.split(';')[0].substr(OQ0QQ0Q.split(';')[0].indexOf('=')+1);
		}
		for(const OQ0Q0Q0 of Object.keys(lz_cookie)){
			cookie+=(OQ0Q0Q0+'='+lz_cookie[OQ0Q0Q0]+';');
		}
		activityCookie=cookie;
	}
}
async function getUA(){
	$.UA='jdapp;iPhone;10.1.4;13.1.2;'+randomString(40)+';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}
function randomString(Q00QOQQ){
	Q00QOQQ=(Q00QOQQ||32);
	let QOQOQO0='abcdef0123456789',OOQ0QOO=QOQOQO0.length,QQ0OO0O='';
	for(i=0;i<Q00QOQQ;i++)QQ0OO0O+=QOQOQO0.charAt(Math.floor(Math.random()*OOQ0QOO));
	return QQ0OO0O;
}
function jsonParse(QQ00Q0O){
	if(typeof QQ00Q0O=='string'){
		try{
			return JSON.parse(QQ00Q0O);
		}catch(OOQO00O){
			console.log(OOQO00O);
			$.msg($.name,'','请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
			return[];
		}
	}
}
async function joinShop(){
	if(!$.joinVenderId)return;
	return new Promise(async QOQOQOO=>{
		$.errorJoinShop='活动太火爆，请稍后再试';
		let OOQ0O0O='';
		if($.shopactivityId)OOQ0O0O=',"activityId":'+$.shopactivityId;
		let QQ0OOOQ='{"venderId":"'+$.joinVenderId+'","shopId":"'+$.joinVenderId+'","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0'+OOQ0O0O+',"channel":406}';
		let OOOO0OO=await geth5st();
		const QQ0OOOO={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body='+QQ0OOOQ+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+OOOO0OO,'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(QQ0OOOO,async(OOOO0OQ,OQ00O0O,Q0000OO)=>{
			try{
				Q0000OO=Q0000OO&&Q0000OO.match(/jsonp_.*?\((.*?)\);/)&&Q0000OO.match(/jsonp_.*?\((.*?)\);/)[1]||Q0000OO;
				let OQ00O0Q=$.toObj(Q0000OO,Q0000OO);
				if(OQ00O0Q&&(typeof OQ00O0Q=='object')){
					if(OQ00O0Q&&OQ00O0Q.success===true){
						console.log(' >> '+OQ00O0Q.message);
						$.errorJoinShop=OQ00O0Q.message;
						if(OQ00O0Q.result&&OQ00O0Q.result.giftInfo){
							for(let QOQOOQ0 of OQ00O0Q.result.giftInfo.giftList){
								console.log(' >> 入会获得：'+QOQOOQ0.discountString+QOQOOQ0.prizeName+QOQOOQ0.secondLineDesc);
							}
						}
					}else if(OQ00O0Q&&typeof OQ00O0Q=='object'&&OQ00O0Q.message){
						$.errorJoinShop=OQ00O0Q.message;
						console.log(''+(OQ00O0Q.message||''));
					}else{
						console.log(Q0000OO);
					}
				}else{
					console.log(Q0000OO);
				}
			}catch(Q00Q0O0){
				$.logErr(Q00Q0O0,OQ00O0O);
			}finally{
				QOQOQOO();
			}
		});
	});
}
async function getshopactivityId(){
	return new Promise(async QOQQQOO=>{
		let QOQOOQQ='{"venderId":"'+$.joinVenderId+'","channel":406,"payUpShop":true}';
		let O00QOOO=await geth5st();
		const QOQOOQO={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body='+QOQOOQQ+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+O00QOOO,'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(QOQOOQO,async(QQ0OOQ0,OOOO0Q0,QOQQQOQ)=>{
			try{
				QOQQQOQ=QOQQQOQ&&QOQQQOQ.match(/jsonp_.*?\((.*?)\);/)&&QOQQQOQ.match(/jsonp_.*?\((.*?)\);/)[1]||QOQQQOQ;
				let OOQQ0QO=$.toObj(QOQQQOQ,QOQQQOQ);
				if(OOQQ0QO&&(typeof OOQQ0QO=='object')){
					if(OOQQ0QO&&(OOQQ0QO.success==true)){
						console.log('去加入：'+(OOQQ0QO.result.shopMemberCardInfo.venderCardName||'')+' ('+$.joinVenderId+')');
						$.shopactivityId=OOQQ0QO.result.interestsRuleList&&OOQQ0QO.result.interestsRuleList[0]&&OOQQ0QO.result.interestsRuleList[0].interestsInfo&&OOQQ0QO.result.interestsRuleList[0].interestsInfo.activityId||'';
					}
				}else{
					console.log(QOQQQOQ);
				}
			}catch(QQ00QQ0){
				$.logErr(QQ00QQ0,OOOO0Q0);
			}finally{
				QOQQQOO();
			}
		});
	});
}
function getAuthorCodeList(QOQ0000){
	return new Promise(OQ0QO0O=>{
		const QOQO00Q={'url':QOQ0000+'?'+new Date(),'timeout':10000,'headers':{'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'}};
		$.get(QOQO00Q,async(QOQOOO0,OOQQ0Q0,Q00QQ0Q)=>{
			try{
				if(QOQOOO0){
					$.getAuthorCodeListerr=false;
				}else{
					if(Q00QQ0Q)Q00QQ0Q=JSON.parse(Q00QQ0Q);
					$.getAuthorCodeListerr=true;
				}
			}catch(QQ0O00Q){
				$.logErr(QQ0O00Q,OOQQ0Q0);
				Q00QQ0Q=null;
			}finally{
				OQ0QO0O(Q00QQ0Q);
			}
		});
	});
}
function random(OOOO0O0,QQ0O00O){
	return Math.floor(Math.random()*QQ0O00O-OOOO0O0)+OOOO0O0;
}
var _0xodb='jsjiami.com.v6',_0xodb_=['‮_0xodb'],_0x3c1b=[_0xodb,'wqkgAcKeOQ==','NBDCnDEf','wqhhw7HDi8Ka','wrzCuHM/w6Qj','wpJyw7PDuMKE','E0bCnA==','BxbCg8KoSA==','QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==','N8KtRw==','LDbCrMKSfQ==','w6LDpG1qNA==','wpEXUcOjCA==','FV7Ch8KGZQ==','CWPCmXPCnA==','wrg0w4g=','YsOYw4oQw7oKAMOowok=','AAbCgQwHw6g=','w5bDjClaCcO8YcK7','JMKpOsO2ayRI','WsO5CMKfwq7DnMOJwqE=','w40KQnnCnMOYf8OJw4Na','PsKnRGvCtjUTZEhE','w7QjwrVeScOw','JcKgIcOdeA==','OMKgX0rCkA==','VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==','w5bCmMOtwrAXw4Je','UHLCjsOsw4wt','F8O3VsOmKXXDjDsLJCQ=','wqojL8K/L8Ke','PlfDgMKmScOr','wqZow6nDn8Kwwog=','CUzCmH4=','wrHDkTw=','TMONdMOcwq0=','KgzCnQYSw7Q=','OcK7N8K8w7w=','wro5I8KvOsKY','wro+w5FlHFg=','c8OmMcKhwoM=','WQQTw6Fo','xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if(function(Q00Q0QQ,O0QO0O0,QQ00QO0){
	function OOO00OQ(QQOQ00O,Q00OQ0Q,QQOQOO0,O000OO0,QQOQ00Q,O00000Q){
		Q00OQ0Q=(Q00OQ0Q>>0x8),QQOQ00Q='po';
		var OOO00Q0='shift',QOQ0OO0='push',O00000Q='‮';
		if(Q00OQ0Q<QQOQ00O){
			while(--QQOQ00O){
				O000OO0=Q00Q0QQ[OOO00Q0]();
				if((Q00OQ0Q===QQOQ00O)&&O00000Q==='‮'&&O00000Q.length===1){
					Q00OQ0Q=O000OO0,QQOQOO0=Q00Q0QQ[QQOQ00Q+'p']();
				}else if(Q00OQ0Q&&(QQOQOO0.replace(/[xNUxuLOwqBleVKE=]/g,'')===Q00OQ0Q)){
					Q00Q0QQ[QOQ0OO0](O000OO0);
				}
			}
			Q00Q0QQ[QOQ0OO0](Q00Q0QQ[OOO00Q0]());
		}
		return 968710;
	};
	return OOO00OQ(++O0QO0O0,QQ00QO0)>>O0QO0O0^QQ00QO0;
}(_0x3c1b,411,105216),_0x3c1b){
	_0xodb_=_0x3c1b.length^0x19b;
};
function _0x80d0(QQ0OQQ0,QQO0OQO){
	QQ0OQQ0=~~'0x'.concat(QQ0OQQ0.slice(1));
	var QOQQQQO=_0x3c1b[QQ0OQQ0];
	if(_0x80d0.ZHvfIH===undefined){
		(function(){
			var QQOQQO0=(typeof window!=='undefined')?window:(typeof process==='object')&&(typeof require==='function')&&(typeof global==='object')?global:this;
			var Q0O0Q0O='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			QQOQQO0.atob||(QQOQQO0.atob=function(O000QO0){
				var QQOOOQ0=String(O000QO0).replace(/=+$/,'');
				for(var Q0O0Q0Q=0,QOO0QO0,OOO0O00,O00O00Q=0,O00OOO0='';OOO0O00=QQOOOQ0.charAt(O00O00Q++);~OOO0O00&&(QOO0QO0=(Q0O0Q0Q%4)?(QOO0QO0*64+OOO0O00):OOO0O00,Q0O0Q0Q++%4)?O00OOO0+=String.fromCharCode(0xff&QOO0QO0>>-2*Q0O0Q0Q&0x6):0){
					OOO0O00=Q0O0Q0O.indexOf(OOO0O00);
				}
				return O00OOO0;
			});
		}());
		function QQO0QQ0(Q0OOO0Q,QQO0OQO){
			var OOOQ0QO=[],OO0OQ00=0,QOOOOOQ,OO0O0OQ='',OOOQ0QQ='';
			Q0OOO0Q=atob(Q0OOO0Q);
			for(var O0OQOQQ=0,OQO0O0Q=Q0OOO0Q.length;O0OQOQQ<OQO0O0Q;O0OQOQQ++){
				OOOQ0QQ+=('%'+('00'+Q0OOO0Q.charCodeAt(O0OQOQQ).toString(16)).slice(-2));
			}
			Q0OOO0Q=decodeURIComponent(OOOQ0QQ);
			for(var QQOOOQQ=0;QQOOOQQ<256;QQOOOQQ++){
				OOOQ0QO[QQOOOQQ]=QQOOOQQ;
			}
			for(QQOOOQQ=0;QQOOOQQ<256;QQOOOQQ++){
				OO0OQ00=(OO0OQ00+OOOQ0QO[QQOOOQQ]+QQO0OQO.charCodeAt(QQOOOQQ%QQO0OQO.length))%256;
				QOOOOOQ=OOOQ0QO[QQOOOQQ];
				OOOQ0QO[QQOOOQQ]=OOOQ0QO[OO0OQ00];
				OOOQ0QO[OO0OQ00]=QOOOOOQ;
			}
			QQOOOQQ=0;
			OO0OQ00=0;
			for(var Q0O00OO=0;Q0O00OO<Q0OOO0Q.length;Q0O00OO++){
				QQOOOQQ=(QQOOOQQ+1)%256;
				OO0OQ00=(OO0OQ00+OOOQ0QO[QQOOOQQ])%256;
				QOOOOOQ=OOOQ0QO[QQOOOQQ];
				OOOQ0QO[QQOOOQQ]=OOOQ0QO[OO0OQ00];
				OOOQ0QO[OO0OQ00]=QOOOOOQ;
				OO0O0OQ+=String.fromCharCode(Q0OOO0Q.charCodeAt(Q0O00OO)^OOOQ0QO[OOOQ0QO[QQOOOQQ]+OOOQ0QO[OO0OQ00]%256]);
			}
			return OO0O0OQ;
		}
		_0x80d0.uZkhLK=QQO0QQ0;
		_0x80d0.PgBxtv={};
		_0x80d0.ZHvfIH=true;
	}
	var Q0O00OQ=_0x80d0.PgBxtv[QQ0OQQ0];
	if(Q0O00OQ===undefined){
		if(_0x80d0.mzwOwg===undefined){
			_0x80d0.mzwOwg=true;
		}
		QOQQQQO=_0x80d0.uZkhLK(QOQQQQO,QQO0OQO);
		_0x80d0.PgBxtv[QQ0OQQ0]=QOQQQQO;
	}else{
		QOQQQQO=Q0O00OQ;
	}
	return QOQQQQO;
};
function generateFp(){
	var QOOO00Q={'ryoPy':'0123456789','mfvwK':function(QOOOOO0,OQO0O00){
		return QOOOOO0|OQO0O00;
	},'WutDU':function(QQOQQOO,O0OQOQ0){
		return QQOQQOO+O0OQOQ0;
	}};
	let QOO0QQ0=QOOO00Q[_0x80d0('‮0','wj)i')];
	let OOO00QO=13;
	let O0O0OQQ='';
	for(;OOO00QO--;)O0O0OQQ+=QOO0QQ0[QOOO00Q[_0x80d0('‮1','Z*hR')](Math.random()*QOO0QQ0[_0x80d0('‮2','3@Q*')],0)];
	return QOOO00Q[_0x80d0('‮3','Z*hR')](O0O0OQQ,Date[_0x80d0('‮4','Da%Y')]())[_0x80d0('‮5','LwWi')](0,16);
}
function geth5st(){
	var O0OQOOO={'XLFYP':'yyyyMMddhhmmssSSS','ERdzy':';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;','eaFvs':_0x80d0('‮6','@hXf'),'NqklQ':function(Q00O0O0,O0OQOOQ){
		return Q00O0O0(O0OQOOQ);
	},'DqrqH':function(QQOQQQ0,O000QQ0){
		return QQOQQQ0+O000QQ0;
	},'GEDpa':function(O000QOO,Q0O00QQ){
		return O000QOO+Q0O00QQ;
	},'tJryJ':function(OOOQQ0Q,QOQQOQO){
		return OOOQQ0Q+QOQQOQO;
	}};
	let O00OOOQ=Date[_0x80d0('‮7','3B2S')]();
	let QQO0OOO=generateFp();
	let Q0OQ0O0=new Date(O00OOOQ).Format(O0OQOOO[_0x80d0('‫8','LwWi')]);
	let O00OOOO=[O0OQOOO.ERdzy,O0OQOOO[_0x80d0('‮9','SCQF')]];
	let QQO0OOQ=O00OOOO[random(0,O00OOOO.length)];
	return O0OQOOO[_0x80d0('‫a','%HoM')](encodeURIComponent,O0OQOOO.DqrqH(O0OQOOO[_0x80d0('‫b','vWDW')](O0OQOOO[_0x80d0('‮c','Da%Y')](Q0OQ0O0,';')+QQO0OOO,QQO0OOQ),Date[_0x80d0('‮d','7]Bn')]()));
}
Date[_0x80d0('‫e','gM9$')][_0x80d0('‫f','wj)i')]=function(QOQQOQQ){
	var QQQQOOQ={'wGAVl':function(Q0O0O0O,QQOOQQ0){
		return Q0O0O0O/QQOOQQ0;
	},'aborC':function(QQOOQQO,QQQQ00O){
		return QQOOQQO+QQQQ00O;
	},'khvyA':function(OQOQQ0O,OQOQ0Q0){
		return OQOQQ0O===OQOQ0Q0;
	},'RkhHN':function(OQOQQ0Q,Q0OQO0O){
		return OQOQQ0Q==Q0OQO0O;
	}};
	var Q0OQO0Q,QQQ0OQO=this,QOOQQQ0=QOQQOQQ,OQO00OO={'M+':(QQQ0OQO[_0x80d0('‮10','lEbY')]()+1),'d+':QQQ0OQO.getDate(),'D+':QQQ0OQO[_0x80d0('‮11','m]Ir')](),'h+':QQQ0OQO.getHours(),'H+':QQQ0OQO[_0x80d0('‫12','hLmb')](),'m+':QQQ0OQO[_0x80d0('‫13','y[mS')](),'s+':QQQ0OQO[_0x80d0('‮14','3B2S')](),'w+':QQQ0OQO[_0x80d0('‫15','$n0%')](),'q+':Math[_0x80d0('‮16','m]Ir')](QQQQOOQ.wGAVl(QQQQOOQ[_0x80d0('‮17','3B2S')](QQQ0OQO.getMonth(),3),3)),'S+':QQQ0OQO[_0x80d0('‫18','3aAN')]()};
	/(y+)/i.test(QOOQQQ0)&&(QOOQQQ0=QOOQQQ0[_0x80d0('‫19','bosv')](RegExp.$1,''[_0x80d0('‮1a','3aAN')](QQQ0OQO[_0x80d0('‫1b','n1@B')]())[_0x80d0('‮1c','ctu&')](4-RegExp.$1[_0x80d0('‫1d','T8*w')])));
	for(var OQO0Q00 in OQO00OO){
		if(new RegExp('('[_0x80d0('‮1e','Z*hR')](OQO0Q00,')'))[_0x80d0('‮1f','Da%Y')](QOOQQQ0)){
			var QQQQOO0,QQQQ00Q=QQQQOOQ.khvyA('S+',OQO0Q00)?_0x80d0('‫20','dvcH'):'00';
			QOOQQQ0=QOOQQQ0.replace(RegExp.$1,QQQQOOQ[_0x80d0('‫21','Jp@*')](1,RegExp.$1[_0x80d0('‫22','wj)i')])?OQO00OO[OQO0Q00]:QQQQOOQ[_0x80d0('‫23','JH9X')](''.concat(QQQQ00Q),OQO00OO[OQO0Q00]).substr(''[_0x80d0('‮24','ctu&')](OQO00OO[OQO0Q00])[_0x80d0('‫25','7]Bn')]));
		}
	}
	return QOOQQQ0;
};
function random(QQOOQQQ,Q0O0O00){
	var OOOQO00={'NzMvB':function(QOOQOOQ,QOO0OQ0){
		return QOOQOOQ+QOO0OQ0;
	},'pvLRb':function(QQOO00Q,QQOOOO0){
		return QQOO00Q*QQOOOO0;
	},'KNgAC':function(QQOOOOO,QQQQOQ0){
		return QQOOOOO-QQQQOQ0;
	}};
	return OOOQO00[_0x80d0('‫26','hLmb')](Math[_0x80d0('‫27','eShm')](OOOQO00[_0x80d0('‮28','ctu&')](Math.random(),OOOQO00.KNgAC(Q0O0O00,QQOOQQQ))),QQOOQQQ);
};
_0xodb='jsjiami.com.v6';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

