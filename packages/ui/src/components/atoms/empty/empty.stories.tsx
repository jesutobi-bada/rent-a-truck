import { Search01Icon, File01Icon, Rocket01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/button';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty';

const meta = {
  title: 'Atoms/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Empty {..._args}>
      <EmptyHeader>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filters to find what you&apos;re looking for.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithIcon: Story = {
  render: (_args) => (
    <Empty {..._args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>No search results</EmptyTitle>
        <EmptyDescription>We couldn&apos;t find any results for your search term.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithAction: Story = {
  render: (_args) => (
    <Empty {..._args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>No files uploaded</EmptyTitle>
        <EmptyDescription>Upload your files to get started with this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload files</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const Full: Story = {
  render: (_args) => (
    <Empty {..._args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={Rocket01Icon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>Ready for launch</EmptyTitle>
        <EmptyDescription>
          Your project is ready to be deployed. Click the button below to start the deployment
          process.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="lg">Deploy Project</Button>
      </EmptyContent>
    </Empty>
  ),
};
