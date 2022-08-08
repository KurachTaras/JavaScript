// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b) {
//     return a * b;
// }
//
// console.log(square(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function square (radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
//
// console.log(square(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square(height, radius) {
//     return 2 * Math.PI * radius * height;
// }
//
// console.log(square(2,3));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1,2,3,4];
//
// let funInvoke = arr => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// };
//
// funInvoke(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (text) {
//     document.write(`<div><p>${text}</p></div>`)
// }
//
// paragraph('Some text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul(text) {
//    document.write(`'<li>${text}</li>,
//                      <li>${text}</li>,
//                      <li>${text}</li>'`)
//                 }
//
// ul('add some text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function li(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// li('add some text', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 'fits', true, 2, 'third', false]
//
// function list (array) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arrOfObj (array) {
//     for(let i = 0; i < array.length; i++) {
//         document.write(`<div>
//         <p>id: ${array[i].id}, name: ${array[i].name}, age: ${array[i].age}</p>
//         </div>`);
//     }
// }
//
// let users = [
//     {id: 1, name: 'Stella', age:21},
//     {id: 1, name: 'Emilia', age:22},
//     {id: 1, name: 'Charlotte', age:23},
//     {id: 1, name: 'Olivia', age:24}
// ]
//
// arrOfObj(users);


// - створити функцію яка повертає найменьше число з масиву
// let arr = [12, 32, 342, 953, 85, 6, 54, 33, 4234];
//
// function minNumber (array) {
//     let y = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < y) {
//             y = array[i]
//         }
//     }
//     return y
// }
//
// console.log(minNumber(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 3, 5]
//
// function adder(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// console.log(adder(arr));





// ----------------------------------------------!!!!! ADDITIONAL !!!!!---------------------------------------


// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const smallestOne = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
//
// smallestOne(4, 2, 1);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const biggerOne = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
//
// biggerOne(12, 15, 21);


// - створити функцію яка повертає найбільше число з масиву
// let arr = [1, 2, 3, 4, 5]
//
// const funMax = (array) => {
//     let max = array[0];
//      for (const funMaxElement of array) {
//          if (max < funMaxElement)
//              max = funMaxElement
//      }
//     return max
//  };
//
// console.log(funMax(arr));


// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 2, 3, 4, 5]
//
// const funMin = (array) => {
//     let min = array[0];
//      for (const funMinElement of array) {
//          if (min > funMinElement)
//              min = funMinElement
//      }
//     return min
//  };
//
// console.log(funMin(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 3, 5]
//
// const adder = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// console.log(adder(arr));


// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 18;
//
// const invoke = (num) => {
//     for(let i = 1; i < num; i++) {
//         console.log(i);
//     }
// }
//
// invoke(n);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let A = 16;
// let B = 11;
//
//
// const qwe = (A, B) => {
//     if (A < B) {
//         for (let i = A; i <= B; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = A; i >= B; i--) {
//             console.log(i);
//         }
//     }
// }
//
// qwe(A, B);



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [5, 4, 3, 2, 1]
//
// const replace = (array, index) => {
//     let tmp = array[index];
//     array[index] = array[index + 1]
//     array[index + 1] = tmp
//     return arr
// }
//
// console.log(replace(arr, 1));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [0, 1, 2, 0, 0, 4, 3, 5]
//
// const move = (array) => {
//     const res = []
//     let count = 0
//     let index = 0
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             count ++
//         } else {
//             res[index++] = array[i]
//         }
//     }
//     let zeroCount = res.length
//
//    for (let i = 0; i < count; i++) {
//        res[zeroCount++] = 0
//    }
//    console.log(res);
// }
//
// move(arr);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const funAverage = (array) => {
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     }
//     return i/array.length;
// };
//
// console.log(funAverage([5,2,3,4]));




