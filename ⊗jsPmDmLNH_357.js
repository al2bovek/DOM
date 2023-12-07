"use strict";
//№1
let in_arr = document.querySelectorAll('input.inNum');
for(let e of in_arr) e.addEventListener('blur', func);
function func() {
	this.value = Number(this.value) + 1;
}
//№2
let p_arr = document.querySelectorAll('p.p_num');
for(let e of p_arr) e.addEventListener('click', getSqr);
function getSqr() {
    this.textContent *= this.textContent;
}