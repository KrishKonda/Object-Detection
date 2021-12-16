img="";
var status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("dog",45,75);
    textSize(20);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);
    fill("#ff0000");
    text("cat",325,125);
    textSize(20);
    noFill();
    stroke("#ff0000");
    rect(300,100,250,300);
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}