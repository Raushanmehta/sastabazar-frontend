import { AccountBox, Dashboard, Home,  Logout } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DrawerList from '../../components/DrawerList'
import LogoutIcon from '@mui/icons-material/Logout';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';





const menu = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: <Dashboard className='text-primary' />,
    activeIcon: <DashboardIcon className='text-white' />
  },
  {
    name : 'Sellers',
    path: '/admin/sellers',
    icon: <PersonIcon className='text-primary' />,
    activeIcon: <PersonIcon className='text-white' />
  },
  {
    name: 'Coupon',
    icon: <IntegrationInstructionsIcon className='text-primary' />,
    activeIcon: <IntegrationInstructionsIcon className='text-white' />,
    children: [
      {
        name: 'Coupon',
        path: '/admin/coupon',
      },
      {
        name: "Add Coupon",
        path: "/admin/add-coupon",
      },
    ],
  },

  {
    name: 'Home Page',
    icon: <Home className='text-primary' />,
    activeIcon: <HomeIcon className='text-white' />,
    children: [
      {
        name: 'Home Page',
        path: '/admin/home-slider',
      },
      {
        name: 'Electronics Category',
        path: '/admin/electronics-category',
      }
      , {
        name: 'Shop By category',
        path: '/admin/shop-by-category',
      },
      {
        name: 'Deals',
        path: '/admin/deals',
      }
    ]
  },

]

const menu2 = [
  {
    name: 'Account',
    path: '/admin/account',
    icon: <AccountBox className='text-primary' />,
    activeIcon: <AccountBox className='text-white' />
  },
  {
    name: 'Logout',
    path: '/admin/logout',
    icon: <Logout className='text-primary' />,
    activeIcon: <LogoutIcon className='text-white' />
  }
]

const AdminDrawerList = (toggleDrawer) => {
  return (
    <>
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default AdminDrawerList