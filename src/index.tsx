import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Lodging from './pages/lodging';
import Error from './components/error';
import './utils/style/sass/main.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      {/* Routes pour les pages home, about, lodging, et error */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lodging/:id' element={<Lodging />} />

        {/* Ajout d'une route error pour les routes non répertoriées */}
        <Route element={<Error />} path='*' />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
