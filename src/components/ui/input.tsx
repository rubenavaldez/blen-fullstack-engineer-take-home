// components/ui/input.tsx

import { cn } from '@/lib/utils';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50 dark:placeholder-stone-500 dark:focus:ring-stone-400 dark:focus:ring-offset-stone-900',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
