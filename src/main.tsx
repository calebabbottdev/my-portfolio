import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// MUI
import { theme } from '@styles/theme';
import { CssVarsProvider } from '@mui/joy/styles';
import '@fontsource/inter'; // Defaults to weight 400.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
