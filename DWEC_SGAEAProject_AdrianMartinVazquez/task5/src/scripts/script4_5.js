/**
 * SGAEA - Sistema de Gestión Académica de Estudiantes y Asignaturas
 * Adrián Martín Vázquez 2º DAW AULA
 * Github: https://github.com/6R4N4DR1/DWEC_SGAEAProject_AdrianMartinVazquez/
 */

// Cambios realizados en el código original:
/*
  Se han añadido try...catch en los métodos de las clases y en el main para capturar errores y mostrarlos por consola.
  Se han añadido throw new Error() en los métodos de las clases y en sus constructores para lanzar errores impredecibles o predecibles.
  Ahora se puede ver el mensaje de error en la consola.

  Se han pasado las clases a módulos JS y se han importado en el main.
  También se ha añadido un export default en cada clase para poder importarlas en el main.
*/

import Direccion from './models/Direccion.js';
import Estudiante from './models/Estudiante.js';
import Asignatura from './models/Asignatura.js';
import ListaEstudiantes from './models/ListaEstudiantes.js';
import ListaAsignaturas from './models/ListaAsignaturas.js';

/**
 * Main con la prueba de uso del código
 */

// Creación de instancias de la lista de estudiantes y asignaturas
const listaEstudiantes = new ListaEstudiantes();
const listaAsignaturas = new ListaAsignaturas();
let opcion;

/**
 * Inicialización de 5 estudiantes de prueba
 */
const estudiante1 = new Estudiante("Adrián Martín", 19, new Direccion("Calle Paraguay", 1, "Bajo", "18210", "Peligros", "Granada"));
const estudiante2 = new Estudiante("Sara Garzón", 19, new Direccion("Calle Alcalá la Real", 12, "3ºB", "18013", "Norte", "Granada"));
const estudiante3 = new Estudiante("Lorenzo Rodriguez", 21, new Direccion("Calle Francisco Ayala", 20, "2", "18014", "Granada", "Granada"));
const estudiante4 = new Estudiante("Alonso Hernández", 21, new Direccion("Calle Afán de Ribera", 15, "2ºA", "18005", "Granada", "Granada"));
const estudiante5 = new Estudiante("Alex Galán", 20, new Direccion("Calle Aliatar", 17, "Bajo", "18110", "Híjar", "Granada"));

/**
 * Agregar los estudiantes a la lista
 */
try {
    listaEstudiantes.agregarEstudiante(estudiante1);
    listaEstudiantes.agregarEstudiante(estudiante2);
    listaEstudiantes.agregarEstudiante(estudiante3);
    listaEstudiantes.agregarEstudiante(estudiante4);
    listaEstudiantes.agregarEstudiante(estudiante5);
} catch (error) {
    console.log(`Error al agregar un estudiante: ${error}`);
}

/**
 * Inicialización de 5 asignaturas de prueba
 */
const asignatura1 = new Asignatura("DWEC");
const asignatura2 = new Asignatura("DWES");
const asignatura3 = new Asignatura("Despliegue");
const asignatura4 = new Asignatura("DIW");
const asignatura5 = new Asignatura("Inglés");

/**
 * Agregar las asignaturas a la lista
 */
try {
    listaAsignaturas.agregarAsignatura(asignatura1);
    listaAsignaturas.agregarAsignatura(asignatura2);
    listaAsignaturas.agregarAsignatura(asignatura3);
    listaAsignaturas.agregarAsignatura(asignatura4);
    listaAsignaturas.agregarAsignatura(asignatura5);
} catch (error) {
    console.log(`Error al agregar una asignatura: ${error}`);
}

