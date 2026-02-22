import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Button } from '../atoms/button/button';
import { TypographyP } from '../atoms/typography/typography';

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed right-0 bottom-0 left-0 z-50 p-4 md:p-6"
        >
          <div className="bg-background border-border mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-xl border p-4 shadow-2xl md:flex-row md:p-6">
            <div className="flex-1">
              <TypographyP className="text-sm">
                We use cookies to enhance your experience, analyze site traffic, and serve better
                ads. By clicking &quot;Accept&quot;, you agree to our use of cookies. Read our{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{' '}
                to learn more.
              </TypographyP>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
                Decline
              </Button>
              <Button size="sm" onClick={acceptCookies}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
