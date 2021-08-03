import React from 'react';
import Layout from '../components/Layout';
import { operations } from '../data';

export default function PressRoom() {
  return (
    <Layout>
      <Hero />
      <Content />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="mb-12 text-white bg-primary-900">
      <div className="flex justify-center px-5 py-16">
        <h1 className="text-4xl font-bold">Press Room</h1>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section>
      <div className="container max-w-screen-lg px-5 py-12 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {operations.map(({ url, title }, i) => (
            <div className="w-full px-4 mb-10 md:w-1/2" key={i}>
              <div className="overflow-hidden rounded-lg bg-neutral-100 h-72">
                <iframe
                  src={url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover object-center w-full h-full"></iframe>
              </div>
              <h2 className="mt-6 text-xl font-medium">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
