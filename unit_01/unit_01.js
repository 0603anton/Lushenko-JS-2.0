// Task 1.
// Выведите в консоль ваше имя.
console.log(`Anton`);

// Task 2.
// Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.

console.log(`03`);

// Task 3.
// Выведите в консоль строку:
// 'Добро '+'пожаловать '+' на курс'

console.log("Добро " + "пожаловать " + " на курс");

// Task 4.
// С помощью alert выведите число 2019. После срабатывания кода - закомментируйте его, чтобы не мешал для дальнейшей разработки

// alert(`2019`);

// Task 5.
// С помощью alert выведите результат операции:
// alert(2019 - 200);

// Task 6.
// Создайте на странице div с id=one. С помощью document.getElementById запишите в данный элемент текст 'Hello World'.

document.getElementById(`one`).innerHTML = `hello world`;
// Task 7.
// Создайте на странице div с id=two. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки ( цифра 8).

document.getElementById(`two`).innerHTML = 12 * 12;

// Task 8.
// Создайте div с классом one. С помощью document.querySelector запишите в данный элемент текст 'Hello World'.

document.querySelector(`.one`).innerHTML = "Hello World";

// Task 9.
// Создайте следующую верстку на странице:
//<h2>Hello <span>everyone</span></h2>
// Замените с помощью querySelector текст everyone на world.

document.querySelector("span").innerHTML = `World`;
// Task 10.
//Создайте пустой div c классом three. С помощью querySelector запишите внутрь div заголовок h3 с произвольным текстом.

document.querySelector(`.three`).innerHTML = `<h3>Hello Antoxa</h3>`;

// Task 11.
// Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).

let someDiv = document.querySelector(`.four`);
someDiv.innerHTML += `<h3>Hello Ebat</h3><br>`;
someDiv.innerHTML += `<p>slkdslkdjm</p>`;

// Task 12.
// Создайте div с классом five. Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!

let a = document.querySelector(`.five`);
a.innerHTML = 3.1415;

// Task 13.
// Создайте div с классом seven. Получите его в переменную div7. С помощью innerHTML запишите в него строку:
// <img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">
//Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки. Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку одинарными кавычками.

let div7 = document.querySelector(`.five`);

div7.innerHTML = `<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">`;

// Task 14.
//Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.

let out14 = document.querySelector(`.out-14`);
let z1 = 6;
let z2 = 3;
out14.innerHTML = z1 * z2;

// Task 15.
// Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.

// Task 16.
// Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.

let x1 = "Hello";
let x2 = 5;
document.querySelector(`.s16`).innerHTML = x1 + x2;

// Task 17.
// Создайте div с классом test-1. Получите его в переменную d1. Выведите эту переменную в консоль. Изучите вывод.

const d1 = document.querySelector(`.test-1`);

console.log(d1);

// Task 18.
// Создайте div.test-2. Получите его в переменную d2. Выведите эту переменную в консоль. Присвойте d2 значение 5 (d2 = 5). Выведите переменную в консоль. Изучите вывод.
let d2 = document.querySelector(`.test-2`);
console.log(d2);
console.log((d2 = 5));

// Task 19.
// Создайте div c классом s3 и div с классом s4. Получите div.s3 в переменную divS3. Выведите в консоль divS3. Теперь получите в эту же переменную divS3 блок div c классом s4. Выведите переменную divS3 в консоль. Изучите что изменилось.

let divS3 = document.querySelector(`.s3`);
console.log(divS3);
divS3 = document.querySelector(`.s4`);
console.log(divS3);

// Task 20
// Получите c помощью querySelector тег body. С помощью innerHTML присвойте ему пустую строку (...innerHTML = ''). Изучите что произошло. Закомментируйте этот код.

document.querySelector(`body`).innerHTML = ` `;
