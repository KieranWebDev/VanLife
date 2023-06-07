import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Navbar from './Components/NavBar/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
