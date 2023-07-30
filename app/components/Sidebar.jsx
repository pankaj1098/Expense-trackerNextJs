import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const navPage = [
    {
      id: 1,
      pageName: "Dashbord",
      pageIcon: <BsGraphUpArrow />,
      link: "/",
    },
    {
      id: 2,
      pageName: "View transtions",
      pageIcon: <FaMoneyCheck />,
      link: "/Transtions",
    },
    {
      id: 3,
      pageName: "Income",
      pageIcon: <GiReceiveMoney />,
      link: "/Income",
    },
    {
      id: 4,
      pageName: "Expenses",
      pageIcon: <GiPayMoney />,
      link: "/Expense",
    },
  ];

  return (
    <div className="flex flex-col  justify-between w-[20%] h-[100vh] border-2 border-white rounded-3xl p-5 bg-red-200">
      <div>
        <div className="flex gap-3 items-center p-4">
          <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full cursor-pointer"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile image"
            />
          </div>
          <div className="    cursor-pointer">
            <p className="text-xl font-medium text-black">Pankaj Yadav</p>
            <p>pankajyadav.ce@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className="flex-col justify-between">
          <div>
            {navPage.map((page, index) => (
              <Link
                href={page.link}
                className="flex gap-4 items-center text-2xl p-4 cursor-pointer"
                key={index}
                // onClick={() => pageNavigate(index)}
              >
                <div>{page.pageIcon}</div>
                <a>{page.pageName}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center text-2xl p-4 cursor-pointer">
        <div>
          <FiLogOut />
        </div>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
