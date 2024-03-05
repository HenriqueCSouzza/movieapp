"use client";
import { useState } from "react";
import NavLink from "next/link";
import React from "react";

const linkList = [
  {
    label: {
      "en-US": "Home",
      "pt-BR": "Início",
    },
    link: "/",
    testId: "first-link-menu",
  },
  {
    label: {
      "en-US": "About",
      "pt-BR": "Sobre",
    },
    testId: "second-link-menu",
    link: "/about",
  },
  {
    label: {
      "en-US": "Projects",
      "pt-BR": "Projetos",
    },
    link: "/projects",
    testId: "thurd-link-menu",
  },
];
function Header() {
  return (
    <header
      role="reading"
      className="sticky container mx-auto max-width py-2 md:py-10 top-0 z-50 w-full"
    >
      <div className="flex items-center justify-between">
        <NavLink
          href="/"
          className="text-base sm:text-lg text-gradient md:text-lg xl:text-lg xl:leading-tight font-bold"
        >
          {"{ Henrique Souza }"}
        </NavLink>
        <nav className={`text-center flex `}>
          <ul
            role="list"
            className="dark:text-light-content font-medium flex gap-2 items-center md:space-x-5 md:mr-10"
          >
            {linkList.map(({ label, link, testId }, index) => (
              <li
                key={`${label}-${index}`}
                className="font-light text-base sm:text-lg"
              >
                <NavLink href={link} role="link" data-testid={testId}>
                  {label["pt-BR"]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
