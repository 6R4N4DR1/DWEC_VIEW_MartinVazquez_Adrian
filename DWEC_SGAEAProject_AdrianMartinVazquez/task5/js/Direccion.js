/**
 * Clase para representar una dirección de una persona
 */ 
class Direccion {
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
            this._calle = calle;
        } else {
            throw new Error("Especificación de calle no válida");
        }

        // Validación del atributo "numero": debe ser mayor a 0
        if (numero > 0) {
            this._numero = numero;
        } else {
            throw new Error("Número no válido");
        }

        // Validación del atributo "piso": debe ser una cadena no vacía
        if (this.#validarCadenas(piso)) {
            this._piso = piso;
        } else {
            throw new Error("Especificación del piso no válida");
        }

        // Validación del atributo "codigoPostal": debe ser un string de 5 dígitos
        if (/^[0-9]{5}$/.test(codigoPostal)) {
            this._codigoPostal = codigoPostal;
        } else {
            throw new Error("Código postal incorrecto");
        }

        // Validación del atributo "provincia": debe ser una cadena no vacía
        if (this.#validarCadenas(provincia)) {
            this._provincia = provincia;
        } else {
            throw new Error("Provincia especificada no es válida");
        }

        // Validación del atributo "localidad": debe ser una cadena no vacía
        if (this.#validarCadenas(localidad)) {
            this._localidad = localidad;
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

    /**
    * Genera un texto con la dirección completa.
    * @returns {string} - La dirección completa en formato de texto
    */
    toString() {
        return `${this._calle}, Nº${this._numero}, ${this._piso}, ${this._localidad}, ${this._provincia}, CP: ${this._codigoPostal}`;
    }
}

export default Direccion;