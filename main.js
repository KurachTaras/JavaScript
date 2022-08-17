// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }


// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let users = [];
//
// let Taras = new User('1', 'Taras', 'Kurach', 'taras@gmail.com', +3804143122);
// let Emilia = new User('4', 'Emilia', 'Sunflower', 'sunflower@gmail.com', 3803414123);
// let Stella = new User('3', 'Stella', 'Camomile', 'camimile@gmail.com', +3804213132);
// let Emma = new User('2', 'Emma', 'Dandelion', 'dandelion@gmail.com', +38032132132);
// let Amelia = new User('10', 'Amelia', 'Buttercup', 'buttercup@gmail.com', +38042432134);
// let Sophia = new User('9', 'Sophie', 'Rose', 'rose@gmail.com', +38031432422);
// let Charlotte = new User('7', 'Charlotte', 'Tulip', 'tulip@gmail.com', +380412313);
// let Ava = new User('8', 'Ava', 'Jasmine', 'jasmine@gmail.com', +3804143123);
// let Mia = new User('6', 'Mia', 'Lily', 'lily@gmail.com', +38045221312);
// let Olivia = new User('5', 'Olivia', 'Yarrow', 'yarrow@gmail.com', +38041231313);

// users.push(Taras);
// users.push(Emilia);
// users.push(Stella);
// users.push(Emma);
// users.push(Amelia);
// users.push(Sophia);
// users.push(Charlotte);
// users.push(Ava);
// users.push(Mia);
// users.push(Olivia);
//
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let eventUsers = users.filter((user) => user.id % 2 === 0);
//
// console.log(eventUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let increase = users.sort((a, b) => a.id - b.id);
// console.log(increase);

// second option for this task
// eventUsers.sort((a, b) => a.id - b.id);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }


// створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [];
//
// let client1 = new Client(1,'Taras', 'Kurach',"taras@gmail.com",+38043245252, ['car', 'phone','apple']);
// let client2 = new Client(2,"Emilia", "Sunflower","sunflower@gmail.com",+38043245321, ['car', 'book','cake','fish','iceCream']);
// let client3 = new Client(3,"Stella", "Camomile","camomile@gmail.com",+38043245123, ['cake', 'phone','iceCream','car']);
// let client4 = new Client(4,"Emma", "Dandelion","dandelion@gmail.com",+38043215213, ['book', 'iceCream','cake','phone','apple','wine']);
// let client5 = new Client(5,"Amelia", "Buttercup","buttercup@gmail.com",+38087645252, ['iceCream', 'car']);
// let client6 = new Client(6,"Sophia", "Rose","rose@gmail.com",+38046485252, ['tomato']);
// let client7 = new Client(7,"Charlotte", "Tulip","tulip@gmail.com",+38098765252, ['apple', 'banana','book','iceCream','tomato','cake','water','wine']);
// let client8 = new Client(8,"Ava", "Jasmine","jasmine@gmail.com",+38065342552, ['water', 'wine','car','vodka','cake','phone','car']);
// let client9 = new Client(9,"Mia", "Lily","lily@gmail.com",+3804455252, ['cucumber', 'cake','water','wine','phone','car','iceCream','book','apple']);
// let client10 = new Client(10,"Olivia", "Yarrow","yarrow@gmail.com",+38033486251, ['car', 'phone','wine','book','water','apple','cake','fish','tomato','banana']);

