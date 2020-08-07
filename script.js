var height = 5.379;
var width = 10;
var heightComparative = height;
var widthComparative = width;
var area = 10000;
var ratio = (Math.max(height, width)) / (Math.min(height, width));


//GET MAX VALUES


while ((height * width) < area) {
	var b = (Math.max(height, width));
	var c = (Math.min(height, width));
	b+=0.1;
	b = b.toFixed(1)
	c = c + (0.1 / ratio);
	height = (Math.max(b, c));
	width = (Math.min(b, c));
}

height-=0.1;
height = height.toFixed(1);
width = width - (0.1 / ratio);
width = width.toFixed(2);

if (heightComparative > widthComparative ){
	b = (Math.max(height, width));
	c = (Math.min(height, width));
	height = b;
	width = c;
} else if (heightComparative < widthComparative){
	b = (Math.max(height, width));
	c = (Math.min(height, width));
	height = c;
	width = b;
}




console.log("If the area is " + area + " The height is " + height + " and the width is " + width + ".");