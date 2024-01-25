// let i = 0;
// while (i<6) console.log(i++);

// do {
//     console.log(i--);
// } while (i>6);

// let i = 0
// for (; i<10;){
//     console.log(i);
//     i++
// }

// let array = [45,12,45,78,36]

// let array = {
//     'name':'Vasya',
//     'age':18,
//     'email': 'dthdbjv@kgbf.ru'
// }
// for (let i in array){
//     console.log(array[i]);
// }

// let array = {
//     'name':'Vasya',
//     'age':18,
//     'email': 'dthdbjv@kgbf.ru'
// }
// for (let i in array){
    
//     if (i =='age'){
//         continue;
//     }
//     console.log(array[i]);
// }

// first:for (let i =0; i<=10;i++){
//     for (let j=0;j<=10;j++){
//         console.log(i*j);
//         if (i ==3){
//             break first;
//         }
//     }
// }

// function summ(a,b){
//     return a + b
// }
// console.log(summ(2,3)

// function first(x){
//     return x
// }
// function second(x){
//     return x
// }
// console.log(summ(2,3,first,second))
// var rez;
// function summ(a=0,b=0,first,second){
//     var one,two;
//     one = first(a);
//     two = second(b)
//     rez = one+two
//     return one+two
// }
// console.log(rez)


// let a = sum
// console.log(a(5,9))
// function sum(a,b){
//     return a+b
// }

// let sum2 = function (a,b) {return a+b}
// console.log(sum2(1,2))

// let sum3 = (a,b) => {return a+b}
// console.log(sum3(8,2))

// 1
// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

// 2
// for (var i = 11; i <= 33; i++) {
//     console.log(i);
// }

// 3
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // 4
// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// // 5
// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 6
// let array = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }

// console.log('Сумма элементов массива: ' + result);


// // 7
// var obj = {green:"Зеленый", red:"красный", blue:" синий"};

// for (var key in obj) {
//     console.log(key + ": " + obj[key]);
// }
// // 8
// var obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400'
// };  


// for (var key in obj) {
//     console.log(key + ': ' + obj[key]);
// }


// for (var key in obj) {
//     console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
// }
// // 9
// var arr = [2, 5, 9, 15, 0, 4];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// // 10
// var arr2 = [1, -2, 3, -4, 5, -6, 7, -8, 9];


// var sum = 0;
// for (var i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 0) {
//         sum += arr2[i];
//     }
// }
// console.log(sum);

// 11
// var arr3 = [1, 2, 5, 9, 4, 13, 4, 10];


// for (var i = 0; i < arr3.length; i++) {
//     if (arr3[i] === 4) {
//         console.log('Есть!');
//         break;
//     }
// }

// 12
// var arr4 = [10, 20, 30, 50, 235, 3000];


// for (var i = 0; i < arr4.length; i++) {
//     if (arr4[i].toString()[0] === '1' || arr4[i].toString()[0] === '2' || arr4[i].toString()[0] === '5') {
//         console.log(arr4[i]);
//     }
// }

// // 13
// var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// var str = '';
// for (var i = 0; i < arr5.length; i++) {
//     str += '-' + arr5[i] + '-';
// }
// console.log(str);

// // 14
// var days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


// for (var i = 0; i < days.length; i++) {
//     if (i === 5 || i === 6) {
//         console.log(days[i]);
//     } else {
//         console.log(days[i]);
//     }
// }

// // 15
// var day = 'Понедельник';

// // Вывод дней недели, текущий день курсивом
// for (var i = 0; i < days.length; i++) {
//     if (day === days[i]) {
//         console.log('<i>' + days[i] + '</i>');
//     } else {
//         console.log(days[i]);
//     }
// }

// // 16
// var n = 1000;
// var num = 0;


// while (n > 50) {
//     n /= 2;
//     num++;
// }
// console.log(n);
// console.log(num);