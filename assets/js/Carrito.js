export class Carrito {
    productos = [];

    agregarAlCarrito(producto){
        if (!this.productos.includes(producto)){
            this.productos.push(producto);
            this.productos[this.productos.indexOf(producto)].cant = 1;
        } else {
            this.productos[this.productos.indexOf(producto)].cant += 1;
        }        
    }

    totalAPagar(){
        var total = 0;
        for(let i=0; i < this.productos.length; i++){
            total += this.productos[i]["precio"];
        }
        return total;
    }
}