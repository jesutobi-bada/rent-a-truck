import type { Meta, StoryObj } from '@storybook/react-vite';

import { Logo } from './logo';

const meta = {
  title: 'Molecules/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    className: 'size-12',
  },
};

export const CustomColor: Story = {
  args: {
    className: 'text-blue-500',
  },
};
