

function divisores(numero){
    divs = []
    for (let i = 1; i < numero; i++){
        if (numero % i == 0) {
            divs.push(i)
        }
    }
    console.log(divs)
    return divs
}

function esNumeroPerfecto(numero){
    perfecto = ""
    divisoresNumero = divisores(numero)
    sumaDivisores = 0
    divisoresNumero.forEach( (num, index) => {
        sumaDivisores += num
    })
    perfecto = sumaDivisores == numero ? "Felicidades, es un número perfecto" : "En mala hora, el número ingresado no es perfecto"
    return perfecto
}

divisores(6)
console.log(esNumeroPerfecto(6))