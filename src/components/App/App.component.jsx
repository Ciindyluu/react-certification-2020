import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import FavoritesPage from '../../pages/Favorites';
import VideoPlayerPage from '../../pages/VideoPlayer';
import { random } from '../../utils/fns';
import { VideoProvider } from '../../providers/Video/Video.provider';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <Switch>
            <Route exact component={LoginPage} path="/" />
            <Route exact component={HomePage} path="/home" />
            <Route component={VideoPlayerPage} path="/video/:id" />
            <Route component={FavoritesPage} path="/favorites" />
          </Switch>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
