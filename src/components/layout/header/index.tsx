import LanguageSwitcher from "../../ui/LanguageSwitcher";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <img src="/images/logo.png" alt="logo" className="w-20 h-20 " />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
