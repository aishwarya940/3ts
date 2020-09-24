class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("Images/box.jpg");
    this.Visiblity = 255;
  }

  display(){
  //  console.log(this.body.speed)
    if(this.body.speed<12){
      super.display()
    }
   else{
     World.remove(world,this.body)
     push();
     this.Visiblity = this.Visiblity - 1;
     tint(255,this.Visiblity);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop();
   }
  }

  score(){
    if(this.visibility<0 && this.visibility >- 105){
      Score++;
    }
  }
};