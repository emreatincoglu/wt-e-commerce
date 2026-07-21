import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Gravatar from 'react-gravatar';
import {
  ChevronDown,
  Heart,
  Menu,
  Package,
  Search,
  User,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions/productActions";
import ShoppingCartDropdown from "./ShoppingCartDropdown";

function Navbar() {
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((store) => store.product.categories);
  const isLoggedIn = user && user.token;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeUserMenu = (event) => {
      if (!userMenuRef.current?.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeUserMenu);
    return () => document.removeEventListener("mousedown", closeUserMenu);
  }, []);

  const categoryColumns = useMemo(() => {
    const groups = {
      kadin: [],
      erkek: [],
    };

    categories?.forEach((category) => {
      const genderValue = String(category.gender || category.code?.split(":")[0] || "").toLocaleLowerCase("tr-TR");

      if (["k", "kadin", "kadın", "female", "woman", "women"].includes(genderValue)) {
        groups.kadin.push(category);
      }

      if (["e", "erkek", "male", "man", "men"].includes(genderValue)) {
        groups.erkek.push(category);
      }
    });

    return {
      kadin: groups.kadin,
      erkek: groups.erkek
    };
  }, [categories]);

  const navigateTo = (path) => {
    setIsMobileMenuOpen(false);
    history.push(path);
  };

  const navigateToCategory = (category) => {
    history.push(`/shop/${category.gender === 'k' ? 'kadin' : 'erkek' }/${category.title}/${category.id}`);
  };

  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const desktopNavClassName = (path, isShop = false) =>
    `flex items-center gap-1 text-sm leading-6 tracking-[0.2px] ${
      isShop || isActivePath(path)
        ? "font-medium text-[#252b42]"
        : "font-bold text-[#737373] hover:text-[#252b42]"
    }`;

  const mobileNavClassName = (path) =>
    `text-xl font-bold leading-8 tracking-[0.2px] ${
      isActivePath(path) ? "text-[#23a6f0]" : "text-[#737373]"
    }`;

  return (
    <>
      
      <div className="border-b border-[#f0f0f0] md:hidden">
        <div className="flex min-h-24 items-center justify-between gap-4 px-6">
          <NavLink
            className="shrink-0 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]"
            exact
            to="/"
          >
            Bandage
          </NavLink>
          
          <div className="flex items-center gap-5 text-[#252b42]">
            <button aria-label="Search" type="button">
              <Search aria-hidden="true" size={24} strokeWidth={2} />
            </button>
            <ShoppingCartDropdown mobile />
            <button
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X aria-hidden="true" size={25} strokeWidth={2} />
              ) : (
                <Menu aria-hidden="true" size={25} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="flex flex-col items-center gap-5 border-t border-[#f0f0f0] px-6 py-8">
            <button className={mobileNavClassName("/")} onClick={() => navigateTo("/")} type="button">
              Home
            </button>
            <button className={mobileNavClassName("/shop")} onClick={() => navigateTo("/shop")} type="button">
              Shop
            </button>
            <button className={mobileNavClassName("/blog")} onClick={() => navigateTo("/blog")} type="button">
              Blog
            </button>
            <button className={mobileNavClassName("/contact")} onClick={() => navigateTo("/contact")} type="button">
              Contact
            </button>
            <button className={mobileNavClassName("/team")} onClick={() => navigateTo("/team")} type="button">
              Team
            </button>

            
            <div className="mt-2 flex flex-col items-center gap-4 border-t border-[#ececec] pt-6 text-[#23a6f0]">
              {isLoggedIn ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-slate-200 shadow-sm">
                    <Gravatar email={user.email} size={48} default="mp" className="h-full w-full object-cover" />
                  </div>
                  <span className="text-lg font-bold  text-[#23a6f0]">{user.name}</span>
                  <button
                    className="mt-2 flex items-center gap-2 text-base font-bold text-[#252b42]"
                    onClick={() => navigateTo("/orders")}
                    type="button"
                  >
                    <Package aria-hidden="true" size={18} />
                    My Orders
                  </button>
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
        )}
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
          <button className={desktopNavClassName("/")} onClick={() => navigateTo("/")} type="button">
            <span>Home</span>
          </button>
          <div className="group relative">
            <button className={desktopNavClassName("/shop", true)} onClick={() => navigateTo("/shop")} type="button">
              <span>Shop</span>
              <ChevronDown aria-hidden="true" size={14} strokeWidth={2.2} />
            </button>

            <div className="invisible absolute left-0 top-full z-30 grid w-[330px] grid-cols-2 gap-x-10 bg-white px-8 py-8 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="flex flex-col gap-5">
                <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#252b42]">Kadın</p>
                {categoryColumns.kadin.map((category) => (
                  <button
                    className="text-left text-sm font-bold leading-6 tracking-[0.2px] text-[#737373] hover:text-[#252b42]"
                    key={category.id}
                    onClick={() => navigateToCategory(category)}
                    type="button"
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#252b42]">Erkek</p>
                {categoryColumns.erkek.map((category) => (
                  <button
                    className="text-left text-sm font-bold leading-6 tracking-[0.2px] text-[#737373] hover:text-[#252b42]"
                    key={category.id}
                    onClick={() => navigateToCategory(category)}
                    type="button"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className={desktopNavClassName("/blog")} onClick={() => navigateTo("/blog")} type="button">
            <span>Blog</span>
          </button>
          <button className={desktopNavClassName("/contact")} onClick={() => navigateTo("/contact")} type="button">
            <span>Contact</span>
          </button>
          <button className={desktopNavClassName("/team")} onClick={() => navigateTo("/team")} type="button">
            <span>Team</span>
          </button>

          
        </div>

        <div className="flex items-center text-[#23a6f0]">
          
          {isLoggedIn ? (
            <div className="relative" ref={userMenuRef}>
              <button
                aria-expanded={isUserMenuOpen}
                aria-haspopup="menu"
                className="flex items-center gap-2 p-[15px]"
                onClick={() => setIsUserMenuOpen((open) => !open)}
                type="button"
              >
                <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-slate-200">
                  <Gravatar
                    email={user.email}
                    size={28}
                    default="mp"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="hidden max-w-[150px] truncate text-sm font-bold leading-6 tracking-[0.2px] text-[#23a6f0] lg:inline">
                  {user.name}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
                  size={15}
                />
              </button>

              {isUserMenuOpen && (
                <div
                  className="absolute right-0 top-full z-50 w-52 overflow-hidden rounded-[6px] border border-[#ececec] bg-white py-2 text-[#252b42] shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                  role="menu"
                >
                  <button
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold transition-colors hover:bg-[#f4fbff] hover:text-[#23a6f0]"
                    onClick={() => navigateTo("/orders")}
                    role="menuitem"
                    type="button"
                  >
                    <Package aria-hidden="true" size={18} />
                    My Orders
                  </button>
                </div>
              )}
            </div>
          ) : (
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

          <button
            aria-label="Search"
            className="flex items-center justify-center rounded-[37px] p-[15px]"
            type="button"
          >
            <Search aria-hidden="true" size={18} strokeWidth={2.2} />
          </button>

          <ShoppingCartDropdown />

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
