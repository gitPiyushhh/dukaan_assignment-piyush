import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='flex bg-[#FAFAFA] w-[100vw] h-[100dvh]'>
      <Sidebar />
      
      <Outlet />
    </div>
  );
}

export default AppLayout;
