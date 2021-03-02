class  Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
      this.offsetX=offsetX
      this.offsetY=offsetY

      var options={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
          
      } 
      this.Rope=Constraint.create(options) 
       World.add(world,this.Rope)                             
    }
    display(){
      line(this.body1.position.x,this.body1.position.y,this.body2.position.x,this.body2.position.y)
    }
}
