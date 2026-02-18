import { PlusSignIcon, PencilEdit01Icon, Delete02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/button';

import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';

const meta = {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <ButtonGroup {..._args}>
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="outline">Three</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const Vertical: Story = {
  render: (_args) => (
    <ButtonGroup {..._args} orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const WithSeparator: Story = {
  render: (_args) => (
    <ButtonGroup {..._args}>
      <Button variant="outline" size="icon">
        <HugeiconsIcon icon={PlusSignIcon} />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon">
        <HugeiconsIcon icon={PencilEdit01Icon} />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon">
        <HugeiconsIcon icon={Delete02Icon} />
      </Button>
    </ButtonGroup>
  ),
  args: {},
};

export const WithText: Story = {
  render: (_args) => (
    <ButtonGroup {..._args}>
      <ButtonGroupText>Search</ButtonGroupText>
      <Button variant="outline">Everything</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const Mixed: Story = {
  render: (_args) => (
    <ButtonGroup {..._args}>
      <ButtonGroupText>Actions</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outline">Save</Button>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const Nested: Story = {
  render: (_args) => (
    <ButtonGroup {..._args}>
      <ButtonGroup>
        <Button variant="outline">Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Independent Button</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
  args: {},
};
