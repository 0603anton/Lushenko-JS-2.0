// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
  document.querySelector(`.out-1`).textContent = div1.textContent;
}

// ваше событие здесь!!!
let div1 = document.querySelector(`.div-1`);
div1.addEventListener(`click`, t1);

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
  console.log(e);
  if (e.altKey) {
    document.querySelector(`.out-2`).textContent = true;
  } else {
    document.querySelector(`.out-2`).textContent = false;
  }
}

let div2 = document.querySelector(`.div-2`);
div2.addEventListener(`click`, t2);
// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */
let div3 = document.querySelector(`.div-3`);
let w3 = 75;

function t3() {
  w3 += 5;
  div3.style.width = w3 + `px`;
  document.querySelector(`.out-3`).textContent = w3;
}

// ваше событие здесь!!!

div3.addEventListener(`click`, t3);
// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
let div4 = document.querySelector(`.div-4`);
div4.addEventListener(`dblclick`, t4);
function t4() {
  let out = document.querySelector(`.out-4`);
  out.textContent = div4.textContent;
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let div5 = document.querySelector(`.div-5`);
div5.addEventListener(`dblclick`, t5);
function t5() {
  div5.classList.toggle(`active`);
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let div6 = document.querySelector(`.div-6`);
div6.addEventListener(`dblclick`, t6);
function t6() {
  document.querySelector(`.ul-6`).classList.toggle(`hide`);
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector(`.div-7`);
div7.addEventListener(`contextmenu`, t7);
function t7() {
  div7.classList.toggle(`active`);
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let ch8 = document.querySelector(`.ch-8`);
ch8.addEventListener(`click`, t8);
function t8() {
  if (ch8.checked) {
    document.oncontextmenu = function () {
      return false;
    };
  } else {
    document.oncontextmenu = null;
  }
}

// ваше событие здесь!!!

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let div9 = document.querySelector(`.div-9`);
div9.addEventListener(`contextmenu`, t9);
let img = document.querySelector(`.div-9>img`);
function t9() {
  img.setAttribute(`src`, `img/2.png`);
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let div10 = document.querySelector(`.div-10`);
div10.addEventListener(`mouseenter`, t10);

function t10() {
  let img = document.querySelector(`.div-10>img`);
  img.setAttribute(`src`, `img/2.png`);
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector(`.div-11`);
div11.addEventListener(`mouseenter`, t11);

function t11() {
  let img = document.querySelector(`.div-11>img`);
  img.setAttribute(`src`, `img/2.png`);
}

div11.onmouseleave = () => {
  let img = document.querySelector(`.div-11>img`);
  img.setAttribute(`src`, `img/1.png`);
};
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let div12 = document.querySelector(`.div-12`);
div12.addEventListener(`mousedown`, () => {
  div12.classList.toggle(`active`);
});

// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let div13 = document.querySelector(`.div-13`);
div13.addEventListener(`mousedown`, () => {
  div13.classList.toggle(`active`);
});
div13.addEventListener(`mouseup`, () => {
  div13.classList.toggle(`active`);
});
// ваше событие здесь!!!

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
  let div14 = document.querySelector(`.div-14`);
  div14.addEventListener(`click`, () => {
    div14.classList.toggle(`active`);
  });
}
document.querySelector(".b-14").onclick = t14;

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
// let i = 1;
// let div15 = document.querySelector(`.div-15`);
// div15.addEventListener(`mousemove`, () => {
//   i++;
//   div15.textContent = i;
// });
// ваше событие здесь!!!

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let i = 75;
let div16 = document.querySelector(`.div-16`);

// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
let listener = function () {
  i++;
  div16.style.width = i + `px`;
};
function t17On() {
  div16.addEventListener(`mousemove`, listener);
}
function t17Off() {
  div16.removeEventListener(`mousemove`, listener);
}
// ваше событие здесь!!!
// ваше событие здесь!!!
document.querySelector(`.b-17_on`).addEventListener(`click`, t17On);
document.querySelector(`.b-17_off`).addEventListener(`click`, t17Off);
// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18(e) {
  let w = e.target.offsetWidth;
  document.querySelector(`.div-18`).textContent = w;
}
// ваше событие здесь!!!
document.querySelector(`.div-18`).onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19(e) {
  let w = e.target.classList;
  document.querySelector(`.div-19`).textContent = w;
}
// ваше событие здесь!!!
document.querySelector(`.div-19`).onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let progr = document
  .querySelector(`progress`)
  .addEventListener(`mousemove`, t20);
let p = 10;
function t20(e) {
  document.querySelector(`progress`).value = p;
  p++;
}
// ваше событие здесь!!!
