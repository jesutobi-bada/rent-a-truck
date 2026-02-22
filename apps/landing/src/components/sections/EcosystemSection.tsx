import { motion, Variants } from 'framer-motion';

import { Icons, TypographyH2, TypographyP, Button, cn } from '@rent-a-truck/ui';
import { env } from '../../env';

import { DriverIllustration } from '../illustrations/DriverIllustration';
import { OwnerIllustration } from '../illustrations/OwnerIllustration';
import { RenterIllustration } from '../illustrations/RenterIllustration';

interface EcosystemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: 'solid' | 'secondary' | 'outline';
  className?: string;
  index: number;
}

const EcosystemCard = ({
  icon,
  title,
  description,
  features,
  buttonText,
  buttonVariant = 'solid',
  className,
  index,
  href,
}: EcosystemCardProps & { href?: string }) => {
  const isEven = index % 2 === 0;

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        'flex flex-col items-center gap-12 border-b border-gray-100 py-16 last:border-0 md:flex-row md:py-24',
        !isEven && 'md:flex-row-reverse',
        className,
      )}
    >
      <div className="flex-1 space-y-6">
        <div
          className={cn(
            'bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl',
          )}
        >
          {icon}
        </div>

        <TypographyH2 className="text-secondary font-bold tracking-tight">{title}</TypographyH2>

        <TypographyP className="text-muted-foreground max-w-xl text-lg leading-relaxed">
          {description}
        </TypographyP>

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="flex size-6 items-center justify-center rounded-full bg-green-50 text-green-600">
                <Icons.CheckmarkCircle className="size-4" />
              </div>
              <span className="text-md text-secondary/80 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full px-8 md:w-auto" variant={buttonVariant}>
              {buttonText}
            </Button>
          </a>
        </div>
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        <div
          className={cn(
            'relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.02]',
          )}
        >
          {/* Illustration Layer */}
          <div className="absolute inset-0">
            {index === 0 && <RenterIllustration />}
            {index === 1 && <DriverIllustration />}
            {index === 2 && <OwnerIllustration />}
          </div>

          {/* Subtle noise overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
        </div>
      </div>
    </motion.div>
  );
};

export const EcosystemSection = () => {
  const cards = [
    {
      icon: <Icons.Package />,
      title: 'Smart Rentals Made Easy',
      description:
        "Access a vast network of commercial vehicles for your moving needs. From small vans to 40ft containers, we've got you covered.",
      features: ['Real-time GPS tracking', 'Transparent, upfront pricing', '24/7 Customer support'],
      buttonText: 'Get Started as Renter',
      buttonVariant: 'secondary' as const,
      href: env.VITE_APP_RENTER_URL,
    },
    {
      icon: <Icons.SteeringWheel />,
      title: 'Empowering Drivers',
      description:
        'Join our network and turn your driving skills into a sustainable business. We provide the tools you need to succeed on the road.',
      features: ['Flexible earnings', 'Smart navigation', 'Instant payouts'],
      buttonText: 'Get Started as Driver',
      buttonVariant: 'solid' as const,
      href: env.VITE_APP_DRIVER_URL,
    },
    {
      icon: <Icons.Chart />,
      title: 'Fleet Management at Scale',
      description:
        'Optimise your operations with enterprise-grade tools designed for modern fleet owners. Monitor, maintain, and grow.',
      features: [
        'Real-time analytics',
        'Driver performance tracking',
        'Automated maintenance alerts',
      ],
      buttonText: 'Get Started as Owner',
      buttonVariant: 'secondary' as const,
      href: env.VITE_APP_ADMIN_URL,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="bg-background overflow-hidden py-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col"
        >
          {cards.map((card, index) => (
            <EcosystemCard key={index} {...card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
