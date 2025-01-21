import Personas from "./Personas.js";
import Direccion from "./Direccion.js";

class Estudiantes extends Personas {
    #id;
    #direccion;
    #asignaturas;
    #fechas;
    static idsUsados = new Set();
    constructor(nombre, edad, direccion) {
        super(nombre, edad);
        this.#id = this.#generarID();

        if (direccion instanceof Direccion) {
            this.#direccion = direccion;
        } else {
            this.#direccion = null;
        }

        this.#asignaturas = [];
        this.#fechas = [];
    }

    get id() {
        return this.#id;
    }

    get direccion() {
        return this.#direccion;
    }

    #generarID() {
        let id;
        do {
            id = `Estudiante.${Math.floor(Math.random() * 10000)}`;
        } while (Estudiantes.idsUsados.has(id));
        Estudiantes.idsUsados.add(id);
        return id;
    }

    set direccion(direccion) {
        if (direccion instanceof Direccion) {
            this.#direccion = direccion;
        } else {
            this.#direccion = null;
        }
    }

    #registrarFecha(accion, asignatura) {
        const fechaActual = new Date();
        this.#fechas.push({ accion, asignatura, fecha: fechaActual });
    }

    matricular(asignatura) {
        // Validación: Comprobar que asignatura es una instancia de Asignaturas
        if (asignatura instanceof Asignaturas) {
            if (!this.#asignaturas.includes(asignatura)) {
                this.#asignaturas.push(asignatura);
                this.#registrarFecha("Matrícula", asignatura);
            } else {
                console.log("El estudiante ya está matriculado en esta asignatura.");
            }
        } else {
            throw new Error("La asignatura no es válida.");
        }
    }

    desmatricular(asignatura) {
        // Validación: Comprobar que asignatura es una instancia de Asignaturas
        if (asignatura instanceof Asignaturas) {
            const indiceAsignatura = this.#asignaturas.indexOf(asignatura);
            if (indiceAsignatura !== -1) {
                this.#asignaturas.splice(indiceAsignatura, 1);
                this.#registrarFecha("Desmatrículación", asignatura);
            } else {
                console.log("El estudiante no está matriculado en esta asignatura.");
            }
        } else {
            throw new Error("La asignatura no es válida.");
        }
    }

    // Método para mostrar las asignaturas en las que está matriculado el estudiante
    mostrarAsignaturas() {
        return this.#asignaturas; // Retorna la lista de asignaturas matriculadas
    }

    calificar(asignatura, nota, minNota = 0, maxNota = 10) {
        // Validar que la nota esté en el rango dinámico proporcionado
        if (nota < minNota || nota > maxNota) {
            throw new Error(`La nota debe estar entre ${minNota} y ${maxNota}.`);
        }

        // Validación de tipo de asignatura
        if (asignatura instanceof Asignaturas) {
            asignatura.agregarCalificacion(this, nota);
        } else {
            throw new Error("La asignatura no es válida.");
        }
    }

    promedioIndividual() {
        const calificaciones = this.#asignaturas.flatMap(asign => asign.obtenerNotasEstudiante(this));
        
        if (calificaciones.length === 0) {
            console.log("Advertencia: El estudiante no tiene calificaciones.");
            return 0;
        }
        
        const suma = calificaciones.reduce((acum, nota) => acum + nota, 0);
        return Math.round(suma / calificaciones.length);
    }

    mostrarFechas() {
        console.log(`Registros de ${this.nombre}:`);
        this.#fechas.forEach(registro => {
            console.log(
                `${registro.accion} en ${registro.asignatura} el día ${registro.fecha.toLocaleDateString("es-ES", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}`
            );
        });
    }

    toString() {
        return `${super.toString()}, ID: ${this.#id}, Dirección: ${this.direccion}`;
    }
}

export default Estudiantes;