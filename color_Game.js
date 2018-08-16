var colors = generateRandomColors(6);

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numOfsquares = 6;



easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfsquares = 3;
	colors = generateRandomColors(numOfsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfsquares = 6;
	colors = generateRandomColors(numOfsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
			square[i].style.background = colors[i];
			square[i].style.display = "block";
	}	
});



resetButton.addEventListener("click", function(){
	//generate random color
	colors = generateRandomColors(numOfsquares);
	//pick color
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	this.textContent = "New colors";
	messageDisplay.textContent = "";

	//chnge squares
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";
})
	colorDisplay.textContent = pickedColor;




for (var i = 0; i < square.length; i++) {
	//initial colors to square
	square[i].style.backgroundColor = colors[i];

	//add click listeners to square
	square[i].addEventListener("click", function(){
		//grab color of clicked square and compare
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	var arr = []
for (var i = 0; i < num; i++) {
	arr.push(randomColor());
}

return arr;
}

function randomColor(){
	//pick red color from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick green color from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick blue color from 0 - 255
	var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";

}










