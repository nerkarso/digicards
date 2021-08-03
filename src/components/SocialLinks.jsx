import React from 'react';
import { social } from '../data';

export default function SocialLinks() {
  return (
    <>
      {social.map(({ icon, url }, i) => (
        <a href={url} className="p-2 text-primary-500 hover:text-primary-600" target="_blank" dangerouslySetInnerHTML={{ __html: icon }} key={i}></a>
      ))}
    </>
  );
}
