import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../input/input';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from './field';

const meta = {
  title: 'Atoms/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Field {..._args}>
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="Enter your username" />
      <FieldDescription>This is your public display name.</FieldDescription>
      <FieldError />
    </Field>
  ),
};

export const WithError: Story = {
  render: (_args) => (
    <Field {..._args} invalid>
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="Enter your email" defaultValue="invalid-email" />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (_args) => (
    <Field {..._args} className="w-[400px]">
      <FieldLabel>Full Name</FieldLabel>
      <FieldContent>
        <Input placeholder="Enter your full name" />
        <FieldDescription>Your legal name as it appears on your ID.</FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const Group: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Account Settings</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <Input placeholder="johndoe" />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input placeholder="john@example.com" />
        </Field>
        <FieldSeparator>Optional</FieldSeparator>
        <Field>
          <FieldLabel>Website</FieldLabel>
          <Input placeholder="https://example.com" />
          <FieldDescription>Your personal portfolio or blog.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
