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
                            Ubicaci&oacute;n: ${estudiante.direccion.toString()} <br>
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
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const calle = document.getElementById("calle").value;
        const numero = document.getElementById("numero").value;
        const piso = document.getElementById("piso").value;
        const codPostal = document.getElementById("codPostal").value;
        const provincia = document.getElementById("provincia").value;
        const localidad = document.getElementById("localidad").value;
    }

});