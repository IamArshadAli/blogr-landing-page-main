import "./Intro.css";

const Intro = () => {
  return (
    <div className="relative -z-10 -mt-24 flex min-h-[38rem] flex-col items-center justify-center overflow-hidden rounded-bl-[6.1rem] bg-IntroCTA md:-mt-36 md:min-h-[30rem]">
      <figure className="absolute inset-0 bg-[url(./src/assets/images/bg-pattern-intro-mobile.svg)] bg-auto bg-center bg-no-repeat md:bg-[url(./src/assets/images/bg-pattern-intro-desktop.svg)]"></figure>
      <section className="z-10 flex flex-col gap-6 px-6 text-center text-White md:mt-20">
        <h1 className="mt-10 text-4xl">A modern publishing platform</h1>
        <p className="mb-6 px-6 font-light">
          Grow your audience and build your online brand
        </p>
        <div className="mx-auto flex space-x-6 font-Ubuntu">
          <a
            href="#"
            className="rounded-full bg-White px-6 py-2 font-medium capitalize text-LightRedP hover:bg-opacity-40 hover:text-White"
          >
            Start For Free
          </a>
          <a
            href="#"
            className="rounded-full border-2 border-White px-6 py-2 font-medium capitalize text-White hover:bg-White hover:text-LightRedP"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Intro;
