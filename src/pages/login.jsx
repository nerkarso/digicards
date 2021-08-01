import { Button, Input, Link as A } from '@vechaiui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="absolute inset-0 flex flex-col w-full h-full overflow-y-auto">
      <main className="container flex flex-col items-center flex-grow max-w-screen-xl px-5 py-12 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <form onSubmit={onSubmit} className="w-full max-w-sm p-6 mx-auto">
            <h1 className="mb-10 text-3xl font-bold text-center">Log in to Digicards</h1>
            <div className="mb-4">
              <Input type="email" placeholder="Email address" size="lg" />
            </div>
            <div className="mb-6">
              <Input type="password" placeholder="Password" size="lg" />
            </div>
            <div className="mb-4">
              <Button type="submit" color="primary" variant="solid" size="lg" className="w-full">
                Log in
              </Button>
            </div>
            <p className="text-neutral-600">
              Don't have an account yet?{' '}
              <Link to="/signup">
                <A>Sign up</A>
              </Link>
            </p>
          </form>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            src="/illustrations/web-designer-at-work.png"
            className="object-cover object-center rounded"
            alt="Hero"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
