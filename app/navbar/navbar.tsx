"use client";

import Link from "next/link";
import Button from "../shared/button";
import {
  CanvasHTMLAttributes,
  ClassAttributes,
  JSX,
  useEffect,
  useRef,
} from "react";
import Logo from "./logo";

export default function Navbar() {
  const navLinks = [
    { href: "/about", name: "About" },
    { href: "/profile", name: "Blog" },
  ];
  return (
    <nav>
      <div className="flex justify-end mr-32 mt-10">
        <Logo></Logo>
        <Button className="" name="CONTACT ME" link="about"></Button>
        <Button className="" name="SKILLS" link="skills"></Button>
      </div>
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            {navLinks.map((navElement) => {
              return (
                <li key={navElement.name}>
                  <Link
                    href={navElement.href}
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    {navElement.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
