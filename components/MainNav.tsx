"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();
    
    const routes = [
        {
            href: `/${params.storeId}`,
            label: "Dashboard",
            isActive: pathname === `/${params.storeId}`,
        },
        {
            href: `/${params.storeId}/billboards`,
            label: "Billboards",
            isActive: pathname === `/${params.storeId}/billboards`,
        },
        {
            href: `/${params.storeId}/categories`,
            label: "Categories",
            isActive: pathname === `/${params.storeId}/categories`,
        },
        {
            href: `/${params.storeId}/sizes`,
            label: "Sizes",
            isActive: pathname === `/${params.storeId}/sizes`,
        },
        {
            href: `/${params.storeId}/colors`,
            label: "Colors",
            isActive: pathname === `/${params.storeId}/colors`,
        },
        {
            href: `/${params.storeId}/settings`,
            label: "Settings",
            isActive: pathname === `/${params.storeId}/settings`,
        },
    ];

    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", route.isActive ? "text-black dark:text-white" : "text-muted-foreground")}>
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};