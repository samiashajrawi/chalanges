// Task
// A prime is a natural number greater than  that has no positive divisors other than  and itself. Given a number, , determine and print whether it is  or .

// Note: If possible, try to come up with a  primality algorithm, or see what sort of optimizations you come up with for an  algorithm. Be sure to check out the Editorial after submitting your code.

// Input Format

// The first line contains an integer, , the number of test cases.
// Each of the  subsequent lines contains an integer, , to be tested for primality.

// Constraints

// Output Format

// For each test case, print whether  is  or  on a new line.
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
function isPrime(n: number): string {
    if (n <= 1) return "Not prime";
    if (n === 2 || n === 3) return "Prime";
    if (n % 2 === 0 || n % 3 === 0) return "Not prime";

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return "Not prime";
        }
    }
    return "Prime";
}

function main() {
    const t = parseInt(inputLines[0]);
    
    for (let i = 1; i <= t; i++) {
        const n = parseInt(inputLines[i]);
        console.log(isPrime(n));
    }
}
