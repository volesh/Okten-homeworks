// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

users.push(new User(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834'));
users.push(new User(3, 'anna', 'pupkin', 'fjdfdv@gmail.com', '+3809475834'));
users.push(new User(1, 'olia', 'pupkin', '09r0ew@gmail.com', '+3809475834'));
users.push(new User(2, 'katya', 'pupkin', 'dsfdfkvj2@gmail.com', '+3809475834'));
users.push(new User(7, 'petya', 'pupkin', 'ddfksf2@gmail.com', '+3809475834'));
users.push(new User(5, 'ira', 'pupkin', 'dsf32492@gmail.com', '+3809475834'));
users.push(new User(6, 'oleh', 'pupkin', 'dsfer g2@gmail.com', '+3809475834'));
users.push(new User(9, 'max', 'pupkin', 'dsxwrf2@gmail.com', '+3809475834'));
users.push(new User(10, 'dima', 'pupkin', 'dsxwrhf2@gmail.com', '+3809475834'));
users.push(new User(8, 'kolya', 'pupkin', 'dsfxhtr2@gmail.com', '+3809475834'));
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(item => item.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, ...order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = []
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'sugar'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'kokos'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'sugar', 'egs', 'bananas'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'milk'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'pizza'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'sugar', 'kokos', 'egs', 'bananas', 'pizza'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'egs'))
clients.push(new Client(4, 'vasya', 'pupkin', 'dsf2@gmail.com', '+3809475834', 'bread', 'milk', 'bananas', 'sous'))
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }
    this.info = function () {
        console.log(`model - ${this.model}`)
        console.log(`producer - ${this.producer}`)
        console.log(`year - ${this.year}`)
        console.log(`max speed - ${this.maxSpeed}`)
        console.log(`volume - ${this.volume}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver
    };

}
let cars = []
cars.push(new Car('cayen', 'porshe', '2020', '200', '4.0'))
cars[0].addDriver({name: 'add', age: 30})


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }

    info() {
        console.log(
            `model - ${this.model}\n` +
            `producer - ${this.producer}\n` +
            `year - ${this.year}\n` +
            `max speed - ${this.maxSpeed}\n` +
            `volume - ${this.volume}\n`
        )
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = +newSpeed + +this.maxSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver
    }

}
let cars1 = []
cars1.push(new Car2('cayen', 'porshe', '2020', '200', '4.0'))
cars1.push(new Car2('cayen', 'porshe', '2020', '200', '4.0'))
cars1.push(new Car2('cayen', 'porshe', '2020', '200', '4.0'))
cars1.push(new Car2('cayen', 'porshe', '2020', '200', '4.0'))
cars1.push(new Car2('cayen', 'porshe', '2020', '200', '4.0'))


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;

}

let cinderellas = [];
cinderellas.push(new Cinderella('anna', 20, 35));
cinderellas.push(new Cinderella('olya', 21, 38));
cinderellas.push(new Cinderella('ira', 22, 34));
cinderellas.push(new Cinderella('katya', 23, 37));
cinderellas.push(new Cinderella('natasha', 24, 38));
cinderellas.push(new Cinderella('masha', 25, 36));
cinderellas.push(new Cinderella('halya', 26, 37));
cinderellas.push(new Cinderella('OLEG', 43, 45));
cinderellas.push(new Cinderella('mika', 19, 35));
cinderellas.push(new Cinderella('dasha', 18, 34));

let prince = {name: 'Ivan', age: 30, size: 45};

for (const girl of cinderellas) {
    if (prince.size === girl.size) {
        console.log(`Його принуесу звати ${girl.name}`)
        break
    }
}

function callback(item) {
    return item.size === prince.size
}
console.log(cinderellas.find(girl => girl.size === prince.size));
console.log(cinderellas.find(girl => callback(girl)));



