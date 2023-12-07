"use strict";
//№1
let elem_3_3 = document.querySelector('#elem3_3');
elem_3_3.addEventListener('mouseover', func1);
elem_3_3.addEventListener('mouseover', func2);
elem_3_3.addEventListener('mouseover', func3);
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}