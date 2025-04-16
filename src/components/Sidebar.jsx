import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Button - only on small screens */}
      <div className="md:hidden p-4 bg-white shadow-sm flex items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-600">Dashboard</h2>
        <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Menu - small screen version */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3 text-gray-700 font-medium">
          <Link to="/" onClick={toggleSidebar} className="block hover:text-indigo-600">Home</Link>
          <Link to="/profile" onClick={toggleSidebar} className="block hover:text-indigo-600">Profile</Link>
          <Link to="/settings" onClick={toggleSidebar} className="block hover:text-indigo-600">Settings</Link>
          <Link to="/login" onClick={toggleSidebar} className="block hover:text-red-600">Logout</Link>
        </div>
      )}

      {/* Sidebar - visible only on md and up */}
      <div className="hidden md:flex w-64 h-screen bg-white shadow-xl rounded-r-3xl p-6 flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-10 text-center">Dashboard</h2>
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link to="/" className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">Home</Link>
            <Link to="/profile" className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">Profile</Link>
            <Link to="/settings" className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">Settings</Link>
            <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-red-100 hover:text-red-600 transition">Logout</Link>
          </nav>
        </div>
        <div className="text-sm text-gray-400 text-center mt-10">
          &copy; {new Date().getFullYear()} MyApp
        </div>
      </div>
    </>
  );
};

export default Sidebar;
