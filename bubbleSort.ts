'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    var swipes:number = 0
    var roundSwipes: number = 0
    var isFirstRound = true
    while(isFirstRound || roundSwipes > 0 ){
        roundSwipes = 0
        isFirstRound = false
        for(let i:number = 1; i< n; i++) {
            if(a[i-1] > a[i]) {
                const x = a[i-1]
                a[i-1] = a[i]
                a[i] = x
                roundSwipes++
            }
        }
        swipes += roundSwipes
    }
        
    console.log(`Array is sorted in ${swipes} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[n-1]}`)
    
}
