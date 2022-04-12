import { Snippet } from '../types/snippet.types';

export const JSX_SNIPPET: Snippet = {
  _id: '625494054d34d7af58e29b86',
  title: 'How to use react-toastify',
  code: "  import React from 'react';\n\n  import { ToastContainer, toast } from 'react-toastify';\n  import 'react-toastify/dist/ReactToastify.css';\n  \n  function App(){\n    const notify = () => toast(\"Wow so easy!\");\n\n    return (\n      <div>\n        <button onClick={notify}>Notify!</button>\n        <ToastContainer />\n      </div>\n    );\n  }",
  language: 'jsx',
  author: {
    _id: '6254932edebb04798f479670',
    username: 'minicode-real-no-fake',
    email: 'minicodelab+6@minicodelab.com',
    password: '$2b$10$xY6.T1wgGgiVJwMRjeVBOuwxBPpX4FsnmnMNCvgnZqTx6Svlo0nA6',
    emoji: '✨',
    codes: [],
    favCodes: [],
    createdAt: '2022-04-11T20:44:30.934Z',
    updatedAt: '2022-04-11T20:44:30.934Z'
  },
  description: 'Instructions to call toastify on you page when clicking a button',
  likes: [],
  createdAt: '2022-04-11T20:48:05.073Z',
  updatedAt: '2022-04-11T20:48:05.073Z'
};

export const SNIPPETS_RESPONSE: Snippet[] = [
  JSX_SNIPPET,
  {
    _id: '625490024b4f56dfb657f6e9',
    title: 'Prueba 3: Snippet Form Page code',
    code: 'const SnippetFormPage = () => {\n\n  return (\n    <div>\n      <h1>Crea un nuevo snippet</h1>\n    </div>\n  );\n};',
    language: 'tsx',
    author: {
      _id: '62461328bd05ae1abe9b1a16',
      username: 'minicode-test',
      email: 'minicodelab+4@minicodelab.com',
      password: '$2b$10$bcyWVq4dEhe0d69Qf1KUEuU2EcBrVqVyQhXH27p/RFD.jTIf.HCz.',
      emoji: '✨',
      codes: [],
      favCodes: [],
      createdAt: '2022-03-31T20:46:33.031Z',
      updatedAt: '2022-03-31T20:46:33.031Z'
    },
    description: 'Código para renderizar el formulario de snippets 💃',
    likes: [],
    createdAt: '2022-04-11T20:30:58.389Z',
    updatedAt: '2022-04-11T20:30:58.389Z'
  },
  {
    _id: '62548f6ca42d5cc75a515174',
    title: 'Prueba 2: Snippet Form Page code',
    code: 'const SnippetFormPage = () => {\n  const { createSnippet } = useContext(SnippetContext);\n  const navigate = useNavigate();\n\n  return (\n    <div>\n      <h1>Crea un nuevo snippet</h1>\n    </div>\n  );\n};',
    language: 'tsx',
    author: {
      _id: '62461328bd05ae1abe9b1a16',
      username: 'minicode-test',
      email: 'minicodelab+4@minicodelab.com',
      password: '$2b$10$bcyWVq4dEhe0d69Qf1KUEuU2EcBrVqVyQhXH27p/RFD.jTIf.HCz.',
      emoji: '✨',
      codes: [],
      favCodes: [],
      createdAt: '2022-03-31T20:46:33.031Z',
      updatedAt: '2022-03-31T20:46:33.031Z'
    },
    description: 'Código para renderizar el formulario de snippets 💃',
    likes: [],
    createdAt: '2022-04-11T20:28:28.952Z',
    updatedAt: '2022-04-11T20:28:28.952Z'
  },
  {
    _id: '62548f0fa42d5cc75a51516e',
    title: 'Snippet Form Page code',
    code: "const SnippetFormPage = () => {\n  const { createSnippet } = useContext(SnippetContext);\n  const navigate = useNavigate();\n\n  return (\n    <div>\n      <h1>Crea un nuevo snippet</h1>\n      <SnippetForm\n        onSubmit={async (values: SnippetParams) => {\n          createSnippet(values).then((status: boolean) => {\n            if (status) {\n              navigate('/snippets');\n            }\n          });\n        }}\n      />\n    </div>\n  );\n};",
    language: 'tsx',
    author: {
      _id: '62461328bd05ae1abe9b1a16',
      username: 'minicode-test',
      email: 'minicodelab+4@minicodelab.com',
      password: '$2b$10$bcyWVq4dEhe0d69Qf1KUEuU2EcBrVqVyQhXH27p/RFD.jTIf.HCz.',
      emoji: '✨',
      codes: [],
      favCodes: [],
      createdAt: '2022-03-31T20:46:33.031Z',
      updatedAt: '2022-03-31T20:46:33.031Z'
    },
    description: 'Código para renderizar el formulario de snippets 💃',
    likes: [],
    createdAt: '2022-04-11T20:26:55.072Z',
    updatedAt: '2022-04-11T20:26:55.072Z'
  },
  {
    _id: '62548af6a42d5cc75a515150',
    title: 'Console log example',
    code: "console.log('Hola MiniCoders! ✨⚡')\n",
    language: 'javascript',
    author: {
      _id: '62461328bd05ae1abe9b1a16',
      username: 'minicode-test',
      email: 'minicodelab+4@minicodelab.com',
      password: '$2b$10$bcyWVq4dEhe0d69Qf1KUEuU2EcBrVqVyQhXH27p/RFD.jTIf.HCz.',
      emoji: '✨',
      codes: [],
      favCodes: [],
      createdAt: '2022-03-31T20:46:33.031Z',
      updatedAt: '2022-03-31T20:46:33.031Z'
    },
    description: 'Un console log muy chulo',
    likes: [],
    createdAt: '2022-04-11T20:09:26.118Z',
    updatedAt: '2022-04-11T20:09:26.118Z'
  }
];
