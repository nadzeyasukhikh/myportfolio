
import './App.css';
import Main from './pages/main/Main';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/projects/Projects';
import ShopOnLine from './components/shopOnLine/ShopOnLine';
import PlanerPalat from './components/planerPalat/PlanerPalat';

function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/ShopOnLine' element={<ShopOnLine />} />
      <Route path='/PlanerPalat' element={<PlanerPalat />} />
     </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
