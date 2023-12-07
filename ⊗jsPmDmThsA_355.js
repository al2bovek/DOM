"use strict";
//№1
let arr = document.querySelectorAll('.test');
function addEl() {
    this.textContent += '!';
}
arr[0].addEventListener('click', addEl);
arr[1].addEventListener('click', addEl);
arr[2].addEventListener('click', addEl);
arr[3].addEventListener('click', addEl);
arr[4].addEventListener('click', addEl);
//№2
let arr_1 = document.querySelectorAll('.sqr');
function getSqr() {
    this.value = this.value **2;
}
arr_1[0].addEventListener('blur', getSqr);
arr_1[1].addEventListener('blur', getSqr);
arr_1[2].addEventListener('blur', getSqr);