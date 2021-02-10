/*************************************************************************
    Project Name
          by Maj Jenkins

    Overview:

 
    ---------------------------------------------------------------------
    Notes: 
     (1)
**************************************************************************/


/*************************************************************************
// Global variables
**************************************************************************/

var gDebugMode = false;




/*************************************************************************
// Window resize
**************************************************************************/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*************************************************************************
// Function preload
**************************************************************************/


/*************************************************************************
// Function setup
**************************************************************************/

function setup() {
  createCanvas(windowWidth, windowHeight);
 }

/*************************************************************************
// Function draw
**************************************************************************/

function draw() {
  background('#B7CCD5');
  fill('#fff');
  stroke('#fff');

  fsMessage();

	// Toggle debug Mode
  if( gDebugMode == true ) {
    drawDebugInfo();
  }

}


/*************************************************************************
// Custom functions
**************************************************************************/





/*************************************************************************
// Fullscreen and debug functions
**************************************************************************/

// Fullscreen message
function fsMessage() {
  // if (fs === true) {
      push();
      fill(255);
      noStroke();
      textSize(width/60);
      textAlign(LEFT);
      text("Press [F] for fullscreen", 0 + width/100 , height - height/100)
      pop();
    // }
}

// Get coordinates from click (dsable background)
function mouseClicked() {
    print(mouseX, mouseY);
    fill(205);
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 5, 5);
}

// Debug mode
function drawDebugInfo() {
  push();
    fill(255);
    noStroke();
    textSize(20);
    text("X: " + mouseX + "   Y: " + mouseY, 20, 20);
  pop();
}

// keyTyped for debugMode and fullscreen
function keyTyped() {
  if (key === 'd') {
    gDebugMode = !gDebugMode;
  }
  if (key === 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
 }