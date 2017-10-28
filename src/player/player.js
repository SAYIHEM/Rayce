function Player(velocity, sprite){

  this.position = new Phaser.Point(game.width / 2.0, game.height / 2.0);
  this.velocity = velocity;
  this.sprite = sprite;

  this.update = function(world){

    for(i = 0; i < world.length; i++){

        var hitObstacle = game.physics.arcade.collide(this.sprite, world[i].sprite);

        for(j = 0; j < hitObstacle.length; j++){

        hitObstacle[j].prototype.interact(this);
      }

    }
  }
}
