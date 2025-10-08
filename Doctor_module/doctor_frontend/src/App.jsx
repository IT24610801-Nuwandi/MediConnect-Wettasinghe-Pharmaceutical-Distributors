import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <header className="top-nav">
          <div className="logo">Wettasinghe Pharmaceutical Distributors</div>
          <nav className="nav-buttons">
            <a href="/login" className="nav-link">Login</a>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminPage />} /> {/* ✅ Admin route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
