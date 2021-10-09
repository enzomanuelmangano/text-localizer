import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationsProvider } from 'react-text-localizer';
import { translationsContext } from './l10n';

const Providers: React.FC = ({ children }) => (
  <TranslationsProvider
    context={translationsContext}
    language="us"
    storage={localStorage}
  >
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
