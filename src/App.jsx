import { useState } from 'react';
import Navbar from './components/Navbar';
import Countries from './components/Countries';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Countries />
    </div>
  );
}

export default App;
