import type { Meta, StoryObj } from '@storybook/react-vite';

import { Separator } from './separator';

const meta = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" {..._args} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: (_args) => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Settings</h4>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-4" {..._args} />
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Profile</h4>
        <p className="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: (_args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Dashboard</div>
      <Separator orientation="vertical" {..._args} />
      <div>Orders</div>
      <Separator orientation="vertical" {..._args} />
      <div>Customers</div>
    </div>
  ),
};
