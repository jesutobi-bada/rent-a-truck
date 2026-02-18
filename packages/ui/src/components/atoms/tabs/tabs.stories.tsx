import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/button';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: 'Atoms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Tabs defaultValue="account" className="w-[400px]" {..._args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Account</h4>
            <p className="text-muted-foreground text-sm">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-right text-sm">Name</span>
              <input className="col-span-3 rounded border px-2 py-1" defaultValue="John Doe" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-right text-sm">Username</span>
              <input className="col-span-3 rounded border px-2 py-1" defaultValue="@johndoe" />
            </div>
          </div>
          <Button>Save changes</Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Password</h4>
            <p className="text-muted-foreground text-sm">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-right text-sm">Current</span>
              <input className="col-span-3 rounded border px-2 py-1" type="password" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-right text-sm">New</span>
              <input className="col-span-3 rounded border px-2 py-1" type="password" />
            </div>
          </div>
          <Button>Save password</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Line: Story = {
  render: (_args) => (
    <Tabs defaultValue="all" className="w-[400px]" {..._args}>
      <TabsList variant="line">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="p-4">
        All tasks will be listed here.
      </TabsContent>
      <TabsContent value="active" className="p-4">
        Active tasks will be listed here.
      </TabsContent>
      <TabsContent value="completed" className="p-4">
        Completed tasks will be listed here.
      </TabsContent>
    </Tabs>
  ),
};
