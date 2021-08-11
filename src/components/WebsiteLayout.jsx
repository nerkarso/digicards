import FooterContact from '@/components/FooterContact';
import FooterEnding from '@/components/FooterEnding';
import WebsiteNavbar from '@/components/WebsiteNavbar';
import React from 'react';

export default function WebsiteLayout({ children }) {
  return (
    <>
      <WebsiteNavbar />
      {children}
      <FooterContact />
      <FooterEnding />
    </>
  );
}
