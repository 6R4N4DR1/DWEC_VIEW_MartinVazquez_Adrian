import Asignatura from './Asignatura.js';

/**
 * Clase para representar la lista de asignaturas
 */
class ListaAsignaturas{
    #listaAsign; // Atributo privado para almacenar la lista de asignaturas

    /**
     * Constructor para inicializar la lista de asignaturas
     */
    constructor(){
        this.#listaAsign = []; // Inicializa el atributo #listaAsign como un array vacío
    }

    /**
     * Getter para obtener la lista de asignaturas
     * @returns {Array} - El array de asignaturas
     */
    get listaAsign(){
        return this.#listaAsign; // Devuelve el array de asignaturas
    }

    /**
     * Método para agregar una asignatura a la lista si aún no está en ella
     * @param {Asignatura} asignatura - La asignatura a agregar
     * @throws {Error} Si la asignatura ya está en la lista
     */
    agregarAsignatura(asignatura) {
        try {
            // Verifica si la asignatura ya está en la lista comparando su nombre
            if (this.#listaAsign.some(asign => asign.nombreAsign === asignatura.nombreAsign)) {
                // Si la asignatura ya existe, lanza un error
                throw new Error("La asignatura ya está en la lista");
            } else {
                // Si no está en la lista, la agrega
                this.#listaAsign.push(asignatura);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }
    
    /**
     * Método para eliminar una asignatura de la lista por su nombre
     * @param {string} nombreAsign - El nombre de la asignatura a eliminar
     * @throws {Error} Si la asignatura no se encuentra en la lista
     */
    eliminarAsignatura(nombreAsign) {
        try {
            // Si no encuentra la asignatura, lanza un error
            if(this.#listaAsign.findIndex(asign => asign.nombreAsign === nombreAsign) == -1){
                throw new Error("Dicha asignatura no se encuentra en la lista");
            }else{
                // Si la asignatura está en la lista, la elimina
                this.#listaAsign = this.#listaAsign.filter(asign => asign.nombreAsign != nombreAsign);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método para ver todas las asignaturas en la lista
     * @throws {Error} Si no hay asignaturas registradas
     */
    verListaAsign(){
        try {
            // Si no hay asignaturas registradas, lanza un error
            if(this.#listaAsign.length == 0){
                throw new Error("No hay asignaturas registradas");
            }else{
                // Muestra las asignaturas de la lista en la consola
                this.#listaAsign.forEach(asign => console.log(asign.nombreAsign));
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }
}

export default ListaAsignaturas;