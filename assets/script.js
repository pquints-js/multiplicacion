/* Función para pedir el número al usuario */
function pedirNumero() {
    var numero = prompt("Ingresa un número entre 1 y 20:");
    numero = parseInt(numero);
    return numero;
}

/* Función para validar el número */
function validarNumero(numero) {
    if (numero < 1 || numero > 20 || isNaN(numero)) {
        console.log(" El numero ingresado no es valido");
        return false;
    }
    return true;
}

/* Función para mostrar la tabla de multiplicar */
function mostrarTabla(numero) {
    for (var i = 1; i <= numero; i++) {
        var resultado = i * numero;
        console.log(i + " x " + numero + " = " + resultado);
    }
}

/* Función para calcular y mostrar el factorial */
function mostrarFactorial(numero) {
    for (var i = 1; i <= numero; i++) {
        var factorial = 1;
        for (var j = 1; j <= i; j++) {
            factorial = factorial * j;
        }
        console.log("Factorial de " + i + " es: " + factorial);
    }
}

/* Función principal */
function main() {
    var numero = pedirNumero();
    if (validarNumero(numero)) {
        mostrarTabla(numero);
        mostrarFactorial(numero);
    }
}

/* Ejecutar el programa */
main();
