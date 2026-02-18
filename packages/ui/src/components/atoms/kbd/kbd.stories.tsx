import type { Meta, StoryObj } from '@storybook/react-vite';

import { Kbd, KbdGroup } from './kbd';

const meta = {
  title: 'Atoms/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'K',
  },
};

export const Modifier: Story = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>N</Kbd>
      </KbdGroup>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <p className="text-muted-foreground text-sm">
      Press <Kbd>⌘</Kbd> <Kbd>J</Kbd> to toggle the panel.
    </p>
  ),
};
