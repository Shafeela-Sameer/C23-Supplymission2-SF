class Box{

constructor(x,y,radius){

    var options={
isStatic:true,
restitution:0.5

    }

this.body=Bodies.circle(x,y,radius , options);
this.radius=radius;
World.add(world,this.body);
}

/*display(){
    var pos= this.body.position;
    push ();
   // translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill (240);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop ();
}*/



}