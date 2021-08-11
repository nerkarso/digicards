import SocialLinks from '@/components/SocialLinks';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function WebsiteNavbar() {
  return (
    <header>
      <div className="container items-center max-w-screen-xl p-5 mx-auto lg:flex">
        <a className="flex items-center justify-center mr-auto font-medium">
          <img src="/img/icon.svg" className="w-10 h-10" />
          <div className="ml-3">
            <h5 className="text-sm text-neutral-600">TopExcel</h5>
            <h1 className="text-2xl font-bold">Digicards</h1>
          </div>
        </a>
        <div className="flex items-center justify-center my-4 mr-8 space-x-2">
          <NavLink
            to="/"
            exact
            className="px-4 py-2 font-medium transition duration-150 rounded-md hover:text-primary-500 focus:text-primary-600 focus:outline-none"
            activeClassName="text-primary-500">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="px-4 py-2 font-medium transition duration-150 rounded-md hover:text-primary-500 focus:text-primary-600 focus:outline-none"
            activeClassName="text-primary-500">
            About
          </NavLink>
          <NavLink
            to="/press-room"
            className="px-4 py-2 font-medium transition duration-150 rounded-md hover:text-primary-500 focus:text-primary-600 focus:outline-none"
            activeClassName="text-primary-500">
            Press Room
          </NavLink>
          <SocialLinks />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/signin"
            className="px-4 py-2 font-medium transition duration-150 rounded-lg bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:outline-none">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 font-medium text-white transition duration-150 rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:outline-none">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
