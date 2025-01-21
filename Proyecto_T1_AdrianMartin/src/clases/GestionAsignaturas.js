import Estudiantes from './Estudiantes.js';
import Asignaturas from './Asignaturas.js';

class GestionAsignaturas {
    static matricularEstudianteEnAsignaturas(estudiante, ...asignaturas) {
        // Verificar que el estudiante exista
        if (!(estudiante instanceof Estudiantes)) {
            throw new Error("Estudiante no válido.");
        }

        // Verificar si las asignaturas existen y matricular
        asignaturas.forEach(asignatura => {
            if (!(asignatura instanceof Asignaturas)) {
                throw new Error("Asignatura no válida.");
            }
            if (!estudiante.mostrarAsignaturas().includes(asignatura)) {
                estudiante.matricular(asignatura); // Matriculamos al estudiante si no está matriculado
            } else {
                throw new Error(`${estudiante.nombre} ya está matriculado en ${asignatura.nombre}`);
            }
        });
    }

    static desmatricularEstudianteDeAsignaturas(estudiante, ...asignaturas) {
        // Verificar que el estudiante exista
        if (!(estudiante instanceof Estudiantes)) {
            throw new Error("Estudiante no válido.");
        }

        // Verificar si las asignaturas existen y desmatricular
        asignaturas.forEach(asignatura => {
            if (!(asignatura instanceof Asignaturas)) {
                throw new Error("Asignatura no válida.");
            }
            if (estudiante.mostrarAsignaturas().includes(asignatura)) {
                estudiante.desmatricular(asignatura); // Desmatriculamos al estudiante
            } else {
                throw new Error(`${estudiante.nombre} no está matriculado en ${asignatura.nombre}`);
            }
        });
    }

    static agregarCalificacionAEstudiante(estudiante, asignatura, nota) {
        // Validar si el estudiante y la asignatura existen
        if (!(estudiante instanceof Estudiantes)) {
            throw new Error("Estudiante no válido.");
        }

        if (!(asignatura instanceof Asignaturas)) {
            throw new Error("Asignatura no válida.");
        }

        // Verificar si el estudiante está matriculado en la asignatura
        if (!estudiante.mostrarAsignaturas().includes(asignatura)) {
            throw new Error(`${estudiante.nombre} no está matriculado en ${asignatura.nombre}`);
        }

        // Validar la calificación entreo 0 y 10
        if (nota < 0 || nota > 10) {
            throw new Error("La calificación debe estar entre 0 y 10.");
        }

        asignatura.agregarCalificacion(estudiante, nota); //Ejecutar funcion de la clase Asignaturas
    }

    static mostrarPromedioEstudiante(estudiante) {
        // Validar si el estudiante existe
        if (!(estudiante instanceof Estudiantes)) {
            throw new Error("Estudiante no válido.");
        }

        console.log(`Promedio de notas de ${estudiante.nombre}: ${estudiante.promedioIndividual()}`);
    }

    static mostrarPromedioAsignatura(asignatura) {
        // Validar si la asignatura existe
        if (!(asignatura instanceof Asignaturas)) {
            throw new Error("Asignatura no válida.");
        }

        console.log(`Promedio de notas en ${asignatura.nombre}: ${asignatura.calcularPromedio()}`);
    }

    static mostrarAsignaturasDeEstudiante(estudiante) {
        // Validar si el estudiante existe
        if (!(estudiante instanceof Estudiantes)) {
            throw new Error("Estudiante no válido.");   
        }

        console.log(`${estudiante.nombre} está matriculado en las siguientes asignaturas:`);
        estudiante.mostrarAsignaturas().forEach(asignatura => {
            console.log(asignatura.nombre);
        });
    }
}

export default GestionAsignaturas;