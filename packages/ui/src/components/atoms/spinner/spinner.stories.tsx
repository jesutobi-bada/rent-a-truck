import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './spinner';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'size-4',
  },
};

export const Large: Story = {
  args: {
    className: 'size-8',
  },
};

export const ExtraLarge: Story = {
  args: {
    className: 'size-12',
  },
};

export const PrimaryColor: Story = {
  args: {
    className: 'size-8 text-primary',
  },
};

export const Thicker: Story = {
  args: {
    className: 'size-8',
    strokeWidth: 4,
  },
};
