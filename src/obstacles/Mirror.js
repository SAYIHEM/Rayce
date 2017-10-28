function Mirror( mirrorPos, mirrorDir) {
    this.mirrorPosition = mirrorPos;
    this.mirror_direction = mirrorDir;



    this.interact = function(player) {

        function dotProd( v, w){
           return (v.x * w.x) + (v.y * w.y);
        }

        function addVec(v,w){
            return {
                x: v.x + w.x,
                y: v.y + w.y
            };
        }

        function subVec(v,w){
            return {
                x: v.x - w.x,
                y: v.y - w.y
            };
        }

        function mulVec(k,v){
            return {
                x: k * v.x,
                y: k * v.y
            };
        }

        function norm(v){
            var len = Math.sqrt(v.x * v.x + v.y * v.y);
            return {
                x: v.x / len,
                y: v.y / len
            };
        }


        var normMirror = norm(this.mirror_direction);
        var projPlayer = mulVec( dotProd(normMirror, player.body.velocity), normMirror );

        var trans = mulVec(2.0, subVec(projPlayer, player.body.velocity));

        var out = addVec(player.body.velocity, trans);

        player.body.velocity.x = out.x;
        player.body.velocity.y = out.y;


    };







}