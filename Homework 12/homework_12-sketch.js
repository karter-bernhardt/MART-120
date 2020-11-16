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
var mouseCircleX;
var mouseCircleY;
function setup()
{
    createCanvas (1425, 725);
    createAvatar (100,100);
    createMovingSquare1 (50,50);
    createMovingSquare2 (550,550);
    createMovingCircle1 (100,100);
    createMovingCircle2 (600,600);
}
function draw()
{
    background (0,153,51);
    // draw borders
    drawBorders ();
    // exit sign
    exitBoundary ();
    // draw avatar
    drawAvatar ();
    // avatar handling
    avatarMovement ();
    // moving square 1 appearance
    drawMovingSquare1 ();
    // moving square 1 jitter
    square1Jitter ();
    // moving square 1
    square1Movement ();
    // moving square 2 appearance
    drawMovingSquare2 ();
    // moving square 2 jitter
    square2Jitter ();
    // moving square 2
    square2Movement ();
    // moving circle 1 appearance
    drawMovingCircle1 ();
    // moving circle 1 jitter
    circle1Jitter ();
    // moving circle 1
    circle1Movement ();
    // moving circle 2 appearance
    drawMovingCircle2 ();
    // moving circle 2 jitter
    circle2Jitter ();
    // moving circle 2
    circle2Movement ();
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
    exitMessage ();
    // create the shape based on the mouse click
    stroke (0,0,0);
    fill (128,0,0);
    circle (mouseCircleX,mouseCircleY,100);
}
function mouseClicked()
{
    mouseCircleX = mouseX;
    mouseCircleY = mouseY;
}
function avatarMovement()
{
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
}
function createAvatar (x,y)
{
    avatarX = x;
    avatarY = y;
}
function drawAvatar ()
{
    fill (153,0,255);
    stroke (0,0,0);
    circle (avatarX,avatarY,25);
}
function drawBorders ()
{
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
}
function exitBoundary ()
{
    stroke (0,0,0);
    fill (153,0,255);
    textSize (36);
    text ("EXIT", 673.5,705);
}
function createMovingSquare1 (x,y)
{
    square1X = x;
    square1Y = y;
}
function drawMovingSquare1 ()
{
    fill (128,0,0);
    square (square1X,square1Y,50);
}
function square1Jitter ()
{
    square1XSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
    square1YSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
}
function square1Movement ()
{
    square1X += square1XSpeed;
    square1Y += square1YSpeed;
}
function createMovingSquare2 (x,y)
{
    square2X = x;
    square2Y = y;
}
function drawMovingSquare2 ()
{
    fill (128,0,0);
    square (square2X,square2Y,50);
}
function square2Jitter ()
{
    square2XSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
    square2YSpeed = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
}
function square2Movement ()
{
    square2X += square2XSpeed
    square2Y += square2YSpeed
}
function createMovingCircle1 (x,y)
{
    circle1X = x;
    circle1Y = y;
}
function drawMovingCircle1 ()
{
    fill (0,0,0);
    circle (circle1X,circle1Y,50);
}
function circle1Jitter ()
{
    circle1XSpeed = Math.floor(Math.random()*10)+1;
    circle1YSpeed = Math.floor(Math.random()*10)+1;
}
function circle1Movement ()
{
    circle1X += circle1XSpeed
    circle1Y += circle1YSpeed
}
function createMovingCircle2 (x,y)
{
    circle2X = x;
    circle2Y = y;
}
function drawMovingCircle2 ()
{
    fill (0,0,0);
    circle (circle2X,circle2Y,50);
}
function circle2Jitter ()
{
    circle2XSpeed = Math.floor(Math.random()*10)+1;
    circle2YSpeed = Math.floor(Math.random()*10)+1;
}
function circle2Movement ()
{
    circle2X += circle2XSpeed
    circle2Y += circle2YSpeed
}
function exitMessage ()
{
    if (avatarX > 687.5 && avatarX < 737.5 && avatarY > 720)
    {
        fill (153,0,255);
        stroke (0);
        textSize (50);
        text ("You Win!",625,362.5);
    }
}