// clients.push(client1);
// clients.push(client2);
// clients.push(client3);
// clients.push(client4);
// clients.push(client5);
// clients.push(client6);
// clients.push(client7);
// clients.push(client8);
// clients.push(client9);
// clients.push(client10);
//
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let increaseOrder = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(increaseOrder);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car (model, manufacturer, year, maxSpeed, volumeEngine){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeEngine = volumeEngine;
//
//     this.drive= function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(`
//         model: ${this.model}
//         manufacturer: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         volumeEngine: ${this.volumeEngine}
//         `);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver =function (driver = {}) {
//         this.driver = driver;
//     }
// }
//
//
// let audi = new Car('RS 7 SportBack', 'Audi', '2021', '335', '4.0 twin-turbo V8');
//
// audi.drive();
// audi.increaseMaxSpeed(380);
// audi.changeYear(2022);
// audi.addDriver({name: 'Taras', age: '21'});
// audi.info();
//
// console.log(audi);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model, manufacturer, year, maxSpeed, volumeEngine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volumeEngine = volumeEngine;
//     }
//
//     drive= function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info = function () {
//         console.log(`
//         model: ${this.model}
//         manufacturer: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         volumeEngine: ${this.volumeEngine}
//         `);
//     }
//
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver = function (driver = {}) {
//         this.driver = driver;
//     }
//
// }
//
// let audi = new Car('RS 7 SportBack', 'Audi', '2021', '335', '4.0 twin-turbo V8');
//
//
//
// audi.drive();
// audi.increaseMaxSpeed(360);
// audi.changeYear(2022);
// audi.addDriver({name: 'Taras', age: '21'});
// audi.info();
//
// console.log(audi);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//     constructor(name,
//                 age,
//                 legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let cinderella1 = new Cinderella('Emilia',20,39);
// let cinderella2 = new Cinderella('Stella',21,37);
// let cinderella3 = new Cinderella('Emma',20,38);
// let cinderella4 = new Cinderella('Amelia',21,36);
// let cinderella5 = new Cinderella('Sophia',21,35);
// let cinderella6 = new Cinderella('Charlotte',21,34);
// let cinderella7 = new Cinderella('Ava',20,33);
// let cinderella8 = new Cinderella('Mia',21,32);
// let cinderella9 = new Cinderella('Olivia',21,31);
// let cinderella10 = new Cinderella('Isabella',20,30);
//
// let cinderellas = [];
//
// cinderellas.push(cinderella1);
// cinderellas.push(cinderella2);
// cinderellas.push(cinderella3);
// cinderellas.push(cinderella4);
// cinderellas.push(cinderella5);
// cinderellas.push(cinderella6);
// cinderellas.push(cinderella7);
// cinderellas.push(cinderella8);
// cinderellas.push(cinderella9);
// cinderellas.push(cinderella10);
//
// console.log(cinderellas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(name,
//                 age,
//                 shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let prince = new Prince('Taras', 21, 36);
//
// console.log(prince);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let trueCinderella = cinderellas.find(value => value.legSize === prince.shoe);
//
// console.log(trueCinderella);




// --------------------------------------- !ADDITIONAL! ------------------------------------------




// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// class ObjectCreator {
//     constructor(id, name, username, email,
//                 address = {street: '', suite: '', city: '', zipcode: '', geo: {lat: '', lng : ''}},
//                 phone, website, company = {name: '', catchPhrase: '', bs: ''}) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company
//     }
//
// }
//
// let newObj = new ObjectCreator('2', 'Taras', 'shin^ra', 'taras@gmail.com',
//     {street: 'Green', suite: 'Apt.137', city: 'Lviv', zipcode: '2313-313',
//         geo: {lat: '-31.714', lng: '41.4313'}}, +380423424, 'oblivion.org',
//     {name: 'Sunset', catchPhrase: 'A diamond is forever.', bs: 'idk what it mean'});
//
// console.log(newObj);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class TagCreator {
//     constructor(titleOfTag, action, attrs = [{titleOfAttr: '', actionOfAttr: ''}]) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let tagA = new TagCreator('a', 'The <a> tag defines a hyperlink, which is used to link from one page to another.',
//     [{titleOfAttr: 'href', actionOfAttr: 'indicates the link\'s destination'}, {titleOfAttr: 'rel', actionOfAttr: 'Specifies the relationship between the current document and the linked document'}]);
//
// console.log(tagA);
//
//
// let tagDiv = new TagCreator('div', 'The <div> tag defines a division or a section in an HTML document.',
//     [{titleOfAttr: 'supports the Global Attributes in HTML.', actionOfAttr: 'The global attributes are attributes that can be used with all HTML elements.'}, {
//     titleOfAttr: 'supports the Event Attributes in HTML.', actionOfAttr: 'the global event attributes that can be added to HTML elements to define event actions.'
//     }]);
//
// console.log(tagDiv);
//
//
// let tagH1 = new TagCreator('h1', 'The <h1> to <h6> tags are used to define HTML headings.',
//     [{titleOfAttr: 'global attributes in html', actionOfAttr: 'same shit'}, {titleOfAttr: 'same shit', actionOfAttr: 'same shit'}]);
//
// console.log(tagH1);
//
//
// let tagForm = new TagCreator('form', 'The <form> tag is used to create an HTML form for user input.',
//     [{titleOfAttr: 'action', actionOfAttr: 'Specifies where to send the form-data when a form is submitted'}, {
//     titleOfAttr: 'target', actionOfAttr: 'Specifies where to display the response that is received after submitting the form'
//     }]);
//
// console.log(tagForm);
//
//
// let tagOption = new TagCreator('option', 'The <option> tag defines an option in a select list.', [{
//     titleOfAttr: 'disabled', actionOfAttr: 'Specifies that an option should be disabled'}, {
//     titleOfAttr: 'selected', actionOfAttr: 'Specifies that an option should be pre-selected when the page loads'
// }]);
//
// console.log(tagOption);
//
//
// let tagSelect = new TagCreator('select', 'The <select> element is used to create a drop-down list.', [{
//     titleOfAttr: 'disabled', actionOfAttr: 'Specifies that a drop-down list should be disabled'}, {
//     titleOfAttr: 'required', actionOfAttr: 'Specifies that the user is required to select a value before submitting the form'
// }]);
//
// console.log(tagSelect);

