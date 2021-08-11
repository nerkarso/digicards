import { social } from '@/data';
import React from 'react';

export default function SocialLinks() {
  return (
    <>
      {social.map(({ icon, url }, i) => (
        <a
          href={url}
          className="p-2 transition duration-150 rounded-md text-primary-500 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300"
          target="_blank"
          dangerouslySetInnerHTML={{ __html: icon }}
          key={i}></a>
      ))}
    </>
  );
}
