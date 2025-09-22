// Lista de encuestados (simula una tabla)
let encuestados = [];

// Estructura de un encuestado:
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

// CRUD Encuestado
function crearEncuestado(encuestado) {
    encuestado.id = Date.now();
    encuestado.yaFirmo = false;
    encuestados.push(encuestado);
}

function leerEncuestados() {
    return encuestados;
}

function actualizarEncuestado(id, nuevosDatos) {
    const idx = encuestados.findIndex(e => e.id === id);
    if (idx !== -1) {
        encuestados[idx] = { ...encuestados[idx], ...nuevosDatos };
    }
}

function eliminarEncuestado(id) {
    encuestados = encuestados.filter(e => e.id !== id);
}

// Buscar por cédula o nombre
function buscarEncuestado({ cedula, nombre }) {
    return encuestados.filter(e =>
        (cedula && e.cedula === cedula) ||
        (nombre && e.nombre.toLowerCase().includes(nombre.toLowerCase()))
    );
}

// Estadísticas
function contarFirmadosEncuestados() {
    return encuestados.filter(e => e.yaFirmo).length;
}

// Exportar funciones si se usa en módulos
// export { crearEncuestado, leerEncuestados, actualizarEncuestado, eliminarEncuestado, buscarEncuestado, contarFirmadosEncuestados };
