import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-red py-2">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow ">
            Muhammad Junaid
          </p>
          <p className="font-playfair text-md text-yellow">
            {" "}
            &copy;2023 Junaid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
