import { Outlet } from "react-router-dom";
import Navbar from "../customer/components/navbar/Navbar";

const CustomerLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default CustomerLayout;