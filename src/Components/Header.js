import React from 'react';
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  makeStyles
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    padding: 10,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { currency, setCurrency, user } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => navigate('/')}
              variant="h5"
            >
              Crypto Quest
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 110,
                height: 45,
                marginRight: 20,
                fontSize: '15px',
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              MenuProps={{
                container: document.getElementById('root'), // Specify the container to avoid the warning
              }}
            >
              <MenuItem value={'INR'} style={{ fontSize: '15px' }}>INR</MenuItem>
              <MenuItem value={'USD'} style={{ fontSize: '15px' }}>USD</MenuItem>
            </Select>
            {user? <UserSidebar/> : <AuthModal/>}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
