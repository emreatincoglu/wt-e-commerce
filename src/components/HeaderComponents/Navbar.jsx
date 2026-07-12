import React, { useEffect, useMemo } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Gravatar from 'react-gravatar';
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions/productActions";

function Navbar() {
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((store) => store.product.categories);
  const isLoggedIn = user && user.token;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoryColumns = useMemo(() => {
    const groups = {
      kadin: [],
      erkek: [],
    };

    categories.forEach((category) => {
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
    `text-[30px] font-normal leading-[45px] tracking-[0.2px] ${
      isActivePath(path) ? "text-[#252b42]" : "text-[#737373]"
    }`;

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
