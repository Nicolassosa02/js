class Servicio {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerSubtotal() {
        return this.precio * this.cantidad;
    }
}

// Guardar servicios en localStorage
function guardarEnLS() {
    const serviciosJSON = JSON.stringify(servicios);
    localStorage.setItem("servicios", serviciosJSON);
}

// Transformar los datos de localStorage a objetos de tipo Servicio
function transformarServiciosLocalStorage(serviciosJSON) {
    if (serviciosJSON === null) {
        return [];
    }

    const serviciosLiteral = JSON.parse(serviciosJSON);
    return serviciosLiteral.map(
        (servicio) =>
            new Servicio(servicio.nombre, servicio.precio, servicio.cantidad)
    );
}

// Variables globales
let servicios = transformarServiciosLocalStorage(localStorage.getItem("servicios"));

// Si no hay servicios en localStorage, inicializar con un valor predeterminado
if (servicios.length === 0) {
    servicios = [new Servicio("Página web", 2900, 1)];
    guardarEnLS(); // Guardar el servicio inicial en localStorage
}

// Referencias del DOM
const tablaServicios = document.getElementById("tablaServicios").querySelector("tbody");
const btnCrearServicio = document.getElementById("btnCrearServicio");
const btnMostrarTotal = document.getElementById("btnMostrarTotal");
const btnModificarServicio = document.getElementById("btnModificarServicio");

// Actualizar la tabla de servicios
function actualizarTabla() {
    tablaServicios.innerHTML = ""; // Limpiar la tabla
    servicios.forEach((servicio, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${servicio.nombre}</td>
            <td>${servicio.precio}</td>
            <td>${servicio.cantidad}</td>
            <td>${servicio.obtenerSubtotal()}</td>
            <td>
                <button class="btnEliminar" data-index="${index}">Eliminar</button>
            </td>
        `;
        tablaServicios.appendChild(fila);
    });

    // Añadir eventos a los botones de eliminar
    const botonesEliminar = document.querySelectorAll(".btnEliminar");
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", eliminarServicio);
    });
}

// Eliminar un servicio
function eliminarServicio(event) {
    const index = event.target.dataset.index; // Obtener el índice del servicio
    servicios.splice(index, 1); // Eliminar el servicio del array
    guardarEnLS(); // Actualizar localStorage
    actualizarTabla(); // Actualizar la tabla
}

// Crear un nuevo servicio
btnCrearServicio.addEventListener("click", () => {
    const nombre = prompt("Ingrese el nombre del servicio:");
    const precio = parseInt(prompt("Ingrese el precio del servicio:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad:"));

    if (!nombre || isNaN(precio) || isNaN(cantidad)) {
        alert("Datos inválidos");
        return;
    }

    const servicio = new Servicio(nombre, precio, cantidad);
    servicios.push(servicio);
    guardarEnLS();
    actualizarTabla();
    alert("Servicio agregado exitosamente");
});

// Mostrar el total de los servicios
btnMostrarTotal.addEventListener("click", () => {
    const total = servicios.reduce((acc, el) => acc + el.obtenerSubtotal(), 0);
    alert(`El total de los servicios contratados es $${total}`);
});

// Modificar un servicio existente
btnModificarServicio.addEventListener("click", () => {
    const nombre = prompt("Ingrese el nombre del servicio a modificar:");
    const servicio = servicios.find((el) => el.nombre.toLowerCase() === nombre.toLowerCase());

    if (servicio) {
        const nuevoPrecio = parseInt(prompt("Ingrese el nuevo precio:"));
        const nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad:"));

        if (isNaN(nuevoPrecio) || isNaN(nuevaCantidad)) {
            alert("Datos inválidos");
            return;
        }

        servicio.precio = nuevoPrecio;
        servicio.cantidad = nuevaCantidad;
        guardarEnLS();
        actualizarTabla();
        alert("Servicio modificado exitosamente");
    } else {
        alert("Servicio no encontrado");
    }
});

// Referencias de los botones de contratar
const btnContratarSitioWeb = document.querySelectorAll(".contratar")[0];
const btnContratarTiendaOnline = document.querySelectorAll(".contratar")[1];

// Evento para el botón "Contratar" de "Sitio web"
btnContratarSitioWeb.addEventListener("click", () => {
    const servicio = new Servicio("Sitio web", 2900, 1);
    servicios.push(servicio);
    guardarEnLS(); // Guardar el servicio agregado en localStorage
    actualizarTabla(); // Actualizar la tabla
    alert("Servicio 'Sitio web' agregado exitosamente");
});

// Evento para el botón "Contratar" de "Tienda Online"
btnContratarTiendaOnline.addEventListener("click", () => {
    const servicio = new Servicio("Tienda Online", 4500, 1);
    servicios.push(servicio);
    guardarEnLS(); // Guardar el servicio agregado en localStorage
    actualizarTabla(); // Actualizar la tabla
    alert("Servicio 'Tienda Online' agregado exitosamente");
});
// Inicializar la tabla al cargar la página
actualizarTabla();
