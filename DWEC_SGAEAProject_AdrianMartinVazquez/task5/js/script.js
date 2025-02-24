console.log("Script cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {
    // Inicializa las variables con los datos almacenados en localStorage o valores por defecto
    const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    const asignaturas = JSON.parse(localStorage.getItem("asignaturas")) || [];
    const registros = JSON.parse(localStorage.getItem("registros")) || { matriculaciones: [], desmatriculaciones: [] };
    let idCounter = parseInt(localStorage.getItem("idCounter")) || 1;

    // Renderiza la lista de estudiantes en el DOM
    function renderListaEstudiantes() {
        const ulListaEstudiantes = document.getElementById("listaEstudiantes");
        ulListaEstudiantes.innerHTML = ""; // Limpia la lista de estudiantes

        estudiantes.forEach(estudiante => {
            const li = document.createElement("li");
            const asignaturasEst = estudiante.asignaturas && estudiante.asignaturas.length > 0 ? 
                estudiante.asignaturas.map(asign => `<br>&emsp; • ${asign[0].nombreAsign} - Notas: ${asign[1].length > 0 ? 
                    asign[1].join(", ") : "[No hay calificaciones]"}`) : "[No hay asignaturas]";
            const direccion = estudiante.direccion ?
                `${estudiante.direccion.calle}, ${estudiante.direccion.numero}, ${estudiante.direccion.piso}, ${estudiante.direccion.codPostal}, ${estudiante.direccion.provincia}, ${estudiante.direccion.localidad}` : 
                "[Dirección no disponible]";
            li.innerHTML = `
                <strong>${estudiante.id}</strong> 🡺 ${estudiante.nombre}, ${estudiante.edad} a&ntilde;os <br>
                <i>Ubicaci&oacute;n</i>: ${direccion} <br>
                <i>Asignaturas</i>: ${asignaturasEst}            
            `;
            ulListaEstudiantes.appendChild(li);                       
        });
    }

    // Renderiza la lista de asignaturas en el DOM
    function renderListaAsignaturas() {
        const ulListaAsignaturas = document.getElementById("listaAsignaturas");
        ulListaAsignaturas.innerHTML = ""; // Limpia la lista de asignaturas

        asignaturas.forEach(asignatura => {
            const li = document.createElement("li");
            li.textContent = asignatura.nombre;
            ulListaAsignaturas.appendChild(li);
        });
    }

    // Limpia el formulario de creación de estudiantes
    function limpiarFormCrearEst() {
        document.getElementById("dni").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("calle").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("piso").value = "";
        document.getElementById("codPostal").value = "";
        document.getElementById("provincia").value = "";
        document.getElementById("localidad").value = "";
    }

    // Limpia el formulario de creación de asignaturas
    function limpiarFormCrearAsign() {
        document.getElementById("nombreAsignatura").value = "";
    }

    // Valida el formato del DNI
    function validarDNI(dni) {
        const dniRegex = /^\d{8}[A-Za-z]$/;
        return dniRegex.test(dni);
    }

    // Crea un nuevo estudiante y lo guarda en localStorage
    function crearEstudiante() {
        const dni = document.getElementById("dni").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const direccion = {
            calle: document.getElementById("calle").value.trim(),
            numero: document.getElementById("numero").value.trim(),
            piso: document.getElementById("piso").value.trim(),
            codPostal: document.getElementById("codPostal").value.trim(),
            provincia: document.getElementById("provincia").value.trim(),
            localidad: document.getElementById("localidad").value.trim()
        };

        // Verifica que todos los campos estén completos
        if (!dni) {
            alert("El campo DNI es obligatorio.");
            return;
        }
        if (!nombre) {
            alert("El campo Nombre es obligatorio.");
            return;
        }
        if (!edad) {
            alert("El campo Edad es obligatorio.");
            return;
        }
        if (!direccion.calle) {
            alert("El campo Calle es obligatorio.");
            return;
        }
        if (!direccion.numero) {
            alert("El campo Número es obligatorio.");
            return;
        }
        if (!direccion.codPostal) {
            alert("El campo Código Postal es obligatorio.");
            return;
        }
        if (!direccion.provincia) {
            alert("El campo Provincia es obligatorio.");
            return;
        }
        if (!direccion.localidad) {
            alert("El campo Localidad es obligatorio.");
            return;
        }

        // Verifica que el DNI sea válido
        if (!validarDNI(dni)){
            alert("El DNI no es válido.");
            return;
        }

        // Verifica que el estudiante no esté ya registrado
        if(estudiantes.some(est => est.dni === dni)){
            alert("El estudiante ya está registrado. Prueba con otro");
            limpiarFormCrearEst();
            return;
        }

        // Crea el objeto estudiante y lo añade a la lista
        const estudiante = {
            id: `E${idCounter}`,
            dni: dni,
            nombre: nombre,
            edad: edad,
            direccion: direccion
        };
        
        estudiantes.push(estudiante);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        idCounter++;
        localStorage.setItem("idCounter", idCounter);
        alert("Estudiante creado sin errores");
        renderListaEstudiantes();
        limpiarFormCrearEst();
    }

    // Crea una nueva asignatura y la guarda en localStorage
    function crearAsignatura() {
        const nombreAsign = document.getElementById("nombreAsignatura").value.trim();

        // Verifica que el nombre de la asignatura no esté vacío
        if (!nombreAsign) {
            alert("El nombre de la asignatura es obligatorio.");
            return;
        }

        // Verifica que la asignatura no esté ya registrada
        if (asignaturas.some(asign => asign.nombre === nombreAsign)) {
            alert("La asignatura ya está registrada. Prueba con otro nombre");
            limpiarFormCrearAsign();
            return;
        }

        // Crea el objeto asignatura y lo añade a la lista
        const asignatura = {
            nombre: nombreAsign
        };

        asignaturas.push(asignatura);
        localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
        alert("Asignatura creada sin errores");
        renderListaAsignaturas();
        limpiarFormCrearAsign();
    }

    // Limpia el formulario de eliminación de estudiantes
    function limpiarFormEliminarEst() {
        document.getElementById("idEstudianteEliminar").value = "";
    }

    // Limpia el formulario de eliminación de asignaturas
    function limpiarFormEliminarAsign() {
        document.getElementById("asignaturaEliminar").value = "";
    }

    // Restablece los IDs de los estudiantes para mantener el orden
    function restablecerIds() {
        estudiantes.forEach((estudiante, index) => {
            estudiante.id = `E${index + 1}`;
        });
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        idCounter = estudiantes.length + 1; // Actualizar el idCounter
        localStorage.setItem("idCounter", idCounter);
        renderListaEstudiantes();
    }

    // Elimina un estudiante por su ID
    function eliminarEstudiante() {
        const idEstudianteEliminar = document.getElementById("idEstudianteEliminar").value.trim();
    
        if (!idEstudianteEliminar) {
            alert("El ID del estudiante es obligatorio.");
            return;
        }
    
        const indiceEst = estudiantes.findIndex(est => est.id === idEstudianteEliminar);
    
        if (indiceEst === -1) {
            alert("El estudiante no existe. Prueba de nuevo");
            limpiarFormEliminarEst();
            return;
        }
    
        estudiantes.splice(indiceEst, 1);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        alert("Estudiante eliminado sin errores");
        renderListaEstudiantes();
        restablecerIds();
        limpiarFormEliminarEst();
    }

    // Elimina una asignatura por su nombre
    function eliminarAsignatura() {
        const nombreAsignaturaEliminar = document.getElementById("asignaturaEliminar").value.trim();
    
        if (!nombreAsignaturaEliminar) {
            alert("El nombre de la asignatura es obligatorio.");
            return;
        }
    
        const indiceAsign = asignaturas.findIndex(asign => asign.nombre === nombreAsignaturaEliminar);
    
        if (indiceAsign === -1) {
            alert("La asignatura no existe. Prueba de nuevo");
            limpiarFormEliminarAsign();
            return;
        }
    
        // Eliminar la asignatura de la lista de asignaturas
        asignaturas.splice(indiceAsign, 1);
        localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
    
        // Eliminar la asignatura de cada estudiante
        estudiantes.forEach(estudiante => {
            if (estudiante.asignaturas) {
                estudiante.asignaturas = estudiante.asignaturas.filter(asign => asign[0].nombreAsign !== nombreAsignaturaEliminar);
            }
        });
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    
        alert("Asignatura eliminada sin errores");
        renderListaAsignaturas();
        renderListaEstudiantes();
        limpiarFormEliminarAsign();
    }

    // Registra una acción de matriculación o desmatriculación
    function registrarAccion(tipo, estudianteId, asignaturaNombre) {
        const fecha = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const hora = new Date().toLocaleTimeString('es-ES', {
            hour: 'numeric',
            minute: 'numeric'
        });

        const registro = {
            estudianteId,
            asignaturaNombre,
            fecha,
            hora,
            tipo
        };
    
        if (tipo === 'Matriculación') {
            registros.matriculaciones.push(registro);
        } else if (tipo === 'Desmatriculación') {
            registros.desmatriculaciones.push(registro);
        }
    
        localStorage.setItem("registros", JSON.stringify(registros));
        mostrarRegistros();
    }

    // Muestra los registros de matriculaciones y desmatriculaciones
    function mostrarRegistros() {
        const ulRegistros = document.getElementById("listaRegistros");
        ulRegistros.innerHTML = "";
    
        const allRegistros = [...registros.matriculaciones, ...registros.desmatriculaciones];
    
        allRegistros.forEach(registro => {
            const li = document.createElement("li");
            li.textContent = `${registro.tipo} en ${registro.asignaturaNombre} el día ${registro.fecha} a las ${registro.hora}`;
            ulRegistros.appendChild(li);
        });
    }

    // Limpia los registros de matriculaciones y desmatriculaciones
    function limpiarRegistros() {
        registros.matriculaciones = [];
        registros.desmatriculaciones = [];
        localStorage.setItem("registros", JSON.stringify(registros));
        mostrarRegistros();
    }

    // Limpia el formulario de matriculación de estudiantes
    function limpiarFormMatricularEst() {
        document.getElementById("idEstudianteMatricular").value = "";
        document.getElementById("asignaturaMatricular").value = "";
    }

    // Limpia el formulario de desmatriculación de estudiantes
    function limpiarFormDesmatricularEst() {
        document.getElementById("idEstudianteDesmatricular").value = "";
        document.getElementById("asignaturaDesmatricular").value = "";
    }

    // Matricula un estudiante en una asignatura
    function matricularEstudiante() {
        const idEstudianteMatricular = document.getElementById("idEstudianteMatricular").value.trim();
        const nombreAsignaturaMatricular = document.getElementById("asignaturaMatricular").value.trim();

        if (!idEstudianteMatricular) {
            alert("El ID del estudiante es obligatorio.");
            return;
        }

        if (!nombreAsignaturaMatricular) {
            alert("El nombre de la asignatura es obligatorio.");
            return;
        }

        const estudiante = estudiantes.find(est => est.id === idEstudianteMatricular);
        const asignatura = asignaturas.find(asign => asign.nombre === nombreAsignaturaMatricular);

        if (!estudiante) {
            alert("El estudiante no existe. Prueba de nuevo");
            limpiarFormMatricularEst();
            return;
        }

        if (!asignatura) {
            alert("La asignatura no existe. Prueba de nuevo");
            limpiarFormMatricularEst();
            return;
        }

        if (!estudiante.asignaturas) {
            estudiante.asignaturas = [];
        }

        if (estudiante.asignaturas.some(asign => asign[0].nombreAsign === nombreAsignaturaMatricular)) {
            alert("El estudiante ya está matriculado en esta asignatura. Prueba con otra");
            limpiarFormMatricularEst();
            return;
        }

        estudiante.asignaturas.push([{ nombreAsign: nombreAsignaturaMatricular }, []]);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        registrarAccion('Matriculación', idEstudianteMatricular, nombreAsignaturaMatricular);

        alert("Estudiante matriculado sin errores");
        renderListaEstudiantes();
        limpiarFormMatricularEst();
    }

    // Desmatricula un estudiante de una asignatura
    function desmatricularEstudiante() {
        const idEstudianteDesmatricular = document.getElementById("idEstudianteDesmatricular").value.trim();
        const nombreAsignaturaDesmatricular = document.getElementById("asignaturaDesmatricular").value.trim();

        if (!idEstudianteDesmatricular) {
            alert("El ID del estudiante es obligatorio.");
            return;
        }

        if (!nombreAsignaturaDesmatricular) {
            alert("El nombre de la asignatura es obligatorio.");
            return;
        }

        const estudiante = estudiantes.find(est => est.id === idEstudianteDesmatricular);

        if (!estudiante) {
            alert("El estudiante no existe. Prueba de nuevo");
            limpiarFormDesmatricularEst();
            return;
        }

        if (!estudiante.asignaturas || !estudiante.asignaturas.some(asign => asign[0].nombreAsign === nombreAsignaturaDesmatricular)) {
            alert("El estudiante no está matriculado en esta asignatura. Prueba con otra");
            limpiarFormDesmatricularEst();
            return;
        }

        estudiante.asignaturas = estudiante.asignaturas.filter(asign => asign[0].nombreAsign !== nombreAsignaturaDesmatricular);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        registrarAccion('Desmatriculación', idEstudianteDesmatricular, nombreAsignaturaDesmatricular);

        alert("Estudiante desmatriculado sin errores");
        renderListaEstudiantes();
        limpiarFormDesmatricularEst();
    }

    // Limpia el formulario de calificación de estudiantes
    function limpiarFormCalificarEst() {
        document.getElementById("idEstudianteCalificar").value = "";
        document.getElementById("asignaturaCalificar").value = "";
        document.getElementById("nota").value = "";
    }

    // Añade una calificación a un estudiante en una asignatura
    function calificarEstudiante() {
        const idEstudianteCalificar = document.getElementById("idEstudianteCalificar").value.trim();
        const nombreAsignaturaCalificar = document.getElementById("asignaturaCalificar").value.trim();
        const nota = parseFloat(document.getElementById("nota").value.trim());
    
        if (!idEstudianteCalificar) {
            alert("El campo ID del estudiante es obligatorio.");
            return;
        }
        if (!nombreAsignaturaCalificar) {
            alert("El campo Nombre de la asignatura es obligatorio.");
            return;
        }
        if (isNaN(nota)) {
            alert("El campo Nota es obligatorio y debe ser un número.");
            return;
        }
    
        const estudiante = estudiantes.find(est => est.id === idEstudianteCalificar);
    
        if (!estudiante) {
            alert("El estudiante no existe. Prueba de nuevo");
            limpiarFormCalificarEst();
            return;
        }
    
        const asignatura = estudiante.asignaturas.find(asign => asign[0].nombreAsign === nombreAsignaturaCalificar);
    
        if (!asignatura) {
            alert("El estudiante no está matriculado en esta asignatura. Prueba de nuevo");
            limpiarFormCalificarEst();
            return;
        }
    
        asignatura[1].push(nota);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    
        alert("Nota añadida sin errores");
        renderListaEstudiantes();
        limpiarFormCalificarEst();
    }

    // Limpia el formulario de cálculo de promedio de estudiantes
    function limpiarFormPromedioEst() {
        document.getElementById("idEstudiantePromedio").value = "";
    }

    // Calcula el promedio de un estudiante
    function promedioEstudiante() {
        const idEstudiantePromedio = document.getElementById("idEstudiantePromedio").value.trim();
    
        if (!idEstudiantePromedio) {
            alert("El ID del estudiante es obligatorio.");
            return;
        }
    
        const estudiante = estudiantes.find(est => est.id === idEstudiantePromedio);
    
        if (!estudiante) {
            alert("El estudiante no existe. Prueba de nuevo");
            limpiarFormPromedioEst();
            return;
        }
    
        if (!estudiante.asignaturas || estudiante.asignaturas.length === 0) {
            alert("El estudiante no tiene asignaturas matriculadas. Prueba con otro estudiante");
            limpiarFormPromedioEst();
            return;
        }
    
        const calificaciones = estudiante.asignaturas.flatMap(asign => asign[1]);
    
        if (calificaciones.length === 0) {
            alert("El estudiante no tiene notas registradas. Prueba con otro estudiante");
            limpiarFormPromedioEst();
            return;
        }
    
        const suma = calificaciones.reduce((acc, nota) => acc + nota, 0);
        const promedio = parseFloat((suma / calificaciones.length).toFixed(2));
    
        alert(`El GPA de ${estudiante.nombre} con ID-${idEstudiantePromedio} es: ${promedio}`);
        limpiarFormPromedioEst();
    }

    // Calcula el promedio general de todos los estudiantes
    function gpaGeneral() {
        const allCalificaciones = estudiantes.flatMap(estudiante => 
            estudiante.asignaturas ? estudiante.asignaturas.flatMap(asign => asign[1]) : []
        );
    
        if (allCalificaciones.length === 0) {
            alert("No hay notas registradas para calcular el promedio general.");
            return;
        }
    
        const suma = allCalificaciones.reduce((acc, nota) => acc + nota, 0);
        const promedio = parseFloat((suma / allCalificaciones.length).toFixed(2));
    
        alert(`El GPA de notas de todos los estudiantes es: ${promedio}`);
    }

    // Validación en tiempo real
    function validarCampo(campo, mensajeError, regex = null) {
        campo.addEventListener("input", function () {
            if (campo.validity.valueMissing) {
                mensajeError.textContent = "Este campo es obligatorio.";
                mensajeError.style.display = "block";
            } else if (campo.validity.patternMismatch) {
                mensajeError.textContent = "Formato incorrecto.";
                mensajeError.style.display = "block";
            } else if (campo.validity.typeMismatch) {
                mensajeError.textContent = "Tipo de dato incorrecto.";
                mensajeError.style.display = "block";
            } else if (campo.validity.rangeOverflow) {
                mensajeError.textContent = `El valor debe ser menor o igual a ${campo.max}.`;
                mensajeError.style.display = "block";
            } else if (campo.validity.rangeUnderflow) {
                mensajeError.textContent = `El valor debe ser mayor o igual a ${campo.min}.`;
                mensajeError.style.display = "block";
            } else if (regex && !regex.test(campo.value)) {
                mensajeError.textContent = "Formato incorrecto.";
                mensajeError.style.display = "block";
            } else {
                mensajeError.style.display = "none";
            }
        });
    }

    function mostrarErroresFormulario(formulario) {
        const campos = formulario.querySelectorAll("input");
        campos.forEach(campo => {
            const mensajeError = campo.nextElementSibling;
            if (campo.validity.valueMissing) {
                mensajeError.textContent = "Este campo es obligatorio.";
                mensajeError.style.display = "block";
            } else if (campo.validity.patternMismatch) {
                mensajeError.textContent = "Formato incorrecto.";
                mensajeError.style.display = "block";
            } else if (campo.validity.typeMismatch) {
                mensajeError.textContent = "Tipo de dato incorrecto.";
                mensajeError.style.display = "block";
            } else if (campo.validity.rangeOverflow) {
                mensajeError.textContent = `El valor debe ser menor o igual a ${campo.max}.`;
                mensajeError.style.display = "block";
            } else if (campo.validity.rangeUnderflow) {
                mensajeError.textContent = `El valor debe ser mayor o igual a ${campo.min}.`;
                mensajeError.style.display = "block";
            } else if (campo.nextElementSibling && campo.nextElementSibling.tagName === "SPAN") {
                mensajeError.textContent = "Formato incorrecto.";
                mensajeError.style.display = "block";
            }
        });
    }

    // Validar campos del formulario de creación de estudiantes
    validarCampo(document.getElementById("dni"), document.getElementById("dniError"), /^\d{8}[A-Za-z]$/);
    validarCampo(document.getElementById("nombre"), document.getElementById("nombreError"));
    validarCampo(document.getElementById("edad"), document.getElementById("edadError"), /^\d+$/);
    validarCampo(document.getElementById("calle"), document.getElementById("calleError"));
    validarCampo(document.getElementById("numero"), document.getElementById("numeroError"), /^\d+$/);
    validarCampo(document.getElementById("piso"), document.getElementById("pisoError"), /^(Bajo|bajo|BAJO|-?\d+)$/);
    validarCampo(document.getElementById("codPostal"), document.getElementById("codPostalError"), /^\d{5}$/);
    validarCampo(document.getElementById("provincia"), document.getElementById("provinciaError"));
    validarCampo(document.getElementById("localidad"), document.getElementById("localidadError"));

    // Validar campos del formulario de creación de asignaturas
    validarCampo(document.getElementById("nombreAsignatura"), document.getElementById("nombreAsignaturaError"));

    // Validar campos del formulario de eliminación de estudiantes
    validarCampo(document.getElementById("idEstudianteEliminar"), document.getElementById("idEstudianteEliminarError"), /^E\d+$/);

    // Validar campos del formulario de eliminación de asignaturas
    validarCampo(document.getElementById("asignaturaEliminar"), document.getElementById("asignaturaEliminarError"));

    // Validar campos del formulario de matriculación de estudiantes
    validarCampo(document.getElementById("idEstudianteMatricular"), document.getElementById("idEstudianteMatricularError"), /^E\d+$/);
    validarCampo(document.getElementById("asignaturaMatricular"), document.getElementById("asignaturaMatricularError"));

    // Validar campos del formulario de desmatriculación de estudiantes
    validarCampo(document.getElementById("idEstudianteDesmatricular"), document.getElementById("idEstudianteDesmatricularError"), /^E\d+$/);
    validarCampo(document.getElementById("asignaturaDesmatricular"), document.getElementById("asignaturaDesmatricularError"));

    // Validar campos del formulario de calificación de estudiantes
    validarCampo(document.getElementById("idEstudianteCalificar"), document.getElementById("idEstudianteCalificarError"), /^E\d+$/);
    validarCampo(document.getElementById("asignaturaCalificar"), document.getElementById("asignaturaCalificarError"));
    validarCampo(document.getElementById("nota"), document.getElementById("notaError"), /^\d+$/);

    // Validar campos del formulario de cálculo de promedio de estudiantes
    validarCampo(document.getElementById("idEstudiantePromedio"), document.getElementById("idEstudiantePromedioError"), /^E\d+$/);

    // Añade eventos a los botones para ejecutar las funciones correspondientes
    document.getElementById("crearEstudiante").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioCrearEstudiante");
        if (formulario.checkValidity()) {
            crearEstudiante();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("crearAsignatura").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioCrearAsignatura");
        if (formulario.checkValidity()) {
            crearAsignatura();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("eliminarEstudiante").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioEliminarEstudiante");
        if (formulario.checkValidity()) {
            eliminarEstudiante();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("eliminarAsignatura").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioEliminarAsignatura");
        if (formulario.checkValidity()) {
            eliminarAsignatura();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("matricularEstudianteAsignatura").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioMatricularEstudiante");
        if (formulario.checkValidity()) {
            matricularEstudiante();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("desmatricularEstudianteAsignatura").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioDesmatricularEstudiante");
        if (formulario.checkValidity()) {
            desmatricularEstudiante();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("calificarEstudianteAsignatura").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioCalificarEstudiante");
        if (formulario.checkValidity()) {
            calificarEstudiante();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("promedioEstudiante").addEventListener("click", function(event) {
        event.preventDefault();
        const formulario = document.getElementById("formularioPromedioEstudiante");
        if (formulario.checkValidity()) {
            promedioEstudiante();
        } else {
            mostrarErroresFormulario(formulario);
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    document.getElementById("promedioGeneral").addEventListener("click", gpaGeneral);

    // Limpiar el localStorage
    document.getElementById("clearLocalStorage").addEventListener("click", function() {
        localStorage.clear();
        alert("LocalStorage limpiado");
        location.reload(); // Recargar la página para aplicar los cambios
    });

    // Añade un evento al botón para limpiar los registros
    document.getElementById("limpiarRegistros").addEventListener("click", limpiarRegistros);

    renderListaEstudiantes(); // Llamar a la función render para mostrar la lista de estudiantes
    renderListaAsignaturas(); // Llamar a la función render para mostrar la lista de asignaturas
    mostrarRegistros(); // Llama a la función para mostrar los registros de matriculaciones y desmatriculaciones
});