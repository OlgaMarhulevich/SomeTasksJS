/* 1 */
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/* 2 */
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

/* 3 */
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

/* 4 */
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push('X');
}
console.log(arr4);

/* 5 */
let arr5 = [];
for (let i = 1; i < 11; i++) {
    arr5.push(i);
}
console.log(arr5);

/* 6 */
let arr6 = [];
for (let i = 1; i < 11; i++) {
    arr6.push(Math.random().toFixed(2));
}
console.log(arr6);

/* 7 */
let arr7 = [];
for (let i = 1; i < 11; i++) {
    arr7.push((1 + Math.random() * 9).toFixed(0));
}
console.log(arr7);

/* 8 */
let arr8 = [1,-2,20,9,-12];
arr8.forEach( (el) => {
    if (el > 0 && el < 10) {
        console.log(el);
    }
})

/* 9 */
let arr9 = [1,-2,20,5,-12];
if (arr9.includes(5)) console.log('Есть');

/* 10 */
let arr10 = [1,-2,20,5,-12];
let sum10 = arr10[0];
for (let i = 1; i < arr10.length; i++) {
    sum10 += arr10[i];
}
console.log(sum10);

/* 11 */
let arr11 = [1,2,3,4];
let sumSq = arr11[0] ** 2;
for (let i = 1; i < arr11.length; i++) {
    sumSq += arr11[i] ** 2;
}
console.log(sumSq);

/* 12 */
let arr12 = [-1,20,5,-12];
let sum12 = arr12[0];
for (let i = 1; i < arr12.length; i++) {
    sum12 += arr12[i];
}
let res = sum12 / arr12.length;
console.log(res);

