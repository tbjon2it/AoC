const {data} = require('./input.json');

let parsedData = []
for (let i = 0; i < data.length; i++){
    parsedData.push(data[i].split(' '))
}
console.log('first half below')

let AreSafe = 0;

let startTime = performance.now()

for (let i = 0; i < parsedData.length; i++){
    let isUnsafe = false;
    let isDecreasing = null
    let key = parsedData[i]
    let right = key.length-1
    while (right > 0) {
        let diff = Math.max(key[right-1] - key[right], key[right] - key[right-1])
        let realDiff = key[right-1] - key[right]
        if (isDecreasing == null && realDiff > 0) isDecreasing = false;
        if (isDecreasing == null && realDiff < 0) isDecreasing = true;
        if (diff > 3 || diff == 0 || (isDecreasing && realDiff > 0) || (!isDecreasing && realDiff < 0)) {
            isUnsafe = true;
            break;
        };
        right--;
        
    }
    if (!isUnsafe){
        AreSafe++;
    } 


}
let endTime = performance.now()
console.log(`Execution time: ${endTime - startTime} ms`)
console.log(AreSafe)

console.log('second half below')

AreSafe = 0;

startTime = performance.now()

function CheckIsUnSafe(key){
    let isUnsafe = false
    let right = key.length-1
    let RemoveTillSafe = 0
    let isDecreasing = null
    while (right > 0) {
        
        let diff = Math.max(key[right-1] - key[right], key[right] - key[right-1])
        let realDiff = key[right-1] - key[right]
        if (isDecreasing == null && realDiff > 0) isDecreasing = false;
        if (isDecreasing == null && realDiff < 0) isDecreasing = true;
        if (diff > 3 || diff == 0 || (isDecreasing && realDiff > 0) || (!isDecreasing && realDiff < 0)) {
           
            isUnsafe = true;
            break;
       
            
        };
        right--;
        
    }
    return isUnsafe
}

for (let i = 0; i < parsedData.length; i++){
    
    
    let key = parsedData[i]
    let isUnsafe = CheckIsUnSafe(key)
    if (!isUnsafe){
        AreSafe++;
    }else {

        for (let a = 0; a < key.length; a++) {
            let newKey = [... key]
            newKey.splice(a, 1)
            isUnsafe = CheckIsUnSafe(newKey)
            if (!isUnsafe){
                AreSafe++;
                break;
            }
        }
    }


}
endTime = performance.now()
console.log(`Execution time: ${endTime - startTime} ms`)
console.log(AreSafe)