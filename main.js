// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr;

arr = ['first', 1, 'second', 2, 'third', 3, 'fourth', 4, 'fifth', 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.



let firstBook = {
    title: 'The Fellowship of the Ring',
    pageCount: 432,
    genre: 'fantasy'
};

let secondBook = {
    title: 'The Two Towers',
    pageCount: 352,
    genre: 'fantasy'
};

let thirdBook = {
    title: 'The Return of the King',
    pageCount: 432,
    genre: 'fantasy'
};



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age



let firsObj = {
    title: 'The Fellowship of the Ring',
    pageCount: 432,
    genre: 'fantasy',
    authors: [
        {
            name: 'J. R. R. Tolkien',
            age: 81
        },
        {
            name: 'Stephen King',
            age: 74
        }
    ]
};

let secondObj = {
    title: 'The Two Towers',
    pageCount: 352,
    genre: 'fantasy',
    authors: [
        {
            name: 'J. R. R. Tolkien',
            age: 81
        },
        {
            name: 'Stephen King',
            age: 74
        }
    ]
};

let thirdObj = {
    title: 'The Return of the King',
    pageCount: 432,
    genre: 'fantasy',
    authors: [
        {
            name: 'J. R. R. Tolkien',
            age: 81
        },
        {
            name: 'Stephen King',
            age: 74
        }
    ]
};



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {
        name: 'Taras',
        username: 'Tar',
        password: 'orchid'
    },
    {
        name: 'Emilia',
        username: 'Emi',
        password: 'sunflower'
    },
    {
        name: 'Stella',
        username: 'Ste',
        password: 'camomile'
    },
    {
        name: 'Emma',
        username: 'Emm',
        password: 'dandelion'
    },
    {
        name: 'Amelia',
        username: 'Ame',
        password: 'buttercup'
    },
    {
        name: 'Sophia',
        username: 'Soph',
        password: 'rose'
    },
    {
        name: 'Charlotte',
        username: 'Char',
        password: 'tulip'
    },
    {
        name: 'Ava',
        username: 'Av',
        password: 'jasmine'
    },
    {
        name: 'Mia',
        username: 'M',
        password: 'lily'
    },
    {
        name: 'Olivia',
        username: 'Oli',
        password: 'yarrow'
    }
]

console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);