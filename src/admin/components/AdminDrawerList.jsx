import {  AccountBox,  Add,  Category,  Dashboard,  Home,  LocalOffer,  Logout  } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DrawerList from '../../components/DrawerList'
import LogoutIcon from '@mui/icons-material/Logout';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



const menu = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: <Dashboard className='text-primary'/>,
    activeIcon: <DashboardIcon className='text-white'/>
  },
  {
    name: 'Coupon',
    path: '/admin/coupon',
    icon: <IntegrationInstructionsIcon className='text-primary'/>,
    activeIcon: <IntegrationInstructionsIcon className='text-white'/>
  }
  ,{
    name : 'Add new Coupon',
    path : '/admin/add-coupon',
    icon : <Add className='text-primary'/>,
    activeIcon : <Add className='text-white'/>
  },
  {
    name : 'Home Page',
    path : '/admin/home-slider',
    icon : <Home className='text-primary'/>,
    activeIcon : <HomeIcon className='text-white'/>
  },
  {
    name : 'Electronics Category',
    path : '/admin/electronics-category',
    icon : <ElectricBoltIcon className='text-primary'/>,
    activeIcon : <ElectricBoltIcon className='text-white'/>
  }
  ,{
    name : 'Shop By category',
    path : '/admin/shop-by-category',
    icon : <Category className='text-primary'/>,
    activeIcon : <Category className='text-white'/>
  },
  {
    name : 'Deals',
    path : '/admin/deals',
    icon : <LocalOffer className='text-primary'/>,
    activeIcon : <LocalOfferIcon className='text-white'/>
  }
]

const menu2 = [
  {
    name : 'Account',
    path : '/admin/account',
    icon : <AccountBox className='text-primary'/>,
    activeIcon : <AccountBox className='text-white'/>
  },
  {
    name : 'Logout',
    path : '/admin/logout',
    icon : <Logout className='text-primary'/>,
    activeIcon : <LogoutIcon className='text-white'/>
  }
]

const AdminDrawerList = (toggleDrawer) => {
  return (
    <>
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer}/>
    </>
  )
}

export default AdminDrawerList