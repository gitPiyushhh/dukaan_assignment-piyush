import React from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import { FaAngleRight } from 'react-icons/fa';

function OverviewCard({ isActive, name, price, isOrders, orders }) {
  if (!isActive) {
    return (
      <div className="w-[32%] flex-col text-stone-900">
        <div className="w-full rounded-lg p-4 py-6 shadow-md">
          <span className="text-[16px] flex items-center space-x-2">
            <span>{name}</span>
            <CiCircleQuestion />
          </span>
          <div className="mt-2 flex w-full items-center justify-between">
            <span className="text-[28px] font-semibold">₹{price}</span>
            <span className="flex items-center space-x-2">
              {isOrders && (
                <>
                  <span className="decoration text-[14px] text-[#146EB4] underline underline-offset-2">
                    {orders} Orders
                  </span>
                  <FaAngleRight size={16} fill="#146EB4" />{' '}
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[32%] flex-col text-stone-100">
      <div className="w-full rounded-t-lg bg-[#146EB4] p-4 py-6 shadow-md">
        <span className="text-[16px] flex items-center space-x-2">
          <span>{name}</span>
          <CiCircleQuestion size={16} />
        </span>
        <div className="mt-2 flex w-full items-center justify-between">
          <span className="text-[28px] font-semibold">₹{price}</span>
          <span className="flex items-center space-x-2">
            <span className="decoration text-[14px] underline underline-offset-2">
              {orders} Orders
            </span>
            <FaAngleRight size={16} />
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between rounded-b-lg bg-[#0E4F82] px-4 py-2 text-sm">
        <span>Next payout date:</span>
        <span>Today, 04:00PM</span>
      </div>
    </div>
  );
}

export default OverviewCard;
