// Lista de trabajadores (simula una tabla)
let trabajadores = [];

// Estructura de un trabajador:
// {
//   id: number,
//   nombre: string,
//   apellido: string,
//   apellidos2: string,
//   cedula: string,
//   correo: string,
//   contrasena: string,
//   yaFirmo: boolean
// }

// CRUD Trabajador
function crearTrabajador(trabajador) {
    trabajador.id = Date.now();
    trabajador.yaFirmo = false;
    trabajadores.push(trabajador);
}

function leerTrabajadores() {
    return trabajadores;
}

function actualizarTrabajador(id, nuevosDatos) {
    const idx = trabajadores.findIndex(t => t.id === id);
    if (idx !== -1) {
        trabajadores[idx] = { ...trabajadores[idx], ...nuevosDatos };
    }
}

function eliminarTrabajador(id) {
    trabajadores = trabajadores.filter(t => t.id !== id);
}

// Buscar por cédula o nombre
function buscarTrabajador({ cedula, nombre }) {
    return trabajadores.filter(t =>
        (cedula && t.cedula === cedula) ||
        (nombre && t.nombre.toLowerCase().includes(nombre.toLowerCase()))
    );
}

// Estadísticas
function contarFirmados() {
    return trabajadores.filter(t => t.yaFirmo).length;
}

function firmadosPorTrabajador() {
    return trabajadores.map(t => ({ nombre: t.nombre, yaFirmo: t.yaFirmo }));
}

// Exportar funciones si se usa en módulos
// export { crearTrabajador, leerTrabajadores, actualizarTrabajador, eliminarTrabajador, buscarTrabajador, contarFirmados, firmadosPorTrabajador };
