float velo = 20;
int FPS = 60;

float calcV(float FPS,float Time){
 float distance = mag(300,300);
 velo = distance/(FPS*(Time+1));
 return velo; 
}

Bar fps,time,size,Rcolor,Gcolor,Bcolor;
Bar[] barList = new Bar[6];

public class Bar{
  private String title;
  private float value,startX,startY,sizeX,sizeY;
  private int[] buttonColor;
  private int max,min;
  public Bar(String title,float startX,float startY,float sizeX,float sizeY){
    this.title = title;
    this.startX = startX +15;
    this.startY = startY;
    this.sizeX = sizeX -30;
    this.sizeY = sizeY;
    this.value = 0;
    this.buttonColor = new int[]{255,255,255};
    this.max = 255;
    this.min = 0;
  }
  public int getValue(){
    float unit = this.sizeX/( abs(this.max) + abs(this.min));
    return (int)(this.min + this.value/unit);
  }
  public void setButtonColor(int r,int g,int b){
    this.buttonColor = new int[]{r,g,b};
  }
  public void setValue(int value){
    this.value = value;
  }
  public void setMax(int max){
    this.max = max;
  }
  public void setMin(int min){
    this.min = min;
  }
  public void printBar(){
    fill(0);
    noStroke();
    rect(this.startX,this.startY+this.sizeY/3,this.sizeX,this.sizeY/3);
    
    if(mousePressed == true && this.mouseSearch() == true){
      fill(255);
    } else{
      fill(this.buttonColor[0],this.buttonColor[1],this.buttonColor[2]);  
    }
    
    stroke(0);
    strokeWeight(3);
    rect(this.startX+this.value-15,this.startY,30,this.sizeY,this.sizeY/3);
    
    fill(this.buttonColor[0],this.buttonColor[1],this.buttonColor[2]);
    textAlign(CENTER,CENTER);
    textSize(20);
    text(this.title,this.startX-40,this.startY);
    
  }
  public boolean mouseSearch(){
    boolean mouseSearchX = mouseX > this.value+this.startX-15 && mouseX < this.value+this.startX+15;
    boolean mouseSearchY = mouseY > this.startY && mouseY < this.startY+this.sizeY;
    return mouseSearchX && mouseSearchY;
  }
  public void slideProcessing(){
    if(this.mouseSearch() == true && mouseX > this.startX-10 && mouseX < this.startX+this.sizeX+10){
      this.value = mouseX - this.startX;
      if(this.getValue()<this.min){
        this.value = 0;
      } else if(this.getValue()>this.max){
        this.value = this.sizeX;
      }
    }
  }
}


void setup(){
 size(600,400);
 background(255);
 frameRate(FPS);
 
 int sizeX = 200;
 int sizeY = 60;
 fps = new Bar("FPS",375,6,sizeX,sizeY);
 time = new Bar("TIME",375,6+65,sizeX,sizeY);
 size = new Bar("SIZE",375,6 + 130,sizeX,sizeY);
 Rcolor = new Bar("R",375,6 + 195,sizeX,sizeY);
 Gcolor = new Bar("G",375,6 + 260,sizeX,sizeY);
 Bcolor = new Bar("B",375,6 + 325,sizeX,sizeY);
 
 fps.setButtonColor(0,0,0);
 time.setButtonColor(0,0,0);
 size.setButtonColor(0,0,0);
 Rcolor.setButtonColor(255,0,0);
 Gcolor.setButtonColor(0,255,0);
 Bcolor.setButtonColor(0,0,255);

 fps.setValue(34);
 fps.setMin(1);
 fps.setMax(298);
 time.setValue(25);
 time.setMin(1);
 time.setMax(28);
 size.setMin(1);
 size.setMax(248);
 size.setValue(68);
 Rcolor.setValue(170);
 
 barList[0] = fps;
 barList[1] = time;
 barList[2] = size;
 barList[3] = Rcolor;
 barList[4] = Gcolor;
 barList[5] = Bcolor;
}

void draw(){
  background(255);
  if (velo > 320){velo = 0;}
  
  int fps = barList[0].getValue();
  frameRate(fps);
  
  fill(barList[3].getValue(),barList[4].getValue(),barList[5].getValue());
  stroke(0);
  strokeWeight(2);
  ellipse(velo,velo,barList[2].getValue(),barList[2].getValue());
  velo += calcV(fps,barList[1].getValue());
    
  stroke(0);
  fill(255,0);
  rect(20,20,300,300);
  noStroke();
  fill(255);
  rect(0,0,300,19);
  rect(0,0,19,400);
  rect(600,400,-600,-78);
  rect(600,400,-278,-400);

  int FValue = barList[0].getValue();
  int TValue = barList[1].getValue();
  int SValue = barList[2].getValue();
  int rValue = barList[3].getValue();
  int gValue = barList[4].getValue();
  int bValue = barList[5].getValue();
  fill(0);
  textAlign(CENTER,CENTER);
  textSize(25);
  fill(rValue,gValue,bValue);
 
  text("FPS:"+FValue+" TIME:"+TValue+" SIZE:"+SValue,175,375);

  for(int i = 0 ; i < barList.length;i ++){
    barList[i].printBar();
  }
  if(mousePressed == true){
    for(int i = 0 ; i < barList.length;i++){
      barList[i].slideProcessing();
    }
  }
}
