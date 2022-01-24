import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'

//components
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
