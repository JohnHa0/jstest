var GameSence = new Phaser.Class({
    Extends: Phaser.Scene,
    preload: function (){
        this.load.image('cloud', 'images/game/pcloud.png?v=1');
		this.load.atlas('atlas', 'https://upload.cdn.be-xx.com/coach/h5-rabbit-game2/images/atlas.png?v=3', 'https://upload.cdn.be-xx.com/coach/h5-rabbit-game2/images/atlas.json');
		this.load.atlas('snowman', 'images/game/snowman/snowman.png', 'images/game/snowman/snowman.json');
        this.load.atlas('fox', 'images/game/fox/fox.png', 'images/game/fox/fox.json');
        this.load.atlas('man', 'images/game/man/man.png', 'images/game/man/man.json');
        this.load.image('line', 'images/game/line.png');
        this.load.image('tree_01', 'images/game/ng/tree_01.png');
        this.load.image('tree_02', 'images/game/ng/tree_02.png');
        this.load.image('tree_03', 'images/game/ng/tree_03.png');
        this.load.image('tree_04', 'images/game/ng/tree_04.png');
        this.load.image('tree_05', 'images/game/ng/tree_05.png');
        this.load.image('nfox', 'images/game/ng/fox.png');
        this.load.image('nman', 'images/game/ng/man.png');
        this.load.image('nsnowman', 'images/game/ng/snowman.png');
		// this.load.audio('jump','music/jump.mp3');
        let textStyle = { font:"bold 40px 黑体",color: '#FFC94B',stroke:"#6D3302",align: 'center',strokeThickness:10}
        let loadtext;
        this.load.on('progress',  (value)=> {
            // loadtext = this.add.text(0, 0, '加载中==' + parseInt(value * 100), textStyle)
            // console.log(value)
        });

        this.load.on('complete',  ()=> {
            // loadtext.destroy();
        });
    },
    pauseSense(){
        this.scene.pause();//场景暂停
    },
    resumeSense(){
        this.scene.resume();//场景继续
    },
    restartGame(){
        this.scene.restart();//重新开始这个场景
        this.scene.resume();//场景继续
    },
    create: function (){
        this.scene.pause();//游戏暂停
        this.gameOverTime = 25;//游戏总时长
        this.gameSeconds = 0;//当前游戏时间
        this.snowManCount = 0;//当前收集的雪人数量
        this.gw = this.game.scale.width;
        this.gh = this.game.scale.height; 
        this.rolesArr = [
            {key: "snowman",width:240,height:373,bw:240,bh:373,ox:0,oy:0},
            {key: "fox",width:350,height:353,bw:200,bh:100,ox:70,oy:150},
            {key: "man",width:260,height:448,bw:60,bh:400,ox:90,oy:0},
        ]
        this.randomRole = [0,1,1,1,2,2,2];
        this.nrolesArr = [
            {key: "nsnowman",width:240,height:373,bw:240,bh:373,ox:0,oy:0},
            {key: "nfox",width:350,height:353,bw:200,bh:100,ox:70,oy:150},
            {key: "nman",width:260,height:448,bw:60,bh:400,ox:90,oy:0},
        ]
        let _tx = this.gw/2;
        let _ty = this.gh/2;
        this.autoRefreshTimer = ''
        this.clickFlag  = false
        this.treeDots = [
            {x:_tx-60,y:_ty+320,z:5,angle:-20,sx:1,snowman:true},//此位置只能出现雪人
            {x:_tx+60,y:_ty+320,z:5,angle:20,sx:-1,snowman:true},//此位置只能出现雪人
            {x:_tx-150,y:_ty+80,z:5,angle:-20,sx:1},
            {x:_tx,y:_ty+60,z:5,angle:0,sx:1},
            {x:_tx+150,y:_ty+80,z:5,angle:15,sx:-1},
            {x:_tx-120,y:_ty-50,z:4,angle:-15,sx:1},
            {x:_tx+100,y:_ty-50,z:4,angle:15,sx:-1},
            {x:_tx,y:_ty-130,z:3,angle:0,sx:1},
            {x:_tx-110,y:_ty-240,z:2,angle:-15,sx:1},
            {x:_tx+90,y:_ty-280,z:1,angle:30,sx:-1}
        ]
        this.line = this.physics.add.sprite(this.gw + 360,0,'line')
        this.line.setScale(1,2)
        //批量生成40个角色
        this.roles = this.physics.add.group({
            maxSize: 40,
        });
        this.physics.add.overlap(this.line, this.roles, this.recoverRole, null, this);//角色与线触碰 回收角色
        this.anims.create({
            key: 'fox',
            frames: this.anims.generateFrameNames('fox', { start: 1, end: 6 }),
            frameRate: 5,
            repeat: -1,
        });//狐狸
        this.anims.create({
            key: 'man',
            frames: this.anims.generateFrameNames('man', { start: 3, end: 5 }),
            frameRate: 5,
            repeat: -1,
        });//狐狸

        this.anims.create({
            key: 'snowman',
            frames: this.anims.generateFrameNames('snowman', { start: 1, end: 5 }),
            frameRate: 5,
            repeat: -1,
        });//雪人

        
        
        this.tree_01 = this.add.image(_tx,_ty,'tree_01').setDepth(6).setAlpha(0)
        this.tree_02 = this.add.image(_tx,_ty,'tree_02').setDepth(5).setAlpha(0)
        this.tree_03 = this.add.image(_tx,_ty,'tree_03').setDepth(4).setAlpha(0)
        this.tree_04 = this.add.image(_tx,_ty,'tree_04').setDepth(3).setAlpha(0)
        this.tree_05 = this.add.image(_tx,_ty,'tree_05').setDepth(2).setAlpha(0)

        this.tweens.add({targets: this.tree_01,alpha:1,duration: 500});
        this.tweens.add({targets: this.tree_02,alpha:1,duration: 500});
        this.tweens.add({targets: this.tree_03,alpha:1,duration: 500});
        this.tweens.add({targets: this.tree_04,alpha:1,duration: 500});
        this.tweens.add({targets: this.tree_05,alpha:1,duration: 500});
        this.loopFun()
       
        this.input.mouse.disableContextMenu();//取消鼠标右击弹出菜单选项
        this.particle = this.add.particles('cloud');
        this.emitter = this.particle.createEmitter({
                x: -100,
                y: -100,
                speed: { min: -300, max:300 },
                angle: { min: 0, max: 360 },
                scale: { start: .8, end: 0 },
                alpha:{start: 1, end: 1 },
                blendMode: 'ADD',
                //active: false,
                lifespan: 600,
                gravityY: 0
        });
        // this.timeTxt = this.add.text(88, 230, this.gameSeconds + "S", { fontFamily: 'Arial', fontSize: 30, color: '#745d42' }).setOrigin(0.5,1).setScrollFactor(0);
        // this.timeTxt.depth = 999

        this.countDown()
        loadCreate()
    },
    autoRefresh(){
        this.autoRefreshTimer = this.time.addEvent({ delay: 5000, callback: ()=>{
            this.refreshRole()
            console.log("=====================刷新")
        },loop: true});
    },
    removeTimer(){
        this.autoRefreshTimer.remove(false)
    },
    countDown(){
        // 定时器
        loadNum(this.gameOverTime)
        this.time.addEvent({ delay: 1000, callback: ()=>{
            this.gameSeconds += 1;
            loadNum(this.gameOverTime - this.gameSeconds)
            // this.timeTxt.setText(this.gameSeconds + "S");
            // 游戏时间超过30秒则游戏结束
            console.log("===游戏耗时===",this.gameSeconds)
            if(this.gameSeconds >= this.gameOverTime){
                console.log("===超过30秒--游戏结束")
                this.gameOver("timeover")
            }
        },loop: true});
    },
    loopFun(){
        this.autoRefresh()
        this.createRole()
        // this.time.addEvent({ delay: 450, callback: ()=>{
        //     this.createRole()
        // },loop: true});
    },
    recoverRole(line,role){
        role.destroy()
    },
    refreshRole(){
        this.roles.children.iterate((roleitem)=> {
            this.tweens.add({
                targets: roleitem,
                duration: 200,
                alpha:0,
                ease: 'Sine.easeInOut',
                onComplete:  () =>{ 
                    roleitem.destroy()
                    if(this.roles.children.size == 0){
                        this.createRole()
                    }
                },
            });
        });
    },
    createRole(){
        let tarr = JSON.parse(JSON.stringify(this.treeDots))
        tarr.splice(this.gr(0,1),1);//底部雪人只能出现一只
        let treeDots = tarr.sort(this.ranArr);//打乱数组
        let num = this.gr(5,6);//随机出现 5 - 6个角色
        let snowman = 0
        for(let i=0;i<num;i++){
            let rindex = this.gr(0,this.randomRole.length - 1);//随机角色
            if(treeDots[i].snowman || (i == num - 1 && snowman == 0)){//底部出现的是雪人
                rindex = 0
            }
            if(this.randomRole[rindex] == 0){
                snowman++
            }
            let roleItem = this.nrolesArr[this.randomRole[rindex]]
            let role = this.roles.getFirstDead(true,treeDots[i].x,treeDots[i].y+40,roleItem.key).setInteractive()
            role.setDepth(treeDots[i].z);
            role.alpha = 0;
            role.angle = treeDots[i].angle;
            role.setScale(treeDots[i].sx,1)
            this.tweens.add({
                targets: role,
                alpha:1,
                y:treeDots[i].y,
                duration: this.gr(100,400),
                ease: 'Sine.easeInOut',
                onComplete:  () =>{ 
                    if(i == num - 1){
                        clickFlag = true
                    }
                },
            });
            role.type = roleItem.key;
            role.isCollect = false
            role.on('pointerdown',  ()=> {
                if(!clickFlag) return
                clickFlag = false
                this.removeTimer()
                this.autoRefresh()
                if(role.type == 'nsnowman'){
                    if(!role.isCollect){
                        role.isCollect = true
                        this.snowManCount ++;
                        this.emitter.setPosition(role.angle > 0 ? role.body.x - 50 : role.body.x + 50 , role.body.y + 50);
                        this.emitter.explode(50);
                        this.particle.setDepth(role.depth+1);
                        this.tweens.add({
                            targets: role,
                            alpha:0,
                            scale:0,
                            duration: 200,
                            ease: 'Sine.easeInOut',
                            onComplete:  () =>{ 
                                this.refreshRole()
									this.snowManCount=10
                                _addSnowMan(this.snowManCount)
                                if(this.snowManCount >= 10){
                                    this.scene.pause();//场景暂停
                                }
                            },
                        });
                    }
                }else{
                    if(this.snowManCount >= 10){
                        return
                    }
                    this.refreshRole()
                    this.gameOver("clickError")
                }
            })
        }
    },
    scoreAdd(s){
        this.score += s;
        this.scoreTxt.setText(this.score);
    },
    update: function (){
    },
    gameOver(type){
        this.scene.pause();//场景暂停
        _GameOver(type)
    },
    // arr = arr.sort(ranArr);//打乱数组
    ranArr(a, b) {
		return Math.random() > .5 ? -1 : 1;
	},
    gr(min,max){
        return Phaser.Math.Between(min,max)
    },
})