
class mango{
    constructor(x, y, width, height) {

var options={
        isStatic :true,
        restitution:0,
        friction:1,

}
this.image = loadImage('mango.png'); //2.add images and fix the path
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
strokeWeight(4);
fill(255);
image(this.image, 0,0,this.width, this.height)
pop();
}
};