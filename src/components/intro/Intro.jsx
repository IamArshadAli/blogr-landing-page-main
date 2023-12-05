import "./Intro.css";

const Intro = () => {
  return (
    <div className="relative -z-0 -mt-24 flex min-h-[38rem] flex-col items-center justify-center overflow-hidden rounded-bl-[6.1rem] bg-IntroCTA md:-mt-36 md:min-h-[30rem] xl:min-h-[39.8rem]">
      <figure className="intro-pattern absolute inset-0 bg-auto bg-center bg-no-repeat"></figure>
      <section className="z-50 flex flex-col gap-6 px-6 text-center text-White md:mt-20 xl:ml-4 xl:mt-[6rem] xl:gap-4">
        <h1 className="mt-10 text-4xl xl:text-[3.8rem]">
          A modern publishing platform
        </h1>
        <p className="mb-6 px-6 font-light xl:mb-8 xl:mt-4 xl:text-xl">
          Grow your audience and build your online brand
        </p>
        <div className="mx-auto flex space-x-6 font-Ubuntu">
          <a
            href="#"
            className="cursor-pointer rounded-full bg-White px-6 py-2 font-medium capitalize text-LightRedP hover:bg-opacity-40 hover:text-White xl:px-5 xl:py-3"
          >
            Start For Free
          </a>
          <a
            href="#"
            className="cursor-pointer rounded-full border-2 border-White px-6 py-2 font-medium capitalize text-White hover:bg-White hover:text-LightRedP xl:px-5 xl:py-3"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Intro;
