import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Homepage";
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import NOTFOUND404 from './pages/NOTFOUND404';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
        <Route path='*' element={<NOTFOUND404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
