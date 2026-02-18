import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './switch';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const WithLabel: Story = {
  render: (_args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {..._args} />
      <label htmlFor="airplane-mode" className="text-sm leading-none font-medium">
        Airplane Mode
      </label>
    </div>
  ),
};
