import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarButton({ icon, name, to }) {
  return (
    <NavLink activeClassName="bg-stone-400" to={to}>
      <div
        role="button"
        className="flex gap-8 bg-transparent px-4 py-[0.7rem] text-stone-200"
      >
        <img src={`/${icon}.svg`} alt="Icon_img" className="" />

        <span>{name}</span>
      </div>
    </NavLink>
  );
}

export default SidebarButton;
