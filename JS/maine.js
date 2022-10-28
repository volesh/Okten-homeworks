// let arr = [];
//
// for (let i = 10000; i < 100000; i++) {
//     arr.push(i);
// };
// const foo = (n) => {
//     n = n.toString();
//     let sum = 0
//     for (const el of n) {
//         sum += Number(el)
//     }
//     return sum
// }
//
//
// arr = arr.filter(num => (num % 2 === 0)  && (Number(num.toString()[2]) % 2 !== 0) && (foo(num) % 4 === 0));
//
// console.log(arr);

var f = function() {
    console.log(22);
}

var execute = function(f) {
    setTimeout(f, 1000);
}

execute(f); // что выведет в консоль и почему

f = function() {
    console.log(2);
}
execute(f);