import FooterEnding from '@/components/FooterEnding';
import { Button, Checkbox, Input } from '@/elements';
import React from 'react';

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="absolute inset-0 flex flex-col w-full h-full overflow-y-auto">
      <main className="container flex flex-col items-center flex-grow max-w-screen-xl px-5 py-12 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <form onSubmit={onSubmit} className="w-full mx-auto md:p-6 md:max-w-sm">
            <h1 className="mb-10 text-3xl font-bold text-center">Create your account</h1>
            <div className="mb-4">
              <Input type="text" className="w-full" placeholder="Full name" />
            </div>
            <div className="mb-4">
              <Input type="email" className="w-full" placeholder="Email address" />
            </div>
            <div className="mb-4">
              <Input type="password" className="w-full" placeholder="Password" />
            </div>
            <div className="mb-4">
              <Input type="password" className="w-full" placeholder="Confirm password" />
            </div>
            <div className="mb-4">
              <Checkbox>I accept the terms of service</Checkbox>
            </div>
            <div className="mb-6">
              <Button type="submit" color="primary" className="w-full">
                Sign up
              </Button>
            </div>
            <p className="mb-2 text-neutral-600">
              Already have an account?{' '}
              <a href="/signin" className="link">
                Sign in
              </a>
            </p>
            <a href="/" className="link">
              Back to home
            </a>
          </form>
        </div>
        <div className="hidden w-5/6 md:block lg:max-w-lg lg:w-full md:w-1/2">
          <img src="/img/undraw-online-cv.svg" className="object-cover object-center rounded" />
        </div>
      </main>
      <FooterEnding />
    </div>
  );
}
