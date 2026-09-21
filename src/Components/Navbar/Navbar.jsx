import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import siteData from "../../Data/posts.json";
import Logo from "../../assets/Images/imgi_1_logo-GdqARQRt.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm transition ${
      isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:text-white"
    }`;
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0a0908]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/blog"
              className="hidden bg-orange-600  sm:inline-flex brand-gradient text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition"
            >
              ابدأ القراءة
            </Link>
            <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-white/5 text-gray-300 hover:text-orange-400 transition">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white"
            >
           <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1">
            <NavLink to="/About" className={linkClass}>
              من نحن
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              المدونة
            </NavLink>
            <NavLink to="/" end className={linkClass}>
              الرئيسية
            </NavLink>
          </nav>

        <Link
  to="/"
  dir="rtl"
  className="group flex flex-row items-center gap-3"
>
  <div className="relative h-12 w-12 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
    <img
      src={Logo}
      alt="عدسة"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-col">
    <p className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-xl font-bold text-transparent">
      {siteData.siteInfo.name}
    </p>

    <p className="hidden text-xs tracking-wide text-orange-400/80 sm:block">
      {siteData.siteInfo.tagline}
    </p>
  </div>
</Link>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0a0908]/95 px-4 py-4 space-y-2">
            <NavLink
              to="/writers"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/5"
            >
              من نحن
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/5"
            >
              المدونة
            </NavLink>
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/5"
            >
              الرئيسية
            </NavLink>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="block text-center brand-gradient text-white font-bold px-4 py-2.5 rounded-full mt-2"
            >
              ابدأ القراءة
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
