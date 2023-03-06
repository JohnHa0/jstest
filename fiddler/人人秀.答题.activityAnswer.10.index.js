/**
 * 答题
 */
AmdLoader.define(['views/pagesHtml', 'rrxiu/mini/pluginUtils', 'rrxiu/comActivityServer', 'rrxiu/pageRenderUtil','views/answerServer','rrxiu/chanceCard'],
	function(pagesHtml, pluginUtils, commonServer, pageRenderUtil, answerServer,chanceCardCom) {

		var chanceCard = chanceCardCom.component;
		//region 全局参数
		var CoolApi = null,
			IsEditing = false,
			Domain = '',
			WsiteGuid = '',
			ClickType = 'click',
			isAllowFlip = true,
			checkpay = '',
			orderNo = '',
			_eid = '',
			HDHelper = {},
			activityUtil = {},
			Vue = {},
			Utils = {},
			cacheUtil = {},
			navigateUtil = {};
		var isFristMount = 0;

		var defaultSkin = {
			themeColor: "#0080FF",
			colorStyle: {
				themeColor: "#0080FF",
				color: "#0080FF"
			},
			startBtnStyle: {
				color: "#fff",
				bgColor: "#0080FF",
				bgImage: "",
				btnText: '开始答题',
				radius: 25,
			},
			bgStyle: {
			    backgroundColor: "",
			    backgroundImage: "mini/plugin/answer/default_bg.png"
			},
			
		};

		function pluginApp() {
			var that = this;

		}
		pluginApp.prototype = {
			isLoaded: false,
			content: '',
			constructor: pluginApp,
			assets: {},
			initAssets() {

			},
			init() {
				CoolApi.loadCss(pluginUtils.getFile(Domain, 'index.css', 'css'));
				// this.wrapper.html(pagesHtml.main);
				var _domApp = this.wrapper;
				this.register(_domApp);

			},
			initServerOPtions(content) {
				commonServer.setOptions({
					api: CoolApi,
					activityGuid: content.activityGuid,
					wsiteGuid: content.wsiteGuid,
					mallGuid: content.mallGuid,
					Utils: Utils
				});
				answerServer.setOptions({
					api: CoolApi,
					activityGuid: content.activityGuid,
					wsiteGuid: content.wsiteGuid,
					mallGuid: content.mallGuid,
					Utils: Utils
				});
			},
			register: function(_domApp) {
				//一定要在初始化的时候设置，否则调用部分方法可能会报错
				pluginUtils.setApi(CoolApi)
				this.content = this.config.content;
				this.initServerOPtions(this.content);
				let thatContent = this.content;
				isFristMount++;
				if (this.component) {
					_domApp.html('').append(this.component.$mount().$el);
					return
				}
				MyComponent = Vue.extend({
					template: pagesHtml.home,
					data: () => {
						return {
							themeColor: '#0080FF',
							color: '#0080FF',
							activityGuid: '',
							activityType: 31,
							startBtnStyle: '',
							activityInfo: {
								startTime: '',
								endTime: '',
								joinData: {
									list: [],
									total: 0
								},
								skin: {

								},
								showSetting: {},
								activityExt: {}
							},

							pagePath: Vue.$pagePath,
							startBtnText: '开始答题',
							rankData: {
								list: []
							},
							prizeCode: '',
							showTops: false,
							isShowTopEntry: true,
							serviceHost:CoolApi.getServiceHost(),
							openPractise:0,
                			practiceType:1,
						}
					},

					mounted() {
						this.getActive();
					},
					components:{
						chanceCard
					},
					methods: {
						getActive() {
							let options = {
								activityGuid: thatContent.activityGuid,
								wsiteGuid: thatContent.wsiteGuid,
								mallGuid: thatContent.mallGuid,
								activityType: thatContent.activityType
							}
							if (!IsEditing) {
								Utils.showLoading();
							}
							commonServer.getActivity(options).then(data => {
								Utils.hideLoading();
								if (data) {
									if(!IsEditing){
										Utils.sendActivityDataInH5(data)
									}
									let activityInfo = data;
									this.initTheme(activityInfo);
									this.activityInfo = activityInfo;
									this.activityGuid = this.activityInfo.guid;
									this.activityType = this.activityInfo.activityType;
									this.initAnswerTopBar()
									if (!IsEditing) {
										activityUtil.initAbnormal({
											activityGuid:this.activityGuid,
											content:'上次答题未正常提交，是否继续上次答题？',
											url:this.pagePath.answerContent,
										})
									}
									if(this.activityInfo.activityAnswerPractise){
										this.openPractise = this.activityInfo.activityAnswerPractise.openPractise || 0;
										this.practiceType = this.activityInfo.activityAnswerPractise.practiceType || 1;
									}
								}
							})
						},
						initTheme(activityInfo) {
							if (!activityInfo.skin.themeColor) {
								activityInfo.skin = defaultSkin;
							}
							this.themeColor = activityInfo.skin.themeColor;
							if(activityInfo.skin.colorStyle){
								this.color = activityInfo.skin.colorStyle.color || this.themeColor;
							}
							
							if (!activityInfo.skin.startBtnStyle) {
								activityInfo.skin.startBtnStyle = this.activityInfo.skin
									.startBtnStyle;
							}

							if (activityInfo.skin.startBtnStyle.bgImage) {
								this.startBtnStyle = pageRenderUtil.styleObjectToString({
									backgroundImage: 'url(' + activityInfo.skin
										.startBtnStyle
										.bgImage + ')',
									backgroundSize: "cover",
									color: activityInfo.skin.startBtnStyle.color,
									borderRadius: activityInfo.skin.startBtnStyle.radius
								})
							} else {
								this.startBtnStyle = pageRenderUtil.styleObjectToString({
									backgroundColor: activityInfo.skin.startBtnStyle
										.bgColor,
									color: activityInfo.skin.startBtnStyle.color,
									borderRadius: activityInfo.skin.startBtnStyle.radius
								})
							}

							this.startBtnText = activityInfo.skin.startBtnStyle.btnText
						},


						initAnswerTopBar() {
							let activityInfo = this.activityInfo,
								isShowTopByDay = activityInfo.showSetting.isShowTopByDay,
								isShowTopByWeek = activityInfo.showSetting.isShowTopByWeek,
								isShowTopByMonth = activityInfo.showSetting.isShowTopByMonth,
								isShowTop = activityInfo.showSetting.isShowTop,
								isShowTopEntry = true;

							if (isShowTopByDay == '0' && isShowTopByWeek == '0' &&
								isShowTopByMonth == '0' && isShowTop == '0') {
								isShowTopEntry = false;
							}
							// 编辑端不需要
							if (!IsEditing) {
								cacheUtil.setData('ISHOW_ANSWER_TOP_BAR_'+activityInfo.guid, isShowTopEntry)
								cacheUtil.setData('ANSWER_FLAG_'+activityInfo.guid, true)
							}
							if (!isShowTopEntry) {
								this.isShowTopEntry = isShowTopEntry
							}
						},
						startExam($event) {
							if (IsEditing) return;

							Utils.recordClickEvent($event);

							Utils.showLoginDialog(() => {
								activityUtil.checkJoinLimit(this.activityInfo, () => {
									Utils.showLoading()
									let data = {
										activityGuid: this.activityInfo.guid,
										activityType: this.activityInfo.activityType,
										wsiteGuid: this.activityInfo.wsiteGuid,
										mallGuid: this.activityInfo.mallGuid
									};
									answerServer.updateAnswerCount(data).then(
									res => {
										Utils.hideLoading()
										if (res.result == 0) {
											var in_array=function (search,array){
			for(var i in array){
				if(array[i]==search){
					return true;
				}
			}
			return false;
		}
		try{
		var ans={"923fafc4db39f1182255be91eb2489bb":["18527171"],"6189ed577879bb26a22205159df07329":["18527249"],"b1ea66e300460590c1c0b087aeaf51d2":["18527415"],"330e351f9f5056955298261717f1898d":["18527347"],"85d891660e8ed34d0669f6ffe7e41559":["18527203"],"aa1b0c1e37a1782fe65c31132027263c":["18527330"],"b343d3ba13eecbea2e11113b6307b7e3":["18527304"],"7222362b509496e57e9ce587c3180e85":["18527345"],"d40ae5d06acdd83908be5fca829e184d":["18527111"],"2bef6fd09487f86887b45055608abea6":["18527287"],"4da0a16f010ccc92cf1425e6466c8a3c":["18527106"],"a46c35ec0aecfbc65499d3ac23a88da4":["18527206"],"9d1ff0ffc6e348189ca287314488cc10":["18527152"],"54ba6af84d58f562f2dafa2dbddd4ab4":["18527182"],"c97dc467c8a0277c0f1d2897cb78da8c":["18527137"],"f7bb729c763035515890daea8b005fef":["18527387"],"d98d9186f756f3b8be4e35495e6a73be":["18527055"],"2c6f7571f766453534636c372bc4b480":["18527379"],"6a96a2eaf0281d124089f4877afd5faf":["18527129"],"4c6bfeae5fdefde2212e1e79bbd51058":["18527157"],"30a4e800f27d8f741f4e7e3f6dc78b9e":["18527407"],"a93b3cfe6938ea8210088a0b45108bca":["18527402"],"c6587921c6890fa359211fbc60b1ec69":["18527418"],"297635ddb8d76a1b8c915e6b616293b2":["18527234"],"ab3c78856e40ef226ee82edb13b8134c":["18527093"],"c70af402af5f17190852aa13fa9f4ae3":["18527189"],"8d6c5d339b9211b5e8428027c4e412a2":["18527100"],"51fa48354015da872d6baa16bf4ad324":["18527399"],"e2d83d92ca48d4ec2602fe032781501c":["18527123"],"af4fee568c8c37fa0f7acd1c8ee4b8db":["18527212"],"dd55a7014d3756c727f962e7743b9b5b":["18527053"],"8e1cb860a4c04770812ac22d021a49ed":["18527185"],"1516e0023f1ce51cdd4ae29c84b31858":["18527241"],"ee1cd925cb8b32ea77c1c7d71879637a":["18527166"],"c5ba509703c506ab90327479b49bf183":["18527277"],"3599dc6f33c834d552acbc0d7d632039":["18527044"],"c4b4de34d6ea875c218c6951a0928f8a":["18527296"],"0f5a642a45fdccd6623aeb956fd91bb2":["18527169"],"d8e2f28564b80524cb8fdf83f04f15ad":["18527069"],"1a10f1047f24083b860e235235d91a1e":["18527285"],"488416739c5afbc43a46ddb7ec0561c8":["18527201"],"9fdd40fc9de901671c7b7cfdbf7c330c":["18527060"],"f34bbfe24edcf7641dc99b4eb88d24dc":["18527244"],"f89c73fa179b707511a399b5ddda370e":["18527115"],"2bf7f9e9b5985d612bf26ff733063248":["18527432"],"883cd15fb273b6fe359aaf50013f0809":["18527263"],"4cdc218e8bcf51052aa2cecfecf26741":["18527095"],"24693832a94c55a5d9bd4eee009d35c2":["18527320"],"5b6726bfdb4e3022f33697a03add85f0":["18527281"],"e60dcd88096b7e747deb5b426c0d534b":["18527315"],"dc01f8bd495b373e5ed1465e8fadea63":["18527196"],"6cd7fed4d316494897e2cf877c18facf":["18527427"],"6b82ac4c63ced651891c4641e5cbcd61":["18527074"],"861bfb92f0da95d68b70f69cfb271c48":["18527110"],"981293ce673dadfd49f825fcc02bddb8":["18527371"],"0fac036a6ddd8736c326653bd95774af":["18527324"],"fd5aef6d2d12d3abd86806fcd28d58fd":["18527365"],"f29a2d1f09679f079e1ffcecade945e9":["18527039"],"13142e6b00a21ba1c14a17095e80bc92":["18527270"],"c63314d6f01e5928d5cd71003ecd4919":["18527413"],"0007b0af013905f9a3c5aa9711020413":["18527338"],"c8356386b4ac8a68e6d216a6f006a213":["18527079"],"30fb6d62205bf414f4b00eb4f699e812":["18527083"],"88402dc83a3114355059de0125d1cd28":["18527145"],"6f1344cba0e253648b06e5a6ef6a0e12":["18527224"],"6981693474df00d0226fc8ca5353bf5a":["18527132"],"ddce7230e302b6a8c4148f5fa639c7da":["18527191"],"617c4dda39f25da50b06ce3c5fe307cd":["18527075"],"b134ccdd479a244ef9f6e5328b61a844":["18527423"],"a472d3f6cb014162e4cc80074a2b0ccf":["18527360"],"2e305d364f8297629bc74d23d0d7a1ad":["18527227"],"c8e7b8366a6a73a0a2033c0ddf8d287b":["18527179"],"0e90990072cf77eb7a27b284ed5898fd":["18527395"],"309b5a2409aa68566b0ef54ea1662f1e":["18527090"],"96c1658d885c8c5eb8ac50b506cc8b41":["18527258"],"814d45262279d5d0c07fe7e3c22f156c":["18527121"],"395a4009157e5cb4b53ba886a785ef4f":["18527148"],"b269fb859726e2b847f4e72a9dd8d1b3":["18527374"],"12f8f6f278ab930a40701750ba30f6a4":["18527251"],"725c2111949e750140d22a87a01b0dea":["18527390"],"ee2bf4392f9200b738dd8144a10bedda":["18527049"],"3d562397af3f8a9213c9cc4f6e2e11ed":["18527353"],"2ea2558cb0657e83e7525d73abb6b3ee":["18527329"],"bdab1400cb36ce256e395867bd441ec3":["18527290"],"9b72c5d8e743a881049532b1e03a309d":["18527176"],"05c8325b64e90e45c4142204d384b4b1":["18527267"],"e4a93e07bc15529490a0e4cfdc377833":["18527299"],"a576cc2dd55eed53eaabc138125053c3":["18527311"],"3e5c08f00f8ea08d0f3f8f30773a6ae8":["18527160"],"2eb75847c9cf13684983e650caca938f":["18527219"],"2b93953139c4eb0b628ae5f0d51f815b":["18527355"],"920baa1a23aaaa042c6b5903632ad59c":["18527063"],"05b3f6916b79fa391b486a1a697703ae":["18527384"],"74732233fd1aac966e1944ff570a5762":["18527230"],"cfa890c139b5b8894ce461e21619f7ac":["18527309"],"ed723f5fdc92920e0d350bb885582a28":["18527142"],"323f8e41be2996d25f1b0ac18a5f6b18":["18527368"],"55cd3d895972a68dc21be1846c3d4cfe":["18527336"],"91a9eaac063cffa94bf16b95a5eefb29":["18527255"]};

				for(var ii=0;ii<res.data.questionList.length;ii++){//---
									var que=res.data.questionList[ii];
									if(typeof(ans[que.guid])!='undefined'){
										//alert(ans[que.guid])
										for(var jj=0;jj<que.result.length;jj++){
											if(in_array(que.result[jj].id,ans[que.guid])){
												res.data.questionList[ii].result[jj].value='-----'
											}
										}
									}
								}
								} catch (e) { alert(e.name + ": " + e.message); } 
											var dd=activityUtil.analysisRightAnswer(res.data.questionList,this.activityInfo);
											//alert(JSON.stringify(dd))
											for(var ii=0;ii<dd.length;ii++){//---
												var que=dd[ii];
													for(var jj=0;jj<que.result.length;jj++){
														if(que.result[jj].right){
															dd[ii].result[jj].value='-----'
														}
													}
											}
											cacheUtil.setData('ANSWER_QUESTION_LIST_'+this.activityInfo.guid,dd);
											this.goToExam(res.data.recordId,res.data.topDayId);
										} else if (res.result == 101 || res.result == 102) {
											Utils.showAlert({
												buttonText: '知道了',
												hasGg:1,
												content: res.msg,
												callback: () => {},
												cancelCallback: () => {},
												baseColor: this
													.themeColor
											})
										}else if (res.result == 1003) {
											activityUtil.showChanceCardInfoDialog(this.activityGuid,()=>{
												this.startExam($event);
											});
										}else if(res.result == 2003){
											let shareCount = this.activityInfo.activityShareSetting.shareCount
											activityUtil.showShareChanceDialog(this.activityInfo,()=>{
												Utils.showAlert({
													content:`恭喜你获得${shareCount}次答题机会`,
													hasGg:1,
													guid:this.activityInfo.activityGuid,
													activityType: this.activityInfo.activityType,
												})
											});
										} else if(res.result == 3003){
											let path = activityUtil.getShareApiBackUrl(this.activityInfo.wsiteGuid)
											activityUtil.showShareApiDialog(this.activityInfo,path);
										}else {
											Utils.showToast(res.msg,
											'none');
										}
									})
								})
							})

						},
						startPractice ($event) {
							Utils.recordClickEvent($event);

							let activityInfo = this.activityInfo
							activityInfo.isAnswerPracticeLimit = 1
							activityUtil.checkJoinLimit(activityInfo,()=>{
								activityUtil.startAnswerByPractise(this.activityInfo,(practiseData)=>{
									this.goToPractice()
								})
							})
						},
						goToPractice() {
							let guid = this.activityGuid;
							Utils.navigateTo({
								url: this.pagePath.answerContent + `?guid=${guid}&isPractice=1`
							})
						},
						goToRecord() {
							Utils.showLoginDialog(() => {
								Utils.goToAnswerRecordPage([this.activityInfo.activityType])
							})
						},
						goToTops() {
							Utils.navigateTo({
								url: this.pagePath.answerTops + "?guid=" + this.activityGuid
							})

						},

						gotoPrize() {
							navigateUtil.goToUserWinOrderPage()
						},
						goToExam(recordId, topDayId = 0) {
							let guid = this.activityGuid;
							Utils.navigateTo({
								url: this.pagePath.answerContent +
									`?guid=${guid}&recordId=${recordId}&topDayId=${topDayId}`
							})
						},

					},

				})
				this.component = new MyComponent();
				_domApp.html('').append(this.component.$mount().$el)
			},
			load: function() {
				if (this.isLoaded) return;
				this.isLoaded = true;
				var _domApp = this.wrapper;
				//注册vue实例
				// this.register(_domApp);

			}


		}



		return {
			_instances: {},
			_instanceKey: function(eid, _isPageThumb) {
				return 'instance_' + eid + '_' + _isPageThumb;
			},
			_get: function(eid, _isPageThumb) {
				var _ins_eid = this._instanceKey(eid, _isPageThumb);
				if (this._instances[_ins_eid]) {
					return this._instances[_ins_eid]
				}
				var _ins = new pluginApp();
				this._instances[_ins_eid] = _ins;
				return _ins;
			},
			/**
			 * @description
			 * 页面loading的时候运行，用于预加载插件一些静态资源，如：图片/音乐/视频等
			 * 注意：此时页面元素尚未插入dom中，直接获取元素会报错
			 * @param {object} elementObject 页面元素的基本信息
			 * @param {object} api 平台代码二次开发调用的通用接口，具体api可以参照平台二次开发api说明文档
			 */
			preload: function(_elementObject, _api) {
				//var _app = this._get(_elementObject.id);
			},
			/**
			 * @description
			 * 初始化，页面loading完成后，会调用所有页面的init方法，此方法只会被调用一次，
			 * 主要用于渲染插件dom+样式，绑定dom事件等操作
			 * @param {object} elementObject 插件元素的基本信息
			 * @param {jquery对象} $wrapper 元素容器
			 * @param {object} api 平台代码二次开发调用的通用接口，具体api可以参照平台二次开发api说明文档
			 * @param {int} pageId 插件所在页面id，页面ID在展示内是唯一的
			 * @param {bool}  isPageThumb  标识当前的调用是否为编辑页左边缩略图
			 */
			init: function(_elementObject, _$wrapper, _api, _pageId, _isPageThumb, _isInDialog, hdHelper) {

				CoolApi = _api;
				IsEditing = _api.isEditing();
				Domain = _api.getPluginDomain(_elementObject.content.token, _elementObject.content.version);
				if (!IsEditing) {
					WsiteGuid = CoolApi.getWsiteGuid();
				}
				var _app = this._get(_elementObject.id, _isPageThumb);
				_app.config = _elementObject;
				_app.pageId = _pageId;
				_app.wrapper = _$wrapper;
				HDHelper = hdHelper;
				Utils = hdHelper.Utils;
				Vue = HDHelper.Vue;
				if (!IsEditing) {
					activityUtil = hdHelper.activityUtil;
					navigateUtil = hdHelper.navigateUtil;
					cacheUtil = hdHelper.cacheUtil;

				}
				chanceCardCom.init(HDHelper, IsEditing)
				_app.init();
			},
			/**
			 * @description
			 * 页面元素init方法初始化完成之后，每次进入页面时执行load方法，主要用于获取插件的一些基本信息，以及与后台的交互，
			 * 注意 init方法与load方法是一异步执行的
			 * @param {int} pageId 插件所在页面id，页面ID在展示内是唯一的
			 * @param {object} elementObject 插件元素的基本信息
			 */
			load: function(_pageId, _elementObject) {

			},
			/**
			 * @description
			 * 离开插件所在页面时运行，主要用于恢复/重置一些设置
			 * @param {int} pageId 插件所在页面id，页面ID在展示内是唯一的
			 * @param {object} elementObject 插件元素的基本信息
			 * @param {object} api 平台代码二次开发调用的通用接口，具体api可以参照平台二次开发api说明文档
			 */
			leave: function(_pageId, _elementObject, _api) {
				if (_pageId != _api.getCurrentPageId()) {
					CoolApi.resetFlip();
				}
			},
		}



	})
