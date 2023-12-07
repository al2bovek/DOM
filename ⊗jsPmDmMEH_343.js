"use strict";
//№1
let elem1_1, elem1_2, elem1_3, elem1_4, elem1_5;
elem1_1 = document.querySelector('#elem1_2');
elem1_2 = document.querySelector('#elem2_2');
elem1_3 = document.querySelector('#elem3_2');
elem1_4 = document.querySelector('#elem4_2');
elem1_5 = document.querySelector('#elem5_2');
elem1_1.addEventListener('mouseover', func);
elem1_2.addEventListener('mouseover', func);
elem1_3.addEventListener('mouseover', func);
elem1_4.addEventListener('mouseover', func);
elem1_5.addEventListener('mouseover', func);

function func() {
	console.log('message');
}