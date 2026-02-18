import { motion } from 'framer-motion';
import React from 'react';

import { Icons, TypographyH2, TypographyP } from '@rent-a-truck/ui';

export const TrustSafetySection = () => {
  const trustPillars = [
    {
      title: 'Fair Negotiations',
      description:
        'No fixed pricing or hidden markups. Negotiate directly with drivers to find a price that works for both parties.',
      icon: <Icons.Briefcase className="size-8" />,
      animation: (
        <div className="relative flex size-24 items-center justify-center">
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-primary/20 border-primary/30 absolute left-0 rounded-xl border p-3"
          >
            <Icons.Package className="text-primary size-8" />
          </motion.div>
          <motion.div
            animate={{ x: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 rounded-xl border border-orange-200 bg-orange-100 p-3"
          >
            <Icons.User className="size-8 text-orange-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="size-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
          />
        </div>
      ),
    },
    {
      title: 'Verified Professionals',
      description:
        'Safety is our priority. Every driver on our platform undergoes rigorous KYC, license verification, and vehicle inspection.',
      icon: <Icons.UserCheck className="size-8" />,
      animation: (
        <div className="relative flex size-24 items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="rounded-full border border-blue-100 bg-blue-50 p-4 shadow-inner"
          >
            <Icons.User className="size-12 text-blue-600" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute top-0 right-0 rounded-full border-4 border-white bg-green-500 p-2 shadow-lg"
          >
            <Icons.CheckmarkCircle className="size-6 text-white" />
          </motion.div>
        </div>
      ),
    },
    {
      title: 'Goods Insurance',
      description:
        'Your cargo is valuable. Every trip booked through Rent-a-Truck is automatically insured against transit risks.',
      icon: <Icons.ShieldCheck className="size-8" />,
      animation: (
        <div className="relative flex size-24 items-center justify-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-10"
          >
            <Icons.ShieldCheck className="text-primary size-20" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="border-primary/20 absolute inset-0 rounded-full border-2 border-dashed"
          />
        </div>
      ),
    },
    {
      title: 'Secure Escrow',
      description:
        'Funds are held securely in escrow and only released to the driver once you confirm successful delivery.',
      icon: <Icons.Payment className="size-8" />,
      animation: (
        <div className="relative flex size-24 items-center justify-center">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
            <Icons.Wallet className="size-12 text-gray-700" />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -40, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute rounded-lg border border-green-200 bg-green-100 p-2 shadow-lg"
          >
            <Icons.Dollar className="size-6 text-green-600" />
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-secondary text-secondary-foreground overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
              <Icons.Security className="size-4" />
              <span>Safety First</span>
            </div>

            <TypographyH2 className="text-secondary-foreground text-4xl leading-[1.1] font-black tracking-tight md:text-6xl">
              Logistics Without the <span className="text-primary italic">Headache</span>
            </TypographyH2>

            <TypographyP className="text-secondary-foreground/70 max-w-xl text-xl">
              We&apos;ve built a trust layer into every kilometer. From driver verification to
              automated insurance, we&apos;ve got you covered.
            </TypographyP>

            <div className="grid gap-4 pt-4">
              {['Fully Insured Cargo', 'Instant Payout Management', '24/7 Security Support'].map(
                (text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary flex size-6 items-center justify-center rounded-full">
                      <Icons.CheckmarkCircle className="size-4 text-white" />
                    </div>
                    <span className="text-lg font-bold">{text}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background border-border hover:border-primary/50 hover:shadow-primary/5 cursor-default rounded-[2rem] border p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-28 items-center justify-center">{pillar.animation}</div>
                <h3 className="group-hover:text-primary mb-3 text-xl font-bold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
