class Plinko {
    constructor (x,y,width,height){
    var options = {
        isStatic: true,
        'restituion':1,
        'friction':0,
        

    }
   this.r = 10;
   this.body = Bodies.circle(x,y,this.r,options);
   World.add(World,this.body)

}

   display() {
       var pos = this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       noStroke();
       fill("White")
       ellipseMode(RADIUS)
       ellipse(0,0,this.r,this.r)
       pop();
   }

}