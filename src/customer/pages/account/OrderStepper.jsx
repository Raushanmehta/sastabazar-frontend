import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const steps = [
    { name: "Order Placed", description: "on Thu, 11 June", value: "PLACED" },
    { name: "Packed", description: "Your order has been packed", value: "CONFIRMED" },
    { name: "Shipped", description: "Your order has been shipped", value: "SHIPPED" },
    { name: "Arriving", description: "Your order is arriving soon", value: "ARRIVING" },
    { name: "Arrived", description: "Your order has arrived", value: "DELIVERED" },
];

const cancelSteps = [
    { name: "Order Placed", description: "on Thu, 11 June", value: "PLACED" },
    { name: "Cancelled", description: "Your order has been cancelled", value: "CANCELLED" },
];

// const currentStep = 2;

const OrderStepper = ({ orderStatus }) => {
    const [statusStep, setStatusStep] = useState(steps);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const data = orderStatus === 'CANCELLED' ? cancelSteps : steps;
        setStatusStep(data);

        const index = data.findIndex(step => step.value === orderStatus);
        setCurrentStep(index === -1 ? 0 : index);
    }, [orderStatus]);

    return (
        <Box className='my-10 space-y-2'>
            {statusStep.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex px-4 items-start">
                        <div className="flex flex-col items-center mr-3">
                            {/* Circle */}
                            <Box
                                className={`w-8 h-8 rounded-full flex items-center justify-center
          ${index <= currentStep ? "bg-cyan-500 text-white" : "bg-gray-300 text-gray-600"}`}
                            >
                                {step.value === orderStatus ? <CheckCircleIcon /> : <FiberManualRecordIcon />}
                            </Box>

                            {/* Vertical line */}
                            {index < statusStep.length - 1 && (
                                <div
                                    className={`w-[2px] h-10
            ${index <= currentStep ? "bg-cyan-500" : "bg-gray-300"}`}
                                />
                            )}
                        </div>

                        {/* Text */}
                        <div className="flex-1 pb-6">
                            <div
                                className={`w-full p-2 rounded-md font-medium
                                ${step.value === orderStatus && orderStatus === "CANCELLED"
                                        ? "bg-red-600 text-white"
                                        : step.value === orderStatus
                                            ? "bg-cyan-500 text-white"
                                            : ""
                                    }`}
                            >
                                <p>{step.name}</p>
                                <p
                                    className={`text-xs ${step.value === orderStatus ? "text-gray-200" : "text-gray-500"
                                        }`}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default OrderStepper;
