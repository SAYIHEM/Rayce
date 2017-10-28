





// Func. Interact
Blackhole.prototype.interact = function (player) {

    var d = Object.create(Phaser.Point(this.x - player.x, this.y - player.y));
    Console.log('vGravity: ' + d);
    var nd = normalize(d);
    Console.log('vnGravity: ' + nd);
    var gravity = Object.create(Phaser.Point(nd.x * player.speed, nd.y * player.speed));

    player.direction.x = player.direction.x + gravity.x;
    player.direction.y = player.direction.y + gravity.x;
};



function normalize(point) {

    var len = Math.sqrt(point.x * point.x + point.y * point.y)
    point.x /= len;
    point.y /= len;
}