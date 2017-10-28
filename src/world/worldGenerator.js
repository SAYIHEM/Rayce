/**
 *
 * @param x
 * @param y
 * @param width
 * @param height
 * @param recursionCounter
 * @param options : {threshold,probability}
 * @param types : {<SpriteID>: <group>}
 */
function generateObstackleSections(x,y,width,height, recursionCounter, options, types){

    var threshold = options.threshold || 0.0;
    var probability = options.probability || 1.0;

    if(Math.min(width,height) < threshold){
        return;
    }

    if(recursionCounter === 0){
        if(Math.random() < probability) {

            const keys = Object.keys(types);
            const currKey = keys[Math.floor( Math.random() * keys.length)];

            var elem = types[currKey].create(x + width / 2.0, y + height / 2.0, currKey);
            elem.inputEnabled = true;
            elem.input.enableDrag(true);
        }
    } else {
        //var ratio = 0.5 + Math.random()* 1.5;
        const splitXLeft = (0.1+ 0.8*Math.random()) * width;
        const splitYLeft = (0.1+ 0.8*Math.random()) * height;
        const splitXRight = width - splitXLeft;
        const splitYRight = height - splitYLeft;

        const k = 0.9 + Math.random() * 0.05;


        generateObstackleSections( x, y, k*splitXLeft, k*splitYLeft, recursionCounter - 1,options, types);
        generateObstackleSections( x+splitXLeft, y, k*splitXRight, k*splitYLeft, recursionCounter - 1, options, types);
        generateObstackleSections( x, y+splitYLeft, k*splitXLeft, k*splitYRight, recursionCounter - 1, options, types);
        generateObstackleSections( x+splitXLeft, y+splitYLeft, k*splitXRight, k*splitYRight, recursionCounter - 1, options, types);
    }
}