function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var n1 = 10;
var n2 = 13;
var boolean = true;
var fraseResultado = 'Resultado é: ';
var combinedNumbers = combine(30, 26, 'as-number');
console.log(combinedNumbers);
var combinedNumbersString = combine('100', '26', 'as-number');
console.log(combinedNumbersString);
var combinedNames = combine("Geraldo", "Vicente", 'as-text');
console.log(combinedNames);
