var raindrops = []
var letters = "ABCDEFGHIJKLMNOPQRSTU6VWXY012345789abcdefghijklpqrstuvexyz";
function setup()
{   
    createCanvas(1500,600);
    frameRate(15);
    
    for(var i=0;i<100;i++)
    {
        raindrops.push(new Raindrop());
    }
}

function draw()
{

    background(0,100);
    for(var i=0;i<drops.length;i++)
    {
        raindrops[i].draw();
        raindrops[i].update();
    }
}