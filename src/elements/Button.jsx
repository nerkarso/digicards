import cx from 'classnames';
import React, { forwardRef } from 'react';

const Button = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cx(
        'h-10 px-4 font-medium text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:outline-none transition duration-150',
        className,
      )}
      {...props}>
      {children}
    </button>
  );
});

export default Button;
