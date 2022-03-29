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
- [X] Config de Eslint
  - npx eslint --init
  - npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
- [x] Config de Jest
- [X] Config de Husky
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

- [] Refactor del registro

  - [-] Crear hook de autenticación
  - [X] Crear servicio API
  - [X] Guardar datos del user en Context
  - [X] Guardar token en localstorage
  - [] Crear función getUserInfo que traiga la informacion del user logeado

- [] Añadir forms y pantalla de Registro y login
  - [] Registro
  - [] Login
  - [] Añadir ruta /codes protegida 

