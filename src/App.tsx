import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Catalogue />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} /> {/* Fallback to Home */}
      </Route>
    </Routes>
  );
}

export default App;
