import {
  Copy01Icon,
  Search01Icon,
  Globe02Icon,
  Mail01Icon,
  LockKeyIcon,
  ViewIcon,
  ViewOffSlashIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../button/button';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from './input-group';

const meta = {
  title: 'Atoms/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <InputGroup {..._args} className="w-[300px]">
      <InputGroupInput placeholder="Email" type="email" />
    </InputGroup>
  ),
};

export const WithAddon: Story = {
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <InputGroup {..._args} className="w-[300px]">
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="website" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup {..._args} className="w-[300px]">
        <InputGroupAddon>
          <HugeiconsIcon icon={Globe02Icon} className="text-muted-foreground size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="www.example.com" />
      </InputGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <InputGroup {..._args} className="w-[300px]">
        <InputGroupInput placeholder="Enter coupon code" />
        <InputGroupAddon align="inline-end">
          <Button variant="ghost" size="sm" className="h-full rounded-l-none border-l">
            Apply
          </Button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup {..._args} className="w-[300px]">
        <InputGroupInput defaultValue="npm install @rent-a-truck/ui" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm" aria-label="Copy">
            <HugeiconsIcon icon={Copy01Icon} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (_args) => (
    <div className="flex flex-col gap-4">
      <InputGroup {..._args} className="w-[300px]">
        <InputGroupAddon>
          <HugeiconsIcon icon={Mail01Icon} className="text-muted-foreground size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" />
      </InputGroup>
    </div>
  ),
};

const PasswordDemo = (_args: React.ComponentProps<typeof InputGroup>) => {
  const [show, setShow] = useState(false);
  return (
    <InputGroup {..._args} className="w-[300px]">
      <InputGroupAddon>
        <HugeiconsIcon icon={LockKeyIcon} className="text-muted-foreground size-4" />
      </InputGroupAddon>
      <InputGroupInput type={show ? 'text' : 'password'} placeholder="Password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-sm"
          onClick={() => setShow(!show)}
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          <HugeiconsIcon icon={show ? ViewOffSlashIcon : ViewIcon} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export const Password: Story = {
  render: (_args) => <PasswordDemo {..._args} />,
};

export const Search: Story = {
  render: (_args) => (
    <InputGroup {..._args} className="w-[300px]">
      <InputGroupAddon>
        <HugeiconsIcon icon={Search01Icon} className="text-muted-foreground size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText className="text-xs">⌘K</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};
