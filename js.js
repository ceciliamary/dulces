/*const productos1 = [
id: 1, 
]


class Producto {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];

productos.push(new Producto (1, "camisa", 1500));
productos.push(new Producto (2, "pantalon", 3500));
productos.push(new Producto (3, "gorra", 1800));
productos.push(new Producto (4, "zapato", 1650));

console.log(productos);


const productos = [
    {id: 1, nombre: "camisa", categoria: "ropa", precio: 1000},
    {id: 2, nombre: "televisor", categoria: "tecnologia", precio: 700},
    {id: 3, nombre: "computadora", categoria: "tecnologia", precio: 645},
    {id: 4, nombre: "zapato", categoria: "ropa", precio: 555},
    {id: 5, nombre: "gorra", categoria: "ropa", precio: 100},
    {id: 6, nombre: "monitor", categoria: "tecnologia", precio: 125},
]

let categoria = prompt("selecciona la categoria a buscar");
let productosFiltrados = productos.filter((producto) => producto.categoria === categoria
);
productosFiltrados.forEach(producto =>{
    let mensaje = `Id: ${producto.id}
    Nombre: ${producto.nombre}
    Categoria:${producto.categoria}
    Precio: $${producto.precio}`;
;
alert(mensaje);
});
*/
const productos = [
    {id: 1, nombre: "Dulce de Frambuesas", categoria: "dulces", precio: 1500},
    {id: 2, nombre: "Dulce de Frutillas", categoria: "dulces", precio: 1200},
    {id: 3, nombre: "Dulce de Rosa Mosqueta", categoria: "dulces", precio: 1645},
    {id: 4, nombre: "Miel", categoria: "miel", precio: 2500},
    {id: 5, nombre: "Pepinillos al natural", categoria: "conservas", precio: 1100},
    {id: 6, nombre: "Morrones agridulces", categoria: "conservas", precio: 2200},
    {id: 7, nombre: "berenjenas al escaveche", categoria: "conservas", precio: 1800}
]
let categoria = prompt("Ingrese la categoria a consultar");
let precio = Number(prompt("Ingrese el valor minimo"));

/*si quiero agregar otro filtro mas 
let letra = prompt("Ingrese una letra que contenga el producto a consultar");
*/
let productosFiltrados = productos.filter ((producto) => producto.categoria === categoria && producto.precio > precio);
/* si quiero agregar un filtro mas por letra: && producto.nombre.includes(letra));*/
let mensaje = "";
productosFiltrados.forEach ((producto) =>{
    mensaje += `
    Id: ${producto.id}
    Nombre: ${producto.nombre}
    Categoria:${producto.categoria}
    Precio: $${producto.precio}`;
 });
alert(mensaje);
