'use client'
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Music", href: "/music" },
  { name: "Marketing", href: "/marketing" },
  { name: "Gallery", href: "/gallery" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="absolute right-0 md:hidden">
      <button onClick={toggle} className={clsx({
        "hidden": isOpen === true,
        "pe-5": true,
        "pt-3": true
      })}>
        <IconContext.Provider value={{ className: "shared-class", size: "30" }}>
          <RxHamburgerMenu />
        </IconContext.Provider>
      </button>
      <div 
        className={clsx({
          "hidden": isOpen === false,
          "w-screen": true,
          "h-screen": true
        })}
        style={{"backgroundColor": "#370C10"}}
      >
        <button onClick={toggle} className={clsx({
            "hidden": isOpen === false,
            "absolute": true,
            "right-0": true,
            "pe-5": true,
            "pt-3": true
          })}>
          <IconContext.Provider value={{ className: "shared-class", size: "30" }}>
            <RxCross2 />
          </IconContext.Provider>
        </button>
        <div className={clsx({
          "flex": true,
          "flex-col": true,
          "items-end": true,
          "pt-12": true,
          "pe-2": true
        })}>
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  {
                    "text-[#71bae7]": pathname === link.href,
                    "pt-1": true
                  }
                )}
              >
                <p className="px-5">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}