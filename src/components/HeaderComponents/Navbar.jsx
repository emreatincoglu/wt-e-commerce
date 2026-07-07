import React from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const navItems = ["Home", "Shop", "About", "Blog", "Contact", "Team"];
const mobileNavItems = ["Home", "Shop", "About", "Blog", "Contact", "Team"];

function Navbar() {
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
          </nav>
        </div>
      </div>

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

        <div className="flex items-center text-[#23a6f0]">
          <NavLink
            className="hidden items-center gap-[5px] rounded-[37px] p-[15px] text-sm font-bold leading-6 tracking-[0.2px] lg:flex"
            to="/login"
          >
            <User aria-hidden="true" size={14} strokeWidth={2.3} />
            <span>Login / Sign Up</span>
          </NavLink>
          <button
            aria-label="Search"
            className="rounded-[37px] p-[15px]"
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
