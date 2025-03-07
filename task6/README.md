# Tarea 6 - Asincronía

## Descripción del Proyecto

Este proyecto es una tarea de Asincronía que utiliza JavaScript, jQuery y Tailwind CSS para crear una página web que muestra imágenes de perros obtenidas de una API. La página incluye dos archivos HTML (`index.html` y `jquery.html`), cada uno con su propio script para manejar la lógica de la aplicación.

## Estructura del Proyecto

-`css/`: Contiene los archivos CSS, incluyendo el archivo de entrada `estilos.css` y el archivo de salida `output.css` generado por Tailwind CSS.

-`index.html`: Página principal que utiliza JavaScript puro.

-`jquery.html`: Página que utiliza jQuery.

-`js/`: Contiene los archivos JavaScript para ambas páginas (`script.js` y `script-jquery.js`).

## Flujo de Trabajo

1.**Configuración del Entorno**: Asegúrate de tener Node.js y npm instalados en tu máquina.

2.**Instalación de Dependencias**: Ejecuta `npm install` para instalar las dependencias necesarias listadas en `package.json`.

3.**Compilación de CSS**: Utiliza el comando `npm run build:css` para compilar los estilos de Tailwind CSS desde `estilos.css` a `output.css`.

4.**Ejecución del Proyecto**: Abre `index.html` o `jquery.html` en tu navegador para ver la aplicación en funcionamiento.

## Configuración

### Dependencias

El proyecto utiliza las siguientes dependencias:

-`@tailwindcss/forms`: Plugin de Tailwind CSS para formularios.

-`flowbite`: Biblioteca de componentes UI.

-`jquery`: Biblioteca JavaScript.

-`tailwindcss`: Framework CSS.

### Scripts

-`build:css`: Compila los estilos de Tailwind CSS.

### Tailwind CSS

El archivo `tailwind.config.js` está configurado para extender los colores y el espaciado, y para incluir los plugins necesarios.

```js
/** @type{import('tailwindcss').Config} */

module.exports= {

  content: ["./fuente/**/*.{html,js}"],

  theme: {

    extend: {

      colors:{

        'rojo': {

          claro: '#ffcccc',

          normal: '#ff6666',

          oscuro: '#cc0000'

        }

      },

      spacing:{

        '27xl': '120rem'

      },

      screen:{

        '5xl': '2000px'

      }

    },

  },

  plugins: [

    require('@tailwindcss/forms'),

    require('flowbite/plugin'),

  ],

}

```

## Uso

1.**Abrir la Página**: Abre `index.html` o `jquery.html` en tu navegador con Live Server.

2.**Interacción**: La página cargará automáticamente imágenes de perros desde la API y las mostrará en un contenedor. Al hacer scroll hasta el final de la página, se cargarán más imágenes automáticamente.

## Comandos

Para configurar y ejecutar el proyecto en otra máquina, sigue estos pasos:

1. Clona el repositorio:

   ```sh

   git clone <URL_DEL_REPOSITORIO>

   cd <NOMBRE_DEL_REPOSITORIO>

   ```
2. Instala las dependencias:

   ```sh

   npm install

   ```
3. Compila los estilos de Tailwind CSS:

   ```sh

   npm run build:css

   ```
4. Abre `index.html` o `jquery.html` en tu navegador con Live Server para ver la aplicación en funcionamiento.

## Componentes de Flowbite Utilizados

He usado los siguientes componentes de Flowbite:

1.**Header Breadcrumb**: He utilizado el componente de breadcrumb en el header y lo he modificado para eliminar los datos que sobraban y los div y span que inyectaban los he cambiado por section. Aquí está el enlace al componente: [Flowbite Header Breadcrumb](https://flowbite.com/docs/components/breadcrumb/#header-breadcrumb).

2.**Default Footer**: He utilizado el componente de footer por defecto de Tailwind CSS y lo he modificado para eliminar los datos que sobraban y los div y span que inyectaban los he cambiado por section. Aquí está el enlace al componente: [Flowbite Default Footer](https://flowbite.com/docs/components/footer/#default-footer).
