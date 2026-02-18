import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from './combobox';

const meta = {
  title: 'Atoms/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const DefaultCombobox = (_args: React.ComponentProps<typeof Combobox>) => {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <div className="w-[200px]">
      <Combobox value={value} onValueChange={(val) => setValue(val as string[])} {..._args}>
        <ComboboxInput placeholder="Search framework..." />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            <ComboboxGroup>
              <ComboboxLabel>Frameworks</ComboboxLabel>
              {frameworks.map((framework) => (
                <ComboboxItem key={framework.value} value={framework.value}>
                  {framework.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

export const Default: Story = {
  render: (_args) => <DefaultCombobox {..._args} />,
};

const MultipleCombobox = (_args: React.ComponentProps<typeof Combobox>) => {
  const [value, setValue] = React.useState<string[]>(['next.js', 'pending']);

  return (
    <div className="w-[300px]">
      <Combobox value={value} onValueChange={(val) => setValue(val as string[])} {..._args}>
        <ComboboxChips>
          {value.map((v) => (
            <ComboboxChip key={v}>{frameworks.find((f) => f.value === v)?.label || v}</ComboboxChip>
          ))}
          <ComboboxChipsInput placeholder="Search framework..." />
        </ComboboxChips>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            <ComboboxGroup>
              <ComboboxLabel>Frameworks</ComboboxLabel>
              {frameworks.map((framework) => (
                <ComboboxItem key={framework.value} value={framework.value}>
                  {framework.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

export const Multiple: Story = {
  render: (_args) => <MultipleCombobox {..._args} />,
};
