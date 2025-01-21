/*
2 tipos errores:
    - predecibles
    - impredecibles

- forma de manejar errores:
    - if -> predecibles
    - try..catch -> impredecibles

¿cuando if?
    - predecibles
    - elegir si quiero interrumpir el flujo o no
    - gestión más sencilla

¿cuando try..catch?
    - impredecibles
    - quiero que la ejecución del código se interrumpa para tratar el error
    - gestión más compleja

try{
    condición
}catch (error){
    console.log(error.)
}finally (opcional)
    siempre se ejecuta
}

*/

function dividir(num1,num2){
    if (num2 != 0){
        let resultado = num1 / num2;
        return resultado;
    }else{
        console.log('No se puede dividir por 0');
    }
}

///
try{
    funcionQueNoExiste();
}catch(error){
    console.log(error.name, error.message, error.stack);
}finally{
    console.log('Esto se ejecuta siempre');
}

///
function procesarJSON(datos){
    try{
        let objeto= JSON.parse(datos);
    }catch(error){
        console.log(error.message);
    }
}

procesarJSON('{"nombre":"procopio", "edad": 23}');

//rethrowing errors
//relanzar errores

function conectarServidor(){
    try{
        const servidorEncendido=false;
        if(!servidorEncendido){
            throw new Error('No se pudo conectar al servidor, esta apagado');
        }
    }catch(error){
        console.log(error.message);
        throw error;
    }
}

function iniciarConexion(){
    try{
        conectarServidor();
    }catch(error){
        console.log(`Estoy en iniciarConexion ${error.message}`);
    }
}

iniciarConexion();

//where to handle errors try..catch (impredecibles)
/*
    1.- dentro de cada función donde se puedan producir
    2.- a la 1 le añado el código donde se llama al código que puede producir el error
    3.- solo en el códgio que llama a él código donde se puede producir el error ->
    4.- eter gran parte del código en un try..catch ->
*/

function obtenerPropiedad(objeto, propiedad){
    try{
        return objeto.propiedad;
    }catch(error){
        console.log(error.stack);
        throw error;
    }
}

function procesarNombre(nombre){
    try{
        return nombre.length;
    }catch(error){
        console.log(error.stack);
    }
}

function procesarDatos(objeto){
    try{
        let usuario = obtenerPropiedad(objeto, 'nombre');
        let nombre = procesarNombre(usuario);
    }catch(error){
        console.log(error.message);
    }
}

try{
    let usuario={nombre: 'perico'};
    procesarDatos(usuario);
}catch(error){
    console.log(error.message);
}

//lanzar errores personalizados
//Throwing customized errors
//normalmente detecta un error y lo lanza
/*
    - SyntaxError let hola=
    - ReferenceError console.log(x);
    - TypeError let a="z" let b=5 console.log(b*a)
    - Error

*/

function dividir(num1, num2){
    if (num2 === 0){
        throw new Error('No se puede dividir por 0');
    }else{
        return num1/num2;
    }
}

function procesar(datos){
    try{
        let usuario=JSON.parse(datos);
        if(!usuario.direccion){
            throw new SyntaxError('La dirección no existe');
        }
    }catch(error){

    }
}

///
function manejarErrores(error){
    console.log(error.message);
}

try{
    funcionQueNoExiste();
}catch(error){
    throw new manejarErrores(error);
}

///
class validarError extends Error{
    constructor(mensaje){
        super(mensaje);
        this.name='ErrorDeValidacion';
    }
}

function validarUsuario(usuario){
    if(!usuario){
        throw new validarError("el usuario no existe");
    }
    return `Bienvenido ${usuario.nombre}`;
}