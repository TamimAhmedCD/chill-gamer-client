import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavbarR } from "../components/Navbar";
import { Fade } from "react-awesome-reveal";

const Layout = () => {
  return (
    <div>
      <Fade>
        <NavbarR />
      </Fade>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
