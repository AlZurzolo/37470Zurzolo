const ACTIVIDADES = [
    {id: "1", titulo: "Formación en terapia transgeneracional", valor: 15000},
    {id: "2", titulo: "Curso de Protección energética", valor: 3000},
    {id: "3", titulo: "Retiro virtual Sanando el Alma", valor: 6000},
    {id: "4", titulo: "Taller de Transformación personal", valor: 3000},
    {id: "5", titulo: "Taller Sanación de 7 días", valor: 1000},
];

const CARRITO = [];

function monstrarMenu(){
    let listaOpciones = ACTIVIDADES.map((opciones) => `Código: ${opciones.id} - ${opciones.titulo} - Precio: $${opciones.valor}`);
    alert(`Lista de opciones:\n\n${listaOpciones.join("\n")}`);
    return listaOpciones;
}

window.addEventListener("DOMContentLoader", monstrarCarrito);

function monstrarCarrito(){
    let listaCarrito = CARRITO.map((opciones) => `Código: ${opciones.opcion} - Cantidad: ${opciones.unidades} - Precio Uni.: $${opciones.precio} - SubTotal: $${opciones.total}`);
    let totalCarrito = CARRITO.reduce((acc, el) => acc + el.total, 0)
    //alert(`Carrito de compras:\n\n${listaCarrito.join("\n")}\n\nTotal de la compra: $${totalCarrito}`);

    //return listaCarrito;
    const ol = document.querySelector("#carrito");

    for (const carro of CARRITO) {
        const li = document.createElement("li");
        ol.append(li);

        const texto = document.createTextNode(`Código: ${carro.opcion} - Cantidad: ${carro.unidades} - Precio Uni.: $${carro.precio} - SubTotal: $${carro.total}`);
        li.append(texto);
    }

        let nuevoParrafo = document.createElement("p");
        let textParrafo = document.createTextNode("Total de la compra: $"+ totalCarrito);
        let datoNuevo = document.getElementById("dato");
        datoNuevo.append(nuevoParrafo);
        nuevoParrafo.append(textParrafo);
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
    let valorACTIVIDADES = ACTIVIDADES.find(identificador => identificador.id == opcion);

    if(opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5"){
        switch(opcion){
            case "1":
                precio = valorACTIVIDADES.valor;
                break;

            case "2":
                precio = valorACTIVIDADES.valor;
                break;

            case "3":
                precio = valorACTIVIDADES.valor;
                break;

            case "4":
                precio = valorACTIVIDADES.valor;
                break;

            case "5":
                precio = valorACTIVIDADES.valor;
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

        // let nuevoParrafo = document.createElement("p");
        // let textParrafo = document.createTextNode("MUCHAS GRACIAS POR SU COMPRA");
        // let datoNuevo = document.getElementById("dato");
        // datoNuevo.appendChild(nuevoParrafo);
        // nuevoParrafo.appendChild(textParrafo);
        break;
    }
}