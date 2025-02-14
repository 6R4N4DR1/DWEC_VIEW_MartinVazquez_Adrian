import Direccion from './Direccion.js';

/**
 * Clase base para la persona, con datos de nombre y edad
 */ 
class Persona {
    // Declaración de atributos encapsulados
    #nombre; // Almacena el nombre de la persona
    #edad; // Almacena la edad de la persona
    #direccion; // Almacena la dirección de la persona, instancia de la clase Dirección

    /**
     * Constructor de la clase Persona
     * @param {string} nombre - El nombre de la persona
     * @param {number} edad - La edad de la persona
     * @param {Direccion} direccion - La dirección de la persona, instancia de la clase Dirección
     * @throws {Error} Si alguno de los parámetros no es válido
     */
    constructor(nombre, edad, direccion) {
        // Validación del nombre: debe ser una cadena que solo contenga letras, espacios y tildes
        if (typeof nombre === "string" && /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]+$/.test(nombre)) {
            this.#nombre = nombre;
        } else {
            throw new Error("El nombre solo puede tener letras, tíldes y espacios");
        }

        // Validación de la edad: debe ser un número entre 1 y 99
        if (edad > 0 && edad < 100 && /^[0-9]+$/.test(edad)) {
            this.#edad = edad;
        } else {
            throw new Error("La edad solo puede ser entre 1 y 99 años");
        }

        // Validación de la dirección: debe ser una instancia de la clase Dirección
        if (direccion instanceof Direccion) {
            this.#direccion = direccion;
        } else {
            throw new Error("La dirección debe ser una instancia de la clase Dirección, por tanto no es válida");
        }
    }

    /**
     * Getter para obtener el nombre de la persona
     * @returns {string} - El nombre de la persona
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * Getter para obtener la edad de la persona
     * @returns {number} - La edad de la persona
     */
    get edad() {
        return this.#edad;
    }

    /**
     * Getter para obtener la dirección de la persona
     * @returns {string} - La dirección de la persona en formato texto
     */
    get direccion() {
        return this.#direccion.toString(); // Devuelve la dirección en formato texto utilizando el método toString de Dirección
    }

    /**
     * Genera un texto de la persona, incluyendo su nombre, edad y ubicación
     * @returns {string} - La información de la persona en formato texto
     */
    toString() {
        return `${this.#nombre}, ${this.#edad} años.\nUbicación: ${this.#direccion}`;
    }
}

export default Persona;