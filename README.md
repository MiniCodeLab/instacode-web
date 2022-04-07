# InstaCode Web - MiniCodeLab

### Lista de tareas pendientes:

- [x] Instalar `React Router`
- [x] Instalar `axios`
- [x] Instalar `React Hook Form`
- [x] Instalar `emotion` (alternativa a `styled-components`)
  - npm install @emotion/react
  - npm install @emotion/styled
  - Añadir config en el plugin de react

---

- [x] Crear design system sobre Emotion
  - Crear variables globales de CSS
  - Importar las fonts del proyecto Roboto (regular & bold)
- [x] Crear sistema de routing con react-router-dom
- [x] Crear componente ruta protegida
- [] Autenticarnos con la API
  - [x] Registrarse
  - [] Logearse

## Próximo día:

- [x] Config de Prettier
- [x] Config de Eslint
  - npx eslint --init
  - npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
- [x] Config de Jest
- [x] Config de Husky

  - npm i -D husky lint-staged

  ```
  "husky": {
      "precommit": "lint-staged"
    },
  "lint-staged": {
    "\*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --quiet --fix",
      "jest --passWithNoTests"
    ]
  }
  ```

- [x] Refactor del registro

  - [-] Crear hook de autenticación
  - [x] Crear servicio API
  - [x] Guardar datos del user en Context
  - [x] Guardar token en localstorage

---

- [x] Crear componentes para el formulario

  - Input
  - Select
  - Form
  - Botón
  - AuthenticateLayout

- [x] Añadir forms y pantalla de Registro y login
  - [x] Registro
  - [x] Login
  - [x] Añadir redireccion a la ruta /styleguide

---

- [] Refactor Formularios
  - [] Componetizar los inputs de forma más genérica
  - [] HOC para que los users logeados no entren en Authenticate
  - [] Controlar los errores generales del form
- [x] Propagar email de registro a login
- [x] Cargar datos de usuario al cargar la aplicación
- [x] Crear las vistas de las rutas protegidas
- [x] Crear componente lista de codes
  - [x] Crear componente Code Snippet

---

- Snippets:
  - [] Conectarse con la API para traer snippets
  - [] Añadir paginación **BONUS**
  - [] Formulario para crear snippets
  - [] Filtro por tags
  - [] Cargar los tags desde la API

---

