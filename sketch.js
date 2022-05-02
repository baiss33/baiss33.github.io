var moonImg ;
let pos = 0;

function preload(){
	moonImg = loadImage('peonix.png');
}

function setup() {
  let canvas = createCanvas(2000, 2000);
  canvas.parent('sketch-container');
	//background(0);

}

function draw() {

	noStroke();
	scale(1.4);
	translate(0,-200);
	let span =map(mouseX,0,width,20,100);
	for(var i=0;i<moonImg.width;i+=span){
		for(var o=0;o<moonImg.height;o+=span){
			let c = moonImg.get(i,o)

			fill(c[0],
				 c[1],
				 c[2])
			push();
				translate(i,o);
				rotate(i/100);
				scale(random(2));
				rect(0,0,random(3),random(3));
			pop();
		}
	}
}
function mouseWheel(event) {
	print(event.delta);
	pos += event.delta;
	print(pos);
}
