"use strict";
//№1
let button_1_1, button_2_2;
button_1_1 = document.querySelector('#button1_1');
button_2_2 = document.querySelector('#button2_2');
button_1_1.addEventListener('click', func1);
button_2_2.addEventListener('click', func2);
function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}
