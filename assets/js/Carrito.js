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
            total += this.productos[i]["precio"] * this.productos[i]["cant"];
        }
        return total;
    }

    totalDeProductosEnCarrito(){
        var carritoLength = 0;
        for(let i=0; i < this.productos.length; i++){
            carritoLength += this.productos[i]["cant"];
        }
        return carritoLength;
    }

    eliminarDelCarrito(idElemento){
        let indiceAEliminar;
        this.productos.forEach(function(elemento, index){
            if (elemento.id.includes(idElemento)){
                indiceAEliminar = index;
            }
        });

        this.productos.splice(indiceAEliminar, 1);    
    }
}