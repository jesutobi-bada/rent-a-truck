import { motion } from 'framer-motion';

import { Button, TypographyH2, TypographyP } from '@rent-a-truck/ui';
import { env } from '../../env';

export const CTABannerSection = () => {
  // const stats = [
  //     { label: "Successful Deliveries", value: "+50k" },
  //     { label: "Verified Drivers", value: "2.4k" },
  //     { label: "Avg. Savings", value: "25%" },
  //     { label: "Support", value: "24/7" },
  // ];

  return (
    <section className="px-4 py-20 md:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary text-primary-foreground shadow-primary/20 relative overflow-hidden rounded-[2.5rem] px-8 py-16 shadow-2xl md:px-16 md:py-12"
        >
          {/* Background Noise & Gradients */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-orange-500/20 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <TypographyH2 className="mt-8 text-3xl leading-tight font-black text-white md:text-5xl">
              Take Control of Your <br className="hidden md:block" />
              Logistics <span className="text-secondary italic">Today</span>
            </TypographyH2>

            <TypographyP className="text-primary-foreground mt-6 max-w-2xl text-xl font-medium opacity-90">
              Join thousands of businesses and drivers moving Nigeria forward. Fast, secure, and
              completely transparent.
            </TypographyP>

            <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:flex-row lg:w-auto">
              <a href={env.VITE_APP_RENTER_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group h-16 w-full px-8 text-lg font-bold md:w-auto"
                >
                  Rent a Truck
                </Button>
              </a>
              <a href={env.VITE_APP_DRIVER_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-background text-foreground group h-16 w-full px-8 text-lg font-bold md:w-auto"
                >
                  Become a Driver
                </Button>
              </a>
            </div>

            {/* Stats Grid */}
            {/* <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-16 w-full">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-4xl md:text-5xl font-black text-white">{stat.value}</span>
                                    <span className="mt-2 text-sm font-bold uppercase tracking-wider text-primary-foreground opacity-70">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
