class Personas {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        if (/^[A-Za-zÁ-ÿ\s]+$/.test(nombre)){
            this.#nombre=nombre;
        }else{
            throw new Error("El nombre debe contener solo letras, tíldes (opcional) y espacios.");
        }

        if(parseInt(edad) > 0 && parseInt(edad) <= 99){
            this.#edad=edad;
        }else{
            this.#edad=0;
        }
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    toString() {
        return `Nombre: ${this.#nombre}, Edad: ${this.#edad}`;
    }
}

export default Personas;