import {
  Home01Icon,
  Settings02Icon,
  UserCircleIcon,
  Calendar03Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from './sidebar';

const meta = {
  title: 'Atoms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { title: 'Home', icon: Home01Icon, url: '#' },
  { title: 'Search', icon: Search01Icon, url: '#' },
  { title: 'Calendar', icon: Calendar03Icon, url: '#' },
  { title: 'Profile', icon: UserCircleIcon, url: '#' },
  { title: 'Settings', icon: Settings02Icon, url: '#' },
];

export const Default: Story = {
  render: (_args) => (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar {..._args}>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <div className="bg-primary flex size-8 items-center justify-center rounded-lg text-white">
                RT
              </div>
              <div className="flex flex-col">
                <span className="leading-none font-semibold">Rent-a-Truck</span>
                <span className="text-muted-foreground text-xs">v1.0.0</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <HugeiconsIcon icon={item.icon} />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2">
              <SidebarMenuButton className="w-full justify-start">
                <HugeiconsIcon icon={UserCircleIcon} />
                <span>Account</span>
              </SidebarMenuButton>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-6">
          <SidebarTrigger />
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p className="text-muted-foreground">
              Sidebar is {_args.collapsible === 'icon' ? 'collapsed to icon' : 'in full width'}.
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  ),
};

export const Floating: Story = {
  ...Default,
  args: {
    variant: 'floating',
  },
};

export const CollapsibleIcon: Story = {
  ...Default,
  args: {
    collapsible: 'icon',
  },
};
