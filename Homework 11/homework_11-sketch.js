// x and y for avatar
var avatarX = 100;
var avatarY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
// moving squares
var square1X = 50;
var square1Y = 50;
var square1XSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
var square1YSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
var square2X = 550
var square2Y = 550
var square2XSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
var square2YSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
// moving circles
var circle1X = 100
var circle1Y = 100
var circle1XSpeed = Math.floor(Math.random()*10)+1;
var circle1YSpeed = Math.floor(Math.random()*10)+1;
var circle2X = 600
var circle2Y = 600
var circle2XSpeed = Math.floor(Math.random()*10)+1;
var circle2YSpeed = Math.floor(Math.random()*10)+1;
// create a shape when the mouse is clicked
var mouseSquareX;
var mouseSquareY;
function setup()
{
    createCanvas (1425, 725);
}
function draw()
{
    background (0,153,51);
    // border color
    stroke (128,0,0);
    fill (128,0,0);
    // top border
    rect (0,0,1425,10);
    // left border
    rect (0,0,10,725);
    // bottom border
    rect (0,715,687.5,10);
    rect (737.5,715,687.5,10);
    // right border
    rect (1415,0,10,725);
    // exit message
    stroke (0,0,0);
    fill (153,0,255);
    textSize (36);
    text ("EXIT", 673.5,705);
    // avatar
    fill (153,0,255);
    stroke (0,0,0);
    circle (avatarX,avatarY,25);
    // avatar handling
    if (keyIsDown(w))
    {
        avatarY -= 5;   
    }
    if (keyIsDown(s))
    {
        avatarY += 5;   
    }
    if (keyIsDown(a))
    {
        avatarX -= 5;   
    }
    if (keyIsDown(d))
    {
        avatarX += 5;   
    }
    // moving square 1 appearance
    fill (128,0,0);
    square (square1X,square1Y, 50);
    // moving square 1 jitter
    square1XSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
    square1YSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
    // moving square 1
    square1X += square1XSpeed;
    square1Y += square1YSpeed;
    // moving square 2 appearance
    fill (128,0,0);
    square (square2X,square2Y,50);
    // moving square 2 jitter
    square2XSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
    square2YSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
    // moving square 2
    square2X += square2XSpeed
    square2Y += square2YSpeed
    // moving circle 1 appearance
    fill (0,0,0);
    circle (circle1X,circle1Y,50);
    // moving circle 1 jitter
    circle1XSpeed = Math.floor(Math.random()*10)+1;
    circle1YSpeed = Math.floor(Math.random()*10)+1;
    // moving circle 1
    circle1X += circle1XSpeed
    circle1Y += circle1YSpeed
    // moving circle 2 appearance
    fill (0,0,0);
    circle (circle2X,circle2Y,50);
    // moving circle 2 jitter
    circle2XSpeed = Math.floor(Math.random()*10)+1;
    circle2YSpeed = Math.floor(Math.random()*10)+1;
    // moving circle 2
    circle2X += circle2XSpeed
    circle2Y += circle2YSpeed
    // moving square 1 boundaries
    if (square1X > width)
    {
        square1X = 0;
    }
    if (square1X < 0)
    {
        square1X = width;
    }
    if (square1Y > height)
    {
        square1Y = 0;
    }
    if (square1Y < 0)
    {
        square1Y = height;
    }
    // moving square 2 boundaries
    if (square2X > width)
    {
        square2X = 0;
    }
    if (square2X < 0)
    {
        square2X = width;
    }
    if (square2Y > height)
    {
        square2Y = 0;
    }
    if (square2Y < 0)
    {
        square2Y = height;
    }
    // moving circle 1 boundaries
    if (circle1X > width)
    {
        circle1X = 0;
    }
    if (circle1X < 0)
    {
        circle1X = width
    }
    if (circle1Y > height)
    {
        circle1Y = 0
    }
    if (circle1Y < 0)
    {
        circle1Y = height
    }
    // moving circle 2 boundaries
    if (circle2X > width)
    {
        circle2X = 0;
    }
    if (circle2X < 0)
    {
        circle2X = width
    }
    if (circle2Y > height)
    {
        circle2Y = 0
    }
    if (circle2Y < 0)
    {
        circle2Y = height
    }
    // character exit boundary
    if (avatarX > 687.5 && avatarX < 737.5 && avatarY > 720)
    {
        fill (153,0,255);
        stroke (0);
        textSize (50);
        text ("You Win!",625,362.5);
    }
    // create the shape based on the mouse click
    stroke (0,0,0);
    fill (128,0,0);
    square (mouseSquareX,mouseSquareY,100);
}
function mouseClicked()
{
    mouseSquareX = mouseX;
    mouseSquareY = mouseY;
}