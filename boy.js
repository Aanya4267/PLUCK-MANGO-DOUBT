class boy { 
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

        this.boy = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.img = loadImage("boy.png");
        World.add(world,this.boy);
    }

    display(){
        var pos = this.boy.position;
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.width,this.height);
        
    }
}