// Método split
// Función tradicional 

/*function encontrarPiloto(codigo){

    return (codigo.split(":"))


}

let piloto = encontrarPiloto("ABC1234: Karen Marcela")
console.log("El piloto es: "+piloto[1])*/


let encontrarPiloto = codigo => codigo.split(":") 

let piloto = encontrarPiloto("ABC1234: Karen Marcela","QWE9512: Valentina Pulgarín", "SDF6341: Jhon Misas")
console.log("El piloto es: "+piloto[1])
