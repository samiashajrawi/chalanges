'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
    const b = n.toString(2)
    const squence = b.split("0")
    let max =squence[0]
    squence.forEach((a) =>{
        if (a.length > max.length ) 
            max = a
    })
    console.log(max.length)
}
