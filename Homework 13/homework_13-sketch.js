// x and y for avatar
var avatarX = 100;
var avatarY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
// moving squares
var squareX = 50;
var squareY = 50;
var squareXs = [];
var squareYs = [];
var sides = [];
var squareXSpeeds = [];
var squareYSpeeds = [];
// moving circles
var circleX = 100
var circleY = 100
var circleXs = [];
var circleYs = [];
var diameters = [];
var circleXSpeeds = [];
var circleYSpeeds = [];
// moving ellipses
var ellipseX = 150
var ellipseY = 150
var ellipseXs = [];
var ellipseYs = [];
var widths = [];
var heights = [];
var ellipseXSpeeds = [];
var ellipseYSpeeds = [];
// moving rectangles
var rectangleX = 200
var rectangleY = 200
var rectangleXs = [];
var rectangleYs = [];
var recWidths = [];
var recHeights = [];
var rectangleXSpeeds = [];
var rectangleYSpeeds = [];
// moving points 
var pointX = 250;
var pointY = 250;
var pointXs = [];
var pointYs = [];
var pointXSpeeds = [];
var pointYSpeeds = []; 
// create a shape when the mouse is clicked
var mouseCircleX;
var mouseCircleY;
function setup()
{
    createCanvas (1425, 725);
    createAvatar (100,100);
    for (var i = 0; i < 10; i++)
    {
        squareXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        squareYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        squareXs[i] = getRandomNumber (1425);
        squareYs[i] = getRandomNumber (725);
        sides[i] = getRandomNumber (50);
    }
    for (var i = 0; i < 10; i++)
    {
        circleXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        circleYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        circleXs[i] = getRandomNumber (1425);
        circleYs[i] = getRandomNumber (725);
        diameters[i] = getRandomNumber (50);
    }
    for (var i = 0; i < 10; i++)
    {
        ellipseXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        ellipseYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        ellipseXs[i] = getRandomNumber (1425);
        ellipseYs[i] = getRandomNumber (725);
        widths[i] = getRandomNumber (15);
        heights[i] = getRandomNumber (30);
    }
    for (var i = 0; i < 10; i++)
    {
        rectangleXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        rectangleYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        rectangleXs[i] = getRandomNumber (1425);
        rectangleYs[i] = getRandomNumber (725);
        recWidths[i] = getRandomNumber (30);
        recHeights[i] = getRandomNumber (60);
    }
    for (var i = 0; i < 10; i++)
    {
        pointXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        pointYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        pointXs[i] = getRandomNumber (1425);
        pointYs[i] = getRandomNumber (725);
    }
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
    // draw moving squares
    fill (128,0,0)
    stroke (0,0,0)
    for (var i = 0; i < squareXs.length; i++)
    {
        square (squareXs[i],squareYs[i],sides[i]);
        squareXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        squareYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        // squares movement
        squareXs[i] += squareXSpeeds[i];
        squareYs[i] += squareYSpeeds[i];
        // moving squares boundary
        if (squareXs[i] > width)
        {
        squareXs[i] = 0;
        }
        if (squareXs[i] < 0)
        {
        squareXs[i] = width;
        }      
        if (squareYs[i] > height)
        {
        squareYs[i] = 0;
        }
        if (squareYs[i] < 0)
        {
        squareYs[i] = height;
        }
    }
    // draw moving circles
    fill (0,0,0)
    for (var i = 0; i < circleXs.length; i++)
    {
        circle (circleXs[i],circleYs[i],diameters[i]);
        circleXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        circleYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        // circles movement
        circleXs[i] += circleXSpeeds[i];
        circleYs[i] += circleYSpeeds[i];
        // moving circles boundary
        if (circleXs[i] > width)
        {
        circleXs[i] = 0;
        }
        if (circleXs[i] < 0)
        {
        circleXs[i] = width;
        }      
        if (circleYs[i] > height)
        {
        circleYs[i] = 0;
        }
        if (circleYs[i] < 0)
        {
        circleYs[i] = height;
        }
    }
    // draw moving ellipses
    fill (0,51,0)
    stroke (0,0,0)
    for (var i = 0; i < ellipseXs.length; i++)
    {
        ellipse (ellipseXs[i],ellipseYs[i],widths[i],heights[i]);
        ellipseXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        ellipseYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        // ellipse movement
        ellipseXs[i] += ellipseXSpeeds[i];
        ellipseYs[i] += ellipseYSpeeds[i];
        // moving ellipse boundary
        if (ellipseXs[i] > width)
        {
        ellipseXs[i] = 0;
        }
        if (ellipseXs[i] < 0)
        {
        ellipseXs[i] = width;
        }      
        if (ellipseYs[i] > height)
        {
        ellipseYs[i] = 0;
        }
        if (ellipseYs[i] < 0)
        {
        ellipseYs[i] = height;
        }
    }
        // draw moving rectangles
        fill (255,153,51)
        stroke (0,0,0)
    for (var i = 0; i < rectangleXs.length; i++)
    {
        rect (rectangleXs[i],rectangleYs[i],recWidths[i],recHeights[i]);
        rectangleXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        rectangleYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        // rectangle movement
        rectangleXs[i] += rectangleXSpeeds[i];
        rectangleYs[i] += rectangleYSpeeds[i];
        // moving rectangle boundary
        if (rectangleXs[i] > width)
        {
        rectangleXs[i] = 0;
        }
        if (rectangleXs[i] < 0)
        {
        rectangleXs[i] = width;
        }      
        if (rectangleYs[i] > height)
        {
        rectangleYs[i] = 0;
        }
        if (rectangleYs[i] < 0)
        {
        rectangleYs[i] = height;
        }
    }
    // draw moving points
    stroke (255,0,255);
    strokeWeight (5);
    for (var i = 0; i < pointXs.length; i++)
    {
        point (pointXs[i],pointYs[i]);
        pointXSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        pointYSpeeds[i] = Math.floor(Math.random()*(Math.floor(Math.random()*5))+1);
        // point movement
        pointXs[i] += pointXSpeeds[i];
        pointYs[i] += pointYSpeeds[i];
        // moving point boundary
        if (pointXs[i] > width)
        {
        pointXs[i] = 0;
        }
        if (pointXs[i] < 0)
        {
        pointXs[i] = width;
        }      
        if (pointYs[i] > height)
        {
        pointYs[i] = 0;
        }
        if (pointYs[i] < 0)
        {
        pointYs[i] = height;
        }
    }
    // character exit boundary
    exitMessage ();
    // create the shape based on the mouse click
    stroke (0,0,0);
    fill (255,255,0);
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
function getRandomNumber (number)
{
    return Math.floor(Math.random()*number)+10;
}