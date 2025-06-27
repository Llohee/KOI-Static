import { LOCALES_DEFAULT, LOCALES_LIST } from "@/constants/language";
import { useSearchParams, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LanguageRedirect = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const lang = searchParams.get("lang");
  
  // Only redirect if we're on the root path and there's no valid lang param
  if (location.pathname === "/" && (!lang || !LOCALES_LIST.includes(lang))) {
    return <Navigate to={`/?lang=${LOCALES_DEFAULT}`} replace />;
  }

  return null;
};

export default LanguageRedirect;
