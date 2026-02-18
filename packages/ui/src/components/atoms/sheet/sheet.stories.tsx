import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

const meta = {
  title: 'Atoms/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Sheet {..._args}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm">Name</span>
            <input className="col-span-3 rounded border px-2 py-1" defaultValue="John Doe" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm">Username</span>
            <input className="col-span-3 rounded border px-2 py-1" defaultValue="@johndoe" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

export const Sides: Story = {
  render: (_args) => (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} {..._args}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet {side}</SheetTitle>
              <SheetDescription>This sheet is opening from the {side} side.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};
