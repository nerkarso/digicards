import FooterEnding from '@/components/FooterEnding';
import { Button, Checkbox, Input } from '@/elements';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Signup() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateUser = (data) => {
    let db = window.localStorage.getItem('ra-data-local-storage');
    if (db) {
      db = JSON.parse(db);
      db.users.push({
        id: uuidv4(),
        firstName: data.firstName,
        lastName: data.lastName,
        image: null,
        email: data.email,
        password: data.password,
        role: 'customer',
        createdAt: new Date().toISOString(),
      });
      // Save data to local storage
      window.localStorage.setItem('ra-data-local-storage', JSON.stringify(db));
    }
    history.push('/signin');
  };

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
    } else {
      handleCreateUser(data);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col w-full h-full overflow-y-auto">
      <main className="container flex-col items-center flex-grow px-5 py-12 mx-auto md:flex md:max-w-screen-xl md:flex-row">
        <div className="flex flex-col items-center mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto md:p-6 md:max-w-sm">
            <h1 className="mb-10 text-3xl font-bold text-center">Create your account</h1>
            <div className="mb-4">
              <Input type="text" label="First name" className="w-full" {...register('firstName', { required: true })} />
              {errors.firstName && <span className="mt-1 text-sm text-red-500">First name is required</span>}
            </div>
            <div className="mb-4">
              <Input type="text" label="Last name" className="w-full" {...register('lastName', { required: true })} />
              {errors.lastName && <span className="mt-1 text-sm text-red-500">Last name is required</span>}
            </div>
            <div className="mb-4">
              <Input type="email" label="Email" className="w-full" {...register('email', { required: true })} />
              {errors.email && <span className="mt-1 text-sm text-red-500">Email is required</span>}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                label="Password"
                className="w-full"
                {...register('password', { required: true })}
              />
              {errors.password && <span className="mt-1 text-sm text-red-500">Password is required</span>}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                label="Confirm password"
                className="w-full"
                {...register('confirmPassword', { required: true })}
              />
              {errors.confirmPassword && (
                <span className="mt-1 text-sm text-red-500">Confirm password is required</span>
              )}
            </div>
            <div className="mb-4">
              <Checkbox {...register('terms', { required: true })}>I accept the terms of service</Checkbox>
              {errors.terms && <span className="mt-1 text-sm text-red-500">You have to agree with the terms</span>}
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
