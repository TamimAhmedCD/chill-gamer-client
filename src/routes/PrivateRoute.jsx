import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation()

  if (loading) {
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.any,
  }

export default PrivateRoute;