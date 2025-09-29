import React from 'react';
import './css/base.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import useAutoLogout from './components/hooks/useAutoLogout';

function App() {

  const logout = () => {
    localStorage.removeItem('authToken');
    console.log('Logged out due to inactivity');
  }

  useAutoLogout(logout);

  return (
    <div className="app-container">
      <React.Fragment>
        <Header />
        <Layout />
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;
