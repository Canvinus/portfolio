import './App.css';
import { Navbar } from './components/Navigation/Navbar';
import { Socials } from './components/Socials/Socials';

function App() {    
  return (
    <div className='App'>
      <header>
        <Socials />
      </header>
      <body>
        <Navbar />
      </body>
      <footer>
        <p>Copyright © {new Date().getFullYear()} agruz.dev</p>
      </footer>
    </div>
  );
}

export default App;
