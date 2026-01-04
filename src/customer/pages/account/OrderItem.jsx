import { ElectricBolt } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { cyan } from "@mui/material/colors"


const OrderItem = () => {
    return (
        <div className="text-sm bg-white p-5 space-y-4 border border-gray-200 rounded-md' cursor-pointer">
            <div className="flex items-center gap-5">
                <div>
                    <Avatar sizes="small " sx={{ bgcolor: cyan[400] }}>
                        <ElectricBolt />
                    </Avatar>

                </div>
                <div>
                    <h1 className="font-bold text-cyan-400">PENDING</h1>
                    <p>Arriving By Mon, Dec 12</p>
                </div>
            </div>

            <div className="p-5 bg-cyan-200 flex gap-3">
                <div>
                    <img 
                    src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTVLrGDLC9U53qOyzziJ0umStK2dIPjrx_aYsplueQrJLqQ1uuwYRzfgW-6K_AMnhBn72fOx9qyHmNZ4ND5NR3rckNTSpJwdS1KB3lZA7-ORs03o-HuorFJg" 
                    alt="item"
                    className="w-[70px] rounded-md"
                    />
                </div>
                <div>
                    <h1 className="font-bold">Apple Watch</h1>
                    <p>Apple Watch Series 11 GPS + Cellular 46mm Aluminium Case Sport Band</p>
                    <p>
                        <strong>size : </strong>
                        FREE
                    </p>
                    
                </div>
            </div>

        </div>
    )
}

export default OrderItem