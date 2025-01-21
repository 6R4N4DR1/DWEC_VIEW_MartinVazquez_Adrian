import Asignaturas from './Asignaturas.js';

class ListaAsignaturas {
    #asignaturas;

    constructor() {
        this.#asignaturas = [];
    }

    // Agregar una asignatura a la lista
    agregarAsignatura(asignatura) {
        if (asignatura instanceof Asignatura) {
            this.#asignaturas.push(asignatura);
        } else {
            throw new Error("Solo puedes agregar asignaturas");
        }
    }

    // Eliminar una asignatura de la lista
    eliminarAsignatura(asignatura) {
        if (asignatura instanceof Asignatura) {
            const indiceAsign = this.#asignaturas.indexOf(asignatura);
            if (indiceAsign !== -1) {
                this.#asignaturas.splice(indiceAsig, 1);
            } else {
                throw new Error("Asignatura no encontrada");
            }
        } else {
            throw new Error("Solo puedes eliminar asignaturas");
        }
    }

    // Obtener una asignatura por nombre
    obtenerAsignatura(nombre) {
        return this.#asignaturas.find(asignatura => asignatura.nombre === nombre);
    }

    // Mostrar todas las asignaturas
    mostrarAsignaturas() {
        console.log("Lista de asignaturas:");
        this.#asignaturas.forEach(asignatura => {
            console.log(asignatura.nombre);
        });
    }
}

export default ListaAsignaturas;