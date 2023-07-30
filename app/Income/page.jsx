import React from "react";

import { GiMoneyStack, GiWallet, GiCash } from "react-icons/gi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/Bs";
import { BsFillCalendarDateFill } from "react-icons/Bs";
import { BiCommentDetail } from "react-icons/Bi";
import { AiFillDelete } from "react-icons/ai";

const Page = () => {
  const incomeTypes = [
    {
      type: "Salary",
      icon: <GiMoneyStack />,
    },
    {
      type: "Bitcoin",
      icon: <BsCurrencyBitcoin />,
    },
    {
      type: "Cashback",
      icon: <GiWallet />,
    },
    {
      type: "Freelancing",
      icon: <FaBriefcase />,
    },
    {
      type: "Cash Payment",
      icon: <GiCash />,
    },
  ];

  return (
    <div className="w-[100%] h-[100vh] border-2 border-white rounded-3xl p-5 bg-red-200">
      <p className="text-4xl p-4 ">Incomes</p>
      <div className=" w-[1250px]  h-[10vh] border-2 border-white rounded-3xl bg-red-50   flex items-center   justify-center">
        <p className="text-3xl">
          Total Income: <span className="text-green-700">₹ 12000</span>
        </p>
      </div>
      {/* for input form */}
      <div className="flex p-4 gap-4">
        <div className="flex flex-col w-[420px] gap-4 ">
          <input
            type="text"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Income By"
            // value="Default Value"
          />
          <input
            type="Number"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Income"
            // value="Default Value"
          />
          <input
            type="date"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

            // value="Default Value"
          />

          <div className="flex justify-end ">
            <select
              className="flex text-left border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option disabled value="">
                Select an icon
              </option>
              {incomeTypes.map((option, index) => (
                <option key={index} value={option.iconType}>
                  {option.type}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            // value="Default Value"
          />
          <button className="border-2 text-2xl p-1 w-60 border-white rounded-2xl bg-pink-500 ">
            + Add Income
          </button>
        </div>
        <div className="flex gap-4 p-5 w-[800px] h-[100px] border-2 border-white bg-red-50 items-center justify-between rounded-3xl ">
          <div className="flex items-center justify-between gap-6 ">
            <div>
              <BsCurrencyBitcoin size="80px" color="green" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex gap-4">
                {" "}
                <BsFillCircleFill size="24px" color="#80ff80" />
                type
              </p>
              <div className="flex gap-4">
                <p className="flex gap-2">
                  <GiMoneyStack size="20px" /> ₹ 20
                </p>
                <p className="flex gap-2">
                  {" "}
                  <BsFillCalendarDateFill size="20px" />
                  22/22/2222
                </p>
                <p className="flex gap-2 items-center">
                  {" "}
                  <BiCommentDetail size="20px" />
                  comment
                </p>
              </div>
            </div>
          </div>
          <div>
            <AiFillDelete size="60px" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
