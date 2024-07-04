import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Homepage";
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import NOTFOUND404 from './pages/NOTFOUND404';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/routes/privateRoute';
import PublicRoute from './components/routes/PublicRoute';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>}></Route>
        <Route path='/login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>}></Route>
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>}></Route>
        <Route path='/dashboard'
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }></Route>
        <Route path='*' element={<NOTFOUND404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
