import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './resources/components/Login/Register';
import Login from './resources/components/Login/Login';
import Home from './resources/components/Home';
import './resources/css/App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const pathname = window.location.pathname;
    if (token === null || token === undefined) {
      if (pathname !== '/' && pathname !== '/register')
        window.location.pathname = '/';
    }
  });
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home/:username' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
