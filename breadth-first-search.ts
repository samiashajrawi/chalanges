// Task
// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes 
// from left to right, top to bottom. You are given a pointer, , pointing to the root of a binary 
// search tree. Complete the levelOrder function provided in your editor so that it prints the level-order
// traversal of the binary search tree.

// Hint: You'll find a queue helpful in completing this challenge.

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
class TreeNode {
    value:number
    right: TreeNode | null
    left: TreeNode | null

    constructor(v:number){
        this.value = v
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root:TreeNode
    constructor() {
        this.root = null
    }

    insert(v:number) {
        const newNode:TreeNode = new TreeNode(v)
        if(!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }

    }

    private insertNode(node:TreeNode, newNode:TreeNode) {
        if(node.value >= newNode.value) {
            if(!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }else{
            if(!node.left) {
                node.left = newNode
            } else{
                this.insertNode(node.left, newNode)
            }
        }
    }

    getHieght (node:TreeNode):number {
        if(node) {
            const rightHieght = this.getHieght(node.right)
            const lefttHieght = this.getHieght(node.left)
            return Math.max(rightHieght, lefttHieght) + 1
        }

        return -1
    }
    
    printTree(node:TreeNode):number[] {
        const result:number[] = []
        const queue:TreeNode[] = []
        queue.push(node)
        while (queue.length) {
            const currentNode = queue.shift()
            result.push(currentNode.value)
            currentNode.right && queue.push(currentNode.right)
            currentNode.left && queue.push(currentNode.left)
        }
        
        return result
    }
}

function main() {
    const bst = new BinarySearchTree()
    inputLines.slice(1).forEach(line => {
        bst.insert(parseInt(line))
    })

    console.log(bst.printTree(bst.root).join(" "))

}

