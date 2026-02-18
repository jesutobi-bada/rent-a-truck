import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '../../../lib/utils';

export function TypographyH1({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'h1'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'h1') as React.ElementType;
  return (
    <Comp
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance lg:text-5xl',
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH2({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'h2'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'h2') as React.ElementType;
  return (
    <Comp
      className={cn('scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    />
  );
}

export function TypographyH3({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'h3'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'h3') as React.ElementType;
  return (
    <Comp
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

export function TypographyH4({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'h4'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'h4') as React.ElementType;
  return (
    <Comp
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

export function TypographyH5({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'h5'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'h5') as React.ElementType;
  return (
    <Comp
      className={cn('scroll-m-20 text-lg font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

export function TypographyH6({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'h6'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'h6') as React.ElementType;
  return (
    <Comp
      className={cn('scroll-m-20 text-base font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

export function TypographyP({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'p'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'p') as React.ElementType;
  return <Comp className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />;
}

export function TypographyBlockquote({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'blockquote'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'blockquote') as React.ElementType;
  return <Comp className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />;
}

export function TypographyLead({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'p'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'p') as React.ElementType;
  return <Comp className={cn('text-muted-foreground text-xl', className)} {...props} />;
}

export function TypographyLarge({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'div') as React.ElementType;
  return <Comp className={cn('text-lg font-semibold', className)} {...props} />;
}

export function TypographySmall({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'small'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'small') as React.ElementType;
  return <Comp className={cn('text-sm leading-none font-medium', className)} {...props} />;
}

export function TypographyMuted({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'p'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'p') as React.ElementType;
  return <Comp className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

export function TypographyInlineCode({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'code'> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot.Root : 'code') as React.ElementType;
  return (
    <Comp
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    />
  );
}
