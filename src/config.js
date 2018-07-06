var config = (function(){
    function Ball(options){
        this.name = options.name
        
    }
    Ball.prototype.draw = function(){

    }
    function init(){
        var ball = new Ball()
    }
    var config = {
        play:function(){
            init()
        }
    } 
    return config;
})()