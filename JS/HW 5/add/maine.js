// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let a = f(a, b, c) => {
//     if (a < b && a < c){
//         return a
//     }else if (a > b && b < c) {
//         return b
//     }else {
//         return c
//     }
// }

//  - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let a = f(a, b, c) => {
//     if (a > b && a > c){
//         return a
//     }else if (a < b && b > c) {
//         return b
//     }else {
//         return c
//     }
// }

// - створити функцію яка повертає найбільше число з масиву
// function maxDigit(array){
//     let x = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > x){
//             x = array[1]
//         }
//     }
//         return x
// }

// - створити функцію яка повертає найменьше число з масиву
// function minDigit(array){
//     let x = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < x){
//             x = array[1]
//         }
//     }
//     return x
// }
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// - Дано натуральное число n. Выведите все числа от 1 до n.
// function list(n){
//     for (let i = 0; i <= n; i++) {
//         console.log(i);
//     }
// }

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// function lisyOfNumbers(a, b){
//     if (a < b){
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     }else {
//         for (let i = b; i <= a; i++) {
//             console.log(i);
//         }
//     }
// }

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function changeIndex(array, n){
//     let temp = array[n]
//     array[n] = array[n + 1];
//     array[n + 1] = temp;
//     return array
// }


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
//     ????????????????????????????????????????????????????????????????????????
// ___________________________________ Незрозуміло ______________________________