class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(width/2,height-20,1200,40,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,1200,40); 
    }
}