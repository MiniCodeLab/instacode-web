import { render, screen } from '@testing-library/react';
import React from 'react';
import { AuthContext, authContextInitialState } from '../context/auth';
import Navbar from './Navbar';

// TODO: Remove when we have support for import.meta in tests
jest.mock('../context/auth/useAuth', () => ({
  initialState: {},
  default: () => ({})
}));

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...props }: { children: React.ReactNode }) => <a {...props}>{children}</a>,
  NavLink: ({ children, ...props }: { children: React.ReactNode }) => <a {...props}>{children}</a>
}));

describe('Navbar', () => {
  it('return null when user is not authenticated', () => {
    render(
      <AuthContext.Provider
        value={{
          ...authContextInitialState,
          authenticated: false
        }}
      >
        <Navbar />
      </AuthContext.Provider>
    );

    const logoutButton = screen.queryByText('Logout');
    expect(logoutButton).not.toBeInTheDocument();
  });

  it('renders the component user is authenticated', () => {
    render(
      <AuthContext.Provider
        value={{
          ...authContextInitialState,
          authenticated: true
        }}
      >
        <Navbar />
      </AuthContext.Provider>
    );

    const logoutButton = screen.queryByText('Logout');
    // TODO: Change to .toBeVisible when fixing the styled error
    expect(logoutButton).toBeInTheDocument();

    const createSnippetLink = screen.queryByText('Crear Snippet');
    expect(createSnippetLink).toBeInTheDocument();
    expect(createSnippetLink).toHaveAttribute('to', '/create/snippet');

    const editProfileLink = screen.queryByText('Editar Perfil');
    expect(editProfileLink).toBeInTheDocument();
    expect(editProfileLink).toHaveAttribute('to', '/edit/profile');

    const logoImage = screen.queryByAltText('logo instacode');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/logo-instacode.png');
  });
});
