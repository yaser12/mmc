import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { openRoutes, protectedRoutes } from './configs/routesConfig';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './theme/muiTheme';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import * as authActions from './store/actions/authActions';
const useAppStyles = makeStyles(({
  app:
  {
    position: 'relative'
  }
}));
function App() {
  const appClasses = useAppStyles();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  let routes = openRoutes;
  if (isAuthenticated) {
    routes = routes.concat(protectedRoutes);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.authCheck());
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}> {/* we willl remove this line when we finish migrate all component styling from makeStyles to styled-components */}
        <CssBaseline />
        <div className={appClasses.app}>
          <Layout
            header={<Header />}
            footer={<Footer />}
          >
            <Switch>
              {renderRoutes(routes)}
            </Switch>
          </Layout>
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
