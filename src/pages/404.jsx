import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <img src="/img/undraw-taken.svg" className="w-64 mb-8" />
        <h1 className="mb-8 text-xl font-medium text-neutral-600">Page not found</h1>
        <Link to="/" className="link">
          Back to home
        </Link>
      </div>
    </div>
  );
}
