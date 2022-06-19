let valor = "";
let cant = 0;
let cuota = 0;

function contado(precio, cantidad){
    cuota = 1;
    let descuento = .10;
    let resultado = cantidad*(precio-(precio*descuento));
    return resultado;
}

function cuotaTres(precio, cantidad){
    cuota = 3;
    let incremento = .121;
    let resultado = cantidad*(precio+(precio*incremento));
    return resultado;
}

function cuotaSeis(precio, cantidad){
    cuota = 6;
    let incremento = .2178;
    let resultado = cantidad*(precio+(precio*incremento));
    return resultado;
}

function cuotaNueve(precio, cantidad){
    cuota = 9;
    let incremento = .3388;
    let resultado = cantidad*(precio+(precio*incremento));
    return resultado;
}

function cuotaDoce(precio, cantidad){
    cuota = 12;
    let incremento = .3993;
    let resultado = cantidad*(precio+(precio*incremento));
    return resultado;
}

function mostrarResultado(resultado){
    alert(`El precio total final de ${cant} productos ${valor} es de: $${resultado}\nValor de cada cuota: ${resultado/cuota}`);
}

function monstrarMenu(){
    let opcion = prompt("Bienvenido \nCalcule el precio de uno o más productos al contado con descuento y en cuotas con interés.\nSeleccione una opción (ESC para salir) \n 1. Contado (con descuento) \n 2. En 3 pagos con interés \n 3. En 6 pagos con interés \n 4. En 9 pagos con interés \n 5. En 12 pagos con interés");
    return opcion
}

function calculo(){
    let opcionSeleccionada = monstrarMenu();

    while(opcionSeleccionada !== "ESC"){
        if(opcionSeleccionada !==""){
            let precio = parseFloat(prompt("Ingrese el precio"));
            let cantidad = parseFloat(prompt("Ingrese la cantidad a adquirir"));
                
            opcionSeleccionada = parseInt(opcionSeleccionada);

            switch(opcionSeleccionada){
                case 1:
                    cant = cantidad;
                    valor = "al contado";
                    let resultadoContado = contado(precio, cantidad);
                    mostrarResultado(resultadoContado);
                    break;

                case 2:
                    cant = cantidad;
                    valor = "en 3 cuotas"
                    let resultadoTres = cuotaTres(precio, cantidad);
                    mostrarResultado(resultadoTres);
                    break;

                case 3:
                    cant = cantidad;
                    valor = "en 6 cuotas"
                    let resultadoSeis = cuotaSeis(precio, cantidad);
                    mostrarResultado(resultadoSeis);
                    break;

                case 4:
                    cant = cantidad;
                    valor = "en 9 cuotas"
                    let resultadoNueve = cuotaNueve(precio, cantidad);
                    mostrarResultado(resultadoNueve);
                    break;
                
                case 5:
                    cant = cantidad;
                    valor = "en 12 cuotas"
                    let resultadoDoce = cuotaDoce(precio, cantidad);
                    mostrarResultado(resultadoDoce);
                    break;

                default:
                    alert("Opción Incorrecta");
                    break;
            }
        }else{
            alert("Seleccione la opción");
        }
        opcionSeleccionada = monstrarMenu();
    }
}

calculo();