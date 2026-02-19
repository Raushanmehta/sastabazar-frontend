import { AccountBalanceWallet, AccountBox, Add, Dashboard, Inventory, Logout, Receipt, ShoppingBag } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import DrawerList from '../../../components/DrawerList';




const menu = [
    {
        name: "Dashboard",
        path: "/seller/dashboard",
        icon: <Dashboard className='text-primary' />,
        activeIcon: <DashboardIcon className='text-white' />
    },
    {
        name: "Orders",
        path: "/seller/orders",
        icon: <ShoppingBag className='text-primary' />,
        activeIcon: <ShoppingBagIcon className='text-white' />
    },
    {
        name: "Products",
        path: "/seller/products",
        icon: <Inventory className='text-primary' />,
        activeIcon: <InventoryIcon className='text-white' />
    },
    {
        name: "Add Product",
        path: "/seller/add-product",
        icon: <Add className='text-primary' />,
        activeIcon: <AddIcon className='text-white' />
    },
    {
        name: "Payment",
        path: "/seller/payment",
        icon: <AccountBalanceWallet className='text-primary' />,
        activeIcon: <AccountBalanceWalletIcon className='text-white' />
    },
    {
        name: "Transaction",
        path: "/seller/transaction",
        icon: <Receipt className='text-primary' />,
        activeIcon: <ReceiptIcon className='text-white' />
    },

]

const menu2 = [
    {
        name: "Account",
        path: "/seller/account",
        icon: <AccountBox className='text-primary' />,
        activeIcon: <AccountBox className='text-white' />
    },
    {
        name: "Logout",
        path: "/seller/logout",
        icon: <Logout className='text-primary' />,
        activeIcon: <LogoutIcon className='text-white' />
    }
]

const SellerDrawerList = ({ toggleDrawer }) => {
    return (
        <>
            <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
        </>

    )
}

export default SellerDrawerList