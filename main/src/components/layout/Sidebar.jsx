import React from 'react';
import Owner from '../ui/Owner';
import SidebarButton from '../ui/SidebarButton';
import Wallet from '../ui/Wallet';

const metaData = [
  { icon: 1, name: 'Home', to: '/' },
  { icon: 2, name: 'Orders', to: '/' },
  { icon: 3, name: 'Products', to: '/' },
  { icon: 4, name: 'Delivery', to: '/' },
  { icon: 5, name: 'Marketing', to: '/' },
  { icon: 7, name: 'Payouts', to: '/payouts' },
  { icon: 8, name: 'Discounts', to: '/' },
  { icon: 9, name: 'Audience', to: '/' },
  { icon: 10, name: 'Appearance', to: '/' },
  { icon: 11, name: 'Plugins', to: '/' },
];

function Sidebar() {
  return (
    <div className="absolute left-0 top-0 flex h-[100dvh] w-[16%] flex-col bg-[#1E2640]">
      <Owner />

      {metaData.map((item) => (
        <SidebarButton
          icon={item.icon}
          name={item.name}
          to={item.to}
          key={item.icon}
        />
      ))}

      <div className='absolute bottom-4 w-[100%]'>
        <Wallet />
      </div>
    </div>
  );
}

export default Sidebar;
