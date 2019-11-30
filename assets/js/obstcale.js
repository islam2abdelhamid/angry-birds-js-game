//obstcale class 
var obstacle = function(x,y,width,height,src){
    this.obstacle_x=x;
    this.obstacle_y=y;
    this.height=height;
    this.width=width;
    this.obstacle_img_src=src;
    this.parent_element=null;
    this.obstacle_node=null;
}

// set x coordinate of the obstacle
obstacle.prototype.set_obstacle_x=function(x){
    this.obstacle_x=x;
}

// set y coordinate of the obstacle
obstacle.prototype.set_obstacle_y=function(y){
    this.obstacle_y=y;
}

// get x coordinate of the obstacle
obstacle.prototype.get_obstacle_x=function(){
    return this.obstacle_x;
}


// get y coordinate of the obstacle
obstacle.prototype.get_obstacle_y=function(){
    return this.obstacle_y;
}

//set the width of the obstcale 
obstacle.prototype.set_width=function(width){
    this.width=width;
}

//set the height of the obstacle 
obstacle.prototype.set_height=function(height){
    this.height=height;
}


// get the width of the obstcale 
obstacle.prototype.get_width=function(){
    return this.width;
}

// get the height of the obstacle 
obstacle.prototype.get_height=function(){
    return this.height;
}

//set parent element
obstacle.prototype.set_parent_element=function(parent_element){
    this.parent_element=parent_element;
}

//get parent element
obstacle.prototype.get_parent_element=function(){
   return this.parent_element;
}

// create new obstcale
obstacle.prototype.create_obstcale=function(){
    let parent=this.parent_element;
    let img = document.createElement("img");
    img.width=this.width;
    img.height=this.height;
    img.src=this.obstacle_img_src;
    img.style.position="absolute";
    img.style.top=this.get_obstacle_y()+"px";
    img.style.left=this.get_obstacle_x()+"px";
    parent.appendChild(img);
    this.obstacle_node=img;
}

//testing creating new obstacle 
var obs = new obstacle(400,200,300,200,"ss.jpg");
var body = document.getElementsByTagName("body")[0];
obs.set_parent_element(body);
obs.create_obstcale();
