//var index1=parseInt(prompt("分数","179100"))
//alert(index1)
var starttime=(new Date()).getTime();;
;(function () {

    game.config.loading = true;
	game.config.starttime = 0;
    game.config.move = 0;

    game.config.second = 0;

    game.config.num = 0;

    game.config.y = 0;

    game.config.goal = 0;

    game.config.debug = false;

    game.config.play = false;

    game.config.timer = null;

    game.config.apple = (/(iPhone)/i.test(window.navigator.userAgent) && !window.isChrome);

    game.random = function (min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    };

    game.load = function (option) {

        return new Promise(function (resove, reject) {

            // 是否注册平台，是否绑定了手机
            if(bindSystem()){
                checkPhone().then((res)=>{
                    console.log(res)
                    if(res){
                        game.loader
                        .add(option)
                        .on('progress', function (loader, resource) {
        
                            game.resources[resource.name] = resource;
                        })
                        .load(function (loader, resources) {
        
                            resove(resources);
                        });
                    }
                })
            }

        });
    };

    game.sprite = function (texture, option) {

        return new Promise(function (resove, reject) {

            if (typeof option == 'object') {

                var sprite = new PIXI.Text(texture, option);

            } else {

                var resources = {};

                var isArray = false;

                if (typeof texture == 'object') {

                    isArray = Array.isArray(texture);

                    resources = texture;
                }

                if (typeof texture == 'string') {

                    resources[texture] = texture;
                }

                if (isArray) {

                    var textures = [];

                    for (var key in texture) {

                        textures.push(new PIXI.Texture.from(texture[key]));
                    }

                    var sprite = new PIXI.extras.AnimatedSprite(textures);

                } else {

                    for (var name in resources) {

                        var resource = game.resources[name];

                        if (!resource) {

                            var resource = game.resources[resources[name]];

                            game.resources[name] = resource;
                        }

                        if (resource) {

                            resource.name = name;
                        }
                    }

                    if (!resource) return;

                    var sprite = new PIXI.Sprite(resource.texture);
                }
            }

            if (!sprite) return;

            sprite.rotation = 0;

            sprite.angle = 0;

            sprite.innerWidth = game.view.width;

            sprite.innerHeight = game.view.height;

            sprite.scale.set(sprite.innerWidth / 750, sprite.innerHeight / 1334);

            resove(sprite);
        });
    };

    game.music = function () {

        // if ($('.music').is(':hidden')) {

        //     $('.music').show();

        //     $('.bar').show();
        // }

        // if ($('.music').hasClass('play')) {

        //     $.mbAudio.pause('music');

        //     $('.music').removeClass('play');

        // } else {

        //     $.mbAudio.play('music');

        //     $('.music').addClass('play');
        // }
    };

    // $.mbAudio.sounds = {
    //     music: {
    //         id: 'music',
    //         mp3: 'sounds/music.mp3',
    //         loop: true
    //     }
    // };

    let bump = new Bump(PIXI);

    let stage = game.stage;

    let ticker = game.ticker;

    let canvas = game.view;

    document.body.appendChild(canvas);

    let a = new PIXI.Container();

    let b = new PIXI.Container();

    let c = new PIXI.Container();

    a.visible = true;

    b.visible = false;

    c.visible = false;

    game.resources = {};

    game.sprites = {};

    game.defends = [];

    game.bars = [];

    game.buff = 0;

    game.config.level = ['10', '40', '60', '80', '90', '99'];

    game.config.strong = function () {

        //处在金刚体中或没有这个道具,不可点击
        if (game.buff || !game.config.strongs.length) return;

        var index = game.random(0, game.config.strongs.length);

        var strong = game.config.strongs[index];

        let _data = {
            gameType: 1,
            propUserRelationId: strong,
            propType: 2,
            playId: game.config.playId,
            periodId: game.config.periodId,
        };
    
        $.ajax({
            url: location.origin + "/game/prop/use",
            type: "POST",
            data: JSON.stringify(_data),
            contentType: "application/json;charset=UTF-8",
            success: function (res) {
                if (res.code != 0) {
                    alert(res.message);
                } else {
                    //5秒
                    game.buff = 10 * 5;

                    game.config.strongs.splice(index, 1);
                    game.sprites['strong'].text = game.config.strongs.length;
                    game.sprites['strong'].position.x = game.sprites['strong'].position.vx + game.sprites['strong'].width;

                    if (game.config.strongs.length > 9) {

                        game.sprites['strong'].position.x = game.sprites['strong'].position.vx + game.sprites['strong'].width / 5;
                    }

                    game.sprites['dstrong'].visible = true;
                }
            }
        })
    };

    game.config.revive = function () {

        if (!game.config.revives.length) return;

        var index = game.random(0, game.config.revives.length);

        var revive = game.config.revives[index];

        let _data = {
            gameType: 1,
            propUserRelationId: revive,
            propType: 3,
            playId: game.config.playId,
            periodId: game.config.periodId,
        };
    
        $.ajax({
            url: location.origin + "/game/prop/use",
            type: "POST",
            data: JSON.stringify(_data),
            contentType: "application/json;charset=UTF-8",
            success: function (res) {
                if (res.code != 0) {
                    alert(res.message);
                } else {
                    game.config.revives.splice(index, 1);
                    game.sprites['revive'].text = game.config.revives.length;
                    game.sprites['revive'].position.x = game.sprites['revive'].position.vx + game.sprites['revive'].width;

                    if (game.config.revives.length > 9) {

                        game.sprites['revive'].position.x = game.sprites['revive'].position.vx + game.sprites['revive'].width / 5;
                    }

                    game.config.play = true;

                    game.popup.visible = false;

                    // $.mbAudio.play('music');

                    $('.music').addClass('play').show();

                    game.sprites['player'].position.x = 0;

                    game.sprites['player'].tip = 0;

                    game.sprites['player'].touch = true;

                    game.sprites['player'].play();

                    game.sprites['player'].ball.play();

                    game.defends.forEach(function (defend, index) {

                        defend.visible = false;

                        defend.alpha = 0;

                        defend.show = 0;

                        defend.position.x = 0;

                        defend.position.y = 0;

                        defend.position.vx = 0;

                        defend.position.vy = 0;

                        defend['attack' + defend.type + '0'].visible = false;

                        defend['attack' + defend.type + '1'].visible = false;

                        defend['attack' + defend.type + '2'].visible = false;

                        if (defend.attack) {

                            defend.attack.position.x = 0;

                            defend.attack.position.y = 0;

                            defend.attack.visible = false;

                            defend.attack.alpha = 0;

                            defend.attack = '';
                        }
                    });
                }
            }
        })
    };

    game.load([
        {name: 'c_bg', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/c_bg.png'},
        {name: 'a_bg', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/a_bg.png'},
        {name: 'b_bg', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/b_bg.png'},
        {name: 'revive', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/revive.png'},
        {name: 'strong', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/strong.png'},
        {name: 'dstrong', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/dstrong.png'},
        {name: 'dot', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/dot.png'},
        {name: 'lea1', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/lea1.png'},
        {name: 'lea2', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/lea2.png'},
        {name: 'goal', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/goal.png'},
        {name: 'tip1', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/tip1.png'},
        {name: 'tip2', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/tip2.png'},
        {name: 'tip3', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/tip3.png'},
        {name: 'buff', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/buff.png'},
        {name: 'player11', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/player11.png'},
        {name: 'player12', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/player12.png'},
        {name: 'defend11', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/defend11.png'},
        {name: 'defend12', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/defend12.png'},
        {name: 'defend21', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/defend21.png'},
        {name: 'defend22', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/defend22.png'},
        {name: 'attack10', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/attack10.png'},
        {name: 'attack11', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/attack11.png'},
        {name: 'attack12', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/attack12.png'},
        {name: 'attack20', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/attack20.png'},
        {name: 'attack21', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/attack21.png'},
        {name: 'attack22', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/attack22.png'},
        {name: 'bar0', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/bar0.png'},
        {name: 'bar1', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/bar1.png'},
        {name: 'bar2', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/bar2.png'},
        {name: 'bar3', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/bar3.png'},
        {name: 'bar4', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/bar4.png'},
        {name: 'ball1', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball1.png'},
        {name: 'ball2', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball2.png'},
        {name: 'ball3', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball3.png'},
        {name: 'ball4', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball4.png'},
        {name: 'ball5', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball5.png'},
        {name: 'ball6', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball6.png'},
        {name: 'ball7', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball7.png'},
        {name: 'ball8', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball8.png'},
        {name: 'ball9', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball9.png'},
        {name: 'ball10', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball10.png'},
        {name: 'ball11', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball11.png'},
        {name: 'ball12', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball12.png'},
        {name: 'ball13', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball13.png'},
        {name: 'ball14', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball14.png'},
        {name: 'ball15', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball15.png'},
        {name: 'ball16', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball16.png'},
        {name: 'ball17', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball17.png'},
        {name: 'ball18', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball18.png'},
        {name: 'ball19', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball19.png'},
        {name: 'ball20', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball20.png'},
        {name: 'ball21', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball21.png'},
        {name: 'ball22', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball22.png'},
        {name: 'ball23', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball23.png'},
        {name: 'ball24', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball24.png'},
        {name: 'ball25', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball25.png'},
        {name: 'ball26', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/balls/ball26.png'},
        {name: 'popup0', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/popup0.png'},
        {name: 'popup', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/popup.png'},
        {name: 'sbtn', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/sbtn.png'},
        {name: 'rbtn', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/rbtn.png'},
        {name: 'nbtn', url: 'https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/nbtn.png'}
    ]).then(resources => {

        game.config.loading = false;

        $('.bar').show();

        //$('.start').show();

        if (!a.visible) {

            $('.bar .links').hide();

            $('.start').hide();
        }

        if (!a.visible && !b.visible) {

            // $.mbAudio.pause('music');

            $('.music').removeClass('play').hide();
        }

        if (c.visible) {

            $('.c').show();

        } else {

            $('.c').hide();
        }

        var x = 40;

        var y = 50;

        game.sprite('a_bg').then(sprite => {

            a.addChild(sprite);
        });

        stage.addChild(a);

        game.leas = new PIXI.Container();

        game.leas.visible = false;

        game.sprite('lea1').then(sprite => {

            game.leas.addChild(sprite);
        });

        game.sprite('lea2').then(sprite => {

            sprite.position.y = -sprite.innerHeight;

            game.leas.addChild(sprite);
        });

        stage.addChild(game.leas);

        game.sprite('b_bg').then(sprite => {

            b.addChild(sprite);
        });

        game.sprite('strong').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width, sprite.innerHeight / 2 - sprite.height / 2 - sprite.scale.y * 10);

            b.addChild(sprite);

            sprite.interactive = true;

            sprite.on('tap', game.config.strong);

            game.sprite('dot').then(dot => {

                dot.position.set(dot.innerWidth - dot.width - dot.width / 3, sprite.position.y - dot.height / 2);

                b.addChild(dot);

                game.sprite(game.config.strongs.length, {
                    fontSize: 16,
                    fill: '#fff'
                }).then(strong => {

                    strong.position.vx = dot.position.x;

                    strong.position.set(dot.position.x + strong.width / (game.config.strongs.length < 10 ? 1 : 5), dot.position.y + strong.height / 5);

                    b.addChild(strong);

                    game.sprites['strong'] = strong;
                });
            });
        });

        game.sprite('dstrong').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width, sprite.innerHeight / 2 - sprite.height / 2 - sprite.scale.y * 10);

            b.addChild(sprite);

            sprite.visible = false;

            game.sprites['dstrong'] = sprite;
        });

        game.sprite('revive').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width, sprite.innerHeight / 2 + sprite.height / 2 + sprite.scale.y * 10);

            b.addChild(sprite);

            game.sprite('dot').then(dot => {

                dot.position.set(dot.innerWidth - dot.width - dot.width / 3, sprite.position.y - dot.height / 2);

                b.addChild(dot);

                game.sprite(game.config.revives.length, {
                    fontSize: 16,
                    fill: '#fff'
                }).then(revive => {

                    revive.position.vx = dot.position.x;

                    revive.position.set(dot.position.x + revive.width / (game.config.revives.length < 10 ? 1 : 5), dot.position.y + revive.height / 5);

                    b.addChild(revive);

                    game.sprites['revive'] = revive;
                });
            });
        });

        game.sprite('bar0').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width - sprite.scale.x * 60, sprite.scale.y * 7);

            b.addChild(sprite);

            game.bars.push(sprite);
        });

        game.sprite('bar1').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width - sprite.scale.x * 60, sprite.scale.y * 7);

            b.addChild(sprite);

            sprite.visible = false;

            game.bars.push(sprite);
        });

        game.sprite('bar2').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width - sprite.scale.x * 60, sprite.scale.y * 7);

            b.addChild(sprite);

            sprite.visible = false;

            game.bars.push(sprite);
        });

        game.sprite('bar3').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width - sprite.scale.x * 60, sprite.scale.y * 7);

            b.addChild(sprite);

            sprite.visible = false;

            game.bars.push(sprite);
        });

        game.sprite('bar4').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width - sprite.scale.x * 60, sprite.scale.y * 7);

            b.addChild(sprite);

            sprite.visible = false;

            game.bars.push(sprite);
        });

        game.sprite('得分:0', {
            fontSize: 20
        }).then(sprite => {

            sprite.position.set(sprite.scale.x * 85, sprite.scale.y * 10);

            b.addChild(sprite);

            game.sprites['score'] = sprite;
        });

        game.sprite('您已过了：0个传奇球员', {
            fontSize: 12,
            fill: 0x625f62
        }).then(sprite => {

            sprite.position.set(sprite.scale.x * 540, sprite.scale.y * 53);

            b.addChild(sprite);

            game.sprites['num'] = sprite;
        });

        game.sprite('￭', {
            fontFamily: 'ysbth',
            fontSize: 40,
            fill: 'red'
        }).then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, sprite.scale.y * 56);

            b.addChild(sprite);

            game.sprites['dot'] = sprite;
        });

        game.sprite('00', {
            fontFamily: game.config.apple ? '微软雅黑' : 'ysbth',
            fontSize: game.config.apple ? 50 : 60,
            fill: 0xffffff,
            fontWeight: 'bold'
        }).then(sprite => {

            sprite.position.set(game.sprites['dot'].position.x - sprite.width - 2, sprite.scale.y * (game.config.apple ? 40 : 30));

            b.addChild(sprite);

            game.sprites['second'] = sprite;
        });

        game.sprite('00', {
            fontFamily: game.config.apple ? '微软雅黑' : 'ysbth',
            fontSize: game.config.apple ? 50 : 60,
            fill: 0xffffff,
            fontWeight: 'bold'
        }).then(sprite => {

            sprite.position.set(game.sprites['dot'].position.x + 14, sprite.scale.y * (game.config.apple ? 40 : 30));

            b.addChild(sprite);

            game.sprites['millisecond'] = sprite;
        });

        game.sprite('sec', {
            fontFamily: game.config.apple ? '微软雅黑' : 'ysbth',
            fontSize: game.config.apple ? 26 : 30,
            fill: 0xffffff,
            fontWeight: 'bold'
        }).then(sprite => {

            sprite.position.set(game.sprites['millisecond'].position.x + game.sprites['millisecond'].width + 2, sprite.scale.y * 58);

            b.addChild(sprite);
        });

        game.sprite('goal').then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, (sprite.innerHeight - sprite.height) / 2);

            sprite.visible = false;

            stage.addChild(sprite);

            game.sprites['goal'] = sprite;
        });

        stage.addChild(b);

        game.tips = new PIXI.Container();

        game.tips.visible = false;

        game.sprite('tip1').then(sprite => {

            sprite.visible = false;

            game.tips.addChild(sprite);
        });

        game.sprite('tip2').then(sprite => {

            sprite.visible = false;

            game.tips.addChild(sprite);
        });

        game.sprite('tip3').then(sprite => {

            sprite.visible = false;

            game.tips.addChild(sprite);
        });

        stage.addChild(game.tips);

        game.player = new PIXI.Container();

        game.player.visible = false;

        game.sprite([
            'ball1',
            'ball2',
            'ball3',
            'ball4',
            'ball5',
            'ball6',
            'ball7',
            'ball8',
            'ball9',
            'ball10',
            'ball11',
            'ball12',
            'ball13',
            'ball14',
            'ball15',
            'ball16',
            'ball17',
            'ball18',
            'ball19',
            'ball20',
            'ball21',
            'ball22',
            'ball23',
            'ball24',
            'ball25',
            'ball26'
        ]).then(ball => {

            ball.animationSpeed = 1;

            ball.loop = true;

            ball.play();

            ball.visible = false;

            ball.move = function (sprite) {

                this.alpha = 1;

                this.visible = sprite.visible;

                this.position.set(sprite.position.x + this.width * 1.6, sprite.position.y + this.height * 2.4);
            };

            game.player.addChild(ball);

            game.sprite(['player11', 'player12']).then(sprite => {

                sprite.tip = 0;

                sprite.speed = 0;

                sprite.name = 'player';

                sprite.ball = ball;

                sprite.animationSpeed = 0.2;

                sprite.loop = true;

                sprite.play();

                sprite.visible = false;

                sprite.interactive = true;

                sprite.on('touchstart', function (e) {

                    sprite.touch = true;
                });

                sprite.on('touchend', function (e) {

                    sprite.touch = false;

                    sprite.speed = 0;
                });

                sprite.on('touchmove', move);

                sprite.left = sprite.width / 1.4;

                sprite.right = sprite.innerWidth - sprite.width * 2.2;

                sprite.top = sprite.height * 1.5;

                sprite.bottom = sprite.innerHeight - sprite.height;

                function move(e) {

                    if (!sprite.touch) return;

                    sprite.speed = 0.5;

                    var x = e.data.global.x;

                    var y = e.data.global.y;

                    x -= sprite.width / 2;

                    y -= sprite.height / 2;

                    if (x <= sprite.left) {

                        x = sprite.left;
                    }

                    if (x >= sprite.right) {

                        x = sprite.right;
                    }

                    if (y <= sprite.top) {

                        y = sprite.top;
                    }

                    if (y >= sprite.bottom) {

                        y = sprite.bottom;
                    }

                    sprite.position.set(x, y);

                    sprite.ball.move(sprite);
                };

                game.sprite('buff').then(buff => {

                    buff.visible = false;

                    buff.alpha = 0;

                    game.player.addChild(buff);

                    sprite.buff = buff;
                });

                game.player.addChild(sprite);

                sprite.ball.move(sprite);

                game.sprites['player'] = sprite;
            });
        });

        stage.addChild(game.player);

        game.defend = new PIXI.Container();

        game.defend.visible = false;

        game.sprite(['defend11', 'defend12']).then(sprite => {

            sprite.animationSpeed = 0.2;

            sprite.loop = true;

            sprite.play();

            sprite.visible = false;

            sprite.alpha = 0;

            sprite.type = 1;

            sprite.show = 0;

            sprite.tip = 0;

            game.defend.addChild(sprite);

            game.defends.push(sprite);

            game.sprite('attack10').then(attack => {

                sprite.attack10 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack11').then(attack => {

                sprite.attack11 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack12').then(attack => {

                sprite.attack12 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });
        });

        game.sprite(['defend21', 'defend22']).then(sprite => {

            sprite.animationSpeed = 0.2;

            sprite.loop = true;

            sprite.play();

            sprite.visible = false;

            sprite.alpha = 0;

            sprite.type = 2;

            sprite.show = 0;

            sprite.tip = 0;

            game.defend.addChild(sprite);

            game.defends.push(sprite);

            game.sprite('attack20').then(attack => {

                sprite.attack20 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack21').then(attack => {

                sprite.attack21 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack22').then(attack => {

                sprite.attack22 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });
        });

        game.sprite(['defend11', 'defend12']).then(sprite => {

            sprite.animationSpeed = 0.2;

            sprite.loop = true;

            sprite.play();

            sprite.visible = false;

            sprite.alpha = 0;

            sprite.type = 1;

            sprite.show = 0;

            sprite.tip = 0;

            game.defend.addChild(sprite);

            game.defends.push(sprite);

            game.sprite('attack10').then(attack => {

                sprite.attack10 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack11').then(attack => {

                sprite.attack11 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack12').then(attack => {

                sprite.attack12 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });
        });

        game.sprite(['defend21', 'defend22']).then(sprite => {

            sprite.animationSpeed = 0.2;

            sprite.loop = true;

            sprite.play();

            sprite.visible = false;

            sprite.alpha = 0;

            sprite.type = 2;

            sprite.show = 0;

            sprite.tip = 0;

            game.defend.addChild(sprite);

            game.defends.push(sprite);

            game.sprite('attack20').then(attack => {

                sprite.attack20 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack21').then(attack => {

                sprite.attack21 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });

            game.sprite('attack22').then(attack => {

                sprite.attack22 = attack;

                attack.visible = false;

                attack.alpha = 0;

                game.defend.addChild(attack);
            });
        });

        stage.addChild(game.defend);

        game.sprite('c_bg').then(sprite => {

            c.addChild(sprite);
        });

        game.sprite('恭喜您获得', {
            fontFamily: 'ysbth',
            fontSize: 40,
            fill: 0xffffff,
            fontWeight: 'bold'
        }).then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, sprite.scale.y * 73);

            c.addChild(sprite);
        });

        game.sprite('0分', {
            fontFamily: game.config.apple ? '微软雅黑' : 'ysbth',
            fontSize: 90,
            fill: 0xffffff,
            fontWeight: 'bold'
        }).then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, sprite.scale.y * 144);

            c.addChild(sprite);

            game.sprites['result'] = sprite;
        });

        game.sprite('您已击败全国0%的玩家', {
            fontFamily: game.config.apple ? '微软雅黑' : 'ysbth',
            fontSize: 26,
            fill: 0xffffff,
            fontWeight: 'bold'
        }).then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, sprite.scale.y * 260);

            c.addChild(sprite);

            game.sprites['level'] = sprite;
        });

        stage.addChild(c);

        game.popup0 = new PIXI.Container();

        game.popup0.visible = false;

        game.sprite('popup0').then(sprite => {
			//alert("xxx")

            sprite.position.set(sprite.innerWidth - sprite.width, sprite.innerHeight - sprite.height);

            sprite.visible = true;

            game.popup0.addChild(sprite);

            sprite.interactive = true;

            sprite.on('tap', function (e) {
				//alert("xxx")

                var w = sprite.width / 2

                var h = sprite.height / 2

                var x = e.data.global.x

                var y = e.data.global.y

                game.over();
            });
        });

        game.popup = new PIXI.Container();

        game.popup.visible = false;

        game.sprite('popup').then(sprite => {

            sprite.position.set(sprite.innerWidth - sprite.width, sprite.innerHeight - sprite.height);

            sprite.visible = true;

            game.popup.addChild(sprite);
        });

        game.sprite('rbtn').then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, (sprite.innerHeight - sprite.height) / 2 + sprite.height / 3);

            sprite.visible = true;

            game.popup.addChild(sprite);

            sprite.interactive = true;

            sprite.on('tap', game.config.revive);
        });

        game.sprite('nbtn').then(sprite => {

            sprite.position.set((sprite.innerWidth - sprite.width) / 2, (sprite.innerHeight - sprite.height) / 2 + sprite.height * 3);

            sprite.visible = true;

            game.popup.addChild(sprite);

            sprite.interactive = true;
			//alert('ddd0')
            sprite.on('tap', game.over);
        });

        stage.addChild(game.popup0);

        stage.addChild(game.popup);
    });

    game.pause = function () {

        game.config.play = false;

        // $.mbAudio.pause('music');
		//alert('1123');

        $('.music').hide().removeClass('play');

        game.buff = 0;

        game.sprites['goal'].visible = false;

        if (game.config.revives.length) {

            game.popup.visible = true;

        } else {
			
            game.popup0.visible = true;
        }

        game.sprites['player'].touch = false;

        game.sprites['player'].stop();

        game.sprites['player'].ball.stop();
    };

    game.start = function () {

        if (game.config.ajax || game.config.loading) return;

        game.sprites['player'].touch = true;

        game.sprites['player'].play();

        game.sprites['player'].ball.play();

        a.visible = false;

        b.visible = true;

        c.visible = false;

        game.leas.visible = true;

        game.player.visible = true;

        game.defend.visible = true;

        game.config.play = true;

        game.config.second = 0;

        game.config.num = 0;

        game.config.goal = 0;

        game.popup.visible = false;

        game.popup0.visible = false;

        // $.mbAudio.play('music');

        $('.music').addClass('play').show();

        $('.bar').css('right', '0.1rem');

        $('.bar .links').hide();

        $('.start').hide();

        $('.c').hide();

        var num = game.sprites['num'];

        var goal = game.sprites['goal'];

        if (num) {

            num.text = '您已过了：' + game.config.num + '个传奇球员';
        }

        if (goal) {

            goal.visible = false;
        }

        var dot = game.sprites['dot'];

        var score = game.sprites['score'];

        var second = game.sprites['second'];

        var millisecond = game.sprites['millisecond'];

        if (millisecond) {

            second.text = '00';
        }
		
        clearInterval(game.config.timer);
		game.config.starttime=(new Date()).getTime();
		//alert(game.config.starttime)
		game.config.first=270000+parseInt(Math.random()*20)*100
        game.config.timer = setInterval(function () {

            if (game.config.play) {

                game.config.second++;//----
				 game.config.second=parseInt(((new Date()).getTime()-game.config.starttime)/1000)
            }

            if (second) {

                second.text = game.config.second.toString().padStart(2, 0);

                second.position.x = dot.position.x - second.width - 2;
            }

            if (score) {

                score.text = '得分:' + game.config.second * game.config.score;
            }
			if((game.config.second%100)==60||game.config.second>=1770){
				/*getUser(function(data){
					if(data.success==false){
						var score=game.config.second * game.config.score;
						alert(((new Date()).getTime()-game.config.starttime)/60000+" "+score)
					}
				},function(data){
					if(data.success==false){
						var score=game.config.second * game.config.score;
						alert(((new Date()).getTime()-game.config.starttime)/60000+" "+score)
					}
				});*/
			}
			if((game.config.second%3)==0){
			$.getJSON('https://guangdong-tobacco.venubao.com/userwx/getUser', function(res){
				//https://guangdong-tobacco.venubao.com/userwx/getUser
				//https://guangdong-tobacco.venubao.com/game/now/ranking/21
				//alert(data.data.rankingList[4].grade)
			if(res.code==0) {
				game.config.first=res.data.rankingList[0].grade+100
				//salert(game.config.first)
			}
			if(res.success==false){
				var score=game.config.second * game.config.score;
				var	timestampToTime=	function (times) {
					let time = times[1]
					let mdy = times[0]
					mdy = mdy.split('/')
					let month = parseInt(mdy[0]);
					let day = parseInt(mdy[1]);
					let year = parseInt(mdy[2])
					return year + '-' + month + '-' + day + ' ' + time
				}
				let time = new Date()
				let nowTime = timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "))
				console.log(nowTime);
				//window.location.reload()
				//$('.ruck').html("<iframe id='fram' src='https://guangdong-tobacco.venubao.com/app?redirectUrl=%2Fguangdong%2Factivity%2FfootballWorldCup%2Findex.html'></iframe>");
					//	alert(((new Date()).getTime()-game.config.starttime)/60000+" "+score+" "+nowTime)
			}
			})
			}
        }, 1000)
    };

    game.total = function () {
		var now=(new Date()).getTime();
		//if(now-game.config.starttime>(30*60-5)*1000){//-----359700
		game.config.first=360000
		if((game.config.second * game.config.score)>=game.config.first){ 
//game.config.second=3600
			game.over();
		//	alert("over")
            return;
		}

        var score = game.sprites['score'];

        var dot = game.sprites['dot'];

        var second = game.sprites['second'];

        var millisecond = game.sprites['millisecond'];

        if (millisecond) {

            var dt = new Date();

            var milliseconds = dt.getMilliseconds();

           // millisecond.text = Math.min((milliseconds / 10).toFixed(0), 99).toString().padStart(2, 0);
			millisecond.text = game.config.first
            if (milliseconds >= 980) {

                //game.config.second++;

                //score.text = '得分:' + game.config.second * game.config.score;

                //second.text = game.config.second.toString().padStart(2, 0);

                //second.position.x = dot.position.x - second.width - 2;

                if (game.config.second >= 10) {

                    //game.over();

                    //return;
                }
            }
        }
    };

    game.level = function (score) {

        var level = 0;

        if (score >= 600) {

            level = 1;
        }

        if (score >= 2000) {

            level = 2;
        }

        if (score >= 4000) {

            level = 3;
        }

        if (score >= 8000) {

            level = 4;
        }

        if (score >= 30000) {

            level = 5;
        }

        return level;
    }

    game.over = function () {

        clearInterval(game.config.timer);

        a.visible = false;

        b.visible = false;

        c.visible = true;

        game.popup0.visible = false;

        game.popup.visible = false;

        game.tips.visible = false;

        game.tips.children.forEach(function (sprite, index) {

            sprite.visible = false;

            sprite.alpha = 0;
        });

        game.leas.visible = false;

        game.player.visible = false;

        game.defend.visible = false;

        game.config.play = false;

        game.buff = 0;

        // $.mbAudio.pause('music');

        $('.music').hide().removeClass('play');

        $('.c').show();

        var score = game.config.score * game.config.second;
		//score=179900
        var level = game.level(score);

        game.result({
            score: score,
            second: game.config.second,
            num: game.config.num,
            level: level
        });

        var result = game.sprites['result'];

        if (result) {
            
            result.text = score + '分';
            
            result.position.x = (result.innerWidth - result.width) / 2;
        }

        var goal = game.sprites['goal'];

        if (goal) {

            goal.visible = false;
        }

        var player = game.sprites['player'];

        var defends = game.defends;

        if (player) {

            player.position.x = 0;

            player.position.y = 0;

            player.visible = false;

            player.tip = 0;

            player.alpha = 0;

            player.ball.visible = false;

            player.ball.alpha = 0;

            if (defends.length) {

                defends.forEach(function (defend, index) {

                    defend.visible = false;

                    defend.alpha = 0;

                    defend.show = 0;

                    defend.position.x = 0;

                    defend.position.y = 0;

                    defend.position.vx = 0;

                    defend.position.vy = 0;

                    defend['attack' + defend.type + '0'].visible = false;

                    defend['attack' + defend.type + '1'].visible = false;

                    defend['attack' + defend.type + '2'].visible = false;

                    if (defend.attack) {

                        defend.attack.position.x = 0;

                        defend.attack.position.y = 0;

                        defend.attack.visible = false;

                        defend.attack.alpha = 0;

                        defend.attack = '';
                    }
                });
            }
        }
    };

    game.defendXY = function (defend, player) {

        if (!defend.position.y) {

            defend.position.y = game.random(player.top, defend.innerHeight / 2 - defend.height);

            if (player.top == player.position.y || !defend.show) {

                defend.position.y = game.random(player.top / 4, player.top);
            }

            defend.show++;
        }

        if (!defend.position.x) {

            defend.position.x = game.random(1, 50) + Math.random() * 10;

            defend.move = game.random(0, 2);//0左边1右边

            if (defend.move) {

                defend.position.x = game.random(defend.innerWidth - defend.width * 2, defend.innerWidth - defend.width);
            }
        }
    };

    game.play = function () {

        if (!game.config.play) return;

        var goal = game.sprites['goal'];

        if (goal && goal.visible) {

            goal.alpha -= 0.01;

            if (goal.alpha < 0) {

                goal.visible = false;

                goal.alpha = 1;
            }
        }

        game.total();

        var bars = game.bars;

        if (bars.length) {

            bars.forEach(function (sprite, index) {

                sprite.visible = false;

                if (Math.min(game.config.goal, 4) == index) {

                    sprite.visible = true;
                }
            });
        }

        var defends = game.defends;

        var player = game.sprites['player'];

        if (player) {

            var y = 5;

            game.leas.children.forEach(function (sprite, index) {

                sprite.position.y += y;

                if (sprite.position.y >= sprite.innerHeight) {

                    sprite.position.y = -sprite.height;
                }
            });

            if (!player.position.x) {

                player.position.set((player.innerWidth - player.width) / 2, game.random(player.innerHeight - player.height, player.innerHeight / 2 + player.height));
            }

            player.visible = true;

            player.alpha = 1;

            player.position.y -= 0.5;

            if (player.position.y <= player.top) {

                player.position.y = player.top;
            }

            if (player.buff && game.buff > 0) {

                game.buff -= 0.1;

                player.buff.visible = true;

                player.buff.alpha = 1;

                player.buff.position.set(player.position.x + player.width / 2 - player.buff.width / 2, player.position.y + player.height / 2 - player.buff.height / 2);

            } else {

                player.buff.visible = false;

                player.buff.alpha = 0;

                game.buff = 0;

                game.sprites['dstrong'].visible = false;
            }

            player.ball.move(player);

            game.tips.visible = true;

            var tip = game.tips.children[0];

            if (player.tip < 20) {

                player.tip += 0.2;

                tip.visible = true;

                tip.alpha += 0.1;

                tip.position.x = player.position.x + tip.width / 3;

                tip.position.y = player.position.y - tip.height;

            } else {

                tip.alpha = 0;

                tip.visible = false;
            }

            if (defends.length && game.config.second > 1) {

                defends.forEach(function (defend, index) {

                    if (game.config.second < 45 && index > 1) {

                        defend.visible = false;

                        defend.alpha = 0;

                        defend.show = 0;

                        defend.position.x = 0;

                        defend.position.y = 0;

                        defend.position.vx = 0;

                        defend.position.vy = 0;

                        defend['attack' + defend.type + '0'].visible = false;

                        defend['attack' + defend.type + '1'].visible = false;

                        defend['attack' + defend.type + '2'].visible = false;

                        if (defend.attack) {

                            defend.attack.position.x = 0;

                            defend.attack.position.y = 0;

                            defend.attack.visible = false;

                            defend.attack.alpha = 0;

                            defend.attack = '';
                        }

                        return;
                    }

                    if (game.config.second > 45 && game.config.second < 60 && index > 2) {

                        defend.visible = false;

                        defend.alpha = 0;

                        defend.show = 0;

                        defend.position.x = 0;

                        defend.position.y = 0;

                        defend.position.vx = 0;

                        defend.position.vy = 0;

                        defend['attack' + defend.type + '0'].visible = false;

                        defend['attack' + defend.type + '1'].visible = false;

                        defend['attack' + defend.type + '2'].visible = false;

                        if (defend.attack) {

                            defend.attack.position.x = 0;

                            defend.attack.position.y = 0;

                            defend.attack.visible = false;

                            defend.attack.alpha = 0;

                            defend.attack = '';
                        }

                        return;
                    }

                    game.defendXY(defend, player);

                    var tip = game.tips.children[defend.type];

                    if (!defend.attack && defend.position.y) {

                        defend.visible = true;

                        defend.alpha += 0.03;

                        defend.tip += 0.03;

                        if (defend.tip < 20 && defend.show < 2 && defend.alpha >= 1 && index < 2) {

                            tip.visible = true;

                            tip.alpha += 0.1;

                            tip.position.x = defend.position.x + tip.width / 3;

                            tip.position.y = defend.position.y - tip.height;

                        } else {

                            tip.alpha = 0;

                            tip.visible = false;
                        }

                        if (defend.position.x > player.ball.position.x - defend.width / 2) {

                            defend.position.x -= (1 + player.speed);

                        } else {

                            defend.position.x += (1 + player.speed);
                        }

                        if (defend.position.y > player.ball.position.y - defend.height) {

                            defend.position.y -= (1 + player.speed);

                        } else {

                            defend.position.y += (1 + player.speed);
                        }
                    }

                    if (
                        !defend.attack &&
                        (
                            defend.position.y + defend.height * 2 > player.ball.position.y ||
                            (player.ball.position.x - defend.position.x - defend.width / 2 < 2 && defend.position.y > player.top)
                        ) &&
                        (
                            defend.move && defend.position.x - defend.width < player.ball.position.x ||
                            !defend.move && defend.position.x + defend.width > player.ball.position.x ||
                            player.position.y == player.top
                        )
                    ) {

                        defend.tip = 0;

                        tip.visible = false;

                        defend.position.vx = player.ball.position.x;

                        defend.position.vy = player.ball.position.y;

                        defend.visible = false;

                        defend.alpha = 0;

                        if (defend.position.x < defend.position.vx) {

                            var x = defend.position.vx - (defend.position.x + defend.width / 2);

                            defend.move = 0;

                        } else {

                            var x = defend.position.x - defend.width / 2 - defend.position.vx;

                            defend.move = 1;
                        }

                        defend.center = 0;

                        if (x > 0 && x < 20) {

                            defend.center = 4;

                            defend.move = 2;
                        }

                        defend.attack = defend['attack' + defend.type + defend.move];

                        defend.attack.visible = true;

                        defend.attack.alpha = 1;

                        defend.attack.position.x = defend.position.x;

                        defend.attack.position.y = defend.position.y;
                    }

                    if (defend.attack) {

                        if (defend.position.x > defend.position.vx) {

                            defend.attack.position.x -= 5 - defend.center;
                        }

                        if (defend.position.x < defend.position.vx) {

                            defend.attack.position.x += 5 - defend.center;
                        }

                        defend.attack.position.y += 5 + defend.center;

                        //if (!game.config.debug && bump.hit(defend.attack, player.ball) && !game.buff) {//---------
						//if (game.config.score * game.config.second>=index1) {
						if(0){
                            game.pause();

                            return;
                        }

                        if (
                            defend.attack.position.x >= defend.attack.innerWidth - defend.attack.width * 2 ||
                            defend.attack.position.x < defend.attack.width ||
                            defend.attack.position.y >= defend.attack.innerHeight
                        ) {

                            defend.attack.position.x = 0;

                            defend.attack.position.y = 0;

                            defend.attack.visible = false;

                            defend.position.x = 0;

                            defend.position.y = 0;

                            defend.attack = '';

                            var num = game.sprites['num'];

                            if (num) {

                                game.config.num++;

                                num.text = '您已过了：' + game.config.num + '个传奇球员';
                            }

                            if (goal) {

                                game.config.goal++;

                                if (game.config.goal > 3 && !goal.visible) {

                                    goal.visible = true;
                                }

                                if (game.config.goal > 5) {

                                    game.config.goal = 0;
                                }
                            }
                        }
                    }
                })
            }
        }
    };

    ticker.add(function (float) {


    });

    gsap.ticker.fps(60);

    gsap.ticker.add(function (float) {

        if (!game.config.loading && !game.config.ajax && a.visible) {

            $('.start').show();
        }

        game.play();
    });
	startGame=function startGame() {
    if (game.config.isDisable) {
        return;
    }

    game.config.isDisable = true;

    $.ajax({
        url: location.origin + "/game/play/start/" + game.config.periodId,
        success: function (res) {
            if (res.code == 0) {
                game.config.key = res.data.key;
                game.config.playId = res.data.playId;
                game.start();
            } else {
                //alert(res.message);
				window.location.reload()
            }

            game.config.isDisable = false;
        }
    })
}

//计算最后得分
game.result = function (data) {
    //级别:level
    //过人数:num
    //得分:score
    //秒数:second
    
    let _data = {
        gameType: 1,
        playId: game.config.playId,
        periodId: game.config.periodId,
        grade: blockcurSc(data.score),
        key: game.config.key,
        ...JSON.parse(localStorage.getItem("gameLocation"))
    };

    $.ajax({
        url: location.origin + "/game/play/end",
        type: "POST",
        data: JSON.stringify(_data),
        contentType: "application/json;charset=UTF-8",
        success: function (res) {
            if (res) {
                game.config.prizeUrl = res.prizeUrl;
                game.config.prizeFlg = JSON.parse(res.result).data.getPrizeFlg;
                game.sprites['level'].text = '您已击败全国' + JSON.parse(res.result).data.winRate + '的玩家';
                
                if (game.config.prizeFlg == 1) {
                    $(".share")[0].style.backgroundImage = "url('https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/share1.gif')";
                } else {
                    $(".share")[0].style.backgroundImage = "url('https://gdcdn.venubao.com/guangdong/activity/footballWorldCup/images/share2.gif')";
                }
				
            }
			setTimeout(function(){
			//	window.location.reload()
				},3000)
            game.getRank();
        }
    })

    game.getProp();
};

	setTimeout(function(){
		if (self == top) { 
		 //
		// startGame();
		}else{
			//alert('在iframe中'); 
		}
	
		//$('.ruck').html("<iframe id='fram' src='https://guangdong-tobacco.venubao.com/app?redirectUrl=%2Fguangdong%2Factivity%2FfootballWorldCup%2Findex.html'></iframe>");

	},2000)
	setInterval(function(){
		
		$.getJSON('https://guangdong-tobacco.venubao.com/userwx/getUser', function(res){
				//https://guangdong-tobacco.venubao.com/userwx/getUser
				//https://guangdong-tobacco.venubao.com/game/now/ranking/21
				//alert(data.data.rankingList[4].grade)
			if(res.code==0) {
				game.config.first=res.data.rankingList[0].grade+100
				//salert(game.config.first)
			}
			if(res.success==false){
				window.location.reload()
				//$('.ruck').html("<iframe id='fram' src='https://guangdong-tobacco.venubao.com/app?redirectUrl=%2Fguangdong%2Factivity%2FfootballWorldCup%2Findex.html'></iframe>");
					//	alert(((new Date()).getTime()-game.config.starttime)/60000+" "+score+" "+nowTime)
			}
			})
	},3000)
})
();
