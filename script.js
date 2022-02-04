
/*//խնդիր1
const isOddNumber =  (number) => {
    const stringFromNumber = `${number}`;
    return (stringFromNumber[0] % 2 === 0)? false: (stringFromNumber.length === 1)? true: isOddNumber(number % (10 ** (`${number}`.length - 1)));
}*/


/*
//խնդիր2
const getMinPositiveNumber = (function() {
    let i = 0;
    let minNumber = -1;
    return function (arr) {
        i += 1;
        const arrI = arr[i - 1];
        const arrLength = arr.length;
        //console.log(i, arrLength)
        if ((minNumber < 0) && (arrI > 0)) minNumber = arrI;
        else if ((arrI > -1) && (arrI < minNumber)) minNumber = arrI;
        
        return (i === arrLength + 1)? minNumber: getMinPositiveNumber(arr);
    }
})();
*/


/*
//խնդիր3
const getBrokenSortingIndex = (function() {
        let i = -1;
       return function(arr) {
           if (arr.length === 0) return -1;
           i += 1;
           return (i === arr.length - 1)? -1: (arr[i] > arr[i + 1])? i + 1: getBrokenSortingIndex(arr);

        };
})();
*/

/*
//խնդիր4
const removeFirstItem = (function () {
    let i = -1;
    const result = [];
    return function(arr) {
        i += 1;
        const arrLength = arr.length;
        if (arrLength < 2) return [];
        result[i] = arr[i + 1];
        return ((i === arrLength - 2))? result: removeFirstItem(arr);
    }
})();
*/


/*
//խնդիր5
const getFlatArr = (function(){
    let i = -1;
   let flatArr = [];
   let isFlate = true;
    return function (arr) {
        if (arr.length === 0) return [];
        i += 1;
        if (Array.isArray(arr[i])) {
            flatArr.push(...arr[i]);
            isFlate = false;
        }
        else flatArr.push(arr[i]);
        if (i === arr.length - 1) {
            if (isFlate) return arr;
            else {
                arr = flatArr;
                flatArr = [];
                i = -1;
                isFlate = true;
            }
        }
        return getFlatArr(arr);
    }
})();
*/


/*
//խնդիր6
const rotatesArrNCount = function(arr,n) {
    if (n === 0) return;
    else if (n > 0) {
        arr.push(arr.shift(arr[0]))
        rotatesArrNCount(arr, --n);
    }
    else if (n < 0) {
        arr.unshift(arr.pop(arr[arr.length - 1]))
        rotatesArrNCount(arr, ++n);
    }
   
};
*/


/*
//խնդիր7
const getSumDigitshUntilOneSimbol = (function() {
    let i = -1;
    let stringFromNumber;
    let sumNumbers = 0;
    return function(number) {
        i += 1;
        if (i === 0) stringFromNumber = `${number}`;
        sumNumbers += (+stringFromNumber[i]);
        if  (i === stringFromNumber.length - 1){
            if (`${sumNumbers}`.length === 1)return sumNumbers;
            else {
                stringFromNumber = sumNumbers;
                sumNumbers = 0;
                i = -1;
            }
        }
        
        return getSumDigitshUntilOneSimbol(stringFromNumber);
    }
})();
*/



//խնդիր8?
/*
const getFlatArr = (function(){
    let i = -1;
   let flatArr = [];
   let isFlate = true;
    return function (arr) {
        if (arr.length === 0) return [];
        i += 1;
        if (Array.isArray(arr[i])) {
            flatArr.push(...arr[i]);
            isFlate = false;
        }
        else flatArr.push(arr[i]);
        if (i === arr.length - 1) {
            if (isFlate) return arr;
            else {
                arr = flatArr;
                flatArr = [];
                i = -1;
                isFlate = true;
            }
        }
        return getFlatArr(arr);
    }
})()*/








