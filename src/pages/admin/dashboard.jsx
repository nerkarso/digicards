import React from 'react';
import { Title } from 'react-admin';
import { Link, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();

  return (
    <>
      <Title title="Dashboard" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
          <img src="/img/undraw-welcome.svg" className="w-64 mb-8" />
          <h1 className="mb-8 text-xl font-medium text-neutral-600">Welcome {location?.state?.user?.email}</h1>
          <Link
            to="/cards"
            className="px-4 py-2 font-medium text-white transition duration-150 rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:outline-none">
            View all digital cards
          </Link>
        </div>
      </div>
    </>
  );
}
