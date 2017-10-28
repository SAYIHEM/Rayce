function Blackhole(sprite) {

    this.position = new Phaser.Point(sprite.x, sprite.y);
    this.sprite = sprite;

    this.sprite.prototype = {
        interact: function (player) {

            var d = new Phaser.Point(this.x - player.position.x, this.y - player.position.y);
            console.log('vGravity: ' + d);
            var nd = normalize(d);
            console.log('vnGravity: ' + nd);
            var gravity = new Phaser.Point(nd.x * 1.3, nd.y * 1.3);

            player.velocity.x = gravity.x;
            player.velocity.y = gravity.y;
        }
    };

    function normalize(point) {

        var len = Math.sqrt(point.x * point.x + point.y * point.y);
        point.x /= len;
        point.y /= len;
    }
    draw = function () {

    }
}




