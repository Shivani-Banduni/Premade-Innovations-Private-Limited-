import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin';
import Admin_dashboard from './components/Admin_dashboard';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Home/> */}
     <Navbar/><br/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       
       <Route path='/adminlogin' element={<Adminlogin/>}></Route>
       <Route path='/admindashboard' element={<Admin_dashboard/>}></Route>


     </Routes>
    </div>
  );
}

export default App;
