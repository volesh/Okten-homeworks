// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let perimetr = (a, b) => a * b;
console.log(perimetr(3, 3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let area = (r) => 3.14 * r ** 2
console.log(area(3));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaOfOCulinder = (h, r) => 3.14 * r ** 2 * h
console.log(areaOfOCulinder(3, 3))


// - створити функцію яка приймає масив та виводить кожен його елемент
let list = [1, 2, 3, 4, 5, 6]

function loop(array) {
    for (let item of array) {
        console.log(item);
    }
}

loop(list)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let txt = 'Lorem ipsum dolor sit amet.'

function makeText(text) {
    document.write(`<p>${text}</p>`)
}

makeText(txt)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function lishka(text){
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`)
}

lishka('lorem')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function lishka2(text, count){
    document.write(`<ul>`)
        for (let i = 1; i <= count; i++) {
            document.write(`<li>${text}</li>`)

        }
    document.write(`</ul>`)

}

lishka2('some text', 10)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let list2 = [123, 'kdngdfk', true, 265, ';sdkgf', false]
function makeList(array) {
    document.write(`<ul>`)
        for (let item of array) {
            document.write(`<li>${item}</li>`)
        }
    document.write(`</ul>`)
}

makeList(list2)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let listOfObject = [
    {id: 1, name: 'vasya', age: 30},
    {id: 1, name: `vasya`, age: 30},
    {id: 1, name: `vasya`, age: 30},
    {id: 1, name: `vasya`, age: 30},
    {id: 1, name: `vasya`, age: 30},
    {id: 1, name: `vasya`, age: 30},
    {id: 1, name: `vasya`, age: 30}
]

function doSomething(array) {
    for (const item of array) {
        document.write(`
            <div>
                <p>id - ${item.id}</p>
                <p>name = ${item.name}</p>
                <p>age - ${item.age}</p>
            </div>
        `)
        document.write('___________');
    }
}

doSomething(listOfObject);


// - створити функцію яка повертає найменьше число з масиву
let numbers = [213, 214, 4134, 34, 235, 24, 5346, 8, 45, 235, 2, 645, 2346];
function findMax(array){
    let x = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < x) {
            x = array[i]
        }

    }
    return x
}

console.log(findMax(numbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numbers1 = [213, 214, 4134, 34, 235, 24, 5346, 8, 45, 235, 2, 645, 2346];
function findSum(array){
    let x = 0;
    for (const n of array) {
        x += n
    }
    return x
}

console.log(findSum(numbers1));