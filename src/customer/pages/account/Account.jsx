import {  Divider } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import OrderDetails from './OrderDetails';
import Orders from './Orders';


const menu = [
    { name: 'Orders', path: '/account/orders' },
    { name: 'profile', path: '/account/profile' },
    { name: 'Saved Cards', path: '/account/saved-card' },

    { name: 'Addresses', path: '/account/addresses' },
    { name: 'LogOut', path: '/' },
]
const Account = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (item) => {
        navigate(item.path)
    }
    return (
        <div className='px-5 lg:px-52 min-h-screen mt-10'>
            <div>
                <h1 className='text-xl font-bold pb-5'>Account</h1>
            </div>
            <Divider />

            <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78ch]'>
                <section className='col-span-1 lg:border-r border-gray-200 lg:pr-5 py-5 h-full'>
                    {menu.map((item, index) => (
                        <div 
                        onClick={()=>handleClick(item)} 
                        key={index}
                        className={` ${item.path === location.pathname ? 'bg-cyan-400 text-white' : ''}
                        py-3 mb-2 cursor-pointer  hover:bg-cyan-400 border-b border-gray-200 rounded-md px-4`}>
                        <p className='text-sm font-semibold text-gray-500 '>{item.name}</p>
                        </div>
                    ))}
                </section>

                <section className='right lg:col-span-2 lg:pl-5 py-5'>
                   {/* <Orders/> */}
                   <OrderDetails/>
                </section>
            </div>

        </div>
    )
}

export default Account