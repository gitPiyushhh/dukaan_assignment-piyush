import React from 'react';
import TableHead from '../ui/TableHead';
import {data} from '../../../data'
import TableRow from '../ui/TableRow';

const tableHeadMetaData = [
  {
    name: 'Order ID'
  },
  {
    name: 'Status',
  },
  {
    name: 'Transaction ID',
  },
  {
    name: 'Refund date',
  },
  {
    name: 'Order amount',
    rightAlign: true,
  },
];

function Table() {
  const width = 100 / tableHeadMetaData.length;

  return (
    <div className="w-ful bg-stone-50 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Order ID or Transaction ID"
          className=" bottom-1 h-[48%] w-[30%] rounded-md border bg-stone-100 py-3 pl-4 placeholder:text-[14px] placeholder:text-stone-500"
        />

        <div className="flex space-x-4">
          <div className="text-md flex w-fit items-center space-x-1 rounded-sm border border-stone-400 px-2 py-1">
            <span>Sort</span>
            <img src="/sort.svg" alt="icon" />
          </div>

          <div className="flex w-fit items-center rounded-sm border border-stone-400 px-1.5">
            <img src="/download.svg" alt="icon" />
          </div>
        </div>
      </div>

      {/* Table here */}
      <div role="table" className="mt-4">
        <div
          role="th"
          className="flex justify-between bg-stone-200 p-3 text-sm font-semibold"
        >
          {tableHeadMetaData.map((item) => (
            <TableHead
              key={item.name}
              name={item.name}
              width={width}
              rightAlign={item.rightAlign}
            />
          ))}
        </div>

        <div role='td'>
          {data.map(item => <TableRow key={item.orderId} data={item} width={width}/>)}
        </div>
      </div>
    </div>
  );
}

export default Table;
