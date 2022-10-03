import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";

var pizza1 = new Producto("Tomate, albahaca y mozzarella", "Receta deliciosa de la casa, probala!!!", 1200, "0001");
var pizza2 = new Producto("Caprese", "Después de probarla, vas a querer pedir otra", 1300, "0002");
var pizza3 = new Producto("Jamón y morrón", "Probala, es increibleeee!!!!", 1400, "0003");
var bebida1 = new Producto("Variedad de cervezas", "Rubia, Stout, IPA, Bock, Amber Lager", 400, "0004");
var bebida2 = new Producto("Fernét Cordobés", "Branca, 1882, Vittone, Cinzano, Lusera", 600, "0005");
var bebida3 = new Producto("Gaseosas y aguas saborizadas", "Línea Coca, línea Pepsi, Aquarius, Villa Vicencio", 250, "0006")
var postre1 = new Producto("Helado de chocolate", "Amplia variedad en sabores para que puedas elegir", 500, "0007");
var postre2 = new Producto("Flan", "Un clásico de los postres que nunca puede faltar", 400, "0008");
var postre3 = new Producto("Brownies", "Para los amantes del chocolate", 450, "0009");

var productos = [pizza1, pizza2, pizza3, bebida1, bebida2, bebida3, postre1, postre2, postre3];
var carrito = new Carrito();

var contenedorProducto = document.querySelectorAll(".producto__contenido");

for (let i = 0; i < productos.length; i++){
    
    var producto = `
    <h4 class="producto__titulo">${productos[i].nombre}</h4>
    <p class="producto__descripcion">${productos[i].descripcion}</p>
    <div class="producto__comprar">
        <button class="producto__boton" id="${productos[i].id}">Quiero una</button>
        <p class="producto__precio">$${productos[i].precio} c/u</p>
    </div>
    `;
    contenedorProducto[i].innerHTML = producto;  
}




//------------------------------------------------------------------


const botones = document.querySelectorAll(".producto__boton");

botones.forEach(function(elemento){
    elemento.addEventListener("click", function(event){
        console.log("hice click en", event.target.id);
    });
});
