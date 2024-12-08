import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button, Typography } from "@material-tailwind/react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-11/12 lg:w-10/12 mx-auto py-10">
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3">
        <div>
          <Link>
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              <img src={logo} alt="" className="w-28" />
            </Typography>
          </Link>
          <div className="flex gap-2 pt-3">
            {" "}
            <Button className="text-white bg-[#9742ff] rounded-md px-4">
              <FaFacebookF className="text-lg" />
            </Button>
            <Button className="text-white bg-[#9742ff] rounded-md px-4">
              <FaTwitter className="text-lg" />
            </Button>
            <Button className="text-white bg-[#9742ff] rounded-md px-4">
              <FaInstagram className="text-lg" />
            </Button>
          </div>
        </div>
        <div className="text-white font-oxanium">
          <h4 className="text-xl font-bold">Usefull Links</h4>
          <div className="flex flex-col gap-2 mt-3">
            <p>Tournaments</p>
            <p>Help Center</p>
            <p>Privacy and Policy</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="text-white font-oxanium">
          <h4 className="text-xl font-bold">Contact Us</h4>
          <div className="flex flex-col gap-2 mt-3">
            <div>
            <p className="text-[#9742ff]">Location:</p>
            <p>153 Williamson Plaza, <br />  Maggieberg, MT 09514</p>
            </div>
            <div>
            <p className="text-[#9742ff]">Join Us:</p>
            <p>Info@YourGmail24.com</p>
            </div>
            <div>
            <p className="text-[#9742ff]">Phone:</p>
            <p>+1 (062) 109-9222</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white font-oxanium">
          <h4 className="text-xl font-bold">Usefull Links</h4>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-white bg-opacity-10"
          />
          <div><button className="btn">Subscribe Now</button></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
