import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Home/> */}
     <Routes>
     <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
