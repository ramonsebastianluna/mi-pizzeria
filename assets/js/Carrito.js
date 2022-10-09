export class Carrito {
    productos = [];

    agregarAlCarrito(producto){
        this.productos.push(producto);


    }

    totalAPagar(){
        var total = 0;
        for(let i=0; i < this.productos.length; i++){
            total += this.productos[i]["precio"];
        }
        return total;
    }
}