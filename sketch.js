let gui;
var backgroundColour = "#000000";
var theTextColour = [0, 255, 0];
var theText = "Type some text here";
var theTextSize = 14;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui('Change the background colour');
  gui.addGlobals('backgroundColour', "theText", "theTextColour", "theTextSize");
}

function draw() {
  background(backgroundColour);
  noStroke();
  fill(theTextColour);
  textSize(theTextSize);
  text(theText, 50, height / 2);
}