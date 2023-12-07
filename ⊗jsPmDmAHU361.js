"use strict";
//№1
let liCont = document.querySelectorAll('ul .li_1');
for(let e of liCont) {
    e.addEventListener('click', function addInt() {
        this.textContent++;
    })
}
//№2
let liCont_2 = document.querySelectorAll('ul .li_2');
for(let e of liCont_2) {
    e.addEventListener('click', function addInt() {
        this.textContent++;
        e.removeEventListener('click', addInt);
    });
}
//№3
let liCont_3 = document.querySelectorAll('ul .li_3');
for(let e of liCont_3) {
    e.addEventListener('click', function addInt() {
        this.textContent++;
        if(this.textContent > 9) e.removeEventListener('click', addInt);
    });
}