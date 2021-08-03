import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Contact />
      <Footer />
    </>
  );
}
