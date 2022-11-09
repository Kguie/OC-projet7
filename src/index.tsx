import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './utils/style/sass/main.scss';
import { MyRouter } from './utils/router';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MyRouter />
    </RecoilRoot>
  </React.StrictMode>
);



reportWebVitals();
