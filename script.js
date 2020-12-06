var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var hitCounter = 0;
var missCounter = 0;

function fly(direction){
	var duck = document.getElementById('duck');
	var rect = duck.getBoundingClientRect();
	var left = (rect.left - 8);
	var top = (rect.top - 8);
	switch(direction){
		case "N":
			var newTop = top - 75;
			if(newTop > 0){
				duck.style.top = newTop + "px";
			}
			break;
		case "NE":
			var newTop = top - 75;
			var newLeft = left + 75;
			if(newTop > 0){
				duck.style.top = newTop + "px";
			}
			if(newLeft < 1420){
				duck.style.left = newLeft + "px";
			}
			break;
		case "E":
			var newLeft = left + 75;
			if(newLeft < 1420){
				duck.style.left = newLeft + "px";
			}
			break;
		case "SE":
			var newTop = top + 75;
			var newLeft = left - 75;
			if(newTop > 0){
				duck.style.top = newTop + "px";
			}
			if(newLeft > 0){
				duck.style.left = newLeft + "px";
			}
			break;
		case "S":
			var newTop = top + 75;
			if(newTop < 600){
				duck.style.top = newTop + "px";
			}
			break;
		case "SW":
			var newTop = top + 75;
			var newLeft = left - 75;
			if(newTop < 600){
				duck.style.top = newTop + "px";
			}
			if(newLeft > 0){
				duck.style.left = newLeft + "px";
			}
			break;
		case "W":
			var newLeft = left - 75;
			if(newLeft > 0){
				duck.style.left = newLeft + "px";
			}
			break;
		case "NW":
			var newTop = top - 75;
			var newLeft = left - 75;
			if(newTop > 0){
				duck.style.top = newTop + "px";
			}
			if(newLeft > 0){
				duck.style.left = newLeft + "px";
			}
			break;
		default:
			console.log("erroer kan die kant niet op");
	}
}

var duckInterval = setInterval(function(){
	var randomInt = Math.floor((Math.random() * 8));
	fly(directions[randomInt]);
}, 500);

var duck = document.getElementById("duck");
var container = document.getElementById("container");
var hit = document.getElementById("hit");
var miss = document.getElementById("miss");
duck.onclick = function(){
	hitCounter += 1;
	hit.innerHTML = "hit: " + hitCounter;
}

container.onclick = function(){
	missCounter += 1;
	miss.innerHTML = "miss: " + missCounter;
}