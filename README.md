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

- [x] Propagar email de registro a login
- [x] Cargar datos de usuario al cargar la aplicación
- [x] Crear las vistas de las rutas protegidas
- [x] Crear componente lista de codes
  - [x] Crear componente Code Snippet

---

- Snippets:
  - [x] Conectarse con la API para traer snippets
  - [x] Formulario para crear snippets

---

## Refactors pendientes:

- [x] Snippets 🎉

  - [x] Filtro por lenguaje
  - [x] Añadir toast para errores - `npm install --save react-toastify`
  - [x] Añadir paginación
  - [x] Scroll para snippets

- [] General
- 
  - [x] Crear la navbar con botón de logout
  - [X] Vista de crear Snippet
  - [X] Vista de edición de perfil
  - [] Refactor general de estilos
  - [X] Despliegue a prod en Vercel

---

- [X][] Añadir tests con RTL
- [] Refactor general del backend

- [] Refactor Formularios

  - [] Componetizar los inputs de forma más genérica
  - [] HOC para que los users logeados no entren en Authenticate
  - [] Controlar los errores generales del form

---

- [] Cuando creamos snippet, redirigir a /snippets?mode=owner
- [] Añadir emoji a la navbar
- [] Crear edición de perfil/contraseña - BE & FE
- [] Arreglar recarga en cualquier ruta del despliegue
- [] Maquetar snippets para hacer un masonry