import React, { useState } from 'react';

const DashboardPage = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z' },
    { name: 'My Rentals', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Reservations', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Inventory', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Support', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  const inventoryItems = [
    { id: 1, name: 'Studded Leather Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Asymmetric Dress', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Velvet Blazer', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[#16181d] text-white selection:bg-white selection:text-[#16181d] font-sans">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 h-full bg-[#111317] border-r border-[#22252d] flex flex-col justify-between shrink-0 select-none">
        <div>
          {/* Brand Logo Header */}
          <div className="p-6">
            <span className="block text-[22px] font-bold tracking-[0.04em] leading-none text-white">
              Wear at Your
            </span>
            <span className="block text-[22px] font-bold tracking-[0.04em] leading-none text-white mt-1">
              Own Risk
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-2 space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-[6px] text-[13px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#222630] text-white shadow-sm'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#1a1d24]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Support Button */}
        <div className="p-4 border-t border-[#22252d]">
          <button 
            onClick={() => setActiveNav('Support')}
            className="w-full flex items-center gap-3 px-3 py-2 text-[13px] text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Support</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-full overflow-hidden flex flex-col bg-[#16181d] px-8 py-5">
        
        {/* Top Header Bar */}
        <header className="w-full flex items-center justify-between pb-4 border-b border-[#252832] shrink-0">
          <h1 className="text-[20px] font-bold tracking-tight text-white">Dashboard</h1>
          
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 border border-gray-600">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[13px] font-medium text-gray-200">Profile</span>
          </div>
        </header>

        {/* Dashboard Scroll-Free Grid Workspace */}
        <div className="flex-1 overflow-hidden py-4 flex flex-col gap-4">
          
          {/* Section 1: Stats Overview */}
          <section>
            <h2 className="text-[13px] font-medium text-gray-300 mb-2.5">Active Apparel Rental & Reservation Status</h2>
            <div className="grid grid-cols-4 gap-3.5">
              
              {/* Card 1 */}
              <div className="bg-[#1b1e26] border border-[#262a35] rounded-[8px] p-3.5 flex flex-col justify-between relative shadow-sm">
                <div className="flex items-center justify-between text-gray-400 text-[12px]">
                  <span>Total Rentals</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                </div>
                <div className="text-[26px] font-bold text-white mt-2">482</div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f3eee2] text-[#1c1d22] rounded-[8px] p-3.5 flex flex-col justify-between relative shadow-sm">
                <div className="flex items-center justify-between text-gray-700 text-[12px]">
                  <span>Current Reservations</span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div className="text-[26px] font-bold text-[#1c1d22] mt-2">26</div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f3eee2] text-[#1c1d22] rounded-[8px] p-3.5 flex flex-col justify-between relative shadow-sm">
                <div className="flex items-center justify-between text-gray-700 text-[12px]">
                  <span>Overdue Items</span>
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                </div>
                <div className="text-[26px] font-bold text-[#1c1d22] mt-2">30</div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f3eee2] text-[#1c1d22] rounded-[8px] p-3.5 flex flex-col justify-between relative shadow-sm">
                <div className="flex items-center justify-between text-gray-700 text-[12px]">
                  <span>Available Inventory</span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <div className="text-[26px] font-bold text-[#1c1d22] mt-2">500</div>
              </div>

            </div>
          </section>

          {/* Section 2: Bottom Grid (Pickups & Inventory Preview) */}
          <section className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3.5 overflow-hidden">
            
            {/* Upcoming Pickup Dates (Left Side) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <h2 className="text-[13px] font-medium text-gray-300">Upcoming Pickup Dates</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f3eee2] text-[#1c1d22] p-3.5 rounded-[8px] flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[22px] font-bold leading-none">23</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] text-gray-500 block">2022</span>
                    <span className="text-[12px] font-semibold text-gray-900 block truncate">Studded Leather Jacket</span>
                  </div>
                </div>

                <div className="bg-[#f3eee2] text-[#1c1d22] p-3.5 rounded-[8px] flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[22px] font-bold leading-none">21</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] text-gray-500 block">2022</span>
                    <span className="text-[12px] font-semibold text-gray-900 block truncate">Asymmetric Dress</span>
                  </div>
                </div>
              </div>

              {/* Extra Pickup Card */}
              <div className="bg-[#f3eee2] text-[#1c1d22] p-3.5 rounded-[8px] flex items-center justify-between">
                <div>
                  <span className="text-[22px] font-bold leading-none block">29</span>
                  <span className="text-[10px] text-gray-500 block">2022</span>
                  <span className="text-[12px] font-semibold text-gray-900 block mt-1">Available Inventory (280 items)</span>
                </div>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
            </div>

            {/* High-fashion Edgy Clothing Catalog (Right Side) */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <h2 className="text-[13px] font-medium text-gray-300">High-fashion Edgy Clothing</h2>
              <div className="grid grid-cols-3 gap-3">
                {inventoryItems.map((item) => (
                  <div key={item.id} className="bg-[#1b1e26] border border-[#262a35] rounded-[8px] overflow-hidden flex flex-col">
                    <div className="h-28 w-full overflow-hidden bg-gray-800">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-2.5">
                      <span className="text-[11px] font-medium text-gray-200 block truncate">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

        </div>
      </main>
    </div>
  );
};

export default DashboardPage;