try {
    // Bucle principal del programa para mostrar el menú y ejecutar las opciones
    let salir = true;
    while(salir){
        // Mostrar el menú principal
        console.log("\n");
        console.log("Sistema de Gestión Académica de Estudiantes y Asignaturas por Adrián Martín Vázquez");
        console.log("1. Crear...");
        console.log("2. Eliminar...");
        console.log("3. Matricular estudiante");
        console.log("4. Desmatricular estudiante");
        console.log("5. Calificar estudiante");
        console.log("6. Buscar estudiante");
        console.log("7. Ver Registros");
        console.log("8. Promedios...");
        console.log("9. Ver Reporte");
        console.log("0. Vete ya de aquí");

        opcion = prompt("Selecciona una de estas opciones: ");

        switch(opcion){
            case '1': {
                console.clear();
                // Mostrar el menú de creaciones
                console.log("Sistema de Gestión Académica de Estudiantes y Asignaturas por Adrián Martín Vázquez");
                console.log("1. Crear estudiante");
                console.log("2. Crear asignatura");
                console.log("0. Salir");

                const optCrear = prompt("Selecciona una de estas opciones: ");
                switch(optCrear){
                    case '1': {
                        console.clear();
                        // Proceso para crear un nuevo estudiante
                        console.log("Creando nuevo estudiante...");
                        const nombreEst = prompt("Introduce el nombre del estudiante: ");
                        console.log(`Nombre: ${nombreEst}`);
                        const edad = prompt("Introduce la edad del estudiante: ");
                        console.log(`Edad: ${edad}`);
                        console.log("\nCreando dirección del estudiante nuevo...");
                        const calle = prompt("Introduce la calle: ");
                        console.log(`Calle: ${calle}`);
                        const numero = prompt("Introduce el número: ");
                        console.log(`Número: ${numero}`);
                        const piso = prompt("Introduce el piso: ");
                        console.log(`Piso: ${piso}`);
                        const codigoPostal = prompt("Introduce el código postal: ");
                        console.log(`Código postal: ${codigoPostal}`);
                        const provincia = prompt("Introduce la provincia: ");
                        console.log(`Provincia: ${provincia}`);
                        const localidad = prompt("Introduce la localidad: ");
                        console.log(`Localidad: ${localidad}`);

                        // Crear la dirección y el estudiante
                        const direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);
                        const estudiante = new Estudiante(nombreEst, edad, direccion);
                        
                        try{
                            console.log("Creación del estudiante completado sin errores");
                            console.log(estudiante.toString());
                            listaEstudiantes.agregarEstudiante(estudiante);  // Agregar el estudiante a la lista
                        }catch(err){
                            console.log("Error durante la creación del estudiante");
                            console.log(estudiante.toString());
                        }
                        break;
                    }

                    case '2': {
                        console.clear();
                        // Proceso para crear una nueva asignatura
                        console.log("Creando nueva asignatura...");
                        const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");
                        console.log(`Nombre asignatura: ${nombreAsignatura}`);

                        if(nombreAsignatura.trim() === ""){
                            console.log("Tiene que escribir un nombre válido");
                            break;
                        }

                        const asignatura = new Asignatura(nombreAsignatura);
                        try{
                            console.log("Creación de la asignatura completado sin errores");
                            console.log(`Nombre asignatura: ${nombreAsignatura}`);
                            listaAsignaturas.agregarAsignatura(asignatura);  // Agregar la asignatura a la lista
                        }catch(error){
                            console.log("Error durante la creación de la asignatura", error);
                            console.log(`Nombre asignatura: ${nombreAsignatura}`);
                        }
                        break;
                    }

                    case '0': {
                        console.log("Saliendo...");
                        salir = false;
                        break;
                    }

                    default: {
                        console.log("Prueba de nuevo");
                    } 
                }
                break;
            }

            case '2': {
                console.clear();
                // Mostrar el menú de eliminaciones
                console.log("Sistema de Gestión Académica de Estudiantes y Asignaturas por Adrián Martín Vázquez");
                console.log("1. Eliminar estudiante");
                console.log("2. Eliminar asignatura");
                console.log("0. Salir");
                
                const optEliminar = prompt("Selecciona una de estas opciones: ");
                
                switch(optEliminar){
                    case '1': {
                        console.clear();
                        // Eliminar un estudiante de la lista
                        console.log("Lista de estudiantes: ");
                        listaEstudiantes.verListaEst();

                        const idSupr = prompt("Elige un estudiante (por ID): ");
                        
                        try{
                            listaEstudiantes.eliminarEstudiante(idSupr);  // Eliminar estudiante por ID
                            console.log("Estudiante eliminado sin errores");
                            console.log("Lista de estudiantes actualizada: ");
                            listaEstudiantes.verListaEst();
                        } catch(error) {
                            console.log(`Error durante el proceso de eliminación del estudiante: ${error}`);
                        }
                        break;
                    }

                    case '2': {
                        console.clear();
                        // Eliminar una asignatura de la lista
                        console.log("Lista de asignaturas: ");
                        listaAsignaturas.verListaAsign();

                        const nombreSupr = prompt("Elige una asignatura a eliminar (por Nombre): ");

                        try{
                            listaAsignaturas.eliminarAsignatura(nombreSupr);  // Eliminar asignatura por nombre
                            console.log("Asignatura eliminada sin errores");
                            console.log("Lista de asignaturas actualizada: ");
                            listaAsignaturas.verListaAsign();
                        } catch(error) {
                            console.log(`Error durante el proceso de eliminación de la asignatura: ${error}`);
                        }
                        break;
                    }

                    case '0': {
                        console.log("Saliendo...");
                        salir = false;
                        break;
                    }

                    default: {
                        console.log("Prueba de nuevo");
                    }
                }
                break;
            }

            // Opción 3: Matricular un estudiante en una asignatura
            case '3': {
                console.clear();
                console.log("Lista de estudiantes: ");
                listaEstudiantes.verListaEst();  // Mostrar la lista de estudiantes
                const id = prompt("Elige un estudiante a matricular (por ID): ");

                const estudiante = listaEstudiantes.listaEst.find(est => est.id === id);  // Buscar el estudiante por ID
                if(!estudiante){
                    console.log("No está el estudiante en la lista");
                    break;
                }

                console.log("\nLista de asignaturas: ");
                listaAsignaturas.verListaAsign();  // Mostrar la lista de asignaturas
                const nombreAsign = prompt("Elige una asignatura para la matriculación (por Nombre): ");

                const asignatura = listaAsignaturas.listaAsign.find(asign => asign.nombreAsign === nombreAsign);  // Buscar la asignatura por nombre
                if(!asignatura){
                    console.log("No está la asignatura en la lista");
                    break;
                }

                try{
                    estudiante.matricular(asignatura);  // Intentar matricular al estudiante en la asignatura seleccionada
                    console.log("Estudiante matriculado sin errores");
                } catch (error) {
                    console.log("Ocurrió un error durante el proceso de matriculación", error);
                }
                break;
            }

            // Opción 4: Desmatricular un estudiante de una asignatura
            case '4':{
                console.clear();
                console.log("Lista de estudiantes: ");
                listaEstudiantes.verListaEst();  // Mostrar la lista de estudiantes
                const id = prompt("Elige un estudiante para desmatricular (por ID): ");
                const estudiante =  listaEstudiantes.listaEst.find(est => est.id === id);  // Buscar el estudiante por ID

                if(!estudiante){
                    console.log("No está el estudiante en la lista");
                    break;
                }

                console.log(`Lista de asignaturas matriculadas del estudiante ${estudiante.nombre}`);
                // Mostrar las asignaturas en las que el estudiante está matriculado
                estudiante.asignaturas.forEach((asign, indice) => {
                    console.log(`${indice + 1}. [${asign[0].nombreAsign} - ${asign[1]}]`);
                });

                const indiceAsignatura = prompt("Elige una asignatura a desmatricular (por índice): ");
                const asignatura = estudiante.asignaturas[indiceAsignatura - 1];  // Obtener la asignatura por índice

                if(!asignatura){
                    console.log("No hay ninguna asignatura de este tipo matriculada a este estudiante");
                    break;
                }

                try{
                    estudiante.desmatricular(asignatura[0]);  // Intentar desmatricular al estudiante de la asignatura
                    console.log("Estudiante desmatriculado sin errores");
                } catch(error) {
                    console.log("Ha ocurrido un error durante el proceso de desmatriculación", error);
                }
                break;
            }

            // Opción 5: Calificar a un estudiante en una asignatura
            case '5': {
                console.clear();
                console.log("Lista de estudiantes: ");
                listaEstudiantes.verListaEst();  // Mostrar la lista de estudiantes
                const id = prompt("Elige un estudiante a calificar (por ID): ");
                
                const estudiante = listaEstudiantes.listaEst.find(est => est.id === id);  // Buscar el estudiante por ID
                if(!estudiante){
                    console.log("El estudiante no se encuentra en la lista");
                    break;
                }

                const nombreAsign = prompt ("Elige la asignatura del alumno para calificar (por nombre): ");
                const asignatura = listaAsignaturas.listaAsign.find(asign => asign.nombreAsign === nombreAsign);  // Buscar la asignatura por nombre
                
                if(!asignatura){
                    console.log("La asignatura no se encuentra en la lista");
                    break;
                }

                const nota = prompt("Escribe una nota para la calificación: ");
                const notaDecimal = parseFloat(nota);

                if(isNaN(notaDecimal) || notaDecimal < 0 || notaDecimal > 10){
                    console.log("La calificación tiene que estar entre 0 y 10");
                    break;
                }

                try{
                    estudiante.calificar(asignatura, notaDecimal);  // Intentar calificar al estudiante en la asignatura
                    console.log("Estudiante calificado en la asignatura sin errores");
                } catch(error) {
                    console.log("Ha ocurrido un error durante el proceso de calificación", error);
                }
                break;
            }

            // Opción 6: Buscar un estudiante por nombre
            case '6': {
                console.clear();
                const nombreEstBuscar = prompt("Dime el nombre de un estudiante a buscar: ");
                console.log(`Nombre a buscar: ${nombreEstBuscar}`);

                if (!nombreEstBuscar || nombreEstBuscar.trim() === "") {
                    console.log("No se ingresó un nombre válido para buscar.");
                    break;
                }

                const resultadoBusqueda = listaEstudiantes.buscarEstudiantes(nombreEstBuscar);  // Buscar estudiantes por nombre

                console.log("\nBuscando estudiantes...");
                if (!resultadoBusqueda || resultadoBusqueda.length === 0) {
                    console.log("No se han encontrado estudiantes.");
                    break;
                }

                if (resultadoBusqueda.length === 1) {
                    console.log(`Hay ${resultadoBusqueda.length} estudiante con el nombre ${nombreEstBuscar}`);
                } else {
                    console.log(`Hay ${resultadoBusqueda.length} estudiantes con el nombre ${nombreEstBuscar}`);
                }

                // Mostrar los estudiantes encontrados
                for (const estudiante of resultadoBusqueda) {
                    console.log(estudiante.toString());
                }
                break;
            }

            // Opción 7: Ver los registros de un estudiante
            case '7': {
                console.clear();
                console.log("Lista de estudiantes: ");
                listaEstudiantes.verListaEst();  // Mostrar la lista de estudiantes
                const id = prompt("Elige un estudiante para ver sus registros (por ID): ");

                const estudiante = listaEstudiantes.listaEst.find(est => est.id === id);  // Buscar el estudiante por ID
                if(!estudiante){
                    console.log("El estudiante descrito no está en la lista");
                    break;
                }

                if(estudiante.registros.length === 0){
                    console.log("No hay registros de este estudiante");
                }else{
                    console.log("Registros del estudiante elegido");
                    // Mostrar los registros del estudiante
                    estudiante.registros.forEach(registro => console.log(registro));
                }
                break;
            }

            // Opción 8: Ver los promedios de los estudiantes
            case '8': {
                console.clear();
                // Mostrar el menú de promedios
                console.log("Sistema de Gestión Académica de Estudiantes y Asignaturas por Adrián Martín Vázquez");
                console.log("1. Promedio estudiantes");
                console.log("2. Promedio general estudiantes");
                console.log("0. Salir");

                const optPromedios = prompt("Selecciona una de estas opciones: ");

                switch(optPromedios){
                    case '1': {
                        console.clear();
                        console.log("Lista de estudiantes: ");
                        listaEstudiantes.verListaEst();  // Mostrar la lista de estudiantes
                        const id = prompt("Elige un estudiante para hacerle el promedio (por ID): ");
                        const estudiante = listaEstudiantes.listaEst.find(est => est.id === id);  // Buscar el estudiante por ID
                        
                        if(!estudiante){
                            console.log("El estudiante no se encuentra en la lista");
                            break;
                        }

                        const promedio = estudiante.promedioEstudiantes();
                        if(promedio == "No hay calificaciones"){
                            console.log("Este estudiante no tiene calificaciones");
                        }else{
                            console.log(`Promedio (GPA) de ${estudiante.nombre}: ${promedio}`);  // Mostrar el promedio del estudiante
                        }
                        break;
                    }

                    case '2':{
                        console.clear();
                        try{
                            const gpaGeneral = listaEstudiantes.promedioGeneral();  // Calcular el promedio general de todos los estudiantes
                            if (gpaGeneral == "No hay calificaciones"){
                                console.log("No hay calificaciones, no se puede hacer el promedio general de estudiantes");
                            }else{
                                console.log(`Promedio general de notas de todos los estudiantes: ${gpaGeneral}`);
                            }
                        } catch (error) {
                            console.log("Ha ocurrido un error en el promedio general: ", error);
                        }
                        break;
                    }

                    case '0': {
                        console.log("Saliendo...");
                        salir = false;
                        break;
                    }

                    default: {
                        console.log("Prueba de nuevo");
                    }
                }
                break;
            }

            // Opción 9: Ver el reporte de un estudiante
            case '9': {
                console.clear();
                console.log("Listado de estudiantes: ");
                listaEstudiantes.verListaEst();  // Mostrar la lista de estudiantes

                const id = prompt("Elige un estudiante para ver su reporte (por ID): ");
                const estudiante = listaEstudiantes.listaEst.find(est => est.id === id);  // Buscar el estudiante por ID

                if(!estudiante){
                    console.log("El estudiante no se encuentra en la lista");
                    break;
                }

                estudiante.listaReportes();  // Mostrar el reporte del estudiante
                break;
            }

            // Opción 0: Salir del sistema
            case '0': {
                console.clear();
                console.log("Sayonara~");
                salir = false;  // Finaliza el bucle del programa
                break;
            }

            default: {
                console.log("Prueba otra vez");
            }
        }
    }
} catch (error) {
    console.log(`Ha ocurrido un error en la ejecución del programa: ${error}`);
}
