import React from "react";
import Loading from "../../ui/Loading";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiOutlineCollection } from "react-icons/hi";
import Stat from "./Stat";
import { CiGrid41 } from "react-icons/ci";
import convertToPersianNumber from "../../utils/convertPrice";
function Stats({proposals}) {
 
   const numOfAcceptedProposals = proposals.filter(p => p.status == 2) || [];
   console.log(numOfAcceptedProposals);
   const totalPrice = numOfAcceptedProposals.reduce((acc,curr)=>{
    return acc + curr.price;
   },0);
  return (
    <div div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:grid-cols-3">
      <Stat
        title={"پروژه ها"}
        value={proposals.length}
        icon={<CiGrid41 className="w-10 h-10 text-secondary-500" />}
      />
      <Stat
        title={"درخواست های قبول شده"}
        value={numOfAcceptedProposals.length}
        icon={<HiOutlineCollection className="w-9 h-9 text-secondary-500" />}
      />
      <Stat
        title={"مبالغ دریافتی "}
        value={convertToPersianNumber(totalPrice)}
        icon={<HiMiniCurrencyDollar className="w-9 h-9 text-secondary-500" />}
      />
    </div>
  );
}

export default Stats;
