import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './textarea';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-[400px]',
    placeholder: 'Type your message here.',
  },
};

export const Disabled: Story = {
  args: {
    className: 'w-[400px]',
    placeholder: 'Type your message here.',
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (_args) => (
    <div className="grid w-full gap-1.5">
      <label
        htmlFor="message"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Your Message
      </label>
      <Textarea id="message" className="w-[400px]" {..._args} />
      <p className="text-muted-foreground text-sm">
        Your message will be sent to our support team.
      </p>
    </div>
  ),
};
