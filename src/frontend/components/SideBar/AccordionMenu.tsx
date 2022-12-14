import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type AccordionMenuProps = {
  title: string;
  icon: React.ReactNode;
  path: string;
};

const AccordionMenu = ({ title, icon, path }: AccordionMenuProps) => {
  const router = useRouter();
  const isOpen = router.asPath == path;
  return (
    <Link href={path}>
      <div
        className={`relative flex flex-row items-center justify-center lg:justify-between cursor-pointer 
        font-semibold py-3 px-6 transition-all duration-500 
        ${
          isOpen
            ? "bg-primary-100 rounded-xl lg:rounded-r-3xl text-primary-400 lg:rounded-br-[6rem]"
            : "text-gray-400"
        }`}
      >
        <div
          className={`hidden lg:block transition-all duration-500 absolute bg-primary-500 h-full left-0 rounded-r-lg
          ${isOpen ? "w-2" : "w-0"}
          `}
        />
        <div className="w-8">{icon}</div>
        <span className="hidden lg:block">{title}</span>
        <div
          className={`transition duration-500 hidden lg:block ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <ChevronRightIcon className="ml-1 w-7" />
        </div>
      </div>
    </Link>
  );
};

export default AccordionMenu;
