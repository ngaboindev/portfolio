import NextLink from 'next/link';
import { cn } from '@/lib/utils';

type LinkProps = React.ComponentProps<typeof NextLink> & {
  external?: boolean;
};

export function Link({ className, external, children, ...props }: LinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <NextLink
      className={cn(
        'underline underline-offset-4 hover:no-underline transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:rounded-sm',
        className
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </NextLink>
  );
}
