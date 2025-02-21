document.addEventListener("DOMContentLoaded", function () {
    const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    const asignaturas = JSON.parse(localStorage.getItem("asignaturas")) || [];

    function renderListaEstudiantes() {
        const listaEstudiantes = document.getElementById("listaEstudiantes");
        listaEstudiantes.innerHTML = "";
        estudiantes.forEach((estudiante) => {
            const li = document.createElement("li");
            const asignaturasEstudiante = estudiante.asignaturas.length > 0
                                            ? `<br> • ${estudiante.asignaturas.join("<br> • ")}`
                                            : "[Ninguna asignatura]";
            li.innerHTML = `${estudiante.id} &emsp; -> &emsp; ${estudiante.nombre}, ${estudiante.edad} a&ntilde;os <br>
                            Ubicaci&oacute;n: ${estudiante.direccion} <br>
                            Asignaturas del estudiante: ${asignaturasEstudiante}`;
            
            const eliminar = document.createElement("button");
            eliminar.textContent = "Desmatricular";
            eliminar.onclick = () => eliminarEstudiante(estudiante.id);
            listaEstudiantes.appendChild(li);
        });
    }

    function renderListaAsignaturas() {
        const listaAsignaturas = document.getElementById("listaAsignaturas");
        listaAsignaturas.innerHTML = "";
        asignaturas.forEach((asignatura, indice) => {
            const li = document.createElement("li");
            li.textContent = asignatura.nombreAsign;
            listaAsignaturas.appendChild(li);
        });
    }

    function crearEstudiante() {
        let nextId = estudiantes.length > 0 ?
                        Math.max(...estudiantes.map(est => est.id)) + 1 : 1;
        const nombre = document.getElementById("nombre").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const calle = document.getElementById("calle").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const piso = document.getElementById("piso").value.trim();
        const codPostal = document.getElementById("codPostal").value.trim();
        const provincia = document.getElementById("provincia").value.trim();
        const localidad = document.getElementById("localidad").value.trim();

        if (nombre && edad && codPostal.length === 5) {
            estudiantes.push({ id: nextId++, nombre, direccion: { calle, numero, piso, codPostal, provincia, localidad}, asignaturas: [], notas: {} });
            localStorage.setItem("nextId", nextId);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            renderListaEstudiantes();
        } else {
            alert("Debes rellenar todos los campos");
        }
    }

    function crearAsignatura() {
        const nombreAsign = document.getElementById("nombreAsignatura").value.trim();
        if (nombreAsign && !asignaturas.includes(nombreAsignatura)) {
            asignaturas.push(nombreAsignatura);
            localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
            renderListaAsignaturas();
        }
    }

    function eliminarEstudiante() {
        const id = document.getElementById("idEstudianteEliminar").value.trim();
        if (estudiantes.findIndex(est => est.id == id) == -1) {
            alert("Error durante el proceso de eliminación del estudiante");
        } else {
            estudiantes.splice(indice, 1);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            renderListaEstudiantes();
            alert("Estudiante eliminado sin errores");
        }
    }

    function eliminarAsignatura() {
        const nombreAsign = document.getElementById("asignaturaEliminar").value.trim();
        if (asignaturas.findIndex(asign => asign.nombreAsign == nombreAsign) == -1) {
            alert("Error durante el proceso de eliminación de la asignatura");
        } else {
            asignaturas.splice(indice, 1);
            estudiantes.forEach(estudiante => {
                estudiante.asignaturas = estudiante.asignaturas.filter(asign => asign.nombreAsign != nombreAsign);
            });
            localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            renderListaAsignaturas();
            renderListaEstudiantes();
            alert("Asignatura eliminada sin errores");
        }
    }

    function matricularEstudiante() {
        const idEst = document.getElementById("idEstudianteMatricular").value.trim();
        const nombreAsign = document.getElementById("asignaturaMatricular").value.trim();
        const estudiante = estudiantes.find(est => est.id == idEst);
        const asignatura = asignaturas.includes(nombreAsign);
        if (estudiante && asignatura) {
            estudiante.asignaturas.push(nombreAsign);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            renderListaEstudiantes();
            alert("Estudiante matriculado sin errores");
        }else{
            alert("Error durante el proceso de matriculación del estudiante");
        }
    }

    function desmatricularEstudiante() {
        const idEst = document.getElementById("idEstudianteDesmatricular").value.trim();
        const nombreAsign = document.getElementById("asignaturaDesmatricular").value.trim();
        const estudiante = estudiantes.find(est => est.id == idEst);
        if (estudiante) {
            estudiante.asignaturas = estudiante.asignaturas.filter(asign => asign.nombreAsign != nombreAsign);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            alert("Estudiante desmatriculado sin errores");
            renderListaEstudiantes();
        }else{
            alert("Error durante el proceso de desmatriculación del estudiante");
        }
    }

    function calificarEstudiante() {
        const idEst = document.getElementById("idEstudianteCalificar").value.trim();
        const nombreAsign = document.getElementById("asignaturaCalificar").value.trim();
        const nota = document.getElementById("nota").value.trim();
        const estudiante = estudiantes.find(est => est.id == idEst);
        const asignatura = asignaturas.includes(nombreAsign);
        if (estudiante && asignatura) {
            estudiante.notas[nombreAsign] = nota;
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            alert("Estudiante calificado sin errores");
        }else{
            alert("Error durante el proceso de calificación del estudiante");
        }
    }

    function promedioEstudiantes() {
        const idEst = document.getElementById("idEstudiantePromedio").value.trim();
        const estudiante = estudiantes.find(est => est.id == idEst);
        if (estudiante) {
            const notas = Object.values(estudiante.notas);
            const suma = notas.reduce((acc, nota) => acc + nota, 0);
            const promedio = Math.round(suma / notas.length);
            alert(`El promedio de notas del estudiante con id ${idEst} es: ${promedio}`);
        }else{
            alert("Error durante el proceso de cálculo del promedio de notas del estudiante");
        }
    }

    function promedioGeneral() {
        const calificaciones = estudiantes.map(est => Object.values(est.notas)).flat();
        const suma = calificaciones.reduce((acc, nota) => acc + nota, 0);
        const promedioGeneral = Math.round(suma / calificaciones.length);
        alert(`El promedio general de notas de todos los estudiantes es: ${promedioGeneral}`);
    }

    document.getElementById("crearEstudiante").addEventListener("click", crearEstudiante);
    document.getElementById("crearAsignatura").addEventListener("click", crearAsignatura);
    document.getElementById("eliminarEstudiante").addEventListener("click", eliminarEstudiante);
    document.getElementById("eliminarAsignatura").addEventListener("click", eliminarAsignatura);
    document.getElementById("matricularEstudianteAsignatura").addEventListener("click", matricularEstudiante);
    document.getElementById("desmatricularEstudianteAsignatura").addEventListener("click", desmatricularEstudiante);
    document.getElementById("calificarEstudianteAsignatura").addEventListener("click", calificarEstudiante);
    document.getElementById("promedioEstudiante").addEventListener("click", promedioEstudiantes);
    document.getElementById("promedioGeneral").addEventListener("click", promedioGeneral);

    renderListaEstudiantes();
    renderListaAsignaturas();
});