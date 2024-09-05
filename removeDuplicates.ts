// Task
// A Node class is provided for you in the editor. A Node object has an integer data field,
//and a Node instance pointer, pointing to another node (i.e.: the next node in a list).

// A removeDuplicates function is declared in your editor, which takes a pointer to the  node of a linked list as a parameter. 
// Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

// Note: The  pointer may be null, indicating that the list is empty. Be sure to reset your  pointer when performing deletions to avoid breaking the list.

// Input Format

// You do not need to read any input from stdin. The following input is handled by the locked stub code and passed to the removeDuplicates function:
// The first line contains an integer, , the number of nodes to be inserted.
// The  subsequent lines each contain an integer describing the  value of a node being inserted at the list's tail.

// Constraints

// The data elements of the linked list argument will always be in non-decreasing order.
// Output Format

// Your removeDuplicates function should return the head of the updated linked list. The locked stub code in your editor will print the returned list to stdout.
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
