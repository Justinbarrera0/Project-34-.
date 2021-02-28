class Fly{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:1.2,

        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
   
}