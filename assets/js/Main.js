import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";

function crearProductos(){
    var pizza1 = new Producto(
        "Tomate, albahaca y mozzarella",
        "Receta deliciosa de la casa, probala!!!",
        1200,
        "0001",
        "./assets/img/variedades/pizza-con-tomate-albahaca-y-mozzarella.jpg"
    );
    
    var pizza2 = new Producto(
        "Caprese",
        "Después de probarla, vas a querer pedir otra",
        1300,
        "0002",
        "./assets/img/variedades/pizza-napolitana.jpg"
    );
    
    var pizza3 = new Producto(
        "Jamón y morrón",
        "Probala, es increibleeee!!!!",
        1400,
        "0003",
        "./assets/img/variedades/pizza-especial-de-jamon.jpg"
    );
    
    var bebida1 = new Producto(
        "Variedad de cervezas",
        "Rubia, Stout, IPA, Bock, Amber Lager",
        400,
        "0004",
        "./assets/img/bebidas/tipos-de-cerveza.jpg"
    );
    
    var bebida2 = new Producto(
        "Fernét Cordobés",
        "Branca, 1882, Vittone, Cinzano, Lusera",
        600,
        "0005",
        "./assets/img/bebidas/tragos-con-fernet.jpg"
    );
    
    var bebida3 = new Producto(
        "Gaseosas y aguas saborizadas",
        "Línea Coca, línea Pepsi, Aquarius, Villa Vicencio",
        250,
        "0006",
        "./assets/img/bebidas/coca-con-hielo.jpg"
    );
    
    var postre1 = new Producto(
        "Helado de chocolate",
        "Amplia variedad en sabores para que puedas elegir",
        500,
        "0007",
        "./assets/img/postres/helado-de-chocolate.jpg"
    );
    
    var postre2 = new Producto(
        "Flan",
        "Un clásico de los postres que nunca puede faltar",
        400,
        "0008",
        "./assets/img/postres/flan-casero.jpg"
    );
    
    var postre3 = new Producto(
        "Brownies",
        "Para los amantes del chocolate",
        450,
        "0009",
        "./assets/img/postres/brownie-de-chocolate.jpg"
    );

    const productos = [pizza1, pizza2, pizza3, bebida1, bebida2, bebida3, postre1, postre2, postre3];
    return productos;
}

const agregarProductosAlDOM = (productos) => {
    var contenedorProducto = document.querySelectorAll(".producto__contenido");
    var contenedorImagen = document.querySelectorAll(".producto__imagen");

    for (let i = 0; i < productos.length; i++){

        var imagenDelProducto = `
        <img class="producto__imagen" src="${productos[i].img}" alt="${productos[i].descripcion}"/>
        `;

        var producto = `
        <h4 class="producto__titulo">${productos[i].nombre}</h4>
        <p class="producto__descripcion">${productos[i].descripcion}</p>
        <div class="producto__comprar">
            <button class="producto__boton" id="${productos[i].id}">Quiero una</button>
            <p class="producto__precio">$${productos[i].precio} c/u</p>
        </div>
        `;

        contenedorImagen[i].innerHTML = imagenDelProducto;
        contenedorProducto[i].innerHTML = producto;
    }
};


const productos = crearProductos();
agregarProductosAlDOM(productos);
var carrito = new Carrito();



const botones = document.querySelectorAll(".producto__boton");

botones.forEach(function(elemento, index){
    elemento.addEventListener("click", function(){
        carrito.agregarAlCarrito(productos[index]);

        const modal = document.querySelector(".modal__carrito");
        const carritoContenido = document.createElement("div");
        const totalCarritoContenedor = document.querySelector(".carrito__total__parrafo");
        const contadorCarrito = document.querySelector(".abrir-modal");

        carritoContenido.classList.add("carrito__contenido");
        let indiceArray = carrito.productos.length;

        const item = `
        <div class="carrito__item">
            <div class="carrito__item__prod">   
                <div class="item__prod__img">
                    <img class="item__prod__img" src="${carrito.productos[indiceArray-1]["img"]}" alt="${carrito.productos[indiceArray-1]["img"]}"/>
                </div>
                <div class="item__prod__descripción">
                    <p class="item__prod__titulo">${carrito.productos[indiceArray-1]["nombre"]}</p>
                    <button class="item__prod__button">Eliminar</button>
                </div>
            </div>
            <div class="carrito__item__cant">
                <input type="number" value="1" min="1" max="10">
            </div>
            <div class="carrito__item__precio">$${carrito.productos[indiceArray-1]["precio"]}</div>
        </div>
        `;

        carritoContenido.innerHTML = item;
        modal.insertBefore(carritoContenido, modal.children[indiceArray]);

        const total = `Total de la compra $${carrito.totalAPagar()}`;
        totalCarritoContenedor.innerHTML = total;

        const cantidadDeProductosDelCarrito = `${carrito.productos.length}<img src="./assets/img/carrito.svg" alt="carrito">`;
        contadorCarrito.innerHTML = cantidadDeProductosDelCarrito;
        
    });
});