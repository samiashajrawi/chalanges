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
    for(var i:number = 0; i< inputLines.length; i++) {
            const items:number[] = inputLines[i].split(" ").map((item:string):number => {
                return parseInt(item)
            })
            if(items.length > 1) {
                try{
                    if(items[0] < 0 || items[1] < 0){
                        throw new Error()
                    }
                    console.log(Math.pow(items[0], items[1]))
                } catch(e) {
                   console.log('n and p should be non-negative')
                }
            }
    }
}
