"use strict";
//№1
let yearArr = document.querySelectorAll('li');
let newYearArr = [];
let res = 0;
for(let e of yearArr) {
    let sum = 0;
    let year =  e.textContent.split('');
    for(let e of year) {
        sum += +e;
    }
    if(sum === 6) {
        newYearArr.push(e.textContent);
        res += sum;
    }
}
console.log(newYearArr, res);
