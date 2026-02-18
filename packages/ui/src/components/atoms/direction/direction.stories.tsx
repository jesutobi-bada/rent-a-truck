import type { Meta, StoryObj } from '@storybook/react-vite';

import { DirectionProvider } from './direction';

const meta = {
  title: 'Atoms/Direction',
  component: DirectionProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DirectionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dir: 'ltr',
    children: (
      <div className="bg-secondary flex w-[300px] gap-2 rounded-md p-4">
        <div className="bg-primary text-primary-foreground rounded-sm p-2">Start</div>
        <div className="bg-background ml-auto rounded-sm p-2">End</div>
      </div>
    ),
  },
};

export const RTL: Story = {
  args: {
    dir: 'rtl',
    children: (
      <div className="bg-secondary flex w-[300px] gap-2 rounded-md p-4">
        <div className="bg-primary text-primary-foreground rounded-sm p-2">Start</div>
        <div className="bg-background ml-auto rounded-sm p-2">End</div>
      </div>
    ),
  },
};
