function add(n1: number, n2: number) {
    return n1 + n2;
}

function addAndFunction(n1: number, n2: number, call: (num: number) => void) {
    const result = n1 + n2;
    call(result);
}


addAndFunction(5, 15, (result) => {
    console.log(result);
});

function printResult(num: number) {
    console.log("O número é: " + num);
}

printResult(add(5, 10));

let typeFunction: (a: number, b: number) => number;

typeFunction = add;
// typeFunction = printResult;

console.log(typeFunction(5, 3));
