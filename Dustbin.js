class Dustbin{
    constructor(x,y,width,height){
        var options={
        isStatic:true,
        friction:0.5,
        density:1.2    
        } 
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display()
    {
       rectMode(CENTER);
       fill(255);
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}