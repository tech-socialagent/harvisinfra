import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OurProducts from './components/OurProducts';
import Services from './components/Services';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <OurProducts/>
      <Services/>
      <Clients/>
      <Location/>
    </div>
  );
}

export default App;
