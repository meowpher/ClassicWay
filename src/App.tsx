import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ScrollToTop } from './components/ScrollToTop';

// Localized SEO Landing Pages
import { SharjahSanitaryware } from './pages/landing/SharjahSanitaryware';
import { DubaiElectricware } from './pages/landing/DubaiElectricware';
import { AbuDhabiHardware } from './pages/landing/AbuDhabiHardware';
import { AjmanProcurement } from './pages/landing/AjmanProcurement';

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
          
          {/* SEO Landing Page Routes */}
          <Route path="commercial-sanitaryware-sharjah" element={<SharjahSanitaryware />} />
          <Route path="industrial-electricware-dubai" element={<DubaiElectricware />} />
          <Route path="wholesale-hardware-abu-dhabi" element={<AbuDhabiHardware />} />
          <Route path="hardware-electrical-ajman" element={<AjmanProcurement />} />

          <Route path="*" element={<Home />} /> {/* Fallback to Home */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
