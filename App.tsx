
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AccountDeletion from './pages/AccountDeletion';
import Support from './pages/Support';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
