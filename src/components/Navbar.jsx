import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import images from "./../constants/images";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuMotion } from "react-icons/cg";
import "./navbar.css";
import { MdClose } from "react-icons/md";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "Customer", link: "/customer" },
  { title: "Gallery", link: "/gallery" },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6"
      >
        <header className="absolute w-full -translate-y-1/2 top-1/2">
          <nav className="flex items-center justify-between p-4 size-full">
            {/* Logo and Product button */}
            <div className="flex items-center gap-7">
              <img src={images.logo} alt="logo" className="w-28 " />
            </div>

            {/* Navigation Links  */}
            {/* <div className="flex items-center h-full"> */}
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link key={index} to={item.link} className="nav-hover-btn">
                  {item.title}
                </Link>
              ))}
            </div>
            {/* </div> */}

            <div className="block md:hidden">
              <CgMenuMotion
                className="cursor-pointer"
                color="white"
                size={30}
                onClick={() => setShowMenu(true)}
              />
            </div>
          </nav>
        </header>
      </div>

      {/* Menu overlay */}
      <div
        className={
          showMenu
            ? "  bg-black absolute top-0 left-0 size-full z-50 transition-all duration-300 ease-in-out"
            : "left-[-100%] absolute"
        }
      >
        <span
          className="absolute cursor-pointer top-16 right-16"
          onClick={() => setShowMenu(false)}
        >
          <MdClose color="white" size={30}  />
        </span>
        <ul className="flex flex-col items-center justify-center gap-8 text-blue-100 size-full navbar-links font-zentry">
          <li>
            <Link to="/" className="link" onClick={() => setShowMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/customer"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Customer
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
