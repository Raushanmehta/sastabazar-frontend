import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminHeader from "../admin/components/AdminHeader";
import AdminDrawerList from "../admin/components/AdminDrawerList";



const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen flex flex-col">
    
      <AdminHeader toggleDrawer={toggleDrawer} />

      <div className="flex flex-1 overflow-hidden">
        
        <div className={`${open ? "block" : "hidden"} lg:block`}>
          <AdminDrawerList toggleDrawer={toggleDrawer} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;