import './App.css';
import { useTranslations, useTranslationsState } from './l10n';

function App() {
  const { check } = useTranslations();
  const { isLoading } = useTranslationsState();

  console.log({ isLoading, check });
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
          {check}
        </a>
      </header>
    </div>
  );
}

export default App;
