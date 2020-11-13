class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.7,
            density:0.8,
            friction:0
        }
        this.body=Bodies.circle(100,50,30,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }
}