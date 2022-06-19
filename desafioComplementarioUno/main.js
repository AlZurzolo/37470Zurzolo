let nombre = prompt("Ingresa tu nombre")
let apellido = prompt ("Ingresa tu apellido")

if(nombre!="" && apellido !=""){
    alert(`Hola ${nombre} ${apellido}`)
}else{
    alert("Los ingresos no fueron correctos")
}

alert("Número Pares o Impares")

let consulta = 0
let numero = 0

consulta = prompt("1 Para impares \n2 Para pares")

if (consulta==2){
    while(numero <=10){
        alert(`Numeros pares ${numero}`)
        numero +=2
    }
}else if (consulta==1){
    numero=1
    while(numero <=10){
        alert(`Numeros pares ${numero}`)
        numero +=2
    }
}else{
    alert("Ingreso error")
}










