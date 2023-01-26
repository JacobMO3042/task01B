let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));
}

function draw() {
    background(100,20,255);
    calcWave();
    renderWave();
}

function calcWave() {
    // Increment theta (try different values for
    theta += 0.02;

    // Y value calculator
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    noStroke();
    fill(200,150,255);
    // wave code
    let spacer = height / 8 + 10 //makes space for eight waves by dividing by 8.
    for (let h = 0; h < height; h += spacer) {
        for (let x = 0; x < yvalues.length; x++) {
            ellipse(x * xspacing,h + yvalues[x], 16, 16);

        }
    }
    for (let h = 0; h < height; h += spacer) {
        for (let x = 0; x < yvalues.length; x++) {
            fill(200,200,255)
            ellipse(x * xspacing,h + yvalues[x]+ 60, 16, 16);
        }
    }



}
