import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ThemeProvider, jssPreset, StylesProvider } from '@material-ui/core/styles';
import theme from '@theme/theme';
import AppRouter from '@router/Router';
import { Provider } from 'react-redux';
import store, { persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { create } from 'jss';
import jssExtends from 'jss-plugin-extend';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const jss = create({
  plugins: [jssExtends(), ...jssPreset().plugins],
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <QueryClientProvider client={queryClient}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Curhat ASI</title>
            <link rel="canonical" href="http://curhatasi.fit" />
          </Helmet>
          <ThemeProvider theme={theme}>
            <PersistGate loading={<div>Mohon tunggu</div>} persistor={persistor}>
              <Router>
                <AppRouter />
              </Router>
              <CssBaseline />
            </PersistGate>
          </ThemeProvider>
        </QueryClientProvider>
      </StylesProvider>
    </Provider>
  );
}
