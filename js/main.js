//objeto
class Servicio {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerSubtotal(){
        return this.precio * this.cantidad;
    }
}
//Funcion 
function opcionValida(opcion) {
    
    while (isNaN(opcion) || opcion < 0 || opcion > 6) {
        alert("Opción inválida");
        
        opcion = parseInt(prompt(opcionValida));
    }
    if (opcion === 0) {
        alert("Gracias por visitarnos");
        return false; 
    }
    return true; 
}
function caso1(){
    alert ("Haz llegado al lugar correcto")
}
function caso2(){
    alert ("Te Invito a que visites nuestro otro sitio web dedicado solamente a CM")
}
function caso3(){
    alert ("Espero que todo lo que leas te sea util para tu busqueda")
}
function obtenerNombredeServicioUnico() {
    let nombreDelServicio = prompt("Ingrese nombre de servicio");
    let servicioExiste = servicios.some((el) => {
        return el.nombre.toLowerCase() === nombreDelServicio.toLowerCase();
    });

    while (servicioExiste) {
        alert("¡SERVICIO YA EXISTE!");
        nombreDelServicio = prompt("Ingrese nombre de servicio nuevamente");
        servicioExiste = servicios.some((el) => {
            return el.nombre.toLowerCase() === nombreDelServicio.toLowerCase();
        });
    }

    return nombreDelServicio;
}
function crearServicio(){
    const nombreDelServicio = obtenerNombredeServicioUnico();

    const precioDelServicio = parseInt(prompt("Ingrese precio del Servicio"))

    const cantidad = parseInt(prompt("Ingrese cantidad de paginas web a crear"))

    const servicio = new Servicio (
        nombreDelServicio,
        precioDelServicio,
        cantidad,
    )

    servicios.push(servicio)

    alert("Servicio agregado exitosamente")
}
function mostrarTotal(){
    const total = servicios.reduce((acc, el) => acc + el.obtenerSubtotal(), 0);
    alert("El total del servicio es $" + total)
}
function modificarServicio() {
    const nombreServicio = prompt("Ingrese el nombre del servicio a modificar:");
    const servicioEncontrado = servicios.find((el) => el.nombre.toLowerCase() === nombreServicio.toLowerCase());

    if (servicioEncontrado) {
        const nuevoPrecio = parseFloat(prompt("Ingrese nuevo precio"));
        const nuevaCantidad = parseInt(prompt("Ingrese nueva cantidad"));

        servicioEncontrado.precio = nuevoPrecio;
        servicioEncontrado.cantidad = nuevaCantidad;

        alert("SERVICIO MODIFICADO");
    } else {
        alert("Servicio no encontrado");
    }
}
//Inicio del programa
const servicios = [
    new Servicio("Pagina web", 2900, 1)
]
alert ("Bienvenido a NETSOSA")
const opciones = ("¿Qué esta buscando? 1- Crear mi pagina web 2- Un Community Manager 3- Solo informarme 4-Contratar servicio 5- Total del servicio contratado 6-Modificar servicios 0- Salir")


let opcion =parseInt(prompt(opciones)) 


while (opcionValida(opcion)){

    switch(opcion){

        case 1:
            caso1();
            break;

        case 2:
            caso2();
            break;


        case 3:
            caso3();
            break;

        case 4:
            crearServicio();
            break;

        case 5:
            mostrarTotal();
            break;

        case 6:
            modificarServicio();
            break
    }

    opcion = parseInt(prompt(opciones)) 
}
