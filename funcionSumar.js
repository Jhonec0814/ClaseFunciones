// Función que sume dos numeros
// Función con 2 parametros (numero1 y numero2)

// Funcion traidicional
/*function sumar(numero1, numero2){

    let suma = numero1 + numero2
    return(`El resultado de la suma de ${numero1} + ${numero2} = ${suma}`)

}
let resultado = sumar(5,5)
console.log(resultado)*/

// Funcion de flecha
// Another way

let sumar=(numero1,numero2) => (`El resultado de la suma de ${numero1} + ${numero2} = ${numero1 + numero2}`)
    
let resultado = sumar(5,5)
console.log(resultado)

