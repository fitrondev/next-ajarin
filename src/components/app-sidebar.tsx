"use client";

import {
  BookMarked,
  LayoutDashboard,
  SquarePlus,
  UserRoundCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./common/Logo";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Tambah Kursus",
    url: "/dashboard/tambah-kursus",
    icon: SquarePlus,
  },
  {
    title: "Kursus Saya",
    url: "/dashboard/daftar-kursus",
    icon: BookMarked,
  },
  {
    title: "Siswa Terdaftar",
    url: "/dashboard/siswa-terdaftar",
    icon: UserRoundCheck,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="space-y-4">
            <div>
              <Logo />
            </div>

            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname === `${item.url}`}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
