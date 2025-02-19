/**
 * Clase Asignatura
 */
class Asignatura{
    // Declaración de atributos privados
    #nombreAsign;   // Nombre de la asignatura
    #calificaciones; // Array para almacenar las calificaciones de la asignatura

    /**
     * Constructor que inicializa la asignatura con su nombre
     * @param {string} nombreAsign - El nombre de la asignatura
     */
    constructor(nombreAsign) {

        // Validación del nombre de la asignatura
        // Solo permite letras, tildes, espacios y números romanos
        if(typeof nombreAsign === "string" && /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\sIVXLCDM]+$/.test(nombreAsign)){
            this.#nombreAsign = nombreAsign; // Asigna el nombre si es válido
        }else{
            // Si el nombre no es válido, lanza un error
            console.log("El nombre de la asignatura solo puede contener letras, tíldes, espacios y numeros romanos");
        }

        this.#calificaciones = []; // Inicializa el array de calificaciones vacío
    }

    /**
     * Getter para obtener el nombre de la asignatura
     * @returns {string} - El nombre de la asignatura
     */
    get nombreAsign(){
        return this.#nombreAsign; // Devuelve el nombre de la asignatura
    }

    /**
     * Método para agregar una calificación si es válida
     * @param {number} nota - La calificación a agregar
     * @throws {Error} Si la calificación no está en el rango válido (0 a 10)
     */
    agregarCalificacion(nota){
        try {
            // Verifica que la calificación esté en el rango válido (0 a 10)
            if (nota >= 0 && nota <= 10) {
                this.#calificaciones.push(nota); // Si es válida, la agrega al array
            } else {
                // Si la calificación no es válida, lanza un error
                throw new Error("La calificación debe ser un número entero entre 0 y 10");
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
        
    }

    /**
     * Getter para obtener el promedio de las calificaciones
     * @returns {number|string} - El promedio de las calificaciones o un mensaje si no hay calificaciones
     */
    promedioAsignaturas() {
        try {
            // Si no hay calificaciones, retorna No hay calificaciones
            if(this.#calificaciones.length == 0){
                return "No hay calificaciones";
            } else {
                // Si hay calificaciones, calcula el promedio
                const suma = this.#calificaciones.reduce((acc, nota) => acc + nota, 0); // Suma todas las calificaciones
                return Math.round(suma / this.#calificaciones.length); // Calcula el promedio y lo redondea
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
        
    }

    /**
     * Método para eliminar una calificación si existe en el array
     * @param {number} nota - La calificación a eliminar
     * @throws {Error} Si la calificación no se encuentra en el array
     */
    eliminarCalificacion(nota) {
        try {
            // Si la calificación no está en el array, lanza un error
            if (this.#calificaciones.indexOf(nota) == -1) {
                throw new Error(`La calificación ${nota} no se encuentra en la asignatura ${this.#nombreAsign}`);
            }else{
                // Si la calificación está en el array, la elimina
                this.#calificaciones = this.#calificaciones.filter(cal => cal != nota);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método que convierte la asignatura a un formato de texto (string)
     * @returns {string} - El nombre de la asignatura y las calificaciones en formato de texto
     */
    toString(){
        return `${this.#nombreAsign} - Notas: ${this.#calificaciones}`; // Devuelve el nombre y las calificaciones en formato de texto
    }
}

export default Asignatura;