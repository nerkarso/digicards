import React, { forwardRef } from 'react';

const MenubarButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="px-2 py-1 transition duration-150 rounded-md hover:bg-neutral-100 focus:outline-none focus:bg-neutral-200"
      {...props}>
      {children}
    </button>
  );
});

export default MenubarButton;
