/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  logo,
  iconHamburger,
  iconClose,
  iconArrowDark,
  iconArrowLight,
} from "../../assets/images";
import { useMediaQuery } from "react-responsive";

import "./Header.css"

const Dropdown = ({ name, children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [active, setActive] = useState(false);

  return (
    <li
      className="relative cursor-pointer"
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="group flex items-center justify-center space-x-2">
        <p
          className={`font-semibold lg:text-White lg:group-hover:underline ${
            active && "text-VeryDarkGrayishBlue"
          }`}
        >
          {name}
        </p>
        <img
          src={isMobile ? iconArrowDark : iconArrowLight}
          alt="arrow"
          className={`h-2 w-3 transition ease-in ${active && "rotate-180"}`}
        />
      </div>
      {active && children}
    </li>
  );
};

const Link = ({ text }) => {
  return (
    <li className="my-3">
      <a
        href="#"
        className="font-semibold text-VeryDarkGrayishBlue lg:hover:font-bold"
      >
        {text}
      </a>
    </li>
  );
};

const ProductLinks = () => {
  return (
    <ul className="dropdown-links">
      <Link text="Overview" />
      <Link text="Pricing" />
      <Link text="Marketplace" />
      <Link text="Features" />
      <Link text="Integrations" />
    </ul>
  );
};

const CompanyLinks = () => {
  return (
    <ul className="dropdown-links">
      <Link text="About" />
      <Link text="Team" />
      <Link text="Blog" />
      <Link text="Careers" />
    </ul>
  );
};

const ConnectLinks = () => {
  return (
    <ul className="dropdown-links">
      <Link text="Contact" />
      <Link text="Newsletter" />
      <Link text="LinkedIn" />
    </ul>
  );
};

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 mx-6 mt-[3.45rem] flex items-center justify-between md:mx-12 xl:mx-32">
      <figure>
        <img
          src={logo}
          alt="Blogr Logo"
          className="w-[5.15rem] xl:ml-9 xl:w-[6.25rem]"
        />
      </figure>
      {isMobile && (
        <figure>
          <img
            src={isOpen ? iconClose : iconHamburger}
            alt="icon"
            className="cursor-pointer lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </figure>
      )}
      <nav
        className={`transition-opacity
          ${
            isMobile && isOpen
              ? "absolute left-1/2 top-32 min-w-[20rem] max-w-4xl -translate-x-1/2 rounded-md bg-White py-6 text-center shadow-2xl lg:left-12 lg:right-0 lg:top-8 lg:translate-x-0 lg:bg-transparent lg:shadow-none"
              : "hidden lg:block lg:w-full"
          }
        `}
      >
        <ul className="flex flex-col gap-6 px-6 text-lg lg:w-full lg:flex-row lg:items-center lg:justify-between xl:text-base">
          <div className="flex flex-col gap-6 lg:flex-row xl:ml-14 xl:mt-2 xl:gap-8">
            <Dropdown name="Product">
              <ProductLinks />
            </Dropdown>
            <Dropdown name="Company">
              <CompanyLinks />
            </Dropdown>
            <Dropdown name="Connect">
              <ConnectLinks />
            </Dropdown>
          </div>
          <hr />
          <li className="flex flex-col gap-6 lg:flex-row lg:items-center xl:gap-11">
            <a href="#" className="font-bold lg:text-White xl:-mr-3 xl:mt-1.5">
              Login
            </a>
            <a
              href="#"
              className="mx-auto w-fit rounded-full bg-IntroCTA px-10 py-3 font-bold text-White hover:bg-opacity-50 hover:text-White lg:bg-White lg:bg-none lg:text-LightRedP xl:-mr-2  xl:mt-[.1rem]"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
