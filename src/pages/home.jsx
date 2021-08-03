import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Button } from '@vechaiui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { features, testimonials } from '../data';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
    </Layout>
  );
}

function Hero() {
  return (
    <section>
      <div className="container flex flex-col items-center max-w-screen-xl px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-6xl">Make your own Business Card</h1>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600">
            Create a professional business card with hiring a designer. Get your personalized design delivered anywhere
            in the world.
          </p>
          <Link to="/editor">
            <Button color="primary" variant="solid" size="xl">
              Start designing for free
            </Button>
          </Link>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img src="/illustrations/website-design.png" className="object-cover object-center rounded" alt="Hero" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section>
      <div className="container max-w-screen-xl py-12 mx-auto rounded-xl">
        <div className="flex flex-col flex-wrap items-center w-full mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Custom design business cards without a hitch</h1>
          <p className="w-full leading-relaxed lg:w-1/2 text-black/50">
            No headaches. No fuss. Just one all-inclusive personal card maker in a few clicks.
          </p>
        </div>
        <div className="flex flex-wrap mb-12">
          {features.map(({ icon: Icon, title, body }, i) => (
            <div className="p-4 xl:w-1/3 md:w-1/2" key={i}>
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 text-5xl text-primary-500">
                  <Icon fontSize="inherit" />
                </div>
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <p className="leading-relaxed text-center text-black/50">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <img src="/portfolio.jpg" alt="Portfolio" className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section>
      <div className="container max-w-screen-xl px-5 py-12 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center">Testimonials</h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map(({ body, personImage, personName, company }) => (
            <div className="w-full p-4 md:w-1/2">
              <div className="h-full p-8 rounded-lg bg-neutral-50">
                <div className="mb-2 text-4xl text-primary-500">
                  <FormatQuoteIcon fontSize="inherit" />
                </div>
                <p className="mb-6 italic leading-relaxed text-neutral-700">{body}</p>
                <a className="inline-flex items-center">
                  <img
                    alt="Testimonial"
                    src={personImage}
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium title-font text-neutral-900">{personName}</span>
                    <span className="text-sm text-neutral-500">{company}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
