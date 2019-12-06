function Box(x,y,height,width,src,type){
    Component.call(this,x,y,height,width,src,type)
}
Box.prototype = Object.create(Component.prototype);
Box.prototype.constructor = Box;
