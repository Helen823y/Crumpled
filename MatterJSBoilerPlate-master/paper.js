class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
           
        }
        this.x=x
        this.y=y
        this.r=r
        this.Body=Bodies.circle(this.x,this.y,this.r/2,options)

        World.add(world,this.Body)
    }
    display(){
        var paperpos = this.body.position
       

        push ();
        translate(paperpos.x,paperpos.y)
        RectMode(CENTER)
        strokeWight(3)
        fill (255,0,255)
        ellipse(0,0,this.r,this.r)
        pop ();
    };
   
    
}