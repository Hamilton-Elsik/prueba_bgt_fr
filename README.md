ProductsFr
Este proyecto fue generado con Angular CLI versión 18.2.11.

Versión de Node.js
Este proyecto fue probado con Node.js 21.7.3. Asegúrate de tener esta versión o una compatible instalada para evitar problemas.

Instala las dependencias con "npm i"

Servidor de desarrollo
Ejecuta "ng serve" para iniciar un servidor de desarrollo. Navega a http://localhost:4200/. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

Construcción
Ejecuta "ng build" para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio dist/.

Ejecución de pruebas unitarias
Ejecuta "npm run test" para ejecutar las pruebas unitarias utilizando Jest.
Para ejecutar las pruebas en modo de observación, usa "npm run test:watch".

Configuración de entorno
Asegúrate de que el archivo src/environments/environment.ts contenga la siguiente configuración para la URL de la API:

export const environment = {
apiUrl: 'http://localhost:8080/',
};
