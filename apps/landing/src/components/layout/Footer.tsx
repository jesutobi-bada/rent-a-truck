import { Link } from 'react-router-dom';
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
                { name: 'Instagram', icon: Icons.Instagram, href: env.VITE_SOCIAL_INSTAGRAM },
                { name: 'Twitter', icon: Icons.Twitter, href: env.VITE_SOCIAL_X },
                { name: 'Facebook', icon: Icons.Facebook, href: env.VITE_SOCIAL_FACEBOOK },
                { name: 'LinkedIn', icon: Icons.LinkedIn, href: env.VITE_SOCIAL_LINKEDIN },
              ]
                .filter((link) => !!link.href)
                .map(({ name, icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow us on ${name}`}
                    aria-label={`Follow us on ${name}`}
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
                {[
                  { name: 'For Renters', href: env.VITE_APP_RENTER_URL, external: true },
                  { name: 'For Drivers', href: env.VITE_APP_DRIVER_URL, external: true },
                  { name: 'Fleet Owners', href: env.VITE_APP_ADMIN_URL, external: true },
                  { name: 'Pricing', href: '/pricing', external: false },
                ].map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        title={link.name}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-secondary-foreground text-xs font-black tracking-widest uppercase">
                Company
              </h4>
              <ul className="text-secondary-foreground space-y-3 text-sm font-medium">
                {[
                  { name: 'About Us', path: '/about-us' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Safety', path: '/safety' },
                  { name: 'Press', path: '/press' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      title={link.name}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
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
              <li>
                <Link
                  to="/help-center"
                  className="hover:text-primary flex items-center gap-3 transition-colors"
                >
                  <Icons.Information className="text-primary size-4" />
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-primary flex items-center gap-3 transition-colors"
                >
                  <Icons.Help className="text-primary size-4" />
                  <span>FAQ</span>
                </Link>
              </li>
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
            <Link
              to="/privacy-policy"
              title="Privacy Policy"
              className="hover:text-secondary-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              title="Terms of Service"
              className="hover:text-secondary-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
