import db from '@/db';
import React from 'react';
import { Title } from 'react-admin';

export default function Profile() {
  const { firstName, lastName, email, role, image, createdAt } = db.users[1];

  return (
    <>
      <Title title="Profile" />
      <div className="p-6 my-4 bg-white border rounded-lg md:space-x-8 md:flex">
        {image && (
          <div className="flex-grow-0 flex-shrink-0 mb-4">
            <div className="w-40 overflow-hidden rounded-full">
              <img src={image} className="object-cover w-full h-full" />
            </div>
          </div>
        )}
        <div className="flex flex-col">
          <div className="mb-4">
            <h6 className="text-sm font-medium text-neutral-500">First name</h6>
            <h4 className="text-xl">{firstName}</h4>
          </div>
          <div className="mb-4">
            <h6 className="text-sm font-medium text-neutral-500">Last name</h6>
            <h4 className="text-xl">{lastName}</h4>
          </div>
          <div className="mb-4">
            <h6 className="text-sm font-medium text-neutral-500">Email</h6>
            <h4 className="text-xl">{email}</h4>
          </div>
          <div className="mb-4">
            <h6 className="text-sm font-medium text-neutral-500">Role</h6>
            <h4 className="text-xl">{role}</h4>
          </div>
          <div>
            <h6 className="text-sm font-medium text-neutral-500">Member since</h6>
            <h4 className="text-xl">{new Date(createdAt).toLocaleDateString()}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
