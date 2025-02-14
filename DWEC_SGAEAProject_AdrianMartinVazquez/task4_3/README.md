# DWEC_SGAEAProject_AdrianMartinVazquez/README.md

# SGAEA

Este proyecto es un Sistema de Gestión Académica desarrollado por mí, Adrián Martín Vázquez. Proporciona funcionalidades para gestionar registros de estudiantes y asignaturas, incluyendo la creación, eliminación y matriculación de estudiantes.

## Características

- Crear y gestionar estudiantes
- Matricular y dar de baja estudiantes
- Calificar estudiantes
- Buscar por los detalles de un estudiante
- Ver informes y promedios

## Instalación

### Instalación de Node.js

Para ejecutar este proyecto, necesitas tener Node.js instalado en tu 	máquina. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

### Instalación de JSDoc

JSDoc es una herramienta que genera documentación a partir de comentarios en el código fuente. Para instalar JSDoc, primero asegúrate de tener Node.js instalado y luego ejecuta el siguiente comando en tu terminal:

```bash
npm install -g jsdoc
```

## Clonar el repositorio e instalar dependencias

Clona el repositorio y navega al directorio del proyecto:

```bash
git clone <repository-url>
cd adrian-js-project
```

Instala las dependencias del proyecto:

```bash
npm install
```

## Uso

### Generar documentación con JSDoc

Para generar la documentación del proyecto usando JSDoc, puedes utilizar los scripts definidos en el archivo [package.json](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html). Ejecuta el siguiente comando para limpiar y generar la documentación:

```bash
npm run docs
```

Esto ejecutará los siguientes pasos:

1. Limpiará la carpeta `docs` existente.
2. Generará nueva documentación basada en los comentarios JSDoc en el código fuente.

### Iniciar la aplicación

Para iniciar la aplicación, usa este comando:

```bash
node script4_3.js
```

## Descripción del script del proyecto

El script contiene la implementación principal del Sistema de Gestión Académica de Estudiantes y Asignaturas (SGAEA). Aquí hay un resumen de lo que hace cada sección del código:

### Clases y Métodos

1. **Clase [Direccion](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)** : Representa una dirección con atributos como calle, número, piso, código postal, provincia y localidad. Incluye validaciones para cada atributo y métodos getter para acceder a ellos.
2. **Clase [Persona](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)** : Clase base para representar una persona con nombre, edad y dirección. Incluye validaciones para los atributos y métodos getter.
3. **Clase [Estudiante](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)** : Hereda de [Persona](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) y añade atributos específicos como ID, asignaturas y registros de matriculación/desmatriculación. Incluye métodos para matricular, desmatricular, calificar y calcular el promedio de notas.
4. **Clase [Asignatura](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)** : Representa una asignatura con nombre y calificaciones. Incluye métodos para agregar, eliminar calificaciones y calcular el promedio de las calificaciones.
5. **Clase [ListaEstudiantes](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)** : Gestiona una lista de estudiantes. Incluye métodos para agregar, eliminar, buscar estudiantes y calcular el promedio general de calificaciones.
6. **Clase [ListaAsignaturas](vscode-file://vscode-app/c:/Users/adria/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)** : Gestiona una lista de asignaturas. Incluye métodos para agregar, eliminar y ver asignaturas.

### Bucle Principal

El bucle principal del programa muestra un menú interactivo en la consola, permitiendo al usuario realizar diversas operaciones como crear, eliminar, matricular, desmatricular, calificar estudiantes, buscar estudiantes, ver registros y promedios, y generar reportes.

### Manejo de Errores

Se han añadido bloques `try...catch` en los métodos de las clases y en el bucle principal para capturar y mostrar errores en la consola, mejorando la robustez del programa.

## Licencia

Este proyecto tiene licencia ISC.
