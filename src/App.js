import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './resources/components/Login/Register';
import Login from './resources/components/Login/Login';
import Home from './resources/components/Home';
import './resources/css/App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
