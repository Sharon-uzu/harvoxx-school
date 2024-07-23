import './App.css';
import About from './Screens/About';
import Apply from './Screens/Apply';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router-dom';
import Sponsors from './Screens/Sponsors';
import Python from './Screens/Python';
import Steps from './Screens/Steps';
import Contact from './Screens/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/about' element={<About />} />
        <Route path='/python' element={<Python />} />
        <Route path='/steps' element={<Steps />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
