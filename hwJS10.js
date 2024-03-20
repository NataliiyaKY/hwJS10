// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let data = document.forms['form1']
let nameData = data.naim
let surnameData = data.surnaim
let ageData = data.age
let buttonData = data.elements[3]

let dataText = document.getElementsByClassName('first')[0]

data.onsubmit = function (e){
    e.preventDefault()
}

buttonData.onclick = function (){
    let content = document.createElement('h2')
    content.innerText = `name - ${nameData.value}, surname - ${surnameData.value}, age - ${ageData.value}`

    dataText.append(content)

}


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let i = document.getElementById('first')

function one() {
    let y = localStorage.getItem('y')
    let u = JSON.parse(y)
    console.log(u)
    if (!u) {
        u = 0
    }else {
        u++
    }
    let r = JSON.stringify(u)
    localStorage.setItem('y', r)
}


one()


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

function saveVisit() {
    let sessions = localStorage.getItem('sessions');
    let arrayOfSessions = JSON.parse(sessions);
    console.log(arrayOfSessions)
    if (!arrayOfSessions) {
        arrayOfSessions = []
    }

    let date = new Date()
    arrayOfSessions.push({
        day: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
    })

    let sessionsForLS = JSON.stringify(arrayOfSessions)
    localStorage.setItem('sessions', sessionsForLS)
}

saveVisit()

function readSessions() {
    let ul = document.createElement('ul')
    document.body.appendChild(ul)
    let sessionsArray = JSON.parse(localStorage.getItem('sessions'))
    for (const session of sessionsArray) {
        let li = document.createElement('li');
        li.innerText = session.day + ' ' + session.hour + ' ' + session.minute + ' ' + session.second
        ul.appendChild(li)
    }
}

readSessions()


// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
//При завантажені сторінки з'являються перші 10 об'єктів.


let a = []

for (let i = 0; i < 100; i++) {
    a.push({
        id: i,
        name: `ola${i}`
    })
}

let divTotal = document.getElementById('three')

let total = document.body
total.onsubmit = function (e) {
    e.preventDefault()
    let onSubmitOne = a.slice(0, 10)
    divTotal.appendChild(onSubmitOne)
}

//При натисканні next виводяться настпні 10 об'єктів

let but1 = document.getElementById('one')

but1.onclick = function () {
    let butpOne = document.createElement('p')
    butpOne.innerText = `${a.slice(0, 10)}`
    divTotal.appendChild(butpOne)
}
//
//
// //При натисканні prev виводяться попередні 10 об'єктів
//
let but2 = document.getElementById('two')

but2.onclick = function () {
    let butpTwo = document.createElement('p')
    butpTwo.innerText = `${a.slice(11, 21)}`
    divTotal.appendChild(butpTwo)
}


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
//на кнопку зникав елемент з id="text".

let four = document.getElementsByName('username')[0]
let five = document.getElementById('five')

four.onsubmit = function (e){
    e.preventDefault()
}

four.value = '12345'

four.onclick = function () {
    four.value = ''
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let tenTotal = document.getElementById('ten')

let ageData = document.getElementsByName('age')[0]
let buttonAge = document.getElementById('six')

let notif = document.createElement('p')

buttonAge.onclick = function () {
    let ageDataTotal = ageData.value

    if (ageDataTotal < 18) {
        notif.innerText = 'меньше він ніж 18'
    } else {
        notif.innerText = 'ok'
    }

    tenTotal.appendChild(notif)
}












// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається