class Ground{
    constructor(x,y,width,height){
        var options = {
          isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.Body=Bodies.rectangle(x,y,width,height,options)
        World.add(World,this.Body)
    }
    display(){
    var groundPos = this.body.position
    
    Push ();
    translate(groundpos.x,groundpos.y)
    rectModer(CENTER)
    strokeWeight(4)
    fill(255,255,0)
    rect(0,0,this.width,this.h)
    Pop();

    }
}