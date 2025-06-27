import i18n from "@/i18n/18n";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { LOCALES_LIST_PLUS } from "../../constants/language";
import { useLanguageSync } from "@/i18n/routing";
import Button from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const LanguageSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentLanguage: currentLang } = useLanguageSync();

  const currentLanguage = LOCALES_LIST_PLUS.find(
    (lang) => lang.code === currentLang
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button styleBtn={"outline"} className="!px-4">
          <span className="text-base">{currentLanguage?.flag}</span>
          <span className="flex-1 text-left">{currentLanguage?.name}</span>
          <ChevronDown className="h-4 w-4 text-xs transition-transform duration-200" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {LOCALES_LIST_PLUS.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`flex items-center gap-2 ${
              currentLang === language.code
                ? "bg-brand text-white"
                : ""
            }`}
            onClick={() => {
              const params = Object.fromEntries(searchParams.entries());
              i18n.changeLanguage(language.code);
              params.lang = language.code;
              setSearchParams(params);
            }}
          >
            <span className="text-base w-5 text-center">{language.flag}</span>
            <span className="flex-1 text-button-3">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
