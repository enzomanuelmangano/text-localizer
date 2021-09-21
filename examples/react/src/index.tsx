import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationsProvider } from './l10n';

const Providers: React.FC = ({ children }) => (
  <TranslationsProvider language="us" storage={localStorage}>
    {children}
  </TranslationsProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
