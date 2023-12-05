import { logo } from "../../assets/images";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col items-center gap-10 rounded-tr-[6rem] bg-VeryDarkBlackBlue py-16 text-center font-Ubuntu text-White md:mt-4 md:flex-row md:items-start md:justify-center md:gap-24 xl:mt-56 xl:justify-start xl:px-[10.25rem] xl:pb-[5rem] xl:pt-[4.5rem] xl:text-left">
      <figure className="mb-6">
        <img src={logo} alt="Blogr Logo" className="" />
      </figure>
      <ul className="xl:ml-[5.4rem] xl:mt-1">
        <li className="list-item">Product</li>
        <ul className="sub-list">
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Integrations</a>
          </li>
        </ul>
      </ul>
      <ul className="xl:ml-[6.25rem] xl:mt-1">
        <li className="list-item">Company</li>
        <ul className="sub-list">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </ul>
      <ul className="xl:ml-[7.5rem] xl:mt-1">
        <li className="list-item">Connect</li>
        <ul className="sub-list">
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">LinkedIN</a>
          </li>
        </ul>
      </ul>
    </footer>
  );
};

export default Footer;
