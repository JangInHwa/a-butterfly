///<reference path="/Users/uglyonlytoday/Desktop/Coding/js/p5/intellisence/p5.global-mode.d.ts" />


const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;



function setup() {
	console.log(screenWidth, screenHeight);
	createCanvas(screenWidth, screenHeight);
	background(0);
}

function draw() {
	if (!(mouseX == 0 && mouseY == 0)) {
		let pos = createVector(width / 2, height / 2);
		let mouse = createVector(mouseX, mouseY);

		let v = p5.Vector.sub(mouse, pos);

		translate(width / 2, height / 2);
		strokeWeight(4);
		stroke(255, 30);
		line(0, 0, v.x, v.y);

	}
}


function touchMoved() {
	return false;
}

function touchStarted() {
	return false;
}
