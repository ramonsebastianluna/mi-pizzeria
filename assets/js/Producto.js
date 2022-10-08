export class Producto {
    nombre = null;
    descripcion = null;
    precio = null;
    id = null;
    img = null;

    constructor(nombre, descripcion, precio, id, img){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.id = id;
        this.img = img;
    }
}