class Bin{
    constructor(x,y,width,height){
      var options = {
          isStatic : true
      }
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.body = Bodies.rectangle(x,y,width,height,options);

      World.add(world,this.body);

    }
    display(){
      var pos = this.body.position;
      fill("green");
      rect(pos.x,pos.y,this.width,this.height);
      //rect(pos.x,pos.y,this.width,this.height);
      //rect(pos.x,pos.y,this.width,this.height);
    }
}