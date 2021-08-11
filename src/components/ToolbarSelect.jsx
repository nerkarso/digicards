import React, { forwardRef } from 'react';

const ToolbarSelect = forwardRef(({ items, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className="h-8 py-0 text-base transition duration-150 border-transparent rounded-md focus:ring-primary-500 focus:border-primary-500 focus:bg-white hover:bg-neutral-100"
      {...props}>
      {items.map(({ text, value }, i) => (
        <option value={value} key={i}>
          {text}
        </option>
      ))}
    </select>
  );
});

export default ToolbarSelect;
