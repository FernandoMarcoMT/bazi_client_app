"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User, ChevronLeft } from "lucide-react";
import ButtonShaped from "./button-shaped";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Day Master Characters",
      href: "/#day-master-characters",
      dropdown: [
        { name: "Character A", href: "#character-a" },
        { name: "Character B", href: "#character-b" },
        { name: "Character C", href: "#character-c" },
      ],
    },
    {
      name: "Discover",
      href: "/#about-us",
      dropdown: [
        { name: "Character A", href: "#character-a" },
        { name: "Character B", href: "#character-b" },
        { name: "Character C", href: "#character-c" },
      ],
    },
    { name: "Product & Services", href: "/#product-services" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 w-full z-50 duration-300 py-[16px] md:py-[28px] px-[24px] xl:px-14 2xl:px-40 shadow-lg shadow-black/10",
        scrolled
          ? `${
              pathname.includes("other-result")
                ? "bg-[#2B0502]/60"
                : "bg-primary/65"
            } backdrop-blur-lg`
          : `${
              pathname.includes("other-result") ? "bg-[#2D0501]" : "bg-primary"
            } backdrop-blur-none`
      )}
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        {(pathname === "/calculator" || pathname.includes("/auth")) && (
          <Link href="/" className="xl:hidden">
            <ChevronLeft className="size-8" />
          </Link>
        )}

        <Link
          href="/"
          className={cn(
            "text-xl md:text-2xl font-bold text-amber-400",
            pathname === "/calculator" || pathname.includes("/auth")
              ? "hidden xl:block"
              : ""
          )}
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-amber-400 flex items-center justify-center">
              <span className="text-blue-950 font-bold text-lg md:text-xl">
                B
              </span>
            </div>
            Bazi
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-[52px]">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <div className="text-typography transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>{link.name}</span>
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </div>
                <div className="absolute top-full left-0 mt-2 w-48 bg-blue-950/95 backdrop-blur-sm rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-typography hover:bg-amber-400/10 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(subItem.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-typography"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </Link>
            )
          )}

          {/* Login and Calculate Birth Now Buttons */}
          <div className="flex items-center gap-[52px]">
            <Link
              href="/auth/sign-in"
              className="text-white hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <User className="size-4 text-typography" />
              <p className="text-typography">Sign Up / Login</p>
            </Link>
            <Link href="/calculator">
              <ButtonShaped
                text="Calculate Birth Now"
                variant={pathname.includes("other-result") ? "light" : theme}
                buttonClassName="h-[60px]"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-blue-950/95 backdrop-blur-sm">
          <div className="w-full max-w-7xl mx-auto px-[24px] pt-4 pb-[24px] flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <button
                    className="text-white hover:text-amber-400 transition-colors flex items-center space-x-1 w-full text-left py-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 flex flex-col space-y-2">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-white hover:text-amber-400 transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .querySelector(subItem.href)
                              ?.scrollIntoView({ behavior: "smooth" });
                            setIsOpen(false);
                            setDropdownOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-amber-400 transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              )
            )}
            {/* Mobile Login and Calculate Birth Now */}
            <Link
              href="#login"
              className="text-white hover:text-amber-400 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#login")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Login
            </Link>
            <Link href="/calculator" className="">
              Calculate Birth Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
