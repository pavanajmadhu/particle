class Particles {
    constructor(x,y){
        var options={
restitution=0.5,
        }
        this.body = Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
        display(){
            var pos=this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,10)
       
        }
    }
    
