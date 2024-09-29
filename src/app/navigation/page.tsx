"use client"
import { useState } from "react"
import Navbar from "./navbar/page"
import Sidebar from "./sidebar/page"

export default function Navigation(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle}/>
    </>
  );
}