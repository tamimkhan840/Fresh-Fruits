import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({ children }) {
  const { users, loader } = useContext(AuthContext);

  if (loader) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (users) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
}