import React from 'react';

export default function SocialLinks() {
  const social = [
    {
      icon: `<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>`,
      url: 'https://www.facebook.com/dan.xie3',
    },
    {
      icon: `<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>`,
      url: 'https://twitter.com/DanXie10',
    },
  ];

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
