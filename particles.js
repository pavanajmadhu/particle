class Particles{
    constructor(x,y){
        var options={
          friction:0.2,  
        }
this.body=Bodies.circle(x,y,15,options)

World.add(world, this.body);

    }
    display(){
        ellipseMode(CENTER);
        var pos=this.body.position;
        fill(random(0,255),random(0,255),random(0,255))
          ellipse(pos.x,pos.y,15)
    }
}
    
