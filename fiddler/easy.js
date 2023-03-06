//用于简化An处理CreateJS的功能
//20210716加入ReactButtonHelper ReactButtonHelper 用于管理按键按下的动画，内部通过Timeout实现触屏按下动画
//20210805新增TextField VideoPlayer 作为输入UI的补充 替代ActionElement
//20210901新增Platform类型 检测平台状态新增URLLoader URLRequest 后台通信
//20211124新增Loader作为加载器内容的补充
//20220617新增Roller用于模拟转盘运动（整合Roller.js）
"use strict";
this.EasyCreateJS=this.EasyCreateJS||{};
(function(){
	var p;
	/**
	 * 返回str是否是MovieClip关键字
	 * @method isMovieClipKeyWord
	 * @param {String} str
	**/
	function isMovieClipKeyWord(str){
		var kArr=["_listeners","_captureListeners","alpha","cacheCanvas","cacheID","id","mouseEnabled","tickEnabled","name","parent","regX","regY","rotation","scaleX","scaleY","skewX","skewY","shadow","visible","x","y","transformMatrix","compositeOperation","snapToPixel","filters","mask","hitArea","cursor","_cacheOffsetX","_cacheOffsetY","_filterOffsetX","_filterOffsetY","_cacheScale","_cacheDataURLID","_cacheDataURL","_props","_rectangle","_bounds","children","mouseChildren","tickChildren","mode","startPosition","loop","currentFrame","timeline","paused","actionsEnabled","autoReset","frameBounds","framerate","_synchOffset","_prevPos","_prevPosition","_t","_managed","nominalBounds","constructor","getLabels","getCurrentLabel","getDuration","initialize","isVisible","draw","play","stop","gotoAndPlay","gotoAndStop","advance","clone","toString","_tick","_goto","_reset","_updateTimeline","_setState","_addManagedChild","_getBounds","Container_constructor","Container_initialize","Container_isVisible","Container_draw","Container_clone","Container_toString","Container__tick","Container__getBounds","getNumChildren","addChild","addChildAt","removeChild","removeChildAt","removeAllChildren","getChildAt","getChildByName","sortChildren","getChildIndex","swapChildrenAt","swapChildren","setChildIndex","contains","hitTest","getObjectsUnderPoint","getObjectUnderPoint","getBounds","getTransformedBounds","_cloneChildren","_getObjectsUnderPoint","_testMask","DisplayObject_constructor","DisplayObject_isVisible","DisplayObject_draw","DisplayObject_hitTest","DisplayObject_getBounds","DisplayObject_getTransformedBounds","DisplayObject_clone","DisplayObject_toString","DisplayObject__tick","DisplayObject__getBounds","getStage","updateContext","cache","updateCache","uncache","getCacheDataURL","localToGlobal","globalToLocal","localToLocal","setTransform","getMatrix","getConcatenatedMatrix","getConcatenatedDisplayProps","set","setBounds","_cloneProps","_applyShadow","_testHit","_applyFilters","_getFilterBounds","_transformBounds","_hasMouseEventListener","EventDispatcher_constructor","EventDispatcher_toString","addEventListener","on","removeEventListener","off","removeAllEventListeners","dispatchEvent","hasEventListener","willTrigger","_dispatchEvent"];
		var i;
		var len=kArr.length;
		var re=false;
		for(i=0;i<len;i++){
			if(kArr[i]==str){
				re=true;
				break;
			}
		}
		return re;
	}
	/**
	 * 创建createContainerFromMovieClip转换An导出的MovieClip为Container生成的Container包含movieClip中的内容之后movieClip不可使用
	 * @method createContainerFromMovieClip
	 * @param {MovieClip} mc
	**/
	function createContainerFromMovieClip(mc){
		var i;
		var len;
		var con=new createjs.Container();
		var arro=mc.timeline._tweens[0]._curQueueProps.state;//得到当前显示列表（因为是摆好的所以直接创建内容）
		if(arro){
			len=arro.length;
			con.movieClip=mc;
			for(i=0;i<len;i++){
				con.addChild(arro[i].t);
			}
		}else{
			con.addChild(mc.timeline._tweens[0].target);
			
		}
		for(var k in mc){
				if(!isMovieClipKeyWord(k)){
					con[k]=mc[k];
				}
			}
		return con;
	}
	EasyCreateJS.createContainerFromMovieClip=createContainerFromMovieClip;
	/**
	 * ReactButtonHelper 用于实现显示对象点击后的动画（移动端触摸反馈）
	 * @method TimerButtonHelper 
	 * @param {Object} btn 要增加触摸反馈的按钮（显示对象）
	 * @param {Object} wbtn 反馈显示的内容（一般为高亮显示的btn）
	 * @param (Number) tim 高亮反馈的时间 （毫秒）
	 * @param {Function} 高亮反应后触发方法（时间到达后触发的方法）
	 * @return {Function} 封装好的方法
	**/
	function ReactButtonHelper(btn,wbtn,tim,func){
		wbtn.x=btn.x;
		wbtn.y=btn.y;
		wbtn.visible=false;
		var re=function(){
			if(!wbtn.visible){
				wbtn.visible=true;
				wbtn.x=btn.x;
				wbtn.y=btn.y;
				window.setTimeout(function(){
					wbtn.visible=false;
					func(btn);
				},tim);
			}
		}
		return re;
	}
	EasyCreateJS.ReactButtonHelper=ReactButtonHelper;
	/**
	 *平台对象 用于指示当前页面的平台状态
	**/
	function Platform(){
		var p=navigator.platform;
		this.isWin=p.indexOf("Win") == 0;
		this.isMac=p.indexOf("Mac") == 0;  
   		this.isX11=p.indexOf("X11")==0;
		this.isLinux=(p.indexOf("Linux") == 0);  
		this.isMobile=navigator.userAgent.match(/mobile/i)?true:false;
		this.isPC=!this.isMobile;
	}
	EasyCreateJS.Platform=Platform;
	
	/**
	 * Point 2D节点
	 * @method Point
	**/
	function Point(px,py){
		this.x=px;
		this.y=py;
	}
	/**
	 * @method distance 静态方法返回两个节点之间的距离
	 * @param {Point} p1 第一点
	 * @param {Point} p2 第二点
	**/
	Point.distance=function(p1,p2){
		var dx=p1.x-p2.x;
		var dy=p1.y-p2.y;
		return Math.sqrt(dx*dx+dy*dy);
	}
	EasyCreateJS.Point=Point;
	/**
	 * DragMaster 通用拖放控制器
	 * @method DragMaster
	**/
	function DragMaster(){
		this.dragArr=new Array();
	}
	p=DragMaster.prototype;
	/**
	 * startDrag 启用拖动控制
	 * @method startDrag
	 * @param {DisplayObject} ob 要拖动的内容
	 * @param {Rectangle} rect 约束区间
	 * @param {Boolean} lockToMouse 锁定ob到鼠标位置
	 * @param {Number} mousex 鼠标的位置x
	 * @param {Number} mousey 鼠标的位置y
	 * @param {Boolean} lockToCenter 锁定中心
	**/
	p.startDrag=function(ob,mousex,mousey,rect,lockToCenter){
		var tmp=new Object();
		tmp.target=ob;
		if(lockToCenter){
			ob.x=mousex;
			ob.y=mousey;
		}
		tmp.disX=mousex-ob.x;
		tmp.disY=mousey-ob.y;
		tmp.rect=rect;
		this.dragArr.push(tmp);
	}
	/**
	 * stopDrag 停止拖动控制
	 * @method stopDrag
	 * @param {DisplayObject} ob 拖动的单元
	**/
	p.stopDrag=function(ob){
		//停止拖动
		var ind=this.getDragIndex(ob);
		if(ind!=-1){
			var tmp=this.dragArr.splice(ind);
			tmp.target=null;
		}
	}
	/**
	 * getDragIndex 返回可拖动物件的索引
	 * @method getDragIndex
	 * @param {DisplayObject} ob 拖动的单元
	**/
	p.getDragIndex=function(ob){
		var i;
		var len=this.dragArr.length;
		var tmp;
		var ind=-1;
		for(i=0;i<len;i++){
			tmp=this.dragArr[i];
			if(tmp.target==ob){
				ind=i;
				break;
			}
		}
		return ind;
	}
	/**
	 * 检查提供的内容是否正在拖动状态返回是返回true 否返回false
	 * @method isDraging
	 * @param {DisplayObject} ob 拖动的单元
	**/
	p.isDraging=function(ob){
		return this.getDragIndex(ob)!=-1;
	}
	/**
	 * 驱动方法，要使用DragMaster必须在ticker中调用此方法
	 * @method update
	 * @param {Number} mousex 鼠标位置x 
	 * @param {Number} mousey 鼠标位置y
	**/
	p.update=function(mousex,mousey){
		var i;
		var len=this.dragArr.length;
		var tmp;
		for(i=0;i<len;i++){
			tmp=this.dragArr[i];
			if(tmp.rect){
				var nx=mousex-tmp.disX;
				var ny=mousey-tmp.disY;
				if(nx<tmp.rect.x){
					nx=tmp.rect.x;
				}else if(nx>tmp.rect.x+tmp.rect.width){
					nx=tmp.rect.x+tmp.rect.width;
				}
				if(ny<tmp.rect.y){
					ny=tmp.rect.y;
				}else if(ny>tmp.rect.y+tmp.rect.height){
					ny=tmp.rect.y+tmp.rect.height;
				}
				tmp.target.x=nx;
				tmp.target.y=ny;
			}else{
				tmp.target.x=mousex-tmp.disX;
				tmp.target.y=mousey-tmp.disY;
			}
		}
	}
	EasyCreateJS.DragMaster=DragMaster;
	/**
	 *资源加载器（通用）
	 *@class ResourceMaster(基于createjs的通用加载工具类)
	 *@param {Array} names 名称数组（通过此名称进行检索）
	 *@param {Array} urls 地址数组
	 *@param {Function} com 全部加载完毕的回调
	 *@param {Function} prg 总进度变动
	 *@param {Function} fprg 当前文件变动
	**/
	function ResourceMaster(names,urls,com,prg,fprg){
		this.lname=null;
		this.lurl=null;
		this.com_func=null;
		this.prg_func=null;
		this.fprg_func=null;
		this.loader=new createjs.LoadQueue(false);
		this.loader.proxy=this;
		//console.log(this.loader);
		this.loader.addEventListener("progress",this.loaderPRG);
		this.loader.addEventListener("complete",this.loaderCOM);
		this.loader.addEventListener("fileprogress",this.loaderFCOM);
		this.loadResource(names,urls,com,prg,fprg);
	}
	
	p=ResourceMaster.prototype;
	/**
	 *@加载完成调度
	 *@method loaderCOM
	 *@param {Event} e
	**/
	p.loaderCOM=function(e){
		//console.log(181);
		if(e.currentTarget.proxy.com_func){
			e.currentTarget.proxy.com_func(e.currentTarget.proxy);
		}
	}
	/**
	 *@加载过程调度（单个）
	 *@method loaderFCOM
	 *@param {Event} e
	**/
	p.loaderFCOM=function(e){
		if(e.currentTarget.proxy.fprg_func){
			e.currentTarget.proxy.fprg_func(e.currentTarget.proxy);
		}
	}
	/**
	 *@加载过程调度（整体）
	 *@method loadPRG
	 *@param {Event} e
	**/
	p.loaderPRG=function(e){
		
		if(e.currentTarget.proxy.prg_func){
			e.currentTarget.proxy.progress=e.progress;
			
			e.currentTarget.proxy.prg_func(e.currentTarget.proxy);
		}
	}
	/**
	 *@启动加载进程
	 *@method startLoad
	**/
	p.startLoad=function(){
		var arr=new Array();
		var i;
		var len=this.lname.length;
		var tmp;
		for(i=0;i<len;i++){
			tmp=new Object();
			tmp.id=this.lname[i];
			tmp.src=this.lurl[i];
			arr.push(tmp);
		}
		this.loader.loadManifest(arr);
		console.log(len);
	}
	/**
	 *额外的加载方法
	 *@method loadResource
	 *@param {Array} names 名称数组（通过此名称进行检索）
	 *@param {Array} urls 地址数组
	 *@param {Function} com 全部加载完毕的回调
	 *@param {Function} prg 总进度变动
	 *@param {Function} fprg 当前文件变动
	**/
	p.loadResource=function(names,urls,com,prg,fprg){
		if(names && urls && names.length==urls.length){
			this.lname=names;
			this.lurl=urls;
			this.com_func=com;
			this.prg_func=prg;
			this.fprg_func=fprg;
			this.startLoad();
		}else{
			console.log("某个加载参数非法，无法启动加载进程");
		}
	}
	/**
	 *@获取加载后的资源
	 *@method getResource
	 *@param {String} name
	**/
	p.getResource=function(name){
		//返回制定名称的tag
		return this.loader.getResult(name);
	}
	EasyCreateJS.ResourceMaster=ResourceMaster;
	/**
 	 *通用缓动控制器
 	 *@class EasingUnit
 	 *@param {Object} v 显示对象
 	 *@param {Number} es 缓动系数 0-1 直越高，速度越快
	**/
	function EasingUnit(v,es){
		this.vis=v;
		this.running=false;
		this.sx=0;
		this.sy=0;
		this.comFunc=null;
		this.prgFunc=null;
		this.gx=0;
		this.gy=0;
		this.es=es?es:0.4;
		this.setEasingLimit();//轴约束
	}
	p=EasingUnit.prototype;
	/**
	 *调整绑定的显示对象到指定位置
	 *@method locate
	 *@param {Number} nx x轴
	 *@param {Number} ny y轴
	**/
	p.locate=function(nx,ny){
		this.running=false;
		this.vis.x=nx;
		this.vis.y=ny;
	}
	/**
	 *开始缓动
	 *@method start
	 *@param {Number} gx 目标x位置
	 *@param {Number} gy 目标y位置
	 *@param {function} comfunc 到位回调
	 *@param {function} prgfunc 移动回调
	**/
	p.start=function(gx,gy,comfunc,prgfunc){
		this.sx=this.vis.x;
		this.sy=this.vis.y;
		this.gx=gx;
		this.gy=gy;
		this.distance=Math.sqrt((this.sx-this.gx)*(this.sx-this.gx)+(this.sy-this.gy)*(this.sy-this.gy));
		this.comFunc=comfunc;
		this.prgFunc=prgfunc;
		this.running=true;
	}
	/**
	 *立即停止缓动
	 *@method stop
	**/
	p.stop=function(){
		this.running=true;
	}
	/**
	 *设置运动约束
	 *@method setEasingLimit
	 *@param {Number} lx x轴约束
	 *@param {Number} ly y轴约束
	 *@param {Number} lxy 双轴约束（如果指定了约束xy则单轴约束失效）
	**/
	p.setEasingLimit=function(lx,ly,lxy){
		this.limitX=lx?lx:-1;//约束x
		this.limitY=ly?ly:-1;//约束y
		this.limitXY=lxy?lxy:-1;//约束xy 
		if(this.limitX!=-1 && this.limitX<0){
			this.limitX=-this.limitX;
		}
		if(this.limitY!=-1 && this.limitY<0){
			this.limitY=-this.limitY;
		}
		if(this.limitXY!=-1 && this.limitXY<0){
			this.limitXY=-this.limitXY;
		}
	}
	/**
	 *驱动控制必须显式调用
	 *@method update
	**/
	p.update=function(){
		if(this.running){
			var dx=this.gx-this.vis.x;
			var dy=this.gy-this.vis.y;
			var cdis=Math.sqrt((this.vis.x-this.gx)*(this.vis.x-this.gx)+(this.vis.y-this.gy)*(this.vis.y-this.gy));//当前的位置
			var speedx=dx*this.es;
			var speedy=dy*this.es;
			if(this.limitXY>0){
				var nspeed=Math.sqrt((speedx*speedx)+(speedy*speedy));//得到轴速度
				if(nspeed>0 && nspeed>this.limitXY){
					var f=this.limitXY/nspeed;//得到轴分量
					speedx*=f;
					speedy*=f;	
				}
			}else{
				//单周约束
				if(this.limitX>0){
					if(Math.abs(speedx)>this.limitX){
						if(speedx>0){
							speedx=this.limitX;
						}else{
							speedx=-this.limitX;
						}
					}
				}
				if(this.limitY>0){
					if(Math.abs(speedy)>this.limitY){
					//	speedy=this.limitY;
						if(speedy>0){
							speedy=this.limitY;
						}else{
							speedy=-this.limitY;
						}
					}
				}
			}
			this.vis.x=this.vis.x+speedx;
			this.vis.y=this.vis.y+speedy;
			this.percent=1-cdis/this.distance;
			if(this.prgFunc){
				this.prgFunc(this);
			}
			if(Math.abs(speedx)<0.1 && Math.abs(speedy)<0.1){
				this.vis.x=this.gx;
				this.vis.y=this.gy;
				this.running=false;
				if(this.comFunc){
					this.comFunc(this);
				}
			}
		}
	}
	EasyCreateJS.EasingUnit=EasingUnit;
	/**
	 *全局函数，设置指定容器实例的scale属性使之扑满屏幕
	 *@method fitScreen
	 *@param {Element} ele 要操作的Element实例
	 *@param {Boolean} unloakXYScale 取消锁定xy缩放开关
	**/
	function fitScreen(ele,w,h,unlockXYScale){
		var sw=document.documentElement.clientWidth;
		var sh=document.documentElement.clientHeight;
		var aw=w;
		var ah=h;
		//先判断横向缩放
		if(unlockXYScale){
			//不按比例缩放
			//强行缩放mainView
			ele.style.transformOrigin="0% 0%";
			ele.style.transform="scale("+(sw/aw)+","+(sh/ah)+")";
			ele.style.left="0px";
			ele.style.top="0px";
		}else{
			var scale=sw/aw;
			//横向比值
		//	console.log(scale);
		//	alert(sw,sh);
			var tmp=ah*scale;
			if(tmp>=sh){
				//如果超过了高度则说明需要重新缩放高度
				scale=sh/ah;
				ele.style.transformOrigin="0% 0%";
				ele.style.transform="scale("+scale+","+scale+")";
				ele.style.left=(sw-scale*aw)/2+"px";
			}else{
				ele.style.transformOrigin="0% 0%";
				ele.style.transform="scale("+scale+","+scale+")";
				ele.style.top=(sh-scale*ah)/2+"px";
			}
		}
	}
	EasyCreateJS.fitScreen=fitScreen;
	
	/**
	 *基于帧的计时器（需要注意的是，这个计时器是基于帧的，不同的帧会造成不同的回调间隔差异，应根据用户项目的帧频来合理设置）
	 *@class Timer
	 *@param {int} 计时器间隔时间（单位帧）默认是1（如果项目刷新率是25 那么1秒钟出发1次则需要输入间隔为25）
	**/
	function Timer(time){
		if(time){
			this.interval=time;//计时器间隔时间
		}else{
			this.interval=1;
		}
		this.timeFunc=null;//时间回调
		this.countEndFunc=null;//计时结束回调如果不指定循环次数则这个方法永远不会被调用
		this.running=false;
		this.count=0;//0代表不计数
		this.currentCount=0;
		this.vinterval=0;
	}
	p=Timer.prototype;
	/**
	 *停止并复位计时器
	 *@method reset
	**/
	p.reset=function(){
		this.stop();
		this.vinterval=this.currentCount=0;
	}
	/**
	 *启动计时器
	 *@method start
	 *@param {Function} func 计时回调方法
	 *@param {int} cont 总计时数大于0则会在执行指定次数后自动停止
	 *@param {Function} endFunc 总计时数完成的回调
	**/
	p.start=function(func,cont,endFunc){
		this.running=true;
		this.timeFunc=func;
		this.count=cont?cont:0;
		this.countEndFunc=endFunc;
		this.vinterval=0;
	}
	/**
	 *停止计时器
	 *@method stop
	**/
	p.stop=function(){
		this.running=false;
	}
	/**
	 *计时器驱动
	 *@method update
	 *@update {Function} func 计时器驱动方法，这个方法必须放在程序的主驱动中
	 **/
	p.update=function(){
		if(this.running){
			//运行中
			this.vinterval+=1;
			if(this.vinterval>=this.interval){
				if(this.timeFunc){
					this.timeFunc(this);
				}
				this.currentCount+=1;
				if(this.count>0){
					
					if(this.currentCount>=this.count){
						this.running=false;
						if(this.countEndFunc){
							this.countEndFunc(this);
						}
					}
				}
				this.vinterval=0;
			}
		}
	}
	EasyCreateJS.Timer=Timer;
	/**
	 *集成化的SoundElement控制器通过声音注册名访问声音单元，实现检索功能
	 *@method SoundMaster
	 *@param {Function} slfunc 加载完成的自定义回调
	 *@param {Function} spfunc 加载过程回调
	**/
	function SoundMaster(slfunc,spfunc){
		if(this instanceof SoundMaster){
			this.sounds=new Array();
			this.soundLoadFunc=slfunc;
			this.soundProgressFunc=spfunc;
			this.percent=0;//加载进度
		}else{
			return new SoundMaster(slfunc,spfunc);
		}
	}
	p=SoundMaster.prototype;
	/**
	 *添加声音方法
	 *@method addSound
	 *@param {String} url 声音文件的路径
	 *@param {String} name 声音调用名
	 *@param {int} repeat 声音重复数（同一个声音同一时间只能播放1次，所以为了多次播放需要创建复数个声音元素实例）
	**/
	p.addSound=function(url,name,repeat){
		var sd=new SoundElement(url,name,repeat,this.soundLoaded);
		this.sounds.push(sd);
		sd.master=this;
		return this;
	}
	/**
	 *声音加载回调（无需外部调用）
	 *@method soundLoaded
	 *@param {SoundElement} e
	**/
	p.soundLoaded=function(e){
		var count=0;
		for(var i=this.master.sounds.length-1;i>=0;i--){
			if(this.master.sounds[i].loaded){
				count+=1;
			}
		}
		e.master.percent=count/e.master.sounds.length;
		if(e.master.soundProgressFunc){
			e.master.soundProgressFunc(e.master);//加载进度刷新调度
		}
		if(count==e.master.sounds.length){
			if(e.master.soundLoadFunc){
				e.master.soundLoadFunc(e.master);//加载进度完成调度
			}
		}
	}
	/**
	 *根据别名查找一个声音的索引找到了返回一个大于等于0的数字没找到返回-1
	 *@method indexOfSoundName
	 *@param {String}sname
	**/
	p.indexOfSoundName=function(sname){
		var re=-1;
		for(var i=this.sounds.length-1;i>=0;i--){
			if(this.sounds[i].sname==sname){
				re=i;
				break;
			}
		}
		return re;
	}
	/**
	 *播放声音
	 *@method play
	 *@param {String} sname 别名
	 *@param {Number} t  播放的时间（从哪开始）
	 *@param {Boolean} single设置为true则停止所有声音后播放当前声音
	 *@param {Boolean} loop是否重复播放
	 *@param {Function} playend播放一次后调用的方法
	**/
	p.play=function(sname,t,single,loop,playend){
		var ind=this.indexOfSoundName(sname);
		if(single){
			this.stopAll();
		}
		if(ind>=0){
			this.sounds[ind].play(t,single,loop,playend);
		}
		return this;
	}
	/**
	 *设置播放音量
	 *@method setVolume
	 *@param {String} sname 别名
	 *@param {Number} v 声音大小0-1，输入更大的值可能造成失真
	**/
	p.setVolume=function(sname,v){
		var ind=this.indexOfSoundName(sname);
		if(ind>=0){
			this.sounds[ind].setVolume(v);
		}
		return this;
	}
	/**
	 *停止播放声音
	 *@method stop
	 *@param {String} sname 别名
	**/
	p.stop=function(sname){
		var ind=this.indexOfSoundName(sname);
		if(ind>=0){
			this.sounds[ind].stop();
		}
		return this;
	}
	/**
	 *停止所有声音
	 *@method stopAll
	**/
	p.stopAll=function(){
		for(var i=this.sounds.length-1;i>=0;i--){
			this.sounds[i].stop();
		}
		return this;
	}
	/**
	 *继续播放暂停的声音
	 *@method resume
	 *@param {String} sname 别名
	**/
	p.resume=function(sname){
		var ind=this.indexOfSoundName(sname);
		if(ind>=0){
			this.sounds[ind].resume();
		}
	}
	/**
	 *根据别名找出声音单元
	 *@method getSoundElementByName
	 *@param {String} sname 别名
	**/
	p.getSoundElementByName=function(sname){
		var re=null;
		var ind=this.indexOfSoundName(sname);
		if(ind>=0){
			re=this.sounds[ind];
		}
		return re;
	}
	/**
	 *加载所有声音对于IOS设备需要手动调用此方法完成声音加载
	 *@method loadAllSounds
	**/
	p.loadAllSounds=function(){
		for(var i=this.sounds.length-1;i>=0;i--){
			this.sounds[i].load();
		}
	}
	EasyCreateJS.SoundMaster=SoundMaster;//集成于ActionElement2019版
	/**
	 *声音单元（audio代理器）基于标准Audio作为声音播放单元
	 *@method SoundElement
	 *@param {String} url 声音文件地址
	 *@param {String} name 别名
	 *@param {int} repeat 重复数由于1个audio对象只能播放1次声音，所以创建的时候需要确定repeat参数，设置多个repeat参数将创建多个audio对象用于同时播放
	 *@param {Function} loadedFunc 加载完成回调
	**/
	function SoundElement(url,name,repeat,loadedFunc){
		if(this instanceof SoundElement){
			this.audios=new Array();
			var au=document.createElement("audio");
			au.src=url;
			this.sname=name;
			au.addEventListener("loadeddata",this.soundLoaded);
			au.addEventListener("ended",this.soundEnded);
			au.playing=false;
			au.proxy=this;
			this.maxRepeat=repeat;//最大同时播放的声音数量
			this.audios.push(au);
			this.url=au.src=url;
			this.soundName=name;
			this.singleMode=false;
			this.loadedFunc=loadedFunc;
			this.loaded=false;
		}else{
			return new SoundElement(url,name,repeat,loadedFunc);
		}
	}
	p=SoundElement.prototype;
	/**
	 *获取自动重复
	 *@method getLoop
	**/
	p.getLoop=function(){
		return this.loop;
	}
	/**
	 *设置自动重复
	 *@method setLoop
	 *@param {Boolean} l
	**/
	p.setLoop=function(l){
		this.loop=l;
		if(l){
			this.view.setAttribute("loop",l);
		}else{
			this.view.removeAttribute("loop");
		}
		return this;
	}
	/**
	 *设置音量
	 *@method setVolume
	 *@param {Number} v 0-1 过大可能失真
	**/
	p.setVolume=function(v){
		for(var i=this.audios.length-1;i>=0;i--){
			this.audios[i].volume=v;
		}
		return this;
	}
	/**
	 *播放声音
	 *@method play
	 *@param {Number} t起始时间
	 *@param {Boolean} single 是否停止其他绑定实例（如果设置为true则一个声音播放时终止所有绑定实例的播放）
	 *@param {Boolean} loop 播放重复开关
	 *@param {Function} playend 播放结束回调
	**/
	p.play=function(t,single,loop,playend){
		//播放音频，从t指定的位置开始
		//single为true则同1时间播放1条音乐
		if(this.singleMode!=single){
			this.stop();
		}
		this.singleMode=single;
		this.playEndFunc=playend;
		if(single){
			if(!this.isPlaying()){
				this.playSound(t,loop);
			}
		}else{
			this.playSound(t,loop);
		}
	}
	/**
	 *加载声音用于IOS
	 *@method load
	**/
	p.load=function(){
		if(this.audios.length>0){
			this.audios[0].load();
		}
	}
	/**
	 *内建播放方法（无需外部调用）
	 *@method playSound
	 *@param {Number} t 起始时间（秒）
	 *@param {Boolean} loop 是否循环播放
	**/
	p.playSound=function(t,loop){
		var tmp;
		var i;
		if(this.singleMode){
			if(this.audios.length>0){
				tmp=this.audios[0];
				tmp.autoplay = true;
				tmp.isLoadedmetadata = false;
				tmp.touchstart = true;
				tmp.audio = true;
				tmp.play();
				tmp.playing=true;
				if(loop){
					tmp.setAttribute("loop",loop);
				}else{
					tmp.removeAttribute("loop");
				}
				tmp.currentTime=t?t:0;
			}
		}else{
			for(i=this.audios.length-1;i>=0;i--){
				tmp=this.audios[i];
				if(!tmp.playing){
					tmp.currentTime=t?t:0;
					tmp.autoplay = true;
					tmp.isLoadedmetadata = false;
					tmp.touchstart = true;
					tmp.audio = true;
					tmp.play();
					if(loop){
						tmp.setAttribute("loop",loop);
					}else{
						tmp.removeAttribute("loop");
					}
					tmp.playing=true;
					break;
				}
			}
		}
	}
	/**
	 *返回数组中第一个
	 *@method getSingleAudio
	**/
	p.getSingleAudio=function(){
		var re=null;
		if(this.audios.length>0){
			re=this.audios[0];
		}
		return re;
	}
	/**
	 *停止播放全部音频
	 *@method stop
	**/
	p.stop=function(){
		var tmp;
		for(var i=this.audios.length-1;i>=0;i--){
			tmp=this.audios[i];
			if(tmp.playing){
				tmp.pause();
				tmp.playing=false;
				break;
			}
		}
	}
	/**
	 *使第一个音频从停止处播放
	 *@method resume
	**/
	p.resume=function(){
		if(this.singleMode && this.audios.length>0){
			var tmp=this.audios[0];
			tmp.playing=true;
			tmp.play();
		}
	}
	/**
	 *判断当前声音元素是否在播放
	 *@method isPlaying
	**/
	p.isPlaying=function(){
		var re=false;
		for(var i=this.audios.length-1;i>=0;i--){
			if(this.audios[i].playing){
				re=true;
				break;
			}
		}
		return re;
	}
	/**
	 *声音播放完毕回调
	 *@method soundEnded
	**/
	p.soundEnded=function(e){
		if(this.proxy.singleMode && this.proxy.playEndFunc){
			this.proxy.playEndFunc(this.proxy);
		}
		this.playing=false;
	}
	/**
	 *加载完成后根据重复予设创建重复的audio对象
	 *@method soundLoaded
	 *@param {Event} e
	**/
	p.soundLoaded=function(e){
		var au;
		if(this.proxy.maxRepeat){
			for(var i=0;i<this.proxy.maxRepeat;i++){
				au=document.createElement("audio");
				au.addEventListener("ended",this.proxy.soundEnded);
				au.src=this.proxy.url;
				au.playing=false;
				au.proxy=this.proxy;
				this.proxy.audios.push(au);
			}
		}
		if(this.proxy.loadedFunc){
			this.proxy.loaded=true;//加载完成了
			this.proxy.loadedFunc(this.proxy);
			
		}
	}
	/**
	 *输入文本框 简化版的输入文本（替代ActionElement）
	 *@method TextField
	 *@param {Number} w
	 *@param {Number} h
	 *@param {String} txt
	 *@param {String} style
	**/
	function TextField(w,h,txt,style){
		this.view=document.createElement("input");
		this.restrict="";
		this.view.style.position="absolute";
		this.setText(txt,style);
		this.setSize(w,h);
		this.setPosition(0,0);
		this.view.style.borderWidth="0px";
		this.view.style.fontFamily="Arial,Time New Roman";
		this.view.style.position="absolute";
		this.view.style.outline="none";
		this.view.style.backgroundColor="rgba(0,0,0,0)";
		this.view.proxy=this;
		this.view.addEventListener("input",this.view_input);
	}
	p=TextField.prototype;
	/**
	 *设置外框大小
	 *@method setSize 
	 *@param {Number} w
	 *@param {Number} h
	**/
	p.setSize=function(w,h){
		this.width=w;
		this.height=h;
		this.view.style.width=w+"px";
		this.view.style.height=h+"px";
		this.view.setAttribute("width",w);
		this.view.setAttribute("height",h);
	}
	/**
	 *设置文本内容
	 *@method setText
	 *@param {String} t 
	 *@param {String} style css样式
	**/
	p.setText=function(t,style){
		this.view.style.cssText+=style;
		this.view.value=t;
		this.text=t;
		this.checkRestrict();
	}
	p.getText=function(){
		return this.view.value;
	}
	/**
	 *设置位置
	 *@method setPosition
	 *@param {Number} nx
	 *@param {Number} ny
	**/
	p.setPosition=function(nx,ny){
		this.view.style.left=nx+"px";
		this.view.style.top=ny+"px";
		this.x=nx;
		this.y=ny;
	}
	/**
	 *设置筛选字符串
	 *@method setRestrict
	 *@param {String} s
	**/
	p.setRestrict=function(s){
		this.restrict=s;
		this.setText(this.text);
	}
	/**
	 *对字符串进行筛选
	 *@method checkRestrict
	**/
	p.checkRestrict=function(){
		if(this.restrict!=""){
			var str=this.text;
			var i;
			var len=str.length;
			var strn="";
			var c;
			for(i=0;i<len;i++){
				c=str.charAt(i);
				if(this.restrict.indexOf(c)!=-1){
					strn+=c;
				}
			}
			this.view.value=strn;
		}
	}
	/**
	 *用于实现文字输入检测
	 *@method view_input
	 *@param {Event] e
	**/
	p.view_input=function(e){
		e.currentTarget.proxy.text=e.currentTarget.value;
		e.currentTarget.proxy.checkRestrict();
	}
	EasyCreateJS.TextField=TextField;
	/**
	 *视频播放组件 简化版
	 *@method VideoPlayer
	 *@param {Number} w
	 *@param {Number} h
	 *@param {String} src
	**/
	function VideoPlayer(w,h,src){
		this.view=document.createElement("video");
		this.view.setAttribute("controls","controls");
		this.view.setAttribute("webkit-playsinline","true");
		this.view.setAttribute("x-webkit-airplay","true");
		this.view.setAttribute("playsinline","true");
		this.view.setAttribute("x5-video-player-type","h5");
		this.view.setAttribute("x5-video-player-fullscreen","true");
		this.view.style.position="absolute";
		this.view.style.outline="none";
		this.view.style.transformOrigin=0+"px "+0+"px";
		this.view.setAttribute("width",w);
		this.width=w;
		this.view.setAttribute("height",h);
		this.height=h;
		this.view.style.width=w+"px";
		this.view.style.height=h+"px";
		this.view.proxy=this;
		if(src){
			this.view.src=src;
			this.view.autoPlay=false;
		}
		this.view.addEventListener("canplay",this.readyPlay);
	}
	p=VideoPlayer.prototype;
	/**
	 *设置位置
	 *@method setPosition
	 *@param {Number} nx
	 *@param {Number} ny
	**/
	p.setPosition=function(nx,ny){
		this.view.style.left=nx+"px";
		this.view.style.top=ny+"px";
		this.x=nx;
		this.y=ny;
	}
	/**
	 *设置外框大小
	 *@method setSize 
	 *@param {Number} w
	 *@param {Number} h
	**/
	p.setSize=function(w,h){
		this.width=w;
		this.height=h;
		this.view.style.width=w+"px";
		this.view.style.height=h+"px";
		this.view.setAttribute("width",w);
		this.view.setAttribute("height",h);
	}
	/**
	 *播放视频内容
	 *@method play
	 *@param {String} path
	**/
	p.play=function(path){
		if(path){
			this.view.src=path;
			this.view.addEventListener("canplay",this.canplayFunc);
			this.view.canPlayThenPlay=true;
		}
	}
	/**
	 *控制当前播放状态的改变（可以播放后调用）
	**/
	p.canplayFunc=function(e){
		
		e.currentTarget.proxy.canPlay=true;
		if(e.currentTarget.proxy.canPlayThenPlay){
			e.currentTarget.proxy.view.play();
		}
	}
	/**
	 *暂停播放视频
	 *@method pause
	**/
	p.pause=function(){
		this.view.pause();
	}
	/**
	 *重新加载内容
	 *@method reload
	**/
	p.reload=function(){
		this.view.load();
	}
	/**
	 *设置视频音量大小
	 *@method setVolume
	 *@param {Number} 0-1音量大小
	**/
	p.setVolume=function(v){
		this.view.volume=v;
		return this;
	}
	/**
	 *返回音量大小
	 *@method getVolume
	**/
	p.getVolume=function(){
		return this.view.volume;
	}
	/**
	 *设置影片重复播放
	 *@method setLoop
	 *@param {String} l true重复播放
	**/
	p.setLoop=function(l){
		this.loop=l;
		if(l){
			this.view.setAttribute("loop",l);
		}else{
			this.view.removeAttribute("loop");
		}
		return this;
	}
	/**
	 *返回重放的值
	 *@method getLoop
	**/
	p.getLoop=function(){
		return this.loop;
	}
	/**
	 *返回是否暂停
	 *@method getPaused
	**/
	p.getPaused=function(){
		return this.view.paused;
	}
	/**
	 *获得当前视频的缓冲百分比 0-1
	 *@method getBuffered
	**/
	p.getBuffered=function(){
		return this.view.buffered.end(0)/this.view.duration;
	}
	/**
	 *设置是否静音
	 *@method setMuted
	 *@param {Boolean} b
	**/
	p.setMuted=function(b){
		this.view.muted=b;
		if(b){
			this.view.setAttribute("muted","true");
		}else{
			this.removeAttribute("muted");
		}
		return this;
	}
	/**
	 *返回当前播放器是否静音
	 *@method getMuted
	**/
	p.getMuted=function(){
		return this.view.muted;
	}
	/**
	 *设置自动播放
	 *@method setAutoPlay
	 *@param {Boolean} b
	**/
	p.setAutoPlay=function(b){
		if(b){
			this.view.setAttribute("autoplay","true");
			this.canPlayThenPlay=true;
		}else{
			this.view.removeAttribute("autoplay");
			this.canPlayThenPlay=false;
		}
		return this;
	}
	/**
	 *返回自动播放状态
	 *@method getAutoPlay
	**/
	p.getAutoPlay=function(){
		return this.canPlayThenPlay;
	}
	EasyCreateJS.VideoPlayer=VideoPlayer;
	
	//html页面加载容器组件
	function Loader(w,h,scorl){
		//加载其他页面的容器
		//scorl为是否显示滚动条
		if(this instanceof Loader){
			this.view=document.createElement("iframe");
			this.view.proxy=this;
			this.view.scrolling=scorl?"yes":"no";
			this.view.setAttribute("frameborder", 0, 0);
			this.view.style.position="absolute";
			this.view.style.transformOrigin=0+"px "+0+"px";
			this.view.setAttribute("width",w);
			this.width=w;
			this.view.setAttribute("height",h);
			this.height=h;
			this.view.addEventListener("load",this.viewLoaded);
			this.loadFunc=null;
			this.contentDocument=this.contentWindow=null;
		}else{
			return new Loader(w,h,scorl);
		}
	}
	p=Loader.prototype
	p.viewLoaded=function(e){
		e.currentTarget.removeEventListener("load",e.currentTarget.proxy.viewLoaded);
		e.currentTarget.proxy.contentDocument=e.currentTarget.contentDocument;
		e.currentTarget.proxy.contentWindow=e.currentTarget.contentWindow;
		if(e.currentTarget.proxy.loadFunc){
			e.currentTarget.proxy.loadFunc(e.currentTarget.proxy);//调用完成方法
		}
	}
	p.load=function(path,comfunc){
		//加载新网页内容
		this.view.src=path;
		this.loadFunc=comfunc;
		return this;
	}
	p.unload=function(){
		//卸载加载的内容
		this.view.src = "about:blank";
	    try{
			this.contentDocument=this.contentWindow=null;
   		 	this.view.contentWindow.document.write("");
			this.view.contentWindow.close();
   		 }catch(e){};
		return this;
	}
	EasyCreateJS.Loader=Loader;
	/**
	 *用于网络请求的对象
	 *@class URLLoader
	 *@param {URLRequest} request
	 *@param {Function} com 调用完成
	 *@param {Function} prg 调用进度
	 *@param {Function} tot 超时回调
	 *@param {int} tt 超时毫秒数
	**/
	function URLLoader(request,com,prg,tot,tt){
		if(this instanceof URLLoader){
			if(window.XMLHttpRequest){
				this.setCallBack(com,prg);
				this.setTimeOutCallBack(tot,tt);
				this.loader=new XMLHttpRequest();
				this.loader.overrideMimeType("text/xml");
				this.loader.onreadystatechange=this._readystatechange;
				this.loader.onprogress=this._progress;
				this.loader.proxy=this;//绑定loader
				this.data=null;//请求结果的值可能是xml对象或者文本，这取决于加载的文件，需要注意的是，如果加载的文件是非xml文档，即使格式正确 
				this.xmldata=null;
			}else{
				throw new Error("unsupported XMLHttpRequest");
			}
			this.load(request,com,prg);
		}else{
			return new URLLoader(request,headArr);
		}
	}
	p=URLLoader.prototype;
	p.setTimeOutCallBack=function(func,time){
		this.timeOutCallBack=func;
		this.timeOutCallBackTime=time;
		this.timeoutID;
		return this;
	}
	p._progress=function(e){
		 if (e.lengthComputable){ //进度信息是否可用
		 	if(this.proxy.loadProgressFunc){
				this.proxy.loadProgressFunc(this.proxy);
			}
   	  }
	}
	p._readystatechange=function(e){
		if(this.readyState==4 && this.status==200){
			//当完成加载之后会填充data属性
			this.proxy.data=this.responseText;
			this.proxy.xmldata=this.responseXML;//如果加载的文档不是xml则该属性为空
			if(window && this.proxy.timeOutCallBack && this.proxy.timeOutCallBackTime>0){
				
				window.clearTimeout(this.proxy.timeoutID);
			}
			if(this.proxy.loadCompleteFunc){
				this.proxy.loadCompleteFunc(this.proxy);
			}
		}
	}
	p.load=function(request,com,prg){//传入的是URLRequest对象
		//headArr为默认的请求头数组如果使用post方式进行数据发送时需要读取数组中的内容(数组的内容为URLRequestHeader对象)
		if(request){
			this.setCallBack(com,prg);
			this.loader.open(request.method,request.getURL(),true);//异步加载
			if(request.method=="GET"){
				this.loader.send();
			}else if(request.method=="POST"){
				this.loader.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				this.loader.send(request.getRequestData());
			}else{
				throw new Error("method must GET or POST");
			}
			if(window && this.timeOutCallBack && this.timeOutCallBackTime>0){
				this.timeoutID=window.setTimeout(this.timeOutCallBack,this.timeOutCallBackTime);
				console.log("timeOUTID="+this.timeoutID);
			}
		}
		return this;
	}

	p.setCallBack=function(com,prg){
		this.loadCompleteFunc=com;
		this.loadProgressFunc=prg;
		return this;
	}
	EasyCreateJS.URLLoader=URLLoader;
	/*
	 *转动动效控制器用于实现转盘类型动效的模拟
	 *@class Roller
	 *@param {Number} max 延迟驱动
	*/
	function Roller(max){
		this.rzt;//转动判定变量
		this.rMsp;//最高角速度
		this.crsp;//当前角速度
		this.ENR=false;//驱动开关
		this._time;//时间缓存
		this._delay=max?max:0;
		this._realtime;
		this.arstsp;//加速度
		this.aredsp;//减速状态加速度
		this.notime;//匀速旋转时间 （单位格）
		this.vno;//当前时间
		this.autoStop=true;
		this._rotation=0;
		this._goalrotation;
		this.endFunc;
	}
	p=Roller.prototype;
	/*
	 *启动模拟
	 *@param {Number} st 启动的步长(转速0到最大转速的时间（帧）)
	 *@param {Number} no 匀速运动的时长（帧）
	 *@param {Number} ed 从最大速度到0速度的时间（帧）
	 *@param {Number} msp 最高角速度
	 *@param {Number} grot 最终停止角
	 *@param {Number} rot 起点角
	 *@param {Function} efunc 完成模拟的回调
	*/
	p.start=function(st,no,ed,msp,grot,rot,efunc) {//最终角度
			//参数rot为起点转动角 grot为终点转动角
			//atstp自动停止开关（如果设置为false则进入1状态后将持续旋转 直到再次开启后才进行减速并最终显示结果）
			//st 启动的步长 no平行旋转步长 ed终止步长 
			//当设置autoStop为true后将自动停止运转
			//grot:为终止旋转角度
			
			if(!this.ENR){
				this.rzt=0;//0为加速状态 1为减速状态
			//首先计算转动加速度
				this.notime=no;
				this.rMsp=msp
				this.arstsp=msp/st;//计算加速度 从速度0加速到目标速度 停止的时候需要计算新的加速度 确保速度为0的时候转动角正好是最终角度
				this.aredsp=-msp/ed;//停转加速度
				this._goalrotation=grot-this.ca_Rdis(msp,0,this.aredsp);
				if(this._goalrotation>360){
					this._goalrotation-=360;
				}else if(this._goalrotation<0){
					this._goalrotation+=360;
				}
				this.crsp=0;
				this._rotation=rot;
				this.ENR=true;
				this._time=0;
				this.endFunc=efunc;
			}
		}
		/*
		 * 内部调用
		*/
		p.ca_Rdis=function(v0,vt,a){
			//计算以v0为初速度 a为加速度的
			//这个角度默认为从0开始增加
			var vdis=0;
			while(true){
				vdis+=v0;
				if(vdis>360){
					vdis-=360;
				}else if(vdis<0){
					vdis+=360;
				}
				v0+=a;
				if(a>0 && v0>vt){
					break;
				}else if(a<0 && v0<vt){
					break;
				}
			}
			return vdis;
		}
		/*
		 * 内部调用
		*/
		p.roll=function(){
			if (this.rzt==0) {
				this._rotation+=this.crsp;
				this.crsp+=this.arstsp;
				if(this._rotation>360){
					this._rotation-=360;
				}else if(this._rotation<0){
					this._rotation+=360;
				}
			
				if (this.arstsp>0 && this.crsp>this.rMsp) {
					this.crsp=this.rMsp;
					this.vno=0;
					//转换后就会得到相应的转动距离
					this.rzt=1;
				} else if (this.arstsp<0 && this.crsp<this.rMsp) {
					this.crsp=this.rMsp;
					this.vno=0;
					this.rzt=1;
				}
			} else if (this.rzt==1) {
				if (this.vno<this.notime) {
					this._rotation+=this.rMsp;
					if(this._rotation>360){
						this._rotation-=360;
					}else if(this._rotation<0){
						this._rotation+=360;
					}
					this.vno+=1;
				} else {
					this._rotation+=this.rMsp;
					if(this._rotation>360){
						this._rotation-=360;
					}else if(this._rotation<0){
						this._rotation+=360;
					}
					if(this.autoStop){
						console.log("crsp="+this.crsp,"_rotation="+this._rotation,"goalrotation="+this._goalrotation);
						if(this.crsp>0 && this._rotation>=this._goalrotation){
							this._rotation=this._goalrotation;
							this.rzt=2;
						}else if(this.crsp<0 && this._rotation<=this._goalrotation) {
							this._rotation=this._goalrotation;
							this.rzt=2;
						}
					}
				}
			} else if (this.rzt==2) {
				this._rotation+=this.crsp;
				this.crsp+=this.aredsp;
				if(this._rotation>360){
					this._rotation-=360;
				}else if(this._rotation<0){
					this._rotation+=360;
				}
				if (this.aredsp>0 && this.crsp>0) {
					this.crsp=0;
					this.ENR=false;
					if(this.endFunc!=null){
						this.endFunc(this);
					}
				} else if (this.aredsp<0 && this.crsp<0) {
					this.crsp=0;
					this.ENR=false;
					if(this.endFunc!=null){
						this.endFunc(this);
					}
				}
			}
		}
		/*
		 *驱动
		*/
		p.run=function() {
			if (this.ENR) {
					this._time++;
					if(this._time>this._delay){
						this._time=0;
						this.roll();
					}
				
				
			}
		}
	EasyCreateJS.Roller=Roller;
	/**
	 *用于网络访问的请求对象
	 *@class URLRequest
	 *@param {String} url
	 *@param {String} POST 或GET 默认get 
	**/
	function URLRequest(url,method){
		if(this instanceof URLRequest){
			if(url){
				this.url=url;//访问地址
			}
			if(method){
				this.method=method;//get or post String
			}else{
				this.method="GET";//默认是get方式
			}
			this.requestName=new Array();
			this.requestValue=new Array();
		}else{
			return new URLRequest(url,method);
		}
	}
	p=URLRequest.prototype;
	p.addRequestData=function(name,value){
			//通过这个方法添加值对到对象中，每次添加1个属性
		
		this.requestName.push(name);
		this.requestValue.push(value);
		return this;
	}
	p.getRequestData=function(){
		var i;
		var re="";
		var len=this.requestName.length;
		for(i=0;i<len;i++){
			re+=this.requestName[i]+"="+this.requestValue[i];
			if(i<len-1){
				re+="&";
			}
		}
		return re;
	}
	p.getURL=function(){
		//生成实际请求字符串
		var re=this.url;
		if(this.method=="GET"){
			if(this.requestName.length>0){
				re+="?"+this.getRequestData();
			}
		}
		return re;
	}
	p.getDataByName=function(name){
			//根据值段的名字返回值 如果不存在则返回null
			//这个方法可获得网页传递的参数
		var i;
		var len=this.requestName.length;
		var re=null;
		for(i=0;i<len;i++){
			if(name==this.requestName[i]){
				re=this.requestValue[i];
				break;
			}
		}
		return re;
	}
	p.applyLocationData=function(){
		//将地址栏的字符串作为参数进行解析，结果保存在requestName 和requestValue中（成对保存）将url属性替换为当前的页面地址
		//如果request对象原有数据，则会替换原有数据
		this.requestName=new Array();
		this.requestValue=new Array();
		var str=location.href; //取得整个地址栏
		var tmp=str;
		var ind=str.indexOf("?");
		tmp=tmp.substr(0,ind);
		this.url=tmp;
		str=str.substr(ind+1);//剔除后面的
		var arr=str.split("&"); //各个参数放到数组里
		var i;
		var len=arr.length;
		for(i=0;i<len;i++){ 
   			tmp=arr[i];
			ind=tmp.indexOf("="); 
    		if(ind>0){ 
     			this.requestName.push(tmp.substr(0,ind));
     			this.requestValue.push(tmp.substr(ind+1));
     		} 
		}
	}
	EasyCreateJS.URLRequest=URLRequest;
})();
