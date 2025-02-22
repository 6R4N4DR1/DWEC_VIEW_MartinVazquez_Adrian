# Task 5.-Create a graphical interface

## SGAEA - Sistema de Gestión Académica

Este proyecto es un Sistema de Gestión Académica (SGAEA) que permite gestionar estudiantes y asignaturas, así como matricular y desmatricular estudiantes en asignaturas, calificar estudiantes y calcular promedios. La interfaz gráfica está construida utilizando HTML, CSS y JavaScript con DOM, y los datos se almacenan localmente utilizando el LocalStorage de la extensión LiveServer en el navegador Firefox.

## Características

- Crear, eliminar y listar estudiantes.
- Crear, eliminar y listar asignaturas.
- Matricular y desmatricular estudiantes en asignaturas.
- Calificar estudiantes en asignaturas.
- Calcular el promedio de un estudiante y el promedio general de todos los estudiantes.
- Registrar las acciones de matriculación y desmatriculación con fecha y hora.
- Limpiar los registros y el LocalStorage.

## Tecnologías usadas

- Navegador Firefox con extensión LiveServer que tiene soporte para LocalStorage.
- HTML, CSS y JavaScript con DOM.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web (recomiendo el uso de la extensión LiveServer en este caso, para el correcto uso del localStorage).

## Uso

###### NOTA: No se ha realizado ni la función buscar ni la función reportes debido a que la lista de estudiantes siempre se muestra y no es necesario en este caso.

### Crear Estudiante

1. Rellena los campos del formulario de creación de estudiante.
2. Haz clic en el botón "Crear estudiante".
3. El estudiante se añadirá a la lista de estudiantes registrados.

### Crear Asignatura

1. Rellena el campo del nombre de la asignatura.
2. Haz clic en el botón "Crear asignatura".
3. La asignatura se añadirá a la lista de asignaturas.

### Eliminar Estudiante

1. Introduce el ID del estudiante que deseas eliminar.
2. Haz clic en el botón "Eliminar".
3. El estudiante se eliminará de la lista de estudiantes registrados.

### Eliminar Asignatura

1. Introduce el nombre de la asignatura que deseas eliminar.
2. Haz clic en el botón "Eliminar".
3. La asignatura se eliminará de la lista de asignaturas.

### Matricular Estudiante

1. Introduce el ID del estudiante y el nombre de la asignatura en la que deseas matricular al estudiante.
2. Haz clic en el botón "Matricular".
3. El estudiante se matriculará en la asignatura seleccionada.

### Desmatricular Estudiante

1. Introduce el ID del estudiante y el nombre de la asignatura de la que deseas desmatricular al estudiante.
2. Haz clic en el botón "Desmatricular".
3. El estudiante se desmatriculará de la asignatura seleccionada.

### Calificar Estudiante

1. Introduce el ID del estudiante, el nombre de la asignatura y la nota que deseas añadir.
2. Haz clic en el botón "Calificar".
3. La nota se añadirá a la lista de notas de la asignatura del estudiante.

### Calcular Promedio de un Estudiante

1. Introduce el ID del estudiante cuyo promedio deseas calcular.
2. Haz clic en el botón "Calcular".
3. El promedio del estudiante se mostrará en un alert.

### Calcular Promedio General

1. Haz clic en el botón "Calcular" en la sección de Promedio General.
2. El promedio general de todos los estudiantes se mostrará en un alert.

### Limpiar LocalStorage

1. Haz clic en el botón "Limpiar listas".
2. El LocalStorage se limpiará y la página se recargará.

### Limpiar Registros

1. Haz clic en el botón "Borrar caché de registros".
2. Los registros de matriculaciones y desmatriculaciones se limpiarán.

## Estructura del Proyecto

-`index.html`: Contiene la estructura HTML de la interfaz gráfica.

-`css/estilos.css`: Contiene los estilos CSS para la interfaz gráfica.

-`js/script.js`: Contiene la lógica JavaScript para gestionar estudiantes, asignaturas, matriculaciones, desmatriculaciones, calificaciones y promedios.

## Contribuciones

Si deseas contribuir, puedes hacerlo de este modo:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
