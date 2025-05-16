"use client";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const links = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { name: "Invoices", icon: DocumentDuplicateIcon, href: "/settings" },
  { name: "Customers", icon: UserGroupIcon, href: "/profile" },
];

export default function NavLink() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3clsx",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <Icon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
