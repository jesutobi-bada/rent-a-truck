import React from 'react';
import { Logo, Icons, TypographyP } from '@rent-a-truck/ui';
import { env } from '../../env';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-border Selection:bg-primary/20 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-border grid grid-cols-1 gap-12 border-b pb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="text-primary shadow-primary/20 h-8 w-8 shadow-2xl" />
              <span className="text-secondary-foreground text-2xl font-black tracking-tighter">
                Rent-a-Truck
              </span>
            </div>
            <TypographyP className="text-secondary-foreground max-w-xs text-sm leading-relaxed">
              Revolutionizing Logistics in Nigeria. Move anything, anywhere, anytime with total
              peace of mind.
            </TypographyP>
            <div className="flex gap-4">
              {[
                { icon: Icons.Instagram, href: env.VITE_SOCIAL_INSTAGRAM },
                { icon: Icons.Twitter, href: env.VITE_SOCIAL_X },
                { icon: Icons.Facebook, href: env.VITE_SOCIAL_FACEBOOK },
                { icon: Icons.LinkedIn, href: env.VITE_SOCIAL_LINKEDIN },
              ]
                .filter((link) => !!link.href)
                .map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary border-secondary-foreground text-secondary-foreground hover:text-primary hover:border-primary/30 rounded-lg border p-2 transition-all duration-300"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
            <div className="space-y-6">
              <h4 className="text-secondary-foreground text-xs font-black tracking-widest uppercase">
                Platform
              </h4>
              <ul className="text-secondary-foreground space-y-3 text-sm font-medium">
                {['For Renters', 'For Drivers', 'Fleet Owners', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-secondary-foreground text-xs font-black tracking-widest uppercase">
                Company
              </h4>
              <ul className="text-secondary-foreground space-y-3 text-sm font-medium">
                {['About Us', 'Careers', 'Safety', 'Press'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h4 className="text-secondary-foreground text-xs font-black tracking-widest uppercase">
              Support
            </h4>
            <ul className="text-secondary-foreground space-y-4 text-sm font-medium">
              {env.VITE_SUPPORT_LOCATION && (
                <li className="flex items-center gap-3">
                  <Icons.Location className="text-primary size-4" />
                  <span>{env.VITE_SUPPORT_LOCATION}</span>
                </li>
              )}
              {env.VITE_SUPPORT_EMAIL && (
                <li className="flex items-center gap-3">
                  <Icons.Briefcase className="text-primary size-4" />
                  <span>{env.VITE_SUPPORT_EMAIL}</span>
                </li>
              )}
              {env.VITE_SUPPORT_HOTLINE && (
                <li className="flex items-center gap-3">
                  <Icons.Calling className="text-primary size-4" />
                  <span>{env.VITE_SUPPORT_HOTLINE}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 md:flex-row">
          <div className="text-secondary-foreground flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium">
            <span>&copy; {new Date().getFullYear()} Rent-a-Truck Logistics.</span>

            {/* <a href="#" className="hover:text-foreground">Cookies</a> */}
          </div>

          <div className="flex items-center gap-2 text-xs font-medium">
            <a href="#" className="hover:text-secondary-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
