import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";

//components
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected>
                <Products />
              </Protected>
            }
          />
          <Route
            path="/transactions"
            element={
              <Protected>
                <Transactions />
              </Protected>
            }
          />
          <Route
            path="/settings"
            element={
              <Protected>
                <Settings />
              </Protected>
            }
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
