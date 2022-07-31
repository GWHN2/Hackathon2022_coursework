import {
  CubeIcon,
  CubeTransparentIcon,
  PhotographIcon,
  PlusCircleIcon,
  TableIcon,
} from "@heroicons/react/outline";
import { HomeIcon, InformationCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AccordionMenu from "./AccordionMenu";

const SideBar = () => {
  const menuItem = [
    {
      title: "Customer",
      icon: <TableIcon />,
      path: "/customer-list",
    },
    {
      title: "NFT",
      icon: <PhotographIcon />,
      path: "/my-nft",
    },
    {
      title: "Create NFT",
      icon: <PlusCircleIcon />,
      path: "/create-nft",
    },
  ];

  return (
    <div
      id="SideBar"
      className="fixed left-0 z-20 w-1/6 h-screen overflow-scroll transition-all duration-1000 bg-white drop-shadow-xl sm:max-w-full max-w-0"
    >
      <div className="flex flex-col py-2">
        <div className="flex flex-col items-center h-24">
          <Link href="/" passHref>
            <CubeTransparentIcon className="w-16 h-16 cursor-pointer text-primary-400" />
          </Link>
        </div>
        <div className={`pr-2 flex flex-col items-start justify-between`}>
          {menuItem.map((item, index) => (
            <div key={index} className="w-full">
              <AccordionMenu
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
