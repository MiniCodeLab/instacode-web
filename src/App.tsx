import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/auth';
import { SnippetContextProvider } from './context/snippet';
import Authenticate from './pages/Authenticate';
import SnippetFormPage from './pages/SnippetFormPage';
import Snippets from './pages/Snippets';
import StyleGuide from './pages/StyleGuide';
import { Error } from './ui/Error';
import { Layout } from './ui/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AuthContextProvider>
          <SnippetContextProvider>
            {/* TODO: Insert Header here 🎯 */}

            <Navbar />

            <Routes>
              <Route index element={<Authenticate />} />

              <Route path="create">
                <Route
                  path="snippet"
                  element={
                    <ProtectedRoute>
                      <SnippetFormPage />
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route path="edit">
                <Route
                  path="snippet/:id"
                  element={
                    <ProtectedRoute>
                      <SnippetFormPage isEdit />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <h1>Edit Profile</h1>
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route
                path="snippets"
                element={
                  <ProtectedRoute>
                    <Snippets />
                  </ProtectedRoute>
                }
              />

              <Route path="styleguide" element={<StyleGuide />} />
              <Route path="*" element={<Error size="xl">404 | No encontrado</Error>} />
            </Routes>
          </SnippetContextProvider>
        </AuthContextProvider>
      </Layout>

      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

export default App;
