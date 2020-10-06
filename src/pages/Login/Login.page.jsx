import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { signInStyles } from './Login.styles';

import './Login.styles.js';

function LoginPage() {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  const authenticate = async (event) => {
    event.preventDefault();
    const user = await login(username, password);
    if (user) {
      history.push('/home');
    } else {
      setLoginError(true);
    }
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Cindy Olivas '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const classes = signInStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={authenticate} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="username"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              autoFocus
              inputProps={{ id: 'username', 'data-testid': 'username' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              inputProps={{ id: 'password', 'data-testid': 'password' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>{' '}
            <br />
            {loginError && (
              <Typography variant="body2" color="textSecondary" align="center">
                <Box fontWeight="fontWeightBold" m={1}>
                  Invalid user o password. Please try with the following data.
                </Box>
                <Box fontWeight="fontWeightRegular" m={1}>
                  User: cindy <br />
                  Password: olivas
                </Box>{' '}
                <br />
                <br />
              </Typography>
            )}
            <Box mt={1}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
