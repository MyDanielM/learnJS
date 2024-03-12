'use strict';
/* На вход подается строка состоящая из скобок "(" и ")"
   Нужно определить, строка является правильной или нет.
   Правильной строкой является та строка, где на каждую открывающуюся скобку есть закрывающаяся.
   Примеры правильной строки
   ()()()
   ()(())
   ((()))
   Примеры неправильных строк
   )))
   ())
   ()())(
*/ 

/*let innerString = undefined;
let counter = 0;
flag = true;

//innerString = prompt("Введите строку из скобок: ");

for (i=0;i<innerString.length;i++){
    if (innerString[i]==="(") counter+=1
    else counter-=1
    if (counter<0 || counter >innerString.length){
        flag = false;
        break;
    }
}
flag ? console.log(`Строка ${innerString} правильная`) : console.log(`Строка ${innerString} неправильная`)
*/


//Функции
/*
function showMsg(name='функция') {
    console.log(`Привет, я ${name}!`);
}

console.log(showMsg(""))
*/
let transactions = [];

function add(){
    let elem = document.getElementById("transactionInput");
    let value = elem.value;
    transactions.push(value);    
    elem.value="";
}

function show(){
    let elem = document.getElementById("transactions");
    elem.innerHTML = "";
    for (let i=0;i<transactions.length;i++){
        if (transactions[i]==='') continue;
        let newDiv = document.createElement('div');
        newDiv.innerHTML = transactions[i];
        elem.append(newDiv);
    }
}
/*
let dog = {
    name: "Sharik",
    age: 3,
    sayHi: ()=>{
        return "Waf!";
    },
}
console.log(`Собаке с именем ${dog.name} ${dog.age} лет. Она говорит: ${dog.sayHi()}`)


const AGE = {
    value: 12
}
console.log(AGE.value);
AGE.value = 15;

let user = {
    username: "admin",
    "is Admin": true,
}
let key = prompt("Что хочется узнать?", "username")
console.log(user[key]);

let name = prompt("Как назвать свойство?", "name");

let newUser = {
    [name]: "Daniel",
};

console.log(newUser[name]);

*/

function makeUser( name, age, sername = undefined ) {
    return {
        name,
        sername,
        age,
    }
}

let user = makeUser( "Daniel", 16 );
if ( user.defend === undefined ) {
    if ( user.age>=18 ) {
        user.defend = true;
    } else {
        user.defend = false;
    }
}

if ( "sername" in user ) {
    user.sername = "Myaktnykh";
}


console.log(user);

for ( let key in user ) {
    console.log(user[key]);
}


/*
function ask(impression, truth, dare){
    if (impression === "Правда") truth()
    else dare();
}

ask("Правда",
function () {console.log("Правда")},
function () {console.log("Действие")}
)


let pow = (a,b) => a**b;

pow = (a) => a**a;

console.log(pow(3))

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
*/