// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = ['word', 28, true, [1, 2, 3], 'some text', false, 345, null, 09, 'hello']
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Make your bed', pageCount: 144, genre: 'sciense'};
let book2 = {title: 'Rich Dad Poor Dad', pageCount: 207, genre: 'finances'};
let book3 = {title: 'Think again', pageCount: 320, genre: 'self-improvement'};



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {title: 'Make your bed', pageCount: 144, genre: 'sciense', authors: [{name: 'Vasyl Pupkin', age: 33}, {name: 'Petro Ivanov', age: 40}]};
let book5 = {title: 'Rich Dad Poor Dad', pageCount: 207, genre: 'finances',  authors: [{name: 'Ivan Kulich', age: 37}, {name: 'Taras Shevcenk', age: 25}]};
let book6 = {title: 'Think again', pageCount: 320, genre: 'self-improvement',  authors: [{name: 'Oleg Korish', age: 50}, {name: 'Anna Lipsh', age: 30}]};



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Vasyl', username: 'vasyl333', password: '348tg9bhrg'},
    {name: 'Petro', username: 'ivanov', password: 'dpfvih9'},
    {name: 'Ivan', username: 'pider-man', password: ';kdfnHOnf'},
    {name: 'Kolya', username: 'zavodila', password: 'p8y4w8DYGE&F'},
    {name: 'Ira', username: 'gavnodav', password: ';sfiTFUFU8'},
    {name: 'Anna', username: 'trepet', password: ';df094ig'},
    {name: 'Oleg', username: 'steroid', password: 'pof0*HU'},
    {name: 'Halyna', username: 'krasavica', password: 'JHD8w4uuhgr'},
    {name: 'Taras', username: 'kolpak', password: '1234567890'},
    {name: 'Maria', username: 'pincessa', password: 'qwerty12345'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2]['password']);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6]['password']);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


