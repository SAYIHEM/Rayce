function Player(velocity, controller, sprite){

  this.position = new Phaser.Point(game.width / 2.0, game.height / 2.0);
  this.velocity = velocity;
  this.controller = controller;
  this.sprite = sprite;

  this.update = function(world){

    //this.controller.update(this);

      var hitObstacle = game.physics.arcade.collide(this.sprite, world);
      console.log(hitObstacle.length);

      for(j = 0; j < hitObstacle.length; j++){

          hitObstacle[j].prototype.interact(this);
      }

    //for(i = 0; i < world.length; i++){
//
//
//
    //}
  }
}
