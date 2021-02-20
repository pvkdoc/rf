var canvas, rect1, rect2, rect3, rect4, movingRect;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,400);

    //create 4 different surfaces
    rect1= createSprite(60, 380, 100, 20);
    rect1.shapeColor= "green";

    rect2= createSprite(190, 380, 100, 20);
    rect2.shapeColor= "red";

    rect3= createSprite(320, 380, 100, 20);
    rect3.shapeColor= "yellow";

    rect4= createSprite(450, 380, 100, 20);
    rect4.shapeColor= "blue"
    
    movingRect= createSprite(200, 40, 20, 25);
    movingRect.x= Math.round(random(20, 550));
    movingRect.shapeColor= "white";
    

    //create box sprite and give velocity

}

function draw() {
    
    background(rgb(169,169,169));
    
    movingRect.velocityX= -5;
    movingRect.velocityY= 5;
    //create edgeSprite
    
    music.play();

    //bounceOff();

    edges= createEdgeSprites();
    movingRect.bounceOff(edges);

    if(rect1.isTouching(movingRect)){
        movingRect.velocityX= 0;
        movingRect.velocityY= 0;
        movingRect.shapeColor= "green";
        music.stop();

    }

    if(rect2.isTouching(movingRect)){
        movingRect.velocityX= 0;
        movingRect.velocityY= 0;
        movingRect.shapeColor= "red";
        music.stop();

    }

    if(rect3.isTouching(movingRect)){
        movingRect.velocityX= 0;
        movingRect.velocityY= 0;
        movingRect.shapeColor= "yellow";
        music.stop();

    }

    if(rect4.isTouching(movingRect)){
        movingRect.velocityX= 0;
        movingRect.velocityY= 0;
        movingRect.shapeColor= "blue";
        music.stop();

    }

    
    //add condition to check if box touching surface and make it box
    drawSprites();
}

