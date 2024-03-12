'use strict';

function calculateTime(func){
    let time = performance.now();
    let result = func();
    time = performance.now() - time;
    console.log(`Время выполнения сортировки ниже = ${time.toFixed(2)} ms.`);
    return result;
}

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


let arr = createArr(300);
console.log(`Исходный массив: ${arr}`);
console.log(`Отсортированный массив пузырьком: ${calculateTime(()=>bubbleSorting(arr))}`);
console.log(`Отсортированный массив перемешиванием: ${calculateTime(()=>cocktailSorting(arr))}`);

