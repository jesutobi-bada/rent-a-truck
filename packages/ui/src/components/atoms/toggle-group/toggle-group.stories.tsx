import { TextBoldIcon, TextItalicIcon, TextUnderlineIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta = {
  title: 'Atoms/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
  },
  render: (_args) => (
    <ToggleGroup {..._args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <HugeiconsIcon icon={TextBoldIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <HugeiconsIcon icon={TextItalicIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <HugeiconsIcon icon={TextUnderlineIcon} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    type: 'single',
  },
  render: (_args) => (
    <ToggleGroup {..._args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <HugeiconsIcon icon={TextBoldIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <HugeiconsIcon icon={TextItalicIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <HugeiconsIcon icon={TextUnderlineIcon} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (_args) => (
    <ToggleGroup {..._args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <HugeiconsIcon icon={TextBoldIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <HugeiconsIcon icon={TextItalicIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <HugeiconsIcon icon={TextUnderlineIcon} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
    type: 'single',
  },
  render: (_args) => (
    <ToggleGroup {..._args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <HugeiconsIcon icon={TextBoldIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <HugeiconsIcon icon={TextItalicIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <HugeiconsIcon icon={TextUnderlineIcon} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
