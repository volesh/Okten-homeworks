// - є масив
let body = document.getElementsByTagName('body')[0]

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let family = document.getElementsByClassName('family')[0]
for (const simpson of simpsons) {

    // Створюємо об'єкт
    let divBox = document.createElement(`div`)
    divBox.classList.add(`divBox`)

    //Створюємо і добавляємо заголовок
    let h2 = document.createElement(`h2`)
    h2.innerText = `${simpson.name} ${simpson.surname} - ${simpson.age}`
    divBox.appendChild(h2)
    divBox.classList.add(`memberTitle`)

    //Створюємо об'єкт з фото і добавляєм в дів
    let image = document.createElement(`div`)
    image.innerHTML = `<img src="${simpson.photo}" alt=""/>`
    divBox.appendChild(image)
    divBox.classList.add(`memberPhoto`)

    //Створюємо і добавляємо опис
    let description = document.createElement(`p`)
    description.innerText = `${simpson.info}`
    divBox.appendChild(description)
    divBox.classList.add(`memberDescription`)

    family.appendChild(divBox)

}
// Прибрав щоб не заважало наступному завданню
family.style.display = `none`

//
// Цикл в циклі
// - Є масив
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
let courses = document.getElementsByClassName('courses')[0];
for (const cours of coursesArray) {
    let container = document.createElement('div')
    container.classList.add('container')

    let title = document.createElement('h2');
    title.innerText = `${cours.title}`;
    title.classList.add('title')
    container.appendChild(title)

    let monthDuration = document.createElement('span');
    monthDuration.innerText = `Cours duration is ${cours.monthDuration} moths`;
    monthDuration.classList.add('month')
    container.appendChild(monthDuration)

    let hourDuration = document.createElement('span');
    hourDuration.innerText = `Cours hour duration is ${cours.hourDuration} hours`;
    hourDuration.classList.add('hour')
    container.appendChild(hourDuration)

    let modulsBox = document.createElement('div')
    modulsBox.classList.add('moduls');
    container.appendChild(modulsBox)
    let list = document.createElement('ul')
    modulsBox.appendChild(list)


    let moduls = cours.modules;
    for (const modul of moduls) {
        let li = document.createElement('li')
        li.innerText = `${modul}`
        list.appendChild(li)

    }

    courses.appendChild(container)

}
courses.style.display = `none`;


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div = document.createElement(`div`)
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.style.background = 'green'
div.style.color = 'red'
div.style.fontSize = '30px'
div.style.width = `100px`
div.style.height = `100px`
body.appendChild(div)
body.appendChild(div.cloneNode(true))


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main','Products','About us','Contacts']

let template = document.createElement('ul')
for (const item of array) {
    let li = document.createElement(`li`)
    li.innerText = `${item}`
    template.appendChild(li)
}
body.appendChild(template)



// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let tag = document.createElement(`div`)
    tag.innerText= `${item.title} - month duretion ${item.monthDuration}`
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {

    let div = document.createElement(`div`)
    div.classList.add(`item`)

    let h1 = document.createElement(`h1`)
    h1.classList.add(`heading`)
    h1.innerText = `${item.title}`

    let p = document.createElement(`p`)
    p.classList.add(`description`)
    p.innerText = `${item.monthDuration}`
}

//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let newTag = document.createElement(`div`);
newTag.id = `text`
newTag.innerText = `text`

newTag.onclick = function (e) {
    newTag.style.display = `none`
};

body.appendChild(newTag);


//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.getElementById(`input`)
let button = document.getElementById(`button`)

button.onclick = function (ev) {
    let uns = +input.value
    if (uns >= 18) {
        window.alert('Проходь')
    }else if (uns < 18 && uns > 0) {
        window.alert('Стій');
    } else {
        window.alert('Введи коректний вік')
    }
};


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form = document.getElementById('form2')
console.log(form);
let button1 = document.getElementById(`button2`)
button1.onclick = function (e) {
    for (let i = 0; i < +form[0].value; i++) {

        let obj = document.createElement(`div`)
        obj.style.border = `1px solid red`
        obj.style.display = 'flex'
        obj.style.justifyContent = 'space-around'
        for (let j = 0; j < +form[1].value; j++) {
            let span = document.createElement(`span`)
            span.innerText = `${form[2].value}`
            span.style.border = `1px solid black`
            obj.appendChild(span)

        }
        body.appendChild(obj)
    }

};