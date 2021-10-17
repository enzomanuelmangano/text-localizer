import { useTranslations, useTranslationsState } from 'react-text-localizer';
import './App.css';
import { translationsContext } from './l10n';

function App() {
  const { welcome } = useTranslations(translationsContext);
  const { isLoading } = useTranslationsState(translationsContext);

  if (isLoading) return null;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://enzomanuelmangano.github.io/text-localizer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {welcome}
        </a>
      </header>
    </div>
  );
}

export default App;
