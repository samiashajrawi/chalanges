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

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    var maxSum = -Infinity
    
    for(let i = 0; i < arr.length - 2; i++) {
        for(let c = 0; c < arr[i].length - 2; c++) {
            let sum = arr[i][c] + arr[i][c + 1] + arr[i][c + 2] + 
            arr[i + 1][c + 1] + 
            arr[i + 2][c] + arr[i+ 2][c + 1] + arr[i+ 2][c + 2] 
                    
            maxSum = Math.max(maxSum, sum)
        }
    }
    
   console.log(maxSum)
}
