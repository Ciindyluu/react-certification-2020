import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../../pages/Login/Login.page';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import TopNavBar from '../../../components/NavBar/NavBar';
import useVideo, { VideoProvider } from '../../../providers/Video/Video.provider';

const customProvider = (ui) => {
  return render(
    <BrowserRouter>
      <AuthProvider>{ui}</AuthProvider>
    </BrowserRouter>
  );
};

describe('Login test', () => {
  test('Test if login renders', async () => {
    await act(async () => {
      customProvider(<LoginPage />);
    });
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});

describe('Login test', () => {
  test('test for succesful login', async () => {
    await act(async () => {
      customProvider(<LoginPage />);
    });
    fireEvent.change(screen.getByTestId('username'), {
      target: {
        value: 'cindy',
      },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: {
        value: 'olivas',
      },
    });
    fireEvent.click(screen.getByText('Sign In'));
  });
});

const state = {
  authenticated: true,
  logout: false,
  searchTerm: 'wizeline',
  searchHandler: 'wizeline',
};

describe('Login test', () => {
  test('test if top navbar renders on main page after login', async () => {
    await act(async () => {
      customProvider(<LoginPage />);
    });
    await act(async () => {
      fireEvent.change(screen.getByTestId('username'), {
        target: {
          value: 'cindy',
        },
      });
      fireEvent.change(screen.getByTestId('password'), {
        target: {
          value: 'olivas',
        },
      });
      fireEvent.click(screen.getByRole('button'));
    });

    await act(async () => {
      customProvider(<TopNavBar {...state} />);
    });
    const renderAgain = await screen.getByText('topnavbar');
    expect(renderAgain).toBeInTheDocument();
  });
});
