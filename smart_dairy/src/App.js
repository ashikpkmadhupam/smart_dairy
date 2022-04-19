import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './components/About/About';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import AddDairy from './components/AddDairy/AddDairy';

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/logout" element={<Logout/>}/>
          <Route exact path="/add" element={<AddDairy/>}/>
        </Routes>
    </Router>
  );
}

export default App;
