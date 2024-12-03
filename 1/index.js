const {arr1, arr2} = require("./input");
let execTime = 0;

let sortArrayDescBetter = (arr) => {
    let startTime = performance.now();
    
    let left = 0;
    let right = arr.length - 1;

    for (let i = left; i <= right; i++) {
        let cur = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] < cur) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
    
    let endTime = performance.now();
    console.log(`Sorting algorithm 2 took ${endTime - startTime} milliseconds to sort the array`);
    execTime += endTime - startTime;
    return arr;
}


let arr1Sorted = sortArrayDescBetter(arr1);

let arr2Sorted = sortArrayDescBetter(arr2);

const getDistance = (uno, dos) => {
    let total = 0;
    for (let i = 0; i < uno.length; i++) total += (uno[i] - dos[i] > 0) ? uno[i] - dos[i] : dos[i] - uno[i];
    return total;
}

let totalDist = getDistance(arr1Sorted, arr2Sorted);
console.log(`Distance: ${totalDist}`);

const getSimilarityScoreBetter = (uno, dos) => {
    let startTime = performance.now();
    let thing = []
    let total = 0;
    for (let i = 0; i < dos.length; i++) {
        if (thing[dos[i]]) {
            thing[dos[i]]++;
        }else {
            thing[dos[i]] = 1;
        }
    }

    for (let i = 0; i < uno.length; i++) {
        if (thing[uno[i]]) {
            total += uno[i] * thing[uno[i]];
        }
    }
    let endTime = performance.now();
    console.log(`Similarity algorithm 2 took ${endTime - startTime} milliseconds to calculate the similarity score`);
    execTime += endTime - startTime;
    return total;

}


let similarityScore2 = getSimilarityScoreBetter(arr1, arr2);
console.log(`Similarity Score: ${similarityScore2}`);

console.log(`Total execution time: ${execTime} milliseconds`);