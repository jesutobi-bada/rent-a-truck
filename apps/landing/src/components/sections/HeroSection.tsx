import { motion, Variants, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';

import { Button, TypographyH1, TypographyLead } from '@rent-a-truck/ui';

const vehicles = [
  {
    image: 'https://res.cloudinary.com/nobody-bada/image/upload/v1771435820/truck-1_gftrfb.webp',
  },
  {
    image: 'https://res.cloudinary.com/nobody-bada/image/upload/v1771435820/truck-2_cstpeh.webp',
  },
  {
    image: 'https://res.cloudinary.com/nobody-bada/image/upload/v1771435821/truck-3_z2v03v.jpg',
  },
  {
    image: 'https://res.cloudinary.com/nobody-bada/image/upload/v1771435821/truck-4_stwzvv.jpg',
  },
];

export const HeroSection = () => {
  const [deck, setDeck] = useState(vehicles);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const shuffle = useCallback(() => {
    setDeck((prev) => {
      const newDeck = [...prev];
      const topCard = newDeck.shift();
      if (topCard) newDeck.push(topCard);
      return newDeck;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(shuffle, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, shuffle]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cn = (...classes: (string | boolean | undefined | null)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <section className="bg-background relative overflow-hidden px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8 text-center"
        >
          {/* Heading Section */}
          <div className="space-y-4">
            <TypographyH1
              asChild
              className="text-foreground text-6xl leading-[0.85] font-black tracking-tighter drop-shadow-sm md:text-8xl lg:text-9xl"
            >
              <motion.h1 variants={itemVariants}>
                Logistics, <br />
                <span className="text-primary italic">simplified.</span>
              </motion.h1>
            </TypographyH1>

            <motion.div variants={itemVariants} className="mx-auto max-w-lg pt-4">
              <TypographyLead className="text-muted-foreground text-lg font-medium md:text-xl">
                The modern on-demand haulage marketplace. Move anything, anywhere, at the tap of a
                button.
              </TypographyLead>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col justify-center gap-4 pt-2 sm:flex-row lg:w-auto"
          >
            <Button size="lg" className="shadow-primary/20 h-16 px-10 text-lg font-bold shadow-xl">
              Book a Truck
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-secondary-foreground/10 hover:border-primary/50 h-16 border-2 px-10 text-lg font-bold transition-colors"
            >
              Become a Driver
            </Button>
          </motion.div>

          {/* Shuffling Image Cards */}
          <div
            className="group relative mx-auto mt-16 flex aspect-square w-full max-w-md cursor-pointer items-center justify-center"
            onClick={() => {
              shuffle();
              setIsAutoPlaying(false);
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="popLayout">
              {deck.slice(0, 3).map((vehicle, index) => {
                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: 20, rotate: 5 }}
                    animate={{
                      opacity: 1,
                      scale: 1 - index * 0.05,
                      x: index * 15,
                      y: -index * 15,
                      rotate: index * 2,
                      zIndex: 10 - index,
                    }}
                    exit={{
                      opacity: 0,
                      x: -150,
                      rotate: -15,
                      scale: 0.9,
                      transition: { duration: 0.5, ease: 'anticipate' },
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={cn(
                      'border-background bg-secondary/50 absolute flex aspect-square w-full items-center justify-center overflow-hidden rounded-[3rem] border-[8px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] backdrop-blur-sm',
                    )}
                  >
                    <div className="absolute inset-x-0 top-1/2 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={vehicle.image}
                        alt={vehicle.image}
                        className="h-full w-full scale-110 transform object-cover transition-transform duration-700 group-hover:scale-100"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Subtle background glow */}
      <div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 -z-10 aspect-square w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
    </section>
  );
};
