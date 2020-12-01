class LOG{
    constructor(x,y,h,angle){
        var options={
            restitution:0.7,
            friction:1,
            density:1
          }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.width = 20;
        this.height =h;
        Matter.Body.setAngle(this.body,angle)
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var a = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(a);
        rectMode(CENTER);
        strokeWeight(6);
        stroke("black");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}