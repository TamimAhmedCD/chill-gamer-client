import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavbarR } from "../components/Navbar";

const Layout = () => {
  return (
    <div>
        <NavbarR />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
