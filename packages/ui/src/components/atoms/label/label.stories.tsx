import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../input/input';

import { Label } from './label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const WithInput: Story = {
  render: (_args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" {..._args}>
        Email
      </Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};
