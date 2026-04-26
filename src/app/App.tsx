import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientShowcasePage } from './pages/ClientShowcasePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          
          {/* Hidden Client Routes */}
          <Route path="100pops" element={<ClientShowcasePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
