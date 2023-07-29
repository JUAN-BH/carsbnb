import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { InitContextProvider } from './contexts/initContexts';
import App from './App';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <InitContextProvider>
        <App />
      </InitContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
