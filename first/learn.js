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

let innerString = undefined;
let counter = 0;
flag = true;

innerString = prompt("Введите строку из скобок: ");

for (i=0;i<innerString.length;i++){
    if (innerString[i]==="(") counter+=1
    else counter-=1
    if (counter<0 || counter >innerString.length){
        flag = false;
        break;
    }
}
flag ? console.log(`Строка ${innerString} правильная`) : console.log(`Строка ${innerString} неправильная`)




