'use-client'
import React from "react";
import Link from "next/link";
import {sidebarLinks} from "@/utils/constant"
import Image from "next/image";

interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="flex flex-col w-1/6 h-screen p-5 bg-secondaryblue">
      <div>Inter-act</div>
      <div className="flex flex-col pt-7">
        {sidebarLinks.map((link) => (
            <Link key={link.url}
            className="flex flex-row text-gray-500 text-base mb-1 font-medium leading-normal px-2 py-3 active:bg-gray-700 hover:bg-hoverblue hover:rounded-lg"
            href={link.url}
          >
            <Image src={link.icon} width={20} height={20} alt={link.title} className="mr-2"/>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
