function add(n1: number, n2: number, isTrue: boolean, frase: string) {
    if (isTrue) {
        console.log('É verdade!');
    }
    else {
        console.log('É mentira!');
    }
    console.log(frase, n1 + n2);
}
var n1 = 10;
var n2 = 13;
var boolean = true;
var fraseResultado = 'Resultado é: ';
add(n1, n2, boolean, fraseResultado);
