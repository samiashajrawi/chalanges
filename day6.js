function processData(input) {
    input = input.split('\n');
    for (let i = 1; i <= input[0]; i++) {
        let even_str = ""
        let odd_str = ""
        input[i].split('').forEach((char, index) => {
            if( index % 2 === 0 ){
                even_str += char
            } else {
                odd_str += char
            }
        })
        
        console.log(`${even_str} ${odd_str}`)
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
