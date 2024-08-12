function processData(input) {
    const inputArr = input.split("\n")
    const phoneBook = new Map()
    const key = parseInt(inputArr[0])
    for( let i = 1; i <= key; i++){
        const [name, phone] = inputArr[i].split(" ")
        phoneBook.set(name, phone)
    }
    
    for (let i = key + 1; i< inputArr.length; i++) {
        const name = inputArr[i]
        if(phoneBook.has(name)) {
            console.log(`${name}=${phoneBook.get(name)}`)
        } else {
            console.log("Not found")
        }
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
