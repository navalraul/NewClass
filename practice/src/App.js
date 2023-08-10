// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Footer />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
