import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import '../src/index.css';
import Signup from './Pages/SignUp';
import ArtistList from './Components/ArtistList';
import CreateArtist from './Components/CreateArtist';
import UpdateArtist from './Components/UpdateArtist';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';
// import ProductList from './components/ProductList';
// import CreateProduct from './components/CreateProduct';
// import EditProduct from './components/EditProduct';
// import PrivateRoute from './components/PrivateRoute';
// import Navbar from './components/Navbar';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<PrivateRoute/>}>
            <Route path="artist" element={<ArtistList />} />
            <Route path="createArtist" element={<CreateArtist/>} />
            <Route path="artist-update/:id" element={<UpdateArtist />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;