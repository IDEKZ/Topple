class Ground{
    constructor(x,y,width,height){
    var P={
    isStatic:true 
    }
    this.body=Bodies.rectangle(x,y,width,height,P);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER); 
        fill("red")
        rect(pos.x,pos.y,this.width,this.height);
    
    }
    
    
};
