"use strict";
//№1
let log = console.log;
let a_1 = document.querySelector('#a_1');
document.querySelector('#b_1').addEventListener('click', function goTo() {
    a_1.textContent += `(${a_1.href})`;
    document.querySelector('#b_1').removeEventListener('click', goTo)
});
//№2
document.querySelector('#b_2').addEventListener('click', function getIncr() {this.value++;
 if(this.value > 9) document.querySelector('#b_2').removeEventListener('click', getIncr);
})
