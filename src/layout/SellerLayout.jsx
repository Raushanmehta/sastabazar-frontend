import { Outlet } from "react-router-dom";
import { useState } from "react";
import SellerDrawerList from "../seller/dashboard/components/SellerDrawerList";
import SellerHeader from "../seller/dashboard/components/SellerHeader";



const SellerLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen flex flex-col">
    
      <SellerHeader toggleDrawer={toggleDrawer} />

      <div className="flex flex-1 overflow-hidden">
        
        <div className={`${open ? "block" : "hidden"} lg:block`}>
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default SellerLayout;