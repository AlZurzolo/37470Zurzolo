let carrito = new Carrito();
let carrito_view = new Carrito_View();

function $(selector){
    return document.querySelector(selector);
}

// async function obtenerJson() {
//     try{
//         const response = await fetch("./assets/js/jsonTest.json");
//         let data = await response.json();
//         this.catalogo = data;
//         console.log(catalogo)
//     } catch (error) {
//         console.log(error);
//     }
// }
// obtenerJson();

function Carrito(){
    // async function obtenerJson() {
    //     try{
    //         const response = await fetch("./assets/js/jsonTest.json");
    //         let data = await response.json();
    //         this.catalogo = data;
    //         console.log(catalogo)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // obtenerJson();
    //this.catalogo = [
                    //{id:'P01',nombre:'Formación en Transgeneracional',precio:15000,imagen:'transgeneracional.png'},
                    //{id:'P02',nombre:'Protección Energética',precio:3000,imagen:'proteccion_energetica.jpg'},
                    //{id:'P03',nombre:'Retiro "Sanando el Alma"',precio:6000,imagen:'retiro_virtual.png'},
                    //{id:'P04',nombre:'Transformación Personal',precio:6000,imagen:'transformacionPersonal.jpg'},
                    //{id:'P05',nombre:'Taller 7 Días de Sanación',precio:1000,imagen:'sanacion7dias.png'},
                    //];
    
                    
    this.constructor = function(){
        if(!localStorage.getItem("carrito")){
            localStorage.setItem("carrito",'[]');
        }
    }
    this.getCarrito = JSON.parse(localStorage.getItem("carrito"));
    // Agrega producto
    this.agregarItem = function(item){
        // Se chequea si el producto existe en el catálogo
        let registro = 0;
        for(let i of this.catalogo){
            if(i.id === item){
                    registro = i
            }
        }
        // Si no hay producto, corta la ejecución
        if(!registro){
            return;
        }
        // Busca si el item está o no en el carrito   
        for (let i of this.getCarrito){
            if(i.id === item){
                // De estar, lo suma a cantidad
                i.cantidad++; // Optimización
                //console.log(this.getCarrito);
                localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
                return;
            }
        }
        // Si no esta repetido agrega la cantidad = 1
        registro.cantidad = 1;
        
        this.getCarrito.push(registro);
        console.log(this.getCarrito);
        localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
    }
    // Suma todos los productos del carrito
    this.getTotal = function(){
        let total = 0;
        for (let i of this.getCarrito) {
            total += parseFloat(i.cantidad) * parseFloat(i.precio);
        }
        return total;
    }
    // Eliminar producto del carrito
    this.eliminarItem = function(item){
        for (let i in this.getCarrito) {
            if(this.getCarrito[i].id === item){
                    this.getCarrito.splice(i,1);

                    Toastify({
                        text: 'Producto borrado',
                        duration: 3000,
                        position: 'center',
                        style: {
                            background: 'red',
                        }
                    }).showToast();
            }
        }
        localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
    }
}
// Se pintan los productos en pantalla
function Carrito_View(){    
    this.renderCatalogo = function(){
        let template = ``;
        for (let i in carrito.catalogo) {
            template += `
            <div class="column is-one-quarter">
            <div class="card">
                <div class="card-image">
                    <img src="./assets/img/${carrito.catalogo[i].imagen}" alt="Placeholder">
                </div>
                <div class="card-content">
                    <h2 class="title is-4">${carrito.catalogo[i].nombre}</h2>
                    <br>
                    <h3 class="subtitle is-5">Precio:<strong>$${carrito.catalogo[i].precio}</strong></h3>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-footer-item" id="addItem" data-producto="${carrito.catalogo[i].id}">Agregar al Carrito</a>
                </div>
                </div>
            </div>
            `;
        }

        $("#catalogo").innerHTML = template;
    }

    this.showModal = function(){
        $("#modal").classList.toggle('is-active');
        this.renderCarrito();
    }

    this.hideModal = function(ev){
        if (ev.target.classList.contains("toggle")) {
            this.showModal();
        }
    }
    // Pinta productos del carrito
    this.renderCarrito = function(){
        // Compara si el carrito está vacío, nos imprime un texto
        if(carrito.getCarrito.length <= 0){
            let template = `<div class="is-12"><p class="title is-2 has-text-centered">No hay productos en el carrito</p></div><br>`;
            $("#productosCarrito").innerHTML = template;
        }else{
            $("#productosCarrito").innerHTML = ""; // Borra el texto que no hay productos
            let template = ``
            for(let i of carrito.getCarrito){
                template += `
                <div class="columns">
                <div class="column is-3">
                <figure>
                <img src="./assets/img/${i.imagen}" alt="">
                </figure>
                </div>
                <div class="column is-3">${i.nombre}</div>
                <div class="column is-2 has-text-centered">$${i.precio}</div>
                <div class="column is-1 has-text-centered">${i.cantidad}</div>
                <div class="column is-2 has-text-centered"><strong><i>$${i.cantidad * i.precio}</i></strong></div>
                <div class="column is-1"><p class="field"><a href="#" class="button is-danger"><span class="icon"><i class="fa fa-trash-o" id="deleteProducto" data-producto="${i.id}"></i></span></a></p></div>
                </div>
                `;
            }
            // Lo pinta en el modal
            $("#productosCarrito").innerHTML = template;
        }
        // Se invoca función del total
        $("#totalCarrito > strong").innerHTML = "$"+carrito.getTotal();
    }
    // Muestra la cantidad de productos dentro del carrito
    this.totalProductos = function(){
        let total = carrito.getCarrito.length;
        //console.log(total);
        //Lo pinta en el rectángulo del carrito en el html
        $("#totalProductos > strong").innerHTML = total
    }
}
// Invocaciones                                
document.addEventListener('DOMContentLoaded',function(){
    carrito.constructor();
    carrito_view.renderCatalogo();
    carrito_view.totalProductos();
});
                
$("#btn_carrito").addEventListener("click",function(){
    carrito_view.showModal();
});
                
$("#modal").addEventListener("click",function(ev){
    carrito_view.hideModal(ev);
});
// Obtiene el click de agregar al carrito del producto                
$("#catalogo").addEventListener("click",function(ev){
    ev.preventDefault();
    if(ev.target.id === "addItem"){
        let id = ev.target.dataset.producto; // Se obtiene el id del producto
        carrito.agregarItem(id);
    }
    
    Toastify({
        text: 'Producto agregado',
        duration: 3000,
        position: 'center',
        style: {
            background: 'green'
        }
    }).showToast();
   
    carrito_view.showModal();
    carrito_view.totalProductos(); 
});
// Delegación de eventos              
$("#productosCarrito").addEventListener("click",function(ev){
    ev.preventDefault();
    if(ev.target.id === "deleteProducto"){
        carrito.eliminarItem(ev.target.dataset.producto);
        carrito_view.renderCarrito();
        carrito_view.totalProductos();
    }
});

function main() {
    Carrito();
    Carrito_View();
}

main();