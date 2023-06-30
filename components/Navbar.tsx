"use client";

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./MainNav";

interface NavbarProps {};

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    Store switcher
                </div>
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;