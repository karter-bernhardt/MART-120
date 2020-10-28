var headX = 712.5
var mouthX = 712.5
var leftarmY = 323
var rightarmY = 323
var torsoX = 688
var torsoY = 283
var headMovement = Math.floor(Math.random()*10)+1;
var mouthMovement = Math.floor(Math.random()*10)+1;
var leftarmMovement = Math.floor(Math.random()*10)+1;
var rightarmMovement = Math.floor(Math.random()*10)+1;
var torsoxMovement = Math.floor(Math.random()*10)+1;
var torsoyMovement = Math.floor(Math.random()*10)+1;
var titleSize = 10;
var titleCount = 0;
var titleScale = 10;
var nameSize = 5;
var nameCount = 0;
var nameScale = 5;
function setup()
{
    createCanvas(1425,740);
}
function draw()
{
    background(102,204,255);
    // back hair
    stroke (204, 153, 0);
    line (612.5,185,612.5,350);
    line (615.5,185,615.5,350);
    line (618.5,185,618.5,350);
    line (621.5,185,621.5,350);
    line (624.5,185,624.5,350);
    line (627.5,185,627.5,350);
    line (630.5,185,630.5,350);
    line (633.5,185,633.5,350);
    line (636.5,185,636.5,350);
    line (639.5,185,639.5,350);
    line (642.5,185,642.5,350);
    line (645.5,185,645.5,350);
    line (648.5,185,648.5,350);
    line (651.5,185,651.5,350);
    line (654.5,185,654.5,350);
    line (657.5,185,657.5,350);
    line (660.5,185,660.5,350);
    line (663.5,185,663.5,350);
    line (666.5,185,666.5,350);
    line (669.5,185,669.5,350);
    line (672.5,185,672.5,350);
    line (675.5,185,675.5,350);
    line (678.5,185,678.5,350);
    line (681.5,185,681.5,350);
    line (684.5,185,684.5,350);
    line (687.5,185,687.5,350);
    line (737.5,185,737.5,350);
    line (740.5,185,740.5,350);
    line (743.5,185,743.5,350);
    line (746.5,185,746.5,350);
    line (749.5,185,749.5,350);
    line (752.5,185,752.5,350);
    line (755.5,185,755.5,350);
    line (758.5,185,758.5,350);
    line (761.5,185,761.5,350);
    line (764.5,185,764.5,350);
    line (767.5,185,767.5,350);
    line (770.5,185,770.5,350);
    line (773.5,185,773.5,350);
    line (776.5,185,776.5,350);
    line (779.5,185,779.5,350);
    line (782.5,185,782.5,350);
    line (785.5,185,785.5,350);
    line (788.5,185,788.5,350);
    line (791.5,185,791.5,350);
    line (794.5,185,794.5,350);
    line (797.5,185,797.5,350);
    line (800.5,185,800.5,350);
    line (803.5,185,803.5,350);
    line (806.5,185,806.5,350);
    line (809.5,185,809.5,350);
    line (812.5,185,812.5,350);
    // head
    stroke (0,0,0);
    fill (255,204,153);
    circle (headX,185,200);
    if (headX >= 1325 || headX <=100)
    {   
        headMovement *= -1;
    }
    headX += headMovement;
    // front hair
    noFill ();
    stroke (204,153,0);
    arc (642.5,85,140,150,0,HALF_PI);
    arc (642.5,85,130,140,0,HALF_PI);
    arc (642.5,87,120,130,0,HALF_PI);
    arc (642.5,87,110,120,0,HALF_PI);
    arc (642.5,88,100,110,0,HALF_PI);
    arc (642.5,89,90,100,0,HALF_PI);
    arc (642.5,91,80,90,0,HALF_PI);
    arc (642.5,91,70,80,0,HALF_PI);
    arc (642.5,93,60,70,0,HALF_PI);
    arc (642.5,95,50,60,0,HALF_PI);
    arc (642.5,98,40,50,0,HALF_PI);
    arc (642.5,102,30,40,0,HALF_PI);
    arc (642.5,105,20,30,0,HALF_PI);
    arc (642.5,110,10,20,0,HALF_PI);
    line (642.5,115,642.5,350);
    line (639.5,118,639.5,350);
    line (636.5,121,636.5,350);
    line (633.5,124,633.5,350);
    line (630.5,129,630.5,350);
    line (627.5,133,627.5,350);
    line (624.5,138,624.5,350);
    line (621.5,145,621.5,350);
    line (618.5,152,618.5,350);
    line (615.5,162,615.5,350);
    arc (782.5,85,140,150,HALF_PI, PI);
    arc (782.5,85,130,140,HALF_PI, PI);
    arc (782.5,87,120,130,HALF_PI, PI);
    arc (782.5,87,110,120,HALF_PI, PI);
    arc (782.5,88,100,110,HALF_PI, PI);
    arc (782.5,89,90,100,HALF_PI, PI);
    arc (782.5,91,80,90,HALF_PI, PI);
    arc (782.5,93,70,80,HALF_PI, PI);
    arc (782.5,95,60,70,HALF_PI, PI);
    arc (782.5,96,50,60,HALF_PI, PI);
    arc (782.5,99,40,50,HALF_PI, PI);
    arc (782.5,102,30,40,HALF_PI, PI);
    arc (782.5,105,20,30,HALF_PI, PI);
    arc (782.5,110,10,20,HALF_PI, PI);
    line (782.5,115,782.5,350);
    line (785.5,118,785.5,350);
    line (788.5,121,788.5,350);
    line (791.5,124,791.5,350);
    line (794.5,129,794.5,350);
    line (797.5,133,797.5,350);
    line (800.5,138,800.5,350);
    line (803.5,145,803.5,350);
    line (806.5,152,806.5,350);
    line (809.5,162,809.5,350);
    // torso
    fill (0,0,153);
    stroke(0,0,0);
    rect (687,283,50,40);
    line (695,283,695,323);
    line (702,283,702,323);
    line (709,283,709,323);
    line (716,283,716,323);
    line (723,283,723,323);
    line (730,283,730,323);
    rect (torsoX,torsoY,150,200);
    if (torsoX >= 1375 || torsoX <= 0 && torsoY >= 540 || torsoY <=0)
    {
        torsoxMovement *= -1;
        torsoyMovement *= -1;
    }
    torsoX += torsoxMovement
    torsoY += torsoyMovement
    // arms
    rect (608,leftarmY,30,200);
    if (leftarmY >= 540 || leftarmY <= 0)
    {
        leftarmMovement *= -1;
    }
    leftarmY += leftarmMovement;
    rect (788,rightarmY,30,200);
    if (rightarmY >= 540 || rightarmY <= 0)
    {
        rightarmMovement *= -1;
    }
    rightarmY += rightarmMovement;
    // legs
    fill (0,51,102)
    rect (638,523,150,150);
    line (713,523,713,673);
    // hands
    fill (255,204,153)
    arc (623,523,30,40,0,PI);
    arc (803,523,30,40,0,PI);
    // feet
    fill (0,0,0)
    arc (675.5,673,75,100,0,PI);
    arc (750.5,673,75,100,0,PI);
    stroke (255,255,255);
    line (656.75,683,694.25,683);
    line (656.75,693,694.25,693);
    line (656.75,703,694.25,703);
    line (731.75,683,769.25,683);
    line (731.75,693,769.25,693);
    line (731.75,703,769.25,703);
    // eyes
    fill (255,255,255);
    ellipse (680.5,175,20,10);
    ellipse (740.5,175,20,10);
    stroke (0,0,0);
    fill (0,0,255);
    circle (680.5,175,10);
    circle (740.5,175,10);
    fill (0,0,0)
    circle (680.5,175,5);
    circle (740.5,175,5);
    // nose
    stroke (0,0,0);
    fill (255,204,153);
    triangle (712.5,185,708.5,220,716.5,220);
    // mouth
    arc (mouthX,230,60,50,0,PI);
    if (mouthX >= 1395 || mouthX <=30)
    {
        mouthMovement *= -1;
    }
    mouthX += mouthMovement;
    // decoration
    textSize(titleSize);
    titleSize += titleScale;
    titleCount++;
    if(titleCount > 5)
    {
        titleScale *=-1;
        titleCount = 0;
    }
    fill (0,0,0)
    text("HTML KTB",1060,600);
    textSize(nameSize);
    nameSize += nameScale;
    nameCount++;
    if(nameCount > 5)
    {
        nameScale *= -1;
        nameCount = 0;
    }
    fill (0,0,0)
    text ("Karter Bernhardt",1060,650)

}