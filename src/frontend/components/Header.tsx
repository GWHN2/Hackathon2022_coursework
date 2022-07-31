import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import ConnectToPlug from "./ConnectToPlug";

const Header = () => {
  const router = useRouter();
  return (
    <header id="header" className="w-full bg-white drop-shadow-md">
      <div className="container flex flex-row items-center justify-between h-24 p-4">
        <div className="flex flex-row items-center justify-between">
          <Link href="/" passHref>
            <div className="relative w-40 h-8 cursor-pointer">
              {/* <Image src={logo} alt="logo" layout="fill" objectFit="contain" /> */}
            </div>
          </Link>
        </div>
        <ConnectToPlug />
      </div>
    </header>
  );
};

export default Header;
