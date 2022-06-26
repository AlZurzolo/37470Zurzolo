const ACTIVIDADES = [
    {codigo: "1", titulo: "Formación en terapia transgeneracional", valor: 15000},
    {codigo: "2", titulo: "Curso de Protección energética", valor: 3000},
    {codigo: "3", titulo: "Retiro virtual Sanando el Alma", valor: 6000},
    {codigo: "4", titulo: "Taller de Transformación personal", valor: 3000},
    {codigo: "5", titulo: "Taller Sanación de 7 días", valor: 1000},
];

const CARRITO = [];

function monstrarMenu(){
    let listaOpciones = ACTIVIDADES.map((opciones) => `Código: ${opciones.codigo} - ${opciones.titulo} - Precio: $${opciones.valor}`);
    alert(`Lista de opciones:\n\n${listaOpciones.join("\n")}`);
    return listaOpciones;
}

function monstrarCarrito(){
    let listaCarrito = CARRITO.map((opciones) => `Código: ${opciones.opcion} - Cantidad: ${opciones.unidades} - Precio unitario : $${opciones.precio} - Total: $${opciones.total}`);
    alert(`Carrito de compras:\n\n${listaCarrito.join("\n")}`);
    return listaCarrito;
}

let seleccion = prompt("¿Desea adquirir alguna actividad (si / no)?");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no");
    seleccion = prompt("¿Desea adquirir alguna actividad (si / no)?");
}

if(seleccion == "si"){
    monstrarMenu();
}else if (seleccion == "no"){
    alert("Muchas gracias");
}

while(seleccion !="no"){
    let opcion = prompt("Agrega producto al carrito");
    let precio = 0;

    if(opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5"){
        switch(opcion){
            case "1":
                precio = 15000;
                break;

            case "2":
                precio = 3000;
                break;

            case "3":
                precio = 6000;
                break;

            case "4":
                precio = 3000;
                break;

            case "5":
                precio = 1000;
                break;

            default:
                alert("Opción Incorrecta");
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades quiere?"));
    let total = precio * unidades;

    CARRITO.push({opcion, unidades, precio, total});
    console.log(CARRITO);
    }else{
        alert("No está esa opción");
    }

    seleccion = prompt("¿Desea agregar algo más al carrito (si/no)?");
    if(seleccion === "si"){
        monstrarMenu();
    }    

    while(seleccion === "no"){
        monstrarCarrito();
        alert("Muchas gracias");
        break;
    }
}