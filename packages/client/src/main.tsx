import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApplicationRouter } from './ApplicationRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>
);
