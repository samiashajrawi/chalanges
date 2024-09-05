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

class Nodes {
    data:number
    next: Nodes
    constructor(v:number) {
        this.data = v
        this.next = null
    }
    
    insert(node:Nodes, v:number) {
        if(node.next !== null) {
            this.insert(node.next, v)
        } else {
           const newNode = new Nodes(v)
            node.next = newNode
        }
    }
    print (){
        const values:number[] = []
        values.push(this.data)
        let currentNodes:Nodes = this.next
        while(currentNodes){
            values.push(currentNodes.data)
            currentNodes = currentNodes.next
        }
        
        console.log(values.join(" "))
    }
    
}

function removeDuplicates(nodes:Nodes) {
    const values:number[] = []
    let currentNodes:Nodes = nodes || null
    while(currentNodes){
        values.push(currentNodes.data)
        if(currentNodes.next && values.includes(currentNodes.next.data)){
            const tempNode = currentNodes.next.next
            delete currentNodes.next
            currentNodes.next = tempNode
            
        } else {
            currentNodes = currentNodes.next
        }
    }
}
function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const n = parseInt(inputLines[0])
    const values = inputLines.slice(1).map(c => parseInt(c))
    const nodeList = new Nodes(values[0])
    for(let i:number = 1; i < n; i++){
        nodeList.insert(nodeList, values[i])
    }
    removeDuplicates(nodeList)
    nodeList.print()
    
}
