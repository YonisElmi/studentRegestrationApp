import React from 'react';

const About = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative order-2 md:order-1">
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 transform translate-y-10"
              src="assets/Register.png"
              alt="Student Registration"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome to Student Registration
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Our platform provides an easy and efficient way to manage student registrations and information.
            </p>
            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 "></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask us on <a href="#" title="" className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
