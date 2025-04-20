"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./AdminHeader";

const HeaderOrSidebar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const isAdminPage = pathname.startsWith("/admin") || pathname.startsWith("/dashboard");

  return (
    <>
      {isAdminPage ? <Sidebar /> : <Header />}
    </>
  );
};

export default HeaderOrSidebar;
