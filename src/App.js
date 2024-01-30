
import './App.css';
import Main from './pages/main/Main';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projects' element={<Projects />} />
     </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
