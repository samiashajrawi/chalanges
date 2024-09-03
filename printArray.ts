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
function printArray(input: any[]) {
    input.forEach( item => console.log(item))
}
function main() {
    let place:number = 0 
    while(place < inputLines.length){ 
        const newCutOff = place + parseInt(inputLines[place])+1
        printArray(inputLines.slice(place + 1,newCutOff))
        if(inputLines[newCutOff] && !isNaN(parseInt(inputLines[newCutOff]))){
            place = newCutOff
        } else {
            break
        }
    }
}
