// - є масив

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// --- Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

// for (const simpson of simpsons) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('member');
//     divElement.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`
//     document.body.appendChild(divElement);
// }


// --- Цикл в циклі
// - Є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let courses = document.createElement('div')
// courses.className = 'courses'
// courses.style.border = '5px solid red'
//
// for (const course of coursesArray) {
//
//     let courseElement = document.createElement('div');
//     courseElement.className = 'course' + course.title
//     courseElement.style.border = '4px solid'
//     courseElement.style.margin = '10px'
//
//
//     let titleElement = document.createElement('h2');
//     titleElement.innerText = course.title;
//     titleElement.style.border = '3px solid cornflowerblue'
//     titleElement.style.margin = '10px'
//
//     let monthDurationElement = document.createElement('div');
//     monthDurationElement.innerText = course.monthDuration;
//     monthDurationElement.style.width = '30%'
//     monthDurationElement.style.border = '2px solid cornflowerblue'
//     monthDurationElement.style.marginLeft = '10px'
//     let hourDurationElement = document.createElement('div');
//     hourDurationElement.innerText = course.hourDuration;
//     hourDurationElement.style.width = '65%'
//     hourDurationElement.style.border = '2px solid cornflowerblue'
//     hourDurationElement.style.marginRight = '10px'
//
//     let duration = document.createElement('div')
//     duration.style.display = 'flex'
//     duration.style.justifyContent = 'space-between'
//
//     let modulesElement = document.createElement('ul');
//     modulesElement.style.border = '2px solid cornflowerblue'
//     modulesElement.style.margin = '10px'
//
//     for (const moduleItem of course.modules) {
//         let module = document.createElement('li');
//         module.innerText = moduleItem;
//         module.style.border = '1px solid cornflowerblue'
//         module.style.margin = '5px'
//         modulesElement.appendChild(module);
//     }
//
//     courseElement.appendChild(titleElement);
//
//     duration.appendChild(monthDurationElement);
//     duration.appendChild(hourDurationElement);
//     courseElement.appendChild(duration);
//     courseElement.appendChild(modulesElement);
//     courses.appendChild(courseElement)
// }
//
// document.body.appendChild(courses);

// ------------------


// - створити блок,
// let div = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '36px';
// div.style.width = '100px'
// div.style.height ='50px'

// - додати цей блок в body.
// document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// let menuItems = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const item of menuItems) {
//     let li = document.createElement('li');
//     li.innerText = item;
//     menu.appendChild(li);
//
// }



//
// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${course.title} ${course.monthDuration}`;
//     document.body.appendChild(divElement);
// }



// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.className = 'item'
//     let h1 = document.createElement('h1');
//     h1.className = 'heading'
//     h1.innerText = course.title;
//
//     let p = document.createElement('p');
//     p.className = 'description'
//     p.innerText = course.monthDuration;
//
//
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// }


// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// let someElement = document.createElement('div');
// document.body.appendChild(someElement);
// someElement.id = 'text';
// someElement.style.width = '100px';
// someElement.style.height = '100px';
// someElement.style.background = 'cornflowerblue';

// let addButton = document.createElement('button');
// document.body.appendChild(addButton);
// addButton.innerText = 'Click me';
// addButton.style.width = '70px';
// addButton.style.height = '35px';
// addButton.style.marginTop = '50px';

// addButton.onclick = function () {
//     document.getElementById('text').style.display = 'none';
// };


//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const form1 = document.createElement('form');
// form1.setAttribute('action', 'submit');
//
// const input1 = document.createElement('input');
// input1.setAttribute('type', 'text');
// input1.setAttribute('age', 'userAge');
//
// form1.appendChild(input1);
// document.body.appendChild(form1);
//
// let button = document.createElement('button');
// button.innerText = 'Submit';
// button.style.width = '70px';
// button.style.height = '20px';
// button.style.marginTop = '10px';
// document.body.appendChild(button)
//
// button.onclick = function () {
//     console.log(input1.value);
//     if (input1.value < 18) {
//         alert(`Your age is ${input1.value} so go watch some other content, as cartoons :)`)
//     } else {
//         alert(`Your age is ${input1.value}`)
//     }
// }

// input1.addEventListener('change', ev => {
//     console.log(ev.target.value);
//     if (ev.target.value < 18) {
//         alert(`Your age is ${ev.target.value} so go watch some other content, as cartoons :)`)
//     } else {
//         alert(`Your age is ${ev.target.value}`)
//     }
// });



// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// const form1 = document.createElement('form');
// form1.setAttribute('action', 'submit');
//
// const input1 = document.createElement('input');
// input1.setAttribute('type', 'text');
// input1.setAttribute('numberOfLines', 'userNumber');
//
// const input2 = document.createElement('input');
// input2.setAttribute('type', 'text');
// input2.setAttribute('numberOfCells', 'userCells');
//
// const input3 = document.createElement('input');
// input3.setAttribute('type', 'text');
// input3.setAttribute('cellsContent', 'userCellsContent');
//
// form1.appendChild(input1);
// form1.appendChild(input2);
// form1.appendChild(input3)
// document.body.appendChild(form1);
//
// let button = document.createElement('button');
// button.innerText = 'Submit';
// button.style.width = '70px';
// button.style.height = '20px';
// button.style.marginTop = '10px';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     console.log(input1.value, input2.value, input3.value);
//     let table = document.createElement('table');
//     let tr1 = document.createElement('tr');
//     let tr2 = document.createElement('tr');
//     let th1 = document.createElement('th');
//     let th2 = document.createElement('th');
//     let th3 = document.createElement('th');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     let td3 = document.createElement('td');
//     tr1.appendChild(th1);
//     tr1.appendChild(th2);
//     tr1.appendChild(th3);
//     table.appendChild(tr1);
//     tr2.appendChild(td1);
//     tr2.appendChild(td2);
//     tr2.appendChild(td3);
//     table.appendChild(tr2);
//     document.body.appendChild(table);
//     th1.innerText = 'numberOfLines';
//     th2.innerText = 'numberOfCells';
//     th3.innerText = 'cellsContent';
//     td1.innerText = input1.value;
//     td2.innerText = input2.value;
//     td3.innerText = input3.value;
//
//     table.style.border = '1px solid';
//     table.style.marginTop = '40px';
//     th1.style.border = '1px solid';
//     th2.style.border = '1px solid';
//     th3.style.border = '1px solid';
//     td1.style.border = '1px solid';
//     td2.style.border = '1px solid';
//     td3.style.border = '1px solid';
//
// };



// ---------------------------------------------- !!!ADDITIONAL!!! ----------------------------------------------


// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Robel-Corkery',
//             catchPhrase: 'Multi-tiered zero tolerance productivity',
//             bs: 'transition cutting-edge web services'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Johns Group',
//             catchPhrase: 'Configurable multimedia task-force',
//             bs: 'generate enterprise e-tailers'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];


//--- Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

// let users = document.createElement('div')
// users.className = 'users'
// users.style.border = '5px solid red'
//
// for (const usersListElement of usersList) {
//
//     let userElement = document.createElement('div')
//     userElement.className = 'user' + usersListElement.id
//     userElement.style.border = '4px solid'
//     userElement.style.margin = '10px'
//
//     let titleElement = document.createElement('h2')
//     titleElement.className = 'id'
//     titleElement.innerText = usersListElement.id;
//     titleElement.style.border = '2px solid cornflowerblue'
//     titleElement.style.margin = '10px'
//
//     let name = document.createElement('div');
//     name.className = 'name'
//     name.innerText = usersListElement.name
//     name.style.border = '2px solid cornflowerblue'
//     name.style.margin = '10px'
//
//     let userName = document.createElement('div')
//     userName.className = 'userName'
//     userName.innerText = usersListElement.username
//     userName.style.border = '2px solid cornflowerblue'
//     userName.style.margin = '10px'
//
//     let email = document.createElement('div')
//     email.className = 'email'
//     email.innerText = usersListElement.email
//     email.style.border = '2px solid cornflowerblue'
//     email.style.margin = '10px'
//
//     let addressElement = document.createElement('ul')
//     addressElement.className = 'address'
//     addressElement.style.border = '2px solid cornflowerblue'
//     addressElement.style.margin = '10px'
//
//     for (const addressItem of Object.entries(usersListElement.address)) {
//         let address = document.createElement('li');
//         address.innerText = addressItem
//         address.style.border = '1px solid cornflowerblue'
//         address.style.margin = '5px'
//         addressElement.appendChild(address);
//     }
//
//     let phone = document.createElement('div')
//     phone.className = 'phone'
//     phone.innerText = usersListElement.phone
//     phone.style.border = '2px solid cornflowerblue'
//     phone.style.margin = '10px'
//
//     let website = document.createElement('div')
//     website.className = 'website'
//     website.innerText = usersListElement.website
//     website.style.border = '2px solid cornflowerblue'
//     website.style.margin = '10px'
//
//     let companyItem = document.createElement('ul')
//     companyItem.className = 'company'
//     companyItem.style.border = '2px solid cornflowerblue'
//     companyItem.style.margin = '10px'
//
//     for (const companyElement of Object.entries(usersListElement.company)) {
//         let company = document.createElement('li');
//         company.innerText = companyElement
//         company.style.border = '1px solid cornflowerblue'
//         company.style.margin = '5px'
//         companyItem.appendChild(company);
//     }
//
//     userElement.appendChild(titleElement)
//     userElement.appendChild(name);
//     userElement.appendChild(userName);
//     userElement.appendChild(email);
//     userElement.appendChild(addressElement);
//     userElement.appendChild(phone);
//     userElement.appendChild(website)
//     userElement.appendChild(companyItem)
//     users.appendChild(userElement)
//
//
// }
//
// document.body.appendChild(users);



//--- за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs


// --- зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>


