/*
function PowerUpList(specialFunc,game) {
    this.mSpecialFunc = specialFunc;
    this.mGame = game;

    var MAX_ELEMENTS = 3;
    var curAmount = 0;

    var WIDTH_SCREEN_SCALE = 1/7;
    var MARGIN_TOP_SCALE = 1/10;

    this.mElements = [];

    this.init();

    this.init = function () {
        game.load.image('powerup_e', 'assets/powerup_empty.png');
        game.load.image('powerup_f', 'assets/powerup_fill.png');

        var y = MARGIN_TOP_SCALE;

        for (var i=0;i<MAX_ELEMENTS;i++) {

            var gameWidth = this.mGame.camera.width;

            var listWidth = this.mGame.camera.width * WIDTH_SCREEN_SCALE;
            var eachWidth = listWidth / MAX_ELEMENTS;



            var x = gameWidth - listWidth + (eachWidth*i);

            var sprite = game.add.sprite(x, y, 'powerup_e');

            var scale = sprite.body.width/eachWidth;
            sprite.scale.setTo(scale,scale);

            sprite.fixedToCamera = true;
            sprite.cameraOffset.setTo(200, 500);

            this.mElements.add(sprite);
        }

    };



    this.addLoad = function() {
        if (curAmount<MAX_ELEMENTS) {
            //fill next powerup
            var empty_sprite = this.mElements.get(curAmount);
            var x = empty_sprite.body.x;
            var y = empty_sprite.body.y;

            var filled_sprite = game.add.sprite(x, y, 'powerup_f');

            var cur_width = filled_sprite.body.width;
            var scale = cur_width/empty_sprite.body.width;
            filled_sprite.scale.setTo(scale,scale);

            curAmount++;
            if (curAmount===MAX_ELEMENTS) {
                this.mSpecialFunc();
            }
        }
    };

    this.clear = function() {
        curAmount = 0;
        //reset all sprides to empty
    };
}
*/

class PowerUpList {

    constructor(specialFunc,game) {
        this.mSpecialFunc = specialFunc;
        this.mGame = game;

        this.MAX_ELEMENTS = 3;
        this.curAmount = 0;

        this.WIDTH_SCREEN_SCALE = 1/5;
        this.MARGIN_TOP_SCALE = 1/10;
        this.mElements = [];

    }
    show() {
        this.mGame.load.image('powerup_e', 'assets/powerup_empty.png');
        this.mGame.load.image('powerup_f', 'assets/powerup_fill.png');

        var y = this.MARGIN_TOP_SCALE * this.mGame.camera.height;

        for (var i=0;i<this.MAX_ELEMENTS;i++) {

            var gameWidth = this.mGame.camera.width;

            var listWidth = this.mGame.camera.width * this.WIDTH_SCREEN_SCALE;
            var eachWidth = listWidth / this.MAX_ELEMENTS;

            //console.log("listwidth " + listWidth);
            //console.log("gamewidth " + gameWidth);
            //console.log("eachWidth " + eachWidth);
            //console.log("camera x " + this.mGame.camera.x + " y " + this.mGame.camera.y);
            //console.log("camera width " + this.mGame.camera.width + " height " + this.mGame.camera.height);


            var x = (gameWidth - listWidth) + (eachWidth*i);

            var sprite = this.mGame.add.sprite(x, y, 'powerup_e');



            sprite.bringToTop();

            var scale = eachWidth/sprite.width;
            sprite.scale.setTo(scale,scale);

            sprite.fixedToCamera = true;
            //sprite.cameraOffset.setTo(200, 500);

            this.mElements.push(sprite);
            //console.log("added mana " + x + " " + y + " " + sprite.width + " " + sprite.height);
        }
    }
    addLoad() {
        //console.log(this.mElements);
        //console.log(this.curAmount);


        if (this.curAmount<this.MAX_ELEMENTS) {
            //fill next powerup
            var empty_sprite = this.mElements[this.curAmount];
            var x = empty_sprite.x;
            var y = empty_sprite.y;


            //console.log(scale);

            var empty_sprite_width = empty_sprite.width;
            var empty_sprite_height = empty_sprite.height;
            var empty_sprite_x = empty_sprite.x;
            var empty_sprite_y = empty_sprite.y;

            empty_sprite.kill();

            var filled_sprite = this.mGame.add.sprite(x, y, 'powerup_f');

            var cur_width = filled_sprite.width;
            var scale = empty_sprite_width/cur_width;

            filled_sprite.scale.setTo(scale,scale);


            filled_sprite.fixedToCamera = true;

            this.mElements[this.curAmount] = filled_sprite;

            console.log("old x: " + empty_sprite_x + " new x: " + filled_sprite.x);
            console.log("old y: " + empty_sprite_y + " new y: " + filled_sprite.y);

            console.log("old width " + empty_sprite_width + " new width " + filled_sprite.width);
            console.log("old height " + empty_sprite_height + " new height " + filled_sprite.height);


            this.curAmount++;
            if (this.curAmount===this.MAX_ELEMENTS) {
                this.mSpecialFunc();
            }
        }
    }

    clear() {
        for (var i=0;i<this.curAmount;i++) {
            var element = this.mElements.pop();
            element.kill();
        }

        this.curAmount = 0;
        //reset all sprides to empty
    }
}