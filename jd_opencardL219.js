/*
8.18~8.26 解锁好物 宠粉时刻
开卡脚本,一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 8.18~8.26 解锁好物 宠粉时刻 ]

请求太频繁会被黑ip
请更换IP后再执行脚本

cron:53 0,17 19-26 8 *
============Quantumultx===============
[task_local]
#8.18~8.26 解锁好物 宠粉时刻
45 1,16,17 18-26 8 * jd_opencardL219.js, tag=8.18~8.26 解锁好物 宠粉时刻, enabled=true

*/

const $ = new Env('8.18~8.26 解锁好物 宠粉时刻')
const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
const notify=$.isNode()?require('./sendNotify'):'';
let opencard_draw=$.isNode()?process.env.opencard_draw?process.env.opencard_draw:'0':$.getdata('opencard_draw')?$.getdata('opencard_draw'):'0';
let opencard_addCart=$.isNode()?process.env.opencard_addCart?process.env.opencard_addCart:false:$.getdata('opencard_addCart')?$.getdata('opencard_addCart'):false;
const JD_SIGN_API=process.env.JD_SIGN_API||'https://api.nolanstore.top/sign';
let cookiesArr=[],cookie='';
let lz_cookie={};
if($.isNode()){
	Object.keys(jdCookieNode).forEach(QQOQQ00=>{
		cookiesArr.push(jdCookieNode[QQOQQ00]);
	});
	if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
}else{
	cookiesArr=[$.getdata('CookieJD'),$.getdata('CookieJD2'),...jsonParse($.getdata('CookiesJD')||'[]').map(Q00OQOQ=>Q00OQOQ.cookie)].filter(Q0O000Q=>!!Q0O000Q);
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
	$.activityId='f60e257cf36f4f5b9a41126cc10f1d60';
	$.shareUuid='74fa25150599440b86d60e25ac2f689d';
	console.log('活动入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid);
	console.log('❖ 默认不加购，如需加购请设置环境变量 [opencard_addCart]，变量值为 true');
	console.log('❖ 默认不抽奖，如需抽奖请设置环境变量 [opencard_draw]，变量值为抽奖次数');
	let OO0OQQQ=['74fa25150599440b86d60e25ac2f689d'];
	let OOOQ000=Math.floor(Math.random()*3);
	let OOOQQQO=0;
	OOOQQQO=Math.floor(Math.random()*OO0OQQQ.length);
	$.shareUuid='74fa25150599440b86d60e25ac2f689d';
	for(let O0OQ0QO=0;O0OQ0QO<cookiesArr.length;O0OQ0QO++){
		cookie=cookiesArr[O0OQ0QO];
		originCookie=cookiesArr[O0OQ0QO];
		if(cookie){
			$.UserName=decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/)&&cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
			$.index=O0OQ0QO+1;
			message='';
			$.bean=0;
			$.hotFlag=false;
			$.nickName='';
			console.log(('\n******开始【京东账号'+$.index+'】'+$.nickName||$.UserName)+'*********\n');
			await getUA();
			await run();
			await $.wait(1500);
			if(O0OQ0QO==0&&!$.actorUuid)break;
			if($.outFlag||$.activityEnd)break;
		}
	}
	if($.outFlag){
		let Q00OQQ0='此ip已被限制，请更换IP后再执行脚本';
		$.msg($.name,'',''+Q00OQQ0);
		if($.isNode())await notify.sendNotify(''+$.name,''+Q00OQQ0);
	}
	if(allMessage){
		$.msg($.name,'',''+allMessage);
	}
})().catch(QQOQ0Q0=>$.logErr(QQOQ0Q0)).finally(()=>$.done());
async function run(){
	try{
		$.hasEnd=true;
		$.endTime=0;
		lz_jdpin_token_cookie='';
		$.Token='';
		$.Pin='';
		let OQO000O=false;
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
		if(($.hasEnd===true)||Date.now()>$.endTime){
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
					OQO000O=true;
					$.shopactivityId='';
					$.joinVenderId=o.venderId||o.value;
					await getshopactivityId();
					for(let OQOO0QQ=0;OQOO0QQ<Array(5).length;OQOO0QQ++){
						if(OQOO0QQ>0)console.log('第'+OQOO0QQ+'次 重新开卡');
						await joinShop();
						await $.wait(500);
						if(($.errorJoinShop.indexOf('活动太火爆，请稍后再试')==-1)&&($.errorJoinShop.indexOf('加入店铺会员失败')==-1)){
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
			await $.wait(parseInt((Math.random()*1000)+1000,10));
		}
		if(opencard_addCart){
			if(!$.addCart&&!$.outFlag){
				await takePostRequest('addCart');
				await $.wait(parseInt(Math.random()*1000+1000,10));
			}
		}
		console.log('去助力 -> '+$.shareUuid);
		await takePostRequest('assist');
		await $.wait(parseInt(Math.random()*1000+1000,10));
		console.log($.assistState===1?'助力成功':$.assistState===10?'已经助力过了哟~':($.assistState===21)?'未全部开卡或者其他原因':($.assistState===11)?'已助力其他用户':$.assistState===0?'不能助力自己':('未知-'+$.assistState));
		if(OQO000O){
			await takePostRequest('activityContent');
		}
		if(opencard_draw+''!=='0'){
			$.runFalag=true;
			let OQOO0QO=parseInt($.score/100);
			opencard_draw=parseInt(opencard_draw,10);
			if(OQOO0QO>opencard_draw)OQOO0QO=opencard_draw;
			console.log('已设置抽奖次数为'+OQOO0QO+'次，当前有'+$.score+'金币');
			for(m=1;OQOO0QO--;m++){
				console.log('进行第'+m+'次抽奖');
				await takePostRequest('startDraw');
				if($.runFalag==false)break;
				if(Number(OQOO0QO)<=0)break;
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
		console.log(('\n当前已邀请'+$.assistCount)+'人');
		await takePostRequest('drawRecord');
		if($.index==1){
			$.shareUuid='74fa25150599440b86d60e25ac2f689d';
			console.log('后面的号都会助力 -> '+$.shareUuid);
		}
		if($.index%3==0)await $.wait(parseInt((Math.random()*5000)+15000,10));
	}catch(OO0Q00Q){
		console.log(OO0Q00Q);
	}
}
async function takePostRequest(QOOQO0Q){
	if($.outFlag)return;
	let Q0QOOQ0='https://lzdz1-isv.isvjcloud.com';
	let Q0OOQOQ='';
	let OQOOQ00='POST';
	let OQOO0OO='';
	switch(QOOQO0Q){
		case 'isvObfuscator':
			url='https://api.m.jd.com/client.action?functionId=isvObfuscator';
			Q0OOQOQ='body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=ab640b5dc76b89426f72115f5b2e06e934a5fbe9&client=apple&clientVersion=10.1.4&st=1650250640876&sv=102&sign=7ea66dcb2969eff53c43b5b8a4937dbe';
			break;
		case'getSimpleActInfoVo':
			url=Q0QOOQ0+'/dz/common/getSimpleActInfoVo';
			Q0OOQOQ='activityId='+$.activityId;
			break;
		case 'getMyPing':
			url=Q0QOOQ0+'/customer/getMyPing';
			Q0OOQOQ='userId=10169401&token='+$.Token+'&fromType=APP';
			break;
		case 'accessLogWithAD':
			url=Q0QOOQ0+'/common/accessLogWithAD';
			let QQQ00QQ=Q0QOOQ0+'/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid;
			Q0OOQOQ='venderId=10169401&code=99&pin='+encodeURIComponent($.Pin)+'&activityId='+$.activityId+'&pageUrl='+encodeURIComponent(QQQ00QQ)+'&subType=app&adSource=';
			break;
		case 'getUserInfo':
			url=Q0QOOQ0+'/wxActionCommon/getUserInfo';
			Q0OOQOQ='pin='+encodeURIComponent($.Pin);
			break;
		case 'activityContent':
			url=Q0QOOQ0+'/dingzhi/joinCommon/activityContent';
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&pinImg='+encodeURIComponent('https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png')+'&nick='+encodeURIComponent($.nickname)+'&cjyxPin=&cjhyPin=&shareUuid='+$.shareUuid;
			break;
		case 'drawContent':
			url=Q0QOOQ0+'/dingzhi/joinCommon/drawContent';
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'checkOpenCard':
			url=Q0QOOQ0+'/dingzhi/joinCommon/taskInfo';
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'assist':
			url=Q0QOOQ0+'/dingzhi/joinCommon/assist';
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&uuid='+$.actorUuid+'&shareUuid='+$.shareUuid;
			break;
		case 'taskRecord':
			url=Q0QOOQ0+'/dingzhi/joinCommon/taskRecord';
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&uuid='+$.actorUuid+'&taskType=';
			break;
		case'followShop':
			url=Q0QOOQ0+'/dingzhi/joinCommon/doTask';
			Q0OOQOQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin)+'&taskType=20&taskValue=';
			break;
		case 'addCart':
			url=Q0QOOQ0+'/dingzhi/joinCommon/doTask';
			Q0OOQOQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin)+'&taskType=23&taskValue=';
			break;
		case 'sign':
		case 'browseGoods':
			url=Q0QOOQ0+'/dingzhi/opencard/'+QOOQO0Q;
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			if(QOOQO0Q=='browseGoods')Q0OOQOQ+='&value='+$.visitSkuValue;
			break;
		case 'viewVideo':
		case 'visitSku':
		case 'toShop':
		case 'addSku':
			url=Q0QOOQ0+'/dingzhi/opencard/'+QOOQO0Q;
			let Q0OOQOO='';
			let Q0QQQO0='';
			if(QOOQO0Q=='viewVideo'){
				Q0OOQOO=31;
				Q0QQQO0=31;
			}else if(QOOQO0Q=='visitSku'){
				Q0OOQOO=5;
				Q0QQQO0=$.visitSkuValue||5;
			}else if(QOOQO0Q=='toShop'){
				Q0OOQOO=14;
				Q0QQQO0=$.toShopValue||14;
			}else if(QOOQO0Q=='addSku'){
				Q0OOQOO=2;
				Q0QQQO0=$.addSkuValue||2;
			}
			Q0OOQOQ='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&taskType='+Q0OOQOO+'&taskValue='+Q0QQQO0;
			break;
		case 'drawRecord':
			url=Q0QOOQ0+'/dingzhi/joinCommon/drawRecord';
			Q0OOQOQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'getShareRecord':
			url=Q0QOOQ0+'/dingzhi/joinCommon/shareRecord';
			Q0OOQOQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin)+'&num=30';
			break;
		case 'startDraw':
			url=Q0QOOQ0+'/dingzhi/joinCommon/startDraw';
			Q0OOQOQ='activityId='+$.activityId+'&uuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin);
			break;
		default:
			console.log('错误'+QOOQO0Q);
	}
	let OQQQ0QO=getPostRequest(url,Q0OOQOQ,OQOOQ00);
	return new Promise(async OO00OQQ=>{
		$.post(OQQQ0QO,(Q0QOOQO,OO0QOOO,Q0OOQO0)=>{
			try{
				setActivityCookie(OO0QOOO);
				if(Q0QOOQO){
					if(OO0QOOO&&typeof OO0QOOO.statusCode!='undefined'){
						if(OO0QOOO.statusCode==493){
							console.log('此ip已被限制，请更换IP后再执行脚本\n');
						}
					}
					console.log(''+$.toStr(Q0QOOQO,Q0QOOQO));
					console.log(QOOQO0Q+' API请求失败，请检查网路重试');
				}else{
					dealReturn(QOOQO0Q,Q0OOQO0);
				}
			}catch(OQOOQ0Q){
				console.log(OQOOQ0Q,OO0QOOO);
			}finally{
				OO00OQQ();
			}
		});
	});
}
async function dealReturn(O0OOQQ0,OQQ0O0O){
	let OQQOO0O='';
	try{
		if((O0OOQQ0!='accessLogWithAD')||O0OOQQ0!='drawContent'){
			if(OQQ0O0O){
				OQQOO0O=JSON.parse(OQQ0O0O);
			}
		}
	}catch(QO00QOQ){
		console.log(O0OOQQ0+' 执行任务异常');
		console.log(OQQ0O0O);
		$.runFalag=false;
	}
	try{
		switch(O0OOQQ0){
			case 'isvObfuscator':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.errcode==0){
						if(typeof OQQOO0O.token!='undefined')$.Token=OQQOO0O.token;
					}else if(OQQOO0O.message){
						console.log('isvObfuscator '+(OQQOO0O.message||''));
					}else{
						console.log(OQQ0O0O);
					}
				}else{
					console.log(OQQ0O0O);
				}
				break;
			case 'getSimpleActInfoVo':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						if(typeof OQQOO0O.data.shopId!='undefined')$.shopId=OQQOO0O.data.shopId;
						if(typeof OQQOO0O.data.venderId!='undefined')$.venderId=OQQOO0O.data.venderId;
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'getMyPing':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						if(OQQOO0O.data&&(typeof OQQOO0O.data.secretPin!='undefined'))$.Pin=OQQOO0O.data.secretPin;
						if(OQQOO0O.data&&typeof OQQOO0O.data.nickname!='undefined')$.nickname=OQQOO0O.data.nickname;
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'getUserInfo':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						if(OQQOO0O.data&&(typeof OQQOO0O.data.yunMidImageUrl!='undefined'))$.attrTouXiang=OQQOO0O.data.yunMidImageUrl||'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'activityContent':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						$.endTime=OQQOO0O.data.endTime||OQQOO0O.data.activityVo&&OQQOO0O.data.activityVo.endTime||OQQOO0O.data.activity.endTime||0;
						$.hasEnd=OQQOO0O.data.isEnd||false;
						$.score=OQQOO0O.data.actorInfo.score||0;
						$.actorUuid=OQQOO0O.data.actorInfo.uuid||'';
						$.assistCount=OQQOO0O.data.actorInfo.assistCount||0;
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'assist':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						$.assistState=OQQOO0O.data.assistState||0;
						$.allOpenCard=OQQOO0O.data.openCardInfo.openAll||false;
						$.openVenderId=OQQOO0O.data.openCardInfo.openVenderId||[];
						beans=OQQOO0O.data.openCardInfo.beans;
						if(beans!='0')console.log('助力获得：'+beans+'京豆 🐶');
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case'taskRecord':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						$.followShop=OQQOO0O.data['20'].recordCount||0;
						$.addCart=OQQOO0O.data['23'].recordCount||0;
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'checkOpenCard':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						let QO0QOQ0=OQQOO0O.data['10'].settingInfo||[];
						let OQ0OQ0Q=OQQOO0O.data.cardList||[];
						let OQQ00O0=OQQOO0O.data.openCardList||[];
						$.openList=[...OQ0OQ0Q,...QO0QOQ0,...OQQ00O0];
						$.openCardScore1=OQQOO0O.data.score1||0;
						$.openCardScore2=OQQOO0O.data.score2||0;
						$.drawScore=OQQOO0O.data.drawScore||0;
						if(OQQOO0O.data.beans||OQQOO0O.data.addBeanNum)console.log('开卡获得：'+(OQQOO0O.data.beans||OQQOO0O.data.addBeanNum)+'京豆 🐶');
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'followShop':
			case'viewVideo':
			case 'visitSku':
			case 'toShop':
			case 'addSku':
			case 'sign':
			case 'addCart':
			case 'browseGoods':
			case 'startDraw':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&OQQOO0O.result===true){
						if(typeof OQQOO0O.data=='object'){
							let QO00OQO='';
							let Q0QOQOQ='抽奖';
							if(OQQOO0O.data.addBeanNum){
								QO00OQO=OQQOO0O.data.addBeanNum+'京豆';
							}
							if(OQQOO0O.data.addPoint){
								QO00OQO+=' '+OQQOO0O.data.addPoint+'游戏机会';
							}
							if(O0OOQQ0=='followShop'){
								Q0QOQOQ='关注';
								if(OQQOO0O.data.beans!='0'){
									QO00OQO+=OQQOO0O.data.beans+'京豆 🐶';
								}
							}else if((O0OOQQ0=='addSku')||(O0OOQQ0=='addCart')){
								Q0QOQOQ='加购';
								if(OQQOO0O.data.beans!='0'){
									QO00OQO+=OQQOO0O.data.beans+'京豆 🐶';
								}
							}else if(O0OOQQ0=='viewVideo'){
								Q0QOQOQ='热门文章';
							}else if(O0OOQQ0=='toShop'){
								Q0QOQOQ='浏览店铺';
							}else if((O0OOQQ0=='visitSku')||(O0OOQQ0=='browseGoods')){
								Q0QOQOQ='浏览商品';
							}else if(O0OOQQ0=='sign'){
								Q0QOQOQ='签到';
							}else{
								let O0Q0QQQ=(typeof OQQOO0O.data.drawOk==='object')&&OQQOO0O.data.drawOk||OQQOO0O.data;
								QO00OQO=(O0Q0QQQ.drawOk==true)&&O0Q0QQQ.name||'';
							}
							if(!QO00OQO){
								QO00OQO='空气 💨';
							}
							console.log(Q0QOQOQ+'获得：'+(QO00OQO||OQQ0O0O));
						}else{
							console.log(''+OQQ0O0O);
						}
					}else if(OQQOO0O.errorMessage){
						$.runFalag=false;
						console.log(''+(OQQOO0O.errorMessage||''));
					}else{
						console.log(''+OQQ0O0O);
					}
				}else{
					console.log(''+OQQ0O0O);
				}
				break;
			case 'drawRecord':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)){
						let O0Q0000=0;
						for(let QO00OQQ of OQQOO0O.data){
							infoType=QO00OQQ.infoType;
							infoName=QO00OQQ.infoName;
							switch(infoType){
								case 6:
									infoName=Number(infoName.replace('京豆',''));
									O0Q0000+=infoName;
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
						if(O0Q0000>0){
							console.log('当前累计获得 '+O0Q0000+' 京豆 🐶');
						}
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'getShareRecord':
				if(typeof OQQOO0O=='object'){
					if(OQQOO0O.result&&(OQQOO0O.result===true)&&OQQOO0O.data){
						$.ShareCount=OQQOO0O.data.shareList.length;
						$.log('=========== 你邀请了:'+$.ShareCount+'个\n由于接口数据只有30个 故邀请大于30个的需要自行判断\n');
					}else if(OQQOO0O.errorMessage){
						console.log(O0OOQQ0+' '+(OQQOO0O.errorMessage||''));
					}else{
						console.log(O0OOQQ0+' '+OQQ0O0O);
					}
				}else{
					console.log(O0OOQQ0+' '+OQQ0O0O);
				}
				break;
			case 'accessLogWithAD':
			case'drawContent':
				break;
			default:
				console.log(O0OOQQ0+'-> '+OQQ0O0O);
		}
		if(typeof OQQOO0O=='object'){
			if(OQQOO0O.errorMessage){
				if(OQQOO0O.errorMessage.indexOf('火爆')>-1){
					$.hotFlag=true;
				}
			}
		}
	}catch(O0Q000O){
		console.log(O0Q000O);
	}
}
function getPostRequest(O0Q0OO0,QO00OQ0,QQQO0O0='POST'){
	let OOQOQO0={'Accept':'application/json','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'User-Agent':$.UA,'X-Requested-With':'XMLHttpRequest'};
	if(O0Q0OO0.indexOf('https://lzdz1-isv.isvjcloud.com')>-1){
		OOQOQO0.Referer='https://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid;
		OOQOQO0.Cookie=''+((lz_jdpin_token_cookie&&lz_jdpin_token_cookie)||'')+($.Pin&&('AUTH_C_USER='+$.Pin+';')||'')+activityCookie;
	}
	return{'url':O0Q0OO0,'method':QQQO0O0,'headers':OOQOQO0,'body':QO00OQ0,'timeout':30000};
}
async function getToken(){
	let O0OOQOQ=await getSign('isvObfuscator',{'id':'','url':'https://lzdz1-isv.isvjcloud.com'});
	let OQ0OO0Q={'url':'https://api.m.jd.com/client.action?functionId=isvObfuscator','headers':{'Host':'api.m.jd.com','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)','Accept-Language':'zh-Hans-CN;q=1','Accept-Encoding':'gzip, deflate, br'},'body':''+$.Signz};
	return new Promise(OQ0OO0O=>{
		$.post(OQ0OO0Q,(OOQQQOQ,OOQQQOO,Q0QOOO0)=>{
			try{
				if(OOQQQOQ){
					$.log(OOQQQOQ);
				}else{
					if(Q0QOOO0){
						Q0QOOO0=JSON.parse(Q0QOOO0);
						if(Q0QOOO0.code==='0'){
							$.Token=Q0QOOO0.token;
						}
					}else{
						$.log('京东返回了空数据');
					}
				}
			}catch(OQ00Q0Q){
				$.log(OQ00Q0Q);
			}finally{
				OQ0OO0O();
			}
		});
	});
}
function getSign(QQ0Q0Q0,QOQOQQ0){
	let Q00QOQ0={'fn':QQ0Q0Q0,'body':JSON.stringify(QOQOQQ0)};
	let OO0QOQO={'url':'https://api.nolanstore.top/sign','body':JSON.stringify(Q00QOQ0),'headers':{'Content-Type':'application/json'},'timeout':30000};
	return new Promise(async Q0QOOOO=>{
		$.post(OO0QOQO,(OQ0QQ0Q,OQ0Q0Q0,Q00QOQ0)=>{
			try{
				if(OQ0QQ0Q){
					console.log(''+JSON.stringify(OQ0QQ0Q));
					console.log($.name+' getSign API请求失败，请检查网路重试');
				}else{
					Q00QOQ0=JSON.parse(Q00QOQ0);
					if((typeof Q00QOQ0==='object')&&Q00QOQ0&&Q00QOQ0.body){
						$.Signz=Q00QOQ0.body||'';
					}else{
						console.log('获取服务失败~~');
					}
				}
			}catch(QQ00Q0O){
				$.logErr(QQ00Q0O,OQ0Q0Q0);
			}finally{
				Q0QOOOO(Q00QOQ0);
			}
		});
	});
};
function getCk(){
	return new Promise(QQ0Q0OO=>{
		let OOQ0QO0={'url':'https://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid,'followRedirect':false,'headers':{'User-Agent':$.UA},'timeout':30000};
		$.get(OOQ0QO0,async(QOQOQOQ,QOQOQOO,QQ000QQ)=>{
			try{
				if(QOQOQOQ){
					if(QOQOQOO&&(typeof QOQOQOO.statusCode!='undefined')){
						if(QOQOQOO.statusCode==493){
							console.log('此ip已被限制，请更换IP后再执行脚本\n');
						}
					}
					console.log(''+$.toStr(QOQOQOQ));
					console.log($.name+' cookie API请求失败，请检查网路重试');
				}else{
					let OOQ0O0O=QQ000QQ.match(/(活动已经结束)/)&&QQ000QQ.match(/(活动已经结束)/)[1]||'';
					if(OOQ0O0O){
						$.activityEnd=true;
						console.log('活动已结束');
					}
					setActivityCookie(QOQOQOO);
				}
			}catch(OOOO0OO){
				$.logErr(OOOO0OO,QOQOQOO);
			}finally{
				QQ0Q0OO();
			}
		});
	});
}
function setActivityCookie(OQ00O0O){
	if(OQ00O0O.headers['set-cookie']){
		cookie=originCookie+';';
		for(let O00QOQ0 of OQ00O0O.headers['set-cookie']){
			lz_cookie[O00QOQ0.split(';')[0].substr(0,O00QOQ0.split(';')[0].indexOf('='))]=O00QOQ0.split(';')[0].substr(O00QOQ0.split(';')[0].indexOf('=')+1);
		}
		for(const OOQ0O0Q of Object.keys(lz_cookie)){
			cookie+=(OOQ0O0Q+'='+lz_cookie[OOQ0O0Q]+';');
		}
		activityCookie=cookie;
	}
}
async function getUA(){
	$.UA='jdapp;iPhone;10.1.4;13.1.2;'+randomString(40)+';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}
function randomString(QQ00QOO){
	QQ00QOO=(QQ00QOO||32);
	let Q0000O0='abcdef0123456789',O00QOOQ=Q0000O0.length,QOQQQOO='';
	for(i=0;i<QQ00QOO;i++)QOQQQOO+=Q0000O0.charAt(Math.floor(Math.random()*O00QOOQ));
	return QOQQQOO;
}
function jsonParse(QOQOOQQ){
	if(typeof QOQOOQQ=='string'){
		try{
			return JSON.parse(QOQOOQQ);
		}catch(QQ0OOQ0){
			console.log(QQ0OOQ0);
			$.msg($.name,'','请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
			return[];
		}
	}
}
async function joinShop(){
	if(!$.joinVenderId)return;
	return new Promise(async QQ00QQ0=>{
		$.errorJoinShop='活动太火爆，请稍后再试';
		let QQ0OQQQ='';
		if($.shopactivityId)QQ0OQQQ=',"activityId":'+$.shopactivityId;
		let QQ0OQQO='{"venderId":"'+$.joinVenderId+'","shopId":"'+$.joinVenderId+'","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0'+QQ0OQQQ+',"channel":406}';
		let QQ0O000=await geth5st();
		const OQ000QQ={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body='+QQ0OQQO+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+QQ0O000,'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(OQ000QQ,async(QOQO00O,OQ000QO,QOQO00Q)=>{
			try{
				QOQO00Q=QOQO00Q&&QOQO00Q.match(/jsonp_.*?\((.*?)\);/)&&QOQO00Q.match(/jsonp_.*?\((.*?)\);/)[1]||QOQO00Q;
				let OOQQ0Q0=$.toObj(QOQO00Q,QOQO00Q);
				if(OOQQ0Q0&&(typeof OOQQ0Q0=='object')){
					if(OOQQ0Q0&&(OOQQ0Q0.success===true)){
						console.log(OOQQ0Q0.message);
						$.errorJoinShop=OOQQ0Q0.message;
						if(OOQQ0Q0.result&&OOQQ0Q0.result.giftInfo){
							for(let Q00QQ0Q of OOQQ0Q0.result.giftInfo.giftList){
								console.log('入会获得:'+Q00QQ0Q.discountString+Q00QQ0Q.prizeName+Q00QQ0Q.secondLineDesc);
							}
						}
					}else if(OOQQ0Q0&&(typeof OOQQ0Q0=='object')&&OOQQ0Q0.message){
						$.errorJoinShop=OOQQ0Q0.message;
						console.log(''+(OOQQ0Q0.message||''));
					}else{
						console.log(QOQO00Q);
					}
				}else{
					console.log(QOQO00Q);
				}
			}catch(OOQQ0OQ){
				$.logErr(OOQQ0OQ,OQ000QO);
			}finally{
				QQ00QQ0();
			}
		});
	});
}
async function getshopactivityId(){
	return new Promise(async OOQ00QO=>{
		let OQ000Q0='{"venderId":"'+$.joinVenderId+'","channel":406,"payUpShop":true}';
		let O00QOQQ=await geth5st();
		const O00QOQO={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body='+OQ000Q0+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+O00QOQQ,'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(O00QOQO,async(OOQ00QQ,QOQOOOQ,Q00Q0QQ)=>{
			try{
				Q00Q0QQ=Q00Q0QQ&&Q00Q0QQ.match(/jsonp_.*?\((.*?)\);/)&&Q00Q0QQ.match(/jsonp_.*?\((.*?)\);/)[1]||Q00Q0QQ;
				let QQ00QO0=$.toObj(Q00Q0QQ,Q00Q0QQ);
				if(QQ00QO0&&typeof QQ00QO0=='object'){
					if(QQ00QO0&&QQ00QO0.success==true){
						console.log('入会:'+(QQ00QO0.result.shopMemberCardInfo.venderCardName||''));
						$.shopactivityId=QQ00QO0.result.interestsRuleList&&QQ00QO0.result.interestsRuleList[0]&&QQ00QO0.result.interestsRuleList[0].interestsInfo&&QQ00QO0.result.interestsRuleList[0].interestsInfo.activityId||'';
					}
				}else{
					console.log(Q00Q0QQ);
				}
			}catch(QOQ0OOQ){
				$.logErr(QOQ0OOQ,QOQOOOQ);
			}finally{
				OOQ00QO();
			}
		});
	});
}
var _0xodb='jsjiami.com.v6',_0xodb_=['‮_0xodb'],_0x3c1b=[_0xodb,'wqkgAcKeOQ==','NBDCnDEf','wqhhw7HDi8Ka','wrzCuHM/w6Qj','wpJyw7PDuMKE','E0bCnA==','BxbCg8KoSA==','QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==','N8KtRw==','LDbCrMKSfQ==','w6LDpG1qNA==','wpEXUcOjCA==','FV7Ch8KGZQ==','CWPCmXPCnA==','wrg0w4g=','YsOYw4oQw7oKAMOowok=','AAbCgQwHw6g=','w5bDjClaCcO8YcK7','JMKpOsO2ayRI','WsO5CMKfwq7DnMOJwqE=','w40KQnnCnMOYf8OJw4Na','PsKnRGvCtjUTZEhE','w7QjwrVeScOw','JcKgIcOdeA==','OMKgX0rCkA==','VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==','w5bCmMOtwrAXw4Je','UHLCjsOsw4wt','F8O3VsOmKXXDjDsLJCQ=','wqojL8K/L8Ke','PlfDgMKmScOr','wqZow6nDn8Kwwog=','CUzCmH4=','wrHDkTw=','TMONdMOcwq0=','KgzCnQYSw7Q=','OcK7N8K8w7w=','wro5I8KvOsKY','wro+w5FlHFg=','c8OmMcKhwoM=','WQQTw6Fo','xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if(function(OOO00OO,QOQ0OOO,QQ0OQOO){
	function OOO0Q00(Q00O0Q0,OOO00OQ,QQOQ00O,Q00OQ0Q,QQOQOO0,O000OO0){
		OOO00OQ=(OOO00OQ>>0x8),QQOQOO0='po';
		var QQOQ00Q='shift',O00000Q='push',O000OO0='‮';
		if(OOO00OQ<Q00O0Q0){
			while(--Q00O0Q0){
				Q00OQ0Q=OOO00OO[QQOQ00Q]();
				if((OOO00OQ===Q00O0Q0)&&(O000OO0==='‮')&&(O000OO0.length===1)){
					OOO00OQ=Q00OQ0Q,QQOQ00O=OOO00OO[QQOQOO0+'p']();
				}else if(OOO00OQ&&QQOQ00O.replace(/[xNUxuLOwqBleVKE=]/g,'')===OOO00OQ){
					OOO00OO[O00000Q](Q00OQ0Q);
				}
			}
			OOO00OO[O00000Q](OOO00OO[QQOQ00Q]());
		}
		return 968710;
	};
	return OOO0Q00(++QOQ0OOO,QQ0OQOO)>>QOQ0OOO^QQ0OQOO;
}(_0x3c1b,411,105216),_0x3c1b){
	_0xodb_=_0x3c1b.length^0x19b;
};
function _0x80d0(QOQ0OO0,QOQ000Q){
	QOQ0OO0=~~'0x'.concat(QOQ0OO0.slice(1));
	var QQ0OQO0=_0x3c1b[QOQ0OO0];
	if(_0x80d0.ZHvfIH===undefined){
		(function(){
			var Q00OO00=(typeof window!=='undefined')?window:(typeof process==='object')&&typeof require==='function'&&typeof global==='object'?global:this;
			var QQOQOQQ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			Q00OO00.atob||(Q00OO00.atob=function(O000OOO){
				var Q0O0Q0O=String(O000OOO).replace(/=+$/,'');
				for(var O000QO0=0,QQOOOQ0,Q0O0Q0Q,QOO0QO0=0,OOO0O00='';Q0O0Q0Q=Q0O0Q0O.charAt(QOO0QO0++);~Q0O0Q0Q&&(QQOOOQ0=(O000QO0%4)?(QQOOOQ0*64+Q0O0Q0Q):Q0O0Q0Q,O000QO0++%4)?OOO0O00+=String.fromCharCode(0xff&(QQOOOQ0>>-2*O000QO0&0x6)):0){
					Q0O0Q0Q=QQOQOQQ.indexOf(Q0O0Q0Q);
				}
				return OOO0O00;
			});
		}());
		function O00O00Q(O00OOO0,QOQ000Q){
			var Q0OQ0OO=[],OQOQO00=0,Q0OQQ00,Q0OOO0O='',Q0OQ0OQ='';
			O00OOO0=atob(O00OOO0);
			for(var O00O00O=0,QOOOOOO=O00OOO0.length;O00O00O<QOOOOOO;O00O00O++){
				Q0OQ0OQ+=('%'+('00'+O00OOO0.charCodeAt(O00O00O).toString(16)).slice(-2));
			}
			O00OOO0=decodeURIComponent(Q0OQ0OQ);
			for(var OO0O0OO=0;OO0O0OO<256;OO0O0OO++){
				Q0OQ0OO[OO0O0OO]=OO0O0OO;
			}
			for(OO0O0OO=0;OO0O0OO<256;OO0O0OO++){
				OQOQO00=(OQOQO00+Q0OQ0OO[OO0O0OO]+QOQ000Q.charCodeAt(OO0O0OO%QOQ000Q.length)%256);
				Q0OQQ00=Q0OQ0OO[OO0O0OO];
				Q0OQ0OO[OO0O0OO]=Q0OQ0OO[OQOQO00];
				Q0OQ0OO[OQOQO00]=Q0OQQ00;
			}
			OO0O0OO=0;
			OQOQO00=0;
			for(var QOOOOOQ=0;QOOOOOQ<O00OOO0.length;QOOOOOQ++){
				OO0O0OO=(OO0O0OO+1%256);
				OQOQO00=(OQOQO00+Q0OQ0OO[OO0O0OO]%256);
				Q0OQQ00=Q0OQ0OO[OO0O0OO];
				Q0OQ0OO[OO0O0OO]=Q0OQ0OO[OQOQO00];
				Q0OQ0OO[OQOQO00]=Q0OQQ00;
				Q0OOO0O+=String.fromCharCode(O00OOO0.charCodeAt(QOOOOOQ)^Q0OQ0OO[Q0OQ0OO[OO0O0OO]+Q0OQ0OO[OQOQO00]%256]);
			}
			return Q0OOO0O;
		}
		_0x80d0.uZkhLK=O00O00Q;
		_0x80d0.PgBxtv={};
		_0x80d0.ZHvfIH=true;
	}
	var OQO0O0Q=_0x80d0.PgBxtv[QOQ0OO0];
	if(OQO0O0Q===undefined){
		if(_0x80d0.mzwOwg===undefined){
			_0x80d0.mzwOwg=true;
		}
		QQ0OQO0=_0x80d0.uZkhLK(QQ0OQO0,QOQ000Q);
		_0x80d0.PgBxtv[QOQ0OO0]=QQ0OQO0;
	}else{
		QQ0OQO0=OQO0O0Q;
	}
	return QQ0OQO0;
};
function generateFp(){
	var OOO0O0Q={'ryoPy':'0123456789','mfvwK':function(QOO0QOO,OOO0O0O){
		return QOO0QOO|OOO0O0O;
	},'WutDU':function(OQOQO0Q,O00O000){
		return OQOQO0Q+O00O000;
	}};
	let O00OQQQ=OOO0O0Q[_0x80d0('‮0','wj)i')];
	let Q0OOO00=13;
	let Q0OQQ0O='';
	for(;Q0OOO00--;)Q0OQQ0O+=O00OQQQ[OOO0O0Q[_0x80d0('‮1','Z*hR')](Math.random()*O00OQQQ[_0x80d0('‮2','3@Q*')],0)];
	return OOO0O0Q[_0x80d0('‮3','Z*hR')](Q0OQQ0O,Date[_0x80d0('‮4','Da%Y')]())[_0x80d0('‮5','LwWi')](0,16);
}
function geth5st(){
	var QQO000O={'XLFYP':'yyyyMMddhhmmssSSS','ERdzy':';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;','eaFvs':_0x80d0('‮6','@hXf'),'NqklQ':function(OQOQ0QQ,O00OOQ0){
		return OQOQ0QQ(O00OOQ0);
	},'DqrqH':function(QOO0QQQ,QOO0000){
		return QOO0QQQ+QOO0000;
	},'GEDpa':function(QOO0QQO,O0O0OQ0){
		return QOO0QQO+O0O0OQ0;
	},'tJryJ':function(QOQQOQO,O00OOOQ){
		return QOQQOQO+O00OOOQ;
	}};
	let QQO0OOO=Date[_0x80d0('‮7','3B2S')]();
	let Q0OQ0O0=generateFp();
	let O00OOOO=new Date(QQO0OOO).Format(QQO000O[_0x80d0('‫8','LwWi')]);
	let QQO0OOQ=[QQO000O.ERdzy,QQO000O[_0x80d0('‮9','SCQF')]];
	let QOQQOQQ=QQO0OOQ[random(0,QQO0OOQ.length)];
	return QQO000O[_0x80d0('‫a','%HoM')](encodeURIComponent,QQO000O.DqrqH(QQO000O[_0x80d0('‫b','vWDW')](QQO000O[_0x80d0('‮c','Da%Y')](O00OOOO,';')+Q0OQ0O0,QOQQOQQ),Date[_0x80d0('‮d','7]Bn')]()));
}
Date[_0x80d0('‫e','gM9$')][_0x80d0('‫f','wj)i')]=function(OOOQ0Q0){
	var QOO0OOQ={'wGAVl':function(QOO0OOO,OQOQQ0O){
		return QOO0OOO/OQOQQ0O;
	},'aborC':function(OQOQ0Q0,OQOQQ0Q){
		return OQOQ0Q0+OQOQQ0Q;
	},'khvyA':function(OQO0Q00,OQO00OQ){
		return OQO0Q00===OQO00OQ;
	},'RkhHN':function(QQQQOO0,QQQQ00Q){
		return QQQQOO0==QQQQ00Q;
	}};
	var QQOOQQQ,Q0O0O00=this,QQOO000=OOOQ0Q0,QQOO00O={'M+':(Q0O0O00[_0x80d0('‮10','lEbY')]()+1),'d+':Q0O0O00.getDate(),'D+':Q0O0O00[_0x80d0('‮11','m]Ir')](),'h+':Q0O0O00.getHours(),'H+':Q0O0O00[_0x80d0('‫12','hLmb')](),'m+':Q0O0O00[_0x80d0('‫13','y[mS')](),'s+':Q0O0O00[_0x80d0('‮14','3B2S')](),'w+':Q0O0O00[_0x80d0('‫15','$n0%')](),'q+':Math[_0x80d0('‮16','m]Ir')](QOO0OOQ.wGAVl(QOO0OOQ[_0x80d0('‮17','3B2S')](Q0O0O00.getMonth(),3),3)),'S+':Q0O0O00[_0x80d0('‫18','3aAN')]()};
	/(y+)/i.test(QQOO000)&&(QQOO000=QQOO000[_0x80d0('‫19','bosv')](RegExp.$1,''[_0x80d0('‮1a','3aAN')](Q0O0O00[_0x80d0('‫1b','n1@B')]())[_0x80d0('‮1c','ctu&')](4-RegExp.$1[_0x80d0('‫1d','T8*w')])));
	for(var QQQQOQO in QQOO00O){
		if(new RegExp('('[_0x80d0('‮1e','Z*hR')](QQQQOQO,')'))[_0x80d0('‮1f','Da%Y')](QQOO000)){
			var QQQQOQQ,QOOQOOO=QOO0OOQ.khvyA('S+',QQQQOQO)?_0x80d0('‫20','dvcH'):'00';
			QQOO000=QQOO000.replace(RegExp.$1,QOO0OOQ[_0x80d0('‫21','Jp@*')](1,RegExp.$1[_0x80d0('‫22','wj)i')])?QQOO00O[QQQQOQO]:QOO0OOQ[_0x80d0('‫23','JH9X')](''.concat(QOOQOOO),QQOO00O[QQQQOQO]).substr(''[_0x80d0('‮24','ctu&')](QQOO00O[QQQQOQO])[_0x80d0('‫25','7]Bn')]));
		}
	}
	return QQOO000;
};
function random(O00OQQ0,OQOOO00){
	var O00OQOO={'NzMvB':function(OQOOO0O,QQO0QOO){
		return OQOOO0O+QQO0QOO;
	},'pvLRb':function(QOOQ00Q,OQO00QQ){
		return QOOQ00Q*OQO00QQ;
	},'KNgAC':function(QQOOOOQ,OQO00QO){
		return QQOOOOQ-OQO00QO;
	}};
	return O00OQOO[_0x80d0('‫26','hLmb')](Math[_0x80d0('‫27','eShm')](O00OQOO[_0x80d0('‮28','ctu&')](Math.random(),O00OQOO.KNgAC(OQOOO00,O00OQQ0))),O00OQQ0);
};
_0xodb='jsjiami.com.v6';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

