import React from 'react';

export default function ToolbarButton({ children, ...props }) {
  return (
    <button className="p-1 rounded-md hover:bg-neutral-100 focus:bg-neutral-200 transition duration-150" {...props}>
      {children}
    </button>
  );
}
