import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="container flex flex-col items-center justify-center max-w-screen-xl px-5 py-8 mx-auto sm:justify-between sm:flex-row-reverse">
        <div className="inline-flex mb-4 space-x-2 sm:mb-0">
          <SocialLinks />
        </div>
        <p className="text-neutral-500">&copy; 2021 TopExcel Marketing Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
