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
    const [firstName, lastName, id] = inputLines[0].split(" ");
    
    const base = parseInt(inputLines[1]);
    const gradsSum = inputLines[2].split(" ").reduce((p, i) => p + parseInt(i), 0);
    const grad = gradsSum / base;
    
    const levels: { [key: string]: [number, number] } = {
        O: [90, 100],
        E: [80, 89],
        A: [70, 79], 
        P: [55, 69],
        D: [40, 54],
        T: [0, 39]
    };

    let gradeLevel = "T"; // Default to the lowest grade if no match is found
    for (const property in levels) {
        const [min, max] = levels[property as keyof typeof levels];
        if (grad >= min && grad <= max) {
            gradeLevel = property;
            break;
        }
    }
    
    console.log(`Name: ${lastName}, ${firstName}`);
    console.log(`ID: ${id}`);
    console.log(`Grade: ${gradeLevel}`);
}
