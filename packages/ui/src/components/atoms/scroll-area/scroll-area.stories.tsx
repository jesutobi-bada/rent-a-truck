import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { ScrollArea, ScrollBar } from './scroll-area';

const meta = {
  title: 'Atoms/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: Story = {
  render: (_args) => (
    <ScrollArea className="h-72 w-48 rounded-md border" {..._args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <hr className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: (_args) => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap" {..._args}>
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="bg-muted aspect-[3/4] h-fit w-fit p-10">Photo {i}</div>
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">
              Photo by <span className="text-foreground font-semibold">Artist {i}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: (_args) => (
    <ScrollArea className="h-72 w-96 rounded-md border" {..._args}>
      <div className="grid w-[600px] grid-cols-3 gap-4 p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bg-muted flex h-32 w-full items-center justify-center rounded-md border"
          >
            Item {i}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  ),
};
