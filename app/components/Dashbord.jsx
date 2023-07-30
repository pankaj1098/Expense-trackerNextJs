import React from "react";
import Chart from "./Chart";
import PieChart from "./PieChart";

const Dashbord = () => {
  return (
    <div className="w-[100%] h-[100vh] border-2 border-white rounded-3xl p-5 bg-red-200">
      <p className="text-4xl p-4 ">All Transactions</p>
      <div className="flex gap-[5%]">
        <div className="flex flex-col gap-3 w-[60%]   ">
          <div className=" border-2 border-white rounded-3xl p-5 bg-red-50 ">
            <Chart />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-3 w-fit h-fit border-2 border-white rounded-3xl p-5 bg-red-50 justify-center items-center ">
              <p className="text-4xl ">Total Income</p>
              <p className="text-6xl text-center">₹ 12000</p>
            </div>
            <div className="flex flex-col gap-3 w-fit h-fit border-2 border-white rounded-3xl p-5 bg-red-50 justify-center items-center ">
              <p className="text-4xl ">Total Expense</p>
              <p className="text-6xl text-center">₹ 10000</p>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col gap-3 w-fit h-fit border-2 border-white rounded-3xl p-5 bg-red-50 justify-center items-center ">
              <p className="text-4xl ">Total Balance</p>
              <p className="text-6xl text-center text-green-600">₹ 2000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[30%]   ">
          <div className="h-[47%] border-2 border-white rounded-3xl p-5 bg-red-50">
            <PieChart />
          </div>
          <div className="h-[47%] border-2 border-white rounded-3xl p-5 bg-red-50">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
