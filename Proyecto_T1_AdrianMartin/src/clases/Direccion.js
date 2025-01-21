// Creamos la clase dirección
class Direccion {
    #calle;
    #numero;
    #piso;
    #codigoPostal;
    #provincia;
    #localidad;

    constructor(calle, numero, piso, codigoPostal, provincia, localidad) {
        this.#calle = calle;
        this.#numero = this.#validarNumero(numero);  // Usamos el método de validación
        this.#piso = piso;
        this.#codigoPostal = this.#validarCodigoPostal(codigoPostal);  // Usamos el método de validación
        this.#provincia = provincia;
        this.#localidad = localidad;
    }

    // Método privado para validar el número
    #validarNumero(numero) {
        if (parseInt(numero) <= 0) {
            throw new Error("Numero no valido");
        }
        return numero;
    }

    // Método privado para validar el código postal
    #validarCodigoPostal(codigoPostal) {
        if (!/^\d{5}$/.test(codigoPostal)) {
            throw new Error("El código postal debe tener 5 números");
        }
        return codigoPostal;
    }

    get calle() {
        return this.#calle;
    }

    get numero() {
        return this.#numero;
    }

    get piso() {
        return this.#piso;
    }

    get codigoPostal() {
        return this.#codigoPostal;
    }

    get provincia() {
        return this.#provincia;
    }

    get localidad() {
        return this.#localidad;
    }

    set calle(calle) {
        this.#calle = calle;
    }

    set numero(numero) {
        this.#numero = this.#validarNumero(numero);  // Reutilizamos el método de validación
    }

    set piso(piso) {
        this.#piso = piso;
    }

    set codigoPostal(codigoPostal) {
        this.#codigoPostal = this.#validarCodigoPostal(codigoPostal);  // Reutilizamos el método de validación
    }

    set provincia(provincia) {
        this.#provincia = provincia;
    }

    set localidad(localidad) {
        this.#localidad = localidad;
    }

    toString() {
        return `${this.#calle}, ${this.#numero}, Piso: ${this.#piso}, Localidad: ${this.#codigoPostal}, ${this.#localidad}, Provincia: ${this.#provincia}`;
    }
}

export default Direccion;