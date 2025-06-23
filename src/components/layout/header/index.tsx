import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "../../ui/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [{ path: "/home", label: t("nav.home") }];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/home" className="text-2xl font-bold text-blue-600">
            {t("app.name")} giang
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
