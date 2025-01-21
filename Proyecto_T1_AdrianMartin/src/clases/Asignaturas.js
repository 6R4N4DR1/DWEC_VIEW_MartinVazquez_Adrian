class Asignaturas {
    #nombre;
    #calificaciones;

    constructor(nombre) {
        if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\sIVXLCDM]+$/.test(nombre)) {
            throw new Error("El nombre de la asignatura solo puede contener letras, números romanos, acentos, y espacios.");
        }
        this.#nombre = nombre;
        this.#calificaciones = [];
    }

    get nombre() {
        return this.#nombre;
    }

    agregarCalificacion(estudiante, nota) {
        // Optimización usando map en lugar de find y push
        let calificacion = this.#calificaciones.find(cal => cal.estudiante === estudiante);
        
        if (Number.isInteger(nota) && nota >= 0 && nota <= 10) {
            if (calificacion) {
                calificacion.notas.push(nota);
            } else {
                this.#calificaciones.push({ estudiante, notas: [nota] });
            }
        } else {
            throw new Error("La nota debe estar entre 0 y 10.");
        }
    }

    obtenerNotasEstudiante(estudiante) {
        const calificacion = this.#calificaciones.find(cal => cal.estudiante === estudiante);

        if (!calificacion) {
            throw new Error("No se encuentra ese estudiante o las notas de este");
        }else{
            return calificacion.notas
        }
    }

    calcularPromedio() {
        const sumaNotas = this.#calificaciones.reduce((acumulador, calificacion) => {
            // Sumar todas las notas de un estudiante
            const sumaNotasEstudiante = calificacion.notas.reduce((sum, nota) => sum + nota, 0);
            return acumulador + sumaNotasEstudiante;
        }, 0);
        const totalNotas = this.#calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion.notas.length, 0);

        if (totalNotas === 0) {
            return 0;
        } else {
            return Math.round(sumaNotas / totalNotas); // Promedio redondeado al numero entero mas cercano
        }
    }

    mostrarCalificaciones() {
        console.log(`Calificaciones de la asignatura ${this.#nombre}:`);
        this.#calificaciones.forEach(calificacion => {
            console.log(`Estudiante: ${calificacion.estudiante.nombre}, Notas: ${calificacion.notas.join(", ")}`);
        });
    }
}

export default Asignaturas;