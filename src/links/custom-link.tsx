import classNames from 'classnames';

import UnstyledLink, { UnstyledLinkProps } from './unstyled-link';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={classNames(
        'inline-flex items-center font-medium',
        ' border-b border-solid border-transparent',
        'hover:border-solid text-zinc-900 dark:text-zinc-300 hover:text-zinc-600 hover:dark:text-white hover:border-black hover:dark:border-green-200 duration-300',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
