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

class Elements {
    readonly length: number;
    readonly elements: number[] = [];

    constructor(input: string[]) {
        this.length = parseInt(input[0]);
        this.elements = input[1].split(" ").map((item: string) => parseInt(item));
    }
    
    maximumDifference(): number {
        return Math.max(...this.elements) - Math.min(...this.elements);
    }
}
function main() {
    const elements = new Elements(inputLines)
    console.log(elements.maximumDifference())
}
