import { Outlet } from '@tanstack/react-router';
import './App.css';

function App() {
  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <Outlet />
    </div>
  );
}

export default App;

