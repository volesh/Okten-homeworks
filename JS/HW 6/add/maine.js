// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let uns = [];
function cutString(str, n) {
    for (let i = 0; i < str.length; i += n) {
        let sub = str.substring(i, i + n)
        uns.push(sub)
    }
    return uns;
}
console.log(cutString(`qwertysadfgfhlk`, 3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
function deleteCharacters(str, n) {
    return str.substring(0, n);
}

console.log(deleteCharacters(` xerhgofi eh gejhcmg,ier oerhgmixe`, 8));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str = "HTML JavaScript PHP";
console.log(str.toUpperCase().replaceAll(' ', '-'))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
str = 'sdhgfIMIGUsdfjj'

function firstUp(str) {
    let first = str.charAt(0)
    return str.replace(first, first.toUpperCase())
}
console.log(firstUp(str));


// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function delSmth(str) {

    str = str.replace(/[^a-zа-яё\s]/i, ' ');
    return str.replace(/[^a-zа-яё\s]/gi, '');
}

console.log(delSmth(n2));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function random(n){
    let uns = [];
    for (let i = 0; i < n; i++) {
        uns.push(Math.round(Math.random() * 100))

    }
    return uns
}

console.log(random(20));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = random(30);
console.log(arr.sort((a, b) => a - b));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
arr = random(40);
console.log(arr.filter(a => a % 2 === 0 && a !== 0));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let text = `jdhf hosjg s kjdfl ldfkjg ldldkjfg dg`
function capitalize(str){
    str = str.split(' ')
    str = str.map(item => firstUp(item))
    return str.join(' ')
}
console.log(capitalize(text));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
function valid(email) {
    let flag = 'True'
    if (email.indexOf('@') === 0) {
        flag = 'False'
    }if (!email.includes('@')) {
        flag = 'False;'
    }if (email.indexOf('.') - email.lastIndexOf('@') <= 2) {
        flag = 'False'
    }
    if (flag === 'True'){
        return 'Valid email'
    }else{
        return 'Email in not valid'
    }
}
console.log(valid(`someeMAIL@i.ua`))


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((item1, item2) => {
    return item2.modules.length - item1.modules.length
}));





//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let symb = "о";
let str2 = "Астрономия это наука о небесных объектах";

function count(symb, str) {
    count = 0;
    while (str.includes(symb)) {
        str = str.replace(symb, '')
        count++
    }
    return count
}

console.log(count(symb, str2));
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
    str = str.split(' ')
    while (str.length > n) {
        str.pop()
    }
    return str.join(' ')
}

console.log(cutString(str, 5));


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
let books = [
    {name: 'Some B;kvnook', pages: 200, autors: ['somename', 'name', 'name', 'name'], ganre: ['aifusdgf', 'psgji', 'psdgijf']},
    {name: 'Some Bookd', pages: 300, autors: ['somename', 'name', 'name', 'name', 'name'], ganre: ['aifusdgf']},
    {name: 'Some Boo;dsk', pages: 400, autors: ['somename'], ganre: ['aifusdgf']},
    {name: 'Some Book ;ldg d;', pages: 500, autors: ['somename', 'name', 'name'], ganre: ['aifusdgf', 'sdfgij']},
    {name: 'Some Boo[sdfk', pages: 100, autors: ['somename', 'name',], ganre: ['aifusdgf']},
    {name: 'Some Boolsdfk', pages: 250, autors: ['somename', 'name', 'name'], ganre: ['aifusdgf']}
]
function findBig(arr){
    let bigBook = books[0]
    for (let book of arr) {
        if (book.pages > bigBook.pages){
            bigBook = book
        }
    }
    return bigBook
}

function manyGanges(arr) {
    let many = arr[0];
    for (let book of arr) {
        if (book.ganre.length > many.ganre.length) {
            many = book
        }
    }
    return many
}

function longName(arr) {
    let long = arr[0]
    for (const book of arr) {
        if (book.name.length > long.name.length) {
            long = book
        }
    }
    return long
}

console.log(findBig(books))
console.log(manyGanges((books)))
console.log(longName(books))

console.log(books.find(book => book.autors.length === 2));
console.log(books.find(book => book.autors.length === 1));

console.log(books.sort((a, b) => {
    return a.pages - b.pages
}));

