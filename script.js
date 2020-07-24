var length = 0.45675;
var width = 1;
var lengthComparative = length;
var widthComparative = width;
var area = 234;
var ratio = (Math.max(length, width)) / (Math.min(length, width));


//GET MAX VALUES


while ((length * width) < area) {
	var b = (Math.max(length, width));
	var c = (Math.min(length, width));
	b+=0.1;
	b = b.toFixed(1)
	c = c + (0.1 / ratio);
	length = (Math.max(b, c));
	width = (Math.min(b, c));
}

length-=0.1;
length = length.toFixed(1);
width = width - (0.1 / ratio);
width = width.toFixed(2);

if (lengthComparative > widthComparative ){
	b = (Math.max(length, width));
	c = (Math.min(length, width));
	length = b;
	width = c;
} else if (lengthComparative < widthComparative){
	b = (Math.max(length, width));
	c = (Math.min(length, width));
	length = c;
	width = b;
}




console.log("If the area is " + area + " The length is " + length + " and the width is " + width + ".");