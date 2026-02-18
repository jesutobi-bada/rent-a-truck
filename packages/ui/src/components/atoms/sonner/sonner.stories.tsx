import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';

import { Button } from '../button/button';

import { Toaster } from './sonner';

const meta = {
  title: 'Atoms/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="flex flex-wrap gap-2">
      <Toaster {..._args} />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Success: Data saved successfully.')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error('Error: Something went wrong.')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Warning: Please check your input.')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info('Info: A new update is available.')}>
        Info
      </Button>
    </div>
  ),
  args: {},
};
