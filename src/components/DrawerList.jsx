import {
  Divider,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const DrawerList = ({ menu, menu2, toggleDrawer }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const handleDropdown = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r border-gray-200 py-5">

        {/* MAIN MENU */}
        <div className="space-y-2">
          {menu.map((item, index) => {
            const isActive = item.path === location.pathname;

            return (
              <div key={index} className="pr-9">
                {/* Parent Item */}
                <div
                  className={`flex items-center py-3 px-4 rounded-r-full cursor-pointer ${
                    isActive ? "bg-primary text-white" : "text-primary"
                  }`}
                  onClick={() =>
                    item.children
                      ? handleDropdown(index)
                      : (navigate(item.path), toggleDrawer())
                  }
                >
                  <ListItemIcon>
                    {isActive ? item.activeIcon : item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.name} />

                  {item.children &&
                    (openMenu === index ? <ExpandLess /> : <ExpandMore />)}
                </div>

                {/* Dropdown Items */}
                {item.children && (
                  <Collapse in={openMenu === index} timeout="auto">
                    <div className="ml-15 mt-1 space-y-1">
                      {item.children.map((child, i) => (
                        <div
                          key={i}
                          className={`py-2 px-3 rounded-md cursor-pointer text-sm ${
                            location.pathname === child.path
                              ? "bg-primary text-white"
                              : "text-primary hover:bg-gray-100"
                          }`}
                          onClick={() => {
                            navigate(child.path);
                            toggleDrawer();
                          }}
                        >
                          {child.name}
                        </div>
                      ))}
                    </div>
                  </Collapse>
                )}
              </div>
            );
          })}
        </div>

        <Divider />

        {/* SECOND MENU */}
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
