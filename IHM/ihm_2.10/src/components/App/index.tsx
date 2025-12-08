import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>iMovies</h1>
      </header>

      <NavBar />

      <main>
        <Outlet /> {/* <-- Ici les pages enfants apparaîtront */}
      </main>

      <footer>
        <p>© 2025 iMovies</p>
      </footer>
    </div>
  );
}
