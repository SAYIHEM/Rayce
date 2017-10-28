function Mirror(sprite) {
    this.sprite = sprite;


    this.interact = function(player) {
        player.angle *= -1;
    };

}