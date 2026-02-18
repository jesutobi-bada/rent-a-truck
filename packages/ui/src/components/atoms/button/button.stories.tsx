import { SmartPhone01Icon, ZapIcon, Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text', 'secondary', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'icon'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Contact Driver',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Contact Driver',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Contact Driver',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Contact Driver',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    children: <HugeiconsIcon icon={ZapIcon} />,
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'solid',
    size: 'lg',
    leftIcon: <HugeiconsIcon icon={SmartPhone01Icon} />,
    children: 'Contact Driver',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Processing',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg">Large</Button>
        <Button size="md">Medium</Button>
        <Button size="sm">Small</Button>
        <Button size="icon">
          <HugeiconsIcon icon={Mail01Icon} />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button isLoading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button leftIcon={<HugeiconsIcon icon={SmartPhone01Icon} />}>With Icon</Button>
      </div>
    </div>
  ),
};
