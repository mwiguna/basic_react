import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CSS bisa import disini, atau masing2 di componentnya.
import './tailwindbuild.css';
import App from './component/App';
import { BrowserRouter } from "react-router-dom"; // Mengaktifkan Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//  Semua Component di folder /component (gak wajib)
//  File component.js harus di export dan import di file ini
//  State.js tentang hook dasar