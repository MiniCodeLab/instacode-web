import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/auth.context';
import Authenticate from './pages/Authenticate';
import Snippets from './pages/Snippets';
import StyleGuide from './pages/StyleGuide';
import { Error } from './ui/Error';
import { Layout } from './ui/Layout';

function App() {
  return (
    <Layout>
      <AuthContextProvider>
        {/* TODO: Insert Header here 🎯 */}

        <BrowserRouter>
          <Routes>
            <Route index element={<Authenticate />} />

            <Route path="edit" element={<Navigate to="/" />}>
              <Route
                path="snippet"
                element={
                  <ProtectedRoute>
                    <h1>Edit Snippet</h1>
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
      </AuthContextProvider>
    </Layout>
  );
}

export default App;
