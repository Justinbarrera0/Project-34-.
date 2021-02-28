class Hero{

    constructor(x,y,radius){

    var options = {
        friction: 1.0,
        density: 1.0,
        frictionAir:1
    }
this.image=loadImage("images/Superhero-01.png")
this.body = Bodies.circle(x,y,radius, options);
this.radius =radius ;

World.add(world, this.body);

    }

display(){
    var pos = this.body.position;
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
    imageMode(RADIUS);
    
    image(this.image,0,0,this.radius,this.radius)
    pop()
}





}