// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 45;
if (time > 0 && time < 15) {
    console.log('Перша');
}else if (time >= 15 && time < 30){
    console.log('Друга');
}else if (time >= 30 && time < 45) {
    console.log('Третя')
}else if (time >= 45) {
    console.log('Четверта');
}




// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20;
if (day > 0 && day <= 10) {
    console.log('Перша декада')
}else if (day > 10 && day < 20) {
    console.log('Друга декада')
}else if (day > 20) {
    console.log('Третя декада')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let info = +prompt('Enter day');
switch (info) {
    case 1:
        document.write('Monday')
        break;
    case 2:
        document.write('Tuesday')
        break;
    case 3:
        document.write('Wednesday')
        break;
    case 4:
        document.write('Thursday')
        break
    case 5:
        document.write('Friday')
        break;
    case 6:
        document.write('Saturday')
        break;
    case 7:
        document.write('Sunday')
        break;
    default:
        document.write('Wronge day')
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Enter first digit');
let b = +prompt('Enter second digit');
if (a > b) {
    console.log(a)
}else if (b > a) {
    console.log(b)
}else {
    console.log(`${a} = ${b}`)
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = prompt('Enter info') || 'some info'