class Player{
constructor(x,y){
var options={
restitution:0,
isStatic:true,
density:1,
friction:.7
}
this.body=Bodies.rectangle(x,y,60,80,options)
World.add(world,this.body)
this.image=loadImage("military.png")
}

display(){
    var posX=this.body.position.x
    var posY=this.body.position.y
imageMode(CENTER)
image(this.image,posX,posY,100,100)

}
}