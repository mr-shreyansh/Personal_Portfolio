
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
function App() {
  return (
    <div className="relative App">
        <Navbar />
        <div className='page'>
        <Home />
        </div>
        <div className='page'>
        <About />
        </div>
        <div className='page'>
        <Experience />
        </div>
        <div className='page'>
        <Projects />
        </div>
    
    </div>
  );
}

export default App;
