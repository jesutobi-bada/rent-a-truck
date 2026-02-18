import type { Meta, StoryObj } from '@storybook/react-vite';
import { addDays, format } from 'date-fns';
import { useState } from 'react';
import { type DateRange } from 'react-day-picker';

import { Calendar } from './calendar';

const meta = {
  title: 'Atoms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'single',
    className: 'rounded-md border shadow-sm',
  },
};

const SingleCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
      />
      <p className="text-muted-foreground text-sm">
        {date ? `Selected: ${format(date, 'PPP')}` : 'Please pick a day.'}
      </p>
    </div>
  );
};

export const Single: Story = {
  render: () => <SingleCalendar />,
};

const MultipleCalendar = () => {
  const [dates, setDates] = useState<Date[] | undefined>([]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border shadow-sm"
      />
      <p className="text-muted-foreground text-sm">
        {dates && dates.length > 0 ? `Selected ${dates.length} days.` : 'Please pick some days.'}
      </p>
    </div>
  );
};

export const Multiple: Story = {
  render: () => <MultipleCalendar />,
};

const RangeCalendar = () => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border shadow-sm"
      />
      <p className="text-muted-foreground text-sm">
        {range?.from ? (
          range.to ? (
            <>
              {format(range.from, 'LLL dd, y')} - {format(range.to, 'LLL dd, y')}
            </>
          ) : (
            format(range.from, 'LLL dd, y')
          )
        ) : (
          'Please pick a range.'
        )}
      </p>
    </div>
  );
};

export const Range: Story = {
  render: () => <RangeCalendar />,
};

export const Disabled: Story = {
  args: {
    mode: 'single',
    disabled: (date) => date < new Date() || date > addDays(new Date(), 14),
    className: 'rounded-md border shadow-sm',
  },
};

const WithFooterCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      footer={
        <p className="mt-2 text-center text-sm font-medium">
          You picked {date ? format(date, 'PPP') : 'nothing'}.
        </p>
      }
    />
  );
};

export const WithFooter: Story = {
  render: () => <WithFooterCalendar />,
};
