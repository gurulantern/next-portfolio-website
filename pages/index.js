import Hero from "../comps/Hero";
import About from "../comps/About";
import Projects from '../comps/Projects';
import Writing from '../comps/Writing';
import Contact from '../comps/Contact';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </div>
  );
}

export default App;