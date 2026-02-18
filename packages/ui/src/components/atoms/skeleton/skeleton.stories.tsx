import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './skeleton';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" {..._args} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" {..._args} />
        <Skeleton className="h-4 w-[200px]" {..._args} />
      </div>
    </div>
  ),
};

export const Card: Story = {
  render: (_args) => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" {..._args} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" {..._args} />
        <Skeleton className="h-4 w-[200px]" {..._args} />
      </div>
    </div>
  ),
};

export const Circle: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
};
