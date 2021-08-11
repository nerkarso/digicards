import cx from 'classnames';
import React, { forwardRef } from 'react';

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cx(
        'rounded-md border-neutral-400 focus:border-primary-500 focus:ring-primary-500 transition duration-150',
        className,
      )}
      {...props}
    />
  );
});

export default Input;
