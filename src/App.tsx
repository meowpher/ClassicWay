import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Catalogue />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback to Home */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
