console.log("Script cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {
    const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    const asignaturas = JSON.parse(localStorage.getItem("asignaturas")) || [];
    const registros = JSON.parse(localStorage.getItem("registros")) || { matriculaciones: [], desmatriculaciones: [] };
    let idCounter = parseInt(localStorage.getItem("idCounter")) || 1;

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

    function renderListaAsignaturas() {
        const ulListaAsignaturas = document.getElementById("listaAsignaturas");
        ulListaAsignaturas.innerHTML = ""; // Limpia la lista de asignaturas

        asignaturas.forEach(asignatura => {
            const li = document.createElement("li");
            li.textContent = asignatura.nombre;
            ulListaAsignaturas.appendChild(li);
        });
    }

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

    function limpiarFormCrearAsign() {
        document.getElementById("nombreAsignatura").value = "";
    }

    function validarDNI(dni) {
        const dniRegex = /^\d{8}[A-Za-z]$/;
        return dniRegex.test(dni);
    }

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

        if(!dni || !nombre || !edad || !direccion.calle || !direccion.numero || !direccion.codPostal || !direccion.provincia || !direccion.localidad){
            alert("Todos los campos son obligatorios o estas cometiendo faltas ortografía. Prueba de nuevo");
            return;
        }

        if (!validarDNI(dni)){
            alert("El DNI no es válido. Prueba de nuevo");
            return;
        }

        if(estudiantes.some(est => est.dni === dni)){
            alert("El estudiante ya está registrado. Prueba con otro");
            limpiarFormCrearEst();
            return;
        }

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

    function crearAsignatura() {
        const nombreAsign = document.getElementById("nombreAsignatura").value.trim();

        if (!nombreAsign) {
            alert("El nombre de la asignatura es obligatorio. Prueba de nuevo");
            return;
        }

        if (asignaturas.some(asign => asign.nombre === nombreAsign)) {
            alert("La asignatura ya está registrada. Prueba con otro nombre");
            limpiarFormCrearAsign();
            return;
        }

        const asignatura = {
            nombre: nombreAsign
        };

        asignaturas.push(asignatura);
        localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
        alert("Asignatura creada sin errores");
        renderListaAsignaturas();
        limpiarFormCrearAsign();
    }

    function limpiarFormEliminarEst() {
        document.getElementById("idEstudianteEliminar").value = "";
    }

    function limpiarFormEliminarAsign() {
        document.getElementById("asignaturaEliminar").value = "";
    }

    function restablecerIds() {
        estudiantes.forEach((estudiante, index) => {
            estudiante.id = `E${index + 1}`;
        });
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        idCounter = estudiantes.length + 1; // Actualizar el idCounter
        localStorage.setItem("idCounter", idCounter);
        renderListaEstudiantes();
    }

    function eliminarEstudiante() {
        const idEstudianteEliminar = document.getElementById("idEstudianteEliminar").value.trim();
    
        if (!idEstudianteEliminar) {
            alert("El ID del estudiante es obligatorio. Prueba de nuevo");
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

    function eliminarAsignatura() {
        const nombreAsignaturaEliminar = document.getElementById("asignaturaEliminar").value.trim();
    
        if (!nombreAsignaturaEliminar) {
            alert("El nombre de la asignatura es obligatorio. Prueba de nuevo");
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

    function limpiarRegistros() {
        registros.matriculaciones = [];
        registros.desmatriculaciones = [];
        localStorage.setItem("registros", JSON.stringify(registros));
        mostrarRegistros();
    }

    function limpiarFormMatricularEst() {
        document.getElementById("idEstudianteMatricular").value = "";
        document.getElementById("asignaturaMatricular").value = "";
    }

    function limpiarFormDesmatricularEst() {
        document.getElementById("idEstudianteDesmatricular").value = "";
        document.getElementById("asignaturaDesmatricular").value = "";
    }

    function matricularEstudiante() {
        const idEstudianteMatricular = document.getElementById("idEstudianteMatricular").value.trim();
        const nombreAsignaturaMatricular = document.getElementById("asignaturaMatricular").value.trim();

        if (!idEstudianteMatricular || !nombreAsignaturaMatricular) {
            alert("El ID del estudiante y el nombre de la asignatura son obligatorios. Prueba de nuevo");
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

    function desmatricularEstudiante() {
        const idEstudianteDesmatricular = document.getElementById("idEstudianteDesmatricular").value.trim();
        const nombreAsignaturaDesmatricular = document.getElementById("asignaturaDesmatricular").value.trim();

        if (!idEstudianteDesmatricular || !nombreAsignaturaDesmatricular) {
            alert("El ID del estudiante y el nombre de la asignatura son obligatorios. Prueba de nuevo");
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

    function limpiarFormCalificarEst() {
        document.getElementById("idEstudianteCalificar").value = "";
        document.getElementById("asignaturaCalificar").value = "";
        document.getElementById("nota").value = "";
    }

    function calificarEstudiante() {
        const idEstudianteCalificar = document.getElementById("idEstudianteCalificar").value.trim();
        const nombreAsignaturaCalificar = document.getElementById("asignaturaCalificar").value.trim();
        const nota = parseFloat(document.getElementById("nota").value.trim());
    
        if (!idEstudianteCalificar || !nombreAsignaturaCalificar || isNaN(nota)) {
            alert("El ID del estudiante, el nombre de la asignatura y la nota son obligatorios. Prueba de nuevo");
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

    function limpiarFormPromedioEst() {
        document.getElementById("idEstudiantePromedio").value = "";
    }

    function promedioEstudiante() {
        const idEstudiantePromedio = document.getElementById("idEstudiantePromedio").value.trim();
    
        if (!idEstudiantePromedio) {
            alert("El ID del estudiante es obligatorio. Prueba de nuevo");
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

    document.getElementById("crearEstudiante").addEventListener("click", crearEstudiante);
    document.getElementById("crearAsignatura").addEventListener("click", crearAsignatura);
    document.getElementById("eliminarEstudiante").addEventListener("click", eliminarEstudiante);
    document.getElementById("eliminarAsignatura").addEventListener("click", eliminarAsignatura);
    document.getElementById("matricularEstudianteAsignatura").addEventListener("click", matricularEstudiante);
    document.getElementById("desmatricularEstudianteAsignatura").addEventListener("click", desmatricularEstudiante);
    document.getElementById("calificarEstudianteAsignatura").addEventListener("click", calificarEstudiante);
    document.getElementById("promedioEstudiante").addEventListener("click", promedioEstudiante);
    document.getElementById("promedioGeneral").addEventListener("click", gpaGeneral);

    document.getElementById("clearLocalStorage").addEventListener("click", function() {
        localStorage.clear();
        alert("LocalStorage limpiado");
        location.reload(); // Recargar la página para aplicar los cambios
    });

    document.getElementById("limpiarRegistros").addEventListener("click", limpiarRegistros);

    renderListaEstudiantes(); // Llamar a la función render para mostrar la lista de estudiantes
    renderListaAsignaturas(); // Llamar a la función render para mostrar la lista de asignaturas
    mostrarRegistros();
});