
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { GeoProvider } from './context/GeoContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import AccessibilityToolbar from './components/AccessibilityToolbar';

// Pages
import Home from './pages/Home';
import CRMOffer from './pages/CRMOffer';
import Services from './pages/Services';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Book from './pages/Book';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// This wrapper updates the LanguageContext when the URL changes
const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang && ['en', 'pt', 'es'].includes(lang)) {
      setLanguage(lang);
    }
  }, [lang, setLanguage]);

  return children;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <GeoProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Navbar />
            <main>
              <Routes>
                {/* Redirect root to preferred or default language */}
                <Route path="/" element={<Navigate to="/en" replace />} />

                {/* Language-prefixed routes */}
                <Route path="/:lang" element={<LanguageWrapper><Home /></LanguageWrapper>} />
                <Route path="/:lang/crm-offer" element={<LanguageWrapper><CRMOffer /></LanguageWrapper>} />
                <Route path="/:lang/services" element={<LanguageWrapper><Services /></LanguageWrapper>} />
                <Route path="/:lang/industries" element={<LanguageWrapper><Industries /></LanguageWrapper>} />
                <Route path="/:lang/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
                <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
                <Route path="/:lang/pricing" element={<LanguageWrapper><Pricing /></LanguageWrapper>} />
                <Route path="/:lang/portfolio" element={<LanguageWrapper><Portfolio /></LanguageWrapper>} />
                <Route path="/:lang/blog" element={<LanguageWrapper><Blog /></LanguageWrapper>} />
                <Route path="/:lang/blog/:slug" element={<LanguageWrapper><BlogPost /></LanguageWrapper>} />
                <Route path="/:lang/case/:id" element={<LanguageWrapper><CaseStudy /></LanguageWrapper>} />
                <Route path="/:lang/privacy" element={<LanguageWrapper><Privacy /></LanguageWrapper>} />
                <Route path="/:lang/terms" element={<LanguageWrapper><Terms /></LanguageWrapper>} />
                <Route path="/:lang/book" element={<LanguageWrapper><Book /></LanguageWrapper>} />
                <Route path="/:lang/agendar" element={<LanguageWrapper><Book /></LanguageWrapper>} />

                {/* Direct booking shortcuts */}
                <Route path="/book" element={<Navigate to="/pt/book" replace />} />
                <Route path="/agendar" element={<Navigate to="/pt/agendar" replace />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/en" replace />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsentBanner />
            <AccessibilityToolbar />
          </div>
        </Router>
        </GeoProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
