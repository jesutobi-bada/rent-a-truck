import { MoreHorizontalIcon, Share01Icon, ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Button } from '../button/button';

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Card {..._args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description providing more context.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. You can put anything here.</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (_args) => (
    <Card {..._args} className="w-[300px]">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>A more compact card layout.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Condensed padding and smaller typography.</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: (_args) => (
    <Card {..._args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your card preferences.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <HugeiconsIcon icon={MoreHorizontalIcon} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-muted-foreground text-xs">Receive daily updates.</p>
            </div>
            <HugeiconsIcon icon={ZapIcon} className="text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: (_args) => (
    <Card {..._args} className="w-[350px]">
      <img
        src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1000&auto=format&fit=crop"
        alt="Card cover"
        className="aspect-video object-cover"
      />
      <CardHeader>
        <CardTitle>Explore Destinations</CardTitle>
        <CardDescription>Discover the beauty of the world.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Perfectly capture every moment with our curated travel packages designed for adventurers.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="icon">
          <HugeiconsIcon icon={Share01Icon} />
        </Button>
        <Button className="flex-1">Book Now</Button>
      </CardFooter>
    </Card>
  ),
};
