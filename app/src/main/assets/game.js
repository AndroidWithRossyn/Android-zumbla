/**
	GRADLE - KNOWLEDGE IS POWER
    ***** PROPRIETARY CODE *****
    @author : gradle (gradlecode@outlook.com)
	@update: 10/14/2019 10:38:00
	@version_name: gradle-logic
	@version_code: v6.0.1
	copyright @2019
*/

var game, hidden, visibilityChange, src, debugLog = [], isPageVisible = !1, adIsShowing = !1;

function handleVisibilityChange() {
    window.gradle_ad || (document[hidden] ? (isPageVisible = !1, game && game.pauseGame()) : (isPageVisible = !0, game && game.unpauseGame()))
}

window.gradle_onPauseRequested = function() {
	window.gradle_sound = window.game.sound.masterGain.gain.value;
	window.game.sound.masterGain.gain.value = 0;
	window.game.paused = !0;
	window.gradle_ad = !0;
}.bind(this); 

window.gradle_onResumeRequested = function() {
	window.gradle_ad = !1;
	window.game.paused = !1;
	window.game.sound.masterGain.gain.value = 1;//window.gradle_sound;
};

void 0 !== document.hidden ? (hidden = "hidden", visibilityChange = "visibilitychange") : void 0 !== document.msHidden ? (hidden = "msHidden", visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === document[hidden] ? gradle.event("Browser doesn't support the Page Visibility API.") : document.addEventListener(visibilityChange, handleVisibilityChange, !1);

! function(t) {
	var e = function() {
		function t() {
			this.LEVEL_SPEED = [
			80, 80, 80, 70, 80, 80, 70, 80, 80, 70, 
			80, 80, 65, 80, 85, 60, 80, 90, 60, 80, 
			90, 60, 80, 80, 60, 80, 80, 55, 80, 80, 
			65, 80, 90, 60, 80, 80, 60, 80, 80, 60, 
			80, 80, 65, 80, 80, 70, 80, 80, 80, 80, 
			80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 
			80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 
			80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 
			80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 
			80];
			
			
			this.CHAIN_QUICK_FILL_IN_PERCENTAGE_VALUES = [.35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35];
			
			
			this.FREE_BALL_SPEED = 750;
			this.FREE_BALL_INSERTION_SPEED = 450;
			this.FREE_BALL_INSERTION_SPEED_MULTIPLIER = 6.5;
			
			this.PATH_ACCELERATION = 10;
			this.PATH_EXPOTENTIAL_ACCELERATION = 1.06;
			
			this.GAP_COLLAPSING_MAX_SPEED = 700;
			this.GAP_COLLAPSING_ACCELERATION_MULTIPLIER = 1.16;
			this.GAP_COLLAPSING_HIT_SLOWDOWN_FACTOR = .75;
			this.GAP_COLLAPSING_STARTING_SPEED = -30;
			this.BALL_EXPLOSION_DELAY = 0;
			
			this.ZOOMER_COOLDOWN = 400;
			this.ZOOMER_RECOIL = 8;
			this.ZOOMER_RECOIL_DURATION = 100;
			this.ZOOMER_MAX_SAME_COLOR_BALLS_SEQUENCE = 2;
			
			this.CHAIN_START_SPEED = 650;
			this.CHAIN_LOSE_SPEED = 650;
			this.CHAIN_LOSE_ACCELERATION_MULTIPLIER = 1;
			this.CHAIN_QUICK_FILL_IN_BREAKING_ABSOLUTE_DISTANCE = 150;
			
			this.SLOWDOWN_POINT_BALLS_COUNT = 15;
			this.SLOWDOWN_POINT_SPEED_MULTIPLIER = .5;
			this.SLOWDOWN_POWERUP_SPEED_MULTIPLIER = .1;
			
			this.FIREBALL_SPEED_MULTIPLIER = .9;
			this.REWIND_SPEED = -400;
			this.SLOWDOWN_POWERUP_DURATION = 3e3;
			this.REWIND_POWERUP_DURATION = 3e3;
			
			this.LASER_POWERUP_DURATION = 7e3;
			this.LASER_FREE_BALL_SPEED_MULTIPLIER = 1.75;
			
			this.LIGHTING_DELAY_BETWEEN_STRIKES = 25;
			this.LIGHTING_MIN_TARGETS = 3;
			this.LIGHTING_MAX_TARGETS = 6;
			
			this.BOMB_EXPLOSION_RADIUS = 140;
			this.BOMB_EXPLOSION_DELAY = 50;
			
			this.PATH_SPEED_AFTER_DESTROYING_TAIL = .1;
			this.FIREBALL_ANGLE = 18;
			
			this.PATH_ARROW_STEP = 20;
			this.PATH_ARROW_BASE_DELAY = 150;
			this.PATH_ARROW_DURATION = 1100;
			this.PATH_FINISHED_BONUS_DELAY = 65;
			this.PATH_FINISHED_BONUS_SCORE = 10;
			this.PATH_FINISHED_BONUS_STEP = 60;
			
			this.SLOWDOWN_APPEARING_CHANCE = .1;
			this.REWIND_APPEARING_CHANCE = .1;
			this.BOMB_APPEARING_CHANCE = .1;
			this.LIGHTING_APPEARING_CHANCE = .1;
			this.LASER_APPEARING_CHANCE = .1;
			this.FIREBALL_APPEARING_CHANCE = .1;
			this.CHANCE_APPEARING_MULTIPLIER = 1.05;

			this.POWERUP_LIFETIME = 2e4;
			this.POWERUP_COOLDOWN = 5e3;
			this.POWERUP_TIMER = 1e4;
			this.POWERUP_TIMER_DEVIATION = .15;
			this.MAX_ACTIVE_POWERUPS = 4;

			this.ZOOMER_PRIORITY_DISTANCE = 200;
			this.ZOOMER_PRIORITY_BALLS_LIMIT = 5;
			this.ZOOMER_PRIORITY_PROBABILITY = .7;

			this.COIN_CHANCE = .6;
			this.COIN_LIFETIME = 2e4;
			this.COIN_TIMER = 12e3;
			this.COIN_TIMER_DEVIATION = .1;
			this.MAX_ACTIVE_COINS = 3;
			this.INSTANTLY_ADD_ALL_COINS = !1;

			this.BALL_SCORE = 10;
			this.COIN_SCORE = 100;
			this.TIME_BONUS_POINTS_PER_SECOND_PENALTY = 5;
			this.PATH_GENERATOR_USE_SINGLE_COLOR = !1;
		}
		return t.prototype.getBallSpeed = function() {
			return this.LEVEL_SPEED[n.CURRENT_LEVEL] ? this.LEVEL_SPEED[n.CURRENT_LEVEL] : 80
		}, t.prototype.getChainQuickFillInPercentage = function() {
			return this.CHAIN_QUICK_FILL_IN_PERCENTAGE_VALUES[n.CURRENT_LEVEL] ? this.CHAIN_QUICK_FILL_IN_PERCENTAGE_VALUES[n.CURRENT_LEVEL] : .35
		}, t
	}();
	t.GameSettings = e;
	
	//Settings :
	//==========
	var n = function() {
		function t() {}
		t.FONT_FAMILY = "Germania One";
		t.DEFAULT_FONT_FAMILY = "px " + t.FONT_FAMILY;
		t.PRELOADER_ATLAS = "preloader";
		t.GAME_ATLAS = "game";
		t.UI_ATLAS = "ui";
		t.FX_ATLAS = "fx";
		t.CURRENT_LEVEL = 0;
		
		t.TOTAL_LEVELS = 100;
		t.LAST_UNLOCKED_LEVEL = 1;
		t.LEVELS_WHEEL_AMPLIFIER = 9;
		t.LEVELS_WHEEL_EASING_POWER = 5;
		t.LEVELS_WHEEL_MIN_SOUND_INTERVAL = 30;
		
		t.LEVELS_ARROW_ANGLE = .1;
		t.USE_NEW_PATH_GENERATOR = !1, 
		t.DEFAULT_TENSION = .5;
		t.POINTS_PER_SEGMENT = 10;
		t.PATTERN_DRAWING_INTERVAL = 5;
		t.PATH_SHADOW_DELTA = -1.5;
		t.PATH_LIGHT_DELTA = 1.5;
		t.BALL_DIAMETER = 45;
		t.INSERT_BALL_REACTION_DELAY = 50;
		t.GAP_DISAPPEARING_REACTION_DELAY = 75;
		t.ACTIVE_BALL_POSITION = new Phaser.Point(0, -52);
		t.NEXT_BALL_POSITION = new Phaser.Point(0, 25.5);
		t.NEXT_BALL_SCALE = .47;
		t.CANNON_TOUCH_ZONE_DIAMETER = 70;
		
		t.PLATFORM_TOUCH_ZONE_DIAMETER = 110;
		t.PLATFORM_HIGHLIGHT_CHECKING_PERIOD = 15;
		t.PLATFORM_ROTATION_TIME = 8e3;
		t.PLATFORM_ROTATION_SPEED = 1.6;
		
		t.LIGHTING_STRIKE_COLLAPSE_DELAY = 400;
		
		t.EDITOR_PIXELS_PER_CLICK = 1;
		t.EDITOR_BALL_SCALE = .5;
		t.EDITOR_SHOW_BALLS = !0;
		t.STORAGE_NAME = "gradle_v3.8.2";
		t.EDITOR_STORAGE_NAME = "Zumbla_Levels";
		
		t.COMBO_TEXT_SPACING = -2;
		t.SCORE_TEXT_SPACING = -1;
		t.TRANSITION_IN_DURATION = 300;
		t.TRANSITION_OUT_DURATION = 250;
		t.WINDOW_BACKGROUND_ALPHA = .82;
		t.RELEASE_VERSION = !0;
		t.INSTANT_START_FOR_MOBILES = !0;
		t.MUSIC_ENABLED_BY_DEFAULT = !0;
		t.REALTIME_CALCULATIONS = !0;
		t.ENABLE_DEBUG_OUTPUT = !1; //show debug frame info
		t.ENABLE_PRELOADER_OUTPUT = !1; //gradle show files names 
		t.UNLOCK_ALL_LEVELS = !1; //not used, replaced in version with hooks value.
		t.DISPLAY_FPS = !1;
		t.GAME_VERSION = "v3.82";
		t.game = new e;
		return t;
	}();
	t.Settings = n
}(src || (src = {}));

! function(t) {
	var e = function(e) {
		function n(t, n) {
			var i = e.call(this, t, null) || this;
			return i.targetScale = n, i
		}
		return __extends(n, e), n.prototype.setInitialPosition = function() {
			var e = this.width * this.targetScale / 2,
				i = this.height * this.targetScale / 2;
			this.x = this.x > t.CustomScaleManager.ORIGINAL_WIDTH - e ? t.CustomScaleManager.ORIGINAL_WIDTH - e - n.MARGIN : this.x < e ? e + n.MARGIN : this.x, this.y = this.y > t.CustomScaleManager.ORIGINAL_HEIGHT - i ? t.CustomScaleManager.ORIGINAL_HEIGHT - i - n.MARGIN : this.y < i ? i + n.MARGIN : this.y
		}, n.MARGIN = 5, n
	}(Phaser.Group);
	t.AutoAlignableEffect = e
}(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o, r, l, h) {
                void 0 === l && (l = 250), void 0 === h && (h = 900);
                var c = e.call(this, t.App.instance, o) || this;
                return c.effectsManager = n, c.appearingTweenDuration = l, c.disappearingTweenDuration = h, c.spriteName = i, c.position.set(a, s), c.buildContent(), c.setInitialPosition(), c.animateContent(r), c
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                this.mainSprite = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, this.spriteName)), this.mainSprite.anchor.setTo(.5, .5)
            }, n.prototype.animateContent = function(t) {
                this.scale.set(this.targetScale), this.animationA(t)
            }, n.prototype.animationA = function(t) {
                var e = this;
                this.scale.setTo(0), this.appearingTween = this.game.add.tween(this.scale).to({
                    x: this.targetScale,
                    y: this.targetScale
                }, this.appearingTweenDuration, Phaser.Easing.Back.Out, !0, t), this.disappearingTween = this.game.add.tween(this).to({
                    y: this.y - 80,
                    alpha: 0
                }, this.disappearingTweenDuration, Phaser.Easing.Cubic.In, !0, t), this.disappearingTween.onComplete.add(function() {
                    return e.destroy()
                })
            }, n.prototype.animationB = function(t) {
                var e = this;
                this.alpha = .3, this.visible = !1, this.appearingTween = this.game.add.tween(this).to({
                    alpha: .9,
                    y: this.y - 80
                }, this.appearingTweenDuration, Phaser.Easing.Back.Out, !0, t), this.appearingTween.onStart.add(function() {
                    e.visible = !0
                }, this), this.scale.setTo(0), this.game.add.tween(this.scale).to({
                    x: this.targetScale,
                    y: this.targetScale
                }, this.appearingTweenDuration, Phaser.Easing.Back.Out, !0, t), this.disappearingTween = this.game.add.tween(this).to({
                    alpha: 0,
                    y: this.y - 120
                }, this.disappearingTweenDuration, Phaser.Easing.Linear.None).delay(200), this.disappearingTween.onComplete.add(function() {
                    return e.destroy()
                }), this.appearingTween.chain(this.disappearingTween)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.effectsManager = null, this.mainSprite = null, this.appearingTween = null, this.disappearingTween = null
            }, n
        }(t.AutoAlignableEffect);
        t.Inscription = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e, n, i, a) {
                return t.call(this, e, "coinBonus0000", n, i, .75, a, 250, 350) || this
            }
            return __extends(e, t), e.prototype.animateContent = function(t) {
                this.animationB(t)
            }, e
        }(t.Inscription);
        t.CoinBonus = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o, r) {
                var l = e.call(this, t.App.instance, .9 + .08 * s) || this;
                return l.effectsManager = n, l.comboMultiplier = s, l.soundIndex = Phaser.Math.clamp(0 != r ? r : s, 1, 10), l.position.set(i, a), l.buildContent(), l.setInitialPosition(), l.animateContentC(o), l
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                this.comboText = this.add(this.game.make.sprite(0, -5, t.Settings.GAME_ATLAS, "combo0000")), this.comboText.anchor.setTo(.5, 1), this.comboText.scale.setTo(.7), this.multiplierText = this.add(t.BitmapTextFactory.getComboText(this.comboMultiplier)), this.multiplierText.position.set(0, 22), this.multiplierText.angle = -5, this.multiplierText.scale.setTo(1)
            }, n.prototype.animateContentC = function(e) {
                var n = this;
                this.scale.setTo(0), this.appearingTween = this.game.add.tween(this.scale).to({
                    x: this.targetScale,
                    y: this.targetScale
                }, 250, Phaser.Easing.Back.Out, !0, e), this.game.sound.play("combo" + this.soundIndex, Phaser.Math.clamp(.15 + .1 * this.comboMultiplier, .3, .75));
                var i = t.App.instance.add.tween(this.multiplierText).to({
                        angle: 5
                    }, 250, Phaser.Easing.Linear.None, !0, 0, 2),
                    a = t.App.instance.add.tween(this.multiplierText.scale).to({
                        x: 1.07,
                        y: 1.07
                    }, 250, Phaser.Easing.Linear.None, !0, 0, 2);
                i.yoyo(!0, 0), a.yoyo(!0, 0), this.disappearingTween = this.game.add.tween(this).to({
                    y: this.y - 50,
                    alpha: 0
                }, 800, Phaser.Easing.Linear.None, !1, 0), this.disappearingTween.onComplete.add(function() {
                    return n.destroy()
                }), this.appearingTween.chain(this.disappearingTween)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.effectsManager = null, this.comboText = null, this.multiplierText = null, this.appearingTween = null, this.disappearingTween = null
            }, n
        }(t.AutoAlignableEffect);
        t.ComboEffect = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(n, i, a, s, o) {
                var r = this,
                    l = i < 1 ? 1 : i > e.GAP_BONUS_SPRITES ? e.GAP_BONUS_SPRITES : i;
                return (r = t.call(this, n, "gapBonus" + l + "0000", a, s, e.getSpriteScale(l), o) || this).gapMultiplier = i, r.game.time.events.add(o, function() {
                    return r.game.sound.play("gap_bonus", .5)
                }), r
            }
            return __extends(e, t), e.getSpriteScale = function(t) {
                var e = 1;
                switch (t) {
                    case 1:
                        e = .75;
                        break;
                    case 2:
                        e = .7;
                        break;
                    case 3:
                        e = .85;
                        break;
                    case 4:
                        e = 1
                }
                return e
            }, e.GAP_BONUS_SPRITES = 4, e
        }(t.Inscription);
        t.GapBonus = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o, r, l) {
                var h = e.call(this, t.App.instance, l) || this;
                return h.effectsManager = n, h.color = i, h.scores = o, h.position.set(a, s), h.buildContent(), h.setInitialPosition(), h.animateContentA(r), h
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                this.scoresText = this.add(t.BitmapTextFactory.getScoreText(this.scores, this.color)), this.scoresText.position.set(0, 0);
                var e = .9 * this.width / 2,
                    n = .9 * this.height / 2;
                this.x = this.x > t.CustomScaleManager.ORIGINAL_WIDTH - e ? t.CustomScaleManager.ORIGINAL_WIDTH - e - 5 : this.x < e ? e + 5 : this.x, this.y = this.y > t.CustomScaleManager.ORIGINAL_HEIGHT - n + 30 ? t.CustomScaleManager.ORIGINAL_HEIGHT - n + 30 : this.y < n ? n + 5 : this.y
            }, n.prototype.animateContentA = function(e) {
                var n = this;
                this.scale.set(.01), this.game.add.tween(this.scale).to({
                    x: this.targetScale,
                    y: this.targetScale
                }, 300, Phaser.Easing.Back.Out, !0, e), this.appearingTween = this.game.add.tween(this).to({
                    y: this.y - 40
                }, 300, Phaser.Easing.Back.Out, !0, e), this.appearingTween.onStart.add(function() {
                    return t.ScoreManager.instance.addScores(n.scores)
                }), this.disappearingTween = this.game.add.tween(this).to({
                    alpha: 0,
                    y: this.y - 100
                }, 750, Phaser.Easing.Cubic.In, !1), this.disappearingTween.onComplete.add(function() {
                    return n.destroy()
                }), this.appearingTween.chain(this.disappearingTween)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.effectsManager = null, this.scoresText = null, this.appearingTween = null, this.disappearingTween = null
            }, n
        }(t.AutoAlignableEffect);
        t.ScoresEffect = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var n = e.call(this, t.App.instance, null) || this;
                return n.buildSprites(), n
            }
            return __extends(n, e), n.prototype.buildSprites = function() {
                this.laserRays = [];
                for (var e = 0; e < n.TOTAL_PARTS; e++) {
                    var i = this.add(this.game.make.sprite(0, -e * n.LASER_PART_LENGTH, t.Settings.GAME_ATLAS, "laserRay0000"));
                    i.anchor.set(.5, 1), i.animations.add("rayAnimation", Phaser.Animation.generateFrameNames("laserRay", 0, 13, "", 4).reverse()).play(60, !0), this.laserRays.push(i)
                }
            }, n.prototype.setLength = function(t) {
                var e = t > 0 ? Math.floor(t / n.LASER_PART_LENGTH) : n.TOTAL_PARTS;
                e = e < 1 ? 1 : e;
                for (var i = 0; i < this.laserRays.length; i++) this.laserRays[i].visible = i < e;
                this.scale.set(1, t > 0 ? t / (e * n.LASER_PART_LENGTH) : 1)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.laserRays = null
            }, n.TOTAL_PARTS = 12, n.LASER_PART_LENGTH = 75, n
        }(Phaser.Group);
        t.LaserEffect = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(i, a) {
                var s = e.call(this, t.App.instance, a.x, a.y, t.Settings.GAME_ATLAS, "lighting0000") || this;
                return s.anchor.set(.5, 0), s.initialBallPosition = i.position.clone(), s.targetBallPosition = a.position.clone(), s.targetBall = a, s.update(), s.blinkAnimation = s.animations.add("blinkAnimation", Phaser.Animation.generateFrameNames("lighting", 0, n.LIGHTING_FRAMES - 1, "", 4)), s.endAnimation = s.animations.add("endAnimation", Phaser.Animation.generateFrameNames("lightingEnd", 0, n.DISAPPEARING_FRAMES - 1, "", 4)), s
            }
            return __extends(n, e), n.prototype.setDelay = function(t) {
                var e = this;
                return this.visible = !1, this.game.time.events.add(t, function() {
                    e.targetBall && e.targetBall.isAlive && !e.targetBall.isUnderground ? e.startAnimations() : e.destroy()
                }), this
            }, n.prototype.startAnimations = function() {
                var e = this;
                this.game.sound.play("lighting", .5), this.visible = !0, this.blinkAnimation.play(n.FPS, !1, !1), this.blinkAnimation.onComplete.add(function() {
                    e.endAnimation.play(n.FPS, !1, !1), e.endAnimation.onComplete.add(function() {
                        e.destroy()
                    }), e.scale.set(1, 1), e.targetBall && e.targetBall.isAlive && !e.targetBall.isUnderground && (t.ScoreManager.instance.displayScores(t.ScoreManager.instance.calculateScores(1), !0, e.targetBall.color, e.targetBall.x, e.targetBall.y), e.targetBall.explodeBall())
                })
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.targetBall.isAlive ? (this.targetBallPosition.copyFrom(this.targetBall.position), this.scale.set(1, Phaser.Math.distance(this.targetBallPosition.x, this.targetBallPosition.y, this.initialBallPosition.x, this.initialBallPosition.y) / 130)) : Phaser.Math.distance(this.targetBallPosition.x, this.targetBallPosition.y, this.initialBallPosition.x, this.initialBallPosition.y) < 120 && this.scale.set(1, Phaser.Math.distance(this.targetBallPosition.x, this.targetBallPosition.y, this.initialBallPosition.x, this.initialBallPosition.y) / 130), this.position.copyFrom(this.targetBallPosition), this.rotation = Phaser.Math.angleBetween(this.targetBallPosition.x, this.targetBallPosition.y, this.initialBallPosition.x, this.initialBallPosition.y) - Math.PI / 2
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.blinkAnimation = null, this.endAnimation = null
            }, n.LIGHTING_FRAMES = 15, n.DISAPPEARING_FRAMES = 13, n.TOTAL_FRAMES = n.LIGHTING_FRAMES + n.DISAPPEARING_FRAMES, n.FPS = 180, n
        }(Phaser.Sprite);
        t.Lighting = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s) {
                var o = e.call(this, t.App.instance, n, i, t.Settings.GAME_ATLAS, "pathArrow0000") || this;
                return o.anchor.set(.5), o.rotation = a, o.animations.add("arrowAnimation", Phaser.Animation.generateFrameNames("pathArrow", 0, 20, "", 4)), o.game.time.events.add(s, function() {
                    o.animations.play("arrowAnimation", 60, !1, !0)
                }), o
            }
            return __extends(n, e), n
        }(Phaser.Sprite);
        t.PathArrow = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n) {
                var i = e.call(this, t.App.instance, null) || this;
                return i.slowdownPowerup = n, i.buildSprites(), i
            }
            return __extends(n, e), n.prototype.buildSprites = function() {
                this.topLeft = this.add(new t.FrozenScreenQuarter(20.5, 96, 0, 0, 1, 1)), this.topRight = this.add(new t.FrozenScreenQuarter(t.CustomScaleManager.ORIGINAL_WIDTH - 20, 96, 0, 0, -1, 1)), this.downLeft = this.add(new t.FrozenScreenQuarter(20.5, t.CustomScaleManager.ORIGINAL_HEIGHT - 19, 0, 0, 1, -1)), this.downRight = this.add(new t.FrozenScreenQuarter(t.CustomScaleManager.ORIGINAL_WIDTH - 20, t.CustomScaleManager.ORIGINAL_HEIGHT - 19, 0, 0, -1, -1))
            }, n.prototype.freeze = function() {
                this.topLeft.freeze(), this.topRight.freeze(), this.downLeft.freeze(), this.downRight.freeze(), this.game.sound.play("freezing", .7), this.game.tweens.removeFrom(this.slowdownPowerup), this.game.add.tween(this.slowdownPowerup).to({
                    slowdownMultiplier: t.Settings.game.SLOWDOWN_POWERUP_SPEED_MULTIPLIER
                }, 1e3 * t.FrozenScreenQuarter.FREEZE_ANIMATION_FRAMES_COUNT / t.FrozenScreenQuarter.FREEZE_ANIMATION_FRAMES_FRAMERATE, Phaser.Easing.Linear.None, !0)
            }, n.prototype.onFrozen = function() {
                this.slowdownPowerup.onFrozen()
            }, n.prototype.onMelted = function() {
                this.slowdownPowerup.onMelted()
            }, n.prototype.melt = function() {
                this.topLeft.melt(), this.topRight.melt(), this.downLeft.melt(), this.downRight.melt(), this.game.sound.play("unfreezing", .7), this.game.tweens.removeFrom(this.slowdownPowerup), this.game.add.tween(this.slowdownPowerup).to({
                    slowdownMultiplier: 1
                }, 1e3 * t.FrozenScreenQuarter.FREEZE_ANIMATION_FRAMES_COUNT / t.FrozenScreenQuarter.FREEZE_ANIMATION_FRAMES_FRAMERATE, Phaser.Easing.Linear.None, !0)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.slowdownPowerup = null, this.topLeft = null, this.downLeft = null, this.topRight = null, this.downRight = null
            }, n
        }(Phaser.Group);
        t.FreezeEffect = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(i, a, s, o, r, l) {
                var h = e.call(this, t.App.instance, i, a, t.Settings.GAME_ATLAS, "frozenGlass0000") || this;
                return h.anchor.set(s, o), h.scale.set(2 * r, 2 * l), h.appearingAnimation = h.animations.add("appearingAnimation", Phaser.Animation.generateFrameNames("frozenGlass", 0, n.FREEZE_ANIMATION_FRAMES_COUNT, "", 4)), h.appearingAnimation.onComplete.add(function() {
                    h.parent && h.parent instanceof t.FreezeEffect && h.parent.onFrozen()
                }), h.disappearingAnimation = h.animations.add("disappearingAnimation", Phaser.Animation.generateFrameNames("frozenGlass", 0, n.FREEZE_ANIMATION_FRAMES_COUNT, "", 4).reverse()), h.disappearingAnimation.onComplete.add(function() {
                    h.parent && h.parent instanceof t.FreezeEffect && h.parent.onMelted()
                }), h
            }
            return __extends(n, e), n.prototype.freeze = function() {
                this.appearingAnimation.play(n.FREEZE_ANIMATION_FRAMES_FRAMERATE, !1, !1)
            }, n.prototype.melt = function() {
                this.disappearingAnimation.play(n.FREEZE_ANIMATION_FRAMES_FRAMERATE, !1, !1)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.appearingAnimation = null, this.disappearingAnimation = null
            }, n.FREEZE_ANIMATION_FRAMES_COUNT = 29, n.FREEZE_ANIMATION_FRAMES_FRAMERATE = 30, n
        }(Phaser.Sprite);
        t.FrozenScreenQuarter = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, t.App.instance, null) || this;
                return a.position.set(n, i), a.buildLeafs(), a
            }
            return __extends(n, e), n.prototype.buildLeafs = function() {
                this.leafLeftA = this.constructLeaf(-28, -140, -12, 1, 1), this.leafLeftB = this.constructLeaf(-28, -142, -59, 1, 1), this.leafLeftC = this.constructLeaf(-28, -145, -117, 1, 1), this.leafRightA = this.constructLeaf(28, -140, 12, 1, -1), this.leafRightB = this.constructLeaf(28, -142, 59, 1, -1), this.leafRightC = this.constructLeaf(28, -145, 117, 1, -1)
            }, n.prototype.startTweens = function() {
                this.tweenFeatherJumping(this.leafLeftA, -42, -12), this.tweenFeatherJumping(this.leafLeftB, -99, -59), this.tweenFeatherJumping(this.leafLeftC, -157, -107), this.tweenFeatherJumping(this.leafRightA, 42, 12), this.tweenFeatherJumping(this.leafRightB, 99, 59), this.tweenFeatherJumping(this.leafRightC, 157, 107)
            }, n.prototype.constructLeaf = function(e, n, i, a, s) {
                var o = this.add(this.game.make.sprite(e, n, t.Settings.UI_ATLAS, "feather0000"));
                return o.anchor.set(.5, 1), o.angle = i, o.scale.set(a), o.scale.x *= s, o
            }, n.prototype.tweenFeatherJumping = function(t, e, n) {
                this.game.tweens.removeFrom(t), t.angle = e;
                var i = this.game.add.tween(t).to({
                        angle: n + (n - e) / 1.6
                    }, 400, Phaser.Easing.Sinusoidal.InOut, !0, 200),
                    a = this.game.add.tween(t).to({
                        angle: n
                    }, 200, Phaser.Easing.Linear.None, !1, 0);
                i.chain(a)
            }, n
        }(Phaser.Group);
        t.FeathersAnimation = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, t.App.instance, null) || this;
                return a.position.set(n, i), a.buildLeafs(), a
            }
            return __extends(n, e), n.prototype.buildLeafs = function() {
                this.leafLeftA = this.constructLeaf(-35, 25, -24, 1, 1), this.leafLeftC = this.constructLeaf(-73, 4, -87, .64, 1), this.leafLeftB = this.constructLeaf(-60, 15, -48, .82, 1), this.leafRightA = this.constructLeaf(35, 25, 24, 1, -1), this.leafRightC = this.constructLeaf(73, 4, 87, .64, -1), this.leafRightB = this.constructLeaf(60, 15, 48, .82, -1)
            }, n.prototype.startTweens = function() {
                this.tweenLeafJumping(this.leafLeftA, -44, -24, 4), this.tweenLeafJumping(this.leafLeftB, -62, -48, -4), this.tweenLeafJumping(this.leafLeftC, -97, -87, 6), this.tweenLeafJumping(this.leafRightA, 44, 24, -4), this.tweenLeafJumping(this.leafRightB, 62, 48, 4), this.tweenLeafJumping(this.leafRightC, 97, 87, 6)
            }, n.prototype.constructLeaf = function(e, n, i, a, s) {
                var o = this.add(this.game.make.sprite(e, n, t.Settings.UI_ATLAS, "palmLeaf0000"));
                return o.anchor.set(.5, 1), o.angle = i, o.scale.set(a), o.scale.x *= s, o
            }, n.prototype.tweenLeafJumping = function(t, e, n, i) {
                var a = this;
                this.game.tweens.removeFrom(t), t.angle = e;
                var s = this.game.add.tween(t).to({
                        angle: n + (n - e) / 2
                    }, 350, Phaser.Easing.Sinusoidal.InOut, !0, 150),
                    o = this.game.add.tween(t).to({
                        angle: n
                    }, 250, Phaser.Easing.Linear.None, !1, 0);
                s.chain(o), o.onComplete.add(function(t) {
                    return a.tweenLeafShaking(t, n, i)
                }, this, 0, t)
            }, n.prototype.tweenLeafShaking = function(t, e, n) {
                this.game.tweens.removeFrom(t);
                var i = this.game.add.tween(t).to({
                        angle: e + n
                    }, 1200, Phaser.Easing.Linear.None, !0, 400 * Math.random()),
                    a = this.game.add.tween(t).to({
                        angle: e
                    }, 1200, Phaser.Easing.Linear.None, !1, 0);
                i.chain(a), a.chain(i)
            }, n
        }(Phaser.Group);
        t.LeafsAnimation = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, t.App.instance, null) || this;
                a.levelNumber = 0, a.isLocked = !1, a.levelNumber = n, a.digit = a.add(t.BitmapTextFactory.getLevelText(n > t.Settings.TOTAL_LEVELS ? n - t.Settings.TOTAL_LEVELS : n, t.BallColor.GREEN)), a.digit.scale.set(1.1), a.lock = a.add(a.game.make.group(null)), a.lock.add(a.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "lockIcon0000")).anchor.set(.5);
                var s = a.lock.add(t.BitmapTextFactory.getLevelText(n, t.BallColor.RED));
                return s.scale.set(.8), s.position.set(-2, 22), a.setLocked(i), a
            }
            return __extends(n, e), n.prototype.setLocked = function(t) {
                this.isLocked = t, this.isLocked ? (this.digit.visible = !1, this.lock.visible = !0) : (this.digit.visible = !0, this.lock.visible = !1)
            }, n
        }(Phaser.Group);
        t.LevelIndicator = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var n = e.call(this, t.App.instance, null) || this;
                return n.buildBoard(), n.buildTexts(), n.buildSounds(), n
            }
            return __extends(n, e), n.prototype.show = function(e, n) {
                gradle.event('SCREEN_LEVELRESULT'), this.callback = e, this.buttons = n;
                for (var i = 0; this.buttons && i < this.buttons.length; i++) this.buttons[i].visible = !1;
                this.countingSound.volume = .8, this.addListeners();
                var a = this.updateData();
                this.updateTexts(a), this.game.state.getCurrentState() instanceof t.Level && (this.game.state.getCurrentState().uiManager.scoresValue.text = "" + t.StatsManager.instance.calculateReward())
            }, n.prototype.hide = function() {
                this.countingSound.isPlaying && this.countingSound.stop(), this.countingSound.volume = 0, this.removeListeners()
            }, n.prototype.buildTexts = function() {
                var t, e, n, i, a, s, o, r;
                t = this.assignTripleText(0, "iconBalls0000", "x99", "99999"), this.balls = t[0], this.ballsCount = t[1], this.ballsValue = t[2], e = this.assignTripleText(1, "iconCombos0000", "x99", "99999"), this.combos = e[0], this.combosCount = e[1], this.combosValue = e[2], n = this.assignTripleText(2, "iconGaps0000", "x99", "99999"), this.gaps = n[0], this.gapsCount = n[1], this.gapsValue = n[2], i = this.assignTripleText(3, "iconTime0000", "x99", "99999"), this.time = i[0], this.timeCount = i[1], this.timeValue = i[2], a = this.assignTripleText(4, "iconBonus0000", "-", "99999"), this.bonus = a[0], this.bonusCount = a[1], this.bonusValue = a[2], s = this.assignDoubleText(6, "iconBestScore0000", "", "#87FF12"), this.levelScores = s[0], this.levelScoresValue = s[1], o = this.assignDoubleText(7, "iconScore0000", "", "#FFDB33"), this.levelBest = o[0], this.levelBestValue = o[1], r = this.assignDoubleText(8, "iconTotalScore0000", "", "#F37CE4"), this.totalScores = r[0], this.totalScoresValue = r[1]
            }, n.prototype.buildSounds = function() {
                this.countingSound = this.game.add.sound("scores_counting", .8, !0)
            }, n.prototype.buildBoard = function() {
                this.boardSprite = this.add(this.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "resultsBoard0000")), this.boardSprite.anchor.set(.5), this.boardSprite.inputEnabled = !0, this.levelPlate = this.add(this.game.make.sprite(1, -151, t.Settings.UI_ATLAS, "levelPlate0000")), this.levelPlate.anchor.set(.5), this.levelIconLeft = this.add(this.game.make.sprite(3 - (t.Settings.CURRENT_LEVEL > 9 ? 20 : 15), -151, t.Settings.GAME_ATLAS, "levelIcon0000")), this.levelIconLeft.anchor.set(1, .5), this.levelIconRight = this.add(this.game.make.sprite(3 + (t.Settings.CURRENT_LEVEL > 9 ? 20 : 15), -151, t.Settings.GAME_ATLAS, "levelIcon0000")), this.levelIconRight.scale.set(-1, 1), this.levelIconRight.anchor.set(1, .5), this.levelText = this.add(t.TextUtils.getShadowText("" + t.Settings.CURRENT_LEVEL, 3, -149, 22, "#FFFFFF", "#2E2E2E", 0, 3, .5))
            }, n.prototype.addListeners = function() {
                this.boardSprite.events.onInputDown.add(function() {
                    this.skipCountingAnimations()
                }, this)
            }, n.prototype.removeListeners = function() {
                this.boardSprite.events.onInputDown.removeAll()
            }, n.prototype.updateData = function() {
                if (this.dataHolder = {
                        balls: 0,
                        combos: 0,
                        gaps: 0,
                        time: 0,
                        bonus: 0,
                        levelScore: t.StatsManager.instance.calculateReward(),
                        levelBest: t.ScoreManager.instance.getLevelScores(t.Settings.CURRENT_LEVEL),
                        totalScore: t.ScoreManager.instance.getTotalScores()
                    }, t.PlayerStatisticsCollector.instance.time[t.Settings.CURRENT_LEVEL] > 0 ? t.PlayerStatisticsCollector.instance.time[t.Settings.CURRENT_LEVEL] = Math.min(t.PlayerStatisticsCollector.instance.time[t.Settings.CURRENT_LEVEL], t.StatsManager.instance.time) : t.PlayerStatisticsCollector.instance.time[t.Settings.CURRENT_LEVEL] = t.StatsManager.instance.time, t.PlayerStatisticsCollector.instance.balls[t.Settings.CURRENT_LEVEL] = t.StatsManager.instance.balls, t.PlayerStatisticsCollector.instance.gaps[t.Settings.CURRENT_LEVEL] = t.StatsManager.instance.gaps, t.PlayerStatisticsCollector.instance.combos[t.Settings.CURRENT_LEVEL] = t.StatsManager.instance.combos, t.PlayerStatisticsCollector.instance.coins[t.Settings.CURRENT_LEVEL] = t.StatsManager.instance.coins, this.game.state.getCurrentState() instanceof t.Level) {
                    for (var e = "[", n = 0, i = this.game.state.getCurrentState().pathManager.paths; n < i.length; n++) {
                        e += i[n].pathFinalizer.bonusPoints + " "
                    }
                    t.PlayerStatisticsCollector.instance.distanceToIdol[t.Settings.CURRENT_LEVEL] = e + "]"
                }
                this.levelText.setText("" + t.Settings.CURRENT_LEVEL), t.Settings.LAST_UNLOCKED_LEVEL = Math.max(t.Settings.LAST_UNLOCKED_LEVEL, t.Settings.CURRENT_LEVEL < t.Settings.TOTAL_LEVELS ? t.Settings.CURRENT_LEVEL + 1 : t.Settings.TOTAL_LEVELS);
                var a = t.ScoreManager.instance.updateLevelScores(t.Settings.CURRENT_LEVEL, t.StatsManager.instance.calculateReward());
                return t.LocalStorageController.instance.save(), a
            }, n.prototype.updateTexts = function(e) {
                var n = this;
                if (this.game.state.getCurrentState() instanceof t.Level) {
                    this.levelIconLeft.x = 3 - (t.Settings.CURRENT_LEVEL > 9 ? 16 : 10), this.levelIconRight.x = 3 + (t.Settings.CURRENT_LEVEL > 9 ? 16 : 10), this.fadeIn(this.balls, 150, 700), this.fadeIn(this.combos, 150, 800), this.fadeIn(this.gaps, 150, 900), this.fadeIn(this.time, 150, 1e3), this.fadeIn(this.bonus, 150, 1100), this.fadeIn(this.levelScores, 150, 1200), this.fadeIn(this.levelBest, 150, 1300), this.fadeIn(this.totalScores, 150, 1400), this.fadeIn(this.ballsCount, 150, 700, "x" + t.StatsManager.instance.balls), this.fadeIn(this.combosCount, 150, 800, t.StatsManager.instance.combos > 0 ? "x" + t.StatsManager.instance.combos : "-"), this.fadeIn(this.gapsCount, 150, 900, t.StatsManager.instance.gaps > 0 ? "x" + t.StatsManager.instance.gaps : "-"), this.fadeIn(this.timeCount, 150, 1e3, t.TextUtils.convertMSToHumanTime(t.StatsManager.instance.time)), this.fadeIn(this.bonusCount, 150, 1100, t.StatsManager.instance.bonus > 0 ? "x" + t.StatsManager.instance.bonus : "-");
                    var i = 1500,
                        a = i;
                    i = this.animateText(this.ballsValue, this.dataHolder, "balls", 0, t.StatsManager.instance.ballsScore, i), i = this.animateText(this.combosValue, this.dataHolder, "combos", 0, t.StatsManager.instance.combosScore, i), i = this.animateText(this.gapsValue, this.dataHolder, "gaps", 0, t.StatsManager.instance.gapsScore, i), i = this.animateText(this.timeValue, this.dataHolder, "time", 0, t.StatsManager.instance.timeScore, i);
                    var s = i = this.animateText(this.bonusValue, this.dataHolder, "bonus", 0, t.StatsManager.instance.bonusScore, i);
                    s > a && (this.soundStartEvent = this.game.time.events.add(a, function() {
                        return n.countingSound.play()
                    }), this.soundEndEvent = this.game.time.events.add(s, function() {
                        return n.countingSound.stop()
                    })), this.fadeIn(this.levelScoresValue, 250, i + 300, "" + t.StatsManager.instance.calculateReward()), this.fadeIn(this.levelBestValue, 250, i + 600, "" + t.ScoreManager.instance.getLevelScores(t.Settings.CURRENT_LEVEL)), this.fadeIn(this.totalScoresValue, 250, i + 900, "" + t.ScoreManager.instance.getTotalScores(), function() {
                        this.updateTextsAction()
                    }.bind(this)), e && this.callback && (this.callbackEvent = this.game.time.events.add(i + 300, function() {
                        return n.invokeAndResetCallback()
                    }))
                }
            }, n.prototype.skipCountingAnimations = function() {
                var e = this;
                [this.balls, this.ballsCount, this.ballsValue, this.combos, this.combosCount, this.combosValue, this.gaps, this.gapsCount, this.gapsValue, this.time, this.timeCount, this.timeValue, this.bonus, this.bonusCount, this.bonusValue, this.levelScores, this.levelScoresValue, this.levelBest, this.levelBestValue, this.totalScores, this.totalScoresValue].forEach(function(t) {
                    e.game.tweens.removeFrom(t), t.alpha = 1
                }), this.game.tweens.removeFrom(this.dataHolder), this.countingSound.stop(), this.game.time.events.remove(this.soundStartEvent), this.game.time.events.remove(this.soundEndEvent), this.game.time.events.remove(this.callbackEvent), this.dataHolder.balls = t.StatsManager.instance.ballsScore, this.dataHolder.combos = t.StatsManager.instance.combosScore, this.dataHolder.gaps = t.StatsManager.instance.gapsScore, this.dataHolder.time = t.StatsManager.instance.timeScore, this.dataHolder.bonus = t.StatsManager.instance.bonusScore, this.ballsValue.setText("" + ~~this.dataHolder.balls), this.combosValue.setText("" + ~~this.dataHolder.combos), this.gapsValue.setText("" + ~~this.dataHolder.gaps), this.timeValue.setText("" + ~~this.dataHolder.time), this.bonusValue.setText("" + ~~this.dataHolder.bonus), this.updateTextsAction(), this.invokeAndResetCallback()
            }, n.prototype.updateTextsAction = function() {
                setTimeout(function() {
                    Promise.all([gradle.event("EVENT_LEVELSUCCESS", {
                        levelName: "" + t.Settings.CURRENT_LEVEL
                    }), gradle.event("EVENT_LEVELSCORE", {
                        levelName: "" + t.Settings.CURRENT_LEVEL,
                        levelScore: t.StatsManager.instance.calculateReward()
                    }), gradle.event("EVENT_TOTALSCORE", {
                        totalScore: t.ScoreManager.instance.getTotalScores()
                    })]).then(function() {
                        for (var t = 0; this.buttons && t < this.buttons.length; t++) this.buttons[t].visible = !0
                    }.bind(this), function() {
                        for (var t = 0; this.buttons && t < this.buttons.length; t++) this.buttons[t].visible = !0
                    }.bind(this))
                }.bind(this), 500);
            }, n.prototype.invokeAndResetCallback = function() {
                this.removeListeners(), this.callback && this.callback(), this.callback = null
            }, n.prototype.animateText = function(t, e, n, i, a, s) {
                var o = this;
                t.setText("" + i), t.alpha = 0, this.game.add.tween(t).to({
                    alpha: 1
                }, 150, Phaser.Easing.Linear.None, !0, s);
                var r = 200 + Math.pow(a - i, .92);
                e[n] = i;
                var l = {};
                l[n] = a;
                var h = this.game.add.tween(e).to(l, r, Phaser.Easing.Linear.None, !0, s);
                return h.onUpdateCallback(function() {
                    t.text = "" + ~~e[n]
                }), a > i && h.onStart.add(function() {
                    return o.countingSound.play()
                }), h.onComplete.add(function() {
                    t.text = "" + ~~e[n], o.countingSound.stop()
                }), s + r + (r > 200 ? 150 : 0)
            }, n.prototype.fadeIn = function(t, e, n, i, a) {
                void 0 === i && (i = null), i && t instanceof Phaser.Text && t.setText(i), t.alpha = 0, this.game.add.tween(t).to({
                    alpha: 1
                }, e, Phaser.Easing.Linear.None, !0, n).onComplete.add(function() {
                    a && "function" == typeof a && a()
                }, this)
            }, n.prototype.assignDoubleText = function(e, n, i, a) {
                this.add(this.game.make.sprite(-106, 28 * e - 110, t.Settings.UI_ATLAS, n)).anchor.set(0, .5);
                var s = this.add(t.TextUtils.getShadowText(i, 115, 28 * e - 110, 24, a, "#000000", 1, 2, 1));
                return [name, s]
            }, n.prototype.assignTripleText = function(e, n, i, a) {
                var s = this.add(this.game.make.sprite(-106, 28 * e - 110, t.Settings.UI_ATLAS, n));
                return s.anchor.set(0, .5), [s, this.add(t.TextUtils.getShadowText(i, 8, 28 * e - 110, 24, "#4BC9F3", "#000000", 1, 2, .5)), this.add(t.TextUtils.getShadowText(a, 115, 28 * e - 110, 24, "#8EE3FF", "#000000", 1, 2, 1))]
            }, n
        }(Phaser.Group);
        t.ResultsBoard = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var n = e.call(this, t.App.instance, 0, 0, t.Settings.GAME_ATLAS, "transitionScreen0000") || this;
                return n.isActive = !1, n.game.stage.addChild(n), n.inputEnabled = !0, n.visible = !1, n.tweenIn = n.game.add.tween(n).to({
                    alpha: 1
                }, t.Settings.TRANSITION_IN_DURATION, Phaser.Easing.Linear.None, !1), n.tweenOut = n.game.add.tween(n).to({
                    alpha: 0
                }, t.Settings.TRANSITION_OUT_DURATION, Phaser.Easing.Linear.None, !1), n.tweenOut.onComplete.add(n.hide, n), n.resize(), n
            }
            return __extends(n, e), n.prototype.resize = function() {
                this.scale.set(t.CustomScaleManager.WIDTH / 12.5, t.CustomScaleManager.HEIGHT / 12.5), this.position.set(-t.CustomScaleManager.WIDTH / 4, -t.CustomScaleManager.HEIGHT / 4)
            }, n.prototype.start = function(t) {
                this.game.stage.addChild(this), this.isActive = !0, this.visible = !0, this.alpha = 0, this.tweenIn.onComplete.removeAll(), this.tweenIn.onComplete.add(function() {
                    return t ? t() : null
                }), this.tweenIn.start()
            }, n.prototype.finish = function() {
                this.tweenOut.start()
            }, n.prototype.hide = function() {
                this.parent && this.parent.removeChild(this), this.tweenIn.onComplete.removeAll(), this.isActive = !1, this.visible = !1
            }, n
        }(Phaser.Sprite);
        t.TransitionScreen = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            return function(e, n, i, a, s, o, r) {
                this.tension = t.Settings.DEFAULT_TENSION, this.resolution = t.Settings.POINTS_PER_SEGMENT, this.paths = [], this.tunnels = [], this.platforms = [], this.balls = [], this.coinPlaces = [], this.paths = e || [], this.tunnels = n || [], this.tension = i, this.resolution = a, this.platforms = s || [], this.balls = o || [], this.coinPlaces = r || []
            }
        }();
        t.LevelObject = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.savedZambacto = null, this.buildZambacto();
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.buildZambacto = function() {
                this.savedZambacto = {levels: gradle_levels, settings: {
        LEVEL_SPEED: [80, 80, 80, 65, 85, 85, 65, 85, 85, 65, 85, 85, 65, 90, 90, 60, 90, 95, 65, 90, 95, 65, 90, 95, 65, 90, 95, 65, 90, 95, 60, 95, 100, 65, 95, 100, 65, 95, 100, 65, 100, 105, 70, 90, 105, 70, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
        CHAIN_QUICK_FILL_IN_PERCENTAGE_VALUES: [.35, .4, .4, .4, .5, .45, .4, .5, .5, .4, .5, .5, .4, .5, .5, .4, .5, .5, .4, .5, .5, .4, .5, .5, .4, .5, .5, .4, .5, .5, .4, .55, .55, .45, .55, .55, .45, .55, .55, .45, .55, .55, .45, .55, .55, .45, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35, .35], FREE_BALL_SPEED:750,FREE_BALL_INSERTION_SPEED:450,FREE_BALL_INSERTION_SPEED_MULTIPLIER:6.5,PATH_ACCELERATION:10,PATH_EXPOTENTIAL_ACCELERATION:1.06,GAP_COLLAPSING_MAX_SPEED:700,GAP_COLLAPSING_ACCELERATION_MULTIPLIER:1.16,GAP_COLLAPSING_HIT_SLOWDOWN_FACTOR:.75,GAP_COLLAPSING_STARTING_SPEED:-30,BALL_EXPLOSION_DELAY:0,ZOOMER_COOLDOWN:400,ZOOMER_RECOIL:8,ZOOMER_RECOIL_DURATION:100,ZOOMER_MAX_SAME_COLOR_BALLS_SEQUENCE:2,CHAIN_START_SPEED:650,CHAIN_LOSE_SPEED:650,CHAIN_LOSE_ACCELERATION_MULTIPLIER:1,CHAIN_QUICK_FILL_IN_BREAKING_ABSOLUTE_DISTANCE:150,SLOWDOWN_POINT_BALLS_COUNT:15,SLOWDOWN_POINT_SPEED_MULTIPLIER:.5,SLOWDOWN_POWERUP_SPEED_MULTIPLIER:.1,FIREBALL_SPEED_MULTIPLIER:.9,REWIND_SPEED:-400,SLOWDOWN_POWERUP_DURATION:4e3,REWIND_POWERUP_DURATION:3e3,LASER_POWERUP_DURATION:12e3,LASER_FREE_BALL_SPEED_MULTIPLIER:1.75,LIGHTING_DELAY_BETWEEN_STRIKES:25,LIGHTING_MIN_TARGETS:3,LIGHTING_MAX_TARGETS:6,BOMB_EXPLOSION_RADIUS:185,BOMB_EXPLOSION_DELAY:50,PATH_SPEED_AFTER_DESTROYING_TAIL:.1,FIREBALL_ANGLE:18,PATH_ARROW_STEP:20,PATH_ARROW_BASE_DELAY:150,PATH_ARROW_DURATION:1100,PATH_FINISHED_BONUS_DELAY:65,PATH_FINISHED_BONUS_SCORE:10,PATH_FINISHED_BONUS_STEP:60,SLOWDOWN_APPEARING_CHANCE:.1,REWIND_APPEARING_CHANCE:.06,BOMB_APPEARING_CHANCE:.1,LIGHTING_APPEARING_CHANCE:.06,LASER_APPEARING_CHANCE:.12,FIREBALL_APPEARING_CHANCE:.08,CHANCE_APPEARING_MULTIPLIER:1.05,POWERUP_LIFETIME:2e4,POWERUP_COOLDOWN:1e4,POWERUP_TIMER:15e3,POWERUP_TIMER_DEVIATION:.15,MAX_ACTIVE_POWERUPS:4,ZOOMER_PRIORITY_DISTANCE:200,ZOOMER_PRIORITY_BALLS_LIMIT:5,ZOOMER_PRIORITY_PROBABILITY:.7,COIN_CHANCE:.7,COIN_LIFETIME:2e4,COIN_TIMER:25e3,COIN_TIMER_DEVIATION:.1,MAX_ACTIVE_COINS:1,INSTANTLY_ADD_ALL_COINS:!1,BALL_SCORE:10,COIN_SCORE:400,TIME_BONUS_POINTS_PER_SECOND_PENALTY:5,PATH_GENERATOR_USE_SINGLE_COLOR:!1,CHAIN_QUICK_FILL_IN_PERCENTAGE:.35,BALL_REVERSE_SPEED_MULTIPLIER:6,GAP_COLLAPSING_ACCELERATION_FACTOR:.5,CHAIN_QUICK_FILL_IN_BREAKING_DISTANCE:.1,LIGHTING_COLLAPSE_GAPS_SPEED_MULTIPLIER:1,LIGHTING_STRIKE_COLLAPSE_DELAY:1e3,COMBO_SCORE:100,GAP_SCORE:1e3,PATH_ARROW_SPEED:1600,CHAIN_START_SPEED_MULTIPLIER:7,CHAIN_SLOWDOWN_FACTOR:.955,CHAIN_SPEEDUP_FACTOR:1.055,REWIND_SPEED_MULTIPLIER:5,CHAIN_LOSE_SPEED_MULTIPLIER:8,BALL_SPEED:75,SLOWDOWN_APPEARING_CHANCES:[.18,.18,.2,.22,.24,.18,.2,.22,.24,.26],REWIND_APPEARING_CHANCES:[.18,.18,.2,.22,.24,.18,.2,.22,.24,.26],BOMB_APPEARING_CHANCES:[.2,.2,.22,.24,.26,.2,.22,.24,.26,.28],LIGHTING_APPEARING_CHANCES:[.16,.16,.18,.2,.22,.16,.18,.2,.22,.24],LASER_APPEARING_CHANCES:[.22,.22,.24,.26,.28,.22,.24,.26,.28,.3],FIREBALL_APPEARING_CHANCES:[.14,.14,.16,.18,.2,.14,.16,.18,.2,.22],LIGHTING_POWERUP_DURATION:3e3}};
				//this.savedZambacto = eval(this.savedZambacto);
				this.levels = this.savedZambacto.levels;
            }, e.prototype.getLevel = function(e) {
				//gradle.log(e, this.levels[e]);
                return e < 1 || e > t.Settings.TOTAL_LEVELS ? null : this.levels[e]
            }, e
        }();
        t.LevelStorage = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e) {
                var n = t.call(this, e.game) || this;
                return n.level = e, n.createGraphics(), n
            }
            return __extends(e, t), e.prototype.createGraphics = function() {
                this.background = this.add(this.game.make.image(14, 75, "background1")), this.background.anchor.setTo(0)
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this), this.level = null, this.background = null
            }, e
        }(Phaser.Group);
        t.BackgroundManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n) {
                var i = e.call(this, t.App.instance) || this;
                return i.path = n, i.level = i.path.pathManager.level, i.ballFactory = new t.BallFactory(i), i.contactResolver = new t.BallContactResolver(i), i.ballRenderer = i.add(new t.BallRenderer(i)), i
            }
            return __extends(n, e), n.prototype.initQueue = function(t) {
                this.balls = [], this.ballFactory.createQueue(t)
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.removeDeadBalls(), this.contactResolver.update(), this.removeDeadBalls(), this.ballFactory.update(), this.updateContacts(), this.ballRenderer.render()
            }, n.prototype.getFirstBall = function() {
                if (this.balls && this.balls.length > 0)
                    for (var t = 0; t < this.balls.length; t++)
                        if (this.balls[t] && this.balls[t].isAlive) return this.balls[t];
                return null
            }, n.prototype.getLastBall = function() {
                if (this.balls && this.balls.length > 0)
                    for (var t = this.balls.length - 1; t > -1; t--)
                        if (this.balls[t] && this.balls[t].isAlive) return this.balls[t];
                return null
            }, n.prototype.getLastMovingBall = function() {
                for (var t = this.getFirstBall(); t && t.isAlive && t.getNext() && t.getNext().isAlive && t.isTouching(t.getNext(), !1);) t = t.getNext();
                return t
            }, n.prototype.getAliveBallsCount = function() {
                return this.balls.reduce(function(t, e) {
                    return e.isAlive ? t + 1 : t
                }, 0)
            }, n.prototype.hasAliveBalls = function() {
                return this.getAliveBallsCount() > 0
            }, n.prototype.getFutureBallsCount = function() {
                return this.ballFactory.ballsQueue.length
            }, n.prototype.insertBall = function(e, n, i, a, s, o) {
                var r = n.pathPoint;
                if (r != e.getStartPoint())
                    if (r != e.getEndPoint()) {
                        var l = n.segmentProgress / r.pathLength,
                            h = l <= .5 ? e.getConcretePosition(r.chainIndex) : e.getConcretePosition(r.chainIndex + l - (1 - l)),
                            c = l <= .5 ? e.getConcretePosition(r.chainIndex + 2 * l) : e.getConcretePosition(r.chainIndex + 1);
                        h && c && (Phaser.Math.distance(a, s, h.x, h.y) < Phaser.Math.distance(a, s, c.x, c.y) && !this.level.powerupManager.hasActivePowerup(t.PowerupType.REWIND) ? this.ballFactory.insertBallBefore(e, n, i, a, s, o) : this.ballFactory.insertBallAfter(e, n, i, a, s, o))
                    } else this.ballFactory.insertBallBefore(e, n, i, a, s, o);
                else this.ballFactory.insertBallAfter(e, n, i, a, s, o)
            }, n.prototype.getGapBonusesCount = function(t) {
                for (var e = 0, n = new Phaser.Line(t.freeBallStartPosition.x, t.freeBallStartPosition.y, t.position.x, t.position.y), i = new Phaser.Line(0, 0, 1, 1), a = [], s = 0; s < this.path.pathPoints.length - 1; s++) {
                    i.setTo(this.path.pathPoints[s].x, this.path.pathPoints[s].y, this.path.pathPoints[s + 1].x, this.path.pathPoints[s + 1].y);
                    var o = n.intersects(i, !0);
                    if (o) {
                        var r = this.path.pathPoints[s].chainIndex + Phaser.Math.distance(this.path.pathPoints[s].x, this.path.pathPoints[s].y, o.x, o.y) / (0 == this.path.pathPoints[s].pathLength ? 1 : this.path.pathPoints[s].pathLength);
                        a.push(r)
                    }
                }
                for (var l = a.length - 1; l > 0; l--) this.hasBallsBetween(a[l - 1], a[l]) || a.splice(l - 1, 1);
                if (1 == a.length) e += this.hasBallsBetween(0, a[0]) && this.hasBallsBetween(a[0], this.path.getTotalLength()) ? 1 : 0;
                else
                    for (var h = 0; h < a.length; h++) 0 == h ? e += this.hasBallsBetween(0, a[h]) && this.hasBallsBetween(a[h], a[h + 1]) ? 1 : 0 : h == a.length - 1 ? e += this.hasBallsBetween(a[h - 1], a[h]) && this.hasBallsBetween(a[h], this.path.getTotalLength()) ? 1 : 0 : e += this.hasBallsBetween(a[h - 1], a[h]) && this.hasBallsBetween(a[h], a[h + 1]) ? 1 : 0;
                return e
            }, n.prototype.getOncomingBalls = function() {
                for (var t = [], e = 0; e < this.balls.length; e++) this.balls[e].isAlive && !this.balls[e].onTheWay && t.push(this.balls[e]);
                return t
            }, n.prototype.propagateImpulse = function(e, n) {
                for (var i = e; i && i.getPrev() && (i.isTouching(i.getPrev(), !1) || Phaser.Math.distance(i.x, i.y, e.x, e.y) <= t.Settings.game.BOMB_EXPLOSION_RADIUS);) i.backwardSpeed = -n, i = i.getPrev();
                for (var a = e; a && a.getNext() && (a.isTouching(a.getNext(), !1) || Phaser.Math.distance(a.x, a.y, e.x, e.y) <= t.Settings.game.BOMB_EXPLOSION_RADIUS);) a.backwardSpeed = n, a = a.getNext()
            }, n.prototype.getSequences = function() {
                for (var e = [], n = new t.BallSequence(this), i = this.getFirstBall(); i;) {
                    n.push(i);
                    var a = i.getNext();
                    a && !a.onTheWay && a.getNext() && a.getNext().getAbsolutePosition() - i.getAbsolutePosition() <= 2 * t.Settings.BALL_DIAMETER ? (n.push(a), n.push(a.getNext()), i = a.getNext()) : (a && i.isTouching(a, !1) || (e.push(n), n = new t.BallSequence(this)), i = a)
                }
                return e
            }, n.prototype.dispatchAddingBallToTheChain = function(t) {
                if (t && t.isAlive) {
                    var e = this.getSameColoredNeighborsChain(t);
                    e.length >= 3 ? this.destroySubchain(e) : t.gapBonus = 0
                }
            }, n.prototype.dispatchGapDestroyingBetween = function(e, n) {
                var i = this;
                e && n && e.isAlive && n.isAlive && e.onTheWay && n.onTheWay && e.color == n.color && this.game.time.events.add(t.Settings.GAP_DISAPPEARING_REACTION_DELAY, function(t) {
                    i.dispatchAddingBallToTheChain(t)
                }, this, e)
            }, n.prototype.dispatchBallExploding = function(e) {
                t.StatsManager.instance.addBalls(1), 1 == this.getAliveBallsCount() && 0 == this.ballFactory.ballsQueue.length && (this.path.isCleared = !0, this.path.pathFinalizer.setStartposition(e.getRelativePosition()), this.path.pathCleared())
            }, n.prototype.removeDeadBalls = function() {
                for (var t = this.balls.length - 1; t > -1; t--) this.balls[t].isAlive || this.balls.splice(t, 1)
            }, n.prototype.getSameColoredNeighborsChain = function(t) {
                for (var e = [t], n = t.getPrev(); n && n.color == t.color && n.onTheWay && n.getNext() && n.isTouching(n.getNext(), !1);) e.unshift(n), n = n.getPrev();
                for (var i = t.getNext(); i && i.color == t.color && i.onTheWay && i.getPrev() && i.isTouching(i.getPrev(), !1);) e.push(i), i = i.getNext();
                return e
            }, n.prototype.destroySubchain = function(e) {
                var n = e[0].getPrev(),
                    i = e[e.length - 1].getNext(); - 1 != e.indexOf(this.getFirstBall()) && this.path.speedManager.setChainSpeed(t.Settings.game.PATH_SPEED_AFTER_DESTROYING_TAIL, !0);
                for (var a = 0, s = t.ScoreManager.instance.calculateScores(e.length), o = 1, r = Phaser.ArrayUtils.getRandomItem(e).comboSoundIndex, l = 0, h = 0; h < e.length - 1; h++) e[h].comboMultiplier > o && e[h].comboMultiplier == e[h + 1].comboMultiplier && (o = e[h].comboMultiplier, r = e[h].comboSoundIndex, a += e[h].previousScore), e[h].gapBonus > l && (l = e[h].gapBonus);
                var c = l > 0 ? l * e.length * t.Settings.game.BALL_SCORE : 0;
                t.StatsManager.instance.addGapBonusScore(c);
                var u = a + t.ScoreManager.instance.calculateScores(e.length) * (o - 1);
                t.StatsManager.instance.addComboBonusScore(u);
                var p = e.length % 2 == 1 ? e[Math.floor(e.length / 2)].x : Phaser.Math.average(e[Math.floor(e.length / 2)].x, e[Math.floor(e.length / 2) - 1].x),
                    g = e.length % 2 == 1 ? e[Math.floor(e.length / 2)].y : Phaser.Math.average(e[Math.floor(e.length / 2)].y, e[Math.floor(e.length / 2) - 1].y);
                if (t.ScoreManager.instance.displayScores(s + u + c, !0, e[0].color, p, g), l > 0) {
                    var d = e.length % 2 == 1 ? e[Math.floor(e.length / 2)].x : Phaser.Math.average(e[Math.floor(e.length / 2)].x, e[Math.floor(e.length / 2) - 1].x),
                        m = e.length % 2 == 1 ? e[Math.floor(e.length / 2)].y : Phaser.Math.average(e[Math.floor(e.length / 2)].y, e[Math.floor(e.length / 2) - 1].y);
                    this.level.effectsManager.addGapBonus(d, m + 70, l, 350)
                }
                if (o >= 2) {
                    var f = e.length % 2 == 1 ? e[Math.floor(e.length / 2)].x : Phaser.Math.average(e[Math.floor(e.length / 2)].x, e[Math.floor(e.length / 2) - 1].x),
                        S = e.length % 2 == 1 ? e[Math.floor(e.length / 2)].y : Phaser.Math.average(e[Math.floor(e.length / 2)].y, e[Math.floor(e.length / 2) - 1].y);
                    this.level.effectsManager.addComboEffect(f, S, o, 10, r)
                }
                for (var A = 0, E = e; A < E.length; A++) {
                    var _ = E[A];
                    t.Settings.game.BALL_EXPLOSION_DELAY > 10 ? this.game.time.events.add(t.Settings.game.BALL_EXPLOSION_DELAY * e.indexOf(_), function(t) {
                        return t.explodeBall()
                    }, 0, _) : _.explodeBall()
                }
                n && n.isAlive && i && i.isAlive && n.color == i.color && n.comboMultiplier == i.comboMultiplier && (n.previousScore = s + a, n.comboMultiplier = o + 1, i.comboMultiplier = o + 1, n.comboSoundIndex = r + 1, i.comboSoundIndex = r + 1);
                for (var L = i; L;) L.backwardSpeed = 0, L = L.getNext()
            }, n.prototype.updateContacts = function() {
                for (var t = this.balls.length - 1; t > -1; t--) this.balls[t].updateContacts()
            }, n.prototype.hasBallsBetween = function(t, e) {
                if (t <= e) {
                    for (var n = 0; n < this.balls.length; n++)
                        if (this.balls[n].getRelativePosition() >= t && this.balls[n].getRelativePosition() <= e) return !0
                } else
                    for (n = this.balls.length - 1; n > -1; n--)
                        if (this.balls[n].getRelativePosition() >= e && this.balls[n].getRelativePosition() <= t) return !0;
                return !1
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.ballsContainer = null, this.level = null, this.path = null, this.ballFactory.destroy(), this.ballFactory = null, this.contactResolver.destroy(), this.contactResolver = null, this.balls = null
            }, n
        }(Phaser.Group);
        t.BallManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.level = t, n.pathManager = n.level.pathManager, n
            }
            return __extends(n, e), n.prototype.buildAll = function() {
                this.platforms = [], this.destroyAllBalls(), this.destroyAllPlatforms(), this.addPlatforms(t.LevelManager.instance.cachedLevel.platforms), this.platforms.length > 1 && this.game.time.events.loop(Phaser.Timer.SECOND * t.Settings.PLATFORM_HIGHLIGHT_CHECKING_PERIOD, this.updateHighlightings, this)
            }, n.prototype.handleTap = function() {
                if (this.cannon.isReady) {
                    for (var t = this.level.getInputPosition(), e = 0, n = this.platforms; e < n.length; e++) {
                        var i = n[e];
                        if (i.handleTap(t)) return void this.cannon.jumpToPlatform(i)
                    }
                    this.cannon.isPointerOver(t) ? this.cannon.swapBalls() : this.cannon.shoot()
                }
            }, n.prototype.handleSwap = function() {
                this.cannon && this.cannon.isReady && this.cannon.swapBalls()
            }, n.prototype.addPlatforms = function(e) {
                for (var n = 0, i = e; n < i.length; n++) {
                    var a = i[n],
                        s = this.level.daemonManager.add(new t.Platform(this, a[0], a[1]));
                    this.platforms.push(s), this.cannon || (this.cannon = this.add(new t.Cannon(this, s)))
                }
            }, n.prototype.removePlatform = function(t) {
                this.platforms.splice(this.platforms.indexOf(t), 1), this.platforms.length > 0 ? this.cannon && this.cannon.jumpToPlatform(this.platforms[0]) : (this.cannon.destroy(), this.cannon = null), t.destroy()
            }, n.prototype.getFirstColor = function() {
                var e = Phaser.ArrayUtils.getRandomItem(this.level.pathManager.paths);
                if (e) {
                    if (e.ballManager.balls.length > 0) return Phaser.ArrayUtils.getRandomItem(e.ballManager.balls).color;
                    if (e.ballManager.ballFactory.ballsQueue.length > 0) return e.ballManager.ballFactory.ballsQueue[e.ballManager.ballFactory.ballsQueue.length - 1].color
                }
                return t.BallFactory.getRandomColor()
            }, n.prototype.getNextColor = function(e) {
                var n = this.level.pathManager.getCriticalColors();
                if (n && n.length > 0) return Phaser.ArrayUtils.getRandomItem(n);
                var i = this.level.pathManager.getOnScreenColorsArray(e);
                if (i.length > 0) return Phaser.ArrayUtils.getRandomItem(i);
                var a = this.level.pathManager.getFutureColorsArray(e);
                if (a.length > 0) return Phaser.ArrayUtils.getRandomItem(a);
                if (e) {
                    var s = this.level.pathManager.getOnScreenColorsArray(null).concat(this.level.pathManager.getFutureColorsArray(null));
                    if (s.length > 0) return Phaser.ArrayUtils.getRandomItem(s)
                }
                return t.BallFactory.getRandomColor()
            }, n.prototype.update = function() {
                this.level.gameStateManager.isPaused || (e.prototype.update.call(this), this.removeDeadBalls(), this.resolveContacts(), !this.game.device.desktop && this.cannon.isPointerOver(this.level.getInputPosition()) || this.cannon.rotateToPointer(this.level.getInputPosition()))
            }, n.prototype.updateHighlightings = function() {
                for (var t = null, e = Number.MAX_VALUE, n = function(n) {
                        for (var a = 0, s = 0, o = 0, r = i.level.pathManager.paths; o < r.length; o++) {
                            var l = r[o];
                            a += l.ballManager.balls.reduce(function(t, e) {
                                return t + Phaser.Math.distance(e.x, e.y, n.x, n.y)
                            }, 0), s += l.ballManager.balls.length
                        }
                        if (0 == s) return {
                            value: void 0
                        };
                        (a /= s) < e && (e = a, t = n)
                    }, i = this, a = 0, s = this.platforms; a < s.length; a++) {
                    var o = n(s[a]);
                    if ("object" == typeof o) return o.value
                }
                t && t != this.cannon.platform && t.highlight()
            }, n.prototype.removeDeadBalls = function() {
                if (this.balls)
                    for (var t = this.balls.length - 1; t > -1; t--) this.balls[t].isAlive || this.balls.splice(t, 1)
            }, n.prototype.destroyAllBalls = function() {
                if (this.balls)
                    for (var t = 0, e = this.balls; t < e.length; t++) {
                        e[t].destroy()
                    }
                this.balls = []
            }, n.prototype.destroyAllPlatforms = function() {
                if (this.platforms)
                    for (var t = this.platforms.length - 1; t > -1; t--) this.removePlatform(this.platforms[t]);
                this.platforms = []
            }, n.prototype.resolveContacts = function() {
                if (this.balls)
                    for (var t = this.balls.length - 1; t > -1; t--) this.findCoinContact(this.balls[t]), this.balls[t].isAlive && this.findChainContact(this.balls[t])
            }, n.prototype.findCoinContact = function(t) {
                for (var e = 0, n = this.level.coinManager.coins; e < n.length; e++) {
                    var i = n[e];
                    i && i.isAlive && i.isTouching(t) && (i.pickupCoin(), t.killBall())
                }
            }, n.prototype.findChainContact = function(e) {
                for (var n, i = null, a = Number.MAX_VALUE, s = Phaser.Math.distance(e.x, e.y, e.previousPosition.x, e.previousPosition.y), o = 0, r = this.pathManager.paths; o < r.length; o++)
                    for (var l = 0, h = r[o].ballManager.balls; l < h.length; l++) {
                        var c = h[l];
                        if (c.isAlive && !c.isUnderground && Phaser.Math.distance((e.x + e.previousPosition.x) / 2, (e.y + e.previousPosition.y) / 2, c.x, c.y) <= s / 2 + t.Settings.BALL_DIAMETER)
                            if (t.AdvancedMath.CollisionDetector.distanceToSegment(c.position, e.previousPosition, e.position) <= t.Settings.BALL_DIAMETER) {
                                var u = t.AdvancedMath.CollisionDetector.getCollisionPoint(c.x, c.y, e.previousPosition.x, e.previousPosition.y, e.x, e.y),
                                    p = Phaser.Math.distance(u.x, u.y, e.previousPosition.x, e.previousPosition.y);
                                p < a && (e instanceof t.FireBall && c.getRelativePosition() < 1 || (i = c, a = p, n = u))
                            }
                    }
                i && (e.position.copyFrom(n), this.handleBallContact(e, i))
            }, n.prototype.handleBallContact = function(e, n) {
                return e instanceof t.FireBall ? (t.ScoreManager.instance.displayScores(t.ScoreManager.instance.calculateScores(1), !0, n.color, n.x, n.y, Phaser.Math.random(5, 150), !0, !0), n.explodeBall(), !0) : (n.ballManager.insertBall(n.path, n, e.color, e.x, e.y, e.startPosition.clone()), e.killBall(), !1)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.pathManager = null
            }, n
        }(Phaser.Group);
        t.CannonManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n) {
                var i = e.call(this, n.game) || this;
                return i.countdown = t.Settings.game.COIN_TIMER, i.level = n, i.coins = [], i.coinPlaces = [], i
            }
            return __extends(n, e), n.prototype.buildCoins = function() {
                t.LevelManager.instance.cachedLevel.coinPlaces || (t.LevelManager.instance.cachedLevel.coinPlaces = []);
                for (var e = 0, n = t.LevelManager.instance.cachedLevel.coinPlaces; e < n.length; e++) {
                    var i = n[e],
                        a = new t.CoinPlace(i[0], i[1]);
                    this.coinPlaces.push(a)
                }
                if (t.Settings.game.INSTANTLY_ADD_ALL_COINS)
                    for (var s = 0, o = this.coinPlaces; s < o.length; s++) {
                        a = o[s];
                        var r = this.add(new t.Coin(this, a));
                        this.coins.push(r)
                    }
            }, n.prototype.hideAllCoins = function() {
                this.coins.forEach(function(t) {
                    return t.destroy()
                })
            }, n.prototype.update = function() {
                this.level.gameStateManager.isPaused || (e.prototype.update.call(this), 0 != this.coinPlaces.length && (this.removeDeadCoins(), this.countdown -= this.game.time.elapsedMS, this.countdown < 0 && (this.addRandomCoin(), this.countdown = t.Settings.game.COIN_TIMER * (1 + this.game.rnd.realInRange(-t.Settings.game.COIN_TIMER_DEVIATION, t.Settings.game.COIN_TIMER_DEVIATION)))))
            }, n.prototype.addRandomCoin = function() {
                var e = this.getCoinsCount();
                if (!(e >= t.Settings.game.MAX_ACTIVE_COINS || e > this.level.pathManager.getBallsCount() / 3 || Math.random() > t.Settings.game.COIN_CHANCE || 0 == this.getFreeCoinPlacesCount())) {
                    var n = this.getRandomEmptyCoinPlace(),
                        i = this.add(new t.Coin(this, n));
                    this.coins.push(i)
                }
            }, n.prototype.removeDeadCoins = function() {
                if (this.coins)
                    for (var t = this.coins.length - 1; t > -1; t--) this.coins[t].isAlive || this.coins.splice(t, 1)
            }, n.prototype.getCoinsCount = function() {
                return this.coins.length
            }, n.prototype.getFreeCoinPlacesCount = function() {
                return this.coinPlaces.reduce(function(t, e) {
                    return e.coin ? t : t + 1
                }, 0)
            }, n.prototype.getRandomEmptyCoinPlace = function() {
                return Phaser.ArrayUtils.getRandomItem(this.coinPlaces.filter(function(t) {
                    return null == t.coin
                }))
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.coins = null, this.coinPlaces = null
            }, n
        }(Phaser.Group);
        t.CoinManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.level = t, n
            }
            return __extends(n, e), n.prototype.buildDaaemons = function() {
                this.daemons = [];
                for (var e = 0, n = this.level.pathManager.paths; e < n.length; e++) {
                    var i = n[e],
                        a = i.pathPoints[i.pathPoints.length - 2],
                        s = i.pathPoints[i.pathPoints.length - 3],
                        o = Phaser.Math.angleBetween(s.x, s.y, a.x, a.y) + Math.PI / 2,
                        r = this.add(new t.Daemon(this, i, a.x, a.y, o));
                    this.daemons.push(r), i.daemon = r
                }
            }, n.prototype.update = function() {
                this.level.gameStateManager.isPaused || e.prototype.update.call(this)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.daemons = null
            }, n
        }(Phaser.Group);
        t.DaemonManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game, null) || this;
                return n.level = t, n.layerA = n.add(n.game.make.group(null)), n.layerB = n.add(n.game.make.group(null)), n.layerC = n.add(n.game.make.group(null)), n
            }
            return __extends(n, e), n.prototype.update = function() {
                this.level.gameStateManager.isPaused || e.prototype.update.call(this)
            }, n.prototype.addBallExplosion = function(e, n, i, a) {
                if (n in t.BallColor) {
                    var s = e.add(this.game.make.sprite(i, a, t.Settings.GAME_ATLAS));
                    return s.anchor.set(.5), s.animations.add("ballExplosion" + n, Phaser.Animation.generateFrameNames("ballExplosion" + n, 0, 13, "", 4), 30, !1), s.animations.play("ballExplosion" + n, 60, !1, !0), s
                }
                gradle.event("EffectsManager::addBallExplosion - wrong color " + n)
            }, n.prototype.addCoinExplosion = function(t, e) {
                this.addCoinsEffect(t, e), this.level.effectsManager.addCoinBonus(t, e - 10, 0)
            }, n.prototype.addBombExplosion = function(e, n) {
                var i = this.layerA.add(this.game.make.sprite(e, n, t.Settings.GAME_ATLAS));
                i.anchor.set(.5), i.animations.add("bombExplosion", Phaser.Animation.generateFrameNames("bombExplosion", 0, 17, "", 4)), i.animations.play("bombExplosion", 90, !1, !0)
            }, n.prototype.addComboEffect = function(e, n, i, a, s) {
                void 0 === s && (s = 0);
                for (var o = this.layerC.children.length - 1; o > -1; o--) this.layerC.getChildAt(o) instanceof t.ComboEffect && this.layerC.removeChildAt(o);
                t.StatsManager.instance.addCombos(1), this.layerC.add(new t.ComboEffect(this, Phaser.Math.random(e - 50, e + 50), Phaser.Math.random(n + 30, n + 110), i, a, s)), this.level.powerupManager.dispatchComboAppearing(i)
            }, n.prototype.addScoresEffect = function(e, n, i, a, s, o, r) {
                var l = this;
                this.layerB.add(new t.ScoresEffect(this, a, e, n, i, s, o)), r && this.game.time.events.add(s, function() {
                    return l.game.sound.play("pop", 1)
                })
            }, n.prototype.addCoinBonus = function(e, n, i) {
                this.layerC.add(new t.CoinBonus(this, e, n, i)), this.game.sound.play("coin_bonus", .8)
            }, n.prototype.addCoinsEffect = function(e, n) {
                var i = this.layerC.add(this.game.make.emitter(e, n - 35, 30));
                i.makeParticles(t.Settings.GAME_ATLAS, Phaser.Animation.generateFrameNames("coin", 0, 12, "", 4)), i.gravity.setTo(0, 2e3), i.width = 120, i.setXSpeed(-50, 50), i.setYSpeed(-400, -200), i.autoAlpha = !0, i.setAlpha(1, 0, 500, Phaser.Easing.Sinusoidal.In), i.setScale(.35, .2, .35, .2, 500), i.start(!0, 400, null, t.App.instance.rnd.integerInRange(10, 15)), this.game.time.events.add(500, function(t) {
                    t.destroy(!0)
                }, this, i)
            }, n.prototype.addGapBonus = function(e, n, i, a) {
                t.StatsManager.instance.addGaps(i), this.layerC.add(new t.GapBonus(this, i, e, n, a)), this.level.powerupManager.dispatchGapBonusAppearing(i)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null
            }, n
        }(Phaser.Group);
        t.EffectsManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.level = t, n.createGraphics(), n
            }
            return __extends(n, e), n.prototype.update = function() {
                e.prototype.update.call(this), t.Settings.ENABLE_DEBUG_OUTPUT && this.game.debug.text("" + this.game.time.fps || "--", 20, 14, "#70f0ff")
            }, n.prototype.createGraphics = function() {
                this.frameImage = this.add(this.game.make.image(-43, -73, "frame")), this.frameImage.anchor.setTo(0)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.frameImage = null
            }, n
        }(Phaser.Group);
        t.ForegroundManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n._isPaused = !1, n.isStarted = !1, n.isFinished = !1, n.isLost = !1, n.hasLosingPaths = !1, n.level = t, n.isPaused = !1, n
            }
            return __extends(n, e), n.prototype.startInitialization = function() {
                this.level.pathManager.start()
            }, n.prototype.startBalls = function() {
                this.isStarted || (this.level.pathManager.paths.forEach(function(t) {
                    return t.start()
                }), this.level.cannonManager.cannon.start(), this.isStarted = !0)
            }, n.prototype.finishLevel = function() {
                this.isFinished || (this.isFinished = !0, this._isPaused = !0, t.ScoreManager.instance.currentScore = t.StatsManager.instance.calculateReward(), this.level.uiManager.scoresValue.text = "" + t.StatsManager.instance.calculateReward(), this.level.pathManager && this.level.pathManager.pauseAll(), t.WindowManager.instance.showResults())
            }, n.prototype.loseLevel = function() {
                this.isLost || (this.isLost = !0, this._isPaused = !0, this.level.pathManager && this.level.pathManager.pauseAll(), this.level.cannonManager.cannon.destroyBalls(), this.level.coinManager.hideAllCoins(), t.WindowManager.instance.showDefeat())
            }, n.prototype.pauseLevel = function() {
                this.isPaused = !0, t.WindowManager.instance.showPause()
            }, n.prototype.resumeLevel = function() {
                this.isPaused = !1
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.updateGameState()
            }, n.prototype.updateGameState = function() {
                this.isPaused || this.isFinished || this.isLost || (this.hasLosingPaths = this.level.pathManager.paths.reduce(function(t, e) {
                    return t || e.hasEatenBalls
                }, !1), this.level.pathManager.paths.reduce(function(t, e) {
                    return t && e.isLost
                }, !0) && !this.isLost && this.loseLevel(), this.level.pathManager.paths.reduce(function(t, e) {
                    return t && e.isFinished
                }, !0) && !this.isFinished && this.finishLevel())
            }, Object.defineProperty(n.prototype, "isPaused", {
                get: function() {
                    return this._isPaused
                },
                set: function(t) {
                    t ? (this._isPaused = !0, this.game.time.events.pause(), this.game.tweens.pauseAll(), this.level.pathManager && this.level.pathManager.pauseAll()) : (this._isPaused = !1, this.game.time.events.resume(), this.game.tweens.resumeAll(), this.level.pathManager && this.level.pathManager.resumeAll())
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null
            }, n
        }(Phaser.Group);
        t.GameStateManager = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.cachedLevel = new t.LevelObject([], [], t.Settings.DEFAULT_TENSION, t.Settings.POINTS_PER_SEGMENT, [], [], [])
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.loadLevel = function(e) {
                t.Settings.CURRENT_LEVEL = e, this.cachedLevel = t.LevelStorage.instance.getLevel(e)
            }, e
        }();
        t.LevelManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.level = t, n
            }
            return __extends(n, e), n.prototype.buildPaths = function() {
                this.paths = [];
                for (var e = 0; e < t.LevelManager.instance.cachedLevel.paths.length; e++) {
                    var n = this.add(new t.Path(this));
                    this.paths.push(n);

					n.construct(
						t.LevelManager.instance.cachedLevel.paths[e], 
						t.LevelManager.instance.cachedLevel.tension, 
						t.LevelManager.instance.cachedLevel.resolution, 
						t.LevelManager.instance.cachedLevel.balls[e]
					);
                }
            }, n.prototype.update = function() {
                this.level.gameStateManager.isPaused || e.prototype.update.call(this)
            }, n.prototype.start = function() {
                0 != this.paths.length && this.paths[0].pathInitializer.start()
            }, n.prototype.pathCleared = function(t) {
                0 == this.paths.reduce(function(t, e) {
                    return e.isCleared ? t : t + 1
                }, 0) && t.pathFinalizer.start()
            }, n.prototype.pauseAll = function() {
                for (var t = 0, e = this.paths; t < e.length; t++) {
                    e[t].speedManager.pause()
                }
            }, n.prototype.resumeAll = function() {
                for (var t = 0, e = this.paths; t < e.length; t++) {
                    e[t].speedManager.resume()
                }
            }, n.prototype.dispatchPathLose = function(t) {
                this.paths.forEach(function(t) {
                    return t.ballEaten()
                })
            }, n.prototype.initializeNext = function(t) {
                var e = this.paths.indexOf(t); - 1 != e && (e != this.paths.length - 1 ? this.paths[e + 1].pathInitializer.start() : this.initializationCompleted())
            }, n.prototype.finalizeNext = function(t) {
                for (var e = 0, n = this.paths; e < n.length; e++) {
                    var i = n[e];
                    i == t || i.isFinished || i.pathFinalizer.start()
                }
            }, n.prototype.getOnScreenColorsArray = function(t) {
                for (var e = [], n = 0, i = this.paths; n < i.length; n++)
                    for (var a = 0, s = i[n].ballManager.balls; a < s.length; a++) {
                        var o = s[a];
                        !o.isAlive || t && o.color == t || e.push(o.color)
                    }
                return e
            }, n.prototype.getAvailableColorsArray = function() {
                for (var t = [], e = 0, n = this.paths; e < n.length; e++) {
                    for (var i = n[e], a = 0, s = i.ballManager.balls; a < s.length; a++) {
                        var o = s[a];
                        o.isAlive && t.push(o.color)
                    }
                    for (var r = 0, l = i.ballManager.ballFactory.ballsQueue; r < l.length; r++) {
                        var h = l[r];
                        t.push(h.color)
                    }
                }
                return t
            }, n.prototype.getCriticalColors = function() {
                var e = [];
                if (this.paths.length < 2) return null;
                for (var n = null, i = 0, a = this.paths; i < a.length; i++) {
                    var s = a[i];
                    s.ballManager.balls.length <= t.Settings.game.ZOOMER_PRIORITY_BALLS_LIMIT && s.ballManager.getAliveBallsCount() > 0 && s.ballManager.getLastBall().getAbsolutePosition() > s.totalLength - t.Settings.game.ZOOMER_PRIORITY_DISTANCE && (!n || s.ballManager.balls.length < n.ballManager.balls.length) && (n = s)
                }
                if (n && Math.random() < t.Settings.game.ZOOMER_PRIORITY_PROBABILITY)
                    for (var o = 0, r = n.ballManager.balls; o < r.length; o++) {
                        var l = r[o];
                        l.isAlive && e.push(l.color)
                    }
                return e
            }, n.prototype.getRandomVisibleBall = function() {
                for (var t = [], e = 0, n = this.paths; e < n.length; e++)
                    for (var i = 0, a = n[e].ballManager.balls; i < a.length; i++) {
                        var s = a[i];
                        s.isAlive && s.visible && t.push(s)
                    }
                return t.length > 0 ? Phaser.ArrayUtils.getRandomItem(t) : null
            }, n.prototype.getRandomBallWithoutPowerup = function() {
                for (var t = [], e = 0, n = this.paths; e < n.length; e++)
                    for (var i = 0, a = n[e].ballManager.balls; i < a.length; i++) {
                        var s = a[i];
                        s.isAlive && s.visible && !s.powerupActivator && t.push(s)
                    }
                return t.length > 0 ? Phaser.ArrayUtils.getRandomItem(t) : null
            }, n.prototype.getPowerupsCount = function() {
                for (var t = 0, e = 0, n = this.paths; e < n.length; e++)
                    for (var i = 0, a = n[e].ballManager.balls; i < a.length; i++) {
                        var s = a[i];
                        s.isAlive && s.powerupActivator && (t += 1)
                    }
                return t
            }, n.prototype.getBallsCount = function() {
                for (var t = 0, e = 0, n = this.paths; e < n.length; e++)
                    for (var i = 0, a = n[e].ballManager.balls; i < a.length; i++) {
                        a[i].isAlive && (t += 1)
                    }
                return t
            }, n.prototype.getInitialBallsCount = function() {
                for (var t = 0, e = 0, n = this.paths; e < n.length; e++) {
                    t += n[e].ballManager.ballFactory.totalBalls
                }
                return t
            }, n.prototype.getFutureColorsArray = function(t) {
                for (var e = [], n = 0, i = this.paths; n < i.length; n++)
                    for (var a = 0, s = i[n].ballManager.ballFactory.ballsQueue; a < s.length; a++) {
                        var o = s[a];
                        t && o.color == t || e.push(o.color)
                    }
                return e
            }, n.prototype.getGapBonusesCount = function(t) {
                for (var e = 0, n = 0, i = this.paths; n < i.length; n++) {
                    e += i[n].ballManager.getGapBonusesCount(t)
                }
                return e
            }, n.prototype.initializationCompleted = function() {
                this.level.gameStateManager.startBalls()
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.paths = null
            }, n
        }(Phaser.Group);
        t.PathManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n) {
                var i = e.call(this, n.game, null) || this;
                return i.countdown = t.Settings.game.POWERUP_TIMER, i.cooldown = t.Settings.game.POWERUP_COOLDOWN, i.level = n, i.powerUps = [], i.chances = [t.Settings.game.SLOWDOWN_APPEARING_CHANCE, t.Settings.game.REWIND_APPEARING_CHANCE, t.Settings.game.BOMB_APPEARING_CHANCE, t.Settings.game.LIGHTING_APPEARING_CHANCE, t.Settings.game.LASER_APPEARING_CHANCE, t.Settings.game.FIREBALL_APPEARING_CHANCE], i
            }
            return __extends(n, e), n.prototype.activatePowerup = function(e, n) {
                if (this.hasAlivePowerups(e)) this.getAlivePowerup(e).refresh(n);
                else {
                    var i = null;
                    switch (e) {
                        case t.PowerupType.SLOWDOWN:
                            i = new t.SlowdownPowerup(this, n);
                            break;
                        case t.PowerupType.REWIND:
                            i = new t.RewindPowerup(this, n);
                            break;
                        case t.PowerupType.BOMB:
                            i = new t.BombPowerup(this, n);
                            break;
                        case t.PowerupType.LIGHTING:
                            n.visible && (i = new t.LightingPowerup(this, n));
                            break;
                        case t.PowerupType.LASER:
                            i = new t.LaserPowerup(this, n);
                            break;
                        case t.PowerupType.FIREBALL:
                            i = new t.FireballPowerup(this, n)
                    }
                    i && (this.add(i), this.powerUps.push(i))
                }
            }, n.prototype.hasAlivePowerups = function(t) {
                for (var e = 0, n = this.powerUps; e < n.length; e++) {
                    var i = n[e];
                    if (i.powerupType == t && i.isContinuous) return !0
                }
                return !1
            }, n.prototype.getAlivePowerup = function(t) {
                for (var e = 0, n = this.powerUps; e < n.length; e++) {
                    var i = n[e];
                    if (i.powerupType == t && i.isContinuous) return i
                }
                return null
            }, n.prototype.hasActivePowerup = function(t) {
                for (var e = 0, n = this.powerUps; e < n.length; e++) {
                    var i = n[e];
                    if (i.powerupType == t && i.isContinuous && i.isActive) return !0
                }
                return !1
            }, n.prototype.update = function() {
                if (!this.level.gameStateManager.isPaused && (e.prototype.update.call(this), !this.level.gameStateManager.hasLosingPaths)) {
                    this.cooldown -= this.game.time.elapsedMS;
					this.countdown -= this.game.time.elapsedMS;
					this.countdown < 0 && this.cooldown < 0 && (this.activateRandomPowerup(), this.countdown = t.Settings.game.POWERUP_TIMER * (1 + this.game.rnd.realInRange(-t.Settings.game.POWERUP_TIMER_DEVIATION, t.Settings.game.POWERUP_TIMER_DEVIATION)));
					
                    for (var n = 0; n < this.chances.length; n++) 
						t.Settings.ENABLE_DEBUG_OUTPUT && this.game.debug.text("" + Phaser.Math.roundTo(this.chances[n], -2), 200 + 50 * n, 12, "#ffc7d2")
                }
            }, n.prototype.testRandomPowerup = function(e) {
                var n = this.level.pathManager.getPowerupsCount();
                if (!(n >= t.Settings.game.MAX_ACTIVE_POWERUPS || n > this.level.pathManager.getBallsCount() / 3)) {
                    var i = this.level.pathManager.getRandomBallWithoutPowerup();
                    i && (i.createPowerup(e), this.clearChances(e, !0), this.cooldown = t.Settings.game.POWERUP_COOLDOWN, this.increaseChancesExcept(e))
                }
            }, n.prototype.dispatchComboAppearing = function(t) {
                this.cooldown < 0 && t > 1 && this.activateRandomPowerup()
            }, n.prototype.dispatchGapBonusAppearing = function(t) {
                this.cooldown < 0 && t > 0 && this.activateRandomPowerup()
            }, n.prototype.activateRandomPowerup = function() {
                var e = this.level.pathManager.getPowerupsCount();
                if (!(e >= t.Settings.game.MAX_ACTIVE_POWERUPS || e > this.level.pathManager.getBallsCount() / 3)) {
                    var n = this.level.pathManager.getRandomBallWithoutPowerup();
                    if (n) {
                        var i = this.selectRandomPowerup();
                        null != i && (n.createPowerup(i), this.clearChances(i, !0), this.cooldown = t.Settings.game.POWERUP_COOLDOWN, this.increaseChancesExcept(i))
                    }
                }
            }, n.prototype.selectRandomPowerup = function() {
                for (var e = [t.PowerupType.LASER, t.PowerupType.LIGHTING, t.PowerupType.REWIND, t.PowerupType.SLOWDOWN, t.PowerupType.BOMB, t.PowerupType.FIREBALL], n = e.length - 1; n > -1; n--) Math.random() > this.getChance(e[n]) && e.splice(n, 1);
                return e.length > 0 ? Phaser.ArrayUtils.getRandomItem(e) : null
            }, n.prototype.getChance = function(t) {
                return this.chances[t]
            }, n.prototype.clearChances = function(e, n) {
                switch (void 0 === n && (n = !1), e) {
                    case t.PowerupType.SLOWDOWN:
                        this.chances[e] = n ? 0 : this.chances[e] < 0 ? ~~(this.chances[e] + 1) : t.Settings.game.SLOWDOWN_APPEARING_CHANCE;
                        break;
                    case t.PowerupType.REWIND:
                        this.chances[e] = n ? -2 : this.chances[e] < 0 ? ~~(this.chances[e] + 1) : t.Settings.game.REWIND_APPEARING_CHANCE;
                        break;
                    case t.PowerupType.BOMB:
                        this.chances[e] = n ? 0 : this.chances[e] < 0 ? ~~(this.chances[e] + 1) : t.Settings.game.BOMB_APPEARING_CHANCE;
                        break;
                    case t.PowerupType.LIGHTING:
                        this.chances[e] = n ? 0 : this.chances[e] < 0 ? ~~(this.chances[e] + 1) : t.Settings.game.LIGHTING_APPEARING_CHANCE;
                        break;
                    case t.PowerupType.LASER:
                        this.chances[e] = n ? 0 : this.chances[e] < 0 ? ~~(this.chances[e] + 1) : t.Settings.game.LASER_APPEARING_CHANCE;
                        break;
                    case t.PowerupType.FIREBALL:
                        this.chances[e] = n ? 0 : this.chances[e] < 0 ? ~~(this.chances[e] + 1) : t.Settings.game.FIREBALL_APPEARING_CHANCE
                }
            }, n.prototype.increaseChancesExcept = function(e) {
                for (var n = [t.PowerupType.LASER, t.PowerupType.LIGHTING, t.PowerupType.REWIND, t.PowerupType.SLOWDOWN, t.PowerupType.BOMB, t.PowerupType.FIREBALL], i = n.length - 1; i > -1; i--) 
					e != n[i] && (this.chances[n[i]] <= 0 && this.clearChances(n[i]), this.chances[n[i]] *= t.Settings.game.CHANCE_APPEARING_MULTIPLIER)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.powerUps = null
            }, n
        }(Phaser.Group);
        t.PowerupManager = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.currentScore = 0;

				/*gradle.event("EVENT_LIVESCORE", {
                    liveScore: this.currentScore
                });*/
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function(t) {
                this.scores = t.slice()
            }, e.prototype.update = function() {}, e.prototype.clear = function() {
                this.currentScore = 0;
				
				/*gradle.event("EVENT_LIVESCORE", {
                    liveScore: this.currentScore
                });*/
            }, e.prototype.calculateScores = function(t) {
                return 10 * t
            }, e.prototype.displayScores = function(e, n, i, a, s, o, r, l, h, c) {
                void 0 === n && (n = !1), void 0 === i && (i = t.BallColor.RED), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === o && (o = 5), void 0 === r && (r = !1), void 0 === l && (l = !1), void 0 === h && (h = .9), void 0 === c && (c = !1), n && t.App.instance.state.getCurrentState() instanceof t.Level && t.App.instance.state.getCurrentState().effectsManager.addScoresEffect(r ? Phaser.Math.random(a - 50, a + 50) : a, l ? Phaser.Math.random(s - 50, s + 50) : s, e, i, o, h, c)
            }, e.prototype.addScores = function(t) {
                this.currentScore += t;

				/*gradle.event('EVENT_LIVESCORE', {
                    liveScore: this.getTotalScores() + this.currentScore
                })*/
            }, e.prototype.getLevelScores = function(t) {
                return this.scores[t - 1]
            }, e.prototype.getTotalScores = function() {
                return this.scores.reduce(function(t, e) {
                    return t + e
                }, 0)
            }, e.prototype.getScores = function() {
                return this.scores.slice()
            }, e.prototype.updateLevelScores = function(t, e) {
                return this.getLevelScores(t) < e && (this.scores[t - 1] = e, !0)
            }, e._instance = null, e
        }();
        t.ScoreManager = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.clear()
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.update = function() {
                this.time += t.App.instance.time.elapsedMS
            }, e.prototype.clear = function() {
                this.balls = 0, this.combos = 0, this.gaps = 0, this.time = 0, this.coins = 0, this.bonus = 0, this._ballsScore = 0, this._combosScore = 0, this._gapsScore = 0, this._timeScore = 0, this._bonusScore = 0
            }, e.prototype.addCoin = function() {
                this.coins += 1, t.ScoreManager.instance.addScores(1 * t.Settings.game.COIN_SCORE)
            }, e.prototype.addBalls = function(t) {
                this.balls += t
            }, e.prototype.addGaps = function(t) {
                this.gaps += t
            }, e.prototype.addCombos = function(t) {
                this.combos += t
            }, e.prototype.addComboBonusScore = function(t) {
                this._combosScore += t
            }, e.prototype.addGapBonusScore = function(t) {
                this._gapsScore += t
            }, e.prototype.addBonus = function(t) {
                this.bonus += t
            }, e.prototype.calculateReward = function() {
                return this.ballsScore + this.combosScore + this.gapsScore + this.timeScore + this.bonusScore
            }, Object.defineProperty(e.prototype, "coins", {
                get: function() {
                    return this._coins
                },
                set: function(t) {
                    this._coins = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "time", {
                get: function() {
                    return this._time
                },
                set: function(t) {
                    this._time = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "gaps", {
                get: function() {
                    return this._gaps
                },
                set: function(t) {
                    this._gaps = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "combos", {
                get: function() {
                    return this._combos
                },
                set: function(t) {
                    this._combos = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "balls", {
                get: function() {
                    return this._balls
                },
                set: function(e) {
                    this._balls = e, this._ballsScore = this._balls * t.Settings.game.BALL_SCORE
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bonus", {
                get: function() {
                    return this._bonus
                },
                set: function(t) {
                    this._bonus = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "timeScore", {
                get: function() {
                    return t.App.instance.state.getCurrentState() instanceof t.Level ? this._timeScore = 10 * t.App.instance.state.getCurrentState().pathManager.getInitialBallsCount() - t.Settings.game.TIME_BONUS_POINTS_PER_SECOND_PENALTY * ~~(this.time / 1e3) : this._timeScore = 10 * this.balls - t.Settings.game.TIME_BONUS_POINTS_PER_SECOND_PENALTY * ~~(this.time / 1e3)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "gapsScore", {
                get: function() {
                    return this._gapsScore
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "combosScore", {
                get: function() {
                    return this._combosScore
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ballsScore", {
                get: function() {
                    return this._ballsScore
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bonusScore", {
                get: function() {
                    return this._bonusScore = this.bonus * t.Settings.game.PATH_FINISHED_BONUS_SCORE + this.coins * t.Settings.game.COIN_SCORE
                },
                enumerable: !0,
                configurable: !0
            }), e._instance = null, e
        }();
        t.StatsManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.level = t, n.createHandlers(), n
            }
            return __extends(n, e), n.prototype.createHandlers = function() {
                this.game.device.desktop ? t.App.instance.input.onDown.add(this.onInputTapHandler, this) : t.App.instance.input.onUp.add(this.onInputTapHandler, this)
            }, n.prototype.destroyHandlers = function() {
                t.App.instance.input.onDown.removeAll()
            }, n.prototype.onInputTapHandler = function(t) {
                this.level.gameStateManager.isPaused || t.targetObject || (this.game.device.desktop && t instanceof Phaser.Pointer ? (t.leftButton.isDown && this.level.cannonManager.handleTap(), t.rightButton.isDown && this.level.cannonManager.handleSwap()) : this.level.cannonManager.handleTap())
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.destroyHandlers(), this.level = null
            }, n
        }(Phaser.Group);
        t.TouchInputManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.path = t, n.level = t.pathManager.level, n
            }
            return __extends(n, e), n.prototype.buildTunnels = function() {
                var e = this;
                this.tunnels = [];
                for (var n = t.LevelManager.instance.cachedLevel.tunnels.filter(function(t) {
                        return t[0] == e.level.pathManager.paths.indexOf(e.path)
                    }), i = 0, a = n = n.sort(function(t, e) {
                        return t[1] <= e[1] ? -1 : 1
                    }); i < a.length; i++) {
                    var s = a[i],
                        o = this.add(new t.Tunnel(this, this.path, s[1] + 1, s[2], s[3] + 1, s[4]));
                    this.tunnels.push(o)
                }
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null, this.tunnels = null
            }, n
        }(Phaser.Group);
        t.TunnelManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game) || this;
                return n.currentScoreValue = 0, n.level = t, n.createButtons(), n
            }
            return __extends(n, e), n.prototype.update = function() {
                this.level.gameStateManager.isPaused || this.updateScores()
            }, n.prototype.updateScores = function(n) {
                void 0 === n && (n = .8), e.prototype.update.call(this), this.currentScoreValue != t.ScoreManager.instance.currentScore && (Math.abs(this.currentScoreValue - t.ScoreManager.instance.currentScore) < 20 ? (this.game.tweens.removeFrom(this), this.currentScoreValue = t.ScoreManager.instance.currentScore) : (this.game.tweens.removeFrom(this), this.game.add.tween(this).to({
                    currentScoreValue: t.ScoreManager.instance.currentScore
                }, 180 + Math.pow(Math.abs(t.ScoreManager.instance.currentScore - this.currentScoreValue), n), Phaser.Easing.Sinusoidal.Out, !0))), this.scoresValue.text = "" + ~~this.currentScoreValue, this.scoresContainer.x = 303 - 10 * (this.scoresValue.text.length - 1), t.Settings.DISPLAY_FPS && (this.debugOutput.text = "" + this.game.time.fps)
            }, n.prototype.createButtons = function() {
                this.buttonPause = this.add(t.ButtonUtils.createButton(t.Settings.GAME_ATLAS, "buttonPause", 543.5, 31, this.pauseClicked, this));
				this.levelIconLeft = this.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2 - (t.Settings.CURRENT_LEVEL > 9 ? 20 : 15), t.CustomScaleManager.ORIGINAL_HEIGHT - 18, t.Settings.GAME_ATLAS, "levelIcon0000"));
				this.levelIconLeft.anchor.set(1, .5), this.levelIconRight = this.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2 + (t.Settings.CURRENT_LEVEL > 9 ? 20 : 15), t.CustomScaleManager.ORIGINAL_HEIGHT - 18, t.Settings.GAME_ATLAS, "levelIcon0000")), this.levelIconRight.scale.set(-1, 1), this.levelIconRight.anchor.set(1, .5), this.levelText = this.add(t.TextUtils.getShadowText("" + t.Settings.CURRENT_LEVEL, t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT - 17, 28, "#FFFFFF", "#2E2E2E", 0, 3, .5)), this.scoresContainer = this.add(this.game.make.group(null)), this.scoresContainer.position.set(300, 34), this.scoresIcon = this.scoresContainer.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "cupIcon0000")), this.scoresIcon.scale.set(.9), this.scoresIcon.anchor.set(.5, .5), this.scoresValue = this.scoresContainer.add(t.TextUtils.getShadowText("" + t.ScoreManager.instance.currentScore, 30, 4, 42, "#FFFFFF", "#2E2E2E", 0, 3, .5)), this.scoresValue.anchor.set(0, .5), t.Settings.DISPLAY_FPS && (this.debugOutput = this.add(t.TextUtils.getShadowText("", 15, 15, 25, "#FFFFFF", "#2E2E2E", 0, 3, .5)))
            }, n.prototype.pauseClicked = function() {
                this.level.gameStateManager.pauseLevel(), this.game.sound.play("click", .9)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.level = null
            }, n
        }(Phaser.Group);
        t.UIManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(i) {
                var a = e.call(this, i.game) || this;
                return a.level = i, n.bitmapData || (n.bitmapData = a.game.make.bitmapData(t.CustomScaleManager.ORIGINAL_WIDTH, t.CustomScaleManager.ORIGINAL_HEIGHT, "levelBitmap" + t.Settings.CURRENT_LEVEL)), a.pattern = a.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "pathSegment10000"), a.pattern.anchor.set(.5), a.particle = a.game.make.sprite(0, 0, t.Settings.GAME_ATLAS), a.particle.anchor.set(.5), a.shadowLight = a.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "pathSegmentShadowLight0000"), a.shadowLight.anchor.set(.5), a.shadowDark = a.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "pathSegmentShadowDark0000"), a.shadowDark.anchor.set(.5), n.bitmapData.clear(), a.waySprite = a.add(a.game.make.sprite(0, 0, n.bitmapData)), a
            }
            return __extends(n, e), n.prototype.buildTexture = function() {
                this.drawParticles(), this.drawToBitmapData(this.shadowDark, t.Settings.PATH_SHADOW_DELTA, t.Settings.PATH_SHADOW_DELTA), this.drawToBitmapData(this.shadowLight, t.Settings.PATH_LIGHT_DELTA, t.Settings.PATH_LIGHT_DELTA), this.drawToBitmapData(this.pattern, 0, 0)
            }, n.prototype.drawParticles = function() {
                for (var t = 0, e = this.level.pathManager.paths; t < e.length; t++)
                    for (var n = e[t], i = 0, a = n.tunnelManager.tunnels; i < a.length; i++)
                        for (var s = a[i], o = n.calculateRelativePosition(s.startPosition, -5), r = s.endPosition, l = o >= 0 ? o : s.startPosition, h = n.getConcretePosition(o ? n.calculateRelativePosition(o, -5) : s.startPosition - 1e-5); l < r;) {
                            var c = n.getConcretePosition(l),
                                u = this.drawStoneParticle(c, h);
                            l = n.calculateRelativePosition(l, u), h = c
                        }
            }, n.prototype.drawToBitmapData = function(e, i, a) {
                for (var s = 0, o = this.level.pathManager.paths; s < o.length; s++) {
                    var r = o[s],
                        l = this.level.pathManager.paths.indexOf(r),
                        h = gradle.path_single_color || 0 == l ? 0 : l % 2 != 0 ? 2 : 1;
					
                    this.pattern.frameName = "pathSegment" + h + "0000";
					
					e.alpha=gradle.path_alpha;
                    for (var c = 0; c < r.pathPoints.length - 1; c++) {
                        var u = r.pathPoints[c],
                            p = r.pathPoints[c + 1];
                        if (r.isVisible(u.chainIndex))
                            for (var g = 0; g < u.pathLength; g += t.Settings.PATTERN_DRAWING_INTERVAL) {
                                var d = t.AdvancedMath.pointOnSegment(u.x, u.y, p.x, p.y, g);
								n.bitmapData.draw(e, d.x + i, d.y + a)
                            }
                    }
                }
            }, n.prototype.drawStoneParticle = function(t, e) {
                return this.particle.frameName = Math.random() > .5 ? "x10000" : "x20000", this.particle.rotation = e ? Phaser.Math.angleBetweenPoints(e, t) + Math.PI / 2 : 0, n.bitmapData.draw(this.particle, t.x, t.y), this.particle.rotation = 0, this.particle.height + this.game.rnd.integerInRange(-5, 5)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this);
				this.particle = null;
				this.pattern = null;
				this.shadowLight = null; this.shadowDark = null;
				this.waySprite = null;
				this.level = null;
            }, n
        }(Phaser.Group);
        t.WayManager = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.isInitialized = !1
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function() {
                this.transitionScreen = new t.TransitionScreen, this.credits = new t.CreditsWindow, this.results = new t.ResultsWindow, this.pause = new t.PauseWindow, this.defeat = new t.DefeatWindow, this.isInitialized = !0
            }, e.prototype.resize = function() {
                this.isInitialized && (this.transitionScreen.resize(), this.credits.resize(), this.results.resize(), this.pause.resize(), this.defeat.resize())
            }, e.prototype.showCredits = function() {
                this.credits.show()
            }, e.prototype.showResults = function() {
                this.results.show()
            }, e.prototype.showPause = function() {
                this.pause.show()
            }, e.prototype.showDefeat = function() {
                this.defeat.show()
            }, e.prototype.showTutorial = function() {}, e.prototype.isTransitionActive = function() {
                return this.transitionScreen.isActive
            }, e.prototype.transitionTo = function(e, n, i) {
                void 0 === n && (n = null), void 0 === i && (i = !0), this.transitionScreen.start(function() {
                    n && n(), t.App.instance.state.start(e, i)
                })
            }, e.prototype.endTransition = function() {
                this.isTransitionActive() && this.transitionScreen.finish()
            }, e._instance = null, e
        }();
        t.WindowManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(i, a, s, o, r, l) {
                void 0 === r && (r = null), void 0 === l && (l = null);
                var h = e.call(this, t.App.instance, r || i) || this;
                return h._prev = null, h._next = null, h.id = 0, h.color = null, h.segmentProgress = 0, h.distanceToTarget = 0, h.insertionSpeedMultiplier = 1, h.previousPosition = 0, h.powerupActivator = null, h.powerupType = null, h.comboMultiplier = 1, h.comboSoundIndex = 1, h.previousScore = 0, h.gapBonus = 0, h._backwardSpeed = 0, h.isAlive = !0, h.onTheWay = !0, h.isUnderground = !1, h.touchingPrev = !0, h.id = n.ID++, h.ballManager = i, h.path = a, h.color = s, h.freeBallStartPosition = l, h.comboSoundIndex = h.game.rnd.integerInRange(0, 3), h.createContent(), h.updatePosition(o), h
            }
            return __extends(n, e), n.prototype.update = function() {
                e.prototype.update.call(this)
            }, n.prototype.updateContacts = function() {
                if (this.isAlive && this.onTheWay && this.getPrev()) {
                    var t = this.isTouching(this.getPrev(), !1);
                    t && !this.touchingPrev && (this.touchingPrev = t, this.ballManager.dispatchGapDestroyingBetween(this, this.getPrev())), this.touchingPrev = t
                }
            }, n.prototype.createContent = function() {
                this.view = this.add(new t.AnimatedBallView(this, this.color))
            }, n.prototype.addToParent = function() {
                this.parent && this.parent.removeChild(this), this.ballManager.add(this)
            }, n.prototype.moveTo = function(t, e) {
                this.updateRotation(), this.view.move(t - this.x, e - this.y), this.position.set(t, e), this.isUnderground = this.path.isUnderground(this.getRelativePosition()), this.visible = this.path.isVisible(this.getRelativePosition())
            }, n.prototype.updateRotation = function() {
                this.getNext() && this.getNext().onTheWay && Phaser.Math.distance(this.x, this.y, this.getNext().x, this.getNext().y) < 2 * t.Settings.BALL_DIAMETER ? this.view.ballBackground.rotation = this.game.physics.arcade.angleBetween(this, this.getNext()) : this.pathPoint && this.pathPoint.next && (this.view.ballBackground.rotation = this.game.physics.arcade.angleBetween(this.pathPoint, this.pathPoint.next))
            }, n.prototype.updatePosition = function(e) {
                if (this.isAlive)
                    if (-1 != e)
                        if (this.previousPosition = this.getRelativePosition(), this.pathPoint = this.path.getPathPoint(e), this.segmentProgress = t.AdvancedMath.getDecimal(e) * this.pathPoint.pathLength, this.onTheWay) {
                            var n = this.path.getConcretePosition(e);
                            this.moveTo(n.x, n.y)
                        } else this.updateWhileInserting(e);
                else Math.abs(this.path.totalLength - this.getAbsolutePosition()) < Math.abs(this.getAbsolutePosition()) ? this.reachFinish() : this.killBall()
            }, n.prototype.updateWhileInserting = function(e) {
                var n = this.path.getConcretePosition(e);
                this.distanceToTarget = Phaser.Math.distance(this.x, this.y, n.x, n.y);
                var i = Math.max(t.Settings.game.FREE_BALL_INSERTION_SPEED, t.Settings.game.getBallSpeed() * t.Settings.game.FREE_BALL_INSERTION_SPEED_MULTIPLIER, this.ballManager.path.speedManager.getChainSpeed() * t.Settings.game.FREE_BALL_INSERTION_SPEED_MULTIPLIER) * this.insertionSpeedMultiplier * (t.Settings.REALTIME_CALCULATIONS ? this.game.time.elapsedMS / 1e3 : this.game.time.physicsElapsed),
                    a = t.AdvancedMath.pointOnSegment(this.x, this.y, n.x, n.y, i);
                Phaser.Math.distance(this.x, this.y, a.x, a.y) >= this.distanceToTarget ? (this.insertIntoLine(), this.moveTo(n.x, n.y)) : this.moveTo(a.x, a.y)
            }, n.prototype.insertIntoLine = function() {
                var e = this;
                this.gapBonus = this.path.pathManager.getGapBonusesCount(this), this.distanceToTarget = 0, this.onTheWay = !0, this.addToParent(), this.game.time.events.add(t.Settings.INSERT_BALL_REACTION_DELAY, function() {
                    e.ballManager && e.ballManager.dispatchAddingBallToTheChain(e)
                })
            }, n.prototype.stepForward = function(e) {
                if (this.isAlive) {
                    var n = this.path.calculateRelativePosition(this.getRelativePosition(), e * (t.Settings.REALTIME_CALCULATIONS ? this.game.time.elapsedMS / 1e3 : this.game.time.physicsElapsed));
                    this.updatePosition(n)
                }
            }, n.prototype.stepBackward = function(e) {
                if (this.isAlive) {
                    var n = this.ballManager.path.calculateRelativePosition(this.getRelativePosition(), e * (t.Settings.REALTIME_CALCULATIONS ? this.game.time.elapsedMS / 1e3 : this.game.time.physicsElapsed));
                    this.updatePosition(n)
                }
            }, n.prototype.getNextRelativePosition = function() {
                return this.onTheWay ? this.ballManager.path.calculateRelativePosition(this.getRelativePosition(), t.Settings.BALL_DIAMETER) : this.getPrev() && this.isTouching(this.getPrev()) ? this.distanceToTarget > t.Settings.BALL_DIAMETER ? this.getRelativePosition() : this.ballManager.path.calculateRelativePosition(this.getRelativePosition(), t.Settings.BALL_DIAMETER - this.distanceToTarget) : this.ballManager.path.calculateRelativePosition(this.getRelativePosition(), t.Settings.BALL_DIAMETER)
            }, n.prototype.getPrevRelativePosition = function() {
                return this.ballManager.path.calculateRelativePosition(this.getRelativePosition(), -t.Settings.BALL_DIAMETER)
            }, n.prototype.getRelativePosition = function() {
                return this.pathPoint && this.isAlive ? this.pathPoint.chainIndex + (this.pathPoint.pathLength > 0 ? this.segmentProgress / this.pathPoint.pathLength : 0) : -1
            }, n.prototype.getAbsolutePosition = function() {
                return this.pathPoint && this.isAlive ? this.pathPoint.startPosition + this.segmentProgress : -1
            }, n.prototype.isTouching = function(e, n) {
                return void 0 === n && (n = !0), Phaser.Math.distance(this.x, this.y, e.x, e.y) <= t.Settings.BALL_DIAMETER + (n ? 0 : 1)
            }, n.prototype.createPowerup = function(e, n) {
                void 0 === n && (n = !1), this.powerupActivator || (this.parent && this.parent instanceof Phaser.Group && this.parent.bringToTop(this), this.powerupActivator = this.view.add(new t.PowerupActivator(this, e)), this.powerupActivator.position.set(0, 0), n || (this.game.sound.play("powerup_appearing", .6), this.powerupActivator.scale.set(2.4), this.game.add.tween(this.powerupActivator.scale).to({
                    x: 1,
                    y: 1
                }, 550, Phaser.Easing.Sinusoidal.In, !0)))
            }, n.prototype.removePowerup = function() {
                this.powerupActivator && (this.powerupActivator.destroy(), this.powerupActivator = null), this.powerupType = null
            }, n.prototype.reachFinish = function() {
                this.ballManager.path.ballEaten(), this.killBall()
            }, n.prototype.explodeBall = function() {
                this.isAlive && (this.powerupActivator && this.powerupActivator.activate(this.ballManager.level.powerupManager), this.visible && this.ballManager.level.effectsManager.addBallExplosion(this.ballManager, this.color, this.x, this.y), this.ballManager.dispatchBallExploding(this), this.game.time.now - n.lastExplodedTimestamp > 50 && (this.game.sound.play("ball_destroying", .3), n.lastExplodedTimestamp = this.game.time.now), this.killBall())
            }, n.prototype.killBall = function() {
                this.isAlive && (this.isAlive = !1, this.getPrev() && this.getPrev().setNext(this.getNext()), this.getNext() && this.getNext().setPrev(this.getPrev()), this.setPrev(null), this.setNext(null), this.ballManager.level.cannonManager.cannon.dispatchBallDestroying(), this.destroy())
            }, n.prototype.getPrev = function() {
                return this._prev
            }, n.prototype.setPrev = function(t) {
                this._prev = t
            }, n.prototype.getNext = function() {
                return this._next
            }, n.prototype.setNext = function(t) {
                this._next = t
            }, Object.defineProperty(n.prototype, "backwardSpeed", {
                get: function() {
                    return this._backwardSpeed
                },
                set: function(t) {
                    this._backwardSpeed = t < 0 ? t : 0
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.path = null, this.pathPoint = null, this.ballManager = null, this.powerupActivator = null, this.view = null
            }, n.ID = 0, n.lastExplodedTimestamp = 0, n
        }(Phaser.Group);
        t.Ball = e
    }(src || (src = {})),
    function(t) {
        ! function(t) {
            t[t.BLACK = 0] = "BLACK", t[t.BLUE = 1] = "BLUE", t[t.GRAY = 2] = "GRAY", t[t.GREEN = 3] = "GREEN", t[t.PURPLE = 4] = "PURPLE", t[t.CYAN = 5] = "CYAN", t[t.YELLOW = 6] = "YELLOW", t[t.RED = 7] = "RED"
        }(t.BallColor || (t.BallColor = {}))
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e(t) {
                this.isAcceleratingBackward = !1, this.ballManager = t, this.balls = []
            }
            return e.prototype.push = function(t, e) {
                void 0 === e && (e = -1), -1 == e ? this.balls.push(t) : this.balls.splice(e, 0, t)
            }, e.prototype.getFirst = function() {
                return this.balls[0]
            }, e.prototype.getLast = function() {
                return this.balls[this.balls.length - 1]
            }, e.prototype.move = function(t) {
                t > 0 ? this.moveForward(t) : t < 0 && this.moveBackward(t)
            }, e.prototype.update = function(e, n) {
                var i = this.getLast().backwardSpeed;
                (i = (i = this.isAcceleratingBackward ? (i > t.Settings.game.GAP_COLLAPSING_STARTING_SPEED * (e ? 2 : 1) ? t.Settings.game.GAP_COLLAPSING_STARTING_SPEED * (e ? 2 : 1) : i) * t.Settings.game.GAP_COLLAPSING_ACCELERATION_MULTIPLIER : (i > t.Settings.game.GAP_COLLAPSING_STARTING_SPEED / 5 ? 0 : i) / t.Settings.game.GAP_COLLAPSING_ACCELERATION_MULTIPLIER) < -t.Settings.game.GAP_COLLAPSING_MAX_SPEED ? -t.Settings.game.GAP_COLLAPSING_MAX_SPEED : i) < 0 && (this.move(i), this.getFirst().getPrev() && this.getFirst().getPrev().isTouching(this.getFirst()) && (i *= e ? .5 * t.Settings.game.GAP_COLLAPSING_HIT_SLOWDOWN_FACTOR : t.Settings.game.GAP_COLLAPSING_HIT_SLOWDOWN_FACTOR, 1 != n || e || this.ballManager.path.speedManager.setChainSpeed(6, !0))), this.balls.forEach(function(t) {
                    return t.backwardSpeed = i
                })
            }, e.prototype.moveForward = function(t) {
                var e = this.getFirst();
                for (e.stepForward(t); e;) e.getNext() && this.balls.indexOf(e.getNext()) > -1 && this.pushForward(e, e.getNext()), e = e.getNext()
            }, e.prototype.moveBackward = function(e) {
                var n = this.getFirst(),
                    i = n.getNext();
                for (n.stepBackward(e); n && !n.isAlive;) n.isAlive || this.ballManager.ballFactory.pushToQueue(n.color, n.powerupType), i = (n = i) && n.getNext() && this.balls.indexOf(n.getNext()) > -1 ? n.getNext() : null, n && n.stepBackward(e);
                for (; n && n.getNext() && this.balls.indexOf(n.getNext()) > -1 && n.getNext().onTheWay;) this.pullBackward(n, n.getNext()), n = n.getNext();
                this.getFirst().getPrev() && this.getFirst().getPrev().isTouching(this.getFirst()) && t.App.instance.sound.play("gap_collapsing", .7)
            }, e.prototype.pushForward = function(t, e) {
                if (e.onTheWay) {
                    var n = t.getNextRelativePosition();
                    e.updatePosition(t.onTheWay ? n : Math.max(n, e.getRelativePosition()))
                }
            }, e.prototype.pullBackward = function(t, e) {
                this.pushForward(t, e)
            }, e.prototype.destroy = function() {
                this.ballManager = null, this.balls = null
            }, e
        }();
        t.BallSequence = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s) {
                var o = e.call(this, t.App.instance) || this;
                return o.color = null, o.speedX = 0, o.speedY = 0, o.isAlive = !0, o.isStarted = !1, o.cannonManager = n, o.color = i, o.position.set(a, s), o.createContent(), o
            }
            return __extends(n, e), n.prototype.createContent = function() {
                this.view = this.add(new t.AnimatedBallView(null, this.color))
            }, n.prototype.isTouching = function(e) {
                return Phaser.Math.distance(this.x, this.y, e.x, e.y) <= t.Settings.BALL_DIAMETER
            }, n.prototype.changeColor = function(t) {
                this.color = t, this.view && this.view.destroy(), this.createContent()
            }, n.prototype.start = function(e, n) {
                this.parent && this.parent.removeChild(this), this.game.tweens.removeFrom(this, !(this instanceof Phaser.Group)), this.game.tweens.removeFrom(this.scale), this.cannonManager.add(this);
                var i = this.position.clone().rotate(0, 0, this.cannonManager.cannon.rotation);
                this.position.set(this.cannonManager.cannon.x + i.x, this.cannonManager.cannon.y + i.y), this.scale.set(1), this.isStarted = !0, this.startPosition = this.position.clone(), this.previousPosition = this.position.clone(), this.speedX = e, this.speedY = n, this.cannonManager.level.powerupManager.hasAlivePowerups(t.PowerupType.LASER) && (this.speedX *= t.Settings.game.LASER_FREE_BALL_SPEED_MULTIPLIER, this.speedY *= t.Settings.game.LASER_FREE_BALL_SPEED_MULTIPLIER), this instanceof t.FireBall && (this.cannonManager.level.powerupManager.add(this), this.speedX = this.speedX * t.Settings.game.FIREBALL_SPEED_MULTIPLIER, this.speedY = this.speedY * t.Settings.game.FIREBALL_SPEED_MULTIPLIER), this.view.dispatchStart(e, n)
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.isStarted && (this.previousPosition.copyFrom(this.position), this.x += this.speedX * (t.Settings.REALTIME_CALCULATIONS ? this.game.time.elapsedMS / 1e3 : this.game.time.physicsElapsed), this.y += this.speedY * (t.Settings.REALTIME_CALCULATIONS ? this.game.time.elapsedMS / 1e3 : this.game.time.physicsElapsed), this.outOfScreen() && this.killBall())
            }, n.prototype.killBall = function() {
                this.isAlive = !1, this.destroy()
            }, n.prototype.outOfScreen = function() {
                return this.x < -t.Settings.BALL_DIAMETER / 2 || this.x > t.Settings.BALL_DIAMETER / 2 + t.CustomScaleManager.ORIGINAL_WIDTH || this.y < -t.Settings.BALL_DIAMETER / 2 || this.y > t.Settings.BALL_DIAMETER / 2 + t.CustomScaleManager.ORIGINAL_HEIGHT
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.cannonManager = null, this.view = null, this.startPosition = null
            }, n
        }(Phaser.Group);
        t.FreeBall = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t, n, i) {
                return e.call(this, t, null, n, i) || this
            }
            return __extends(n, e), n.prototype.createContent = function() {
                this.view = this.add(new t.FireBallView)
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.view && this.parent && this.parent.parent && this.parent.parent instanceof t.Cannon && (this.view.rotation = -this.parent.parent.rotation)
            }, n
        }(t.FreeBall);
        t.FireBall = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            return function(t, e) {
                this.powerup = null, this.color = t, this.powerup = e
            }
        }();
        t.OncomingBall = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e(t) {
                this.ballManager = t
            }
            return e.prototype.update = function() {
                if (this.ballManager.hasAliveBalls()) {
                    var t = this.ballManager.path.speedManager.getChainSpeed();
                    this.resolveFlyingBalls(), this.resolveOverlaps(), this.resolveSequences(t)
                }
            }, e.prototype.resolveFlyingBalls = function() {
                for (var e = 0, n = this.ballManager.getOncomingBalls(); e < n.length; e++) {
                    var i = n[e];
                    i.getPrev() && i.isTouching(i.getPrev()) ? i.updatePosition(this.ballManager.path.calculateRelativePosition(i.getPrev().getRelativePosition(), t.Settings.BALL_DIAMETER)) : i.getNext() && i.isTouching(i.getNext()) ? i.updatePosition(i.getNext().getPrevRelativePosition()) : i.updatePosition(i.getRelativePosition())
                }
            }, e.prototype.resolveOverlaps = function() {
                for (var t = this.ballManager.getFirstBall(); t && t.getNext();) t.getNext().onTheWay && (t.isTouching(t.getNext()) || t.getRelativePosition() > t.getNext().getRelativePosition()) && (t.onTheWay ? t.getNext().updatePosition(t.getNextRelativePosition()) : t.getNext().updatePosition(t.getPrev() ? Math.max(t.getPrev().getNextRelativePosition(), t.getNextRelativePosition(), t.getNext().getRelativePosition()) : Math.max(t.getNextRelativePosition(), t.getNext().getRelativePosition()))), t = t.getNext()
            }, e.prototype.resolveSequences = function(t) {
                var e = this.ballManager.getSequences();
                t < 0 ? e[e.length - 1].move(t) : (e[0].move(t), this.manageGaps(e)), 1 == e.length && (this.ballManager.path.speedManager.hasLightingPowerupActivated = !1), e.forEach(function(t) {
                    return t.destroy()
                })
            }, e.prototype.manageGaps = function(t) {
                for (var e = !1, n = t.length - 1; n > 0; n--) {
                    var i = t[n],
                        a = t[n - 1];
                    i.getFirst().onTheWay && a.getLast().onTheWay && (e || i.getFirst().color != a.getLast().color ? this.ballManager.path.speedManager.hasLightingPowerupActivated && (i.isAcceleratingBackward = !0) : (e = !0, i.isAcceleratingBackward = !0))
                }
                for (n = t.length - 1; n > -1; n--) t[n].update(this.ballManager.path.speedManager.hasLightingPowerupActivated, n)
            }, e.prototype.destroy = function() {
                this.ballManager = null
            }, e
        }();
        t.BallContactResolver = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e(t) {
                this.countdown = 1e3, this.totalBalls = 0, this.ballManager = t
            }
            return e.getRandomColor = function() {
                return Phaser.ArrayUtils.getRandomItem([t.BallColor.BLUE, t.BallColor.GRAY, t.BallColor.GREEN, t.BallColor.PURPLE, t.BallColor.CYAN, t.BallColor.YELLOW, t.BallColor.RED])
            }, e.prototype.createQueue = function(e) {
                this.ballsQueue = [];
                for (var n = 0; n < e.length; n++) this.ballsQueue.push(new t.OncomingBall(e[n], null));
                var i = Math.floor(Math.random() * this.ballsQueue.length);
                this.ballsQueue = this.ballsQueue.concat(this.ballsQueue.splice(0, i)), this.totalBalls = this.ballsQueue.length
            }, e.prototype.clearQueue = function(t) {
                void 0 === t && (t = 0), this.ballsQueue.length > t && this.ballsQueue.splice(t)
            }, e.prototype.pushToQueue = function(e, n) {
                this.ballsQueue.push(new t.OncomingBall(e, n))
            }, e.prototype.update = function() {
                if (this.ballManager.path.isStarted)
                    if (this.countdown > 0) this.countdown -= t.App.instance.time.elapsedMS;
                    else if (this.ballManager.path.speedManager.getChainSpeed() >= 0)
                    for (; this.ballsQueue.length > 0 && this.hasEmptyPlaceForABall();) this.insertBallFromQueue()
            }, e.prototype.insertBallBefore = function(e, n, i, a, s, o) {
                var r = n.getPrev(),
                    l = new t.Ball(this.ballManager, e, i, n.getPrevRelativePosition(), this.ballManager.level.cannonManager, o);
                return l.onTheWay = !1, l.position.set(a, s), l.insertionSpeedMultiplier = .75, n.setPrev(l), l.setNext(n), r ? (l.setPrev(r), r.setNext(l), this.ballManager.balls.splice(this.ballManager.balls.indexOf(n), 0, l)) : this.ballManager.balls.unshift(l), this.ballManager.level.cannonManager.cannon.dispatchBallCreating(), this.ballManager.game.sound.play("ball_inserting", .25), l
            }, e.prototype.insertBallAfter = function(e, n, i, a, s, o) {
                var r = n.getNext(),
                    l = r ? r.getRelativePosition() : n.getNextRelativePosition();
                if (-1 == l) return null;
                var h = new t.Ball(this.ballManager, e, i, l, this.ballManager.level.cannonManager, o);
                return h.onTheWay = !1, h.position.set(a, s), n.setNext(h), h.setPrev(n), r ? (h.setNext(r), r.setPrev(h), this.ballManager.balls.splice(this.ballManager.balls.indexOf(r), 0, h)) : this.ballManager.balls.push(h), this.ballManager.level.cannonManager.cannon.dispatchBallCreating(), this.ballManager.game.sound.play("ball_inserting", .25), h
            }, e.prototype.hasEmptyPlaceForABall = function() {
                return !this.ballManager.hasAliveBalls() || this.ballManager.getFirstBall().pathPoint.chainIndex >= 1
            }, e.prototype.insertBallFromQueue = function() {
                if (this.ballsQueue.length > 0) {
                    var e = this.ballManager.getFirstBall(),
                        n = 0;
                    e && (n = e.getPrevRelativePosition() >= 0 && e.getPrevRelativePosition() <= 1 ? e.getPrevRelativePosition() : 0);
                    var i = this.ballsQueue.pop(),
                        a = new t.Ball(this.ballManager, this.ballManager.path, i.color, n);
                    i.powerup && a.createPowerup(i.powerup, !0), e && (a.setNext(e), e.setPrev(a)), this.ballManager.level.cannonManager.cannon.dispatchBallCreating(), this.ballManager.balls.unshift(a)
                }
            }, e.prototype.destroy = function() {
                this.ballManager = null
            }, e
        }();
        t.BallFactory = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e) {
                var n = t.call(this, e.game, null) || this;
                return n.ballManager = e, n
            }
            return __extends(e, t), e.prototype.render = function() {
                for (var t = 0, e = this.ballManager.balls; t < e.length; t++) {
                    var n = e[t];
                    n.isAlive && n.visible
                }
            }, e
        }(Phaser.Group);
        t.BallRenderer = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var n = e.call(this, t.App.instance, null) || this;
                return n.isStarted = !1, n
            }
            return __extends(n, e), n.prototype.dispatchStart = function(t, e) {
                this.isStarted = !0
            }, n
        }(Phaser.Group);
        t.BallView = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t, n) {
                var i = e.call(this) || this;
                return i.textureSpeed = 0, i.ballFrame = 0, i.ball = t, i.color = n, i.createContent(), i
            }
            return __extends(n, e), n.prototype.createContent = function() {
                this.ballBackground = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "ball" + this.color + "0000")), this.ballBackground.anchor.set(.5), this.rollingAnimation = this.ballBackground.animations.add("rollingAnimation", n.ballAnimations[this.color], 60, !0), this.rollingAnimation.play(), this.rollingAnimation.stop(), this.cover = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "ballCover0000")), this.cover.anchor.set(.5)
            }, n.prototype.move = function(t, e) {
                if (this.textureSpeed = Phaser.Math.distance(0, 0, t, e), this.ball && this.ball.isAlive && this.ball.previousPosition > this.ball.getRelativePosition())
                    for (this.ballFrame -= this.textureSpeed; Math.round(this.ballFrame) < 0;) this.ballFrame += 44;
                else
                    for (this.ballFrame += this.textureSpeed; Math.round(this.ballFrame) > 43;) this.ballFrame -= 44;
                this.rollingAnimation.frame = Math.round(this.ballFrame)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.color = null, this.cover = null, this.ballBackground = null, this.ball = null, this.rollingAnimation = null
            }, n.ballAnimations = [Phaser.Animation.generateFrameNames("ball0", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball1", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball2", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball3", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball4", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball5", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball6", 0, 43, "", 4), Phaser.Animation.generateFrameNames("ball7", 0, 43, "", 4)], n
        }(t.BallView);
        t.AnimatedBallView = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var t = e.call(this) || this;
                return t.createContent(), t
            }
            return __extends(n, e), n.prototype.createContent = function() {
                this.ball = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "fireBall0000")), this.ball.anchor.set(.5), this.fireAnimation = this.ball.animations.add("fireBall", Phaser.Animation.generateFrameNames("fireBall", 0, 15, "", 4)), this.fireAnimation.play(60, !0), this.tail = this.addAt(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, null), 0), this.tail.anchor.set(.5, .1), this.tail.visible = !1, this.tailAnimation = this.tail.animations.add("fireBallTail", Phaser.Animation.generateFrameNames("fireBallTail", 0, 19, "", 4))
            }, n.prototype.move = function(t, e) {}, n.prototype.dispatchStart = function(t, n) {
                e.prototype.dispatchStart.call(this, t, n), this.rotation = 0, this.tail.visible = !0, this.tailAnimation.play(120, !0), this.tail.rotation = Phaser.Math.angleBetween(0, 0, t, n) + Math.PI / 2
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.ball = null, this.fireAnimation = null
            }, n
        }(t.BallView);
        t.FireBallView = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, t.App.instance) || this;
                return a.activeBall = null, a.nextBall = null, a.lastColors = [], a.cooldown = 0, a.isReady = !1, a.cannonManager = n, a.commonContainer = a.add(a.game.make.group(null)), a.platform = i, a.position.copyFrom(a.platform.position), a.buildGraphics(), a
            }
            return __extends(n, e), n.prototype.start = function() {
                this.generateBalls(), this.isReady = !0
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.cooldown > 0 ? (this.cooldown -= this.game.time.elapsedMS, this.isReady = !1) : this.isReady = !0
            }, n.prototype.rotateToPointer = function(t) {
                this.rotation = Phaser.Math.angleBetween(this.x, this.y, t.x, t.y) + Math.PI / 2
            }, n.prototype.isPointerOver = function(e) {
                return Phaser.Math.distance(e.x, e.y, this.x, this.y) < t.Settings.CANNON_TOUCH_ZONE_DIAMETER / 2
            }, n.prototype.shoot = function() {
                this.activeBall && (this.rotateToPointer(this.cannonManager.level.getInputPosition()), this.activeBall instanceof t.FireBall && (this.game.sound.play("shot0" + (1 + Math.floor(2 * Math.random())), .5), this.game.sound.play("fireball_shot", .6), this.shootBall(new t.FireBall(this.cannonManager, t.Settings.ACTIVE_BALL_POSITION.x, t.Settings.ACTIVE_BALL_POSITION.y), -Phaser.Math.degToRad(t.Settings.game.FIREBALL_ANGLE)), this.shootBall(new t.FireBall(this.cannonManager, t.Settings.ACTIVE_BALL_POSITION.x, t.Settings.ACTIVE_BALL_POSITION.y), Phaser.Math.degToRad(t.Settings.game.FIREBALL_ANGLE))), this.shootBall(this.activeBall), this.game.sound.play("shot0" + (1 + Math.floor(2 * Math.random())), .3), t.TutorialManager.instance.dispatchShoot(this.cannonManager.level.getInputPosition().clone()), this.cooldown = this.cannonManager.level.powerupManager.hasAlivePowerups(t.PowerupType.LASER) ? t.Settings.game.ZOOMER_COOLDOWN / 2 : t.Settings.game.ZOOMER_COOLDOWN, this.activeBall = this.nextBall, this.game.add.tween(this.activeBall).to({
                    x: t.Settings.ACTIVE_BALL_POSITION.x,
                    y: t.Settings.ACTIVE_BALL_POSITION.y
                }, 200, Phaser.Easing.Cubic.Out, !0), this.game.add.tween(this.activeBall.scale).to({
                    x: 1,
                    y: 1
                }, 300, Phaser.Easing.Back.Out, !0), this.nextBall = this.ballsContainer.add(new t.FreeBall(this.cannonManager, this.getNextColor(), t.Settings.NEXT_BALL_POSITION.x, t.Settings.NEXT_BALL_POSITION.y)), this.nextBall.scale.set(.01), this.game.add.tween(this.nextBall.scale).to({
                    x: t.Settings.NEXT_BALL_SCALE,
                    y: t.Settings.NEXT_BALL_SCALE
                }, 100, Phaser.Easing.Linear.None, !0), this.ballsContainer.bringToTop(this.activeBall), this.playRecoilAnimation())
            }, n.prototype.swapBalls = function() {
                var e;
                this.activeBall && this.nextBall && (t.TutorialManager.instance.dispatchBallsSwap(this), t.SoundController.instance.playSwapSound(), e = [this.nextBall, this.activeBall], this.activeBall = e[0], this.nextBall = e[1], this.game.add.tween(this.activeBall).to({
                    x: t.Settings.ACTIVE_BALL_POSITION.x,
                    y: t.Settings.ACTIVE_BALL_POSITION.y
                }, 180, Phaser.Easing.Quintic.InOut, !0), this.game.add.tween(this.activeBall.scale).to({
                    x: 1,
                    y: 1
                }, 180, Phaser.Easing.Quintic.InOut, !0), this.game.add.tween(this.nextBall).to({
                    x: t.Settings.NEXT_BALL_POSITION.x,
                    y: t.Settings.NEXT_BALL_POSITION.y
                }, 180, Phaser.Easing.Quintic.InOut, !0), this.game.add.tween(this.nextBall.scale).to({
                    x: t.Settings.NEXT_BALL_SCALE,
                    y: t.Settings.NEXT_BALL_SCALE
                }, 180, Phaser.Easing.Quintic.InOut, !0))
            }, n.prototype.jumpToPlatform = function(e) {
                var n = this;
                e != this.platform && (t.TutorialManager.instance.dispatchPlatformChange(e), this.game.tweens.removeFrom(e.platformBorder.scale), e.platformBorder.scale.set(.85), this.platform = e, this.game.sound.play("platform_change", .6), this.game.add.tween(this.scale).to({
                    x: .6,
                    y: .6
                }, 80, Phaser.Easing.Sinusoidal.In, !0).onComplete.add(function() {
                    return n.game.add.tween(n.scale).to({
                        x: 1,
                        y: 1
                    }, 80, Phaser.Easing.Sinusoidal.Out, !0).onStart.add(function() {
                        n.position.copyFrom(n.platform.position)
                    })
                }), this.game.add.tween(this).to({
                    alpha: 0
                }, 80, Phaser.Easing.Sinusoidal.In, !0).onComplete.add(function() {
                    return n.game.add.tween(n).to({
                        alpha: 1
                    }, 80, Phaser.Easing.Sinusoidal.Out, !0)
                }))
            }, n.prototype.activateFireBall = function() {
                this.activeBall && (this.activeBall.destroy(), this.activeBall = null), this.activeBall = this.ballsContainer.add(new t.FireBall(this.cannonManager, t.Settings.ACTIVE_BALL_POSITION.x, t.Settings.ACTIVE_BALL_POSITION.y)), this.activeBall.scale.set(.1), this.game.add.tween(this.activeBall.scale).to({
                    x: 1,
                    y: 1
                }, 180, Phaser.Easing.Quintic.InOut, !0), this.addFireballAppearingEffect(this.activeBall), this.game.sound.play("fireball_picking_up", .7)
            }, n.prototype.dispatchBallDestroying = function() {
                if (!this.cannonManager.level.gameStateManager.hasLosingPaths) {
                    var e = this.cannonManager.level.pathManager.getAvailableColorsArray();
                    if (0 == e.length) return this.cannonManager.level.coinManager.hideAllCoins(), void this.destroyBalls();
                    this.activeBall instanceof t.FireBall || -1 != e.indexOf(this.activeBall.color) || this.activeBall.changeColor(this.cannonManager.getNextColor(null)), this.nextBall instanceof t.FireBall || -1 != e.indexOf(this.nextBall.color) || this.nextBall.changeColor(this.cannonManager.getNextColor(null))
                }
            }, n.prototype.dispatchBallCreating = function() {
                this.generateBalls()
            }, n.prototype.buildGraphics = function() {
                this.bottomSprite = this.commonContainer.add(this.game.make.sprite(2, -52, t.Settings.GAME_ATLAS, "cannonBot0000")), this.bottomSprite.anchor.set(.5, .5), this.ballsContainer = this.commonContainer.add(this.game.make.group()), this.ballsContainer.inputEnableChildren = !1, this.topSprite = this.commonContainer.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "cannonTop0000")), this.topSprite.anchor.set(.5, .5)
            }, n.prototype.addFireballAppearingEffect = function(e) {
                var n = e.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS));
                n.anchor.set(.5), n.scale.set(.65), n.animations.add("bombExplosion", Phaser.Animation.generateFrameNames("bombExplosion", 0, 17, "", 4)), n.animations.play("bombExplosion", 60, !1, !0)
            }, n.prototype.playRecoilAnimation = function() {
                var e = this;
                this.commonContainer.y = 0, this.game.tweens.removeFrom(this.commonContainer), this.game.add.tween(this.commonContainer).to({
                    y: t.Settings.game.ZOOMER_RECOIL
                }, t.Settings.game.ZOOMER_RECOIL_DURATION, Phaser.Easing.Linear.None, !0).onComplete.add(function() {
                    e.game.add.tween(e.commonContainer).to({
                        y: 0
                    }, t.Settings.game.ZOOMER_RECOIL_DURATION, Phaser.Easing.Linear.None, !0)
                })
            }, n.prototype.generateBalls = function() {
                this.activeBall && this.nextBall || (this.ballsContainer.removeAll(!0), this.activeBall = this.ballsContainer.add(new t.FreeBall(this.cannonManager, this.cannonManager.getFirstColor(), t.Settings.ACTIVE_BALL_POSITION.x, t.Settings.ACTIVE_BALL_POSITION.y)), this.activeBall.scale.set(0), this.game.add.tween(this.activeBall.scale).to({
                    x: 1,
                    y: 1
                }, 300, Phaser.Easing.Back.Out, !0), this.nextBall = this.ballsContainer.add(new t.FreeBall(this.cannonManager, this.getNextColor(), t.Settings.NEXT_BALL_POSITION.x, t.Settings.NEXT_BALL_POSITION.y)), this.nextBall.scale.set(0), this.game.add.tween(this.nextBall.scale).to({
                    x: t.Settings.NEXT_BALL_SCALE,
                    y: t.Settings.NEXT_BALL_SCALE
                }, 300, Phaser.Easing.Linear.None, !0))
            }, n.prototype.getNextColor = function() {
                var e = this.cannonManager.getNextColor(this.lastColors.length >= t.Settings.game.ZOOMER_MAX_SAME_COLOR_BALLS_SEQUENCE ? this.lastColors[0] : null);
                return this.lastColors.length > 0 && this.lastColors[this.lastColors.length - 1] != e && this.lastColors.splice(0, this.lastColors.length), this.lastColors.push(e), e
            }, n.prototype.destroyBalls = function() {
                this.activeBall && (this.cannonManager.level.effectsManager.addBallExplosion(this.ballsContainer, this.activeBall.color, this.activeBall.x, this.activeBall.y), this.activeBall.destroy()), this.nextBall && (this.cannonManager.level.effectsManager.addBallExplosion(this.ballsContainer, this.nextBall.color, this.nextBall.x, this.nextBall.y).scale.copyFrom(this.nextBall.scale), this.nextBall.destroy()), this.activeBall = null, this.nextBall = null
            }, n.prototype.shootBall = function(e, n) {
                void 0 === n && (n = 0), this.cannonManager.balls.push(e), e.position.set(t.Settings.ACTIVE_BALL_POSITION.x, t.Settings.ACTIVE_BALL_POSITION.y), e.start(Math.sin(this.rotation + n) * t.Settings.game.FREE_BALL_SPEED, -Math.cos(this.rotation + n) * t.Settings.game.FREE_BALL_SPEED)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.activeBall = null, this.nextBall = null, this.cannonManager = null, this.platform = null
            }, n
        }(Phaser.Group);
        t.Cannon = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a) {
                var s = e.call(this, t.App.instance, null) || this;
                return s.cannonManager = n, s.position.set(i, a), s.platformBackground = s.add(s.game.make.sprite(-1, 1.5, t.Settings.GAME_ATLAS, "platformBackground0000")), s.platformBackground.anchor.set(.5), s.platformBorder = s.add(s.game.make.sprite(-2, -2, t.Settings.GAME_ATLAS, "platformBorder0000")), s.platformBorder.anchor.set(.5), s.platformBorder.scale.set(.85), s.platform = s.add(s.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "platform0000")), s.platform.anchor.set(.5), s
            }
            return __extends(n, e), n.prototype.handleTap = function(e) {
                return !!(Phaser.Math.distance(this.x, this.y, e.x, e.y) < t.Settings.PLATFORM_TOUCH_ZONE_DIAMETER / 2 && this.cannonManager.cannon && this.cannonManager.cannon.platform != this)
            }, n.prototype.highlight = function() {
                this.platformBorder.rotation = 0;
                var e = this.game.add.tween(this.platformBorder.scale).to({
                        x: 1,
                        y: 1
                    }, 300, Phaser.Easing.Linear.None, !0),
                    n = this.game.add.tween(this.platformBorder.scale).to({
                        x: .85,
                        y: .85
                    }, 300, Phaser.Easing.Linear.None, !1, t.Settings.PLATFORM_ROTATION_TIME);
                e.chain(n)
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.platformBorder.scale.x > .85 && (this.platformBorder.rotation += t.Settings.PLATFORM_ROTATION_SPEED * this.game.time.elapsedMS / 1e3)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.onChildInputDown.removeAll(), this.cannonManager = null
            }, n
        }(Phaser.Group);
        t.Platform = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, t.App.instance, null) || this;
                return a.lifetime = t.Settings.game.COIN_LIFETIME, a.isAlive = !0, a.coinManager = n, a.coinPlace = i, a.x = i.x, a.y = i.y, a.coinPlace.setCoin(a), a.buildSprites(), a.startTweens(), a
            }
            return __extends(n, e), n.prototype.update = function() {
                e.prototype.update.call(this), this.lifetime -= this.game.time.elapsedMS, this.lifetime < 1e3 && this.lifetime > 0 && (this.alpha = this.lifetime / 1e3), this.lifetime < 0 && this.destroy()
            }, n.prototype.buildSprites = function() {
                this.coinShadow = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "coinShadow0000")), this.coinShadow.anchor.set(.5), this.coin = this.add(this.game.make.sprite(0, -35, t.Settings.GAME_ATLAS)), this.coin.anchor.set(.5), this.coinAnimation = this.coin.animations.add("coinRotation", Phaser.Animation.generateFrameNames("coin", 0, 27, "", 4)), this.coinAnimation.play(60, !0)
            }, n.prototype.startTweens = function() {
                this.scale.set(.1), this.game.add.tween(this.scale).to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Back.Out, !0)
            }, n.prototype.isTouching = function(e) {
                return Phaser.Math.distance(this.x, this.y - 35, e.x, e.y) <= .8 * t.Settings.BALL_DIAMETER
            }, n.prototype.pickupCoin = function() {
                t.StatsManager.instance.addCoin(), this.coinManager.level.effectsManager.addCoinExplosion(this.x, this.y), this.destroy()
            }, n.prototype.destroy = function() {
                this.isAlive && (this.isAlive = !1, e.prototype.destroy.call(this), this.coinPlace.removeCoin(), this.coinPlace = null, this.coinManager = null, this.coin = null, this.coinShadow = null, this.coinAnimation = null)
            }, n
        }(Phaser.Group);
        t.Coin = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function t(t, e) {
                this.coin = null, this.x = t, this.y = e
            }
            return t.prototype.setCoin = function(t) {
                this.coin = t
            }, t.prototype.removeCoin = function() {
                this.coin && (this.coin = null)
            }, t
        }();
        t.CoinPlace = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o) {
                var r = e.call(this, t.App.instance, null) || this;
                return r.state = t.DaemonState.CLOSED, r.daemonManager = n, r.path = i, r.position.set(a, s), r.rotation = o, r.buildSprites(), r.buildAnimations(), r
            }
            return __extends(n, e), n.prototype.buildSprites = function() {
                this.daemonBot = this.daemonManager.level.backgroundManager.add(this.game.make.sprite(this.x, this.y, t.Settings.GAME_ATLAS, "daemonBot0000")), this.daemonBot.anchor.set(.5, .5), this.daemonBot.rotation = this.rotation, this.daemonLowerTeeth = this.daemonManager.level.wayManager.add(this.game.make.sprite(this.x, this.y, t.Settings.GAME_ATLAS, "daemonLowerTeeth0000")), this.daemonLowerTeeth.anchor.set(.52, .12), this.daemonLowerTeeth.rotation = this.rotation, this.daemonUpperTeeth = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "daemonUpperTeeth0000")), this.daemonUpperTeeth.anchor.set(.525, .66), this.daemonLight = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "daemonLight0000")), this.daemonLight.anchor.set(.5, .9), this.daemonTop = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "daemonTop0000")), this.daemonTop.anchor.set(.5, .755), this.daemonEyeLeft = this.add(this.game.make.sprite(-28, 0, t.Settings.GAME_ATLAS, "daemonEye0000")), this.daemonEyeLeft.anchor.set(.5, 1.15), this.daemonEyeRight = this.add(this.game.make.sprite(24.5, 0, t.Settings.GAME_ATLAS, "daemonEye0000")), this.daemonEyeRight.anchor.set(.5, 1.16), this.daemonEyeRight.scale.set(-1, 1)
            }, n.prototype.buildAnimations = function() {
                var e = this;
                this.leftEyeOpeningAnimation = this.daemonEyeLeft.animations.add("leftEyeOpeningAnimation", Phaser.Animation.generateFrameNames("daemonEye", 0, 45, "", 4), 60, !1), this.leftEyeClosingAnimation = this.daemonEyeLeft.animations.add("leftEyeClosingAnimation", Phaser.Animation.generateFrameNames("daemonEye", 0, 45, "", 4).reverse(), 60, !1), this.rightEyeOpeningAnimation = this.daemonEyeRight.animations.add("rightEyeOpeningAnimation", Phaser.Animation.generateFrameNames("daemonEye", 0, 45, "", 4), 60, !1), this.rightEyeClosingAnimation = this.daemonEyeRight.animations.add("rightEyeClosingAnimation", Phaser.Animation.generateFrameNames("daemonEye", 0, 45, "", 4).reverse(), 60, !1), this.lightOpeningAnimation = this.daemonLight.animations.add("lightOpeningAnimation", Phaser.Animation.generateFrameNames("daemonLight", 0, 31, "", 4), 60, !1), this.lightClosingAnimation = this.daemonLight.animations.add("lightClosingAnimation", Phaser.Animation.generateFrameNames("daemonLight", 0, 31, "", 4).reverse(), 60, !1), this.upperTeethOpeningAnimation = this.daemonUpperTeeth.animations.add("upperTeethOpeningAnimation", Phaser.Animation.generateFrameNames("daemonUpperTeeth", 0, 34, "", 4), 60, !1), this.upperTeethClosingAnimation = this.daemonUpperTeeth.animations.add("upperTeethClosingAnimation", Phaser.Animation.generateFrameNames("daemonUpperTeeth", 0, 34, "", 4).reverse(), 60, !1), this.lowerTeethOpeningAnimation = this.daemonLowerTeeth.animations.add("lowerTeethOpeningAnimation", Phaser.Animation.generateFrameNames("daemonLowerTeeth", 0, 32, "", 4), 60, !1), this.lowerTeethClosingAnimation = this.daemonLowerTeeth.animations.add("lowerTeethClosingAnimation", Phaser.Animation.generateFrameNames("daemonLowerTeeth", 0, 32, "", 4).reverse(), 60, !1), this.lowerTeethOpeningAnimation.onStart.add(function() {
                    return e.state = t.DaemonState.OPENING
                }), this.lowerTeethOpeningAnimation.onComplete.add(function() {
                    return e.state = t.DaemonState.OPENED
                }), this.lowerTeethClosingAnimation.onStart.add(function() {
                    return e.state = t.DaemonState.CLOSING
                }), this.lowerTeethClosingAnimation.onComplete.add(function() {
                    return e.state = t.DaemonState.CLOSED
                })
            }, n.prototype.openMouth = function(t) {
                void 0 === t && (t = !0), this.lightOpeningAnimation.play(), this.upperTeethOpeningAnimation.play(), this.lowerTeethOpeningAnimation.play(), this.leftEyeOpeningAnimation.play(), this.rightEyeOpeningAnimation.play(), t && this.game.sound.play("idol_mouth_opening", .5)
            }, n.prototype.closeMouth = function(t) {
                void 0 === t && (t = !0), this.lightClosingAnimation.play(), this.upperTeethClosingAnimation.play(), this.lowerTeethClosingAnimation.play(), this.leftEyeClosingAnimation.play(), this.rightEyeClosingAnimation.play(), t && this.game.sound.play("idol_mouth_closing", .4)
            }, n.prototype.update = function() {
                e.prototype.update.call(this);
                var n = this.path.ballManager.getAliveBallsCount();
                this.state != t.DaemonState.OPENED && this.state != t.DaemonState.OPENING || (n > 0 && this.path.ballManager.getFirstBall().getRelativePosition() >= this.path.pathPoints.length - 2 ? this.closeMouth() : n > 0 && Phaser.Math.distance(this.path.ballManager.getLastBall().x, this.path.ballManager.getLastBall().y, this.x, this.y) > t.Settings.game.getBallSpeed() && this.path.ballManager.getLastBall().getRelativePosition() < this.path.calculateRelativePosition(this.path.pathPoints.length - 2, -t.Settings.game.getBallSpeed()) ? this.closeMouth() : this.path.isStarted && 0 == n && this.closeMouth()), this.state != t.DaemonState.CLOSED && this.state != t.DaemonState.CLOSING || (this.path.isStarted ? n > 0 && this.path.ballManager.getFirstBall().getRelativePosition() < this.path.pathPoints.length - 2 && Phaser.Math.distance(this.path.ballManager.getLastBall().x, this.path.ballManager.getLastBall().y, this.x, this.y) < t.Settings.game.getBallSpeed() && this.path.ballManager.getLastBall().getRelativePosition() >= this.path.calculateRelativePosition(this.path.pathPoints.length - 2, -t.Settings.game.getBallSpeed()) && this.openMouth() : this.openMouth(!1))
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.daemonBot.destroy(), this.daemonLowerTeeth.destroy(), this.daemonManager = null, this.path = null, this.daemonEyeLeft = null, this.daemonEyeRight = null, this.daemonLowerTeeth = null, this.daemonUpperTeeth = null, this.daemonLight = null, this.daemonTop = null, this.daemonBot = null, this.leftEyeOpeningAnimation = null, this.leftEyeClosingAnimation = null, this.rightEyeOpeningAnimation = null, this.rightEyeClosingAnimation = null, this.lightOpeningAnimation = null, this.lightClosingAnimation = null, this.upperTeethOpeningAnimation = null, this.upperTeethClosingAnimation = null, this.lowerTeethOpeningAnimation = null, this.lowerTeethClosingAnimation = null
            }, n
        }(Phaser.Group);
        t.Daemon = e
    }(src || (src = {})),
    function(t) {
        ! function(t) {
            t[t.CLOSING = 1] = "CLOSING", t[t.CLOSED = 2] = "CLOSED", t[t.OPENING = 3] = "OPENING", t[t.OPENED = 4] = "OPENED"
        }(t.DaemonState || (t.DaemonState = {}))
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o, r) {
                void 0 === s && (s = 0), void 0 === o && (o = 5), void 0 === r && (r = 0);
                var l = e.call(this, t.App.instance, i, a) || this;
                return l.prev = null, l.next = null, l.startPosition = 0, l.pathLength = 0, l.chainIndex = 0, l.parentGroup = n, l.radius = o, l.color = r, l.chainIndex = s, l.drawContent(), l
            }
            return __extends(n, e), n.prototype.drawContent = function() {
                this.clear(), this.beginFill(this.color, 1), this.drawCircle(0, 0, this.radius), this.endFill()
            }, n.prototype.drawPath = function() {
                this.lineStyle(1, this.color, .7).moveTo(0, 0).lineTo(this.next.x - this.x, this.next.y - this.y)
            }, n.prototype.calculateLength = function() {
                this.pathLength = Phaser.Math.distance(this.x, this.y, this.next.x, this.next.y), this.next.startPosition = this.startPosition + this.pathLength
            }, n.prototype.setPrev = function(t) {
                this.prev = t
            }, n.prototype.setNext = function(t) {
                this.next = t, this.next && (this.calculateLength(), this.drawPath())
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.prev = null, this.next = null, this.parentGroup = null
            }, n
        }(Phaser.Graphics);
        t.PathPoint = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e, n, i, a, s) {
                return void 0 === a && (a = 15), void 0 === s && (s = 16711680), t.call(this, e, n, i, 0, a, s) || this
            }
            return __extends(e, t), e
        }(t.PathPoint);
        t.KeyPoint = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n) {
                var i = e.call(this, n.game) || this;
                return i.totalLength = 0, i.warningPosition = 0, i.hasEatenBalls = !1, i.isStarted = !1, i.isCleared = !1, i.isFinished = !1, i.isLost = !1, i.pathManager = n, i.pathInitializer = i.add(new t.PathInitializer(i)), i.pathFinalizer = i.add(new t.PathFinalizer(i)), i.ballManager = i.add(new t.BallManager(i)), i.tunnelManager = i.add(new t.TunnelManager(i)), i.speedManager = new t.PathSpeedManager(i), i
            }
            return __extends(n, e), n.prototype.construct = function(e, n, i, a) {
                this.buildPathPoints(e, n, i);
				this.ballManager.initQueue(a);
				this.totalLength = this.getEndPoint().startPosition;
				this.warningPosition = this.totalLength - t.Settings.game.SLOWDOWN_POINT_BALLS_COUNT * t.Settings.BALL_DIAMETER;
				this.tunnelManager.buildTunnels();
            }, n.prototype.start = function() {
                this.isStarted = !0;
				this.speedManager.start();
				this.daemon.closeMouth();
            }, n.prototype.pathCleared = function() {
                this.pathManager.pathCleared(this);
            }, n.prototype.ballEaten = function() {
                var t = this;
				this.hasEatenBalls || (this.hasEatenBalls = !0, this.ballManager.ballFactory.clearQueue(10), this.game.time.events.add(1300, function() {
                    return t.pathManager.dispatchPathLose(t)
                }));
            }, n.prototype.lose = function() {
                this.isLost || (this.isLost = !0, this.pathManager.dispatchPathLose(this))
            }, n.prototype.getStartPoint = function() {
                return this.pathPoints.length > 0 ? this.pathPoints[0] : null
            }, n.prototype.getEndPoint = function() {
                return this.pathPoints.length > 0 ? this.pathPoints[this.pathPoints.length - 1] : null
            }, n.prototype.getTotalLength = function() {
                return this.pathPoints.length > 0 ? this.pathPoints.length - 1e-7 : 0
            }, n.prototype.getPathPoint = function(t) {
                return t >= 0 && this.pathPoints.length > ~~t ? this.pathPoints[~~t] : null
            }, n.prototype.isUnderground = function(t) {
                if (t >= this.pathPoints.length - 2) return !0;
                for (var e = 0, n = this.tunnelManager.tunnels; e < n.length; e++) {
                    var i = n[e];
                    if (t >= i.entrancePosition && t <= i.exitPosition) return !0
                }
                return !1
            }, n.prototype.isVisible = function(t) {
                for (var e = 0, n = this.tunnelManager.tunnels; e < n.length; e++) {
                    var i = n[e];
                    if (t >= i.startPosition && t <= i.endPosition) return !1
                }
                return !0
            }, n.prototype.getConcretePosition = function(e) {
                if (0 == this.pathPoints.length || e < 0 || this.pathPoints.length <= e) return null;
                var n = this.pathPoints[~~e];
                return n ? n.next ? t.AdvancedMath.pointOnSegmentRelative(n.x, n.y, n.next.x, n.next.y, t.AdvancedMath.getDecimal(e)) : n.position.clone() : null
            }, n.prototype.calculateRelativePosition = function(e, n) {
                var i = this.getPathPoint(e),
                    a = t.AdvancedMath.getDecimal(e) * i.pathLength;
                if (n >= 0) {
                    for (; i && a + n >= i.pathLength;) n -= i.pathLength - a, a = 0, i = i.next;
                    return i ? (a += n, i.chainIndex + (i.pathLength > 0 ? a / i.pathLength : 0)) : -1
                }
                for (var s = Math.abs(n); i && a - s < 0;) s -= a, (i = i.prev) && (a = i.pathLength);
                return i ? (a -= s, i.chainIndex + (i.pathLength > 0 ? a / i.pathLength : 0)) : -1
            }, n.prototype.update = function() {
                this.speedManager.update(), e.prototype.update.call(this), this.hasEatenBalls && !this.isLost && 0 == this.ballManager.getAliveBallsCount() && 0 == this.ballManager.getFutureBallsCount() && this.lose()
            }, n.prototype.buildPathPoints = function(e, n, i) {
				//console.log(e,n,i);
                var a = t.PathBuilder.generatePathPointsArray(e, n, i);
                if (this.pathPoints = [], a.length < 2) gradle.event("Path is too short!");
                else {
                    var s = t.AdvancedMath.pointOnSegment(a[0][0], a[0][1], a[1][0], a[1][1], -t.Settings.BALL_DIAMETER);
                    a.unshift([s.x, s.y]);
                    var o = t.AdvancedMath.pointOnSegment(a[a.length - 1][0], a[a.length - 1][1], a[a.length - 2][0], a[a.length - 2][1], -1.2 * t.Settings.BALL_DIAMETER);
                    a.push([o.x, o.y])
                }
                for (var r = 0; r < a.length; r++) {
                    var l = new t.PathPoint(this, a[r][0], a[r][1], r, 5, 153);
                    r > 0 && (this.pathPoints[this.pathPoints.length - 1].setNext(l), l.setPrev(this.pathPoints[this.pathPoints.length - 1]));
					this.pathPoints.push(l);
                }
            }, n.prototype.clearPathPoints = function() {
                this.pathPoints && this.pathPoints.forEach(function(t) {
                    return t.destroy()
                }), this.pathPoints = []
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.speedManager.destroy(), this.speedManager = null, this.pathInitializer = null, this.pathFinalizer = null, this.pathManager = null, this.tunnelManager = null
            }, n
        }(Phaser.Group);
        t.Path = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game, null) || this;
                return n.startPosition = 0, n.bonusPoints = 0, n.path = t, n
            }
            return __extends(n, e), n.prototype.start = function() {
                for (var e = this.path.calculateRelativePosition(this.path.getTotalLength(), -2 * t.Settings.BALL_DIAMETER), n = (this.path.getConcretePosition(this.startPosition), this.path.calculateRelativePosition(this.startPosition, t.Settings.game.PATH_FINISHED_BONUS_STEP)), i = t.Settings.game.PATH_FINISHED_BONUS_DELAY; n < e && n >= 0;) {
                    var a = this.path.getConcretePosition(n);
                    t.StatsManager.instance.addBonus(1), t.ScoreManager.instance.displayScores(t.Settings.game.PATH_FINISHED_BONUS_SCORE, !0, t.BallFactory.getRandomColor(), a.x, a.y, i, !1, !1, Phaser.Math.random(.6, .8), !0), i += t.Settings.game.PATH_FINISHED_BONUS_DELAY, n = this.path.calculateRelativePosition(n, t.Settings.game.PATH_FINISHED_BONUS_STEP), a, this.bonusPoints++
                }
                this.game.time.events.add(i + 300, this.finishPath, this)
            }, n.prototype.setStartposition = function(t) {
                this.startPosition = t
            }, n.prototype.finishPath = function() {
                this.path.isFinished = !0, this.path.pathManager.finalizeNext(this.path)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.path = null
            }, n
        }(Phaser.Group);
        t.PathFinalizer = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t) {
                var n = e.call(this, t.game, null) || this;
                return n.path = t, n
            }
            return __extends(n, e), n.prototype.start = function() {
                for (var e = this, n = this.path.calculateRelativePosition(this.path.getTotalLength(), -t.Settings.BALL_DIAMETER), i = this.path.getConcretePosition(0), a = this.path.calculateRelativePosition(0, t.Settings.game.PATH_ARROW_STEP), s = this.path.totalLength / t.Settings.game.PATH_ARROW_DURATION, o = t.Settings.game.PATH_ARROW_BASE_DELAY; a < n && a >= 0;) {
                    var r = this.path.getConcretePosition(a);
                    if (this.path.isVisible(a)) {
                        var l = Phaser.Math.angleBetween(i.x, i.y, r.x, r.y) + Math.PI / 2;
                        this.add(new t.PathArrow(r.x, r.y, l, o))
                    }
                    o += t.Settings.game.PATH_ARROW_STEP / s, a = this.path.calculateRelativePosition(a, t.Settings.game.PATH_ARROW_STEP), i = r
                }
                this.game.time.events.add(t.Settings.game.PATH_ARROW_BASE_DELAY, function() {
                    return e.game.sound.play("path_initialization", .8)
                }), this.game.time.events.add(o + 250, this.activatePath, this)
            }, n.prototype.activatePath = function() {
                this.path.pathManager.initializeNext(this.path)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.path = null
            }, n
        }(Phaser.Group);
        t.PathInitializer = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e(e) {
                this.isRewindActive = !1, this.hasLightingPowerupActivated = !1, this.targetSpeed = t.Settings.game.CHAIN_START_SPEED, this.speed = t.Settings.game.CHAIN_START_SPEED, this.useExpotentialAcceleration = !0, this.rewindCountdown = 0, this.isStartingSpeedupActive = !0, this.isWarningPointReached = !1, this.hasActiveSlowdownPowerup = !1, this.hasBallsInTheQueue = !1, this.hasBallsOnThePath = !1, this.hasEatenBalls = !1, this.path = e, this.level = e.pathManager.level, this.ballManager = e.ballManager, this.rollingBallsSound = this.path.game.add.sound("rolling_balls", 1, !0)
            }
            return e.prototype.start = function() {
                this.rollingBallsSound.play()
            }, e.prototype.update = function() {
                this.checkConditions(), this.updateTargetSpeed(), this.updateChainSpeed(), t.Settings.ENABLE_DEBUG_OUTPUT && this.level.game.debug.text("" + Phaser.Math.roundTo(this.getChainSpeed(), -1), 580, 14, "#70f0ff")
            }, e.prototype.checkConditions = function() {
                var e = this.ballManager.getLastMovingBall(),
                    n = e ? e.getAbsolutePosition() : -1;
                this.rewindCountdown -= t.Settings.REALTIME_CALCULATIONS ? this.level.game.time.elapsedMS : this.level.game.time.physicsElapsedMS, this.hasBallsInTheQueue = this.ballManager.ballFactory.ballsQueue.length > 0, this.hasBallsOnThePath = this.ballManager.getAliveBallsCount() > 0, this.hasEatenBalls = this.path.hasEatenBalls, this.isWarningPointReached = n > this.path.warningPosition, this.hasActiveSlowdownPowerup = this.level.powerupManager.hasAlivePowerups(t.PowerupType.SLOWDOWN), this.isRewindActive = !this.hasEatenBalls && (this.isRewindActive && this.rewindCountdown > 0), this.isStartingSpeedupActive = this.isStartingSpeedupActive && n < this.path.totalLength * t.Settings.game.getChainQuickFillInPercentage(), this.isRewindActive && !this.hasBallsOnThePath && (this.isRewindActive = !1, this.speed = 0)
            }, e.prototype.updateTargetSpeed = function() {
                if (this.isWarningPointReached) this.targetSpeed = t.Settings.game.getBallSpeed() * t.Settings.game.SLOWDOWN_POINT_SPEED_MULTIPLIER;
                else if (this.isStartingSpeedupActive) {
                    var e = this.ballManager.getLastMovingBall() ? this.ballManager.getLastMovingBall().getAbsolutePosition() : -1,
                        n = this.path.totalLength * t.Settings.game.getChainQuickFillInPercentage();
                    n - e < t.Settings.game.CHAIN_QUICK_FILL_IN_BREAKING_ABSOLUTE_DISTANCE ? this.speed = this.targetSpeed = t.Settings.game.getBallSpeed() + (n - e) / t.Settings.game.CHAIN_QUICK_FILL_IN_BREAKING_ABSOLUTE_DISTANCE * (t.Settings.game.CHAIN_START_SPEED - t.Settings.game.getBallSpeed()) : this.targetSpeed = t.Settings.game.CHAIN_START_SPEED
                } else this.targetSpeed = t.Settings.game.getBallSpeed();
                this.hasActiveSlowdownPowerup && (this.targetSpeed *= this.level.powerupManager.getAlivePowerup(t.PowerupType.SLOWDOWN).slowdownMultiplier), this.isRewindActive && (this.targetSpeed = t.Settings.game.REWIND_SPEED)
            }, e.prototype.updateChainSpeed = function() {
                if (this.hasEatenBalls) {
                    var e = this.ballManager.balls.length + this.ballManager.ballFactory.ballsQueue.length;
                    return this.speed = this.targetSpeed = t.Settings.game.CHAIN_LOSE_SPEED * (1 + t.Settings.game.CHAIN_LOSE_ACCELERATION_MULTIPLIER * (e / this.ballManager.ballFactory.totalBalls)), void(this.rollingBallsSound.volume = Phaser.Math.clamp(this.hasBallsOnThePath ? Math.abs(this.speed) / 850 : 0, 0, 1))
                }
                this.speed < this.targetSpeed ? (this.useExpotentialAcceleration && Phaser.Math.sign(this.speed) == Phaser.Math.sign(this.targetSpeed) ? this.speed *= t.Settings.game.PATH_EXPOTENTIAL_ACCELERATION : this.speed += t.Settings.game.PATH_ACCELERATION, this.speed > this.targetSpeed && (this.speed = this.targetSpeed, this.useExpotentialAcceleration = !1)) : this.speed > this.targetSpeed && (this.useExpotentialAcceleration && Phaser.Math.sign(this.speed) == Phaser.Math.sign(this.targetSpeed) ? this.speed /= t.Settings.game.PATH_EXPOTENTIAL_ACCELERATION : this.speed -= t.Settings.game.PATH_ACCELERATION, this.speed < this.targetSpeed && (this.speed = this.targetSpeed, this.useExpotentialAcceleration = !1)), this.rollingBallsSound.volume = Phaser.Math.clamp(this.hasBallsOnThePath ? Math.abs(this.speed) / 850 : 0, 0, 1)
            }, e.prototype.getChainSpeed = function() {
                return this.speed
            }, e.prototype.setChainSpeed = function(t, e) {
                void 0 === e && (e = !1), this.speed = t, this.useExpotentialAcceleration = e && !this.isRewindActive
            }, e.prototype.activateRewind = function() {
                this.isRewindActive = !0, this.useExpotentialAcceleration = !1, this.rewindCountdown = t.Settings.game.REWIND_POWERUP_DURATION
            }, e.prototype.pause = function() {
                this.rollingBallsSound.volume = 0
            }, e.prototype.resume = function() {}, e.prototype.destroy = function() {
                this.rollingBallsSound.stop(), this.rollingBallsSound.destroy(), this.rollingBallsSound = null, this.path = null, this.level = null, this.ballManager = null
            }, e
        }();
        t.PathSpeedManager = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(n, e), n.generatePathPointsArray = function(e, n, i) {
                for (var a = [], s = [], o = 0; o < e.length; o++) s.push(e[o][0]), s.push(e[o][1]);
                var r = t.Settings.USE_NEW_PATH_GENERATOR ? (new t.CurveCalculator).getCurvePoints(s, n) : (new t.CurveCalculator).getCurvePointsClassic(s, n, i);
                for (o = 0; o < r.length; o += 2) a.push([r[o], r[o + 1]]);
                return a
            }, n
        }(Phaser.Group);
        t.PathBuilder = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, t.App.instance, null) || this;
                return a.lifetime = t.Settings.game.POWERUP_LIFETIME, a.ball = n, a.ball.powerupType = i, a.powerupType = i, a.buildSprites(), a.buildAnimations(), a
            }
            return __extends(n, e), n.prototype.buildSprites = function() {
                this.lightSprite = this.add(this.game.make.sprite(0, 0, t.Settings.GAME_ATLAS, "powerupLight0000")), this.lightSprite.anchor.set(.5), this.iconSprite = this.add(this.game.make.sprite(2, 2, t.Settings.GAME_ATLAS, "powerupIcons000" + this.powerupType)), this.iconSprite.anchor.set(.5)
            }, n.prototype.buildAnimations = function() {
                var t = Phaser.Animation.generateFrameNames("powerupLight", 0, 22, "", 4);
                this.lightAnimation = this.lightSprite.animations.add("lightAnimation", t.concat(t.concat([]).reverse()), 60, !0), this.lightAnimation.play()
            }, n.prototype.activate = function(t) {
                t && t.activatePowerup(this.powerupType, this.ball)
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.lifetime -= this.game.time.elapsedMS, this.lifetime < 1e3 && this.lifetime > 0 && (this.alpha = this.lifetime / 1e3), this.lifetime < 0 && this.ball.removePowerup()
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.ball = null
            }, n
        }(Phaser.Group);
        t.PowerupActivator = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function t() {}
            return t.timer = function() {
                return 0
            }, t.combo = function(t) {
                var e = 5;
                switch (t) {
                    case 2:
                        e = 5;
                        break;
                    case 3:
                        e = 6;
                        break;
                    case 4:
                        e = 7;
                        break;
                    case 5:
                        e = 8;
                        break;
                    case 6:
                        e = 9
                }
                return e
            }, t.gapBonus = function(t) {
                var e = 1;
                switch (t) {
                    case 1:
                        e = 1;
                        break;
                    case 2:
                        e = 2;
                        break;
                    case 3:
                        e = 3;
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        e = 4
                }
                return e
            }, t
        }();
        t.PowerupEventType = e
    }(src || (src = {})),
    function(t) {
        ! function(t) {
            t[t.SLOWDOWN = 0] = "SLOWDOWN", t[t.REWIND = 1] = "REWIND", t[t.BOMB = 2] = "BOMB", t[t.LIGHTING = 3] = "LIGHTING", t[t.LASER = 4] = "LASER", t[t.FIREBALL = 5] = "FIREBALL"
        }(t.PowerupType || (t.PowerupType = {}))
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o) {
                var r = e.call(this, t.App.instance, null) || this;
                return r.duration = 0, r.isContinuous = !1, r.isDead = !1, r.isActive = !0, r.powerupManager = n, r.level = n.level, r.targetBall = o, r.powerupType = i, r.isContinuous = a, r.startingDuration = s, r.activate(), r
            }
            return __extends(n, e), n.prototype.activate = function() {
                this.duration = this.startingDuration, this.isActive = !0
            }, n.prototype.refresh = function(t) {
                this.targetBall = t, this.duration = this.startingDuration, this.isActive = !0
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.duration -= this.game.time.elapsedMS, this.duration <= 0 && this.killPowerup()
            }, n.prototype.killPowerup = function() {
                this.isDead = !0, this.isActive = !1, this.powerupManager.powerUps.indexOf(this) > -1 && this.powerupManager.powerUps.splice(this.powerupManager.powerUps.indexOf(this), 1), this.destroy()
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.powerupManager = null, this.level = null, this.targetBall = null
            }, n
        }(Phaser.Group);
        t.Powerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                return e.call(this, n, t.PowerupType.BOMB, !1, 0, i) || this
            }
            return __extends(n, e), n.prototype.activate = function() {
                e.prototype.activate.call(this), this.destroyBallsAround(this.targetBall.x, this.targetBall.y), this.targetBall && this.targetBall.visible && (this.level.effectsManager.addBombExplosion(this.targetBall.x, this.targetBall.y), this.game.sound.play("bomb_explosion", .8), this.game.camera.shake(.006, 350))
            }, n.prototype.destroyBallsAround = function(e, n) {
                for (var i = 0, a = 0, s = this.level.pathManager.paths; a < s.length; a++)
                    for (var o = 0, r = s[a].ballManager.balls; o < r.length; o++) {
                        var l = r[o];
                        if (l && l.isAlive && Phaser.Math.distance(e, n, l.x, l.y) <= t.Settings.game.BOMB_EXPLOSION_RADIUS) {
                            var h = l.path == this.targetBall.path;
                            h = h && (l.path.calculateRelativePosition(l.getRelativePosition(), t.Settings.game.BOMB_EXPLOSION_RADIUS) >= this.targetBall.getRelativePosition() || l.path.calculateRelativePosition(l.getRelativePosition(), -t.Settings.game.BOMB_EXPLOSION_RADIUS) <= this.targetBall.getRelativePosition()), (l.visible || h) && (i++, this.game.time.events.add(t.Settings.game.BOMB_EXPLOSION_DELAY, function(e) {
                                t.ScoreManager.instance.displayScores(t.ScoreManager.instance.calculateScores(1), !0, e.color, e.x, e.y, Phaser.Math.random(5, 200), !0, !0), e.explodeBall()
                            }, this, l))
                        }
                    }
                i > 0 && this.targetBall.ballManager.propagateImpulse(this.targetBall, 700)
            }, n
        }(t.Powerup);
        t.BombPowerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                return e.call(this, n, t.PowerupType.FIREBALL, !1, 0, i) || this
            }
            return __extends(n, e), n.prototype.activate = function() {
                e.prototype.activate.call(this), this.level.cannonManager.cannon.activateFireBall()
            }, n
        }(t.Powerup);
        t.FireballPowerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, n, t.PowerupType.LASER, !0, t.Settings.game.LASER_POWERUP_DURATION, i) || this;
                return a.laserEffect = a.powerupManager.level.cannonManager.addAt(new t.LaserEffect, 0), a.laserHighlight = a.add(a.game.make.sprite(-100, -100, t.Settings.GAME_ATLAS, "laserHighlight0000")), a.laserHighlight.anchor.set(.5), a.laserHighlight.visible = !1, a
            }
            return __extends(n, e), n.prototype.activate = function() {
                e.prototype.activate.call(this), this.game.sound.play("lazer", .4)
            }, n.prototype.postUpdate = function() {
                e.prototype.postUpdate.call(this), this.isDead || (this.position.copyFrom(new Phaser.Point(this.powerupManager.level.cannonManager.cannon.x, this.powerupManager.level.cannonManager.cannon.y - 68).rotate(this.powerupManager.level.cannonManager.cannon.x, this.powerupManager.level.cannonManager.cannon.y, this.powerupManager.level.cannonManager.cannon.rotation)), this.laserEffect.position.copyFrom(this.position), this.laserEffect.rotation = this.powerupManager.level.cannonManager.cannon.rotation, this.updateSprites(), this.duration < 1500 ? this.alpha = this.duration < 750 && Math.random() > .6 ? 0 : this.duration / 1500 : this.alpha = 1)
            }, n.prototype.updateSprites = function() {
                for (var e = null, n = Number.MAX_VALUE, i = new Phaser.Point(this.x, this.y - 1e3).rotate(this.x, this.y, this.laserEffect.rotation, !1), a = 0, s = this.powerupManager.level.pathManager.paths; a < s.length; a++)
                    for (var o = 0, r = s[a].ballManager.balls; o < r.length; o++) {
                        var l = r[o];
                        if (l && l.isAlive && !l.isUnderground) {
                            var h = t.AdvancedMath.findLineCircleIntersections(l.x, l.y, t.Settings.BALL_DIAMETER / 2, this.x, this.y, i.x, i.y, !0);
                            if (h) {
                                var c = Phaser.Math.distance(this.x, this.y, h.x, h.y);
                                c < n && (n = c, e = l, h)
                            }
                        }
                    }
                e ? (this.laserEffect.setLength(n), this.laserHighlight.visible = !0, this.laserHighlight.position.set(e.x - this.x, e.y - this.y)) : (this.laserEffect.setLength(-1), this.laserHighlight.visible = !1)
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.laserEffect.destroy(), this.laserEffect = null, this.laserHighlight.destroy(), this.laserHighlight = null
            }, n
        }(t.Powerup);
        t.LaserPowerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                return e.call(this, n, t.PowerupType.LIGHTING, !0, 1e3, i) || this
            }
            return __extends(n, e), n.prototype.activate = function() {
                var n = this;
                e.prototype.activate.call(this);
                for (var i = 0, a = Phaser.ArrayUtils.shuffle(this.getSuitableBalls()), s = [this.targetBall]; s;)
                    for (var o = 0, r = s; o < r.length; o++) {
                        var l = r[o],
                            h = this.getBallsPortion(a);
                        if (h) {
                            for (var c = 0, u = h; c < u.length; c++) {
                                var p = u[c];
                                this.add(new t.Lighting(l, p).setDelay(i))
                            }
                            i += t.Lighting.TOTAL_FRAMES / t.Lighting.FPS * 1e3 + t.Settings.game.LIGHTING_DELAY_BETWEEN_STRIKES
                        }
                        s = h
                    }
                this.game.time.events.add(i, function() {
                    return n.explodeInvisibleBalls()
                })
            }, n.prototype.refresh = function(t) {
                e.prototype.refresh.call(this, t), this.activate()
            }, n.prototype.update = function() {
                if (e.prototype.update.call(this), this.duration = this.children.length > 0 ? 1e4 : this.duration > t.Settings.LIGHTING_STRIKE_COLLAPSE_DELAY ? t.Settings.LIGHTING_STRIKE_COLLAPSE_DELAY : this.duration, 0 == this.children.length && this.duration == t.Settings.LIGHTING_STRIKE_COLLAPSE_DELAY)
                    for (var n = 0, i = this.powerupManager.level.pathManager.paths; n < i.length; n++) {
                        i[n].speedManager.hasLightingPowerupActivated = !0
                    }
            }, n.prototype.getSuitableBalls = function() {
                for (var t = [], e = 0, n = this.powerupManager.level.pathManager.paths; e < n.length; e++)
                    for (var i = 0, a = n[e].ballManager.balls; i < a.length; i++) {
                        var s = a[i];
                        s && s.isAlive && s.visible && s != this.targetBall && s.color == this.targetBall.color && t.push(s)
                    }
                return t
            }, n.prototype.getBallsPortion = function(e) {
                if (0 == e.length) return null;
                if (e.length < t.Settings.game.LIGHTING_MIN_TARGETS) return e.splice(0, e.length);
                var n = t.Settings.game.LIGHTING_MIN_TARGETS + Math.floor(Math.random() * (t.Settings.game.LIGHTING_MAX_TARGETS + 1 - t.Settings.game.LIGHTING_MIN_TARGETS));
                return e.splice(0, n > e.length ? e.length : n)
            }, n.prototype.explodeInvisibleBalls = function() {
                for (var e = 0, n = this.powerupManager.level.pathManager.paths; e < n.length; e++)
                    for (var i = 0, a = n[e].ballManager.balls; i < a.length; i++) {
                        var s = a[i];
                        s && s.isAlive && !s.visible && s != this.targetBall && s.color == this.targetBall.color && (t.ScoreManager.instance.displayScores(t.ScoreManager.instance.calculateScores(1), !1, s.color, s.x, s.y, Phaser.Math.random(5, 150), !0, !0), s.explodeBall())
                    }
            }, n
        }(t.Powerup);
        t.LightingPowerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                return e.call(this, n, t.PowerupType.REWIND, !1, t.Settings.game.REWIND_POWERUP_DURATION, i) || this
            }
            return __extends(n, e), n.prototype.activate = function() {
                e.prototype.activate.call(this);
                for (var t = 0, n = this.powerupManager.level.pathManager.paths; t < n.length; t++) {
                    var i = n[t];
                    this.game.sound.play("rewind", .7), i.speedManager.activateRewind()
                }
            }, n
        }(t.Powerup);
        t.RewindPowerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i) {
                var a = e.call(this, n, t.PowerupType.SLOWDOWN, !0, t.Settings.game.SLOWDOWN_POWERUP_DURATION, i) || this;
                return a.isFrozen = !1, a.isMelted = !1, a.countdown = 0, a.slowdownMultiplier = 1, a.countdown = a.startingDuration, a
            }
            return __extends(n, e), n.prototype.activate = function() {
                e.prototype.activate.call(this), this.isActive = !1, this.slowdownMultiplier = 1, this.freezeEffect = this.add(new t.FreezeEffect(this)), this.freezeEffect.freeze()
            }, n.prototype.refresh = function(t) {
                e.prototype.refresh.call(this, t), this.countdown = this.startingDuration, this.isActive = !1, this.isFrozen = !1, this.isMelted = !1, this.slowdownMultiplier = 1, this.freezeEffect.freeze()
            }, n.prototype.onFrozen = function() {
                this.isFrozen = !0
            }, n.prototype.onMelted = function() {
                this.isMelted = !0, this.duration = 0
            }, n.prototype.update = function() {
                e.prototype.update.call(this), this.isDead || (this.duration = this.startingDuration, this.isMelted ? this.killPowerup() : this.isFrozen && !this.isMelted && (this.countdown -= this.game.time.elapsedMS, this.countdown <= 0 && (this.isActive = !0, this.freezeEffect.melt(), this.countdown = Number.MAX_VALUE)))
            }, n
        }(t.Powerup);
        t.SlowdownPowerup = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a, s, o, r) {
                var l = e.call(this, t.App.instance, null) || this;
                return l.tunnelManager = n, l.path = i, l.startPoint = i.pathPoints[a], l.endPoint = i.pathPoints[o], l.startPosition = a, l.endPosition = o, l.entrancePosition = l.path.calculateRelativePosition(a, -60), l.entrancePosition = l.entrancePosition < 0 ? a : l.entrancePosition, l.exitPosition = l.path.calculateRelativePosition(o, 45), l.exitPosition = l.exitPosition < 0 ? o : l.exitPosition, l.entranceBottom = l.tunnelManager.level.backgroundManager.add(new t.TunnelBottom(l.startPoint.x, l.startPoint.y, s)), l.entranceTop = l.add(new t.TunnelTop(l.startPoint.x, l.startPoint.y, s)), l.exitBottom = l.tunnelManager.level.backgroundManager.add(new t.TunnelBottom(l.endPoint.x, l.endPoint.y, r)), l.exitTop = l.add(new t.TunnelTop(l.endPoint.x, l.endPoint.y, r)), l
            }
            return __extends(n, e), n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.tunnelManager = null, this.path = null, this.startPoint = null, this.endPoint = null, this.entranceTop = null, this.entranceBottom = null, this.exitTop = null, this.exitBottom = null
            }, n
        }(Phaser.Group);
        t.Tunnel = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a) {
                var s = e.call(this, t.App.instance, n, i, t.Settings.GAME_ATLAS, "tunnelBot0000") || this;
                return s.anchor.set(.5, -.3), s.rotation = a, s
            }
            return __extends(n, e), n
        }(Phaser.Sprite);
        t.TunnelBottom = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a) {
                var s = e.call(this, t.App.instance, n, i, t.Settings.GAME_ATLAS, "tunnelTop0000") || this;
                return s.anchor.set(.5, .35), s.rotation = a, s
            }
            return __extends(n, e), n
        }(Phaser.Sprite);
        t.TunnelTop = e
    }(src || (src = {})),
    function(t) {
        var e, n = function() {
            function n() {
                this.soundInstances = {}, this.swapSoundIndex = 1, this.defaultMusicVolume = .3, this.chokedMusicVolume = .1, this.defaultMusicVolume = t.App.instance.device.desktop ? .3 : .25, this.menuTheme = t.App.instance.add.sound("themeA", this.defaultMusicVolume, !0), this.gameplayThemeA = t.App.instance.add.sound("themeB", this.defaultMusicVolume, !1), this.gameplayThemeB = t.App.instance.add.sound("themeC", this.defaultMusicVolume, !1)
            }
            return Object.defineProperty(n, "instance", {
                get: function() {
                    return n._instance ? n._instance : n._instance = new n
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.isDecodingSupported = function() {
                return t.App.instance.sound.usingWebAudio
            }, n.prototype.switchToMenuMusic = function() {
                this.mode != e.MENU_MUSIC && (this.mode = e.MENU_MUSIC, this.removeListeners(), this.stopMusic(), this.currentTheme = this.menuTheme.play("", 0, 0), this.currentTheme.fadeTo(1500, this.defaultMusicVolume))
            }, n.prototype.switchToInGameMusic = function() {
                this.mode != e.GAMEPLAY_MUSIC && (this.stopMusic(), this.mode = e.GAMEPLAY_MUSIC, this.addListeners(), this.currentTheme = Math.random() > .5 ? this.gameplayThemeA.play("", 0, 0) : this.gameplayThemeB.play("", 0, 0), this.currentTheme.fadeTo(1200, this.defaultMusicVolume))
            }, n.prototype.stopMusic = function() {
                this.menuTheme.isPlaying && this.menuTheme.stop(), this.gameplayThemeA.isPlaying && this.gameplayThemeA.stop(), this.gameplayThemeB.isPlaying && this.gameplayThemeB.stop()
            }, n.prototype.switchGameplayTheme = function() {
                this.mode == e.GAMEPLAY_MUSIC && (this.currentTheme == this.gameplayThemeA ? this.currentTheme = this.gameplayThemeB.play() : this.currentTheme == this.gameplayThemeB && (this.currentTheme = this.gameplayThemeA.play()))
            }, n.prototype.addListeners = function() {
                var t = this;
                this.gameplayThemeA.onStop.add(function() {
                    t.switchGameplayTheme()
                }), this.gameplayThemeB.onStop.add(function() {
                    t.switchGameplayTheme()
                })
            }, n.prototype.removeListeners = function() {
                this.gameplayThemeA.onStop.removeAll(), this.gameplayThemeB.onStop.removeAll()
            }, n.prototype.playSwapSound = function() {
                t.App.instance.sound.play("ball_swap0" + (this.swapSoundIndex++ % 2 + 1), .7)
            }, n.prototype.chokeMusicVolume = function(t) {
                void 0 === t && (t = 500), this.currentTheme && this.currentTheme.fadeTo(t, this.chokedMusicVolume)
            }, n.prototype.restoreMusicVolume = function(t) {
                void 0 === t && (t = 500), this.currentTheme && this.currentTheme.fadeTo(t, this.defaultMusicVolume)
            }, n._instance = null, n
        }();
        t.SoundController = n,
            function(t) {
                t[t.MENU_MUSIC = 0] = "MENU_MUSIC", t[t.GAMEPLAY_MUSIC = 1] = "GAMEPLAY_MUSIC"
            }(e = t.MusicMode || (t.MusicMode = {}))
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(n, e), n.prototype.init = function(n, i) {
                void 0 === n && (n = t.CustomScaleManager.ORIGINAL_WIDTH), void 0 === i && (i = t.CustomScaleManager.ORIGINAL_HEIGHT), e.prototype.init.call(this), this.containerWidth = n, this.containerHeight = i, this.container = this.add.existing(this.game.make.group(null)), this.resize()
            }, n.prototype.addChild = function(t) {
                return this.container.add(t)
            }, n.prototype.getInputPosition = function() {
                return new Phaser.Point((this.game.input.activePointer.x - this.container.x) / t.CustomScaleManager.SCALE_X, (this.game.input.activePointer.y - this.container.y) / t.CustomScaleManager.SCALE_Y)
            }, n.prototype.resize = function(e, n) {
                void 0 === e && (e = 0), void 0 === n && (n = 0), this.container.scale.set(t.CustomScaleManager.SCALE_X, t.CustomScaleManager.SCALE_Y), this.container.position.set(t.CustomScaleManager.WIDTH / 2 - this.containerWidth * t.CustomScaleManager.SCALE_X / 2, t.CustomScaleManager.HEIGHT / 2 - this.containerHeight * t.CustomScaleManager.SCALE_Y / 2)
            }, n.prototype.shutdown = function() {
                this.container.destroy(), this.container = null
            }, n
        }(Phaser.State);
        t.AutoResizeableState = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(n, e), n.prototype.init = function() {
                this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE, this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE, this.game.scale.pageAlignHorizontally = !0, this.game.scale.pageAlignVertically = !0, this.game.device.android && (this.game.input.mouse.enabled = !this.game.device.mspointer), this.game.scale.setResizeCallback(this.resizeCallback, this), this.game.scale.onSizeChange.add(this.sizeChanged, this)
            }, n.prototype.preload = function() {
                this.game.load.atlas(t.Settings.PRELOADER_ATLAS, "img/" + t.Settings.PRELOADER_ATLAS + ".png", "img/" + t.Settings.PRELOADER_ATLAS + ".json")
            }, n.prototype.create = function() {
                this.input.maxPointers = 1, this.stage.disableVisibilityChange = !0, this.game.device.desktop && (this.game.canvas.oncontextmenu = function(t) {
                    t.preventDefault()
                }), this.game.state.start("Preloader", !0, !1)
            }, n.prototype.resizeCallback = function(t, e) {}, n.prototype.sizeChanged = function(e, n, i) {
                t.CustomScaleManager.update(n, i)
            }, n
        }(Phaser.State);
        t.Boot = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(n, e), n.prototype.create = function() {
                var e = this;
                this.maskGraphics = this.addChild(this.game.make.graphics(0, 0));
				this.maskGraphics.beginFill(0, 1).drawRect(0, 0, t.CustomScaleManager.ORIGINAL_WIDTH, t.CustomScaleManager.ORIGINAL_HEIGHT).endFill();
				this.maskedContainer = this.addChild(this.game.make.group(null));
				this.gameStateManager = this.maskedContainer.add(new t.GameStateManager(this));
				this.backgroundManager = this.maskedContainer.add(new t.BackgroundManager(this));
				this.touchInputManager = this.maskedContainer.add(new t.TouchInputManager(this));
				this.wayManager = this.maskedContainer.add(new t.WayManager(this));
				this.pathManager = this.maskedContainer.add(new t.PathManager(this));
				this.daemonManager = this.maskedContainer.add(new t.DaemonManager(this));
				this.coinManager = this.maskedContainer.add(new t.CoinManager(this));
				this.cannonManager = this.maskedContainer.add(new t.CannonManager(this));
				this.powerupManager = this.maskedContainer.add(new t.PowerupManager(this));
				this.foregroundManager = this.addChild(new t.ForegroundManager(this));
				this.uiManager = this.addChild(new t.UIManager(this));
				this.effectsManager = this.addChild(new t.EffectsManager(this));
				this.maskedContainer.mask = this.maskGraphics;
				t.Settings.MUSIC_ENABLED_BY_DEFAULT && (t.SoundController.instance.restoreMusicVolume(), t.SoundController.instance.switchToInGameMusic());
				t.StatsManager.instance.clear();
				t.ScoreManager.instance.clear();
				this.pathManager.buildPaths();
				this.daemonManager.buildDaaemons();
				this.wayManager.buildTexture();
				this.coinManager.buildCoins();
				this.cannonManager.buildAll();
				t.TutorialManager.instance.dispatchLevelStart(function() {
                    return e.gameStateManager.startInitialization()
                }), t.WindowManager.instance.endTransition(), gradle.event('SCREEN_LEVEL'), gradle.event('EVENT_LEVELSTART', {
                    levelName: "" + t.Settings.CURRENT_LEVEL
                })
            }, n.prototype.update = function() {
                this.gameStateManager.isStarted && !this.gameStateManager.isPaused && (t.StatsManager.instance.update(), t.ScoreManager.instance.update())
            }, n.prototype.shutdown = function() {
                this.gameStateManager.destroy(), this.gameStateManager = null, this.backgroundManager.destroy(), this.backgroundManager = null, this.touchInputManager.destroy(), this.touchInputManager = null, this.pathManager.destroy(), this.pathManager = null, this.daemonManager.destroy(), this.daemonManager = null, this.wayManager.destroy(), this.wayManager = null, this.coinManager.destroy(), this.coinManager = null, this.cannonManager.destroy(), this.cannonManager = null, this.effectsManager.destroy(), this.effectsManager = null, this.powerupManager.destroy(), this.powerupManager = null, this.foregroundManager.destroy(), this.foregroundManager = null, this.uiManager.destroy(), this.uiManager = null
            }, n
        }(t.AutoResizeableState);
        t.Level = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.digitContainerRadius = 444, t.angleBetweenDigits = Math.PI / 6, t._currentLevelIndex = 0, t.angularSpeed = 0, t.currentStep = 1, t.isSpinning = !1, t.isPlayButtonEnabled = !0, t.isWheelPressed = !1, t.dragDeltaAngle = 0, t
            }
            return __extends(n, e), n.prototype.create = function() {
                this.wheelSoundLastTimestamp = this.game.time.now, this.buildContent(), this.updateSoundButtons(), t.TutorialManager.instance.dispatchLevelsMapOpening(), t.WindowManager.instance.endTransition(), gradle.event('SCREEN_LEVELSELECT')
            }, n.prototype.buildContent = function() {
                this.maskGraphics = this.addChild(this.game.make.graphics(0, -t.CustomScaleManager.ORIGINAL_WIDTH / 2));
				this.maskGraphics.beginFill(0, 1).drawRect(0, 0, t.CustomScaleManager.ORIGINAL_WIDTH, 3 * t.CustomScaleManager.ORIGINAL_WIDTH).endFill(); this.container.mask = this.maskGraphics;
				/*
				this.backgroundImage = this.addChild(this.game.make.image(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2, "mainMenu"));
				this.backgroundImage.anchor.set(.5);
				*/ 
				this.responsiveContainer = this.addChild(this.game.make.group(null));
				
				this.circleBackgroundLeft = this.responsiveContainer.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2 - 224, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 - 142, t.Settings.UI_ATLAS, "digitContainerBackground0000"));
				this.circleBackgroundLeft.anchor.set(.5, .5);
				this.circleBackgroundCenter = this.responsiveContainer.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2 - 3, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 - 207, t.Settings.UI_ATLAS, "digitContainerBackground0000"));
				this.circleBackgroundCenter.anchor.set(.5, .5);
				this.circleBackgroundRight = this.responsiveContainer.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2 + 220, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 - 142, t.Settings.UI_ATLAS, "digitContainerBackground0000"));
				this.circleBackgroundRight.anchor.set(.5, .5);
				
				this.digitContainer = this.responsiveContainer.add(this.game.make.group(null));
				this.digitContainer.position.set(t.CustomScaleManager.ORIGINAL_WIDTH / 2 - 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 236);
				
				this.levelsImage = this.responsiveContainer.add(this.game.make.image(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT, "levels"));
				this.levelsImage.anchor.set(.5, 1);
				
				this.arrow = this.responsiveContainer.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 - 380, t.Settings.UI_ATLAS, "levelsArrow0000"));
				this.arrow.anchor.set(.5, 0);
				
				this.wheel = this.responsiveContainer.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2 - 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 184, t.Settings.UI_ATLAS, "levelsWheel0000"));
				this.wheel.anchor.set(.5, .5);
				
				this.buttonHome = this.addChild(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonHomeLevels", t.CustomScaleManager.ORIGINAL_WIDTH / 2 + 240, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 - 400, this.menuClicked, this));
				this.buttonHome.anchor.set(.5);
				
				this.playButton = this.responsiveContainer.add(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 185, t.Settings.UI_ATLAS, "levelsPlayButton0000"));
				this.playButton.inputEnabled = !0;
				this.playButton.input.useHandCursor = !0;
				this.playButton.input.pixelPerfectClick = !0;
				this.playButton.events.onInputDown.add(this.onPlayButtonDown, this);
				this.playButton.events.onInputUp.add(this.onPlayButtonUp, this);
				this.playButton.anchor.set(.5);
				
				this.buildLevelNumbers();
				this.resize(0, 0);
            }, n.prototype.buildLevelNumbers = function() {
                for (var e = 1; e <= t.Settings.TOTAL_LEVELS; e++) 
					this.digitContainer.add(new t.LevelIndicator(e, e > t.Settings.LAST_UNLOCKED_LEVEL && !gradle.unlock_all_levels));
				
                this.currentLevelIndex = t.Settings.CURRENT_LEVEL < 1 ? 1 : t.Settings.LAST_UNLOCKED_LEVEL > t.Settings.TOTAL_LEVELS ? t.Settings.TOTAL_LEVELS : t.Settings.LAST_UNLOCKED_LEVEL, this.wheel.rotation = 2 * (t.Settings.LAST_UNLOCKED_LEVEL - 1) * Math.PI / t.Settings.LEVELS_WHEEL_AMPLIFIER, this.updateWheel(0), n.firstTimeSpinned ? this.addListeners() : (this.playButton.alpha = 0, n.firstTimeSpinned = !0, this.angularSpeed = 0, this.currentStep = 18, this.isSpinning = !0)
            }, n.prototype.update = function() {
                e.prototype.update.call(this, this.game), this.isSpinning ? (this.angularSpeed = 3.15 * (1 / Math.sqrt(this.currentStep) - .0577), this.currentStep += 1, this.angularSpeed < 0 ? (this.isSpinning = !1, this.addListeners(), this.finalizeWheelRotation()) : this.updateWheel(this.angularSpeed, 1)) : this.isWheelPressed && (this.updateWheel(this.getDeltaAngle(this.wheel.rotation, Phaser.Math.angleBetween(this.wheel.x, this.wheel.y, this.getInputPosition().x - this.responsiveContainer.x, this.getInputPosition().y - this.responsiveContainer.y) + Math.PI / 2 - this.dragDeltaAngle)), this.isPlayButtonEnabled && Phaser.Math.distance(this.playButton.x, this.playButton.y, this.getInputPosition().x - this.responsiveContainer.x, this.getInputPosition().y - this.responsiveContainer.y) > this.playButton.width / 2 && this.hidePlayButton())
            }, n.prototype.resize = function(n, i) {
                e.prototype.resize.call(this, n, i), this.responsiveContainer && (this.buttonHome.y = 80 - (Math.min(t.CustomScaleManager.HEIGHT / t.CustomScaleManager.SCALE_Y, 2 * t.CustomScaleManager.ORIGINAL_WIDTH) - t.CustomScaleManager.ORIGINAL_HEIGHT) / 2, this.responsiveContainer.y = (Math.min(t.CustomScaleManager.HEIGHT / t.CustomScaleManager.SCALE_Y, 2 * t.CustomScaleManager.ORIGINAL_WIDTH) - t.CustomScaleManager.ORIGINAL_HEIGHT) / 2)
            }, n.prototype.easeIn = function(t, e) {
                return Math.pow(t, e)
            }, n.prototype.getNormalizedLevelIndex = function(e) {
                return (e >= 0 ? e % t.Settings.TOTAL_LEVELS : t.Settings.TOTAL_LEVELS + e % t.Settings.TOTAL_LEVELS) % t.Settings.TOTAL_LEVELS
            }, n.prototype.getDeltaAngle = function(t, e) {
                var n = Phaser.Math.normalizeAngle(t),
                    i = Phaser.Math.normalizeAngle(e);
                return Math.abs(i - n) > Math.PI && (n < i ? n += 2 * Math.PI : i += 2 * Math.PI), i - n
            }, n.prototype.updateVisibleNumbers = function() {
                this.digitContainer.children.forEach(function(t) {
                    return t.visible = !1
                }), this.showAt(this.getDigit(this.currentLevelIndex, -1), -1), this.showAt(this.getDigit(this.currentLevelIndex, 0), 0), this.showAt(this.getDigit(this.currentLevelIndex, 1), 1)
            }, n.prototype.getDigit = function(e, n) {
                var i = (e + n) % t.Settings.TOTAL_LEVELS <= 0 ? t.Settings.TOTAL_LEVELS : (e + n) % t.Settings.TOTAL_LEVELS;
                return this.digitContainer.getChildAt(i - 1)
            }, n.prototype.showAt = function(t, e) {
                t.visible = !0;
                var n = new Phaser.Point(0, -this.digitContainerRadius);
                n.rotate(0, 0, e * this.angleBetweenDigits, !1), t.position.copyFrom(n), t.rotation = e * this.angleBetweenDigits
            }, n.prototype.updateWheel = function(e, n) {
                void 0 === n && (n = t.Settings.LEVELS_WHEEL_EASING_POWER), this.wheel.rotation += e;
                var i = -this.wheel.rotation * this.angleBetweenDigits / (2 * Math.PI) * t.Settings.LEVELS_WHEEL_AMPLIFIER;
                this.currentLevelIndex = this.getNormalizedLevelIndex(-Math.floor(i / this.angleBetweenDigits + .5)) + 1;
                for (var a = i / this.angleBetweenDigits; a < .5 - t.Settings.TOTAL_LEVELS;) a += t.Settings.TOTAL_LEVELS;
                for (; a > .5;) a -= t.Settings.TOTAL_LEVELS;
                var s = Math.abs(a) + 1 - this.currentLevelIndex;
                a > 0 && (s = -s % .5), this.updateVisibleNumbers(), this.digitContainer.rotation = s > 0 ? -this.angleBetweenDigits / 2 * this.easeIn(2 * Math.abs(s), n) : this.angleBetweenDigits / 2 * this.easeIn(2 * Math.abs(s), n)
            }, n.prototype.finalizeWheelRotation = function() {
                var e = this,
                    n = this.wheel.rotation % (2 * Math.PI / t.Settings.LEVELS_WHEEL_AMPLIFIER);
                0 != n ? (n = Math.abs(n) > Math.PI / t.Settings.LEVELS_WHEEL_AMPLIFIER ? 2 * Phaser.Math.sign(n) * Math.PI / t.Settings.LEVELS_WHEEL_AMPLIFIER - n : -n, this.game.add.tween(this.wheel).to({
                    rotation: this.wheel.rotation + n
                }, 400 * Math.abs(n) / (Math.PI / t.Settings.LEVELS_WHEEL_AMPLIFIER), Phaser.Easing.Quadratic.Out, !0).onUpdateCallback(function() {
                    return e.updateWheel(0)
                }).onComplete.add(function() {
                    e.updateWheel(0), e.showPlayButton()
                })) : this.showPlayButton()
            }, n.prototype.showPlayButton = function() {
                (this.currentLevelIndex <= t.Settings.LAST_UNLOCKED_LEVEL || gradle.unlock_all_levels) && (this.isPlayButtonEnabled = !0, this.game.tweens.removeFrom(this.playButton), this.game.tweens.removeFrom(this.playButton.scale), this.playButton.visible = !0, this.game.add.tween(this.playButton).to({
                    alpha: 1
                }, 170, Phaser.Easing.Cubic.Out, !0), this.game.add.tween(this.playButton.scale).to({
                    x: 1,
                    y: 1
                }, 170, Phaser.Easing.Cubic.Out, !0))
            }, n.prototype.hidePlayButton = function() {
                var t = this;
                this.isPlayButtonEnabled = !1, this.game.tweens.removeFrom(this.playButton), this.game.tweens.removeFrom(this.playButton.scale), this.game.add.tween(this.playButton).to({
                    alpha: 0
                }, 150, Phaser.Easing.Cubic.In, !0).onComplete.add(function() {
                    t.playButton.visible = !1
                }), this.game.add.tween(this.playButton.scale).to({
                    x: .8,
                    y: .8
                }, 150, Phaser.Easing.Cubic.In, !0)
            }, n.prototype.animateArrow = function(e, n) {
                var i = this,
                    a = Math.abs(e - n) >= t.Settings.TOTAL_LEVELS - 1 ? e < n ? -1 : 1 : e < n ? 1 : -1;
                this.game.add.tween(this.arrow).to({
                    rotation: a * t.Settings.LEVELS_ARROW_ANGLE
                }, 75, Phaser.Easing.Linear.None, !0, 0).onComplete.add(function() {
                    return i.game.add.tween(i.arrow).to({
                        rotation: 0
                    }, 75, Phaser.Easing.Linear.None, !0, 0)
                })
            }, n.prototype.addListeners = function() {
                this.wheel.inputEnabled = !0, this.wheel.events.onInputDown.add(this.handleWheelInputDown, this), this.game.input.onUp.add(this.handleInputUp, this)
            }, n.prototype.onPlayButtonDown = function() {
                this.playButton.frameName = "levelsPlayButton0001", this.handleWheelInputDown()
            }, n.prototype.onPlayButtonUp = function() {
                this.playButton.frameName = "levelsPlayButton0000", this.isPlayButtonEnabled && 1 == this.playButton.alpha && Phaser.Math.distance(this.playButton.x, this.playButton.y, this.getInputPosition().x - this.responsiveContainer.x, this.getInputPosition().y - this.responsiveContainer.y) < this.playButton.width / 2 ? this.onStartLevelPressed() : this.handleInputUp()
            }, n.prototype.handleWheelInputDown = function() {
                this.game.tweens.removeFrom(this.wheel), this.isWheelPressed = !0, this.dragDeltaAngle = this.getDeltaAngle(this.wheel.rotation, Phaser.Math.angleBetween(this.wheel.x, this.wheel.y, this.getInputPosition().x - this.responsiveContainer.x, this.getInputPosition().y - this.responsiveContainer.y) + Math.PI / 2)
            }, n.prototype.handleInputUp = function() {
                this.isWheelPressed && (this.isWheelPressed = !1, this.finalizeWheelRotation(), this.showPlayButton())
            }, n.prototype.onStartLevelPressed = function() {
                (this.currentLevelIndex <= t.Settings.LAST_UNLOCKED_LEVEL || gradle.unlock_all_levels) && (this.game.sound.play("click", .9), t.Settings.CURRENT_LEVEL = this.currentLevelIndex > t.Settings.TOTAL_LEVELS ? t.Settings.TOTAL_LEVELS : this.currentLevelIndex < 1 ? 1 : this.currentLevelIndex, t.LevelManager.instance.cachedLevel = t.LevelStorage.instance.getLevel(t.Settings.CURRENT_LEVEL), t.WindowManager.instance.transitionTo("Level"))
            }, n.prototype.menuClicked = function() {
                this.game.sound.play("click", .9), t.WindowManager.instance.transitionTo("MainMenu")
            }, n.prototype.soundOnClicked = function() {
                this.game.sound.mute = !0, this.updateSoundButtons(), this.game.sound.play("click", .9)
            }, n.prototype.soundOffClicked = function() {
                this.game.sound.mute = !1, this.updateSoundButtons(), this.game.sound.play("click", .9)
            }, n.prototype.updateSoundButtons = function() {}, Object.defineProperty(n.prototype, "currentLevelIndex", {
                get: function() {
                    return this._currentLevelIndex
                },
                set: function(e) {
                    0 != e && e != this._currentLevelIndex && this.game.time.now - this.wheelSoundLastTimestamp > t.Settings.LEVELS_WHEEL_MIN_SOUND_INTERVAL && (t.App.instance.sound.play("wheel", .7), this.animateArrow(this._currentLevelIndex, e), this.wheelSoundLastTimestamp = this.game.time.now, this.isPlayButtonEnabled && this.hidePlayButton(), this.isWheelPressed && t.TutorialManager.instance.dispatchWheelRotate(this.wheel.x, this.wheel.y)), this._currentLevelIndex = e
                },
                enumerable: !0,
                configurable: !0
            }), n.firstTimeSpinned = !1, n
        }(t.AutoResizeableState);
        t.LevelsMap = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(n, e), n.prototype.create = function() {
                this.game.time.advancedTiming = !0, this.buildContent(), localStorage.getItem("muted") && (game.sound.mute = !0), this.updateSoundButtons(), t.Settings.MUSIC_ENABLED_BY_DEFAULT && t.SoundController.instance.switchToMenuMusic(), t.WindowManager.instance.endTransition(), gradle.event('SCREEN_HOME')
            }, n.prototype.buildContent = function() {
                var e = this;
                this.maskGraphics = this.addChild(this.game.make.graphics(0, -t.CustomScaleManager.ORIGINAL_WIDTH / 4)), this.maskGraphics.beginFill(0, 1).drawRect(0, 0, t.CustomScaleManager.ORIGINAL_WIDTH, 3 * t.CustomScaleManager.ORIGINAL_WIDTH).endFill(), this.container.mask = this.maskGraphics, /*this.backgroundImage = this.addChild(this.game.make.image(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2, "mainMenu")), this.backgroundImage.anchor.set(.5),*/ this.bottomGrass = this.addChild(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT, t.Settings.UI_ATLAS, "menuGrassBottom0000")), this.bottomGrass.anchor.set(.5, 1), this.logo = this.addChild(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, -18, t.Settings.UI_ATLAS, "gameLogo0000")), this.logo.anchor.set(.5), this.subLogo = this.addChild(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, 210, t.Settings.UI_ATLAS, "gameSubLogo0000")), this.subLogo.anchor.set(.5), 
				this.monster = this.addChild(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, -480, t.Settings.UI_ATLAS, "monsterMainMenu0000")), 
				this.monster.anchor.set(.5, 1), 
				this.foregroundGrass = this.addChild(this.game.make.sprite(t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 128, t.Settings.UI_ATLAS, "grassMainMenu0000")), 
				this.foregroundGrass.anchor.set(.5), 
				
				this.buttonPlay = this.addChild(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonPlayMainMenu", t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 260, this.playClicked, this)), this.buttonPlay.scale.set(.9), this.buttonPlay.anchor.set(.5), this.buttonCredits = this.addChild(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonCreditsMainMenu", t.CustomScaleManager.ORIGINAL_WIDTH / 2 - 230, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 400, this.creditsClicked, this)), this.buttonCredits.anchor.set(.5), this.buttonSoundOn = this.addChild(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonSoundOnMainMenu", t.CustomScaleManager.ORIGINAL_WIDTH / 2 + 230, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 400, this.soundOnClicked, this)), this.buttonSoundOn.anchor.set(.5), this.buttonSoundOff = this.addChild(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonSoundOffMainMenu", t.CustomScaleManager.ORIGINAL_WIDTH / 2 + 230, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 400, this.soundOffClicked, this)), this.buttonSoundOff.anchor.set(.5), this.resize(0, 0), this.animateContent()
            }, n.prototype.resize = function(n, i) {
                e.prototype.resize.call(this, n, i), this.bottomGrass && (this.bottomGrass.y = t.CustomScaleManager.ORIGINAL_HEIGHT + (Math.min(t.CustomScaleManager.HEIGHT / t.CustomScaleManager.SCALE_Y, 2 * t.CustomScaleManager.ORIGINAL_WIDTH) - t.CustomScaleManager.ORIGINAL_HEIGHT) / 2)
            }, n.prototype.animateContent = function() {
                var e = this;
                this.monster.y = -480, this.monster.scale.set(1, 1), this.game.add.tween(this.monster).to({
                    y: t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 140
                }, 820, Phaser.Easing.Cubic.In, !0, 100).onComplete.add(function() {
                    e.game.sound.play("idol_hit_main_menu", .7), e.game.camera.shake(.008, 250)
                }), this.game.add.tween(this.monster.scale).to({
                    x: 1.11,
                    y: .88
                }, 120, Phaser.Easing.Linear.None, !0, 800, 0, !0).onComplete.add(function() {
                    var t = e.game.add.tween(e.monster.scale).to({
                            x: 1.01,
                            y: .99
                        }, 1500, Phaser.Easing.Sinusoidal.Out, !0),
                        n = e.game.add.tween(e.monster.scale).to({
                            x: .99,
                            y: 1.01
                        }, 1500, Phaser.Easing.Sinusoidal.In);
                    t.chain(n), n.chain(t)
                }), this.logo.y = -340, this.game.add.tween(this.logo).to({
                    y: 140
                }, 800, Phaser.Easing.Back.Out, !0, 850), this.subLogo.alpha = 0, this.subLogo.y = 235, this.subLogo.scale.set(.5), this.game.add.tween(this.subLogo.scale).to({
                    x: 1,
                    y: 1
                }, 300, Phaser.Easing.Sinusoidal.Out, !0, 1450), this.game.add.tween(this.subLogo).to({
                    alpha: 1,
                    y: 215
                }, 300, Phaser.Easing.Linear.None, !0, 1450).onComplete.add(function() {
                    e.game.add.tween(e.subLogo.scale).to({
                        x: 1.02,
                        y: 1.02
                    }, 1500, Phaser.Easing.Linear.None, !0, 0, -1, !0)
                })
            }, n.prototype.playClicked = function() {
                this.game.sound.play("click", .9), t.WindowManager.instance.transitionTo("LevelsMap")
            }, n.prototype.moreClicked = function() {
                this.game.sound.play("click", .9), t.App.instance.navigateToSponsor()
            }, n.prototype.creditsClicked = function() {
                this.game.sound.play("click", .9), t.WindowManager.instance.showCredits()
            }, n.prototype.soundOnClicked = function() {
                this.game.sound.mute = !0, this.updateSoundButtons(), this.game.sound.play("click", .9), gradle.event('EVENT_VOLUMECHANGE', {
                    bgmVolume: 0,
                    sfxVolume: 0
                }), localStorage.setItem("muted", !0)
            }, n.prototype.soundOffClicked = function() {
                this.game.sound.mute = !1, this.updateSoundButtons(), this.game.sound.play("click", .9), gradle.event('EVENT_VOLUMECHANGE', {
                    bgmVolume: 1,
                    sfxVolume: 1
                }), localStorage.removeItem("muted")
            }, n.prototype.updateSoundButtons = function() {
                this.game.sound.mute ? (this.buttonSoundOn.visible = !1, this.buttonSoundOff.visible = !0) : (this.buttonSoundOn.visible = !0, this.buttonSoundOff.visible = !1)
            }, n
        }(t.AutoResizeableState);
        t.MainMenu = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(n, e), n.prototype.preload = function() {
                t.Settings.ENABLE_PRELOADER_OUTPUT && this.enableDebugOutput(), this.preloaderIcon = this.addChild(this.game.make.sprite(this.containerWidth / 2 - 5, this.containerHeight / 2 - 140, t.Settings.PRELOADER_ATLAS, "preloaderIcon0000")), this.preloaderIcon.anchor.setTo(.5, .5), this.game.add.tween(this.preloaderIcon.scale).to({
                    x: .96,
                    y: .96
                }, 1e3, Phaser.Easing.Linear.None, !0, 0, -1, !0), 
				this.preloaderBack = this.addChild(this.game.make.sprite(this.containerWidth / 2 + 2, this.containerHeight / 2 + 2, t.Settings.PRELOADER_ATLAS, "preloaderBack0000")), 
				this.preloaderBack.anchor.setTo(.5, .5), 
				this.preloaderBar = this.addChild(this.game.make.sprite(this.containerWidth / 2 - 181, this.containerHeight / 2, t.Settings.PRELOADER_ATLAS, "preloaderBar0000")), 
				this.preloaderBar.anchor.setTo(0, .5), 
				this.originalBarWidth = this.preloaderBar.width, 
				this.preloaderFront = this.addChild(this.game.make.sprite(this.containerWidth / 2, this.containerHeight / 2, t.Settings.PRELOADER_ATLAS, "preloaderFront0000")), 
				this.preloaderFront.anchor.setTo(.5, .5), 
				this.addChild(t.TextUtils.getShadowText(t.Settings.GAME_VERSION, 6, 6, 12, "#ffffff", "#462B1F", 1, 4)), 
				this.preloadText = t.TextUtils.getShadowText("0%", this.containerWidth / 2, this.containerHeight / 2, 32, "#ffffff", "#462B1F", 0, 5), 
				this.addChild(this.preloadText), 
				this.currentFileText = t.TextUtils.getStyledText("", this.containerWidth / 2, this.containerHeight - 20, 16, "#ffffff", "#462B1F", 4), this.addChild(this.currentFileText), this.game.load.onFileStart.add(this.onFileStart, this), this.game.load.onFileComplete.add(this.onFileComplete, this), this.game.load.onLoadComplete.add(this.onLoadingComplete, this), this.initSoundNames();
                for (var e = 0, n = this.soundNames; e < n.length; e++) {
                    var i = n[e];
                    this.game.load.audio(i, ["sound/mp3/" + i + ".mp3", "sound/m4a/" + i + ".m4a", "sound/ogg/" + i + ".ogg"])
                }
                this.game.load.atlas(t.Settings.GAME_ATLAS, "img/" + t.Settings.GAME_ATLAS + ".png", "img/" + t.Settings.GAME_ATLAS + ".json"), this.game.load.atlas(t.Settings.UI_ATLAS, "img/" + t.Settings.UI_ATLAS + ".png", "img/" + t.Settings.UI_ATLAS + ".json"), this.game.load.atlas(t.Settings.FX_ATLAS, "img/" + t.Settings.FX_ATLAS + ".png", "img/" + t.Settings.FX_ATLAS + ".json"), this.game.load.image("background1", "img/backgrounds/background1.png"), /*this.game.load.image("mainMenu", "img/backgrounds/mainMenu.png"),*/ this.game.load.image("frame", "img/backgrounds/frame.png"), this.game.load.image("levels", "img/backgrounds/levels.png"), this.game.device.desktop
            }, n.prototype.create = function() {}, n.prototype.onFileStart = function(e, n, i) {
                t.Settings.ENABLE_PRELOADER_OUTPUT && this.currentFileText.setText("" + i)
            }, n.prototype.onFileComplete = function(t, e, n, i, a) {
                this.preloaderBar.width = .95 * t / 100 * this.originalBarWidth, this.preloadText.setText(Phaser.Math.roundTo(.95 * t, 0) + "%")
            }, n.prototype.onLoadingComplete = function() {
                t.LocalStorageController.instance.loadSave();
				t.WindowManager.instance.init(), t.LevelStorage.instance, t.LevelManager.instance, t.SoundController.instance.isDecodingSupported() ? this.game.sound.setDecodedCallback(this.soundNames, this.onSoundsDecoded, this) : this.onSoundsDecoded()
            }, n.prototype.onSoundsDecoded = function() {
                this.preloaderBar.width = 1 * this.originalBarWidth, this.preloadText.setText("100%"), t.WindowManager.instance.transitionTo("MainMenu")
            }, n.prototype.initSoundNames = function() {
                this.soundNames = ["coin_bonus", "pop", "gap_collapsing", "gap_bonus", "ball_inserting", "idol_mouth_opening", "idol_mouth_closing", "path_initialization", "bomb_explosion", "defeat_heartbeat", "scores_counting", "click", "swish_left", "swish_right", "ball_swap01", "ball_swap02", "fireball_picking_up", "fireball_shot", "shot01", "shot02", "rewind", "platform_change", "powerup_appearing", "lazer", "lighting", "victory", "ball_destroying", "torch_start", "torch_loop", "freezing", "unfreezing", "rolling_balls", "idol_hit_main_menu", "combo1", "combo2", "combo3", "combo4", "combo5", "combo6", "combo7", "combo8", "combo9", "combo10", "wheel", "themeA", "themeB", "themeC"]
            }, n.prototype.enableDebugOutput = function() {
                var t = gradle.event;
                gradle.event = function() {
                    t.apply(console, arguments);
                    for (var e = Array.prototype.slice.call(arguments), n = 0; n < e.length; n++) debugLog.push("" + e[n])
                }, window.onerror = function(t, e, n) {
                    gradle.event("#JS error: " + t + " on line " + n + " for " + e)
                }
            }, n.prototype.update = function() {
                if (t.Settings.ENABLE_PRELOADER_OUTPUT)
                    for (var e = 0, n = debugLog; e < n.length; e++) {
                        var i = n[e];
                        this.game.debug.text(i, 10, 10 + 15 * debugLog.indexOf(i), -1 != i.indexOf("#JS error") ? "#FF0000" : "#000000")
                    }
            }, n
        }(t.AutoResizeableState);
        t.Preloader = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var n = e.call(this, t.App.instance, null) || this;
                return n.onCompleteCallback = null, n.actionRadius = 10, n.isActive = !1, n.buildSprites(), n
            }
            return __extends(n, e), n.prototype.buildSprites = function() {
                this.circle = this.add(this.game.make.sprite(0, 8, t.Settings.FX_ATLAS, "pointerAnim0000")), this.circle.anchor.set(.5), this.circleRotationAnimation = this.circle.animations.add("circleRotation", Phaser.Animation.generateFrameNames("pointerAnim", 0, 13, "", 4), 30, !0), this.hand = this.add(this.game.make.sprite(-10, -40, t.Settings.FX_ATLAS, "tapAnim0000")), this.hand.anchor.set(0), this.tapAnimation = this.hand.animations.add("tapAnimation", Phaser.Animation.generateFrameNames("tapAnim", 0, 15, "", 4), 30, !1), this.handInTween = this.game.add.tween(this.hand).to({
                    x: -20,
                    y: -35
                }, 400, Phaser.Easing.Linear.None, !1)
            }, n.prototype.start = function() {
                var e = this;
                this.stop(), this.isActive = !0, this.circleRotationAnimation.play(), this.tapAnimation.onComplete.add(function() {
                    return e.delayEvent = e.game.time.events.add(1e3, function() {
                        return e.tapAnimation.play()
                    })
                }), this.handInTween.onComplete.addOnce(function() {
                    return e.tapAnimation.restart()
                }), this.hand.position.set(35, 30), this.alpha = 0, t.App.instance.add.tween(this).to({
                    alpha: 1
                }, 600, Phaser.Easing.Linear.None, !0, 500).onComplete.add(function() {
                    return e.handInTween.start()
                })
            }, n.prototype.stop = function() {
                this.isActive = !1, this.circleRotationAnimation.stop(), this.handInTween.onComplete.removeAll(), this.tapAnimation.onComplete.removeAll(), t.App.instance.time.events.remove(this.delayEvent), this.tapAnimation.stop(!0)
            }, n.prototype.completedHandler = function() {
                this.onCompleteCallback && this.onCompleteCallback(), this.removeFromParent()
            }, n.prototype.showAt = function(t, e) {
                this.onCompleteCallback = e, t.add(this), this.start()
            }, n.prototype.dispatchToggleEvent = function(e, n) {
                var i = this;
                Phaser.Math.distance(this.x, this.y, e, n) <= this.actionRadius && t.App.instance.add.tween(this).to({
                    alpha: 0
                }, 300, Phaser.Easing.Linear.None, !0).onComplete.add(function() {
                    return i.completedHandler()
                })
            }, n.prototype.removeFromParent = function() {
                this.onCompleteCallback = null, this.stop(), this.parent && this.parent.removeChild(this)
            }, n.prototype.destroy = function() {
                this.removeFromParent()
            }, n
        }(Phaser.Group);
        t.BaseTutorial = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t, n) {
                var i = e.call(this) || this;
                return i.position.set(t, n), i.actionRadius = 50, i
            }
            return __extends(n, e), n.prototype.buildSprites = function() {
                this.circle = this.add(this.game.make.sprite(0, 8, t.Settings.FX_ATLAS, "pointerAnim0000")), this.circle.anchor.set(.5), this.circleRotationAnimation = this.circle.animations.add("circleRotation", Phaser.Animation.generateFrameNames("pointerAnim", 0, 13, "", 4), 30, !0), this.hand = this.add(this.game.make.sprite(270, -30, t.Settings.FX_ATLAS, "tapAnim0000")), this.hand.anchor.set(0), this.tapAnimation = this.hand.animations.add("tapAnimation", Phaser.Animation.generateFrameNames("tapAnim", 0, 7, "", 4), 30, !1), this.releaseAnimation = this.hand.animations.add("releaseAnimation", Phaser.Animation.generateFrameNames("tapAnim", 7, 15, "", 4), 30, !1), this.handInTween = this.game.add.tween(this.hand).to({
                    x: -20,
                    y: -35
                }, 1600, Phaser.Easing.Linear.None, !1)
            }, n.prototype.start = function() {
                var e = this;
                this.stop(), this.isActive = !0, this.circleRotationAnimation.play(), this.tapAnimation.onComplete.add(function() {
                    return e.delayEvent = e.game.time.events.add(200, function() {
                        return e.handInTween.start()
                    })
                }), this.handInTween.onComplete.add(function() {
                    return e.releaseAnimation.restart()
                }), this.releaseAnimation.onComplete.add(function() {
                    return e.restartTweening()
                }), this.alpha = 0, t.App.instance.add.tween(this).to({
                    alpha: 1
                }, 750, Phaser.Easing.Linear.None, !0, 200).onComplete.add(function() {
                    return e.tapAnimation.play()
                })
            }, n.prototype.stop = function() {
                this.isActive = !1, this.circleRotationAnimation.stop(), this.handInTween.onComplete.removeAll(), this.tapAnimation.onComplete.removeAll(), this.releaseAnimation.onComplete.removeAll(), t.App.instance.time.events.remove(this.delayEvent), this.releaseAnimation.stop(!0), this.tapAnimation.stop(!0)
            }, n.prototype.completedHandler = function() {
                this.onCompleteCallback && this.onCompleteCallback(), this.removeFromParent()
            }, n.prototype.restartTweening = function() {
                var e = this;
                t.App.instance.add.tween(this.hand).to({
                    alpha: 0
                }, 400, Phaser.Easing.Linear.None, !0, 500).onComplete.add(function() {
                    e.hand.position.set(270, -30), t.App.instance.add.tween(e.hand).to({
                        alpha: 1
                    }, 500, Phaser.Easing.Linear.None, !0, 800).onComplete.add(function() {
                        return e.tapAnimation.restart()
                    })
                })
            }, n
        }(t.BaseTutorial);
        t.AimTutorial = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e, n) {
                var i = t.call(this) || this;
                return i.circle.scale.set(1.5), i.position.set(e, n), i.actionRadius = 50, i
            }
            return __extends(e, t), e
        }(t.BaseTutorial);
        t.ChangePlatformTutorial = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(t, n) {
                var i = e.call(this) || this;
                return i.rotateRadius = 235, i.startAngle = -Math.PI / 3, i.endAngle = Math.PI / 3, i.prevAngle = i.startAngle, i.currentAngle = i.startAngle, i.duration = 1100, i.buildAdditionalSprites(), i.position.set(t, n), i.actionRadius = 275, i
            }
            return __extends(n, e), n.prototype.buildSprites = function() {}, n.prototype.buildAdditionalSprites = function() {
                var e = this;
                this.initialPosition = new Phaser.Point(0, -this.rotateRadius), this.initialPosition.rotate(0, 0, this.startAngle), this.currentPosition = this.initialPosition.clone(), this.hand = this.add(this.game.make.sprite(this.currentPosition.x - 20, this.currentPosition.y - 35, t.Settings.FX_ATLAS, "tapAnim0000")), this.hand.scale.set(1.4), this.hand.anchor.set(0), this.tapAnimation = this.hand.animations.add("tapAnimation", Phaser.Animation.generateFrameNames("tapAnim", 0, 7, "", 4), 30, !1), this.releaseAnimation = this.hand.animations.add("releaseAnimation", Phaser.Animation.generateFrameNames("tapAnim", 7, 15, "", 4), 30, !1), this.handInTween = this.game.add.tween(this).to({
                    currentAngle: this.endAngle
                }, this.duration, Phaser.Easing.Linear.None, !1).onUpdateCallback(function() {
                    return e.updateRotation()
                })
            }, n.prototype.start = function() {
                var e = this;
                this.stop(), this.isActive = !0, this.tapAnimation.onComplete.add(function() {
                    return e.delayEvent = e.game.time.events.add(50, function() {
                        return e.handInTween.start()
                    })
                }), this.handInTween.onComplete.add(function() {
                    return e.releaseAnimation.restart()
                }), this.releaseAnimation.onComplete.add(function() {
                    return e.returnToStartPosition()
                }), this.alpha = 0, t.App.instance.add.tween(this).to({
                    alpha: 1
                }, 750, Phaser.Easing.Linear.None, !0, 500).onComplete.add(function() {
                    return e.tapAnimation.play()
                })
            }, n.prototype.stop = function() {
                this.isActive = !1, this.handInTween.onComplete.removeAll(), this.tapAnimation.onComplete.removeAll(), this.releaseAnimation.onComplete.removeAll(), t.App.instance.time.events.remove(this.delayEvent), this.releaseAnimation.stop(!0), this.tapAnimation.stop(!0)
            }, n.prototype.updateRotation = function() {
                this.currentPosition = this.currentPosition.rotate(0, 0, this.currentAngle - this.prevAngle), this.hand.position.set(this.currentPosition.x - 20, this.currentPosition.y - 35), this.prevAngle = this.currentAngle
            }, n.prototype.returnToStartPosition = function() {
                var e = this;
                this.prevAngle = this.startAngle, this.currentAngle = this.startAngle, this.currentPosition = this.initialPosition.clone(), t.App.instance.add.tween(this.hand).to({
                    x: this.initialPosition.x - 20,
                    y: this.initialPosition.y - 35
                }, 500, Phaser.Easing.Linear.None, !0, 150).onComplete.add(function() {
                    return e.tapAnimation.restart()
                })
            }, n
        }(t.BaseTutorial);
        t.RotateWheelTutorial = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e, n) {
                var i = t.call(this) || this;
                return i.circle.scale.set(1.7), i.hand.scale.set(1.3), i.position.set(e, n), i.actionRadius = 50, i
            }
            return __extends(e, t), e
        }(t.BaseTutorial);
        t.SwapBallsTutorial = e
    }(src || (src = {})),
    function(t) {
        var e = function(t) {
            function e(e, n) {
                var i = t.call(this) || this;
                return i.position.set(e, n), i.actionRadius = 50, i
            }
            return __extends(e, t), e
        }(t.BaseTutorial);
        t.TapHereTutorial = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                var n = e.call(this, t.App.instance, null) || this;
                return n.isFirstStageCompleted = !1, n.isSecondStageCompleted = !1, n.isWheelTutorialCompleted = !1, n.tapHereTutorialA = new t.TapHereTutorial(100, 300), n.tapHereTutorialB = new t.TapHereTutorial(490, 180), n.aimTutorial = new t.AimTutorial(200, 175), n.swapBallsTutorial = new t.SwapBallsTutorial(312, 505), n.changePlatformTutorialA = new t.ChangePlatformTutorial(381, 659), n.changePlatformTutorialB = new t.ChangePlatformTutorial(268, 289), n.wheelRotateTutorial = new t.RotateWheelTutorial(t.CustomScaleManager.ORIGINAL_WIDTH / 2 - 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 184), n
            }
            return __extends(n, e), Object.defineProperty(n, "instance", {
                get: function() {
                    return n._instance ? n._instance : n._instance = new n
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.dispatchLevelStart = function(e) {
                var n = this,
                    i = t.App.instance.state.getCurrentState();
                i && (1 != t.Settings.CURRENT_LEVEL || this.isFirstStageCompleted ? 6 != t.Settings.CURRENT_LEVEL || this.isSecondStageCompleted ? e() : (t.App.instance.state.getCurrentState().cannonManager.cannon.start(), this.changePlatformTutorialA.showAt(i.container, function() {
                    return n.changePlatformTutorialB.showAt(i.container, function() {
                        return n.completedSecondStage(e)
                    })
                })) : (t.App.instance.state.getCurrentState().cannonManager.cannon.start(), this.game.device.desktop ? this.tapHereTutorialA.showAt(i.container, function() {
                    return n.tapHereTutorialB.showAt(i.container, function() {
                        return n.swapBallsTutorial.showAt(i.container, function() {
                            return n.completedFirstStage(e)
                        })
                    })
                }) : this.tapHereTutorialA.showAt(i.container, function() {
                    return n.tapHereTutorialB.showAt(i.container, function() {
                        return n.aimTutorial.showAt(i.container, function() {
                            return n.swapBallsTutorial.showAt(i.container, function() {
                                return n.completedFirstStage(e)
                            })
                        })
                    })
                })))
            }, n.prototype.dispatchLevelsMapOpening = function() {
                var e = this;
                if (t.App.instance.state.getCurrentState() instanceof t.LevelsMap) {
                    var n = t.App.instance.state.getCurrentState();
                    t.Settings.LAST_UNLOCKED_LEVEL > 1 && !this.isWheelTutorialCompleted && this.wheelRotateTutorial.showAt(n.responsiveContainer, function() {
                        return e.completedWheelStage()
                    })
                }
            }, n.prototype.dispatchShoot = function(t) {
                this.tapHereTutorialA.isActive && this.tapHereTutorialA.dispatchToggleEvent(t.x, t.y), this.tapHereTutorialB.isActive && this.tapHereTutorialB.dispatchToggleEvent(t.x, t.y), this.aimTutorial.isActive && this.aimTutorial.dispatchToggleEvent(t.x, t.y)
            }, n.prototype.dispatchBallsSwap = function(t) {
                this.swapBallsTutorial.isActive && this.swapBallsTutorial.dispatchToggleEvent(t.x, t.y)
            }, n.prototype.dispatchPlatformChange = function(t) {
                this.changePlatformTutorialA.isActive && this.changePlatformTutorialA.dispatchToggleEvent(t.x, t.y), this.changePlatformTutorialB.isActive && this.changePlatformTutorialB.dispatchToggleEvent(t.x, t.y)
            }, n.prototype.dispatchWheelRotate = function(t, e) {
                this.wheelRotateTutorial.isActive && this.wheelRotateTutorial.dispatchToggleEvent(t, e)
            }, n.prototype.completedFirstStage = function(e) {
                this.isFirstStageCompleted = !0, t.LocalStorageController.instance.save(), gradle.event('EVENT_TUTORIALCOMPLETED'), e && e()
            }, n.prototype.completedSecondStage = function(e) {
                this.isSecondStageCompleted = !0, t.LocalStorageController.instance.save(), e && e()
            }, n.prototype.completedWheelStage = function() {
                this.isWheelTutorialCompleted = !0, t.LocalStorageController.instance.save()
            }, n._instance = null, n
        }(Phaser.Group);
        t.TutorialManager = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {}
            return e.getDecimal = function(t) {
                return t % 1
            }, e.pointOnCircle = function(e, n, i) {
                var a = 0;
                a = e - 1.5 * i < 0 ? .25 : e + 1.5 * i > t.CustomScaleManager.ORIGINAL_WIDTH ? 1.25 : Math.random() > .5 ? .25 : 1.25;
                var s = Math.PI * (a + .5 * Math.random()) - Math.PI / 2;
                return new Phaser.Point(e + i * Math.cos(s), n + i * Math.sin(s))
            }, e.pointOnSegment = function(t, e, n, i, a) {
                var s = Math.sqrt((n - t) * (n - t) + (i - e) * (i - e));
                if (0 == s) return new Phaser.Point(t, e);
                var o = new Phaser.Point;
                return o.x = t + a * (n - t) / s, o.y = e + a * (i - e) / s, o
            }, e.pointOnSegmentRelative = function(t, e, n, i, a) {
                var s = Math.sqrt((n - t) * (n - t) + (i - e) * (i - e));
                if (0 == s) return new Phaser.Point(t, e);
                var o = s * a,
                    r = new Phaser.Point;
                return r.x = t + o * (n - t) / s, r.y = e + o * (i - e) / s, r
            }, e.getRelativePosition = function(t, e, n, i, a) {
                var s = Math.sqrt((n - t) * (n - t) + (i - e) * (i - e));
                return 0 == s ? 0 : n != t ? (a.x - t) * s / (n - t) / s : i != e ? (a.y - e) * s / (i - e) / s : 0
            }, e.findLineCircleIntersections = function(t, n, i, a, s, o, r, l) {
                var h, c, u, p, g, d;
                if (void 0 === l && (l = !0), g = (p = 2 * ((h = o - a) * (a - t) + (c = r - s) * (s - n))) * p - 4 * (u = h * h + c * c) * ((a - t) * (a - t) + (s - n) * (s - n) - i * i), u <= 1e-7 || g < 0) return null;
                if (0 == g) {
                    d = -p / (2 * u);
                    var m = new Phaser.Point(a + d * h, s + d * c);
                    return e.checkPointBelongsToSegment(m.x, m.y, a, s, o, r) ? m : null
                }
                d = (-p + Math.sqrt(g)) / (2 * u);
                var f = new Phaser.Point(a + d * h, s + d * c);
                d = (-p - Math.sqrt(g)) / (2 * u);
                var S = new Phaser.Point(a + d * h, s + d * c);
                return f = e.checkPointBelongsToSegment(f.x, f.y, a, s, o, r) ? f : null, S = e.checkPointBelongsToSegment(S.x, S.y, a, s, o, r) ? S : null, f && S ? Phaser.Math.distance(a, s, f.x, f.y) <= Phaser.Math.distance(a, s, S.x, S.y) ? l ? f : S : l ? S : f : f || (S || null)
            }, e.checkPointBelongsToSegment = function(t, e, n, i, a, s) {
                return t >= Math.min(n, a) && t <= Math.max(n, a) && e >= Math.min(i, s) && e <= Math.max(i, s)
            }, e.onSegment = function(t, e, n) {
                return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
            }, e.orientation = function(t, e, n) {
                var i = (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
                return 0 == i ? 0 : i > 0 ? 1 : 2
            }, e.testSegmentsIntersection = function(t, n, i, a) {
                var s = e.orientation(t, n, i),
                    o = e.orientation(t, n, a),
                    r = e.orientation(i, a, t),
                    l = e.orientation(i, a, n);
                return s != o && r != l || (!(0 != s || !e.onSegment(t, i, n)) || (!(0 != o || !e.onSegment(t, a, n)) || (!(0 != r || !e.onSegment(i, t, a)) || !(0 != l || !e.onSegment(i, n, a)))))
            }, e.CollisionDetector = function() {
                function t() {}
                return t.distanceBetween = function(t, e, n, i) {
                    return (t - n) * (t - n) + (e - i) * (e - i)
                }, t.distanceToSegmentSquared = function(t, n, i, a, s, o) {
                    var r = e.CollisionDetector.distanceBetween(i, a, s, o);
                    if (0 == r) return e.CollisionDetector.distanceBetween(t, n, i, a);
                    var l = ((t - i) * (s - i) + (n - a) * (o - a)) / r;
                    return l < 0 ? e.CollisionDetector.distanceBetween(t, n, i, a) : l > 1 ? e.CollisionDetector.distanceBetween(t, n, s, o) : e.CollisionDetector.distanceBetween(t, n, i + l * (s - i), a + l * (o - a))
                }, t.getCollisionPoint = function(t, n, i, a, s, o) {
                    var r = e.CollisionDetector.distanceBetween(i, a, s, o);
                    if (0 == r) return new Phaser.Point(i, a);
                    var l = ((t - i) * (s - i) + (n - a) * (o - a)) / r;
                    return l < 0 ? new Phaser.Point(i, a) : l > 1 ? new Phaser.Point(s, o) : new Phaser.Point(i + l * (s - i), a + l * (o - a))
                }, t.distanceToSegment = function(t, n, i) {
                    return Math.sqrt(e.CollisionDetector.distanceToSegmentSquared(t.x, t.y, n.x, n.y, i.x, i.y))
                }, t
            }(), e
        }();
        t.AdvancedMath = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {}
            return e.getComboText = function(n) {
                for (var i = new Phaser.Group(t.App.instance, null), a = "X" + Math.floor(n), s = 0; s < a.length; s++) {
                    var o = e.getLetter(a.charAt(s));
                    o && (o.x = 0 == s ? o.width / 2 : i.width + o.width / 2 + t.Settings.COMBO_TEXT_SPACING, i.add(o))
                }
                return i.pivot.set(i.width / 2, 0), i
            }, e.getScoreText = function(n, i) {
                for (var a = new Phaser.Group(t.App.instance, null), s = "+" + Math.floor(n), o = 0; o < s.length; o++) {
                    var r = e.getLetter(s.charAt(o), i);
                    r && (r.x = 0 == o ? r.width / 2 : a.width + r.width / 2 + t.Settings.SCORE_TEXT_SPACING, a.add(r))
                }
                return a.pivot.set(a.width / 2, 0), a
            }, e.getLevelText = function(n, i) {
                for (var a = new Phaser.Group(t.App.instance, null), s = "" + Math.floor(n), o = 0; o < s.length; o++) {
                    var r = e.getLetter(s.charAt(o), i);
                    r && (r.x = 0 == o ? r.width / 2 : a.width + r.width / 2 + t.Settings.SCORE_TEXT_SPACING, a.add(r))
                }
                return a.pivot.set(a.width / 2, 0), a
            }, e.getLetter = function(n, i) {
                void 0 === i && (i = -1);
                var a = null;
                switch (n) {
                    case "X":
                        a = "textX000" + e.getColorFrame(i);
                        break;
                    case "+":
                        a = "textPlus000" + e.getColorFrame(i);
                        break;
                    case "1":
                        a = "text1000" + e.getColorFrame(i);
                        break;
                    case "2":
                        a = "text2000" + e.getColorFrame(i);
                        break;
                    case "3":
                        a = "text3000" + e.getColorFrame(i);
                        break;
                    case "4":
                        a = "text4000" + e.getColorFrame(i);
                        break;
                    case "5":
                        a = "text5000" + e.getColorFrame(i);
                        break;
                    case "6":
                        a = "text6000" + e.getColorFrame(i);
                        break;
                    case "7":
                        a = "text7000" + e.getColorFrame(i);
                        break;
                    case "8":
                        a = "text8000" + e.getColorFrame(i);
                        break;
                    case "9":
                        a = "text9000" + e.getColorFrame(i);
                        break;
                    case "0":
                        a = "text0000" + e.getColorFrame(i)
                }
                if (!a) return null;
                var s = new Phaser.Sprite(t.App.instance, 0, 0, t.Settings.GAME_ATLAS, a);
                return s.anchor.setTo(.5, .5), s
            }, e.getColorFrame = function(e) {
                var n = 0;
                switch (e) {
                    case t.BallColor.BLACK:
                        n = 8;
                        break;
                    case t.BallColor.BLUE:
                        n = 4;
                        break;
                    case t.BallColor.GRAY:
                        n = 7;
                        break;
                    case t.BallColor.GREEN:
                        n = 3;
                        break;
                    case t.BallColor.PURPLE:
                        n = 5;
                        break;
                    case t.BallColor.CYAN:
                        n = 6;
                        break;
                    case t.BallColor.YELLOW:
                        n = 2;
                        break;
                    case t.BallColor.RED:
                        n = 1;
                        break;
                    default:
                        n = 0
                }
                return n
            }, e
        }();
        t.BitmapTextFactory = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {}
            return e.createButton = function(e, n, i, a, s, o) {
                var r = new Phaser.Button(t.App.instance, i, a, e, s, o, n + "0001", n + "0000", n + "0002", n + "0000");
                return r.anchor.setTo(.5, .5), r.input.pixelPerfectClick = !0, r.input.useHandCursor = !0, r
            }, e.createSimpleButton = function(n, i, a, s, o, r, l) {
                var h = new Phaser.Button(t.App.instance, a, s, n, r, l, i + "0000", i + "0000", i + "0000", i + "0000");
                return h.anchor.setTo(.5, .5), h.scale.set(o), h.input.pixelPerfectClick = !0, h.input.useHandCursor = !1, h.overTween = t.App.instance.add.tween(h.scale).to({
                    x: 1.05 * o,
                    y: 1.05 * o
                }, 100), h.outTween = t.App.instance.add.tween(h.scale).to({
                    x: 1 * o,
                    y: 1 * o
                }, 100), h.downTween = t.App.instance.add.tween(h.scale).to({
                    x: .95 * o,
                    y: .95 * o
                }, 50).to({
                    x: 1 * o,
                    y: 1 * o
                }, 50), h.events.onInputOver.add(e.mouseOverHandler, this, 0), h.events.onInputOut.add(e.mouseOutHandler, this, 0), h.events.onInputDown.add(e.mouseDownHandler, this, 0), h
            }, e.mouseOverHandler = function(e) {
                t.App.instance.add.tween(e.scale).to({
                    x: 1.05 * t.CustomScaleManager.SCALE_X,
                    y: 1.05 * t.CustomScaleManager.SCALE_Y
                }, 100).start()
            }, e.mouseOutHandler = function(e) {
                t.App.instance.add.tween(e.scale).to({
                    x: 1 * t.CustomScaleManager.SCALE_X,
                    y: 1 * t.CustomScaleManager.SCALE_Y
                }, 100).start()
            }, e.mouseDownHandler = function(e) {
                t.App.instance.add.tween(e.scale).to({
                    x: .95 * t.CustomScaleManager.SCALE_X,
                    y: .95 * t.CustomScaleManager.SCALE_Y
                }, 50).to({
                    x: 1 * t.CustomScaleManager.SCALE_X,
                    y: 1 * t.CustomScaleManager.SCALE_Y
                }, 50).start()
            }, e
        }();
        t.ButtonUtils = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function t() {
                this.len = 0, this.rPos = 0, this.res = []
            }
            return Object.defineProperty(t, "instance", {
                get: function() {
                    return t._instance ? t._instance : t._instance = new t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getCurvePointsClassic = function(t, e, n, i) {
                return void 0 === e && (e = .5), void 0 === n && (n = 25), void 0 === i && (i = !1), getCurvePoints(t, e, n, i)
            }, t.prototype.getCurvePoints = function(t, e, n) {
                if (void 0 === e && (e = .5), void 0 === n && (n = !1), !t || t.length < 2) return [];
                this.rPos = 0, this.res = [], this.len = t.length;
                var i = t.slice(0);
                return n ? (i.unshift(t[this.len - 1]), i.unshift(t[this.len - 2]), i.push(t[0], t[1])) : (i.unshift(t[1]), i.unshift(t[0]), i.push(t[this.len - 2], t[this.len - 1])), this.parse(i, this.len, e), n && ((i = []).push(t[this.len - 4], t[this.len - 3], t[this.len - 2], t[this.len - 1], t[0], t[1], t[2], t[3]), this.parse(i, 4, e)), this.len = n ? 0 : t.length - 2, this.res[this.rPos++] = t[this.len++], this.res[this.rPos] = t[this.len], this.res
            }, t.prototype.parse = function(e, n, i) {
                for (var a, s = 2; s < n; s += 2) {
                    var o, r, l, h, c = e[s],
                        u = e[s + 1],
                        p = e[s + 2],
                        g = e[s + 3],
                        d = (p - e[s - 2]) * i,
                        m = (g - e[s - 1]) * i,
                        f = (e[s + 4] - c) * i,
                        S = (e[s + 5] - u) * i,
                        A = 0,
                        E = Phaser.Math.distance(c, u, p, g) / t.DIVISOR;
                    E = E < 1 ? 1 : Math.floor(E);
                    var _ = this.getCache(E);
                    for (a = 0; a < E; a++) o = _[A++], r = _[A++], l = _[A++], h = _[A++], this.res[this.rPos++] = o * c + r * p + l * d + h * f, this.res[this.rPos++] = o * u + r * g + l * m + h * S
                }
            }, t.prototype.getCache = function(t) {
                var e = [],
                    n = 4,
                    i = 1;
                for (e[0] = 1; i < t; i++) {
                    var a = i / t,
                        s = a * a,
                        o = s * a,
                        r = 2 * o,
                        l = 3 * s;
                    e[n++] = r - l + 1, e[n++] = l - r, e[n++] = o - 2 * s + a, e[n++] = o - s
                }
                return e[++n] = 1, e
            }, t.DIVISOR = 10, t
        }();
        t.CurveCalculator = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function t() {}
            return t.getText = function(t) {
                var e = t;
                return e || "NO_TRANSLATION_YET"
            }, t
        }();
        t.LocalizationManager = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.isLocalStorageSupported = !1, this.data = null, localStorage = localStorage || window.localStorage, this.data = {
                    level: 1,
                    tutorialFirstStageCompleted: !1,
                    tutorialSecondStageCompleted: !1,
                    wheelTutorialCompleted: !1,
                    wheelFirstTimeSpin: !gradle.wheelFirstTime,
                    scores: []
                };
                for (var e = 0; e < t.Settings.TOTAL_LEVELS + 1; e++) this.data.scores.push(0)
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getScores = function() {
                return this.data.scores
            }, e.prototype.getLastUnlockedLevel = function() {
                return this.data.level
            }, e.prototype.save = function() {
                this.data.scores = t.ScoreManager.instance.getScores(), this.data.level = t.Settings.LAST_UNLOCKED_LEVEL, this.data.tutorialFirstStageCompleted = t.TutorialManager.instance.isFirstStageCompleted, this.data.tutorialSecondStageCompleted = t.TutorialManager.instance.isSecondStageCompleted, this.data.wheelTutorialCompleted = t.TutorialManager.instance.isWheelTutorialCompleted, this.data.wheelFirstTimeSpin = t.LevelsMap.firstTimeSpinned, this.isLocalStorageSupported && localStorage.setItem(t.Settings.STORAGE_NAME, JSON.stringify(this.data))
            }, e.prototype.checkLocalStorageSupported = function() {
                try {
                    this.isLocalStorageSupported = "localStorage" in window && null !== window.localStorage
                } catch (t) {
                    this.isLocalStorageSupported = !1
                }
            }, e.prototype.loadSave = function() {
                this.checkLocalStorageSupported();
				if(this.isLocalStorageSupported){
					//console.log(t.Settings.STORAGE_NAME)
					localStorage.getItem(t.Settings.STORAGE_NAME) ? 
						this.data = JSON.parse(localStorage.getItem(t.Settings.STORAGE_NAME)) 
					: 
						localStorage.setItem(t.Settings.STORAGE_NAME, JSON.stringify(this.data));
				}
				this.finalizeLoading();
            }, e.prototype.finalizeLoading = function() {
                t.ScoreManager.instance.init(e.instance.getScores()), t.Settings.LAST_UNLOCKED_LEVEL = e.instance.getLastUnlockedLevel(), t.TutorialManager.instance.isFirstStageCompleted = this.data.tutorialFirstStageCompleted, t.TutorialManager.instance.isSecondStageCompleted = this.data.tutorialSecondStageCompleted, t.TutorialManager.instance.isWheelTutorialCompleted = this.data.wheelTutorialCompleted || !1, t.LevelsMap.firstTimeSpinned = this.data.wheelFirstTimeSpin || !1
            }, e
        }();
        t.LocalStorageController = e
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {
                this.loses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				
				this.balls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
				
				this.time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

				this.gaps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

				this.combos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

				this.coins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

				this.distanceToIdol = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return e._instance ? e._instance : e._instance = new e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getUserStats = function() {
                for (var e = "", n = 1; n < t.Settings.TOTAL_LEVELS; n++) 
					this.time[n] > 0 ? 
						e += "============================== Level " + n + " =========================== \n                     Loses:     " + this.loses[n] + " \n                     Time:      " + t.TextUtils.convertMSToHumanTime(this.time[n]) + "\n                     Score:     " + t.LocalStorageController.instance.getScores()[n - 1] + "\n                     Balls:     " + this.balls[n] + "\n                     Gaps:      " + this.gaps[n] + "\n                     Combos:    " + this.combos[n] + "\n                     Coins:     " + this.coins[n] + "\n                     Idol in:   " + this.distanceToIdol[n] + " balls\n                     " 
					: 
						e += "============================== Level " + n + " =========================== \n                     Loses:     " + this.loses[n] + " \n                     ";
                return e;
            }, e._instance = null, e
        }();
        t.PlayerStatisticsCollector = e;
    }(src || (src = {})),
    function(t) {
        var e = function() {
            function e() {}
            return e.addText = function(n, i, a, s, o, r, l, h) {
                return void 0 === l && (l = t.Settings.DEFAULT_FONT_FAMILY), void 0 === h && (h = null), n.add(e.getText(i, a, s, o, r, l, h))
            }, e.getText = function(e, n, i, a, s, o, r) {
                void 0 === r && (r = null);
                var l = new Phaser.Text(t.App.instance, n, i, e, {
                    font: (r ? r + " " : "") + a + o,
                    fill: s,
                    align: "center"
                });
                return l.anchor.setTo(.5, .5), l
            }, e.getShadowText = function(e, n, i, a, s, o, r, l, h, c, u, p) {
                void 0 === o && (o = "#000000"), void 0 === r && (r = 0), void 0 === l && (l = 2), void 0 === h && (h = .5), void 0 === c && (c = .5), void 0 === u && (u = t.Settings.DEFAULT_FONT_FAMILY), void 0 === p && (p = null);
                var g = new Phaser.Text(t.App.instance, n, i, e, {
                    font: (p ? p + " " : "") + a + u,
                    fill: s,
                    align: "center"
                });
                return g.anchor.setTo(h, c), g.setShadow(r, l, o, 0), g
            }, e.getStyledText = function(e, n, i, a, s, o, r, l, h) {
                void 0 === r && (r = 4), void 0 === l && (l = t.Settings.DEFAULT_FONT_FAMILY), void 0 === h && (h = null);
                var c = new Phaser.Text(t.App.instance, n, i, e, {
                    font: (h ? h + " " : "") + a + l,
                    fill: s,
                    stroke: o,
                    strokeThickness: r,
                    align: "center"
                });
                return c.setShadow(0, 2, o, 0), c.anchor.set(.5, .5), c
            }, e.convertMSToHumanTime = function(t) {
                var e = Math.floor(t / 1e3),
                    n = Math.floor(e / 60),
                    i = e - 60 * n;
                return (n < 10 ? "0" : "") + n + ":" + (i < 10 ? "0" : "") + i
            }, e
        }();
        t.TextUtils = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n(n, i, a) {
                void 0 === a && (a = t.Settings.WINDOW_BACKGROUND_ALPHA);
                var s = e.call(this, t.App.instance, null) || this;
                return s.backgroundAlpha = t.Settings.WINDOW_BACKGROUND_ALPHA, s.registrationPoint = new Phaser.Point(n, i), s.backgroundAlpha = a, s.visible = !1, s.buildBackground(), s.buildContent(), s
            }
            return __extends(n, e), n.prototype.buildBackground = function() {
                this.background = this.add(this.game.make.graphics(0, 0)), this.background.beginFill(0, t.Settings.WINDOW_BACKGROUND_ALPHA).drawRect(0, 0, this.game.world.width, this.game.world.height).endFill(), this.background.inputEnabled = !0
            }, n.prototype.buildContent = function() {
                this.content = this.game.make.group(this), this.content.inputEnableChildren = !0
            }, n.prototype.resize = function() {
                this.background.clear().beginFill(0, this.backgroundAlpha).drawRect(0, 0, this.game.world.width, this.game.world.height).endFill(), this.content.scale.set(t.CustomScaleManager.SCALE_X, t.CustomScaleManager.SCALE_Y), this.content.position.set(t.CustomScaleManager.WIDTH / 2 - t.CustomScaleManager.ORIGINAL_WIDTH * t.CustomScaleManager.SCALE_X / 2, t.CustomScaleManager.HEIGHT / 2 - t.CustomScaleManager.ORIGINAL_HEIGHT * t.CustomScaleManager.SCALE_Y / 2)
            }, n.prototype.show = function() {
                this.visible = !0, this.resize(), this.game.stage.addChild(this)
            }, n.prototype.hide = function() {
                this.visible = !1, this.parent && this.parent.removeChild(this)
            }, n.prototype.lockUpButtons = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 0; n < t.length; n++) t[n].inputEnabled = !1
            }, n.prototype.unlockButtons = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 0; n < t.length; n++) t[n].inputEnabled = !0
            }, n.prototype.destroy = function() {
                e.prototype.destroy.call(this), this.background = null, this.content = null
            }, n
        }(Phaser.Group);
        t.BaseWindow = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return e.call(this, t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 240, .9) || this
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                e.prototype.buildContent.call(this);
				
				this.buttonHome = this.content.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonHomeLevels", t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 240 + 55, this.homeClicked, this));

				this.plateContainer = this.content.add(this.game.make.group(null));
				this.plateContainer.position.copyFrom(this.registrationPoint);

				this.creditsPlate = this.plateContainer.add(this.game.make.sprite(0, -290, t.Settings.UI_ATLAS, "creditsPlate0000"));
				this.creditsPlate.anchor.set(.5);
            }, n.prototype.show = function() {
                if(!gradle.enableMoreGames){
	                e.prototype.show.call(this);
					this.clearTweens();

					//change the alpha of background :
					//================================
					this.background.alpha = 0;
					this.game.add.tween(this.background).to({
	                    alpha: 1
	                }, 300, Phaser.Easing.Circular.Out, !0, 0);

					//show container :
					//================
					this.plateContainer.alpha = 0;
					this.plateContainer.scale.set(0);
					this.game.add.tween(this.plateContainer).to({
	                    alpha: 1
	                }, 400, Phaser.Easing.Circular.Out, !0, 100);

					this.game.add.tween(this.plateContainer.scale).to({
	                    x: 1,
	                    y: 1
	                }, 400, Phaser.Easing.Back.Out, !0, 100);

					//show button home :
					//==================
					this.buttonHome.scale.set(.5);
					this.buttonHome.alpha = 0;
					this.game.add.tween(this.buttonHome).to({
	                    alpha: 1
	                }, 350, Phaser.Easing.Cubic.Out, !0, 400);

					this.game.add.tween(this.buttonHome.scale).to({
	                    x: 1,
	                    y: 1
	                }, 350, Phaser.Easing.Back.Out, !0, 400);
					gradle.event('SCREEN_CREDITS');
				}
				else{
					gradle.event('MORE_GAMES');
				}
            }, n.prototype.clearTweens = function() {
                this.game.tweens.removeFrom(this.background);
				this.game.tweens.removeFrom(this.plateContainer);
				this.game.tweens.removeFrom(this.plateContainer.scale);
            }, n.prototype.hide = function() {
                this.clearTweens();
				e.prototype.hide.call(this)
            }, n.prototype.homeClicked = function() {
                this.game.sound.play("click", .9);
				this.hide();
            }, n
        }(t.BaseWindow);
        t.CreditsWindow = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return e.call(this, t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 240) || this
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                e.prototype.buildContent.call(this), this.heartbeatSound = this.game.add.sound("defeat_heartbeat", .9, !1), this.defeatCrossLeft = this.content.add(this.game.make.sprite(this.registrationPoint.x - 15, this.registrationPoint.y - 280, t.Settings.UI_ATLAS, "defeatCrossLeft0000")), this.defeatCrossLeft.anchor.set(.5), this.defeatCrossLeft.angle = -60, this.defeatCrossLeftAnimation = this.defeatCrossLeft.animations.add("crossAnimation", Phaser.Animation.generateFrameNames("defeatCrossLeft", 0, 8, "", 4)), this.defeatCrossRight = this.content.add(this.game.make.sprite(this.registrationPoint.x, this.registrationPoint.y - 300, t.Settings.UI_ATLAS, "defeatCrossRight0000")), this.defeatCrossRight.anchor.set(.5), this.defeatCrossRight.angle = 60, this.defeatCrossRightAnimation = this.defeatCrossRight.animations.add("crossAnimation", Phaser.Animation.generateFrameNames("defeatCrossRight", 0, 6, "", 4)), this.totemHead = this.content.add(this.game.make.sprite(this.registrationPoint.x, this.registrationPoint.y - 285, t.Settings.UI_ATLAS, "defeatTotem0000")), this.totemHead.anchor.set(.5), this.buttonsContainer = this.content.add(this.game.make.group(null)), this.buttonsContainer.position.copyFrom(this.registrationPoint), this.buttonsFrame = this.buttonsContainer.add(this.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "pauseFrame0000")), this.buttonsFrame.anchor.set(.5), this.buttonHome = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonHomeGray", -162, 0, this.homeClicked, this)), this.buttonRestart = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonRestartRed", 0, 0, this.restartClicked, this)), this.buttonSoundOn = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonSoundOnGray", 162, 0, this.soundOnClicked, this)), this.buttonSoundOff = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonSoundOffGray", 162, 0, this.soundOffClicked, this))
            }, n.prototype.show = function() {
                var n = this;
                e.prototype.show.call(this), gradle.event('SCREEN_LEVELRESULT'), this.buttonHome.visible = !1, this.buttonRestart.visible = !1, this.buttonSoundOn.visible = !1, this.buttonSoundOff.visible = !1, this.buttonsContainer.visible = !1, t.PlayerStatisticsCollector.instance.loses[t.Settings.CURRENT_LEVEL] += 1, t.SoundController.instance.chokeMusicVolume(), this.clearTweens(), this.buttonsContainer.alpha = 0, this.buttonsContainer.scale.set(0), this.totemHead.alpha = 0, this.background.alpha = 0, this.game.add.tween(this.background).to({
                    alpha: 1
                }, 800, Phaser.Easing.Circular.Out, !0, 0), this.game.time.events.add(500, function() {
                    return n.defeatCrossLeftAnimation.play(20, !1).onComplete.add(function() {
                        return n.defeatCrossRightAnimation.play(15, !1)
                    })
                }), this.game.add.tween(this.buttonsContainer).to({
                    alpha: 1
                }, 350, Phaser.Easing.Circular.Out, !0, 1600), this.game.add.tween(this.buttonsContainer.scale).to({
                    x: 1,
                    y: 1
                }, 350, Phaser.Easing.Back.Out, !0, 1600), this.game.add.tween(this.totemHead).to({
                    alpha: 1
                }, 350, Phaser.Easing.Linear.None, !0, 2100).onComplete.add(function() {
                    return n.startTotemHeadAnimations()
                }), this.game.time.events.add(360, function() {
                    return n.game.sound.play("swish_left", .9)
                }), this.game.time.events.add(820, function() {
                    return n.game.sound.play("swish_right", .9)
                })
            }, n.prototype.startTotemHeadAnimations = function() {
                var e = this;
                this.game.tweens.removeFrom(this.totemHead.scale);
                var n = this.game.add.tween(this.totemHead.scale).to({
                        x: 1.12,
                        y: 1.12
                    }, 210, Phaser.Easing.Back.Out, !0, 0),
                    i = this.game.add.tween(this.totemHead.scale).to({
                        x: 1.16,
                        y: 1.16
                    }, 210, Phaser.Easing.Back.InOut, !1, 0),
                    a = this.game.add.tween(this.totemHead.scale).to({
                        x: 1,
                        y: 1
                    }, 1100, Phaser.Easing.Linear.None, !1, 0);
                n.chain(i), i.chain(a), a.chain(n), n.onStart.add(function() {
                    return e.heartbeatSound.play()
                });
                var s = function() {
                    this.buttonsContainer.visible = !0, this.buttonHome.visible = !0, this.buttonRestart.visible = !0, this.unlockButtons(this.buttonHome, this.buttonRestart, this.buttonSoundOn, this.buttonSoundOff), this.updateSoundButtons()
                }.bind(this);
                setTimeout(function() {
                    Promise.all([gradle.event("EVENT_LEVELFAIL", {
                        levelName: "" + t.Settings.CURRENT_LEVEL,
                        reason: "dead"
                    })]).then(s, s)
                }, 1500)
            }, n.prototype.clearTweens = function() {
                this.defeatCrossLeftAnimation.stop(!0), this.defeatCrossRightAnimation.stop(!0), this.game.tweens.removeFrom(this.background), this.game.tweens.removeFrom(this.buttonsContainer), this.game.tweens.removeFrom(this.buttonsContainer.scale), this.game.tweens.removeFrom(this.totemHead.scale)
            }, n.prototype.hide = function() {
                t.SoundController.instance.restoreMusicVolume(), e.prototype.hide.call(this), this.clearTweens()
            }, n.prototype.homeClicked = function() {
                var e = this;
                this.lockUpButtons(this.buttonHome, this.buttonRestart, this.buttonSoundOn, this.buttonSoundOff), this.game.sound.play("click", .9), t.WindowManager.instance.transitionTo("MainMenu", function() {
                    return e.hide()
                }), t.App.instance.showAd(50)
            }, n.prototype.restartClicked = function() {
                var e = this;
                this.lockUpButtons(this.buttonHome, this.buttonRestart, this.buttonSoundOn, this.buttonSoundOff), this.game.sound.play("click", .9), t.WindowManager.instance.transitionTo("Level", function() {
                    return e.hide()
                }), gradle.event('EVENT_LEVELRESTART', {
                    levelName: "" + t.Settings.CURRENT_LEVEL
                }), t.App.instance.showAd(50)
            }, n.prototype.soundOnClicked = function() {
                this.game.sound.mute = !0, this.updateSoundButtons(), this.game.sound.play("click", .9), gradle.event('EVENT_VOLUMECHANGE', {
                    bgmVolume: 0,
                    sfxVolume: 0
                }), localStorage.setItem("muted", !0)
            }, n.prototype.soundOffClicked = function() {
                this.game.sound.mute = !1, this.updateSoundButtons(), this.game.sound.play("click", .9), gradle.event('EVENT_VOLUMECHANGE', {
                    bgmVolume: 1,
                    sfxVolume: 1
                }), localStorage.removeItem("muted")
            }, n.prototype.updateSoundButtons = function() {
                this.game.sound.mute ? (this.buttonSoundOn.visible = !1, this.buttonSoundOff.visible = !0) : (this.buttonSoundOn.visible = !0, this.buttonSoundOff.visible = !1)
            }, n
        }(t.BaseWindow);
        t.DefeatWindow = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return e.call(this, t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 240) || this
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                e.prototype.buildContent.call(this), this.sandClock = this.content.add(this.game.make.sprite(this.registrationPoint.x, this.registrationPoint.y - 290, t.Settings.UI_ATLAS, "sandClock0000")), this.sandClock.scale.set(1.3), this.sandClock.anchor.set(.5), this.buttonsContainer = this.content.add(this.game.make.group(null)), this.buttonsContainer.position.copyFrom(this.registrationPoint), this.buttonsFrame = this.buttonsContainer.add(this.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "pauseFrame0000")), this.buttonsFrame.anchor.set(.5), this.buttonHome = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonHomeGray", -162, 0, this.homeClicked, this)), this.buttonResume = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonResumeYellow", 0, 0, this.resumeClicked, this)), this.buttonSoundOn = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonSoundOnGray", 162, 0, this.soundOnClicked, this)), this.buttonSoundOff = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonSoundOffGray", 162, 0, this.soundOffClicked, this)), this.buttonResumeShining = this.buttonsContainer.add(this.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "buttonShining0000")), this.buttonResumeShining.anchor.set(.5), this.buttonResumeShining.scale.set(2), this.buttonResumeShining.angle = 45, this.buttonResumeShining.animations.add("shining", Phaser.Animation.generateFrameNames("buttonShining", 0, 99, "", 4).concat(Phaser.Animation.generateFrameNames("buttonShining", 0, 99, "", 4).reverse())), this.buttonResumeShining.animations.play("shining", 60, !0)
            }, n.prototype.show = function() {
                e.prototype.show.call(this), this.unlockButtons(this.buttonHome, this.buttonResume, this.buttonSoundOn, this.buttonSoundOff), t.SoundController.instance.chokeMusicVolume(), this.updateSoundButtons(), this.clearTweens(), this.buttonsContainer.alpha = 0, this.buttonsContainer.scale.set(0), this.background.alpha = 0, this.game.add.tween(this.background).to({
                    alpha: 1
                }, 300, Phaser.Easing.Circular.Out, !0, 0), this.game.add.tween(this.buttonsContainer).to({
                    alpha: 1
                }, 200, Phaser.Easing.Circular.Out, !0, 100), this.game.add.tween(this.buttonsContainer.scale).to({
                    x: 1,
                    y: 1
                }, 200, Phaser.Easing.Back.Out, !0, 100), this.sandClock.scale.set(0), this.game.add.tween(this.sandClock.scale).to({
                    x: 1.3,
                    y: 1.3
                }, 200, Phaser.Easing.Sinusoidal.InOut, !0, 100).onComplete.add(this.startSandClockShakingAnimation, this), gradle.event('SCREEN_PAUSE'), t.App.instance.showAd(50)
            }, n.prototype.startSandClockShakingAnimation = function() {
                this.sandClock.scale.set(1.3), this.game.add.tween(this.sandClock.scale).to({
                    x: 1.2,
                    y: 1.2
                }, 1900, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0);
                var t = this.game.add.tween(this.sandClock).to({
                        rotation: Phaser.Math.degToRad(5)
                    }, 50, Phaser.Easing.Sinusoidal.InOut, !0, 0, 2, !0),
                    e = this.game.add.tween(this.sandClock).to({}, 1500, Phaser.Easing.Linear.None, !1, 0);
                t.chain(e), e.chain(t)
            }, n.prototype.clearTweens = function() {
                this.game.tweens.removeFrom(this.background), this.game.tweens.removeFrom(this.buttonsContainer), this.game.tweens.removeFrom(this.buttonsContainer.scale), this.game.tweens.removeFrom(this.sandClock), this.game.tweens.removeFrom(this.sandClock.scale)
            }, n.prototype.hide = function() {
                t.SoundController.instance.restoreMusicVolume(), this.clearTweens(), e.prototype.hide.call(this)
            }, n.prototype.homeClicked = function() {
                var e = this;
                this.lockUpButtons(this.buttonHome, this.buttonResume, this.buttonSoundOn, this.buttonSoundOff), this.game.sound.play("click", .9), t.WindowManager.instance.transitionTo("MainMenu", function() {
                    return e.hide()
                }), setTimeout(function() {
                    gradle.event('EVENT_LEVELFAIL', {
                        levelName: "" + t.Settings.CURRENT_LEVEL,
                        reason: "quit"
                    })
                }, 100), t.App.instance.showAd(50)
            }, n.prototype.resumeClicked = function() {
                this.game.sound.play("click", .9), this.hide(), this.game.state.getCurrentState() instanceof t.Level && this.game.state.getCurrentState().gameStateManager.resumeLevel(), t.App.instance.showAd(50)
            }, n.prototype.soundOnClicked = function() {
                this.game.sound.mute = !0, this.updateSoundButtons(), this.game.sound.play("click", .9), gradle.event('EVENT_VOLUMECHANGE', {
                    bgmVolume: 0,
                    sfxVolume: 0
                }), localStorage.setItem("muted", !0)
            }, n.prototype.soundOffClicked = function() {
                this.game.sound.mute = !1, this.updateSoundButtons(), this.game.sound.play("click", .9), gradle.event('EVENT_VOLUMECHANGE', {
                    bgmVolume: 1,
                    sfxVolume: 1
                }), localStorage.removeItem("muted")
            }, n.prototype.updateSoundButtons = function() {
                this.game.sound.mute ? (this.buttonSoundOn.visible = !1, this.buttonSoundOff.visible = !0) : (this.buttonSoundOn.visible = !0, this.buttonSoundOff.visible = !1)
            }, n
        }(t.BaseWindow);
        t.PauseWindow = e
    }(src || (src = {})),
    function(t) {
        var e = function(e) {
            function n() {
                return e.call(this, t.CustomScaleManager.ORIGINAL_WIDTH / 2, t.CustomScaleManager.ORIGINAL_HEIGHT / 2 + 240, .9) || this
            }
            return __extends(n, e), n.prototype.buildContent = function() {
                e.prototype.buildContent.call(this), this.mainContainer = this.content.add(this.game.make.group(null)), this.mainContainer.position.copyFrom(this.registrationPoint), this.buildButtons(), this.buildTotem(), this.buildBoard()
            }, n.prototype.buildButtons = function() {
                this.buttonsContainer = this.mainContainer.add(this.game.make.group(null)), this.buttonsFrame = this.buttonsContainer.add(this.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "resultsFrame0000")), this.buttonsFrame.anchor.set(.5), this.buttonHome = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonHomeGray", -162, 13, this.homeClicked, this)), this.buttonNext = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonNextYellow", 1, 13, this.nextClicked, this)), this.buttonRestart = this.buttonsContainer.add(t.ButtonUtils.createButton(t.Settings.UI_ATLAS, "buttonRestartGray", 162, 13, this.restartClicked, this)), this.buttonNextShining = this.buttonsContainer.add(this.game.make.sprite(0, 13, t.Settings.UI_ATLAS, "buttonShining0000")), this.buttonNextShining.anchor.set(.5), this.buttonNextShining.scale.set(2), this.buttonNextShining.angle = 45, this.buttonNextShining.animations.add("shining", Phaser.Animation.generateFrameNames("buttonShining", 0, 99, "", 4).concat(Phaser.Animation.generateFrameNames("buttonShining", 0, 99, "", 4).reverse())), this.buttonNextShining.animations.play("shining", 60, !0), this.buttonNext.visible = !1, this.buttonHome.visible = !1, this.buttonRestart.visible = !1, this.buttonNextShining.visible = !1
            }, n.prototype.buildBoard = function() {
                var e = this;
                this.boardContainer = this.mainContainer.add(this.game.make.group(null));
				this.boardContainer.position.set(0, -217);
				
				this.fireLeft = this.boardContainer.add(this.game.make.sprite(-195, -10, t.Settings.FX_ATLAS, "fire0000"));
				this.fireLeft.anchor.set(.5, 1);
				this.fireLeftStartAnimation = this.fireLeft.animations.add("fireStart", Phaser.Animation.generateFrameNames("fire", 0, 59, "", 4), 40, !1);
				this.fireLeftCycledAnimation = this.fireLeft.animations.add("fire", Phaser.Animation.generateFrameNames("fire", 60, 64, "", 4).concat(Phaser.Animation.generateFrameNames("fire", 39, 59, "", 4)), 40, !0);
				this.fireLeftStartAnimation.onComplete.add(function() {
                    return e.fireLeftCycledAnimation.play();
                });

				this.monkeyLeft = this.boardContainer.add(this.game.make.sprite(-197, 138, t.Settings.UI_ATLAS, "monkeyTotem0000"));
				this.monkeyLeft.anchor.set(.5, 1);

				this.fireRight = this.boardContainer.add(this.game.make.sprite(200, -10, t.Settings.FX_ATLAS, "fire0000"));
				this.fireRight.anchor.set(.5, 1);
				this.fireRightStartAnimation = this.fireRight.animations.add("fireStart", Phaser.Animation.generateFrameNames("fire", 0, 59, "", 4), 40, !1);
				this.fireRightCycledAnimation = this.fireRight.animations.add("fire", Phaser.Animation.generateFrameNames("fire", 60, 64, "", 4).concat(Phaser.Animation.generateFrameNames("fire", 39, 59, "", 4)), 40, !0);
				this.fireRightStartAnimation.onComplete.add(function() {
                    return e.fireRightCycledAnimation.play()
                });

				this.monkeyRight = this.boardContainer.add(this.game.make.sprite(197, 138, t.Settings.UI_ATLAS, "monkeyTotem0000"));
				this.monkeyRight.anchor.set(.5, 1);
				
				this.torchStartSound = this.game.add.sound("torch_start", 1);
				this.torchLoopSound = this.game.add.sound("torch_loop", 1, !0);

				this.board = this.boardContainer.add(new t.ResultsBoard);
            }, n.prototype.buildTotem = function() {
                this.totemContainer = this.mainContainer.add(this.game.make.group(null)), this.totemContainer.position.set(0, -374), this.leafsAnimation = this.totemContainer.add(new t.LeafsAnimation(0, 0)), this.feathersAnimation = this.totemContainer.add(new t.FeathersAnimation(0, 0)), this.monkeyTop = this.totemContainer.add(this.game.make.sprite(0, 0, t.Settings.UI_ATLAS, "resultsTotem0000")), this.monkeyTop.anchor.set(.5, 1)
            }, n.prototype.show = function() {
                var n = this;
                e.prototype.show.call(this), this.unlockButtons(this.buttonHome, this.buttonNext, this.buttonRestart), t.SoundController.instance.chokeMusicVolume(100), this.game.sound.play("victory", .8), this.clearTweens(), this.mainContainer.alpha = 0, this.mainContainer.scale.set(.7), this.background.alpha = 0, this.totemContainer.visible = !1, this.game.add.tween(this.background).to({
                    alpha: 1
                }, 500, Phaser.Easing.Circular.Out, !0, 0), this.game.add.tween(this.mainContainer).to({
                    alpha: 1
                }, 400, Phaser.Easing.Exponential.Out, !0, 400), this.game.add.tween(this.mainContainer.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Back.Out, !0, 400).onComplete.add(this.startTweens, this), this.board.show(function() {
                    return n.burnFire()
                }, [this.buttonNext, this.buttonHome, this.buttonRestart, this.buttonNextShining])
            }, n.prototype.startTweens = function() {
                this.totemContainer.visible = !0, this.game.add.tween(this.totemContainer).to({
                    y: -374
                }, 500, Phaser.Easing.Cubic.Out, !0, 0), this.monkeyTop.scale.y = 1.01, this.game.add.tween(this.monkeyTop.scale).to({
                    y: 1
                }, 200, Phaser.Easing.Linear.None, !0, 500), this.leafsAnimation.startTweens(), this.feathersAnimation.startTweens()
            }, n.prototype.burnFire = function() {
                this.fireLeft.visible = !0;
				this.fireRight.visible = !0;
				this.fireLeftStartAnimation.restart();
				this.fireRightStartAnimation.restart();
				this.torchStartSound.play();
				this.torchLoopSound.play();
            }, n.prototype.clearTweens = function() {
                this.game.tweens.removeFrom(this.background), this.game.tweens.removeFrom(this.mainContainer), this.game.tweens.removeFrom(this.mainContainer.scale), this.game.tweens.removeFrom(this.totemContainer), this.game.tweens.removeFrom(this.monkeyTop.scale), this.fireLeft.visible = !1, this.fireRight.visible = !1, this.fireLeftStartAnimation.stop(!0), this.fireRightStartAnimation.stop(!0), this.totemContainer.y = -180
            }, n.prototype.hide = function() {
                t.SoundController.instance.restoreMusicVolume(), this.torchStartSound.stop(), this.torchLoopSound.stop(), this.clearTweens(), this.board.hide(), e.prototype.hide.call(this)
            }, n.prototype.homeClicked = function() {
                var e = this;
                this.lockUpButtons(this.buttonHome, this.buttonNext, this.buttonRestart);
				this.game.sound.play("click", .9);
				t.WindowManager.instance.transitionTo("MainMenu", function() {
                    return e.hide()
                });
				t.App.instance.showAd(50);
            }, n.prototype.nextClicked = function() {
                var e = this;
                this.lockUpButtons(this.buttonHome, this.buttonNext, this.buttonRestart);
				this.game.sound.play("click", .9);
				t.Settings.CURRENT_LEVEL < t.Settings.TOTAL_LEVELS ? (t.LevelManager.instance.loadLevel(t.Settings.CURRENT_LEVEL + 1), t.WindowManager.instance.transitionTo("Level", function() {
                    return e.hide();
                })) : t.WindowManager.instance.transitionTo("MainMenu", function() {
                    return e.hide();
                }), t.App.instance.showAd(50)
            }, n.prototype.restartClicked = function() {
                var e = this;
                this.lockUpButtons(this.buttonHome, this.buttonNext, this.buttonRestart);
				this.game.sound.play("click", .9);
				t.WindowManager.instance.transitionTo("Level", function() {
                    return e.hide();
                });
				gradle.event('EVENT_LEVELRESTART', {
                    levelName: "" + t.Settings.CURRENT_LEVEL
                });
				t.App.instance.showAd(50);
            }, n
        }(t.BaseWindow);
        t.ResultsWindow = e
    }(src || (src = {}));
