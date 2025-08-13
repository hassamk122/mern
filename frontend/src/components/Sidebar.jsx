import React from 'react';
import '../styles/sidebar.css';
import {LogOut,Settings, KeyRound, LayoutDashboard,NotebookTabs, icons } from "lucide-react";

const navs = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard color="currentColor" />,
  },
  {
    title:"Password Manager",
    icon:<KeyRound color="currentColor" />
  },
  {
    title:"Notes",
    icon:<NotebookTabs color="currentColor" />
  },
  {
    title:"Settings",
    icon:<Settings color="currentColor" />
  },
  {
    title:"Sign out",
    icon :<LogOut color="currentColor" />
  }
];

function Sidebar() {
  return (
    <section className='sidebar-container'>
      <aside>
        {navs.map((nav, index) => (
          <div className='nav' key={index}>
            <div className='nav-item'>
              {nav.icon}
              <h1>{nav.title}</h1>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default Sidebar;
