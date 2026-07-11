import React from "react";
import { NavLink } from "react-router-dom";
import Gravatar from 'react-gravatar';
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useSelector } from "react-redux";

const navItems = ["Home", "Shop", "Blog", "Contact", "Team"];
const mobileNavItems = ["Home", "Shop", "Blog", "Contact", "Team"];

function Navbar() {
  const user = useSelector((state) => state.client.user);
  const isLoggedIn = user && user.token;

  return (
    <>
      
      <div className="md:hidden">
        <div className="relative h-[532px]">
          <NavLink
            className="absolute left-[35px] top-[36px] text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]"
            exact
            to="/"
          >
            Bandage
          </NavLink>
          
          <div className="absolute right-[37px] top-10 flex items-center gap-6 text-[#252b42]">
            <button aria-label="Search" type="button">
              <Search aria-hidden="true" size={24} strokeWidth={2} />
            </button>
            <NavLink aria-label="Cart" to="/cart">
              <ShoppingCart aria-hidden="true" size={24} strokeWidth={2} />
            </NavLink>
            <button aria-label="Menu" type="button">
              <Menu aria-hidden="true" size={25} strokeWidth={2} />
            </button>
          </div>

          <nav className="absolute left-1/2 top-[164px] flex -translate-x-1/2 flex-col items-center gap-[30px]">
            {mobileNavItems.map((item) => (
              <NavLink
                className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-[#737373]"
                exact={item === "Home"}
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            ))}

            
            <div className="mt-4 flex flex-col items-center gap-4 text-[#23a6f0]">
              {isLoggedIn ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-slate-200 shadow-sm">
                    <Gravatar email={user.email} size={48} default="mp" className="h-full w-full object-cover" />
                  </div>
                  <span className="text-lg font-bold  text-[#23a6f0]">{user.name}</span>
                </div>
              ) : (
                <>
                  <NavLink className="flex items-center gap-2 text-xl font-medium" to="/login">
                    <User size={20} /> Login
                  </NavLink>
                  <NavLink className="flex items-center gap-2 text-xl font-medium" to="/signup">
                    <User size={20} /> Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* 2. MASAÜSTÜ ALAN (md:flex) */}
      <nav className="mx-auto hidden min-h-[78px] max-w-[1438px] items-center justify-between gap-6 px-8 md:flex">
        <NavLink
          className="shrink-0 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]"
          exact
          to="/"
        >
          Bandage
        </NavLink>

        <div className="flex flex-1 items-center gap-[15px]">
          {navItems.map((item) => (
            <NavLink
              className={`flex items-center gap-1 text-sm leading-6 tracking-[0.2px] ${
                item === "Shop"
                  ? "font-medium text-[#252b42]"
                  : "font-bold text-[#737373] hover:text-[#252b42]"
              }`}
              exact={item === "Home"}
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              <span>{item}</span>
              {item === "Shop" && (
                <ChevronDown aria-hidden="true" size={14} strokeWidth={2.2} />
              )}
            </NavLink>
          ))}
        </div>

        {/* SAĞ MENÜ: Giriş Kontrolleri ve İkonlar */}
        <div className="flex items-center text-[#23a6f0]">
          
          {isLoggedIn ? (
            // Kullanıcı Giriş Yapmışsa: Profil Resmi ve İsim Tek Kapsayıcıda Hizalandı
            <div className="flex items-center gap-2 p-[15px]">
              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-slate-200">
                <Gravatar 
                  email={user.email} 
                  size={28} 
                  default="mp" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <span className="hidden text-sm font-bold leading-6 tracking-[0.2px] text-[#23a6f0] lg:inline">
                {user.name}
              </span>
            </div>
          ) : (
            // Kullanıcı Giriş Yapmamışsa: Linkler Yan Yana Hizalandı
            <div className="flex items-center">
              <NavLink
                className="hidden items-center gap-[5px] rounded-[37px] p-[15px] text-sm font-bold leading-6 tracking-[0.2px] lg:flex"
                to="/login"
              >
                <User aria-hidden="true" size={14} strokeWidth={2.3} />
                <span>Login</span>
              </NavLink>
              <NavLink
                className="hidden items-center gap-[5px] rounded-[37px] p-[15px] text-sm font-bold leading-6 tracking-[0.2px] lg:flex"
                to="/signup"
              >
                <User aria-hidden="true" size={14} strokeWidth={2.3} />
                <span>Sign Up</span>
              </NavLink>
            </div>
          )}

          {/* Standart İkonlar: flex ve items-center yapılarıyla dikey kaymaları engellendi */}
          <button
            aria-label="Search"
            className="flex items-center justify-center rounded-[37px] p-[15px]"
            type="button"
          >
            <Search aria-hidden="true" size={18} strokeWidth={2.2} />
          </button>
          
          <NavLink
            aria-label="Cart with 1 item"
            className="flex items-center gap-[5px] rounded-[37px] p-[15px]"
            to="/cart"
          >
            <ShoppingCart aria-hidden="true" size={18} strokeWidth={2.2} />
            <span className="text-xs leading-4 tracking-[0.2px]">1</span>
          </NavLink>
          
          <NavLink
            aria-label="Wishlist with 1 item"
            className="flex items-center gap-[5px] rounded-[37px] p-[15px]"
            to="/wishlist"
          >
            <Heart aria-hidden="true" size={18} strokeWidth={2.2} />
            <span className="text-xs leading-4 tracking-[0.2px]">1</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;