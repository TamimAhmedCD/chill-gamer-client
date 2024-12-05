import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

export function NavbarR() {
  const { user, logOut } = useContext(AuthProvider);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/all-review" className="flex items-center text-white">
          All Reviews
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="bg-[hsla(240, 63%, 13%, 1)] sticky top-0 z-10 h-max max-w-full rounded-none border-none px-0 py-2 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 lg:w-10/12 w-11/12 mx-auto">
          <Link>
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <img src={logo} alt="" className="w-28" />
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user ? (
              <div className="flex items-center gap-x-3">
                <Link onClick={logOut} className="hidden lg:block">
                  <Button variant="text" size="sm" className="btn">
                    <span>Log Out</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-x-3">
                <Link to="/login" className="hidden lg:block">
                  <Button variant="text" size="sm" className="btn">
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to="/register" className="hidden lg:block">
                  <Button variant="gradient" size="sm" className="btn">
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="#ffff"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="#ffff"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="w-11/12 mx-auto">
          {navList}
          {user ? (
            <div className="flex items-center gap-x-1">
              <Link to="/register" className="block w-full">
                <Button variant="text" size="sm" className="btn w-full">
                  <span>Add account</span>
                </Button>
              </Link>
              <Link onClick={logOut} className="block w-full">
                <Button variant="gradient" size="sm" className="btn w-full">
                  <span>Log Out</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Link to="/login" className="block w-full">
                <Button variant="text" size="sm" className="btn w-full">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/register" className="block w-full">
                <Button variant="gradient" size="sm" className="btn w-full">
                  <span>Register</span>
                </Button>
              </Link>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
}
