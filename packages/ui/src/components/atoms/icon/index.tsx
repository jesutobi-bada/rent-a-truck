import {
  DeliveryTruck01Icon,
  UserGroupIcon,
  Location01Icon,
  SecurityCheckIcon,
  UserCheck01Icon,
  CreditCardIcon,
  Tick01Icon,
  Download01Icon,
  SmartPhone01Icon,
  Menu01Icon,
  ArrowDown01Icon,
  StreeringWheelIcon,
  Package01Icon,
  Building01Icon,
  ShoppingCart01Icon,
  Briefcase01Icon,
  BarChartIcon,
  CheckmarkCircle02Icon,
  Shield01Icon,
  Wallet01Icon,
  Money01Icon,
  UserIcon,
  NewTwitterIcon,
  Linkedin02Icon,
  InstagramIcon,
  Facebook02Icon,
  CallingIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon, HugeiconsProps } from '@hugeicons/react';
import React from 'react';

/**
 * Internal helper to create a brand-consistent icon component.
 * This ensures all icons go through the HugeiconsIcon component.
 */
const createIcon = (icon: Parameters<typeof HugeiconsIcon>[0]['icon']) => {
  const IconComponent = (props: Omit<HugeiconsProps, 'icon'>) => (
    <HugeiconsIcon icon={icon} {...props} />
  );
  return IconComponent;
};

/**
 * Icons gateway for the Rent-a-Truck project.
 * This centralizes all brand-approved icons from HugeIcons.
 * Usage: <Icons.Truck className="..." />
 */
export const Icons = {
  // Process / Workflow
  Truck: createIcon(DeliveryTruck01Icon),
  Users: createIcon(UserGroupIcon),
  Location: createIcon(Location01Icon),

  // Security / Trust
  Security: createIcon(SecurityCheckIcon),
  Verified: createIcon(UserCheck01Icon),
  Payment: createIcon(CreditCardIcon),

  // Social Media
  Twitter: createIcon(NewTwitterIcon),
  LinkedIn: createIcon(Linkedin02Icon),
  Instagram: createIcon(InstagramIcon),
  Facebook: createIcon(Facebook02Icon),
  Calling: createIcon(CallingIcon),

  // General UI
  CheckCircle: createIcon(Tick01Icon),
  Download: createIcon(Download01Icon),
  Smartphone: createIcon(SmartPhone01Icon),
  Menu: createIcon(Menu01Icon),
  ChevronDown: createIcon(ArrowDown01Icon),
  SteeringWheel: createIcon(StreeringWheelIcon),
  Package: createIcon(Package01Icon),
  Building: createIcon(Building01Icon),
  ShoppingCart: createIcon(ShoppingCart01Icon),
  Briefcase: createIcon(Briefcase01Icon),
  Chart: createIcon(BarChartIcon),
  CheckmarkCircle: createIcon(CheckmarkCircle02Icon),
  ShieldCheck: createIcon(Shield01Icon),
  Wallet: createIcon(Wallet01Icon),
  Dollar: createIcon(Money01Icon),
  User: createIcon(UserIcon),
  UserCheck: createIcon(UserCheck01Icon),
};

export type IconName = keyof typeof Icons;
