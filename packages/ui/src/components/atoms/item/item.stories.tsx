import {
  Archive01Icon,
  Delete01Icon,
  Edit01Icon,
  File01Icon,
  Settings01Icon,
  StarIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/button';

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item';

const meta = {
  title: 'Atoms/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Item {..._args} className="w-[400px]">
      <ItemMedia>
        <HugeiconsIcon icon={File01Icon} className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Documentation.pdf</ItemTitle>
        <ItemDescription>2.4 MB • Updated yesterday</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const WithMedia: Story = {
  render: (_args) => (
    <div className="flex w-[400px] flex-col gap-4">
      <Item {..._args}>
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={Settings01Icon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Settings</ItemTitle>
          <ItemDescription>Manage your preferences</ItemDescription>
        </ItemContent>
      </Item>

      <Item {..._args}>
        <ItemMedia variant="image">
          <img src="https://github.com/shadcn.png" alt="Avatar" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>User Profile</ItemTitle>
          <ItemDescription>View your public profile</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithActions: Story = {
  render: (_args) => (
    <Item {..._args} className="w-[400px]">
      <ItemMedia>
        <HugeiconsIcon icon={Archive01Icon} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Project Archive</ItemTitle>
        <ItemDescription>Old projects from 2023</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon-xs">
          <HugeiconsIcon icon={Edit01Icon} />
        </Button>
        <Button variant="ghost" size="icon-xs">
          <HugeiconsIcon icon={Delete01Icon} className="text-destructive" />
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const Group: Story = {
  render: (_args) => (
    <ItemGroup className="w-[400px] rounded-lg border p-2">
      <Item>
        <ItemMedia>
          <HugeiconsIcon icon={StarIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Starred Items</ItemTitle>
        </ItemContent>
        <ItemActions>
          <span className="text-muted-foreground text-xs">12</span>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <HugeiconsIcon icon={File01Icon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Recent Files</ItemTitle>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia>
          <HugeiconsIcon icon={Archive01Icon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Archive</ItemTitle>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
