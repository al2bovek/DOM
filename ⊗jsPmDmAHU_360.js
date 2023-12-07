"use strict";
//№1
let pArr = document.querySelectorAll('p');
for(let e of pArr) {
    e.addEventListener('click', function addSymb() {
        this.textContent += '!';
        e.removeEventListener('click', addSymb)
    })
}