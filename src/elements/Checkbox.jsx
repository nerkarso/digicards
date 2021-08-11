import cx from 'classnames';
import React, { forwardRef } from 'react';

const Checkbox = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <label className={cx('flex items-center space-x-2', className)}>
      <input
        type="checkbox"
        ref={ref}
        className="transition duration-150 rounded text-primary-500 focus:border-primary-500 focus:ring-primary-400"
        {...props}
      />
      <span>{children}</span>
    </label>
  );
});

export default Checkbox;
