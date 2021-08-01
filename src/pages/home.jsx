import AspectRatioTwoToneIcon from '@material-ui/icons/AspectRatioTwoTone';
// import ChangeHistoryTwoToneIcon from '@material-ui/icons/ChangeHistoryTwoTone';
// import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
// import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import FormatPaintTwoToneIcon from '@material-ui/icons/FormatPaintTwoTone';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import InvertColorsTwoToneIcon from '@material-ui/icons/InvertColorsTwoTone';
import { Button } from '@vechaiui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <AboutUs />
      <Footer />
    </>
  );
}

function Navigation() {
  return (
    <header>
      <div className="container flex items-center max-w-screen-xl p-5 mx-auto">
        <a className="flex items-center mr-auto font-medium">
          <img src="/favicon.svg" className="w-10 h-10" alt="Logo" />
          <div className="ml-3">
            <h5 className="text-sm text-neutral-600">Top Excel</h5>
            <h1 className="text-2xl font-bold">Digicards</h1>
          </div>
        </a>
        <div className="flex items-center space-x-4">
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

function Hero() {
  return (
    <section>
      <div className="container flex flex-col items-center max-w-screen-xl px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-6xl font-bold leading-tight">Make your own Business Card</h1>
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
  const features = [
    {
      icon: InvertColorsTwoToneIcon,
      title: 'Branding',
      body: 'Add your logo, brand color palette, fonts, and other visual elements to make your designs consistent and on-brand.',
    },
    {
      icon: FormatPaintTwoToneIcon,
      title: 'Customizing',
      body: 'Customize Digicards layouts to suit your style and business brand. Upload your logo, change the text and fonts, add your brand colors in seconds.',
    },
    {
      icon: AspectRatioTwoToneIcon,
      title: 'Easy Resize',
      body: 'No need to create another design for different sizes. With Digicards, you can resize your beautiful card into any other preset or custom dimensions in just one click.',
    },
    // {
    //   icon: FileCopyTwoToneIcon,
    //   title: 'Templates',
    //   body: 'Designing with Digicards is a breeze. We have created hundreds of amazing templates for you to customize for a perfect card.',
    // },
    // {
    //   icon: EditTwoToneIcon,
    //   title: 'Editing',
    //   body: 'Edit your chosen template. Add or remove graphic elements, resize objects, upload your own images, change fonts and more.',
    // },
    // {
    //   icon: ChangeHistoryTwoToneIcon,
    //   title: 'Shapes, Embeds, and More',
    //   body: 'Access a couple free and premium objects, frames, masks, stickers, and icons to create the design you want in seconds.',
    // },
  ];

  return (
    <section>
      <div className="container max-w-screen-xl py-12 mx-auto rounded-xl">
        <div className="flex flex-col flex-wrap items-center w-full mb-12 text-center">
          <h1 className="mb-2 text-3xl font-bold">Custom design Business Cards without a Hitch</h1>
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
  const testimonials = [
    {
      body: "It's just amazing. The best on the net! I like Digicards more and more each day because it makes my life a lot easier.",
      personImage: 'https://randomuser.me/api/portraits/women/76.jpg',
      personName: 'Josephine Fuller',
      company: 'CEO, Pineapple Inc.',
    },
    {
      body: "This is simply unbelievable! I'd be lost without Digicards. Digicards is exactly what our business has been lacking.",
      personImage: 'https://randomuser.me/api/portraits/men/52.jpg',
      personName: 'David Olson',
      company: 'Marketing Manager, Avocado LLC.',
    },
    {
      body: 'Digicards is the next killer app. Business cards are the most valuable business resources we have EVER purchased.',
      personImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      personName: 'Jeffrey Watkins',
      company: 'Operations Manager, ACME Studios',
    },
    {
      body: 'Thank you for making it painless, pleasant and most of all hassle free! Digicards is awesome!',
      personImage: 'https://randomuser.me/api/portraits/women/17.jpg',
      personName: 'Hailey Boyd',
      company: 'Marketing Analyst, Peacock Corporation',
    },
  ];

  return (
    <section>
      <div className="container max-w-screen-xl px-5 py-16 mx-auto">
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

function AboutUs() {
  return (
    <section className="mb-12">
      <div className="container max-w-screen-lg px-5 py-12 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center">About Us</h1>
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <img
              alt="Testimonial"
              src="/owner.png"
              className="inline-flex items-center justify-center flex-shrink-0 object-cover object-center w-20 h-20 rounded-full"
            />
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium mt-4 text-lg">Dan Xie</h2>
              <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
              <p class="text-neutral-500">Operations Manager</p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4 text-neutral-600">
              Our mission is to deliver information for the people ideas and technologies changing the world to our
              community of fluent business decision makers.
            </p>
            <p class="leading-relaxed text-lg mb-4 text-neutral-600">
              We are keen on creating a second skin for anyone with a sense of style! We design our digicards having our
              customers in mind and we never disappoint!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
