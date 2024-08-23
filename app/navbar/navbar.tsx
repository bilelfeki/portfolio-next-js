"use client";

import Button from "../shared/button";
import Logo from "./logo";

export default function Navbar() {
  const navLinks = [
    { href: "/about", name: "About" },
    { href: "/blog", name: "Blog" },
  ];
  return (
    <nav className="flex justify-end">
      <div className="flex justify-end mr-32 mt-10">
        <Logo></Logo>
        <Button className="" name="About me" link="about"></Button>
        <Button className="" name="Skills" link="about"></Button>
        <Button className="" name="Portfolio" link="about"></Button>
        <Button className="" name="CONTACT ME" link="about"></Button>
      </div>
    </nav>
  );
}
