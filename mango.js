class mango {
    constructor(x,y,wid,hei){
        this.width = wid;
        this.height=height;
        this.x=x;
        this.y-y;
        var options={
            'isStatic':true ,
            'density':0.2,
        }
       
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.img=loadImage("mango.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.width,this.height);
    }
}