import { logo } from "../../assets/images";

const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col rounded-tr-[6rem] bg-VeryDarkBlackBlue items-center gap-10 py-16 text-White text-center font-Ubuntu md:flex-row md:items-start md:justify-center md:gap-24 md:mt-4">
      <figure className="mb-6">
        <img src={logo} alt="Blogr Logo" className="" />
      </figure>
      <ul>
        <li className="mb-6 font-medium">Product</li>
        <ul className="flex flex-col gap-2 text-GrayishBlue">
          <li><a href="#" className="hover:underline">Overview</a></li>
          <li><a href="#" className="hover:underline">Pricing</a></li>
          <li><a href="#" className="hover:underline">Marketplace</a></li>
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Integrations</a></li>
        </ul>
      </ul>
      <ul>
        <li className="mb-6 font-medium">Company</li>
        <ul className="flex flex-col gap-2 text-GrayishBlue">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
        </ul>
      </ul>
      <ul>
        <li className="mb-6 font-medium">Connect</li>
        <ul className="flex flex-col gap-2 text-GrayishBlue">
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Newsletter</a></li>
          <li><a href="#" className="hover:underline">LinkedIN</a></li>
        </ul>
      </ul>
    </footer>
  );
};

export default Footer;
