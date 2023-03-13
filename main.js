status = "";
img ="";
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", moadLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects"
}
function draw()
{
    image(img, 0, 0, 300, 300);
    fill("red");
    text("dog", 100, 100);
    stroke("red");
    noFill();
    rect(0, 0, 250, 250);

    noFill();
    stroke("red");
    rect(0, 0, 100, 100);
    fill("red");
    text("cat", 50, 50);
}
function moadLoaded()
{
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results)
{
    if(error)
    [
        console.error("error")
    ]
    else
    {
        console.log(results);
    }
}