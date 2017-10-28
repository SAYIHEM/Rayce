function Player(velocity, sprite) {

    this.position = new Phaser.Point(game.width / 2.0, game.height / 2.0);
    this.velocity = velocity;
    this.sprite = sprite;

    this.update = function(world){

        game.physics.arcade.overlap(sprite, cur_sprite, function() { cur_obstacle.interact(sprite) }, null, this);
    }
}
