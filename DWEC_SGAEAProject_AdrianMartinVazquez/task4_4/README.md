# SGAEA - Sistema de Gestión Académica de Estudiantes y Asignaturas

## Descripción

Este proyecto es un Sistema de Gestión Académica desarrollado por mí, Adrián Martín Vázquez. Proporciona gestión de registros de estudiantes y asignaturas, incluyendo la creación, eliminación y matriculación de estudiantes.

## Cambios Realizados en la Carpeta del Proyecto `task4_4`

En la carpeta `task4_4`, se han realizado los siguientes cambios significativos frente al proyecto original:

1.**Modularización del Código**:

- Se han dividido las clases en módulos separados para mejorar la organización y mantenibilidad del código.
- Cada clase se encuentra en su propio archivo dentro de la carpeta `models`.
- Se han utilizado las palabras clave `import` y `export` para gestionar las dependencias entre los módulos.

2.**Estructura de Archivos**:

- La estructura de archivos ahora es la siguiente:

  ```
  task4_4/

  ├── src/

  │   ├── models/

  │   │   ├── [Direccion.js]

  │   │   ├── [Persona.js]

  │   │   ├── [Estudiante.js]

  │   │   ├── [Asignatura.js]

  │   │   ├── [ListaEstudiantes.js]

  │   │   └── [ListaAsignaturas.js]

  │   └── [script4_4.js]

  ```

3.**Manejo de Errores**:

- Se han añadido bloques `try...catch` en los métodos de las clases y en el bucle principal del programa para capturar y mostrar errores en la consola.
- Se han añadido `throw new Error()` en los métodos de las clases y en sus constructores para lanzar errores predecibles e impredecibles.

4.**Comentarios y Documentación**:

- Se han añadido comentarios detallados en el código para explicar la funcionalidad de cada clase y método.
- Se ha utilizado JSDoc para generar documentación a partir de los comentarios en el código.

## Instalación

### Instalación de Node.js

Para ejecutar este proyecto, necesitas tener Node.js instalado en tu máquina. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

### Instalación de JSDoc

JSDoc es una herramienta que genera documentación a partir de comentarios en el código fuente. Para instalar JSDoc, primero asegúrate de tener Node.js instalado y luego ejecuta el siguiente comando en tu terminal:

```bash
npm install -g jsdoc
```

### Clonar el Repositorio e Instalar Dependencias

Clona el repositorio y navega al directorio del proyecto:

```bash
git clone <url-de-repositorio-de-Adrian>
cd DWEC_SGAEAProject_AdrianMartinVazquez/task4_4
```

Instala las dependencias del proyecto:

```bash
npm install
```

## Uso

### Iniciar la Aplicación

Para iniciar la aplicación, usa este comando:

```bash
node src/script4_4.js
```

## Licencia

Este proyecto tiene licencia ISC.
