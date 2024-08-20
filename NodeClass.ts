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

class Item {
    data: number
    next:Item | null
    constructor (data: number){
        this.data = data
        this.next = null
    }
    printItems(): number[] {
        var result:number[] = [this.data]
        if (this.next !== null) {
            result= [...result, ...this.next.printItems()]
        }
        return result
    }
    
    insert(data:number) {
        const newNode = new Item(data)
        
        if(this.next !== null) {
            var current:Item = this.next
            while(current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }else {
            this.next = newNode
        }
    }

}
function main() {
    const t:number = parseInt(inputLines[0])
    var head:Item = new Item(parseInt(inputLines[1]))
    for(let i:number = 2; i<= t; i++) {
        head.insert(parseInt(inputLines[i]))
    }
    console.log(head.printItems().join(" "))
}
