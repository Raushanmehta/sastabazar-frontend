import { Button } from "@mui/material";
import { useState } from "react";
import DealTable from "./DealTable";
import CreateDealForm from "./CreateDealForm";
import DealCategoryTable from "./DealCategoryTable";

const tabs = ["Deals", "Category", "Create Deal"];

const Deal = () => {
  const [activeDeal, setActiveDeal] = useState("Deals");

  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item) => (
          <Button
            key={item}
            variant={activeDeal === item ? "contained" : "outlined"}
            onClick={() => setActiveDeal(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="mt-4">
        {/* Content based on active tab */}
        {activeDeal == "Deals" ? <DealTable /> : activeDeal == 'Category' ? <DealCategoryTable/> :<div>
          <CreateDealForm/>
        </div>}
        
      </div>
    </div>
  );
};

export default Deal;
