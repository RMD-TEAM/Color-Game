"use strict"

let chosenColor; 		// color chosen by user
let screenColor;		// color chosen by game
let value;				// random number
let isGame = false;		// game status
let Tpoint;				// number of correct clicks
let Fpoint;				// number of wrong clocks
let allScore;			// final score
let time = 0;			// game time
let endTime;
let timer;
let timerId;
let healthDelta = 0;
let health = 100;





// timer. Have tick every 1 ms

function timerBar() {

	if (isGame == true) {

		time += 0.1;

	document.getElementById("timer").innerHTML = `${time}`;

	timerId = setInterval(timerBar, 1);

	healthBar();

	}

	defeat();

}

// setting up healthBar

function healthBar() {

	healthDelta += 0.002;

	health = 100 - healthDelta;

	document.getElementById("timeline").style.width = `${health}%`;

	if (health > 100) {

		health = 100;

	}

}

// correcting time of play

function setTime() {

	endTime = Math.round((time / 100)) / 10; 

}


// defeat conditions

function defeat() {

	if (health <= 0) {

		isGame = false;

		if (isGame == false) {

			setTime();

			document.getElementById("gameMenu").style.display = "block";

			clearInterval(timerId);

			showTime();

		}
		
	}

}

// starting game

function gameStart() {
	health = 100;
	healthDelta = 0;
	time = 0;
	isGame = true;
	changeColor();
	document.getElementById("gameMenu").style.display = "none";
	healthBar();
	timerBar();
}

// get color by click on button

function getColor(id){

	switch (id) {

		case "color_blue":
			chosenColor = 1;
			break;

		case "color_violet":
			chosenColor = 2;
			break;

		case "color_cyan":
			chosenColor = 3;
			break;

		case "color_red":
			chosenColor = 4;
			break;

		case "color_yellow":
			chosenColor = 5;
			break;

		case "color_orange":
			chosenColor = 6;
			break;

		case "color_brown":
			chosenColor = 7;
			break;

		case "color_pink":
			chosenColor = 8;
			break;

		case "color_green":
			chosenColor = 9;
			break;

		default:
			break;

	}

}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let value = min + Math.random() * (max + 1 - min);
  return Math.floor(value);
}

// changing color of screen

function changeColor() {
	


	switch (randomInteger(1, 9)) {

		case 1:
			document.getElementById("screen").style.background = "#1100ff";
			screenColor = 1;
			break;

		case 2:
			document.getElementById("screen").style.background = "#a500b8";
			screenColor = 2;
			break;

		case 3:
			document.getElementById("screen").style.background = "#00aeff";
			screenColor = 3;
			break;

		case 4:
			document.getElementById("screen").style.background = "#cf170a";
			screenColor = 4;
			break;

		case 5:
			document.getElementById("screen").style.background = "#ede500";
			screenColor = 5;
			break;

		case 6:
			document.getElementById("screen").style.background = "#ff6f00";
			screenColor = 6;
			break;

		case 7:
			document.getElementById("screen").style.background = "#803808";
			screenColor = 7;
			break;

		case 8:
			document.getElementById("screen").style.background = "#fc00c6";
			screenColor = 8;
			break;

		case 9:
			document.getElementById("screen").style.background = "#1dc204";
			screenColor = 9;
			break;

		default:
			break;

	}

}

// event when click on button

function clickEvent(id) {

	if (isGame) {

		getColor(id);

		if (chosenColor == screenColor) {

			Tpoint++;
			changeColor();
			healthDelta -= 4;

		} else {
			
			Fpoint++;

		}

	}

}

// show time

function showTime() {

	document.getElementById("playingTime").innerHTML = `${endTime} seconds!`;

}

