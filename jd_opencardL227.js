/*
8.24-9.10 千礼共明月 月满惠佳节
开卡脚本,一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 8.24-9.10 千礼共明月 月满惠佳节 ]

请求太频繁会被黑ip
过10分钟再执行

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#8.24-9.10 千礼共明月 月满惠佳节
1 13,17 1 1 * jd_opencardL227.js, tag=8.24-9.10 千礼共明月 月满惠佳节, enabled=true

*/

const $ = new Env('8.24-9.10 千礼共明月 月满惠佳节');
const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
const notify=$.isNode()?require('./sendNotify'):'';
let cookiesArr=[],cookie='';
if($.isNode()){
	Object.keys(jdCookieNode).forEach(QOOOO0Q=>{
		cookiesArr.push(jdCookieNode[QOOOO0Q]);
	});
	if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
}else{
	cookiesArr=[$.getdata('CookieJD'),$.getdata('CookieJD2'),...jsonParse($.getdata('CookiesJD')||'[]').map(Q00OQOO=>Q00OQOO.cookie)].filter(OOO000Q=>!!OOO000Q);
}
let lz_cookie={};
allMessage='';
message='';
$.hotFlag=false;
$.outFlag=false;
$.activityEnd=false;
let lz_jdpin_token_cookie='';
let activityCookie='';
let cookies=[];
!(async()=>{
	if(!cookiesArr[0]){
		$.msg($.name,'【提示】请先获取cookie\n直接使用NobyDa的京东签到获取','https://bean.m.jd.com/',{'open-url':'https://bean.m.jd.com/'});
		return;
	}
	$.activityId='dzafd47bd34bec92cf909834d21df0';
	$.shareUuid='4545563ca9d849a2b8968773ed969402';
	console.log('入口:\nhttps://lzdz1-isv.isvjcloud.com/m/1000004719/'+$.activityId+'/?shareUuid='+$.shareUuid);
	let QOO00Q0=['4545563ca9d849a2b8968773ed969402','1d07ae153ef44c1490d7539c60379d63','70bab756c78447ddac401b40441400e1'];
	let O0O0O00=Math.floor(Math.random()*3);
	let OQOQOOQ=0;
	OQOQOOQ=Math.floor(Math.random()*QOO00Q0.length);
	$.shareUuid=QOO00Q0[OQOQOOQ]?QOO00Q0[OQOQOOQ]:$.shareUuid;
	for(let OQOQOOO=0;OQOQOOO<cookiesArr.length;OQOQOOO++){
		cookie=cookiesArr[OQOQOOO];
		originCookie=cookiesArr[OQOQOOO];
		if(cookie){
			$.UserName=decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/)&&cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
			$.index=(OQOQOOO+1);
			message='';
			$.bean=0;
			$.hotFlag=false;
			$.nickName='';
			console.log('\n\n******开始【京东账号'+$.index+'】'+($.nickName||$.UserName)+'*********\n');
			await getUA();
			await run();
			await $.wait(3000);
			if((OQOQOOO==0)&&!$.actorUuid)break;
			if($.outFlag||$.activityEnd)break;
		}
	}
	if($.outFlag){
		let Q0OQQOQ='此ip已被限制，请过10分钟后再执行脚本';
		$.msg($.name,'',''+Q0OQQOQ);
		if($.isNode())await notify.sendNotify(''+$.name,''+Q0OQQOQ);
	}
	if(allMessage){
		$.msg($.name,'',''+allMessage);
	}
	console.log($.toStr(cookies));
})().catch(OO0OQQO=>$.logErr(OO0OQQO)).finally(()=>$.done());
async function run(){
	try{
		$.joinShopStatus=true;
		$.hasEnd=true;
		$.endTime=0;
		lz_jdpin_token_cookie='';
		$.Token='';
		$.Pin='';
		let Q0OQ00Q=false;
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
			console.log('此ip已被限制，请过10分钟后再执行脚本\n');
			return;
		}
		await takePostRequest('getMyPing');
		if(!$.Pin){
			console.log('获取[Pin]失败！');
			return;
		}
		if($.hotFlag)return;
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
		console.log($.actorUuid);
		await $.wait(1000);
		$.openList=[];
		$.allOpenCard=false;
		await takePostRequest('checkOpenCard');
		if($.allOpenCard==false){
			console.log('开卡任务');
			for(o of $.openList){
				$.openCard=false;
				if(o.openStatus==0){
					Q0OQ00Q=true;
					$.shopactivityId='';
					$.joinVenderId=o.venderId;
					await getshopactivityId();
					for(let OQOQQOO=0;OQOQQOO<Array(5).length;OQOQQOO++){
						if(OQOQQOO>0)console.log('第'+OQOQQOO+'次 重新开卡');
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
					await takePostRequest('checkOpenCard');
					await $.wait(1000);
				}
			}
		}else{
			console.log('已全部开卡');
		}
		await takePostRequest('followShop');
		await $.wait(parseInt(Math.random()*1000+1000,10));
		await takePostRequest('activityContent');
		$.log('签到: '+$.sign);
		if(!$.sign&&!$.outFlag){
			Q0OQ00Q=true;
			await takePostRequest('sign');
		}
		await $.wait(parseInt(Math.random()*1000+1000,10));
		if($.outFlag){
			console.log('此ip已被限制，请过10分钟后再执行脚本\n');
			return;
		}
		console.log('当前助力:'+$.shareUuid);
		if($.index==1){
			//$.shareUuid=$.actorUuid;
			console.log('后面的号都会助力:'+$.shareUuid);
		}
		if($.index%3==0)await $.wait(parseInt(Math.random()*5000+10000,10));
	}catch(OOOQOQO){
		console.log(OOOQOQO);
	}
}
async function takePostRequest(QQO00O0){
	if($.outFlag)return;
	let QO0OQQQ='https://lzdz1-isv.isvjcloud.com';
	let QOOQO00='';
	let OO0Q000='POST';
	let OO0QQQO='';
	switch(QQO00O0){
		case 'getSimpleActInfoVo':
			url=QO0OQQQ+'/dz/common/getSimpleActInfoVo';
			QOOQO00='activityId='+$.activityId;
			break;
		case 'getMyPing':
			url=QO0OQQQ+'/customer/getMyPing';
			QOOQO00='userId=1000004719&token='+$.Token+'&fromType=APP&pin=';
			break;
		case 'accessLogWithAD':
			url=QO0OQQQ+'/common/accessLogWithAD';
			let QQQ0Q0O=QO0OQQQ+'/m/1000004719/'+$.activityId+'/?shareUuid='+$.shareUuid;
			QOOQO00='venderId=1000004719&code=99&pin='+encodeURIComponent($.Pin)+'&activityId='+$.activityId+'&pageUrl='+encodeURIComponent(QQQ0Q0O)+'&subType=app&adSource=';
			break;
		case 'getUserInfo':
			url=QO0OQQQ+'/wxActionCommon/getUserInfo';
			QOOQO00='pin='+encodeURIComponent($.Pin);
			break;
		case 'activityContent':
			url=QO0OQQQ+'/dingzhi/aug/brandVip/activityContent';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&pinImg='+encodeURIComponent('https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png')+'&nick='+encodeURIComponent($.nickname)+'&cjyxPin=&cjhyPin=&shareUuid='+$.shareUuid;
			break;
		case 'drawContent':
			url=QO0OQQQ+'/dingzhi/taskact/common/drawContent';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'checkOpenCard':
			url=QO0OQQQ+'/dingzhi/aug/brandVip/initOpenCard';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&shareUuid='+$.shareUuid;
			break;
		case 'info':
			url=QO0OQQQ+'/dingzhi/linkgame/task/opencard/info';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid;
			break;
		case 'startDraw':
			url=QO0OQQQ+'/joint/order/draw';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&drawType=1';
			break;
		case 'followShop':
			url=QO0OQQQ+'/dingzhi/aug/brandVip/saveTask';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&taskType=1&taskValue=1';
			break;
		case 'sign':
			url=QO0OQQQ+'/dingzhi/aug/brandVip/saveTask';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&taskType=0&taskValue=0';
			break;
		case 'addCart':
		case 'browseGoods':
			url=QO0OQQQ+'/dingzhi/opencard/'+QQO00O0;
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			if(QQO00O0=='browseGoods')QOOQO00+='&value='+$.visitSkuValue;
			break;
		case'邀请':
		case'助力':
			if(QQO00O0=='助力'){
				url=QO0OQQQ+'/dingzhi/linkgame/assist';
			}else{
				url=QO0OQQQ+'/dingzhi/linkgame/assist/status';
			}
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&shareUuid='+$.shareUuid;
			break;
		case 'viewVideo':
		case 'visitSku':
		case 'toShop':
		case 'followPeony':
		case'addSku':
			url=QO0OQQQ+'/dingzhi/aug/brandVip/saveTask';
			let Q0QQQQO='';
			let OQQQO00='';
			if(QQO00O0=='viewVideo'){
				Q0QQQQO=31;
				OQQQO00=31;
			}else if(QQO00O0=='visitSku'){
				Q0QQQQO=5;
				OQQQO00=$.visitSkuValue||5;
			}else if(QQO00O0=='toShop'){
				Q0QQQQO=14;
				OQQQO00=$.toShopValue||14;
			}else if(QQO00O0=='followPeony'){
				Q0QQQQO=6;
				OQQQO00=6;
			}else if(QQO00O0=='addSku'){
				Q0QQQQO=21;
				OQQQO00=21;
			}
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid+'&taskType='+Q0QQQQO+'&taskValue='+OQQQO00;
			break;
		case 'getDrawRecordHasCoupon':
			url=QO0OQQQ+'/dingzhi/taskact/common/getDrawRecordHasCoupon';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid;
			break;
		case 'getShareRecord':
			url=QO0OQQQ+'/dingzhi/taskact/common/getShareRecord';
			QOOQO00='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&actorUuid='+$.actorUuid;
			break;
		case'抽奖':
			url=QO0OQQQ+'/dingzhi/aug/brandVip/draw';
			QOOQO00='activityId='+$.activityId+'&actorUuid='+$.actorUuid+'&pin='+encodeURIComponent($.Pin);
			break;
		default:
			console.log('错误'+QQO00O0);
	}
	let O0O0QO0=getPostRequest(url,QOOQO00,OO0Q000);
	return new Promise(async OO00OQ0=>{
		$.post(O0O0QO0,(O0OO000,O0OOQQO,QQQQQ0Q)=>{
			try{
				setActivityCookie(O0OOQQO);
				if(O0OO000){
					if(O0OOQQO&&(typeof O0OOQQO.statusCode!='undefined')){
						if(O0OOQQO.statusCode==493){
							console.log('此ip已被限制，请过10分钟后再执行脚本\n');
							$.outFlag=true;
						}
					}
					console.log(''+$.toStr(O0OO000,O0OO000));
					console.log(QQO00O0+' API请求失败，请检查网路重试');
				}else{
					dealReturn(QQO00O0,QQQQQ0Q);
				}
			}catch(QQQQ0OO){
				console.log(QQQQ0OO,O0OOQQO);
			}finally{
				OO00OQ0();
			}
		});
	});
}
async function dealReturn(QQQQ0OQ,Q0Q0000){
	let O0O0000='';
	try{
		if((QQQQ0OQ!='accessLogWithAD')||(QQQQ0OQ!='drawContent')){
			if(Q0Q0000){
				O0O0000=JSON.parse(Q0Q0000);
			}
		}
	}catch(Q0OOOOQ){
		console.log(QQQQ0OQ+' 执行任务异常');
		console.log(Q0Q0000);
		$.runFalag=false;
	}
	try{
		switch(QQQQ0OQ){
			case 'isvObfuscator':
				if(typeof O0O0000=='object'){
					if(O0O0000.errcode==0){
						if(typeof O0O0000.token!='undefined')$.Token=O0O0000.token;
					}else if(O0O0000.message){
						console.log('isvObfuscator '+(O0O0000.message||''));
					}else{
						console.log(Q0Q0000);
					}
				}else{
					console.log(Q0Q0000);
				}
				break;
			case 'getSimpleActInfoVo':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&O0O0000.result===true){
						if(typeof O0O0000.data.shopId!='undefined')$.shopId=O0O0000.data.shopId;
						if(typeof O0O0000.data.venderId!='undefined')$.venderId=O0O0000.data.venderId;
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'getMyPing':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&(O0O0000.result===true)){
						if(O0O0000.data&&typeof O0O0000.data.secretPin!='undefined')$.Pin=O0O0000.data.secretPin;
						if(O0O0000.data&&(typeof O0O0000.data.nickname!='undefined'))$.nickname=O0O0000.data.nickname;
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'getUserInfo':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&(O0O0000.result===true)){
						if(O0O0000.data&&(typeof O0O0000.data.yunMidImageUrl!='undefined'))$.attrTouXiang=O0O0000.data.yunMidImageUrl||'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'activityContent':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&O0O0000.result===true){
						$.endTime=O0O0000.data.endTime||O0O0000.data.activityVo&&O0O0000.data.activityVo.endTime||O0O0000.data.activity.endTime||0;
						$.hasEnd=O0O0000.data.hasEnd||false;
						$.score=O0O0000.data.score||0;
						$.score2=O0O0000.data.score2||0;
						$.score3=O0O0000.data.score3||0;
						$.sign=O0O0000.data.signStatus||false;
						$.actorUuid=O0O0000.data.actorUuid||'';
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'info':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&(O0O0000.result===true)){
						$.addCart=O0O0000.data.addCart||false;
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'checkOpenCard':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&(O0O0000.result===true)){
						let QO0OOOQ=O0O0000.data.cardList1||[];
						let OO00OO0=O0O0000.data.cardList2||[];
						let OO0000Q=O0O0000.data.cardList||[];
						let OO0OOQO=O0O0000.data.openCardList||[];
						let O0O0QQ0=O0O0000.data.openInfo||[];
						$.openList=[...OO0000Q,...QO0OOOQ,...OO00OO0,...OO0OOQO,...O0O0QQ0];
						$.allOpenCard=O0O0000.data.allOpenCard||O0O0000.data.isOpenCardStatus||false;
						$.openCardScore1=O0O0000.data.score1||0;
						$.openCardScore2=O0O0000.data.score2||0;
						$.drawScore=O0O0000.data.score||0;
						if(O0O0000.data.beans||O0O0000.data.addBeanNum)console.log('开卡获得:'+(O0O0000.data.beans||O0O0000.data.addBeanNum)+'豆');
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'startDraw':
			case 'followShop':
			case 'viewVideo':
			case 'visitSku':
			case 'followPeony':
			case 'toShop':
			case 'addSku':
			case 'sign':
			case 'addCart':
			case 'browseGoods':
			case'抽奖':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&(O0O0000.result===true)){
						if(typeof O0O0000.data=='object'){
							let Q0QQOOO='';
							let Q0OO00Q='抽奖';
							if(O0O0000.data.taskbeanNum){
								Q0QQOOO=O0O0000.data.taskbeanNum+'京豆';
							}
							if(O0O0000.data.addPoint){
								Q0QQOOO+=' '+O0O0000.data.addPoint+'游戏机会';
							}
							if(QQQQ0OQ=='followShop'){
								Q0OO00Q='关注';
								if(O0O0000.data.beanNumMember&&O0O0000.data.assistSendStatus){
									Q0QQOOO+=' 额外获得:'+O0O0000.data.beanNumMember+'京豆';
								}
							}else if((QQQQ0OQ=='addSku')||(QQQQ0OQ=='addCart')){
								Q0OO00Q='加购';
							}else if(QQQQ0OQ=='viewVideo'){
								Q0OO00Q='热门文章';
							}else if(QQQQ0OQ=='toShop'){
								Q0OO00Q='浏览店铺';
							}else if(QQQQ0OQ=='followPeony'){
								Q0OO00Q='关注频道';
							}else if(QQQQ0OQ=='visitSku'||(QQQQ0OQ=='browseGoods')){
								Q0OO00Q='浏览商品';
							}else if(QQQQ0OQ=='sign'){
								Q0OO00Q='签到';
							}else{
								Q0QQOOO=O0O0000.data.wdsrvo.drawOk==true&&(O0O0000.data.wdsrvo.name||'空气💨');
							}
							if(!Q0QQOOO){
								Q0QQOOO='空气💨';
							}
							console.log(Q0OO00Q+'获得:'+(Q0QQOOO||Q0Q0000));
						}else{
							console.log(''+Q0Q0000);
						}
					}else if(O0O0000.errorMessage){
						$.runFalag=false;
						console.log(''+(O0O0000.errorMessage||''));
					}else{
						console.log(''+Q0Q0000);
					}
				}else{
					console.log(''+Q0Q0000);
				}
				break;
			case'getDrawRecordHasCoupon':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&O0O0000.result===true){
						console.log('我的奖品：');
						let QO00QOQ=0;
						let OO0QQOQ=0;
						for(let QQQO0QQ in O0O0000.data){
							let OO0000O=O0O0000.data[QQQO0QQ];
							if((OO0000O.infoName=='20京豆')&&OO0000O.drawStatus&&OO0000O.value){
								QO00QOQ++;
								OO0QQOQ=OO0000O.infoName.replace('京豆','');
							}else{
								console.log(''+OO0000O.infoName);
							}
						}
						if(QO00QOQ>0)console.log('邀请好友('+QO00QOQ+'):'+((QO00QOQ*parseInt(OO0QQOQ,10))||30)+'京豆');
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case 'getShareRecord':
				if(typeof O0O0000=='object'){
					if(O0O0000.result&&(O0O0000.result===true)&&O0O0000.data){
						$.ShareCount=O0O0000.data.length;
						$.log('=========== 你邀请了:'+$.ShareCount+'个\n');
					}else if(O0O0000.errorMessage){
						console.log(QQQQ0OQ+' '+(O0O0000.errorMessage||''));
					}else{
						console.log(QQQQ0OQ+' '+Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
				break;
			case'邀请':
			case'助力':
				if(typeof O0O0000=='object'){
					if(O0O0000.data.status==200){
						if(QQQQ0OQ=='助力'){
							console.log('助力成功');
						}else{
							$.yaoqing=true;
						}
					}else if(O0O0000.data.status==105){
						console.log('已经助力过');
					}else if(O0O0000.data.status==104){
						console.log('已经助力其他人');
					}else if(O0O0000.data.status==101){}else{
						console.log(Q0Q0000);
					}
				}else{
					console.log(QQQQ0OQ+' '+Q0Q0000);
				}
			case 'accessLogWithAD':
			case'drawContent':
				break;
			default:
				console.log(QQQQ0OQ+'-> '+Q0Q0000);
		}
		if(typeof O0O0000=='object'){
			if(O0O0000.errorMessage){
				if(O0O0000.errorMessage.indexOf('火爆')>-1){
					$.hotFlag=true;
				}
			}
		}
	}catch(O0QQQO0){
		console.log(O0QQQO0);
	}
}
function getPostRequest(OQ0OQ0O,OQ0O0Q0,OOQOQQO='POST'){
	let QQ0QO0O={'Accept':'application/json','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'User-Agent':$.UA,'X-Requested-With':'XMLHttpRequest'};
	if(OQ0OQ0O.indexOf('https://lzdz1-isv.isvjcloud.com')>-1){
		QQ0QO0O.Referer='https://lzdz1-isv.isvjcloud.com/m/1000004719/'+$.activityId+'/?shareUuid='+$.shareUuid;
		QQ0QO0O.Cookie=''+(lz_jdpin_token_cookie&&lz_jdpin_token_cookie||'')+($.Pin&&('AUTH_C_USER='+$.Pin+';')||'')+activityCookie;
	}
	return{'url':OQ0OQ0O,'method':OOQOQQO,'headers':QQ0QO0O,'body':OQ0O0Q0,'timeout':30000};
}
function getCk(){
	return new Promise(QO0Q00O=>{
		let QO0Q00Q={'url':'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token','headers':{'Accept':'application/json, text/plain, */*','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'Referer':'https://lzdz1-isv.isvjcloud.com/m/1000004719/'+$.activityId+'/?shareUuid='+$.shareUuid,'User-Agent':$.UA},'timeout':30000};
		$.get(QO0Q00Q,async(QO0QOO0,OOQOQOO,OQQO0OQ)=>{
			try{
				if(QO0QOO0){
					if(OOQOQOO&&(typeof OOQOQOO.statusCode!='undefined')){
						if(OOQOQOO.statusCode==493){
							console.log('此ip已被限制，请过10分钟后再执行脚本\n');
							$.outFlag=true;
						}
					}
					console.log(''+$.toStr(QO0QOO0));
					console.log($.name+' cookie API请求失败，请检查网路重试');
				}else{
					let OOQOQO0=OQQO0OQ.match(/(活动已经结束)/)&&OQQO0OQ.match(/(活动已经结束)/)[1]||'';
					if(OOQOQO0){
						$.activityEnd=true;
						console.log('活动已结束');
					}
					setActivityCookie(OOQOQOO);
				}
			}catch(QO0QQQO){
				$.logErr(QO0QQQO,OOQOQOO);
			}finally{
				QO0Q00O();
			}
		});
	});
}
function setActivityCookie(O0Q0OOQ){
	if(O0Q0OOQ.headers['set-cookie']){
		cookie=originCookie+';';
		for(let OQ0Q0O0 of O0Q0OOQ.headers['set-cookie']){
			lz_cookie[OQ0Q0O0.split(';')[0].substr(0,OQ0Q0O0.split(';')[0].indexOf('='))]=OQ0Q0O0.split(';')[0].substr(OQ0Q0O0.split(';')[0].indexOf('=')+1);
		}
		for(const O0OOQOQ of Object.keys(lz_cookie)){
			cookie+=O0OOQOQ+'='+lz_cookie[O0OOQOQ]+';';
		}
		activityCookie=cookie;
	}
}
async function getToken(){
	let Q0QO00O=await getSign('isvObfuscator',{'id':'','url':'https://lzdz1-isv.isvjcloud.com'});
	let QQ0QQ0Q={'url':'https://api.m.jd.com/client.action?functionId=isvObfuscator','headers':{'Host':'api.m.jd.com','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)','Accept-Language':'zh-Hans-CN;q=1','Accept-Encoding':'gzip, deflate, br'},'body':''+$.Signz};
	return new Promise(OQ00Q0O=>{
		$.post(QQ0QQ0Q,(OOQ0QQO,Q0Q0QO0,Q00QOOQ)=>{
			try{
				if(OOQ0QQO){
					$.log(OOQ0QQO);
				}else{
					if(Q00QOOQ){
						Q00QOOQ=JSON.parse(Q00QOOQ);
						if(Q00QOOQ.code==='0'){
							$.Token=Q00QOOQ.token;
						}
					}else{
						$.log('京东返回了空数据');
					}
				}
			}catch(O0QOQQ0){
				$.log(O0QOQQ0);
			}finally{
				OQ00Q0O();
			}
		});
	});
}
function getSign(OQ0QQ00,O0OOQO0){
	let OQQO0O0={'fn':OQ0QQ00,'body':JSON.stringify(O0OOQO0)};
	let QOQOQQO={'url':'https://api.nolanstore.top/sign','body':JSON.stringify(OQQO0O0),'headers':{'Content-Type':'application/json'},'timeout':30000};
	return new Promise(async QQ0Q0QQ=>{
		$.post(QOQOQQO,(QQ000Q0,OOQOOOO,OQQO0O0)=>{
			try{
				if(QQ000Q0){
					console.log(''+JSON.stringify(QQ000Q0));
					console.log($.name+' getSign API请求失败，请检查网路重试');
				}else{
					OQQO0O0=JSON.parse(OQQO0O0);
					if((typeof OQQO0O0==='object')&&OQQO0O0&&OQQO0O0.body){
						$.Signz=OQQO0O0.body||'';
					}else{
						console.log('获取服务失败~~');
					}
				}
			}catch(QQ0OO0Q){
				$.logErr(QQ0OO0Q,OOQOOOO);
			}finally{
				QQ0Q0QQ(OQQO0O0);
			}
		});
	});
};
async function getUA(){
	$.UA='jdapp;iPhone;10.1.4;13.1.2;'+randomString(40)+';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}
function randomString(QOQOQO0){
	QOQOQO0=QOQOQO0||32;
	let QQ00Q0Q='abcdef0123456789',O0QO00O=QQ00Q0Q.length,QO0QOQQ='';
	for(i=0;i<QOQOQO0;i++)QO0QOQQ+=QQ00Q0Q.charAt(Math.floor(Math.random()*O0QO00O));
	return QO0QOQQ;
}
function jsonParse(QQ000QO){
	if(typeof QQ000QO=='string'){
		try{
			return JSON.parse(QQ000QO);
		}catch(OOQO00O){
			console.log(OOQO00O);
			$.msg($.name,'','请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
			return[];
		}
	}
}
async function joinShop(){
	if(!$.joinVenderId)return;
	return new Promise(async OQ00O00=>{
		$.errorJoinShop='活动太火爆，请稍后再试';
		let O0QOOOQ='';
		if($.shopactivityId)O0QOOOQ=',"activityId":'+$.shopactivityId;
		let O0QOOOO='{"venderId":"'+$.joinVenderId+'","shopId":"'+$.joinVenderId+'","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0'+O0QOOOQ+',"channel":406}';
		let QOQ0QOO=await geth5st();
		const QOQ0QOQ={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body='+O0QOOOO+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+QOQ0QOO,'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(QOQ0QOQ,async(OOOOQ00,OOQ0O0O,QQ0OOOQ)=>{
			try{
				QQ0OOOQ=QQ0OOOQ&&QQ0OOOQ.match(/jsonp_.*?\((.*?)\);/)&&QQ0OOOQ.match(/jsonp_.*?\((.*?)\);/)[1]||QQ0OOOQ;
				let QQ0OOOO=$.toObj(QQ0OOOQ,QQ0OOOQ);
				if(QQ0OOOO&&(typeof QQ0OOOO=='object')){
					if(QQ0OOOO&&(QQ0OOOO.success===true)){
						console.log(QQ0OOOO.message);
						$.errorJoinShop=QQ0OOOO.message;
						if(QQ0OOOO.result&&QQ0OOOO.result.giftInfo){
							for(let OQ00O0O of QQ0OOOO.result.giftInfo.giftList){
								console.log('入会获得:'+OQ00O0O.discountString+OQ00O0O.prizeName+OQ00O0O.secondLineDesc);
							}
						}
					}else if(QQ0OOOO&&typeof QQ0OOOO=='object'&&QQ0OOOO.message){
						$.errorJoinShop=QQ0OOOO.message;
						console.log(''+(QQ0OOOO.message||''));
					}else{
						console.log(QQ0OOOQ);
					}
				}else{
					console.log(QQ0OOOQ);
				}
			}catch(Q000Q00){
				$.logErr(Q000Q00,OOQ0O0O);
			}finally{
				OQ00O00();
			}
		});
	});
}
async function getshopactivityId(){
	return new Promise(async OOQQ0QQ=>{
		let OOOOQ0O='{"venderId":"'+$.joinVenderId+'","channel":406,"payUpShop":true}';
		let QQ0QQO0=await geth5st();
		const OOOOQ0Q={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body='+OOOOQ0O+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+QQ0QQO0,'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(OOOOQ0Q,async(Q0000O0,O00QOOQ,QOQQQOO)=>{
			try{
				QOQQQOO=QOQQQOO&&QOQQQOO.match(/jsonp_.*?\((.*?)\);/)&&QOQQQOO.match(/jsonp_.*?\((.*?)\);/)[1]||QOQQQOO;
				let QQ0OOQ0=$.toObj(QOQQQOO,QOQQQOO);
				if(QQ0OOQ0&&(typeof QQ0OOQ0=='object')){
					if(QQ0OOQ0&&(QQ0OOQ0.success==true)){
						console.log('入会:'+(QQ0OOQ0.result.shopMemberCardInfo.venderCardName||''));
						$.shopactivityId=QQ0OOQ0.result.interestsRuleList&&QQ0OOQ0.result.interestsRuleList[0]&&QQ0OOQ0.result.interestsRuleList[0].interestsInfo&&QQ0OOQ0.result.interestsRuleList[0].interestsInfo.activityId||'';
					}
				}else{
					console.log(QOQQQOO);
				}
			}catch(QOQQQOQ){
				$.logErr(QOQQQOQ,O00QOOQ);
			}finally{
				OOQQ0QQ();
			}
		});
	});
}
var _0xodb='jsjiami.com.v6',_0xodb_=['‮_0xodb'],_0x3c1b=[_0xodb,'wqkgAcKeOQ==','NBDCnDEf','wqhhw7HDi8Ka','wrzCuHM/w6Qj','wpJyw7PDuMKE','E0bCnA==','BxbCg8KoSA==','QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==','N8KtRw==','LDbCrMKSfQ==','w6LDpG1qNA==','wpEXUcOjCA==','FV7Ch8KGZQ==','CWPCmXPCnA==','wrg0w4g=','YsOYw4oQw7oKAMOowok=','AAbCgQwHw6g=','w5bDjClaCcO8YcK7','JMKpOsO2ayRI','WsO5CMKfwq7DnMOJwqE=','w40KQnnCnMOYf8OJw4Na','PsKnRGvCtjUTZEhE','w7QjwrVeScOw','JcKgIcOdeA==','OMKgX0rCkA==','VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==','w5bCmMOtwrAXw4Je','UHLCjsOsw4wt','F8O3VsOmKXXDjDsLJCQ=','wqojL8K/L8Ke','PlfDgMKmScOr','wqZow6nDn8Kwwog=','CUzCmH4=','wrHDkTw=','TMONdMOcwq0=','KgzCnQYSw7Q=','OcK7N8K8w7w=','wro5I8KvOsKY','wro+w5FlHFg=','c8OmMcKhwoM=','WQQTw6Fo','xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if(function(OOQQ0QO,Q00Q0OQ,Q00QQ00){
	function QQ0OQQQ(QQ0OQQO,QQ0O000,OQ000QQ,QOQO00O,OQ000QO,QOQO00Q){
		QQ0O000=(QQ0O000>>0x8),OQ000QO='po';
		var OOQQ0Q0='shift',Q00QQ0Q='push',QOQO00Q='‮';
		if(QQ0O000<QQ0OQQO){
			while(--QQ0OQQO){
				QOQO00O=OOQQ0QO[OOQQ0Q0]();
				if(QQ0O000===QQ0OQQO&&(QOQO00Q==='‮')&&QOQO00Q.length===1){
					QQ0O000=QOQO00O,OQ000QQ=OOQQ0QO[OQ000QO+'p']();
				}else if(QQ0O000&&OQ000QQ.replace(/[xNUxuLOwqBleVKE=]/g,'')===QQ0O000){
					OOQQ0QO[Q00QQ0Q](QOQO00O);
				}
			}
			OOQQ0QO[Q00QQ0Q](OOQQ0QO[OOQQ0Q0]());
		}
		return 968710;
	};
	return (QQ0OQQQ(++Q00Q0OQ,Q00QQ00)>>Q00Q0OQ)^Q00QQ00;
}(_0x3c1b,411,105216),_0x3c1b){
	_0xodb_=_0x3c1b.length^0x19b;
};
function _0x80d0(OOQQ0OO,QOQ0QQ0){
	OOQQ0OO=~~'0x'.concat(OOQQ0OO.slice(1));
	var Q00OQ0Q=_0x3c1b[OOQQ0OO];
	if(_0x80d0.ZHvfIH===undefined){
		(function(){
			var QQOQ00Q=(typeof window!=='undefined')?window:(typeof process==='object')&&typeof require==='function'&&(typeof global==='object')?global:this;
			var O00000Q='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			QQOQ00Q.atob||(QQOQ00Q.atob=function(O000000){
				var O00QQOQ=String(O000000).replace(/=+$/,'');
				for(var QQO0OQQ=0,O00QQOO,OQ000O0,QOQQOOQ=0,QOOOQO0='';OQ000O0=O00QQOQ.charAt(QOQQOOQ++);~OQ000O0&&(O00QQOO=(QQO0OQQ%4)?(O00QQOO*64+OQ000O0):OQ000O0,QQO0OQQ++%4)?QOOOQO0+=String.fromCharCode(0xff&O00QQOO>>(-2*QQO0OQQ&0x6)):0){
					OQ000O0=O00000Q.indexOf(OQ000O0);
				}
				return QOOOQO0;
			});
		}());
		function QOQQOOO(O00OOQO,QOQ0QQ0){
			var OOOOO0O=[],Q00O0QQ=0,Q00O0QO,OOO0Q0Q='',QQOQOOO='';
			O00OOQO=atob(O00OOQO);
			for(var O000QQO=0,QQOQOOQ=O00OOQO.length;O000QQO<QQOQOOQ;O000QQO++){
				QQOQOOO+='%'+('00'+O00OOQO.charCodeAt(O000QQO).toString(16)).slice(-2);
			}
			O00OOQO=decodeURIComponent(QQOQOOO);
			for(var QOQ0OQO=0;QOQ0OQO<256;QOQ0OQO++){
				OOOOO0O[QOQ0OQO]=QOQ0OQO;
			}
			for(QOQ0OQO=0;QOQ0OQO<256;QOQ0OQO++){
				Q00O0QQ=((Q00O0QQ+OOOOO0O[QOQ0OQO])+QOQ0QQ0.charCodeAt(QOQ0OQO%QOQ0QQ0.length))%256;
				Q00O0QO=OOOOO0O[QOQ0OQO];
				OOOOO0O[QOQ0OQO]=OOOOO0O[Q00O0QQ];
				OOOOO0O[Q00O0QQ]=Q00O0QO;
			}
			QOQ0OQO=0;
			Q00O0QQ=0;
			for(var Q0000QQ=0;Q0000QQ<O00OOQO.length;Q0000QQ++){
				QOQ0OQO=(QOQ0OQO+1%256);
				Q00O0QQ=(Q00O0QQ+OOOOO0O[QOQ0OQO])%256;
				Q00O0QO=OOOOO0O[QOQ0OQO];
				OOOOO0O[QOQ0OQO]=OOOOO0O[Q00O0QQ];
				OOOOO0O[Q00O0QQ]=Q00O0QO;
				OOO0Q0Q+=String.fromCharCode(O00OOQO.charCodeAt(Q0000QQ)^OOOOO0O[OOOOO0O[QOQ0OQO]+OOOOO0O[Q00O0QQ]%256]);
			}
			return OOO0Q0Q;
		}
		_0x80d0.uZkhLK=QOQQOOO;
		_0x80d0.PgBxtv={};
		_0x80d0.ZHvfIH=true;
	}
	var QOQQQQ0=_0x80d0.PgBxtv[OOQQ0OO];
	if(QOQQQQ0===undefined){
		if(_0x80d0.mzwOwg===undefined){
			_0x80d0.mzwOwg=true;
		}
		Q00OQ0Q=_0x80d0.uZkhLK(Q00OQ0Q,QOQ0QQ0);
		_0x80d0.PgBxtv[OOQQ0OO]=Q00OQ0Q;
	}else{
		Q00OQ0Q=QOQQQQ0;
	}
	return Q00OQ0Q;
};
function generateFp(){
	var QOQQQQO={'ryoPy':'0123456789','mfvwK':function(QOOOQQ0,OOQQO00){
		return QOOOQQ0|OOQQO00;
	},'WutDU':function(QQOQOQO,Q00OO00){
		return QQOQOQO+Q00OO00;
	}};
	let Q0O0Q0O=QOQQQQO[_0x80d0('‮0','wj)i')];
	let O000QO0=13;
	let QQOOOQ0='';
	for(;O000QO0--;)QQOOOQ0+=Q0O0Q0O[QOQQQQO[_0x80d0('‮1','Z*hR')](Math.random()*Q0O0Q0O[_0x80d0('‮2','3@Q*')],0)];
	return QOQQQQO[_0x80d0('‮3','Z*hR')](QQOOOQ0,Date[_0x80d0('‮4','Da%Y')]())[_0x80d0('‮5','LwWi')](0,16);
}
function geth5st(){
	var O0OQOQO={'XLFYP':'yyyyMMddhhmmssSSS','ERdzy':';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;','eaFvs':_0x80d0('‮6','@hXf'),'NqklQ':function(QQOOOQQ,Q0O0Q00){
		return QQOOOQQ(Q0O0Q00);
	},'DqrqH':function(QQOQQOQ,QQOOOQO){
		return QQOQQOQ+QQOOOQO;
	},'GEDpa':function(Q0O00OQ,OOO0O0Q){
		return Q0O00OQ+OOO0O0Q;
	},'tJryJ':function(OOO0O0O,OQOQO0Q){
		return OOO0O0O+OQOQO0Q;
	}};
	let O00O000=Date[_0x80d0('‮7','3B2S')]();
	let Q0OQ0Q0=generateFp();
	let OQOQO0O=new Date(O00O000).Format(O0OQOQO[_0x80d0('‫8','LwWi')]);
	let QQO0000=[O0OQOQO.ERdzy,O0OQOQO[_0x80d0('‮9','SCQF')]];
	let QQO0QQO=QQO0000[random(0,QQO0000.length)];
	return O0OQOQO[_0x80d0('‫a','%HoM')](encodeURIComponent,O0OQOQO.DqrqH(O0OQOQO[_0x80d0('‫b','vWDW')](O0OQOQO[_0x80d0('‮c','Da%Y')](OQOQO0O,';')+Q0OQ0Q0,QQO0QQO),Date[_0x80d0('‮d','7]Bn')]()));
}
Date[_0x80d0('‫e','gM9$')][_0x80d0('‫f','wj)i')]=function(O00OQQQ){
	var O000QQ0={'wGAVl':function(O000QOO,Q0O00QQ){
		return O000QOO/Q0O00QQ;
	},'aborC':function(O0O0OQ0,OOOQQ0Q){
		return O0O0OQ0+OOOQQ0Q;
	},'khvyA':function(O00OOOQ,QQO0OOO){
		return O00OOOQ===QQO0OOO;
	},'RkhHN':function(Q0OQ0O0,O00OOOO){
		return Q0OQ0O0==O00OOOO;
	}};
	var QOQQOQQ,OOOQ0Q0=this,OOOQQ0O=O00OQQQ,QOOQQO0={'M+':(OOOQ0Q0[_0x80d0('‮10','lEbY')]()+1),'d+':OOOQ0Q0.getDate(),'D+':OOOQ0Q0[_0x80d0('‮11','m]Ir')](),'h+':OOOQ0Q0.getHours(),'H+':OOOQ0Q0[_0x80d0('‫12','hLmb')](),'m+':OOOQ0Q0[_0x80d0('‫13','y[mS')](),'s+':OOOQ0Q0[_0x80d0('‮14','3B2S')](),'w+':OOOQ0Q0[_0x80d0('‫15','$n0%')](),'q+':Math[_0x80d0('‮16','m]Ir')](O000QQ0.wGAVl(O000QQ0[_0x80d0('‮17','3B2S')](OOOQ0Q0.getMonth(),3),3)),'S+':OOOQ0Q0[_0x80d0('‫18','3aAN')]()};
	/(y+)/i.test(OOOQQ0O)&&(OOOQQ0O=OOOQQ0O[_0x80d0('‫19','bosv')](RegExp.$1,''[_0x80d0('‮1a','3aAN')](OOOQ0Q0[_0x80d0('‫1b','n1@B')]())[_0x80d0('‮1c','ctu&')](4-RegExp.$1[_0x80d0('‫1d','T8*w')])));
	for(var OO0O0Q0 in QOOQQO0){
		if(new RegExp('('[_0x80d0('‮1e','Z*hR')](OO0O0Q0,')'))[_0x80d0('‮1f','Da%Y')](OOOQQ0O)){
			var QOOOOQ0,OO0OQ0O=O000QQ0.khvyA('S+',OO0O0Q0)?_0x80d0('‫20','dvcH'):'00';
			OOOQQ0O=OOOQQ0O.replace(RegExp.$1,O000QQ0[_0x80d0('‫21','Jp@*')](1,RegExp.$1[_0x80d0('‫22','wj)i')])?QOOQQO0[OO0O0Q0]:O000QQ0[_0x80d0('‫23','JH9X')](''.concat(OO0OQ0O),QOOQQO0[OO0O0Q0]).substr(''[_0x80d0('‮24','ctu&')](QOOQQO0[OO0O0Q0])[_0x80d0('‫25','7]Bn')]));
		}
	}
	return OOOQQ0O;
};
function random(OO0OQ0Q,Q00O0OO){
	var OQOQQ00={'NzMvB':function(O00OQO0,OQOQ0OQ){
		return O00OQO0+OQOQ0OQ;
	},'pvLRb':function(OQO00Q0,OQO0Q0Q){
		return OQO00Q0*OQO0Q0Q;
	},'KNgAC':function(QQQQOOQ,Q0O0O0O){
		return QQQQOOQ-Q0O0O0O;
	}};
	return OQOQQ00[_0x80d0('‫26','hLmb')](Math[_0x80d0('‫27','eShm')](OQOQQ00[_0x80d0('‮28','ctu&')](Math.random(),OQOQQ00.KNgAC(Q00O0OO,OO0OQ0Q))),OO0OQ0Q);
};
_0xodb='jsjiami.com.v6';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

