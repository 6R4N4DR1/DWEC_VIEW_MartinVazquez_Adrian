import { Persona } from "./Persona.js";

/** 
 * Clase Estudiante que hereda de Persona
 */
class Estudiante extends Persona{
    // Declaración de atributos
    #id;
    #asignaturas; // Asignaturas del estudiante
    #registros; // Para registar las matriculaciones y desmatriculaciones de estudiantes en asignaturas
    
    static idUsados = []; // Atributo estático para almacenar los IDs ya utilizados

    /**
     * Constructor de la clase Estudiante
     * @param {string} nombre - El nombre del estudiante
     * @param {number} edad - La edad del estudiante
     * @param {Direccion} direccion - La dirección del estudiante, instancia de la clase Dirección
     */
    constructor(id, nombre, edad, direccion) {
        super(nombre, edad, direccion); // Llamada al constructor de Persona
        
        this.#id = id; // Asigna un ID único al estudiante
        this.#asignaturas = []; // Inicialización del array de asignaturas
        this.#registros = []; // Inicialización del array de registros
    }
    
    /**
     * Getter para obtener el id del estudiante
     * @returns {string} - El ID del estudiante
     */
    get id(){
        return this.#id;
    }

    /**
     * Getter para obtener las asignaturas del estudiante
     * @returns {Array} - Una copia del array de asignaturas
     */
    get asignaturas(){
        return [...this.#asignaturas]; // Devuelve una copia del array de asignaturas
    }

    /**
     * Getter para obtener los registros de matriculación y desmatriculación con la fecha de cambio en español
     * @returns {Array} - Los registros de matriculación y desmatriculación con la fecha de cambio en español
     */
    get registros(){
        return this.#registros.map(([accion, asignatura, fecha]) => {
            // // Inicialización de arrays de días y meses en formato largo y en español
            // const diasESP = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            // const mesesESP = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            // // Obtiene el día de la semana, el día del mes, el mes y el año
            // const diaSemana = diasESP[fecha.getDay()];
            // const dia = fecha.getDate();
            // const mes = mesesESP[fecha.getMonth()];
            // const ano = fecha.getFullYear();

            // Obtengo la fecha actual en formato largo y español
            const fechaDeAccion = new Intl.DateTimeFormat('es-Es', {dateStyle: 'long'}).format(fecha);

            // Devuelve la acción realizada con la fecha formateada
            return `${accion} en ${asignatura} el ${fechaDeAccion}`;
        });
    }

    /**
     * Método para matricular a un estudiante en una asignatura
     * @param {Object} asignatura - La asignatura en la que se matricula al estudiante
     */
    matricular(asignatura) {
        // Verifica si el estudiante ya está matriculado en la asignatura
        try {
            if (this.#asignaturas.some(asign => asign[0].nombreAsign === asignatura.nombreAsign)) {
                throw new Error("El estudiante ya está matriculado en esta asignatura");
            }else{
                // Matricula al estudiante y agrega el registro
                this.#asignaturas.push([asignatura, []]);
                const fechaActual = new Date();
                this.#registros.push(["Matriculado", asignatura.nombreAsign, fechaActual]);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método para desmatricular a un estudiante de una asignatura
     * @param {Object} asignatura - La asignatura de la que se desmatricula al estudiante
     */
    desmatricular(asignatura) {
        // Busca la asignatura en la lista de asignaturas
        try {
            if (this.#asignaturas.findIndex(asign => asign[0].nombreAsign === asignatura.nombreAsign) == -1) {
                throw new Error("El estudiante no está matriculado en esta asignatura");
            }else{
                // Elimina la asignatura y registra la desmatriculación
                this.#asignaturas = this.#asignaturas.filter(asign => asign[0].nombre != asignatura.nombre);
                const fechaActual = new Date();
                this.#registros.push(["Desmatriculado", asignatura.nombreAsign, fechaActual]);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }

    /**
     * Método para calificar a un estudiante en una asignatura
     * @param {Object} asignatura - La asignatura en la que se califica al estudiante
     * @param {number} nota - La nota que se asigna al estudiante
     */
    calificar(asignatura, nota) {
        // Verifica si la asignatura está en la lista de asignaturas del estudiante
        try {
            const asignaturaMatriculada = this.#asignaturas.find(asign => asign[0].nombreAsign === asignatura.nombreAsign);
            
            if (!asignaturaMatriculada) {
                throw new Error(`El estudiante no está matriculado en la asignatura ${asignatura.nombreAsign}`);
            }
            if(nota < 0 || nota > 10){
                throw new Error("La nota pasada como parámetro no está entre 0 y 10");
            }
    
            // Asigna la nota a la asignatura
            asignaturaMatriculada[1].push(nota);
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }   
    }

    /**
     * Getter para calcular el promedio de notas de un estudiante
     * @returns {number|string} - El promedio de notas del estudiante o un mensaje si no hay calificaciones
     */
    promedioEstudiantes() {
        // Creo una constante inicializada a vacía de array para luego rellenarla con las aisgnaturas calificadas
        try {
            const notas = [];
            for(const asign of this.#asignaturas){
                notas.push(...asign[1]);
            }
            // Filtra las asignaturas que tienen notas numéricas
            if(notas.length == 0){
                return "No hay calificaciones";
            }else{
                // Calcula el promedio de las notas
                const suma = notas.reduce((acc, nota) => acc + nota, 0);
                return Math.round(suma / notas.length);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
            return "No hay calificaciones";
        }
    }

    /**
     * Método para mostrar los reportes de cada estudiante
     */
    listaReportes(){
        console.log(`REPORTE de alumno con id: ${this.#id}`);
        console.log(`\t${super.toString()}`);
        console.log(`\tLista de notas:`);
        if(this.#asignaturas.length === 0){
            console.log("\t\tNo hay asignaturas calificadas");
        }else{
            this.#asignaturas.forEach((asign, indice) => {
                let notasAsign = "No hay calificaciones hechas";
                if(asign[1].length > 0){
                    notasAsign = asign[1].join(" - ");
                }else{
                    console.log("No hay calificaciones hechas");
                }

                console.log(`\t\t${indice + 1}. [${asign[0].nombreAsign} - Nota: ${notasAsign}]`);
            });
        }
        console.log(`\tPromedio del alumno (GPA): ${this.promedioEstudiantes()}`);
    }

    /**
     * Método estático para liberar un ID usado
     * @param {string} id - El ID a liberar
     */
    static eliminarIdUsado(id){
        try {
            // Se crea una constante que divida la letra E del los numeros del ID porque el array estatico solo contiene numeros
            const numbId = parseInt(id.slice(1));
            // Se valida si idsUsados no contiene ese ID, de lo contrario lo elimina
            if(Estudiante.idUsados.findIndex(iU => iU === numbId) == -1){
                throw new Error("El ID esta libre");
            }else{
                Estudiante.idUsados = Estudiante.idUsados.filter(iU => iU != numbId);
            }
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        } 
    }

    /**
     * Muestra un string con la ID y la información del estudiante
     * @returns {string} - La información del estudiante en formato texto
     */
    toString() {
        try {
            let verAsignaturas = "Ninguna asignatura";

            if(this.#asignaturas.length > 0){
                verAsignaturas = this.#asignaturas.map(([asign, notas]) => `${asign.nombreAsign} - Nota: ${notas.join(" - ") || "No hay calificaciones hechas"}`).join(" | ");
            }

            return `${this.#id} -> ${super.toString()}. \n Asignaturas del estudiante: [${verAsignaturas}]`;
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }
}

export default Estudiante;