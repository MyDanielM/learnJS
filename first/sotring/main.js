'use strict';
//Функция создания массива
function createArr(length){
    let arr=[];
    for (let i = 0; i<length;i++){
        arr.push(Math.round(Math.random()*(1000-1)));
    }
    return arr;
}
// Пузырьковая сортировка
function bubbleSorting(sortingArr){
    let newArr = sortingArr.slice();
    for (let i = 0;i<newArr.length;i++){
        for (let j=0;j<newArr.length;j++){
            if (newArr[j]>newArr[j+1]){
                let tmp=newArr[j];
                newArr[j]=newArr[j+1];
                newArr[j+1] = tmp;
            }
        }
    }
    return newArr;
}
function cocktailSorting(sortingArr){
    let newArr = sortingArr.slice();
    let left = 0;
    let right = newArr.length-1;
    while (left<right){
        for (let i = left;i<right;i++){
            if (newArr[i]>newArr[i+1]){
                let tmp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = tmp; 
            }
        }
        right--;
        for (let i = right; left<i;i--){
            if (newArr[i]<newArr[i-1]){
                let tmp = newArr[i];
                newArr[i] = newArr[i-1];
                newArr[i-1] = tmp; 
            }
        }
        left++;
    }
    
    return newArr;
}


let arr = createArr(100);
console.log(`Исходный массив: ${arr}`);
let time = performance.now();
console.log(`Отсортированный массив пузырьком: ${bubbleSorting(arr)}`);
time = performance.now() - time;
console.log(`Время выполнения = ${time.toFixed(2)} ms.`);
time = performance.now();
console.log(`Отсортированный массив перемешиванием: ${cocktailSorting(arr)}`);
time = performance.now() - time;
console.log(`Время выполнения = ${time.toFixed(2)} ms.`);
