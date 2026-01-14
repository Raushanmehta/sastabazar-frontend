import { Button, Card, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Payment = () => {
    const navigate = useNavigate();
  return (
    <div className=" space-y-6">

      {/* Earnings Card */}
      <Card className="rounded-xl p-6 shadow-md bg-white space-y-4">
        <h1 className="text-sm text-gray-500 uppercase tracking-wide">
          Total Earnings
        </h1>

        <h1 className="text-3xl font-bold text-gray-800">
          ₹656
        </h1>

        <Divider />

        <p className="text-sm text-gray-500">
          Last Payment:{" "}
          <span className="font-semibold text-gray-700">₹526</span>
        </p>
      </Card>

      {/* Transactions */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Transactions
          </h2>

          <Button
          onClick={() => navigate("/seller/transaction")}
            variant="contained"
            >
        Transaction
          </Button>
        </div>

        
      </div>

    </div>
  );
};

export default Payment;
