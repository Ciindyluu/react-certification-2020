import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import VideoPlayer from '../../../pages/VideoPlayer/VideoPlayer.page';
import { BrowserRouter } from 'react-router-dom';
import { VideoProvider } from '../../../providers/Video/Video.provider';
import AuthProvider from '../../../providers/Auth/Auth.provider';

const customProvider = (ui) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>{ui}</VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

it('check if favorite button displays', () => {
  const { getByTestId } = render(<VideoPlayer />);
  const favoritesButton = getByTestId('favorite');
  expect(favoritesButton).toBeInTheDocument();
});

describe('Add and Remove to favorites', () => {
  test('test if adds to favorites and if removes', async () => {
    await act(async () => {
      customProvider(<VideoPlayer />);
    });
    fireEvent.click(screen.getByText('Add to Favorites'));
    let rerender = await screen.getByText('Remove from Favorites');
    expect(rerender).toBeInTheDocument();
    fireEvent.click(screen.getByText('Remove from Favorites'));
    rerender = await screen.getByText('Add to Favorites');
    expect(rerender).toBeInTheDocument();
  });
});
