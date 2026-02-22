import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  SEO,
  CookieNotice,
  PrivacyPolicyContent,
  TermsOfServiceContent,
  ScrollToTop,
  AboutUsContent,
  CareersContent,
  SafetyContent,
  PressContent,
  HelpCenterContent,
  FAQContent,
  PricingContent,
} from '@rent-a-truck/ui';

import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { CTABannerSection } from './components/sections/CTABannerSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { HeroSection } from './components/sections/HeroSection';
import { SmoothScroll } from './components/SmoothScroll';

const HomePage = () => (
  <>
    <SEO />
    <HeroSection />

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <EcosystemSection />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-background"
    >
      <CTABannerSection />
    </motion.div>
  </>
);

const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="container mx-auto px-4 pt-32 pb-20">
    <h1 className="mb-10 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
    {children}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll>
        <div className="text-foreground selection:bg-primary/50 selection:text-foreground bg-background min-h-screen font-sans antialiased">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/privacy-policy"
                element={
                  <LegalPage title="Privacy Policy">
                    <PrivacyPolicyContent />
                  </LegalPage>
                }
              />
              <Route
                path="/terms-of-service"
                element={
                  <LegalPage title="Terms of Service">
                    <TermsOfServiceContent />
                  </LegalPage>
                }
              />
              <Route
                path="/about-us"
                element={
                  <LegalPage title="About Us">
                    <AboutUsContent />
                  </LegalPage>
                }
              />
              <Route
                path="/careers"
                element={
                  <LegalPage title="Careers">
                    <CareersContent />
                  </LegalPage>
                }
              />
              <Route
                path="/safety"
                element={
                  <LegalPage title="Safety">
                    <SafetyContent />
                  </LegalPage>
                }
              />
              <Route
                path="/press"
                element={
                  <LegalPage title="Press Room">
                    <PressContent />
                  </LegalPage>
                }
              />
              <Route
                path="/help-center"
                element={
                  <LegalPage title="Help Center">
                    <HelpCenterContent />
                  </LegalPage>
                }
              />
              <Route
                path="/faq"
                element={
                  <LegalPage title="Frequently Asked Questions">
                    <FAQContent />
                  </LegalPage>
                }
              />
              <Route
                path="/pricing"
                element={
                  <LegalPage title="Pricing Plans">
                    <PricingContent />
                  </LegalPage>
                }
              />
            </Routes>
          </main>
          <Footer />
          <CookieNotice />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
