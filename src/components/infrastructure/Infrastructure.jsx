import { useMediaQuery } from "react-responsive";
import { illustrationPhones } from "../../assets/images";

import "./Infrastructure.css"

const Infrastructure = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div className="mt-60 rounded-bl-[6.5rem] rounded-tr-[4.5rem] bg-primaryGradient md:mt-48 xl:mt-[16.15rem]">
      <div
        className="circles-pattern relative bg-cover bg-left-top bg-no-repeat"
        style={{
          backgroundPosition: `${isMobile ? "center -13rem" : "-25rem -58rem"}`,
        }}
      >
        <div className="flex flex-col pb-24 pt-52 text-center text-White md:flex-row md:items-center md:pb-0 md:pt-0 lg:text-left">
          <figure className="md:flex-1">
            <img
              src={illustrationPhones}
              alt="Phone Illustration"
              className="absolute -top-44 md:-left-16 md:scale-75 xl:-top-[4.25rem] xl:left-[7.65rem] xl:scale-100"
            />
          </figure>
          <section className="md:my-14 md:flex-1 lg:-ml-40 xl:-ml-4 xl:mb-[6.5rem] xl:mt-[7.45rem]">
            <h1 className="text-4xl font-semibold lg:pl-8 xl:text-[2.3rem]">
              State of the Art Infrastructure
            </h1>
            <p className="mt-6 px-8 font-light xl:mt-6 xl:pr-36 xl:leading-[1.75rem] xl:tracking-[0.035em]">
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
