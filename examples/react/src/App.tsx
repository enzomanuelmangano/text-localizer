import './App.css';
import { useTranslations, useTranslationsState } from './l10n';

function App() {
  const { favourites } = useTranslations();
  const { isLoading } = useTranslationsState();

  if (isLoading) return null;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {favourites}
        </a>
      </header>
    </div>
  );
}

export default App;
