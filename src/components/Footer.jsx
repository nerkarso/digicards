import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <div className="container flex items-center max-w-screen-xl px-5 py-8 mx-auto">
        <Link to="/" className="flex items-center mr-auto">
          <img src="/favicon.svg" className="w-8 h-8" alt="Logo" />
          <div className="ml-3">
            <h5 className="text-sm text-neutral-600">Top Excel</h5>
            <h1 className="text-2xl font-bold">Digicards</h1>
          </div>
        </Link>
        <p className="text-neutral-500">&copy; 2021 Top Excel. All rights reserved.</p>
      </div>
    </footer>
  );
}
