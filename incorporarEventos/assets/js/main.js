class Producto {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio;
        }
        return total;
    }

}

/* FUNCIONES */

function renderCard(producto) {
    let cardRendered = `    
    <div class="col-12 col-md-4">
        <div class="card" style="width: 18rem;">
            <img src="./assets/img/${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.id}. ${producto.nombre}</h5>
                <h5 class="card-text">$${producto.precio}</h5>
                <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
            </div>
        </div>
    </div>
    `;
    return cardRendered;
}

function renderCardA(producto) {
    let cardRendered = `    
    <div class="col-md-4">
         <div class="card" style="width: 18rem;">
             <img src="./assets/img/${producto.imagen}"  width="100px">
                 <div class="card-body">
                 <h5 class="card-title">${producto.nombre}</h5>
                 <h5 class="card-text">$${producto.precio}</h5>
                 <!-- <button onclick="eliminarDelCarrito(${producto.id})" class="btn btn-danger">X</button> -->
             </div>
         </div>
     </div>
     `;

    return cardRendered;
}


function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
    divCarrito.innerHTML += renderCardA(producto);
    })
    divCarrito.innerHTML += `<h2>Precio Total: $${carrito.calcularTotal()}</h2>`
}

function renovarStorage() {
    localStorage.removeItem("carrito"); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* Cargar carrito existente */
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});


/* Generación de mi catálogo de productos */
let catalogoProductos = [];

let producto1 = new Producto(1, "Transgeneracional", "transgeneracional.png", 15000);
let producto2 = new Producto(2, "Protección Energética", "proteccion_energetica.jpg", 3000);
let producto3 = new Producto(3, "Retiro 'Sanando el Alma'", "retiro_virtual.png", 6000);
let producto4 = new Producto(4, "Transformación Personal", "transformacion-personal.png", 6000);
let producto5 = new Producto(5, "Sanación de 7 Días", "sanacion7dias.png", 1000);

/* Carga de productos al catálogo */
catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);
catalogoProductos.push(producto5);

/* Generar mis tarjetas de productos */
let cardsDiv = document.querySelector("#cards");
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
})

/* Ingresar al carrito un producto */
let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        limpiarCarrito();
        actualizarCarrito(carrito);
        renovarStorage();
    })
});