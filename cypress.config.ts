import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

// esta seccion es para tareas que se ejecutan en Node, no en el browser
//  sevuleve util para cuadno tenga una base de datos real o necesite leer archivos del sistema, etc.

// Leer/escribir archivos del sistema
// Conectarse directo a una BD
// Variables de entorno secretas
// Llamar a servicios externos

// e2e: {
//   setupNodeEvents(on, config) {
    
   // 1. Tareas personalizadas (leer archivos, BD, etc.)
//     on('task', {
//       log(message) {
//         console.log(message)
//         return null
//       },
//       readDB(query) {
       // consulta a base de datos
//       }
//     })

    // 2. Modificar config según entorno
//     config.baseUrl = process.env.BASE_URL || 'http://localhost:3000'
//     return config

    // 3. Plugins de cobertura de código
//     require('@cypress/code-coverage/task')(on, config)

   // 4. Preprocesadores (webpack, esbuild, etc.)
//     on('file:preprocessor', webpackPreprocessor(options))

    // 5. Eventos del browser
//     on('before:browser:launch', (browser, launchOptions) => {
      // modificar flags del browser
//     })
//   }
// }
