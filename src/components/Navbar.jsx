import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
  <img src={assets.totalBookingIcon} alt="Bookings" className="h-4 w-4" />
);
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Artists", path: "/concerts" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contactus" },
    { name: "About", path: "/about-more" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
  setIsScrolled(false); // or true, based on your preference
}
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
            ${
              isScrolled
                ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
                : " py-4 md:py-6"
            }
              `}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${isScrolled && "invert brightness-50"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
  {link.name}
</Link>

        ))}
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled ? "text-black" : "text-white"
          } transition-all`}onClick={()=>navigate('/owner')}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`${isScrolled && "invert"} h-7 transition-all duation-500`}
        />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}

      
      <div className="flex items-center gap-3 md:hidden">
{user && (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Bookings"
              labelIcon={<BookIcon />}
              onClick={() => navigate("/bookings")}
            />
          </UserButton.MenuItems>
        </UserButton>
      )}

        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt=""
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0  bg-indigo-500 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user && (
          <button
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
