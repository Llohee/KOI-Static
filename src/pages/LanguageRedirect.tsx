import { LOCALES_DEFAULT, LOCALES_LIST } from "@/constants/language";
import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LanguageRedirect = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");
  if (!lang || !LOCALES_LIST.includes(lang)) {
    return <Navigate to={`/?lang=${LOCALES_DEFAULT}`} replace />;
  }

  return null;
};

export default LanguageRedirect;
