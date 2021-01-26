class rope{
    constructor(BA,BB){
        var options={
            bodyA:BA,
            bodyB:BB,
            length:7,
            stiffness:0.3
        }
        this.bodyA=BA;
        this.bodyB=BB;
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);

    }

    display(){
        var bodya = this.bodyA.position;
        var bodyb = this.bodyB.position;
        line(bodya.x,bodya.y,bodyb.x,bodyb.y);
    }
}