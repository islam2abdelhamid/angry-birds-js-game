function Enemy(x,y,height,width,src,type){
    Component.call(this,x,y,height,width,src,type)
}
Enemy.prototype = Object.create(Component.prototype);
Enemy.prototype.constructor = Enemy;
