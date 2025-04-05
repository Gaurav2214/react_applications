import React from 'react';
import './css/base.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
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
