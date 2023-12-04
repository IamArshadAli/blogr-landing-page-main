import { illustrationPhones } from "../../assets/images";

const Infrastructure = () => {
  return (
    <div className="mt-60 rounded-bl-[6.5rem] rounded-tr-[4.5rem] bg-primaryGradient md:mt-48">
      <div
        className="relative bg-[url(./src/assets/images/bg-pattern-circles.svg)] bg-cover bg-left-top bg-no-repeat"
        style={{
          backgroundPosition: "center -13rem",
        }}
      >
        <div className="flex flex-col pb-24 pt-52 text-center text-White md:flex-row md:items-center md:pb-0 md:pt-0">
          <figure className="md:flex-1">
            <img
              src={illustrationPhones}
              alt="Phone Illustration"
              className="absolute -top-44 md:-left-16 md:scale-75"
            />
          </figure>
          <section className="md:my-14 md:flex-1 lg:-ml-40">
            <h1 className="text-4xl font-semibold">
              State of the Art Infrastructure
            </h1>
            <p className="mt-6 px-8 font-light">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
