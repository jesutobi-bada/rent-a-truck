import { TextBoldIcon, TextItalicIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Toggle } from './toggle';

const meta = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Toggle {..._args}>
      <HugeiconsIcon icon={TextBoldIcon} />
    </Toggle>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (_args) => (
    <Toggle {..._args}>
      <HugeiconsIcon icon={TextItalicIcon} />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: (_args) => (
    <Toggle {..._args}>
      <HugeiconsIcon icon={TextBoldIcon} className="mr-2" />
      Bold
    </Toggle>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (_args) => (
    <Toggle {..._args}>
      <HugeiconsIcon icon={TextBoldIcon} />
    </Toggle>
  ),
};
