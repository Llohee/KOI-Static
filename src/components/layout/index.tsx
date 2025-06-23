import { Outlet } from "react-router-dom";
import Header from "./header";
import LanguageRedirect from "@/pages/LanguageRedirect";
import { useLanguageSync } from "@/i18n/routing";

export default function Layout() {
  useLanguageSync();
  return (
    <div className="w-full min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
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
