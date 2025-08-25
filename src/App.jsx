import './App.css'
import { useLocation, BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import FormCadastro from './components/structures/FormCadastro';
import CadastroPage from './pages/User/CadastroPage';
import InfoPage from './pages/User/InfoPage';
import ListagemPage from './pages/User/ListagemPage';
import TrackingPage from './pages/User/TrackingPage';
import OrdersPage from './pages/User/OrdersPage';
import CartPage from './pages/User/CartPage';
import PayPage from './pages/User/PayPage';
import ConfirmationPage from './pages/User/ConfirmationPage';
import AdminProdutoPage from './pages/Admin/AdminProdutoPage';
import { ToastContainer } from 'react-toastify';
import Header from './components/modules/Header';
import AdminHeader from './components/modules/HeaderAdmin';

function AppContent() {
  const location = useLocation();

  // Rotas para cada tipo de header
  const userHeaderRoutes = ["/info", "/produtos", "/rastrear", "/orders", "/cart", "/pay"];
  const adminHeaderRoutes = ["/admin/produtos", "/admin/outro"];

  const showUserHeader = userHeaderRoutes.some(path => location.pathname.startsWith(path));
  const showAdminHeader = adminHeaderRoutes.some(path => location.pathname.startsWith(path));

  return (
    <div className="App">
      {showUserHeader && <Header />}
      {showAdminHeader && <AdminHeader />}
      <ToastContainer />
      <Routes>
       <Route path="/" element={<CadastroPage />} />
       <Route path="/info" element={<InfoPage />} />
       <Route path="/produtos" element={<ListagemPage />} />
       <Route path="/rastrear" element={<TrackingPage/>} />
       <Route path="/orders" element={<OrdersPage/>} />
       <Route path="/cart" element={<CartPage/>} />
       <Route path="/pay" element={<PayPage/>} />
       <Route path="/confirmation" element={<ConfirmationPage/>} />
       <Route path="/admin/produtos" element={<AdminProdutoPage/>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
