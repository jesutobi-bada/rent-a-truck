import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

import { Button } from '../button/button';
import { Label } from '../label/label';

import { Checkbox } from './checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => <Checkbox {..._args} />,
};

export const WithLabel: Story = {
  render: (_args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {..._args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: (_args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled {..._args} />
      <Label htmlFor="disabled">Disabled checkbox</Label>
    </div>
  ),
};

export const Form: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit } = useForm({
      defaultValues: {
        mobile: false,
      },
    });

    const onSubmit = (data: { mobile: boolean }) => {
      toast.success('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Toaster />
        <div className="flex items-center space-x-2">
          <Checkbox id="mobile" {...register('mobile')} />
          <Label htmlFor="mobile">Use different settings for my mobile devices</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  },
};
