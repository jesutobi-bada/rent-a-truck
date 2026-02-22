import { Link } from 'react-router-dom';
import {
  Button,
  Logo,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  Icons,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@rent-a-truck/ui';
import { env } from '../../env';

export const Navbar = () => {
  return (
    <nav className="bg-secondary sticky top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-xl lg:w-4/5">
      <div className="flex items-center justify-between gap-20 p-4">
        {/* Logo and App Links */}
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Logo className="text-primary h-8 w-8" />
            <span className="text-lg font-black tracking-tighter text-[#FFFCF2]">Rent-a-Truck</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={env.VITE_APP_RENTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="For Renters"
                    className="text-secondary-foreground/80 hover:text-primary font-semibold transition-colors"
                  >
                    For Renters
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={env.VITE_APP_DRIVER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="For Drivers"
                    className="text-secondary-foreground/80 hover:text-primary font-semibold transition-colors"
                  >
                    For Drivers
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={env.VITE_APP_ADMIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enterprise"
                    className="text-secondary-foreground/80 hover:text-primary font-semibold transition-colors"
                  >
                    Enterprise
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Desktop Support Links & CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-6">
            <Link
              to="/help-center"
              title="Help Center"
              className="text-secondary-foreground/70 hover:text-primary text-sm font-semibold transition-colors"
            >
              Help Center
            </Link>
            <Link
              to="/faq"
              title="FAQ"
              className="text-secondary-foreground/70 hover:text-primary text-sm font-semibold transition-colors"
            >
              FAQ
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm">
                Get Started
                <Icons.ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-background border-border w-56 rounded-xl p-2 shadow-2xl"
            >
              <DropdownMenuItem
                asChild
                className="group flex cursor-pointer items-center justify-between rounded-lg py-3"
              >
                <a href={env.VITE_APP_RENTER_URL} target="_blank" rel="noopener noreferrer">
                  <span className="font-bold">Rent a Truck</span>
                  <Icons.Truck className="group-hover:text-primary size-5 text-gray-400 transition-colors" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="group flex cursor-pointer items-center justify-between rounded-lg py-3"
              >
                <a href={env.VITE_APP_DRIVER_URL} target="_blank" rel="noopener noreferrer">
                  <span className="font-bold">Become a Driver</span>
                  <Icons.SteeringWheel className="group-hover:text-primary size-5 text-gray-400 transition-colors" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="group flex cursor-pointer items-center justify-between rounded-lg py-3"
              >
                <a href={env.VITE_APP_ADMIN_URL} target="_blank" rel="noopener noreferrer">
                  <span className="font-bold">Enterprise</span>
                  <Icons.Building className="group-hover:text-primary size-5 text-gray-400 transition-colors" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-background rounded-xl hover:bg-white/10"
              >
                <span className="sr-only">Open menu</span>
                <Icons.Menu strokeWidth={3} className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-full max-w-none p-3 shadow-none backdrop-blur-2xl outline-none"
            >
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Logo className="text-primary h-8 w-8" />
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-white/10">
                      <Icons.Cancel className="size-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>

              <nav className="flex flex-1 flex-col justify-between">
                <div className="space-y-12">
                  {/* Primary Navigation */}
                  <div className="flex flex-col gap-6">
                    <a
                      href={env.VITE_APP_RENTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="For Renters"
                      className="group flex flex-col gap-1 transition-transform active:scale-95"
                    >
                      <span className="text-secondary group-hover:text-primary text-2xl font-black tracking-tighter transition-colors">
                        For Renters
                      </span>
                    </a>
                    <a
                      href={env.VITE_APP_DRIVER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="For Drivers"
                      className="group flex flex-col gap-1 transition-transform active:scale-95"
                    >
                      <span className="text-secondary group-hover:text-primary text-2xl font-black tracking-tighter transition-colors">
                        For Drivers
                      </span>
                    </a>
                    <a
                      href={env.VITE_APP_ADMIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="For Enterprise"
                      className="group flex flex-col gap-1 transition-transform active:scale-95"
                    >
                      <span className="text-secondary group-hover:text-primary text-2xl font-black tracking-tighter transition-colors">
                        For Enterprise
                      </span>
                    </a>
                    <Link
                      to="/help-center"
                      title="Help Center"
                      className="group flex flex-col gap-1 transition-transform active:scale-95"
                    >
                      <span className="text-secondary group-hover:text-primary text-2xl font-black tracking-tighter transition-colors">
                        Help Center
                      </span>
                    </Link>
                    <Link
                      to="/faq"
                      title="FAQs"
                      className="group flex flex-col gap-1 transition-transform active:scale-95"
                    >
                      <span className="text-secondary group-hover:text-primary text-2xl font-black tracking-tighter transition-colors">
                        FAQs
                      </span>
                    </Link>
                  </div>
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
                          className="border-secondary text-secondary rounded-lg border bg-transparent p-2 transition-all duration-300"
                        >
                          <Icon className="size-5" />
                        </a>
                      ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
