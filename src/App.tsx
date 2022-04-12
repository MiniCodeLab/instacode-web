import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/auth.context';
import { SnippetContextProvider } from './context/snippet.context';
import Authenticate from './pages/Authenticate';
import SnippetFormPage from './pages/SnippetFormPage';
import Snippets from './pages/Snippets';
import StyleGuide from './pages/StyleGuide';
import { Error } from './ui/Error';
import { Layout } from './ui/Layout';

function App() {
  return (
    <>
      <Layout>
        <AuthContextProvider>
          <SnippetContextProvider>
            {/* TODO: Insert Header here 🎯 */}

            <Navbar />

            <BrowserRouter>
              <Routes>
                <Route index element={<Authenticate />} />

                <Route path="edit">
                  <Route
                    path="snippet"
                    element={
                      <ProtectedRoute>
                        <SnippetFormPage />
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
            </BrowserRouter>
          </SnippetContextProvider>
        </AuthContextProvider>
      </Layout>

      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
