import './App.css';
import { Routes, Route } from "react-router-dom";
import PhotoList from './components/PhotoList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favourites from './components/Favourites';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
