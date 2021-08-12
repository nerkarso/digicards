import cx from 'classnames';
import React, { forwardRef } from 'react';

const Input = forwardRef(({ className, label, ...props }, ref) => {
  const sanitizeLabel = (value) => value.toLowerCase().replace(' ', '-');

  return (
    <div className="relative">
      <input
        id={sanitizeLabel(label)}
        ref={ref}
        placeholder={label}
        className={cx(
          'peer rounded-md border-neutral-400 focus:border-primary-500 focus:ring-primary-500 transition duration-150 placeholder-transparent',
          className,
        )}
        {...props}
      />
      <label
        htmlFor={sanitizeLabel(label)}
        className="absolute px-1 text-sm transition-all bg-white -top-3 left-2 text-neutral-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm">
        {label}
      </label>
    </div>
  );
});

export default Input;
