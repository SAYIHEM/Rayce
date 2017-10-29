function Vector(x, y) {

    this.x = x;
    this.y = y;

    this.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    this.normalize = function () {
        var len = Math.sqrt(x * x + y * y);
        return new Vector(x / len, y / len);
    }
}