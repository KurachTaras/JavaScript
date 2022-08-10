// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hi = 'hello world'
// let lorem = 'lorem ipsum'
// let js = 'javascript is cool'
//
// console.log(hi.length);
// console.log(lorem.length);
// console.log(js.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hi = 'hello world'
// let lorem = 'lorem ipsum'
// let js = 'javascript is cool'
//
// console.log(hi.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hi = 'HELLO WORLD'
// let lorem = 'LOREM IPSUM'
// let js = 'JAVASCRIPT IS COOL'
//
// console.log(hi.toLowerCase());
// console.log(lorem.toLowerCase());
// console.log(js.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// const stringToArray = (str) => {
//     let split = str.split(' ')
//     console.log(split);
// };
//
// stringToArray(str);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// let toString = arr.map(value => {
//     return String(value);
// })
//
// console.log(toString);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// const sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((a, b) => {
//            return  a - b;
//         });
//     } else if (direction === 'descending'){
//         array.sort((a, b) => {
//             return b - a;
//         });
//     } else {
//         return 'Try another direction';
//     }
// };
//
// console.log(sortNums(nums, 'ascending'));



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let decrease = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// })
//
// console.log(decrease);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let fiveAndMore = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
//
// console.log(fiveAndMore);


// описати колоду карт

// let cards = [
//     {cardSuit: 'spade', value: 'joker', color: 'black'},
//     {cardSuit: 'heart', value: 'joker', color: 'red'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 6, color: 'black'},
//     {cardSuit: 'diamond', value: 6, color: 'red'},
//     {cardSuit: 'heart', value: 6, color: 'red'},
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'spade', value: 7, color: 'black'},
//     {cardSuit: 'diamond', value: 7, color: 'red'},
//     {cardSuit: 'heart', value: 7, color: 'red'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'spade', value: 8, color: 'black'},
//     {cardSuit: 'diamond', value: 8, color: 'red'},
//     {cardSuit: 'heart', value: 8, color: 'red'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'spade', value: 9, color: 'black'},
//     {cardSuit: 'diamond', value: 9, color: 'red'},
//     {cardSuit: 'heart', value: 9, color: 'red'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'spade', value: 10, color: 'black'},
//     {cardSuit: 'diamond', value: 10, color: 'red'},
//     {cardSuit: 'heart', value: 10, color: 'red'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
// ]


// - знайти піковий туз

// let diamondAce = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(diamondAce);


// - всі шістки

// let allSixes = cards.filter(value => value.value === 6);
// console.log(allSixes);


// - всі червоні карти

// let allRedCards = cards.filter(value => value.color === 'red');
// console.log(allRedCards);


// - всі буби

// let allSpadeCards = cards.filter(value => value.cardSuit === 'spade');
// console.log(allSpadeCards);


// - всі трефи від 9 та більше

// let clubs = cards.filter(value => value.value >= 9 && value.cardSuit === 'clubs' || value['value'][1] && value.cardSuit === 'clubs' );
// console.log(clubs);


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let cardSuit = cards.reduce(function (Suit, card) {
//     if (card.cardSuit === 'spade') {
//         Suit.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         Suit.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         Suit.hearts.push(card);
//     } else {
//         Suit.clubs.push(card);
//     }
//     return Suit;
//  }, {spades: [], diamonds: [], hearts: [], clubs: []});
//
// console.log(cardSuit);
