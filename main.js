// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i =0; i < 10; i++) {
//     document.write(`<div> Some text </div>`);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Some text with index - ${i}</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div>Some text </div>`);
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div> Some text with index - ${i}</div>`);
//     i++;
// }


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


// document.write('<ul>');
// for (const item of listOfItems) {
//     document.write(`<li>${item}</li>`);
// }
// document.write('</ul>');

// -----------------------------------------------


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// for (const product of products) {
//     document.write(`
//         <div class="product-card">
//         <h3 class="product-list-title">${product.title}. Price - ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
//         </div>
//     `)
// }


// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
// - користувачів зі статусом true

// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }

// - користувачів зі статусом false

// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }

// - користувачів які старші за 30 років

// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }




// --------------------------------------------!!!!! ADDIIONAL !!!!! ---------------------------------------

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

// let arr = [1, 2, 3, 4, 5, 'first', 'second', 'third', 'fourth', 'fifth', true, false, true, false, false];
//
// console.log(arr);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr1 = [];
//
// arr1[0] = 1;
// arr1[1] = 'first';
// arr1[2] = 2;
// arr1[3] = 'second';
// arr1[4] = 3;
// arr1[5] = 'third';
// arr1[6] = false;
//
// console.log(arr1);



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// i = 0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// 2. перебрати його циклом for

// for (const number of arr) {
//     console.log(number);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 0;
// while (i < arr.length) {
//     if (i%2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     if (i%2 !== 0) {
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i = 0;
// while (i < arr.length) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%3 === 0) {
//         arr[i] = "okten";
//     }
// }

// console.log(arr);

// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length; i >= 0; i--) {
//     console.log(arr[i]);
// }




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 'first', true, 2, 'third', false, 3, 'second', false, 4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 'first', true, 2, 'second', true, 3, 'third', true, false];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 'first', true, 2, 'second', true, 3, 'third', true, false];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 'first', true, 2, 'second', true, 3, 'third', true, false];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
// }




// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0]  = 3;
// arr[1]  = 'three';
// arr[2]  = 2;
// arr[3]  = 'two';
// arr[4]  = true;
// arr[5]  = 1;
// arr[6]  = 'one';
// arr[7]  = 6;
// arr[8]  = 'six';
// arr[9]  = false;
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`step :`, i);
//     document.write(`step : ${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`step :`, i);
//     document.write(`step : ${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let step = 0;
// for (let i = 0; i < 100; i++) {
//     console.log(`step :`, step);
//     document.write(`step : ${step} <br>`)
//     step+= 2;
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0) {
//         console.log(`step :`, i);
//         document.write(`step : ${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2 === 1) {
//         console.log(`step :`, i);
//         document.write(`step : ${i} <br>`);
//     }
// }



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books = [
//     {title: 'Harry Potter', pageNumber: 375, authors: 'J. K. Rowling', genres: 'fantasy, urban fantasy'},
//     {title: 'Harry Potter', pageNumber: 340, authors: 'J. K. Rowling', genres: 'fantasy, urban fantasy'},
//     {title: 'The Lord of the Rings: The Fellowship of the Rings', pageNumber: 457, authors: 'J. R. R. Tolkien', genres: 'fantasy, romance'},
//     {title: 'The Lord of the Rings: The Two Towers', pageNumber: 531, authors: 'J. R. R. Tolkien', genres: 'fantasy, romance'},
//     {title: 'The Great Gatsby', pageNumber: 298, authors: 'F. Scott Fitzgerald', genres: 'novel, tragedy, history'},
//     {title: 'Ulysses', pageNumber: 321, authors: 'James Joyce, Some unknown writer', genres: 'novel, fiction'},
// ]

// -знайти наібльшу книжку.

// for (const book of books) {
//     for (const key in book) {
//
//     }
// }

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор






// ------------------------------------------------ !!!!! ADDITIONAL 2 !!!!! -------------------------------------------


// 1. Створити пустий масив та :
// let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random()*(100)));
// }
// console.log(arr);

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random()*(732-8)));
// }
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен

// for (i = 2; i < arr.length; i+=3) {
//     console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (i = 2; i < arr.length; i+=3) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
