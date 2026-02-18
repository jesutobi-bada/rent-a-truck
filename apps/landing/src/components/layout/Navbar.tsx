import {
  Button,
  Logo,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Sheet,
  TypographySmall,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Icons,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@rent-a-truck/ui';

export const Navbar = () => {
  return (
    <nav className="bg-secondary sticky top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-xl lg:w-4/5">
      <div className="flex items-center justify-between gap-20 p-4">
        {/* Logo and App Links */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Logo className="text-primary h-8 w-8" />
            <span className="text-lg font-black tracking-tighter text-[#FFFCF2]">Rent-a-Truck</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="text-secondary-foreground/80 hover:text-primary font-semibold transition-colors"
                  >
                    For Renters
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="text-secondary-foreground/80 hover:text-primary font-semibold transition-colors"
                  >
                    For Drivers
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
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
            <a
              href="#"
              className="text-secondary-foreground/70 hover:text-primary text-sm font-semibold transition-colors"
            >
              Help Center
            </a>
            <a
              href="#"
              className="text-secondary-foreground/70 hover:text-primary text-sm font-semibold transition-colors"
            >
              FAQ
            </a>
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
              <DropdownMenuItem className="group flex cursor-pointer items-center justify-between rounded-lg py-3">
                <span className="font-bold">Rent a Truck</span>
                <Icons.Truck className="group-hover:text-primary size-5 text-gray-400 transition-colors" />
              </DropdownMenuItem>
              <DropdownMenuItem className="group flex cursor-pointer items-center justify-between rounded-lg py-3">
                <span className="font-bold">Become a Driver</span>
                <Icons.SteeringWheel className="group-hover:text-primary size-5 text-gray-400 transition-colors" />
              </DropdownMenuItem>
              <DropdownMenuItem className="group flex cursor-pointer items-center justify-between rounded-lg py-3">
                <span className="font-bold">Enterprise</span>
                <Icons.Building className="group-hover:text-primary size-5 text-gray-400 transition-colors" />
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
                <Icons.Menu strokeWidth={2.5} className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-border flex flex-col gap-8 border-l p-6 shadow-2xl"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Logo className="text-primary h-6 w-6" />
                  <span className="text-secondary font-black tracking-tight">Rent-a-Truck</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-8">
                <div className="space-y-4">
                  <TypographySmall className="text-muted-foreground text-[10px] font-black tracking-[0.2em] uppercase">
                    Get Started
                  </TypographySmall>
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="hover:bg-muted group flex items-center justify-between rounded-xl p-4 transition-all"
                    >
                      <span className="text-secondary font-bold">Rent a Truck</span>
                      <Icons.Truck className="group-hover:text-primary size-5 text-gray-400" />
                    </a>
                    <a
                      href="#"
                      className="hover:bg-muted group flex items-center justify-between rounded-xl p-4 transition-all"
                    >
                      <span className="text-secondary font-bold">Become a Driver</span>
                      <Icons.SteeringWheel className="group-hover:text-primary size-5 text-gray-400" />
                    </a>
                    <a
                      href="#"
                      className="hover:bg-muted group flex items-center justify-between rounded-xl p-4 transition-all"
                    >
                      <span className="text-secondary font-bold">Logistics</span>
                      <Icons.Package className="group-hover:text-primary size-5 text-gray-400" />
                    </a>
                    <a
                      href="#"
                      className="hover:bg-muted group flex items-center justify-between rounded-xl p-4 transition-all"
                    >
                      <span className="text-secondary font-bold">Enterprise</span>
                      <Icons.Building className="group-hover:text-primary size-5 text-gray-400" />
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <TypographySmall className="text-muted-foreground text-[10px] font-black tracking-[0.2em] uppercase">
                    Support
                  </TypographySmall>
                  <div className="flex flex-col gap-4 px-4">
                    <a
                      href="#"
                      className="text-secondary hover:text-primary text-lg font-bold transition-colors"
                    >
                      Help Center
                    </a>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary text-lg font-bold transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary text-lg font-bold transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <Button size="lg" className="h-14 w-full rounded-xl font-bold">
                  Sign Up
                </Button>
                <Button size="lg" variant="outline">
                  Log In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
