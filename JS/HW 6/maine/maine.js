// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strUP1 = 'HELLO WORLD';
let strUP2 = 'LOREM IPSUM';
let strUP3 = 'JAVASCRIPT IS COOL';
console.log(strUP1.toLowerCase(), strUP2.toLowerCase(), strUP3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   '
console.log(dirtyStr.substring(1, 13));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let listOfDigits = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(listOfDigits.map(n => `${n}`));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]/
let nums = [11,21,3];
function sortNums(nums, direction){
    if (direction === 'ascending'){
        return nums.sort((a, b) => a - b);
    }else if (direction === 'descending'){
        return nums.sort((a, b) => b - a);
    }else{
        return `????`;
    }
}
console.log(sortNums(nums, 'ascending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((u1, u2) => {
    return u1.monthDuration - u2.monthDuration;
});
console.log(sort);

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'heart', value: '8', color:'black'  },
    {cardSuit: 'clubs', value: 'Ace', color:'red'  },
    {cardSuit: 'clubs', value: '9', color:'red' },
    {cardSuit: 'diamond', value: 'jack', color:'red'  },
    {cardSuit: 'spade', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 'Ace', color:'black'  },
    {cardSuit: 'heart', value: '10', color:'black'  },
    {cardSuit: 'diamond', value: 'Queen', color:'red'  }
];
console.log(cards.filter(card => card.value === 'Ace' && card.cardSuit === 'spade'));
console.log('__________');
console.log(cards.filter(card => card.value === '6'));
console.log('__________');
console.log(cards.filter(card => card.color === 'red'));
console.log('__________');
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log('__________');
console.log(cards.filter(card => card.value > '9' || card.value === '10'));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {spades:[], diamonds:[], hearts:[], clubs:[]}
let sortedCards = cards.reduce((accum, card) => {
    if (card.cardSuit === 'spade'){
        accum.spades.push(card)
    }else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card)
    }else if (card.cardSuit === 'heart') {
        accum.hearts.push(card)
    }else{
        accum.clubs.push(card)
    }
    return accum
}, {spades:[], diamonds:[], hearts:[], clubs:[]} )
console.log(sortedCards);




