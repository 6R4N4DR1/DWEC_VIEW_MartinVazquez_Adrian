import Estudiante from './Estudiante.js';

/**
 * Clase para representar la lista de estudiantes
 */
class ListaEstudiantes{
    #listaEst; // Atributo privado para almacenar la lista de estudiantes

    /**
     * Constructor para inicializar la lista de estudiantes
     */
    constructor() {
        this.#listaEst = []; // Inicializa el atributo #listaEst como un array vacío
    }

    /**
     * Getter para la lista de estudiantes
     * @returns {Array} - El array de estudiantes
     */
    get listaEst(){
        return this.#listaEst; // Devuelve el array de estudiantes
    }

    /**
     * Método para agregar un estudiante a la lista, si no está ya en ella
     * @param {Estudiante} estudiante - El estudiante a agregar
     * @throws {Error} Si el estudiante ya está en la lista
     */
    agregarEstudiante(estudiante) {
        try {
            // Verifica si el estudiante ya está en la lista por su id
            if (this.#listaEst.some(est => est.id === estudiante.id)) {
                // Si el estudiante ya existe, lanza un error
                throw new Error("El estudiante ya está en la lista.");
            } else {
                // Si no está, lo agrega a la lista
                this.#listaEst.push(estudiante);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método para eliminar un estudiante de la lista por su id
     * @param {string} id - El ID del estudiante a eliminar
     * @throws {Error} Si el estudiante no está en la lista
     */
    eliminarEstudiante(id) {
        try {
            // Si el estudiante no está en la lista, lanza un error
            if(this.#listaEst.findIndex(est => est.id === id) == -1){
                throw new Error("El estudiante no está en la lista");
            }else{
                // Elimina el estudiante encontrado en el índice
                this.#listaEst = this.#listaEst.filter(est => est.id != id);
                // Elimina el id usado por ese estudiante
                Estudiante.eliminarIdUsado(id);
            }  
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        } 
    }

    /**
     * Método para buscar estudiantes por nombre en la lista
     * @param {string} nombre - El nombre del estudiante a buscar
     * @throws {Error} Si no se encuentran resultados
     */
    buscarEstudiantes(nombre) {
        try {
            // Creamos una constance que busque estudiantes por nombre
            const resultados = this.#listaEst.filter(est => est.nombre.toLowerCase().includes(nombre.toLowerCase()));
            // Si no se encuentran resultados, lanza un error
            if(resultados == 0){
                throw new Error("No hay resultados");
            }else{
                // Muestra los resultados encontrados en la consola
                resultados.forEach(est => console.log(est.toString())); 
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método para obtener el promedio general de las calificaciones de todos los estudiantes
     * @returns {number|string} - El promedio general de las calificaciones o un mensaje si no hay calificaciones
     */
    promedioGeneral(){
        try {
            // Si no hay estudiantes en la lista, lanza un error
            if (this.#listaEst.length === 0) {
                console.log("No hay estudiantes registrados en la lista");
                return "No hay calificaciones";
            }else{
                let sumaTotal = 0; // Variable para almacenar la suma total de las calificaciones
                let contadorNotas = 0; // Variable para contar cuántas calificaciones se suman
            
                // Recorre cada estudiante en la lista
                for(const estudiante of this.#listaEst){
                    const notas = [];

                    for(const asign of estudiante.asignaturas){
                        notas.push(...asign[1]);
                    }

                    if (notas.length > 0) {
                        // Suma las calificaciones de las asignaturas
                        sumaTotal += notas.reduce((acc, nota) => acc + nota, 0);
                        // Cuenta el número total de calificaciones
                        contadorNotas += notas.length;
                    }else{
                        console.log("El estudiante no tiene asignaturas calificadas");
                        return "No hay calificaciones";
                    }
                }
            
                // Si no se encontraron calificaciones, lanza un error
                if (contadorNotas == 0) {
                    console.log("No hay ninguna calificación registrada");
                    return "No hay calificaciones";
                }else{
                    // Devuelve el promedio redondeado de las calificaciones
                    return Math.round(sumaTotal / contadorNotas);
                }
            } 
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método para ver la lista completa de estudiantes
     * @throws {Error} Si no hay estudiantes registrados
     */
    verListaEst(){
        try {
            // Si la lista de estudiantes está vacía, lanza un error
            if(this.#listaEst.length == 0){
                throw new Error("No hay estudiantes registrados");
            }else{
                // Muestra la información de todos los estudiantes en la consola
                this.#listaEst.forEach(est => console.log(est.toString()));
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }
}

export default ListaEstudiantes;