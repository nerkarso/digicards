import WebsiteLayout from '@/components/WebsiteLayout';
import { CheckCircleTwoTone } from '@material-ui/icons';
import React from 'react';

export default function About() {
  return (
    <WebsiteLayout>
      <Hero />
      <Mission />
      <Services />
    </WebsiteLayout>
  );
}

function Hero() {
  return (
    <section className="mb-12 bg-primary-900">
      <div className="flex justify-center px-5 py-16">
        <img src="/img/topexcel.png" />
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section>
      <div className="container max-w-screen-lg px-5 py-12 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center">Our Mission</h1>
        <div className="flex flex-col items-center sm:flex-row">
          <div className="text-center sm:w-1/3 sm:pr-8">
            <img
              src="/img/owner.png"
              className="inline-flex items-center justify-center flex-shrink-0 object-cover object-center w-20 h-20 rounded-full"
            />
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mt-4 text-lg font-medium">Dan Xie</h2>
              <div className="w-12 h-1 mt-2 mb-4 rounded bg-primary-500"></div>
              <p className="text-neutral-500">Operations Manager</p>
            </div>
          </div>
          <div className="pt-4 mt-4 text-center border-t sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-neutral-200 sm:border-t-0 sm:mt-0 sm:text-left">
            <p className="mb-4 text-lg leading-relaxed text-neutral-600">
              Our mission is to deliver information for the people ideas and technologies changing the world to our
              community of fluent business decision makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    'With Compliments',
    'Letter Head',
    'Business Card',
    'Envelopes',
    'Invoice Books',
    'Notepad',
    'Flyer',
    'Presentation Folders',
    'Raised Print',
    'Invitation Card',
    'Postcard',
    'Booklet',
    'Catalogue',
    'Die-cut Sticker',
    'Letter Cutting',
    'Window Poster',
    'Roll-Up Banner',
    'etc...',
  ];

  return (
    <section>
      <div className="container max-w-screen-lg px-5 py-12 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center">Services</h1>
        <div className="flex flex-wrap -mx-2 sm:mx-auto sm:mb-2">
          {services.map((service, i) => (
            <div className="w-full p-2 md:w-1/2 lg:w-1/3" key={i}>
              <div className="flex items-center h-full p-4 space-x-4 rounded-md bg-neutral-100">
                <CheckCircleTwoTone className="text-primary-500" />
                <span className="text-lg font-medium">{service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
