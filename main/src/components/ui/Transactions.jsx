import React from 'react'
import Tab from './Tab'
import Table from '../layout/Table'

function Transactions() {
  return (
    <div className='w-full mt-4 px-8 text-stone-800 '>
        <div>
            <span className='font-bold text-[18px]'>Transactions | This Month</span>
        </div>

        <div className='flex p-2 space-x-4 mt-4'>
            <Tab name='Payouts' isActive={false} items={22}/>
            <Tab name='Refunds' isActive={true} items={6}/>
        </div>

        <Table />
    </div>
  )
}

export default Transactions