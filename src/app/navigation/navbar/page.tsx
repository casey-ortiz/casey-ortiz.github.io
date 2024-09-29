'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { IconContext } from "react-icons";
import { TbMusicDown } from "react-icons/tb";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Music", href: "/music" },
  { name: "Marketing", href: "/marketing" },
  { name: "Gallery", href: "/gallery" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  const pathname = usePathname();
  return (
    <>
      <div className={clsx(
        {
          "hidden": isOpen === true,
          "flex": true,
          "justify-end": true,
          "pe-2": true,
          "md:hidden": true,
        }
      )}>
        <button type="button" onClick={toggle}>
          <IconContext.Provider value={{ className: "shared-class", size: "40" }}>
            <TbMusicDown />
          </IconContext.Provider>
        </button>
      </div>
      <div 
        className="hidden md:flex fixed justify-end top-0 left-0 right-0 py-2" 
        style={{
          backgroundColor: "#370C10",
          fontFamily: "Montserrat"
        }}
      >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                {
                  "text-[#71bae7]": pathname === link.href,
                }
              )}
            >
              <p className="px-5">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}