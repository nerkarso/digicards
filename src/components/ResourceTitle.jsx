import { ArrowRight } from '@material-ui/icons';
import React from 'react';

export default function ResourceTitle({ children, resource }) {
  return (
    <div className="flex items-center">
      <span>{resource}</span>
      <ArrowRight />
      <span>{children}</span>
    </div>
  );
}
