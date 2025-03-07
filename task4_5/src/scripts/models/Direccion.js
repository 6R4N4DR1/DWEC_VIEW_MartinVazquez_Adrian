/**
 * Clase para representar una dirección de una persona
 */ 
class Direccion {
    // Declaración de atributos encapsulados usando el # (privados)
    #calle; // Almacena el nombre de la calle
    #numero; // Almacena el número de la dirección
    #piso; // Almacena el piso o planta de la dirección
    #codigoPostal; // Almacena el código postal
    #provincia; // Almacena la provincia de la dirección
    #localidad; // Almacena la localidad o ciudad

    /**
     * Constructor de la clase Direccion
     * @param {string} calle - El nombre de la calle
     * @param {number} numero - El número de la dirección
     * @param {string} piso - El piso o planta de la dirección
     * @param {string} codigoPostal - El código postal
     * @param {string} provincia - La provincia de la dirección
     * @param {string} localidad - La localidad o ciudad
     * @throws {Error} Si alguno de los parámetros no es válido
     */
    constructor(calle, numero, piso, codigoPostal, provincia, localidad) {
        // Validación del atributo "calle": debe ser una cadena no vacía
        if (this.#validarCadenas(calle)) {
            this.#calle = calle;
        } else {
            throw new Error("Especificación de calle no válida");
        }

        // Validación del atributo "numero": debe ser mayor a 0
        if (numero > 0) {
            this.#numero = numero;
        } else {
            throw new Error("Número no válido");
        }

        // Validación del atributo "piso": debe ser una cadena no vacía
        if (this.#validarCadenas(piso)) {
            this.#piso = piso;
        } else {
            throw new Error("Especificación del piso no válida");
        }

        // Validación del atributo "codigoPostal": debe ser un string de 5 dígitos
        if (/^[0-9]{5}$/.test(codigoPostal)) {
            this.#codigoPostal = codigoPostal;
        } else {
            throw new Error("Código postal incorrecto");
        }

        // Validación del atributo "provincia": debe ser una cadena no vacía
        if (this.#validarCadenas(provincia)) {
            this.#provincia = provincia;
        } else {
            throw new Error("Provincia especificada no es válida");
        }

        // Validación del atributo "localidad": debe ser una cadena no vacía
        if (this.#validarCadenas(localidad)) {
            this.#localidad = localidad;
        } else {
            throw new Error("Localidad especificada no es válida");
        }
    }

    /**
    * Método privado para validar si una cadena es válida.
    * @param {string} cadena - La cadena a validar
    * @returns {boolean} - Devuelve true si la cadena es válida, de lo contrario false
    */
    // Valida si el elemento de la cadena es "string".
    #validarCadenas(cadena) {
        return typeof cadena === "string";
    }

    // Métodos "getter" para acceder a los atributos privados

    /**
    * Devuelve el valor de "calle"
    * @returns {string} - El nombre de la calle
    */
    get calle() {
        return this.#calle;
    }

    /**
    * Devuelve el valor de "numero"
    * @returns {number} - El número de la dirección
    */
    get numero() {
        return this.#numero;
    }

    /**
    * Devuelve el valor de "piso"
    * @returns {string} - El piso o planta de la dirección
    */
    get piso() {
        return this.#piso;
    }

    /**
    * Devuelve el valor de "codigoPostal"
    * @returns {string} - El código postal
    */
    get codigoPostal() {
        return this.#codigoPostal;
    }

    /**
    * Devuelve el valor de "provincia"
    * @returns {string} - La provincia de la dirección
    */
    get provincia() {
        return this.#provincia;
    }

    /**
    * Devuelve el valor de "localidad"
    * @returns {string} - La localidad o ciudad
    */
    get localidad() {
        return this.#localidad;
    }

    /**
    * Genera un texto con la dirección completa.
    * @returns {string} - La dirección completa en formato de texto
    */
    toString() {
        return `${this.#calle}, Nº${this.#numero}, ${this.#piso}, ${this.#localidad}, ${this.#provincia}, CP: ${this.#codigoPostal}`;
    }
}

export default Direccion;