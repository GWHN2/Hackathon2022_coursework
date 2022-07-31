import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type AccordionMenuProps = {
  title: string;
  icon: React.ReactNode;
  items: {
    name: string;
    path: string;
    query?: string;
  }[];
  isClose?: boolean;
};

const AccordionMenu = ({ title, icon, items, isClose }: AccordionMenuProps) => {
  const [isOpen, setIsOpen] = useState(isClose ? false : true);
  const router = useRouter();

  return (
    <div>
      <div
        className={`relative flex flex-row items-center justify-center lg:justify-between cursor-pointer 
        font-semibold py-3 px-6 transition-all duration-500 
        ${
          isOpen
            ? "bg-primary-100 text-primary-400 rounded-xl lg:rounded-r-3xl lg:rounded-br-[6rem]"
            : "text-gray-400"
        }`}
        onClick={() => setIsOpen(!isOpen)}
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
          <ChevronRightIcon className="w-7 ml-1" />
        </div>
      </div>
      <ul
        className={`transition-all duration-500 leading-7 font-normal overflow-hidden ${
          isOpen ? "max-h-screen py-2" : "max-h-0"
        }`}
      >
        {items.map((element, index) => (
          <li
            key={index}
            className="accordion-item flex flex-row items-center ml-4 my-3 rounded text-gray-400 px-6 w-full cursor-pointer"
          >
            <div className="dash transition-all duration-500 " />
            <div
              className={` 
              ml-8
              ${
                element.query
                  ? router.query.id === element.query && "text-primary-500"
                  : router.asPath == element.path && "text-primary-500"
              }`}
            >
              <div
                className="flex flex-row items-center justify-between"
                onClick={() => {
                  router.push(
                    {
                      pathname: element.path,
                      query: { id: element.query },
                    },
                    element.path
                  );
                }}
              >
                {element.name}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordionMenu;
