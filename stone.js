class stone {
    constructor(x,y,wid,hei){
        this.width = wid;
        this.height = hei;
        this.x = x;
        this.y = y;
        var options={
            'isStatic':true ,
            'friction':0.3 ,
            'density':0.2
        }

        this.stone = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.img = loadImage("stone.png");
        World.add(world,this.stone);
    }

    display(){
        var pos = this.stone.position;
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.width,this.height);
        
    }

}