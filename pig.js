class PIG{
    constructor(x,y){
        var options={
            restitution:0.7,
            friction:1,
            density:1
          }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height =50 ;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var a = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(a);
        rectMode(CENTER);
       
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();
    }
}