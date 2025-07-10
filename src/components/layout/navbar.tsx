"use client";

import Link from "next/link";
import {useState, useCallback} from "react";
import {usePathname, useRouter} from "next/navigation";
import {Menu, X, UserCircle, LogOut} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {useSession, signOut} from "next-auth/react";
import ThemeToggle from "../ui/themeToggle";
import {useAppSelector, useAppDispatch} from "@/redux/hooks";
import {logout} from "@/redux/Slices/userSlice";

const navLinks = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Services", href: "/services"},
  {name: "Contact", href: "/contact"},
];

const NavLink = ({name, href, isActive, onClick}: any) => (
  <Link
    href={href}
    onClick={onClick}
    className="app relative block hover:text-blue-600 dark:hover:text-blue-400 transition"
  >
    {name}
    {isActive && (
      <motion.span
        layoutId="underline"
        className="app absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded"
      />
    )}
  </Link>
);

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const {data: session} = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const {isLoggedIn, currentUser} = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    await signOut({redirect: false});
    dispatch(logout());
    router.push("/auth/login");
  };

  return (
    <motion.nav
      initial={{y: -30, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.3}}
      className="app bg-[#f8fafc] dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 shadow-md fixed w-full z-50"
    >
      <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="app text-2xl font-bold text-cyan-400 dark:text-blue-400"
        >
          GlobalCare
        </Link>

        {/* Desktop Navigation */}
        <ul className="app hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="app"
            >
              <NavLink
                name={link.name}
                href={link.href}
                isActive={pathname === link.href}
              />
            </li>
          ))}

          {session || isLoggedIn ? (
            <>
              <li className="app">
                <Link
                  href={`/${currentUser?.role.toLowerCase()}/${currentUser?.username}`}
                  className="app flex items-center gap-1"
                >
                  <UserCircle className="app w-5 h-5" />
                  <span className="app">
                    {session?.user?.name || currentUser?.username}
                  </span>
                </Link>
              </li>
              <li className="app">
                <button
                  onClick={handleLogout}
                  className="app flex items-center gap-1 hover:text-red-600"
                >
                  <LogOut className="app w-4 h-4" /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="app">
                <Link
                  href="/auth/login"
                  className="app"
                >
                  Login
                </Link>
              </li>
              <li className="app">
                <Link
                  href="/auth/signup"
                  className="app px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </li>
            </>
          )}
          <li className="app">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="app md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="app text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, scaleY: 0.95}}
            animate={{opacity: 1, scaleY: 1}}
            exit={{opacity: 0, scaleY: 0.95}}
            transition={{duration: 0.2}}
            className="app md:hidden bg-[#f8fafc] dark:bg-[#0f172a] px-4 py-4 space-y-3 shadow origin-top"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                href={link.href}
                isActive={pathname === link.href}
                onClick={closeMenu}
              />
            ))}

            {session ? (
              <>
                <div className="app flex items-center gap-2">
                  <Link
                    href={`/${currentUser?.role.toLowerCase()}/${currentUser?.username}`}
                    className="app flex items-center gap-1"
                  >
                    <UserCircle className="app w-5 h-5" />
                    <span className="app">{session.user?.name || "User"}</span>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="app flex items-center gap-1 text-red-600"
                >
                  <LogOut className="app w-4 h-4" /> Logout
                </button>
              </>
            ) : (
              <>
                <div className="app flex flex-col gap-2">
                  <Link
                    href="/auth/login"
                    onClick={closeMenu}
                    className="app block text-center w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={closeMenu}
                    className="app block text-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
