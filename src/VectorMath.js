function VectorMath() {

    getShortestPointOnLine= function(point,line) {

    };

    getDistance = function(point1,point2) {
        rel_x = point2.x - point1.x;
        rel_y = point2.y - point1.y;

        var vec = {
            x: rel_x,
            y: rel_y
        };

        return length(vec);
    };


    add = function(v1,v2) {

        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        }

    };

    scalar = function(v1,v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };


    normalize = function(v) {
        length_v = length(v);
        return {
            x: v.x / length_v,
            y: v.y / length_v
        }
    };

    length = function (v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }



}