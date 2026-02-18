import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Progress } from './progress';

const meta = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    className: 'w-[300px]',
  },
  render: (_args) => <Progress {..._args} />,
};

export const Value60: Story = {
  args: {
    value: 60,
    className: 'w-[300px]',
  },
  render: (_args) => <Progress {..._args} />,
};

export const Value100: Story = {
  args: {
    value: 100,
    className: 'w-[300px]',
  },
  render: (_args) => <Progress {..._args} />,
};

const InteractiveProgress = (_args: React.ComponentProps<typeof Progress>) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress {..._args} value={progress} className="w-[300px]" />;
};

export const Interactive: Story = {
  render: (_args) => <InteractiveProgress {..._args} />,
};
