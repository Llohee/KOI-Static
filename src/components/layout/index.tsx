import { Outlet } from "react-router-dom";
import Header from "./header";
import LanguageRedirect from "@/pages/LanguageRedirect";
import { useLanguageSync } from "@/i18n/routing";
import { Toaster } from "../ui/sonner";

export default function Layout() {
  useLanguageSync();
  return (
    <div className="w-full min-h-screen bg-brand-background text-body-2">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <Header />
        </div>
      </header>
      <main className="flex-1">
        <LanguageRedirect />
        <Outlet />
      </main>
    </div>
  );
}
