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