function KeyController(context) {

    this.context = context;

    this.addKey = function (key) {

        return game.input.keyboard.addKey(key);
    };

    this.registerKey = function(key, executable) {

        key = game.input.keyboard.addKey(key);
        key.onDown.add(executable, context);
        return key;
    }
}