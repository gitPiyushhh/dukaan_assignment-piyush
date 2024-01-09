import React from 'react';
import OverviewCard from './OverviewCard';

const metaData = [
    {
        name: 'Next Payout',
        price: '2,312.23',
        isOrders: true,
        orders: '23',
        isActive: true 
    },
    {
        name: 'Amount Pending',
        price: '92,312.20',
        isOrders: true,
        orders: '13',
        isActive: false
    },
    {
        name: 'Amount Processed',
        price: '23,92,312.19',
        isOrders: false,
        isActive: false
    }
]

function Overview() {
  return (
    <div className='w-full text-stone-800 p-8 pt-6'>
        <span className='font-bold text-[18px]'>Overview</span>

        <div className='flex w-full justify-between items-start mt-6 pr-4'>
            {metaData.map(item => <OverviewCard key={item.name} name={item.name} price={item.price} isOrders={item.isOrders} orders={item.orders} isActive={item.isActive}/>)}
        </div>
    </div>
  )
}

export default Overview