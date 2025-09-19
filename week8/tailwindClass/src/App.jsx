import React from "react";
import RevenueCard from "./components/RevenueCard";
import DummyTable from "./components/DummyTable";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-300 flex flex-col items-center py-4 overflow-y-auto">
      <RevenueCard title={"Payment pending"} order={14} money={123123} />
      <DummyTable />
    </div>
  );
};

export default App;
