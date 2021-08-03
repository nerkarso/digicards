import { Button } from '@vechaiui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function Navigation() {
  return (
    <header>
      <div className="container items-center max-w-screen-xl p-5 mx-auto lg:flex">
        <a className="flex items-center justify-center mr-auto font-medium">
          <img src="/favicon.svg" className="w-10 h-10" alt="Logo" />
          <div className="ml-3">
            <h5 className="text-sm text-neutral-600">TopExcel</h5>
            <h1 className="text-2xl font-bold">Digicards</h1>
          </div>
        </a>
        <div className="flex items-center justify-center my-4 mr-8 space-x-2">
          <Link to="/" className="px-4 py-2 font-medium hover:text-primary-500">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 font-medium hover:text-primary-500">
            About
          </Link>
          <Link to="/press-room" className="px-4 py-2 font-medium hover:text-primary-500">
            Press Room
          </Link>
          <SocialLinks />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/login">
            <Button color="primary" variant="solid" size="lg">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="lg">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
