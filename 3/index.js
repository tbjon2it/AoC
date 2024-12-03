(async () => {

    const fs = require('fs');

    const input = fs.readFileSync('./data', 'utf8')
    console.log(input)
    const regex = /mul\(\d{1,3},\d{1,3}\)/gs;
    const x = input.match(regex)
    console.log(x);
    let total = 0;
    let parsed = []
    for (let i = 0; i < x.length; i++){
        let replacedAndSplit = x[i].replace('mul(', '').replace(')', '').split(',')
        total += parseInt(replacedAndSplit[0]) * parseInt(replacedAndSplit[1])
    }
    console.log(total)
})()