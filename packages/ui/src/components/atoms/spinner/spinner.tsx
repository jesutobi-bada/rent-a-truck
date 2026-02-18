import { Loading03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { cn } from '../../../lib/utils';

function Spinner({ className, strokeWidth, ...props }: React.ComponentProps<'svg'>) {
  const strokeWidthNumber = typeof strokeWidth === 'string' ? parseFloat(strokeWidth) : strokeWidth;
  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      strokeWidth={strokeWidthNumber || 2}
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  );
}

export { Spinner };
