"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const { isSeller, router } = useAppContext();
  const pathname = usePathname();

  if (pathname.startsWith('/seller')) {
    return null; // Don't render the Navbar on seller pages
  }

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/all-products" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
        {/* logo */}
        <Image
          className="cursor-pointer w-28 md:w-48"
          onClick={() => router.push('/')}
          src={assets.logo}
          alt="logo"
        />
        {/* menu desktop */}
        <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
          {menuItems.map((item, index) => {
            const activePath = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`hover:text-gray-950 transition ${activePath ? 'underline decoration-orange-500' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
          {isSeller && (
            <button
              onClick={() => router.push('/seller')}
              className="text-xs border px-4 py-1.5 rounded-full"
            >
              Seller Dashboard
            </button>
          )}
        </div>
        <ul className="hidden md:flex items-center gap-4 ">
          <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
          <button className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
          <Link href="/cart" className="hover:text-gray-900 transition text-orange-500">
            <button className="flex items-center gap-2 hover:text-gray-900 transition">
              <Image src={assets.cart_icon} alt="user icon" />
              Cart
            </button>
          </Link>
        </ul>
        {/* -------------------------mobile menu------------------------------- */}
        <div className="flex items-center md:hidden gap-3">
          {/* Account button */}
          <button className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>

          {/* Cart button */}
          <Link href="/cart">
            <button className="flex items-center gap-2 text-orange-500 hover:text-gray-900 transition">
              <Image src={assets.cart_icon} alt="cart icon" className="hover:bg-orange-500" />
              Cart
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;