// Funcion tradicional

/* función larga
function calcularDistancia(x1,x2,y1,y2){
   
    let restaX=x2- x1
    let restaY=y2 -y1

    let potenciaX= Math.pow(restaX,2)
    let potenciaY= Math.pow(restaY,2)

    let suma= potenciaX + potenciaY

    let raiz=Math.sqrt(suma)
    return(raiz)
}

console.log(calcularDistancia(4,10,2,8)) */ 

// Función corta

/*function calcularDistancia(x1,x2,y1,y2){

    let result = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
    
    return result

}

console.log(calcularDistancia(4,10,2,8))*/



// Función flecha

/*let calcularDistancia=(x1,x2,y1,y2) => Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

let distancia = calcularDistancia(4,10,2,8)

console.log(`La distancia entre los planetas es ${Math.round(distancia)}`)
console.log(`La distancia entre los planetas es ${distancia.toFixed(2)}`)*/





