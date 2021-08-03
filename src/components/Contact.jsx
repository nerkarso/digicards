import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import React from 'react';

export default function Contact() {
  return (
    <section className="pb-12 mt-12 bg-neutral-50">
      <div className="container max-w-screen-xl px-5 py-16 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center">Contact</h1>
        <p className="max-w-screen-sm mx-auto mb-12 leading-relaxed text-center text-neutral-600">
          We are keen on creating a second skin for anyone with a sense of style! We design our digicards having our
          customers in mind and we never disappoint!
        </p>
        <div className="max-w-screen-md mx-auto space-x-12 md:flex">
          <div className="flex justify-center mb-12 space-x-8 md:mb-0">
            <div className="flex-grow-0 flex-shrink-0">
              <img
                src="/line.jpg"
                alt="Line Chat"
                className="duration-200 transform shadow w-36 h-36 hover:scale-110 hover:shadow-lg"
              />
              <p className="mt-3 text-sm text-neutral-500">LINE public number</p>
            </div>
            <div className="flex-grow-0 flex-shrink-0">
              <img
                src="/wechat.jpg"
                alt="WeChat"
                className="duration-200 transform shadow w-36 h-36 hover:scale-110 hover:shadow-lg"
              />
              <p className="mt-3 text-sm text-neutral-500">WeChat public number</p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <p>
              <PhoneTwoToneIcon className="mr-2 text-primary-500" /> 0452410298
            </p>
            <p>
              <EmailTwoToneIcon className="mr-2 text-primary-500" /> info@topexcel.com.au
            </p>
            <p>
              <RoomTwoToneIcon className="mr-2 text-primary-500" />
              <a href="https://goo.gl/maps/vd9hCwjpERtkVjF1A" target="_blank">
                463 Middleborough Rd, Box Hill North VIC 3129
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
