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
*/
function separete(string,separator=","){
    separatedString = [];
    pushingString = "";
    for (i=0;i<string.length;i++){
        pushingString+=string[i];
        if (string[i]===separator) {
            separatedString.push(pushingString);
            pushingString="";
            continue;
        }
    }
    separatedString.push(pushingString);
    return separatedString;
}

function getABC(string){
    ABC = {a:undefined,b:undefined,c:undefined};
    separetedString = separete(string,",");
    ABC.a = separatedString[0];
    ABC.b = separatedString[1];
    ABC.c = separatedString[2];
    return ABC;
}



/*
console.log(showMsg(""))
*/


