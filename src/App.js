import './App.css';
import { Routes, Route } from "react-router-dom";
import PhotoList from './components/PhotoList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favourites from './components/Favourites';
import PhotoDetails from './components/PhotoDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
