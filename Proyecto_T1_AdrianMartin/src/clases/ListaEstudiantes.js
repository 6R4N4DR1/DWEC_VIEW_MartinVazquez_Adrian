import Estudiantes from "./Estudiantes.js";

class ListaEstudiantes{
    #estudiantes;
    constructor(){
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante){
        if (estudiante instanceof Estudiantes) {
            if (!this.#estudiantes.some(est => est.toString() === estudiante.toString() || est.id === estudiante.id)) {
                this.#estudiantes.push(estudiante);
            }
        } else {
            throw new Error("Esta lista es solo de estudiantes no se puede agregar otro tipo de persona");
        }
    }

    eliminarEstudiante(id) {
        const indiceEst = this.#estudiantes.findIndex(est => est.id === id);
        if (indiceEst !== -1) {
            this.#estudiantes.splice(indiceEst, 1); // Elimina directamente al estudiante del array
        } else {
            throw new Error("No se encontró al estudiante con ID: ${id}");
        }
    }

    buscarEstudiante(nombre) {
        return this.#estudiantes.filter(est => est.nombre.includes(nombre));
    }

    mostrarLista() {
        this.#estudiantes.forEach(est => console.log(est.toString()));
    }
}

export default ListaEstudiantes;