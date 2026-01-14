import { Divider, ListItemIcon, ListItemText } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const DrawerList = ({ menu, menu2, toggleDrawer }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r border-r-gray-200 py-5">   
          <div className="space-y-2">
            {menu.map((item, index) => (
              <div
                key={index}
                className="pr-9 cursor-pointer"
                onClick={() => {
                  navigate(item.path);
                  toggleDrawer();
                }}
              >
                <div
                  className={`flex items-center py-3 px-4 rounded-r-full ${
                    item.path === location.pathname
                      ? "bg-primary text-white"
                      : "text-primary"
                  }`}
                >
                  <ListItemIcon>
                    {item.path === location.pathname
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.name} />
                </div>
              </div>
            ))}
          </div>

            <Divider/>

          <div className="space-y-2">
            {menu2.map((item, index) => (
              <div
                key={index}
                className="pr-9 cursor-pointer"
                onClick={() => {
                  navigate(item.path);
                  toggleDrawer();
                }}
              >
                <div
                  className={`flex items-center py-3 px-4 rounded-r-full ${
                    item.path === location.pathname
                      ? "bg-primary text-white"
                      : "text-primary"
                  }`}
                >
                  <ListItemIcon>
                    {item.path === location.pathname
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.name} />
                </div>
              </div>
            ))}
          </div>   
      </div>
    </div>
  );
};

export default DrawerList;
