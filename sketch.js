var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var edges;

function preload(){
//    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,570,150,20);
    surface1.shapeColor = "red";
    surface2 = createSprite(260,570,150,20);
    surface2.shapeColor = "green";
    surface3 = createSprite(420,570,150,20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(580,570,150,20);
    surface4.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(random(100,580),100,20,20);
    //box.shapeColor = 'white';
    box.velocityX = -2;
    box.velocityY = 2;
    edges= createEdgeSprites();
}

function draw() {
    background(0);
    
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(box.bounceOff(surface1)){
        box.shapeColour = "red";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColour = "green";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColour = "blue";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColour = "yellow";
    }
    
    
    drawSprites();
}
