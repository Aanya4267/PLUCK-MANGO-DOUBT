class tree {
    constructor(wid,hei,x,y){
        this.width = wid ;
        this.height = hei;
        this.x = x ;
        this.y=y;

        var options= {
            'isStatic': true ,
            'friction':0.3 , 
            'density':0.2
        }

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.img = loadImage("tree.png");
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position ; 
        image(this.img,pos.x,pos.y,600,600);
    }
}