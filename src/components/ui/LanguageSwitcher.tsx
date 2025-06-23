import { LOCALES_LIST_PLUS } from "../../constants/language";
import { useSearchParams } from "react-router-dom";
import i18n from "@/i18n/18n";

const LanguageSwitcher = () => {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="relative inline-block">
      <div className="relative group">
        <button
          className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md cursor-pointer text-sm min-w-[120px] transition-all group-hover:border-blue-500 group-hover:shadow-md"
          type="button"
        >
          <span className="text-base">
            {
              LOCALES_LIST_PLUS.find((lang) => lang.code === i18n.language)
                ?.flag
            }
          </span>
          <span className="flex-1 text-left">
            {
              LOCALES_LIST_PLUS.find((lang) => lang.code === i18n.language)
                ?.name
            }
          </span>
          <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
            ▼
          </span>
        </button>
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all z-50 mt-1">
          {LOCALES_LIST_PLUS.map((language) => (
            <button
              key={language.code}
              className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors ${
                i18n.language === language.code
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              } ${i18n.language === language.code ? "font-semibold" : ""}`}
              onClick={() => setSearchParams({ lang: language.code })}
              type="button"
            >
              <span className="text-base w-5 text-center">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
