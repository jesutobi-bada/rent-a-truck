import { motion } from 'framer-motion';

import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { CTABannerSection } from './components/sections/CTABannerSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { HeroSection } from './components/sections/HeroSection';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="text-foreground selection:bg-primary/50 selection:text-foreground min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
