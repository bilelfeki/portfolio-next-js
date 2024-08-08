"use client";

import Link from "next/link";
import Button from "../shared/button";
import Logo from "./logo";

export default function Navbar() {
  const navLinks = [
    { href: "/about", name: "About" },
    { href: "/profile", name: "Blog" },
  ];
  return (
    <nav className="flex justify-end">
      <div className="flex justify-end mr-32 mt-10">
        <Logo></Logo>
        <Button className="" name="About me" link="skills"></Button>
        <Button className="" name="Skills" link="skills"></Button>
        <Button className="" name="Portfolio" link="skills"></Button>
        <Button className="" name="CONTACT ME" link="about"></Button>
      </div>
    </nav>
  );
}
